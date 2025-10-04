(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function wv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var gd={exports:{}},Fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function LS(){if(Q0)return Fo;Q0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=t,Fo.jsx=i,Fo.jsxs=i,Fo}var J0;function OS(){return J0||(J0=1,gd.exports=LS()),gd.exports}var R=OS(),_d={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function PS(){if($0)return ce;$0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(z,rt,yt){this.props=z,this.context=rt,this.refs=M,this.updater=yt||b}x.prototype.isReactComponent={},x.prototype.setState=function(z,rt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,rt,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=x.prototype;function L(z,rt,yt){this.props=z,this.context=rt,this.refs=M,this.updater=yt||b}var N=L.prototype=new U;N.constructor=L,T(N,x.prototype),N.isPureReactComponent=!0;var k=Array.isArray;function G(){}var I={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function C(z,rt,yt){var bt=yt.ref;return{$$typeof:r,type:z,key:rt,ref:bt!==void 0?bt:null,props:yt}}function D(z,rt){return C(z.type,rt,z.props)}function O(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function V(z){var rt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(yt){return rt[yt]})}var J=/\/+/g;function $(z,rt){return typeof z=="object"&&z!==null&&z.key!=null?V(""+z.key):rt.toString(36)}function ut(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(G,G):(z.status="pending",z.then(function(rt){z.status==="pending"&&(z.status="fulfilled",z.value=rt)},function(rt){z.status==="pending"&&(z.status="rejected",z.reason=rt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function F(z,rt,yt,bt,Nt){var tt=typeof z;(tt==="undefined"||tt==="boolean")&&(z=null);var lt=!1;if(z===null)lt=!0;else switch(tt){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(z.$$typeof){case r:case t:lt=!0;break;case _:return lt=z._init,F(lt(z._payload),rt,yt,bt,Nt)}}if(lt)return Nt=Nt(z),lt=bt===""?"."+$(z,0):bt,k(Nt)?(yt="",lt!=null&&(yt=lt.replace(J,"$&/")+"/"),F(Nt,rt,yt,"",function(It){return It})):Nt!=null&&(O(Nt)&&(Nt=D(Nt,yt+(Nt.key==null||z&&z.key===Nt.key?"":(""+Nt.key).replace(J,"$&/")+"/")+lt)),rt.push(Nt)),1;lt=0;var At=bt===""?".":bt+":";if(k(z))for(var Lt=0;Lt<z.length;Lt++)bt=z[Lt],tt=At+$(bt,Lt),lt+=F(bt,rt,yt,tt,Nt);else if(Lt=y(z),typeof Lt=="function")for(z=Lt.call(z),Lt=0;!(bt=z.next()).done;)bt=bt.value,tt=At+$(bt,Lt++),lt+=F(bt,rt,yt,tt,Nt);else if(tt==="object"){if(typeof z.then=="function")return F(ut(z),rt,yt,bt,Nt);throw rt=String(z),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return lt}function Y(z,rt,yt){if(z==null)return z;var bt=[],Nt=0;return F(z,bt,"","",function(tt){return rt.call(yt,tt,Nt++)}),bt}function q(z){if(z._status===-1){var rt=z._result;rt=rt(),rt.then(function(yt){(z._status===0||z._status===-1)&&(z._status=1,z._result=yt)},function(yt){(z._status===0||z._status===-1)&&(z._status=2,z._result=yt)}),z._status===-1&&(z._status=0,z._result=rt)}if(z._status===1)return z._result.default;throw z._result}var xt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Et={map:Y,forEach:function(z,rt,yt){Y(z,function(){rt.apply(this,arguments)},yt)},count:function(z){var rt=0;return Y(z,function(){rt++}),rt},toArray:function(z){return Y(z,function(rt){return rt})||[]},only:function(z){if(!O(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ce.Activity=g,ce.Children=Et,ce.Component=x,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=L,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ce.__COMPILER_RUNTIME={__proto__:null,c:function(z){return I.H.useMemoCache(z)}},ce.cache=function(z){return function(){return z.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(z,rt,yt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var bt=T({},z.props),Nt=z.key;if(rt!=null)for(tt in rt.key!==void 0&&(Nt=""+rt.key),rt)!j.call(rt,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&rt.ref===void 0||(bt[tt]=rt[tt]);var tt=arguments.length-2;if(tt===1)bt.children=yt;else if(1<tt){for(var lt=Array(tt),At=0;At<tt;At++)lt[At]=arguments[At+2];bt.children=lt}return C(z.type,Nt,bt)},ce.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ce.createElement=function(z,rt,yt){var bt,Nt={},tt=null;if(rt!=null)for(bt in rt.key!==void 0&&(tt=""+rt.key),rt)j.call(rt,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Nt[bt]=rt[bt]);var lt=arguments.length-2;if(lt===1)Nt.children=yt;else if(1<lt){for(var At=Array(lt),Lt=0;Lt<lt;Lt++)At[Lt]=arguments[Lt+2];Nt.children=At}if(z&&z.defaultProps)for(bt in lt=z.defaultProps,lt)Nt[bt]===void 0&&(Nt[bt]=lt[bt]);return C(z,tt,Nt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(z){return{$$typeof:h,render:z}},ce.isValidElement=O,ce.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:q}},ce.memo=function(z,rt){return{$$typeof:p,type:z,compare:rt===void 0?null:rt}},ce.startTransition=function(z){var rt=I.T,yt={};I.T=yt;try{var bt=z(),Nt=I.S;Nt!==null&&Nt(yt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(G,xt)}catch(tt){xt(tt)}finally{rt!==null&&yt.types!==null&&(rt.types=yt.types),I.T=rt}},ce.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ce.use=function(z){return I.H.use(z)},ce.useActionState=function(z,rt,yt){return I.H.useActionState(z,rt,yt)},ce.useCallback=function(z,rt){return I.H.useCallback(z,rt)},ce.useContext=function(z){return I.H.useContext(z)},ce.useDebugValue=function(){},ce.useDeferredValue=function(z,rt){return I.H.useDeferredValue(z,rt)},ce.useEffect=function(z,rt){return I.H.useEffect(z,rt)},ce.useEffectEvent=function(z){return I.H.useEffectEvent(z)},ce.useId=function(){return I.H.useId()},ce.useImperativeHandle=function(z,rt,yt){return I.H.useImperativeHandle(z,rt,yt)},ce.useInsertionEffect=function(z,rt){return I.H.useInsertionEffect(z,rt)},ce.useLayoutEffect=function(z,rt){return I.H.useLayoutEffect(z,rt)},ce.useMemo=function(z,rt){return I.H.useMemo(z,rt)},ce.useOptimistic=function(z,rt){return I.H.useOptimistic(z,rt)},ce.useReducer=function(z,rt,yt){return I.H.useReducer(z,rt,yt)},ce.useRef=function(z){return I.H.useRef(z)},ce.useState=function(z){return I.H.useState(z)},ce.useSyncExternalStore=function(z,rt,yt){return I.H.useSyncExternalStore(z,rt,yt)},ce.useTransition=function(){return I.H.useTransition()},ce.version="19.2.0",ce}var t_;function Qh(){return t_||(t_=1,_d.exports=PS()),_d.exports}var dt=Qh();const Mi=wv(dt);var vd={exports:{}},Bo={},xd={exports:{}},yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function zS(){return e_||(e_=1,(function(r){function t(F,Y){var q=F.length;F.push(Y);t:for(;0<q;){var xt=q-1>>>1,Et=F[xt];if(0<l(Et,Y))F[xt]=Y,F[q]=Et,q=xt;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var Y=F[0],q=F.pop();if(q!==Y){F[0]=q;t:for(var xt=0,Et=F.length,z=Et>>>1;xt<z;){var rt=2*(xt+1)-1,yt=F[rt],bt=rt+1,Nt=F[bt];if(0>l(yt,q))bt<Et&&0>l(Nt,yt)?(F[xt]=Nt,F[bt]=q,xt=bt):(F[xt]=yt,F[rt]=q,xt=rt);else if(bt<Et&&0>l(Nt,q))F[xt]=Nt,F[bt]=q,xt=bt;else break t}}return Y}function l(F,Y){var q=F.sortIndex-Y.sortIndex;return q!==0?q:F.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,g=null,v=3,y=!1,b=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(F){for(var Y=i(p);Y!==null;){if(Y.callback===null)s(p);else if(Y.startTime<=F)s(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function k(F){if(T=!1,N(F),!b)if(i(m)!==null)b=!0,G||(G=!0,V());else{var Y=i(p);Y!==null&&ut(k,Y.startTime-F)}}var G=!1,I=-1,j=5,C=-1;function D(){return M?!0:!(r.unstable_now()-C<j)}function O(){if(M=!1,G){var F=r.unstable_now();C=F;var Y=!0;try{t:{b=!1,T&&(T=!1,U(I),I=-1),y=!0;var q=v;try{e:{for(N(F),g=i(m);g!==null&&!(g.expirationTime>F&&D());){var xt=g.callback;if(typeof xt=="function"){g.callback=null,v=g.priorityLevel;var Et=xt(g.expirationTime<=F);if(F=r.unstable_now(),typeof Et=="function"){g.callback=Et,N(F),Y=!0;break e}g===i(m)&&s(m),N(F)}else s(m);g=i(m)}if(g!==null)Y=!0;else{var z=i(p);z!==null&&ut(k,z.startTime-F),Y=!1}}break t}finally{g=null,v=q,y=!1}Y=void 0}}finally{Y?V():G=!1}}}var V;if(typeof L=="function")V=function(){L(O)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,$=J.port2;J.port1.onmessage=O,V=function(){$.postMessage(null)}}else V=function(){x(O,0)};function ut(F,Y){I=x(function(){F(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(F){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var q=v;v=Y;try{return F()}finally{v=q}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=v;v=F;try{return Y()}finally{v=q}},r.unstable_scheduleCallback=function(F,Y,q){var xt=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?xt+q:xt):q=xt,F){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=q+Et,F={id:_++,callback:Y,priorityLevel:F,startTime:q,expirationTime:Et,sortIndex:-1},q>xt?(F.sortIndex=q,t(p,F),i(m)===null&&F===i(p)&&(T?(U(I),I=-1):T=!0,ut(k,q-xt))):(F.sortIndex=Et,t(m,F),b||y||(b=!0,G||(G=!0,V()))),F},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(F){var Y=v;return function(){var q=v;v=Y;try{return F.apply(this,arguments)}finally{v=q}}}})(yd)),yd}var n_;function FS(){return n_||(n_=1,xd.exports=zS()),xd.exports}var Sd={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function BS(){if(i_)return Dn;i_=1;var r=Qh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Dn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.2.0",Dn}var a_;function IS(){if(a_)return Sd.exports;a_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Sd.exports=BS(),Sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function HS(){if(r_)return Bo;r_=1;var r=FS(),t=Qh(),i=IS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=d;break}if(A===o){S=!0,o=u,a=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===a){S=!0,a=d,o=u;break}if(A===o){S=!0,o=d,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function $(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case k:return"Suspense";case G:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case L:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:$(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return $(e(n))}catch{}}return null}var ut=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},xt=[],Et=-1;function z(e){return{current:e}}function rt(e){0>Et||(e.current=xt[Et],xt[Et]=null,Et--)}function yt(e,n){Et++,xt[Et]=e.current,e.current=n}var bt=z(null),Nt=z(null),tt=z(null),lt=z(null);function At(e,n){switch(yt(tt,n),yt(Nt,e),yt(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?y0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=y0(n),e=S0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(bt),yt(bt,e)}function Lt(){rt(bt),rt(Nt),rt(tt)}function It(e){e.memoizedState!==null&&yt(lt,e);var n=bt.current,a=S0(n,e.type);n!==a&&(yt(Nt,e),yt(bt,a))}function se(e){Nt.current===e&&(rt(bt),rt(Nt)),lt.current===e&&(rt(lt),Lo._currentValue=q)}var Ue,B;function qt(e){if(Ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ue=n&&n[1]||"",B=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ue+e+B}var Yt=!1;function Kt(e,n){if(!e||Yt)return"";Yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ft){var st=ft}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ft){st=ft}e.call(_t.prototype)}}else{try{throw Error()}catch(ft){st=ft}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ft){if(ft&&st&&typeof ft.stack=="string")return[ft.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],A=d[1];if(S&&A){var H=S.split(`
`),nt=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===nt.length)for(o=H.length-1,u=nt.length-1;1<=o&&0<=u&&H[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==nt[u]){var pt=`
`+H[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Yt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?qt(a):""}function kt(e,n){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return e.child!==n&&n!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Kt(e.type,!1);case 11:return Kt(e.type.render,!1);case 1:return Kt(e.type,!0);case 31:return qt("Activity");default:return""}}function je(e){try{var n="",a=null;do n+=kt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Wt=Object.prototype.hasOwnProperty,le=r.unstable_scheduleCallback,tn=r.unstable_cancelCallback,Qe=r.unstable_shouldYield,P=r.unstable_requestPaint,E=r.unstable_now,it=r.unstable_getCurrentPriorityLevel,mt=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,ht=r.unstable_NormalPriority,$t=r.unstable_LowPriority,Ct=r.unstable_IdlePriority,Qt=r.log,Jt=r.unstable_setDisableYieldValue,Rt=null,Dt=null;function te(e){if(typeof Qt=="function"&&Jt(e),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(Rt,e)}catch{}}var Bt=Math.clz32?Math.clz32:W,Ot=Math.log,ue=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ot(e)/ue|0)|0}var wt=256,Ut=262144,Ht=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Tt(o):(S&=A,S!==0?u=Tt(S):a||(a=A&~e,a!==0&&(u=Tt(a))))):(A=o&~d,A!==0?u=Tt(A):S!==0?u=Tt(S):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Gt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function Ae(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ln(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ii(e,n,a,o,u,d){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,nt=e.hiddenUpdates;for(a=S&~a;0<a;){var pt=31-Bt(a),_t=1<<pt;A[pt]=0,H[pt]=-1;var st=nt[pt];if(st!==null)for(nt[pt]=null,pt=0;pt<st.length;pt++){var ft=st[pt];ft!==null&&(ft.lane&=-536870913)}a&=~_t}o!==0&&Ws(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~n))}function Ws(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ai(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Bt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Fr(e,n){var a=n&-n;return a=(a&42)!==0?1:Br(a),(a&(e.suspendedLanes|n))!==0?0:a}function Br(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ir(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nr(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:j0(e.type))}function qs(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var qn=Math.random().toString(36).slice(2),ln="__reactFiber$"+qn,Mn="__reactProps$"+qn,ya="__reactContainer$"+qn,Ys="__reactEvents$"+qn,cu="__reactListeners$"+qn,uu="__reactHandles$"+qn,sl="__reactResources$"+qn,ir="__reactMarker$"+qn;function w(e){delete e[ln],delete e[Mn],delete e[Ys],delete e[cu],delete e[uu]}function Z(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ya]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=w0(e);e!==null;){if(a=e[ln])return a;e=w0(e)}return n}e=a,a=e.parentNode}return null}function ot(e){if(e=e[ln]||e[ya]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ct(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Q(e){var n=e[sl];return n||(n=e[sl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function St(e){e[ir]=!0}var Pt=new Set,jt={};function Ft(e,n){ee(e,n),ee(e+"Capture",n)}function ee(e,n){for(jt[e]=n,e=0;e<n.length;e++)Pt.add(n[e])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},ge={};function Le(e){return Wt.call(ge,e)?!0:Wt.call(ne,e)?!1:re.test(e)?ge[e]=!0:(ne[e]=!0,!1)}function Xe(e,n,a){if(Le(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Oe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ve(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Re(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bn(e){if(!e._valueTracker){var n=qe(e)?"checked":"value";e._valueTracker=Re(e,n,""+e[n])}}function Ii(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=qe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ar=/[\n"\\]/g;function Me(e){return e.replace(ar,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cn(e,n,a,o,u,d,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Xt(n)):e.value!==""+Xt(n)&&(e.value=""+Xt(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?pn(e,S,Xt(n)):a!=null?pn(e,S,Xt(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Xt(A):e.removeAttribute("name")}function On(e,n,a,o,u,d,S,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){bn(e);return}a=a!=null?""+Xt(a):"",n=n!=null?""+Xt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),bn(e)}function pn(e,n,a){n==="number"&&xn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Xt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Hr(e,n,a){if(n!=null&&(n=""+Xt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Xt(a):""}function Ri(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ut(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Xt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),bn(e)}function Gr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var wx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _p(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||wx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function vp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&_p(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&_p(e,d,n[d])}function fu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(e){return Dx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Hi(){}var du=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vr=null,kr=null;function xp(e){var n=ot(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Cn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Me(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Mn]||null;if(!u)throw Error(s(90));Cn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ii(o)}break t;case"textarea":Hr(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(e,!!a.multiple,n,!1)}}}var pu=!1;function yp(e,n,a){if(pu)return e(n,a);pu=!0;try{var o=e(n);return o}finally{if(pu=!1,(Vr!==null||kr!==null)&&(Yl(),Vr&&(n=Vr,e=kr,kr=Vr=null,xp(n),e)))for(n=0;n<e.length;n++)xp(e[n])}}function Zs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(Gi)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{mu=!1}var Sa=null,gu=null,ll=null;function Sp(){if(ll)return ll;var e,n=gu,a=n.length,o,u="value"in Sa?Sa.value:Sa.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return ll=u.slice(e,1<o?1-o:void 0)}function cl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function Mp(){return!1}function Bn(e){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ul:Mp,this.isPropagationStopped=Mp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Bn(rr),Qs=g({},rr,{view:0,detail:0}),Nx=Bn(Qs),_u,vu,Js,dl=g({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Js&&(Js&&e.type==="mousemove"?(_u=e.screenX-Js.screenX,vu=e.screenY-Js.screenY):vu=_u=0,Js=e),_u)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),bp=Bn(dl),Ux=g({},dl,{dataTransfer:0}),Lx=Bn(Ux),Ox=g({},Qs,{relatedTarget:0}),xu=Bn(Ox),Px=g({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),zx=Bn(Px),Fx=g({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bx=Bn(Fx),Ix=g({},rr,{data:0}),Ep=Bn(Ix),Hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vx[e])?!!n[e]:!1}function yu(){return kx}var jx=g({},Qs,{key:function(e){if(e.key){var n=Hx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xx=Bn(jx),Wx=g({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=Bn(Wx),qx=g({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),Yx=Bn(qx),Zx=g({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kx=Bn(Zx),Qx=g({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jx=Bn(Qx),$x=g({},rr,{newState:0,oldState:0}),ty=Bn($x),ey=[9,13,27,32],Su=Gi&&"CompositionEvent"in window,$s=null;Gi&&"documentMode"in document&&($s=document.documentMode);var ny=Gi&&"TextEvent"in window&&!$s,Ap=Gi&&(!Su||$s&&8<$s&&11>=$s),Rp=" ",wp=!1;function Cp(e,n){switch(e){case"keyup":return ey.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function iy(e,n){switch(e){case"compositionend":return Dp(n);case"keypress":return n.which!==32?null:(wp=!0,Rp);case"textInput":return e=n.data,e===Rp&&wp?null:e;default:return null}}function ay(e,n){if(jr)return e==="compositionend"||!Su&&Cp(e,n)?(e=Sp(),ll=gu=Sa=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ap&&n.locale!=="ko"?null:n.data;default:return null}}var ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ry[e.type]:n==="textarea"}function Up(e,n,a,o){Vr?kr?kr.push(o):kr=[o]:Vr=o,n=ec(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var to=null,eo=null;function sy(e){p0(e,0)}function hl(e){var n=ct(e);if(Ii(n))return e}function Lp(e,n){if(e==="change")return n}var Op=!1;if(Gi){var Mu;if(Gi){var bu="oninput"in document;if(!bu){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),bu=typeof Pp.oninput=="function"}Mu=bu}else Mu=!1;Op=Mu&&(!document.documentMode||9<document.documentMode)}function zp(){to&&(to.detachEvent("onpropertychange",Fp),eo=to=null)}function Fp(e){if(e.propertyName==="value"&&hl(eo)){var n=[];Up(n,eo,e,hu(e)),yp(sy,n)}}function oy(e,n,a){e==="focusin"?(zp(),to=n,eo=a,to.attachEvent("onpropertychange",Fp)):e==="focusout"&&zp()}function ly(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(eo)}function cy(e,n){if(e==="click")return hl(n)}function uy(e,n){if(e==="input"||e==="change")return hl(n)}function fy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:fy;function no(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Wt.call(n,u)||!Yn(e[u],n[u]))return!1}return!0}function Bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ip(e,n){var a=Bp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bp(a)}}function Hp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=xn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=xn(e.document)}return n}function Eu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var dy=Gi&&"documentMode"in document&&11>=document.documentMode,Xr=null,Tu=null,io=null,Au=!1;function Vp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||Xr==null||Xr!==xn(o)||(o=Xr,"selectionStart"in o&&Eu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=ec(Tu,"onSelect"),0<o.length&&(n=new fl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Xr)))}function sr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Wr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},Ru={},kp={};Gi&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function or(e){if(Ru[e])return Ru[e];if(!Wr[e])return e;var n=Wr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in kp)return Ru[e]=n[a];return e}var jp=or("animationend"),Xp=or("animationiteration"),Wp=or("animationstart"),hy=or("transitionrun"),py=or("transitionstart"),my=or("transitioncancel"),qp=or("transitionend"),Yp=new Map,wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wu.push("scrollEnd");function mi(e,n){Yp.set(e,n),Ft(n,[e])}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],qr=0,Cu=0;function ml(){for(var e=qr,n=Cu=qr=0;n<e;){var a=ai[n];ai[n++]=null;var o=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var d=ai[n];if(ai[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&Zp(a,u,d)}}function gl(e,n,a,o){ai[qr++]=e,ai[qr++]=n,ai[qr++]=a,ai[qr++]=o,Cu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Du(e,n,a,o){return gl(e,n,a,o),_l(e)}function lr(e,n){return gl(e,null,null,n),_l(e)}function Zp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Bt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function _l(e){if(50<Ao)throw Ao=0,Hf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Yr={};function gy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,o){return new gy(e,n,a,o)}function Nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function vl(e,n,a,o,u,d){var S=0;if(o=e,typeof e=="function")Nu(e)&&(S=1);else if(typeof e=="string")S=SS(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Zn(31,a,n,u),e.elementType=C,e.lanes=d,e;case T:return cr(a.children,u,d,n);case M:S=8,u|=24;break;case x:return e=Zn(12,a,n,u|2),e.elementType=x,e.lanes=d,e;case k:return e=Zn(13,a,n,u),e.elementType=k,e.lanes=d,e;case G:return e=Zn(19,a,n,u),e.elementType=G,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:S=10;break t;case U:S=9;break t;case N:S=11;break t;case I:S=14;break t;case j:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Zn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function cr(e,n,a,o){return e=Zn(7,e,o,n),e.lanes=a,e}function Uu(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function Qp(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function Lu(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Jp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=Jp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:je(n)},Jp.set(e,n),n)}return{value:e,source:n,stack:je(n)}}var Zr=[],Kr=0,xl=null,ao=0,si=[],oi=0,Ma=null,wi=1,Ci="";function ki(e,n){Zr[Kr++]=ao,Zr[Kr++]=xl,xl=e,ao=n}function $p(e,n,a){si[oi++]=wi,si[oi++]=Ci,si[oi++]=Ma,Ma=e;var o=wi;e=Ci;var u=32-Bt(o)-1;o&=~(1<<u),a+=1;var d=32-Bt(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,wi=1<<32-Bt(n)+u|a<<u|o,Ci=d+e}else wi=1<<d|a<<u|o,Ci=e}function Ou(e){e.return!==null&&(ki(e,1),$p(e,1,0))}function Pu(e){for(;e===xl;)xl=Zr[--Kr],Zr[Kr]=null,ao=Zr[--Kr],Zr[Kr]=null;for(;e===Ma;)Ma=si[--oi],si[oi]=null,Ci=si[--oi],si[oi]=null,wi=si[--oi],si[oi]=null}function tm(e,n){si[oi++]=wi,si[oi++]=Ci,si[oi++]=Ma,wi=n.id,Ci=n.overflow,Ma=e}var En=null,Ye=null,Te=!1,ba=null,li=!1,zu=Error(s(519));function Ea(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(ri(n,e)),zu}function em(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[Mn]=o,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)ye(wo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Ri(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||v0(n.textContent,a)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||Ea(e,!0)}function nm(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:En=En.return}}function Qr(e){if(e!==En)return!1;if(!Te)return nm(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ed(e.type,e.memoizedProps)),a=!a),a&&Ye&&Ea(e),nm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=R0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=R0(e)}else n===27?(n=Ye,Ba(e.type)?(e=sd,sd=null,Ye=e):Ye=n):Ye=En?ui(e.stateNode.nextSibling):null;return!0}function ur(){Ye=En=null,Te=!1}function Fu(){var e=ba;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),ba=null),e}function ro(e){ba===null?ba=[e]:ba.push(e)}var Bu=z(null),fr=null,ji=null;function Ta(e,n,a){yt(Bu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Bu.current,rt(Bu)}function Iu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Hu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Iu(d.return,a,e),o||(S=null);break t}d=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Iu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Jr(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;Yn(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===lt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&Hu(n,e,a,o),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dr(e){fr=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return im(fr,e)}function Sl(e,n){return fr===null&&dr(e),im(e,n)}function im(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(e===null)throw Error(s(308));ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ji=ji.next=n;return a}var _y=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},vy=r.unstable_scheduleCallback,xy=r.unstable_NormalPriority,cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new _y,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&vy(xy,function(){e.controller.abort()})}var oo=null,Vu=0,$r=0,ts=null;function yy(e,n){if(oo===null){var a=oo=[];Vu=0,$r=Wf(),ts={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Vu++,n.then(am,am),n}function am(){if(--Vu===0&&oo!==null){ts!==null&&(ts.status="fulfilled");var e=oo;oo=null,$r=0,ts=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Sy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var rm=F.S;F.S=function(e,n){Vg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yy(e,n),rm!==null&&rm(e,n)};var hr=z(null);function ku(){var e=hr.current;return e!==null?e:We.pooledCache}function Ml(e,n){n===null?yt(hr,hr.current):yt(hr,n.pool)}function sm(){var e=ku();return e===null?null:{parent:cn._currentValue,pool:e}}var es=Error(s(460)),ju=Error(s(474)),bl=Error(s(542)),El={then:function(){}};function om(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,um(e),e;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,um(e),e}throw mr=n,es}}function pr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mr=a,es):a}}var mr=null;function cm(){if(mr===null)throw Error(s(459));var e=mr;return mr=null,e}function um(e){if(e===es||e===bl)throw Error(s(483))}var ns=null,lo=0;function Tl(e){var n=lo;return lo+=1,ns===null&&(ns=[]),lm(ns,e,n)}function co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function fm(e){function n(K,X){if(e){var et=K.deletions;et===null?(K.deletions=[X],K.flags|=16):et.push(X)}}function a(K,X){if(!e)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=Vi(K,X),K.index=0,K.sibling=null,K}function d(K,X,et){return K.index=et,e?(et=K.alternate,et!==null?(et=et.index,et<X?(K.flags|=67108866,X):et):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,X,et,gt){return X===null||X.tag!==6?(X=Uu(et,K.mode,gt),X.return=K,X):(X=u(X,et),X.return=K,X)}function H(K,X,et,gt){var ie=et.type;return ie===T?pt(K,X,et.props.children,gt,et.key):X!==null&&(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===j&&pr(ie)===X.type)?(X=u(X,et.props),co(X,et),X.return=K,X):(X=vl(et.type,et.key,et.props,null,K.mode,gt),co(X,et),X.return=K,X)}function nt(K,X,et,gt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=Lu(et,K.mode,gt),X.return=K,X):(X=u(X,et.children||[]),X.return=K,X)}function pt(K,X,et,gt,ie){return X===null||X.tag!==7?(X=cr(et,K.mode,gt,ie),X.return=K,X):(X=u(X,et),X.return=K,X)}function _t(K,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Uu(""+X,K.mode,et),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return et=vl(X.type,X.key,X.props,null,K.mode,et),co(et,X),et.return=K,et;case b:return X=Lu(X,K.mode,et),X.return=K,X;case j:return X=pr(X),_t(K,X,et)}if(ut(X)||V(X))return X=cr(X,K.mode,et,null),X.return=K,X;if(typeof X.then=="function")return _t(K,Tl(X),et);if(X.$$typeof===L)return _t(K,Sl(K,X),et);Al(K,X)}return null}function st(K,X,et,gt){var ie=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ie!==null?null:A(K,X,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===ie?H(K,X,et,gt):null;case b:return et.key===ie?nt(K,X,et,gt):null;case j:return et=pr(et),st(K,X,et,gt)}if(ut(et)||V(et))return ie!==null?null:pt(K,X,et,gt,null);if(typeof et.then=="function")return st(K,X,Tl(et),gt);if(et.$$typeof===L)return st(K,X,Sl(K,et),gt);Al(K,et)}return null}function ft(K,X,et,gt,ie){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get(et)||null,A(X,K,""+gt,ie);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case y:return K=K.get(gt.key===null?et:gt.key)||null,H(X,K,gt,ie);case b:return K=K.get(gt.key===null?et:gt.key)||null,nt(X,K,gt,ie);case j:return gt=pr(gt),ft(K,X,et,gt,ie)}if(ut(gt)||V(gt))return K=K.get(et)||null,pt(X,K,gt,ie,null);if(typeof gt.then=="function")return ft(K,X,et,Tl(gt),ie);if(gt.$$typeof===L)return ft(K,X,et,Sl(X,gt),ie);Al(X,gt)}return null}function Vt(K,X,et,gt){for(var ie=null,we=null,Zt=X,he=X=0,Ee=null;Zt!==null&&he<et.length;he++){Zt.index>he?(Ee=Zt,Zt=null):Ee=Zt.sibling;var Ce=st(K,Zt,et[he],gt);if(Ce===null){Zt===null&&(Zt=Ee);break}e&&Zt&&Ce.alternate===null&&n(K,Zt),X=d(Ce,X,he),we===null?ie=Ce:we.sibling=Ce,we=Ce,Zt=Ee}if(he===et.length)return a(K,Zt),Te&&ki(K,he),ie;if(Zt===null){for(;he<et.length;he++)Zt=_t(K,et[he],gt),Zt!==null&&(X=d(Zt,X,he),we===null?ie=Zt:we.sibling=Zt,we=Zt);return Te&&ki(K,he),ie}for(Zt=o(Zt);he<et.length;he++)Ee=ft(Zt,K,he,et[he],gt),Ee!==null&&(e&&Ee.alternate!==null&&Zt.delete(Ee.key===null?he:Ee.key),X=d(Ee,X,he),we===null?ie=Ee:we.sibling=Ee,we=Ee);return e&&Zt.forEach(function(ka){return n(K,ka)}),Te&&ki(K,he),ie}function ae(K,X,et,gt){if(et==null)throw Error(s(151));for(var ie=null,we=null,Zt=X,he=X=0,Ee=null,Ce=et.next();Zt!==null&&!Ce.done;he++,Ce=et.next()){Zt.index>he?(Ee=Zt,Zt=null):Ee=Zt.sibling;var ka=st(K,Zt,Ce.value,gt);if(ka===null){Zt===null&&(Zt=Ee);break}e&&Zt&&ka.alternate===null&&n(K,Zt),X=d(ka,X,he),we===null?ie=ka:we.sibling=ka,we=ka,Zt=Ee}if(Ce.done)return a(K,Zt),Te&&ki(K,he),ie;if(Zt===null){for(;!Ce.done;he++,Ce=et.next())Ce=_t(K,Ce.value,gt),Ce!==null&&(X=d(Ce,X,he),we===null?ie=Ce:we.sibling=Ce,we=Ce);return Te&&ki(K,he),ie}for(Zt=o(Zt);!Ce.done;he++,Ce=et.next())Ce=ft(Zt,K,he,Ce.value,gt),Ce!==null&&(e&&Ce.alternate!==null&&Zt.delete(Ce.key===null?he:Ce.key),X=d(Ce,X,he),we===null?ie=Ce:we.sibling=Ce,we=Ce);return e&&Zt.forEach(function(US){return n(K,US)}),Te&&ki(K,he),ie}function Ge(K,X,et,gt){if(typeof et=="object"&&et!==null&&et.type===T&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var ie=et.key;X!==null;){if(X.key===ie){if(ie=et.type,ie===T){if(X.tag===7){a(K,X.sibling),gt=u(X,et.props.children),gt.return=K,K=gt;break t}}else if(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===j&&pr(ie)===X.type){a(K,X.sibling),gt=u(X,et.props),co(gt,et),gt.return=K,K=gt;break t}a(K,X);break}else n(K,X);X=X.sibling}et.type===T?(gt=cr(et.props.children,K.mode,gt,et.key),gt.return=K,K=gt):(gt=vl(et.type,et.key,et.props,null,K.mode,gt),co(gt,et),gt.return=K,K=gt)}return S(K);case b:t:{for(ie=et.key;X!==null;){if(X.key===ie)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(K,X.sibling),gt=u(X,et.children||[]),gt.return=K,K=gt;break t}else{a(K,X);break}else n(K,X);X=X.sibling}gt=Lu(et,K.mode,gt),gt.return=K,K=gt}return S(K);case j:return et=pr(et),Ge(K,X,et,gt)}if(ut(et))return Vt(K,X,et,gt);if(V(et)){if(ie=V(et),typeof ie!="function")throw Error(s(150));return et=ie.call(et),ae(K,X,et,gt)}if(typeof et.then=="function")return Ge(K,X,Tl(et),gt);if(et.$$typeof===L)return Ge(K,X,Sl(K,et),gt);Al(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(K,X.sibling),gt=u(X,et),gt.return=K,K=gt):(a(K,X),gt=Uu(et,K.mode,gt),gt.return=K,K=gt),S(K)):a(K,X)}return function(K,X,et,gt){try{lo=0;var ie=Ge(K,X,et,gt);return ns=null,ie}catch(Zt){if(Zt===es||Zt===bl)throw Zt;var we=Zn(29,Zt,null,K.mode);return we.lanes=gt,we.return=K,we}finally{}}}var gr=fm(!0),dm=fm(!1),Aa=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(e),Zp(e,null,a),n}return gl(e,o,n,a),_l(e)}function uo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ai(e,a)}}function qu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Yu=!1;function fo(){if(Yu){var e=ts;if(e!==null)throw e}}function ho(e,n,a,o){Yu=!1;var u=e.updateQueue;Aa=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,nt=H.next;H.next=null,S===null?d=nt:S.next=nt,S=H;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==S&&(A===null?pt.firstBaseUpdate=nt:A.next=nt,pt.lastBaseUpdate=H))}if(d!==null){var _t=u.baseState;S=0,pt=nt=H=null,A=d;do{var st=A.lane&-536870913,ft=st!==A.lane;if(ft?(be&st)===st:(o&st)===st){st!==0&&st===$r&&(Yu=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Vt=e,ae=A;st=n;var Ge=a;switch(ae.tag){case 1:if(Vt=ae.payload,typeof Vt=="function"){_t=Vt.call(Ge,_t,st);break t}_t=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ae.payload,st=typeof Vt=="function"?Vt.call(Ge,_t,st):Vt,st==null)break t;_t=g({},_t,st);break t;case 2:Aa=!0}}st=A.callback,st!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[st]:ft.push(st))}else ft={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(nt=pt=ft,H=_t):pt=pt.next=ft,S|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ft=A,A=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);pt===null&&(H=_t),u.baseState=H,u.firstBaseUpdate=nt,u.lastBaseUpdate=pt,d===null&&(u.shared.lanes=0),La|=S,e.lanes=S,e.memoizedState=_t}}function hm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function pm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hm(a[e],n)}var is=z(null),Rl=z(0);function mm(e,n){e=ta,yt(Rl,e),yt(is,n),ta=e|n.baseLanes}function Zu(){yt(Rl,ta),yt(is,is.current)}function Ku(){ta=Rl.current,rt(is),rt(Rl)}var Kn=z(null),ci=null;function Ca(e){var n=e.alternate;yt(sn,sn.current&1),yt(Kn,e),ci===null&&(n===null||is.current!==null||n.memoizedState!==null)&&(ci=e)}function Qu(e){yt(sn,sn.current),yt(Kn,e),ci===null&&(ci=e)}function gm(e){e.tag===22?(yt(sn,sn.current),yt(Kn,e),ci===null&&(ci=e)):Da()}function Da(){yt(sn,sn.current),yt(Kn,Kn.current)}function Qn(e){rt(Kn),ci===e&&(ci=null),rt(sn)}var sn=z(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ad(a)||rd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,fe=null,Ie=null,un=null,Cl=!1,as=!1,_r=!1,Dl=0,po=0,rs=null,My=0;function en(){throw Error(s(321))}function Ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function $u(e,n,a,o,u,d){return Wi=d,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?$m:mf,_r=!1,d=a(o,u),_r=!1,as&&(d=vm(n,a,o,u)),_m(e),d}function _m(e){F.H=_o;var n=Ie!==null&&Ie.next!==null;if(Wi=0,un=Ie=fe=null,Cl=!1,po=0,rs=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&yl(e)&&(fn=!0))}function vm(e,n,a,o){fe=e;var u=0;do{if(as&&(rs=null),po=0,as=!1,25<=u)throw Error(s(301));if(u+=1,un=Ie=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=tg,d=n(a,o)}while(as);return d}function by(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(fe.flags|=1024),n}function tf(){var e=Dl!==0;return Dl=0,e}function ef(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function nf(e){if(Cl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Cl=!1}Wi=0,un=Ie=fe=null,as=!1,po=Dl=0,rs=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?fe.memoizedState=un=e:un=un.next=e,un}function on(){if(Ie===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=un===null?fe.memoizedState:un.next;if(n!==null)un=n,Ie=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},un===null?fe.memoizedState=un=e:un=un.next=e}return un}function Nl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,rs===null&&(rs=[]),e=lm(rs,e,n),n=fe,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?$m:mf),e}function Ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===L)return Tn(e)}throw Error(s(438,String(e)))}function af(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Nl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function Ll(e){var n=on();return rf(n,Ie,e)}function rf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=S=null,H=null,nt=n,pt=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(be&_t)===_t:(Wi&_t)===_t){var st=nt.revertLane;if(st===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===$r&&(pt=!0);else if((Wi&st)===st){nt=nt.next,st===$r&&(pt=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=_t,S=d):H=H.next=_t,fe.lanes|=st,La|=st;_t=nt.action,_r&&a(d,_t),d=nt.hasEagerState?nt.eagerState:a(d,_t)}else st={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=st,S=d):H=H.next=st,fe.lanes|=_t,La|=_t;nt=nt.next}while(nt!==null&&nt!==n);if(H===null?S=d:H.next=A,!Yn(d,e.memoizedState)&&(fn=!0,pt&&(a=ts,a!==null)))throw a;e.memoizedState=d,e.baseState=S,e.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function sf(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);Yn(d,n.memoizedState)||(fn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function xm(e,n,a){var o=fe,u=on(),d=Te;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Yn((Ie||u).memoizedState,a);if(S&&(u.memoizedState=a,fn=!0),u=u.queue,cf(Mm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ss(9,{destroy:void 0},Sm.bind(null,o,u,a,n),null),We===null)throw Error(s(349));d||(Wi&127)!==0||ym(o,n,a)}return a}function ym(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Nl(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Sm(e,n,a,o){n.value=a,n.getSnapshot=o,bm(n)&&Em(e)}function Mm(e,n,a){return a(function(){bm(n)&&Em(e)})}function bm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Em(e){var n=lr(e,2);n!==null&&kn(n,e,2)}function of(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),_r){te(!0);try{a()}finally{te(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function Tm(e,n,a,o){return e.baseState=a,rf(e,Ie,typeof o=="function"?o:qi)}function Ey(e,n,a,o,u){if(zl(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};F.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Am(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Am(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=F.T,S={};F.T=S;try{var A=a(u,o),H=F.S;H!==null&&H(S,A),Rm(e,n,A)}catch(nt){lf(e,n,nt)}finally{d!==null&&S.types!==null&&(d.types=S.types),F.T=d}}else try{d=a(u,o),Rm(e,n,d)}catch(nt){lf(e,n,nt)}}function Rm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){wm(e,n,o)},function(o){return lf(e,n,o)}):wm(e,n,a)}function wm(e,n,a){n.status="fulfilled",n.value=a,Cm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Am(e,a)))}function lf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Cm(n),n=n.next;while(n!==o)}e.action=null}function Cm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Dm(e,n){return n}function Nm(e,n){if(Te){var a=We.formState;if(a!==null){t:{var o=fe;if(Te){if(Ye){e:{for(var u=Ye,d=li;u.nodeType!==8;){if(!d){u=null;break e}if(u=ui(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ye=ui(u.nextSibling),o=u.data==="F!";break t}}Ea(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dm,lastRenderedState:n},a.queue=o,a=Km.bind(null,fe,o),o.dispatch=a,o=of(!1),d=pf.bind(null,fe,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Ey.bind(null,fe,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Um(e){var n=on();return Lm(n,Ie,e)}function Lm(e,n,a){if(n=rf(e,n,Dm)[0],e=Ll(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(S){throw S===es?bl:S}else o=n;n=on();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,ss(9,{destroy:void 0},Ty.bind(null,u,a),null)),[o,d,e]}function Ty(e,n){e.action=n}function Om(e){var n=on(),a=Ie;if(a!==null)return Lm(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ss(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Nl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Pm(){return on().memoizedState}function Ol(e,n,a,o){var u=Pn();fe.flags|=e,u.memoizedState=ss(1|n,{destroy:void 0},a,o===void 0?null:o)}function Pl(e,n,a,o){var u=on();o=o===void 0?null:o;var d=u.memoizedState.inst;Ie!==null&&o!==null&&Ju(o,Ie.memoizedState.deps)?u.memoizedState=ss(n,d,a,o):(fe.flags|=e,u.memoizedState=ss(1|n,d,a,o))}function zm(e,n){Ol(8390656,8,e,n)}function cf(e,n){Pl(2048,8,e,n)}function Ay(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Nl(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Fm(e){var n=on().memoizedState;return Ay({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Bm(e,n){return Pl(4,2,e,n)}function Im(e,n){return Pl(4,4,e,n)}function Hm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gm(e,n,a){a=a!=null?a.concat([e]):null,Pl(4,4,Hm.bind(null,n,e),a)}function uf(){}function Vm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ju(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function km(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ju(n,o[1]))return o[0];if(o=e(),_r){te(!0);try{e()}finally{te(!1)}}return a.memoizedState=[o,n],o}function ff(e,n,a){return a===void 0||(Wi&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=jg(),fe.lanes|=e,La|=e,a)}function jm(e,n,a,o){return Yn(a,n)?a:is.current!==null?(e=ff(e,a,o),Yn(e,n)||(fn=!0),e):(Wi&42)===0||(Wi&1073741824)!==0&&(be&261930)===0?(fn=!0,e.memoizedState=a):(e=jg(),fe.lanes|=e,La|=e,n)}function Xm(e,n,a,o,u){var d=Y.p;Y.p=d!==0&&8>d?d:8;var S=F.T,A={};F.T=A,pf(e,!1,n,a);try{var H=u(),nt=F.S;if(nt!==null&&nt(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pt=Sy(H,o);go(e,n,pt,ti(e))}else go(e,n,o,ti(e))}catch(_t){go(e,n,{then:function(){},status:"rejected",reason:_t},ti())}finally{Y.p=d,S!==null&&A.types!==null&&(S.types=A.types),F.T=S}}function Ry(){}function df(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Wm(e).queue;Xm(e,u,n,q,a===null?Ry:function(){return qm(e),a(o)})}function Wm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function qm(e){var n=Wm(e);n.next===null&&(n=e.alternate.memoizedState),go(e,n.next.queue,{},ti())}function hf(){return Tn(Lo)}function Ym(){return on().memoizedState}function Zm(){return on().memoizedState}function wy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=Ra(a);var o=wa(n,e,a);o!==null&&(kn(o,n,a),uo(o,n,a)),n={cache:Gu()},e.payload=n;return}n=n.return}}function Cy(e,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?Qm(n,a):(a=Du(e,n,a,o),a!==null&&(kn(a,e,o),Jm(a,n,o)))}function Km(e,n,a){var o=ti();go(e,n,a,o)}function go(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))Qm(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,A=d(S,a);if(u.hasEagerState=!0,u.eagerState=A,Yn(A,S))return gl(e,n,u,0),We===null&&ml(),!1}catch{}finally{}if(a=Du(e,n,u,o),a!==null)return kn(a,e,o),Jm(a,n,o),!0}return!1}function pf(e,n,a,o){if(o={lane:2,revertLane:Wf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(s(479))}else n=Du(e,a,o,2),n!==null&&kn(n,e,2)}function zl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Qm(e,n){as=Cl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Jm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ai(e,a)}}var _o={readContext:Tn,use:Ul,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};_o.useEffectEvent=en;var $m={readContext:Tn,use:Ul,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:zm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ol(4194308,4,Hm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ol(4194308,4,e,n)},useInsertionEffect:function(e,n){Ol(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var o=e();if(_r){te(!0);try{e()}finally{te(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(_r){te(!0);try{a(n)}finally{te(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Cy.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=of(e);var n=e.queue,a=Km.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(e,n){var a=Pn();return ff(a,e,n)},useTransition:function(){var e=of(!1);return e=Xm.bind(null,fe,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=Pn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(be&127)!==0||ym(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,zm(Mm.bind(null,o,d,e),[e]),o.flags|=2048,ss(9,{destroy:void 0},Sm.bind(null,o,d,a,n),null),a},useId:function(){var e=Pn(),n=We.identifierPrefix;if(Te){var a=Ci,o=wi;a=(o&~(1<<32-Bt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=My++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:hf,useFormState:Nm,useActionState:Nm,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=pf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:af,useCacheRefresh:function(){return Pn().memoizedState=wy.bind(null,fe)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},mf={readContext:Tn,use:Ul,useCallback:Vm,useContext:Tn,useEffect:cf,useImperativeHandle:Gm,useInsertionEffect:Bm,useLayoutEffect:Im,useMemo:km,useReducer:Ll,useRef:Pm,useState:function(){return Ll(qi)},useDebugValue:uf,useDeferredValue:function(e,n){var a=on();return jm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Ll(qi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:xm,useId:Ym,useHostTransitionStatus:hf,useFormState:Um,useActionState:Um,useOptimistic:function(e,n){var a=on();return Tm(a,Ie,e,n)},useMemoCache:af,useCacheRefresh:Zm};mf.useEffectEvent=Fm;var tg={readContext:Tn,use:Ul,useCallback:Vm,useContext:Tn,useEffect:cf,useImperativeHandle:Gm,useInsertionEffect:Bm,useLayoutEffect:Im,useMemo:km,useReducer:sf,useRef:Pm,useState:function(){return sf(qi)},useDebugValue:uf,useDeferredValue:function(e,n){var a=on();return Ie===null?ff(a,e,n):jm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=sf(qi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:xm,useId:Ym,useHostTransitionStatus:hf,useFormState:Om,useActionState:Om,useOptimistic:function(e,n){var a=on();return Ie!==null?Tm(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:af,useCacheRefresh:Zm};tg.useEffectEvent=Fm;function gf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var _f={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ti(),u=Ra(o);u.payload=n,a!=null&&(u.callback=a),n=wa(e,u,o),n!==null&&(kn(n,e,o),uo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ti(),u=Ra(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=wa(e,u,o),n!==null&&(kn(n,e,o),uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),o=Ra(a);o.tag=2,n!=null&&(o.callback=n),n=wa(e,o,a),n!==null&&(kn(n,e,a),uo(n,e,a))}};function eg(e,n,a,o,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,d):!0}function ng(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&_f.enqueueReplaceState(n,n.state,null)}function vr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function ig(e){pl(e)}function ag(e){console.error(e)}function rg(e){pl(e)}function Fl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function sg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vf(e,n,a){return a=Ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(e,n)},a}function og(e){return e=Ra(e),e.tag=3,e}function lg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){sg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){sg(n,a,o),typeof u!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Dy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Jr(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Zl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===El?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),kf(e,o,u)),!1;case 22:return a.flags|=65536,o===El?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),kf(e,o,u)),!1}throw Error(s(435,a.tag))}return kf(e,o,u),Zl(),!1}if(Te)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zu&&(e=Error(s(422),{cause:o}),ro(ri(e,a)))):(o!==zu&&(n=Error(s(423),{cause:o}),ro(ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ri(o,a),u=vf(e.stateNode,o,u),qu(e,u),nn!==4&&(nn=2)),!1;var d=Error(s(520),{cause:o});if(d=ri(d,a),To===null?To=[d]:To.push(d),nn!==4&&(nn=2),n===null)return!0;o=ri(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=vf(a.stateNode,o,e),qu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Oa===null||!Oa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=og(u),lg(u,e,a,o),qu(a,u),!1}a=a.return}while(a!==null);return!1}var xf=Error(s(461)),fn=!1;function An(e,n,a,o){n.child=e===null?dm(n,null,a,o):gr(n,e.child,a,o)}function cg(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return dr(n),o=$u(e,n,a,S,d,u),A=tf(),e!==null&&!fn?(ef(e,n,u),Yi(e,n,u)):(Te&&A&&Ou(n),n.flags|=1,An(e,n,o,u),n.child)}function ug(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Nu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,fg(e,n,d,o,u)):(e=vl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Rf(e,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(S,o)&&e.ref===n.ref)return Yi(e,n,u)}return n.flags|=1,e=Vi(d,o),e.ref=n.ref,e.return=n,n.child=e}function fg(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(no(d,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=d,Rf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,Yi(e,n,u)}return yf(e,n,a,o,u)}function dg(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return hg(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ml(n,d!==null?d.cachePool:null),d!==null?mm(n,d):Zu(),gm(n);else return o=n.lanes=536870912,hg(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ml(n,d.cachePool),mm(n,d),Da(),n.memoizedState=null):(e!==null&&Ml(n,null),Zu(),Da());return An(e,n,u,a),n.child}function vo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function hg(e,n,a,o,u){var d=ku();return d=d===null?null:{parent:cn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&Ml(n,null),Zu(),gm(n),e!==null&&Jr(e,n,o,!0),n.childLanes=u,null}function Bl(e,n){return n=Hl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function pg(e,n,a){return gr(n,e.child,null,a),e=Bl(n,n.pendingProps),e.flags|=2,Qn(n),n.memoizedState=null,e}function Ny(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Bl(n,o),n.lanes=536870912,vo(null,e);if(Qu(n),(e=Ye)?(e=A0(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:wi,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Qp(e),a.return=n,n.child=a,En=n,Ye=null)):e=null,e===null)throw Ea(n);return n.lanes=536870912,null}return Bl(n,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(Qu(n),u)if(n.flags&256)n.flags&=-257,n=pg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Jr(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=We,o!==null&&(S=Fr(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,lr(e,S),kn(o,e,S),xf;Zl(),n=pg(e,n,a)}else e=d.treeContext,Ye=ui(S.nextSibling),En=n,Te=!0,ba=null,li=!1,e!==null&&tm(n,e),n=Bl(n,o),n.flags|=4096;return n}return e=Vi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Il(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function yf(e,n,a,o,u){return dr(n),a=$u(e,n,a,o,void 0,u),o=tf(),e!==null&&!fn?(ef(e,n,u),Yi(e,n,u)):(Te&&o&&Ou(n),n.flags|=1,An(e,n,a,u),n.child)}function mg(e,n,a,o,u,d){return dr(n),n.updateQueue=null,a=vm(n,o,a,u),_m(e),o=tf(),e!==null&&!fn?(ef(e,n,d),Yi(e,n,d)):(Te&&o&&Ou(n),n.flags|=1,An(e,n,a,d),n.child)}function gg(e,n,a,o,u){if(dr(n),n.stateNode===null){var d=Yr,S=a.contextType;typeof S=="object"&&S!==null&&(d=Tn(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=_f,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Xu(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?Tn(S):Yr,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(gf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&_f.enqueueReplaceState(d,d.state,null),ho(n,o,d,u),fo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,H=vr(a,A);d.props=H;var nt=d.context,pt=a.contextType;S=Yr,typeof pt=="object"&&pt!==null&&(S=Tn(pt));var _t=a.getDerivedStateFromProps;pt=typeof _t=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||nt!==S)&&ng(n,d,o,S),Aa=!1;var st=n.memoizedState;d.state=st,ho(n,o,d,u),fo(),nt=n.memoizedState,A||st!==nt||Aa?(typeof _t=="function"&&(gf(n,a,_t,o),nt=n.memoizedState),(H=Aa||eg(n,a,H,o,st,nt,S))?(pt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),d.props=o,d.state=nt,d.context=S,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Wu(e,n),S=n.memoizedProps,pt=vr(a,S),d.props=pt,_t=n.pendingProps,st=d.context,nt=a.contextType,H=Yr,typeof nt=="object"&&nt!==null&&(H=Tn(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==_t||st!==H)&&ng(n,d,o,H),Aa=!1,st=n.memoizedState,d.state=st,ho(n,o,d,u),fo();var ft=n.memoizedState;S!==_t||st!==ft||Aa||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof A=="function"&&(gf(n,a,A,o),ft=n.memoizedState),(pt=Aa||eg(n,a,pt,o,st,ft,H)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(nt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ft,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ft,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),d.props=o,d.state=ft,d.context=H,o=pt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Il(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=gr(n,e.child,null,u),n.child=gr(n,null,a,u)):An(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Yi(e,n,u),e}function _g(e,n,a,o){return ur(),n.flags|=256,An(e,n,a,o),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(e){return{baseLanes:e,cachePool:sm()}}function bf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=$n),e}function vg(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Ca(n):Da(),(e=Ye)?(e=A0(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:wi,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Qp(e),a.return=n,n.child=a,En=n,Ye=null)):e=null,e===null)throw Ea(n);return rd(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Da(),u=n.mode,A=Hl({mode:"hidden",children:A},u),o=cr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Mf(a),o.childLanes=bf(e,S,a),n.memoizedState=Sf,vo(null,o)):(Ca(n),Ef(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(d)n.flags&256?(Ca(n),n.flags&=-257,n=Tf(e,n,a)):n.memoizedState!==null?(Da(),n.child=e.child,n.flags|=128,n=null):(Da(),A=o.fallback,u=n.mode,o=Hl({mode:"visible",children:o.children},u),A=cr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,gr(n,e.child,null,a),o=n.child,o.memoizedState=Mf(a),o.childLanes=bf(e,S,a),n.memoizedState=Sf,n=vo(null,o));else if(Ca(n),rd(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var nt=S.dgst;S=nt,o=Error(s(419)),o.stack="",o.digest=S,ro({value:o,source:null,stack:null}),n=Tf(e,n,a)}else if(fn||Jr(e,n,a,!1),S=(a&e.childLanes)!==0,fn||S){if(S=We,S!==null&&(o=Fr(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,lr(e,o),kn(S,e,o),xf;ad(A)||Zl(),n=Tf(e,n,a)}else ad(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Ye=ui(A.nextSibling),En=n,Te=!0,ba=null,li=!1,e!==null&&tm(n,e),n=Ef(n,o.children),n.flags|=4096);return n}return u?(Da(),A=o.fallback,u=n.mode,H=e.child,nt=H.sibling,o=Vi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,nt!==null?A=Vi(nt,A):(A=cr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,vo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Mf(a):(u=A.cachePool,u!==null?(H=cn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=sm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=bf(e,S,a),n.memoizedState=Sf,vo(e.child,o)):(Ca(n),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Ef(e,n){return n=Hl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hl(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function Tf(e,n,a){return gr(n,e.child,null,a),e=Ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function xg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Iu(e.return,n,a)}function Af(e,n,a,o,u,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function yg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=sn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,yt(sn,S),An(e,n,o,a),o=Te?ao:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xg(e,a,n);else if(e.tag===19)xg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Af(n,!0,a,null,d,o);break;case"together":Af(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),La|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Jr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Vi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function Uy(e,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),Ta(n,cn,e.memoizedState.cache),ur();break;case 27:case 5:It(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:Ta(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?vg(e,n,a):(Ca(n),e=Yi(e,n,a),e!==null?e.sibling:null);Ca(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Jr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return yg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,dg(e,n,a,n.pendingProps);case 24:Ta(n,cn,e.memoizedState.cache)}return Yi(e,n,a)}function Sg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Rf(e,a)&&(n.flags&128)===0)return fn=!1,Uy(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Te&&(n.flags&1048576)!==0&&$p(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=pr(n.elementType),n.type=e,typeof e=="function")Nu(e)?(o=vr(e,o),n.tag=1,n=gg(null,n,e,o,a)):(n.tag=0,n=yf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=cg(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=ug(null,n,e,o,a);break t}}throw n=$(e)||e,Error(s(306,n,""))}}return n;case 0:return yf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=vr(o,n.pendingProps),gg(e,n,o,u,a);case 3:t:{if(At(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Wu(e,n),ho(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ta(n,cn,o),o!==d.cache&&Hu(n,[cn],a,!0),fo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=_g(e,n,o,a);break t}else if(o!==u){u=ri(Error(s(424)),n),ro(u),n=_g(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=ui(e.firstChild),En=n,Te=!0,ba=null,li=!0,a=dm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ur(),o===u){n=Yi(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return Il(e,n),e===null?(a=U0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=nc(tt.current).createElement(a),o[ln]=n,o[Mn]=e,Rn(o,a,e),St(o),n.stateNode=o):n.memoizedState=U0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return It(n),e===null&&Te&&(o=n.stateNode=C0(n.type,n.pendingProps,tt.current),En=n,li=!0,u=Ye,Ba(n.type)?(sd=u,Ye=ui(o.firstChild)):Ye=u),An(e,n,n.pendingProps.children,a),Il(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=Ye)&&(o=lS(o,n.type,n.pendingProps,li),o!==null?(n.stateNode=o,En=n,Ye=ui(o.firstChild),li=!1,u=!0):u=!1),u||Ea(n)),It(n),u=n.type,d=n.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,ed(u,d)?o=null:S!==null&&ed(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=$u(e,n,by,null,null,a),Lo._currentValue=u),Il(e,n),An(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=Ye)&&(a=cS(a,n.pendingProps,li),a!==null?(n.stateNode=a,En=n,Ye=null,e=!0):e=!1),e||Ea(n)),null;case 13:return vg(e,n,a);case 4:return At(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=gr(n,null,o,a):An(e,n,o,a),n.child;case 11:return cg(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ta(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,dr(n),u=Tn(u),o=o(u),n.flags|=1,An(e,n,o,a),n.child;case 14:return ug(e,n,n.type,n.pendingProps,a);case 15:return fg(e,n,n.type,n.pendingProps,a);case 19:return yg(e,n,a);case 31:return Ny(e,n,a);case 22:return dg(e,n,a,n.pendingProps);case 24:return dr(n),o=Tn(cn),e===null?(u=ku(),u===null&&(u=We,d=Gu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Xu(n),Ta(n,cn,u)):((e.lanes&a)!==0&&(Wu(e,n),ho(n,null,null,a),fo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ta(n,cn,o)):(o=d.cache,Ta(n,cn,o),o!==u.cache&&Hu(n,[cn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Zi(e){e.flags|=4}function wf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Yg())e.flags|=8192;else throw mr=El,ju}else e.flags&=-16777217}function Mg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!F0(n))if(Yg())e.flags|=8192;else throw mr=El,ju}function Gl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pe():536870912,e.lanes|=n,us|=n)}function xo(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Ly(e,n,a){var o=n.pendingProps;switch(Pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(cn),Lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qr(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fu())),Ze(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(Zi(n),d!==null?(Ze(n),Mg(n,d)):(Ze(n),wf(n,u,null,o,a))):d?d!==e.memoizedState?(Zi(n),Ze(n),Mg(n,d)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Zi(n),Ze(n),wf(n,u,e,o,a)),null;case 27:if(se(n),a=tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=bt.current,Qr(n)?em(n):(e=C0(u,o,a),n.stateNode=e,Zi(n))}return Ze(n),null;case 5:if(se(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(d=bt.current,Qr(n))em(n);else{var S=nc(tt.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[ln]=n,d[Mn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;t:switch(Rn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Zi(n)}}return Ze(n),wf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=tt.current,Qr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=En,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||v0(e.nodeValue,a)),e||Ea(n,!0)}else e=nc(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Qr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Qr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),Ze(n),null);case 4:return Lt(),e===null&&Kf(n.stateNode.containerInfo),Ze(n),null;case 10:return Xi(n.type),Ze(n),null;case 19:if(rt(sn),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)xo(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=wl(e),d!==null){for(n.flags|=128,xo(o,!1),e=d.updateQueue,n.updateQueue=e,Gl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Kp(a,e),a=a.sibling;return yt(sn,sn.current&1|2),Te&&ki(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Wl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(e=wl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Gl(n,e),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Te)return Ze(n),null}else 2*E()-o.renderingStartTime>Wl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=sn.current,yt(sn,u?a&1|2:a&1),Te&&ki(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return Qn(n),Ku(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&rt(hr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Oy(e,n){switch(Pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(cn),Lt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return se(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));ur()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ur()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return rt(sn),null;case 4:return Lt(),null;case 10:return Xi(n.type),null;case 22:case 23:return Qn(n),Ku(),e!==null&&rt(hr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(cn),null;case 25:return null;default:return null}}function bg(e,n){switch(Pu(n),n.tag){case 3:Xi(cn),Lt();break;case 26:case 27:case 5:se(n);break;case 4:Lt();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:rt(sn);break;case 10:Xi(n.type);break;case 22:case 23:Qn(n),Ku(),e!==null&&rt(hr);break;case 24:Xi(cn)}}function yo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Fe(n,n.return,A)}}function Na(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var H=a,nt=A;try{nt()}catch(pt){Fe(u,H,pt)}}}o=o.next}while(o!==d)}}catch(pt){Fe(n,n.return,pt)}}function Eg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{pm(n,a)}catch(o){Fe(e,e.return,o)}}}function Tg(e,n,a){a.props=vr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function So(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Di(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function Ag(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function Cf(e,n,a){try{var o=e.stateNode;nS(o,e.type,a,n),o[Mn]=n}catch(u){Fe(e,e.return,u)}}function Rg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function Df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Rg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(o!==4&&(o===27&&Ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Nf(e,n,a),e=e.sibling;e!==null;)Nf(e,n,a),e=e.sibling}function Vl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vl(e,n,a),e=e.sibling;e!==null;)Vl(e,n,a),e=e.sibling}function wg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[ln]=e,n[Mn]=a}catch(d){Fe(e,e.return,d)}}var Ki=!1,dn=!1,Uf=!1,Cg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Py(e,n){if(e=e.containerInfo,$f=cc,e=Gp(e),Eu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var S=0,A=-1,H=-1,nt=0,pt=0,_t=e,st=null;e:for(;;){for(var ft;_t!==a||u!==0&&_t.nodeType!==3||(A=S+u),_t!==d||o!==0&&_t.nodeType!==3||(H=S+o),_t.nodeType===3&&(S+=_t.nodeValue.length),(ft=_t.firstChild)!==null;)st=_t,_t=ft;for(;;){if(_t===e)break e;if(st===a&&++nt===u&&(A=S),st===d&&++pt===o&&(H=S),(ft=_t.nextSibling)!==null)break;_t=st,st=_t.parentNode}_t=ft}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(td={focusedElem:e,selectionRange:a},cc=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Vt=vr(a.type,u);e=o.getSnapshotBeforeUpdate(Vt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Fe(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)id(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":id(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function Dg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(e,a),o&4&&yo(5,a);break;case 1:if(Ji(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Fe(a,a.return,S)}else{var u=vr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Fe(a,a.return,S)}}o&64&&Eg(a),o&512&&So(a,a.return);break;case 3:if(Ji(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pm(e,n)}catch(S){Fe(a,a.return,S)}}break;case 27:n===null&&o&4&&wg(a);case 26:case 5:Ji(e,a),n===null&&o&4&&Ag(a),o&512&&So(a,a.return);break;case 12:Ji(e,a);break;case 31:Ji(e,a),o&4&&Lg(e,a);break;case 13:Ji(e,a),o&4&&Og(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=jy.bind(null,a),uS(e,a))));break;case 22:if(o=a.memoizedState!==null||Ki,!o){n=n!==null&&n.memoizedState!==null||dn,u=Ki;var d=dn;Ki=o,(dn=n)&&!d?$i(e,a,(a.subtreeFlags&8772)!==0):Ji(e,a),Ki=u,dn=d}break;case 30:break;default:Ji(e,a)}}function Ng(e){var n=e.alternate;n!==null&&(e.alternate=null,Ng(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&w(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,In=!1;function Qi(e,n,a){for(a=a.child;a!==null;)Ug(e,n,a),a=a.sibling}function Ug(e,n,a){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 26:dn||Di(a,n),Qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Di(a,n);var o=Ke,u=In;Ba(a.type)&&(Ke=a.stateNode,In=!1),Qi(e,n,a),Do(a.stateNode),Ke=o,In=u;break;case 5:dn||Di(a,n);case 6:if(o=Ke,u=In,Ke=null,Qi(e,n,a),Ke=o,In=u,Ke!==null)if(In)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(d){Fe(a,n,d)}else try{Ke.removeChild(a.stateNode)}catch(d){Fe(a,n,d)}break;case 18:Ke!==null&&(In?(e=Ke,E0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vs(e)):E0(Ke,a.stateNode));break;case 4:o=Ke,u=In,Ke=a.stateNode.containerInfo,In=!0,Qi(e,n,a),Ke=o,In=u;break;case 0:case 11:case 14:case 15:Na(2,a,n),dn||Na(4,a,n),Qi(e,n,a);break;case 1:dn||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Tg(a,n,o)),Qi(e,n,a);break;case 21:Qi(e,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,Qi(e,n,a),dn=o;break;default:Qi(e,n,a)}}function Lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vs(e)}catch(a){Fe(n,n.return,a)}}}function Og(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vs(e)}catch(a){Fe(n,n.return,a)}}function zy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Cg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Cg),n;default:throw Error(s(435,e.tag))}}function kl(e,n){var a=zy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Xy.bind(null,e,o);o.then(u,u)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Ba(A.type)){Ke=A.stateNode,In=!1;break t}break;case 5:Ke=A.stateNode,In=!1;break t;case 3:case 4:Ke=A.stateNode.containerInfo,In=!0;break t}A=A.return}if(Ke===null)throw Error(s(160));Ug(d,S,u),Ke=null,In=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Pg(n,e),n=n.sibling}var gi=null;function Pg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),o&4&&(Na(3,e,e.return),yo(3,e),Na(5,e,e.return));break;case 1:Hn(n,e),Gn(e),o&512&&(dn||a===null||Di(a,a.return)),o&64&&Ki&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=gi;if(Hn(n,e),Gn(e),o&512&&(dn||a===null||Di(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ir]||d[ln]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Rn(d,o,a),d[ln]=e,St(d),o=d;break t;case"link":var S=P0("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(d=S[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;case"meta":if(S=P0("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(d=S[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[ln]=e,St(d),o=d}e.stateNode=o}else z0(u,e.type,e.stateNode);else e.stateNode=O0(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?z0(u,e.type,e.stateNode):O0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),o&512&&(dn||a===null||Di(a,a.return)),a!==null&&o&4&&Cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),o&512&&(dn||a===null||Di(a,a.return)),e.flags&32){u=e.stateNode;try{Gr(u,"")}catch(Vt){Fe(e,e.return,Vt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Cf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Uf=!0);break;case 6:if(Hn(n,e),Gn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Vt){Fe(e,e.return,Vt)}}break;case 3:if(rc=null,u=gi,gi=ic(n.containerInfo),Hn(n,e),gi=u,Gn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vs(n.containerInfo)}catch(Vt){Fe(e,e.return,Vt)}Uf&&(Uf=!1,zg(e));break;case 4:o=gi,gi=ic(e.stateNode.containerInfo),Hn(n,e),Gn(e),gi=o;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,nt=Ki,pt=dn;if(Ki=nt||u,dn=pt||H,Hn(n,e),dn=pt,Ki=nt,Gn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||Ki||dn||xr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=H.stateNode;var _t=H.memoizedProps.style,st=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Vt){Fe(H,H.return,Vt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Vt){Fe(H,H.return,Vt)}}}else if(n.tag===18){if(a===null){H=n;try{var ft=H.stateNode;u?T0(ft,!0):T0(H.stateNode,!1)}catch(Vt){Fe(H,H.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(e,a))));break;case 19:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Rg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Df(e);Vl(e,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(Gr(S,""),a.flags&=-33);var A=Df(e);Vl(e,A,S);break;case 3:case 4:var H=a.stateNode.containerInfo,nt=Df(e);Nf(e,nt,H);break;default:throw Error(s(161))}}catch(pt){Fe(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;zg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Dg(e,n.alternate,n),n=n.sibling}function xr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),xr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Tg(n,n.return,a),xr(n);break;case 27:Do(n.stateNode);case 26:case 5:Di(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}e=e.sibling}}function $i(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:$i(u,d,a),yo(4,d);break;case 1:if($i(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Fe(o,o.return,nt)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)hm(H[u],A)}catch(nt){Fe(o,o.return,nt)}}a&&S&64&&Eg(d),So(d,d.return);break;case 27:wg(d);case 26:case 5:$i(u,d,a),a&&o===null&&S&4&&Ag(d),So(d,d.return);break;case 12:$i(u,d,a);break;case 31:$i(u,d,a),a&&S&4&&Lg(u,d);break;case 13:$i(u,d,a),a&&S&4&&Og(u,d);break;case 22:d.memoizedState===null&&$i(u,d,a),So(d,d.return);break;case 30:break;default:$i(u,d,a)}n=n.sibling}}function Lf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&so(a))}function Of(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e))}function _i(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fg(e,n,a,o),n=n.sibling}function Fg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:_i(e,n,a,o),u&2048&&yo(9,n);break;case 1:_i(e,n,a,o);break;case 3:_i(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e)));break;case 12:if(u&2048){_i(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,S=d.id,A=d.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Fe(n,n.return,H)}}else _i(e,n,a,o);break;case 31:_i(e,n,a,o);break;case 13:_i(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?_i(e,n,a,o):Mo(e,n):d._visibility&2?_i(e,n,a,o):(d._visibility|=2,os(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Lf(S,n);break;case 24:_i(e,n,a,o),u&2048&&Of(n.alternate,n);break;default:_i(e,n,a,o)}}function os(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,S=n,A=a,H=o,nt=S.flags;switch(S.tag){case 0:case 11:case 15:os(d,S,A,H,u),yo(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?os(d,S,A,H,u):Mo(d,S):(pt._visibility|=2,os(d,S,A,H,u)),u&&nt&2048&&Lf(S.alternate,S);break;case 24:os(d,S,A,H,u),u&&nt&2048&&Of(S.alternate,S);break;default:os(d,S,A,H,u)}n=n.sibling}}function Mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&Lf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&Of(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var bo=8192;function ls(e,n,a){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)Bg(e,n,a),e=e.sibling}function Bg(e,n,a){switch(e.tag){case 26:ls(e,n,a),e.flags&bo&&e.memoizedState!==null&&MS(a,gi,e.memoizedState,e.memoizedProps);break;case 5:ls(e,n,a);break;case 3:case 4:var o=gi;gi=ic(e.stateNode.containerInfo),ls(e,n,a),gi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,ls(e,n,a),bo=o):ls(e,n,a));break;default:ls(e,n,a)}}function Ig(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,Gg(o,e)}Ig(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hg(e),e=e.sibling}function Hg(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&Na(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,jl(e)):Eo(e);break;default:Eo(e)}}function jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,Gg(o,e)}Ig(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Na(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}e=e.sibling}}function Gg(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,d=o.return;if(Ng(o),o===a){yn=null;break t}if(u!==null){u.return=d,yn=u;break t}yn=d}}}var Fy={getCacheForType:function(e){var n=Tn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(cn).controller.signal}},By=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,xe=null,be=0,ze=0,Jn=null,Ua=!1,cs=!1,Pf=!1,ta=0,nn=0,La=0,yr=0,zf=0,$n=0,us=0,To=null,Vn=null,Ff=!1,Xl=0,Vg=0,Wl=1/0,ql=null,Oa=null,mn=0,Pa=null,fs=null,ea=0,Bf=0,If=null,kg=null,Ao=0,Hf=null;function ti(){return(Ne&2)!==0&&be!==0?be&-be:F.T!==null?Wf():nr()}function jg(){if($n===0)if((be&536870912)===0||Te){var e=Ut;Ut<<=1,(Ut&3932160)===0&&(Ut=262144),$n=e}else $n=536870912;return e=Kn.current,e!==null&&(e.flags|=32),$n}function kn(e,n,a){(e===We&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(ds(e,0),za(e,be,$n,!1)),Ln(e,a),((Ne&2)===0||e!==We)&&(e===We&&((Ne&2)===0&&(yr|=a),nn===4&&za(e,be,$n,!1)),Ni(e))}function Xg(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Gt(e,n),u=o?Gy(e,n):Vf(e,n,!0),d=o;do{if(u===0){cs&&!o&&za(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!Iy(a)){u=Vf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=To;var H=A.current.memoizedState.isDehydrated;if(H&&(ds(A,S).flags|=256),S=Vf(A,S,!1),S!==2){if(Pf&&!H){A.errorRecoveryDisabledLanes|=d,yr|=d,u=4;break t}d=Vn,Vn=u,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){ds(e,0),za(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:za(o,n,$n,!Ua);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Xl+300-E(),10<u)){if(za(o,n,$n,!Ua),vt(o,0,!0)!==0)break t;ea=n,o.timeoutHandle=M0(Wg.bind(null,o,a,Vn,ql,Ff,n,$n,yr,us,Ua,d,"Throttled",-0,0),u);break t}Wg(o,a,Vn,ql,Ff,n,$n,yr,us,Ua,d,null,-0,0)}}break}while(!0);Ni(e)}function Wg(e,n,a,o,u,d,S,A,H,nt,pt,_t,st,ft){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},Bg(n,d,_t);var Vt=(d&62914560)===d?Xl-E():(d&4194048)===d?Vg-E():0;if(Vt=bS(_t,Vt),Vt!==null){ea=d,e.cancelPendingCommit=Vt(t0.bind(null,e,n,d,a,o,u,S,A,H,pt,_t,null,st,ft)),za(e,d,S,!nt);return}}t0(e,n,d,a,o,u,S,A,H)}function Iy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Yn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(e,n,a,o){n&=~zf,n&=~yr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Bt(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&Ws(e,a,n)}function Yl(){return(Ne&6)===0?(Ro(0),!1):!0}function Gf(){if(xe!==null){if(ze===0)var e=xe.return;else e=xe,ji=fr=null,nf(e),ns=null,lo=0,e=xe;for(;e!==null;)bg(e.alternate,e),e=e.return;xe=null}}function ds(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,rS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Gf(),We=e,xe=a=Vi(e.current,null),be=n,ze=0,Jn=null,Ua=!1,cs=Gt(e,n),Pf=!1,us=$n=zf=yr=La=nn=0,Vn=To=null,Ff=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Bt(o),d=1<<u;n|=e[u],o&=~d}return ta=n,ml(),a}function qg(e,n){fe=null,F.H=_o,n===es||n===bl?(n=cm(),ze=3):n===ju?(n=cm(),ze=4):ze=n===xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,xe===null&&(nn=1,Fl(e,ri(n,e.current)))}function Yg(){var e=Kn.current;return e===null?!0:(be&4194048)===be?ci===null:(be&62914560)===be||(be&536870912)!==0?e===ci:!1}function Zg(){var e=F.H;return F.H=_o,e===null?_o:e}function Kg(){var e=F.A;return F.A=Fy,e}function Zl(){nn=4,Ua||(be&4194048)!==be&&Kn.current!==null||(cs=!0),(La&134217727)===0&&(yr&134217727)===0||We===null||za(We,be,$n,!1)}function Vf(e,n,a){var o=Ne;Ne|=2;var u=Zg(),d=Kg();(We!==e||be!==n)&&(ql=null,ds(e,n)),n=!1;var S=nn;t:do try{if(ze!==0&&xe!==null){var A=xe,H=Jn;switch(ze){case 8:Gf(),S=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var nt=ze;if(ze=0,Jn=null,hs(e,A,H,nt),a&&cs){S=0;break t}break;default:nt=ze,ze=0,Jn=null,hs(e,A,H,nt)}}Hy(),S=nn;break}catch(pt){qg(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ji=fr=null,Ne=o,F.H=u,F.A=d,xe===null&&(We=null,be=0,ml()),S}function Hy(){for(;xe!==null;)Qg(xe)}function Gy(e,n){var a=Ne;Ne|=2;var o=Zg(),u=Kg();We!==e||be!==n?(ql=null,Wl=E()+500,ds(e,n)):cs=Gt(e,n);t:do try{if(ze!==0&&xe!==null){n=xe;var d=Jn;e:switch(ze){case 1:ze=0,Jn=null,hs(e,n,d,1);break;case 2:case 9:if(om(d)){ze=0,Jn=null,Jg(n);break}n=function(){ze!==2&&ze!==9||We!==e||(ze=7),Ni(e)},d.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:om(d)?(ze=0,Jn=null,Jg(n)):(ze=0,Jn=null,hs(e,n,d,7));break;case 5:var S=null;switch(xe.tag){case 26:S=xe.memoizedState;case 5:case 27:var A=xe;if(S?F0(S):A.stateNode.complete){ze=0,Jn=null;var H=A.sibling;if(H!==null)xe=H;else{var nt=A.return;nt!==null?(xe=nt,Kl(nt)):xe=null}break e}}ze=0,Jn=null,hs(e,n,d,5);break;case 6:ze=0,Jn=null,hs(e,n,d,6);break;case 8:Gf(),nn=6;break t;default:throw Error(s(462))}}Vy();break}catch(pt){qg(e,pt)}while(!0);return ji=fr=null,F.H=o,F.A=u,Ne=a,xe!==null?0:(We=null,be=0,ml(),nn)}function Vy(){for(;xe!==null&&!Qe();)Qg(xe)}function Qg(e){var n=Sg(e.alternate,e,ta);e.memoizedProps=e.pendingProps,n===null?Kl(e):xe=n}function Jg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=mg(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=mg(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:nf(n);default:bg(a,n),n=xe=Kp(n,ta),n=Sg(a,n,ta)}e.memoizedProps=e.pendingProps,n===null?Kl(e):xe=n}function hs(e,n,a,o){ji=fr=null,nf(n),ns=null,lo=0;var u=n.return;try{if(Dy(e,u,n,a,be)){nn=1,Fl(e,ri(a,e.current)),xe=null;return}}catch(d){if(u!==null)throw xe=u,d;nn=1,Fl(e,ri(a,e.current)),xe=null;return}n.flags&32768?(Te||o===1?e=!0:cs||(be&536870912)!==0?e=!1:(Ua=e=!0,(o===2||o===9||o===3||o===6)&&(o=Kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),$g(n,e)):Kl(n)}function Kl(e){var n=e;do{if((n.flags&32768)!==0){$g(n,Ua);return}e=n.return;var a=Ly(n.alternate,n,ta);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);nn===0&&(nn=5)}function $g(e,n){do{var a=Oy(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);nn=6,xe=null}function t0(e,n,a,o,u,d,S,A,H){e.cancelPendingCommit=null;do Ql();while(mn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Cu,ii(e,a,d,S,A,H),e===We&&(xe=We=null,be=0),fs=n,Pa=e,ea=a,Bf=d,If=u,kg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Wy(ht,function(){return r0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=Y.p,Y.p=2,S=Ne,Ne|=4;try{Py(e,n,a)}finally{Ne=S,Y.p=u,F.T=o}}mn=1,e0(),n0(),i0()}}function e0(){if(mn===1){mn=0;var e=Pa,n=fs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=Y.p;Y.p=2;var u=Ne;Ne|=4;try{Pg(n,e);var d=td,S=Gp(e.containerInfo),A=d.focusedElem,H=d.selectionRange;if(S!==A&&A&&A.ownerDocument&&Hp(A.ownerDocument.documentElement,A)){if(H!==null&&Eu(A)){var nt=H.start,pt=H.end;if(pt===void 0&&(pt=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(pt,A.value.length);else{var _t=A.ownerDocument||document,st=_t&&_t.defaultView||window;if(st.getSelection){var ft=st.getSelection(),Vt=A.textContent.length,ae=Math.min(H.start,Vt),Ge=H.end===void 0?ae:Math.min(H.end,Vt);!ft.extend&&ae>Ge&&(S=Ge,Ge=ae,ae=S);var K=Ip(A,ae),X=Ip(A,Ge);if(K&&X&&(ft.rangeCount!==1||ft.anchorNode!==K.node||ft.anchorOffset!==K.offset||ft.focusNode!==X.node||ft.focusOffset!==X.offset)){var et=_t.createRange();et.setStart(K.node,K.offset),ft.removeAllRanges(),ae>Ge?(ft.addRange(et),ft.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ft.addRange(et))}}}}for(_t=[],ft=A;ft=ft.parentNode;)ft.nodeType===1&&_t.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var gt=_t[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}cc=!!$f,td=$f=null}finally{Ne=u,Y.p=o,F.T=a}}e.current=n,mn=2}}function n0(){if(mn===2){mn=0;var e=Pa,n=fs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=Y.p;Y.p=2;var u=Ne;Ne|=4;try{Dg(e,n.alternate,n)}finally{Ne=u,Y.p=o,F.T=a}}mn=3}}function i0(){if(mn===4||mn===3){mn=0,P();var e=Pa,n=fs,a=ea,o=kg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,fs=Pa=null,a0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Oa=null),Ir(a),n=n.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=Y.p,Y.p=2,F.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];d(A.value,{componentStack:A.stack})}}finally{F.T=n,Y.p=u}}(ea&3)!==0&&Ql(),Ni(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Hf?Ao++:(Ao=0,Hf=e):Ao=0,Ro(0)}}function a0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,so(n)))}function Ql(){return e0(),n0(),i0(),r0()}function r0(){if(mn!==5)return!1;var e=Pa,n=Bf;Bf=0;var a=Ir(ea),o=F.T,u=Y.p;try{Y.p=32>a?32:a,F.T=null,a=If,If=null;var d=Pa,S=ea;if(mn=0,fs=Pa=null,ea=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,Hg(d.current),Fg(d,d.current,S,a),Ne=A,Ro(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Rt,d)}catch{}return!0}finally{Y.p=u,F.T=o,a0(e,n)}}function s0(e,n,a){n=ri(a,n),n=vf(e.stateNode,n,2),e=wa(e,n,2),e!==null&&(Ln(e,2),Ni(e))}function Fe(e,n,a){if(e.tag===3)s0(e,e,a);else for(;n!==null;){if(n.tag===3){s0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){e=ri(a,e),a=og(2),o=wa(n,a,2),o!==null&&(lg(a,o,n,e),Ln(o,2),Ni(o));break}}n=n.return}}function kf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new By;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Pf=!0,u.add(a),e=ky.bind(null,e,n,a),n.then(e,e))}function ky(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(be&a)===a&&(nn===4||nn===3&&(be&62914560)===be&&300>E()-Xl?(Ne&2)===0&&ds(e,0):zf|=a,us===be&&(us=0)),Ni(e)}function o0(e,n){n===0&&(n=Pe()),e=lr(e,n),e!==null&&(Ln(e,n),Ni(e))}function jy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),o0(e,a)}function Xy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),o0(e,a)}function Wy(e,n){return le(e,n)}var Jl=null,ps=null,jf=!1,$l=!1,Xf=!1,Fa=0;function Ni(e){e!==ps&&e.next===null&&(ps===null?Jl=ps=e:ps=ps.next=e),$l=!0,jf||(jf=!0,Yy())}function Ro(e,n){if(!Xf&&$l){Xf=!0;do for(var a=!1,o=Jl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Bt(42|e)+1)-1,d&=u&~(S&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,f0(o,d))}else d=be,d=vt(o,o===We?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Gt(o,d)||(a=!0,f0(o,d));o=o.next}while(a);Xf=!1}}function qy(){l0()}function l0(){$l=jf=!1;var e=0;Fa!==0&&aS()&&(e=Fa);for(var n=E(),a=null,o=Jl;o!==null;){var u=o.next,d=c0(o,n);d===0?(o.next=null,a===null?Jl=u:a.next=u,u===null&&(ps=a)):(a=o,(e!==0||(d&3)!==0)&&($l=!0)),o=u}mn!==0&&mn!==5||Ro(e),Fa!==0&&(Fa=0)}function c0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Bt(d),A=1<<S,H=u[S];H===-1?((A&a)===0||(A&o)!==0)&&(u[S]=oe(A,n)):H<=n&&(e.expiredLanes|=A),d&=~A}if(n=We,a=be,a=vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&tn(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&tn(o),Ir(a)){case 2:case 8:a=Mt;break;case 32:a=ht;break;case 268435456:a=Ct;break;default:a=ht}return o=u0.bind(null,e),a=le(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&tn(o),e.callbackPriority=2,e.callbackNode=null,2}function u0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ql()&&e.callbackNode!==a)return null;var o=be;return o=vt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Xg(e,o,n),c0(e,E()),e.callbackNode!=null&&e.callbackNode===a?u0.bind(null,e):null)}function f0(e,n){if(Ql())return null;Xg(e,n,!0)}function Yy(){sS(function(){(Ne&6)!==0?le(mt,qy):l0()})}function Wf(){if(Fa===0){var e=$r;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Fa=e}return Fa}function d0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ol(""+e)}function h0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Zy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=d0((u[Mn]||null).action),S=o.submitter;S&&(n=(n=S[Mn]||null)?d0(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var A=new fl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Fa!==0){var H=S?h0(u,S):new FormData(u);df(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(A.preventDefault(),H=S?h0(u,S):new FormData(u),df(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var qf=0;qf<wu.length;qf++){var Yf=wu[qf],Ky=Yf.toLowerCase(),Qy=Yf[0].toUpperCase()+Yf.slice(1);mi(Ky,"on"+Qy)}mi(jp,"onAnimationEnd"),mi(Xp,"onAnimationIteration"),mi(Wp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(hy,"onTransitionRun"),mi(py,"onTransitionStart"),mi(my,"onTransitionCancel"),mi(qp,"onTransitionEnd"),ee("onMouseEnter",["mouseout","mouseover"]),ee("onMouseLeave",["mouseout","mouseover"]),ee("onPointerEnter",["pointerout","pointerover"]),ee("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function p0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],H=A.instance,nt=A.currentTarget;if(A=A.listener,H!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=nt;try{d(u)}catch(pt){pl(pt)}u.currentTarget=null,d=H}else for(S=0;S<o.length;S++){if(A=o[S],H=A.instance,nt=A.currentTarget,A=A.listener,H!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=nt;try{d(u)}catch(pt){pl(pt)}u.currentTarget=null,d=H}}}}function ye(e,n){var a=n[Ys];a===void 0&&(a=n[Ys]=new Set);var o=e+"__bubble";a.has(o)||(m0(n,e,2,!1),a.add(o))}function Zf(e,n,a){var o=0;n&&(o|=4),m0(a,e,o,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Kf(e){if(!e[tc]){e[tc]=!0,Pt.forEach(function(a){a!=="selectionchange"&&(Jy.has(a)||Zf(a,!1,e),Zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[tc]||(n[tc]=!0,Zf("selectionchange",!1,n))}}function m0(e,n,a,o){switch(j0(n)){case 2:var u=AS;break;case 8:u=RS;break;default:u=fd}a=u.bind(null,n,a,e),u=void 0,!mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Qf(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Z(A),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=d=S;continue t}A=A.parentNode}}o=o.return}yp(function(){var nt=d,pt=hu(a),_t=[];t:{var st=Yp.get(e);if(st!==void 0){var ft=fl,Vt=e;switch(e){case"keypress":if(cl(a)===0)break t;case"keydown":case"keyup":ft=Xx;break;case"focusin":Vt="focus",ft=xu;break;case"focusout":Vt="blur",ft=xu;break;case"beforeblur":case"afterblur":ft=xu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Yx;break;case jp:case Xp:case Wp:ft=zx;break;case qp:ft=Kx;break;case"scroll":case"scrollend":ft=Nx;break;case"wheel":ft=Jx;break;case"copy":case"cut":case"paste":ft=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Tp;break;case"toggle":case"beforetoggle":ft=ty}var ae=(n&4)!==0,Ge=!ae&&(e==="scroll"||e==="scrollend"),K=ae?st!==null?st+"Capture":null:st;ae=[];for(var X=nt,et;X!==null;){var gt=X;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||K===null||(gt=Zs(X,K),gt!=null&&ae.push(Co(X,gt,et))),Ge)break;X=X.return}0<ae.length&&(st=new ft(st,Vt,null,a,pt),_t.push({event:st,listeners:ae}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",st&&a!==du&&(Vt=a.relatedTarget||a.fromElement)&&(Z(Vt)||Vt[ya]))break t;if((ft||st)&&(st=pt.window===pt?pt:(st=pt.ownerDocument)?st.defaultView||st.parentWindow:window,ft?(Vt=a.relatedTarget||a.toElement,ft=nt,Vt=Vt?Z(Vt):null,Vt!==null&&(Ge=c(Vt),ae=Vt.tag,Vt!==Ge||ae!==5&&ae!==27&&ae!==6)&&(Vt=null)):(ft=null,Vt=nt),ft!==Vt)){if(ae=bp,gt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Tp,gt="onPointerLeave",K="onPointerEnter",X="pointer"),Ge=ft==null?st:ct(ft),et=Vt==null?st:ct(Vt),st=new ae(gt,X+"leave",ft,a,pt),st.target=Ge,st.relatedTarget=et,gt=null,Z(pt)===nt&&(ae=new ae(K,X+"enter",Vt,a,pt),ae.target=et,ae.relatedTarget=Ge,gt=ae),Ge=gt,ft&&Vt)e:{for(ae=$y,K=ft,X=Vt,et=0,gt=K;gt;gt=ae(gt))et++;gt=0;for(var ie=X;ie;ie=ae(ie))gt++;for(;0<et-gt;)K=ae(K),et--;for(;0<gt-et;)X=ae(X),gt--;for(;et--;){if(K===X||X!==null&&K===X.alternate){ae=K;break e}K=ae(K),X=ae(X)}ae=null}else ae=null;ft!==null&&g0(_t,st,ft,ae,!1),Vt!==null&&Ge!==null&&g0(_t,Ge,Vt,ae,!0)}}t:{if(st=nt?ct(nt):window,ft=st.nodeName&&st.nodeName.toLowerCase(),ft==="select"||ft==="input"&&st.type==="file")var we=Lp;else if(Np(st))if(Op)we=uy;else{we=ly;var Zt=oy}else ft=st.nodeName,!ft||ft.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&fu(nt.elementType)&&(we=Lp):we=cy;if(we&&(we=we(e,nt))){Up(_t,we,a,pt);break t}Zt&&Zt(e,st,nt),e==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&pn(st,"number",st.value)}switch(Zt=nt?ct(nt):window,e){case"focusin":(Np(Zt)||Zt.contentEditable==="true")&&(Xr=Zt,Tu=nt,io=null);break;case"focusout":io=Tu=Xr=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Vp(_t,a,pt);break;case"selectionchange":if(dy)break;case"keydown":case"keyup":Vp(_t,a,pt)}var he;if(Su)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else jr?Cp(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Ap&&a.locale!=="ko"&&(jr||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&jr&&(he=Sp()):(Sa=pt,gu="value"in Sa?Sa.value:Sa.textContent,jr=!0)),Zt=ec(nt,Ee),0<Zt.length&&(Ee=new Ep(Ee,e,null,a,pt),_t.push({event:Ee,listeners:Zt}),he?Ee.data=he:(he=Dp(a),he!==null&&(Ee.data=he)))),(he=ny?iy(e,a):ay(e,a))&&(Ee=ec(nt,"onBeforeInput"),0<Ee.length&&(Zt=new Ep("onBeforeInput","beforeinput",null,a,pt),_t.push({event:Zt,listeners:Ee}),Zt.data=he)),Zy(_t,e,nt,a,pt)}p0(_t,n)})}function Co(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ec(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Zs(e,a),u!=null&&o.unshift(Co(e,u,d)),u=Zs(e,n),u!=null&&o.push(Co(e,u,d))),e.tag===3)return o;e=e.return}return[]}function $y(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function g0(e,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var A=a,H=A.alternate,nt=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||nt===null||(H=nt,u?(nt=Zs(a,d),nt!=null&&S.unshift(Co(a,nt,H))):u||(nt=Zs(a,d),nt!=null&&S.push(Co(a,nt,H)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var tS=/\r\n?/g,eS=/\u0000|\uFFFD/g;function _0(e){return(typeof e=="string"?e:""+e).replace(tS,`
`).replace(eS,"")}function v0(e,n){return n=_0(n),_0(e)===n}function He(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Gr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Gr(e,""+o);break;case"className":Oe(e,"class",o);break;case"tabIndex":Oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(e,a,o);break;case"style":vp(e,o,d);break;case"data":if(n!=="object"){Oe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&He(e,n,"name",u.name,u,null),He(e,n,"formEncType",u.formEncType,u,null),He(e,n,"formMethod",u.formMethod,u,null),He(e,n,"formTarget",u.formTarget,u,null)):(He(e,n,"encType",u.encType,u,null),He(e,n,"method",u.method,u,null),He(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Hi);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ol(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Xe(e,"popover",o);break;case"xlinkActuate":ve(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ve(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ve(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ve(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ve(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ve(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ve(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ve(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ve(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Cx.get(a)||a,Xe(e,a,o))}}function Jf(e,n,a,o,u,d){switch(a){case"style":vp(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Gr(e,o):(typeof o=="number"||typeof o=="bigint")&&Gr(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[Mn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Xe(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,d,S,a,null)}}u&&He(e,n,"srcSet",a.srcSet,a,null),o&&He(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var A=d=S=u=null,H=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":S=pt;break;case"checked":H=pt;break;case"defaultChecked":nt=pt;break;case"value":d=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:He(e,n,o,pt,a,null)}}On(e,d,A,H,nt,S,u,!1);return;case"select":ye("invalid",e),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:He(e,n,u,A,a,null)}n=d,a=S,e.multiple=!!o,n!=null?rn(e,!!o,n,!1):a!=null&&rn(e,!!o,a,!0);return;case"textarea":ye("invalid",e),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:He(e,n,S,A,a,null)}Ri(e,o,u,d);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:He(e,n,H,o,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<wo.length;o++)ye(wo[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,nt,o,a,null)}return;default:if(fu(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&Jf(e,n,pt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&He(e,n,A,o,a,null))}function nS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,A=null,H=null,nt=null,pt=null;for(ft in a){var _t=a[ft];if(a.hasOwnProperty(ft)&&_t!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":H=_t;default:o.hasOwnProperty(ft)||He(e,n,ft,null,o,_t)}}for(var st in o){var ft=o[st];if(_t=a[st],o.hasOwnProperty(st)&&(ft!=null||_t!=null))switch(st){case"type":d=ft;break;case"name":u=ft;break;case"checked":nt=ft;break;case"defaultChecked":pt=ft;break;case"value":S=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==_t&&He(e,n,st,ft,o,_t)}}Cn(e,S,A,H,nt,pt,d,u);return;case"select":ft=S=A=st=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":ft=H;default:o.hasOwnProperty(d)||He(e,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":st=d;break;case"defaultValue":A=d;break;case"multiple":S=d;default:d!==H&&He(e,n,u,d,o,H)}n=A,a=S,o=ft,st!=null?rn(e,!!a,st,!1):!!o!=!!a&&(n!=null?rn(e,!!a,n,!0):rn(e,!!a,a?[]:"",!1));return;case"textarea":ft=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(e,n,A,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":st=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&He(e,n,S,u,o,d)}Hr(e,st,ft);return;case"option":for(var Vt in a)if(st=a[Vt],a.hasOwnProperty(Vt)&&st!=null&&!o.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:He(e,n,Vt,null,o,st)}for(H in o)if(st=o[H],ft=a[H],o.hasOwnProperty(H)&&st!==ft&&(st!=null||ft!=null))switch(H){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:He(e,n,H,st,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)st=a[ae],a.hasOwnProperty(ae)&&st!=null&&!o.hasOwnProperty(ae)&&He(e,n,ae,null,o,st);for(nt in o)if(st=o[nt],ft=a[nt],o.hasOwnProperty(nt)&&st!==ft&&(st!=null||ft!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:He(e,n,nt,st,o,ft)}return;default:if(fu(n)){for(var Ge in a)st=a[Ge],a.hasOwnProperty(Ge)&&st!==void 0&&!o.hasOwnProperty(Ge)&&Jf(e,n,Ge,void 0,o,st);for(pt in o)st=o[pt],ft=a[pt],!o.hasOwnProperty(pt)||st===ft||st===void 0&&ft===void 0||Jf(e,n,pt,st,o,ft);return}}for(var K in a)st=a[K],a.hasOwnProperty(K)&&st!=null&&!o.hasOwnProperty(K)&&He(e,n,K,null,o,st);for(_t in o)st=o[_t],ft=a[_t],!o.hasOwnProperty(_t)||st===ft||st==null&&ft==null||He(e,n,_t,st,o,ft)}function x0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,A=u.duration;if(d&&A&&x0(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],nt=H.startTime;if(nt>A)break;var pt=H.transferSize,_t=H.initiatorType;pt&&x0(_t)&&(H=H.responseEnd,S+=pt*(H<A?1:(A-nt)/(H-nt)))}if(--o,n+=8*(d+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $f=null,td=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function y0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ed(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nd=null;function aS(){var e=window.event;return e&&e.type==="popstate"?e===nd?!1:(nd=e,!0):(nd=null,!1)}var M0=typeof setTimeout=="function"?setTimeout:void 0,rS=typeof clearTimeout=="function"?clearTimeout:void 0,b0=typeof Promise=="function"?Promise:void 0,sS=typeof queueMicrotask=="function"?queueMicrotask:typeof b0<"u"?function(e){return b0.resolve(null).then(e).catch(oS)}:M0;function oS(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function E0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),vs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Do(a);for(var d=a.firstChild;d;){var S=d.nextSibling,A=d.nodeName;d[ir]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Do(e.ownerDocument.body);a=u}while(a);vs(n)}function T0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function id(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":id(a),w(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function lS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ir])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function cS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function A0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function ad(e){return e.data==="$?"||e.data==="$~"}function rd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var sd=null;function R0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function w0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function C0(e,n,a){switch(n=nc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Do(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);w(e)}var fi=new Map,D0=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=Y.d;Y.d={f:fS,r:dS,D:hS,C:pS,L:mS,m:gS,X:vS,S:_S,M:xS};function fS(){var e=na.f(),n=Yl();return e||n}function dS(e){var n=ot(e);n!==null&&n.tag===5&&n.type==="form"?qm(n):na.r(e)}var ms=typeof document>"u"?null:document;function N0(e,n,a){var o=ms;if(o&&typeof n=="string"&&n){var u=Me(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),D0.has(u)||(D0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",e),St(n),o.head.appendChild(n)))}}function hS(e){na.D(e),N0("dns-prefetch",e,null)}function pS(e,n){na.C(e,n),N0("preconnect",e,n)}function mS(e,n,a){na.L(e,n,a);var o=ms;if(o&&e&&n){var u='link[rel="preload"][as="'+Me(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Me(a.imageSizes)+'"]')):u+='[href="'+Me(e)+'"]';var d=u;switch(n){case"style":d=gs(e);break;case"script":d=_s(e)}fi.has(d)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(d))||n==="script"&&o.querySelector(Uo(d))||(n=o.createElement("link"),Rn(n,"link",e),St(n),o.head.appendChild(n)))}}function gS(e,n){na.m(e,n);var a=ms;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Me(o)+'"][href="'+Me(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=_s(e)}if(!fi.has(d)&&(e=g({rel:"modulepreload",href:e},n),fi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(d)))return}o=a.createElement("link"),Rn(o,"link",e),St(o),a.head.appendChild(o)}}}function _S(e,n,a){na.S(e,n,a);var o=ms;if(o&&e){var u=Q(o).hoistableStyles,d=gs(e);n=n||"default";var S=u.get(d);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(No(d)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(d))&&od(e,a);var H=S=o.createElement("link");St(H),Rn(H,"link",e),H._p=new Promise(function(nt,pt){H.onload=nt,H.onerror=pt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ac(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(d,S)}}}function vS(e,n){na.X(e,n);var a=ms;if(a&&e){var o=Q(a).hoistableScripts,u=_s(e),d=o.get(u);d||(d=a.querySelector(Uo(u)),d||(e=g({src:e,async:!0},n),(n=fi.get(u))&&ld(e,n),d=a.createElement("script"),St(d),Rn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function xS(e,n){na.M(e,n);var a=ms;if(a&&e){var o=Q(a).hoistableScripts,u=_s(e),d=o.get(u);d||(d=a.querySelector(Uo(u)),d||(e=g({src:e,async:!0,type:"module"},n),(n=fi.get(u))&&ld(e,n),d=a.createElement("script"),St(d),Rn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function U0(e,n,a,o){var u=(u=tt.current)?ic(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=gs(a.href),a=Q(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=gs(a.href);var d=Q(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(No(e)))&&!d._p&&(S.instance=d,S.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),d||yS(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_s(a),a=Q(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function gs(e){return'href="'+Me(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function L0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function yS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),St(n),e.head.appendChild(n))}function _s(e){return'[src="'+Me(e)+'"]'}function Uo(e){return"script[async]"+e}function O0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Me(a.href)+'"]');if(o)return n.instance=o,St(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),St(o),Rn(o,"style",u),ac(o,a.precedence,e),n.instance=o;case"stylesheet":u=gs(a.href);var d=e.querySelector(No(u));if(d)return n.state.loading|=4,n.instance=d,St(d),d;o=L0(a),(u=fi.get(u))&&od(o,u),d=(e.ownerDocument||e).createElement("link"),St(d);var S=d;return S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Rn(d,"link",o),n.state.loading|=4,ac(d,a.precedence,e),n.instance=d;case"script":return d=_s(a.src),(u=e.querySelector(Uo(d)))?(n.instance=u,St(u),u):(o=a,(u=fi.get(d))&&(o=g({},a),ld(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),St(u),Rn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ac(o,a.precedence,e));return n.instance}function ac(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function od(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ld(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function P0(e,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[ir]||d[ln]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(d):o.set(S,[d])}}return o}function z0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function SS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function F0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function MS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=gs(o.href),d=n.querySelector(No(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=sc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,St(d);return}d=n.ownerDocument||n,o=L0(o),(u=fi.get(u))&&od(o,u),d=d.createElement("link"),St(d);var S=d;S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Rn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=sc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var cd=0;function bS(e,n){return e.stylesheets&&e.count===0&&lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&cd===0&&(cd=62500*iS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>cd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function lc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,n.forEach(ES,e),oc=null,sc.call(e))}function ES(e,n){if(!(n.state.loading&4)){var a=oc.get(e);if(a)var o=a.get(null);else{a=new Map,oc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function TS(e,n,a,o,u,d,S,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function B0(e,n,a,o,u,d,S,A,H,nt,pt,_t){return e=new TS(e,n,a,S,H,nt,pt,_t,A),n=1,d===!0&&(n|=24),d=Zn(3,null,null,n),e.current=d,d.stateNode=e,n=Gu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Xu(d),e}function I0(e){return e?(e=Yr,e):Yr}function H0(e,n,a,o,u,d){u=I0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ra(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=wa(e,o,n),a!==null&&(kn(a,e,n),uo(a,e,n))}function G0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ud(e,n){G0(e,n),(e=e.alternate)&&G0(e,n)}function V0(e){if(e.tag===13||e.tag===31){var n=lr(e,67108864);n!==null&&kn(n,e,67108864),ud(e,67108864)}}function k0(e){if(e.tag===13||e.tag===31){var n=ti();n=Br(n);var a=lr(e,n);a!==null&&kn(a,e,n),ud(e,n)}}var cc=!0;function AS(e,n,a,o){var u=F.T;F.T=null;var d=Y.p;try{Y.p=2,fd(e,n,a,o)}finally{Y.p=d,F.T=u}}function RS(e,n,a,o){var u=F.T;F.T=null;var d=Y.p;try{Y.p=8,fd(e,n,a,o)}finally{Y.p=d,F.T=u}}function fd(e,n,a,o){if(cc){var u=dd(o);if(u===null)Qf(e,n,o,uc,a),X0(e,o);else if(CS(u,e,n,a,o))o.stopPropagation();else if(X0(e,o),n&4&&-1<wS.indexOf(e)){for(;u!==null;){var d=ot(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Tt(d.pendingLanes);if(S!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var H=1<<31-Bt(S);A.entanglements[1]|=H,S&=~H}Ni(d),(Ne&6)===0&&(Wl=E()+500,Ro(0))}}break;case 31:case 13:A=lr(d,2),A!==null&&kn(A,d,2),Yl(),ud(d,2)}if(d=dd(o),d===null&&Qf(e,n,o,uc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Qf(e,n,o,null,a)}}function dd(e){return e=hu(e),hd(e)}var uc=null;function hd(e){if(uc=null,e=Z(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return uc=e,null}function j0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(it()){case mt:return 2;case Mt:return 8;case ht:case $t:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var pd=!1,Ia=null,Ha=null,Ga=null,Oo=new Map,Po=new Map,Va=[],wS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X0(e,n){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function zo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=ot(n),n!==null&&V0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function CS(e,n,a,o,u){switch(n){case"focusin":return Ia=zo(Ia,e,n,a,o,u),!0;case"dragenter":return Ha=zo(Ha,e,n,a,o,u),!0;case"mouseover":return Ga=zo(Ga,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Oo.set(d,zo(Oo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Po.set(d,zo(Po.get(d)||null,e,n,a,o,u)),!0}return!1}function W0(e){var n=Z(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,qs(e.priority,function(){k0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,qs(e.priority,function(){k0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=dd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);du=o,a.target.dispatchEvent(o),du=null}else return n=ot(a),n!==null&&V0(n),e.blockedOn=a,!1;n.shift()}return!0}function q0(e,n,a){fc(e)&&a.delete(n)}function DS(){pd=!1,Ia!==null&&fc(Ia)&&(Ia=null),Ha!==null&&fc(Ha)&&(Ha=null),Ga!==null&&fc(Ga)&&(Ga=null),Oo.forEach(q0),Po.forEach(q0)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,pd||(pd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,DS)))}var hc=null;function Y0(e){hc!==e&&(hc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){hc===e&&(hc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(hd(o||a)===null)continue;break}var d=ot(a);d!==null&&(e.splice(n,3),n-=3,df(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function vs(e){function n(H){return dc(H,e)}Ia!==null&&dc(Ia,e),Ha!==null&&dc(Ha,e),Ga!==null&&dc(Ga,e),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Va.length;a++){var o=Va[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)W0(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[Mn]||null;if(typeof d=="function")S||Y0(a);else if(S){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[Mn]||null)A=S.formAction;else if(hd(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Y0(a)}}}function Z0(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function md(e){this._internalRoot=e}pc.prototype.render=md.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ti();H0(a,o,e,n,null,null)},pc.prototype.unmount=md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;H0(e.current,2,null,e,null,null),Yl(),n[ya]=null}};function pc(e){this._internalRoot=e}pc.prototype.unstable_scheduleHydration=function(e){if(e){var n=nr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Va.length&&n!==0&&n<Va[a].priority;a++);Va.splice(a,0,e),a===0&&W0(e)}};var K0=t.version;if(K0!=="19.2.0")throw Error(s(527,K0,"19.2.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var NS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{Rt=mc.inject(NS),Dt=mc}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=ig,d=ag,S=rg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=B0(e,1,!1,null,null,a,o,null,u,d,S,Z0),e[ya]=n.current,Kf(e),new md(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=ig,S=ag,A=rg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=B0(e,1,!0,n,a??null,o,u,H,d,S,A,Z0),n.context=I0(null),a=n.current,o=ti(),o=Br(o),u=Ra(o),u.callback=null,wa(a,u,o),a=o,n.current.lanes=a,Ln(n,a),Ni(n),e[ya]=n.current,Kf(e),new pc(n)},Bo.version="19.2.0",Bo}var s_;function GS(){if(s_)return vd.exports;s_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),vd.exports=HS(),vd.exports}var VS=GS();/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var o_="popstate";function kS(r={}){function t(s,l){let{pathname:c,search:f,hash:h}=s.location;return nh("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:Wo(l)}return XS(t,i,null,r)}function Je(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function zi(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jS(){return Math.random().toString(36).substring(2,10)}function l_(r,t){return{usr:r.state,key:r.key,idx:t}}function nh(r,t,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?ks(t):t,state:i,key:t&&t.key||s||jS()}}function Wo({pathname:r="/",search:t="",hash:i=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function ks(r){let t={};if(r){let i=r.indexOf("#");i>=0&&(t.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(t.search=r.substring(s),r=r.substring(0,s)),r&&(t.pathname=r)}return t}function XS(r,t,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,h="POP",m=null,p=_();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function _(){return(f.state||{idx:null}).idx}function g(){h="POP";let M=_(),x=M==null?null:M-p;p=M,m&&m({action:h,location:T.location,delta:x})}function v(M,x){h="PUSH";let U=nh(T.location,M,x);p=_()+1;let L=l_(U,p),N=T.createHref(U);try{f.pushState(L,"",N)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(N)}c&&m&&m({action:h,location:T.location,delta:1})}function y(M,x){h="REPLACE";let U=nh(T.location,M,x);p=_();let L=l_(U,p),N=T.createHref(U);f.replaceState(L,"",N),c&&m&&m({action:h,location:T.location,delta:0})}function b(M){return WS(M)}let T={get action(){return h},get location(){return r(l,f)},listen(M){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(o_,g),m=M,()=>{l.removeEventListener(o_,g),m=null}},createHref(M){return t(l,M)},createURL:b,encodeLocation(M){let x=b(M);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:y,go(M){return f.go(M)}};return T}function WS(r,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Je(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Wo(r);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function Cv(r,t,i="/"){return qS(r,t,i,!1)}function qS(r,t,i,s){let l=typeof t=="string"?ks(t):t,c=pa(l.pathname||"/",i);if(c==null)return null;let f=Dv(r);YS(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=rM(c);h=iM(f[m],p,s)}return h}function Dv(r,t=[],i=[],s="",l=!1){let c=(f,h,m=l,p)=>{let _={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(s)&&m)return;Je(_.relativePath.startsWith(s),`Absolute route path "${_.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(s.length)}let g=da([s,_.relativePath]),v=i.concat(_);f.children&&f.children.length>0&&(Je(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Dv(f.children,t,v,g,m)),!(f.path==null&&!f.index)&&t.push({path:g,score:eM(g,f.index),routesMeta:v})};return r.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Nv(f.path))c(f,h,!0,m)}),t}function Nv(r){let t=r.split("/");if(t.length===0)return[];let[i,...s]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=Nv(s.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>r.startsWith("/")&&m===""?"/":m)}function YS(r){r.sort((t,i)=>t.score!==i.score?i.score-t.score:nM(t.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var ZS=/^:[\w-]+$/,KS=3,QS=2,JS=1,$S=10,tM=-2,c_=r=>r==="*";function eM(r,t){let i=r.split("/"),s=i.length;return i.some(c_)&&(s+=tM),t&&(s+=QS),i.filter(l=>!c_(l)).reduce((l,c)=>l+(ZS.test(c)?KS:c===""?JS:$S),s)}function nM(r,t){return r.length===t.length&&r.slice(0,-1).every((s,l)=>s===t[l])?r[r.length-1]-t[t.length-1]:0}function iM(r,t,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let h=0;h<s.length;++h){let m=s[h],p=h===s.length-1,_=c==="/"?t:t.slice(c.length)||"/",g=Jc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_),v=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=Jc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:da([c,g.pathname]),pathnameBase:cM(da([c,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(c=da([c,g.pathnameBase]))}return f}function Jc(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=aM(r.path,r.caseSensitive,r.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((p,{paramName:_,isOptional:g},v)=>{if(_==="*"){let b=h[v]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const y=h[v];return g&&!y?p[_]=void 0:p[_]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:r}}function aM(r,t=!1,i=!0){zi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(s.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function rM(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return zi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function pa(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function sM(r,t="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?ks(r):r;return{pathname:i?i.startsWith("/")?i:oM(i,t):t,search:uM(s),hash:fM(l)}}function oM(r,t){let i=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Md(r,t,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lM(r){return r.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Uv(r){let t=lM(r);return t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase)}function Lv(r,t,i,s=!1){let l;typeof r=="string"?l=ks(r):(l={...r},Je(!l.pathname||!l.pathname.includes("?"),Md("?","pathname","search",l)),Je(!l.pathname||!l.pathname.includes("#"),Md("#","pathname","hash",l)),Je(!l.search||!l.search.includes("#"),Md("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=t.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),g-=1;l.pathname=v.join("/")}h=g>=0?t[g]:"/"}let m=sM(l,h),p=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var da=r=>r.join("/").replace(/\/\/+/g,"/"),cM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),uM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,fM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function dM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Ov=["POST","PUT","PATCH","DELETE"];new Set(Ov);var hM=["GET",...Ov];new Set(hM);var js=dt.createContext(null);js.displayName="DataRouter";var nu=dt.createContext(null);nu.displayName="DataRouterState";dt.createContext(!1);var Pv=dt.createContext({isTransitioning:!1});Pv.displayName="ViewTransition";var pM=dt.createContext(new Map);pM.displayName="Fetchers";var mM=dt.createContext(null);mM.displayName="Await";var Bi=dt.createContext(null);Bi.displayName="Navigation";var Jo=dt.createContext(null);Jo.displayName="Location";var _a=dt.createContext({outlet:null,matches:[],isDataRoute:!1});_a.displayName="Route";var Jh=dt.createContext(null);Jh.displayName="RouteError";function gM(r,{relative:t}={}){Je($o(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=dt.useContext(Bi),{hash:l,pathname:c,search:f}=tl(r,{relative:t}),h=c;return i!=="/"&&(h=c==="/"?i:da([i,c])),s.createHref({pathname:h,search:f,hash:l})}function $o(){return dt.useContext(Jo)!=null}function Pr(){return Je($o(),"useLocation() may be used only in the context of a <Router> component."),dt.useContext(Jo).location}var zv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fv(r){dt.useContext(Bi).static||dt.useLayoutEffect(r)}function $h(){let{isDataRoute:r}=dt.useContext(_a);return r?CM():_M()}function _M(){Je($o(),"useNavigate() may be used only in the context of a <Router> component.");let r=dt.useContext(js),{basename:t,navigator:i}=dt.useContext(Bi),{matches:s}=dt.useContext(_a),{pathname:l}=Pr(),c=JSON.stringify(Uv(s)),f=dt.useRef(!1);return Fv(()=>{f.current=!0}),dt.useCallback((m,p={})=>{if(zi(f.current,zv),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=Lv(m,JSON.parse(c),l,p.relative==="path");r==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:da([t,_.pathname])),(p.replace?i.replace:i.push)(_,p.state,p)},[t,i,c,l,r])}dt.createContext(null);function tl(r,{relative:t}={}){let{matches:i}=dt.useContext(_a),{pathname:s}=Pr(),l=JSON.stringify(Uv(i));return dt.useMemo(()=>Lv(r,JSON.parse(l),s,t==="path"),[r,l,s,t])}function vM(r,t){return Bv(r,t)}function Bv(r,t,i,s,l){Je($o(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=dt.useContext(Bi),{matches:f}=dt.useContext(_a),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",_=h?h.pathnameBase:"/",g=h&&h.route;{let U=g&&g.path||"";Iv(p,!g||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let v=Pr(),y;if(t){let U=typeof t=="string"?ks(t):t;Je(_==="/"||U.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${U.pathname}" was given in the \`location\` prop.`),y=U}else y=v;let b=y.pathname||"/",T=b;if(_!=="/"){let U=_.replace(/^\//,"").split("/");T="/"+b.replace(/^\//,"").split("/").slice(U.length).join("/")}let M=Cv(r,{pathname:T});zi(g||M!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),zi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=bM(M&&M.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:da([_,c.encodeLocation?c.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?_:da([_,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),f,i,s,l);return t&&x?dt.createElement(Jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},x):x}function xM(){let r=wM(),t=dM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=dt.createElement(dt.Fragment,null,dt.createElement("p",null,"💿 Hey developer 👋"),dt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",dt.createElement("code",{style:c},"ErrorBoundary")," or"," ",dt.createElement("code",{style:c},"errorElement")," prop on your route.")),dt.createElement(dt.Fragment,null,dt.createElement("h2",null,"Unexpected Application Error!"),dt.createElement("h3",{style:{fontStyle:"italic"}},t),i?dt.createElement("pre",{style:l},i):null,f)}var yM=dt.createElement(xM,null),SM=class extends dt.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){this.props.unstable_onError?this.props.unstable_onError(r,t):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?dt.createElement(_a.Provider,{value:this.props.routeContext},dt.createElement(Jh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function MM({routeContext:r,match:t,children:i}){let s=dt.useContext(js);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),dt.createElement(_a.Provider,{value:r},i)}function bM(r,t=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i?.errors;if(f!=null){let p=c.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);Je(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let h=!1,m=-1;if(i)for(let p=0;p<c.length;p++){let _=c[p];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=p),_.route.id){let{loaderData:g,errors:v}=i,y=_.route.loader&&!g.hasOwnProperty(_.route.id)&&(!v||v[_.route.id]===void 0);if(_.route.lazy||y){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((p,_,g)=>{let v,y=!1,b=null,T=null;i&&(v=f&&_.route.id?f[_.route.id]:void 0,b=_.route.errorElement||yM,h&&(m<0&&g===0?(Iv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,T=null):m===g&&(y=!0,T=_.route.hydrateFallbackElement||null)));let M=t.concat(c.slice(0,g+1)),x=()=>{let U;return v?U=b:y?U=T:_.route.Component?U=dt.createElement(_.route.Component,null):_.route.element?U=_.route.element:U=p,dt.createElement(MM,{match:_,routeContext:{outlet:p,matches:M,isDataRoute:i!=null},children:U})};return i&&(_.route.ErrorBoundary||_.route.errorElement||g===0)?dt.createElement(SM,{location:i.location,revalidation:i.revalidation,component:b,error:v,children:x(),routeContext:{outlet:null,matches:M,isDataRoute:!0},unstable_onError:s}):x()},null)}function tp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function EM(r){let t=dt.useContext(js);return Je(t,tp(r)),t}function TM(r){let t=dt.useContext(nu);return Je(t,tp(r)),t}function AM(r){let t=dt.useContext(_a);return Je(t,tp(r)),t}function ep(r){let t=AM(r),i=t.matches[t.matches.length-1];return Je(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function RM(){return ep("useRouteId")}function wM(){let r=dt.useContext(Jh),t=TM("useRouteError"),i=ep("useRouteError");return r!==void 0?r:t.errors?.[i]}function CM(){let{router:r}=EM("useNavigate"),t=ep("useNavigate"),i=dt.useRef(!1);return Fv(()=>{i.current=!0}),dt.useCallback(async(l,c={})=>{zi(i.current,zv),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:t,...c}))},[r,t])}var u_={};function Iv(r,t,i){!t&&!u_[r]&&(u_[r]=!0,zi(!1,i))}dt.memo(DM);function DM({routes:r,future:t,state:i,unstable_onError:s}){return Bv(r,void 0,i,s,t)}function Vc(r){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function NM({basename:r="/",children:t=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){Je(!$o(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),h=dt.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=ks(i));let{pathname:m="/",search:p="",hash:_="",state:g=null,key:v="default"}=i,y=dt.useMemo(()=>{let b=pa(m,f);return b==null?null:{location:{pathname:b,search:p,hash:_,state:g,key:v},navigationType:s}},[f,m,p,_,g,v,s]);return zi(y!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${_}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:dt.createElement(Bi.Provider,{value:h},dt.createElement(Jo.Provider,{children:t,value:y}))}function UM({children:r,location:t}){return vM(ih(r),t)}function ih(r,t=[]){let i=[];return dt.Children.forEach(r,(s,l)=>{if(!dt.isValidElement(s))return;let c=[...t,l];if(s.type===dt.Fragment){i.push.apply(i,ih(s.props.children,c));return}Je(s.type===Vc,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=ih(s.props.children,c)),i.push(f)}),i}var kc="get",jc="application/x-www-form-urlencoded";function iu(r){return r!=null&&typeof r.tagName=="string"}function LM(r){return iu(r)&&r.tagName.toLowerCase()==="button"}function OM(r){return iu(r)&&r.tagName.toLowerCase()==="form"}function PM(r){return iu(r)&&r.tagName.toLowerCase()==="input"}function zM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function FM(r,t){return r.button===0&&(!t||t==="_self")&&!zM(r)}var gc=null;function BM(){if(gc===null)try{new FormData(document.createElement("form"),0),gc=!1}catch{gc=!0}return gc}var IM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bd(r){return r!=null&&!IM.has(r)?(zi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${jc}"`),null):r}function HM(r,t){let i,s,l,c,f;if(OM(r)){let h=r.getAttribute("action");s=h?pa(h,t):null,i=r.getAttribute("method")||kc,l=bd(r.getAttribute("enctype"))||jc,c=new FormData(r)}else if(LM(r)||PM(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||h.getAttribute("action");if(s=m?pa(m,t):null,i=r.getAttribute("formmethod")||h.getAttribute("method")||kc,l=bd(r.getAttribute("formenctype"))||bd(h.getAttribute("enctype"))||jc,c=new FormData(h,r),!BM()){let{name:p,type:_,value:g}=r;if(_==="image"){let v=p?`${p}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else p&&c.append(p,g)}}else{if(iu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=kc,s=null,l=jc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function np(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function GM(r,t,i){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${i}`:t&&pa(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${i}`,s}async function VM(r,t){if(r.id in t)return t[r.id];try{let i=await import(r.module);return t[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function jM(r,t,i){let s=await Promise.all(r.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await VM(c,i);return f.links?f.links():[]}return[]}));return YM(s.flat(1).filter(kM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function f_(r,t,i,s,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?t.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?t.filter((m,p)=>{let _=s.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function XM(r,t,{includeHydrateFallback:i}={}){return WM(r.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function WM(r){return[...new Set(r)]}function qM(r){let t={},i=Object.keys(r).sort();for(let s of i)t[s]=r[s];return t}function YM(r,t){let i=new Set;return new Set(t),r.reduce((s,l)=>{let c=JSON.stringify(qM(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function Hv(){let r=dt.useContext(js);return np(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function ZM(){let r=dt.useContext(nu);return np(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var ip=dt.createContext(void 0);ip.displayName="FrameworkContext";function Gv(){let r=dt.useContext(ip);return np(r,"You must render this element inside a <HydratedRouter> element"),r}function KM(r,t){let i=dt.useContext(ip),[s,l]=dt.useState(!1),[c,f]=dt.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:g}=t,v=dt.useRef(null);dt.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let T=x=>{x.forEach(U=>{f(U.isIntersecting)})},M=new IntersectionObserver(T,{threshold:.5});return v.current&&M.observe(v.current),()=>{M.disconnect()}}},[r]),dt.useEffect(()=>{if(s){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[s]);let y=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,v,{}]:[c,v,{onFocus:Io(h,y),onBlur:Io(m,b),onMouseEnter:Io(p,y),onMouseLeave:Io(_,b),onTouchStart:Io(g,y)}]:[!1,v,{}]}function Io(r,t){return i=>{r&&r(i),i.defaultPrevented||t(i)}}function QM({page:r,...t}){let{router:i}=Hv(),s=dt.useMemo(()=>Cv(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?dt.createElement($M,{page:r,matches:s,...t}):null}function JM(r){let{manifest:t,routeModules:i}=Gv(),[s,l]=dt.useState([]);return dt.useEffect(()=>{let c=!1;return jM(r,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,t,i]),s}function $M({page:r,matches:t,...i}){let s=Pr(),{manifest:l,routeModules:c}=Gv(),{basename:f}=Hv(),{loaderData:h,matches:m}=ZM(),p=dt.useMemo(()=>f_(r,t,m,l,s,"data"),[r,t,m,l,s]),_=dt.useMemo(()=>f_(r,t,m,l,s,"assets"),[r,t,m,l,s]),g=dt.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let b=new Set,T=!1;if(t.forEach(x=>{let U=l.routes[x.route.id];!U||!U.hasLoader||(!p.some(L=>L.route.id===x.route.id)&&x.route.id in h&&c[x.route.id]?.shouldRevalidate||U.hasClientLoader?T=!0:b.add(x.route.id))}),b.size===0)return[];let M=GM(r,f,"data");return T&&b.size>0&&M.searchParams.set("_routes",t.filter(x=>b.has(x.route.id)).map(x=>x.route.id).join(",")),[M.pathname+M.search]},[f,h,s,l,p,t,r,c]),v=dt.useMemo(()=>XM(_,l),[_,l]),y=JM(_);return dt.createElement(dt.Fragment,null,g.map(b=>dt.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),v.map(b=>dt.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),y.map(({key:b,link:T})=>dt.createElement("link",{key:b,nonce:i.nonce,...T})))}function tb(...r){return t=>{r.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Vv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Vv&&(window.__reactRouterVersion="7.9.3")}catch{}function eb({basename:r,children:t,window:i}){let s=dt.useRef();s.current==null&&(s.current=kS({window:i,v5Compat:!0}));let l=s.current,[c,f]=dt.useState({action:l.action,location:l.location}),h=dt.useCallback(m=>{dt.startTransition(()=>f(m))},[f]);return dt.useLayoutEffect(()=>l.listen(h),[l,h]),dt.createElement(NM,{basename:r,children:t,location:c.location,navigationType:c.action,navigator:l})}var kv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jv=dt.forwardRef(function({onClick:t,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:_,viewTransition:g,...v},y){let{basename:b}=dt.useContext(Bi),T=typeof p=="string"&&kv.test(p),M,x=!1;if(typeof p=="string"&&T&&(M=p,Vv))try{let C=new URL(window.location.href),D=p.startsWith("//")?new URL(C.protocol+p):new URL(p),O=pa(D.pathname,b);D.origin===C.origin&&O!=null?p=O+D.search+D.hash:x=!0}catch{zi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=gM(p,{relative:l}),[L,N,k]=KM(s,v),G=rb(p,{replace:f,state:h,target:m,preventScrollReset:_,relative:l,viewTransition:g});function I(C){t&&t(C),C.defaultPrevented||G(C)}let j=dt.createElement("a",{...v,...k,href:M||U,onClick:x||c?t:I,ref:tb(y,N),target:m,"data-discover":!T&&i==="render"?"true":void 0});return L&&!T?dt.createElement(dt.Fragment,null,j,dt.createElement(QM,{page:U})):j});jv.displayName="Link";var nb=dt.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},_){let g=tl(f,{relative:p.relative}),v=Pr(),y=dt.useContext(nu),{navigator:b,basename:T}=dt.useContext(Bi),M=y!=null&&ub(g)&&h===!0,x=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,U=v.pathname,L=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(U=U.toLowerCase(),L=L?L.toLowerCase():null,x=x.toLowerCase()),L&&T&&(L=pa(L,T)||L);const N=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let k=U===x||!l&&U.startsWith(x)&&U.charAt(N)==="/",G=L!=null&&(L===x||!l&&L.startsWith(x)&&L.charAt(x.length)==="/"),I={isActive:k,isPending:G,isTransitioning:M},j=k?t:void 0,C;typeof s=="function"?C=s(I):C=[s,k?"active":null,G?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(I):c;return dt.createElement(jv,{...p,"aria-current":j,className:C,ref:_,style:D,to:f,viewTransition:h},typeof m=="function"?m(I):m)});nb.displayName="NavLink";var ib=dt.forwardRef(({discover:r="render",fetcherKey:t,navigate:i,reloadDocument:s,replace:l,state:c,method:f=kc,action:h,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:g,...v},y)=>{let b=lb(),T=cb(h,{relative:p}),M=f.toLowerCase()==="get"?"get":"post",x=typeof h=="string"&&kv.test(h),U=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let N=L.nativeEvent.submitter,k=N?.getAttribute("formmethod")||f;b(N||L.currentTarget,{fetcherKey:t,method:k,navigate:i,replace:l,state:c,relative:p,preventScrollReset:_,viewTransition:g})};return dt.createElement("form",{ref:y,method:M,action:T,onSubmit:s?m:U,...v,"data-discover":!x&&r==="render"?"true":void 0})});ib.displayName="Form";function ab(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xv(r){let t=dt.useContext(js);return Je(t,ab(r)),t}function rb(r,{target:t,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=$h(),m=Pr(),p=tl(r,{relative:c});return dt.useCallback(_=>{if(FM(_,t)){_.preventDefault();let g=i!==void 0?i:Wo(m)===Wo(p);h(r,{replace:g,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[m,h,p,i,s,t,r,l,c,f])}var sb=0,ob=()=>`__${String(++sb)}__`;function lb(){let{router:r}=Xv("useSubmit"),{basename:t}=dt.useContext(Bi),i=RM();return dt.useCallback(async(s,l={})=>{let{action:c,method:f,encType:h,formData:m,body:p}=HM(s,t);if(l.navigate===!1){let _=l.fetcherKey||ob();await r.fetch(_,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await r.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,t,i])}function cb(r,{relative:t}={}){let{basename:i}=dt.useContext(Bi),s=dt.useContext(_a);Je(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...tl(r||".",{relative:t})},f=Pr();if(r==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(_=>_==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let _=h.toString();c.search=_?`?${_}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:da([i,c.pathname])),Wo(c)}function ub(r,{relative:t}={}){let i=dt.useContext(Pv);Je(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Xv("useViewTransitionState"),l=tl(r,{relative:t});if(!i.isTransitioning)return!1;let c=pa(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=pa(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Jc(l.pathname,f)!=null||Jc(l.pathname,c)!=null}const fb="/frontend/assets/unnamed-Photoroom-DZWLzkYn.png",d_=()=>R.jsx(R.Fragment,{children:R.jsx("nav",{"data-aos":"fade-down",className:"fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0",children:R.jsx("div",{className:"container",children:R.jsxs("div",{className:"flex justify-between items-center",children:[R.jsxs("div",{className:"flex items-center gap-4 text-white font-bold text-2xl",children:[R.jsx("img",{src:fb,alt:"",className:"w-10"}),R.jsx("span",{children:"Exoplanet Explorer"})]}),R.jsx("div",{className:"text-white hidden sm:block",children:R.jsx("ul",{className:"flex items-center gap-6 text-xl py-4 ",children:R.jsx("li",{children:R.jsx("a",{href:"#",children:"About"})})})})]})})})}),db="/frontend/assets/moon-surface-hd-D0uwZgHD.png",hb=()=>{const r=$h();return R.jsxs("div",{className:" bg-black/20 h-full",children:[R.jsx("div",{className:"h-full flex justify-center items-center p-4",children:R.jsxs("div",{className:"container grid grid-cols-1 sm:grid-cols-2 gap-4",children:[R.jsxs("div",{className:"text-white space-y-4 lg:pr-36",children:[R.jsx("h1",{"data-aos":"fade-up",className:"text-5xl font-bold",children:"EXPLORE THE EXOPLANET"}),R.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"Let's explore the exoplanet!"}),R.jsx("button",{"data-aos":"fade-up","data-aos-delay":"500",onClick:()=>r("/byod"),className:"bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200",children:"Get Started"})]}),R.jsx("div",{})]})}),R.jsx("img",{src:db,alt:"",className:"absolute right-0 bottom-0 w-full brightness-50 z-10"}),R.jsx("div",{className:"absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"})]})},pb="/frontend/assets/wave%20Gif-BgkR609M.gif";var Wv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h_=Mi.createContext&&Mi.createContext(Wv),Ja=function(){return Ja=Object.assign||function(r){for(var t,i=1,s=arguments.length;i<s;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(r[l]=t[l])}return r},Ja.apply(this,arguments)},mb=function(r,t){var i={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(i[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)t.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(i[s[l]]=r[s[l]]);return i};function qv(r){return r&&r.map(function(t,i){return Mi.createElement(t.tag,Ja({key:i},t.attr),qv(t.child))})}function va(r){return function(t){return Mi.createElement(gb,Ja({attr:Ja({},r.attr)},t),qv(r.child))}}function gb(r){var t=function(i){var s=r.attr,l=r.size,c=r.title,f=mb(r,["attr","size","title"]),h=l||i.size||"1em",m;return i.className&&(m=i.className),r.className&&(m=(m?m+" ":"")+r.className),Mi.createElement("svg",Ja({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,s,f,{className:m,style:Ja(Ja({color:r.color||i.color},i.style),r.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&Mi.createElement("title",null,c),r.children)};return h_!==void 0?Mi.createElement(h_.Consumer,null,function(i){return t(i)}):t(Wv)}function _b(r){return va({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(r)}function vb(r){return va({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(r)}function xb(r){return va({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(r)}function yb(r){return va({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}}]})(r)}function Sb(r){return va({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M96 256H128V512H0V352H32V320H64V288H96V256zM512 352V512H384V256H416V288H448V320H480V352H512zM320 64H352V448H320V416H192V448H160V64H192V32H224V0H288V32H320V64zM288 128H224V192H288V128z"}}]})(r)}function Mb(r){return va({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M130 480c40.6 0 80.4-11 115.2-31.9L352 384l-224 0 0 96h2zM352 128L245.2 63.9C210.4 43 170.6 32 130 32h-2v96l224 0zM96 128l0-96H80C53.5 32 32 53.5 32 80v48h8c-22.1 0-40 17.9-40 40v16V328v16c0 22.1 17.9 40 40 40H32v48c0 26.5 21.5 48 48 48H96l0-96h8c26.2 0 49.4-12.6 64-32H456c69.3 0 135-22.7 179.2-81.6c6.4-8.5 6.4-20.3 0-28.8C591 182.7 525.3 160 456 160H168c-14.6-19.4-37.8-32-64-32l-8 0zM512 243.6v24.9c0 19.6-15.9 35.6-35.6 35.6c-2.5 0-4.4-2-4.4-4.4V212.4c0-2.5 2-4.4 4.4-4.4c19.6 0 35.6 15.9 35.6 35.6z"}}]})(r)}const bb=[{title:"HST",content:"300-1500km",description:"Used for astronomical observations, capturing stunning images of the universe.",icon:R.jsx(yb,{className:"text-7xl"}),aosDelay:"300"},{title:"ISS",content:"500-1500km",description:", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",icon:R.jsx(Mb,{className:"text-7xl"}),aosDelay:"500"},{title:"GPS",content:"300-1500km",description:"Part of the Global Positioning System (GPS) used for navigation.",icon:R.jsx(Sb,{className:"text-7xl"}),aosDelay:"700"}],Eb=()=>R.jsx(R.Fragment,{children:R.jsx("section",{className:"bg-primary",children:R.jsx("div",{className:"container",children:R.jsx("div",{className:"min-h-[400px]",children:R.jsxs("div",{children:[R.jsx("div",{className:" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ",children:bb.map(r=>R.jsxs("div",{"data-aos":"fade-up","data-aos-delay":r.aosDelay,className:"min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto",children:[r.icon,R.jsx("h1",{children:r.title}),R.jsx("p",{children:r.content}),R.jsx("p",{className:"text-sm",children:r.description})]},r.title))}),R.jsx("img",{src:pb,alt:"",className:"h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"})]})})})})}),p_="/frontend/assets/GSFC_20190627_TESS_m13223_L98-59b_Full_Rotation~orig-C07sR7bi.mp4",Tb="/frontend/assets/satelite1-D0UNUTYe.jpg",Ab=()=>R.jsx(R.Fragment,{children:R.jsx("section",{className:"bg-primary text-white pb-12",children:R.jsx("div",{className:"container ",children:R.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 items-center",children:[R.jsx("div",{"data-aos":"zoom-in",children:R.jsx("img",{src:Tb,alt:"",className:"w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"})}),R.jsxs("div",{className:"space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ",children:[R.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",className:"text-sky-800 uppercase",children:"our mission"}),R.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"500",className:"uppercase text-5xl",children:"Rapidscat"}),R.jsx("p",{"data-aos":"fade-up","data-aos-delay":"700",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt."}),R.jsx("button",{"data-aos":"fade-up","data-aos-delay":"900",className:"bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200",children:"View All"})]})]})})})}),Rb="/frontend/assets/satelite2-BcN5LKgf.jpg",wb=()=>R.jsx(R.Fragment,{children:R.jsx("section",{className:"bg-primary text-white py-20",children:R.jsx("div",{className:"container ",children:R.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 items-center",children:[R.jsxs("div",{className:"space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ",children:[R.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",className:"text-sky-800 uppercase",children:"our mission"}),R.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"500",className:"uppercase text-5xl",children:"Rapidscat"}),R.jsx("p",{"data-aos":"fade-up","data-aos-delay":"700",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt."}),R.jsx("button",{"data-aos":"fade-up","data-aos-delay":"900",className:"bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200",children:"View All"})]}),R.jsx("div",{"data-aos":"zoom-in",children:R.jsx("img",{src:Rb,alt:"",className:"w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"})})]})})})});function Cb(r){return va({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"}}]})(r)}function Db(r){return va({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"}}]})(r)}function Nb(r){return va({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}}]})(r)}const m_=()=>R.jsx("div",{className:"bg-gray-800 ",children:R.jsxs("section",{className:"max-w-[1200px] mx-auto text-white",children:[R.jsxs("div",{className:" grid md:grid-cols-3 py-5",children:[R.jsxs("div",{className:" py-8 px-4 ",children:[R.jsx("h1",{className:"sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3",children:"Be Ready To Grow"}),R.jsxs("p",{className:"text-gray-400",children:["Get exclusive"," ",R.jsx("span",{className:" text-white font-bold ",children:" best update"})," ","straight to your inbox."," "]}),R.jsx("br",{}),R.jsxs("div",{className:"flex items-center h-10",children:[R.jsx("input",{className:"py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2 ",type:"text",placeholder:"Email"}),R.jsx("button",{className:"bg-orange-500 hover:bg-orange-500/75 h-full inline-block py-2 px-6 text-white",children:"Ok"})]})]}),R.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ",children:[R.jsx("div",{className:"",children:R.jsxs("div",{className:"py-8 px-4 ",children:[R.jsx("h1",{className:"sm:text-xl text-xl font-bold sm:text-left text-justify mb-3",children:"Important Links"}),R.jsxs("ul",{className:"flex flex-col gap-3 ",children:[R.jsx("li",{className:"cursor-pointer",children:"Home"}),R.jsx("li",{className:"cursor-pointer",children:"About"}),R.jsx("li",{className:"cursor-pointer",children:"Services"}),R.jsx("li",{className:"cursor-pointer",children:"Login"})]})]})}),R.jsx("div",{className:"",children:R.jsxs("div",{className:"py-8 px-4 ",children:[R.jsx("h1",{className:"sm:text-xl text-xl font-bold sm:text-left text-justify mb-3",children:"Links"}),R.jsxs("ul",{className:"flex flex-col gap-3 ",children:[R.jsx("li",{className:"cursor-pointer",children:"Home"}),R.jsx("li",{className:"cursor-pointer",children:"About"}),R.jsx("li",{className:"cursor-pointer",children:"Services"}),R.jsx("li",{className:"cursor-pointer",children:"Login"})]})]})}),R.jsx("div",{className:"",children:R.jsxs("div",{className:"py-8 px-4 ",children:[R.jsx("h1",{className:"sm:text-xl text-xl font-bold sm:text-left text-justify mb-3",children:"Contact Us"}),R.jsxs("div",{className:"flex flex-col gap-3",children:[R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx(Cb,{}),R.jsx("p",{children:"Noida, Uttar Pradesh"})]}),R.jsxs("div",{className:"flex items-center gap-3 mt-3",children:[R.jsx(Nb,{}),R.jsx("p",{children:"abc@gmail.com"})]}),R.jsxs("div",{className:"flex items-center gap-3 mt-3",children:[R.jsx(Db,{}),R.jsx("p",{children:"+91 123456789"})]})]})]})})]})]}),R.jsx("div",{className:"hidden sm:block",children:R.jsxs("div",{className:"flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40",children:[R.jsx("span",{className:"text-sm text-gray-400",children:"@copyright 2024 Travery || Dilshad"}),R.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[R.jsx("a",{href:"#",children:R.jsx(vb,{className:"text-4xl"})}),R.jsx("a",{href:"#",children:R.jsx(_b,{className:"text-4xl"})}),R.jsx("a",{href:"#",children:R.jsx(xb,{className:"text-4xl"})})]}),R.jsx("span",{className:"text-sm text-gray-400 ",children:R.jsxs("ul",{className:"flex gap-3",children:[R.jsx("li",{className:"hover:text-white",children:"Privacy Policy"}),R.jsx("li",{className:"hover:text-white",children:"Terms & Conditions"})]})})]})})]})}),g_=r=>{let t;const i=new Set,s=(p,_)=>{const g=typeof p=="function"?p(t):p;if(!Object.is(g,t)){const v=t;t=_??(typeof g!="object"||g===null)?g:Object.assign({},t,g),i.forEach(y=>y(t,v))}},l=()=>t,h={setState:s,getState:l,getInitialState:()=>m,subscribe:p=>(i.add(p),()=>i.delete(p))},m=t=r(s,l,h);return h},Ub=(r=>r?g_(r):g_),Lb=r=>r;function Ob(r,t=Lb){const i=Mi.useSyncExternalStore(r.subscribe,Mi.useCallback(()=>t(r.getState()),[r,t]),Mi.useCallback(()=>t(r.getInitialState()),[r,t]));return Mi.useDebugValue(i),i}const __=r=>{const t=Ub(r),i=s=>Ob(t,s);return Object.assign(i,t),i},Pb=(r=>r?__(r):__),Be=Pb((r,t)=>({phase:"idle",setPhase:i=>r({phase:i}),uploadedFile:null,setUploadedFile:i=>r({uploadedFile:i}),scoresByTid:{},setScores:i=>r({scoresByTid:i}),threshold:80,setThreshold:i=>r({threshold:i}),getOverThresholdCount:()=>{const{scoresByTid:i,threshold:s}=t();return Object.values(i).filter(l=>l>=s).length},getOverThresholdTids:()=>{const{scoresByTid:i,threshold:s}=t();return Object.entries(i).filter(([,l])=>l>=s).map(([l])=>parseInt(l))},candidates:[88863718,65212867,107782586],selectedTid:null,setSelectedTid:i=>r({selectedTid:i}),parsedData:[],setParsedData:i=>r({parsedData:i}),reset:()=>r({phase:"idle",uploadedFile:null,scoresByTid:{},threshold:80,selectedTid:null,parsedData:[]}),processFile:(i,s,l)=>{r({phase:"analyzing",uploadedFile:{name:i.name,size:i.size,type:i.type,rowCount:s.length},parsedData:s,scoresByTid:l}),setTimeout(()=>{r({phase:"done"})},2500)}}));async function zb(r){const i=(await r.text()).split(/\r?\n/).map(f=>f.trim()).filter(f=>f.length>0);if(i.length===0)return[];const l=i[0].split(",").map(f=>f.trim().toLowerCase()).findIndex(f=>f.includes("tid")||f.includes("target")||f.includes("target_id"));return i.slice(1).map(f=>{const h=f.split(",").map(p=>p.trim());let m=null;if(l!==-1&&h[l]){const p=parseInt(h[l]);isNaN(p)||(m=p)}return{tid:m,features:h}})}function Fb(r){if(!r||r.length===0)return 0;const t=r.map(c=>parseFloat(c)).filter(c=>!isNaN(c));if(t.length===0)return 0;const i=t.reduce((c,f)=>c+f,0)/t.length,s=t.reduce((c,f)=>c+Math.pow(f-i,2),0)/t.length;return Math.min(100,Math.max(0,i*30+s*15))}const Bb=()=>{const r=$h(),t=Be(p=>p.processFile),i=Be(p=>p.phase),s=dt.useRef(null),l=dt.useRef(null),[c,f]=dt.useState({status:"idle"});dt.useEffect(()=>{i==="done"&&r("/visualizer")},[i,r]);const h=p=>{p.current&&(p.current.value="",p.current.click())},m=(p,_)=>{const g=p.target.files?.[0];if(!g)return;const v=g.name.toLowerCase();if(_==="csv"){if(g.type!=="text/csv"&&!v.endsWith(".csv")){f({status:"error",message:"Please choose a .csv file."});return}}else if(!v.endsWith(".dat")){f({status:"error",message:"Please choose a .dat file."});return}f({status:"reading",fileType:_,fileName:g.name});const y=new FileReader;y.onerror=()=>{f({status:"error",message:"We could not read that file. Please try again."})},y.onload=async()=>{f({status:"uploading",fileType:_,fileName:g.name});try{const b=await zb(g),T={};b.forEach(U=>{U.tid&&(T[U.tid]=Fb(U.features))});const M=b.length,x=b.slice(0,5).map(U=>`TID: ${U.tid||"N/A"}, Features: ${U.features.slice(0,3).join(", ")}...`).join(`
`);f({status:"success",fileType:_,fileName:g.name,rowCount:M,preview:x}),t(g,b,T)}catch{f({status:"error",message:"Failed to process file. Please try again."})}},y.readAsText(g)};return R.jsxs("section",{className:"h-[700px] flex items-center justify-center px-6 py-24 text-white relative",children:[R.jsx("input",{ref:s,type:"file",accept:".csv,text/csv",onChange:p=>m(p,"csv"),className:"sr-only"}),R.jsx("input",{ref:l,type:"file",accept:".dat,text/plain",onChange:p=>m(p,"dat"),className:"sr-only"}),R.jsxs("div",{className:"bg-black/50 border border-white/10 rounded-2xl max-w-3xl w-full p-8 backdrop-blur-md space-y-6",children:[R.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[R.jsx("h2",{className:"text-3xl font-semibold","data-aos":"fade-up",children:"Bring Your Own Data"}),R.jsx("button",{onClick:()=>r("/"),className:"rounded-md border border-white/40 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:border-white/70 transition","data-aos":"fade-up","data-aos-delay":"100",children:"Back to Overview"})]}),R.jsx("p",{className:"text-white/80 max-w-2xl","data-aos":"fade-up","data-aos-delay":"150",children:"Upload a CSV or .dat file from your own observations to explore orbital patterns and transit signals."}),R.jsxs("div",{className:"grid gap-4 sm:grid-cols-2","data-aos":"fade-up","data-aos-delay":"200",children:[R.jsx("button",{onClick:()=>h(s),className:"bg-blue-400 text-white hover:bg-blue-500 px-4 py-3 rounded-lg font-semibold transition",children:"Upload CSV"}),R.jsx("button",{onClick:()=>h(l),className:"bg-indigo-400 text-white hover:bg-indigo-500 px-4 py-3 rounded-lg font-semibold transition",children:"Upload .dat"}),R.jsx("button",{disabled:!0,className:"bg-white/10 text-white/80 px-4 py-3 rounded-lg font-semibold border border-white/20 cursor-not-allowed",children:"Try Sample Data (Coming Soon)"})]}),c.status==="reading"&&R.jsx("div",{className:"bg-blue-500/10 border border-blue-400/30 text-blue-100 rounded-lg p-4","data-aos":"fade-up","data-aos-delay":"250",children:"Reading your file..."}),c.status==="uploading"&&R.jsxs("div",{className:"bg-indigo-500/10 border border-indigo-400/30 text-indigo-100 rounded-lg p-4","data-aos":"fade-up","data-aos-delay":"250",children:["Simulating a backend upload for your ",c.fileType?.toUpperCase()," file..."]}),c.status==="error"&&R.jsx("div",{className:"bg-red-500/10 border border-red-400/40 text-red-100 rounded-lg p-4","data-aos":"fade-up","data-aos-delay":"250",children:c.message}),c.status==="success"&&i!=="analyzing"&&R.jsxs("div",{className:"bg-emerald-500/10 border border-emerald-400/40 text-emerald-100 rounded-lg p-4 space-y-3","data-aos":"fade-up","data-aos-delay":"250",children:[R.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",children:[R.jsxs("p",{className:"font-semibold",children:["Loaded ",c.fileName]}),R.jsxs("span",{className:"text-sm text-emerald-200/80",children:[c.rowCount," data rows detected"]})]}),R.jsxs("p",{className:"text-sm text-emerald-200/70",children:[c.fileType?.toUpperCase()," file processed successfully. Scores calculated."]}),R.jsxs("div",{children:[R.jsx("p",{className:"text-sm text-emerald-200/70 mb-2",children:"Preview (first rows):"}),R.jsx("pre",{className:"bg-black/40 text-white/90 text-xs rounded-md p-3 overflow-x-auto whitespace-pre-wrap",children:c.preview||"No preview available."})]})]}),i==="analyzing"&&R.jsxs("div",{className:"bg-blue-500/10 border border-blue-400/40 text-blue-100 rounded-lg p-6 space-y-4","data-aos":"fade-up","data-aos-delay":"250",children:[R.jsxs("div",{className:"flex items-center gap-4",children:[R.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"}),R.jsxs("div",{className:"flex-1",children:[R.jsx("h3",{className:"text-lg font-bold mb-2",children:"AI Analysis in Progress"}),R.jsx("p",{className:"text-sm text-blue-200/80",children:"Analyzing light curve patterns and calculating exoplanet probabilities..."})]})]}),R.jsxs("div",{className:"space-y-2",children:[R.jsxs("div",{className:"flex justify-between text-xs text-blue-300/70",children:[R.jsx("span",{children:"Processing data points"}),R.jsx("span",{children:"75%"})]}),R.jsx("div",{className:"w-full bg-blue-900/30 rounded-full h-2 overflow-hidden",children:R.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-cyan-400 h-full animate-pulse",style:{width:"75%"}})})]}),R.jsxs("div",{className:"text-xs text-blue-300/60 space-y-1",children:[R.jsxs("p",{children:["Parsed ",c.rowCount," rows"]}),R.jsx("p",{children:"Extracted features from light curves"}),R.jsx("p",{className:"animate-pulse",children:"→ Computing probability scores..."})]})]})]})]})},Ib="modulepreload",Hb=function(r){return"/frontend/"+r},v_={},Gb=function(t,i,s){let l=Promise.resolve();if(i&&i.length>0){let p=function(_){return Promise.all(_.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};var f=p;document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),m=h?.nonce||h?.getAttribute("nonce");l=p(i.map(_=>{if(_=Hb(_),_ in v_)return;v_[_]=!0;const g=_.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${v}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":Ib,g||(y.as="script"),y.crossOrigin="",y.href=_,m&&y.setAttribute("nonce",m),document.head.appendChild(y),g)return new Promise((b,T)=>{y.addEventListener("load",b),y.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return l.then(h=>{for(const m of h||[])m.status==="rejected"&&c(m.reason);return t().catch(c)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="180",Ps={ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vb=0,x_=1,kb=2,Yv=1,jb=2,la=3,er=0,Wn=1,ca=2,$a=0,zs=1,ah=2,y_=3,S_=4,Xb=5,wr=100,Wb=101,qb=102,Yb=103,Zb=104,Kb=200,Qb=201,Jb=202,$b=203,rh=204,sh=205,tE=206,eE=207,nE=208,iE=209,aE=210,rE=211,sE=212,oE=213,lE=214,oh=0,lh=1,ch=2,Bs=3,uh=4,fh=5,dh=6,hh=7,Zv=0,cE=1,uE=2,tr=0,fE=1,dE=2,hE=3,pE=4,mE=5,gE=6,_E=7,Kv=300,Is=301,Hs=302,ph=303,mh=304,au=306,gh=1e3,Dr=1001,_h=1002,Ti=1003,vE=1004,_c=1005,Li=1006,Ed=1007,Nr=1008,Fi=1009,Qv=1010,Jv=1011,qo=1012,rp=1013,Ur=1014,ua=1015,el=1016,sp=1017,op=1018,Yo=1020,$v=35902,tx=35899,ex=1021,nx=1022,bi=1023,Zo=1026,Ko=1027,ix=1028,lp=1029,ax=1030,cp=1031,up=1033,Xc=33776,Wc=33777,qc=33778,Yc=33779,vh=35840,xh=35841,yh=35842,Sh=35843,Mh=36196,bh=37492,Eh=37496,Th=37808,Ah=37809,Rh=37810,wh=37811,Ch=37812,Dh=37813,Nh=37814,Uh=37815,Lh=37816,Oh=37817,Ph=37818,zh=37819,Fh=37820,Bh=37821,Ih=36492,Hh=36494,Gh=36495,Vh=36283,kh=36284,jh=36285,Xh=36286,xE=3200,yE=3201,SE=0,ME=1,Qa="",hi="srgb",Gs="srgb-linear",$c="linear",Ve="srgb",xs=7680,M_=519,bE=512,EE=513,TE=514,rx=515,AE=516,RE=517,wE=518,CE=519,b_=35044,E_="300 es",Oi=2e3,tu=2001;class zr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=Math.PI/180,Wh=180/Math.PI;function nl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function Se(r,t,i){return Math.max(t,Math.min(i,r))}function DE(r,t){return(r%t+t)%t}function Td(r,t,i){return(1-i)*r+i*t}function Ho(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const NE={DEG2RAD:Zc};class de{constructor(t=0,i=0){de.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3];const v=c[f+0],y=c[f+1],b=c[f+2],T=c[f+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(h===1){t[i+0]=v,t[i+1]=y,t[i+2]=b,t[i+3]=T;return}if(g!==T||m!==v||p!==y||_!==b){let M=1-h;const x=m*v+p*y+_*b+g*T,U=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const k=Math.sqrt(L),G=Math.atan2(k,x*U);M=Math.sin(M*G)/k,h=Math.sin(h*G)/k}const N=h*U;if(m=m*M+v*N,p=p*M+y*N,_=_*M+b*N,g=g*M+T*N,M===1-h){const k=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=k,p*=k,_*=k,g*=k}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[f],v=c[f+1],y=c[f+2],b=c[f+3];return t[i]=h*b+_*g+m*y-p*v,t[i+1]=m*b+_*v+p*g-h*y,t[i+2]=p*b+_*y+h*v-m*g,t[i+3]=_*b-h*g-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),g=h(c/2),v=m(s/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=v*_*g+p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g-v*y*b;break;case"YXZ":this._x=v*_*g+p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g+v*y*b;break;case"ZXY":this._x=v*_*g-p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g-v*y*b;break;case"ZYX":this._x=v*_*g-p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g+v*y*b;break;case"YZX":this._x=v*_*g+p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g-v*y*b;break;case"XZY":this._x=v*_*g-p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g+v*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],v=s+h+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>h&&s>g){const y=2*Math.sqrt(1+s-h-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-s-g);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-s-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-s*p,this._z=c*_+f*p+s*m-l*h,this._w=f*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+s*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,h),g=Math.sin((1-i)*_)/p,v=Math.sin(i*_)/p;return this._w=f*g+this._w*v,this._x=s*g+this._x*v,this._y=l*g+this._y*v,this._z=c*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(t=0,i=0,s=0){at.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(T_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(T_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),_=2*(h*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-h*_,this.y=s+m*_+h*p-c*g,this.z=l+m*g+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ad.copy(this).projectOnVector(t),this.sub(Ad)}reflect(t){return this.sub(Ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new at,T_=new Lr;class pe{constructor(t,i,s,l,c,f,h,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],_=s[4],g=s[7],v=s[2],y=s[5],b=s[8],T=l[0],M=l[3],x=l[6],U=l[1],L=l[4],N=l[7],k=l[2],G=l[5],I=l[8];return c[0]=f*T+h*U+m*k,c[3]=f*M+h*L+m*G,c[6]=f*x+h*N+m*I,c[1]=p*T+_*U+g*k,c[4]=p*M+_*L+g*G,c[7]=p*x+_*N+g*I,c[2]=v*T+y*U+b*k,c[5]=v*M+y*L+b*G,c[8]=v*x+y*N+b*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*h*p-s*c*_+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=_*f-h*p,v=h*m-_*c,y=p*c-f*m,b=i*g+s*v+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=g*T,t[1]=(l*p-_*s)*T,t[2]=(h*s-l*f)*T,t[3]=v*T,t[4]=(_*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=y*T,t[7]=(s*m-p*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Rd.makeScale(t,i)),this}rotate(t){return this.premultiply(Rd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Rd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new pe;function sx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function eu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function UE(){const r=eu("canvas");return r.style.display="block",r}const A_={};function Qo(r){r in A_||(A_[r]=!0,console.warn(r))}function LE(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const R_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OE(){const r={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=Fs(l.r),l.g=Fs(l.g),l.b=Fs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Gs]:{primaries:t,whitePoint:s,transfer:$c,toXYZ:R_,fromXYZ:w_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:R_,fromXYZ:w_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),r}const De=OE();function ha(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ys;class PE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ys===void 0&&(ys=eu("canvas")),ys.width=t.width,ys.height=t.height;const l=ys.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ys}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=eu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ha(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ha(i[s]/255)*255):i[s]=ha(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zE=0;class fp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=nl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(wd(l[f].image)):c.push(wd(l[f]))}else c=wd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function wd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?PE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FE=0;const Cd=new at;class Fn extends zr{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=Dr,l=Dr,c=Li,f=Nr,h=bi,m=Fi,p=Fn.DEFAULT_ANISOTROPY,_=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=nl(),this.name="",this.source=new fp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cd).x}get height(){return this.source.getSize(Cd).y}get depth(){return this.source.getSize(Cd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gh:t.x=t.x-Math.floor(t.x);break;case Dr:t.x=t.x<0?0:1;break;case _h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gh:t.y=t.y-Math.floor(t.y);break;case Dr:t.y=t.y<0?0:1;break;case _h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Kv;Fn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],v=m[1],y=m[5],b=m[9],T=m[2],M=m[6],x=m[10];if(Math.abs(_-v)<.01&&Math.abs(g-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+T)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,N=(y+1)/2,k=(x+1)/2,G=(_+v)/4,I=(g+T)/4,j=(b+M)/4;return L>N&&L>k?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=G/s,c=I/s):N>k?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=G/l,c=j/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=I/c,l=j/c),this.set(s,l,c,i),this}let U=Math.sqrt((M-b)*(M-b)+(g-T)*(g-T)+(v-_)*(v-_));return Math.abs(U)<.001&&(U=1),this.x=(M-b)/U,this.y=(g-T)/U,this.z=(v-_)/U,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BE extends zr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Fn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new fp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends BE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class ox extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class IE extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(t=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,vi):vi.fromBufferAttribute(c,f),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),xc.subVectors(this.max,Go),Ss.subVectors(t.a,Go),Ms.subVectors(t.b,Go),bs.subVectors(t.c,Go),ja.subVectors(Ms,Ss),Xa.subVectors(bs,Ms),Sr.subVectors(Ss,bs);let i=[0,-ja.z,ja.y,0,-Xa.z,Xa.y,0,-Sr.z,Sr.y,ja.z,0,-ja.x,Xa.z,0,-Xa.x,Sr.z,0,-Sr.x,-ja.y,ja.x,0,-Xa.y,Xa.x,0,-Sr.y,Sr.x,0];return!Dd(i,Ss,Ms,bs,xc)||(i=[1,0,0,0,1,0,0,0,1],!Dd(i,Ss,Ms,bs,xc))?!1:(yc.crossVectors(ja,Xa),i=[yc.x,yc.y,yc.z],Dd(i,Ss,Ms,bs,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ia=[new at,new at,new at,new at,new at,new at,new at,new at],vi=new at,vc=new il,Ss=new at,Ms=new at,bs=new at,ja=new at,Xa=new at,Sr=new at,Go=new at,xc=new at,yc=new at,Mr=new at;function Dd(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Mr.fromArray(r,c);const h=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=t.dot(Mr),p=i.dot(Mr),_=s.dot(Mr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const HE=new il,Vo=new at,Nd=new at;class ru{constructor(t=new at,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):HE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Vo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(Nd)),this.expandByPoint(Vo.copy(t.center).sub(Nd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const aa=new at,Ud=new at,Sc=new at,Wa=new at,Ld=new at,Mc=new at,Od=new at;class su{constructor(t=new at,i=new at(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Ud.copy(t).add(i).multiplyScalar(.5),Sc.copy(i).sub(t).normalize(),Wa.copy(this.origin).sub(Ud);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Sc),h=Wa.dot(this.direction),m=-Wa.dot(Sc),p=Wa.lengthSq(),_=Math.abs(1-f*f);let g,v,y,b;if(_>0)if(g=f*m-h,v=f*h-m,b=c*_,g>=0)if(v>=-b)if(v<=b){const T=1/_;g*=T,v*=T,y=g*(g+f*v+2*h)+v*(f*g+v+2*m)+p}else v=c,g=Math.max(0,-(f*v+h)),y=-g*g+v*(v+2*m)+p;else v=-c,g=Math.max(0,-(f*v+h)),y=-g*g+v*(v+2*m)+p;else v<=-b?(g=Math.max(0,-(-f*c+h)),v=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+p):v<=b?(g=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(g=Math.max(0,-(f*c+h)),v=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+p);else v=f>0?-c:c,g=Math.max(0,-(f*v+h)),y=-g*g+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Ud).addScaledVector(Sc,v),y}intersectSphere(t,i){aa.subVectors(t.center,this.origin);const s=aa.dot(this.direction),l=aa.dot(aa)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),_>=0?(c=(t.min.y-v.y)*_,f=(t.max.y-v.y)*_):(c=(t.max.y-v.y)*_,f=(t.min.y-v.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(t.min.z-v.z)*g,m=(t.max.z-v.z)*g):(h=(t.max.z-v.z)*g,m=(t.min.z-v.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,aa)!==null}intersectTriangle(t,i,s,l,c){Ld.subVectors(i,t),Mc.subVectors(s,t),Od.crossVectors(Ld,Mc);let f=this.direction.dot(Od),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Wa.subVectors(this.origin,t);const m=h*this.direction.dot(Mc.crossVectors(Wa,Mc));if(m<0)return null;const p=h*this.direction.dot(Ld.cross(Wa));if(p<0||m+p>f)return null;const _=-h*Wa.dot(Od);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,i,s,l,c,f,h,m,p,_,g,v,y,b,T,M){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,_,g,v,y,b,T,M)}set(t,i,s,l,c,f,h,m,p,_,g,v,y,b,T,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=h,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=b,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Es.setFromMatrixColumn(t,0).length(),c=1/Es.setFromMatrixColumn(t,1).length(),f=1/Es.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const v=f*_,y=f*g,b=h*_,T=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=v-T*p,i[9]=-h*m,i[2]=T-v*p,i[6]=b+y*p,i[10]=f*m}else if(t.order==="YXZ"){const v=m*_,y=m*g,b=p*_,T=p*g;i[0]=v+T*h,i[4]=b*h-y,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-h,i[2]=y*h-b,i[6]=T+v*h,i[10]=f*m}else if(t.order==="ZXY"){const v=m*_,y=m*g,b=p*_,T=p*g;i[0]=v-T*h,i[4]=-f*g,i[8]=b+y*h,i[1]=y+b*h,i[5]=f*_,i[9]=T-v*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const v=f*_,y=f*g,b=h*_,T=h*g;i[0]=m*_,i[4]=b*p-y,i[8]=v*p+T,i[1]=m*g,i[5]=T*p+v,i[9]=y*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,y=f*p,b=h*m,T=h*p;i[0]=m*_,i[4]=T-v*g,i[8]=b*g+y,i[1]=g,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=y*g+b,i[10]=v-T*g}else if(t.order==="XZY"){const v=f*m,y=f*p,b=h*m,T=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=v*g+T,i[5]=f*_,i[9]=y*g-b,i[2]=b*g-y,i[6]=h*_,i[10]=T*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(GE,t,VE)}lookAt(t,i,s){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),qa.crossVectors(s,ei),qa.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),qa.crossVectors(s,ei)),qa.normalize(),bc.crossVectors(ei,qa),l[0]=qa.x,l[4]=bc.x,l[8]=ei.x,l[1]=qa.y,l[5]=bc.y,l[9]=ei.y,l[2]=qa.z,l[6]=bc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],_=s[1],g=s[5],v=s[9],y=s[13],b=s[2],T=s[6],M=s[10],x=s[14],U=s[3],L=s[7],N=s[11],k=s[15],G=l[0],I=l[4],j=l[8],C=l[12],D=l[1],O=l[5],V=l[9],J=l[13],$=l[2],ut=l[6],F=l[10],Y=l[14],q=l[3],xt=l[7],Et=l[11],z=l[15];return c[0]=f*G+h*D+m*$+p*q,c[4]=f*I+h*O+m*ut+p*xt,c[8]=f*j+h*V+m*F+p*Et,c[12]=f*C+h*J+m*Y+p*z,c[1]=_*G+g*D+v*$+y*q,c[5]=_*I+g*O+v*ut+y*xt,c[9]=_*j+g*V+v*F+y*Et,c[13]=_*C+g*J+v*Y+y*z,c[2]=b*G+T*D+M*$+x*q,c[6]=b*I+T*O+M*ut+x*xt,c[10]=b*j+T*V+M*F+x*Et,c[14]=b*C+T*J+M*Y+x*z,c[3]=U*G+L*D+N*$+k*q,c[7]=U*I+L*O+N*ut+k*xt,c[11]=U*j+L*V+N*F+k*Et,c[15]=U*C+L*J+N*Y+k*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],_=t[2],g=t[6],v=t[10],y=t[14],b=t[3],T=t[7],M=t[11],x=t[15];return b*(+c*m*g-l*p*g-c*h*v+s*p*v+l*h*y-s*m*y)+T*(+i*m*y-i*p*v+c*f*v-l*f*y+l*p*_-c*m*_)+M*(+i*p*g-i*h*y-c*f*g+s*f*y+c*h*_-s*p*_)+x*(-l*h*_-i*m*g+i*h*v+l*f*g-s*f*v+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=t[9],v=t[10],y=t[11],b=t[12],T=t[13],M=t[14],x=t[15],U=g*M*p-T*v*p+T*m*y-h*M*y-g*m*x+h*v*x,L=b*v*p-_*M*p-b*m*y+f*M*y+_*m*x-f*v*x,N=_*T*p-b*g*p+b*h*y-f*T*y-_*h*x+f*g*x,k=b*g*m-_*T*m-b*h*v+f*T*v+_*h*M-f*g*M,G=i*U+s*L+l*N+c*k;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return t[0]=U*I,t[1]=(T*v*c-g*M*c-T*l*y+s*M*y+g*l*x-s*v*x)*I,t[2]=(h*M*c-T*m*c+T*l*p-s*M*p-h*l*x+s*m*x)*I,t[3]=(g*m*c-h*v*c-g*l*p+s*v*p+h*l*y-s*m*y)*I,t[4]=L*I,t[5]=(_*M*c-b*v*c+b*l*y-i*M*y-_*l*x+i*v*x)*I,t[6]=(b*m*c-f*M*c-b*l*p+i*M*p+f*l*x-i*m*x)*I,t[7]=(f*v*c-_*m*c+_*l*p-i*v*p-f*l*y+i*m*y)*I,t[8]=N*I,t[9]=(b*g*c-_*T*c-b*s*y+i*T*y+_*s*x-i*g*x)*I,t[10]=(f*T*c-b*h*c+b*s*p-i*T*p-f*s*x+i*h*x)*I,t[11]=(_*h*c-f*g*c-_*s*p+i*g*p+f*s*y-i*h*y)*I,t[12]=k*I,t[13]=(_*T*l-b*g*l+b*s*v-i*T*v-_*s*M+i*g*M)*I,t[14]=(b*h*l-f*T*l-b*s*m+i*T*m+f*s*M-i*h*M)*I,t[15]=(f*g*l-_*h*l+_*s*m-i*g*m-f*s*v+i*h*v)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,_=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,g=h+h,v=c*p,y=c*_,b=c*g,T=f*_,M=f*g,x=h*g,U=m*p,L=m*_,N=m*g,k=s.x,G=s.y,I=s.z;return l[0]=(1-(T+x))*k,l[1]=(y+N)*k,l[2]=(b-L)*k,l[3]=0,l[4]=(y-N)*G,l[5]=(1-(v+x))*G,l[6]=(M+U)*G,l[7]=0,l[8]=(b+L)*I,l[9]=(M-U)*I,l[10]=(1-(v+T))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=Es.set(l[0],l[1],l[2]).length();const f=Es.set(l[4],l[5],l[6]).length(),h=Es.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/c,_=1/f,g=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=_,xi.elements[5]*=_,xi.elements[6]*=_,xi.elements[8]*=g,xi.elements[9]*=g,xi.elements[10]*=g,i.setFromRotationMatrix(xi),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=Oi,m=!1){const p=this.elements,_=2*c/(i-t),g=2*c/(s-l),v=(i+t)/(i-t),y=(s+l)/(s-l);let b,T;if(m)b=c/(f-c),T=f*c/(f-c);else if(h===Oi)b=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===tu)b=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=Oi,m=!1){const p=this.elements,_=2/(i-t),g=2/(s-l),v=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,T;if(m)b=1/(f-c),T=f/(f-c);else if(h===Oi)b=-2/(f-c),T=-(f+c)/(f-c);else if(h===tu)b=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Es=new at,xi=new $e,GE=new at(0,0,0),VE=new at(1,1,1),qa=new at,bc=new at,ei=new at,C_=new $e,D_=new Lr;class ma{constructor(t=0,i=0,s=0,l=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return C_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(C_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return D_.setFromEuler(this),this.setFromQuaternion(D_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class dp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kE=0;const N_=new at,Ts=new Lr,ra=new $e,Ec=new at,ko=new at,jE=new at,XE=new Lr,U_=new at(1,0,0),L_=new at(0,1,0),O_=new at(0,0,1),P_={type:"added"},WE={type:"removed"},As={type:"childadded",child:null},Pd={type:"childremoved",child:null};class wn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new at,i=new ma,s=new Lr,l=new at(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new pe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ts.setFromAxisAngle(t,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,i){return Ts.setFromAxisAngle(t,i),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(U_,t)}rotateY(t){return this.rotateOnAxis(L_,t)}rotateZ(t){return this.rotateOnAxis(O_,t)}translateOnAxis(t,i){return N_.copy(t).applyQuaternion(this.quaternion),this.position.add(N_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(U_,t)}translateY(t){return this.translateOnAxis(L_,t)}translateZ(t){return this.translateOnAxis(O_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ec.copy(t):Ec.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(ko,Ec,this.up):ra.lookAt(Ec,ko,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(ra),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(P_),As.child=t,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(WE),Pd.child=t,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(P_),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,jE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,XE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),g=f(t.shapes),v=f(t.skeletons),y=f(t.animations),b=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new at(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new at,sa=new at,zd=new at,oa=new at,Rs=new at,ws=new at,z_=new at,Fd=new at,Bd=new at,Id=new at,Hd=new an,Gd=new an,Vd=new an;class Si{constructor(t=new at,i=new at,s=new at){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),yi.subVectors(t,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){yi.subVectors(l,i),sa.subVectors(s,i),zd.subVectors(t,i);const f=yi.dot(yi),h=yi.dot(sa),m=yi.dot(zd),p=sa.dot(sa),_=sa.dot(zd),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(p*m-h*_)*v,b=(f*_-h*m)*v;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(f,oa.y),m.addScaledVector(h,oa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Hd.setScalar(0),Gd.setScalar(0),Vd.setScalar(0),Hd.fromBufferAttribute(t,i),Gd.fromBufferAttribute(t,s),Vd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Hd,c.x),f.addScaledVector(Gd,c.y),f.addScaledVector(Vd,c.z),f}static isFrontFacing(t,i,s,l){return yi.subVectors(s,i),sa.subVectors(t,i),yi.cross(sa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),yi.cross(sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Si.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Rs.subVectors(l,s),ws.subVectors(c,s),Fd.subVectors(t,s);const m=Rs.dot(Fd),p=ws.dot(Fd);if(m<=0&&p<=0)return i.copy(s);Bd.subVectors(t,l);const _=Rs.dot(Bd),g=ws.dot(Bd);if(_>=0&&g<=_)return i.copy(l);const v=m*g-_*p;if(v<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Rs,f);Id.subVectors(t,c);const y=Rs.dot(Id),b=ws.dot(Id);if(b>=0&&y<=b)return i.copy(c);const T=y*p-m*b;if(T<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(s).addScaledVector(ws,h);const M=_*b-y*g;if(M<=0&&g-_>=0&&y-b>=0)return z_.subVectors(c,l),h=(g-_)/(g-_+(y-b)),i.copy(l).addScaledVector(z_,h);const x=1/(M+T+v);return f=T*x,h=v*x,i.copy(s).addScaledVector(Rs,f).addScaledVector(ws,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ya={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function kd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class _e{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=De.workingColorSpace){if(t=DE(t,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=kd(f,c,t+1/3),this.g=kd(f,c,t),this.b=kd(f,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const s=lx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return De.workingToColorSpace(Un.copy(this),t),Math.round(Se(Un.r*255,0,255))*65536+Math.round(Se(Un.g*255,0,255))*256+Math.round(Se(Un.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,c=Un.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=_<=.5?g/(f+h):g/(2-f-h),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=hi){De.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ya),this.setHSL(Ya.h+t,Ya.s+i,Ya.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ya),t.getHSL(Tc);const s=Td(Ya.h,Tc.h,i),l=Td(Ya.s,Tc.s,i),c=Td(Ya.l,Tc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new _e;_e.NAMES=lx;let qE=0;class al extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=zs,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(s.blending=this.blending),this.side!==er&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==rh&&(s.blendSrc=this.blendSrc),this.blendDst!==sh&&(s.blendDst=this.blendDst),this.blendEquation!==wr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class cx extends al{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new at,Ac=new de;let YE=0;class Pi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=b_,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(t),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ho(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ho(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ho(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ho(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ho(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==b_&&(t.usage=this.usage),t}}class ux extends Pi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class fx extends Pi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ei extends Pi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let ZE=0;const di=new $e,jd=new wn,Cs=new at,ni=new il,jo=new il,Sn=new at;class xa extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sx(t)?fx:ux)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,s){return di.makeTranslation(t,i,s),this.applyMatrix4(di),this}scale(t,i,s){return di.makeScale(t,i,s),this.applyMatrix4(di),this}lookAt(t){return jd.lookAt(t),jd.updateMatrix(),this.applyMatrix4(jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ei(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ru);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(t){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];jo.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ni.min,jo.min),ni.expandByPoint(Sn),Sn.addVectors(ni.max,jo.max),ni.expandByPoint(Sn)):(ni.expandByPoint(jo.min),ni.expandByPoint(jo.max))}ni.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Sn.fromBufferAttribute(h,p),m&&(Cs.fromBufferAttribute(t,p),Sn.add(Cs)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let j=0;j<s.count;j++)h[j]=new at,m[j]=new at;const p=new at,_=new at,g=new at,v=new de,y=new de,b=new de,T=new at,M=new at;function x(j,C,D){p.fromBufferAttribute(s,j),_.fromBufferAttribute(s,C),g.fromBufferAttribute(s,D),v.fromBufferAttribute(c,j),y.fromBufferAttribute(c,C),b.fromBufferAttribute(c,D),_.sub(p),g.sub(p),y.sub(v),b.sub(v);const O=1/(y.x*b.y-b.x*y.y);isFinite(O)&&(T.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(O),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(O),h[j].add(T),h[C].add(T),h[D].add(T),m[j].add(M),m[C].add(M),m[D].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let j=0,C=U.length;j<C;++j){const D=U[j],O=D.start,V=D.count;for(let J=O,$=O+V;J<$;J+=3)x(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const L=new at,N=new at,k=new at,G=new at;function I(j){k.fromBufferAttribute(l,j),G.copy(k);const C=h[j];L.copy(C),L.sub(k.multiplyScalar(k.dot(C))).normalize(),N.crossVectors(G,C);const O=N.dot(m[j])<0?-1:1;f.setXYZW(j,L.x,L.y,L.z,O)}for(let j=0,C=U.length;j<C;++j){const D=U[j],O=D.start,V=D.count;for(let J=O,$=O+V;J<$;J+=3)I(t.getX(J+0)),I(t.getX(J+1)),I(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new at,c=new at,f=new at,h=new at,m=new at,p=new at,_=new at,g=new at;if(t)for(let v=0,y=t.count;v<y;v+=3){const b=t.getX(v+0),T=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),h.add(_),m.add(_),p.add(_),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,g=h.normalized,v=new p.constructor(m.length*_);let y=0,b=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*_;for(let x=0;x<_;x++)v[b++]=p[y++]}return new Pi(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xa,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,g=p.length;_<g;_++){const v=p[_],y=t(v,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const F_=new $e,br=new su,Rc=new ru,B_=new at,wc=new at,Cc=new at,Dc=new at,Xd=new at,Nc=new at,I_=new at,Uc=new at;class fa extends wn{constructor(t=new xa,i=new cx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Nc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],g=c[m];_!==0&&(Xd.fromBufferAttribute(g,t),f?Nc.addScaledVector(Xd,_):Nc.addScaledVector(Xd.sub(i),_))}i.add(Nc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),br.copy(t.ray).recast(t.near),!(Rc.containsPoint(br.origin)===!1&&(br.intersectSphere(Rc,B_)===null||br.origin.distanceToSquared(B_)>(t.far-t.near)**2))&&(F_.copy(c).invert(),br.copy(t.ray).applyMatrix4(F_),!(s.boundingBox!==null&&br.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,br)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,T=v.length;b<T;b++){const M=v[b],x=f[M.materialIndex],U=Math.max(M.start,y.start),L=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let N=U,k=L;N<k;N+=3){const G=h.getX(N),I=h.getX(N+1),j=h.getX(N+2);l=Lc(this,x,t,s,p,_,g,G,I,j),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const U=h.getX(M),L=h.getX(M+1),N=h.getX(M+2);l=Lc(this,f,t,s,p,_,g,U,L,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=v.length;b<T;b++){const M=v[b],x=f[M.materialIndex],U=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let N=U,k=L;N<k;N+=3){const G=N,I=N+1,j=N+2;l=Lc(this,x,t,s,p,_,g,G,I,j),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const U=M,L=M+1,N=M+2;l=Lc(this,f,t,s,p,_,g,U,L,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function KE(r,t,i,s,l,c,f,h){let m;if(t.side===Wn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===er,h),m===null)return null;Uc.copy(h),Uc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Uc);return p<i.near||p>i.far?null:{distance:p,point:Uc.clone(),object:r}}function Lc(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,wc),r.getVertexPosition(m,Cc),r.getVertexPosition(p,Dc);const _=KE(r,t,i,s,wc,Cc,Dc,I_);if(_){const g=new at;Si.getBarycoord(I_,wc,Cc,Dc,g),l&&(_.uv=Si.getInterpolatedAttribute(l,h,m,p,g,new de)),c&&(_.uv1=Si.getInterpolatedAttribute(c,h,m,p,g,new de)),f&&(_.normal=Si.getInterpolatedAttribute(f,h,m,p,g,new at),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new at,materialIndex:0};Si.getNormal(wc,Cc,Dc,v.normal),_.face=v,_.barycoord=g}return _}class rl extends xa{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],g=[];let v=0,y=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ei(p,3)),this.setAttribute("normal",new Ei(_,3)),this.setAttribute("uv",new Ei(g,2));function b(T,M,x,U,L,N,k,G,I,j,C){const D=N/I,O=k/j,V=N/2,J=k/2,$=G/2,ut=I+1,F=j+1;let Y=0,q=0;const xt=new at;for(let Et=0;Et<F;Et++){const z=Et*O-J;for(let rt=0;rt<ut;rt++){const yt=rt*D-V;xt[T]=yt*U,xt[M]=z*L,xt[x]=$,p.push(xt.x,xt.y,xt.z),xt[T]=0,xt[M]=0,xt[x]=G>0?1:-1,_.push(xt.x,xt.y,xt.z),g.push(rt/I),g.push(1-Et/j),Y+=1}}for(let Et=0;Et<j;Et++)for(let z=0;z<I;z++){const rt=v+z+ut*Et,yt=v+z+ut*(Et+1),bt=v+(z+1)+ut*(Et+1),Nt=v+(z+1)+ut*Et;m.push(rt,yt,Nt),m.push(yt,bt,Nt),q+=6}h.addGroup(y,q,C),y+=q,v+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vs(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zn(r){const t={};for(let i=0;i<r.length;i++){const s=Vs(r[i]);for(const l in s)t[l]=s[l]}return t}function QE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function dx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const JE={clone:Vs,merge:zn};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ga extends al{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=t1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=QE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class hx extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Za=new at,H_=new de,G_=new de;class pi extends hx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Wh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wh*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Za.x,Za.y).multiplyScalar(-t/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Za.x,Za.y).multiplyScalar(-t/Za.z)}getViewSize(t,i){return this.getViewBounds(t,H_,G_),i.subVectors(G_,H_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ds=-90,Ns=1;class e1 extends wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Ds,Ns,t,i);l.layers=this.layers,this.add(l);const c=new pi(Ds,Ns,t,i);c.layers=this.layers,this.add(c);const f=new pi(Ds,Ns,t,i);f.layers=this.layers,this.add(f);const h=new pi(Ds,Ns,t,i);h.layers=this.layers,this.add(h);const m=new pi(Ds,Ns,t,i);m.layers=this.layers,this.add(m);const p=new pi(Ds,Ns,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Oi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===tu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(g,v,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class px extends Fn{constructor(t=[],i=Is,s,l,c,f,h,m,p,_){super(t,i,s,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class n1 extends Or{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new px(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new rl(5,5,5),c=new ga({name:"CubemapFromEquirect",uniforms:Vs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:$a});c.uniforms.tEquirect.value=i;const f=new fa(l,c),h=i.minFilter;return i.minFilter===Nr&&(i.minFilter=Li),new e1(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Oc extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i1={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),x=this._getHandJoint(p,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&v>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(i1)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Oc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class hp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(t),this.density=i}clone(){return new hp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class a1 extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const qd=new at,r1=new at,s1=new pe;class Ka{constructor(t=new at(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=qd.subVectors(s,i).cross(r1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(qd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||s1.getNormalMatrix(t),l=this.coplanarPoint(qd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new ru,o1=new de(.5,.5),Pc=new at;class pp{constructor(t=new Ka,i=new Ka,s=new Ka,l=new Ka,c=new Ka,f=new Ka){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Oi,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],g=c[5],v=c[6],y=c[7],b=c[8],T=c[9],M=c[10],x=c[11],U=c[12],L=c[13],N=c[14],k=c[15];if(l[0].setComponents(p-f,y-_,x-b,k-U).normalize(),l[1].setComponents(p+f,y+_,x+b,k+U).normalize(),l[2].setComponents(p+h,y+g,x+T,k+L).normalize(),l[3].setComponents(p-h,y-g,x-T,k-L).normalize(),s)l[4].setComponents(m,v,M,N).normalize(),l[5].setComponents(p-m,y-v,x-M,k-N).normalize();else if(l[4].setComponents(p-m,y-v,x-M,k-N).normalize(),i===Oi)l[5].setComponents(p+m,y+v,x+M,k+N).normalize();else if(i===tu)l[5].setComponents(m,v,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(t){Er.center.set(0,0,0);const i=o1.distanceTo(t.center);return Er.radius=.7071067811865476+i,Er.applyMatrix4(t.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Pc.x=l.normal.x>0?t.max.x:t.min.x,Pc.y=l.normal.y>0?t.max.y:t.min.y,Pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class l1 extends al{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const V_=new $e,qh=new su,zc=new ru,Fc=new at;class c1 extends wn{constructor(t=new xa,i=new l1){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,t.ray.intersectsSphere(zc)===!1)return;V_.copy(l).invert(),qh.copy(t.ray).applyMatrix4(V_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,g=s.attributes.position;if(p!==null){const v=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let b=v,T=y;b<T;b++){const M=p.getX(b);Fc.fromBufferAttribute(g,M),k_(Fc,M,m,l,t,i,this)}}else{const v=Math.max(0,f.start),y=Math.min(g.count,f.start+f.count);for(let b=v,T=y;b<T;b++)Fc.fromBufferAttribute(g,b),k_(Fc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function k_(r,t,i,s,l,c,f){const h=qh.distanceSqToPoint(r);if(h<i){const m=new at;qh.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class mx extends Fn{constructor(t,i,s=Ur,l,c,f,h=Ti,m=Ti,p,_=Zo,g=1){if(_!==Zo&&_!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:g};super(v,l,c,f,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class gx extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ou extends xa{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,g=t/h,v=i/m,y=[],b=[],T=[],M=[];for(let x=0;x<_;x++){const U=x*v-f;for(let L=0;L<p;L++){const N=L*g-c;b.push(N,-U,0),T.push(0,0,1),M.push(L/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let U=0;U<h;U++){const L=U+p*x,N=U+p*(x+1),k=U+1+p*(x+1),G=U+1+p*x;y.push(L,N,G),y.push(N,k,G)}this.setIndex(y),this.setAttribute("position",new Ei(b,3)),this.setAttribute("normal",new Ei(T,3)),this.setAttribute("uv",new Ei(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.width,t.height,t.widthSegments,t.heightSegments)}}class u1 extends al{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class f1 extends al{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class _x extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Yd=new $e,j_=new at,X_=new at;class d1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pp,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;j_.setFromMatrixPosition(t.matrixWorld),i.position.copy(j_),X_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(X_),i.updateMatrixWorld(),Yd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Yd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vx extends hx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class h1 extends d1{constructor(){super(new vx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p1 extends _x{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new h1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class m1 extends _x{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class g1 extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const W_=new $e;class _1{constructor(t,i,s=0,l=1/0){this.ray=new su(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new dp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return W_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(W_),this}intersectObject(t,i=!0,s=[]){return Yh(t,this,s,i),s.sort(q_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Yh(t[l],this,s,i);return s.sort(q_),s}}function q_(r,t){return r.distance-t.distance}function Yh(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)Yh(c[f],t,i,!0)}}class Y_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Se(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class v1 extends zr{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Z_(r,t,i,s){const l=x1(s);switch(i){case ex:return r*t;case ix:return r*t/l.components*l.byteLength;case lp:return r*t/l.components*l.byteLength;case ax:return r*t*2/l.components*l.byteLength;case cp:return r*t*2/l.components*l.byteLength;case nx:return r*t*3/l.components*l.byteLength;case bi:return r*t*4/l.components*l.byteLength;case up:return r*t*4/l.components*l.byteLength;case Xc:case Wc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qc:case Yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xh:case Sh:return Math.max(r,16)*Math.max(t,8)/4;case vh:case yh:return Math.max(r,8)*Math.max(t,8)/2;case Mh:case bh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Eh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Th:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case wh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Dh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case zh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Bh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ih:case Hh:case Gh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Vh:case kh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case jh:case Xh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function x1(r){switch(r){case Fi:case Qv:return{byteLength:1,components:1};case qo:case Jv:case el:return{byteLength:2,components:1};case sp:case op:return{byteLength:2,components:4};case Ur:case rp:case ua:return{byteLength:4,components:1};case $v:case tx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function y1(r){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,_),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const _=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,_);else{g.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<g.length;y++){const b=g[v],T=g[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++v,g[v]=T)}g.length=v+1;for(let y=0,b=g.length;y<b;y++){const T=g[y];r.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var S1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,D1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,P1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,j1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,W1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",J1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_T=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ST=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,MT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ET=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$T=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:S1,alphahash_pars_fragment:M1,alphamap_fragment:b1,alphamap_pars_fragment:E1,alphatest_fragment:T1,alphatest_pars_fragment:A1,aomap_fragment:R1,aomap_pars_fragment:w1,batching_pars_vertex:C1,batching_vertex:D1,begin_vertex:N1,beginnormal_vertex:U1,bsdfs:L1,iridescence_fragment:O1,bumpmap_pars_fragment:P1,clipping_planes_fragment:z1,clipping_planes_pars_fragment:F1,clipping_planes_pars_vertex:B1,clipping_planes_vertex:I1,color_fragment:H1,color_pars_fragment:G1,color_pars_vertex:V1,color_vertex:k1,common:j1,cube_uv_reflection_fragment:X1,defaultnormal_vertex:W1,displacementmap_pars_vertex:q1,displacementmap_vertex:Y1,emissivemap_fragment:Z1,emissivemap_pars_fragment:K1,colorspace_fragment:Q1,colorspace_pars_fragment:J1,envmap_fragment:$1,envmap_common_pars_fragment:tT,envmap_pars_fragment:eT,envmap_pars_vertex:nT,envmap_physical_pars_fragment:hT,envmap_vertex:iT,fog_vertex:aT,fog_pars_vertex:rT,fog_fragment:sT,fog_pars_fragment:oT,gradientmap_pars_fragment:lT,lightmap_pars_fragment:cT,lights_lambert_fragment:uT,lights_lambert_pars_fragment:fT,lights_pars_begin:dT,lights_toon_fragment:pT,lights_toon_pars_fragment:mT,lights_phong_fragment:gT,lights_phong_pars_fragment:_T,lights_physical_fragment:vT,lights_physical_pars_fragment:xT,lights_fragment_begin:yT,lights_fragment_maps:ST,lights_fragment_end:MT,logdepthbuf_fragment:bT,logdepthbuf_pars_fragment:ET,logdepthbuf_pars_vertex:TT,logdepthbuf_vertex:AT,map_fragment:RT,map_pars_fragment:wT,map_particle_fragment:CT,map_particle_pars_fragment:DT,metalnessmap_fragment:NT,metalnessmap_pars_fragment:UT,morphinstance_vertex:LT,morphcolor_vertex:OT,morphnormal_vertex:PT,morphtarget_pars_vertex:zT,morphtarget_vertex:FT,normal_fragment_begin:BT,normal_fragment_maps:IT,normal_pars_fragment:HT,normal_pars_vertex:GT,normal_vertex:VT,normalmap_pars_fragment:kT,clearcoat_normal_fragment_begin:jT,clearcoat_normal_fragment_maps:XT,clearcoat_pars_fragment:WT,iridescence_pars_fragment:qT,opaque_fragment:YT,packing:ZT,premultiplied_alpha_fragment:KT,project_vertex:QT,dithering_fragment:JT,dithering_pars_fragment:$T,roughnessmap_fragment:tA,roughnessmap_pars_fragment:eA,shadowmap_pars_fragment:nA,shadowmap_pars_vertex:iA,shadowmap_vertex:aA,shadowmask_pars_fragment:rA,skinbase_vertex:sA,skinning_pars_vertex:oA,skinning_vertex:lA,skinnormal_vertex:cA,specularmap_fragment:uA,specularmap_pars_fragment:fA,tonemapping_fragment:dA,tonemapping_pars_fragment:hA,transmission_fragment:pA,transmission_pars_fragment:mA,uv_pars_fragment:gA,uv_pars_vertex:_A,uv_vertex:vA,worldpos_vertex:xA,background_vert:yA,background_frag:SA,backgroundCube_vert:MA,backgroundCube_frag:bA,cube_vert:EA,cube_frag:TA,depth_vert:AA,depth_frag:RA,distanceRGBA_vert:wA,distanceRGBA_frag:CA,equirect_vert:DA,equirect_frag:NA,linedashed_vert:UA,linedashed_frag:LA,meshbasic_vert:OA,meshbasic_frag:PA,meshlambert_vert:zA,meshlambert_frag:FA,meshmatcap_vert:BA,meshmatcap_frag:IA,meshnormal_vert:HA,meshnormal_frag:GA,meshphong_vert:VA,meshphong_frag:kA,meshphysical_vert:jA,meshphysical_frag:XA,meshtoon_vert:WA,meshtoon_frag:qA,points_vert:YA,points_frag:ZA,shadow_vert:KA,shadow_frag:QA,sprite_vert:JA,sprite_frag:$A},zt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Ui={basic:{uniforms:zn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:zn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new _e(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:zn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:zn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:zn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new _e(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:zn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:zn([zt.points,zt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:zn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:zn([zt.common,zt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:zn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:zn([zt.sprite,zt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:zn([zt.common,zt.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:zn([zt.lights,zt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Ui.physical={uniforms:zn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Bc={r:0,b:0,g:0},Tr=new ma,t2=new $e;function e2(r,t,i,s,l,c,f){const h=new _e(0);let m=c===!0?0:1,p,_,g=null,v=0,y=null;function b(L){let N=L.isScene===!0?L.background:null;return N&&N.isTexture&&(N=(L.backgroundBlurriness>0?i:t).get(N)),N}function T(L){let N=!1;const k=b(L);k===null?x(h,m):k&&k.isColor&&(x(k,1),N=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(L,N){const k=b(N);k&&(k.isCubeTexture||k.mapping===au)?(_===void 0&&(_=new fa(new rl(1,1,1),new ga({name:"BackgroundCubeMaterial",uniforms:Vs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Tr.copy(N.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),_.material.uniforms.envMap.value=k,_.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(t2.makeRotationFromEuler(Tr)),_.material.toneMapped=De.getTransfer(k.colorSpace)!==Ve,(g!==k||v!==k.version||y!==r.toneMapping)&&(_.material.needsUpdate=!0,g=k,v=k.version,y=r.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new fa(new ou(2,2),new ga({name:"BackgroundMaterial",uniforms:Vs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=De.getTransfer(k.colorSpace)!==Ve,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||v!==k.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,g=k,v=k.version,y=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,N){L.getRGB(Bc,dx(r)),s.buffers.color.setClear(Bc.r,Bc.g,Bc.b,N,f)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,N=1){h.set(L),m=N,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(h,m)},render:T,addToRenderList:M,dispose:U}}function n2(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function h(D,O,V,J,$){let ut=!1;const F=g(J,V,O);c!==F&&(c=F,p(c.object)),ut=y(D,J,V,$),ut&&b(D,J,V,$),$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,N(D,O,V,J),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function _(D){return r.deleteVertexArray(D)}function g(D,O,V){const J=V.wireframe===!0;let $=s[D.id];$===void 0&&($={},s[D.id]=$);let ut=$[O.id];ut===void 0&&(ut={},$[O.id]=ut);let F=ut[J];return F===void 0&&(F=v(m()),ut[J]=F),F}function v(D){const O=[],V=[],J=[];for(let $=0;$<i;$++)O[$]=0,V[$]=0,J[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:J,object:D,attributes:{},index:null}}function y(D,O,V,J){const $=c.attributes,ut=O.attributes;let F=0;const Y=V.getAttributes();for(const q in Y)if(Y[q].location>=0){const Et=$[q];let z=ut[q];if(z===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),Et===void 0||Et.attribute!==z||z&&Et.data!==z.data)return!0;F++}return c.attributesNum!==F||c.index!==J}function b(D,O,V,J){const $={},ut=O.attributes;let F=0;const Y=V.getAttributes();for(const q in Y)if(Y[q].location>=0){let Et=ut[q];Et===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Et=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Et=D.instanceColor));const z={};z.attribute=Et,Et&&Et.data&&(z.data=Et.data),$[q]=z,F++}c.attributes=$,c.attributesNum=F,c.index=J}function T(){const D=c.newAttributes;for(let O=0,V=D.length;O<V;O++)D[O]=0}function M(D){x(D,0)}function x(D,O){const V=c.newAttributes,J=c.enabledAttributes,$=c.attributeDivisors;V[D]=1,J[D]===0&&(r.enableVertexAttribArray(D),J[D]=1),$[D]!==O&&(r.vertexAttribDivisor(D,O),$[D]=O)}function U(){const D=c.newAttributes,O=c.enabledAttributes;for(let V=0,J=O.length;V<J;V++)O[V]!==D[V]&&(r.disableVertexAttribArray(V),O[V]=0)}function L(D,O,V,J,$,ut,F){F===!0?r.vertexAttribIPointer(D,O,V,$,ut):r.vertexAttribPointer(D,O,V,J,$,ut)}function N(D,O,V,J){T();const $=J.attributes,ut=V.getAttributes(),F=O.defaultAttributeValues;for(const Y in ut){const q=ut[Y];if(q.location>=0){let xt=$[Y];if(xt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor)),xt!==void 0){const Et=xt.normalized,z=xt.itemSize,rt=t.get(xt);if(rt===void 0)continue;const yt=rt.buffer,bt=rt.type,Nt=rt.bytesPerElement,tt=bt===r.INT||bt===r.UNSIGNED_INT||xt.gpuType===rp;if(xt.isInterleavedBufferAttribute){const lt=xt.data,At=lt.stride,Lt=xt.offset;if(lt.isInstancedInterleavedBuffer){for(let It=0;It<q.locationSize;It++)x(q.location+It,lt.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let It=0;It<q.locationSize;It++)M(q.location+It);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let It=0;It<q.locationSize;It++)L(q.location+It,z/q.locationSize,bt,Et,At*Nt,(Lt+z/q.locationSize*It)*Nt,tt)}else{if(xt.isInstancedBufferAttribute){for(let lt=0;lt<q.locationSize;lt++)x(q.location+lt,xt.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let lt=0;lt<q.locationSize;lt++)M(q.location+lt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let lt=0;lt<q.locationSize;lt++)L(q.location+lt,z/q.locationSize,bt,Et,z*Nt,z/q.locationSize*lt*Nt,tt)}}else if(F!==void 0){const Et=F[Y];if(Et!==void 0)switch(Et.length){case 2:r.vertexAttrib2fv(q.location,Et);break;case 3:r.vertexAttrib3fv(q.location,Et);break;case 4:r.vertexAttrib4fv(q.location,Et);break;default:r.vertexAttrib1fv(q.location,Et)}}}}U()}function k(){j();for(const D in s){const O=s[D];for(const V in O){const J=O[V];for(const $ in J)_(J[$].object),delete J[$];delete O[V]}delete s[D]}}function G(D){if(s[D.id]===void 0)return;const O=s[D.id];for(const V in O){const J=O[V];for(const $ in J)_(J[$].object),delete J[$];delete O[V]}delete s[D.id]}function I(D){for(const O in s){const V=s[O];if(V[D.id]===void 0)continue;const J=V[D.id];for(const $ in J)_(J[$].object),delete J[$];delete V[D.id]}}function j(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:C,dispose:k,releaseStatesOfGeometry:G,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:M,disableUnusedAttributes:U}}function i2(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function h(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];i.update(y,s,1)}function m(p,_,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],_[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,v,0,g);let b=0;for(let T=0;T<g;T++)b+=_[T]*v[T];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function a2(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==bi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const j=I===el&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Fi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ua&&!j)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=b>0,G=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:N,vertexTextures:k,maxSamples:G}}function r2(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Ka,h=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||s!==0||l;return l=v,s=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,y){const b=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,x=r.get(g);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const U=c?0:s,L=U*4;let N=x.clippingState||null;m.value=N,N=_(b,v,L,y);for(let k=0;k!==L;++k)N[k]=i[k];x.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,v,y,b){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=m.value,b!==!0||M===null){const x=y+T*4,U=v.matrixWorldInverse;h.getNormalMatrix(U),(M===null||M.length<x)&&(M=new Float32Array(x));for(let L=0,N=y;L!==T;++L,N+=4)f.copy(g[L]).applyMatrix4(U,h),f.normal.toArray(M,N),M[N+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function s2(r){let t=new WeakMap;function i(f,h){return h===ph?f.mapping=Is:h===mh&&(f.mapping=Hs),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===ph||h===mh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new n1(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Os=4,K_=[.125,.215,.35,.446,.526,.582],Cr=20,Zd=new vx,Q_=new _e;let Kd=null,Qd=0,Jd=0,$d=!1;const Rr=(1+Math.sqrt(5))/2,Us=1/Rr,J_=[new at(-Rr,Us,0),new at(Rr,Us,0),new at(-Us,0,Rr),new at(Us,0,Rr),new at(0,Rr,-Us),new at(0,Rr,Us),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)],o2=new at;class $_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=o2}=c;Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kd,Qd,Jd),this._renderer.xr.enabled=$d,t.scissorTest=!1,Ic(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:el,format:bi,colorSpace:Gs,depthBuffer:!1},l=tv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tv(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l2(c)),this._blurMaterial=c2(c,t,i)}return l}_compileMaterial(t){const i=new fa(this._lodPlanes[0],t);this._renderer.compile(i,Zd)}_sceneToCubeUV(t,i,s,l,c){const m=new pi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Q_),g.toneMapping=tr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const T=new cx({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),M=new fa(new rl,T);let x=!1;const U=t.background;U?U.isColor&&(T.color.copy(U),t.background=null,x=!0):(T.color.copy(Q_),x=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):N===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const k=this._cubeSize;Ic(l,N*k,L>2?k:0,k,k),g.setRenderTarget(l),x&&g.render(M,m),g.render(t,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=y,g.autoClear=v,t.background=U}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Is||t.mapping===Hs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ev());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new fa(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Ic(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Zd)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=J_[(l-c-1)%J_.length];this._blur(t,c-1,c,f,h)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new fa(this._lodPlanes[l],p),v=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Cr-1),T=c/b,M=isFinite(c)?1+Math.floor(_*T):Cr;M>Cr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cr}`);const x=[];let U=0;for(let I=0;I<Cr;++I){const j=I/T,C=Math.exp(-j*j/2);x.push(C),I===0?U+=C:I<M&&(U+=2*C)}for(let I=0;I<x.length;I++)x[I]=x[I]/U;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=b,v.mipInt.value=L-s;const N=this._sizeLods[l],k=3*N*(l>L-Os?l-L+Os:0),G=4*(this._cubeSize-N);Ic(i,k,G,3*N,2*N),m.setRenderTarget(i),m.render(g,Zd)}}function l2(r){const t=[],i=[],s=[];let l=r;const c=r-Os+1+K_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>r-Os?m=K_[f-r+Os-1]:f===0&&(m=0),s.push(m);const p=1/(h-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,T=3,M=2,x=1,U=new Float32Array(T*b*y),L=new Float32Array(M*b*y),N=new Float32Array(x*b*y);for(let G=0;G<y;G++){const I=G%3*2/3-1,j=G>2?0:-1,C=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];U.set(C,T*b*G),L.set(v,M*b*G);const D=[G,G,G,G,G,G];N.set(D,x*b*G)}const k=new xa;k.setAttribute("position",new Pi(U,T)),k.setAttribute("uv",new Pi(L,M)),k.setAttribute("faceIndex",new Pi(N,x)),t.push(k),l>Os&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function tv(r,t,i){const s=new Or(r,t,i);return s.texture.mapping=au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ic(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function c2(r,t,i){const s=new Float32Array(Cr),l=new at(0,1,0);return new ga({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function ev(){return new ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function nv(){return new ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function mp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function u2(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===ph||m===mh,_=m===Is||m===Hs;if(p||_){let g=t.get(h);const v=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new $_(r)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new $_(r)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function f2(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Qo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function d2(r,t,i,s){const l={},c=new WeakMap;function f(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",f),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const y in v)t.update(v[y],r.ARRAY_BUFFER)}function p(g){const v=[],y=g.index,b=g.attributes.position;let T=0;if(y!==null){const U=y.array;T=y.version;for(let L=0,N=U.length;L<N;L+=3){const k=U[L+0],G=U[L+1],I=U[L+2];v.push(k,G,G,I,I,k)}}else if(b!==void 0){const U=b.array;T=b.version;for(let L=0,N=U.length/3-1;L<N;L+=3){const k=L+0,G=L+1,I=L+2;v.push(k,G,G,I,I,k)}}else return;const M=new(sx(v)?fx:ux)(v,1);M.version=T;const x=c.get(g);x&&t.remove(x),c.set(g,M)}function _(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function h2(r,t,i){let s;function l(v){s=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,y){r.drawElements(s,y,c,v*f),i.update(y,s,1)}function p(v,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,v*f,b),i.update(y,s,b))}function _(v,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];i.update(M,s,1)}function g(v,y,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)p(v[x]/f,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,T,0,b);let x=0;for(let U=0;U<b;U++)x+=y[U]*T[U];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function p2(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function m2(r,t,i){const s=new WeakMap,l=new an;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let v=s.get(h);if(v===void 0||v.count!==g){let D=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var y=D;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let N=0;b===!0&&(N=1),T===!0&&(N=2),M===!0&&(N=3);let k=h.attributes.position.count*N,G=1;k>t.maxTextureSize&&(G=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const I=new Float32Array(k*G*4*g),j=new ox(I,k,G,g);j.type=ua,j.needsUpdate=!0;const C=N*4;for(let O=0;O<g;O++){const V=x[O],J=U[O],$=L[O],ut=k*G*4*O;for(let F=0;F<V.count;F++){const Y=F*C;b===!0&&(l.fromBufferAttribute(V,F),I[ut+Y+0]=l.x,I[ut+Y+1]=l.y,I[ut+Y+2]=l.z,I[ut+Y+3]=0),T===!0&&(l.fromBufferAttribute(J,F),I[ut+Y+4]=l.x,I[ut+Y+5]=l.y,I[ut+Y+6]=l.z,I[ut+Y+7]=0),M===!0&&(l.fromBufferAttribute($,F),I[ut+Y+8]=l.x,I[ut+Y+9]=l.y,I[ut+Y+10]=l.z,I[ut+Y+11]=$.itemSize===4?l.w:1)}}v={count:g,texture:j,size:new de(k,G)},s.set(h,v),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const T=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function g2(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const yx=new Fn,iv=new mx(1,1),Sx=new ox,Mx=new IE,bx=new px,av=[],rv=[],sv=new Float32Array(16),ov=new Float32Array(9),lv=new Float32Array(4);function Xs(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=av[l];if(c===void 0&&(c=new Float32Array(l),av[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function lu(r,t){let i=rv[t];i===void 0&&(i=new Int32Array(t),rv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function _2(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function v2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function x2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function y2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function S2(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;lv.set(s),r.uniformMatrix2fv(this.addr,!1,lv),vn(i,s)}}function M2(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;ov.set(s),r.uniformMatrix3fv(this.addr,!1,ov),vn(i,s)}}function b2(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;sv.set(s),r.uniformMatrix4fv(this.addr,!1,sv),vn(i,s)}}function E2(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function T2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function A2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function R2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function w2(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function C2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function D2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function N2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function U2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(iv.compareFunction=rx,c=iv):c=yx,i.setTexture2D(t||c,l)}function L2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Mx,l)}function O2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||bx,l)}function P2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Sx,l)}function z2(r){switch(r){case 5126:return _2;case 35664:return v2;case 35665:return x2;case 35666:return y2;case 35674:return S2;case 35675:return M2;case 35676:return b2;case 5124:case 35670:return E2;case 35667:case 35671:return T2;case 35668:case 35672:return A2;case 35669:case 35673:return R2;case 5125:return w2;case 36294:return C2;case 36295:return D2;case 36296:return N2;case 35678:case 36198:case 36298:case 36306:case 35682:return U2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return O2;case 36289:case 36303:case 36311:case 36292:return P2}}function F2(r,t){r.uniform1fv(this.addr,t)}function B2(r,t){const i=Xs(t,this.size,2);r.uniform2fv(this.addr,i)}function I2(r,t){const i=Xs(t,this.size,3);r.uniform3fv(this.addr,i)}function H2(r,t){const i=Xs(t,this.size,4);r.uniform4fv(this.addr,i)}function G2(r,t){const i=Xs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function V2(r,t){const i=Xs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function k2(r,t){const i=Xs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function j2(r,t){r.uniform1iv(this.addr,t)}function X2(r,t){r.uniform2iv(this.addr,t)}function W2(r,t){r.uniform3iv(this.addr,t)}function q2(r,t){r.uniform4iv(this.addr,t)}function Y2(r,t){r.uniform1uiv(this.addr,t)}function Z2(r,t){r.uniform2uiv(this.addr,t)}function K2(r,t){r.uniform3uiv(this.addr,t)}function Q2(r,t){r.uniform4uiv(this.addr,t)}function J2(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||yx,c[f])}function $2(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Mx,c[f])}function tR(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||bx,c[f])}function eR(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Sx,c[f])}function nR(r){switch(r){case 5126:return F2;case 35664:return B2;case 35665:return I2;case 35666:return H2;case 35674:return G2;case 35675:return V2;case 35676:return k2;case 5124:case 35670:return j2;case 35667:case 35671:return X2;case 35668:case 35672:return W2;case 35669:case 35673:return q2;case 5125:return Y2;case 36294:return Z2;case 36295:return K2;case 36296:return Q2;case 35678:case 36198:case 36298:case 36306:case 35682:return J2;case 35679:case 36299:case 36307:return $2;case 35680:case 36300:case 36308:case 36293:return tR;case 36289:case 36303:case 36311:case 36292:return eR}}class iR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=z2(i.type)}}class aR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=nR(i.type)}}class rR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const th=/(\w+)(\])?(\[|\.)?/g;function cv(r,t){r.seq.push(t),r.map[t.id]=t}function sR(r,t,i){const s=r.name,l=s.length;for(th.lastIndex=0;;){const c=th.exec(s),f=th.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){cv(i,p===void 0?new iR(h,r,t):new aR(h,r,t));break}else{let g=i.map[h];g===void 0&&(g=new rR(h),cv(i,g)),i=g}}}class Kc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);sR(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function uv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const oR=37297;let lR=0;function cR(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const fv=new pe;function uR(r){De._getMatrix(fv,De.workingColorSpace,r);const t=`mat3( ${fv.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(r)){case $c:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function dv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+cR(r.getShaderSource(t),h)}else return c}function fR(r,t){const i=uR(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function dR(r,t){let i;switch(t){case fE:i="Linear";break;case dE:i="Reinhard";break;case hE:i="Cineon";break;case pE:i="ACESFilmic";break;case gE:i="AgX";break;case _E:i="Neutral";break;case mE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new at;function hR(){De.getLuminanceCoefficients(Hc);const r=Hc.x.toFixed(4),t=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function mR(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function gR(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function Xo(r){return r!==""}function hv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _R=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(r){return r.replace(_R,xR)}const vR=new Map;function xR(r,t){let i=me[t];if(i===void 0){const s=vR.get(t);if(s!==void 0)i=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Zh(i)}const yR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mv(r){return r.replace(yR,SR)}function SR(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function gv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function MR(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Yv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===jb?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===la&&(t="SHADOWMAP_TYPE_VSM"),t}function bR(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Is:case Hs:t="ENVMAP_TYPE_CUBE";break;case au:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ER(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function TR(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Zv:t="ENVMAP_BLENDING_MULTIPLY";break;case cE:t="ENVMAP_BLENDING_MIX";break;case uE:t="ENVMAP_BLENDING_ADD";break}return t}function AR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function RR(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=MR(i),p=bR(i),_=ER(i),g=TR(i),v=AR(i),y=pR(i),b=mR(c),T=l.createProgram();let M,x,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Xo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Xo).join(`
`),x.length>0&&(x+=`
`)):(M=[gv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),x=[gv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==tr?"#define TONE_MAPPING":"",i.toneMapping!==tr?me.tonemapping_pars_fragment:"",i.toneMapping!==tr?dR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,fR("linearToOutputTexel",i.outputColorSpace),hR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),f=Zh(f),f=hv(f,i),f=pv(f,i),h=Zh(h),h=hv(h,i),h=pv(h,i),f=mv(f),h=mv(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===E_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===E_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=U+M+f,N=U+x+h,k=uv(l,l.VERTEX_SHADER,L),G=uv(l,l.FRAGMENT_SHADER,N);l.attachShader(T,k),l.attachShader(T,G),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function I(O){if(r.debug.checkShaderErrors){const V=l.getProgramInfoLog(T)||"",J=l.getShaderInfoLog(k)||"",$=l.getShaderInfoLog(G)||"",ut=V.trim(),F=J.trim(),Y=$.trim();let q=!0,xt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,k,G);else{const Et=dv(l,k,"vertex"),z=dv(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ut+`
`+Et+`
`+z)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(F===""||Y==="")&&(xt=!1);xt&&(O.diagnostics={runnable:q,programLog:ut,vertexShader:{log:F,prefix:M},fragmentShader:{log:Y,prefix:x}})}l.deleteShader(k),l.deleteShader(G),j=new Kc(l,T),C=gR(l,T)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,oR)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lR++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=k,this.fragmentShader=G,this}let wR=0;class CR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new DR(t),i.set(t,s)),s}}class DR{constructor(t){this.id=wR++,this.code=t,this.usedTimes=0}}function NR(r,t,i,s,l,c,f){const h=new dp,m=new CR,p=new Set,_=[],g=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,D,O,V,J){const $=V.fog,ut=J.geometry,F=C.isMeshStandardMaterial?V.environment:null,Y=(C.isMeshStandardMaterial?i:t).get(C.envMap||F),q=Y&&Y.mapping===au?Y.image.height:null,xt=b[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const Et=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,z=Et!==void 0?Et.length:0;let rt=0;ut.morphAttributes.position!==void 0&&(rt=1),ut.morphAttributes.normal!==void 0&&(rt=2),ut.morphAttributes.color!==void 0&&(rt=3);let yt,bt,Nt,tt;if(xt){const Ae=Ui[xt];yt=Ae.vertexShader,bt=Ae.fragmentShader}else yt=C.vertexShader,bt=C.fragmentShader,m.update(C),Nt=m.getVertexShaderID(C),tt=m.getFragmentShaderID(C);const lt=r.getRenderTarget(),At=r.state.buffers.depth.getReversed(),Lt=J.isInstancedMesh===!0,It=J.isBatchedMesh===!0,se=!!C.map,Ue=!!C.matcap,B=!!Y,qt=!!C.aoMap,Yt=!!C.lightMap,Kt=!!C.bumpMap,kt=!!C.normalMap,je=!!C.displacementMap,Wt=!!C.emissiveMap,le=!!C.metalnessMap,tn=!!C.roughnessMap,Qe=C.anisotropy>0,P=C.clearcoat>0,E=C.dispersion>0,it=C.iridescence>0,mt=C.sheen>0,Mt=C.transmission>0,ht=Qe&&!!C.anisotropyMap,$t=P&&!!C.clearcoatMap,Ct=P&&!!C.clearcoatNormalMap,Qt=P&&!!C.clearcoatRoughnessMap,Jt=it&&!!C.iridescenceMap,Rt=it&&!!C.iridescenceThicknessMap,Dt=mt&&!!C.sheenColorMap,te=mt&&!!C.sheenRoughnessMap,Bt=!!C.specularMap,Ot=!!C.specularColorMap,ue=!!C.specularIntensityMap,W=Mt&&!!C.transmissionMap,wt=Mt&&!!C.thicknessMap,Ut=!!C.gradientMap,Ht=!!C.alphaMap,Tt=C.alphaTest>0,vt=!!C.alphaHash,Gt=!!C.extensions;let oe=tr;C.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(oe=r.toneMapping);const Pe={shaderID:xt,shaderType:C.type,shaderName:C.name,vertexShader:yt,fragmentShader:bt,defines:C.defines,customVertexShaderID:Nt,customFragmentShaderID:tt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:It,batchingColor:It&&J._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&J.instanceColor!==null,instancingMorph:Lt&&J.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:lt===null?r.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Gs,alphaToCoverage:!!C.alphaToCoverage,map:se,matcap:Ue,envMap:B,envMapMode:B&&Y.mapping,envMapCubeUVHeight:q,aoMap:qt,lightMap:Yt,bumpMap:Kt,normalMap:kt,displacementMap:v&&je,emissiveMap:Wt,normalMapObjectSpace:kt&&C.normalMapType===ME,normalMapTangentSpace:kt&&C.normalMapType===SE,metalnessMap:le,roughnessMap:tn,anisotropy:Qe,anisotropyMap:ht,clearcoat:P,clearcoatMap:$t,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Qt,dispersion:E,iridescence:it,iridescenceMap:Jt,iridescenceThicknessMap:Rt,sheen:mt,sheenColorMap:Dt,sheenRoughnessMap:te,specularMap:Bt,specularColorMap:Ot,specularIntensityMap:ue,transmission:Mt,transmissionMap:W,thicknessMap:wt,gradientMap:Ut,opaque:C.transparent===!1&&C.blending===zs&&C.alphaToCoverage===!1,alphaMap:Ht,alphaTest:Tt,alphaHash:vt,combine:C.combine,mapUv:se&&T(C.map.channel),aoMapUv:qt&&T(C.aoMap.channel),lightMapUv:Yt&&T(C.lightMap.channel),bumpMapUv:Kt&&T(C.bumpMap.channel),normalMapUv:kt&&T(C.normalMap.channel),displacementMapUv:je&&T(C.displacementMap.channel),emissiveMapUv:Wt&&T(C.emissiveMap.channel),metalnessMapUv:le&&T(C.metalnessMap.channel),roughnessMapUv:tn&&T(C.roughnessMap.channel),anisotropyMapUv:ht&&T(C.anisotropyMap.channel),clearcoatMapUv:$t&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:te&&T(C.sheenRoughnessMap.channel),specularMapUv:Bt&&T(C.specularMap.channel),specularColorMapUv:Ot&&T(C.specularColorMap.channel),specularIntensityMapUv:ue&&T(C.specularIntensityMap.channel),transmissionMapUv:W&&T(C.transmissionMap.channel),thicknessMapUv:wt&&T(C.thicknessMap.channel),alphaMapUv:Ht&&T(C.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(kt||Qe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ut.attributes.uv&&(se||Ht),fog:!!$,useFog:C.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:At,skinning:J.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:rt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:se&&C.map.isVideoTexture===!0&&De.getTransfer(C.map.colorSpace)===Ve,decodeVideoTextureEmissive:Wt&&C.emissiveMap.isVideoTexture===!0&&De.getTransfer(C.emissiveMap.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ca,flipSided:C.side===Wn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Gt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&C.extensions.multiDraw===!0||It)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function x(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const O in C.defines)D.push(O),D.push(C.defines[O]);return C.isRawShaderMaterial===!1&&(U(D,C),L(D,C),D.push(r.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function U(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function L(C,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),C.push(h.mask)}function N(C){const D=b[C.type];let O;if(D){const V=Ui[D];O=JE.clone(V.uniforms)}else O=C.uniforms;return O}function k(C,D){let O;for(let V=0,J=_.length;V<J;V++){const $=_[V];if($.cacheKey===D){O=$,++O.usedTimes;break}}return O===void 0&&(O=new RR(r,D,C,c),_.push(O)),O}function G(C){if(--C.usedTimes===0){const D=_.indexOf(C);_[D]=_[_.length-1],_.pop(),C.destroy()}}function I(C){m.remove(C)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:N,acquireProgram:k,releaseProgram:G,releaseShaderCache:I,programs:_,dispose:j}}function UR(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function LR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function _v(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function vv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g,v,y,b,T,M){let x=r[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:b,renderOrder:g.renderOrder,z:T,group:M},r[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=b,x.renderOrder=g.renderOrder,x.z=T,x.group=M),t++,x}function h(g,v,y,b,T,M){const x=f(g,v,y,b,T,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):i.push(x)}function m(g,v,y,b,T,M){const x=f(g,v,y,b,T,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,v){i.length>1&&i.sort(g||LR),s.length>1&&s.sort(v||_v),l.length>1&&l.sort(v||_v)}function _(){for(let g=t,v=r.length;g<v;g++){const y=r[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function OR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new vv,r.set(s,[f])):l>=c.length?(f=new vv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function PR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new at,color:new _e};break;case"SpotLight":i={position:new at,direction:new at,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new _e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":i={color:new _e,position:new at,halfWidth:new at,halfHeight:new at};break}return r[t.id]=i,i}}}function zR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let FR=0;function BR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function IR(r){const t=new PR,i=zR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new at);const l=new at,c=new $e,f=new $e;function h(p){let _=0,g=0,v=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,b=0,T=0,M=0,x=0,U=0,L=0,N=0,k=0,G=0,I=0;p.sort(BR);for(let C=0,D=p.length;C<D;C++){const O=p[C],V=O.color,J=O.intensity,$=O.distance,ut=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)_+=V.r*J,g+=V.g*J,v+=V.b*J;else if(O.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(O.sh.coefficients[F],J);I++}else if(O.isDirectionalLight){const F=t.get(O);if(F.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const Y=O.shadow,q=i.get(O);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,s.directionalShadow[y]=q,s.directionalShadowMap[y]=ut,s.directionalShadowMatrix[y]=O.shadow.matrix,U++}s.directional[y]=F,y++}else if(O.isSpotLight){const F=t.get(O);F.position.setFromMatrixPosition(O.matrixWorld),F.color.copy(V).multiplyScalar(J),F.distance=$,F.coneCos=Math.cos(O.angle),F.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),F.decay=O.decay,s.spot[T]=F;const Y=O.shadow;if(O.map&&(s.spotLightMap[k]=O.map,k++,Y.updateMatrices(O),O.castShadow&&G++),s.spotLightMatrix[T]=Y.matrix,O.castShadow){const q=i.get(O);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,s.spotShadow[T]=q,s.spotShadowMap[T]=ut,N++}T++}else if(O.isRectAreaLight){const F=t.get(O);F.color.copy(V).multiplyScalar(J),F.halfWidth.set(O.width*.5,0,0),F.halfHeight.set(0,O.height*.5,0),s.rectArea[M]=F,M++}else if(O.isPointLight){const F=t.get(O);if(F.color.copy(O.color).multiplyScalar(O.intensity),F.distance=O.distance,F.decay=O.decay,O.castShadow){const Y=O.shadow,q=i.get(O);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,s.pointShadow[b]=q,s.pointShadowMap[b]=ut,s.pointShadowMatrix[b]=O.shadow.matrix,L++}s.point[b]=F,b++}else if(O.isHemisphereLight){const F=t.get(O);F.skyColor.copy(O.color).multiplyScalar(J),F.groundColor.copy(O.groundColor).multiplyScalar(J),s.hemi[x]=F,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=v;const j=s.hash;(j.directionalLength!==y||j.pointLength!==b||j.spotLength!==T||j.rectAreaLength!==M||j.hemiLength!==x||j.numDirectionalShadows!==U||j.numPointShadows!==L||j.numSpotShadows!==N||j.numSpotMaps!==k||j.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=N+k-G,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=I,j.directionalLength=y,j.pointLength=b,j.spotLength=T,j.rectAreaLength=M,j.hemiLength=x,j.numDirectionalShadows=U,j.numPointShadows=L,j.numSpotShadows=N,j.numSpotMaps=k,j.numLightProbes=I,s.version=FR++)}function m(p,_){let g=0,v=0,y=0,b=0,T=0;const M=_.matrixWorldInverse;for(let x=0,U=p.length;x<U;x++){const L=p[x];if(L.isDirectionalLight){const N=s.directional[g];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),g++}else if(L.isSpotLight){const N=s.spot[y];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),b++}else if(L.isPointLight){const N=s.point[v];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),v++}else if(L.isHemisphereLight){const N=s.hemi[T];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:s}}function xv(r){const t=new IR(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function HR(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new xv(r),t.set(l,[h])):c>=f.length?(h=new xv(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const GR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kR(r,t,i){let s=new pp;const l=new de,c=new de,f=new an,h=new u1({depthPacking:yE}),m=new f1,p={},_=i.maxTextureSize,g={[er]:Wn,[Wn]:er,[ca]:ca},v=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:GR,fragmentShader:VR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new xa;b.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new fa(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let x=this.type;this.render=function(G,I,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const C=r.getRenderTarget(),D=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),V=r.state;V.setBlending($a),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const J=x!==la&&this.type===la,$=x===la&&this.type!==la;for(let ut=0,F=G.length;ut<F;ut++){const Y=G[ut],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const xt=q.getFrameExtents();if(l.multiply(xt),c.copy(q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/xt.x),l.x=c.x*xt.x,q.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/xt.y),l.y=c.y*xt.y,q.mapSize.y=c.y)),q.map===null||J===!0||$===!0){const z=this.type!==la?{minFilter:Ti,magFilter:Ti}:{};q.map!==null&&q.map.dispose(),q.map=new Or(l.x,l.y,z),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const Et=q.getViewportCount();for(let z=0;z<Et;z++){const rt=q.getViewport(z);f.set(c.x*rt.x,c.y*rt.y,c.x*rt.z,c.y*rt.w),V.viewport(f),q.updateMatrices(Y,z),s=q.getFrustum(),N(I,j,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===la&&U(q,j),q.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(C,D,O)};function U(G,I){const j=t.update(T);v.defines.VSM_SAMPLES!==G.blurSamples&&(v.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Or(l.x,l.y)),v.uniforms.shadow_pass.value=G.map.texture,v.uniforms.resolution.value=G.mapSize,v.uniforms.radius.value=G.radius,r.setRenderTarget(G.mapPass),r.clear(),r.renderBufferDirect(I,null,j,v,T,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,r.setRenderTarget(G.map),r.clear(),r.renderBufferDirect(I,null,j,y,T,null)}function L(G,I,j,C){let D=null;const O=j.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(O!==void 0)D=O;else if(D=j.isPointLight===!0?m:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const V=D.uuid,J=I.uuid;let $=p[V];$===void 0&&($={},p[V]=$);let ut=$[J];ut===void 0&&(ut=D.clone(),$[J]=ut,I.addEventListener("dispose",k)),D=ut}if(D.visible=I.visible,D.wireframe=I.wireframe,C===la?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:g[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,j.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const V=r.properties.get(D);V.light=j}return D}function N(G,I,j,C,D){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&D===la)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,G.matrixWorld);const J=t.update(G),$=G.material;if(Array.isArray($)){const ut=J.groups;for(let F=0,Y=ut.length;F<Y;F++){const q=ut[F],xt=$[q.materialIndex];if(xt&&xt.visible){const Et=L(G,xt,C,D);G.onBeforeShadow(r,G,I,j,J,Et,q),r.renderBufferDirect(j,null,J,Et,G,q),G.onAfterShadow(r,G,I,j,J,Et,q)}}}else if($.visible){const ut=L(G,$,C,D);G.onBeforeShadow(r,G,I,j,J,ut,null),r.renderBufferDirect(j,null,J,ut,G,null),G.onAfterShadow(r,G,I,j,J,ut,null)}}const V=G.children;for(let J=0,$=V.length;J<$;J++)N(V[J],I,j,C,D)}function k(G){G.target.removeEventListener("dispose",k);for(const j in p){const C=p[j],D=G.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const jR={[oh]:lh,[ch]:dh,[uh]:hh,[Bs]:fh,[lh]:oh,[dh]:ch,[hh]:uh,[fh]:Bs};function XR(r,t){function i(){let W=!1;const wt=new an;let Ut=null;const Ht=new an(0,0,0,0);return{setMask:function(Tt){Ut!==Tt&&!W&&(r.colorMask(Tt,Tt,Tt,Tt),Ut=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,vt,Gt,oe,Pe){Pe===!0&&(Tt*=oe,vt*=oe,Gt*=oe),wt.set(Tt,vt,Gt,oe),Ht.equals(wt)===!1&&(r.clearColor(Tt,vt,Gt,oe),Ht.copy(wt))},reset:function(){W=!1,Ut=null,Ht.set(-1,0,0,0)}}}function s(){let W=!1,wt=!1,Ut=null,Ht=null,Tt=null;return{setReversed:function(vt){if(wt!==vt){const Gt=t.get("EXT_clip_control");vt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),wt=vt;const oe=Tt;Tt=null,this.setClear(oe)}},getReversed:function(){return wt},setTest:function(vt){vt?lt(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(vt){Ut!==vt&&!W&&(r.depthMask(vt),Ut=vt)},setFunc:function(vt){if(wt&&(vt=jR[vt]),Ht!==vt){switch(vt){case oh:r.depthFunc(r.NEVER);break;case lh:r.depthFunc(r.ALWAYS);break;case ch:r.depthFunc(r.LESS);break;case Bs:r.depthFunc(r.LEQUAL);break;case uh:r.depthFunc(r.EQUAL);break;case fh:r.depthFunc(r.GEQUAL);break;case dh:r.depthFunc(r.GREATER);break;case hh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ht=vt}},setLocked:function(vt){W=vt},setClear:function(vt){Tt!==vt&&(wt&&(vt=1-vt),r.clearDepth(vt),Tt=vt)},reset:function(){W=!1,Ut=null,Ht=null,Tt=null,wt=!1}}}function l(){let W=!1,wt=null,Ut=null,Ht=null,Tt=null,vt=null,Gt=null,oe=null,Pe=null;return{setTest:function(Ae){W||(Ae?lt(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(Ae){wt!==Ae&&!W&&(r.stencilMask(Ae),wt=Ae)},setFunc:function(Ae,Ln,ii){(Ut!==Ae||Ht!==Ln||Tt!==ii)&&(r.stencilFunc(Ae,Ln,ii),Ut=Ae,Ht=Ln,Tt=ii)},setOp:function(Ae,Ln,ii){(vt!==Ae||Gt!==Ln||oe!==ii)&&(r.stencilOp(Ae,Ln,ii),vt=Ae,Gt=Ln,oe=ii)},setLocked:function(Ae){W=Ae},setClear:function(Ae){Pe!==Ae&&(r.clearStencil(Ae),Pe=Ae)},reset:function(){W=!1,wt=null,Ut=null,Ht=null,Tt=null,vt=null,Gt=null,oe=null,Pe=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},v=new WeakMap,y=[],b=null,T=!1,M=null,x=null,U=null,L=null,N=null,k=null,G=null,I=new _e(0,0,0),j=0,C=!1,D=null,O=null,V=null,J=null,$=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Y=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=Y>=2);let xt=null,Et={};const z=r.getParameter(r.SCISSOR_BOX),rt=r.getParameter(r.VIEWPORT),yt=new an().fromArray(z),bt=new an().fromArray(rt);function Nt(W,wt,Ut,Ht){const Tt=new Uint8Array(4),vt=r.createTexture();r.bindTexture(W,vt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<Ut;Gt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(wt,0,r.RGBA,1,1,Ht,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(wt+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return vt}const tt={};tt[r.TEXTURE_2D]=Nt(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),lt(r.DEPTH_TEST),f.setFunc(Bs),Kt(!1),kt(x_),lt(r.CULL_FACE),qt($a);function lt(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function At(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function Lt(W,wt){return g[W]!==wt?(r.bindFramebuffer(W,wt),g[W]=wt,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=wt),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=wt),!0):!1}function It(W,wt){let Ut=y,Ht=!1;if(W){Ut=v.get(wt),Ut===void 0&&(Ut=[],v.set(wt,Ut));const Tt=W.textures;if(Ut.length!==Tt.length||Ut[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,Gt=Tt.length;vt<Gt;vt++)Ut[vt]=r.COLOR_ATTACHMENT0+vt;Ut.length=Tt.length,Ht=!0}}else Ut[0]!==r.BACK&&(Ut[0]=r.BACK,Ht=!0);Ht&&r.drawBuffers(Ut)}function se(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const Ue={[wr]:r.FUNC_ADD,[Wb]:r.FUNC_SUBTRACT,[qb]:r.FUNC_REVERSE_SUBTRACT};Ue[Yb]=r.MIN,Ue[Zb]=r.MAX;const B={[Kb]:r.ZERO,[Qb]:r.ONE,[Jb]:r.SRC_COLOR,[rh]:r.SRC_ALPHA,[aE]:r.SRC_ALPHA_SATURATE,[nE]:r.DST_COLOR,[tE]:r.DST_ALPHA,[$b]:r.ONE_MINUS_SRC_COLOR,[sh]:r.ONE_MINUS_SRC_ALPHA,[iE]:r.ONE_MINUS_DST_COLOR,[eE]:r.ONE_MINUS_DST_ALPHA,[rE]:r.CONSTANT_COLOR,[sE]:r.ONE_MINUS_CONSTANT_COLOR,[oE]:r.CONSTANT_ALPHA,[lE]:r.ONE_MINUS_CONSTANT_ALPHA};function qt(W,wt,Ut,Ht,Tt,vt,Gt,oe,Pe,Ae){if(W===$a){T===!0&&(At(r.BLEND),T=!1);return}if(T===!1&&(lt(r.BLEND),T=!0),W!==Xb){if(W!==M||Ae!==C){if((x!==wr||N!==wr)&&(r.blendEquation(r.FUNC_ADD),x=wr,N=wr),Ae)switch(W){case zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ah:r.blendFunc(r.ONE,r.ONE);break;case y_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case S_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ah:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case y_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}U=null,L=null,k=null,G=null,I.set(0,0,0),j=0,M=W,C=Ae}return}Tt=Tt||wt,vt=vt||Ut,Gt=Gt||Ht,(wt!==x||Tt!==N)&&(r.blendEquationSeparate(Ue[wt],Ue[Tt]),x=wt,N=Tt),(Ut!==U||Ht!==L||vt!==k||Gt!==G)&&(r.blendFuncSeparate(B[Ut],B[Ht],B[vt],B[Gt]),U=Ut,L=Ht,k=vt,G=Gt),(oe.equals(I)===!1||Pe!==j)&&(r.blendColor(oe.r,oe.g,oe.b,Pe),I.copy(oe),j=Pe),M=W,C=!1}function Yt(W,wt){W.side===ca?At(r.CULL_FACE):lt(r.CULL_FACE);let Ut=W.side===Wn;wt&&(Ut=!Ut),Kt(Ut),W.blending===zs&&W.transparent===!1?qt($a):qt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ht=W.stencilWrite;h.setTest(Ht),Ht&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Wt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?lt(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(W){D!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),D=W)}function kt(W){W!==Vb?(lt(r.CULL_FACE),W!==O&&(W===x_?r.cullFace(r.BACK):W===kb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),O=W}function je(W){W!==V&&(F&&r.lineWidth(W),V=W)}function Wt(W,wt,Ut){W?(lt(r.POLYGON_OFFSET_FILL),(J!==wt||$!==Ut)&&(r.polygonOffset(wt,Ut),J=wt,$=Ut)):At(r.POLYGON_OFFSET_FILL)}function le(W){W?lt(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function tn(W){W===void 0&&(W=r.TEXTURE0+ut-1),xt!==W&&(r.activeTexture(W),xt=W)}function Qe(W,wt,Ut){Ut===void 0&&(xt===null?Ut=r.TEXTURE0+ut-1:Ut=xt);let Ht=Et[Ut];Ht===void 0&&(Ht={type:void 0,texture:void 0},Et[Ut]=Ht),(Ht.type!==W||Ht.texture!==wt)&&(xt!==Ut&&(r.activeTexture(Ut),xt=Ut),r.bindTexture(W,wt||tt[W]),Ht.type=W,Ht.texture=wt)}function P(){const W=Et[xt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function it(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function mt(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $t(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ct(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qt(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Jt(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Dt(W){yt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),yt.copy(W))}function te(W){bt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),bt.copy(W))}function Bt(W,wt){let Ut=p.get(wt);Ut===void 0&&(Ut=new WeakMap,p.set(wt,Ut));let Ht=Ut.get(W);Ht===void 0&&(Ht=r.getUniformBlockIndex(wt,W.name),Ut.set(W,Ht))}function Ot(W,wt){const Ht=p.get(wt).get(W);m.get(wt)!==Ht&&(r.uniformBlockBinding(wt,Ht,W.__bindingPointIndex),m.set(wt,Ht))}function ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},xt=null,Et={},g={},v=new WeakMap,y=[],b=null,T=!1,M=null,x=null,U=null,L=null,N=null,k=null,G=null,I=new _e(0,0,0),j=0,C=!1,D=null,O=null,V=null,J=null,$=null,yt.set(0,0,r.canvas.width,r.canvas.height),bt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:lt,disable:At,bindFramebuffer:Lt,drawBuffers:It,useProgram:se,setBlending:qt,setMaterial:Yt,setFlipSided:Kt,setCullFace:kt,setLineWidth:je,setPolygonOffset:Wt,setScissorTest:le,activeTexture:tn,bindTexture:Qe,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:it,texImage2D:Jt,texImage3D:Rt,updateUBOMapping:Bt,uniformBlockBinding:Ot,texStorage2D:Ct,texStorage3D:Qt,texSubImage2D:mt,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:$t,scissor:Dt,viewport:te,reset:ue}}function WR(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new de,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,E){return y?new OffscreenCanvas(P,E):eu("canvas")}function T(P,E,it){let mt=1;const Mt=Qe(P);if((Mt.width>it||Mt.height>it)&&(mt=it/Math.max(Mt.width,Mt.height)),mt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ht=Math.floor(mt*Mt.width),$t=Math.floor(mt*Mt.height);g===void 0&&(g=b(ht,$t));const Ct=E?b(ht,$t):g;return Ct.width=ht,Ct.height=$t,Ct.getContext("2d").drawImage(P,0,0,ht,$t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+$t+")."),Ct}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),P;return P}function M(P){return P.generateMipmaps}function x(P){r.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,E,it,mt,Mt=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ht=E;if(E===r.RED&&(it===r.FLOAT&&(ht=r.R32F),it===r.HALF_FLOAT&&(ht=r.R16F),it===r.UNSIGNED_BYTE&&(ht=r.R8)),E===r.RED_INTEGER&&(it===r.UNSIGNED_BYTE&&(ht=r.R8UI),it===r.UNSIGNED_SHORT&&(ht=r.R16UI),it===r.UNSIGNED_INT&&(ht=r.R32UI),it===r.BYTE&&(ht=r.R8I),it===r.SHORT&&(ht=r.R16I),it===r.INT&&(ht=r.R32I)),E===r.RG&&(it===r.FLOAT&&(ht=r.RG32F),it===r.HALF_FLOAT&&(ht=r.RG16F),it===r.UNSIGNED_BYTE&&(ht=r.RG8)),E===r.RG_INTEGER&&(it===r.UNSIGNED_BYTE&&(ht=r.RG8UI),it===r.UNSIGNED_SHORT&&(ht=r.RG16UI),it===r.UNSIGNED_INT&&(ht=r.RG32UI),it===r.BYTE&&(ht=r.RG8I),it===r.SHORT&&(ht=r.RG16I),it===r.INT&&(ht=r.RG32I)),E===r.RGB_INTEGER&&(it===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),it===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),it===r.UNSIGNED_INT&&(ht=r.RGB32UI),it===r.BYTE&&(ht=r.RGB8I),it===r.SHORT&&(ht=r.RGB16I),it===r.INT&&(ht=r.RGB32I)),E===r.RGBA_INTEGER&&(it===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),it===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),it===r.UNSIGNED_INT&&(ht=r.RGBA32UI),it===r.BYTE&&(ht=r.RGBA8I),it===r.SHORT&&(ht=r.RGBA16I),it===r.INT&&(ht=r.RGBA32I)),E===r.RGB&&(it===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),it===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),E===r.RGBA){const $t=Mt?$c:De.getTransfer(mt);it===r.FLOAT&&(ht=r.RGBA32F),it===r.HALF_FLOAT&&(ht=r.RGBA16F),it===r.UNSIGNED_BYTE&&(ht=$t===Ve?r.SRGB8_ALPHA8:r.RGBA8),it===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),it===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function N(P,E){let it;return P?E===null||E===Ur||E===Yo?it=r.DEPTH24_STENCIL8:E===ua?it=r.DEPTH32F_STENCIL8:E===qo&&(it=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ur||E===Yo?it=r.DEPTH_COMPONENT24:E===ua?it=r.DEPTH_COMPONENT32F:E===qo&&(it=r.DEPTH_COMPONENT16),it}function k(P,E){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ti&&P.minFilter!==Li?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function G(P){const E=P.target;E.removeEventListener("dispose",G),j(E),E.isVideoTexture&&_.delete(E)}function I(P){const E=P.target;E.removeEventListener("dispose",I),D(E)}function j(P){const E=s.get(P);if(E.__webglInit===void 0)return;const it=P.source,mt=v.get(it);if(mt){const Mt=mt[E.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&C(P),Object.keys(mt).length===0&&v.delete(it)}s.remove(P)}function C(P){const E=s.get(P);r.deleteTexture(E.__webglTexture);const it=P.source,mt=v.get(it);delete mt[E.__cacheKey],f.memory.textures--}function D(P){const E=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(E.__webglFramebuffer[mt]))for(let Mt=0;Mt<E.__webglFramebuffer[mt].length;Mt++)r.deleteFramebuffer(E.__webglFramebuffer[mt][Mt]);else r.deleteFramebuffer(E.__webglFramebuffer[mt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[mt])}else{if(Array.isArray(E.__webglFramebuffer))for(let mt=0;mt<E.__webglFramebuffer.length;mt++)r.deleteFramebuffer(E.__webglFramebuffer[mt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let mt=0;mt<E.__webglColorRenderbuffer.length;mt++)E.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[mt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const it=P.textures;for(let mt=0,Mt=it.length;mt<Mt;mt++){const ht=s.get(it[mt]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),f.memory.textures--),s.remove(it[mt])}s.remove(P)}let O=0;function V(){O=0}function J(){const P=O;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),O+=1,P}function $(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ut(P,E){const it=s.get(P);if(P.isVideoTexture&&le(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&it.__version!==P.version){const mt=P.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(it,P,E);return}}else P.isExternalTexture&&(it.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,it.__webglTexture,r.TEXTURE0+E)}function F(P,E){const it=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&it.__version!==P.version){tt(it,P,E);return}i.bindTexture(r.TEXTURE_2D_ARRAY,it.__webglTexture,r.TEXTURE0+E)}function Y(P,E){const it=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&it.__version!==P.version){tt(it,P,E);return}i.bindTexture(r.TEXTURE_3D,it.__webglTexture,r.TEXTURE0+E)}function q(P,E){const it=s.get(P);if(P.version>0&&it.__version!==P.version){lt(it,P,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture,r.TEXTURE0+E)}const xt={[gh]:r.REPEAT,[Dr]:r.CLAMP_TO_EDGE,[_h]:r.MIRRORED_REPEAT},Et={[Ti]:r.NEAREST,[vE]:r.NEAREST_MIPMAP_NEAREST,[_c]:r.NEAREST_MIPMAP_LINEAR,[Li]:r.LINEAR,[Ed]:r.LINEAR_MIPMAP_NEAREST,[Nr]:r.LINEAR_MIPMAP_LINEAR},z={[bE]:r.NEVER,[CE]:r.ALWAYS,[EE]:r.LESS,[rx]:r.LEQUAL,[TE]:r.EQUAL,[wE]:r.GEQUAL,[AE]:r.GREATER,[RE]:r.NOTEQUAL};function rt(P,E){if(E.type===ua&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Li||E.magFilter===Ed||E.magFilter===_c||E.magFilter===Nr||E.minFilter===Li||E.minFilter===Ed||E.minFilter===_c||E.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,xt[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,xt[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,xt[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Et[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ti||E.minFilter!==_c&&E.minFilter!==Nr||E.type===ua&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function yt(P,E){let it=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",G));const mt=E.source;let Mt=v.get(mt);Mt===void 0&&(Mt={},v.set(mt,Mt));const ht=$(E);if(ht!==P.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,it=!0),Mt[ht].usedTimes++;const $t=Mt[P.__cacheKey];$t!==void 0&&(Mt[P.__cacheKey].usedTimes--,$t.usedTimes===0&&C(E)),P.__cacheKey=ht,P.__webglTexture=Mt[ht].texture}return it}function bt(P,E,it){return Math.floor(Math.floor(P/it)/E)}function Nt(P,E,it,mt){const ht=P.updateRanges;if(ht.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,it,mt,E.data);else{ht.sort((Rt,Dt)=>Rt.start-Dt.start);let $t=0;for(let Rt=1;Rt<ht.length;Rt++){const Dt=ht[$t],te=ht[Rt],Bt=Dt.start+Dt.count,Ot=bt(te.start,E.width,4),ue=bt(Dt.start,E.width,4);te.start<=Bt+1&&Ot===ue&&bt(te.start+te.count-1,E.width,4)===Ot?Dt.count=Math.max(Dt.count,te.start+te.count-Dt.start):(++$t,ht[$t]=te)}ht.length=$t+1;const Ct=r.getParameter(r.UNPACK_ROW_LENGTH),Qt=r.getParameter(r.UNPACK_SKIP_PIXELS),Jt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Rt=0,Dt=ht.length;Rt<Dt;Rt++){const te=ht[Rt],Bt=Math.floor(te.start/4),Ot=Math.ceil(te.count/4),ue=Bt%E.width,W=Math.floor(Bt/E.width),wt=Ot,Ut=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ue,W,wt,Ut,it,mt,E.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ct),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Jt)}}function tt(P,E,it){let mt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(mt=r.TEXTURE_3D);const Mt=yt(P,E),ht=E.source;i.bindTexture(mt,P.__webglTexture,r.TEXTURE0+it);const $t=s.get(ht);if(ht.version!==$t.__version||Mt===!0){i.activeTexture(r.TEXTURE0+it);const Ct=De.getPrimaries(De.workingColorSpace),Qt=E.colorSpace===Qa?null:De.getPrimaries(E.colorSpace),Jt=E.colorSpace===Qa||Ct===Qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let Rt=T(E.image,!1,l.maxTextureSize);Rt=tn(E,Rt);const Dt=c.convert(E.format,E.colorSpace),te=c.convert(E.type);let Bt=L(E.internalFormat,Dt,te,E.colorSpace,E.isVideoTexture);rt(mt,E);let Ot;const ue=E.mipmaps,W=E.isVideoTexture!==!0,wt=$t.__version===void 0||Mt===!0,Ut=ht.dataReady,Ht=k(E,Rt);if(E.isDepthTexture)Bt=N(E.format===Ko,E.type),wt&&(W?i.texStorage2D(r.TEXTURE_2D,1,Bt,Rt.width,Rt.height):i.texImage2D(r.TEXTURE_2D,0,Bt,Rt.width,Rt.height,0,Dt,te,null));else if(E.isDataTexture)if(ue.length>0){W&&wt&&i.texStorage2D(r.TEXTURE_2D,Ht,Bt,ue[0].width,ue[0].height);for(let Tt=0,vt=ue.length;Tt<vt;Tt++)Ot=ue[Tt],W?Ut&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Ot.width,Ot.height,Dt,te,Ot.data):i.texImage2D(r.TEXTURE_2D,Tt,Bt,Ot.width,Ot.height,0,Dt,te,Ot.data);E.generateMipmaps=!1}else W?(wt&&i.texStorage2D(r.TEXTURE_2D,Ht,Bt,Rt.width,Rt.height),Ut&&Nt(E,Rt,Dt,te)):i.texImage2D(r.TEXTURE_2D,0,Bt,Rt.width,Rt.height,0,Dt,te,Rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Bt,ue[0].width,ue[0].height,Rt.depth);for(let Tt=0,vt=ue.length;Tt<vt;Tt++)if(Ot=ue[Tt],E.format!==bi)if(Dt!==null)if(W){if(Ut)if(E.layerUpdates.size>0){const Gt=Z_(Ot.width,Ot.height,E.format,E.type);for(const oe of E.layerUpdates){const Pe=Ot.data.subarray(oe*Gt/Ot.data.BYTES_PER_ELEMENT,(oe+1)*Gt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,oe,Ot.width,Ot.height,1,Dt,Pe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Ot.width,Ot.height,Rt.depth,Dt,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Tt,Bt,Ot.width,Ot.height,Rt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ut&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Ot.width,Ot.height,Rt.depth,Dt,te,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Tt,Bt,Ot.width,Ot.height,Rt.depth,0,Dt,te,Ot.data)}else{W&&wt&&i.texStorage2D(r.TEXTURE_2D,Ht,Bt,ue[0].width,ue[0].height);for(let Tt=0,vt=ue.length;Tt<vt;Tt++)Ot=ue[Tt],E.format!==bi?Dt!==null?W?Ut&&i.compressedTexSubImage2D(r.TEXTURE_2D,Tt,0,0,Ot.width,Ot.height,Dt,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,Tt,Bt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ut&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Ot.width,Ot.height,Dt,te,Ot.data):i.texImage2D(r.TEXTURE_2D,Tt,Bt,Ot.width,Ot.height,0,Dt,te,Ot.data)}else if(E.isDataArrayTexture)if(W){if(wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Bt,Rt.width,Rt.height,Rt.depth),Ut)if(E.layerUpdates.size>0){const Tt=Z_(Rt.width,Rt.height,E.format,E.type);for(const vt of E.layerUpdates){const Gt=Rt.data.subarray(vt*Tt/Rt.data.BYTES_PER_ELEMENT,(vt+1)*Tt/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,Rt.width,Rt.height,1,Dt,te,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Dt,te,Rt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Bt,Rt.width,Rt.height,Rt.depth,0,Dt,te,Rt.data);else if(E.isData3DTexture)W?(wt&&i.texStorage3D(r.TEXTURE_3D,Ht,Bt,Rt.width,Rt.height,Rt.depth),Ut&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Dt,te,Rt.data)):i.texImage3D(r.TEXTURE_3D,0,Bt,Rt.width,Rt.height,Rt.depth,0,Dt,te,Rt.data);else if(E.isFramebufferTexture){if(wt)if(W)i.texStorage2D(r.TEXTURE_2D,Ht,Bt,Rt.width,Rt.height);else{let Tt=Rt.width,vt=Rt.height;for(let Gt=0;Gt<Ht;Gt++)i.texImage2D(r.TEXTURE_2D,Gt,Bt,Tt,vt,0,Dt,te,null),Tt>>=1,vt>>=1}}else if(ue.length>0){if(W&&wt){const Tt=Qe(ue[0]);i.texStorage2D(r.TEXTURE_2D,Ht,Bt,Tt.width,Tt.height)}for(let Tt=0,vt=ue.length;Tt<vt;Tt++)Ot=ue[Tt],W?Ut&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Dt,te,Ot):i.texImage2D(r.TEXTURE_2D,Tt,Bt,Dt,te,Ot);E.generateMipmaps=!1}else if(W){if(wt){const Tt=Qe(Rt);i.texStorage2D(r.TEXTURE_2D,Ht,Bt,Tt.width,Tt.height)}Ut&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Dt,te,Rt)}else i.texImage2D(r.TEXTURE_2D,0,Bt,Dt,te,Rt);M(E)&&x(mt),$t.__version=ht.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function lt(P,E,it){if(E.image.length!==6)return;const mt=yt(P,E),Mt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+it);const ht=s.get(Mt);if(Mt.version!==ht.__version||mt===!0){i.activeTexture(r.TEXTURE0+it);const $t=De.getPrimaries(De.workingColorSpace),Ct=E.colorSpace===Qa?null:De.getPrimaries(E.colorSpace),Qt=E.colorSpace===Qa||$t===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Jt=E.isCompressedTexture||E.image[0].isCompressedTexture,Rt=E.image[0]&&E.image[0].isDataTexture,Dt=[];for(let vt=0;vt<6;vt++)!Jt&&!Rt?Dt[vt]=T(E.image[vt],!0,l.maxCubemapSize):Dt[vt]=Rt?E.image[vt].image:E.image[vt],Dt[vt]=tn(E,Dt[vt]);const te=Dt[0],Bt=c.convert(E.format,E.colorSpace),Ot=c.convert(E.type),ue=L(E.internalFormat,Bt,Ot,E.colorSpace),W=E.isVideoTexture!==!0,wt=ht.__version===void 0||mt===!0,Ut=Mt.dataReady;let Ht=k(E,te);rt(r.TEXTURE_CUBE_MAP,E);let Tt;if(Jt){W&&wt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,ue,te.width,te.height);for(let vt=0;vt<6;vt++){Tt=Dt[vt].mipmaps;for(let Gt=0;Gt<Tt.length;Gt++){const oe=Tt[Gt];E.format!==bi?Bt!==null?W?Ut&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,0,0,oe.width,oe.height,Bt,oe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,ue,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,0,0,oe.width,oe.height,Bt,Ot,oe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,ue,oe.width,oe.height,0,Bt,Ot,oe.data)}}}else{if(Tt=E.mipmaps,W&&wt){Tt.length>0&&Ht++;const vt=Qe(Dt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,ue,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Rt){W?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Dt[vt].width,Dt[vt].height,Bt,Ot,Dt[vt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ue,Dt[vt].width,Dt[vt].height,0,Bt,Ot,Dt[vt].data);for(let Gt=0;Gt<Tt.length;Gt++){const Pe=Tt[Gt].image[vt].image;W?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,0,0,Pe.width,Pe.height,Bt,Ot,Pe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,ue,Pe.width,Pe.height,0,Bt,Ot,Pe.data)}}else{W?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Bt,Ot,Dt[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ue,Bt,Ot,Dt[vt]);for(let Gt=0;Gt<Tt.length;Gt++){const oe=Tt[Gt];W?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,0,0,Bt,Ot,oe.image[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,ue,Bt,Ot,oe.image[vt])}}}M(E)&&x(r.TEXTURE_CUBE_MAP),ht.__version=Mt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function At(P,E,it,mt,Mt,ht){const $t=c.convert(it.format,it.colorSpace),Ct=c.convert(it.type),Qt=L(it.internalFormat,$t,Ct,it.colorSpace),Jt=s.get(E),Rt=s.get(it);if(Rt.__renderTarget=E,!Jt.__hasExternalTextures){const Dt=Math.max(1,E.width>>ht),te=Math.max(1,E.height>>ht);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ht,Qt,Dt,te,E.depth,0,$t,Ct,null):i.texImage2D(Mt,ht,Qt,Dt,te,0,$t,Ct,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Wt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,Mt,Rt.__webglTexture,0,je(E)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,Mt,Rt.__webglTexture,ht),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(P,E,it){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const mt=E.depthTexture,Mt=mt&&mt.isDepthTexture?mt.type:null,ht=N(E.stencilBuffer,Mt),$t=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=je(E);Wt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct,ht,E.width,E.height):it?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,ht,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ht,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,$t,r.RENDERBUFFER,P)}else{const mt=E.textures;for(let Mt=0;Mt<mt.length;Mt++){const ht=mt[Mt],$t=c.convert(ht.format,ht.colorSpace),Ct=c.convert(ht.type),Qt=L(ht.internalFormat,$t,Ct,ht.colorSpace),Jt=je(E);it&&Wt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt,Qt,E.width,E.height):Wt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt,Qt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Qt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function It(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(E.depthTexture);mt.__renderTarget=E,(!mt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut(E.depthTexture,0);const Mt=mt.__webglTexture,ht=je(E);if(E.depthTexture.format===Zo)Wt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0);else if(E.depthTexture.format===Ko)Wt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function se(P){const E=s.get(P),it=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const mt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),mt){const Mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,mt.removeEventListener("dispose",Mt)};mt.addEventListener("dispose",Mt),E.__depthDisposeCallback=Mt}E.__boundDepthTexture=mt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const mt=P.texture.mipmaps;mt&&mt.length>0?It(E.__webglFramebuffer[0],P):It(E.__webglFramebuffer,P)}else if(it){E.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[mt]),E.__webglDepthbuffer[mt]===void 0)E.__webglDepthbuffer[mt]=r.createRenderbuffer(),Lt(E.__webglDepthbuffer[mt],P,!1);else{const Mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[mt];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ht)}}else{const mt=P.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Lt(E.__webglDepthbuffer,P,!1);else{const Mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ht)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(P,E,it){const mt=s.get(P);E!==void 0&&At(mt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),it!==void 0&&se(P)}function B(P){const E=P.texture,it=s.get(P),mt=s.get(E);P.addEventListener("dispose",I);const Mt=P.textures,ht=P.isWebGLCubeRenderTarget===!0,$t=Mt.length>1;if($t||(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=E.version,f.memory.textures++),ht){it.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){it.__webglFramebuffer[Ct]=[];for(let Qt=0;Qt<E.mipmaps.length;Qt++)it.__webglFramebuffer[Ct][Qt]=r.createFramebuffer()}else it.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)it.__webglFramebuffer[Ct]=r.createFramebuffer()}else it.__webglFramebuffer=r.createFramebuffer();if($t)for(let Ct=0,Qt=Mt.length;Ct<Qt;Ct++){const Jt=s.get(Mt[Ct]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&Wt(P)===!1){it.__webglMultisampledFramebuffer=r.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Mt.length;Ct++){const Qt=Mt[Ct];it.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,it.__webglColorRenderbuffer[Ct]);const Jt=c.convert(Qt.format,Qt.colorSpace),Rt=c.convert(Qt.type),Dt=L(Qt.internalFormat,Jt,Rt,Qt.colorSpace,P.isXRRenderTarget===!0),te=je(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,te,Dt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,it.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(it.__webglDepthRenderbuffer=r.createRenderbuffer(),Lt(it.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),rt(r.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)At(it.__webglFramebuffer[Ct][Qt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Qt);else At(it.__webglFramebuffer[Ct],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(E)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if($t){for(let Ct=0,Qt=Mt.length;Ct<Qt;Ct++){const Jt=Mt[Ct],Rt=s.get(Jt);let Dt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Dt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,Rt.__webglTexture),rt(Dt,Jt),At(it.__webglFramebuffer,P,Jt,r.COLOR_ATTACHMENT0+Ct,Dt,0),M(Jt)&&x(Dt)}i.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ct=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,mt.__webglTexture),rt(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)At(it.__webglFramebuffer[Qt],P,E,r.COLOR_ATTACHMENT0,Ct,Qt);else At(it.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,Ct,0);M(E)&&x(Ct),i.unbindTexture()}P.depthBuffer&&se(P)}function qt(P){const E=P.textures;for(let it=0,mt=E.length;it<mt;it++){const Mt=E[it];if(M(Mt)){const ht=U(P),$t=s.get(Mt).__webglTexture;i.bindTexture(ht,$t),x(ht),i.unbindTexture()}}}const Yt=[],Kt=[];function kt(P){if(P.samples>0){if(Wt(P)===!1){const E=P.textures,it=P.width,mt=P.height;let Mt=r.COLOR_BUFFER_BIT;const ht=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$t=s.get(P),Ct=E.length>1;if(Ct)for(let Jt=0;Jt<E.length;Jt++)i.bindFramebuffer(r.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,$t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer);const Qt=P.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$t.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let Jt=0;Jt<E.length;Jt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$t.__webglColorRenderbuffer[Jt]);const Rt=s.get(E[Jt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Rt,0)}r.blitFramebuffer(0,0,it,mt,0,0,it,mt,Mt,r.NEAREST),m===!0&&(Yt.length=0,Kt.length=0,Yt.push(r.COLOR_ATTACHMENT0+Jt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Yt.push(ht),Kt.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Kt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Yt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let Jt=0;Jt<E.length;Jt++){i.bindFramebuffer(r.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.RENDERBUFFER,$t.__webglColorRenderbuffer[Jt]);const Rt=s.get(E[Jt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,$t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.TEXTURE_2D,Rt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function je(P){return Math.min(l.maxSamples,P.samples)}function Wt(P){const E=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function le(P){const E=f.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function tn(P,E){const it=P.colorSpace,mt=P.format,Mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||it!==Gs&&it!==Qa&&(De.getTransfer(it)===Ve?(mt!==bi||Mt!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),E}function Qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=V,this.setTexture2D=ut,this.setTexture2DArray=F,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=Ue,this.setupRenderTarget=B,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Wt}function qR(r,t){function i(s,l=Qa){let c;const f=De.getTransfer(l);if(s===Fi)return r.UNSIGNED_BYTE;if(s===sp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===op)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$v)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===tx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Qv)return r.BYTE;if(s===Jv)return r.SHORT;if(s===qo)return r.UNSIGNED_SHORT;if(s===rp)return r.INT;if(s===Ur)return r.UNSIGNED_INT;if(s===ua)return r.FLOAT;if(s===el)return r.HALF_FLOAT;if(s===ex)return r.ALPHA;if(s===nx)return r.RGB;if(s===bi)return r.RGBA;if(s===Zo)return r.DEPTH_COMPONENT;if(s===Ko)return r.DEPTH_STENCIL;if(s===ix)return r.RED;if(s===lp)return r.RED_INTEGER;if(s===ax)return r.RG;if(s===cp)return r.RG_INTEGER;if(s===up)return r.RGBA_INTEGER;if(s===Xc||s===Wc||s===qc||s===Yc)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vh||s===xh||s===yh||s===Sh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===vh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mh||s===bh||s===Eh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Mh||s===bh)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Eh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Th||s===Ah||s===Rh||s===wh||s===Ch||s===Dh||s===Nh||s===Uh||s===Lh||s===Oh||s===Ph||s===zh||s===Fh||s===Bh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Th)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ah)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ch)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Uh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Oh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ph)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ih||s===Hh||s===Gh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Ih)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vh||s===kh||s===jh||s===Xh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Vh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===jh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const YR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new gx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ga({vertexShader:YR,fragmentShader:ZR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fa(new ou(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QR extends zr{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,g=null,v=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",M=new KR,x={},U=i.getContextAttributes();let L=null,N=null;const k=[],G=[],I=new de;let j=null;const C=new pi;C.viewport=new an;const D=new pi;D.viewport=new an;const O=[C,D],V=new g1;let J=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=k[tt];return lt===void 0&&(lt=new Wd,k[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=k[tt];return lt===void 0&&(lt=new Wd,k[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=k[tt];return lt===void 0&&(lt=new Wd,k[tt]=lt),lt.getHandSpace()};function ut(tt){const lt=G.indexOf(tt.inputSource);if(lt===-1)return;const At=k[lt];At!==void 0&&(At.update(tt.inputSource,tt.frame,p||f),At.dispatchEvent({type:tt.type,data:tt.inputSource}))}function F(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",Y);for(let tt=0;tt<k.length;tt++){const lt=G[tt];lt!==null&&(G[tt]=null,k[tt].disconnect(lt))}J=null,$=null,M.reset();for(const tt in x)delete x[tt];t.setRenderTarget(L),y=null,v=null,g=null,l=null,N=null,Nt.stop(),s.isPresenting=!1,t.setPixelRatio(j),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){h=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",F),l.addEventListener("inputsourceschange",Y),U.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Lt=null,It=null;U.depth&&(It=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=U.stencil?Ko:Zo,Lt=U.stencil?Yo:Ur);const se={colorFormat:i.RGBA8,depthFormat:It,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(se),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),N=new Or(v.textureWidth,v.textureHeight,{format:bi,type:Fi,depthTexture:new mx(v.textureWidth,v.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const At={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Or(y.framebufferWidth,y.framebufferHeight,{format:bi,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Nt.setContext(l),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Y(tt){for(let lt=0;lt<tt.removed.length;lt++){const At=tt.removed[lt],Lt=G.indexOf(At);Lt>=0&&(G[Lt]=null,k[Lt].disconnect(At))}for(let lt=0;lt<tt.added.length;lt++){const At=tt.added[lt];let Lt=G.indexOf(At);if(Lt===-1){for(let se=0;se<k.length;se++)if(se>=G.length){G.push(At),Lt=se;break}else if(G[se]===null){G[se]=At,Lt=se;break}if(Lt===-1)break}const It=k[Lt];It&&It.connect(At)}}const q=new at,xt=new at;function Et(tt,lt,At){q.setFromMatrixPosition(lt.matrixWorld),xt.setFromMatrixPosition(At.matrixWorld);const Lt=q.distanceTo(xt),It=lt.projectionMatrix.elements,se=At.projectionMatrix.elements,Ue=It[14]/(It[10]-1),B=It[14]/(It[10]+1),qt=(It[9]+1)/It[5],Yt=(It[9]-1)/It[5],Kt=(It[8]-1)/It[0],kt=(se[8]+1)/se[0],je=Ue*Kt,Wt=Ue*kt,le=Lt/(-Kt+kt),tn=le*-Kt;if(lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(tn),tt.translateZ(le),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),It[10]===-1)tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Qe=Ue+le,P=B+le,E=je-tn,it=Wt+(Lt-tn),mt=qt*B/P*Qe,Mt=Yt*B/P*Qe;tt.projectionMatrix.makePerspective(E,it,mt,Mt,Qe,P),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function z(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let lt=tt.near,At=tt.far;M.texture!==null&&(M.depthNear>0&&(lt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),V.near=D.near=C.near=lt,V.far=D.far=C.far=At,(J!==V.near||$!==V.far)&&(l.updateRenderState({depthNear:V.near,depthFar:V.far}),J=V.near,$=V.far),V.layers.mask=tt.layers.mask|6,C.layers.mask=V.layers.mask&3,D.layers.mask=V.layers.mask&5;const Lt=tt.parent,It=V.cameras;z(V,Lt);for(let se=0;se<It.length;se++)z(It[se],Lt);It.length===2?Et(V,C,D):V.projectionMatrix.copy(C.projectionMatrix),rt(tt,V,Lt)};function rt(tt,lt,At){At===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(At.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Wh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(tt){m=tt,v!==null&&(v.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(V)},this.getCameraTexture=function(tt){return x[tt]};let yt=null;function bt(tt,lt){if(_=lt.getViewerPose(p||f),b=lt,_!==null){const At=_.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let Lt=!1;At.length!==V.cameras.length&&(V.cameras.length=0,Lt=!0);for(let B=0;B<At.length;B++){const qt=At[B];let Yt=null;if(y!==null)Yt=y.getViewport(qt);else{const kt=g.getViewSubImage(v,qt);Yt=kt.viewport,B===0&&(t.setRenderTargetTextures(N,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(N))}let Kt=O[B];Kt===void 0&&(Kt=new pi,Kt.layers.enable(B),Kt.viewport=new an,O[B]=Kt),Kt.matrix.fromArray(qt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(qt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),B===0&&(V.matrix.copy(Kt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Lt===!0&&V.cameras.push(Kt)}const It=l.enabledFeatures;if(It&&It.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const B=g.getDepthInformation(At[0]);B&&B.isValid&&B.texture&&M.init(B,l.renderState)}if(It&&It.includes("camera-access")&&T){t.state.unbindTexture(),g=s.getBinding();for(let B=0;B<At.length;B++){const qt=At[B].camera;if(qt){let Yt=x[qt];Yt||(Yt=new gx,x[qt]=Yt);const Kt=g.getCameraImage(qt);Yt.sourceTexture=Kt}}}}for(let At=0;At<k.length;At++){const Lt=G[At],It=k[At];Lt!==null&&It!==void 0&&It.update(Lt,lt,p||f)}yt&&yt(tt,lt),lt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:lt}),b=null}const Nt=new xx;Nt.setAnimationLoop(bt),this.setAnimationLoop=function(tt){yt=tt},this.dispose=function(){}}}const Ar=new ma,JR=new $e;function $R(r,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,dx(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,U,L,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,N)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),T(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,U,L):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Wn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Wn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const U=t.get(x),L=U.envMap,N=U.envMapRotation;L&&(M.envMap.value=L,Ar.copy(N),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),M.envMapRotation.value.setFromMatrix4(JR.makeRotationFromEuler(Ar)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,U,L){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*U,M.scale.value=L*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,U){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const U=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function tw(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const N=L.program;s.uniformBlockBinding(U,N)}function p(U,L){let N=l[U.id];N===void 0&&(b(U),N=_(U),l[U.id]=N,U.addEventListener("dispose",M));const k=L.program;s.updateUBOMapping(U,k);const G=t.render.frame;c[U.id]!==G&&(v(U),c[U.id]=G)}function _(U){const L=g();U.__bindingPointIndex=L;const N=r.createBuffer(),k=U.__size,G=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,k,G),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,N),N}function g(){for(let U=0;U<h;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const L=l[U.id],N=U.uniforms,k=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let G=0,I=N.length;G<I;G++){const j=Array.isArray(N[G])?N[G]:[N[G]];for(let C=0,D=j.length;C<D;C++){const O=j[C];if(y(O,G,C,k)===!0){const V=O.__offset,J=Array.isArray(O.value)?O.value:[O.value];let $=0;for(let ut=0;ut<J.length;ut++){const F=J[ut],Y=T(F);typeof F=="number"||typeof F=="boolean"?(O.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,V+$,O.__data)):F.isMatrix3?(O.__data[0]=F.elements[0],O.__data[1]=F.elements[1],O.__data[2]=F.elements[2],O.__data[3]=0,O.__data[4]=F.elements[3],O.__data[5]=F.elements[4],O.__data[6]=F.elements[5],O.__data[7]=0,O.__data[8]=F.elements[6],O.__data[9]=F.elements[7],O.__data[10]=F.elements[8],O.__data[11]=0):(F.toArray(O.__data,$),$+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(U,L,N,k){const G=U.value,I=L+"_"+N;if(k[I]===void 0)return typeof G=="number"||typeof G=="boolean"?k[I]=G:k[I]=G.clone(),!0;{const j=k[I];if(typeof G=="number"||typeof G=="boolean"){if(j!==G)return k[I]=G,!0}else if(j.equals(G)===!1)return j.copy(G),!0}return!1}function b(U){const L=U.uniforms;let N=0;const k=16;for(let I=0,j=L.length;I<j;I++){const C=Array.isArray(L[I])?L[I]:[L[I]];for(let D=0,O=C.length;D<O;D++){const V=C[D],J=Array.isArray(V.value)?V.value:[V.value];for(let $=0,ut=J.length;$<ut;$++){const F=J[$],Y=T(F),q=N%k,xt=q%Y.boundary,Et=q+xt;N+=xt,Et!==0&&k-Et<Y.storage&&(N+=k-Et),V.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=N,N+=Y.storage}}}const G=N%k;return G>0&&(N+=k-G),U.__size=N,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function M(U){const L=U.target;L.removeEventListener("dispose",M);const N=f.indexOf(L.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const U in l)r.deleteBuffer(l[U]);f=[],l={},c={}}return{bind:m,update:p,dispose:x}}class ew{constructor(t={}){const{canvas:i=UE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const b=new Uint32Array(4),T=new Int32Array(4);let M=null,x=null;const U=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let k=!1;this._outputColorSpace=hi;let G=0,I=0,j=null,C=-1,D=null;const O=new an,V=new an;let J=null;const $=new _e(0);let ut=0,F=i.width,Y=i.height,q=1,xt=null,Et=null;const z=new an(0,0,F,Y),rt=new an(0,0,F,Y);let yt=!1;const bt=new pp;let Nt=!1,tt=!1;const lt=new $e,At=new at,Lt=new an,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Ue(){return j===null?q:1}let B=s;function qt(w,Z){return i.getContext(w,Z)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ap}`),i.addEventListener("webglcontextlost",Ut,!1),i.addEventListener("webglcontextrestored",Ht,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),B===null){const Z="webgl2";if(B=qt(Z,w),B===null)throw qt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Yt,Kt,kt,je,Wt,le,tn,Qe,P,E,it,mt,Mt,ht,$t,Ct,Qt,Jt,Rt,Dt,te,Bt,Ot,ue;function W(){Yt=new f2(B),Yt.init(),Bt=new qR(B,Yt),Kt=new a2(B,Yt,t,Bt),kt=new XR(B,Yt),Kt.reversedDepthBuffer&&v&&kt.buffers.depth.setReversed(!0),je=new p2(B),Wt=new UR,le=new WR(B,Yt,kt,Wt,Kt,Bt,je),tn=new s2(N),Qe=new u2(N),P=new y1(B),Ot=new n2(B,P),E=new d2(B,P,je,Ot),it=new g2(B,E,P,je),Rt=new m2(B,Kt,le),Ct=new r2(Wt),mt=new NR(N,tn,Qe,Yt,Kt,Ot,Ct),Mt=new $R(N,Wt),ht=new OR,$t=new HR(Yt),Jt=new e2(N,tn,Qe,kt,it,y,m),Qt=new kR(N,it,Kt),ue=new tw(B,je,Kt,kt),Dt=new i2(B,Yt,je),te=new h2(B,Yt,je),je.programs=mt.programs,N.capabilities=Kt,N.extensions=Yt,N.properties=Wt,N.renderLists=ht,N.shadowMap=Qt,N.state=kt,N.info=je}W();const wt=new QR(N,B);this.xr=wt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=Yt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Yt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(F,Y,!1))},this.getSize=function(w){return w.set(F,Y)},this.setSize=function(w,Z,ot=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,Y=Z,i.width=Math.floor(w*q),i.height=Math.floor(Z*q),ot===!0&&(i.style.width=w+"px",i.style.height=Z+"px"),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(F*q,Y*q).floor()},this.setDrawingBufferSize=function(w,Z,ot){F=w,Y=Z,q=ot,i.width=Math.floor(w*ot),i.height=Math.floor(Z*ot),this.setViewport(0,0,w,Z)},this.getCurrentViewport=function(w){return w.copy(O)},this.getViewport=function(w){return w.copy(z)},this.setViewport=function(w,Z,ot,ct){w.isVector4?z.set(w.x,w.y,w.z,w.w):z.set(w,Z,ot,ct),kt.viewport(O.copy(z).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(rt)},this.setScissor=function(w,Z,ot,ct){w.isVector4?rt.set(w.x,w.y,w.z,w.w):rt.set(w,Z,ot,ct),kt.scissor(V.copy(rt).multiplyScalar(q).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(w){kt.setScissorTest(yt=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){Et=w},this.getClearColor=function(w){return w.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,ot=!0){let ct=0;if(w){let Q=!1;if(j!==null){const St=j.texture.format;Q=St===up||St===cp||St===lp}if(Q){const St=j.texture.type,Pt=St===Fi||St===Ur||St===qo||St===Yo||St===sp||St===op,jt=Jt.getClearColor(),Ft=Jt.getClearAlpha(),ee=jt.r,re=jt.g,ne=jt.b;Pt?(b[0]=ee,b[1]=re,b[2]=ne,b[3]=Ft,B.clearBufferuiv(B.COLOR,0,b)):(T[0]=ee,T[1]=re,T[2]=ne,T[3]=Ft,B.clearBufferiv(B.COLOR,0,T))}else ct|=B.COLOR_BUFFER_BIT}Z&&(ct|=B.DEPTH_BUFFER_BIT),ot&&(ct|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",Ht,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),Jt.dispose(),ht.dispose(),$t.dispose(),Wt.dispose(),tn.dispose(),Qe.dispose(),it.dispose(),Ot.dispose(),ue.dispose(),mt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",ii),wt.removeEventListener("sessionend",Ws),Ai.stop()};function Ut(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const w=je.autoReset,Z=Qt.enabled,ot=Qt.autoUpdate,ct=Qt.needsUpdate,Q=Qt.type;W(),je.autoReset=w,Qt.enabled=Z,Qt.autoUpdate=ot,Qt.needsUpdate=ct,Qt.type=Q}function Tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function vt(w){const Z=w.target;Z.removeEventListener("dispose",vt),Gt(Z)}function Gt(w){oe(w),Wt.remove(w)}function oe(w){const Z=Wt.get(w).programs;Z!==void 0&&(Z.forEach(function(ot){mt.releaseProgram(ot)}),w.isShaderMaterial&&mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,ot,ct,Q,St){Z===null&&(Z=It);const Pt=Q.isMesh&&Q.matrixWorld.determinant()<0,jt=ya(w,Z,ot,ct,Q);kt.setMaterial(ct,Pt);let Ft=ot.index,ee=1;if(ct.wireframe===!0){if(Ft=E.getWireframeAttribute(ot),Ft===void 0)return;ee=2}const re=ot.drawRange,ne=ot.attributes.position;let ge=re.start*ee,Le=(re.start+re.count)*ee;St!==null&&(ge=Math.max(ge,St.start*ee),Le=Math.min(Le,(St.start+St.count)*ee)),Ft!==null?(ge=Math.max(ge,0),Le=Math.min(Le,Ft.count)):ne!=null&&(ge=Math.max(ge,0),Le=Math.min(Le,ne.count));const Xe=Le-ge;if(Xe<0||Xe===1/0)return;Ot.setup(Q,ct,jt,ot,Ft);let Oe,ve=Dt;if(Ft!==null&&(Oe=P.get(Ft),ve=te,ve.setIndex(Oe)),Q.isMesh)ct.wireframe===!0?(kt.setLineWidth(ct.wireframeLinewidth*Ue()),ve.setMode(B.LINES)):ve.setMode(B.TRIANGLES);else if(Q.isLine){let Xt=ct.linewidth;Xt===void 0&&(Xt=1),kt.setLineWidth(Xt*Ue()),Q.isLineSegments?ve.setMode(B.LINES):Q.isLineLoop?ve.setMode(B.LINE_LOOP):ve.setMode(B.LINE_STRIP)}else Q.isPoints?ve.setMode(B.POINTS):Q.isSprite&&ve.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Qo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ve.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Xt=Q._multiDrawStarts,qe=Q._multiDrawCounts,Re=Q._multiDrawCount,bn=Ft?P.get(Ft).bytesPerElement:1,Ii=Wt.get(ct).currentProgram.getUniforms();for(let xn=0;xn<Re;xn++)Ii.setValue(B,"_gl_DrawID",xn),ve.render(Xt[xn]/bn,qe[xn])}else if(Q.isInstancedMesh)ve.renderInstances(ge,Xe,Q.count);else if(ot.isInstancedBufferGeometry){const Xt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,qe=Math.min(ot.instanceCount,Xt);ve.renderInstances(ge,Xe,qe)}else ve.render(ge,Xe)};function Pe(w,Z,ot){w.transparent===!0&&w.side===ca&&w.forceSinglePass===!1?(w.side=Wn,w.needsUpdate=!0,qn(w,Z,ot),w.side=er,w.needsUpdate=!0,qn(w,Z,ot),w.side=ca):qn(w,Z,ot)}this.compile=function(w,Z,ot=null){ot===null&&(ot=w),x=$t.get(ot),x.init(Z),L.push(x),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),w!==ot&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const ct=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const St=Q.material;if(St)if(Array.isArray(St))for(let Pt=0;Pt<St.length;Pt++){const jt=St[Pt];Pe(jt,ot,Q),ct.add(jt)}else Pe(St,ot,Q),ct.add(St)}),x=L.pop(),ct},this.compileAsync=function(w,Z,ot=null){const ct=this.compile(w,Z,ot);return new Promise(Q=>{function St(){if(ct.forEach(function(Pt){Wt.get(Pt).currentProgram.isReady()&&ct.delete(Pt)}),ct.size===0){Q(w);return}setTimeout(St,10)}Yt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ae=null;function Ln(w){Ae&&Ae(w)}function ii(){Ai.stop()}function Ws(){Ai.start()}const Ai=new xx;Ai.setAnimationLoop(Ln),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(w){Ae=w,wt.setAnimationLoop(w),w===null?Ai.stop():Ai.start()},wt.addEventListener("sessionstart",ii),wt.addEventListener("sessionend",Ws),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(Z),Z=wt.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,Z,j),x=$t.get(w,L.length),x.init(Z),L.push(x),lt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),bt.setFromProjectionMatrix(lt,Oi,Z.reversedDepth),tt=this.localClippingEnabled,Nt=Ct.init(this.clippingPlanes,tt),M=ht.get(w,U.length),M.init(),U.push(M),wt.enabled===!0&&wt.isPresenting===!0){const St=N.xr.getDepthSensingMesh();St!==null&&Fr(St,Z,-1/0,N.sortObjects)}Fr(w,Z,0,N.sortObjects),M.finish(),N.sortObjects===!0&&M.sort(xt,Et),se=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,se&&Jt.addToRenderList(M,w),this.info.render.frame++,Nt===!0&&Ct.beginShadows();const ot=x.state.shadowsArray;Qt.render(ot,w,Z),Nt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=M.opaque,Q=M.transmissive;if(x.setupLights(),Z.isArrayCamera){const St=Z.cameras;if(Q.length>0)for(let Pt=0,jt=St.length;Pt<jt;Pt++){const Ft=St[Pt];Ir(ct,Q,w,Ft)}se&&Jt.render(w);for(let Pt=0,jt=St.length;Pt<jt;Pt++){const Ft=St[Pt];Br(M,w,Ft,Ft.viewport)}}else Q.length>0&&Ir(ct,Q,w,Z),se&&Jt.render(w),Br(M,w,Z);j!==null&&I===0&&(le.updateMultisampleRenderTarget(j),le.updateRenderTargetMipmap(j)),w.isScene===!0&&w.onAfterRender(N,w,Z),Ot.resetDefaultState(),C=-1,D=null,L.pop(),L.length>0?(x=L[L.length-1],Nt===!0&&Ct.setGlobalState(N.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?M=U[U.length-1]:M=null};function Fr(w,Z,ot,ct){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||bt.intersectsSprite(w)){ct&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);const Pt=it.update(w),jt=w.material;jt.visible&&M.push(w,Pt,jt,ot,Lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||bt.intersectsObject(w))){const Pt=it.update(w),jt=w.material;if(ct&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Lt.copy(Pt.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(jt)){const Ft=Pt.groups;for(let ee=0,re=Ft.length;ee<re;ee++){const ne=Ft[ee],ge=jt[ne.materialIndex];ge&&ge.visible&&M.push(w,Pt,ge,ot,Lt.z,ne)}}else jt.visible&&M.push(w,Pt,jt,ot,Lt.z,null)}}const St=w.children;for(let Pt=0,jt=St.length;Pt<jt;Pt++)Fr(St[Pt],Z,ot,ct)}function Br(w,Z,ot,ct){const Q=w.opaque,St=w.transmissive,Pt=w.transparent;x.setupLightsView(ot),Nt===!0&&Ct.setGlobalState(N.clippingPlanes,ot),ct&&kt.viewport(O.copy(ct)),Q.length>0&&nr(Q,Z,ot),St.length>0&&nr(St,Z,ot),Pt.length>0&&nr(Pt,Z,ot),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Ir(w,Z,ot,ct){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ct.id]===void 0&&(x.state.transmissionRenderTarget[ct.id]=new Or(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?el:Fi,minFilter:Nr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const St=x.state.transmissionRenderTarget[ct.id],Pt=ct.viewport||O;St.setSize(Pt.z*N.transmissionResolutionScale,Pt.w*N.transmissionResolutionScale);const jt=N.getRenderTarget(),Ft=N.getActiveCubeFace(),ee=N.getActiveMipmapLevel();N.setRenderTarget(St),N.getClearColor($),ut=N.getClearAlpha(),ut<1&&N.setClearColor(16777215,.5),N.clear(),se&&Jt.render(ot);const re=N.toneMapping;N.toneMapping=tr;const ne=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),x.setupLightsView(ct),Nt===!0&&Ct.setGlobalState(N.clippingPlanes,ct),nr(w,ot,ct),le.updateMultisampleRenderTarget(St),le.updateRenderTargetMipmap(St),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Le=0,Xe=Z.length;Le<Xe;Le++){const Oe=Z[Le],ve=Oe.object,Xt=Oe.geometry,qe=Oe.material,Re=Oe.group;if(qe.side===ca&&ve.layers.test(ct.layers)){const bn=qe.side;qe.side=Wn,qe.needsUpdate=!0,qs(ve,ot,ct,Xt,qe,Re),qe.side=bn,qe.needsUpdate=!0,ge=!0}}ge===!0&&(le.updateMultisampleRenderTarget(St),le.updateRenderTargetMipmap(St))}N.setRenderTarget(jt,Ft,ee),N.setClearColor($,ut),ne!==void 0&&(ct.viewport=ne),N.toneMapping=re}function nr(w,Z,ot){const ct=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,St=w.length;Q<St;Q++){const Pt=w[Q],jt=Pt.object,Ft=Pt.geometry,ee=Pt.group;let re=Pt.material;re.allowOverride===!0&&ct!==null&&(re=ct),jt.layers.test(ot.layers)&&qs(jt,Z,ot,Ft,re,ee)}}function qs(w,Z,ot,ct,Q,St){w.onBeforeRender(N,Z,ot,ct,Q,St),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(N,Z,ot,ct,w,St),Q.transparent===!0&&Q.side===ca&&Q.forceSinglePass===!1?(Q.side=Wn,Q.needsUpdate=!0,N.renderBufferDirect(ot,Z,ct,Q,w,St),Q.side=er,Q.needsUpdate=!0,N.renderBufferDirect(ot,Z,ct,Q,w,St),Q.side=ca):N.renderBufferDirect(ot,Z,ct,Q,w,St),w.onAfterRender(N,Z,ot,ct,Q,St)}function qn(w,Z,ot){Z.isScene!==!0&&(Z=It);const ct=Wt.get(w),Q=x.state.lights,St=x.state.shadowsArray,Pt=Q.state.version,jt=mt.getParameters(w,Q.state,St,Z,ot),Ft=mt.getProgramCacheKey(jt);let ee=ct.programs;ct.environment=w.isMeshStandardMaterial?Z.environment:null,ct.fog=Z.fog,ct.envMap=(w.isMeshStandardMaterial?Qe:tn).get(w.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,ee===void 0&&(w.addEventListener("dispose",vt),ee=new Map,ct.programs=ee);let re=ee.get(Ft);if(re!==void 0){if(ct.currentProgram===re&&ct.lightsStateVersion===Pt)return Mn(w,jt),re}else jt.uniforms=mt.getUniforms(w),w.onBeforeCompile(jt,N),re=mt.acquireProgram(jt,Ft),ee.set(Ft,re),ct.uniforms=jt.uniforms;const ne=ct.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ne.clippingPlanes=Ct.uniform),Mn(w,jt),ct.needsLights=cu(w),ct.lightsStateVersion=Pt,ct.needsLights&&(ne.ambientLightColor.value=Q.state.ambient,ne.lightProbe.value=Q.state.probe,ne.directionalLights.value=Q.state.directional,ne.directionalLightShadows.value=Q.state.directionalShadow,ne.spotLights.value=Q.state.spot,ne.spotLightShadows.value=Q.state.spotShadow,ne.rectAreaLights.value=Q.state.rectArea,ne.ltc_1.value=Q.state.rectAreaLTC1,ne.ltc_2.value=Q.state.rectAreaLTC2,ne.pointLights.value=Q.state.point,ne.pointLightShadows.value=Q.state.pointShadow,ne.hemisphereLights.value=Q.state.hemi,ne.directionalShadowMap.value=Q.state.directionalShadowMap,ne.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ne.spotShadowMap.value=Q.state.spotShadowMap,ne.spotLightMatrix.value=Q.state.spotLightMatrix,ne.spotLightMap.value=Q.state.spotLightMap,ne.pointShadowMap.value=Q.state.pointShadowMap,ne.pointShadowMatrix.value=Q.state.pointShadowMatrix),ct.currentProgram=re,ct.uniformsList=null,re}function ln(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=Kc.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function Mn(w,Z){const ot=Wt.get(w);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function ya(w,Z,ot,ct,Q){Z.isScene!==!0&&(Z=It),le.resetTextureUnits();const St=Z.fog,Pt=ct.isMeshStandardMaterial?Z.environment:null,jt=j===null?N.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Gs,Ft=(ct.isMeshStandardMaterial?Qe:tn).get(ct.envMap||Pt),ee=ct.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,re=!!ot.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),ne=!!ot.morphAttributes.position,ge=!!ot.morphAttributes.normal,Le=!!ot.morphAttributes.color;let Xe=tr;ct.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xe=N.toneMapping);const Oe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ve=Oe!==void 0?Oe.length:0,Xt=Wt.get(ct),qe=x.state.lights;if(Nt===!0&&(tt===!0||w!==D)){const pn=w===D&&ct.id===C;Ct.setState(ct,w,pn)}let Re=!1;ct.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==qe.state.version||Xt.outputColorSpace!==jt||Q.isBatchedMesh&&Xt.batching===!1||!Q.isBatchedMesh&&Xt.batching===!0||Q.isBatchedMesh&&Xt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Xt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Xt.instancing===!1||!Q.isInstancedMesh&&Xt.instancing===!0||Q.isSkinnedMesh&&Xt.skinning===!1||!Q.isSkinnedMesh&&Xt.skinning===!0||Q.isInstancedMesh&&Xt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xt.instancingMorph===!1&&Q.morphTexture!==null||Xt.envMap!==Ft||ct.fog===!0&&Xt.fog!==St||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Ct.numPlanes||Xt.numIntersection!==Ct.numIntersection)||Xt.vertexAlphas!==ee||Xt.vertexTangents!==re||Xt.morphTargets!==ne||Xt.morphNormals!==ge||Xt.morphColors!==Le||Xt.toneMapping!==Xe||Xt.morphTargetsCount!==ve)&&(Re=!0):(Re=!0,Xt.__version=ct.version);let bn=Xt.currentProgram;Re===!0&&(bn=qn(ct,Z,Q));let Ii=!1,xn=!1,ar=!1;const Me=bn.getUniforms(),Cn=Xt.uniforms;if(kt.useProgram(bn.program)&&(Ii=!0,xn=!0,ar=!0),ct.id!==C&&(C=ct.id,xn=!0),Ii||D!==w){kt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Me.setValue(B,"projectionMatrix",w.projectionMatrix),Me.setValue(B,"viewMatrix",w.matrixWorldInverse);const rn=Me.map.cameraPosition;rn!==void 0&&rn.setValue(B,At.setFromMatrixPosition(w.matrixWorld)),Kt.logarithmicDepthBuffer&&Me.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Me.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,xn=!0,ar=!0)}if(Q.isSkinnedMesh){Me.setOptional(B,Q,"bindMatrix"),Me.setOptional(B,Q,"bindMatrixInverse");const pn=Q.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Me.setValue(B,"boneTexture",pn.boneTexture,le))}Q.isBatchedMesh&&(Me.setOptional(B,Q,"batchingTexture"),Me.setValue(B,"batchingTexture",Q._matricesTexture,le),Me.setOptional(B,Q,"batchingIdTexture"),Me.setValue(B,"batchingIdTexture",Q._indirectTexture,le),Me.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Me.setValue(B,"batchingColorTexture",Q._colorsTexture,le));const On=ot.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Rt.update(Q,ot,bn),(xn||Xt.receiveShadow!==Q.receiveShadow)&&(Xt.receiveShadow=Q.receiveShadow,Me.setValue(B,"receiveShadow",Q.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Cn.envMap.value=Ft,Cn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Z.environment!==null&&(Cn.envMapIntensity.value=Z.environmentIntensity),xn&&(Me.setValue(B,"toneMappingExposure",N.toneMappingExposure),Xt.needsLights&&Ys(Cn,ar),St&&ct.fog===!0&&Mt.refreshFogUniforms(Cn,St),Mt.refreshMaterialUniforms(Cn,ct,q,Y,x.state.transmissionRenderTarget[w.id]),Kc.upload(B,ln(Xt),Cn,le)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Kc.upload(B,ln(Xt),Cn,le),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Me.setValue(B,"center",Q.center),Me.setValue(B,"modelViewMatrix",Q.modelViewMatrix),Me.setValue(B,"normalMatrix",Q.normalMatrix),Me.setValue(B,"modelMatrix",Q.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const pn=ct.uniformsGroups;for(let rn=0,Hr=pn.length;rn<Hr;rn++){const Ri=pn[rn];ue.update(Ri,bn),ue.bind(Ri,bn)}}return bn}function Ys(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function cu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,Z,ot){const ct=Wt.get(w);ct.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Wt.get(w.texture).__webglTexture=Z,Wt.get(w.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:ot,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const ot=Wt.get(w);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0};const uu=B.createFramebuffer();this.setRenderTarget=function(w,Z=0,ot=0){j=w,G=Z,I=ot;let ct=!0,Q=null,St=!1,Pt=!1;if(w){const Ft=Wt.get(w);if(Ft.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(B.FRAMEBUFFER,null),ct=!1;else if(Ft.__webglFramebuffer===void 0)le.setupRenderTarget(w);else if(Ft.__hasExternalTextures)le.rebindTextures(w,Wt.get(w.texture).__webglTexture,Wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ne=w.depthTexture;if(Ft.__boundDepthTexture!==ne){if(ne!==null&&Wt.has(ne)&&(w.width!==ne.image.width||w.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(w)}}const ee=w.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Pt=!0);const re=Wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(re[Z])?Q=re[Z][ot]:Q=re[Z],St=!0):w.samples>0&&le.useMultisampledRTT(w)===!1?Q=Wt.get(w).__webglMultisampledFramebuffer:Array.isArray(re)?Q=re[ot]:Q=re,O.copy(w.viewport),V.copy(w.scissor),J=w.scissorTest}else O.copy(z).multiplyScalar(q).floor(),V.copy(rt).multiplyScalar(q).floor(),J=yt;if(ot!==0&&(Q=uu),kt.bindFramebuffer(B.FRAMEBUFFER,Q)&&ct&&kt.drawBuffers(w,Q),kt.viewport(O),kt.scissor(V),kt.setScissorTest(J),St){const Ft=Wt.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft.__webglTexture,ot)}else if(Pt){const Ft=Z;for(let ee=0;ee<w.textures.length;ee++){const re=Wt.get(w.textures[ee]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ee,re.__webglTexture,ot,Ft)}}else if(w!==null&&ot!==0){const Ft=Wt.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ft.__webglTexture,ot)}C=-1},this.readRenderTargetPixels=function(w,Z,ot,ct,Q,St,Pt,jt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft){kt.bindFramebuffer(B.FRAMEBUFFER,Ft);try{const ee=w.textures[jt],re=ee.format,ne=ee.type;if(!Kt.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-ct&&ot>=0&&ot<=w.height-Q&&(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+jt),B.readPixels(Z,ot,ct,Q,Bt.convert(re),Bt.convert(ne),St))}finally{const ee=j!==null?Wt.get(j).__webglFramebuffer:null;kt.bindFramebuffer(B.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(w,Z,ot,ct,Q,St,Pt,jt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft)if(Z>=0&&Z<=w.width-ct&&ot>=0&&ot<=w.height-Q){kt.bindFramebuffer(B.FRAMEBUFFER,Ft);const ee=w.textures[jt],re=ee.format,ne=ee.type;if(!Kt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ge),B.bufferData(B.PIXEL_PACK_BUFFER,St.byteLength,B.STREAM_READ),w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+jt),B.readPixels(Z,ot,ct,Q,Bt.convert(re),Bt.convert(ne),0);const Le=j!==null?Wt.get(j).__webglFramebuffer:null;kt.bindFramebuffer(B.FRAMEBUFFER,Le);const Xe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await LE(B,Xe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ge),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,St),B.deleteBuffer(ge),B.deleteSync(Xe),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,ot=0){const ct=Math.pow(2,-ot),Q=Math.floor(w.image.width*ct),St=Math.floor(w.image.height*ct),Pt=Z!==null?Z.x:0,jt=Z!==null?Z.y:0;le.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,ot,0,0,Pt,jt,Q,St),kt.unbindTexture()};const sl=B.createFramebuffer(),ir=B.createFramebuffer();this.copyTextureToTexture=function(w,Z,ot=null,ct=null,Q=0,St=null){St===null&&(Q!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=Q,Q=0):St=0);let Pt,jt,Ft,ee,re,ne,ge,Le,Xe;const Oe=w.isCompressedTexture?w.mipmaps[St]:w.image;if(ot!==null)Pt=ot.max.x-ot.min.x,jt=ot.max.y-ot.min.y,Ft=ot.isBox3?ot.max.z-ot.min.z:1,ee=ot.min.x,re=ot.min.y,ne=ot.isBox3?ot.min.z:0;else{const On=Math.pow(2,-Q);Pt=Math.floor(Oe.width*On),jt=Math.floor(Oe.height*On),w.isDataArrayTexture?Ft=Oe.depth:w.isData3DTexture?Ft=Math.floor(Oe.depth*On):Ft=1,ee=0,re=0,ne=0}ct!==null?(ge=ct.x,Le=ct.y,Xe=ct.z):(ge=0,Le=0,Xe=0);const ve=Bt.convert(Z.format),Xt=Bt.convert(Z.type);let qe;Z.isData3DTexture?(le.setTexture3D(Z,0),qe=B.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(le.setTexture2DArray(Z,0),qe=B.TEXTURE_2D_ARRAY):(le.setTexture2D(Z,0),qe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Z.unpackAlignment);const Re=B.getParameter(B.UNPACK_ROW_LENGTH),bn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ii=B.getParameter(B.UNPACK_SKIP_PIXELS),xn=B.getParameter(B.UNPACK_SKIP_ROWS),ar=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Oe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Oe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ee),B.pixelStorei(B.UNPACK_SKIP_ROWS,re),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ne);const Me=w.isDataArrayTexture||w.isData3DTexture,Cn=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const On=Wt.get(w),pn=Wt.get(Z),rn=Wt.get(On.__renderTarget),Hr=Wt.get(pn.__renderTarget);kt.bindFramebuffer(B.READ_FRAMEBUFFER,rn.__webglFramebuffer),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let Ri=0;Ri<Ft;Ri++)Me&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Wt.get(w).__webglTexture,Q,ne+Ri),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Wt.get(Z).__webglTexture,St,Xe+Ri)),B.blitFramebuffer(ee,re,Pt,jt,ge,Le,Pt,jt,B.DEPTH_BUFFER_BIT,B.NEAREST);kt.bindFramebuffer(B.READ_FRAMEBUFFER,null),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||Wt.has(w)){const On=Wt.get(w),pn=Wt.get(Z);kt.bindFramebuffer(B.READ_FRAMEBUFFER,sl),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,ir);for(let rn=0;rn<Ft;rn++)Me?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,On.__webglTexture,Q,ne+rn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,On.__webglTexture,Q),Cn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,St,Xe+rn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,St),Q!==0?B.blitFramebuffer(ee,re,Pt,jt,ge,Le,Pt,jt,B.COLOR_BUFFER_BIT,B.NEAREST):Cn?B.copyTexSubImage3D(qe,St,ge,Le,Xe+rn,ee,re,Pt,jt):B.copyTexSubImage2D(qe,St,ge,Le,ee,re,Pt,jt);kt.bindFramebuffer(B.READ_FRAMEBUFFER,null),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Cn?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(qe,St,ge,Le,Xe,Pt,jt,Ft,ve,Xt,Oe.data):Z.isCompressedArrayTexture?B.compressedTexSubImage3D(qe,St,ge,Le,Xe,Pt,jt,Ft,ve,Oe.data):B.texSubImage3D(qe,St,ge,Le,Xe,Pt,jt,Ft,ve,Xt,Oe):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,St,ge,Le,Pt,jt,ve,Xt,Oe.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,St,ge,Le,Oe.width,Oe.height,ve,Oe.data):B.texSubImage2D(B.TEXTURE_2D,St,ge,Le,Pt,jt,ve,Xt,Oe);B.pixelStorei(B.UNPACK_ROW_LENGTH,Re),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,bn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ii),B.pixelStorei(B.UNPACK_SKIP_ROWS,xn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ar),St===0&&Z.generateMipmaps&&B.generateMipmap(qe),kt.unbindTexture()},this.initRenderTarget=function(w){Wt.get(w).__webglFramebuffer===void 0&&le.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?le.setTextureCube(w,0):w.isData3DTexture?le.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?le.setTexture2DArray(w,0):le.setTexture2D(w,0),kt.unbindTexture()},this.resetState=function(){G=0,I=0,j=null,kt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const yv={type:"change"},gp={type:"start"},Ex={type:"end"},Gc=new su,Sv=new Ka,nw=Math.cos(70*NE.DEG2RAD),gn=new at,Xn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},eh=1e-6;class iw extends v1{constructor(t,i=null){super(t,i),this.state=ke.NONE,this.target=new at,this.cursor=new at,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ps.ROTATE,MIDDLE:Ps.DOLLY,RIGHT:Ps.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new at,this._lastQuaternion=new Lr,this._lastTargetPosition=new at,this._quat=new Lr().setFromUnitVectors(t.up,new at(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Y_,this._sphericalDelta=new Y_,this._scale=1,this._panOffset=new at,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new at,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rw.bind(this),this._onPointerDown=aw.bind(this),this._onPointerUp=sw.bind(this),this._onContextMenu=hw.bind(this),this._onMouseWheel=cw.bind(this),this._onKeyDown=uw.bind(this),this._onTouchStart=fw.bind(this),this._onTouchMove=dw.bind(this),this._onMouseDown=ow.bind(this),this._onMouseMove=lw.bind(this),this._interceptControlDown=pw.bind(this),this._interceptControlUp=mw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yv),this.update(),this.state=ke.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Xn:s>Math.PI&&(s-=Xn),l<-Math.PI?l+=Xn:l>Math.PI&&(l-=Xn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=gn.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new at(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new at(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Gc.origin.copy(this.object.position),Gc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gc.direction))<nw?this.object.lookAt(this.target):(Sv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gc.intersectPlane(Sv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>eh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>eh||this._lastTargetPosition.distanceToSquared(this.target)>eh?(this.dispatchEvent(yv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new de,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function aw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function rw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function sw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ex),this.state=ke.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function ow(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ps.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ke.DOLLY;break;case Ps.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}break;case Ps.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(gp)}function lw(r){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function cw(r){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(r.preventDefault(),this.dispatchEvent(gp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Ex))}function uw(r){this.enabled!==!1&&this._handleKeyDown(r)}function fw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ke.TOUCH_ROTATE;break;case Ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ke.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(gp)}function dw(r){switch(this._trackPointer(r),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ke.NONE}}function hw(r){this.enabled!==!1&&r.preventDefault()}function pw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gw(r){return r<0?Math.random()<.5?"O5V":"B2V":r<3?Math.random()<.5?"B8V":"A0V":r<6?Math.random()<.5?"A5V":"F2V":r<7.5?Math.random()<.5?"F8V":"G0V":r<9?`G${Math.floor(Math.random()*10)}V`:r<11?`K${Math.floor(Math.random()*10)}V`:`M${Math.floor(Math.random()*8)}V`}function _w(r){return!r||typeof r!="string"?"G":r.charAt(0).toUpperCase()}function vw(r){const t={O:new _e(10203391),B:new _e(11190271),A:new _e(13293567),F:new _e(16316415),G:new _e(16774378),K:new _e(16765601),M:new _e(16764015)};return t[r]||t.G}function xw(r){const t={O:{min:3e4,max:5e4},B:{min:1e4,max:3e4},A:{min:7500,max:1e4},F:{min:6e3,max:7500},G:{min:5200,max:6e3},K:{min:3700,max:5200},M:{min:2400,max:3700}};return t[r]||t.G}function yw(r){return{O:"Blue Supergiant",B:"Blue-White Star",A:"White Star",F:"Yellow-White Star",G:"Yellow Star (Sun-like)",K:"Orange Dwarf",M:"Red Dwarf"}[r]||"Unknown Star Type"}function Kh(r,t,i=8){const s=r*Math.PI/180,l=t*Math.PI/180,c=i*Math.cos(l)*Math.cos(s),f=i*Math.sin(l),h=-i*Math.cos(l)*Math.sin(s);return{x:c,y:f,z:h}}function Tx(r){const t=r.spectralClass||gw(r.magnitude||10),i=_w(t);return vw(i)}function Ax(r){let t=4;if(r.magnitude&&!isNaN(r.magnitude)){const i=(15-Math.min(r.magnitude,15))/10;t+=i*2}if(r.depth&&!isNaN(r.depth)){const i=Math.log10(Math.abs(r.depth)+1);t+=i*1}if(r.period&&!isNaN(r.period)){const i=Math.log10(r.period+1)/5;t+=i*.8}return Math.max(3,Math.min(t,10))}function Rx(r,t=[],i={}){const s=[],l=[],c=[],f=[];r.forEach(g=>{const{x:v,y,z:b}=Kh(g.ra,g.dec);s.push(v,y,b);const T=Tx(g);l.push(T.r,T.g,T.b);const M=Ax(g);c.push(M),f.push(1)}),t.forEach(g=>{const{x:v,y,z:b}=Kh(g.ra,g.dec);s.push(v,y,b),l.push(.3,.3,.35),c.push(1.2),f.push(.15)});const h=new xa;h.setAttribute("position",new Ei(s,3)),h.setAttribute("color",new Ei(l,3)),h.setAttribute("size",new Ei(c,1)),h.setAttribute("alpha",new Ei(f,1));const m=new ga({uniforms:{pointTexture:{value:Sw()}},vertexShader:`
            attribute float size;
            attribute vec3 color;
            attribute float alpha;
            varying vec3 vColor;
            varying float vAlpha;

            void main() {
                vColor = color;
                vAlpha = alpha;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                // Size multiplier increased for better visibility
                gl_PointSize = size * (800.0 / length(mvPosition.xyz));
                gl_Position = projectionMatrix * mvPosition;
            }
        `,fragmentShader:`
            uniform sampler2D pointTexture;
            varying vec3 vColor;
            varying float vAlpha;

            void main() {
                vec4 texColor = texture2D(pointTexture, gl_PointCoord);
                float dist = distance(gl_PointCoord, vec2(0.5));

                // Enhanced brightness and glow - increased for better visibility
                float coreBrightness = 1.0 - smoothstep(0.0, 0.2, dist);
                float outerGlow = 1.0 - smoothstep(0.1, 0.5, dist);

                // Much brighter colors - increased multipliers
                vec3 finalColor = vColor * (coreBrightness * 5.0 + outerGlow * 3.0);

                // Use vAlpha to control overall opacity (for dimming background stars)
                float alpha = texColor.a * outerGlow * vAlpha;

                gl_FragColor = vec4(finalColor, alpha);
            }
        `,transparent:!0,depthWrite:!1,blending:ah}),p=new c1(h,m),_=r.length+t.length;return console.log(`Created star field: ${r.length} highlighted + ${t.length} dimmed = ${_} total`),p}function Sw(){const r=document.createElement("canvas");r.width=128,r.height=128;const t=r.getContext("2d"),i=64,s=t.createRadialGradient(i,i,0,i,i,64);s.addColorStop(0,"rgba(255, 255, 255, 1.0)"),s.addColorStop(.1,"rgba(255, 255, 255, 0.9)"),s.addColorStop(.3,"rgba(255, 255, 255, 0.6)"),s.addColorStop(.6,"rgba(255, 255, 255, 0.2)"),s.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=s,t.fillRect(0,0,128,128),t.globalCompositeOperation="screen";const l=t.createLinearGradient(0,i,128,i);l.addColorStop(0,"rgba(255, 255, 255, 0)"),l.addColorStop(.45,"rgba(255, 255, 255, 0.3)"),l.addColorStop(.5,"rgba(255, 255, 255, 0.6)"),l.addColorStop(.55,"rgba(255, 255, 255, 0.3)"),l.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=l,t.fillRect(0,i-3,128,6);const c=t.createLinearGradient(i,0,i,128);c.addColorStop(0,"rgba(255, 255, 255, 0)"),c.addColorStop(.45,"rgba(255, 255, 255, 0.3)"),c.addColorStop(.5,"rgba(255, 255, 255, 0.6)"),c.addColorStop(.55,"rgba(255, 255, 255, 0.3)"),c.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=c,t.fillRect(i-3,0,6,128);const f=new Fn(r);return f.needsUpdate=!0,f}const Mw=Object.freeze(Object.defineProperty({__proto__:null,calculateStarSize:Ax,createStarField:Rx,getStarColor:Tx,raDec2Cartesian:Kh},Symbol.toStringTag,{value:"Module"}));function bw(r){return r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2}function Mv(r,t,i,s,l=3e3,c=null){const f=r.position.clone(),h=t.target.clone(),m=performance.now(),p=f.length(),_=f.clone().normalize(),g=i.clone().normalize();let v=null;const y=b=>{const T=b-m,M=Math.min(T/l,1),x=bw(M),U=_.angleTo(g),L=Math.sin(U);let N;if(L<.001)N=new at().lerpVectors(f,i,x);else{const k=Math.sin((1-x)*U)/L,G=Math.sin(x*U)/L;N=new at(k*_.x+G*g.x,k*_.y+G*g.y,k*_.z+G*g.z).normalize().multiplyScalar(p)}r.position.copy(N),t.target.lerpVectors(h,s,x),t.update(),M<1?v=requestAnimationFrame(y):(t.target.set(0,0,0),t.update(),c&&c())};return v=requestAnimationFrame(y),{cancel:()=>{v&&cancelAnimationFrame(v)}}}const bv=()=>{const r=dt.useRef(null),t=dt.useRef(null),i=dt.useRef(null),s=dt.useRef(null),l=dt.useRef(null),c=dt.useRef(null),f=dt.useRef(null),h=dt.useRef(new de);Be(v=>v.selectedTid);const m=Be(v=>v.setSelectedTid),p=Be(v=>v.parsedData),_=Be(v=>v.scoresByTid),g=Be(v=>v.candidates);return dt.useEffect(()=>{if(!r.current)return;const v=new a1;v.background=new _e(0),v.fog=new hp(0,.001),t.current=v;const y=new pi(40,r.current.clientWidth/r.current.clientHeight,.1,1e3);y.position.set(0,5,35),y.lookAt(0,0,0),i.current=y;const b=new ew({antialias:!0,alpha:!0});b.setSize(r.current.clientWidth,r.current.clientHeight),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.current.appendChild(b.domElement),s.current=b;const T=new m1(4210752,1.5);v.add(T);const M=new p1(16777215,1);M.position.set(100,100,100),v.add(M);const x=new iw(y,b.domElement);x.enableDamping=!0,x.dampingFactor=.05,x.enableZoom=!0,x.enablePan=!1,x.minDistance=15,x.maxDistance=70,x.rotateSpeed=.5,x.target.set(0,0,0),x.autoRotate=!1,x.screenSpacePanning=!1,l.current=x;const U=new _1;U.params.Points.threshold=2,f.current=U,fetch("/frontend/data/stars.json").then(j=>j.json()).then(j=>{console.log(`Loaded ${j.length} stars from stars.json`);const C=p.map(J=>J.tid).filter(Boolean);console.log(`Uploaded TIDs: ${C.length}`,C);let D,O;C.length>0?(D=j.filter(J=>C.includes(J.tid)),O=j.filter(J=>!C.includes(J.tid)),console.log(`Relevant stars (from upload): ${D.length}`),console.log(`Background stars (dimmed): ${O.length}`)):(D=j,O=[],console.log(`Demo mode: showing all ${j.length} stars`));const V=Rx(D,O,_);v.add(V),c.current=V,window.currentStarData=D,window.allStarData=j,console.log("Star field created with uploaded data highlighted")}).catch(j=>{console.error("Failed to load stars.json:",j)});const L=j=>{if(!c.current)return;const C=r.current.getBoundingClientRect();h.current.x=(j.clientX-C.left)/C.width*2-1,h.current.y=-((j.clientY-C.top)/C.height)*2+1,U.setFromCamera(h.current,y);const D=U.intersectObject(c.current);if(D.length>0){const O=D[0].index,J=(window.currentStarData||[])[O];if(J&&J.tid){console.log("Star clicked:",J),g.includes(J.tid)?(m(J.tid),console.log("Candidate star selected - showing info panel")):console.log("Non-candidate star clicked - camera animation only");const $=new at(D[0].point.x,D[0].point.y,D[0].point.z),F=$.clone().normalize().multiplyScalar(35);Mv(y,x,F,$,3e3)}}};b.domElement.addEventListener("click",L);const N=j=>{const{tid:C}=j.detail,O=(window.allStarData||[]).find(V=>V.tid===C);O&&O.ra!==void 0&&O.dec!==void 0?Gb(async()=>{const{raDec2Cartesian:V}=await Promise.resolve().then(()=>Mw);return{raDec2Cartesian:V}},[]).then(({raDec2Cartesian:V})=>{const{x:J,y:$,z:ut}=V(O.ra,O.dec),F=new at(J,$,ut),q=F.clone().normalize().multiplyScalar(35);console.log(`Flying to star TID ${C} at position:`,F,`(RA: ${O.ra}, DEC: ${O.dec})`),Mv(y,x,q,F,3e3)}):console.warn(`Star TID ${C} not found in stars.json or missing RA/DEC coordinates`)};window.addEventListener("flyToStar",N);const k=()=>{r.current&&(y.aspect=r.current.clientWidth/r.current.clientHeight,y.updateProjectionMatrix(),b.setSize(r.current.clientWidth,r.current.clientHeight))};window.addEventListener("resize",k);let G;const I=()=>{G=requestAnimationFrame(I),x.update(),b.render(v,y)};return I(),()=>{cancelAnimationFrame(G),window.removeEventListener("resize",k),window.removeEventListener("flyToStar",N),b.domElement.removeEventListener("click",L),r.current&&b.domElement.parentNode===r.current&&r.current.removeChild(b.domElement),b.dispose()}},[p,_,m]),R.jsx("div",{ref:r,className:"w-full h-full",style:{position:"relative",pointerEvents:"auto"}})},Ev=()=>{const r=Be(_=>_.uploadedFile),t=Be(_=>_.scoresByTid),i=Be(_=>_.threshold),s=Be(_=>_.getOverThresholdCount),l=Object.keys(t).length,c=s(),f=Object.values(t),h=f.length>0?f.reduce((_,g)=>_+g,0)/f.length:0,m=f.length>0?Math.max(...f):0,p=f.length>0?Math.min(...f):0;return R.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-lg p-4",children:[R.jsx("h3",{className:"text-lg font-semibold mb-3 text-blue-400",children:"Analysis Summary"}),r&&R.jsxs("div",{className:"mb-4 pb-4 border-b border-white/10",children:[R.jsx("p",{className:"text-xs text-white/60 mb-2",children:"File"}),R.jsx("p",{className:"text-sm font-mono truncate",title:r.name,children:r.name}),R.jsxs("p",{className:"text-xs text-white/50 mt-1",children:[r.rowCount," rows • ",(r.size/1024).toFixed(1)," KB"]})]}),R.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[R.jsxs("div",{className:"bg-blue-500/10 rounded-md p-3",children:[R.jsx("p",{className:"text-xs text-white/60 mb-1",children:"Total Stars"}),R.jsx("p",{className:"text-2xl font-bold text-blue-400",children:l})]}),R.jsxs("div",{className:"bg-green-500/10 rounded-md p-3",children:[R.jsxs("p",{className:"text-xs text-white/60 mb-1",children:["Above ",i]}),R.jsx("p",{className:"text-2xl font-bold text-green-400",children:c})]}),R.jsxs("div",{className:"bg-purple-500/10 rounded-md p-3",children:[R.jsx("p",{className:"text-xs text-white/60 mb-1",children:"Avg Score"}),R.jsx("p",{className:"text-xl font-bold text-purple-400",children:h.toFixed(1)})]}),R.jsxs("div",{className:"bg-orange-500/10 rounded-md p-3",children:[R.jsx("p",{className:"text-xs text-white/60 mb-1",children:"Max Score"}),R.jsx("p",{className:"text-xl font-bold text-orange-400",children:m.toFixed(1)})]})]}),R.jsxs("div",{className:"mt-4",children:[R.jsx("p",{className:"text-xs text-white/60 mb-2",children:"Score Range"}),R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("span",{className:"text-xs text-white/50",children:p.toFixed(0)}),R.jsx("div",{className:"flex-1 h-2 bg-white/10 rounded-full overflow-hidden",children:R.jsx("div",{className:"h-full bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500",style:{width:`${m/100*100}%`}})}),R.jsx("span",{className:"text-xs text-white/50",children:m.toFixed(0)})]})]})]})},Tv=()=>{const r=Be(c=>c.threshold),t=Be(c=>c.setThreshold),s=Be(c=>c.getOverThresholdCount)(),l=c=>{t(Number(c.target.value))};return R.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-lg p-4",children:[R.jsx("h3",{className:"text-lg font-semibold mb-3 text-blue-400",children:"Score Threshold"}),R.jsxs("div",{className:"space-y-4",children:[R.jsxs("div",{className:"flex justify-between items-center",children:[R.jsx("span",{className:"text-sm text-white/70",children:"Current Threshold"}),R.jsx("span",{className:"text-2xl font-bold text-blue-400",children:r})]}),R.jsxs("div",{className:"relative",children:[R.jsx("input",{type:"range",min:"0",max:"100",value:r,onChange:l,className:`w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer
                     slider-thumb`,style:{background:`linear-gradient(to right, #3b82f6 0%, #3b82f6 ${r}%, rgba(255,255,255,0.1) ${r}%, rgba(255,255,255,0.1) 100%)`}}),R.jsxs("div",{className:"flex justify-between text-xs text-white/50 mt-1",children:[R.jsx("span",{children:"0"}),R.jsx("span",{children:"50"}),R.jsx("span",{children:"100"})]})]}),R.jsx("div",{className:"bg-blue-500/10 border border-blue-500/30 rounded-md p-3",children:R.jsxs("div",{className:"text-center",children:[R.jsx("p",{className:"text-xs text-white/60 mb-1",children:"Candidates Above Threshold"}),R.jsx("p",{className:"text-3xl font-bold text-blue-400",children:s})]})}),R.jsxs("div",{className:"flex gap-2 pt-2",children:[R.jsx("button",{onClick:()=>t(50),className:"flex-1 px-2 py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition",children:"50"}),R.jsx("button",{onClick:()=>t(70),className:"flex-1 px-2 py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition",children:"70"}),R.jsx("button",{onClick:()=>t(80),className:"flex-1 px-2 py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition",children:"80"}),R.jsx("button",{onClick:()=>t(90),className:"flex-1 px-2 py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition",children:"90"})]})]})]})},Av=()=>{const r=Be(h=>h.candidates),t=Be(h=>h.scoresByTid),i=Be(h=>h.threshold),s=Be(h=>h.selectedTid);Be(h=>h.setSelectedTid);const c=Be(h=>h.getOverThresholdTids)(),f=h=>{const m=new CustomEvent("flyToStar",{detail:{tid:h}});window.dispatchEvent(m)};return R.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-lg p-4",children:[R.jsx("h3",{className:"text-lg font-semibold mb-3 text-blue-400",children:"Exoplanet Candidates"}),R.jsxs("div",{className:"mb-4 pb-4 border-b border-white/10",children:[R.jsx("p",{className:"text-sm text-white/60 mb-2",children:"Known Candidates"}),R.jsx("div",{className:"space-y-2",children:r.map(h=>R.jsx("div",{onClick:()=>f(h),className:`
                p-2 rounded-md cursor-pointer transition
                ${s===h?"bg-blue-500/30 border border-blue-400":"bg-white/5 hover:bg-white/10 border border-transparent"}
              `,children:R.jsxs("div",{className:"flex justify-between items-center",children:[R.jsxs("span",{className:"font-mono text-sm",children:["TID ",h]}),R.jsx("span",{className:`
                  text-xs px-2 py-1 rounded
                  ${t[h]>=i?"bg-green-500/20 text-green-400":"bg-orange-500/20 text-orange-400"}
                `,children:t[h]?.toFixed(1)||"N/A"})]})},h))})]}),R.jsxs("div",{children:[R.jsxs("p",{className:"text-sm text-white/60 mb-2",children:["Detected Above Threshold (",c.length,")"]}),c.length===0?R.jsx("p",{className:"text-xs text-white/40",children:"No candidates above threshold"}):R.jsxs("div",{className:"max-h-48 overflow-y-auto space-y-2",children:[c.slice(0,10).map(h=>R.jsx("div",{onClick:()=>f(h),className:`
                  p-2 rounded-md cursor-pointer transition
                  ${s===h?"bg-blue-500/30 border border-blue-400":"bg-white/5 hover:bg-white/10 border border-transparent"}
                `,children:R.jsxs("div",{className:"flex justify-between items-center",children:[R.jsxs("span",{className:"font-mono text-sm",children:["TID ",h]}),R.jsx("span",{className:"text-xs px-2 py-1 rounded bg-green-500/20 text-green-400",children:t[h]?.toFixed(1)})]})},h)),c.length>10&&R.jsxs("p",{className:"text-xs text-white/40 text-center pt-2",children:["+ ",c.length-10," more"]})]})]})]})},Ew=()=>{const r=Be(y=>y.selectedTid),t=Be(y=>y.setSelectedTid),i=Be(y=>y.scoresByTid),s=Be(y=>y.parsedData);if(!r)return null;const l=i[r]||0,c=s.find(y=>y.tid===r),h=(window.currentStarData||[]).find(y=>y.tid===r),m=h?.spectralClass||"G2V",p=h?.spectralType||"G",_=yw(p),g=xw(p),v=()=>{t(null)};return R.jsx("div",{className:"fixed bottom-6 right-6 z-50 w-96 animate-slide-up pointer-events-auto",children:R.jsxs("div",{className:"bg-gradient-to-br from-[#0a0a0f]/95 via-[#1a1a2e]/95 to-[#16213e]/95 backdrop-blur-xl border-2 border-blue-500/40 rounded-2xl shadow-2xl shadow-blue-500/30",children:[R.jsxs("div",{className:"bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-b border-blue-500/30 px-5 py-3 flex justify-between items-center",children:[R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400/50"}),R.jsxs("h2",{className:"text-lg font-bold text-blue-300",children:["TID ",r]})]}),R.jsx("button",{onClick:v,className:"text-white/50 hover:text-white transition-colors text-xl leading-none","aria-label":"Close panel",children:"×"})]}),R.jsxs("div",{className:"p-5 space-y-3",children:[R.jsx("div",{className:"flex justify-center",children:R.jsxs("div",{className:`
              px-5 py-2.5 rounded-xl text-center backdrop-blur-sm
              ${l>=90?"bg-blue-500/20 border border-blue-400/50":"bg-orange-500/20 border border-orange-400/50"}
            `,children:[R.jsx("p",{className:"text-xs text-white/60 mb-0.5",children:"Probability Score"}),R.jsxs("p",{className:`text-2xl font-bold ${l>=90?"text-blue-400":"text-orange-400"}`,children:[l.toFixed(1),"%"]})]})}),R.jsxs("div",{className:"space-y-2.5 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10",children:[R.jsxs("div",{className:"flex justify-between items-center",children:[R.jsx("span",{className:"text-sm text-white/60",children:"Catalog ID:"}),R.jsxs("span",{className:"font-mono text-sm text-white font-medium",children:["TID",r]})]}),R.jsxs("div",{className:"flex justify-between items-center",children:[R.jsx("span",{className:"text-sm text-white/60",children:"Spectral Class:"}),R.jsxs("div",{className:"text-right",children:[R.jsx("span",{className:"font-mono text-white font-bold",children:m}),R.jsx("p",{className:"text-xs text-white/50 mt-0.5",children:_})]})]}),R.jsxs("div",{className:"flex justify-between items-center",children:[R.jsx("span",{className:"text-sm text-white/60",children:"Temperature:"}),R.jsxs("span",{className:"font-mono text-sm text-white font-medium",children:["~",Math.round((g.min+g.max)/2).toLocaleString()," K"]})]}),c&&R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"flex justify-between items-center",children:[R.jsx("span",{className:"text-sm text-white/60",children:"Period:"}),R.jsxs("span",{className:"font-mono text-sm text-white font-medium",children:[parseFloat(c.features[1])?.toFixed(4)||"N/A"," days"]})]}),R.jsxs("div",{className:"flex justify-between items-center",children:[R.jsx("span",{className:"text-sm text-white/60",children:"Depth:"}),R.jsx("span",{className:"font-mono text-sm text-white font-medium",children:parseFloat(c.features[2])?.toFixed(6)||"N/A"})]}),R.jsxs("div",{className:"flex justify-between items-center",children:[R.jsx("span",{className:"text-sm text-white/60",children:"Magnitude:"}),R.jsx("span",{className:"font-mono text-sm text-white font-medium",children:parseFloat(c.features[3])?.toFixed(2)||"N/A"})]})]}),R.jsxs("div",{className:"flex justify-between items-center pt-1 border-t border-white/10",children:[R.jsx("span",{className:"text-sm text-white/60",children:"Classification:"}),R.jsx("span",{className:`text-sm font-semibold ${l>=90?"text-blue-400":"text-orange-400"}`,children:l>=90?"High Confidence":"Moderate Confidence"})]})]}),R.jsx("div",{className:`
            rounded-xl p-2.5 text-xs text-center backdrop-blur-sm
            ${l>=90?"bg-blue-500/10 text-blue-300 border border-blue-500/30":"bg-orange-500/10 text-orange-300 border border-orange-500/30"}
          `,children:l>=90?"Strong exoplanet candidate - High probability detection":"Moderate candidate - Further verification recommended"}),R.jsxs("div",{className:"flex gap-2.5",children:[R.jsx("button",{onClick:v,className:"flex-1 bg-white/10 hover:bg-white/20 text-white text-sm py-2 rounded-lg transition-colors",children:"Close"}),R.jsx("button",{className:"flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm py-2 rounded-lg transition-all shadow-lg shadow-blue-500/20",onClick:()=>{console.log("Export star data:",{tid:r,score:l,...c})},children:"Export Data"})]})]})]})})},Tw=()=>{const r=Be(g=>g.phase),t=Be(g=>g.uploadedFile),i=Be(g=>g.parsedData),s=Be(g=>g.threshold),l=Be(g=>g.getOverThresholdCount),[c,f]=dt.useState(window.innerWidth>=1024),[h,m]=dt.useState(0),[p,_]=dt.useState("Initializing...");return dt.useEffect(()=>{const g=()=>{f(window.innerWidth>=1024)};return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]),dt.useEffect(()=>{if(r==="analyzing"){m(0),_("Loading light curve data...");const g=setTimeout(()=>{m(25),_("Calculating probability scores...")},500),v=setTimeout(()=>{m(60),_("Applying threshold filter...")},1200),y=setTimeout(()=>{m(85),_("Identifying candidates...")},1800),b=setTimeout(()=>{m(100),_("Analysis complete!")},2300);return()=>{clearTimeout(g),clearTimeout(v),clearTimeout(y),clearTimeout(b)}}},[r]),r==="analyzing"?R.jsx("div",{"data-visualizer":!0,className:"fixed inset-0 bg-black text-white flex items-center justify-center px-6",children:R.jsxs("div",{className:"max-w-2xl w-full",children:[R.jsxs("div",{className:"text-center mb-8",children:[R.jsx("div",{className:"animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500 mx-auto mb-6"}),R.jsx("h1",{className:"text-3xl font-bold mb-3",children:"AI Analysis in Progress"}),R.jsxs("p",{className:"text-white/70 text-lg",children:["Processing ",t?.name]})]}),R.jsxs("div",{className:"mb-6",children:[R.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[R.jsx("span",{className:"text-white/80",children:p}),R.jsxs("span",{className:"text-blue-400 font-mono",children:[h,"%"]})]}),R.jsx("div",{className:"w-full bg-white/10 rounded-full h-3 overflow-hidden",children:R.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-500 ease-out",style:{width:`${h}%`}})})]}),R.jsxs("div",{className:"bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 space-y-4",children:[R.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Analysis Parameters"}),R.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[R.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[R.jsx("div",{className:"text-white/60 text-sm mb-1",children:"Total Targets"}),R.jsx("div",{className:"text-2xl font-bold text-blue-400",children:i.length||0})]}),R.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[R.jsx("div",{className:"text-white/60 text-sm mb-1",children:"Threshold"}),R.jsxs("div",{className:"text-2xl font-bold text-purple-400",children:[s,"%"]})]})]}),h>=85&&R.jsxs("div",{className:"bg-black/30 rounded-lg p-4 animate-pulse",children:[R.jsx("div",{className:"text-white/60 text-sm mb-1",children:"Candidates Found"}),R.jsx("div",{className:"text-3xl font-bold text-green-400",children:l()})]})]}),R.jsxs("div",{className:"mt-6 text-center text-white/50 text-sm",children:[R.jsx("p",{children:"AI model calculating planet probability scores (0-100%)"}),R.jsxs("p",{className:"mt-1",children:["Filtering targets above ",s,"% confidence threshold"]})]})]})}):R.jsxs("div",{"data-visualizer":!0,className:"fixed inset-0 bg-black text-white",children:[R.jsxs("div",{className:"hidden lg:grid lg:grid-cols-[2fr,1fr] h-full w-full",children:[R.jsx("div",{className:"relative h-full w-full bg-gradient-to-br from-black via-[#1f1925] to-black overflow-hidden",children:c&&R.jsx(bv,{})}),R.jsx("div",{className:"bg-black/50 backdrop-blur-md border-l border-white/10 overflow-y-scroll h-full relative z-10",children:R.jsxs("div",{className:"p-6 space-y-6",children:[R.jsx("h2",{className:"text-2xl font-bold",children:"Control Panel"}),R.jsx(Ev,{}),R.jsx(Tv,{}),R.jsx(Av,{})]})})]}),R.jsxs("div",{className:"lg:hidden h-full w-full flex flex-col",children:[R.jsx("div",{className:"h-[50vh] w-full bg-gradient-to-br from-black via-[#1f1925] to-black",children:!c&&R.jsx(bv,{})}),R.jsxs("div",{className:"flex-1 bg-black/50 backdrop-blur-md p-4 space-y-4 overflow-y-auto",children:[R.jsx("h2",{className:"text-xl font-bold",children:"Control Panel"}),R.jsx(Ev,{}),R.jsx(Tv,{}),R.jsx(Av,{})]})]}),R.jsx(Ew,{})]})};var Qc={exports:{}},Aw=Qc.exports,Rv;function Rw(){return Rv||(Rv=1,(function(r,t){(function(i,s){r.exports=s()})(Aw,function(){return(function(i){function s(c){if(l[c])return l[c].exports;var f=l[c]={exports:{},id:c,loaded:!1};return i[c].call(f.exports,f,f.exports,s),f.loaded=!0,f.exports}var l={};return s.m=i,s.c=l,s.p="dist/",s(0)})([function(i,s,l){function c($){return $&&$.__esModule?$:{default:$}}var f=Object.assign||function($){for(var ut=1;ut<arguments.length;ut++){var F=arguments[ut];for(var Y in F)Object.prototype.hasOwnProperty.call(F,Y)&&($[Y]=F[Y])}return $},h=l(1),m=(c(h),l(6)),p=c(m),_=l(7),g=c(_),v=l(8),y=c(v),b=l(9),T=c(b),M=l(10),x=c(M),U=l(11),L=c(U),N=l(14),k=c(N),G=[],I=!1,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},C=function(){var $=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if($&&(I=!0),I)return G=(0,L.default)(G,j),(0,x.default)(G,j.once),G},D=function(){G=(0,k.default)(),C()},O=function(){G.forEach(function($,ut){$.node.removeAttribute("data-aos"),$.node.removeAttribute("data-aos-easing"),$.node.removeAttribute("data-aos-duration"),$.node.removeAttribute("data-aos-delay")})},V=function($){return $===!0||$==="mobile"&&T.default.mobile()||$==="phone"&&T.default.phone()||$==="tablet"&&T.default.tablet()||typeof $=="function"&&$()===!0},J=function($){j=f(j,$),G=(0,k.default)();var ut=document.all&&!window.atob;return V(j.disable)||ut?O():(j.disableMutationObserver||y.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),j.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),j.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?C(!0):j.startEvent==="load"?window.addEventListener(j.startEvent,function(){C(!0)}):document.addEventListener(j.startEvent,function(){C(!0)}),window.addEventListener("resize",(0,g.default)(C,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,g.default)(C,j.debounceDelay,!0)),window.addEventListener("scroll",(0,p.default)(function(){(0,x.default)(G,j.once)},j.throttleDelay)),j.disableMutationObserver||y.default.ready("[data-aos]",D),G)};i.exports={init:J,refresh:C,refreshHard:D}},function(i,s){},,,,,function(i,s){(function(l){function c(V,J,$){function ut(qt){var Yt=bt,Kt=Nt;return bt=Nt=void 0,It=qt,lt=V.apply(Kt,Yt)}function F(qt){return It=qt,At=setTimeout(xt,J),se?ut(qt):lt}function Y(qt){var Yt=qt-Lt,Kt=qt-It,kt=J-Yt;return Ue?D(kt,tt-Kt):kt}function q(qt){var Yt=qt-Lt,Kt=qt-It;return Lt===void 0||Yt>=J||Yt<0||Ue&&Kt>=tt}function xt(){var qt=O();return q(qt)?Et(qt):void(At=setTimeout(xt,Y(qt)))}function Et(qt){return At=void 0,B&&bt?ut(qt):(bt=Nt=void 0,lt)}function z(){At!==void 0&&clearTimeout(At),It=0,bt=Lt=Nt=At=void 0}function rt(){return At===void 0?lt:Et(O())}function yt(){var qt=O(),Yt=q(qt);if(bt=arguments,Nt=this,Lt=qt,Yt){if(At===void 0)return F(Lt);if(Ue)return At=setTimeout(xt,J),ut(Lt)}return At===void 0&&(At=setTimeout(xt,J)),lt}var bt,Nt,tt,lt,At,Lt,It=0,se=!1,Ue=!1,B=!0;if(typeof V!="function")throw new TypeError(v);return J=_(J)||0,h($)&&(se=!!$.leading,Ue="maxWait"in $,tt=Ue?C(_($.maxWait)||0,J):tt,B="trailing"in $?!!$.trailing:B),yt.cancel=z,yt.flush=rt,yt}function f(V,J,$){var ut=!0,F=!0;if(typeof V!="function")throw new TypeError(v);return h($)&&(ut="leading"in $?!!$.leading:ut,F="trailing"in $?!!$.trailing:F),c(V,J,{leading:ut,maxWait:J,trailing:F})}function h(V){var J=typeof V>"u"?"undefined":g(V);return!!V&&(J=="object"||J=="function")}function m(V){return!!V&&(typeof V>"u"?"undefined":g(V))=="object"}function p(V){return(typeof V>"u"?"undefined":g(V))=="symbol"||m(V)&&j.call(V)==b}function _(V){if(typeof V=="number")return V;if(p(V))return y;if(h(V)){var J=typeof V.valueOf=="function"?V.valueOf():V;V=h(J)?J+"":J}if(typeof V!="string")return V===0?V:+V;V=V.replace(T,"");var $=x.test(V);return $||U.test(V)?L(V.slice(2),$?2:8):M.test(V)?y:+V}var g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(V){return typeof V}:function(V){return V&&typeof Symbol=="function"&&V.constructor===Symbol&&V!==Symbol.prototype?"symbol":typeof V},v="Expected a function",y=NaN,b="[object Symbol]",T=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,U=/^0o[0-7]+$/i,L=parseInt,N=(typeof l>"u"?"undefined":g(l))=="object"&&l&&l.Object===Object&&l,k=(typeof self>"u"?"undefined":g(self))=="object"&&self&&self.Object===Object&&self,G=N||k||Function("return this")(),I=Object.prototype,j=I.toString,C=Math.max,D=Math.min,O=function(){return G.Date.now()};i.exports=f}).call(s,(function(){return this})())},function(i,s){(function(l){function c(O,V,J){function $(B){var qt=yt,Yt=bt;return yt=bt=void 0,Lt=B,tt=O.apply(Yt,qt)}function ut(B){return Lt=B,lt=setTimeout(q,V),It?$(B):tt}function F(B){var qt=B-At,Yt=B-Lt,Kt=V-qt;return se?C(Kt,Nt-Yt):Kt}function Y(B){var qt=B-At,Yt=B-Lt;return At===void 0||qt>=V||qt<0||se&&Yt>=Nt}function q(){var B=D();return Y(B)?xt(B):void(lt=setTimeout(q,F(B)))}function xt(B){return lt=void 0,Ue&&yt?$(B):(yt=bt=void 0,tt)}function Et(){lt!==void 0&&clearTimeout(lt),Lt=0,yt=At=bt=lt=void 0}function z(){return lt===void 0?tt:xt(D())}function rt(){var B=D(),qt=Y(B);if(yt=arguments,bt=this,At=B,qt){if(lt===void 0)return ut(At);if(se)return lt=setTimeout(q,V),$(At)}return lt===void 0&&(lt=setTimeout(q,V)),tt}var yt,bt,Nt,tt,lt,At,Lt=0,It=!1,se=!1,Ue=!0;if(typeof O!="function")throw new TypeError(g);return V=p(V)||0,f(J)&&(It=!!J.leading,se="maxWait"in J,Nt=se?j(p(J.maxWait)||0,V):Nt,Ue="trailing"in J?!!J.trailing:Ue),rt.cancel=Et,rt.flush=z,rt}function f(O){var V=typeof O>"u"?"undefined":_(O);return!!O&&(V=="object"||V=="function")}function h(O){return!!O&&(typeof O>"u"?"undefined":_(O))=="object"}function m(O){return(typeof O>"u"?"undefined":_(O))=="symbol"||h(O)&&I.call(O)==y}function p(O){if(typeof O=="number")return O;if(m(O))return v;if(f(O)){var V=typeof O.valueOf=="function"?O.valueOf():O;O=f(V)?V+"":V}if(typeof O!="string")return O===0?O:+O;O=O.replace(b,"");var J=M.test(O);return J||x.test(O)?U(O.slice(2),J?2:8):T.test(O)?v:+O}var _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},g="Expected a function",v=NaN,y="[object Symbol]",b=/^\s+|\s+$/g,T=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,x=/^0o[0-7]+$/i,U=parseInt,L=(typeof l>"u"?"undefined":_(l))=="object"&&l&&l.Object===Object&&l,N=(typeof self>"u"?"undefined":_(self))=="object"&&self&&self.Object===Object&&self,k=L||N||Function("return this")(),G=Object.prototype,I=G.toString,j=Math.max,C=Math.min,D=function(){return k.Date.now()};i.exports=c}).call(s,(function(){return this})())},function(i,s){function l(_){var g=void 0,v=void 0;for(g=0;g<_.length;g+=1)if(v=_[g],v.dataset&&v.dataset.aos||v.children&&l(v.children))return!0;return!1}function c(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function f(){return!!c()}function h(_,g){var v=window.document,y=c(),b=new y(m);p=g,b.observe(v.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function m(_){_&&_.forEach(function(g){var v=Array.prototype.slice.call(g.addedNodes),y=Array.prototype.slice.call(g.removedNodes),b=v.concat(y);if(l(b))return p()})}Object.defineProperty(s,"__esModule",{value:!0});var p=function(){};s.default={isSupported:f,ready:h}},function(i,s){function l(v,y){if(!(v instanceof y))throw new TypeError("Cannot call a class as a function")}function c(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var f=(function(){function v(y,b){for(var T=0;T<b.length;T++){var M=b[T];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(y,M.key,M)}}return function(y,b,T){return b&&v(y.prototype,b),T&&v(y,T),y}})(),h=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,m=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,p=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,_=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,g=(function(){function v(){l(this,v)}return f(v,[{key:"phone",value:function(){var y=c();return!(!h.test(y)&&!m.test(y.substr(0,4)))}},{key:"mobile",value:function(){var y=c();return!(!p.test(y)&&!_.test(y.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),v})();s.default=new g},function(i,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(f,h,m){var p=f.node.getAttribute("data-aos-once");h>f.position?f.node.classList.add("aos-animate"):typeof p<"u"&&(p==="false"||!m&&p!=="true")&&f.node.classList.remove("aos-animate")},c=function(f,h){var m=window.pageYOffset,p=window.innerHeight;f.forEach(function(_,g){l(_,p+m,h)})};s.default=c},function(i,s,l){function c(p){return p&&p.__esModule?p:{default:p}}Object.defineProperty(s,"__esModule",{value:!0});var f=l(12),h=c(f),m=function(p,_){return p.forEach(function(g,v){g.node.classList.add("aos-init"),g.position=(0,h.default)(g.node,_.offset)}),p};s.default=m},function(i,s,l){function c(p){return p&&p.__esModule?p:{default:p}}Object.defineProperty(s,"__esModule",{value:!0});var f=l(13),h=c(f),m=function(p,_){var g=0,v=0,y=window.innerHeight,b={offset:p.getAttribute("data-aos-offset"),anchor:p.getAttribute("data-aos-anchor"),anchorPlacement:p.getAttribute("data-aos-anchor-placement")};switch(b.offset&&!isNaN(b.offset)&&(v=parseInt(b.offset)),b.anchor&&document.querySelectorAll(b.anchor)&&(p=document.querySelectorAll(b.anchor)[0]),g=(0,h.default)(p).top,b.anchorPlacement){case"top-bottom":break;case"center-bottom":g+=p.offsetHeight/2;break;case"bottom-bottom":g+=p.offsetHeight;break;case"top-center":g+=y/2;break;case"bottom-center":g+=y/2+p.offsetHeight;break;case"center-center":g+=y/2+p.offsetHeight/2;break;case"top-top":g+=y;break;case"bottom-top":g+=p.offsetHeight+y;break;case"center-top":g+=p.offsetHeight/2+y}return b.anchorPlacement||b.offset||isNaN(_)||(v=_),g+v};s.default=m},function(i,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(c){for(var f=0,h=0;c&&!isNaN(c.offsetLeft)&&!isNaN(c.offsetTop);)f+=c.offsetLeft-(c.tagName!="BODY"?c.scrollLeft:0),h+=c.offsetTop-(c.tagName!="BODY"?c.scrollTop:0),c=c.offsetParent;return{top:h,left:f}};s.default=l},function(i,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(c){return c=c||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(c,function(f){return{node:f}})};s.default=l}])})})(Qc)),Qc.exports}var ww=Rw();const Cw=wv(ww),Dw=()=>R.jsxs(R.Fragment,{children:[R.jsx(Eb,{}),R.jsx(Ab,{}),R.jsx(wb,{})]}),Nw=()=>(dt.useEffect(()=>{Cw.init({duration:1200,easing:"ease-in-out"})},[]),R.jsx("div",{className:"",children:R.jsxs(UM,{children:[R.jsx(Vc,{path:"/",element:R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"h-[700px] relative",children:[R.jsx("video",{autoPlay:!0,loop:!0,muted:!0,className:"fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]",children:R.jsx("source",{src:p_,type:"video/mp4"})}),R.jsx(d_,{}),R.jsx(hb,{})]}),R.jsx(Dw,{}),R.jsx(m_,{})]})}),R.jsx(Vc,{path:"/byod",element:R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"h-[700px] relative",children:[R.jsx("video",{autoPlay:!0,loop:!0,muted:!0,className:"fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]",children:R.jsx("source",{src:p_,type:"video/mp4"})}),R.jsx(d_,{}),R.jsx(Bb,{})]}),R.jsx(m_,{})]})}),R.jsx(Vc,{path:"/visualizer",element:R.jsx(Tw,{})})]})}));VS.createRoot(document.getElementById("root")).render(R.jsx(dt.StrictMode,{children:R.jsx(eb,{basename:"/frontend",children:R.jsx(Nw,{})})}));
