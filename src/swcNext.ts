import { parseSync, type Expression, type Node } from '@swc-next/parser';
import { walk } from '@swc-next/walker';
import type { ModuleMatch } from './types.ts';

// The same logic as the `@swc-next/parser` based `redirectDtsImports`
// proposed for rsbuild-plugin-dts.
export async function matchSwcNext(content: string): Promise<ModuleMatch[]> {
  const { program } = parseSync(content, { lang: 'dts', errorRecovery: true });
  const matches: ModuleMatch[] = [];
  const add = (node: Expression | null | undefined): void => {
    if (node?.type !== 'Literal' || typeof node.value !== 'string') return;
    // A string literal's span includes its quotes.
    matches.push({ n: node.value, s: node.start + 1, e: node.end - 1 });
  };

  walk<typeof program, unknown, Node>(program, {
    ImportDeclaration(node) {
      add(node.source);
    },
    ExportNamedDeclaration(node) {
      add(node.source);
    },
    ExportAllDeclaration(node) {
      add(node.source);
    },
    TSExternalModuleReference(node) {
      add(node.expression);
    },
    TSImportType(node) {
      add(node.source);
    },
    ImportExpression(node) {
      add(node.source);
    },
    CallExpression(node) {
      if (node.callee.type === 'Identifier' && node.callee.name === 'require') {
        const [argument] = node.arguments;
        if (argument && argument.type !== 'SpreadElement') add(argument);
      }
    },
  });

  return matches;
}

/** Number of parser diagnostics, to make sure every file parses cleanly. */
export function countSwcNextDiagnostics(content: string): number {
  return parseSync(content, { lang: 'dts', errorRecovery: true }).diagnostics
    .length;
}
