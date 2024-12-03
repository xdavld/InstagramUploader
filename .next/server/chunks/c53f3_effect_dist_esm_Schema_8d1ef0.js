module.exports = {

"[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Schema.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * @since 3.10.0
 */ __turbopack_esm__({
    "Any": (()=>Any),
    "Array": (()=>Array$),
    "ArrayEnsure": (()=>ArrayEnsure),
    "BetweenBigDecimalSchemaId": (()=>BetweenBigDecimalSchemaId),
    "BetweenBigIntSchemaId": (()=>BetweenBigIntSchemaId),
    "BetweenDateSchemaId": (()=>BetweenDateSchemaId),
    "BetweenDurationSchemaId": (()=>BetweenDurationSchemaId),
    "BetweenSchemaId": (()=>BetweenSchemaId),
    "BigDecimal": (()=>BigDecimal),
    "BigDecimalFromNumber": (()=>BigDecimalFromNumber),
    "BigDecimalFromSelf": (()=>BigDecimalFromSelf),
    "BigInt": (()=>BigInt$),
    "BigIntFromNumber": (()=>BigIntFromNumber),
    "BigIntFromSelf": (()=>BigIntFromSelf),
    "Boolean": (()=>Boolean$),
    "BooleanFromUnknown": (()=>BooleanFromUnknown),
    "BrandSchemaId": (()=>BrandSchemaId),
    "Capitalize": (()=>Capitalize),
    "Capitalized": (()=>Capitalized),
    "CapitalizedSchemaId": (()=>CapitalizedSchemaId),
    "Cause": (()=>Cause),
    "CauseFromSelf": (()=>CauseFromSelf),
    "Char": (()=>Char),
    "Chunk": (()=>Chunk),
    "ChunkFromSelf": (()=>ChunkFromSelf),
    "Class": (()=>Class),
    "Config": (()=>Config),
    "Data": (()=>Data),
    "DataFromSelf": (()=>DataFromSelf),
    "Date": (()=>Date$),
    "DateFromNumber": (()=>DateFromNumber),
    "DateFromSelf": (()=>DateFromSelf),
    "DateFromString": (()=>DateFromString),
    "DateTimeUtc": (()=>DateTimeUtc),
    "DateTimeUtcFromNumber": (()=>DateTimeUtcFromNumber),
    "DateTimeUtcFromSelf": (()=>DateTimeUtcFromSelf),
    "DateTimeZoned": (()=>DateTimeZoned),
    "DateTimeZonedFromSelf": (()=>DateTimeZonedFromSelf),
    "Defect": (()=>Defect),
    "Duration": (()=>Duration),
    "DurationFromMillis": (()=>DurationFromMillis),
    "DurationFromNanos": (()=>DurationFromNanos),
    "DurationFromSelf": (()=>DurationFromSelf),
    "Either": (()=>Either),
    "EitherFromSelf": (()=>EitherFromSelf),
    "EitherFromUnion": (()=>EitherFromUnion),
    "EndsWithSchemaId": (()=>EndsWithSchemaId),
    "Enums": (()=>Enums),
    "Exit": (()=>Exit),
    "ExitFromSelf": (()=>ExitFromSelf),
    "FiberId": (()=>FiberId),
    "FiberIdFromSelf": (()=>FiberIdFromSelf),
    "Finite": (()=>Finite),
    "FiniteSchemaId": (()=>FiniteSchemaId),
    "FromPropertySignature": (()=>FromPropertySignature),
    "GreaterThanBigDecimalSchemaId": (()=>GreaterThanBigDecimalSchemaId),
    "GreaterThanBigIntSchemaId": (()=>GreaterThanBigIntSchemaId),
    "GreaterThanDateSchemaId": (()=>GreaterThanDateSchemaId),
    "GreaterThanDurationSchemaId": (()=>GreaterThanDurationSchemaId),
    "GreaterThanOrEqualToBigDecimalSchemaId": (()=>GreaterThanOrEqualToBigDecimalSchemaId),
    "GreaterThanOrEqualToBigIntSchemaId": (()=>GreaterThanOrEqualToBigIntSchemaId),
    "GreaterThanOrEqualToDateSchemaId": (()=>GreaterThanOrEqualToDateSchemaId),
    "GreaterThanOrEqualToDurationSchemaId": (()=>GreaterThanOrEqualToDurationSchemaId),
    "GreaterThanOrEqualToSchemaId": (()=>GreaterThanOrEqualToSchemaId),
    "GreaterThanSchemaId": (()=>GreaterThanSchemaId),
    "HashMap": (()=>HashMap),
    "HashMapFromSelf": (()=>HashMapFromSelf),
    "HashSet": (()=>HashSet),
    "HashSetFromSelf": (()=>HashSetFromSelf),
    "IncludesSchemaId": (()=>IncludesSchemaId),
    "InstanceOfSchemaId": (()=>InstanceOfSchemaId),
    "Int": (()=>Int),
    "IntSchemaId": (()=>IntSchemaId),
    "ItemsCountSchemaId": (()=>ItemsCountSchemaId),
    "JsonNumber": (()=>JsonNumber),
    "JsonNumberSchemaId": (()=>JsonNumberSchemaId),
    "LengthSchemaId": (()=>LengthSchemaId),
    "LessThanBigDecimalSchemaId": (()=>LessThanBigDecimalSchemaId),
    "LessThanBigIntSchemaId": (()=>LessThanBigIntSchemaId),
    "LessThanDateSchemaId": (()=>LessThanDateSchemaId),
    "LessThanDurationSchemaId": (()=>LessThanDurationSchemaId),
    "LessThanOrEqualToBigDecimalSchemaId": (()=>LessThanOrEqualToBigDecimalSchemaId),
    "LessThanOrEqualToBigIntSchemaId": (()=>LessThanOrEqualToBigIntSchemaId),
    "LessThanOrEqualToDateSchemaId": (()=>LessThanOrEqualToDateSchemaId),
    "LessThanOrEqualToDurationSchemaId": (()=>LessThanOrEqualToDurationSchemaId),
    "LessThanOrEqualToSchemaId": (()=>LessThanOrEqualToSchemaId),
    "LessThanSchemaId": (()=>LessThanSchemaId),
    "List": (()=>List),
    "ListFromSelf": (()=>ListFromSelf),
    "Literal": (()=>Literal),
    "Lowercase": (()=>Lowercase),
    "Lowercased": (()=>Lowercased),
    "LowercasedSchemaId": (()=>LowercasedSchemaId),
    "Map": (()=>map),
    "MapFromRecord": (()=>MapFromRecord),
    "MapFromSelf": (()=>MapFromSelf),
    "MaxItemsSchemaId": (()=>MaxItemsSchemaId),
    "MaxLengthSchemaId": (()=>MaxLengthSchemaId),
    "MinItemsSchemaId": (()=>MinItemsSchemaId),
    "MinLengthSchemaId": (()=>MinLengthSchemaId),
    "MultipleOfSchemaId": (()=>MultipleOfSchemaId),
    "Negative": (()=>Negative),
    "NegativeBigDecimalFromSelf": (()=>NegativeBigDecimalFromSelf),
    "NegativeBigDecimalSchemaId": (()=>NegativeBigDecimalSchemaId),
    "NegativeBigInt": (()=>NegativeBigInt),
    "NegativeBigIntFromSelf": (()=>NegativeBigIntFromSelf),
    "Never": (()=>Never),
    "NonEmptyArray": (()=>NonEmptyArray),
    "NonEmptyArrayEnsure": (()=>NonEmptyArrayEnsure),
    "NonEmptyChunk": (()=>NonEmptyChunk),
    "NonEmptyChunkFromSelf": (()=>NonEmptyChunkFromSelf),
    "NonEmptyString": (()=>NonEmptyString),
    "NonEmptyTrimmedString": (()=>NonEmptyTrimmedString),
    "NonNaN": (()=>NonNaN),
    "NonNaNSchemaId": (()=>NonNaNSchemaId),
    "NonNegative": (()=>NonNegative),
    "NonNegativeBigDecimalFromSelf": (()=>NonNegativeBigDecimalFromSelf),
    "NonNegativeBigDecimalSchemaId": (()=>NonNegativeBigDecimalSchemaId),
    "NonNegativeBigInt": (()=>NonNegativeBigInt),
    "NonNegativeBigIntFromSelf": (()=>NonNegativeBigIntFromSelf),
    "NonPositive": (()=>NonPositive),
    "NonPositiveBigDecimalFromSelf": (()=>NonPositiveBigDecimalFromSelf),
    "NonPositiveBigDecimalSchemaId": (()=>NonPositiveBigDecimalSchemaId),
    "NonPositiveBigInt": (()=>NonPositiveBigInt),
    "NonPositiveBigIntFromSelf": (()=>NonPositiveBigIntFromSelf),
    "Not": (()=>Not),
    "Null": (()=>Null),
    "NullOr": (()=>NullOr),
    "NullishOr": (()=>NullishOr),
    "Number": (()=>Number$),
    "NumberFromString": (()=>NumberFromString),
    "Object": (()=>Object$),
    "Option": (()=>Option),
    "OptionFromNonEmptyTrimmedString": (()=>OptionFromNonEmptyTrimmedString),
    "OptionFromNullOr": (()=>OptionFromNullOr),
    "OptionFromNullishOr": (()=>OptionFromNullishOr),
    "OptionFromSelf": (()=>OptionFromSelf),
    "OptionFromUndefinedOr": (()=>OptionFromUndefinedOr),
    "PatternSchemaId": (()=>PatternSchemaId),
    "Positive": (()=>Positive),
    "PositiveBigDecimalFromSelf": (()=>PositiveBigDecimalFromSelf),
    "PositiveBigDecimalSchemaId": (()=>PositiveBigDecimalSchemaId),
    "PositiveBigInt": (()=>PositiveBigInt),
    "PositiveBigIntFromSelf": (()=>PositiveBigIntFromSelf),
    "PropertySignatureDeclaration": (()=>PropertySignatureDeclaration),
    "PropertySignatureTransformation": (()=>PropertySignatureTransformation),
    "PropertySignatureTypeId": (()=>PropertySignatureTypeId),
    "ReadonlyMap": (()=>ReadonlyMap),
    "ReadonlyMapFromRecord": (()=>ReadonlyMapFromRecord),
    "ReadonlyMapFromSelf": (()=>ReadonlyMapFromSelf),
    "ReadonlySet": (()=>ReadonlySet),
    "ReadonlySetFromSelf": (()=>ReadonlySetFromSelf),
    "Record": (()=>Record),
    "Redacted": (()=>Redacted),
    "RedactedFromSelf": (()=>RedactedFromSelf),
    "RefineSchemaId": (()=>RefineSchemaId),
    "Set": (()=>set),
    "SetFromSelf": (()=>SetFromSelf),
    "SortedSet": (()=>SortedSet),
    "SortedSetFromSelf": (()=>SortedSetFromSelf),
    "StartsWithSchemaId": (()=>StartsWithSchemaId),
    "String": (()=>String$),
    "StringFromBase64": (()=>StringFromBase64),
    "StringFromBase64Url": (()=>StringFromBase64Url),
    "StringFromHex": (()=>StringFromHex),
    "Struct": (()=>Struct),
    "Symbol": (()=>Symbol$),
    "SymbolFromSelf": (()=>SymbolFromSelf),
    "TaggedClass": (()=>TaggedClass),
    "TaggedError": (()=>TaggedError),
    "TaggedRequest": (()=>TaggedRequest),
    "TaggedStruct": (()=>TaggedStruct),
    "TemplateLiteral": (()=>TemplateLiteral),
    "TemplateLiteralParser": (()=>TemplateLiteralParser),
    "TimeZone": (()=>TimeZone),
    "TimeZoneFromSelf": (()=>TimeZoneFromSelf),
    "TimeZoneNamed": (()=>TimeZoneNamed),
    "TimeZoneNamedFromSelf": (()=>TimeZoneNamedFromSelf),
    "TimeZoneOffset": (()=>TimeZoneOffset),
    "TimeZoneOffsetFromSelf": (()=>TimeZoneOffsetFromSelf),
    "ToPropertySignature": (()=>ToPropertySignature),
    "Trim": (()=>Trim),
    "Trimmed": (()=>Trimmed),
    "TrimmedSchemaId": (()=>TrimmedSchemaId),
    "Tuple": (()=>Tuple),
    "TypeId": (()=>TypeId),
    "ULID": (()=>ULID),
    "ULIDSchemaId": (()=>ULIDSchemaId),
    "UUID": (()=>UUID),
    "UUIDSchemaId": (()=>UUIDSchemaId),
    "Uint8Array": (()=>Uint8Array$),
    "Uint8ArrayFromBase64": (()=>Uint8ArrayFromBase64),
    "Uint8ArrayFromBase64Url": (()=>Uint8ArrayFromBase64Url),
    "Uint8ArrayFromHex": (()=>Uint8ArrayFromHex),
    "Uint8ArrayFromSelf": (()=>Uint8ArrayFromSelf),
    "Uncapitalize": (()=>Uncapitalize),
    "Uncapitalized": (()=>Uncapitalized),
    "UncapitalizedSchemaId": (()=>UncapitalizedSchemaId),
    "Undefined": (()=>Undefined),
    "UndefinedOr": (()=>UndefinedOr),
    "Union": (()=>Union),
    "UniqueSymbolFromSelf": (()=>UniqueSymbolFromSelf),
    "Unknown": (()=>Unknown),
    "Uppercase": (()=>Uppercase),
    "Uppercased": (()=>Uppercased),
    "UppercasedSchemaId": (()=>UppercasedSchemaId),
    "ValidDateFromSelf": (()=>ValidDateFromSelf),
    "ValidDateSchemaId": (()=>ValidDateSchemaId),
    "Void": (()=>Void),
    "annotations": (()=>annotations),
    "asSchema": (()=>asSchema),
    "asSerializable": (()=>asSerializable),
    "asSerializableWithResult": (()=>asSerializableWithResult),
    "asWithResult": (()=>asWithResult),
    "attachPropertySignature": (()=>attachPropertySignature),
    "between": (()=>between),
    "betweenBigDecimal": (()=>betweenBigDecimal),
    "betweenBigInt": (()=>betweenBigInt),
    "betweenDate": (()=>betweenDate),
    "betweenDuration": (()=>betweenDuration),
    "brand": (()=>brand),
    "capitalized": (()=>capitalized),
    "clamp": (()=>clamp),
    "clampBigDecimal": (()=>clampBigDecimal),
    "clampBigInt": (()=>clampBigInt),
    "clampDuration": (()=>clampDuration),
    "compose": (()=>compose),
    "declare": (()=>declare),
    "decode": (()=>decode),
    "decodeEither": (()=>decodeEither),
    "decodePromise": (()=>decodePromise),
    "decodeUnknown": (()=>decodeUnknown),
    "decodeUnknownEither": (()=>decodeUnknownEither),
    "decodeUnknownPromise": (()=>decodeUnknownPromise),
    "deserialize": (()=>deserialize),
    "deserializeExit": (()=>deserializeExit),
    "deserializeFailure": (()=>deserializeFailure),
    "deserializeSuccess": (()=>deserializeSuccess),
    "element": (()=>element),
    "encode": (()=>encode),
    "encodeEither": (()=>encodeEither),
    "encodePromise": (()=>encodePromise),
    "encodeUnknown": (()=>encodeUnknown),
    "encodeUnknownEither": (()=>encodeUnknownEither),
    "encodeUnknownPromise": (()=>encodeUnknownPromise),
    "encodedBoundSchema": (()=>encodedBoundSchema),
    "encodedSchema": (()=>encodedSchema),
    "endsWith": (()=>endsWith),
    "equivalence": (()=>equivalence),
    "exitSchema": (()=>exitSchema),
    "extend": (()=>extend),
    "failureSchema": (()=>failureSchema),
    "filter": (()=>filter),
    "filterEffect": (()=>filterEffect),
    "finite": (()=>finite),
    "format": (()=>format),
    "fromBrand": (()=>fromBrand),
    "fromKey": (()=>fromKey),
    "getClassTag": (()=>getClassTag),
    "getNumberIndexedAccess": (()=>getNumberIndexedAccess),
    "greaterThan": (()=>greaterThan),
    "greaterThanBigDecimal": (()=>greaterThanBigDecimal),
    "greaterThanBigInt": (()=>greaterThanBigInt),
    "greaterThanDate": (()=>greaterThanDate),
    "greaterThanDuration": (()=>greaterThanDuration),
    "greaterThanOrEqualTo": (()=>greaterThanOrEqualTo),
    "greaterThanOrEqualToBigDecimal": (()=>greaterThanOrEqualToBigDecimal),
    "greaterThanOrEqualToBigInt": (()=>greaterThanOrEqualToBigInt),
    "greaterThanOrEqualToDate": (()=>greaterThanOrEqualToDate),
    "greaterThanOrEqualToDuration": (()=>greaterThanOrEqualToDuration),
    "head": (()=>head),
    "headOrElse": (()=>headOrElse),
    "includes": (()=>includes),
    "instanceOf": (()=>instanceOf),
    "int": (()=>int),
    "isPropertySignature": (()=>isPropertySignature),
    "isSchema": (()=>isSchema),
    "itemsCount": (()=>itemsCount),
    "keyof": (()=>keyof),
    "length": (()=>length),
    "lessThan": (()=>lessThan),
    "lessThanBigDecimal": (()=>lessThanBigDecimal),
    "lessThanBigInt": (()=>lessThanBigInt),
    "lessThanDate": (()=>lessThanDate),
    "lessThanDuration": (()=>lessThanDuration),
    "lessThanOrEqualTo": (()=>lessThanOrEqualTo),
    "lessThanOrEqualToBigDecimal": (()=>lessThanOrEqualToBigDecimal),
    "lessThanOrEqualToBigInt": (()=>lessThanOrEqualToBigInt),
    "lessThanOrEqualToDate": (()=>lessThanOrEqualToDate),
    "lessThanOrEqualToDuration": (()=>lessThanOrEqualToDuration),
    "lowercased": (()=>lowercased),
    "make": (()=>make),
    "makePropertySignature": (()=>makePropertySignature),
    "maxItems": (()=>maxItems),
    "maxLength": (()=>maxLength),
    "minItems": (()=>minItems),
    "minLength": (()=>minLength),
    "multipleOf": (()=>multipleOf),
    "mutable": (()=>mutable),
    "negative": (()=>negative),
    "negativeBigDecimal": (()=>negativeBigDecimal),
    "negativeBigInt": (()=>negativeBigInt),
    "nonEmptyString": (()=>nonEmptyString),
    "nonNaN": (()=>nonNaN),
    "nonNegative": (()=>nonNegative),
    "nonNegativeBigDecimal": (()=>nonNegativeBigDecimal),
    "nonNegativeBigInt": (()=>nonNegativeBigInt),
    "nonPositive": (()=>nonPositive),
    "nonPositiveBigDecimal": (()=>nonPositiveBigDecimal),
    "nonPositiveBigInt": (()=>nonPositiveBigInt),
    "omit": (()=>omit),
    "optional": (()=>optional),
    "optionalElement": (()=>optionalElement),
    "optionalToOptional": (()=>optionalToOptional),
    "optionalToRequired": (()=>optionalToRequired),
    "optionalWith": (()=>optionalWith),
    "parseJson": (()=>parseJson),
    "parseNumber": (()=>parseNumber),
    "partial": (()=>partial),
    "partialWith": (()=>partialWith),
    "pattern": (()=>pattern),
    "pick": (()=>pick),
    "pickLiteral": (()=>pickLiteral),
    "pluck": (()=>pluck),
    "positive": (()=>positive),
    "positiveBigDecimal": (()=>positiveBigDecimal),
    "positiveBigInt": (()=>positiveBigInt),
    "propertySignature": (()=>propertySignature),
    "rename": (()=>rename),
    "required": (()=>required),
    "requiredToOptional": (()=>requiredToOptional),
    "serializableSchema": (()=>serializableSchema),
    "serialize": (()=>serialize),
    "serializeExit": (()=>serializeExit),
    "serializeFailure": (()=>serializeFailure),
    "serializeSuccess": (()=>serializeSuccess),
    "split": (()=>split),
    "startsWith": (()=>startsWith),
    "successSchema": (()=>successSchema),
    "suspend": (()=>suspend),
    "symbolSerializable": (()=>symbolSerializable),
    "symbolWithResult": (()=>symbolWithResult),
    "tag": (()=>tag),
    "transform": (()=>transform),
    "transformLiteral": (()=>transformLiteral),
    "transformLiterals": (()=>transformLiterals),
    "transformOrFail": (()=>transformOrFail),
    "trimmed": (()=>trimmed),
    "typeSchema": (()=>typeSchema),
    "uncapitalized": (()=>uncapitalized),
    "uppercased": (()=>uppercased),
    "validDate": (()=>validDate),
    "validate": (()=>validate),
    "validateEither": (()=>validateEither),
    "validatePromise": (()=>validatePromise),
    "withConstructorDefault": (()=>withConstructorDefault),
    "withDecodingDefault": (()=>withDecodingDefault),
    "withDefaults": (()=>withDefaults)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Predicate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Exit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Exit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/ParseResult.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$HashSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/HashSet.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Array.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equivalence.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$HashMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/HashMap.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$List$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/List.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SortedSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/SortedSet.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Function.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Either.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ConfigError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/ConfigError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$GlobalValue$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/GlobalValue.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Request.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/SchemaAST.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Option.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/schema/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Equal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/schema/util.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Pipeable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Effect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Effect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Struct.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/internal/schema/filters.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$String$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/String.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Number.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigInt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/BigInt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Redacted$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Redacted.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Duration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Encoding.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/DateTime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Record$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Record.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/BigDecimal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Chunk.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$FastCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/FastCheck.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Data.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$FiberId$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/FiberId.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cause$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/effect@3.10.3/node_modules/effect/dist/esm/Cause.js [app-route] (ecmascript)");
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
;
const TypeId = /*#__PURE__*/ Symbol.for("effect/Schema");
const make = (ast)=>class SchemaClass {
        [TypeId] = variance;
        static Type;
        static Encoded;
        static Context;
        static [TypeId] = variance;
        static ast = ast;
        static annotations(annotations) {
            return make(mergeSchemaAnnotations(this.ast, annotations));
        }
        static pipe() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipeArguments"])(this, arguments);
        }
        static toString() {
            return String(ast);
        }
    };
const variance = {
    /* c8 ignore next */ _A: (_)=>_,
    /* c8 ignore next */ _I: (_)=>_,
    /* c8 ignore next */ _R: (_)=>_
};
const builtInAnnotations = {
    schemaId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.SchemaIdAnnotationId,
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.MessageAnnotationId,
    missingMessage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.MissingMessageAnnotationId,
    identifier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.IdentifierAnnotationId,
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TitleAnnotationId,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.DescriptionAnnotationId,
    examples: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ExamplesAnnotationId,
    default: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.DefaultAnnotationId,
    documentation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.DocumentationAnnotationId,
    jsonSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.JSONSchemaAnnotationId,
    arbitrary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ArbitraryAnnotationId,
    pretty: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.PrettyAnnotationId,
    equivalence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.EquivalenceAnnotationId,
    concurrency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ConcurrencyAnnotationId,
    batching: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.BatchingAnnotationId,
    parseIssueTitle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ParseIssueTitleAnnotationId,
    parseOptions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ParseOptionsAnnotationId,
    decodingFallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.DecodingFallbackAnnotationId
};
const toASTAnnotations = (annotations)=>{
    if (!annotations) {
        return {};
    }
    const out = {
        ...annotations
    };
    for(const key in builtInAnnotations){
        if (key in annotations) {
            const id = builtInAnnotations[key];
            out[id] = annotations[key];
            delete out[key];
        }
    }
    return out;
};
const mergeSchemaAnnotations = (ast, annotations)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.annotations(ast, toASTAnnotations(annotations));
const asSchema = (schema)=>schema;
const format = (schema)=>String(schema.ast);
const encodedSchema = (schema)=>make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodedAST(schema.ast));
const encodedBoundSchema = (schema)=>make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodedBoundAST(schema.ast));
const typeSchema = (schema)=>make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.typeAST(schema.ast));
;
const encodeUnknown = (schema, options)=>{
    const encodeUnknown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(schema, options);
    return (u, overrideOptions)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mapError(encodeUnknown(u, overrideOptions), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.parseError);
};
const encodeUnknownEither = (schema, options)=>{
    const encodeUnknownEither = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknownEither(schema, options);
    return (u, overrideOptions)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mapLeft(encodeUnknownEither(u, overrideOptions), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.parseError);
};
const encodeUnknownPromise = (schema, options)=>{
    const parser = encodeUnknown(schema, options);
    return (u, overrideOptions)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Effect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.runPromise(parser(u, overrideOptions));
};
const encode = encodeUnknown;
const encodeEither = encodeUnknownEither;
const encodePromise = encodeUnknownPromise;
const decodeUnknown = (schema, options)=>{
    const decodeUnknown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(schema, options);
    return (u, overrideOptions)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mapError(decodeUnknown(u, overrideOptions), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.parseError);
};
const decodeUnknownEither = (schema, options)=>{
    const decodeUnknownEither = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknownEither(schema, options);
    return (u, overrideOptions)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mapLeft(decodeUnknownEither(u, overrideOptions), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.parseError);
};
const decodeUnknownPromise = (schema, options)=>{
    const parser = decodeUnknown(schema, options);
    return (u, overrideOptions)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Effect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.runPromise(parser(u, overrideOptions));
};
const decode = decodeUnknown;
const decodeEither = decodeUnknownEither;
const decodePromise = decodeUnknownPromise;
const validate = (schema, options)=>{
    const validate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.validate(schema, options);
    return (u, overrideOptions)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mapError(validate(u, overrideOptions), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.parseError);
};
const validateEither = (schema, options)=>{
    const validateEither = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.validateEither(schema, options);
    return (u, overrideOptions)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mapLeft(validateEither(u, overrideOptions), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.parseError);
};
const validatePromise = (schema, options)=>{
    const parser = validate(schema, options);
    return (u, overrideOptions)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Effect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.runPromise(parser(u, overrideOptions));
};
const isSchema = (u)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.hasProperty(u, TypeId) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isObject(u[TypeId]);
const getDefaultLiteralAST = (literals)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isMembers(literals) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Union.make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mapMembers(literals, (literal)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Literal(literal))) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Literal(literals[0]);
const makeLiteralClass = (literals, ast = getDefaultLiteralAST(literals))=>class LiteralClass extends make(ast) {
        static annotations(annotations) {
            return makeLiteralClass(this.literals, mergeSchemaAnnotations(this.ast, annotations));
        }
        static literals = [
            ...literals
        ];
    };
