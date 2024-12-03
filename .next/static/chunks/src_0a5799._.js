(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_0a5799._.js", {

"[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48_y3tgpa7lp5x3dwieeq7oascvvm$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@radix-ui+react-tabs@1.1.1_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48_y3tgpa7lp5x3dwieeq7oascvvm/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48_y3tgpa7lp5x3dwieeq7oascvvm$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root;
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48_y3tgpa7lp5x3dwieeq7oascvvm$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.List, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, this));
_c1 = TabsList;
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48_y3tgpa7lp5x3dwieeq7oascvvm$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.List.displayName;
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48_y3tgpa7lp5x3dwieeq7oascvvm$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, this));
_c3 = TabsTrigger;
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48_y3tgpa7lp5x3dwieeq7oascvvm$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger.displayName;
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48_y3tgpa7lp5x3dwieeq7oascvvm$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, this));
_c5 = TabsContent;
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48_y3tgpa7lp5x3dwieeq7oascvvm$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_refresh__.register(_c, "TabsList$React.forwardRef");
__turbopack_refresh__.register(_c1, "TabsList");
__turbopack_refresh__.register(_c2, "TabsTrigger$React.forwardRef");
__turbopack_refresh__.register(_c3, "TabsTrigger");
__turbopack_refresh__.register(_c4, "TabsContent$React.forwardRef");
__turbopack_refresh__.register(_c5, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/handle-error.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getErrorMessage": (()=>getErrorMessage),
    "showErrorToast": (()=>showErrorToast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$redirect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$rea_cukxi6gv5lli4qh5sqhgxspawa$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/sonner@1.7.0_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__rea_cukxi6gv5lli4qh5sqhgxspawa/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.23.8/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
;
;
;
function getErrorMessage(err) {
    const unknownError = "Something went wrong, please try again later.";
    if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].ZodError) {
        const errors = err.issues.map((issue)=>{
            return issue.message;
        });
        return errors.join("\n");
    } else if (err instanceof Error) {
        return err.message;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$redirect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRedirectError"])(err)) {
        throw err;
    } else {
        return unknownError;
    }
}
function showErrorToast(err) {
    const errorMessage = getErrorMessage(err);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$rea_cukxi6gv5lli4qh5sqhgxspawa$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/uploadthing.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "uploadFiles": (()=>uploadFiles),
    "useUploadThing": (()=>useUploadThing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uploadthing$2b$react$40$7$2e$1$2e$1_next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$_v6su45xxm7j225d7onz7szww3u$2f$node_modules$2f40$uploadthing$2f$react$2f$dist$2f$button$2d$client$2d$DpQoAqtf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__generateReactHelpers$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@uploadthing+react@7.1.1_next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-_v6su45xxm7j225d7onz7szww3u/node_modules/@uploadthing/react/dist/button-client-DpQoAqtf.js [app-client] (ecmascript) <export g as generateReactHelpers>");
;
const { useUploadThing, uploadFiles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uploadthing$2b$react$40$7$2e$1$2e$1_next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$_v6su45xxm7j225d7onz7szww3u$2f$node_modules$2f40$uploadthing$2f$react$2f$dist$2f$button$2d$client$2d$DpQoAqtf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__generateReactHelpers$3e$__["generateReactHelpers"])();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-upload-file.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useUploadFile": (()=>useUploadFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$rea_cukxi6gv5lli4qh5sqhgxspawa$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/sonner@1.7.0_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__rea_cukxi6gv5lli4qh5sqhgxspawa/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$handle$2d$error$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/handle-error.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadthing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/uploadthing.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
;
;
function useUploadFile(endpoint, { defaultUploadedFiles = [], ...props } = {}) {
    _s();
    const [uploadedFiles, setUploadedFiles] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(defaultUploadedFiles);
    const [progresses, setProgresses] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({});
    const [isUploading, setIsUploading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(false);
    async function onUpload(files) {
        setIsUploading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadthing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFiles"])(endpoint, {
                ...props,
                files,
                onUploadProgress: ({ file, progress })=>{
                    setProgresses((prev)=>{
                        return {
                            ...prev,
                            [file.name]: progress
                        };
                    });
                }
            });
            setUploadedFiles((prev)=>prev ? [
                    ...prev,
                    ...res
                ] : res);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$rea_cukxi6gv5lli4qh5sqhgxspawa$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$handle$2d$error$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMessage"])(err));
        } finally{
            setProgresses({});
            setIsUploading(false);
        }
    }
    return {
        onUpload,
        uploadedFiles,
        progresses,
        isUploading
    };
}
_s(useUploadFile, "JoBbTZ9zd85USiyOFDO1iMUMQ+E=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-callback-ref.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useCallbackRef": (()=>useCallbackRef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
/**
 * @see https://github.com/radix-ui/primitives/blob/main/packages/react/use-callback-ref/src/useCallbackRef.tsx
 */ /**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */ function useCallbackRef(callback) {
    _s();
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(callback);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useCallbackRef.useEffect": ()=>{
            callbackRef.current = callback;
        }
    }["useCallbackRef.useEffect"]);
    // https://github.com/facebook/react/issues/19240
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useCallbackRef.useMemo": ()=>({
                "useCallbackRef.useMemo": (...args)=>callbackRef.current?.(...args)
            })["useCallbackRef.useMemo"]
    }["useCallbackRef.useMemo"], []);
}
_s(useCallbackRef, "SmGaH/nKwK47PDNwL1mpt0Q/3Os=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-controllable-state.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useControllableState": (()=>useControllableState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$callback$2d$ref$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-callback-ref.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
;
;
function useControllableState({ prop, defaultProp, onChange = ()=>{} }) {
    _s();
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== undefined;
    const value = isControlled ? prop : uncontrolledProp;
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$callback$2d$ref$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onChange);
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useControllableState.useCallback[setValue]": (nextValue)=>{
            if (isControlled) {
                const setter = nextValue;
                const value = typeof nextValue === "function" ? setter(prop) : nextValue;
                if (value !== prop) handleChange(value);
            } else {
                setUncontrolledProp(nextValue);
            }
        }
    }["useControllableState.useCallback[setValue]"], [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value,
        setValue
    ];
}
_s(useControllableState, "pnf37/jPbWy5FyBo0SyW8qgIfGA=", false, function() {
    return [
        useUncontrolledState,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$callback$2d$ref$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"]
    ];
});
function useUncontrolledState({ defaultProp, onChange }) {
    _s1();
    const uncontrolledState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(value);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$callback$2d$ref$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useUncontrolledState.useEffect": ()=>{
            if (prevValueRef.current !== value) {
                handleChange(value);
                prevValueRef.current = value;
            }
        }
    }["useUncontrolledState.useEffect"], [
        value,
        prevValueRef,
        handleChange
    ]);
    return uncontrolledState;
}
_s1(useUncontrolledState, "WYmWcqnKHe65L/fGBBy1wqlZl58=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$callback$2d$ref$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"]
    ];
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/progress.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Progress": (()=>Progress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90_vf46aklzle54jtc4cbehmk5day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@radix-ui+react-progress@1.1.0_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90_vf46aklzle54jtc4cbehmk5day/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90_vf46aklzle54jtc4cbehmk5day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90_vf46aklzle54jtc4cbehmk5day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Indicator, {
            className: "size-full flex-1 bg-primary transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/progress.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/progress.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = Progress;
