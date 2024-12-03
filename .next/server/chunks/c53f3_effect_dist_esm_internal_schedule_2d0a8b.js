module.exports = {

"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/schedule.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ScheduleDriverTypeId": (()=>ScheduleDriverTypeId),
    "ScheduleTypeId": (()=>ScheduleTypeId),
    "addDelay": (()=>addDelay),
    "addDelayEffect": (()=>addDelayEffect),
    "andThen": (()=>andThen),
    "andThenEither": (()=>andThenEither),
    "as": (()=>as),
    "asVoid": (()=>asVoid),
    "beginningOfDay": (()=>beginningOfDay),
    "beginningOfHour": (()=>beginningOfHour),
    "beginningOfMinute": (()=>beginningOfMinute),
    "beginningOfSecond": (()=>beginningOfSecond),
    "bothInOut": (()=>bothInOut),
    "check": (()=>check),
    "checkEffect": (()=>checkEffect),
    "collectAllInputs": (()=>collectAllInputs),
    "collectAllOutputs": (()=>collectAllOutputs),
    "collectUntil": (()=>collectUntil),
    "collectUntilEffect": (()=>collectUntilEffect),
    "collectWhile": (()=>collectWhile),
    "collectWhileEffect": (()=>collectWhileEffect),
    "compose": (()=>compose),
    "count": (()=>count),
    "cron": (()=>cron),
    "dayOfMonth": (()=>dayOfMonth),
    "dayOfWeek": (()=>dayOfWeek),
    "delayed": (()=>delayed),
    "delayedEffect": (()=>delayedEffect),
    "delayedSchedule": (()=>delayedSchedule),
    "delays": (()=>delays),
    "driver": (()=>driver),
    "duration": (()=>duration),
    "either": (()=>either),
    "eitherWith": (()=>eitherWith),
    "elapsed": (()=>elapsed),
    "endOfDay": (()=>endOfDay),
    "endOfHour": (()=>endOfHour),
    "endOfMinute": (()=>endOfMinute),
    "endOfSecond": (()=>endOfSecond),
    "ensuring": (()=>ensuring),
    "exponential": (()=>exponential),
    "fibonacci": (()=>fibonacci),
    "findNextMonth": (()=>findNextMonth),
    "fixed": (()=>fixed),
    "forever": (()=>forever),
    "fromDelay": (()=>fromDelay),
    "fromDelays": (()=>fromDelays),
    "fromFunction": (()=>fromFunction),
    "hourOfDay": (()=>hourOfDay),
    "identity": (()=>identity),
    "intersect": (()=>intersect),
    "intersectWith": (()=>intersectWith),
    "isSchedule": (()=>isSchedule),
    "jittered": (()=>jittered),
    "jitteredWith": (()=>jitteredWith),
    "linear": (()=>linear),
    "makeWithState": (()=>makeWithState),
    "map": (()=>map),
    "mapBoth": (()=>mapBoth),
    "mapBothEffect": (()=>mapBothEffect),
    "mapEffect": (()=>mapEffect),
    "mapInput": (()=>mapInput),
    "mapInputContext": (()=>mapInputContext),
    "mapInputEffect": (()=>mapInputEffect),
    "minuteOfHour": (()=>minuteOfHour),
    "modifyDelay": (()=>modifyDelay),
    "modifyDelayEffect": (()=>modifyDelayEffect),
    "nextDay": (()=>nextDay),
    "nextDayOfMonth": (()=>nextDayOfMonth),
    "nextHour": (()=>nextHour),
    "nextMinute": (()=>nextMinute),
    "nextSecond": (()=>nextSecond),
    "onDecision": (()=>onDecision),
    "once": (()=>once),
    "passthrough": (()=>passthrough),
    "provideContext": (()=>provideContext),
    "provideService": (()=>provideService),
    "recurUntil": (()=>recurUntil),
    "recurUntilEffect": (()=>recurUntilEffect),
    "recurUntilOption": (()=>recurUntilOption),
    "recurUpTo": (()=>recurUpTo),
    "recurWhile": (()=>recurWhile),
    "recurWhileEffect": (()=>recurWhileEffect),
    "recurs": (()=>recurs),
    "reduce": (()=>reduce),
    "reduceEffect": (()=>reduceEffect),
    "repeatForever": (()=>repeatForever),
    "repeatOrElse_Effect": (()=>repeatOrElse_Effect),
    "repeat_Effect": (()=>repeat_Effect),
    "repeat_combined": (()=>repeat_combined),
    "repetitions": (()=>repetitions),
    "resetAfter": (()=>resetAfter),
    "resetWhen": (()=>resetWhen),
    "retryOrElse_Effect": (()=>retryOrElse_Effect),
    "retry_Effect": (()=>retry_Effect),
    "retry_combined": (()=>retry_combined),
    "run": (()=>run),
    "scheduleFrom_Effect": (()=>scheduleFrom_Effect),
    "schedule_Effect": (()=>schedule_Effect),
    "secondOfMinute": (()=>secondOfMinute),
    "spaced": (()=>spaced),
    "stop": (()=>stop),
    "succeed": (()=>succeed),
    "sync": (()=>sync),
    "tapInput": (()=>tapInput),
    "tapOutput": (()=>tapOutput),
    "unfold": (()=>unfold),
    "union": (()=>union),
    "unionWith": (()=>unionWith),
    "untilInput": (()=>untilInput),
    "untilInputEffect": (()=>untilInputEffect),
    "untilOutput": (()=>untilOutput),
    "untilOutputEffect": (()=>untilOutputEffect),
    "upTo": (()=>upTo),
    "whileInput": (()=>whileInput),
    "whileInputEffect": (()=>whileInputEffect),
    "whileOutput": (()=>whileOutput),
    "whileOutputEffect": (()=>whileOutputEffect),
    "windowed": (()=>windowed),
    "zipLeft": (()=>zipLeft),
    "zipRight": (()=>zipRight),
    "zipWith": (()=>zipWith)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Pipeable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/core.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$ref$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/ref.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Option.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Clock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Clock.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/ScheduleDecision.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/ScheduleIntervals.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2d$effect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/core-effect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Duration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Either.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Chunk.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cron$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Cron.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/ScheduleInterval.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Random$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Random.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Context$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Context.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$cause$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/cause.js [app-route] (ecmascript)");
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
;
;
;
;
;
;
/** @internal */ const ScheduleSymbolKey = "effect/Schedule";
const ScheduleTypeId = /*#__PURE__*/ Symbol.for(ScheduleSymbolKey);
const isSchedule = (u)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasProperty"])(u, ScheduleTypeId);
/** @internal */ const ScheduleDriverSymbolKey = "effect/ScheduleDriver";
const ScheduleDriverTypeId = /*#__PURE__*/ Symbol.for(ScheduleDriverSymbolKey);
const scheduleVariance = {
    /* c8 ignore next */ _Out: (_)=>_,
    /* c8 ignore next */ _In: (_)=>_,
    /* c8 ignore next */ _R: (_)=>_
};
const scheduleDriverVariance = {
    /* c8 ignore next */ _Out: (_)=>_,
    /* c8 ignore next */ _In: (_)=>_,
    /* c8 ignore next */ _R: (_)=>_
};
/** @internal */ class ScheduleImpl {
    initial;
    step;
    [ScheduleTypeId] = scheduleVariance;
    constructor(initial, step){
        this.initial = initial;
        this.step = step;
    }
    pipe() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipeArguments"])(this, arguments);
    }
}
/** @internal */ class ScheduleDriverImpl {
    schedule;
    ref;
    [ScheduleDriverTypeId] = scheduleDriverVariance;
    constructor(schedule, ref){
        this.schedule = schedule;
        this.ref = ref;
    }
    get state() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$ref$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.get(this.ref), (tuple)=>tuple[1]);
    }
    get last() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$ref$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.get(this.ref), ([element, _])=>{
            switch(element._tag){
                case "None":
                    {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.failSync(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.NoSuchElementException());
                    }
                case "Some":
                    {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(element.value);
                    }
            }
        });
    }
    get reset() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$ref$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.set(this.ref, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none(),
            this.schedule.initial
        ]);
    }
    next(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$ref$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.get(this.ref), (tuple)=>tuple[1]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Clock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.currentTimeMillis, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap((now)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.suspend(()=>this.schedule.step(now, input, state)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(([state, out, decision])=>{
                    const setState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$ref$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.set(this.ref, [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(out),
                        state
                    ]);
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(decision)) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zipRight(setState, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none()));
                    }
                    const millis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.start(decision.intervals) - now;
                    if (millis <= 0) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.as(setState, out);
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(setState, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zipRight(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2d$effect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sleep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.millis(millis))), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.as(out));
                }))))));
    }
}
const makeWithState = (initial, step)=>new ScheduleImpl(initial, step);
const addDelay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>addDelayEffect(self, (out)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sync(()=>f(out))));
const addDelayEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>modifyDelayEffect(self, (out, duration)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map(f(out), (delay)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sum(duration, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(delay)))));
const andThen = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>map(andThenEither(self, that), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.merge));
const andThenEither = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>makeWithState([
        self.initial,
        that.initial,
        true
    ], (now, input, state)=>state[2] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(self.step(now, input, state[0]), ([lState, out, decision])=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(decision)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map(that.step(now, input, state[1]), ([rState, out, decision])=>[
                        [
                            lState,
                            rState,
                            false
                        ],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.right(out),
                        decision
                    ]);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                [
                    lState,
                    state[1],
                    true
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.left(out),
                decision
            ]);
        }) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map(that.step(now, input, state[1]), ([rState, out, decision])=>[
                [
                    state[0],
                    rState,
                    false
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.right(out),
                decision
            ])));