function Literal(...literals) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNonEmptyReadonlyArray(literals) ? makeLiteralClass(literals) : Never;
}
const pickLiteral = (...literals)=>(_schema)=>Literal(...literals);
const UniqueSymbolFromSelf = (symbol)=>make(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.UniqueSymbol(symbol));
const getDefaultEnumsAST = (enums)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Enums(Object.keys(enums).filter((key)=>typeof enums[enums[key]] !== "number").map((key)=>[
            key,
            enums[key]
        ]));
const makeEnumsClass = (enums, ast = getDefaultEnumsAST(enums))=>class EnumsClass extends make(ast) {
        static annotations(annotations) {
            return makeEnumsClass(this.enums, mergeSchemaAnnotations(this.ast, annotations));
        }
        static enums = {
            ...enums
        };
    };
const Enums = (enums)=>makeEnumsClass(enums);
const TemplateLiteral = (...[head, ...tail])=>{
    let astOrs = getTemplateLiterals(getTemplateLiteralParameterAST(head));
    for (const span of tail){
        astOrs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(astOrs, (a)=>getTemplateLiterals(getTemplateLiteralParameterAST(span)).map((b)=>combineTemplateLiterals(a, b)));
    }
    return make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Union.make(astOrs.map((astOr)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isString(astOr) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Literal(astOr) : astOr)));
};
const getTemplateLiteralParameterAST = (span)=>isSchema(span) ? span.ast : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Literal(String(span));
const combineTemplateLiterals = (a, b)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isString(a)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isString(b) ? a + b : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TemplateLiteral(a + b.head, b.spans);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isString(b)) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TemplateLiteral(a.head, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.modifyNonEmptyLast(a.spans, (span)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TemplateLiteralSpan(span.type, span.literal + b)));
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TemplateLiteral(a.head, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.appendAll(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.modifyNonEmptyLast(a.spans, (span)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TemplateLiteralSpan(span.type, span.literal + String(b.head))), b.spans));
};
const getTemplateLiterals = (ast)=>{
    switch(ast._tag){
        case "Literal":
            return [
                String(ast.literal)
            ];
        case "NumberKeyword":
        case "StringKeyword":
            return [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TemplateLiteral("", [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TemplateLiteralSpan(ast, "")
                ])
            ];
        case "Union":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(ast.types, getTemplateLiterals);
    }
    throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getSchemaUnsupportedLiteralSpanErrorMessage(ast));
};
const TemplateLiteralParser = (...params)=>{
    const encodedSchemas = [];
    const typeSchemas = [];
    const numbers = [];
    for(let i = 0; i < params.length; i++){
        const p = params[i];
        if (isSchema(p)) {
            const encoded = encodedSchema(p);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNumberKeyword(encoded.ast)) {
                numbers.push(i);
            }
            encodedSchemas.push(encoded);
            typeSchemas.push(p);
        } else {
            const literal = Literal(p);
            encodedSchemas.push(literal);
            typeSchemas.push(literal);
        }
    }
    const from = TemplateLiteral(...encodedSchemas);
    const re = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getTemplateLiteralCapturingRegExp(from.ast);
    return class TemplateLiteralParserClass extends transform(from, Tuple(...typeSchemas), {
        strict: false,
        decode: (s)=>{
            const out = re.exec(s).slice(1, params.length + 1);
            for(let i = 0; i < numbers.length; i++){
                const index = numbers[i];
                out[index] = Number(out[index]);
            }
            return out;
        },
        encode: (tuple)=>tuple.join("")
    }) {
        static params = params.slice();
    };
};
const declareConstructor = (typeParameters, options, annotations)=>make(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Declaration(typeParameters.map((tp)=>tp.ast), (...typeParameters)=>options.decode(...typeParameters.map(make)), (...typeParameters)=>options.encode(...typeParameters.map(make)), toASTAnnotations(annotations)));
const declarePrimitive = (is, annotations)=>{
    const decodeUnknown = ()=>(input, _, ast)=>is(input) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(input) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, input));
    const encodeUnknown = decodeUnknown;
    return make(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Declaration([], decodeUnknown, encodeUnknown, toASTAnnotations(annotations)));
};
const declare = function() {
    if (Array.isArray(arguments[0])) {
        const typeParameters = arguments[0];
        const options = arguments[1];
        const annotations = arguments[2];
        return declareConstructor(typeParameters, options, annotations);
    }
    const is = arguments[0];
    const annotations = arguments[1];
    return declarePrimitive(is, annotations);
};
const BrandSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/Brand");
const fromBrand = (constructor, annotations)=>(self)=>makeBrandClass(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Refinement(self.ast, function predicate(a, _, ast) {
            const either = constructor.either(a);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isLeft(either) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, a, either.left.map((v)=>v.message).join(", "))) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none();
        }, toASTAnnotations({
            schemaId: BrandSchemaId,
            [BrandSchemaId]: {
                constructor
            },
            ...annotations
        })));
const InstanceOfSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/InstanceOf");
const instanceOf = (constructor, annotations)=>declare((u)=>u instanceof constructor, {
        title: constructor.name,
        description: `an instance of ${constructor.name}`,
        pretty: ()=>String,
        schemaId: InstanceOfSchemaId,
        [InstanceOfSchemaId]: {
            constructor
        },
        ...annotations
    });
class Undefined extends /*#__PURE__*/ make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.undefinedKeyword) {
}
class Void extends /*#__PURE__*/ make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.voidKeyword) {
}
class Null extends /*#__PURE__*/ make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.null) {
}
class Never extends /*#__PURE__*/ make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.neverKeyword) {
}
class Unknown extends /*#__PURE__*/ make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.unknownKeyword) {
}
class Any extends /*#__PURE__*/ make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.anyKeyword) {
}
class BigIntFromSelf extends /*#__PURE__*/ make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.bigIntKeyword) {
}
class SymbolFromSelf extends /*#__PURE__*/ make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.symbolKeyword) {
}
/** @ignore */ class String$ extends /*#__PURE__*/ make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.stringKeyword) {
}
/** @ignore */ class Number$ extends /*#__PURE__*/ make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.numberKeyword) {
}
/** @ignore */ class Boolean$ extends /*#__PURE__*/ make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.booleanKeyword) {
}
/** @ignore */ class Object$ extends /*#__PURE__*/ make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.objectKeyword) {
}
;
const getDefaultUnionAST = (members)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Union.make(members.map((m)=>m.ast));
const makeUnionClass = (members, ast = getDefaultUnionAST(members))=>class UnionClass extends make(ast) {
        static annotations(annotations) {
            return makeUnionClass(this.members, mergeSchemaAnnotations(this.ast, annotations));
        }
        static members = [
            ...members
        ];
    };
function Union(...members) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isMembers(members) ? makeUnionClass(members) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNonEmptyReadonlyArray(members) ? members[0] : Never;
}
const NullOr = (self)=>Union(self, Null);
const UndefinedOr = (self)=>Union(self, Undefined);
const NullishOr = (self)=>Union(self, Null, Undefined);
const keyof = (self)=>make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.keyof(self.ast));
const element = (self)=>new ElementImpl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.OptionalType(self.ast, false), self);
const optionalElement = (self)=>new ElementImpl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.OptionalType(self.ast, true), self);
class ElementImpl {
    ast;
    from;
    [TypeId];
    _Token;
    constructor(ast, from){
        this.ast = ast;
        this.from = from;
    }
    annotations(annotations) {
        return new ElementImpl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.OptionalType(this.ast.type, this.ast.isOptional, {
            ...this.ast.annotations,
            ...toASTAnnotations(annotations)
        }), this.from);
    }
    toString() {
        return `${this.ast.type}${this.ast.isOptional ? "?" : ""}`;
    }
}
const getDefaultTupleTypeAST = (elements, rest)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TupleType(elements.map((el)=>isSchema(el) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.OptionalType(el.ast, false) : el.ast), rest.map((el)=>isSchema(el) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(el.ast) : el.ast), true);
const makeTupleTypeClass = (elements, rest, ast = getDefaultTupleTypeAST(elements, rest))=>class TupleTypeClass extends make(ast) {
        static annotations(annotations) {
            return makeTupleTypeClass(this.elements, this.rest, mergeSchemaAnnotations(this.ast, annotations));
        }
        static elements = [
            ...elements
        ];
        static rest = [
            ...rest
        ];
    };
function Tuple(...args) {
    return Array.isArray(args[0]) ? makeTupleTypeClass(args[0], args.slice(1)) : makeTupleTypeClass(args, []);
}
const makeArrayClass = (value, ast)=>class ArrayClass extends makeTupleTypeClass([], [
        value
    ], ast) {
        static annotations(annotations) {
            return makeArrayClass(this.value, mergeSchemaAnnotations(this.ast, annotations));
        }
        static value = value;
    };
const Array$ = (value)=>makeArrayClass(value);
;
const makeNonEmptyArrayClass = (value, ast)=>class NonEmptyArrayClass extends makeTupleTypeClass([
        value
    ], [
        value
    ], ast) {
        static annotations(annotations) {
            return makeNonEmptyArrayClass(this.value, mergeSchemaAnnotations(this.ast, annotations));
        }
        static value = value;
    };
const NonEmptyArray = (value)=>makeNonEmptyArrayClass(value);
const ArrayEnsure = (value)=>{
    const value_ = asSchema(value);
    return class ArrayEnsureClass extends transform(Union(value_, Array$(value_)), Array$(typeSchema(value_)), {
        strict: true,
        decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ensure,
        encode: (arr)=>arr.length === 1 ? arr[0] : arr
    }) {
    };
};
const NonEmptyArrayEnsure = (value)=>{
    const value_ = asSchema(value);
    return class NonEmptyArrayEnsureClass extends transform(Union(value_, NonEmptyArray(value_)), NonEmptyArray(typeSchema(value_)), {
        strict: true,
        decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ensure,
        encode: (arr)=>arr.length === 1 ? arr[0] : arr
    }) {
    };
};
const formatPropertySignatureToken = (isOptional)=>isOptional ? "\"?:\"" : "\":\"";
class PropertySignatureDeclaration extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.OptionalType {
    isReadonly;
    defaultValue;
    /**
   * @since 3.10.0
   */ _tag = "PropertySignatureDeclaration";
    constructor(type, isOptional, isReadonly, annotations, defaultValue){
        super(type, isOptional, annotations);
        this.isReadonly = isReadonly;
        this.defaultValue = defaultValue;
    }
    /**
   * @since 3.10.0
   */ toString() {
        const token = formatPropertySignatureToken(this.isOptional);
        const type = String(this.type);
        return `PropertySignature<${token}, ${type}, never, ${token}, ${type}>`;
    }
}
class FromPropertySignature extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.OptionalType {
    isReadonly;
    fromKey;
    constructor(type, isOptional, isReadonly, annotations, fromKey){
        super(type, isOptional, annotations);
        this.isReadonly = isReadonly;
        this.fromKey = fromKey;
    }
}
class ToPropertySignature extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.OptionalType {
    isReadonly;
    defaultValue;
    constructor(type, isOptional, isReadonly, annotations, defaultValue){
        super(type, isOptional, annotations);
        this.isReadonly = isReadonly;
        this.defaultValue = defaultValue;
    }
}
const formatPropertyKey = (p)=>{
    if (p === undefined) {
        return "never";
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isString(p)) {
        return JSON.stringify(p);
    }
    return String(p);
};
class PropertySignatureTransformation {
    from;
    to;
    decode;
    encode;
    /**
   * @since 3.10.0
   */ _tag = "PropertySignatureTransformation";
    constructor(from, to, decode, encode){
        this.from = from;
        this.to = to;
        this.decode = decode;
        this.encode = encode;
    }
    /**
   * @since 3.10.0
   */ toString() {
        return `PropertySignature<${formatPropertySignatureToken(this.to.isOptional)}, ${this.to.type}, ${formatPropertyKey(this.from.fromKey)}, ${formatPropertySignatureToken(this.from.isOptional)}, ${this.from.type}>`;
    }
}
const mergeSignatureAnnotations = (ast, annotations)=>{
    switch(ast._tag){
        case "PropertySignatureDeclaration":
            {
                return new PropertySignatureDeclaration(ast.type, ast.isOptional, ast.isReadonly, {
                    ...ast.annotations,
                    ...annotations
                }, ast.defaultValue);
            }
        case "PropertySignatureTransformation":
            {
                return new PropertySignatureTransformation(new FromPropertySignature(ast.from.type, ast.from.isOptional, ast.from.isReadonly, ast.from.annotations), new ToPropertySignature(ast.to.type, ast.to.isOptional, ast.to.isReadonly, {
                    ...ast.to.annotations,
                    ...annotations
                }, ast.to.defaultValue), ast.decode, ast.encode);
            }
    }
};
const PropertySignatureTypeId = /*#__PURE__*/ Symbol.for("effect/PropertySignature");
const isPropertySignature = (u)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.hasProperty(u, PropertySignatureTypeId);
class PropertySignatureImpl {
    ast;
    [TypeId];
    [PropertySignatureTypeId] = null;
    _TypeToken;
    _Key;
    _EncodedToken;
    _HasDefault;
    constructor(ast){
        this.ast = ast;
    }
    pipe() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipeArguments"])(this, arguments);
    }
    annotations(annotations) {
        return new PropertySignatureImpl(mergeSignatureAnnotations(this.ast, toASTAnnotations(annotations)));
    }
    toString() {
        return String(this.ast);
    }
}
const makePropertySignature = (ast)=>new PropertySignatureImpl(ast);
class PropertySignatureWithFromImpl extends PropertySignatureImpl {
    from;
    constructor(ast, from){
        super(ast);
        this.from = from;
    }
    annotations(annotations) {
        return new PropertySignatureWithFromImpl(mergeSignatureAnnotations(this.ast, toASTAnnotations(annotations)), this.from);
    }
}
const propertySignature = (self)=>new PropertySignatureWithFromImpl(new PropertySignatureDeclaration(self.ast, false, true, {}, undefined), self);
const withConstructorDefault = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, defaultValue)=>{
    const ast = self.ast;
    switch(ast._tag){
        case "PropertySignatureDeclaration":
            return makePropertySignature(new PropertySignatureDeclaration(ast.type, ast.isOptional, ast.isReadonly, ast.annotations, defaultValue));
        case "PropertySignatureTransformation":
            return makePropertySignature(new PropertySignatureTransformation(ast.from, new ToPropertySignature(ast.to.type, ast.to.isOptional, ast.to.isReadonly, ast.to.annotations, defaultValue), ast.decode, ast.encode));
    }
});
const applyDefaultValue = (o, defaultValue)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match(o, {
        onNone: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(defaultValue()),
        onSome: (value)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(value === undefined ? defaultValue() : value)
    });
