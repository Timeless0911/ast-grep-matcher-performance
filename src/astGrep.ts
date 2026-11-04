import { parseAsync, type NapiConfig } from '@ast-grep/napi';
import type { ModuleMatch } from './types.ts';

const specifier = { pattern: '$IMP', kind: 'string_fragment' };

// The rule used by `redirectDtsImports` in rsbuild-plugin-dts.
const matcher: NapiConfig = {
  rule: {
    any: [
      // import foo from 'bar'
      { kind: 'import_statement', has: { field: 'source', has: specifier } },
      // import foo = require('bar')
      {
        kind: 'import_statement',
        has: {
          kind: 'import_require_clause',
          has: { field: 'source', has: specifier },
        },
      },
      // export { foo } from 'bar'
      { kind: 'export_statement', has: { field: 'source', has: specifier } },
      // require('foo') / import('foo')
      {
        any: [{ pattern: 'require($A)' }, { pattern: 'import($A)' }],
        has: { field: 'arguments', has: { has: specifier } },
      },
    ],
  },
};

export async function matchAstGrep(content: string): Promise<ModuleMatch[]> {
  const root = (await parseAsync('typescript', content)).root();
  return root.findAll(matcher).map((match) => {
    const node = match.getMatch('IMP')!;
    const range = node.range();
    return { n: node.text(), s: range.start.index, e: range.end.index };
  });
}

/** Number of ERROR nodes in the tree-sitter tree, to explain mismatches. */
export async function countAstGrepErrors(content: string): Promise<number> {
  const root = (await parseAsync('typescript', content)).root();
  return root.findAll({ rule: { kind: 'ERROR' } }).length;
}
