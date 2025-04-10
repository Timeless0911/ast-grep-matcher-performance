import type { AssetInfo } from "@rspack/binding";
import { z } from "zod";
import { Chunk } from "../Chunk";
import { ChunkGraph } from "../ChunkGraph";
import type { Compilation, PathData } from "../Compilation";
import { Module } from "../Module";
import ModuleGraph from "../ModuleGraph";
import type * as t from "./types";
import { ZodRspackCrossChecker } from "./utils";
export declare const externalsType: import("zod").ZodEnum<
  [
    "var",
    "module",
    "assign",
    "this",
    "window",
    "self",
    "global",
    "commonjs",
    "commonjs2",
    "commonjs-module",
    "commonjs-static",
    "amd",
    "amd-require",
    "umd",
    "umd2",
    "jsonp",
    "system",
    "promise",
    "import",
    "module-import",
    "script",
    "node-commonjs",
    "commonjs-import"
  ]
>;
export declare const rspackOptions: import("zod").ZodObject<
  {
    name: import("zod").ZodOptional<import("zod").ZodString>;
    dependencies: import("zod").ZodOptional<
      import("zod").ZodArray<import("zod").ZodString, "many">
    >;
    extends: import("zod").ZodOptional<
      import("zod").ZodUnion<
        [
          import("zod").ZodString,
          import("zod").ZodArray<import("zod").ZodString, "many">
        ]
      >
    >;
    entry: import("zod").ZodOptional<
      import("zod").ZodUnion<
        [
          import("zod").ZodUnion<
            [
              import("zod").ZodRecord<
                import("zod").ZodString,
                import("zod").ZodUnion<
                  [
                    import("zod").ZodUnion<
                      [
                        import("zod").ZodString,
                        import("zod").ZodArray<import("zod").ZodString, "many">
                      ]
                    >,
                    import("zod").ZodObject<
                      {
                        import: import("zod").ZodUnion<
                          [
                            import("zod").ZodString,
                            import("zod").ZodArray<
                              import("zod").ZodString,
                              "many"
                            >
                          ]
                        >;
                        runtime: import("zod").ZodOptional<
                          import("zod").ZodUnion<
                            [
                              import("zod").ZodLiteral<false>,
                              import("zod").ZodString
                            ]
                          >
                        >;
                        publicPath: import("zod").ZodOptional<
                          import("zod").ZodUnion<
                            [
                              import("zod").ZodLiteral<"auto">,
                              import("zod").ZodUnion<
                                [
                                  import("zod").ZodString,
                                  import("zod").ZodFunction<
                                    import("zod").ZodTuple<
                                      [
                                        z.Schema<
                                          PathData,
                                          import("zod").ZodTypeDef,
                                          PathData
                                        >,
                                        import("zod").ZodOptional<
                                          z.Schema<
                                            AssetInfo,
                                            import("zod").ZodTypeDef,
                                            AssetInfo
                                          >
                                        >
                                      ],
                                      import("zod").ZodUnknown
                                    >,
                                    import("zod").ZodString
                                  >
                                ]
                              >
                            ]
                          >
                        >;
                        baseUri: import("zod").ZodOptional<
                          import("zod").ZodString
                        >;
                        chunkLoading: import("zod").ZodOptional<
                          import("zod").ZodUnion<
                            [
                              import("zod").ZodLiteral<false>,
                              import("zod").ZodUnion<
                                [
                                  import("zod").ZodEnum<
                                    [
                                      "jsonp",
                                      "import-scripts",
                                      "require",
                                      "async-node",
                                      "import"
                                    ]
                                  >,
                                  import("zod").ZodString
                                ]
                              >
                            ]
                          >
                        >;
                        asyncChunks: import("zod").ZodOptional<
                          import("zod").ZodBoolean
                        >;
                        wasmLoading: import("zod").ZodOptional<
                          import("zod").ZodUnion<
                            [
                              import("zod").ZodLiteral<false>,
                              import("zod").ZodUnion<
                                [
                                  import("zod").ZodEnum<
                                    ["fetch-streaming", "fetch", "async-node"]
                                  >,
                                  import("zod").ZodString
                                ]
                              >
                            ]
                          >
                        >;
                        filename: import("zod").ZodOptional<
                          import("zod").ZodUnion<
                            [
                              import("zod").ZodString,
                              import("zod").ZodFunction<
                                import("zod").ZodTuple<
                                  [
                                    z.Schema<
                                      PathData,
                                      import("zod").ZodTypeDef,
                                      PathData
                                    >,
                                    import("zod").ZodOptional<
                                      z.Schema<
                                        AssetInfo,
                                        import("zod").ZodTypeDef,
                                        AssetInfo
                                      >
                                    >
                                  ],
                                  import("zod").ZodUnknown
                                >,
                                import("zod").ZodString
                              >
                            ]
                          >
                        >;
                        library: import("zod").ZodOptional<
                          import("zod").ZodObject<
                            {
                              amdContainer: import("zod").ZodOptional<
                                import("zod").ZodString
                              >;
                              auxiliaryComment: import("zod").ZodOptional<
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodString,
                                    import("zod").ZodObject<
                                      {
                                        amd: import("zod").ZodOptional<
                                          import("zod").ZodString
                                        >;
                                        commonjs: import("zod").ZodOptional<
                                          import("zod").ZodString
                                        >;
                                        commonjs2: import("zod").ZodOptional<
                                          import("zod").ZodString
                                        >;
                                        root: import("zod").ZodOptional<
                                          import("zod").ZodString
                                        >;
                                      },
                                      "strict",
                                      import("zod").ZodTypeAny,
                                      {
                                        commonjs?: string | undefined;
                                        commonjs2?: string | undefined;
                                        amd?: string | undefined;
                                        root?: string | undefined;
                                      },
                                      {
                                        commonjs?: string | undefined;
                                        commonjs2?: string | undefined;
                                        amd?: string | undefined;
                                        root?: string | undefined;
                                      }
                                    >
                                  ]
                                >
                              >;
                              export: import("zod").ZodOptional<
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodString,
                                    import("zod").ZodArray<
                                      import("zod").ZodString,
                                      "many"
                                    >
                                  ]
                                >
                              >;
                              name: import("zod").ZodOptional<
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodUnion<
                                      [
                                        import("zod").ZodString,
                                        import("zod").ZodArray<
                                          import("zod").ZodString,
                                          "many"
                                        >
                                      ]
                                    >,
                                    import("zod").ZodObject<
                                      {
                                        amd: import("zod").ZodOptional<
                                          import("zod").ZodString
                                        >;
                                        commonjs: import("zod").ZodOptional<
                                          import("zod").ZodString
                                        >;
                                        root: import("zod").ZodOptional<
                                          import("zod").ZodUnion<
                                            [
                                              import("zod").ZodString,
                                              import("zod").ZodArray<
                                                import("zod").ZodString,
                                                "many"
                                              >
                                            ]
                                          >
                                        >;
                                      },
                                      "strict",
                                      import("zod").ZodTypeAny,
                                      {
                                        commonjs?: string | undefined;
                                        amd?: string | undefined;
                                        root?: string | string[] | undefined;
                                      },
                                      {
                                        commonjs?: string | undefined;
                                        amd?: string | undefined;
                                        root?: string | string[] | undefined;
                                      }
                                    >
                                  ]
                                >
                              >;
                              type: import("zod").ZodUnion<
                                [
                                  import("zod").ZodEnum<
                                    [
                                      "var",
                                      "module",
                                      "assign",
                                      "assign-properties",
                                      "this",
                                      "window",
                                      "self",
                                      "global",
                                      "commonjs",
                                      "commonjs2",
                                      "commonjs-module",
                                      "commonjs-static",
                                      "amd",
                                      "amd-require",
                                      "umd",
                                      "umd2",
                                      "jsonp",
                                      "system"
                                    ]
                                  >,
                                  import("zod").ZodString
                                ]
                              >;
                              umdNamedDefine: import("zod").ZodOptional<
                                import("zod").ZodBoolean
                              >;
                            },
                            "strict",
                            import("zod").ZodTypeAny,
                            {
                              type: string;
                              name?:
                                | string
                                | string[]
                                | {
                                    commonjs?: string | undefined;
                                    amd?: string | undefined;
                                    root?: string | string[] | undefined;
                                  }
                                | undefined;
                              amdContainer?: string | undefined;
                              auxiliaryComment?:
                                | string
                                | {
                                    commonjs?: string | undefined;
                                    commonjs2?: string | undefined;
                                    amd?: string | undefined;
                                    root?: string | undefined;
                                  }
                                | undefined;
                              export?: string | string[] | undefined;
                              umdNamedDefine?: boolean | undefined;
                            },
                            {
                              type: string;
                              name?:
                                | string
                                | string[]
                                | {
                                    commonjs?: string | undefined;
                                    amd?: string | undefined;
                                    root?: string | string[] | undefined;
                                  }
                                | undefined;
                              amdContainer?: string | undefined;
                              auxiliaryComment?:
                                | string
                                | {
                                    commonjs?: string | undefined;
                                    commonjs2?: string | undefined;
                                    amd?: string | undefined;
                                    root?: string | undefined;
                                  }
                                | undefined;
                              export?: string | string[] | undefined;
                              umdNamedDefine?: boolean | undefined;
                            }
                          >
                        >;
                        dependOn: import("zod").ZodOptional<
                          import("zod").ZodUnion<
                            [
                              import("zod").ZodString,
                              import("zod").ZodArray<
                                import("zod").ZodString,
                                "many"
                              >
                            ]
                          >
                        >;
                        layer: import("zod").ZodOptional<
                          import("zod").ZodUnion<
                            [import("zod").ZodString, import("zod").ZodNull]
                          >
                        >;
                      },
                      "strict",
                      import("zod").ZodTypeAny,
                      {
                        import: string | string[];
                        runtime?: string | false | undefined;
                        publicPath?:
                          | string
                          | ((
                              args_0: PathData,
                              args_1: AssetInfo | undefined,
                              ...args: unknown[]
                            ) => string)
                          | undefined;
                        layer?: string | null | undefined;
                        baseUri?: string | undefined;
                        filename?:
                          | string
                          | ((
                              args_0: PathData,
                              args_1: AssetInfo | undefined,
                              ...args: unknown[]
                            ) => string)
                          | undefined;
                        chunkLoading?: string | false | undefined;
                        asyncChunks?: boolean | undefined;
                        library?:
                          | {
                              type: string;
                              name?:
                                | string
                                | string[]
                                | {
                                    commonjs?: string | undefined;
                                    amd?: string | undefined;
                                    root?: string | string[] | undefined;
                                  }
                                | undefined;
                              amdContainer?: string | undefined;
                              auxiliaryComment?:
                                | string
                                | {
                                    commonjs?: string | undefined;
                                    commonjs2?: string | undefined;
                                    amd?: string | undefined;
                                    root?: string | undefined;
                                  }
                                | undefined;
                              export?: string | string[] | undefined;
                              umdNamedDefine?: boolean | undefined;
                            }
                          | undefined;
                        dependOn?: string | string[] | undefined;
                        wasmLoading?: string | false | undefined;
                      },
                      {
                        import: string | string[];
                        runtime?: string | false | undefined;
                        publicPath?:
                          | string
                          | ((
                              args_0: PathData,
                              args_1: AssetInfo | undefined,
                              ...args: unknown[]
                            ) => string)
                          | undefined;
                        layer?: string | null | undefined;
                        baseUri?: string | undefined;
                        filename?:
                          | string
                          | ((
                              args_0: PathData,
                              args_1: AssetInfo | undefined,
                              ...args: unknown[]
                            ) => string)
                          | undefined;
                        chunkLoading?: string | false | undefined;
                        asyncChunks?: boolean | undefined;
                        library?:
                          | {
                              type: string;
                              name?:
                                | string
                                | string[]
                                | {
                                    commonjs?: string | undefined;
                                    amd?: string | undefined;
                                    root?: string | string[] | undefined;
                                  }
                                | undefined;
                              amdContainer?: string | undefined;
                              auxiliaryComment?:
                                | string
                                | {
                                    commonjs?: string | undefined;
                                    commonjs2?: string | undefined;
                                    amd?: string | undefined;
                                    root?: string | undefined;
                                  }
                                | undefined;
                              export?: string | string[] | undefined;
                              umdNamedDefine?: boolean | undefined;
                            }
                          | undefined;
                        dependOn?: string | string[] | undefined;
                        wasmLoading?: string | false | undefined;
                      }
                    >
                  ]
                >
              >,
              import("zod").ZodUnion<
                [
                  import("zod").ZodString,
                  import("zod").ZodArray<import("zod").ZodString, "many">
                ]
              >
            ]
          >,
          import("zod").ZodFunction<
            import("zod").ZodTuple<[], import("zod").ZodUnknown>,
            import("zod").ZodUnion<
              [
                import("zod").ZodUnion<
                  [
                    import("zod").ZodRecord<
                      import("zod").ZodString,
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodUnion<
                            [
                              import("zod").ZodString,
                              import("zod").ZodArray<
                                import("zod").ZodString,
                                "many"
                              >
                            ]
                          >,
                          import("zod").ZodObject<
                            {
                              import: import("zod").ZodUnion<
                                [
                                  import("zod").ZodString,
                                  import("zod").ZodArray<
                                    import("zod").ZodString,
                                    "many"
                                  >
                                ]
                              >;
                              runtime: import("zod").ZodOptional<
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodLiteral<false>,
                                    import("zod").ZodString
                                  ]
                                >
                              >;
                              publicPath: import("zod").ZodOptional<
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodLiteral<"auto">,
                                    import("zod").ZodUnion<
                                      [
                                        import("zod").ZodString,
                                        import("zod").ZodFunction<
                                          import("zod").ZodTuple<
                                            [
                                              z.Schema<
                                                PathData,
                                                import("zod").ZodTypeDef,
                                                PathData
                                              >,
                                              import("zod").ZodOptional<
                                                z.Schema<
                                                  AssetInfo,
                                                  import("zod").ZodTypeDef,
                                                  AssetInfo
                                                >
                                              >
                                            ],
                                            import("zod").ZodUnknown
                                          >,
                                          import("zod").ZodString
                                        >
                                      ]
                                    >
                                  ]
                                >
                              >;
                              baseUri: import("zod").ZodOptional<
                                import("zod").ZodString
                              >;
                              chunkLoading: import("zod").ZodOptional<
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodLiteral<false>,
                                    import("zod").ZodUnion<
                                      [
                                        import("zod").ZodEnum<
                                          [
                                            "jsonp",
                                            "import-scripts",
                                            "require",
                                            "async-node",
                                            "import"
                                          ]
                                        >,
                                        import("zod").ZodString
                                      ]
                                    >
                                  ]
                                >
                              >;
                              asyncChunks: import("zod").ZodOptional<
                                import("zod").ZodBoolean
                              >;
                              wasmLoading: import("zod").ZodOptional<
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodLiteral<false>,
                                    import("zod").ZodUnion<
                                      [
                                        import("zod").ZodEnum<
                                          [
                                            "fetch-streaming",
                                            "fetch",
                                            "async-node"
                                          ]
                                        >,
                                        import("zod").ZodString
                                      ]
                                    >
                                  ]
                                >
                              >;
                              filename: import("zod").ZodOptional<
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodString,
                                    import("zod").ZodFunction<
                                      import("zod").ZodTuple<
                                        [
                                          z.Schema<
                                            PathData,
                                            import("zod").ZodTypeDef,
                                            PathData
                                          >,
                                          import("zod").ZodOptional<
                                            z.Schema<
                                              AssetInfo,
                                              import("zod").ZodTypeDef,
                                              AssetInfo
                                            >
                                          >
                                        ],
                                        import("zod").ZodUnknown
                                      >,
                                      import("zod").ZodString
                                    >
                                  ]
                                >
                              >;
                              library: import("zod").ZodOptional<
                                import("zod").ZodObject<
                                  {
                                    amdContainer: import("zod").ZodOptional<
                                      import("zod").ZodString
                                    >;
                                    auxiliaryComment: import("zod").ZodOptional<
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodString,
                                          import("zod").ZodObject<
                                            {
                                              amd: import("zod").ZodOptional<
                                                import("zod").ZodString
                                              >;
                                              commonjs: import("zod").ZodOptional<
                                                import("zod").ZodString
                                              >;
                                              commonjs2: import("zod").ZodOptional<
                                                import("zod").ZodString
                                              >;
                                              root: import("zod").ZodOptional<
                                                import("zod").ZodString
                                              >;
                                            },
                                            "strict",
                                            import("zod").ZodTypeAny,
                                            {
                                              commonjs?: string | undefined;
                                              commonjs2?: string | undefined;
                                              amd?: string | undefined;
                                              root?: string | undefined;
                                            },
                                            {
                                              commonjs?: string | undefined;
                                              commonjs2?: string | undefined;
                                              amd?: string | undefined;
                                              root?: string | undefined;
                                            }
                                          >
                                        ]
                                      >
                                    >;
                                    export: import("zod").ZodOptional<
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodString,
                                          import("zod").ZodArray<
                                            import("zod").ZodString,
                                            "many"
                                          >
                                        ]
                                      >
                                    >;
                                    name: import("zod").ZodOptional<
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodUnion<
                                            [
                                              import("zod").ZodString,
                                              import("zod").ZodArray<
                                                import("zod").ZodString,
                                                "many"
                                              >
                                            ]
                                          >,
                                          import("zod").ZodObject<
                                            {
                                              amd: import("zod").ZodOptional<
                                                import("zod").ZodString
                                              >;
                                              commonjs: import("zod").ZodOptional<
                                                import("zod").ZodString
                                              >;
                                              root: import("zod").ZodOptional<
                                                import("zod").ZodUnion<
                                                  [
                                                    import("zod").ZodString,
                                                    import("zod").ZodArray<
                                                      import("zod").ZodString,
                                                      "many"
                                                    >
                                                  ]
                                                >
                                              >;
                                            },
                                            "strict",
                                            import("zod").ZodTypeAny,
                                            {
                                              commonjs?: string | undefined;
                                              amd?: string | undefined;
                                              root?:
                                                | string
                                                | string[]
                                                | undefined;
                                            },
                                            {
                                              commonjs?: string | undefined;
                                              amd?: string | undefined;
                                              root?:
                                                | string
                                                | string[]
                                                | undefined;
                                            }
                                          >
                                        ]
                                      >
                                    >;
                                    type: import("zod").ZodUnion<
                                      [
                                        import("zod").ZodEnum<
                                          [
                                            "var",
                                            "module",
                                            "assign",
                                            "assign-properties",
                                            "this",
                                            "window",
                                            "self",
                                            "global",
                                            "commonjs",
                                            "commonjs2",
                                            "commonjs-module",
                                            "commonjs-static",
                                            "amd",
                                            "amd-require",
                                            "umd",
                                            "umd2",
                                            "jsonp",
                                            "system"
                                          ]
                                        >,
                                        import("zod").ZodString
                                      ]
                                    >;
                                    umdNamedDefine: import("zod").ZodOptional<
                                      import("zod").ZodBoolean
                                    >;
                                  },
                                  "strict",
                                  import("zod").ZodTypeAny,
                                  {
                                    type: string;
                                    name?:
                                      | string
                                      | string[]
                                      | {
                                          commonjs?: string | undefined;
                                          amd?: string | undefined;
                                          root?: string | string[] | undefined;
                                        }
                                      | undefined;
                                    amdContainer?: string | undefined;
                                    auxiliaryComment?:
                                      | string
                                      | {
                                          commonjs?: string | undefined;
                                          commonjs2?: string | undefined;
                                          amd?: string | undefined;
                                          root?: string | undefined;
                                        }
                                      | undefined;
                                    export?: string | string[] | undefined;
                                    umdNamedDefine?: boolean | undefined;
                                  },
                                  {
                                    type: string;
                                    name?:
                                      | string
                                      | string[]
                                      | {
                                          commonjs?: string | undefined;
                                          amd?: string | undefined;
                                          root?: string | string[] | undefined;
                                        }
                                      | undefined;
                                    amdContainer?: string | undefined;
                                    auxiliaryComment?:
                                      | string
                                      | {
                                          commonjs?: string | undefined;
                                          commonjs2?: string | undefined;
                                          amd?: string | undefined;
                                          root?: string | undefined;
                                        }
                                      | undefined;
                                    export?: string | string[] | undefined;
                                    umdNamedDefine?: boolean | undefined;
                                  }
                                >
                              >;
                              dependOn: import("zod").ZodOptional<
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodString,
                                    import("zod").ZodArray<
                                      import("zod").ZodString,
                                      "many"
                                    >
                                  ]
                                >
                              >;
                              layer: import("zod").ZodOptional<
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodString,
                                    import("zod").ZodNull
                                  ]
                                >
                              >;
                            },
                            "strict",
                            import("zod").ZodTypeAny,
                            {
                              import: string | string[];
                              runtime?: string | false | undefined;
                              publicPath?:
                                | string
                                | ((
                                    args_0: PathData,
                                    args_1: AssetInfo | undefined,
                                    ...args: unknown[]
                                  ) => string)
                                | undefined;
                              layer?: string | null | undefined;
                              baseUri?: string | undefined;
                              filename?:
                                | string
                                | ((
                                    args_0: PathData,
                                    args_1: AssetInfo | undefined,
                                    ...args: unknown[]
                                  ) => string)
                                | undefined;
                              chunkLoading?: string | false | undefined;
                              asyncChunks?: boolean | undefined;
                              library?:
                                | {
                                    type: string;
                                    name?:
                                      | string
                                      | string[]
                                      | {
                                          commonjs?: string | undefined;
                                          amd?: string | undefined;
                                          root?: string | string[] | undefined;
                                        }
                                      | undefined;
                                    amdContainer?: string | undefined;
                                    auxiliaryComment?:
                                      | string
                                      | {
                                          commonjs?: string | undefined;
                                          commonjs2?: string | undefined;
                                          amd?: string | undefined;
                                          root?: string | undefined;
                                        }
                                      | undefined;
                                    export?: string | string[] | undefined;
                                    umdNamedDefine?: boolean | undefined;
                                  }
                                | undefined;
                              dependOn?: string | string[] | undefined;
                              wasmLoading?: string | false | undefined;
                            },
                            {
                              import: string | string[];
                              runtime?: string | false | undefined;
                              publicPath?:
                                | string
                                | ((
                                    args_0: PathData,
                                    args_1: AssetInfo | undefined,
                                    ...args: unknown[]
                                  ) => string)
                                | undefined;
                              layer?: string | null | undefined;
                              baseUri?: string | undefined;
                              filename?:
                                | string
                                | ((
                                    args_0: PathData,
                                    args_1: AssetInfo | undefined,
                                    ...args: unknown[]
                                  ) => string)
                                | undefined;
                              chunkLoading?: string | false | undefined;
                              asyncChunks?: boolean | undefined;
                              library?:
                                | {
                                    type: string;
                                    name?:
                                      | string
                                      | string[]
                                      | {
                                          commonjs?: string | undefined;
                                          amd?: string | undefined;
                                          root?: string | string[] | undefined;
                                        }
                                      | undefined;
                                    amdContainer?: string | undefined;
                                    auxiliaryComment?:
                                      | string
                                      | {
                                          commonjs?: string | undefined;
                                          commonjs2?: string | undefined;
                                          amd?: string | undefined;
                                          root?: string | undefined;
                                        }
                                      | undefined;
                                    export?: string | string[] | undefined;
                                    umdNamedDefine?: boolean | undefined;
                                  }
                                | undefined;
                              dependOn?: string | string[] | undefined;
                              wasmLoading?: string | false | undefined;
                            }
                          >
                        ]
                      >
                    >,
                    import("zod").ZodUnion<
                      [
                        import("zod").ZodString,
                        import("zod").ZodArray<import("zod").ZodString, "many">
                      ]
                    >
                  ]
                >,
                import("zod").ZodPromise<
                  import("zod").ZodUnion<
                    [
                      import("zod").ZodRecord<
                        import("zod").ZodString,
                        import("zod").ZodUnion<
                          [
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodString,
                                import("zod").ZodArray<
                                  import("zod").ZodString,
                                  "many"
                                >
                              ]
                            >,
                            import("zod").ZodObject<
                              {
                                import: import("zod").ZodUnion<
                                  [
                                    import("zod").ZodString,
                                    import("zod").ZodArray<
                                      import("zod").ZodString,
                                      "many"
                                    >
                                  ]
                                >;
                                runtime: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodLiteral<false>,
                                      import("zod").ZodString
                                    ]
                                  >
                                >;
                                publicPath: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodLiteral<"auto">,
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodString,
                                          import("zod").ZodFunction<
                                            import("zod").ZodTuple<
                                              [
                                                z.Schema<
                                                  PathData,
                                                  import("zod").ZodTypeDef,
                                                  PathData
                                                >,
                                                import("zod").ZodOptional<
                                                  z.Schema<
                                                    AssetInfo,
                                                    import("zod").ZodTypeDef,
                                                    AssetInfo
                                                  >
                                                >
                                              ],
                                              import("zod").ZodUnknown
                                            >,
                                            import("zod").ZodString
                                          >
                                        ]
                                      >
                                    ]
                                  >
                                >;
                                baseUri: import("zod").ZodOptional<
                                  import("zod").ZodString
                                >;
                                chunkLoading: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodLiteral<false>,
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodEnum<
                                            [
                                              "jsonp",
                                              "import-scripts",
                                              "require",
                                              "async-node",
                                              "import"
                                            ]
                                          >,
                                          import("zod").ZodString
                                        ]
                                      >
                                    ]
                                  >
                                >;
                                asyncChunks: import("zod").ZodOptional<
                                  import("zod").ZodBoolean
                                >;
                                wasmLoading: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodLiteral<false>,
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodEnum<
                                            [
                                              "fetch-streaming",
                                              "fetch",
                                              "async-node"
                                            ]
                                          >,
                                          import("zod").ZodString
                                        ]
                                      >
                                    ]
                                  >
                                >;
                                filename: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodString,
                                      import("zod").ZodFunction<
                                        import("zod").ZodTuple<
                                          [
                                            z.Schema<
                                              PathData,
                                              import("zod").ZodTypeDef,
                                              PathData
                                            >,
                                            import("zod").ZodOptional<
                                              z.Schema<
                                                AssetInfo,
                                                import("zod").ZodTypeDef,
                                                AssetInfo
                                              >
                                            >
                                          ],
                                          import("zod").ZodUnknown
                                        >,
                                        import("zod").ZodString
                                      >
                                    ]
                                  >
                                >;
                                library: import("zod").ZodOptional<
                                  import("zod").ZodObject<
                                    {
                                      amdContainer: import("zod").ZodOptional<
                                        import("zod").ZodString
                                      >;
                                      auxiliaryComment: import("zod").ZodOptional<
                                        import("zod").ZodUnion<
                                          [
                                            import("zod").ZodString,
                                            import("zod").ZodObject<
                                              {
                                                amd: import("zod").ZodOptional<
                                                  import("zod").ZodString
                                                >;
                                                commonjs: import("zod").ZodOptional<
                                                  import("zod").ZodString
                                                >;
                                                commonjs2: import("zod").ZodOptional<
                                                  import("zod").ZodString
                                                >;
                                                root: import("zod").ZodOptional<
                                                  import("zod").ZodString
                                                >;
                                              },
                                              "strict",
                                              import("zod").ZodTypeAny,
                                              {
                                                commonjs?: string | undefined;
                                                commonjs2?: string | undefined;
                                                amd?: string | undefined;
                                                root?: string | undefined;
                                              },
                                              {
                                                commonjs?: string | undefined;
                                                commonjs2?: string | undefined;
                                                amd?: string | undefined;
                                                root?: string | undefined;
                                              }
                                            >
                                          ]
                                        >
                                      >;
                                      export: import("zod").ZodOptional<
                                        import("zod").ZodUnion<
                                          [
                                            import("zod").ZodString,
                                            import("zod").ZodArray<
                                              import("zod").ZodString,
                                              "many"
                                            >
                                          ]
                                        >
                                      >;
                                      name: import("zod").ZodOptional<
                                        import("zod").ZodUnion<
                                          [
                                            import("zod").ZodUnion<
                                              [
                                                import("zod").ZodString,
                                                import("zod").ZodArray<
                                                  import("zod").ZodString,
                                                  "many"
                                                >
                                              ]
                                            >,
                                            import("zod").ZodObject<
                                              {
                                                amd: import("zod").ZodOptional<
                                                  import("zod").ZodString
                                                >;
                                                commonjs: import("zod").ZodOptional<
                                                  import("zod").ZodString
                                                >;
                                                root: import("zod").ZodOptional<
                                                  import("zod").ZodUnion<
                                                    [
                                                      import("zod").ZodString,
                                                      import("zod").ZodArray<
                                                        import("zod").ZodString,
                                                        "many"
                                                      >
                                                    ]
                                                  >
                                                >;
                                              },
                                              "strict",
                                              import("zod").ZodTypeAny,
                                              {
                                                commonjs?: string | undefined;
                                                amd?: string | undefined;
                                                root?:
                                                  | string
                                                  | string[]
                                                  | undefined;
                                              },
                                              {
                                                commonjs?: string | undefined;
                                                amd?: string | undefined;
                                                root?:
                                                  | string
                                                  | string[]
                                                  | undefined;
                                              }
                                            >
                                          ]
                                        >
                                      >;
                                      type: import("zod").ZodUnion<
                                        [
                                          import("zod").ZodEnum<
                                            [
                                              "var",
                                              "module",
                                              "assign",
                                              "assign-properties",
                                              "this",
                                              "window",
                                              "self",
                                              "global",
                                              "commonjs",
                                              "commonjs2",
                                              "commonjs-module",
                                              "commonjs-static",
                                              "amd",
                                              "amd-require",
                                              "umd",
                                              "umd2",
                                              "jsonp",
                                              "system"
                                            ]
                                          >,
                                          import("zod").ZodString
                                        ]
                                      >;
                                      umdNamedDefine: import("zod").ZodOptional<
                                        import("zod").ZodBoolean
                                      >;
                                    },
                                    "strict",
                                    import("zod").ZodTypeAny,
                                    {
                                      type: string;
                                      name?:
                                        | string
                                        | string[]
                                        | {
                                            commonjs?: string | undefined;
                                            amd?: string | undefined;
                                            root?:
                                              | string
                                              | string[]
                                              | undefined;
                                          }
                                        | undefined;
                                      amdContainer?: string | undefined;
                                      auxiliaryComment?:
                                        | string
                                        | {
                                            commonjs?: string | undefined;
                                            commonjs2?: string | undefined;
                                            amd?: string | undefined;
                                            root?: string | undefined;
                                          }
                                        | undefined;
                                      export?: string | string[] | undefined;
                                      umdNamedDefine?: boolean | undefined;
                                    },
                                    {
                                      type: string;
                                      name?:
                                        | string
                                        | string[]
                                        | {
                                            commonjs?: string | undefined;
                                            amd?: string | undefined;
                                            root?:
                                              | string
                                              | string[]
                                              | undefined;
                                          }
                                        | undefined;
                                      amdContainer?: string | undefined;
                                      auxiliaryComment?:
                                        | string
                                        | {
                                            commonjs?: string | undefined;
                                            commonjs2?: string | undefined;
                                            amd?: string | undefined;
                                            root?: string | undefined;
                                          }
                                        | undefined;
                                      export?: string | string[] | undefined;
                                      umdNamedDefine?: boolean | undefined;
                                    }
                                  >
                                >;
                                dependOn: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodString,
                                      import("zod").ZodArray<
                                        import("zod").ZodString,
                                        "many"
                                      >
                                    ]
                                  >
                                >;
                                layer: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodString,
                                      import("zod").ZodNull
                                    ]
                                  >
                                >;
                              },
                              "strict",
                              import("zod").ZodTypeAny,
                              {
                                import: string | string[];
                                runtime?: string | false | undefined;
                                publicPath?:
                                  | string
                                  | ((
                                      args_0: PathData,
                                      args_1: AssetInfo | undefined,
                                      ...args: unknown[]
                                    ) => string)
                                  | undefined;
                                layer?: string | null | undefined;
                                baseUri?: string | undefined;
                                filename?:
                                  | string
                                  | ((
                                      args_0: PathData,
                                      args_1: AssetInfo | undefined,
                                      ...args: unknown[]
                                    ) => string)
                                  | undefined;
                                chunkLoading?: string | false | undefined;
                                asyncChunks?: boolean | undefined;
                                library?:
                                  | {
                                      type: string;
                                      name?:
                                        | string
                                        | string[]
                                        | {
                                            commonjs?: string | undefined;
                                            amd?: string | undefined;
                                            root?:
                                              | string
                                              | string[]
                                              | undefined;
                                          }
                                        | undefined;
                                      amdContainer?: string | undefined;
                                      auxiliaryComment?:
                                        | string
                                        | {
                                            commonjs?: string | undefined;
                                            commonjs2?: string | undefined;
                                            amd?: string | undefined;
                                            root?: string | undefined;
                                          }
                                        | undefined;
                                      export?: string | string[] | undefined;
                                      umdNamedDefine?: boolean | undefined;
                                    }
                                  | undefined;
                                dependOn?: string | string[] | undefined;
                                wasmLoading?: string | false | undefined;
                              },
                              {
                                import: string | string[];
                                runtime?: string | false | undefined;
                                publicPath?:
                                  | string
                                  | ((
                                      args_0: PathData,
                                      args_1: AssetInfo | undefined,
                                      ...args: unknown[]
                                    ) => string)
                                  | undefined;
                                layer?: string | null | undefined;
                                baseUri?: string | undefined;
                                filename?:
                                  | string
                                  | ((
                                      args_0: PathData,
                                      args_1: AssetInfo | undefined,
                                      ...args: unknown[]
                                    ) => string)
                                  | undefined;
                                chunkLoading?: string | false | undefined;
                                asyncChunks?: boolean | undefined;
                                library?:
                                  | {
                                      type: string;
                                      name?:
                                        | string
                                        | string[]
                                        | {
                                            commonjs?: string | undefined;
                                            amd?: string | undefined;
                                            root?:
                                              | string
                                              | string[]
                                              | undefined;
                                          }
                                        | undefined;
                                      amdContainer?: string | undefined;
                                      auxiliaryComment?:
                                        | string
                                        | {
                                            commonjs?: string | undefined;
                                            commonjs2?: string | undefined;
                                            amd?: string | undefined;
                                            root?: string | undefined;
                                          }
                                        | undefined;
                                      export?: string | string[] | undefined;
                                      umdNamedDefine?: boolean | undefined;
                                    }
                                  | undefined;
                                dependOn?: string | string[] | undefined;
                                wasmLoading?: string | false | undefined;
                              }
                            >
                          ]
                        >
                      >,
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodString,
                          import("zod").ZodArray<
                            import("zod").ZodString,
                            "many"
                          >
                        ]
                      >
                    ]
                  >
                >
              ]
            >
          >
        ]
      >
    >;
    output: import("zod").ZodOptional<
      import("zod").ZodObject<
        {
          path: import("zod").ZodOptional<import("zod").ZodString>;
          pathinfo: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [import("zod").ZodBoolean, import("zod").ZodLiteral<"verbose">]
            >
          >;
          clean: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodBoolean,
                import("zod").ZodObject<
                  {
                    keep: import("zod").ZodOptional<import("zod").ZodString>;
                  },
                  "strict",
                  import("zod").ZodTypeAny,
                  {
                    keep?: string | undefined;
                  },
                  {
                    keep?: string | undefined;
                  }
                >
              ]
            >
          >;
          publicPath: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodLiteral<"auto">,
                import("zod").ZodUnion<
                  [
                    import("zod").ZodString,
                    import("zod").ZodFunction<
                      import("zod").ZodTuple<
                        [
                          z.Schema<
                            PathData,
                            import("zod").ZodTypeDef,
                            PathData
                          >,
                          import("zod").ZodOptional<
                            z.Schema<
                              AssetInfo,
                              import("zod").ZodTypeDef,
                              AssetInfo
                            >
                          >
                        ],
                        import("zod").ZodUnknown
                      >,
                      import("zod").ZodString
                    >
                  ]
                >
              ]
            >
          >;
          filename: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodString,
                import("zod").ZodFunction<
                  import("zod").ZodTuple<
                    [
                      z.Schema<PathData, import("zod").ZodTypeDef, PathData>,
                      import("zod").ZodOptional<
                        z.Schema<AssetInfo, import("zod").ZodTypeDef, AssetInfo>
                      >
                    ],
                    import("zod").ZodUnknown
                  >,
                  import("zod").ZodString
                >
              ]
            >
          >;
          chunkFilename: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodString,
                import("zod").ZodFunction<
                  import("zod").ZodTuple<
                    [
                      z.Schema<PathData, import("zod").ZodTypeDef, PathData>,
                      import("zod").ZodOptional<
                        z.Schema<AssetInfo, import("zod").ZodTypeDef, AssetInfo>
                      >
                    ],
                    import("zod").ZodUnknown
                  >,
                  import("zod").ZodString
                >
              ]
            >
          >;
          crossOriginLoading: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodLiteral<false>,
                import("zod").ZodEnum<["anonymous", "use-credentials"]>
              ]
            >
          >;
          cssFilename: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodString,
                import("zod").ZodFunction<
                  import("zod").ZodTuple<
                    [
                      z.Schema<PathData, import("zod").ZodTypeDef, PathData>,
                      import("zod").ZodOptional<
                        z.Schema<AssetInfo, import("zod").ZodTypeDef, AssetInfo>
                      >
                    ],
                    import("zod").ZodUnknown
                  >,
                  import("zod").ZodString
                >
              ]
            >
          >;
          cssHeadDataCompression: import("zod").ZodOptional<
            import("zod").ZodBoolean
          >;
          cssChunkFilename: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodString,
                import("zod").ZodFunction<
                  import("zod").ZodTuple<
                    [
                      z.Schema<PathData, import("zod").ZodTypeDef, PathData>,
                      import("zod").ZodOptional<
                        z.Schema<AssetInfo, import("zod").ZodTypeDef, AssetInfo>
                      >
                    ],
                    import("zod").ZodUnknown
                  >,
                  import("zod").ZodString
                >
              ]
            >
          >;
          hotUpdateMainFilename: import("zod").ZodOptional<
            import("zod").ZodString
          >;
          hotUpdateChunkFilename: import("zod").ZodOptional<
            import("zod").ZodString
          >;
          hotUpdateGlobal: import("zod").ZodOptional<import("zod").ZodString>;
          assetModuleFilename: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodString,
                import("zod").ZodFunction<
                  import("zod").ZodTuple<
                    [
                      z.Schema<PathData, import("zod").ZodTypeDef, PathData>,
                      import("zod").ZodOptional<
                        z.Schema<AssetInfo, import("zod").ZodTypeDef, AssetInfo>
                      >
                    ],
                    import("zod").ZodUnknown
                  >,
                  import("zod").ZodString
                >
              ]
            >
          >;
          uniqueName: import("zod").ZodOptional<import("zod").ZodString>;
          chunkLoadingGlobal: import("zod").ZodOptional<
            import("zod").ZodString
          >;
          enabledLibraryTypes: import("zod").ZodOptional<
            import("zod").ZodArray<
              import("zod").ZodUnion<
                [
                  import("zod").ZodEnum<
                    [
                      "var",
                      "module",
                      "assign",
                      "assign-properties",
                      "this",
                      "window",
                      "self",
                      "global",
                      "commonjs",
                      "commonjs2",
                      "commonjs-module",
                      "commonjs-static",
                      "amd",
                      "amd-require",
                      "umd",
                      "umd2",
                      "jsonp",
                      "system"
                    ]
                  >,
                  import("zod").ZodString
                ]
              >,
              "many"
            >
          >;
          library: import("zod").ZodOptional<
            import("zod").ZodOptional<
              import("zod").ZodUnion<
                [
                  import("zod").ZodUnion<
                    [
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodString,
                          import("zod").ZodArray<
                            import("zod").ZodString,
                            "many"
                          >
                        ]
                      >,
                      import("zod").ZodObject<
                        {
                          amd: import("zod").ZodOptional<
                            import("zod").ZodString
                          >;
                          commonjs: import("zod").ZodOptional<
                            import("zod").ZodString
                          >;
                          root: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodString,
                                import("zod").ZodArray<
                                  import("zod").ZodString,
                                  "many"
                                >
                              ]
                            >
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          commonjs?: string | undefined;
                          amd?: string | undefined;
                          root?: string | string[] | undefined;
                        },
                        {
                          commonjs?: string | undefined;
                          amd?: string | undefined;
                          root?: string | string[] | undefined;
                        }
                      >
                    ]
                  >,
                  import("zod").ZodObject<
                    {
                      amdContainer: import("zod").ZodOptional<
                        import("zod").ZodString
                      >;
                      auxiliaryComment: import("zod").ZodOptional<
                        import("zod").ZodUnion<
                          [
                            import("zod").ZodString,
                            import("zod").ZodObject<
                              {
                                amd: import("zod").ZodOptional<
                                  import("zod").ZodString
                                >;
                                commonjs: import("zod").ZodOptional<
                                  import("zod").ZodString
                                >;
                                commonjs2: import("zod").ZodOptional<
                                  import("zod").ZodString
                                >;
                                root: import("zod").ZodOptional<
                                  import("zod").ZodString
                                >;
                              },
                              "strict",
                              import("zod").ZodTypeAny,
                              {
                                commonjs?: string | undefined;
                                commonjs2?: string | undefined;
                                amd?: string | undefined;
                                root?: string | undefined;
                              },
                              {
                                commonjs?: string | undefined;
                                commonjs2?: string | undefined;
                                amd?: string | undefined;
                                root?: string | undefined;
                              }
                            >
                          ]
                        >
                      >;
                      export: import("zod").ZodOptional<
                        import("zod").ZodUnion<
                          [
                            import("zod").ZodString,
                            import("zod").ZodArray<
                              import("zod").ZodString,
                              "many"
                            >
                          ]
                        >
                      >;
                      name: import("zod").ZodOptional<
                        import("zod").ZodUnion<
                          [
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodString,
                                import("zod").ZodArray<
                                  import("zod").ZodString,
                                  "many"
                                >
                              ]
                            >,
                            import("zod").ZodObject<
                              {
                                amd: import("zod").ZodOptional<
                                  import("zod").ZodString
                                >;
                                commonjs: import("zod").ZodOptional<
                                  import("zod").ZodString
                                >;
                                root: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodString,
                                      import("zod").ZodArray<
                                        import("zod").ZodString,
                                        "many"
                                      >
                                    ]
                                  >
                                >;
                              },
                              "strict",
                              import("zod").ZodTypeAny,
                              {
                                commonjs?: string | undefined;
                                amd?: string | undefined;
                                root?: string | string[] | undefined;
                              },
                              {
                                commonjs?: string | undefined;
                                amd?: string | undefined;
                                root?: string | string[] | undefined;
                              }
                            >
                          ]
                        >
                      >;
                      type: import("zod").ZodUnion<
                        [
                          import("zod").ZodEnum<
                            [
                              "var",
                              "module",
                              "assign",
                              "assign-properties",
                              "this",
                              "window",
                              "self",
                              "global",
                              "commonjs",
                              "commonjs2",
                              "commonjs-module",
                              "commonjs-static",
                              "amd",
                              "amd-require",
                              "umd",
                              "umd2",
                              "jsonp",
                              "system"
                            ]
                          >,
                          import("zod").ZodString
                        ]
                      >;
                      umdNamedDefine: import("zod").ZodOptional<
                        import("zod").ZodBoolean
                      >;
                    },
                    "strict",
                    import("zod").ZodTypeAny,
                    {
                      type: string;
                      name?:
                        | string
                        | string[]
                        | {
                            commonjs?: string | undefined;
                            amd?: string | undefined;
                            root?: string | string[] | undefined;
                          }
                        | undefined;
                      amdContainer?: string | undefined;
                      auxiliaryComment?:
                        | string
                        | {
                            commonjs?: string | undefined;
                            commonjs2?: string | undefined;
                            amd?: string | undefined;
                            root?: string | undefined;
                          }
                        | undefined;
                      export?: string | string[] | undefined;
                      umdNamedDefine?: boolean | undefined;
                    },
                    {
                      type: string;
                      name?:
                        | string
                        | string[]
                        | {
                            commonjs?: string | undefined;
                            amd?: string | undefined;
                            root?: string | string[] | undefined;
                          }
                        | undefined;
                      amdContainer?: string | undefined;
                      auxiliaryComment?:
                        | string
                        | {
                            commonjs?: string | undefined;
                            commonjs2?: string | undefined;
                            amd?: string | undefined;
                            root?: string | undefined;
                          }
                        | undefined;
                      export?: string | string[] | undefined;
                      umdNamedDefine?: boolean | undefined;
                    }
                  >
                ]
              >
            >
          >;
          libraryExport: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodString,
                import("zod").ZodArray<import("zod").ZodString, "many">
              ]
            >
          >;
          libraryTarget: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodEnum<
                  [
                    "var",
                    "module",
                    "assign",
                    "assign-properties",
                    "this",
                    "window",
                    "self",
                    "global",
                    "commonjs",
                    "commonjs2",
                    "commonjs-module",
                    "commonjs-static",
                    "amd",
                    "amd-require",
                    "umd",
                    "umd2",
                    "jsonp",
                    "system"
                  ]
                >,
                import("zod").ZodString
              ]
            >
          >;
          umdNamedDefine: import("zod").ZodOptional<import("zod").ZodBoolean>;
          auxiliaryComment: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodString,
                import("zod").ZodObject<
                  {
                    amd: import("zod").ZodOptional<import("zod").ZodString>;
                    commonjs: import("zod").ZodOptional<
                      import("zod").ZodString
                    >;
                    commonjs2: import("zod").ZodOptional<
                      import("zod").ZodString
                    >;
                    root: import("zod").ZodOptional<import("zod").ZodString>;
                  },
                  "strict",
                  import("zod").ZodTypeAny,
                  {
                    commonjs?: string | undefined;
                    commonjs2?: string | undefined;
                    amd?: string | undefined;
                    root?: string | undefined;
                  },
                  {
                    commonjs?: string | undefined;
                    commonjs2?: string | undefined;
                    amd?: string | undefined;
                    root?: string | undefined;
                  }
                >
              ]
            >
          >;
          module: import("zod").ZodOptional<import("zod").ZodBoolean>;
          strictModuleExceptionHandling: import("zod").ZodOptional<
            import("zod").ZodBoolean
          >;
          strictModuleErrorHandling: import("zod").ZodOptional<
            import("zod").ZodBoolean
          >;
          globalObject: import("zod").ZodOptional<import("zod").ZodString>;
          importFunctionName: import("zod").ZodOptional<
            import("zod").ZodString
          >;
          importMetaName: import("zod").ZodOptional<import("zod").ZodString>;
          iife: import("zod").ZodOptional<import("zod").ZodBoolean>;
          wasmLoading: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodLiteral<false>,
                import("zod").ZodUnion<
                  [
                    import("zod").ZodEnum<
                      ["fetch-streaming", "fetch", "async-node"]
                    >,
                    import("zod").ZodString
                  ]
                >
              ]
            >
          >;
          enabledWasmLoadingTypes: import("zod").ZodOptional<
            import("zod").ZodArray<
              import("zod").ZodUnion<
                [
                  import("zod").ZodEnum<
                    ["fetch-streaming", "fetch", "async-node"]
                  >,
                  import("zod").ZodString
                ]
              >,
              "many"
            >
          >;
          webassemblyModuleFilename: import("zod").ZodOptional<
            import("zod").ZodString
          >;
          chunkFormat: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [import("zod").ZodLiteral<false>, import("zod").ZodString]
            >
          >;
          chunkLoading: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodLiteral<false>,
                import("zod").ZodUnion<
                  [
                    import("zod").ZodEnum<
                      [
                        "jsonp",
                        "import-scripts",
                        "require",
                        "async-node",
                        "import"
                      ]
                    >,
                    import("zod").ZodString
                  ]
                >
              ]
            >
          >;
          enabledChunkLoadingTypes: import("zod").ZodOptional<
            import("zod").ZodArray<
              import("zod").ZodUnion<
                [
                  import("zod").ZodEnum<
                    [
                      "jsonp",
                      "import-scripts",
                      "require",
                      "async-node",
                      "import"
                    ]
                  >,
                  import("zod").ZodString
                ]
              >,
              "many"
            >
          >;
          trustedTypes: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodUnion<
                  [import("zod").ZodLiteral<true>, import("zod").ZodString]
                >,
                import("zod").ZodObject<
                  {
                    policyName: import("zod").ZodOptional<
                      import("zod").ZodString
                    >;
                    onPolicyCreationFailure: import("zod").ZodOptional<
                      import("zod").ZodEnum<["continue", "stop"]>
                    >;
                  },
                  "strict",
                  import("zod").ZodTypeAny,
                  {
                    policyName?: string | undefined;
                    onPolicyCreationFailure?: "continue" | "stop" | undefined;
                  },
                  {
                    policyName?: string | undefined;
                    onPolicyCreationFailure?: "continue" | "stop" | undefined;
                  }
                >
              ]
            >
          >;
          sourceMapFilename: import("zod").ZodOptional<import("zod").ZodString>;
          hashDigest: import("zod").ZodOptional<import("zod").ZodString>;
          hashDigestLength: import("zod").ZodOptional<import("zod").ZodNumber>;
          hashFunction: import("zod").ZodOptional<
            import("zod").ZodEnum<["md4", "xxhash64"]>
          >;
          hashSalt: import("zod").ZodOptional<import("zod").ZodString>;
          asyncChunks: import("zod").ZodOptional<import("zod").ZodBoolean>;
          workerChunkLoading: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodLiteral<false>,
                import("zod").ZodUnion<
                  [
                    import("zod").ZodEnum<
                      [
                        "jsonp",
                        "import-scripts",
                        "require",
                        "async-node",
                        "import"
                      ]
                    >,
                    import("zod").ZodString
                  ]
                >
              ]
            >
          >;
          workerWasmLoading: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodLiteral<false>,
                import("zod").ZodUnion<
                  [
                    import("zod").ZodEnum<
                      ["fetch-streaming", "fetch", "async-node"]
                    >,
                    import("zod").ZodString
                  ]
                >
              ]
            >
          >;
          workerPublicPath: import("zod").ZodOptional<import("zod").ZodString>;
          scriptType: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodEnum<["text/javascript", "module"]>,
                import("zod").ZodLiteral<false>
              ]
            >
          >;
          devtoolNamespace: import("zod").ZodOptional<import("zod").ZodString>;
          devtoolModuleFilenameTemplate: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodString,
                import("zod").ZodFunction<
                  import("zod").ZodTuple<[import("zod").ZodAny], null>,
                  import("zod").ZodAny
                >
              ]
            >
          >;
          devtoolFallbackModuleFilenameTemplate: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodString,
                import("zod").ZodFunction<
                  import("zod").ZodTuple<[import("zod").ZodAny], null>,
                  import("zod").ZodAny
                >
              ]
            >
          >;
          chunkLoadTimeout: import("zod").ZodOptional<import("zod").ZodNumber>;
          charset: import("zod").ZodOptional<import("zod").ZodBoolean>;
          environment: import("zod").ZodOptional<
            import("zod").ZodObject<
              {
                arrowFunction: import("zod").ZodOptional<
                  import("zod").ZodBoolean
                >;
                asyncFunction: import("zod").ZodOptional<
                  import("zod").ZodBoolean
                >;
                bigIntLiteral: import("zod").ZodOptional<
                  import("zod").ZodBoolean
                >;
                const: import("zod").ZodOptional<import("zod").ZodBoolean>;
                destructuring: import("zod").ZodOptional<
                  import("zod").ZodBoolean
                >;
                document: import("zod").ZodOptional<import("zod").ZodBoolean>;
                dynamicImport: import("zod").ZodOptional<
                  import("zod").ZodBoolean
                >;
                dynamicImportInWorker: import("zod").ZodOptional<
                  import("zod").ZodBoolean
                >;
                forOf: import("zod").ZodOptional<import("zod").ZodBoolean>;
                globalThis: import("zod").ZodOptional<import("zod").ZodBoolean>;
                module: import("zod").ZodOptional<import("zod").ZodBoolean>;
                nodePrefixForCoreModules: import("zod").ZodOptional<
                  import("zod").ZodBoolean
                >;
                optionalChaining: import("zod").ZodOptional<
                  import("zod").ZodBoolean
                >;
                templateLiteral: import("zod").ZodOptional<
                  import("zod").ZodBoolean
                >;
              },
              "strict",
              import("zod").ZodTypeAny,
              {
                module?: boolean | undefined;
                arrowFunction?: boolean | undefined;
                asyncFunction?: boolean | undefined;
                bigIntLiteral?: boolean | undefined;
                const?: boolean | undefined;
                destructuring?: boolean | undefined;
                document?: boolean | undefined;
                dynamicImport?: boolean | undefined;
                dynamicImportInWorker?: boolean | undefined;
                forOf?: boolean | undefined;
                globalThis?: boolean | undefined;
                nodePrefixForCoreModules?: boolean | undefined;
                optionalChaining?: boolean | undefined;
                templateLiteral?: boolean | undefined;
              },
              {
                module?: boolean | undefined;
                arrowFunction?: boolean | undefined;
                asyncFunction?: boolean | undefined;
                bigIntLiteral?: boolean | undefined;
                const?: boolean | undefined;
                destructuring?: boolean | undefined;
                document?: boolean | undefined;
                dynamicImport?: boolean | undefined;
                dynamicImportInWorker?: boolean | undefined;
                forOf?: boolean | undefined;
                globalThis?: boolean | undefined;
                nodePrefixForCoreModules?: boolean | undefined;
                optionalChaining?: boolean | undefined;
                templateLiteral?: boolean | undefined;
              }
            >
          >;
          compareBeforeEmit: import("zod").ZodOptional<
            import("zod").ZodBoolean
          >;
        },
        "strict",
        import("zod").ZodTypeAny,
        {
          module?: boolean | undefined;
          environment?:
            | {
                module?: boolean | undefined;
                arrowFunction?: boolean | undefined;
                asyncFunction?: boolean | undefined;
                bigIntLiteral?: boolean | undefined;
                const?: boolean | undefined;
                destructuring?: boolean | undefined;
                document?: boolean | undefined;
                dynamicImport?: boolean | undefined;
                dynamicImportInWorker?: boolean | undefined;
                forOf?: boolean | undefined;
                globalThis?: boolean | undefined;
                nodePrefixForCoreModules?: boolean | undefined;
                optionalChaining?: boolean | undefined;
                templateLiteral?: boolean | undefined;
              }
            | undefined;
          publicPath?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          filename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          chunkFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          chunkLoading?: string | false | undefined;
          asyncChunks?: boolean | undefined;
          library?:
            | string
            | string[]
            | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
              }
            | {
                type: string;
                name?:
                  | string
                  | string[]
                  | {
                      commonjs?: string | undefined;
                      amd?: string | undefined;
                      root?: string | string[] | undefined;
                    }
                  | undefined;
                amdContainer?: string | undefined;
                auxiliaryComment?:
                  | string
                  | {
                      commonjs?: string | undefined;
                      commonjs2?: string | undefined;
                      amd?: string | undefined;
                      root?: string | undefined;
                    }
                  | undefined;
                export?: string | string[] | undefined;
                umdNamedDefine?: boolean | undefined;
              }
            | undefined;
          path?: string | undefined;
          wasmLoading?: string | false | undefined;
          cssHeadDataCompression?: boolean | undefined;
          auxiliaryComment?:
            | string
            | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
              }
            | undefined;
          umdNamedDefine?: boolean | undefined;
          pathinfo?: boolean | "verbose" | undefined;
          clean?:
            | boolean
            | {
                keep?: string | undefined;
              }
            | undefined;
          crossOriginLoading?:
            | false
            | "anonymous"
            | "use-credentials"
            | undefined;
          cssFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          cssChunkFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          hotUpdateMainFilename?: string | undefined;
          hotUpdateChunkFilename?: string | undefined;
          hotUpdateGlobal?: string | undefined;
          assetModuleFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          uniqueName?: string | undefined;
          chunkLoadingGlobal?: string | undefined;
          enabledLibraryTypes?: string[] | undefined;
          libraryExport?: string | string[] | undefined;
          libraryTarget?: string | undefined;
          strictModuleExceptionHandling?: boolean | undefined;
          strictModuleErrorHandling?: boolean | undefined;
          globalObject?: string | undefined;
          importFunctionName?: string | undefined;
          importMetaName?: string | undefined;
          iife?: boolean | undefined;
          enabledWasmLoadingTypes?: string[] | undefined;
          webassemblyModuleFilename?: string | undefined;
          chunkFormat?: string | false | undefined;
          enabledChunkLoadingTypes?: string[] | undefined;
          trustedTypes?:
            | string
            | true
            | {
                policyName?: string | undefined;
                onPolicyCreationFailure?: "continue" | "stop" | undefined;
              }
            | undefined;
          sourceMapFilename?: string | undefined;
          hashDigest?: string | undefined;
          hashDigestLength?: number | undefined;
          hashFunction?: "md4" | "xxhash64" | undefined;
          hashSalt?: string | undefined;
          workerChunkLoading?: string | false | undefined;
          workerWasmLoading?: string | false | undefined;
          workerPublicPath?: string | undefined;
          scriptType?: false | "module" | "text/javascript" | undefined;
          devtoolNamespace?: string | undefined;
          devtoolModuleFilenameTemplate?:
            | string
            | ((args_0: any) => any)
            | undefined;
          devtoolFallbackModuleFilenameTemplate?:
            | string
            | ((args_0: any) => any)
            | undefined;
          chunkLoadTimeout?: number | undefined;
          charset?: boolean | undefined;
          compareBeforeEmit?: boolean | undefined;
        },
        {
          module?: boolean | undefined;
          environment?:
            | {
                module?: boolean | undefined;
                arrowFunction?: boolean | undefined;
                asyncFunction?: boolean | undefined;
                bigIntLiteral?: boolean | undefined;
                const?: boolean | undefined;
                destructuring?: boolean | undefined;
                document?: boolean | undefined;
                dynamicImport?: boolean | undefined;
                dynamicImportInWorker?: boolean | undefined;
                forOf?: boolean | undefined;
                globalThis?: boolean | undefined;
                nodePrefixForCoreModules?: boolean | undefined;
                optionalChaining?: boolean | undefined;
                templateLiteral?: boolean | undefined;
              }
            | undefined;
          publicPath?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          filename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          chunkFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          chunkLoading?: string | false | undefined;
          asyncChunks?: boolean | undefined;
          library?:
            | string
            | string[]
            | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
              }
            | {
                type: string;
                name?:
                  | string
                  | string[]
                  | {
                      commonjs?: string | undefined;
                      amd?: string | undefined;
                      root?: string | string[] | undefined;
                    }
                  | undefined;
                amdContainer?: string | undefined;
                auxiliaryComment?:
                  | string
                  | {
                      commonjs?: string | undefined;
                      commonjs2?: string | undefined;
                      amd?: string | undefined;
                      root?: string | undefined;
                    }
                  | undefined;
                export?: string | string[] | undefined;
                umdNamedDefine?: boolean | undefined;
              }
            | undefined;
          path?: string | undefined;
          wasmLoading?: string | false | undefined;
          cssHeadDataCompression?: boolean | undefined;
          auxiliaryComment?:
            | string
            | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
              }
            | undefined;
          umdNamedDefine?: boolean | undefined;
          pathinfo?: boolean | "verbose" | undefined;
          clean?:
            | boolean
            | {
                keep?: string | undefined;
              }
            | undefined;
          crossOriginLoading?:
            | false
            | "anonymous"
            | "use-credentials"
            | undefined;
          cssFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          cssChunkFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          hotUpdateMainFilename?: string | undefined;
          hotUpdateChunkFilename?: string | undefined;
          hotUpdateGlobal?: string | undefined;
          assetModuleFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          uniqueName?: string | undefined;
          chunkLoadingGlobal?: string | undefined;
          enabledLibraryTypes?: string[] | undefined;
          libraryExport?: string | string[] | undefined;
          libraryTarget?: string | undefined;
          strictModuleExceptionHandling?: boolean | undefined;
          strictModuleErrorHandling?: boolean | undefined;
          globalObject?: string | undefined;
          importFunctionName?: string | undefined;
          importMetaName?: string | undefined;
          iife?: boolean | undefined;
          enabledWasmLoadingTypes?: string[] | undefined;
          webassemblyModuleFilename?: string | undefined;
          chunkFormat?: string | false | undefined;
          enabledChunkLoadingTypes?: string[] | undefined;
          trustedTypes?:
            | string
            | true
            | {
                policyName?: string | undefined;
                onPolicyCreationFailure?: "continue" | "stop" | undefined;
              }
            | undefined;
          sourceMapFilename?: string | undefined;
          hashDigest?: string | undefined;
          hashDigestLength?: number | undefined;
          hashFunction?: "md4" | "xxhash64" | undefined;
          hashSalt?: string | undefined;
          workerChunkLoading?: string | false | undefined;
          workerWasmLoading?: string | false | undefined;
          workerPublicPath?: string | undefined;
          scriptType?: false | "module" | "text/javascript" | undefined;
          devtoolNamespace?: string | undefined;
          devtoolModuleFilenameTemplate?:
            | string
            | ((args_0: any) => any)
            | undefined;
          devtoolFallbackModuleFilenameTemplate?:
            | string
            | ((args_0: any) => any)
            | undefined;
          chunkLoadTimeout?: number | undefined;
          charset?: boolean | undefined;
          compareBeforeEmit?: boolean | undefined;
        }
      >
    >;
    target: import("zod").ZodOptional<
      import("zod").ZodUnion<
        [
          import("zod").ZodLiteral<false>,
          import("zod").ZodUnion<
            [
              import("zod").ZodEnum<
                [
                  "web",
                  "webworker",
                  "es3",
                  "es5",
                  "es2015",
                  "es2016",
                  "es2017",
                  "es2018",
                  "es2019",
                  "es2020",
                  "es2021",
                  "es2022"
                ]
              >,
              import("zod").ZodLiteral<"node">,
              import("zod").ZodLiteral<"async-node">,
              z.Schema<
                `node${number}`,
                import("zod").ZodTypeDef,
                `node${number}`
              >,
              z.Schema<
                `async-node${number}`,
                import("zod").ZodTypeDef,
                `async-node${number}`
              >,
              z.Schema<
                `node${number}.${number}`,
                import("zod").ZodTypeDef,
                `node${number}.${number}`
              >,
              z.Schema<
                `async-node${number}.${number}`,
                import("zod").ZodTypeDef,
                `async-node${number}.${number}`
              >,
              import("zod").ZodLiteral<"electron-main">,
              z.Schema<
                `electron${number}-main`,
                import("zod").ZodTypeDef,
                `electron${number}-main`
              >,
              z.Schema<
                `electron${number}.${number}-main`,
                import("zod").ZodTypeDef,
                `electron${number}.${number}-main`
              >,
              import("zod").ZodLiteral<"electron-renderer">,
              z.Schema<
                `electron${number}-renderer`,
                import("zod").ZodTypeDef,
                `electron${number}-renderer`
              >,
              z.Schema<
                `electron${number}.${number}-renderer`,
                import("zod").ZodTypeDef,
                `electron${number}.${number}-renderer`
              >,
              import("zod").ZodLiteral<"electron-preload">,
              z.Schema<
                `electron${number}-preload`,
                import("zod").ZodTypeDef,
                `electron${number}-preload`
              >,
              z.Schema<
                `electron${number}.${number}-preload`,
                import("zod").ZodTypeDef,
                `electron${number}.${number}-preload`
              >,
              import("zod").ZodLiteral<"nwjs">,
              z.Schema<
                `nwjs${number}`,
                import("zod").ZodTypeDef,
                `nwjs${number}`
              >,
              z.Schema<
                `nwjs${number}.${number}`,
                import("zod").ZodTypeDef,
                `nwjs${number}.${number}`
              >,
              import("zod").ZodLiteral<"node-webkit">,
              z.Schema<
                `node-webkit${number}`,
                import("zod").ZodTypeDef,
                `node-webkit${number}`
              >,
              z.Schema<
                `node-webkit${number}.${number}`,
                import("zod").ZodTypeDef,
                `node-webkit${number}.${number}`
              >,
              import("zod").ZodLiteral<"browserslist">,
              z.Schema<
                `browserslist:${string}`,
                import("zod").ZodTypeDef,
                `browserslist:${string}`
              >
            ]
          >,
          import("zod").ZodArray<
            import("zod").ZodUnion<
              [
                import("zod").ZodEnum<
                  [
                    "web",
                    "webworker",
                    "es3",
                    "es5",
                    "es2015",
                    "es2016",
                    "es2017",
                    "es2018",
                    "es2019",
                    "es2020",
                    "es2021",
                    "es2022"
                  ]
                >,
                import("zod").ZodLiteral<"node">,
                import("zod").ZodLiteral<"async-node">,
                z.Schema<
                  `node${number}`,
                  import("zod").ZodTypeDef,
                  `node${number}`
                >,
                z.Schema<
                  `async-node${number}`,
                  import("zod").ZodTypeDef,
                  `async-node${number}`
                >,
                z.Schema<
                  `node${number}.${number}`,
                  import("zod").ZodTypeDef,
                  `node${number}.${number}`
                >,
                z.Schema<
                  `async-node${number}.${number}`,
                  import("zod").ZodTypeDef,
                  `async-node${number}.${number}`
                >,
                import("zod").ZodLiteral<"electron-main">,
                z.Schema<
                  `electron${number}-main`,
                  import("zod").ZodTypeDef,
                  `electron${number}-main`
                >,
                z.Schema<
                  `electron${number}.${number}-main`,
                  import("zod").ZodTypeDef,
                  `electron${number}.${number}-main`
                >,
                import("zod").ZodLiteral<"electron-renderer">,
                z.Schema<
                  `electron${number}-renderer`,
                  import("zod").ZodTypeDef,
                  `electron${number}-renderer`
                >,
                z.Schema<
                  `electron${number}.${number}-renderer`,
                  import("zod").ZodTypeDef,
                  `electron${number}.${number}-renderer`
                >,
                import("zod").ZodLiteral<"electron-preload">,
                z.Schema<
                  `electron${number}-preload`,
                  import("zod").ZodTypeDef,
                  `electron${number}-preload`
                >,
                z.Schema<
                  `electron${number}.${number}-preload`,
                  import("zod").ZodTypeDef,
                  `electron${number}.${number}-preload`
                >,
                import("zod").ZodLiteral<"nwjs">,
                z.Schema<
                  `nwjs${number}`,
                  import("zod").ZodTypeDef,
                  `nwjs${number}`
                >,
                z.Schema<
                  `nwjs${number}.${number}`,
                  import("zod").ZodTypeDef,
                  `nwjs${number}.${number}`
                >,
                import("zod").ZodLiteral<"node-webkit">,
                z.Schema<
                  `node-webkit${number}`,
                  import("zod").ZodTypeDef,
                  `node-webkit${number}`
                >,
                z.Schema<
                  `node-webkit${number}.${number}`,
                  import("zod").ZodTypeDef,
                  `node-webkit${number}.${number}`
                >,
                import("zod").ZodLiteral<"browserslist">,
                z.Schema<
                  `browserslist:${string}`,
                  import("zod").ZodTypeDef,
                  `browserslist:${string}`
                >
              ]
            >,
            "many"
          >
        ]
      >
    >;
    mode: import("zod").ZodOptional<
      import("zod").ZodEnum<["development", "production", "none"]>
    >;
    experiments: import("zod").ZodOptional<
      import("zod").ZodObject<
        {
          cache: import("zod").ZodUnion<
            [
              import("zod").ZodOptional<import("zod").ZodBoolean>,
              import("zod").ZodUnion<
                [
                  import("zod").ZodObject<
                    {
                      type: import("zod").ZodEnum<["memory"]>;
                    },
                    "strip",
                    import("zod").ZodTypeAny,
                    {
                      type: "memory";
                    },
                    {
                      type: "memory";
                    }
                  >,
                  import("zod").ZodObject<
                    {
                      type: import("zod").ZodEnum<["persistent"]>;
                      buildDependencies: import("zod").ZodOptional<
                        import("zod").ZodArray<import("zod").ZodString, "many">
                      >;
                      version: import("zod").ZodOptional<
                        import("zod").ZodString
                      >;
                      snapshot: import("zod").ZodOptional<
                        import("zod").ZodObject<
                          {
                            immutablePaths: import("zod").ZodOptional<
                              import("zod").ZodArray<
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodString,
                                    z.Schema<
                                      RegExp,
                                      import("zod").ZodTypeDef,
                                      RegExp
                                    >
                                  ]
                                >,
                                "many"
                              >
                            >;
                            unmanagedPaths: import("zod").ZodOptional<
                              import("zod").ZodArray<
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodString,
                                    z.Schema<
                                      RegExp,
                                      import("zod").ZodTypeDef,
                                      RegExp
                                    >
                                  ]
                                >,
                                "many"
                              >
                            >;
                            managedPaths: import("zod").ZodOptional<
                              import("zod").ZodArray<
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodString,
                                    z.Schema<
                                      RegExp,
                                      import("zod").ZodTypeDef,
                                      RegExp
                                    >
                                  ]
                                >,
                                "many"
                              >
                            >;
                          },
                          "strip",
                          import("zod").ZodTypeAny,
                          {
                            immutablePaths?: (string | RegExp)[] | undefined;
                            unmanagedPaths?: (string | RegExp)[] | undefined;
                            managedPaths?: (string | RegExp)[] | undefined;
                          },
                          {
                            immutablePaths?: (string | RegExp)[] | undefined;
                            unmanagedPaths?: (string | RegExp)[] | undefined;
                            managedPaths?: (string | RegExp)[] | undefined;
                          }
                        >
                      >;
                      storage: import("zod").ZodOptional<
                        import("zod").ZodObject<
                          {
                            type: import("zod").ZodEnum<["filesystem"]>;
                            directory: import("zod").ZodOptional<
                              import("zod").ZodString
                            >;
                          },
                          "strip",
                          import("zod").ZodTypeAny,
                          {
                            type: "filesystem";
                            directory?: string | undefined;
                          },
                          {
                            type: "filesystem";
                            directory?: string | undefined;
                          }
                        >
                      >;
                    },
                    "strip",
                    import("zod").ZodTypeAny,
                    {
                      type: "persistent";
                      version?: string | undefined;
                      buildDependencies?: string[] | undefined;
                      snapshot?:
                        | {
                            immutablePaths?: (string | RegExp)[] | undefined;
                            unmanagedPaths?: (string | RegExp)[] | undefined;
                            managedPaths?: (string | RegExp)[] | undefined;
                          }
                        | undefined;
                      storage?:
                        | {
                            type: "filesystem";
                            directory?: string | undefined;
                          }
                        | undefined;
                    },
                    {
                      type: "persistent";
                      version?: string | undefined;
                      buildDependencies?: string[] | undefined;
                      snapshot?:
                        | {
                            immutablePaths?: (string | RegExp)[] | undefined;
                            unmanagedPaths?: (string | RegExp)[] | undefined;
                            managedPaths?: (string | RegExp)[] | undefined;
                          }
                        | undefined;
                      storage?:
                        | {
                            type: "filesystem";
                            directory?: string | undefined;
                          }
                        | undefined;
                    }
                  >
                ]
              >
            ]
          >;
          lazyCompilation: import("zod").ZodUnion<
            [
              import("zod").ZodOptional<import("zod").ZodBoolean>,
              import("zod").ZodObject<
                {
                  imports: import("zod").ZodOptional<import("zod").ZodBoolean>;
                  entries: import("zod").ZodOptional<import("zod").ZodBoolean>;
                  test: import("zod").ZodOptional<
                    import("zod").ZodUnion<
                      [
                        z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>,
                        import("zod").ZodFunction<
                          import("zod").ZodTuple<
                            [
                              z.Schema<Module, import("zod").ZodTypeDef, Module>
                            ],
                            import("zod").ZodUnknown
                          >,
                          import("zod").ZodBoolean
                        >
                      ]
                    >
                  >;
                  client: import("zod").ZodOptional<import("zod").ZodString>;
                  serverUrl: import("zod").ZodOptional<import("zod").ZodString>;
                },
                "strip",
                import("zod").ZodTypeAny,
                {
                  entries?: boolean | undefined;
                  test?:
                    | RegExp
                    | ((args_0: Module, ...args: unknown[]) => boolean)
                    | undefined;
                  imports?: boolean | undefined;
                  client?: string | undefined;
                  serverUrl?: string | undefined;
                },
                {
                  entries?: boolean | undefined;
                  test?:
                    | RegExp
                    | ((args_0: Module, ...args: unknown[]) => boolean)
                    | undefined;
                  imports?: boolean | undefined;
                  client?: string | undefined;
                  serverUrl?: string | undefined;
                }
              >
            ]
          >;
          asyncWebAssembly: import("zod").ZodOptional<import("zod").ZodBoolean>;
          outputModule: import("zod").ZodOptional<import("zod").ZodBoolean>;
          topLevelAwait: import("zod").ZodOptional<import("zod").ZodBoolean>;
          css: import("zod").ZodOptional<import("zod").ZodBoolean>;
          layers: import("zod").ZodOptional<import("zod").ZodBoolean>;
          incremental: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodBoolean,
                import("zod").ZodObject<
                  {
                    make: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    inferAsyncModules: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    providedExports: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    dependenciesDiagnostics: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    sideEffects: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    buildChunkGraph: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    moduleIds: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    chunkIds: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    modulesHashes: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    modulesCodegen: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    modulesRuntimeRequirements: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    chunksRuntimeRequirements: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    chunksHashes: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    chunksRender: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    emitAssets: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                  },
                  "strict",
                  import("zod").ZodTypeAny,
                  {
                    make?: boolean | undefined;
                    providedExports?: boolean | undefined;
                    sideEffects?: boolean | undefined;
                    moduleIds?: boolean | undefined;
                    chunkIds?: boolean | undefined;
                    inferAsyncModules?: boolean | undefined;
                    dependenciesDiagnostics?: boolean | undefined;
                    buildChunkGraph?: boolean | undefined;
                    modulesHashes?: boolean | undefined;
                    modulesCodegen?: boolean | undefined;
                    modulesRuntimeRequirements?: boolean | undefined;
                    chunksRuntimeRequirements?: boolean | undefined;
                    chunksHashes?: boolean | undefined;
                    chunksRender?: boolean | undefined;
                    emitAssets?: boolean | undefined;
                  },
                  {
                    make?: boolean | undefined;
                    providedExports?: boolean | undefined;
                    sideEffects?: boolean | undefined;
                    moduleIds?: boolean | undefined;
                    chunkIds?: boolean | undefined;
                    inferAsyncModules?: boolean | undefined;
                    dependenciesDiagnostics?: boolean | undefined;
                    buildChunkGraph?: boolean | undefined;
                    modulesHashes?: boolean | undefined;
                    modulesCodegen?: boolean | undefined;
                    modulesRuntimeRequirements?: boolean | undefined;
                    chunksRuntimeRequirements?: boolean | undefined;
                    chunksHashes?: boolean | undefined;
                    chunksRender?: boolean | undefined;
                    emitAssets?: boolean | undefined;
                  }
                >
              ]
            >
          >;
          parallelCodeSplitting: import("zod").ZodOptional<
            import("zod").ZodBoolean
          >;
          futureDefaults: import("zod").ZodOptional<import("zod").ZodBoolean>;
          rspackFuture: import("zod").ZodOptional<
            import("zod").ZodObject<
              {
                bundlerInfo: import("zod").ZodOptional<
                  import("zod").ZodObject<
                    {
                      version: import("zod").ZodOptional<
                        import("zod").ZodString
                      >;
                      bundler: import("zod").ZodOptional<
                        import("zod").ZodString
                      >;
                      force: import("zod").ZodOptional<
                        import("zod").ZodUnion<
                          [
                            import("zod").ZodBoolean,
                            import("zod").ZodArray<
                              import("zod").ZodEnum<["version", "uniqueId"]>,
                              "many"
                            >
                          ]
                        >
                      >;
                    },
                    "strict",
                    import("zod").ZodTypeAny,
                    {
                      force?: boolean | ("version" | "uniqueId")[] | undefined;
                      version?: string | undefined;
                      bundler?: string | undefined;
                    },
                    {
                      force?: boolean | ("version" | "uniqueId")[] | undefined;
                      version?: string | undefined;
                      bundler?: string | undefined;
                    }
                  >
                >;
              },
              "strict",
              import("zod").ZodTypeAny,
              {
                bundlerInfo?:
                  | {
                      force?: boolean | ("version" | "uniqueId")[] | undefined;
                      version?: string | undefined;
                      bundler?: string | undefined;
                    }
                  | undefined;
              },
              {
                bundlerInfo?:
                  | {
                      force?: boolean | ("version" | "uniqueId")[] | undefined;
                      version?: string | undefined;
                      bundler?: string | undefined;
                    }
                  | undefined;
              }
            >
          >;
          buildHttp: import("zod").ZodOptional<
            import("zod").ZodObject<
              {
                allowedUris: import("zod").ZodArray<
                  import("zod").ZodUnion<
                    [
                      import("zod").ZodString,
                      z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>
                    ]
                  >,
                  "many"
                >;
                lockfileLocation: import("zod").ZodOptional<
                  import("zod").ZodString
                >;
                cacheLocation: import("zod").ZodOptional<
                  import("zod").ZodUnion<
                    [import("zod").ZodString, import("zod").ZodLiteral<false>]
                  >
                >;
                upgrade: import("zod").ZodOptional<import("zod").ZodBoolean>;
                httpClient: import("zod").ZodOptional<
                  import("zod").ZodFunction<
                    import("zod").ZodTuple<
                      [
                        import("zod").ZodString,
                        import("zod").ZodRecord<
                          import("zod").ZodString,
                          import("zod").ZodString
                        >
                      ],
                      import("zod").ZodUnknown
                    >,
                    import("zod").ZodPromise<
                      import("zod").ZodObject<
                        {
                          status: import("zod").ZodNumber;
                          headers: import("zod").ZodRecord<
                            import("zod").ZodString,
                            import("zod").ZodString
                          >;
                          body: z.Schema<
                            Buffer<ArrayBufferLike>,
                            import("zod").ZodTypeDef,
                            Buffer<ArrayBufferLike>
                          >;
                        },
                        "strip",
                        import("zod").ZodTypeAny,
                        {
                          status: number;
                          body: Buffer<ArrayBufferLike>;
                          headers: Record<string, string>;
                        },
                        {
                          status: number;
                          body: Buffer<ArrayBufferLike>;
                          headers: Record<string, string>;
                        }
                      >
                    >
                  >
                >;
              },
              "strip",
              import("zod").ZodTypeAny,
              {
                allowedUris: (string | RegExp)[];
                httpClient?:
                  | ((
                      args_0: string,
                      args_1: Record<string, string>,
                      ...args: unknown[]
                    ) => Promise<{
                      status: number;
                      body: Buffer<ArrayBufferLike>;
                      headers: Record<string, string>;
                    }>)
                  | undefined;
                lockfileLocation?: string | undefined;
                cacheLocation?: string | false | undefined;
                upgrade?: boolean | undefined;
              },
              {
                allowedUris: (string | RegExp)[];
                httpClient?:
                  | ((
                      args_0: string,
                      args_1: Record<string, string>,
                      ...args: unknown[]
                    ) => Promise<{
                      status: number;
                      body: Buffer<ArrayBufferLike>;
                      headers: Record<string, string>;
                    }>)
                  | undefined;
                lockfileLocation?: string | undefined;
                cacheLocation?: string | false | undefined;
                upgrade?: boolean | undefined;
              }
            >
          >;
          parallelLoader: import("zod").ZodOptional<import("zod").ZodBoolean>;
        },
        "strict",
        import("zod").ZodTypeAny,
        {
          css?: boolean | undefined;
          cache?:
            | boolean
            | {
                type: "memory";
              }
            | {
                type: "persistent";
                version?: string | undefined;
                buildDependencies?: string[] | undefined;
                snapshot?:
                  | {
                      immutablePaths?: (string | RegExp)[] | undefined;
                      unmanagedPaths?: (string | RegExp)[] | undefined;
                      managedPaths?: (string | RegExp)[] | undefined;
                    }
                  | undefined;
                storage?:
                  | {
                      type: "filesystem";
                      directory?: string | undefined;
                    }
                  | undefined;
              }
            | undefined;
          lazyCompilation?:
            | boolean
            | {
                entries?: boolean | undefined;
                test?:
                  | RegExp
                  | ((args_0: Module, ...args: unknown[]) => boolean)
                  | undefined;
                imports?: boolean | undefined;
                client?: string | undefined;
                serverUrl?: string | undefined;
              }
            | undefined;
          asyncWebAssembly?: boolean | undefined;
          outputModule?: boolean | undefined;
          topLevelAwait?: boolean | undefined;
          layers?: boolean | undefined;
          incremental?:
            | boolean
            | {
                make?: boolean | undefined;
                providedExports?: boolean | undefined;
                sideEffects?: boolean | undefined;
                moduleIds?: boolean | undefined;
                chunkIds?: boolean | undefined;
                inferAsyncModules?: boolean | undefined;
                dependenciesDiagnostics?: boolean | undefined;
                buildChunkGraph?: boolean | undefined;
                modulesHashes?: boolean | undefined;
                modulesCodegen?: boolean | undefined;
                modulesRuntimeRequirements?: boolean | undefined;
                chunksRuntimeRequirements?: boolean | undefined;
                chunksHashes?: boolean | undefined;
                chunksRender?: boolean | undefined;
                emitAssets?: boolean | undefined;
              }
            | undefined;
          parallelCodeSplitting?: boolean | undefined;
          futureDefaults?: boolean | undefined;
          rspackFuture?:
            | {
                bundlerInfo?:
                  | {
                      force?: boolean | ("version" | "uniqueId")[] | undefined;
                      version?: string | undefined;
                      bundler?: string | undefined;
                    }
                  | undefined;
              }
            | undefined;
          buildHttp?:
            | {
                allowedUris: (string | RegExp)[];
                httpClient?:
                  | ((
                      args_0: string,
                      args_1: Record<string, string>,
                      ...args: unknown[]
                    ) => Promise<{
                      status: number;
                      body: Buffer<ArrayBufferLike>;
                      headers: Record<string, string>;
                    }>)
                  | undefined;
                lockfileLocation?: string | undefined;
                cacheLocation?: string | false | undefined;
                upgrade?: boolean | undefined;
              }
            | undefined;
          parallelLoader?: boolean | undefined;
        },
        {
          css?: boolean | undefined;
          cache?:
            | boolean
            | {
                type: "memory";
              }
            | {
                type: "persistent";
                version?: string | undefined;
                buildDependencies?: string[] | undefined;
                snapshot?:
                  | {
                      immutablePaths?: (string | RegExp)[] | undefined;
                      unmanagedPaths?: (string | RegExp)[] | undefined;
                      managedPaths?: (string | RegExp)[] | undefined;
                    }
                  | undefined;
                storage?:
                  | {
                      type: "filesystem";
                      directory?: string | undefined;
                    }
                  | undefined;
              }
            | undefined;
          lazyCompilation?:
            | boolean
            | {
                entries?: boolean | undefined;
                test?:
                  | RegExp
                  | ((args_0: Module, ...args: unknown[]) => boolean)
                  | undefined;
                imports?: boolean | undefined;
                client?: string | undefined;
                serverUrl?: string | undefined;
              }
            | undefined;
          asyncWebAssembly?: boolean | undefined;
          outputModule?: boolean | undefined;
          topLevelAwait?: boolean | undefined;
          layers?: boolean | undefined;
          incremental?:
            | boolean
            | {
                make?: boolean | undefined;
                providedExports?: boolean | undefined;
                sideEffects?: boolean | undefined;
                moduleIds?: boolean | undefined;
                chunkIds?: boolean | undefined;
                inferAsyncModules?: boolean | undefined;
                dependenciesDiagnostics?: boolean | undefined;
                buildChunkGraph?: boolean | undefined;
                modulesHashes?: boolean | undefined;
                modulesCodegen?: boolean | undefined;
                modulesRuntimeRequirements?: boolean | undefined;
                chunksRuntimeRequirements?: boolean | undefined;
                chunksHashes?: boolean | undefined;
                chunksRender?: boolean | undefined;
                emitAssets?: boolean | undefined;
              }
            | undefined;
          parallelCodeSplitting?: boolean | undefined;
          futureDefaults?: boolean | undefined;
          rspackFuture?:
            | {
                bundlerInfo?:
                  | {
                      force?: boolean | ("version" | "uniqueId")[] | undefined;
                      version?: string | undefined;
                      bundler?: string | undefined;
                    }
                  | undefined;
              }
            | undefined;
          buildHttp?:
            | {
                allowedUris: (string | RegExp)[];
                httpClient?:
                  | ((
                      args_0: string,
                      args_1: Record<string, string>,
                      ...args: unknown[]
                    ) => Promise<{
                      status: number;
                      body: Buffer<ArrayBufferLike>;
                      headers: Record<string, string>;
                    }>)
                  | undefined;
                lockfileLocation?: string | undefined;
                cacheLocation?: string | false | undefined;
                upgrade?: boolean | undefined;
              }
            | undefined;
          parallelLoader?: boolean | undefined;
        }
      >
    >;
    externals: import("zod").ZodOptional<
      import("zod").ZodUnion<
        [
          import("zod").ZodArray<
            import("zod").ZodUnion<
              [
                import("zod").ZodUnion<
                  [
                    import("zod").ZodUnion<
                      [
                        import("zod").ZodUnion<
                          [
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodString,
                                z.Schema<
                                  RegExp,
                                  import("zod").ZodTypeDef,
                                  RegExp
                                >
                              ]
                            >,
                            import("zod").ZodRecord<
                              import("zod").ZodString,
                              import("zod").ZodUnion<
                                [
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodString,
                                          import("zod").ZodBoolean
                                        ]
                                      >,
                                      import("zod").ZodArray<
                                        import("zod").ZodString,
                                        "many"
                                      >
                                    ]
                                  >,
                                  ZodRspackCrossChecker<
                                    | t.ExternalItemUmdValue
                                    | t.ExternalItemObjectValue
                                  >
                                ]
                              >
                            >
                          ]
                        >,
                        import("zod").ZodFunction<
                          import("zod").ZodTuple<
                            [
                              z.ZodType<t.ExternalItemFunctionData>,
                              import("zod").ZodFunction<
                                import("zod").ZodTuple<
                                  [
                                    import("zod").ZodOptional<
                                      z.Schema<
                                        Error,
                                        import("zod").ZodTypeDef,
                                        Error
                                      >
                                    >,
                                    import("zod").ZodOptional<
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodUnion<
                                            [
                                              import("zod").ZodUnion<
                                                [
                                                  import("zod").ZodString,
                                                  import("zod").ZodBoolean
                                                ]
                                              >,
                                              import("zod").ZodArray<
                                                import("zod").ZodString,
                                                "many"
                                              >
                                            ]
                                          >,
                                          ZodRspackCrossChecker<
                                            | t.ExternalItemUmdValue
                                            | t.ExternalItemObjectValue
                                          >
                                        ]
                                      >
                                    >,
                                    import("zod").ZodOptional<
                                      import("zod").ZodEnum<
                                        [
                                          "var",
                                          "module",
                                          "assign",
                                          "this",
                                          "window",
                                          "self",
                                          "global",
                                          "commonjs",
                                          "commonjs2",
                                          "commonjs-module",
                                          "commonjs-static",
                                          "amd",
                                          "amd-require",
                                          "umd",
                                          "umd2",
                                          "jsonp",
                                          "system",
                                          "promise",
                                          "import",
                                          "module-import",
                                          "script",
                                          "node-commonjs",
                                          "commonjs-import"
                                        ]
                                      >
                                    >
                                  ],
                                  import("zod").ZodUnknown
                                >,
                                import("zod").ZodVoid
                              >
                            ],
                            import("zod").ZodUnknown
                          >,
                          import("zod").ZodUnknown
                        >
                      ]
                    >,
                    import("zod").ZodFunction<
                      import("zod").ZodTuple<
                        [z.ZodType<t.ExternalItemFunctionData>],
                        import("zod").ZodUnknown
                      >,
                      import("zod").ZodPromise<
                        import("zod").ZodUnion<
                          [
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodString,
                                    import("zod").ZodBoolean
                                  ]
                                >,
                                import("zod").ZodArray<
                                  import("zod").ZodString,
                                  "many"
                                >
                              ]
                            >,
                            ZodRspackCrossChecker<
                              t.ExternalItemUmdValue | t.ExternalItemObjectValue
                            >
                          ]
                        >
                      >
                    >
                  ]
                >,
                import("zod").ZodFunction<
                  import("zod").ZodTuple<
                    [z.ZodType<t.ExternalItemFunctionData>],
                    import("zod").ZodUnknown
                  >,
                  import("zod").ZodUnion<
                    [
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodUnion<
                            [import("zod").ZodString, import("zod").ZodBoolean]
                          >,
                          import("zod").ZodArray<
                            import("zod").ZodString,
                            "many"
                          >
                        ]
                      >,
                      ZodRspackCrossChecker<
                        t.ExternalItemUmdValue | t.ExternalItemObjectValue
                      >
                    ]
                  >
                >
              ]
            >,
            "many"
          >,
          import("zod").ZodUnion<
            [
              import("zod").ZodUnion<
                [
                  import("zod").ZodUnion<
                    [
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodUnion<
                            [
                              import("zod").ZodString,
                              z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>
                            ]
                          >,
                          import("zod").ZodRecord<
                            import("zod").ZodString,
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodUnion<
                                      [
                                        import("zod").ZodString,
                                        import("zod").ZodBoolean
                                      ]
                                    >,
                                    import("zod").ZodArray<
                                      import("zod").ZodString,
                                      "many"
                                    >
                                  ]
                                >,
                                ZodRspackCrossChecker<
                                  | t.ExternalItemUmdValue
                                  | t.ExternalItemObjectValue
                                >
                              ]
                            >
                          >
                        ]
                      >,
                      import("zod").ZodFunction<
                        import("zod").ZodTuple<
                          [
                            z.ZodType<t.ExternalItemFunctionData>,
                            import("zod").ZodFunction<
                              import("zod").ZodTuple<
                                [
                                  import("zod").ZodOptional<
                                    z.Schema<
                                      Error,
                                      import("zod").ZodTypeDef,
                                      Error
                                    >
                                  >,
                                  import("zod").ZodOptional<
                                    import("zod").ZodUnion<
                                      [
                                        import("zod").ZodUnion<
                                          [
                                            import("zod").ZodUnion<
                                              [
                                                import("zod").ZodString,
                                                import("zod").ZodBoolean
                                              ]
                                            >,
                                            import("zod").ZodArray<
                                              import("zod").ZodString,
                                              "many"
                                            >
                                          ]
                                        >,
                                        ZodRspackCrossChecker<
                                          | t.ExternalItemUmdValue
                                          | t.ExternalItemObjectValue
                                        >
                                      ]
                                    >
                                  >,
                                  import("zod").ZodOptional<
                                    import("zod").ZodEnum<
                                      [
                                        "var",
                                        "module",
                                        "assign",
                                        "this",
                                        "window",
                                        "self",
                                        "global",
                                        "commonjs",
                                        "commonjs2",
                                        "commonjs-module",
                                        "commonjs-static",
                                        "amd",
                                        "amd-require",
                                        "umd",
                                        "umd2",
                                        "jsonp",
                                        "system",
                                        "promise",
                                        "import",
                                        "module-import",
                                        "script",
                                        "node-commonjs",
                                        "commonjs-import"
                                      ]
                                    >
                                  >
                                ],
                                import("zod").ZodUnknown
                              >,
                              import("zod").ZodVoid
                            >
                          ],
                          import("zod").ZodUnknown
                        >,
                        import("zod").ZodUnknown
                      >
                    ]
                  >,
                  import("zod").ZodFunction<
                    import("zod").ZodTuple<
                      [z.ZodType<t.ExternalItemFunctionData>],
                      import("zod").ZodUnknown
                    >,
                    import("zod").ZodPromise<
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodUnion<
                            [
                              import("zod").ZodUnion<
                                [
                                  import("zod").ZodString,
                                  import("zod").ZodBoolean
                                ]
                              >,
                              import("zod").ZodArray<
                                import("zod").ZodString,
                                "many"
                              >
                            ]
                          >,
                          ZodRspackCrossChecker<
                            t.ExternalItemUmdValue | t.ExternalItemObjectValue
                          >
                        ]
                      >
                    >
                  >
                ]
              >,
              import("zod").ZodFunction<
                import("zod").ZodTuple<
                  [z.ZodType<t.ExternalItemFunctionData>],
                  import("zod").ZodUnknown
                >,
                import("zod").ZodUnion<
                  [
                    import("zod").ZodUnion<
                      [
                        import("zod").ZodUnion<
                          [import("zod").ZodString, import("zod").ZodBoolean]
                        >,
                        import("zod").ZodArray<import("zod").ZodString, "many">
                      ]
                    >,
                    ZodRspackCrossChecker<
                      t.ExternalItemUmdValue | t.ExternalItemObjectValue
                    >
                  ]
                >
              >
            ]
          >
        ]
      >
    >;
    externalsType: import("zod").ZodOptional<
      import("zod").ZodEnum<
        [
          "var",
          "module",
          "assign",
          "this",
          "window",
          "self",
          "global",
          "commonjs",
          "commonjs2",
          "commonjs-module",
          "commonjs-static",
          "amd",
          "amd-require",
          "umd",
          "umd2",
          "jsonp",
          "system",
          "promise",
          "import",
          "module-import",
          "script",
          "node-commonjs",
          "commonjs-import"
        ]
      >
    >;
    externalsPresets: import("zod").ZodOptional<
      import("zod").ZodObject<
        {
          node: import("zod").ZodOptional<import("zod").ZodBoolean>;
          web: import("zod").ZodOptional<import("zod").ZodBoolean>;
          webAsync: import("zod").ZodOptional<import("zod").ZodBoolean>;
          electron: import("zod").ZodOptional<import("zod").ZodBoolean>;
          electronMain: import("zod").ZodOptional<import("zod").ZodBoolean>;
          electronPreload: import("zod").ZodOptional<import("zod").ZodBoolean>;
          electronRenderer: import("zod").ZodOptional<import("zod").ZodBoolean>;
          nwjs: import("zod").ZodOptional<import("zod").ZodBoolean>;
        },
        "strict",
        import("zod").ZodTypeAny,
        {
          node?: boolean | undefined;
          web?: boolean | undefined;
          nwjs?: boolean | undefined;
          webAsync?: boolean | undefined;
          electron?: boolean | undefined;
          electronMain?: boolean | undefined;
          electronPreload?: boolean | undefined;
          electronRenderer?: boolean | undefined;
        },
        {
          node?: boolean | undefined;
          web?: boolean | undefined;
          nwjs?: boolean | undefined;
          webAsync?: boolean | undefined;
          electron?: boolean | undefined;
          electronMain?: boolean | undefined;
          electronPreload?: boolean | undefined;
          electronRenderer?: boolean | undefined;
        }
      >
    >;
    infrastructureLogging: import("zod").ZodOptional<
      import("zod").ZodObject<
        {
          appendOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
          colors: import("zod").ZodOptional<import("zod").ZodBoolean>;
          console: import("zod").ZodOptional<
            z.Schema<Console, import("zod").ZodTypeDef, Console>
          >;
          debug: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodBoolean,
                import("zod").ZodUnion<
                  [
                    import("zod").ZodArray<
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodUnion<
                            [
                              z.Schema<
                                RegExp,
                                import("zod").ZodTypeDef,
                                RegExp
                              >,
                              import("zod").ZodString
                            ]
                          >,
                          import("zod").ZodFunction<
                            import("zod").ZodTuple<
                              [import("zod").ZodString],
                              import("zod").ZodUnknown
                            >,
                            import("zod").ZodBoolean
                          >
                        ]
                      >,
                      "many"
                    >,
                    import("zod").ZodUnion<
                      [
                        import("zod").ZodUnion<
                          [
                            z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>,
                            import("zod").ZodString
                          ]
                        >,
                        import("zod").ZodFunction<
                          import("zod").ZodTuple<
                            [import("zod").ZodString],
                            import("zod").ZodUnknown
                          >,
                          import("zod").ZodBoolean
                        >
                      ]
                    >
                  ]
                >
              ]
            >
          >;
          level: import("zod").ZodOptional<
            import("zod").ZodEnum<
              ["none", "error", "warn", "info", "log", "verbose"]
            >
          >;
          stream: import("zod").ZodOptional<
            z.Schema<
              NodeJS.WritableStream,
              import("zod").ZodTypeDef,
              NodeJS.WritableStream
            >
          >;
        },
        "strict",
        import("zod").ZodTypeAny,
        {
          debug?:
            | string
            | boolean
            | RegExp
            | ((args_0: string, ...args: unknown[]) => boolean)
            | (
                | string
                | RegExp
                | ((args_0: string, ...args: unknown[]) => boolean)
              )[]
            | undefined;
          colors?: boolean | undefined;
          level?:
            | "error"
            | "warn"
            | "info"
            | "log"
            | "verbose"
            | "none"
            | undefined;
          console?: Console | undefined;
          appendOnly?: boolean | undefined;
          stream?: NodeJS.WritableStream | undefined;
        },
        {
          debug?:
            | string
            | boolean
            | RegExp
            | ((args_0: string, ...args: unknown[]) => boolean)
            | (
                | string
                | RegExp
                | ((args_0: string, ...args: unknown[]) => boolean)
              )[]
            | undefined;
          colors?: boolean | undefined;
          level?:
            | "error"
            | "warn"
            | "info"
            | "log"
            | "verbose"
            | "none"
            | undefined;
          console?: Console | undefined;
          appendOnly?: boolean | undefined;
          stream?: NodeJS.WritableStream | undefined;
        }
      >
    >;
    cache: import("zod").ZodOptional<import("zod").ZodBoolean>;
    context: import("zod").ZodOptional<
      z.ZodTransformer<import("zod").ZodString, string, string>
    >;
    devtool: import("zod").ZodOptional<
      import("zod").ZodUnion<
        [
          import("zod").ZodLiteral<false>,
          import("zod").ZodEnum<
            [
              "eval",
              "cheap-source-map",
              "cheap-module-source-map",
              "source-map",
              "inline-cheap-source-map",
              "inline-cheap-module-source-map",
              "inline-source-map",
              "inline-nosources-cheap-source-map",
              "inline-nosources-cheap-module-source-map",
              "inline-nosources-source-map",
              "nosources-cheap-source-map",
              "nosources-cheap-module-source-map",
              "nosources-source-map",
              "hidden-nosources-cheap-source-map",
              "hidden-nosources-cheap-module-source-map",
              "hidden-nosources-source-map",
              "hidden-cheap-source-map",
              "hidden-cheap-module-source-map",
              "hidden-source-map",
              "eval-cheap-source-map",
              "eval-cheap-module-source-map",
              "eval-source-map",
              "eval-nosources-cheap-source-map",
              "eval-nosources-cheap-module-source-map",
              "eval-nosources-source-map"
            ]
          >
        ]
      >
    >;
    node: import("zod").ZodOptional<
      import("zod").ZodUnion<
        [
          import("zod").ZodLiteral<false>,
          import("zod").ZodObject<
            {
              __dirname: import("zod").ZodOptional<
                import("zod").ZodUnion<
                  [
                    import("zod").ZodBoolean,
                    import("zod").ZodEnum<
                      ["warn-mock", "mock", "eval-only", "node-module"]
                    >
                  ]
                >
              >;
              __filename: import("zod").ZodOptional<
                import("zod").ZodUnion<
                  [
                    import("zod").ZodBoolean,
                    import("zod").ZodEnum<
                      ["warn-mock", "mock", "eval-only", "node-module"]
                    >
                  ]
                >
              >;
              global: import("zod").ZodOptional<
                import("zod").ZodUnion<
                  [import("zod").ZodBoolean, import("zod").ZodLiteral<"warn">]
                >
              >;
            },
            "strict",
            import("zod").ZodTypeAny,
            {
              global?: boolean | "warn" | undefined;
              __dirname?:
                | boolean
                | "warn-mock"
                | "mock"
                | "eval-only"
                | "node-module"
                | undefined;
              __filename?:
                | boolean
                | "warn-mock"
                | "mock"
                | "eval-only"
                | "node-module"
                | undefined;
            },
            {
              global?: boolean | "warn" | undefined;
              __dirname?:
                | boolean
                | "warn-mock"
                | "mock"
                | "eval-only"
                | "node-module"
                | undefined;
              __filename?:
                | boolean
                | "warn-mock"
                | "mock"
                | "eval-only"
                | "node-module"
                | undefined;
            }
          >
        ]
      >
    >;
    loader: import("zod").ZodOptional<
      import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>
    >;
    ignoreWarnings: import("zod").ZodOptional<
      import("zod").ZodArray<
        import("zod").ZodUnion<
          [
            z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>,
            import("zod").ZodFunction<
              import("zod").ZodTuple<
                [
                  z.Schema<Error, import("zod").ZodTypeDef, Error>,
                  z.Schema<Compilation, import("zod").ZodTypeDef, Compilation>
                ],
                import("zod").ZodUnknown
              >,
              import("zod").ZodBoolean
            >
          ]
        >,
        "many"
      >
    >;
    watchOptions: import("zod").ZodOptional<
      import("zod").ZodObject<
        {
          aggregateTimeout: import("zod").ZodOptional<import("zod").ZodNumber>;
          followSymlinks: import("zod").ZodOptional<import("zod").ZodBoolean>;
          ignored: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodUnion<
                  [
                    import("zod").ZodArray<import("zod").ZodString, "many">,
                    z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>
                  ]
                >,
                import("zod").ZodString
              ]
            >
          >;
          poll: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [import("zod").ZodNumber, import("zod").ZodBoolean]
            >
          >;
          stdin: import("zod").ZodOptional<import("zod").ZodBoolean>;
        },
        "strict",
        import("zod").ZodTypeAny,
        {
          aggregateTimeout?: number | undefined;
          followSymlinks?: boolean | undefined;
          ignored?: string | RegExp | string[] | undefined;
          poll?: number | boolean | undefined;
          stdin?: boolean | undefined;
        },
        {
          aggregateTimeout?: number | undefined;
          followSymlinks?: boolean | undefined;
          ignored?: string | RegExp | string[] | undefined;
          poll?: number | boolean | undefined;
          stdin?: boolean | undefined;
        }
      >
    >;
    watch: import("zod").ZodOptional<import("zod").ZodBoolean>;
    stats: import("zod").ZodOptional<
      import("zod").ZodUnion<
        [
          import("zod").ZodUnion<
            [
              import("zod").ZodBoolean,
              import("zod").ZodEnum<
                [
                  "normal",
                  "none",
                  "verbose",
                  "errors-only",
                  "errors-warnings",
                  "minimal",
                  "detailed",
                  "summary"
                ]
              >
            ]
          >,
          import("zod").ZodObject<
            {
              all: import("zod").ZodOptional<import("zod").ZodBoolean>;
              preset: import("zod").ZodOptional<
                import("zod").ZodUnion<
                  [
                    import("zod").ZodBoolean,
                    import("zod").ZodEnum<
                      [
                        "normal",
                        "none",
                        "verbose",
                        "errors-only",
                        "errors-warnings",
                        "minimal",
                        "detailed",
                        "summary"
                      ]
                    >
                  ]
                >
              >;
              assets: import("zod").ZodOptional<import("zod").ZodBoolean>;
              chunks: import("zod").ZodOptional<import("zod").ZodBoolean>;
              modules: import("zod").ZodOptional<import("zod").ZodBoolean>;
              entrypoints: import("zod").ZodOptional<
                import("zod").ZodUnion<
                  [import("zod").ZodBoolean, import("zod").ZodLiteral<"auto">]
                >
              >;
              chunkGroups: import("zod").ZodOptional<import("zod").ZodBoolean>;
              warnings: import("zod").ZodOptional<import("zod").ZodBoolean>;
              warningsCount: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              errors: import("zod").ZodOptional<import("zod").ZodBoolean>;
              errorsCount: import("zod").ZodOptional<import("zod").ZodBoolean>;
              colors: import("zod").ZodOptional<import("zod").ZodBoolean>;
              hash: import("zod").ZodOptional<import("zod").ZodBoolean>;
              version: import("zod").ZodOptional<import("zod").ZodBoolean>;
              reasons: import("zod").ZodOptional<import("zod").ZodBoolean>;
              publicPath: import("zod").ZodOptional<import("zod").ZodBoolean>;
              outputPath: import("zod").ZodOptional<import("zod").ZodBoolean>;
              chunkModules: import("zod").ZodOptional<import("zod").ZodBoolean>;
              chunkRelations: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              ids: import("zod").ZodOptional<import("zod").ZodBoolean>;
              timings: import("zod").ZodOptional<import("zod").ZodBoolean>;
              builtAt: import("zod").ZodOptional<import("zod").ZodBoolean>;
              moduleAssets: import("zod").ZodOptional<import("zod").ZodBoolean>;
              nestedModules: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              source: import("zod").ZodOptional<import("zod").ZodBoolean>;
              logging: import("zod").ZodOptional<
                import("zod").ZodUnion<
                  [
                    import("zod").ZodEnum<
                      ["none", "error", "warn", "info", "log", "verbose"]
                    >,
                    import("zod").ZodBoolean
                  ]
                >
              >;
              loggingDebug: import("zod").ZodOptional<
                import("zod").ZodUnion<
                  [
                    import("zod").ZodBoolean,
                    import("zod").ZodUnion<
                      [
                        import("zod").ZodArray<
                          import("zod").ZodUnion<
                            [
                              import("zod").ZodUnion<
                                [
                                  z.Schema<
                                    RegExp,
                                    import("zod").ZodTypeDef,
                                    RegExp
                                  >,
                                  import("zod").ZodString
                                ]
                              >,
                              import("zod").ZodFunction<
                                import("zod").ZodTuple<
                                  [import("zod").ZodString],
                                  import("zod").ZodUnknown
                                >,
                                import("zod").ZodBoolean
                              >
                            ]
                          >,
                          "many"
                        >,
                        import("zod").ZodUnion<
                          [
                            import("zod").ZodUnion<
                              [
                                z.Schema<
                                  RegExp,
                                  import("zod").ZodTypeDef,
                                  RegExp
                                >,
                                import("zod").ZodString
                              ]
                            >,
                            import("zod").ZodFunction<
                              import("zod").ZodTuple<
                                [import("zod").ZodString],
                                import("zod").ZodUnknown
                              >,
                              import("zod").ZodBoolean
                            >
                          ]
                        >
                      ]
                    >
                  ]
                >
              >;
              loggingTrace: import("zod").ZodOptional<import("zod").ZodBoolean>;
              runtimeModules: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              children: import("zod").ZodOptional<import("zod").ZodBoolean>;
              usedExports: import("zod").ZodOptional<import("zod").ZodBoolean>;
              providedExports: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              optimizationBailout: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              groupModulesByType: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              groupModulesByCacheStatus: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              groupModulesByLayer: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              groupModulesByAttributes: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              groupModulesByPath: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              groupModulesByExtension: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              modulesSpace: import("zod").ZodOptional<import("zod").ZodNumber>;
              chunkModulesSpace: import("zod").ZodOptional<
                import("zod").ZodNumber
              >;
              nestedModulesSpace: import("zod").ZodOptional<
                import("zod").ZodNumber
              >;
              relatedAssets: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              groupAssetsByEmitStatus: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              groupAssetsByInfo: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              groupAssetsByPath: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              groupAssetsByExtension: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              groupAssetsByChunk: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              assetsSpace: import("zod").ZodOptional<import("zod").ZodNumber>;
              orphanModules: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              excludeModules: import("zod").ZodOptional<
                import("zod").ZodUnion<
                  [
                    import("zod").ZodUnion<
                      [
                        import("zod").ZodUnion<
                          [
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodArray<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodString,
                                          z.Schema<
                                            RegExp,
                                            import("zod").ZodTypeDef,
                                            RegExp
                                          >
                                        ]
                                      >,
                                      import("zod").ZodFunction<
                                        import("zod").ZodTuple<
                                          [
                                            import("zod").ZodString,
                                            import("zod").ZodAny,
                                            import("zod").ZodAny
                                          ],
                                          null
                                        >,
                                        import("zod").ZodBoolean
                                      >
                                    ]
                                  >,
                                  "many"
                                >,
                                import("zod").ZodString
                              ]
                            >,
                            z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>
                          ]
                        >,
                        import("zod").ZodFunction<
                          import("zod").ZodTuple<
                            [
                              import("zod").ZodString,
                              import("zod").ZodAny,
                              import("zod").ZodAny
                            ],
                            null
                          >,
                          import("zod").ZodBoolean
                        >
                      ]
                    >,
                    import("zod").ZodBoolean
                  ]
                >
              >;
              excludeAssets: import("zod").ZodOptional<
                import("zod").ZodUnion<
                  [
                    import("zod").ZodUnion<
                      [
                        import("zod").ZodUnion<
                          [
                            import("zod").ZodArray<
                              import("zod").ZodUnion<
                                [
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodString,
                                      z.Schema<
                                        RegExp,
                                        import("zod").ZodTypeDef,
                                        RegExp
                                      >
                                    ]
                                  >,
                                  import("zod").ZodFunction<
                                    import("zod").ZodTuple<
                                      [
                                        import("zod").ZodString,
                                        import("zod").ZodAny
                                      ],
                                      null
                                    >,
                                    import("zod").ZodBoolean
                                  >
                                ]
                              >,
                              "many"
                            >,
                            import("zod").ZodString
                          ]
                        >,
                        z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>
                      ]
                    >,
                    import("zod").ZodFunction<
                      import("zod").ZodTuple<
                        [import("zod").ZodString, import("zod").ZodAny],
                        null
                      >,
                      import("zod").ZodBoolean
                    >
                  ]
                >
              >;
              modulesSort: import("zod").ZodOptional<import("zod").ZodString>;
              chunkModulesSort: import("zod").ZodOptional<
                import("zod").ZodString
              >;
              nestedModulesSort: import("zod").ZodOptional<
                import("zod").ZodString
              >;
              chunksSort: import("zod").ZodOptional<import("zod").ZodString>;
              assetsSort: import("zod").ZodOptional<import("zod").ZodString>;
              performance: import("zod").ZodOptional<import("zod").ZodBoolean>;
              env: import("zod").ZodOptional<import("zod").ZodBoolean>;
              chunkGroupAuxiliary: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              chunkGroupChildren: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              chunkGroupMaxAssets: import("zod").ZodOptional<
                import("zod").ZodNumber
              >;
              dependentModules: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              chunkOrigins: import("zod").ZodOptional<import("zod").ZodBoolean>;
              runtime: import("zod").ZodOptional<import("zod").ZodBoolean>;
              depth: import("zod").ZodOptional<import("zod").ZodBoolean>;
              reasonsSpace: import("zod").ZodOptional<import("zod").ZodNumber>;
              groupReasonsByOrigin: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              errorDetails: import("zod").ZodOptional<import("zod").ZodBoolean>;
              errorStack: import("zod").ZodOptional<import("zod").ZodBoolean>;
              moduleTrace: import("zod").ZodOptional<import("zod").ZodBoolean>;
              cachedModules: import("zod").ZodOptional<
                import("zod").ZodBoolean
              >;
              cachedAssets: import("zod").ZodOptional<import("zod").ZodBoolean>;
              cached: import("zod").ZodOptional<import("zod").ZodBoolean>;
              errorsSpace: import("zod").ZodOptional<import("zod").ZodNumber>;
              warningsSpace: import("zod").ZodOptional<import("zod").ZodNumber>;
            },
            "strict",
            import("zod").ZodTypeAny,
            {
              ids?: boolean | undefined;
              runtime?: boolean | undefined;
              hash?: boolean | undefined;
              modules?: boolean | undefined;
              publicPath?: boolean | undefined;
              chunks?: boolean | undefined;
              source?: boolean | undefined;
              all?: boolean | undefined;
              usedExports?: boolean | undefined;
              assets?: boolean | undefined;
              version?: boolean | undefined;
              preset?:
                | boolean
                | "verbose"
                | "none"
                | "normal"
                | "errors-only"
                | "errors-warnings"
                | "minimal"
                | "detailed"
                | "summary"
                | undefined;
              entrypoints?: boolean | "auto" | undefined;
              chunkGroups?: boolean | undefined;
              warnings?: boolean | undefined;
              warningsCount?: boolean | undefined;
              errors?: boolean | undefined;
              errorsCount?: boolean | undefined;
              colors?: boolean | undefined;
              reasons?: boolean | undefined;
              outputPath?: boolean | undefined;
              chunkModules?: boolean | undefined;
              chunkRelations?: boolean | undefined;
              timings?: boolean | undefined;
              builtAt?: boolean | undefined;
              moduleAssets?: boolean | undefined;
              nestedModules?: boolean | undefined;
              logging?:
                | boolean
                | "error"
                | "warn"
                | "info"
                | "log"
                | "verbose"
                | "none"
                | undefined;
              loggingDebug?:
                | string
                | boolean
                | RegExp
                | ((args_0: string, ...args: unknown[]) => boolean)
                | (
                    | string
                    | RegExp
                    | ((args_0: string, ...args: unknown[]) => boolean)
                  )[]
                | undefined;
              loggingTrace?: boolean | undefined;
              runtimeModules?: boolean | undefined;
              children?: boolean | undefined;
              providedExports?: boolean | undefined;
              optimizationBailout?: boolean | undefined;
              groupModulesByType?: boolean | undefined;
              groupModulesByCacheStatus?: boolean | undefined;
              groupModulesByLayer?: boolean | undefined;
              groupModulesByAttributes?: boolean | undefined;
              groupModulesByPath?: boolean | undefined;
              groupModulesByExtension?: boolean | undefined;
              modulesSpace?: number | undefined;
              chunkModulesSpace?: number | undefined;
              nestedModulesSpace?: number | undefined;
              relatedAssets?: boolean | undefined;
              groupAssetsByEmitStatus?: boolean | undefined;
              groupAssetsByInfo?: boolean | undefined;
              groupAssetsByPath?: boolean | undefined;
              groupAssetsByExtension?: boolean | undefined;
              groupAssetsByChunk?: boolean | undefined;
              assetsSpace?: number | undefined;
              orphanModules?: boolean | undefined;
              excludeModules?:
                | string
                | boolean
                | RegExp
                | ((args_0: string, args_1: any, args_2: any) => boolean)
                | (
                    | string
                    | RegExp
                    | ((args_0: string, args_1: any, args_2: any) => boolean)
                  )[]
                | undefined;
              excludeAssets?:
                | string
                | RegExp
                | ((args_0: string, args_1: any) => boolean)
                | (
                    | string
                    | RegExp
                    | ((args_0: string, args_1: any) => boolean)
                  )[]
                | undefined;
              modulesSort?: string | undefined;
              chunkModulesSort?: string | undefined;
              nestedModulesSort?: string | undefined;
              chunksSort?: string | undefined;
              assetsSort?: string | undefined;
              performance?: boolean | undefined;
              env?: boolean | undefined;
              chunkGroupAuxiliary?: boolean | undefined;
              chunkGroupChildren?: boolean | undefined;
              chunkGroupMaxAssets?: number | undefined;
              dependentModules?: boolean | undefined;
              chunkOrigins?: boolean | undefined;
              depth?: boolean | undefined;
              reasonsSpace?: number | undefined;
              groupReasonsByOrigin?: boolean | undefined;
              errorDetails?: boolean | undefined;
              errorStack?: boolean | undefined;
              moduleTrace?: boolean | undefined;
              cachedModules?: boolean | undefined;
              cachedAssets?: boolean | undefined;
              cached?: boolean | undefined;
              errorsSpace?: number | undefined;
              warningsSpace?: number | undefined;
            },
            {
              ids?: boolean | undefined;
              runtime?: boolean | undefined;
              hash?: boolean | undefined;
              modules?: boolean | undefined;
              publicPath?: boolean | undefined;
              chunks?: boolean | undefined;
              source?: boolean | undefined;
              all?: boolean | undefined;
              usedExports?: boolean | undefined;
              assets?: boolean | undefined;
              version?: boolean | undefined;
              preset?:
                | boolean
                | "verbose"
                | "none"
                | "normal"
                | "errors-only"
                | "errors-warnings"
                | "minimal"
                | "detailed"
                | "summary"
                | undefined;
              entrypoints?: boolean | "auto" | undefined;
              chunkGroups?: boolean | undefined;
              warnings?: boolean | undefined;
              warningsCount?: boolean | undefined;
              errors?: boolean | undefined;
              errorsCount?: boolean | undefined;
              colors?: boolean | undefined;
              reasons?: boolean | undefined;
              outputPath?: boolean | undefined;
              chunkModules?: boolean | undefined;
              chunkRelations?: boolean | undefined;
              timings?: boolean | undefined;
              builtAt?: boolean | undefined;
              moduleAssets?: boolean | undefined;
              nestedModules?: boolean | undefined;
              logging?:
                | boolean
                | "error"
                | "warn"
                | "info"
                | "log"
                | "verbose"
                | "none"
                | undefined;
              loggingDebug?:
                | string
                | boolean
                | RegExp
                | ((args_0: string, ...args: unknown[]) => boolean)
                | (
                    | string
                    | RegExp
                    | ((args_0: string, ...args: unknown[]) => boolean)
                  )[]
                | undefined;
              loggingTrace?: boolean | undefined;
              runtimeModules?: boolean | undefined;
              children?: boolean | undefined;
              providedExports?: boolean | undefined;
              optimizationBailout?: boolean | undefined;
              groupModulesByType?: boolean | undefined;
              groupModulesByCacheStatus?: boolean | undefined;
              groupModulesByLayer?: boolean | undefined;
              groupModulesByAttributes?: boolean | undefined;
              groupModulesByPath?: boolean | undefined;
              groupModulesByExtension?: boolean | undefined;
              modulesSpace?: number | undefined;
              chunkModulesSpace?: number | undefined;
              nestedModulesSpace?: number | undefined;
              relatedAssets?: boolean | undefined;
              groupAssetsByEmitStatus?: boolean | undefined;
              groupAssetsByInfo?: boolean | undefined;
              groupAssetsByPath?: boolean | undefined;
              groupAssetsByExtension?: boolean | undefined;
              groupAssetsByChunk?: boolean | undefined;
              assetsSpace?: number | undefined;
              orphanModules?: boolean | undefined;
              excludeModules?:
                | string
                | boolean
                | RegExp
                | ((args_0: string, args_1: any, args_2: any) => boolean)
                | (
                    | string
                    | RegExp
                    | ((args_0: string, args_1: any, args_2: any) => boolean)
                  )[]
                | undefined;
              excludeAssets?:
                | string
                | RegExp
                | ((args_0: string, args_1: any) => boolean)
                | (
                    | string
                    | RegExp
                    | ((args_0: string, args_1: any) => boolean)
                  )[]
                | undefined;
              modulesSort?: string | undefined;
              chunkModulesSort?: string | undefined;
              nestedModulesSort?: string | undefined;
              chunksSort?: string | undefined;
              assetsSort?: string | undefined;
              performance?: boolean | undefined;
              env?: boolean | undefined;
              chunkGroupAuxiliary?: boolean | undefined;
              chunkGroupChildren?: boolean | undefined;
              chunkGroupMaxAssets?: number | undefined;
              dependentModules?: boolean | undefined;
              chunkOrigins?: boolean | undefined;
              depth?: boolean | undefined;
              reasonsSpace?: number | undefined;
              groupReasonsByOrigin?: boolean | undefined;
              errorDetails?: boolean | undefined;
              errorStack?: boolean | undefined;
              moduleTrace?: boolean | undefined;
              cachedModules?: boolean | undefined;
              cachedAssets?: boolean | undefined;
              cached?: boolean | undefined;
              errorsSpace?: number | undefined;
              warningsSpace?: number | undefined;
            }
          >
        ]
      >
    >;
    snapshot: import("zod").ZodOptional<
      import("zod").ZodObject<{}, "strict", import("zod").ZodTypeAny, {}, {}>
    >;
    optimization: import("zod").ZodOptional<
      import("zod").ZodObject<
        {
          moduleIds: import("zod").ZodOptional<
            import("zod").ZodEnum<["named", "natural", "deterministic"]>
          >;
          chunkIds: import("zod").ZodOptional<
            import("zod").ZodEnum<
              ["natural", "named", "deterministic", "size", "total-size"]
            >
          >;
          minimize: import("zod").ZodOptional<import("zod").ZodBoolean>;
          minimizer: import("zod").ZodOptional<
            import("zod").ZodArray<
              import("zod").ZodUnion<
                [
                  import("zod").ZodLiteral<"...">,
                  import("zod").ZodUnion<
                    [
                      z.Schema<
                        | t.RspackPluginInstance
                        | t.WebpackPluginInstance
                        | t.RspackPluginFunction
                        | t.WebpackPluginFunction,
                        import("zod").ZodTypeDef,
                        | t.RspackPluginInstance
                        | t.WebpackPluginInstance
                        | t.RspackPluginFunction
                        | t.WebpackPluginFunction
                      >,
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodLiteral<false>,
                          import("zod").ZodLiteral<0>,
                          import("zod").ZodLiteral<"">,
                          import("zod").ZodNull,
                          import("zod").ZodUndefined
                        ]
                      >
                    ]
                  >
                ]
              >,
              "many"
            >
          >;
          mergeDuplicateChunks: import("zod").ZodOptional<
            import("zod").ZodBoolean
          >;
          splitChunks: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodLiteral<false>,
                import("zod").ZodObject<
                  {
                    chunks: import("zod").ZodOptional<
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodUnion<
                            [
                              import("zod").ZodEnum<
                                ["initial", "async", "all"]
                              >,
                              z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>
                            ]
                          >,
                          import("zod").ZodFunction<
                            import("zod").ZodTuple<
                              [
                                z.Schema<Chunk, import("zod").ZodTypeDef, Chunk>
                              ],
                              import("zod").ZodUnknown
                            >,
                            import("zod").ZodBoolean
                          >
                        ]
                      >
                    >;
                    defaultSizeTypes: import("zod").ZodOptional<
                      import("zod").ZodArray<import("zod").ZodString, "many">
                    >;
                    minChunks: import("zod").ZodOptional<
                      import("zod").ZodNumber
                    >;
                    usedExports: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                    name: import("zod").ZodOptional<
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodUnion<
                            [
                              import("zod").ZodString,
                              import("zod").ZodLiteral<false>
                            ]
                          >,
                          import("zod").ZodFunction<
                            import("zod").ZodTuple<
                              [
                                z.Schema<
                                  Module,
                                  import("zod").ZodTypeDef,
                                  Module
                                >,
                                import("zod").ZodArray<
                                  z.Schema<
                                    Chunk,
                                    import("zod").ZodTypeDef,
                                    Chunk
                                  >,
                                  "many"
                                >,
                                import("zod").ZodString
                              ],
                              import("zod").ZodUnknown
                            >,
                            import("zod").ZodOptional<import("zod").ZodString>
                          >
                        ]
                      >
                    >;
                    filename: import("zod").ZodOptional<
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodString,
                          import("zod").ZodFunction<
                            import("zod").ZodTuple<
                              [
                                z.Schema<
                                  PathData,
                                  import("zod").ZodTypeDef,
                                  PathData
                                >,
                                import("zod").ZodOptional<
                                  z.Schema<
                                    AssetInfo,
                                    import("zod").ZodTypeDef,
                                    AssetInfo
                                  >
                                >
                              ],
                              import("zod").ZodUnknown
                            >,
                            import("zod").ZodString
                          >
                        ]
                      >
                    >;
                    minSize: import("zod").ZodOptional<
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodNumber,
                          import("zod").ZodRecord<
                            import("zod").ZodString,
                            import("zod").ZodNumber
                          >
                        ]
                      >
                    >;
                    maxSize: import("zod").ZodOptional<
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodNumber,
                          import("zod").ZodRecord<
                            import("zod").ZodString,
                            import("zod").ZodNumber
                          >
                        ]
                      >
                    >;
                    maxAsyncSize: import("zod").ZodOptional<
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodNumber,
                          import("zod").ZodRecord<
                            import("zod").ZodString,
                            import("zod").ZodNumber
                          >
                        ]
                      >
                    >;
                    maxInitialSize: import("zod").ZodOptional<
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodNumber,
                          import("zod").ZodRecord<
                            import("zod").ZodString,
                            import("zod").ZodNumber
                          >
                        ]
                      >
                    >;
                    maxAsyncRequests: import("zod").ZodOptional<
                      import("zod").ZodNumber
                    >;
                    maxInitialRequests: import("zod").ZodOptional<
                      import("zod").ZodNumber
                    >;
                    automaticNameDelimiter: import("zod").ZodOptional<
                      import("zod").ZodString
                    >;
                    cacheGroups: import("zod").ZodOptional<
                      import("zod").ZodRecord<
                        import("zod").ZodString,
                        import("zod").ZodUnion<
                          [
                            import("zod").ZodLiteral<false>,
                            import("zod").ZodObject<
                              {
                                chunks: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodEnum<
                                            ["initial", "async", "all"]
                                          >,
                                          z.Schema<
                                            RegExp,
                                            import("zod").ZodTypeDef,
                                            RegExp
                                          >
                                        ]
                                      >,
                                      import("zod").ZodFunction<
                                        import("zod").ZodTuple<
                                          [
                                            z.Schema<
                                              Chunk,
                                              import("zod").ZodTypeDef,
                                              Chunk
                                            >
                                          ],
                                          import("zod").ZodUnknown
                                        >,
                                        import("zod").ZodBoolean
                                      >
                                    ]
                                  >
                                >;
                                defaultSizeTypes: import("zod").ZodOptional<
                                  import("zod").ZodArray<
                                    import("zod").ZodString,
                                    "many"
                                  >
                                >;
                                minChunks: import("zod").ZodOptional<
                                  import("zod").ZodNumber
                                >;
                                usedExports: import("zod").ZodOptional<
                                  import("zod").ZodBoolean
                                >;
                                name: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodString,
                                          import("zod").ZodLiteral<false>
                                        ]
                                      >,
                                      import("zod").ZodFunction<
                                        import("zod").ZodTuple<
                                          [
                                            z.Schema<
                                              Module,
                                              import("zod").ZodTypeDef,
                                              Module
                                            >,
                                            import("zod").ZodArray<
                                              z.Schema<
                                                Chunk,
                                                import("zod").ZodTypeDef,
                                                Chunk
                                              >,
                                              "many"
                                            >,
                                            import("zod").ZodString
                                          ],
                                          import("zod").ZodUnknown
                                        >,
                                        import("zod").ZodOptional<
                                          import("zod").ZodString
                                        >
                                      >
                                    ]
                                  >
                                >;
                                filename: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodString,
                                      import("zod").ZodFunction<
                                        import("zod").ZodTuple<
                                          [
                                            z.Schema<
                                              PathData,
                                              import("zod").ZodTypeDef,
                                              PathData
                                            >,
                                            import("zod").ZodOptional<
                                              z.Schema<
                                                AssetInfo,
                                                import("zod").ZodTypeDef,
                                                AssetInfo
                                              >
                                            >
                                          ],
                                          import("zod").ZodUnknown
                                        >,
                                        import("zod").ZodString
                                      >
                                    ]
                                  >
                                >;
                                minSize: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodNumber,
                                      import("zod").ZodRecord<
                                        import("zod").ZodString,
                                        import("zod").ZodNumber
                                      >
                                    ]
                                  >
                                >;
                                maxSize: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodNumber,
                                      import("zod").ZodRecord<
                                        import("zod").ZodString,
                                        import("zod").ZodNumber
                                      >
                                    ]
                                  >
                                >;
                                maxAsyncSize: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodNumber,
                                      import("zod").ZodRecord<
                                        import("zod").ZodString,
                                        import("zod").ZodNumber
                                      >
                                    ]
                                  >
                                >;
                                maxInitialSize: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodNumber,
                                      import("zod").ZodRecord<
                                        import("zod").ZodString,
                                        import("zod").ZodNumber
                                      >
                                    ]
                                  >
                                >;
                                maxAsyncRequests: import("zod").ZodOptional<
                                  import("zod").ZodNumber
                                >;
                                maxInitialRequests: import("zod").ZodOptional<
                                  import("zod").ZodNumber
                                >;
                                automaticNameDelimiter: import("zod").ZodOptional<
                                  import("zod").ZodString
                                >;
                                test: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodString,
                                          z.Schema<
                                            RegExp,
                                            import("zod").ZodTypeDef,
                                            RegExp
                                          >
                                        ]
                                      >,
                                      import("zod").ZodFunction<
                                        import("zod").ZodTuple<
                                          [
                                            z.Schema<
                                              Module,
                                              import("zod").ZodTypeDef,
                                              Module
                                            >,
                                            import("zod").ZodObject<
                                              {
                                                moduleGraph: z.Schema<
                                                  ModuleGraph,
                                                  import("zod").ZodTypeDef,
                                                  ModuleGraph
                                                >;
                                                chunkGraph: z.Schema<
                                                  ChunkGraph,
                                                  import("zod").ZodTypeDef,
                                                  ChunkGraph
                                                >;
                                              },
                                              "strip",
                                              import("zod").ZodTypeAny,
                                              {
                                                moduleGraph: ModuleGraph;
                                                chunkGraph: ChunkGraph;
                                              },
                                              {
                                                moduleGraph: ModuleGraph;
                                                chunkGraph: ChunkGraph;
                                              }
                                            >
                                          ],
                                          import("zod").ZodUnknown
                                        >,
                                        import("zod").ZodBoolean
                                      >
                                    ]
                                  >
                                >;
                                priority: import("zod").ZodOptional<
                                  import("zod").ZodNumber
                                >;
                                enforce: import("zod").ZodOptional<
                                  import("zod").ZodBoolean
                                >;
                                reuseExistingChunk: import("zod").ZodOptional<
                                  import("zod").ZodBoolean
                                >;
                                type: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodString,
                                      z.Schema<
                                        RegExp,
                                        import("zod").ZodTypeDef,
                                        RegExp
                                      >
                                    ]
                                  >
                                >;
                                idHint: import("zod").ZodOptional<
                                  import("zod").ZodString
                                >;
                                layer: import("zod").ZodOptional<
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodString,
                                          z.Schema<
                                            RegExp,
                                            import("zod").ZodTypeDef,
                                            RegExp
                                          >
                                        ]
                                      >,
                                      import("zod").ZodFunction<
                                        import("zod").ZodTuple<
                                          [
                                            import("zod").ZodOptional<
                                              import("zod").ZodString
                                            >
                                          ],
                                          null
                                        >,
                                        import("zod").ZodBoolean
                                      >
                                    ]
                                  >
                                >;
                              },
                              "strict",
                              import("zod").ZodTypeAny,
                              {
                                name?:
                                  | string
                                  | false
                                  | ((
                                      args_0: Module,
                                      args_1: Chunk[],
                                      args_2: string,
                                      ...args: unknown[]
                                    ) => string | undefined)
                                  | undefined;
                                priority?: number | undefined;
                                layer?:
                                  | string
                                  | RegExp
                                  | ((args_0: string | undefined) => boolean)
                                  | undefined;
                                filename?:
                                  | string
                                  | ((
                                      args_0: PathData,
                                      args_1: AssetInfo | undefined,
                                      ...args: unknown[]
                                    ) => string)
                                  | undefined;
                                type?: string | RegExp | undefined;
                                chunks?:
                                  | RegExp
                                  | "initial"
                                  | "async"
                                  | "all"
                                  | ((
                                      args_0: Chunk,
                                      ...args: unknown[]
                                    ) => boolean)
                                  | undefined;
                                test?:
                                  | string
                                  | RegExp
                                  | ((
                                      args_0: Module,
                                      args_1: {
                                        moduleGraph: ModuleGraph;
                                        chunkGraph: ChunkGraph;
                                      },
                                      ...args: unknown[]
                                    ) => boolean)
                                  | undefined;
                                defaultSizeTypes?: string[] | undefined;
                                minSize?:
                                  | number
                                  | Record<string, number>
                                  | undefined;
                                maxSize?:
                                  | number
                                  | Record<string, number>
                                  | undefined;
                                maxAsyncSize?:
                                  | number
                                  | Record<string, number>
                                  | undefined;
                                maxInitialSize?:
                                  | number
                                  | Record<string, number>
                                  | undefined;
                                minChunks?: number | undefined;
                                usedExports?: boolean | undefined;
                                maxAsyncRequests?: number | undefined;
                                maxInitialRequests?: number | undefined;
                                automaticNameDelimiter?: string | undefined;
                                enforce?: boolean | undefined;
                                reuseExistingChunk?: boolean | undefined;
                                idHint?: string | undefined;
                              },
                              {
                                name?:
                                  | string
                                  | false
                                  | ((
                                      args_0: Module,
                                      args_1: Chunk[],
                                      args_2: string,
                                      ...args: unknown[]
                                    ) => string | undefined)
                                  | undefined;
                                priority?: number | undefined;
                                layer?:
                                  | string
                                  | RegExp
                                  | ((args_0: string | undefined) => boolean)
                                  | undefined;
                                filename?:
                                  | string
                                  | ((
                                      args_0: PathData,
                                      args_1: AssetInfo | undefined,
                                      ...args: unknown[]
                                    ) => string)
                                  | undefined;
                                type?: string | RegExp | undefined;
                                chunks?:
                                  | RegExp
                                  | "initial"
                                  | "async"
                                  | "all"
                                  | ((
                                      args_0: Chunk,
                                      ...args: unknown[]
                                    ) => boolean)
                                  | undefined;
                                test?:
                                  | string
                                  | RegExp
                                  | ((
                                      args_0: Module,
                                      args_1: {
                                        moduleGraph: ModuleGraph;
                                        chunkGraph: ChunkGraph;
                                      },
                                      ...args: unknown[]
                                    ) => boolean)
                                  | undefined;
                                defaultSizeTypes?: string[] | undefined;
                                minSize?:
                                  | number
                                  | Record<string, number>
                                  | undefined;
                                maxSize?:
                                  | number
                                  | Record<string, number>
                                  | undefined;
                                maxAsyncSize?:
                                  | number
                                  | Record<string, number>
                                  | undefined;
                                maxInitialSize?:
                                  | number
                                  | Record<string, number>
                                  | undefined;
                                minChunks?: number | undefined;
                                usedExports?: boolean | undefined;
                                maxAsyncRequests?: number | undefined;
                                maxInitialRequests?: number | undefined;
                                automaticNameDelimiter?: string | undefined;
                                enforce?: boolean | undefined;
                                reuseExistingChunk?: boolean | undefined;
                                idHint?: string | undefined;
                              }
                            >
                          ]
                        >
                      >
                    >;
                    fallbackCacheGroup: import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          chunks: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodEnum<
                                      ["initial", "async", "all"]
                                    >,
                                    z.Schema<
                                      RegExp,
                                      import("zod").ZodTypeDef,
                                      RegExp
                                    >
                                  ]
                                >,
                                import("zod").ZodFunction<
                                  import("zod").ZodTuple<
                                    [
                                      z.Schema<
                                        Chunk,
                                        import("zod").ZodTypeDef,
                                        Chunk
                                      >
                                    ],
                                    import("zod").ZodUnknown
                                  >,
                                  import("zod").ZodBoolean
                                >
                              ]
                            >
                          >;
                          minSize: import("zod").ZodOptional<
                            import("zod").ZodNumber
                          >;
                          maxSize: import("zod").ZodOptional<
                            import("zod").ZodNumber
                          >;
                          maxAsyncSize: import("zod").ZodOptional<
                            import("zod").ZodNumber
                          >;
                          maxInitialSize: import("zod").ZodOptional<
                            import("zod").ZodNumber
                          >;
                          automaticNameDelimiter: import("zod").ZodOptional<
                            import("zod").ZodString
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          chunks?:
                            | RegExp
                            | "initial"
                            | "async"
                            | "all"
                            | ((args_0: Chunk, ...args: unknown[]) => boolean)
                            | undefined;
                          minSize?: number | undefined;
                          maxSize?: number | undefined;
                          maxAsyncSize?: number | undefined;
                          maxInitialSize?: number | undefined;
                          automaticNameDelimiter?: string | undefined;
                        },
                        {
                          chunks?:
                            | RegExp
                            | "initial"
                            | "async"
                            | "all"
                            | ((args_0: Chunk, ...args: unknown[]) => boolean)
                            | undefined;
                          minSize?: number | undefined;
                          maxSize?: number | undefined;
                          maxAsyncSize?: number | undefined;
                          maxInitialSize?: number | undefined;
                          automaticNameDelimiter?: string | undefined;
                        }
                      >
                    >;
                    hidePathInfo: import("zod").ZodOptional<
                      import("zod").ZodBoolean
                    >;
                  },
                  "strict",
                  import("zod").ZodTypeAny,
                  {
                    name?:
                      | string
                      | false
                      | ((
                          args_0: Module,
                          args_1: Chunk[],
                          args_2: string,
                          ...args: unknown[]
                        ) => string | undefined)
                      | undefined;
                    filename?:
                      | string
                      | ((
                          args_0: PathData,
                          args_1: AssetInfo | undefined,
                          ...args: unknown[]
                        ) => string)
                      | undefined;
                    chunks?:
                      | RegExp
                      | "initial"
                      | "async"
                      | "all"
                      | ((args_0: Chunk, ...args: unknown[]) => boolean)
                      | undefined;
                    defaultSizeTypes?: string[] | undefined;
                    cacheGroups?:
                      | Record<
                          string,
                          | false
                          | {
                              name?:
                                | string
                                | false
                                | ((
                                    args_0: Module,
                                    args_1: Chunk[],
                                    args_2: string,
                                    ...args: unknown[]
                                  ) => string | undefined)
                                | undefined;
                              priority?: number | undefined;
                              layer?:
                                | string
                                | RegExp
                                | ((args_0: string | undefined) => boolean)
                                | undefined;
                              filename?:
                                | string
                                | ((
                                    args_0: PathData,
                                    args_1: AssetInfo | undefined,
                                    ...args: unknown[]
                                  ) => string)
                                | undefined;
                              type?: string | RegExp | undefined;
                              chunks?:
                                | RegExp
                                | "initial"
                                | "async"
                                | "all"
                                | ((
                                    args_0: Chunk,
                                    ...args: unknown[]
                                  ) => boolean)
                                | undefined;
                              test?:
                                | string
                                | RegExp
                                | ((
                                    args_0: Module,
                                    args_1: {
                                      moduleGraph: ModuleGraph;
                                      chunkGraph: ChunkGraph;
                                    },
                                    ...args: unknown[]
                                  ) => boolean)
                                | undefined;
                              defaultSizeTypes?: string[] | undefined;
                              minSize?:
                                | number
                                | Record<string, number>
                                | undefined;
                              maxSize?:
                                | number
                                | Record<string, number>
                                | undefined;
                              maxAsyncSize?:
                                | number
                                | Record<string, number>
                                | undefined;
                              maxInitialSize?:
                                | number
                                | Record<string, number>
                                | undefined;
                              minChunks?: number | undefined;
                              usedExports?: boolean | undefined;
                              maxAsyncRequests?: number | undefined;
                              maxInitialRequests?: number | undefined;
                              automaticNameDelimiter?: string | undefined;
                              enforce?: boolean | undefined;
                              reuseExistingChunk?: boolean | undefined;
                              idHint?: string | undefined;
                            }
                        >
                      | undefined;
                    fallbackCacheGroup?:
                      | {
                          chunks?:
                            | RegExp
                            | "initial"
                            | "async"
                            | "all"
                            | ((args_0: Chunk, ...args: unknown[]) => boolean)
                            | undefined;
                          minSize?: number | undefined;
                          maxSize?: number | undefined;
                          maxAsyncSize?: number | undefined;
                          maxInitialSize?: number | undefined;
                          automaticNameDelimiter?: string | undefined;
                        }
                      | undefined;
                    minSize?: number | Record<string, number> | undefined;
                    maxSize?: number | Record<string, number> | undefined;
                    maxAsyncSize?: number | Record<string, number> | undefined;
                    maxInitialSize?:
                      | number
                      | Record<string, number>
                      | undefined;
                    hidePathInfo?: boolean | undefined;
                    minChunks?: number | undefined;
                    usedExports?: boolean | undefined;
                    maxAsyncRequests?: number | undefined;
                    maxInitialRequests?: number | undefined;
                    automaticNameDelimiter?: string | undefined;
                  },
                  {
                    name?:
                      | string
                      | false
                      | ((
                          args_0: Module,
                          args_1: Chunk[],
                          args_2: string,
                          ...args: unknown[]
                        ) => string | undefined)
                      | undefined;
                    filename?:
                      | string
                      | ((
                          args_0: PathData,
                          args_1: AssetInfo | undefined,
                          ...args: unknown[]
                        ) => string)
                      | undefined;
                    chunks?:
                      | RegExp
                      | "initial"
                      | "async"
                      | "all"
                      | ((args_0: Chunk, ...args: unknown[]) => boolean)
                      | undefined;
                    defaultSizeTypes?: string[] | undefined;
                    cacheGroups?:
                      | Record<
                          string,
                          | false
                          | {
                              name?:
                                | string
                                | false
                                | ((
                                    args_0: Module,
                                    args_1: Chunk[],
                                    args_2: string,
                                    ...args: unknown[]
                                  ) => string | undefined)
                                | undefined;
                              priority?: number | undefined;
                              layer?:
                                | string
                                | RegExp
                                | ((args_0: string | undefined) => boolean)
                                | undefined;
                              filename?:
                                | string
                                | ((
                                    args_0: PathData,
                                    args_1: AssetInfo | undefined,
                                    ...args: unknown[]
                                  ) => string)
                                | undefined;
                              type?: string | RegExp | undefined;
                              chunks?:
                                | RegExp
                                | "initial"
                                | "async"
                                | "all"
                                | ((
                                    args_0: Chunk,
                                    ...args: unknown[]
                                  ) => boolean)
                                | undefined;
                              test?:
                                | string
                                | RegExp
                                | ((
                                    args_0: Module,
                                    args_1: {
                                      moduleGraph: ModuleGraph;
                                      chunkGraph: ChunkGraph;
                                    },
                                    ...args: unknown[]
                                  ) => boolean)
                                | undefined;
                              defaultSizeTypes?: string[] | undefined;
                              minSize?:
                                | number
                                | Record<string, number>
                                | undefined;
                              maxSize?:
                                | number
                                | Record<string, number>
                                | undefined;
                              maxAsyncSize?:
                                | number
                                | Record<string, number>
                                | undefined;
                              maxInitialSize?:
                                | number
                                | Record<string, number>
                                | undefined;
                              minChunks?: number | undefined;
                              usedExports?: boolean | undefined;
                              maxAsyncRequests?: number | undefined;
                              maxInitialRequests?: number | undefined;
                              automaticNameDelimiter?: string | undefined;
                              enforce?: boolean | undefined;
                              reuseExistingChunk?: boolean | undefined;
                              idHint?: string | undefined;
                            }
                        >
                      | undefined;
                    fallbackCacheGroup?:
                      | {
                          chunks?:
                            | RegExp
                            | "initial"
                            | "async"
                            | "all"
                            | ((args_0: Chunk, ...args: unknown[]) => boolean)
                            | undefined;
                          minSize?: number | undefined;
                          maxSize?: number | undefined;
                          maxAsyncSize?: number | undefined;
                          maxInitialSize?: number | undefined;
                          automaticNameDelimiter?: string | undefined;
                        }
                      | undefined;
                    minSize?: number | Record<string, number> | undefined;
                    maxSize?: number | Record<string, number> | undefined;
                    maxAsyncSize?: number | Record<string, number> | undefined;
                    maxInitialSize?:
                      | number
                      | Record<string, number>
                      | undefined;
                    hidePathInfo?: boolean | undefined;
                    minChunks?: number | undefined;
                    usedExports?: boolean | undefined;
                    maxAsyncRequests?: number | undefined;
                    maxInitialRequests?: number | undefined;
                    automaticNameDelimiter?: string | undefined;
                  }
                >
              ]
            >
          >;
          runtimeChunk: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodUnion<
                  [
                    import("zod").ZodEnum<["single", "multiple"]>,
                    import("zod").ZodBoolean
                  ]
                >,
                import("zod").ZodObject<
                  {
                    name: import("zod").ZodOptional<
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodString,
                          import("zod").ZodFunction<
                            import("zod").ZodTuple<
                              [
                                import("zod").ZodObject<
                                  {
                                    name: import("zod").ZodString;
                                  },
                                  "strict",
                                  import("zod").ZodTypeAny,
                                  {
                                    name: string;
                                  },
                                  {
                                    name: string;
                                  }
                                >
                              ],
                              import("zod").ZodUnknown
                            >,
                            import("zod").ZodString
                          >
                        ]
                      >
                    >;
                  },
                  "strict",
                  import("zod").ZodTypeAny,
                  {
                    name?:
                      | string
                      | ((
                          args_0: {
                            name: string;
                          },
                          ...args: unknown[]
                        ) => string)
                      | undefined;
                  },
                  {
                    name?:
                      | string
                      | ((
                          args_0: {
                            name: string;
                          },
                          ...args: unknown[]
                        ) => string)
                      | undefined;
                  }
                >
              ]
            >
          >;
          removeAvailableModules: import("zod").ZodOptional<
            import("zod").ZodBoolean
          >;
          removeEmptyChunks: import("zod").ZodOptional<
            import("zod").ZodBoolean
          >;
          realContentHash: import("zod").ZodOptional<import("zod").ZodBoolean>;
          sideEffects: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [import("zod").ZodEnum<["flag"]>, import("zod").ZodBoolean]
            >
          >;
          providedExports: import("zod").ZodOptional<import("zod").ZodBoolean>;
          concatenateModules: import("zod").ZodOptional<
            import("zod").ZodBoolean
          >;
          innerGraph: import("zod").ZodOptional<import("zod").ZodBoolean>;
          usedExports: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [import("zod").ZodEnum<["global"]>, import("zod").ZodBoolean]
            >
          >;
          mangleExports: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodEnum<["size", "deterministic"]>,
                import("zod").ZodBoolean
              ]
            >
          >;
          nodeEnv: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [import("zod").ZodString, import("zod").ZodLiteral<false>]
            >
          >;
          emitOnErrors: import("zod").ZodOptional<import("zod").ZodBoolean>;
          avoidEntryIife: import("zod").ZodOptional<import("zod").ZodBoolean>;
        },
        "strict",
        import("zod").ZodTypeAny,
        {
          splitChunks?:
            | false
            | {
                name?:
                  | string
                  | false
                  | ((
                      args_0: Module,
                      args_1: Chunk[],
                      args_2: string,
                      ...args: unknown[]
                    ) => string | undefined)
                  | undefined;
                filename?:
                  | string
                  | ((
                      args_0: PathData,
                      args_1: AssetInfo | undefined,
                      ...args: unknown[]
                    ) => string)
                  | undefined;
                chunks?:
                  | RegExp
                  | "initial"
                  | "async"
                  | "all"
                  | ((args_0: Chunk, ...args: unknown[]) => boolean)
                  | undefined;
                defaultSizeTypes?: string[] | undefined;
                cacheGroups?:
                  | Record<
                      string,
                      | false
                      | {
                          name?:
                            | string
                            | false
                            | ((
                                args_0: Module,
                                args_1: Chunk[],
                                args_2: string,
                                ...args: unknown[]
                              ) => string | undefined)
                            | undefined;
                          priority?: number | undefined;
                          layer?:
                            | string
                            | RegExp
                            | ((args_0: string | undefined) => boolean)
                            | undefined;
                          filename?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          type?: string | RegExp | undefined;
                          chunks?:
                            | RegExp
                            | "initial"
                            | "async"
                            | "all"
                            | ((args_0: Chunk, ...args: unknown[]) => boolean)
                            | undefined;
                          test?:
                            | string
                            | RegExp
                            | ((
                                args_0: Module,
                                args_1: {
                                  moduleGraph: ModuleGraph;
                                  chunkGraph: ChunkGraph;
                                },
                                ...args: unknown[]
                              ) => boolean)
                            | undefined;
                          defaultSizeTypes?: string[] | undefined;
                          minSize?: number | Record<string, number> | undefined;
                          maxSize?: number | Record<string, number> | undefined;
                          maxAsyncSize?:
                            | number
                            | Record<string, number>
                            | undefined;
                          maxInitialSize?:
                            | number
                            | Record<string, number>
                            | undefined;
                          minChunks?: number | undefined;
                          usedExports?: boolean | undefined;
                          maxAsyncRequests?: number | undefined;
                          maxInitialRequests?: number | undefined;
                          automaticNameDelimiter?: string | undefined;
                          enforce?: boolean | undefined;
                          reuseExistingChunk?: boolean | undefined;
                          idHint?: string | undefined;
                        }
                    >
                  | undefined;
                fallbackCacheGroup?:
                  | {
                      chunks?:
                        | RegExp
                        | "initial"
                        | "async"
                        | "all"
                        | ((args_0: Chunk, ...args: unknown[]) => boolean)
                        | undefined;
                      minSize?: number | undefined;
                      maxSize?: number | undefined;
                      maxAsyncSize?: number | undefined;
                      maxInitialSize?: number | undefined;
                      automaticNameDelimiter?: string | undefined;
                    }
                  | undefined;
                minSize?: number | Record<string, number> | undefined;
                maxSize?: number | Record<string, number> | undefined;
                maxAsyncSize?: number | Record<string, number> | undefined;
                maxInitialSize?: number | Record<string, number> | undefined;
                hidePathInfo?: boolean | undefined;
                minChunks?: number | undefined;
                usedExports?: boolean | undefined;
                maxAsyncRequests?: number | undefined;
                maxInitialRequests?: number | undefined;
                automaticNameDelimiter?: string | undefined;
              }
            | undefined;
          usedExports?: boolean | "global" | undefined;
          providedExports?: boolean | undefined;
          minimize?: boolean | undefined;
          minimizer?:
            | (
                | false
                | ""
                | 0
                | t.RspackPluginInstance
                | "..."
                | t.WebpackPluginInstance
                | t.RspackPluginFunction
                | t.WebpackPluginFunction
                | null
                | undefined
              )[]
            | undefined;
          sideEffects?: boolean | "flag" | undefined;
          moduleIds?: "named" | "natural" | "deterministic" | undefined;
          chunkIds?:
            | "named"
            | "natural"
            | "deterministic"
            | "size"
            | "total-size"
            | undefined;
          mergeDuplicateChunks?: boolean | undefined;
          runtimeChunk?:
            | boolean
            | "single"
            | "multiple"
            | {
                name?:
                  | string
                  | ((
                      args_0: {
                        name: string;
                      },
                      ...args: unknown[]
                    ) => string)
                  | undefined;
              }
            | undefined;
          removeAvailableModules?: boolean | undefined;
          removeEmptyChunks?: boolean | undefined;
          realContentHash?: boolean | undefined;
          concatenateModules?: boolean | undefined;
          innerGraph?: boolean | undefined;
          mangleExports?: boolean | "deterministic" | "size" | undefined;
          nodeEnv?: string | false | undefined;
          emitOnErrors?: boolean | undefined;
          avoidEntryIife?: boolean | undefined;
        },
        {
          splitChunks?:
            | false
            | {
                name?:
                  | string
                  | false
                  | ((
                      args_0: Module,
                      args_1: Chunk[],
                      args_2: string,
                      ...args: unknown[]
                    ) => string | undefined)
                  | undefined;
                filename?:
                  | string
                  | ((
                      args_0: PathData,
                      args_1: AssetInfo | undefined,
                      ...args: unknown[]
                    ) => string)
                  | undefined;
                chunks?:
                  | RegExp
                  | "initial"
                  | "async"
                  | "all"
                  | ((args_0: Chunk, ...args: unknown[]) => boolean)
                  | undefined;
                defaultSizeTypes?: string[] | undefined;
                cacheGroups?:
                  | Record<
                      string,
                      | false
                      | {
                          name?:
                            | string
                            | false
                            | ((
                                args_0: Module,
                                args_1: Chunk[],
                                args_2: string,
                                ...args: unknown[]
                              ) => string | undefined)
                            | undefined;
                          priority?: number | undefined;
                          layer?:
                            | string
                            | RegExp
                            | ((args_0: string | undefined) => boolean)
                            | undefined;
                          filename?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          type?: string | RegExp | undefined;
                          chunks?:
                            | RegExp
                            | "initial"
                            | "async"
                            | "all"
                            | ((args_0: Chunk, ...args: unknown[]) => boolean)
                            | undefined;
                          test?:
                            | string
                            | RegExp
                            | ((
                                args_0: Module,
                                args_1: {
                                  moduleGraph: ModuleGraph;
                                  chunkGraph: ChunkGraph;
                                },
                                ...args: unknown[]
                              ) => boolean)
                            | undefined;
                          defaultSizeTypes?: string[] | undefined;
                          minSize?: number | Record<string, number> | undefined;
                          maxSize?: number | Record<string, number> | undefined;
                          maxAsyncSize?:
                            | number
                            | Record<string, number>
                            | undefined;
                          maxInitialSize?:
                            | number
                            | Record<string, number>
                            | undefined;
                          minChunks?: number | undefined;
                          usedExports?: boolean | undefined;
                          maxAsyncRequests?: number | undefined;
                          maxInitialRequests?: number | undefined;
                          automaticNameDelimiter?: string | undefined;
                          enforce?: boolean | undefined;
                          reuseExistingChunk?: boolean | undefined;
                          idHint?: string | undefined;
                        }
                    >
                  | undefined;
                fallbackCacheGroup?:
                  | {
                      chunks?:
                        | RegExp
                        | "initial"
                        | "async"
                        | "all"
                        | ((args_0: Chunk, ...args: unknown[]) => boolean)
                        | undefined;
                      minSize?: number | undefined;
                      maxSize?: number | undefined;
                      maxAsyncSize?: number | undefined;
                      maxInitialSize?: number | undefined;
                      automaticNameDelimiter?: string | undefined;
                    }
                  | undefined;
                minSize?: number | Record<string, number> | undefined;
                maxSize?: number | Record<string, number> | undefined;
                maxAsyncSize?: number | Record<string, number> | undefined;
                maxInitialSize?: number | Record<string, number> | undefined;
                hidePathInfo?: boolean | undefined;
                minChunks?: number | undefined;
                usedExports?: boolean | undefined;
                maxAsyncRequests?: number | undefined;
                maxInitialRequests?: number | undefined;
                automaticNameDelimiter?: string | undefined;
              }
            | undefined;
          usedExports?: boolean | "global" | undefined;
          providedExports?: boolean | undefined;
          minimize?: boolean | undefined;
          minimizer?:
            | (
                | false
                | ""
                | 0
                | t.RspackPluginInstance
                | "..."
                | t.WebpackPluginInstance
                | t.RspackPluginFunction
                | t.WebpackPluginFunction
                | null
                | undefined
              )[]
            | undefined;
          sideEffects?: boolean | "flag" | undefined;
          moduleIds?: "named" | "natural" | "deterministic" | undefined;
          chunkIds?:
            | "named"
            | "natural"
            | "deterministic"
            | "size"
            | "total-size"
            | undefined;
          mergeDuplicateChunks?: boolean | undefined;
          runtimeChunk?:
            | boolean
            | "single"
            | "multiple"
            | {
                name?:
                  | string
                  | ((
                      args_0: {
                        name: string;
                      },
                      ...args: unknown[]
                    ) => string)
                  | undefined;
              }
            | undefined;
          removeAvailableModules?: boolean | undefined;
          removeEmptyChunks?: boolean | undefined;
          realContentHash?: boolean | undefined;
          concatenateModules?: boolean | undefined;
          innerGraph?: boolean | undefined;
          mangleExports?: boolean | "deterministic" | "size" | undefined;
          nodeEnv?: string | false | undefined;
          emitOnErrors?: boolean | undefined;
          avoidEntryIife?: boolean | undefined;
        }
      >
    >;
    resolve: import("zod").ZodOptional<z.ZodType<t.ResolveOptions>>;
    resolveLoader: import("zod").ZodOptional<z.ZodType<t.ResolveOptions>>;
    plugins: import("zod").ZodOptional<
      import("zod").ZodArray<
        import("zod").ZodUnion<
          [
            z.Schema<
              | t.RspackPluginInstance
              | t.WebpackPluginInstance
              | t.RspackPluginFunction
              | t.WebpackPluginFunction,
              import("zod").ZodTypeDef,
              | t.RspackPluginInstance
              | t.WebpackPluginInstance
              | t.RspackPluginFunction
              | t.WebpackPluginFunction
            >,
            import("zod").ZodUnion<
              [
                import("zod").ZodLiteral<false>,
                import("zod").ZodLiteral<0>,
                import("zod").ZodLiteral<"">,
                import("zod").ZodNull,
                import("zod").ZodUndefined
              ]
            >
          ]
        >,
        "many"
      >
    >;
    devServer: import("zod").ZodOptional<
      z.Schema<t.DevServer, import("zod").ZodTypeDef, t.DevServer>
    >;
    module: import("zod").ZodOptional<
      import("zod").ZodObject<
        {
          defaultRules: import("zod").ZodOptional<
            import("zod").ZodArray<
              import("zod").ZodUnion<
                [
                  import("zod").ZodUnion<
                    [import("zod").ZodLiteral<"...">, z.ZodType<t.RuleSetRule>]
                  >,
                  import("zod").ZodUnion<
                    [
                      import("zod").ZodLiteral<false>,
                      import("zod").ZodLiteral<0>,
                      import("zod").ZodLiteral<"">,
                      import("zod").ZodNull,
                      import("zod").ZodUndefined
                    ]
                  >
                ]
              >,
              "many"
            >
          >;
          rules: import("zod").ZodOptional<
            import("zod").ZodArray<
              import("zod").ZodUnion<
                [
                  import("zod").ZodUnion<
                    [import("zod").ZodLiteral<"...">, z.ZodType<t.RuleSetRule>]
                  >,
                  import("zod").ZodUnion<
                    [
                      import("zod").ZodLiteral<false>,
                      import("zod").ZodLiteral<0>,
                      import("zod").ZodLiteral<"">,
                      import("zod").ZodNull,
                      import("zod").ZodUndefined
                    ]
                  >
                ]
              >,
              "many"
            >
          >;
          parser: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodObject<
                  {
                    asset: import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          dataUrlCondition: import("zod").ZodOptional<
                            import("zod").ZodObject<
                              {
                                maxSize: import("zod").ZodOptional<
                                  import("zod").ZodNumber
                                >;
                              },
                              "strict",
                              import("zod").ZodTypeAny,
                              {
                                maxSize?: number | undefined;
                              },
                              {
                                maxSize?: number | undefined;
                              }
                            >
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          dataUrlCondition?:
                            | {
                                maxSize?: number | undefined;
                              }
                            | undefined;
                        },
                        {
                          dataUrlCondition?:
                            | {
                                maxSize?: number | undefined;
                              }
                            | undefined;
                        }
                      >
                    >;
                    css: import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          namedExports: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          namedExports?: boolean | undefined;
                        },
                        {
                          namedExports?: boolean | undefined;
                        }
                      >
                    >;
                    "css/auto": import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          namedExports: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          namedExports?: boolean | undefined;
                        },
                        {
                          namedExports?: boolean | undefined;
                        }
                      >
                    >;
                    "css/module": import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          namedExports: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          namedExports?: boolean | undefined;
                        },
                        {
                          namedExports?: boolean | undefined;
                        }
                      >
                    >;
                    javascript: import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          dynamicImportMode: import("zod").ZodOptional<
                            import("zod").ZodEnum<
                              ["eager", "lazy", "weak", "lazy-once"]
                            >
                          >;
                          dynamicImportPreload: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodBoolean,
                                import("zod").ZodNumber
                              ]
                            >
                          >;
                          dynamicImportPrefetch: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodBoolean,
                                import("zod").ZodNumber
                              ]
                            >
                          >;
                          dynamicImportFetchPriority: import("zod").ZodOptional<
                            import("zod").ZodEnum<["low", "high", "auto"]>
                          >;
                          importMeta: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          url: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodLiteral<"relative">,
                                import("zod").ZodBoolean
                              ]
                            >
                          >;
                          exprContextCritical: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          wrappedContextCritical: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          wrappedContextRegExp: import("zod").ZodOptional<
                            z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>
                          >;
                          exportsPresence: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodEnum<
                                  ["error", "warn", "auto"]
                                >,
                                import("zod").ZodLiteral<false>
                              ]
                            >
                          >;
                          importExportsPresence: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodEnum<
                                  ["error", "warn", "auto"]
                                >,
                                import("zod").ZodLiteral<false>
                              ]
                            >
                          >;
                          reexportExportsPresence: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodEnum<
                                  ["error", "warn", "auto"]
                                >,
                                import("zod").ZodLiteral<false>
                              ]
                            >
                          >;
                          strictExportPresence: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          worker: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodArray<
                                  import("zod").ZodString,
                                  "many"
                                >,
                                import("zod").ZodBoolean
                              ]
                            >
                          >;
                          overrideStrict: import("zod").ZodOptional<
                            import("zod").ZodEnum<["strict", "non-strict"]>
                          >;
                          requireAsExpression: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          requireDynamic: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          requireResolve: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          importDynamic: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        },
                        {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        }
                      >
                    >;
                    "javascript/auto": import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          dynamicImportMode: import("zod").ZodOptional<
                            import("zod").ZodEnum<
                              ["eager", "lazy", "weak", "lazy-once"]
                            >
                          >;
                          dynamicImportPreload: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodBoolean,
                                import("zod").ZodNumber
                              ]
                            >
                          >;
                          dynamicImportPrefetch: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodBoolean,
                                import("zod").ZodNumber
                              ]
                            >
                          >;
                          dynamicImportFetchPriority: import("zod").ZodOptional<
                            import("zod").ZodEnum<["low", "high", "auto"]>
                          >;
                          importMeta: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          url: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodLiteral<"relative">,
                                import("zod").ZodBoolean
                              ]
                            >
                          >;
                          exprContextCritical: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          wrappedContextCritical: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          wrappedContextRegExp: import("zod").ZodOptional<
                            z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>
                          >;
                          exportsPresence: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodEnum<
                                  ["error", "warn", "auto"]
                                >,
                                import("zod").ZodLiteral<false>
                              ]
                            >
                          >;
                          importExportsPresence: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodEnum<
                                  ["error", "warn", "auto"]
                                >,
                                import("zod").ZodLiteral<false>
                              ]
                            >
                          >;
                          reexportExportsPresence: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodEnum<
                                  ["error", "warn", "auto"]
                                >,
                                import("zod").ZodLiteral<false>
                              ]
                            >
                          >;
                          strictExportPresence: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          worker: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodArray<
                                  import("zod").ZodString,
                                  "many"
                                >,
                                import("zod").ZodBoolean
                              ]
                            >
                          >;
                          overrideStrict: import("zod").ZodOptional<
                            import("zod").ZodEnum<["strict", "non-strict"]>
                          >;
                          requireAsExpression: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          requireDynamic: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          requireResolve: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          importDynamic: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        },
                        {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        }
                      >
                    >;
                    "javascript/dynamic": import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          dynamicImportMode: import("zod").ZodOptional<
                            import("zod").ZodEnum<
                              ["eager", "lazy", "weak", "lazy-once"]
                            >
                          >;
                          dynamicImportPreload: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodBoolean,
                                import("zod").ZodNumber
                              ]
                            >
                          >;
                          dynamicImportPrefetch: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodBoolean,
                                import("zod").ZodNumber
                              ]
                            >
                          >;
                          dynamicImportFetchPriority: import("zod").ZodOptional<
                            import("zod").ZodEnum<["low", "high", "auto"]>
                          >;
                          importMeta: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          url: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodLiteral<"relative">,
                                import("zod").ZodBoolean
                              ]
                            >
                          >;
                          exprContextCritical: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          wrappedContextCritical: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          wrappedContextRegExp: import("zod").ZodOptional<
                            z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>
                          >;
                          exportsPresence: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodEnum<
                                  ["error", "warn", "auto"]
                                >,
                                import("zod").ZodLiteral<false>
                              ]
                            >
                          >;
                          importExportsPresence: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodEnum<
                                  ["error", "warn", "auto"]
                                >,
                                import("zod").ZodLiteral<false>
                              ]
                            >
                          >;
                          reexportExportsPresence: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodEnum<
                                  ["error", "warn", "auto"]
                                >,
                                import("zod").ZodLiteral<false>
                              ]
                            >
                          >;
                          strictExportPresence: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          worker: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodArray<
                                  import("zod").ZodString,
                                  "many"
                                >,
                                import("zod").ZodBoolean
                              ]
                            >
                          >;
                          overrideStrict: import("zod").ZodOptional<
                            import("zod").ZodEnum<["strict", "non-strict"]>
                          >;
                          requireAsExpression: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          requireDynamic: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          requireResolve: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          importDynamic: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        },
                        {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        }
                      >
                    >;
                    "javascript/esm": import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          dynamicImportMode: import("zod").ZodOptional<
                            import("zod").ZodEnum<
                              ["eager", "lazy", "weak", "lazy-once"]
                            >
                          >;
                          dynamicImportPreload: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodBoolean,
                                import("zod").ZodNumber
                              ]
                            >
                          >;
                          dynamicImportPrefetch: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodBoolean,
                                import("zod").ZodNumber
                              ]
                            >
                          >;
                          dynamicImportFetchPriority: import("zod").ZodOptional<
                            import("zod").ZodEnum<["low", "high", "auto"]>
                          >;
                          importMeta: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          url: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodLiteral<"relative">,
                                import("zod").ZodBoolean
                              ]
                            >
                          >;
                          exprContextCritical: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          wrappedContextCritical: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          wrappedContextRegExp: import("zod").ZodOptional<
                            z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>
                          >;
                          exportsPresence: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodEnum<
                                  ["error", "warn", "auto"]
                                >,
                                import("zod").ZodLiteral<false>
                              ]
                            >
                          >;
                          importExportsPresence: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodEnum<
                                  ["error", "warn", "auto"]
                                >,
                                import("zod").ZodLiteral<false>
                              ]
                            >
                          >;
                          reexportExportsPresence: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodEnum<
                                  ["error", "warn", "auto"]
                                >,
                                import("zod").ZodLiteral<false>
                              ]
                            >
                          >;
                          strictExportPresence: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          worker: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodArray<
                                  import("zod").ZodString,
                                  "many"
                                >,
                                import("zod").ZodBoolean
                              ]
                            >
                          >;
                          overrideStrict: import("zod").ZodOptional<
                            import("zod").ZodEnum<["strict", "non-strict"]>
                          >;
                          requireAsExpression: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          requireDynamic: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          requireResolve: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          importDynamic: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        },
                        {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        }
                      >
                    >;
                  },
                  "strict",
                  import("zod").ZodTypeAny,
                  {
                    css?:
                      | {
                          namedExports?: boolean | undefined;
                        }
                      | undefined;
                    "css/auto"?:
                      | {
                          namedExports?: boolean | undefined;
                        }
                      | undefined;
                    "css/module"?:
                      | {
                          namedExports?: boolean | undefined;
                        }
                      | undefined;
                    javascript?:
                      | {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        }
                      | undefined;
                    asset?:
                      | {
                          dataUrlCondition?:
                            | {
                                maxSize?: number | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                    "javascript/auto"?:
                      | {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        }
                      | undefined;
                    "javascript/dynamic"?:
                      | {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        }
                      | undefined;
                    "javascript/esm"?:
                      | {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        }
                      | undefined;
                  },
                  {
                    css?:
                      | {
                          namedExports?: boolean | undefined;
                        }
                      | undefined;
                    "css/auto"?:
                      | {
                          namedExports?: boolean | undefined;
                        }
                      | undefined;
                    "css/module"?:
                      | {
                          namedExports?: boolean | undefined;
                        }
                      | undefined;
                    javascript?:
                      | {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        }
                      | undefined;
                    asset?:
                      | {
                          dataUrlCondition?:
                            | {
                                maxSize?: number | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                    "javascript/auto"?:
                      | {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        }
                      | undefined;
                    "javascript/dynamic"?:
                      | {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        }
                      | undefined;
                    "javascript/esm"?:
                      | {
                          url?: boolean | "relative" | undefined;
                          dynamicImportMode?:
                            | "eager"
                            | "lazy"
                            | "weak"
                            | "lazy-once"
                            | undefined;
                          dynamicImportPreload?: number | boolean | undefined;
                          dynamicImportPrefetch?: number | boolean | undefined;
                          dynamicImportFetchPriority?:
                            | "auto"
                            | "low"
                            | "high"
                            | undefined;
                          importMeta?: boolean | undefined;
                          exprContextCritical?: boolean | undefined;
                          wrappedContextCritical?: boolean | undefined;
                          wrappedContextRegExp?: RegExp | undefined;
                          exportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          importExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          reexportExportsPresence?:
                            | false
                            | "error"
                            | "warn"
                            | "auto"
                            | undefined;
                          strictExportPresence?: boolean | undefined;
                          worker?: boolean | string[] | undefined;
                          overrideStrict?: "strict" | "non-strict" | undefined;
                          requireAsExpression?: boolean | undefined;
                          requireDynamic?: boolean | undefined;
                          requireResolve?: boolean | undefined;
                          importDynamic?: boolean | undefined;
                        }
                      | undefined;
                  }
                >,
                import("zod").ZodRecord<
                  import("zod").ZodString,
                  import("zod").ZodRecord<
                    import("zod").ZodString,
                    import("zod").ZodAny
                  >
                >
              ]
            >
          >;
          generator: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodObject<
                  {
                    asset: import("zod").ZodOptional<
                      import("zod").ZodObject<
                        z.objectUtil.extendShape<
                          {
                            dataUrl: import("zod").ZodOptional<
                              import("zod").ZodUnion<
                                [
                                  import("zod").ZodObject<
                                    {
                                      encoding: import("zod").ZodOptional<
                                        import("zod").ZodUnion<
                                          [
                                            import("zod").ZodLiteral<false>,
                                            import("zod").ZodLiteral<"base64">
                                          ]
                                        >
                                      >;
                                      mimetype: import("zod").ZodOptional<
                                        import("zod").ZodString
                                      >;
                                    },
                                    "strict",
                                    import("zod").ZodTypeAny,
                                    {
                                      mimetype?: string | undefined;
                                      encoding?: false | "base64" | undefined;
                                    },
                                    {
                                      mimetype?: string | undefined;
                                      encoding?: false | "base64" | undefined;
                                    }
                                  >,
                                  import("zod").ZodFunction<
                                    import("zod").ZodTuple<
                                      [
                                        z.Schema<
                                          Buffer<ArrayBufferLike>,
                                          import("zod").ZodTypeDef,
                                          Buffer<ArrayBufferLike>
                                        >,
                                        import("zod").ZodObject<
                                          {
                                            filename: import("zod").ZodString;
                                            module: z.Schema<
                                              Module,
                                              import("zod").ZodTypeDef,
                                              Module
                                            >;
                                          },
                                          "strict",
                                          import("zod").ZodTypeAny,
                                          {
                                            module: Module;
                                            filename: string;
                                          },
                                          {
                                            module: Module;
                                            filename: string;
                                          }
                                        >
                                      ],
                                      import("zod").ZodUnknown
                                    >,
                                    import("zod").ZodString
                                  >
                                ]
                              >
                            >;
                          },
                          {
                            emit: import("zod").ZodOptional<
                              import("zod").ZodBoolean
                            >;
                            filename: import("zod").ZodOptional<
                              import("zod").ZodUnion<
                                [
                                  import("zod").ZodString,
                                  import("zod").ZodFunction<
                                    import("zod").ZodTuple<
                                      [
                                        z.Schema<
                                          PathData,
                                          import("zod").ZodTypeDef,
                                          PathData
                                        >,
                                        import("zod").ZodOptional<
                                          z.Schema<
                                            AssetInfo,
                                            import("zod").ZodTypeDef,
                                            AssetInfo
                                          >
                                        >
                                      ],
                                      import("zod").ZodUnknown
                                    >,
                                    import("zod").ZodString
                                  >
                                ]
                              >
                            >;
                            publicPath: import("zod").ZodOptional<
                              import("zod").ZodUnion<
                                [
                                  import("zod").ZodLiteral<"auto">,
                                  import("zod").ZodUnion<
                                    [
                                      import("zod").ZodString,
                                      import("zod").ZodFunction<
                                        import("zod").ZodTuple<
                                          [
                                            z.Schema<
                                              PathData,
                                              import("zod").ZodTypeDef,
                                              PathData
                                            >,
                                            import("zod").ZodOptional<
                                              z.Schema<
                                                AssetInfo,
                                                import("zod").ZodTypeDef,
                                                AssetInfo
                                              >
                                            >
                                          ],
                                          import("zod").ZodUnknown
                                        >,
                                        import("zod").ZodString
                                      >
                                    ]
                                  >
                                ]
                              >
                            >;
                          }
                        >,
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          emit?: boolean | undefined;
                          publicPath?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          filename?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          dataUrl?:
                            | {
                                mimetype?: string | undefined;
                                encoding?: false | "base64" | undefined;
                              }
                            | ((
                                args_0: Buffer<ArrayBufferLike>,
                                args_1: {
                                  module: Module;
                                  filename: string;
                                },
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                        },
                        {
                          emit?: boolean | undefined;
                          publicPath?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          filename?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          dataUrl?:
                            | {
                                mimetype?: string | undefined;
                                encoding?: false | "base64" | undefined;
                              }
                            | ((
                                args_0: Buffer<ArrayBufferLike>,
                                args_1: {
                                  module: Module;
                                  filename: string;
                                },
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                        }
                      >
                    >;
                    "asset/inline": import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          dataUrl: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodObject<
                                  {
                                    encoding: import("zod").ZodOptional<
                                      import("zod").ZodUnion<
                                        [
                                          import("zod").ZodLiteral<false>,
                                          import("zod").ZodLiteral<"base64">
                                        ]
                                      >
                                    >;
                                    mimetype: import("zod").ZodOptional<
                                      import("zod").ZodString
                                    >;
                                  },
                                  "strict",
                                  import("zod").ZodTypeAny,
                                  {
                                    mimetype?: string | undefined;
                                    encoding?: false | "base64" | undefined;
                                  },
                                  {
                                    mimetype?: string | undefined;
                                    encoding?: false | "base64" | undefined;
                                  }
                                >,
                                import("zod").ZodFunction<
                                  import("zod").ZodTuple<
                                    [
                                      z.Schema<
                                        Buffer<ArrayBufferLike>,
                                        import("zod").ZodTypeDef,
                                        Buffer<ArrayBufferLike>
                                      >,
                                      import("zod").ZodObject<
                                        {
                                          filename: import("zod").ZodString;
                                          module: z.Schema<
                                            Module,
                                            import("zod").ZodTypeDef,
                                            Module
                                          >;
                                        },
                                        "strict",
                                        import("zod").ZodTypeAny,
                                        {
                                          module: Module;
                                          filename: string;
                                        },
                                        {
                                          module: Module;
                                          filename: string;
                                        }
                                      >
                                    ],
                                    import("zod").ZodUnknown
                                  >,
                                  import("zod").ZodString
                                >
                              ]
                            >
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          dataUrl?:
                            | {
                                mimetype?: string | undefined;
                                encoding?: false | "base64" | undefined;
                              }
                            | ((
                                args_0: Buffer<ArrayBufferLike>,
                                args_1: {
                                  module: Module;
                                  filename: string;
                                },
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                        },
                        {
                          dataUrl?:
                            | {
                                mimetype?: string | undefined;
                                encoding?: false | "base64" | undefined;
                              }
                            | ((
                                args_0: Buffer<ArrayBufferLike>,
                                args_1: {
                                  module: Module;
                                  filename: string;
                                },
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                        }
                      >
                    >;
                    "asset/resource": import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          emit: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          filename: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodString,
                                import("zod").ZodFunction<
                                  import("zod").ZodTuple<
                                    [
                                      z.Schema<
                                        PathData,
                                        import("zod").ZodTypeDef,
                                        PathData
                                      >,
                                      import("zod").ZodOptional<
                                        z.Schema<
                                          AssetInfo,
                                          import("zod").ZodTypeDef,
                                          AssetInfo
                                        >
                                      >
                                    ],
                                    import("zod").ZodUnknown
                                  >,
                                  import("zod").ZodString
                                >
                              ]
                            >
                          >;
                          publicPath: import("zod").ZodOptional<
                            import("zod").ZodUnion<
                              [
                                import("zod").ZodLiteral<"auto">,
                                import("zod").ZodUnion<
                                  [
                                    import("zod").ZodString,
                                    import("zod").ZodFunction<
                                      import("zod").ZodTuple<
                                        [
                                          z.Schema<
                                            PathData,
                                            import("zod").ZodTypeDef,
                                            PathData
                                          >,
                                          import("zod").ZodOptional<
                                            z.Schema<
                                              AssetInfo,
                                              import("zod").ZodTypeDef,
                                              AssetInfo
                                            >
                                          >
                                        ],
                                        import("zod").ZodUnknown
                                      >,
                                      import("zod").ZodString
                                    >
                                  ]
                                >
                              ]
                            >
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          emit?: boolean | undefined;
                          publicPath?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          filename?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                        },
                        {
                          emit?: boolean | undefined;
                          publicPath?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          filename?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                        }
                      >
                    >;
                    css: import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          exportsOnly: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          esModule: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          exportsOnly?: boolean | undefined;
                          esModule?: boolean | undefined;
                        },
                        {
                          exportsOnly?: boolean | undefined;
                          esModule?: boolean | undefined;
                        }
                      >
                    >;
                    "css/auto": import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          exportsConvention: import("zod").ZodOptional<
                            import("zod").ZodEnum<
                              [
                                "as-is",
                                "camel-case",
                                "camel-case-only",
                                "dashes",
                                "dashes-only"
                              ]
                            >
                          >;
                          exportsOnly: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          localIdentName: import("zod").ZodOptional<
                            import("zod").ZodString
                          >;
                          esModule: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          exportsOnly?: boolean | undefined;
                          esModule?: boolean | undefined;
                          exportsConvention?:
                            | "as-is"
                            | "camel-case"
                            | "camel-case-only"
                            | "dashes"
                            | "dashes-only"
                            | undefined;
                          localIdentName?: string | undefined;
                        },
                        {
                          exportsOnly?: boolean | undefined;
                          esModule?: boolean | undefined;
                          exportsConvention?:
                            | "as-is"
                            | "camel-case"
                            | "camel-case-only"
                            | "dashes"
                            | "dashes-only"
                            | undefined;
                          localIdentName?: string | undefined;
                        }
                      >
                    >;
                    "css/module": import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          exportsConvention: import("zod").ZodOptional<
                            import("zod").ZodEnum<
                              [
                                "as-is",
                                "camel-case",
                                "camel-case-only",
                                "dashes",
                                "dashes-only"
                              ]
                            >
                          >;
                          exportsOnly: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                          localIdentName: import("zod").ZodOptional<
                            import("zod").ZodString
                          >;
                          esModule: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          exportsOnly?: boolean | undefined;
                          esModule?: boolean | undefined;
                          exportsConvention?:
                            | "as-is"
                            | "camel-case"
                            | "camel-case-only"
                            | "dashes"
                            | "dashes-only"
                            | undefined;
                          localIdentName?: string | undefined;
                        },
                        {
                          exportsOnly?: boolean | undefined;
                          esModule?: boolean | undefined;
                          exportsConvention?:
                            | "as-is"
                            | "camel-case"
                            | "camel-case-only"
                            | "dashes"
                            | "dashes-only"
                            | undefined;
                          localIdentName?: string | undefined;
                        }
                      >
                    >;
                    json: import("zod").ZodOptional<
                      import("zod").ZodObject<
                        {
                          JSONParse: import("zod").ZodOptional<
                            import("zod").ZodBoolean
                          >;
                        },
                        "strict",
                        import("zod").ZodTypeAny,
                        {
                          JSONParse?: boolean | undefined;
                        },
                        {
                          JSONParse?: boolean | undefined;
                        }
                      >
                    >;
                  },
                  "strict",
                  import("zod").ZodTypeAny,
                  {
                    css?:
                      | {
                          exportsOnly?: boolean | undefined;
                          esModule?: boolean | undefined;
                        }
                      | undefined;
                    "css/auto"?:
                      | {
                          exportsOnly?: boolean | undefined;
                          esModule?: boolean | undefined;
                          exportsConvention?:
                            | "as-is"
                            | "camel-case"
                            | "camel-case-only"
                            | "dashes"
                            | "dashes-only"
                            | undefined;
                          localIdentName?: string | undefined;
                        }
                      | undefined;
                    "css/module"?:
                      | {
                          exportsOnly?: boolean | undefined;
                          esModule?: boolean | undefined;
                          exportsConvention?:
                            | "as-is"
                            | "camel-case"
                            | "camel-case-only"
                            | "dashes"
                            | "dashes-only"
                            | undefined;
                          localIdentName?: string | undefined;
                        }
                      | undefined;
                    asset?:
                      | {
                          emit?: boolean | undefined;
                          publicPath?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          filename?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          dataUrl?:
                            | {
                                mimetype?: string | undefined;
                                encoding?: false | "base64" | undefined;
                              }
                            | ((
                                args_0: Buffer<ArrayBufferLike>,
                                args_1: {
                                  module: Module;
                                  filename: string;
                                },
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                        }
                      | undefined;
                    json?:
                      | {
                          JSONParse?: boolean | undefined;
                        }
                      | undefined;
                    "asset/inline"?:
                      | {
                          dataUrl?:
                            | {
                                mimetype?: string | undefined;
                                encoding?: false | "base64" | undefined;
                              }
                            | ((
                                args_0: Buffer<ArrayBufferLike>,
                                args_1: {
                                  module: Module;
                                  filename: string;
                                },
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                        }
                      | undefined;
                    "asset/resource"?:
                      | {
                          emit?: boolean | undefined;
                          publicPath?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          filename?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                        }
                      | undefined;
                  },
                  {
                    css?:
                      | {
                          exportsOnly?: boolean | undefined;
                          esModule?: boolean | undefined;
                        }
                      | undefined;
                    "css/auto"?:
                      | {
                          exportsOnly?: boolean | undefined;
                          esModule?: boolean | undefined;
                          exportsConvention?:
                            | "as-is"
                            | "camel-case"
                            | "camel-case-only"
                            | "dashes"
                            | "dashes-only"
                            | undefined;
                          localIdentName?: string | undefined;
                        }
                      | undefined;
                    "css/module"?:
                      | {
                          exportsOnly?: boolean | undefined;
                          esModule?: boolean | undefined;
                          exportsConvention?:
                            | "as-is"
                            | "camel-case"
                            | "camel-case-only"
                            | "dashes"
                            | "dashes-only"
                            | undefined;
                          localIdentName?: string | undefined;
                        }
                      | undefined;
                    asset?:
                      | {
                          emit?: boolean | undefined;
                          publicPath?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          filename?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          dataUrl?:
                            | {
                                mimetype?: string | undefined;
                                encoding?: false | "base64" | undefined;
                              }
                            | ((
                                args_0: Buffer<ArrayBufferLike>,
                                args_1: {
                                  module: Module;
                                  filename: string;
                                },
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                        }
                      | undefined;
                    json?:
                      | {
                          JSONParse?: boolean | undefined;
                        }
                      | undefined;
                    "asset/inline"?:
                      | {
                          dataUrl?:
                            | {
                                mimetype?: string | undefined;
                                encoding?: false | "base64" | undefined;
                              }
                            | ((
                                args_0: Buffer<ArrayBufferLike>,
                                args_1: {
                                  module: Module;
                                  filename: string;
                                },
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                        }
                      | undefined;
                    "asset/resource"?:
                      | {
                          emit?: boolean | undefined;
                          publicPath?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          filename?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                        }
                      | undefined;
                  }
                >,
                import("zod").ZodRecord<
                  import("zod").ZodString,
                  import("zod").ZodRecord<
                    import("zod").ZodString,
                    import("zod").ZodAny
                  >
                >
              ]
            >
          >;
          noParse: import("zod").ZodOptional<
            import("zod").ZodUnion<
              [
                import("zod").ZodUnion<
                  [
                    import("zod").ZodUnion<
                      [
                        import("zod").ZodString,
                        z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>
                      ]
                    >,
                    import("zod").ZodFunction<
                      import("zod").ZodTuple<
                        [import("zod").ZodString],
                        import("zod").ZodUnknown
                      >,
                      import("zod").ZodBoolean
                    >
                  ]
                >,
                import("zod").ZodArray<
                  import("zod").ZodUnion<
                    [
                      import("zod").ZodUnion<
                        [
                          import("zod").ZodString,
                          z.Schema<RegExp, import("zod").ZodTypeDef, RegExp>
                        ]
                      >,
                      import("zod").ZodFunction<
                        import("zod").ZodTuple<
                          [import("zod").ZodString],
                          import("zod").ZodUnknown
                        >,
                        import("zod").ZodBoolean
                      >
                    ]
                  >,
                  "many"
                >
              ]
            >
          >;
        },
        "strict",
        import("zod").ZodTypeAny,
        {
          parser?:
            | {
                css?:
                  | {
                      namedExports?: boolean | undefined;
                    }
                  | undefined;
                "css/auto"?:
                  | {
                      namedExports?: boolean | undefined;
                    }
                  | undefined;
                "css/module"?:
                  | {
                      namedExports?: boolean | undefined;
                    }
                  | undefined;
                javascript?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
                asset?:
                  | {
                      dataUrlCondition?:
                        | {
                            maxSize?: number | undefined;
                          }
                        | undefined;
                    }
                  | undefined;
                "javascript/auto"?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
                "javascript/dynamic"?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
                "javascript/esm"?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
              }
            | Record<string, Record<string, any>>
            | undefined;
          generator?:
            | Record<string, Record<string, any>>
            | {
                css?:
                  | {
                      exportsOnly?: boolean | undefined;
                      esModule?: boolean | undefined;
                    }
                  | undefined;
                "css/auto"?:
                  | {
                      exportsOnly?: boolean | undefined;
                      esModule?: boolean | undefined;
                      exportsConvention?:
                        | "as-is"
                        | "camel-case"
                        | "camel-case-only"
                        | "dashes"
                        | "dashes-only"
                        | undefined;
                      localIdentName?: string | undefined;
                    }
                  | undefined;
                "css/module"?:
                  | {
                      exportsOnly?: boolean | undefined;
                      esModule?: boolean | undefined;
                      exportsConvention?:
                        | "as-is"
                        | "camel-case"
                        | "camel-case-only"
                        | "dashes"
                        | "dashes-only"
                        | undefined;
                      localIdentName?: string | undefined;
                    }
                  | undefined;
                asset?:
                  | {
                      emit?: boolean | undefined;
                      publicPath?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      filename?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      dataUrl?:
                        | {
                            mimetype?: string | undefined;
                            encoding?: false | "base64" | undefined;
                          }
                        | ((
                            args_0: Buffer<ArrayBufferLike>,
                            args_1: {
                              module: Module;
                              filename: string;
                            },
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                    }
                  | undefined;
                json?:
                  | {
                      JSONParse?: boolean | undefined;
                    }
                  | undefined;
                "asset/inline"?:
                  | {
                      dataUrl?:
                        | {
                            mimetype?: string | undefined;
                            encoding?: false | "base64" | undefined;
                          }
                        | ((
                            args_0: Buffer<ArrayBufferLike>,
                            args_1: {
                              module: Module;
                              filename: string;
                            },
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                    }
                  | undefined;
                "asset/resource"?:
                  | {
                      emit?: boolean | undefined;
                      publicPath?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      filename?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                    }
                  | undefined;
              }
            | undefined;
          rules?:
            | (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[]
            | undefined;
          defaultRules?:
            | (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[]
            | undefined;
          noParse?:
            | string
            | RegExp
            | ((args_0: string, ...args: unknown[]) => boolean)
            | (
                | string
                | RegExp
                | ((args_0: string, ...args: unknown[]) => boolean)
              )[]
            | undefined;
        },
        {
          parser?:
            | {
                css?:
                  | {
                      namedExports?: boolean | undefined;
                    }
                  | undefined;
                "css/auto"?:
                  | {
                      namedExports?: boolean | undefined;
                    }
                  | undefined;
                "css/module"?:
                  | {
                      namedExports?: boolean | undefined;
                    }
                  | undefined;
                javascript?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
                asset?:
                  | {
                      dataUrlCondition?:
                        | {
                            maxSize?: number | undefined;
                          }
                        | undefined;
                    }
                  | undefined;
                "javascript/auto"?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
                "javascript/dynamic"?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
                "javascript/esm"?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
              }
            | Record<string, Record<string, any>>
            | undefined;
          generator?:
            | Record<string, Record<string, any>>
            | {
                css?:
                  | {
                      exportsOnly?: boolean | undefined;
                      esModule?: boolean | undefined;
                    }
                  | undefined;
                "css/auto"?:
                  | {
                      exportsOnly?: boolean | undefined;
                      esModule?: boolean | undefined;
                      exportsConvention?:
                        | "as-is"
                        | "camel-case"
                        | "camel-case-only"
                        | "dashes"
                        | "dashes-only"
                        | undefined;
                      localIdentName?: string | undefined;
                    }
                  | undefined;
                "css/module"?:
                  | {
                      exportsOnly?: boolean | undefined;
                      esModule?: boolean | undefined;
                      exportsConvention?:
                        | "as-is"
                        | "camel-case"
                        | "camel-case-only"
                        | "dashes"
                        | "dashes-only"
                        | undefined;
                      localIdentName?: string | undefined;
                    }
                  | undefined;
                asset?:
                  | {
                      emit?: boolean | undefined;
                      publicPath?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      filename?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      dataUrl?:
                        | {
                            mimetype?: string | undefined;
                            encoding?: false | "base64" | undefined;
                          }
                        | ((
                            args_0: Buffer<ArrayBufferLike>,
                            args_1: {
                              module: Module;
                              filename: string;
                            },
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                    }
                  | undefined;
                json?:
                  | {
                      JSONParse?: boolean | undefined;
                    }
                  | undefined;
                "asset/inline"?:
                  | {
                      dataUrl?:
                        | {
                            mimetype?: string | undefined;
                            encoding?: false | "base64" | undefined;
                          }
                        | ((
                            args_0: Buffer<ArrayBufferLike>,
                            args_1: {
                              module: Module;
                              filename: string;
                            },
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                    }
                  | undefined;
                "asset/resource"?:
                  | {
                      emit?: boolean | undefined;
                      publicPath?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      filename?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                    }
                  | undefined;
              }
            | undefined;
          rules?:
            | (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[]
            | undefined;
          defaultRules?:
            | (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[]
            | undefined;
          noParse?:
            | string
            | RegExp
            | ((args_0: string, ...args: unknown[]) => boolean)
            | (
                | string
                | RegExp
                | ((args_0: string, ...args: unknown[]) => boolean)
              )[]
            | undefined;
        }
      >
    >;
    profile: import("zod").ZodOptional<import("zod").ZodBoolean>;
    amd: import("zod").ZodOptional<
      import("zod").ZodUnion<
        [
          import("zod").ZodLiteral<false>,
          import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>
        ]
      >
    >;
    bail: import("zod").ZodOptional<import("zod").ZodBoolean>;
    performance: import("zod").ZodOptional<
      import("zod").ZodUnion<
        [
          import("zod").ZodObject<
            {
              assetFilter: import("zod").ZodOptional<
                import("zod").ZodFunction<
                  import("zod").ZodTuple<
                    [import("zod").ZodString],
                    import("zod").ZodUnknown
                  >,
                  import("zod").ZodBoolean
                >
              >;
              hints: import("zod").ZodOptional<
                import("zod").ZodUnion<
                  [
                    import("zod").ZodEnum<["error", "warning"]>,
                    import("zod").ZodLiteral<false>
                  ]
                >
              >;
              maxAssetSize: import("zod").ZodOptional<import("zod").ZodNumber>;
              maxEntrypointSize: import("zod").ZodOptional<
                import("zod").ZodNumber
              >;
            },
            "strict",
            import("zod").ZodTypeAny,
            {
              assetFilter?:
                | ((args_0: string, ...args: unknown[]) => boolean)
                | undefined;
              hints?: false | "error" | "warning" | undefined;
              maxAssetSize?: number | undefined;
              maxEntrypointSize?: number | undefined;
            },
            {
              assetFilter?:
                | ((args_0: string, ...args: unknown[]) => boolean)
                | undefined;
              hints?: false | "error" | "warning" | undefined;
              maxAssetSize?: number | undefined;
              maxEntrypointSize?: number | undefined;
            }
          >,
          import("zod").ZodLiteral<false>
        ]
      >
    >;
  },
  "strict",
  import("zod").ZodTypeAny,
  {
    name?: string | undefined;
    resolve?: t.ResolveOptions | undefined;
    module?:
      | {
          parser?:
            | {
                css?:
                  | {
                      namedExports?: boolean | undefined;
                    }
                  | undefined;
                "css/auto"?:
                  | {
                      namedExports?: boolean | undefined;
                    }
                  | undefined;
                "css/module"?:
                  | {
                      namedExports?: boolean | undefined;
                    }
                  | undefined;
                javascript?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
                asset?:
                  | {
                      dataUrlCondition?:
                        | {
                            maxSize?: number | undefined;
                          }
                        | undefined;
                    }
                  | undefined;
                "javascript/auto"?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
                "javascript/dynamic"?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
                "javascript/esm"?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
              }
            | Record<string, Record<string, any>>
            | undefined;
          generator?:
            | Record<string, Record<string, any>>
            | {
                css?:
                  | {
                      exportsOnly?: boolean | undefined;
                      esModule?: boolean | undefined;
                    }
                  | undefined;
                "css/auto"?:
                  | {
                      exportsOnly?: boolean | undefined;
                      esModule?: boolean | undefined;
                      exportsConvention?:
                        | "as-is"
                        | "camel-case"
                        | "camel-case-only"
                        | "dashes"
                        | "dashes-only"
                        | undefined;
                      localIdentName?: string | undefined;
                    }
                  | undefined;
                "css/module"?:
                  | {
                      exportsOnly?: boolean | undefined;
                      esModule?: boolean | undefined;
                      exportsConvention?:
                        | "as-is"
                        | "camel-case"
                        | "camel-case-only"
                        | "dashes"
                        | "dashes-only"
                        | undefined;
                      localIdentName?: string | undefined;
                    }
                  | undefined;
                asset?:
                  | {
                      emit?: boolean | undefined;
                      publicPath?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      filename?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      dataUrl?:
                        | {
                            mimetype?: string | undefined;
                            encoding?: false | "base64" | undefined;
                          }
                        | ((
                            args_0: Buffer<ArrayBufferLike>,
                            args_1: {
                              module: Module;
                              filename: string;
                            },
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                    }
                  | undefined;
                json?:
                  | {
                      JSONParse?: boolean | undefined;
                    }
                  | undefined;
                "asset/inline"?:
                  | {
                      dataUrl?:
                        | {
                            mimetype?: string | undefined;
                            encoding?: false | "base64" | undefined;
                          }
                        | ((
                            args_0: Buffer<ArrayBufferLike>,
                            args_1: {
                              module: Module;
                              filename: string;
                            },
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                    }
                  | undefined;
                "asset/resource"?:
                  | {
                      emit?: boolean | undefined;
                      publicPath?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      filename?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                    }
                  | undefined;
              }
            | undefined;
          rules?:
            | (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[]
            | undefined;
          defaultRules?:
            | (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[]
            | undefined;
          noParse?:
            | string
            | RegExp
            | ((args_0: string, ...args: unknown[]) => boolean)
            | (
                | string
                | RegExp
                | ((args_0: string, ...args: unknown[]) => boolean)
              )[]
            | undefined;
        }
      | undefined;
    profile?: boolean | undefined;
    cache?: boolean | undefined;
    context?: string | undefined;
    amd?: false | Record<string, any> | undefined;
    externals?:
      | string
      | RegExp
      | Record<
          string,
          | string
          | boolean
          | string[]
          | t.ExternalItemUmdValue
          | t.ExternalItemObjectValue
        >
      | ((
          args_0: t.ExternalItemFunctionData,
          args_1: (
            args_0: Error | undefined,
            args_1:
              | string
              | boolean
              | string[]
              | t.ExternalItemUmdValue
              | t.ExternalItemObjectValue
              | undefined,
            args_2:
              | "module"
              | "import"
              | "jsonp"
              | "var"
              | "assign"
              | "this"
              | "window"
              | "self"
              | "global"
              | "commonjs"
              | "commonjs2"
              | "commonjs-module"
              | "commonjs-static"
              | "amd"
              | "amd-require"
              | "umd"
              | "umd2"
              | "system"
              | "promise"
              | "module-import"
              | "script"
              | "node-commonjs"
              | "commonjs-import"
              | undefined,
            ...args: unknown[]
          ) => void,
          ...args: unknown[]
        ) => unknown)
      | ((
          args_0: t.ExternalItemFunctionData,
          ...args: unknown[]
        ) => Promise<
          | string
          | boolean
          | string[]
          | t.ExternalItemUmdValue
          | t.ExternalItemObjectValue
        >)
      | ((
          args_0: t.ExternalItemFunctionData,
          ...args: unknown[]
        ) =>
          | string
          | boolean
          | string[]
          | t.ExternalItemUmdValue
          | t.ExternalItemObjectValue)
      | (
          | string
          | RegExp
          | Record<
              string,
              | string
              | boolean
              | string[]
              | t.ExternalItemUmdValue
              | t.ExternalItemObjectValue
            >
          | ((
              args_0: t.ExternalItemFunctionData,
              args_1: (
                args_0: Error | undefined,
                args_1:
                  | string
                  | boolean
                  | string[]
                  | t.ExternalItemUmdValue
                  | t.ExternalItemObjectValue
                  | undefined,
                args_2:
                  | "module"
                  | "import"
                  | "jsonp"
                  | "var"
                  | "assign"
                  | "this"
                  | "window"
                  | "self"
                  | "global"
                  | "commonjs"
                  | "commonjs2"
                  | "commonjs-module"
                  | "commonjs-static"
                  | "amd"
                  | "amd-require"
                  | "umd"
                  | "umd2"
                  | "system"
                  | "promise"
                  | "module-import"
                  | "script"
                  | "node-commonjs"
                  | "commonjs-import"
                  | undefined,
                ...args: unknown[]
              ) => void,
              ...args: unknown[]
            ) => unknown)
          | ((
              args_0: t.ExternalItemFunctionData,
              ...args: unknown[]
            ) => Promise<
              | string
              | boolean
              | string[]
              | t.ExternalItemUmdValue
              | t.ExternalItemObjectValue
            >)
          | ((
              args_0: t.ExternalItemFunctionData,
              ...args: unknown[]
            ) =>
              | string
              | boolean
              | string[]
              | t.ExternalItemUmdValue
              | t.ExternalItemObjectValue)
        )[]
      | undefined;
    target?:
      | false
      | "async-node"
      | "node"
      | "web"
      | `node${number}`
      | `async-node${number}`
      | `node${number}.${number}`
      | `async-node${number}.${number}`
      | `electron${number}-main`
      | `electron${number}.${number}-main`
      | `electron${number}-renderer`
      | `electron${number}.${number}-renderer`
      | `electron${number}-preload`
      | `electron${number}.${number}-preload`
      | `nwjs${number}`
      | `nwjs${number}.${number}`
      | `node-webkit${number}`
      | `node-webkit${number}.${number}`
      | `browserslist:${string}`
      | "webworker"
      | "es3"
      | "es5"
      | "es2015"
      | "es2016"
      | "es2017"
      | "es2018"
      | "es2019"
      | "es2020"
      | "es2021"
      | "es2022"
      | "electron-main"
      | "electron-renderer"
      | "electron-preload"
      | "nwjs"
      | "node-webkit"
      | "browserslist"
      | (
          | "async-node"
          | "node"
          | "web"
          | `node${number}`
          | `async-node${number}`
          | `node${number}.${number}`
          | `async-node${number}.${number}`
          | `electron${number}-main`
          | `electron${number}.${number}-main`
          | `electron${number}-renderer`
          | `electron${number}.${number}-renderer`
          | `electron${number}-preload`
          | `electron${number}.${number}-preload`
          | `nwjs${number}`
          | `nwjs${number}.${number}`
          | `node-webkit${number}`
          | `node-webkit${number}.${number}`
          | `browserslist:${string}`
          | "webworker"
          | "es3"
          | "es5"
          | "es2015"
          | "es2016"
          | "es2017"
          | "es2018"
          | "es2019"
          | "es2020"
          | "es2021"
          | "es2022"
          | "electron-main"
          | "electron-renderer"
          | "electron-preload"
          | "nwjs"
          | "node-webkit"
          | "browserslist"
        )[]
      | undefined;
    node?:
      | false
      | {
          global?: boolean | "warn" | undefined;
          __dirname?:
            | boolean
            | "warn-mock"
            | "mock"
            | "eval-only"
            | "node-module"
            | undefined;
          __filename?:
            | boolean
            | "warn-mock"
            | "mock"
            | "eval-only"
            | "node-module"
            | undefined;
        }
      | undefined;
    performance?:
      | false
      | {
          assetFilter?:
            | ((args_0: string, ...args: unknown[]) => boolean)
            | undefined;
          hints?: false | "error" | "warning" | undefined;
          maxAssetSize?: number | undefined;
          maxEntrypointSize?: number | undefined;
        }
      | undefined;
    mode?: "none" | "development" | "production" | undefined;
    experiments?:
      | {
          css?: boolean | undefined;
          cache?:
            | boolean
            | {
                type: "memory";
              }
            | {
                type: "persistent";
                version?: string | undefined;
                buildDependencies?: string[] | undefined;
                snapshot?:
                  | {
                      immutablePaths?: (string | RegExp)[] | undefined;
                      unmanagedPaths?: (string | RegExp)[] | undefined;
                      managedPaths?: (string | RegExp)[] | undefined;
                    }
                  | undefined;
                storage?:
                  | {
                      type: "filesystem";
                      directory?: string | undefined;
                    }
                  | undefined;
              }
            | undefined;
          lazyCompilation?:
            | boolean
            | {
                entries?: boolean | undefined;
                test?:
                  | RegExp
                  | ((args_0: Module, ...args: unknown[]) => boolean)
                  | undefined;
                imports?: boolean | undefined;
                client?: string | undefined;
                serverUrl?: string | undefined;
              }
            | undefined;
          asyncWebAssembly?: boolean | undefined;
          outputModule?: boolean | undefined;
          topLevelAwait?: boolean | undefined;
          layers?: boolean | undefined;
          incremental?:
            | boolean
            | {
                make?: boolean | undefined;
                providedExports?: boolean | undefined;
                sideEffects?: boolean | undefined;
                moduleIds?: boolean | undefined;
                chunkIds?: boolean | undefined;
                inferAsyncModules?: boolean | undefined;
                dependenciesDiagnostics?: boolean | undefined;
                buildChunkGraph?: boolean | undefined;
                modulesHashes?: boolean | undefined;
                modulesCodegen?: boolean | undefined;
                modulesRuntimeRequirements?: boolean | undefined;
                chunksRuntimeRequirements?: boolean | undefined;
                chunksHashes?: boolean | undefined;
                chunksRender?: boolean | undefined;
                emitAssets?: boolean | undefined;
              }
            | undefined;
          parallelCodeSplitting?: boolean | undefined;
          futureDefaults?: boolean | undefined;
          rspackFuture?:
            | {
                bundlerInfo?:
                  | {
                      force?: boolean | ("version" | "uniqueId")[] | undefined;
                      version?: string | undefined;
                      bundler?: string | undefined;
                    }
                  | undefined;
              }
            | undefined;
          buildHttp?:
            | {
                allowedUris: (string | RegExp)[];
                httpClient?:
                  | ((
                      args_0: string,
                      args_1: Record<string, string>,
                      ...args: unknown[]
                    ) => Promise<{
                      status: number;
                      body: Buffer<ArrayBufferLike>;
                      headers: Record<string, string>;
                    }>)
                  | undefined;
                lockfileLocation?: string | undefined;
                cacheLocation?: string | false | undefined;
                upgrade?: boolean | undefined;
              }
            | undefined;
          parallelLoader?: boolean | undefined;
        }
      | undefined;
    devtool?:
      | false
      | "eval"
      | "cheap-source-map"
      | "cheap-module-source-map"
      | "source-map"
      | "inline-cheap-source-map"
      | "inline-cheap-module-source-map"
      | "inline-source-map"
      | "inline-nosources-cheap-source-map"
      | "inline-nosources-cheap-module-source-map"
      | "inline-nosources-source-map"
      | "nosources-cheap-source-map"
      | "nosources-cheap-module-source-map"
      | "nosources-source-map"
      | "hidden-nosources-cheap-source-map"
      | "hidden-nosources-cheap-module-source-map"
      | "hidden-nosources-source-map"
      | "hidden-cheap-source-map"
      | "hidden-cheap-module-source-map"
      | "hidden-source-map"
      | "eval-cheap-source-map"
      | "eval-cheap-module-source-map"
      | "eval-source-map"
      | "eval-nosources-cheap-source-map"
      | "eval-nosources-cheap-module-source-map"
      | "eval-nosources-source-map"
      | undefined;
    stats?:
      | boolean
      | "verbose"
      | "none"
      | "normal"
      | "errors-only"
      | "errors-warnings"
      | "minimal"
      | "detailed"
      | "summary"
      | {
          ids?: boolean | undefined;
          runtime?: boolean | undefined;
          hash?: boolean | undefined;
          modules?: boolean | undefined;
          publicPath?: boolean | undefined;
          chunks?: boolean | undefined;
          source?: boolean | undefined;
          all?: boolean | undefined;
          usedExports?: boolean | undefined;
          assets?: boolean | undefined;
          version?: boolean | undefined;
          preset?:
            | boolean
            | "verbose"
            | "none"
            | "normal"
            | "errors-only"
            | "errors-warnings"
            | "minimal"
            | "detailed"
            | "summary"
            | undefined;
          entrypoints?: boolean | "auto" | undefined;
          chunkGroups?: boolean | undefined;
          warnings?: boolean | undefined;
          warningsCount?: boolean | undefined;
          errors?: boolean | undefined;
          errorsCount?: boolean | undefined;
          colors?: boolean | undefined;
          reasons?: boolean | undefined;
          outputPath?: boolean | undefined;
          chunkModules?: boolean | undefined;
          chunkRelations?: boolean | undefined;
          timings?: boolean | undefined;
          builtAt?: boolean | undefined;
          moduleAssets?: boolean | undefined;
          nestedModules?: boolean | undefined;
          logging?:
            | boolean
            | "error"
            | "warn"
            | "info"
            | "log"
            | "verbose"
            | "none"
            | undefined;
          loggingDebug?:
            | string
            | boolean
            | RegExp
            | ((args_0: string, ...args: unknown[]) => boolean)
            | (
                | string
                | RegExp
                | ((args_0: string, ...args: unknown[]) => boolean)
              )[]
            | undefined;
          loggingTrace?: boolean | undefined;
          runtimeModules?: boolean | undefined;
          children?: boolean | undefined;
          providedExports?: boolean | undefined;
          optimizationBailout?: boolean | undefined;
          groupModulesByType?: boolean | undefined;
          groupModulesByCacheStatus?: boolean | undefined;
          groupModulesByLayer?: boolean | undefined;
          groupModulesByAttributes?: boolean | undefined;
          groupModulesByPath?: boolean | undefined;
          groupModulesByExtension?: boolean | undefined;
          modulesSpace?: number | undefined;
          chunkModulesSpace?: number | undefined;
          nestedModulesSpace?: number | undefined;
          relatedAssets?: boolean | undefined;
          groupAssetsByEmitStatus?: boolean | undefined;
          groupAssetsByInfo?: boolean | undefined;
          groupAssetsByPath?: boolean | undefined;
          groupAssetsByExtension?: boolean | undefined;
          groupAssetsByChunk?: boolean | undefined;
          assetsSpace?: number | undefined;
          orphanModules?: boolean | undefined;
          excludeModules?:
            | string
            | boolean
            | RegExp
            | ((args_0: string, args_1: any, args_2: any) => boolean)
            | (
                | string
                | RegExp
                | ((args_0: string, args_1: any, args_2: any) => boolean)
              )[]
            | undefined;
          excludeAssets?:
            | string
            | RegExp
            | ((args_0: string, args_1: any) => boolean)
            | (string | RegExp | ((args_0: string, args_1: any) => boolean))[]
            | undefined;
          modulesSort?: string | undefined;
          chunkModulesSort?: string | undefined;
          nestedModulesSort?: string | undefined;
          chunksSort?: string | undefined;
          assetsSort?: string | undefined;
          performance?: boolean | undefined;
          env?: boolean | undefined;
          chunkGroupAuxiliary?: boolean | undefined;
          chunkGroupChildren?: boolean | undefined;
          chunkGroupMaxAssets?: number | undefined;
          dependentModules?: boolean | undefined;
          chunkOrigins?: boolean | undefined;
          depth?: boolean | undefined;
          reasonsSpace?: number | undefined;
          groupReasonsByOrigin?: boolean | undefined;
          errorDetails?: boolean | undefined;
          errorStack?: boolean | undefined;
          moduleTrace?: boolean | undefined;
          cachedModules?: boolean | undefined;
          cachedAssets?: boolean | undefined;
          cached?: boolean | undefined;
          errorsSpace?: number | undefined;
          warningsSpace?: number | undefined;
        }
      | undefined;
    dependencies?: string[] | undefined;
    entry?:
      | string
      | string[]
      | Record<
          string,
          | string
          | string[]
          | {
              import: string | string[];
              runtime?: string | false | undefined;
              publicPath?:
                | string
                | ((
                    args_0: PathData,
                    args_1: AssetInfo | undefined,
                    ...args: unknown[]
                  ) => string)
                | undefined;
              layer?: string | null | undefined;
              baseUri?: string | undefined;
              filename?:
                | string
                | ((
                    args_0: PathData,
                    args_1: AssetInfo | undefined,
                    ...args: unknown[]
                  ) => string)
                | undefined;
              chunkLoading?: string | false | undefined;
              asyncChunks?: boolean | undefined;
              library?:
                | {
                    type: string;
                    name?:
                      | string
                      | string[]
                      | {
                          commonjs?: string | undefined;
                          amd?: string | undefined;
                          root?: string | string[] | undefined;
                        }
                      | undefined;
                    amdContainer?: string | undefined;
                    auxiliaryComment?:
                      | string
                      | {
                          commonjs?: string | undefined;
                          commonjs2?: string | undefined;
                          amd?: string | undefined;
                          root?: string | undefined;
                        }
                      | undefined;
                    export?: string | string[] | undefined;
                    umdNamedDefine?: boolean | undefined;
                  }
                | undefined;
              dependOn?: string | string[] | undefined;
              wasmLoading?: string | false | undefined;
            }
        >
      | ((...args: unknown[]) =>
          | string
          | string[]
          | Record<
              string,
              | string
              | string[]
              | {
                  import: string | string[];
                  runtime?: string | false | undefined;
                  publicPath?:
                    | string
                    | ((
                        args_0: PathData,
                        args_1: AssetInfo | undefined,
                        ...args: unknown[]
                      ) => string)
                    | undefined;
                  layer?: string | null | undefined;
                  baseUri?: string | undefined;
                  filename?:
                    | string
                    | ((
                        args_0: PathData,
                        args_1: AssetInfo | undefined,
                        ...args: unknown[]
                      ) => string)
                    | undefined;
                  chunkLoading?: string | false | undefined;
                  asyncChunks?: boolean | undefined;
                  library?:
                    | {
                        type: string;
                        name?:
                          | string
                          | string[]
                          | {
                              commonjs?: string | undefined;
                              amd?: string | undefined;
                              root?: string | string[] | undefined;
                            }
                          | undefined;
                        amdContainer?: string | undefined;
                        auxiliaryComment?:
                          | string
                          | {
                              commonjs?: string | undefined;
                              commonjs2?: string | undefined;
                              amd?: string | undefined;
                              root?: string | undefined;
                            }
                          | undefined;
                        export?: string | string[] | undefined;
                        umdNamedDefine?: boolean | undefined;
                      }
                    | undefined;
                  dependOn?: string | string[] | undefined;
                  wasmLoading?: string | false | undefined;
                }
            >
          | Promise<
              | string
              | string[]
              | Record<
                  string,
                  | string
                  | string[]
                  | {
                      import: string | string[];
                      runtime?: string | false | undefined;
                      publicPath?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      layer?: string | null | undefined;
                      baseUri?: string | undefined;
                      filename?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      chunkLoading?: string | false | undefined;
                      asyncChunks?: boolean | undefined;
                      library?:
                        | {
                            type: string;
                            name?:
                              | string
                              | string[]
                              | {
                                  commonjs?: string | undefined;
                                  amd?: string | undefined;
                                  root?: string | string[] | undefined;
                                }
                              | undefined;
                            amdContainer?: string | undefined;
                            auxiliaryComment?:
                              | string
                              | {
                                  commonjs?: string | undefined;
                                  commonjs2?: string | undefined;
                                  amd?: string | undefined;
                                  root?: string | undefined;
                                }
                              | undefined;
                            export?: string | string[] | undefined;
                            umdNamedDefine?: boolean | undefined;
                          }
                        | undefined;
                      dependOn?: string | string[] | undefined;
                      wasmLoading?: string | false | undefined;
                    }
                >
            >)
      | undefined;
    infrastructureLogging?:
      | {
          debug?:
            | string
            | boolean
            | RegExp
            | ((args_0: string, ...args: unknown[]) => boolean)
            | (
                | string
                | RegExp
                | ((args_0: string, ...args: unknown[]) => boolean)
              )[]
            | undefined;
          colors?: boolean | undefined;
          level?:
            | "error"
            | "warn"
            | "info"
            | "log"
            | "verbose"
            | "none"
            | undefined;
          console?: Console | undefined;
          appendOnly?: boolean | undefined;
          stream?: NodeJS.WritableStream | undefined;
        }
      | undefined;
    loader?: Record<string, any> | undefined;
    snapshot?: {} | undefined;
    extends?: string | string[] | undefined;
    output?:
      | {
          module?: boolean | undefined;
          environment?:
            | {
                module?: boolean | undefined;
                arrowFunction?: boolean | undefined;
                asyncFunction?: boolean | undefined;
                bigIntLiteral?: boolean | undefined;
                const?: boolean | undefined;
                destructuring?: boolean | undefined;
                document?: boolean | undefined;
                dynamicImport?: boolean | undefined;
                dynamicImportInWorker?: boolean | undefined;
                forOf?: boolean | undefined;
                globalThis?: boolean | undefined;
                nodePrefixForCoreModules?: boolean | undefined;
                optionalChaining?: boolean | undefined;
                templateLiteral?: boolean | undefined;
              }
            | undefined;
          publicPath?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          filename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          chunkFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          chunkLoading?: string | false | undefined;
          asyncChunks?: boolean | undefined;
          library?:
            | string
            | string[]
            | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
              }
            | {
                type: string;
                name?:
                  | string
                  | string[]
                  | {
                      commonjs?: string | undefined;
                      amd?: string | undefined;
                      root?: string | string[] | undefined;
                    }
                  | undefined;
                amdContainer?: string | undefined;
                auxiliaryComment?:
                  | string
                  | {
                      commonjs?: string | undefined;
                      commonjs2?: string | undefined;
                      amd?: string | undefined;
                      root?: string | undefined;
                    }
                  | undefined;
                export?: string | string[] | undefined;
                umdNamedDefine?: boolean | undefined;
              }
            | undefined;
          path?: string | undefined;
          wasmLoading?: string | false | undefined;
          cssHeadDataCompression?: boolean | undefined;
          auxiliaryComment?:
            | string
            | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
              }
            | undefined;
          umdNamedDefine?: boolean | undefined;
          pathinfo?: boolean | "verbose" | undefined;
          clean?:
            | boolean
            | {
                keep?: string | undefined;
              }
            | undefined;
          crossOriginLoading?:
            | false
            | "anonymous"
            | "use-credentials"
            | undefined;
          cssFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          cssChunkFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          hotUpdateMainFilename?: string | undefined;
          hotUpdateChunkFilename?: string | undefined;
          hotUpdateGlobal?: string | undefined;
          assetModuleFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          uniqueName?: string | undefined;
          chunkLoadingGlobal?: string | undefined;
          enabledLibraryTypes?: string[] | undefined;
          libraryExport?: string | string[] | undefined;
          libraryTarget?: string | undefined;
          strictModuleExceptionHandling?: boolean | undefined;
          strictModuleErrorHandling?: boolean | undefined;
          globalObject?: string | undefined;
          importFunctionName?: string | undefined;
          importMetaName?: string | undefined;
          iife?: boolean | undefined;
          enabledWasmLoadingTypes?: string[] | undefined;
          webassemblyModuleFilename?: string | undefined;
          chunkFormat?: string | false | undefined;
          enabledChunkLoadingTypes?: string[] | undefined;
          trustedTypes?:
            | string
            | true
            | {
                policyName?: string | undefined;
                onPolicyCreationFailure?: "continue" | "stop" | undefined;
              }
            | undefined;
          sourceMapFilename?: string | undefined;
          hashDigest?: string | undefined;
          hashDigestLength?: number | undefined;
          hashFunction?: "md4" | "xxhash64" | undefined;
          hashSalt?: string | undefined;
          workerChunkLoading?: string | false | undefined;
          workerWasmLoading?: string | false | undefined;
          workerPublicPath?: string | undefined;
          scriptType?: false | "module" | "text/javascript" | undefined;
          devtoolNamespace?: string | undefined;
          devtoolModuleFilenameTemplate?:
            | string
            | ((args_0: any) => any)
            | undefined;
          devtoolFallbackModuleFilenameTemplate?:
            | string
            | ((args_0: any) => any)
            | undefined;
          chunkLoadTimeout?: number | undefined;
          charset?: boolean | undefined;
          compareBeforeEmit?: boolean | undefined;
        }
      | undefined;
    externalsType?:
      | "module"
      | "import"
      | "jsonp"
      | "var"
      | "assign"
      | "this"
      | "window"
      | "self"
      | "global"
      | "commonjs"
      | "commonjs2"
      | "commonjs-module"
      | "commonjs-static"
      | "amd"
      | "amd-require"
      | "umd"
      | "umd2"
      | "system"
      | "promise"
      | "module-import"
      | "script"
      | "node-commonjs"
      | "commonjs-import"
      | undefined;
    externalsPresets?:
      | {
          node?: boolean | undefined;
          web?: boolean | undefined;
          nwjs?: boolean | undefined;
          webAsync?: boolean | undefined;
          electron?: boolean | undefined;
          electronMain?: boolean | undefined;
          electronPreload?: boolean | undefined;
          electronRenderer?: boolean | undefined;
        }
      | undefined;
    ignoreWarnings?:
      | (
          | RegExp
          | ((
              args_0: Error,
              args_1: Compilation,
              ...args: unknown[]
            ) => boolean)
        )[]
      | undefined;
    watchOptions?:
      | {
          aggregateTimeout?: number | undefined;
          followSymlinks?: boolean | undefined;
          ignored?: string | RegExp | string[] | undefined;
          poll?: number | boolean | undefined;
          stdin?: boolean | undefined;
        }
      | undefined;
    watch?: boolean | undefined;
    optimization?:
      | {
          splitChunks?:
            | false
            | {
                name?:
                  | string
                  | false
                  | ((
                      args_0: Module,
                      args_1: Chunk[],
                      args_2: string,
                      ...args: unknown[]
                    ) => string | undefined)
                  | undefined;
                filename?:
                  | string
                  | ((
                      args_0: PathData,
                      args_1: AssetInfo | undefined,
                      ...args: unknown[]
                    ) => string)
                  | undefined;
                chunks?:
                  | RegExp
                  | "initial"
                  | "async"
                  | "all"
                  | ((args_0: Chunk, ...args: unknown[]) => boolean)
                  | undefined;
                defaultSizeTypes?: string[] | undefined;
                cacheGroups?:
                  | Record<
                      string,
                      | false
                      | {
                          name?:
                            | string
                            | false
                            | ((
                                args_0: Module,
                                args_1: Chunk[],
                                args_2: string,
                                ...args: unknown[]
                              ) => string | undefined)
                            | undefined;
                          priority?: number | undefined;
                          layer?:
                            | string
                            | RegExp
                            | ((args_0: string | undefined) => boolean)
                            | undefined;
                          filename?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          type?: string | RegExp | undefined;
                          chunks?:
                            | RegExp
                            | "initial"
                            | "async"
                            | "all"
                            | ((args_0: Chunk, ...args: unknown[]) => boolean)
                            | undefined;
                          test?:
                            | string
                            | RegExp
                            | ((
                                args_0: Module,
                                args_1: {
                                  moduleGraph: ModuleGraph;
                                  chunkGraph: ChunkGraph;
                                },
                                ...args: unknown[]
                              ) => boolean)
                            | undefined;
                          defaultSizeTypes?: string[] | undefined;
                          minSize?: number | Record<string, number> | undefined;
                          maxSize?: number | Record<string, number> | undefined;
                          maxAsyncSize?:
                            | number
                            | Record<string, number>
                            | undefined;
                          maxInitialSize?:
                            | number
                            | Record<string, number>
                            | undefined;
                          minChunks?: number | undefined;
                          usedExports?: boolean | undefined;
                          maxAsyncRequests?: number | undefined;
                          maxInitialRequests?: number | undefined;
                          automaticNameDelimiter?: string | undefined;
                          enforce?: boolean | undefined;
                          reuseExistingChunk?: boolean | undefined;
                          idHint?: string | undefined;
                        }
                    >
                  | undefined;
                fallbackCacheGroup?:
                  | {
                      chunks?:
                        | RegExp
                        | "initial"
                        | "async"
                        | "all"
                        | ((args_0: Chunk, ...args: unknown[]) => boolean)
                        | undefined;
                      minSize?: number | undefined;
                      maxSize?: number | undefined;
                      maxAsyncSize?: number | undefined;
                      maxInitialSize?: number | undefined;
                      automaticNameDelimiter?: string | undefined;
                    }
                  | undefined;
                minSize?: number | Record<string, number> | undefined;
                maxSize?: number | Record<string, number> | undefined;
                maxAsyncSize?: number | Record<string, number> | undefined;
                maxInitialSize?: number | Record<string, number> | undefined;
                hidePathInfo?: boolean | undefined;
                minChunks?: number | undefined;
                usedExports?: boolean | undefined;
                maxAsyncRequests?: number | undefined;
                maxInitialRequests?: number | undefined;
                automaticNameDelimiter?: string | undefined;
              }
            | undefined;
          usedExports?: boolean | "global" | undefined;
          providedExports?: boolean | undefined;
          minimize?: boolean | undefined;
          minimizer?:
            | (
                | false
                | ""
                | 0
                | t.RspackPluginInstance
                | "..."
                | t.WebpackPluginInstance
                | t.RspackPluginFunction
                | t.WebpackPluginFunction
                | null
                | undefined
              )[]
            | undefined;
          sideEffects?: boolean | "flag" | undefined;
          moduleIds?: "named" | "natural" | "deterministic" | undefined;
          chunkIds?:
            | "named"
            | "natural"
            | "deterministic"
            | "size"
            | "total-size"
            | undefined;
          mergeDuplicateChunks?: boolean | undefined;
          runtimeChunk?:
            | boolean
            | "single"
            | "multiple"
            | {
                name?:
                  | string
                  | ((
                      args_0: {
                        name: string;
                      },
                      ...args: unknown[]
                    ) => string)
                  | undefined;
              }
            | undefined;
          removeAvailableModules?: boolean | undefined;
          removeEmptyChunks?: boolean | undefined;
          realContentHash?: boolean | undefined;
          concatenateModules?: boolean | undefined;
          innerGraph?: boolean | undefined;
          mangleExports?: boolean | "deterministic" | "size" | undefined;
          nodeEnv?: string | false | undefined;
          emitOnErrors?: boolean | undefined;
          avoidEntryIife?: boolean | undefined;
        }
      | undefined;
    resolveLoader?: t.ResolveOptions | undefined;
    plugins?:
      | (
          | false
          | ""
          | 0
          | t.RspackPluginInstance
          | t.WebpackPluginInstance
          | t.RspackPluginFunction
          | t.WebpackPluginFunction
          | null
          | undefined
        )[]
      | undefined;
    devServer?: t.DevServer | undefined;
    bail?: boolean | undefined;
  },
  {
    name?: string | undefined;
    resolve?: t.ResolveOptions | undefined;
    module?:
      | {
          parser?:
            | {
                css?:
                  | {
                      namedExports?: boolean | undefined;
                    }
                  | undefined;
                "css/auto"?:
                  | {
                      namedExports?: boolean | undefined;
                    }
                  | undefined;
                "css/module"?:
                  | {
                      namedExports?: boolean | undefined;
                    }
                  | undefined;
                javascript?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
                asset?:
                  | {
                      dataUrlCondition?:
                        | {
                            maxSize?: number | undefined;
                          }
                        | undefined;
                    }
                  | undefined;
                "javascript/auto"?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
                "javascript/dynamic"?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
                "javascript/esm"?:
                  | {
                      url?: boolean | "relative" | undefined;
                      dynamicImportMode?:
                        | "eager"
                        | "lazy"
                        | "weak"
                        | "lazy-once"
                        | undefined;
                      dynamicImportPreload?: number | boolean | undefined;
                      dynamicImportPrefetch?: number | boolean | undefined;
                      dynamicImportFetchPriority?:
                        | "auto"
                        | "low"
                        | "high"
                        | undefined;
                      importMeta?: boolean | undefined;
                      exprContextCritical?: boolean | undefined;
                      wrappedContextCritical?: boolean | undefined;
                      wrappedContextRegExp?: RegExp | undefined;
                      exportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      importExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      reexportExportsPresence?:
                        | false
                        | "error"
                        | "warn"
                        | "auto"
                        | undefined;
                      strictExportPresence?: boolean | undefined;
                      worker?: boolean | string[] | undefined;
                      overrideStrict?: "strict" | "non-strict" | undefined;
                      requireAsExpression?: boolean | undefined;
                      requireDynamic?: boolean | undefined;
                      requireResolve?: boolean | undefined;
                      importDynamic?: boolean | undefined;
                    }
                  | undefined;
              }
            | Record<string, Record<string, any>>
            | undefined;
          generator?:
            | Record<string, Record<string, any>>
            | {
                css?:
                  | {
                      exportsOnly?: boolean | undefined;
                      esModule?: boolean | undefined;
                    }
                  | undefined;
                "css/auto"?:
                  | {
                      exportsOnly?: boolean | undefined;
                      esModule?: boolean | undefined;
                      exportsConvention?:
                        | "as-is"
                        | "camel-case"
                        | "camel-case-only"
                        | "dashes"
                        | "dashes-only"
                        | undefined;
                      localIdentName?: string | undefined;
                    }
                  | undefined;
                "css/module"?:
                  | {
                      exportsOnly?: boolean | undefined;
                      esModule?: boolean | undefined;
                      exportsConvention?:
                        | "as-is"
                        | "camel-case"
                        | "camel-case-only"
                        | "dashes"
                        | "dashes-only"
                        | undefined;
                      localIdentName?: string | undefined;
                    }
                  | undefined;
                asset?:
                  | {
                      emit?: boolean | undefined;
                      publicPath?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      filename?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      dataUrl?:
                        | {
                            mimetype?: string | undefined;
                            encoding?: false | "base64" | undefined;
                          }
                        | ((
                            args_0: Buffer<ArrayBufferLike>,
                            args_1: {
                              module: Module;
                              filename: string;
                            },
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                    }
                  | undefined;
                json?:
                  | {
                      JSONParse?: boolean | undefined;
                    }
                  | undefined;
                "asset/inline"?:
                  | {
                      dataUrl?:
                        | {
                            mimetype?: string | undefined;
                            encoding?: false | "base64" | undefined;
                          }
                        | ((
                            args_0: Buffer<ArrayBufferLike>,
                            args_1: {
                              module: Module;
                              filename: string;
                            },
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                    }
                  | undefined;
                "asset/resource"?:
                  | {
                      emit?: boolean | undefined;
                      publicPath?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      filename?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                    }
                  | undefined;
              }
            | undefined;
          rules?:
            | (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[]
            | undefined;
          defaultRules?:
            | (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[]
            | undefined;
          noParse?:
            | string
            | RegExp
            | ((args_0: string, ...args: unknown[]) => boolean)
            | (
                | string
                | RegExp
                | ((args_0: string, ...args: unknown[]) => boolean)
              )[]
            | undefined;
        }
      | undefined;
    profile?: boolean | undefined;
    cache?: boolean | undefined;
    context?: string | undefined;
    amd?: false | Record<string, any> | undefined;
    externals?:
      | string
      | RegExp
      | Record<
          string,
          | string
          | boolean
          | string[]
          | t.ExternalItemUmdValue
          | t.ExternalItemObjectValue
        >
      | ((
          args_0: t.ExternalItemFunctionData,
          args_1: (
            args_0: Error | undefined,
            args_1:
              | string
              | boolean
              | string[]
              | t.ExternalItemUmdValue
              | t.ExternalItemObjectValue
              | undefined,
            args_2:
              | "module"
              | "import"
              | "jsonp"
              | "var"
              | "assign"
              | "this"
              | "window"
              | "self"
              | "global"
              | "commonjs"
              | "commonjs2"
              | "commonjs-module"
              | "commonjs-static"
              | "amd"
              | "amd-require"
              | "umd"
              | "umd2"
              | "system"
              | "promise"
              | "module-import"
              | "script"
              | "node-commonjs"
              | "commonjs-import"
              | undefined,
            ...args: unknown[]
          ) => void,
          ...args: unknown[]
        ) => unknown)
      | ((
          args_0: t.ExternalItemFunctionData,
          ...args: unknown[]
        ) => Promise<
          | string
          | boolean
          | string[]
          | t.ExternalItemUmdValue
          | t.ExternalItemObjectValue
        >)
      | ((
          args_0: t.ExternalItemFunctionData,
          ...args: unknown[]
        ) =>
          | string
          | boolean
          | string[]
          | t.ExternalItemUmdValue
          | t.ExternalItemObjectValue)
      | (
          | string
          | RegExp
          | Record<
              string,
              | string
              | boolean
              | string[]
              | t.ExternalItemUmdValue
              | t.ExternalItemObjectValue
            >
          | ((
              args_0: t.ExternalItemFunctionData,
              args_1: (
                args_0: Error | undefined,
                args_1:
                  | string
                  | boolean
                  | string[]
                  | t.ExternalItemUmdValue
                  | t.ExternalItemObjectValue
                  | undefined,
                args_2:
                  | "module"
                  | "import"
                  | "jsonp"
                  | "var"
                  | "assign"
                  | "this"
                  | "window"
                  | "self"
                  | "global"
                  | "commonjs"
                  | "commonjs2"
                  | "commonjs-module"
                  | "commonjs-static"
                  | "amd"
                  | "amd-require"
                  | "umd"
                  | "umd2"
                  | "system"
                  | "promise"
                  | "module-import"
                  | "script"
                  | "node-commonjs"
                  | "commonjs-import"
                  | undefined,
                ...args: unknown[]
              ) => void,
              ...args: unknown[]
            ) => unknown)
          | ((
              args_0: t.ExternalItemFunctionData,
              ...args: unknown[]
            ) => Promise<
              | string
              | boolean
              | string[]
              | t.ExternalItemUmdValue
              | t.ExternalItemObjectValue
            >)
          | ((
              args_0: t.ExternalItemFunctionData,
              ...args: unknown[]
            ) =>
              | string
              | boolean
              | string[]
              | t.ExternalItemUmdValue
              | t.ExternalItemObjectValue)
        )[]
      | undefined;
    target?:
      | false
      | "async-node"
      | "node"
      | "web"
      | `node${number}`
      | `async-node${number}`
      | `node${number}.${number}`
      | `async-node${number}.${number}`
      | `electron${number}-main`
      | `electron${number}.${number}-main`
      | `electron${number}-renderer`
      | `electron${number}.${number}-renderer`
      | `electron${number}-preload`
      | `electron${number}.${number}-preload`
      | `nwjs${number}`
      | `nwjs${number}.${number}`
      | `node-webkit${number}`
      | `node-webkit${number}.${number}`
      | `browserslist:${string}`
      | "webworker"
      | "es3"
      | "es5"
      | "es2015"
      | "es2016"
      | "es2017"
      | "es2018"
      | "es2019"
      | "es2020"
      | "es2021"
      | "es2022"
      | "electron-main"
      | "electron-renderer"
      | "electron-preload"
      | "nwjs"
      | "node-webkit"
      | "browserslist"
      | (
          | "async-node"
          | "node"
          | "web"
          | `node${number}`
          | `async-node${number}`
          | `node${number}.${number}`
          | `async-node${number}.${number}`
          | `electron${number}-main`
          | `electron${number}.${number}-main`
          | `electron${number}-renderer`
          | `electron${number}.${number}-renderer`
          | `electron${number}-preload`
          | `electron${number}.${number}-preload`
          | `nwjs${number}`
          | `nwjs${number}.${number}`
          | `node-webkit${number}`
          | `node-webkit${number}.${number}`
          | `browserslist:${string}`
          | "webworker"
          | "es3"
          | "es5"
          | "es2015"
          | "es2016"
          | "es2017"
          | "es2018"
          | "es2019"
          | "es2020"
          | "es2021"
          | "es2022"
          | "electron-main"
          | "electron-renderer"
          | "electron-preload"
          | "nwjs"
          | "node-webkit"
          | "browserslist"
        )[]
      | undefined;
    node?:
      | false
      | {
          global?: boolean | "warn" | undefined;
          __dirname?:
            | boolean
            | "warn-mock"
            | "mock"
            | "eval-only"
            | "node-module"
            | undefined;
          __filename?:
            | boolean
            | "warn-mock"
            | "mock"
            | "eval-only"
            | "node-module"
            | undefined;
        }
      | undefined;
    performance?:
      | false
      | {
          assetFilter?:
            | ((args_0: string, ...args: unknown[]) => boolean)
            | undefined;
          hints?: false | "error" | "warning" | undefined;
          maxAssetSize?: number | undefined;
          maxEntrypointSize?: number | undefined;
        }
      | undefined;
    mode?: "none" | "development" | "production" | undefined;
    experiments?:
      | {
          css?: boolean | undefined;
          cache?:
            | boolean
            | {
                type: "memory";
              }
            | {
                type: "persistent";
                version?: string | undefined;
                buildDependencies?: string[] | undefined;
                snapshot?:
                  | {
                      immutablePaths?: (string | RegExp)[] | undefined;
                      unmanagedPaths?: (string | RegExp)[] | undefined;
                      managedPaths?: (string | RegExp)[] | undefined;
                    }
                  | undefined;
                storage?:
                  | {
                      type: "filesystem";
                      directory?: string | undefined;
                    }
                  | undefined;
              }
            | undefined;
          lazyCompilation?:
            | boolean
            | {
                entries?: boolean | undefined;
                test?:
                  | RegExp
                  | ((args_0: Module, ...args: unknown[]) => boolean)
                  | undefined;
                imports?: boolean | undefined;
                client?: string | undefined;
                serverUrl?: string | undefined;
              }
            | undefined;
          asyncWebAssembly?: boolean | undefined;
          outputModule?: boolean | undefined;
          topLevelAwait?: boolean | undefined;
          layers?: boolean | undefined;
          incremental?:
            | boolean
            | {
                make?: boolean | undefined;
                providedExports?: boolean | undefined;
                sideEffects?: boolean | undefined;
                moduleIds?: boolean | undefined;
                chunkIds?: boolean | undefined;
                inferAsyncModules?: boolean | undefined;
                dependenciesDiagnostics?: boolean | undefined;
                buildChunkGraph?: boolean | undefined;
                modulesHashes?: boolean | undefined;
                modulesCodegen?: boolean | undefined;
                modulesRuntimeRequirements?: boolean | undefined;
                chunksRuntimeRequirements?: boolean | undefined;
                chunksHashes?: boolean | undefined;
                chunksRender?: boolean | undefined;
                emitAssets?: boolean | undefined;
              }
            | undefined;
          parallelCodeSplitting?: boolean | undefined;
          futureDefaults?: boolean | undefined;
          rspackFuture?:
            | {
                bundlerInfo?:
                  | {
                      force?: boolean | ("version" | "uniqueId")[] | undefined;
                      version?: string | undefined;
                      bundler?: string | undefined;
                    }
                  | undefined;
              }
            | undefined;
          buildHttp?:
            | {
                allowedUris: (string | RegExp)[];
                httpClient?:
                  | ((
                      args_0: string,
                      args_1: Record<string, string>,
                      ...args: unknown[]
                    ) => Promise<{
                      status: number;
                      body: Buffer<ArrayBufferLike>;
                      headers: Record<string, string>;
                    }>)
                  | undefined;
                lockfileLocation?: string | undefined;
                cacheLocation?: string | false | undefined;
                upgrade?: boolean | undefined;
              }
            | undefined;
          parallelLoader?: boolean | undefined;
        }
      | undefined;
    devtool?:
      | false
      | "eval"
      | "cheap-source-map"
      | "cheap-module-source-map"
      | "source-map"
      | "inline-cheap-source-map"
      | "inline-cheap-module-source-map"
      | "inline-source-map"
      | "inline-nosources-cheap-source-map"
      | "inline-nosources-cheap-module-source-map"
      | "inline-nosources-source-map"
      | "nosources-cheap-source-map"
      | "nosources-cheap-module-source-map"
      | "nosources-source-map"
      | "hidden-nosources-cheap-source-map"
      | "hidden-nosources-cheap-module-source-map"
      | "hidden-nosources-source-map"
      | "hidden-cheap-source-map"
      | "hidden-cheap-module-source-map"
      | "hidden-source-map"
      | "eval-cheap-source-map"
      | "eval-cheap-module-source-map"
      | "eval-source-map"
      | "eval-nosources-cheap-source-map"
      | "eval-nosources-cheap-module-source-map"
      | "eval-nosources-source-map"
      | undefined;
    stats?:
      | boolean
      | "verbose"
      | "none"
      | "normal"
      | "errors-only"
      | "errors-warnings"
      | "minimal"
      | "detailed"
      | "summary"
      | {
          ids?: boolean | undefined;
          runtime?: boolean | undefined;
          hash?: boolean | undefined;
          modules?: boolean | undefined;
          publicPath?: boolean | undefined;
          chunks?: boolean | undefined;
          source?: boolean | undefined;
          all?: boolean | undefined;
          usedExports?: boolean | undefined;
          assets?: boolean | undefined;
          version?: boolean | undefined;
          preset?:
            | boolean
            | "verbose"
            | "none"
            | "normal"
            | "errors-only"
            | "errors-warnings"
            | "minimal"
            | "detailed"
            | "summary"
            | undefined;
          entrypoints?: boolean | "auto" | undefined;
          chunkGroups?: boolean | undefined;
          warnings?: boolean | undefined;
          warningsCount?: boolean | undefined;
          errors?: boolean | undefined;
          errorsCount?: boolean | undefined;
          colors?: boolean | undefined;
          reasons?: boolean | undefined;
          outputPath?: boolean | undefined;
          chunkModules?: boolean | undefined;
          chunkRelations?: boolean | undefined;
          timings?: boolean | undefined;
          builtAt?: boolean | undefined;
          moduleAssets?: boolean | undefined;
          nestedModules?: boolean | undefined;
          logging?:
            | boolean
            | "error"
            | "warn"
            | "info"
            | "log"
            | "verbose"
            | "none"
            | undefined;
          loggingDebug?:
            | string
            | boolean
            | RegExp
            | ((args_0: string, ...args: unknown[]) => boolean)
            | (
                | string
                | RegExp
                | ((args_0: string, ...args: unknown[]) => boolean)
              )[]
            | undefined;
          loggingTrace?: boolean | undefined;
          runtimeModules?: boolean | undefined;
          children?: boolean | undefined;
          providedExports?: boolean | undefined;
          optimizationBailout?: boolean | undefined;
          groupModulesByType?: boolean | undefined;
          groupModulesByCacheStatus?: boolean | undefined;
          groupModulesByLayer?: boolean | undefined;
          groupModulesByAttributes?: boolean | undefined;
          groupModulesByPath?: boolean | undefined;
          groupModulesByExtension?: boolean | undefined;
          modulesSpace?: number | undefined;
          chunkModulesSpace?: number | undefined;
          nestedModulesSpace?: number | undefined;
          relatedAssets?: boolean | undefined;
          groupAssetsByEmitStatus?: boolean | undefined;
          groupAssetsByInfo?: boolean | undefined;
          groupAssetsByPath?: boolean | undefined;
          groupAssetsByExtension?: boolean | undefined;
          groupAssetsByChunk?: boolean | undefined;
          assetsSpace?: number | undefined;
          orphanModules?: boolean | undefined;
          excludeModules?:
            | string
            | boolean
            | RegExp
            | ((args_0: string, args_1: any, args_2: any) => boolean)
            | (
                | string
                | RegExp
                | ((args_0: string, args_1: any, args_2: any) => boolean)
              )[]
            | undefined;
          excludeAssets?:
            | string
            | RegExp
            | ((args_0: string, args_1: any) => boolean)
            | (string | RegExp | ((args_0: string, args_1: any) => boolean))[]
            | undefined;
          modulesSort?: string | undefined;
          chunkModulesSort?: string | undefined;
          nestedModulesSort?: string | undefined;
          chunksSort?: string | undefined;
          assetsSort?: string | undefined;
          performance?: boolean | undefined;
          env?: boolean | undefined;
          chunkGroupAuxiliary?: boolean | undefined;
          chunkGroupChildren?: boolean | undefined;
          chunkGroupMaxAssets?: number | undefined;
          dependentModules?: boolean | undefined;
          chunkOrigins?: boolean | undefined;
          depth?: boolean | undefined;
          reasonsSpace?: number | undefined;
          groupReasonsByOrigin?: boolean | undefined;
          errorDetails?: boolean | undefined;
          errorStack?: boolean | undefined;
          moduleTrace?: boolean | undefined;
          cachedModules?: boolean | undefined;
          cachedAssets?: boolean | undefined;
          cached?: boolean | undefined;
          errorsSpace?: number | undefined;
          warningsSpace?: number | undefined;
        }
      | undefined;
    dependencies?: string[] | undefined;
    entry?:
      | string
      | string[]
      | Record<
          string,
          | string
          | string[]
          | {
              import: string | string[];
              runtime?: string | false | undefined;
              publicPath?:
                | string
                | ((
                    args_0: PathData,
                    args_1: AssetInfo | undefined,
                    ...args: unknown[]
                  ) => string)
                | undefined;
              layer?: string | null | undefined;
              baseUri?: string | undefined;
              filename?:
                | string
                | ((
                    args_0: PathData,
                    args_1: AssetInfo | undefined,
                    ...args: unknown[]
                  ) => string)
                | undefined;
              chunkLoading?: string | false | undefined;
              asyncChunks?: boolean | undefined;
              library?:
                | {
                    type: string;
                    name?:
                      | string
                      | string[]
                      | {
                          commonjs?: string | undefined;
                          amd?: string | undefined;
                          root?: string | string[] | undefined;
                        }
                      | undefined;
                    amdContainer?: string | undefined;
                    auxiliaryComment?:
                      | string
                      | {
                          commonjs?: string | undefined;
                          commonjs2?: string | undefined;
                          amd?: string | undefined;
                          root?: string | undefined;
                        }
                      | undefined;
                    export?: string | string[] | undefined;
                    umdNamedDefine?: boolean | undefined;
                  }
                | undefined;
              dependOn?: string | string[] | undefined;
              wasmLoading?: string | false | undefined;
            }
        >
      | ((...args: unknown[]) =>
          | string
          | string[]
          | Record<
              string,
              | string
              | string[]
              | {
                  import: string | string[];
                  runtime?: string | false | undefined;
                  publicPath?:
                    | string
                    | ((
                        args_0: PathData,
                        args_1: AssetInfo | undefined,
                        ...args: unknown[]
                      ) => string)
                    | undefined;
                  layer?: string | null | undefined;
                  baseUri?: string | undefined;
                  filename?:
                    | string
                    | ((
                        args_0: PathData,
                        args_1: AssetInfo | undefined,
                        ...args: unknown[]
                      ) => string)
                    | undefined;
                  chunkLoading?: string | false | undefined;
                  asyncChunks?: boolean | undefined;
                  library?:
                    | {
                        type: string;
                        name?:
                          | string
                          | string[]
                          | {
                              commonjs?: string | undefined;
                              amd?: string | undefined;
                              root?: string | string[] | undefined;
                            }
                          | undefined;
                        amdContainer?: string | undefined;
                        auxiliaryComment?:
                          | string
                          | {
                              commonjs?: string | undefined;
                              commonjs2?: string | undefined;
                              amd?: string | undefined;
                              root?: string | undefined;
                            }
                          | undefined;
                        export?: string | string[] | undefined;
                        umdNamedDefine?: boolean | undefined;
                      }
                    | undefined;
                  dependOn?: string | string[] | undefined;
                  wasmLoading?: string | false | undefined;
                }
            >
          | Promise<
              | string
              | string[]
              | Record<
                  string,
                  | string
                  | string[]
                  | {
                      import: string | string[];
                      runtime?: string | false | undefined;
                      publicPath?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      layer?: string | null | undefined;
                      baseUri?: string | undefined;
                      filename?:
                        | string
                        | ((
                            args_0: PathData,
                            args_1: AssetInfo | undefined,
                            ...args: unknown[]
                          ) => string)
                        | undefined;
                      chunkLoading?: string | false | undefined;
                      asyncChunks?: boolean | undefined;
                      library?:
                        | {
                            type: string;
                            name?:
                              | string
                              | string[]
                              | {
                                  commonjs?: string | undefined;
                                  amd?: string | undefined;
                                  root?: string | string[] | undefined;
                                }
                              | undefined;
                            amdContainer?: string | undefined;
                            auxiliaryComment?:
                              | string
                              | {
                                  commonjs?: string | undefined;
                                  commonjs2?: string | undefined;
                                  amd?: string | undefined;
                                  root?: string | undefined;
                                }
                              | undefined;
                            export?: string | string[] | undefined;
                            umdNamedDefine?: boolean | undefined;
                          }
                        | undefined;
                      dependOn?: string | string[] | undefined;
                      wasmLoading?: string | false | undefined;
                    }
                >
            >)
      | undefined;
    infrastructureLogging?:
      | {
          debug?:
            | string
            | boolean
            | RegExp
            | ((args_0: string, ...args: unknown[]) => boolean)
            | (
                | string
                | RegExp
                | ((args_0: string, ...args: unknown[]) => boolean)
              )[]
            | undefined;
          colors?: boolean | undefined;
          level?:
            | "error"
            | "warn"
            | "info"
            | "log"
            | "verbose"
            | "none"
            | undefined;
          console?: Console | undefined;
          appendOnly?: boolean | undefined;
          stream?: NodeJS.WritableStream | undefined;
        }
      | undefined;
    loader?: Record<string, any> | undefined;
    snapshot?: {} | undefined;
    extends?: string | string[] | undefined;
    output?:
      | {
          module?: boolean | undefined;
          environment?:
            | {
                module?: boolean | undefined;
                arrowFunction?: boolean | undefined;
                asyncFunction?: boolean | undefined;
                bigIntLiteral?: boolean | undefined;
                const?: boolean | undefined;
                destructuring?: boolean | undefined;
                document?: boolean | undefined;
                dynamicImport?: boolean | undefined;
                dynamicImportInWorker?: boolean | undefined;
                forOf?: boolean | undefined;
                globalThis?: boolean | undefined;
                nodePrefixForCoreModules?: boolean | undefined;
                optionalChaining?: boolean | undefined;
                templateLiteral?: boolean | undefined;
              }
            | undefined;
          publicPath?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          filename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          chunkFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          chunkLoading?: string | false | undefined;
          asyncChunks?: boolean | undefined;
          library?:
            | string
            | string[]
            | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
              }
            | {
                type: string;
                name?:
                  | string
                  | string[]
                  | {
                      commonjs?: string | undefined;
                      amd?: string | undefined;
                      root?: string | string[] | undefined;
                    }
                  | undefined;
                amdContainer?: string | undefined;
                auxiliaryComment?:
                  | string
                  | {
                      commonjs?: string | undefined;
                      commonjs2?: string | undefined;
                      amd?: string | undefined;
                      root?: string | undefined;
                    }
                  | undefined;
                export?: string | string[] | undefined;
                umdNamedDefine?: boolean | undefined;
              }
            | undefined;
          path?: string | undefined;
          wasmLoading?: string | false | undefined;
          cssHeadDataCompression?: boolean | undefined;
          auxiliaryComment?:
            | string
            | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
              }
            | undefined;
          umdNamedDefine?: boolean | undefined;
          pathinfo?: boolean | "verbose" | undefined;
          clean?:
            | boolean
            | {
                keep?: string | undefined;
              }
            | undefined;
          crossOriginLoading?:
            | false
            | "anonymous"
            | "use-credentials"
            | undefined;
          cssFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          cssChunkFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          hotUpdateMainFilename?: string | undefined;
          hotUpdateChunkFilename?: string | undefined;
          hotUpdateGlobal?: string | undefined;
          assetModuleFilename?:
            | string
            | ((
                args_0: PathData,
                args_1: AssetInfo | undefined,
                ...args: unknown[]
              ) => string)
            | undefined;
          uniqueName?: string | undefined;
          chunkLoadingGlobal?: string | undefined;
          enabledLibraryTypes?: string[] | undefined;
          libraryExport?: string | string[] | undefined;
          libraryTarget?: string | undefined;
          strictModuleExceptionHandling?: boolean | undefined;
          strictModuleErrorHandling?: boolean | undefined;
          globalObject?: string | undefined;
          importFunctionName?: string | undefined;
          importMetaName?: string | undefined;
          iife?: boolean | undefined;
          enabledWasmLoadingTypes?: string[] | undefined;
          webassemblyModuleFilename?: string | undefined;
          chunkFormat?: string | false | undefined;
          enabledChunkLoadingTypes?: string[] | undefined;
          trustedTypes?:
            | string
            | true
            | {
                policyName?: string | undefined;
                onPolicyCreationFailure?: "continue" | "stop" | undefined;
              }
            | undefined;
          sourceMapFilename?: string | undefined;
          hashDigest?: string | undefined;
          hashDigestLength?: number | undefined;
          hashFunction?: "md4" | "xxhash64" | undefined;
          hashSalt?: string | undefined;
          workerChunkLoading?: string | false | undefined;
          workerWasmLoading?: string | false | undefined;
          workerPublicPath?: string | undefined;
          scriptType?: false | "module" | "text/javascript" | undefined;
          devtoolNamespace?: string | undefined;
          devtoolModuleFilenameTemplate?:
            | string
            | ((args_0: any) => any)
            | undefined;
          devtoolFallbackModuleFilenameTemplate?:
            | string
            | ((args_0: any) => any)
            | undefined;
          chunkLoadTimeout?: number | undefined;
          charset?: boolean | undefined;
          compareBeforeEmit?: boolean | undefined;
        }
      | undefined;
    externalsType?:
      | "module"
      | "import"
      | "jsonp"
      | "var"
      | "assign"
      | "this"
      | "window"
      | "self"
      | "global"
      | "commonjs"
      | "commonjs2"
      | "commonjs-module"
      | "commonjs-static"
      | "amd"
      | "amd-require"
      | "umd"
      | "umd2"
      | "system"
      | "promise"
      | "module-import"
      | "script"
      | "node-commonjs"
      | "commonjs-import"
      | undefined;
    externalsPresets?:
      | {
          node?: boolean | undefined;
          web?: boolean | undefined;
          nwjs?: boolean | undefined;
          webAsync?: boolean | undefined;
          electron?: boolean | undefined;
          electronMain?: boolean | undefined;
          electronPreload?: boolean | undefined;
          electronRenderer?: boolean | undefined;
        }
      | undefined;
    ignoreWarnings?:
      | (
          | RegExp
          | ((
              args_0: Error,
              args_1: Compilation,
              ...args: unknown[]
            ) => boolean)
        )[]
      | undefined;
    watchOptions?:
      | {
          aggregateTimeout?: number | undefined;
          followSymlinks?: boolean | undefined;
          ignored?: string | RegExp | string[] | undefined;
          poll?: number | boolean | undefined;
          stdin?: boolean | undefined;
        }
      | undefined;
    watch?: boolean | undefined;
    optimization?:
      | {
          splitChunks?:
            | false
            | {
                name?:
                  | string
                  | false
                  | ((
                      args_0: Module,
                      args_1: Chunk[],
                      args_2: string,
                      ...args: unknown[]
                    ) => string | undefined)
                  | undefined;
                filename?:
                  | string
                  | ((
                      args_0: PathData,
                      args_1: AssetInfo | undefined,
                      ...args: unknown[]
                    ) => string)
                  | undefined;
                chunks?:
                  | RegExp
                  | "initial"
                  | "async"
                  | "all"
                  | ((args_0: Chunk, ...args: unknown[]) => boolean)
                  | undefined;
                defaultSizeTypes?: string[] | undefined;
                cacheGroups?:
                  | Record<
                      string,
                      | false
                      | {
                          name?:
                            | string
                            | false
                            | ((
                                args_0: Module,
                                args_1: Chunk[],
                                args_2: string,
                                ...args: unknown[]
                              ) => string | undefined)
                            | undefined;
                          priority?: number | undefined;
                          layer?:
                            | string
                            | RegExp
                            | ((args_0: string | undefined) => boolean)
                            | undefined;
                          filename?:
                            | string
                            | ((
                                args_0: PathData,
                                args_1: AssetInfo | undefined,
                                ...args: unknown[]
                              ) => string)
                            | undefined;
                          type?: string | RegExp | undefined;
                          chunks?:
                            | RegExp
                            | "initial"
                            | "async"
                            | "all"
                            | ((args_0: Chunk, ...args: unknown[]) => boolean)
                            | undefined;
                          test?:
                            | string
                            | RegExp
                            | ((
                                args_0: Module,
                                args_1: {
                                  moduleGraph: ModuleGraph;
                                  chunkGraph: ChunkGraph;
                                },
                                ...args: unknown[]
                              ) => boolean)
                            | undefined;
                          defaultSizeTypes?: string[] | undefined;
                          minSize?: number | Record<string, number> | undefined;
                          maxSize?: number | Record<string, number> | undefined;
                          maxAsyncSize?:
                            | number
                            | Record<string, number>
                            | undefined;
                          maxInitialSize?:
                            | number
                            | Record<string, number>
                            | undefined;
                          minChunks?: number | undefined;
                          usedExports?: boolean | undefined;
                          maxAsyncRequests?: number | undefined;
                          maxInitialRequests?: number | undefined;
                          automaticNameDelimiter?: string | undefined;
                          enforce?: boolean | undefined;
                          reuseExistingChunk?: boolean | undefined;
                          idHint?: string | undefined;
                        }
                    >
                  | undefined;
                fallbackCacheGroup?:
                  | {
                      chunks?:
                        | RegExp
                        | "initial"
                        | "async"
                        | "all"
                        | ((args_0: Chunk, ...args: unknown[]) => boolean)
                        | undefined;
                      minSize?: number | undefined;
                      maxSize?: number | undefined;
                      maxAsyncSize?: number | undefined;
                      maxInitialSize?: number | undefined;
                      automaticNameDelimiter?: string | undefined;
                    }
                  | undefined;
                minSize?: number | Record<string, number> | undefined;
                maxSize?: number | Record<string, number> | undefined;
                maxAsyncSize?: number | Record<string, number> | undefined;
                maxInitialSize?: number | Record<string, number> | undefined;
                hidePathInfo?: boolean | undefined;
                minChunks?: number | undefined;
                usedExports?: boolean | undefined;
                maxAsyncRequests?: number | undefined;
                maxInitialRequests?: number | undefined;
                automaticNameDelimiter?: string | undefined;
              }
            | undefined;
          usedExports?: boolean | "global" | undefined;
          providedExports?: boolean | undefined;
          minimize?: boolean | undefined;
          minimizer?:
            | (
                | false
                | ""
                | 0
                | t.RspackPluginInstance
                | "..."
                | t.WebpackPluginInstance
                | t.RspackPluginFunction
                | t.WebpackPluginFunction
                | null
                | undefined
              )[]
            | undefined;
          sideEffects?: boolean | "flag" | undefined;
          moduleIds?: "named" | "natural" | "deterministic" | undefined;
          chunkIds?:
            | "named"
            | "natural"
            | "deterministic"
            | "size"
            | "total-size"
            | undefined;
          mergeDuplicateChunks?: boolean | undefined;
          runtimeChunk?:
            | boolean
            | "single"
            | "multiple"
            | {
                name?:
                  | string
                  | ((
                      args_0: {
                        name: string;
                      },
                      ...args: unknown[]
                    ) => string)
                  | undefined;
              }
            | undefined;
          removeAvailableModules?: boolean | undefined;
          removeEmptyChunks?: boolean | undefined;
          realContentHash?: boolean | undefined;
          concatenateModules?: boolean | undefined;
          innerGraph?: boolean | undefined;
          mangleExports?: boolean | "deterministic" | "size" | undefined;
          nodeEnv?: string | false | undefined;
          emitOnErrors?: boolean | undefined;
          avoidEntryIife?: boolean | undefined;
        }
      | undefined;
    resolveLoader?: t.ResolveOptions | undefined;
    plugins?:
      | (
          | false
          | ""
          | 0
          | t.RspackPluginInstance
          | t.WebpackPluginInstance
          | t.RspackPluginFunction
          | t.WebpackPluginFunction
          | null
          | undefined
        )[]
      | undefined;
    devServer?: t.DevServer | undefined;
    bail?: boolean | undefined;
  }
>;