Progress.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90_vf46aklzle54jtc4cbehmk5day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root.displayName;
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Progress$React.forwardRef");
__turbopack_refresh__.register(_c1, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ScrollArea": (()=>ScrollArea),
    "ScrollBar": (()=>ScrollBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9_mqjszulo7jeybi663se6ieqbga$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@radix-ui+react-scroll-area@1.2.1_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9_mqjszulo7jeybi663se6ieqbga/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const ScrollArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9_mqjszulo7jeybi663se6ieqbga$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9_mqjszulo7jeybi663se6ieqbga$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Viewport, {
                className: "size-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9_mqjszulo7jeybi663se6ieqbga$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Corner, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = ScrollArea;
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9_mqjszulo7jeybi663se6ieqbga$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root.displayName;
const ScrollBar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9_mqjszulo7jeybi663se6ieqbga$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ScrollAreaScrollbar, {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9_mqjszulo7jeybi663se6ieqbga$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ScrollAreaThumb, {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this));
_c2 = ScrollBar;
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9_mqjszulo7jeybi663se6ieqbga$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ScrollAreaScrollbar.displayName;
;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "ScrollArea$React.forwardRef");
__turbopack_refresh__.register(_c1, "ScrollArea");
__turbopack_refresh__.register(_c2, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/file-uploader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "FileUploader": (()=>FileUploader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$rea_cukxi6gv5lli4qh5sqhgxspawa$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/sonner@1.7.0_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__rea_cukxi6gv5lli4qh5sqhgxspawa/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$controllable$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-controllable-state.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$5_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-dropzone@14.3.5_react@19.0.0-rc-fb9a90fa48-20240614/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$462$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.462.0_react@19.0.0-rc-fb9a90fa48-20240614/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$462$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.462.0_react@19.0.0-rc-fb9a90fa48-20240614/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$462$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.462.0_react@19.0.0-rc-fb9a90fa48-20240614/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function FileUploader(props) {
    _s();
    const { value: valueProp, onValueChange, onUpload, progresses, accept = {
        "image/*": []
    }, maxSize = 1024 * 1024 * 2, maxFileCount = 1, multiple = false, disabled = false, className, ...dropzoneProps } = props;
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$controllable$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        onChange: onValueChange
    });
    const onDrop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "FileUploader.useCallback[onDrop]": (acceptedFiles, rejectedFiles)=>{
            if (!multiple && maxFileCount === 1 && acceptedFiles.length > 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$rea_cukxi6gv5lli4qh5sqhgxspawa$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Cannot upload more than 1 file at a time");
                return;
            }
            if ((files?.length ?? 0) + acceptedFiles.length > maxFileCount) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$rea_cukxi6gv5lli4qh5sqhgxspawa$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Cannot upload more than ${maxFileCount} files`);
                return;
            }
            const newFiles = acceptedFiles.map({
                "FileUploader.useCallback[onDrop].newFiles": (file)=>Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
            }["FileUploader.useCallback[onDrop].newFiles"]);
            const updatedFiles = files ? [
                ...files,
                ...newFiles
            ] : newFiles;
            setFiles(updatedFiles);
            if (rejectedFiles.length > 0) {
                rejectedFiles.forEach({
                    "FileUploader.useCallback[onDrop]": ({ file })=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$rea_cukxi6gv5lli4qh5sqhgxspawa$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`File ${file.name} was rejected`);
                    }
                }["FileUploader.useCallback[onDrop]"]);
            }
            if (onUpload && updatedFiles.length > 0 && updatedFiles.length <= maxFileCount) {
                const target = updatedFiles.length > 0 ? `${updatedFiles.length} files` : `file`;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$rea_cukxi6gv5lli4qh5sqhgxspawa$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].promise(onUpload(updatedFiles), {
                    loading: `Uploading ${target}...`,
                    success: {
                        "FileUploader.useCallback[onDrop]": ()=>{
                            setFiles([]);
                            return `${target} uploaded`;
                        }
                    }["FileUploader.useCallback[onDrop]"],
                    error: `Failed to upload ${target}`
                });
            }
        }
    }["FileUploader.useCallback[onDrop]"], [
        files,
        maxFileCount,
        multiple,
        onUpload,
        setFiles
    ]);
    function onRemove(index) {
        if (!files) return;
        const newFiles = files.filter((_, i)=>i !== index);
        setFiles(newFiles);
        onValueChange?.(newFiles);
    }
    // Revoke preview url when component unmounts
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "FileUploader.useEffect": ()=>{
            return ({
                "FileUploader.useEffect": ()=>{
                    if (!files) return;
                    files.forEach({
                        "FileUploader.useEffect": (file)=>{
                            if (isFileWithPreview(file)) {
                                URL.revokeObjectURL(file.preview);
                            }
                        }
                    }["FileUploader.useEffect"]);
                }
            })["FileUploader.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["FileUploader.useEffect"], []);
    const isDisabled = disabled || (files?.length ?? 0) >= maxFileCount;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col gap-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$5_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                onDrop: onDrop,
                accept: accept,
                maxSize: maxSize,
                maxFiles: maxFileCount,
                multiple: maxFileCount > 1 || multiple,
                disabled: isDisabled,
                children: ({ getRootProps, getInputProps, isDragActive })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ...getRootProps(),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center transition hover:bg-muted/25", "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", isDragActive && "border-muted-foreground/50", isDisabled && "pointer-events-none opacity-60", className),
                        ...dropzoneProps,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ...getInputProps()
                            }, void 0, false, {
                                fileName: "[project]/src/components/file-uploader.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            isDragActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center gap-4 sm:px-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-full border border-dashed p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$462$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "size-7 text-muted-foreground",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/file-uploader.tsx",
                                            lineNumber: 215,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/file-uploader.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-muted-foreground",
                                        children: "Drop the files here"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/file-uploader.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/file-uploader.tsx",
                                lineNumber: 213,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center gap-4 sm:px-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-full border border-dashed p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$462$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "size-7 text-muted-foreground",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/file-uploader.tsx",
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/file-uploader.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-px",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-muted-foreground",
                                                children: [
                                                    "Drag ",
                                                    `'n'`,
                                                    " drop files here, or click to select files"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/file-uploader.tsx",
                                                lineNumber: 233,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground/70",
                                                children: [
                                                    "You can upload",
                                                    maxFileCount > 1 ? ` ${maxFileCount === Infinity ? "multiple" : maxFileCount}
                      files (up to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBytes"])(maxSize)} each)` : ` a file with ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBytes"])(maxSize)}`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/file-uploader.tsx",
                                                lineNumber: 236,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/file-uploader.tsx",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/file-uploader.tsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/file-uploader.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/file-uploader.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            files?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                className: "h-fit w-full px-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex max-h-48 flex-col gap-4",
                    children: files?.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileCard, {
                            file: file,
                            onRemove: ()=>onRemove(index),
                            progress: progresses?.[file.name]
                        }, index, false, {
                            fileName: "[project]/src/components/file-uploader.tsx",
                            lineNumber: 253,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/file-uploader.tsx",
                    lineNumber: 251,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/file-uploader.tsx",
                lineNumber: 250,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/file-uploader.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_s(FileUploader, "CfSa2i6lEKjSPUdrTU/UA3jyrqw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$controllable$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"]
    ];
});
_c = FileUploader;
function FileCard({ file, progress, onRemove }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center gap-2.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 gap-2.5",
                children: [
                    isFileWithPreview(file) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilePreview, {
                        file: file
                    }, void 0, false, {
                        fileName: "[project]/src/components/file-uploader.tsx",
                        lineNumber: 277,
                        columnNumber: 36
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-px",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "line-clamp-1 text-sm font-medium text-foreground/80",
                                        children: file.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/file-uploader.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBytes"])(file.size)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/file-uploader.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/file-uploader.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            progress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                value: progress
                            }, void 0, false, {
                                fileName: "[project]/src/components/file-uploader.tsx",
                                lineNumber: 287,
                                columnNumber: 23
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/file-uploader.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/file-uploader.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    variant: "outline",
                    size: "icon",
                    className: "size-7",
                    onClick: onRemove,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$462$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "size-4",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/file-uploader.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Remove file"
                        }, void 0, false, {
                            fileName: "[project]/src/components/file-uploader.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/file-uploader.tsx",
                    lineNumber: 291,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/file-uploader.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/file-uploader.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, this);
}
_c1 = FileCard;
function isFileWithPreview(file) {
    return "preview" in file && typeof file.preview === "string";
}
function FilePreview({ file }) {
    if (file.type.startsWith("image/")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: file.preview,
            alt: file.name,
            width: 48,
            height: 48,
            loading: "lazy",
            className: "aspect-square shrink-0 rounded-md object-cover"
        }, void 0, false, {
            fileName: "[project]/src/components/file-uploader.tsx",
            lineNumber: 317,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$462$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
        className: "size-10 text-muted-foreground",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/file-uploader.tsx",
        lineNumber: 329,
        columnNumber: 5
    }, this);
}
_c2 = FilePreview;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "FileUploader");
__turbopack_refresh__.register(_c1, "FileCard");
__turbopack_refresh__.register(_c2, "FilePreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 48,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_refresh__.register(_c, "Card$React.forwardRef");
__turbopack_refresh__.register(_c1, "Card");
__turbopack_refresh__.register(_c2, "CardHeader$React.forwardRef");
__turbopack_refresh__.register(_c3, "CardHeader");
__turbopack_refresh__.register(_c4, "CardTitle$React.forwardRef");
__turbopack_refresh__.register(_c5, "CardTitle");
__turbopack_refresh__.register(_c6, "CardDescription$React.forwardRef");
__turbopack_refresh__.register(_c7, "CardDescription");
__turbopack_refresh__.register(_c8, "CardContent$React.forwardRef");
__turbopack_refresh__.register(_c9, "CardContent");
__turbopack_refresh__.register(_c10, "CardFooter$React.forwardRef");
__turbopack_refresh__.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/empty-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "EmptyCard": (()=>EmptyCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$462$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.462.0_react@19.0.0-rc-fb9a90fa48-20240614/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
;
;
;
;
function EmptyCard({ title, description, icon: Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$462$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], action, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full flex-col items-center justify-center space-y-6 bg-transparent p-16", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mr-4 shrink-0 rounded-full border border-dashed p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "size-8 text-muted-foreground",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/components/empty-card.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/empty-card.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-1.5 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/empty-card.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/empty-card.tsx",
                        lineNumber: 34,
                        columnNumber: 24
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/empty-card.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            action ? action : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/empty-card.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = EmptyCard;
var _c;
__turbopack_refresh__.register(_c, "EmptyCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_components/uploaded-files-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "UploadedFilesCard": (()=>UploadedFilesCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$empty$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/empty-card.tsx [app-client] (ecmascript)");
;
;
;
;
;
function UploadedFilesCard({ uploadedFiles }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Uploaded files"
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/uploaded-files-card.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "View the uploaded files here"
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/uploaded-files-card.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/uploaded-files-card.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: uploadedFiles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-max space-x-2.5",
                            children: uploadedFiles.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-video w-64",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: file.url,
                                        alt: file.name,
                                        fill: true,
                                        sizes: "(min-width: 640px) 640px, 100vw",
                                        loading: "lazy",
                                        className: "rounded-md object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/_components/uploaded-files-card.tsx",
                                        lineNumber: 31,
                                        columnNumber: 19
                                    }, this)
                                }, file.key, false, {
                                    fileName: "[project]/src/app/_components/uploaded-files-card.tsx",
                                    lineNumber: 30,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/uploaded-files-card.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollBar"], {
                            orientation: "horizontal"
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/uploaded-files-card.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/_components/uploaded-files-card.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$empty$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyCard"], {
                    title: "No files uploaded",
                    description: "Upload some files to see them here",
                    className: "w-full"
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/uploaded-files-card.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/_components/uploaded-files-card.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/uploaded-files-card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = UploadedFilesCard;
var _c;
__turbopack_refresh__.register(_c, "UploadedFilesCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_components/basic-uploader-demo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "BasicUploaderDemo": (()=>BasicUploaderDemo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$upload$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-upload-file.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$file$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/file-uploader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$uploaded$2d$files$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/uploaded-files-card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function BasicUploaderDemo() {
    _s();
    const { onUpload, progresses, uploadedFiles, isUploading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$upload$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUploadFile"])("imageUploader", {
        defaultUploadedFiles: []
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$file$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileUploader"], {
                maxFileCount: 4,
                maxSize: 4 * 1024 * 1024,
                progresses: progresses,
                onUpload: onUpload,
                disabled: isUploading
            }, void 0, false, {
                fileName: "[project]/src/app/_components/basic-uploader-demo.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$uploaded$2d$files$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadedFilesCard"], {
                uploadedFiles: uploadedFiles
            }, void 0, false, {
                fileName: "[project]/src/app/_components/basic-uploader-demo.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/basic-uploader-demo.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(BasicUploaderDemo, "b1uJz+jpTHHMLIv2X9IIO99lN38=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$upload$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUploadFile"]
    ];
});
_c = BasicUploaderDemo;
var _c;
__turbopack_refresh__.register(_c, "BasicUploaderDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@radix-ui+react-dialog@1.1.2_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$462$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.462.0_react@19.0.0-rc-fb9a90fa48-20240614/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root;
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger;
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Portal;
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Close;
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Overlay, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, this));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Overlay.displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content, {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Close, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$462$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content.displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this);
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this);
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Title, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Title.displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Description, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, this));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa_d7d6lxdlx5rkqvknjkw5bj3uta$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Description.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_refresh__.register(_c, "DialogOverlay");
__turbopack_refresh__.register(_c1, "DialogContent$React.forwardRef");
__turbopack_refresh__.register(_c2, "DialogContent");
__turbopack_refresh__.register(_c3, "DialogHeader");
__turbopack_refresh__.register(_c4, "DialogFooter");
__turbopack_refresh__.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_refresh__.register(_c6, "DialogTitle");
__turbopack_refresh__.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_refresh__.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_components/dialog-uploader-demo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DialogUploaderDemo": (()=>DialogUploaderDemo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$file$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/file-uploader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function DialogUploaderDemo() {
    _s();
    const [files, setFiles] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState([]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    children: [
                        "Upload files ",
                        files.length > 0 && `(${files.length})`
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/_components/dialog-uploader-demo.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/_components/dialog-uploader-demo.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Upload files"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/dialog-uploader-demo.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                children: "Drag and drop your files here or click to browse."
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/dialog-uploader-demo.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/_components/dialog-uploader-demo.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$file$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileUploader"], {
                        maxFileCount: 8,
                        maxSize: 8 * 1024 * 1024,
                        onValueChange: setFiles
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/dialog-uploader-demo.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/dialog-uploader-demo.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/dialog-uploader-demo.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(DialogUploaderDemo, "aPldHTVBr/g7fY6pAkrAgkA0SoA=");
_c = DialogUploaderDemo;
var _c;
__turbopack_refresh__.register(_c, "DialogUploaderDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$label$40$2$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa4_kps5jfyci72zgslyovhen7m2p4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@radix-ui+react-label@2.1.0_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa4_kps5jfyci72zgslyovhen7m2p4/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$label$40$2$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa4_kps5jfyci72zgslyovhen7m2p4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$label$40$2$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa4_kps5jfyci72zgslyovhen7m2p4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root.displayName;
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Label$React.forwardRef");
__turbopack_refresh__.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/form.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Form": (()=>Form),
    "FormControl": (()=>FormControl),
    "FormDescription": (()=>FormDescription),
    "FormField": (()=>FormField),
    "FormItem": (()=>FormItem),
    "FormLabel": (()=>FormLabel),
    "FormMessage": (()=>FormMessage),
    "useFormField": (()=>useFormField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$53$2e$2_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-hook-form@7.53.2_react@19.0.0-rc-fb9a90fa48-20240614/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_types$2d$react$40$19$2e$0$2e$0$2d$rc$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.1.0_react@19.0.0-rc-fb9a90fa48-20240614_types-react@19.0.0-rc.1/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature(), _s4 = __turbopack_refresh__.signature(), _s5 = __turbopack_refresh__.signature();
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$53$2e$2_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"];
const FormFieldContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$53$2e$2_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
};
_c = FormField;
const useFormField = ()=>{
    _s();
    const fieldContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(FormFieldContext);
    const itemContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(FormItemContext);
    const { getFieldState, formState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$53$2e$2_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
_s(useFormField, "eRzki+X5SldVDcAh3BokmSZW9NU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$53$2e$2_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
const FormItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({});
const FormItem = /*#__PURE__*/ _s1(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c1 = _s1(({ className, ...props }, ref)=>{
    _s1();
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useId();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=")), "WhsuKpSQZEWeFcB7gWlfDRQktoQ=");
_c2 = FormItem;
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ _s2(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c3 = _s2(({ className, ...props }, ref)=>{
    _s2();
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(error && "text-destructive", className),
        htmlFor: formItemId,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}, "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
})), "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
});
_c4 = FormLabel;
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ _s3(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c5 = _s3(({ ...props }, ref)=>{
    _s3();
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_types$2d$react$40$19$2e$0$2e$0$2d$rc$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}, "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
})), "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
});
_c6 = FormControl;
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ _s4(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c7 = _s4(({ className, ...props }, ref)=>{
    _s4();
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formDescriptionId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[0.8rem] text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}, "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
})), "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
});
_c8 = FormDescription;
FormDescription.displayName = "FormDescription";
const FormMessage = /*#__PURE__*/ _s5(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c9 = _s5(({ className, children, ...props }, ref)=>{
    _s5();
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formMessageId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[0.8rem] font-medium text-destructive", className),
        ...props,
        children: body
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}, "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
})), "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
});
_c10 = FormMessage;
FormMessage.displayName = "FormMessage";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_refresh__.register(_c, "FormField");
__turbopack_refresh__.register(_c1, "FormItem$React.forwardRef");
__turbopack_refresh__.register(_c2, "FormItem");
__turbopack_refresh__.register(_c3, "FormLabel$React.forwardRef");
__turbopack_refresh__.register(_c4, "FormLabel");
__turbopack_refresh__.register(_c5, "FormControl$React.forwardRef");
__turbopack_refresh__.register(_c6, "FormControl");
__turbopack_refresh__.register(_c7, "FormDescription$React.forwardRef");
__turbopack_refresh__.register(_c8, "FormDescription");
__turbopack_refresh__.register(_c9, "FormMessage$React.forwardRef");
__turbopack_refresh__.register(_c10, "FormMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_components/react-hook-form-demo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ReactHookFormDemo": (()=>ReactHookFormDemo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__reac_3oppydrhzshrauvez7b6rgn7pi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hookform$2b$resolvers$40$3$2e$9$2e$1_react$2d$hook$2d$form$40$7$2e$53$2e$2_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@hookform+resolvers@3.9.1_react-hook-form@7.53.2_react@19.0.0-rc-fb9a90fa48-20240614_/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$rea_cukxi6gv5lli4qh5sqhgxspawa$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/sonner@1.7.0_react-dom@19.0.0-rc-fb9a90fa48-20240614_react@19.0.0-rc-fb9a90fa48-20240614__rea_cukxi6gv5lli4qh5sqhgxspawa/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$handle$2d$error$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/handle-error.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$upload$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-upload-file.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$file$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/file-uploader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$uploaded$2d$files$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/uploaded-files-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$53$2e$2_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-hook-form@7.53.2_react@19.0.0-rc-fb9a90fa48-20240614/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.23.8/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    images: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].instanceof(File))
});
function ReactHookFormDemo() {
    _s();
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(false);
    const { onUpload, progresses, uploadedFiles, isUploading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$upload$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUploadFile"])("imageUploader", {
        defaultUploadedFiles: []
    });
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$53$2e$2_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hookform$2b$resolvers$40$3$2e$9$2e$1_react$2d$hook$2d$form$40$7$2e$53$2e$2_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(schema),
        defaultValues: {
            images: []
        }
    });
    function onSubmit(input) {
        setLoading(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$rea_cukxi6gv5lli4qh5sqhgxspawa$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].promise(onUpload(input.images), {
            loading: "Uploading images...",
            success: ()=>{
                form.reset();
                setLoading(false);
                return "Images uploaded";
            },
            error: (err)=>{
                setLoading(false);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$handle$2d$error$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMessage"])(err);
            }
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
        ...form,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: form.handleSubmit(onSubmit),
            className: "flex w-full flex-col gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                    control: form.control,
                    name: "images",
                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                            children: "Images"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/_components/react-hook-form-demo.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$file$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileUploader"], {
                                                value: field.value,
                                                onValueChange: field.onChange,
                                                maxFileCount: 4,
                                                maxSize: 4 * 1024 * 1024,
                                                progresses: progresses,
                                                // pass the onUpload function here for direct upload
                                                // onUpload={uploadFiles}
                                                disabled: isUploading
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/_components/react-hook-form-demo.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/_components/react-hook-form-demo.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                            fileName: "[project]/src/app/_components/react-hook-form-demo.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/_components/react-hook-form-demo.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, void 0),
                                uploadedFiles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$uploaded$2d$files$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadedFilesCard"], {
                                    uploadedFiles: uploadedFiles
                                }, void 0, false, {
                                    fileName: "[project]/src/app/_components/react-hook-form-demo.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, void 0) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/_components/react-hook-form-demo.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/react-hook-form-demo.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614_$5f$reac_3oppydrhzshrauvez7b6rgn7pi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "w-fit",
                    disabled: loading,
                    children: "Save"
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/react-hook-form-demo.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/_components/react-hook-form-demo.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/_components/react-hook-form-demo.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(ReactHookFormDemo, "aB+yEpgBWQTqEyez4UwEZQ7qs/M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$upload$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUploadFile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$53$2e$2_react$40$19$2e$0$2e$0$2d$rc$2d$fb9a90fa48$2d$20240614$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ReactHookFormDemo;
var _c;
__turbopack_refresh__.register(_c, "ReactHookFormDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_0a5799._.js.map