const withDecodingDefault = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, defaultValue)=>{
    const ast = self.ast;
    switch(ast._tag){
        case "PropertySignatureDeclaration":
            return makePropertySignature(new PropertySignatureTransformation(ast, new ToPropertySignature(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.typeAST(ast.type), false, true, {}, undefined), (o)=>applyDefaultValue(o, defaultValue), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]));
        case "PropertySignatureTransformation":
            return makePropertySignature(new PropertySignatureTransformation(ast.from, new ToPropertySignature(ast.to.type, false, ast.to.isReadonly, ast.to.annotations, ast.to.defaultValue), (o)=>applyDefaultValue(ast.decode(o), defaultValue), ast.encode));
    }
});
const withDefaults = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, defaults)=>self.pipe(withDecodingDefault(defaults.decoding), withConstructorDefault(defaults.constructor)));
const fromKey = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, key)=>{
    const ast = self.ast;
    switch(ast._tag){
        case "PropertySignatureDeclaration":
            {
                return makePropertySignature(new PropertySignatureTransformation(new FromPropertySignature(ast.type, ast.isOptional, ast.isReadonly, ast.annotations, key), new ToPropertySignature(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.typeAST(ast.type), ast.isOptional, ast.isReadonly, {}, ast.defaultValue), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]));
            }
        case "PropertySignatureTransformation":
            return makePropertySignature(new PropertySignatureTransformation(new FromPropertySignature(ast.from.type, ast.from.isOptional, ast.from.isReadonly, ast.from.annotations, key), ast.to, ast.decode, ast.encode));
    }
});
const optionalToRequired = (from, to, options)=>makePropertySignature(new PropertySignatureTransformation(new FromPropertySignature(from.ast, true, true, {}, undefined), new ToPropertySignature(to.ast, false, true, {}, undefined), (o)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(options.decode(o)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(options.encode)));
const requiredToOptional = (from, to, options)=>makePropertySignature(new PropertySignatureTransformation(new FromPropertySignature(from.ast, false, true, {}, undefined), new ToPropertySignature(to.ast, true, true, {}, undefined), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(options.decode), (o)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(options.encode(o))));
const optionalToOptional = (from, to, options)=>makePropertySignature(new PropertySignatureTransformation(new FromPropertySignature(from.ast, true, true, {}, undefined), new ToPropertySignature(to.ast, true, true, {}, undefined), options.decode, options.encode));
const optionalPropertySignatureAST = (self, options)=>{
    const isExact = options?.exact;
    const defaultValue = options?.default;
    const isNullable = options?.nullable;
    const asOption = options?.as == "Option";
    const asOptionEncode = options?.onNoneEncoding ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.orElse(options.onNoneEncoding) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"];
    if (isExact) {
        if (defaultValue) {
            if (isNullable) {
                return withConstructorDefault(optionalToRequired(NullOr(self), typeSchema(self), {
                    decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match({
                        onNone: defaultValue,
                        onSome: (a)=>a === null ? defaultValue() : a
                    }),
                    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some
                }), defaultValue).ast;
            } else {
                return withConstructorDefault(optionalToRequired(self, typeSchema(self), {
                    decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match({
                        onNone: defaultValue,
                        onSome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
                    }),
                    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some
                }), defaultValue).ast;
            }
        } else if (asOption) {
            if (isNullable) {
                return optionalToRequired(NullOr(self), OptionFromSelf(typeSchema(self)), {
                    decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNotNull),
                    encode: asOptionEncode
                }).ast;
            } else {
                return optionalToRequired(self, OptionFromSelf(typeSchema(self)), {
                    decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"],
                    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
                }).ast;
            }
        } else {
            if (isNullable) {
                return optionalToOptional(NullOr(self), typeSchema(self), {
                    decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNotNull),
                    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
                }).ast;
            } else {
                return new PropertySignatureDeclaration(self.ast, true, true, {}, undefined);
            }
        }
    } else {
        if (defaultValue) {
            if (isNullable) {
                return withConstructorDefault(optionalToRequired(NullishOr(self), typeSchema(self), {
                    decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match({
                        onNone: defaultValue,
                        onSome: (a)=>a == null ? defaultValue() : a
                    }),
                    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some
                }), defaultValue).ast;
            } else {
                return withConstructorDefault(optionalToRequired(UndefinedOr(self), typeSchema(self), {
                    decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match({
                        onNone: defaultValue,
                        onSome: (a)=>a === undefined ? defaultValue() : a
                    }),
                    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some
                }), defaultValue).ast;
            }
        } else if (asOption) {
            if (isNullable) {
                return optionalToRequired(NullishOr(self), OptionFromSelf(typeSchema(self)), {
                    decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.filter((a)=>a != null),
                    encode: asOptionEncode
                }).ast;
            } else {
                return optionalToRequired(UndefinedOr(self), OptionFromSelf(typeSchema(self)), {
                    decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNotUndefined),
                    encode: asOptionEncode
                }).ast;
            }
        } else {
            if (isNullable) {
                return optionalToOptional(NullishOr(self), UndefinedOr(typeSchema(self)), {
                    decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNotNull),
                    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
                }).ast;
            } else {
                return new PropertySignatureDeclaration(UndefinedOr(self).ast, true, true, {}, undefined);
            }
        }
    }
};
const optional = (self)=>{
    const ast = self.ast === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.undefinedKeyword || self.ast === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.neverKeyword ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.undefinedKeyword : UndefinedOr(self).ast;
    return new PropertySignatureWithFromImpl(new PropertySignatureDeclaration(ast, true, true, {}, undefined), self);
};
const optionalWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])((args)=>isSchema(args[0]), (self, options)=>{
    return new PropertySignatureWithFromImpl(optionalPropertySignatureAST(self, options), self);
});
const getDefaultTypeLiteralAST = (fields, records)=>{
    const ownKeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ownKeys(fields);
    const pss = [];
    if (ownKeys.length > 0) {
        const from = [];
        const to = [];
        const transformations = [];
        for(let i = 0; i < ownKeys.length; i++){
            const key = ownKeys[i];
            const field = fields[key];
            if (isPropertySignature(field)) {
                const ast = field.ast;
                switch(ast._tag){
                    case "PropertySignatureDeclaration":
                        {
                            const type = ast.type;
                            const isOptional = ast.isOptional;
                            const toAnnotations = ast.annotations;
                            from.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.PropertySignature(key, type, isOptional, true));
                            to.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.PropertySignature(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.typeAST(type), isOptional, true, toAnnotations));
                            pss.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.PropertySignature(key, type, isOptional, true, toAnnotations));
                            break;
                        }
                    case "PropertySignatureTransformation":
                        {
                            const fromKey = ast.from.fromKey ?? key;
                            from.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.PropertySignature(fromKey, ast.from.type, ast.from.isOptional, true, ast.from.annotations));
                            to.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.PropertySignature(key, ast.to.type, ast.to.isOptional, true, ast.to.annotations));
                            transformations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.PropertySignatureTransformation(fromKey, key, ast.decode, ast.encode));
                            break;
                        }
                }
            } else {
                from.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.PropertySignature(key, field.ast, false, true));
                to.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.PropertySignature(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.typeAST(field.ast), false, true));
                pss.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.PropertySignature(key, field.ast, false, true));
            }
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNonEmptyReadonlyArray(transformations)) {
            const issFrom = [];
            const issTo = [];
            for (const r of records){
                const { indexSignatures, propertySignatures } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.record(r.key.ast, r.value.ast);
                propertySignatures.forEach((ps)=>{
                    from.push(ps);
                    to.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.PropertySignature(ps.name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.typeAST(ps.type), ps.isOptional, ps.isReadonly, ps.annotations));
                });
                indexSignatures.forEach((is)=>{
                    issFrom.push(is);
                    issTo.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.IndexSignature(is.parameter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.typeAST(is.type), is.isReadonly));
                });
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Transformation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TypeLiteral(from, issFrom, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TitleAnnotationId]: "Struct (Encoded side)"
            }), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TypeLiteral(to, issTo, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TitleAnnotationId]: "Struct (Type side)"
            }), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TypeLiteralTransformation(transformations));
        }
    }
    const iss = [];
    for (const r of records){
        const { indexSignatures, propertySignatures } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.record(r.key.ast, r.value.ast);
        propertySignatures.forEach((ps)=>pss.push(ps));
        indexSignatures.forEach((is)=>iss.push(is));
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TypeLiteral(pss, iss);
};
const lazilyMergeDefaults = (fields, out)=>{
    const ownKeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ownKeys(fields);
    for (const key of ownKeys){
        const field = fields[key];
        if (out[key] === undefined && isPropertySignature(field)) {
            const ast = field.ast;
            const defaultValue = ast._tag === "PropertySignatureDeclaration" ? ast.defaultValue : ast.to.defaultValue;
            if (defaultValue !== undefined) {
                out[key] = defaultValue();
            }
        }
    }
    return out;
};
const makeTypeLiteralClass = (fields, records, ast = getDefaultTypeLiteralAST(fields, records))=>{
    return class TypeLiteralClass extends make(ast) {
        static annotations(annotations) {
            return makeTypeLiteralClass(this.fields, this.records, mergeSchemaAnnotations(this.ast, annotations));
        }
        static fields = {
            ...fields
        };
        static records = [
            ...records
        ];
        static make = (props, options)=>{
            const propsWithDefaults = lazilyMergeDefaults(fields, {
                ...props
            });
            return getDisableValidationMakeOption(options) ? propsWithDefaults : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.validateSync(this)(propsWithDefaults);
        };
        static pick(...keys) {
            return Struct(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.pick(fields, ...keys));
        }
        static omit(...keys) {
            return Struct(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.omit(fields, ...keys));
        }
    };
};
function Struct(fields, ...records) {
    return makeTypeLiteralClass(fields, records);
}
const tag = (tag)=>Literal(tag).pipe(propertySignature, withConstructorDefault(()=>tag));
const TaggedStruct = (value, fields)=>Struct({
        _tag: tag(value),
        ...fields
    });
const makeRecordClass = (key, value, ast)=>class RecordClass extends makeTypeLiteralClass({}, [
        {
            key,
            value
        }
    ], ast) {
        static annotations(annotations) {
            return makeRecordClass(key, value, mergeSchemaAnnotations(this.ast, annotations));
        }
        static key = key;
        static value = value;
    };
const Record = (options)=>makeRecordClass(options.key, options.value);
const pick = (...keys)=>(self)=>make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.pick(self.ast, keys));
const omit = (...keys)=>(self)=>make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.omit(self.ast, keys));
const pluck = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (schema, key)=>{
    const ps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getPropertyKeyIndexedAccess(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.typeAST(schema.ast), key);
    const value = make(ps.isOptional ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.orUndefined(ps.type) : ps.type);
    return transform(schema.pipe(pick(key)), value, {
        strict: true,
        decode: (a)=>a[key],
        encode: (ak)=>ps.isOptional && ak === undefined ? {} : {
                [key]: ak
            }
    });
});
const makeBrandClass = (ast)=>class BrandClass extends make(ast) {
        static annotations(annotations) {
            return makeBrandClass(mergeSchemaAnnotations(this.ast, annotations));
        }
        static make = (a, options)=>{
            return getDisableValidationMakeOption(options) ? a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.validateSync(this)(a);
        };
    };
const brand = (brand, annotations)=>(self)=>{
        const annotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getBrandAnnotation(self.ast), {
            onNone: ()=>[
                    brand
                ],
            onSome: (brands)=>[
                    ...brands,
                    brand
                ]
        });
        const ast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.annotations(self.ast, toASTAnnotations({
            // add a default title annotation containing the brand
            title: String(self.ast) + ` & Brand<${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatUnknown(brand)}>`,
            ...annotations,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.BrandAnnotationId]: annotation
        }));
        return makeBrandClass(ast);
    };
const partial = (self)=>make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.partial(self.ast));
const partialWith = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])((args)=>isSchema(args[0]), (self, options)=>make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.partial(self.ast, options)));
const required = (self)=>make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.required(self.ast));
const mutable = (schema)=>make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mutable(schema.ast));
const intersectTypeLiterals = (x, y, path)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isTypeLiteral(x) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isTypeLiteral(y)) {
        const propertySignatures = [
            ...x.propertySignatures
        ];
        for (const ps of y.propertySignatures){
            const name = ps.name;
            const i = propertySignatures.findIndex((ps)=>ps.name === name);
            if (i === -1) {
                propertySignatures.push(ps);
            } else {
                const { isOptional, type } = propertySignatures[i];
                propertySignatures[i] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.PropertySignature(name, extendAST(type, ps.type, path.concat(name)), isOptional, true);
            }
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TypeLiteral(propertySignatures, x.indexSignatures.concat(y.indexSignatures));
    }
    throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getSchemaExtendErrorMessage(x, y, path));
};
const preserveRefinementAnnotations = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.blackListAnnotations([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.IdentifierAnnotationId
]);
const addRefinementToMembers = (refinement, asts)=>asts.map((ast)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Refinement(ast, refinement.filter, preserveRefinementAnnotations(refinement)));
const extendAST = (x, y, path)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Union.make(intersectUnionMembers([
        x
    ], [
        y
    ], path));
const getTypes = (ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isUnion(ast) ? ast.types : [
        ast
    ];
const intersectUnionMembers = (xs, ys, path)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(xs, (x)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(ys, (y)=>{
            switch(y._tag){
                case "Literal":
                    {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isString(y.literal) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isStringKeyword(x) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNumber(y.literal) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNumberKeyword(x) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isBoolean(y.literal) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isBooleanKeyword(x)) {
                            return [
                                y
                            ];
                        }
                        break;
                    }
                case "StringKeyword":
                    {
                        if (y === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.stringKeyword) {
                            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isStringKeyword(x) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isLiteral(x) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isString(x.literal)) {
                                return [
                                    x
                                ];
                            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isRefinement(x)) {
                                return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [
                                    y
                                ], path));
                            }
                        } else if (x === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.stringKeyword) {
                            return [
                                y
                            ];
                        }
                        break;
                    }
                case "NumberKeyword":
                    {
                        if (y === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.numberKeyword) {
                            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNumberKeyword(x) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isLiteral(x) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNumber(x.literal)) {
                                return [
                                    x
                                ];
                            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isRefinement(x)) {
                                return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [
                                    y
                                ], path));
                            }
                        } else if (x === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.numberKeyword) {
                            return [
                                y
                            ];
                        }
                        break;
                    }
                case "BooleanKeyword":
                    {
                        if (y === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.booleanKeyword) {
                            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isBooleanKeyword(x) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isLiteral(x) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isBoolean(x.literal)) {
                                return [
                                    x
                                ];
                            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isRefinement(x)) {
                                return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [
                                    y
                                ], path));
                            }
                        } else if (x === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.booleanKeyword) {
                            return [
                                y
                            ];
                        }
                        break;
                    }
                case "Union":
                    return intersectUnionMembers(getTypes(x), y.types, path);
                case "Suspend":
                    return [
                        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Suspend(()=>extendAST(x, y.f(), path))
                    ];
                case "Refinement":
                    return addRefinementToMembers(y, intersectUnionMembers(getTypes(x), getTypes(y.from), path));
                case "TypeLiteral":
                    {
                        switch(x._tag){
                            case "Union":
                                return intersectUnionMembers(x.types, [
                                    y
                                ], path);
                            case "Suspend":
                                return [
                                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Suspend(()=>extendAST(x.f(), y, path))
                                ];
                            case "Refinement":
                                return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [
                                    y
                                ], path));
                            case "TypeLiteral":
                                return [
                                    intersectTypeLiterals(x, y, path)
                                ];
                            case "Transformation":
                                {
                                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isTypeLiteralTransformation(x.transformation)) {
                                        return [
                                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Transformation(intersectTypeLiterals(x.from, y, path), intersectTypeLiterals(x.to, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.typeAST(y), path), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TypeLiteralTransformation(x.transformation.propertySignatureTransformations))
                                        ];
                                    }
                                    break;
                                }
                        }
                        break;
                    }
                case "Transformation":
                    {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isTypeLiteralTransformation(y.transformation)) {
                            switch(x._tag){
                                case "Union":
                                    return intersectUnionMembers(x.types, [
                                        y
                                    ], path);
                                case "Suspend":
                                    return [
                                        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Suspend(()=>extendAST(x.f(), y, path))
                                    ];
                                case "Refinement":
                                    return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [
                                        y
                                    ], path));
                                case "TypeLiteral":
                                    return [
                                        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Transformation(intersectTypeLiterals(x, y.from, path), intersectTypeLiterals(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.typeAST(x), y.to, path), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TypeLiteralTransformation(y.transformation.propertySignatureTransformations))
                                    ];
                                case "Transformation":
                                    {
                                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isTypeLiteralTransformation(x.transformation)) {
                                            return [
                                                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Transformation(intersectTypeLiterals(x.from, y.from, path), intersectTypeLiterals(x.to, y.to, path), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TypeLiteralTransformation(y.transformation.propertySignatureTransformations.concat(x.transformation.propertySignatureTransformations)))
                                            ];
                                        }
                                    }
                                    break;
                            }
                        }
                        break;
                    }
            }
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getSchemaExtendErrorMessage(x, y, path));
        }));
