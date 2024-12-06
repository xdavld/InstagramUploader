const CHUNK_PUBLIC_PATH = "server/pages/_document.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules__pnpm_4ed908._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__f41634._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
