(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/c53f3_effect_dist_esm_24cd44._.js", {

"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/version.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getCurrentVersion": (()=>getCurrentVersion),
    "setCurrentVersion": (()=>setCurrentVersion)
});
let moduleVersion = "3.10.3";
const getCurrentVersion = ()=>moduleVersion;
const setCurrentVersion = (version)=>{
    moduleVersion = version;
}; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * Tests if a value is a `function`.
 *
 * @param input - The value to test.
 *
 * @example
 * import { isFunction } from "effect/Predicate"
 *
 * assert.deepStrictEqual(isFunction(isFunction), true)
 * assert.deepStrictEqual(isFunction("function"), false)
 *
 * @category guards
 * @since 2.0.0
 */ __turbopack_esm__({
    "SK": (()=>SK),
    "absurd": (()=>absurd),
    "apply": (()=>apply),
    "compose": (()=>compose),
    "constFalse": (()=>constFalse),
    "constNull": (()=>constNull),
    "constTrue": (()=>constTrue),
    "constUndefined": (()=>constUndefined),
    "constVoid": (()=>constVoid),
    "constant": (()=>constant),
    "dual": (()=>dual),
    "flip": (()=>flip),
    "flow": (()=>flow),
    "hole": (()=>hole),
    "identity": (()=>identity),
    "isFunction": (()=>isFunction),
    "pipe": (()=>pipe),
    "satisfies": (()=>satisfies),
    "tupled": (()=>tupled),
    "unsafeCoerce": (()=>unsafeCoerce),
    "untupled": (()=>untupled)
});
const isFunction = (input)=>typeof input === "function";
const dual = function(arity, body) {
    if (typeof arity === "function") {
        return function() {
            if (arity(arguments)) {
                // @ts-expect-error
                return body.apply(this, arguments);
            }
            return (self)=>body(self, ...arguments);
        };
    }
    switch(arity){
        case 0:
        case 1:
            throw new RangeError(`Invalid arity ${arity}`);
        case 2:
            return function(a, b) {
                if (arguments.length >= 2) {
                    return body(a, b);
                }
                return function(self) {
                    return body(self, a);
                };
            };
        case 3:
            return function(a, b, c) {
                if (arguments.length >= 3) {
                    return body(a, b, c);
                }
                return function(self) {
                    return body(self, a, b);
                };
            };
        case 4:
            return function(a, b, c, d) {
                if (arguments.length >= 4) {
                    return body(a, b, c, d);
                }
                return function(self) {
                    return body(self, a, b, c);
                };
            };
        case 5:
            return function(a, b, c, d, e) {
                if (arguments.length >= 5) {
                    return body(a, b, c, d, e);
                }
                return function(self) {
                    return body(self, a, b, c, d);
                };
            };
        default:
            return function() {
                if (arguments.length >= arity) {
                    // @ts-expect-error
                    return body.apply(this, arguments);
                }
                const args = arguments;
                return function(self) {
                    return body(self, ...args);
                };
            };
    }
};
const apply = (a)=>(self)=>self(a);
const identity = (a)=>a;
const satisfies = ()=>(b)=>b;
const unsafeCoerce = identity;
const constant = (value)=>()=>value;
const constTrue = /*#__PURE__*/ constant(true);
const constFalse = /*#__PURE__*/ constant(false);
const constNull = /*#__PURE__*/ constant(null);
const constUndefined = /*#__PURE__*/ constant(undefined);
const constVoid = constUndefined;
const flip = (f)=>(...b)=>(...a)=>f(...a)(...b);
const compose = /*#__PURE__*/ dual(2, (ab, bc)=>(a)=>bc(ab(a)));
const absurd = (_)=>{
    throw new Error("Called `absurd` function which should be uncallable");
};
const tupled = (f)=>(a)=>f(...a);
const untupled = (f)=>(...a)=>f(a);
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
    switch(arguments.length){
        case 1:
            return a;
        case 2:
            return ab(a);
        case 3:
            return bc(ab(a));
        case 4:
            return cd(bc(ab(a)));
        case 5:
            return de(cd(bc(ab(a))));
        case 6:
            return ef(de(cd(bc(ab(a)))));
        case 7:
            return fg(ef(de(cd(bc(ab(a))))));
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        default:
            {
                let ret = arguments[0];
                for(let i = 1; i < arguments.length; i++){
                    ret = arguments[i](ret);
                }
                return ret;
            }
    }
}
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch(arguments.length){
        case 1:
            return ab;
        case 2:
            return function() {
                return bc(ab.apply(this, arguments));
            };
        case 3:
            return function() {
                return cd(bc(ab.apply(this, arguments)));
            };
        case 4:
            return function() {
                return de(cd(bc(ab.apply(this, arguments))));
            };
        case 5:
            return function() {
                return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
        case 6:
            return function() {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
        case 7:
            return function() {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
        case 8:
            return function() {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
        case 9:
            return function() {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
    }
    return;
}
const hole = /*#__PURE__*/ unsafeCoerce(absurd);
const SK = (_, b)=>b; //# sourceMappingURL=Function.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * @since 2.0.0
 */ __turbopack_esm__({
    "all": (()=>all),
    "and": (()=>and),
    "compose": (()=>compose),
    "eqv": (()=>eqv),
    "every": (()=>every),
    "hasProperty": (()=>hasProperty),
    "implies": (()=>implies),
    "isBigInt": (()=>isBigInt),
    "isBoolean": (()=>isBoolean),
    "isDate": (()=>isDate),
    "isError": (()=>isError),
    "isFunction": (()=>isFunction),
    "isIterable": (()=>isIterable),
    "isMap": (()=>isMap),
    "isNever": (()=>isNever),
    "isNotNull": (()=>isNotNull),
    "isNotNullable": (()=>isNotNullable),
    "isNotUndefined": (()=>isNotUndefined),
    "isNull": (()=>isNull),
    "isNullable": (()=>isNullable),
    "isNumber": (()=>isNumber),
    "isObject": (()=>isObject),
    "isPromise": (()=>isPromise),
    "isPromiseLike": (()=>isPromiseLike),
    "isReadonlyRecord": (()=>isReadonlyRecord),
    "isRecord": (()=>isRecord),
    "isRecordOrArray": (()=>isRecordOrArray),
    "isRegExp": (()=>isRegExp),
    "isSet": (()=>isSet),
    "isString": (()=>isString),
    "isSymbol": (()=>isSymbol),
    "isTagged": (()=>isTagged),
    "isTruthy": (()=>isTruthy),
    "isTupleOf": (()=>isTupleOf),
    "isTupleOfAtLeast": (()=>isTupleOfAtLeast),
    "isUint8Array": (()=>isUint8Array),
    "isUndefined": (()=>isUndefined),
    "isUnknown": (()=>isUnknown),
    "mapInput": (()=>mapInput),
    "nand": (()=>nand),
    "nor": (()=>nor),
    "not": (()=>not),
    "or": (()=>or),
    "product": (()=>product),
    "productMany": (()=>productMany),
    "some": (()=>some),
    "struct": (()=>struct),
    "tuple": (()=>tuple),
    "xor": (()=>xor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
;
const mapInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>(b)=>self(f(b)));
const isTupleOf = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>self.length === n);
const isTupleOfAtLeast = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>self.length >= n);
const isTruthy = (input)=>!!input;
const isSet = (input)=>input instanceof Set;
const isMap = (input)=>input instanceof Map;
const isString = (input)=>typeof input === "string";
const isNumber = (input)=>typeof input === "number";
const isBoolean = (input)=>typeof input === "boolean";
const isBigInt = (input)=>typeof input === "bigint";
const isSymbol = (input)=>typeof input === "symbol";
const isFunction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"];
const isUndefined = (input)=>input === undefined;
const isNotUndefined = (input)=>input !== undefined;
const isNull = (input)=>input === null;
const isNotNull = (input)=>input !== null;
const isNever = (_)=>false;
const isUnknown = (_)=>true;
const isRecordOrArray = (input)=>typeof input === "object" && input !== null;
const isObject = (input)=>isRecordOrArray(input) || isFunction(input);
const hasProperty = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, property)=>isObject(self) && property in self);
const isTagged = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, tag)=>hasProperty(self, "_tag") && self["_tag"] === tag);
const isNullable = (input)=>input === null || input === undefined;
const isNotNullable = (input)=>input !== null && input !== undefined;
const isError = (input)=>input instanceof Error;
const isUint8Array = (input)=>input instanceof Uint8Array;
const isDate = (input)=>input instanceof Date;
const isIterable = (input)=>hasProperty(input, Symbol.iterator);
const isRecord = (input)=>isRecordOrArray(input) && !Array.isArray(input);
const isReadonlyRecord = isRecord;
const isPromise = (input)=>hasProperty(input, "then") && "catch" in input && isFunction(input.then) && isFunction(input.catch);
const isPromiseLike = (input)=>hasProperty(input, "then") && isFunction(input.then);
const isRegExp = (input)=>input instanceof RegExp;
const compose = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (ab, bc)=>(a)=>ab(a) && bc(a));
const product = (self, that)=>([a, b])=>self(a) && that(b);
const all = (collection)=>{
    return (as)=>{
        let collectionIndex = 0;
        for (const p of collection){
            if (collectionIndex >= as.length) {
                break;
            }
            if (p(as[collectionIndex]) === false) {
                return false;
            }
            collectionIndex++;
        }
        return true;
    };
};
const productMany = (self, collection)=>{
    const rest = all(collection);
    return ([head, ...tail])=>self(head) === false ? false : rest(tail);
};
const tuple = (...elements)=>all(elements);
const struct = (fields)=>{
    const keys = Object.keys(fields);
    return (a)=>{
        for (const key of keys){
            if (!fields[key](a[key])) {
                return false;
            }
        }
        return true;
    };
};
const not = (self)=>(a)=>!self(a);
const or = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>(a)=>self(a) || that(a));
const and = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>(a)=>self(a) && that(a));
const xor = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>(a)=>self(a) !== that(a));
const eqv = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>(a)=>self(a) === that(a));
const implies = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (antecedent, consequent)=>(a)=>antecedent(a) ? consequent(a) : true);
const nor = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>(a)=>!(self(a) || that(a)));
const nand = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>(a)=>!(self(a) && that(a)));
const every = (collection)=>(a)=>{
        for (const p of collection){
            if (!p(a)) {
                return false;
            }
        }
        return true;
    };
const some = (collection)=>(a)=>{
        for (const p of collection){
            if (p(a)) {
                return true;
            }
        }
        return false;
    }; //# sourceMappingURL=Predicate.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/GlobalValue.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * The `GlobalValue` module ensures that a single instance of a value is created globally,
 * even when modules are imported multiple times (e.g., due to mixing CommonJS and ESM builds)
 * or during hot-reloading in development environments like Next.js or Remix.
 *
 * It achieves this by using a versioned global store, identified by a unique `Symbol` tied to
 * the current version of the `effect` library. The store holds values that are keyed by an identifier,
 * allowing the reuse of previously computed instances across imports or reloads.
 *
 * This pattern is particularly useful in scenarios where frequent reloading can cause services or
 * single-instance objects to be recreated unnecessarily, such as in development environments with hot-reloading.
 *
 * @since 2.0.0
 */ __turbopack_esm__({
    "globalValue": (()=>globalValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/version.js [app-client] (ecmascript)");
;
const globalStoreId = /*#__PURE__*/ Symbol.for(`effect/GlobalValue/globalStoreId/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getCurrentVersion()}`);
if (!(globalStoreId in globalThis)) {
    ;
    globalThis[globalStoreId] = /*#__PURE__*/ new Map();
}
const globalStore = globalThis[globalStoreId];
const globalValue = (id, compute)=>{
    if (!globalStore.has(id)) {
        globalStore.set(id, compute());
    }
    return globalStore.get(id);
}; //# sourceMappingURL=GlobalValue.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/errors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * @since 2.0.0
 */ /** @internal */ __turbopack_esm__({
    "getBugErrorMessage": (()=>getBugErrorMessage)
});
const getBugErrorMessage = (message)=>`BUG: ${message} - please report an issue at https://github.com/Effect-TS/effect/issues`; //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * @since 2.0.0
 */ __turbopack_esm__({
    "GenKindImpl": (()=>GenKindImpl),
    "GenKindTypeId": (()=>GenKindTypeId),
    "PCGRandom": (()=>PCGRandom),
    "SingleShotGen": (()=>SingleShotGen),
    "YieldWrap": (()=>YieldWrap),
    "YieldWrapTypeId": (()=>YieldWrapTypeId),
    "adapter": (()=>adapter),
    "internalCall": (()=>internalCall),
    "isGenKind": (()=>isGenKind),
    "makeGenKind": (()=>makeGenKind),
    "structuralRegion": (()=>structuralRegion),
    "structuralRegionState": (()=>structuralRegionState),
    "yieldWrapGet": (()=>yieldWrapGet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$GlobalValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/GlobalValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/errors.js [app-client] (ecmascript)");
;
;
;
;
const GenKindTypeId = /*#__PURE__*/ Symbol.for("effect/Gen/GenKind");
const isGenKind = (u)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(u) && GenKindTypeId in u;
class GenKindImpl {
    value;
    constructor(/**
   * @since 2.0.0
   */ value){
        this.value = value;
    }
    /**
   * @since 2.0.0
   */ get _F() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
    }
    /**
   * @since 2.0.0
   */ get _R() {
        return (_)=>_;
    }
    /**
   * @since 2.0.0
   */ get _O() {
        return (_)=>_;
    }
    /**
   * @since 2.0.0
   */ get _E() {
        return (_)=>_;
    }
    /**
   * @since 2.0.0
   */ [GenKindTypeId] = GenKindTypeId;
    /**
   * @since 2.0.0
   */ [Symbol.iterator]() {
        return new SingleShotGen(this);
    }
}
class SingleShotGen {
    self;
    called = false;
    constructor(self){
        this.self = self;
    }
    /**
   * @since 2.0.0
   */ next(a) {
        return this.called ? {
            value: a,
            done: true
        } : (this.called = true, {
            value: this.self,
            done: false
        });
    }
    /**
   * @since 2.0.0
   */ return(a) {
        return {
            value: a,
            done: true
        };
    }
    /**
   * @since 2.0.0
   */ throw(e) {
        throw e;
    }
    /**
   * @since 2.0.0
   */ [Symbol.iterator]() {
        return new SingleShotGen(this.self);
    }
}
const makeGenKind = (kind)=>new GenKindImpl(kind);
const adapter = ()=>function() {
        let x = arguments[0];
        for(let i = 1; i < arguments.length; i++){
            x = arguments[i](x);
        }
        return new GenKindImpl(x);
    };
const defaultIncHi = 0x14057b7e;
const defaultIncLo = 0xf767814f;
const MUL_HI = 0x5851f42d >>> 0;
const MUL_LO = 0x4c957f2d >>> 0;
const BIT_53 = 9007199254740992.0;
const BIT_27 = 134217728.0;
class PCGRandom {
    _state;
    constructor(seedHi, seedLo, incHi, incLo){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullable"])(seedLo) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullable"])(seedHi)) {
            seedLo = Math.random() * 0xffffffff >>> 0;
            seedHi = 0;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullable"])(seedLo)) {
            seedLo = seedHi;
            seedHi = 0;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullable"])(incLo) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullable"])(incHi)) {
            incLo = this._state ? this._state[3] : defaultIncLo;
            incHi = this._state ? this._state[2] : defaultIncHi;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullable"])(incLo)) {
            incLo = incHi;
            incHi = 0;
        }
        this._state = new Int32Array([
            0,
            0,
            incHi >>> 0,
            ((incLo || 0) | 1) >>> 0
        ]);
        this._next();
        add64(this._state, this._state[0], this._state[1], seedHi >>> 0, seedLo >>> 0);
        this._next();
        return this;
    }
    /**
   * Returns a copy of the internal state of this random number generator as a
   * JavaScript Array.
   *
   * @category getters
   * @since 2.0.0
   */ getState() {
        return [
            this._state[0],
            this._state[1],
            this._state[2],
            this._state[3]
        ];
    }
    /**
   * Restore state previously retrieved using `getState()`.
   *
   * @since 2.0.0
   */ setState(state) {
        this._state[0] = state[0];
        this._state[1] = state[1];
        this._state[2] = state[2];
        this._state[3] = state[3] | 1;
    }
    /**
   * Get a uniformly distributed 32 bit integer between [0, max).
   *
   * @category getter
   * @since 2.0.0
   */ integer(max) {
        return Math.round(this.number() * Number.MAX_SAFE_INTEGER) % max;
    }
    /**
   * Get a uniformly distributed IEEE-754 double between 0.0 and 1.0, with
   * 53 bits of precision (every bit of the mantissa is randomized).
   *
   * @category getters
   * @since 2.0.0
   */ number() {
        const hi = (this._next() & 0x03ffffff) * 1.0;
        const lo = (this._next() & 0x07ffffff) * 1.0;
        return (hi * BIT_27 + lo) / BIT_53;
    }
    /** @internal */ _next() {
        // save current state (what we'll use for this number)
        const oldHi = this._state[0] >>> 0;
        const oldLo = this._state[1] >>> 0;
        // churn LCG.
        mul64(this._state, oldHi, oldLo, MUL_HI, MUL_LO);
        add64(this._state, this._state[0], this._state[1], this._state[2], this._state[3]);
        // get least sig. 32 bits of ((oldstate >> 18) ^ oldstate) >> 27
        let xsHi = oldHi >>> 18;
        let xsLo = (oldLo >>> 18 | oldHi << 14) >>> 0;
        xsHi = (xsHi ^ oldHi) >>> 0;
        xsLo = (xsLo ^ oldLo) >>> 0;
        const xorshifted = (xsLo >>> 27 | xsHi << 5) >>> 0;
        // rotate xorshifted right a random amount, based on the most sig. 5 bits
        // bits of the old state.
        const rot = oldHi >>> 27;
        const rot2 = (-rot >>> 0 & 31) >>> 0;
        return (xorshifted >>> rot | xorshifted << rot2) >>> 0;
    }
}
function mul64(out, aHi, aLo, bHi, bLo) {
    let c1 = (aLo >>> 16) * (bLo & 0xffff) >>> 0;
    let c0 = (aLo & 0xffff) * (bLo >>> 16) >>> 0;
    let lo = (aLo & 0xffff) * (bLo & 0xffff) >>> 0;
    let hi = (aLo >>> 16) * (bLo >>> 16) + ((c0 >>> 16) + (c1 >>> 16)) >>> 0;
    c0 = c0 << 16 >>> 0;
    lo = lo + c0 >>> 0;
    if (lo >>> 0 < c0 >>> 0) {
        hi = hi + 1 >>> 0;
    }
    c1 = c1 << 16 >>> 0;
    lo = lo + c1 >>> 0;
    if (lo >>> 0 < c1 >>> 0) {
        hi = hi + 1 >>> 0;
    }
    hi = hi + Math.imul(aLo, bHi) >>> 0;
    hi = hi + Math.imul(aHi, bLo) >>> 0;
    out[0] = hi;
    out[1] = lo;
}
// add two 64 bit numbers (given in parts), and store the result in `out`.
function add64(out, aHi, aLo, bHi, bLo) {
    let hi = aHi + bHi >>> 0;
    const lo = aLo + bLo >>> 0;
    if (lo >>> 0 < aLo >>> 0) {
        hi = hi + 1 | 0;
    }
    out[0] = hi;
    out[1] = lo;
}
const YieldWrapTypeId = /*#__PURE__*/ Symbol.for("effect/Utils/YieldWrap");
class YieldWrap {
    /**
   * @since 3.0.6
   */ #value;
    constructor(value){
        this.#value = value;
    }
    /**
   * @since 3.0.6
   */ [YieldWrapTypeId]() {
        return this.#value;
    }
}
function yieldWrapGet(self) {
    if (typeof self === "object" && self !== null && YieldWrapTypeId in self) {
        return self[YieldWrapTypeId]();
    }
    throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBugErrorMessage"])("yieldWrapGet"));
}
const structuralRegionState = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$GlobalValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalValue"])("effect/Utils/isStructuralRegion", ()=>({
        enabled: false,
        tester: undefined
    }));