const extend = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>make(extendAST(self.ast, that.ast, [])));
const compose = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])((args)=>isSchema(args[1]), (from, to)=>make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.compose(from.ast, to.ast)));
const suspend = (f)=>make(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Suspend(()=>f().ast));
const RefineSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/Refine");
const makeRefineClass = (from, filter, ast)=>class RefineClass extends make(ast) {
        static annotations(annotations) {
            return makeRefineClass(this.from, this.filter, mergeSchemaAnnotations(this.ast, annotations));
        }
        static [RefineSchemaId] = from;
        static from = from;
        static filter = filter;
        static make = (a, options)=>{
            return getDisableValidationMakeOption(options) ? a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.validateSync(this)(a);
        };
    };
const fromFilterPredicateReturnTypeItem = (item, ast, input)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isBoolean(item)) {
        return item ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, input));
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isString(item)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, input, item));
    }
    if (item !== undefined) {
        if ("_tag" in item) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(item);
        }
        const issue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, input, item.message);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNonEmptyReadonlyArray(item.path) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Pointer(item.path, input, issue) : issue);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none();
};
const toFilterParseIssue = (out, ast, input)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isSingle(out)) {
        return fromFilterPredicateReturnTypeItem(out, ast, input);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNonEmptyReadonlyArray(out)) {
        const issues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.filterMap(out, (issue)=>fromFilterPredicateReturnTypeItem(issue, ast, input));
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNonEmptyReadonlyArray(issues)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(issues.length === 1 ? issues[0] : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Composite(ast, input, issues));
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none();
};
function filter(predicate, annotations) {
    return (self)=>{
        function filter(input, options, ast) {
            return toFilterParseIssue(predicate(input, options, ast), ast, input);
        }
        const ast = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Refinement(self.ast, filter, toASTAnnotations(annotations));
        return makeRefineClass(self, filter, ast);
    };
}
const filterEffect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>transformOrFail(self, typeSchema(self), {
        strict: true,
        decode: (a, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.flatMap(f(a, options, ast), (filterReturnType)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match(toFilterParseIssue(filterReturnType, ast, a), {
                    onNone: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(a),
                    onSome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail
                })),
        encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed
    }));
const makeTransformationClass = (from, to, ast)=>class TransformationClass extends make(ast) {
        static annotations(annotations) {
            return makeTransformationClass(this.from, this.to, mergeSchemaAnnotations(this.ast, annotations));
        }
        static from = from;
        static to = to;
    };
const transformOrFail = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])((args)=>isSchema(args[0]) && isSchema(args[1]), (from, to, options)=>makeTransformationClass(from, to, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Transformation(from.ast, to.ast, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.FinalTransformation(options.decode, options.encode))));
const transform = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])((args)=>isSchema(args[0]) && isSchema(args[1]), (from, to, options)=>transformOrFail(from, to, {
        strict: true,
        decode: (fromA, _options, _ast, toA)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(options.decode(fromA, toA)),
        encode: (toI, _options, _ast, toA)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(options.encode(toI, toA))
    }));
const transformLiteral = (from, to)=>transform(Literal(from), Literal(to), {
        strict: true,
        decode: ()=>to,
        encode: ()=>from
    });
function transformLiterals(...pairs) {
    return Union(...pairs.map(([from, to])=>transformLiteral(from, to)));
}
const attachPropertySignature = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])((args)=>isSchema(args[0]), (schema, key, value, annotations)=>{
    const ast = extend(typeSchema(schema), Struct({
        [key]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isSymbol(value) ? UniqueSymbolFromSelf(value) : Literal(value)
    })).ast;
    return make(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Transformation(schema.ast, annotations ? mergeSchemaAnnotations(ast, annotations) : ast, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TypeLiteralTransformation([
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.PropertySignatureTransformation(key, key, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(value), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none())
    ])));
});
const annotations = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, annotations)=>self.annotations(annotations));
const rename = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, mapping)=>make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.rename(self.ast, mapping)));
const TrimmedSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/Trimmed");
const trimmed = (annotations)=>(self)=>self.pipe(filter((a)=>a === a.trim(), {
            schemaId: TrimmedSchemaId,
            description: "a string with no leading or trailing whitespace",
            jsonSchema: {
                pattern: "^\\S[\\s\\S]*\\S$|^\\S$|^$"
            },
            ...annotations
        }));
const MaxLengthSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.MaxLengthSchemaId;
const maxLength = (maxLength, annotations)=>(self)=>self.pipe(filter((a)=>a.length <= maxLength, {
            schemaId: MaxLengthSchemaId,
            description: `a string at most ${maxLength} character(s) long`,
            jsonSchema: {
                maxLength
            },
            ...annotations
        }));
const MinLengthSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.MinLengthSchemaId;
const minLength = (minLength, annotations)=>(self)=>self.pipe(filter((a)=>a.length >= minLength, {
            schemaId: MinLengthSchemaId,
            description: `a string at least ${minLength} character(s) long`,
            jsonSchema: {
                minLength
            },
            ...annotations
        }));
const PatternSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/Pattern");
const pattern = (regex, annotations)=>(self)=>{
        const pattern = regex.source;
        return self.pipe(filter((a)=>{
            // The following line ensures that `lastIndex` is reset to `0` in case the user has specified the `g` flag
            regex.lastIndex = 0;
            return regex.test(a);
        }, {
            schemaId: PatternSchemaId,
            [PatternSchemaId]: {
                regex
            },
            description: `a string matching the pattern ${pattern}`,
            jsonSchema: {
                pattern
            },
            arbitrary: ()=>(fc)=>fc.stringMatching(regex),
            ...annotations
        }));
    };
const StartsWithSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/StartsWith");
const startsWith = (startsWith, annotations)=>(self)=>self.pipe(filter((a)=>a.startsWith(startsWith), {
            schemaId: StartsWithSchemaId,
            [StartsWithSchemaId]: {
                startsWith
            },
            description: `a string starting with ${JSON.stringify(startsWith)}`,
            jsonSchema: {
                pattern: `^${startsWith}`
            },
            ...annotations
        }));
const EndsWithSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/EndsWith");
const endsWith = (endsWith, annotations)=>(self)=>self.pipe(filter((a)=>a.endsWith(endsWith), {
            schemaId: EndsWithSchemaId,
            [EndsWithSchemaId]: {
                endsWith
            },
            description: `a string ending with ${JSON.stringify(endsWith)}`,
            jsonSchema: {
                pattern: `^.*${endsWith}$`
            },
            ...annotations
        }));
const IncludesSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/Includes");
const includes = (searchString, annotations)=>(self)=>self.pipe(filter((a)=>a.includes(searchString), {
            schemaId: IncludesSchemaId,
            [IncludesSchemaId]: {
                includes: searchString
            },
            description: `a string including ${JSON.stringify(searchString)}`,
            jsonSchema: {
                pattern: `.*${searchString}.*`
            },
            ...annotations
        }));
const LowercasedSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/Lowercased");
const lowercased = (annotations)=>(self)=>self.pipe(filter((a)=>a === a.toLowerCase(), {
            schemaId: LowercasedSchemaId,
            description: "a lowercase string",
            ...annotations
        }));
class Lowercased extends /*#__PURE__*/ String$.pipe(/*#__PURE__*/ lowercased({
    identifier: "Lowercased",
    title: "Lowercased"
})) {
}
const CapitalizedSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/Capitalized");
const capitalized = (annotations)=>(self)=>self.pipe(filter((a)=>a[0]?.toUpperCase() === a[0], {
            schemaId: CapitalizedSchemaId,
            description: "a capitalized string",
            ...annotations
        }));
class Capitalized extends /*#__PURE__*/ String$.pipe(/*#__PURE__*/ capitalized({
    identifier: "Capitalized",
    title: "Capitalized"
})) {
}
const UncapitalizedSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/Uncapitalized");
const uncapitalized = (annotations)=>(self)=>self.pipe(filter((a)=>a[0]?.toLowerCase() === a[0], {
            schemaId: UncapitalizedSchemaId,
            description: "a uncapitalized string",
            ...annotations
        }));
class Uncapitalized extends /*#__PURE__*/ String$.pipe(/*#__PURE__*/ uncapitalized({
    identifier: "Uncapitalized",
    title: "Uncapitalized"
})) {
}
const UppercasedSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/Uppercased");
const uppercased = (annotations)=>(self)=>self.pipe(filter((a)=>a === a.toUpperCase(), {
            schemaId: UppercasedSchemaId,
            description: "an uppercase string",
            ...annotations
        }));
class Uppercased extends /*#__PURE__*/ String$.pipe(/*#__PURE__*/ uppercased({
    identifier: "Uppercased",
    title: "Uppercased"
})) {
}
const LengthSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.LengthSchemaId;
const length = (length, annotations)=>(self)=>{
        const minLength = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isObject(length) ? Math.max(0, Math.floor(length.min)) : Math.max(0, Math.floor(length));
        const maxLength = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isObject(length) ? Math.max(minLength, Math.floor(length.max)) : minLength;
        if (minLength !== maxLength) {
            return self.pipe(filter((a)=>a.length >= minLength && a.length <= maxLength, {
                schemaId: LengthSchemaId,
                description: `a string at least ${minLength} character(s) and at most ${maxLength} character(s) long`,
                jsonSchema: {
                    minLength,
                    maxLength
                },
                ...annotations
            }));
        }
        return self.pipe(filter((a)=>a.length === minLength, {
            schemaId: LengthSchemaId,
            description: minLength === 1 ? `a single character` : `a string ${minLength} character(s) long`,
            jsonSchema: {
                minLength,
                maxLength: minLength
            },
            ...annotations
        }));
    };
class Char extends /*#__PURE__*/ String$.pipe(/*#__PURE__*/ length(1, {
    identifier: "Char"
})) {
}
const nonEmptyString = (annotations)=>minLength(1, {
        description: "a non empty string",
        ...annotations
    });
class Lowercase extends /*#__PURE__*/ transform(String$.annotations({
    description: "a string that will be converted to lowercase"
}), Lowercased, {
    strict: true,
    decode: (s)=>s.toLowerCase(),
    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
}).annotations({
    identifier: "Lowercase"
}) {
}
class Uppercase extends /*#__PURE__*/ transform(String$.annotations({
    description: "a string that will be converted to uppercase"
}), Uppercased, {
    strict: true,
    decode: (s)=>s.toUpperCase(),
    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
}).annotations({
    identifier: "Uppercase"
}) {
}
class Capitalize extends /*#__PURE__*/ transform(String$.annotations({
    description: "a string that will be converted to a capitalized format"
}), Capitalized, {
    strict: true,
    decode: (s)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$String$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.capitalize(s),
    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
}).annotations({
    identifier: "Capitalize"
}) {
}
class Uncapitalize extends /*#__PURE__*/ transform(String$.annotations({
    description: "a string that will be converted to an uncapitalized format"
}), Uncapitalized, {
    strict: true,
    decode: (s)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$String$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.uncapitalize(s),
    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
}).annotations({
    identifier: "Uncapitalize"
}) {
}
class Trimmed extends /*#__PURE__*/ String$.pipe(/*#__PURE__*/ trimmed({
    identifier: "Trimmed",
    title: "Trimmed"
})) {
}
class NonEmptyTrimmedString extends /*#__PURE__*/ Trimmed.pipe(/*#__PURE__*/ nonEmptyString({
    identifier: "NonEmptyTrimmedString",
    title: "NonEmptyTrimmedString"
})) {
}
class Trim extends /*#__PURE__*/ transform(String$.annotations({
    description: "a string that will be trimmed"
}), Trimmed, {
    strict: true,
    decode: (s)=>s.trim(),
    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
}).annotations({
    identifier: "Trim"
}) {
}
const split = (separator)=>transform(String$.annotations({
        description: "a string that will be split"
    }), Array$(String$), {
        strict: true,
        decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$String$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.split(separator),
        encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.join(separator)
    });
const JsonString = /*#__PURE__*/ String$.annotations({
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.IdentifierAnnotationId]: "JsonString",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TitleAnnotationId]: "JsonString",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.DescriptionAnnotationId]: "a JSON string"
});
const getParseJsonTransformation = (options)=>transformOrFail(JsonString, Unknown, {
        strict: true,
        decode: (s, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.try({
                try: ()=>JSON.parse(s, options?.reviver),
                catch: (e)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, s, e.message)
            }),
        encode: (u, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.try({
                try: ()=>JSON.stringify(u, options?.replacer, options?.space),
                catch: (e)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u, e.message)
            })
    }).annotations({
        schemaId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ParseJsonSchemaId
    });
const parseJson = (schemaOrOptions, o)=>isSchema(schemaOrOptions) ? compose(parseJson(o), schemaOrOptions) : getParseJsonTransformation(schemaOrOptions);
class NonEmptyString extends /*#__PURE__*/ String$.pipe(/*#__PURE__*/ nonEmptyString({
    identifier: "NonEmptyString",
    title: "NonEmptyString"
})) {
}
const UUIDSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/UUID");
const uuidRegexp = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i;
class UUID extends /*#__PURE__*/ String$.pipe(/*#__PURE__*/ pattern(uuidRegexp, {
    schemaId: UUIDSchemaId,
    identifier: "UUID",
    title: "UUID",
    description: "a Universally Unique Identifier",
    arbitrary: ()=>(fc)=>fc.uuid()
})) {
}
const ULIDSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/ULID");
const ulidRegexp = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i;
class ULID extends /*#__PURE__*/ String$.pipe(/*#__PURE__*/ pattern(ulidRegexp, {
    schemaId: ULIDSchemaId,
    identifier: "ULID",
    title: "ULID",
    description: "a Universally Unique Lexicographically Sortable Identifier",
    arbitrary: ()=>(fc)=>fc.ulid()
})) {
}
const FiniteSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/Finite");
const finite = (annotations)=>(self)=>self.pipe(filter((a)=>Number.isFinite(a), {
            schemaId: FiniteSchemaId,
            description: "a finite number",
            ...annotations
        }));
const GreaterThanSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.GreaterThanSchemaId;
const greaterThan = (min, annotations)=>(self)=>self.pipe(filter((a)=>a > min, {
            schemaId: GreaterThanSchemaId,
            description: min === 0 ? "a positive number" : `a number greater than ${min}`,
            jsonSchema: {
                exclusiveMinimum: min
            },
            ...annotations
        }));
const GreaterThanOrEqualToSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.GreaterThanOrEqualToSchemaId;
const greaterThanOrEqualTo = (min, annotations)=>(self)=>self.pipe(filter((a)=>a >= min, {
            schemaId: GreaterThanOrEqualToSchemaId,
            description: min === 0 ? "a non-negative number" : `a number greater than or equal to ${min}`,
            jsonSchema: {
                minimum: min
            },
            ...annotations
        }));
const MultipleOfSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/MultipleOf");
const multipleOf = (divisor, annotations)=>(self)=>self.pipe(filter((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.remainder(a, divisor) === 0, {
            schemaId: MultipleOfSchemaId,
            description: `a number divisible by ${divisor}`,
            jsonSchema: {
                multipleOf: Math.abs(divisor)
            },
            // spec requires positive divisor
            ...annotations
        }));
const IntSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.IntSchemaId;
const int = (annotations)=>(self)=>self.pipe(filter((a)=>Number.isSafeInteger(a), {
            schemaId: IntSchemaId,
            title: "integer",
            description: "an integer",
            jsonSchema: {
                type: "integer"
            },
            ...annotations
        }));
const LessThanSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.LessThanSchemaId;
const lessThan = (max, annotations)=>(self)=>self.pipe(filter((a)=>a < max, {
            schemaId: LessThanSchemaId,
            description: max === 0 ? "a negative number" : `a number less than ${max}`,
            jsonSchema: {
                exclusiveMaximum: max
            },
            ...annotations
        }));
const LessThanOrEqualToSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.LessThanOrEqualToSchemaId;
const lessThanOrEqualTo = (max, annotations)=>(self)=>self.pipe(filter((a)=>a <= max, {
            schemaId: LessThanOrEqualToSchemaId,
            description: max === 0 ? "a non-positive number" : `a number less than or equal to ${max}`,
            jsonSchema: {
                maximum: max
            },
            ...annotations
        }));
const BetweenSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.BetweenSchemaId;
const between = (min, max, annotations)=>(self)=>self.pipe(filter((a)=>a >= min && a <= max, {
            schemaId: BetweenSchemaId,
            description: `a number between ${min} and ${max}`,
            jsonSchema: {
                maximum: max,
                minimum: min
            },
            ...annotations
        }));
const NonNaNSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/NonNaN");
const nonNaN = (annotations)=>(self)=>self.pipe(filter((a)=>!Number.isNaN(a), {
            schemaId: NonNaNSchemaId,
            description: "a number excluding NaN",
            ...annotations
        }));
const positive = (annotations)=>greaterThan(0, annotations);
const negative = (annotations)=>lessThan(0, annotations);
const nonPositive = (annotations)=>lessThanOrEqualTo(0, annotations);
const nonNegative = (annotations)=>greaterThanOrEqualTo(0, annotations);
const clamp = (minimum, maximum)=>(self)=>transform(self, self.pipe(typeSchema, between(minimum, maximum)), {
            strict: false,
            decode: (self)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.clamp(self, {
                    minimum,
                    maximum
                }),
            encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
        });
const parseNumber = (self)=>transformOrFail(self, Number$, {
        strict: false,
        decode: (s, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromOption(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.parse(s), ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, s)),
        encode: (n)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(String(n))
    });
class NumberFromString extends /*#__PURE__*/ parseNumber(String$.annotations({
    description: "a string that will be parsed into a number"
})).annotations({
    identifier: "NumberFromString"
}) {
}
class Finite extends /*#__PURE__*/ Number$.pipe(/*#__PURE__*/ finite({
    identifier: "Finite",
    title: "Finite"
})) {
}
class Int extends /*#__PURE__*/ Number$.pipe(/*#__PURE__*/ int({
    identifier: "Int",
    title: "Int"
})) {
}
class NonNaN extends /*#__PURE__*/ Number$.pipe(/*#__PURE__*/ nonNaN({
    identifier: "NonNaN",
    title: "NonNaN"
})) {
}
class Positive extends /*#__PURE__*/ Number$.pipe(/*#__PURE__*/ positive({
    identifier: "Positive",
    title: "Positive"
})) {
}
class Negative extends /*#__PURE__*/ Number$.pipe(/*#__PURE__*/ negative({
    identifier: "Negative",
    title: "Negative"
})) {
}
class NonPositive extends /*#__PURE__*/ Number$.pipe(/*#__PURE__*/ nonPositive({
    identifier: "NonPositive",
    title: "NonPositive"
})) {
}
class NonNegative extends /*#__PURE__*/ Number$.pipe(/*#__PURE__*/ nonNegative({
    identifier: "NonNegative",
    title: "NonNegative"
})) {
}
const JsonNumberSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/JsonNumber");
class JsonNumber extends /*#__PURE__*/ Number$.pipe(/*#__PURE__*/ filter((n)=>!Number.isNaN(n) && Number.isFinite(n), {
    schemaId: JsonNumberSchemaId,
    identifier: "JsonNumber",
    title: "JSON-compatible number",
    description: "a JSON-compatible number, excluding NaN, +Infinity, and -Infinity",
    jsonSchema: {
        type: "number"
    }
})) {
}
class Not extends /*#__PURE__*/ transform(/*#__PURE__*/ Boolean$.annotations({
    description: "a boolean that will be negated"
}), Boolean$, {
    strict: true,
    decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.not,
    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.not
}) {
}
/** @ignore */ class Symbol$ extends /*#__PURE__*/ transform(String$.annotations({
    description: "a string that will be converted to a symbol"
}), SymbolFromSelf, {
    strict: false,
    decode: (s)=>Symbol.for(s),
    encode: (sym)=>sym.description
}).annotations({
    identifier: "symbol"
}) {
}
;
const GreaterThanBigIntSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.GreaterThanBigintSchemaId;
const greaterThanBigInt = (min, annotations)=>(self)=>self.pipe(filter((a)=>a > min, {
            schemaId: GreaterThanBigIntSchemaId,
            [GreaterThanBigIntSchemaId]: {
                min
            },
            description: min === 0n ? "a positive bigint" : `a bigint greater than ${min}n`,
            ...annotations
        }));
const GreaterThanOrEqualToBigIntSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.GreaterThanOrEqualToBigIntSchemaId;
const greaterThanOrEqualToBigInt = (min, annotations)=>(self)=>self.pipe(filter((a)=>a >= min, {
            schemaId: GreaterThanOrEqualToBigIntSchemaId,
            [GreaterThanOrEqualToBigIntSchemaId]: {
                min
            },
            description: min === 0n ? "a non-negative bigint" : `a bigint greater than or equal to ${min}n`,
            ...annotations
        }));
const LessThanBigIntSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.LessThanBigIntSchemaId;
const lessThanBigInt = (max, annotations)=>(self)=>self.pipe(filter((a)=>a < max, {
            schemaId: LessThanBigIntSchemaId,
            [LessThanBigIntSchemaId]: {
                max
            },
            description: max === 0n ? "a negative bigint" : `a bigint less than ${max}n`,
            ...annotations
        }));
const LessThanOrEqualToBigIntSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.LessThanOrEqualToBigIntSchemaId;
const lessThanOrEqualToBigInt = (max, annotations)=>(self)=>self.pipe(filter((a)=>a <= max, {
            schemaId: LessThanOrEqualToBigIntSchemaId,
            [LessThanOrEqualToBigIntSchemaId]: {
                max
            },
            description: max === 0n ? "a non-positive bigint" : `a bigint less than or equal to ${max}n`,
            ...annotations
        }));
const BetweenBigIntSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.BetweenBigintSchemaId;
const betweenBigInt = (min, max, annotations)=>(self)=>self.pipe(filter((a)=>a >= min && a <= max, {
            schemaId: BetweenBigIntSchemaId,
            [BetweenBigIntSchemaId]: {
                max,
                min
            },
            description: `a bigint between ${min}n and ${max}n`,
            ...annotations
        }));
const positiveBigInt = (annotations)=>greaterThanBigInt(0n, annotations);
const negativeBigInt = (annotations)=>lessThanBigInt(0n, annotations);
const nonNegativeBigInt = (annotations)=>greaterThanOrEqualToBigInt(0n, annotations);
const nonPositiveBigInt = (annotations)=>lessThanOrEqualToBigInt(0n, annotations);
const clampBigInt = (minimum, maximum)=>(self)=>transform(self, self.pipe(typeSchema, betweenBigInt(minimum, maximum)), {
            strict: false,
            decode: (self)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigInt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.clamp(self, {
                    minimum,
                    maximum
                }),
            encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
        });
/** @ignore */ class BigInt$ extends /*#__PURE__*/ transformOrFail(String$.annotations({
    description: "a string that will be parsed into a bigint"
}), BigIntFromSelf, {
    strict: true,
    decode: (s, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromOption(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigInt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromString(s), ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, s)),
    encode: (n)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(String(n))
}).annotations({
    identifier: "bigint"
}) {
}
;
const PositiveBigIntFromSelf = /*#__PURE__*/ BigIntFromSelf.pipe(/*#__PURE__*/ positiveBigInt({
    identifier: "PositiveBigintFromSelf",
    title: "PositiveBigintFromSelf"
}));
const PositiveBigInt = /*#__PURE__*/ BigInt$.pipe(/*#__PURE__*/ positiveBigInt({
    identifier: "PositiveBigint",
    title: "PositiveBigint"
}));
const NegativeBigIntFromSelf = /*#__PURE__*/ BigIntFromSelf.pipe(/*#__PURE__*/ negativeBigInt({
    identifier: "NegativeBigintFromSelf",
    title: "NegativeBigintFromSelf"
}));
const NegativeBigInt = /*#__PURE__*/ BigInt$.pipe(/*#__PURE__*/ negativeBigInt({
    identifier: "NegativeBigint",
    title: "NegativeBigint"
}));
const NonPositiveBigIntFromSelf = /*#__PURE__*/ BigIntFromSelf.pipe(/*#__PURE__*/ nonPositiveBigInt({
    identifier: "NonPositiveBigintFromSelf",
    title: "NonPositiveBigintFromSelf"
}));
const NonPositiveBigInt = /*#__PURE__*/ BigInt$.pipe(/*#__PURE__*/ nonPositiveBigInt({
    identifier: "NonPositiveBigint",
    title: "NonPositiveBigint"
}));
const NonNegativeBigIntFromSelf = /*#__PURE__*/ BigIntFromSelf.pipe(/*#__PURE__*/ nonNegativeBigInt({
    identifier: "NonNegativeBigintFromSelf",
    title: "NonNegativeBigintFromSelf"
}));
const NonNegativeBigInt = /*#__PURE__*/ BigInt$.pipe(/*#__PURE__*/ nonNegativeBigInt({
    identifier: "NonNegativeBigint",
    title: "NonNegativeBigint"
}));
class BigIntFromNumber extends /*#__PURE__*/ transformOrFail(Number$.annotations({
    description: "a number that will be parsed into a bigint"
}), BigIntFromSelf, {
    strict: true,
    decode: (n, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromOption(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigInt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromNumber(n), ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, n)),
    encode: (b, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromOption(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigInt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toNumber(b), ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, b))
}).annotations({
    identifier: "BigintFromNumber"
}) {
}
const redactedArbitrary = (value)=>(fc)=>value(fc).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Redacted$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make);
const toComposite = (eff, onSuccess, ast, actual)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mapBoth(eff, {
        onFailure: (e)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Composite(ast, actual, e),
        onSuccess
    });
const redactedParse = (decodeUnknown)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Redacted$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isRedacted(u) ? toComposite(decodeUnknown(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Redacted$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.value(u), options), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Redacted$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make, ast, u) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const RedactedFromSelf = (value)=>declare([
        value
    ], {
        decode: (value)=>redactedParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(value)),
        encode: (value)=>redactedParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(value))
    }, {
        description: "Redacted(<redacted>)",
        pretty: ()=>()=>"Redacted(<redacted>)",
        arbitrary: redactedArbitrary,
        equivalence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Redacted$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getEquivalence
    });
const Redacted = (value)=>{
    return transform(value, RedactedFromSelf(typeSchema(value)), {
        strict: true,
        decode: (value)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Redacted$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make(value),
        encode: (value)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Redacted$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.value(value)
    });
};
class DurationFromSelf extends /*#__PURE__*/ declare(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDuration, {
    identifier: "DurationFromSelf",
    pretty: ()=>String,
    arbitrary: ()=>(fc)=>fc.oneof(fc.constant(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.infinity), fc.bigUint().map((_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.nanos(_)), fc.bigUint().map((_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.micros(_)), fc.maxSafeNat().map((_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.millis(_)), fc.maxSafeNat().map((_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.seconds(_)), fc.maxSafeNat().map((_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.minutes(_)), fc.maxSafeNat().map((_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.hours(_)), fc.maxSafeNat().map((_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.days(_)), fc.maxSafeNat().map((_)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.weeks(_))),
    equivalence: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Equivalence
}) {
}
class DurationFromNanos extends /*#__PURE__*/ transformOrFail(BigIntFromSelf.annotations({
    description: "a bigint that will be parsed into a Duration"
}), DurationFromSelf, {
    strict: true,
    decode: (nanos)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.nanos(nanos)),
    encode: (duration, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toNanos(duration), {
            onNone: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, duration)),
            onSome: (val)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(val)
        })
}).annotations({
    identifier: "DurationFromNanos"
}) {
}
class DurationFromMillis extends /*#__PURE__*/ transform(Number$.annotations({
    description: "a number that will be parsed into a Duration"
}), DurationFromSelf, {
    strict: true,
    decode: (ms)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.millis(ms),
    encode: (n)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toMillis(n)
}).annotations({
    identifier: "DurationFromMillis"
}) {
}
const hrTime = /*#__PURE__*/ Tuple(/*#__PURE__*/ NonNegative.pipe(/*#__PURE__*/ finite({
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TitleAnnotationId]: "seconds",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.DescriptionAnnotationId]: "seconds"
})), /*#__PURE__*/ NonNegative.pipe(/*#__PURE__*/ finite({
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TitleAnnotationId]: "nanos",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.DescriptionAnnotationId]: "nanos"
})));
class Duration extends /*#__PURE__*/ transform(hrTime.annotations({
    description: "a tuple of seconds and nanos that will be parsed into a Duration"
}), DurationFromSelf, {
    strict: true,
    decode: ([seconds, nanos])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.nanos(BigInt(seconds) * BigInt(1e9) + BigInt(nanos)),
    encode: (duration)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toHrTime(duration)
}).annotations({
    identifier: "Duration"
}) {
}
const clampDuration = (minimum, maximum)=>(self)=>transform(self, self.pipe(typeSchema, betweenDuration(minimum, maximum)), {
            strict: false,
            decode: (self)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.clamp(self, {
                    minimum,
                    maximum
                }),
            encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
        });
const LessThanDurationSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/LessThanDuration");
const lessThanDuration = (max, annotations)=>(self)=>self.pipe(filter((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.lessThan(a, max), {
            schemaId: LessThanDurationSchemaId,
            [LessThanDurationSchemaId]: {
                max
            },
            description: `a Duration less than ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(max)}`,
            ...annotations
        }));
const LessThanOrEqualToDurationSchemaId = /*#__PURE__*/ Symbol.for("effect/schema/LessThanOrEqualToDuration");
const lessThanOrEqualToDuration = (max, annotations)=>(self)=>self.pipe(filter((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.lessThanOrEqualTo(a, max), {
            schemaId: LessThanDurationSchemaId,
            [LessThanDurationSchemaId]: {
                max
            },
            description: `a Duration less than or equal to ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(max)}`,
            ...annotations
        }));
const GreaterThanDurationSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/GreaterThanDuration");
const greaterThanDuration = (min, annotations)=>(self)=>self.pipe(filter((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.greaterThan(a, min), {
            schemaId: GreaterThanDurationSchemaId,
            [GreaterThanDurationSchemaId]: {
                min
            },
            description: `a Duration greater than ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(min)}`,
            ...annotations
        }));
const GreaterThanOrEqualToDurationSchemaId = /*#__PURE__*/ Symbol.for("effect/schema/GreaterThanOrEqualToDuration");
const greaterThanOrEqualToDuration = (min, annotations)=>(self)=>self.pipe(filter((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.greaterThanOrEqualTo(a, min), {
            schemaId: GreaterThanOrEqualToDurationSchemaId,
            [GreaterThanOrEqualToDurationSchemaId]: {
                min
            },
            description: `a Duration greater than or equal to ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(min)}`,
            ...annotations
        }));
const BetweenDurationSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/BetweenDuration");
const betweenDuration = (minimum, maximum, annotations)=>(self)=>self.pipe(filter((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.between(a, {
                minimum,
                maximum
            }), {
            schemaId: BetweenDurationSchemaId,
            [BetweenDurationSchemaId]: {
                maximum,
                minimum
            },
            description: `a Duration between ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(minimum)} and ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Duration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decode(maximum)}`,
            ...annotations
        }));
const Uint8ArrayFromSelf = /*#__PURE__*/ declare(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isUint8Array, {
    identifier: "Uint8ArrayFromSelf",
    pretty: ()=>(u8arr)=>`new Uint8Array(${JSON.stringify(Array.from(u8arr))})`,
    arbitrary: ()=>(fc)=>fc.uint8Array(),
    equivalence: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getEquivalence(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.equals)
});
const Uint8Array$ = /*#__PURE__*/ transform(Array$(Number$.pipe(between(0, 255, {
    title: "8-bit unsigned integer",
    description: "a 8-bit unsigned integer"
}))).annotations({
    description: "an array of 8-bit unsigned integers that will be parsed into a Uint8Array"
}), Uint8ArrayFromSelf, {
    strict: true,
    decode: (numbers)=>Uint8Array.from(numbers),
    encode: (uint8Array)=>Array.from(uint8Array)
}).annotations({
    identifier: "Uint8Array"
});
;
const makeUint8ArrayTransformation = (id, decode, encode)=>transformOrFail(String$.annotations({
        description: "a string that will be parsed into a Uint8Array"
    }), Uint8ArrayFromSelf, {
        strict: true,
        decode: (s, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mapLeft(decode(s), (decodeException)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, s, decodeException.message)),
        encode: (u)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(encode(u))
    }).annotations({
        identifier: id
    });
const Uint8ArrayFromBase64 = /*#__PURE__*/ makeUint8ArrayTransformation("Uint8ArrayFromBase64", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeBase64, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeBase64);
const Uint8ArrayFromBase64Url = /*#__PURE__*/ makeUint8ArrayTransformation("Uint8ArrayFromBase64Url", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeBase64Url, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeBase64Url);
const Uint8ArrayFromHex = /*#__PURE__*/ makeUint8ArrayTransformation("Uint8ArrayFromHex", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeHex, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeHex);
const makeEncodingTransformation = (id, decode, encode)=>transformOrFail(String$.annotations({
        description: `A string that is interpreted as being ${id}-encoded and will be decoded into a UTF-8 string`
    }), String$, {
        strict: true,
        decode: (s, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mapLeft(decode(s), (decodeException)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, s, decodeException.message)),
        encode: (u)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(encode(u))
    }).annotations({
        identifier: `StringFrom${id}`
    });
const StringFromBase64 = /*#__PURE__*/ makeEncodingTransformation("Base64", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeBase64String, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeBase64);
const StringFromBase64Url = /*#__PURE__*/ makeEncodingTransformation("Base64Url", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeBase64UrlString, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeBase64Url);
const StringFromHex = /*#__PURE__*/ makeEncodingTransformation("Hex", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeHexString, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeHex);
const MinItemsSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.MinItemsSchemaId;
const minItems = (n, annotations)=>(self)=>{
        const minItems = Math.floor(n);
        if (minItems < 1) {
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getInvalidArgumentErrorMessage(`Expected an integer greater than or equal to 1, actual ${n}`));
        }
        return self.pipe(filter((a)=>a.length >= minItems, {
            schemaId: MinItemsSchemaId,
            description: `an array of at least ${minItems} items`,
            jsonSchema: {
                minItems
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.StableFilterAnnotationId]: true,
            ...annotations
        }));
    };
const MaxItemsSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.MaxItemsSchemaId;
const maxItems = (n, annotations)=>(self)=>self.pipe(filter((a)=>a.length <= n, {
            schemaId: MaxItemsSchemaId,
            description: `an array of at most ${n} items`,
            jsonSchema: {
                maxItems: n
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.StableFilterAnnotationId]: true,
            ...annotations
        }));
const ItemsCountSchemaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$filters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ItemsCountSchemaId;
const itemsCount = (n, annotations)=>(self)=>self.pipe(filter((a)=>a.length === n, {
            schemaId: ItemsCountSchemaId,
            description: `an array of exactly ${n} item(s)`,
            jsonSchema: {
                minItems: n,
                maxItems: n
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.StableFilterAnnotationId]: true,
            ...annotations
        }));
const getNumberIndexedAccess = (self)=>make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getNumberIndexedAccess(self.ast));
const head = (self)=>transform(self, OptionFromSelf(getNumberIndexedAccess(typeSchema(self))), {
        strict: true,
        decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.head,
        encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match({
            onNone: ()=>[],
            onSome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.of
        })
    });
const headOrElse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])((args)=>isSchema(args[0]), (self, fallback)=>transformOrFail(self, getNumberIndexedAccess(typeSchema(self)), {
        strict: true,
        decode: (as, _, ast)=>as.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(as[0]) : fallback ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(fallback()) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, as)),
        encode: (a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.of(a))
    }));
const ValidDateSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/ValidDate");
const validDate = (annotations)=>(self)=>self.pipe(filter((a)=>!Number.isNaN(a.getTime()), {
            schemaId: ValidDateSchemaId,
            description: "a valid Date",
            ...annotations
        }));
const LessThanDateSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/LessThanDate");
const lessThanDate = (max, annotations)=>(self)=>self.pipe(filter((a)=>a < max, {
            schemaId: LessThanDateSchemaId,
            [LessThanDateSchemaId]: {
                max
            },
            description: `a date before ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatDate(max)}`,
            ...annotations
        }));
const LessThanOrEqualToDateSchemaId = /*#__PURE__*/ Symbol.for("effect/schema/LessThanOrEqualToDate");
const lessThanOrEqualToDate = (max, annotations)=>(self)=>self.pipe(filter((a)=>a <= max, {
            schemaId: LessThanDateSchemaId,
            [LessThanDateSchemaId]: {
                max
            },
            description: `a date before or equal to ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatDate(max)}`,
            ...annotations
        }));
const GreaterThanDateSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/GreaterThanDate");
const greaterThanDate = (min, annotations)=>(self)=>self.pipe(filter((a)=>a > min, {
            schemaId: GreaterThanDateSchemaId,
            [GreaterThanDateSchemaId]: {
                min
            },
            description: `a date after ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatDate(min)}`,
            ...annotations
        }));
const GreaterThanOrEqualToDateSchemaId = /*#__PURE__*/ Symbol.for("effect/schema/GreaterThanOrEqualToDate");
const greaterThanOrEqualToDate = (min, annotations)=>(self)=>self.pipe(filter((a)=>a >= min, {
            schemaId: GreaterThanOrEqualToDateSchemaId,
            [GreaterThanOrEqualToDateSchemaId]: {
                min
            },
            description: `a date after or equal to ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatDate(min)}`,
            ...annotations
        }));
const BetweenDateSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/BetweenDate");
const betweenDate = (minimum, maximum, annotations)=>(self)=>self.pipe(filter((a)=>a <= maximum && a >= minimum, {
            schemaId: BetweenDateSchemaId,
            [BetweenDateSchemaId]: {
                maximum,
                minimum
            },
            description: `a date between ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatDate(minimum)} and ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatDate(maximum)}`,
            ...annotations
        }));
class DateFromSelf extends /*#__PURE__*/ declare(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDate, {
    identifier: "DateFromSelf",
    description: "a potentially invalid Date instance",
    pretty: ()=>(date)=>`new Date(${JSON.stringify(date)})`,
    arbitrary: ()=>(fc)=>fc.date({
                noInvalidDate: false
            }),
    equivalence: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Date
}) {
}
class ValidDateFromSelf extends /*#__PURE__*/ DateFromSelf.pipe(/*#__PURE__*/ validDate({
    identifier: "ValidDateFromSelf",
    description: "a valid Date instance"
})) {
}
class DateFromString extends /*#__PURE__*/ transform(String$.annotations({
    description: "a string that will be parsed into a Date"
}), DateFromSelf, {
    strict: true,
    decode: (s)=>new Date(s),
    encode: (d)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatDate(d)
}).annotations({
    identifier: "DateFromString"
}) {
}
/** @ignore */ class Date$ extends /*#__PURE__*/ DateFromString.pipe(/*#__PURE__*/ validDate({
    identifier: "Date"
})) {
}
;
class DateFromNumber extends /*#__PURE__*/ transform(Number$.annotations({
    description: "a number that will be parsed into a Date"
}), DateFromSelf, {
    strict: true,
    decode: (n)=>new Date(n),
    encode: (d)=>d.getTime()
}).annotations({
    identifier: "DateFromNumber"
}) {
}
class DateTimeUtcFromSelf extends /*#__PURE__*/ declare((u)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDateTime(u) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isUtc(u), {
    identifier: "DateTimeUtcFromSelf",
    description: "a DateTime.Utc instance",
    pretty: ()=>(dateTime)=>dateTime.toString(),
    arbitrary: ()=>(fc)=>fc.date().map((date)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.unsafeFromDate(date)),
    equivalence: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Equivalence
}) {
}
const decodeDateTime = (input, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.try({
        try: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.unsafeMake(input),
        catch: ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, input)
    });
