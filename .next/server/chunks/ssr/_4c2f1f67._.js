module.exports = {

"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/* eslint-disable import/no-extraneous-dependencies */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _serveredge.registerServerReference;
    }
});
const _serveredge = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/trace/constants.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
/* eslint-disable no-shadow */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    AppRenderSpan: null,
    AppRouteRouteHandlersSpan: null,
    BaseServerSpan: null,
    LoadComponentsSpan: null,
    LogSpanAllowList: null,
    MiddlewareSpan: null,
    NextNodeServerSpan: null,
    NextServerSpan: null,
    NextVanillaSpanAllowlist: null,
    NodeSpan: null,
    RenderSpan: null,
    ResolveMetadataSpan: null,
    RouterSpan: null,
    StartServerSpan: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppRenderSpan: function() {
        return AppRenderSpan;
    },
    AppRouteRouteHandlersSpan: function() {
        return AppRouteRouteHandlersSpan;
    },
    BaseServerSpan: function() {
        return BaseServerSpan;
    },
    LoadComponentsSpan: function() {
        return LoadComponentsSpan;
    },
    LogSpanAllowList: function() {
        return LogSpanAllowList;
    },
    MiddlewareSpan: function() {
        return MiddlewareSpan;
    },
    NextNodeServerSpan: function() {
        return NextNodeServerSpan;
    },
    NextServerSpan: function() {
        return NextServerSpan;
    },
    NextVanillaSpanAllowlist: function() {
        return NextVanillaSpanAllowlist;
    },
    NodeSpan: function() {
        return NodeSpan;
    },
    RenderSpan: function() {
        return RenderSpan;
    },
    ResolveMetadataSpan: function() {
        return ResolveMetadataSpan;
    },
    RouterSpan: function() {
        return RouterSpan;
    },
    StartServerSpan: function() {
        return StartServerSpan;
    }
});
var BaseServerSpan = /*#__PURE__*/ function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
    return BaseServerSpan;
}(BaseServerSpan || {});
var LoadComponentsSpan = /*#__PURE__*/ function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
    return LoadComponentsSpan;
}(LoadComponentsSpan || {});
var NextServerSpan = /*#__PURE__*/ function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
    return NextServerSpan;
}(NextServerSpan || {});
var NextNodeServerSpan = /*#__PURE__*/ function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
    return NextNodeServerSpan;
}(NextNodeServerSpan || {});
var StartServerSpan = /*#__PURE__*/ function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
    return StartServerSpan;
}(StartServerSpan || {});
var RenderSpan = /*#__PURE__*/ function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
    return RenderSpan;
}(RenderSpan || {});
var AppRenderSpan = /*#__PURE__*/ function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
    return AppRenderSpan;
}(AppRenderSpan || {});
var RouterSpan = /*#__PURE__*/ function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
    return RouterSpan;
}(RouterSpan || {});
var NodeSpan = /*#__PURE__*/ function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
    return NodeSpan;
}(NodeSpan || {});
var AppRouteRouteHandlersSpan = /*#__PURE__*/ function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
    return AppRouteRouteHandlersSpan;
}(AppRouteRouteHandlersSpan || {});
var ResolveMetadataSpan = /*#__PURE__*/ function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
    return ResolveMetadataSpan;
}(ResolveMetadataSpan || {});
var MiddlewareSpan = /*#__PURE__*/ function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
    return MiddlewareSpan;
}(MiddlewareSpan || {});
const NextVanillaSpanAllowlist = [
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
];
const LogSpanAllowList = [
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
]; //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/is-thenable.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isThenable", {
    enumerable: true,
    get: function() {
        return isThenable;
    }
});
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/trace/tracer.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BubbledError: null,
    SpanKind: null,
    SpanStatusCode: null,
    getTracer: null,
    isBubbledError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BubbledError: function() {
        return BubbledError;
    },
    SpanKind: function() {
        return SpanKind;
    },
    SpanStatusCode: function() {
        return SpanStatusCode;
    },
    getTracer: function() {
        return getTracer;
    },
    isBubbledError: function() {
        return isBubbledError;
    }
});
const _constants = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/trace/constants.js [app-rsc] (ecmascript)");
const _isthenable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/is-thenable.js [app-rsc] (ecmascript)");
let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    try {
        api = __turbopack_context__.r("[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)");
    } catch (err) {
        api = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/@opentelemetry/api/index.js [app-rsc] (ecmascript)");
    }
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
class BubbledError extends Error {
    constructor(bubble, result){
        super(), this.bubble = bubble, this.result = result;
    }
}
function isBubbledError(error) {
    if (typeof error !== 'object' || error === null) return false;
    return error instanceof BubbledError;
}
const closeSpanWithError = (span, error)=>{
    if (isBubbledError(error) && error.bubble) {
        span.setAttribute('next.bubble', true);
    } else {
        if (error) {
            span.recordException(error);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey('next.rootSpanId');
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
const clientTraceDataSetter = {
    set (carrier, key, value) {
        carrier.push({
            key,
            value
        });
    }
};
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer('next.js', '0.0.1');
    }
    getContext() {
        return context;
    }
    getTracePropagationData() {
        const activeContext = context.active();
        const entries = [];
        propagation.inject(activeContext, entries, clientTraceDataSetter);
        return entries;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        var _trace_getSpanContext;
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === 'function' ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        if (!_constants.NextVanillaSpanAllowlist.includes(type) && process.env.NEXT_OTEL_VERBOSE !== '1' || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
            isRootSpan = true;
        } else if ((_trace_getSpanContext = trace.getSpanContext(spanContext)) == null ? void 0 : _trace_getSpanContext.isRemote) {
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            'next.span_name': spanName,
            'next.span_type': type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const startTime = 'performance' in globalThis && 'measure' in performance ? globalThis.performance.now() : undefined;
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime && process.env.NEXT_OTEL_PERFORMANCE_PREFIX && _constants.LogSpanAllowList.includes(type || '')) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split('.').pop() || '').replace(/[A-Z]/g, (match)=>'-' + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if ((0, _isthenable.isThenable)(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end();
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!_constants.NextVanillaSpanAllowlist.includes(name) && process.env.NEXT_OTEL_VERBOSE !== '1') {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === 'function' && typeof fn === 'function') {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === 'function') {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
    setRootSpanAttribute(key, value) {
        const spanId = context.active().getValue(rootSpanIdKey);
        const attributes = rootSpanAttributesStore.get(spanId);
        if (attributes) {
            attributes.set(key, value);
        }
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})(); //# sourceMappingURL=tracer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/lib/detached-promise.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * A `Promise.withResolvers` implementation that exposes the `resolve` and
 * `reject` functions on a `Promise`.
 *
 * @see https://tc39.es/proposal-promise-with-resolvers/
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DetachedPromise", {
    enumerable: true,
    get: function() {
        return DetachedPromise;
    }
});
class DetachedPromise {
    constructor(){
        let resolve;
        let reject;
        // Create the promise and assign the resolvers to the object.
        this.promise = new Promise((res, rej)=>{
            resolve = res;
            reject = rej;
        });
        // We know that resolvers is defined because the Promise constructor runs
        // synchronously.
        this.resolve = resolve;
        this.reject = reject;
    }
} //# sourceMappingURL=detached-promise.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/stream-utils/encodedTags.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ENCODED_TAGS", {
    enumerable: true,
    get: function() {
        return ENCODED_TAGS;
    }
});
const ENCODED_TAGS = {
    // opening tags do not have the closing `>` since they can contain other attributes such as `<body className=''>`
    OPENING: {
        // <html
        HTML: new Uint8Array([
            60,
            104,
            116,
            109,
            108
        ]),
        // <body
        BODY: new Uint8Array([
            60,
            98,
            111,
            100,
            121
        ])
    },
    CLOSED: {
        // </head>
        HEAD: new Uint8Array([
            60,
            47,
            104,
            101,
            97,
            100,
            62
        ]),
        // </body>
        BODY: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62
        ]),
        // </html>
        HTML: new Uint8Array([
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ]),
        // </body></html>
        BODY_AND_HTML: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62,
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ])
    }
}; //# sourceMappingURL=encodedTags.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/stream-utils/uint8array-helpers.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Find the starting index of Uint8Array `b` within Uint8Array `a`.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    indexOfUint8Array: null,
    isEquivalentUint8Arrays: null,
    removeFromUint8Array: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    indexOfUint8Array: function() {
        return indexOfUint8Array;
    },
    isEquivalentUint8Arrays: function() {
        return isEquivalentUint8Arrays;
    },
    removeFromUint8Array: function() {
        return removeFromUint8Array;
    }
});
function indexOfUint8Array(a, b) {
    if (b.length === 0) return 0;
    if (a.length === 0 || b.length > a.length) return -1;
    // start iterating through `a`
    for(let i = 0; i <= a.length - b.length; i++){
        let completeMatch = true;
        // from index `i`, iterate through `b` and check for mismatch
        for(let j = 0; j < b.length; j++){
            // if the values do not match, then this isn't a complete match, exit `b` iteration early and iterate to next index of `a`.
            if (a[i + j] !== b[j]) {
                completeMatch = false;
                break;
            }
        }
        if (completeMatch) {
            return i;
        }
    }
    return -1;
}
function isEquivalentUint8Arrays(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function removeFromUint8Array(a, b) {
    const tagIndex = indexOfUint8Array(a, b);
    if (tagIndex === 0) return a.subarray(b.length);
    if (tagIndex > -1) {
        const removed = new Uint8Array(a.length - b.length);
        removed.set(a.slice(0, tagIndex));
        removed.set(a.slice(tagIndex + b.length), tagIndex);
        return removed;
    } else {
        return a;
    }
} //# sourceMappingURL=uint8array-helpers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    chainStreams: null,
    continueDynamicHTMLResume: null,
    continueDynamicPrerender: null,
    continueFizzStream: null,
    continueStaticPrerender: null,
    createBufferedTransformStream: null,
    createDocumentClosingStream: null,
    createRootLayoutValidatorStream: null,
    renderToInitialFizzStream: null,
    streamFromBuffer: null,
    streamFromString: null,
    streamToBuffer: null,
    streamToString: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    chainStreams: function() {
        return chainStreams;
    },
    continueDynamicHTMLResume: function() {
        return continueDynamicHTMLResume;
    },
    continueDynamicPrerender: function() {
        return continueDynamicPrerender;
    },
    continueFizzStream: function() {
        return continueFizzStream;
    },
    continueStaticPrerender: function() {
        return continueStaticPrerender;
    },
    createBufferedTransformStream: function() {
        return createBufferedTransformStream;
    },
    createDocumentClosingStream: function() {
        return createDocumentClosingStream;
    },
    createRootLayoutValidatorStream: function() {
        return createRootLayoutValidatorStream;
    },
    renderToInitialFizzStream: function() {
        return renderToInitialFizzStream;
    },
    streamFromBuffer: function() {
        return streamFromBuffer;
    },
    streamFromString: function() {
        return streamFromString;
    },
    streamToBuffer: function() {
        return streamToBuffer;
    },
    streamToString: function() {
        return streamToString;
    }
});
const _tracer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
const _constants = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/trace/constants.js [app-rsc] (ecmascript)");
const _detachedpromise = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/lib/detached-promise.js [app-rsc] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)");
const _encodedTags = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/stream-utils/encodedTags.js [app-rsc] (ecmascript)");
const _uint8arrayhelpers = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/stream-utils/uint8array-helpers.js [app-rsc] (ecmascript)");
function voidCatch() {
// this catcher is designed to be used with pipeTo where we expect the underlying
// pipe implementation to forward errors but we don't want the pipeTo promise to reject
// and be unhandled
}
// We can share the same encoder instance everywhere
// Notably we cannot do the same for TextDecoder because it is stateful
// when handling streaming data
const encoder = new TextEncoder();
function chainStreams(...streams) {
    // We could encode this invariant in the arguments but current uses of this function pass
    // use spread so it would be missed by
    if (streams.length === 0) {
        throw Object.defineProperty(new Error('Invariant: chainStreams requires at least one stream'), "__NEXT_ERROR_CODE", {
            value: "E437",
            enumerable: false,
            configurable: true
        });
    }
    // If we only have 1 stream we fast path it by returning just this stream
    if (streams.length === 1) {
        return streams[0];
    }
    const { readable, writable } = new TransformStream();
    // We always initiate pipeTo immediately. We know we have at least 2 streams
    // so we need to avoid closing the writable when this one finishes.
    let promise = streams[0].pipeTo(writable, {
        preventClose: true
    });
    let i = 1;
    for(; i < streams.length - 1; i++){
        const nextStream = streams[i];
        promise = promise.then(()=>nextStream.pipeTo(writable, {
                preventClose: true
            }));
    }
    // We can omit the length check because we halted before the last stream and there
    // is at least two streams so the lastStream here will always be defined
    const lastStream = streams[i];
    promise = promise.then(()=>lastStream.pipeTo(writable));
    // Catch any errors from the streams and ignore them, they will be handled
    // by whatever is consuming the readable stream.
    promise.catch(voidCatch);
    return readable;
}
function streamFromString(str) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(encoder.encode(str));
            controller.close();
        }
    });
}
function streamFromBuffer(chunk) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(chunk);
            controller.close();
        }
    });
}
async function streamToBuffer(stream) {
    const reader = stream.getReader();
    const chunks = [];
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        chunks.push(value);
    }
    return Buffer.concat(chunks);
}
async function streamToString(stream, signal) {
    const decoder = new TextDecoder('utf-8', {
        fatal: true
    });
    let string = '';
    for await (const chunk of stream){
        if (signal == null ? void 0 : signal.aborted) {
            return string;
        }
        string += decoder.decode(chunk, {
            stream: true
        });
    }
    string += decoder.decode();
    return string;
}
function createBufferedTransformStream() {
    let bufferedChunks = [];
    let bufferByteLength = 0;
    let pending;
    const flush = (controller)=>{
        // If we already have a pending flush, then return early.
        if (pending) return;
        const detached = new _detachedpromise.DetachedPromise();
        pending = detached;
        (0, _scheduler.scheduleImmediate)(()=>{
            try {
                const chunk = new Uint8Array(bufferByteLength);
                let copiedBytes = 0;
                for(let i = 0; i < bufferedChunks.length; i++){
                    const bufferedChunk = bufferedChunks[i];
                    chunk.set(bufferedChunk, copiedBytes);
                    copiedBytes += bufferedChunk.byteLength;
                }
                // We just wrote all the buffered chunks so we need to reset the bufferedChunks array
                // and our bufferByteLength to prepare for the next round of buffered chunks
                bufferedChunks.length = 0;
                bufferByteLength = 0;
                controller.enqueue(chunk);
            } catch  {
            // If an error occurs while enqueuing it can't be due to this
            // transformers fault. It's likely due to the controller being
            // errored due to the stream being cancelled.
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            // Combine the previous buffer with the new chunk.
            bufferedChunks.push(chunk);
            bufferByteLength += chunk.byteLength;
            // Flush the buffer to the controller.
            flush(controller);
        },
        flush () {
            if (!pending) return;
            return pending.promise;
        }
    });
}
function renderToInitialFizzStream({ ReactDOMServer, element, streamOptions }) {
    return (0, _tracer.getTracer)().trace(_constants.AppRenderSpan.renderToReadableStream, async ()=>ReactDOMServer.renderToReadableStream(element, streamOptions));
}
function createHeadInsertionTransformStream(insert) {
    let inserted = false;
    // We need to track if this transform saw any bytes because if it didn't
    // we won't want to insert any server HTML at all
    let hasBytes = false;
    return new TransformStream({
        async transform (chunk, controller) {
            hasBytes = true;
            const insertion = await insert();
            if (inserted) {
                if (insertion) {
                    const encodedInsertion = encoder.encode(insertion);
                    controller.enqueue(encodedInsertion);
                }
                controller.enqueue(chunk);
            } else {
                // TODO (@Ethan-Arrowood): Replace the generic `indexOfUint8Array` method with something finely tuned for the subset of things actually being checked for.
                const index = (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.HEAD);
                // In fully static rendering or non PPR rendering cases:
                // `/head>` will always be found in the chunk in first chunk rendering.
                if (index !== -1) {
                    if (insertion) {
                        const encodedInsertion = encoder.encode(insertion);
                        // Get the total count of the bytes in the chunk and the insertion
                        // e.g.
                        // chunk = <head><meta charset="utf-8"></head>
                        // insertion = <script>...</script>
                        // output = <head><meta charset="utf-8"> [ <script>...</script> ] </head>
                        const insertedHeadContent = new Uint8Array(chunk.length + encodedInsertion.length);
                        // Append the first part of the chunk, before the head tag
                        insertedHeadContent.set(chunk.slice(0, index));
                        // Append the server inserted content
                        insertedHeadContent.set(encodedInsertion, index);
                        // Append the rest of the chunk
                        insertedHeadContent.set(chunk.slice(index), index + encodedInsertion.length);
                        controller.enqueue(insertedHeadContent);
                    } else {
                        controller.enqueue(chunk);
                    }
                    inserted = true;
                } else {
                    // This will happens in PPR rendering during next start, when the page is partially rendered.
                    // When the page resumes, the head tag will be found in the middle of the chunk.
                    // Where we just need to append the insertion and chunk to the current stream.
                    // e.g.
                    // PPR-static: <head>...</head><body> [ resume content ] </body>
                    // PPR-resume: [ insertion ] [ rest content ]
                    if (insertion) {
                        controller.enqueue(encoder.encode(insertion));
                    }
                    controller.enqueue(chunk);
                    inserted = true;
                }
            }
        },
        async flush (controller) {
            // Check before closing if there's anything remaining to insert.
            if (hasBytes) {
                const insertion = await insert();
                if (insertion) {
                    controller.enqueue(encoder.encode(insertion));
                }
            }
        }
    });
}
// Suffix after main body content - scripts before </body>,
// but wait for the major chunks to be enqueued.
function createDeferredSuffixStream(suffix) {
    let flushed = false;
    let pending;
    const flush = (controller)=>{
        const detached = new _detachedpromise.DetachedPromise();
        pending = detached;
        (0, _scheduler.scheduleImmediate)(()=>{
            try {
                controller.enqueue(encoder.encode(suffix));
            } catch  {
            // If an error occurs while enqueuing it can't be due to this
            // transformers fault. It's likely due to the controller being
            // errored due to the stream being cancelled.
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // If we've already flushed, we're done.
            if (flushed) return;
            // Schedule the flush to happen.
            flushed = true;
            flush(controller);
        },
        flush (controller) {
            if (pending) return pending.promise;
            if (flushed) return;
            // Flush now.
            controller.enqueue(encoder.encode(suffix));
        }
    });
}
// Merge two streams into one. Ensure the final transform stream is closed
// when both are finished.
function createMergedTransformStream(stream) {
    let pull = null;
    let donePulling = false;
    async function startPulling(controller) {
        if (pull) {
            return;
        }
        const reader = stream.getReader();
        // NOTE: streaming flush
        // We are buffering here for the inlined data stream because the
        // "shell" stream might be chunkenized again by the underlying stream
        // implementation, e.g. with a specific high-water mark. To ensure it's
        // the safe timing to pipe the data stream, this extra tick is
        // necessary.
        // We don't start reading until we've left the current Task to ensure
        // that it's inserted after flushing the shell. Note that this implementation
        // might get stale if impl details of Fizz change in the future.
        await (0, _scheduler.atLeastOneTask)();
        try {
            while(true){
                const { done, value } = await reader.read();
                if (done) {
                    donePulling = true;
                    return;
                }
                controller.enqueue(value);
            }
        } catch (err) {
            controller.error(err);
        }
    }
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // Start the streaming if it hasn't already been started yet.
            if (!pull) {
                pull = startPulling(controller);
            }
        },
        flush (controller) {
            if (donePulling) {
                return;
            }
            return pull || startPulling(controller);
        }
    });
}
const CLOSE_TAG = '</body></html>';
/**
 * This transform stream moves the suffix to the end of the stream, so results
 * like `</body></html><script>...</script>` will be transformed to
 * `<script>...</script></body></html>`.
 */ function createMoveSuffixStream() {
    let foundSuffix = false;
    return new TransformStream({
        transform (chunk, controller) {
            if (foundSuffix) {
                return controller.enqueue(chunk);
            }
            const index = (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.BODY_AND_HTML);
            if (index > -1) {
                foundSuffix = true;
                // If the whole chunk is the suffix, then don't write anything, it will
                // be written in the flush.
                if (chunk.length === _encodedTags.ENCODED_TAGS.CLOSED.BODY_AND_HTML.length) {
                    return;
                }
                // Write out the part before the suffix.
                const before = chunk.slice(0, index);
                controller.enqueue(before);
                // In the case where the suffix is in the middle of the chunk, we need
                // to split the chunk into two parts.
                if (chunk.length > _encodedTags.ENCODED_TAGS.CLOSED.BODY_AND_HTML.length + index) {
                    // Write out the part after the suffix.
                    const after = chunk.slice(index + _encodedTags.ENCODED_TAGS.CLOSED.BODY_AND_HTML.length);
                    controller.enqueue(after);
                }
            } else {
                controller.enqueue(chunk);
            }
        },
        flush (controller) {
            // Even if we didn't find the suffix, the HTML is not valid if we don't
            // add it, so insert it at the end.
            controller.enqueue(_encodedTags.ENCODED_TAGS.CLOSED.BODY_AND_HTML);
        }
    });
}
function createStripDocumentClosingTagsTransform() {
    return new TransformStream({
        transform (chunk, controller) {
            // We rely on the assumption that chunks will never break across a code unit.
            // This is reasonable because we currently concat all of React's output from a single
            // flush into one chunk before streaming it forward which means the chunk will represent
            // a single coherent utf-8 string. This is not safe to use if we change our streaming to no
            // longer do this large buffered chunk
            if ((0, _uint8arrayhelpers.isEquivalentUint8Arrays)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.BODY_AND_HTML) || (0, _uint8arrayhelpers.isEquivalentUint8Arrays)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.BODY) || (0, _uint8arrayhelpers.isEquivalentUint8Arrays)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.HTML)) {
                // the entire chunk is the closing tags; return without enqueueing anything.
                return;
            }
            // We assume these tags will go at together at the end of the document and that
            // they won't appear anywhere else in the document. This is not really a safe assumption
            // but until we revamp our streaming infra this is a performant way to string the tags
            chunk = (0, _uint8arrayhelpers.removeFromUint8Array)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.BODY);
            chunk = (0, _uint8arrayhelpers.removeFromUint8Array)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.HTML);
            controller.enqueue(chunk);
        }
    });
}
function createRootLayoutValidatorStream() {
    let foundHtml = false;
    let foundBody = false;
    return new TransformStream({
        async transform (chunk, controller) {
            // Peek into the streamed chunk to see if the tags are present.
            if (!foundHtml && (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedTags.ENCODED_TAGS.OPENING.HTML) > -1) {
                foundHtml = true;
            }
            if (!foundBody && (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedTags.ENCODED_TAGS.OPENING.BODY) > -1) {
                foundBody = true;
            }
            controller.enqueue(chunk);
        },
        flush (controller) {
            const missingTags = [];
            if (!foundHtml) missingTags.push('html');
            if (!foundBody) missingTags.push('body');
            if (!missingTags.length) return;
            controller.enqueue(encoder.encode(`<script>self.__next_root_layout_missing_tags=${JSON.stringify(missingTags)}</script>`));
        }
    });
}
function chainTransformers(readable, transformers) {
    let stream = readable;
    for (const transformer of transformers){
        if (!transformer) continue;
        stream = stream.pipeThrough(transformer);
    }
    return stream;
}
async function continueFizzStream(renderStream, { suffix, inlinedDataStream, isStaticGeneration, getServerInsertedHTML, getServerInsertedMetadata, validateRootLayout }) {
    // Suffix itself might contain close tags at the end, so we need to split it.
    const suffixUnclosed = suffix ? suffix.split(CLOSE_TAG, 1)[0] : null;
    // If we're generating static HTML and there's an `allReady` promise on the
    // stream, we need to wait for it to resolve before continuing.
    if (isStaticGeneration && 'allReady' in renderStream) {
        await renderStream.allReady;
    }
    return chainTransformers(renderStream, [
        // Buffer everything to avoid flushing too frequently
        createBufferedTransformStream(),
        // Insert generated metadata
        createHeadInsertionTransformStream(getServerInsertedMetadata),
        // Insert suffix content
        suffixUnclosed != null && suffixUnclosed.length > 0 ? createDeferredSuffixStream(suffixUnclosed) : null,
        // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
        inlinedDataStream ? createMergedTransformStream(inlinedDataStream) : null,
        // Validate the root layout for missing html or body tags
        validateRootLayout ? createRootLayoutValidatorStream() : null,
        // Close tags should always be deferred to the end
        createMoveSuffixStream(),
        // Special head insertions
        // TODO-APP: Insert server side html to end of head in app layout rendering, to avoid
        // hydration errors. Remove this once it's ready to be handled by react itself.
        createHeadInsertionTransformStream(getServerInsertedHTML)
    ]);
}
async function continueDynamicPrerender(prerenderStream, { getServerInsertedHTML, getServerInsertedMetadata }) {
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()).pipeThrough(createStripDocumentClosingTagsTransform()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Insert generated metadata
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedMetadata));
}
async function continueStaticPrerender(prerenderStream, { inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata }) {
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Insert generated metadata to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedMetadata)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createMergedTransformStream(inlinedDataStream)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
async function continueDynamicHTMLResume(renderStream, { inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata }) {
    return renderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Insert generated metadata to body
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedMetadata)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createMergedTransformStream(inlinedDataStream)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
function createDocumentClosingStream() {
    return streamFromString(CLOSE_TAG);
} //# sourceMappingURL=node-web-streams-helper.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super("Invariant: " + (message.endsWith('.') ? message : message + '.') + " This is a bug in Next.js.", options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/encryption-utils.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    arrayBufferToString: null,
    decrypt: null,
    encrypt: null,
    getActionEncryptionKey: null,
    getClientReferenceManifestForRsc: null,
    getServerModuleMap: null,
    setReferenceManifestsSingleton: null,
    stringToUint8Array: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    arrayBufferToString: function() {
        return arrayBufferToString;
    },
    decrypt: function() {
        return decrypt;
    },
    encrypt: function() {
        return encrypt;
    },
    getActionEncryptionKey: function() {
        return getActionEncryptionKey;
    },
    getClientReferenceManifestForRsc: function() {
        return getClientReferenceManifestForRsc;
    },
    getServerModuleMap: function() {
        return getServerModuleMap;
    },
    setReferenceManifestsSingleton: function() {
        return setReferenceManifestsSingleton;
    },
    stringToUint8Array: function() {
        return stringToUint8Array;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
let __next_loaded_action_key;
function arrayBufferToString(buffer) {
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    // @anonrig: V8 has a limit of 65535 arguments in a function.
    // For len < 65535, this is faster.
    // https://github.com/vercel/next.js/pull/56377#pullrequestreview-1656181623
    if (len < 65535) {
        return String.fromCharCode.apply(null, bytes);
    }
    let binary = '';
    for(let i = 0; i < len; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}
function stringToUint8Array(binary) {
    const len = binary.length;
    const arr = new Uint8Array(len);
    for(let i = 0; i < len; i++){
        arr[i] = binary.charCodeAt(i);
    }
    return arr;
}
function encrypt(key, iv, data) {
    return crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
function decrypt(key, iv, data) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
// This is a global singleton that is used to encode/decode the action bound args from
// the closure. This can't be using a AsyncLocalStorage as it might happen on the module
// level. Since the client reference manifest won't be mutated, let's use a global singleton
// to keep it.
const SERVER_ACTION_MANIFESTS_SINGLETON = Symbol.for('next.server.action-manifests');
function setReferenceManifestsSingleton({ page, clientReferenceManifest, serverActionsManifest, serverModuleMap }) {
    var _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON;
    // @ts-expect-error
    const clientReferenceManifestsPerPage = (_globalThis_SERVER_ACTION_MANIFESTS_SINGLETON = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON]) == null ? void 0 : _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON.clientReferenceManifestsPerPage;
    // @ts-expect-error
    globalThis[SERVER_ACTION_MANIFESTS_SINGLETON] = {
        clientReferenceManifestsPerPage: {
            ...clientReferenceManifestsPerPage,
            [(0, _apppaths.normalizeAppPath)(page)]: clientReferenceManifest
        },
        serverActionsManifest,
        serverModuleMap
    };
}
function getServerModuleMap() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    return serverActionsManifestSingleton.serverModuleMap;
}
function getClientReferenceManifestForRsc() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    const { clientReferenceManifestsPerPage } = serverActionsManifestSingleton;
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        // If there's no work store defined, we can assume that a client reference
        // manifest is needed during module evaluation, e.g. to create a server
        // action using a higher-order function. This might also use client
        // components which need to be serialized by Flight, and therefore client
        // references need to be resolvable. To make this work, we're returning a
        // merged manifest across all pages. This is fine as long as the module IDs
        // are not page specific, which they are not for Webpack. TODO: Fix this in
        // Turbopack.
        return mergeClientReferenceManifests(clientReferenceManifestsPerPage);
    }
    const clientReferenceManifest = clientReferenceManifestsPerPage[workStore.route];
    if (!clientReferenceManifest) {
        throw Object.defineProperty(new _invarianterror.InvariantError(`Missing Client Reference Manifest for ${workStore.route}.`), "__NEXT_ERROR_CODE", {
            value: "E570",
            enumerable: false,
            configurable: true
        });
    }
    return clientReferenceManifest;
}
async function getActionEncryptionKey() {
    if (__next_loaded_action_key) {
        return __next_loaded_action_key;
    }
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    const rawKey = process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY || serverActionsManifestSingleton.serverActionsManifest.encryptionKey;
    if (rawKey === undefined) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Missing encryption key for Server Actions'), "__NEXT_ERROR_CODE", {
            value: "E571",
            enumerable: false,
            configurable: true
        });
    }
    __next_loaded_action_key = await crypto.subtle.importKey('raw', stringToUint8Array(atob(rawKey)), 'AES-GCM', true, [
        'encrypt',
        'decrypt'
    ]);
    return __next_loaded_action_key;
}
function mergeClientReferenceManifests(clientReferenceManifestsPerPage) {
    const clientReferenceManifests = Object.values(clientReferenceManifestsPerPage);
    const mergedClientReferenceManifest = {
        clientModules: {},
        edgeRscModuleMapping: {},
        rscModuleMapping: {}
    };
    for (const clientReferenceManifest of clientReferenceManifests){
        mergedClientReferenceManifest.clientModules = {
            ...mergedClientReferenceManifest.clientModules,
            ...clientReferenceManifest.clientModules
        };
        mergedClientReferenceManifest.edgeRscModuleMapping = {
            ...mergedClientReferenceManifest.edgeRscModuleMapping,
            ...clientReferenceManifest.edgeRscModuleMapping
        };
        mergedClientReferenceManifest.rscModuleMapping = {
            ...mergedClientReferenceManifest.rscModuleMapping,
            ...clientReferenceManifest.rscModuleMapping
        };
    }
    return mergedClientReferenceManifest;
} //# sourceMappingURL=encryption-utils.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/* eslint-disable import/no-extraneous-dependencies */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    decryptActionBoundArgs: null,
    encryptActionBoundArgs: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    decryptActionBoundArgs: function() {
        return decryptActionBoundArgs;
    },
    encryptActionBoundArgs: function() {
        return encryptActionBoundArgs;
    }
});
__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
const _serveredge = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
const _clientedge = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react-server-dom-turbopack/client.edge.js [app-rsc] (ecmascript)");
const _nodewebstreamshelper = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)");
const _encryptionutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/encryption-utils.js [app-rsc] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const isEdgeRuntime = ("TURBOPACK compile-time value", "nodejs") === 'edge';
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
/**
 * Decrypt the serialized string with the action id as the salt.
 */ async function decodeActionBoundArg(actionId, arg) {
    const key = await (0, _encryptionutils.getActionEncryptionKey)();
    if (typeof key === 'undefined') {
        throw Object.defineProperty(new Error(`Missing encryption key for Server Action. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E65",
            enumerable: false,
            configurable: true
        });
    }
    // Get the iv (16 bytes) and the payload from the arg.
    const originalPayload = atob(arg);
    const ivValue = originalPayload.slice(0, 16);
    const payload = originalPayload.slice(16);
    const decrypted = textDecoder.decode(await (0, _encryptionutils.decrypt)(key, (0, _encryptionutils.stringToUint8Array)(ivValue), (0, _encryptionutils.stringToUint8Array)(payload)));
    if (!decrypted.startsWith(actionId)) {
        throw Object.defineProperty(new Error('Invalid Server Action payload: failed to decrypt.'), "__NEXT_ERROR_CODE", {
            value: "E191",
            enumerable: false,
            configurable: true
        });
    }
    return decrypted.slice(actionId.length);
}
/**
 * Encrypt the serialized string with the action id as the salt. Add a prefix to
 * later ensure that the payload is correctly decrypted, similar to a checksum.
 */ async function encodeActionBoundArg(actionId, arg) {
    const key = await (0, _encryptionutils.getActionEncryptionKey)();
    if (key === undefined) {
        throw Object.defineProperty(new Error(`Missing encryption key for Server Action. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E65",
            enumerable: false,
            configurable: true
        });
    }
    // Get 16 random bytes as iv.
    const randomBytes = new Uint8Array(16);
    _workunitasyncstorageexternal.workUnitAsyncStorage.exit(()=>crypto.getRandomValues(randomBytes));
    const ivValue = (0, _encryptionutils.arrayBufferToString)(randomBytes.buffer);
    const encrypted = await (0, _encryptionutils.encrypt)(key, randomBytes, textEncoder.encode(actionId + arg));
    return btoa(ivValue + (0, _encryptionutils.arrayBufferToString)(encrypted));
}
const encryptActionBoundArgs = _react.default.cache(async function encryptActionBoundArgs(actionId, ...args) {
    const { clientModules } = (0, _encryptionutils.getClientReferenceManifestForRsc)();
    // Create an error before any asynchronous calls, to capture the original
    // call stack in case we need it when the serialization errors.
    const error = new Error();
    Error.captureStackTrace(error, encryptActionBoundArgs);
    let didCatchError = false;
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const hangingInputAbortSignal = (workUnitStore == null ? void 0 : workUnitStore.type) === 'prerender' ? (0, _dynamicrendering.createHangingInputAbortSignal)(workUnitStore) : undefined;
    // Using Flight to serialize the args into a string.
    const serialized = await (0, _nodewebstreamshelper.streamToString)((0, _serveredge.renderToReadableStream)(args, clientModules, {
        signal: hangingInputAbortSignal,
        onError (err) {
            if (hangingInputAbortSignal == null ? void 0 : hangingInputAbortSignal.aborted) {
                return;
            }
            // We're only reporting one error at a time, starting with the first.
            if (didCatchError) {
                return;
            }
            didCatchError = true;
            // Use the original error message together with the previously created
            // stack, because err.stack is a useless Flight Server call stack.
            error.message = err instanceof Error ? err.message : String(err);
        }
    }), // included that are emitted after the signal was already aborted. This
    // ensures that we can encode hanging promises.
    hangingInputAbortSignal);
    if (didCatchError) {
        if ("TURBOPACK compile-time truthy", 1) {
            // Logging the error is needed for server functions that are passed to the
            // client where the decryption is not done during rendering. Console
            // replaying allows us to still show the error dev overlay in this case.
            console.error(error);
        }
        throw error;
    }
    if (!workUnitStore) {
        return encodeActionBoundArg(actionId, serialized);
    }
    const prerenderResumeDataCache = (0, _workunitasyncstorageexternal.getPrerenderResumeDataCache)(workUnitStore);
    const renderResumeDataCache = (0, _workunitasyncstorageexternal.getRenderResumeDataCache)(workUnitStore);
    const cacheKey = actionId + serialized;
    const cachedEncrypted = (prerenderResumeDataCache == null ? void 0 : prerenderResumeDataCache.encryptedBoundArgs.get(cacheKey)) ?? (renderResumeDataCache == null ? void 0 : renderResumeDataCache.encryptedBoundArgs.get(cacheKey));
    if (cachedEncrypted) {
        return cachedEncrypted;
    }
    const cacheSignal = workUnitStore.type === 'prerender' ? workUnitStore.cacheSignal : undefined;
    cacheSignal == null ? void 0 : cacheSignal.beginRead();
    const encrypted = await encodeActionBoundArg(actionId, serialized);
    cacheSignal == null ? void 0 : cacheSignal.endRead();
    prerenderResumeDataCache == null ? void 0 : prerenderResumeDataCache.encryptedBoundArgs.set(cacheKey, encrypted);
    return encrypted;
});
async function decryptActionBoundArgs(actionId, encryptedPromise) {
    const encrypted = await encryptedPromise;
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    let decrypted;
    if (workUnitStore) {
        const cacheSignal = workUnitStore.type === 'prerender' ? workUnitStore.cacheSignal : undefined;
        const prerenderResumeDataCache = (0, _workunitasyncstorageexternal.getPrerenderResumeDataCache)(workUnitStore);
        const renderResumeDataCache = (0, _workunitasyncstorageexternal.getRenderResumeDataCache)(workUnitStore);
        decrypted = (prerenderResumeDataCache == null ? void 0 : prerenderResumeDataCache.decryptedBoundArgs.get(encrypted)) ?? (renderResumeDataCache == null ? void 0 : renderResumeDataCache.decryptedBoundArgs.get(encrypted));
        if (!decrypted) {
            cacheSignal == null ? void 0 : cacheSignal.beginRead();
            decrypted = await decodeActionBoundArg(actionId, encrypted);
            cacheSignal == null ? void 0 : cacheSignal.endRead();
            prerenderResumeDataCache == null ? void 0 : prerenderResumeDataCache.decryptedBoundArgs.set(encrypted, decrypted);
        }
    } else {
        decrypted = await decodeActionBoundArg(actionId, encrypted);
    }
    const { edgeRscModuleMapping, rscModuleMapping } = (0, _encryptionutils.getClientReferenceManifestForRsc)();
    // Using Flight to deserialize the args from the string.
    const deserialized = await (0, _clientedge.createFromReadableStream)(new ReadableStream({
        start (controller) {
            controller.enqueue(textEncoder.encode(decrypted));
            if ((workUnitStore == null ? void 0 : workUnitStore.type) === 'prerender') {
                // Explicitly don't close the stream here (until prerendering is
                // complete) so that hanging promises are not rejected.
                if (workUnitStore.renderSignal.aborted) {
                    controller.close();
                } else {
                    workUnitStore.renderSignal.addEventListener('abort', ()=>controller.close(), {
                        once: true
                    });
                }
            } else {
                controller.close();
            }
        }
    }), {
        serverConsumerManifest: {
            // moduleLoading must be null because we don't want to trigger preloads of ClientReferences
            // to be added to the current execution. Instead, we'll wait for any ClientReference
            // to be emitted which themselves will handle the preloading.
            moduleLoading: null,
            moduleMap: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : rscModuleMapping,
            serverModuleMap: (0, _encryptionutils.getServerModuleMap)()
        }
    });
    return deserialized;
} //# sourceMappingURL=encryption.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f388c1e8a3691a6761356c44b604fb4bf4dcb9398":"invalidateCacheAction"} */ __turbopack_context__.s({
    "invalidateCacheAction": (()=>invalidateCacheAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function invalidateCacheAction() {
    void (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete(`__clerk_invalidate_cache_cookie_${Date.now()}`);
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ invalidateCacheAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(invalidateCacheAction, "7f388c1e8a3691a6761356c44b604fb4bf4dcb9398", null);
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/redirect.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)");
const actionAsyncStorage = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)").actionAsyncStorage : ("TURBOPACK unreachable", undefined);
function getRedirectError(url, type, statusCode) {
    if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    var _actionAsyncStorage_getStore;
    type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type) {
    if (type === void 0) type = _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// This has to be a shared module which is shared between client component error boundary and dynamic component
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/is-next-router-error.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/is-next-router-error.js [app-rsc] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unstable-rethrow.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-rsc] (ecmascript)").unstable_rethrow : ("TURBOPACK unreachable", undefined);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/** @internal */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _redirect = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/redirect.js [app-rsc] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden.js [app-rsc] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized.js [app-rsc] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unstable-rethrow.js [app-rsc] (ecmascript)");
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
 //# sourceMappingURL=navigation.react-server.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-3EORDU4Z.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/error.ts
__turbopack_context__.s({
    "ClerkAPIResponseError": (()=>ClerkAPIResponseError),
    "ClerkRuntimeError": (()=>ClerkRuntimeError),
    "ClerkWebAuthnError": (()=>ClerkWebAuthnError),
    "EmailLinkError": (()=>EmailLinkError),
    "EmailLinkErrorCode": (()=>EmailLinkErrorCode),
    "EmailLinkErrorCodeStatus": (()=>EmailLinkErrorCodeStatus),
    "buildErrorThrower": (()=>buildErrorThrower),
    "errorToJSON": (()=>errorToJSON),
    "is4xxError": (()=>is4xxError),
    "isCaptchaError": (()=>isCaptchaError),
    "isClerkAPIResponseError": (()=>isClerkAPIResponseError),
    "isClerkRuntimeError": (()=>isClerkRuntimeError),
    "isEmailLinkError": (()=>isEmailLinkError),
    "isKnownError": (()=>isKnownError),
    "isMetamaskError": (()=>isMetamaskError),
    "isNetworkError": (()=>isNetworkError),
    "isPasswordPwnedError": (()=>isPasswordPwnedError),
    "isReverificationCancelledError": (()=>isReverificationCancelledError),
    "isUnauthorizedError": (()=>isUnauthorizedError),
    "isUserLockedError": (()=>isUserLockedError),
    "parseError": (()=>parseError),
    "parseErrors": (()=>parseErrors)
});
function isUnauthorizedError(e) {
    const status = e?.status;
    const code = e?.errors?.[0]?.code;
    return code === "authentication_invalid" && status === 401;
}
function isCaptchaError(e) {
    return [
        "captcha_invalid",
        "captcha_not_enabled",
        "captcha_missing_token"
    ].includes(e.errors[0].code);
}
function is4xxError(e) {
    const status = e?.status;
    return !!status && status >= 400 && status < 500;
}
function isNetworkError(e) {
    const message = (`${e.message}${e.name}` || "").toLowerCase().replace(/\s+/g, "");
    return message.includes("networkerror");
}
function isKnownError(error) {
    return isClerkAPIResponseError(error) || isMetamaskError(error) || isClerkRuntimeError(error);
}
function isClerkAPIResponseError(err) {
    return "clerkError" in err;
}
function isClerkRuntimeError(err) {
    return "clerkRuntimeError" in err;
}
function isReverificationCancelledError(err) {
    return isClerkRuntimeError(err) && err.code === "reverification_cancelled";
}
function isMetamaskError(err) {
    return "code" in err && [
        4001,
        32602,
        32603
    ].includes(err.code) && "message" in err;
}
function isUserLockedError(err) {
    return isClerkAPIResponseError(err) && err.errors?.[0]?.code === "user_locked";
}
function isPasswordPwnedError(err) {
    return isClerkAPIResponseError(err) && err.errors?.[0]?.code === "form_password_pwned";
}
function parseErrors(data = []) {
    return data.length > 0 ? data.map(parseError) : [];
}
function parseError(error) {
    return {
        code: error.code,
        message: error.message,
        longMessage: error.long_message,
        meta: {
            paramName: error?.meta?.param_name,
            sessionId: error?.meta?.session_id,
            emailAddresses: error?.meta?.email_addresses,
            identifiers: error?.meta?.identifiers,
            zxcvbn: error?.meta?.zxcvbn
        }
    };
}
function errorToJSON(error) {
    return {
        code: error?.code || "",
        message: error?.message || "",
        long_message: error?.longMessage,
        meta: {
            param_name: error?.meta?.paramName,
            session_id: error?.meta?.sessionId,
            email_addresses: error?.meta?.emailAddresses,
            identifiers: error?.meta?.identifiers,
            zxcvbn: error?.meta?.zxcvbn
        }
    };
}
var ClerkAPIResponseError = class _ClerkAPIResponseError extends Error {
    constructor(message, { data, status, clerkTraceId }){
        super(message);
        this.toString = ()=>{
            let message = `[${this.name}]
Message:${this.message}
Status:${this.status}
Serialized errors: ${this.errors.map((e)=>JSON.stringify(e))}`;
            if (this.clerkTraceId) {
                message += `
Clerk Trace ID: ${this.clerkTraceId}`;
            }
            return message;
        };
        Object.setPrototypeOf(this, _ClerkAPIResponseError.prototype);
        this.status = status;
        this.message = message;
        this.clerkTraceId = clerkTraceId;
        this.clerkError = true;
        this.errors = parseErrors(data);
    }
};
var ClerkRuntimeError = class _ClerkRuntimeError extends Error {
    constructor(message, { code }){
        const prefix = "\u{1F512} Clerk:";
        const regex = new RegExp(prefix.replace(" ", "\\s*"), "i");
        const sanitized = message.replace(regex, "");
        const _message = `${prefix} ${sanitized.trim()}

(code="${code}")
`;
        super(_message);
        /**
     * Returns a string representation of the error.
     *
     * @returns {string} A formatted string with the error name and message.
     * @memberof ClerkRuntimeError
     */ this.toString = ()=>{
            return `[${this.name}]
Message:${this.message}`;
        };
        Object.setPrototypeOf(this, _ClerkRuntimeError.prototype);
        this.code = code;
        this.message = _message;
        this.clerkRuntimeError = true;
        this.name = "ClerkRuntimeError";
    }
};
var EmailLinkError = class _EmailLinkError extends Error {
    constructor(code){
        super(code);
        this.code = code;
        this.name = "EmailLinkError";
        Object.setPrototypeOf(this, _EmailLinkError.prototype);
    }
};
function isEmailLinkError(err) {
    return err.name === "EmailLinkError";
}
var EmailLinkErrorCode = {
    Expired: "expired",
    Failed: "failed",
    ClientMismatch: "client_mismatch"
};
var EmailLinkErrorCodeStatus = {
    Expired: "expired",
    Failed: "failed",
    ClientMismatch: "client_mismatch"
};
var DefaultMessages = Object.freeze({
    InvalidProxyUrlErrorMessage: `The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})`,
    InvalidPublishableKeyErrorMessage: `The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})`,
    MissingPublishableKeyErrorMessage: `Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
    MissingSecretKeyErrorMessage: `Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
    MissingClerkProvider: `{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider`
});
function buildErrorThrower({ packageName, customMessages }) {
    let pkg = packageName;
    const messages = {
        ...DefaultMessages,
        ...customMessages
    };
    function buildMessage(rawMessage, replacements) {
        if (!replacements) {
            return `${pkg}: ${rawMessage}`;
        }
        let msg = rawMessage;
        const matches = rawMessage.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
        for (const match of matches){
            const replacement = (replacements[match[1]] || "").toString();
            msg = msg.replace(`{{${match[1]}}}`, replacement);
        }
        return `${pkg}: ${msg}`;
    }
    return {
        setPackageName ({ packageName: packageName2 }) {
            if (typeof packageName2 === "string") {
                pkg = packageName2;
            }
            return this;
        },
        setMessages ({ customMessages: customMessages2 }) {
            Object.assign(messages, customMessages2 || {});
            return this;
        },
        throwInvalidPublishableKeyError (params) {
            throw new Error(buildMessage(messages.InvalidPublishableKeyErrorMessage, params));
        },
        throwInvalidProxyUrl (params) {
            throw new Error(buildMessage(messages.InvalidProxyUrlErrorMessage, params));
        },
        throwMissingPublishableKeyError () {
            throw new Error(buildMessage(messages.MissingPublishableKeyErrorMessage));
        },
        throwMissingSecretKeyError () {
            throw new Error(buildMessage(messages.MissingSecretKeyErrorMessage));
        },
        throwMissingClerkProviderError (params) {
            throw new Error(buildMessage(messages.MissingClerkProvider, params));
        },
        throw (message) {
            throw new Error(buildMessage(message));
        }
    };
}
var ClerkWebAuthnError = class extends ClerkRuntimeError {
    constructor(message, { code }){
        super(message, {
            code
        });
        this.code = code;
    }
};
;
 //# sourceMappingURL=chunk-3EORDU4Z.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "__export": (()=>__export),
    "__privateAdd": (()=>__privateAdd),
    "__privateGet": (()=>__privateGet),
    "__privateMethod": (()=>__privateMethod),
    "__privateSet": (()=>__privateSet),
    "__reExport": (()=>__reExport)
});
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __reExport = (target, mod, secondTarget)=>(__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method);
;
 //# sourceMappingURL=chunk-7ELT755Q.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/error.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
 //# sourceMappingURL=error.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/error.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3EORDU4Z$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-3EORDU4Z.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$error$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/error.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/errorThrower.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "errorThrower": (()=>errorThrower)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$error$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/error.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3EORDU4Z$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-3EORDU4Z.mjs [app-rsc] (ecmascript)");
;
;
const errorThrower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3EORDU4Z$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildErrorThrower"])({
    packageName: "@clerk/nextjs"
});
;
 //# sourceMappingURL=errorThrower.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-5JS2VYLU.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/errors.ts
__turbopack_context__.s({
    "SignJWTError": (()=>SignJWTError),
    "TokenVerificationError": (()=>TokenVerificationError),
    "TokenVerificationErrorAction": (()=>TokenVerificationErrorAction),
    "TokenVerificationErrorCode": (()=>TokenVerificationErrorCode),
    "TokenVerificationErrorReason": (()=>TokenVerificationErrorReason)
});
var TokenVerificationErrorCode = {
    InvalidSecretKey: "clerk_key_invalid"
};
var TokenVerificationErrorReason = {
    TokenExpired: "token-expired",
    TokenInvalid: "token-invalid",
    TokenInvalidAlgorithm: "token-invalid-algorithm",
    TokenInvalidAuthorizedParties: "token-invalid-authorized-parties",
    TokenInvalidSignature: "token-invalid-signature",
    TokenNotActiveYet: "token-not-active-yet",
    TokenIatInTheFuture: "token-iat-in-the-future",
    TokenVerificationFailed: "token-verification-failed",
    InvalidSecretKey: "secret-key-invalid",
    LocalJWKMissing: "jwk-local-missing",
    RemoteJWKFailedToLoad: "jwk-remote-failed-to-load",
    RemoteJWKInvalid: "jwk-remote-invalid",
    RemoteJWKMissing: "jwk-remote-missing",
    JWKFailedToResolve: "jwk-failed-to-resolve",
    JWKKidMismatch: "jwk-kid-mismatch"
};
var TokenVerificationErrorAction = {
    ContactSupport: "Contact support@clerk.com",
    EnsureClerkJWT: "Make sure that this is a valid Clerk generate JWT.",
    SetClerkJWTKey: "Set the CLERK_JWT_KEY environment variable.",
    SetClerkSecretKey: "Set the CLERK_SECRET_KEY environment variable.",
    EnsureClockSync: "Make sure your system clock is in sync (e.g. turn off and on automatic time synchronization)."
};
var TokenVerificationError = class _TokenVerificationError extends Error {
    constructor({ action, message, reason }){
        super(message);
        Object.setPrototypeOf(this, _TokenVerificationError.prototype);
        this.reason = reason;
        this.message = message;
        this.action = action;
    }
    getFullMessage() {
        return `${[
            this.message,
            this.action
        ].filter((m)=>m).join(" ")} (reason=${this.reason}, token-carrier=${this.tokenCarrier})`;
    }
};
var SignJWTError = class extends Error {
};
;
 //# sourceMappingURL=chunk-5JS2VYLU.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/runtime/node/crypto.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/runtime/node/crypto.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$runtime$2f$node$2f$crypto$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/runtime/node/crypto.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/isomorphicAtob.ts
__turbopack_context__.s({
    "isomorphicAtob": (()=>isomorphicAtob)
});
var isomorphicAtob = (data)=>{
    if (typeof atob !== "undefined" && typeof atob === "function") {
        return atob(data);
    } else if (typeof global !== "undefined" && global.Buffer) {
        return new global.Buffer(data, "base64").toString();
    }
    return data;
};
;
 //# sourceMappingURL=chunk-TETGTEI2.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/isomorphicAtob.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
 //# sourceMappingURL=isomorphicAtob.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/isomorphicAtob.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$isomorphicAtob$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/isomorphicAtob.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-AT3FJU3M.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertHeaderAlgorithm": (()=>assertHeaderAlgorithm),
    "assertHeaderType": (()=>assertHeaderType),
    "base64url": (()=>base64url),
    "decodeJwt": (()=>decodeJwt),
    "getCryptoAlgorithm": (()=>getCryptoAlgorithm),
    "hasValidSignature": (()=>hasValidSignature),
    "importKey": (()=>importKey),
    "runtime": (()=>runtime),
    "verifyJwt": (()=>verifyJwt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-5JS2VYLU.mjs [app-rsc] (ecmascript)");
// src/runtime.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$runtime$2f$node$2f$crypto$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/runtime/node/crypto.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
// src/jwt/cryptoKeys.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$isomorphicAtob$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/isomorphicAtob.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-rsc] (ecmascript)");
;
;
var globalFetch = fetch.bind(globalThis);
var runtime = {
    crypto: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["webcrypto"],
    get fetch () {
        return ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : globalFetch;
    },
    AbortController: globalThis.AbortController,
    Blob: globalThis.Blob,
    FormData: globalThis.FormData,
    Headers: globalThis.Headers,
    Request: globalThis.Request,
    Response: globalThis.Response
};
// src/util/rfc4648.ts
var base64url = {
    parse (string, opts) {
        return parse(string, base64UrlEncoding, opts);
    },
    stringify (data, opts) {
        return stringify(data, base64UrlEncoding, opts);
    }
};
var base64UrlEncoding = {
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bits: 6
};
function parse(string, encoding, opts = {}) {
    if (!encoding.codes) {
        encoding.codes = {};
        for(let i = 0; i < encoding.chars.length; ++i){
            encoding.codes[encoding.chars[i]] = i;
        }
    }
    if (!opts.loose && string.length * encoding.bits & 7) {
        throw new SyntaxError("Invalid padding");
    }
    let end = string.length;
    while(string[end - 1] === "="){
        --end;
        if (!opts.loose && !((string.length - end) * encoding.bits & 7)) {
            throw new SyntaxError("Invalid padding");
        }
    }
    const out = new (opts.out ?? Uint8Array)(end * encoding.bits / 8 | 0);
    let bits = 0;
    let buffer = 0;
    let written = 0;
    for(let i = 0; i < end; ++i){
        const value = encoding.codes[string[i]];
        if (value === void 0) {
            throw new SyntaxError("Invalid character " + string[i]);
        }
        buffer = buffer << encoding.bits | value;
        bits += encoding.bits;
        if (bits >= 8) {
            bits -= 8;
            out[written++] = 255 & buffer >> bits;
        }
    }
    if (bits >= encoding.bits || 255 & buffer << 8 - bits) {
        throw new SyntaxError("Unexpected end of data");
    }
    return out;
}
function stringify(data, encoding, opts = {}) {
    const { pad = true } = opts;
    const mask = (1 << encoding.bits) - 1;
    let out = "";
    let bits = 0;
    let buffer = 0;
    for(let i = 0; i < data.length; ++i){
        buffer = buffer << 8 | 255 & data[i];
        bits += 8;
        while(bits > encoding.bits){
            bits -= encoding.bits;
            out += encoding.chars[mask & buffer >> bits];
        }
    }
    if (bits) {
        out += encoding.chars[mask & buffer << encoding.bits - bits];
    }
    if (pad) {
        while(out.length * encoding.bits & 7){
            out += "=";
        }
    }
    return out;
}
// src/jwt/algorithms.ts
var algToHash = {
    RS256: "SHA-256",
    RS384: "SHA-384",
    RS512: "SHA-512"
};
var RSA_ALGORITHM_NAME = "RSASSA-PKCS1-v1_5";
var jwksAlgToCryptoAlg = {
    RS256: RSA_ALGORITHM_NAME,
    RS384: RSA_ALGORITHM_NAME,
    RS512: RSA_ALGORITHM_NAME
};
var algs = Object.keys(algToHash);
function getCryptoAlgorithm(algorithmName) {
    const hash = algToHash[algorithmName];
    const name = jwksAlgToCryptoAlg[algorithmName];
    if (!hash || !name) {
        throw new Error(`Unsupported algorithm ${algorithmName}, expected one of ${algs.join(",")}.`);
    }
    return {
        hash: {
            name: algToHash[algorithmName]
        },
        name: jwksAlgToCryptoAlg[algorithmName]
    };
}
// src/jwt/assertions.ts
var isArrayString = (s)=>{
    return Array.isArray(s) && s.length > 0 && s.every((a)=>typeof a === "string");
};
var assertAudienceClaim = (aud, audience)=>{
    const audienceList = [
        audience
    ].flat().filter((a)=>!!a);
    const audList = [
        aud
    ].flat().filter((a)=>!!a);
    const shouldVerifyAudience = audienceList.length > 0 && audList.length > 0;
    if (!shouldVerifyAudience) {
        return;
    }
    if (typeof aud === "string") {
        if (!audienceList.includes(aud)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
                reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
                message: `Invalid JWT audience claim (aud) ${JSON.stringify(aud)}. Is not included in "${JSON.stringify(audienceList)}".`
            });
        }
    } else if (isArrayString(aud)) {
        if (!aud.some((a)=>audienceList.includes(a))) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
                reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
                message: `Invalid JWT audience claim array (aud) ${JSON.stringify(aud)}. Is not included in "${JSON.stringify(audienceList)}".`
            });
        }
    }
};
var assertHeaderType = (typ)=>{
    if (typeof typ === "undefined") {
        return;
    }
    if (typ !== "JWT") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalid,
            message: `Invalid JWT type ${JSON.stringify(typ)}. Expected "JWT".`
        });
    }
};
var assertHeaderAlgorithm = (alg)=>{
    if (!algs.includes(alg)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalidAlgorithm,
            message: `Invalid JWT algorithm ${JSON.stringify(alg)}. Supported: ${algs}.`
        });
    }
};
var assertSubClaim = (sub)=>{
    if (typeof sub !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
            message: `Subject claim (sub) is required and must be a string. Received ${JSON.stringify(sub)}.`
        });
    }
};
var assertAuthorizedPartiesClaim = (azp, authorizedParties)=>{
    if (!azp || !authorizedParties || authorizedParties.length === 0) {
        return;
    }
    if (!authorizedParties.includes(azp)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalidAuthorizedParties,
            message: `Invalid JWT Authorized party claim (azp) ${JSON.stringify(azp)}. Expected "${authorizedParties}".`
        });
    }
};
var assertExpirationClaim = (exp, clockSkewInMs)=>{
    if (typeof exp !== "number") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
            message: `Invalid JWT expiry date claim (exp) ${JSON.stringify(exp)}. Expected number.`
        });
    }
    const currentDate = new Date(Date.now());
    const expiryDate = /* @__PURE__ */ new Date(0);
    expiryDate.setUTCSeconds(exp);
    const expired = expiryDate.getTime() <= currentDate.getTime() - clockSkewInMs;
    if (expired) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenExpired,
            message: `JWT is expired. Expiry date: ${expiryDate.toUTCString()}, Current date: ${currentDate.toUTCString()}.`
        });
    }
};
var assertActivationClaim = (nbf, clockSkewInMs)=>{
    if (typeof nbf === "undefined") {
        return;
    }
    if (typeof nbf !== "number") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
            message: `Invalid JWT not before date claim (nbf) ${JSON.stringify(nbf)}. Expected number.`
        });
    }
    const currentDate = new Date(Date.now());
    const notBeforeDate = /* @__PURE__ */ new Date(0);
    notBeforeDate.setUTCSeconds(nbf);
    const early = notBeforeDate.getTime() > currentDate.getTime() + clockSkewInMs;
    if (early) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenNotActiveYet,
            message: `JWT cannot be used prior to not before date claim (nbf). Not before date: ${notBeforeDate.toUTCString()}; Current date: ${currentDate.toUTCString()};`
        });
    }
};
var assertIssuedAtClaim = (iat, clockSkewInMs)=>{
    if (typeof iat === "undefined") {
        return;
    }
    if (typeof iat !== "number") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
            message: `Invalid JWT issued at date claim (iat) ${JSON.stringify(iat)}. Expected number.`
        });
    }
    const currentDate = new Date(Date.now());
    const issuedAtDate = /* @__PURE__ */ new Date(0);
    issuedAtDate.setUTCSeconds(iat);
    const postIssued = issuedAtDate.getTime() > currentDate.getTime() + clockSkewInMs;
    if (postIssued) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenIatInTheFuture,
            message: `JWT issued at date claim (iat) is in the future. Issued at date: ${issuedAtDate.toUTCString()}; Current date: ${currentDate.toUTCString()};`
        });
    }
};
;
function pemToBuffer(secret) {
    const trimmed = secret.replace(/-----BEGIN.*?-----/g, "").replace(/-----END.*?-----/g, "").replace(/\s/g, "");
    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isomorphicAtob"])(trimmed);
    const buffer = new ArrayBuffer(decoded.length);
    const bufView = new Uint8Array(buffer);
    for(let i = 0, strLen = decoded.length; i < strLen; i++){
        bufView[i] = decoded.charCodeAt(i);
    }
    return bufView;
}
function importKey(key, algorithm, keyUsage) {
    if (typeof key === "object") {
        return runtime.crypto.subtle.importKey("jwk", key, algorithm, false, [
            keyUsage
        ]);
    }
    const keyData = pemToBuffer(key);
    const format = keyUsage === "sign" ? "pkcs8" : "spki";
    return runtime.crypto.subtle.importKey(format, keyData, algorithm, false, [
        keyUsage
    ]);
}
// src/jwt/verifyJwt.ts
var DEFAULT_CLOCK_SKEW_IN_SECONDS = 5 * 1e3;
async function hasValidSignature(jwt, key) {
    const { header, signature, raw } = jwt;
    const encoder = new TextEncoder();
    const data = encoder.encode([
        raw.header,
        raw.payload
    ].join("."));
    const algorithm = getCryptoAlgorithm(header.alg);
    try {
        const cryptoKey = await importKey(key, algorithm, "verify");
        const verified = await runtime.crypto.subtle.verify(algorithm.name, cryptoKey, signature, data);
        return {
            data: verified
        };
    } catch (error) {
        return {
            errors: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalidSignature,
                    message: error?.message
                })
            ]
        };
    }
}
function decodeJwt(token) {
    const tokenParts = (token || "").toString().split(".");
    if (tokenParts.length !== 3) {
        return {
            errors: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalid,
                    message: `Invalid JWT form. A JWT consists of three parts separated by dots.`
                })
            ]
        };
    }
    const [rawHeader, rawPayload, rawSignature] = tokenParts;
    const decoder = new TextDecoder();
    const header = JSON.parse(decoder.decode(base64url.parse(rawHeader, {
        loose: true
    })));
    const payload = JSON.parse(decoder.decode(base64url.parse(rawPayload, {
        loose: true
    })));
    const signature = base64url.parse(rawSignature, {
        loose: true
    });
    const data = {
        header,
        payload,
        signature,
        raw: {
            header: rawHeader,
            payload: rawPayload,
            signature: rawSignature,
            text: token
        }
    };
    return {
        data
    };
}
async function verifyJwt(token, options) {
    const { audience, authorizedParties, clockSkewInMs, key } = options;
    const clockSkew = clockSkewInMs || DEFAULT_CLOCK_SKEW_IN_SECONDS;
    const { data: decoded, errors } = decodeJwt(token);
    if (errors) {
        return {
            errors
        };
    }
    const { header, payload } = decoded;
    try {
        const { typ, alg } = header;
        assertHeaderType(typ);
        assertHeaderAlgorithm(alg);
        const { azp, sub, aud, iat, exp, nbf } = payload;
        assertSubClaim(sub);
        assertAudienceClaim([
            aud
        ], [
            audience
        ]);
        assertAuthorizedPartiesClaim(azp, authorizedParties);
        assertExpirationClaim(exp, clockSkew);
        assertActivationClaim(nbf, clockSkew);
        assertIssuedAtClaim(iat, clockSkew);
    } catch (err) {
        return {
            errors: [
                err
            ]
        };
    }
    const { data: signatureValid, errors: signatureErrors } = await hasValidSignature(decoded, key);
    if (signatureErrors) {
        return {
            errors: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                    action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
                    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
                    message: `Error verifying JWT signature. ${signatureErrors[0]}`
                })
            ]
        };
    }
    if (!signatureValid) {
        return {
            errors: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalidSignature,
                    message: "JWT signature is invalid."
                })
            ]
        };
    }
    return {
        data: payload
    };
}
;
 //# sourceMappingURL=chunk-AT3FJU3M.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/instance.ts
__turbopack_context__.s({
    "isStaging": (()=>isStaging)
});
function isStaging(frontendApi) {
    return frontendApi.endsWith(".lclstage.dev") || frontendApi.endsWith(".stgstage.dev") || frontendApi.endsWith(".clerkstage.dev") || frontendApi.endsWith(".accountsstage.dev");
}
;
 //# sourceMappingURL=chunk-3TMSNP4L.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/constants.ts
__turbopack_context__.s({
    "CURRENT_DEV_INSTANCE_SUFFIXES": (()=>CURRENT_DEV_INSTANCE_SUFFIXES),
    "DEV_OR_STAGING_SUFFIXES": (()=>DEV_OR_STAGING_SUFFIXES),
    "LEGACY_DEV_INSTANCE_SUFFIXES": (()=>LEGACY_DEV_INSTANCE_SUFFIXES),
    "LOCAL_API_URL": (()=>LOCAL_API_URL),
    "LOCAL_ENV_SUFFIXES": (()=>LOCAL_ENV_SUFFIXES),
    "PROD_API_URL": (()=>PROD_API_URL),
    "STAGING_API_URL": (()=>STAGING_API_URL),
    "STAGING_ENV_SUFFIXES": (()=>STAGING_ENV_SUFFIXES),
    "iconImageUrl": (()=>iconImageUrl)
});
var LEGACY_DEV_INSTANCE_SUFFIXES = [
    ".lcl.dev",
    ".lclstage.dev",
    ".lclclerk.com"
];
var CURRENT_DEV_INSTANCE_SUFFIXES = [
    ".accounts.dev",
    ".accountsstage.dev",
    ".accounts.lclclerk.com"
];
var DEV_OR_STAGING_SUFFIXES = [
    ".lcl.dev",
    ".stg.dev",
    ".lclstage.dev",
    ".stgstage.dev",
    ".dev.lclclerk.com",
    ".stg.lclclerk.com",
    ".accounts.lclclerk.com",
    "accountsstage.dev",
    "accounts.dev"
];
var LOCAL_ENV_SUFFIXES = [
    ".lcl.dev",
    "lclstage.dev",
    ".lclclerk.com",
    ".accounts.lclclerk.com"
];
var STAGING_ENV_SUFFIXES = [
    ".accountsstage.dev"
];
var LOCAL_API_URL = "https://api.lclclerk.com";
var STAGING_API_URL = "https://api.clerkstage.dev";
var PROD_API_URL = "https://api.clerk.com";
function iconImageUrl(id, format = "svg") {
    return `https://img.clerk.com/static/${id}.${format}`;
}
;
 //# sourceMappingURL=chunk-I6MTSTOF.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addClerkPrefix": (()=>addClerkPrefix),
    "cleanDoubleSlashes": (()=>cleanDoubleSlashes),
    "getClerkJsMajorVersionOrTag": (()=>getClerkJsMajorVersionOrTag),
    "getScriptUrl": (()=>getScriptUrl),
    "hasLeadingSlash": (()=>hasLeadingSlash),
    "hasTrailingSlash": (()=>hasTrailingSlash),
    "isAbsoluteUrl": (()=>isAbsoluteUrl),
    "isCurrentDevAccountPortalOrigin": (()=>isCurrentDevAccountPortalOrigin),
    "isLegacyDevAccountPortalOrigin": (()=>isLegacyDevAccountPortalOrigin),
    "isNonEmptyURL": (()=>isNonEmptyURL),
    "joinURL": (()=>joinURL),
    "parseSearchParams": (()=>parseSearchParams),
    "stripScheme": (()=>stripScheme),
    "withLeadingSlash": (()=>withLeadingSlash),
    "withTrailingSlash": (()=>withTrailingSlash),
    "withoutLeadingSlash": (()=>withoutLeadingSlash),
    "withoutTrailingSlash": (()=>withoutTrailingSlash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-rsc] (ecmascript)");
;
;
// src/url.ts
function parseSearchParams(queryString = "") {
    if (queryString.startsWith("?")) {
        queryString = queryString.slice(1);
    }
    return new URLSearchParams(queryString);
}
function stripScheme(url = "") {
    return (url || "").replace(/^.+:\/\//, "");
}
function addClerkPrefix(str) {
    if (!str) {
        return "";
    }
    let regex;
    if (str.match(/^(clerk\.)+\w*$/)) {
        regex = /(clerk\.)*(?=clerk\.)/;
    } else if (str.match(/\.clerk.accounts/)) {
        return str;
    } else {
        regex = /^(clerk\.)*/gi;
    }
    const stripped = str.replace(regex, "");
    return `clerk.${stripped}`;
}
var getClerkJsMajorVersionOrTag = (frontendApi, version)=>{
    if (!version && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStaging"])(frontendApi)) {
        return "canary";
    }
    if (!version) {
        return "latest";
    }
    return version.split(".")[0] || "latest";
};
var getScriptUrl = (frontendApi, { clerkJSVersion })=>{
    const noSchemeFrontendApi = frontendApi.replace(/http(s)?:\/\//, "");
    const major = getClerkJsMajorVersionOrTag(frontendApi, clerkJSVersion);
    return `https://${noSchemeFrontendApi}/npm/@clerk/clerk-js@${clerkJSVersion || major}/dist/clerk.browser.js`;
};
function isLegacyDevAccountPortalOrigin(host) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((legacyDevSuffix)=>{
        return host.startsWith("accounts.") && host.endsWith(legacyDevSuffix);
    });
}
function isCurrentDevAccountPortalOrigin(host) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT_DEV_INSTANCE_SUFFIXES"].some((currentDevSuffix)=>{
        return host.endsWith(currentDevSuffix) && !host.endsWith(".clerk" + currentDevSuffix);
    });
}
var TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
function hasTrailingSlash(input = "", respectQueryAndFragment) {
    if (!respectQueryAndFragment) {
        return input.endsWith("/");
    }
    return TRAILING_SLASH_RE.test(input);
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
    if (!respectQueryAndFragment) {
        return input.endsWith("/") ? input : input + "/";
    }
    if (hasTrailingSlash(input, true)) {
        return input || "/";
    }
    let path = input;
    let fragment = "";
    const fragmentIndex = input.indexOf("#");
    if (fragmentIndex >= 0) {
        path = input.slice(0, fragmentIndex);
        fragment = input.slice(fragmentIndex);
        if (!path) {
            return fragment;
        }
    }
    const [s0, ...s] = path.split("?");
    return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
    if (!respectQueryAndFragment) {
        return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
    }
    if (!hasTrailingSlash(input, true)) {
        return input || "/";
    }
    let path = input;
    let fragment = "";
    const fragmentIndex = input.indexOf("#");
    if (fragmentIndex >= 0) {
        path = input.slice(0, fragmentIndex);
        fragment = input.slice(fragmentIndex);
    }
    const [s0, ...s] = path.split("?");
    return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
    return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
    return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withLeadingSlash(input = "") {
    return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
    return input.split("://").map((string_)=>string_.replace(/\/{2,}/g, "/")).join("://");
}
function isNonEmptyURL(url) {
    return url && url !== "/";
}
var JOIN_LEADING_SLASH_RE = /^\.?\//;
function joinURL(base, ...input) {
    let url = base || "";
    for (const segment of input.filter((url2)=>isNonEmptyURL(url2))){
        if (url) {
            const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
            url = withTrailingSlash(url) + _segment;
        } else {
            url = segment;
        }
    }
    return url;
}
var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
var isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
;
 //# sourceMappingURL=chunk-IFTVZ2LQ.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/url.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
 //# sourceMappingURL=url.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/url.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$url$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/url.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-BUNBAIZO.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/retry.ts
__turbopack_context__.s({
    "retry": (()=>retry)
});
var defaultOptions = {
    initialDelay: 125,
    maxDelayBetweenRetries: 0,
    factor: 2,
    shouldRetry: (_, iteration)=>iteration < 5,
    retryImmediately: true,
    jitter: true
};
var RETRY_IMMEDIATELY_DELAY = 100;
var sleep = async (ms)=>new Promise((s)=>setTimeout(s, ms));
var applyJitter = (delay, jitter)=>{
    return jitter ? delay * (1 + Math.random()) : delay;
};
var createExponentialDelayAsyncFn = (opts)=>{
    let timesCalled = 0;
    const calculateDelayInMs = ()=>{
        const constant = opts.initialDelay;
        const base = opts.factor;
        let delay = constant * Math.pow(base, timesCalled);
        delay = applyJitter(delay, opts.jitter);
        return Math.min(opts.maxDelayBetweenRetries || delay, delay);
    };
    return async ()=>{
        await sleep(calculateDelayInMs());
        timesCalled++;
    };
};
var retry = async (callback, options = {})=>{
    let iterations = 0;
    const { shouldRetry, initialDelay, maxDelayBetweenRetries, factor, retryImmediately, jitter } = {
        ...defaultOptions,
        ...options
    };
    const delay = createExponentialDelayAsyncFn({
        initialDelay,
        maxDelayBetweenRetries,
        factor,
        jitter
    });
    while(true){
        try {
            return await callback();
        } catch (e) {
            iterations++;
            if (!shouldRetry(e, iterations)) {
                throw e;
            }
            if (retryImmediately && iterations === 1) {
                await sleep(applyJitter(RETRY_IMMEDIATELY_DELAY, jitter));
            } else {
                await delay();
            }
        }
    }
};
;
 //# sourceMappingURL=chunk-BUNBAIZO.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/retry.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
 //# sourceMappingURL=retry.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/retry.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$BUNBAIZO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-BUNBAIZO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$retry$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/retry.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/isomorphicBtoa.ts
__turbopack_context__.s({
    "isomorphicBtoa": (()=>isomorphicBtoa)
});
var isomorphicBtoa = (data)=>{
    if (typeof btoa !== "undefined" && typeof btoa === "function") {
        return btoa(data);
    } else if (typeof global !== "undefined" && global.Buffer) {
        return new global.Buffer(data).toString("base64");
    }
    return data;
};
;
 //# sourceMappingURL=chunk-KOH7GTJO.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-G3VP5PJE.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildPublishableKey": (()=>buildPublishableKey),
    "createDevOrStagingUrlCache": (()=>createDevOrStagingUrlCache),
    "getCookieSuffix": (()=>getCookieSuffix),
    "getSuffixedCookieName": (()=>getSuffixedCookieName),
    "isDevelopmentFromPublishableKey": (()=>isDevelopmentFromPublishableKey),
    "isDevelopmentFromSecretKey": (()=>isDevelopmentFromSecretKey),
    "isProductionFromPublishableKey": (()=>isProductionFromPublishableKey),
    "isProductionFromSecretKey": (()=>isProductionFromSecretKey),
    "isPublishableKey": (()=>isPublishableKey),
    "parsePublishableKey": (()=>parsePublishableKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-rsc] (ecmascript)");
;
;
;
// src/keys.ts
var PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
var PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
var PUBLISHABLE_FRONTEND_API_DEV_REGEX = /^(([a-z]+)-){2}([0-9]{1,2})\.clerk\.accounts([a-z.]*)(dev|com)$/i;
function buildPublishableKey(frontendApi) {
    const isDevKey = PUBLISHABLE_FRONTEND_API_DEV_REGEX.test(frontendApi) || frontendApi.startsWith("clerk.") && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((s)=>frontendApi.endsWith(s));
    const keyPrefix = isDevKey ? PUBLISHABLE_KEY_TEST_PREFIX : PUBLISHABLE_KEY_LIVE_PREFIX;
    return `${keyPrefix}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isomorphicBtoa"])(`${frontendApi}$`)}`;
}
function parsePublishableKey(key, options = {}) {
    key = key || "";
    if (!key || !isPublishableKey(key)) {
        if (options.fatal && !key) {
            throw new Error("Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys");
        }
        if (options.fatal && !isPublishableKey(key)) {
            throw new Error("Publishable key not valid.");
        }
        return null;
    }
    const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
    let frontendApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isomorphicAtob"])(key.split("_")[2]);
    frontendApi = frontendApi.slice(0, -1);
    if (options.proxyUrl) {
        frontendApi = options.proxyUrl;
    } else if (instanceType !== "development" && options.domain) {
        frontendApi = `clerk.${options.domain}`;
    }
    return {
        instanceType,
        frontendApi
    };
}
function isPublishableKey(key = "") {
    try {
        const hasValidPrefix = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX);
        const hasValidFrontendApiPostfix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isomorphicAtob"])(key.split("_")[2] || "").endsWith("$");
        return hasValidPrefix && hasValidFrontendApiPostfix;
    } catch  {
        return false;
    }
}
function createDevOrStagingUrlCache() {
    const devOrStagingUrlCache = /* @__PURE__ */ new Map();
    return {
        isDevOrStagingUrl: (url)=>{
            if (!url) {
                return false;
            }
            const hostname = typeof url === "string" ? url : url.hostname;
            let res = devOrStagingUrlCache.get(hostname);
            if (res === void 0) {
                res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEV_OR_STAGING_SUFFIXES"].some((s)=>hostname.endsWith(s));
                devOrStagingUrlCache.set(hostname, res);
            }
            return res;
        }
    };
}
function isDevelopmentFromPublishableKey(apiKey) {
    return apiKey.startsWith("test_") || apiKey.startsWith("pk_test_");
}
function isProductionFromPublishableKey(apiKey) {
    return apiKey.startsWith("live_") || apiKey.startsWith("pk_live_");
}
function isDevelopmentFromSecretKey(apiKey) {
    return apiKey.startsWith("test_") || apiKey.startsWith("sk_test_");
}
function isProductionFromSecretKey(apiKey) {
    return apiKey.startsWith("live_") || apiKey.startsWith("sk_live_");
}
async function getCookieSuffix(publishableKey, subtle = globalThis.crypto.subtle) {
    const data = new TextEncoder().encode(publishableKey);
    const digest = await subtle.digest("sha-1", data);
    const stringDigest = String.fromCharCode(...new Uint8Array(digest));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isomorphicBtoa"])(stringDigest).replace(/\+/gi, "-").replace(/\//gi, "_").substring(0, 8);
}
var getSuffixedCookieName = (cookieName, cookieSuffix)=>{
    return `${cookieName}_${cookieSuffix}`;
};
;
 //# sourceMappingURL=chunk-G3VP5PJE.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/keys.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
;
 //# sourceMappingURL=keys.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/keys.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-G3VP5PJE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/keys.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/runtimeEnvironment.ts
__turbopack_context__.s({
    "isDevelopmentEnvironment": (()=>isDevelopmentEnvironment),
    "isProductionEnvironment": (()=>isProductionEnvironment),
    "isTestEnvironment": (()=>isTestEnvironment)
});
var isDevelopmentEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "development";
    } catch  {}
    return false;
};
var isTestEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "test";
    } catch  {}
    return false;
};
var isProductionEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "production";
    } catch  {}
    return false;
};
;
 //# sourceMappingURL=chunk-7HPDNZ3R.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-UEY4AZIP.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deprecated": (()=>deprecated),
    "deprecatedObjectProperty": (()=>deprecatedObjectProperty),
    "deprecatedProperty": (()=>deprecatedProperty)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-rsc] (ecmascript)");
;
// src/deprecated.ts
var displayedWarnings = /* @__PURE__ */ new Set();
var deprecated = (fnName, warning, key)=>{
    const hideWarning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTestEnvironment"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isProductionEnvironment"])();
    const messageId = key ?? fnName;
    if (displayedWarnings.has(messageId) || hideWarning) {
        return;
    }
    displayedWarnings.add(messageId);
    console.warn(`Clerk - DEPRECATION WARNING: "${fnName}" is deprecated and will be removed in the next major release.
${warning}`);
};
var deprecatedProperty = (cls, propName, warning, isStatic = false)=>{
    const target = isStatic ? cls : cls.prototype;
    let value = target[propName];
    Object.defineProperty(target, propName, {
        get () {
            deprecated(propName, warning, `${cls.name}:${propName}`);
            return value;
        },
        set (v) {
            value = v;
        }
    });
};
var deprecatedObjectProperty = (obj, propName, warning, key)=>{
    let value = obj[propName];
    Object.defineProperty(obj, propName, {
        get () {
            deprecated(propName, warning, key);
            return value;
        },
        set (v) {
            value = v;
        }
    });
};
;
 //# sourceMappingURL=chunk-UEY4AZIP.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/deprecated.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
 //# sourceMappingURL=deprecated.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/deprecated.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$UEY4AZIP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-UEY4AZIP.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deprecated$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/deprecated.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/map-obj@4.3.0/node_modules/map-obj/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const isObject = (value)=>typeof value === 'object' && value !== null;
const mapObjectSkip = Symbol('skip');
// Customized for this use-case
const isObjectCustom = (value)=>isObject(value) && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);
const mapObject = (object, mapper, options, isSeen = new WeakMap())=>{
    options = {
        deep: false,
        target: {},
        ...options
    };
    if (isSeen.has(object)) {
        return isSeen.get(object);
    }
    isSeen.set(object, options.target);
    const { target } = options;
    delete options.target;
    const mapArray = (array)=>array.map((element)=>isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);
    if (Array.isArray(object)) {
        return mapArray(object);
    }
    for (const [key, value] of Object.entries(object)){
        const mapResult = mapper(key, value, object);
        if (mapResult === mapObjectSkip) {
            continue;
        }
        let [newKey, newValue, { shouldRecurse = true } = {}] = mapResult;
        // Drop `__proto__` keys.
        if (newKey === '__proto__') {
            continue;
        }
        if (options.deep && shouldRecurse && isObjectCustom(newValue)) {
            newValue = Array.isArray(newValue) ? mapArray(newValue) : mapObject(newValue, mapper, options, isSeen);
        }
        target[newKey] = newValue;
    }
    return target;
};
module.exports = (object, mapper, options)=>{
    if (!isObject(object)) {
        throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
    }
    return mapObject(object, mapper, options);
};
module.exports.mapObjectSkip = mapObjectSkip;
}}),
"[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s({
    "__addDisposableResource": (()=>__addDisposableResource),
    "__assign": (()=>__assign),
    "__asyncDelegator": (()=>__asyncDelegator),
    "__asyncGenerator": (()=>__asyncGenerator),
    "__asyncValues": (()=>__asyncValues),
    "__await": (()=>__await),
    "__awaiter": (()=>__awaiter),
    "__classPrivateFieldGet": (()=>__classPrivateFieldGet),
    "__classPrivateFieldIn": (()=>__classPrivateFieldIn),
    "__classPrivateFieldSet": (()=>__classPrivateFieldSet),
    "__createBinding": (()=>__createBinding),
    "__decorate": (()=>__decorate),
    "__disposeResources": (()=>__disposeResources),
    "__esDecorate": (()=>__esDecorate),
    "__exportStar": (()=>__exportStar),
    "__extends": (()=>__extends),
    "__generator": (()=>__generator),
    "__importDefault": (()=>__importDefault),
    "__importStar": (()=>__importStar),
    "__makeTemplateObject": (()=>__makeTemplateObject),
    "__metadata": (()=>__metadata),
    "__param": (()=>__param),
    "__propKey": (()=>__propKey),
    "__read": (()=>__read),
    "__rest": (()=>__rest),
    "__rewriteRelativeImportExtension": (()=>__rewriteRelativeImportExtension),
    "__runInitializers": (()=>__runInitializers),
    "__setFunctionName": (()=>__setFunctionName),
    "__spread": (()=>__spread),
    "__spreadArray": (()=>__spreadArray),
    "__spreadArrays": (()=>__spreadArrays),
    "__values": (()=>__values),
    "default": (()=>__TURBOPACK__default__export__)
});
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    "TURBOPACK unreachable";
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    "TURBOPACK unreachable";
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    "TURBOPACK unreachable";
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    "TURBOPACK unreachable";
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}}),
"[project]/node_modules/.pnpm/lower-case@2.0.2/node_modules/lower-case/dist.es2015/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */ __turbopack_context__.s({
    "localeLowerCase": (()=>localeLowerCase),
    "lowerCase": (()=>lowerCase)
});
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303"
        }
    }
};
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang) return lowerCase(str.replace(lang.regexp, function(m) {
        return lang.map[m];
    }));
    return lowerCase(str);
}
function lowerCase(str) {
    return str.toLowerCase();
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist.es2015/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "noCase": (()=>noCase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lower$2d$case$40$2$2e$0$2e$2$2f$node_modules$2f$lower$2d$case$2f$dist$2e$es2015$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lower-case@2.0.2/node_modules/lower-case/dist.es2015/index.js [app-rsc] (ecmascript)");
;
// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [
    /([a-z0-9])([A-Z])/g,
    /([A-Z])([A-Z][a-z])/g
];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
function noCase(input, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lower$2d$case$40$2$2e$0$2e$2$2f$node_modules$2f$lower$2d$case$2f$dist$2e$es2015$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lowerCase"] : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while(result.charAt(start) === "\0")start++;
    while(result.charAt(end - 1) === "\0")end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */ function replace(input, re, value) {
    if (re instanceof RegExp) return input.replace(re, value);
    return re.reduce(function(input, re) {
        return input.replace(re, value);
    }, input);
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/dot-case@3.0.4/node_modules/dot-case/dist.es2015/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dotCase": (()=>dotCase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$no$2d$case$40$3$2e$0$2e$4$2f$node_modules$2f$no$2d$case$2f$dist$2e$es2015$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist.es2015/index.js [app-rsc] (ecmascript)");
;
;
function dotCase(input, options) {
    if (options === void 0) {
        options = {};
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$no$2d$case$40$3$2e$0$2e$4$2f$node_modules$2f$no$2d$case$2f$dist$2e$es2015$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noCase"])(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__assign"])({
        delimiter: "."
    }, options));
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/snake-case@3.0.4/node_modules/snake-case/dist.es2015/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "snakeCase": (()=>snakeCase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dot$2d$case$40$3$2e$0$2e$4$2f$node_modules$2f$dot$2d$case$2f$dist$2e$es2015$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/dot-case@3.0.4/node_modules/dot-case/dist.es2015/index.js [app-rsc] (ecmascript)");
;
;
function snakeCase(input, options) {
    if (options === void 0) {
        options = {};
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dot$2d$case$40$3$2e$0$2e$4$2f$node_modules$2f$dot$2d$case$2f$dist$2e$es2015$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dotCase"])(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__assign"])({
        delimiter: "_"
    }, options));
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/snakecase-keys@8.0.1/node_modules/snakecase-keys/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const map = __turbopack_context__.r("[project]/node_modules/.pnpm/map-obj@4.3.0/node_modules/map-obj/index.js [app-rsc] (ecmascript)");
const { snakeCase } = __turbopack_context__.r("[project]/node_modules/.pnpm/snake-case@3.0.4/node_modules/snake-case/dist.es2015/index.js [app-rsc] (ecmascript)");
const PlainObjectConstructor = {}.constructor;
module.exports = function(obj, options) {
    if (Array.isArray(obj)) {
        if (obj.some((item)=>item.constructor !== PlainObjectConstructor)) {
            throw new Error('obj must be array of plain objects');
        }
    } else {
        if (obj.constructor !== PlainObjectConstructor) {
            throw new Error('obj must be an plain object');
        }
    }
    options = Object.assign({
        deep: true,
        exclude: [],
        parsingOptions: {}
    }, options);
    return map(obj, function(key, val) {
        return [
            matches(options.exclude, key) ? key : snakeCase(key, options.parsingOptions),
            val,
            mapperOptions(key, val, options)
        ];
    }, options);
};
function matches(patterns, value) {
    return patterns.some(function(pattern) {
        return typeof pattern === 'string' ? pattern === value : pattern.test(value);
    });
}
function mapperOptions(key, val, options) {
    return options.shouldRecurse ? {
        shouldRecurse: options.shouldRecurse(key, val)
    } : undefined;
}
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-E3NYSYOB.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/authorization.ts
__turbopack_context__.s({
    "createCheckAuthorization": (()=>createCheckAuthorization),
    "validateReverificationConfig": (()=>validateReverificationConfig)
});
var TYPES_TO_OBJECTS = {
    strict_mfa: {
        afterMinutes: 10,
        level: "multi_factor"
    },
    strict: {
        afterMinutes: 10,
        level: "second_factor"
    },
    moderate: {
        afterMinutes: 60,
        level: "second_factor"
    },
    lax: {
        afterMinutes: 1440,
        level: "second_factor"
    }
};
var ALLOWED_LEVELS = /* @__PURE__ */ new Set([
    "first_factor",
    "second_factor",
    "multi_factor"
]);
var ALLOWED_TYPES = /* @__PURE__ */ new Set([
    "strict_mfa",
    "strict",
    "moderate",
    "lax"
]);
var isValidMaxAge = (maxAge)=>typeof maxAge === "number" && maxAge > 0;
var isValidLevel = (level)=>ALLOWED_LEVELS.has(level);
var isValidVerificationType = (type)=>ALLOWED_TYPES.has(type);
var checkOrgAuthorization = (params, options)=>{
    const { orgId, orgRole, orgPermissions } = options;
    if (!params.role && !params.permission) {
        return null;
    }
    if (!orgId || !orgRole || !orgPermissions) {
        return null;
    }
    if (params.permission) {
        return orgPermissions.includes(params.permission);
    }
    if (params.role) {
        return orgRole === params.role;
    }
    return null;
};
var validateReverificationConfig = (config)=>{
    if (!config) {
        return false;
    }
    const convertConfigToObject = (config2)=>{
        if (typeof config2 === "string") {
            return TYPES_TO_OBJECTS[config2];
        }
        return config2;
    };
    const isValidStringValue = typeof config === "string" && isValidVerificationType(config);
    const isValidObjectValue = typeof config === "object" && isValidLevel(config.level) && isValidMaxAge(config.afterMinutes);
    if (isValidStringValue || isValidObjectValue) {
        return convertConfigToObject.bind(null, config);
    }
    return false;
};
var checkReverificationAuthorization = (params, { factorVerificationAge })=>{
    if (!params.reverification || !factorVerificationAge) {
        return null;
    }
    const isValidReverification = validateReverificationConfig(params.reverification);
    if (!isValidReverification) {
        return null;
    }
    const { level, afterMinutes } = isValidReverification();
    const [factor1Age, factor2Age] = factorVerificationAge;
    const isValidFactor1 = factor1Age !== -1 ? afterMinutes > factor1Age : null;
    const isValidFactor2 = factor2Age !== -1 ? afterMinutes > factor2Age : null;
    switch(level){
        case "first_factor":
            return isValidFactor1;
        case "second_factor":
            return factor2Age !== -1 ? isValidFactor2 : isValidFactor1;
        case "multi_factor":
            return factor2Age === -1 ? isValidFactor1 : isValidFactor1 && isValidFactor2;
    }
};
var createCheckAuthorization = (options)=>{
    return (params)=>{
        if (!options.userId) {
            return false;
        }
        const orgAuthorization = checkOrgAuthorization(params, options);
        const reverificationAuthorization = checkReverificationAuthorization(params, options);
        if ([
            orgAuthorization,
            reverificationAuthorization
        ].some((a)=>a === null)) {
            return [
                orgAuthorization,
                reverificationAuthorization
            ].some((a)=>a === true);
        }
        return [
            orgAuthorization,
            reverificationAuthorization
        ].every((a)=>a === true);
    };
};
;
 //# sourceMappingURL=chunk-E3NYSYOB.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/authorization.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
 //# sourceMappingURL=authorization.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/authorization.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$E3NYSYOB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-E3NYSYOB.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$authorization$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/authorization.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/cookie@1.0.2/node_modules/cookie/dist/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parse = parse;
exports.serialize = serialize;
/**
 * RegExp to match cookie-name in RFC 6265 sec 4.1.1
 * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
 * which has been replaced by the token definition in RFC 7230 appendix B.
 *
 * cookie-name       = token
 * token             = 1*tchar
 * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
 *                     "*" / "+" / "-" / "." / "^" / "_" /
 *                     "`" / "|" / "~" / DIGIT / ALPHA
 *
 * Note: Allowing more characters - https://github.com/jshttp/cookie/issues/191
 * Allow same range as cookie value, except `=`, which delimits end of name.
 */ const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
/**
 * RegExp to match cookie-value in RFC 6265 sec 4.1.1
 *
 * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
 * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
 *                     ; US-ASCII characters excluding CTLs,
 *                     ; whitespace DQUOTE, comma, semicolon,
 *                     ; and backslash
 *
 * Allowing more characters: https://github.com/jshttp/cookie/issues/191
 * Comma, backslash, and DQUOTE are not part of the parsing algorithm.
 */ const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
/**
 * RegExp to match domain-value in RFC 6265 sec 4.1.1
 *
 * domain-value      = <subdomain>
 *                     ; defined in [RFC1034], Section 3.5, as
 *                     ; enhanced by [RFC1123], Section 2.1
 * <subdomain>       = <label> | <subdomain> "." <label>
 * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
 *                     Labels must be 63 characters or less.
 *                     'let-dig' not 'letter' in the first char, per RFC1123
 * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
 * <let-dig-hyp>     = <let-dig> | "-"
 * <let-dig>         = <letter> | <digit>
 * <letter>          = any one of the 52 alphabetic characters A through Z in
 *                     upper case and a through z in lower case
 * <digit>           = any one of the ten digits 0 through 9
 *
 * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
 *
 * > (Note that a leading %x2E ("."), if present, is ignored even though that
 * character is not permitted, but a trailing %x2E ("."), if present, will
 * cause the user agent to ignore the attribute.)
 */ const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
/**
 * RegExp to match path-value in RFC 6265 sec 4.1.1
 *
 * path-value        = <any CHAR except CTLs or ";">
 * CHAR              = %x01-7F
 *                     ; defined in RFC 5234 appendix B.1
 */ const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
const __toString = Object.prototype.toString;
const NullObject = /* @__PURE__ */ (()=>{
    const C = function() {};
    C.prototype = Object.create(null);
    return C;
})();
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 */ function parse(str, options) {
    const obj = new NullObject();
    const len = str.length;
    // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
    if (len < 2) return obj;
    const dec = options?.decode || decode;
    let index = 0;
    do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) break; // No more cookie pairs.
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
            // backtrack on prior semicolon
            index = str.lastIndexOf(";", eqIdx - 1) + 1;
            continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        // only assign once
        if (obj[key] === undefined) {
            let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
            let valEndIdx = endIndex(str, endIdx, valStartIdx);
            const value = dec(str.slice(valStartIdx, valEndIdx));
            obj[key] = value;
        }
        index = endIdx + 1;
    }while (index < len)
    return obj;
}
function startIndex(str, index, max) {
    do {
        const code = str.charCodeAt(index);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) return index;
    }while (++index < max)
    return max;
}
function endIndex(str, index, min) {
    while(index > min){
        const code = str.charCodeAt(--index);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) return index + 1;
    }
    return min;
}
/**
 * Serialize data into a cookie header.
 *
 * Serialize a name value pair into a cookie string suitable for
 * http headers. An optional options object specifies cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 */ function serialize(name, val, options) {
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
    }
    const value = enc(val);
    if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
    }
    let str = name + "=" + value;
    if (!options) return str;
    if (options.maxAge !== undefined) {
        if (!Number.isInteger(options.maxAge)) {
            throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
    }
    if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
            throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
    }
    if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
            throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
    }
    if (options.expires) {
        if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
            throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
    }
    if (options.httpOnly) {
        str += "; HttpOnly";
    }
    if (options.secure) {
        str += "; Secure";
    }
    if (options.partitioned) {
        str += "; Partitioned";
    }
    if (options.priority) {
        const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : undefined;
        switch(priority){
            case "low":
                str += "; Priority=Low";
                break;
            case "medium":
                str += "; Priority=Medium";
                break;
            case "high":
                str += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
    }
    if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
        switch(sameSite){
            case true:
            case "strict":
                str += "; SameSite=Strict";
                break;
            case "lax":
                str += "; SameSite=Lax";
                break;
            case "none":
                str += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
    }
    return str;
}
/**
 * URL-decode string value. Optimized to skip native call when no %.
 */ function decode(str) {
    if (str.indexOf("%") === -1) return str;
    try {
        return decodeURIComponent(str);
    } catch (e) {
        return str;
    }
}
/**
 * Determine if value is a Date.
 */ function isDate(val) {
    return __toString.call(val) === "[object Date]";
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-JJHTUJGL.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/compiled/path-to-regexp/index.js
__turbopack_context__.s({
    "match": (()=>match),
    "pathToRegexp": (()=>pathToRegexp)
});
function _(r) {
    for(var n = [], e = 0; e < r.length;){
        var a = r[e];
        if (a === "*" || a === "+" || a === "?") {
            n.push({
                type: "MODIFIER",
                index: e,
                value: r[e++]
            });
            continue;
        }
        if (a === "\\") {
            n.push({
                type: "ESCAPED_CHAR",
                index: e++,
                value: r[e++]
            });
            continue;
        }
        if (a === "{") {
            n.push({
                type: "OPEN",
                index: e,
                value: r[e++]
            });
            continue;
        }
        if (a === "}") {
            n.push({
                type: "CLOSE",
                index: e,
                value: r[e++]
            });
            continue;
        }
        if (a === ":") {
            for(var u = "", t = e + 1; t < r.length;){
                var c = r.charCodeAt(t);
                if (c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || c === 95) {
                    u += r[t++];
                    continue;
                }
                break;
            }
            if (!u) throw new TypeError("Missing parameter name at ".concat(e));
            n.push({
                type: "NAME",
                index: e,
                value: u
            }), e = t;
            continue;
        }
        if (a === "(") {
            var o = 1, m = "", t = e + 1;
            if (r[t] === "?") throw new TypeError('Pattern cannot start with "?" at '.concat(t));
            for(; t < r.length;){
                if (r[t] === "\\") {
                    m += r[t++] + r[t++];
                    continue;
                }
                if (r[t] === ")") {
                    if (o--, o === 0) {
                        t++;
                        break;
                    }
                } else if (r[t] === "(" && (o++, r[t + 1] !== "?")) throw new TypeError("Capturing groups are not allowed at ".concat(t));
                m += r[t++];
            }
            if (o) throw new TypeError("Unbalanced pattern at ".concat(e));
            if (!m) throw new TypeError("Missing pattern at ".concat(e));
            n.push({
                type: "PATTERN",
                index: e,
                value: m
            }), e = t;
            continue;
        }
        n.push({
            type: "CHAR",
            index: e,
            value: r[e++]
        });
    }
    return n.push({
        type: "END",
        index: e,
        value: ""
    }), n;
}
function F(r, n) {
    n === void 0 && (n = {});
    for(var e = _(r), a = n.prefixes, u = a === void 0 ? "./" : a, t = n.delimiter, c = t === void 0 ? "/#?" : t, o = [], m = 0, h = 0, p = "", f = function(l) {
        if (h < e.length && e[h].type === l) return e[h++].value;
    }, w = function(l) {
        var v = f(l);
        if (v !== void 0) return v;
        var E = e[h], N = E.type, S = E.index;
        throw new TypeError("Unexpected ".concat(N, " at ").concat(S, ", expected ").concat(l));
    }, d = function() {
        for(var l = "", v; v = f("CHAR") || f("ESCAPED_CHAR");)l += v;
        return l;
    }, M = function(l) {
        for(var v = 0, E = c; v < E.length; v++){
            var N = E[v];
            if (l.indexOf(N) > -1) return true;
        }
        return false;
    }, A = function(l) {
        var v = o[o.length - 1], E = l || (v && typeof v == "string" ? v : "");
        if (v && !E) throw new TypeError('Must have text between two parameters, missing text after "'.concat(v.name, '"'));
        return !E || M(E) ? "[^".concat(s(c), "]+?") : "(?:(?!".concat(s(E), ")[^").concat(s(c), "])+?");
    }; h < e.length;){
        var T = f("CHAR"), x = f("NAME"), C = f("PATTERN");
        if (x || C) {
            var g = T || "";
            u.indexOf(g) === -1 && (p += g, g = ""), p && (o.push(p), p = ""), o.push({
                name: x || m++,
                prefix: g,
                suffix: "",
                pattern: C || A(g),
                modifier: f("MODIFIER") || ""
            });
            continue;
        }
        var i = T || f("ESCAPED_CHAR");
        if (i) {
            p += i;
            continue;
        }
        p && (o.push(p), p = "");
        var R = f("OPEN");
        if (R) {
            var g = d(), y = f("NAME") || "", O = f("PATTERN") || "", b = d();
            w("CLOSE"), o.push({
                name: y || (O ? m++ : ""),
                pattern: y && !O ? A(g) : O,
                prefix: g,
                suffix: b,
                modifier: f("MODIFIER") || ""
            });
            continue;
        }
        w("END");
    }
    return o;
}
function H(r, n) {
    var e = [], a = P(r, e, n);
    return I(a, e, n);
}
function I(r, n, e) {
    e === void 0 && (e = {});
    var a = e.decode, u = a === void 0 ? function(t) {
        return t;
    } : a;
    return function(t) {
        var c = r.exec(t);
        if (!c) return false;
        for(var o = c[0], m = c.index, h = /* @__PURE__ */ Object.create(null), p = function(w) {
            if (c[w] === void 0) return "continue";
            var d = n[w - 1];
            d.modifier === "*" || d.modifier === "+" ? h[d.name] = c[w].split(d.prefix + d.suffix).map(function(M) {
                return u(M, d);
            }) : h[d.name] = u(c[w], d);
        }, f = 1; f < c.length; f++)p(f);
        return {
            path: o,
            index: m,
            params: h
        };
    };
}
function s(r) {
    return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function D(r) {
    return r && r.sensitive ? "" : "i";
}
function $(r, n) {
    if (!n) return r;
    for(var e = /\((?:\?<(.*?)>)?(?!\?)/g, a = 0, u = e.exec(r.source); u;)n.push({
        name: u[1] || a++,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
    }), u = e.exec(r.source);
    return r;
}
function W(r, n, e) {
    var a = r.map(function(u) {
        return P(u, n, e).source;
    });
    return new RegExp("(?:".concat(a.join("|"), ")"), D(e));
}
function L(r, n, e) {
    return U(F(r, e), n, e);
}
function U(r, n, e) {
    e === void 0 && (e = {});
    for(var a = e.strict, u = a === void 0 ? false : a, t = e.start, c = t === void 0 ? true : t, o = e.end, m = o === void 0 ? true : o, h = e.encode, p = h === void 0 ? function(v) {
        return v;
    } : h, f = e.delimiter, w = f === void 0 ? "/#?" : f, d = e.endsWith, M = d === void 0 ? "" : d, A = "[".concat(s(M), "]|$"), T = "[".concat(s(w), "]"), x = c ? "^" : "", C = 0, g = r; C < g.length; C++){
        var i = g[C];
        if (typeof i == "string") x += s(p(i));
        else {
            var R = s(p(i.prefix)), y = s(p(i.suffix));
            if (i.pattern) if (n && n.push(i), R || y) if (i.modifier === "+" || i.modifier === "*") {
                var O = i.modifier === "*" ? "?" : "";
                x += "(?:".concat(R, "((?:").concat(i.pattern, ")(?:").concat(y).concat(R, "(?:").concat(i.pattern, "))*)").concat(y, ")").concat(O);
            } else x += "(?:".concat(R, "(").concat(i.pattern, ")").concat(y, ")").concat(i.modifier);
            else {
                if (i.modifier === "+" || i.modifier === "*") throw new TypeError('Can not repeat "'.concat(i.name, '" without a prefix and suffix'));
                x += "(".concat(i.pattern, ")").concat(i.modifier);
            }
            else x += "(?:".concat(R).concat(y, ")").concat(i.modifier);
        }
    }
    if (m) u || (x += "".concat(T, "?")), x += e.endsWith ? "(?=".concat(A, ")") : "$";
    else {
        var b = r[r.length - 1], l = typeof b == "string" ? T.indexOf(b[b.length - 1]) > -1 : b === void 0;
        u || (x += "(?:".concat(T, "(?=").concat(A, "))?")), l || (x += "(?=".concat(T, "|").concat(A, ")"));
    }
    return new RegExp(x, D(e));
}
function P(r, n, e) {
    return r instanceof RegExp ? $(r, n) : Array.isArray(r) ? W(r, n, e) : L(r, n, e);
}
// src/pathToRegexp.ts
var pathToRegexp = (path)=>{
    try {
        return P(path);
    } catch (e) {
        throw new Error(`Invalid path: ${path}.
Consult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp/tree/6.x
${e.message}`);
    }
};
function match(str, options) {
    try {
        return H(str, options);
    } catch (e) {
        throw new Error(`Invalid path and options: Consult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp/tree/6.x
${e.message}`);
    }
}
;
 //# sourceMappingURL=chunk-JJHTUJGL.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/pathToRegexp.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
 //# sourceMappingURL=pathToRegexp.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/pathToRegexp.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JJHTUJGL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-JJHTUJGL.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$pathToRegexp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/pathToRegexp.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-H5XWF6TY.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthStatus": (()=>AuthStatus),
    "constants": (()=>constants),
    "createAuthenticateRequest": (()=>createAuthenticateRequest),
    "createBackendApiClient": (()=>createBackendApiClient),
    "createClerkRequest": (()=>createClerkRequest),
    "debugRequestState": (()=>debugRequestState),
    "errorThrower": (()=>errorThrower),
    "makeAuthObjectSerializable": (()=>makeAuthObjectSerializable),
    "signedInAuthObject": (()=>signedInAuthObject),
    "signedOutAuthObject": (()=>signedOutAuthObject),
    "verifyToken": (()=>verifyToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-AT3FJU3M.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-5JS2VYLU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$BUNBAIZO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-BUNBAIZO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-G3VP5PJE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$UEY4AZIP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-UEY4AZIP.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3EORDU4Z$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-3EORDU4Z.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$snakecase$2d$keys$40$8$2e$0$2e$1$2f$node_modules$2f$snakecase$2d$keys$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/snakecase-keys@8.0.1/node_modules/snakecase-keys/index.js [app-rsc] (ecmascript)");
// src/tokens/authObjects.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$E3NYSYOB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-E3NYSYOB.mjs [app-rsc] (ecmascript)");
// src/tokens/clerkRequest.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$0$2e$2$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/cookie@1.0.2/node_modules/cookie/dist/index.js [app-rsc] (ecmascript)");
// src/tokens/request.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JJHTUJGL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-JJHTUJGL.mjs [app-rsc] (ecmascript)");
;
;
// src/constants.ts
var API_URL = "https://api.clerk.com";
var API_VERSION = "v1";
var USER_AGENT = `${"@clerk/backend"}@${"1.25.8"}`;
var MAX_CACHE_LAST_UPDATED_AT_SECONDS = 5 * 60;
var SUPPORTED_BAPI_VERSION = "2024-10-01";
var Attributes = {
    AuthToken: "__clerkAuthToken",
    AuthSignature: "__clerkAuthSignature",
    AuthStatus: "__clerkAuthStatus",
    AuthReason: "__clerkAuthReason",
    AuthMessage: "__clerkAuthMessage",
    ClerkUrl: "__clerkUrl"
};
var Cookies = {
    Session: "__session",
    Refresh: "__refresh",
    ClientUat: "__client_uat",
    Handshake: "__clerk_handshake",
    DevBrowser: "__clerk_db_jwt",
    RedirectCount: "__clerk_redirect_count"
};
var QueryParameters = {
    ClerkSynced: "__clerk_synced",
    SuffixedCookies: "suffixed_cookies",
    ClerkRedirectUrl: "__clerk_redirect_url",
    // use the reference to Cookies to indicate that it's the same value
    DevBrowser: Cookies.DevBrowser,
    Handshake: Cookies.Handshake,
    HandshakeHelp: "__clerk_help",
    LegacyDevBrowser: "__dev_session",
    HandshakeReason: "__clerk_hs_reason"
};
var Headers2 = {
    AuthToken: "x-clerk-auth-token",
    AuthSignature: "x-clerk-auth-signature",
    AuthStatus: "x-clerk-auth-status",
    AuthReason: "x-clerk-auth-reason",
    AuthMessage: "x-clerk-auth-message",
    ClerkUrl: "x-clerk-clerk-url",
    EnableDebug: "x-clerk-debug",
    ClerkRequestData: "x-clerk-request-data",
    ClerkRedirectTo: "x-clerk-redirect-to",
    CloudFrontForwardedProto: "cloudfront-forwarded-proto",
    Authorization: "authorization",
    ForwardedPort: "x-forwarded-port",
    ForwardedProto: "x-forwarded-proto",
    ForwardedHost: "x-forwarded-host",
    Accept: "accept",
    Referrer: "referer",
    UserAgent: "user-agent",
    Origin: "origin",
    Host: "host",
    ContentType: "content-type",
    SecFetchDest: "sec-fetch-dest",
    Location: "location",
    CacheControl: "cache-control"
};
var ContentTypes = {
    Json: "application/json"
};
var constants = {
    Attributes,
    Cookies,
    Headers: Headers2,
    ContentTypes,
    QueryParameters
};
// src/util/path.ts
var SEPARATOR = "/";
var MULTIPLE_SEPARATOR_REGEX = new RegExp("(?<!:)" + SEPARATOR + "{1,}", "g");
function joinPaths(...args) {
    return args.filter((p)=>p).join(SEPARATOR).replace(MULTIPLE_SEPARATOR_REGEX, SEPARATOR);
}
// src/api/endpoints/AbstractApi.ts
var AbstractAPI = class {
    constructor(request){
        this.request = request;
    }
    requireId(id) {
        if (!id) {
            throw new Error("A valid resource ID is required.");
        }
    }
};
// src/api/endpoints/AccountlessApplicationsAPI.ts
var basePath = "/accountless_applications";
var AccountlessApplicationAPI = class extends AbstractAPI {
    async createAccountlessApplication() {
        return this.request({
            method: "POST",
            path: basePath
        });
    }
    async completeAccountlessApplicationOnboarding() {
        return this.request({
            method: "POST",
            path: joinPaths(basePath, "complete")
        });
    }
};
// src/api/endpoints/AllowlistIdentifierApi.ts
var basePath2 = "/allowlist_identifiers";
var AllowlistIdentifierAPI = class extends AbstractAPI {
    async getAllowlistIdentifierList() {
        return this.request({
            method: "GET",
            path: basePath2,
            queryParams: {
                paginated: true
            }
        });
    }
    async createAllowlistIdentifier(params) {
        return this.request({
            method: "POST",
            path: basePath2,
            bodyParams: params
        });
    }
    async deleteAllowlistIdentifier(allowlistIdentifierId) {
        this.requireId(allowlistIdentifierId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath2, allowlistIdentifierId)
        });
    }
};
// src/api/endpoints/ClientApi.ts
var basePath3 = "/clients";
var ClientAPI = class extends AbstractAPI {
    async getClientList(params = {}) {
        return this.request({
            method: "GET",
            path: basePath3,
            queryParams: {
                ...params,
                paginated: true
            }
        });
    }
    async getClient(clientId) {
        this.requireId(clientId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath3, clientId)
        });
    }
    verifyClient(token) {
        return this.request({
            method: "POST",
            path: joinPaths(basePath3, "verify"),
            bodyParams: {
                token
            }
        });
    }
};
// src/api/endpoints/DomainApi.ts
var basePath4 = "/domains";
var DomainAPI = class extends AbstractAPI {
    async deleteDomain(id) {
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath4, id)
        });
    }
};
// src/api/endpoints/EmailAddressApi.ts
var basePath5 = "/email_addresses";
var EmailAddressAPI = class extends AbstractAPI {
    async getEmailAddress(emailAddressId) {
        this.requireId(emailAddressId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath5, emailAddressId)
        });
    }
    async createEmailAddress(params) {
        return this.request({
            method: "POST",
            path: basePath5,
            bodyParams: params
        });
    }
    async updateEmailAddress(emailAddressId, params = {}) {
        this.requireId(emailAddressId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath5, emailAddressId),
            bodyParams: params
        });
    }
    async deleteEmailAddress(emailAddressId) {
        this.requireId(emailAddressId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath5, emailAddressId)
        });
    }
};
// src/api/endpoints/InvitationApi.ts
var basePath6 = "/invitations";
var InvitationAPI = class extends AbstractAPI {
    async getInvitationList(params = {}) {
        return this.request({
            method: "GET",
            path: basePath6,
            queryParams: {
                ...params,
                paginated: true
            }
        });
    }
    async createInvitation(params) {
        return this.request({
            method: "POST",
            path: basePath6,
            bodyParams: params
        });
    }
    async revokeInvitation(invitationId) {
        this.requireId(invitationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath6, invitationId, "revoke")
        });
    }
};
// src/api/endpoints/OrganizationApi.ts
var basePath7 = "/organizations";
var OrganizationAPI = class extends AbstractAPI {
    async getOrganizationList(params) {
        return this.request({
            method: "GET",
            path: basePath7,
            queryParams: params
        });
    }
    async createOrganization(params) {
        return this.request({
            method: "POST",
            path: basePath7,
            bodyParams: params
        });
    }
    async getOrganization(params) {
        const { includeMembersCount } = params;
        const organizationIdOrSlug = "organizationId" in params ? params.organizationId : params.slug;
        this.requireId(organizationIdOrSlug);
        return this.request({
            method: "GET",
            path: joinPaths(basePath7, organizationIdOrSlug),
            queryParams: {
                includeMembersCount
            }
        });
    }
    async updateOrganization(organizationId, params) {
        this.requireId(organizationId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath7, organizationId),
            bodyParams: params
        });
    }
    async updateOrganizationLogo(organizationId, params) {
        this.requireId(organizationId);
        const formData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtime"].FormData();
        formData.append("file", params?.file);
        if (params?.uploaderUserId) {
            formData.append("uploader_user_id", params?.uploaderUserId);
        }
        return this.request({
            method: "PUT",
            path: joinPaths(basePath7, organizationId, "logo"),
            formData
        });
    }
    async deleteOrganizationLogo(organizationId) {
        this.requireId(organizationId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath7, organizationId, "logo")
        });
    }
    async updateOrganizationMetadata(organizationId, params) {
        this.requireId(organizationId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath7, organizationId, "metadata"),
            bodyParams: params
        });
    }
    async deleteOrganization(organizationId) {
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath7, organizationId)
        });
    }
    async getOrganizationMembershipList(params) {
        const { organizationId, ...queryParams } = params;
        this.requireId(organizationId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath7, organizationId, "memberships"),
            queryParams
        });
    }
    async createOrganizationMembership(params) {
        const { organizationId, ...bodyParams } = params;
        this.requireId(organizationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath7, organizationId, "memberships"),
            bodyParams
        });
    }
    async updateOrganizationMembership(params) {
        const { organizationId, userId, ...bodyParams } = params;
        this.requireId(organizationId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath7, organizationId, "memberships", userId),
            bodyParams
        });
    }
    async updateOrganizationMembershipMetadata(params) {
        const { organizationId, userId, ...bodyParams } = params;
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath7, organizationId, "memberships", userId, "metadata"),
            bodyParams
        });
    }
    async deleteOrganizationMembership(params) {
        const { organizationId, userId } = params;
        this.requireId(organizationId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath7, organizationId, "memberships", userId)
        });
    }
    async getOrganizationInvitationList(params) {
        const { organizationId, ...queryParams } = params;
        this.requireId(organizationId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath7, organizationId, "invitations"),
            queryParams
        });
    }
    async createOrganizationInvitation(params) {
        const { organizationId, ...bodyParams } = params;
        this.requireId(organizationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath7, organizationId, "invitations"),
            bodyParams
        });
    }
    async getOrganizationInvitation(params) {
        const { organizationId, invitationId } = params;
        this.requireId(organizationId);
        this.requireId(invitationId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath7, organizationId, "invitations", invitationId)
        });
    }
    async revokeOrganizationInvitation(params) {
        const { organizationId, invitationId, ...bodyParams } = params;
        this.requireId(organizationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath7, organizationId, "invitations", invitationId, "revoke"),
            bodyParams
        });
    }
    async getOrganizationDomainList(params) {
        const { organizationId, ...queryParams } = params;
        this.requireId(organizationId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath7, organizationId, "domains"),
            queryParams
        });
    }
    async createOrganizationDomain(params) {
        const { organizationId, ...bodyParams } = params;
        this.requireId(organizationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath7, organizationId, "domains"),
            bodyParams: {
                ...bodyParams,
                verified: bodyParams.verified ?? true
            }
        });
    }
    async updateOrganizationDomain(params) {
        const { organizationId, domainId, ...bodyParams } = params;
        this.requireId(organizationId);
        this.requireId(domainId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath7, organizationId, "domains", domainId),
            bodyParams
        });
    }
    async deleteOrganizationDomain(params) {
        const { organizationId, domainId } = params;
        this.requireId(organizationId);
        this.requireId(domainId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath7, organizationId, "domains", domainId)
        });
    }
};
// src/api/endpoints/PhoneNumberApi.ts
var basePath8 = "/phone_numbers";
var PhoneNumberAPI = class extends AbstractAPI {
    async getPhoneNumber(phoneNumberId) {
        this.requireId(phoneNumberId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath8, phoneNumberId)
        });
    }
    async createPhoneNumber(params) {
        return this.request({
            method: "POST",
            path: basePath8,
            bodyParams: params
        });
    }
    async updatePhoneNumber(phoneNumberId, params = {}) {
        this.requireId(phoneNumberId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath8, phoneNumberId),
            bodyParams: params
        });
    }
    async deletePhoneNumber(phoneNumberId) {
        this.requireId(phoneNumberId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath8, phoneNumberId)
        });
    }
};
// src/api/endpoints/RedirectUrlApi.ts
var basePath9 = "/redirect_urls";
var RedirectUrlAPI = class extends AbstractAPI {
    async getRedirectUrlList() {
        return this.request({
            method: "GET",
            path: basePath9,
            queryParams: {
                paginated: true
            }
        });
    }
    async getRedirectUrl(redirectUrlId) {
        this.requireId(redirectUrlId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath9, redirectUrlId)
        });
    }
    async createRedirectUrl(params) {
        return this.request({
            method: "POST",
            path: basePath9,
            bodyParams: params
        });
    }
    async deleteRedirectUrl(redirectUrlId) {
        this.requireId(redirectUrlId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath9, redirectUrlId)
        });
    }
};
// src/api/endpoints/SessionApi.ts
var basePath10 = "/sessions";
var SessionAPI = class extends AbstractAPI {
    async getSessionList(params = {}) {
        return this.request({
            method: "GET",
            path: basePath10,
            queryParams: {
                ...params,
                paginated: true
            }
        });
    }
    async getSession(sessionId) {
        this.requireId(sessionId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath10, sessionId)
        });
    }
    async revokeSession(sessionId) {
        this.requireId(sessionId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath10, sessionId, "revoke")
        });
    }
    async verifySession(sessionId, token) {
        this.requireId(sessionId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath10, sessionId, "verify"),
            bodyParams: {
                token
            }
        });
    }
    async getToken(sessionId, template) {
        this.requireId(sessionId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath10, sessionId, "tokens", template || "")
        });
    }
    async refreshSession(sessionId, params) {
        this.requireId(sessionId);
        const { suffixed_cookies, ...restParams } = params;
        return this.request({
            method: "POST",
            path: joinPaths(basePath10, sessionId, "refresh"),
            bodyParams: restParams,
            queryParams: {
                suffixed_cookies
            }
        });
    }
};
// src/api/endpoints/SignInTokenApi.ts
var basePath11 = "/sign_in_tokens";
var SignInTokenAPI = class extends AbstractAPI {
    async createSignInToken(params) {
        return this.request({
            method: "POST",
            path: basePath11,
            bodyParams: params
        });
    }
    async revokeSignInToken(signInTokenId) {
        this.requireId(signInTokenId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath11, signInTokenId, "revoke")
        });
    }
};
;
;
;
;
;
;
var errorThrower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3EORDU4Z$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildErrorThrower"])({
    packageName: "@clerk/backend"
});
var { isDevOrStagingUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDevOrStagingUrlCache"])();
// src/api/endpoints/UserApi.ts
var basePath12 = "/users";
var UserAPI = class extends AbstractAPI {
    async getUserList(params = {}) {
        const { limit, offset, orderBy, ...userCountParams } = params;
        const [data, totalCount] = await Promise.all([
            this.request({
                method: "GET",
                path: basePath12,
                queryParams: params
            }),
            this.getCount(userCountParams)
        ]);
        return {
            data,
            totalCount
        };
    }
    async getUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath12, userId)
        });
    }
    async createUser(params) {
        return this.request({
            method: "POST",
            path: basePath12,
            bodyParams: params
        });
    }
    async updateUser(userId, params = {}) {
        this.requireId(userId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath12, userId),
            bodyParams: params
        });
    }
    async updateUserProfileImage(userId, params) {
        this.requireId(userId);
        const formData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtime"].FormData();
        formData.append("file", params?.file);
        return this.request({
            method: "POST",
            path: joinPaths(basePath12, userId, "profile_image"),
            formData
        });
    }
    async updateUserMetadata(userId, params) {
        this.requireId(userId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath12, userId, "metadata"),
            bodyParams: params
        });
    }
    async deleteUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath12, userId)
        });
    }
    async getCount(params = {}) {
        return this.request({
            method: "GET",
            path: joinPaths(basePath12, "count"),
            queryParams: params
        });
    }
    async getUserOauthAccessToken(userId, provider) {
        this.requireId(userId);
        const hasPrefix = provider.startsWith("oauth_");
        const _provider = hasPrefix ? provider : `oauth_${provider}`;
        if (hasPrefix) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$UEY4AZIP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deprecated"])("getUserOauthAccessToken(userId, provider)", "Remove the `oauth_` prefix from the `provider` argument.");
        }
        return this.request({
            method: "GET",
            path: joinPaths(basePath12, userId, "oauth_access_tokens", _provider),
            queryParams: {
                paginated: true
            }
        });
    }
    async disableUserMFA(userId) {
        this.requireId(userId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath12, userId, "mfa")
        });
    }
    async getOrganizationMembershipList(params) {
        const { userId, limit, offset } = params;
        this.requireId(userId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath12, userId, "organization_memberships"),
            queryParams: {
                limit,
                offset
            }
        });
    }
    async verifyPassword(params) {
        const { userId, password } = params;
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath12, userId, "verify_password"),
            bodyParams: {
                password
            }
        });
    }
    async verifyTOTP(params) {
        const { userId, code } = params;
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath12, userId, "verify_totp"),
            bodyParams: {
                code
            }
        });
    }
    async banUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath12, userId, "ban")
        });
    }
    async unbanUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath12, userId, "unban")
        });
    }
    async lockUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath12, userId, "lock")
        });
    }
    async unlockUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath12, userId, "unlock")
        });
    }
    async deleteUserProfileImage(userId) {
        this.requireId(userId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath12, userId, "profile_image")
        });
    }
};
// src/api/endpoints/SamlConnectionApi.ts
var basePath13 = "/saml_connections";
var SamlConnectionAPI = class extends AbstractAPI {
    async getSamlConnectionList(params = {}) {
        return this.request({
            method: "GET",
            path: basePath13,
            queryParams: params
        });
    }
    async createSamlConnection(params) {
        return this.request({
            method: "POST",
            path: basePath13,
            bodyParams: params
        });
    }
    async getSamlConnection(samlConnectionId) {
        this.requireId(samlConnectionId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath13, samlConnectionId)
        });
    }
    async updateSamlConnection(samlConnectionId, params = {}) {
        this.requireId(samlConnectionId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath13, samlConnectionId),
            bodyParams: params
        });
    }
    async deleteSamlConnection(samlConnectionId) {
        this.requireId(samlConnectionId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath13, samlConnectionId)
        });
    }
};
// src/api/endpoints/TestingTokenApi.ts
var basePath14 = "/testing_tokens";
var TestingTokenAPI = class extends AbstractAPI {
    async createTestingToken() {
        return this.request({
            method: "POST",
            path: basePath14
        });
    }
};
;
;
// src/util/optionsAssertions.ts
function assertValidSecretKey(val) {
    if (!val || typeof val !== "string") {
        throw Error("Missing Clerk Secret Key. Go to https://dashboard.clerk.com and get your key for your instance.");
    }
}
function assertValidPublishableKey(val) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePublishableKey"])(val, {
        fatal: true
    });
}
// src/api/resources/AccountlessApplication.ts
var AccountlessApplication = class _AccountlessApplication {
    constructor(publishableKey, secretKey, claimUrl, apiKeysUrl){
        this.publishableKey = publishableKey;
        this.secretKey = secretKey;
        this.claimUrl = claimUrl;
        this.apiKeysUrl = apiKeysUrl;
    }
    static fromJSON(data) {
        return new _AccountlessApplication(data.publishable_key, data.secret_key, data.claim_url, data.api_keys_url);
    }
};
// src/api/resources/AllowlistIdentifier.ts
var AllowlistIdentifier = class _AllowlistIdentifier {
    constructor(id, identifier, createdAt, updatedAt, invitationId){
        this.id = id;
        this.identifier = identifier;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.invitationId = invitationId;
    }
    static fromJSON(data) {
        return new _AllowlistIdentifier(data.id, data.identifier, data.created_at, data.updated_at, data.invitation_id);
    }
};
// src/api/resources/Session.ts
var SessionActivity = class _SessionActivity {
    constructor(id, isMobile, ipAddress, city, country, browserVersion, browserName, deviceType){
        this.id = id;
        this.isMobile = isMobile;
        this.ipAddress = ipAddress;
        this.city = city;
        this.country = country;
        this.browserVersion = browserVersion;
        this.browserName = browserName;
        this.deviceType = deviceType;
    }
    static fromJSON(data) {
        return new _SessionActivity(data.id, data.is_mobile, data.ip_address, data.city, data.country, data.browser_version, data.browser_name, data.device_type);
    }
};
var Session = class _Session {
    constructor(id, clientId, userId, status, lastActiveAt, expireAt, abandonAt, createdAt, updatedAt, lastActiveOrganizationId, latestActivity, actor = null){
        this.id = id;
        this.clientId = clientId;
        this.userId = userId;
        this.status = status;
        this.lastActiveAt = lastActiveAt;
        this.expireAt = expireAt;
        this.abandonAt = abandonAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.lastActiveOrganizationId = lastActiveOrganizationId;
        this.latestActivity = latestActivity;
        this.actor = actor;
    }
    static fromJSON(data) {
        return new _Session(data.id, data.client_id, data.user_id, data.status, data.last_active_at, data.expire_at, data.abandon_at, data.created_at, data.updated_at, data.last_active_organization_id, data.latest_activity && SessionActivity.fromJSON(data.latest_activity), data.actor);
    }
};
// src/api/resources/Client.ts
var Client = class _Client {
    constructor(id, sessionIds, sessions, signInId, signUpId, lastActiveSessionId, createdAt, updatedAt){
        this.id = id;
        this.sessionIds = sessionIds;
        this.sessions = sessions;
        this.signInId = signInId;
        this.signUpId = signUpId;
        this.lastActiveSessionId = lastActiveSessionId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(data) {
        return new _Client(data.id, data.session_ids, data.sessions.map((x)=>Session.fromJSON(x)), data.sign_in_id, data.sign_up_id, data.last_active_session_id, data.created_at, data.updated_at);
    }
};
// src/api/resources/Cookies.ts
var Cookies2 = class _Cookies {
    constructor(cookies){
        this.cookies = cookies;
    }
    static fromJSON(data) {
        return new _Cookies(data.cookies);
    }
};
// src/api/resources/DeletedObject.ts
var DeletedObject = class _DeletedObject {
    constructor(object, id, slug, deleted){
        this.object = object;
        this.id = id;
        this.slug = slug;
        this.deleted = deleted;
    }
    static fromJSON(data) {
        return new _DeletedObject(data.object, data.id || null, data.slug || null, data.deleted);
    }
};
// src/api/resources/Email.ts
var Email = class _Email {
    constructor(id, fromEmailName, emailAddressId, toEmailAddress, subject, body, bodyPlain, status, slug, data, deliveredByClerk){
        this.id = id;
        this.fromEmailName = fromEmailName;
        this.emailAddressId = emailAddressId;
        this.toEmailAddress = toEmailAddress;
        this.subject = subject;
        this.body = body;
        this.bodyPlain = bodyPlain;
        this.status = status;
        this.slug = slug;
        this.data = data;
        this.deliveredByClerk = deliveredByClerk;
    }
    static fromJSON(data) {
        return new _Email(data.id, data.from_email_name, data.email_address_id, data.to_email_address, data.subject, data.body, data.body_plain, data.status, data.slug, data.data, data.delivered_by_clerk);
    }
};
// src/api/resources/IdentificationLink.ts
var IdentificationLink = class _IdentificationLink {
    constructor(id, type){
        this.id = id;
        this.type = type;
    }
    static fromJSON(data) {
        return new _IdentificationLink(data.id, data.type);
    }
};
// src/api/resources/Verification.ts
var Verification = class _Verification {
    constructor(status, strategy, externalVerificationRedirectURL = null, attempts = null, expireAt = null, nonce = null, message = null){
        this.status = status;
        this.strategy = strategy;
        this.externalVerificationRedirectURL = externalVerificationRedirectURL;
        this.attempts = attempts;
        this.expireAt = expireAt;
        this.nonce = nonce;
        this.message = message;
    }
    static fromJSON(data) {
        return new _Verification(data.status, data.strategy, data.external_verification_redirect_url ? new URL(data.external_verification_redirect_url) : null, data.attempts, data.expire_at, data.nonce);
    }
};
// src/api/resources/EmailAddress.ts
var EmailAddress = class _EmailAddress {
    constructor(id, emailAddress, verification, linkedTo){
        this.id = id;
        this.emailAddress = emailAddress;
        this.verification = verification;
        this.linkedTo = linkedTo;
    }
    static fromJSON(data) {
        return new _EmailAddress(data.id, data.email_address, data.verification && Verification.fromJSON(data.verification), data.linked_to.map((link)=>IdentificationLink.fromJSON(link)));
    }
};
// src/api/resources/ExternalAccount.ts
var ExternalAccount = class _ExternalAccount {
    constructor(id, provider, identificationId, externalId, approvedScopes, emailAddress, firstName, lastName, imageUrl, username, publicMetadata = {}, label, verification){
        this.id = id;
        this.provider = provider;
        this.identificationId = identificationId;
        this.externalId = externalId;
        this.approvedScopes = approvedScopes;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
        this.imageUrl = imageUrl;
        this.username = username;
        this.publicMetadata = publicMetadata;
        this.label = label;
        this.verification = verification;
    }
    static fromJSON(data) {
        return new _ExternalAccount(data.id, data.provider, data.identification_id, data.provider_user_id, data.approved_scopes, data.email_address, data.first_name, data.last_name, data.image_url || "", data.username, data.public_metadata, data.label, data.verification && Verification.fromJSON(data.verification));
    }
};
// src/api/resources/Invitation.ts
var Invitation = class _Invitation {
    constructor(id, emailAddress, publicMetadata, createdAt, updatedAt, status, url, revoked){
        this.id = id;
        this.emailAddress = emailAddress;
        this.publicMetadata = publicMetadata;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
        this.url = url;
        this.revoked = revoked;
        this._raw = null;
    }
    get raw() {
        return this._raw;
    }
    static fromJSON(data) {
        const res = new _Invitation(data.id, data.email_address, data.public_metadata, data.created_at, data.updated_at, data.status, data.url, data.revoked);
        res._raw = data;
        return res;
    }
};
// src/api/resources/JSON.ts
var ObjectType = {
    AccountlessApplication: "accountless_application",
    AllowlistIdentifier: "allowlist_identifier",
    Client: "client",
    Cookies: "cookies",
    Email: "email",
    EmailAddress: "email_address",
    ExternalAccount: "external_account",
    FacebookAccount: "facebook_account",
    GoogleAccount: "google_account",
    Invitation: "invitation",
    OauthAccessToken: "oauth_access_token",
    Organization: "organization",
    OrganizationDomain: "organization_domain",
    OrganizationInvitation: "organization_invitation",
    OrganizationMembership: "organization_membership",
    PhoneNumber: "phone_number",
    RedirectUrl: "redirect_url",
    SamlAccount: "saml_account",
    Session: "session",
    SignInAttempt: "sign_in_attempt",
    SignInToken: "sign_in_token",
    SignUpAttempt: "sign_up_attempt",
    SmsMessage: "sms_message",
    User: "user",
    WaitlistEntry: "waitlist_entry",
    Web3Wallet: "web3_wallet",
    Token: "token",
    TotalCount: "total_count",
    TestingToken: "testing_token",
    Role: "role",
    Permission: "permission"
};
// src/api/resources/OauthAccessToken.ts
var OauthAccessToken = class _OauthAccessToken {
    constructor(externalAccountId, provider, token, publicMetadata = {}, label, scopes, tokenSecret){
        this.externalAccountId = externalAccountId;
        this.provider = provider;
        this.token = token;
        this.publicMetadata = publicMetadata;
        this.label = label;
        this.scopes = scopes;
        this.tokenSecret = tokenSecret;
    }
    static fromJSON(data) {
        return new _OauthAccessToken(data.external_account_id, data.provider, data.token, data.public_metadata, data.label || "", data.scopes, data.token_secret);
    }
};
// src/api/resources/Organization.ts
var Organization = class _Organization {
    constructor(id, name, slug, imageUrl, hasImage, createdAt, updatedAt, publicMetadata = {}, privateMetadata = {}, maxAllowedMemberships, adminDeleteEnabled, membersCount, createdBy){
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.imageUrl = imageUrl;
        this.hasImage = hasImage;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this.maxAllowedMemberships = maxAllowedMemberships;
        this.adminDeleteEnabled = adminDeleteEnabled;
        this.membersCount = membersCount;
        this.createdBy = createdBy;
        this._raw = null;
    }
    get raw() {
        return this._raw;
    }
    static fromJSON(data) {
        const res = new _Organization(data.id, data.name, data.slug, data.image_url || "", data.has_image, data.created_at, data.updated_at, data.public_metadata, data.private_metadata, data.max_allowed_memberships, data.admin_delete_enabled, data.members_count, data.created_by);
        res._raw = data;
        return res;
    }
};
// src/api/resources/OrganizationInvitation.ts
var OrganizationInvitation = class _OrganizationInvitation {
    constructor(id, emailAddress, role, organizationId, createdAt, updatedAt, status, publicMetadata = {}, privateMetadata = {}){
        this.id = id;
        this.emailAddress = emailAddress;
        this.role = role;
        this.organizationId = organizationId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this._raw = null;
    }
    get raw() {
        return this._raw;
    }
    static fromJSON(data) {
        const res = new _OrganizationInvitation(data.id, data.email_address, data.role, data.organization_id, data.created_at, data.updated_at, data.status, data.public_metadata, data.private_metadata);
        res._raw = data;
        return res;
    }
};
// src/api/resources/OrganizationMembership.ts
var OrganizationMembership = class _OrganizationMembership {
    constructor(id, role, permissions, publicMetadata = {}, privateMetadata = {}, createdAt, updatedAt, organization, publicUserData){
        this.id = id;
        this.role = role;
        this.permissions = permissions;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.organization = organization;
        this.publicUserData = publicUserData;
        this._raw = null;
    }
    get raw() {
        return this._raw;
    }
    static fromJSON(data) {
        const res = new _OrganizationMembership(data.id, data.role, data.permissions, data.public_metadata, data.private_metadata, data.created_at, data.updated_at, Organization.fromJSON(data.organization), OrganizationMembershipPublicUserData.fromJSON(data.public_user_data));
        res._raw = data;
        return res;
    }
};
var OrganizationMembershipPublicUserData = class _OrganizationMembershipPublicUserData {
    constructor(identifier, firstName, lastName, imageUrl, hasImage, userId){
        this.identifier = identifier;
        this.firstName = firstName;
        this.lastName = lastName;
        this.imageUrl = imageUrl;
        this.hasImage = hasImage;
        this.userId = userId;
    }
    static fromJSON(data) {
        return new _OrganizationMembershipPublicUserData(data.identifier, data.first_name, data.last_name, data.image_url, data.has_image, data.user_id);
    }
};
// src/api/resources/PhoneNumber.ts
var PhoneNumber = class _PhoneNumber {
    constructor(id, phoneNumber, reservedForSecondFactor, defaultSecondFactor, verification, linkedTo){
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.reservedForSecondFactor = reservedForSecondFactor;
        this.defaultSecondFactor = defaultSecondFactor;
        this.verification = verification;
        this.linkedTo = linkedTo;
    }
    static fromJSON(data) {
        return new _PhoneNumber(data.id, data.phone_number, data.reserved_for_second_factor, data.default_second_factor, data.verification && Verification.fromJSON(data.verification), data.linked_to.map((link)=>IdentificationLink.fromJSON(link)));
    }
};
// src/api/resources/RedirectUrl.ts
var RedirectUrl = class _RedirectUrl {
    constructor(id, url, createdAt, updatedAt){
        this.id = id;
        this.url = url;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(data) {
        return new _RedirectUrl(data.id, data.url, data.created_at, data.updated_at);
    }
};
// src/api/resources/SignInTokens.ts
var SignInToken = class _SignInToken {
    constructor(id, userId, token, status, url, createdAt, updatedAt){
        this.id = id;
        this.userId = userId;
        this.token = token;
        this.status = status;
        this.url = url;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(data) {
        return new _SignInToken(data.id, data.user_id, data.token, data.status, data.url, data.created_at, data.updated_at);
    }
};
// src/api/resources/SMSMessage.ts
var SMSMessage = class _SMSMessage {
    constructor(id, fromPhoneNumber, toPhoneNumber, message, status, phoneNumberId, data){
        this.id = id;
        this.fromPhoneNumber = fromPhoneNumber;
        this.toPhoneNumber = toPhoneNumber;
        this.message = message;
        this.status = status;
        this.phoneNumberId = phoneNumberId;
        this.data = data;
    }
    static fromJSON(data) {
        return new _SMSMessage(data.id, data.from_phone_number, data.to_phone_number, data.message, data.status, data.phone_number_id, data.data);
    }
};
// src/api/resources/Token.ts
var Token = class _Token {
    constructor(jwt){
        this.jwt = jwt;
    }
    static fromJSON(data) {
        return new _Token(data.jwt);
    }
};
// src/api/resources/SamlConnection.ts
var SamlAccountConnection = class _SamlAccountConnection {
    constructor(id, name, domain, active, provider, syncUserAttributes, allowSubdomains, allowIdpInitiated, createdAt, updatedAt){
        this.id = id;
        this.name = name;
        this.domain = domain;
        this.active = active;
        this.provider = provider;
        this.syncUserAttributes = syncUserAttributes;
        this.allowSubdomains = allowSubdomains;
        this.allowIdpInitiated = allowIdpInitiated;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(data) {
        return new _SamlAccountConnection(data.id, data.name, data.domain, data.active, data.provider, data.sync_user_attributes, data.allow_subdomains, data.allow_idp_initiated, data.created_at, data.updated_at);
    }
};
// src/api/resources/SamlAccount.ts
var SamlAccount = class _SamlAccount {
    constructor(id, provider, providerUserId, active, emailAddress, firstName, lastName, verification, samlConnection){
        this.id = id;
        this.provider = provider;
        this.providerUserId = providerUserId;
        this.active = active;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
        this.verification = verification;
        this.samlConnection = samlConnection;
    }
    static fromJSON(data) {
        return new _SamlAccount(data.id, data.provider, data.provider_user_id, data.active, data.email_address, data.first_name, data.last_name, data.verification && Verification.fromJSON(data.verification), data.saml_connection && SamlAccountConnection.fromJSON(data.saml_connection));
    }
};
// src/api/resources/Web3Wallet.ts
var Web3Wallet = class _Web3Wallet {
    constructor(id, web3Wallet, verification){
        this.id = id;
        this.web3Wallet = web3Wallet;
        this.verification = verification;
    }
    static fromJSON(data) {
        return new _Web3Wallet(data.id, data.web3_wallet, data.verification && Verification.fromJSON(data.verification));
    }
};
// src/api/resources/User.ts
var User = class _User {
    constructor(id, passwordEnabled, totpEnabled, backupCodeEnabled, twoFactorEnabled, banned, locked, createdAt, updatedAt, imageUrl, hasImage, primaryEmailAddressId, primaryPhoneNumberId, primaryWeb3WalletId, lastSignInAt, externalId, username, firstName, lastName, publicMetadata = {}, privateMetadata = {}, unsafeMetadata = {}, emailAddresses = [], phoneNumbers = [], web3Wallets = [], externalAccounts = [], samlAccounts = [], lastActiveAt, createOrganizationEnabled, createOrganizationsLimit = null, deleteSelfEnabled, legalAcceptedAt){
        this.id = id;
        this.passwordEnabled = passwordEnabled;
        this.totpEnabled = totpEnabled;
        this.backupCodeEnabled = backupCodeEnabled;
        this.twoFactorEnabled = twoFactorEnabled;
        this.banned = banned;
        this.locked = locked;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.imageUrl = imageUrl;
        this.hasImage = hasImage;
        this.primaryEmailAddressId = primaryEmailAddressId;
        this.primaryPhoneNumberId = primaryPhoneNumberId;
        this.primaryWeb3WalletId = primaryWeb3WalletId;
        this.lastSignInAt = lastSignInAt;
        this.externalId = externalId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this.unsafeMetadata = unsafeMetadata;
        this.emailAddresses = emailAddresses;
        this.phoneNumbers = phoneNumbers;
        this.web3Wallets = web3Wallets;
        this.externalAccounts = externalAccounts;
        this.samlAccounts = samlAccounts;
        this.lastActiveAt = lastActiveAt;
        this.createOrganizationEnabled = createOrganizationEnabled;
        this.createOrganizationsLimit = createOrganizationsLimit;
        this.deleteSelfEnabled = deleteSelfEnabled;
        this.legalAcceptedAt = legalAcceptedAt;
        this._raw = null;
    }
    get raw() {
        return this._raw;
    }
    static fromJSON(data) {
        const res = new _User(data.id, data.password_enabled, data.totp_enabled, data.backup_code_enabled, data.two_factor_enabled, data.banned, data.locked, data.created_at, data.updated_at, data.image_url, data.has_image, data.primary_email_address_id, data.primary_phone_number_id, data.primary_web3_wallet_id, data.last_sign_in_at, data.external_id, data.username, data.first_name, data.last_name, data.public_metadata, data.private_metadata, data.unsafe_metadata, (data.email_addresses || []).map((x)=>EmailAddress.fromJSON(x)), (data.phone_numbers || []).map((x)=>PhoneNumber.fromJSON(x)), (data.web3_wallets || []).map((x)=>Web3Wallet.fromJSON(x)), (data.external_accounts || []).map((x)=>ExternalAccount.fromJSON(x)), (data.saml_accounts || []).map((x)=>SamlAccount.fromJSON(x)), data.last_active_at, data.create_organization_enabled, data.create_organizations_limit, data.delete_self_enabled, data.legal_accepted_at);
        res._raw = data;
        return res;
    }
    get primaryEmailAddress() {
        return this.emailAddresses.find(({ id })=>id === this.primaryEmailAddressId) ?? null;
    }
    get primaryPhoneNumber() {
        return this.phoneNumbers.find(({ id })=>id === this.primaryPhoneNumberId) ?? null;
    }
    get primaryWeb3Wallet() {
        return this.web3Wallets.find(({ id })=>id === this.primaryWeb3WalletId) ?? null;
    }
    get fullName() {
        return [
            this.firstName,
            this.lastName
        ].join(" ").trim() || null;
    }
};
// src/api/resources/Deserializer.ts
function deserialize(payload) {
    let data, totalCount;
    if (Array.isArray(payload)) {
        const data2 = payload.map((item)=>jsonToObject(item));
        return {
            data: data2
        };
    } else if (isPaginated(payload)) {
        data = payload.data.map((item)=>jsonToObject(item));
        totalCount = payload.total_count;
        return {
            data,
            totalCount
        };
    } else {
        return {
            data: jsonToObject(payload)
        };
    }
}
function isPaginated(payload) {
    if (!payload || typeof payload !== "object" || !("data" in payload)) {
        return false;
    }
    return Array.isArray(payload.data) && payload.data !== void 0;
}
function getCount(item) {
    return item.total_count;
}
function jsonToObject(item) {
    if (typeof item !== "string" && "object" in item && "deleted" in item) {
        return DeletedObject.fromJSON(item);
    }
    switch(item.object){
        case ObjectType.AccountlessApplication:
            return AccountlessApplication.fromJSON(item);
        case ObjectType.AllowlistIdentifier:
            return AllowlistIdentifier.fromJSON(item);
        case ObjectType.Client:
            return Client.fromJSON(item);
        case ObjectType.Cookies:
            return Cookies2.fromJSON(item);
        case ObjectType.EmailAddress:
            return EmailAddress.fromJSON(item);
        case ObjectType.Email:
            return Email.fromJSON(item);
        case ObjectType.Invitation:
            return Invitation.fromJSON(item);
        case ObjectType.OauthAccessToken:
            return OauthAccessToken.fromJSON(item);
        case ObjectType.Organization:
            return Organization.fromJSON(item);
        case ObjectType.OrganizationInvitation:
            return OrganizationInvitation.fromJSON(item);
        case ObjectType.OrganizationMembership:
            return OrganizationMembership.fromJSON(item);
        case ObjectType.PhoneNumber:
            return PhoneNumber.fromJSON(item);
        case ObjectType.RedirectUrl:
            return RedirectUrl.fromJSON(item);
        case ObjectType.SignInToken:
            return SignInToken.fromJSON(item);
        case ObjectType.Session:
            return Session.fromJSON(item);
        case ObjectType.SmsMessage:
            return SMSMessage.fromJSON(item);
        case ObjectType.Token:
            return Token.fromJSON(item);
        case ObjectType.TotalCount:
            return getCount(item);
        case ObjectType.User:
            return User.fromJSON(item);
        default:
            return item;
    }
}
// src/api/request.ts
function buildRequest(options) {
    const requestFn = async (requestOptions)=>{
        const { secretKey, requireSecretKey = true, apiUrl = API_URL, apiVersion = API_VERSION, userAgent = USER_AGENT } = options;
        const { path, method, queryParams, headerParams, bodyParams, formData } = requestOptions;
        if (requireSecretKey) {
            assertValidSecretKey(secretKey);
        }
        const url = joinPaths(apiUrl, apiVersion, path);
        const finalUrl = new URL(url);
        if (queryParams) {
            const snakecasedQueryParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$snakecase$2d$keys$40$8$2e$0$2e$1$2f$node_modules$2f$snakecase$2d$keys$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
                ...queryParams
            });
            for (const [key, val] of Object.entries(snakecasedQueryParams)){
                if (val) {
                    [
                        val
                    ].flat().forEach((v)=>finalUrl.searchParams.append(key, v));
                }
            }
        }
        const headers = {
            "Clerk-API-Version": SUPPORTED_BAPI_VERSION,
            "User-Agent": userAgent,
            ...headerParams
        };
        if (secretKey) {
            headers.Authorization = `Bearer ${secretKey}`;
        }
        let res;
        try {
            if (formData) {
                res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtime"].fetch(finalUrl.href, {
                    method,
                    headers,
                    body: formData
                });
            } else {
                headers["Content-Type"] = "application/json";
                const hasBody = method !== "GET" && bodyParams && Object.keys(bodyParams).length > 0;
                const body = hasBody ? {
                    body: JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$snakecase$2d$keys$40$8$2e$0$2e$1$2f$node_modules$2f$snakecase$2d$keys$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(bodyParams, {
                        deep: false
                    }))
                } : null;
                res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtime"].fetch(finalUrl.href, {
                    method,
                    headers,
                    ...body
                });
            }
            const isJSONResponse = res?.headers && res.headers?.get(constants.Headers.ContentType) === constants.ContentTypes.Json;
            const responseBody = await (isJSONResponse ? res.json() : res.text());
            if (!res.ok) {
                return {
                    data: null,
                    errors: parseErrors(responseBody),
                    status: res?.status,
                    statusText: res?.statusText,
                    clerkTraceId: getTraceId(responseBody, res?.headers)
                };
            }
            return {
                ...deserialize(responseBody),
                errors: null
            };
        } catch (err) {
            if (err instanceof Error) {
                return {
                    data: null,
                    errors: [
                        {
                            code: "unexpected_error",
                            message: err.message || "Unexpected error"
                        }
                    ],
                    clerkTraceId: getTraceId(err, res?.headers)
                };
            }
            return {
                data: null,
                errors: parseErrors(err),
                status: res?.status,
                statusText: res?.statusText,
                clerkTraceId: getTraceId(err, res?.headers)
            };
        }
    };
    return withLegacyRequestReturn(requestFn);
}
function getTraceId(data, headers) {
    if (data && typeof data === "object" && "clerk_trace_id" in data && typeof data.clerk_trace_id === "string") {
        return data.clerk_trace_id;
    }
    const cfRay = headers?.get("cf-ray");
    return cfRay || "";
}
function parseErrors(data) {
    if (!!data && typeof data === "object" && "errors" in data) {
        const errors = data.errors;
        return errors.length > 0 ? errors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3EORDU4Z$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseError"]) : [];
    }
    return [];
}
function withLegacyRequestReturn(cb) {
    return async (...args)=>{
        const { data, errors, totalCount, status, statusText, clerkTraceId } = await cb(...args);
        if (errors) {
            const error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3EORDU4Z$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClerkAPIResponseError"](statusText || "", {
                data: [],
                status,
                clerkTraceId
            });
            error.errors = errors;
            throw error;
        }
        if (typeof totalCount !== "undefined") {
            return {
                data,
                totalCount
            };
        }
        return data;
    };
}
// src/api/factory.ts
function createBackendApiClient(options) {
    const request = buildRequest(options);
    return {
        __experimental_accountlessApplications: new AccountlessApplicationAPI(buildRequest({
            ...options,
            requireSecretKey: false
        })),
        allowlistIdentifiers: new AllowlistIdentifierAPI(request),
        clients: new ClientAPI(request),
        emailAddresses: new EmailAddressAPI(request),
        invitations: new InvitationAPI(request),
        organizations: new OrganizationAPI(request),
        phoneNumbers: new PhoneNumberAPI(request),
        redirectUrls: new RedirectUrlAPI(request),
        sessions: new SessionAPI(request),
        signInTokens: new SignInTokenAPI(request),
        users: new UserAPI(request),
        domains: new DomainAPI(request),
        samlConnections: new SamlConnectionAPI(request),
        testingTokens: new TestingTokenAPI(request)
    };
}
;
var createDebug = (data)=>{
    return ()=>{
        const res = {
            ...data
        };
        res.secretKey = (res.secretKey || "").substring(0, 7);
        res.jwtKey = (res.jwtKey || "").substring(0, 7);
        return {
            ...res
        };
    };
};
function signedInAuthObject(authenticateContext, sessionToken, sessionClaims) {
    const { act: actor, sid: sessionId, org_id: orgId, org_role: orgRole, org_slug: orgSlug, org_permissions: orgPermissions, sub: userId, fva, sts } = sessionClaims;
    const apiClient = createBackendApiClient(authenticateContext);
    const getToken = createGetToken({
        sessionId,
        sessionToken,
        fetcher: async (...args)=>(await apiClient.sessions.getToken(...args)).jwt
    });
    const factorVerificationAge = fva ?? null;
    const sessionStatus = sts ?? null;
    return {
        actor,
        sessionClaims,
        sessionId,
        sessionStatus,
        userId,
        orgId,
        orgRole,
        orgSlug,
        orgPermissions,
        factorVerificationAge,
        getToken,
        has: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$E3NYSYOB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCheckAuthorization"])({
            orgId,
            orgRole,
            orgPermissions,
            userId,
            factorVerificationAge
        }),
        debug: createDebug({
            ...authenticateContext,
            sessionToken
        })
    };
}
function signedOutAuthObject(debugData) {
    return {
        sessionClaims: null,
        sessionId: null,
        sessionStatus: null,
        userId: null,
        actor: null,
        orgId: null,
        orgRole: null,
        orgSlug: null,
        orgPermissions: null,
        factorVerificationAge: null,
        getToken: ()=>Promise.resolve(null),
        has: ()=>false,
        debug: createDebug(debugData)
    };
}
var makeAuthObjectSerializable = (obj)=>{
    const { debug, getToken, has, ...rest } = obj;
    return rest;
};
var createGetToken = (params)=>{
    const { fetcher, sessionToken, sessionId } = params || {};
    return async (options = {})=>{
        if (!sessionId) {
            return null;
        }
        if (options.template) {
            return fetcher(sessionId, options.template);
        }
        return sessionToken;
    };
};
// src/tokens/authStatus.ts
var AuthStatus = {
    SignedIn: "signed-in",
    SignedOut: "signed-out",
    Handshake: "handshake"
};
var AuthErrorReason = {
    ClientUATWithoutSessionToken: "client-uat-but-no-session-token",
    DevBrowserMissing: "dev-browser-missing",
    DevBrowserSync: "dev-browser-sync",
    PrimaryRespondsToSyncing: "primary-responds-to-syncing",
    SatelliteCookieNeedsSyncing: "satellite-needs-syncing",
    SessionTokenAndUATMissing: "session-token-and-uat-missing",
    SessionTokenMissing: "session-token-missing",
    SessionTokenExpired: "session-token-expired",
    SessionTokenIATBeforeClientUAT: "session-token-iat-before-client-uat",
    SessionTokenNBF: "session-token-nbf",
    SessionTokenIatInTheFuture: "session-token-iat-in-the-future",
    SessionTokenWithoutClientUAT: "session-token-but-no-client-uat",
    ActiveOrganizationMismatch: "active-organization-mismatch",
    UnexpectedError: "unexpected-error"
};
function signedIn(authenticateContext, sessionClaims, headers = new Headers(), token) {
    const authObject = signedInAuthObject(authenticateContext, token, sessionClaims);
    return {
        status: AuthStatus.SignedIn,
        reason: null,
        message: null,
        proxyUrl: authenticateContext.proxyUrl || "",
        publishableKey: authenticateContext.publishableKey || "",
        isSatellite: authenticateContext.isSatellite || false,
        domain: authenticateContext.domain || "",
        signInUrl: authenticateContext.signInUrl || "",
        signUpUrl: authenticateContext.signUpUrl || "",
        afterSignInUrl: authenticateContext.afterSignInUrl || "",
        afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
        isSignedIn: true,
        toAuth: ()=>authObject,
        headers,
        token
    };
}
function signedOut(authenticateContext, reason, message = "", headers = new Headers()) {
    return withDebugHeaders({
        status: AuthStatus.SignedOut,
        reason,
        message,
        proxyUrl: authenticateContext.proxyUrl || "",
        publishableKey: authenticateContext.publishableKey || "",
        isSatellite: authenticateContext.isSatellite || false,
        domain: authenticateContext.domain || "",
        signInUrl: authenticateContext.signInUrl || "",
        signUpUrl: authenticateContext.signUpUrl || "",
        afterSignInUrl: authenticateContext.afterSignInUrl || "",
        afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
        isSignedIn: false,
        headers,
        toAuth: ()=>signedOutAuthObject({
                ...authenticateContext,
                status: AuthStatus.SignedOut,
                reason,
                message
            }),
        token: null
    });
}
function handshake(authenticateContext, reason, message = "", headers) {
    return withDebugHeaders({
        status: AuthStatus.Handshake,
        reason,
        message,
        publishableKey: authenticateContext.publishableKey || "",
        isSatellite: authenticateContext.isSatellite || false,
        domain: authenticateContext.domain || "",
        proxyUrl: authenticateContext.proxyUrl || "",
        signInUrl: authenticateContext.signInUrl || "",
        signUpUrl: authenticateContext.signUpUrl || "",
        afterSignInUrl: authenticateContext.afterSignInUrl || "",
        afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
        isSignedIn: false,
        headers,
        toAuth: ()=>null,
        token: null
    });
}
var withDebugHeaders = (requestState)=>{
    const headers = new Headers(requestState.headers || {});
    if (requestState.message) {
        try {
            headers.set(constants.Headers.AuthMessage, requestState.message);
        } catch  {}
    }
    if (requestState.reason) {
        try {
            headers.set(constants.Headers.AuthReason, requestState.reason);
        } catch  {}
    }
    if (requestState.status) {
        try {
            headers.set(constants.Headers.AuthStatus, requestState.status);
        } catch  {}
    }
    requestState.headers = headers;
    return requestState;
};
;
// src/tokens/clerkUrl.ts
var ClerkUrl = class extends URL {
    isCrossOrigin(other) {
        return this.origin !== new URL(other.toString()).origin;
    }
};
var createClerkUrl = (...args)=>{
    return new ClerkUrl(...args);
};
// src/tokens/clerkRequest.ts
var ClerkRequest = class extends Request {
    constructor(input, init){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        super(url, init || typeof input === "string" ? void 0 : input);
        this.clerkUrl = this.deriveUrlFromHeaders(this);
        this.cookies = this.parseCookies(this);
    }
    toJSON() {
        return {
            url: this.clerkUrl.href,
            method: this.method,
            headers: JSON.stringify(Object.fromEntries(this.headers)),
            clerkUrl: this.clerkUrl.toString(),
            cookies: JSON.stringify(Object.fromEntries(this.cookies))
        };
    }
    /**
   * Used to fix request.url using the x-forwarded-* headers
   * TODO add detailed description of the issues this solves
   */ deriveUrlFromHeaders(req) {
        const initialUrl = new URL(req.url);
        const forwardedProto = req.headers.get(constants.Headers.ForwardedProto);
        const forwardedHost = req.headers.get(constants.Headers.ForwardedHost);
        const host = req.headers.get(constants.Headers.Host);
        const protocol = initialUrl.protocol;
        const resolvedHost = this.getFirstValueFromHeader(forwardedHost) ?? host;
        const resolvedProtocol = this.getFirstValueFromHeader(forwardedProto) ?? protocol?.replace(/[:/]/, "");
        const origin = resolvedHost && resolvedProtocol ? `${resolvedProtocol}://${resolvedHost}` : initialUrl.origin;
        if (origin === initialUrl.origin) {
            return createClerkUrl(initialUrl);
        }
        return createClerkUrl(initialUrl.pathname + initialUrl.search, origin);
    }
    getFirstValueFromHeader(value) {
        return value?.split(",")[0];
    }
    parseCookies(req) {
        const cookiesRecord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$0$2e$2$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(this.decodeCookieValue(req.headers.get("cookie") || ""));
        return new Map(Object.entries(cookiesRecord));
    }
    decodeCookieValue(str) {
        return str ? str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : str;
    }
};
var createClerkRequest = (...args)=>{
    return args[0] instanceof ClerkRequest ? args[0] : new ClerkRequest(...args);
};
// src/tokens/keys.ts
var cache = {};
var lastUpdatedAt = 0;
function getFromCache(kid) {
    return cache[kid];
}
function getCacheValues() {
    return Object.values(cache);
}
function setInCache(jwk, shouldExpire = true) {
    cache[jwk.kid] = jwk;
    lastUpdatedAt = shouldExpire ? Date.now() : -1;
}
var LocalJwkKid = "local";
var PEM_HEADER = "-----BEGIN PUBLIC KEY-----";
var PEM_TRAILER = "-----END PUBLIC KEY-----";
var RSA_PREFIX = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA";
var RSA_SUFFIX = "IDAQAB";
function loadClerkJWKFromLocal(localKey) {
    if (!getFromCache(LocalJwkKid)) {
        if (!localKey) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].SetClerkJWTKey,
                message: "Missing local JWK.",
                reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].LocalJWKMissing
            });
        }
        const modulus = localKey.replace(/\r\n|\n|\r/g, "").replace(PEM_HEADER, "").replace(PEM_TRAILER, "").replace(RSA_PREFIX, "").replace(RSA_SUFFIX, "").replace(/\+/g, "-").replace(/\//g, "_");
        setInCache({
            kid: "local",
            kty: "RSA",
            alg: "RS256",
            n: modulus,
            e: "AQAB"
        }, false);
    }
    return getFromCache(LocalJwkKid);
}
async function loadClerkJWKFromRemote({ secretKey, apiUrl = API_URL, apiVersion = API_VERSION, kid, skipJwksCache }) {
    if (skipJwksCache || cacheHasExpired() || !getFromCache(kid)) {
        if (!secretKey) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].ContactSupport,
                message: "Failed to load JWKS from Clerk Backend or Frontend API.",
                reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].RemoteJWKFailedToLoad
            });
        }
        const fetcher = ()=>fetchJWKSFromBAPI(apiUrl, secretKey, apiVersion);
        const { keys } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$BUNBAIZO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["retry"])(fetcher);
        if (!keys || !keys.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].ContactSupport,
                message: "The JWKS endpoint did not contain any signing keys. Contact support@clerk.com.",
                reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].RemoteJWKFailedToLoad
            });
        }
        keys.forEach((key)=>setInCache(key));
    }
    const jwk = getFromCache(kid);
    if (!jwk) {
        const cacheValues = getCacheValues();
        const jwkKeys = cacheValues.map((jwk2)=>jwk2.kid).sort().join(", ");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: `Go to your Dashboard and validate your secret and public keys are correct. ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].ContactSupport} if the issue persists.`,
            message: `Unable to find a signing key in JWKS that matches the kid='${kid}' of the provided session token. Please make sure that the __session cookie or the HTTP authorization header contain a Clerk-generated session JWT. The following kid is available: ${jwkKeys}`,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].JWKKidMismatch
        });
    }
    return jwk;
}
async function fetchJWKSFromBAPI(apiUrl, key, apiVersion) {
    if (!key) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].SetClerkSecretKey,
            message: "Missing Clerk Secret Key or API Key. Go to https://dashboard.clerk.com and get your key for your instance.",
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].RemoteJWKFailedToLoad
        });
    }
    const url = new URL(apiUrl);
    url.pathname = joinPaths(url.pathname, apiVersion, "/jwks");
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtime"].fetch(url.href, {
        headers: {
            Authorization: `Bearer ${key}`,
            "Clerk-API-Version": SUPPORTED_BAPI_VERSION,
            "Content-Type": "application/json",
            "User-Agent": USER_AGENT
        }
    });
    if (!response.ok) {
        const json = await response.json();
        const invalidSecretKeyError = getErrorObjectByCode(json?.errors, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorCode"].InvalidSecretKey);
        if (invalidSecretKeyError) {
            const reason = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].InvalidSecretKey;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].ContactSupport,
                message: invalidSecretKeyError.message,
                reason
            });
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].ContactSupport,
            message: `Error loading Clerk JWKS from ${url.href} with code=${response.status}`,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].RemoteJWKFailedToLoad
        });
    }
    return response.json();
}
function cacheHasExpired() {
    if (lastUpdatedAt === -1) {
        return false;
    }
    const isExpired = Date.now() - lastUpdatedAt >= MAX_CACHE_LAST_UPDATED_AT_SECONDS * 1e3;
    if (isExpired) {
        cache = {};
    }
    return isExpired;
}
var getErrorObjectByCode = (errors, code)=>{
    if (!errors) {
        return null;
    }
    return errors.find((err)=>err.code === code);
};
// src/tokens/verify.ts
async function verifyToken(token, options) {
    const { data: decodedResult, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(token);
    if (errors) {
        return {
            errors
        };
    }
    const { header } = decodedResult;
    const { kid } = header;
    try {
        let key;
        if (options.jwtKey) {
            key = loadClerkJWKFromLocal(options.jwtKey);
        } else if (options.secretKey) {
            key = await loadClerkJWKFromRemote({
                ...options,
                kid
            });
        } else {
            return {
                errors: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                        action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].SetClerkJWTKey,
                        message: "Failed to resolve JWK during verification.",
                        reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].JWKFailedToResolve
                    })
                ]
            };
        }
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyJwt"])(token, {
            ...options,
            key
        });
    } catch (error) {
        return {
            errors: [
                error
            ]
        };
    }
}
;
// src/tokens/authenticateContext.ts
var AuthenticateContext = class {
    constructor(cookieSuffix, clerkRequest, options){
        this.cookieSuffix = cookieSuffix;
        this.clerkRequest = clerkRequest;
        this.initPublishableKeyValues(options);
        this.initHeaderValues();
        this.initCookieValues();
        this.initHandshakeValues();
        Object.assign(this, options);
        this.clerkUrl = this.clerkRequest.clerkUrl;
    }
    /**
   * Retrieves the session token from either the cookie or the header.
   *
   * @returns {string | undefined} The session token if available, otherwise undefined.
   */ get sessionToken() {
        return this.sessionTokenInCookie || this.sessionTokenInHeader;
    }
    usesSuffixedCookies() {
        const suffixedClientUat = this.getSuffixedCookie(constants.Cookies.ClientUat);
        const clientUat = this.getCookie(constants.Cookies.ClientUat);
        const suffixedSession = this.getSuffixedCookie(constants.Cookies.Session) || "";
        const session = this.getCookie(constants.Cookies.Session) || "";
        if (session && !this.tokenHasIssuer(session)) {
            return false;
        }
        if (session && !this.tokenBelongsToInstance(session)) {
            return true;
        }
        if (!suffixedClientUat && !suffixedSession) {
            return false;
        }
        const { data: sessionData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(session);
        const sessionIat = sessionData?.payload.iat || 0;
        const { data: suffixedSessionData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(suffixedSession);
        const suffixedSessionIat = suffixedSessionData?.payload.iat || 0;
        if (suffixedClientUat !== "0" && clientUat !== "0" && sessionIat > suffixedSessionIat) {
            return false;
        }
        if (suffixedClientUat === "0" && clientUat !== "0") {
            return false;
        }
        if (this.instanceType !== "production") {
            const isSuffixedSessionExpired = this.sessionExpired(suffixedSessionData);
            if (suffixedClientUat !== "0" && clientUat === "0" && isSuffixedSessionExpired) {
                return false;
            }
        }
        if (!suffixedClientUat && suffixedSession) {
            return false;
        }
        return true;
    }
    initPublishableKeyValues(options) {
        assertValidPublishableKey(options.publishableKey);
        this.publishableKey = options.publishableKey;
        const pk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePublishableKey"])(this.publishableKey, {
            fatal: true,
            proxyUrl: options.proxyUrl,
            domain: options.domain
        });
        this.instanceType = pk.instanceType;
        this.frontendApi = pk.frontendApi;
    }
    initHeaderValues() {
        this.sessionTokenInHeader = this.parseAuthorizationHeader(this.getHeader(constants.Headers.Authorization));
        this.origin = this.getHeader(constants.Headers.Origin);
        this.host = this.getHeader(constants.Headers.Host);
        this.forwardedHost = this.getHeader(constants.Headers.ForwardedHost);
        this.forwardedProto = this.getHeader(constants.Headers.CloudFrontForwardedProto) || this.getHeader(constants.Headers.ForwardedProto);
        this.referrer = this.getHeader(constants.Headers.Referrer);
        this.userAgent = this.getHeader(constants.Headers.UserAgent);
        this.secFetchDest = this.getHeader(constants.Headers.SecFetchDest);
        this.accept = this.getHeader(constants.Headers.Accept);
    }
    initCookieValues() {
        this.sessionTokenInCookie = this.getSuffixedOrUnSuffixedCookie(constants.Cookies.Session);
        this.refreshTokenInCookie = this.getSuffixedCookie(constants.Cookies.Refresh);
        this.clientUat = Number.parseInt(this.getSuffixedOrUnSuffixedCookie(constants.Cookies.ClientUat) || "") || 0;
    }
    initHandshakeValues() {
        this.devBrowserToken = this.getQueryParam(constants.QueryParameters.DevBrowser) || this.getSuffixedOrUnSuffixedCookie(constants.Cookies.DevBrowser);
        this.handshakeToken = this.getQueryParam(constants.QueryParameters.Handshake) || this.getCookie(constants.Cookies.Handshake);
        this.handshakeRedirectLoopCounter = Number(this.getCookie(constants.Cookies.RedirectCount)) || 0;
    }
    getQueryParam(name) {
        return this.clerkRequest.clerkUrl.searchParams.get(name);
    }
    getHeader(name) {
        return this.clerkRequest.headers.get(name) || void 0;
    }
    getCookie(name) {
        return this.clerkRequest.cookies.get(name) || void 0;
    }
    getSuffixedCookie(name) {
        return this.getCookie((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSuffixedCookieName"])(name, this.cookieSuffix)) || void 0;
    }
    getSuffixedOrUnSuffixedCookie(cookieName) {
        if (this.usesSuffixedCookies()) {
            return this.getSuffixedCookie(cookieName);
        }
        return this.getCookie(cookieName);
    }
    parseAuthorizationHeader(authorizationHeader) {
        if (!authorizationHeader) {
            return void 0;
        }
        const [scheme, token] = authorizationHeader.split(" ", 2);
        if (!token) {
            return scheme;
        }
        if (scheme === "Bearer") {
            return token;
        }
        return void 0;
    }
    tokenHasIssuer(token) {
        const { data, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(token);
        if (errors) {
            return false;
        }
        return !!data.payload.iss;
    }
    tokenBelongsToInstance(token) {
        if (!token) {
            return false;
        }
        const { data, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(token);
        if (errors) {
            return false;
        }
        const tokenIssuer = data.payload.iss.replace(/https?:\/\//gi, "");
        return this.frontendApi === tokenIssuer;
    }
    sessionExpired(jwt) {
        return !!jwt && jwt?.payload.exp <= Date.now() / 1e3 >> 0;
    }
};
var createAuthenticateContext = async (clerkRequest, options)=>{
    const cookieSuffix = options.publishableKey ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookieSuffix"])(options.publishableKey, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtime"].crypto.subtle) : "";
    return new AuthenticateContext(cookieSuffix, clerkRequest, options);
};
// src/tokens/cookie.ts
var getCookieName = (cookieDirective)=>{
    return cookieDirective.split(";")[0]?.split("=")[0];
};
var getCookieValue = (cookieDirective)=>{
    return cookieDirective.split(";")[0]?.split("=")[1];
};
// src/tokens/handshake.ts
async function verifyHandshakeJwt(token, { key }) {
    const { data: decoded, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(token);
    if (errors) {
        throw errors[0];
    }
    const { header, payload } = decoded;
    const { typ, alg } = header;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertHeaderType"])(typ);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertHeaderAlgorithm"])(alg);
    const { data: signatureValid, errors: signatureErrors } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasValidSignature"])(decoded, key);
    if (signatureErrors) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
            message: `Error verifying handshake token. ${signatureErrors[0]}`
        });
    }
    if (!signatureValid) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalidSignature,
            message: "Handshake signature is invalid."
        });
    }
    return payload;
}
async function verifyHandshakeToken(token, options) {
    const { secretKey, apiUrl, apiVersion, jwksCacheTtlInMs, jwtKey, skipJwksCache } = options;
    const { data, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(token);
    if (errors) {
        throw errors[0];
    }
    const { kid } = data.header;
    let key;
    if (jwtKey) {
        key = loadClerkJWKFromLocal(jwtKey);
    } else if (secretKey) {
        key = await loadClerkJWKFromRemote({
            secretKey,
            apiUrl,
            apiVersion,
            kid,
            jwksCacheTtlInMs,
            skipJwksCache
        });
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].SetClerkJWTKey,
            message: "Failed to resolve JWK during handshake verification.",
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].JWKFailedToResolve
        });
    }
    return await verifyHandshakeJwt(token, {
        key
    });
}
// src/tokens/request.ts
var RefreshTokenErrorReason = {
    NonEligibleNoCookie: "non-eligible-no-refresh-cookie",
    NonEligibleNonGet: "non-eligible-non-get",
    InvalidSessionToken: "invalid-session-token",
    MissingApiClient: "missing-api-client",
    MissingSessionToken: "missing-session-token",
    MissingRefreshToken: "missing-refresh-token",
    ExpiredSessionTokenDecodeFailed: "expired-session-token-decode-failed",
    ExpiredSessionTokenMissingSidClaim: "expired-session-token-missing-sid-claim",
    FetchError: "fetch-error",
    UnexpectedSDKError: "unexpected-sdk-error",
    UnexpectedBAPIError: "unexpected-bapi-error"
};
function assertSignInUrlExists(signInUrl, key) {
    if (!signInUrl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopmentFromSecretKey"])(key)) {
        throw new Error(`Missing signInUrl. Pass a signInUrl for dev instances if an app is satellite`);
    }
}
function assertProxyUrlOrDomain(proxyUrlOrDomain) {
    if (!proxyUrlOrDomain) {
        throw new Error(`Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl`);
    }
}
function assertSignInUrlFormatAndOrigin(_signInUrl, origin) {
    let signInUrl;
    try {
        signInUrl = new URL(_signInUrl);
    } catch  {
        throw new Error(`The signInUrl needs to have a absolute url format.`);
    }
    if (signInUrl.origin === origin) {
        throw new Error(`The signInUrl needs to be on a different origin than your satellite application.`);
    }
}
function isRequestEligibleForHandshake(authenticateContext) {
    const { accept, secFetchDest } = authenticateContext;
    if (secFetchDest === "document" || secFetchDest === "iframe") {
        return true;
    }
    if (!secFetchDest && accept?.startsWith("text/html")) {
        return true;
    }
    return false;
}
function isRequestEligibleForRefresh(err, authenticateContext, request) {
    return err.reason === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenExpired && !!authenticateContext.refreshTokenInCookie && request.method === "GET";
}
async function authenticateRequest(request, options) {
    const authenticateContext = await createAuthenticateContext(createClerkRequest(request), options);
    assertValidSecretKey(authenticateContext.secretKey);
    if (authenticateContext.isSatellite) {
        assertSignInUrlExists(authenticateContext.signInUrl, authenticateContext.secretKey);
        if (authenticateContext.signInUrl && authenticateContext.origin) {
            assertSignInUrlFormatAndOrigin(authenticateContext.signInUrl, authenticateContext.origin);
        }
        assertProxyUrlOrDomain(authenticateContext.proxyUrl || authenticateContext.domain);
    }
    const organizationSyncTargetMatchers = computeOrganizationSyncTargetMatchers(options.organizationSyncOptions);
    function removeDevBrowserFromURL(url) {
        const updatedURL = new URL(url);
        updatedURL.searchParams.delete(constants.QueryParameters.DevBrowser);
        updatedURL.searchParams.delete(constants.QueryParameters.LegacyDevBrowser);
        return updatedURL;
    }
    function buildRedirectToHandshake({ handshakeReason }) {
        const redirectUrl = removeDevBrowserFromURL(authenticateContext.clerkUrl);
        const frontendApiNoProtocol = authenticateContext.frontendApi.replace(/http(s)?:\/\//, "");
        const url = new URL(`https://${frontendApiNoProtocol}/v1/client/handshake`);
        url.searchParams.append("redirect_url", redirectUrl?.href || "");
        url.searchParams.append(constants.QueryParameters.SuffixedCookies, authenticateContext.usesSuffixedCookies().toString());
        url.searchParams.append(constants.QueryParameters.HandshakeReason, handshakeReason);
        if (authenticateContext.instanceType === "development" && authenticateContext.devBrowserToken) {
            url.searchParams.append(constants.QueryParameters.DevBrowser, authenticateContext.devBrowserToken);
        }
        const toActivate = getOrganizationSyncTarget(authenticateContext.clerkUrl, options.organizationSyncOptions, organizationSyncTargetMatchers);
        if (toActivate) {
            const params = getOrganizationSyncQueryParams(toActivate);
            params.forEach((value, key)=>{
                url.searchParams.append(key, value);
            });
        }
        return new Headers({
            [constants.Headers.Location]: url.href
        });
    }
    async function resolveHandshake() {
        const headers = new Headers({
            "Access-Control-Allow-Origin": "null",
            "Access-Control-Allow-Credentials": "true"
        });
        const handshakePayload = await verifyHandshakeToken(authenticateContext.handshakeToken, authenticateContext);
        const cookiesToSet = handshakePayload.handshake;
        let sessionToken = "";
        cookiesToSet.forEach((x)=>{
            headers.append("Set-Cookie", x);
            if (getCookieName(x).startsWith(constants.Cookies.Session)) {
                sessionToken = getCookieValue(x);
            }
        });
        if (authenticateContext.instanceType === "development") {
            const newUrl = new URL(authenticateContext.clerkUrl);
            newUrl.searchParams.delete(constants.QueryParameters.Handshake);
            newUrl.searchParams.delete(constants.QueryParameters.HandshakeHelp);
            headers.append(constants.Headers.Location, newUrl.toString());
            headers.set(constants.Headers.CacheControl, "no-store");
        }
        if (sessionToken === "") {
            return signedOut(authenticateContext, AuthErrorReason.SessionTokenMissing, "", headers);
        }
        const { data, errors: [error] = [] } = await verifyToken(sessionToken, authenticateContext);
        if (data) {
            return signedIn(authenticateContext, data, headers, sessionToken);
        }
        if (authenticateContext.instanceType === "development" && (error?.reason === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenExpired || error?.reason === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenNotActiveYet || error?.reason === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenIatInTheFuture)) {
            error.tokenCarrier = "cookie";
            console.error(`Clerk: Clock skew detected. This usually means that your system clock is inaccurate. Clerk will attempt to account for the clock skew in development.

To resolve this issue, make sure your system's clock is set to the correct time (e.g. turn off and on automatic time synchronization).

---

${error.getFullMessage()}`);
            const { data: retryResult, errors: [retryError] = [] } = await verifyToken(sessionToken, {
                ...authenticateContext,
                clockSkewInMs: 864e5
            });
            if (retryResult) {
                return signedIn(authenticateContext, retryResult, headers, sessionToken);
            }
            throw new Error(retryError?.message || "Clerk: Handshake retry failed.");
        }
        throw new Error(error?.message || "Clerk: Handshake failed.");
    }
    async function refreshToken(authenticateContext2) {
        if (!options.apiClient) {
            return {
                data: null,
                error: {
                    message: "An apiClient is needed to perform token refresh.",
                    cause: {
                        reason: RefreshTokenErrorReason.MissingApiClient
                    }
                }
            };
        }
        const { sessionToken: expiredSessionToken, refreshTokenInCookie: refreshToken2 } = authenticateContext2;
        if (!expiredSessionToken) {
            return {
                data: null,
                error: {
                    message: "Session token must be provided.",
                    cause: {
                        reason: RefreshTokenErrorReason.MissingSessionToken
                    }
                }
            };
        }
        if (!refreshToken2) {
            return {
                data: null,
                error: {
                    message: "Refresh token must be provided.",
                    cause: {
                        reason: RefreshTokenErrorReason.MissingRefreshToken
                    }
                }
            };
        }
        const { data: decodeResult, errors: decodedErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(expiredSessionToken);
        if (!decodeResult || decodedErrors) {
            return {
                data: null,
                error: {
                    message: "Unable to decode the expired session token.",
                    cause: {
                        reason: RefreshTokenErrorReason.ExpiredSessionTokenDecodeFailed,
                        errors: decodedErrors
                    }
                }
            };
        }
        if (!decodeResult?.payload?.sid) {
            return {
                data: null,
                error: {
                    message: "Expired session token is missing the `sid` claim.",
                    cause: {
                        reason: RefreshTokenErrorReason.ExpiredSessionTokenMissingSidClaim
                    }
                }
            };
        }
        try {
            const response = await options.apiClient.sessions.refreshSession(decodeResult.payload.sid, {
                format: "cookie",
                suffixed_cookies: authenticateContext2.usesSuffixedCookies(),
                expired_token: expiredSessionToken || "",
                refresh_token: refreshToken2 || "",
                request_origin: authenticateContext2.clerkUrl.origin,
                // The refresh endpoint expects headers as Record<string, string[]>, so we need to transform it.
                request_headers: Object.fromEntries(Array.from(request.headers.entries()).map(([k, v])=>[
                        k,
                        [
                            v
                        ]
                    ]))
            });
            return {
                data: response.cookies,
                error: null
            };
        } catch (err) {
            if (err?.errors?.length) {
                if (err.errors[0].code === "unexpected_error") {
                    return {
                        data: null,
                        error: {
                            message: `Fetch unexpected error`,
                            cause: {
                                reason: RefreshTokenErrorReason.FetchError,
                                errors: err.errors
                            }
                        }
                    };
                }
                return {
                    data: null,
                    error: {
                        message: err.errors[0].code,
                        cause: {
                            reason: err.errors[0].code,
                            errors: err.errors
                        }
                    }
                };
            } else {
                return {
                    data: null,
                    error: {
                        message: `Unexpected Server/BAPI error`,
                        cause: {
                            reason: RefreshTokenErrorReason.UnexpectedBAPIError,
                            errors: [
                                err
                            ]
                        }
                    }
                };
            }
        }
    }
    async function attemptRefresh(authenticateContext2) {
        const { data: cookiesToSet, error } = await refreshToken(authenticateContext2);
        if (!cookiesToSet || cookiesToSet.length === 0) {
            return {
                data: null,
                error
            };
        }
        const headers = new Headers();
        let sessionToken = "";
        cookiesToSet.forEach((x)=>{
            headers.append("Set-Cookie", x);
            if (getCookieName(x).startsWith(constants.Cookies.Session)) {
                sessionToken = getCookieValue(x);
            }
        });
        const { data: jwtPayload, errors } = await verifyToken(sessionToken, authenticateContext2);
        if (errors) {
            return {
                data: null,
                error: {
                    message: `Clerk: unable to verify refreshed session token.`,
                    cause: {
                        reason: RefreshTokenErrorReason.InvalidSessionToken,
                        errors
                    }
                }
            };
        }
        return {
            data: {
                jwtPayload,
                sessionToken,
                headers
            },
            error: null
        };
    }
    function handleMaybeHandshakeStatus(authenticateContext2, reason, message, headers) {
        if (isRequestEligibleForHandshake(authenticateContext2)) {
            const handshakeHeaders = headers ?? buildRedirectToHandshake({
                handshakeReason: reason
            });
            if (handshakeHeaders.get(constants.Headers.Location)) {
                handshakeHeaders.set(constants.Headers.CacheControl, "no-store");
            }
            const isRedirectLoop = setHandshakeInfiniteRedirectionLoopHeaders(handshakeHeaders);
            if (isRedirectLoop) {
                const msg = `Clerk: Refreshing the session token resulted in an infinite redirect loop. This usually means that your Clerk instance keys do not match - make sure to copy the correct publishable and secret keys from the Clerk dashboard.`;
                console.log(msg);
                return signedOut(authenticateContext2, reason, message);
            }
            return handshake(authenticateContext2, reason, message, handshakeHeaders);
        }
        return signedOut(authenticateContext2, reason, message);
    }
    function handleMaybeOrganizationSyncHandshake(authenticateContext2, auth) {
        const organizationSyncTarget = getOrganizationSyncTarget(authenticateContext2.clerkUrl, options.organizationSyncOptions, organizationSyncTargetMatchers);
        if (!organizationSyncTarget) {
            return null;
        }
        let mustActivate = false;
        if (organizationSyncTarget.type === "organization") {
            if (organizationSyncTarget.organizationSlug && organizationSyncTarget.organizationSlug !== auth.orgSlug) {
                mustActivate = true;
            }
            if (organizationSyncTarget.organizationId && organizationSyncTarget.organizationId !== auth.orgId) {
                mustActivate = true;
            }
        }
        if (organizationSyncTarget.type === "personalAccount" && auth.orgId) {
            mustActivate = true;
        }
        if (!mustActivate) {
            return null;
        }
        if (authenticateContext2.handshakeRedirectLoopCounter > 0) {
            console.warn("Clerk: Organization activation handshake loop detected. This is likely due to an invalid organization ID or slug. Skipping organization activation.");
            return null;
        }
        const handshakeState = handleMaybeHandshakeStatus(authenticateContext2, AuthErrorReason.ActiveOrganizationMismatch, "");
        if (handshakeState.status !== "handshake") {
            return null;
        }
        return handshakeState;
    }
    async function authenticateRequestWithTokenInHeader() {
        const { sessionTokenInHeader } = authenticateContext;
        try {
            const { data, errors } = await verifyToken(sessionTokenInHeader, authenticateContext);
            if (errors) {
                throw errors[0];
            }
            return signedIn(authenticateContext, data, void 0, sessionTokenInHeader);
        } catch (err) {
            return handleError(err, "header");
        }
    }
    function setHandshakeInfiniteRedirectionLoopHeaders(headers) {
        if (authenticateContext.handshakeRedirectLoopCounter === 3) {
            return true;
        }
        const newCounterValue = authenticateContext.handshakeRedirectLoopCounter + 1;
        const cookieName = constants.Cookies.RedirectCount;
        headers.append("Set-Cookie", `${cookieName}=${newCounterValue}; SameSite=Lax; HttpOnly; Max-Age=3`);
        return false;
    }
    function handleHandshakeTokenVerificationErrorInDevelopment(error) {
        if (error.reason === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalidSignature) {
            const msg = `Clerk: Handshake token verification failed due to an invalid signature. If you have switched Clerk keys locally, clear your cookies and try again.`;
            throw new Error(msg);
        }
        throw new Error(`Clerk: Handshake token verification failed: ${error.getFullMessage()}.`);
    }
    async function authenticateRequestWithTokenInCookie() {
        const hasActiveClient = authenticateContext.clientUat;
        const hasSessionToken = !!authenticateContext.sessionTokenInCookie;
        const hasDevBrowserToken = !!authenticateContext.devBrowserToken;
        if (authenticateContext.handshakeToken) {
            try {
                return await resolveHandshake();
            } catch (error) {
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"] && authenticateContext.instanceType === "development") {
                    handleHandshakeTokenVerificationErrorInDevelopment(error);
                } else {
                    console.error("Clerk: unable to resolve handshake:", error);
                }
            }
        }
        if (authenticateContext.instanceType === "development" && authenticateContext.clerkUrl.searchParams.has(constants.QueryParameters.DevBrowser)) {
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.DevBrowserSync, "");
        }
        const isRequestEligibleForMultiDomainSync = authenticateContext.isSatellite && authenticateContext.secFetchDest === "document";
        if (authenticateContext.instanceType === "production" && isRequestEligibleForMultiDomainSync) {
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SatelliteCookieNeedsSyncing, "");
        }
        if (authenticateContext.instanceType === "development" && isRequestEligibleForMultiDomainSync && !authenticateContext.clerkUrl.searchParams.has(constants.QueryParameters.ClerkSynced)) {
            const redirectURL = new URL(authenticateContext.signInUrl);
            redirectURL.searchParams.append(constants.QueryParameters.ClerkRedirectUrl, authenticateContext.clerkUrl.toString());
            const headers = new Headers({
                [constants.Headers.Location]: redirectURL.toString()
            });
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SatelliteCookieNeedsSyncing, "", headers);
        }
        const redirectUrl = new URL(authenticateContext.clerkUrl).searchParams.get(constants.QueryParameters.ClerkRedirectUrl);
        if (authenticateContext.instanceType === "development" && !authenticateContext.isSatellite && redirectUrl) {
            const redirectBackToSatelliteUrl = new URL(redirectUrl);
            if (authenticateContext.devBrowserToken) {
                redirectBackToSatelliteUrl.searchParams.append(constants.QueryParameters.DevBrowser, authenticateContext.devBrowserToken);
            }
            redirectBackToSatelliteUrl.searchParams.append(constants.QueryParameters.ClerkSynced, "true");
            const headers = new Headers({
                [constants.Headers.Location]: redirectBackToSatelliteUrl.toString()
            });
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.PrimaryRespondsToSyncing, "", headers);
        }
        if (authenticateContext.instanceType === "development" && !hasDevBrowserToken) {
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.DevBrowserMissing, "");
        }
        if (!hasActiveClient && !hasSessionToken) {
            return signedOut(authenticateContext, AuthErrorReason.SessionTokenAndUATMissing, "");
        }
        if (!hasActiveClient && hasSessionToken) {
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SessionTokenWithoutClientUAT, "");
        }
        if (hasActiveClient && !hasSessionToken) {
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.ClientUATWithoutSessionToken, "");
        }
        const { data: decodeResult, errors: decodedErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(authenticateContext.sessionTokenInCookie);
        if (decodedErrors) {
            return handleError(decodedErrors[0], "cookie");
        }
        if (decodeResult.payload.iat < authenticateContext.clientUat) {
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SessionTokenIATBeforeClientUAT, "");
        }
        try {
            const { data, errors } = await verifyToken(authenticateContext.sessionTokenInCookie, authenticateContext);
            if (errors) {
                throw errors[0];
            }
            const signedInRequestState = signedIn(authenticateContext, data, void 0, // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            authenticateContext.sessionTokenInCookie);
            const handshakeRequestState = handleMaybeOrganizationSyncHandshake(authenticateContext, signedInRequestState.toAuth());
            if (handshakeRequestState) {
                return handshakeRequestState;
            }
            return signedInRequestState;
        } catch (err) {
            return handleError(err, "cookie");
        }
        return signedOut(authenticateContext, AuthErrorReason.UnexpectedError);
    }
    async function handleError(err, tokenCarrier) {
        if (!(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationError"])) {
            return signedOut(authenticateContext, AuthErrorReason.UnexpectedError);
        }
        let refreshError;
        if (isRequestEligibleForRefresh(err, authenticateContext, request)) {
            const { data, error } = await attemptRefresh(authenticateContext);
            if (data) {
                return signedIn(authenticateContext, data.jwtPayload, data.headers, data.sessionToken);
            }
            if (error?.cause?.reason) {
                refreshError = error.cause.reason;
            } else {
                refreshError = RefreshTokenErrorReason.UnexpectedSDKError;
            }
        } else {
            if (request.method !== "GET") {
                refreshError = RefreshTokenErrorReason.NonEligibleNonGet;
            } else if (!authenticateContext.refreshTokenInCookie) {
                refreshError = RefreshTokenErrorReason.NonEligibleNoCookie;
            } else {
                refreshError = null;
            }
        }
        err.tokenCarrier = tokenCarrier;
        const reasonToHandshake = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenExpired,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenNotActiveYet,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenIatInTheFuture
        ].includes(err.reason);
        if (reasonToHandshake) {
            return handleMaybeHandshakeStatus(authenticateContext, convertTokenVerificationErrorReasonToAuthErrorReason({
                tokenError: err.reason,
                refreshError
            }), err.getFullMessage());
        }
        return signedOut(authenticateContext, err.reason, err.getFullMessage());
    }
    if (authenticateContext.sessionTokenInHeader) {
        return authenticateRequestWithTokenInHeader();
    }
    return authenticateRequestWithTokenInCookie();
}
var debugRequestState = (params)=>{
    const { isSignedIn, proxyUrl, reason, message, publishableKey, isSatellite, domain } = params;
    return {
        isSignedIn,
        proxyUrl,
        reason,
        message,
        publishableKey,
        isSatellite,
        domain
    };
};
function computeOrganizationSyncTargetMatchers(options) {
    let personalAccountMatcher = null;
    if (options?.personalAccountPatterns) {
        try {
            personalAccountMatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JJHTUJGL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["match"])(options.personalAccountPatterns);
        } catch (e) {
            throw new Error(`Invalid personal account pattern "${options.personalAccountPatterns}": "${e}"`);
        }
    }
    let organizationMatcher = null;
    if (options?.organizationPatterns) {
        try {
            organizationMatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JJHTUJGL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["match"])(options.organizationPatterns);
        } catch (e) {
            throw new Error(`Clerk: Invalid organization pattern "${options.organizationPatterns}": "${e}"`);
        }
    }
    return {
        OrganizationMatcher: organizationMatcher,
        PersonalAccountMatcher: personalAccountMatcher
    };
}
function getOrganizationSyncTarget(url, options, matchers) {
    if (!options) {
        return null;
    }
    if (matchers.OrganizationMatcher) {
        let orgResult;
        try {
            orgResult = matchers.OrganizationMatcher(url.pathname);
        } catch (e) {
            console.error(`Clerk: Failed to apply organization pattern "${options.organizationPatterns}" to a path`, e);
            return null;
        }
        if (orgResult && "params" in orgResult) {
            const params = orgResult.params;
            if ("id" in params && typeof params.id === "string") {
                return {
                    type: "organization",
                    organizationId: params.id
                };
            }
            if ("slug" in params && typeof params.slug === "string") {
                return {
                    type: "organization",
                    organizationSlug: params.slug
                };
            }
            console.warn("Clerk: Detected an organization pattern match, but no organization ID or slug was found in the URL. Does the pattern include `:id` or `:slug`?");
        }
    }
    if (matchers.PersonalAccountMatcher) {
        let personalResult;
        try {
            personalResult = matchers.PersonalAccountMatcher(url.pathname);
        } catch (e) {
            console.error(`Failed to apply personal account pattern "${options.personalAccountPatterns}" to a path`, e);
            return null;
        }
        if (personalResult) {
            return {
                type: "personalAccount"
            };
        }
    }
    return null;
}
function getOrganizationSyncQueryParams(toActivate) {
    const ret = /* @__PURE__ */ new Map();
    if (toActivate.type === "personalAccount") {
        ret.set("organization_id", "");
    }
    if (toActivate.type === "organization") {
        if (toActivate.organizationId) {
            ret.set("organization_id", toActivate.organizationId);
        }
        if (toActivate.organizationSlug) {
            ret.set("organization_id", toActivate.organizationSlug);
        }
    }
    return ret;
}
var convertTokenVerificationErrorReasonToAuthErrorReason = ({ tokenError, refreshError })=>{
    switch(tokenError){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenExpired:
            return `${AuthErrorReason.SessionTokenExpired}-refresh-${refreshError}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenNotActiveYet:
            return AuthErrorReason.SessionTokenNBF;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenIatInTheFuture:
            return AuthErrorReason.SessionTokenIatInTheFuture;
        default:
            return AuthErrorReason.UnexpectedError;
    }
};
// src/util/mergePreDefinedOptions.ts
function mergePreDefinedOptions(preDefinedOptions, options) {
    return Object.keys(preDefinedOptions).reduce((obj, key)=>{
        return {
            ...obj,
            [key]: options[key] || obj[key]
        };
    }, {
        ...preDefinedOptions
    });
}
// src/tokens/factory.ts
var defaultOptions = {
    secretKey: "",
    jwtKey: "",
    apiUrl: void 0,
    apiVersion: void 0,
    proxyUrl: "",
    publishableKey: "",
    isSatellite: false,
    domain: "",
    audience: ""
};
function createAuthenticateRequest(params) {
    const buildTimeOptions = mergePreDefinedOptions(defaultOptions, params.options);
    const apiClient = params.apiClient;
    const authenticateRequest2 = (request, options = {})=>{
        const { apiUrl, apiVersion } = buildTimeOptions;
        const runTimeOptions = mergePreDefinedOptions(buildTimeOptions, options);
        return authenticateRequest(request, {
            ...options,
            ...runTimeOptions,
            // We should add all the omitted props from options here (eg apiUrl / apiVersion)
            // to avoid runtime options override them.
            apiUrl,
            apiVersion,
            apiClient
        });
    };
    return {
        authenticateRequest: authenticateRequest2,
        debugRequestState
    };
}
;
 //# sourceMappingURL=chunk-H5XWF6TY.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-H5XWF6TY.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-AT3FJU3M.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-5JS2VYLU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$url$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/url.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$retry$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/retry.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/keys.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deprecated$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/deprecated.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$error$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/error.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$snakecase$2d$keys$40$8$2e$0$2e$1$2f$node_modules$2f$snakecase$2d$keys$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/snakecase-keys@8.0.1/node_modules/snakecase-keys/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$authorization$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/authorization.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$0$2e$2$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/cookie@1.0.2/node_modules/cookie/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$pathToRegexp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/pathToRegexp.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-H5XWF6TY.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/buildAccountsBaseUrl.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildAccountsBaseUrl": (()=>buildAccountsBaseUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
;
// src/buildAccountsBaseUrl.ts
function buildAccountsBaseUrl(frontendApi) {
    if (!frontendApi) {
        return "";
    }
    const accountsBaseUrl = frontendApi.replace(/clerk\.accountsstage\./, "accountsstage.").replace(/clerk\.accounts\.|clerk\./, "accounts.");
    return `https://${accountsBaseUrl}`;
}
;
 //# sourceMappingURL=buildAccountsBaseUrl.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-43A5F2IE.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/authorization-errors.ts
__turbopack_context__.s({
    "isReverificationHint": (()=>isReverificationHint),
    "reverificationError": (()=>reverificationError),
    "reverificationErrorResponse": (()=>reverificationErrorResponse)
});
var REVERIFICATION_REASON = "reverification-error";
var reverificationError = (missingConfig)=>({
        clerk_error: {
            type: "forbidden",
            reason: REVERIFICATION_REASON,
            metadata: {
                reverification: missingConfig
            }
        }
    });
var reverificationErrorResponse = (...args)=>new Response(JSON.stringify(reverificationError(...args)), {
        status: 403
    });
var isReverificationHint = (result)=>{
    return result && typeof result === "object" && "clerk_error" in result && result.clerk_error?.type === "forbidden" && result.clerk_error?.reason === REVERIFICATION_REASON;
};
;
 //# sourceMappingURL=chunk-43A5F2IE.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/authorization-errors.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
 //# sourceMappingURL=authorization-errors.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/authorization-errors.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$43A5F2IE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-43A5F2IE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$authorization$2d$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/authorization-errors.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createRedirect": (()=>createRedirect),
    "decorateObjectWithResources": (()=>decorateObjectWithResources),
    "stripPrivateDataFromObject": (()=>stripPrivateDataFromObject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-H5XWF6TY.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-G3VP5PJE.mjs [app-rsc] (ecmascript)");
// src/createRedirect.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$buildAccountsBaseUrl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/buildAccountsBaseUrl.mjs [app-rsc] (ecmascript)");
;
;
;
;
var buildUrl = (_baseUrl, _targetUrl, _returnBackUrl, _devBrowserToken)=>{
    if (_baseUrl === "") {
        return legacyBuildUrl(_targetUrl.toString(), _returnBackUrl?.toString());
    }
    const baseUrl = new URL(_baseUrl);
    const returnBackUrl = _returnBackUrl ? new URL(_returnBackUrl, baseUrl) : void 0;
    const res = new URL(_targetUrl, baseUrl);
    if (returnBackUrl) {
        res.searchParams.set("redirect_url", returnBackUrl.toString());
    }
    if (_devBrowserToken && baseUrl.hostname !== res.hostname) {
        res.searchParams.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].QueryParameters.DevBrowser, _devBrowserToken);
    }
    return res.toString();
};
var legacyBuildUrl = (targetUrl, redirectUrl)=>{
    let url;
    if (!targetUrl.startsWith("http")) {
        if (!redirectUrl || !redirectUrl.startsWith("http")) {
            throw new Error("destination url or return back url should be an absolute path url!");
        }
        const baseURL = new URL(redirectUrl);
        url = new URL(targetUrl, baseURL.origin);
    } else {
        url = new URL(targetUrl);
    }
    if (redirectUrl) {
        url.searchParams.set("redirect_url", redirectUrl);
    }
    return url.toString();
};
var createRedirect = (params)=>{
    const { publishableKey, redirectAdapter, signInUrl, signUpUrl, baseUrl } = params;
    const parsedPublishableKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey);
    const frontendApi = parsedPublishableKey?.frontendApi;
    const isDevelopment = parsedPublishableKey?.instanceType === "development";
    const accountsBaseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$buildAccountsBaseUrl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildAccountsBaseUrl"])(frontendApi);
    const redirectToSignUp = ({ returnBackUrl } = {})=>{
        if (!signUpUrl && !accountsBaseUrl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throwMissingPublishableKeyError();
        }
        const accountsSignUpUrl = `${accountsBaseUrl}/sign-up`;
        return redirectAdapter(buildUrl(baseUrl, signUpUrl || accountsSignUpUrl, returnBackUrl, isDevelopment ? params.devBrowserToken : null));
    };
    const redirectToSignIn = ({ returnBackUrl } = {})=>{
        if (!signInUrl && !accountsBaseUrl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throwMissingPublishableKeyError();
        }
        const accountsSignInUrl = `${accountsBaseUrl}/sign-in`;
        return redirectAdapter(buildUrl(baseUrl, signInUrl || accountsSignInUrl, returnBackUrl, isDevelopment ? params.devBrowserToken : null));
    };
    return {
        redirectToSignUp,
        redirectToSignIn
    };
};
// src/util/decorateObjectWithResources.ts
var decorateObjectWithResources = async (obj, authObj, opts)=>{
    const { loadSession, loadUser, loadOrganization } = opts || {};
    const { userId, sessionId, orgId } = authObj;
    const { sessions, users, organizations } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createBackendApiClient"])({
        ...opts
    });
    const [sessionResp, userResp, organizationResp] = await Promise.all([
        loadSession && sessionId ? sessions.getSession(sessionId) : Promise.resolve(void 0),
        loadUser && userId ? users.getUser(userId) : Promise.resolve(void 0),
        loadOrganization && orgId ? organizations.getOrganization({
            organizationId: orgId
        }) : Promise.resolve(void 0)
    ]);
    const resources = stripPrivateDataFromObject({
        session: sessionResp,
        user: userResp,
        organization: organizationResp
    });
    return Object.assign(obj, resources);
};
function stripPrivateDataFromObject(authObject) {
    const user = authObject.user ? {
        ...authObject.user
    } : authObject.user;
    const organization = authObject.organization ? {
        ...authObject.organization
    } : authObject.organization;
    prunePrivateMetadata(user);
    prunePrivateMetadata(organization);
    return {
        ...authObject,
        user,
        organization
    };
}
function prunePrivateMetadata(resource) {
    if (resource) {
        if ("privateMetadata" in resource) {
            delete resource["privateMetadata"];
        }
        if ("private_metadata" in resource) {
            delete resource["private_metadata"];
        }
    }
    return resource;
}
;
;
 //# sourceMappingURL=internal.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-H5XWF6TY.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-AT3FJU3M.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-5JS2VYLU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$buildAccountsBaseUrl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/buildAccountsBaseUrl.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$authorization$2d$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/authorization-errors.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/headers-utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "detectClerkMiddleware": (()=>detectClerkMiddleware),
    "getAuthKeyFromRequest": (()=>getAuthKeyFromRequest),
    "getCustomAttributeFromRequest": (()=>getCustomAttributeFromRequest),
    "getHeader": (()=>getHeader),
    "isNextRequest": (()=>isNextRequest),
    "isRequestWebAPI": (()=>isRequestWebAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-H5XWF6TY.mjs [app-rsc] (ecmascript) <locals>");
;
;
function getCustomAttributeFromRequest(req, key) {
    return key in req ? req[key] : void 0;
}
function getAuthKeyFromRequest(req, key) {
    return getCustomAttributeFromRequest(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Attributes[key]) || getHeader(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers[key]);
}
function getHeader(req, name) {
    var _a, _b;
    if (isNextRequest(req) || isRequestWebAPI(req)) {
        return req.headers.get(name);
    }
    return req.headers[name] || req.headers[name.toLowerCase()] || ((_b = (_a = req.socket) == null ? void 0 : _a._httpMessage) == null ? void 0 : _b.getHeader(name));
}
function detectClerkMiddleware(req) {
    return Boolean(getAuthKeyFromRequest(req, "AuthStatus"));
}
function isNextRequest(val) {
    try {
        const { headers, nextUrl, cookies } = val || {};
        return typeof (headers == null ? void 0 : headers.get) === "function" && typeof (nextUrl == null ? void 0 : nextUrl.searchParams.get) === "function" && typeof (cookies == null ? void 0 : cookies.get) === "function";
    } catch  {
        return false;
    }
}
function isRequestWebAPI(val) {
    try {
        const { headers } = val || {};
        return typeof (headers == null ? void 0 : headers.get) === "function";
    } catch  {
        return false;
    }
}
;
 //# sourceMappingURL=headers-utils.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-3QKZJFQO.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fastDeepMergeAndKeep": (()=>fastDeepMergeAndKeep),
    "fastDeepMergeAndReplace": (()=>fastDeepMergeAndReplace),
    "logErrorInDevMode": (()=>logErrorInDevMode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-rsc] (ecmascript)");
;
// src/utils/logErrorInDevMode.ts
var logErrorInDevMode = (message)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopmentEnvironment"])()) {
        console.error(`Clerk: ${message}`);
    }
};
// src/utils/fastDeepMerge.ts
var fastDeepMergeAndReplace = (source, target)=>{
    if (!source || !target) {
        return;
    }
    for(const key in source){
        if (Object.prototype.hasOwnProperty.call(source, key) && source[key] !== null && typeof source[key] === `object`) {
            if (target[key] === void 0) {
                target[key] = new (Object.getPrototypeOf(source[key])).constructor();
            }
            fastDeepMergeAndReplace(source[key], target[key]);
        } else if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
};
var fastDeepMergeAndKeep = (source, target)=>{
    if (!source || !target) {
        return;
    }
    for(const key in source){
        if (Object.prototype.hasOwnProperty.call(source, key) && source[key] !== null && typeof source[key] === `object`) {
            if (target[key] === void 0) {
                target[key] = new (Object.getPrototypeOf(source[key])).constructor();
            }
            fastDeepMergeAndKeep(source[key], target[key]);
        } else if (Object.prototype.hasOwnProperty.call(source, key) && target[key] === void 0) {
            target[key] = source[key];
        }
    }
};
;
 //# sourceMappingURL=chunk-3QKZJFQO.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/noop.ts
__turbopack_context__.s({
    "noop": (()=>noop)
});
var noop = (..._args)=>{};
;
 //# sourceMappingURL=chunk-7FNX7RWY.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-4S4AJ26F.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createDeferredPromise": (()=>createDeferredPromise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-rsc] (ecmascript)");
;
// src/utils/createDeferredPromise.ts
var createDeferredPromise = ()=>{
    let resolve = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"];
    let reject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"];
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        promise,
        resolve,
        reject
    };
};
;
 //# sourceMappingURL=chunk-4S4AJ26F.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-O32JQBM6.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/handleValueOrFn.ts
__turbopack_context__.s({
    "handleValueOrFn": (()=>handleValueOrFn)
});
function handleValueOrFn(value, url, defaultValue) {
    if (typeof value === "function") {
        return value(url);
    }
    if (typeof value !== "undefined") {
        return value;
    }
    if (typeof defaultValue !== "undefined") {
        return defaultValue;
    }
    return void 0;
}
;
 //# sourceMappingURL=chunk-O32JQBM6.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/utils/index.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/utils/index.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3QKZJFQO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-3QKZJFQO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$4S4AJ26F$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-4S4AJ26F.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-O32JQBM6.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/utils/index.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-NNO3XJ5E.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiUrlFromPublishableKey": (()=>apiUrlFromPublishableKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-G3VP5PJE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-rsc] (ecmascript)");
;
;
// src/apiUrlFromPublishableKey.ts
var apiUrlFromPublishableKey = (publishableKey)=>{
    const frontendApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey)?.frontendApi;
    if (frontendApi?.startsWith("clerk.") && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((suffix)=>frontendApi?.endsWith(suffix))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROD_API_URL"];
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCAL_ENV_SUFFIXES"].some((suffix)=>frontendApi?.endsWith(suffix))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCAL_API_URL"];
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STAGING_ENV_SUFFIXES"].some((suffix)=>frontendApi?.endsWith(suffix))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STAGING_API_URL"];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROD_API_URL"];
};
;
 //# sourceMappingURL=chunk-NNO3XJ5E.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
;
;
 //# sourceMappingURL=apiUrlFromPublishableKey.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NNO3XJ5E$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-NNO3XJ5E.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-G3VP5PJE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$apiUrlFromPublishableKey$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-RWYTRAIK.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/underscore.ts
__turbopack_context__.s({
    "camelToSnake": (()=>camelToSnake),
    "deepCamelToSnake": (()=>deepCamelToSnake),
    "deepSnakeToCamel": (()=>deepSnakeToCamel),
    "getNonUndefinedValues": (()=>getNonUndefinedValues),
    "isIPV4Address": (()=>isIPV4Address),
    "isTruthy": (()=>isTruthy),
    "snakeToCamel": (()=>snakeToCamel),
    "titleize": (()=>titleize),
    "toSentence": (()=>toSentence)
});
var toSentence = (items)=>{
    if (items.length == 0) {
        return "";
    }
    if (items.length == 1) {
        return items[0];
    }
    let sentence = items.slice(0, -1).join(", ");
    sentence += `, or ${items.slice(-1)}`;
    return sentence;
};
var IP_V4_ADDRESS_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
function isIPV4Address(str) {
    return IP_V4_ADDRESS_REGEX.test(str || "");
}
function titleize(str) {
    const s = str || "";
    return s.charAt(0).toUpperCase() + s.slice(1);
}
function snakeToCamel(str) {
    return str ? str.replace(/([-_][a-z])/g, (match)=>match.toUpperCase().replace(/-|_/, "")) : "";
}
function camelToSnake(str) {
    return str ? str.replace(/[A-Z]/g, (letter)=>`_${letter.toLowerCase()}`) : "";
}
var createDeepObjectTransformer = (transform)=>{
    const deepTransform = (obj)=>{
        if (!obj) {
            return obj;
        }
        if (Array.isArray(obj)) {
            return obj.map((el)=>{
                if (typeof el === "object" || Array.isArray(el)) {
                    return deepTransform(el);
                }
                return el;
            });
        }
        const copy = {
            ...obj
        };
        const keys = Object.keys(copy);
        for (const oldName of keys){
            const newName = transform(oldName.toString());
            if (newName !== oldName) {
                copy[newName] = copy[oldName];
                delete copy[oldName];
            }
            if (typeof copy[newName] === "object") {
                copy[newName] = deepTransform(copy[newName]);
            }
        }
        return copy;
    };
    return deepTransform;
};
var deepCamelToSnake = createDeepObjectTransformer(camelToSnake);
var deepSnakeToCamel = createDeepObjectTransformer(snakeToCamel);
function isTruthy(value) {
    if (typeof value === `boolean`) {
        return value;
    }
    if (value === void 0 || value === null) {
        return false;
    }
    if (typeof value === `string`) {
        if (value.toLowerCase() === `true`) {
            return true;
        }
        if (value.toLowerCase() === `false`) {
            return false;
        }
    }
    const number = parseInt(value, 10);
    if (isNaN(number)) {
        return false;
    }
    if (number > 0) {
        return true;
    }
    return false;
}
function getNonUndefinedValues(obj) {
    return Object.entries(obj).reduce((acc, [key, value])=>{
        if (value !== void 0) {
            acc[key] = value;
        }
        return acc;
    }, {});
}
;
 //# sourceMappingURL=chunk-RWYTRAIK.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/underscore.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
 //# sourceMappingURL=underscore.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/underscore.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$RWYTRAIK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-RWYTRAIK.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$underscore$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/underscore.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_URL": (()=>API_URL),
    "API_VERSION": (()=>API_VERSION),
    "CLERK_JS_URL": (()=>CLERK_JS_URL),
    "CLERK_JS_VERSION": (()=>CLERK_JS_VERSION),
    "DOMAIN": (()=>DOMAIN),
    "ENCRYPTION_KEY": (()=>ENCRYPTION_KEY),
    "IS_SATELLITE": (()=>IS_SATELLITE),
    "KEYLESS_DISABLED": (()=>KEYLESS_DISABLED),
    "PROXY_URL": (()=>PROXY_URL),
    "PUBLISHABLE_KEY": (()=>PUBLISHABLE_KEY),
    "SDK_METADATA": (()=>SDK_METADATA),
    "SECRET_KEY": (()=>SECRET_KEY),
    "SIGN_IN_URL": (()=>SIGN_IN_URL),
    "SIGN_UP_URL": (()=>SIGN_UP_URL),
    "TELEMETRY_DEBUG": (()=>TELEMETRY_DEBUG),
    "TELEMETRY_DISABLED": (()=>TELEMETRY_DISABLED)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$apiUrlFromPublishableKey$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NNO3XJ5E$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-NNO3XJ5E.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$underscore$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/underscore.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$RWYTRAIK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-RWYTRAIK.mjs [app-rsc] (ecmascript)");
;
;
;
const CLERK_JS_VERSION = process.env.NEXT_PUBLIC_CLERK_JS_VERSION || "";
const CLERK_JS_URL = process.env.NEXT_PUBLIC_CLERK_JS_URL || "";
const API_VERSION = process.env.CLERK_API_VERSION || "v1";
const SECRET_KEY = process.env.CLERK_SECRET_KEY || "";
const PUBLISHABLE_KEY = ("TURBOPACK compile-time value", "") || "";
const ENCRYPTION_KEY = process.env.CLERK_ENCRYPTION_KEY || "";
const API_URL = process.env.CLERK_API_URL || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NNO3XJ5E$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiUrlFromPublishableKey"])(PUBLISHABLE_KEY);
const DOMAIN = process.env.NEXT_PUBLIC_CLERK_DOMAIN || "";
const PROXY_URL = process.env.NEXT_PUBLIC_CLERK_PROXY_URL || "";
const IS_SATELLITE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$RWYTRAIK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTruthy"])(process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE) || false;
const SIGN_IN_URL = ("TURBOPACK compile-time value", "/auth/sign-in") || "";
const SIGN_UP_URL = ("TURBOPACK compile-time value", "/auth/sign-up") || "";
const SDK_METADATA = {
    name: "@clerk/nextjs",
    version: "6.12.12",
    environment: ("TURBOPACK compile-time value", "development")
};
const TELEMETRY_DISABLED = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$RWYTRAIK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTruthy"])(process.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED);
const TELEMETRY_DEBUG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$RWYTRAIK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTruthy"])(process.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG);
const KEYLESS_DISABLED = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$RWYTRAIK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTruthy"])(process.env.NEXT_PUBLIC_CLERK_KEYLESS_DISABLED) || false;
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/package.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"name\":\"next\",\"version\":\"15.2.4\",\"description\":\"The React Framework\",\"main\":\"./dist/server/next.js\",\"license\":\"MIT\",\"repository\":\"vercel/next.js\",\"bugs\":\"https://github.com/vercel/next.js/issues\",\"homepage\":\"https://nextjs.org\",\"types\":\"index.d.ts\",\"files\":[\"dist\",\"app.js\",\"app.d.ts\",\"babel.js\",\"babel.d.ts\",\"client.js\",\"client.d.ts\",\"compat\",\"cache.js\",\"cache.d.ts\",\"config.js\",\"config.d.ts\",\"constants.js\",\"constants.d.ts\",\"document.js\",\"document.d.ts\",\"dynamic.js\",\"dynamic.d.ts\",\"error.js\",\"error.d.ts\",\"future\",\"legacy\",\"script.js\",\"script.d.ts\",\"server.js\",\"server.d.ts\",\"head.js\",\"head.d.ts\",\"image.js\",\"image.d.ts\",\"link.js\",\"link.d.ts\",\"form.js\",\"form.d.ts\",\"router.js\",\"router.d.ts\",\"jest.js\",\"jest.d.ts\",\"amp.js\",\"amp.d.ts\",\"og.js\",\"og.d.ts\",\"types.d.ts\",\"types.js\",\"index.d.ts\",\"types/global.d.ts\",\"types/compiled.d.ts\",\"image-types/global.d.ts\",\"navigation-types/navigation.d.ts\",\"navigation-types/compat/navigation.d.ts\",\"font\",\"navigation.js\",\"navigation.d.ts\",\"headers.js\",\"headers.d.ts\",\"navigation-types\",\"web-vitals.js\",\"web-vitals.d.ts\",\"experimental/testing/server.js\",\"experimental/testing/server.d.ts\",\"experimental/testmode/playwright.js\",\"experimental/testmode/playwright.d.ts\",\"experimental/testmode/playwright/msw.js\",\"experimental/testmode/playwright/msw.d.ts\",\"experimental/testmode/proxy.js\",\"experimental/testmode/proxy.d.ts\"],\"bin\":{\"next\":\"./dist/bin/next\"},\"scripts\":{\"dev\":\"cross-env NEXT_SERVER_EVAL_SOURCE_MAPS=1 taskr\",\"release\":\"taskr release\",\"build\":\"pnpm release\",\"prepublishOnly\":\"cd ../../ && turbo run build\",\"types\":\"tsc --project tsconfig.build.json --declaration --emitDeclarationOnly --stripInternal --declarationDir dist\",\"typescript\":\"tsec --noEmit\",\"ncc-compiled\":\"taskr ncc\",\"storybook\":\"storybook dev -p 6006\",\"build-storybook\":\"storybook build\",\"test-storybook\":\"test-storybook\"},\"taskr\":{\"requires\":[\"./taskfile-webpack.js\",\"./taskfile-ncc.js\",\"./taskfile-swc.js\",\"./taskfile-watch.js\"]},\"dependencies\":{\"@next/env\":\"15.2.4\",\"@swc/counter\":\"0.1.3\",\"@swc/helpers\":\"0.5.15\",\"busboy\":\"1.6.0\",\"caniuse-lite\":\"^1.0.30001579\",\"postcss\":\"8.4.31\",\"styled-jsx\":\"5.1.6\"},\"peerDependencies\":{\"@opentelemetry/api\":\"^1.1.0\",\"@playwright/test\":\"^1.41.2\",\"babel-plugin-react-compiler\":\"*\",\"react\":\"^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0\",\"react-dom\":\"^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0\",\"sass\":\"^1.3.0\"},\"peerDependenciesMeta\":{\"babel-plugin-react-compiler\":{\"optional\":true},\"sass\":{\"optional\":true},\"@opentelemetry/api\":{\"optional\":true},\"@playwright/test\":{\"optional\":true}},\"optionalDependencies\":{\"sharp\":\"^0.33.5\",\"@next/swc-darwin-arm64\":\"15.2.4\",\"@next/swc-darwin-x64\":\"15.2.4\",\"@next/swc-linux-arm64-gnu\":\"15.2.4\",\"@next/swc-linux-arm64-musl\":\"15.2.4\",\"@next/swc-linux-x64-gnu\":\"15.2.4\",\"@next/swc-linux-x64-musl\":\"15.2.4\",\"@next/swc-win32-arm64-msvc\":\"15.2.4\",\"@next/swc-win32-x64-msvc\":\"15.2.4\"},\"devDependencies\":{\"@ampproject/toolbox-optimizer\":\"2.8.3\",\"@babel/code-frame\":\"7.22.5\",\"@babel/core\":\"7.22.5\",\"@babel/eslint-parser\":\"7.22.5\",\"@babel/generator\":\"7.22.5\",\"@babel/plugin-proposal-class-properties\":\"7.18.6\",\"@babel/plugin-proposal-export-namespace-from\":\"7.18.9\",\"@babel/plugin-proposal-numeric-separator\":\"7.18.6\",\"@babel/plugin-proposal-object-rest-spread\":\"7.20.7\",\"@babel/plugin-syntax-bigint\":\"7.8.3\",\"@babel/plugin-syntax-dynamic-import\":\"7.8.3\",\"@babel/plugin-syntax-import-attributes\":\"7.22.5\",\"@babel/plugin-syntax-jsx\":\"7.22.5\",\"@babel/plugin-transform-modules-commonjs\":\"7.22.5\",\"@babel/plugin-transform-runtime\":\"7.22.5\",\"@babel/preset-env\":\"7.22.5\",\"@babel/preset-react\":\"7.22.5\",\"@babel/preset-typescript\":\"7.22.5\",\"@babel/runtime\":\"7.22.5\",\"@babel/traverse\":\"7.22.5\",\"@babel/types\":\"7.22.5\",\"@capsizecss/metrics\":\"3.4.0\",\"@edge-runtime/cookies\":\"6.0.0\",\"@edge-runtime/ponyfill\":\"4.0.0\",\"@edge-runtime/primitives\":\"6.0.0\",\"@hapi/accept\":\"5.0.2\",\"@jest/transform\":\"29.5.0\",\"@jest/types\":\"29.5.0\",\"@mswjs/interceptors\":\"0.23.0\",\"@napi-rs/triples\":\"1.2.0\",\"@next/font\":\"15.2.4\",\"@next/polyfill-module\":\"15.2.4\",\"@next/polyfill-nomodule\":\"15.2.4\",\"@next/react-refresh-utils\":\"15.2.4\",\"@next/swc\":\"15.2.4\",\"@opentelemetry/api\":\"1.6.0\",\"@playwright/test\":\"1.41.2\",\"@storybook/addon-a11y\":\"8.6.0\",\"@storybook/addon-essentials\":\"8.6.0\",\"@storybook/addon-interactions\":\"8.6.0\",\"@storybook/addon-webpack5-compiler-swc\":\"1.0.5\",\"@storybook/blocks\":\"8.6.0\",\"@storybook/react\":\"8.6.0\",\"@storybook/react-webpack5\":\"8.6.0\",\"@storybook/test\":\"8.6.0\",\"@storybook/test-runner\":\"0.21.0\",\"@swc/core\":\"1.9.3\",\"@swc/types\":\"0.1.7\",\"@taskr/clear\":\"1.1.0\",\"@taskr/esnext\":\"1.1.0\",\"@types/amphtml-validator\":\"1.0.0\",\"@types/babel__code-frame\":\"7.0.2\",\"@types/babel__core\":\"7.1.12\",\"@types/babel__generator\":\"7.6.2\",\"@types/babel__template\":\"7.4.0\",\"@types/babel__traverse\":\"7.11.0\",\"@types/bytes\":\"3.1.1\",\"@types/ci-info\":\"2.0.0\",\"@types/compression\":\"0.0.36\",\"@types/content-disposition\":\"0.5.4\",\"@types/content-type\":\"1.1.3\",\"@types/cookie\":\"0.3.3\",\"@types/cross-spawn\":\"6.0.0\",\"@types/debug\":\"4.1.5\",\"@types/express-serve-static-core\":\"4.17.33\",\"@types/fresh\":\"0.5.0\",\"@types/glob\":\"7.1.1\",\"@types/jsonwebtoken\":\"9.0.0\",\"@types/lodash\":\"4.14.198\",\"@types/lodash.curry\":\"4.1.6\",\"@types/path-to-regexp\":\"1.7.0\",\"@types/picomatch\":\"2.3.3\",\"@types/platform\":\"1.3.4\",\"@types/react\":\"19.0.8\",\"@types/react-dom\":\"19.0.3\",\"@types/react-is\":\"18.2.4\",\"@types/semver\":\"7.3.1\",\"@types/send\":\"0.14.4\",\"@types/shell-quote\":\"1.7.1\",\"@types/tar\":\"6.1.5\",\"@types/text-table\":\"0.2.1\",\"@types/ua-parser-js\":\"0.7.36\",\"@types/webpack-sources1\":\"npm:@types/webpack-sources@0.1.5\",\"@types/ws\":\"8.2.0\",\"@vercel/ncc\":\"0.34.0\",\"@vercel/nft\":\"0.27.1\",\"@vercel/turbopack-ecmascript-runtime\":\"*\",\"acorn\":\"8.14.0\",\"amphtml-validator\":\"1.0.38\",\"anser\":\"1.4.9\",\"arg\":\"4.1.0\",\"assert\":\"2.0.0\",\"async-retry\":\"1.2.3\",\"async-sema\":\"3.0.0\",\"axe-playwright\":\"2.0.3\",\"babel-plugin-react-compiler\":\"19.0.0-beta-e552027-20250112\",\"babel-plugin-transform-define\":\"2.0.0\",\"babel-plugin-transform-react-remove-prop-types\":\"0.4.24\",\"browserify-zlib\":\"0.2.0\",\"browserslist\":\"4.22.2\",\"buffer\":\"5.6.0\",\"bytes\":\"3.1.1\",\"ci-info\":\"watson/ci-info#f43f6a1cefff47fb361c88cf4b943fdbcaafe540\",\"cli-select\":\"1.1.2\",\"client-only\":\"0.0.1\",\"commander\":\"12.1.0\",\"comment-json\":\"3.0.3\",\"compression\":\"1.7.4\",\"conf\":\"5.0.0\",\"constants-browserify\":\"1.0.0\",\"content-disposition\":\"0.5.3\",\"content-type\":\"1.0.4\",\"cookie\":\"0.4.1\",\"cross-env\":\"6.0.3\",\"cross-spawn\":\"7.0.3\",\"crypto-browserify\":\"3.12.0\",\"css.escape\":\"1.5.1\",\"cssnano-preset-default\":\"7.0.6\",\"data-uri-to-buffer\":\"3.0.1\",\"debug\":\"4.1.1\",\"devalue\":\"2.0.1\",\"domain-browser\":\"4.19.0\",\"edge-runtime\":\"4.0.1\",\"events\":\"3.3.0\",\"find-up\":\"4.1.0\",\"fresh\":\"0.5.2\",\"glob\":\"7.1.7\",\"gzip-size\":\"5.1.1\",\"http-proxy\":\"1.18.1\",\"http-proxy-agent\":\"5.0.0\",\"https-browserify\":\"1.0.0\",\"https-proxy-agent\":\"5.0.1\",\"icss-utils\":\"5.1.0\",\"ignore-loader\":\"0.1.2\",\"image-size\":\"1.1.1\",\"is-docker\":\"2.0.0\",\"is-wsl\":\"2.2.0\",\"jest-worker\":\"27.5.1\",\"json5\":\"2.2.3\",\"jsonwebtoken\":\"9.0.0\",\"loader-runner\":\"4.3.0\",\"loader-utils2\":\"npm:loader-utils@2.0.0\",\"loader-utils3\":\"npm:loader-utils@3.1.3\",\"lodash.curry\":\"4.1.1\",\"mini-css-extract-plugin\":\"2.4.4\",\"msw\":\"2.3.0\",\"nanoid\":\"3.1.32\",\"native-url\":\"0.3.4\",\"neo-async\":\"2.6.1\",\"node-html-parser\":\"5.3.3\",\"ora\":\"4.0.4\",\"os-browserify\":\"0.3.0\",\"p-limit\":\"3.1.0\",\"p-queue\":\"6.6.2\",\"path-browserify\":\"1.0.1\",\"path-to-regexp\":\"6.1.0\",\"picomatch\":\"4.0.1\",\"postcss-flexbugs-fixes\":\"5.0.2\",\"postcss-modules-extract-imports\":\"3.0.0\",\"postcss-modules-local-by-default\":\"4.0.4\",\"postcss-modules-scope\":\"3.0.0\",\"postcss-modules-values\":\"4.0.0\",\"postcss-preset-env\":\"7.4.3\",\"postcss-safe-parser\":\"6.0.0\",\"postcss-scss\":\"4.0.3\",\"postcss-value-parser\":\"4.2.0\",\"process\":\"0.11.10\",\"punycode\":\"2.1.1\",\"querystring-es3\":\"0.2.1\",\"raw-body\":\"2.4.1\",\"react-refresh\":\"0.12.0\",\"regenerator-runtime\":\"0.13.4\",\"sass-loader\":\"15.0.0\",\"schema-utils2\":\"npm:schema-utils@2.7.1\",\"schema-utils3\":\"npm:schema-utils@3.0.0\",\"semver\":\"7.3.2\",\"send\":\"0.17.1\",\"server-only\":\"0.0.1\",\"setimmediate\":\"1.0.5\",\"shell-quote\":\"1.7.3\",\"source-map\":\"0.6.1\",\"source-map-loader\":\"5.0.0\",\"source-map08\":\"npm:source-map@0.8.0-beta.0\",\"stacktrace-parser\":\"0.1.10\",\"storybook\":\"8.6.0\",\"stream-browserify\":\"3.0.0\",\"stream-http\":\"3.1.1\",\"strict-event-emitter\":\"0.5.0\",\"string-hash\":\"1.1.3\",\"string_decoder\":\"1.3.0\",\"strip-ansi\":\"6.0.0\",\"superstruct\":\"1.0.3\",\"tar\":\"6.1.15\",\"taskr\":\"1.1.0\",\"terser\":\"5.27.0\",\"terser-webpack-plugin\":\"5.3.9\",\"text-table\":\"0.2.0\",\"timers-browserify\":\"2.0.12\",\"tty-browserify\":\"0.0.1\",\"typescript\":\"5.8.2\",\"ua-parser-js\":\"1.0.35\",\"unistore\":\"3.4.1\",\"util\":\"0.12.4\",\"vm-browserify\":\"1.1.2\",\"watchpack\":\"2.4.0\",\"web-vitals\":\"4.2.1\",\"webpack\":\"5.98.0\",\"webpack-sources1\":\"npm:webpack-sources@1.4.3\",\"webpack-sources3\":\"npm:webpack-sources@3.2.3\",\"ws\":\"8.2.3\",\"zod\":\"3.22.3\",\"zod-validation-error\":\"3.4.0\"},\"keywords\":[\"react\",\"framework\",\"nextjs\",\"web\",\"server\",\"node\",\"front-end\",\"backend\",\"cli\",\"vercel\"],\"engines\":{\"node\":\"^18.18.0 || ^19.8.0 || >= 20.0.0\"}}"));}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/utils/sdk-versions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isNext13": (()=>isNext13),
    "isNextWithUnstableServerActions": (()=>isNextWithUnstableServerActions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/package.json (json)");
;
;
const isNext13 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__["default"].version.startsWith("13.");
const isNextWithUnstableServerActions = isNext13 || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__["default"].version.startsWith("14.0");
;
 //# sourceMappingURL=sdk-versions.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/utils/feature-flags.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "canUseKeyless": (()=>canUseKeyless)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/utils/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/utils/sdk-versions.js [app-rsc] (ecmascript)");
;
;
;
;
const canUseKeyless = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNextWithUnstableServerActions"] && // Next.js will inline the value of 'development' or 'production' on the client bundle, so this is client-safe.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopmentEnvironment"])() && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEYLESS_DISABLED"];
;
 //# sourceMappingURL=feature-flags.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/keyless.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getKeylessCookieName": (()=>getKeylessCookieName),
    "getKeylessCookieValue": (()=>getKeylessCookieValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/utils/feature-flags.js [app-rsc] (ecmascript)");
;
;
const keylessCookiePrefix = `__clerk_keys_`;
async function hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b)=>b.toString(16).padStart(2, "0")).join("");
    return hashHex.slice(0, 16);
}
async function getKeylessCookieName() {
    const PATH = process.env.PWD;
    if (!PATH) {
        return `${keylessCookiePrefix}${0}`;
    }
    const lastThreeDirs = PATH.split("/").filter(Boolean).slice(-3).reverse().join("/");
    const hash = await hashString(lastThreeDirs);
    return `${keylessCookiePrefix}${hash}`;
}
async function getKeylessCookieValue(getter) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canUseKeyless"]) {
        return void 0;
    }
    const keylessCookieName = await getKeylessCookieName();
    let keyless;
    try {
        if ("TURBOPACK compile-time truthy", 1) {
            keyless = JSON.parse(getter(keylessCookieName) || "{}");
        }
    } catch  {
        keyless = void 0;
    }
    return keyless;
}
;
 //# sourceMappingURL=keyless.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f079adcedb78426afbfb760c47d399eb64b2357f3":"createOrReadKeylessAction","7f30fe9f246b3b20fb0b2be3f144df4377d72757ed":"syncKeylessConfigAction","7fbfb84318f0afddd7b9a72978e3e6ba2f8eefde06":"deleteKeylessAction"} */ __turbopack_context__.s({
    "createOrReadKeylessAction": (()=>createOrReadKeylessAction),
    "deleteKeylessAction": (()=>deleteKeylessAction),
    "syncKeylessConfigAction": (()=>syncKeylessConfigAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errorThrower$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/errorThrower.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/headers-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/keyless.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/utils/feature-flags.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function syncKeylessConfigAction(args) {
    const { claimUrl, publishableKey, secretKey, returnUrl } = args;
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const request = new Request("https://placeholder.com", {
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    const keyless = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeylessCookieValue"])((name)=>{
        var _a;
        return (_a = cookieStore.get(name)) == null ? void 0 : _a.value;
    });
    const pksMatch = (keyless == null ? void 0 : keyless.publishableKey) === publishableKey;
    const sksMatch = (keyless == null ? void 0 : keyless.secretKey) === secretKey;
    if (pksMatch && sksMatch) {
        return;
    }
    cookieStore.set(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeylessCookieName"])(), JSON.stringify({
        claimUrl,
        publishableKey,
        secretKey
    }), {
        secure: true,
        httpOnly: true
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectClerkMiddleware"])(request)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/clerk-sync-keyless?returnUrl=${returnUrl}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectType"].replace);
        return;
    }
    return;
}
async function createOrReadKeylessAction() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canUseKeyless"]) {
        return null;
    }
    const result = await __turbopack_context__.r("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/keyless-node.js [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i).then((m)=>m.createOrReadKeyless()).catch(()=>null);
    if (!result) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errorThrower$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorThrower"].throwMissingPublishableKeyError();
        return null;
    }
    const { clerkDevelopmentCache, createKeylessModeMessage } = await __turbopack_context__.r("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/keyless-log-cache.js [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i);
    clerkDevelopmentCache == null ? void 0 : clerkDevelopmentCache.log({
        cacheKey: result.publishableKey,
        msg: createKeylessModeMessage(result)
    });
    const { claimUrl, publishableKey, secretKey, apiKeysUrl } = result;
    void (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).set(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKeylessCookieName"])(), JSON.stringify({
        claimUrl,
        publishableKey,
        secretKey
    }), {
        secure: false,
        httpOnly: false
    });
    return {
        claimUrl,
        publishableKey,
        apiKeysUrl
    };
}
async function deleteKeylessAction() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canUseKeyless"]) {
        return;
    }
    await __turbopack_context__.r("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/keyless-node.js [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i).then((m)=>m.removeKeyless()).catch(()=>{});
    return;
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createOrReadKeylessAction,
    /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteKeylessAction,
    /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ syncKeylessConfigAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createOrReadKeylessAction, "7f079adcedb78426afbfb760c47d399eb64b2357f3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteKeylessAction, "7fbfb84318f0afddd7b9a72978e3e6ba2f8eefde06", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(syncKeylessConfigAction, "7f30fe9f246b3b20fb0b2be3f144df4377d72757ed", null);
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7f079adcedb78426afbfb760c47d399eb64b2357f3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOrReadKeylessAction"]),
    "7f30fe9f246b3b20fb0b2be3f144df4377d72757ed": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["syncKeylessConfigAction"]),
    "7f388c1e8a3691a6761356c44b604fb4bf4dcb9398": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateCacheAction"]),
    "7fbfb84318f0afddd7b9a72978e3e6ba2f8eefde06": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteKeylessAction"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7f079adcedb78426afbfb760c47d399eb64b2357f3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f079adcedb78426afbfb760c47d399eb64b2357f3"]),
    "7f30fe9f246b3b20fb0b2be3f144df4377d72757ed": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f30fe9f246b3b20fb0b2be3f144df4377d72757ed"]),
    "7f388c1e8a3691a6761356c44b604fb4bf4dcb9398": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f388c1e8a3691a6761356c44b604fb4bf4dcb9398"]),
    "7fbfb84318f0afddd7b9a72978e3e6ba2f8eefde06": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fbfb84318f0afddd7b9a72978e3e6ba2f8eefde06"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)"));}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript)"));
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript)"));
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/utils/logFormatter.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "logFormatter": (()=>logFormatter)
});
;
const maskSecretKey = (str)=>{
    if (!str || typeof str !== "string") {
        return str;
    }
    try {
        return (str || "").replace(/^(sk_(live|test)_)(.+?)(.{3})$/, "$1*********$4");
    } catch  {
        return "";
    }
};
const logFormatter = (entry)=>{
    return (Array.isArray(entry) ? entry : [
        entry
    ]).map((entry2)=>{
        if (typeof entry2 === "string") {
            return maskSecretKey(entry2);
        }
        const masked = Object.fromEntries(Object.entries(entry2).map(([k, v])=>[
                k,
                maskSecretKey(v)
            ]));
        return JSON.stringify(masked, null, 2);
    }).join(", ");
};
;
 //# sourceMappingURL=logFormatter.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/utils/debugLogger.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createDebugLogger": (()=>createDebugLogger),
    "withLogger": (()=>withLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/package.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$logFormatter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/utils/logFormatter.js [app-rsc] (ecmascript)");
;
;
;
const createDebugLogger = (name, formatter)=>()=>{
        const entries = [];
        let isEnabled = false;
        return {
            enable: ()=>{
                isEnabled = true;
            },
            debug: (...args)=>{
                if (isEnabled) {
                    entries.push(args.map((arg)=>typeof arg === "function" ? arg() : arg));
                }
            },
            commit: ()=>{
                if (isEnabled) {
                    console.log(debugLogHeader(name));
                    for (const log of entries){
                        let output = formatter(log);
                        output = output.split("\n").map((l)=>`  ${l}`).join("\n");
                        if (process.env.VERCEL) {
                            output = truncate(output, 4096);
                        }
                        console.log(output);
                    }
                    console.log(debugLogFooter(name));
                }
            }
        };
    };
const withLogger = (loggerFactoryOrName, handlerCtor)=>{
    return (...args)=>{
        const factory = typeof loggerFactoryOrName === "string" ? createDebugLogger(loggerFactoryOrName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$logFormatter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logFormatter"]) : loggerFactoryOrName;
        const logger = factory();
        const handler = handlerCtor(logger);
        try {
            const res = handler(...args);
            if (typeof res === "object" && "then" in res && typeof res.then === "function") {
                return res.then((val)=>{
                    logger.commit();
                    return val;
                }).catch((err)=>{
                    logger.commit();
                    throw err;
                });
            }
            logger.commit();
            return res;
        } catch (err) {
            logger.commit();
            throw err;
        }
    };
};
function debugLogHeader(name) {
    return `[clerk debug start: ${name}]`;
}
function debugLogFooter(name) {
    return `[clerk debug end: ${name}] (@clerk/nextjs=${"6.12.12"},next=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__["default"].version},timestamp=${Math.round(/* @__PURE__ */ new Date().getTime() / 1e3)})`;
}
function truncate(str, maxLength) {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder("utf-8");
    const encodedString = encoder.encode(str);
    const truncatedString = encodedString.slice(0, maxLength);
    return decoder.decode(truncatedString).replace(/\uFFFD/g, "");
}
;
 //# sourceMappingURL=debugLogger.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-P263NW7Z.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/jwt/legacyReturn.ts
__turbopack_context__.s({
    "withLegacyReturn": (()=>withLegacyReturn),
    "withLegacySyncReturn": (()=>withLegacySyncReturn)
});
function withLegacyReturn(cb) {
    return async (...args)=>{
        const { data, errors } = await cb(...args);
        if (errors) {
            throw errors[0];
        }
        return data;
    };
}
function withLegacySyncReturn(cb) {
    return (...args)=>{
        const { data, errors } = cb(...args);
        if (errors) {
            throw errors[0];
        }
        return data;
    };
}
;
 //# sourceMappingURL=chunk-P263NW7Z.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/jwt/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "decodeJwt": (()=>decodeJwt2),
    "hasValidSignature": (()=>hasValidSignature2),
    "signJwt": (()=>signJwt2),
    "verifyJwt": (()=>verifyJwt2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$P263NW7Z$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-P263NW7Z.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-AT3FJU3M.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-5JS2VYLU.mjs [app-rsc] (ecmascript)");
;
;
;
// src/jwt/signJwt.ts
function encodeJwtData(value) {
    const stringified = JSON.stringify(value);
    const encoder = new TextEncoder();
    const encoded = encoder.encode(stringified);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64url"].stringify(encoded, {
        pad: false
    });
}
async function signJwt(payload, key, options) {
    if (!options.algorithm) {
        throw new Error("No algorithm specified");
    }
    const encoder = new TextEncoder();
    const algorithm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCryptoAlgorithm"])(options.algorithm);
    if (!algorithm) {
        return {
            errors: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignJWTError"](`Unsupported algorithm ${options.algorithm}`)
            ]
        };
    }
    const cryptoKey = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importKey"])(key, algorithm, "sign");
    const header = options.header || {
        typ: "JWT"
    };
    header.alg = options.algorithm;
    payload.iat = Math.floor(Date.now() / 1e3);
    const encodedHeader = encodeJwtData(header);
    const encodedPayload = encodeJwtData(payload);
    const firstPart = `${encodedHeader}.${encodedPayload}`;
    try {
        const signature = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtime"].crypto.subtle.sign(algorithm, cryptoKey, encoder.encode(firstPart));
        const encodedSignature = `${firstPart}.${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64url"].stringify(new Uint8Array(signature), {
            pad: false
        })}`;
        return {
            data: encodedSignature
        };
    } catch (error) {
        return {
            errors: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignJWTError"](error?.message)
            ]
        };
    }
}
// src/jwt/index.ts
var verifyJwt2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$P263NW7Z$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withLegacyReturn"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyJwt"]);
var decodeJwt2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$P263NW7Z$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withLegacySyncReturn"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"]);
var signJwt2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$P263NW7Z$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withLegacyReturn"])(signJwt);
var hasValidSignature2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$P263NW7Z$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withLegacyReturn"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$AT3FJU3M$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasValidSignature"]);
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-CYDR2ZSA.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/logger.ts
__turbopack_context__.s({
    "logger": (()=>logger)
});
var loggedMessages = /* @__PURE__ */ new Set();
var logger = {
    /**
   * A custom logger that ensures messages are logged only once.
   * Reduces noise and duplicated messages when logs are in a hot codepath.
   */ warnOnce: (msg)=>{
        if (loggedMessages.has(msg)) {
            return;
        }
        loggedMessages.add(msg);
        console.warn(msg);
    },
    logOnce: (msg)=>{
        if (loggedMessages.has(msg)) {
            return;
        }
        console.log(msg);
        loggedMessages.add(msg);
    }
};
;
 //# sourceMappingURL=chunk-CYDR2ZSA.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/logger.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
 //# sourceMappingURL=logger.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/logger.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-CYDR2ZSA.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$logger$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/logger.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/proxy.ts
__turbopack_context__.s({
    "isHttpOrHttps": (()=>isHttpOrHttps),
    "isProxyUrlRelative": (()=>isProxyUrlRelative),
    "isValidProxyUrl": (()=>isValidProxyUrl),
    "proxyUrlToAbsoluteURL": (()=>proxyUrlToAbsoluteURL)
});
function isValidProxyUrl(key) {
    if (!key) {
        return true;
    }
    return isHttpOrHttps(key) || isProxyUrlRelative(key);
}
function isHttpOrHttps(key) {
    return /^http(s)?:\/\//.test(key || "");
}
function isProxyUrlRelative(key) {
    return key.startsWith("/");
}
function proxyUrlToAbsoluteURL(url) {
    if (!url) {
        return "";
    }
    return isProxyUrlRelative(url) ? new URL(url, window.location.origin).toString() : url;
}
;
 //# sourceMappingURL=chunk-6NDGN2IU.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/proxy.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
 //# sourceMappingURL=proxy.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/proxy.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/proxy.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "detectDomainLocale", {
    enumerable: true,
    get: function() {
        return detectDomainLocale;
    }
});
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(':', 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parsePath", {
    enumerable: true,
    get: function() {
        return parsePath;
    }
});
function parsePath(path) {
    const hashIndex = path.indexOf('#');
    const queryIndex = path.indexOf('?');
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
} //# sourceMappingURL=parse-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPathPrefix", {
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
});
const _parsepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)");
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPathSuffix", {
    enumerable: true,
    get: function() {
        return addPathSuffix;
    }
});
const _parsepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)");
function addPathSuffix(path, suffix) {
    if (!path.startsWith('/') || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pathHasPrefix", {
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
});
const _parsepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)");
function pathHasPrefix(path, prefix) {
    if (typeof path !== 'string') {
        return false;
    }
    const { pathname } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + '/');
} //# sourceMappingURL=path-has-prefix.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/add-locale.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addLocale", {
    enumerable: true,
    get: function() {
        return addLocale;
    }
});
const _addpathprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-rsc] (ecmascript)");
const _pathhasprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, '/api')) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "formatNextPathnameInfo", {
    enumerable: true,
    get: function() {
        return formatNextPathnameInfo;
    }
});
const _removetrailingslash = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)");
const _addpathprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-rsc] (ecmascript)");
const _addpathsuffix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js [app-rsc] (ecmascript)");
const _addlocale = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/add-locale.js [app-rsc] (ecmascript)");
function formatNextPathnameInfo(info) {
    let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);
    }
    if (info.buildId) {
        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, "/_next/data/" + info.buildId), info.pathname === '/' ? 'index.json' : '.json');
    }
    pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith('/') ? (0, _addpathsuffix.addPathSuffix)(pathname, '/') : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/get-hostname.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getHostname", {
    enumerable: true,
    get: function() {
        return getHostname;
    }
});
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(':', 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removePathPrefix", {
    enumerable: true,
    get: function() {
        return removePathPrefix;
    }
});
const _pathhasprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith('/')) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getNextPathnameInfo", {
    enumerable: true,
    get: function() {
        return getNextPathnameInfo;
    }
});
const _normalizelocalepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js [app-rsc] (ecmascript)");
const _removepathprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)");
const _pathhasprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== '/' ? pathname.endsWith('/') : trailingSlash
    };
    if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {
        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith('/_next/data/') && info.pathname.endsWith('.json')) {
        const paths = info.pathname.replace(/^\/_next\/data\//, '').replace(/\.json$/, '').split('/');
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== 'index' ? "/" + paths.slice(1).join('/') : '/';
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, _normalizelocalepath.normalizeLocalePath)(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/next-url.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NextURL", {
    enumerable: true,
    get: function() {
        return NextURL;
    }
});
const _detectdomainlocale = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js [app-rsc] (ecmascript)");
const _formatnextpathnameinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js [app-rsc] (ecmascript)");
const _gethostname = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/get-hostname.js [app-rsc] (ecmascript)");
const _getnextpathnameinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js [app-rsc] (ecmascript)");
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, 'localhost'), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, 'localhost'));
}
const Internal = Symbol('NextURLInternal');
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === 'object' && 'pathname' in baseOrOpts || typeof baseOrOpts === 'string') {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ''
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, _getnextpathnameinfo.getNextPathnameInfo)(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, _gethostname.getHostname)(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, _detectdomainlocale.detectDomainLocale)((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? '';
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? '';
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw Object.defineProperty(new TypeError(`The NextURL configuration includes no locale "${locale}"`), "__NEXT_ERROR_CODE", {
                value: "E597",
                enumerable: false,
                configurable: true
            });
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith('/') ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/error.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    PageSignatureError: null,
    RemovedPageError: null,
    RemovedUAError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PageSignatureError: function() {
        return PageSignatureError;
    },
    RemovedPageError: function() {
        return RemovedPageError;
    },
    RemovedUAError: function() {
        return RemovedUAError;
    }
});
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/request.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    INTERNALS: null,
    NextRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERNALS: function() {
        return INTERNALS;
    },
    NextRequest: function() {
        return NextRequest;
    }
});
const _nexturl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/next-url.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/utils.js [app-rsc] (ecmascript)");
const _error = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/error.js [app-rsc] (ecmascript)");
const _cookies = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)");
const INTERNALS = Symbol('internal request');
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== 'string' && 'url' in input ? input.url : String(input);
        (0, _utils.validateURL)(url);
        // node Request instance requires duplex option when a body
        // is present or it errors, we don't handle this for
        // Request being passed in since it would have already
        // errored if this wasn't configured
        if ("TURBOPACK compile-time truthy", 1) {
            if (init.body && init.duplex !== 'half') {
                init.duplex = 'half';
            }
        }
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new _nexturl.NextURL(url, {
            headers: (0, _utils.toNodeOutgoingHttpHeaders)(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new _cookies.RequestCookies(this.headers),
            nextUrl,
            url: process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? url : nextUrl.toString()
        };
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            cookies: this.cookies,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new _error.RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new _error.RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/response.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NextResponse", {
    enumerable: true,
    get: function() {
        return NextResponse;
    }
});
const _cookies = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)");
const _nexturl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/next-url.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/utils.js [app-rsc] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
const _cookies1 = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)");
const INTERNALS = Symbol('internal response');
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw Object.defineProperty(new Error('request.headers must be an instance of Headers'), "__NEXT_ERROR_CODE", {
                value: "E119",
                enumerable: false,
                configurable: true
            });
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set('x-middleware-request-' + key, value);
            keys.push(key);
        }
        headers.set('x-middleware-override-headers', keys.join(','));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        const headers = this.headers;
        const cookies = new _cookies1.ResponseCookies(headers);
        const cookiesProxy = new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'delete':
                    case 'set':
                        {
                            return (...args)=>{
                                const result = Reflect.apply(target[prop], target, args);
                                const newHeaders = new Headers(headers);
                                if (result instanceof _cookies1.ResponseCookies) {
                                    headers.set('x-middleware-set-cookie', result.getAll().map((cookie)=>(0, _cookies.stringifyCookie)(cookie)).join(','));
                                }
                                handleMiddlewareField(init, newHeaders);
                                return result;
                            };
                        }
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
        this[INTERNALS] = {
            cookies: cookiesProxy,
            url: init.url ? new _nexturl.NextURL(init.url, {
                headers: (0, _utils.toNodeOutgoingHttpHeaders)(headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === 'number' ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw Object.defineProperty(new RangeError('Failed to execute "redirect" on "response": Invalid status code'), "__NEXT_ERROR_CODE", {
                value: "E529",
                enumerable: false,
                configurable: true
            });
        }
        const initObj = typeof init === 'object' ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set('Location', (0, _utils.validateURL)(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set('x-middleware-rewrite', (0, _utils.validateURL)(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set('x-middleware-next', '1');
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/image-response.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @deprecated ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead.
 * Migration with codemods: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#next-og-import
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageResponse", {
    enumerable: true,
    get: function() {
        return ImageResponse;
    }
});
function ImageResponse() {
    throw Object.defineProperty(new Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead'), "__NEXT_ERROR_CODE", {
        value: "E183",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=image-response.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/ua-parser-js/ua-parser.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
(()=>{
    var i = {
        226: function(i, e) {
            (function(o, a) {
                "use strict";
                var r = "1.0.35", t = "", n = "?", s = "function", b = "undefined", w = "object", l = "string", d = "major", c = "model", u = "name", p = "type", m = "vendor", f = "version", h = "architecture", v = "console", g = "mobile", k = "tablet", x = "smarttv", _ = "wearable", y = "embedded", q = 350;
                var T = "Amazon", S = "Apple", z = "ASUS", N = "BlackBerry", A = "Browser", C = "Chrome", E = "Edge", O = "Firefox", U = "Google", j = "Huawei", P = "LG", R = "Microsoft", M = "Motorola", B = "Opera", V = "Samsung", D = "Sharp", I = "Sony", W = "Viera", F = "Xiaomi", G = "Zebra", H = "Facebook", L = "Chromium OS", Z = "Mac OS";
                var extend = function(i, e) {
                    var o = {};
                    for(var a in i){
                        if (e[a] && e[a].length % 2 === 0) {
                            o[a] = e[a].concat(i[a]);
                        } else {
                            o[a] = i[a];
                        }
                    }
                    return o;
                }, enumerize = function(i) {
                    var e = {};
                    for(var o = 0; o < i.length; o++){
                        e[i[o].toUpperCase()] = i[o];
                    }
                    return e;
                }, has = function(i, e) {
                    return typeof i === l ? lowerize(e).indexOf(lowerize(i)) !== -1 : false;
                }, lowerize = function(i) {
                    return i.toLowerCase();
                }, majorize = function(i) {
                    return typeof i === l ? i.replace(/[^\d\.]/g, t).split(".")[0] : a;
                }, trim = function(i, e) {
                    if (typeof i === l) {
                        i = i.replace(/^\s\s*/, t);
                        return typeof e === b ? i : i.substring(0, q);
                    }
                };
                var rgxMapper = function(i, e) {
                    var o = 0, r, t, n, b, l, d;
                    while(o < e.length && !l){
                        var c = e[o], u = e[o + 1];
                        r = t = 0;
                        while(r < c.length && !l){
                            if (!c[r]) {
                                break;
                            }
                            l = c[r++].exec(i);
                            if (!!l) {
                                for(n = 0; n < u.length; n++){
                                    d = l[++t];
                                    b = u[n];
                                    if (typeof b === w && b.length > 0) {
                                        if (b.length === 2) {
                                            if (typeof b[1] == s) {
                                                this[b[0]] = b[1].call(this, d);
                                            } else {
                                                this[b[0]] = b[1];
                                            }
                                        } else if (b.length === 3) {
                                            if (typeof b[1] === s && !(b[1].exec && b[1].test)) {
                                                this[b[0]] = d ? b[1].call(this, d, b[2]) : a;
                                            } else {
                                                this[b[0]] = d ? d.replace(b[1], b[2]) : a;
                                            }
                                        } else if (b.length === 4) {
                                            this[b[0]] = d ? b[3].call(this, d.replace(b[1], b[2])) : a;
                                        }
                                    } else {
                                        this[b] = d ? d : a;
                                    }
                                }
                            }
                        }
                        o += 2;
                    }
                }, strMapper = function(i, e) {
                    for(var o in e){
                        if (typeof e[o] === w && e[o].length > 0) {
                            for(var r = 0; r < e[o].length; r++){
                                if (has(e[o][r], i)) {
                                    return o === n ? a : o;
                                }
                            }
                        } else if (has(e[o], i)) {
                            return o === n ? a : o;
                        }
                    }
                    return i;
                };
                var $ = {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }, X = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: [
                        "NT 5.1",
                        "NT 5.2"
                    ],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: [
                        "NT 6.4",
                        "NT 10.0"
                    ],
                    RT: "ARM"
                };
                var K = {
                    browser: [
                        [
                            /\b(?:crmo|crios)\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Chrome"
                            ]
                        ],
                        [
                            /edg(?:e|ios|a)?\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Edge"
                            ]
                        ],
                        [
                            /(opera mini)\/([-\w\.]+)/i,
                            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /opios[\/ ]+([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Mini"
                            ]
                        ],
                        [
                            /\bopr\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B
                            ]
                        ],
                        [
                            /(kindle)\/([\w\.]+)/i,
                            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                            /(?:ms|\()(ie) ([\w\.]+)/i,
                            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                            /(heytap|ovi)browser\/([\d\.]+)/i,
                            /(weibo)__([\d\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "UC" + A
                            ]
                        ],
                        [
                            /microm.+\bqbcore\/([\w\.]+)/i,
                            /\bqbcore\/([\w\.]+).+microm/i
                        ],
                        [
                            f,
                            [
                                u,
                                "WeChat(Win) Desktop"
                            ]
                        ],
                        [
                            /micromessenger\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "WeChat"
                            ]
                        ],
                        [
                            /konqueror\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Konqueror"
                            ]
                        ],
                        [
                            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
                        ],
                        [
                            f,
                            [
                                u,
                                "IE"
                            ]
                        ],
                        [
                            /ya(?:search)?browser\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Yandex"
                            ]
                        ],
                        [
                            /(avast|avg)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /(.+)/,
                                "$1 Secure " + A
                            ],
                            f
                        ],
                        [
                            /\bfocus\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " Focus"
                            ]
                        ],
                        [
                            /\bopt\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Touch"
                            ]
                        ],
                        [
                            /coc_coc\w+\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Coc Coc"
                            ]
                        ],
                        [
                            /dolfin\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Dolphin"
                            ]
                        ],
                        [
                            /coast\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Coast"
                            ]
                        ],
                        [
                            /miuibrowser\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "MIUI " + A
                            ]
                        ],
                        [
                            /fxios\/([-\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O
                            ]
                        ],
                        [
                            /\bqihu|(qi?ho?o?|360)browser/i
                        ],
                        [
                            [
                                u,
                                "360 " + A
                            ]
                        ],
                        [
                            /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /(.+)/,
                                "$1 " + A
                            ],
                            f
                        ],
                        [
                            /(comodo_dragon)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /_/g,
                                " "
                            ],
                            f
                        ],
                        [
                            /(electron)\/([\w\.]+) safari/i,
                            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(metasr)[\/ ]?([\w\.]+)/i,
                            /(lbbrowser)/i,
                            /\[(linkedin)app\]/i
                        ],
                        [
                            u
                        ],
                        [
                            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
                        ],
                        [
                            [
                                u,
                                H
                            ],
                            f
                        ],
                        [
                            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                            /safari (line)\/([\w\.]+)/i,
                            /\b(line)\/([\w\.]+)\/iab/i,
                            /(chromium|instagram)[\/ ]([-\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /\bgsa\/([\w\.]+) .*safari\//i
                        ],
                        [
                            f,
                            [
                                u,
                                "GSA"
                            ]
                        ],
                        [
                            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "TikTok"
                            ]
                        ],
                        [
                            /headlesschrome(?:\/([\w\.]+)| )/i
                        ],
                        [
                            f,
                            [
                                u,
                                C + " Headless"
                            ]
                        ],
                        [
                            / wv\).+(chrome)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                C + " WebView"
                            ],
                            f
                        ],
                        [
                            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Android " + A
                            ]
                        ],
                        [
                            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Mobile Safari"
                            ]
                        ],
                        [
                            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
                        ],
                        [
                            f,
                            u
                        ],
                        [
                            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
                        ],
                        [
                            u,
                            [
                                f,
                                strMapper,
                                $
                            ]
                        ],
                        [
                            /(webkit|khtml)\/([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(navigator|netscape\d?)\/([-\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                "Netscape"
                            ],
                            f
                        ],
                        [
                            /mobile vr; rv:([\w\.]+)\).+firefox/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " Reality"
                            ]
                        ],
                        [
                            /ekiohf.+(flow)\/([\w\.]+)/i,
                            /(swiftfox)/i,
                            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                            /(firefox)\/([\w\.]+)/i,
                            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                            /(links) \(([\w\.]+)/i,
                            /panasonic;(viera)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(cobalt)\/([\w\.]+)/i
                        ],
                        [
                            u,
                            [
                                f,
                                /master.|lts./,
                                ""
                            ]
                        ]
                    ],
                    cpu: [
                        [
                            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "amd64"
                            ]
                        ],
                        [
                            /(ia32(?=;))/i
                        ],
                        [
                            [
                                h,
                                lowerize
                            ]
                        ],
                        [
                            /((?:i[346]|x)86)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "ia32"
                            ]
                        ],
                        [
                            /\b(aarch64|arm(v?8e?l?|_?64))\b/i
                        ],
                        [
                            [
                                h,
                                "arm64"
                            ]
                        ],
                        [
                            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
                        ],
                        [
                            [
                                h,
                                "armhf"
                            ]
                        ],
                        [
                            /windows (ce|mobile); ppc;/i
                        ],
                        [
                            [
                                h,
                                "arm"
                            ]
                        ],
                        [
                            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
                        ],
                        [
                            [
                                h,
                                /ower/,
                                t,
                                lowerize
                            ]
                        ],
                        [
                            /(sun4\w)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "sparc"
                            ]
                        ],
                        [
                            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                        ],
                        [
                            [
                                h,
                                lowerize
                            ]
                        ]
                    ],
                    device: [
                        [
                            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
                        ],
                        [
                            c,
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                            /samsung[- ]([-\w]+)/i,
                            /sec-(sgh\w+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\((ipad);[-\w\),; ]+apple/i,
                            /applecoremedia\/[\w\.]+ \((ipad)/i,
                            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(macintosh);/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ]
                        ],
                        [
                            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                D
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
                        ],
                        [
                            c,
                            [
                                m,
                                j
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(?:huawei|honor)([-\w ]+)[;\)]/i,
                            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
                        ],
                        [
                            c,
                            [
                                m,
                                j
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(poco[\w ]+)(?: bui|\))/i,
                            /\b; (\w+) build\/hm\1/i,
                            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /; (\w+) bui.+ oppo/i,
                            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "OPPO"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /vivo (\w+)(?: bui|\))/i,
                            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Vivo"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(rmx[12]\d{3})(?: bui|;|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Realme"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                            /\bmot(?:orola)?[- ](\w*)/i,
                            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                        ],
                        [
                            c,
                            [
                                m,
                                M
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
                        ],
                        [
                            c,
                            [
                                m,
                                M
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
                        ],
                        [
                            c,
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                            /\blg-?([\d\w]+) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(ideatab[-\w ]+)/i,
                            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Lenovo"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(?:maemo|nokia).*(n900|lumia \d+)/i,
                            /nokia[-_ ]?([-\w\.]*)/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                "Nokia"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(pixel c)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /sony tablet [ps]/i,
                            /\b(?:sony)?sgp\w+(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                "Xperia Tablet"
                            ],
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            / (kb2005|in20[12]5|be20[12][59])\b/i,
                            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "OnePlus"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(alexa)webm/i,
                            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                            /(kf[a-z]+)( bui|\)).+silk\//i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
                        ],
                        [
                            [
                                c,
                                /(.+)/g,
                                "Fire Phone $1"
                            ],
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(playbook);[-\w\),; ]+(rim)/i
                        ],
                        [
                            c,
                            m,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((?:bb[a-f]|st[hv])100-\d)/i,
                            /\(bb10; (\w+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                N
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
                        ],
                        [
                            c,
                            [
                                m,
                                z
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                z
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(nexus 9)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "HTC"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
                        ],
                        [
                            m,
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Acer"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (m[1-5] note) bui/i,
                            /\bmz-([-\w]{2,})/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Meizu"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                            /(hp) ([\w ]+\w)/i,
                            /(asus)-?(\w+)/i,
                            /(microsoft); (lumia[\w ]+)/i,
                            /(lenovo)[-_ ]?([-\w]+)/i,
                            /(jolla)/i,
                            /(oppo) ?([\w ]+) bui/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(kobo)\s(ereader|touch)/i,
                            /(archos) (gamepad2?)/i,
                            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                            /(kindle)\/([\w\.]+)/i,
                            /(nook)[\w ]+build\/(\w+)/i,
                            /(dell) (strea[kpr\d ]*[\dko])/i,
                            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                            /(trinity)[- ]*(t\d{3}) bui/i,
                            /(gigaset)[- ]+(q\w{1,9}) bui/i,
                            /(vodafone) ([\w ]+)(?:\)| bui)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(surface duo)/i
                        ],
                        [
                            c,
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid [\d\.]+; (fp\du?)(?: b|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Fairphone"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(u304aa)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "AT&T"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\bsie-(\w*)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Siemens"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(rct\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "RCA"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(venue[\d ]{2,7}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Dell"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(q(?:mv|ta)\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Verizon"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Barnes & Noble"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(tm\d{3}\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "NuVision"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(k88) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "ZTE"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(nx\d{3}j) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "ZTE"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(gen\d{3}) b.+49h/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Swiss"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(zur\d{3}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Swiss"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((zeki)?tb.*\b) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Zeki"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b([yr]\d{2}) b/i,
                            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
                        ],
                        [
                            [
                                m,
                                "Dragon Touch"
                            ],
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(ns-?\w{0,9}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Insignia"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((nxa|next)-?\w{0,9}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "NextBook"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
                        ],
                        [
                            [
                                m,
                                "Voice"
                            ],
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(lvtel\-)?(v1[12]) b/i
                        ],
                        [
                            [
                                m,
                                "LvTel"
                            ],
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(ph-1) /i
                        ],
                        [
                            c,
                            [
                                m,
                                "Essential"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(v(100md|700na|7011|917g).*\b) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Envizen"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(trio[-\w\. ]+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "MachSpeed"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\btu_(1491) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Rotor"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(shield[\w ]+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Nvidia"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(sprint) (\w+)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(kin\.[onetw]{3})/i
                        ],
                        [
                            [
                                c,
                                /\./g,
                                " "
                            ],
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /smart-tv.+(samsung)/i
                        ],
                        [
                            m,
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /hbbtv.+maple;(\d+)/i
                        ],
                        [
                            [
                                c,
                                /^/,
                                "SmartTV"
                            ],
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
                        ],
                        [
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(apple) ?tv/i
                        ],
                        [
                            m,
                            [
                                c,
                                S + " TV"
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /crkey/i
                        ],
                        [
                            [
                                c,
                                C + "cast"
                            ],
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /droid.+aft(\w)( bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\(dtv[\);].+(aquos)/i,
                            /(aquos-tv[\w ]+)\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                D
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(bravia[\w ]+)( bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(mitv-\w{5}) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /Hbbtv.*(technisat) (.*);/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
                        ],
                        [
                            [
                                m,
                                trim
                            ],
                            [
                                c,
                                trim
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
                        ],
                        [
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(ouya)/i,
                            /(nintendo) ([wids3utch]+)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /droid.+; (shield) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Nvidia"
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /(playstation [345portablevi]+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
                        ],
                        [
                            c,
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /((pebble))app/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /droid.+; (glass) \d/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /droid.+; (wt63?0{2,3})\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(quest( 2| pro)?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                H
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
                        ],
                        [
                            m,
                            [
                                p,
                                y
                            ]
                        ],
                        [
                            /(aeobc)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                y
                            ]
                        ],
                        [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
                        ],
                        [
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
                        ],
                        [
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
                        ],
                        [
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
                        ],
                        [
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(android[-\w\. ]{0,9});.+buil/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Generic"
                            ]
                        ]
                    ],
                    engine: [
                        [
                            /windows.+ edge\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                E + "HTML"
                            ]
                        ],
                        [
                            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Blink"
                            ]
                        ],
                        [
                            /(presto)\/([\w\.]+)/i,
                            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                            /ekioh(flow)\/([\w\.]+)/i,
                            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                            /(icab)[\/ ]([23]\.[\d\.]+)/i,
                            /\b(libweb)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /rv\:([\w\.]{1,9})\b.+(gecko)/i
                        ],
                        [
                            f,
                            u
                        ]
                    ],
                    os: [
                        [
                            /microsoft (windows) (vista|xp)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(windows) nt 6\.2; (arm)/i,
                            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
                        ],
                        [
                            u,
                            [
                                f,
                                strMapper,
                                X
                            ]
                        ],
                        [
                            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
                        ],
                        [
                            [
                                u,
                                "Windows"
                            ],
                            [
                                f,
                                strMapper,
                                X
                            ]
                        ],
                        [
                            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                            /ios;fbsv\/([\d\.]+)/i,
                            /cfnetwork\/.+darwin/i
                        ],
                        [
                            [
                                f,
                                /_/g,
                                "."
                            ],
                            [
                                u,
                                "iOS"
                            ]
                        ],
                        [
                            /(mac os x) ?([\w\. ]*)/i,
                            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
                        ],
                        [
                            [
                                u,
                                Z
                            ],
                            [
                                f,
                                /_/g,
                                "."
                            ]
                        ],
                        [
                            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
                        ],
                        [
                            f,
                            u
                        ],
                        [
                            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                            /(blackberry)\w*\/([\w\.]*)/i,
                            /(tizen|kaios)[\/ ]([\w\.]+)/i,
                            /\((series40);/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /\(bb(10);/i
                        ],
                        [
                            f,
                            [
                                u,
                                N
                            ]
                        ],
                        [
                            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Symbian"
                            ]
                        ],
                        [
                            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " OS"
                            ]
                        ],
                        [
                            /web0s;.+rt(tv)/i,
                            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "webOS"
                            ]
                        ],
                        [
                            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "watchOS"
                            ]
                        ],
                        [
                            /crkey\/([\d\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                C + "cast"
                            ]
                        ],
                        [
                            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
                        ],
                        [
                            [
                                u,
                                L
                            ],
                            f
                        ],
                        [
                            /panasonic;(viera)/i,
                            /(netrange)mmh/i,
                            /(nettv)\/(\d+\.[\w\.]+)/i,
                            /(nintendo|playstation) ([wids345portablevuch]+)/i,
                            /(xbox); +xbox ([^\);]+)/i,
                            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                            /(mint)[\/\(\) ]?(\w*)/i,
                            /(mageia|vectorlinux)[; ]/i,
                            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                            /(hurd|linux) ?([\w\.]*)/i,
                            /(gnu) ?([\w\.]*)/i,
                            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                            /(haiku) (\w+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(sunos) ?([\w\.\d]*)/i
                        ],
                        [
                            [
                                u,
                                "Solaris"
                            ],
                            f
                        ],
                        [
                            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                            /(unix) ?([\w\.]*)/i
                        ],
                        [
                            u,
                            f
                        ]
                    ]
                };
                var UAParser = function(i, e) {
                    if (typeof i === w) {
                        e = i;
                        i = a;
                    }
                    if (!(this instanceof UAParser)) {
                        return new UAParser(i, e).getResult();
                    }
                    var r = typeof o !== b && o.navigator ? o.navigator : a;
                    var n = i || (r && r.userAgent ? r.userAgent : t);
                    var v = r && r.userAgentData ? r.userAgentData : a;
                    var x = e ? extend(K, e) : K;
                    var _ = r && r.userAgent == n;
                    this.getBrowser = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.browser);
                        i[d] = majorize(i[f]);
                        if (_ && r && r.brave && typeof r.brave.isBrave == s) {
                            i[u] = "Brave";
                        }
                        return i;
                    };
                    this.getCPU = function() {
                        var i = {};
                        i[h] = a;
                        rgxMapper.call(i, n, x.cpu);
                        return i;
                    };
                    this.getDevice = function() {
                        var i = {};
                        i[m] = a;
                        i[c] = a;
                        i[p] = a;
                        rgxMapper.call(i, n, x.device);
                        if (_ && !i[p] && v && v.mobile) {
                            i[p] = g;
                        }
                        if (_ && i[c] == "Macintosh" && r && typeof r.standalone !== b && r.maxTouchPoints && r.maxTouchPoints > 2) {
                            i[c] = "iPad";
                            i[p] = k;
                        }
                        return i;
                    };
                    this.getEngine = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.engine);
                        return i;
                    };
                    this.getOS = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.os);
                        if (_ && !i[u] && v && v.platform != "Unknown") {
                            i[u] = v.platform.replace(/chrome os/i, L).replace(/macos/i, Z);
                        }
                        return i;
                    };
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        };
                    };
                    this.getUA = function() {
                        return n;
                    };
                    this.setUA = function(i) {
                        n = typeof i === l && i.length > q ? trim(i, q) : i;
                        return this;
                    };
                    this.setUA(n);
                    return this;
                };
                UAParser.VERSION = r;
                UAParser.BROWSER = enumerize([
                    u,
                    f,
                    d
                ]);
                UAParser.CPU = enumerize([
                    h
                ]);
                UAParser.DEVICE = enumerize([
                    c,
                    m,
                    p,
                    v,
                    g,
                    x,
                    k,
                    _,
                    y
                ]);
                UAParser.ENGINE = UAParser.OS = enumerize([
                    u,
                    f
                ]);
                if (typeof e !== b) {
                    if ("object" !== b && i.exports) {
                        e = i.exports = UAParser;
                    }
                    e.UAParser = UAParser;
                } else {
                    if (typeof define === s && define.amd) {
                        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
                            return UAParser;
                        }(__turbopack_context__.r, exports, module));
                    } else if (typeof o !== b) {
                        o.UAParser = UAParser;
                    }
                }
                var Q = typeof o !== b && (o.jQuery || o.Zepto);
                if (Q && !Q.ua) {
                    var Y = new UAParser;
                    Q.ua = Y.getResult();
                    Q.ua.get = function() {
                        return Y.getUA();
                    };
                    Q.ua.set = function(i) {
                        Y.setUA(i);
                        var e = Y.getResult();
                        for(var o in e){
                            Q.ua[o] = e[o];
                        }
                    };
                }
            })(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : this);
        }
    };
    var e = {};
    function __nccwpck_require__(o) {
        var a = e[o];
        if (a !== undefined) {
            return a.exports;
        }
        var r = e[o] = {
            exports: {}
        };
        var t = true;
        try {
            i[o].call(r.exports, r, r.exports, __nccwpck_require__);
            t = false;
        } finally{
            if (t) delete e[o];
        }
        return r.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var o = __nccwpck_require__(226);
    module.exports = o;
})();
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/user-agent.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isBot: null,
    userAgent: null,
    userAgentFromString: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isBot: function() {
        return isBot;
    },
    userAgent: function() {
        return userAgent;
    },
    userAgentFromString: function() {
        return userAgentFromString;
    }
});
const _uaparserjs = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/ua-parser-js/ua-parser.js [app-rsc] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isBot(input) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(input);
}
function userAgentFromString(input) {
    return {
        ...(0, _uaparserjs.default)(input),
        isBot: input === undefined ? false : isBot(input)
    };
}
function userAgent({ headers }) {
    return userAgentFromString(headers.get('user-agent') || undefined);
} //# sourceMappingURL=user-agent.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/url-pattern.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "URLPattern", {
    enumerable: true,
    get: function() {
        return GlobalURLPattern;
    }
});
const GlobalURLPattern = typeof URLPattern === 'undefined' ? undefined : URLPattern; //# sourceMappingURL=url-pattern.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/after/after.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "after", {
    enumerable: true,
    get: function() {
        return after;
    }
});
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
function after(task) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        // TODO(after): the linked docs page talks about *dynamic* APIs, which after soon won't be anymore
        throw Object.defineProperty(new Error('`after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context'), "__NEXT_ERROR_CODE", {
            value: "E468",
            enumerable: false,
            configurable: true
        });
    }
    const { afterContext } = workStore;
    return afterContext.after(task);
} //# sourceMappingURL=after.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/after/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && __export(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/after/after.js [app-rsc] (ecmascript)"));
_export_star(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/after/after.js [app-rsc] (ecmascript)"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/connection.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "connection", {
    enumerable: true,
    get: function() {
        return connection;
    }
});
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/utils.js [app-rsc] (ecmascript)");
function connection() {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used "connection" inside "after(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but "after(...)" executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E186",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // headers object without tracking
            return Promise.resolve(undefined);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'cache') {
                throw Object.defineProperty(new Error(`Route ${workStore.route} used "connection" inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                    value: "E111",
                    enumerable: false,
                    configurable: true
                });
            } else if (workUnitStore.type === 'unstable-cache') {
                throw Object.defineProperty(new Error(`Route ${workStore.route} used "connection" inside a function cached with "unstable_cache(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                    value: "E1",
                    enumerable: false,
                    configurable: true
                });
            }
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E562",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'prerender') {
                // dynamicIO Prerender
                // We return a promise that never resolves to allow the prender to stall at this point
                return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, '`connection()`');
            } else if (workUnitStore.type === 'prerender-ppr') {
                // PPR Prerender (no dynamicIO)
                // We use React's postpone API to interrupt rendering here to create a dynamic hole
                (0, _dynamicrendering.postponeWithTracking)(workStore.route, 'connection', workUnitStore.dynamicTracking);
            } else if (workUnitStore.type === 'prerender-legacy') {
                // Legacy Prerender
                // We throw an error here to interrupt prerendering to mark the route as dynamic
                (0, _dynamicrendering.throwToInterruptStaticGeneration)('connection', workStore, workUnitStore);
            }
        }
        // We fall through to the dynamic context below but we still track dynamic access
        // because in dev we can still error for things like using headers inside a cache context
        (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workStore, workUnitStore);
    }
    return Promise.resolve(undefined);
} //# sourceMappingURL=connection.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return "`" + target + "." + prop + "`";
    }
    return "`" + target + "[" + JSON.stringify(prop) + "]`";
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return "`Reflect.has(" + target + ", " + stringifiedProp + ")`, `" + stringifiedProp + " in " + target + "`, or similar";
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    // fallthrough
    'then',
    'catch',
    'finally',
    // React Promise extension
    // fallthrough
    'status',
    // React introspection
    'displayName',
    // Common tested properties
    // fallthrough
    'toJSON',
    '$$typeof',
    '__esModule'
]); //# sourceMappingURL=reflect-utils.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/root-params.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rootParams", {
    enumerable: true,
    get: function() {
        return unstable_rootParams;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-rsc] (ecmascript)");
const CachedParams = new WeakMap();
async function unstable_rootParams() {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Missing workStore in unstable_rootParams'), "__NEXT_ERROR_CODE", {
            value: "E615",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workUnitStore) {
        throw Object.defineProperty(new Error(`Route ${workStore.route} used \`unstable_rootParams()\` in Pages Router. This API is only available within App Router.`), "__NEXT_ERROR_CODE", {
            value: "E641",
            enumerable: false,
            configurable: true
        });
    }
    switch(workUnitStore.type){
        case 'unstable-cache':
        case 'cache':
            {
                throw Object.defineProperty(new Error(`Route ${workStore.route} used \`unstable_rootParams()\` inside \`"use cache"\` or \`unstable_cache\`. Support for this API inside cache scopes is planned for a future version of Next.js.`), "__NEXT_ERROR_CODE", {
                    value: "E642",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'prerender':
        case 'prerender-ppr':
        case 'prerender-legacy':
            return createPrerenderRootParams(workUnitStore.rootParams, workStore, workUnitStore);
        default:
            return Promise.resolve(workUnitStore.rootParams);
    }
}
function createPrerenderRootParams(underlyingParams, workStore, prerenderStore) {
    const fallbackParams = workStore.fallbackRouteParams;
    if (fallbackParams) {
        let hasSomeFallbackParams = false;
        for(const key in underlyingParams){
            if (fallbackParams.has(key)) {
                hasSomeFallbackParams = true;
                break;
            }
        }
        if (hasSomeFallbackParams) {
            // params need to be treated as dynamic because we have at least one fallback param
            if (prerenderStore.type === 'prerender') {
                // We are in a dynamicIO (PPR or otherwise) prerender
                const cachedParams = CachedParams.get(underlyingParams);
                if (cachedParams) {
                    return cachedParams;
                }
                const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`unstable_rootParams`');
                CachedParams.set(underlyingParams, promise);
                return promise;
            }
            // remaining cases are prerender-ppr and prerender-legacy
            // We aren't in a dynamicIO prerender but we do have fallback params at this
            // level so we need to make an erroring params object which will postpone
            // if you access the fallback params
            return makeErroringRootParams(underlyingParams, fallbackParams, workStore, prerenderStore);
        }
    }
    // We don't have any fallback params so we have an entirely static safe params object
    return Promise.resolve(underlyingParams);
}
function makeErroringRootParams(underlyingParams, fallbackParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const augmentedUnderlying = {
        ...underlyingParams
    };
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(augmentedUnderlying);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            if (fallbackParams.has(prop)) {
                Object.defineProperty(augmentedUnderlying, prop, {
                    get () {
                        const expression = (0, _reflectutils.describeStringPropertyAccess)('unstable_rootParams', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when dynamicIO is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no dynamicIO)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                    },
                    enumerable: true
                });
            } else {
                ;
                promise[prop] = underlyingParams[prop];
            }
        }
    });
    return promise;
} //# sourceMappingURL=root-params.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/server.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const serverExports = {
    NextRequest: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/request.js [app-rsc] (ecmascript)").NextRequest,
    NextResponse: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/response.js [app-rsc] (ecmascript)").NextResponse,
    ImageResponse: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/image-response.js [app-rsc] (ecmascript)").ImageResponse,
    userAgentFromString: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/user-agent.js [app-rsc] (ecmascript)").userAgentFromString,
    userAgent: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/user-agent.js [app-rsc] (ecmascript)").userAgent,
    URLPattern: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/url-pattern.js [app-rsc] (ecmascript)").URLPattern,
    after: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/after/index.js [app-rsc] (ecmascript)").after,
    connection: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/connection.js [app-rsc] (ecmascript)").connection,
    unstable_rootParams: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/root-params.js [app-rsc] (ecmascript)").unstable_rootParams
};
// https://nodejs.org/api/esm.html#commonjs-namespaces
// When importing CommonJS modules, the module.exports object is provided as the default export
module.exports = serverExports;
// make import { xxx } from 'next/server' work
exports.NextRequest = serverExports.NextRequest;
exports.NextResponse = serverExports.NextResponse;
exports.ImageResponse = serverExports.ImageResponse;
exports.userAgentFromString = serverExports.userAgentFromString;
exports.userAgent = serverExports.userAgent;
exports.URLPattern = serverExports.URLPattern;
exports.after = serverExports.after;
exports.connection = serverExports.connection;
exports.unstable_rootParams = serverExports.unstable_rootParams;
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/constants.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "constants": (()=>constants)
});
;
const Headers = {
    NextRewrite: "x-middleware-rewrite",
    NextResume: "x-middleware-next",
    NextRedirect: "Location",
    // Used by next to identify internal navigation for app router
    NextUrl: "next-url",
    NextAction: "next-action",
    // Used by next to identify internal navigation for pages router
    NextjsData: "x-nextjs-data"
};
const constants = {
    Headers
};
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/vendor/crypto-es.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AES": (()=>Ht),
    "HmacSHA1": (()=>Dt),
    "Utf8": (()=>X)
});
var kt = Object.defineProperty;
var bt = (c, t, s)=>t in c ? kt(c, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : c[t] = s;
var it = (c, t, s)=>bt(c, typeof t != "symbol" ? t + "" : t, s);
var lt, ht, dt, pt, xt, _t, at = ((lt = typeof globalThis != "undefined" ? globalThis : void 0) == null ? void 0 : lt.crypto) || ((ht = typeof global != "undefined" ? global : void 0) == null ? void 0 : ht.crypto) || ((dt = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : void 0) == null ? void 0 : dt.crypto) || ((pt = typeof self != "undefined" ? self : void 0) == null ? void 0 : pt.crypto) || ((_t = (xt = typeof frames != "undefined" ? frames : void 0) == null ? void 0 : xt[0]) == null ? void 0 : _t.crypto), Z;
at ? Z = (c)=>{
    let t = [];
    for(let s = 0, e; s < c; s += 4)t.push(at.getRandomValues(new Uint32Array(1))[0]);
    return new u(t, c);
} : Z = (c)=>{
    let t = [], s = (e)=>{
        let r = e, o = 987654321, n = 4294967295;
        return ()=>{
            o = 36969 * (o & 65535) + (o >> 16) & n, r = 18e3 * (r & 65535) + (r >> 16) & n;
            let h = (o << 16) + r & n;
            return h /= 4294967296, h += .5, h * (Math.random() > .5 ? 1 : -1);
        };
    };
    for(let e = 0, r; e < c; e += 4){
        let o = s((r || Math.random()) * 4294967296);
        r = o() * 987654071, t.push(o() * 4294967296 | 0);
    }
    return new u(t, c);
};
var m = class {
    static create(...t) {
        return new this(...t);
    }
    mixIn(t) {
        return Object.assign(this, t);
    }
    clone() {
        let t = new this.constructor;
        return Object.assign(t, this), t;
    }
}, u = class extends m {
    constructor(t = [], s = t.length * 4){
        super();
        let e = t;
        if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
            let r = e.byteLength, o = [];
            for(let n = 0; n < r; n += 1)o[n >>> 2] |= e[n] << 24 - n % 4 * 8;
            this.words = o, this.sigBytes = r;
        } else this.words = t, this.sigBytes = s;
    }
    toString(t = Mt) {
        return t.stringify(this);
    }
    concat(t) {
        let s = this.words, e = t.words, r = this.sigBytes, o = t.sigBytes;
        if (this.clamp(), r % 4) for(let n = 0; n < o; n += 1){
            let h = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
            s[r + n >>> 2] |= h << 24 - (r + n) % 4 * 8;
        }
        else for(let n = 0; n < o; n += 4)s[r + n >>> 2] = e[n >>> 2];
        return this.sigBytes += o, this;
    }
    clamp() {
        let { words: t, sigBytes: s } = this;
        t[s >>> 2] &= 4294967295 << 32 - s % 4 * 8, t.length = Math.ceil(s / 4);
    }
    clone() {
        let t = super.clone.call(this);
        return t.words = this.words.slice(0), t;
    }
};
it(u, "random", Z);
var Mt = {
    stringify (c) {
        let { words: t, sigBytes: s } = c, e = [];
        for(let r = 0; r < s; r += 1){
            let o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
            e.push((o >>> 4).toString(16)), e.push((o & 15).toString(16));
        }
        return e.join("");
    },
    parse (c) {
        let t = c.length, s = [];
        for(let e = 0; e < t; e += 2)s[e >>> 3] |= parseInt(c.substr(e, 2), 16) << 24 - e % 8 * 4;
        return new u(s, t / 2);
    }
}, ft = {
    stringify (c) {
        let { words: t, sigBytes: s } = c, e = [];
        for(let r = 0; r < s; r += 1){
            let o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
            e.push(String.fromCharCode(o));
        }
        return e.join("");
    },
    parse (c) {
        let t = c.length, s = [];
        for(let e = 0; e < t; e += 1)s[e >>> 2] |= (c.charCodeAt(e) & 255) << 24 - e % 4 * 8;
        return new u(s, t);
    }
}, X = {
    stringify (c) {
        try {
            return decodeURIComponent(escape(ft.stringify(c)));
        } catch  {
            throw new Error("Malformed UTF-8 data");
        }
    },
    parse (c) {
        return ft.parse(unescape(encodeURIComponent(c)));
    }
}, N = class extends m {
    constructor(){
        super(), this._minBufferSize = 0;
    }
    reset() {
        this._data = new u, this._nDataBytes = 0;
    }
    _append(t) {
        let s = t;
        typeof s == "string" && (s = X.parse(s)), this._data.concat(s), this._nDataBytes += s.sigBytes;
    }
    _process(t) {
        let s, { _data: e, blockSize: r } = this, o = e.words, n = e.sigBytes, h = r * 4, x = n / h;
        t ? x = Math.ceil(x) : x = Math.max((x | 0) - this._minBufferSize, 0);
        let p = x * r, _ = Math.min(p * 4, n);
        if (p) {
            for(let y = 0; y < p; y += r)this._doProcessBlock(o, y);
            s = o.splice(0, p), e.sigBytes -= _;
        }
        return new u(s, _);
    }
    clone() {
        let t = super.clone.call(this);
        return t._data = this._data.clone(), t;
    }
}, H = class extends N {
    constructor(t){
        super(), this.blockSize = 512 / 32, this.cfg = Object.assign(new m, t), this.reset();
    }
    static _createHelper(t) {
        return (s, e)=>new t(e).finalize(s);
    }
    static _createHmacHelper(t) {
        return (s, e)=>new $(t, e).finalize(s);
    }
    reset() {
        super.reset.call(this), this._doReset();
    }
    update(t) {
        return this._append(t), this._process(), this;
    }
    finalize(t) {
        return t && this._append(t), this._doFinalize();
    }
}, $ = class extends m {
    constructor(t, s){
        super();
        let e = new t;
        this._hasher = e;
        let r = s;
        typeof r == "string" && (r = X.parse(r));
        let o = e.blockSize, n = o * 4;
        r.sigBytes > n && (r = e.finalize(s)), r.clamp();
        let h = r.clone();
        this._oKey = h;
        let x = r.clone();
        this._iKey = x;
        let p = h.words, _ = x.words;
        for(let y = 0; y < o; y += 1)p[y] ^= 1549556828, _[y] ^= 909522486;
        h.sigBytes = n, x.sigBytes = n, this.reset();
    }
    reset() {
        let t = this._hasher;
        t.reset(), t.update(this._iKey);
    }
    update(t) {
        return this._hasher.update(t), this;
    }
    finalize(t) {
        let s = this._hasher, e = s.finalize(t);
        return s.reset(), s.finalize(this._oKey.clone().concat(e));
    }
};
var zt = (c, t, s)=>{
    let e = [], r = 0;
    for(let o = 0; o < t; o += 1)if (o % 4) {
        let n = s[c.charCodeAt(o - 1)] << o % 4 * 2, h = s[c.charCodeAt(o)] >>> 6 - o % 4 * 2, x = n | h;
        e[r >>> 2] |= x << 24 - r % 4 * 8, r += 1;
    }
    return u.create(e, r);
}, tt = {
    stringify (c) {
        let { words: t, sigBytes: s } = c, e = this._map;
        c.clamp();
        let r = [];
        for(let n = 0; n < s; n += 3){
            let h = t[n >>> 2] >>> 24 - n % 4 * 8 & 255, x = t[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255, p = t[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255, _ = h << 16 | x << 8 | p;
            for(let y = 0; y < 4 && n + y * .75 < s; y += 1)r.push(e.charAt(_ >>> 6 * (3 - y) & 63));
        }
        let o = e.charAt(64);
        if (o) for(; r.length % 4;)r.push(o);
        return r.join("");
    },
    parse (c) {
        let t = c.length, s = this._map, e = this._reverseMap;
        if (!e) {
            this._reverseMap = [], e = this._reverseMap;
            for(let o = 0; o < s.length; o += 1)e[s.charCodeAt(o)] = o;
        }
        let r = s.charAt(64);
        if (r) {
            let o = c.indexOf(r);
            o !== -1 && (t = o);
        }
        return zt(c, t, e);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
};
var d = [];
for(let c = 0; c < 64; c += 1)d[c] = Math.abs(Math.sin(c + 1)) * 4294967296 | 0;
var w = (c, t, s, e, r, o, n)=>{
    let h = c + (t & s | ~t & e) + r + n;
    return (h << o | h >>> 32 - o) + t;
}, B = (c, t, s, e, r, o, n)=>{
    let h = c + (t & e | s & ~e) + r + n;
    return (h << o | h >>> 32 - o) + t;
}, k = (c, t, s, e, r, o, n)=>{
    let h = c + (t ^ s ^ e) + r + n;
    return (h << o | h >>> 32 - o) + t;
}, b = (c, t, s, e, r, o, n)=>{
    let h = c + (s ^ (t | ~e)) + r + n;
    return (h << o | h >>> 32 - o) + t;
}, L = class extends H {
    _doReset() {
        this._hash = new u([
            1732584193,
            4023233417,
            2562383102,
            271733878
        ]);
    }
    _doProcessBlock(t, s) {
        let e = t;
        for(let Y = 0; Y < 16; Y += 1){
            let ct = s + Y, G = t[ct];
            e[ct] = (G << 8 | G >>> 24) & 16711935 | (G << 24 | G >>> 8) & 4278255360;
        }
        let r = this._hash.words, o = e[s + 0], n = e[s + 1], h = e[s + 2], x = e[s + 3], p = e[s + 4], _ = e[s + 5], y = e[s + 6], M = e[s + 7], z = e[s + 8], v = e[s + 9], g = e[s + 10], O = e[s + 11], S = e[s + 12], P = e[s + 13], I = e[s + 14], W = e[s + 15], i = r[0], a = r[1], f = r[2], l = r[3];
        i = w(i, a, f, l, o, 7, d[0]), l = w(l, i, a, f, n, 12, d[1]), f = w(f, l, i, a, h, 17, d[2]), a = w(a, f, l, i, x, 22, d[3]), i = w(i, a, f, l, p, 7, d[4]), l = w(l, i, a, f, _, 12, d[5]), f = w(f, l, i, a, y, 17, d[6]), a = w(a, f, l, i, M, 22, d[7]), i = w(i, a, f, l, z, 7, d[8]), l = w(l, i, a, f, v, 12, d[9]), f = w(f, l, i, a, g, 17, d[10]), a = w(a, f, l, i, O, 22, d[11]), i = w(i, a, f, l, S, 7, d[12]), l = w(l, i, a, f, P, 12, d[13]), f = w(f, l, i, a, I, 17, d[14]), a = w(a, f, l, i, W, 22, d[15]), i = B(i, a, f, l, n, 5, d[16]), l = B(l, i, a, f, y, 9, d[17]), f = B(f, l, i, a, O, 14, d[18]), a = B(a, f, l, i, o, 20, d[19]), i = B(i, a, f, l, _, 5, d[20]), l = B(l, i, a, f, g, 9, d[21]), f = B(f, l, i, a, W, 14, d[22]), a = B(a, f, l, i, p, 20, d[23]), i = B(i, a, f, l, v, 5, d[24]), l = B(l, i, a, f, I, 9, d[25]), f = B(f, l, i, a, x, 14, d[26]), a = B(a, f, l, i, z, 20, d[27]), i = B(i, a, f, l, P, 5, d[28]), l = B(l, i, a, f, h, 9, d[29]), f = B(f, l, i, a, M, 14, d[30]), a = B(a, f, l, i, S, 20, d[31]), i = k(i, a, f, l, _, 4, d[32]), l = k(l, i, a, f, z, 11, d[33]), f = k(f, l, i, a, O, 16, d[34]), a = k(a, f, l, i, I, 23, d[35]), i = k(i, a, f, l, n, 4, d[36]), l = k(l, i, a, f, p, 11, d[37]), f = k(f, l, i, a, M, 16, d[38]), a = k(a, f, l, i, g, 23, d[39]), i = k(i, a, f, l, P, 4, d[40]), l = k(l, i, a, f, o, 11, d[41]), f = k(f, l, i, a, x, 16, d[42]), a = k(a, f, l, i, y, 23, d[43]), i = k(i, a, f, l, v, 4, d[44]), l = k(l, i, a, f, S, 11, d[45]), f = k(f, l, i, a, W, 16, d[46]), a = k(a, f, l, i, h, 23, d[47]), i = b(i, a, f, l, o, 6, d[48]), l = b(l, i, a, f, M, 10, d[49]), f = b(f, l, i, a, I, 15, d[50]), a = b(a, f, l, i, _, 21, d[51]), i = b(i, a, f, l, S, 6, d[52]), l = b(l, i, a, f, x, 10, d[53]), f = b(f, l, i, a, g, 15, d[54]), a = b(a, f, l, i, n, 21, d[55]), i = b(i, a, f, l, z, 6, d[56]), l = b(l, i, a, f, W, 10, d[57]), f = b(f, l, i, a, y, 15, d[58]), a = b(a, f, l, i, P, 21, d[59]), i = b(i, a, f, l, p, 6, d[60]), l = b(l, i, a, f, O, 10, d[61]), f = b(f, l, i, a, h, 15, d[62]), a = b(a, f, l, i, v, 21, d[63]), r[0] = r[0] + i | 0, r[1] = r[1] + a | 0, r[2] = r[2] + f | 0, r[3] = r[3] + l | 0;
    }
    _doFinalize() {
        let t = this._data, s = t.words, e = this._nDataBytes * 8, r = t.sigBytes * 8;
        s[r >>> 5] |= 128 << 24 - r % 32;
        let o = Math.floor(e / 4294967296), n = e;
        s[(r + 64 >>> 9 << 4) + 15] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, s[(r + 64 >>> 9 << 4) + 14] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360, t.sigBytes = (s.length + 1) * 4, this._process();
        let h = this._hash, x = h.words;
        for(let p = 0; p < 4; p += 1){
            let _ = x[p];
            x[p] = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360;
        }
        return h;
    }
    clone() {
        let t = super.clone.call(this);
        return t._hash = this._hash.clone(), t;
    }
}, St = H._createHelper(L), Pt = H._createHmacHelper(L);
var T = class extends m {
    constructor(t){
        super(), this.cfg = Object.assign(new m, {
            keySize: 128 / 32,
            hasher: L,
            iterations: 1
        }, t);
    }
    compute(t, s) {
        let e, { cfg: r } = this, o = r.hasher.create(), n = u.create(), h = n.words, { keySize: x, iterations: p } = r;
        for(; h.length < x;){
            e && o.update(e), e = o.update(t).finalize(s), o.reset();
            for(let _ = 1; _ < p; _ += 1)e = o.finalize(e), o.reset();
            n.concat(e);
        }
        return n.sigBytes = x * 4, n;
    }
};
var C = class extends N {
    constructor(t, s, e){
        super(), this.cfg = Object.assign(new m, e), this._xformMode = t, this._key = s, this.reset();
    }
    static createEncryptor(t, s) {
        return this.create(this._ENC_XFORM_MODE, t, s);
    }
    static createDecryptor(t, s) {
        return this.create(this._DEC_XFORM_MODE, t, s);
    }
    static _createHelper(t) {
        let s = (e)=>typeof e == "string" ? q : E;
        return {
            encrypt (e, r, o) {
                return s(r).encrypt(t, e, r, o);
            },
            decrypt (e, r, o) {
                return s(r).decrypt(t, e, r, o);
            }
        };
    }
    reset() {
        super.reset.call(this), this._doReset();
    }
    process(t) {
        return this._append(t), this._process();
    }
    finalize(t) {
        return t && this._append(t), this._doFinalize();
    }
};
C._ENC_XFORM_MODE = 1;
C._DEC_XFORM_MODE = 2;
C.keySize = 128 / 32;
C.ivSize = 128 / 32;
var et = class extends m {
    constructor(t, s){
        super(), this._cipher = t, this._iv = s;
    }
    static createEncryptor(t, s) {
        return this.Encryptor.create(t, s);
    }
    static createDecryptor(t, s) {
        return this.Decryptor.create(t, s);
    }
};
function yt(c, t, s) {
    let e = c, r, o = this._iv;
    o ? (r = o, this._iv = void 0) : r = this._prevBlock;
    for(let n = 0; n < s; n += 1)e[t + n] ^= r[n];
}
var j = class extends et {
};
j.Encryptor = class extends j {
    processBlock(c, t) {
        let s = this._cipher, { blockSize: e } = s;
        yt.call(this, c, t, e), s.encryptBlock(c, t), this._prevBlock = c.slice(t, t + e);
    }
};
j.Decryptor = class extends j {
    processBlock(c, t) {
        let s = this._cipher, { blockSize: e } = s, r = c.slice(t, t + e);
        s.decryptBlock(c, t), yt.call(this, c, t, e), this._prevBlock = r;
    }
};
var vt = {
    pad (c, t) {
        let s = t * 4, e = s - c.sigBytes % s, r = e << 24 | e << 16 | e << 8 | e, o = [];
        for(let h = 0; h < e; h += 4)o.push(r);
        let n = u.create(o, e);
        c.concat(n);
    },
    unpad (c) {
        let t = c, s = t.words[t.sigBytes - 1 >>> 2] & 255;
        t.sigBytes -= s;
    }
}, U = class extends C {
    constructor(t, s, e){
        super(t, s, Object.assign({
            mode: j,
            padding: vt
        }, e)), this.blockSize = 128 / 32;
    }
    reset() {
        let t;
        super.reset.call(this);
        let { cfg: s } = this, { iv: e, mode: r } = s;
        this._xformMode === this.constructor._ENC_XFORM_MODE ? t = r.createEncryptor : (t = r.createDecryptor, this._minBufferSize = 1), this._mode = t.call(r, this, e && e.words), this._mode.__creator = t;
    }
    _doProcessBlock(t, s) {
        this._mode.processBlock(t, s);
    }
    _doFinalize() {
        let t, { padding: s } = this.cfg;
        return this._xformMode === this.constructor._ENC_XFORM_MODE ? (s.pad(this._data, this.blockSize), t = this._process(!0)) : (t = this._process(!0), s.unpad(t)), t;
    }
}, V = class extends m {
    constructor(t){
        super(), this.mixIn(t);
    }
    toString(t) {
        return (t || this.formatter).stringify(this);
    }
}, Rt = {
    stringify (c) {
        let t, { ciphertext: s, salt: e } = c;
        return e ? t = u.create([
            1398893684,
            1701076831
        ]).concat(e).concat(s) : t = s, t.toString(tt);
    },
    parse (c) {
        let t, s = tt.parse(c), e = s.words;
        return e[0] === 1398893684 && e[1] === 1701076831 && (t = u.create(e.slice(2, 4)), e.splice(0, 4), s.sigBytes -= 16), V.create({
            ciphertext: s,
            salt: t
        });
    }
}, E = class extends m {
    static encrypt(t, s, e, r) {
        let o = Object.assign(new m, this.cfg, r), n = t.createEncryptor(e, o), h = n.finalize(s), x = n.cfg;
        return V.create({
            ciphertext: h,
            key: e,
            iv: x.iv,
            algorithm: t,
            mode: x.mode,
            padding: x.padding,
            blockSize: n.blockSize,
            formatter: o.format
        });
    }
    static decrypt(t, s, e, r) {
        let o = s, n = Object.assign(new m, this.cfg, r);
        return o = this._parse(o, n.format), t.createDecryptor(e, n).finalize(o.ciphertext);
    }
    static _parse(t, s) {
        return typeof t == "string" ? s.parse(t, this) : t;
    }
};
E.cfg = Object.assign(new m, {
    format: Rt
});
var Ft = {
    execute (c, t, s, e, r) {
        let o = e;
        o || (o = u.random(64 / 8));
        let n;
        r ? n = T.create({
            keySize: t + s,
            hasher: r
        }).compute(c, o) : n = T.create({
            keySize: t + s
        }).compute(c, o);
        let h = u.create(n.words.slice(t), s * 4);
        return n.sigBytes = t * 4, V.create({
            key: n,
            iv: h,
            salt: o
        });
    }
}, q = class extends E {
    static encrypt(t, s, e, r) {
        let o = Object.assign(new m, this.cfg, r), n = o.kdf.execute(e, t.keySize, t.ivSize, o.salt, o.hasher);
        o.iv = n.iv;
        let h = E.encrypt.call(this, t, s, n.key, o);
        return h.mixIn(n), h;
    }
    static decrypt(t, s, e, r) {
        let o = s, n = Object.assign(new m, this.cfg, r);
        o = this._parse(o, n.format);
        let h = n.kdf.execute(e, t.keySize, t.ivSize, o.salt, n.hasher);
        return n.iv = h.iv, E.decrypt.call(this, t, o, h.key, n);
    }
};
q.cfg = Object.assign(E.cfg, {
    kdf: Ft
});
var R = [], ut = [], gt = [], mt = [], wt = [], Bt = [], st = [], rt = [], ot = [], nt = [], A = [];
for(let c = 0; c < 256; c += 1)c < 128 ? A[c] = c << 1 : A[c] = c << 1 ^ 283;
var F = 0, D = 0;
for(let c = 0; c < 256; c += 1){
    let t = D ^ D << 1 ^ D << 2 ^ D << 3 ^ D << 4;
    t = t >>> 8 ^ t & 255 ^ 99, R[F] = t, ut[t] = F;
    let s = A[F], e = A[s], r = A[e], o = A[t] * 257 ^ t * 16843008;
    gt[F] = o << 24 | o >>> 8, mt[F] = o << 16 | o >>> 16, wt[F] = o << 8 | o >>> 24, Bt[F] = o, o = r * 16843009 ^ e * 65537 ^ s * 257 ^ F * 16843008, st[t] = o << 24 | o >>> 8, rt[t] = o << 16 | o >>> 16, ot[t] = o << 8 | o >>> 24, nt[t] = o, F ? (F = s ^ A[A[A[r ^ s]]], D ^= A[A[D]]) : (D = 1, F = D);
}
var At = [
    0,
    1,
    2,
    4,
    8,
    16,
    32,
    64,
    128,
    27,
    54
], J = class extends U {
    _doReset() {
        let t;
        if (this._nRounds && this._keyPriorReset === this._key) return;
        this._keyPriorReset = this._key;
        let s = this._keyPriorReset, e = s.words, r = s.sigBytes / 4;
        this._nRounds = r + 6;
        let n = (this._nRounds + 1) * 4;
        this._keySchedule = [];
        let h = this._keySchedule;
        for(let p = 0; p < n; p += 1)p < r ? h[p] = e[p] : (t = h[p - 1], p % r ? r > 6 && p % r === 4 && (t = R[t >>> 24] << 24 | R[t >>> 16 & 255] << 16 | R[t >>> 8 & 255] << 8 | R[t & 255]) : (t = t << 8 | t >>> 24, t = R[t >>> 24] << 24 | R[t >>> 16 & 255] << 16 | R[t >>> 8 & 255] << 8 | R[t & 255], t ^= At[p / r | 0] << 24), h[p] = h[p - r] ^ t);
        this._invKeySchedule = [];
        let x = this._invKeySchedule;
        for(let p = 0; p < n; p += 1){
            let _ = n - p;
            p % 4 ? t = h[_] : t = h[_ - 4], p < 4 || _ <= 4 ? x[p] = t : x[p] = st[R[t >>> 24]] ^ rt[R[t >>> 16 & 255]] ^ ot[R[t >>> 8 & 255]] ^ nt[R[t & 255]];
        }
    }
    encryptBlock(t, s) {
        this._doCryptBlock(t, s, this._keySchedule, gt, mt, wt, Bt, R);
    }
    decryptBlock(t, s) {
        let e = t, r = e[s + 1];
        e[s + 1] = e[s + 3], e[s + 3] = r, this._doCryptBlock(e, s, this._invKeySchedule, st, rt, ot, nt, ut), r = e[s + 1], e[s + 1] = e[s + 3], e[s + 3] = r;
    }
    _doCryptBlock(t, s, e, r, o, n, h, x) {
        let p = t, _ = this._nRounds, y = p[s] ^ e[0], M = p[s + 1] ^ e[1], z = p[s + 2] ^ e[2], v = p[s + 3] ^ e[3], g = 4;
        for(let W = 1; W < _; W += 1){
            let i = r[y >>> 24] ^ o[M >>> 16 & 255] ^ n[z >>> 8 & 255] ^ h[v & 255] ^ e[g];
            g += 1;
            let a = r[M >>> 24] ^ o[z >>> 16 & 255] ^ n[v >>> 8 & 255] ^ h[y & 255] ^ e[g];
            g += 1;
            let f = r[z >>> 24] ^ o[v >>> 16 & 255] ^ n[y >>> 8 & 255] ^ h[M & 255] ^ e[g];
            g += 1;
            let l = r[v >>> 24] ^ o[y >>> 16 & 255] ^ n[M >>> 8 & 255] ^ h[z & 255] ^ e[g];
            g += 1, y = i, M = a, z = f, v = l;
        }
        let O = (x[y >>> 24] << 24 | x[M >>> 16 & 255] << 16 | x[z >>> 8 & 255] << 8 | x[v & 255]) ^ e[g];
        g += 1;
        let S = (x[M >>> 24] << 24 | x[z >>> 16 & 255] << 16 | x[v >>> 8 & 255] << 8 | x[y & 255]) ^ e[g];
        g += 1;
        let P = (x[z >>> 24] << 24 | x[v >>> 16 & 255] << 16 | x[y >>> 8 & 255] << 8 | x[M & 255]) ^ e[g];
        g += 1;
        let I = (x[v >>> 24] << 24 | x[y >>> 16 & 255] << 16 | x[M >>> 8 & 255] << 8 | x[z & 255]) ^ e[g];
        g += 1, p[s] = O, p[s + 1] = S, p[s + 2] = P, p[s + 3] = I;
    }
};
J.keySize = 256 / 32;
var Ht = U._createHelper(J);
var K = [], Q = class extends H {
    _doReset() {
        this._hash = new u([
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
        ]);
    }
    _doProcessBlock(t, s) {
        let e = this._hash.words, r = e[0], o = e[1], n = e[2], h = e[3], x = e[4];
        for(let p = 0; p < 80; p += 1){
            if (p < 16) K[p] = t[s + p] | 0;
            else {
                let y = K[p - 3] ^ K[p - 8] ^ K[p - 14] ^ K[p - 16];
                K[p] = y << 1 | y >>> 31;
            }
            let _ = (r << 5 | r >>> 27) + x + K[p];
            p < 20 ? _ += (o & n | ~o & h) + 1518500249 : p < 40 ? _ += (o ^ n ^ h) + 1859775393 : p < 60 ? _ += (o & n | o & h | n & h) - 1894007588 : _ += (o ^ n ^ h) - 899497514, x = h, h = n, n = o << 30 | o >>> 2, o = r, r = _;
        }
        e[0] = e[0] + r | 0, e[1] = e[1] + o | 0, e[2] = e[2] + n | 0, e[3] = e[3] + h | 0, e[4] = e[4] + x | 0;
    }
    _doFinalize() {
        let t = this._data, s = t.words, e = this._nDataBytes * 8, r = t.sigBytes * 8;
        return s[r >>> 5] |= 128 << 24 - r % 32, s[(r + 64 >>> 9 << 4) + 14] = Math.floor(e / 4294967296), s[(r + 64 >>> 9 << 4) + 15] = e, t.sigBytes = s.length * 4, this._process(), this._hash;
    }
    clone() {
        let t = super.clone.call(this);
        return t._hash = this._hash.clone(), t;
    }
}, Xt = H._createHelper(Q), Dt = H._createHmacHelper(Q);
;
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/errors.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authAuthHeaderMissing": (()=>authAuthHeaderMissing),
    "authSignatureInvalid": (()=>authSignatureInvalid),
    "encryptionKeyInvalid": (()=>encryptionKeyInvalid),
    "encryptionKeyInvalidDev": (()=>encryptionKeyInvalidDev),
    "getAuthAuthHeaderMissing": (()=>getAuthAuthHeaderMissing),
    "missingDomainAndProxy": (()=>missingDomainAndProxy),
    "missingSignInUrlInDev": (()=>missingSignInUrlInDev)
});
;
const missingDomainAndProxy = `
Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl.

1) With middleware
   e.g. export default clerkMiddleware({domain:'YOUR_DOMAIN',isSatellite:true});
2) With environment variables e.g.
   NEXT_PUBLIC_CLERK_DOMAIN='YOUR_DOMAIN'
   NEXT_PUBLIC_CLERK_IS_SATELLITE='true'
   `;
const missingSignInUrlInDev = `
Invalid signInUrl. A satellite application requires a signInUrl for development instances.
Check if signInUrl is missing from your configuration or if it is not an absolute URL

1) With middleware
   e.g. export default clerkMiddleware({signInUrl:'SOME_URL', isSatellite:true});
2) With environment variables e.g.
   NEXT_PUBLIC_CLERK_SIGN_IN_URL='SOME_URL'
   NEXT_PUBLIC_CLERK_IS_SATELLITE='true'`;
const getAuthAuthHeaderMissing = ()=>authAuthHeaderMissing("getAuth");
const authAuthHeaderMissing = (helperName = "auth", prefixSteps)=>`Clerk: ${helperName}() was called but Clerk can't detect usage of clerkMiddleware(). Please ensure the following:
- ${prefixSteps ? [
        ...prefixSteps,
        ""
    ].join("\n- ") : " "}clerkMiddleware() is used in your Next.js Middleware.
- Your Middleware matcher is configured to match this route or page.
- If you are using the src directory, make sure the Middleware file is inside of it.

For more details, see https://clerk.com/docs/quickstarts/nextjs
`;
const authSignatureInvalid = `Clerk: Unable to verify request, this usually means the Clerk middleware did not run. Ensure Clerk's middleware is properly integrated and matches the current route. For more information, see: https://clerk.com/docs/references/nextjs/clerk-middleware. (code=auth_signature_invalid)`;
const encryptionKeyInvalid = `Clerk: Unable to decrypt request data, this usually means the encryption key is invalid. Ensure the encryption key is properly set. For more information, see: https://clerk.com/docs/references/nextjs/clerk-middleware#dynamic-keys. (code=encryption_key_invalid)`;
const encryptionKeyInvalidDev = `Clerk: Unable to decrypt request data.

Refresh the page if your .env file was just updated. If the issue persists, ensure the encryption key is valid and properly set.

For more information, see: https://clerk.com/docs/references/nextjs/clerk-middleware#dynamic-keys. (code=encryption_key_invalid)`;
;
 //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertAuthStatus": (()=>assertAuthStatus),
    "assertKey": (()=>assertKey),
    "assertTokenSignature": (()=>assertTokenSignature),
    "decorateRequest": (()=>decorateRequest),
    "decryptClerkRequestData": (()=>decryptClerkRequestData),
    "encryptClerkRequestData": (()=>encryptClerkRequestData),
    "handleMultiDomainAndProxy": (()=>handleMultiDomainAndProxy),
    "redirectAdapter": (()=>redirectAdapter),
    "setRequestHeadersOnNextResponse": (()=>setRequestHeadersOnNextResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-H5XWF6TY.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/keys.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-G3VP5PJE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$logger$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/logger.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-CYDR2ZSA.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/proxy.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/utils/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-O32JQBM6.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/utils/feature-flags.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$vendor$2f$crypto$2d$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/vendor/crypto-es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errorThrower$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/errorThrower.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/headers-utils.js [app-rsc] (ecmascript)");
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
const OVERRIDE_HEADERS = "x-middleware-override-headers";
const MIDDLEWARE_HEADER_PREFIX = "x-middleware-request";
const setRequestHeadersOnNextResponse = (res, req, newHeaders)=>{
    if (!res.headers.get(OVERRIDE_HEADERS)) {
        res.headers.set(OVERRIDE_HEADERS, [
            ...req.headers.keys()
        ]);
        req.headers.forEach((val, key)=>{
            res.headers.set(`${MIDDLEWARE_HEADER_PREFIX}-${key}`, val);
        });
    }
    Object.entries(newHeaders).forEach(([key, val])=>{
        res.headers.set(OVERRIDE_HEADERS, `${res.headers.get(OVERRIDE_HEADERS)},${key}`);
        res.headers.set(`${MIDDLEWARE_HEADER_PREFIX}-${key}`, val);
    });
};
function decorateRequest(req, res, requestState, requestData, keylessMode) {
    const { reason, message, status, token } = requestState;
    if (!res) {
        res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    if (res.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextRedirect)) {
        return res;
    }
    let rewriteURL;
    if (res.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextResume) === "1") {
        res.headers.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextResume);
        rewriteURL = new URL(req.url);
    }
    const rewriteURLHeader = res.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextRewrite);
    if (rewriteURLHeader) {
        const reqURL = new URL(req.url);
        rewriteURL = new URL(rewriteURLHeader);
        if (rewriteURL.origin !== reqURL.origin) {
            return res;
        }
    }
    if (rewriteURL) {
        const clerkRequestData = encryptClerkRequestData(requestData, keylessMode);
        setRequestHeadersOnNextResponse(res, req, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.AuthStatus]: status,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.AuthToken]: token || "",
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.AuthSignature]: token ? createTokenSignature(token, (requestData == null ? void 0 : requestData.secretKey) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"] || keylessMode.secretKey || "") : "",
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.AuthMessage]: message || "",
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.AuthReason]: reason || "",
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkUrl]: req.clerkUrl.toString(),
            ...clerkRequestData ? {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkRequestData]: clerkRequestData
            } : {}
        });
        res.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextRewrite, rewriteURL.href);
    }
    return res;
}
const handleMultiDomainAndProxy = (clerkRequest, opts)=>{
    const relativeOrAbsoluteProxyUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleValueOrFn"])(opts == null ? void 0 : opts.proxyUrl, clerkRequest.clerkUrl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROXY_URL"]);
    let proxyUrl;
    if (!!relativeOrAbsoluteProxyUrl && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHttpOrHttps"])(relativeOrAbsoluteProxyUrl)) {
        proxyUrl = new URL(relativeOrAbsoluteProxyUrl, clerkRequest.clerkUrl).toString();
    } else {
        proxyUrl = relativeOrAbsoluteProxyUrl;
    }
    const isSatellite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleValueOrFn"])(opts.isSatellite, new URL(clerkRequest.url), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IS_SATELLITE"]);
    const domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleValueOrFn"])(opts.domain, new URL(clerkRequest.url), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOMAIN"]);
    const signInUrl = (opts == null ? void 0 : opts.signInUrl) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SIGN_IN_URL"];
    if (isSatellite && !proxyUrl && !domain) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["missingDomainAndProxy"]);
    }
    if (isSatellite && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHttpOrHttps"])(signInUrl) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$G3VP5PJE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopmentFromSecretKey"])(opts.secretKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"])) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["missingSignInUrlInDev"]);
    }
    return {
        proxyUrl,
        isSatellite,
        domain,
        signInUrl
    };
};
const redirectAdapter = (url)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url, {
        headers: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkRedirectTo]: "true"
        }
    });
};
function assertAuthStatus(req, error) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectClerkMiddleware"])(req)) {
        throw new Error(error);
    }
}
function assertKey(key, onError) {
    if (!key) {
        onError();
    }
    return key;
}
function createTokenSignature(token, key) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$vendor$2f$crypto$2d$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HmacSHA1"])(token, key).toString();
}
function assertTokenSignature(token, key, signature) {
    if (!signature) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authSignatureInvalid"]);
    }
    const expectedSignature = createTokenSignature(token, key);
    if (expectedSignature !== signature) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authSignatureInvalid"]);
    }
}
const KEYLESS_ENCRYPTION_KEY = "clerk_keyless_dummy_key";
function encryptClerkRequestData(requestData, keylessModeKeys) {
    const isEmpty = (obj)=>{
        if (!obj) {
            return true;
        }
        return !Object.values(obj).some((v)=>v !== void 0);
    };
    if (isEmpty(requestData) && isEmpty(keylessModeKeys)) {
        return;
    }
    if (requestData.secretKey && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCRYPTION_KEY"]) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warnOnce("Clerk: Missing `CLERK_ENCRYPTION_KEY`. Required for propagating `secretKey` middleware option. See docs: https://clerk.com/docs/references/nextjs/clerk-middleware#dynamic-keys");
        return;
    }
    const maybeKeylessEncryptionKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isProductionEnvironment"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCRYPTION_KEY"] || assertKey(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errorThrower$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorThrower"].throwMissingSecretKeyError()) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCRYPTION_KEY"] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"] || KEYLESS_ENCRYPTION_KEY;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$vendor$2f$crypto$2d$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AES"].encrypt(JSON.stringify({
        ...keylessModeKeys,
        ...requestData
    }), maybeKeylessEncryptionKey).toString();
}
function decryptClerkRequestData(encryptedRequestData) {
    if (!encryptedRequestData) {
        return {};
    }
    const maybeKeylessEncryptionKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isProductionEnvironment"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCRYPTION_KEY"] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCRYPTION_KEY"] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"] || KEYLESS_ENCRYPTION_KEY;
    try {
        return decryptData(encryptedRequestData, maybeKeylessEncryptionKey);
    } catch  {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canUseKeyless"]) {
            try {
                return decryptData(encryptedRequestData, KEYLESS_ENCRYPTION_KEY);
            } catch  {
                throwInvalidEncryptionKey();
            }
        }
        throwInvalidEncryptionKey();
    }
}
function throwInvalidEncryptionKey() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isProductionEnvironment"])()) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptionKeyInvalid"]);
    }
    throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptionKeyInvalidDev"]);
}
function decryptData(data, key) {
    const decryptedBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$vendor$2f$crypto$2d$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AES"].decrypt(data, key);
    const encoded = decryptedBytes.toString(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$vendor$2f$crypto$2d$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Utf8"]);
    return JSON.parse(encoded);
}
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/data/getAuthDataFromRequest.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAuthDataFromRequest": (()=>getAuthDataFromRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-H5XWF6TY.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$jwt$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/jwt/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/headers-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function getAuthDataFromRequest(req, opts = {}) {
    var _a, _b, _c;
    const authStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(req, "AuthStatus");
    const authToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(req, "AuthToken");
    const authMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(req, "AuthMessage");
    const authReason = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(req, "AuthReason");
    const authSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(req, "AuthSignature");
    (_a = opts.logger) == null ? void 0 : _a.debug("headers", {
        authStatus,
        authMessage,
        authReason
    });
    const encryptedRequestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeader"])(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkRequestData);
    const decryptedRequestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptClerkRequestData"])(encryptedRequestData);
    const options = {
        secretKey: (opts == null ? void 0 : opts.secretKey) || decryptedRequestData.secretKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"],
        publishableKey: decryptedRequestData.publishableKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PUBLISHABLE_KEY"],
        apiUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_URL"],
        apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_VERSION"],
        authStatus,
        authMessage,
        authReason
    };
    (_b = opts.logger) == null ? void 0 : _b.debug("auth options", options);
    let authObject;
    if (!authStatus || authStatus !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AuthStatus"].SignedIn) {
        authObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["signedOutAuthObject"])(options);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertTokenSignature"])(authToken, options.secretKey, authSignature);
        const jwt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$jwt$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(authToken);
        (_c = opts.logger) == null ? void 0 : _c.debug("jwt", jwt.raw);
        authObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["signedInAuthObject"])(options, jwt.raw.text, jwt.payload);
    }
    return authObject;
}
;
 //# sourceMappingURL=getAuthDataFromRequest.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/createGetAuth.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createAsyncGetAuth": (()=>createAsyncGetAuth),
    "createSyncGetAuth": (()=>createSyncGetAuth),
    "getAuth": (()=>getAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-H5XWF6TY.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$underscore$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/underscore.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$RWYTRAIK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/shared/dist/chunk-RWYTRAIK.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$debugLogger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/utils/debugLogger.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/utils/sdk-versions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$data$2f$getAuthDataFromRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/data/getAuthDataFromRequest.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/headers-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const createAsyncGetAuth = ({ debugLoggerName, noAuthStatusMessage })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$debugLogger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withLogger"])(debugLoggerName, (logger)=>{
        return async (req, opts)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$RWYTRAIK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTruthy"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeader"])(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.EnableDebug))) {
                logger.enable();
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectClerkMiddleware"])(req)) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNextWithUnstableServerActions"]) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertAuthStatus"])(req, noAuthStatusMessage);
                }
                const missConfiguredMiddlewareLocation = await __turbopack_context__.r("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/fs/middleware-location.js [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i).then((m)=>m.suggestMiddlewareLocation()).catch(()=>void 0);
                if (missConfiguredMiddlewareLocation) {
                    throw new Error(missConfiguredMiddlewareLocation);
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertAuthStatus"])(req, noAuthStatusMessage);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$data$2f$getAuthDataFromRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthDataFromRequest"])(req, {
                ...opts,
                logger
            });
        };
    });
const createSyncGetAuth = ({ debugLoggerName, noAuthStatusMessage })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$debugLogger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withLogger"])(debugLoggerName, (logger)=>{
        return (req, opts)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$RWYTRAIK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTruthy"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeader"])(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.EnableDebug))) {
                logger.enable();
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertAuthStatus"])(req, noAuthStatusMessage);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$data$2f$getAuthDataFromRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthDataFromRequest"])(req, {
                ...opts,
                logger
            });
        };
    });
const getAuth = createSyncGetAuth({
    debugLoggerName: "getAuth()",
    noAuthStatusMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthAuthHeaderMissing"])()
});
;
 //# sourceMappingURL=createGetAuth.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/nextFetcher.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isNextFetcher": (()=>isNextFetcher)
});
;
function isNextFetcher(fetch) {
    return "__nextPatched" in fetch && fetch.__nextPatched === true;
}
;
 //# sourceMappingURL=nextFetcher.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/protect.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createProtect": (()=>createProtect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-H5XWF6TY.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$nextFetcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/nextFetcher.js [app-rsc] (ecmascript)");
;
;
;
;
function createProtect(opts) {
    const { redirectToSignIn, authObject, redirect, notFound, request } = opts;
    return async (...args)=>{
        var _a, _b, _c, _d, _e, _f;
        const optionValuesAsParam = ((_a = args[0]) == null ? void 0 : _a.unauthenticatedUrl) || ((_b = args[0]) == null ? void 0 : _b.unauthorizedUrl);
        const paramsOrFunction = optionValuesAsParam ? void 0 : args[0];
        const unauthenticatedUrl = ((_c = args[0]) == null ? void 0 : _c.unauthenticatedUrl) || ((_d = args[1]) == null ? void 0 : _d.unauthenticatedUrl);
        const unauthorizedUrl = ((_e = args[0]) == null ? void 0 : _e.unauthorizedUrl) || ((_f = args[1]) == null ? void 0 : _f.unauthorizedUrl);
        const handleUnauthenticated = ()=>{
            if (unauthenticatedUrl) {
                return redirect(unauthenticatedUrl);
            }
            if (isPageRequest(request)) {
                return redirectToSignIn();
            }
            return notFound();
        };
        const handleUnauthorized = ()=>{
            if (unauthorizedUrl) {
                return redirect(unauthorizedUrl);
            }
            return notFound();
        };
        if (!authObject.userId) {
            return handleUnauthenticated();
        }
        if (!paramsOrFunction) {
            return authObject;
        }
        if (typeof paramsOrFunction === "function") {
            if (paramsOrFunction(authObject.has)) {
                return authObject;
            }
            return handleUnauthorized();
        }
        if (authObject.has(paramsOrFunction)) {
            return authObject;
        }
        return handleUnauthorized();
    };
}
const isServerActionRequest = (req)=>{
    var _a, _b;
    return !!req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextUrl) && (((_a = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.Accept)) == null ? void 0 : _a.includes("text/x-component")) || ((_b = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ContentType)) == null ? void 0 : _b.includes("multipart/form-data")) || !!req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextAction));
};
const isPageRequest = (req)=>{
    var _a;
    return req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.SecFetchDest) === "document" || req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.SecFetchDest) === "iframe" || ((_a = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.Accept)) == null ? void 0 : _a.includes("text/html")) || isAppRouterInternalNavigation(req) || isPagesRouterInternalNavigation(req);
};
const isAppRouterInternalNavigation = (req)=>!!req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextUrl) && !isServerActionRequest(req) || isPagePathAvailable();
const isPagePathAvailable = ()=>{
    const __fetch = globalThis.fetch;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$nextFetcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNextFetcher"])(__fetch)) {
        return false;
    }
    const { page, pagePath } = __fetch.__nextGetStaticStore().getStore() || {};
    return Boolean(// available on next@14
    pagePath || // available on next@15
    page);
};
const isPagesRouterInternalNavigation = (req)=>!!req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextjsData);
;
 //# sourceMappingURL=protect.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildRequestLike": (()=>buildRequestLike),
    "getScriptNonceFromHeader": (()=>getScriptNonceFromHeader),
    "isPrerenderingBailout": (()=>isPrerenderingBailout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/server.js [app-rsc] (ecmascript)");
;
;
const isPrerenderingBailout = (e)=>{
    if (!(e instanceof Error) || !("message" in e)) {
        return false;
    }
    const { message } = e;
    const lowerCaseInput = message.toLowerCase();
    const dynamicServerUsage = lowerCaseInput.includes("dynamic server usage");
    const bailOutPrerendering = lowerCaseInput.includes("this page needs to bail out of prerendering");
    const routeRegex = /Route .*? needs to bail out of prerendering at this point because it used .*?./;
    return routeRegex.test(message) || dynamicServerUsage || bailOutPrerendering;
};
async function buildRequestLike() {
    try {
        const { headers } = await __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/headers.js [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i);
        const resolvedHeaders = await headers();
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextRequest"]("https://placeholder.com", {
            headers: resolvedHeaders
        });
    } catch (e) {
        if (e && isPrerenderingBailout(e)) {
            throw e;
        }
        throw new Error(`Clerk: auth(), currentUser() and clerkClient(), are only supported in App Router (/app directory).
If you're using /pages, try getAuth() instead.
Original error: ${e}`);
    }
}
function getScriptNonceFromHeader(cspHeaderValue) {
    var _a;
    const directives = cspHeaderValue.split(";").map((directive2)=>directive2.trim());
    const directive = directives.find((dir)=>dir.startsWith("script-src")) || directives.find((dir)=>dir.startsWith("default-src"));
    if (!directive) {
        return;
    }
    const nonce = (_a = directive.split(" ").slice(1).map((source)=>source.trim()).find((source)=>source.startsWith("'nonce-") && source.length > 8 && source.endsWith("'"))) == null ? void 0 : _a.slice(7, -1);
    if (!nonce) {
        return;
    }
    if (/[&><\u2028\u2029]/g.test(nonce)) {
        throw new Error("Nonce value from Content-Security-Policy contained invalid HTML escape characters, which is disallowed for security reasons. Make sure that your nonce value does not contain the following characters: `<`, `>`, `&`");
    }
    return nonce;
}
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "auth": (()=>auth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/chunk-H5XWF6TY.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@1.25.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createGetAuth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/createGetAuth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/headers-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$protect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/protect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/utils/sdk-versions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/app-router/server/utils.js [app-rsc] (ecmascript)");
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
const auth = async ()=>{
    __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
    const request = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildRequestLike"])();
    const stepsBasedOnSrcDirectory = async ()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNextWithUnstableServerActions"]) {
            return [];
        }
        try {
            const isSrcAppDir = await __turbopack_context__.r("[project]/node_modules/.pnpm/@clerk+nextjs@6.12.12_next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0__react-dom@19.0_6wzbu4mj6xhsubvxtkxtygy2ya/node_modules/@clerk/nextjs/dist/esm/server/fs/middleware-location.js [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i).then((m)=>m.hasSrcAppDir());
            return [
                `Your Middleware exists at ./${isSrcAppDir ? "src/" : ""}middleware.(ts|js)`
            ];
        } catch  {
            return [];
        }
    };
    const authObject = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createGetAuth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAsyncGetAuth"])({
        debugLoggerName: "auth()",
        noAuthStatusMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authAuthHeaderMissing"])("auth", await stepsBasedOnSrcDirectory())
    })(request);
    const clerkUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(request, "ClerkUrl");
    const redirectToSignIn = (opts = {})=>{
        const clerkRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClerkRequest"])(request);
        const devBrowserToken = clerkRequest.clerkUrl.searchParams.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].QueryParameters.DevBrowser) || clerkRequest.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Cookies.DevBrowser);
        const encryptedRequestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeader"])(request, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$H5XWF6TY$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkRequestData);
        const decryptedRequestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptClerkRequestData"])(encryptedRequestData);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$25$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRedirect"])({
            redirectAdapter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"],
            devBrowserToken,
            baseUrl: clerkRequest.clerkUrl.toString(),
            publishableKey: decryptedRequestData.publishableKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PUBLISHABLE_KEY"],
            signInUrl: decryptedRequestData.signInUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SIGN_IN_URL"],
            signUpUrl: decryptedRequestData.signUpUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SIGN_UP_URL"]
        }).redirectToSignIn({
            returnBackUrl: opts.returnBackUrl === null ? "" : opts.returnBackUrl || (clerkUrl == null ? void 0 : clerkUrl.toString())
        });
    };
    return Object.assign(authObject, {
        redirectToSignIn
    });
};
auth.protect = async (...args)=>{
    __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
    const request = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildRequestLike"])();
    const authObject = await auth();
    const protect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$12$2e$12_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$react$2d$dom$40$19$2e$0_6wzbu4mj6xhsubvxtkxtygy2ya$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$protect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProtect"])({
        request,
        authObject,
        redirectToSignIn: authObject.redirectToSignIn,
        notFound: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"],
        redirect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"]
    });
    return protect(...args);
};
;
 //# sourceMappingURL=auth.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript, Next.js server utility)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript)"));}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <module evaluation>": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <module evaluation>"));}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "__next_app__": (()=>__next_app__),
    "pages": (()=>pages),
    "routeModule": (()=>routeModule),
    "tree": (()=>tree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i('[project]/src/app/favicon.ico.mjs { IMAGE => "[project]/src/app/favicon.ico (static in ecmascript)" } [app-rsc] (structured image object, ecmascript, Next.js server component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
;
;
;
;
;
;
;
;
;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "__PAGE__",
            {},
            {
                metadata: {},
                "page": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                    "[project]/src/app/page.tsx"
                ]
            }
        ]
    },
    {
        metadata: {
            icon: [
                async (props)=>[
                        {
                            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["fillMetadataSegment"])("//", await props.params, "favicon.ico") + `?${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].src.split("/").splice(-1)[0]}`,
                            sizes: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].width}x${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].height}`,
                            type: `image/x-icon`
                        }
                    ]
            ]
        },
        "layout": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/src/app/layout.tsx"
        ],
        "not-found": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/src/app/not-found.tsx"
        ],
        "forbidden": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden-error.js"
        ],
        "unauthorized": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized-error.js"
        ]
    }
];
const pages = [
    "[project]/src/app/page.tsx"
];
;
;
const __next_app_require__ = __turbopack_context__.r;
const __next_app_load_chunk__ = __turbopack_context__.l;
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
}); //# sourceMappingURL=app-page.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i('[project]/src/app/favicon.ico.mjs { IMAGE => "[project]/src/app/favicon.ico (static in ecmascript)" } [app-rsc] (structured image object, ecmascript, Next.js server component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico (static in ecmascript)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientSegmentRoot"]),
    "GlobalError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"]),
    "HTTPAccessFallbackBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTTPAccessFallbackBoundary"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["MetadataBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ViewportBoundary"]),
    "__next_app__": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForMetadata"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForMetadata"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"]),
    "pages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pages"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"]),
    "routeModule": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"]),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tree"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico (static in ecmascript)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientSegmentRoot"]),
    "GlobalError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GlobalError"]),
    "HTTPAccessFallbackBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["HTTPAccessFallbackBoundary"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LayoutRouter"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MetadataBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["RenderFromTemplateContext"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ViewportBoundary"]),
    "__next_app__": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["__next_app__"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerParamsForMetadata"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerSearchParamsForMetadata"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeReply"]),
    "pages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["pages"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["renderToReadableStream"]),
    "routeModule": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["routeModule"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["serverHooks"]),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["taintObjectReference"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tree"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico (static in ecmascript)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico (static in ecmascript)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <exports>');
}}),

};

//# sourceMappingURL=_4c2f1f67._.js.map