const structuralRegion = (body, tester)=>{
    const current = structuralRegionState.enabled;
    const currentTester = structuralRegionState.tester;
    structuralRegionState.enabled = true;
    if (tester) {
        structuralRegionState.tester = tester;
    }
    try {
        return body();
    } finally{
        structuralRegionState.enabled = current;
        structuralRegionState.tester = currentTester;
    }
};
const tracingFunction = (name)=>{
    const wrap = {
        [name] (body) {
            return body();
        }
    };
    return function(fn) {
        return wrap[name](fn);
    };
};
const internalCall = /*#__PURE__*/ tracingFunction("effect_internal_function"); //# sourceMappingURL=Utils.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Hash.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * @since 2.0.0
 */ __turbopack_esm__({
    "array": (()=>array),
    "cached": (()=>cached),
    "combine": (()=>combine),
    "hash": (()=>hash),
    "isHash": (()=>isHash),
    "number": (()=>number),
    "optimize": (()=>optimize),
    "random": (()=>random),
    "string": (()=>string),
    "structure": (()=>structure),
    "structureKeys": (()=>structureKeys),
    "symbol": (()=>symbol)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$GlobalValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/GlobalValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
;
;
;
;
/** @internal */ const randomHashCache = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$GlobalValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalValue"])(/*#__PURE__*/ Symbol.for("effect/Hash/randomHashCache"), ()=>new WeakMap());
const symbol = /*#__PURE__*/ Symbol.for("effect/Hash");
const hash = (self)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralRegionState"].enabled === true) {
        return 0;
    }
    switch(typeof self){
        case "number":
            return number(self);
        case "bigint":
            return string(self.toString(10));
        case "boolean":
            return string(String(self));
        case "symbol":
            return string(String(self));
        case "string":
            return string(self);
        case "undefined":
            return string("undefined");
        case "function":
        case "object":
            {
                if (self === null) {
                    return string("null");
                } else if (self instanceof Date) {
                    return hash(self.toISOString());
                } else if (isHash(self)) {
                    return self[symbol]();
                } else {
                    return random(self);
                }
            }
        default:
            throw new Error(`BUG: unhandled typeof ${typeof self} - please report an issue at https://github.com/Effect-TS/effect/issues`);
    }
};
const random = (self)=>{
    if (!randomHashCache.has(self)) {
        randomHashCache.set(self, number(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)));
    }
    return randomHashCache.get(self);
};
const combine = (b)=>(self)=>self * 53 ^ b;
const optimize = (n)=>n & 0xbfffffff | n >>> 1 & 0x40000000;
const isHash = (u)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(u, symbol);
const number = (n)=>{
    if (n !== n || n === Infinity) {
        return 0;
    }
    let h = n | 0;
    if (h !== n) {
        h ^= n * 0xffffffff;
    }
    while(n > 0xffffffff){
        h ^= n /= 0xffffffff;
    }
    return optimize(h);
};
const string = (str)=>{
    let h = 5381, i = str.length;
    while(i){
        h = h * 33 ^ str.charCodeAt(--i);
    }
    return optimize(h);
};
const structureKeys = (o, keys)=>{
    let h = 12289;
    for(let i = 0; i < keys.length; i++){
        h ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(string(keys[i]), combine(hash(o[keys[i]])));
    }
    return optimize(h);
};
const structure = (o)=>structureKeys(o, Object.keys(o));
const array = (arr)=>{
    let h = 6151;
    for(let i = 0; i < arr.length; i++){
        h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(h, combine(hash(arr[i])));
    }
    return optimize(h);
};
const cached = function() {
    if (arguments.length === 1) {
        const self = arguments[0];
        return function(hash) {
            Object.defineProperty(self, symbol, {
                value () {
                    return hash;
                },
                enumerable: false
            });
            return hash;
        };
    }
    const self = arguments[0];
    const hash = arguments[1];
    Object.defineProperty(self, symbol, {
        value () {
            return hash;
        },
        enumerable: false
    });
    return hash;
}; //# sourceMappingURL=Hash.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "equals": (()=>equals),
    "equivalence": (()=>equivalence),
    "isEqual": (()=>isEqual),
    "symbol": (()=>symbol)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Utils.js [app-client] (ecmascript)");
;
;
;
const symbol = /*#__PURE__*/ Symbol.for("effect/Equal");
function equals() {
    if (arguments.length === 1) {
        return (self)=>compareBoth(self, arguments[0]);
    }
    return compareBoth(arguments[0], arguments[1]);
}
function compareBoth(self, that) {
    if (self === that) {
        return true;
    }
    const selfType = typeof self;
    if (selfType !== typeof that) {
        return false;
    }
    if (selfType === "object" || selfType === "function") {
        if (self !== null && that !== null) {
            if (isEqual(self) && isEqual(that)) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.hash(self) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.hash(that) && self[symbol](that)) {
                    return true;
                } else {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralRegionState"].enabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralRegionState"].tester ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralRegionState"].tester(self, that) : false;
                }
            } else if (self instanceof Date && that instanceof Date) {
                return self.toISOString() === that.toISOString();
            }
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralRegionState"].enabled) {
            if (Array.isArray(self) && Array.isArray(that)) {
                return self.length === that.length && self.every((v, i)=>compareBoth(v, that[i]));
            }
            if (Object.getPrototypeOf(self) === Object.prototype && Object.getPrototypeOf(self) === Object.prototype) {
                const keysSelf = Object.keys(self);
                const keysThat = Object.keys(that);
                if (keysSelf.length === keysThat.length) {
                    for (const key of keysSelf){
                        // @ts-expect-error
                        if (!(key in that && compareBoth(self[key], that[key]))) {
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralRegionState"].tester ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralRegionState"].tester(self, that) : false;
                        }
                    }
                    return true;
                }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralRegionState"].tester ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralRegionState"].tester(self, that) : false;
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralRegionState"].enabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralRegionState"].tester ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralRegionState"].tester(self, that) : false;
}
const isEqual = (u)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(u, symbol);
const equivalence = ()=>equals; //# sourceMappingURL=Equal.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Pipeable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * @since 2.0.0
 */ /**
 * @since 2.0.0
 */ __turbopack_esm__({
    "pipeArguments": (()=>pipeArguments)
});
const pipeArguments = (self, args)=>{
    switch(args.length){
        case 0:
            return self;
        case 1:
            return args[0](self);
        case 2:
            return args[1](args[0](self));
        case 3:
            return args[2](args[1](args[0](self)));
        case 4:
            return args[3](args[2](args[1](args[0](self))));
        case 5:
            return args[4](args[3](args[2](args[1](args[0](self)))));
        case 6:
            return args[5](args[4](args[3](args[2](args[1](args[0](self))))));
        case 7:
            return args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))));
        case 8:
            return args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self))))))));
        case 9:
            return args[8](args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))))));
        default:
            {
                let ret = self;
                for(let i = 0, len = args.length; i < len; i++){
                    ret = args[i](ret);
                }
                return ret;
            }
    }
}; //# sourceMappingURL=Pipeable.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/opCodes/effect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/** @internal */ __turbopack_esm__({
    "OP_ASYNC": (()=>OP_ASYNC),
    "OP_COMMIT": (()=>OP_COMMIT),
    "OP_FAILURE": (()=>OP_FAILURE),
    "OP_ON_FAILURE": (()=>OP_ON_FAILURE),
    "OP_ON_SUCCESS": (()=>OP_ON_SUCCESS),
    "OP_ON_SUCCESS_AND_FAILURE": (()=>OP_ON_SUCCESS_AND_FAILURE),
    "OP_REVERT_FLAGS": (()=>OP_REVERT_FLAGS),
    "OP_SUCCESS": (()=>OP_SUCCESS),
    "OP_SYNC": (()=>OP_SYNC),
    "OP_TAG": (()=>OP_TAG),
    "OP_UPDATE_RUNTIME_FLAGS": (()=>OP_UPDATE_RUNTIME_FLAGS),
    "OP_WHILE": (()=>OP_WHILE),
    "OP_WITH_RUNTIME": (()=>OP_WITH_RUNTIME),
    "OP_YIELD": (()=>OP_YIELD)
});
const OP_ASYNC = "Async";
const OP_COMMIT = "Commit";
const OP_FAILURE = "Failure";
const OP_ON_FAILURE = "OnFailure";
const OP_ON_SUCCESS = "OnSuccess";
const OP_ON_SUCCESS_AND_FAILURE = "OnSuccessAndFailure";
const OP_SUCCESS = "Success";
const OP_SYNC = "Sync";
const OP_TAG = "Tag";
const OP_UPDATE_RUNTIME_FLAGS = "UpdateRuntimeFlags";
const OP_WHILE = "While";
const OP_WITH_RUNTIME = "WithRuntime";
const OP_YIELD = "Yield";
const OP_REVERT_FLAGS = "RevertFlags"; //# sourceMappingURL=effect.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/effectable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Base": (()=>Base),
    "ChannelTypeId": (()=>ChannelTypeId),
    "CommitPrototype": (()=>CommitPrototype),
    "EffectPrototype": (()=>EffectPrototype),
    "EffectTypeId": (()=>EffectTypeId),
    "SinkTypeId": (()=>SinkTypeId),
    "StreamTypeId": (()=>StreamTypeId),
    "StructuralBase": (()=>StructuralBase),
    "StructuralCommitPrototype": (()=>StructuralCommitPrototype),
    "StructuralPrototype": (()=>StructuralPrototype),
    "effectVariance": (()=>effectVariance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Pipeable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$opCodes$2f$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/opCodes/effect.js [app-client] (ecmascript)");
;
;
;
;
;
;
const EffectTypeId = /*#__PURE__*/ Symbol.for("effect/Effect");
const StreamTypeId = /*#__PURE__*/ Symbol.for("effect/Stream");
const SinkTypeId = /*#__PURE__*/ Symbol.for("effect/Sink");
const ChannelTypeId = /*#__PURE__*/ Symbol.for("effect/Channel");
const effectVariance = {
    /* c8 ignore next */ _R: (_)=>_,
    /* c8 ignore next */ _E: (_)=>_,
    /* c8 ignore next */ _A: (_)=>_,
    _V: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getCurrentVersion()
};
const sinkVariance = {
    /* c8 ignore next */ _A: (_)=>_,
    /* c8 ignore next */ _In: (_)=>_,
    /* c8 ignore next */ _L: (_)=>_,
    /* c8 ignore next */ _E: (_)=>_,
    /* c8 ignore next */ _R: (_)=>_
};
const channelVariance = {
    /* c8 ignore next */ _Env: (_)=>_,
    /* c8 ignore next */ _InErr: (_)=>_,
    /* c8 ignore next */ _InElem: (_)=>_,
    /* c8 ignore next */ _InDone: (_)=>_,
    /* c8 ignore next */ _OutErr: (_)=>_,
    /* c8 ignore next */ _OutElem: (_)=>_,
    /* c8 ignore next */ _OutDone: (_)=>_
};
const EffectPrototype = {
    [EffectTypeId]: effectVariance,
    [StreamTypeId]: effectVariance,
    [SinkTypeId]: sinkVariance,
    [ChannelTypeId]: channelVariance,
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] (that) {
        return this === that;
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cached(this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.random(this));
    },
    [Symbol.iterator] () {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleShotGen"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YieldWrap"](this));
    },
    pipe () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipeArguments"])(this, arguments);
    }
};
const StructuralPrototype = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cached(this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.structure(this));
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] (that) {
        const selfKeys = Object.keys(this);
        const thatKeys = Object.keys(that);
        if (selfKeys.length !== thatKeys.length) {
            return false;
        }
        for (const key of selfKeys){
            if (!(key in that && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equals(this[key], that[key]))) {
                return false;
            }
        }
        return true;
    }
};
const CommitPrototype = {
    ...EffectPrototype,
    _op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$opCodes$2f$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.OP_COMMIT
};
const StructuralCommitPrototype = {
    ...CommitPrototype,
    ...StructuralPrototype
};
const Base = /*#__PURE__*/ function() {
    function Base() {}
    Base.prototype = CommitPrototype;
    return Base;
}();
const StructuralBase = /*#__PURE__*/ function() {
    function Base() {}
    Base.prototype = StructuralCommitPrototype;
    return Base;
}(); //# sourceMappingURL=effectable.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Inspectable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * @since 2.0.0
 */ __turbopack_esm__({
    "BaseProto": (()=>BaseProto),
    "Class": (()=>Class),
    "NodeInspectSymbol": (()=>NodeInspectSymbol),
    "format": (()=>format),
    "isRedactable": (()=>isRedactable),
    "redact": (()=>redact),
    "stringifyCircular": (()=>stringifyCircular),
    "symbolRedactable": (()=>symbolRedactable),
    "toJSON": (()=>toJSON),
    "toStringUnknown": (()=>toStringUnknown),
    "withRedactableContext": (()=>withRedactableContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$GlobalValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/GlobalValue.js [app-client] (ecmascript)");
;
;
const NodeInspectSymbol = /*#__PURE__*/ Symbol.for("nodejs.util.inspect.custom");
const toJSON = (x)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(x, "toJSON") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(x["toJSON"]) && x["toJSON"].length === 0) {
        return x.toJSON();
    } else if (Array.isArray(x)) {
        return x.map(toJSON);
    }
    return redact(x);
};
const format = (x)=>JSON.stringify(x, null, 2);
const BaseProto = {
    toJSON () {
        return toJSON(this);
    },
    [NodeInspectSymbol] () {
        return this.toJSON();
    },
    toString () {
        return format(this.toJSON());
    }
};
class Class {
    /**
   * @since 2.0.0
   */ [NodeInspectSymbol]() {
        return this.toJSON();
    }
    /**
   * @since 2.0.0
   */ toString() {
        return format(this.toJSON());
    }
}
const toStringUnknown = (u, whitespace = 2)=>{
    if (typeof u === "string") {
        return u;
    }
    try {
        return typeof u === "object" ? stringifyCircular(u, whitespace) : String(u);
    } catch (_) {
        return String(u);
    }
};
const stringifyCircular = (obj, whitespace)=>{
    let cache = [];
    const retVal = JSON.stringify(obj, (_key, value)=>typeof value === "object" && value !== null ? cache.includes(value) ? undefined // circular reference
         : cache.push(value) && (redactableState.fiberRefs !== undefined && isRedactable(value) ? value[symbolRedactable](redactableState.fiberRefs) : value) : value, whitespace);
    cache = undefined;
    return retVal;
};
const symbolRedactable = /*#__PURE__*/ Symbol.for("effect/Inspectable/Redactable");
const isRedactable = (u)=>typeof u === "object" && u !== null && symbolRedactable in u;
const redactableState = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$GlobalValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalValue"])("effect/Inspectable/redactableState", ()=>({
        fiberRefs: undefined
    }));
const withRedactableContext = (context, f)=>{
    const prev = redactableState.fiberRefs;
    redactableState.fiberRefs = context;
    try {
        return f();
    } finally{
        redactableState.fiberRefs = prev;
    }
};
const redact = (u)=>{
    if (isRedactable(u) && redactableState.fiberRefs !== undefined) {
        return u[symbolRedactable](redactableState.fiberRefs);
    }
    return u;
}; //# sourceMappingURL=Inspectable.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/option.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * @since 2.0.0
 */ __turbopack_esm__({
    "isNone": (()=>isNone),
    "isOption": (()=>isOption),
    "isSome": (()=>isSome),
    "none": (()=>none),
    "some": (()=>some)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/effectable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Inspectable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
;
;
;
;
;
const TypeId = /*#__PURE__*/ Symbol.for("effect/Option");
const CommonProto = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectPrototype"],
    [TypeId]: {
        _A: (_)=>_
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeInspectSymbol"]] () {
        return this.toJSON();
    },
    toString () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])(this.toJSON());
    }
};
const SomeProto = /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.create(CommonProto), {
    _tag: "Some",
    _op: "Some",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] (that) {
        return isOption(that) && isSome(that) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equals(this.value, that.value);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cached(this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.combine(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.hash(this._tag))(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.hash(this.value)));
    },
    toJSON () {
        return {
            _id: "Option",
            _tag: this._tag,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toJSON"])(this.value)
        };
    }
});
const NoneHash = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.hash("None");
const NoneProto = /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.create(CommonProto), {
    _tag: "None",
    _op: "None",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] (that) {
        return isOption(that) && isNone(that);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] () {
        return NoneHash;
    },
    toJSON () {
        return {
            _id: "Option",
            _tag: this._tag
        };
    }
});
const isOption = (input)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(input, TypeId);
const isNone = (fa)=>fa._tag === "None";
const isSome = (fa)=>fa._tag === "Some";
const none = /*#__PURE__*/ Object.create(NoneProto);
const some = (value)=>{
    const a = Object.create(SomeProto);
    a.value = value;
    return a;
}; //# sourceMappingURL=option.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/either.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * @since 2.0.0
 */ __turbopack_esm__({
    "TypeId": (()=>TypeId),
    "fromOption": (()=>fromOption),
    "getLeft": (()=>getLeft),
    "getRight": (()=>getRight),
    "isEither": (()=>isEither),
    "isLeft": (()=>isLeft),
    "isRight": (()=>isRight),
    "left": (()=>left),
    "right": (()=>right)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/effectable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Inspectable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const TypeId = /*#__PURE__*/ Symbol.for("effect/Either");
const CommonProto = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectPrototype"],
    [TypeId]: {
        _R: (_)=>_
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeInspectSymbol"]] () {
        return this.toJSON();
    },
    toString () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])(this.toJSON());
    }
};
const RightProto = /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.create(CommonProto), {
    _tag: "Right",
    _op: "Right",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] (that) {
        return isEither(that) && isRight(that) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equals(this.right, that.right);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.combine(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.hash(this._tag))(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.hash(this.right));
    },
    toJSON () {
        return {
            _id: "Either",
            _tag: this._tag,
            right: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toJSON"])(this.right)
        };
    }
});
const LeftProto = /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.create(CommonProto), {
    _tag: "Left",
    _op: "Left",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] (that) {
        return isEither(that) && isLeft(that) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equals(this.left, that.left);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.combine(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.hash(this._tag))(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.hash(this.left));
    },
    toJSON () {
        return {
            _id: "Either",
            _tag: this._tag,
            left: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toJSON"])(this.left)
        };
    }
});
const isEither = (input)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(input, TypeId);
const isLeft = (ma)=>ma._tag === "Left";
const isRight = (ma)=>ma._tag === "Right";
const left = (left)=>{
    const a = Object.create(LeftProto);
    a.left = left;
    return a;
};
const right = (right)=>{
    const a = Object.create(RightProto);
    a.right = right;
    return a;
};
const getLeft = (self)=>isRight(self) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(self.left);
const getRight = (self)=>isLeft(self) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(self.right);
const fromOption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, onNone)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isNone(self) ? left(onNone()) : right(self.value)); //# sourceMappingURL=either.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equivalence.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * This module provides an implementation of the `Equivalence` type class, which defines a binary relation
 * that is reflexive, symmetric, and transitive. In other words, it defines a notion of equivalence between values of a certain type.
 * These properties are also known in mathematics as an "equivalence relation".
 *
 * @since 2.0.0
 */ __turbopack_esm__({
    "Date": (()=>Date),
    "all": (()=>all),
    "array": (()=>array),
    "bigint": (()=>bigint),
    "boolean": (()=>boolean),
    "combine": (()=>combine),
    "combineAll": (()=>combineAll),
    "combineMany": (()=>combineMany),
    "make": (()=>make),
    "mapInput": (()=>mapInput),
    "number": (()=>number),
    "product": (()=>product),
    "productMany": (()=>productMany),
    "strict": (()=>strict),
    "string": (()=>string),
    "struct": (()=>struct),
    "symbol": (()=>symbol),
    "tuple": (()=>tuple)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
;
const make = (isEquivalent)=>(self, that)=>self === that || isEquivalent(self, that);
const isStrictEquivalent = (x, y)=>x === y;
const strict = ()=>isStrictEquivalent;
const string = /*#__PURE__*/ strict();
const number = /*#__PURE__*/ strict();
const boolean = /*#__PURE__*/ strict();
const bigint = /*#__PURE__*/ strict();
const symbol = /*#__PURE__*/ strict();
const combine = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>make((x, y)=>self(x, y) && that(x, y)));
const combineMany = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, collection)=>make((x, y)=>{
        if (!self(x, y)) {
            return false;
        }
        for (const equivalence of collection){
            if (!equivalence(x, y)) {
                return false;
            }
        }
        return true;
    }));
const isAlwaysEquivalent = (_x, _y)=>true;
const combineAll = (collection)=>combineMany(isAlwaysEquivalent, collection);
const mapInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>make((x, y)=>self(f(x), f(y))));
const Date = /*#__PURE__*/ mapInput(number, (date)=>date.getTime());
const product = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>make(([xa, xb], [ya, yb])=>self(xa, ya) && that(xb, yb)));
const all = (collection)=>{
    return make((x, y)=>{
        const len = Math.min(x.length, y.length);
        let collectionLength = 0;
        for (const equivalence of collection){
            if (collectionLength >= len) {
                break;
            }
            if (!equivalence(x[collectionLength], y[collectionLength])) {
                return false;
            }
            collectionLength++;
        }
        return true;
    });
};
const productMany = (self, collection)=>{
    const equivalence = all(collection);
    return make((x, y)=>!self(x[0], y[0]) ? false : equivalence(x.slice(1), y.slice(1)));
};
const tuple = (...elements)=>all(elements);
const array = (item)=>make((self, that)=>{
        if (self.length !== that.length) {
            return false;
        }
        for(let i = 0; i < self.length; i++){
            const isEq = item(self[i], that[i]);
            if (!isEq) {
                return false;
            }
        }
        return true;
    });
const struct = (fields)=>{
    const keys = Object.keys(fields);
    return make((self, that)=>{
        for (const key of keys){
            if (!fields[key](self[key], that[key])) {
                return false;
            }
        }
        return true;
    });
}; //# sourceMappingURL=Equivalence.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/doNotation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "bind": (()=>bind),
    "bindTo": (()=>bindTo),
    "let_": (()=>let_)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
;
const let_ = (map)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, name, f)=>map(self, (a)=>Object.assign({}, a, {
                [name]: f(a)
            })));
const bindTo = (map)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, name)=>map(self, (a)=>({
                [name]: a
            })));