const as = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, out)=>map(self, ()=>out));
const asVoid = (self)=>map(self, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constVoid"]);
const bothInOut = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>makeWithState([
        self.initial,
        that.initial
    ], (now, [in1, in2], state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zipWith(self.step(now, in1, state[0]), that.step(now, in2, state[1]), ([lState, out, lDecision], [rState, out2, rDecision])=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isContinue(lDecision) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isContinue(rDecision)) {
                const interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(lDecision.intervals, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.union(rDecision.intervals));
                return [
                    [
                        lState,
                        rState
                    ],
                    [
                        out,
                        out2
                    ],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continue(interval)
                ];
            }
            return [
                [
                    lState,
                    rState
                ],
                [
                    out,
                    out2
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.done
            ];
        })));
const check = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, test)=>checkEffect(self, (input, out)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sync(()=>test(input, out))));
const checkEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, test)=>makeWithState(self.initial, (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(self.step(now, input, state), ([state, out, decision])=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(decision)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                    state,
                    out,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.done
                ]);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map(test(input, out), (cont)=>cont ? [
                    state,
                    out,
                    decision
                ] : [
                    state,
                    out,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.done
                ]);
        })));
const collectAllInputs = ()=>collectAllOutputs(identity());
const collectAllOutputs = (self)=>reduce(self, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.empty(), (outs, out)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(outs, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.append(out)));
const collectUntil = (f)=>collectAllOutputs(recurUntil(f));
const collectUntilEffect = (f)=>collectAllOutputs(recurUntilEffect(f));
const collectWhile = (f)=>collectAllOutputs(recurWhile(f));
const collectWhileEffect = (f)=>collectAllOutputs(recurWhileEffect(f));
const compose = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>makeWithState([
        self.initial,
        that.initial
    ], (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(self.step(now, input, state[0]), ([lState, out, lDecision])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map(that.step(now, out, state[1]), ([rState, out2, rDecision])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(lDecision) ? [
                    [
                        lState,
                        rState
                    ],
                    out2,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.done
                ] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(rDecision) ? [
                    [
                        lState,
                        rState
                    ],
                    out2,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.done
                ] : [
                    [
                        lState,
                        rState
                    ],
                    out2,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continue((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(lDecision.intervals, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.max(rDecision.intervals)))
                ]))));
const mapInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>mapInputEffect(self, (input2)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sync(()=>f(input2))));
const mapInputContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>makeWithState(self.initial, (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mapInputContext(self.step(now, input, state), f)));
const mapInputEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>makeWithState(self.initial, (now, input2, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(f(input2), (input)=>self.step(now, input, state))));
const cron = (expression)=>{
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cron$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isCron(expression) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.right(expression) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cron$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.parse(expression);
    return makeWithState([
        true,
        [
            Number.MIN_SAFE_INTEGER,
            0,
            0
        ]
    ], (now, _, [initial, previous])=>{
        if (now < previous[0]) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                [
                    false,
                    previous
                ],
                [
                    previous[1],
                    previous[2]
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make(previous[1], previous[2]))
            ]);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isLeft(parsed)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.die(parsed.left);
        }
        const cron = parsed.right;
        const date = new Date(now);
        let next;
        if (initial && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cron$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match(cron, date)) {
            next = now;
        }
        next = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cron$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.next(cron, date).getTime();
        const start = beginningOfMinute(next);
        const end = endOfMinute(next);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
            [
                false,
                [
                    next,
                    start,
                    end
                ]
            ],
            [
                start,
                end
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make(start, end))
        ]);
    });
};
const dayOfMonth = (day)=>{
    return makeWithState([
        Number.NEGATIVE_INFINITY,
        0
    ], (now, _, state)=>{
        if (!Number.isInteger(day) || day < 1 || 31 < day) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.dieSync(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.IllegalArgumentException(`Invalid argument in: dayOfMonth(${day}). Must be in range 1...31`));
        }
        const n = state[1];
        const initial = n === 0;
        const day0 = nextDayOfMonth(now, day, initial);
        const start = beginningOfDay(day0);
        const end = endOfDay(day0);
        const interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make(start, end);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
            [
                end,
                n + 1
            ],
            n,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(interval)
        ]);
    });
};
const dayOfWeek = (day)=>{
    return makeWithState([
        Number.MIN_SAFE_INTEGER,
        0
    ], (now, _, state)=>{
        if (!Number.isInteger(day) || day < 1 || 7 < day) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.dieSync(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.IllegalArgumentException(`Invalid argument in: dayOfWeek(${day}). Must be in range 1 (Monday)...7 (Sunday)`));
        }
        const n = state[1];
        const initial = n === 0;
        const day0 = nextDay(now, day, initial);
        const start = beginningOfDay(day0);
        const end = endOfDay(day0);
        const interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make(start, end);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
            [
                end,
                n + 1
            ],
            n,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(interval)
        ]);
    });
};
const delayed = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>delayedEffect(self, (duration)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sync(()=>f(duration))));
const delayedEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>modifyDelayEffect(self, (_, delay)=>f(delay)));
const delayedSchedule = (schedule)=>addDelay(schedule, (x)=>x);
const delays = (self)=>makeWithState(self.initial, (now, input, state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(self.step(now, input, state), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(([state, _, decision])=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(decision)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                    state,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zero,
                    decision
                ]);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                state,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.millis(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.start(decision.intervals) - now),
                decision
            ]);
        })));