class DateTimeUtcFromNumber extends /*#__PURE__*/ transformOrFail(Number$.annotations({
    description: "a number that will be parsed into a DateTime.Utc"
}), DateTimeUtcFromSelf, {
    strict: true,
    decode: decodeDateTime,
    encode: (dt)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toEpochMillis(dt))
}).annotations({
    identifier: "DateTimeUtcFromNumber"
}) {
}
class DateTimeUtc extends /*#__PURE__*/ transformOrFail(String$.annotations({
    description: "a string that will be parsed into a DateTime.Utc"
}), DateTimeUtcFromSelf, {
    strict: true,
    decode: decodeDateTime,
    encode: (dt)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatIso(dt))
}).annotations({
    identifier: "DateTimeUtc"
}) {
}
const timeZoneOffsetArbitrary = ()=>(fc)=>fc.integer({
            min: -12 * 60 * 60 * 1000,
            max: 12 * 60 * 60 * 1000
        }).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zoneMakeOffset);
class TimeZoneOffsetFromSelf extends /*#__PURE__*/ declare(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isTimeZoneOffset, {
    identifier: "TimeZoneOffsetFromSelf",
    description: "a TimeZone.Offset instance",
    pretty: ()=>(zone)=>zone.toString(),
    arbitrary: timeZoneOffsetArbitrary
}) {
}
class TimeZoneOffset extends /*#__PURE__*/ transform(Number$.annotations({
    description: "a number that will be parsed into a TimeZone.Offset"
}), TimeZoneOffsetFromSelf, {
    strict: true,
    decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zoneMakeOffset,
    encode: (tz)=>tz.offset
}).annotations({
    identifier: "TimeZoneOffset"
}) {
}
const timeZoneNamedArbitrary = ()=>(fc)=>fc.constantFrom(...Intl.supportedValuesOf("timeZone")).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zoneUnsafeMakeNamed);
class TimeZoneNamedFromSelf extends /*#__PURE__*/ declare(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isTimeZoneNamed, {
    identifier: "TimeZoneNamedFromSelf",
    description: "a TimeZone.Named instance",
    pretty: ()=>(zone)=>zone.toString(),
    arbitrary: timeZoneNamedArbitrary
}) {
}
class TimeZoneNamed extends /*#__PURE__*/ transformOrFail(String$.annotations({
    description: "a string that will be parsed into a TimeZone.Named"
}), TimeZoneNamedFromSelf, {
    strict: true,
    decode: (s, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.try({
            try: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zoneUnsafeMakeNamed(s),
            catch: ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, s)
        }),
    encode: (tz)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(tz.id)
}).annotations({
    identifier: "TimeZoneNamed"
}) {
}
const TimeZoneFromSelf = /*#__PURE__*/ Union(TimeZoneOffsetFromSelf, TimeZoneNamedFromSelf);
class TimeZone extends /*#__PURE__*/ transformOrFail(String$.annotations({
    description: "a string that will be parsed into a TimeZone"
}), TimeZoneFromSelf, {
    strict: true,
    decode: (s, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zoneFromString(s), {
            onNone: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, s)),
            onSome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed
        }),
    encode: (tz)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.zoneToString(tz))
}).annotations({
    identifier: "TimeZone"
}) {
}
const timeZoneArbitrary = (fc)=>fc.oneof(timeZoneOffsetArbitrary()(fc), timeZoneNamedArbitrary()(fc));
class DateTimeZonedFromSelf extends /*#__PURE__*/ declare((u)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isDateTime(u) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isZoned(u), {
    identifier: "DateTimeZonedFromSelf",
    description: "a DateTime.Zoned instance",
    pretty: ()=>(dateTime)=>dateTime.toString(),
    arbitrary: ()=>(fc)=>fc.date().chain((date)=>timeZoneArbitrary(fc).map((timeZone)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.unsafeMakeZoned(date, {
                        timeZone
                    }))),
    equivalence: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Equivalence
}) {
}
class DateTimeZoned extends /*#__PURE__*/ transformOrFail(String$.annotations({
    description: "a string that will be parsed into a DateTime.Zoned"
}), DateTimeZonedFromSelf, {
    strict: true,
    decode: (s, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.makeZonedFromString(s), {
            onNone: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, s)),
            onSome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed
        }),
    encode: (dt)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatIsoZoned(dt))
}).annotations({
    identifier: "DateTimeZoned"
}) {
}
const OptionNoneEncoded = /*#__PURE__*/ Struct({
    _tag: Literal("None")
}).annotations({
    description: "NoneEncoded"
});
const optionSomeEncoded = (value)=>Struct({
        _tag: Literal("Some"),
        value
    }).annotations({
        description: `SomeEncoded<${format(value)}>`
    });
const optionEncoded = (value)=>Union(OptionNoneEncoded, optionSomeEncoded(value)).annotations({
        description: `OptionEncoded<${format(value)}>`
    });
const optionDecode = (input)=>input._tag === "None" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(input.value);
const optionArbitrary = (value, ctx)=>(fc)=>fc.oneof(ctx, fc.record({
            _tag: fc.constant("None")
        }), fc.record({
            _tag: fc.constant("Some"),
            value: value(fc)
        })).map(optionDecode);
const optionPretty = (value)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match({
        onNone: ()=>"none()",
        onSome: (a)=>`some(${value(a)})`
    });
const optionParse = (decodeUnknown)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isOption(u) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNone(u) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none()) : toComposite(decodeUnknown(u.value, options), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some, ast, u) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const OptionFromSelf = (value)=>{
    return declare([
        value
    ], {
        decode: (value)=>optionParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(value)),
        encode: (value)=>optionParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(value))
    }, {
        description: `Option<${format(value)}>`,
        pretty: optionPretty,
        arbitrary: optionArbitrary,
        equivalence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getEquivalence
    });
};
const makeNoneEncoded = {
    _tag: "None"
};
const makeSomeEncoded = (value)=>({
        _tag: "Some",
        value
    });
const Option = (value)=>{
    const value_ = asSchema(value);
    return transform(optionEncoded(value_), OptionFromSelf(typeSchema(value_)), {
        strict: true,
        decode: optionDecode,
        encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match({
            onNone: ()=>makeNoneEncoded,
            onSome: makeSomeEncoded
        })
    });
};
const OptionFromNullOr = (value)=>{
    const value_ = asSchema(value);
    return transform(NullOr(value_), OptionFromSelf(typeSchema(value_)), {
        strict: true,
        decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromNullable,
        encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getOrNull
    });
};
const OptionFromNullishOr = (value, onNoneEncoding)=>{
    const value_ = asSchema(value);
    return transform(NullishOr(value_), OptionFromSelf(typeSchema(value_)), {
        strict: true,
        decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromNullable,
        encode: onNoneEncoding === null ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getOrNull : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getOrUndefined
    });
};
const OptionFromUndefinedOr = (value)=>{
    const value_ = asSchema(value);
    return transform(UndefinedOr(value_), OptionFromSelf(typeSchema(value_)), {
        strict: true,
        decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromNullable,
        encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getOrUndefined
    });
};
const OptionFromNonEmptyTrimmedString = /*#__PURE__*/ transform(String$, /*#__PURE__*/ OptionFromSelf(NonEmptyTrimmedString), {
    strict: true,
    decode: (s)=>{
        const out = s.trim();
        return out.length === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.some(out);
    },
    encode: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getOrElse(()=>"")
});
const rightEncoded = (right)=>Struct({
        _tag: Literal("Right"),
        right
    }).annotations({
        description: `RightEncoded<${format(right)}>`
    });
const leftEncoded = (left)=>Struct({
        _tag: Literal("Left"),
        left
    }).annotations({
        description: `LeftEncoded<${format(left)}>`
    });
const eitherEncoded = (right, left)=>Union(rightEncoded(right), leftEncoded(left)).annotations({
        description: `EitherEncoded<${format(left)}, ${format(right)}>`
    });
const eitherDecode = (input)=>input._tag === "Left" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.left(input.left) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.right(input.right);
const eitherArbitrary = (right, left)=>(fc)=>fc.oneof(fc.record({
            _tag: fc.constant("Left"),
            left: left(fc)
        }), fc.record({
            _tag: fc.constant("Right"),
            right: right(fc)
        })).map(eitherDecode);
const eitherPretty = (right, left)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match({
        onLeft: (e)=>`left(${left(e)})`,
        onRight: (a)=>`right(${right(a)})`
    });
const eitherParse = (parseRight, decodeUnknownLeft)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isEither(u) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match(u, {
            onLeft: (left)=>toComposite(decodeUnknownLeft(left, options), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.left, ast, u),
            onRight: (right)=>toComposite(parseRight(right, options), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.right, ast, u)
        }) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const EitherFromSelf = ({ left, right })=>{
    return declare([
        right,
        left
    ], {
        decode: (right, left)=>eitherParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(right), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(left)),
        encode: (right, left)=>eitherParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(right), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(left))
    }, {
        description: `Either<${format(right)}, ${format(left)}>`,
        pretty: eitherPretty,
        arbitrary: eitherArbitrary,
        equivalence: (right, left)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getEquivalence({
                left,
                right
            })
    });
};
const makeLeftEncoded = (left)=>({
        _tag: "Left",
        left
    });
const makeRightEncoded = (right)=>({
        _tag: "Right",
        right
    });
const Either = ({ left, right })=>{
    const right_ = asSchema(right);
    const left_ = asSchema(left);
    return transform(eitherEncoded(right_, left_), EitherFromSelf({
        left: typeSchema(left_),
        right: typeSchema(right_)
    }), {
        strict: true,
        decode: eitherDecode,
        encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match({
            onLeft: makeLeftEncoded,
            onRight: makeRightEncoded
        })
    });
};
const EitherFromUnion = ({ left, right })=>{
    const right_ = asSchema(right);
    const left_ = asSchema(left);
    const toright = typeSchema(right_);
    const toleft = typeSchema(left_);
    const fromRight = transform(right_, rightEncoded(toright), {
        strict: true,
        decode: makeRightEncoded,
        encode: (r)=>r.right
    });
    const fromLeft = transform(left_, leftEncoded(toleft), {
        strict: true,
        decode: makeLeftEncoded,
        encode: (l)=>l.left
    });
    return transform(Union(fromRight, fromLeft), EitherFromSelf({
        left: toleft,
        right: toright
    }), {
        strict: true,
        decode: (from)=>from._tag === "Left" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.left(from.left) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.right(from.right),
        encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match({
            onLeft: makeLeftEncoded,
            onRight: makeRightEncoded
        })
    });
};
const mapArbitrary = (key, value, ctx)=>{
    return (fc)=>{
        const items = fc.array(fc.tuple(key(fc), value(fc)));
        return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map((as)=>new Map(as));
    };
};
const readonlyMapPretty = (key, value)=>(map)=>`new Map([${Array.from(map.entries()).map(([k, v])=>`[${key(k)}, ${value(v)}]`).join(", ")}])`;
const readonlyMapEquivalence = (key, value)=>{
    const arrayEquivalence = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getEquivalence(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make(([ka, va], [kb, vb])=>key(ka, kb) && value(va, vb)));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make((a, b)=>arrayEquivalence(Array.from(a.entries()), Array.from(b.entries())));
};
const readonlyMapParse = (decodeUnknown)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isMap(u) ? toComposite(decodeUnknown(Array.from(u.entries()), options), (as)=>new Map(as), ast, u) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const mapFromSelf_ = (key, value, description)=>declare([
        key,
        value
    ], {
        decode: (Key, Value)=>readonlyMapParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(Array$(Tuple(Key, Value)))),
        encode: (Key, Value)=>readonlyMapParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(Array$(Tuple(Key, Value))))
    }, {
        description,
        pretty: readonlyMapPretty,
        arbitrary: mapArbitrary,
        equivalence: readonlyMapEquivalence
    });
const ReadonlyMapFromSelf = ({ key, value })=>mapFromSelf_(key, value, `ReadonlyMap<${format(key)}, ${format(value)}>`);
const MapFromSelf = ({ key, value })=>mapFromSelf_(key, value, `Map<${format(key)}, ${format(value)}>`);
const ReadonlyMap = ({ key, value })=>{
    const key_ = asSchema(key);
    const value_ = asSchema(value);
    return transform(Array$(Tuple(key_, value_)), ReadonlyMapFromSelf({
        key: typeSchema(key_),
        value: typeSchema(value_)
    }), {
        strict: true,
        decode: (as)=>new Map(as),
        encode: (map)=>Array.from(map.entries())
    });
};
const map = ({ key, value })=>{
    const key_ = asSchema(key);
    const value_ = asSchema(value);
    return transform(Array$(Tuple(key_, value_)), MapFromSelf({
        key: typeSchema(key_),
        value: typeSchema(value_)
    }), {
        strict: true,
        decode: (as)=>new Map(as),
        encode: (map)=>Array.from(map.entries())
    });
};
;
const ReadonlyMapFromRecord = ({ key, value })=>transform(Record({
        key: encodedBoundSchema(key),
        value
    }).annotations({
        description: "a record that will be parsed into a ReadonlyMap"
    }), ReadonlyMapFromSelf({
        key,
        value: typeSchema(value)
    }), {
        strict: true,
        decode: (record)=>new Map(Object.entries(record)),
        encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Record$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromEntries
    });
const MapFromRecord = ({ key, value })=>transform(Record({
        key: encodedBoundSchema(key),
        value
    }).annotations({
        description: "a record that will be parsed into a Map"
    }), MapFromSelf({
        key,
        value: typeSchema(value)
    }), {
        strict: true,
        decode: (record)=>new Map(Object.entries(record)),
        encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Record$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromEntries
    });
const setArbitrary = (item, ctx)=>(fc)=>{
        const items = fc.array(item(fc));
        return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map((as)=>new Set(as));
    };
const readonlySetPretty = (item)=>(set)=>`new Set([${Array.from(set.values()).map((a)=>item(a)).join(", ")}])`;
const readonlySetEquivalence = (item)=>{
    const arrayEquivalence = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getEquivalence(item);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make((a, b)=>arrayEquivalence(Array.from(a.values()), Array.from(b.values())));
};
const readonlySetParse = (decodeUnknown)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isSet(u) ? toComposite(decodeUnknown(Array.from(u.values()), options), (as)=>new Set(as), ast, u) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const setFromSelf_ = (value, description)=>declare([
        value
    ], {
        decode: (item)=>readonlySetParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(Array$(item))),
        encode: (item)=>readonlySetParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(Array$(item)))
    }, {
        description,
        pretty: readonlySetPretty,
        arbitrary: setArbitrary,
        equivalence: readonlySetEquivalence
    });