const bind = (map, flatMap)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, name, f)=>flatMap(self, (a)=>map(f(a), (b)=>Object.assign({}, a, {
                    [name]: b
                })))); //# sourceMappingURL=doNotation.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Either.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * @since 2.0.0
 */ __turbopack_esm__({
    "Do": (()=>Do),
    "TypeId": (()=>TypeId),
    "all": (()=>all),
    "andThen": (()=>andThen),
    "ap": (()=>ap),
    "bind": (()=>bind),
    "bindTo": (()=>bindTo),
    "filterOrLeft": (()=>filterOrLeft),
    "flatMap": (()=>flatMap),
    "flip": (()=>flip),
    "fromNullable": (()=>fromNullable),
    "fromOption": (()=>fromOption),
    "gen": (()=>gen),
    "getEquivalence": (()=>getEquivalence),
    "getLeft": (()=>getLeft),
    "getOrElse": (()=>getOrElse),
    "getOrNull": (()=>getOrNull),
    "getOrThrow": (()=>getOrThrow),
    "getOrThrowWith": (()=>getOrThrowWith),
    "getOrUndefined": (()=>getOrUndefined),
    "getRight": (()=>getRight),
    "isEither": (()=>isEither),
    "isLeft": (()=>isLeft),
    "isRight": (()=>isRight),
    "left": (()=>left),
    "let": (()=>let_),
    "liftPredicate": (()=>liftPredicate),
    "map": (()=>map),
    "mapBoth": (()=>mapBoth),
    "mapLeft": (()=>mapLeft),
    "match": (()=>match),
    "merge": (()=>merge),
    "orElse": (()=>orElse),
    "right": (()=>right),
    "try": (()=>try_),
    "zipWith": (()=>zipWith)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/either.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equivalence.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/doNotation.js [app-client] (ecmascript)");
;
;
;
;
;
;
const TypeId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.TypeId;
const right = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.right;
const left = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left;
const fromNullable = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, onNullable)=>self == null ? left(onNullable(self)) : right(self));
const fromOption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.fromOption;
const try_ = (evaluate)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(evaluate)) {
        try {
            return right(evaluate());
        } catch (e) {
            return left(e);
        }
    } else {
        try {
            return right(evaluate.try());
        } catch (e) {
            return left(evaluate.catch(e));
        }
    }
};
;
const isEither = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isEither;
const isLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isLeft;
const isRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isRight;
const getRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getRight;
const getLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getLeft;
const getEquivalence = ({ left, right })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.make((x, y)=>isLeft(x) ? isLeft(y) && left(x.left, y.left) : isRight(y) && right(x.right, y.right));
const mapBoth = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, { onLeft, onRight })=>isLeft(self) ? left(onLeft(self.left)) : right(onRight(self.right)));
const mapLeft = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>isLeft(self) ? left(f(self.left)) : right(self.right));
const map = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>isRight(self) ? right(f(self.right)) : left(self.left));
const match = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, { onLeft, onRight })=>isLeft(self) ? onLeft(self.left) : onRight(self.right));
const liftPredicate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (a, predicate, orLeftWith)=>predicate(a) ? right(a) : left(orLeftWith(a)));
const filterOrLeft = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, predicate, orLeftWith)=>flatMap(self, (r)=>predicate(r) ? right(r) : left(orLeftWith(r))));
const merge = /*#__PURE__*/ match({
    onLeft: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"],
    onRight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]
});
const getOrElse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, onLeft)=>isLeft(self) ? onLeft(self.left) : self.right);
const getOrNull = /*#__PURE__*/ getOrElse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constNull"]);
const getOrUndefined = /*#__PURE__*/ getOrElse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constUndefined"]);
const getOrThrowWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, onLeft)=>{
    if (isRight(self)) {
        return self.right;
    }
    throw onLeft(self.left);
});
const getOrThrow = /*#__PURE__*/ getOrThrowWith(()=>new Error("getOrThrow called on a Left"));
const orElse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>isLeft(self) ? that(self.left) : right(self.right));
const flatMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>isLeft(self) ? left(self.left) : f(self.right));
const andThen = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>flatMap(self, (a)=>{
        const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(f) ? f(a) : f;
        return isEither(b) ? b : right(b);
    }));
const zipWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, that, f)=>flatMap(self, (r)=>map(that, (r2)=>f(r, r2))));
const ap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>zipWith(self, that, (f, a)=>f(a)));
const all = (input)=>{
    if (Symbol.iterator in input) {
        const out = [];
        for (const e of input){
            if (isLeft(e)) {
                return e;
            }
            out.push(e.right);
        }
        return right(out);
    }
    const out = {};
    for (const key of Object.keys(input)){
        const e = input[key];
        if (isLeft(e)) {
            return e;
        }
        out[key] = e.right;
    }
    return right(out);
};
const flip = (self)=>isLeft(self) ? right(self.left) : left(self.right);
const adapter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.adapter();
const gen = (...args)=>{
    const f = args.length === 1 ? args[0] : args[1].bind(args[0]);
    const iterator = f(adapter);
    let state = iterator.next();
    if (state.done) {
        return right(state.value);
    } else {
        let current = state.value;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isGenKind(current)) {
            current = current.value;
        } else {
            current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.yieldWrapGet(current);
        }
        if (isLeft(current)) {
            return current;
        }
        while(!state.done){
            state = iterator.next(current.right);
            if (!state.done) {
                current = state.value;
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isGenKind(current)) {
                    current = current.value;
                } else {
                    current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.yieldWrapGet(current);
                }
                if (isLeft(current)) {
                    return current;
                }
            }
        }
        return right(state.value);
    }
};
const Do = /*#__PURE__*/ right({});
const bind = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bind(map, flatMap);
const bindTo = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bindTo(map);
const let_ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.let_(map);
;
 //# sourceMappingURL=Either.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Order.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * This module provides an implementation of the `Order` type class which is used to define a total ordering on some type `A`.
 * An order is defined by a relation `<=`, which obeys the following laws:
 *
 * - either `x <= y` or `y <= x` (totality)
 * - if `x <= y` and `y <= x`, then `x == y` (antisymmetry)
 * - if `x <= y` and `y <= z`, then `x <= z` (transitivity)
 *
 * The truth table for compare is defined as follows:
 *
 * | `x <= y` | `x >= y` | Ordering |                       |
 * | -------- | -------- | -------- | --------------------- |
 * | `true`   | `true`   | `0`      | corresponds to x == y |
 * | `true`   | `false`  | `< 0`    | corresponds to x < y  |
 * | `false`  | `true`   | `> 0`    | corresponds to x > y  |
 *
 * @since 2.0.0
 */ __turbopack_esm__({
    "Date": (()=>Date),
    "all": (()=>all),
    "array": (()=>array),
    "between": (()=>between),
    "bigint": (()=>bigint),
    "boolean": (()=>boolean),
    "clamp": (()=>clamp),
    "combine": (()=>combine),
    "combineAll": (()=>combineAll),
    "combineMany": (()=>combineMany),
    "empty": (()=>empty),
    "greaterThan": (()=>greaterThan),
    "greaterThanOrEqualTo": (()=>greaterThanOrEqualTo),
    "lessThan": (()=>lessThan),
    "lessThanOrEqualTo": (()=>lessThanOrEqualTo),
    "make": (()=>make),
    "mapInput": (()=>mapInput),
    "max": (()=>max),
    "min": (()=>min),
    "number": (()=>number),
    "product": (()=>product),
    "productMany": (()=>productMany),
    "reverse": (()=>reverse),
    "string": (()=>string),
    "struct": (()=>struct),
    "tuple": (()=>tuple)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
;
const make = (compare)=>(self, that)=>self === that ? 0 : compare(self, that);
const string = /*#__PURE__*/ make((self, that)=>self < that ? -1 : 1);
const number = /*#__PURE__*/ make((self, that)=>self < that ? -1 : 1);
const boolean = /*#__PURE__*/ make((self, that)=>self < that ? -1 : 1);
const bigint = /*#__PURE__*/ make((self, that)=>self < that ? -1 : 1);
const reverse = (O)=>make((self, that)=>O(that, self));
const combine = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>make((a1, a2)=>{
        const out = self(a1, a2);
        if (out !== 0) {
            return out;
        }
        return that(a1, a2);
    }));
const combineMany = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, collection)=>make((a1, a2)=>{
        let out = self(a1, a2);
        if (out !== 0) {
            return out;
        }
        for (const O of collection){
            out = O(a1, a2);
            if (out !== 0) {
                return out;
            }
        }
        return out;
    }));
const empty = ()=>make(()=>0);
const combineAll = (collection)=>combineMany(empty(), collection);
const mapInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>make((b1, b2)=>self(f(b1), f(b2))));
const Date = /*#__PURE__*/ mapInput(number, (date)=>date.getTime());
const product = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>make(([xa, xb], [ya, yb])=>{
        const o = self(xa, ya);
        return o !== 0 ? o : that(xb, yb);
    }));
const all = (collection)=>{
    return make((x, y)=>{
        const len = Math.min(x.length, y.length);
        let collectionLength = 0;
        for (const O of collection){
            if (collectionLength >= len) {
                break;
            }
            const o = O(x[collectionLength], y[collectionLength]);
            if (o !== 0) {
                return o;
            }
            collectionLength++;
        }
        return 0;
    });
};
const productMany = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, collection)=>{
    const O = all(collection);
    return make((x, y)=>{
        const o = self(x[0], y[0]);
        return o !== 0 ? o : O(x.slice(1), y.slice(1));
    });
});
const tuple = (...elements)=>all(elements);
const array = (O)=>make((self, that)=>{
        const aLen = self.length;
        const bLen = that.length;
        const len = Math.min(aLen, bLen);
        for(let i = 0; i < len; i++){
            const o = O(self[i], that[i]);
            if (o !== 0) {
                return o;
            }
        }
        return number(aLen, bLen);
    });
const struct = (fields)=>{
    const keys = Object.keys(fields);
    return make((self, that)=>{
        for (const key of keys){
            const o = fields[key](self[key], that[key]);
            if (o !== 0) {
                return o;
            }
        }
        return 0;
    });
};
const lessThan = (O)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>O(self, that) === -1);
const greaterThan = (O)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>O(self, that) === 1);
const lessThanOrEqualTo = (O)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>O(self, that) !== 1);
const greaterThanOrEqualTo = (O)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>O(self, that) !== -1);
const min = (O)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>self === that || O(self, that) < 1 ? self : that);
const max = (O)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>self === that || O(self, that) > -1 ? self : that);
const clamp = (O)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, options)=>min(O)(options.maximum, max(O)(options.minimum, self)));
const between = (O)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, options)=>!lessThan(O)(self, options.minimum) && !greaterThan(O)(self, options.maximum)); //# sourceMappingURL=Order.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Option.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Do": (()=>Do),
    "TypeId": (()=>TypeId),
    "all": (()=>all),
    "andThen": (()=>andThen),
    "ap": (()=>ap),
    "as": (()=>as),
    "asVoid": (()=>asVoid),
    "bind": (()=>bind),
    "bindTo": (()=>bindTo),
    "composeK": (()=>composeK),
    "contains": (()=>contains),
    "containsWith": (()=>containsWith),
    "exists": (()=>exists),
    "filter": (()=>filter),
    "filterMap": (()=>filterMap),
    "firstSomeOf": (()=>firstSomeOf),
    "flatMap": (()=>flatMap),
    "flatMapNullable": (()=>flatMapNullable),
    "flatten": (()=>flatten),
    "fromIterable": (()=>fromIterable),
    "fromNullable": (()=>fromNullable),
    "gen": (()=>gen),
    "getEquivalence": (()=>getEquivalence),
    "getLeft": (()=>getLeft),
    "getOrElse": (()=>getOrElse),
    "getOrNull": (()=>getOrNull),
    "getOrThrow": (()=>getOrThrow),
    "getOrThrowWith": (()=>getOrThrowWith),
    "getOrUndefined": (()=>getOrUndefined),
    "getOrder": (()=>getOrder),
    "getRight": (()=>getRight),
    "isNone": (()=>isNone),
    "isOption": (()=>isOption),
    "isSome": (()=>isSome),
    "let": (()=>let_),
    "lift2": (()=>lift2),
    "liftNullable": (()=>liftNullable),
    "liftPredicate": (()=>liftPredicate),
    "liftThrowable": (()=>liftThrowable),
    "map": (()=>map),
    "match": (()=>match),
    "none": (()=>none),
    "orElse": (()=>orElse),
    "orElseEither": (()=>orElseEither),
    "orElseSome": (()=>orElseSome),
    "partitionMap": (()=>partitionMap),
    "product": (()=>product),
    "productMany": (()=>productMany),
    "reduceCompact": (()=>reduceCompact),
    "some": (()=>some),
    "tap": (()=>tap),
    "toArray": (()=>toArray),
    "toRefinement": (()=>toRefinement),
    "void": (()=>void_),
    "zipLeft": (()=>zipLeft),
    "zipRight": (()=>zipRight),
    "zipWith": (()=>zipWith)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/either.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equivalence.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Order.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/doNotation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const TypeId = /*#__PURE__*/ Symbol.for("effect/Option");
const none = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none;
const some = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some;
const isOption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isOption;
const isNone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isNone;
const isSome = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isSome;
const match = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, { onNone, onSome })=>isNone(self) ? onNone() : onSome(self.value));
const toRefinement = (f)=>(a)=>isSome(f(a));
const fromIterable = (collection)=>{
    for (const a of collection){
        return some(a);
    }
    return none();
};
const getRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getRight;
const getLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getLeft;
const getOrElse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, onNone)=>isNone(self) ? onNone() : self.value);
const orElse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>isNone(self) ? that() : self);
const orElseSome = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, onNone)=>isNone(self) ? some(onNone()) : self);
const orElseEither = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>isNone(self) ? map(that(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.right) : map(self, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left));
const firstSomeOf = (collection)=>{
    let out = none();
    for (out of collection){
        if (isSome(out)) {
            return out;
        }
    }
    return out;
};
const fromNullable = (nullableValue)=>nullableValue == null ? none() : some(nullableValue);
const liftNullable = (f)=>(...a)=>fromNullable(f(...a));
const getOrNull = /*#__PURE__*/ getOrElse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constNull"]);
const getOrUndefined = /*#__PURE__*/ getOrElse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constUndefined"]);
const liftThrowable = (f)=>(...a)=>{
        try {
            return some(f(...a));
        } catch (e) {
            return none();
        }
    };
const getOrThrowWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, onNone)=>{
    if (isSome(self)) {
        return self.value;
    }
    throw onNone();
});
const getOrThrow = /*#__PURE__*/ getOrThrowWith(()=>new Error("getOrThrow called on a None"));
const map = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>isNone(self) ? none() : some(f(self.value)));
const as = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, b)=>map(self, ()=>b));
const asVoid = /*#__PURE__*/ as(undefined);
const void_ = /*#__PURE__*/ some(undefined);
;
const flatMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>isNone(self) ? none() : f(self.value));
const andThen = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>flatMap(self, (a)=>{
        const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(f) ? f(a) : f;
        return isOption(b) ? b : some(b);
    }));
const flatMapNullable = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>isNone(self) ? none() : fromNullable(f(self.value)));
const flatten = /*#__PURE__*/ flatMap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const zipRight = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>flatMap(self, ()=>that));
const composeK = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (afb, bfc)=>(a)=>flatMap(afb(a), bfc));
const zipLeft = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>tap(self, ()=>that));
const tap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>flatMap(self, (a)=>map(f(a), ()=>a)));
const product = (self, that)=>isSome(self) && isSome(that) ? some([
        self.value,
        that.value
    ]) : none();
const productMany = (self, collection)=>{
    if (isNone(self)) {
        return none();
    }
    const out = [
        self.value
    ];
    for (const o of collection){
        if (isNone(o)) {
            return none();
        }
        out.push(o.value);
    }
    return some(out);
};
const all = (input)=>{
    if (Symbol.iterator in input) {
        const out = [];
        for (const o of input){
            if (isNone(o)) {
                return none();
            }
            out.push(o.value);
        }
        return some(out);
    }
    const out = {};
    for (const key of Object.keys(input)){
        const o = input[key];
        if (isNone(o)) {
            return none();
        }
        out[key] = o.value;
    }
    return some(out);
};
const zipWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, that, f)=>map(product(self, that), ([a, b])=>f(a, b)));
const ap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>zipWith(self, that, (f, a)=>f(a)));
const reduceCompact = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, b, f)=>{
    let out = b;
    for (const oa of self){
        if (isSome(oa)) {
            out = f(out, oa.value);
        }
    }
    return out;
});
const toArray = (self)=>isNone(self) ? [] : [
        self.value
    ];
const partitionMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    if (isNone(self)) {
        return [
            none(),
            none()
        ];
    }
    const e = f(self.value);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isLeft(e) ? [
        some(e.left),
        none()
    ] : [
        none(),
        some(e.right)
    ];
});
const filterMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>isNone(self) ? none() : f(self.value));
const filter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>filterMap(self, (b)=>predicate(b) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(b) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none));
const getEquivalence = (isEquivalent)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.make((x, y)=>isNone(x) ? isNone(y) : isNone(y) ? false : isEquivalent(x.value, y.value));
const getOrder = (O)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.make((self, that)=>isSome(self) ? isSome(that) ? O(self.value, that.value) : 1 : -1);
const lift2 = (f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>zipWith(self, that, f));
const liftPredicate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (b, predicate)=>predicate(b) ? some(b) : none());
const containsWith = (isEquivalent)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, a)=>isNone(self) ? false : isEquivalent(self.value, a));
const _equivalence = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equivalence();
const contains = /*#__PURE__*/ containsWith(_equivalence);
const exists = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, refinement)=>isNone(self) ? false : refinement(self.value));
const bindTo = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bindTo(map);
const let_ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.let_(map);
;
const bind = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bind(map, flatMap);
const Do = /*#__PURE__*/ some({});
const adapter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.adapter();
const gen = (...args)=>{
    let f;
    if (args.length === 1) {
        f = args[0];
    } else {
        f = args[1].bind(args[0]);
    }
    const iterator = f(adapter);
    let state = iterator.next();
    if (state.done) {
        return some(state.value);
    } else {
        let current = state.value;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isGenKind(current)) {
            current = current.value;
        } else {
            current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.yieldWrapGet(current);
        }
        if (isNone(current)) {
            return current;
        }
        while(!state.done){
            state = iterator.next(current.value);
            if (!state.done) {
                current = state.value;
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isGenKind(current)) {
                    current = current.value;
                } else {
                    current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.yieldWrapGet(current);
                }
                if (isNone(current)) {
                    return current;
                }
            }
        }
        return some(state.value);
    }
}; //# sourceMappingURL=Option.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/context.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ContextProto": (()=>ContextProto),
    "STMTypeId": (()=>STMTypeId),
    "Tag": (()=>Tag),
    "TagProto": (()=>TagProto),
    "TagTypeId": (()=>TagTypeId),
    "TypeId": (()=>TypeId),
    "add": (()=>add),
    "empty": (()=>empty),
    "get": (()=>get),
    "getOption": (()=>getOption),
    "getOrElse": (()=>getOrElse),
    "isContext": (()=>isContext),
    "isTag": (()=>isTag),
    "make": (()=>make),
    "makeContext": (()=>makeContext),
    "makeGenericTag": (()=>makeGenericTag),
    "merge": (()=>merge),
    "omit": (()=>omit),
    "pick": (()=>pick),
    "unsafeGet": (()=>unsafeGet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/effectable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Inspectable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Pipeable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/option.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const TagTypeId = /*#__PURE__*/ Symbol.for("effect/Context/Tag");
/** @internal */ const STMSymbolKey = "effect/STM";
const STMTypeId = /*#__PURE__*/ Symbol.for(STMSymbolKey);
const TagProto = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectPrototype"],
    _op: "Tag",
    [STMTypeId]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectVariance"],
    [TagTypeId]: {
        _Service: (_)=>_,
        _Identifier: (_)=>_
    },
    toString () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])(this.toJSON());
    },
    toJSON () {
        return {
            _id: "Tag",
            key: this.key,
            stack: this.stack
        };
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeInspectSymbol"]] () {
        return this.toJSON();
    },
    of (self) {
        return self;
    },
    context (self) {
        return make(this, self);
    }
};
const makeGenericTag = (key)=>{
    const limit = Error.stackTraceLimit;
    Error.stackTraceLimit = 2;
    const creationError = new Error();
    Error.stackTraceLimit = limit;
    const tag = Object.create(TagProto);
    Object.defineProperty(tag, "stack", {
        get () {
            return creationError.stack;
        }
    });
    tag.key = key;
    return tag;
};
const Tag = (id)=>()=>{
        const limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 2;
        const creationError = new Error();
        Error.stackTraceLimit = limit;
        function TagClass() {}
        Object.setPrototypeOf(TagClass, TagProto);
        TagClass.key = id;
        Object.defineProperty(TagClass, "stack", {
            get () {
                return creationError.stack;
            }
        });
        return TagClass;
    };
const TypeId = /*#__PURE__*/ Symbol.for("effect/Context");
const ContextProto = {
    [TypeId]: {
        _Services: (_)=>_
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] (that) {
        if (isContext(that)) {
            if (this.unsafeMap.size === that.unsafeMap.size) {
                for (const k of this.unsafeMap.keys()){
                    if (!that.unsafeMap.has(k) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equals(this.unsafeMap.get(k), that.unsafeMap.get(k))) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cached(this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.number(this.unsafeMap.size));
    },
    pipe () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipeArguments"])(this, arguments);
    },
    toString () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])(this.toJSON());
    },
    toJSON () {
        return {
            _id: "Context",
            services: Array.from(this.unsafeMap).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toJSON"])
        };
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeInspectSymbol"]] () {
        return this.toJSON();
    }
};
const makeContext = (unsafeMap)=>{
    const context = Object.create(ContextProto);
    context.unsafeMap = unsafeMap;
    return context;
};
const serviceNotFoundError = (tag)=>{
    const error = new Error(`Service not found${tag.key ? `: ${String(tag.key)}` : ""}`);
    if (tag.stack) {
        const lines = tag.stack.split("\n");
        if (lines.length > 2) {
            const afterAt = lines[2].match(/at (.*)/);
            if (afterAt) {
                error.message = error.message + ` (defined at ${afterAt[1]})`;
            }
        }
    }
    if (error.stack) {
        const lines = error.stack.split("\n");
        lines.splice(1, 3);
        error.stack = lines.join("\n");
    }
    return error;
};
const isContext = (u)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(u, TypeId);
const isTag = (u)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(u, TagTypeId);
const _empty = /*#__PURE__*/ makeContext(/*#__PURE__*/ new Map());
const empty = ()=>_empty;
const make = (tag, service)=>makeContext(new Map([
        [
            tag.key,
            service
        ]
    ]));
const add = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, tag, service)=>{
    const map = new Map(self.unsafeMap);
    map.set(tag.key, service);
    return makeContext(map);
});
const unsafeGet = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, tag)=>{
    if (!self.unsafeMap.has(tag.key)) {
        throw serviceNotFoundError(tag);
    }
    return self.unsafeMap.get(tag.key);
});
const get = unsafeGet;
const getOrElse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, tag, orElse)=>{
    if (!self.unsafeMap.has(tag.key)) {
        return orElse();
    }
    return self.unsafeMap.get(tag.key);
});
const getOption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, tag)=>{
    if (!self.unsafeMap.has(tag.key)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(self.unsafeMap.get(tag.key));
});
const merge = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>{
    const map = new Map(self.unsafeMap);
    for (const [tag, s] of that.unsafeMap){
        map.set(tag, s);
    }
    return makeContext(map);
});
const pick = (...tags)=>(self)=>{
        const tagSet = new Set(tags.map((_)=>_.key));
        const newEnv = new Map();
        for (const [tag, s] of self.unsafeMap.entries()){
            if (tagSet.has(tag)) {
                newEnv.set(tag, s);
            }
        }
        return makeContext(newEnv);
    };