const mapBoth = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, { onInput, onOutput })=>map(mapInput(self, onInput), onOutput));
const mapBothEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, { onInput, onOutput })=>mapEffect(mapInputEffect(self, onInput), onOutput));
const driver = (self)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$ref$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none(),
        self.initial
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map((ref)=>new ScheduleDriverImpl(self, ref)));
const duration = (durationInput)=>{
    const duration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(durationInput);
    const durationMillis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toMillis(duration);
    return makeWithState(true, (now, _, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(state ? [
            false,
            duration,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.after(now + durationMillis))
        ] : [
            false,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zero,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.done
        ]));
};
const either = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>union(self, that));
const eitherWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(3, (self, that, f)=>unionWith(self, that, f));
const ensuring = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, finalizer)=>makeWithState(self.initial, (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(self.step(now, input, state), ([state, out, decision])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(decision) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.as(finalizer, [
                state,
                out,
                decision
            ]) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                state,
                out,
                decision
            ]))));
const exponential = (baseInput, factor = 2.0)=>{
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(baseInput);
    return delayedSchedule(map(forever, (i)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.times(base, Math.pow(factor, i))));
};
const fibonacci = (oneInput)=>{
    const one = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(oneInput);
    return delayedSchedule((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(unfold([
        one,
        one
    ], ([a, b])=>[
            b,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sum(a, b)
        ]), map((out)=>out[0])));
};
const fixed = (intervalInput)=>{
    const interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(intervalInput);
    const intervalMillis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toMillis(interval);
    return makeWithState([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none(),
        0
    ], (now, _, [option, n])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sync(()=>{
            switch(option._tag){
                case "None":
                    {
                        return [
                            [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some([
                                    now,
                                    now + intervalMillis
                                ]),
                                n + 1
                            ],
                            n,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.after(now + intervalMillis))
                        ];
                    }
                case "Some":
                    {
                        const [startMillis, lastRun] = option.value;
                        const runningBehind = now > lastRun + intervalMillis;
                        const boundary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.equals(interval, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zero) ? interval : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.millis(intervalMillis - (now - startMillis) % intervalMillis);
                        const sleepTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.equals(boundary, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zero) ? interval : boundary;
                        const nextRun = runningBehind ? now : now + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toMillis(sleepTime);
                        return [
                            [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some([
                                    startMillis,
                                    nextRun
                                ]),
                                n + 1
                            ],
                            n,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.after(nextRun))
                        ];
                    }
            }
        }));
};
const fromDelay = (delay)=>duration(delay);
const fromDelays = (delay, ...delays)=>makeWithState([
        [
            delay,
            ...delays
        ].map((_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(_)),
        true
    ], (now, _, [durations, cont])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sync(()=>{
            if (cont) {
                const x = durations[0];
                const interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.after(now + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toMillis(x));
                if (durations.length >= 2) {
                    return [
                        [
                            durations.slice(1),
                            true
                        ],
                        x,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(interval)
                    ];
                }
                const y = durations.slice(1);
                return [
                    [
                        [
                            x,
                            ...y
                        ],
                        false
                    ],
                    x,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(interval)
                ];
            }
            return [
                [
                    durations,
                    false
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zero,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.done
            ];
        }));
const fromFunction = (f)=>map(identity(), f);
const hourOfDay = (hour)=>makeWithState([
        Number.NEGATIVE_INFINITY,
        0
    ], (now, _, state)=>{
        if (!Number.isInteger(hour) || hour < 0 || 23 < hour) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.dieSync(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.IllegalArgumentException(`Invalid argument in: hourOfDay(${hour}). Must be in range 0...23`));
        }
        const n = state[1];
        const initial = n === 0;
        const hour0 = nextHour(now, hour, initial);
        const start = beginningOfHour(hour0);
        const end = endOfHour(hour0);
        const interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make(start, end);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
            [
                end,
                n + 1
            ],
            n,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(interval)
        ]);
    });
