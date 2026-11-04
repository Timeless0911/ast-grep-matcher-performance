import { countAstGrepErrors, matchAstGrep } from './astGrep.ts';
import { loadFixtures } from './files.ts';
import { countSwcNextDiagnostics, matchSwcNext } from './swcNext.ts';
import type { ModuleMatch } from './types.ts';

const SAMPLES = Number(process.env.SAMPLES ?? 3);

const key = ({ n, s, e }: ModuleMatch): string => `${s}:${e}:${n}`;

function context(content: string, { s, e }: ModuleMatch): string {
  const before = content.slice(Math.max(0, s - 50), s).replace(/\s+/g, ' ');
  const after = content.slice(e, e + 20).replace(/\s+/g, ' ');
  return `…${before}${content.slice(s, e)}${after}…`;
}

let identical = true;

console.log(
  '| File | ast-grep matches | swc-next matches | Only ast-grep | Only swc-next | tree-sitter ERROR nodes | swc-next diagnostics |',
);
console.log('| --- | ---: | ---: | ---: | ---: | ---: | ---: |');

const details: string[] = [];
for (const { name, content } of loadFixtures()) {
  const astGrep = await matchAstGrep(content);
  const swcNext = await matchSwcNext(content);
  const astGrepKeys = new Set(astGrep.map(key));
  const swcNextKeys = new Set(swcNext.map(key));
  const onlyAstGrep = astGrep.filter((m) => !swcNextKeys.has(key(m)));
  const onlySwcNext = swcNext.filter((m) => !astGrepKeys.has(key(m)));
  if (onlyAstGrep.length || onlySwcNext.length) identical = false;

  console.log(
    `| ${name} | ${astGrep.length} | ${swcNext.length} | ${onlyAstGrep.length} | ${onlySwcNext.length} | ${await countAstGrepErrors(content)} | ${countSwcNextDiagnostics(content)} |`,
  );

  for (const [label, list] of [
    ['only ast-grep', onlyAstGrep],
    ['only swc-next', onlySwcNext],
  ] as const) {
    for (const match of list.slice(0, SAMPLES)) {
      details.push(`${name} (${label}) @${match.s}: ${context(content, match)}`);
    }
  }
}

if (details.length) {
  console.log('\nSamples:\n');
  for (const line of details) console.log(`- \`${line}\``);
}

console.log(identical ? '\nAll matches are identical.' : '\nMatches differ.');