const ReadonlySetFromSelf = (value)=>setFromSelf_(value, `ReadonlySet<${format(value)}>`);
const SetFromSelf = (value)=>setFromSelf_(value, `Set<${format(value)}>`);
const ReadonlySet = (value)=>{
    const value_ = asSchema(value);
    return transform(Array$(value_), ReadonlySetFromSelf(typeSchema(value_)), {
        strict: true,
        decode: (as)=>new Set(as),
        encode: (set)=>Array.from(set)
    });
};
const set = (value)=>{
    const value_ = asSchema(value);
    return transform(Array$(value_), SetFromSelf(typeSchema(value_)), {
        strict: true,
        decode: (as)=>new Set(as),
        encode: (set)=>Array.from(set)
    });
};
;
const bigDecimalPretty = ()=>(val)=>`BigDecimal(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.format(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.normalize(val))})`;
const bigDecimalArbitrary = ()=>(fc)=>fc.tuple(fc.bigInt(), fc.integer()).map(([value, scale])=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make(value, scale));
class BigDecimalFromSelf extends /*#__PURE__*/ declare(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isBigDecimal, {
    identifier: "BigDecimalFromSelf",
    pretty: bigDecimalPretty,
    arbitrary: bigDecimalArbitrary,
    equivalence: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Equivalence
}) {
}
class BigDecimal extends /*#__PURE__*/ transformOrFail(String$.annotations({
    description: "a string that will be parsed into a BigDecimal"
}), BigDecimalFromSelf, {
    strict: true,
    decode: (num, _, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromString(num).pipe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match({
            onNone: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, num)),
            onSome: (val)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.normalize(val))
        })),
    encode: (val)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.format(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.normalize(val)))
}).annotations({
    identifier: "BigDecimal"
}) {
}
class BigDecimalFromNumber extends /*#__PURE__*/ transformOrFail(Number$.annotations({
    description: "a number that will be parsed into a BigDecimal"
}), BigDecimalFromSelf, {
    strict: true,
    decode: (num)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromNumber(num)),
    encode: (val)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.unsafeToNumber(val))
}).annotations({
    identifier: "BigDecimalFromNumber"
}) {
}
const GreaterThanBigDecimalSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/GreaterThanBigDecimal");
const greaterThanBigDecimal = (min, annotations)=>(self)=>self.pipe(filter((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.greaterThan(a, min), {
            schemaId: GreaterThanBigDecimalSchemaId,
            [GreaterThanBigDecimalSchemaId]: {
                min
            },
            description: `a BigDecimal greater than ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.format(min)}`,
            ...annotations
        }));
const GreaterThanOrEqualToBigDecimalSchemaId = /*#__PURE__*/ Symbol.for("effect/schema/GreaterThanOrEqualToBigDecimal");
const greaterThanOrEqualToBigDecimal = (min, annotations)=>(self)=>self.pipe(filter((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.greaterThanOrEqualTo(a, min), {
            schemaId: GreaterThanOrEqualToBigDecimalSchemaId,
            [GreaterThanOrEqualToBigDecimalSchemaId]: {
                min
            },
            description: `a BigDecimal greater than or equal to ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.format(min)}`,
            ...annotations
        }));
const LessThanBigDecimalSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/LessThanBigDecimal");
const lessThanBigDecimal = (max, annotations)=>(self)=>self.pipe(filter((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.lessThan(a, max), {
            schemaId: LessThanBigDecimalSchemaId,
            [LessThanBigDecimalSchemaId]: {
                max
            },
            description: `a BigDecimal less than ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.format(max)}`,
            ...annotations
        }));
const LessThanOrEqualToBigDecimalSchemaId = /*#__PURE__*/ Symbol.for("effect/schema/LessThanOrEqualToBigDecimal");
const lessThanOrEqualToBigDecimal = (max, annotations)=>(self)=>self.pipe(filter((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.lessThanOrEqualTo(a, max), {
            schemaId: LessThanOrEqualToBigDecimalSchemaId,
            [LessThanOrEqualToBigDecimalSchemaId]: {
                max
            },
            description: `a BigDecimal less than or equal to ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.format(max)}`,
            ...annotations
        }));
const PositiveBigDecimalSchemaId = /*#__PURE__*/ Symbol.for("effect/schema/PositiveBigDecimal");
const positiveBigDecimal = (annotations)=>(self)=>self.pipe(filter((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isPositive(a), {
            schemaId: PositiveBigDecimalSchemaId,
            description: `a positive BigDecimal`,
            ...annotations
        }));
const PositiveBigDecimalFromSelf = /*#__PURE__*/ BigDecimalFromSelf.pipe(/*#__PURE__*/ positiveBigDecimal({
    identifier: "PositiveBigDecimalFromSelf",
    title: "PositiveBigDecimalFromSelf"
}));
const NonNegativeBigDecimalSchemaId = /*#__PURE__*/ Symbol.for("effect/schema/NonNegativeBigDecimal");
const nonNegativeBigDecimal = (annotations)=>(self)=>self.pipe(filter((a)=>a.value >= 0n, {
            schemaId: NonNegativeBigDecimalSchemaId,
            description: `a non-negative BigDecimal`,
            ...annotations
        }));
const NonNegativeBigDecimalFromSelf = /*#__PURE__*/ BigDecimalFromSelf.pipe(/*#__PURE__*/ nonNegativeBigDecimal({
    identifier: "NonNegativeBigDecimalFromSelf",
    title: "NonNegativeBigDecimalFromSelf"
}));
const NegativeBigDecimalSchemaId = /*#__PURE__*/ Symbol.for("effect/schema/NegativeBigDecimal");
const negativeBigDecimal = (annotations)=>(self)=>self.pipe(filter((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNegative(a), {
            schemaId: NegativeBigDecimalSchemaId,
            description: `a negative BigDecimal`,
            ...annotations
        }));
const NegativeBigDecimalFromSelf = /*#__PURE__*/ BigDecimalFromSelf.pipe(/*#__PURE__*/ negativeBigDecimal({
    identifier: "NegativeBigDecimalFromSelf",
    title: "NegativeBigDecimalFromSelf"
}));
const NonPositiveBigDecimalSchemaId = /*#__PURE__*/ Symbol.for("effect/schema/NonPositiveBigDecimal");
const nonPositiveBigDecimal = (annotations)=>(self)=>self.pipe(filter((a)=>a.value <= 0n, {
            schemaId: NonPositiveBigDecimalSchemaId,
            description: `a non-positive BigDecimal`,
            ...annotations
        }));
const NonPositiveBigDecimalFromSelf = /*#__PURE__*/ BigDecimalFromSelf.pipe(/*#__PURE__*/ nonPositiveBigDecimal({
    identifier: "NonPositiveBigDecimalFromSelf",
    title: "NonPositiveBigDecimalFromSelf"
}));
const BetweenBigDecimalSchemaId = /*#__PURE__*/ Symbol.for("effect/SchemaId/BetweenBigDecimal");
const betweenBigDecimal = (minimum, maximum, annotations)=>(self)=>self.pipe(filter((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.between(a, {
                minimum,
                maximum
            }), {
            schemaId: BetweenBigDecimalSchemaId,
            [BetweenBigDecimalSchemaId]: {
                maximum,
                minimum
            },
            description: `a BigDecimal between ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.format(minimum)} and ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.format(maximum)}`,
            ...annotations
        }));
const clampBigDecimal = (minimum, maximum)=>(self)=>transform(self, self.pipe(typeSchema, betweenBigDecimal(minimum, maximum)), {
            strict: false,
            decode: (self)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$BigDecimal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.clamp(self, {
                    minimum,
                    maximum
                }),
            encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
        });
const chunkArbitrary = (item, ctx)=>(fc)=>{
        const items = fc.array(item(fc));
        return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable);
    };
const chunkPretty = (item)=>(c)=>`Chunk(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toReadonlyArray(c).map(item).join(", ")})`;
const chunkParse = (decodeUnknown)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isChunk(u) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isEmpty(u) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.empty()) : toComposite(decodeUnknown(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toReadonlyArray(u), options), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable, ast, u) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const ChunkFromSelf = (value)=>{
    return declare([
        value
    ], {
        decode: (item)=>chunkParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(Array$(item))),
        encode: (item)=>chunkParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(Array$(item)))
    }, {
        description: `Chunk<${format(value)}>`,
        pretty: chunkPretty,
        arbitrary: chunkArbitrary,
        equivalence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getEquivalence
    });
};
const Chunk = (value)=>{
    const value_ = asSchema(value);
    return transform(Array$(value_), ChunkFromSelf(typeSchema(value_)), {
        strict: true,
        decode: (as)=>as.length === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.empty() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable(as),
        encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toReadonlyArray
    });
};
const nonEmptyChunkArbitrary = (item)=>(fc)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$FastCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.array(item(fc), {
            minLength: 1
        }).map((as)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.unsafeFromNonEmptyArray(as));
const nonEmptyChunkPretty = (item)=>(c)=>`NonEmptyChunk(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toReadonlyArray(c).map(item).join(", ")})`;
const nonEmptyChunkParse = (decodeUnknown)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isChunk(u) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNonEmpty(u) ? toComposite(decodeUnknown(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toReadonlyArray(u), options), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.unsafeFromNonEmptyArray, ast, u) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const NonEmptyChunkFromSelf = (value)=>{
    return declare([
        value
    ], {
        decode: (item)=>nonEmptyChunkParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(NonEmptyArray(item))),
        encode: (item)=>nonEmptyChunkParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(NonEmptyArray(item)))
    }, {
        description: `NonEmptyChunk<${format(value)}>`,
        pretty: nonEmptyChunkPretty,
        arbitrary: nonEmptyChunkArbitrary,
        equivalence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getEquivalence
    });
};
const NonEmptyChunk = (value)=>{
    const value_ = asSchema(value);
    return transform(NonEmptyArray(value_), NonEmptyChunkFromSelf(typeSchema(value_)), {
        strict: true,
        decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.unsafeFromNonEmptyArray,
        encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Chunk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.toReadonlyArray
    });
};
const toData = (a)=>Array.isArray(a) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.array(a) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.struct(a);
const dataArbitrary = (item)=>(fc)=>item(fc).map(toData);
const dataPretty = (item)=>(d)=>`Data(${item(d)})`;
const dataParse = (decodeUnknown)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isEqual(u) ? toComposite(decodeUnknown(u, options), toData, ast, u) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const DataFromSelf = (item)=>declare([
        item
    ], {
        decode: (item)=>dataParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(item)),
        encode: (item)=>dataParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(item))
    }, {
        description: `Data<${format(item)}>`,
        pretty: dataPretty,
        arbitrary: dataArbitrary
    });
const Data = (item)=>transform(item, DataFromSelf(typeSchema(item)), {
        strict: false,
        decode: toData,
        encode: (a)=>Array.isArray(a) ? Array.from(a) : Object.assign({}, a)
    });
const isField = (u)=>isSchema(u) || isPropertySignature(u);
const isFields = (fields)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ownKeys(fields).every((key)=>isField(fields[key]));
const getFields = (hasFields)=>"fields" in hasFields ? hasFields.fields : getFields(hasFields[RefineSchemaId]);
const getSchemaFromFieldsOr = (fieldsOr)=>isFields(fieldsOr) ? Struct(fieldsOr) : isSchema(fieldsOr) ? fieldsOr : Struct(getFields(fieldsOr));
const getFieldsFromFieldsOr = (fieldsOr)=>isFields(fieldsOr) ? fieldsOr : getFields(fieldsOr);
const Class = (identifier)=>(fieldsOr, annotations)=>makeClass({
            kind: "Class",
            identifier,
            schema: getSchemaFromFieldsOr(fieldsOr),
            fields: getFieldsFromFieldsOr(fieldsOr),
            Base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Class,
            annotations
        });
const getClassTag = (tag)=>withConstructorDefault(propertySignature(Literal(tag)), ()=>tag);
const TaggedClass = (identifier)=>(tag, fieldsOr, annotations)=>{
        const fields = getFieldsFromFieldsOr(fieldsOr);
        const schema = getSchemaFromFieldsOr(fieldsOr);
        const newFields = {
            _tag: getClassTag(tag)
        };
        const taggedFields = extendFields(newFields, fields);
        return class TaggedClass extends makeClass({
            kind: "TaggedClass",
            identifier: identifier ?? tag,
            schema: extend(schema, Struct(newFields)),
            fields: taggedFields,
            Base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Class,
            annotations
        }) {
            static _tag = tag;
        };
    };
const TaggedError = (identifier)=>(tag, fieldsOr, annotations)=>{
        class Base extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Error {
        }
        ;
        Base.prototype.name = tag;
        const fields = getFieldsFromFieldsOr(fieldsOr);
        const schema = getSchemaFromFieldsOr(fieldsOr);
        const newFields = {
            _tag: getClassTag(tag)
        };
        const taggedFields = extendFields(newFields, fields);
        return class TaggedErrorClass extends makeClass({
            kind: "TaggedError",
            identifier: identifier ?? tag,
            schema: extend(schema, Struct(newFields)),
            fields: taggedFields,
            Base,
            annotations,
            disableToString: true
        }) {
            static _tag = tag;
            get message() {
                return `{ ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ownKeys(fields).map((p)=>`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatPropertyKey(p)}: ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatUnknown(this[p])}`).join(", ")} }`;
            }
        };
    };
const extendFields = (a, b)=>{
    const out = {
        ...a
    };
    for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ownKeys(b)){
        if (key in a) {
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getASTDuplicatePropertySignatureErrorMessage(key));
        }
        out[key] = b[key];
    }
    return out;
};
// does not overwrite existing title annotation
const orElseTitleAnnotation = (schema, title)=>{
    const annotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getTitleAnnotation(schema.ast);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNone(annotation)) {
        return schema.annotations({
            title
        });
    }
    return schema;
};
const getDisableValidationMakeOption = (options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isBoolean(options) ? options : options?.disableValidation ?? false;
const makeClass = ({ Base, annotations, disableToString, fields, identifier, kind, schema })=>{
    const classSymbol = Symbol.for(`effect/Schema/${kind}/${identifier}`);
    const validateSchema = orElseTitleAnnotation(schema, `${identifier} (Constructor)`);
    const encodedSide = orElseTitleAnnotation(schema, `${identifier} (Encoded side)`);
    const typeSide = orElseTitleAnnotation(typeSchema(schema), `${identifier} (Type side)`);
    const fallbackInstanceOf = (u)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.hasProperty(u, classSymbol) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.is(typeSide)(u);
    const klass = class extends Base {
        constructor(props = {}, options = false){
            props = {
                ...props
            };
            if (kind !== "Class") {
                delete props["_tag"];
            }
            props = lazilyMergeDefaults(fields, props);
            if (!getDisableValidationMakeOption(options)) {
                props = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.validateSync(validateSchema)(props);
            }
            super(props, true);
        }
        // ----------------
        // Schema interface
        // ----------------
        static [TypeId] = variance;
        static get ast() {
            const declaration = declare([
                typeSide
            ], {
                decode: ()=>(input, _, ast)=>input instanceof this || fallbackInstanceOf(input) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(input) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, input)),
                encode: ()=>(input, options)=>input instanceof this ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(input) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(typeSide)(input, options), (props)=>new this(props, true))
            }, {
                identifier,
                title: identifier,
                description: `an instance of ${identifier}`,
                pretty: (pretty)=>(self)=>`${identifier}(${pretty(self)})`,
                // @ts-expect-error
                arbitrary: (arb)=>(fc)=>arb(fc).map((props)=>new this(props)),
                equivalence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"],
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.SurrogateAnnotationId]: typeSide.ast,
                ...annotations
            });
            const transformation = transform(encodedSide, declaration, {
                strict: true,
                decode: (input)=>new this(input, true),
                encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
            }).annotations({
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.SurrogateAnnotationId]: schema.ast
            });
            return transformation.ast;
        }
        static pipe() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Pipeable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipeArguments"])(this, arguments);
        }
        static annotations(annotations) {
            return make(this.ast).annotations(annotations);
        }
        static toString() {
            return `(${String(encodedSide)} <-> ${identifier})`;
        }
        // ----------------
        // Class interface
        // ----------------
        static make(...args) {
            return new this(...args);
        }
        static fields = {
            ...fields
        };
        static identifier = identifier;
        static extend(identifier) {
            return (newFieldsOr, annotations)=>{
                const newFields = getFieldsFromFieldsOr(newFieldsOr);
                const newSchema = getSchemaFromFieldsOr(newFieldsOr);
                const extendedFields = extendFields(fields, newFields);
                return makeClass({
                    kind,
                    identifier,
                    schema: extend(schema, newSchema),
                    fields: extendedFields,
                    Base: this,
                    annotations
                });
            };
        }
        static transformOrFail(identifier) {
            return (newFields, options, annotations)=>{
                const transformedFields = extendFields(fields, newFields);
                return makeClass({
                    kind,
                    identifier,
                    schema: transformOrFail(schema, typeSchema(Struct(transformedFields)), options),
                    fields: transformedFields,
                    Base: this,
                    annotations
                });
            };
        }
        static transformOrFailFrom(identifier) {
            return (newFields, options, annotations)=>{
                const transformedFields = extendFields(fields, newFields);
                return makeClass({
                    kind,
                    identifier,
                    schema: transformOrFail(encodedSchema(schema), Struct(transformedFields), options),
                    fields: transformedFields,
                    Base: this,
                    annotations
                });
            };
        }
        // ----------------
        // other
        // ----------------
        get [classSymbol]() {
            return classSymbol;
        }
    };
    if (disableToString !== true) {
        Object.defineProperty(klass.prototype, "toString", {
            value () {
                return `${identifier}({ ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ownKeys(fields).map((p)=>`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatPropertyKey(p)}: ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.formatUnknown(this[p])}`).join(", ")} })`;
            },
            configurable: true
        });
    }
    return klass;
};
const FiberIdNoneEncoded = /*#__PURE__*/ Struct({
    _tag: Literal("None")
}).annotations({
    identifier: "FiberIdNoneEncoded"
});
const FiberIdRuntimeEncoded = /*#__PURE__*/ Struct({
    _tag: Literal("Runtime"),
    id: Int.annotations({
        title: "id",
        description: "id"
    }),
    startTimeMillis: Int.annotations({
        title: "startTimeMillis",
        description: "startTimeMillis"
    })
}).annotations({
    identifier: "FiberIdRuntimeEncoded"
});
const FiberIdCompositeEncoded = /*#__PURE__*/ Struct({
    _tag: Literal("Composite"),
    left: suspend(()=>FiberIdEncoded),
    right: suspend(()=>FiberIdEncoded)
}).annotations({
    identifier: "FiberIdCompositeEncoded"
});
const FiberIdEncoded = /*#__PURE__*/ Union(FiberIdNoneEncoded, FiberIdRuntimeEncoded, FiberIdCompositeEncoded).annotations({
    identifier: "FiberIdEncoded"
});
const fiberIdArbitrary = (fc)=>fc.letrec((tie)=>({
            None: fc.record({
                _tag: fc.constant("None")
            }),
            Runtime: fc.record({
                _tag: fc.constant("Runtime"),
                id: fc.integer(),
                startTimeMillis: fc.integer()
            }),
            Composite: fc.record({
                _tag: fc.constant("Composite"),
                left: tie("FiberId"),
                right: tie("FiberId")
            }),
            FiberId: fc.oneof(tie("None"), tie("Runtime"), tie("Composite"))
        })).FiberId.map(fiberIdDecode);
const fiberIdPretty = (fiberId)=>{
    switch(fiberId._tag){
        case "None":
            return "FiberId.none";
        case "Runtime":
            return `FiberId.runtime(${fiberId.id}, ${fiberId.startTimeMillis})`;
        case "Composite":
            return `FiberId.composite(${fiberIdPretty(fiberId.right)}, ${fiberIdPretty(fiberId.left)})`;
    }
};
class FiberIdFromSelf extends /*#__PURE__*/ declare(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$FiberId$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isFiberId, {
    identifier: "FiberIdFromSelf",
    pretty: ()=>fiberIdPretty,
    arbitrary: ()=>fiberIdArbitrary
}) {
}
const fiberIdDecode = (input)=>{
    switch(input._tag){
        case "None":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$FiberId$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.none;
        case "Runtime":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$FiberId$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.runtime(input.id, input.startTimeMillis);
        case "Composite":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$FiberId$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.composite(fiberIdDecode(input.left), fiberIdDecode(input.right));
    }
};
const fiberIdEncode = (input)=>{
    switch(input._tag){
        case "None":
            return {
                _tag: "None"
            };
        case "Runtime":
            return {
                _tag: "Runtime",
                id: input.id,
                startTimeMillis: input.startTimeMillis
            };
        case "Composite":
            return {
                _tag: "Composite",
                left: fiberIdEncode(input.left),
                right: fiberIdEncode(input.right)
            };
    }
};
class FiberId extends /*#__PURE__*/ transform(FiberIdEncoded, FiberIdFromSelf, {
    strict: true,
    decode: fiberIdDecode,
    encode: fiberIdEncode
}).annotations({
    identifier: "FiberId"
}) {
}
const causeDieEncoded = (defect)=>Struct({
        _tag: Literal("Die"),
        defect
    });
const CauseEmptyEncoded = /*#__PURE__*/ Struct({
    _tag: /*#__PURE__*/ Literal("Empty")
});
const causeFailEncoded = (error)=>Struct({
        _tag: Literal("Fail"),
        error
    });
const CauseInterruptEncoded = /*#__PURE__*/ Struct({
    _tag: /*#__PURE__*/ Literal("Interrupt"),
    fiberId: FiberIdEncoded
});
const causeParallelEncoded = (causeEncoded)=>Struct({
        _tag: Literal("Parallel"),
        left: causeEncoded,
        right: causeEncoded
    });
const causeSequentialEncoded = (causeEncoded)=>Struct({
        _tag: Literal("Sequential"),
        left: causeEncoded,
        right: causeEncoded
    });
const causeEncoded = (error, defect)=>{
    const recur = suspend(()=>out);
    const out = Union(CauseEmptyEncoded, causeFailEncoded(error), causeDieEncoded(defect), CauseInterruptEncoded, causeSequentialEncoded(recur), causeParallelEncoded(recur)).annotations({
        title: `CauseEncoded<${format(error)}>`
    });
    return out;
};
const causeArbitrary = (error, defect)=>(fc)=>fc.letrec((tie)=>({
                Empty: fc.record({
                    _tag: fc.constant("Empty")
                }),
                Fail: fc.record({
                    _tag: fc.constant("Fail"),
                    error: error(fc)
                }),
                Die: fc.record({
                    _tag: fc.constant("Die"),
                    defect: defect(fc)
                }),
                Interrupt: fc.record({
                    _tag: fc.constant("Interrupt"),
                    fiberId: fiberIdArbitrary(fc)
                }),
                Sequential: fc.record({
                    _tag: fc.constant("Sequential"),
                    left: tie("Cause"),
                    right: tie("Cause")
                }),
                Parallel: fc.record({
                    _tag: fc.constant("Parallel"),
                    left: tie("Cause"),
                    right: tie("Cause")
                }),
                Cause: fc.oneof(tie("Empty"), tie("Fail"), tie("Die"), tie("Interrupt"), tie("Sequential"), tie("Parallel"))
            })).Cause.map(causeDecode);
const causePretty = (error)=>(cause)=>{
        const f = (cause)=>{
            switch(cause._tag){
                case "Empty":
                    return "Cause.empty";
                case "Fail":
                    return `Cause.fail(${error(cause.error)})`;
                case "Die":
                    return `Cause.die(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cause$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.pretty(cause)})`;
                case "Interrupt":
                    return `Cause.interrupt(${fiberIdPretty(cause.fiberId)})`;
                case "Sequential":
                    return `Cause.sequential(${f(cause.left)}, ${f(cause.right)})`;
                case "Parallel":
                    return `Cause.parallel(${f(cause.left)}, ${f(cause.right)})`;
            }
        };
        return f(cause);
    };