const omit = (...tags)=>(self)=>{
        const newEnv = new Map(self.unsafeMap);
        for (const tag of tags){
            newEnv.delete(tag.key);
        }
        return makeContext(newEnv);
    }; //# sourceMappingURL=context.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Context.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "GenericTag": (()=>GenericTag),
    "Tag": (()=>Tag),
    "add": (()=>add),
    "empty": (()=>empty),
    "get": (()=>get),
    "getOption": (()=>getOption),
    "getOrElse": (()=>getOrElse),
    "isContext": (()=>isContext),
    "isTag": (()=>isTag),
    "make": (()=>make),
    "merge": (()=>merge),
    "omit": (()=>omit),
    "pick": (()=>pick),
    "unsafeGet": (()=>unsafeGet),
    "unsafeMake": (()=>unsafeMake)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/context.js [app-client] (ecmascript)");
;
const TagTypeId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.TagTypeId;
const GenericTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.makeGenericTag;
const TypeId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.TypeId;
const unsafeMake = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.makeContext;
const isContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isContext;
const isTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isTag;
const empty = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.empty;
const make = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.make;
const add = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.add;
const get = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.get;
const getOrElse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getOrElse;
const unsafeGet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.unsafeGet;
const getOption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getOption;
const merge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.merge;
const pick = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.pick;
const omit = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.omit;
const Tag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Tag; //# sourceMappingURL=Context.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Effectable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ChannelTypeId": (()=>ChannelTypeId),
    "Class": (()=>Class),
    "CommitPrototype": (()=>CommitPrototype),
    "EffectPrototype": (()=>EffectPrototype),
    "EffectTypeId": (()=>EffectTypeId),
    "SinkTypeId": (()=>SinkTypeId),
    "StreamTypeId": (()=>StreamTypeId),
    "StructuralClass": (()=>StructuralClass),
    "StructuralCommitPrototype": (()=>StructuralCommitPrototype)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/effectable.js [app-client] (ecmascript)");
;
const EffectTypeId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.EffectTypeId;
const StreamTypeId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.StreamTypeId;
const SinkTypeId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.SinkTypeId;
const ChannelTypeId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ChannelTypeId;
const EffectPrototype = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.EffectPrototype;
const CommitPrototype = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.CommitPrototype;
const StructuralCommitPrototype = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.StructuralCommitPrototype;
const Base = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Base;
const StructuralBase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.StructuralBase;
class Class extends Base {
}
class StructuralClass extends StructuralBase {
} //# sourceMappingURL=Effectable.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/singleShotGen.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/** @internal */ __turbopack_esm__({
    "SingleShotGen": (()=>SingleShotGen)
});
class SingleShotGen {
    self;
    called = false;
    constructor(self){
        this.self = self;
    }
    next(a) {
        return this.called ? {
            value: a,
            done: true
        } : (this.called = true, {
            value: this.self,
            done: false
        });
    }
    return(a) {
        return {
            value: a,
            done: true
        };
    }
    throw(e) {
        throw e;
    }
    [Symbol.iterator]() {
        return new SingleShotGen(this.self);
    }
} //# sourceMappingURL=singleShotGen.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Micro.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Class": (()=>Class),
    "Do": (()=>Do),
    "EnvRefTypeId": (()=>EnvRefTypeId),
    "EnvTypeId": (()=>EnvTypeId),
    "Error": (()=>Error),
    "HandleTypeId": (()=>HandleTypeId),
    "MicroCauseTypeId": (()=>MicroCauseTypeId),
    "MicroSchedulerDefault": (()=>MicroSchedulerDefault),
    "MicroScope": (()=>MicroScope),
    "MicroScopeTypeId": (()=>MicroScopeTypeId),
    "NoSuchElementException": (()=>NoSuchElementException),
    "TaggedError": (()=>TaggedError),
    "TimeoutException": (()=>TimeoutException),
    "TypeId": (()=>TypeId),
    "acquireRelease": (()=>acquireRelease),
    "acquireUseRelease": (()=>acquireUseRelease),
    "addFinalizer": (()=>addFinalizer),
    "all": (()=>all),
    "andThen": (()=>andThen),
    "as": (()=>as),
    "asSome": (()=>asSome),
    "asVoid": (()=>asVoid),
    "async": (()=>async),
    "bind": (()=>bind),
    "bindTo": (()=>bindTo),
    "catchAll": (()=>catchAll),
    "catchAllCause": (()=>catchAllCause),
    "catchAllDefect": (()=>catchAllDefect),
    "catchCauseIf": (()=>catchCauseIf),
    "catchIf": (()=>catchIf),
    "catchTag": (()=>catchTag),
    "causeDie": (()=>causeDie),
    "causeFail": (()=>causeFail),
    "causeInterrupt": (()=>causeInterrupt),
    "causeIsDie": (()=>causeIsDie),
    "causeIsFail": (()=>causeIsFail),
    "causeIsInterrupt": (()=>causeIsInterrupt),
    "causeSquash": (()=>causeSquash),
    "causeWithTrace": (()=>causeWithTrace),
    "context": (()=>context),
    "currentAbortController": (()=>currentAbortController),
    "currentAbortSignal": (()=>currentAbortSignal),
    "currentConcurrency": (()=>currentConcurrency),
    "currentContext": (()=>currentContext),
    "currentMaxDepthBeforeYield": (()=>currentMaxDepthBeforeYield),
    "currentScheduler": (()=>currentScheduler),
    "delay": (()=>delay),
    "die": (()=>die),
    "either": (()=>either),
    "ensuring": (()=>ensuring),
    "envGet": (()=>envGet),
    "envMake": (()=>envMake),
    "envMutate": (()=>envMutate),
    "envRefMake": (()=>envRefMake),
    "envSet": (()=>envSet),
    "envUnsafeMakeEmpty": (()=>envUnsafeMakeEmpty),
    "exit": (()=>exit),
    "exitDie": (()=>exitDie),
    "exitFail": (()=>exitFail),
    "exitFailCause": (()=>exitFailCause),
    "exitInterrupt": (()=>exitInterrupt),
    "exitIsDie": (()=>exitIsDie),
    "exitIsFail": (()=>exitIsFail),
    "exitIsFailure": (()=>exitIsFailure),
    "exitIsInterrupt": (()=>exitIsInterrupt),
    "exitIsSuccess": (()=>exitIsSuccess),
    "exitSucceed": (()=>exitSucceed),
    "exitVoid": (()=>exitVoid),
    "fail": (()=>fail),
    "failCause": (()=>failCause),
    "failCauseSync": (()=>failCauseSync),
    "failSync": (()=>failSync),
    "filter": (()=>filter),
    "filterMap": (()=>filterMap),
    "filterOrFail": (()=>filterOrFail),
    "filterOrFailCause": (()=>filterOrFailCause),
    "flatMap": (()=>flatMap),
    "flatten": (()=>flatten),
    "flip": (()=>flip),
    "forEach": (()=>forEach),
    "forever": (()=>forever),
    "fork": (()=>fork),
    "forkDaemon": (()=>forkDaemon),
    "forkIn": (()=>forkIn),
    "forkScoped": (()=>forkScoped),
    "fromEither": (()=>fromEither),
    "fromExit": (()=>fromExit),
    "fromExitSync": (()=>fromExitSync),
    "fromOption": (()=>fromOption),
    "gen": (()=>gen),
    "getEnvRef": (()=>getEnvRef),
    "ignore": (()=>ignore),
    "ignoreLogged": (()=>ignoreLogged),
    "interrupt": (()=>interrupt),
    "interruptible": (()=>interruptible),
    "isHandle": (()=>isHandle),
    "isMicro": (()=>isMicro),
    "isMicroCause": (()=>isMicroCause),
    "let": (()=>let_),
    "locally": (()=>locally),
    "make": (()=>make),
    "map": (()=>map),
    "mapError": (()=>mapError),
    "mapErrorCause": (()=>mapErrorCause),
    "match": (()=>match),
    "matchCause": (()=>matchCause),
    "matchCauseEffect": (()=>matchCauseEffect),
    "matchEffect": (()=>matchEffect),
    "never": (()=>never),
    "onError": (()=>onError),
    "onExit": (()=>onExit),
    "onExitIf": (()=>onExitIf),
    "onInterrupt": (()=>onInterrupt),
    "option": (()=>option),
    "orDie": (()=>orDie),
    "orElseSucceed": (()=>orElseSucceed),
    "promise": (()=>promise),
    "provideContext": (()=>provideContext),
    "provideScope": (()=>provideScope),
    "provideService": (()=>provideService),
    "provideServiceEffect": (()=>provideServiceEffect),
    "race": (()=>race),
    "raceAll": (()=>raceAll),
    "raceAllFirst": (()=>raceAllFirst),
    "raceFirst": (()=>raceFirst),
    "repeat": (()=>repeat),
    "repeatExit": (()=>repeatExit),
    "retry": (()=>retry),
    "runFork": (()=>runFork),
    "runPromise": (()=>runPromise),
    "runPromiseExit": (()=>runPromiseExit),
    "runSymbol": (()=>runSymbol),
    "runSync": (()=>runSync),
    "runSyncExit": (()=>runSyncExit),
    "sandbox": (()=>sandbox),
    "scheduleAddDelay": (()=>scheduleAddDelay),
    "scheduleExponential": (()=>scheduleExponential),
    "scheduleIntersect": (()=>scheduleIntersect),
    "scheduleRecurs": (()=>scheduleRecurs),
    "scheduleSpaced": (()=>scheduleSpaced),
    "scheduleUnion": (()=>scheduleUnion),
    "scheduleWithMaxDelay": (()=>scheduleWithMaxDelay),
    "scheduleWithMaxElapsed": (()=>scheduleWithMaxElapsed),
    "scope": (()=>scope),
    "scopeMake": (()=>scopeMake),
    "scopeUnsafeMake": (()=>scopeUnsafeMake),
    "scoped": (()=>scoped),
    "service": (()=>service),
    "serviceOption": (()=>serviceOption),
    "sleep": (()=>sleep),
    "succeed": (()=>succeed),
    "succeedNone": (()=>succeedNone),
    "succeedSome": (()=>succeedSome),
    "suspend": (()=>suspend),
    "sync": (()=>sync),
    "tap": (()=>tap),
    "tapDefect": (()=>tapDefect),
    "tapError": (()=>tapError),
    "tapErrorCause": (()=>tapErrorCause),
    "tapErrorCauseIf": (()=>tapErrorCauseIf),
    "timeout": (()=>timeout),
    "timeoutOption": (()=>timeoutOption),
    "timeoutOrElse": (()=>timeoutOrElse),
    "try": (()=>try_),
    "tryPromise": (()=>tryPromise),
    "uninterruptible": (()=>uninterruptible),
    "uninterruptibleMask": (()=>uninterruptibleMask),
    "void": (()=>void_),
    "when": (()=>when),
    "withConcurrency": (()=>withConcurrency),
    "withTrace": (()=>withTrace),
    "yieldFlush": (()=>yieldFlush),
    "yieldNow": (()=>yieldNow),
    "yieldWithPriority": (()=>yieldWithPriority),
    "zip": (()=>zip),
    "zipWith": (()=>zipWith)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Either.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/doNotation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Inspectable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/effectable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Effectable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$singleShotGen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/singleShotGen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Pipeable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$GlobalValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/GlobalValue.js [app-client] (ecmascript)");
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
;
;
const TypeId = /*#__PURE__*/ Symbol.for("effect/Micro");
const runSymbol = /*#__PURE__*/ Symbol.for("effect/Micro/runSymbol");
const isMicro = (u)=>typeof u === "object" && u !== null && TypeId in u;
// ----------------------------------------------------------------------------
// Microable
// ----------------------------------------------------------------------------
const MicroProto = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.EffectPrototype,
    _op: "Micro",
    [TypeId]: {
        _A: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"],
        _E: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"],
        _R: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]
    },
    [Symbol.iterator] () {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$singleShotGen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleShotGen"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YieldWrap"](this));
    }
};
const MicroBase = /*#__PURE__*/ function() {
    function Base() {}
    Base.prototype = MicroProto;
    return Base;
}();
class Class extends MicroBase {
    /**
   * @since 3.8.4
   * @experimental
   */ [runSymbol](env, onExit) {
        this.asMicro()[runSymbol](env, onExit);
    }
}
const MicroCauseTypeId = /*#__PURE__*/ Symbol.for("effect/Micro/MicroCause");
const isMicroCause = (self)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(self, MicroCauseTypeId);
const microCauseVariance = {
    _E: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]
};
class MicroCauseImpl extends globalThis.Error {
    _tag;
    traces;
    [MicroCauseTypeId];
    constructor(_tag, originalError, traces){
        const causeName = `MicroCause.${_tag}`;
        let name;
        let message;
        let stack;
        if (originalError instanceof globalThis.Error) {
            name = `(${causeName}) ${originalError.name}`;
            message = originalError.message;
            const messageLines = message.split("\n").length;
            stack = originalError.stack ? `(${causeName}) ${originalError.stack.split("\n").slice(0, messageLines + 3).join("\n")}` : `${name}: ${message}`;
        } else {
            name = causeName;
            message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toStringUnknown"])(originalError, 0);
            stack = `${name}: ${message}`;
        }
        if (traces.length > 0) {
            stack += `\n    ${traces.join("\n    ")}`;
        }
        super(message);
        this._tag = _tag;
        this.traces = traces;
        this[MicroCauseTypeId] = microCauseVariance;
        this.name = name;
        this.stack = stack;
    }
    pipe() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipeArguments"])(this, arguments);
    }
    toString() {
        return this.stack;
    }
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeInspectSymbol"]]() {
        return this.stack;
    }
}
class FailImpl extends MicroCauseImpl {
    error;
    constructor(error, traces = []){
        super("Fail", error, traces);
        this.error = error;
    }
}
const causeFail = (error, traces = [])=>new FailImpl(error, traces);
class DieImpl extends MicroCauseImpl {
    defect;
    constructor(defect, traces = []){
        super("Die", defect, traces);
        this.defect = defect;
    }
}
const causeDie = (defect, traces = [])=>new DieImpl(defect, traces);
class InterruptImpl extends MicroCauseImpl {
    constructor(traces = []){
        super("Interrupt", "interrupted", traces);
    }
}
const causeInterrupt = (traces = [])=>new InterruptImpl(traces);
const causeIsFail = (self)=>self._tag === "Fail";
const causeIsDie = (self)=>self._tag === "Die";
const causeIsInterrupt = (self)=>self._tag === "Interrupt";
const causeSquash = (self)=>self._tag === "Fail" ? self.error : self._tag === "Die" ? self.defect : self;
const causeWithTrace = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, trace)=>{
    const traces = [
        ...self.traces,
        trace
    ];
    switch(self._tag){
        case "Die":
            return causeDie(self.defect, traces);
        case "Interrupt":
            return causeInterrupt(traces);
        case "Fail":
            return causeFail(self.error, traces);
    }
});
const exitInterrupt = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left(/*#__PURE__*/ causeInterrupt());
const exitSucceed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.right;
const exitFail = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left(causeFail(e));
const exitDie = (defect)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left(causeDie(defect));
const exitFailCause = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left;
const exitIsSuccess = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isRight;
const exitIsFailure = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isLeft;
const exitIsInterrupt = (self)=>exitIsFailure(self) && self.left._tag === "Interrupt";
const exitIsFail = (self)=>exitIsFailure(self) && self.left._tag === "Fail";
const exitIsDie = (self)=>exitIsFailure(self) && self.left._tag === "Die";
const exitVoid = /*#__PURE__*/ exitSucceed(void 0);
const EnvTypeId = /*#__PURE__*/ Symbol.for("effect/Micro/Env");
const EnvProto = {
    [EnvTypeId]: {
        _R: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]
    },
    pipe () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipeArguments"])(this, arguments);
    }
};
const envMake = (refs)=>{
    const self = Object.create(EnvProto);
    self.refs = refs;
    return self;
};
const envUnsafeMakeEmpty = ()=>{
    const controller = new AbortController();
    const refs = Object.create(null);
    refs[currentAbortController.key] = controller;
    refs[currentAbortSignal.key] = controller.signal;
    refs[currentScheduler.key] = new MicroSchedulerDefault();
    return envMake(refs);
};
const envGet = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, ref)=>ref.key in self.refs ? self.refs[ref.key] : ref.initial);
const envSet = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, ref, value)=>{
    const refs = Object.assign(Object.create(null), self.refs);
    refs[ref.key] = value;
    return envMake(refs);
});
const envMutate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>envMake(f(Object.assign(Object.create(null), self.refs))));
const service = (tag)=>make(function(env, onExit) {
        onExit(exitSucceed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.get(envGet(env, currentContext), tag)));
    });
const serviceOption = (tag)=>make(function(env, onExit) {
        onExit(exitSucceed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getOption(envGet(env, currentContext), tag)));
    });
const getEnvRef = (envRef)=>make((env, onExit)=>onExit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.right(envGet(env, envRef))));
const locally = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, fiberRef, value)=>make((env, onExit)=>self[runSymbol](envSet(env, fiberRef, value), onExit)));
const context = ()=>getEnvRef(currentContext);
const provideContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, provided)=>make(function(env, onExit) {
        const context = envGet(env, currentContext);
        const nextEnv = envSet(env, currentContext, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.merge(context, provided));
        self[runSymbol](nextEnv, onExit);
    }));
const provideService = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, tag, service)=>make(function(env, onExit) {
        const context = envGet(env, currentContext);
        const nextEnv = envSet(env, currentContext, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.add(context, tag, service));
        self[runSymbol](nextEnv, onExit);
    }));
const provideServiceEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, tag, acquire)=>flatMap(acquire, (service)=>provideService(self, tag, service)));
const setImmediate = "setImmediate" in globalThis ? globalThis.setImmediate : (f)=>setTimeout(f, 0);
class MicroSchedulerDefault {
    tasks = [];
    running = false;
    /**
   * @since 3.5.9
   */ scheduleTask(task, _priority) {
        this.tasks.push(task);
        if (!this.running) {
            this.running = true;
            setImmediate(this.afterScheduled);
        }
    }
    /**
   * @since 3.5.9
   */ afterScheduled = ()=>{
        this.running = false;
        this.runTasks();
    };
    /**
   * @since 3.5.9
   */ runTasks() {
        const tasks = this.tasks;
        this.tasks = [];
        for(let i = 0, len = tasks.length; i < len; i++){
            tasks[i]();
        }
    }
    /**
   * @since 3.5.9
   */ shouldYield(_env) {
        return false;
    }
    /**
   * @since 3.5.9
   */ flush() {
        while(this.tasks.length > 0){
            this.runTasks();
        }
    }
}
const EnvRefTypeId = /*#__PURE__*/ Symbol.for("effect/Micro/EnvRef");
const EnvRefProto = {
    ...MicroProto,
    [EnvRefTypeId]: EnvRefTypeId,
    [runSymbol] (env, onExit) {
        getEnvRef(this)[runSymbol](env, onExit);
    }
};
const envRefMake = (key, initial)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$GlobalValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalValue"])(key, ()=>{
        const self = Object.create(EnvRefProto);
        self.key = key;
        self.initial = initial();
        return self;
    });
const currentAbortController = /*#__PURE__*/ envRefMake("effect/Micro/currentAbortController", ()=>undefined);
const currentAbortSignal = /*#__PURE__*/ envRefMake("effect/Micro/currentAbortSignal", ()=>undefined);
const currentContext = /*#__PURE__*/ envRefMake("effect/Micro/currentContext", ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.empty());
const currentConcurrency = /*#__PURE__*/ envRefMake("effect/Micro/currentConcurrency", ()=>"unbounded");
const currentMaxDepthBeforeYield = /*#__PURE__*/ envRefMake("effect/Micro/currentMaxDepthBeforeYield", ()=>2048);
const currentInterruptible = /*#__PURE__*/ envRefMake("effect/Micro/currentInterruptible", ()=>true);
const currentScheduler = /*#__PURE__*/ envRefMake("effect/Micro/currentScheduler", ()=>new MicroSchedulerDefault());
const withConcurrency = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, concurrency)=>locally(self, currentConcurrency, concurrency));
// ----------------------------------------------------------------------------
// constructors
// ----------------------------------------------------------------------------
const microDepthState = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$GlobalValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalValue"])("effect/Micro/microDepthState", ()=>({
        depth: 0,
        maxDepthBeforeYield: currentMaxDepthBeforeYield.initial
    }));
const unsafeMake = (run)=>{
    const self = Object.create(MicroProto);
    self[runSymbol] = run;
    return self;
};
const unsafeMakeOptions = (run, checkAbort)=>unsafeMake(function execute(env, onExit) {
        if (checkAbort && env.refs[currentInterruptible.key] !== false && env.refs[currentAbortSignal.key].aborted) {
            return onExit(exitInterrupt);
        }
        microDepthState.depth++;
        if (microDepthState.depth === 1) {
            microDepthState.maxDepthBeforeYield = envGet(env, currentMaxDepthBeforeYield);
        }
        const scheduler = env.refs[currentScheduler.key];
        if (microDepthState.depth >= microDepthState.maxDepthBeforeYield || scheduler.shouldYield(env)) {
            scheduler.scheduleTask(()=>execute(env, onExit), 0);
        } else {
            try {
                run(env, onExit);
            } catch (err) {
                onExit(exitDie(err));
            }
        }
        microDepthState.depth--;
    });
const make = (run)=>unsafeMakeOptions(run, true);
const fromExit = (self)=>make(function(_env, onExit) {
        onExit(self);
    });
const fromExitSync = (self)=>make(function(_env, onExit) {
        onExit(self());
    });