const identity = ()=>makeWithState(void 0, (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
            state,
            input,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.after(now))
        ]));
const intersect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>intersectWith(self, that, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.intersect));
const intersectWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(3, (self, that, f)=>makeWithState([
        self.initial,
        that.initial
    ], (now, input, state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zipWith(self.step(now, input, state[0]), that.step(now, input, state[1]), (a, b)=>[
                a,
                b
            ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(([[lState, out, lDecision], [rState, out2, rDecision]])=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isContinue(lDecision) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isContinue(rDecision)) {
                return intersectWithLoop(self, that, input, lState, out, lDecision.intervals, rState, out2, rDecision.intervals, f);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                [
                    lState,
                    rState
                ],
                [
                    out,
                    out2
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.done
            ]);
        }))));
/** @internal */ const intersectWithLoop = (self, that, input, lState, out, lInterval, rState, out2, rInterval, f)=>{
    const combined = f(lInterval, rInterval);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNonEmpty(combined)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
            [
                lState,
                rState
            ],
            [
                out,
                out2
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continue(combined)
        ]);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(lInterval, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.lessThan(rInterval))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(self.step(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.end(lInterval), input, lState), ([lState, out, decision])=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(decision)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                    [
                        lState,
                        rState
                    ],
                    [
                        out,
                        out2
                    ],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.done
                ]);
            }
            return intersectWithLoop(self, that, input, lState, out, decision.intervals, rState, out2, rInterval, f);
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(that.step(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.end(rInterval), input, rState), ([rState, out2, decision])=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(decision)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                [
                    lState,
                    rState
                ],
                [
                    out,
                    out2
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.done
            ]);
        }
        return intersectWithLoop(self, that, input, lState, out, lInterval, rState, out2, decision.intervals, f);
    });
};
const jittered = (self)=>jitteredWith(self, {
        min: 0.8,
        max: 1.2
    });
const jitteredWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, options)=>{
    const { max, min } = Object.assign({
        min: 0.8,
        max: 1.2
    }, options);
    return delayedEffect(self, (duration)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Random$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.next, (random)=>{
            const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toMillis(duration);
            const jittered = d * min * (1 - random) + d * max * random;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.millis(jittered);
        }));
});
const linear = (baseInput)=>{
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(baseInput);
    return delayedSchedule(map(forever, (i)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.times(base, i + 1)));
};
const map = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>mapEffect(self, (out)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sync(()=>f(out))));
const mapEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>makeWithState(self.initial, (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(self.step(now, input, state), ([state, out, decision])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map(f(out), (out2)=>[
                    state,
                    out2,
                    decision
                ]))));
const minuteOfHour = (minute)=>makeWithState([
        Number.MIN_SAFE_INTEGER,
        0
    ], (now, _, state)=>{
        if (!Number.isInteger(minute) || minute < 0 || 59 < minute) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.dieSync(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.IllegalArgumentException(`Invalid argument in: minuteOfHour(${minute}). Must be in range 0...59`));
        }
        const n = state[1];
        const initial = n === 0;
        const minute0 = nextMinute(now, minute, initial);
        const start = beginningOfMinute(minute0);
        const end = endOfMinute(minute0);
        const interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make(start, end);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
            [
                end,
                n + 1
            ],
            n,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(interval)
        ]);
    });
const modifyDelay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>modifyDelayEffect(self, (out, duration)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sync(()=>f(out, duration))));
const modifyDelayEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>makeWithState(self.initial, (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(self.step(now, input, state), ([state, out, decision])=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(decision)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                    state,
                    out,
                    decision
                ]);
            }
            const intervals = decision.intervals;
            const delay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.size(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make(now, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.start(intervals)));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map(f(out, delay), (durationInput)=>{
                const duration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(durationInput);
                const oldStart = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.start(intervals);
                const newStart = now + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toMillis(duration);
                const delta = newStart - oldStart;
                const newEnd = Math.max(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.end(intervals) + delta);
                const newInterval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make(newStart, newEnd);
                return [
                    state,
                    out,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(newInterval)
                ];
            });
        })));
const onDecision = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>makeWithState(self.initial, (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(self.step(now, input, state), ([state, out, decision])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.as(f(out, decision), [
                state,
                out,
                decision
            ]))));
const passthrough = (self)=>makeWithState(self.initial, (now, input, state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(self.step(now, input, state), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map(([state, _, decision])=>[
                state,
                input,
                decision
            ])));
const provideContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, context)=>makeWithState(self.initial, (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.provideContext(self.step(now, input, state), context)));
const provideService = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(3, (self, tag, service)=>makeWithState(self.initial, (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.contextWithEffect((env)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.provideContext(// @ts-expect-error
            self.step(now, input, state), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Context$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.add(env, tag, service)))));
const recurUntil = (f)=>untilInput(identity(), f);
const recurUntilEffect = (f)=>untilInputEffect(identity(), f);
const recurUntilOption = (pf)=>untilOutput(map(identity(), pf), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isSome);
const recurUpTo = (durationInput)=>{
    const duration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(durationInput);
    return whileOutput(elapsed, (elapsed)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.lessThan(elapsed, duration));
};
const recurWhile = (f)=>whileInput(identity(), f);
const recurWhileEffect = (f)=>whileInputEffect(identity(), f);
const recurs = (n)=>whileOutput(forever, (out)=>out < n);
const reduce = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(3, (self, zero, f)=>reduceEffect(self, zero, (z, out)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sync(()=>f(z, out))));
const reduceEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(3, (self, zero, f)=>makeWithState([
        self.initial,
        zero
    ], (now, input, [s, z])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(self.step(now, input, s), ([s, out, decision])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(decision) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                [
                    s,
                    z
                ],
                z,
                decision
            ]) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map(f(z, out), (z2)=>[
                    [
                        s,
                        z2
                    ],
                    z,
                    decision
                ]))));
