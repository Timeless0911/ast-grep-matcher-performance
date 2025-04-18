import type { AssetInfo } from "@rspack/binding";
import z from "../../compiled/zod";
import { Chunk } from "../Chunk";
import { ChunkGraph } from "../ChunkGraph";
import type { Compilation, PathData } from "../Compilation";
import { Module } from "../Module";
import ModuleGraph from "../ModuleGraph";
import type * as t from "./types";
import { ZodRspackCrossChecker } from "./utils";
export declare const externalsType: z.ZodEnum<["var", "module", "assign", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system", "promise", "import", "module-import", "script", "node-commonjs", "commonjs-import"]>;
export declare const rspackOptions: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    dependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    extends: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    entry: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
        import: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        runtime: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodString]>>;
        publicPath: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"auto">, z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>]>>;
        baseUri: z.ZodOptional<z.ZodString>;
        chunkLoading: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodUnion<[z.ZodEnum<["jsonp", "import-scripts", "require", "async-node", "import"]>, z.ZodString]>]>>;
        asyncChunks: z.ZodOptional<z.ZodBoolean>;
        wasmLoading: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodUnion<[z.ZodEnum<["fetch-streaming", "fetch", "async-node"]>, z.ZodString]>]>>;
        filename: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>>;
        library: z.ZodOptional<z.ZodObject<{
            amdContainer: z.ZodOptional<z.ZodString>;
            auxiliaryComment: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                amd: z.ZodOptional<z.ZodString>;
                commonjs: z.ZodOptional<z.ZodString>;
                commonjs2: z.ZodOptional<z.ZodString>;
                root: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            }, {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            }>]>>;
            export: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            name: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
                amd: z.ZodOptional<z.ZodString>;
                commonjs: z.ZodOptional<z.ZodString>;
                root: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            }, "strict", z.ZodTypeAny, {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            }, {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            }>]>>;
            type: z.ZodUnion<[z.ZodEnum<["var", "module", "assign", "assign-properties", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system"]>, z.ZodString]>;
            umdNamedDefine: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        }, {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        }>>;
        dependOn: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        layer: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
    }, "strict", z.ZodTypeAny, {
        import: string | string[];
        runtime?: string | false | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        layer?: string | null | undefined;
        baseUri?: string | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        dependOn?: string | string[] | undefined;
        wasmLoading?: string | false | undefined;
    }, {
        import: string | string[];
        runtime?: string | false | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        layer?: string | null | undefined;
        baseUri?: string | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        dependOn?: string | string[] | undefined;
        wasmLoading?: string | false | undefined;
    }>]>>, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>]>, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnion<[z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
        import: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        runtime: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodString]>>;
        publicPath: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"auto">, z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>]>>;
        baseUri: z.ZodOptional<z.ZodString>;
        chunkLoading: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodUnion<[z.ZodEnum<["jsonp", "import-scripts", "require", "async-node", "import"]>, z.ZodString]>]>>;
        asyncChunks: z.ZodOptional<z.ZodBoolean>;
        wasmLoading: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodUnion<[z.ZodEnum<["fetch-streaming", "fetch", "async-node"]>, z.ZodString]>]>>;
        filename: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>>;
        library: z.ZodOptional<z.ZodObject<{
            amdContainer: z.ZodOptional<z.ZodString>;
            auxiliaryComment: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                amd: z.ZodOptional<z.ZodString>;
                commonjs: z.ZodOptional<z.ZodString>;
                commonjs2: z.ZodOptional<z.ZodString>;
                root: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            }, {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            }>]>>;
            export: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            name: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
                amd: z.ZodOptional<z.ZodString>;
                commonjs: z.ZodOptional<z.ZodString>;
                root: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            }, "strict", z.ZodTypeAny, {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            }, {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            }>]>>;
            type: z.ZodUnion<[z.ZodEnum<["var", "module", "assign", "assign-properties", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system"]>, z.ZodString]>;
            umdNamedDefine: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        }, {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        }>>;
        dependOn: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        layer: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
    }, "strict", z.ZodTypeAny, {
        import: string | string[];
        runtime?: string | false | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        layer?: string | null | undefined;
        baseUri?: string | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        dependOn?: string | string[] | undefined;
        wasmLoading?: string | false | undefined;
    }, {
        import: string | string[];
        runtime?: string | false | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        layer?: string | null | undefined;
        baseUri?: string | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        dependOn?: string | string[] | undefined;
        wasmLoading?: string | false | undefined;
    }>]>>, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>]>, z.ZodPromise<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
        import: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        runtime: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodString]>>;
        publicPath: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"auto">, z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>]>>;
        baseUri: z.ZodOptional<z.ZodString>;
        chunkLoading: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodUnion<[z.ZodEnum<["jsonp", "import-scripts", "require", "async-node", "import"]>, z.ZodString]>]>>;
        asyncChunks: z.ZodOptional<z.ZodBoolean>;
        wasmLoading: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodUnion<[z.ZodEnum<["fetch-streaming", "fetch", "async-node"]>, z.ZodString]>]>>;
        filename: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>>;
        library: z.ZodOptional<z.ZodObject<{
            amdContainer: z.ZodOptional<z.ZodString>;
            auxiliaryComment: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                amd: z.ZodOptional<z.ZodString>;
                commonjs: z.ZodOptional<z.ZodString>;
                commonjs2: z.ZodOptional<z.ZodString>;
                root: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            }, {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            }>]>>;
            export: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            name: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
                amd: z.ZodOptional<z.ZodString>;
                commonjs: z.ZodOptional<z.ZodString>;
                root: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            }, "strict", z.ZodTypeAny, {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            }, {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            }>]>>;
            type: z.ZodUnion<[z.ZodEnum<["var", "module", "assign", "assign-properties", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system"]>, z.ZodString]>;
            umdNamedDefine: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        }, {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        }>>;
        dependOn: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        layer: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
    }, "strict", z.ZodTypeAny, {
        import: string | string[];
        runtime?: string | false | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        layer?: string | null | undefined;
        baseUri?: string | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        dependOn?: string | string[] | undefined;
        wasmLoading?: string | false | undefined;
    }, {
        import: string | string[];
        runtime?: string | false | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        layer?: string | null | undefined;
        baseUri?: string | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        dependOn?: string | string[] | undefined;
        wasmLoading?: string | false | undefined;
    }>]>>, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>]>>]>>]>>;
    output: z.ZodOptional<z.ZodObject<{
        path: z.ZodOptional<z.ZodString>;
        pathinfo: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"verbose">]>>;
        clean: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodObject<{
            keep: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            keep?: string | undefined;
        }, {
            keep?: string | undefined;
        }>]>>;
        publicPath: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"auto">, z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>]>>;
        filename: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>>;
        chunkFilename: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>>;
        crossOriginLoading: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodEnum<["anonymous", "use-credentials"]>]>>;
        cssFilename: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>>;
        cssHeadDataCompression: z.ZodOptional<z.ZodBoolean>;
        cssChunkFilename: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>>;
        hotUpdateMainFilename: z.ZodOptional<z.ZodString>;
        hotUpdateChunkFilename: z.ZodOptional<z.ZodString>;
        hotUpdateGlobal: z.ZodOptional<z.ZodString>;
        assetModuleFilename: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>>;
        uniqueName: z.ZodOptional<z.ZodString>;
        chunkLoadingGlobal: z.ZodOptional<z.ZodString>;
        enabledLibraryTypes: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodEnum<["var", "module", "assign", "assign-properties", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system"]>, z.ZodString]>, "many">>;
        library: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
            amd: z.ZodOptional<z.ZodString>;
            commonjs: z.ZodOptional<z.ZodString>;
            root: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        }, "strict", z.ZodTypeAny, {
            commonjs?: string | undefined;
            amd?: string | undefined;
            root?: string | string[] | undefined;
        }, {
            commonjs?: string | undefined;
            amd?: string | undefined;
            root?: string | string[] | undefined;
        }>]>, z.ZodObject<{
            amdContainer: z.ZodOptional<z.ZodString>;
            auxiliaryComment: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                amd: z.ZodOptional<z.ZodString>;
                commonjs: z.ZodOptional<z.ZodString>;
                commonjs2: z.ZodOptional<z.ZodString>;
                root: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            }, {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            }>]>>;
            export: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            name: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
                amd: z.ZodOptional<z.ZodString>;
                commonjs: z.ZodOptional<z.ZodString>;
                root: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            }, "strict", z.ZodTypeAny, {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            }, {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            }>]>>;
            type: z.ZodUnion<[z.ZodEnum<["var", "module", "assign", "assign-properties", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system"]>, z.ZodString]>;
            umdNamedDefine: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        }, {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        }>]>>>;
        libraryExport: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        libraryTarget: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["var", "module", "assign", "assign-properties", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system"]>, z.ZodString]>>;
        umdNamedDefine: z.ZodOptional<z.ZodBoolean>;
        auxiliaryComment: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
            amd: z.ZodOptional<z.ZodString>;
            commonjs: z.ZodOptional<z.ZodString>;
            commonjs2: z.ZodOptional<z.ZodString>;
            root: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            commonjs?: string | undefined;
            commonjs2?: string | undefined;
            amd?: string | undefined;
            root?: string | undefined;
        }, {
            commonjs?: string | undefined;
            commonjs2?: string | undefined;
            amd?: string | undefined;
            root?: string | undefined;
        }>]>>;
        module: z.ZodOptional<z.ZodBoolean>;
        strictModuleExceptionHandling: z.ZodOptional<z.ZodBoolean>;
        strictModuleErrorHandling: z.ZodOptional<z.ZodBoolean>;
        globalObject: z.ZodOptional<z.ZodString>;
        importFunctionName: z.ZodOptional<z.ZodString>;
        importMetaName: z.ZodOptional<z.ZodString>;
        iife: z.ZodOptional<z.ZodBoolean>;
        wasmLoading: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodUnion<[z.ZodEnum<["fetch-streaming", "fetch", "async-node"]>, z.ZodString]>]>>;
        enabledWasmLoadingTypes: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodEnum<["fetch-streaming", "fetch", "async-node"]>, z.ZodString]>, "many">>;
        webassemblyModuleFilename: z.ZodOptional<z.ZodString>;
        chunkFormat: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodString]>>;
        chunkLoading: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodUnion<[z.ZodEnum<["jsonp", "import-scripts", "require", "async-node", "import"]>, z.ZodString]>]>>;
        enabledChunkLoadingTypes: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodEnum<["jsonp", "import-scripts", "require", "async-node", "import"]>, z.ZodString]>, "many">>;
        trustedTypes: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<true>, z.ZodString]>, z.ZodObject<{
            policyName: z.ZodOptional<z.ZodString>;
            onPolicyCreationFailure: z.ZodOptional<z.ZodEnum<["continue", "stop"]>>;
        }, "strict", z.ZodTypeAny, {
            policyName?: string | undefined;
            onPolicyCreationFailure?: "continue" | "stop" | undefined;
        }, {
            policyName?: string | undefined;
            onPolicyCreationFailure?: "continue" | "stop" | undefined;
        }>]>>;
        sourceMapFilename: z.ZodOptional<z.ZodString>;
        hashDigest: z.ZodOptional<z.ZodString>;
        hashDigestLength: z.ZodOptional<z.ZodNumber>;
        hashFunction: z.ZodOptional<z.ZodEnum<["md4", "xxhash64"]>>;
        hashSalt: z.ZodOptional<z.ZodString>;
        asyncChunks: z.ZodOptional<z.ZodBoolean>;
        workerChunkLoading: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodUnion<[z.ZodEnum<["jsonp", "import-scripts", "require", "async-node", "import"]>, z.ZodString]>]>>;
        workerWasmLoading: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodUnion<[z.ZodEnum<["fetch-streaming", "fetch", "async-node"]>, z.ZodString]>]>>;
        workerPublicPath: z.ZodOptional<z.ZodString>;
        scriptType: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["text/javascript", "module"]>, z.ZodLiteral<false>]>>;
        devtoolNamespace: z.ZodOptional<z.ZodString>;
        devtoolModuleFilenameTemplate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.ZodAny], null>, z.ZodAny>]>>;
        devtoolFallbackModuleFilenameTemplate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.ZodAny], null>, z.ZodAny>]>>;
        chunkLoadTimeout: z.ZodOptional<z.ZodNumber>;
        charset: z.ZodOptional<z.ZodBoolean>;
        environment: z.ZodOptional<z.ZodObject<{
            arrowFunction: z.ZodOptional<z.ZodBoolean>;
            asyncFunction: z.ZodOptional<z.ZodBoolean>;
            bigIntLiteral: z.ZodOptional<z.ZodBoolean>;
            const: z.ZodOptional<z.ZodBoolean>;
            destructuring: z.ZodOptional<z.ZodBoolean>;
            document: z.ZodOptional<z.ZodBoolean>;
            dynamicImport: z.ZodOptional<z.ZodBoolean>;
            dynamicImportInWorker: z.ZodOptional<z.ZodBoolean>;
            forOf: z.ZodOptional<z.ZodBoolean>;
            globalThis: z.ZodOptional<z.ZodBoolean>;
            module: z.ZodOptional<z.ZodBoolean>;
            nodePrefixForCoreModules: z.ZodOptional<z.ZodBoolean>;
            optionalChaining: z.ZodOptional<z.ZodBoolean>;
            templateLiteral: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
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
        }, {
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
        }>>;
        compareBeforeEmit: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        module?: boolean | undefined;
        environment?: {
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
        } | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: string | string[] | {
            commonjs?: string | undefined;
            amd?: string | undefined;
            root?: string | string[] | undefined;
        } | {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        path?: string | undefined;
        wasmLoading?: string | false | undefined;
        cssHeadDataCompression?: boolean | undefined;
        auxiliaryComment?: string | {
            commonjs?: string | undefined;
            commonjs2?: string | undefined;
            amd?: string | undefined;
            root?: string | undefined;
        } | undefined;
        umdNamedDefine?: boolean | undefined;
        pathinfo?: boolean | "verbose" | undefined;
        clean?: boolean | {
            keep?: string | undefined;
        } | undefined;
        crossOriginLoading?: false | "anonymous" | "use-credentials" | undefined;
        cssFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        cssChunkFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        hotUpdateMainFilename?: string | undefined;
        hotUpdateChunkFilename?: string | undefined;
        hotUpdateGlobal?: string | undefined;
        assetModuleFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
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
        trustedTypes?: string | true | {
            policyName?: string | undefined;
            onPolicyCreationFailure?: "continue" | "stop" | undefined;
        } | undefined;
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
        devtoolModuleFilenameTemplate?: string | ((args_0: any) => any) | undefined;
        devtoolFallbackModuleFilenameTemplate?: string | ((args_0: any) => any) | undefined;
        chunkLoadTimeout?: number | undefined;
        charset?: boolean | undefined;
        compareBeforeEmit?: boolean | undefined;
    }, {
        module?: boolean | undefined;
        environment?: {
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
        } | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: string | string[] | {
            commonjs?: string | undefined;
            amd?: string | undefined;
            root?: string | string[] | undefined;
        } | {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        path?: string | undefined;
        wasmLoading?: string | false | undefined;
        cssHeadDataCompression?: boolean | undefined;
        auxiliaryComment?: string | {
            commonjs?: string | undefined;
            commonjs2?: string | undefined;
            amd?: string | undefined;
            root?: string | undefined;
        } | undefined;
        umdNamedDefine?: boolean | undefined;
        pathinfo?: boolean | "verbose" | undefined;
        clean?: boolean | {
            keep?: string | undefined;
        } | undefined;
        crossOriginLoading?: false | "anonymous" | "use-credentials" | undefined;
        cssFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        cssChunkFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        hotUpdateMainFilename?: string | undefined;
        hotUpdateChunkFilename?: string | undefined;
        hotUpdateGlobal?: string | undefined;
        assetModuleFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
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
        trustedTypes?: string | true | {
            policyName?: string | undefined;
            onPolicyCreationFailure?: "continue" | "stop" | undefined;
        } | undefined;
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
        devtoolModuleFilenameTemplate?: string | ((args_0: any) => any) | undefined;
        devtoolFallbackModuleFilenameTemplate?: string | ((args_0: any) => any) | undefined;
        chunkLoadTimeout?: number | undefined;
        charset?: boolean | undefined;
        compareBeforeEmit?: boolean | undefined;
    }>>;
    target: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodUnion<[z.ZodEnum<["web", "webworker", "es3", "es5", "es2015", "es2016", "es2017", "es2018", "es2019", "es2020", "es2021", "es2022"]>, z.ZodLiteral<"node">, z.ZodLiteral<"async-node">, z.Schema<`node${number}`, z.ZodTypeDef, `node${number}`>, z.Schema<`async-node${number}`, z.ZodTypeDef, `async-node${number}`>, z.Schema<`node${number}.${number}`, z.ZodTypeDef, `node${number}.${number}`>, z.Schema<`async-node${number}.${number}`, z.ZodTypeDef, `async-node${number}.${number}`>, z.ZodLiteral<"electron-main">, z.Schema<`electron${number}-main`, z.ZodTypeDef, `electron${number}-main`>, z.Schema<`electron${number}.${number}-main`, z.ZodTypeDef, `electron${number}.${number}-main`>, z.ZodLiteral<"electron-renderer">, z.Schema<`electron${number}-renderer`, z.ZodTypeDef, `electron${number}-renderer`>, z.Schema<`electron${number}.${number}-renderer`, z.ZodTypeDef, `electron${number}.${number}-renderer`>, z.ZodLiteral<"electron-preload">, z.Schema<`electron${number}-preload`, z.ZodTypeDef, `electron${number}-preload`>, z.Schema<`electron${number}.${number}-preload`, z.ZodTypeDef, `electron${number}.${number}-preload`>, z.ZodLiteral<"nwjs">, z.Schema<`nwjs${number}`, z.ZodTypeDef, `nwjs${number}`>, z.Schema<`nwjs${number}.${number}`, z.ZodTypeDef, `nwjs${number}.${number}`>, z.ZodLiteral<"node-webkit">, z.Schema<`node-webkit${number}`, z.ZodTypeDef, `node-webkit${number}`>, z.Schema<`node-webkit${number}.${number}`, z.ZodTypeDef, `node-webkit${number}.${number}`>, z.ZodLiteral<"browserslist">, z.Schema<`browserslist:${string}`, z.ZodTypeDef, `browserslist:${string}`>]>, z.ZodArray<z.ZodUnion<[z.ZodEnum<["web", "webworker", "es3", "es5", "es2015", "es2016", "es2017", "es2018", "es2019", "es2020", "es2021", "es2022"]>, z.ZodLiteral<"node">, z.ZodLiteral<"async-node">, z.Schema<`node${number}`, z.ZodTypeDef, `node${number}`>, z.Schema<`async-node${number}`, z.ZodTypeDef, `async-node${number}`>, z.Schema<`node${number}.${number}`, z.ZodTypeDef, `node${number}.${number}`>, z.Schema<`async-node${number}.${number}`, z.ZodTypeDef, `async-node${number}.${number}`>, z.ZodLiteral<"electron-main">, z.Schema<`electron${number}-main`, z.ZodTypeDef, `electron${number}-main`>, z.Schema<`electron${number}.${number}-main`, z.ZodTypeDef, `electron${number}.${number}-main`>, z.ZodLiteral<"electron-renderer">, z.Schema<`electron${number}-renderer`, z.ZodTypeDef, `electron${number}-renderer`>, z.Schema<`electron${number}.${number}-renderer`, z.ZodTypeDef, `electron${number}.${number}-renderer`>, z.ZodLiteral<"electron-preload">, z.Schema<`electron${number}-preload`, z.ZodTypeDef, `electron${number}-preload`>, z.Schema<`electron${number}.${number}-preload`, z.ZodTypeDef, `electron${number}.${number}-preload`>, z.ZodLiteral<"nwjs">, z.Schema<`nwjs${number}`, z.ZodTypeDef, `nwjs${number}`>, z.Schema<`nwjs${number}.${number}`, z.ZodTypeDef, `nwjs${number}.${number}`>, z.ZodLiteral<"node-webkit">, z.Schema<`node-webkit${number}`, z.ZodTypeDef, `node-webkit${number}`>, z.Schema<`node-webkit${number}.${number}`, z.ZodTypeDef, `node-webkit${number}.${number}`>, z.ZodLiteral<"browserslist">, z.Schema<`browserslist:${string}`, z.ZodTypeDef, `browserslist:${string}`>]>, "many">]>>;
    mode: z.ZodOptional<z.ZodEnum<["development", "production", "none"]>>;
    experiments: z.ZodOptional<z.ZodObject<{
        cache: z.ZodUnion<[z.ZodOptional<z.ZodBoolean>, z.ZodUnion<[z.ZodObject<{
            type: z.ZodEnum<["memory"]>;
        }, "strip", z.ZodTypeAny, {
            type: "memory";
        }, {
            type: "memory";
        }>, z.ZodObject<{
            type: z.ZodEnum<["persistent"]>;
            buildDependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            version: z.ZodOptional<z.ZodString>;
            snapshot: z.ZodOptional<z.ZodObject<{
                immutablePaths: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, "many">>;
                unmanagedPaths: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, "many">>;
                managedPaths: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, "many">>;
            }, "strip", z.ZodTypeAny, {
                immutablePaths?: (string | RegExp)[] | undefined;
                unmanagedPaths?: (string | RegExp)[] | undefined;
                managedPaths?: (string | RegExp)[] | undefined;
            }, {
                immutablePaths?: (string | RegExp)[] | undefined;
                unmanagedPaths?: (string | RegExp)[] | undefined;
                managedPaths?: (string | RegExp)[] | undefined;
            }>>;
            storage: z.ZodOptional<z.ZodObject<{
                type: z.ZodEnum<["filesystem"]>;
                directory: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "filesystem";
                directory?: string | undefined;
            }, {
                type: "filesystem";
                directory?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            type: "persistent";
            version?: string | undefined;
            buildDependencies?: string[] | undefined;
            snapshot?: {
                immutablePaths?: (string | RegExp)[] | undefined;
                unmanagedPaths?: (string | RegExp)[] | undefined;
                managedPaths?: (string | RegExp)[] | undefined;
            } | undefined;
            storage?: {
                type: "filesystem";
                directory?: string | undefined;
            } | undefined;
        }, {
            type: "persistent";
            version?: string | undefined;
            buildDependencies?: string[] | undefined;
            snapshot?: {
                immutablePaths?: (string | RegExp)[] | undefined;
                unmanagedPaths?: (string | RegExp)[] | undefined;
                managedPaths?: (string | RegExp)[] | undefined;
            } | undefined;
            storage?: {
                type: "filesystem";
                directory?: string | undefined;
            } | undefined;
        }>]>]>;
        lazyCompilation: z.ZodUnion<[z.ZodOptional<z.ZodBoolean>, z.ZodObject<{
            imports: z.ZodOptional<z.ZodBoolean>;
            entries: z.ZodOptional<z.ZodBoolean>;
            test: z.ZodOptional<z.ZodUnion<[z.Schema<RegExp, z.ZodTypeDef, RegExp>, z.ZodFunction<z.ZodTuple<[z.Schema<Module, z.ZodTypeDef, Module>], z.ZodUnknown>, z.ZodBoolean>]>>;
            client: z.ZodOptional<z.ZodString>;
            serverUrl: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            entries?: boolean | undefined;
            test?: RegExp | ((args_0: Module, ...args: unknown[]) => boolean) | undefined;
            imports?: boolean | undefined;
            client?: string | undefined;
            serverUrl?: string | undefined;
        }, {
            entries?: boolean | undefined;
            test?: RegExp | ((args_0: Module, ...args: unknown[]) => boolean) | undefined;
            imports?: boolean | undefined;
            client?: string | undefined;
            serverUrl?: string | undefined;
        }>]>;
        asyncWebAssembly: z.ZodOptional<z.ZodBoolean>;
        outputModule: z.ZodOptional<z.ZodBoolean>;
        topLevelAwait: z.ZodOptional<z.ZodBoolean>;
        css: z.ZodOptional<z.ZodBoolean>;
        layers: z.ZodOptional<z.ZodBoolean>;
        incremental: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodObject<{
            make: z.ZodOptional<z.ZodBoolean>;
            inferAsyncModules: z.ZodOptional<z.ZodBoolean>;
            providedExports: z.ZodOptional<z.ZodBoolean>;
            dependenciesDiagnostics: z.ZodOptional<z.ZodBoolean>;
            sideEffects: z.ZodOptional<z.ZodBoolean>;
            buildChunkGraph: z.ZodOptional<z.ZodBoolean>;
            moduleIds: z.ZodOptional<z.ZodBoolean>;
            chunkIds: z.ZodOptional<z.ZodBoolean>;
            modulesHashes: z.ZodOptional<z.ZodBoolean>;
            modulesCodegen: z.ZodOptional<z.ZodBoolean>;
            modulesRuntimeRequirements: z.ZodOptional<z.ZodBoolean>;
            chunksRuntimeRequirements: z.ZodOptional<z.ZodBoolean>;
            chunksHashes: z.ZodOptional<z.ZodBoolean>;
            chunksRender: z.ZodOptional<z.ZodBoolean>;
            emitAssets: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
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
        }, {
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
        }>]>>;
        parallelCodeSplitting: z.ZodOptional<z.ZodBoolean>;
        futureDefaults: z.ZodOptional<z.ZodBoolean>;
        rspackFuture: z.ZodOptional<z.ZodObject<{
            bundlerInfo: z.ZodOptional<z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
                bundler: z.ZodOptional<z.ZodString>;
                force: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodArray<z.ZodEnum<["version", "uniqueId"]>, "many">]>>;
            }, "strict", z.ZodTypeAny, {
                force?: boolean | ("version" | "uniqueId")[] | undefined;
                version?: string | undefined;
                bundler?: string | undefined;
            }, {
                force?: boolean | ("version" | "uniqueId")[] | undefined;
                version?: string | undefined;
                bundler?: string | undefined;
            }>>;
        }, "strict", z.ZodTypeAny, {
            bundlerInfo?: {
                force?: boolean | ("version" | "uniqueId")[] | undefined;
                version?: string | undefined;
                bundler?: string | undefined;
            } | undefined;
        }, {
            bundlerInfo?: {
                force?: boolean | ("version" | "uniqueId")[] | undefined;
                version?: string | undefined;
                bundler?: string | undefined;
            } | undefined;
        }>>;
        buildHttp: z.ZodOptional<z.ZodObject<{
            allowedUris: z.ZodArray<z.ZodUnion<[z.ZodString, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, "many">;
            lockfileLocation: z.ZodOptional<z.ZodString>;
            cacheLocation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<false>]>>;
            upgrade: z.ZodOptional<z.ZodBoolean>;
            httpClient: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>], z.ZodUnknown>, z.ZodPromise<z.ZodObject<{
                status: z.ZodNumber;
                headers: z.ZodRecord<z.ZodString, z.ZodString>;
                body: z.Schema<Buffer<ArrayBufferLike>, z.ZodTypeDef, Buffer<ArrayBufferLike>>;
            }, "strip", z.ZodTypeAny, {
                status: number;
                body: Buffer<ArrayBufferLike>;
                headers: Record<string, string>;
            }, {
                status: number;
                body: Buffer<ArrayBufferLike>;
                headers: Record<string, string>;
            }>>>>;
        }, "strip", z.ZodTypeAny, {
            allowedUris: (string | RegExp)[];
            httpClient?: ((args_0: string, args_1: Record<string, string>, ...args: unknown[]) => Promise<{
                status: number;
                body: Buffer<ArrayBufferLike>;
                headers: Record<string, string>;
            }>) | undefined;
            lockfileLocation?: string | undefined;
            cacheLocation?: string | false | undefined;
            upgrade?: boolean | undefined;
        }, {
            allowedUris: (string | RegExp)[];
            httpClient?: ((args_0: string, args_1: Record<string, string>, ...args: unknown[]) => Promise<{
                status: number;
                body: Buffer<ArrayBufferLike>;
                headers: Record<string, string>;
            }>) | undefined;
            lockfileLocation?: string | undefined;
            cacheLocation?: string | false | undefined;
            upgrade?: boolean | undefined;
        }>>;
        parallelLoader: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        css?: boolean | undefined;
        cache?: boolean | {
            type: "memory";
        } | {
            type: "persistent";
            version?: string | undefined;
            buildDependencies?: string[] | undefined;
            snapshot?: {
                immutablePaths?: (string | RegExp)[] | undefined;
                unmanagedPaths?: (string | RegExp)[] | undefined;
                managedPaths?: (string | RegExp)[] | undefined;
            } | undefined;
            storage?: {
                type: "filesystem";
                directory?: string | undefined;
            } | undefined;
        } | undefined;
        lazyCompilation?: boolean | {
            entries?: boolean | undefined;
            test?: RegExp | ((args_0: Module, ...args: unknown[]) => boolean) | undefined;
            imports?: boolean | undefined;
            client?: string | undefined;
            serverUrl?: string | undefined;
        } | undefined;
        asyncWebAssembly?: boolean | undefined;
        outputModule?: boolean | undefined;
        topLevelAwait?: boolean | undefined;
        layers?: boolean | undefined;
        incremental?: boolean | {
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
        } | undefined;
        parallelCodeSplitting?: boolean | undefined;
        futureDefaults?: boolean | undefined;
        rspackFuture?: {
            bundlerInfo?: {
                force?: boolean | ("version" | "uniqueId")[] | undefined;
                version?: string | undefined;
                bundler?: string | undefined;
            } | undefined;
        } | undefined;
        buildHttp?: {
            allowedUris: (string | RegExp)[];
            httpClient?: ((args_0: string, args_1: Record<string, string>, ...args: unknown[]) => Promise<{
                status: number;
                body: Buffer<ArrayBufferLike>;
                headers: Record<string, string>;
            }>) | undefined;
            lockfileLocation?: string | undefined;
            cacheLocation?: string | false | undefined;
            upgrade?: boolean | undefined;
        } | undefined;
        parallelLoader?: boolean | undefined;
    }, {
        css?: boolean | undefined;
        cache?: boolean | {
            type: "memory";
        } | {
            type: "persistent";
            version?: string | undefined;
            buildDependencies?: string[] | undefined;
            snapshot?: {
                immutablePaths?: (string | RegExp)[] | undefined;
                unmanagedPaths?: (string | RegExp)[] | undefined;
                managedPaths?: (string | RegExp)[] | undefined;
            } | undefined;
            storage?: {
                type: "filesystem";
                directory?: string | undefined;
            } | undefined;
        } | undefined;
        lazyCompilation?: boolean | {
            entries?: boolean | undefined;
            test?: RegExp | ((args_0: Module, ...args: unknown[]) => boolean) | undefined;
            imports?: boolean | undefined;
            client?: string | undefined;
            serverUrl?: string | undefined;
        } | undefined;
        asyncWebAssembly?: boolean | undefined;
        outputModule?: boolean | undefined;
        topLevelAwait?: boolean | undefined;
        layers?: boolean | undefined;
        incremental?: boolean | {
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
        } | undefined;
        parallelCodeSplitting?: boolean | undefined;
        futureDefaults?: boolean | undefined;
        rspackFuture?: {
            bundlerInfo?: {
                force?: boolean | ("version" | "uniqueId")[] | undefined;
                version?: string | undefined;
                bundler?: string | undefined;
            } | undefined;
        } | undefined;
        buildHttp?: {
            allowedUris: (string | RegExp)[];
            httpClient?: ((args_0: string, args_1: Record<string, string>, ...args: unknown[]) => Promise<{
                status: number;
                body: Buffer<ArrayBufferLike>;
                headers: Record<string, string>;
            }>) | undefined;
            lockfileLocation?: string | undefined;
            cacheLocation?: string | false | undefined;
            upgrade?: boolean | undefined;
        } | undefined;
        parallelLoader?: boolean | undefined;
    }>>;
    externals: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodBoolean]>, z.ZodArray<z.ZodString, "many">]>, ZodRspackCrossChecker<t.ExternalItemUmdValue | t.ExternalItemObjectValue>]>>]>, z.ZodFunction<z.ZodTuple<[z.Schema<t.ExternalItemFunctionData, z.ZodTypeDef, t.ExternalItemFunctionData>, z.ZodFunction<z.ZodTuple<[z.ZodOptional<z.Schema<Error, z.ZodTypeDef, Error>>, z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodBoolean]>, z.ZodArray<z.ZodString, "many">]>, ZodRspackCrossChecker<t.ExternalItemUmdValue | t.ExternalItemObjectValue>]>>, z.ZodOptional<z.ZodEnum<["var", "module", "assign", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system", "promise", "import", "module-import", "script", "node-commonjs", "commonjs-import"]>>], z.ZodUnknown>, z.ZodVoid>], z.ZodUnknown>, z.ZodUnknown>]>, z.ZodFunction<z.ZodTuple<[z.Schema<t.ExternalItemFunctionData, z.ZodTypeDef, t.ExternalItemFunctionData>], z.ZodUnknown>, z.ZodPromise<z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodBoolean]>, z.ZodArray<z.ZodString, "many">]>, ZodRspackCrossChecker<t.ExternalItemUmdValue | t.ExternalItemObjectValue>]>>>]>, z.ZodFunction<z.ZodTuple<[z.Schema<t.ExternalItemFunctionData, z.ZodTypeDef, t.ExternalItemFunctionData>], z.ZodUnknown>, z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodBoolean]>, z.ZodArray<z.ZodString, "many">]>, ZodRspackCrossChecker<t.ExternalItemUmdValue | t.ExternalItemObjectValue>]>>]>, "many">, z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodBoolean]>, z.ZodArray<z.ZodString, "many">]>, ZodRspackCrossChecker<t.ExternalItemUmdValue | t.ExternalItemObjectValue>]>>]>, z.ZodFunction<z.ZodTuple<[z.Schema<t.ExternalItemFunctionData, z.ZodTypeDef, t.ExternalItemFunctionData>, z.ZodFunction<z.ZodTuple<[z.ZodOptional<z.Schema<Error, z.ZodTypeDef, Error>>, z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodBoolean]>, z.ZodArray<z.ZodString, "many">]>, ZodRspackCrossChecker<t.ExternalItemUmdValue | t.ExternalItemObjectValue>]>>, z.ZodOptional<z.ZodEnum<["var", "module", "assign", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system", "promise", "import", "module-import", "script", "node-commonjs", "commonjs-import"]>>], z.ZodUnknown>, z.ZodVoid>], z.ZodUnknown>, z.ZodUnknown>]>, z.ZodFunction<z.ZodTuple<[z.Schema<t.ExternalItemFunctionData, z.ZodTypeDef, t.ExternalItemFunctionData>], z.ZodUnknown>, z.ZodPromise<z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodBoolean]>, z.ZodArray<z.ZodString, "many">]>, ZodRspackCrossChecker<t.ExternalItemUmdValue | t.ExternalItemObjectValue>]>>>]>, z.ZodFunction<z.ZodTuple<[z.Schema<t.ExternalItemFunctionData, z.ZodTypeDef, t.ExternalItemFunctionData>], z.ZodUnknown>, z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodBoolean]>, z.ZodArray<z.ZodString, "many">]>, ZodRspackCrossChecker<t.ExternalItemUmdValue | t.ExternalItemObjectValue>]>>]>]>>;
    externalsType: z.ZodOptional<z.ZodEnum<["var", "module", "assign", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system", "promise", "import", "module-import", "script", "node-commonjs", "commonjs-import"]>>;
    externalsPresets: z.ZodOptional<z.ZodObject<{
        node: z.ZodOptional<z.ZodBoolean>;
        web: z.ZodOptional<z.ZodBoolean>;
        webAsync: z.ZodOptional<z.ZodBoolean>;
        electron: z.ZodOptional<z.ZodBoolean>;
        electronMain: z.ZodOptional<z.ZodBoolean>;
        electronPreload: z.ZodOptional<z.ZodBoolean>;
        electronRenderer: z.ZodOptional<z.ZodBoolean>;
        nwjs: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        node?: boolean | undefined;
        web?: boolean | undefined;
        nwjs?: boolean | undefined;
        webAsync?: boolean | undefined;
        electron?: boolean | undefined;
        electronMain?: boolean | undefined;
        electronPreload?: boolean | undefined;
        electronRenderer?: boolean | undefined;
    }, {
        node?: boolean | undefined;
        web?: boolean | undefined;
        nwjs?: boolean | undefined;
        webAsync?: boolean | undefined;
        electron?: boolean | undefined;
        electronMain?: boolean | undefined;
        electronPreload?: boolean | undefined;
        electronRenderer?: boolean | undefined;
    }>>;
    infrastructureLogging: z.ZodOptional<z.ZodObject<{
        appendOnly: z.ZodOptional<z.ZodBoolean>;
        colors: z.ZodOptional<z.ZodBoolean>;
        console: z.ZodOptional<z.Schema<Console, z.ZodTypeDef, Console>>;
        debug: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodUnion<[z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.Schema<RegExp, z.ZodTypeDef, RegExp>, z.ZodString]>, z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodBoolean>]>, "many">, z.ZodUnion<[z.ZodUnion<[z.Schema<RegExp, z.ZodTypeDef, RegExp>, z.ZodString]>, z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodBoolean>]>]>]>>;
        level: z.ZodOptional<z.ZodEnum<["none", "error", "warn", "info", "log", "verbose"]>>;
        stream: z.ZodOptional<z.Schema<NodeJS.WritableStream, z.ZodTypeDef, NodeJS.WritableStream>>;
    }, "strict", z.ZodTypeAny, {
        debug?: string | boolean | RegExp | ((args_0: string, ...args: unknown[]) => boolean) | (string | RegExp | ((args_0: string, ...args: unknown[]) => boolean))[] | undefined;
        colors?: boolean | undefined;
        level?: "error" | "warn" | "info" | "log" | "verbose" | "none" | undefined;
        console?: Console | undefined;
        appendOnly?: boolean | undefined;
        stream?: NodeJS.WritableStream | undefined;
    }, {
        debug?: string | boolean | RegExp | ((args_0: string, ...args: unknown[]) => boolean) | (string | RegExp | ((args_0: string, ...args: unknown[]) => boolean))[] | undefined;
        colors?: boolean | undefined;
        level?: "error" | "warn" | "info" | "log" | "verbose" | "none" | undefined;
        console?: Console | undefined;
        appendOnly?: boolean | undefined;
        stream?: NodeJS.WritableStream | undefined;
    }>>;
    cache: z.ZodOptional<z.ZodBoolean>;
    context: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    devtool: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodEnum<["eval", "cheap-source-map", "cheap-module-source-map", "source-map", "inline-cheap-source-map", "inline-cheap-module-source-map", "inline-source-map", "inline-nosources-cheap-source-map", "inline-nosources-cheap-module-source-map", "inline-nosources-source-map", "nosources-cheap-source-map", "nosources-cheap-module-source-map", "nosources-source-map", "hidden-nosources-cheap-source-map", "hidden-nosources-cheap-module-source-map", "hidden-nosources-source-map", "hidden-cheap-source-map", "hidden-cheap-module-source-map", "hidden-source-map", "eval-cheap-source-map", "eval-cheap-module-source-map", "eval-source-map", "eval-nosources-cheap-source-map", "eval-nosources-cheap-module-source-map", "eval-nosources-source-map"]>]>>;
    node: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodObject<{
        __dirname: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEnum<["warn-mock", "mock", "eval-only", "node-module"]>]>>;
        __filename: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEnum<["warn-mock", "mock", "eval-only", "node-module"]>]>>;
        global: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"warn">]>>;
    }, "strict", z.ZodTypeAny, {
        global?: boolean | "warn" | undefined;
        __dirname?: boolean | "warn-mock" | "mock" | "eval-only" | "node-module" | undefined;
        __filename?: boolean | "warn-mock" | "mock" | "eval-only" | "node-module" | undefined;
    }, {
        global?: boolean | "warn" | undefined;
        __dirname?: boolean | "warn-mock" | "mock" | "eval-only" | "node-module" | undefined;
        __filename?: boolean | "warn-mock" | "mock" | "eval-only" | "node-module" | undefined;
    }>]>>;
    loader: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    ignoreWarnings: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.Schema<RegExp, z.ZodTypeDef, RegExp>, z.ZodFunction<z.ZodTuple<[z.Schema<Error, z.ZodTypeDef, Error>, z.Schema<Compilation, z.ZodTypeDef, Compilation>], z.ZodUnknown>, z.ZodBoolean>]>, "many">>;
    watchOptions: z.ZodOptional<z.ZodObject<{
        aggregateTimeout: z.ZodOptional<z.ZodNumber>;
        followSymlinks: z.ZodOptional<z.ZodBoolean>;
        ignored: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodString]>>;
        poll: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>>;
        stdin: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        aggregateTimeout?: number | undefined;
        followSymlinks?: boolean | undefined;
        ignored?: string | RegExp | string[] | undefined;
        poll?: number | boolean | undefined;
        stdin?: boolean | undefined;
    }, {
        aggregateTimeout?: number | undefined;
        followSymlinks?: boolean | undefined;
        ignored?: string | RegExp | string[] | undefined;
        poll?: number | boolean | undefined;
        stdin?: boolean | undefined;
    }>>;
    watch: z.ZodOptional<z.ZodBoolean>;
    stats: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodBoolean, z.ZodEnum<["normal", "none", "verbose", "errors-only", "errors-warnings", "minimal", "detailed", "summary"]>]>, z.ZodObject<{
        all: z.ZodOptional<z.ZodBoolean>;
        preset: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEnum<["normal", "none", "verbose", "errors-only", "errors-warnings", "minimal", "detailed", "summary"]>]>>;
        assets: z.ZodOptional<z.ZodBoolean>;
        chunks: z.ZodOptional<z.ZodBoolean>;
        modules: z.ZodOptional<z.ZodBoolean>;
        entrypoints: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"auto">]>>;
        chunkGroups: z.ZodOptional<z.ZodBoolean>;
        warnings: z.ZodOptional<z.ZodBoolean>;
        warningsCount: z.ZodOptional<z.ZodBoolean>;
        errors: z.ZodOptional<z.ZodBoolean>;
        errorsCount: z.ZodOptional<z.ZodBoolean>;
        colors: z.ZodOptional<z.ZodBoolean>;
        hash: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodBoolean>;
        reasons: z.ZodOptional<z.ZodBoolean>;
        publicPath: z.ZodOptional<z.ZodBoolean>;
        outputPath: z.ZodOptional<z.ZodBoolean>;
        chunkModules: z.ZodOptional<z.ZodBoolean>;
        chunkRelations: z.ZodOptional<z.ZodBoolean>;
        ids: z.ZodOptional<z.ZodBoolean>;
        timings: z.ZodOptional<z.ZodBoolean>;
        builtAt: z.ZodOptional<z.ZodBoolean>;
        moduleAssets: z.ZodOptional<z.ZodBoolean>;
        nestedModules: z.ZodOptional<z.ZodBoolean>;
        source: z.ZodOptional<z.ZodBoolean>;
        logging: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["none", "error", "warn", "info", "log", "verbose"]>, z.ZodBoolean]>>;
        loggingDebug: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodUnion<[z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.Schema<RegExp, z.ZodTypeDef, RegExp>, z.ZodString]>, z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodBoolean>]>, "many">, z.ZodUnion<[z.ZodUnion<[z.Schema<RegExp, z.ZodTypeDef, RegExp>, z.ZodString]>, z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodBoolean>]>]>]>>;
        loggingTrace: z.ZodOptional<z.ZodBoolean>;
        runtimeModules: z.ZodOptional<z.ZodBoolean>;
        children: z.ZodOptional<z.ZodBoolean>;
        usedExports: z.ZodOptional<z.ZodBoolean>;
        providedExports: z.ZodOptional<z.ZodBoolean>;
        optimizationBailout: z.ZodOptional<z.ZodBoolean>;
        groupModulesByType: z.ZodOptional<z.ZodBoolean>;
        groupModulesByCacheStatus: z.ZodOptional<z.ZodBoolean>;
        groupModulesByLayer: z.ZodOptional<z.ZodBoolean>;
        groupModulesByAttributes: z.ZodOptional<z.ZodBoolean>;
        groupModulesByPath: z.ZodOptional<z.ZodBoolean>;
        groupModulesByExtension: z.ZodOptional<z.ZodBoolean>;
        modulesSpace: z.ZodOptional<z.ZodNumber>;
        chunkModulesSpace: z.ZodOptional<z.ZodNumber>;
        nestedModulesSpace: z.ZodOptional<z.ZodNumber>;
        relatedAssets: z.ZodOptional<z.ZodBoolean>;
        groupAssetsByEmitStatus: z.ZodOptional<z.ZodBoolean>;
        groupAssetsByInfo: z.ZodOptional<z.ZodBoolean>;
        groupAssetsByPath: z.ZodOptional<z.ZodBoolean>;
        groupAssetsByExtension: z.ZodOptional<z.ZodBoolean>;
        groupAssetsByChunk: z.ZodOptional<z.ZodBoolean>;
        assetsSpace: z.ZodOptional<z.ZodNumber>;
        orphanModules: z.ZodOptional<z.ZodBoolean>;
        excludeModules: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodAny, z.ZodAny], null>, z.ZodBoolean>]>, "many">, z.ZodString]>, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodAny, z.ZodAny], null>, z.ZodBoolean>]>, z.ZodBoolean]>>;
        excludeAssets: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodAny], null>, z.ZodBoolean>]>, "many">, z.ZodString]>, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodAny], null>, z.ZodBoolean>]>>;
        modulesSort: z.ZodOptional<z.ZodString>;
        chunkModulesSort: z.ZodOptional<z.ZodString>;
        nestedModulesSort: z.ZodOptional<z.ZodString>;
        chunksSort: z.ZodOptional<z.ZodString>;
        assetsSort: z.ZodOptional<z.ZodString>;
        performance: z.ZodOptional<z.ZodBoolean>;
        env: z.ZodOptional<z.ZodBoolean>;
        chunkGroupAuxiliary: z.ZodOptional<z.ZodBoolean>;
        chunkGroupChildren: z.ZodOptional<z.ZodBoolean>;
        chunkGroupMaxAssets: z.ZodOptional<z.ZodNumber>;
        dependentModules: z.ZodOptional<z.ZodBoolean>;
        chunkOrigins: z.ZodOptional<z.ZodBoolean>;
        runtime: z.ZodOptional<z.ZodBoolean>;
        depth: z.ZodOptional<z.ZodBoolean>;
        reasonsSpace: z.ZodOptional<z.ZodNumber>;
        groupReasonsByOrigin: z.ZodOptional<z.ZodBoolean>;
        errorDetails: z.ZodOptional<z.ZodBoolean>;
        errorStack: z.ZodOptional<z.ZodBoolean>;
        moduleTrace: z.ZodOptional<z.ZodBoolean>;
        cachedModules: z.ZodOptional<z.ZodBoolean>;
        cachedAssets: z.ZodOptional<z.ZodBoolean>;
        cached: z.ZodOptional<z.ZodBoolean>;
        errorsSpace: z.ZodOptional<z.ZodNumber>;
        warningsSpace: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
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
        preset?: boolean | "verbose" | "none" | "normal" | "errors-only" | "errors-warnings" | "minimal" | "detailed" | "summary" | undefined;
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
        logging?: boolean | "error" | "warn" | "info" | "log" | "verbose" | "none" | undefined;
        loggingDebug?: string | boolean | RegExp | ((args_0: string, ...args: unknown[]) => boolean) | (string | RegExp | ((args_0: string, ...args: unknown[]) => boolean))[] | undefined;
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
        excludeModules?: string | boolean | RegExp | ((args_0: string, args_1: any, args_2: any) => boolean) | (string | RegExp | ((args_0: string, args_1: any, args_2: any) => boolean))[] | undefined;
        excludeAssets?: string | RegExp | ((args_0: string, args_1: any) => boolean) | (string | RegExp | ((args_0: string, args_1: any) => boolean))[] | undefined;
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
    }, {
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
        preset?: boolean | "verbose" | "none" | "normal" | "errors-only" | "errors-warnings" | "minimal" | "detailed" | "summary" | undefined;
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
        logging?: boolean | "error" | "warn" | "info" | "log" | "verbose" | "none" | undefined;
        loggingDebug?: string | boolean | RegExp | ((args_0: string, ...args: unknown[]) => boolean) | (string | RegExp | ((args_0: string, ...args: unknown[]) => boolean))[] | undefined;
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
        excludeModules?: string | boolean | RegExp | ((args_0: string, args_1: any, args_2: any) => boolean) | (string | RegExp | ((args_0: string, args_1: any, args_2: any) => boolean))[] | undefined;
        excludeAssets?: string | RegExp | ((args_0: string, args_1: any) => boolean) | (string | RegExp | ((args_0: string, args_1: any) => boolean))[] | undefined;
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
    }>]>>;
    snapshot: z.ZodOptional<z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>>;
    optimization: z.ZodOptional<z.ZodObject<{
        moduleIds: z.ZodOptional<z.ZodEnum<["named", "natural", "deterministic"]>>;
        chunkIds: z.ZodOptional<z.ZodEnum<["natural", "named", "deterministic", "size", "total-size"]>>;
        minimize: z.ZodOptional<z.ZodBoolean>;
        minimizer: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodLiteral<"...">, z.ZodUnion<[z.Schema<t.RspackPluginInstance | t.WebpackPluginInstance | t.RspackPluginFunction | t.WebpackPluginFunction, z.ZodTypeDef, t.RspackPluginInstance | t.WebpackPluginInstance | t.RspackPluginFunction | t.WebpackPluginFunction>, z.ZodUnion<[z.ZodLiteral<false>, z.ZodLiteral<0>, z.ZodLiteral<"">, z.ZodNull, z.ZodUndefined]>]>]>, "many">>;
        mergeDuplicateChunks: z.ZodOptional<z.ZodBoolean>;
        splitChunks: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodObject<{
            chunks: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodEnum<["initial", "async", "all"]>, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodFunction<z.ZodTuple<[z.Schema<Chunk, z.ZodTypeDef, Chunk>], z.ZodUnknown>, z.ZodBoolean>]>>;
            defaultSizeTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            minChunks: z.ZodOptional<z.ZodNumber>;
            usedExports: z.ZodOptional<z.ZodBoolean>;
            name: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodLiteral<false>]>, z.ZodFunction<z.ZodTuple<[z.Schema<Module, z.ZodTypeDef, Module>, z.ZodArray<z.Schema<Chunk, z.ZodTypeDef, Chunk>, "many">, z.ZodString], z.ZodUnknown>, z.ZodOptional<z.ZodString>>]>>;
            filename: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>>;
            minSize: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
            maxSize: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
            maxAsyncSize: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
            maxInitialSize: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
            maxAsyncRequests: z.ZodOptional<z.ZodNumber>;
            maxInitialRequests: z.ZodOptional<z.ZodNumber>;
            automaticNameDelimiter: z.ZodOptional<z.ZodString>;
            cacheGroups: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodLiteral<false>, z.ZodObject<{
                chunks: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodEnum<["initial", "async", "all"]>, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodFunction<z.ZodTuple<[z.Schema<Chunk, z.ZodTypeDef, Chunk>], z.ZodUnknown>, z.ZodBoolean>]>>;
                defaultSizeTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                minChunks: z.ZodOptional<z.ZodNumber>;
                usedExports: z.ZodOptional<z.ZodBoolean>;
                name: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodLiteral<false>]>, z.ZodFunction<z.ZodTuple<[z.Schema<Module, z.ZodTypeDef, Module>, z.ZodArray<z.Schema<Chunk, z.ZodTypeDef, Chunk>, "many">, z.ZodString], z.ZodUnknown>, z.ZodOptional<z.ZodString>>]>>;
                filename: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>>;
                minSize: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
                maxSize: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
                maxAsyncSize: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
                maxInitialSize: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
                maxAsyncRequests: z.ZodOptional<z.ZodNumber>;
                maxInitialRequests: z.ZodOptional<z.ZodNumber>;
                automaticNameDelimiter: z.ZodOptional<z.ZodString>;
                test: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodFunction<z.ZodTuple<[z.Schema<Module, z.ZodTypeDef, Module>, z.ZodObject<{
                    moduleGraph: z.Schema<ModuleGraph, z.ZodTypeDef, ModuleGraph>;
                    chunkGraph: z.Schema<ChunkGraph, z.ZodTypeDef, ChunkGraph>;
                }, "strip", z.ZodTypeAny, {
                    moduleGraph: ModuleGraph;
                    chunkGraph: ChunkGraph;
                }, {
                    moduleGraph: ModuleGraph;
                    chunkGraph: ChunkGraph;
                }>], z.ZodUnknown>, z.ZodBoolean>]>>;
                priority: z.ZodOptional<z.ZodNumber>;
                enforce: z.ZodOptional<z.ZodBoolean>;
                reuseExistingChunk: z.ZodOptional<z.ZodBoolean>;
                type: z.ZodOptional<z.ZodUnion<[z.ZodString, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>>;
                idHint: z.ZodOptional<z.ZodString>;
                layer: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodFunction<z.ZodTuple<[z.ZodOptional<z.ZodString>], null>, z.ZodBoolean>]>>;
            }, "strict", z.ZodTypeAny, {
                name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
                priority?: number | undefined;
                layer?: string | RegExp | ((args_0: string | undefined) => boolean) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                type?: string | RegExp | undefined;
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                test?: string | RegExp | ((args_0: Module, args_1: {
                    moduleGraph: ModuleGraph;
                    chunkGraph: ChunkGraph;
                }, ...args: unknown[]) => boolean) | undefined;
                defaultSizeTypes?: string[] | undefined;
                minSize?: number | Record<string, number> | undefined;
                maxSize?: number | Record<string, number> | undefined;
                maxAsyncSize?: number | Record<string, number> | undefined;
                maxInitialSize?: number | Record<string, number> | undefined;
                minChunks?: number | undefined;
                usedExports?: boolean | undefined;
                maxAsyncRequests?: number | undefined;
                maxInitialRequests?: number | undefined;
                automaticNameDelimiter?: string | undefined;
                enforce?: boolean | undefined;
                reuseExistingChunk?: boolean | undefined;
                idHint?: string | undefined;
            }, {
                name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
                priority?: number | undefined;
                layer?: string | RegExp | ((args_0: string | undefined) => boolean) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                type?: string | RegExp | undefined;
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                test?: string | RegExp | ((args_0: Module, args_1: {
                    moduleGraph: ModuleGraph;
                    chunkGraph: ChunkGraph;
                }, ...args: unknown[]) => boolean) | undefined;
                defaultSizeTypes?: string[] | undefined;
                minSize?: number | Record<string, number> | undefined;
                maxSize?: number | Record<string, number> | undefined;
                maxAsyncSize?: number | Record<string, number> | undefined;
                maxInitialSize?: number | Record<string, number> | undefined;
                minChunks?: number | undefined;
                usedExports?: boolean | undefined;
                maxAsyncRequests?: number | undefined;
                maxInitialRequests?: number | undefined;
                automaticNameDelimiter?: string | undefined;
                enforce?: boolean | undefined;
                reuseExistingChunk?: boolean | undefined;
                idHint?: string | undefined;
            }>]>>>;
            fallbackCacheGroup: z.ZodOptional<z.ZodObject<{
                chunks: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodEnum<["initial", "async", "all"]>, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodFunction<z.ZodTuple<[z.Schema<Chunk, z.ZodTypeDef, Chunk>], z.ZodUnknown>, z.ZodBoolean>]>>;
                minSize: z.ZodOptional<z.ZodNumber>;
                maxSize: z.ZodOptional<z.ZodNumber>;
                maxAsyncSize: z.ZodOptional<z.ZodNumber>;
                maxInitialSize: z.ZodOptional<z.ZodNumber>;
                automaticNameDelimiter: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                minSize?: number | undefined;
                maxSize?: number | undefined;
                maxAsyncSize?: number | undefined;
                maxInitialSize?: number | undefined;
                automaticNameDelimiter?: string | undefined;
            }, {
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                minSize?: number | undefined;
                maxSize?: number | undefined;
                maxAsyncSize?: number | undefined;
                maxInitialSize?: number | undefined;
                automaticNameDelimiter?: string | undefined;
            }>>;
            hidePathInfo: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
            filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
            defaultSizeTypes?: string[] | undefined;
            cacheGroups?: Record<string, false | {
                name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
                priority?: number | undefined;
                layer?: string | RegExp | ((args_0: string | undefined) => boolean) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                type?: string | RegExp | undefined;
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                test?: string | RegExp | ((args_0: Module, args_1: {
                    moduleGraph: ModuleGraph;
                    chunkGraph: ChunkGraph;
                }, ...args: unknown[]) => boolean) | undefined;
                defaultSizeTypes?: string[] | undefined;
                minSize?: number | Record<string, number> | undefined;
                maxSize?: number | Record<string, number> | undefined;
                maxAsyncSize?: number | Record<string, number> | undefined;
                maxInitialSize?: number | Record<string, number> | undefined;
                minChunks?: number | undefined;
                usedExports?: boolean | undefined;
                maxAsyncRequests?: number | undefined;
                maxInitialRequests?: number | undefined;
                automaticNameDelimiter?: string | undefined;
                enforce?: boolean | undefined;
                reuseExistingChunk?: boolean | undefined;
                idHint?: string | undefined;
            }> | undefined;
            fallbackCacheGroup?: {
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                minSize?: number | undefined;
                maxSize?: number | undefined;
                maxAsyncSize?: number | undefined;
                maxInitialSize?: number | undefined;
                automaticNameDelimiter?: string | undefined;
            } | undefined;
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
        }, {
            name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
            filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
            defaultSizeTypes?: string[] | undefined;
            cacheGroups?: Record<string, false | {
                name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
                priority?: number | undefined;
                layer?: string | RegExp | ((args_0: string | undefined) => boolean) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                type?: string | RegExp | undefined;
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                test?: string | RegExp | ((args_0: Module, args_1: {
                    moduleGraph: ModuleGraph;
                    chunkGraph: ChunkGraph;
                }, ...args: unknown[]) => boolean) | undefined;
                defaultSizeTypes?: string[] | undefined;
                minSize?: number | Record<string, number> | undefined;
                maxSize?: number | Record<string, number> | undefined;
                maxAsyncSize?: number | Record<string, number> | undefined;
                maxInitialSize?: number | Record<string, number> | undefined;
                minChunks?: number | undefined;
                usedExports?: boolean | undefined;
                maxAsyncRequests?: number | undefined;
                maxInitialRequests?: number | undefined;
                automaticNameDelimiter?: string | undefined;
                enforce?: boolean | undefined;
                reuseExistingChunk?: boolean | undefined;
                idHint?: string | undefined;
            }> | undefined;
            fallbackCacheGroup?: {
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                minSize?: number | undefined;
                maxSize?: number | undefined;
                maxAsyncSize?: number | undefined;
                maxInitialSize?: number | undefined;
                automaticNameDelimiter?: string | undefined;
            } | undefined;
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
        }>]>>;
        runtimeChunk: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodEnum<["single", "multiple"]>, z.ZodBoolean]>, z.ZodObject<{
            name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.ZodObject<{
                name: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>], z.ZodUnknown>, z.ZodString>]>>;
        }, "strict", z.ZodTypeAny, {
            name?: string | ((args_0: {
                name: string;
            }, ...args: unknown[]) => string) | undefined;
        }, {
            name?: string | ((args_0: {
                name: string;
            }, ...args: unknown[]) => string) | undefined;
        }>]>>;
        removeAvailableModules: z.ZodOptional<z.ZodBoolean>;
        removeEmptyChunks: z.ZodOptional<z.ZodBoolean>;
        realContentHash: z.ZodOptional<z.ZodBoolean>;
        sideEffects: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["flag"]>, z.ZodBoolean]>>;
        providedExports: z.ZodOptional<z.ZodBoolean>;
        concatenateModules: z.ZodOptional<z.ZodBoolean>;
        innerGraph: z.ZodOptional<z.ZodBoolean>;
        usedExports: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["global"]>, z.ZodBoolean]>>;
        mangleExports: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["size", "deterministic"]>, z.ZodBoolean]>>;
        nodeEnv: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<false>]>>;
        emitOnErrors: z.ZodOptional<z.ZodBoolean>;
        avoidEntryIife: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        splitChunks?: false | {
            name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
            filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
            defaultSizeTypes?: string[] | undefined;
            cacheGroups?: Record<string, false | {
                name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
                priority?: number | undefined;
                layer?: string | RegExp | ((args_0: string | undefined) => boolean) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                type?: string | RegExp | undefined;
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                test?: string | RegExp | ((args_0: Module, args_1: {
                    moduleGraph: ModuleGraph;
                    chunkGraph: ChunkGraph;
                }, ...args: unknown[]) => boolean) | undefined;
                defaultSizeTypes?: string[] | undefined;
                minSize?: number | Record<string, number> | undefined;
                maxSize?: number | Record<string, number> | undefined;
                maxAsyncSize?: number | Record<string, number> | undefined;
                maxInitialSize?: number | Record<string, number> | undefined;
                minChunks?: number | undefined;
                usedExports?: boolean | undefined;
                maxAsyncRequests?: number | undefined;
                maxInitialRequests?: number | undefined;
                automaticNameDelimiter?: string | undefined;
                enforce?: boolean | undefined;
                reuseExistingChunk?: boolean | undefined;
                idHint?: string | undefined;
            }> | undefined;
            fallbackCacheGroup?: {
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                minSize?: number | undefined;
                maxSize?: number | undefined;
                maxAsyncSize?: number | undefined;
                maxInitialSize?: number | undefined;
                automaticNameDelimiter?: string | undefined;
            } | undefined;
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
        } | undefined;
        usedExports?: boolean | "global" | undefined;
        providedExports?: boolean | undefined;
        minimize?: boolean | undefined;
        minimizer?: (false | "" | 0 | t.RspackPluginInstance | "..." | t.WebpackPluginInstance | t.RspackPluginFunction | t.WebpackPluginFunction | null | undefined)[] | undefined;
        sideEffects?: boolean | "flag" | undefined;
        moduleIds?: "named" | "natural" | "deterministic" | undefined;
        chunkIds?: "named" | "natural" | "deterministic" | "size" | "total-size" | undefined;
        mergeDuplicateChunks?: boolean | undefined;
        runtimeChunk?: boolean | "single" | "multiple" | {
            name?: string | ((args_0: {
                name: string;
            }, ...args: unknown[]) => string) | undefined;
        } | undefined;
        removeAvailableModules?: boolean | undefined;
        removeEmptyChunks?: boolean | undefined;
        realContentHash?: boolean | undefined;
        concatenateModules?: boolean | undefined;
        innerGraph?: boolean | undefined;
        mangleExports?: boolean | "deterministic" | "size" | undefined;
        nodeEnv?: string | false | undefined;
        emitOnErrors?: boolean | undefined;
        avoidEntryIife?: boolean | undefined;
    }, {
        splitChunks?: false | {
            name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
            filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
            defaultSizeTypes?: string[] | undefined;
            cacheGroups?: Record<string, false | {
                name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
                priority?: number | undefined;
                layer?: string | RegExp | ((args_0: string | undefined) => boolean) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                type?: string | RegExp | undefined;
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                test?: string | RegExp | ((args_0: Module, args_1: {
                    moduleGraph: ModuleGraph;
                    chunkGraph: ChunkGraph;
                }, ...args: unknown[]) => boolean) | undefined;
                defaultSizeTypes?: string[] | undefined;
                minSize?: number | Record<string, number> | undefined;
                maxSize?: number | Record<string, number> | undefined;
                maxAsyncSize?: number | Record<string, number> | undefined;
                maxInitialSize?: number | Record<string, number> | undefined;
                minChunks?: number | undefined;
                usedExports?: boolean | undefined;
                maxAsyncRequests?: number | undefined;
                maxInitialRequests?: number | undefined;
                automaticNameDelimiter?: string | undefined;
                enforce?: boolean | undefined;
                reuseExistingChunk?: boolean | undefined;
                idHint?: string | undefined;
            }> | undefined;
            fallbackCacheGroup?: {
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                minSize?: number | undefined;
                maxSize?: number | undefined;
                maxAsyncSize?: number | undefined;
                maxInitialSize?: number | undefined;
                automaticNameDelimiter?: string | undefined;
            } | undefined;
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
        } | undefined;
        usedExports?: boolean | "global" | undefined;
        providedExports?: boolean | undefined;
        minimize?: boolean | undefined;
        minimizer?: (false | "" | 0 | t.RspackPluginInstance | "..." | t.WebpackPluginInstance | t.RspackPluginFunction | t.WebpackPluginFunction | null | undefined)[] | undefined;
        sideEffects?: boolean | "flag" | undefined;
        moduleIds?: "named" | "natural" | "deterministic" | undefined;
        chunkIds?: "named" | "natural" | "deterministic" | "size" | "total-size" | undefined;
        mergeDuplicateChunks?: boolean | undefined;
        runtimeChunk?: boolean | "single" | "multiple" | {
            name?: string | ((args_0: {
                name: string;
            }, ...args: unknown[]) => string) | undefined;
        } | undefined;
        removeAvailableModules?: boolean | undefined;
        removeEmptyChunks?: boolean | undefined;
        realContentHash?: boolean | undefined;
        concatenateModules?: boolean | undefined;
        innerGraph?: boolean | undefined;
        mangleExports?: boolean | "deterministic" | "size" | undefined;
        nodeEnv?: string | false | undefined;
        emitOnErrors?: boolean | undefined;
        avoidEntryIife?: boolean | undefined;
    }>>;
    resolve: z.ZodOptional<z.Schema<t.ResolveOptions, z.ZodTypeDef, t.ResolveOptions>>;
    resolveLoader: z.ZodOptional<z.Schema<t.ResolveOptions, z.ZodTypeDef, t.ResolveOptions>>;
    plugins: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.Schema<t.RspackPluginInstance | t.WebpackPluginInstance | t.RspackPluginFunction | t.WebpackPluginFunction, z.ZodTypeDef, t.RspackPluginInstance | t.WebpackPluginInstance | t.RspackPluginFunction | t.WebpackPluginFunction>, z.ZodUnion<[z.ZodLiteral<false>, z.ZodLiteral<0>, z.ZodLiteral<"">, z.ZodNull, z.ZodUndefined]>]>, "many">>;
    devServer: z.ZodOptional<z.Schema<t.DevServer, z.ZodTypeDef, t.DevServer>>;
    module: z.ZodOptional<z.ZodObject<{
        defaultRules: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"...">, z.Schema<t.RuleSetRule, z.ZodTypeDef, t.RuleSetRule>]>, z.ZodUnion<[z.ZodLiteral<false>, z.ZodLiteral<0>, z.ZodLiteral<"">, z.ZodNull, z.ZodUndefined]>]>, "many">>;
        rules: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"...">, z.Schema<t.RuleSetRule, z.ZodTypeDef, t.RuleSetRule>]>, z.ZodUnion<[z.ZodLiteral<false>, z.ZodLiteral<0>, z.ZodLiteral<"">, z.ZodNull, z.ZodUndefined]>]>, "many">>;
        parser: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            asset: z.ZodOptional<z.ZodObject<{
                dataUrlCondition: z.ZodOptional<z.ZodObject<{
                    maxSize: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    maxSize?: number | undefined;
                }, {
                    maxSize?: number | undefined;
                }>>;
            }, "strict", z.ZodTypeAny, {
                dataUrlCondition?: {
                    maxSize?: number | undefined;
                } | undefined;
            }, {
                dataUrlCondition?: {
                    maxSize?: number | undefined;
                } | undefined;
            }>>;
            css: z.ZodOptional<z.ZodObject<{
                namedExports: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                namedExports?: boolean | undefined;
            }, {
                namedExports?: boolean | undefined;
            }>>;
            "css/auto": z.ZodOptional<z.ZodObject<{
                namedExports: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                namedExports?: boolean | undefined;
            }, {
                namedExports?: boolean | undefined;
            }>>;
            "css/module": z.ZodOptional<z.ZodObject<{
                namedExports: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                namedExports?: boolean | undefined;
            }, {
                namedExports?: boolean | undefined;
            }>>;
            javascript: z.ZodOptional<z.ZodObject<{
                dynamicImportMode: z.ZodOptional<z.ZodEnum<["eager", "lazy", "weak", "lazy-once"]>>;
                dynamicImportPreload: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber]>>;
                dynamicImportPrefetch: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber]>>;
                dynamicImportFetchPriority: z.ZodOptional<z.ZodEnum<["low", "high", "auto"]>>;
                importMeta: z.ZodOptional<z.ZodBoolean>;
                url: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"relative">, z.ZodBoolean]>>;
                exprContextCritical: z.ZodOptional<z.ZodBoolean>;
                wrappedContextCritical: z.ZodOptional<z.ZodBoolean>;
                wrappedContextRegExp: z.ZodOptional<z.Schema<RegExp, z.ZodTypeDef, RegExp>>;
                exportsPresence: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["error", "warn", "auto"]>, z.ZodLiteral<false>]>>;
                importExportsPresence: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["error", "warn", "auto"]>, z.ZodLiteral<false>]>>;
                reexportExportsPresence: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["error", "warn", "auto"]>, z.ZodLiteral<false>]>>;
                strictExportPresence: z.ZodOptional<z.ZodBoolean>;
                worker: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodBoolean]>>;
                overrideStrict: z.ZodOptional<z.ZodEnum<["strict", "non-strict"]>>;
                requireAsExpression: z.ZodOptional<z.ZodBoolean>;
                requireDynamic: z.ZodOptional<z.ZodBoolean>;
                requireResolve: z.ZodOptional<z.ZodBoolean>;
                importDynamic: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            }, {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            }>>;
            "javascript/auto": z.ZodOptional<z.ZodObject<{
                dynamicImportMode: z.ZodOptional<z.ZodEnum<["eager", "lazy", "weak", "lazy-once"]>>;
                dynamicImportPreload: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber]>>;
                dynamicImportPrefetch: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber]>>;
                dynamicImportFetchPriority: z.ZodOptional<z.ZodEnum<["low", "high", "auto"]>>;
                importMeta: z.ZodOptional<z.ZodBoolean>;
                url: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"relative">, z.ZodBoolean]>>;
                exprContextCritical: z.ZodOptional<z.ZodBoolean>;
                wrappedContextCritical: z.ZodOptional<z.ZodBoolean>;
                wrappedContextRegExp: z.ZodOptional<z.Schema<RegExp, z.ZodTypeDef, RegExp>>;
                exportsPresence: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["error", "warn", "auto"]>, z.ZodLiteral<false>]>>;
                importExportsPresence: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["error", "warn", "auto"]>, z.ZodLiteral<false>]>>;
                reexportExportsPresence: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["error", "warn", "auto"]>, z.ZodLiteral<false>]>>;
                strictExportPresence: z.ZodOptional<z.ZodBoolean>;
                worker: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodBoolean]>>;
                overrideStrict: z.ZodOptional<z.ZodEnum<["strict", "non-strict"]>>;
                requireAsExpression: z.ZodOptional<z.ZodBoolean>;
                requireDynamic: z.ZodOptional<z.ZodBoolean>;
                requireResolve: z.ZodOptional<z.ZodBoolean>;
                importDynamic: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            }, {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            }>>;
            "javascript/dynamic": z.ZodOptional<z.ZodObject<{
                dynamicImportMode: z.ZodOptional<z.ZodEnum<["eager", "lazy", "weak", "lazy-once"]>>;
                dynamicImportPreload: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber]>>;
                dynamicImportPrefetch: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber]>>;
                dynamicImportFetchPriority: z.ZodOptional<z.ZodEnum<["low", "high", "auto"]>>;
                importMeta: z.ZodOptional<z.ZodBoolean>;
                url: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"relative">, z.ZodBoolean]>>;
                exprContextCritical: z.ZodOptional<z.ZodBoolean>;
                wrappedContextCritical: z.ZodOptional<z.ZodBoolean>;
                wrappedContextRegExp: z.ZodOptional<z.Schema<RegExp, z.ZodTypeDef, RegExp>>;
                exportsPresence: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["error", "warn", "auto"]>, z.ZodLiteral<false>]>>;
                importExportsPresence: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["error", "warn", "auto"]>, z.ZodLiteral<false>]>>;
                reexportExportsPresence: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["error", "warn", "auto"]>, z.ZodLiteral<false>]>>;
                strictExportPresence: z.ZodOptional<z.ZodBoolean>;
                worker: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodBoolean]>>;
                overrideStrict: z.ZodOptional<z.ZodEnum<["strict", "non-strict"]>>;
                requireAsExpression: z.ZodOptional<z.ZodBoolean>;
                requireDynamic: z.ZodOptional<z.ZodBoolean>;
                requireResolve: z.ZodOptional<z.ZodBoolean>;
                importDynamic: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            }, {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            }>>;
            "javascript/esm": z.ZodOptional<z.ZodObject<{
                dynamicImportMode: z.ZodOptional<z.ZodEnum<["eager", "lazy", "weak", "lazy-once"]>>;
                dynamicImportPreload: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber]>>;
                dynamicImportPrefetch: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber]>>;
                dynamicImportFetchPriority: z.ZodOptional<z.ZodEnum<["low", "high", "auto"]>>;
                importMeta: z.ZodOptional<z.ZodBoolean>;
                url: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"relative">, z.ZodBoolean]>>;
                exprContextCritical: z.ZodOptional<z.ZodBoolean>;
                wrappedContextCritical: z.ZodOptional<z.ZodBoolean>;
                wrappedContextRegExp: z.ZodOptional<z.Schema<RegExp, z.ZodTypeDef, RegExp>>;
                exportsPresence: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["error", "warn", "auto"]>, z.ZodLiteral<false>]>>;
                importExportsPresence: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["error", "warn", "auto"]>, z.ZodLiteral<false>]>>;
                reexportExportsPresence: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["error", "warn", "auto"]>, z.ZodLiteral<false>]>>;
                strictExportPresence: z.ZodOptional<z.ZodBoolean>;
                worker: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodBoolean]>>;
                overrideStrict: z.ZodOptional<z.ZodEnum<["strict", "non-strict"]>>;
                requireAsExpression: z.ZodOptional<z.ZodBoolean>;
                requireDynamic: z.ZodOptional<z.ZodBoolean>;
                requireResolve: z.ZodOptional<z.ZodBoolean>;
                importDynamic: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            }, {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            }>>;
        }, "strict", z.ZodTypeAny, {
            css?: {
                namedExports?: boolean | undefined;
            } | undefined;
            "css/auto"?: {
                namedExports?: boolean | undefined;
            } | undefined;
            "css/module"?: {
                namedExports?: boolean | undefined;
            } | undefined;
            javascript?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            asset?: {
                dataUrlCondition?: {
                    maxSize?: number | undefined;
                } | undefined;
            } | undefined;
            "javascript/auto"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            "javascript/dynamic"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            "javascript/esm"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
        }, {
            css?: {
                namedExports?: boolean | undefined;
            } | undefined;
            "css/auto"?: {
                namedExports?: boolean | undefined;
            } | undefined;
            "css/module"?: {
                namedExports?: boolean | undefined;
            } | undefined;
            javascript?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            asset?: {
                dataUrlCondition?: {
                    maxSize?: number | undefined;
                } | undefined;
            } | undefined;
            "javascript/auto"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            "javascript/dynamic"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            "javascript/esm"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
        }>, z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>>]>>;
        generator: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            asset: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
                dataUrl: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    encoding: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodLiteral<"base64">]>>;
                    mimetype: z.ZodOptional<z.ZodString>;
                }, "strict", z.ZodTypeAny, {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                }, {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                }>, z.ZodFunction<z.ZodTuple<[z.Schema<Buffer<ArrayBufferLike>, z.ZodTypeDef, Buffer<ArrayBufferLike>>, z.ZodObject<{
                    filename: z.ZodString;
                    module: z.Schema<Module, z.ZodTypeDef, Module>;
                }, "strict", z.ZodTypeAny, {
                    module: Module;
                    filename: string;
                }, {
                    module: Module;
                    filename: string;
                }>], z.ZodUnknown>, z.ZodString>]>>;
            }, {
                emit: z.ZodOptional<z.ZodBoolean>;
                filename: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>>;
                publicPath: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"auto">, z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>]>>;
            }>, "strict", z.ZodTypeAny, {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            }, {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            }>>;
            "asset/inline": z.ZodOptional<z.ZodObject<{
                dataUrl: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    encoding: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodLiteral<"base64">]>>;
                    mimetype: z.ZodOptional<z.ZodString>;
                }, "strict", z.ZodTypeAny, {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                }, {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                }>, z.ZodFunction<z.ZodTuple<[z.Schema<Buffer<ArrayBufferLike>, z.ZodTypeDef, Buffer<ArrayBufferLike>>, z.ZodObject<{
                    filename: z.ZodString;
                    module: z.Schema<Module, z.ZodTypeDef, Module>;
                }, "strict", z.ZodTypeAny, {
                    module: Module;
                    filename: string;
                }, {
                    module: Module;
                    filename: string;
                }>], z.ZodUnknown>, z.ZodString>]>>;
            }, "strict", z.ZodTypeAny, {
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            }, {
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            }>>;
            "asset/resource": z.ZodOptional<z.ZodObject<{
                emit: z.ZodOptional<z.ZodBoolean>;
                filename: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>>;
                publicPath: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"auto">, z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[z.Schema<PathData, z.ZodTypeDef, PathData>, z.ZodOptional<z.Schema<AssetInfo, z.ZodTypeDef, AssetInfo>>], z.ZodUnknown>, z.ZodString>]>]>>;
            }, "strict", z.ZodTypeAny, {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            }, {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            }>>;
            css: z.ZodOptional<z.ZodObject<{
                exportsOnly: z.ZodOptional<z.ZodBoolean>;
                esModule: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
            }, {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
            }>>;
            "css/auto": z.ZodOptional<z.ZodObject<{
                exportsConvention: z.ZodOptional<z.ZodEnum<["as-is", "camel-case", "camel-case-only", "dashes", "dashes-only"]>>;
                exportsOnly: z.ZodOptional<z.ZodBoolean>;
                localIdentName: z.ZodOptional<z.ZodString>;
                esModule: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            }, {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            }>>;
            "css/module": z.ZodOptional<z.ZodObject<{
                exportsConvention: z.ZodOptional<z.ZodEnum<["as-is", "camel-case", "camel-case-only", "dashes", "dashes-only"]>>;
                exportsOnly: z.ZodOptional<z.ZodBoolean>;
                localIdentName: z.ZodOptional<z.ZodString>;
                esModule: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            }, {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            }>>;
            json: z.ZodOptional<z.ZodObject<{
                JSONParse: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                JSONParse?: boolean | undefined;
            }, {
                JSONParse?: boolean | undefined;
            }>>;
        }, "strict", z.ZodTypeAny, {
            css?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
            } | undefined;
            "css/auto"?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            } | undefined;
            "css/module"?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            } | undefined;
            asset?: {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            } | undefined;
            json?: {
                JSONParse?: boolean | undefined;
            } | undefined;
            "asset/inline"?: {
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            } | undefined;
            "asset/resource"?: {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            } | undefined;
        }, {
            css?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
            } | undefined;
            "css/auto"?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            } | undefined;
            "css/module"?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            } | undefined;
            asset?: {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            } | undefined;
            json?: {
                JSONParse?: boolean | undefined;
            } | undefined;
            "asset/inline"?: {
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            } | undefined;
            "asset/resource"?: {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            } | undefined;
        }>, z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>>]>>;
        noParse: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodBoolean>]>, z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.Schema<RegExp, z.ZodTypeDef, RegExp>]>, z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodBoolean>]>, "many">]>>;
    }, "strict", z.ZodTypeAny, {
        parser?: {
            css?: {
                namedExports?: boolean | undefined;
            } | undefined;
            "css/auto"?: {
                namedExports?: boolean | undefined;
            } | undefined;
            "css/module"?: {
                namedExports?: boolean | undefined;
            } | undefined;
            javascript?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            asset?: {
                dataUrlCondition?: {
                    maxSize?: number | undefined;
                } | undefined;
            } | undefined;
            "javascript/auto"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            "javascript/dynamic"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            "javascript/esm"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
        } | Record<string, Record<string, any>> | undefined;
        generator?: Record<string, Record<string, any>> | {
            css?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
            } | undefined;
            "css/auto"?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            } | undefined;
            "css/module"?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            } | undefined;
            asset?: {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            } | undefined;
            json?: {
                JSONParse?: boolean | undefined;
            } | undefined;
            "asset/inline"?: {
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            } | undefined;
            "asset/resource"?: {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            } | undefined;
        } | undefined;
        rules?: (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[] | undefined;
        defaultRules?: (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[] | undefined;
        noParse?: string | RegExp | ((args_0: string, ...args: unknown[]) => boolean) | (string | RegExp | ((args_0: string, ...args: unknown[]) => boolean))[] | undefined;
    }, {
        parser?: {
            css?: {
                namedExports?: boolean | undefined;
            } | undefined;
            "css/auto"?: {
                namedExports?: boolean | undefined;
            } | undefined;
            "css/module"?: {
                namedExports?: boolean | undefined;
            } | undefined;
            javascript?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            asset?: {
                dataUrlCondition?: {
                    maxSize?: number | undefined;
                } | undefined;
            } | undefined;
            "javascript/auto"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            "javascript/dynamic"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            "javascript/esm"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
        } | Record<string, Record<string, any>> | undefined;
        generator?: Record<string, Record<string, any>> | {
            css?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
            } | undefined;
            "css/auto"?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            } | undefined;
            "css/module"?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            } | undefined;
            asset?: {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            } | undefined;
            json?: {
                JSONParse?: boolean | undefined;
            } | undefined;
            "asset/inline"?: {
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            } | undefined;
            "asset/resource"?: {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            } | undefined;
        } | undefined;
        rules?: (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[] | undefined;
        defaultRules?: (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[] | undefined;
        noParse?: string | RegExp | ((args_0: string, ...args: unknown[]) => boolean) | (string | RegExp | ((args_0: string, ...args: unknown[]) => boolean))[] | undefined;
    }>>;
    profile: z.ZodOptional<z.ZodBoolean>;
    amd: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<false>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
    bail: z.ZodOptional<z.ZodBoolean>;
    performance: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        assetFilter: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodBoolean>>;
        hints: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["error", "warning"]>, z.ZodLiteral<false>]>>;
        maxAssetSize: z.ZodOptional<z.ZodNumber>;
        maxEntrypointSize: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        assetFilter?: ((args_0: string, ...args: unknown[]) => boolean) | undefined;
        hints?: false | "error" | "warning" | undefined;
        maxAssetSize?: number | undefined;
        maxEntrypointSize?: number | undefined;
    }, {
        assetFilter?: ((args_0: string, ...args: unknown[]) => boolean) | undefined;
        hints?: false | "error" | "warning" | undefined;
        maxAssetSize?: number | undefined;
        maxEntrypointSize?: number | undefined;
    }>, z.ZodLiteral<false>]>>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    resolve?: t.ResolveOptions | undefined;
    module?: {
        parser?: {
            css?: {
                namedExports?: boolean | undefined;
            } | undefined;
            "css/auto"?: {
                namedExports?: boolean | undefined;
            } | undefined;
            "css/module"?: {
                namedExports?: boolean | undefined;
            } | undefined;
            javascript?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            asset?: {
                dataUrlCondition?: {
                    maxSize?: number | undefined;
                } | undefined;
            } | undefined;
            "javascript/auto"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            "javascript/dynamic"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            "javascript/esm"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
        } | Record<string, Record<string, any>> | undefined;
        generator?: Record<string, Record<string, any>> | {
            css?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
            } | undefined;
            "css/auto"?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            } | undefined;
            "css/module"?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            } | undefined;
            asset?: {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            } | undefined;
            json?: {
                JSONParse?: boolean | undefined;
            } | undefined;
            "asset/inline"?: {
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            } | undefined;
            "asset/resource"?: {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            } | undefined;
        } | undefined;
        rules?: (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[] | undefined;
        defaultRules?: (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[] | undefined;
        noParse?: string | RegExp | ((args_0: string, ...args: unknown[]) => boolean) | (string | RegExp | ((args_0: string, ...args: unknown[]) => boolean))[] | undefined;
    } | undefined;
    profile?: boolean | undefined;
    cache?: boolean | undefined;
    context?: string | undefined;
    amd?: false | Record<string, any> | undefined;
    externals?: string | RegExp | Record<string, string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue> | ((args_0: t.ExternalItemFunctionData, args_1: (args_0: Error | undefined, args_1: string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue | undefined, args_2: "module" | "import" | "jsonp" | "var" | "assign" | "this" | "window" | "self" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "commonjs-static" | "amd" | "amd-require" | "umd" | "umd2" | "system" | "promise" | "module-import" | "script" | "node-commonjs" | "commonjs-import" | undefined, ...args: unknown[]) => void, ...args: unknown[]) => unknown) | ((args_0: t.ExternalItemFunctionData, ...args: unknown[]) => Promise<string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue>) | ((args_0: t.ExternalItemFunctionData, ...args: unknown[]) => string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue) | (string | RegExp | Record<string, string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue> | ((args_0: t.ExternalItemFunctionData, args_1: (args_0: Error | undefined, args_1: string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue | undefined, args_2: "module" | "import" | "jsonp" | "var" | "assign" | "this" | "window" | "self" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "commonjs-static" | "amd" | "amd-require" | "umd" | "umd2" | "system" | "promise" | "module-import" | "script" | "node-commonjs" | "commonjs-import" | undefined, ...args: unknown[]) => void, ...args: unknown[]) => unknown) | ((args_0: t.ExternalItemFunctionData, ...args: unknown[]) => Promise<string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue>) | ((args_0: t.ExternalItemFunctionData, ...args: unknown[]) => string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue))[] | undefined;
    target?: false | "async-node" | "node" | "web" | `node${number}` | `async-node${number}` | `node${number}.${number}` | `async-node${number}.${number}` | `electron${number}-main` | `electron${number}.${number}-main` | `electron${number}-renderer` | `electron${number}.${number}-renderer` | `electron${number}-preload` | `electron${number}.${number}-preload` | `nwjs${number}` | `nwjs${number}.${number}` | `node-webkit${number}` | `node-webkit${number}.${number}` | `browserslist:${string}` | "webworker" | "es3" | "es5" | "es2015" | "es2016" | "es2017" | "es2018" | "es2019" | "es2020" | "es2021" | "es2022" | "electron-main" | "electron-renderer" | "electron-preload" | "nwjs" | "node-webkit" | "browserslist" | ("async-node" | "node" | "web" | `node${number}` | `async-node${number}` | `node${number}.${number}` | `async-node${number}.${number}` | `electron${number}-main` | `electron${number}.${number}-main` | `electron${number}-renderer` | `electron${number}.${number}-renderer` | `electron${number}-preload` | `electron${number}.${number}-preload` | `nwjs${number}` | `nwjs${number}.${number}` | `node-webkit${number}` | `node-webkit${number}.${number}` | `browserslist:${string}` | "webworker" | "es3" | "es5" | "es2015" | "es2016" | "es2017" | "es2018" | "es2019" | "es2020" | "es2021" | "es2022" | "electron-main" | "electron-renderer" | "electron-preload" | "nwjs" | "node-webkit" | "browserslist")[] | undefined;
    node?: false | {
        global?: boolean | "warn" | undefined;
        __dirname?: boolean | "warn-mock" | "mock" | "eval-only" | "node-module" | undefined;
        __filename?: boolean | "warn-mock" | "mock" | "eval-only" | "node-module" | undefined;
    } | undefined;
    performance?: false | {
        assetFilter?: ((args_0: string, ...args: unknown[]) => boolean) | undefined;
        hints?: false | "error" | "warning" | undefined;
        maxAssetSize?: number | undefined;
        maxEntrypointSize?: number | undefined;
    } | undefined;
    mode?: "none" | "development" | "production" | undefined;
    experiments?: {
        css?: boolean | undefined;
        cache?: boolean | {
            type: "memory";
        } | {
            type: "persistent";
            version?: string | undefined;
            buildDependencies?: string[] | undefined;
            snapshot?: {
                immutablePaths?: (string | RegExp)[] | undefined;
                unmanagedPaths?: (string | RegExp)[] | undefined;
                managedPaths?: (string | RegExp)[] | undefined;
            } | undefined;
            storage?: {
                type: "filesystem";
                directory?: string | undefined;
            } | undefined;
        } | undefined;
        lazyCompilation?: boolean | {
            entries?: boolean | undefined;
            test?: RegExp | ((args_0: Module, ...args: unknown[]) => boolean) | undefined;
            imports?: boolean | undefined;
            client?: string | undefined;
            serverUrl?: string | undefined;
        } | undefined;
        asyncWebAssembly?: boolean | undefined;
        outputModule?: boolean | undefined;
        topLevelAwait?: boolean | undefined;
        layers?: boolean | undefined;
        incremental?: boolean | {
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
        } | undefined;
        parallelCodeSplitting?: boolean | undefined;
        futureDefaults?: boolean | undefined;
        rspackFuture?: {
            bundlerInfo?: {
                force?: boolean | ("version" | "uniqueId")[] | undefined;
                version?: string | undefined;
                bundler?: string | undefined;
            } | undefined;
        } | undefined;
        buildHttp?: {
            allowedUris: (string | RegExp)[];
            httpClient?: ((args_0: string, args_1: Record<string, string>, ...args: unknown[]) => Promise<{
                status: number;
                body: Buffer<ArrayBufferLike>;
                headers: Record<string, string>;
            }>) | undefined;
            lockfileLocation?: string | undefined;
            cacheLocation?: string | false | undefined;
            upgrade?: boolean | undefined;
        } | undefined;
        parallelLoader?: boolean | undefined;
    } | undefined;
    devtool?: false | "eval" | "cheap-source-map" | "cheap-module-source-map" | "source-map" | "inline-cheap-source-map" | "inline-cheap-module-source-map" | "inline-source-map" | "inline-nosources-cheap-source-map" | "inline-nosources-cheap-module-source-map" | "inline-nosources-source-map" | "nosources-cheap-source-map" | "nosources-cheap-module-source-map" | "nosources-source-map" | "hidden-nosources-cheap-source-map" | "hidden-nosources-cheap-module-source-map" | "hidden-nosources-source-map" | "hidden-cheap-source-map" | "hidden-cheap-module-source-map" | "hidden-source-map" | "eval-cheap-source-map" | "eval-cheap-module-source-map" | "eval-source-map" | "eval-nosources-cheap-source-map" | "eval-nosources-cheap-module-source-map" | "eval-nosources-source-map" | undefined;
    stats?: boolean | "verbose" | "none" | "normal" | "errors-only" | "errors-warnings" | "minimal" | "detailed" | "summary" | {
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
        preset?: boolean | "verbose" | "none" | "normal" | "errors-only" | "errors-warnings" | "minimal" | "detailed" | "summary" | undefined;
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
        logging?: boolean | "error" | "warn" | "info" | "log" | "verbose" | "none" | undefined;
        loggingDebug?: string | boolean | RegExp | ((args_0: string, ...args: unknown[]) => boolean) | (string | RegExp | ((args_0: string, ...args: unknown[]) => boolean))[] | undefined;
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
        excludeModules?: string | boolean | RegExp | ((args_0: string, args_1: any, args_2: any) => boolean) | (string | RegExp | ((args_0: string, args_1: any, args_2: any) => boolean))[] | undefined;
        excludeAssets?: string | RegExp | ((args_0: string, args_1: any) => boolean) | (string | RegExp | ((args_0: string, args_1: any) => boolean))[] | undefined;
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
    } | undefined;
    dependencies?: string[] | undefined;
    entry?: string | string[] | Record<string, string | string[] | {
        import: string | string[];
        runtime?: string | false | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        layer?: string | null | undefined;
        baseUri?: string | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        dependOn?: string | string[] | undefined;
        wasmLoading?: string | false | undefined;
    }> | ((...args: unknown[]) => string | string[] | Record<string, string | string[] | {
        import: string | string[];
        runtime?: string | false | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        layer?: string | null | undefined;
        baseUri?: string | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        dependOn?: string | string[] | undefined;
        wasmLoading?: string | false | undefined;
    }> | Promise<string | string[] | Record<string, string | string[] | {
        import: string | string[];
        runtime?: string | false | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        layer?: string | null | undefined;
        baseUri?: string | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        dependOn?: string | string[] | undefined;
        wasmLoading?: string | false | undefined;
    }>>) | undefined;
    infrastructureLogging?: {
        debug?: string | boolean | RegExp | ((args_0: string, ...args: unknown[]) => boolean) | (string | RegExp | ((args_0: string, ...args: unknown[]) => boolean))[] | undefined;
        colors?: boolean | undefined;
        level?: "error" | "warn" | "info" | "log" | "verbose" | "none" | undefined;
        console?: Console | undefined;
        appendOnly?: boolean | undefined;
        stream?: NodeJS.WritableStream | undefined;
    } | undefined;
    loader?: Record<string, any> | undefined;
    snapshot?: {} | undefined;
    extends?: string | string[] | undefined;
    output?: {
        module?: boolean | undefined;
        environment?: {
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
        } | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: string | string[] | {
            commonjs?: string | undefined;
            amd?: string | undefined;
            root?: string | string[] | undefined;
        } | {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        path?: string | undefined;
        wasmLoading?: string | false | undefined;
        cssHeadDataCompression?: boolean | undefined;
        auxiliaryComment?: string | {
            commonjs?: string | undefined;
            commonjs2?: string | undefined;
            amd?: string | undefined;
            root?: string | undefined;
        } | undefined;
        umdNamedDefine?: boolean | undefined;
        pathinfo?: boolean | "verbose" | undefined;
        clean?: boolean | {
            keep?: string | undefined;
        } | undefined;
        crossOriginLoading?: false | "anonymous" | "use-credentials" | undefined;
        cssFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        cssChunkFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        hotUpdateMainFilename?: string | undefined;
        hotUpdateChunkFilename?: string | undefined;
        hotUpdateGlobal?: string | undefined;
        assetModuleFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
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
        trustedTypes?: string | true | {
            policyName?: string | undefined;
            onPolicyCreationFailure?: "continue" | "stop" | undefined;
        } | undefined;
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
        devtoolModuleFilenameTemplate?: string | ((args_0: any) => any) | undefined;
        devtoolFallbackModuleFilenameTemplate?: string | ((args_0: any) => any) | undefined;
        chunkLoadTimeout?: number | undefined;
        charset?: boolean | undefined;
        compareBeforeEmit?: boolean | undefined;
    } | undefined;
    externalsType?: "module" | "import" | "jsonp" | "var" | "assign" | "this" | "window" | "self" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "commonjs-static" | "amd" | "amd-require" | "umd" | "umd2" | "system" | "promise" | "module-import" | "script" | "node-commonjs" | "commonjs-import" | undefined;
    externalsPresets?: {
        node?: boolean | undefined;
        web?: boolean | undefined;
        nwjs?: boolean | undefined;
        webAsync?: boolean | undefined;
        electron?: boolean | undefined;
        electronMain?: boolean | undefined;
        electronPreload?: boolean | undefined;
        electronRenderer?: boolean | undefined;
    } | undefined;
    ignoreWarnings?: (RegExp | ((args_0: Error, args_1: Compilation, ...args: unknown[]) => boolean))[] | undefined;
    watchOptions?: {
        aggregateTimeout?: number | undefined;
        followSymlinks?: boolean | undefined;
        ignored?: string | RegExp | string[] | undefined;
        poll?: number | boolean | undefined;
        stdin?: boolean | undefined;
    } | undefined;
    watch?: boolean | undefined;
    optimization?: {
        splitChunks?: false | {
            name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
            filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
            defaultSizeTypes?: string[] | undefined;
            cacheGroups?: Record<string, false | {
                name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
                priority?: number | undefined;
                layer?: string | RegExp | ((args_0: string | undefined) => boolean) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                type?: string | RegExp | undefined;
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                test?: string | RegExp | ((args_0: Module, args_1: {
                    moduleGraph: ModuleGraph;
                    chunkGraph: ChunkGraph;
                }, ...args: unknown[]) => boolean) | undefined;
                defaultSizeTypes?: string[] | undefined;
                minSize?: number | Record<string, number> | undefined;
                maxSize?: number | Record<string, number> | undefined;
                maxAsyncSize?: number | Record<string, number> | undefined;
                maxInitialSize?: number | Record<string, number> | undefined;
                minChunks?: number | undefined;
                usedExports?: boolean | undefined;
                maxAsyncRequests?: number | undefined;
                maxInitialRequests?: number | undefined;
                automaticNameDelimiter?: string | undefined;
                enforce?: boolean | undefined;
                reuseExistingChunk?: boolean | undefined;
                idHint?: string | undefined;
            }> | undefined;
            fallbackCacheGroup?: {
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                minSize?: number | undefined;
                maxSize?: number | undefined;
                maxAsyncSize?: number | undefined;
                maxInitialSize?: number | undefined;
                automaticNameDelimiter?: string | undefined;
            } | undefined;
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
        } | undefined;
        usedExports?: boolean | "global" | undefined;
        providedExports?: boolean | undefined;
        minimize?: boolean | undefined;
        minimizer?: (false | "" | 0 | t.RspackPluginInstance | "..." | t.WebpackPluginInstance | t.RspackPluginFunction | t.WebpackPluginFunction | null | undefined)[] | undefined;
        sideEffects?: boolean | "flag" | undefined;
        moduleIds?: "named" | "natural" | "deterministic" | undefined;
        chunkIds?: "named" | "natural" | "deterministic" | "size" | "total-size" | undefined;
        mergeDuplicateChunks?: boolean | undefined;
        runtimeChunk?: boolean | "single" | "multiple" | {
            name?: string | ((args_0: {
                name: string;
            }, ...args: unknown[]) => string) | undefined;
        } | undefined;
        removeAvailableModules?: boolean | undefined;
        removeEmptyChunks?: boolean | undefined;
        realContentHash?: boolean | undefined;
        concatenateModules?: boolean | undefined;
        innerGraph?: boolean | undefined;
        mangleExports?: boolean | "deterministic" | "size" | undefined;
        nodeEnv?: string | false | undefined;
        emitOnErrors?: boolean | undefined;
        avoidEntryIife?: boolean | undefined;
    } | undefined;
    resolveLoader?: t.ResolveOptions | undefined;
    plugins?: (false | "" | 0 | t.RspackPluginInstance | t.WebpackPluginInstance | t.RspackPluginFunction | t.WebpackPluginFunction | null | undefined)[] | undefined;
    devServer?: t.DevServer | undefined;
    bail?: boolean | undefined;
}, {
    name?: string | undefined;
    resolve?: t.ResolveOptions | undefined;
    module?: {
        parser?: {
            css?: {
                namedExports?: boolean | undefined;
            } | undefined;
            "css/auto"?: {
                namedExports?: boolean | undefined;
            } | undefined;
            "css/module"?: {
                namedExports?: boolean | undefined;
            } | undefined;
            javascript?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            asset?: {
                dataUrlCondition?: {
                    maxSize?: number | undefined;
                } | undefined;
            } | undefined;
            "javascript/auto"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            "javascript/dynamic"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
            "javascript/esm"?: {
                url?: boolean | "relative" | undefined;
                dynamicImportMode?: "eager" | "lazy" | "weak" | "lazy-once" | undefined;
                dynamicImportPreload?: number | boolean | undefined;
                dynamicImportPrefetch?: number | boolean | undefined;
                dynamicImportFetchPriority?: "auto" | "low" | "high" | undefined;
                importMeta?: boolean | undefined;
                exprContextCritical?: boolean | undefined;
                wrappedContextCritical?: boolean | undefined;
                wrappedContextRegExp?: RegExp | undefined;
                exportsPresence?: false | "error" | "warn" | "auto" | undefined;
                importExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                reexportExportsPresence?: false | "error" | "warn" | "auto" | undefined;
                strictExportPresence?: boolean | undefined;
                worker?: boolean | string[] | undefined;
                overrideStrict?: "strict" | "non-strict" | undefined;
                requireAsExpression?: boolean | undefined;
                requireDynamic?: boolean | undefined;
                requireResolve?: boolean | undefined;
                importDynamic?: boolean | undefined;
            } | undefined;
        } | Record<string, Record<string, any>> | undefined;
        generator?: Record<string, Record<string, any>> | {
            css?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
            } | undefined;
            "css/auto"?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            } | undefined;
            "css/module"?: {
                exportsOnly?: boolean | undefined;
                esModule?: boolean | undefined;
                exportsConvention?: "as-is" | "camel-case" | "camel-case-only" | "dashes" | "dashes-only" | undefined;
                localIdentName?: string | undefined;
            } | undefined;
            asset?: {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            } | undefined;
            json?: {
                JSONParse?: boolean | undefined;
            } | undefined;
            "asset/inline"?: {
                dataUrl?: {
                    mimetype?: string | undefined;
                    encoding?: false | "base64" | undefined;
                } | ((args_0: Buffer<ArrayBufferLike>, args_1: {
                    module: Module;
                    filename: string;
                }, ...args: unknown[]) => string) | undefined;
            } | undefined;
            "asset/resource"?: {
                emit?: boolean | undefined;
                publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            } | undefined;
        } | undefined;
        rules?: (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[] | undefined;
        defaultRules?: (false | "" | 0 | "..." | t.RuleSetRule | null | undefined)[] | undefined;
        noParse?: string | RegExp | ((args_0: string, ...args: unknown[]) => boolean) | (string | RegExp | ((args_0: string, ...args: unknown[]) => boolean))[] | undefined;
    } | undefined;
    profile?: boolean | undefined;
    cache?: boolean | undefined;
    context?: string | undefined;
    amd?: false | Record<string, any> | undefined;
    externals?: string | RegExp | Record<string, string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue> | ((args_0: t.ExternalItemFunctionData, args_1: (args_0: Error | undefined, args_1: string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue | undefined, args_2: "module" | "import" | "jsonp" | "var" | "assign" | "this" | "window" | "self" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "commonjs-static" | "amd" | "amd-require" | "umd" | "umd2" | "system" | "promise" | "module-import" | "script" | "node-commonjs" | "commonjs-import" | undefined, ...args: unknown[]) => void, ...args: unknown[]) => unknown) | ((args_0: t.ExternalItemFunctionData, ...args: unknown[]) => Promise<string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue>) | ((args_0: t.ExternalItemFunctionData, ...args: unknown[]) => string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue) | (string | RegExp | Record<string, string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue> | ((args_0: t.ExternalItemFunctionData, args_1: (args_0: Error | undefined, args_1: string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue | undefined, args_2: "module" | "import" | "jsonp" | "var" | "assign" | "this" | "window" | "self" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "commonjs-static" | "amd" | "amd-require" | "umd" | "umd2" | "system" | "promise" | "module-import" | "script" | "node-commonjs" | "commonjs-import" | undefined, ...args: unknown[]) => void, ...args: unknown[]) => unknown) | ((args_0: t.ExternalItemFunctionData, ...args: unknown[]) => Promise<string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue>) | ((args_0: t.ExternalItemFunctionData, ...args: unknown[]) => string | boolean | string[] | t.ExternalItemUmdValue | t.ExternalItemObjectValue))[] | undefined;
    target?: false | "async-node" | "node" | "web" | `node${number}` | `async-node${number}` | `node${number}.${number}` | `async-node${number}.${number}` | `electron${number}-main` | `electron${number}.${number}-main` | `electron${number}-renderer` | `electron${number}.${number}-renderer` | `electron${number}-preload` | `electron${number}.${number}-preload` | `nwjs${number}` | `nwjs${number}.${number}` | `node-webkit${number}` | `node-webkit${number}.${number}` | `browserslist:${string}` | "webworker" | "es3" | "es5" | "es2015" | "es2016" | "es2017" | "es2018" | "es2019" | "es2020" | "es2021" | "es2022" | "electron-main" | "electron-renderer" | "electron-preload" | "nwjs" | "node-webkit" | "browserslist" | ("async-node" | "node" | "web" | `node${number}` | `async-node${number}` | `node${number}.${number}` | `async-node${number}.${number}` | `electron${number}-main` | `electron${number}.${number}-main` | `electron${number}-renderer` | `electron${number}.${number}-renderer` | `electron${number}-preload` | `electron${number}.${number}-preload` | `nwjs${number}` | `nwjs${number}.${number}` | `node-webkit${number}` | `node-webkit${number}.${number}` | `browserslist:${string}` | "webworker" | "es3" | "es5" | "es2015" | "es2016" | "es2017" | "es2018" | "es2019" | "es2020" | "es2021" | "es2022" | "electron-main" | "electron-renderer" | "electron-preload" | "nwjs" | "node-webkit" | "browserslist")[] | undefined;
    node?: false | {
        global?: boolean | "warn" | undefined;
        __dirname?: boolean | "warn-mock" | "mock" | "eval-only" | "node-module" | undefined;
        __filename?: boolean | "warn-mock" | "mock" | "eval-only" | "node-module" | undefined;
    } | undefined;
    performance?: false | {
        assetFilter?: ((args_0: string, ...args: unknown[]) => boolean) | undefined;
        hints?: false | "error" | "warning" | undefined;
        maxAssetSize?: number | undefined;
        maxEntrypointSize?: number | undefined;
    } | undefined;
    mode?: "none" | "development" | "production" | undefined;
    experiments?: {
        css?: boolean | undefined;
        cache?: boolean | {
            type: "memory";
        } | {
            type: "persistent";
            version?: string | undefined;
            buildDependencies?: string[] | undefined;
            snapshot?: {
                immutablePaths?: (string | RegExp)[] | undefined;
                unmanagedPaths?: (string | RegExp)[] | undefined;
                managedPaths?: (string | RegExp)[] | undefined;
            } | undefined;
            storage?: {
                type: "filesystem";
                directory?: string | undefined;
            } | undefined;
        } | undefined;
        lazyCompilation?: boolean | {
            entries?: boolean | undefined;
            test?: RegExp | ((args_0: Module, ...args: unknown[]) => boolean) | undefined;
            imports?: boolean | undefined;
            client?: string | undefined;
            serverUrl?: string | undefined;
        } | undefined;
        asyncWebAssembly?: boolean | undefined;
        outputModule?: boolean | undefined;
        topLevelAwait?: boolean | undefined;
        layers?: boolean | undefined;
        incremental?: boolean | {
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
        } | undefined;
        parallelCodeSplitting?: boolean | undefined;
        futureDefaults?: boolean | undefined;
        rspackFuture?: {
            bundlerInfo?: {
                force?: boolean | ("version" | "uniqueId")[] | undefined;
                version?: string | undefined;
                bundler?: string | undefined;
            } | undefined;
        } | undefined;
        buildHttp?: {
            allowedUris: (string | RegExp)[];
            httpClient?: ((args_0: string, args_1: Record<string, string>, ...args: unknown[]) => Promise<{
                status: number;
                body: Buffer<ArrayBufferLike>;
                headers: Record<string, string>;
            }>) | undefined;
            lockfileLocation?: string | undefined;
            cacheLocation?: string | false | undefined;
            upgrade?: boolean | undefined;
        } | undefined;
        parallelLoader?: boolean | undefined;
    } | undefined;
    devtool?: false | "eval" | "cheap-source-map" | "cheap-module-source-map" | "source-map" | "inline-cheap-source-map" | "inline-cheap-module-source-map" | "inline-source-map" | "inline-nosources-cheap-source-map" | "inline-nosources-cheap-module-source-map" | "inline-nosources-source-map" | "nosources-cheap-source-map" | "nosources-cheap-module-source-map" | "nosources-source-map" | "hidden-nosources-cheap-source-map" | "hidden-nosources-cheap-module-source-map" | "hidden-nosources-source-map" | "hidden-cheap-source-map" | "hidden-cheap-module-source-map" | "hidden-source-map" | "eval-cheap-source-map" | "eval-cheap-module-source-map" | "eval-source-map" | "eval-nosources-cheap-source-map" | "eval-nosources-cheap-module-source-map" | "eval-nosources-source-map" | undefined;
    stats?: boolean | "verbose" | "none" | "normal" | "errors-only" | "errors-warnings" | "minimal" | "detailed" | "summary" | {
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
        preset?: boolean | "verbose" | "none" | "normal" | "errors-only" | "errors-warnings" | "minimal" | "detailed" | "summary" | undefined;
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
        logging?: boolean | "error" | "warn" | "info" | "log" | "verbose" | "none" | undefined;
        loggingDebug?: string | boolean | RegExp | ((args_0: string, ...args: unknown[]) => boolean) | (string | RegExp | ((args_0: string, ...args: unknown[]) => boolean))[] | undefined;
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
        excludeModules?: string | boolean | RegExp | ((args_0: string, args_1: any, args_2: any) => boolean) | (string | RegExp | ((args_0: string, args_1: any, args_2: any) => boolean))[] | undefined;
        excludeAssets?: string | RegExp | ((args_0: string, args_1: any) => boolean) | (string | RegExp | ((args_0: string, args_1: any) => boolean))[] | undefined;
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
    } | undefined;
    dependencies?: string[] | undefined;
    entry?: string | string[] | Record<string, string | string[] | {
        import: string | string[];
        runtime?: string | false | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        layer?: string | null | undefined;
        baseUri?: string | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        dependOn?: string | string[] | undefined;
        wasmLoading?: string | false | undefined;
    }> | ((...args: unknown[]) => string | string[] | Record<string, string | string[] | {
        import: string | string[];
        runtime?: string | false | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        layer?: string | null | undefined;
        baseUri?: string | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        dependOn?: string | string[] | undefined;
        wasmLoading?: string | false | undefined;
    }> | Promise<string | string[] | Record<string, string | string[] | {
        import: string | string[];
        runtime?: string | false | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        layer?: string | null | undefined;
        baseUri?: string | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        dependOn?: string | string[] | undefined;
        wasmLoading?: string | false | undefined;
    }>>) | undefined;
    infrastructureLogging?: {
        debug?: string | boolean | RegExp | ((args_0: string, ...args: unknown[]) => boolean) | (string | RegExp | ((args_0: string, ...args: unknown[]) => boolean))[] | undefined;
        colors?: boolean | undefined;
        level?: "error" | "warn" | "info" | "log" | "verbose" | "none" | undefined;
        console?: Console | undefined;
        appendOnly?: boolean | undefined;
        stream?: NodeJS.WritableStream | undefined;
    } | undefined;
    loader?: Record<string, any> | undefined;
    snapshot?: {} | undefined;
    extends?: string | string[] | undefined;
    output?: {
        module?: boolean | undefined;
        environment?: {
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
        } | undefined;
        publicPath?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        chunkLoading?: string | false | undefined;
        asyncChunks?: boolean | undefined;
        library?: string | string[] | {
            commonjs?: string | undefined;
            amd?: string | undefined;
            root?: string | string[] | undefined;
        } | {
            type: string;
            name?: string | string[] | {
                commonjs?: string | undefined;
                amd?: string | undefined;
                root?: string | string[] | undefined;
            } | undefined;
            amdContainer?: string | undefined;
            auxiliaryComment?: string | {
                commonjs?: string | undefined;
                commonjs2?: string | undefined;
                amd?: string | undefined;
                root?: string | undefined;
            } | undefined;
            export?: string | string[] | undefined;
            umdNamedDefine?: boolean | undefined;
        } | undefined;
        path?: string | undefined;
        wasmLoading?: string | false | undefined;
        cssHeadDataCompression?: boolean | undefined;
        auxiliaryComment?: string | {
            commonjs?: string | undefined;
            commonjs2?: string | undefined;
            amd?: string | undefined;
            root?: string | undefined;
        } | undefined;
        umdNamedDefine?: boolean | undefined;
        pathinfo?: boolean | "verbose" | undefined;
        clean?: boolean | {
            keep?: string | undefined;
        } | undefined;
        crossOriginLoading?: false | "anonymous" | "use-credentials" | undefined;
        cssFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        cssChunkFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
        hotUpdateMainFilename?: string | undefined;
        hotUpdateChunkFilename?: string | undefined;
        hotUpdateGlobal?: string | undefined;
        assetModuleFilename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
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
        trustedTypes?: string | true | {
            policyName?: string | undefined;
            onPolicyCreationFailure?: "continue" | "stop" | undefined;
        } | undefined;
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
        devtoolModuleFilenameTemplate?: string | ((args_0: any) => any) | undefined;
        devtoolFallbackModuleFilenameTemplate?: string | ((args_0: any) => any) | undefined;
        chunkLoadTimeout?: number | undefined;
        charset?: boolean | undefined;
        compareBeforeEmit?: boolean | undefined;
    } | undefined;
    externalsType?: "module" | "import" | "jsonp" | "var" | "assign" | "this" | "window" | "self" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "commonjs-static" | "amd" | "amd-require" | "umd" | "umd2" | "system" | "promise" | "module-import" | "script" | "node-commonjs" | "commonjs-import" | undefined;
    externalsPresets?: {
        node?: boolean | undefined;
        web?: boolean | undefined;
        nwjs?: boolean | undefined;
        webAsync?: boolean | undefined;
        electron?: boolean | undefined;
        electronMain?: boolean | undefined;
        electronPreload?: boolean | undefined;
        electronRenderer?: boolean | undefined;
    } | undefined;
    ignoreWarnings?: (RegExp | ((args_0: Error, args_1: Compilation, ...args: unknown[]) => boolean))[] | undefined;
    watchOptions?: {
        aggregateTimeout?: number | undefined;
        followSymlinks?: boolean | undefined;
        ignored?: string | RegExp | string[] | undefined;
        poll?: number | boolean | undefined;
        stdin?: boolean | undefined;
    } | undefined;
    watch?: boolean | undefined;
    optimization?: {
        splitChunks?: false | {
            name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
            filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
            chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
            defaultSizeTypes?: string[] | undefined;
            cacheGroups?: Record<string, false | {
                name?: string | false | ((args_0: Module, args_1: Chunk[], args_2: string, ...args: unknown[]) => string | undefined) | undefined;
                priority?: number | undefined;
                layer?: string | RegExp | ((args_0: string | undefined) => boolean) | undefined;
                filename?: string | ((args_0: PathData, args_1: AssetInfo | undefined, ...args: unknown[]) => string) | undefined;
                type?: string | RegExp | undefined;
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                test?: string | RegExp | ((args_0: Module, args_1: {
                    moduleGraph: ModuleGraph;
                    chunkGraph: ChunkGraph;
                }, ...args: unknown[]) => boolean) | undefined;
                defaultSizeTypes?: string[] | undefined;
                minSize?: number | Record<string, number> | undefined;
                maxSize?: number | Record<string, number> | undefined;
                maxAsyncSize?: number | Record<string, number> | undefined;
                maxInitialSize?: number | Record<string, number> | undefined;
                minChunks?: number | undefined;
                usedExports?: boolean | undefined;
                maxAsyncRequests?: number | undefined;
                maxInitialRequests?: number | undefined;
                automaticNameDelimiter?: string | undefined;
                enforce?: boolean | undefined;
                reuseExistingChunk?: boolean | undefined;
                idHint?: string | undefined;
            }> | undefined;
            fallbackCacheGroup?: {
                chunks?: RegExp | "initial" | "async" | "all" | ((args_0: Chunk, ...args: unknown[]) => boolean) | undefined;
                minSize?: number | undefined;
                maxSize?: number | undefined;
                maxAsyncSize?: number | undefined;
                maxInitialSize?: number | undefined;
                automaticNameDelimiter?: string | undefined;
            } | undefined;
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
        } | undefined;
        usedExports?: boolean | "global" | undefined;
        providedExports?: boolean | undefined;
        minimize?: boolean | undefined;
        minimizer?: (false | "" | 0 | t.RspackPluginInstance | "..." | t.WebpackPluginInstance | t.RspackPluginFunction | t.WebpackPluginFunction | null | undefined)[] | undefined;
        sideEffects?: boolean | "flag" | undefined;
        moduleIds?: "named" | "natural" | "deterministic" | undefined;
        chunkIds?: "named" | "natural" | "deterministic" | "size" | "total-size" | undefined;
        mergeDuplicateChunks?: boolean | undefined;
        runtimeChunk?: boolean | "single" | "multiple" | {
            name?: string | ((args_0: {
                name: string;
            }, ...args: unknown[]) => string) | undefined;
        } | undefined;
        removeAvailableModules?: boolean | undefined;
        removeEmptyChunks?: boolean | undefined;
        realContentHash?: boolean | undefined;
        concatenateModules?: boolean | undefined;
        innerGraph?: boolean | undefined;
        mangleExports?: boolean | "deterministic" | "size" | undefined;
        nodeEnv?: string | false | undefined;
        emitOnErrors?: boolean | undefined;
        avoidEntryIife?: boolean | undefined;
    } | undefined;
    resolveLoader?: t.ResolveOptions | undefined;
    plugins?: (false | "" | 0 | t.RspackPluginInstance | t.WebpackPluginInstance | t.RspackPluginFunction | t.WebpackPluginFunction | null | undefined)[] | undefined;
    devServer?: t.DevServer | undefined;
    bail?: boolean | undefined;
}>;