const causeParse = (decodeUnknown)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cause$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isCause(u) ? toComposite(decodeUnknown(causeEncode(u), options), causeDecode, ast, u) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const CauseFromSelf = ({ defect, error })=>{
    return declare([
        error,
        defect
    ], {
        decode: (error, defect)=>causeParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(causeEncoded(error, defect))),
        encode: (error, defect)=>causeParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(causeEncoded(error, defect)))
    }, {
        title: `Cause<${error.ast}>`,
        pretty: causePretty,
        arbitrary: causeArbitrary
    });
};
function causeDecode(cause) {
    switch(cause._tag){
        case "Empty":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cause$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.empty;
        case "Fail":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cause$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(cause.error);
        case "Die":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cause$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.die(cause.defect);
        case "Interrupt":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cause$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.interrupt(fiberIdDecode(cause.fiberId));
        case "Sequential":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cause$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.sequential(causeDecode(cause.left), causeDecode(cause.right));
        case "Parallel":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Cause$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.parallel(causeDecode(cause.left), causeDecode(cause.right));
    }
}
function causeEncode(cause) {
    switch(cause._tag){
        case "Empty":
            return {
                _tag: "Empty"
            };
        case "Fail":
            return {
                _tag: "Fail",
                error: cause.error
            };
        case "Die":
            return {
                _tag: "Die",
                defect: cause.defect
            };
        case "Interrupt":
            return {
                _tag: "Interrupt",
                fiberId: cause.fiberId
            };
        case "Sequential":
            return {
                _tag: "Sequential",
                left: causeEncode(cause.left),
                right: causeEncode(cause.right)
            };
        case "Parallel":
            return {
                _tag: "Parallel",
                left: causeEncode(cause.left),
                right: causeEncode(cause.right)
            };
    }
}
const Cause = ({ defect, error })=>{
    const error_ = asSchema(error);
    const defect_ = asSchema(defect);
    return transform(causeEncoded(error_, defect_), CauseFromSelf({
        error: typeSchema(error_),
        defect: Unknown
    }), {
        strict: false,
        decode: causeDecode,
        encode: causeEncode
    });
};
const Defect = /*#__PURE__*/ transform(Unknown, Unknown, {
    strict: true,
    decode: (u)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isObject(u) && "message" in u && typeof u.message === "string") {
            const err = new Error(u.message, {
                cause: u
            });
            if ("name" in u && typeof u.name === "string") {
                err.name = u.name;
            }
            err.stack = "stack" in u && typeof u.stack === "string" ? u.stack : "";
            return err;
        }
        return String(u);
    },
    encode: (defect)=>{
        if (defect instanceof Error) {
            return {
                name: defect.name,
                message: defect.message
            };
        }
        return String(defect);
    }
}).annotations({
    identifier: "Defect"
});
const exitFailureEncoded = (error, defect)=>Struct({
        _tag: Literal("Failure"),
        cause: causeEncoded(error, defect)
    });
const exitSuccessEncoded = (value)=>Struct({
        _tag: Literal("Success"),
        value
    });
const exitEncoded = (value, error, defect)=>Union(exitFailureEncoded(error, defect), exitSuccessEncoded(value)).annotations({
        title: `ExitEncoded<${format(value)}, ${format(error)}, ${format(defect)}>`
    });
const exitDecode = (input)=>{
    switch(input._tag){
        case "Failure":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Exit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.failCause(causeDecode(input.cause));
        case "Success":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Exit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed(input.value);
    }
};
const exitArbitrary = (value, error, defect)=>(fc)=>fc.oneof(fc.record({
            _tag: fc.constant("Failure"),
            cause: causeArbitrary(error, defect)(fc)
        }), fc.record({
            _tag: fc.constant("Success"),
            value: value(fc)
        })).map(exitDecode);
const exitPretty = (value, error)=>(exit)=>exit._tag === "Failure" ? `Exit.failCause(${causePretty(error)(exit.cause)})` : `Exit.succeed(${value(exit.value)})`;
const exitParse = (decodeUnknownValue, decodeUnknownCause)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Exit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isExit(u) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Exit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.match(u, {
            onFailure: (cause)=>toComposite(decodeUnknownCause(cause, options), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Exit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.failCause, ast, u),
            onSuccess: (value)=>toComposite(decodeUnknownValue(value, options), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Exit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.succeed, ast, u)
        }) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const ExitFromSelf = ({ defect, failure, success })=>declare([
        success,
        failure,
        defect
    ], {
        decode: (success, failure, defect)=>exitParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(success), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(CauseFromSelf({
                error: failure,
                defect
            }))),
        encode: (success, failure, defect)=>exitParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(success), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(CauseFromSelf({
                error: failure,
                defect
            })))
    }, {
        title: `Exit<${success.ast}, ${failure.ast}>`,
        pretty: exitPretty,
        arbitrary: exitArbitrary
    });
const Exit = ({ defect, failure, success })=>{
    const success_ = asSchema(success);
    const failure_ = asSchema(failure);
    const defect_ = asSchema(defect);
    return transform(exitEncoded(success_, failure_, defect_), ExitFromSelf({
        failure: typeSchema(failure_),
        success: typeSchema(success_),
        defect: Unknown
    }), {
        strict: false,
        decode: exitDecode,
        encode: (exit)=>exit._tag === "Failure" ? {
                _tag: "Failure",
                cause: exit.cause
            } : {
                _tag: "Success",
                value: exit.value
            }
    });
};
const hashSetArbitrary = (item, ctx)=>(fc)=>{
        const items = fc.array(item(fc));
        return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$HashSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable);
    };
const hashSetPretty = (item)=>(set)=>`HashSet(${Array.from(set).map((a)=>item(a)).join(", ")})`;
const hashSetEquivalence = (item)=>{
    const arrayEquivalence = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getEquivalence(item);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make((a, b)=>arrayEquivalence(Array.from(a), Array.from(b)));
};
const hashSetParse = (decodeUnknown)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$HashSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isHashSet(u) ? toComposite(decodeUnknown(Array.from(u), options), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$HashSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable, ast, u) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const HashSetFromSelf = (value)=>{
    return declare([
        value
    ], {
        decode: (item)=>hashSetParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(Array$(item))),
        encode: (item)=>hashSetParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(Array$(item)))
    }, {
        description: `HashSet<${format(value)}>`,
        pretty: hashSetPretty,
        arbitrary: hashSetArbitrary,
        equivalence: hashSetEquivalence
    });
};
const HashSet = (value)=>{
    const value_ = asSchema(value);
    return transform(Array$(value_), HashSetFromSelf(typeSchema(value_)), {
        strict: true,
        decode: (as)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$HashSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable(as),
        encode: (set)=>Array.from(set)
    });
};
const hashMapArbitrary = (key, value, ctx)=>(fc)=>{
        const items = fc.array(fc.tuple(key(fc), value(fc)));
        return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$HashMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable);
    };
const hashMapPretty = (key, value)=>(map)=>`HashMap([${Array.from(map).map(([k, v])=>`[${key(k)}, ${value(v)}]`).join(", ")}])`;
const hashMapEquivalence = (key, value)=>{
    const arrayEquivalence = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getEquivalence(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make(([ka, va], [kb, vb])=>key(ka, kb) && value(va, vb)));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make((a, b)=>arrayEquivalence(Array.from(a), Array.from(b)));
};
const hashMapParse = (decodeUnknown)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$HashMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isHashMap(u) ? toComposite(decodeUnknown(Array.from(u), options), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$HashMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable, ast, u) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const HashMapFromSelf = ({ key, value })=>{
    return declare([
        key,
        value
    ], {
        decode: (key, value)=>hashMapParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(Array$(Tuple(key, value)))),
        encode: (key, value)=>hashMapParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(Array$(Tuple(key, value))))
    }, {
        description: `HashMap<${format(key)}, ${format(value)}>`,
        pretty: hashMapPretty,
        arbitrary: hashMapArbitrary,
        equivalence: hashMapEquivalence
    });
};
const HashMap = ({ key, value })=>{
    const key_ = asSchema(key);
    const value_ = asSchema(value);
    return transform(Array$(Tuple(key_, value_)), HashMapFromSelf({
        key: typeSchema(key_),
        value: typeSchema(value_)
    }), {
        strict: true,
        decode: (as)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$HashMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable(as),
        encode: (map)=>Array.from(map)
    });
};
const listArbitrary = (item, ctx)=>(fc)=>{
        const items = fc.array(item(fc));
        return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$List$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable);
    };
const listPretty = (item)=>(set)=>`List(${Array.from(set).map((a)=>item(a)).join(", ")})`;
const listEquivalence = (item)=>{
    const arrayEquivalence = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getEquivalence(item);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make((a, b)=>arrayEquivalence(Array.from(a), Array.from(b)));
};
const listParse = (decodeUnknown)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$List$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isList(u) ? toComposite(decodeUnknown(Array.from(u), options), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$List$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable, ast, u) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const ListFromSelf = (value)=>{
    return declare([
        value
    ], {
        decode: (item)=>listParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(Array$(item))),
        encode: (item)=>listParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(Array$(item)))
    }, {
        description: `List<${format(value)}>`,
        pretty: listPretty,
        arbitrary: listArbitrary,
        equivalence: listEquivalence
    });
};
const List = (value)=>{
    const value_ = asSchema(value);
    return transform(Array$(value_), ListFromSelf(typeSchema(value_)), {
        strict: true,
        decode: (as)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$List$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable(as),
        encode: (set)=>Array.from(set)
    });
};
const sortedSetArbitrary = (item, ord, ctx)=>(fc)=>{
        const items = fc.array(item(fc));
        return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map((as)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SortedSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable(as, ord));
    };
const sortedSetPretty = (item)=>(set)=>`new SortedSet([${Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SortedSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.values(set)).map((a)=>item(a)).join(", ")}])`;
const sortedSetParse = (decodeUnknown, ord)=>(u, options, ast)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SortedSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isSortedSet(u) ? toComposite(decodeUnknown(Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SortedSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.values(u)), options), (as)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SortedSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable(as, ord), ast, u) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fail(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Type(ast, u));
const SortedSetFromSelf = (value, ordA, ordI)=>{
    return declare([
        value
    ], {
        decode: (item)=>sortedSetParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodeUnknown(Array$(item)), ordA),
        encode: (item)=>sortedSetParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeUnknown(Array$(item)), ordI)
    }, {
        description: `SortedSet<${format(value)}>`,
        pretty: sortedSetPretty,
        arbitrary: (arb, ctx)=>sortedSetArbitrary(arb, ordA, ctx),
        equivalence: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SortedSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getEquivalence()
    });
};
const SortedSet = (value, ordA)=>{
    const value_ = asSchema(value);
    const to = typeSchema(value_);
    return transform(Array$(value_), SortedSetFromSelf(to, ordA, ordA), {
        strict: true,
        decode: (as)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SortedSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.fromIterable(as, ordA),
        encode: (set)=>Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SortedSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.values(set))
    });
};
class BooleanFromUnknown extends /*#__PURE__*/ transform(Unknown, Boolean$, {
    strict: true,
    decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isTruthy,
    encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"]
}).annotations({
    identifier: "BooleanFromUnknown"
}) {
}
const Config = (name, schema)=>{
    const decodeEither_ = decodeEither(schema);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.string(name).pipe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mapOrFail((a)=>decodeEither_(a).pipe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Either$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.mapLeft((error)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ConfigError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.InvalidData([], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.TreeFormatter.formatErrorSync(error))))));
};
const symbolSerializable = /*#__PURE__*/ Symbol.for("effect/Schema/Serializable/symbol");
const asSerializable = (serializable)=>serializable;
const serializableSchema = (self)=>self[symbolSerializable];
const serialize = (self)=>encodeUnknown(self[symbolSerializable])(self);
const deserialize = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, value)=>decodeUnknown(self[symbolSerializable])(value));
const symbolWithResult = /*#__PURE__*/ Symbol.for("effect/Schema/Serializable/symbolResult");
const asWithResult = (withExit)=>withExit;
const failureSchema = (self)=>self[symbolWithResult].failure;
const successSchema = (self)=>self[symbolWithResult].success;
const exitSchemaCache = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$GlobalValue$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalValue"])("effect/Schema/Serializable/exitSchemaCache", ()=>new WeakMap());
const exitSchema = (self)=>{
    const proto = Object.getPrototypeOf(self);
    if (!(symbolWithResult in proto)) {
        return Exit({
            failure: failureSchema(self),
            success: successSchema(self),
            defect: Defect
        });
    }
    let schema = exitSchemaCache.get(proto);
    if (schema === undefined) {
        schema = Exit({
            failure: failureSchema(self),
            success: successSchema(self),
            defect: Defect
        });
        exitSchemaCache.set(proto, schema);
    }
    return schema;
};
const serializeFailure = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, value)=>encode(self[symbolWithResult].failure)(value));
const deserializeFailure = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, value)=>decodeUnknown(self[symbolWithResult].failure)(value));
const serializeSuccess = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, value)=>encode(self[symbolWithResult].success)(value));
const deserializeSuccess = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, value)=>decodeUnknown(self[symbolWithResult].success)(value));
const serializeExit = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, value)=>encode(exitSchema(self))(value));
const deserializeExit = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dual"])(2, (self, value)=>decodeUnknown(exitSchema(self))(value));
const asSerializableWithResult = (procedure)=>procedure;
const TaggedRequest = (identifier)=>(tag, options, annotations)=>{
        const taggedFields = extendFields({
            _tag: getClassTag(tag)
        }, options.payload);
        return class TaggedRequestClass extends makeClass({
            kind: "TaggedRequest",
            identifier: identifier ?? tag,
            schema: Struct(taggedFields),
            fields: taggedFields,
            Base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.Class,
            annotations
        }) {
            static _tag = tag;
            static success = options.success;
            static failure = options.failure;
            get [symbolSerializable]() {
                return this.constructor;
            }
            get [symbolWithResult]() {
                return {
                    failure: options.failure,
                    success: options.success
                };
            }
        };
    };
const equivalence = (schema)=>go(schema.ast, []);
const getEquivalenceAnnotation = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getAnnotation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.EquivalenceAnnotationId);
const go = (ast, path)=>{
    const hook = getEquivalenceAnnotation(ast);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isSome(hook)) {
        switch(ast._tag){
            case "Declaration":
                return hook.value(...ast.typeParameters.map((tp)=>go(tp, path)));
            case "Refinement":
                return hook.value(go(ast.from, path));
            default:
                return hook.value();
        }
    }
    switch(ast._tag){
        case "NeverKeyword":
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getEquivalenceUnsupportedErrorMessage(ast, path));
        case "Transformation":
            return go(ast.to, path);
        case "Declaration":
        case "Literal":
        case "StringKeyword":
        case "TemplateLiteral":
        case "UniqueSymbol":
        case "SymbolKeyword":
        case "UnknownKeyword":
        case "AnyKeyword":
        case "NumberKeyword":
        case "BooleanKeyword":
        case "BigIntKeyword":
        case "UndefinedKeyword":
        case "VoidKeyword":
        case "Enums":
        case "ObjectKeyword":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.equals;
        case "Refinement":
            return go(ast.from, path);
        case "Suspend":
            {
                const get = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.memoizeThunk(()=>go(ast.f(), path));
                return (a, b)=>get()(a, b);
            }
        case "TupleType":
            {
                const elements = ast.elements.map((element, i)=>go(element.type, path.concat(i)));
                const rest = ast.rest.map((annotatedAST)=>go(annotatedAST.type, path));
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make((a, b)=>{
                    const len = a.length;
                    if (len !== b.length) {
                        return false;
                    }
                    // ---------------------------------------------
                    // handle elements
                    // ---------------------------------------------
                    let i = 0;
                    for(; i < Math.min(len, ast.elements.length); i++){
                        if (!elements[i](a[i], b[i])) {
                            return false;
                        }
                    }
                    // ---------------------------------------------
                    // handle rest element
                    // ---------------------------------------------
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isNonEmptyReadonlyArray(rest)) {
                        const [head, ...tail] = rest;
                        for(; i < len - tail.length; i++){
                            if (!head(a[i], b[i])) {
                                return false;
                            }
                        }
                        // ---------------------------------------------
                        // handle post rest elements
                        // ---------------------------------------------
                        for(let j = 0; j < tail.length; j++){
                            i += j;
                            if (!tail[j](a[i], b[i])) {
                                return false;
                            }
                        }
                    }
                    return true;
                });
            }
        case "TypeLiteral":
            {
                if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.equals;
                }
                const propertySignatures = ast.propertySignatures.map((ps)=>go(ps.type, path.concat(ps.name)));
                const indexSignatures = ast.indexSignatures.map((is)=>go(is.type, path));
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make((a, b)=>{
                    const aStringKeys = Object.keys(a);
                    const aSymbolKeys = Object.getOwnPropertySymbols(a);
                    // ---------------------------------------------
                    // handle property signatures
                    // ---------------------------------------------
                    for(let i = 0; i < propertySignatures.length; i++){
                        const ps = ast.propertySignatures[i];
                        const name = ps.name;
                        const aHas = Object.prototype.hasOwnProperty.call(a, name);
                        const bHas = Object.prototype.hasOwnProperty.call(b, name);
                        if (ps.isOptional) {
                            if (aHas !== bHas) {
                                return false;
                            }
                        }
                        if (aHas && bHas && !propertySignatures[i](a[name], b[name])) {
                            return false;
                        }
                    }
                    // ---------------------------------------------
                    // handle index signatures
                    // ---------------------------------------------
                    let bSymbolKeys;
                    let bStringKeys;
                    for(let i = 0; i < indexSignatures.length; i++){
                        const is = ast.indexSignatures[i];
                        const base = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getParameterBase(is.parameter);
                        const isSymbol = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$SchemaAST$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isSymbolKeyword(base);
                        if (isSymbol) {
                            bSymbolKeys = bSymbolKeys || Object.getOwnPropertySymbols(b);
                            if (aSymbolKeys.length !== bSymbolKeys.length) {
                                return false;
                            }
                        } else {
                            bStringKeys = bStringKeys || Object.keys(b);
                            if (aStringKeys.length !== bStringKeys.length) {
                                return false;
                            }
                        }
                        const aKeys = isSymbol ? aSymbolKeys : aStringKeys;
                        for(let j = 0; j < aKeys.length; j++){
                            const key = aKeys[j];
                            if (!Object.prototype.hasOwnProperty.call(b, key) || !indexSignatures[i](a[key], b[key])) {
                                return false;
                            }
                        }
                    }
                    return true;
                });
            }
        case "Union":
            {
                const searchTree = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.getSearchTree(ast.types, true);
                const ownKeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$internal$2f$schema$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.ownKeys(searchTree.keys);
                const len = ownKeys.length;
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Equivalence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.make((a, b)=>{
                    let candidates = [];
                    if (len > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$Predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.isRecordOrArray(a)) {
                        for(let i = 0; i < len; i++){
                            const name = ownKeys[i];
                            const buckets = searchTree.keys[name].buckets;
                            if (Object.prototype.hasOwnProperty.call(a, name)) {
                                const literal = String(a[name]);
                                if (Object.prototype.hasOwnProperty.call(buckets, literal)) {
                                    candidates = candidates.concat(buckets[literal]);
                                }
                            }
                        }
                    }
                    if (searchTree.otherwise.length > 0) {
                        candidates = candidates.concat(searchTree.otherwise);
                    }
                    const tuples = candidates.map((ast)=>[
                            go(ast, path),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$effect$40$3$2e$10$2e$3$2f$node_modules$2f$effect$2f$dist$2f$esm$2f$ParseResult$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.is({
                                ast
                            })
                        ]);
                    for(let i = 0; i < tuples.length; i++){
                        const [equivalence, is] = tuples[i];
                        if (is(a) && is(b)) {
                            if (equivalence(a, b)) {
                                return true;
                            }
                        }
                    }
                    return false;
                });
            }
    }
}; //# sourceMappingURL=Schema.js.map
}}),

};

//# sourceMappingURL=c53f3_effect_dist_esm_Schema_8d1ef0.js.map