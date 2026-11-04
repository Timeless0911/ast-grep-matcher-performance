import os from 'node:os';
import { matchAstGrep } from './astGrep.ts';
import { loadFixtures } from './files.ts';
import { matchSwcNext } from './swcNext.ts';

const WARMUP = Number(process.env.WARMUP ?? 5);
const RUNS = Number(process.env.RUNS ?? 30);

interface Stats {
  median: number;
  p90: number;
}

function stats(samples: number[]): Stats {
  const sorted = [...samples].sort((a, b) => a - b);
  return {
    median: sorted[Math.floor(sorted.length / 2)]!,
    p90: sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * 0.9))]!,
  };
}

async function measure(run: () => Promise<unknown>): Promise<Stats> {
  for (let i = 0; i < WARMUP; i++) await run();
  const samples: number[] = [];
  for (let i = 0; i < RUNS; i++) {
    const start = performance.now();
    await run();
    samples.push(performance.now() - start);
  }
  return stats(samples);
}

const ms = (value: number): string => value.toFixed(1);
const cell = ({ median, p90 }: Stats): string => `${ms(median)} / ${ms(p90)}`;

const fixtures = loadFixtures();

console.log(
  `Node ${process.version}, ${os.platform()} ${os.arch()}, ${os.cpus()[0]?.model ?? 'unknown CPU'}`,
);
console.log(`${WARMUP} warmup runs, ${RUNS} measured runs, median / p90 in ms\n`);

console.log('| File | Size | ast-grep | swc-next | Speedup |');
console.log('| --- | ---: | ---: | ---: | ---: |');
for (const { name, content } of fixtures) {
  const astGrep = await measure(() => matchAstGrep(content));
  const swcNext = await measure(() => matchSwcNext(content));
  console.log(
    `| ${name} | ${Math.round(Buffer.byteLength(content) / 1024)} KB | ${cell(astGrep)} | ${cell(swcNext)} | ${(astGrep.median / swcNext.median).toFixed(1)}x |`,
  );
}

// rsbuild-plugin-dts processes all declaration files with Promise.all.
const all = fixtures.map(({ content }) => content);
const astGrepAll = await measure(() => Promise.all(all.map(matchAstGrep)));
const swcNextAll = await measure(() => Promise.all(all.map(matchSwcNext)));
console.log(
  `| All files, Promise.all | ${Math.round(all.reduce((n, c) => n + Buffer.byteLength(c), 0) / 1024)} KB | ${cell(astGrepAll)} | ${cell(swcNextAll)} | ${(astGrepAll.median / swcNextAll.median).toFixed(1)}x |`,
);