const succeed = (a)=>fromExit(exitSucceed(a));
const succeedSome = (a)=>succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(a));
const succeedNone = /*#__PURE__*/ succeed(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none());
const fail = (e)=>fromExit(exitFail(e));
const failSync = (e)=>make(function(_env, onExit) {
        onExit(exitFail(e()));
    });
const die = (defect)=>fromExit(exitDie(defect));
const failCause = (cause)=>fromExit(exitFailCause(cause));
const failCauseSync = (cause)=>fromExitSync(()=>exitFailCause(cause()));
const sync = (evaluate)=>make(function(_env, onExit) {
        onExit(exitSucceed(evaluate()));
    });
const fromOption = (option)=>make(function(_env, onExit) {
        onExit(option._tag === "Some" ? exitSucceed(option.value) : exitFail(new NoSuchElementException({})));
    });
const fromEither = (either)=>make(function(_env, onExit) {
        onExit(either._tag === "Right" ? either : exitFail(either.left));
    });
const suspend = (evaluate)=>make(function(env, onExit) {
        evaluate()[runSymbol](env, onExit);
    });
const void_ = /*#__PURE__*/ succeed(void 0);
;
const async = (register)=>make(function(env, onExit) {
        let resumed = false;
        const controller = register.length > 1 ? new AbortController() : undefined;
        const signal = envGet(env, currentAbortSignal);
        let cleanup = undefined;
        function onAbort() {
            if (cleanup) {
                resume(uninterruptible(andThen(cleanup, fromExit(exitInterrupt))));
            } else {
                resume(fromExit(exitInterrupt));
            }
            if (controller !== undefined) {
                controller.abort();
            }
        }
        function resume(effect) {
            if (resumed) {
                return;
            }
            resumed = true;
            signal.removeEventListener("abort", onAbort);
            effect[runSymbol](env, onExit);
        }
        cleanup = controller === undefined ? register(resume) : register(resume, controller.signal);
        if (resumed) return;
        signal.addEventListener("abort", onAbort);
    });
const try_ = (options)=>make(function(_env, onExit) {
        try {
            onExit(exitSucceed(options.try()));
        } catch (err) {
            onExit(exitFail(options.catch(err)));
        }
    });
;
const promise = (evaluate)=>async(function(resume, signal) {
        evaluate(signal).then((a)=>resume(succeed(a)), (e)=>resume(die(e)));
    });
const tryPromise = (options)=>async(function(resume, signal) {
        try {
            options.try(signal).then((a)=>resume(succeed(a)), (e)=>resume(fail(options.catch(e))));
        } catch (err) {
            resume(fail(options.catch(err)));
        }
    });
const yieldWithPriority = (priority)=>make(function(env, onExit) {
        envGet(env, currentScheduler).scheduleTask(()=>onExit(exitVoid), priority);
    });
const yieldNow = /*#__PURE__*/ yieldWithPriority(0);
const yieldFlush = /*#__PURE__*/ make(function(env, onExit) {
    envGet(env, currentScheduler).flush();
    onExit(exitVoid);
});
const never = /*#__PURE__*/ async(function() {
    const interval = setInterval(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constVoid"], 2147483646);
    return sync(()=>clearInterval(interval));
});
const gen = (...args)=>make(function(env, onExit) {
        const iterator = args.length === 1 ? args[0]() : args[1].call(args[0]);
        let running = false;
        let value = undefined;
        function run() {
            running = true;
            try {
                let shouldContinue = true;
                while(shouldContinue){
                    const result = iterator.next(value);
                    if (result.done) {
                        return onExit(exitSucceed(result.value));
                    }
                    shouldContinue = false;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yieldWrapGet"])(result.value)[runSymbol](env, function(exit) {
                        if (exit._tag === "Left") {
                            onExit(exit);
                        } else {
                            shouldContinue = true;
                            value = exit.right;
                            if (!running) run();
                        }
                    });
                }
            } catch (err) {
                onExit(exitDie(err));
            }
            running = false;
        }
        run();
    });
const flatten = (self)=>make(function(env, onExit) {
        self[runSymbol](env, (exit)=>exit._tag === "Left" ? onExit(exit) : exit.right[runSymbol](env, onExit));
    });
const map = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>make(function(env, onExit) {
        self[runSymbol](env, function(exit) {
            onExit(exit._tag === "Left" ? exit : exitSucceed(f(exit.right)));
        });
    }));
const as = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, value)=>map(self, (_)=>value));
const asSome = (self)=>map(self, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some);
const flatMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>make(function(env, onExit) {
        self[runSymbol](env, function(exit) {
            if (exit._tag === "Left") {
                return onExit(exit);
            }
            f(exit.right)[runSymbol](env, onExit);
        });
    }));
const flip = (self)=>matchEffect(self, {
        onFailure: succeed,
        onSuccess: fail
    });
const andThen = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>make(function(env, onExit) {
        self[runSymbol](env, function(exit) {
            if (exit._tag === "Left") {
                return onExit(exit);
            } else if (envGet(env, currentAbortSignal).aborted) {
                return onExit(exitInterrupt);
            }
            const value = isMicro(f) ? f : typeof f === "function" ? f(exit.right) : f;
            if (isMicro(value)) {
                value[runSymbol](env, onExit);
            } else {
                onExit(exitSucceed(value));
            }
        });
    }));
const tap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>make(function(env, onExit) {
        self[runSymbol](env, function(selfExit) {
            if (selfExit._tag === "Left") {
                return onExit(selfExit);
            } else if (envGet(env, currentAbortSignal).aborted) {
                return onExit(exitInterrupt);
            }
            const value = isMicro(f) ? f : typeof f === "function" ? f(selfExit.right) : f;
            if (isMicro(value)) {
                value[runSymbol](env, function(tapExit) {
                    if (tapExit._tag === "Left") {
                        return onExit(tapExit);
                    }
                    onExit(selfExit);
                });
            } else {
                onExit(selfExit);
            }
        });
    }));
const asVoid = (self)=>map(self, (_)=>void 0);
const exit = (self)=>make(function(env, onExit) {
        self[runSymbol](env, function(exit) {
            onExit(exitSucceed(exit));
        });
    });
const sandbox = (self)=>catchAllCause(self, (cause)=>fail(cause));
function forkSignal(env) {
    const controller = new AbortController();
    const parentSignal = envGet(env, currentAbortSignal);
    function onAbort() {
        controller.abort();
        parentSignal.removeEventListener("abort", onAbort);
    }
    parentSignal.addEventListener("abort", onAbort);
    const envWithSignal = envMutate(env, function(refs) {
        refs[currentAbortController.key] = controller;
        refs[currentAbortSignal.key] = controller.signal;
        return refs;
    });
    return [
        envWithSignal,
        onAbort
    ];
}
const raceAll = (all)=>make(function(env, onExit) {
        const [envWithSignal, onAbort] = forkSignal(env);
        const effects = Array.from(all);
        let len = effects.length;
        let index = 0;
        let done = 0;
        let exit = undefined;
        const causes = [];
        function onDone(exit_) {
            done++;
            if (exit_._tag === "Right" && exit === undefined) {
                len = index;
                exit = exit_;
                onAbort();
            } else if (exit_._tag === "Left") {
                causes.push(exit_.left);
            }
            if (done >= len) {
                onExit(exit ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left(causes[0]));
            }
        }
        for(; index < len; index++){
            effects[index][runSymbol](envWithSignal, onDone);
        }
    });
const raceAllFirst = (all)=>make(function(env, onExit) {
        const [envWithSignal, onAbort] = forkSignal(env);
        const effects = Array.from(all);
        let len = effects.length;
        let index = 0;
        let done = 0;
        let exit = undefined;
        const causes = [];
        function onDone(exit_) {
            done++;
            if (exit === undefined) {
                len = index;
                exit = exit_;
                onAbort();
            }
            if (done >= len) {
                onExit(exit ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left(causes[0]));
            }
        }
        for(; index < len; index++){
            effects[index][runSymbol](envWithSignal, onDone);
        }
    });
const race = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>raceAll([
        self,
        that
    ]));
const raceFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>raceAllFirst([
        self,
        that
    ]));
const zip = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])((args)=>isMicro(args[1]), (self, that, options)=>zipWith(self, that, (a, a2)=>[
            a,
            a2
        ], options));
const zipWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])((args)=>isMicro(args[1]), (self, that, f, options)=>{
    if (options?.concurrent) {
        // Use `all` exclusively for concurrent cases, as it introduces additional overhead due to the management of concurrency
        return map(all([
            self,
            that
        ], {
            concurrency: "unbounded"
        }), ([a, a2])=>f(a, a2));
    }
    return flatMap(self, (a)=>map(that, (a2)=>f(a, a2)));
});
const filterOrFailCause = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])((args)=>isMicro(args[0]), (self, refinement, orFailWith)=>flatMap(self, (a)=>refinement(a) ? succeed(a) : failCause(orFailWith(a))));
const filterOrFail = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])((args)=>isMicro(args[0]), (self, refinement, orFailWith)=>flatMap(self, (a)=>refinement(a) ? succeed(a) : fail(orFailWith(a))));
const when = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, condition)=>flatMap(isMicro(condition) ? condition : sync(condition), (pass)=>pass ? asSome(self) : succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none())));
const repeatExit = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, options)=>make(function(env, onExit) {
        const startedAt = options.schedule ? Date.now() : 0;
        let attempt = 0;
        self[runSymbol](env, function loop(exit) {
            if (options.while !== undefined && !options.while(exit)) {
                return onExit(exit);
            } else if (options.times !== undefined && attempt >= options.times) {
                return onExit(exit);
            }
            attempt++;
            let delayEffect = yieldNow;
            if (options.schedule !== undefined) {
                const elapsed = Date.now() - startedAt;
                const duration = options.schedule(attempt, elapsed);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isNone(duration)) {
                    return onExit(exit);
                }
                delayEffect = sleep(duration.value);
            }
            delayEffect[runSymbol](env, function(exit) {
                if (exit._tag === "Left") {
                    return onExit(exit);
                }
                self[runSymbol](env, loop);
            });
        });
    }));
const repeat = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])((args)=>isMicro(args[0]), (self, options)=>repeatExit(self, {
        ...options,
        while: (exit)=>exit._tag === "Right" && (options?.while === undefined || options.while(exit.right))
    }));
const forever = (self)=>repeat(self);
const scheduleRecurs = (n)=>(attempt)=>attempt <= n ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(0) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
const scheduleSpaced = (millis)=>()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(millis);
const scheduleExponential = (baseMillis, factor = 2)=>(attempt)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(Math.pow(factor, attempt) * baseMillis);
const scheduleAddDelay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>(attempt, elapsed)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.map(self(attempt, elapsed), (duration)=>duration + f()));
const scheduleWithMaxDelay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, max)=>(attempt, elapsed)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.map(self(attempt, elapsed), (duration)=>Math.min(duration, max)));
const scheduleWithMaxElapsed = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, max)=>(attempt, elapsed)=>elapsed < max ? self(attempt, elapsed) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none());
const scheduleUnion = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>(attempt, elapsed)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.zipWith(self(attempt, elapsed), that(attempt, elapsed), (d1, d2)=>Math.min(d1, d2)));
const scheduleIntersect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>(attempt, elapsed)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.zipWith(self(attempt, elapsed), that(attempt, elapsed), (d1, d2)=>Math.max(d1, d2)));
const catchAllCause = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>catchCauseIf(self, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constTrue"], f));
const catchCauseIf = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, predicate, f)=>make(function(env, onExit) {
        self[runSymbol](env, function(exit) {
            if (exit._tag === "Right" || !predicate(exit.left)) {
                onExit(exit);
            } else {
                f(exit.left)[runSymbol](env, onExit);
            }
        });
    }));
const catchAll = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>catchAllCause(self, (cause)=>causeIsFail(cause) ? f(cause.error) : failCause(cause)));
const catchAllDefect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>catchCauseIf(self, causeIsDie, (die)=>f(die.defect)));
const tapErrorCause = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>tapErrorCauseIf(self, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constTrue"], f));
const tapErrorCauseIf = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, refinement, f)=>catchCauseIf(self, refinement, (cause)=>andThen(f(cause), failCause(cause))));
const tapError = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>tapErrorCauseIf(self, causeIsFail, (fail)=>f(fail.error)));
const tapDefect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>tapErrorCauseIf(self, causeIsDie, (die)=>f(die.defect)));
const catchIf = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, predicate, f)=>catchCauseIf(self, (f)=>causeIsFail(f) && predicate(f.error), (fail)=>f(fail.error)));
const catchTag = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, k, f)=>catchIf(self, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTagged"])(k), f));
const mapErrorCause = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>catchAllCause(self, (cause)=>failCause(f(cause))));
const mapError = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>catchAll(self, (error)=>fail(f(error))));
const orDie = (self)=>catchAll(self, die);
const orElseSucceed = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>catchAll(self, (_)=>sync(f)));
const ignore = (self)=>matchEffect(self, {
        onFailure: (_)=>void_,
        onSuccess: (_)=>void_
    });
const ignoreLogged = (self)=>matchEffect(self, {
        // eslint-disable-next-line no-console
        onFailure: (error)=>sync(()=>console.error(error)),
        onSuccess: (_)=>void_
    });
const option = (self)=>match(self, {
        onFailure: (_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none(),
        onSuccess: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some
    });
const either = (self)=>match(self, {
        onFailure: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left,
        onSuccess: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.right
    });
const retry = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])((args)=>isMicro(args[0]), (self, options)=>repeatExit(self, {
        ...options,
        while: (exit)=>exit._tag === "Left" && exit.left._tag === "Fail" && (options?.while === undefined || options.while(exit.left.error))
    }));
const withTrace = function() {
    const prevLimit = globalThis.Error.stackTraceLimit;
    globalThis.Error.stackTraceLimit = 2;
    const error = new globalThis.Error();
    globalThis.Error.stackTraceLimit = prevLimit;
    function generate(name, cause) {
        const stack = error.stack;
        if (!stack) {
            return cause;
        }
        const line = stack.split("\n")[2]?.trim().replace(/^at /, "");
        if (!line) {
            return cause;
        }
        const lineMatch = line.match(/\((.*)\)$/);
        return causeWithTrace(cause, `at ${name} (${lineMatch ? lineMatch[1] : line})`);
    }
    const f = (name)=>(self)=>unsafeMakeOptions(function(env, onExit) {
                self[runSymbol](env, function(exit) {
                    onExit(exit._tag === "Left" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left(generate(name, exit.left)) : exit);
                });
            }, false);
    if (arguments.length === 2) {
        return f(arguments[1])(arguments[0]);
    }
    return f(arguments[0]);
};
const matchCauseEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, options)=>make(function(env, onExit) {
        self[runSymbol](env, function(exit) {
            try {
                const next = exit._tag === "Left" ? options.onFailure(exit.left) : options.onSuccess(exit.right);
                next[runSymbol](env, onExit);
            } catch (err) {
                onExit(exitDie(err));
            }
        });
    }));
const matchCause = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, options)=>matchCauseEffect(self, {
        onFailure: (cause)=>sync(()=>options.onFailure(cause)),
        onSuccess: (value)=>sync(()=>options.onSuccess(value))
    }));
const matchEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, options)=>matchCauseEffect(self, {
        onFailure: (cause)=>cause._tag === "Fail" ? options.onFailure(cause.error) : failCause(cause),
        onSuccess: options.onSuccess
    }));
const match = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, options)=>matchEffect(self, {
        onFailure: (error)=>sync(()=>options.onFailure(error)),
        onSuccess: (value)=>sync(()=>options.onSuccess(value))
    }));
const sleep = (millis)=>async(function(resume) {
        const timeout = setTimeout(function() {
            resume(void_);
        }, millis);
        return sync(()=>{
            return clearTimeout(timeout);
        });
    });
const delay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, millis)=>andThen(sleep(millis), self));
const timeoutOrElse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, options)=>raceFirst(self, andThen(interruptible(sleep(options.duration)), options.onTimeout)));
const timeout = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, millis)=>timeoutOrElse(self, {
        duration: millis,
        onTimeout: ()=>fail(new TimeoutException())
    }));
const timeoutOption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, millis)=>raceFirst(asSome(self), as(interruptible(sleep(millis)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none())));
const MicroScopeTypeId = /*#__PURE__*/ Symbol.for("effect/Micro/MicroScope");
const MicroScope = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.GenericTag("effect/Micro/MicroScope");
class MicroScopeImpl {
    [MicroScopeTypeId];
    state = {
        _tag: "Open",
        finalizers: /*#__PURE__*/ new Set()
    };
    constructor(){
        this[MicroScopeTypeId] = MicroScopeTypeId;
    }
    unsafeAddFinalizer(finalizer) {
        if (this.state._tag === "Open") {
            this.state.finalizers.add(finalizer);
        }
    }
    addFinalizer(finalizer) {
        return suspend(()=>{
            if (this.state._tag === "Open") {
                this.state.finalizers.add(finalizer);
                return void_;
            }
            return finalizer(this.state.exit);
        });
    }
    unsafeRemoveFinalizer(finalizer) {
        if (this.state._tag === "Open") {
            this.state.finalizers.delete(finalizer);
        }
    }
    close(microExit) {
        return suspend(()=>{
            if (this.state._tag === "Open") {
                const finalizers = Array.from(this.state.finalizers).reverse();
                this.state = {
                    _tag: "Closed",
                    exit: microExit
                };
                return flatMap(forEach(finalizers, (finalizer)=>exit(finalizer(microExit))), (exits)=>asVoid(fromExit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.all(exits))));
            }
            return void_;
        });
    }
    get fork() {
        return sync(()=>{
            const newScope = new MicroScopeImpl();
            if (this.state._tag === "Closed") {
                newScope.state = this.state;
                return newScope;
            }
            function fin(exit) {
                return newScope.close(exit);
            }
            this.state.finalizers.add(fin);
            newScope.unsafeAddFinalizer((_)=>sync(()=>this.unsafeRemoveFinalizer(fin)));
            return newScope;
        });
    }
}
const scopeMake = /*#__PURE__*/ sync(()=>new MicroScopeImpl());
const scopeUnsafeMake = ()=>new MicroScopeImpl();
const scope = /*#__PURE__*/ service(MicroScope);
const provideScope = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, scope)=>provideService(self, MicroScope, scope));
const scoped = (self)=>suspend(function() {
        const scope = new MicroScopeImpl();
        return onExit(provideService(self, MicroScope, scope), (exit)=>scope.close(exit));
    });
const acquireRelease = (acquire, release)=>uninterruptible(flatMap(scope, (scope)=>tap(acquire, (a)=>scope.addFinalizer((exit)=>release(a, exit)))));
const addFinalizer = (finalizer)=>flatMap(scope, (scope)=>scope.addFinalizer(finalizer));
const onExit = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>onExitIf(self, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constTrue"], f));
const onExitIf = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, refinement, f)=>uninterruptibleMask((restore)=>make(function(env, onExit) {
            restore(self)[runSymbol](env, function(exit) {
                if (!refinement(exit)) {
                    return onExit(exit);
                }
                f(exit)[runSymbol](env, function(finalizerExit) {
                    if (finalizerExit._tag === "Left") {
                        return onExit(finalizerExit);
                    }
                    onExit(exit);
                });
            });
        })));
const ensuring = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, finalizer)=>onExit(self, (_)=>finalizer));
const onError = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>onExitIf(self, exitIsFailure, (exit)=>f(exit.left)));
const onInterrupt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, finalizer)=>onExitIf(self, exitIsInterrupt, (_)=>finalizer));
const acquireUseRelease = (acquire, use, release)=>uninterruptibleMask((restore)=>flatMap(acquire, (a)=>flatMap(exit(restore(use(a))), (exit)=>andThen(release(a, exit), fromExit(exit)))));
const interrupt = /*#__PURE__*/ make(function(env, onExit) {
    const controller = envGet(env, currentAbortController);
    controller.abort();
    onExit(exitInterrupt);
});
const uninterruptible = (self)=>unsafeMakeOptions(function(env, onExit) {
        const nextEnv = envMutate(env, function(env) {
            env[currentInterruptible.key] = false;
            env[currentAbortSignal.key] = new AbortController().signal;
            return env;
        });
        self[runSymbol](nextEnv, onExit);
    }, false);