const repeatForever = (self)=>makeWithState(self.initial, (now, input, state)=>{
        const step = (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(self.step(now, input, state), ([state, out, decision])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(decision) ? step(now, input, self.initial) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                    state,
                    out,
                    decision
                ]));
        return step(now, input, state);
    });
const repetitions = (self)=>reduce(self, 0, (n, _)=>n + 1);
const resetAfter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, durationInput)=>{
    const duration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(durationInput);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(self, intersect(elapsed), resetWhen(([, time])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.greaterThanOrEqualTo(time, duration)), map((out)=>out[0]));
});
const resetWhen = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>makeWithState(self.initial, (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(self.step(now, input, state), ([state, out, decision])=>f(out) ? self.step(now, input, self.initial) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                state,
                out,
                decision
            ]))));
const run = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(3, (self, now, input)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(runLoop(self, now, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable(input), self.initial, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.empty()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map((list)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.reverse(list))));
/** @internal */ const runLoop = (self, now, inputs, state, acc)=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNonEmpty(inputs)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(acc);
    }
    const input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.headNonEmpty(inputs);
    const nextInputs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.tailNonEmpty(inputs);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(self.step(now, input, state), ([state, out, decision])=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(decision)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sync(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(acc, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.prepend(out)));
        }
        return runLoop(self, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.start(decision.intervals), nextInputs, state, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.prepend(acc, out));
    });
};
const secondOfMinute = (second)=>makeWithState([
        Number.NEGATIVE_INFINITY,
        0
    ], (now, _, state)=>{
        if (!Number.isInteger(second) || second < 0 || 59 < second) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.dieSync(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.IllegalArgumentException(`Invalid argument in: secondOfMinute(${second}). Must be in range 0...59`));
        }
        const n = state[1];
        const initial = n === 0;
        const second0 = nextSecond(now, second, initial);
        const start = beginningOfSecond(second0);
        const end = endOfSecond(second0);
        const interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make(start, end);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
            [
                end,
                n + 1
            ],
            n,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(interval)
        ]);
    });
const spaced = (duration)=>addDelay(forever, ()=>duration);
const succeed = (value)=>map(forever, ()=>value);
const sync = (evaluate)=>map(forever, evaluate);
const tapInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>makeWithState(self.initial, (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zipRight(f(input), self.step(now, input, state))));
const tapOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>makeWithState(self.initial, (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.tap(self.step(now, input, state), ([, out])=>f(out))));
const unfold = (initial, f)=>makeWithState(initial, (now, _, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sync(()=>[
                f(state),
                state,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.after(now))
            ]));
const union = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>unionWith(self, that, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleIntervals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.union));
const unionWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(3, (self, that, f)=>makeWithState([
        self.initial,
        that.initial
    ], (now, input, state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zipWith(self.step(now, input, state[0]), that.step(now, input, state[1]), ([lState, l, lDecision], [rState, r, rDecision])=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(lDecision) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(rDecision)) {
                return [
                    [
                        lState,
                        rState
                    ],
                    [
                        l,
                        r
                    ],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.done
                ];
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(lDecision) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isContinue(rDecision)) {
                return [
                    [
                        lState,
                        rState
                    ],
                    [
                        l,
                        r
                    ],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continue(rDecision.intervals)
                ];
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isContinue(lDecision) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDone(rDecision)) {
                return [
                    [
                        lState,
                        rState
                    ],
                    [
                        l,
                        r
                    ],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continue(lDecision.intervals)
                ];
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isContinue(lDecision) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isContinue(rDecision)) {
                const combined = f(lDecision.intervals, rDecision.intervals);
                return [
                    [
                        lState,
                        rState
                    ],
                    [
                        l,
                        r
                    ],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continue(combined)
                ];
            }
            throw new Error("BUG: Schedule.unionWith - please report an issue at https://github.com/Effect-TS/effect/issues");
        })));
const untilInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>check(self, (input, _)=>!f(input)));
const untilInputEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>checkEffect(self, (input, _)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2d$effect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.negate(f(input))));
const untilOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>check(self, (_, out)=>!f(out)));
const untilOutputEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>checkEffect(self, (_, out)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2d$effect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.negate(f(out))));
const upTo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, duration)=>zipLeft(self, recurUpTo(duration)));
const whileInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>check(self, (input, _)=>f(input)));
const whileInputEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>checkEffect(self, (input, _)=>f(input)));
const whileOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>check(self, (_, out)=>f(out)));
const whileOutputEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>checkEffect(self, (_, out)=>f(out)));
const windowed = (intervalInput)=>{
    const interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(intervalInput);
    const millis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toMillis(interval);
    return makeWithState([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none(),
        0
    ], (now, _, [option, n])=>{
        switch(option._tag){
            case "None":
                {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                        [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(now),
                            n + 1
                        ],
                        n,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.after(now + millis))
                    ]);
                }
            case "Some":
                {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                        [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(option.value),
                            n + 1
                        ],
                        n,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.after(now + (millis - (now - option.value) % millis)))
                    ]);
                }
        }
    });
};
const zipLeft = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>map(intersect(self, that), (out)=>out[0]));
const zipRight = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>map(intersect(self, that), (out)=>out[1]));
const zipWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(3, (self, that, f)=>map(intersect(self, that), ([out, out2])=>f(out, out2)));
const beginningOfSecond = (now)=>{
    const date = new Date(now);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0).getTime();
};
const endOfSecond = (now)=>{
    const date = new Date(beginningOfSecond(now));
    return date.setSeconds(date.getSeconds() + 1);
};
const nextSecond = (now, second, initial)=>{
    const date = new Date(now);
    if (date.getSeconds() === second && initial) {
        return now;
    }
    if (date.getSeconds() < second) {
        return date.setSeconds(second);
    }
    // Set seconds to the provided value and add one minute
    const newDate = new Date(date.setSeconds(second));
    return newDate.setTime(newDate.getTime() + 1000 * 60);
};
const beginningOfMinute = (now)=>{
    const date = new Date(now);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), 0, 0).getTime();
};
const endOfMinute = (now)=>{
    const date = new Date(beginningOfMinute(now));
    return date.setMinutes(date.getMinutes() + 1);
};
const nextMinute = (now, minute, initial)=>{
    const date = new Date(now);
    if (date.getMinutes() === minute && initial) {
        return now;
    }
    if (date.getMinutes() < minute) {
        return date.setMinutes(minute);
    }
    // Set minutes to the provided value and add one hour
    const newDate = new Date(date.setMinutes(minute));
    return newDate.setTime(newDate.getTime() + 1000 * 60 * 60);
};
const beginningOfHour = (now)=>{
    const date = new Date(now);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), 0, 0, 0).getTime();
};
const endOfHour = (now)=>{
    const date = new Date(beginningOfHour(now));
    return date.setHours(date.getHours() + 1);
};
const nextHour = (now, hour, initial)=>{
    const date = new Date(now);
    if (date.getHours() === hour && initial) {
        return now;
    }
    if (date.getHours() < hour) {
        return date.setHours(hour);
    }
    // Set hours to the provided value and add one day
    const newDate = new Date(date.setHours(hour));
    return newDate.setTime(newDate.getTime() + 1000 * 60 * 60 * 24);
};
const beginningOfDay = (now)=>{
    const date = new Date(now);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0).getTime();
};
const endOfDay = (now)=>{
    const date = new Date(beginningOfDay(now));
    return date.setDate(date.getDate() + 1);
};
const nextDay = (now, dayOfWeek, initial)=>{
    const date = new Date(now);
    if (date.getDay() === dayOfWeek && initial) {
        return now;
    }
    const nextDayOfWeek = (7 + dayOfWeek - date.getDay()) % 7;
    return date.setDate(date.getDate() + (nextDayOfWeek === 0 ? 7 : nextDayOfWeek));
};
const nextDayOfMonth = (now, day, initial)=>{
    const date = new Date(now);
    if (date.getDate() === day && initial) {
        return now;
    }
    if (date.getDate() < day) {
        return date.setDate(day);
    }
    return findNextMonth(now, day, 1);
};
const findNextMonth = (now, day, months)=>{
    const d = new Date(now);
    const tmp1 = new Date(d.setDate(day));
    const tmp2 = new Date(tmp1.setMonth(tmp1.getMonth() + months));
    if (tmp2.getDate() === day) {
        const d2 = new Date(now);
        const tmp3 = new Date(d2.setDate(day));
        return tmp3.setMonth(tmp3.getMonth() + months);
    }
    return findNextMonth(now, day, months + 1);
};
// circular with Effect
const ScheduleDefectTypeId = /*#__PURE__*/ Symbol.for("effect/Schedule/ScheduleDefect");
class ScheduleDefect {
    error;
    [ScheduleDefectTypeId];
    constructor(error){
        this.error = error;
        this[ScheduleDefectTypeId] = ScheduleDefectTypeId;
    }
}
const isScheduleDefect = (u)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasProperty"])(u, ScheduleDefectTypeId);
const scheduleDefectWrap = (self)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.catchAll(self, (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.die(new ScheduleDefect(e)));
const scheduleDefectRefail = (self)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.catchAllCause(self, (cause)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$cause$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.find(cause, (_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$cause$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDieType(_) && isScheduleDefect(_.defect) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(_.defect) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none()), {
            onNone: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.failCause(cause),
            onSome: (error)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(error.error)
        }));
const repeat_Effect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, schedule)=>repeatOrElse_Effect(self, schedule, (e, _)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(e)));
const repeat_combined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, options)=>{
    if (isSchedule(options)) {
        return repeat_Effect(self, options);
    }
    const base = options.schedule ?? passthrough(forever);
    const withWhile = options.while ? whileInputEffect(base, (a)=>{
        const applied = options.while(a);
        if (typeof applied === "boolean") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(applied);
        }
        return scheduleDefectWrap(applied);
    }) : base;
    const withUntil = options.until ? untilInputEffect(withWhile, (a)=>{
        const applied = options.until(a);
        if (typeof applied === "boolean") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(applied);
        }
        return scheduleDefectWrap(applied);
    }) : withWhile;
    const withTimes = options.times ? intersect(withUntil, recurs(options.times)).pipe(map((intersectionPair)=>intersectionPair[0])) : withUntil;
    return scheduleDefectRefail(repeat_Effect(self, withTimes));
});
const repeatOrElse_Effect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(3, (self, schedule, orElse)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(driver(schedule), (driver)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.matchEffect(self, {
            onFailure: (error)=>orElse(error, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none()),
            onSuccess: (value)=>repeatOrElseEffectLoop(self, driver, orElse, value)
        })));
