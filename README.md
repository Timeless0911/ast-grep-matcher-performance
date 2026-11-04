# ast-grep-matcher-performance

Compares two ways to find module specifiers in declaration files, as done by `redirectDtsImports` in `rsbuild-plugin-dts`:

- `@ast-grep/napi`: tree-sitter parse plus the matcher rule used by the plugin today ([src/astGrep.ts](src/astGrep.ts)).
- `@swc-next/parser` + `@swc-next/walker`: `parseSync` with `lang: 'dts'` plus an ESTree walk ([src/swcNext.ts](src/swcNext.ts)).

Both return the specifier text and its UTF-16 offsets inside the quotes. The fixtures are in [file/](file).

## Usage

Requires Node.js 22.18 or later, which runs TypeScript files directly.

```sh
pnpm install
pnpm diff       # compare the matches of both implementations
pnpm bench      # measure both implementations
pnpm typecheck
```

`pnpm bench` accepts `WARMUP` and `RUNS` environment variables (defaults: 5 and 30). Each measurement covers parsing and collecting matches.

## Results

Node v26.5.1, darwin arm64, Apple M5 Pro. `@ast-grep/napi` 0.51.0, `@swc-next/parser` 0.5.0, `@swc-next/walker` 0.5.0.

### Speed

5 warmup runs, 30 measured runs, median / p90 in ms.

| File | Size | ast-grep | swc-next | Speedup |
| --- | ---: | ---: | ---: | ---: |
| less-import-format.d.ts | 451 KB | 19.9 / 20.4 | 1.9 / 2.9 | 10.3x |
| less-import-no-format.d.ts | 246 KB | 17.1 / 17.5 | 1.7 / 2.2 | 10.2x |
| much-import-format.d.ts | 503 KB | 79.2 / 80.7 | 1.9 / 3.5 | 41.3x |
| much-import-no-format.d.ts | 271 KB | 70.8 / 71.5 | 1.7 / 2.7 | 40.8x |
| zod-types.d.ts | 227 KB | 65.1 / 67.5 | 1.3 / 2.7 | 51.6x |
| All files, Promise.all | 1697 KB | 86.7 / 105.1 | 9.0 / 10.2 | 9.7x |

`parseAsync` from ast-grep runs on the libuv thread pool, so files are parsed in parallel under `Promise.all`. `parseSync` from swc-next runs on the main thread, one file at a time.

### Matches

| File | ast-grep matches | swc-next matches | Only ast-grep | Only swc-next | tree-sitter ERROR nodes | swc-next diagnostics |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| less-import-format.d.ts | 9 | 9 | 0 | 0 | 0 | 0 |
| less-import-no-format.d.ts | 9 | 9 | 0 | 0 | 0 | 0 |
| much-import-format.d.ts | 1690 | 2145 | 0 | 455 | 3005 | 0 |
| much-import-no-format.d.ts | 1984 | 2145 | 0 | 161 | 2574 | 0 |
| zod-types.d.ts | 1242 | 1361 | 0 | 119 | 2269 | 0 |

swc-next finds every specifier that ast-grep finds. The extra ones are all `import("zod")` type references, for example:

```ts
runtime: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, ...]>>;
```

tree-sitter does not parse the nested type arguments in these files correctly. It reads parts of them as binary expressions, so the `import("zod")` there is not recognized and ast-grep skips it. The same three files are also where ast-grep is much slower.