const uninterruptibleMask = (f)=>unsafeMakeOptions((env, onExit)=>{
        const isInterruptible = envGet(env, currentInterruptible);
        const effect = isInterruptible ? f(interruptible) : f(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
        const nextEnv = isInterruptible ? envMutate(env, function(env) {
            env[currentInterruptible.key] = false;
            env[currentAbortSignal.key] = new AbortController().signal;
            return env;
        }) : env;
        effect[runSymbol](nextEnv, onExit);
    }, false);
const interruptible = (self)=>make((env, onExit)=>{
        const isInterruptible = envGet(env, currentInterruptible);
        let newEnv = env;
        if (!isInterruptible) {
            const controller = envGet(env, currentAbortController);
            newEnv = envMutate(env, function(env) {
                env[currentInterruptible.key] = true;
                env[currentAbortSignal.key] = controller.signal;
                return env;
            });
        }
        self[runSymbol](newEnv, onExit);
    });
const all = (arg, options)=>{
    if (Array.isArray(arg) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIterable"])(arg)) {
        return forEach(arg, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"], options);
    } else if (options?.discard) {
        return forEach(Object.values(arg), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"], options);
    }
    return suspend(()=>{
        const out = {};
        return as(forEach(Object.entries(arg), ([key, effect])=>map(effect, (value)=>{
                out[key] = value;
            }), {
            discard: true,
            concurrency: options?.concurrency
        }), out);
    });
};
const forEach = (iterable, f, options)=>make(function(env, onExit) {
        const concurrencyOption = options?.concurrency === "inherit" ? envGet(env, currentConcurrency) : options?.concurrency ?? 1;
        const concurrency = concurrencyOption === "unbounded" ? Number.POSITIVE_INFINITY : Math.max(1, concurrencyOption);
        // abort
        const [envWithSignal, onAbort] = forkSignal(env);
        // iterate
        let result = undefined;
        const items = Array.from(iterable);
        let length = items.length;
        if (length === 0) {
            return onExit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.right(options?.discard ? undefined : []));
        }
        const out = options?.discard ? undefined : new Array(length);
        let index = 0;
        let inProgress = 0;
        let doneCount = 0;
        let pumping = false;
        function pump() {
            pumping = true;
            while(inProgress < concurrency && index < length){
                const currentIndex = index;
                const item = items[currentIndex];
                index++;
                inProgress++;
                try {
                    f(item, currentIndex)[runSymbol](envWithSignal, function(exit) {
                        if (exit._tag === "Left") {
                            if (result === undefined) {
                                result = exit;
                                length = index;
                                onAbort();
                            }
                        } else if (out !== undefined) {
                            out[currentIndex] = exit.right;
                        }
                        doneCount++;
                        inProgress--;
                        if (doneCount === length) {
                            onExit(result ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.right(out));
                        } else if (!pumping && inProgress < concurrency) {
                            pump();
                        }
                    });
                } catch (err) {
                    result = exitDie(err);
                    length = index;
                    onAbort();
                }
            }
            pumping = false;
        }
        pump();
    });
const filter = (iterable, f, options)=>filterMap(iterable, (a)=>map(f(a), (pass)=>{
            pass = options?.negate ? !pass : pass;
            return pass ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(a) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
        }), options);
const filterMap = (iterable, f, options)=>suspend(()=>{
        const out = [];
        return as(forEach(iterable, (a)=>map(f(a), (o)=>{
                if (o._tag === "Some") {
                    out.push(o.value);
                }
            }), {
            discard: true,
            concurrency: options?.concurrency
        }), out);
    });
const Do = /*#__PURE__*/ succeed({});
const bindTo = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bindTo(map);
const bind = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bind(map, flatMap);
const let_ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.let_(map);
;
const HandleTypeId = /*#__PURE__*/ Symbol.for("effect/Micro/Handle");
const isHandle = (u)=>typeof u === "object" && u !== null && HandleTypeId in u;
class HandleImpl extends Class {
    parentSignal;
    [HandleTypeId];
    observers = /*#__PURE__*/ new Set();
    _exit = undefined;
    _controller;
    isRoot;
    constructor(parentSignal, controller){
        super();
        this.parentSignal = parentSignal;
        this[HandleTypeId] = HandleTypeId;
        this.isRoot = controller !== undefined;
        this._controller = controller ?? new AbortController();
        if (!this.isRoot) {
            parentSignal.addEventListener("abort", this.unsafeInterrupt);
        }
    }
    unsafePoll() {
        return this._exit ?? null;
    }
    unsafeInterrupt = ()=>{
        this._controller.abort();
    };
    emit(exit) {
        if (this._exit) {
            return;
        }
        this._exit = exit;
        if (!this.isRoot) {
            this.parentSignal.removeEventListener("abort", this.unsafeInterrupt);
        }
        this.observers.forEach((observer)=>observer(exit));
        this.observers.clear();
    }
    addObserver(observer) {
        if (this._exit) {
            return observer(this._exit);
        }
        this.observers.add(observer);
    }
    removeObserver(observer) {
        this.observers.delete(observer);
    }
    get await() {
        return suspend(()=>{
            if (this._exit) {
                return succeed(this._exit);
            }
            return async((resume)=>{
                function observer(exit) {
                    resume(succeed(exit));
                }
                this.addObserver(observer);
                return sync(()=>{
                    this.removeObserver(observer);
                });
            });
        });
    }
    get join() {
        return flatMap(this.await, fromExit);
    }
    get interrupt() {
        return suspend(()=>{
            this.unsafeInterrupt();
            return this.await;
        });
    }
    asMicro() {
        return this.join;
    }
}
const fork = (self)=>make(function(env, onExit) {
        const signal = envGet(env, currentAbortSignal);
        const handle = new HandleImpl(signal);
        const nextEnv = envMutate(env, (map)=>{
            map[currentAbortController.key] = handle._controller;
            map[currentAbortSignal.key] = handle._controller.signal;
            return map;
        });
        envGet(env, currentScheduler).scheduleTask(()=>{
            self[runSymbol](nextEnv, (exit)=>{
                handle.emit(exit);
            });
        }, 0);
        onExit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.right(handle));
    });
const forkDaemon = (self)=>make(function(env, onExit) {
        const controller = new AbortController();
        const handle = new HandleImpl(controller.signal, controller);
        const nextEnv = envMutate(env, (map)=>{
            map[currentAbortController.key] = controller;
            map[currentAbortSignal.key] = controller.signal;
            return map;
        });
        envGet(env, currentScheduler).scheduleTask(()=>{
            self[runSymbol](nextEnv, (exit)=>{
                handle.emit(exit);
            });
        }, 0);
        onExit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.right(handle));
    });
const forkIn = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, scope)=>uninterruptibleMask((restore)=>flatMap(scope.fork, (scope)=>tap(restore(forkDaemon(onExit(self, (exit)=>scope.close(exit)))), (fiber)=>scope.addFinalizer((_)=>asVoid(fiber.interrupt))))));
const forkScoped = (self)=>flatMap(scope, (scope)=>forkIn(self, scope));
const runFork = (effect, options)=>{
    const controller = new AbortController();
    const refs = Object.create(null);
    refs[currentAbortController.key] = controller;
    refs[currentAbortSignal.key] = controller.signal;
    refs[currentScheduler.key] = options?.scheduler ?? new MicroSchedulerDefault();
    const env = envMake(refs);
    const handle = new HandleImpl(controller.signal, controller);
    effect[runSymbol](envSet(env, currentAbortSignal, handle._controller.signal), (exit)=>{
        handle.emit(exit);
        if (options?.signal) {
            options.signal.removeEventListener("abort", handle.unsafeInterrupt);
        }
    });
    if (options?.signal) {
        if (options.signal.aborted) {
            handle.unsafeInterrupt();
        } else {
            options.signal.addEventListener("abort", handle.unsafeInterrupt, {
                once: true
            });
        }
    }
    return handle;
};
const runPromiseExit = (effect, options)=>new Promise((resolve, _reject)=>{
        const handle = runFork(effect, options);
        handle.addObserver(resolve);
    });
const runPromise = (effect, options)=>runPromiseExit(effect, options).then((exit)=>{
        if (exit._tag === "Left") {
            throw exit.left;
        }
        return exit.right;
    });
const runSyncExit = (effect)=>{
    const scheduler = new MicroSchedulerDefault();
    const handle = runFork(effect, {
        scheduler
    });
    scheduler.flush();
    const exit = handle.unsafePoll();
    if (exit === null) {
        return exitDie(handle);
    }
    return exit;
};
const runSync = (effect)=>{
    const exit = runSyncExit(effect);
    if (exit._tag === "Left") {
        throw exit.left;
    }
    return exit.right;
};
const YieldableError = /*#__PURE__*/ function() {
    class YieldableError extends globalThis.Error {
        [runSymbol](_env, onExit) {
            onExit(exitFail(this));
        }
        toString() {
            return this.message ? `${this.name}: ${this.message}` : this.name;
        }
        toJSON() {
            return {
                ...this
            };
        }
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeInspectSymbol"]]() {
            const stack = this.stack;
            if (stack) {
                return `${this.toString()}\n${stack.split("\n").slice(1).join("\n")}`;
            }
            return this.toString();
        }
    }
    Object.assign(YieldableError.prototype, MicroProto, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$effectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StructuralPrototype"]);
    return YieldableError;
}();
const Error = /*#__PURE__*/ function() {
    return class extends YieldableError {
        constructor(args){
            super();
            if (args) {
                Object.assign(this, args);
            }
        }
    };
}();
const TaggedError = (tag)=>{
    class Base extends Error {
        _tag = tag;
    }
    ;
    Base.prototype.name = tag;
    return Base;
};
class NoSuchElementException extends /*#__PURE__*/ TaggedError("NoSuchElementException") {
}
class TimeoutException extends /*#__PURE__*/ TaggedError("TimeoutException") {
} //# sourceMappingURL=Micro.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/redacted.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "RedactedTypeId": (()=>RedactedTypeId),
    "isRedacted": (()=>isRedacted),
    "make": (()=>make),
    "proto": (()=>proto),
    "redactedRegistry": (()=>redactedRegistry),
    "unsafeWipe": (()=>unsafeWipe),
    "value": (()=>value)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$GlobalValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/GlobalValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Pipeable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Inspectable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
/** @internal */ const RedactedSymbolKey = "effect/Redacted";
const redactedRegistry = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$GlobalValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalValue"])("effect/Redacted/redactedRegistry", ()=>new WeakMap());
const RedactedTypeId = /*#__PURE__*/ Symbol.for(RedactedSymbolKey);
const proto = {
    [RedactedTypeId]: {
        _A: (_)=>_
    },
    pipe () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipeArguments"])(this, arguments);
    },
    toString () {
        return "<redacted>";
    },
    toJSON () {
        return "<redacted>";
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Inspectable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeInspectSymbol"]] () {
        return "<redacted>";
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.hash(RedactedSymbolKey), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.combine(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.hash(redactedRegistry.get(this))), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cached(this));
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.symbol] (that) {
        return isRedacted(that) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equals(redactedRegistry.get(this), redactedRegistry.get(that));
    }
};
const isRedacted = (u)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(u, RedactedTypeId);
const make = (value)=>{
    const redacted = Object.create(proto);
    redactedRegistry.set(redacted, value);
    return redacted;
};
const value = (self)=>{
    if (redactedRegistry.has(self)) {
        return redactedRegistry.get(self);
    } else {
        throw new Error("Unable to get redacted value");
    }
};
const unsafeWipe = (self)=>redactedRegistry.delete(self); //# sourceMappingURL=redacted.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Redacted.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "RedactedTypeId": (()=>RedactedTypeId),
    "getEquivalence": (()=>getEquivalence),
    "isRedacted": (()=>isRedacted),
    "make": (()=>make),
    "unsafeWipe": (()=>unsafeWipe),
    "value": (()=>value)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$redacted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/redacted.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equivalence.js [app-client] (ecmascript)");
;
;
const RedactedTypeId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$redacted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.RedactedTypeId;
const isRedacted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$redacted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isRedacted;
const make = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$redacted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.make;
const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$redacted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.value;
const unsafeWipe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$redacted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.unsafeWipe;
const getEquivalence = (isEquivalent)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.make((x, y)=>isEquivalent(value(x), value(y))); //# sourceMappingURL=Redacted.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/encoding/common.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DecodeException": (()=>DecodeException),
    "DecodeExceptionTypeId": (()=>DecodeExceptionTypeId),
    "decoder": (()=>decoder),
    "encoder": (()=>encoder),
    "isDecodeException": (()=>isDecodeException)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
;
const DecodeExceptionTypeId = /*#__PURE__*/ Symbol.for("effect/Encoding/errors/Decode");
const DecodeException = (input, message)=>{
    const out = {
        _tag: "DecodeException",
        [DecodeExceptionTypeId]: DecodeExceptionTypeId,
        input
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(message)) {
        out.message = message;
    }
    return out;
};
const isDecodeException = (u)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(u, DecodeExceptionTypeId);
const encoder = /*#__PURE__*/ new TextEncoder();
const decoder = /*#__PURE__*/ new TextDecoder(); //# sourceMappingURL=common.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/encoding/base64.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "decode": (()=>decode),
    "encode": (()=>encode),
    "stripCrlf": (()=>stripCrlf)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Either.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/encoding/common.js [app-client] (ecmascript)");
;
;
const encode = (bytes)=>{
    const length = bytes.length;
    let result = "";
    let i;
    for(i = 2; i < length; i += 3){
        result += base64abc[bytes[i - 2] >> 2];
        result += base64abc[(bytes[i - 2] & 0x03) << 4 | bytes[i - 1] >> 4];
        result += base64abc[(bytes[i - 1] & 0x0f) << 2 | bytes[i] >> 6];
        result += base64abc[bytes[i] & 0x3f];
    }
    if (i === length + 1) {
        // 1 octet yet to write
        result += base64abc[bytes[i - 2] >> 2];
        result += base64abc[(bytes[i - 2] & 0x03) << 4];
        result += "==";
    }
    if (i === length) {
        // 2 octets yet to write
        result += base64abc[bytes[i - 2] >> 2];
        result += base64abc[(bytes[i - 2] & 0x03) << 4 | bytes[i - 1] >> 4];
        result += base64abc[(bytes[i - 1] & 0x0f) << 2];
        result += "=";
    }
    return result;
};
const decode = (str)=>{
    const stripped = stripCrlf(str);
    const length = stripped.length;
    if (length % 4 !== 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeException"])(stripped, `Length must be a multiple of 4, but is ${length}`));
    }
    const index = stripped.indexOf("=");
    if (index !== -1 && (index < length - 2 || index === length - 2 && stripped[length - 1] !== "=")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeException"])(stripped, "Found a '=' character, but it is not at the end"));
    }
    try {
        const missingOctets = stripped.endsWith("==") ? 2 : stripped.endsWith("=") ? 1 : 0;
        const result = new Uint8Array(3 * (length / 4));
        for(let i = 0, j = 0; i < length; i += 4, j += 3){
            const buffer = getBase64Code(stripped.charCodeAt(i)) << 18 | getBase64Code(stripped.charCodeAt(i + 1)) << 12 | getBase64Code(stripped.charCodeAt(i + 2)) << 6 | getBase64Code(stripped.charCodeAt(i + 3));
            result[j] = buffer >> 16;
            result[j + 1] = buffer >> 8 & 0xff;
            result[j + 2] = buffer & 0xff;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.right(result.subarray(0, result.length - missingOctets));
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeException"])(stripped, e instanceof Error ? e.message : "Invalid input"));
    }
};
const stripCrlf = (str)=>str.replace(/[\n\r]/g, "");
/** @internal */ function getBase64Code(charCode) {
    if (charCode >= base64codes.length) {
        throw new TypeError(`Invalid character ${String.fromCharCode(charCode)}`);
    }
    const code = base64codes[charCode];
    if (code === 255) {
        throw new TypeError(`Invalid character ${String.fromCharCode(charCode)}`);
    }
    return code;
}
/** @internal */ const base64abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "/"
];
/** @internal */ const base64codes = [
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    62,
    255,
    255,
    255,
    63,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    255,
    255,
    255,
    0,
    255,
    255,
    255,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    255,
    255,
    255,
    255,
    255,
    255,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51
]; //# sourceMappingURL=base64.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/encoding/base64Url.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "decode": (()=>decode),
    "encode": (()=>encode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/encoding/base64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Either.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/encoding/common.js [app-client] (ecmascript)");
;
;
;
const encode = (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.encode(data).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
const decode = (str)=>{
    const stripped = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.stripCrlf(str);
    const length = stripped.length;
    if (length % 4 === 1) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeException"])(stripped, `Length should be a multiple of 4, but is ${length}`));
    }
    if (!/^[-_A-Z0-9]*?={0,2}$/i.test(stripped)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeException"])(stripped, "Invalid input"));
    }
    // Some variants allow or require omitting the padding '=' signs
    let sanitized = length % 4 === 2 ? `${stripped}==` : length % 4 === 3 ? `${stripped}=` : stripped;
    sanitized = sanitized.replace(/-/g, "+").replace(/_/g, "/");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.decode(sanitized);
}; //# sourceMappingURL=base64Url.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/encoding/hex.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "decode": (()=>decode),
    "encode": (()=>encode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Either.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/encoding/common.js [app-client] (ecmascript)");
;
;
const encode = (bytes)=>{
    let result = "";
    for(let i = 0; i < bytes.length; ++i){
        result += bytesToHex[bytes[i]];
    }
    return result;
};
const decode = (str)=>{
    const bytes = new TextEncoder().encode(str);
    if (bytes.length % 2 !== 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeException"])(str, `Length must be a multiple of 2, but is ${bytes.length}`));
    }
    try {
        const length = bytes.length / 2;
        const result = new Uint8Array(length);
        for(let i = 0; i < length; i++){
            const a = fromHexChar(bytes[i * 2]);
            const b = fromHexChar(bytes[i * 2 + 1]);
            result[i] = a << 4 | b;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.right(result);
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.left((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeException"])(str, e instanceof Error ? e.message : "Invalid input"));
    }
};
/** @internal */ const bytesToHex = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff"
];
/** @internal */ const fromHexChar = (byte)=>{
    // '0' <= byte && byte <= '9'
    if (48 <= byte && byte <= 57) {
        return byte - 48;
    }
    // 'a' <= byte && byte <= 'f'
    if (97 <= byte && byte <= 102) {
        return byte - 97 + 10;
    }
    // 'A' <= byte && byte <= 'F'
    if (65 <= byte && byte <= 70) {
        return byte - 65 + 10;
    }
    throw new TypeError("Invalid input");
}; //# sourceMappingURL=hex.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Encoding.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * This module provides encoding & decoding functionality for:
 *
 * - base64 (RFC4648)
 * - base64 (URL)
 * - hex
 *
 * @since 2.0.0
 */ __turbopack_esm__({
    "DecodeException": (()=>DecodeException),
    "DecodeExceptionTypeId": (()=>DecodeExceptionTypeId),
    "decodeBase64": (()=>decodeBase64),
    "decodeBase64String": (()=>decodeBase64String),
    "decodeBase64Url": (()=>decodeBase64Url),
    "decodeBase64UrlString": (()=>decodeBase64UrlString),
    "decodeHex": (()=>decodeHex),
    "decodeHexString": (()=>decodeHexString),
    "encodeBase64": (()=>encodeBase64),
    "encodeBase64Url": (()=>encodeBase64Url),
    "encodeHex": (()=>encodeHex),
    "isDecodeException": (()=>isDecodeException)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/encoding/base64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/encoding/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Either.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$base64Url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/encoding/base64Url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/encoding/hex.js [app-client] (ecmascript)");
;
;
;
;
;
const encodeBase64 = (input)=>typeof input === "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.encoder.encode(input)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.encode(input);
const decodeBase64 = (str)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$base64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.decode(str);
const decodeBase64String = (str)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.map(decodeBase64(str), (_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.decoder.decode(_));
const encodeBase64Url = (input)=>typeof input === "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$base64Url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.encoder.encode(input)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$base64Url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.encode(input);
const decodeBase64Url = (str)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$base64Url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.decode(str);
const decodeBase64UrlString = (str)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.map(decodeBase64Url(str), (_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.decoder.decode(_));
const encodeHex = (input)=>typeof input === "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.encoder.encode(input)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.encode(input);
const decodeHex = (str)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.decode(str);
const decodeHexString = (str)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.map(decodeHex(str), (_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.decoder.decode(_));
const DecodeExceptionTypeId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.DecodeExceptionTypeId;
const DecodeException = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.DecodeException;
const isDecodeException = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$encoding$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isDecodeException; //# sourceMappingURL=Encoding.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Record.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * This module provides utility functions for working with records in TypeScript.
 *
 * @since 2.0.0
 */ __turbopack_esm__({
    "collect": (()=>collect),
    "difference": (()=>difference),
    "empty": (()=>empty),
    "every": (()=>every),
    "filter": (()=>filter),
    "filterMap": (()=>filterMap),
    "fromEntries": (()=>fromEntries),
    "fromIterableBy": (()=>fromIterableBy),
    "fromIterableWith": (()=>fromIterableWith),
    "get": (()=>get),
    "getEquivalence": (()=>getEquivalence),
    "getLefts": (()=>getLefts),
    "getRights": (()=>getRights),
    "getSomes": (()=>getSomes),
    "has": (()=>has),
    "intersection": (()=>intersection),
    "isEmptyReadonlyRecord": (()=>isEmptyReadonlyRecord),
    "isEmptyRecord": (()=>isEmptyRecord),
    "isSubrecord": (()=>isSubrecord),
    "isSubrecordBy": (()=>isSubrecordBy),
    "keys": (()=>keys),
    "map": (()=>map),
    "mapEntries": (()=>mapEntries),
    "mapKeys": (()=>mapKeys),
    "modify": (()=>modify),
    "modifyOption": (()=>modifyOption),
    "partition": (()=>partition),
    "partitionMap": (()=>partitionMap),
    "pop": (()=>pop),
    "reduce": (()=>reduce),
    "remove": (()=>remove),
    "replace": (()=>replace),
    "replaceOption": (()=>replaceOption),
    "separate": (()=>separate),
    "set": (()=>set),
    "singleton": (()=>singleton),
    "size": (()=>size),
    "some": (()=>some),
    "toEntries": (()=>toEntries),
    "union": (()=>union),
    "values": (()=>values)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Either.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equal.js [app-client] (ecmascript)");
;
;
;
;
const empty = ()=>({});
const isEmptyRecord = (self)=>keys(self).length === 0;
const isEmptyReadonlyRecord = isEmptyRecord;
const fromIterableWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    const out = empty();
    for (const a of self){
        const [k, b] = f(a);
        out[k] = b;
    }
    return out;
});
const fromIterableBy = (items, f)=>fromIterableWith(items, (a)=>[
            f(a),
            a
        ]);
const fromEntries = Object.fromEntries;
const collect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    const out = [];
    for (const key of keys(self)){
        out.push(f(key, self[key]));
    }
    return out;
});
const toEntries = /*#__PURE__*/ collect((key, value)=>[
        key,
        value
    ]);
const size = (self)=>keys(self).length;
const has = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, key)=>Object.prototype.hasOwnProperty.call(self, key));
const get = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, key)=>has(self, key) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(self[key]) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none());
const modify = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, key, f)=>{
    if (!has(self, key)) {
        return {
            ...self
        };
    }
    return {
        ...self,
        [key]: f(self[key])
    };
});
const modifyOption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, key, f)=>{
    if (!has(self, key)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some({
        ...self,
        [key]: f(self[key])
    });
});
const replaceOption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, key, b)=>modifyOption(self, key, ()=>b));
const remove = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, key)=>{
    if (!has(self, key)) {
        return {
            ...self
        };
    }
    const out = {
        ...self
    };
    delete out[key];
    return out;
});
const pop = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, key)=>has(self, key) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some([
        self[key],
        remove(self, key)
    ]) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none());