/** @internal */ const repeatOrElseEffectLoop = (self, driver, orElse, value)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.matchEffect(driver.next(value), {
        onFailure: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.orDie(driver.last),
        onSuccess: (b)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.matchEffect(self, {
                onFailure: (error)=>orElse(error, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(b)),
                onSuccess: (value)=>repeatOrElseEffectLoop(self, driver, orElse, value)
            })
    });
};
const retry_Effect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, policy)=>retryOrElse_Effect(self, policy, (e, _)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(e)));
const retry_combined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, options)=>{
    if (isSchedule(options)) {
        return retry_Effect(self, options);
    }
    const base = options.schedule ?? forever;
    const withWhile = options.while ? whileInputEffect(base, (e)=>{
        const applied = options.while(e);
        if (typeof applied === "boolean") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(applied);
        }
        return scheduleDefectWrap(applied);
    }) : base;
    const withUntil = options.until ? untilInputEffect(withWhile, (e)=>{
        const applied = options.until(e);
        if (typeof applied === "boolean") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(applied);
        }
        return scheduleDefectWrap(applied);
    }) : withWhile;
    const withTimes = options.times ? intersect(withUntil, recurs(options.times)) : withUntil;
    return scheduleDefectRefail(retry_Effect(self, withTimes));
});
const retryOrElse_Effect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(3, (self, policy, orElse)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(driver(policy), (driver)=>retryOrElse_EffectLoop(self, driver, orElse)));
/** @internal */ const retryOrElse_EffectLoop = (self, driver, orElse)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.catchAll(self, (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.matchEffect(driver.next(e), {
            onFailure: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(driver.last, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.orDie, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap((out)=>orElse(e, out))),
            onSuccess: ()=>retryOrElse_EffectLoop(self, driver, orElse)
        }));
};
const schedule_Effect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, schedule)=>scheduleFrom_Effect(self, void 0, schedule));
const scheduleFrom_Effect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(3, (self, initial, schedule)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(driver(schedule), (driver)=>scheduleFrom_EffectLoop(self, initial, driver)));
/** @internal */ const scheduleFrom_EffectLoop = (self, initial, driver)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.matchEffect(driver.next(initial), {
        onFailure: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.orDie(driver.last),
        onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(self, (a)=>scheduleFrom_EffectLoop(self, a, driver))
    });
const count = /*#__PURE__*/ unfold(0, (n)=>n + 1);
const elapsed = /*#__PURE__*/ makeWithState(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none(), (now, _, state)=>{
    switch(state._tag){
        case "None":
            {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(now),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zero,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.after(now))
                ]);
            }
        case "Some":
            {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed([
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(state.value),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.millis(now - state.value),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleDecision$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.continueWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ScheduleInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.after(now))
                ]);
            }
    }
});
const forever = /*#__PURE__*/ unfold(0, (n)=>n + 1);
const once = /*#__PURE__*/ asVoid(/*#__PURE__*/ recurs(1));
const stop = /*#__PURE__*/ asVoid(/*#__PURE__*/ recurs(0)); //# sourceMappingURL=schedule.js.map
}}),

};

//# sourceMappingURL=c53f3_effect_dist_esm_internal_schedule_2d0a8b.js.map