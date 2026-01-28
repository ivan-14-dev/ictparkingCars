(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Lv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ag={exports:{}},fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv=Symbol.for("react.transitional.element"),Uv=Symbol.for("react.fragment");function ig(e,t,n){var a=null;if(n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),"key"in t){n={};for(var i in t)i!=="key"&&(n[i]=t[i])}else n=t;return t=n.ref,{$$typeof:Vv,type:e,key:a,ref:t!==void 0?t:null,props:n}}fo.Fragment=Uv;fo.jsx=ig;fo.jsxs=ig;ag.exports=fo;var s=ag.exports,sg={exports:{}},X={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu=Symbol.for("react.transitional.element"),Hv=Symbol.for("react.portal"),Yv=Symbol.for("react.fragment"),qv=Symbol.for("react.strict_mode"),Gv=Symbol.for("react.profiler"),Xv=Symbol.for("react.consumer"),$v=Symbol.for("react.context"),Pv=Symbol.for("react.forward_ref"),Kv=Symbol.for("react.suspense"),Fv=Symbol.for("react.memo"),rg=Symbol.for("react.lazy"),Qv=Symbol.for("react.activity"),Cm=Symbol.iterator;function Zv(e){return e===null||typeof e!="object"?null:(e=Cm&&e[Cm]||e["@@iterator"],typeof e=="function"?e:null)}var lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},og=Object.assign,cg={};function Xi(e,t,n){this.props=e,this.context=t,this.refs=cg,this.updater=n||lg}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dg(){}dg.prototype=Xi.prototype;function Cu(e,t,n){this.props=e,this.context=t,this.refs=cg,this.updater=n||lg}var zu=Cu.prototype=new dg;zu.constructor=Cu;og(zu,Xi.prototype);zu.isPureReactComponent=!0;var zm=Array.isArray;function Ic(){}var he={H:null,A:null,T:null,S:null},ug=Object.prototype.hasOwnProperty;function Eu(e,t,n){var a=n.ref;return{$$typeof:Tu,type:e,key:t,ref:a!==void 0?a:null,props:n}}function Iv(e,t){return Eu(e.type,t,e.props)}function Mu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tu}function Jv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Em=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jv(""+e.key):t.toString(36)}function Wv(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Ic,Ic):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ia(e,t,n,a,i){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Tu:case Hv:l=!0;break;case rg:return l=e._init,Ia(l(e._payload),t,n,a,i)}}if(l)return i=i(e),l=a===""?"."+Ho(e,0):a,zm(i)?(n="",l!=null&&(n=l.replace(Em,"$&/")+"/"),Ia(i,t,n,"",function(d){return d})):i!=null&&(Mu(i)&&(i=Iv(i,n+(i.key==null||e&&e.key===i.key?"":(""+i.key).replace(Em,"$&/")+"/")+l)),t.push(i)),1;l=0;var o=a===""?".":a+":";if(zm(e))for(var c=0;c<e.length;c++)a=e[c],r=o+Ho(a,c),l+=Ia(a,t,n,r,i);else if(c=Zv(e),typeof c=="function")for(e=c.call(e),c=0;!(a=e.next()).done;)a=a.value,r=o+Ho(a,c++),l+=Ia(a,t,n,r,i);else if(r==="object"){if(typeof e.then=="function")return Ia(Wv(e),t,n,a,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return l}function zr(e,t,n){if(e==null)return e;var a=[],i=0;return Ia(e,a,"","",function(r){return t.call(n,r,i++)}),a}function e2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Mm=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},t2={map:zr,forEach:function(e,t,n){zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zr(e,function(){t++}),t},toArray:function(e){return zr(e,function(t){return t})||[]},only:function(e){if(!Mu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Activity=Qv;X.Children=t2;X.Component=Xi;X.Fragment=Yv;X.Profiler=Gv;X.PureComponent=Cu;X.StrictMode=qv;X.Suspense=Kv;X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=he;X.__COMPILER_RUNTIME={__proto__:null,c:function(e){return he.H.useMemoCache(e)}};X.cache=function(e){return function(){return e.apply(null,arguments)}};X.cacheSignal=function(){return null};X.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var a=og({},e.props),i=e.key;if(t!=null)for(r in t.key!==void 0&&(i=""+t.key),t)!ug.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(a[r]=t[r]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var l=Array(r),o=0;o<r;o++)l[o]=arguments[o+2];a.children=l}return Eu(e.type,i,a)};X.createContext=function(e){return e={$$typeof:$v,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Xv,_context:e},e};X.createElement=function(e,t,n){var a,i={},r=null;if(t!=null)for(a in t.key!==void 0&&(r=""+t.key),t)ug.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(i[a]=t[a]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var o=Array(l),c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return Eu(e,r,i)};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:Pv,render:e}};X.isValidElement=Mu;X.lazy=function(e){return{$$typeof:rg,_payload:{_status:-1,_result:e},_init:e2}};X.memo=function(e,t){return{$$typeof:Fv,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=he.T,n={};he.T=n;try{var a=e(),i=he.S;i!==null&&i(n,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Ic,Mm)}catch(r){Mm(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),he.T=t}};X.unstable_useCacheRefresh=function(){return he.H.useCacheRefresh()};X.use=function(e){return he.H.use(e)};X.useActionState=function(e,t,n){return he.H.useActionState(e,t,n)};X.useCallback=function(e,t){return he.H.useCallback(e,t)};X.useContext=function(e){return he.H.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e,t){return he.H.useDeferredValue(e,t)};X.useEffect=function(e,t){return he.H.useEffect(e,t)};X.useEffectEvent=function(e){return he.H.useEffectEvent(e)};X.useId=function(){return he.H.useId()};X.useImperativeHandle=function(e,t,n){return he.H.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return he.H.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return he.H.useLayoutEffect(e,t)};X.useMemo=function(e,t){return he.H.useMemo(e,t)};X.useOptimistic=function(e,t){return he.H.useOptimistic(e,t)};X.useReducer=function(e,t,n){return he.H.useReducer(e,t,n)};X.useRef=function(e){return he.H.useRef(e)};X.useState=function(e){return he.H.useState(e)};X.useSyncExternalStore=function(e,t,n){return he.H.useSyncExternalStore(e,t,n)};X.useTransition=function(){return he.H.useTransition()};X.version="19.2.3";sg.exports=X;var A=sg.exports;const Fe=Lv(A);var fg={exports:{}},mo={},mg={exports:{}},hg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,B){var L=O.length;O.push(B);e:for(;0<L;){var q=L-1>>>1,F=O[q];if(0<i(F,B))O[q]=B,O[L]=F,L=q;else break e}}function n(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var B=O[0],L=O.pop();if(L!==B){O[0]=L;e:for(var q=0,F=O.length,Re=F>>>1;q<Re;){var Xe=2*(q+1)-1,Wt=O[Xe],We=Xe+1,Gt=O[We];if(0>i(Wt,L))We<F&&0>i(Gt,Wt)?(O[q]=Gt,O[We]=L,q=We):(O[q]=Wt,O[Xe]=L,q=Xe);else if(We<F&&0>i(Gt,L))O[q]=Gt,O[We]=L,q=We;else break e}}return B}function i(O,B){var L=O.sortIndex-B.sortIndex;return L!==0?L:O.id-B.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],d=[],u=1,m=null,f=3,x=!1,v=!1,j=!1,T=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;function y(O){for(var B=n(d);B!==null;){if(B.callback===null)a(d);else if(B.startTime<=O)a(d),B.sortIndex=B.expirationTime,t(c,B);else break;B=n(d)}}function w(O){if(j=!1,y(O),!v)if(n(c)!==null)v=!0,k||(k=!0,E());else{var B=n(d);B!==null&&V(w,B.startTime-O)}}var k=!1,N=-1,z=5,C=-1;function _(){return T?!0:!(e.unstable_now()-C<z)}function R(){if(T=!1,k){var O=e.unstable_now();C=O;var B=!0;try{e:{v=!1,j&&(j=!1,p(N),N=-1),x=!0;var L=f;try{t:{for(y(O),m=n(c);m!==null&&!(m.expirationTime>O&&_());){var q=m.callback;if(typeof q=="function"){m.callback=null,f=m.priorityLevel;var F=q(m.expirationTime<=O);if(O=e.unstable_now(),typeof F=="function"){m.callback=F,y(O),B=!0;break t}m===n(c)&&a(c),y(O)}else a(c);m=n(c)}if(m!==null)B=!0;else{var Re=n(d);Re!==null&&V(w,Re.startTime-O),B=!1}}break e}finally{m=null,f=L,x=!1}B=void 0}}finally{B?E():k=!1}}}var E;if(typeof b=="function")E=function(){b(R)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ce=K.port2;K.port1.onmessage=R,E=function(){ce.postMessage(null)}}else E=function(){g(R,0)};function V(O,B){N=g(function(){O(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var L=f;f=B;try{return O()}finally{f=L}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var L=f;f=O;try{return B()}finally{f=L}},e.unstable_scheduleCallback=function(O,B,L){var q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?q+L:q):L=q,O){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=L+F,O={id:u++,callback:B,priorityLevel:O,startTime:L,expirationTime:F,sortIndex:-1},L>q?(O.sortIndex=L,t(d,O),n(c)===null&&O===n(d)&&(j?(p(N),N=-1):j=!0,V(w,L-q))):(O.sortIndex=F,t(c,O),v||x||(v=!0,k||(k=!0,E()))),O},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(O){var B=f;return function(){var L=f;f=B;try{return O.apply(this,arguments)}finally{f=L}}}})(hg);mg.exports=hg;var n2=mg.exports,pg={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a2=A;function gg(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function zn(){}var Qe={d:{f:zn,r:function(){throw Error(gg(522))},D:zn,C:zn,L:zn,m:zn,X:zn,S:zn,M:zn},p:0,findDOMNode:null},i2=Symbol.for("react.portal");function s2(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:i2,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}var vs=a2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ho(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Qe;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(gg(299));return s2(e,t,null,n)};Je.flushSync=function(e){var t=vs.T,n=Qe.p;try{if(vs.T=null,Qe.p=2,e)return e()}finally{vs.T=t,Qe.p=n,Qe.d.f()}};Je.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Qe.d.C(e,t))};Je.prefetchDNS=function(e){typeof e=="string"&&Qe.d.D(e)};Je.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,a=ho(n,t.crossOrigin),i=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Qe.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:i,fetchPriority:r}):n==="script"&&Qe.d.X(e,{crossOrigin:a,integrity:i,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Je.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=ho(t.as,t.crossOrigin);Qe.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Qe.d.M(e)};Je.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,a=ho(n,t.crossOrigin);Qe.d.L(e,n,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Je.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=ho(t.as,t.crossOrigin);Qe.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Qe.d.m(e)};Je.requestFormReset=function(e){Qe.d.r(e)};Je.unstable_batchedUpdates=function(e,t){return e(t)};Je.useFormState=function(e,t,n){return vs.H.useFormState(e,t,n)};Je.useFormStatus=function(){return vs.H.useHostTransitionStatus()};Je.version="19.2.3";function xg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xg)}catch(e){console.error(e)}}xg(),pg.exports=Je;var r2=pg.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De=n2,bg=A,l2=r2;function M(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function yg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jg(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _m(e){if(cr(e)!==e)throw Error(M(188))}function o2(e){var t=e.alternate;if(!t){if(t=cr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return _m(i),e;if(r===a)return _m(i),t;r=r.sibling}throw Error(M(188))}if(n.return!==a.return)n=i,a=r;else{for(var l=!1,o=i.child;o;){if(o===n){l=!0,n=i,a=r;break}if(o===a){l=!0,a=i,n=r;break}o=o.sibling}if(!l){for(o=r.child;o;){if(o===n){l=!0,n=r,a=i;break}if(o===a){l=!0,a=r,n=i;break}o=o.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==a)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function wg(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=wg(e),t!==null)return t;e=e.sibling}return null}var ge=Object.assign,c2=Symbol.for("react.element"),Er=Symbol.for("react.transitional.element"),fs=Symbol.for("react.portal"),ei=Symbol.for("react.fragment"),Sg=Symbol.for("react.strict_mode"),Jc=Symbol.for("react.profiler"),kg=Symbol.for("react.consumer"),hn=Symbol.for("react.context"),_u=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),ed=Symbol.for("react.suspense_list"),Du=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),td=Symbol.for("react.activity"),d2=Symbol.for("react.memo_cache_sentinel"),Dm=Symbol.iterator;function as(e){return e===null||typeof e!="object"?null:(e=Dm&&e[Dm]||e["@@iterator"],typeof e=="function"?e:null)}var u2=Symbol.for("react.client.reference");function nd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===u2?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ei:return"Fragment";case Jc:return"Profiler";case Sg:return"StrictMode";case Wc:return"Suspense";case ed:return"SuspenseList";case td:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case fs:return"Portal";case hn:return e.displayName||"Context";case kg:return(e._context.displayName||"Context")+".Consumer";case _u:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Du:return t=e.displayName||null,t!==null?t:nd(e.type)||"Memo";case On:t=e._payload,e=e._init;try{return nd(e(t))}catch{}}return null}var ms=Array.isArray,H=bg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=l2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,za={pending:!1,data:null,method:null,action:null},ad=[],ti=-1;function It(e){return{current:e}}function Le(e){0>ti||(e.current=ad[ti],ad[ti]=null,ti--)}function de(e,t){ti++,ad[ti]=e.current,e.current=t}var Ft=It(null),Hs=It(null),Fn=It(null),Sl=It(null);function kl(e,t){switch(de(Fn,t),de(Hs,e),de(Ft,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Uh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Uh(t),e=Xb(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Le(Ft),de(Ft,e)}function Ti(){Le(Ft),Le(Hs),Le(Fn)}function id(e){e.memoizedState!==null&&de(Sl,e);var t=Ft.current,n=Xb(t,e.type);t!==n&&(de(Hs,e),de(Ft,n))}function Nl(e){Hs.current===e&&(Le(Ft),Le(Hs)),Sl.current===e&&(Le(Sl),Is._currentValue=za)}var Yo,Rm;function va(e){if(Yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yo=t&&t[1]||"",Rm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yo+e+Rm}var qo=!1;function Go(e,t){if(!e||qo)return"";qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(x){var f=x}Reflect.construct(e,[],m)}else{try{m.call()}catch(x){f=x}e.call(m.prototype)}}else{try{throw Error()}catch(x){f=x}(m=e())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(x){if(x&&f&&typeof x.stack=="string")return[x.stack,f.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),l=r[0],o=r[1];if(l&&o){var c=l.split(`
`),d=o.split(`
`);for(i=a=0;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;for(;i<d.length&&!d[i].includes("DetermineComponentFrameRoot");)i++;if(a===c.length||i===d.length)for(a=c.length-1,i=d.length-1;1<=a&&0<=i&&c[a]!==d[i];)i--;for(;1<=a&&0<=i;a--,i--)if(c[a]!==d[i]){if(a!==1||i!==1)do if(a--,i--,0>i||c[a]!==d[i]){var u=`
`+c[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=i);break}}}finally{qo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?va(n):""}function f2(e,t){switch(e.tag){case 26:case 27:case 5:return va(e.type);case 16:return va("Lazy");case 13:return e.child!==t&&t!==null?va("Suspense Fallback"):va("Suspense");case 19:return va("SuspenseList");case 0:case 15:return Go(e.type,!1);case 11:return Go(e.type.render,!1);case 1:return Go(e.type,!0);case 31:return va("Activity");default:return""}}function Om(e){try{var t="",n=null;do t+=f2(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var sd=Object.prototype.hasOwnProperty,Ru=De.unstable_scheduleCallback,Xo=De.unstable_cancelCallback,m2=De.unstable_shouldYield,h2=De.unstable_requestPaint,mt=De.unstable_now,p2=De.unstable_getCurrentPriorityLevel,Ng=De.unstable_ImmediatePriority,Ag=De.unstable_UserBlockingPriority,Al=De.unstable_NormalPriority,g2=De.unstable_LowPriority,Tg=De.unstable_IdlePriority,x2=De.log,b2=De.unstable_setDisableYieldValue,dr=null,ht=null;function Yn(e){if(typeof x2=="function"&&b2(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(dr,e)}catch{}}var pt=Math.clz32?Math.clz32:j2,y2=Math.log,v2=Math.LN2;function j2(e){return e>>>=0,e===0?32:31-(y2(e)/v2|0)|0}var Mr=256,_r=262144,Dr=4194304;function ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function po(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var o=a&134217727;return o!==0?(a=o&~r,a!==0?i=ja(a):(l&=o,l!==0?i=ja(l):n||(n=o&~e,n!==0&&(i=ja(n))))):(o=a&~r,o!==0?i=ja(o):l!==0?i=ja(l):n||(n=a&~e,n!==0&&(i=ja(n)))),i===0?0:t!==0&&t!==i&&!(t&r)&&(r=i&-i,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:i}function ur(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function w2(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cg(){var e=Dr;return Dr<<=1,!(Dr&62914560)&&(Dr=4194304),e}function $o(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function S2(e,t,n,a,i,r){var l=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,c=e.expirationTimes,d=e.hiddenUpdates;for(n=l&~n;0<n;){var u=31-pt(n),m=1<<u;o[u]=0,c[u]=-1;var f=d[u];if(f!==null)for(d[u]=null,u=0;u<f.length;u++){var x=f[u];x!==null&&(x.lane&=-536870913)}n&=~m}a!==0&&zg(e,a,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~t))}function zg(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-pt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Eg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-pt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function Mg(e,t){var n=t&-t;return n=n&42?1:Ou(n),n&(e.suspendedLanes|t)?0:n}function Ou(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bu(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function _g(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:ty(e.type))}function Bm(e,t){var n=ne.p;try{return ne.p=e,t()}finally{ne.p=n}}var ua=Math.random().toString(36).slice(2),He="__reactFiber$"+ua,st="__reactProps$"+ua,$i="__reactContainer$"+ua,rd="__reactEvents$"+ua,k2="__reactListeners$"+ua,N2="__reactHandles$"+ua,Lm="__reactResources$"+ua,mr="__reactMarker$"+ua;function Lu(e){delete e[He],delete e[st],delete e[rd],delete e[k2],delete e[N2]}function ni(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$i]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xh(e);e!==null;){if(n=e[He])return n;e=Xh(e)}return t}e=n,n=e.parentNode}return null}function Pi(e){if(e=e[He]||e[$i]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function hs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(M(33))}function yi(e){var t=e[Lm];return t||(t=e[Lm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Be(e){e[mr]=!0}var Dg=new Set,Rg={};function Ya(e,t){Ci(e,t),Ci(e+"Capture",t)}function Ci(e,t){for(Rg[e]=t,e=0;e<t.length;e++)Dg.add(t[e])}var A2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vm={},Um={};function T2(e){return sd.call(Um,e)?!0:sd.call(Vm,e)?!1:A2.test(e)?Um[e]=!0:(Vm[e]=!0,!1)}function Jr(e,t,n){if(T2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Rr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function an(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Og(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function C2(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ld(e){if(!e._valueTracker){var t=Og(e)?"checked":"value";e._valueTracker=C2(e,t,""+e[t])}}function Bg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Og(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var z2=/[\n"\\]/g;function At(e){return e.replace(z2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function od(e,t,n,a,i,r,l,o){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?cd(e,l,St(t)):n!=null?cd(e,l,St(n)):a!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+St(o):e.removeAttribute("name")}function Lg(e,t,n,a,i,r,l,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){ld(e);return}n=n!=null?""+St(n):"",t=t!=null?""+St(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=o?e.checked:!!a,e.defaultChecked=!!a,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),ld(e)}function cd(e,t,n){t==="number"&&Tl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vi(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vg(e,t,n){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+St(n):""}function Ug(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(M(92));if(ms(a)){if(1<a.length)throw Error(M(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=St(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),ld(e)}function zi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var E2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hm(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||E2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Hg(e,t,n){if(t!=null&&typeof t!="object")throw Error(M(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&Hm(e,i,a)}else for(var r in t)t.hasOwnProperty(r)&&Hm(e,r,t[r])}function Vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wr(e){return _2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pn(){}var dd=null;function Uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ai=null,ji=null;function Ym(e){var t=Pi(e);if(t&&(e=t.stateNode)){var n=e[st]||null;e:switch(e=t.stateNode,t.type){case"input":if(od(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[st]||null;if(!i)throw Error(M(90));od(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Bg(a)}break e;case"textarea":Vg(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&vi(e,!!n.multiple,t,!1)}}}var Po=!1;function Yg(e,t,n){if(Po)return e(t,n);Po=!0;try{var a=e(t);return a}finally{if(Po=!1,(ai!==null||ji!==null)&&(To(),ai&&(t=ai,e=ji,ji=ai=null,Ym(t),e)))for(t=0;t<e.length;t++)Ym(e[t])}}function Ys(e,t){var n=e.stateNode;if(n===null)return null;var a=n[st]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=!1;if(wn)try{var is={};Object.defineProperty(is,"passive",{get:function(){ud=!0}}),window.addEventListener("test",is,is),window.removeEventListener("test",is,is)}catch{ud=!1}var qn=null,Hu=null,el=null;function qg(){if(el)return el;var e,t=Hu,n=t.length,a,i="value"in qn?qn.value:qn.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(a=1;a<=l&&t[n-a]===i[r-a];a++);return el=i.slice(e,1<a?1-a:void 0)}function tl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function qm(){return!1}function rt(e){function t(n,a,i,r,l){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Or:qm,this.isPropagationStopped=qm,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},go=rt(qa),hr=ge({},qa,{view:0,detail:0}),D2=rt(hr),Ko,Fo,ss,xo=ge({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ss&&(ss&&e.type==="mousemove"?(Ko=e.screenX-ss.screenX,Fo=e.screenY-ss.screenY):Fo=Ko=0,ss=e),Ko)},movementY:function(e){return"movementY"in e?e.movementY:Fo}}),Gm=rt(xo),R2=ge({},xo,{dataTransfer:0}),O2=rt(R2),B2=ge({},hr,{relatedTarget:0}),Qo=rt(B2),L2=ge({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),V2=rt(L2),U2=ge({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H2=rt(U2),Y2=ge({},qa,{data:0}),Xm=rt(Y2),q2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X2[e])?!!t[e]:!1}function Yu(){return $2}var P2=ge({},hr,{key:function(e){if(e.key){var t=q2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K2=rt(P2),F2=ge({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$m=rt(F2),Q2=ge({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),Z2=rt(Q2),I2=ge({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),J2=rt(I2),W2=ge({},xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e5=rt(W2),t5=ge({},qa,{newState:0,oldState:0}),n5=rt(t5),a5=[9,13,27,32],qu=wn&&"CompositionEvent"in window,js=null;wn&&"documentMode"in document&&(js=document.documentMode);var i5=wn&&"TextEvent"in window&&!js,Gg=wn&&(!qu||js&&8<js&&11>=js),Pm=" ",Km=!1;function Xg(e,t){switch(e){case"keyup":return a5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $g(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ii=!1;function s5(e,t){switch(e){case"compositionend":return $g(t);case"keypress":return t.which!==32?null:(Km=!0,Pm);case"textInput":return e=t.data,e===Pm&&Km?null:e;default:return null}}function r5(e,t){if(ii)return e==="compositionend"||!qu&&Xg(e,t)?(e=qg(),el=Hu=qn=null,ii=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gg&&t.locale!=="ko"?null:t.data;default:return null}}var l5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!l5[e.type]:t==="textarea"}function Pg(e,t,n,a){ai?ji?ji.push(a):ji=[a]:ai=a,t=$l(t,"onChange"),0<t.length&&(n=new go("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ws=null,qs=null;function o5(e){Yb(e,0)}function bo(e){var t=hs(e);if(Bg(t))return e}function Qm(e,t){if(e==="change")return t}var Kg=!1;if(wn){var Zo;if(wn){var Io="oninput"in document;if(!Io){var Zm=document.createElement("div");Zm.setAttribute("oninput","return;"),Io=typeof Zm.oninput=="function"}Zo=Io}else Zo=!1;Kg=Zo&&(!document.documentMode||9<document.documentMode)}function Im(){ws&&(ws.detachEvent("onpropertychange",Fg),qs=ws=null)}function Fg(e){if(e.propertyName==="value"&&bo(qs)){var t=[];Pg(t,qs,e,Uu(e)),Yg(o5,t)}}function c5(e,t,n){e==="focusin"?(Im(),ws=t,qs=n,ws.attachEvent("onpropertychange",Fg)):e==="focusout"&&Im()}function d5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bo(qs)}function u5(e,t){if(e==="click")return bo(t)}function f5(e,t){if(e==="input"||e==="change")return bo(t)}function m5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:m5;function Gs(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!sd.call(t,i)||!xt(e[i],t[i]))return!1}return!0}function Jm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wm(e,t){var n=Jm(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jm(n)}}function Qg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Tl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tl(e.document)}return t}function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var h5=wn&&"documentMode"in document&&11>=document.documentMode,si=null,fd=null,Ss=null,md=!1;function eh(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;md||si==null||si!==Tl(a)||(a=si,"selectionStart"in a&&Gu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ss&&Gs(Ss,a)||(Ss=a,a=$l(fd,"onSelect"),0<a.length&&(t=new go("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=si)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ri={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionrun:ga("Transition","TransitionRun"),transitionstart:ga("Transition","TransitionStart"),transitioncancel:ga("Transition","TransitionCancel"),transitionend:ga("Transition","TransitionEnd")},Jo={},Ig={};wn&&(Ig=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function Ga(e){if(Jo[e])return Jo[e];if(!ri[e])return e;var t=ri[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ig)return Jo[e]=t[n];return e}var Jg=Ga("animationend"),Wg=Ga("animationiteration"),ex=Ga("animationstart"),p5=Ga("transitionrun"),g5=Ga("transitionstart"),x5=Ga("transitioncancel"),tx=Ga("transitionend"),nx=new Map,hd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hd.push("scrollEnd");function qt(e,t){nx.set(e,t),Ya(t,[e])}var Cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],li=0,Xu=0;function yo(){for(var e=li,t=Xu=li=0;t<e;){var n=wt[t];wt[t++]=null;var a=wt[t];wt[t++]=null;var i=wt[t];wt[t++]=null;var r=wt[t];if(wt[t++]=null,a!==null&&i!==null){var l=a.pending;l===null?i.next=i:(i.next=l.next,l.next=i),a.pending=i}r!==0&&ax(n,i,r)}}function vo(e,t,n,a){wt[li++]=e,wt[li++]=t,wt[li++]=n,wt[li++]=a,Xu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function $u(e,t,n,a){return vo(e,t,n,a),zl(e)}function Xa(e,t){return vo(e,null,null,t),zl(e)}function ax(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-pt(n),e=r.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),r):null}function zl(e){if(50<_s)throw _s=0,Od=null,Error(M(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var oi={};function b5(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,a){return new b5(e,t,n,a)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xn(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ix(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function nl(e,t,n,a,i,r){var l=0;if(a=e,typeof e=="function")Pu(e)&&(l=1);else if(typeof e=="string")l=Sj(e,n,Ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case td:return e=dt(31,n,t,i),e.elementType=td,e.lanes=r,e;case ei:return Ea(n.children,i,r,t);case Sg:l=8,i|=24;break;case Jc:return e=dt(12,n,t,i|2),e.elementType=Jc,e.lanes=r,e;case Wc:return e=dt(13,n,t,i),e.elementType=Wc,e.lanes=r,e;case ed:return e=dt(19,n,t,i),e.elementType=ed,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hn:l=10;break e;case kg:l=9;break e;case _u:l=11;break e;case Du:l=14;break e;case On:l=16,a=null;break e}l=29,n=Error(M(130,e===null?"null":typeof e,"")),a=null}return t=dt(l,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function Ea(e,t,n,a){return e=dt(7,e,a,t),e.lanes=n,e}function Wo(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function sx(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function ec(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var th=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var n=th.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Om(t)},th.set(e,t),t)}return{value:e,source:t,stack:Om(t)}}var ci=[],di=0,El=null,Xs=0,kt=[],Nt=0,sa=null,$t=1,Pt="";function fn(e,t){ci[di++]=Xs,ci[di++]=El,El=e,Xs=t}function rx(e,t,n){kt[Nt++]=$t,kt[Nt++]=Pt,kt[Nt++]=sa,sa=e;var a=$t;e=Pt;var i=32-pt(a)-1;a&=~(1<<i),n+=1;var r=32-pt(t)+i;if(30<r){var l=i-i%5;r=(a&(1<<l)-1).toString(32),a>>=l,i-=l,$t=1<<32-pt(t)+i|n<<i|a,Pt=r+e}else $t=1<<r|n<<i|a,Pt=e}function Ku(e){e.return!==null&&(fn(e,1),rx(e,1,0))}function Fu(e){for(;e===El;)El=ci[--di],ci[di]=null,Xs=ci[--di],ci[di]=null;for(;e===sa;)sa=kt[--Nt],kt[Nt]=null,Pt=kt[--Nt],kt[Nt]=null,$t=kt[--Nt],kt[Nt]=null}function lx(e,t){kt[Nt++]=$t,kt[Nt++]=Pt,kt[Nt++]=sa,$t=t.id,Pt=t.overflow,sa=e}var Ye=null,me=null,W=!1,Qn=null,Ct=!1,pd=Error(M(519));function ra(e){var t=Error(M(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $s(Tt(t,e)),pd}function nh(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[He]=e,t[st]=a,n){case"dialog":Q("cancel",t),Q("close",t);break;case"iframe":case"object":case"embed":Q("load",t);break;case"video":case"audio":for(n=0;n<Qs.length;n++)Q(Qs[n],t);break;case"source":Q("error",t);break;case"img":case"image":case"link":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"input":Q("invalid",t),Lg(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Q("invalid",t);break;case"textarea":Q("invalid",t),Ug(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Gb(t.textContent,n)?(a.popover!=null&&(Q("beforetoggle",t),Q("toggle",t)),a.onScroll!=null&&Q("scroll",t),a.onScrollEnd!=null&&Q("scrollend",t),a.onClick!=null&&(t.onclick=pn),t=!0):t=!1,t||ra(e,!0)}function ah(e){for(Ye=e.return;Ye;)switch(Ye.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:Ye=Ye.return}}function Fa(e){if(e!==Ye)return!1;if(!W)return ah(e),W=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Hd(e.type,e.memoizedProps)),n=!n),n&&me&&ra(e),ah(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));me=Gh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));me=Gh(e)}else t===27?(t=me,fa(e.type)?(e=Xd,Xd=null,me=e):me=t):me=Ye?Mt(e.stateNode.nextSibling):null;return!0}function Oa(){me=Ye=null,W=!1}function tc(){var e=Qn;return e!==null&&(at===null?at=e:at.push.apply(at,e),Qn=null),e}function $s(e){Qn===null?Qn=[e]:Qn.push(e)}var gd=It(null),$a=null,gn=null;function Ln(e,t,n){de(gd,t._currentValue),t._currentValue=n}function bn(e){e._currentValue=gd.current,Le(gd)}function xd(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function bd(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var l=i.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=i;for(var c=0;c<t.length;c++)if(o.context===t[c]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),xd(r.return,n,e),a||(l=null);break e}r=o.next}}else if(i.tag===18){if(l=i.return,l===null)throw Error(M(341));l.lanes|=n,r=l.alternate,r!==null&&(r.lanes|=n),xd(l,n,e),l=null}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}}function Ki(e,t,n,a){e=null;for(var i=t,r=!1;i!==null;){if(!r){if(i.flags&524288)r=!0;else if(i.flags&262144)break}if(i.tag===10){var l=i.alternate;if(l===null)throw Error(M(387));if(l=l.memoizedProps,l!==null){var o=i.type;xt(i.pendingProps.value,l.value)||(e!==null?e.push(o):e=[o])}}else if(i===Sl.current){if(l=i.alternate,l===null)throw Error(M(387));l.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Is):e=[Is])}i=i.return}e!==null&&bd(t,e,n,a),t.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ba(e){$a=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qe(e){return ox($a,e)}function Br(e,t){return $a===null&&Ba(e),ox(e,t)}function ox(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(M(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var y5=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},v5=De.unstable_scheduleCallback,j5=De.unstable_NormalPriority,Te={$$typeof:hn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new y5,data:new Map,refCount:0}}function pr(e){e.refCount--,e.refCount===0&&v5(j5,function(){e.controller.abort()})}var ks=null,yd=0,Ei=0,wi=null;function w5(e,t){if(ks===null){var n=ks=[];yd=0,Ei=jf(),wi={status:"pending",value:void 0,then:function(a){n.push(a)}}}return yd++,t.then(ih,ih),t}function ih(){if(--yd===0&&ks!==null){wi!==null&&(wi.status="fulfilled");var e=ks;ks=null,Ei=0,wi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function S5(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var sh=H.S;H.S=function(e,t){wb=mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&w5(e,t),sh!==null&&sh(e,t)};var Ma=It(null);function Zu(){var e=Ma.current;return e!==null?e:oe.pooledCache}function al(e,t){t===null?de(Ma,Ma.current):de(Ma,t.pool)}function cx(){var e=Zu();return e===null?null:{parent:Te._currentValue,pool:e}}var Fi=Error(M(460)),Iu=Error(M(474)),jo=Error(M(542)),_l={then:function(){}};function rh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(pn,pn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,oh(e),e;default:if(typeof t.status=="string")t.then(pn,pn);else{if(e=oe,e!==null&&100<e.shellSuspendCounter)throw Error(M(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,oh(e),e}throw _a=t,Fi}}function wa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(_a=n,Fi):n}}var _a=null;function lh(){if(_a===null)throw Error(M(459));var e=_a;return _a=null,e}function oh(e){if(e===Fi||e===jo)throw Error(M(483))}var Si=null,Ps=0;function Lr(e){var t=Ps;return Ps+=1,Si===null&&(Si=[]),dx(Si,e,t)}function rs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vr(e,t){throw t.$$typeof===c2?Error(M(525)):(e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ux(e){function t(g,p){if(e){var b=g.deletions;b===null?(g.deletions=[p],g.flags|=16):b.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function a(g){for(var p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function i(g,p){return g=xn(g,p),g.index=0,g.sibling=null,g}function r(g,p,b){return g.index=b,e?(b=g.alternate,b!==null?(b=b.index,b<p?(g.flags|=67108866,p):b):(g.flags|=67108866,p)):(g.flags|=1048576,p)}function l(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function o(g,p,b,y){return p===null||p.tag!==6?(p=Wo(b,g.mode,y),p.return=g,p):(p=i(p,b),p.return=g,p)}function c(g,p,b,y){var w=b.type;return w===ei?u(g,p,b.props.children,y,b.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===On&&wa(w)===p.type)?(p=i(p,b.props),rs(p,b),p.return=g,p):(p=nl(b.type,b.key,b.props,null,g.mode,y),rs(p,b),p.return=g,p)}function d(g,p,b,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==b.containerInfo||p.stateNode.implementation!==b.implementation?(p=ec(b,g.mode,y),p.return=g,p):(p=i(p,b.children||[]),p.return=g,p)}function u(g,p,b,y,w){return p===null||p.tag!==7?(p=Ea(b,g.mode,y,w),p.return=g,p):(p=i(p,b),p.return=g,p)}function m(g,p,b){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=Wo(""+p,g.mode,b),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:return b=nl(p.type,p.key,p.props,null,g.mode,b),rs(b,p),b.return=g,b;case fs:return p=ec(p,g.mode,b),p.return=g,p;case On:return p=wa(p),m(g,p,b)}if(ms(p)||as(p))return p=Ea(p,g.mode,b,null),p.return=g,p;if(typeof p.then=="function")return m(g,Lr(p),b);if(p.$$typeof===hn)return m(g,Br(g,p),b);Vr(g,p)}return null}function f(g,p,b,y){var w=p!==null?p.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return w!==null?null:o(g,p,""+b,y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Er:return b.key===w?c(g,p,b,y):null;case fs:return b.key===w?d(g,p,b,y):null;case On:return b=wa(b),f(g,p,b,y)}if(ms(b)||as(b))return w!==null?null:u(g,p,b,y,null);if(typeof b.then=="function")return f(g,p,Lr(b),y);if(b.$$typeof===hn)return f(g,p,Br(g,b),y);Vr(g,b)}return null}function x(g,p,b,y,w){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return g=g.get(b)||null,o(p,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Er:return g=g.get(y.key===null?b:y.key)||null,c(p,g,y,w);case fs:return g=g.get(y.key===null?b:y.key)||null,d(p,g,y,w);case On:return y=wa(y),x(g,p,b,y,w)}if(ms(y)||as(y))return g=g.get(b)||null,u(p,g,y,w,null);if(typeof y.then=="function")return x(g,p,b,Lr(y),w);if(y.$$typeof===hn)return x(g,p,b,Br(p,y),w);Vr(p,y)}return null}function v(g,p,b,y){for(var w=null,k=null,N=p,z=p=0,C=null;N!==null&&z<b.length;z++){N.index>z?(C=N,N=null):C=N.sibling;var _=f(g,N,b[z],y);if(_===null){N===null&&(N=C);break}e&&N&&_.alternate===null&&t(g,N),p=r(_,p,z),k===null?w=_:k.sibling=_,k=_,N=C}if(z===b.length)return n(g,N),W&&fn(g,z),w;if(N===null){for(;z<b.length;z++)N=m(g,b[z],y),N!==null&&(p=r(N,p,z),k===null?w=N:k.sibling=N,k=N);return W&&fn(g,z),w}for(N=a(N);z<b.length;z++)C=x(N,g,z,b[z],y),C!==null&&(e&&C.alternate!==null&&N.delete(C.key===null?z:C.key),p=r(C,p,z),k===null?w=C:k.sibling=C,k=C);return e&&N.forEach(function(R){return t(g,R)}),W&&fn(g,z),w}function j(g,p,b,y){if(b==null)throw Error(M(151));for(var w=null,k=null,N=p,z=p=0,C=null,_=b.next();N!==null&&!_.done;z++,_=b.next()){N.index>z?(C=N,N=null):C=N.sibling;var R=f(g,N,_.value,y);if(R===null){N===null&&(N=C);break}e&&N&&R.alternate===null&&t(g,N),p=r(R,p,z),k===null?w=R:k.sibling=R,k=R,N=C}if(_.done)return n(g,N),W&&fn(g,z),w;if(N===null){for(;!_.done;z++,_=b.next())_=m(g,_.value,y),_!==null&&(p=r(_,p,z),k===null?w=_:k.sibling=_,k=_);return W&&fn(g,z),w}for(N=a(N);!_.done;z++,_=b.next())_=x(N,g,z,_.value,y),_!==null&&(e&&_.alternate!==null&&N.delete(_.key===null?z:_.key),p=r(_,p,z),k===null?w=_:k.sibling=_,k=_);return e&&N.forEach(function(E){return t(g,E)}),W&&fn(g,z),w}function T(g,p,b,y){if(typeof b=="object"&&b!==null&&b.type===ei&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Er:e:{for(var w=b.key;p!==null;){if(p.key===w){if(w=b.type,w===ei){if(p.tag===7){n(g,p.sibling),y=i(p,b.props.children),y.return=g,g=y;break e}}else if(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===On&&wa(w)===p.type){n(g,p.sibling),y=i(p,b.props),rs(y,b),y.return=g,g=y;break e}n(g,p);break}else t(g,p);p=p.sibling}b.type===ei?(y=Ea(b.props.children,g.mode,y,b.key),y.return=g,g=y):(y=nl(b.type,b.key,b.props,null,g.mode,y),rs(y,b),y.return=g,g=y)}return l(g);case fs:e:{for(w=b.key;p!==null;){if(p.key===w)if(p.tag===4&&p.stateNode.containerInfo===b.containerInfo&&p.stateNode.implementation===b.implementation){n(g,p.sibling),y=i(p,b.children||[]),y.return=g,g=y;break e}else{n(g,p);break}else t(g,p);p=p.sibling}y=ec(b,g.mode,y),y.return=g,g=y}return l(g);case On:return b=wa(b),T(g,p,b,y)}if(ms(b))return v(g,p,b,y);if(as(b)){if(w=as(b),typeof w!="function")throw Error(M(150));return b=w.call(b),j(g,p,b,y)}if(typeof b.then=="function")return T(g,p,Lr(b),y);if(b.$$typeof===hn)return T(g,p,Br(g,b),y);Vr(g,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,p!==null&&p.tag===6?(n(g,p.sibling),y=i(p,b),y.return=g,g=y):(n(g,p),y=Wo(b,g.mode,y),y.return=g,g=y),l(g)):n(g,p)}return function(g,p,b,y){try{Ps=0;var w=T(g,p,b,y);return Si=null,w}catch(N){if(N===Fi||N===jo)throw N;var k=dt(29,N,null,g.mode);return k.lanes=y,k.return=g,k}finally{}}}var La=ux(!0),fx=ux(!1),Bn=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,te&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=zl(e),ax(e,null,n),t}return vo(e,a,t,n),zl(e)}function Ns(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Eg(e,n)}}function nc(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var l={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?i=r=l:r=r.next=l,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var jd=!1;function As(){if(jd){var e=wi;if(e!==null)throw e}}function Ts(e,t,n,a){jd=!1;var i=e.updateQueue;Bn=!1;var r=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,d=c.next;c.next=null,l===null?r=d:l.next=d,l=c;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==l&&(o===null?u.firstBaseUpdate=d:o.next=d,u.lastBaseUpdate=c))}if(r!==null){var m=i.baseState;l=0,u=d=c=null,o=r;do{var f=o.lane&-536870913,x=f!==o.lane;if(x?(J&f)===f:(a&f)===f){f!==0&&f===Ei&&(jd=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var v=e,j=o;f=t;var T=n;switch(j.tag){case 1:if(v=j.payload,typeof v=="function"){m=v.call(T,m,f);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=j.payload,f=typeof v=="function"?v.call(T,m,f):v,f==null)break e;m=ge({},m,f);break e;case 2:Bn=!0}}f=o.callback,f!==null&&(e.flags|=64,x&&(e.flags|=8192),x=i.callbacks,x===null?i.callbacks=[f]:x.push(f))}else x={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(d=u=x,c=m):u=u.next=x,l|=f;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;x=o,o=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);u===null&&(c=m),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=u,r===null&&(i.shared.lanes=0),oa|=l,e.lanes=l,e.memoizedState=m}}function mx(e,t){if(typeof e!="function")throw Error(M(191,e));e.call(t)}function hx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)mx(n[e],t)}var Mi=It(null),Dl=It(0);function ch(e,t){e=An,de(Dl,e),de(Mi,t),An=e|t.baseLanes}function wd(){de(Dl,An),de(Mi,Mi.current)}function Wu(){An=Dl.current,Le(Mi),Le(Dl)}var bt=It(null),Et=null;function Vn(e){var t=e.alternate;de(we,we.current&1),de(bt,e),Et===null&&(t===null||Mi.current!==null||t.memoizedState!==null)&&(Et=e)}function Sd(e){de(we,we.current),de(bt,e),Et===null&&(Et=e)}function px(e){e.tag===22?(de(we,we.current),de(bt,e),Et===null&&(Et=e)):Un()}function Un(){de(we,we.current),de(bt,bt.current)}function ct(e){Le(bt),Et===e&&(Et=null),Le(we)}var we=It(0);function Rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||qd(n)||Gd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sn=0,$=null,le=null,Ne=null,Ol=!1,ki=!1,Va=!1,Bl=0,Ks=0,Ni=null,k5=0;function ye(){throw Error(M(321))}function ef(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function tf(e,t,n,a,i,r){return Sn=r,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?Px:mf,Va=!1,r=n(a,i),Va=!1,ki&&(r=xx(t,n,a,i)),gx(e),r}function gx(e){H.H=Fs;var t=le!==null&&le.next!==null;if(Sn=0,Ne=le=$=null,Ol=!1,Ks=0,Ni=null,t)throw Error(M(300));e===null||ze||(e=e.dependencies,e!==null&&Ml(e)&&(ze=!0))}function xx(e,t,n,a){$=e;var i=0;do{if(ki&&(Ni=null),Ks=0,ki=!1,25<=i)throw Error(M(301));if(i+=1,Ne=le=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}H.H=Kx,r=t(n,a)}while(ki);return r}function N5(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?gr(t):t,e=e.useState()[0],(le!==null?le.memoizedState:null)!==e&&($.flags|=1024),t}function nf(){var e=Bl!==0;return Bl=0,e}function af(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function sf(e){if(Ol){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ol=!1}Sn=0,Ne=le=$=null,ki=!1,Ks=Bl=0,Ni=null}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?$.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Se(){if(le===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=Ne===null?$.memoizedState:Ne.next;if(t!==null)Ne=t,le=e;else{if(e===null)throw $.alternate===null?Error(M(467)):Error(M(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},Ne===null?$.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function wo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gr(e){var t=Ks;return Ks+=1,Ni===null&&(Ni=[]),e=dx(Ni,e,t),t=$,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?Px:mf),e}function So(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gr(e);if(e.$$typeof===hn)return qe(e)}throw Error(M(438,String(e)))}function rf(e){var t=null,n=$.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=$.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=wo(),$.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=d2;return t.index++,n}function kn(e,t){return typeof t=="function"?t(e):t}function il(e){var t=Se();return lf(t,le,e)}function lf(e,t,n){var a=e.queue;if(a===null)throw Error(M(311));a.lastRenderedReducer=n;var i=e.baseQueue,r=a.pending;if(r!==null){if(i!==null){var l=i.next;i.next=r.next,r.next=l}t.baseQueue=i=r,a.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var o=l=null,c=null,d=t,u=!1;do{var m=d.lane&-536870913;if(m!==d.lane?(J&m)===m:(Sn&m)===m){var f=d.revertLane;if(f===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),m===Ei&&(u=!0);else if((Sn&f)===f){d=d.next,f===Ei&&(u=!0);continue}else m={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},c===null?(o=c=m,l=r):c=c.next=m,$.lanes|=f,oa|=f;m=d.action,Va&&n(r,m),r=d.hasEagerState?d.eagerState:n(r,m)}else f={lane:m,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},c===null?(o=c=f,l=r):c=c.next=f,$.lanes|=m,oa|=m;d=d.next}while(d!==null&&d!==t);if(c===null?l=r:c.next=o,!xt(r,e.memoizedState)&&(ze=!0,u&&(n=wi,n!==null)))throw n;e.memoizedState=r,e.baseState=l,e.baseQueue=c,a.lastRenderedState=r}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ac(e){var t=Se(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do r=e(r,l.action),l=l.next;while(l!==i);xt(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function bx(e,t,n){var a=$,i=Se(),r=W;if(r){if(n===void 0)throw Error(M(407));n=n()}else n=t();var l=!xt((le||i).memoizedState,n);if(l&&(i.memoizedState=n,ze=!0),i=i.queue,of(jx.bind(null,a,i,e),[e]),i.getSnapshot!==t||l||Ne!==null&&Ne.memoizedState.tag&1){if(a.flags|=2048,_i(9,{destroy:void 0},vx.bind(null,a,i,n,t),null),oe===null)throw Error(M(349));r||Sn&127||yx(a,t,n)}return n}function yx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t=wo(),$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vx(e,t,n,a){t.value=n,t.getSnapshot=a,wx(t)&&Sx(e)}function jx(e,t,n){return n(function(){wx(t)&&Sx(e)})}function wx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function Sx(e){var t=Xa(e,2);t!==null&&it(t,e,2)}function kd(e){var t=Ke();if(typeof e=="function"){var n=e;if(e=n(),Va){Yn(!0);try{n()}finally{Yn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:e},t}function kx(e,t,n,a){return e.baseState=n,lf(e,le,typeof a=="function"?a:kn)}function A5(e,t,n,a,i){if(No(e))throw Error(M(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};H.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,Nx(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Nx(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var r=H.T,l={};H.T=l;try{var o=n(i,a),c=H.S;c!==null&&c(l,o),dh(e,t,o)}catch(d){Nd(e,t,d)}finally{r!==null&&l.types!==null&&(r.types=l.types),H.T=r}}else try{r=n(i,a),dh(e,t,r)}catch(d){Nd(e,t,d)}}function dh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){uh(e,t,a)},function(a){return Nd(e,t,a)}):uh(e,t,n)}function uh(e,t,n){t.status="fulfilled",t.value=n,Ax(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Nx(e,n)))}function Nd(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Ax(t),t=t.next;while(t!==a)}e.action=null}function Ax(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Tx(e,t){return t}function fh(e,t){if(W){var n=oe.formState;if(n!==null){e:{var a=$;if(W){if(me){t:{for(var i=me,r=Ct;i.nodeType!==8;){if(!r){i=null;break t}if(i=Mt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){me=Mt(i.nextSibling),a=i.data==="F!";break e}}ra(a)}a=!1}a&&(t=n[0])}}return n=Ke(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tx,lastRenderedState:t},n.queue=a,n=Gx.bind(null,$,a),a.dispatch=n,a=kd(!1),r=ff.bind(null,$,!1,a.queue),a=Ke(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=A5.bind(null,$,i,r,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function mh(e){var t=Se();return Cx(t,le,e)}function Cx(e,t,n){if(t=lf(e,t,Tx)[0],e=il(kn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=gr(t)}catch(l){throw l===Fi?jo:l}else a=t;t=Se();var i=t.queue,r=i.dispatch;return n!==t.memoizedState&&($.flags|=2048,_i(9,{destroy:void 0},T5.bind(null,i,n),null)),[a,r,e]}function T5(e,t){e.action=t}function hh(e){var t=Se(),n=le;if(n!==null)return Cx(t,n,e);Se(),t=t.memoizedState,n=Se();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function _i(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=$.updateQueue,t===null&&(t=wo(),$.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function zx(){return Se().memoizedState}function sl(e,t,n,a){var i=Ke();$.flags|=e,i.memoizedState=_i(1|t,{destroy:void 0},n,a===void 0?null:a)}function ko(e,t,n,a){var i=Se();a=a===void 0?null:a;var r=i.memoizedState.inst;le!==null&&a!==null&&ef(a,le.memoizedState.deps)?i.memoizedState=_i(t,r,n,a):($.flags|=e,i.memoizedState=_i(1|t,r,n,a))}function ph(e,t){sl(8390656,8,e,t)}function of(e,t){ko(2048,8,e,t)}function C5(e){$.flags|=4;var t=$.updateQueue;if(t===null)t=wo(),$.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ex(e){var t=Se().memoizedState;return C5({ref:t,nextImpl:e}),function(){if(te&2)throw Error(M(440));return t.impl.apply(void 0,arguments)}}function Mx(e,t){return ko(4,2,e,t)}function _x(e,t){return ko(4,4,e,t)}function Dx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rx(e,t,n){n=n!=null?n.concat([e]):null,ko(4,4,Dx.bind(null,t,e),n)}function cf(){}function Ox(e,t){var n=Se();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&ef(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Bx(e,t){var n=Se();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&ef(t,a[1]))return a[0];if(a=e(),Va){Yn(!0);try{e()}finally{Yn(!1)}}return n.memoizedState=[a,t],a}function df(e,t,n){return n===void 0||Sn&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=kb(),$.lanes|=e,oa|=e,n)}function Lx(e,t,n,a){return xt(n,t)?n:Mi.current!==null?(e=df(e,n,a),xt(e,t)||(ze=!0),e):!(Sn&42)||Sn&1073741824&&!(J&261930)?(ze=!0,e.memoizedState=n):(e=kb(),$.lanes|=e,oa|=e,t)}function Vx(e,t,n,a,i){var r=ne.p;ne.p=r!==0&&8>r?r:8;var l=H.T,o={};H.T=o,ff(e,!1,t,n);try{var c=i(),d=H.S;if(d!==null&&d(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=S5(c,a);Cs(e,t,u,gt(e))}else Cs(e,t,a,gt(e))}catch(m){Cs(e,t,{then:function(){},status:"rejected",reason:m},gt())}finally{ne.p=r,l!==null&&o.types!==null&&(l.types=o.types),H.T=l}}function z5(){}function Ad(e,t,n,a){if(e.tag!==5)throw Error(M(476));var i=Ux(e).queue;Vx(e,i,t,za,n===null?z5:function(){return Hx(e),n(a)})}function Ux(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:za,baseState:za,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:za},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Hx(e){var t=Ux(e);t.next===null&&(t=e.alternate.memoizedState),Cs(e,t.next.queue,{},gt())}function uf(){return qe(Is)}function Yx(){return Se().memoizedState}function qx(){return Se().memoizedState}function E5(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gt();e=Zn(n);var a=In(t,e,n);a!==null&&(it(a,t,n),Ns(a,t,n)),t={cache:Qu()},e.payload=t;return}t=t.return}}function M5(e,t,n){var a=gt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},No(e)?Xx(t,n):(n=$u(e,t,n,a),n!==null&&(it(n,e,a),$x(n,t,a)))}function Gx(e,t,n){var a=gt();Cs(e,t,n,a)}function Cs(e,t,n,a){var i={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(No(e))Xx(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,o=r(l,n);if(i.hasEagerState=!0,i.eagerState=o,xt(o,l))return vo(e,t,i,0),oe===null&&yo(),!1}catch{}finally{}if(n=$u(e,t,i,a),n!==null)return it(n,e,a),$x(n,t,a),!0}return!1}function ff(e,t,n,a){if(a={lane:2,revertLane:jf(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},No(e)){if(t)throw Error(M(479))}else t=$u(e,n,a,2),t!==null&&it(t,e,2)}function No(e){var t=e.alternate;return e===$||t!==null&&t===$}function Xx(e,t){ki=Ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $x(e,t,n){if(n&4194048){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Eg(e,n)}}var Fs={readContext:qe,use:So,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};Fs.useEffectEvent=ye;var Px={readContext:qe,use:So,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:ph,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,sl(4194308,4,Dx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sl(4194308,4,e,t)},useInsertionEffect:function(e,t){sl(4,2,e,t)},useMemo:function(e,t){var n=Ke();t=t===void 0?null:t;var a=e();if(Va){Yn(!0);try{e()}finally{Yn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Ke();if(n!==void 0){var i=n(t);if(Va){Yn(!0);try{n(t)}finally{Yn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=M5.bind(null,$,e),[a.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:function(e){e=kd(e);var t=e.queue,n=Gx.bind(null,$,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:cf,useDeferredValue:function(e,t){var n=Ke();return df(n,e,t)},useTransition:function(){var e=kd(!1);return e=Vx.bind(null,$,e.queue,!0,!1),Ke().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=$,i=Ke();if(W){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),oe===null)throw Error(M(349));J&127||yx(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,ph(jx.bind(null,a,r,e),[e]),a.flags|=2048,_i(9,{destroy:void 0},vx.bind(null,a,r,n,t),null),n},useId:function(){var e=Ke(),t=oe.identifierPrefix;if(W){var n=Pt,a=$t;n=(a&~(1<<32-pt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Bl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=k5++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:uf,useFormState:fh,useActionState:fh,useOptimistic:function(e){var t=Ke();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ff.bind(null,$,!0,n),n.dispatch=t,[e,t]},useMemoCache:rf,useCacheRefresh:function(){return Ke().memoizedState=E5.bind(null,$)},useEffectEvent:function(e){var t=Ke(),n={impl:e};return t.memoizedState=n,function(){if(te&2)throw Error(M(440));return n.impl.apply(void 0,arguments)}}},mf={readContext:qe,use:So,useCallback:Ox,useContext:qe,useEffect:of,useImperativeHandle:Rx,useInsertionEffect:Mx,useLayoutEffect:_x,useMemo:Bx,useReducer:il,useRef:zx,useState:function(){return il(kn)},useDebugValue:cf,useDeferredValue:function(e,t){var n=Se();return Lx(n,le.memoizedState,e,t)},useTransition:function(){var e=il(kn)[0],t=Se().memoizedState;return[typeof e=="boolean"?e:gr(e),t]},useSyncExternalStore:bx,useId:Yx,useHostTransitionStatus:uf,useFormState:mh,useActionState:mh,useOptimistic:function(e,t){var n=Se();return kx(n,le,e,t)},useMemoCache:rf,useCacheRefresh:qx};mf.useEffectEvent=Ex;var Kx={readContext:qe,use:So,useCallback:Ox,useContext:qe,useEffect:of,useImperativeHandle:Rx,useInsertionEffect:Mx,useLayoutEffect:_x,useMemo:Bx,useReducer:ac,useRef:zx,useState:function(){return ac(kn)},useDebugValue:cf,useDeferredValue:function(e,t){var n=Se();return le===null?df(n,e,t):Lx(n,le.memoizedState,e,t)},useTransition:function(){var e=ac(kn)[0],t=Se().memoizedState;return[typeof e=="boolean"?e:gr(e),t]},useSyncExternalStore:bx,useId:Yx,useHostTransitionStatus:uf,useFormState:hh,useActionState:hh,useOptimistic:function(e,t){var n=Se();return le!==null?kx(n,le,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:rf,useCacheRefresh:qx};Kx.useEffectEvent=Ex;function ic(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Td={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=gt(),i=Zn(a);i.payload=t,n!=null&&(i.callback=n),t=In(e,i,a),t!==null&&(it(t,e,a),Ns(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=gt(),i=Zn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=In(e,i,a),t!==null&&(it(t,e,a),Ns(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),a=Zn(n);a.tag=2,t!=null&&(a.callback=t),t=In(e,a,n),t!==null&&(it(t,e,n),Ns(t,e,n))}};function gh(e,t,n,a,i,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,l):t.prototype&&t.prototype.isPureReactComponent?!Gs(n,a)||!Gs(i,r):!0}function xh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Td.enqueueReplaceState(t,t.state,null)}function Ua(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=ge({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function Fx(e){Cl(e)}function Qx(e){console.error(e)}function Zx(e){Cl(e)}function Ll(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function bh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Cd(e,t,n){return n=Zn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ll(e,t)},n}function Ix(e){return e=Zn(e),e.tag=3,e}function Jx(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=a.value;e.payload=function(){return i(r)},e.callback=function(){bh(t,n,a)}}var l=n.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){bh(t,n,a),typeof i!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function _5(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ki(t,n,i,!0),n=bt.current,n!==null){switch(n.tag){case 31:case 13:return Et===null?ql():n.alternate===null&&je===0&&(je=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===_l?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),pc(e,a,i)),!1;case 22:return n.flags|=65536,a===_l?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),pc(e,a,i)),!1}throw Error(M(435,n.tag))}return pc(e,a,i),ql(),!1}if(W)return t=bt.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==pd&&(e=Error(M(422),{cause:a}),$s(Tt(e,n)))):(a!==pd&&(t=Error(M(423),{cause:a}),$s(Tt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Tt(a,n),i=Cd(e.stateNode,a,i),nc(e,i),je!==4&&(je=2)),!1;var r=Error(M(520),{cause:a});if(r=Tt(r,n),Ms===null?Ms=[r]:Ms.push(r),je!==4&&(je=2),t===null)return!0;a=Tt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Cd(n.stateNode,a,e),nc(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Ix(i),Jx(i,e,n,a),nc(n,i),!1}n=n.return}while(n!==null);return!1}var hf=Error(M(461)),ze=!1;function Ue(e,t,n,a){t.child=e===null?fx(t,null,n,a):La(t,e.child,n,a)}function yh(e,t,n,a,i){n=n.render;var r=t.ref;if("ref"in a){var l={};for(var o in a)o!=="ref"&&(l[o]=a[o])}else l=a;return Ba(t),a=tf(e,t,n,l,r,i),o=nf(),e!==null&&!ze?(af(e,t,i),Nn(e,t,i)):(W&&o&&Ku(t),t.flags|=1,Ue(e,t,a,i),t.child)}function vh(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!Pu(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Wx(e,t,r,a,i)):(e=nl(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!pf(e,i)){var l=r.memoizedProps;if(n=n.compare,n=n!==null?n:Gs,n(l,a)&&e.ref===t.ref)return Nn(e,t,i)}return t.flags|=1,e=xn(r,a),e.ref=t.ref,e.return=t,t.child=e}function Wx(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if(Gs(r,a)&&e.ref===t.ref)if(ze=!1,t.pendingProps=a=r,pf(e,i))e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,Nn(e,t,i)}return zd(e,t,n,a,i)}function eb(e,t,n,a){var i=a.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(t.flags&128){if(r=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~r}else a=0,t.child=null;return jh(e,t,r,n,a)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&al(t,r!==null?r.cachePool:null),r!==null?ch(t,r):wd(),px(t);else return a=t.lanes=536870912,jh(e,t,r!==null?r.baseLanes|n:n,n,a)}else r!==null?(al(t,r.cachePool),ch(t,r),Un(),t.memoizedState=null):(e!==null&&al(t,null),wd(),Un());return Ue(e,t,i,n),t.child}function ps(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function jh(e,t,n,a,i){var r=Zu();return r=r===null?null:{parent:Te._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&al(t,null),wd(),px(t),e!==null&&Ki(e,t,a,!0),t.childLanes=i,null}function rl(e,t){return t=Vl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function wh(e,t,n){return La(t,e.child,null,n),e=rl(t,t.pendingProps),e.flags|=2,ct(t),t.memoizedState=null,e}function D5(e,t,n){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(W){if(a.mode==="hidden")return e=rl(t,a),t.lanes=536870912,ps(null,e);if(Sd(t),(e=me)?(e=Pb(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:$t,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=sx(e),n.return=t,t.child=n,Ye=t,me=null)):e=null,e===null)throw ra(t);return t.lanes=536870912,null}return rl(t,a)}var r=e.memoizedState;if(r!==null){var l=r.dehydrated;if(Sd(t),i)if(t.flags&256)t.flags&=-257,t=wh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(M(558));else if(ze||Ki(e,t,n,!1),i=(n&e.childLanes)!==0,ze||i){if(a=oe,a!==null&&(l=Mg(a,n),l!==0&&l!==r.retryLane))throw r.retryLane=l,Xa(e,l),it(a,e,l),hf;ql(),t=wh(e,t,n)}else e=r.treeContext,me=Mt(l.nextSibling),Ye=t,W=!0,Qn=null,Ct=!1,e!==null&&lx(t,e),t=rl(t,a),t.flags|=4096;return t}return e=xn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ll(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(M(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zd(e,t,n,a,i){return Ba(t),n=tf(e,t,n,a,void 0,i),a=nf(),e!==null&&!ze?(af(e,t,i),Nn(e,t,i)):(W&&a&&Ku(t),t.flags|=1,Ue(e,t,n,i),t.child)}function Sh(e,t,n,a,i,r){return Ba(t),t.updateQueue=null,n=xx(t,a,n,i),gx(e),a=nf(),e!==null&&!ze?(af(e,t,r),Nn(e,t,r)):(W&&a&&Ku(t),t.flags|=1,Ue(e,t,n,r),t.child)}function kh(e,t,n,a,i){if(Ba(t),t.stateNode===null){var r=oi,l=n.contextType;typeof l=="object"&&l!==null&&(r=qe(l)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Td,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},Ju(t),l=n.contextType,r.context=typeof l=="object"&&l!==null?qe(l):oi,r.state=t.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(ic(t,n,l,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&Td.enqueueReplaceState(r,r.state,null),Ts(t,a,r,i),As(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,c=Ua(n,o);r.props=c;var d=r.context,u=n.contextType;l=oi,typeof u=="object"&&u!==null&&(l=qe(u));var m=n.getDerivedStateFromProps;u=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||d!==l)&&xh(t,r,a,l),Bn=!1;var f=t.memoizedState;r.state=f,Ts(t,a,r,i),As(),d=t.memoizedState,o||f!==d||Bn?(typeof m=="function"&&(ic(t,n,m,a),d=t.memoizedState),(c=Bn||gh(t,n,c,a,f,d,l))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=d),r.props=a,r.state=d,r.context=l,a=c):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,vd(e,t),l=t.memoizedProps,u=Ua(n,l),r.props=u,m=t.pendingProps,f=r.context,d=n.contextType,c=oi,typeof d=="object"&&d!==null&&(c=qe(d)),o=n.getDerivedStateFromProps,(d=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==m||f!==c)&&xh(t,r,a,c),Bn=!1,f=t.memoizedState,r.state=f,Ts(t,a,r,i),As();var x=t.memoizedState;l!==m||f!==x||Bn||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof o=="function"&&(ic(t,n,o,a),x=t.memoizedState),(u=Bn||gh(t,n,u,a,f,x,c)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(d||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,x,c),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,x,c)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=x),r.props=a,r.state=x,r.context=c,a=u):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,ll(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=La(t,e.child,null,i),t.child=La(t,null,n,i)):Ue(e,t,n,i),t.memoizedState=r.state,e=t.child):e=Nn(e,t,i),e}function Nh(e,t,n,a){return Oa(),t.flags|=256,Ue(e,t,n,a),t.child}var sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:cx()}}function lc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ut),e}function tb(e,t,n){var a=t.pendingProps,i=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(we.current&2)!==0),l&&(i=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(W){if(i?Vn(t):Un(),(e=me)?(e=Pb(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:$t,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=sx(e),n.return=t,t.child=n,Ye=t,me=null)):e=null,e===null)throw ra(t);return Gd(e)?t.lanes=32:t.lanes=536870912,null}var o=a.children;return a=a.fallback,i?(Un(),i=t.mode,o=Vl({mode:"hidden",children:o},i),a=Ea(a,i,n,null),o.return=t,a.return=t,o.sibling=a,t.child=o,a=t.child,a.memoizedState=rc(n),a.childLanes=lc(e,l,n),t.memoizedState=sc,ps(null,a)):(Vn(t),Ed(t,o))}var c=e.memoizedState;if(c!==null&&(o=c.dehydrated,o!==null)){if(r)t.flags&256?(Vn(t),t.flags&=-257,t=oc(e,t,n)):t.memoizedState!==null?(Un(),t.child=e.child,t.flags|=128,t=null):(Un(),o=a.fallback,i=t.mode,a=Vl({mode:"visible",children:a.children},i),o=Ea(o,i,n,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,La(t,e.child,null,n),a=t.child,a.memoizedState=rc(n),a.childLanes=lc(e,l,n),t.memoizedState=sc,t=ps(null,a));else if(Vn(t),Gd(o)){if(l=o.nextSibling&&o.nextSibling.dataset,l)var d=l.dgst;l=d,a=Error(M(419)),a.stack="",a.digest=l,$s({value:a,source:null,stack:null}),t=oc(e,t,n)}else if(ze||Ki(e,t,n,!1),l=(n&e.childLanes)!==0,ze||l){if(l=oe,l!==null&&(a=Mg(l,n),a!==0&&a!==c.retryLane))throw c.retryLane=a,Xa(e,a),it(l,e,a),hf;qd(o)||ql(),t=oc(e,t,n)}else qd(o)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,me=Mt(o.nextSibling),Ye=t,W=!0,Qn=null,Ct=!1,e!==null&&lx(t,e),t=Ed(t,a.children),t.flags|=4096);return t}return i?(Un(),o=a.fallback,i=t.mode,c=e.child,d=c.sibling,a=xn(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&65011712,d!==null?o=xn(d,o):(o=Ea(o,i,n,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,ps(null,a),a=t.child,o=e.child.memoizedState,o===null?o=rc(n):(i=o.cachePool,i!==null?(c=Te._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=cx(),o={baseLanes:o.baseLanes|n,cachePool:i}),a.memoizedState=o,a.childLanes=lc(e,l,n),t.memoizedState=sc,ps(e.child,a)):(Vn(t),n=e.child,e=n.sibling,n=xn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=n,t.memoizedState=null,n)}function Ed(e,t){return t=Vl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Vl(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function oc(e,t,n){return La(t,e.child,null,n),e=Ed(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ah(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),xd(e.return,t,n)}function cc(e,t,n,a,i,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i,treeForkCount:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=n,l.tailMode=i,l.treeForkCount=r)}function nb(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;a=a.children;var l=we.current,o=(l&2)!==0;if(o?(l=l&1|2,t.flags|=128):l&=1,de(we,l),Ue(e,t,a,n),a=W?Xs:0,!o&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ah(e,n,t);else if(e.tag===19)Ah(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Rl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cc(t,!1,i,n,r,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Rl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cc(t,!0,n,null,r,a);break;case"together":cc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),oa|=t.lanes,!(n&t.childLanes))if(e!==null){if(Ki(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pf(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function R5(e,t,n){switch(t.tag){case 3:kl(t,t.stateNode.containerInfo),Ln(t,Te,e.memoizedState.cache),Oa();break;case 27:case 5:id(t);break;case 4:kl(t,t.stateNode.containerInfo);break;case 10:Ln(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Sd(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Vn(t),t.flags|=128,null):n&t.child.childLanes?tb(e,t,n):(Vn(t),e=Nn(e,t,n),e!==null?e.sibling:null);Vn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ki(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return nb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),a)break;return null;case 22:return t.lanes=0,eb(e,t,n,t.pendingProps);case 24:Ln(t,Te,e.memoizedState.cache)}return Nn(e,t,n)}function ab(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ze=!0;else{if(!pf(e,n)&&!(t.flags&128))return ze=!1,R5(e,t,n);ze=!!(e.flags&131072)}else ze=!1,W&&t.flags&1048576&&rx(t,Xs,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e=="function")Pu(e)?(a=Ua(e,a),t.tag=1,t=kh(null,t,e,a,n)):(t.tag=0,t=zd(null,t,e,a,n));else{if(e!=null){var i=e.$$typeof;if(i===_u){t.tag=11,t=yh(null,t,e,a,n);break e}else if(i===Du){t.tag=14,t=vh(null,t,e,a,n);break e}}throw t=nd(e)||e,Error(M(306,t,""))}}return t;case 0:return zd(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=Ua(a,t.pendingProps),kh(e,t,a,i,n);case 3:e:{if(kl(t,t.stateNode.containerInfo),e===null)throw Error(M(387));a=t.pendingProps;var r=t.memoizedState;i=r.element,vd(e,t),Ts(t,a,null,n);var l=t.memoizedState;if(a=l.cache,Ln(t,Te,a),a!==r.cache&&bd(t,[Te],n,!0),As(),a=l.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Nh(e,t,a,n);break e}else if(a!==i){i=Tt(Error(M(424)),t),$s(i),t=Nh(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(me=Mt(e.firstChild),Ye=t,W=!0,Qn=null,Ct=!0,n=fx(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Oa(),a===i){t=Nn(e,t,n);break e}Ue(e,t,a,n)}t=t.child}return t;case 26:return ll(e,t),e===null?(n=Ph(t.type,null,t.pendingProps,null))?t.memoizedState=n:W||(n=t.type,e=t.pendingProps,a=Pl(Fn.current).createElement(n),a[He]=t,a[st]=e,Ge(a,n,e),Be(a),t.stateNode=a):t.memoizedState=Ph(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return id(t),e===null&&W&&(a=t.stateNode=Kb(t.type,t.pendingProps,Fn.current),Ye=t,Ct=!0,i=me,fa(t.type)?(Xd=i,me=Mt(a.firstChild)):me=i),Ue(e,t,t.pendingProps.children,n),ll(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&W&&((i=a=me)&&(a=dj(a,t.type,t.pendingProps,Ct),a!==null?(t.stateNode=a,Ye=t,me=Mt(a.firstChild),Ct=!1,i=!0):i=!1),i||ra(t)),id(t),i=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,a=r.children,Hd(i,r)?a=null:l!==null&&Hd(i,l)&&(t.flags|=32),t.memoizedState!==null&&(i=tf(e,t,N5,null,null,n),Is._currentValue=i),ll(e,t),Ue(e,t,a,n),t.child;case 6:return e===null&&W&&((e=n=me)&&(n=uj(n,t.pendingProps,Ct),n!==null?(t.stateNode=n,Ye=t,me=null,e=!0):e=!1),e||ra(t)),null;case 13:return tb(e,t,n);case 4:return kl(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=La(t,null,a,n):Ue(e,t,a,n),t.child;case 11:return yh(e,t,t.type,t.pendingProps,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Ln(t,t.type,a.value),Ue(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Ba(t),i=qe(i),a=a(i),t.flags|=1,Ue(e,t,a,n),t.child;case 14:return vh(e,t,t.type,t.pendingProps,n);case 15:return Wx(e,t,t.type,t.pendingProps,n);case 19:return nb(e,t,n);case 31:return D5(e,t,n);case 22:return eb(e,t,n,t.pendingProps);case 24:return Ba(t),a=qe(Te),e===null?(i=Zu(),i===null&&(i=oe,r=Qu(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=n),i=r),t.memoizedState={parent:a,cache:i},Ju(t),Ln(t,Te,i)):(e.lanes&n&&(vd(e,t),Ts(t,null,null,n),As()),i=e.memoizedState,r=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ln(t,Te,a)):(a=r.cache,Ln(t,Te,a),a!==i.cache&&bd(t,[Te],n,!0))),Ue(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(M(156,t.tag))}function sn(e){e.flags|=4}function dc(e,t,n,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Tb())e.flags|=8192;else throw _a=_l,Iu}else e.flags&=-16777217}function Th(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Zb(t))if(Tb())e.flags|=8192;else throw _a=_l,Iu}function Ur(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Cg():536870912,e.lanes|=t,Di|=t)}function ls(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function O5(e,t,n){var a=t.pendingProps;switch(Fu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return ue(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),bn(Te),Ti(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fa(t)?sn(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tc())),ue(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(sn(t),r!==null?(ue(t),Th(t,r)):(ue(t),dc(t,i,null,a,n))):r?r!==e.memoizedState?(sn(t),ue(t),Th(t,r)):(ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&sn(t),ue(t),dc(t,i,e,a,n)),null;case 27:if(Nl(t),n=Fn.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&sn(t);else{if(!a){if(t.stateNode===null)throw Error(M(166));return ue(t),null}e=Ft.current,Fa(t)?nh(t):(e=Kb(i,a,n),t.stateNode=e,sn(t))}return ue(t),null;case 5:if(Nl(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&sn(t);else{if(!a){if(t.stateNode===null)throw Error(M(166));return ue(t),null}if(r=Ft.current,Fa(t))nh(t);else{var l=Pl(Fn.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?r.multiple=!0:a.size&&(r.size=a.size);break;default:r=typeof a.is=="string"?l.createElement(i,{is:a.is}):l.createElement(i)}}r[He]=t,r[st]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=r;e:switch(Ge(r,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&sn(t)}}return ue(t),dc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&sn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(M(166));if(e=Fn.current,Fa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=Ye,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[He]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Gb(e.nodeValue,n)),e||ra(t,!0)}else e=Pl(e).createTextNode(a),e[He]=t,t.stateNode=e}return ue(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Fa(t),n!==null){if(e===null){if(!a)throw Error(M(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(557));e[He]=t}else Oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),e=!1}else n=tc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ct(t),t):(ct(t),null);if(t.flags&128)throw Error(M(558))}return ue(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Fa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(M(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[He]=t}else Oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),i=!1}else i=tc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ct(t),t):(ct(t),null)}return ct(t),t.flags&128?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==i&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ur(t,t.updateQueue),ue(t),null);case 4:return Ti(),e===null&&wf(t.stateNode.containerInfo),ue(t),null;case 10:return bn(t.type),ue(t),null;case 19:if(Le(we),a=t.memoizedState,a===null)return ue(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)ls(a,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=Rl(e),r!==null){for(t.flags|=128,ls(a,!1),e=r.updateQueue,t.updateQueue=e,Ur(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ix(n,e),n=n.sibling;return de(we,we.current&1|2),W&&fn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&mt()>Hl&&(t.flags|=128,i=!0,ls(a,!1),t.lanes=4194304)}else{if(!i)if(e=Rl(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ur(t,e),ls(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!W)return ue(t),null}else 2*mt()-a.renderingStartTime>Hl&&n!==536870912&&(t.flags|=128,i=!0,ls(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=mt(),e.sibling=null,n=we.current,de(we,i?n&1|2:n&1),W&&fn(t,a.treeForkCount),e):(ue(t),null);case 22:case 23:return ct(t),Wu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?n&536870912&&!(t.flags&128)&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),n=t.updateQueue,n!==null&&Ur(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Le(Ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),bn(Te),ue(t),null;case 25:return null;case 30:return null}throw Error(M(156,t.tag))}function B5(e,t){switch(Fu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(Te),Ti(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Nl(t),null;case 31:if(t.memoizedState!==null){if(ct(t),t.alternate===null)throw Error(M(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ct(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Le(we),null;case 4:return Ti(),null;case 10:return bn(t.type),null;case 22:case 23:return ct(t),Wu(),e!==null&&Le(Ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return bn(Te),null;case 25:return null;default:return null}}function ib(e,t){switch(Fu(t),t.tag){case 3:bn(Te),Ti();break;case 26:case 27:case 5:Nl(t);break;case 4:Ti();break;case 31:t.memoizedState!==null&&ct(t);break;case 13:ct(t);break;case 19:Le(we);break;case 10:bn(t.type);break;case 22:case 23:ct(t),Wu(),e!==null&&Le(Ma);break;case 24:bn(Te)}}function xr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var r=n.create,l=n.inst;a=r(),l.destroy=a}n=n.next}while(n!==i)}}catch(o){se(t,t.return,o)}}function la(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){var l=a.inst,o=l.destroy;if(o!==void 0){l.destroy=void 0,i=t;var c=n,d=o;try{d()}catch(u){se(i,c,u)}}}a=a.next}while(a!==r)}}catch(u){se(t,t.return,u)}}function sb(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{hx(t,n)}catch(a){se(e,e.return,a)}}}function rb(e,t,n){n.props=Ua(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){se(e,t,a)}}function zs(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){se(e,t,i)}}function Kt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){se(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){se(e,t,i)}else n.current=null}function lb(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){se(e,e.return,i)}}function uc(e,t,n){try{var a=e.stateNode;ij(a,e.type,n,t),a[st]=t}catch(i){se(e,e.return,i)}}function ob(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&fa(e.type)||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ob(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&fa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Md(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pn));else if(a!==4&&(a===27&&fa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Md(e,t,n),e=e.sibling;e!==null;)Md(e,t,n),e=e.sibling}function Ul(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&fa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function cb(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ge(t,a,n),t[He]=e,t[st]=n}catch(r){se(e,e.return,r)}}var mn=!1,Ae=!1,mc=!1,Ch=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function L5(e,t){if(e=e.containerInfo,Vd=Zl,e=Zg(e),Gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var l=0,o=-1,c=-1,d=0,u=0,m=e,f=null;t:for(;;){for(var x;m!==n||i!==0&&m.nodeType!==3||(o=l+i),m!==r||a!==0&&m.nodeType!==3||(c=l+a),m.nodeType===3&&(l+=m.nodeValue.length),(x=m.firstChild)!==null;)f=m,m=x;for(;;){if(m===e)break t;if(f===n&&++d===i&&(o=l),f===r&&++u===a&&(c=l),(x=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=x}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ud={focusedElem:e,selectionRange:n},Zl=!1,Oe=t;Oe!==null;)if(t=Oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Oe=e;else for(;Oe!==null;){switch(t=Oe,r=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,i=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var v=Ua(n.type,i);e=a.getSnapshotBeforeUpdate(v,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(j){se(n,n.return,j)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Yd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(M(163))}if(e=t.sibling,e!==null){e.return=t.return,Oe=e;break}Oe=t.return}}function db(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:ln(e,n),a&4&&xr(5,n);break;case 1:if(ln(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(l){se(n,n.return,l)}else{var i=Ua(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){se(n,n.return,l)}}a&64&&sb(n),a&512&&zs(n,n.return);break;case 3:if(ln(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{hx(e,t)}catch(l){se(n,n.return,l)}}break;case 27:t===null&&a&4&&cb(n);case 26:case 5:ln(e,n),t===null&&a&4&&lb(n),a&512&&zs(n,n.return);break;case 12:ln(e,n);break;case 31:ln(e,n),a&4&&mb(e,n);break;case 13:ln(e,n),a&4&&hb(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=P5.bind(null,n),fj(e,n))));break;case 22:if(a=n.memoizedState!==null||mn,!a){t=t!==null&&t.memoizedState!==null||Ae,i=mn;var r=Ae;mn=a,(Ae=t)&&!r?dn(e,n,(n.subtreeFlags&8772)!==0):ln(e,n),mn=i,Ae=r}break;case 30:break;default:ln(e,n)}}function ub(e){var t=e.alternate;t!==null&&(e.alternate=null,ub(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xe=null,nt=!1;function rn(e,t,n){for(n=n.child;n!==null;)fb(e,t,n),n=n.sibling}function fb(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(dr,n)}catch{}switch(n.tag){case 26:Ae||Kt(n,t),rn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ae||Kt(n,t);var a=xe,i=nt;fa(n.type)&&(xe=n.stateNode,nt=!1),rn(e,t,n),Ds(n.stateNode),xe=a,nt=i;break;case 5:Ae||Kt(n,t);case 6:if(a=xe,i=nt,xe=null,rn(e,t,n),xe=a,nt=i,xe!==null)if(nt)try{(xe.nodeType===9?xe.body:xe.nodeName==="HTML"?xe.ownerDocument.body:xe).removeChild(n.stateNode)}catch(r){se(n,t,r)}else try{xe.removeChild(n.stateNode)}catch(r){se(n,t,r)}break;case 18:xe!==null&&(nt?(e=xe,Yh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Li(e)):Yh(xe,n.stateNode));break;case 4:a=xe,i=nt,xe=n.stateNode.containerInfo,nt=!0,rn(e,t,n),xe=a,nt=i;break;case 0:case 11:case 14:case 15:la(2,n,t),Ae||la(4,n,t),rn(e,t,n);break;case 1:Ae||(Kt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&rb(n,t,a)),rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:Ae=(a=Ae)||n.memoizedState!==null,rn(e,t,n),Ae=a;break;default:rn(e,t,n)}}function mb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Li(e)}catch(n){se(t,t.return,n)}}}function hb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Li(e)}catch(n){se(t,t.return,n)}}function V5(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ch),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ch),t;default:throw Error(M(435,e.tag))}}function Hr(e,t){var n=V5(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var i=K5.bind(null,e,a);a.then(i,i)}})}function et(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],r=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 27:if(fa(o.type)){xe=o.stateNode,nt=!1;break e}break;case 5:xe=o.stateNode,nt=!1;break e;case 3:case 4:xe=o.stateNode.containerInfo,nt=!0;break e}o=o.return}if(xe===null)throw Error(M(160));fb(r,l,i),xe=null,nt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pb(t,e),t=t.sibling}var Ut=null;function pb(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),a&4&&(la(3,e,e.return),xr(3,e),la(5,e,e.return));break;case 1:et(t,e),tt(e),a&512&&(Ae||n===null||Kt(n,n.return)),a&64&&mn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Ut;if(et(t,e),tt(e),a&512&&(Ae||n===null||Kt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":r=i.getElementsByTagName("title")[0],(!r||r[mr]||r[He]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(a),i.head.insertBefore(r,i.querySelector("head > title"))),Ge(r,a,n),r[He]=e,Be(r),a=r;break e;case"link":var l=Fh("link","href",i).get(a+(n.href||""));if(l){for(var o=0;o<l.length;o++)if(r=l[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){l.splice(o,1);break t}}r=i.createElement(a),Ge(r,a,n),i.head.appendChild(r);break;case"meta":if(l=Fh("meta","content",i).get(a+(n.content||""))){for(o=0;o<l.length;o++)if(r=l[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){l.splice(o,1);break t}}r=i.createElement(a),Ge(r,a,n),i.head.appendChild(r);break;default:throw Error(M(468,a))}r[He]=e,Be(r),a=r}e.stateNode=a}else Qh(i,e.type,e.stateNode);else e.stateNode=Kh(i,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Qh(i,e.type,e.stateNode):Kh(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&uc(e,e.memoizedProps,n.memoizedProps)}break;case 27:et(t,e),tt(e),a&512&&(Ae||n===null||Kt(n,n.return)),n!==null&&a&4&&uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(et(t,e),tt(e),a&512&&(Ae||n===null||Kt(n,n.return)),e.flags&32){i=e.stateNode;try{zi(i,"")}catch(v){se(e,e.return,v)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,uc(e,i,n!==null?n.memoizedProps:i)),a&1024&&(mc=!0);break;case 6:if(et(t,e),tt(e),a&4){if(e.stateNode===null)throw Error(M(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(v){se(e,e.return,v)}}break;case 3:if(dl=null,i=Ut,Ut=Kl(t.containerInfo),et(t,e),Ut=i,tt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Li(t.containerInfo)}catch(v){se(e,e.return,v)}mc&&(mc=!1,gb(e));break;case 4:a=Ut,Ut=Kl(e.stateNode.containerInfo),et(t,e),tt(e),Ut=a;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hr(e,a)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ao=mt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hr(e,a)));break;case 22:i=e.memoizedState!==null;var c=n!==null&&n.memoizedState!==null,d=mn,u=Ae;if(mn=d||i,Ae=u||c,et(t,e),Ae=u,mn=d,tt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||c||mn||Ae||Sa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){c=n=t;try{if(r=c.stateNode,i)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{o=c.stateNode;var m=c.memoizedProps.style,f=m!=null&&m.hasOwnProperty("display")?m.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(v){se(c,c.return,v)}}}else if(t.tag===6){if(n===null){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(v){se(c,c.return,v)}}}else if(t.tag===18){if(n===null){c=t;try{var x=c.stateNode;i?qh(x,!0):qh(c.stateNode,!1)}catch(v){se(c,c.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Hr(e,n))));break;case 19:et(t,e),tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hr(e,a)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(ob(a)){n=a;break}a=a.return}if(n==null)throw Error(M(160));switch(n.tag){case 27:var i=n.stateNode,r=fc(e);Ul(e,r,i);break;case 5:var l=n.stateNode;n.flags&32&&(zi(l,""),n.flags&=-33);var o=fc(e);Ul(e,o,l);break;case 3:case 4:var c=n.stateNode.containerInfo,d=fc(e);Md(e,d,c);break;default:throw Error(M(161))}}catch(u){se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gb(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;gb(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ln(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)db(e,t.alternate,t),t=t.sibling}function Sa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:la(4,t,t.return),Sa(t);break;case 1:Kt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&rb(t,t.return,n),Sa(t);break;case 27:Ds(t.stateNode);case 26:case 5:Kt(t,t.return),Sa(t);break;case 22:t.memoizedState===null&&Sa(t);break;case 30:Sa(t);break;default:Sa(t)}e=e.sibling}}function dn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,r=t,l=r.flags;switch(r.tag){case 0:case 11:case 15:dn(i,r,n),xr(4,r);break;case 1:if(dn(i,r,n),a=r,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(d){se(a,a.return,d)}if(a=r,i=a.updateQueue,i!==null){var o=a.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)mx(c[i],o)}catch(d){se(a,a.return,d)}}n&&l&64&&sb(r),zs(r,r.return);break;case 27:cb(r);case 26:case 5:dn(i,r,n),n&&a===null&&l&4&&lb(r),zs(r,r.return);break;case 12:dn(i,r,n);break;case 31:dn(i,r,n),n&&l&4&&mb(i,r);break;case 13:dn(i,r,n),n&&l&4&&hb(i,r);break;case 22:r.memoizedState===null&&dn(i,r,n),zs(r,r.return);break;case 30:break;default:dn(i,r,n)}t=t.sibling}}function gf(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pr(n))}function xf(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pr(e))}function Bt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xb(e,t,n,a),t=t.sibling}function xb(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Bt(e,t,n,a),i&2048&&xr(9,t);break;case 1:Bt(e,t,n,a);break;case 3:Bt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pr(e)));break;case 12:if(i&2048){Bt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,l=r.id,o=r.onPostCommit;typeof o=="function"&&o(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){se(t,t.return,c)}}else Bt(e,t,n,a);break;case 31:Bt(e,t,n,a);break;case 13:Bt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,l=t.alternate,t.memoizedState!==null?r._visibility&2?Bt(e,t,n,a):Es(e,t):r._visibility&2?Bt(e,t,n,a):(r._visibility|=2,Ja(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&gf(l,t);break;case 24:Bt(e,t,n,a),i&2048&&xf(t.alternate,t);break;default:Bt(e,t,n,a)}}function Ja(e,t,n,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,l=t,o=n,c=a,d=l.flags;switch(l.tag){case 0:case 11:case 15:Ja(r,l,o,c,i),xr(8,l);break;case 23:break;case 22:var u=l.stateNode;l.memoizedState!==null?u._visibility&2?Ja(r,l,o,c,i):Es(r,l):(u._visibility|=2,Ja(r,l,o,c,i)),i&&d&2048&&gf(l.alternate,l);break;case 24:Ja(r,l,o,c,i),i&&d&2048&&xf(l.alternate,l);break;default:Ja(r,l,o,c,i)}t=t.sibling}}function Es(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Es(n,a),i&2048&&gf(a.alternate,a);break;case 24:Es(n,a),i&2048&&xf(a.alternate,a);break;default:Es(n,a)}t=t.sibling}}var gs=8192;function Qa(e,t,n){if(e.subtreeFlags&gs)for(e=e.child;e!==null;)bb(e,t,n),e=e.sibling}function bb(e,t,n){switch(e.tag){case 26:Qa(e,t,n),e.flags&gs&&e.memoizedState!==null&&kj(n,Ut,e.memoizedState,e.memoizedProps);break;case 5:Qa(e,t,n);break;case 3:case 4:var a=Ut;Ut=Kl(e.stateNode.containerInfo),Qa(e,t,n),Ut=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=gs,gs=16777216,Qa(e,t,n),gs=a):Qa(e,t,n));break;default:Qa(e,t,n)}}function yb(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function os(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Oe=a,jb(a,e)}yb(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vb(e),e=e.sibling}function vb(e){switch(e.tag){case 0:case 11:case 15:os(e),e.flags&2048&&la(9,e,e.return);break;case 3:os(e);break;case 12:os(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ol(e)):os(e);break;default:os(e)}}function ol(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Oe=a,jb(a,e)}yb(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:la(8,t,t.return),ol(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ol(t));break;default:ol(t)}e=e.sibling}}function jb(e,t){for(;Oe!==null;){var n=Oe;switch(n.tag){case 0:case 11:case 15:la(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:pr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Oe=a;else e:for(n=e;Oe!==null;){a=Oe;var i=a.sibling,r=a.return;if(ub(a),a===n){Oe=null;break e}if(i!==null){i.return=r,Oe=i;break e}Oe=r}}}var U5={getCacheForType:function(e){var t=qe(Te),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return qe(Te).controller.signal}},H5=typeof WeakMap=="function"?WeakMap:Map,te=0,oe=null,Z=null,J=0,ie=0,ot=null,Gn=!1,Qi=!1,bf=!1,An=0,je=0,oa=0,Da=0,yf=0,ut=0,Di=0,Ms=null,at=null,_d=!1,Ao=0,wb=0,Hl=1/0,Yl=null,Jn=null,_e=0,Wn=null,Ri=null,yn=0,Dd=0,Rd=null,Sb=null,_s=0,Od=null;function gt(){return te&2&&J!==0?J&-J:H.T!==null?jf():_g()}function kb(){if(ut===0)if(!(J&536870912)||W){var e=_r;_r<<=1,!(_r&3932160)&&(_r=262144),ut=e}else ut=536870912;return e=bt.current,e!==null&&(e.flags|=32),ut}function it(e,t,n){(e===oe&&(ie===2||ie===9)||e.cancelPendingCommit!==null)&&(Oi(e,0),Xn(e,J,ut,!1)),fr(e,n),(!(te&2)||e!==oe)&&(e===oe&&(!(te&2)&&(Da|=n),je===4&&Xn(e,J,ut,!1)),Jt(e))}function Nb(e,t,n){if(te&6)throw Error(M(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ur(e,t),i=a?G5(e,t):hc(e,t,!0),r=a;do{if(i===0){Qi&&!a&&Xn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Y5(n)){i=hc(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var o=e;i=Ms;var c=o.current.memoizedState.isDehydrated;if(c&&(Oi(o,l).flags|=256),l=hc(o,l,!1),l!==2){if(bf&&!c){o.errorRecoveryDisabledLanes|=r,Da|=r,i=4;break e}r=at,at=i,r!==null&&(at===null?at=r:at.push.apply(at,r))}i=l}if(r=!1,i!==2)continue}}if(i===1){Oi(e,0),Xn(e,t,0,!0);break}e:{switch(a=e,r=i,r){case 0:case 1:throw Error(M(345));case 4:if((t&4194048)!==t)break;case 6:Xn(a,t,ut,!Gn);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(M(329))}if((t&62914560)===t&&(i=Ao+300-mt(),10<i)){if(Xn(a,t,ut,!Gn),po(a,0,!0)!==0)break e;yn=t,a.timeoutHandle=$b(zh.bind(null,a,n,at,Yl,_d,t,ut,Da,Di,Gn,r,"Throttled",-0,0),i);break e}zh(a,n,at,Yl,_d,t,ut,Da,Di,Gn,r,null,-0,0)}}break}while(!0);Jt(e)}function zh(e,t,n,a,i,r,l,o,c,d,u,m,f,x){if(e.timeoutHandle=-1,m=t.subtreeFlags,m&8192||(m&16785408)===16785408){m={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pn},bb(t,r,m);var v=(r&62914560)===r?Ao-mt():(r&4194048)===r?wb-mt():0;if(v=Nj(m,v),v!==null){yn=r,e.cancelPendingCommit=v(Mh.bind(null,e,t,r,n,a,i,l,o,c,u,m,null,f,x)),Xn(e,r,l,!d);return}}Mh(e,t,r,n,a,i,l,o,c)}function Y5(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!xt(r(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xn(e,t,n,a){t&=~yf,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var r=31-pt(i),l=1<<r;a[r]=-1,i&=~l}n!==0&&zg(e,n,t)}function To(){return te&6?!0:(br(0),!1)}function vf(){if(Z!==null){if(ie===0)var e=Z.return;else e=Z,gn=$a=null,sf(e),Si=null,Ps=0,e=Z;for(;e!==null;)ib(e.alternate,e),e=e.return;Z=null}}function Oi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,lj(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),yn=0,vf(),oe=e,Z=n=xn(e.current,null),J=t,ie=0,ot=null,Gn=!1,Qi=ur(e,t),bf=!1,Di=ut=yf=Da=oa=je=0,at=Ms=null,_d=!1,t&8&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-pt(a),r=1<<i;t|=e[i],a&=~r}return An=t,yo(),n}function Ab(e,t){$=null,H.H=Fs,t===Fi||t===jo?(t=lh(),ie=3):t===Iu?(t=lh(),ie=4):ie=t===hf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,Z===null&&(je=1,Ll(e,Tt(t,e.current)))}function Tb(){var e=bt.current;return e===null?!0:(J&4194048)===J?Et===null:(J&62914560)===J||J&536870912?e===Et:!1}function Cb(){var e=H.H;return H.H=Fs,e===null?Fs:e}function zb(){var e=H.A;return H.A=U5,e}function ql(){je=4,Gn||(J&4194048)!==J&&bt.current!==null||(Qi=!0),!(oa&134217727)&&!(Da&134217727)||oe===null||Xn(oe,J,ut,!1)}function hc(e,t,n){var a=te;te|=2;var i=Cb(),r=zb();(oe!==e||J!==t)&&(Yl=null,Oi(e,t)),t=!1;var l=je;e:do try{if(ie!==0&&Z!==null){var o=Z,c=ot;switch(ie){case 8:vf(),l=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var d=ie;if(ie=0,ot=null,ui(e,o,c,d),n&&Qi){l=0;break e}break;default:d=ie,ie=0,ot=null,ui(e,o,c,d)}}q5(),l=je;break}catch(u){Ab(e,u)}while(!0);return t&&e.shellSuspendCounter++,gn=$a=null,te=a,H.H=i,H.A=r,Z===null&&(oe=null,J=0,yo()),l}function q5(){for(;Z!==null;)Eb(Z)}function G5(e,t){var n=te;te|=2;var a=Cb(),i=zb();oe!==e||J!==t?(Yl=null,Hl=mt()+500,Oi(e,t)):Qi=ur(e,t);e:do try{if(ie!==0&&Z!==null){t=Z;var r=ot;t:switch(ie){case 1:ie=0,ot=null,ui(e,t,r,1);break;case 2:case 9:if(rh(r)){ie=0,ot=null,Eh(t);break}t=function(){ie!==2&&ie!==9||oe!==e||(ie=7),Jt(e)},r.then(t,t);break e;case 3:ie=7;break e;case 4:ie=5;break e;case 7:rh(r)?(ie=0,ot=null,Eh(t)):(ie=0,ot=null,ui(e,t,r,7));break;case 5:var l=null;switch(Z.tag){case 26:l=Z.memoizedState;case 5:case 27:var o=Z;if(l?Zb(l):o.stateNode.complete){ie=0,ot=null;var c=o.sibling;if(c!==null)Z=c;else{var d=o.return;d!==null?(Z=d,Co(d)):Z=null}break t}}ie=0,ot=null,ui(e,t,r,5);break;case 6:ie=0,ot=null,ui(e,t,r,6);break;case 8:vf(),je=6;break e;default:throw Error(M(462))}}X5();break}catch(u){Ab(e,u)}while(!0);return gn=$a=null,H.H=a,H.A=i,te=n,Z!==null?0:(oe=null,J=0,yo(),je)}function X5(){for(;Z!==null&&!m2();)Eb(Z)}function Eb(e){var t=ab(e.alternate,e,An);e.memoizedProps=e.pendingProps,t===null?Co(e):Z=t}function Eh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Sh(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=Sh(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:sf(t);default:ib(n,t),t=Z=ix(t,An),t=ab(n,t,An)}e.memoizedProps=e.pendingProps,t===null?Co(e):Z=t}function ui(e,t,n,a){gn=$a=null,sf(t),Si=null,Ps=0;var i=t.return;try{if(_5(e,i,t,n,J)){je=1,Ll(e,Tt(n,e.current)),Z=null;return}}catch(r){if(i!==null)throw Z=i,r;je=1,Ll(e,Tt(n,e.current)),Z=null;return}t.flags&32768?(W||a===1?e=!0:Qi||J&536870912?e=!1:(Gn=e=!0,(a===2||a===9||a===3||a===6)&&(a=bt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Mb(t,e)):Co(t)}function Co(e){var t=e;do{if(t.flags&32768){Mb(t,Gn);return}e=t.return;var n=O5(t.alternate,t,An);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);je===0&&(je=5)}function Mb(e,t){do{var n=B5(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);je=6,Z=null}function Mh(e,t,n,a,i,r,l,o,c){e.cancelPendingCommit=null;do zo();while(_e!==0);if(te&6)throw Error(M(327));if(t!==null){if(t===e.current)throw Error(M(177));if(r=t.lanes|t.childLanes,r|=Xu,S2(e,n,r,l,o,c),e===oe&&(Z=oe=null,J=0),Ri=t,Wn=e,yn=n,Dd=r,Rd=i,Sb=a,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,F5(Al,function(){return Bb(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,t.subtreeFlags&13878||a){a=H.T,H.T=null,i=ne.p,ne.p=2,l=te,te|=4;try{L5(e,t,n)}finally{te=l,ne.p=i,H.T=a}}_e=1,_b(),Db(),Rb()}}function _b(){if(_e===1){_e=0;var e=Wn,t=Ri,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=H.T,H.T=null;var a=ne.p;ne.p=2;var i=te;te|=4;try{pb(t,e);var r=Ud,l=Zg(e.containerInfo),o=r.focusedElem,c=r.selectionRange;if(l!==o&&o&&o.ownerDocument&&Qg(o.ownerDocument.documentElement,o)){if(c!==null&&Gu(o)){var d=c.start,u=c.end;if(u===void 0&&(u=d),"selectionStart"in o)o.selectionStart=d,o.selectionEnd=Math.min(u,o.value.length);else{var m=o.ownerDocument||document,f=m&&m.defaultView||window;if(f.getSelection){var x=f.getSelection(),v=o.textContent.length,j=Math.min(c.start,v),T=c.end===void 0?j:Math.min(c.end,v);!x.extend&&j>T&&(l=T,T=j,j=l);var g=Wm(o,j),p=Wm(o,T);if(g&&p&&(x.rangeCount!==1||x.anchorNode!==g.node||x.anchorOffset!==g.offset||x.focusNode!==p.node||x.focusOffset!==p.offset)){var b=m.createRange();b.setStart(g.node,g.offset),x.removeAllRanges(),j>T?(x.addRange(b),x.extend(p.node,p.offset)):(b.setEnd(p.node,p.offset),x.addRange(b))}}}}for(m=[],x=o;x=x.parentNode;)x.nodeType===1&&m.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<m.length;o++){var y=m[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Zl=!!Vd,Ud=Vd=null}finally{te=i,ne.p=a,H.T=n}}e.current=t,_e=2}}function Db(){if(_e===2){_e=0;var e=Wn,t=Ri,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=H.T,H.T=null;var a=ne.p;ne.p=2;var i=te;te|=4;try{db(e,t.alternate,t)}finally{te=i,ne.p=a,H.T=n}}_e=3}}function Rb(){if(_e===4||_e===3){_e=0,h2();var e=Wn,t=Ri,n=yn,a=Sb;t.subtreeFlags&10256||t.flags&10256?_e=5:(_e=0,Ri=Wn=null,Ob(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Jn=null),Bu(n),t=t.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(dr,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=H.T,i=ne.p,ne.p=2,H.T=null;try{for(var r=e.onRecoverableError,l=0;l<a.length;l++){var o=a[l];r(o.value,{componentStack:o.stack})}}finally{H.T=t,ne.p=i}}yn&3&&zo(),Jt(e),i=e.pendingLanes,n&261930&&i&42?e===Od?_s++:(_s=0,Od=e):_s=0,br(0)}}function Ob(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pr(t)))}function zo(){return _b(),Db(),Rb(),Bb()}function Bb(){if(_e!==5)return!1;var e=Wn,t=Dd;Dd=0;var n=Bu(yn),a=H.T,i=ne.p;try{ne.p=32>n?32:n,H.T=null,n=Rd,Rd=null;var r=Wn,l=yn;if(_e=0,Ri=Wn=null,yn=0,te&6)throw Error(M(331));var o=te;if(te|=4,vb(r.current),xb(r,r.current,l,n),te=o,br(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(dr,r)}catch{}return!0}finally{ne.p=i,H.T=a,Ob(e,t)}}function _h(e,t,n){t=Tt(n,t),t=Cd(e.stateNode,t,2),e=In(e,t,2),e!==null&&(fr(e,2),Jt(e))}function se(e,t,n){if(e.tag===3)_h(e,e,n);else for(;t!==null;){if(t.tag===3){_h(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Jn===null||!Jn.has(a))){e=Tt(n,e),n=Ix(2),a=In(t,n,2),a!==null&&(Jx(n,a,t,e),fr(a,2),Jt(a));break}}t=t.return}}function pc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new H5;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(bf=!0,i.add(n),e=$5.bind(null,e,t,n),t.then(e,e))}function $5(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,oe===e&&(J&n)===n&&(je===4||je===3&&(J&62914560)===J&&300>mt()-Ao?!(te&2)&&Oi(e,0):yf|=n,Di===J&&(Di=0)),Jt(e)}function Lb(e,t){t===0&&(t=Cg()),e=Xa(e,t),e!==null&&(fr(e,t),Jt(e))}function P5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lb(e,n)}function K5(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(M(314))}a!==null&&a.delete(t),Lb(e,n)}function F5(e,t){return Ru(e,t)}var Gl=null,Wa=null,Bd=!1,Xl=!1,gc=!1,$n=0;function Jt(e){e!==Wa&&e.next===null&&(Wa===null?Gl=Wa=e:Wa=Wa.next=e),Xl=!0,Bd||(Bd=!0,Z5())}function br(e,t){if(!gc&&Xl){gc=!0;do for(var n=!1,a=Gl;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var r=0;else{var l=a.suspendedLanes,o=a.pingedLanes;r=(1<<31-pt(42|e)+1)-1,r&=i&~(l&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Dh(a,r))}else r=J,r=po(a,a===oe?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(r&3)||ur(a,r)||(n=!0,Dh(a,r));a=a.next}while(n);gc=!1}}function Q5(){Vb()}function Vb(){Xl=Bd=!1;var e=0;$n!==0&&rj()&&(e=$n);for(var t=mt(),n=null,a=Gl;a!==null;){var i=a.next,r=Ub(a,t);r===0?(a.next=null,n===null?Gl=i:n.next=i,i===null&&(Wa=n)):(n=a,(e!==0||r&3)&&(Xl=!0)),a=i}_e!==0&&_e!==5||br(e),$n!==0&&($n=0)}function Ub(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-pt(r),o=1<<l,c=i[l];c===-1?(!(o&n)||o&a)&&(i[l]=w2(o,t)):c<=t&&(e.expiredLanes|=o),r&=~o}if(t=oe,n=J,n=po(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ie===2||ie===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Xo(a),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||ur(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Xo(a),Bu(n)){case 2:case 8:n=Ag;break;case 32:n=Al;break;case 268435456:n=Tg;break;default:n=Al}return a=Hb.bind(null,e),n=Ru(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Xo(a),e.callbackPriority=2,e.callbackNode=null,2}function Hb(e,t){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(zo()&&e.callbackNode!==n)return null;var a=J;return a=po(e,e===oe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Nb(e,a,t),Ub(e,mt()),e.callbackNode!=null&&e.callbackNode===n?Hb.bind(null,e):null)}function Dh(e,t){if(zo())return null;Nb(e,t,!0)}function Z5(){oj(function(){te&6?Ru(Ng,Q5):Vb()})}function jf(){if($n===0){var e=Ei;e===0&&(e=Mr,Mr<<=1,!(Mr&261888)&&(Mr=256)),$n=e}return $n}function Rh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wr(""+e)}function Oh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function I5(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var r=Rh((i[st]||null).action),l=a.submitter;l&&(t=(t=l[st]||null)?Rh(t.formAction):l.getAttribute("formAction"),t!==null&&(r=t,l=null));var o=new go("action","action",null,a,i);e.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if($n!==0){var c=l?Oh(i,l):new FormData(i);Ad(n,{pending:!0,data:c,method:i.method,action:r},null,c)}}else typeof r=="function"&&(o.preventDefault(),c=l?Oh(i,l):new FormData(i),Ad(n,{pending:!0,data:c,method:i.method,action:r},r,c))},currentTarget:i}]})}}for(var xc=0;xc<hd.length;xc++){var bc=hd[xc],J5=bc.toLowerCase(),W5=bc[0].toUpperCase()+bc.slice(1);qt(J5,"on"+W5)}qt(Jg,"onAnimationEnd");qt(Wg,"onAnimationIteration");qt(ex,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(p5,"onTransitionRun");qt(g5,"onTransitionStart");qt(x5,"onTransitionCancel");qt(tx,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);Ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ya("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ej=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qs));function Yb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var l=a.length-1;0<=l;l--){var o=a[l],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==r&&i.isPropagationStopped())break e;r=o,i.currentTarget=d;try{r(i)}catch(u){Cl(u)}i.currentTarget=null,r=c}else for(l=0;l<a.length;l++){if(o=a[l],c=o.instance,d=o.currentTarget,o=o.listener,c!==r&&i.isPropagationStopped())break e;r=o,i.currentTarget=d;try{r(i)}catch(u){Cl(u)}i.currentTarget=null,r=c}}}}function Q(e,t){var n=t[rd];n===void 0&&(n=t[rd]=new Set);var a=e+"__bubble";n.has(a)||(qb(t,e,2,!1),n.add(a))}function yc(e,t,n){var a=0;t&&(a|=4),qb(n,e,a,t)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function wf(e){if(!e[Yr]){e[Yr]=!0,Dg.forEach(function(n){n!=="selectionchange"&&(ej.has(n)||yc(n,!1,e),yc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yr]||(t[Yr]=!0,yc("selectionchange",!1,t))}}function qb(e,t,n,a){switch(ty(t)){case 2:var i=Cj;break;case 8:i=zj;break;default:i=Af}n=i.bind(null,t,n,e),i=void 0,!ud||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vc(e,t,n,a,i){var r=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var l=a.tag;if(l===3||l===4){var o=a.stateNode.containerInfo;if(o===i)break;if(l===4)for(l=a.return;l!==null;){var c=l.tag;if((c===3||c===4)&&l.stateNode.containerInfo===i)return;l=l.return}for(;o!==null;){if(l=ni(o),l===null)return;if(c=l.tag,c===5||c===6||c===26||c===27){a=r=l;continue e}o=o.parentNode}}a=a.return}Yg(function(){var d=r,u=Uu(n),m=[];e:{var f=nx.get(e);if(f!==void 0){var x=go,v=e;switch(e){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":x=K2;break;case"focusin":v="focus",x=Qo;break;case"focusout":v="blur",x=Qo;break;case"beforeblur":case"afterblur":x=Qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=O2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Z2;break;case Jg:case Wg:case ex:x=V2;break;case tx:x=J2;break;case"scroll":case"scrollend":x=D2;break;case"wheel":x=e5;break;case"copy":case"cut":case"paste":x=H2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=$m;break;case"toggle":case"beforetoggle":x=n5}var j=(t&4)!==0,T=!j&&(e==="scroll"||e==="scrollend"),g=j?f!==null?f+"Capture":null:f;j=[];for(var p=d,b;p!==null;){var y=p;if(b=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||b===null||g===null||(y=Ys(p,g),y!=null&&j.push(Zs(p,y,b))),T)break;p=p.return}0<j.length&&(f=new x(f,v,null,n,u),m.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&n!==dd&&(v=n.relatedTarget||n.fromElement)&&(ni(v)||v[$i]))break e;if((x||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=d,v=v?ni(v):null,v!==null&&(T=cr(v),j=v.tag,v!==T||j!==5&&j!==27&&j!==6)&&(v=null)):(x=null,v=d),x!==v)){if(j=Gm,y="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(j=$m,y="onPointerLeave",g="onPointerEnter",p="pointer"),T=x==null?f:hs(x),b=v==null?f:hs(v),f=new j(y,p+"leave",x,n,u),f.target=T,f.relatedTarget=b,y=null,ni(u)===d&&(j=new j(g,p+"enter",v,n,u),j.target=b,j.relatedTarget=T,y=j),T=y,x&&v)t:{for(j=tj,g=x,p=v,b=0,y=g;y;y=j(y))b++;y=0;for(var w=p;w;w=j(w))y++;for(;0<b-y;)g=j(g),b--;for(;0<y-b;)p=j(p),y--;for(;b--;){if(g===p||p!==null&&g===p.alternate){j=g;break t}g=j(g),p=j(p)}j=null}else j=null;x!==null&&Bh(m,f,x,j,!1),v!==null&&T!==null&&Bh(m,T,v,j,!0)}}e:{if(f=d?hs(d):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var k=Qm;else if(Fm(f))if(Kg)k=f5;else{k=d5;var N=c5}else x=f.nodeName,!x||x.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?d&&Vu(d.elementType)&&(k=Qm):k=u5;if(k&&(k=k(e,d))){Pg(m,k,n,u);break e}N&&N(e,f,d),e==="focusout"&&d&&f.type==="number"&&d.memoizedProps.value!=null&&cd(f,"number",f.value)}switch(N=d?hs(d):window,e){case"focusin":(Fm(N)||N.contentEditable==="true")&&(si=N,fd=d,Ss=null);break;case"focusout":Ss=fd=si=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,eh(m,n,u);break;case"selectionchange":if(h5)break;case"keydown":case"keyup":eh(m,n,u)}var z;if(qu)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ii?Xg(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Gg&&n.locale!=="ko"&&(ii||C!=="onCompositionStart"?C==="onCompositionEnd"&&ii&&(z=qg()):(qn=u,Hu="value"in qn?qn.value:qn.textContent,ii=!0)),N=$l(d,C),0<N.length&&(C=new Xm(C,e,null,n,u),m.push({event:C,listeners:N}),z?C.data=z:(z=$g(n),z!==null&&(C.data=z)))),(z=i5?s5(e,n):r5(e,n))&&(C=$l(d,"onBeforeInput"),0<C.length&&(N=new Xm("onBeforeInput","beforeinput",null,n,u),m.push({event:N,listeners:C}),N.data=z)),I5(m,e,d,n,u)}Yb(m,t)})}function Zs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $l(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Ys(e,n),i!=null&&a.unshift(Zs(e,i,r)),i=Ys(e,t),i!=null&&a.push(Zs(e,i,r))),e.tag===3)return a;e=e.return}return[]}function tj(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bh(e,t,n,a,i){for(var r=t._reactName,l=[];n!==null&&n!==a;){var o=n,c=o.alternate,d=o.stateNode;if(o=o.tag,c!==null&&c===a)break;o!==5&&o!==26&&o!==27||d===null||(c=d,i?(d=Ys(n,r),d!=null&&l.unshift(Zs(n,d,c))):i||(d=Ys(n,r),d!=null&&l.push(Zs(n,d,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var nj=/\r\n?/g,aj=/\u0000|\uFFFD/g;function Lh(e){return(typeof e=="string"?e:""+e).replace(nj,`
`).replace(aj,"")}function Gb(e,t){return t=Lh(t),Lh(e)===t}function re(e,t,n,a,i,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||zi(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&zi(e,""+a);break;case"className":Rr(e,"class",a);break;case"tabIndex":Rr(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Rr(e,n,a);break;case"style":Hg(e,a,r);break;case"data":if(t!=="object"){Rr(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Wr(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&re(e,t,"name",i.name,i,null),re(e,t,"formEncType",i.formEncType,i,null),re(e,t,"formMethod",i.formMethod,i,null),re(e,t,"formTarget",i.formTarget,i,null)):(re(e,t,"encType",i.encType,i,null),re(e,t,"method",i.method,i,null),re(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Wr(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=pn);break;case"onScroll":a!=null&&Q("scroll",e);break;case"onScrollEnd":a!=null&&Q("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(M(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(M(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Wr(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Q("beforetoggle",e),Q("toggle",e),Jr(e,"popover",a);break;case"xlinkActuate":an(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":an(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":an(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":an(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":an(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":an(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":an(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":an(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":an(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Jr(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=M2.get(n)||n,Jr(e,n,a))}}function Ld(e,t,n,a,i,r){switch(n){case"style":Hg(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(M(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(M(60));e.innerHTML=n}}break;case"children":typeof a=="string"?zi(e,a):(typeof a=="number"||typeof a=="bigint")&&zi(e,""+a);break;case"onScroll":a!=null&&Q("scroll",e);break;case"onScrollEnd":a!=null&&Q("scrollend",e);break;case"onClick":a!=null&&(e.onclick=pn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rg.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),r=e[st]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Jr(e,n,a)}}}function Ge(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",e),Q("load",e);var a=!1,i=!1,r;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(l!=null)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(M(137,t));default:re(e,t,r,l,n,null)}}i&&re(e,t,"srcSet",n.srcSet,n,null),a&&re(e,t,"src",n.src,n,null);return;case"input":Q("invalid",e);var o=r=l=i=null,c=null,d=null;for(a in n)if(n.hasOwnProperty(a)){var u=n[a];if(u!=null)switch(a){case"name":i=u;break;case"type":l=u;break;case"checked":c=u;break;case"defaultChecked":d=u;break;case"value":r=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(M(137,t));break;default:re(e,t,a,u,n,null)}}Lg(e,r,o,c,d,l,i,!1);return;case"select":Q("invalid",e),a=l=r=null;for(i in n)if(n.hasOwnProperty(i)&&(o=n[i],o!=null))switch(i){case"value":r=o;break;case"defaultValue":l=o;break;case"multiple":a=o;default:re(e,t,i,o,n,null)}t=r,n=l,e.multiple=!!a,t!=null?vi(e,!!a,t,!1):n!=null&&vi(e,!!a,n,!0);return;case"textarea":Q("invalid",e),r=i=a=null;for(l in n)if(n.hasOwnProperty(l)&&(o=n[l],o!=null))switch(l){case"value":a=o;break;case"defaultValue":i=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(M(91));break;default:re(e,t,l,o,n,null)}Ug(e,a,i,r);return;case"option":for(c in n)if(n.hasOwnProperty(c)&&(a=n[c],a!=null))switch(c){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:re(e,t,c,a,n,null)}return;case"dialog":Q("beforetoggle",e),Q("toggle",e),Q("cancel",e),Q("close",e);break;case"iframe":case"object":Q("load",e);break;case"video":case"audio":for(a=0;a<Qs.length;a++)Q(Qs[a],e);break;case"image":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"embed":case"source":case"link":Q("error",e),Q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in n)if(n.hasOwnProperty(d)&&(a=n[d],a!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(M(137,t));default:re(e,t,d,a,n,null)}return;default:if(Vu(t)){for(u in n)n.hasOwnProperty(u)&&(a=n[u],a!==void 0&&Ld(e,t,u,a,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(a=n[o],a!=null&&re(e,t,o,a,n,null))}function ij(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,l=null,o=null,c=null,d=null,u=null;for(x in n){var m=n[x];if(n.hasOwnProperty(x)&&m!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":c=m;default:a.hasOwnProperty(x)||re(e,t,x,null,a,m)}}for(var f in a){var x=a[f];if(m=n[f],a.hasOwnProperty(f)&&(x!=null||m!=null))switch(f){case"type":r=x;break;case"name":i=x;break;case"checked":d=x;break;case"defaultChecked":u=x;break;case"value":l=x;break;case"defaultValue":o=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(M(137,t));break;default:x!==m&&re(e,t,f,x,a,m)}}od(e,l,o,c,d,u,r,i);return;case"select":x=l=o=f=null;for(r in n)if(c=n[r],n.hasOwnProperty(r)&&c!=null)switch(r){case"value":break;case"multiple":x=c;default:a.hasOwnProperty(r)||re(e,t,r,null,a,c)}for(i in a)if(r=a[i],c=n[i],a.hasOwnProperty(i)&&(r!=null||c!=null))switch(i){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":l=r;default:r!==c&&re(e,t,i,r,a,c)}t=o,n=l,a=x,f!=null?vi(e,!!n,f,!1):!!a!=!!n&&(t!=null?vi(e,!!n,t,!0):vi(e,!!n,n?[]:"",!1));return;case"textarea":x=f=null;for(o in n)if(i=n[o],n.hasOwnProperty(o)&&i!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:re(e,t,o,null,a,i)}for(l in a)if(i=a[l],r=n[l],a.hasOwnProperty(l)&&(i!=null||r!=null))switch(l){case"value":f=i;break;case"defaultValue":x=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(M(91));break;default:i!==r&&re(e,t,l,i,a,r)}Vg(e,f,x);return;case"option":for(var v in n)if(f=n[v],n.hasOwnProperty(v)&&f!=null&&!a.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:re(e,t,v,null,a,f)}for(c in a)if(f=a[c],x=n[c],a.hasOwnProperty(c)&&f!==x&&(f!=null||x!=null))switch(c){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:re(e,t,c,f,a,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var j in n)f=n[j],n.hasOwnProperty(j)&&f!=null&&!a.hasOwnProperty(j)&&re(e,t,j,null,a,f);for(d in a)if(f=a[d],x=n[d],a.hasOwnProperty(d)&&f!==x&&(f!=null||x!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(M(137,t));break;default:re(e,t,d,f,a,x)}return;default:if(Vu(t)){for(var T in n)f=n[T],n.hasOwnProperty(T)&&f!==void 0&&!a.hasOwnProperty(T)&&Ld(e,t,T,void 0,a,f);for(u in a)f=a[u],x=n[u],!a.hasOwnProperty(u)||f===x||f===void 0&&x===void 0||Ld(e,t,u,f,a,x);return}}for(var g in n)f=n[g],n.hasOwnProperty(g)&&f!=null&&!a.hasOwnProperty(g)&&re(e,t,g,null,a,f);for(m in a)f=a[m],x=n[m],!a.hasOwnProperty(m)||f===x||f==null&&x==null||re(e,t,m,f,a,x)}function Vh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sj(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var i=n[a],r=i.transferSize,l=i.initiatorType,o=i.duration;if(r&&o&&Vh(l)){for(l=0,o=i.responseEnd,a+=1;a<n.length;a++){var c=n[a],d=c.startTime;if(d>o)break;var u=c.transferSize,m=c.initiatorType;u&&Vh(m)&&(c=c.responseEnd,l+=u*(c<o?1:(o-d)/(c-d)))}if(--a,t+=8*(r+l)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vd=null,Ud=null;function Pl(e){return e.nodeType===9?e:e.ownerDocument}function Uh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xb(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Hd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jc=null;function rj(){var e=window.event;return e&&e.type==="popstate"?e===jc?!1:(jc=e,!0):(jc=null,!1)}var $b=typeof setTimeout=="function"?setTimeout:void 0,lj=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,oj=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(e){return Hh.resolve(null).then(e).catch(cj)}:$b;function cj(e){setTimeout(function(){throw e})}function fa(e){return e==="head"}function Yh(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(i),Li(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Ds(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ds(n);for(var r=n.firstChild;r;){var l=r.nextSibling,o=r.nodeName;r[mr]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=l}}else n==="body"&&Ds(e.ownerDocument.body);n=i}while(n);Li(t)}function qh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Yd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Yd(n),Lu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function dj(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[mr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function uj(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Mt(e.nextSibling),e===null))return null;return e}function Pb(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function qd(e){return e.data==="$?"||e.data==="$~"}function Gd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fj(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Xd=null;function Gh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Mt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Xh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Kb(e,t,n){switch(t=Pl(n),e){case"html":if(e=t.documentElement,!e)throw Error(M(452));return e;case"head":if(e=t.head,!e)throw Error(M(453));return e;case"body":if(e=t.body,!e)throw Error(M(454));return e;default:throw Error(M(451))}}function Ds(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lu(e)}var Dt=new Map,$h=new Set;function Kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Cn=ne.d;ne.d={f:mj,r:hj,D:pj,C:gj,L:xj,m:bj,X:vj,S:yj,M:jj};function mj(){var e=Cn.f(),t=To();return e||t}function hj(e){var t=Pi(e);t!==null&&t.tag===5&&t.type==="form"?Hx(t):Cn.r(e)}var Zi=typeof document>"u"?null:document;function Fb(e,t,n){var a=Zi;if(a&&typeof t=="string"&&t){var i=At(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),$h.has(i)||($h.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Ge(t,"link",e),Be(t),a.head.appendChild(t)))}}function pj(e){Cn.D(e),Fb("dns-prefetch",e,null)}function gj(e,t){Cn.C(e,t),Fb("preconnect",e,t)}function xj(e,t,n){Cn.L(e,t,n);var a=Zi;if(a&&e&&t){var i='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+At(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+At(n.imageSizes)+'"]')):i+='[href="'+At(e)+'"]';var r=i;switch(t){case"style":r=Bi(e);break;case"script":r=Ii(e)}Dt.has(r)||(e=ge({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Dt.set(r,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(yr(r))||t==="script"&&a.querySelector(vr(r))||(t=a.createElement("link"),Ge(t,"link",e),Be(t),a.head.appendChild(t)))}}function bj(e,t){Cn.m(e,t);var n=Zi;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+At(a)+'"][href="'+At(e)+'"]',r=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ii(e)}if(!Dt.has(r)&&(e=ge({rel:"modulepreload",href:e},t),Dt.set(r,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(vr(r)))return}a=n.createElement("link"),Ge(a,"link",e),Be(a),n.head.appendChild(a)}}}function yj(e,t,n){Cn.S(e,t,n);var a=Zi;if(a&&e){var i=yi(a).hoistableStyles,r=Bi(e);t=t||"default";var l=i.get(r);if(!l){var o={loading:0,preload:null};if(l=a.querySelector(yr(r)))o.loading=5;else{e=ge({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Dt.get(r))&&Sf(e,n);var c=l=a.createElement("link");Be(c),Ge(c,"link",e),c._p=new Promise(function(d,u){c.onload=d,c.onerror=u}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,cl(l,t,a)}l={type:"stylesheet",instance:l,count:1,state:o},i.set(r,l)}}}function vj(e,t){Cn.X(e,t);var n=Zi;if(n&&e){var a=yi(n).hoistableScripts,i=Ii(e),r=a.get(i);r||(r=n.querySelector(vr(i)),r||(e=ge({src:e,async:!0},t),(t=Dt.get(i))&&kf(e,t),r=n.createElement("script"),Be(r),Ge(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function jj(e,t){Cn.M(e,t);var n=Zi;if(n&&e){var a=yi(n).hoistableScripts,i=Ii(e),r=a.get(i);r||(r=n.querySelector(vr(i)),r||(e=ge({src:e,async:!0,type:"module"},t),(t=Dt.get(i))&&kf(e,t),r=n.createElement("script"),Be(r),Ge(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function Ph(e,t,n,a){var i=(i=Fn.current)?Kl(i):null;if(!i)throw Error(M(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Bi(n.href),n=yi(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Bi(n.href);var r=yi(i).hoistableStyles,l=r.get(e);if(l||(i=i.ownerDocument||i,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=i.querySelector(yr(e)))&&!r._p&&(l.instance=r,l.state.loading=5),Dt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Dt.set(e,n),r||wj(i,e,n,l.state))),t&&a===null)throw Error(M(528,""));return l}if(t&&a!==null)throw Error(M(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ii(n),n=yi(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(M(444,e))}}function Bi(e){return'href="'+At(e)+'"'}function yr(e){return'link[rel="stylesheet"]['+e+"]"}function Qb(e){return ge({},e,{"data-precedence":e.precedence,precedence:null})}function wj(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ge(t,"link",n),Be(t),e.head.appendChild(t))}function Ii(e){return'[src="'+At(e)+'"]'}function vr(e){return"script[async]"+e}function Kh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+At(n.href)+'"]');if(a)return t.instance=a,Be(a),a;var i=ge({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Be(a),Ge(a,"style",i),cl(a,n.precedence,e),t.instance=a;case"stylesheet":i=Bi(n.href);var r=e.querySelector(yr(i));if(r)return t.state.loading|=4,t.instance=r,Be(r),r;a=Qb(n),(i=Dt.get(i))&&Sf(a,i),r=(e.ownerDocument||e).createElement("link"),Be(r);var l=r;return l._p=new Promise(function(o,c){l.onload=o,l.onerror=c}),Ge(r,"link",a),t.state.loading|=4,cl(r,n.precedence,e),t.instance=r;case"script":return r=Ii(n.src),(i=e.querySelector(vr(r)))?(t.instance=i,Be(i),i):(a=n,(i=Dt.get(r))&&(a=ge({},n),kf(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Be(i),Ge(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(M(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(a=t.instance,t.state.loading|=4,cl(a,n.precedence,e));return t.instance}function cl(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,r=i,l=0;l<a.length;l++){var o=a[l];if(o.dataset.precedence===t)r=o;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Sf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function kf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var dl=null;function Fh(e,t,n){if(dl===null){var a=new Map,i=dl=new Map;i.set(n,a)}else i=dl,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var r=n[i];if(!(r[mr]||r[He]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(t)||"";l=e+l;var o=a.get(l);o?o.push(r):a.set(l,[r])}}return a}function Qh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Sj(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zb(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function kj(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var i=Bi(a.href),r=t.querySelector(yr(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Fl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,Be(r);return}r=t.ownerDocument||t,a=Qb(a),(i=Dt.get(i))&&Sf(a,i),r=r.createElement("link"),Be(r);var l=r;l._p=new Promise(function(o,c){l.onload=o,l.onerror=c}),Ge(r,"link",a),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Fl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var wc=0;function Nj(e,t){return e.stylesheets&&e.count===0&&ul(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&ul(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&wc===0&&(wc=62500*sj());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ul(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>wc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Fl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ul(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ql=null;function ul(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ql=new Map,t.forEach(Aj,e),Ql=null,Fl.call(e))}function Aj(e,t){if(!(t.state.loading&4)){var n=Ql.get(e);if(n)var a=n.get(null);else{n=new Map,Ql.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var l=i[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(n.set(l.dataset.precedence,l),a=l)}a&&n.set(null,a)}i=t.instance,l=i.getAttribute("data-precedence"),r=n.get(l)||a,r===a&&n.set(null,i),n.set(l,i),this.count++,a=Fl.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Is={$$typeof:hn,Provider:null,Consumer:null,_currentValue:za,_currentValue2:za,_threadCount:0};function Tj(e,t,n,a,i,r,l,o,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$o(0),this.hiddenUpdates=$o(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Ib(e,t,n,a,i,r,l,o,c,d,u,m){return e=new Tj(e,t,n,l,c,d,u,m,o),t=1,r===!0&&(t|=24),r=dt(3,null,null,t),e.current=r,r.stateNode=e,t=Qu(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},Ju(r),e}function Jb(e){return e?(e=oi,e):oi}function Wb(e,t,n,a,i,r){i=Jb(i),a.context===null?a.context=i:a.pendingContext=i,a=Zn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=In(e,a,t),n!==null&&(it(n,e,t),Ns(n,e,t))}function Zh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nf(e,t){Zh(e,t),(e=e.alternate)&&Zh(e,t)}function ey(e){if(e.tag===13||e.tag===31){var t=Xa(e,67108864);t!==null&&it(t,e,67108864),Nf(e,67108864)}}function Ih(e){if(e.tag===13||e.tag===31){var t=gt();t=Ou(t);var n=Xa(e,t);n!==null&&it(n,e,t),Nf(e,t)}}var Zl=!0;function Cj(e,t,n,a){var i=H.T;H.T=null;var r=ne.p;try{ne.p=2,Af(e,t,n,a)}finally{ne.p=r,H.T=i}}function zj(e,t,n,a){var i=H.T;H.T=null;var r=ne.p;try{ne.p=8,Af(e,t,n,a)}finally{ne.p=r,H.T=i}}function Af(e,t,n,a){if(Zl){var i=$d(a);if(i===null)vc(e,t,a,Il,n),Jh(e,a);else if(Mj(i,e,t,n,a))a.stopPropagation();else if(Jh(e,a),t&4&&-1<Ej.indexOf(e)){for(;i!==null;){var r=Pi(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=ja(r.pendingLanes);if(l!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;l;){var c=1<<31-pt(l);o.entanglements[1]|=c,l&=~c}Jt(r),!(te&6)&&(Hl=mt()+500,br(0))}}break;case 31:case 13:o=Xa(r,2),o!==null&&it(o,r,2),To(),Nf(r,2)}if(r=$d(a),r===null&&vc(e,t,a,Il,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else vc(e,t,a,null,n)}}function $d(e){return e=Uu(e),Tf(e)}var Il=null;function Tf(e){if(Il=null,e=ni(e),e!==null){var t=cr(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=vg(t),e!==null)return e;e=null}else if(n===31){if(e=jg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Il=e,null}function ty(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(p2()){case Ng:return 2;case Ag:return 8;case Al:case g2:return 32;case Tg:return 268435456;default:return 32}default:return 32}}var Pd=!1,ea=null,ta=null,na=null,Js=new Map,Ws=new Map,Hn=[],Ej="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jh(e,t){switch(e){case"focusin":case"focusout":ea=null;break;case"dragenter":case"dragleave":ta=null;break;case"mouseover":case"mouseout":na=null;break;case"pointerover":case"pointerout":Js.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(t.pointerId)}}function cs(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=Pi(t),t!==null&&ey(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Mj(e,t,n,a,i){switch(t){case"focusin":return ea=cs(ea,e,t,n,a,i),!0;case"dragenter":return ta=cs(ta,e,t,n,a,i),!0;case"mouseover":return na=cs(na,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return Js.set(r,cs(Js.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,Ws.set(r,cs(Ws.get(r)||null,e,t,n,a,i)),!0}return!1}function ny(e){var t=ni(e.target);if(t!==null){var n=cr(t);if(n!==null){if(t=n.tag,t===13){if(t=vg(n),t!==null){e.blockedOn=t,Bm(e.priority,function(){Ih(n)});return}}else if(t===31){if(t=jg(n),t!==null){e.blockedOn=t,Bm(e.priority,function(){Ih(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$d(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);dd=a,n.target.dispatchEvent(a),dd=null}else return t=Pi(n),t!==null&&ey(t),e.blockedOn=n,!1;t.shift()}return!0}function Wh(e,t,n){fl(e)&&n.delete(t)}function _j(){Pd=!1,ea!==null&&fl(ea)&&(ea=null),ta!==null&&fl(ta)&&(ta=null),na!==null&&fl(na)&&(na=null),Js.forEach(Wh),Ws.forEach(Wh)}function qr(e,t){e.blockedOn===t&&(e.blockedOn=null,Pd||(Pd=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,_j)))}var Gr=null;function e0(e){Gr!==e&&(Gr=e,De.unstable_scheduleCallback(De.unstable_NormalPriority,function(){Gr===e&&(Gr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(Tf(a||n)===null)continue;break}var r=Pi(n);r!==null&&(e.splice(t,3),t-=3,Ad(r,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function Li(e){function t(c){return qr(c,e)}ea!==null&&qr(ea,e),ta!==null&&qr(ta,e),na!==null&&qr(na,e),Js.forEach(t),Ws.forEach(t);for(var n=0;n<Hn.length;n++){var a=Hn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)ny(n),n.blockedOn===null&&Hn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],r=n[a+1],l=i[st]||null;if(typeof r=="function")l||e0(n);else if(l){var o=null;if(r&&r.hasAttribute("formAction")){if(i=r,l=r[st]||null)o=l.formAction;else if(Tf(i)!==null)continue}else o=l.action;typeof o=="function"?n[a+1]=o:(n.splice(a,3),a-=3),e0(n)}}}function ay(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(l){return i=l})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Cf(e){this._internalRoot=e}Eo.prototype.render=Cf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));var n=t.current,a=gt();Wb(n,a,e,t,null,null)};Eo.prototype.unmount=Cf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wb(e.current,2,null,e,null,null),To(),t[$i]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=_g();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Hn.length&&t!==0&&t<Hn[n].priority;n++);Hn.splice(n,0,e),n===0&&ny(e)}};var t0=bg.version;if(t0!=="19.2.3")throw Error(M(527,t0,"19.2.3"));ne.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=o2(t),e=e!==null?wg(e):null,e=e===null?null:e.stateNode,e};var Dj={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{dr=Xr.inject(Dj),ht=Xr}catch{}}mo.createRoot=function(e,t){if(!yg(e))throw Error(M(299));var n=!1,a="",i=Fx,r=Qx,l=Zx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ib(e,1,!1,null,null,n,a,null,i,r,l,ay),e[$i]=t.current,wf(e),new Cf(t)};mo.hydrateRoot=function(e,t,n){if(!yg(e))throw Error(M(299));var a=!1,i="",r=Fx,l=Qx,o=Zx,c=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),t=Ib(e,1,!0,t,n??null,a,i,c,r,l,o,ay),t.context=Jb(null),n=t.current,a=gt(),a=Ou(a),i=Zn(a),i.callback=null,In(n,i,a),n=a,t.current.lanes=n,fr(t,n),Jt(t),e[$i]=t.current,wf(e),new Eo(t)};mo.version="19.2.3";function iy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iy)}catch(e){console.error(e)}}iy(),fg.exports=mo;var Rj=fg.exports,$e=function(){return $e=Object.assign||function(t){for(var n,a=1,i=arguments.length;a<i;a++){n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$e.apply(this,arguments)};function Vi(e,t,n){if(n||arguments.length===2)for(var a=0,i=t.length,r;a<i;a++)(r||!(a in t))&&(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}var fe="-ms-",Rs="-moz-",ee="-webkit-",sy="comm",Mo="rule",zf="decl",Oj="@import",Bj="@namespace",ry="@keyframes",Lj="@layer",ly=Math.abs,Ef=String.fromCharCode,Kd=Object.assign;function Vj(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function oy(e){return e.trim()}function un(e,t){return(e=t.exec(e))?e[0]:e}function P(e,t,n){return e.replace(t,n)}function ml(e,t,n){return e.indexOf(t,n)}function Me(e,t){return e.charCodeAt(t)|0}function Ha(e,t,n){return e.slice(t,n)}function Ht(e){return e.length}function cy(e){return e.length}function xs(e,t){return t.push(e),e}function Uj(e,t){return e.map(t).join("")}function n0(e,t){return e.filter(function(n){return!un(n,t)})}var _o=1,Ui=1,dy=0,Rt=0,Ce=0,Ji="";function Do(e,t,n,a,i,r,l,o){return{value:e,root:t,parent:n,type:a,props:i,children:r,line:_o,column:Ui,length:l,return:"",siblings:o}}function Dn(e,t){return Kd(Do("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Za(e){for(;e.root;)e=Dn(e.root,{children:[e]});xs(e,e.siblings)}function Hj(){return Ce}function Yj(){return Ce=Rt>0?Me(Ji,--Rt):0,Ui--,Ce===10&&(Ui=1,_o--),Ce}function Yt(){return Ce=Rt<dy?Me(Ji,Rt++):0,Ui++,Ce===10&&(Ui=1,_o++),Ce}function Pn(){return Me(Ji,Rt)}function hl(){return Rt}function Ro(e,t){return Ha(Ji,e,t)}function er(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qj(e){return _o=Ui=1,dy=Ht(Ji=e),Rt=0,[]}function Gj(e){return Ji="",e}function Sc(e){return oy(Ro(Rt-1,Fd(e===91?e+2:e===40?e+1:e)))}function Xj(e){for(;(Ce=Pn())&&Ce<33;)Yt();return er(e)>2||er(Ce)>3?"":" "}function $j(e,t){for(;--t&&Yt()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return Ro(e,hl()+(t<6&&Pn()==32&&Yt()==32))}function Fd(e){for(;Yt();)switch(Ce){case e:return Rt;case 34:case 39:e!==34&&e!==39&&Fd(Ce);break;case 40:e===41&&Fd(e);break;case 92:Yt();break}return Rt}function Pj(e,t){for(;Yt()&&e+Ce!==57;)if(e+Ce===84&&Pn()===47)break;return"/*"+Ro(t,Rt-1)+"*"+Ef(e===47?e:Yt())}function Kj(e){for(;!er(Pn());)Yt();return Ro(e,Rt)}function Fj(e){return Gj(pl("",null,null,null,[""],e=qj(e),0,[0],e))}function pl(e,t,n,a,i,r,l,o,c){for(var d=0,u=0,m=l,f=0,x=0,v=0,j=1,T=1,g=1,p=0,b="",y=i,w=r,k=a,N=b;T;)switch(v=p,p=Yt()){case 40:if(v!=108&&Me(N,m-1)==58){ml(N+=P(Sc(p),"&","&\f"),"&\f",ly(d?o[d-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:N+=Sc(p);break;case 9:case 10:case 13:case 32:N+=Xj(v);break;case 92:N+=$j(hl()-1,7);continue;case 47:switch(Pn()){case 42:case 47:xs(Qj(Pj(Yt(),hl()),t,n,c),c),(er(v||1)==5||er(Pn()||1)==5)&&Ht(N)&&Ha(N,-1,void 0)!==" "&&(N+=" ");break;default:N+="/"}break;case 123*j:o[d++]=Ht(N)*g;case 125*j:case 59:case 0:switch(p){case 0:case 125:T=0;case 59+u:g==-1&&(N=P(N,/\f/g,"")),x>0&&(Ht(N)-m||j===0&&v===47)&&xs(x>32?i0(N+";",a,n,m-1,c):i0(P(N," ","")+";",a,n,m-2,c),c);break;case 59:N+=";";default:if(xs(k=a0(N,t,n,d,u,i,o,b,y=[],w=[],m,r),r),p===123)if(u===0)pl(N,t,k,k,y,r,m,o,w);else{switch(f){case 99:if(Me(N,3)===110)break;case 108:if(Me(N,2)===97)break;default:u=0;case 100:case 109:case 115:}u?pl(e,k,k,a&&xs(a0(e,k,k,0,0,i,o,b,i,y=[],m,w),w),i,w,m,o,a?y:w):pl(N,k,k,k,[""],w,0,o,w)}}d=u=x=0,j=g=1,b=N="",m=l;break;case 58:m=1+Ht(N),x=v;default:if(j<1){if(p==123)--j;else if(p==125&&j++==0&&Yj()==125)continue}switch(N+=Ef(p),p*j){case 38:g=u>0?1:(N+="\f",-1);break;case 44:o[d++]=(Ht(N)-1)*g,g=1;break;case 64:Pn()===45&&(N+=Sc(Yt())),f=Pn(),u=m=Ht(b=N+=Kj(hl())),p++;break;case 45:v===45&&Ht(N)==2&&(j=0)}}return r}function a0(e,t,n,a,i,r,l,o,c,d,u,m){for(var f=i-1,x=i===0?r:[""],v=cy(x),j=0,T=0,g=0;j<a;++j)for(var p=0,b=Ha(e,f+1,f=ly(T=l[j])),y=e;p<v;++p)(y=oy(T>0?x[p]+" "+b:P(b,/&\f/g,x[p])))&&(c[g++]=y);return Do(e,t,n,i===0?Mo:o,c,d,u,m)}function Qj(e,t,n,a){return Do(e,t,n,sy,Ef(Hj()),Ha(e,2,-2),0,a)}function i0(e,t,n,a,i){return Do(e,t,n,zf,Ha(e,0,a),Ha(e,a+1,-1),a,i)}function uy(e,t,n){switch(Vj(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ee+e+e;case 4855:return ee+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Rs+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Rs+e+fe+e+e;case 5936:switch(Me(e,t+11)){case 114:return ee+e+fe+P(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+fe+P(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+fe+P(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+fe+e+e;case 6165:return ee+e+fe+"flex-"+e+e;case 5187:return ee+e+P(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return ee+e+fe+"flex-item-"+P(e,/flex-|-self/g,"")+(un(e,/flex-|baseline/)?"":fe+"grid-row-"+P(e,/flex-|-self/g,""))+e;case 4675:return ee+e+fe+"flex-line-pack"+P(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+fe+P(e,"shrink","negative")+e;case 5292:return ee+e+fe+P(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+P(e,"-grow","")+ee+e+fe+P(e,"grow","positive")+e;case 4554:return ee+P(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return P(P(P(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return P(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return P(P(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+fe+"flex-pack:$3"),/space-between/,"justify")+ee+e+e;case 4200:if(!un(e,/flex-|baseline/))return fe+"grid-column-align"+Ha(e,t)+e;break;case 2592:case 3360:return fe+P(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(a,i){return t=i,un(a.props,/grid-\w+-end/)})?~ml(e+(n=n[t].value),"span",0)?e:fe+P(e,"-start","")+e+fe+"grid-row-span:"+(~ml(n,"span",0)?un(n,/\d+/):+un(n,/\d+/)-+un(e,/\d+/))+";":fe+P(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(a){return un(a.props,/grid-\w+-start/)})?e:fe+P(P(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return P(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ht(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return P(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Rs+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ml(e,"stretch",0)?uy(P(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return P(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,i,r,l,o,c,d){return fe+i+":"+r+d+(l?fe+i+"-span:"+(o?c:+c-+r)+d:"")+e});case 4949:if(Me(e,t+6)===121)return P(e,":",":"+ee)+e;break;case 6444:switch(Me(e,Me(e,14)===45?18:11)){case 120:return P(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Me(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+fe+"$2box$3")+e;case 100:return P(e,":",":"+fe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return P(e,"scroll-","scroll-snap-")+e}return e}function Jl(e,t){for(var n="",a=0;a<e.length;a++)n+=t(e[a],a,e,t)||"";return n}function Zj(e,t,n,a){switch(e.type){case Lj:if(e.children.length)break;case Oj:case Bj:case zf:return e.return=e.return||e.value;case sy:return"";case ry:return e.return=e.value+"{"+Jl(e.children,a)+"}";case Mo:if(!Ht(e.value=e.props.join(",")))return""}return Ht(n=Jl(e.children,a))?e.return=e.value+"{"+n+"}":""}function Ij(e){var t=cy(e);return function(n,a,i,r){for(var l="",o=0;o<t;o++)l+=e[o](n,a,i,r)||"";return l}}function Jj(e){return function(t){t.root||(t=t.return)&&e(t)}}function Wj(e,t,n,a){if(e.length>-1&&!e.return)switch(e.type){case zf:e.return=uy(e.value,e.length,n);return;case ry:return Jl([Dn(e,{value:P(e.value,"@","@"+ee)})],a);case Mo:if(e.length)return Uj(n=e.props,function(i){switch(un(i,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Za(Dn(e,{props:[P(i,/:(read-\w+)/,":"+Rs+"$1")]})),Za(Dn(e,{props:[i]})),Kd(e,{props:n0(n,a)});break;case"::placeholder":Za(Dn(e,{props:[P(i,/:(plac\w+)/,":"+ee+"input-$1")]})),Za(Dn(e,{props:[P(i,/:(plac\w+)/,":"+Rs+"$1")]})),Za(Dn(e,{props:[P(i,/:(plac\w+)/,fe+"input-$1")]})),Za(Dn(e,{props:[i]})),Kd(e,{props:n0(n,a)});break}return""})}}var ew={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},lt={},Hi=typeof process<"u"&&lt!==void 0&&(lt.REACT_APP_SC_ATTR||lt.SC_ATTR)||"data-styled",fy="active",my="data-styled-version",Oo="6.3.8",Mf=`/*!sc*/
`,Wl=typeof window<"u"&&typeof document<"u",vn=Fe.createContext===void 0,tw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&lt!==void 0&&lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&lt.REACT_APP_SC_DISABLE_SPEEDY!==""?lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&lt!==void 0&&lt.SC_DISABLE_SPEEDY!==void 0&&lt.SC_DISABLE_SPEEDY!==""&&lt.SC_DISABLE_SPEEDY!=="false"&&lt.SC_DISABLE_SPEEDY),nw={},Bo=Object.freeze([]),Yi=Object.freeze({});function hy(e,t,n){return n===void 0&&(n=Yi),e.theme!==n.theme&&e.theme||t||n.theme}var py=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),aw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,iw=/(^-|-$)/g;function s0(e){return e.replace(aw,"-").replace(iw,"")}var sw=/(a)(d)/gi,r0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Qd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=r0(t%52)+n;return(r0(t%52)+n).replace(sw,"$1-$2")}var kc,fi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},gy=function(e){return fi(5381,e)};function _f(e){return Qd(gy(e)>>>0)}function rw(e){return e.displayName||e.name||"Component"}function Nc(e){return typeof e=="string"&&!0}var xy=typeof Symbol=="function"&&Symbol.for,by=xy?Symbol.for("react.memo"):60115,lw=xy?Symbol.for("react.forward_ref"):60112,ow={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dw=((kc={})[lw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kc[by]=yy,kc);function l0(e){return("type"in(t=e)&&t.type.$$typeof)===by?yy:"$$typeof"in e?dw[e.$$typeof]:ow;var t}var uw=Object.defineProperty,fw=Object.getOwnPropertyNames,o0=Object.getOwnPropertySymbols,mw=Object.getOwnPropertyDescriptor,hw=Object.getPrototypeOf,c0=Object.prototype;function vy(e,t,n){if(typeof t!="string"){if(c0){var a=hw(t);a&&a!==c0&&vy(e,a,n)}var i=fw(t);o0&&(i=i.concat(o0(t)));for(var r=l0(e),l=l0(t),o=0;o<i.length;++o){var c=i[o];if(!(c in cw||n&&n[c]||l&&c in l||r&&c in r)){var d=mw(t,c);try{uw(e,c,d)}catch{}}}}return e}function qi(e){return typeof e=="function"}function Df(e){return typeof e=="object"&&"styledComponentId"in e}function Na(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eo(e,t){if(e.length===0)return"";for(var n=e[0],a=1;a<e.length;a++)n+=e[a];return n}function tr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Zd(e,t,n){if(n===void 0&&(n=!1),!n&&!tr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)e[a]=Zd(e[a],t[a]);else if(tr(t))for(var a in t)e[a]=Zd(e[a],t[a]);return e}function Rf(e,t){Object.defineProperty(e,"toString",{value:t})}function jr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var pw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,a=0;a<t;a++)n+=this.groupSizes[a];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var a=this.groupSizes,i=a.length,r=i;t>=r;)if((r<<=1)<0)throw jr(16,"".concat(t));this.groupSizes=new Uint32Array(r),this.groupSizes.set(a),this.length=r;for(var l=i;l<r;l++)this.groupSizes[l]=0}for(var o=this.indexOfGroup(t+1),c=(l=0,n.length);l<c;l++)this.tag.insertRule(o,n[l])&&(this.groupSizes[t]++,o++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],a=this.indexOfGroup(t),i=a+n;this.groupSizes[t]=0;for(var r=a;r<i;r++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var a=this.groupSizes[t],i=this.indexOfGroup(t),r=i+a,l=i;l<r;l++)n+="".concat(this.tag.getRule(l)).concat(Mf);return n},e}(),gl=new Map,to=new Map,xl=1,mi=function(e){if(gl.has(e))return gl.get(e);for(;to.has(xl);)xl++;var t=xl++;return gl.set(e,t),to.set(t,e),t},gw=function(e,t){xl=t+1,gl.set(e,t),to.set(t,e)},xw="style[".concat(Hi,"][").concat(my,'="').concat(Oo,'"]'),bw=new RegExp("^".concat(Hi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yw=function(e,t,n){for(var a,i=n.split(","),r=0,l=i.length;r<l;r++)(a=i[r])&&e.registerName(t,a)},vw=function(e,t){for(var n,a=((n=t.textContent)!==null&&n!==void 0?n:"").split(Mf),i=[],r=0,l=a.length;r<l;r++){var o=a[r].trim();if(o){var c=o.match(bw);if(c){var d=0|parseInt(c[1],10),u=c[2];d!==0&&(gw(u,d),yw(e,u,c[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(o)}}},d0=function(e){for(var t=document.querySelectorAll(xw),n=0,a=t.length;n<a;n++){var i=t[n];i&&i.getAttribute(Hi)!==fy&&(vw(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function jw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jy=function(e){var t=document.head,n=e||t,a=document.createElement("style"),i=function(o){var c=Array.from(o.querySelectorAll("style[".concat(Hi,"]")));return c[c.length-1]}(n),r=i!==void 0?i.nextSibling:null;a.setAttribute(Hi,fy),a.setAttribute(my,Oo);var l=jw();return l&&a.setAttribute("nonce",l),n.insertBefore(a,r),a},ww=function(){function e(t){this.element=jy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var a=document.styleSheets,i=0,r=a.length;i<r;i++){var l=a[i];if(l.ownerNode===n)return l}throw jr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Sw=function(){function e(t){this.element=jy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var a=document.createTextNode(n);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),kw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),u0=Wl,Nw={isServer:!Wl,useCSSOMInjection:!tw},no=function(){function e(t,n,a){t===void 0&&(t=Yi),n===void 0&&(n={});var i=this;this.options=$e($e({},Nw),t),this.gs=n,this.names=new Map(a),this.server=!!t.isServer,!this.server&&Wl&&u0&&(u0=!1,d0(this)),Rf(this,function(){return function(r){for(var l=r.getTag(),o=l.length,c="",d=function(m){var f=function(g){return to.get(g)}(m);if(f===void 0)return"continue";var x=r.names.get(f),v=l.getGroup(m);if(x===void 0||!x.size||v.length===0)return"continue";var j="".concat(Hi,".g").concat(m,'[id="').concat(f,'"]'),T="";x!==void 0&&x.forEach(function(g){g.length>0&&(T+="".concat(g,","))}),c+="".concat(v).concat(j,'{content:"').concat(T,'"}').concat(Mf)},u=0;u<o;u++)d(u);return c}(i)})}return e.registerId=function(t){return mi(t)},e.prototype.rehydrate=function(){!this.server&&Wl&&d0(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e($e($e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var a=n.useCSSOMInjection,i=n.target;return n.isServer?new kw(i):a?new ww(i):new Sw(i)}(this.options),new pw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(mi(t),this.names.has(t))this.names.get(t).add(n);else{var a=new Set;a.add(n),this.names.set(t,a)}},e.prototype.insertRules=function(t,n,a){this.registerName(t,n),this.getTag().insertRules(mi(t),a)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(mi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Aw=/&/g,hi=47;function f0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,a=0,i=!1,r=0;r<t;r++){var l=e.charCodeAt(r);if(a!==0||i||l!==hi||e.charCodeAt(r+1)!==42)if(i)l===42&&e.charCodeAt(r+1)===hi&&(i=!1,r++);else if(l!==34&&l!==39||r!==0&&e.charCodeAt(r-1)===92){if(a===0){if(l===123)n++;else if(l===125&&--n<0)return!0}}else a===0?a=l:a===l&&(a=0);else i=!0,r++}return n!==0||a!==0}function wy(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wy(n.children,t)),n})}function Tw(e){var t,n,a,i=Yi,r=i.options,l=r===void 0?Yi:r,o=i.plugins,c=o===void 0?Bo:o,d=function(f,x,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},u=c.slice();u.push(function(f){f.type===Mo&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Aw,n).replace(a,d))}),l.prefix&&u.push(Wj),u.push(Zj);var m=function(f,x,v,j){x===void 0&&(x=""),v===void 0&&(v=""),j===void 0&&(j="&"),t=j,n=x,a=new RegExp("\\".concat(n,"\\b"),"g");var T=function(b){if(!f0(b))return b;for(var y=b.length,w="",k=0,N=0,z=0,C=!1,_=0;_<y;_++){var R=b.charCodeAt(_);if(z!==0||C||R!==hi||b.charCodeAt(_+1)!==42)if(C)R===42&&b.charCodeAt(_+1)===hi&&(C=!1,_++);else if(R!==34&&R!==39||_!==0&&b.charCodeAt(_-1)===92){if(z===0)if(R===123)N++;else if(R===125){if(--N<0){for(var E=_+1;E<y;){var K=b.charCodeAt(E);if(K===59||K===10)break;E++}E<y&&b.charCodeAt(E)===59&&E++,N=0,_=E-1,k=E;continue}N===0&&(w+=b.substring(k,_+1),k=_+1)}else R===59&&N===0&&(w+=b.substring(k,_+1),k=_+1)}else z===0?z=R:z===R&&(z=0);else C=!0,_++}if(k<y){var ce=b.substring(k);f0(ce)||(w+=ce)}return w}(function(b){if(b.indexOf("//")===-1)return b;for(var y=b.length,w=[],k=0,N=0,z=0,C=0;N<y;){var _=b.charCodeAt(N);if(_!==34&&_!==39||N!==0&&b.charCodeAt(N-1)===92)if(z===0)if(_===40&&N>=3&&(32|b.charCodeAt(N-1))==108&&(32|b.charCodeAt(N-2))==114&&(32|b.charCodeAt(N-3))==117)C=1,N++;else if(C>0)_===41?C--:_===40&&C++,N++;else if(_===hi&&N+1<y&&b.charCodeAt(N+1)===hi){for(N>k&&w.push(b.substring(k,N));N<y&&b.charCodeAt(N)!==10;)N++;k=N}else N++;else N++;else z===0?z=_:z===_&&(z=0),N++}return k===0?b:(k<y&&w.push(b.substring(k)),w.join(""))}(f)),g=Fj(v||x?"".concat(v," ").concat(x," { ").concat(T," }"):T);l.namespace&&(g=wy(g,l.namespace));var p=[];return Jl(g,Ij(u.concat(Jj(function(b){return p.push(b)})))),p};return m.hash=c.length?c.reduce(function(f,x){return x.name||jr(15),fi(f,x.name)},5381).toString():"",m}var Cw=new no,Id=Tw(),Jd={shouldForwardProp:void 0,styleSheet:Cw,stylis:Id},Sy=vn?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(Jd)}}:Fe.createContext(Jd);Sy.Consumer;vn||Fe.createContext(void 0);function Wd(){return vn?Jd:Fe.useContext(Sy)}var ky=function(){function e(t,n){var a=this;this.inject=function(i,r){r===void 0&&(r=Id);var l=a.name+r.hash;i.hasNameForId(a.id,l)||i.insertRules(a.id,l,r(a.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Rf(this,function(){throw jr(12,String(a.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Id),this.name+t.hash},e}();function zw(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in ew||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Ew=function(e){return e>="A"&&e<="Z"};function m0(e){for(var t="",n=0;n<e.length;n++){var a=e[n];if(n===1&&a==="-"&&e[0]==="-")return e;Ew(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var Ny=function(e){return e==null||e===!1||e===""},Ay=function(e){var t=[];for(var n in e){var a=e[n];e.hasOwnProperty(n)&&!Ny(a)&&(Array.isArray(a)&&a.isCss||qi(a)?t.push("".concat(m0(n),":"),a,";"):tr(a)?t.push.apply(t,Vi(Vi(["".concat(n," {")],Ay(a),!1),["}"],!1)):t.push("".concat(m0(n),": ").concat(zw(n,a),";")))}return t};function aa(e,t,n,a){if(Ny(e))return[];if(Df(e))return[".".concat(e.styledComponentId)];if(qi(e)){if(!qi(r=e)||r.prototype&&r.prototype.isReactComponent||!t)return[e];var i=e(t);return aa(i,t,n,a)}var r;return e instanceof ky?n?(e.inject(n,a),[e.getName(a)]):[e]:tr(e)?Ay(e):Array.isArray(e)?Array.prototype.concat.apply(Bo,e.map(function(l){return aa(l,t,n,a)})):[e.toString()]}function Ty(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(qi(n)&&!Df(n))return!1}return!0}var Mw=gy(Oo),_w=function(){function e(t,n,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&Ty(t),this.componentId=n,this.baseHash=fi(Mw,n),this.baseStyle=a,no.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,a){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,a).className:"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Na(i,this.staticRulesId);else{var r=eo(aa(this.rules,t,n,a)),l=Qd(fi(this.baseHash,r)>>>0);if(!n.hasNameForId(this.componentId,l)){var o=a(r,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,o)}i=Na(i,l),this.staticRulesId=l}else{for(var c=fi(this.baseHash,a.hash),d="",u=0;u<this.rules.length;u++){var m=this.rules[u];if(typeof m=="string")d+=m;else if(m){var f=eo(aa(m,t,n,a));c=fi(c,f+u),d+=f}}if(d){var x=Qd(c>>>0);if(!n.hasNameForId(this.componentId,x)){var v=a(d,".".concat(x),void 0,this.componentId);n.insertRules(this.componentId,x,v)}i=Na(i,x)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(mi(this.componentId)):""}},e}(),Of=vn?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:Fe.createContext(void 0);Of.Consumer;var Ac={};function Dw(e,t,n){var a=Df(e),i=e,r=!Nc(e),l=t.attrs,o=l===void 0?Bo:l,c=t.componentId,d=c===void 0?function(y,w){var k=typeof y!="string"?"sc":s0(y);Ac[k]=(Ac[k]||0)+1;var N="".concat(k,"-").concat(_f(Oo+k+Ac[k]));return w?"".concat(w,"-").concat(N):N}(t.displayName,t.parentComponentId):c,u=t.displayName,m=u===void 0?function(y){return Nc(y)?"styled.".concat(y):"Styled(".concat(rw(y),")")}(e):u,f=t.displayName&&t.componentId?"".concat(s0(t.displayName),"-").concat(t.componentId):t.componentId||d,x=a&&i.attrs?i.attrs.concat(o).filter(Boolean):o,v=t.shouldForwardProp;if(a&&i.shouldForwardProp){var j=i.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;v=function(y,w){return j(y,w)&&T(y,w)}}else v=j}var g=new _w(n,f,a?i.componentStyle:void 0);function p(y,w){return function(k,N,z){var C=k.attrs,_=k.componentStyle,R=k.defaultProps,E=k.foldedComponentIds,K=k.styledComponentId,ce=k.target,V=vn?void 0:Fe.useContext(Of),O=Wd(),B=k.shouldForwardProp||O.shouldForwardProp,L=hy(N,V,R)||Yi,q=function(I,yt,Pa){for(var en,Ot=$e($e({},yt),{className:void 0,theme:Pa}),ha=0;ha<I.length;ha+=1){var Ka=qi(en=I[ha])?en(Ot):en;for(var tn in Ka)tn==="className"?Ot.className=Na(Ot.className,Ka[tn]):tn==="style"?Ot.style=$e($e({},Ot.style),Ka[tn]):Ot[tn]=Ka[tn]}return"className"in yt&&typeof yt.className=="string"&&(Ot.className=Na(Ot.className,yt.className)),Ot}(C,N,L),F=q.as||ce,Re={};for(var Xe in q)q[Xe]===void 0||Xe[0]==="$"||Xe==="as"||Xe==="theme"&&q.theme===L||(Xe==="forwardedAs"?Re.as=q.forwardedAs:B&&!B(Xe,F)||(Re[Xe]=q[Xe]));var Wt=function(I,yt){var Pa=Wd(),en=I.generateAndInjectStyles(yt,Pa.styleSheet,Pa.stylis);return en}(_,q),We=Wt.className,Gt=Wt.css,D=Na(E,K);We&&(D+=" "+We),q.className&&(D+=" "+q.className),Re[Nc(F)&&!py.has(F)?"class":"className"]=D,z&&(Re.ref=z);var ae=A.createElement(F,Re);return vn&&Gt?Fe.createElement(Fe.Fragment,null,Fe.createElement("style",{precedence:"styled-components",href:"sc-".concat(K,"-").concat(We),children:Gt}),ae):ae}(b,y,w)}p.displayName=m;var b=Fe.forwardRef(p);return b.attrs=x,b.componentStyle=g,b.displayName=m,b.shouldForwardProp=v,b.foldedComponentIds=a?Na(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=f,b.target=a?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=a?function(w){for(var k=[],N=1;N<arguments.length;N++)k[N-1]=arguments[N];for(var z=0,C=k;z<C.length;z++)Zd(w,C[z],!0);return w}({},i.defaultProps,y):y}}),Rf(b,function(){return".".concat(b.styledComponentId)}),r&&vy(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function h0(e,t){for(var n=[e[0]],a=0,i=t.length;a<i;a+=1)n.push(t[a],e[a+1]);return n}var p0=function(e){return Object.assign(e,{isCss:!0})};function Bf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(qi(e)||tr(e))return p0(aa(h0(Bo,Vi([e],t,!0))));var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?aa(a):p0(aa(h0(a,t)))}function eu(e,t,n){if(n===void 0&&(n=Yi),!t)throw jr(1,t);var a=function(i){for(var r=[],l=1;l<arguments.length;l++)r[l-1]=arguments[l];return e(t,n,Bf.apply(void 0,Vi([i],r,!1)))};return a.attrs=function(i){return eu(e,t,$e($e({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},a.withConfig=function(i){return eu(e,t,$e($e({},n),i))},a}var Cy=function(e){return eu(Dw,e)},h=Cy;py.forEach(function(e){h[e]=Cy(e)});var Rw=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ty(t),no.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,a,i){var r=i(eo(aa(this.rules,n,a,i)),""),l=this.componentId+t;a.insertRules(l,l,r)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,a,i){t>2&&no.registerId(this.componentId+t);var r=this.componentId+t;this.isStatic?a.hasNameForId(r,r)||this.createStyles(t,n,a,i):(this.removeStyles(t,a),this.createStyles(t,n,a,i))},e}();function Ow(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=Bf.apply(void 0,Vi([e],t,!1)),i="sc-global-".concat(_f(JSON.stringify(a))),r=new Rw(a,i),l=new WeakMap,o=function(c){var d=Wd(),u=vn?void 0:Fe.useContext(Of),m=l.get(d.styleSheet);if(m===void 0&&(m=d.styleSheet.allocateGSInstance(i),l.set(d.styleSheet,m)),(typeof window>"u"||!d.styleSheet.server)&&function(T,g,p,b,y){if(r.isStatic)r.renderStyles(T,nw,p,y);else{var w=$e($e({},g),{theme:hy(g,b,o.defaultProps)});r.renderStyles(T,w,p,y)}}(m,c,d.styleSheet,u,d.stylis),!vn){var f=Fe.useRef(!0);Fe.useLayoutEffect(function(){return f.current=!1,function(){f.current=!0,queueMicrotask(function(){f.current&&(r.removeStyles(m,d.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(T){return T.remove()}))})}},[m,d.styleSheet])}if(vn){var x=i+m,v=typeof window>"u"?d.styleSheet.getTag().getGroup(mi(x)):"";if(v){var j="".concat(i,"-").concat(m);return Fe.createElement("style",{key:j,"data-styled-global":i,precedence:"styled-components",href:j,children:v})}}return null};return Fe.memo(o)}function Lf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=eo(Bf.apply(void 0,Vi([e],t,!1))),i=_f(a);return new ky(i,a)}const zy=A.createContext({});function Bw(e){const t=A.useRef(null);return t.current===null&&(t.current=e()),t.current}const Ey=typeof window<"u",Lw=Ey?A.useLayoutEffect:A.useEffect,Vf=A.createContext(null);function Uf(e,t){e.indexOf(t)===-1&&e.push(t)}function Hf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Zt=(e,t,n)=>n>t?t:n<e?e:n;let Yf=()=>{};const Tn={},My=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function _y(e){return typeof e=="object"&&e!==null}const Dy=e=>/^0[^.\s]+$/u.test(e);function qf(e){let t;return()=>(t===void 0&&(t=e()),t)}const _t=e=>e,Vw=(e,t)=>n=>t(e(n)),wr=(...e)=>e.reduce(Vw),nr=(e,t,n)=>{const a=t-e;return a===0?1:(n-e)/a};class Gf{constructor(){this.subscriptions=[]}add(t){return Uf(this.subscriptions,t),()=>Hf(this.subscriptions,t)}notify(t,n,a){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,a);else for(let r=0;r<i;r++){const l=this.subscriptions[r];l&&l(t,n,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jn=e=>e*1e3,zt=e=>e/1e3;function Ry(e,t){return t?e*(1e3/t):0}const Oy=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Uw=1e-7,Hw=12;function Yw(e,t,n,a,i){let r,l,o=0;do l=t+(n-t)/2,r=Oy(l,a,i)-e,r>0?n=l:t=l;while(Math.abs(r)>Uw&&++o<Hw);return l}function Sr(e,t,n,a){if(e===t&&n===a)return _t;const i=r=>Yw(r,0,1,e,n);return r=>r===0||r===1?r:Oy(i(r),t,a)}const By=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ly=e=>t=>1-e(1-t),Vy=Sr(.33,1.53,.69,.99),Xf=Ly(Vy),Uy=By(Xf),Hy=e=>(e*=2)<1?.5*Xf(e):.5*(2-Math.pow(2,-10*(e-1))),$f=e=>1-Math.sin(Math.acos(e)),Yy=Ly($f),qy=By($f),qw=Sr(.42,0,1,1),Gw=Sr(0,0,.58,1),Gy=Sr(.42,0,.58,1),Xw=e=>Array.isArray(e)&&typeof e[0]!="number",Xy=e=>Array.isArray(e)&&typeof e[0]=="number",$w={linear:_t,easeIn:qw,easeInOut:Gy,easeOut:Gw,circIn:$f,circInOut:qy,circOut:Yy,backIn:Xf,backInOut:Uy,backOut:Vy,anticipate:Hy},Pw=e=>typeof e=="string",g0=e=>{if(Xy(e)){Yf(e.length===4);const[t,n,a,i]=e;return Sr(t,n,a,i)}else if(Pw(e))return $w[e];return e},$r=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Kw(e,t){let n=new Set,a=new Set,i=!1,r=!1;const l=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function c(u){l.has(u)&&(d.schedule(u),e()),u(o)}const d={schedule:(u,m=!1,f=!1)=>{const v=f&&i?n:a;return m&&l.add(u),v.has(u)||v.add(u),u},cancel:u=>{a.delete(u),l.delete(u)},process:u=>{if(o=u,i){r=!0;return}i=!0,[n,a]=[a,n],n.forEach(c),n.clear(),i=!1,r&&(r=!1,d.process(u))}};return d}const Fw=40;function $y(e,t){let n=!1,a=!0;const i={delta:0,timestamp:0,isProcessing:!1},r=()=>n=!0,l=$r.reduce((b,y)=>(b[y]=Kw(r),b),{}),{setup:o,read:c,resolveKeyframes:d,preUpdate:u,update:m,preRender:f,render:x,postRender:v}=l,j=()=>{const b=Tn.useManualTiming?i.timestamp:performance.now();n=!1,Tn.useManualTiming||(i.delta=a?1e3/60:Math.max(Math.min(b-i.timestamp,Fw),1)),i.timestamp=b,i.isProcessing=!0,o.process(i),c.process(i),d.process(i),u.process(i),m.process(i),f.process(i),x.process(i),v.process(i),i.isProcessing=!1,n&&t&&(a=!1,e(j))},T=()=>{n=!0,a=!0,i.isProcessing||e(j)};return{schedule:$r.reduce((b,y)=>{const w=l[y];return b[y]=(k,N=!1,z=!1)=>(n||T(),w.schedule(k,N,z)),b},{}),cancel:b=>{for(let y=0;y<$r.length;y++)l[$r[y]].cancel(b)},state:i,steps:l}}const{schedule:pe,cancel:ca,state:Ve,steps:Tc}=$y(typeof requestAnimationFrame<"u"?requestAnimationFrame:_t,!0);let bl;function Qw(){bl=void 0}const Ze={now:()=>(bl===void 0&&Ze.set(Ve.isProcessing||Tn.useManualTiming?Ve.timestamp:performance.now()),bl),set:e=>{bl=e,queueMicrotask(Qw)}},Py=e=>t=>typeof t=="string"&&t.startsWith(e),Ky=Py("--"),Zw=Py("var(--"),Pf=e=>Zw(e)?Iw.test(e.split("/*")[0].trim()):!1,Iw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function x0(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Wi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ar={...Wi,transform:e=>Zt(0,1,e)},Pr={...Wi,default:1},Os=e=>Math.round(e*1e5)/1e5,Kf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Jw(e){return e==null}const Ww=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ff=(e,t)=>n=>!!(typeof n=="string"&&Ww.test(n)&&n.startsWith(e)||t&&!Jw(n)&&Object.prototype.hasOwnProperty.call(n,t)),Fy=(e,t,n)=>a=>{if(typeof a!="string")return a;const[i,r,l,o]=a.match(Kf);return{[e]:parseFloat(i),[t]:parseFloat(r),[n]:parseFloat(l),alpha:o!==void 0?parseFloat(o):1}},eS=e=>Zt(0,255,e),Cc={...Wi,transform:e=>Math.round(eS(e))},Aa={test:Ff("rgb","red"),parse:Fy("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:a=1})=>"rgba("+Cc.transform(e)+", "+Cc.transform(t)+", "+Cc.transform(n)+", "+Os(ar.transform(a))+")"};function tS(e){let t="",n="",a="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),a=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),a=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,a+=a,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:i?parseInt(i,16)/255:1}}const tu={test:Ff("#"),parse:tS,transform:Aa.transform},kr=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Rn=kr("deg"),Qt=kr("%"),U=kr("px"),nS=kr("vh"),aS=kr("vw"),b0={...Qt,parse:e=>Qt.parse(e)/100,transform:e=>Qt.transform(e*100)},pi={test:Ff("hsl","hue"),parse:Fy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:a=1})=>"hsla("+Math.round(e)+", "+Qt.transform(Os(t))+", "+Qt.transform(Os(n))+", "+Os(ar.transform(a))+")"},ke={test:e=>Aa.test(e)||tu.test(e)||pi.test(e),parse:e=>Aa.test(e)?Aa.parse(e):pi.test(e)?pi.parse(e):tu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Aa.transform(e):pi.transform(e),getAnimatableNone:e=>{const t=ke.parse(e);return t.alpha=0,ke.transform(t)}},iS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function sS(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Kf))==null?void 0:t.length)||0)+(((n=e.match(iS))==null?void 0:n.length)||0)>0}const Qy="number",Zy="color",rS="var",lS="var(",y0="${}",oS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ir(e){const t=e.toString(),n=[],a={color:[],number:[],var:[]},i=[];let r=0;const o=t.replace(oS,c=>(ke.test(c)?(a.color.push(r),i.push(Zy),n.push(ke.parse(c))):c.startsWith(lS)?(a.var.push(r),i.push(rS),n.push(c)):(a.number.push(r),i.push(Qy),n.push(parseFloat(c))),++r,y0)).split(y0);return{values:n,split:o,indexes:a,types:i}}function Iy(e){return ir(e).values}function Jy(e){const{split:t,types:n}=ir(e),a=t.length;return i=>{let r="";for(let l=0;l<a;l++)if(r+=t[l],i[l]!==void 0){const o=n[l];o===Qy?r+=Os(i[l]):o===Zy?r+=ke.transform(i[l]):r+=i[l]}return r}}const cS=e=>typeof e=="number"?0:ke.test(e)?ke.getAnimatableNone(e):e;function dS(e){const t=Iy(e);return Jy(e)(t.map(cS))}const da={test:sS,parse:Iy,createTransformer:Jy,getAnimatableNone:dS};function zc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function uS({hue:e,saturation:t,lightness:n,alpha:a}){e/=360,t/=100,n/=100;let i=0,r=0,l=0;if(!t)i=r=l=n;else{const o=n<.5?n*(1+t):n+t-n*t,c=2*n-o;i=zc(c,o,e+1/3),r=zc(c,o,e),l=zc(c,o,e-1/3)}return{red:Math.round(i*255),green:Math.round(r*255),blue:Math.round(l*255),alpha:a}}function ao(e,t){return n=>n>0?t:e}const be=(e,t,n)=>e+(t-e)*n,Ec=(e,t,n)=>{const a=e*e,i=n*(t*t-a)+a;return i<0?0:Math.sqrt(i)},fS=[tu,Aa,pi],mS=e=>fS.find(t=>t.test(e));function v0(e){const t=mS(e);if(!t)return!1;let n=t.parse(e);return t===pi&&(n=uS(n)),n}const j0=(e,t)=>{const n=v0(e),a=v0(t);if(!n||!a)return ao(e,t);const i={...n};return r=>(i.red=Ec(n.red,a.red,r),i.green=Ec(n.green,a.green,r),i.blue=Ec(n.blue,a.blue,r),i.alpha=be(n.alpha,a.alpha,r),Aa.transform(i))},nu=new Set(["none","hidden"]);function hS(e,t){return nu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function pS(e,t){return n=>be(e,t,n)}function Qf(e){return typeof e=="number"?pS:typeof e=="string"?Pf(e)?ao:ke.test(e)?j0:bS:Array.isArray(e)?Wy:typeof e=="object"?ke.test(e)?j0:gS:ao}function Wy(e,t){const n=[...e],a=n.length,i=e.map((r,l)=>Qf(r)(r,t[l]));return r=>{for(let l=0;l<a;l++)n[l]=i[l](r);return n}}function gS(e,t){const n={...e,...t},a={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(a[i]=Qf(e[i])(e[i],t[i]));return i=>{for(const r in a)n[r]=a[r](i);return n}}function xS(e,t){const n=[],a={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const r=t.types[i],l=e.indexes[r][a[r]],o=e.values[l]??0;n[i]=o,a[r]++}return n}const bS=(e,t)=>{const n=da.createTransformer(t),a=ir(e),i=ir(t);return a.indexes.var.length===i.indexes.var.length&&a.indexes.color.length===i.indexes.color.length&&a.indexes.number.length>=i.indexes.number.length?nu.has(e)&&!i.values.length||nu.has(t)&&!a.values.length?hS(e,t):wr(Wy(xS(a,i),i.values),n):ao(e,t)};function e1(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?be(e,t,n):Qf(e)(e,t)}const yS=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>pe.update(t,n),stop:()=>ca(t),now:()=>Ve.isProcessing?Ve.timestamp:Ze.now()}},t1=(e,t,n=10)=>{let a="";const i=Math.max(Math.round(t/n),2);for(let r=0;r<i;r++)a+=Math.round(e(r/(i-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},io=2e4;function Zf(e){let t=0;const n=50;let a=e.next(t);for(;!a.done&&t<io;)t+=n,a=e.next(t);return t>=io?1/0:t}function vS(e,t=100,n){const a=n({...e,keyframes:[0,t]}),i=Math.min(Zf(a),io);return{type:"keyframes",ease:r=>a.next(i*r).value/t,duration:zt(i)}}const jS=5;function n1(e,t,n){const a=Math.max(t-jS,0);return Ry(n-e(a),t-a)}const ve={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Mc=.001;function wS({duration:e=ve.duration,bounce:t=ve.bounce,velocity:n=ve.velocity,mass:a=ve.mass}){let i,r,l=1-t;l=Zt(ve.minDamping,ve.maxDamping,l),e=Zt(ve.minDuration,ve.maxDuration,zt(e)),l<1?(i=d=>{const u=d*l,m=u*e,f=u-n,x=au(d,l),v=Math.exp(-m);return Mc-f/x*v},r=d=>{const m=d*l*e,f=m*n+n,x=Math.pow(l,2)*Math.pow(d,2)*e,v=Math.exp(-m),j=au(Math.pow(d,2),l);return(-i(d)+Mc>0?-1:1)*((f-x)*v)/j}):(i=d=>{const u=Math.exp(-d*e),m=(d-n)*e+1;return-Mc+u*m},r=d=>{const u=Math.exp(-d*e),m=(n-d)*(e*e);return u*m});const o=5/e,c=kS(i,r,o);if(e=jn(e),isNaN(c))return{stiffness:ve.stiffness,damping:ve.damping,duration:e};{const d=Math.pow(c,2)*a;return{stiffness:d,damping:l*2*Math.sqrt(a*d),duration:e}}}const SS=12;function kS(e,t,n){let a=n;for(let i=1;i<SS;i++)a=a-e(a)/t(a);return a}function au(e,t){return e*Math.sqrt(1-t*t)}const NS=["duration","bounce"],AS=["stiffness","damping","mass"];function w0(e,t){return t.some(n=>e[n]!==void 0)}function TS(e){let t={velocity:ve.velocity,stiffness:ve.stiffness,damping:ve.damping,mass:ve.mass,isResolvedFromDuration:!1,...e};if(!w0(e,AS)&&w0(e,NS))if(e.visualDuration){const n=e.visualDuration,a=2*Math.PI/(n*1.2),i=a*a,r=2*Zt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ve.mass,stiffness:i,damping:r}}else{const n=wS(e);t={...t,...n,mass:ve.mass},t.isResolvedFromDuration=!0}return t}function so(e=ve.visualDuration,t=ve.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:a,restDelta:i}=n;const r=n.keyframes[0],l=n.keyframes[n.keyframes.length-1],o={done:!1,value:r},{stiffness:c,damping:d,mass:u,duration:m,velocity:f,isResolvedFromDuration:x}=TS({...n,velocity:-zt(n.velocity||0)}),v=f||0,j=d/(2*Math.sqrt(c*u)),T=l-r,g=zt(Math.sqrt(c/u)),p=Math.abs(T)<5;a||(a=p?ve.restSpeed.granular:ve.restSpeed.default),i||(i=p?ve.restDelta.granular:ve.restDelta.default);let b;if(j<1){const w=au(g,j);b=k=>{const N=Math.exp(-j*g*k);return l-N*((v+j*g*T)/w*Math.sin(w*k)+T*Math.cos(w*k))}}else if(j===1)b=w=>l-Math.exp(-g*w)*(T+(v+g*T)*w);else{const w=g*Math.sqrt(j*j-1);b=k=>{const N=Math.exp(-j*g*k),z=Math.min(w*k,300);return l-N*((v+j*g*T)*Math.sinh(z)+w*T*Math.cosh(z))/w}}const y={calculatedDuration:x&&m||null,next:w=>{const k=b(w);if(x)o.done=w>=m;else{let N=w===0?v:0;j<1&&(N=w===0?jn(v):n1(b,w,k));const z=Math.abs(N)<=a,C=Math.abs(l-k)<=i;o.done=z&&C}return o.value=o.done?l:k,o},toString:()=>{const w=Math.min(Zf(y),io),k=t1(N=>y.next(w*N).value,w,30);return w+"ms "+k},toTransition:()=>{}};return y}so.applyToOptions=e=>{const t=vS(e,100,so);return e.ease=t.ease,e.duration=jn(t.duration),e.type="keyframes",e};function iu({keyframes:e,velocity:t=0,power:n=.8,timeConstant:a=325,bounceDamping:i=10,bounceStiffness:r=500,modifyTarget:l,min:o,max:c,restDelta:d=.5,restSpeed:u}){const m=e[0],f={done:!1,value:m},x=z=>o!==void 0&&z<o||c!==void 0&&z>c,v=z=>o===void 0?c:c===void 0||Math.abs(o-z)<Math.abs(c-z)?o:c;let j=n*t;const T=m+j,g=l===void 0?T:l(T);g!==T&&(j=g-m);const p=z=>-j*Math.exp(-z/a),b=z=>g+p(z),y=z=>{const C=p(z),_=b(z);f.done=Math.abs(C)<=d,f.value=f.done?g:_};let w,k;const N=z=>{x(f.value)&&(w=z,k=so({keyframes:[f.value,v(f.value)],velocity:n1(b,z,f.value),damping:i,stiffness:r,restDelta:d,restSpeed:u}))};return N(0),{calculatedDuration:null,next:z=>{let C=!1;return!k&&w===void 0&&(C=!0,y(z),N(z)),w!==void 0&&z>=w?k.next(z-w):(!C&&y(z),f)}}}function CS(e,t,n){const a=[],i=n||Tn.mix||e1,r=e.length-1;for(let l=0;l<r;l++){let o=i(e[l],e[l+1]);if(t){const c=Array.isArray(t)?t[l]||_t:t;o=wr(c,o)}a.push(o)}return a}function zS(e,t,{clamp:n=!0,ease:a,mixer:i}={}){const r=e.length;if(Yf(r===t.length),r===1)return()=>t[0];if(r===2&&t[0]===t[1])return()=>t[1];const l=e[0]===e[1];e[0]>e[r-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=CS(t,a,i),c=o.length,d=u=>{if(l&&u<e[0])return t[0];let m=0;if(c>1)for(;m<e.length-2&&!(u<e[m+1]);m++);const f=nr(e[m],e[m+1],u);return o[m](f)};return n?u=>d(Zt(e[0],e[r-1],u)):d}function ES(e,t){const n=e[e.length-1];for(let a=1;a<=t;a++){const i=nr(0,t,a);e.push(be(n,1,i))}}function MS(e){const t=[0];return ES(t,e.length-1),t}function _S(e,t){return e.map(n=>n*t)}function DS(e,t){return e.map(()=>t||Gy).splice(0,e.length-1)}function Bs({duration:e=300,keyframes:t,times:n,ease:a="easeInOut"}){const i=Xw(a)?a.map(g0):g0(a),r={done:!1,value:t[0]},l=_S(n&&n.length===t.length?n:MS(t),e),o=zS(l,t,{ease:Array.isArray(i)?i:DS(t,i)});return{calculatedDuration:e,next:c=>(r.value=o(c),r.done=c>=e,r)}}const RS=e=>e!==null;function If(e,{repeat:t,repeatType:n="loop"},a,i=1){const r=e.filter(RS),o=i<0||t&&n!=="loop"&&t%2===1?0:r.length-1;return!o||a===void 0?r[o]:a}const OS={decay:iu,inertia:iu,tween:Bs,keyframes:Bs,spring:so};function a1(e){typeof e.type=="string"&&(e.type=OS[e.type])}class Jf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const BS=e=>e/100;class Wf extends Jf{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,i;const{motionValue:n}=this.options;n&&n.updatedAt!==Ze.now()&&this.tick(Ze.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(a=this.options).onStop)==null||i.call(a))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;a1(t);const{type:n=Bs,repeat:a=0,repeatDelay:i=0,repeatType:r,velocity:l=0}=t;let{keyframes:o}=t;const c=n||Bs;c!==Bs&&typeof o[0]!="number"&&(this.mixKeyframes=wr(BS,e1(o[0],o[1])),o=[0,100]);const d=c({...t,keyframes:o});r==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...o].reverse(),velocity:-l})),d.calculatedDuration===null&&(d.calculatedDuration=Zf(d));const{calculatedDuration:u}=d;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(a+1)-i,this.generator=d}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:a,totalDuration:i,mixKeyframes:r,mirroredGenerator:l,resolvedDuration:o,calculatedDuration:c}=this;if(this.startTime===null)return a.next(0);const{delay:d=0,keyframes:u,repeat:m,repeatType:f,repeatDelay:x,type:v,onUpdate:j,finalKeyframe:T}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const g=this.currentTime-d*(this.playbackSpeed>=0?1:-1),p=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let b=this.currentTime,y=a;if(m){const z=Math.min(this.currentTime,i)/o;let C=Math.floor(z),_=z%1;!_&&z>=1&&(_=1),_===1&&C--,C=Math.min(C,m+1),!!(C%2)&&(f==="reverse"?(_=1-_,x&&(_-=x/o)):f==="mirror"&&(y=l)),b=Zt(0,1,_)*o}const w=p?{done:!1,value:u[0]}:y.next(b);r&&(w.value=r(w.value));let{done:k}=w;!p&&c!==null&&(k=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const N=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return N&&v!==iu&&(w.value=If(u,this.options,T,this.speed)),j&&j(w.value),N&&this.finish(),w}then(t,n){return this.finished.then(t,n)}get duration(){return zt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+zt(t)}get time(){return zt(this.currentTime)}set time(t){var n;t=jn(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Ze.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=zt(this.currentTime))}play(){var i,r;if(this.isStopped)return;const{driver:t=yS,startTime:n}=this.options;this.driver||(this.driver=t(l=>this.tick(l))),(r=(i=this.options).onPlay)==null||r.call(i);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=n??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ze.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function LS(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Ta=e=>e*180/Math.PI,su=e=>{const t=Ta(Math.atan2(e[1],e[0]));return ru(t)},VS={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:su,rotateZ:su,skewX:e=>Ta(Math.atan(e[1])),skewY:e=>Ta(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},ru=e=>(e=e%360,e<0&&(e+=360),e),S0=su,k0=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),N0=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),US={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:k0,scaleY:N0,scale:e=>(k0(e)+N0(e))/2,rotateX:e=>ru(Ta(Math.atan2(e[6],e[5]))),rotateY:e=>ru(Ta(Math.atan2(-e[2],e[0]))),rotateZ:S0,rotate:S0,skewX:e=>Ta(Math.atan(e[4])),skewY:e=>Ta(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function lu(e){return e.includes("scale")?1:0}function ou(e,t){if(!e||e==="none")return lu(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,i;if(n)a=US,i=n;else{const o=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=VS,i=o}if(!i)return lu(t);const r=a[t],l=i[1].split(",").map(YS);return typeof r=="function"?r(l):l[r]}const HS=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return ou(n,t)};function YS(e){return parseFloat(e.trim())}const es=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ts=new Set(es),A0=e=>e===Wi||e===U,qS=new Set(["x","y","z"]),GS=es.filter(e=>!qS.has(e));function XS(e){const t=[];return GS.forEach(n=>{const a=e.getValue(n);a!==void 0&&(t.push([n,a.get()]),a.set(n.startsWith("scale")?1:0))}),t}const Kn={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>ou(t,"x"),y:(e,{transform:t})=>ou(t,"y")};Kn.translateX=Kn.x;Kn.translateY=Kn.y;const Ra=new Set;let cu=!1,du=!1,uu=!1;function i1(){if(du){const e=Array.from(Ra).filter(a=>a.needsMeasurement),t=new Set(e.map(a=>a.element)),n=new Map;t.forEach(a=>{const i=XS(a);i.length&&(n.set(a,i),a.render())}),e.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const i=n.get(a);i&&i.forEach(([r,l])=>{var o;(o=a.getValue(r))==null||o.set(l)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}du=!1,cu=!1,Ra.forEach(e=>e.complete(uu)),Ra.clear()}function s1(){Ra.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(du=!0)})}function $S(){uu=!0,s1(),i1(),uu=!1}class em{constructor(t,n,a,i,r,l=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=a,this.motionValue=i,this.element=r,this.isAsync=l}scheduleResolve(){this.state="scheduled",this.isAsync?(Ra.add(this),cu||(cu=!0,pe.read(s1),pe.resolveKeyframes(i1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:a,motionValue:i}=this;if(t[0]===null){const r=i==null?void 0:i.get(),l=t[t.length-1];if(r!==void 0)t[0]=r;else if(a&&n){const o=a.readValue(n,l);o!=null&&(t[0]=o)}t[0]===void 0&&(t[0]=l),i&&r===void 0&&i.set(t[0])}LS(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Ra.delete(this)}cancel(){this.state==="scheduled"&&(Ra.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const PS=e=>e.startsWith("--");function KS(e,t,n){PS(t)?e.style.setProperty(t,n):e.style[t]=n}const FS=qf(()=>window.ScrollTimeline!==void 0),QS={};function ZS(e,t){const n=qf(e);return()=>QS[t]??n()}const r1=ZS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),bs=([e,t,n,a])=>`cubic-bezier(${e}, ${t}, ${n}, ${a})`,T0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:bs([0,.65,.55,1]),circOut:bs([.55,0,1,.45]),backIn:bs([.31,.01,.66,-.59]),backOut:bs([.33,1.53,.69,.99])};function l1(e,t){if(e)return typeof e=="function"?r1()?t1(e,t):"ease-out":Xy(e)?bs(e):Array.isArray(e)?e.map(n=>l1(n,t)||T0.easeOut):T0[e]}function IS(e,t,n,{delay:a=0,duration:i=300,repeat:r=0,repeatType:l="loop",ease:o="easeOut",times:c}={},d=void 0){const u={[t]:n};c&&(u.offset=c);const m=l1(o,i);Array.isArray(m)&&(u.easing=m);const f={delay:a,duration:i,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:r+1,direction:l==="reverse"?"alternate":"normal"};return d&&(f.pseudoElement=d),e.animate(u,f)}function o1(e){return typeof e=="function"&&"applyToOptions"in e}function JS({type:e,...t}){return o1(e)&&r1()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class WS extends Jf{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:a,keyframes:i,pseudoElement:r,allowFlatten:l=!1,finalKeyframe:o,onComplete:c}=t;this.isPseudoElement=!!r,this.allowFlatten=l,this.options=t,Yf(typeof t.type!="string");const d=JS(t);this.animation=IS(n,a,i,d,r),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const u=If(i,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(u):KS(n,a,u),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,a;const t=((a=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:a.call(n).duration)||0;return zt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+zt(t)}get time(){return zt(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=jn(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&FS()?(this.animation.timeline=t,_t):n(this)}}const c1={anticipate:Hy,backInOut:Uy,circInOut:qy};function e4(e){return e in c1}function t4(e){typeof e.ease=="string"&&e4(e.ease)&&(e.ease=c1[e.ease])}const _c=10;class n4 extends WS{constructor(t){t4(t),a1(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:a,onComplete:i,element:r,...l}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const o=new Wf({...l,autoplay:!1}),c=Math.max(_c,Ze.now()-this.startTime),d=Zt(0,_c,c-_c);n.setWithVelocity(o.sample(Math.max(0,c-d)).value,o.sample(c).value,d),o.stop()}}const C0=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(da.test(e)||e==="0")&&!e.startsWith("url("));function a4(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function i4(e,t,n,a){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const r=e[e.length-1],l=C0(i,t),o=C0(r,t);return!l||!o?!1:a4(e)||(n==="spring"||o1(n))&&a}function fu(e){e.duration=0,e.type="keyframes"}const s4=new Set(["opacity","clipPath","filter","transform"]),r4=qf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function l4(e){var u;const{motionValue:t,name:n,repeatDelay:a,repeatType:i,damping:r,type:l}=e;if(!(((u=t==null?void 0:t.owner)==null?void 0:u.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:d}=t.owner.getProps();return r4()&&n&&s4.has(n)&&(n!=="transform"||!d)&&!c&&!a&&i!=="mirror"&&r!==0&&l!=="inertia"}const o4=40;class c4 extends Jf{constructor({autoplay:t=!0,delay:n=0,type:a="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:l="loop",keyframes:o,name:c,motionValue:d,element:u,...m}){var v;super(),this.stop=()=>{var j,T;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(T=this.keyframeResolver)==null||T.cancel()},this.createdAt=Ze.now();const f={autoplay:t,delay:n,type:a,repeat:i,repeatDelay:r,repeatType:l,name:c,motionValue:d,element:u,...m},x=(u==null?void 0:u.KeyframeResolver)||em;this.keyframeResolver=new x(o,(j,T,g)=>this.onKeyframesResolved(j,T,f,!g),c,d,u),(v=this.keyframeResolver)==null||v.scheduleResolve()}onKeyframesResolved(t,n,a,i){var T,g;this.keyframeResolver=void 0;const{name:r,type:l,velocity:o,delay:c,isHandoff:d,onUpdate:u}=a;this.resolvedAt=Ze.now(),i4(t,r,l,o)||((Tn.instantAnimations||!c)&&(u==null||u(If(t,a,n))),t[0]=t[t.length-1],fu(a),a.repeat=0);const f={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>o4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...a,keyframes:t},x=!d&&l4(f),v=(g=(T=f.motionValue)==null?void 0:T.owner)==null?void 0:g.current,j=x?new n4({...f,element:v}):new Wf(f);j.finished.then(()=>{this.notifyFinished()}).catch(_t),this.pendingTimeline&&(this.stopTimeline=j.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=j}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),$S()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function d1(e,t,n,a=0,i=1){const r=Array.from(e).sort((d,u)=>d.sortNodePosition(u)).indexOf(t),l=e.size,o=(l-1)*a;return typeof n=="function"?n(r,l):i===1?r*a:o-r*a}const d4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function u4(e){const t=d4.exec(e);if(!t)return[,];const[,n,a,i]=t;return[`--${n??a}`,i]}function u1(e,t,n=1){const[a,i]=u4(e);if(!a)return;const r=window.getComputedStyle(t).getPropertyValue(a);if(r){const l=r.trim();return My(l)?parseFloat(l):l}return Pf(i)?u1(i,t,n+1):i}const f4={type:"spring",stiffness:500,damping:25,restSpeed:10},m4=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),h4={type:"keyframes",duration:.8},p4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},g4=(e,{keyframes:t})=>t.length>2?h4:ts.has(e)?e.startsWith("scale")?m4(t[1]):f4:p4,x4=e=>e!==null;function b4(e,{repeat:t,repeatType:n="loop"},a){const i=e.filter(x4),r=t&&n!=="loop"&&t%2===1?0:i.length-1;return i[r]}function tm(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}function y4({when:e,delay:t,delayChildren:n,staggerChildren:a,staggerDirection:i,repeat:r,repeatType:l,repeatDelay:o,from:c,elapsed:d,...u}){return!!Object.keys(u).length}const nm=(e,t,n,a={},i,r)=>l=>{const o=tm(a,e)||{},c=o.delay||a.delay||0;let{elapsed:d=0}=a;d=d-jn(c);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...o,delay:-d,onUpdate:f=>{t.set(f),o.onUpdate&&o.onUpdate(f)},onComplete:()=>{l(),o.onComplete&&o.onComplete()},name:e,motionValue:t,element:r?void 0:i};y4(o)||Object.assign(u,g4(e,u)),u.duration&&(u.duration=jn(u.duration)),u.repeatDelay&&(u.repeatDelay=jn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let m=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(fu(u),u.delay===0&&(m=!0)),(Tn.instantAnimations||Tn.skipAnimations)&&(m=!0,fu(u),u.delay=0),u.allowFlatten=!o.type&&!o.ease,m&&!r&&t.get()!==void 0){const f=b4(u.keyframes,o);if(f!==void 0){pe.update(()=>{u.onUpdate(f),u.onComplete()});return}}return o.isSync?new Wf(u):new c4(u)};function z0(e){const t=[{},{}];return e==null||e.values.forEach((n,a)=>{t[0][a]=n.get(),t[1][a]=n.getVelocity()}),t}function am(e,t,n,a){if(typeof t=="function"){const[i,r]=z0(a);t=t(n!==void 0?n:e.custom,i,r)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,r]=z0(a);t=t(n!==void 0?n:e.custom,i,r)}return t}function Ai(e,t,n){const a=e.getProps();return am(a,t,n!==void 0?n:a.custom,e)}const f1=new Set(["width","height","top","left","right","bottom",...es]),E0=30,v4=e=>!isNaN(parseFloat(e));class j4{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var r;const i=Ze.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((r=this.events.change)==null||r.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Ze.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=v4(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Gf);const a=this.events[t].add(n);return t==="change"?()=>{a(),pe.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,a){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Ze.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>E0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,E0);return Ry(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Gi(e,t){return new j4(e,t)}const mu=e=>Array.isArray(e);function w4(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Gi(n))}function S4(e){return mu(e)?e[e.length-1]||0:e}function k4(e,t){const n=Ai(e,t);let{transitionEnd:a={},transition:i={},...r}=n||{};r={...r,...a};for(const l in r){const o=S4(r[l]);w4(e,l,o)}}const Pe=e=>!!(e&&e.getVelocity);function N4(e){return!!(Pe(e)&&e.add)}function hu(e,t){const n=e.getValue("willChange");if(N4(n))return n.add(t);if(!n&&Tn.WillChange){const a=new Tn.WillChange("auto");e.addValue("willChange",a),a.add(t)}}function im(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const A4="framerAppearId",m1="data-"+im(A4);function h1(e){return e.props[m1]}function T4({protectedKeys:e,needsAnimating:t},n){const a=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,a}function p1(e,t,{delay:n=0,transitionOverride:a,type:i}={}){let{transition:r=e.getDefaultTransition(),transitionEnd:l,...o}=t;const c=r==null?void 0:r.reduceMotion;a&&(r=a);const d=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const m in o){const f=e.getValue(m,e.latestValues[m]??null),x=o[m];if(x===void 0||u&&T4(u,m))continue;const v={delay:n,...tm(r||{},m)},j=f.get();if(j!==void 0&&!f.isAnimating&&!Array.isArray(x)&&x===j&&!v.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const b=h1(e);if(b){const y=window.MotionHandoffAnimation(b,m,pe);y!==null&&(v.startTime=y,T=!0)}}hu(e,m);const g=c??e.shouldReduceMotion;f.start(nm(m,f,x,g&&f1.has(m)?{type:!1}:v,e,T));const p=f.animation;p&&d.push(p)}return l&&Promise.all(d).then(()=>{pe.update(()=>{l&&k4(e,l)})}),d}function pu(e,t,n={}){var c;const a=Ai(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=a||{};n.transitionOverride&&(i=n.transitionOverride);const r=a?()=>Promise.all(p1(e,a,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:u=0,staggerChildren:m,staggerDirection:f}=i;return C4(e,t,d,u,m,f,n)}:()=>Promise.resolve(),{when:o}=i;if(o){const[d,u]=o==="beforeChildren"?[r,l]:[l,r];return d().then(()=>u())}else return Promise.all([r(),l(n.delay)])}function C4(e,t,n=0,a=0,i=0,r=1,l){const o=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),o.push(pu(c,t,{...l,delay:n+(typeof a=="function"?0:a)+d1(e.variantChildren,c,a,i,r)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(o)}function z4(e,t,n={}){e.notify("AnimationStart",t);let a;if(Array.isArray(t)){const i=t.map(r=>pu(e,r,n));a=Promise.all(i)}else if(typeof t=="string")a=pu(e,t,n);else{const i=typeof t=="function"?Ai(e,t,n.custom):t;a=Promise.all(p1(e,i,n))}return a.then(()=>{e.notify("AnimationComplete",t)})}const E4={test:e=>e==="auto",parse:e=>e},g1=e=>t=>t.test(e),x1=[Wi,U,Qt,Rn,aS,nS,E4],M0=e=>x1.find(g1(e));function M4(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Dy(e):!0}const _4=new Set(["brightness","contrast","saturate","opacity"]);function D4(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=n.match(Kf)||[];if(!a)return e;const i=n.replace(a,"");let r=_4.has(t)?1:0;return a!==n&&(r*=100),t+"("+r+i+")"}const R4=/\b([a-z-]*)\(.*?\)/gu,gu={...da,getAnimatableNone:e=>{const t=e.match(R4);return t?t.map(D4).join(" "):e}},_0={...Wi,transform:Math.round},O4={rotate:Rn,rotateX:Rn,rotateY:Rn,rotateZ:Rn,scale:Pr,scaleX:Pr,scaleY:Pr,scaleZ:Pr,skew:Rn,skewX:Rn,skewY:Rn,distance:U,translateX:U,translateY:U,translateZ:U,x:U,y:U,z:U,perspective:U,transformPerspective:U,opacity:ar,originX:b0,originY:b0,originZ:U},sm={borderWidth:U,borderTopWidth:U,borderRightWidth:U,borderBottomWidth:U,borderLeftWidth:U,borderRadius:U,borderTopLeftRadius:U,borderTopRightRadius:U,borderBottomRightRadius:U,borderBottomLeftRadius:U,width:U,maxWidth:U,height:U,maxHeight:U,top:U,right:U,bottom:U,left:U,inset:U,insetBlock:U,insetBlockStart:U,insetBlockEnd:U,insetInline:U,insetInlineStart:U,insetInlineEnd:U,padding:U,paddingTop:U,paddingRight:U,paddingBottom:U,paddingLeft:U,paddingBlock:U,paddingBlockStart:U,paddingBlockEnd:U,paddingInline:U,paddingInlineStart:U,paddingInlineEnd:U,margin:U,marginTop:U,marginRight:U,marginBottom:U,marginLeft:U,marginBlock:U,marginBlockStart:U,marginBlockEnd:U,marginInline:U,marginInlineStart:U,marginInlineEnd:U,fontSize:U,backgroundPositionX:U,backgroundPositionY:U,...O4,zIndex:_0,fillOpacity:ar,strokeOpacity:ar,numOctaves:_0},B4={...sm,color:ke,backgroundColor:ke,outlineColor:ke,fill:ke,stroke:ke,borderColor:ke,borderTopColor:ke,borderRightColor:ke,borderBottomColor:ke,borderLeftColor:ke,filter:gu,WebkitFilter:gu},b1=e=>B4[e];function y1(e,t){let n=b1(e);return n!==gu&&(n=da),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const L4=new Set(["auto","none","0"]);function V4(e,t,n){let a=0,i;for(;a<e.length&&!i;){const r=e[a];typeof r=="string"&&!L4.has(r)&&ir(r).values.length&&(i=e[a]),a++}if(i&&n)for(const r of t)e[r]=y1(n,i)}class U4 extends em{constructor(t,n,a,i,r){super(t,n,a,i,r,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:a}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<t.length;u++){let m=t[u];if(typeof m=="string"&&(m=m.trim(),Pf(m))){const f=u1(m,n.current);f!==void 0&&(t[u]=f),u===t.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!f1.has(a)||t.length!==2)return;const[i,r]=t,l=M0(i),o=M0(r),c=x0(i),d=x0(r);if(c!==d&&Kn[a]){this.needsMeasurement=!0;return}if(l!==o)if(A0(l)&&A0(o))for(let u=0;u<t.length;u++){const m=t[u];typeof m=="string"&&(t[u]=parseFloat(m))}else Kn[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,a=[];for(let i=0;i<t.length;i++)(t[i]===null||M4(t[i]))&&a.push(i);a.length&&V4(t,a,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Kn[a](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(a,i).jump(i,!1)}measureEndState(){var o;const{element:t,name:n,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const r=a.length-1,l=a[r];a[r]=Kn[n](t.measureViewportBox(),window.getComputedStyle(t.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),(o=this.removedTransforms)!=null&&o.length&&this.removedTransforms.forEach(([c,d])=>{t.getValue(c).set(d)}),this.resolveNoneKeyframes()}}function H4(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let a=document;const i=(n==null?void 0:n[e])??a.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(a=>a!=null)}const v1=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Y4(e){return _y(e)&&"offsetHeight"in e}const{schedule:rm}=$y(queueMicrotask,!1),Vt={x:!1,y:!1};function j1(){return Vt.x||Vt.y}function q4(e){return e==="x"||e==="y"?Vt[e]?null:(Vt[e]=!0,()=>{Vt[e]=!1}):Vt.x||Vt.y?null:(Vt.x=Vt.y=!0,()=>{Vt.x=Vt.y=!1})}function w1(e,t){const n=H4(e),a=new AbortController,i={passive:!0,...t,signal:a.signal};return[n,i,()=>a.abort()]}function D0(e){return!(e.pointerType==="touch"||j1())}function G4(e,t,n={}){const[a,i,r]=w1(e,n),l=o=>{if(!D0(o))return;const{target:c}=o,d=t(c,o);if(typeof d!="function"||!c)return;const u=m=>{D0(m)&&(d(m),c.removeEventListener("pointerleave",u))};c.addEventListener("pointerleave",u,i)};return a.forEach(o=>{o.addEventListener("pointerenter",l,i)}),r}const S1=(e,t)=>t?e===t?!0:S1(e,t.parentElement):!1,lm=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,X4=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function k1(e){return X4.has(e.tagName)||e.isContentEditable===!0}const yl=new WeakSet;function R0(e){return t=>{t.key==="Enter"&&e(t)}}function Dc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const $4=(e,t)=>{const n=e.currentTarget;if(!n)return;const a=R0(()=>{if(yl.has(n))return;Dc(n,"down");const i=R0(()=>{Dc(n,"up")}),r=()=>Dc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",r,t)});n.addEventListener("keydown",a,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",a),t)};function O0(e){return lm(e)&&!j1()}function P4(e,t,n={}){const[a,i,r]=w1(e,n),l=o=>{const c=o.currentTarget;if(!O0(o))return;yl.add(c);const d=t(c,o),u=(x,v)=>{window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",f),yl.has(c)&&yl.delete(c),O0(x)&&typeof d=="function"&&d(x,{success:v})},m=x=>{u(x,c===window||c===document||n.useGlobalTarget||S1(c,x.target))},f=x=>{u(x,!1)};window.addEventListener("pointerup",m,i),window.addEventListener("pointercancel",f,i)};return a.forEach(o=>{(n.useGlobalTarget?window:o).addEventListener("pointerdown",l,i),Y4(o)&&(o.addEventListener("focus",d=>$4(d,i)),!k1(o)&&!o.hasAttribute("tabindex")&&(o.tabIndex=0))}),r}function N1(e){return _y(e)&&"ownerSVGElement"in e}function K4(e){return N1(e)&&e.tagName==="svg"}const F4=[...x1,ke,da],Q4=e=>F4.find(g1(e)),B0=()=>({translate:0,scale:1,origin:0,originPoint:0}),gi=()=>({x:B0(),y:B0()}),L0=()=>({min:0,max:0}),Ee=()=>({x:L0(),y:L0()}),xu={current:null},A1={current:!1},Z4=typeof window<"u";function I4(){if(A1.current=!0,!!Z4)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>xu.current=e.matches;e.addEventListener("change",t),t()}else xu.current=!1}const J4=new WeakMap;function Lo(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function sr(e){return typeof e=="string"||Array.isArray(e)}const om=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cm=["initial",...om];function Vo(e){return Lo(e.animate)||cm.some(t=>sr(e[t]))}function T1(e){return!!(Vo(e)||e.variants)}function W4(e,t,n){for(const a in t){const i=t[a],r=n[a];if(Pe(i))e.addValue(a,i);else if(Pe(r))e.addValue(a,Gi(i,{owner:e}));else if(r!==i)if(e.hasValue(a)){const l=e.getValue(a);l.liveStyle===!0?l.jump(i):l.hasAnimated||l.set(i)}else{const l=e.getStaticValue(a);e.addValue(a,Gi(l!==void 0?l:i,{owner:e}))}}for(const a in n)t[a]===void 0&&e.removeValue(a);return t}const V0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ro={};function C1(e){ro=e}function e3(){return ro}class t3{scrapeMotionValuesFromProps(t,n,a){return{}}constructor({parent:t,props:n,presenceContext:a,reducedMotionConfig:i,blockInitialAnimation:r,visualState:l},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=em,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=Ze.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,pe.render(this.render,!1,!0))};const{latestValues:c,renderState:d}=l;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.blockInitialAnimation=!!r,this.isControllingVariants=Vo(n),this.isVariantNode=T1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...m}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in m){const x=m[f];c[f]!==void 0&&Pe(x)&&x.set(c[f])}}mount(t){var n;this.current=t,J4.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,i)=>this.bindToMotionValue(i,a)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(A1.current||I4(),this.shouldReduceMotion=xu.current),(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),ca(this.notifyUpdate),ca(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const a=this.features[n];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=ts.has(t);a&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&pe.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let r;typeof window<"u"&&window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),r&&r(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ro){const n=ro[t];if(!n)continue;const{isEnabled:a,Feature:i}=n;if(!this.features[t]&&i&&a(this.props)&&(this.features[t]=new i(this)),this.features[t]){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ee()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let a=0;a<V0.length;a++){const i=V0[a];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const r="on"+i,l=t[r];l&&(this.propEventSubscriptions[i]=this.on(i,l))}this.prevMotionValues=W4(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const a=this.values.get(t);n!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&n!==void 0&&(a=Gi(n===null?void 0:n,{owner:this}),this.addValue(t,a)),a}readValue(t,n){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(My(a)||Dy(a))?a=parseFloat(a):!Q4(a)&&da.test(n)&&(a=y1(t,n)),this.setBaseTarget(t,Pe(a)?a.get():a)),Pe(a)?a.get():a}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var r;const{initial:n}=this.props;let a;if(typeof n=="string"||typeof n=="object"){const l=am(this.props,n,(r=this.presenceContext)==null?void 0:r.custom);l&&(a=l[t])}if(n&&a!==void 0)return a;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Pe(i)?i:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Gf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){rm.render(this.render)}}class z1 extends t3{constructor(){super(...arguments),this.KeyframeResolver=U4}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const a=t.style;return a?a[n]:void 0}removeValueFromRenderState(t,{vars:n,style:a}){delete n[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Pe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class ma{constructor(t){this.isMounted=!1,this.node=t}update(){}}function E1({top:e,left:t,right:n,bottom:a}){return{x:{min:t,max:n},y:{min:e,max:a}}}function n3({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function a3(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),a=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:a.y,right:a.x}}function Rc(e){return e===void 0||e===1}function bu({scale:e,scaleX:t,scaleY:n}){return!Rc(e)||!Rc(t)||!Rc(n)}function ka(e){return bu(e)||M1(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function M1(e){return U0(e.x)||U0(e.y)}function U0(e){return e&&e!=="0%"}function lo(e,t,n){const a=e-n,i=t*a;return n+i}function H0(e,t,n,a,i){return i!==void 0&&(e=lo(e,i,a)),lo(e,n,a)+t}function yu(e,t=0,n=1,a,i){e.min=H0(e.min,t,n,a,i),e.max=H0(e.max,t,n,a,i)}function _1(e,{x:t,y:n}){yu(e.x,t.translate,t.scale,t.originPoint),yu(e.y,n.translate,n.scale,n.originPoint)}const Y0=.999999999999,q0=1.0000000000001;function i3(e,t,n,a=!1){const i=n.length;if(!i)return;t.x=t.y=1;let r,l;for(let o=0;o<i;o++){r=n[o],l=r.projectionDelta;const{visualElement:c}=r.options;c&&c.props.style&&c.props.style.display==="contents"||(a&&r.options.layoutScroll&&r.scroll&&r!==r.root&&bi(e,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,_1(e,l)),a&&ka(r.latestValues)&&bi(e,r.latestValues))}t.x<q0&&t.x>Y0&&(t.x=1),t.y<q0&&t.y>Y0&&(t.y=1)}function xi(e,t){e.min=e.min+t,e.max=e.max+t}function G0(e,t,n,a,i=.5){const r=be(e.min,e.max,i);yu(e,t,n,r,a)}function bi(e,t){G0(e.x,t.x,t.scaleX,t.scale,t.originX),G0(e.y,t.y,t.scaleY,t.scale,t.originY)}function D1(e,t){return E1(a3(e.getBoundingClientRect(),t))}function s3(e,t,n){const a=D1(e,n),{scroll:i}=t;return i&&(xi(a.x,i.offset.x),xi(a.y,i.offset.y)),a}const r3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},l3=es.length;function o3(e,t,n){let a="",i=!0;for(let r=0;r<l3;r++){const l=es[r],o=e[l];if(o===void 0)continue;let c=!0;if(typeof o=="number")c=o===(l.startsWith("scale")?1:0);else{const d=parseFloat(o);c=l.startsWith("scale")?d===1:d===0}if(!c||n){const d=v1(o,sm[l]);if(!c){i=!1;const u=r3[l]||l;a+=`${u}(${d}) `}n&&(t[l]=d)}}return a=a.trim(),n?a=n(t,i?"":a):i&&(a="none"),a}function dm(e,t,n){const{style:a,vars:i,transformOrigin:r}=e;let l=!1,o=!1;for(const c in t){const d=t[c];if(ts.has(c)){l=!0;continue}else if(Ky(c)){i[c]=d;continue}else{const u=v1(d,sm[c]);c.startsWith("origin")?(o=!0,r[c]=u):a[c]=u}}if(t.transform||(l||n?a.transform=o3(t,e.transform,n):a.transform&&(a.transform="none")),o){const{originX:c="50%",originY:d="50%",originZ:u=0}=r;a.transformOrigin=`${c} ${d} ${u}`}}function R1(e,{style:t,vars:n},a,i){const r=e.style;let l;for(l in t)r[l]=t[l];i==null||i.applyProjectionStyles(r,a);for(l in n)r.setProperty(l,n[l])}function X0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ds={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(U.test(e))e=parseFloat(e);else return e;const n=X0(e,t.target.x),a=X0(e,t.target.y);return`${n}% ${a}%`}},c3={correct:(e,{treeScale:t,projectionDelta:n})=>{const a=e,i=da.parse(e);if(i.length>5)return a;const r=da.createTransformer(e),l=typeof i[0]!="number"?1:0,o=n.x.scale*t.x,c=n.y.scale*t.y;i[0+l]/=o,i[1+l]/=c;const d=be(o,c,.5);return typeof i[2+l]=="number"&&(i[2+l]/=d),typeof i[3+l]=="number"&&(i[3+l]/=d),r(i)}},vu={borderRadius:{...ds,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ds,borderTopRightRadius:ds,borderBottomLeftRadius:ds,borderBottomRightRadius:ds,boxShadow:c3};function O1(e,{layout:t,layoutId:n}){return ts.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!vu[e]||e==="opacity")}function um(e,t,n){var l;const a=e.style,i=t==null?void 0:t.style,r={};if(!a)return r;for(const o in a)(Pe(a[o])||i&&Pe(i[o])||O1(o,e)||((l=n==null?void 0:n.getValue(o))==null?void 0:l.liveStyle)!==void 0)&&(r[o]=a[o]);return r}function d3(e){return window.getComputedStyle(e)}class u3 extends z1{constructor(){super(...arguments),this.type="html",this.renderInstance=R1}readValueFromInstance(t,n){var a;if(ts.has(n))return(a=this.projection)!=null&&a.isProjecting?lu(n):HS(t,n);{const i=d3(t),r=(Ky(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(t,{transformPagePoint:n}){return D1(t,n)}build(t,n,a){dm(t,n,a.transformTemplate)}scrapeMotionValuesFromProps(t,n,a){return um(t,n,a)}}const f3={offset:"stroke-dashoffset",array:"stroke-dasharray"},m3={offset:"strokeDashoffset",array:"strokeDasharray"};function h3(e,t,n=1,a=0,i=!0){e.pathLength=1;const r=i?f3:m3;e[r.offset]=`${-a}`,e[r.array]=`${t} ${n}`}const p3=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function B1(e,{attrX:t,attrY:n,attrScale:a,pathLength:i,pathSpacing:r=1,pathOffset:l=0,...o},c,d,u){if(dm(e,o,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:f}=e;m.transform&&(f.transform=m.transform,delete m.transform),(f.transform||m.transformOrigin)&&(f.transformOrigin=m.transformOrigin??"50% 50%",delete m.transformOrigin),f.transform&&(f.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete m.transformBox);for(const x of p3)m[x]!==void 0&&(f[x]=m[x],delete m[x]);t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),a!==void 0&&(m.scale=a),i!==void 0&&h3(m,i,r,l,!1)}const L1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),V1=e=>typeof e=="string"&&e.toLowerCase()==="svg";function g3(e,t,n,a){R1(e,t,void 0,a);for(const i in t.attrs)e.setAttribute(L1.has(i)?i:im(i),t.attrs[i])}function U1(e,t,n){const a=um(e,t,n);for(const i in e)if(Pe(e[i])||Pe(t[i])){const r=es.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;a[r]=e[i]}return a}class x3 extends z1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ee}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ts.has(n)){const a=b1(n);return a&&a.default||0}return n=L1.has(n)?n:im(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,a){return U1(t,n,a)}build(t,n,a){B1(t,n,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(t,n,a,i){g3(t,n,a,i)}mount(t){this.isSVGTag=V1(t.tagName),super.mount(t)}}const b3=cm.length;function H1(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?H1(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<b3;n++){const a=cm[n],i=e.props[a];(sr(i)||i===!1)&&(t[a]=i)}return t}function Y1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let a=0;a<n;a++)if(t[a]!==e[a])return!1;return!0}const y3=[...om].reverse(),v3=om.length;function j3(e){return t=>Promise.all(t.map(({animation:n,options:a})=>z4(e,n,a)))}function w3(e){let t=j3(e),n=$0(),a=!0;const i=c=>(d,u)=>{var f;const m=Ai(e,u,c==="exit"?(f=e.presenceContext)==null?void 0:f.custom:void 0);if(m){const{transition:x,transitionEnd:v,...j}=m;d={...d,...j,...v}}return d};function r(c){t=c(e)}function l(c){const{props:d}=e,u=H1(e.parent)||{},m=[],f=new Set;let x={},v=1/0;for(let T=0;T<v3;T++){const g=y3[T],p=n[g],b=d[g]!==void 0?d[g]:u[g],y=sr(b),w=g===c?p.isActive:null;w===!1&&(v=T);let k=b===u[g]&&b!==d[g]&&y;if(k&&a&&e.manuallyAnimateOnMount&&(k=!1),p.protectedKeys={...x},!p.isActive&&w===null||!b&&!p.prevProp||Lo(b)||typeof b=="boolean")continue;const N=S3(p.prevProp,b);let z=N||g===c&&p.isActive&&!k&&y||T>v&&y,C=!1;const _=Array.isArray(b)?b:[b];let R=_.reduce(i(g),{});w===!1&&(R={});const{prevResolvedValues:E={}}=p,K={...E,...R},ce=B=>{z=!0,f.has(B)&&(C=!0,f.delete(B)),p.needsAnimating[B]=!0;const L=e.getValue(B);L&&(L.liveStyle=!1)};for(const B in K){const L=R[B],q=E[B];if(x.hasOwnProperty(B))continue;let F=!1;mu(L)&&mu(q)?F=!Y1(L,q):F=L!==q,F?L!=null?ce(B):f.add(B):L!==void 0&&f.has(B)?ce(B):p.protectedKeys[B]=!0}p.prevProp=b,p.prevResolvedValues=R,p.isActive&&(x={...x,...R}),a&&e.blockInitialAnimation&&(z=!1);const V=k&&N;z&&(!V||C)&&m.push(..._.map(B=>{const L={type:g};if(typeof B=="string"&&a&&!V&&e.manuallyAnimateOnMount&&e.parent){const{parent:q}=e,F=Ai(q,B);if(q.enteringChildren&&F){const{delayChildren:Re}=F.transition||{};L.delay=d1(q.enteringChildren,e,Re)}}return{animation:B,options:L}}))}if(f.size){const T={};if(typeof d.initial!="boolean"){const g=Ai(e,Array.isArray(d.initial)?d.initial[0]:d.initial);g&&g.transition&&(T.transition=g.transition)}f.forEach(g=>{const p=e.getBaseTarget(g),b=e.getValue(g);b&&(b.liveStyle=!0),T[g]=p??null}),m.push({animation:T})}let j=!!m.length;return a&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(j=!1),a=!1,j?t(m):Promise.resolve()}function o(c,d){var m;if(n[c].isActive===d)return Promise.resolve();(m=e.variantChildren)==null||m.forEach(f=>{var x;return(x=f.animationState)==null?void 0:x.setActive(c,d)}),n[c].isActive=d;const u=l(c);for(const f in n)n[f].protectedKeys={};return u}return{animateChanges:l,setActive:o,setAnimateFunction:r,getState:()=>n,reset:()=>{n=$0()}}}function S3(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Y1(t,e):!1}function xa(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $0(){return{animate:xa(!0),whileInView:xa(),whileHover:xa(),whileTap:xa(),whileDrag:xa(),whileFocus:xa(),exit:xa()}}function P0(e,t){e.min=t.min,e.max=t.max}function Lt(e,t){P0(e.x,t.x),P0(e.y,t.y)}function K0(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const q1=1e-4,k3=1-q1,N3=1+q1,G1=.01,A3=0-G1,T3=0+G1;function Ie(e){return e.max-e.min}function C3(e,t,n){return Math.abs(e-t)<=n}function F0(e,t,n,a=.5){e.origin=a,e.originPoint=be(t.min,t.max,e.origin),e.scale=Ie(n)/Ie(t),e.translate=be(n.min,n.max,e.origin)-e.originPoint,(e.scale>=k3&&e.scale<=N3||isNaN(e.scale))&&(e.scale=1),(e.translate>=A3&&e.translate<=T3||isNaN(e.translate))&&(e.translate=0)}function Ls(e,t,n,a){F0(e.x,t.x,n.x,a?a.originX:void 0),F0(e.y,t.y,n.y,a?a.originY:void 0)}function Q0(e,t,n){e.min=n.min+t.min,e.max=e.min+Ie(t)}function z3(e,t,n){Q0(e.x,t.x,n.x),Q0(e.y,t.y,n.y)}function Z0(e,t,n){e.min=t.min-n.min,e.max=e.min+Ie(t)}function oo(e,t,n){Z0(e.x,t.x,n.x),Z0(e.y,t.y,n.y)}function I0(e,t,n,a,i){return e-=t,e=lo(e,1/n,a),i!==void 0&&(e=lo(e,1/i,a)),e}function E3(e,t=0,n=1,a=.5,i,r=e,l=e){if(Qt.test(t)&&(t=parseFloat(t),t=be(l.min,l.max,t/100)-l.min),typeof t!="number")return;let o=be(r.min,r.max,a);e===r&&(o-=t),e.min=I0(e.min,t,n,o,i),e.max=I0(e.max,t,n,o,i)}function J0(e,t,[n,a,i],r,l){E3(e,t[n],t[a],t[i],t.scale,r,l)}const M3=["x","scaleX","originX"],_3=["y","scaleY","originY"];function W0(e,t,n,a){J0(e.x,t,M3,n?n.x:void 0,a?a.x:void 0),J0(e.y,t,_3,n?n.y:void 0,a?a.y:void 0)}function ep(e){return e.translate===0&&e.scale===1}function X1(e){return ep(e.x)&&ep(e.y)}function tp(e,t){return e.min===t.min&&e.max===t.max}function D3(e,t){return tp(e.x,t.x)&&tp(e.y,t.y)}function np(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function $1(e,t){return np(e.x,t.x)&&np(e.y,t.y)}function ap(e){return Ie(e.x)/Ie(e.y)}function ip(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function jt(e){return[e("x"),e("y")]}function R3(e,t,n){let a="";const i=e.x.translate/t.x,r=e.y.translate/t.y,l=(n==null?void 0:n.z)||0;if((i||r||l)&&(a=`translate3d(${i}px, ${r}px, ${l}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:u,rotateX:m,rotateY:f,skewX:x,skewY:v}=n;d&&(a=`perspective(${d}px) ${a}`),u&&(a+=`rotate(${u}deg) `),m&&(a+=`rotateX(${m}deg) `),f&&(a+=`rotateY(${f}deg) `),x&&(a+=`skewX(${x}deg) `),v&&(a+=`skewY(${v}deg) `)}const o=e.x.scale*t.x,c=e.y.scale*t.y;return(o!==1||c!==1)&&(a+=`scale(${o}, ${c})`),a||"none"}const P1=["TopLeft","TopRight","BottomLeft","BottomRight"],O3=P1.length,sp=e=>typeof e=="string"?parseFloat(e):e,rp=e=>typeof e=="number"||U.test(e);function B3(e,t,n,a,i,r){i?(e.opacity=be(0,n.opacity??1,L3(a)),e.opacityExit=be(t.opacity??1,0,V3(a))):r&&(e.opacity=be(t.opacity??1,n.opacity??1,a));for(let l=0;l<O3;l++){const o=`border${P1[l]}Radius`;let c=lp(t,o),d=lp(n,o);if(c===void 0&&d===void 0)continue;c||(c=0),d||(d=0),c===0||d===0||rp(c)===rp(d)?(e[o]=Math.max(be(sp(c),sp(d),a),0),(Qt.test(d)||Qt.test(c))&&(e[o]+="%")):e[o]=d}(t.rotate||n.rotate)&&(e.rotate=be(t.rotate||0,n.rotate||0,a))}function lp(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const L3=K1(0,.5,Yy),V3=K1(.5,.95,_t);function K1(e,t,n){return a=>a<e?0:a>t?1:n(nr(e,t,a))}function U3(e,t,n){const a=Pe(e)?e:Gi(e);return a.start(nm("",a,t,n)),a.animation}function rr(e,t,n,a={passive:!0}){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n)}const H3=(e,t)=>e.depth-t.depth;class Y3{constructor(){this.children=[],this.isDirty=!1}add(t){Uf(this.children,t),this.isDirty=!0}remove(t){Hf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(H3),this.isDirty=!1,this.children.forEach(t)}}function q3(e,t){const n=Ze.now(),a=({timestamp:i})=>{const r=i-n;r>=t&&(ca(a),e(r-t))};return pe.setup(a,!0),()=>ca(a)}function vl(e){return Pe(e)?e.get():e}class G3{constructor(){this.members=[]}add(t){Uf(this.members,t),t.scheduleRender()}remove(t){if(Hf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let a;for(let i=n;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1){a=r;break}}return a?(this.promote(a),!0):!1}promote(t,n){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender();const i=a.options.layoutDependency,r=t.options.layoutDependency;i!==void 0&&r!==void 0&&i===r||(t.resumeFrom=a,n&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0));const{crossfade:o}=t.options;o===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:a}=t;n.onExitComplete&&n.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const jl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Oc=["","X","Y","Z"],X3=1e3;let $3=0;function Bc(e,t,n,a){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),a&&(a[e]=0))}function F1(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=h1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",pe,!(i||r))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&F1(a)}function Q1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:a,resetTransform:i}){return class{constructor(l={},o=t==null?void 0:t()){this.id=$3++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(F3),this.nodes.forEach(J3),this.nodes.forEach(W3),this.nodes.forEach(Q3)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Y3)}addEventListener(l,o){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new Gf),this.eventHandlers.get(l).add(o)}notifyListeners(l,...o){const c=this.eventHandlers.get(l);c&&c.notify(...o)}hasListeners(l){return this.eventHandlers.has(l)}mount(l){if(this.instance)return;this.isSVG=N1(l)&&!K4(l),this.instance=l;const{layoutId:o,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||o)&&(this.isLayoutDirty=!0),e){let u,m=0;const f=()=>this.root.updateBlockedByResize=!1;pe.read(()=>{m=window.innerWidth}),e(l,()=>{const x=window.innerWidth;x!==m&&(m=x,this.root.updateBlockedByResize=!0,u&&u(),u=q3(f,250),jl.hasAnimatedSinceResize&&(jl.hasAnimatedSinceResize=!1,this.nodes.forEach(dp)))})}o&&this.root.registerSharedNode(o,this),this.options.animate!==!1&&d&&(o||c)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:m,hasRelativeLayoutChanged:f,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||d.getDefaultTransition()||i7,{onLayoutAnimationStart:j,onLayoutAnimationComplete:T}=d.getProps(),g=!this.targetLayout||!$1(this.targetLayout,x),p=!m&&f;if(this.options.layoutRoot||this.resumeFrom||p||m&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const b={...tm(v,"layout"),onPlay:j,onComplete:T};(d.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b),this.setAnimationOrigin(u,p)}else m||dp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ca(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(e7),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&F1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const m=this.path[u];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:o,layout:c}=this.options;if(o===void 0&&!c)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(op);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(cp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(I3),this.nodes.forEach(P3),this.nodes.forEach(K3)):this.nodes.forEach(cp),this.clearAllSnapshots();const o=Ze.now();Ve.delta=Zt(0,1e3/60,o-Ve.timestamp),Ve.timestamp=o,Ve.isProcessing=!0,Tc.update.process(Ve),Tc.preRender.process(Ve),Tc.render.process(Ve),Ve.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,rm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Z3),this.sharedNodes.forEach(t7)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,pe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){pe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ie(this.snapshot.measuredBox.x)&&!Ie(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Ee(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(o=!1),o&&this.instance){const c=a(this.instance);this.scroll={animationId:this.root.animationId,phase:l,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const l=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!X1(this.projectionDelta),c=this.getTransformTemplate(),d=c?c(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;l&&this.instance&&(o||ka(this.latestValues)||u)&&(i(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const o=this.measurePageBox();let c=this.removeElementScroll(o);return l&&(c=this.removeTransform(c)),s7(c),{animationId:this.root.animationId,measuredBox:o,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:l}=this.options;if(!l)return Ee();const o=l.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some(r7))){const{scroll:u}=this.root;u&&(xi(o.x,u.offset.x),xi(o.y,u.offset.y))}return o}removeElementScroll(l){var c;const o=Ee();if(Lt(o,l),(c=this.scroll)!=null&&c.wasRoot)return o;for(let d=0;d<this.path.length;d++){const u=this.path[d],{scroll:m,options:f}=u;u!==this.root&&m&&f.layoutScroll&&(m.wasRoot&&Lt(o,l),xi(o.x,m.offset.x),xi(o.y,m.offset.y))}return o}applyTransform(l,o=!1){const c=Ee();Lt(c,l);for(let d=0;d<this.path.length;d++){const u=this.path[d];!o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&bi(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ka(u.latestValues)&&bi(c,u.latestValues)}return ka(this.latestValues)&&bi(c,this.latestValues),c}removeTransform(l){const o=Ee();Lt(o,l);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!d.instance||!ka(d.latestValues))continue;bu(d.latestValues)&&d.updateSnapshot();const u=Ee(),m=d.measurePageBox();Lt(u,m),W0(o,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,u)}return ka(this.latestValues)&&W0(o,this.latestValues),o}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ve.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){var x;const o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==o;if(!(l||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:m}=this.options;if(!this.layout||!(u||m))return;this.resolvedRelativeTargetAt=Ve.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ee(),this.targetWithTransforms=Ee()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),z3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Lt(this.target,this.layout.layoutBox),_1(this.target,this.targetDelta)):Lt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||bu(this.parent.latestValues)||M1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(l,o,c){this.relativeParent=l,this.linkedParentVersion=l.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ee(),this.relativeTargetOrigin=Ee(),oo(this.relativeTargetOrigin,o,c),Lt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var v;const l=this.getLead(),o=!!this.resumingFrom||this!==l;let c=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(c=!1),o&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ve.timestamp&&(c=!1),c)return;const{layout:d,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||u))return;Lt(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,f=this.treeScale.y;i3(this.layoutCorrected,this.treeScale,this.path,o),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=Ee());const{target:x}=l;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(K0(this.prevProjectionDelta.x,this.projectionDelta.x),K0(this.prevProjectionDelta.y,this.projectionDelta.y)),Ls(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==f||!ip(this.projectionDelta.x,this.prevProjectionDelta.x)||!ip(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){var o;if((o=this.options.visualElement)==null||o.scheduleRender(),l){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=gi(),this.projectionDelta=gi(),this.projectionDeltaWithTransform=gi()}setAnimationOrigin(l,o=!1){const c=this.snapshot,d=c?c.latestValues:{},u={...this.latestValues},m=gi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const f=Ee(),x=c?c.source:void 0,v=this.layout?this.layout.source:void 0,j=x!==v,T=this.getStack(),g=!T||T.members.length<=1,p=!!(j&&!g&&this.options.crossfade===!0&&!this.path.some(a7));this.animationProgress=0;let b;this.mixTargetDelta=y=>{const w=y/1e3;up(m.x,l.x,w),up(m.y,l.y,w),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(oo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),n7(this.relativeTarget,this.relativeTargetOrigin,f,w),b&&D3(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=Ee()),Lt(b,this.relativeTarget)),j&&(this.animationValues=u,B3(u,d,this.latestValues,w,p,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){var o,c,d;this.notifyListeners("animationStart"),(o=this.currentAnimation)==null||o.stop(),(d=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||d.stop(),this.pendingAnimation&&(ca(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=pe.update(()=>{jl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Gi(0)),this.currentAnimation=U3(this.motionValue,[0,1e3],{...l,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),l.onUpdate&&l.onUpdate(u)},onStop:()=>{},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(X3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:o,target:c,layout:d,latestValues:u}=l;if(!(!o||!c||!d)){if(this!==l&&this.layout&&d&&Z1(this.options.animationType,this.layout.layoutBox,d.layoutBox)){c=this.target||Ee();const m=Ie(this.layout.layoutBox.x);c.x.min=l.target.x.min,c.x.max=c.x.min+m;const f=Ie(this.layout.layoutBox.y);c.y.min=l.target.y.min,c.y.max=c.y.min+f}Lt(o,c),bi(o,u),Ls(this.projectionDeltaWithTransform,this.layoutCorrected,o,u)}}registerSharedNode(l,o){this.sharedNodes.has(l)||this.sharedNodes.set(l,new G3),this.sharedNodes.get(l).add(o);const d=o.options.initialPromotionConfig;o.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(o):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){var o;const{layoutId:l}=this.options;return l?((o=this.getStack())==null?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:l}=this.options;return l?(o=this.getStack())==null?void 0:o.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:o,preserveFollowOpacity:c}={}){const d=this.getStack();d&&d.promote(this,c),l&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetSkewAndRotation(){const{visualElement:l}=this.options;if(!l)return;let o=!1;const{latestValues:c}=l;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(o=!0),!o)return;const d={};c.z&&Bc("z",l,d,this.animationValues);for(let u=0;u<Oc.length;u++)Bc(`rotate${Oc[u]}`,l,d,this.animationValues),Bc(`skew${Oc[u]}`,l,d,this.animationValues);l.render();for(const u in d)l.setStaticValue(u,d[u]),this.animationValues&&(this.animationValues[u]=d[u]);l.scheduleRender()}applyProjectionStyles(l,o){if(!this.instance||this.isSVG)return;if(!this.isVisible){l.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,l.visibility="",l.opacity="",l.pointerEvents=vl(o==null?void 0:o.pointerEvents)||"",l.transform=c?c(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(l.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,l.pointerEvents=vl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ka(this.latestValues)&&(l.transform=c?c({},""):"none",this.hasProjected=!1);return}l.visibility="";const u=d.animationValues||d.latestValues;this.applyTransformsToTarget();let m=R3(this.projectionDeltaWithTransform,this.treeScale,u);c&&(m=c(u,m)),l.transform=m;const{x:f,y:x}=this.projectionDelta;l.transformOrigin=`${f.origin*100}% ${x.origin*100}% 0`,d.animationValues?l.opacity=d===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:l.opacity=d===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const v in vu){if(u[v]===void 0)continue;const{correct:j,applyTo:T,isCSSVariable:g}=vu[v],p=m==="none"?u[v]:j(u[v],d);if(T){const b=T.length;for(let y=0;y<b;y++)l[T[y]]=p}else g?this.options.visualElement.renderState.vars[v]=p:l[v]=p}this.options.layoutId&&(l.pointerEvents=d===this?vl(o==null?void 0:o.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>{var o;return(o=l.currentAnimation)==null?void 0:o.stop()}),this.root.nodes.forEach(op),this.root.sharedNodes.clear()}}}function P3(e){e.updateLayout()}function K3(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:i}=e.layout,{animationType:r}=e.options,l=t.source!==e.layout.source;r==="size"?jt(m=>{const f=l?t.measuredBox[m]:t.layoutBox[m],x=Ie(f);f.min=a[m].min,f.max=f.min+x}):Z1(r,t.layoutBox,a)&&jt(m=>{const f=l?t.measuredBox[m]:t.layoutBox[m],x=Ie(a[m]);f.max=f.min+x,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[m].max=e.relativeTarget[m].min+x)});const o=gi();Ls(o,a,t.layoutBox);const c=gi();l?Ls(c,e.applyTransform(i,!0),t.measuredBox):Ls(c,a,t.layoutBox);const d=!X1(o);let u=!1;if(!e.resumeFrom){const m=e.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:f,layout:x}=m;if(f&&x){const v=Ee();oo(v,t.layoutBox,f.layoutBox);const j=Ee();oo(j,a,x.layoutBox),$1(v,j)||(u=!0),m.options.layoutRoot&&(e.relativeTarget=j,e.relativeTargetOrigin=v,e.relativeParent=m)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:t,delta:c,layoutDelta:o,hasLayoutChanged:d,hasRelativeLayoutChanged:u})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function F3(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Q3(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Z3(e){e.clearSnapshot()}function op(e){e.clearMeasurements()}function cp(e){e.isLayoutDirty=!1}function I3(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function dp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function J3(e){e.resolveTargetDelta()}function W3(e){e.calcProjection()}function e7(e){e.resetSkewAndRotation()}function t7(e){e.removeLeadSnapshot()}function up(e,t,n){e.translate=be(t.translate,0,n),e.scale=be(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function fp(e,t,n,a){e.min=be(t.min,n.min,a),e.max=be(t.max,n.max,a)}function n7(e,t,n,a){fp(e.x,t.x,n.x,a),fp(e.y,t.y,n.y,a)}function a7(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const i7={duration:.45,ease:[.4,0,.1,1]},mp=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),hp=mp("applewebkit/")&&!mp("chrome/")?Math.round:_t;function pp(e){e.min=hp(e.min),e.max=hp(e.max)}function s7(e){pp(e.x),pp(e.y)}function Z1(e,t,n){return e==="position"||e==="preserve-aspect"&&!C3(ap(t),ap(n),.2)}function r7(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const l7=Q1({attachResizeListener:(e,t)=>rr(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Lc={current:void 0},I1=Q1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Lc.current){const e=new l7({});e.mount(window),e.setOptions({layoutScroll:!0}),Lc.current=e}return Lc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),J1=A.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function o7(e=!0){const t=A.useContext(Vf);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:a,register:i}=t,r=A.useId();A.useEffect(()=>{if(e)return i(r)},[e]);const l=A.useCallback(()=>e&&a&&a(r),[r,a,e]);return!n&&a?[!1,l]:[!0]}const W1=A.createContext({strict:!1}),gp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let xp=!1;function c7(){if(xp)return;const e={};for(const t in gp)e[t]={isEnabled:n=>gp[t].some(a=>!!n[a])};C1(e),xp=!0}function ev(){return c7(),e3()}function d7(e){const t=ev();for(const n in e)t[n]={...t[n],...e[n]};C1(t)}const u7=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function co(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||u7.has(e)}let tv=e=>!co(e);function f7(e){typeof e=="function"&&(tv=t=>t.startsWith("on")?!co(t):e(t))}try{f7(require("@emotion/is-prop-valid").default)}catch{}function m7(e,t,n){const a={};for(const i in e)i==="values"&&typeof e.values=="object"||(tv(i)||n===!0&&co(i)||!t&&!co(i)||e.draggable&&i.startsWith("onDrag"))&&(a[i]=e[i]);return a}const Uo=A.createContext({});function h7(e,t){if(Vo(e)){const{initial:n,animate:a}=e;return{initial:n===!1||sr(n)?n:void 0,animate:sr(a)?a:void 0}}return e.inherit!==!1?t:{}}function p7(e){const{initial:t,animate:n}=h7(e,A.useContext(Uo));return A.useMemo(()=>({initial:t,animate:n}),[bp(t),bp(n)])}function bp(e){return Array.isArray(e)?e.join(" "):e}const fm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function nv(e,t,n){for(const a in t)!Pe(t[a])&&!O1(a,n)&&(e[a]=t[a])}function g7({transformTemplate:e},t){return A.useMemo(()=>{const n=fm();return dm(n,t,e),Object.assign({},n.vars,n.style)},[t])}function x7(e,t){const n=e.style||{},a={};return nv(a,n,e),Object.assign(a,g7(e,t)),a}function b7(e,t){const n={},a=x7(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=a,n}const av=()=>({...fm(),attrs:{}});function y7(e,t,n,a){const i=A.useMemo(()=>{const r=av();return B1(r,t,V1(a),e.transformTemplate,e.style),{...r.attrs,style:{...r.style}}},[t]);if(e.style){const r={};nv(r,e.style,e),i.style={...r,...i.style}}return i}const v7=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function mm(e){return typeof e!="string"||e.includes("-")?!1:!!(v7.indexOf(e)>-1||/[A-Z]/u.test(e))}function j7(e,t,n,{latestValues:a},i,r=!1,l){const c=(l??mm(e)?y7:b7)(t,a,i,e),d=m7(t,typeof e=="string",r),u=e!==A.Fragment?{...d,...c,ref:n}:{},{children:m}=t,f=A.useMemo(()=>Pe(m)?m.get():m,[m]);return A.createElement(e,{...u,children:f})}function w7({scrapeMotionValuesFromProps:e,createRenderState:t},n,a,i){return{latestValues:S7(n,a,i,e),renderState:t()}}function S7(e,t,n,a){const i={},r=a(e,{});for(const f in r)i[f]=vl(r[f]);let{initial:l,animate:o}=e;const c=Vo(e),d=T1(e);t&&d&&!c&&e.inherit!==!1&&(l===void 0&&(l=t.initial),o===void 0&&(o=t.animate));let u=n?n.initial===!1:!1;u=u||l===!1;const m=u?o:l;if(m&&typeof m!="boolean"&&!Lo(m)){const f=Array.isArray(m)?m:[m];for(let x=0;x<f.length;x++){const v=am(e,f[x]);if(v){const{transitionEnd:j,transition:T,...g}=v;for(const p in g){let b=g[p];if(Array.isArray(b)){const y=u?b.length-1:0;b=b[y]}b!==null&&(i[p]=b)}for(const p in j)i[p]=j[p]}}}return i}const iv=e=>(t,n)=>{const a=A.useContext(Uo),i=A.useContext(Vf),r=()=>w7(e,t,a,i);return n?r():Bw(r)},k7=iv({scrapeMotionValuesFromProps:um,createRenderState:fm}),N7=iv({scrapeMotionValuesFromProps:U1,createRenderState:av}),A7=Symbol.for("motionComponentSymbol");function T7(e,t,n){const a=A.useRef(n);A.useInsertionEffect(()=>{a.current=n});const i=A.useRef(null);return A.useCallback(r=>{var o;r&&((o=e.onMount)==null||o.call(e,r)),t&&(r?t.mount(r):t.unmount());const l=a.current;if(typeof l=="function")if(r){const c=l(r);typeof c=="function"&&(i.current=c)}else i.current?(i.current(),i.current=null):l(r);else l&&(l.current=r)},[t])}const sv=A.createContext({});function ys(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function C7(e,t,n,a,i,r){var g,p;const{visualElement:l}=A.useContext(Uo),o=A.useContext(W1),c=A.useContext(Vf),d=A.useContext(J1).reducedMotion,u=A.useRef(null),m=A.useRef(!1);a=a||o.renderer,!u.current&&a&&(u.current=a(e,{visualState:t,parent:l,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d,isSVG:r}),m.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));const f=u.current,x=A.useContext(sv);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&z7(u.current,n,i,x);const v=A.useRef(!1);A.useInsertionEffect(()=>{f&&v.current&&f.update(n,c)});const j=n[m1],T=A.useRef(!!j&&!((g=window.MotionHandoffIsComplete)!=null&&g.call(window,j))&&((p=window.MotionHasOptimisedAnimation)==null?void 0:p.call(window,j)));return Lw(()=>{m.current=!0,f&&(v.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),T.current&&f.animationState&&f.animationState.animateChanges())}),A.useEffect(()=>{f&&(!T.current&&f.animationState&&f.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var b;(b=window.MotionHandoffMarkAsComplete)==null||b.call(window,j)}),T.current=!1),f.enteringChildren=void 0)}),f}function z7(e,t,n,a){const{layoutId:i,layout:r,drag:l,dragConstraints:o,layoutScroll:c,layoutRoot:d,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:rv(e.parent)),e.projection.setOptions({layoutId:i,layout:r,alwaysMeasureLayout:!!l||o&&ys(o),visualElement:e,animationType:typeof r=="string"?r:"both",initialPromotionConfig:a,crossfade:u,layoutScroll:c,layoutRoot:d})}function rv(e){if(e)return e.options.allowProjection!==!1?e.projection:rv(e.parent)}function Vc(e,{forwardMotionProps:t=!1,type:n}={},a,i){a&&d7(a);const r=n?n==="svg":mm(e),l=r?N7:k7;function o(d,u){let m;const f={...A.useContext(J1),...d,layoutId:E7(d)},{isStatic:x}=f,v=p7(d),j=l(d,x);if(!x&&Ey){M7();const T=_7(f);m=T.MeasureLayout,v.visualElement=C7(e,j,f,i,T.ProjectionNode,r)}return s.jsxs(Uo.Provider,{value:v,children:[m&&v.visualElement?s.jsx(m,{visualElement:v.visualElement,...f}):null,j7(e,d,T7(j,v.visualElement,u),j,x,t,r)]})}o.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=A.forwardRef(o);return c[A7]=e,c}function E7({layoutId:e}){const t=A.useContext(zy).id;return t&&e!==void 0?t+"-"+e:e}function M7(e,t){A.useContext(W1).strict}function _7(e){const t=ev(),{drag:n,layout:a}=t;if(!n&&!a)return{};const i={...n,...a};return{MeasureLayout:n!=null&&n.isEnabled(e)||a!=null&&a.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function D7(e,t){if(typeof Proxy>"u")return Vc;const n=new Map,a=(r,l)=>Vc(r,l,e,t),i=(r,l)=>a(r,l);return new Proxy(i,{get:(r,l)=>l==="create"?a:(n.has(l)||n.set(l,Vc(l,void 0,e,t)),n.get(l))})}const R7=(e,t)=>t.isSVG??mm(e)?new x3(t):new u3(t,{allowProjection:e!==A.Fragment});class O7 extends ma{constructor(t){super(t),t.animationState||(t.animationState=w3(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Lo(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let B7=0;class L7 extends ma{constructor(){super(...arguments),this.id=B7++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const V7={animation:{Feature:O7},exit:{Feature:L7}};function Nr(e){return{point:{x:e.pageX,y:e.pageY}}}const U7=e=>t=>lm(t)&&e(t,Nr(t));function Vs(e,t,n,a){return rr(e,t,U7(n),a)}const lv=({current:e})=>e?e.ownerDocument.defaultView:null,yp=(e,t)=>Math.abs(e-t);function H7(e,t){const n=yp(e.x,t.x),a=yp(e.y,t.y);return Math.sqrt(n**2+a**2)}const vp=new Set(["auto","scroll"]);class ov{constructor(t,n,{transformPagePoint:a,contextWindow:i=window,dragSnapToOrigin:r=!1,distanceThreshold:l=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=x=>{this.handleScroll(x.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Hc(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,j=H7(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!j)return;const{point:T}=x,{timestamp:g}=Ve;this.history.push({...T,timestamp:g});const{onStart:p,onMove:b}=this.handlers;v||(p&&p(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,x)},this.handlePointerMove=(x,v)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Uc(v,this.transformPagePoint),pe.update(this.updatePoint,!0)},this.handlePointerUp=(x,v)=>{this.end();const{onEnd:j,onSessionEnd:T,resumeAnimation:g}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Hc(x.type==="pointercancel"?this.lastMoveEventInfo:Uc(v,this.transformPagePoint),this.history);this.startEvent&&j&&j(x,p),T&&T(x,p)},!lm(t))return;this.dragSnapToOrigin=r,this.handlers=n,this.transformPagePoint=a,this.distanceThreshold=l,this.contextWindow=i||window;const c=Nr(t),d=Uc(c,this.transformPagePoint),{point:u}=d,{timestamp:m}=Ve;this.history=[{...u,timestamp:m}];const{onSessionStart:f}=n;f&&f(t,Hc(d,this.history)),this.removeListeners=wr(Vs(this.contextWindow,"pointermove",this.handlePointerMove),Vs(this.contextWindow,"pointerup",this.handlePointerUp),Vs(this.contextWindow,"pointercancel",this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(t){let n=t.parentElement;for(;n;){const a=getComputedStyle(n);(vp.has(a.overflowX)||vp.has(a.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const a=t===window,i=a?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},r={x:i.x-n.x,y:i.y-n.y};r.x===0&&r.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=r.x,this.lastMoveEventInfo.point.y+=r.y):this.history.length>0&&(this.history[0].x-=r.x,this.history[0].y-=r.y),this.scrollPositions.set(t,i),pe.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ca(this.updatePoint)}}function Uc(e,t){return t?{point:t(e.point)}:e}function jp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Hc({point:e},t){return{point:e,delta:jp(e,cv(t)),offset:jp(e,Y7(t)),velocity:q7(t,.1)}}function Y7(e){return e[0]}function cv(e){return e[e.length-1]}function q7(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,a=null;const i=cv(e);for(;n>=0&&(a=e[n],!(i.timestamp-a.timestamp>jn(t)));)n--;if(!a)return{x:0,y:0};const r=zt(i.timestamp-a.timestamp);if(r===0)return{x:0,y:0};const l={x:(i.x-a.x)/r,y:(i.y-a.y)/r};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function G7(e,{min:t,max:n},a){return t!==void 0&&e<t?e=a?be(t,e,a.min):Math.max(e,t):n!==void 0&&e>n&&(e=a?be(n,e,a.max):Math.min(e,n)),e}function wp(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function X7(e,{top:t,left:n,bottom:a,right:i}){return{x:wp(e.x,n,i),y:wp(e.y,t,a)}}function Sp(e,t){let n=t.min-e.min,a=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,a]=[a,n]),{min:n,max:a}}function $7(e,t){return{x:Sp(e.x,t.x),y:Sp(e.y,t.y)}}function P7(e,t){let n=.5;const a=Ie(e),i=Ie(t);return i>a?n=nr(t.min,t.max-a,e.min):a>i&&(n=nr(e.min,e.max-i,t.min)),Zt(0,1,n)}function K7(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const ju=.35;function F7(e=ju){return e===!1?e=0:e===!0&&(e=ju),{x:kp(e,"left","right"),y:kp(e,"top","bottom")}}function kp(e,t,n){return{min:Np(e,t),max:Np(e,n)}}function Np(e,t){return typeof e=="number"?e:e[t]||0}const Q7=new WeakMap;class Z7{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ee(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:a}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=m=>{n?(this.stopAnimation(),this.snapToCursor(Nr(m).point)):this.pauseAnimation()},l=(m,f)=>{this.stopAnimation();const{drag:x,dragPropagation:v,onDragStart:j}=this.getProps();if(x&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=q4(x),!this.openDragLock))return;this.latestPointerEvent=m,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jt(g=>{let p=this.getAxisMotionValue(g).get()||0;if(Qt.test(p)){const{projection:b}=this.visualElement;if(b&&b.layout){const y=b.layout.layoutBox[g];y&&(p=Ie(y)*(parseFloat(p)/100))}}this.originPoint[g]=p}),j&&pe.postRender(()=>j(m,f)),hu(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},o=(m,f)=>{this.latestPointerEvent=m,this.latestPanInfo=f;const{dragPropagation:x,dragDirectionLock:v,onDirectionLock:j,onDrag:T}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:g}=f;if(v&&this.currentDirection===null){this.currentDirection=I7(g),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",f.point,g),this.updateAxis("y",f.point,g),this.visualElement.render(),T&&T(m,f)},c=(m,f)=>{this.latestPointerEvent=m,this.latestPanInfo=f,this.stop(m,f),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>jt(m=>{var f;return this.getAnimationState(m)==="paused"&&((f=this.getAxisMotionValue(m).animation)==null?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new ov(t,{onSessionStart:r,onStart:l,onMove:o,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:a,contextWindow:lv(this.visualElement),element:this.visualElement.current})}stop(t,n){const a=t||this.latestPointerEvent,i=n||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!i||!a)return;const{velocity:l}=i;this.startAnimation(l);const{onDragEnd:o}=this.getProps();o&&pe.postRender(()=>o(a,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,a){const{drag:i}=this.getProps();if(!a||!Kr(t,i,this.currentDirection))return;const r=this.getAxisMotionValue(t);let l=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(l=G7(l,this.constraints[t],this.elastic[t])),r.set(l)}resolveConstraints(){var r;const{dragConstraints:t,dragElastic:n}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)==null?void 0:r.layout,i=this.constraints;t&&ys(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=X7(a.layoutBox,t):this.constraints=!1,this.elastic=F7(n),i!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&jt(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=K7(a.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ys(t))return!1;const a=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const r=s3(a,i.root,this.visualElement.getTransformPagePoint());let l=$7(i.layout.layoutBox,r);if(n){const o=n(n3(l));this.hasMutatedConstraints=!!o,o&&(l=E1(o))}return l}startAnimation(t){const{drag:n,dragMomentum:a,dragElastic:i,dragTransition:r,dragSnapToOrigin:l,onDragTransitionEnd:o}=this.getProps(),c=this.constraints||{},d=jt(u=>{if(!Kr(u,n,this.currentDirection))return;let m=c&&c[u]||{};l&&(m={min:0,max:0});const f=i?200:1e6,x=i?40:1e7,v={type:"inertia",velocity:a?t[u]:0,bounceStiffness:f,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...r,...m};return this.startAxisValueAnimation(u,v)});return Promise.all(d).then(o)}startAxisValueAnimation(t,n){const a=this.getAxisMotionValue(t);return hu(this.visualElement,t),a.start(nm(t,a,0,n,this.visualElement,!1))}stopAnimation(){jt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){jt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),i=a[n];return i||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){jt(n=>{const{drag:a}=this.getProps();if(!Kr(n,a,this.currentDirection))return;const{projection:i}=this.visualElement,r=this.getAxisMotionValue(n);if(i&&i.layout){const{min:l,max:o}=i.layout.layoutBox[n],c=r.get()||0;r.set(t[n]-be(l,o,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:a}=this.visualElement;if(!ys(n)||!a||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};jt(l=>{const o=this.getAxisMotionValue(l);if(o&&this.constraints!==!1){const c=o.get();i[l]=P7({min:c,max:c},this.constraints[l])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),jt(l=>{if(!Kr(l,t,null))return;const o=this.getAxisMotionValue(l),{min:c,max:d}=this.constraints[l];o.set(be(c,d,i[l]))})}addListeners(){if(!this.visualElement.current)return;Q7.set(this.visualElement,this);const t=this.visualElement.current,n=Vs(t,"pointerdown",c=>{const{drag:d,dragListener:u=!0}=this.getProps(),m=c.target,f=m!==t&&k1(m);d&&u&&!f&&this.start(c)}),a=()=>{const{dragConstraints:c}=this.getProps();ys(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,r=i.addEventListener("measure",a);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),pe.read(a);const l=rr(window,"resize",()=>this.scalePositionWithinConstraints()),o=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(jt(u=>{const m=this.getAxisMotionValue(u);m&&(this.originPoint[u]+=c[u].translate,m.set(m.get()+c[u].translate))}),this.visualElement.render())});return()=>{l(),n(),r(),o&&o()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:a=!1,dragPropagation:i=!1,dragConstraints:r=!1,dragElastic:l=ju,dragMomentum:o=!0}=t;return{...t,drag:n,dragDirectionLock:a,dragPropagation:i,dragConstraints:r,dragElastic:l,dragMomentum:o}}}function Kr(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function I7(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class J7 extends ma{constructor(t){super(t),this.removeGroupControls=_t,this.removeListeners=_t,this.controls=new Z7(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_t}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Ap=e=>(t,n)=>{e&&pe.postRender(()=>e(t,n))};class W7 extends ma{constructor(){super(...arguments),this.removePointerDownListener=_t}onPointerDown(t){this.session=new ov(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:lv(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:a,onPanEnd:i}=this.node.getProps();return{onSessionStart:Ap(t),onStart:Ap(n),onMove:a,onEnd:(r,l)=>{delete this.session,i&&pe.postRender(()=>i(r,l))}}}mount(){this.removePointerDownListener=Vs(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Yc=!1;class ek extends A.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a,layoutId:i}=this.props,{projection:r}=t;r&&(n.group&&n.group.add(r),a&&a.register&&i&&a.register(r),Yc&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),jl.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:a,drag:i,isPresent:r}=this.props,{projection:l}=a;return l&&(l.isPresent=r,t.layoutDependency!==n&&l.setOptions({...l.options,layoutDependency:n}),Yc=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==r?l.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?l.promote():l.relegate()||pe.postRender(()=>{const o=l.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),rm.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a}=this.props,{projection:i}=t;Yc=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),a&&a.deregister&&a.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function dv(e){const[t,n]=o7(),a=A.useContext(zy);return s.jsx(ek,{...e,layoutGroup:a,switchLayoutGroup:A.useContext(sv),isPresent:t,safeToRemove:n})}const tk={pan:{Feature:W7},drag:{Feature:J7,ProjectionNode:I1,MeasureLayout:dv}};function Tp(e,t,n){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,r=a[i];r&&pe.postRender(()=>r(t,Nr(t)))}class nk extends ma{mount(){const{current:t}=this.node;t&&(this.unmount=G4(t,(n,a)=>(Tp(this.node,a,"Start"),i=>Tp(this.node,i,"End"))))}unmount(){}}class ak extends ma{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=wr(rr(this.node.current,"focus",()=>this.onFocus()),rr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Cp(e,t,n){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),r=a[i];r&&pe.postRender(()=>r(t,Nr(t)))}class ik extends ma{mount(){const{current:t}=this.node;t&&(this.unmount=P4(t,(n,a)=>(Cp(this.node,a,"Start"),(i,{success:r})=>Cp(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const wu=new WeakMap,qc=new WeakMap,sk=e=>{const t=wu.get(e.target);t&&t(e)},rk=e=>{e.forEach(sk)};function lk({root:e,...t}){const n=e||document;qc.has(n)||qc.set(n,{});const a=qc.get(n),i=JSON.stringify(t);return a[i]||(a[i]=new IntersectionObserver(rk,{root:e,...t})),a[i]}function ok(e,t,n){const a=lk(t);return wu.set(e,n),a.observe(e),()=>{wu.delete(e),a.unobserve(e)}}const ck={some:0,all:1};class dk extends ma{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:a,amount:i="some",once:r}=t,l={root:n?n.current:void 0,rootMargin:a,threshold:typeof i=="number"?i:ck[i]},o=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,r&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:m}=this.node.getProps(),f=d?u:m;f&&f(c)};return ok(this.node.current,l,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(uk(t,n))&&this.startObserver()}unmount(){}}function uk({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const fk={inView:{Feature:dk},tap:{Feature:ik},focus:{Feature:ak},hover:{Feature:nk}},mk={layout:{ProjectionNode:I1,MeasureLayout:dv}},hk={...V7,...fk,...tk,...mk},hm=D7(hk,R7),Su="/api",pk=()=>{const e=localStorage.getItem("access_token");return e?{Authorization:`Bearer ${e}`}:{}},Y=async(e,t={})=>{const n=`${Su}${e}`,r={headers:{...t.body instanceof FormData?{}:{"Content-Type":"application/json"},...pk(),...t.headers},...t};try{const l=await fetch(n,r);if(l.status===401){const o=localStorage.getItem("refresh_token");if(o)try{const c=await fetch(`${Su}/auth/token/refresh/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh:o})});if(c.ok){const d=await c.json();localStorage.setItem("access_token",d.access),r.headers.Authorization=`Bearer ${d.access}`;const u=await fetch(n,r);return await ku(u)}}catch(c){console.error("Token refresh failed:",c)}throw localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user"),window.location.reload(),new Error("Authentication failed")}return await ku(l)}catch(l){throw console.error("API request failed:",l),l}},ku=async e=>{const t=await e.json();if(!e.ok){const n=new Error(t.detail||t.message||"API request failed");throw n.status=e.status,n.data=t,n}return t},ft={login:async(e,t)=>{const n=await fetch(`${Su}/auth/token/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}),a=await ku(n);return localStorage.setItem("access_token",a.access),localStorage.setItem("refresh_token",a.refresh),localStorage.setItem("user",JSON.stringify(a.user)),a},logout:async()=>{try{const e=localStorage.getItem("refresh_token");e&&await Y("/users/logout/",{method:"POST",body:JSON.stringify({refresh:e})})}catch(e){console.error("Logout API call failed:",e)}finally{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user")}},register:async e=>await Y("/users/register/",{method:"POST",body:JSON.stringify(e)}),getProfile:async()=>await Y("/users/profile/"),updateProfile:async e=>await Y("/users/profile/",{method:"PUT",body:JSON.stringify(e)}),getUsers:async()=>await Y("/users/list/"),createUser:async e=>{const{profile_picture:t,...n}=e;return await Y("/users/create/",{method:"POST",body:JSON.stringify(n)})},updateUser:async(e,t)=>{const{profile_picture:n,...a}=t;return await Y(`/users/${e}/`,{method:"PUT",body:JSON.stringify(a)})},changePassword:async e=>await Y("/users/change-password/",{method:"POST",body:JSON.stringify(e)}),forgotPassword:async e=>await Y("/users/forgot-password/",{method:"POST",body:JSON.stringify(e)}),adminResetPassword:async(e,t)=>await Y(`/users/${e}/reset-password/`,{method:"POST",body:JSON.stringify(t)}),deleteUser:async e=>await Y(`/users/${e}/`,{method:"DELETE"})},Ca={getVehicles:async(e={})=>{const t=new URLSearchParams(e).toString(),n=t?`/vehicles/?${t}`:"/vehicles/";return await Y(n)},getVehicle:async e=>await Y(`/vehicles/${e}/`),createVehicle:async e=>{const t=new FormData;return Object.keys(e).forEach(n=>{const a=e[n];a!=null&&a!==""&&(n==="image"&&a instanceof File,t.append(n,a))}),await Y("/vehicles/",{method:"POST",headers:{},body:t})},updateVehicle:async(e,t)=>{const n=new FormData;return Object.keys(t).forEach(a=>{const i=t[a];a==="image"&&!(i instanceof File)||i!=null&&i!==""&&(a==="image"&&i instanceof File,n.append(a,i))}),await Y(`/vehicles/${e}/`,{method:"PATCH",headers:{},body:n})},deleteVehicle:async e=>await Y(`/vehicles/${e}/`,{method:"DELETE"}),getVehicleMaintenance:async e=>await Y(`/vehicles/${e}/maintenance/`),addMaintenance:async(e,t)=>await Y(`/vehicles/${e}/maintenance/`,{method:"POST",body:JSON.stringify(t)}),updateMaintenance:async(e,t)=>await Y(`/vehicles/maintenance/${e}/`,{method:"PUT",body:JSON.stringify(t)}),deleteMaintenance:async e=>await Y(`/vehicles/maintenance/${e}/`,{method:"DELETE"}),getAllMaintenance:async(e={})=>{const t=new URLSearchParams(e).toString(),n=t?`/vehicles/maintenance/?${t}`:"/vehicles/maintenance/";return await Y(n)}},ia={getAccessories:async(e={})=>{const t=new URLSearchParams(e).toString(),n=t?`/accessories/?${t}`:"/accessories/";return await Y(n)},getAccessory:async e=>await Y(`/accessories/${e}/`),createAccessory:async e=>{const t=new FormData;return Object.keys(e).forEach(n=>{e[n]!==null&&e[n]!==void 0&&((n==="image"||n==="receipt")&&e[n]instanceof File,t.append(n,e[n]))}),await Y("/accessories/",{method:"POST",headers:{},body:t})},updateAccessory:async(e,t)=>{const n=new FormData;return Object.keys(t).forEach(a=>{t[a]!==null&&t[a]!==void 0&&(a==="image"&&t[a]instanceof File,n.append(a,t[a]))}),await Y(`/accessories/${e}/`,{method:"PUT",headers:{},body:n})},deleteAccessory:async e=>await Y(`/accessories/${e}/`,{method:"DELETE"}),updateStock:async(e,t,n="")=>await Y(`/accessories/${e}/update_stock/`,{method:"PATCH",body:JSON.stringify({stock_change:t,reason:n})}),getStockAlerts:async()=>await Y("/accessories/alerts/"),resolveStockAlert:async e=>await Y(`/accessories/alerts/${e}/resolve/`,{method:"PATCH"})},wl={getMessages:async(e={})=>{const t=new URLSearchParams(e).toString(),n=t?`/messages/?${t}`:"/messages/";return await Y(n)},getInbox:async()=>await Y("/messages/inbox/"),getSent:async()=>await Y("/messages/sent/"),sendMessage:async e=>await Y("/messages/",{method:"POST",body:JSON.stringify(e)}),markAsRead:async e=>await Y(`/messages/${e}/mark_read/`,{method:"PATCH"}),deleteMessage:async e=>await Y(`/messages/${e}/`,{method:"DELETE"})},Us={getNotifications:async(e={})=>{const t=new URLSearchParams(e).toString(),n=t?`/notifications/?${t}`:"/notifications/";return await Y(n)},getUnread:async()=>await Y("/notifications/unread/"),markAsRead:async e=>await Y(`/notifications/${e}/mark_read/`,{method:"PATCH"}),createNotification:async e=>await Y("/notifications/",{method:"POST",body:JSON.stringify(e)}),broadcastNotification:async e=>await Y("/notifications/broadcast/",{method:"POST",body:JSON.stringify(e)}),deleteNotification:async e=>await Y(`/notifications/${e}/`,{method:"DELETE"})},lr={getReports:async(e={})=>{const t=new URLSearchParams(e).toString(),n=t?`/users/reports/?${t}`:"/users/reports/";return await Y(n)},getReport:async e=>await Y(`/users/reports/${e}/`),createReport:async e=>await Y("/users/reports/",{method:"POST",body:JSON.stringify(e)})},or={getIssues:async(e={})=>{const t=new URLSearchParams(e).toString(),n=t?`/users/issues/?${t}`:"/users/issues/";return await Y(n)},getIssue:async e=>await Y(`/users/issues/${e}/`),createIssue:async e=>await Y("/users/issues/",{method:"POST",body:JSON.stringify(e)})},gk=()=>!!localStorage.getItem("access_token"),uv=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},pm=e=>{const t=uv();return t&&t.role===e},uo=()=>pm("admin"),Nu=()=>pm("driver"),Au=()=>pm("mechanic"),xk=h.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,bk=h.div`
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`,yk=h.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #f8fafc;
    margin: 0 0 0.5rem 0;
  }

  p {
    color: #94a3b8;
    font-size: 0.875rem;
  }
`,vk=h.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,jk=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,wk=h.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #f1f5f9;
`,Sk=h.input`
  padding: 1rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #f8fafc;
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    background: rgba(30, 41, 59, 0.8);
  }

  &::placeholder {
    color: #64748b;
  }
`,kk=h.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`,zp=h.button`
  flex: 1;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${e=>e.$primary?`
    background: #3b82f6;
    color: white;
    border: none;

    &:hover {
      background: #2563eb;
    }
  `:`
    background: rgba(30, 41, 59, 0.5);
    color: #f8fafc;
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      background: rgba(30, 41, 59, 0.8);
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Nk=h.div`
  color: #dc2626;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1rem;
`,Ak=h.div`
  color: #059669;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1rem;
`,Tk=h.button`
  background: none;
  border: none;
  color: #60a5fa;
  font-size: 0.875rem;
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: #3b82f6;
    text-decoration: underline;
  }
`,Ck=({isOpen:e,onClose:t,onBackToLogin:n})=>{const[a,i]=A.useState(""),[r,l]=A.useState(!1),[o,c]=A.useState(""),[d,u]=A.useState(""),m=j=>{i(j.target.value),o&&c(""),d&&u("")},f=()=>a?/\S+@\S+\.\S+/.test(a)?!0:(c("Please enter a valid email address"),!1):(c("Email is required"),!1),x=async j=>{if(j.preventDefault(),c(""),u(""),!!f()){l(!0);try{await ft.forgotPassword({email:a}),u("Password reset instructions have been sent to your email."),i(""),setTimeout(()=>{t()},3e3)}catch(T){console.error("Forgot password error:",T),c(T.message||"Failed to send reset email. Please try again.")}finally{l(!1)}}},v=()=>{i(""),c(""),u(""),t()};return e?s.jsx(xk,{onClick:v,children:s.jsxs(bk,{onClick:j=>j.stopPropagation(),children:[s.jsxs(yk,{children:[s.jsx("h2",{children:"Forgot Password"}),s.jsx("p",{children:"Enter your email address and we'll send you a link to reset your password"})]}),s.jsxs(vk,{onSubmit:x,children:[s.jsxs(jk,{children:[s.jsx(wk,{htmlFor:"email",children:"Email Address"}),s.jsx(Sk,{type:"email",id:"email",value:a,onChange:m,placeholder:"Enter your email",required:!0})]}),s.jsxs(kk,{children:[s.jsx(zp,{type:"button",onClick:v,disabled:r,children:"Cancel"}),s.jsx(zp,{type:"submit",$primary:!0,disabled:r,children:r?"Sending...":"Send Reset Link"})]}),o&&s.jsx(Nk,{children:o}),d&&s.jsx(Ak,{children:d})]}),s.jsx(Tk,{onClick:n,children:"Back to Login"})]})}):null},zk=({onLogin:e})=>{const[t,n]=A.useState(""),[a,i]=A.useState(""),[r,l]=A.useState(!1),[o,c]=A.useState(!1),[d,u]=A.useState(!1),[m,f]=A.useState(!0),[x,v]=A.useState(""),[j,T]=A.useState(!1),g=async w=>{w.preventDefault(),l(!0),v("");try{const k=await ft.login(t,a);localStorage.setItem("user_role",k.user.role),l(!1),e&&e(k.user)}catch(k){l(!1),v(k.message||"Login failed. Please check your credentials."),console.error("Login error:",k)}},p=()=>{T(!0)},b=()=>{T(!1)},y=()=>{T(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(_k,{}),s.jsxs(Dk,{children:[s.jsx(Rk,{}),s.jsx(Ok,{}),s.jsxs(Bk,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[s.jsxs(Lk,{children:[s.jsxs(Vk,{children:[s.jsx(Uk,{children:s.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[s.jsx("path",{d:"M16 2L4 10V22L16 30L28 22V10L16 2Z",fill:"url(#gradient)",stroke:"currentColor",strokeWidth:"2"}),s.jsx("path",{d:"M16 10L10 14V20L16 24L22 20V14L16 10Z",fill:"currentColor",fillOpacity:"0.2"}),s.jsx("circle",{cx:"16",cy:"17",r:"3",fill:"currentColor"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"gradient",x1:"16",y1:"2",x2:"16",y2:"30",gradientUnits:"userSpaceOnUse",children:[s.jsx("stop",{stopColor:"#3B82F6"}),s.jsx("stop",{offset:"1",stopColor:"#1D4ED8"})]})})]})}),s.jsxs(Hk,{children:[s.jsx("span",{children:"ICT.Fleet"}),"Pro"]})]}),s.jsxs(Yk,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:.3},children:[s.jsx("h1",{children:"Welcome Back"}),s.jsx("p",{children:"Sign in to your fleet management dashboard"})]})]}),s.jsxs(qk,{onSubmit:g,children:[x&&s.jsxs(Gk,{children:[s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),s.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),x]}),s.jsxs(Mp,{children:[s.jsx(_p,{children:"Username"}),s.jsxs(Dp,{children:[s.jsx(Rp,{children:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),s.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),s.jsx(Op,{type:"text",placeholder:"Enter your username",value:t,onChange:w=>n(w.target.value),required:!0})]})]}),s.jsxs(Mp,{children:[s.jsx(_p,{children:"Password"}),s.jsxs(Dp,{children:[s.jsx(Rp,{children:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),s.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),s.jsx(Op,{type:o?"text":"password",placeholder:"Enter your password",value:a,onChange:w=>i(w.target.value),required:!0}),s.jsx(Xk,{onClick:()=>c(!o),children:o?s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),s.jsx("circle",{cx:"12",cy:"12",r:"3"})]}):s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),s.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})})]})]}),s.jsxs($k,{children:[s.jsxs(Pk,{children:[s.jsx(Kk,{type:"checkbox",id:"remember",checked:d,onChange:w=>u(w.target.checked)}),s.jsx(Fk,{htmlFor:"remember",children:"Remember me"})]}),s.jsx(Qk,{onClick:p,children:"Forgot password?"})]}),s.jsx(fv,{type:"submit",disabled:r,children:r?s.jsxs(Ik,{children:[s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{})]}):s.jsx(Zk,{children:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),s.jsx("polyline",{points:"12 5 19 12 12 19"})]})})}),s.jsxs(Jk,{children:[s.jsxs("p",{children:["Don't have an account?"," ",s.jsx(Wk,{href:"#",children:"Contact Administrator"})]}),s.jsx(e6,{children:"© 2026 ICT.FleetPro. All rights reserved."})]})]})]}),s.jsx(Ck,{isOpen:j,onClose:b,onBackToLogin:y})]})]})},Ep=Lf`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`,Ek=Lf`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Mk=Lf`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`,_k=Ow`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    background: #0f172a;
    color: #f8fafc;
    overflow-x: hidden;
  }

  @supports (font-variation-settings: normal) {
    body {
      font-family: 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    }
  }
`,Dk=h.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`,Rk=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #0f172a, #1e293b, #1e40af, #0f766e);
  background-size: 400% 400%;
  animation: ${Ek} 15s ease infinite;
  z-index: -2;
`,Ok=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.1;

  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
    top: 20%;
    left: 10%;
    animation: ${Ep} 20s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(45deg, #10b981, #0ea5e9);
    bottom: 20%;
    right: 10%;
    animation: ${Ep} 25s ease-in-out infinite reverse;
  }
`,Bk=h(hm.div)`
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  width: 100%;
  max-width: 480px;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 100%;
  }
`,Lk=h.div`
  margin-bottom: 2.5rem;
`,Vk=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,Uk=h.div`
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  padding: 0.75rem;
  border-radius: 12px;
  border: 1px solid rgba(59, 130, 246, 0.2);
`,Hk=h.div`
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  background: linear-gradient(135deg, #60a5fa 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  span {
    color: #f8fafc;
    -webkit-text-fill-color: #f8fafc;
  }
`,Yk=h(hm.div)`
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    color: #94a3b8;
    font-size: 0.95rem;
  }
`,qk=h.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Gk=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
  font-size: 0.875rem;
  font-weight: 500;

  svg {
    flex-shrink: 0;
  }
`,Mp=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,_p=h.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #f1f5f9;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Dp=h.div`
  position: relative;
  display: flex;
  align-items: center;
`,Rp=h.div`
  position: absolute;
  left: 1rem;
  color: #64748b;
`,Op=h.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #f8fafc;
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    background: rgba(30, 41, 59, 0.8);
  }

  &::placeholder {
    color: #64748b;
  }
`,Xk=h.button`
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s ease;

  &:hover {
    color: #94a3b8;
  }
`,$k=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`,Pk=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Kk=h.input`
  width: 1rem;
  height: 1rem;
  border-radius: 4px;
  border: 1px solid #475569;
  background: rgba(30, 41, 59, 0.5);
  cursor: pointer;

  &:checked {
    background-color: #3b82f6;
    border-color: #3b82f6;
  }
`,Fk=h.label`
  font-size: 0.875rem;
  color: #cbd5e1;
  cursor: pointer;
`,Qk=h.button`
  background: none;
  border: none;
  color: #60a5fa;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #3b82f6;
    text-decoration: underline;
  }
`,fv=h.button`
  position: relative;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,Zk=h.span`
  transition: transform 0.2s ease;

  ${fv}:hover & {
    transform: translateX(4px);
  }
`,Ik=h.div`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    margin: 2px;
    border: 2px solid #fff;
    border-radius: 50%;
    animation: ${Mk} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  div:nth-child(1) { animation-delay: -0.45s; }
  div:nth-child(2) { animation-delay: -0.3s; }
  div:nth-child(3) { animation-delay: -0.15s; }
`;h.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1.5rem 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  span {
    padding: 0 1rem;
    color: #94a3b8;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;h.button`
  padding: 0.875rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #f8fafc;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  &:hover {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }

  ${e=>e.variant==="google"&&`
    &:hover {
      background: #4285f4;
      border-color: #4285f4;
    }
  `}

  ${e=>e.variant==="microsoft"&&`
    &:hover {
      background: #0078d4;
      border-color: #0078d4;
    }
  `}
`;const Jk=h.div`
  margin-top: 2.5rem;
  text-align: center;

  p {
    color: #94a3b8;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
`,Wk=h.a`
  color: #60a5fa;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: #3b82f6;
    text-decoration: underline;
  }
`,e6=h.p`
  color: #64748b !important;
  font-size: 0.75rem !important;
`;h(hm.div)`
  margin-left: 3rem;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  width: 100%;
  max-width: 400px;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    display: none;
  }
`;h.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;h.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #f1f5f9;
    margin-bottom: 0.25rem;
  }

  p {
    color: #94a3b8;
    font-size: 0.875rem;
    line-height: 1.4;
  }
`;h.div`
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  flex-shrink: 0;
`;h.div`
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
`;h.div`
  position: absolute;
  top: -1rem;
  left: 1.5rem;
  font-size: 3rem;
  color: rgba(59, 130, 246, 0.3);
  font-family: serif;
`;h.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  strong {
    color: #f1f5f9;
    font-size: 0.875rem;
  }

  span {
    color: #94a3b8;
    font-size: 0.75rem;
  }
`;const t6=h.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,n6=h.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,a6=h.div`
  padding: 2rem 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,i6=h.h2`
  font-size: 1.875rem;
  font-weight: 900;
  color: #0d141b;
  margin: 0;
  letter-spacing: -0.025em;
`,s6=h.button`
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    color: #374151;
  }

  span {
    font-size: 1.5rem;
  }
`,r6=h.div`
  padding: 2rem;
`,gm=({isOpen:e,onClose:t,title:n,children:a})=>{if(!e)return null;const i=r=>{r.target===r.currentTarget&&t()};return s.jsx(t6,{onClick:i,children:s.jsxs(n6,{children:[s.jsxs(a6,{children:[s.jsx(i6,{children:n}),s.jsx(s6,{onClick:t,children:s.jsx("span",{className:"material-symbols-outlined",children:"close"})})]}),s.jsx(r6,{children:a})]})})},l6=h.div`
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 2px dashed #e2e8f0;
  background: rgba(248, 250, 252, 0.5);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    border-color: #137fec;
    background: rgba(19, 127, 236, 0.02);
  }
`,o6=h.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,c6=h.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(19, 127, 236, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #137fec;
  margin: 0 auto 1rem;

  span {
    font-size: 1.875rem;
  }
`,d6=h.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0 0 0.25rem 0;
`,u6=h.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
`,f6=h.button`
  margin-top: 0.5rem;
  background: #f1f5f9;
  color: #0d141b;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
  }
`,m6=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,h6=h.span`
  color: #137fec;
  font-size: 1.25rem;
`,p6=h.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
`,g6=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 2rem;
  }
`,Xt=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,on=h.label`
  font-size: 0.875rem;
  font-weight: 700;
  color: #374151;
`,cn=h.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0.25rem 0 0 0;
`,us=h.p`
  font-size: 0.75rem;
  color: #dc2626;
  margin: 0.25rem 0 0 0;
`,x6=h.div`
  margin-top: 1rem;
  position: relative;
  display: inline-block;
`,b6=h.img`
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 2px solid #e5e7eb;
`,y6=h.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #dc2626;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;

  &:hover {
    background: #b91c1c;
  }
`,ba=h.input`
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  background: white;
  color: #0d141b;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: #137fec;
    box-shadow: 0 0 0 1px #137fec;
  }

  &::placeholder {
    color: #9ca3af;
  }
`,Bp=h.select`
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  background: white;
  color: #0d141b;
  font-size: 0.875rem;
  cursor: pointer;
  outline: none;
  appearance: none;

  &:focus {
    border-color: #137fec;
    box-shadow: 0 0 0 1px #137fec;
  }
`;h(Xt)`
  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;h.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;h.span`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`;const v6=h.span`
  font-size: 0.75rem;
  font-weight: 500;
`;h.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.625rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
  min-height: 80px;

  &:hover {
    background: #f9fafb;
    border-color: #137fec;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  input:checked + & {
    background: rgba(19, 127, 236, 0.05);
    border-color: #137fec;
    box-shadow: 0 0 0 2px rgba(19, 127, 236, 0.1);

    ${v6} {
      color: #137fec;
      font-weight: 600;
    }
  }
`;const j6=h.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid #f1f5f9;
`,w6=h.button`
  padding: 0.625rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: #4b5563;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
  }
`,S6=h.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
  background: #137fec;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(19, 127, 236, 0.2);

  &:hover:not(:disabled) {
    background: rgba(19, 127, 236, 0.9);
    transform: translateY(-1px);
    box-shadow: 0 6px 8px rgba(19, 127, 236, 0.25);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  span:first-child {
    font-size: 0.875rem;
    ${e=>e.disabled&&`
      animation: spin 1s linear infinite;
    `}
  }

  span:last-child {
    font-size: 0.875rem;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,k6=h.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.75rem;
  background: rgba(19, 127, 236, 0.05);
  border: 1px solid rgba(19, 127, 236, 0.1);
`,N6=h.span`
  color: #137fec;
  font-size: 1.25rem;
  flex-shrink: 0;
`,A6=h.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;

  a {
    color: #137fec;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`,T6=({isOpen:e,onClose:t,onSave:n,vehicle:a=null})=>{const[i,r]=A.useState({make:"",model:"",year:"",license_plate:"",fuel_type:"",color:"",purchase_date:"",purchase_price:"",assigned_driver:"",image:null,imagePreview:null}),[l,o]=A.useState({}),[c,d]=A.useState(!1),[u,m]=A.useState([]);A.useEffect(()=>{a&&e?r({make:a.make||"",model:a.model||"",year:a.year?a.year.toString():"",license_plate:a.license_plate||"",fuel_type:a.fuel_type||"",color:a.color||"",mileage:a.mileage?a.mileage.toString():"",purchase_date:a.purchase_date?a.purchase_date.substring(0,10):"",purchase_price:a.purchase_price?a.purchase_price.toString():"",assigned_driver:"",image:null,imagePreview:a.image||null}):!a&&e&&r({make:"",model:"",year:"",license_plate:"",fuel_type:"",color:"",mileage:"",purchase_date:"",purchase_price:"",assigned_driver:"",image:null,imagePreview:null})},[a,e]),A.useEffect(()=>{e&&(async()=>{try{const p=await ft.getUsers(),y=(p.results||p||[]).filter(w=>w.role==="driver");m(y)}catch(p){console.error("Error fetching drivers:",p)}})()},[e]),A.useEffect(()=>{if(u.length>0&&a&&a.assigned_driver_name){const g=u.find(p=>`${p.first_name} ${p.last_name}`===a.assigned_driver_name);g&&r(p=>({...p,assigned_driver:g.username}))}},[u,a]);const f=g=>{const{name:p,value:b}=g.target;r(y=>({...y,[p]:b})),l[p]&&o(y=>({...y,[p]:""}))},x=g=>{const p=g.target.files[0];if(p){if(!["image/jpeg","image/jpg","image/png"].includes(p.type)){o(w=>({...w,image:"Please select a valid image file (JPG, PNG)"}));return}if(p.size>5*1024*1024){o(w=>({...w,image:"Image size must be less than 5MB"}));return}const y=new FileReader;y.onload=w=>{r(k=>({...k,image:p,imagePreview:w.target.result}))},y.readAsDataURL(p),o(w=>({...w,image:""}))}},v=()=>{const g={};return i.make.trim()||(g.make="Make is required"),i.model.trim()||(g.model="Model is required"),(!i.year||parseInt(i.year)<1900||parseInt(i.year)>new Date().getFullYear()+1)&&(g.year="Valid year is required"),i.license_plate.trim()||(g.license_plate="License plate is required"),i.mileage&&(parseInt(i.mileage)<0||isNaN(parseInt(i.mileage)))&&(g.mileage="Valid mileage is required"),o(g),Object.keys(g).length===0},j=async g=>{if(g.preventDefault(),!!v()){d(!0);try{await n(i),T()}catch(p){console.error("Error saving vehicle:",p)}finally{d(!1)}}},T=()=>{r({make:"",model:"",year:"",license_plate:"",fuel_type:"",color:"",mileage:"",purchase_date:"",purchase_price:"",assigned_driver:"",image:null,imagePreview:null}),o({}),d(!1),t()};return s.jsxs(gm,{isOpen:e,onClose:T,title:a?"Edit Vehicle":"Add New Vehicle",children:[s.jsxs(l6,{children:[s.jsx(o6,{type:"file",accept:"image/jpeg,image/jpg,image/png",onChange:x}),s.jsx(c6,{children:s.jsx("span",{className:"material-symbols-outlined",children:"add_a_photo"})}),s.jsxs("div",{children:[s.jsx(d6,{children:"Upload Vehicle Photo"}),s.jsx(u6,{children:"Click to browse or drag and drop a high-resolution JPG or PNG (max 5MB)."})]}),s.jsx(f6,{type:"button",children:"Select File"}),i.imagePreview&&s.jsxs(x6,{children:[s.jsx(b6,{src:i.imagePreview,alt:"Vehicle preview"}),s.jsx(y6,{type:"button",onClick:g=>{g.stopPropagation(),r(p=>({...p,image:null,imagePreview:null}))},children:s.jsx("span",{className:"material-symbols-outlined",children:"close"})})]}),l.image&&s.jsx(us,{children:l.image})]}),s.jsxs(m6,{children:[s.jsx(h6,{className:"material-symbols-outlined",children:"info"}),s.jsx(p6,{children:"Vehicle Details"})]}),s.jsxs("form",{onSubmit:j,children:[s.jsxs(g6,{children:[s.jsxs(Xt,{children:[s.jsx(on,{children:"Make"}),s.jsx(ba,{type:"text",name:"make",placeholder:"e.g. Toyota, Ford, Tesla",value:i.make,onChange:f}),s.jsx(cn,{children:"Vehicle manufacturer"}),l.make&&s.jsx(us,{children:l.make})]}),s.jsxs(Xt,{children:[s.jsx(on,{children:"Model"}),s.jsx(ba,{type:"text",name:"model",placeholder:"e.g. Camry, F-150, Model 3",value:i.model,onChange:f}),s.jsx(cn,{children:"Vehicle model name"}),l.model&&s.jsx(us,{children:l.model})]}),s.jsxs(Xt,{children:[s.jsx(on,{children:"Year"}),s.jsx(ba,{type:"number",name:"year",placeholder:"2020",value:i.year,onChange:f}),s.jsx(cn,{children:"Year of manufacture"}),l.year&&s.jsx(us,{children:l.year})]}),s.jsxs(Xt,{children:[s.jsx(on,{children:"License Plate"}),s.jsx(ba,{type:"text",name:"license_plate",placeholder:"ABC-1234 or CAMPUS-01",value:i.license_plate,onChange:f,style:{textTransform:"uppercase"}}),s.jsx(cn,{children:"Official license plate number"}),l.license_plate&&s.jsx(us,{children:l.license_plate})]}),s.jsxs(Xt,{children:[s.jsx(on,{children:"Fuel Type"}),s.jsxs(Bp,{name:"fuel_type",value:i.fuel_type,onChange:f,children:[s.jsx("option",{value:"",children:"Select fuel type"}),s.jsx("option",{value:"gasoline",children:"Gasoline"}),s.jsx("option",{value:"diesel",children:"Diesel"}),s.jsx("option",{value:"electric",children:"Electric"}),s.jsx("option",{value:"hybrid",children:"Hybrid"})]}),s.jsx(cn,{children:"Select the fuel type for this vehicle"})]}),s.jsxs(Xt,{children:[s.jsx(on,{children:"Color"}),s.jsx(ba,{type:"text",name:"color",placeholder:"e.g. White, Blue, Red",value:i.color,onChange:f}),s.jsx(cn,{children:"Vehicle color"})]}),s.jsxs(Xt,{children:[s.jsx(on,{children:"Purchase Date"}),s.jsx(ba,{type:"date",name:"purchase_date",value:i.purchase_date,onChange:f}),s.jsx(cn,{children:"Date when the vehicle was purchased"})]}),s.jsxs(Xt,{children:[s.jsx(on,{children:"Purchase Price"}),s.jsx(ba,{type:"number",step:"0.01",name:"purchase_price",placeholder:"0.00",value:i.purchase_price,onChange:f}),s.jsx(cn,{children:"Purchase price in dollars"})]}),s.jsxs(Xt,{children:[s.jsx(on,{children:"Assign Primary Driver"}),s.jsxs(Bp,{name:"assigned_driver",value:i.assigned_driver,onChange:f,children:[s.jsx("option",{value:"",children:"Select a driver (optional)"}),u.map(g=>s.jsxs("option",{value:g.username,children:[g.first_name," ",g.last_name," (",g.username,")"]},g.id))]}),s.jsx(cn,{children:"Select the primary driver for this vehicle"})]})]}),s.jsxs(j6,{children:[s.jsx(w6,{type:"button",onClick:T,disabled:c,children:"Discard Changes"}),s.jsx(S6,{type:"submit",disabled:c,children:c?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"material-symbols-outlined",children:"refresh"}),s.jsx("span",{children:"Saving..."})]}):s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"material-symbols-outlined",children:"save"}),s.jsx("span",{children:"Save Vehicle"})]})})]})]}),s.jsxs(k6,{children:[s.jsx(N6,{className:"material-symbols-outlined",children:"help"}),s.jsxs(A6,{children:["Need help registering a specialized vehicle?"," ",s.jsx("a",{href:"#",children:"Contact the asset management team"})," for guidelines on non-standard campus equipment."]})]})]})},C6=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,z6=h.p`
  color: #0d141b; /* dark: slate-200 */
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  padding-bottom: 0.5rem;

  @media (max-width: 640px) {
    font-size: 0.75rem;
    padding-bottom: 0.25rem;
  }
`,E6=h.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  border-radius: 0.5rem;
`,M6=h.input`
  flex: 1 1 0%;
  min-width: 0;
  resize: none;
  overflow: hidden;
  border-radius: 0.5rem;
  color: #0d141b; /* dark: white */
  border: 1px solid #cbd5e1; /* #cfdbe7, dark: slate-700 */
  background-color: white; /* dark: slate-800 */
  height: 3.5rem;
  padding: 0.9375rem;
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;

  &::placeholder {
    color: #4c739a;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(19, 143, 236, 0.5);
  }

  @media (max-width: 640px) {
    height: 3rem;
    padding: 0.75rem;
    font-size: 0.875rem;
  }
`,_6=h.div`
  color: #4c739a;
  display: flex;
  border: 1px solid #cbd5e1; /* #cfdbe7, dark: slate-700 */
  background-color: white; /* dark: slate-800 */
  align-items: center;
  justify-content: center;
  padding-right: 0.9375rem;
  border-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-radius: 0 0.5rem 0.5rem 0;

  @media (max-width: 640px) {
    padding-right: 0.75rem;
  }
`,D6=h.span`
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;

  @media (max-width: 640px) {
    font-size: 0.875rem;
  }
`,ya=({label:e,placeholder:t,type:n,icon:a,value:i,onChange:r})=>s.jsxs(C6,{children:[s.jsx(z6,{children:e}),s.jsxs(E6,{children:[s.jsx(M6,{type:n,placeholder:t,value:i,onChange:r}),s.jsx(_6,{children:s.jsx(D6,{className:"material-symbols-outlined",children:a})})]})]}),Lp=h.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px dashed #d1d5db;
  background: rgba(248, 250, 252, 0.3);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    border-color: #137fec;
    background: rgba(19, 127, 236, 0.02);
  }
`,Vp=h.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,Up=h.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(19, 127, 236, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #137fec;
  margin: 0 auto 0.5rem;

  span {
    font-size: 1.25rem;
  }
`,Hp=h.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #0d141b;
  margin: 0 0 0.125rem 0;
`,Yp=h.p`
  font-size: 0.7rem;
  color: #64748b;
  margin: 0;
`,qp=h.button`
  margin-top: 0.25rem;
  background: #f1f5f9;
  color: #0d141b;
  padding: 0.375rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
  }
`,R6=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,O6=h.span`
  color: #137fec;
  font-size: 1.25rem;
`,B6=h.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
`,L6=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem 1.5rem;
  }
`,Fr=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Qr=h.label`
  font-size: 0.875rem;
  font-weight: 700;
  color: #374151;
`;h.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0.25rem 0 0 0;
`;const Gc=h.p`
  font-size: 0.75rem;
  color: #dc2626;
  margin: 0.25rem 0 0 0;
`,Gp=h.div`
  margin-top: 1rem;
  position: relative;
  display: inline-block;
`,Xp=h.img`
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 2px solid #e5e7eb;
`,$p=h.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #dc2626;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  transition: all 0.2s ease;

  &:hover {
    background: #b91c1c;
  }
`,mv=({isOpen:e,onClose:t,onAccessoryAdded:n})=>{const[a,i]=A.useState({name:"",description:"",price:"",stock_level:"",image:null,receipt:null}),[r,l]=A.useState(null),[o,c]=A.useState(null),[d,u]=A.useState(!1),[m,f]=A.useState({}),x=(w,k)=>{i(N=>({...N,[w]:k})),m[w]&&f(N=>({...N,[w]:null}))},v=w=>{const k=w.target.files[0];k&&(i(N=>({...N,image:k})),l(URL.createObjectURL(k)))},j=w=>{const k=w.target.files[0];k&&(i(N=>({...N,receipt:k})),c(URL.createObjectURL(k)))},T=()=>{i(w=>({...w,image:null})),l(null)},g=()=>{i(w=>({...w,receipt:null})),c(null)},p=()=>{const w={};return a.name.trim()||(w.name="Name is required"),(!a.price||parseFloat(a.price)<=0)&&(w.price="Valid price is required"),(!a.stock_level||parseInt(a.stock_level)<0)&&(w.stock_level="Valid stock level is required"),f(w),Object.keys(w).length===0},b=async w=>{if(w.preventDefault(),!!p()){u(!0);try{const k={...a,price:parseFloat(a.price),stock_level:parseInt(a.stock_level),min_stock_level:5,sku:`ACC-${Date.now()}`,category:"other"};await ia.createAccessory(k),i({name:"",description:"",price:"",quantity:"",image:null,receipt:null}),l(null),c(null),f({}),n&&n(),t()}catch(k){console.error("Error creating accessory:",k),k.data&&f(k.data)}finally{u(!1)}}},y=()=>{i({name:"",description:"",price:"",quantity:"",image:null,receipt:null}),l(null),c(null),f({}),t()};return s.jsx(gm,{isOpen:e,onClose:y,title:"Add New Accessory",children:s.jsx("div",{style:{maxWidth:"500px",margin:"0 auto"},children:s.jsxs("form",{onSubmit:b,children:[s.jsxs(Lp,{onClick:()=>document.getElementById("accessory-image-input").click(),children:[s.jsx(Vp,{id:"accessory-image-input",type:"file",accept:"image/*",onChange:v}),s.jsx(Up,{children:s.jsx("i",{"data-feather":"camera",className:"fi-icon"})}),s.jsx(Hp,{children:"Upload Accessory Image"}),s.jsx(Yp,{children:"Choose an image file"}),s.jsx(qp,{type:"button",children:"Select File"})]}),r&&s.jsxs(Gp,{children:[s.jsx(Xp,{src:r,alt:"Accessory preview"}),s.jsx($p,{type:"button",onClick:T,children:"×"})]}),s.jsxs(Lp,{onClick:()=>document.getElementById("accessory-receipt-input").click(),children:[s.jsx(Vp,{id:"accessory-receipt-input",type:"file",accept:"image/*,application/pdf",onChange:j}),s.jsx(Up,{children:s.jsx("i",{"data-feather":"file-text",className:"fi-icon"})}),s.jsx(Hp,{children:"Upload Receipt"}),s.jsx(Yp,{children:"Upload purchase receipt (PDF or image)"}),s.jsx(qp,{type:"button",children:"Select File"})]}),o&&s.jsxs(Gp,{children:[s.jsx(Xp,{src:o,alt:"Receipt preview"}),s.jsx($p,{type:"button",onClick:g,children:"×"})]}),s.jsxs(R6,{children:[s.jsx(O6,{children:s.jsx("i",{"data-feather":"clipboard",className:"fi-icon"})}),s.jsx(B6,{children:"Accessory Information"})]}),s.jsxs(L6,{children:[s.jsxs(Fr,{children:[s.jsx(Qr,{htmlFor:"name",children:"Name "}),s.jsx("input",{id:"name",type:"text",placeholder:"Enter accessory name",value:a.name,onChange:w=>x("name",w.target.value),style:{width:"100%",padding:"0.75rem",border:`1px solid ${m.name?"#dc2626":"#d1d5db"}`,borderRadius:"0.375rem",fontSize:"0.875rem",backgroundColor:"#ffffff"}}),m.name&&s.jsx(Gc,{children:m.name})]}),s.jsxs(Fr,{children:[s.jsx(Qr,{htmlFor:"price",children:"Price "}),s.jsx("input",{id:"price",type:"number",step:"0.01",placeholder:"0.00",value:a.price,onChange:w=>x("price",w.target.value),style:{width:"100%",padding:"0.75rem",border:`1px solid ${m.price?"#dc2626":"#d1d5db"}`,borderRadius:"0.375rem",fontSize:"0.875rem",backgroundColor:"#ffffff"}}),m.price&&s.jsx(Gc,{children:m.price})]}),s.jsxs(Fr,{children:[s.jsx(Qr,{htmlFor:"stock_level",children:"quantity "}),s.jsx("input",{id:"stock_level",type:"number",placeholder:"0",value:a.stock_level,onChange:w=>x("stock_level",w.target.value),style:{width:"100%",padding:"0.75rem",border:`1px solid ${m.stock_level?"#dc2626":"#d1d5db"}`,borderRadius:"0.375rem",fontSize:"0.875rem",backgroundColor:"#ffffff"}}),m.stock_level&&s.jsx(Gc,{children:m.stock_level})]})]}),s.jsxs(Fr,{style:{marginTop:"2rem"},children:[s.jsx(Qr,{htmlFor:"description",children:"Description"}),s.jsx("textarea",{id:"description",placeholder:"Enter accessory description",value:a.description,onChange:w=>x("description",w.target.value),style:{width:"100%",padding:"0.75rem",border:"1px solid #d1d5db",borderRadius:"0.375rem",fontSize:"0.875rem",minHeight:"100px",resize:"vertical",backgroundColor:"#ffffff"}})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"1rem",marginTop:"2rem",paddingTop:"1rem",borderTop:"1px solid #e5e7eb"},children:[s.jsx("button",{type:"button",onClick:y,style:{padding:"0.5rem 1rem",background:"#f3f4f6",color:"#374151",border:"1px solid #d1d5db",borderRadius:"0.375rem",fontSize:"0.875rem",fontWeight:"500",cursor:"pointer"},children:"Cancel"}),s.jsx("button",{type:"submit",disabled:d,style:{padding:"0.5rem 1rem",background:"#137fec",color:"white",border:"none",borderRadius:"0.375rem",fontSize:"0.875rem",fontWeight:"500",cursor:d?"not-allowed":"pointer",opacity:d?.6:1},children:d?"Adding...":"Add Accessory"})]})]})})})},V6=h.div`
  position: relative;
  display: inline-block;
`,hv=h.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,U6=h.div`
  text-align: right;
  display: none;

  @media (min-width: 640px) {
    display: block;
  }

  p:first-child {
    font-size: 0.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }

  p:last-child {
    font-size: 0.75rem;
    color: #64748b;
    margin: 0;
  }
`,H6=h.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: center no-repeat;
  background-size: cover;
  border: 1px solid #e2e8f0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.5rem;
    height: 0.5rem;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E") no-repeat center;
    background-size: contain;
    opacity: 0.6;
    transition: transform 0.2s ease;
  }

  ${hv}:hover &::after {
    transform: translate(-50%, -50%) rotate(180deg);
  }
`,Y6=h.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 1000;
  opacity: ${e=>e.$isOpen?1:0};
  visibility: ${e=>e.$isOpen?"visible":"hidden"};
  transform: ${e=>e.$isOpen?"translateY(0)":"translateY(-10px)"};
  transition: all 0.2s ease;
`,Xc=h.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.875rem;
  color: #374151;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
  }

  &:first-child {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 0.5rem 0.5rem;
    color: #dc2626;

    &:hover {
      background-color: #fef2f2;
      color: #b91c1c;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }

  i {
    width: 1rem;
    height: 1rem;
    opacity: 0.6;
  }
`,xm=({currentUser:e,onLogout:t,onViewProfile:n,onChangePassword:a})=>{var u,m;const[i,r]=A.useState(!1),l=A.useRef(null);A.useEffect(()=>{const f=x=>{l.current&&!l.current.contains(x.target)&&r(!1)};return document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}},[]);const o=()=>{r(!1),n&&n()},c=()=>{r(!1),a&&a()},d=()=>{r(!1),t()};return s.jsxs(V6,{ref:l,children:[s.jsxs(hv,{onClick:()=>r(!i),children:[s.jsxs(U6,{children:[s.jsxs("p",{children:[e==null?void 0:e.first_name," ",e==null?void 0:e.last_name]}),s.jsx("p",{children:((u=e==null?void 0:e.role)==null?void 0:u.charAt(0).toUpperCase())+((m=e==null?void 0:e.role)==null?void 0:m.slice(1))})]}),s.jsx(H6,{style:{backgroundImage:e!=null&&e.profile_picture?`url('${e.profile_picture}')`:"none",backgroundColor:"#f1f5f9"},children:!(e!=null&&e.profile_picture)&&s.jsx("span",{style:{color:"#64748b",fontSize:"1.25rem",fontWeight:"600",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:((e==null?void 0:e.first_name)||(e==null?void 0:e.username)||"U").charAt(0).toUpperCase()})})]}),s.jsxs(Y6,{$isOpen:i,children:[s.jsxs(Xc,{onClick:o,children:[s.jsx("i",{"data-feather":"user",className:"fi-icon"}),s.jsx("span",{children:"View Profile"})]}),s.jsxs(Xc,{onClick:c,children:[s.jsx("i",{"data-feather":"lock",className:"fi-icon"}),s.jsx("span",{children:"Change Password"})]}),s.jsxs(Xc,{onClick:d,children:[s.jsx("i",{"data-feather":"log-out",className:"fi-icon"}),s.jsx("span",{children:"Logout"})]})]})]})},pv=h.div`
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 2px dashed #e2e8f0;
  background: rgba(248, 250, 252, 0.5);
  text-align: center;
  cursor: ${e=>e.$isEditable?"pointer":"default"};
  transition: all 0.2s ease;
  position: relative;

  ${e=>e.$isEditable&&`
    &:hover {
      border-color: #137fec;
      background: rgba(19, 127, 236, 0.02);
    }
  `}
`,q6=h.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: ${e=>e.disabled?"default":"pointer"};
`,G6=h.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: center no-repeat;
  background-size: cover;
  border: 4px solid #e2e8f0;
  margin: 0 auto 1rem;
  position: relative;
`,X6=h.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,$6=h.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
  color: #64748b;
`,P6=h.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: rgba(19, 127, 236, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${pv}:hover & {
    opacity: 1;
  }
`,Pp=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,Kp=h.span`
  color: #137fec;
  font-size: 1.25rem;
`,Fp=h.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
`,Qp=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 2rem;
  }
`,En=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Mn=h.label`
  font-size: 0.875rem;
  font-weight: 700;
  color: #374151;
`,_n=h.div`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background: #f8fafc;
  font-size: 0.875rem;
  color: #374151;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
`,K6=h.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;

  ${e=>{switch(e.$role){case"admin":return`
          background: rgba(19, 127, 236, 0.1);
          color: #137fec;
        `;case"driver":return`
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
        `;case"mechanic":return`
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        `;default:return`
          background: rgba(107, 114, 128, 0.1);
          color: #6b7280;
        `}}}
`,bm=({isOpen:e,onClose:t,currentUser:n,onProfileUpdate:a})=>{var k,N;const[i,r]=A.useState(!1),[l,o]=A.useState({username:"",first_name:"",last_name:"",email:"",phone_number:"",department:"",employee_id:"",profile_picture:null}),[c,d]=A.useState(null),[u,m]=A.useState(!1),[f,x]=A.useState({}),v=uo(),j=v&&i;A.useEffect(()=>{n&&e&&(o({username:n.username||"",first_name:n.first_name||"",last_name:n.last_name||"",email:n.email||"",phone_number:n.phone_number||"",department:n.department||"",employee_id:n.employee_id||"",profile_picture:null}),d(n.profile_picture||null),r(!1),x({}))},[n,e]);const T=(z,C)=>{o(_=>({..._,[z]:C})),f[z]&&x(_=>({..._,[z]:null}))},g=z=>{const C=z.target.files[0];C&&(o(_=>({..._,profile_picture:C})),d(URL.createObjectURL(C)))},p=()=>{const z={};return l.username.trim()||(z.username="Username is required"),l.first_name.trim()||(z.first_name="First name is required"),l.last_name.trim()||(z.last_name="Last name is required"),l.email&&!/\S+@\S+\.\S+/.test(l.email)&&(z.email="Valid email is required"),x(z),Object.keys(z).length===0},b=async()=>{if(p()){m(!0);try{const z={username:l.username,first_name:l.first_name,last_name:l.last_name,email:l.email,phone_number:l.phone_number,department:l.department,employee_id:l.employee_id};l.profile_picture&&(z.profile_picture=l.profile_picture);const C=await ft.updateProfile(z);a&&a(C),r(!1)}catch(z){console.error("Error updating profile:",z),z.data&&x(z.data)}finally{m(!1)}}},y=()=>{n&&(o({username:n.username||"",first_name:n.first_name||"",last_name:n.last_name||"",email:n.email||"",phone_number:n.phone_number||"",department:n.department||"",employee_id:n.employee_id||"",profile_picture:null}),d(n.profile_picture||null)),r(!1),x({})},w=()=>{y(),t()};return s.jsx(gm,{isOpen:e,onClose:w,title:"User Profile",size:"large",children:s.jsxs("div",{children:[s.jsxs(pv,{$isEditable:j,onClick:()=>j&&document.getElementById("profile-image-input").click(),children:[s.jsx(q6,{id:"profile-image-input",type:"file",accept:"image/*",onChange:g,disabled:!j}),s.jsx(G6,{children:c?s.jsx(X6,{src:c,alt:"Profile"}):s.jsx($6,{children:((n==null?void 0:n.first_name)||(n==null?void 0:n.username)||"U").charAt(0).toUpperCase()})}),j&&s.jsx(P6,{children:"Change Photo"})]}),s.jsxs(Pp,{children:[s.jsx(Kp,{children:s.jsx("i",{"data-feather":"user",className:"fi-icon"})}),s.jsx(Fp,{children:"Basic Information"})]}),s.jsxs(Qp,{children:[s.jsxs(En,{children:[s.jsx(Mn,{htmlFor:"username",children:"Username *"}),j?s.jsx(ya,{id:"username",type:"text",placeholder:"Enter username",value:l.username,onChange:z=>T("username",z),error:f.username}):s.jsx(_n,{children:l.username})]}),s.jsxs(En,{children:[s.jsx(Mn,{children:"Role"}),s.jsx(_n,{children:s.jsx(K6,{$role:n==null?void 0:n.role,children:((k=n==null?void 0:n.role)==null?void 0:k.charAt(0).toUpperCase())+((N=n==null?void 0:n.role)==null?void 0:N.slice(1))})})]}),s.jsxs(En,{children:[s.jsx(Mn,{htmlFor:"first_name",children:"First Name *"}),j?s.jsx(ya,{id:"first_name",type:"text",placeholder:"Enter first name",value:l.first_name,onChange:z=>T("first_name",z),error:f.first_name}):s.jsx(_n,{children:l.first_name})]}),s.jsxs(En,{children:[s.jsx(Mn,{htmlFor:"last_name",children:"Last Name *"}),j?s.jsx(ya,{id:"last_name",type:"text",placeholder:"Enter last name",value:l.last_name,onChange:z=>T("last_name",z),error:f.last_name}):s.jsx(_n,{children:l.last_name})]}),s.jsxs(En,{children:[s.jsx(Mn,{htmlFor:"email",children:"Email"}),j?s.jsx(ya,{id:"email",type:"email",placeholder:"Enter email address",value:l.email,onChange:z=>T("email",z),error:f.email}):s.jsx(_n,{children:l.email||"Not provided"})]}),s.jsxs(En,{children:[s.jsx(Mn,{htmlFor:"phone_number",children:"Phone Number"}),j?s.jsx(ya,{id:"phone_number",type:"tel",placeholder:"Enter phone number",value:l.phone_number,onChange:z=>T("phone_number",z)}):s.jsx(_n,{children:l.phone_number||"Not provided"})]})]}),s.jsxs(Pp,{style:{marginTop:"2rem"},children:[s.jsx(Kp,{children:s.jsx("i",{"data-feather":"briefcase",className:"fi-icon"})}),s.jsx(Fp,{children:"Work Information"})]}),s.jsxs(Qp,{children:[s.jsxs(En,{children:[s.jsx(Mn,{htmlFor:"employee_id",children:"Employee ID"}),j?s.jsx(ya,{id:"employee_id",type:"text",placeholder:"Enter employee ID",value:l.employee_id,onChange:z=>T("employee_id",z)}):s.jsx(_n,{children:l.employee_id||"Not assigned"})]}),s.jsxs(En,{children:[s.jsx(Mn,{htmlFor:"department",children:"Department"}),j?s.jsx(ya,{id:"department",type:"text",placeholder:"Enter department",value:l.department,onChange:z=>T("department",z)}):s.jsx(_n,{children:l.department||"Not assigned"})]})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"1rem",marginTop:"2rem",paddingTop:"1rem",borderTop:"1px solid #e5e7eb"},children:[v&&!i&&s.jsx("button",{type:"button",onClick:()=>r(!0),style:{padding:"0.5rem 1rem",background:"#137fec",color:"white",border:"none",borderRadius:"0.375rem",fontSize:"0.875rem",fontWeight:"500",cursor:"pointer"},children:"Edit Profile"}),i&&s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",onClick:y,style:{padding:"0.5rem 1rem",background:"#f3f4f6",color:"#374151",border:"1px solid #d1d5db",borderRadius:"0.375rem",fontSize:"0.875rem",fontWeight:"500",cursor:"pointer"},children:"Cancel"}),s.jsx("button",{type:"button",onClick:b,disabled:u,style:{padding:"0.5rem 1rem",background:"#137fec",color:"white",border:"none",borderRadius:"0.375rem",fontSize:"0.875rem",fontWeight:"500",cursor:u?"not-allowed":"pointer",opacity:u?.6:1},children:u?"Saving...":"Save Changes"})]}),!i&&s.jsx("button",{type:"button",onClick:w,style:{padding:"0.5rem 1rem",background:"#f3f4f6",color:"#374151",border:"1px solid #d1d5db",borderRadius:"0.375rem",fontSize:"0.875rem",fontWeight:"500",cursor:"pointer"},children:"Close"})]})]})})},F6=h.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Q6=h.div`
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`,Z6=h.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.5rem 0;
  }

  p {
    color: #64748b;
    font-size: 0.875rem;
  }
`,I6=h.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,$c=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Pc=h.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`,Kc=h.input`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`,J6=h.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`,Zp=h.button`
  flex: 1;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${e=>e.$primary?`
    background: #3b82f6;
    color: white;
    border: none;

    &:hover {
      background: #2563eb;
    }
  `:`
    background: white;
    color: #374151;
    border: 1px solid #d1d5db;

    &:hover {
      background: #f9fafb;
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,W6=h.div`
  color: #dc2626;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1rem;
`,e8=h.div`
  color: #059669;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1rem;
`,t8=({isOpen:e,onClose:t})=>{const[n,a]=A.useState({current_password:"",new_password:"",confirm_password:""}),[i,r]=A.useState(!1),[l,o]=A.useState(""),[c,d]=A.useState(""),u=v=>{const{name:j,value:T}=v.target;a(g=>({...g,[j]:T})),l&&o(""),c&&d("")},m=()=>n.current_password?n.new_password?n.new_password.length<8?(o("New password must be at least 8 characters long"),!1):n.new_password!==n.confirm_password?(o("New passwords do not match"),!1):!0:(o("New password is required"),!1):(o("Current password is required"),!1),f=async v=>{if(v.preventDefault(),o(""),d(""),!!m()){r(!0);try{await ft.changePassword({current_password:n.current_password,new_password:n.new_password}),d("Password changed successfully!"),a({current_password:"",new_password:"",confirm_password:""}),setTimeout(()=>{t()},2e3)}catch(j){console.error("Change password error:",j),o(j.message||"Failed to change password")}finally{r(!1)}}},x=()=>{a({current_password:"",new_password:"",confirm_password:""}),o(""),d(""),t()};return e?s.jsx(F6,{onClick:x,children:s.jsxs(Q6,{onClick:v=>v.stopPropagation(),children:[s.jsxs(Z6,{children:[s.jsx("h2",{children:"Change Password"}),s.jsx("p",{children:"Enter your current password and choose a new one"})]}),s.jsxs(I6,{onSubmit:f,children:[s.jsxs($c,{children:[s.jsx(Pc,{htmlFor:"current_password",children:"Current Password"}),s.jsx(Kc,{type:"password",id:"current_password",name:"current_password",value:n.current_password,onChange:u,placeholder:"Enter current password",required:!0})]}),s.jsxs($c,{children:[s.jsx(Pc,{htmlFor:"new_password",children:"New Password"}),s.jsx(Kc,{type:"password",id:"new_password",name:"new_password",value:n.new_password,onChange:u,placeholder:"Enter new password",required:!0})]}),s.jsxs($c,{children:[s.jsx(Pc,{htmlFor:"confirm_password",children:"Confirm New Password"}),s.jsx(Kc,{type:"password",id:"confirm_password",name:"confirm_password",value:n.confirm_password,onChange:u,placeholder:"Confirm new password",required:!0})]}),s.jsxs(J6,{children:[s.jsx(Zp,{type:"button",onClick:x,disabled:i,children:"Cancel"}),s.jsx(Zp,{type:"submit",$primary:!0,disabled:i,children:i?"Changing...":"Change Password"})]}),l&&s.jsx(W6,{children:l}),c&&s.jsx(e8,{children:c})]})]})}):null},n8=({vehicle:e,onBack:t,showHeader:n=!0,onEditVehicle:a})=>e?s.jsxs("div",{className:"bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-50 h-full",children:[n&&s.jsx("header",{className:"sticky top-0 z-50 w-full border-b border-solid border-[#e7edf3] dark:border-slate-800 bg-white dark:bg-background-dark px-10 py-3",children:s.jsxs("div",{className:"max-w-[1200px] mx-auto flex items-center justify-between whitespace-nowrap",children:[s.jsxs("div",{className:"flex items-center gap-8",children:[s.jsxs("button",{onClick:t,className:"flex items-center gap-2 text-[#4c739a] hover:text-primary transition-colors",children:[s.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"}),"Back to Dashboard"]}),s.jsxs("div",{className:"flex items-center gap-3 text-primary",children:[s.jsx("span",{className:"material-symbols-outlined text-3xl",children:"local_shipping"}),s.jsx("h2",{className:"text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-tight",children:"Campus Fleet"})]}),s.jsxs("nav",{className:"hidden md:flex items-center gap-8",children:[s.jsx("a",{className:"text-[#0d141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors",href:"#",children:"Dashboard"}),s.jsx("a",{className:"text-primary text-sm font-bold border-b-2 border-primary pb-1",href:"#",children:"Vehicles"}),s.jsx("a",{className:"text-[#0d141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors",href:"#",children:"Drivers"}),s.jsx("a",{className:"text-[#0d141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors",href:"#",children:"Inventory"})]})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs("label",{className:"relative flex items-center",children:[s.jsx("span",{className:"material-symbols-outlined absolute left-3 text-[#4c739a]",children:"search"}),s.jsx("input",{className:"form-input w-64 rounded-lg border-none bg-[#e7edf3] dark:bg-slate-800 pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary",placeholder:"Search fleet..."})]}),s.jsx("button",{className:"p-2 rounded-lg bg-[#e7edf3] dark:bg-slate-800 text-[#0d141b] dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700",children:s.jsx("span",{className:"material-symbols-outlined",children:"notifications"})}),s.jsx("div",{className:"h-10 w-10 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-700",style:{backgroundImage:'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBr5BPQj2iFV8XedpQjiJV70Z6qCTgT0iCxdlABKqxAY2SrSsXAAjHVoOLpYZDnC4DjCggMrUqKNzv7Jqrj8ZPv5uXchCSdm_EE5w1e8_jQ5LcGkJvef-FZnrZiAbLpCKfIpccN9Zt1450yV3E-tlooRhJ1QwbvJ0j4McGpkbEzicw3RRsolzXi0ddLxRq64NzTH24cGuDKK6I9pWxyrhlmsZcMT4RJyTE6WVAHZPXNRfgOMC_vrLxH1xP47QHQpHgeIDFu_iMI8U4");'}})]})]})}),!n&&s.jsx("div",{className:"px-4 md:px-10 py-4 bg-white dark:bg-background-dark border-b border-[#e7edf3] dark:border-slate-800",children:s.jsxs("button",{onClick:t,className:"flex items-center gap-2 text-[#4c739a] hover:text-primary transition-colors",children:[s.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"}),"Back to Vehicles"]})}),s.jsxs("main",{className:"max-w-[1200px] mx-auto py-8 px-4 md:px-10",children:[s.jsxs("div",{className:"relative w-full rounded-xl overflow-hidden shadow-lg mb-8 h-[350px]",children:[s.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%), url('${e.image||"https://lh3.googleusercontent.com/aida-public/AB6AXuAWf3xu-mvoZJ1YSRq5L_Q8lJY8aFRBEDDpHih9y_TMmPDLUpf0nFGqBiS1l6Ne4Wgd87kEy9UdkYNY5fV8odWFYtJYuYKfJBSl1vm3w6pr_Om6VR6qMO_bk_uqx1HhY7bNAoXBAA6WCzJeCdpQU38UuMu33qMh_K8Alm-j9MDfYt23zb0a3LNLLrUh12P3o8ceSBPe2lWGC8LPK7MXsyNcagMlm-Zm8twNsStNgD9yfCG4RMhA7yz2-ZHrU4p5UTp9NUxOIQrhLH8"}')`}}),s.jsx("div",{className:"absolute top-6 left-6",children:s.jsxs("span",{className:"px-4 py-1.5 bg-green-500 text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-lg",children:[s.jsx("span",{className:"w-2 h-2 rounded-full bg-white animate-pulse"}),e.status||"In Service"]})}),s.jsxs("div",{className:"absolute bottom-6 left-8 text-white",children:[s.jsxs("h1",{className:"text-4xl font-extrabold tracking-tight mb-1",children:[e.year," ",e.make," ",e.model]}),s.jsx("p",{className:"text-lg text-slate-200 font-medium",children:e.license_plate})]})]}),s.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-[#e7edf3] dark:border-slate-800",children:[s.jsxs("div",{className:"flex gap-5 items-center",children:[s.jsx("div",{className:"h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary",children:s.jsx("span",{className:"material-symbols-outlined text-4xl",children:"license"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-[#4c739a] dark:text-slate-400 text-sm font-semibold uppercase tracking-wider",children:"License Plate"}),s.jsx("p",{className:"text-2xl font-bold text-[#0d141b] dark:text-white",children:e.license_plate})]})]}),s.jsx("div",{className:"flex gap-3 w-full md:w-auto",children:s.jsxs("button",{onClick:()=>a&&a(e),className:"flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border-2 border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all",children:[s.jsx("span",{className:"material-symbols-outlined text-xl",children:"edit"}),"Edit Vehicle"]})})]}),s.jsx("div",{className:"mb-6 border-b border-[#cfdbe7] dark:border-slate-800",children:s.jsxs("div",{className:"flex gap-8 overflow-x-auto",children:[s.jsxs("a",{className:"flex items-center gap-2 border-b-4 border-primary text-primary pb-4 font-bold whitespace-nowrap",href:"#",children:[s.jsx("span",{className:"material-symbols-outlined text-xl",children:"settings_input_component"}),"Technical Specs"]}),s.jsxs("a",{className:"flex items-center gap-2 border-b-4 border-transparent text-[#4c739a] hover:text-primary pb-4 font-bold whitespace-nowrap transition-all",href:"#",children:[s.jsx("span",{className:"material-symbols-outlined text-xl",children:"person"}),"Assigned Driver"]}),s.jsxs("a",{className:"flex items-center gap-2 border-b-4 border-transparent text-[#4c739a] hover:text-primary pb-4 font-bold whitespace-nowrap transition-all",href:"#",children:[s.jsx("span",{className:"material-symbols-outlined text-xl",children:"build"}),"Maintenance"]}),s.jsxs("a",{className:"flex items-center gap-2 border-b-4 border-transparent text-[#4c739a] hover:text-primary pb-4 font-bold whitespace-nowrap transition-all",href:"#",children:[s.jsx("span",{className:"material-symbols-outlined text-xl",children:"extension"}),"Accessories"]})]})}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[s.jsxs("div",{className:"bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#e7edf3] dark:border-slate-800 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4 text-primary",children:[s.jsx("span",{className:"material-symbols-outlined",children:"engineering"}),s.jsx("h3",{className:"font-bold text-lg",children:"Powertrain"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3",children:[s.jsx("p",{className:"text-[#4c739a] text-xs font-bold uppercase tracking-widest",children:"Make"}),s.jsx("p",{className:"text-[#0d141b] dark:text-slate-200 font-medium",children:e.make||"Not specified"})]}),s.jsxs("div",{className:"flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3",children:[s.jsx("p",{className:"text-[#4c739a] text-xs font-bold uppercase tracking-widest",children:"Model"}),s.jsx("p",{className:"text-[#0d141b] dark:text-slate-200 font-medium",children:e.model||"Not specified"})]}),s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("p",{className:"text-[#4c739a] text-xs font-bold uppercase tracking-widest",children:"Fuel Type"}),s.jsx("p",{className:"text-[#0d141b] dark:text-slate-200 font-medium",children:e.fuel_type||"Not specified"})]})]})]}),s.jsxs("div",{className:"bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#e7edf3] dark:border-slate-800 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4 text-primary",children:[s.jsx("span",{className:"material-symbols-outlined",children:"speed"}),s.jsx("h3",{className:"font-bold text-lg",children:"Usage Stats"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3",children:[s.jsx("p",{className:"text-[#4c739a] text-xs font-bold uppercase tracking-widest",children:"Color"}),s.jsx("p",{className:"text-[#0d141b] dark:text-slate-200 font-medium",children:e.color||"Not specified"})]}),s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("p",{className:"text-[#4c739a] text-xs font-bold uppercase tracking-widest",children:"Status"}),s.jsx("p",{className:"text-[#0d141b] dark:text-slate-200 font-medium",children:e.status||"Active"})]})]})]}),s.jsxs("div",{className:"bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#e7edf3] dark:border-slate-800 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4 text-primary",children:[s.jsx("span",{className:"material-symbols-outlined",children:"verified"}),s.jsx("h3",{className:"font-bold text-lg",children:"Compliance"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3",children:[s.jsx("p",{className:"text-[#4c739a] text-xs font-bold uppercase tracking-widest",children:"Purchase Date"}),s.jsx("p",{className:"text-[#0d141b] dark:text-slate-200 font-medium",children:e.purchase_date?new Date(e.purchase_date).toLocaleDateString():"Not recorded"})]}),s.jsxs("div",{className:"flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3",children:[s.jsx("p",{className:"text-[#4c739a] text-xs font-bold uppercase tracking-widest",children:"Purchase Price"}),s.jsx("p",{className:"text-[#0d141b] dark:text-slate-200 font-medium",children:e.purchase_price?`$${e.purchase_price}`:"Not recorded"})]}),s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("p",{className:"text-[#4c739a] text-xs font-bold uppercase tracking-widest",children:"Assigned Driver"}),s.jsx("p",{className:"text-[#0d141b] dark:text-slate-200 font-medium",children:e.assigned_driver_name||"Not assigned"})]})]})]})]}),s.jsxs("div",{className:"flex items-center justify-between mt-12 mb-6",children:[s.jsxs("h2",{className:"text-2xl font-bold text-[#0d141b] dark:text-white flex items-center gap-3",children:[s.jsx("span",{className:"material-symbols-outlined text-3xl text-primary",children:"build"}),"Recent Maintenance"]}),s.jsxs("button",{className:"text-primary text-sm font-bold flex items-center gap-1 hover:underline",children:["View Full Log",s.jsx("span",{className:"material-symbols-outlined text-sm",children:"arrow_forward"})]})]}),s.jsx("div",{className:"bg-white dark:bg-slate-900 rounded-xl border border-[#e7edf3] dark:border-slate-800 shadow-sm overflow-hidden",children:s.jsxs("table",{className:"w-full text-left border-collapse",children:[s.jsx("thead",{className:"bg-[#f8f9fb] dark:bg-slate-800 text-[#4c739a] text-xs font-bold uppercase tracking-wider",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-6 py-4",children:"Service Date"}),s.jsx("th",{className:"px-6 py-4",children:"Maintenance Type"}),s.jsx("th",{className:"px-6 py-4",children:"Parts Used"}),s.jsx("th",{className:"px-6 py-4 text-right",children:"Cost"}),s.jsx("th",{className:"px-6 py-4 text-center",children:"Status"})]})}),s.jsx("tbody",{className:"divide-y divide-[#e7edf3] dark:divide-slate-800 text-sm",children:s.jsx("tr",{children:s.jsx("td",{colSpan:"5",className:"px-6 py-4 text-center text-[#4c739a]",children:"No maintenance history available"})})})]})}),s.jsx("div",{className:"mt-12 mb-6",children:s.jsxs("h2",{className:"text-2xl font-bold text-[#0d141b] dark:text-white flex items-center gap-3",children:[s.jsx("span",{className:"material-symbols-outlined text-3xl text-primary",children:"extension"}),"Compatible Stock Parts"]})}),s.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-xl border border-[#e7edf3] dark:border-slate-800 shadow-sm p-8 text-center",children:[s.jsx("span",{className:"material-symbols-outlined text-4xl text-[#4c739a] mb-4 block",children:"extension"}),s.jsx("p",{className:"text-[#4c739a] text-lg",children:"No compatible accessories available for this vehicle"}),s.jsx("p",{className:"text-sm text-slate-500 mt-2",children:"Compatible accessories will be shown here when available in inventory."})]})]}),s.jsx("footer",{className:"w-full py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark",children:s.jsxs("div",{className:"max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-6",children:[s.jsxs("div",{className:"flex items-center gap-2 text-slate-400",children:[s.jsx("span",{className:"material-symbols-outlined",children:"shield"}),s.jsx("span",{className:"text-sm",children:"Campus Asset Security Protocol v4.2"})]}),s.jsx("p",{className:"text-sm text-slate-500",children:"© 2023 Campus Fleet Management System. All rights reserved."}),s.jsxs("div",{className:"flex gap-6",children:[s.jsx("a",{className:"text-xs font-bold text-slate-400 hover:text-primary transition-colors",href:"#",children:"Privacy Policy"}),s.jsx("a",{className:"text-xs font-bold text-slate-400 hover:text-primary transition-colors",href:"#",children:"System Status"}),s.jsx("a",{className:"text-xs font-bold text-slate-400 hover:text-primary transition-colors",href:"#",children:"Support"})]})]})})]}):null,a8=({onBack:e,showHeader:t=!0})=>{const[n,a]=A.useState("inbox"),[i,r]=A.useState([]),[l,o]=A.useState([]),[c,d]=A.useState([]),[u,m]=A.useState(!0),[f,x]=A.useState(null),[v,j]=A.useState(""),[T,g]=A.useState(""),[p,b]=A.useState([]),[y,w]=A.useState("individual"),[k,N]=A.useState(""),[z,C]=A.useState(""),[_,R]=A.useState("info");A.useEffect(()=>{E()},[]);const E=async()=>{try{m(!0),x(null);const[V,O,B]=await Promise.allSettled([wl.getInbox(),Us.getNotifications(),ft.getUsers()]);V.status==="fulfilled"&&r(V.value),O.status==="fulfilled"&&o(O.value),B.status==="fulfilled"&&d(B.value)}catch(V){console.error("Error fetching data:",V),x("Failed to load data")}finally{m(!1)}},K=async()=>{try{if(y==="broadcast")await Us.broadcastNotification({title:v,message:T,type:"info"});else for(const V of p)await wl.sendMessage({recipient:V,subject:v,content:T});j(""),g(""),b([]),w("individual"),await E()}catch(V){console.error("Error sending message:",V),x("Failed to send message")}},ce=async(V,O=!1)=>{try{O?(await Us.markAsRead(V),o(B=>B.map(L=>L.id===V?{...L,is_read:!0}:L))):(await wl.markAsRead(V),r(B=>B.map(L=>L.id===V?{...L,is_read:!0}:L)))}catch(B){console.error("Error marking as read:",B)}};return s.jsxs("div",{className:"text-[#0d141b] dark:text-slate-200 h-full flex flex-col",children:[t&&s.jsx("header",{className:"sticky top-0 z-50 w-full border-b border-solid border-[#e7edf3] dark:border-slate-800 bg-white dark:bg-background-dark px-10 py-3",children:s.jsx("div",{className:"max-w-[1200px] mx-auto flex items-center justify-between whitespace-nowrap",children:s.jsxs("div",{className:"flex items-center gap-8",children:[s.jsxs("button",{onClick:e,className:"flex items-center gap-2 text-[#4c739a] hover:text-primary transition-colors",children:[s.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"}),"Back to Dashboard"]}),s.jsxs("div",{className:"flex items-center gap-3 text-primary",children:[s.jsx("span",{className:"material-symbols-outlined text-3xl",children:"local_shipping"}),s.jsx("h2",{className:"text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-tight",children:"Campus Fleet"})]})]})})}),!t&&s.jsx("div",{className:"px-4 md:px-10 py-4 bg-white dark:bg-background-dark border-b border-[#e7edf3] dark:border-slate-800",children:s.jsxs("button",{onClick:e,className:"flex items-center gap-2 text-[#4c739a] hover:text-primary transition-colors",children:[s.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"}),"Back to Dashboard"]})}),s.jsx("main",{className:"w-full py-8 flex-1",children:s.jsxs("div",{className:"flex h-[600px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm",children:[s.jsxs("aside",{className:"w-[380px] border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col",children:[s.jsxs("div",{className:"p-4 space-y-4",children:[s.jsxs("div",{className:"flex flex-col",children:[s.jsx("h1",{className:"text-[#0d141b] dark:text-white text-lg font-bold",children:"Message Center"}),s.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-sm",children:"Manage fleet-wide communications"})]}),s.jsx("label",{className:"flex flex-col w-full h-10",children:s.jsxs("div",{className:"flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden bg-slate-100 dark:bg-slate-800",children:[s.jsx("div",{className:"text-slate-500 flex items-center justify-center pl-3",children:s.jsx("span",{className:"material-symbols-outlined text-xl",children:"search"})}),s.jsx("input",{className:"form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-0 focus:ring-0 text-sm placeholder:text-slate-500 px-3",placeholder:"Search drivers or technicians..."})]})}),s.jsxs("div",{className:"flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg",children:[s.jsx("button",{className:"flex-1 text-xs font-bold py-1.5 rounded-md bg-white dark:bg-slate-700 shadow-sm text-primary",children:"Direct"}),s.jsx("button",{className:"flex-1 text-xs font-bold py-1.5 rounded-md text-slate-500",children:"Alerts"})]})]}),s.jsxs("div",{className:"flex-1 overflow-y-auto px-2 pb-4 space-y-1",children:[i.map(V=>{var O;return s.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-xl cursor-pointer group transition-colors ${V.is_read?"hover:bg-slate-50 dark:hover:bg-slate-800/50":"bg-primary/10 border-l-4 border-primary"}`,onClick:()=>ce(V.id,!1),children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"size-11 rounded-full bg-primary/20 flex items-center justify-center",children:s.jsx("span",{className:"text-primary font-bold text-xs",children:V.sender_name?V.sender_name.charAt(0).toUpperCase():"U"})}),!V.is_read&&s.jsx("span",{className:"absolute -top-1 -right-1 size-3 bg-primary rounded-full"})]}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"flex justify-between items-baseline",children:[s.jsx("h3",{className:"text-sm font-bold text-[#0d141b] dark:text-white truncate",children:V.sender_name||"Unknown Sender"}),s.jsx("span",{className:"text-[10px] text-primary font-bold",children:new Date(V.created_at).toLocaleDateString()})]}),s.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 truncate font-medium",children:V.subject||((O=V.content)==null?void 0:O.substring(0,50))+"..."})]}),!V.is_read&&s.jsx("div",{className:"size-2 bg-primary rounded-full"})]},V.id)}),i.length===0&&!u&&s.jsxs("div",{className:"p-8 text-center text-slate-500 dark:text-slate-400",children:[s.jsx("span",{className:"material-symbols-outlined text-4xl mb-2",children:"mail"}),s.jsx("p",{children:"No messages yet"})]})]}),s.jsx("div",{className:"p-4 border-t border-slate-200 dark:border-slate-800",children:s.jsxs("button",{onClick:()=>a("compose"),className:"w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:bg-primary/90 transition-all",children:[s.jsx("span",{className:"material-symbols-outlined text-lg",children:"edit"}),"New Message"]})})]}),s.jsxs("section",{className:"flex-1 bg-background-light dark:bg-background-dark flex flex-col overflow-y-auto",children:[s.jsxs("div",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-4",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-[#0d141b] dark:text-white text-xl font-bold",children:"Compose Notification"}),s.jsx("p",{className:"text-slate-500 text-sm",children:"Send a broadcast or individual alert"})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{className:"px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-lg text-sm bg-white dark:bg-slate-800",children:"Discard"}),s.jsx("button",{onClick:K,className:"px-4 py-2 bg-primary text-white font-bold rounded-lg text-sm hover:bg-primary/90 shadow-lg shadow-primary/20",children:"Send Message"})]})]}),s.jsx("div",{className:"mt-4",children:s.jsxs("div",{className:"flex border-b border-slate-100 dark:border-slate-800 gap-8",children:[s.jsxs("button",{onClick:()=>a("compose"),className:`flex items-center gap-2 pb-3 pt-2 transition-colors ${n==="compose"?"border-b-[3px] border-primary text-primary":"border-b-[3px] border-transparent text-slate-500 dark:text-slate-400"}`,children:[s.jsx("span",{className:"material-symbols-outlined text-sm",children:"campaign"}),s.jsx("p",{className:"text-sm font-bold tracking-[0.015em]",children:"Compose"})]}),s.jsxs("button",{onClick:()=>a("history"),className:`flex items-center gap-2 pb-3 pt-2 transition-colors ${n==="history"?"border-b-[3px] border-primary text-primary":"border-b-[3px] border-transparent text-slate-500 dark:text-slate-400"}`,children:[s.jsx("span",{className:"material-symbols-outlined text-sm",children:"history"}),s.jsx("p",{className:"text-sm font-bold tracking-[0.015em]",children:"History"})]})]})})]}),n==="compose"&&s.jsxs("div",{className:"p-8 max-w-[1000px] w-full mx-auto space-y-6",children:[s.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-sm font-bold text-[#0d141b] dark:text-white",children:"Broadcast Options"}),s.jsx("p",{className:"text-xs text-slate-500",children:"Toggle to send to all members in a group"})]}),s.jsx("span",{className:"material-symbols-outlined text-slate-400",children:"info"})]}),s.jsxs("div",{className:"flex flex-wrap gap-4",children:[s.jsxs("label",{className:"relative flex items-center gap-3 p-4 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-primary transition-all flex-1 min-w-[200px]",children:[s.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg",children:s.jsx("span",{className:"material-symbols-outlined text-slate-600 dark:text-slate-400",children:"drive_eta"})}),s.jsx("input",{className:"form-checkbox size-5 text-primary rounded border-slate-300 focus:ring-primary",type:"checkbox",checked:p.includes("drivers"),onChange:V=>{V.target.checked?b([...p,"drivers"]):b(p.filter(O=>O!=="drivers"))}}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-bold text-[#0d141b] dark:text-white",children:"All Drivers"}),s.jsx("p",{className:"text-xs text-slate-500",children:"42 Recipients"})]})]}),s.jsxs("label",{className:"relative flex items-center gap-3 p-4 border-2 border-primary bg-primary/5 rounded-lg cursor-pointer flex-1 min-w-[200px]",children:[s.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg",children:s.jsx("span",{className:"material-symbols-outlined text-primary",children:"engineering"})}),s.jsx("input",{className:"form-checkbox size-5 text-primary rounded border-slate-300 focus:ring-primary",type:"checkbox",checked:p.includes("technicians"),onChange:V=>{V.target.checked?b([...p,"technicians"]):b(p.filter(O=>O!=="technicians"))}}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-bold text-primary",children:"All Technicians"}),s.jsx("p",{className:"text-xs text-primary/70",children:"12 Recipients"})]})]})]})]}),s.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col min-h-[400px]",children:[s.jsxs("div",{className:"px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[s.jsx("span",{className:"material-symbols-outlined text-slate-500",children:"edit"}),s.jsx("input",{className:"w-full border-none focus:ring-0 bg-transparent text-lg font-bold placeholder:text-slate-400 dark:text-white",placeholder:"Notification Subject",value:v,onChange:V=>j(V.target.value)})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{className:"p-2 text-slate-400 hover:text-primary",title:"Attach File",children:s.jsx("span",{className:"material-symbols-outlined",children:"attach_file"})}),s.jsx("button",{className:"p-2 text-slate-400 hover:text-primary",title:"Insert Link",children:s.jsx("span",{className:"material-symbols-outlined",children:"link"})}),s.jsx("button",{className:"p-2 text-slate-400 hover:text-primary",title:"Insert Image",children:s.jsx("span",{className:"material-symbols-outlined",children:"image"})})]})]}),s.jsxs("div",{className:"px-6 py-3 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-6 border-b border-slate-100 dark:border-slate-800",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"material-symbols-outlined text-xs text-slate-500",children:"text_format"}),s.jsx("span",{className:"text-xs font-medium text-slate-600 dark:text-slate-400",children:"Format"})]}),s.jsxs("div",{className:"flex gap-1",children:[s.jsx("button",{className:"p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded",title:"Bold",children:s.jsx("span",{className:"material-symbols-outlined text-sm",children:"format_bold"})}),s.jsx("button",{className:"p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded",title:"Italic",children:s.jsx("span",{className:"material-symbols-outlined text-sm",children:"format_italic"})}),s.jsx("button",{className:"p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded",title:"Underline",children:s.jsx("span",{className:"material-symbols-outlined text-sm",children:"format_underlined"})})]}),s.jsx("div",{className:"w-px h-6 bg-slate-300 dark:bg-slate-600"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"material-symbols-outlined text-xs text-slate-500",children:"list"}),s.jsx("span",{className:"text-xs font-medium text-slate-600 dark:text-slate-400",children:"Lists"})]}),s.jsxs("div",{className:"flex gap-1",children:[s.jsx("button",{className:"p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded",title:"Bullet List",children:s.jsx("span",{className:"material-symbols-outlined text-sm",children:"format_list_bulleted"})}),s.jsx("button",{className:"p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded",title:"Numbered List",children:s.jsx("span",{className:"material-symbols-outlined text-sm",children:"format_list_numbered"})})]}),s.jsx("div",{className:"w-px h-6 bg-slate-300 dark:bg-slate-600"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"material-symbols-outlined text-xs text-slate-500",children:"add_link"}),s.jsx("span",{className:"text-xs font-medium text-slate-600 dark:text-slate-400",children:"Insert"})]}),s.jsxs("div",{className:"flex gap-1",children:[s.jsx("button",{className:"p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded",title:"Insert Link",children:s.jsx("span",{className:"material-symbols-outlined text-sm",children:"link"})}),s.jsx("button",{className:"p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded",title:"Insert Image",children:s.jsx("span",{className:"material-symbols-outlined text-sm",children:"image"})})]})]}),s.jsx("textarea",{className:"flex-1 p-6 border-none focus:ring-0 bg-transparent resize-none text-slate-700 dark:text-slate-300 placeholder:text-slate-400 text-base",placeholder:"Write your message here...",value:T,onChange:V=>g(V.target.value)}),s.jsx("div",{className:"p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800",children:s.jsx("div",{className:"flex flex-wrap gap-2",children:s.jsxs("div",{className:"flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm",children:[s.jsx("span",{className:"material-symbols-outlined text-sm",children:"description"}),"schedule_revised.pdf",s.jsx("button",{className:"ml-2 hover:text-red-500",children:s.jsx("span",{className:"material-symbols-outlined text-xs",children:"close"})})]})})})]})]}),n==="history"&&s.jsxs("div",{className:"p-8 space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between px-2",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"material-symbols-outlined text-primary",children:"history"}),s.jsx("h3",{className:"text-sm font-bold text-[#0d141b] dark:text-white uppercase tracking-wider",children:"Recent Broadcasts"})]}),s.jsxs("button",{className:"text-primary text-sm font-bold flex items-center gap-1 hover:underline",children:[s.jsx("span",{className:"material-symbols-outlined text-sm",children:"visibility"}),"View All"]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.map(V=>s.jsxs("div",{className:"bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-3 shadow-sm",children:[s.jsxs("div",{className:"flex justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`material-symbols-outlined text-sm ${V.is_read?"text-green-600":"text-blue-600"}`,children:V.is_read?"check_circle":"notifications"}),s.jsx("span",{className:`text-[10px] font-bold px-2 py-1 rounded ${V.is_read?"bg-green-100 text-green-700":"bg-blue-100 text-blue-700"}`,children:V.is_read?"READ":"UNREAD"})]}),s.jsxs("span",{className:"text-[10px] text-slate-400 font-medium flex items-center gap-1",children:[s.jsx("span",{className:"material-symbols-outlined text-xs",children:"schedule"}),new Date(V.created_at).toLocaleDateString()]})]}),s.jsxs("h4",{className:"text-sm font-bold text-[#0d141b] dark:text-white truncate flex items-center gap-2",children:[s.jsx("span",{className:"material-symbols-outlined text-sm text-slate-500",children:"campaign"}),V.title]}),s.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 line-clamp-2",children:V.message}),s.jsxs("div",{className:"flex items-center justify-between mt-1",children:[s.jsxs("div",{className:"text-right",children:[s.jsx("p",{className:"text-[10px] text-slate-500",children:"Type"}),s.jsx("p",{className:"text-sm font-bold text-primary",children:V.type})]}),!V.is_read&&s.jsx("button",{onClick:()=>ce(V.id,!0),className:"text-xs text-primary hover:underline",children:"Mark as read"})]})]},V.id)),l.length===0&&!u&&s.jsxs("div",{className:"col-span-full text-center py-8 text-slate-500 dark:text-slate-400",children:[s.jsx("span",{className:"material-symbols-outlined text-4xl mb-2",children:"notifications"}),s.jsx("p",{children:"No notifications yet"})]})]})]})]})]})})]})},i8=({isOpen:e,onClose:t,imageUrl:n,title:a,onDownload:i})=>{if(!e)return null;const r=()=>{if(i&&n){const l=a?`${a}.jpg`:"image.jpg";i(n,l)}};return s.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:s.jsxs("div",{className:"bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden shadow-xl",children:[s.jsxs("div",{className:"flex justify-between items-center p-4 border-b",children:[s.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:a||"Image"}),s.jsxs("div",{className:"flex items-center space-x-2",children:[i&&s.jsx("button",{onClick:r,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"Download"}),s.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 text-xl",children:"×"})]})]}),s.jsx("div",{className:"p-4 flex justify-center",children:s.jsx("img",{src:n,alt:a||"Image",className:"max-w-full max-h-[70vh] object-contain",onError:l=>{l.target.src="/placeholder-image.png"}})})]})})},s8=({onBack:e,showHeader:t=!0})=>{const[n,a]=A.useState("all"),[i,r]=A.useState([]),[l,o]=A.useState(!0),[c,d]=A.useState(null),[u,m]=A.useState(!1),[f,x]=A.useState(null),[v,j]=A.useState(0),[T,g]=A.useState(""),[p,b]=A.useState(!1),[y,w]=A.useState(null),[k,N]=A.useState(null),[z,C]=A.useState(!1),[_,R]=A.useState(null),[E,K]=A.useState({name:"",price:"",stock_level:"",description:""});A.useEffect(()=>{ce()},[]);const ce=async()=>{try{o(!0),d(null);const D=await ia.getAccessories();r((D==null?void 0:D.results)||[])}catch(D){console.error("Error fetching accessories data:",D),d("Failed to load accessories data")}finally{o(!1)}},V=async(D,ae,I)=>{try{await ia.updateStock(D,ae,I),await ce(),m(!1),x(null),j(0),g("")}catch(yt){console.error("Error updating stock:",yt)}},O=(D,ae)=>{w({url:D,name:ae}),N(null),b(!0)},B=(D,ae)=>{N({url:D,name:ae}),w(null),b(!0)},L=(D,ae)=>{const I=document.createElement("a");I.href=D,I.download=ae,document.body.appendChild(I),I.click(),document.body.removeChild(I)},q=D=>{R(D),K({name:D.name,price:D.price.toString(),stock_level:D.stock_level.toString(),description:D.description||""}),C(!0)},F=async()=>{try{const D={name:E.name,price:parseFloat(E.price),stock_level:parseInt(E.stock_level),description:E.description};await ia.updateAccessory(_.id,D),await ce(),C(!1),R(null)}catch(D){console.error("Error updating accessory:",D)}},Re=n==="all"?i:i.filter(D=>D.category===n),Xe=["all",...new Set(i.map(D=>D.category))],Wt=D=>D.stock_level<=0?"out-of-stock":"in-stock",We=D=>{switch(D){case"out-of-stock":return"bg-gray-100 text-gray-700 dark:bg-gray-900/40 dark:text-gray-300";default:return"bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"}},Gt=D=>{switch(D){case"out-of-stock":return"Out of Stock";default:return"In Stock"}};return s.jsxs("div",{className:"text-[#0d141b] dark:text-slate-200 h-full flex flex-col",children:[t&&s.jsx("header",{className:"sticky top-0 z-50 w-full border-b border-solid border-[#e7edf3] dark:border-slate-800 bg-white dark:bg-background-dark px-10 py-3",children:s.jsx("div",{className:"max-w-[1200px] mx-auto flex items-center justify-between whitespace-nowrap",children:s.jsxs("div",{className:"flex items-center gap-8",children:[s.jsxs("button",{onClick:e,className:"flex items-center gap-2 text-[#4c739a] hover:text-primary transition-colors",children:[s.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"}),"Back to Dashboard"]}),s.jsxs("div",{className:"flex items-center gap-3 text-primary",children:[s.jsx("span",{className:"material-symbols-outlined text-3xl",children:"local_shipping"}),s.jsx("h2",{className:"text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-tight",children:"Campus Fleet"})]})]})})}),!t&&s.jsx("div",{className:"px-4 md:px-10 py-4 bg-white dark:bg-background-dark border-b border-[#e7edf3] dark:border-slate-800",children:s.jsxs("button",{onClick:e,className:"flex items-center gap-2 text-[#4c739a] hover:text-primary transition-colors",children:[s.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"}),"Back to Dashboard"]})}),s.jsxs("main",{className:"w-full py-8 flex-1",children:[s.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8",children:[s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsxs("h1",{className:"text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] flex items-center gap-3",children:[s.jsx("span",{className:"material-symbols-outlined text-5xl text-primary",children:"settings"}),"Parts & Accessories"]}),s.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-base font-normal",children:"Manage and monitor inventory levels for fleet components."})]}),s.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700",children:[s.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"inventory"}),s.jsx("span",{className:"font-bold text-slate-900 dark:text-white",children:i.length})," Total Parts"]})]}),s.jsx("div",{className:"flex justify-end mb-6",children:s.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all",children:[s.jsx("span",{className:"material-symbols-outlined",children:"download"}),"Export CSV"]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("div",{className:"flex gap-2 flex-wrap mb-4",children:Xe.map(D=>{const ae=I=>{switch(I){case"All Categories":return"inventory";case"Tires":return"tire_repair";case"Batteries":return"battery_full";case"Fluids":return"oil_barrel";case"Brakes":return"settings";case"Lighting":return"lightbulb";case"Belts":return"timeline";case"Filters":return"filter_alt";case"Accessories":return"build";default:return"category"}};return s.jsxs("button",{onClick:()=>a(D==="All Categories"?"all":D.toLowerCase()),className:`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-semibold transition-all ${n==="all"&&D==="All Categories"||n===D.toLowerCase()?"bg-primary text-white":"bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"}`,children:[s.jsx("span",{className:"material-symbols-outlined text-sm",children:ae(D)}),D]},D)})}),s.jsxs("div",{className:"flex gap-2 justify-end",children:[s.jsxs("button",{className:"flex h-9 items-center justify-center gap-x-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700",children:[s.jsx("span",{className:"material-symbols-outlined text-[20px]",children:"filter_list"}),s.jsx("span",{className:"text-sm font-medium",children:"Filters"})]}),s.jsxs("button",{className:"flex h-9 items-center justify-center gap-x-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700",children:[s.jsx("span",{className:"material-symbols-outlined text-[20px]",children:"sort"}),s.jsx("span",{className:"text-sm font-medium",children:"Sort"})]})]})]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:[Re.map(D=>{const ae=Wt(D);return s.jsxs("div",{className:"group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all overflow-hidden",children:[s.jsx("div",{className:"h-40 bg-cover bg-center bg-[#f0f4f8] cursor-pointer hover:opacity-80 transition-opacity",style:{backgroundImage:`url('${D.image||"/placeholder-image.jpg"}')`},onClick:()=>D.image&&O(D.image,D.name),title:"Click to view full image"}),ae==="out-of-stock"&&s.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:s.jsx("span",{className:"text-white font-bold text-lg",children:"Out of Stock"})}),s.jsxs("div",{className:"p-4",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[s.jsx("div",{className:"flex items-center justify-center w-6 h-6 bg-primary/10 rounded",children:s.jsx("span",{className:"material-symbols-outlined text-xs text-primary",children:D.category==="Tires"?"tire_repair":D.category==="Batteries"?"battery_full":D.category==="Fluids"?"oil_barrel":D.category==="Brakes"?"settings":D.category==="Lighting"?"lightbulb":D.category==="Belts"?"timeline":D.category==="Filters"?"filter_alt":"build"})}),s.jsx("p",{className:"text-xs font-bold text-primary",children:D.category.toUpperCase()})]}),s.jsx("h4",{className:"font-bold text-[#0d141b] dark:text-white mb-2 text-sm leading-tight",children:D.name}),s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("span",{className:"text-xs text-[#4c739a]",children:["SKU: ",D.sku]}),s.jsx("span",{className:`text-xs font-bold px-2 py-0.5 rounded ${We(ae)}`,children:Gt(ae)})]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("span",{className:"material-symbols-outlined text-xs text-slate-500",children:"inventory"}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs text-slate-500",children:"Stock Level"}),s.jsxs("p",{className:"text-sm font-bold text-[#0d141b] dark:text-white",children:[D.stock_level," Units"]})]})]}),s.jsxs("div",{className:"text-right flex items-center gap-1",children:[s.jsx("span",{className:"material-symbols-outlined text-xs text-slate-500",children:"attach_money"}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs text-slate-500",children:"Price"}),s.jsxs("p",{className:"text-sm font-bold text-[#0d141b] dark:text-white",children:["Fcfa",parseFloat(D.price).toFixed(2)]})]})]})]})]}),s.jsx("div",{className:"px-4 pb-4",children:s.jsxs("div",{className:"flex flex-col gap-2",children:[D.receipt?s.jsxs("button",{onClick:()=>D.receipt&&B(D.receipt,D.name),className:"flex items-center justify-center gap-2 h-9 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors",title:"View Receipt",children:[s.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"receipt"}),"View Receipt"]}):s.jsxs("div",{className:"flex items-center justify-center gap-2 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm font-semibold",children:[s.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"receipt"}),"No Receipt"]}),s.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[s.jsxs("button",{onClick:()=>q(D),className:"flex items-center justify-center gap-2 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors",children:[s.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"edit"}),"Edit"]}),s.jsxs("button",{onClick:()=>{x(D),m(!0)},className:"flex items-center justify-center gap-2 h-9 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors",children:[s.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"inventory"}),"Update Stock"]})]})]})})]},D.id)}),Array.from({length:(4-Re.length%4)%4},(D,ae)=>s.jsx("div",{className:"bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center p-6",children:s.jsxs("div",{className:"text-center text-slate-400 dark:text-slate-500",children:[s.jsx("span",{className:"material-symbols-outlined text-3xl mb-2 block",children:"inventory_2"}),s.jsx("p",{className:"text-sm",children:"No more parts"})]})},`empty-${ae}`))]}),s.jsxs("div",{className:"mt-12 flex flex-col items-center gap-4",children:[s.jsxs("button",{className:"px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2",children:[s.jsx("span",{children:"Load More Parts"}),s.jsx("span",{className:"material-symbols-outlined",children:"expand_more"})]}),s.jsxs("p",{className:"text-slate-500 dark:text-slate-400 text-xs",children:["Showing ",Re.length," of ",i.length," parts"]})]}),u&&f&&s.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:s.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-md mx-4",children:[s.jsxs("h3",{className:"text-lg font-bold text-[#0d141b] dark:text-white mb-4",children:["Update Stock: ",f.name]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",children:"Current Stock Level"}),s.jsxs("p",{className:"text-lg font-bold text-[#0d141b] dark:text-white",children:[f.stock_level," units"]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",children:"Stock Change"}),s.jsx("input",{type:"number",value:v,onChange:D=>j(parseInt(D.target.value)||0),className:"w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white",placeholder:"Enter positive number to add, negative to subtract"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",children:"Reason"}),s.jsx("input",{type:"text",value:T,onChange:D=>g(D.target.value),className:"w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white",placeholder:"e.g., Restock, Usage, etc."})]})]}),s.jsxs("div",{className:"flex gap-3 mt-6",children:[s.jsx("button",{onClick:()=>m(!1),className:"flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800",children:"Cancel"}),s.jsx("button",{onClick:()=>V(f.id,v,T),className:"flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90",children:"Update Stock"})]})]})}),z&&_&&s.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:s.jsx("div",{className:"bg-white dark:bg-slate-900 rounded-lg max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto",children:s.jsxs("div",{className:"p-6",children:[s.jsxs("h3",{className:"text-lg font-bold text-[#0d141b] dark:text-white mb-4",children:["Edit Accessory: ",_.name]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",children:"Name"}),s.jsx("input",{type:"text",value:E.name,onChange:D=>K(ae=>({...ae,name:D.target.value})),className:"w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white",placeholder:"Enter accessory name"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",children:"Price"}),s.jsx("input",{type:"number",step:"0.01",value:E.price,onChange:D=>K(ae=>({...ae,price:D.target.value})),className:"w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white",placeholder:"0.00"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",children:"Stock Level"}),s.jsx("input",{type:"number",value:E.stock_level,onChange:D=>K(ae=>({...ae,stock_level:D.target.value})),className:"w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white",placeholder:"0"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",children:"Description"}),s.jsx("textarea",{value:E.description,onChange:D=>K(ae=>({...ae,description:D.target.value})),className:"w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white",placeholder:"Enter description",rows:"3"})]})]}),s.jsxs("div",{className:"flex gap-3 mt-6",children:[s.jsx("button",{onClick:()=>{C(!1),R(null)},className:"flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800",children:"Cancel"}),s.jsx("button",{onClick:F,className:"flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90",children:"Update Accessory"})]})]})})}),s.jsx(i8,{isOpen:p,onClose:()=>{b(!1),w(null),N(null)},imageUrl:(y==null?void 0:y.url)||(k==null?void 0:k.url),title:(y==null?void 0:y.name)||(k==null?void 0:k.name),onDownload:L})]})]})},r8=h.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,l8=h.div`
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`,o8=h.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.5rem 0;
  }

  p {
    color: #64748b;
    font-size: 0.875rem;
  }
`,c8=h.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ip=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Jp=h.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`,Wp=h.input`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`,d8=h.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`,eg=h.button`
  flex: 1;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${e=>e.$primary?`
    background: #3b82f6;
    color: white;
    border: none;

    &:hover {
      background: #2563eb;
    }
  `:`
    background: white;
    color: #374151;
    border: 1px solid #d1d5db;

    &:hover {
      background: #f9fafb;
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,u8=h.div`
  color: #dc2626;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1rem;
`,f8=h.div`
  color: #059669;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1rem;
`,m8=({isOpen:e,onClose:t,user:n})=>{const[a,i]=A.useState(""),[r,l]=A.useState(""),[o,c]=A.useState(!1),[d,u]=A.useState(""),[m,f]=A.useState(""),x=g=>p=>{g(p.target.value),d&&u(""),m&&f("")},v=()=>a?a.length<8?(u("New password must be at least 8 characters long"),!1):a!==r?(u("Passwords do not match"),!1):!0:(u("New password is required"),!1),j=async g=>{if(g.preventDefault(),u(""),f(""),!!v()){c(!0);try{await ft.adminResetPassword(n.id,{new_password:a}),f(`Password for ${n.username} has been reset successfully!`),i(""),l(""),setTimeout(()=>{t()},2e3)}catch(p){console.error("Admin reset password error:",p),u(p.message||"Failed to reset password")}finally{c(!1)}}},T=()=>{i(""),l(""),u(""),f(""),t()};return!e||!n?null:s.jsx(r8,{onClick:T,children:s.jsxs(l8,{onClick:g=>g.stopPropagation(),children:[s.jsxs(o8,{children:[s.jsx("h2",{children:"Reset Password"}),s.jsxs("p",{children:["Reset password for ",n.first_name," ",n.last_name," (",n.username,")"]})]}),s.jsxs(c8,{onSubmit:j,children:[s.jsxs(Ip,{children:[s.jsx(Jp,{htmlFor:"new_password",children:"New Password"}),s.jsx(Wp,{type:"password",id:"new_password",value:a,onChange:x(i),placeholder:"Enter new password",required:!0})]}),s.jsxs(Ip,{children:[s.jsx(Jp,{htmlFor:"confirm_password",children:"Confirm New Password"}),s.jsx(Wp,{type:"password",id:"confirm_password",value:r,onChange:x(l),placeholder:"Confirm new password",required:!0})]}),s.jsxs(d8,{children:[s.jsx(eg,{type:"button",onClick:T,disabled:o,children:"Cancel"}),s.jsx(eg,{type:"submit",$primary:!0,disabled:o,children:o?"Resetting...":"Reset Password"})]}),d&&s.jsx(u8,{children:d}),m&&s.jsx(f8,{children:m})]})]})})},h8=({onBack:e,showHeader:t=!0})=>{const[n,a]=A.useState([]),[i,r]=A.useState(!0),[l,o]=A.useState(null),[c,d]=A.useState(!1),[u,m]=A.useState(!1),[f,x]=A.useState(!1),[v,j]=A.useState(null),[T,g]=A.useState({username:"",email:"",password:"",first_name:"",last_name:"",role:"driver",department:"",phone_number:"",employee_id:"",profile_picture:null});A.useEffect(()=>{if(!uo()){o("Access denied. Admin privileges required."),r(!1);return}p()},[]);const p=async()=>{try{r(!0),o(null);const C=await ft.getUsers();a((C==null?void 0:C.results)||[])}catch(C){console.error(C),o("Failed to load users. Please try again.")}finally{r(!1)}},b=async C=>{C.preventDefault();try{const _=await ft.createUser(T);_&&a(R=>[...R,_]),d(!1),N(),await p()}catch(_){console.error("Create user error:",_),console.error("Error details:",_.data||_.message),o(`Failed to create user: ${_.message||"Unknown error"}`)}},y=async C=>{C.preventDefault();try{const _=await ft.updateUser(v.id,T);_&&a(R=>R.map(E=>E.id===v.id?{...E,..._}:E)),m(!1),j(null),N(),await p()}catch(_){console.error("Update user error:",_),o("Failed to update user")}},w=async C=>{if(window.confirm("Are you sure you want to delete this user?"))try{a(_=>_.filter(R=>R.id!==C)),await ft.deleteUser(C),await p()}catch(_){console.error("Delete user error:",_),o("Failed to delete user"),await p()}},k=C=>{j(C),g({username:C.username||"",email:C.email||"",password:"",first_name:C.first_name||"",last_name:C.last_name||"",role:C.role||"driver",department:C.department||"",phone_number:C.phone_number||"",employee_id:C.employee_id||"",profile_picture:null}),m(!0)},N=()=>{g({username:"",email:"",password:"",first_name:"",last_name:"",role:"driver",department:"",phone_number:"",employee_id:"",profile_picture:null})},z=C=>{const _={admin:"bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",manager:"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",mechanic:"bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",driver:"bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"};return _[C]||_.driver};return uo()?s.jsxs("div",{className:"min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 flex flex-col",children:[t&&s.jsx("header",{className:"sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-5 sm:px-8 lg:px-12 xl:px-16 py-4 shadow-sm",children:s.jsxs("div",{className:"flex items-center justify-between mx-auto w-full max-w-[1920px]",children:[s.jsxs("div",{className:"flex items-center gap-8 lg:gap-10",children:[s.jsxs("button",{onClick:e,className:"flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:[s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"Back to Dashboard"]}),s.jsxs("div",{className:"flex items-center gap-3 text-blue-600",children:[s.jsx("svg",{className:"w-9 h-9",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),s.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"User Management"})]})]}),s.jsxs("button",{onClick:()=>d(!0),className:"px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm flex items-center gap-2 transition-colors",children:[s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),"Add User"]})]})}),s.jsx("main",{className:"flex-1 w-full",children:s.jsxs("div",{className:"w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 xl:py-12",children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 max-w-7xl mx-auto",children:[!t&&s.jsxs("button",{onClick:e,className:"flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 mb-4 md:mb-0",children:[s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"Back"]}),s.jsxs("div",{children:[s.jsxs("h1",{className:"text-4xl md:text-5xl font-black text-slate-900 dark:text-white flex items-center gap-4",children:[s.jsx("svg",{className:"w-14 h-14 text-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"User Management"]}),s.jsx("p",{className:"mt-2 text-lg text-slate-500 dark:text-slate-400",children:"Manage campus staff, drivers, mechanics & administrators"})]}),s.jsxs("button",{onClick:()=>d(!0),className:"px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md flex items-center gap-2 whitespace-nowrap transition-colors",children:[s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),"Add New User"]})]}),l&&s.jsx("div",{className:"mb-8 p-5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300 max-w-7xl mx-auto",children:l}),i?s.jsx("div",{className:"flex min-h-[60vh] items-center justify-center",children:s.jsx("div",{className:"animate-spin rounded-full h-14 w-14 border-b-4 border-blue-600"})}):s.jsxs("div",{className:"bg-white dark:bg-slate-900/70 rounded-2xl border border-slate-200/70 dark:border-slate-700/50 shadow-sm overflow-hidden backdrop-blur-sm max-w-[1920px] mx-auto",children:[s.jsx("div",{className:"px-6 sm:px-8 lg:px-10 xl:px-12 py-5 border-b border-slate-200 dark:border-slate-800",children:s.jsxs("h3",{className:"text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white",children:["All Users (",n.length,")"]})}),s.jsx("div",{className:"p-6 sm:p-8 lg:p-10 xl:p-12",children:s.jsxs("div",{className:`
                  grid grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                  2xl:grid-cols-5
                  gap-4 sm:gap-5 lg:gap-6
                  auto-rows-fr
                `,children:[n.map(C=>s.jsxs("div",{className:`
                         bg-white dark:bg-slate-800
                         rounded-xl border border-slate-200 dark:border-slate-700
                         p-4 sm:p-5
                         hover:shadow-lg hover:border-blue-300/50 dark:hover:border-blue-600/40
                         transition-all duration-200
                         flex flex-col
                         h-full
                       `,children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("div",{className:"flex items-center gap-3 min-w-0 flex-1",children:[s.jsxs("div",{className:"relative flex-shrink-0",children:[C.profile_picture?s.jsx("img",{src:C.profile_picture,alt:`${C.first_name} ${C.last_name}`,className:"w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-700"}):s.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center border-2 border-white dark:border-slate-700",children:s.jsx("span",{className:"text-white font-semibold text-sm",children:(C.first_name||C.username||"?").charAt(0).toUpperCase()})}),s.jsx("div",{className:`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border border-white dark:border-slate-800 ${C.is_active?"bg-green-500":"bg-red-500"}`})]}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsxs("h3",{className:"font-semibold text-slate-900 dark:text-white text-sm truncate",children:[C.first_name," ",C.last_name]}),s.jsxs("p",{className:"text-xs text-slate-500 dark:text-slate-400 truncate",children:["@",C.username]})]})]}),s.jsx("span",{className:`inline-flex px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ml-2 ${z(C.role)}`,children:C.role.charAt(0).toUpperCase()+C.role.slice(1)})]}),s.jsxs("div",{className:"space-y-1.5 mb-3",children:[s.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300",children:[s.jsx("svg",{className:"w-3.5 h-3.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),s.jsx("span",{className:"truncate flex-1",children:C.email})]}),C.phone_number&&s.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300",children:[s.jsx("svg",{className:"w-3.5 h-3.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),s.jsx("span",{className:"truncate flex-1",children:C.phone_number})]}),C.department&&s.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300",children:[s.jsx("svg",{className:"w-3.5 h-3.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),s.jsx("span",{className:"truncate flex-1",children:C.department})]})]}),s.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-700 mt-auto",children:[s.jsxs("div",{className:"text-xs text-slate-500 dark:text-slate-400 truncate",children:["ID: ",C.employee_id||"N/A"]}),s.jsxs("div",{className:"flex gap-1",children:[s.jsx("button",{onClick:()=>k(C),className:"p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-all duration-200",title:"Edit user",children:s.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),s.jsx("button",{onClick:()=>{j(C),x(!0)},className:"p-1.5 text-slate-400 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-md transition-all duration-200",title:"Reset password",children:s.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})})}),s.jsx("button",{onClick:()=>w(C.id),className:"p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-all duration-200",title:"Delete user",children:s.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})]})]},C.id)),n.length===0&&s.jsx("div",{className:"col-span-full text-center py-24 sm:py-32 text-slate-500 dark:text-slate-400 text-xl",children:"No users found"})]})})]})]})}),(c||u)&&s.jsx("div",{className:"fixed inset-0 bg-black/65 flex items-center justify-center z-50 p-4 sm:p-6",children:s.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl",children:[s.jsx("h3",{className:"text-2xl font-bold mb-6 text-slate-900 dark:text-white",children:c?"Create New User":"Edit User"}),s.jsxs("form",{onSubmit:C=>{C.preventDefault(),c?b(C):y(C)},className:"space-y-5",children:[s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300",children:"First Name"}),s.jsx("input",{type:"text",value:T.first_name,onChange:C=>g({...T,first_name:C.target.value}),className:"w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300",children:"Last Name"}),s.jsx("input",{type:"text",value:T.last_name,onChange:C=>g({...T,last_name:C.target.value}),className:"w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]})]}),c&&s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300",children:"Username"}),s.jsx("input",{type:"text",value:T.username,onChange:C=>g({...T,username:C.target.value}),className:"w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300",children:"Email"}),s.jsx("input",{type:"email",value:T.email,onChange:C=>g({...T,email:C.target.value}),className:"w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),c&&s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300",children:"Password"}),s.jsx("input",{type:"password",value:T.password,onChange:C=>g({...T,password:C.target.value}),className:"w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300",children:"Role"}),s.jsxs("select",{value:T.role,onChange:C=>g({...T,role:C.target.value}),className:"w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[s.jsx("option",{value:"driver",children:"Driver"}),s.jsx("option",{value:"mechanic",children:"Mechanic"}),s.jsx("option",{value:"manager",children:"Manager"}),s.jsx("option",{value:"admin",children:"Admin"})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300",children:"Department"}),s.jsx("input",{type:"text",value:T.department,onChange:C=>g({...T,department:C.target.value}),className:"w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]})]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300",children:"Phone Number"}),s.jsx("input",{type:"tel",value:T.phone_number,onChange:C=>g({...T,phone_number:C.target.value}),className:"w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300",children:"Employee ID"}),s.jsx("input",{type:"text",value:T.employee_id,onChange:C=>g({...T,employee_id:C.target.value}),className:"w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]})]}),s.jsxs("div",{className:"flex gap-4 mt-8",children:[s.jsx("button",{type:"button",onClick:()=>{c?d(!1):m(!1),N()},className:"flex-1 py-3 px-6 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors",children:"Cancel"}),s.jsx("button",{type:"submit",className:"flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors",children:c?"Create User":"Save Changes"})]})]})]})}),s.jsx(m8,{isOpen:f,onClose:()=>{x(!1),j(null)},user:v})]}):s.jsx("div",{className:"min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-6",children:s.jsxs("div",{className:"text-center max-w-md",children:[s.jsx("div",{className:"text-red-500 text-6xl mb-6",children:"⛔"}),s.jsx("h2",{className:"text-2xl font-bold mb-3 text-slate-900 dark:text-white",children:"Access Denied"}),s.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Administrator privileges are required to view this page."})]})})},p8=({onBack:e,showHeader:t=!0})=>{const[n,a]=A.useState([]),[i,r]=A.useState([]),[l,o]=A.useState(!0),[c,d]=A.useState(null),[u,m]=A.useState(null),[f,x]=A.useState(null),[v,j]=A.useState(!1),[T,g]=A.useState(!1);A.useEffect(()=>{p()},[]);const p=async()=>{var k,N;try{o(!0),d(null);const[z,C]=await Promise.allSettled([lr.getReports(),or.getIssues()]);z.status==="fulfilled"&&a(((k=z.value)==null?void 0:k.results)||[]),C.status==="fulfilled"&&r(((N=C.value)==null?void 0:N.results)||[])}catch(z){console.error("Error fetching reports data:",z),d("Failed to load reports data")}finally{o(!1)}},b=k=>{m(k),j(!0)},y=k=>{x(k),g(!0)},w=async k=>{try{await lr.markAsRead(k.id),a(N=>N.map(z=>z.id===k.id?{...z,is_read:!0}:z)),j(!1)}catch(N){console.error("Error marking report as read:",N)}};return l?s.jsx("div",{className:"bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 min-h-screen flex items-center justify-center",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),s.jsx("p",{children:"Loading reports..."})]})}):c?s.jsx("div",{className:"bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 min-h-screen flex items-center justify-center",children:s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-red-500 mb-4",children:c}),s.jsx("button",{onClick:p,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Try Again"})]})}):s.jsxs("div",{className:"min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200",children:[t&&s.jsx("header",{className:"sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 lg:px-10 py-3",children:s.jsx("div",{className:"flex items-center justify-between",children:s.jsxs("div",{className:"flex items-center gap-8",children:[s.jsxs("button",{onClick:e,className:"flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:[s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"Back to Dashboard"]}),s.jsxs("div",{className:"flex items-center gap-3 text-blue-600",children:[s.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),s.jsx("h2",{className:"text-slate-900 dark:text-white text-lg font-bold",children:"Campus Fleet"})]})]})})}),!t&&s.jsx("div",{className:"px-6 lg:px-10 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800",children:s.jsxs("button",{onClick:e,className:"flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:[s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"Back to Dashboard"]})}),s.jsxs("main",{className:"w-full px-6 lg:px-10 py-8",children:[s.jsxs("div",{className:"flex flex-col gap-1 mb-8",children:[s.jsxs("h1",{className:"text-slate-900 dark:text-white text-4xl font-black leading-tight flex items-center gap-3",children:[s.jsx("svg",{className:"w-12 h-12 text-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Driver Reports & Issues"]}),s.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-base",children:"Review and manage driver submissions and reported issues."})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-6",children:[s.jsxs("h3",{className:"text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2",children:[s.jsx("svg",{className:"w-6 h-6 text-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Driver Reports (",n.length,")"]}),s.jsx("div",{className:"max-h-96 overflow-y-auto space-y-3",children:n.length>0?n.map(k=>s.jsx("div",{onClick:()=>b(k),className:"border border-slate-200 dark:border-slate-600 rounded-lg p-4 cursor-pointer hover:shadow-md transition-all bg-white dark:bg-slate-800",children:s.jsxs("div",{className:"flex justify-between items-start",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("h4",{className:"font-semibold text-slate-900 dark:text-white mb-1",children:k.title}),s.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400 mb-2",children:[new Date(k.submitted_at).toLocaleDateString()," • ",k.driver_name]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${k.report_type==="daily"?"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200":k.report_type==="weekly"?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"}`,children:k.report_type.charAt(0).toUpperCase()+k.report_type.slice(1)}),!k.is_read&&s.jsx("span",{className:"w-2 h-2 bg-red-500 rounded-full"})]})]})},k.id)):s.jsx("p",{className:"text-center text-slate-500 dark:text-slate-400 py-8",children:"No reports submitted yet"})})]}),s.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-6",children:[s.jsxs("h3",{className:"text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2",children:[s.jsx("svg",{className:"w-6 h-6 text-orange-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),"Issue Reports (",i.length,")"]}),s.jsx("div",{className:"max-h-96 overflow-y-auto space-y-3",children:i.length>0?i.map(k=>s.jsx("div",{onClick:()=>y(k),className:"border border-slate-200 dark:border-slate-600 rounded-lg p-4 cursor-pointer hover:shadow-md transition-all bg-white dark:bg-slate-800",children:s.jsxs("div",{className:"flex justify-between items-start",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("h4",{className:"font-semibold text-slate-900 dark:text-white mb-1",children:k.title}),s.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400 mb-2",children:[new Date(k.reported_at).toLocaleDateString()," • ",k.driver_name,k.vehicle_info&&` • ${k.vehicle_info}`]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${k.priority==="critical"?"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200":k.priority==="high"?"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200":k.priority==="medium"?"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200":"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"}`,children:k.priority.charAt(0).toUpperCase()+k.priority.slice(1)}),s.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${k.status==="resolved"?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":k.status==="in_progress"?"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200":"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"}`,children:k.status.replace("_"," ").charAt(0).toUpperCase()+k.status.replace("_"," ").slice(1)})]})]})},k.id)):s.jsx("p",{className:"text-center text-slate-500 dark:text-slate-400 py-8",children:"No issues reported yet"})})]})]})]}),v&&u&&s.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold text-slate-900 dark:text-white",children:u.title}),s.jsx("button",{onClick:()=>j(!1),className:"text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200",children:s.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:["Submitted by: ",u.driver_name]}),s.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:["Date: ",new Date(u.submitted_at).toLocaleString()]}),s.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:["Type: ",u.report_type]})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-semibold text-slate-900 dark:text-white mb-2",children:"Content"}),s.jsx("p",{className:"text-slate-700 dark:text-slate-300 whitespace-pre-wrap",children:u.content})]}),!u.is_read&&s.jsx("button",{onClick:()=>w(u),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Mark as Read"})]})]})}),T&&f&&s.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold text-slate-900 dark:text-white",children:f.title}),s.jsx("button",{onClick:()=>g(!1),className:"text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200",children:s.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:["Reported by: ",f.driver_name]}),s.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:["Date: ",new Date(f.reported_at).toLocaleString()]}),f.vehicle_info&&s.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:["Vehicle: ",f.vehicle_info]}),s.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:["Priority: ",f.priority]}),s.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:["Status: ",f.status]})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-semibold text-slate-900 dark:text-white mb-2",children:"Description"}),s.jsx("p",{className:"text-slate-700 dark:text-slate-300 whitespace-pre-wrap",children:f.description})]})]})]})})]})},g8=h.div`
  height: 100vh;
  background-color: #f6f7f8;
  display: flex;
  flex-direction: column;
  font-family: 'Manrope', sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,x8=h.aside`
  width: 280px;
  background: white;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  @media (max-width: 1024px) {
    width: 240px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`,b8=h.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e2e8f0;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    display: none;
  }
`,y8=h.button`
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: ${e=>e.$active?"#137fec":"#64748b"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;

  &:hover {
    background: #f1f5f9;
    color: #137fec;
  }

  i {
    font-size: 1.25rem;
  }
`,v8=h.div`
  padding: 1.5rem 0;
`,j8=h.div`
  padding: 0 1.5rem 2rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1rem;
`,w8=h.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,S8=h.div`
  background: #137fec;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: white;
`,k8=h.div`
  h1 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }
  p {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 500;
    margin: 0;
  }
`,N8=h.nav`
  padding: 0 1rem;
`,A8=h.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s ease;

  i {
    color: inherit;
  }

  &:hover {
    background: #f1f5f9;
    color: #1e293b;
  }

  &.active {
    background: rgba(19, 127, 236, 0.1);
    color: #137fec;
    border-left: 4px solid #137fec;
  }
`,T8=h.div`
  padding: 1.5rem;
  border-top: 1px solid #e2e8f0;
`,Zr=h.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem;
  background: #137fec;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #137fec / 0.9;
  }
`,C8=h.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 767px) {
    padding-bottom: 80px; /* Space for mobile nav */
  }
`,z8=h.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
`,E8=h.div`
  flex: 1;
  max-width: 20rem;
`,M8=h.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 2.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    background: #f8fafc;
    font-size: 0.875rem;
    color: #374151;

    &:focus {
      outline: none;
      border-color: #137fec / 0.2;
      box-shadow: 0 0 0 3px rgba(19, 127, 236, 0.1);
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/%3E%3C/svg%3E") no-repeat center;
    background-size: contain;
  }
`,_8=h.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`,D8=h.button`
  position: relative;
  padding: 0.5rem;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: background 0.2s ease;

  &:hover {
    background: #f1f5f9;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    background: #ef4444;
    border: 2px solid white;
    border-radius: 50%;
  }
`,R8=h.button`
  padding: 0.5rem;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: background 0.2s ease;

  &:hover {
    background: #f1f5f9;
  }
`,O8=h.div`
  width: 1px;
  height: 2rem;
  background: #e2e8f0;
`;h.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;h.div`
  text-align: right;
  display: none;

  @media (min-width: 640px) {
    display: block;
  }

  p:first-child {
    font-size: 0.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }

  p:last-child {
    font-size: 0.75rem;
    color: #64748b;
    margin: 0;
  }
`;h.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: center no-repeat;
  background-size: cover;
  border: 1px solid #e2e8f0;
`;const B8=h.div`
  padding: 1rem;
  width: 100%;
  flex: 1;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }

  @media (min-width: 1280px) {
    padding: 2.5rem;
  }
  display: flex;
  flex-direction: column;
`;h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 300px;
`;const Fc=h.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      width: 2rem;
      height: 2rem;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23137fec'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'/%3E%3C/svg%3E") no-repeat center;
      background-size: contain;
    }
  }

  p {
    color: #64748b;
    font-size: 0.875rem;
  }
`,L8=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,V8=h.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,U8=h.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`,H8=h.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$bg||"#137fec"}1a;
  color: ${e=>e.$color||"#137fec"};
`,Y8=h.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${e=>e.$positive?"#10b981":"#ef4444"};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,q8=h.div`
  font-size: 2.25rem;
  font-weight: 800;
  color: #0d141b;
  margin-bottom: 0.25rem;
`,G8=h.div`
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
`,X8=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;h.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;h.div`
  padding: 1.5rem;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;h.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.25rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      width: 1.5rem;
      height: 1.5rem;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23137fec'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'/%3E%3C/svg%3E") no-repeat center;
      background-size: contain;
    }
  }

  p {
    font-size: 0.75rem;
    color: #64748b;
    margin: 0;
  }
`;h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;h.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #10b981;
`;h.select`
  font-size: 0.75rem;
  border: none;
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  color: #374151;
  cursor: pointer;
`;h.div`
  padding: 2rem;
  flex: 1;
`;h.div`
  display: flex;
  align-items: end;
  gap: 0.5rem;
  height: 16rem;
  margin-bottom: 1.5rem;
`;h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;h.div`
  width: 100%;
  background: linear-gradient(135deg, #137fec 0%, #0ea5e9 100%);
  border-radius: 0.25rem 0.25rem 0 0;
  transition: height 0.3s ease;
  position: relative;

  &:hover {
    background: linear-gradient(135deg, #137fec 0%, #2563eb 100%);
  }
`;h.span`
  font-size: 10px;
  font-weight: 700;
  color: #6b7280;
  text-transform: uppercase;
`;h.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  border: 1px solid #f1f5f9;
`;h.div`
  flex: 1;

  p:first-child {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 500;
    margin: 0 0 0.25rem 0;
  }

  p:last-child {
    font-size: 1.125rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }
`;const $8=h.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`,P8=h.div`
  padding: 1.5rem;
  border-bottom: 1px solid #f1f5f9;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }
`,K8=h.div`
  flex: 1;
  overflow-y: auto;
  max-height: 440px;
`,F8=h.div`
  padding: 1rem 1.5rem;
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #f8fafc;
  transition: background 0.2s ease;

  &:hover {
    background: #f8fafc;
  }

  &:last-child {
    border-bottom: none;
  }
`,Q8=h.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: center no-repeat;
  background-size: cover;
  flex-shrink: 0;
`,Z8=h.div`
  flex: 1;

  p {
    font-size: 0.875rem;
    color: #374151;
    margin: 0 0 0.25rem 0;
    line-height: 1.4;
  }

  span {
    font-weight: 700;
    color: #0d141b;
  }
`,I8=h.div`
  font-size: 11px;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.25rem;
`,J8=h.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid #f1f5f9;
  text-align: center;
`,W8=h.button`
  background: none;
  border: none;
  color: #137fec;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #0ea5e9;
    text-decoration: underline;
  }
`,eN=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,tN=h.div`
  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.25rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      width: 2rem;
      height: 2rem;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23137fec'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/%3E%3C/svg%3E") no-repeat center;
      background-size: contain;
    }
  }

  p {
    font-size: 0.875rem;
    color: #64748b;
    margin: 0;
  }
`,nN=h.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,tg=h.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #137fec;
  }

  span:last-child {
    font-size: 1rem;
  }
`,aN=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ym=h.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`,iN=h.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.5s ease;

  ${ym}:hover & {
    transform: scale(1.05);
  }
`,sN=h.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;

  ${e=>{switch(e.status){case"Active":return`
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
        `;case"In Repair":return`
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        `;case"Maintenance":return`
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        `;default:return`
          background: rgba(107, 114, 128, 0.1);
          color: #6b7280;
        `}}}
`,rN=h.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,lN=h.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
`,oN=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25rem;
`,cN=h.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
`,dN=h.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #64748b;

  span:first-child {
    font-size: 0.75rem;
  }
`,uN=h.div`
  border-top: 1px solid #e2e8f0;
  padding: 1rem;
  margin-top: auto;
  background: rgba(248, 250, 252, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
`,fN=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span:first-child {
    color: #137fec;
    font-size: 1rem;
  }

  span:last-child {
    font-size: 0.75rem;
    font-weight: 500;
    color: #0d141b;
  }
`,mN=h.button`
  font-size: 0.75rem;
  font-weight: 700;
  color: #137fec;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;

  ${ym}:hover & {
    text-decoration: underline;
  }

  i {
    width: 0.875rem;
    height: 0.875rem;
  }
`,hN=h.div`
  border: 2px dashed #e2e8f0;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;

  &:hover {
    border-color: #137fec;
    background: rgba(19, 127, 236, 0.02);

    span:first-child {
      color: #137fec;
    }
  }
`,pN=h.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.2s ease;

  span {
    font-size: 1.5rem;
    color: #64748b;
  }
`,gN=h.div`
  p:first-child {
    font-size: 0.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.25rem 0;
  }

  p:last-child {
    font-size: 0.75rem;
    color: #64748b;
    margin: 0;
    padding: 0 1rem;
  }
`,xN=h.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  margin: 2rem auto 0;
  padding: 0.75rem 1.5rem;
  border: 1px solid #137fec;
  background: transparent;
  color: #137fec;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #137fec;
    color: white;
  }
`;h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;h.div`
  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.25rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      width: 2rem;
      height: 2rem;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23137fec'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'/%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'/%3E%3C/svg%3E") no-repeat center;
      background-size: contain;
    }
  }

  p {
    font-size: 0.875rem;
    color: #64748b;
    margin: 0;
  }
`;h.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f9fafb;
    border-color: #137fec;
  }

  span {
    font-size: 1.25rem;
  }
`;h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;h.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;

  @media (min-width: 1024px) {
    padding-bottom: 0;
  }
`;h.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  ${e=>e.active?`
    background: #137fec;
    color: white;
  `:`
    background: #f1f5f9;
    color: #64748b;

    &:hover {
      background: #e2e8f0;
      color: #374151;
    }
  `}

  span:last-child {
    font-size: 1rem;
  }
`;h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;h.div`
  display: flex;
  background: #f1f5f9;
  border-radius: 0.5rem;
  padding: 0.25rem;
`;h.button`
  padding: 0.375rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${e=>e.active?`
    background: white;
    color: #137fec;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  `:`
    background: transparent;
    color: #64748b;

    &:hover {
      color: #374151;
    }
  `}

  span {
    font-size: 1.25rem;
  }
`;h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;const gv=h.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: #64748b;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #137fec;
  }

  span {
    font-size: 1.25rem;
  }
`;h(gv)``;h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;const xv=h.div`
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;

  ${e=>e.status==="critical"?`
        border: 2px solid #dc2626;
        box-shadow: 0 0 0 1px rgba(220, 38, 38, 0.1), 0 4px 6px rgba(220, 38, 38, 0.1);
      `:e.status==="low"?`
        border: 1px solid #f59e0b;
        box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.1);
      `:e.status==="out-of-stock"?`
        filter: grayscale(100%);
        opacity: 0.8;
      `:""}

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;h.div`
  width: 100%;
  aspect-ratio: 1;
  background-size: cover;
  background-position: center;
  background-color: #f1f5f9;
  position: relative;
  transition: transform 0.5s ease;

  ${xv}:hover & {
    transform: scale(1.05);
  }
`;h.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.9);
  color: #374151;

  ${e=>e.status==="critical"&&`
    background: #dc2626;
    color: white;
  `}
`;h.div`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #dc2626;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 0.5rem;
    color: white;
    font-weight: 700;
  }
`;h.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  ${xv}:hover & {
    opacity: 0;
  }
`;h.span`
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;h.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  ${e=>e.status==="critical"&&`
    background: rgba(220, 38, 38, 0.05);
  `}
`;h.p`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  ${e=>e.status==="critical"?`
        color: #dc2626;

        span:first-child {
          font-size: 0.75rem;
        }
      `:`
      color: #137fec;
    `}
`;h.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
  line-height: 1.25;
`;h.p`
  font-size: 0.75rem;
  color: #64748b;
  font-family: 'Monaco', 'Menlo', monospace;
  margin: 0.25rem 0 0 0;
`;h.div`
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;h.div`
  display: flex;
  flex-direction: column;
`;h.span`
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
`;h.span`
  font-size: 0.875rem;
  font-weight: 700;

  ${e=>e.status==="critical"||e.status==="out-of-stock"?"color: #dc2626;":e.status==="low"?"color: #f59e0b;":"color: #10b981;"}
`;h.button`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${e=>e.variant==="restock"?`
        background: #dc2626;
        color: white;

        &:hover {
          background: #b91c1c;
        }
      `:e.variant==="order"?`
        background: #137fec;
        color: white;

        &:hover {
          background: #0ea5e9;
        }
      `:`
      background: #f1f5f9;
      color: #64748b;

      &:hover {
        background: #137fec;
        color: white;
      }
    `}

  span {
    font-size: 1.125rem;
  }
`;h.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;h.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;

  span {
    font-weight: 700;
    color: #0d141b;
  }
`;h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;h.button`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  background: white;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: #f9fafb;
    border-color: #137fec;
    color: #137fec;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${e=>e.active&&`
    background: #137fec;
    color: white;
    border-color: #137fec;
  `}

  span {
    font-size: 1.125rem;
  }
`;h.span`
  color: #9ca3af;
  padding: 0 0.25rem;
`;h.div`
  background: rgba(19, 127, 236, 0.05);
  border: 1px solid rgba(19, 127, 236, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;h.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div:last-child {
    p:first-child {
      font-weight: 700;
      color: #0d141b;
      margin: 0 0 0.25rem 0;
    }

    p:last-child {
      color: #64748b;
      font-size: 0.875rem;
      margin: 0;
    }
  }
`;h.div`
  width: 3rem;
  height: 3rem;
  background: #137fec;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;h.div`
  display: flex;
  gap: 0.75rem;
`;h.button`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  ${e=>e.$primary?`
    background: #137fec;
    color: white;
    border: none;
    box-shadow: 0 4px 6px rgba(19, 127, 236, 0.2);

    &:hover {
      background: #0ea5e9;
      transform: translateY(-1px);
    }
  `:`
    background: white;
    color: #374151;
    border: 1px solid #e2e8f0;

    &:hover {
      background: #f8fafc;
    }
  `}
`;const ng=({onLogout:e,currentUser:t})=>{const[n,a]=A.useState("overview"),[i,r]=A.useState(!1),[l,o]=A.useState(null),[c,d]=A.useState(!1),[u,m]=A.useState(!1),[f,x]=A.useState(null),[v,j]=A.useState(!1),[T,g]=A.useState(!1),[p,b]=A.useState([]),[y,w]=A.useState([]),[k,N]=A.useState([]),[z,C]=A.useState([]),[_,R]=A.useState([]),[E,K]=A.useState(!0),[ce,V]=A.useState(null),[O,B]=A.useState([]),[L,q]=A.useState([]),[F,Re]=A.useState([]),[Xe,Wt]=A.useState(null),[We,Gt]=A.useState(null),[D,ae]=A.useState(null),[I,yt]=A.useState(null),[Pa,en]=A.useState(!1),[Ot,ha]=A.useState(!1),[Ka,tn]=A.useState(!1);A.useEffect(()=>{window.feather&&window.feather.replace(),yv()},[]);const yv=async()=>{var S,G,pa,nn,Tr;try{K(!0),V(null);const[Cr,wm,Sm,km,Nm,Am,Tm]=await Promise.allSettled([Ca.getVehicles(),ia.getAccessories(),Us.getUnread(),wl.getInbox(),Us.getNotifications({limit:5}),lr.getReports(),or.getIssues()]);Cr.status==="fulfilled"&&b(((S=Cr.value)==null?void 0:S.results)||[]),wm.status==="fulfilled"&&w(((G=wm.value)==null?void 0:G.results)||[]),Sm.status==="fulfilled"&&C(Sm.value),km.status==="fulfilled"&&R(km.value),Nm.status==="fulfilled"&&B(((pa=Nm.value)==null?void 0:pa.results)||[]),Am.status==="fulfilled"&&q(((nn=Am.value)==null?void 0:nn.results)||[]),Tm.status==="fulfilled"&&Re(((Tr=Tm.value)==null?void 0:Tr.results)||[])}catch(Cr){console.error("Error fetching dashboard data:",Cr),V("Failed to load dashboard data")}finally{K(!1)}},vv=S=>{x(S),a("vehicles")},jv=()=>{x(null)},wv=async S=>{try{await ia.deleteAccessory(S);const G=await ia.getAccessories();w((G==null?void 0:G.results)||[])}catch(G){console.error("Error deleting accessory:",G),alert("Failed to delete accessory. Please try again.")}},Sv=async S=>{try{const G=await lr.getReport(S.id);ae(G),en(!0),q(pa=>pa.map(nn=>nn.id===S.id?{...nn,is_read:!0}:nn))}catch(G){console.error("Error fetching report:",G)}},kv=async S=>{try{const G=await or.getIssue(S.id);yt(G),ha(!0)}catch(G){console.error("Error fetching issue:",G)}},Nv=async S=>{try{console.log("Saving vehicle data:",S),l?(console.log("Updating vehicle:",l.id),await Ca.updateVehicle(l.id,S),console.log("Vehicle updated successfully")):(await Ca.createVehicle(S),console.log("Vehicle created successfully"));const G=await Ca.getVehicles(),pa=G.results||G;if(b(pa),l&&f&&f.id===l.id){const nn=pa.find(Tr=>Tr.id===l.id);nn&&x(nn)}r(!1),o(null),alert(l?"Vehicle updated successfully!":"Vehicle created successfully!")}catch(G){console.error("Error saving vehicle:",G),console.error("Error details:",G.data||G)}},vm=[{id:"overview",label:"Overview",icon:"bar-chart-2"},{id:"vehicles",label:"Vehicles",icon:"truck"},{id:"accounts",label:"Accounts",icon:"users"},{id:"accessories",label:"Accessories",icon:"package"},{id:"messages",label:"Messages",icon:"message-circle"},{id:"reports",label:"Reports",icon:"bar-chart"}],Av=p.filter(S=>S.status==="active").length,Ar=p.filter(S=>S.status==="maintenance").length,ns=y.filter(S=>S.stock_level<=S.min_stock_level).length,Tv=[{title:"Total Vehicles",value:p.length.toString(),trend:p.length>0?`${Av} active`:"No data",positive:p.length>0,icon:"truck",bg:"#137fec",color:"#137fec"},{title:"Vehicles in Maintenance",value:Ar.toString(),trend:Ar>0?`${Ar} need service`:"All operational",positive:Ar===0,icon:"settings",bg:"#f59e0b",color:"#d97706"},{title:"Total Accessories",value:y.length.toString(),trend:y.length>0?`${ns} low stock`:"No data",positive:ns===0,icon:"package",bg:"#10b981",color:"#059669"},{title:"Low Stock Alerts",value:ns.toString(),trend:ns>0?"Restock needed":"All stocked",positive:ns===0,icon:"alert-triangle",bg:"#ef4444",color:"#dc2626"}],Cv=[...O.map(S=>({id:`notification-${S.id}`,user:S.created_by_name||"System",action:S.message,time:new Date(S.created_at).toLocaleString(),avatar:S.created_by_name?`https://ui-avatars.com/api/?name=${encodeURIComponent(S.created_by_name)}&background=random`:null,isSystem:!S.created_by_name,type:"notification"})),...L.slice(0,5).map(S=>({id:`report-${S.id}`,user:S.driver_name||"Unknown Driver",action:`submitted report: "${S.title}"`,time:new Date(S.submitted_at).toLocaleString(),avatar:S.driver_name?`https://ui-avatars.com/api/?name=${encodeURIComponent(S.driver_name)}&background=random`:null,isSystem:!1,type:"report"})),...F.slice(0,5).map(S=>({id:`issue-${S.id}`,user:S.driver_name||"Unknown Driver",action:`reported issue: "${S.title}" (${S.priority} priority)`,time:new Date(S.reported_at).toLocaleString(),avatar:S.driver_name?`https://ui-avatars.com/api/?name=${encodeURIComponent(S.driver_name)}&background=random`:null,isSystem:!1,type:"issue"})),...p.slice(0,3).map(S=>({id:`vehicle-${S.id}`,user:"System",action:`vehicle "${S.license_plate}" was updated`,time:new Date(S.updated_at||S.created_at).toLocaleString(),avatar:null,isSystem:!0,type:"vehicle"})),...y.slice(0,3).map(S=>({id:`accessory-${S.id}`,user:"System",action:`accessory "${S.name}" stock updated`,time:new Date().toLocaleString(),avatar:null,isSystem:!0,type:"accessory"}))].sort((S,G)=>new Date(G.time)-new Date(S.time)).slice(0,10);y.slice(0,10).map(S=>({id:S.id,name:S.name,sku:S.sku,category:S.category,price:parseFloat(S.price),stockLevel:S.stock_level,status:S.stock_level===0?"out-of-stock":S.stock_level<=S.min_stock_level?"low":S.stock_level<=S.min_stock_level*2?"critical":"normal",image:S.image||"https://via.placeholder.com/200x150?text=No+Image"}));const zv=[{id:1,name:"Ford F-150",plate:"CAMPUS-01",status:"Active",statusColor:"green",location:"Main Lot",fuelLevel:75,fuelType:"gas",image:"https://lh3.googleusercontent.com/aida-public/AB6AXuAInBQhkfjUtmtJzaEy1i7z5vgrg8OI27IbDR7IrTJZzf-K5kvkxNdWtwXyjyXoNH95dLJN1N3hVudMI8F8um3PHgr5TVq-bI1o1RmUpcxNu8h0Zwx2wpLtt5lCovAESW9kMRPTGaR1-b3_EBbJPo8FsF4nPaGGnCvYOwBIJjI0v6AvgKm8S08JSecBXEOmC_Ka21zw_u6Y3u0zYSUhwsFTR97d0gd1nTAwmg0T0b1LTVp9_SJOwlcnGbCKFcdBAH7dSI9-bGFEsyU",brandModel:"Ford F-150",year:"2023",licensePlate:"ABC-1234",odometer:"12450",fuelEfficiency:"19.2",fuelCapacity:"23 gal",primaryDriver:"John Smith",driverContact:"+1 (555) 123-4567",driverLicense:"DL123456789",repairHistory:[{date:"Oct 12, 2023",description:"Routine Oil Change & Filter",cost:"84.50",parts:"Full Synthetic 5W-30, Oil Filter 22A"},{date:"Sep 05, 2023",description:"Brake Pad Replacement (Front)",cost:"242.00",parts:"Heavy Duty Brake Pads (Set of 2)"},{date:"Jun 18, 2023",description:"Tire Rotation & Alignment",cost:"115.00",parts:"None"}]},{id:2,name:"Toyota Prius",plate:"CAMPUS-05",status:"In Repair",statusColor:"amber",location:"Shop A",fuelLevel:0,fuelType:"hybrid",image:"https://lh3.googleusercontent.com/aida-public/AB6AXuDPy6rv3zvP1AzP9iJNK-g1tRLh_8_wTjqdl1axPeZN9IDtyhodfTBye73wC4qAxTylvXFbAo_sVq-hLFpqgkH5vsTfpCwvbc8fEQGNDkRe7yKfjXTl-7jQQycPcjfTako_S8TQWeoFs1fSqVrMvK0LXSivMivTjmlKAMq2eVVfnnWYKOlvnXN0iUp8jURwkQ_fkfofMw1hNj4FZFxQxeiR6KnMQIlUypZLAB1OMVAUe0dc0bKHSP6KUxTm9RJrzvlPXKtv3SRgb2U",brandModel:"Toyota Prius",year:"2022",licensePlate:"XYZ-5678",odometer:"45600",fuelEfficiency:"58",fuelCapacity:"11.3 gal",primaryDriver:"Jane Doe",driverContact:"+1 (555) 987-6543",driverLicense:"DL987654321",repairHistory:[{date:"Nov 15, 2023",description:"Hybrid Battery Check",cost:"150.00",parts:"Battery Diagnostic"}]},{id:3,name:"Chevy Silverado",plate:"CAMPUS-09",status:"Active",statusColor:"green",location:"East Yard",fuelLevel:42,fuelType:"gas",image:"https://lh3.googleusercontent.com/aida-public/AB6AXuAgcR7SwDplAjaXRJdL7ToU2EsJ7r9pK0ni9jgskJzyPkMWWdt-SdHwpnt5VIJa94uKcYcH2fXEHOoESVWjwTj-0nKC4TabfSWSD29WGIBJ028ufHh6jhF5ve5FrPvW_LL5Sw4U5lgGDjN2CCptAraj98PVn4dKRPN51U3kPzu-hZn9znwKp7aol53aT-Xj7y5LdFqzWKSLI4YiWc0JjfREEtSJjtMOUQrAHMXcIiSaRnPCNaMxp8ygemLlBjmiLiZrt5F-c29N5iw",brandModel:"Chevy Silverado",year:"2021",licensePlate:"DEF-9012",odometer:"78200",fuelEfficiency:"16.8",fuelCapacity:"24 gal",primaryDriver:"Bob Johnson",driverContact:"+1 (555) 456-7890",driverLicense:"DL456789012",repairHistory:[]},{id:4,name:"Honda Civic",plate:"CAMPUS-12",status:"Maintenance",statusColor:"blue",location:"Garage 2",fuelLevel:90,fuelType:"gas",image:"https://lh3.googleusercontent.com/aida-public/AB6AXuDBNvGiURG1CONATY6-PZomFDaQxr22MedkllI88dvT7odwG9ABR5QrQMmutAQtXF1IZsc-4CzQe42-1y1hqA04j4ld8JqRQTCklCYSlkJkuAoYklzBxDRJUGOPWP8FWfSKIfjDWa400LA-KDAsPnI1eYXUhGPYmOD3Ome4UE-hSBP3INLnwtlta-QmcLN6nTnF89OAgh6C_RiZ9bQWY4r14UycjXvmkgc1NH_dg5SqHpqirmtxiimGpW3NQfJFn0wBhlBMqmWH_o",brandModel:"Honda Civic",year:"2020",licensePlate:"GHI-3456",odometer:"32100",fuelEfficiency:"32",fuelCapacity:"12.4 gal",primaryDriver:"Alice Brown",driverContact:"+1 (555) 234-5678",driverLicense:"DL234567890",repairHistory:[{date:"Aug 20, 2023",description:"Air Filter Replacement",cost:"45.00",parts:"Cabin Air Filter"}]},{id:5,name:"Ford Transit",plate:"CAMPUS-03",status:"Active",statusColor:"green",location:"Logistics Hub",fuelLevel:12,fuelType:"gas",image:"https://lh3.googleusercontent.com/aida-public/AB6AXuCd_C27XXxpcGe1p0ctdahwRwOnbFb6zrKGXdUUzEYSYiXM3-HeujtOWuUGy5V8UFaBCNEnaJ2h-6lj1U74M3q2a5Cg1xzp0yp-JmpBSyQl-rSI3rdA7vpDq0E4I6S9PNGOyfEkIXCRK4q1KZwOIj9aUriwkY7y5fOEc7q7jb_9pakyN_j9Y5EmojoxV2DMCB2HLtybOnfO2Nmq8w84j_w15cLgb3k_TKlYyu20pz9jFsg_DtbuYF1h4xAkX7BeaYrF3oTFwuJt2LE",brandModel:"Ford Transit",year:"2022",licensePlate:"JKL-7890",odometer:"45200",fuelEfficiency:"14.5",fuelCapacity:"25 gal",primaryDriver:"Mike Wilson",driverContact:"+1 (555) 321-0987",driverLicense:"DL321098765",repairHistory:[{date:"Jul 10, 2023",description:"Transmission Service",cost:"180.00",parts:"Transmission Fluid"}]},{id:6,name:"Tesla Model 3",plate:"CAMPUS-07",status:"Active",statusColor:"green",location:"EV Charging",fuelLevel:88,fuelType:"electric",image:"https://lh3.googleusercontent.com/aida-public/AB6AXuDoR_R-RkJm9jvbyuo3QPcO5kHLohsQO2GwlI9GfHnvpwJXnAlLoQ7-_sJO1SwpLPKVX003LOZmImkActY-cm9iOTEYq_MRJ9vsLoyt-BaKOUOp7tZ_BNPF8EQbn8eEml1tj7I4B6JKJ5MP9wu-yXynd-bTILb0Hfo1HRhWrSj9nsYVAEA2up_KJpFsfccGrzoovuvwirYVI7LOgg_ykD-oETcN5ybq5YWrCfgOpK0oLjGkoKyjNe2qV7bpv4hvaK3x6nP73J8QiMk",brandModel:"Tesla Model 3",year:"2023",licensePlate:"MNO-1234",odometer:"15800",fuelEfficiency:"132",fuelCapacity:"N/A",primaryDriver:"Sarah Davis",driverContact:"+1 (555) 654-3210",driverLicense:"DL654321098",repairHistory:[]}],Ev=[{id:1,name:"Alex Rivera",employeeId:"#8829",department:"Operations",role:"Admin",email:"alex.r@campus.edu",phone:"(555) 123-4567",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuBj2bWb0068v_SF3WtInIZ4uLNTe9iwxgdnj1COn3eSxWecy6qzebDyx3phykCcuYw3KvMdBIqoYIXuNp6PNYfhgfPxa1MNHx_A-oZmtlpWi_gomG8hhlUsKN7BONJrt_r5xdSI8Cki491dmTfbrtdY07sCe_5ItAVriuCvy7m15cSLioX2ylm5QMt9bQMFOP9ZflNEG9OD1Rgubn8-o9BFRqTjdmHF9DO6fXCcqkYzAkelPyamseMnBZl7e8EaQyBDH4OOcTbqKZw",status:"online"},{id:2,name:"Sam Chen",employeeId:"#4412",department:"Transportation",role:"Driver",email:"s.chen@campus.edu",phone:"(555) 987-6543",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuDaf_WsnG7nYnQ-nhA3LO20PbZ22nQ8ePanwUAQCWr0SNj3c3aYAgI55HUmwD4Lx0H4Q9z5474O8vkKFEfLwaUWJ1A7LQqOcdYmDOGlNtM-5UMPhCLaE7qRqrutISw75LvHu6VTrOpy7qtQ716CtJSs6g7hUR67I78ue0L0ZMuz69ShBbmfeftKWhJb4FcaoE-fLeSfCjHWPSnCx0QopmGFMuD77Z8oGPVKH6XDv0HhVP9eeWx814t-bFtejWJFY3fSmZDmsUXg9xI",status:"offline"},{id:3,name:"Jordan Smith",employeeId:"#9021",department:"Maintenance",role:"Technician",email:"j.smith@campus.edu",phone:"(555) 234-5678",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuB50GxcIk9BVDH4twTsUs7rv5unJhhteRUaS8s8cGUlsX-fNyarzxqgkV2Yv6iVs0eq1VdQPDwNhNxMRNUyPGfmh9s4mHbsiEPseR1y-0AWoBuJiIP9p2b2nseE5qGk2gao84E2bKDcRo7CRNELWwmSRhJqTDbsJuR_dEB4A0idBxtx-LprBA9zg8RiMkUQakY_uqw4RNvRoziOiaU2_VjcKN4wBNWYvKmmbupbJBO7RfybAixDAj5tAqobe6YTLgo2wzdyMbcy4M4",status:"online"},{id:4,name:"Taylor Reed",employeeId:"#5521",department:"Transportation",role:"Driver",email:"t.reed@campus.edu",phone:"(555) 777-8899",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuA-5mHE42WP8aBgOUE019KF-LjByVHnOS0UX3rwDSsLYMTfgo5DhDe_8QIYdFTln6bvuqQ6JzU-AhoR5fgpV3aJ6zKK6tZ34Lki86iQXeqO12iKe2LWnhwQ6SQXJYr8iONrPnrlOTmVfp6b2jKIGNmShyrARMO0Io44XQNM0SmYuBfIhX79MdQKW5-OLQrLZg4WorEs4zMbmQ0d29WaJSUY205t84Z24ribiLUEkT6NK8ssGnGcLXqXYD1uoRwcXOwzmmiD9t--MeI",status:"away"},{id:5,name:"Riley Page",employeeId:"#1022",department:"Maintenance",role:"Technician",email:"r.page@campus.edu",phone:"(555) 345-6789",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuCiC9R7lqxjgPcgmMiNpRMnDqKrffcMFKBQP7pSyZWaIlpI-rZhPxKfo9eCPTZjKJ5eEICnuBMn6vu4BkyLlOqsj39Xf0dsreWBHN1XYVhuEmJeG6NQHRa-ZEEZibYYzYxxdCjMAWM21IdMVgRPwJST2-zdXSQ0D5ozZt_s2hl6KlHmM-po_kA9UdngwR8HRYTmAWL15Q_RiK6DRfuPGvr0p_7lJ6gbNZtd24dCCNvH0Nr8xCf1SZf47ENt4xyFbUYA62zs0s0pciA",status:"online"},{id:6,name:"Casey Wright",employeeId:"#7734",department:"IT Systems",role:"Admin",email:"c.wright@campus.edu",phone:"(555) 111-2222",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuAkNOE-y5KxtT1LlPtBUqakyzR5FL1LBH_9SkjExJiv1mK7ognRdRb8ZhwV-LJqV5fkVlEVXbB3o2QN_9tg2Y3JQiz5YVZxhJWAg22QAIZ7e6NOj63dW904XfWKUq5XCweIeQScJ7EEp9uJPUBujk7Uk7eIqemUpe6SLP4F98CwBuUKlhmFBhhEucDUUvkUxAJEzxnyGGjCdD4jw18HOoBMBmB3corwkU_9zzIT7_5dznaL0ntMESlglScpwpTCYrPrZcnsoka8I_A",status:"online"},{id:7,name:"Jamie Lowe",employeeId:"#3341",department:"Logistics",role:"Driver",email:"j.lowe@campus.edu",phone:"(555) 444-5566",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuCC6JScDQz_fGcL4xaSJK3DRDeMK6jLdJ6rHXvNfN8P9t0nAqmU1egOZLLAflggkkeyJ7p6hqRIuns2RRWDYecOxi0uztjpi02zJieexVuHFjODlsom50gXeeC1Za1wc-G3o2k0MqJNaIYjoaG20udrnqzQUh5bFiV2c-TgodDGUt88ZDNui1jDTDcPF0tEyGBZUu_aIZvi_J5loR84NvgDpKIvffu5VA0xI6Rgmel6N3y0xW-rB_LvaKdMZXspZoVGvCldwJ8b2p0",status:"offline"},{id:8,name:"Morgan Vance",employeeId:"#6629",department:"Fleet Services",role:"Technician",email:"m.vance@campus.edu",phone:"(555) 999-0000",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuC-vb3YOS-kqzJdmFMq9YqpvBHm11sQcqyouYf3idhDrUaZRdV-zZzTfc2ya9IS4zwDbN5eTDzkjy1pWtxG2njp74pPofq2ezjsFT4gS2BWvmmw270f1CoyoKWKwqM5XHdHiFmz-_75-uhZP4iLLFWA9UPgK_HjaykjiiyzyutkRGidza7prQ6LjNqOfV03QmPEzsEuIXCIWh4eTolkBf_iS4msB9CacwpLingX_RNm0TSNjtBKXs_kkn8FIlw6lR7rSUDzG3-320s",status:"online"}],jm=()=>{r(!0)},Mv=()=>{r(!1),o(null)},_v=S=>{o(S),r(!0)},Dv=()=>{d(!1)},Rv=()=>{fetchAccessories()},Ov=()=>{m(!0)},Bv=S=>{console.log("Profile updated:",S)};return s.jsxs(g8,{children:[s.jsxs(x8,{children:[s.jsxs(v8,{children:[s.jsx(j8,{children:s.jsxs(w8,{children:[s.jsx(S8,{children:s.jsx("i",{"data-feather":"truck",className:"fi-icon"})}),s.jsxs(k8,{children:[s.jsx("h1",{children:"Fleet Manager"}),s.jsx("p",{children:"Campus Operations"})]})]})}),s.jsx(N8,{children:vm.map(S=>s.jsxs(A8,{href:"#",className:n===S.id?"active":"",onClick:G=>{G.preventDefault(),a(S.id)},children:[s.jsx("i",{"data-feather":S.icon,className:"fi-icon"}),s.jsx("span",{children:S.label})]},S.id))})]}),s.jsx(T8,{children:n==="accounts"?s.jsxs(Zr,{onClick:()=>console.log("Add User"),children:[s.jsx("i",{"data-feather":"person_add",className:"fi-icon",style:{width:"14px",height:"14px"}}),s.jsx("span",{children:"Add User"})]}):n==="messages"?s.jsxs(Zr,{onClick:()=>console.log("New Message"),children:[s.jsx("i",{"data-feather":"message-circle",className:"fi-icon",style:{width:"14px",height:"14px"}}),s.jsx("span",{children:"New Message"})]}):n==="accessories"?s.jsxs(Zr,{onClick:()=>d(!0),children:[s.jsx("i",{"data-feather":"package",className:"fi-icon",style:{width:"14px",height:"14px"}}),s.jsx("span",{children:"Add Accessory"})]}):s.jsxs(Zr,{onClick:jm,children:[s.jsx("i",{"data-feather":"plus",className:"fi-icon",style:{width:"14px",height:"14px"}}),s.jsx("span",{children:"New Vehicle"})]})})]}),s.jsxs(C8,{children:[s.jsxs(z8,{children:[s.jsx(E8,{children:s.jsx(M8,{children:s.jsx("input",{type:"text",placeholder:"Search vehicles, drivers, or reports..."})})}),s.jsxs(_8,{children:[s.jsx(D8,{children:s.jsx("i",{"data-feather":"bell",className:"fi-icon"})}),s.jsx(R8,{children:s.jsx("i",{"data-feather":"settings",className:"fi-icon"})}),s.jsx(O8,{}),s.jsx(xm,{currentUser:t,onLogout:e,onViewProfile:Ov,onChangePassword:()=>tn(!0)})]})]}),s.jsxs(B8,{children:[n==="overview"&&s.jsxs(s.Fragment,{children:[s.jsxs(Fc,{children:[s.jsx("h2",{children:"Operational Overview"}),s.jsx("p",{children:"Real-time performance metrics for today, Oct 24th."})]}),s.jsx(L8,{children:Tv.map((S,G)=>s.jsxs(V8,{children:[s.jsxs(U8,{children:[s.jsx(H8,{$bg:S.bg,$color:S.color,children:s.jsx("i",{"data-feather":S.icon,className:"fi-icon"})}),s.jsxs(Y8,{$positive:S.positive,children:[s.jsx("i",{"data-feather":"trending-up",className:"fi-icon",style:{width:"12px",height:"12px"}}),S.trend]})]}),s.jsx(q8,{children:S.value}),s.jsx(G8,{children:S.title})]},S.title))}),s.jsx(X8,{children:s.jsxs($8,{children:[s.jsx(P8,{children:s.jsx("h3",{children:"Recent Activity"})}),s.jsx(K8,{children:Cv.map(S=>s.jsxs(F8,{children:[S.avatar?s.jsx(Q8,{style:{backgroundImage:`url('${S.avatar}')`}}):s.jsx("div",{style:{width:"40px",height:"40px",background:"rgba(19, 127, 236, 0.1)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#137fec"},children:s.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"20px"},children:"inventory"})}),s.jsxs(Z8,{children:[s.jsxs("p",{children:[s.jsx("span",{children:S.user})," ",S.action]}),s.jsxs(I8,{children:[s.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"12px"},children:"schedule"}),S.time]})]})]},S.id))}),s.jsx(J8,{children:s.jsx(W8,{children:"View Full Activity Log"})})]})})]}),n==="accessories"&&s.jsx(s8,{onBack:()=>a("overview"),showHeader:!1}),n==="accessories_old"&&s.jsxs(s.Fragment,{children:[s.jsxs(Fc,{children:[s.jsx("h2",{children:"Accessories Management"}),s.jsx("p",{children:"Manage inventory, stock levels, and accessory information."})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem"},children:[s.jsx("div",{style:{display:"flex",gap:"1rem"},children:s.jsxs("button",{onClick:()=>d(!0),style:{padding:"0.75rem 1.5rem",background:"linear-gradient(135deg, #10b981 0%, #059669 100%)",color:"white",border:"none",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:"600",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"1rem"},children:"add"}),"Add Accessory"]})}),s.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Total: ",y.length," accessories"]})]}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1.25rem"},children:y.map(S=>s.jsxs("div",{style:{background:"white",border:"1px solid #e2e8f0",borderRadius:"0.75rem",overflow:"hidden",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)",transition:"all 0.2s ease"},onMouseEnter:G=>G.target.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)",onMouseLeave:G=>G.target.style.boxShadow="0 1px 3px rgba(0, 0, 0, 0.1)",children:[S.image&&s.jsx("div",{style:{width:"100%",height:"150px",backgroundImage:`url(${S.image})`,backgroundSize:"cover",backgroundPosition:"center"}}),s.jsxs("div",{style:{padding:"1.5rem"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.75rem"},children:[s.jsxs("div",{children:[s.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:"700",color:"#0d141b",margin:0},children:S.name}),s.jsxs("p",{style:{fontSize:"0.875rem",color:"#64748b",margin:"0.25rem 0"},children:["SKU: ",S.sku]})]}),s.jsx("span",{style:{padding:"0.25rem 0.75rem",borderRadius:"0.5rem",fontSize:"0.75rem",fontWeight:"600",background:S.category==="tires"?"#dbeafe":S.category==="battery"?"#fef3c7":S.category==="brakes"?"#fee2e2":"#f3f4f6",color:S.category==="tires"?"#1e40af":S.category==="battery"?"#92400e":S.category==="brakes"?"#dc2626":"#374151"},children:S.category.charAt(0).toUpperCase()+S.category.slice(1)})]}),s.jsxs("div",{style:{marginBottom:"1rem"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Stock Level"}),s.jsx("span",{style:{fontSize:"0.875rem",fontWeight:"600",color:S.stock_level===0?"#dc2626":S.stock_level<=S.min_stock_level?"#d97706":"#059669"},children:S.stock_level})]}),s.jsx("div",{style:{width:"100%",height:"6px",background:"#e5e7eb",borderRadius:"3px",overflow:"hidden"},children:s.jsx("div",{style:{width:`${Math.min(S.stock_level/(S.min_stock_level*2)*100,100)}%`,height:"100%",background:S.stock_level===0?"#dc2626":S.stock_level<=S.min_stock_level?"#d97706":"#059669",borderRadius:"3px"}})}),s.jsxs("p",{style:{fontSize:"0.75rem",color:"#64748b",marginTop:"0.25rem"},children:["Min: ",S.min_stock_level]})]}),s.jsx("div",{style:{marginBottom:"1rem"},children:s.jsxs("p",{style:{fontSize:"1rem",fontWeight:"700",color:"#0d141b",margin:0},children:["$",parseFloat(S.price).toFixed(2)]})}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[s.jsx("button",{onClick:()=>{alert(`View details for ${S.name}`)},style:{flex:1,padding:"0.5rem",background:"#f3f4f6",color:"#374151",border:"1px solid #d1d5db",borderRadius:"0.375rem",fontSize:"0.875rem",fontWeight:"600",cursor:"pointer"},children:"View"}),s.jsx("button",{onClick:()=>{confirm(`Are you sure you want to delete ${S.name}?`)&&wv(S.id)},style:{flex:1,padding:"0.5rem",background:"#fee2e2",color:"#dc2626",border:"1px solid #fecaca",borderRadius:"0.375rem",fontSize:"0.875rem",fontWeight:"600",cursor:"pointer"},children:"Delete"})]})]})]},S.id))}),y.length===0&&s.jsxs("div",{style:{textAlign:"center",padding:"4rem 2rem",color:"#64748b"},children:[s.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"4rem",marginBottom:"1rem",display:"block"},children:"inventory_2"}),s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"600",marginBottom:"0.5rem"},children:"No accessories yet"}),s.jsx("p",{style:{fontSize:"0.875rem"},children:"Add your first accessory to get started with inventory management."})]})]}),n==="accounts"&&s.jsx(h8,{onBack:()=>a("overview"),showHeader:!1}),n==="accounts_old"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8",children:[s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsxs("h1",{className:"text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] flex items-center gap-3",children:[s.jsx("span",{className:"material-symbols-outlined text-5xl text-primary",children:"groups"}),"User Directory"]}),s.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-base font-normal",children:"Manage and oversee all campus staff, drivers, and technicians."})]}),s.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700",children:[s.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"groups"}),s.jsx("span",{className:"font-bold text-slate-900 dark:text-white",children:"124"})," Total Staff"]})]}),s.jsx("div",{className:"mb-6",children:s.jsxs("div",{className:"flex gap-2 flex-wrap",children:[s.jsx("button",{className:"flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 text-sm font-semibold transition-all",children:"All Roles"}),s.jsxs("button",{className:"flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all",children:["Admins",s.jsx("span",{className:"bg-slate-300 dark:bg-slate-700 text-[10px] px-1.5 rounded-full",children:"12"})]}),s.jsxs("button",{className:"flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all",children:["Drivers",s.jsx("span",{className:"bg-slate-300 dark:bg-slate-700 text-[10px] px-1.5 rounded-full",children:"84"})]}),s.jsxs("button",{className:"flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all",children:["Technicians",s.jsx("span",{className:"bg-slate-300 dark:bg-slate-700 text-[10px] px-1.5 rounded-full",children:"28"})]})]})}),s.jsxs("div",{className:"flex items-center justify-between mb-6 flex-wrap gap-4",children:[s.jsxs("div",{className:"flex gap-2 flex-wrap",children:[s.jsx("button",{className:"flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 text-sm font-semibold transition-all",children:"All Roles"}),s.jsxs("button",{className:"flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all",children:["Admins",s.jsx("span",{className:"bg-slate-300 dark:bg-slate-700 text-[10px] px-1.5 rounded-full",children:"12"})]}),s.jsxs("button",{className:"flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all",children:["Drivers",s.jsx("span",{className:"bg-slate-300 dark:bg-slate-700 text-[10px] px-1.5 rounded-full",children:"84"})]}),s.jsxs("button",{className:"flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all",children:["Technicians",s.jsx("span",{className:"bg-slate-300 dark:bg-slate-700 text-[10px] px-1.5 rounded-full",children:"28"})]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("button",{className:"flex h-9 items-center justify-center gap-x-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700",children:[s.jsx("span",{className:"material-symbols-outlined text-[20px]",children:"filter_list"}),s.jsx("span",{className:"text-sm font-medium",children:"Filters"})]}),s.jsxs("button",{className:"flex h-9 items-center justify-center gap-x-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700",children:[s.jsx("span",{className:"material-symbols-outlined text-[20px]",children:"sort"}),s.jsx("span",{className:"text-sm font-medium",children:"Sort"})]})]})]}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:Ev.map(S=>s.jsxs("div",{className:"group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col p-5",children:[s.jsxs("div",{className:"flex justify-between items-start mb-4",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"w-16 h-16 rounded-full bg-center bg-cover border-2 border-white dark:border-slate-800 shadow-sm",style:{backgroundImage:`url("${S.avatar}")`}}),s.jsx("div",{className:`absolute bottom-0 right-0 w-4 h-4 border-2 border-white dark:border-slate-900 rounded-full ${S.status==="online"?"bg-green-500":S.status==="away"?"bg-orange-400":"bg-slate-300 dark:bg-slate-600"}`})]}),s.jsx("span",{className:`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${S.role==="Admin"?"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300":S.role==="Driver"?"bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300":"bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300"}`,children:S.role})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h3",{className:"text-slate-900 dark:text-white font-bold text-lg leading-tight",children:S.name}),s.jsxs("p",{className:"text-slate-500 dark:text-slate-400 text-sm",children:[S.employeeId," • ",S.department]})]}),s.jsxs("div",{className:"space-y-2 mb-6",children:[s.jsxs("div",{className:"flex items-center gap-2 text-slate-600 dark:text-slate-400",children:[s.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"mail"}),s.jsx("span",{className:"text-xs truncate",children:S.email})]}),s.jsxs("div",{className:"flex items-center gap-2 text-slate-600 dark:text-slate-400",children:[s.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"call"}),s.jsx("span",{className:"text-xs",children:S.phone})]})]}),s.jsxs("div",{className:"mt-auto grid grid-cols-2 gap-3",children:[s.jsxs("button",{className:"flex items-center justify-center gap-2 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors",children:[s.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"edit"}),"Edit"]}),s.jsxs("button",{className:"flex items-center justify-center gap-2 h-9 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20",children:[s.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"chat"}),"Message"]})]})]},S.id))}),s.jsxs("div",{className:"mt-12 flex flex-col items-center gap-4",children:[s.jsxs("button",{className:"px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2",children:[s.jsx("span",{children:"Load More Users"}),s.jsx("span",{className:"material-symbols-outlined",children:"expand_more"})]}),s.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-xs",children:"Showing 8 of 124 staff members"})]})]}),n==="messages"&&s.jsx(a8,{onBack:()=>a("overview"),showHeader:!1}),n==="vehicles"&&f?s.jsx(n8,{vehicle:f,onBack:jv,showHeader:!1,onEditVehicle:_v}):n==="vehicles"&&s.jsxs(s.Fragment,{children:[s.jsxs(eN,{children:[s.jsxs(tN,{children:[s.jsx("h2",{children:"Vehicle Inventory"}),s.jsxs("p",{children:["Manage and track ",zv.length," vehicles across campus"]})]}),s.jsxs(nN,{children:[s.jsxs(tg,{children:[s.jsx("span",{children:"Status: All"}),s.jsx("span",{className:"material-symbols-outlined",children:"expand_more"})]}),s.jsxs(tg,{children:[s.jsx("span",{children:"Type: All"}),s.jsx("span",{className:"material-symbols-outlined",children:"expand_more"})]}),s.jsx(gv,{children:s.jsx("span",{className:"material-symbols-outlined",children:"filter_list"})})]})]}),s.jsxs(aN,{children:[E?s.jsx("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"2rem"},children:"Loading vehicles..."}):ce?s.jsxs("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"2rem",color:"red"},children:["Error loading vehicles: ",ce]}):p.length===0?s.jsx("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"2rem"},children:"No vehicles found. Add your first vehicle!"}):p.map(S=>{var G;return s.jsxs(ym,{children:[s.jsx(iN,{style:{backgroundImage:S.image?`url('http://127.0.0.1:8001${S.image}')`:"none",backgroundColor:"#f1f5f9"},children:s.jsx(sN,{status:S.status,children:S.status})}),s.jsxs(rN,{children:[s.jsxs(lN,{children:[S.year," ",S.make," ",S.model]}),s.jsxs(oN,{children:[s.jsx(cN,{children:S.license_plate}),s.jsxs(dN,{children:[s.jsx("span",{className:"material-symbols-outlined",children:S.status==="maintenance"?"engineering":"location_on"}),S.assigned_driver_name||"Unassigned"]})]})]}),s.jsxs(uN,{children:[s.jsxs(fN,{children:[s.jsx("span",{className:"material-symbols-outlined",children:"speed"}),s.jsxs("span",{children:[((G=S.mileage)==null?void 0:G.toLocaleString())||0," mi"]})]}),s.jsxs(mN,{onClick:()=>vv(S),children:["View Details",s.jsx("i",{"data-feather":"arrow-right",className:"fi-icon"})]})]})]},S.id)}),s.jsxs(hN,{onClick:jm,children:[s.jsx(pN,{children:s.jsx("span",{className:"material-symbols-outlined",children:"add"})}),s.jsxs(gN,{children:[s.jsx("p",{children:"Add New Vehicle"}),s.jsx("p",{children:"Register a new asset to the fleet inventory"})]})]})]}),s.jsx(xN,{children:"Load More Vehicles"})]}),n==="reports"&&s.jsx(p8,{onBack:()=>a("overview"),showHeader:!1}),n==="reports_old"&&s.jsxs(s.Fragment,{children:[s.jsxs(Fc,{children:[s.jsx("h2",{children:"Driver Reports & Issues"}),s.jsx("p",{children:"Review and manage driver submissions"})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"2rem"},children:[s.jsxs("div",{style:{background:"white",borderRadius:"0.75rem",border:"1px solid #e2e8f0",padding:"1.5rem"},children:[s.jsxs("h3",{style:{fontSize:"1.25rem",fontWeight:"700",color:"#0d141b",marginBottom:"1rem"},children:["Driver Reports (",L.length,")"]}),s.jsx("div",{style:{maxHeight:"400px",overflowY:"auto"},children:L.length>0?L.map(S=>s.jsx("div",{children:s.jsx("div",{onClick:()=>Sv(S),style:{border:"1px solid #e2e8f0",borderRadius:"0.5rem",padding:"1rem",marginBottom:"0.5rem",cursor:"pointer",backgroundColor:"white",transition:"all 0.2s ease",":hover":{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)"}},onMouseEnter:G=>G.target.style.boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)",onMouseLeave:G=>G.target.style.boxShadow="none",children:s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("h4",{style:{fontSize:"1rem",fontWeight:"600",color:"#0d141b",margin:0},children:S.title}),s.jsxs("p",{style:{fontSize:"0.875rem",color:"#64748b",margin:"0.25rem 0"},children:[new Date(S.submitted_at).toLocaleDateString()," • ",S.driver_name]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("span",{style:{padding:"0.25rem 0.5rem",borderRadius:"0.25rem",fontSize:"0.75rem",fontWeight:"600",background:S.report_type==="daily"?"#dbeafe":S.report_type==="weekly"?"#dcfce7":"#fef3c7",color:S.report_type==="daily"?"#1e40af":S.report_type==="weekly"?"#166534":"#92400e"},children:S.report_type.charAt(0).toUpperCase()+S.report_type.slice(1)}),!S.is_read&&s.jsx("span",{style:{width:"8px",height:"8px",background:"#ef4444",borderRadius:"50%"}})]})]})})},S.id)):s.jsx("p",{style:{textAlign:"center",color:"#64748b",padding:"2rem"},children:"No reports submitted yet"})})]}),s.jsxs("div",{style:{background:"white",borderRadius:"0.75rem",border:"1px solid #e2e8f0",padding:"1.5rem"},children:[s.jsxs("h3",{style:{fontSize:"1.25rem",fontWeight:"700",color:"#0d141b",marginBottom:"1rem"},children:["Issue Reports (",F.length,")"]}),s.jsx("div",{style:{maxHeight:"400px",overflowY:"auto"},children:F.length>0?F.map(S=>s.jsx("div",{children:s.jsx("div",{onClick:()=>kv(S),style:{border:"1px solid #e2e8f0",borderRadius:"0.5rem",padding:"1rem",marginBottom:"0.5rem",cursor:"pointer",backgroundColor:"white",transition:"all 0.2s ease"},onMouseEnter:G=>G.target.style.boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)",onMouseLeave:G=>G.target.style.boxShadow="none",children:s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("h4",{style:{fontSize:"1rem",fontWeight:"600",color:"#0d141b",margin:0},children:S.title}),s.jsxs("p",{style:{fontSize:"0.875rem",color:"#64748b",margin:"0.25rem 0"},children:[new Date(S.reported_at).toLocaleDateString()," • ",S.driver_name,S.vehicle_info&&` • ${S.vehicle_info}`]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("span",{style:{padding:"0.25rem 0.5rem",borderRadius:"0.25rem",fontSize:"0.75rem",fontWeight:"600",background:S.priority==="critical"?"#fee2e2":S.priority==="high"?"#fed7aa":S.priority==="medium"?"#fef3c7":"#dbeafe",color:S.priority==="critical"?"#dc2626":S.priority==="high"?"#ea580c":S.priority==="medium"?"#ca8a04":"#2563eb"},children:S.priority.charAt(0).toUpperCase()+S.priority.slice(1)}),s.jsx("span",{style:{padding:"0.25rem 0.5rem",borderRadius:"0.25rem",fontSize:"0.75rem",fontWeight:"600",background:S.status==="resolved"?"#dcfce7":S.status==="in_progress"?"#dbeafe":"#fee2e2",color:S.status==="resolved"?"#166534":S.status==="in_progress"?"#1e40af":"#dc2626"},children:S.status.replace("_"," ").charAt(0).toUpperCase()+S.status.replace("_"," ").slice(1)})]})]})})},S.id)):s.jsx("p",{style:{textAlign:"center",color:"#64748b",padding:"2rem"},children:"No issues reported yet"})})]})]})]})]})]}),Pa&&D&&s.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"1rem"},children:s.jsxs("div",{style:{background:"white",borderRadius:"1rem",padding:"2rem",maxWidth:"600px",width:"100%",maxHeight:"80vh",overflow:"auto",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1.5rem"},children:[s.jsxs("div",{children:[s.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#0d141b",margin:0},children:D.title}),s.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"0.5rem"},children:[s.jsxs("span",{style:{padding:"0.25rem 0.75rem",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:"600",background:D.report_type==="daily"?"#dbeafe":D.report_type==="weekly"?"#dcfce7":"#fef3c7",color:D.report_type==="daily"?"#1e40af":D.report_type==="weekly"?"#166534":"#92400e"},children:[D.report_type.charAt(0).toUpperCase()+D.report_type.slice(1)," Report"]}),s.jsxs("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:[new Date(D.submitted_at).toLocaleDateString()," by ",D.driver_name]})]})]}),s.jsx("button",{onClick:()=>{en(!1),ae(null)},style:{background:"none",border:"none",fontSize:"1.5rem",cursor:"pointer",color:"#64748b",padding:"0.25rem",borderRadius:"0.25rem"},onMouseEnter:S=>S.target.style.backgroundColor="#f3f4f6",onMouseLeave:S=>S.target.style.backgroundColor="transparent",children:"×"})]}),s.jsxs("div",{style:{marginBottom:"2rem"},children:[s.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:"600",color:"#0d141b",marginBottom:"1rem"},children:"Report Content"}),s.jsx("div",{style:{backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"0.5rem",padding:"1.5rem",whiteSpace:"pre-wrap",lineHeight:"1.6",fontSize:"1rem",color:"#374151"},children:D.content})]}),D.admin_notes&&s.jsxs("div",{style:{marginBottom:"2rem"},children:[s.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:"600",color:"#0d141b",marginBottom:"1rem"},children:"Admin Notes"}),s.jsx("div",{style:{backgroundColor:"#fef3c7",border:"1px solid #f59e0b",borderRadius:"0.5rem",padding:"1rem",fontSize:"0.875rem",color:"#92400e"},children:D.admin_notes})]}),s.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"1rem"},children:s.jsx("button",{onClick:()=>{en(!1),ae(null)},style:{padding:"0.75rem 1.5rem",backgroundColor:"#f3f4f6",color:"#374151",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:"600",cursor:"pointer"},children:"Close"})})]})}),Ot&&I&&s.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"1rem"},children:s.jsxs("div",{style:{background:"white",borderRadius:"1rem",padding:"2rem",maxWidth:"600px",width:"100%",maxHeight:"80vh",overflow:"auto",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1.5rem"},children:[s.jsxs("div",{children:[s.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#0d141b",margin:0},children:I.title}),s.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"0.5rem",flexWrap:"wrap"},children:[s.jsxs("span",{style:{padding:"0.25rem 0.75rem",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:"600",background:I.priority==="critical"?"#fee2e2":I.priority==="high"?"#fed7aa":I.priority==="medium"?"#fef3c7":"#dbeafe",color:I.priority==="critical"?"#dc2626":I.priority==="high"?"#ea580c":I.priority==="medium"?"#ca8a04":"#2563eb"},children:[I.priority.charAt(0).toUpperCase()+I.priority.slice(1)," Priority"]}),s.jsx("span",{style:{padding:"0.25rem 0.75rem",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:"600",background:I.status==="resolved"?"#dcfce7":I.status==="in_progress"?"#dbeafe":"#fee2e2",color:I.status==="resolved"?"#166534":I.status==="in_progress"?"#1e40af":"#dc2626"},children:I.status.replace("_"," ").charAt(0).toUpperCase()+I.status.replace("_"," ").slice(1)}),s.jsxs("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:[new Date(I.reported_at).toLocaleDateString()," by ",I.driver_name]})]}),I.vehicle_info&&s.jsxs("p",{style:{fontSize:"0.875rem",color:"#64748b",marginTop:"0.5rem"},children:["Vehicle: ",I.vehicle_info]})]}),s.jsx("button",{onClick:()=>{ha(!1),yt(null)},style:{background:"none",border:"none",fontSize:"1.5rem",cursor:"pointer",color:"#64748b",padding:"0.25rem",borderRadius:"0.25rem"},onMouseEnter:S=>S.target.style.backgroundColor="#f3f4f6",onMouseLeave:S=>S.target.style.backgroundColor="transparent",children:"×"})]}),s.jsxs("div",{style:{marginBottom:"2rem"},children:[s.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:"600",color:"#0d141b",marginBottom:"1rem"},children:"Issue Description"}),s.jsx("div",{style:{backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"0.5rem",padding:"1.5rem",whiteSpace:"pre-wrap",lineHeight:"1.6",fontSize:"1rem",color:"#374151"},children:I.description})]}),s.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"1rem"},children:s.jsx("button",{onClick:()=>{ha(!1),yt(null)},style:{padding:"0.75rem 1.5rem",backgroundColor:"#f3f4f6",color:"#374151",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"0.875rem",fontWeight:"600",cursor:"pointer"},children:"Close"})})]})}),s.jsx(b8,{children:vm.map(S=>s.jsx(y8,{$active:n===S.id,onClick:()=>a(S.id),children:s.jsx("i",{"data-feather":S.icon,className:"fi-icon"})},S.id))}),s.jsx(T6,{isOpen:i,onClose:Mv,onSave:Nv,vehicle:l}),s.jsx(mv,{isOpen:c,onClose:Dv,onAccessoryAdded:Rv}),s.jsx(bm,{isOpen:u,onClose:()=>m(!1),currentUser:t,onProfileUpdate:Bv}),s.jsx(t8,{isOpen:Ka,onClose:()=>tn(!1)})]})},bN=h.div`
  height: 100vh;
  background-color: #f6f7f8;
  display: flex;
  flex-direction: column;
  font-family: 'Manrope', sans-serif;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,yN=h.aside`
  width: 256px;
  background: white;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  @media (max-width: 767px) {
    display: none;
  }
`,vN=h.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e2e8f0;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    display: none;
  }
`,jN=h.button`
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: ${e=>e.$active?"#137fec":"#64748b"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;

  &:hover {
    background: #f1f5f9;
    color: #137fec;
  }

  i {
    font-size: 1.25rem;
  }
`,wN=h.div`
  padding: 1.5rem 0;
`,SN=h.div`
  padding: 0 1.5rem 2rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1rem;
`,kN=h.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,NN=h.div`
  background: #137fec;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: white;
`,AN=h.div`
  h1 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }
  p {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 500;
    margin: 0;
  }
`,TN=h.nav`
  padding: 0 1rem;
`,CN=h.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s ease;

  i {
    color: inherit;
  }

  &:hover {
    background: #f1f5f9;
    color: #1e293b;
  }

  &.active {
    background: rgba(19, 127, 236, 0.1);
    color: #137fec;
    border-left: 4px solid #137fec;
  }
`,zN=h.div`
  padding: 1.5rem;
  border-top: 1px solid #e2e8f0;
`,EN=h.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 767px) {
    padding-bottom: 80px;
  }
`,MN=h.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
`,_N=h.div`
  flex: 1;
  max-width: 20rem;
`,DN=h.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 2.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    background: #f8fafc;
    font-size: 0.875rem;
    color: #374151;

    &:focus {
      outline: none;
      border-color: #137fec / 0.2;
      box-shadow: 0 0 0 3px rgba(19, 127, 236, 0.1);
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/%3E%3C/svg%3E") no-repeat center;
    background-size: contain;
  }
`,RN=h.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`,ON=h.button`
  position: relative;
  padding: 0.5rem;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: background 0.2s ease;

  &:hover {
    background: #f1f5f9;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    background: #ef4444;
    border: 2px solid white;
    border-radius: 50%;
  }
`,BN=h.button`
  padding: 0.5rem;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: background 0.2s ease;

  &:hover {
    background: #f1f5f9;
  }
`,LN=h.div`
  width: 1px;
  height: 2rem;
  background: #e2e8f0;
`;h.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;h.div`
  text-align: right;
  display: none;

  @media (min-width: 640px) {
    display: block;
  }

  p:first-child {
    font-size: 0.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }

  p:last-child {
    font-size: 0.75rem;
    color: #64748b;
    margin: 0;
  }
`;h.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: center no-repeat;
  background-size: cover;
  border: 1px solid #e2e8f0;
`;const VN=h.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`,Ir=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 300px;
`;h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;h.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 120px;
`;const UN=h.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      width: 2rem;
      height: 2rem;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23137fec'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/%3E%3C/svg%3E") no-repeat center;
      background-size: contain;
    }
  }

  p {
    color: #64748b;
    font-size: 0.875rem;
  }
`,HN=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,YN=h.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,qN=h.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`,GN=h.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$bg||"#137fec"}1a;
  color: ${e=>e.$color||"#137fec"};
`,XN=h.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${e=>e.$positive?"#10b981":"#ef4444"};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,$N=h.div`
  font-size: 2.25rem;
  font-weight: 800;
  color: #0d141b;
  margin-bottom: 0.25rem;
`,PN=h.div`
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
`,bv=h.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`,KN=h.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.5s ease;

  ${bv}:hover & {
    transform: scale(1.05);
  }
`,FN=h.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;

  ${e=>{switch(e.status){case"Active":return`
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
        `;case"In Repair":return`
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        `;case"Maintenance":return`
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        `;default:return`
          background: rgba(107, 114, 128, 0.1);
          color: #6b7280;
        `}}}
`;h.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;h.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0;
`;h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25rem;
`;h.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
`;h.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #64748b;

  span:first-child {
    font-size: 0.75rem;
  }
`;h.div`
  border-top: 1px solid #e2e8f0;
  padding: 1rem;
  margin-top: auto;
  background: rgba(248, 250, 252, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span:first-child {
    color: #137fec;
    font-size: 1rem;
  }

  span:last-child {
    font-size: 0.75rem;
    font-weight: 500;
    color: #0d141b;
  }
`;h.button`
  font-size: 0.75rem;
  font-weight: 700;
  color: #137fec;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;

  ${bv}:hover & {
    text-decoration: underline;
  }

  i {
    width: 0.875rem;
    height: 0.875rem;
  }
`;const QN=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ZN=h.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
`,IN=h.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$bg||"#137fec"}1a;
  color: ${e=>e.$color||"#137fec"};
  margin-bottom: 1rem;
`,JN=h.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0 0 0.5rem 0;
`,WN=h.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
`,eA=({onLogout:e,currentUser:t})=>{const[n,a]=A.useState("overview"),[i,r]=A.useState(null),[l,o]=A.useState(!1),[c,d]=A.useState(!1),[u,m]=A.useState({report_type:"daily",title:"",content:""}),[f,x]=A.useState({title:"",description:"",priority:"medium",vehicle:null}),[v,j]=A.useState([]),[T,g]=A.useState(!1),p=[{id:"overview",label:"Overview",icon:"bar-chart-2"},{id:"vehicle",label:"My Vehicle",icon:"truck"},{id:"reports",label:"Reports",icon:"file-text"},{id:"issues",label:"Report Issue",icon:"alert-triangle"},{id:"breakdowns",label:"Breakdown History",icon:"wrench"}],b=[{title:"Vehicle Status",value:(i==null?void 0:i.status)==="active"?"Operational":"Needs Attention",trend:(i==null?void 0:i.status)==="active"?"Ready for use":"Service required",positive:(i==null?void 0:i.status)==="active",icon:"truck",bg:(i==null?void 0:i.status)==="active"?"#10b981":"#f59e0b",color:(i==null?void 0:i.status)==="active"?"#10b981":"#f59e0b"},{title:"Fuel Type",value:(i==null?void 0:i.fuel_type)||"N/A",trend:i!=null&&i.fuel_type?"Compatible fuel":"Check specs",positive:!!(i!=null&&i.fuel_type),icon:"droplet",bg:"#f59e0b",color:"#f59e0b"},{title:"Vehicle Issues",value:(i==null?void 0:i.status)!=="active"?"Needs Service":"None",trend:(i==null?void 0:i.status)!=="active"?"Report to maintenance":"All clear",positive:(i==null?void 0:i.status)==="active",icon:"alert-circle",bg:(i==null?void 0:i.status)==="active"?"#10b981":"#ef4444",color:(i==null?void 0:i.status)==="active"?"#10b981":"#ef4444"}],y=async E=>{E.preventDefault();try{await lr.createReport(u),alert("Report submitted successfully!"),m({report_type:"daily",title:"",content:""})}catch(K){console.error("Error submitting report:",K),alert("Failed to submit report. Please try again.")}},w=async E=>{E.preventDefault();try{await or.createIssue(f),alert("Issue reported successfully!"),x({title:"",description:"",priority:"medium",vehicle:null}),z()}catch(K){console.error("Error submitting issue:",K),alert("Failed to submit issue. Please try again.")}},k=[{id:"report_issue",title:"Report Vehicle Issue",description:"Report breakdowns, maintenance needs, or other problems",icon:"alert-triangle",bg:"#ef4444",color:"#ef4444"},{id:"daily_report",title:"Daily Report",description:"Submit your daily driving log and vehicle status",icon:"file-text",bg:"#3b82f6",color:"#3b82f6"},{id:"weekly_report",title:"Weekly Report",description:"Submit comprehensive weekly vehicle and activity report",icon:"calendar",bg:"#10b981",color:"#10b981"},{id:"maintenance_history",title:"Maintenance History",description:"View past repairs and maintenance records",icon:"clock",bg:"#f59e0b",color:"#f59e0b"}];A.useEffect(()=>{Nu()&&(N(),z(),window.feather&&window.feather.replace())},[]);const N=async()=>{var E;try{d(!0);const K=await Ca.getVehicles(),ce=(E=K==null?void 0:K.results)==null?void 0:E.find(V=>V.assigned_driver==t.id);r(ce||null)}catch(K){console.error("Error fetching assigned vehicle:",K)}finally{d(!1)}},z=async()=>{try{g(!0);const E=await or.getIssues();j((E==null?void 0:E.results)||[])}catch(E){console.error("Error fetching driver issues:",E)}finally{g(!1)}},C=E=>{},_=()=>{o(!0)},R=E=>{console.log("Profile updated:",E)};return Nu()?s.jsxs(bN,{children:[s.jsxs(yN,{children:[s.jsxs(wN,{children:[s.jsx(SN,{children:s.jsxs(kN,{children:[s.jsx(NN,{children:s.jsx("i",{"data-feather":"truck",className:"fi-icon"})}),s.jsxs(AN,{children:[s.jsx("h1",{children:"Driver Portal"}),s.jsx("p",{children:"Campus Fleet"})]})]})}),s.jsx(TN,{children:p.map(E=>s.jsxs(CN,{href:"#",className:n===E.id?"active":"",onClick:K=>{K.preventDefault(),a(E.id)},children:[s.jsx("i",{"data-feather":E.icon,className:"fi-icon"}),s.jsx("span",{children:E.label})]},E.id))})]}),s.jsx(zN,{children:s.jsx("div",{className:"text-center",children:s.jsx("p",{className:"text-sm text-slate-500",children:"Logged in as Driver"})})})]}),s.jsxs(EN,{children:[s.jsxs(MN,{children:[s.jsx(_N,{children:s.jsx(DN,{children:s.jsx("input",{type:"text",placeholder:"Search reports, issues..."})})}),s.jsxs(RN,{children:[s.jsx(ON,{children:s.jsx("i",{"data-feather":"bell",className:"fi-icon"})}),s.jsx(BN,{children:s.jsx("i",{"data-feather":"settings",className:"fi-icon"})}),s.jsx(LN,{}),s.jsx(xm,{currentUser:t,onLogout:e,onViewProfile:_})]})]}),s.jsxs(VN,{children:[n==="overview"&&s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[s.jsxs(UN,{children:[s.jsx("h2",{children:"Driver Dashboard"}),s.jsx("p",{children:"Monitor your assigned vehicle and manage daily operations."})]}),s.jsx(HN,{children:b.map((E,K)=>s.jsxs(YN,{children:[s.jsxs(qN,{children:[s.jsx(GN,{$bg:E.bg,$color:E.color,children:s.jsx("i",{"data-feather":E.icon,className:"fi-icon"})}),E.trend&&s.jsx(XN,{$positive:E.positive,children:E.trend})]}),s.jsx($N,{children:E.value}),s.jsx(PN,{children:E.title})]},E.title))}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"700",color:"#0d141b",marginBottom:"1rem"},children:"Quick Actions"}),s.jsx(QN,{children:k.map(E=>s.jsxs(ZN,{onClick:()=>C(E.id),children:[s.jsx(IN,{$bg:E.bg,$color:E.color,children:s.jsx("i",{"data-feather":E.icon,className:"fi-icon"})}),s.jsx(JN,{children:E.title}),s.jsx(WN,{children:E.description})]},E.id))})]})]}),n==="vehicle"&&s.jsxs(Ir,{children:[s.jsx("h2",{style:{fontSize:"1.875rem",fontWeight:"700",color:"#0d141b",marginBottom:"2rem",textAlign:"center"},children:"My Vehicle Details"}),i?s.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[s.jsx("div",{style:{background:"white",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem",border:"1px solid #e2e8f0",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.07)"},children:s.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[s.jsx("div",{style:{flex:"0 0 300px"},children:s.jsx(KN,{style:{backgroundImage:i.image_url?`url(${i.image_url})`:"none",backgroundColor:"#f1f5f9",height:"200px",borderRadius:"0.75rem"},children:s.jsx(FN,{status:i.status,children:i.status})})}),s.jsxs("div",{style:{flex:1},children:[s.jsxs("h3",{style:{fontSize:"2rem",fontWeight:"700",color:"#0d141b",marginBottom:"0.5rem"},children:[i.year," ",i.make," ",i.model]}),s.jsxs("p",{style:{fontSize:"1.125rem",color:"#64748b",marginBottom:"1rem"},children:["License Plate: ",i.license_plate]}),s.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("span",{className:"material-symbols-outlined",style:{color:"#64748b"},children:"local_gas_station"}),s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:i.fuel_type||"N/A"})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("span",{className:"material-symbols-outlined",style:{color:"#64748b"},children:"palette"}),s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:i.color||"N/A"})]})]})]})]})}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:[s.jsxs("div",{style:{background:"white",borderRadius:"1rem",padding:"1.5rem",border:"1px solid #e2e8f0",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.07)"},children:[s.jsxs("h4",{style:{fontSize:"1.25rem",fontWeight:"700",color:"#0d141b",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("span",{className:"material-symbols-outlined",children:"info"}),"Basic Information"]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Make"}),s.jsx("span",{style:{fontSize:"0.875rem",fontWeight:"600",color:"#0d141b"},children:i.make||"N/A"})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Model"}),s.jsx("span",{style:{fontSize:"0.875rem",fontWeight:"600",color:"#0d141b"},children:i.model||"N/A"})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Year"}),s.jsx("span",{style:{fontSize:"0.875rem",fontWeight:"600",color:"#0d141b"},children:i.year||"N/A"})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"License Plate"}),s.jsx("span",{style:{fontSize:"0.875rem",fontWeight:"600",color:"#0d141b"},children:i.license_plate||"N/A"})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Color"}),s.jsx("span",{style:{fontSize:"0.875rem",fontWeight:"600",color:"#0d141b"},children:i.color||"N/A"})]})]})]}),s.jsxs("div",{style:{background:"white",borderRadius:"1rem",padding:"1.5rem",border:"1px solid #e2e8f0",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.07)"},children:[s.jsxs("h4",{style:{fontSize:"1.25rem",fontWeight:"700",color:"#0d141b",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("span",{className:"material-symbols-outlined",children:"build"}),"Technical Details"]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Fuel Type"}),s.jsx("span",{style:{fontSize:"0.875rem",fontWeight:"600",color:"#0d141b"},children:i.fuel_type||"N/A"})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Status"}),s.jsx("span",{style:{fontSize:"0.875rem",fontWeight:"600",color:i.status==="active"?"#10b981":i.status==="maintenance"?"#f59e0b":"#ef4444"},children:i.status||"N/A"})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Purchase Date"}),s.jsx("span",{style:{fontSize:"0.875rem",fontWeight:"600",color:"#0d141b"},children:i.purchase_date?new Date(i.purchase_date).toLocaleDateString():"N/A"})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Purchase Price"}),s.jsx("span",{style:{fontSize:"0.875rem",fontWeight:"600",color:"#0d141b"},children:i.purchase_price?`$${i.purchase_price.toLocaleString()}`:"N/A"})]})]})]}),s.jsxs("div",{style:{background:"white",borderRadius:"1rem",padding:"1.5rem",border:"1px solid #e2e8f0",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.07)"},children:[s.jsxs("h4",{style:{fontSize:"1.25rem",fontWeight:"700",color:"#0d141b",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("span",{className:"material-symbols-outlined",children:"person"}),"Assigned Driver"]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Driver"}),s.jsxs("span",{style:{fontSize:"0.875rem",fontWeight:"600",color:"#0d141b"},children:[t==null?void 0:t.first_name," ",t==null?void 0:t.last_name]})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Employee ID"}),s.jsx("span",{style:{fontSize:"0.875rem",fontWeight:"600",color:"#0d141b"},children:(t==null?void 0:t.employee_id)||"N/A"})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Contact"}),s.jsx("span",{style:{fontSize:"0.875rem",fontWeight:"600",color:"#0d141b"},children:(t==null?void 0:t.phone)||"N/A"})]})]})]})]})]}):s.jsxs("div",{style:{textAlign:"center",padding:"4rem 2rem"},children:[s.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"4rem",color:"#d1d5db",marginBottom:"1rem",display:"block"},children:"drive_eta"}),s.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:"600",color:"#6b7280",marginBottom:"0.5rem"},children:"No Vehicle Assigned"}),s.jsx("p",{style:{fontSize:"1rem",color:"#9ca3af"},children:"You don't have an assigned vehicle at the moment."})]})]}),n==="reports"&&s.jsx(Ir,{children:s.jsxs("div",{style:{padding:"2rem 0"},children:[s.jsx("h2",{style:{fontSize:"1.875rem",fontWeight:"700",color:"#0d141b",marginBottom:"2rem",textAlign:"center"},children:"Submit Report"}),s.jsx("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"0 1rem"},children:s.jsxs("form",{onSubmit:y,style:{background:"white",padding:"2.5rem",borderRadius:"1rem",border:"1px solid #e2e8f0",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.07)"},children:[s.jsxs("div",{style:{marginBottom:"2rem"},children:[s.jsx("label",{style:{display:"block",fontSize:"1rem",fontWeight:"600",color:"#111827",marginBottom:"0.75rem"},children:"Report Type"}),s.jsxs("select",{value:u.report_type,onChange:E=>m({...u,report_type:E.target.value}),style:{width:"100%",padding:"0.875rem 1rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"1rem",backgroundColor:"#f9fafb"},required:!0,children:[s.jsx("option",{value:"daily",children:"Daily Report"}),s.jsx("option",{value:"weekly",children:"Weekly Report"}),s.jsx("option",{value:"incident",children:"Incident Report"}),s.jsx("option",{value:"other",children:"Other"})]})]}),s.jsxs("div",{style:{marginBottom:"2rem"},children:[s.jsx("label",{style:{display:"block",fontSize:"1rem",fontWeight:"600",color:"#111827",marginBottom:"0.75rem"},children:"Title"}),s.jsx("input",{type:"text",value:u.title,onChange:E=>m({...u,title:E.target.value}),style:{width:"100%",padding:"0.875rem 1rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"1rem",backgroundColor:"#f9fafb"},placeholder:"Enter a clear, descriptive title for your report",required:!0})]}),s.jsxs("div",{style:{marginBottom:"2.5rem"},children:[s.jsx("label",{style:{display:"block",fontSize:"1rem",fontWeight:"600",color:"#111827",marginBottom:"0.75rem"},children:"Report Content"}),s.jsx("textarea",{value:u.content,onChange:E=>m({...u,content:E.target.value}),rows:10,style:{width:"100%",padding:"1rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"1rem",resize:"vertical",backgroundColor:"#f9fafb",lineHeight:"1.6"},placeholder:"Provide detailed information about your report. Include any relevant observations, activities, or concerns...",required:!0})]}),s.jsx("button",{type:"submit",style:{width:"100%",padding:"1rem",background:"linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",color:"white",border:"none",borderRadius:"0.5rem",fontSize:"1.1rem",fontWeight:"600",cursor:"pointer",transition:"all 0.2s ease"},onMouseOver:E=>E.target.style.transform="translateY(-1px)",onMouseOut:E=>E.target.style.transform="translateY(0)",children:"Submit Report"})]})})]})}),n==="issues"&&s.jsx(Ir,{children:s.jsxs("div",{style:{padding:"2rem 0"},children:[s.jsx("h2",{style:{fontSize:"1.875rem",fontWeight:"700",color:"#0d141b",marginBottom:"2rem",textAlign:"center"},children:"Report Issue"}),s.jsx("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"0 1rem"},children:s.jsxs("form",{onSubmit:w,style:{background:"white",padding:"2.5rem",borderRadius:"1rem",border:"1px solid #e2e8f0",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.07)"},children:[s.jsxs("div",{style:{marginBottom:"2rem"},children:[s.jsx("label",{style:{display:"block",fontSize:"1rem",fontWeight:"600",color:"#111827",marginBottom:"0.75rem"},children:"Issue Title"}),s.jsx("input",{type:"text",value:f.title,onChange:E=>x({...f,title:E.target.value}),style:{width:"100%",padding:"0.875rem 1rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"1rem",backgroundColor:"#f9fafb"},placeholder:"Brief, descriptive title for the issue",required:!0})]}),s.jsxs("div",{style:{marginBottom:"2rem"},children:[s.jsx("label",{style:{display:"block",fontSize:"1rem",fontWeight:"600",color:"#111827",marginBottom:"0.75rem"},children:"Priority Level"}),s.jsxs("select",{value:f.priority,onChange:E=>x({...f,priority:E.target.value}),style:{width:"100%",padding:"0.875rem 1rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"1rem",backgroundColor:"#f9fafb"},required:!0,children:[s.jsx("option",{value:"low",children:"Low - Minor issue, can wait"}),s.jsx("option",{value:"medium",children:"Medium - Needs attention soon"}),s.jsx("option",{value:"high",children:"High - Urgent, affects operations"}),s.jsx("option",{value:"critical",children:"Critical - Emergency, immediate action required"})]})]}),s.jsxs("div",{style:{marginBottom:"2rem"},children:[s.jsx("label",{style:{display:"block",fontSize:"1rem",fontWeight:"600",color:"#111827",marginBottom:"0.75rem"},children:"Related Vehicle (Optional)"}),s.jsxs("select",{value:f.vehicle||"",onChange:E=>x({...f,vehicle:E.target.value||null}),style:{width:"100%",padding:"0.875rem 1rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"1rem",backgroundColor:"#f9fafb"},children:[s.jsx("option",{value:"",children:"Select vehicle if issue is vehicle-related"}),i&&s.jsxs("option",{value:i.id,children:[i.year," ",i.make," ",i.model," - ",i.license_plate]})]})]}),s.jsxs("div",{style:{marginBottom:"2.5rem"},children:[s.jsx("label",{style:{display:"block",fontSize:"1rem",fontWeight:"600",color:"#111827",marginBottom:"0.75rem"},children:"Detailed Description"}),s.jsx("textarea",{value:f.description,onChange:E=>x({...f,description:E.target.value}),rows:10,style:{width:"100%",padding:"1rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"1rem",resize:"vertical",backgroundColor:"#f9fafb",lineHeight:"1.6"},placeholder:"Provide comprehensive details about the issue. Include when it occurred, what you observed, any error messages, and steps to reproduce if applicable...",required:!0})]}),s.jsx("button",{type:"submit",style:{width:"100%",padding:"1rem",background:"linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",color:"white",border:"none",borderRadius:"0.5rem",fontSize:"1.1rem",fontWeight:"600",cursor:"pointer",transition:"all 0.2s ease"},onMouseOver:E=>E.target.style.transform="translateY(-1px)",onMouseOut:E=>E.target.style.transform="translateY(0)",children:"Submit Issue Report"})]})})]})}),n==="breakdowns"&&s.jsxs(Ir,{children:[s.jsx("h2",{style:{fontSize:"1.875rem",fontWeight:"700",color:"#0d141b",marginBottom:"2rem",textAlign:"center"},children:"Issue Reports History"}),T?s.jsxs("div",{style:{textAlign:"center",padding:"4rem 2rem"},children:[s.jsx("div",{style:{display:"inline-block",width:"40px",height:"40px",border:"4px solid #f3f3f3",borderTop:"4px solid #137fec",borderRadius:"50%",animation:"spin 1s linear infinite"}}),s.jsx("p",{style:{fontSize:"1rem",color:"#64748b",marginTop:"1rem"},children:"Loading issue reports..."})]}):v.length>0?s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:v.map(E=>s.jsxs("div",{style:{background:"white",borderRadius:"1rem",padding:"1.5rem",border:"1px solid #e2e8f0",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.07)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem"},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"700",color:"#0d141b",marginBottom:"0.5rem"},children:E.title}),s.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[s.jsx("span",{style:{padding:"0.25rem 0.75rem",borderRadius:"0.5rem",fontSize:"0.75rem",fontWeight:"600",textTransform:"uppercase",backgroundColor:E.priority==="critical"?"#fee2e2":E.priority==="high"?"#fed7aa":E.priority==="medium"?"#fef3c7":"#dbeafe",color:E.priority==="critical"?"#dc2626":E.priority==="high"?"#ea580c":E.priority==="medium"?"#ca8a04":"#2563eb"},children:E.priority}),s.jsx("span",{style:{padding:"0.25rem 0.75rem",borderRadius:"0.5rem",fontSize:"0.75rem",fontWeight:"600",textTransform:"uppercase",backgroundColor:E.status==="resolved"?"#dcfce7":E.status==="in_progress"?"#dbeafe":"#fee2e2",color:E.status==="resolved"?"#166534":E.status==="in_progress"?"#1e40af":"#dc2626"},children:E.status.replace("_"," ")}),s.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:new Date(E.reported_at).toLocaleDateString()})]})]}),s.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:s.jsx("span",{className:"material-symbols-outlined",style:{color:E.priority==="critical"?"#dc2626":E.priority==="high"?"#ea580c":E.priority==="medium"?"#ca8a04":"#2563eb",fontSize:"1.5rem"},children:E.priority==="critical"?"error":E.priority==="high"?"warning":"info"})})]}),s.jsx("p",{style:{fontSize:"1rem",color:"#374151",lineHeight:"1.6",marginBottom:"1rem"},children:E.description}),E.vehicle_info&&s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem",backgroundColor:"#f8fafc",borderRadius:"0.5rem"},children:[s.jsx("span",{className:"material-symbols-outlined",style:{color:"#64748b",fontSize:"1.25rem"},children:"directions_car"}),s.jsxs("span",{style:{fontSize:"0.875rem",color:"#374151",fontWeight:"500"},children:["Related Vehicle: ",E.vehicle_info]})]})]},E.id))}):s.jsxs("div",{style:{textAlign:"center",padding:"4rem 2rem"},children:[s.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"4rem",color:"#d1d5db",marginBottom:"1rem",display:"block"},children:"check_circle"}),s.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:"600",color:"#6b7280",marginBottom:"0.5rem"},children:"No Issues Reported"}),s.jsx("p",{style:{fontSize:"1rem",color:"#9ca3af"},children:"You haven't reported any issues yet. All systems are running smoothly!"})]})]})]})]}),s.jsx(vN,{children:p.map(E=>s.jsxs(jN,{$active:n===E.id,onClick:()=>a(E.id),children:[s.jsx("i",{"data-feather":E.icon,className:"fi-icon"}),s.jsx("span",{children:E.label})]},E.id))}),s.jsx(bm,{isOpen:l,onClose:()=>o(!1),currentUser:t,onProfileUpdate:R})]}):s.jsx("div",{className:"bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-200 h-full flex items-center justify-center",children:s.jsxs("div",{className:"text-center",children:[s.jsx("span",{className:"material-symbols-outlined text-6xl text-red-500 mb-4",children:"error"}),s.jsx("h2",{className:"text-xl font-bold mb-2",children:"Access Denied"}),s.jsx("p",{children:"Driver privileges required to access this dashboard."})]})})},tA=h.div`
  height: 100vh;
  background-color: #f6f7f8;
  display: flex;
  flex-direction: column;
  font-family: 'Manrope', sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,nA=h.aside`
  width: 256px;
  background: white;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  @media (max-width: 767px) {
    display: none;
  }
`,aA=h.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e2e8f0;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    display: none;
  }
`,iA=h.button`
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: ${e=>e.$active?"#137fec":"#64748b"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;

  &:hover {
    background: #f1f5f9;
    color: #137fec;
  }

  i {
    font-size: 1.25rem;
  }
`,sA=h.div`
  padding: 1.5rem 0;
`,rA=h.div`
  padding: 0 1.5rem 2rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1rem;
`,lA=h.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,oA=h.div`
  background: #137fec;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: white;
`,cA=h.div`
  h1 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }
  p {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 500;
    margin: 0;
  }
`,dA=h.nav`
  padding: 0 1rem;
`,uA=h.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s ease;

  i {
    color: inherit;
  }

  &:hover {
    background: #f1f5f9;
    color: #1e293b;
  }

  &.active {
    background: rgba(19, 127, 236, 0.1);
    color: #137fec;
    border-left: 4px solid #137fec;
  }
`,fA=h.div`
  padding: 1.5rem;
  border-top: 1px solid #e2e8f0;
`,mA=h.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem;
  background: #137fec;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #137fec / 0.9;
  }
`,hA=h.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 767px) {
    padding-bottom: 80px; /* Space for mobile nav */
  }
`,pA=h.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
`,gA=h.div`
  flex: 1;
  max-width: 20rem;
`,xA=h.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 2.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    background: #f8fafc;
    font-size: 0.875rem;
    color: #374151;

    &:focus {
      outline: none;
      border-color: #137fec / 0.2;
      box-shadow: 0 0 0 3px rgba(19, 127, 236, 0.1);
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/%3E%3C/svg%3E") no-repeat center;
    background-size: contain;
  }
`,bA=h.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`,yA=h.button`
  position: relative;
  padding: 0.5rem;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: background 0.2s ease;

  &:hover {
    background: #f1f5f9;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    background: #ef4444;
    border: 2px solid white;
    border-radius: 50%;
  }
`,vA=h.button`
  padding: 0.5rem;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: background 0.2s ease;

  &:hover {
    background: #f1f5f9;
  }
`,jA=h.div`
  width: 1px;
  height: 2rem;
  background: #e2e8f0;
`;h.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;h.div`
  text-align: right;
  display: none;

  @media (min-width: 640px) {
    display: block;
  }

  p:first-child {
    font-size: 0.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0;
  }

  p:last-child {
    font-size: 0.75rem;
    color: #64748b;
    margin: 0;
  }
`;h.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: center no-repeat;
  background-size: cover;
  border: 1px solid #e2e8f0;
`;const wA=h.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`,Qc=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 300px;
`,Zc=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,vt=h.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 120px;
`,SA=h.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #0d141b;
    margin: 0 0 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      width: 2rem;
      height: 2rem;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23137fec'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'/%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'/%3E%3C/svg%3E") no-repeat center;
      background-size: contain;
    }
  }

  p {
    color: #64748b;
    font-size: 0.875rem;
  }
`,kA=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,NA=h.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,AA=h.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`,TA=h.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$bg||"#137fec"}1a;
  color: ${e=>e.$color||"#137fec"};
`,CA=h.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${e=>e.$positive?"#10b981":"#ef4444"};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,zA=h.div`
  font-size: 2.25rem;
  font-weight: 800;
  color: #0d141b;
  margin-bottom: 0.25rem;
`,EA=h.div`
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
`,MA=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,_A=h.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
`,DA=h.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$bg||"#137fec"}1a;
  color: ${e=>e.$color||"#137fec"};
  margin-bottom: 1rem;
`,RA=h.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0 0 0.5rem 0;
`,OA=h.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
`,BA=({onLogout:e,currentUser:t})=>{const[n,a]=A.useState("overview"),[i,r]=A.useState(!1),[l,o]=A.useState(!1),[c,d]=A.useState([]),[u,m]=A.useState([]),[f,x]=A.useState([]),[v,j]=A.useState(!0),T=[{id:"overview",label:"Overview",icon:"bar-chart-2"},{id:"breakdowns",label:"Breakdowns",icon:"wrench"},{id:"repairs",label:"Repairs",icon:"settings"},{id:"stock",label:"Stock Management",icon:"package"}],g=new Date;g.setDate(g.getDate()-7);const p=f.filter(R=>new Date(R.service_date)>=g).length,b=c.filter(R=>R.status==="maintenance").length,y=u.filter(R=>R.stock_level<=R.min_stock_level).length,w=[{title:"Active Breakdowns",value:b.toString(),trend:b>0?`${b} vehicles down`:"All operational",positive:b===0,icon:"alert-triangle",bg:b>0?"#ef4444":"#10b981",color:b>0?"#ef4444":"#10b981"},{title:"Repairs This Week",value:p.toString(),trend:p>0?`${p} completed`:"No recent repairs",positive:p>0,icon:"check-circle",bg:"#10b981",color:"#10b981"},{title:"Total Parts",value:u.length.toString(),trend:`${y} low stock items`,positive:y===0,icon:"package",bg:"#f59e0b",color:"#f59e0b"},{title:"Stock Alerts",value:y.toString(),trend:y>0?"Restock required":"Inventory healthy",positive:y===0,icon:"bell",bg:y>0?"#ef4444":"#10b981",color:y>0?"#ef4444":"#10b981"}],k=[{id:"view_breakdowns",title:"View Breakdowns",description:"Check list of vehicles needing repair",icon:"wrench",bg:"#ef4444",color:"#ef4444"},{id:"record_repair",title:"Record Repair",description:"Log completed repairs and update vehicle status",icon:"settings",bg:"#10b981",color:"#10b981"},{id:"manage_stock",title:"Manage Stock",description:"Add new parts and monitor inventory levels",icon:"package",bg:"#f59e0b",color:"#f59e0b"},{id:"add_invoice",title:"Add Invoice",description:"Record repair costs and generate invoices",icon:"file-text",bg:"#3b82f6",color:"#3b82f6"}];A.useEffect(()=>{Au()&&(N(),window.feather&&window.feather.replace())},[]);const N=async()=>{var R,E,K;try{j(!0);const[ce,V,O]=await Promise.allSettled([Ca.getVehicles(),ia.getAccessories(),Ca.getAllMaintenance()]);ce.status==="fulfilled"&&d(((R=ce.value)==null?void 0:R.results)||[]),V.status==="fulfilled"&&m(((E=V.value)==null?void 0:E.results)||[]),O.status==="fulfilled"&&x(((K=O.value)==null?void 0:K.results)||[])}catch(ce){console.error("Error fetching technician data:",ce)}finally{j(!1)}},z=R=>{switch(R){case"view_breakdowns":a("breakdowns");break;case"record_repair":a("repairs");break;case"manage_stock":a("stock");break}},C=()=>{o(!0)},_=R=>{console.log("Profile updated:",R)};return Au()?s.jsxs(tA,{children:[s.jsxs(nA,{children:[s.jsxs(sA,{children:[s.jsx(rA,{children:s.jsxs(lA,{children:[s.jsx(oA,{children:s.jsx("i",{"data-feather":"settings",className:"fi-icon"})}),s.jsxs(cA,{children:[s.jsx("h1",{children:"Technician Portal"}),s.jsx("p",{children:"Campus Fleet"})]})]})}),s.jsx(dA,{children:T.map(R=>s.jsxs(uA,{href:"#",className:n===R.id?"active":"",onClick:E=>{E.preventDefault(),a(R.id)},children:[s.jsx("i",{"data-feather":R.icon,className:"fi-icon"}),s.jsx("span",{children:R.label})]},R.id))})]}),s.jsxs(fA,{children:[s.jsxs(mA,{onClick:()=>r(!0),children:[s.jsx("i",{"data-feather":"plus",className:"fi-icon",style:{width:"14px",height:"14px"}}),s.jsx("span",{children:"Add Accessory"})]}),s.jsx("div",{className:"text-center",style:{marginTop:"1rem"},children:s.jsx("p",{className:"text-sm text-slate-500",children:"Logged in as Technician"})})]})]}),s.jsxs(hA,{children:[s.jsxs(pA,{children:[s.jsx(gA,{children:s.jsx(xA,{children:s.jsx("input",{type:"text",placeholder:"Search repairs, parts..."})})}),s.jsxs(bA,{children:[s.jsx(yA,{children:s.jsx("i",{"data-feather":"bell",className:"fi-icon"})}),s.jsx(vA,{children:s.jsx("i",{"data-feather":"settings",className:"fi-icon"})}),s.jsx(jA,{}),s.jsx(xm,{currentUser:t,onLogout:e,onViewProfile:C})]})]}),s.jsxs(wA,{children:[n==="overview"&&s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[s.jsxs(SA,{children:[s.jsx("h2",{children:"Technician Dashboard"}),s.jsx("p",{children:"Manage repairs, monitor stock, and handle vehicle maintenance."})]}),s.jsx(kA,{children:w.map((R,E)=>s.jsxs(NA,{children:[s.jsxs(AA,{children:[s.jsx(TA,{$bg:R.bg,$color:R.color,children:s.jsx("i",{"data-feather":R.icon,className:"fi-icon"})}),R.trend&&s.jsx(CA,{$positive:R.positive,children:R.trend})]}),s.jsx(zA,{children:R.value}),s.jsx(EA,{children:R.title})]},R.title))}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"},children:[s.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"700",color:"#0d141b",marginBottom:"1rem"},children:"Quick Actions"}),s.jsx(MA,{children:k.map(R=>s.jsxs(_A,{onClick:()=>z(R.id),children:[s.jsx(DA,{$bg:R.bg,$color:R.color,children:s.jsx("i",{"data-feather":R.icon,className:"fi-icon"})}),s.jsx(RA,{children:R.title}),s.jsx(OA,{children:R.description})]},R.id))})]})]}),n==="breakdowns"&&s.jsxs(Qc,{children:[s.jsx("h2",{style:{fontSize:"1.875rem",fontWeight:"700",color:"#0d141b",marginBottom:"2rem",textAlign:"center"},children:"Breakdowns to Handle"}),s.jsxs(Zc,{children:[s.jsxs(vt,{children:[s.jsx("i",{"data-feather":"alert-triangle",className:"fi-icon",style:{fontSize:"2rem",color:"#ef4444",marginBottom:"0.5rem"}}),s.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"No breakdowns reported"})]}),s.jsxs(vt,{children:[s.jsx("i",{"data-feather":"check-circle",className:"fi-icon",style:{fontSize:"2rem",color:"#10b981",marginBottom:"0.5rem"}}),s.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"All systems operational"})]}),s.jsxs(vt,{children:[s.jsx("i",{"data-feather":"clock",className:"fi-icon",style:{fontSize:"2rem",color:"#f59e0b",marginBottom:"0.5rem"}}),s.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Monitoring active"})]}),s.jsxs(vt,{children:[s.jsx("i",{"data-feather":"tool",className:"fi-icon",style:{fontSize:"2rem",color:"#8b5cf6",marginBottom:"0.5rem"}}),s.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Maintenance ready"})]})]})]}),n==="repairs"&&s.jsxs(Qc,{children:[s.jsx("h2",{style:{fontSize:"1.875rem",fontWeight:"700",color:"#0d141b",marginBottom:"2rem",textAlign:"center"},children:"Record Repairs"}),s.jsxs(Zc,{children:[s.jsxs(vt,{children:[s.jsx("i",{"data-feather":"settings",className:"fi-icon",style:{fontSize:"2rem",color:"#10b981",marginBottom:"0.5rem"}}),s.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"No repairs in progress"})]}),s.jsxs(vt,{children:[s.jsx("i",{"data-feather":"check-circle",className:"fi-icon",style:{fontSize:"2rem",color:"#10b981",marginBottom:"0.5rem"}}),s.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"All repairs completed"})]}),s.jsxs(vt,{children:[s.jsx("i",{"data-feather":"file-text",className:"fi-icon",style:{fontSize:"2rem",color:"#3b82f6",marginBottom:"0.5rem"}}),s.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Records up to date"})]}),s.jsxs(vt,{children:[s.jsx("i",{"data-feather":"trending-up",className:"fi-icon",style:{fontSize:"2rem",color:"#10b981",marginBottom:"0.5rem"}}),s.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Performance optimal"})]})]})]}),n==="stock"&&s.jsxs(Qc,{children:[s.jsx("h2",{style:{fontSize:"1.875rem",fontWeight:"700",color:"#0d141b",marginBottom:"2rem",textAlign:"center"},children:"Stock Management"}),s.jsxs(Zc,{children:[s.jsxs(vt,{children:[s.jsx("i",{"data-feather":"package",className:"fi-icon",style:{fontSize:"2rem",color:"#f59e0b",marginBottom:"0.5rem"}}),s.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Inventory levels normal"})]}),s.jsxs(vt,{children:[s.jsx("i",{"data-feather":"shopping-cart",className:"fi-icon",style:{fontSize:"2rem",color:"#10b981",marginBottom:"0.5rem"}}),s.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"No restocking needed"})]}),s.jsxs(vt,{children:[s.jsx("i",{"data-feather":"bar-chart-3",className:"fi-icon",style:{fontSize:"2rem",color:"#3b82f6",marginBottom:"0.5rem"}}),s.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Analytics available"})]}),s.jsxs(vt,{children:[s.jsx("i",{"data-feather":"bell",className:"fi-icon",style:{fontSize:"2rem",color:"#8b5cf6",marginBottom:"0.5rem"}}),s.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Alerts configured"})]})]})]})]})]}),s.jsx(aA,{children:T.map(R=>s.jsx(iA,{$active:n===R.id,onClick:()=>a(R.id),children:s.jsx("i",{"data-feather":R.icon,className:"fi-icon"})},R.id))}),s.jsx(mv,{isOpen:i,onClose:()=>r(!1),onAccessoryAdded:()=>{r(!1)}}),s.jsx(bm,{isOpen:l,onClose:()=>o(!1),currentUser:t,onProfileUpdate:_})]}):s.jsx("div",{className:"bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-200 h-full flex items-center justify-center",children:s.jsxs("div",{className:"text-center",children:[s.jsx("span",{className:"material-symbols-outlined text-6xl text-red-500 mb-4",children:"error"}),s.jsx("h2",{className:"text-xl font-bold mb-2",children:"Access Denied"}),s.jsx("p",{children:"Mechanic privileges required to access this dashboard."})]})})};function LA(){const[e,t]=A.useState(!1),[n,a]=A.useState(null),[i,r]=A.useState(!0);A.useEffect(()=>{window.feather&&window.feather.replace(),(async()=>{if(gk()){const u=uv();if(u)a(u),t(!0);else try{const m=await ft.getProfile();a(m),t(!0)}catch{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user")}}r(!1)})()},[]);const l=d=>{a(d),t(!0)},o=async()=>{try{await ft.logout()}catch(d){console.error("Logout error:",d)}finally{a(null),t(!1)}};return i?s.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"#0f172a",color:"#f8fafc",fontFamily:"Inter, sans-serif"},children:s.jsx("div",{children:"Loading..."})}):e?uo()?s.jsx(ng,{onLogout:o,currentUser:n}):Nu()?s.jsx(eA,{onLogout:o,currentUser:n}):Au()?s.jsx(BA,{onLogout:o,currentUser:n}):s.jsx(ng,{onLogout:o,currentUser:n}):s.jsx(zk,{onLogin:l})}Rj.createRoot(document.getElementById("root")).render(s.jsx(A.StrictMode,{children:s.jsx(LA,{})}));