const map = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    const out = {
        ...self
    };
    for (const key of keys(self)){
        out[key] = f(self[key], key);
    }
    return out;
});
const mapKeys = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    const out = {};
    for (const key of keys(self)){
        const a = self[key];
        out[f(key, a)] = a;
    }
    return out;
});
const mapEntries = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    const out = {};
    for (const key of keys(self)){
        const [k, b] = f(self[key], key);
        out[k] = b;
    }
    return out;
});
const filterMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    const out = empty();
    for (const key of keys(self)){
        const o = f(self[key], key);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isSome(o)) {
            out[key] = o.value;
        }
    }
    return out;
});
const filter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>{
    const out = empty();
    for (const key of keys(self)){
        if (predicate(self[key], key)) {
            out[key] = self[key];
        }
    }
    return out;
});
const getSomes = /*#__PURE__*/ filterMap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const getLefts = (self)=>{
    const out = empty();
    for (const key of keys(self)){
        const value = self[key];
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isLeft(value)) {
            out[key] = value.left;
        }
    }
    return out;
};
const getRights = (self)=>{
    const out = empty();
    for (const key of keys(self)){
        const value = self[key];
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isRight(value)) {
            out[key] = value.right;
        }
    }
    return out;
};
const partitionMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    const left = empty();
    const right = empty();
    for (const key of keys(self)){
        const e = f(self[key], key);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isLeft(e)) {
            left[key] = e.left;
        } else {
            right[key] = e.right;
        }
    }
    return [
        left,
        right
    ];
});
const separate = /*#__PURE__*/ partitionMap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const partition = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>{
    const left = empty();
    const right = empty();
    for (const key of keys(self)){
        if (predicate(self[key], key)) {
            right[key] = self[key];
        } else {
            left[key] = self[key];
        }
    }
    return [
        left,
        right
    ];
});
const keys = (self)=>Object.keys(self);
const values = (self)=>collect(self, (_, a)=>a);
const set = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, key, value)=>{
    return {
        ...self,
        [key]: value
    };
});
const replace = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, key, value)=>{
    if (has(self, key)) {
        return {
            ...self,
            [key]: value
        };
    }
    return {
        ...self
    };
});
const isSubrecordBy = (equivalence)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>{
        for (const key of keys(self)){
            if (!has(that, key) || !equivalence(self[key], that[key])) {
                return false;
            }
        }
        return true;
    });
const isSubrecord = /*#__PURE__*/ isSubrecordBy(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equivalence());
const reduce = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, zero, f)=>{
    let out = zero;
    for (const key of keys(self)){
        out = f(out, self[key], key);
    }
    return out;
});
const every = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, refinement)=>{
    for (const key of keys(self)){
        if (!refinement(self[key], key)) {
            return false;
        }
    }
    return true;
});
const some = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>{
    for (const key of keys(self)){
        if (predicate(self[key], key)) {
            return true;
        }
    }
    return false;
});
const union = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, that, combine)=>{
    if (isEmptyRecord(self)) {
        return {
            ...that
        };
    }
    if (isEmptyRecord(that)) {
        return {
            ...self
        };
    }
    const out = empty();
    for (const key of keys(self)){
        if (has(that, key)) {
            out[key] = combine(self[key], that[key]);
        } else {
            out[key] = self[key];
        }
    }
    for (const key of keys(that)){
        if (!has(out, key)) {
            out[key] = that[key];
        }
    }
    return out;
});
const intersection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, that, combine)=>{
    const out = empty();
    if (isEmptyRecord(self) || isEmptyRecord(that)) {
        return out;
    }
    for (const key of keys(self)){
        if (has(that, key)) {
            out[key] = combine(self[key], that[key]);
        }
    }
    return out;
});
const difference = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>{
    if (isEmptyRecord(self)) {
        return {
            ...that
        };
    }
    if (isEmptyRecord(that)) {
        return {
            ...self
        };
    }
    const out = {};
    for (const key of keys(self)){
        if (!has(that, key)) {
            out[key] = self[key];
        }
    }
    for (const key of keys(that)){
        if (!has(self, key)) {
            out[key] = that[key];
        }
    }
    return out;
});
const getEquivalence = (equivalence)=>{
    const is = isSubrecordBy(equivalence);
    return (self, that)=>is(self, that) && is(that, self);
};
const singleton = (key, value)=>({
        [key]: value
    }); //# sourceMappingURL=Record.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/array.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * @since 2.0.0
 */ /** @internal */ __turbopack_esm__({
    "isNonEmptyArray": (()=>isNonEmptyArray)
});
const isNonEmptyArray = (self)=>self.length > 0; //# sourceMappingURL=array.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Tuple.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * This module provides utility functions for working with tuples in TypeScript.
 *
 * @since 2.0.0
 */ __turbopack_esm__({
    "appendElement": (()=>appendElement),
    "at": (()=>at),
    "getEquivalence": (()=>getEquivalence),
    "getFirst": (()=>getFirst),
    "getOrder": (()=>getOrder),
    "getSecond": (()=>getSecond),
    "make": (()=>make),
    "map": (()=>map),
    "mapBoth": (()=>mapBoth),
    "mapFirst": (()=>mapFirst),
    "mapSecond": (()=>mapSecond),
    "swap": (()=>swap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equivalence.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Order.js [app-client] (ecmascript)");
;
;
;
const make = (...elements)=>elements;
const getFirst = (self)=>self[0];
const getSecond = (self)=>self[1];
const map = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, fn)=>self.map((element)=>fn(element)));
const mapBoth = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, { onFirst, onSecond })=>[
        onFirst(self[0]),
        onSecond(self[1])
    ]);
const mapFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>[
        f(self[0]),
        self[1]
    ]);
const mapSecond = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>[
        self[0],
        f(self[1])
    ]);
const swap = (self)=>[
        self[1],
        self[0]
    ];
const getEquivalence = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.tuple;
const getOrder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.tuple;
const appendElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>[
        ...self,
        that
    ]);
const at = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, index)=>self[index]);
;
 //# sourceMappingURL=Tuple.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Tuple.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Tuple.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Tuple.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "appendElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["appendElement"]),
    "at": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["at"]),
    "getEquivalence": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEquivalence"]),
    "getFirst": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFirst"]),
    "getOrder": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getOrder"]),
    "getSecond": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSecond"]),
    "isTupleOf": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTupleOf"]),
    "isTupleOfAtLeast": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTupleOfAtLeast"]),
    "make": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["make"]),
    "map": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["map"]),
    "mapBoth": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mapBoth"]),
    "mapFirst": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mapFirst"]),
    "mapSecond": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mapSecond"]),
    "swap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["swap"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Tuple.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Tuple.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "appendElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["appendElement"]),
    "at": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["at"]),
    "getEquivalence": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getEquivalence"]),
    "getFirst": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getFirst"]),
    "getOrder": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getOrder"]),
    "getSecond": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getSecond"]),
    "isTupleOf": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isTupleOf"]),
    "isTupleOfAtLeast": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isTupleOfAtLeast"]),
    "make": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["make"]),
    "map": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["map"]),
    "mapBoth": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["mapBoth"]),
    "mapFirst": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["mapFirst"]),
    "mapSecond": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["mapSecond"]),
    "swap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["swap"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Tuple.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Tuple.js [app-client] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Iterable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * This module provides utility functions for working with Iterables in TypeScript.
 *
 * @since 2.0.0
 */ __turbopack_esm__({
    "append": (()=>append),
    "appendAll": (()=>appendAll),
    "cartesian": (()=>cartesian),
    "cartesianWith": (()=>cartesianWith),
    "chunksOf": (()=>chunksOf),
    "contains": (()=>contains),
    "containsWith": (()=>containsWith),
    "dedupeAdjacent": (()=>dedupeAdjacent),
    "dedupeAdjacentWith": (()=>dedupeAdjacentWith),
    "drop": (()=>drop),
    "empty": (()=>empty),
    "filter": (()=>filter),
    "filterMap": (()=>filterMap),
    "filterMapWhile": (()=>filterMapWhile),
    "findFirst": (()=>findFirst),
    "findLast": (()=>findLast),
    "flatMap": (()=>flatMap),
    "flatMapNullable": (()=>flatMapNullable),
    "flatten": (()=>flatten),
    "forEach": (()=>forEach),
    "fromRecord": (()=>fromRecord),
    "getLefts": (()=>getLefts),
    "getRights": (()=>getRights),
    "getSomes": (()=>getSomes),
    "group": (()=>group),
    "groupBy": (()=>groupBy),
    "groupWith": (()=>groupWith),
    "head": (()=>head),
    "intersperse": (()=>intersperse),
    "isEmpty": (()=>isEmpty),
    "makeBy": (()=>makeBy),
    "map": (()=>map),
    "of": (()=>of),
    "prepend": (()=>prepend),
    "prependAll": (()=>prependAll),
    "range": (()=>range),
    "reduce": (()=>reduce),
    "replicate": (()=>replicate),
    "scan": (()=>scan),
    "size": (()=>size),
    "some": (()=>some),
    "take": (()=>take),
    "takeWhile": (()=>takeWhile),
    "unfold": (()=>unfold),
    "unsafeHead": (()=>unsafeHead),
    "zip": (()=>zip),
    "zipWith": (()=>zipWith)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Tuple.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Either.js [app-client] (ecmascript)");
;
;
;
;
;
;
const makeBy = (f, options)=>{
    const max = options?.length !== undefined ? Math.max(1, Math.floor(options.length)) : Infinity;
    return {
        [Symbol.iterator] () {
            let i = 0;
            return {
                next () {
                    if (i < max) {
                        return {
                            value: f(i++),
                            done: false
                        };
                    }
                    return {
                        done: true,
                        value: undefined
                    };
                }
            };
        }
    };
};
const range = (start, end)=>{
    if (end === undefined) {
        return makeBy((i)=>start + i);
    }
    return makeBy((i)=>start + i, {
        length: start <= end ? end - start + 1 : 1
    });
};
const replicate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (a, n)=>makeBy(()=>a, {
        length: n
    }));
const fromRecord = (self)=>({
        *[Symbol.iterator] () {
            for(const key in self){
                if (Object.prototype.hasOwnProperty.call(self, key)) {
                    yield [
                        key,
                        self[key]
                    ];
                }
            }
        }
    });
const prepend = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, head)=>prependAll(self, [
        head
    ]));
const prependAll = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>appendAll(that, self));
const append = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, last)=>appendAll(self, [
        last
    ]));
const appendAll = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>({
        [Symbol.iterator] () {
            const iterA = self[Symbol.iterator]();
            let doneA = false;
            let iterB;
            return {
                next () {
                    if (!doneA) {
                        const r = iterA.next();
                        if (r.done) {
                            doneA = true;
                            iterB = that[Symbol.iterator]();
                            return iterB.next();
                        }
                        return r;
                    }
                    return iterB.next();
                }
            };
        }
    }));
const scan = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, b, f)=>({
        [Symbol.iterator] () {
            let acc = b;
            let iterator;
            function next() {
                if (iterator === undefined) {
                    iterator = self[Symbol.iterator]();
                    return {
                        done: false,
                        value: acc
                    };
                }
                const result = iterator.next();
                if (result.done) {
                    return result;
                }
                acc = f(acc, result.value);
                return {
                    done: false,
                    value: acc
                };
            }
            return {
                next
            };
        }
    }));
const isEmpty = (self)=>{
    const iterator = self[Symbol.iterator]();
    return iterator.next().done === true;
};
const size = (self)=>{
    const iterator = self[Symbol.iterator]();
    let count = 0;
    while(!iterator.next().done){
        count++;
    }
    return count;
};
const head = (self)=>{
    const iterator = self[Symbol.iterator]();
    const result = iterator.next();
    return result.done ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(result.value);
};
const unsafeHead = (self)=>{
    const iterator = self[Symbol.iterator]();
    const result = iterator.next();
    if (result.done) throw new Error("unsafeHead: empty iterable");
    return result.value;
};
const take = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>({
        [Symbol.iterator] () {
            let i = 0;
            const iterator = self[Symbol.iterator]();
            return {
                next () {
                    if (i < n) {
                        i++;
                        return iterator.next();
                    }
                    return {
                        done: true,
                        value: undefined
                    };
                }
            };
        }
    }));
const takeWhile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>({
        [Symbol.iterator] () {
            const iterator = self[Symbol.iterator]();
            let i = 0;
            return {
                next () {
                    const result = iterator.next();
                    if (result.done || !predicate(result.value, i++)) {
                        return {
                            done: true,
                            value: undefined
                        };
                    }
                    return result;
                }
            };
        }
    }));
const drop = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>({
        [Symbol.iterator] () {
            const iterator = self[Symbol.iterator]();
            let i = 0;
            return {
                next () {
                    while(i < n){
                        const result = iterator.next();
                        if (result.done) {
                            return {
                                done: true,
                                value: undefined
                            };
                        }
                        i++;
                    }
                    return iterator.next();
                }
            };
        }
    }));
const findFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    let i = 0;
    for (const a of self){
        const o = f(a, i);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBoolean"])(o)) {
            if (o) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(a);
            }
        } else {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isSome(o)) {
                return o;
            }
        }
        i++;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
});
const findLast = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    let i = 0;
    let last = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
    for (const a of self){
        const o = f(a, i);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBoolean"])(o)) {
            if (o) {
                last = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(a);
            }
        } else {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isSome(o)) {
                last = o;
            }
        }
        i++;
    }
    return last;
});
const zip = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>zipWith(self, that, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.make));
const zipWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, that, f)=>({
        [Symbol.iterator] () {
            const selfIterator = self[Symbol.iterator]();
            const thatIterator = that[Symbol.iterator]();
            return {
                next () {
                    const selfResult = selfIterator.next();
                    const thatResult = thatIterator.next();
                    if (selfResult.done || thatResult.done) {
                        return {
                            done: true,
                            value: undefined
                        };
                    }
                    return {
                        done: false,
                        value: f(selfResult.value, thatResult.value)
                    };
                }
            };
        }
    }));
const intersperse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, middle)=>({
        [Symbol.iterator] () {
            const iterator = self[Symbol.iterator]();
            let next = iterator.next();
            let emitted = false;
            return {
                next () {
                    if (next.done) {
                        return next;
                    } else if (emitted) {
                        emitted = false;
                        return {
                            done: false,
                            value: middle
                        };
                    }
                    emitted = true;
                    const result = next;
                    next = iterator.next();
                    return result;
                }
            };
        }
    }));
const containsWith = (isEquivalent)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, a)=>{
        for (const i of self){
            if (isEquivalent(a, i)) {
                return true;
            }
        }
        return false;
    });
const _equivalence = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equivalence();
const contains = /*#__PURE__*/ containsWith(_equivalence);
const chunksOf = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>{
    const safeN = Math.max(1, Math.floor(n));
    return {
        [Symbol.iterator] () {
            let iterator = self[Symbol.iterator]();
            return {
                next () {
                    if (iterator === undefined) {
                        return {
                            done: true,
                            value: undefined
                        };
                    }
                    const chunk = [];
                    for(let i = 0; i < safeN; i++){
                        const result = iterator.next();
                        if (result.done) {
                            iterator = undefined;
                            return chunk.length === 0 ? {
                                done: true,
                                value: undefined
                            } : {
                                done: false,
                                value: chunk
                            };
                        }
                        chunk.push(result.value);
                    }
                    return {
                        done: false,
                        value: chunk
                    };
                }
            };
        }
    };
});
const groupWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, isEquivalent)=>({
        [Symbol.iterator] () {
            const iterator = self[Symbol.iterator]();
            let nextResult;
            return {
                next () {
                    let result;
                    if (nextResult !== undefined) {
                        if (nextResult.done) {
                            return {
                                done: true,
                                value: undefined
                            };
                        }
                        result = nextResult;
                        nextResult = undefined;
                    } else {
                        result = iterator.next();
                        if (result.done) {
                            return {
                                done: true,
                                value: undefined
                            };
                        }
                    }
                    const chunk = [
                        result.value
                    ];
                    while(true){
                        const next = iterator.next();
                        if (next.done || !isEquivalent(result.value, next.value)) {
                            nextResult = next;
                            return {
                                done: false,
                                value: chunk
                            };
                        }
                        chunk.push(next.value);
                    }
                }
            };
        }
    }));
const group = /*#__PURE__*/ groupWith(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equivalence());
const groupBy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    const out = {};
    for (const a of self){
        const k = f(a);
        if (Object.prototype.hasOwnProperty.call(out, k)) {
            out[k].push(a);
        } else {
            out[k] = [
                a
            ];
        }
    }
    return out;
});
const constEmpty = {
    [Symbol.iterator] () {
        return constEmptyIterator;
    }
};
const constEmptyIterator = {
    next () {
        return {
            done: true,
            value: undefined
        };
    }
};
const empty = ()=>constEmpty;
const of = (a)=>[
        a
    ];
const map = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>({
        [Symbol.iterator] () {
            const iterator = self[Symbol.iterator]();
            let i = 0;
            return {
                next () {
                    const result = iterator.next();
                    if (result.done) {
                        return {
                            done: true,
                            value: undefined
                        };
                    }
                    return {
                        done: false,
                        value: f(result.value, i++)
                    };
                }
            };
        }
    }));
const flatMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>flatten(map(self, f)));
const flatten = (self)=>({
        [Symbol.iterator] () {
            const outerIterator = self[Symbol.iterator]();
            let innerIterator;
            function next() {
                if (innerIterator === undefined) {
                    const next = outerIterator.next();
                    if (next.done) {
                        return next;
                    }
                    innerIterator = next.value[Symbol.iterator]();
                }
                const result = innerIterator.next();
                if (result.done) {
                    innerIterator = undefined;
                    return next();
                }
                return result;
            }
            return {
                next
            };
        }
    });
const filterMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>({
        [Symbol.iterator] () {
            const iterator = self[Symbol.iterator]();
            let i = 0;
            return {
                next () {
                    let result = iterator.next();
                    while(!result.done){
                        const b = f(result.value, i++);
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isSome(b)) {
                            return {
                                done: false,
                                value: b.value
                            };
                        }
                        result = iterator.next();
                    }
                    return {
                        done: true,
                        value: undefined
                    };
                }
            };
        }
    }));
const filterMapWhile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>({
        [Symbol.iterator] () {
            const iterator = self[Symbol.iterator]();
            let i = 0;
            return {
                next () {
                    const result = iterator.next();
                    if (result.done) {
                        return {
                            done: true,
                            value: undefined
                        };
                    }
                    const b = f(result.value, i++);
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isSome(b)) {
                        return {
                            done: false,
                            value: b.value
                        };
                    }
                    return {
                        done: true,
                        value: undefined
                    };
                }
            };
        }
    }));
const getSomes = /*#__PURE__*/ filterMap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const getLefts = (self)=>filterMap(self, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getLeft);
const getRights = (self)=>filterMap(self, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getRight);
const filter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>({
        [Symbol.iterator] () {
            const iterator = self[Symbol.iterator]();
            let i = 0;
            return {
                next () {
                    let result = iterator.next();
                    while(!result.done){
                        if (predicate(result.value, i++)) {
                            return {
                                done: false,
                                value: result.value
                            };
                        }
                        result = iterator.next();
                    }
                    return {
                        done: true,
                        value: undefined
                    };
                }
            };
        }
    }));
const flatMapNullable = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>filterMap(self, (a)=>{
        const b = f(a);
        return b == null ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(b);
    }));
const some = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>{
    let i = 0;
    for (const a of self){
        if (predicate(a, i++)) {
            return true;
        }
    }
    return false;
});
const unfold = (b, f)=>({
        [Symbol.iterator] () {
            let next = b;
            return {
                next () {
                    const o = f(next);
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isNone(o)) {
                        return {
                            done: true,
                            value: undefined
                        };
                    }
                    const [a, b] = o.value;
                    next = b;
                    return {
                        done: false,
                        value: a
                    };
                }
            };
        }
    });
const forEach = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    let i = 0;
    for (const a of self){
        f(a, i++);
    }
});
const reduce = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, b, f)=>{
    if (Array.isArray(self)) {
        return self.reduce(f, b);
    }
    let i = 0;
    let result = b;
    for (const n of self){
        result = f(result, n, i++);
    }
    return result;
});
const dedupeAdjacentWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, isEquivalent)=>({
        [Symbol.iterator] () {
            const iterator = self[Symbol.iterator]();
            let first = true;
            let last;
            function next() {
                const result = iterator.next();
                if (result.done) {
                    return {
                        done: true,
                        value: undefined
                    };
                }
                if (first) {
                    first = false;
                    last = result.value;
                    return result;
                }
                const current = result.value;
                if (isEquivalent(last, current)) {
                    return next();
                }
                last = current;
                return result;
            }
            return {
                next
            };
        }
    }));
