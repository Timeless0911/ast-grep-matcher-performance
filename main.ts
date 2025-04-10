import { parseAsync, type NapiConfig } from "@ast-grep/napi";
import fsP from "node:fs/promises";

const matcher: NapiConfig = {
  rule: {
    kind: "string_fragment",
    any: [
      {
        inside: {
          stopBy: "end",
          kind: "import_statement",
          field: "source",
        },
      },
      {
        inside: {
          stopBy: "end",
          kind: "export_statement",
          field: "source",
        },
      },
      {
        inside: {
          kind: "string",
          inside: {
            kind: "arguments",
            inside: {
              kind: "call_expression",
              has: {
                field: "function",
                regex: "^(import|require)$",
              },
            },
          },
        },
      },
    ],
  },
};

async function runTest(filePath) {
  const startTime = Date.now();
  const content = await fsP.readFile(filePath, "utf-8");
  const sgNode = (await parseAsync("typescript", content)).root();
  const matchModule = sgNode.findAll(matcher).map((matchNode) => ({
    n: matchNode.text(),
    s: matchNode.range().start.index,
    e: matchNode.range().end.index,
  }));
  const endTime = Date.now();
  return {
    file: filePath,
    time: endTime - startTime,
    matches: matchModule,
  };
}

const files = [
  "./file/less-import-no-format.d.ts",
  "./file/less-import-format.d.ts",
  "./file/much-import-no-format.d.ts",
  "./file/much-import-format.d.ts",
];

(async () => {
  for (const file of files) {
    try {
      const result = await runTest(file);
      console.log(`File: ${result.file}, Time: ${result.time}ms`);
    } catch (err) {
      console.error(err);
    }
  }
})();