const dedupeAdjacent = /*#__PURE__*/ dedupeAdjacentWith(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equivalence());
const cartesianWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, that, f)=>flatMap(self, (a)=>map(that, (b)=>f(a, b))));
const cartesian = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>cartesianWith(self, that, (a, b)=>[
            a,
            b
        ])); //# sourceMappingURL=Iterable.js.map
}}),
"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Array.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * This module provides utility functions for working with arrays in TypeScript.
 *
 * @since 2.0.0
 */ __turbopack_esm__({
    "Do": (()=>Do),
    "allocate": (()=>allocate),
    "append": (()=>append),
    "appendAll": (()=>appendAll),
    "bind": (()=>bind),
    "bindTo": (()=>bindTo),
    "cartesian": (()=>cartesian),
    "cartesianWith": (()=>cartesianWith),
    "chop": (()=>chop),
    "chunksOf": (()=>chunksOf),
    "contains": (()=>contains),
    "containsWith": (()=>containsWith),
    "copy": (()=>copy),
    "dedupe": (()=>dedupe),
    "dedupeAdjacent": (()=>dedupeAdjacent),
    "dedupeAdjacentWith": (()=>dedupeAdjacentWith),
    "dedupeWith": (()=>dedupeWith),
    "difference": (()=>difference),
    "differenceWith": (()=>differenceWith),
    "drop": (()=>drop),
    "dropRight": (()=>dropRight),
    "dropWhile": (()=>dropWhile),
    "empty": (()=>empty),
    "ensure": (()=>ensure),
    "every": (()=>every),
    "extend": (()=>extend),
    "filter": (()=>filter),
    "filterMap": (()=>filterMap),
    "filterMapWhile": (()=>filterMapWhile),
    "findFirst": (()=>findFirst),
    "findFirstIndex": (()=>findFirstIndex),
    "findLast": (()=>findLast),
    "findLastIndex": (()=>findLastIndex),
    "flatMap": (()=>flatMap),
    "flatMapNullable": (()=>flatMapNullable),
    "flatten": (()=>flatten),
    "forEach": (()=>forEach),
    "fromIterable": (()=>fromIterable),
    "fromNullable": (()=>fromNullable),
    "fromOption": (()=>fromOption),
    "fromRecord": (()=>fromRecord),
    "get": (()=>get),
    "getEquivalence": (()=>getEquivalence),
    "getLefts": (()=>getLefts),
    "getOrder": (()=>getOrder),
    "getRights": (()=>getRights),
    "getSomes": (()=>getSomes),
    "group": (()=>group),
    "groupBy": (()=>groupBy),
    "groupWith": (()=>groupWith),
    "head": (()=>head),
    "headNonEmpty": (()=>headNonEmpty),
    "init": (()=>init),
    "initNonEmpty": (()=>initNonEmpty),
    "insertAt": (()=>insertAt),
    "intersection": (()=>intersection),
    "intersectionWith": (()=>intersectionWith),
    "intersperse": (()=>intersperse),
    "isArray": (()=>isArray),
    "isEmptyArray": (()=>isEmptyArray),
    "isEmptyReadonlyArray": (()=>isEmptyReadonlyArray),
    "isNonEmptyArray": (()=>isNonEmptyArray),
    "isNonEmptyReadonlyArray": (()=>isNonEmptyReadonlyArray),
    "join": (()=>join),
    "last": (()=>last),
    "lastNonEmpty": (()=>lastNonEmpty),
    "length": (()=>length),
    "let": (()=>let_),
    "liftEither": (()=>liftEither),
    "liftNullable": (()=>liftNullable),
    "liftOption": (()=>liftOption),
    "liftPredicate": (()=>liftPredicate),
    "make": (()=>make),
    "makeBy": (()=>makeBy),
    "map": (()=>map),
    "mapAccum": (()=>mapAccum),
    "match": (()=>match),
    "matchLeft": (()=>matchLeft),
    "matchRight": (()=>matchRight),
    "max": (()=>max),
    "min": (()=>min),
    "modify": (()=>modify),
    "modifyNonEmptyHead": (()=>modifyNonEmptyHead),
    "modifyNonEmptyLast": (()=>modifyNonEmptyLast),
    "modifyOption": (()=>modifyOption),
    "of": (()=>of),
    "pad": (()=>pad),
    "partition": (()=>partition),
    "partitionMap": (()=>partitionMap),
    "prepend": (()=>prepend),
    "prependAll": (()=>prependAll),
    "range": (()=>range),
    "reduce": (()=>reduce),
    "reduceRight": (()=>reduceRight),
    "remove": (()=>remove),
    "replace": (()=>replace),
    "replaceOption": (()=>replaceOption),
    "replicate": (()=>replicate),
    "reverse": (()=>reverse),
    "rotate": (()=>rotate),
    "scan": (()=>scan),
    "scanRight": (()=>scanRight),
    "separate": (()=>separate),
    "setNonEmptyHead": (()=>setNonEmptyHead),
    "setNonEmptyLast": (()=>setNonEmptyLast),
    "some": (()=>some),
    "sort": (()=>sort),
    "sortBy": (()=>sortBy),
    "sortWith": (()=>sortWith),
    "span": (()=>span),
    "split": (()=>split),
    "splitAt": (()=>splitAt),
    "splitNonEmptyAt": (()=>splitNonEmptyAt),
    "splitWhere": (()=>splitWhere),
    "tail": (()=>tail),
    "tailNonEmpty": (()=>tailNonEmpty),
    "take": (()=>take),
    "takeRight": (()=>takeRight),
    "takeWhile": (()=>takeWhile),
    "unappend": (()=>unappend),
    "unfold": (()=>unfold),
    "union": (()=>union),
    "unionWith": (()=>unionWith),
    "unprepend": (()=>unprepend),
    "unsafeGet": (()=>unsafeGet),
    "unzip": (()=>unzip),
    "zip": (()=>zip),
    "zipWith": (()=>zipWith)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Record$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Record.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Iterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Iterable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Order.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Tuple.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Either.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equivalence.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/doNotation.js [app-client] (ecmascript)");
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
;
const make = (...elements)=>elements;
const allocate = (n)=>new Array(n);
const makeBy = (n, f)=>{
    const max = Math.max(1, Math.floor(n));
    const out = new Array(max);
    for(let i = 0; i < max; i++){
        out[i] = f(i);
    }
    return out;
};
const range = (start, end)=>start <= end ? makeBy(end - start + 1, (i)=>start + i) : [
        start
    ];
const replicate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (a, n)=>makeBy(n, ()=>a));
const fromIterable = (collection)=>Array.isArray(collection) ? collection : Array.from(collection);
const ensure = (self)=>Array.isArray(self) ? self : [
        self
    ];
const fromRecord = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Record$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.toEntries;
const fromOption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.toArray;
const match = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, { onEmpty, onNonEmpty })=>isNonEmptyReadonlyArray(self) ? onNonEmpty(self) : onEmpty());
const matchLeft = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, { onEmpty, onNonEmpty })=>isNonEmptyReadonlyArray(self) ? onNonEmpty(headNonEmpty(self), tailNonEmpty(self)) : onEmpty());
const matchRight = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, { onEmpty, onNonEmpty })=>isNonEmptyReadonlyArray(self) ? onNonEmpty(initNonEmpty(self), lastNonEmpty(self)) : onEmpty());
const prepend = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, head)=>[
        head,
        ...self
    ]);
const prependAll = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>fromIterable(that).concat(fromIterable(self)));
const append = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, last)=>[
        ...self,
        last
    ]);
const appendAll = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>fromIterable(self).concat(fromIterable(that)));
const scan = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, b, f)=>{
    const out = [
        b
    ];
    let i = 0;
    for (const a of self){
        out[i + 1] = f(out[i], a);
        i++;
    }
    return out;
});
const scanRight = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, b, f)=>{
    const input = fromIterable(self);
    const out = new Array(input.length + 1);
    out[input.length] = b;
    for(let i = input.length - 1; i >= 0; i--){
        out[i] = f(out[i + 1], input[i]);
    }
    return out;
});
const isArray = Array.isArray;
const isEmptyArray = (self)=>self.length === 0;
const isEmptyReadonlyArray = isEmptyArray;
const isNonEmptyArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isNonEmptyArray;
const isNonEmptyReadonlyArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isNonEmptyArray;
const length = (self)=>self.length;
const isOutOfBound = (i, as)=>i < 0 || i >= as.length;
const clamp = (i, as)=>Math.floor(Math.min(Math.max(0, i), as.length));
const get = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, index)=>{
    const i = Math.floor(index);
    return isOutOfBound(i, self) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(self[i]);
});
const unsafeGet = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, index)=>{
    const i = Math.floor(index);
    if (isOutOfBound(i, self)) {
        throw new Error(`Index ${i} out of bounds`);
    }
    return self[i];
});
const unprepend = (self)=>[
        headNonEmpty(self),
        tailNonEmpty(self)
    ];
const unappend = (self)=>[
        initNonEmpty(self),
        lastNonEmpty(self)
    ];
const head = /*#__PURE__*/ get(0);
const headNonEmpty = /*#__PURE__*/ unsafeGet(0);
const last = (self)=>isNonEmptyReadonlyArray(self) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(lastNonEmpty(self)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
const lastNonEmpty = (self)=>self[self.length - 1];
const tail = (self)=>{
    const input = fromIterable(self);
    return isNonEmptyReadonlyArray(input) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(tailNonEmpty(input)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
};
const tailNonEmpty = (self)=>self.slice(1);
const init = (self)=>{
    const input = fromIterable(self);
    return isNonEmptyReadonlyArray(input) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(initNonEmpty(input)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
};
const initNonEmpty = (self)=>self.slice(0, -1);
const take = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>{
    const input = fromIterable(self);
    return input.slice(0, clamp(n, input));
});
const takeRight = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>{
    const input = fromIterable(self);
    const i = clamp(n, input);
    return i === 0 ? [] : input.slice(-i);
});
const takeWhile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>{
    let i = 0;
    const out = [];
    for (const a of self){
        if (!predicate(a, i)) {
            break;
        }
        out.push(a);
        i++;
    }
    return out;
});
const spanIndex = (self, predicate)=>{
    let i = 0;
    for (const a of self){
        if (!predicate(a, i)) {
            break;
        }
        i++;
    }
    return i;
};
const span = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>splitAt(self, spanIndex(self, predicate)));
const drop = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>{
    const input = fromIterable(self);
    return input.slice(clamp(n, input), input.length);
});
const dropRight = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>{
    const input = fromIterable(self);
    return input.slice(0, input.length - clamp(n, input));
});
const dropWhile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>fromIterable(self).slice(spanIndex(self, predicate)));
const findFirstIndex = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>{
    let i = 0;
    for (const a of self){
        if (predicate(a, i)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(i);
        }
        i++;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
});
const findLastIndex = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>{
    const input = fromIterable(self);
    for(let i = input.length - 1; i >= 0; i--){
        if (predicate(input[i], i)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(i);
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
});
const findFirst = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Iterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.findFirst;
const findLast = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    const input = fromIterable(self);
    for(let i = input.length - 1; i >= 0; i--){
        const a = input[i];
        const o = f(a, i);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBoolean"])(o)) {
            if (o) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(a);
            }
        } else {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isSome(o)) {
                return o;
            }
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
});
const insertAt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, i, b)=>{
    const out = Array.from(self);
    //             v--- `= self.length` is ok, it means inserting in last position
    if (i < 0 || i > out.length) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
    }
    out.splice(i, 0, b);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(out);
});
const replace = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, i, b)=>modify(self, i, ()=>b));
const replaceOption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, i, b)=>modifyOption(self, i, ()=>b));
const modify = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, i, f)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getOrElse(modifyOption(self, i, f), ()=>Array.from(self)));
const modifyOption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, i, f)=>{
    const out = Array.from(self);
    if (isOutOfBound(i, out)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
    }
    const next = f(out[i]);
    // @ts-expect-error
    out[i] = next;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(out);
});
const remove = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, i)=>{
    const out = Array.from(self);
    if (isOutOfBound(i, out)) {
        return out;
    }
    out.splice(i, 1);
    return out;
});
const reverse = (self)=>Array.from(self).reverse();
const sort = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, O)=>{
    const out = Array.from(self);
    out.sort(O);
    return out;
});
const sortWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, f, order)=>Array.from(self).map((a)=>[
            a,
            f(a)
        ]).sort((a, b)=>order(a[1], b[1])).map((x)=>x[0]));
const sortBy = (...orders)=>{
    const sortByAll = sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.combineAll(orders));
    return (self)=>{
        const input = fromIterable(self);
        if (isNonEmptyReadonlyArray(input)) {
            return sortByAll(input);
        }
        return [];
    };
};
const zip = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>zipWith(self, that, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Tuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.make));
const zipWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, that, f)=>{
    const as = fromIterable(self);
    const bs = fromIterable(that);
    if (isNonEmptyReadonlyArray(as) && isNonEmptyReadonlyArray(bs)) {
        const out = [
            f(headNonEmpty(as), headNonEmpty(bs))
        ];
        const len = Math.min(as.length, bs.length);
        for(let i = 1; i < len; i++){
            out[i] = f(as[i], bs[i]);
        }
        return out;
    }
    return [];
});
const unzip = (self)=>{
    const input = fromIterable(self);
    if (isNonEmptyReadonlyArray(input)) {
        const fa = [
            input[0][0]
        ];
        const fb = [
            input[0][1]
        ];
        for(let i = 1; i < input.length; i++){
            fa[i] = input[i][0];
            fb[i] = input[i][1];
        }
        return [
            fa,
            fb
        ];
    }
    return [
        [],
        []
    ];
};
const intersperse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, middle)=>{
    const input = fromIterable(self);
    if (isNonEmptyReadonlyArray(input)) {
        const out = [
            headNonEmpty(input)
        ];
        const tail = tailNonEmpty(input);
        for(let i = 0; i < tail.length; i++){
            if (i < tail.length) {
                out.push(middle);
            }
            out.push(tail[i]);
        }
        return out;
    }
    return [];
});
const modifyNonEmptyHead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>[
        f(headNonEmpty(self)),
        ...tailNonEmpty(self)
    ]);
const setNonEmptyHead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, b)=>modifyNonEmptyHead(self, ()=>b));
const modifyNonEmptyLast = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>append(initNonEmpty(self), f(lastNonEmpty(self))));
const setNonEmptyLast = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, b)=>modifyNonEmptyLast(self, ()=>b));
const rotate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>{
    const input = fromIterable(self);
    if (isNonEmptyReadonlyArray(input)) {
        const len = input.length;
        const m = Math.round(n) % len;
        if (isOutOfBound(Math.abs(m), input) || m === 0) {
            return copy(input);
        }
        if (m < 0) {
            const [f, s] = splitNonEmptyAt(input, -m);
            return appendAll(s, f);
        } else {
            return rotate(self, m - len);
        }
    }
    return [];
});
const containsWith = (isEquivalent)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, a)=>{
        for (const i of self){
            if (isEquivalent(a, i)) {
                return true;
            }
        }
        return false;
    });
const _equivalence = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equivalence();
const contains = /*#__PURE__*/ containsWith(_equivalence);
const chop = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    const input = fromIterable(self);
    if (isNonEmptyReadonlyArray(input)) {
        const [b, rest] = f(input);
        const out = [
            b
        ];
        let next = rest;
        while(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isNonEmptyArray(next)){
            const [b, rest] = f(next);
            out.push(b);
            next = rest;
        }
        return out;
    }
    return [];
});
const splitAt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>{
    const input = Array.from(self);
    const _n = Math.floor(n);
    if (isNonEmptyReadonlyArray(input)) {
        if (_n >= 1) {
            return splitNonEmptyAt(input, _n);
        }
        return [
            [],
            input
        ];
    }
    return [
        input,
        []
    ];
});
const splitNonEmptyAt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>{
    const _n = Math.max(1, Math.floor(n));
    return _n >= self.length ? [
        copy(self),
        []
    ] : [
        prepend(self.slice(1, _n), headNonEmpty(self)),
        self.slice(_n)
    ];
});
const split = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>{
    const input = fromIterable(self);
    return chunksOf(input, Math.ceil(input.length / Math.floor(n)));
});
const splitWhere = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>span(self, (a, i)=>!predicate(a, i)));
const copy = (self)=>self.slice();
const pad = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, n, fill)=>{
    if (self.length >= n) {
        return take(self, n);
    }
    return appendAll(self, makeBy(n - self.length, ()=>fill));
});
const chunksOf = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, n)=>{
    const input = fromIterable(self);
    if (isNonEmptyReadonlyArray(input)) {
        return chop(input, splitNonEmptyAt(n));
    }
    return [];
});
const groupWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, isEquivalent)=>chop(self, (as)=>{
        const h = headNonEmpty(as);
        const out = [
            h
        ];
        let i = 1;
        for(; i < as.length; i++){
            const a = as[i];
            if (isEquivalent(a, h)) {
                out.push(a);
            } else {
                break;
            }
        }
        return [
            out,
            as.slice(i)
        ];
    }));
const group = /*#__PURE__*/ groupWith(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equivalence());
const groupBy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    const out = {};
    for (const a of self){
        const k = f(a);
        if (Object.prototype.hasOwnProperty.call(out, k)) {
            out[k].push(a);
        } else {
            out[k] = [
                a
            ];
        }
    }
    return out;
});
const unionWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, that, isEquivalent)=>{
    const a = fromIterable(self);
    const b = fromIterable(that);
    if (isNonEmptyReadonlyArray(a)) {
        if (isNonEmptyReadonlyArray(b)) {
            const dedupe = dedupeWith(isEquivalent);
            return dedupe(appendAll(a, b));
        }
        return a;
    }
    return b;
});
const union = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>unionWith(self, that, _equivalence));
const intersectionWith = (isEquivalent)=>{
    const has = containsWith(isEquivalent);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>fromIterable(self).filter((a)=>has(that, a)));
};
const intersection = /*#__PURE__*/ intersectionWith(_equivalence);
const differenceWith = (isEquivalent)=>{
    const has = containsWith(isEquivalent);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>fromIterable(self).filter((a)=>!has(that, a)));
};
const difference = /*#__PURE__*/ differenceWith(_equivalence);
const empty = ()=>[];
const of = (a)=>[
        a
    ];
const map = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>self.map(f));
const flatMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    if (isEmptyReadonlyArray(self)) {
        return [];
    }
    const out = [];
    for(let i = 0; i < self.length; i++){
        const inner = f(self[i], i);
        for(let j = 0; j < inner.length; j++){
            out.push(inner[j]);
        }
    }
    return out;
});
const flatten = /*#__PURE__*/ flatMap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const filterMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    const as = fromIterable(self);
    const out = [];
    for(let i = 0; i < as.length; i++){
        const o = f(as[i], i);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isSome(o)) {
            out.push(o.value);
        }
    }
    return out;
});
const filterMapWhile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    let i = 0;
    const out = [];
    for (const a of self){
        const b = f(a, i);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isSome(b)) {
            out.push(b.value);
        } else {
            break;
        }
        i++;
    }
    return out;
});
const partitionMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>{
    const left = [];
    const right = [];
    const as = fromIterable(self);
    for(let i = 0; i < as.length; i++){
        const e = f(as[i], i);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isLeft(e)) {
            left.push(e.left);
        } else {
            right.push(e.right);
        }
    }
    return [
        left,
        right
    ];
});
const getSomes = /*#__PURE__*/ filterMap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const getLefts = (self)=>{
    const out = [];
    for (const a of self){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isLeft(a)) {
            out.push(a.left);
        }
    }
    return out;
};
const getRights = (self)=>{
    const out = [];
    for (const a of self){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isRight(a)) {
            out.push(a.right);
        }
    }
    return out;
};
const filter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>{
    const as = fromIterable(self);
    const out = [];
    for(let i = 0; i < as.length; i++){
        if (predicate(as[i], i)) {
            out.push(as[i]);
        }
    }
    return out;
});
const partition = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>{
    const left = [];
    const right = [];
    const as = fromIterable(self);
    for(let i = 0; i < as.length; i++){
        if (predicate(as[i], i)) {
            right.push(as[i]);
        } else {
            left.push(as[i]);
        }
    }
    return [
        left,
        right
    ];
});
const separate = /*#__PURE__*/ partitionMap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const reduce = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, b, f)=>fromIterable(self).reduce((b, a, i)=>f(b, a, i), b));
const reduceRight = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, b, f)=>fromIterable(self).reduceRight((b, a, i)=>f(b, a, i), b));
const liftPredicate = (predicate)=>(b)=>predicate(b) ? [
            b
        ] : [];
const liftOption = (f)=>(...a)=>fromOption(f(...a));
const fromNullable = (a)=>a == null ? empty() : [
        a
    ];
const liftNullable = (f)=>(...a)=>fromNullable(f(...a));
const flatMapNullable = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>flatMap(self, (a)=>fromNullable(f(a))));
const liftEither = (f)=>(...a)=>{
        const e = f(...a);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isLeft(e) ? [] : [
            e.right
        ];
    };
const every = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, refinement)=>self.every(refinement));
const some = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, predicate)=>self.some(predicate));
const extend = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>self.map((_, i, as)=>f(as.slice(i))));
const min = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, O)=>self.reduce(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.min(O)));
const max = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, O)=>self.reduce(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.max(O)));
const unfold = (b, f)=>{
    const out = [];
    let next = b;
    let o;
    while(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isSome(o = f(next))){
        const [a, b] = o.value;
        out.push(a);
        next = b;
    }
    return out;
};
const getOrder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.array;
const getEquivalence = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.array;
const forEach = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>fromIterable(self).forEach((a, i)=>f(a, i)));
const dedupeWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, isEquivalent)=>{
    const input = fromIterable(self);
    if (isNonEmptyReadonlyArray(input)) {
        const out = [
            headNonEmpty(input)
        ];
        const rest = tailNonEmpty(input);
        for (const r of rest){
            if (out.every((a)=>!isEquivalent(r, a))) {
                out.push(r);
            }
        }
        return out;
    }
    return [];
});
const dedupe = (self)=>dedupeWith(self, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equivalence());
const dedupeAdjacentWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, isEquivalent)=>{
    const out = [];
    let lastA = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.none();
    for (const a of self){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isNone(lastA) || !isEquivalent(a, lastA.value)) {
            out.push(a);
            lastA = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.some(a);
        }
    }
    return out;
});
const dedupeAdjacent = /*#__PURE__*/ dedupeAdjacentWith(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.equivalence());
const join = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, sep)=>fromIterable(self).join(sep));
const mapAccum = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, s, f)=>{
    let i = 0;
    let s1 = s;
    const out = [];
    for (const a of self){
        const r = f(s1, a, i);
        s1 = r[0];
        out.push(r[1]);
        i++;
    }
    return [
        s1,
        out
    ];
});
const cartesianWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, that, f)=>flatMap(self, (a)=>map(that, (b)=>f(a, b))));
const cartesian = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>cartesianWith(self, that, (a, b)=>[
            a,
            b
        ]));
const Do = /*#__PURE__*/ of({});
const bind = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bind(map, flatMap);
const bindTo = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bindTo(map);
const let_ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$doNotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.let_(map);
;
 //# sourceMappingURL=Array.js.map
}}),
}]);

//# sourceMappingURL=c53f3_effect_dist_esm_24cd44._.js.map