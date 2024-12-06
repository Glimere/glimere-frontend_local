function tR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var gd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function nR(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var cS={exports:{}},bf={},dS={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu=Symbol.for("react.element"),rR=Symbol.for("react.portal"),iR=Symbol.for("react.fragment"),oR=Symbol.for("react.strict_mode"),sR=Symbol.for("react.profiler"),aR=Symbol.for("react.provider"),lR=Symbol.for("react.context"),uR=Symbol.for("react.forward_ref"),cR=Symbol.for("react.suspense"),dR=Symbol.for("react.memo"),fR=Symbol.for("react.lazy"),g_=Symbol.iterator;function hR(t){return t===null||typeof t!="object"?null:(t=g_&&t[g_]||t["@@iterator"],typeof t=="function"?t:null)}var fS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hS=Object.assign,pS={};function Sa(t,e,n){this.props=t,this.context=e,this.refs=pS,this.updater=n||fS}Sa.prototype.isReactComponent={};Sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mS(){}mS.prototype=Sa.prototype;function fy(t,e,n){this.props=t,this.context=e,this.refs=pS,this.updater=n||fS}var hy=fy.prototype=new mS;hy.constructor=fy;hS(hy,Sa.prototype);hy.isPureReactComponent=!0;var y_=Array.isArray,gS=Object.prototype.hasOwnProperty,py={current:null},yS={key:!0,ref:!0,__self:!0,__source:!0};function vS(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)gS.call(e,r)&&!yS.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:gu,type:t,key:o,ref:s,props:i,_owner:py.current}}function pR(t,e){return{$$typeof:gu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function my(t){return typeof t=="object"&&t!==null&&t.$$typeof===gu}function mR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var v_=/\/+/g;function Jh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mR(""+t.key):e.toString(36)}function kc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case gu:case rR:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Jh(s,0):r,y_(i)?(n="",t!=null&&(n=t.replace(v_,"$&/")+"/"),kc(i,e,n,"",function(c){return c})):i!=null&&(my(i)&&(i=pR(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(v_,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",y_(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Jh(o,a);s+=kc(o,e,n,l,i)}else if(l=hR(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Jh(o,a++),s+=kc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ic(t,e,n){if(t==null)return t;var r=[],i=0;return kc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function gR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Oc={transition:null},yR={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Oc,ReactCurrentOwner:py};function _S(){throw Error("act(...) is not supported in production builds of React.")}we.Children={map:ic,forEach:function(t,e,n){ic(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ic(t,function(){e++}),e},toArray:function(t){return ic(t,function(e){return e})||[]},only:function(t){if(!my(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};we.Component=Sa;we.Fragment=iR;we.Profiler=sR;we.PureComponent=fy;we.StrictMode=oR;we.Suspense=cR;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yR;we.act=_S;we.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=hS({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=py.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)gS.call(e,l)&&!yS.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:gu,type:t.type,key:i,ref:o,props:r,_owner:s}};we.createContext=function(t){return t={$$typeof:lR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:aR,_context:t},t.Consumer=t};we.createElement=vS;we.createFactory=function(t){var e=vS.bind(null,t);return e.type=t,e};we.createRef=function(){return{current:null}};we.forwardRef=function(t){return{$$typeof:uR,render:t}};we.isValidElement=my;we.lazy=function(t){return{$$typeof:fR,_payload:{_status:-1,_result:t},_init:gR}};we.memo=function(t,e){return{$$typeof:dR,type:t,compare:e===void 0?null:e}};we.startTransition=function(t){var e=Oc.transition;Oc.transition={};try{t()}finally{Oc.transition=e}};we.unstable_act=_S;we.useCallback=function(t,e){return rn.current.useCallback(t,e)};we.useContext=function(t){return rn.current.useContext(t)};we.useDebugValue=function(){};we.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};we.useEffect=function(t,e){return rn.current.useEffect(t,e)};we.useId=function(){return rn.current.useId()};we.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};we.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};we.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};we.useMemo=function(t,e){return rn.current.useMemo(t,e)};we.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};we.useRef=function(t){return rn.current.useRef(t)};we.useState=function(t){return rn.current.useState(t)};we.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};we.useTransition=function(){return rn.current.useTransition()};we.version="18.3.1";dS.exports=we;var U=dS.exports;const pe=dy(U),vR=tR({__proto__:null,default:pe},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _R=U,wR=Symbol.for("react.element"),ER=Symbol.for("react.fragment"),SR=Object.prototype.hasOwnProperty,TR=_R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bR={key:!0,ref:!0,__self:!0,__source:!0};function wS(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)SR.call(e,r)&&!bR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wR,type:t,key:o,ref:s,props:i,_owner:TR.current}}bf.Fragment=ER;bf.jsx=wS;bf.jsxs=wS;cS.exports=bf;var ee=cS.exports,Tm={},ES={exports:{}},zn={},SS={exports:{}},TS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,W){var X=V.length;V.push(W);e:for(;0<X;){var le=X-1>>>1,ye=V[le];if(0<i(ye,W))V[le]=W,V[X]=ye,X=le;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var W=V[0],X=V.pop();if(X!==W){V[0]=X;e:for(var le=0,ye=V.length,Oe=ye>>>1;le<Oe;){var er=2*(le+1)-1,wt=V[er],Vt=er+1,ft=V[Vt];if(0>i(wt,X))Vt<ye&&0>i(ft,wt)?(V[le]=ft,V[Vt]=X,le=Vt):(V[le]=wt,V[er]=X,le=er);else if(Vt<ye&&0>i(ft,X))V[le]=ft,V[Vt]=X,le=Vt;else break e}}return W}function i(V,W){var X=V.sortIndex-W.sortIndex;return X!==0?X:V.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],f=1,h=null,m=3,_=!1,E=!1,w=!1,d=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(V){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=V)r(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function b(V){if(w=!1,v(V),!E)if(n(l)!==null)E=!0,G(I);else{var W=n(c);W!==null&&Y(b,W.startTime-V)}}function I(V,W){E=!1,w&&(w=!1,p(T),T=-1),_=!0;var X=m;try{for(v(W),h=n(l);h!==null&&(!(h.expirationTime>W)||V&&!O());){var le=h.callback;if(typeof le=="function"){h.callback=null,m=h.priorityLevel;var ye=le(h.expirationTime<=W);W=t.unstable_now(),typeof ye=="function"?h.callback=ye:h===n(l)&&r(l),v(W)}else r(l);h=n(l)}if(h!==null)var Oe=!0;else{var er=n(c);er!==null&&Y(b,er.startTime-W),Oe=!1}return Oe}finally{h=null,m=X,_=!1}}var x=!1,C=null,T=-1,P=5,A=-1;function O(){return!(t.unstable_now()-A<P)}function z(){if(C!==null){var V=t.unstable_now();A=V;var W=!0;try{W=C(!0,V)}finally{W?k():(x=!1,C=null)}}else x=!1}var k;if(typeof g=="function")k=function(){g(z)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,j=q.port2;q.port1.onmessage=z,k=function(){j.postMessage(null)}}else k=function(){d(z,0)};function G(V){C=V,x||(x=!0,k())}function Y(V,W){T=d(function(){V(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){E||_||(E=!0,G(I))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var X=m;m=W;try{return V()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,W){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var X=m;m=V;try{return W()}finally{m=X}},t.unstable_scheduleCallback=function(V,W,X){var le=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?le+X:le):X=le,V){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=X+ye,V={id:f++,callback:W,priorityLevel:V,startTime:X,expirationTime:ye,sortIndex:-1},X>le?(V.sortIndex=X,e(c,V),n(l)===null&&V===n(c)&&(w?(p(T),T=-1):w=!0,Y(b,X-le))):(V.sortIndex=ye,e(l,V),E||_||(E=!0,G(I))),V},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(V){var W=m;return function(){var X=m;m=W;try{return V.apply(this,arguments)}finally{m=X}}}})(TS);SS.exports=TS;var IR=SS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CR=U,kn=IR;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bS=new Set,xl={};function as(t,e){ia(t,e),ia(t+"Capture",e)}function ia(t,e){for(xl[t]=e,t=0;t<e.length;t++)bS.add(e[t])}var oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bm=Object.prototype.hasOwnProperty,PR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,__={},w_={};function AR(t){return bm.call(w_,t)?!0:bm.call(__,t)?!1:PR.test(t)?w_[t]=!0:(__[t]=!0,!1)}function RR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kR(t,e,n,r){if(e===null||typeof e>"u"||RR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Mt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Mt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Mt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Mt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Mt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Mt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Mt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Mt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Mt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var gy=/[\-:]([a-z])/g;function yy(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gy,yy);Mt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gy,yy);Mt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gy,yy);Mt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Mt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Mt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Mt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function vy(t,e,n,r){var i=Mt.hasOwnProperty(e)?Mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kR(e,n,i,r)&&(n=null),r||i===null?AR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gi=CR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oc=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),_y=Symbol.for("react.strict_mode"),Im=Symbol.for("react.profiler"),IS=Symbol.for("react.provider"),CS=Symbol.for("react.context"),wy=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),Pm=Symbol.for("react.suspense_list"),Ey=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),PS=Symbol.for("react.offscreen"),E_=Symbol.iterator;function qa(t){return t===null||typeof t!="object"?null:(t=E_&&t[E_]||t["@@iterator"],typeof t=="function"?t:null)}var Je=Object.assign,Zh;function tl(t){if(Zh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zh=e&&e[1]||""}return`
`+Zh+t}var ep=!1;function tp(t,e){if(!t||ep)return"";ep=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{ep=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?tl(t):""}function OR(t){switch(t.tag){case 5:return tl(t.type);case 16:return tl("Lazy");case 13:return tl("Suspense");case 19:return tl("SuspenseList");case 0:case 2:case 15:return t=tp(t.type,!1),t;case 11:return t=tp(t.type.render,!1),t;case 1:return t=tp(t.type,!0),t;default:return""}}function Am(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case xs:return"Portal";case Im:return"Profiler";case _y:return"StrictMode";case Cm:return"Suspense";case Pm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case CS:return(t.displayName||"Context")+".Consumer";case IS:return(t._context.displayName||"Context")+".Provider";case wy:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ey:return e=t.displayName||null,e!==null?e:Am(t.type)||"Memo";case Pi:e=t._payload,t=t._init;try{return Am(t(e))}catch{}}return null}function zR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Am(e);case 8:return e===_y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function to(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function AS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xR(t){var e=AS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sc(t){t._valueTracker||(t._valueTracker=xR(t))}function RS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=AS(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rm(t,e){var n=e.checked;return Je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function S_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=to(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kS(t,e){e=e.checked,e!=null&&vy(t,"checked",e,!1)}function km(t,e){kS(t,e);var n=to(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Om(t,e.type,n):e.hasOwnProperty("defaultValue")&&Om(t,e.type,to(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function T_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Om(t,e,n){(e!=="number"||yd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var nl=Array.isArray;function qs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+to(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function b_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(nl(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:to(n)}}function OS(t,e){var n=to(e.value),r=to(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function I_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ac,xS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ac=ac||document.createElement("div"),ac.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ac.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Nl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NR=["Webkit","ms","Moz","O"];Object.keys(hl).forEach(function(t){NR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hl[e]=hl[t]})});function NS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hl.hasOwnProperty(t)&&hl[t]?(""+e).trim():e+"px"}function US(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=NS(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var UR=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nm(t,e){if(e){if(UR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Um(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dm=null;function Sy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mm=null,Hs=null,Ks=null;function C_(t){if(t=_u(t)){if(typeof Mm!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Rf(e),Mm(t.stateNode,t.type,e))}}function DS(t){Hs?Ks?Ks.push(t):Ks=[t]:Hs=t}function MS(){if(Hs){var t=Hs,e=Ks;if(Ks=Hs=null,C_(t),e)for(t=0;t<e.length;t++)C_(e[t])}}function LS(t,e){return t(e)}function VS(){}var np=!1;function jS(t,e,n){if(np)return t(e,n);np=!0;try{return LS(t,e,n)}finally{np=!1,(Hs!==null||Ks!==null)&&(VS(),MS())}}function Ul(t,e){var n=t.stateNode;if(n===null)return null;var r=Rf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Lm=!1;if(oi)try{var Ha={};Object.defineProperty(Ha,"passive",{get:function(){Lm=!0}}),window.addEventListener("test",Ha,Ha),window.removeEventListener("test",Ha,Ha)}catch{Lm=!1}function DR(t,e,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var pl=!1,vd=null,_d=!1,Vm=null,MR={onError:function(t){pl=!0,vd=t}};function LR(t,e,n,r,i,o,s,a,l){pl=!1,vd=null,DR.apply(MR,arguments)}function VR(t,e,n,r,i,o,s,a,l){if(LR.apply(this,arguments),pl){if(pl){var c=vd;pl=!1,vd=null}else throw Error(B(198));_d||(_d=!0,Vm=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function FS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function P_(t){if(ls(t)!==t)throw Error(B(188))}function jR(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return P_(i),t;if(o===r)return P_(i),e;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function $S(t){return t=jR(t),t!==null?BS(t):null}function BS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=BS(t);if(e!==null)return e;t=t.sibling}return null}var WS=kn.unstable_scheduleCallback,A_=kn.unstable_cancelCallback,FR=kn.unstable_shouldYield,$R=kn.unstable_requestPaint,at=kn.unstable_now,BR=kn.unstable_getCurrentPriorityLevel,Ty=kn.unstable_ImmediatePriority,qS=kn.unstable_UserBlockingPriority,wd=kn.unstable_NormalPriority,WR=kn.unstable_LowPriority,HS=kn.unstable_IdlePriority,If=null,kr=null;function qR(t){if(kr&&typeof kr.onCommitFiberRoot=="function")try{kr.onCommitFiberRoot(If,t,void 0,(t.current.flags&128)===128)}catch{}}var mr=Math.clz32?Math.clz32:GR,HR=Math.log,KR=Math.LN2;function GR(t){return t>>>=0,t===0?32:31-(HR(t)/KR|0)|0}var lc=64,uc=4194304;function rl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ed(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=rl(a):(o&=s,o!==0&&(r=rl(o)))}else s=n&~i,s!==0?r=rl(s):o!==0&&(r=rl(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mr(e),i=1<<n,r|=t[n],e&=~i;return r}function YR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-mr(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=YR(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function jm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function KS(){var t=lc;return lc<<=1,!(lc&4194240)&&(lc=64),t}function rp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mr(e),t[e]=n}function XR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mr(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function by(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var De=0;function GS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var YS,Iy,QS,XS,JS,Fm=!1,cc=[],ji=null,Fi=null,$i=null,Dl=new Map,Ml=new Map,Ri=[],JR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function R_(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Dl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(e.pointerId)}}function Ka(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=_u(e),e!==null&&Iy(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ZR(t,e,n,r,i){switch(e){case"focusin":return ji=Ka(ji,t,e,n,r,i),!0;case"dragenter":return Fi=Ka(Fi,t,e,n,r,i),!0;case"mouseover":return $i=Ka($i,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Dl.set(o,Ka(Dl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ml.set(o,Ka(Ml.get(o)||null,t,e,n,r,i)),!0}return!1}function ZS(t){var e=Uo(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=FS(n),e!==null){t.blockedOn=e,JS(t.priority,function(){QS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$m(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dm=r,n.target.dispatchEvent(r),Dm=null}else return e=_u(n),e!==null&&Iy(e),t.blockedOn=n,!1;e.shift()}return!0}function k_(t,e,n){zc(t)&&n.delete(e)}function ek(){Fm=!1,ji!==null&&zc(ji)&&(ji=null),Fi!==null&&zc(Fi)&&(Fi=null),$i!==null&&zc($i)&&($i=null),Dl.forEach(k_),Ml.forEach(k_)}function Ga(t,e){t.blockedOn===e&&(t.blockedOn=null,Fm||(Fm=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,ek)))}function Ll(t){function e(i){return Ga(i,t)}if(0<cc.length){Ga(cc[0],t);for(var n=1;n<cc.length;n++){var r=cc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ji!==null&&Ga(ji,t),Fi!==null&&Ga(Fi,t),$i!==null&&Ga($i,t),Dl.forEach(e),Ml.forEach(e),n=0;n<Ri.length;n++)r=Ri[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ri.length&&(n=Ri[0],n.blockedOn===null);)ZS(n),n.blockedOn===null&&Ri.shift()}var Gs=gi.ReactCurrentBatchConfig,Sd=!0;function tk(t,e,n,r){var i=De,o=Gs.transition;Gs.transition=null;try{De=1,Cy(t,e,n,r)}finally{De=i,Gs.transition=o}}function nk(t,e,n,r){var i=De,o=Gs.transition;Gs.transition=null;try{De=4,Cy(t,e,n,r)}finally{De=i,Gs.transition=o}}function Cy(t,e,n,r){if(Sd){var i=$m(t,e,n,r);if(i===null)hp(t,e,r,Td,n),R_(t,r);else if(ZR(i,t,e,n,r))r.stopPropagation();else if(R_(t,r),e&4&&-1<JR.indexOf(t)){for(;i!==null;){var o=_u(i);if(o!==null&&YS(o),o=$m(t,e,n,r),o===null&&hp(t,e,r,Td,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else hp(t,e,r,null,n)}}var Td=null;function $m(t,e,n,r){if(Td=null,t=Sy(r),t=Uo(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=FS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Td=t,null}function eT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BR()){case Ty:return 1;case qS:return 4;case wd:case WR:return 16;case HS:return 536870912;default:return 16}default:return 16}}var Ui=null,Py=null,xc=null;function tT(){if(xc)return xc;var t,e=Py,n=e.length,r,i="value"in Ui?Ui.value:Ui.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return xc=i.slice(t,1<r?1-r:void 0)}function Nc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dc(){return!0}function O_(){return!1}function xn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?dc:O_,this.isPropagationStopped=O_,this}return Je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),e}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ay=xn(Ta),vu=Je({},Ta,{view:0,detail:0}),rk=xn(vu),ip,op,Ya,Cf=Je({},vu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ry,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ya&&(Ya&&t.type==="mousemove"?(ip=t.screenX-Ya.screenX,op=t.screenY-Ya.screenY):op=ip=0,Ya=t),ip)},movementY:function(t){return"movementY"in t?t.movementY:op}}),z_=xn(Cf),ik=Je({},Cf,{dataTransfer:0}),ok=xn(ik),sk=Je({},vu,{relatedTarget:0}),sp=xn(sk),ak=Je({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),lk=xn(ak),uk=Je({},Ta,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ck=xn(uk),dk=Je({},Ta,{data:0}),x_=xn(dk),fk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pk[t])?!!e[t]:!1}function Ry(){return mk}var gk=Je({},vu,{key:function(t){if(t.key){var e=fk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ry,charCode:function(t){return t.type==="keypress"?Nc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yk=xn(gk),vk=Je({},Cf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),N_=xn(vk),_k=Je({},vu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ry}),wk=xn(_k),Ek=Je({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sk=xn(Ek),Tk=Je({},Cf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bk=xn(Tk),Ik=[9,13,27,32],ky=oi&&"CompositionEvent"in window,ml=null;oi&&"documentMode"in document&&(ml=document.documentMode);var Ck=oi&&"TextEvent"in window&&!ml,nT=oi&&(!ky||ml&&8<ml&&11>=ml),U_=String.fromCharCode(32),D_=!1;function rT(t,e){switch(t){case"keyup":return Ik.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function Pk(t,e){switch(t){case"compositionend":return iT(e);case"keypress":return e.which!==32?null:(D_=!0,U_);case"textInput":return t=e.data,t===U_&&D_?null:t;default:return null}}function Ak(t,e){if(Us)return t==="compositionend"||!ky&&rT(t,e)?(t=tT(),xc=Py=Ui=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nT&&e.locale!=="ko"?null:e.data;default:return null}}var Rk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function M_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rk[t.type]:e==="textarea"}function oT(t,e,n,r){DS(r),e=bd(e,"onChange"),0<e.length&&(n=new Ay("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var gl=null,Vl=null;function kk(t){gT(t,0)}function Pf(t){var e=Ls(t);if(RS(e))return t}function Ok(t,e){if(t==="change")return e}var sT=!1;if(oi){var ap;if(oi){var lp="oninput"in document;if(!lp){var L_=document.createElement("div");L_.setAttribute("oninput","return;"),lp=typeof L_.oninput=="function"}ap=lp}else ap=!1;sT=ap&&(!document.documentMode||9<document.documentMode)}function V_(){gl&&(gl.detachEvent("onpropertychange",aT),Vl=gl=null)}function aT(t){if(t.propertyName==="value"&&Pf(Vl)){var e=[];oT(e,Vl,t,Sy(t)),jS(kk,e)}}function zk(t,e,n){t==="focusin"?(V_(),gl=e,Vl=n,gl.attachEvent("onpropertychange",aT)):t==="focusout"&&V_()}function xk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pf(Vl)}function Nk(t,e){if(t==="click")return Pf(e)}function Uk(t,e){if(t==="input"||t==="change")return Pf(e)}function Dk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _r=typeof Object.is=="function"?Object.is:Dk;function jl(t,e){if(_r(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bm.call(e,i)||!_r(t[i],e[i]))return!1}return!0}function j_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function F_(t,e){var n=j_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=j_(n)}}function lT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uT(){for(var t=window,e=yd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yd(t.document)}return e}function Oy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Mk(t){var e=uT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lT(n.ownerDocument.documentElement,n)){if(r!==null&&Oy(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=F_(n,o);var s=F_(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Lk=oi&&"documentMode"in document&&11>=document.documentMode,Ds=null,Bm=null,yl=null,Wm=!1;function $_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wm||Ds==null||Ds!==yd(r)||(r=Ds,"selectionStart"in r&&Oy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yl&&jl(yl,r)||(yl=r,r=bd(Bm,"onSelect"),0<r.length&&(e=new Ay("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ds)))}function fc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:fc("Animation","AnimationEnd"),animationiteration:fc("Animation","AnimationIteration"),animationstart:fc("Animation","AnimationStart"),transitionend:fc("Transition","TransitionEnd")},up={},cT={};oi&&(cT=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Af(t){if(up[t])return up[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cT)return up[t]=e[n];return t}var dT=Af("animationend"),fT=Af("animationiteration"),hT=Af("animationstart"),pT=Af("transitionend"),mT=new Map,B_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ao(t,e){mT.set(t,e),as(e,[t])}for(var cp=0;cp<B_.length;cp++){var dp=B_[cp],Vk=dp.toLowerCase(),jk=dp[0].toUpperCase()+dp.slice(1);ao(Vk,"on"+jk)}ao(dT,"onAnimationEnd");ao(fT,"onAnimationIteration");ao(hT,"onAnimationStart");ao("dblclick","onDoubleClick");ao("focusin","onFocus");ao("focusout","onBlur");ao(pT,"onTransitionEnd");ia("onMouseEnter",["mouseout","mouseover"]);ia("onMouseLeave",["mouseout","mouseover"]);ia("onPointerEnter",["pointerout","pointerover"]);ia("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fk=new Set("cancel close invalid load scroll toggle".split(" ").concat(il));function W_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,VR(r,e,void 0,t),t.currentTarget=null}function gT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;W_(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;W_(i,a,c),o=l}}}if(_d)throw t=Vm,_d=!1,Vm=null,t}function We(t,e){var n=e[Ym];n===void 0&&(n=e[Ym]=new Set);var r=t+"__bubble";n.has(r)||(yT(e,t,2,!1),n.add(r))}function fp(t,e,n){var r=0;e&&(r|=4),yT(n,t,r,e)}var hc="_reactListening"+Math.random().toString(36).slice(2);function Fl(t){if(!t[hc]){t[hc]=!0,bS.forEach(function(n){n!=="selectionchange"&&(Fk.has(n)||fp(n,!1,t),fp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hc]||(e[hc]=!0,fp("selectionchange",!1,e))}}function yT(t,e,n,r){switch(eT(e)){case 1:var i=tk;break;case 4:i=nk;break;default:i=Cy}n=i.bind(null,e,n,t),i=void 0,!Lm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hp(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Uo(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}jS(function(){var c=o,f=Sy(n),h=[];e:{var m=mT.get(t);if(m!==void 0){var _=Ay,E=t;switch(t){case"keypress":if(Nc(n)===0)break e;case"keydown":case"keyup":_=yk;break;case"focusin":E="focus",_=sp;break;case"focusout":E="blur",_=sp;break;case"beforeblur":case"afterblur":_=sp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=z_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=ok;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=wk;break;case dT:case fT:case hT:_=lk;break;case pT:_=Sk;break;case"scroll":_=rk;break;case"wheel":_=bk;break;case"copy":case"cut":case"paste":_=ck;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=N_}var w=(e&4)!==0,d=!w&&t==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var g=c,v;g!==null;){v=g;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,p!==null&&(b=Ul(g,p),b!=null&&w.push($l(g,b,v)))),d)break;g=g.return}0<w.length&&(m=new _(m,E,null,n,f),h.push({event:m,listeners:w}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Dm&&(E=n.relatedTarget||n.fromElement)&&(Uo(E)||E[si]))break e;if((_||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,_?(E=n.relatedTarget||n.toElement,_=c,E=E?Uo(E):null,E!==null&&(d=ls(E),E!==d||E.tag!==5&&E.tag!==6)&&(E=null)):(_=null,E=c),_!==E)){if(w=z_,b="onMouseLeave",p="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(w=N_,b="onPointerLeave",p="onPointerEnter",g="pointer"),d=_==null?m:Ls(_),v=E==null?m:Ls(E),m=new w(b,g+"leave",_,n,f),m.target=d,m.relatedTarget=v,b=null,Uo(f)===c&&(w=new w(p,g+"enter",E,n,f),w.target=v,w.relatedTarget=d,b=w),d=b,_&&E)t:{for(w=_,p=E,g=0,v=w;v;v=As(v))g++;for(v=0,b=p;b;b=As(b))v++;for(;0<g-v;)w=As(w),g--;for(;0<v-g;)p=As(p),v--;for(;g--;){if(w===p||p!==null&&w===p.alternate)break t;w=As(w),p=As(p)}w=null}else w=null;_!==null&&q_(h,m,_,w,!1),E!==null&&d!==null&&q_(h,d,E,w,!0)}}e:{if(m=c?Ls(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var I=Ok;else if(M_(m))if(sT)I=Uk;else{I=xk;var x=zk}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=Nk);if(I&&(I=I(t,c))){oT(h,I,n,f);break e}x&&x(t,m,c),t==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&Om(m,"number",m.value)}switch(x=c?Ls(c):window,t){case"focusin":(M_(x)||x.contentEditable==="true")&&(Ds=x,Bm=c,yl=null);break;case"focusout":yl=Bm=Ds=null;break;case"mousedown":Wm=!0;break;case"contextmenu":case"mouseup":case"dragend":Wm=!1,$_(h,n,f);break;case"selectionchange":if(Lk)break;case"keydown":case"keyup":$_(h,n,f)}var C;if(ky)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Us?rT(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(nT&&n.locale!=="ko"&&(Us||T!=="onCompositionStart"?T==="onCompositionEnd"&&Us&&(C=tT()):(Ui=f,Py="value"in Ui?Ui.value:Ui.textContent,Us=!0)),x=bd(c,T),0<x.length&&(T=new x_(T,t,null,n,f),h.push({event:T,listeners:x}),C?T.data=C:(C=iT(n),C!==null&&(T.data=C)))),(C=Ck?Pk(t,n):Ak(t,n))&&(c=bd(c,"onBeforeInput"),0<c.length&&(f=new x_("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=C))}gT(h,e)})}function $l(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ul(t,n),o!=null&&r.unshift($l(t,o,i)),o=Ul(t,e),o!=null&&r.push($l(t,o,i))),t=t.return}return r}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function q_(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ul(n,o),l!=null&&s.unshift($l(n,l,a))):i||(l=Ul(n,o),l!=null&&s.push($l(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var $k=/\r\n?/g,Bk=/\u0000|\uFFFD/g;function H_(t){return(typeof t=="string"?t:""+t).replace($k,`
`).replace(Bk,"")}function pc(t,e,n){if(e=H_(e),H_(t)!==e&&n)throw Error(B(425))}function Id(){}var qm=null,Hm=null;function Km(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gm=typeof setTimeout=="function"?setTimeout:void 0,Wk=typeof clearTimeout=="function"?clearTimeout:void 0,K_=typeof Promise=="function"?Promise:void 0,qk=typeof queueMicrotask=="function"?queueMicrotask:typeof K_<"u"?function(t){return K_.resolve(null).then(t).catch(Hk)}:Gm;function Hk(t){setTimeout(function(){throw t})}function pp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ll(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ll(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function G_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ba=Math.random().toString(36).slice(2),Ar="__reactFiber$"+ba,Bl="__reactProps$"+ba,si="__reactContainer$"+ba,Ym="__reactEvents$"+ba,Kk="__reactListeners$"+ba,Gk="__reactHandles$"+ba;function Uo(t){var e=t[Ar];if(e)return e;for(var n=t.parentNode;n;){if(e=n[si]||n[Ar]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=G_(t);t!==null;){if(n=t[Ar])return n;t=G_(t)}return e}t=n,n=t.parentNode}return null}function _u(t){return t=t[Ar]||t[si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Rf(t){return t[Bl]||null}var Qm=[],Vs=-1;function lo(t){return{current:t}}function qe(t){0>Vs||(t.current=Qm[Vs],Qm[Vs]=null,Vs--)}function Be(t,e){Vs++,Qm[Vs]=t.current,t.current=e}var no={},Xt=lo(no),dn=lo(!1),qo=no;function oa(t,e){var n=t.type.contextTypes;if(!n)return no;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function fn(t){return t=t.childContextTypes,t!=null}function Cd(){qe(dn),qe(Xt)}function Y_(t,e,n){if(Xt.current!==no)throw Error(B(168));Be(Xt,e),Be(dn,n)}function vT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,zR(t)||"Unknown",i));return Je({},n,r)}function Pd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||no,qo=Xt.current,Be(Xt,t),Be(dn,dn.current),!0}function Q_(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=vT(t,e,qo),r.__reactInternalMemoizedMergedChildContext=t,qe(dn),qe(Xt),Be(Xt,t)):qe(dn),Be(dn,n)}var Gr=null,kf=!1,mp=!1;function _T(t){Gr===null?Gr=[t]:Gr.push(t)}function Yk(t){kf=!0,_T(t)}function uo(){if(!mp&&Gr!==null){mp=!0;var t=0,e=De;try{var n=Gr;for(De=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gr=null,kf=!1}catch(i){throw Gr!==null&&(Gr=Gr.slice(t+1)),WS(Ty,uo),i}finally{De=e,mp=!1}}return null}var js=[],Fs=0,Ad=null,Rd=0,$n=[],Bn=0,Ho=null,Qr=1,Xr="";function ko(t,e){js[Fs++]=Rd,js[Fs++]=Ad,Ad=t,Rd=e}function wT(t,e,n){$n[Bn++]=Qr,$n[Bn++]=Xr,$n[Bn++]=Ho,Ho=t;var r=Qr;t=Xr;var i=32-mr(r)-1;r&=~(1<<i),n+=1;var o=32-mr(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Qr=1<<32-mr(e)+i|n<<i|r,Xr=o+t}else Qr=1<<o|n<<i|r,Xr=t}function zy(t){t.return!==null&&(ko(t,1),wT(t,1,0))}function xy(t){for(;t===Ad;)Ad=js[--Fs],js[Fs]=null,Rd=js[--Fs],js[Fs]=null;for(;t===Ho;)Ho=$n[--Bn],$n[Bn]=null,Xr=$n[--Bn],$n[Bn]=null,Qr=$n[--Bn],$n[Bn]=null}var Pn=null,Cn=null,Ye=!1,dr=null;function ET(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function X_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ho!==null?{id:Qr,overflow:Xr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Cn=null,!0):!1;default:return!1}}function Xm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jm(t){if(Ye){var e=Cn;if(e){var n=e;if(!X_(t,e)){if(Xm(t))throw Error(B(418));e=Bi(n.nextSibling);var r=Pn;e&&X_(t,e)?ET(r,n):(t.flags=t.flags&-4097|2,Ye=!1,Pn=t)}}else{if(Xm(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ye=!1,Pn=t}}}function J_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function mc(t){if(t!==Pn)return!1;if(!Ye)return J_(t),Ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Km(t.type,t.memoizedProps)),e&&(e=Cn)){if(Xm(t))throw ST(),Error(B(418));for(;e;)ET(t,e),e=Bi(e.nextSibling)}if(J_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Pn?Bi(t.stateNode.nextSibling):null;return!0}function ST(){for(var t=Cn;t;)t=Bi(t.nextSibling)}function sa(){Cn=Pn=null,Ye=!1}function Ny(t){dr===null?dr=[t]:dr.push(t)}var Qk=gi.ReactCurrentBatchConfig;function Qa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function gc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Z_(t){var e=t._init;return e(t._payload)}function TT(t){function e(p,g){if(t){var v=p.deletions;v===null?(p.deletions=[g],p.flags|=16):v.push(g)}}function n(p,g){if(!t)return null;for(;g!==null;)e(p,g),g=g.sibling;return null}function r(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function i(p,g){return p=Ki(p,g),p.index=0,p.sibling=null,p}function o(p,g,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<g?(p.flags|=2,g):v):(p.flags|=2,g)):(p.flags|=1048576,g)}function s(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,g,v,b){return g===null||g.tag!==6?(g=Sp(v,p.mode,b),g.return=p,g):(g=i(g,v),g.return=p,g)}function l(p,g,v,b){var I=v.type;return I===Ns?f(p,g,v.props.children,b,v.key):g!==null&&(g.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Pi&&Z_(I)===g.type)?(b=i(g,v.props),b.ref=Qa(p,g,v),b.return=p,b):(b=Fc(v.type,v.key,v.props,null,p.mode,b),b.ref=Qa(p,g,v),b.return=p,b)}function c(p,g,v,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Tp(v,p.mode,b),g.return=p,g):(g=i(g,v.children||[]),g.return=p,g)}function f(p,g,v,b,I){return g===null||g.tag!==7?(g=Bo(v,p.mode,b,I),g.return=p,g):(g=i(g,v),g.return=p,g)}function h(p,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Sp(""+g,p.mode,v),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oc:return v=Fc(g.type,g.key,g.props,null,p.mode,v),v.ref=Qa(p,null,g),v.return=p,v;case xs:return g=Tp(g,p.mode,v),g.return=p,g;case Pi:var b=g._init;return h(p,b(g._payload),v)}if(nl(g)||qa(g))return g=Bo(g,p.mode,v,null),g.return=p,g;gc(p,g)}return null}function m(p,g,v,b){var I=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return I!==null?null:a(p,g,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oc:return v.key===I?l(p,g,v,b):null;case xs:return v.key===I?c(p,g,v,b):null;case Pi:return I=v._init,m(p,g,I(v._payload),b)}if(nl(v)||qa(v))return I!==null?null:f(p,g,v,b,null);gc(p,v)}return null}function _(p,g,v,b,I){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(v)||null,a(g,p,""+b,I);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case oc:return p=p.get(b.key===null?v:b.key)||null,l(g,p,b,I);case xs:return p=p.get(b.key===null?v:b.key)||null,c(g,p,b,I);case Pi:var x=b._init;return _(p,g,v,x(b._payload),I)}if(nl(b)||qa(b))return p=p.get(v)||null,f(g,p,b,I,null);gc(g,b)}return null}function E(p,g,v,b){for(var I=null,x=null,C=g,T=g=0,P=null;C!==null&&T<v.length;T++){C.index>T?(P=C,C=null):P=C.sibling;var A=m(p,C,v[T],b);if(A===null){C===null&&(C=P);break}t&&C&&A.alternate===null&&e(p,C),g=o(A,g,T),x===null?I=A:x.sibling=A,x=A,C=P}if(T===v.length)return n(p,C),Ye&&ko(p,T),I;if(C===null){for(;T<v.length;T++)C=h(p,v[T],b),C!==null&&(g=o(C,g,T),x===null?I=C:x.sibling=C,x=C);return Ye&&ko(p,T),I}for(C=r(p,C);T<v.length;T++)P=_(C,p,T,v[T],b),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?T:P.key),g=o(P,g,T),x===null?I=P:x.sibling=P,x=P);return t&&C.forEach(function(O){return e(p,O)}),Ye&&ko(p,T),I}function w(p,g,v,b){var I=qa(v);if(typeof I!="function")throw Error(B(150));if(v=I.call(v),v==null)throw Error(B(151));for(var x=I=null,C=g,T=g=0,P=null,A=v.next();C!==null&&!A.done;T++,A=v.next()){C.index>T?(P=C,C=null):P=C.sibling;var O=m(p,C,A.value,b);if(O===null){C===null&&(C=P);break}t&&C&&O.alternate===null&&e(p,C),g=o(O,g,T),x===null?I=O:x.sibling=O,x=O,C=P}if(A.done)return n(p,C),Ye&&ko(p,T),I;if(C===null){for(;!A.done;T++,A=v.next())A=h(p,A.value,b),A!==null&&(g=o(A,g,T),x===null?I=A:x.sibling=A,x=A);return Ye&&ko(p,T),I}for(C=r(p,C);!A.done;T++,A=v.next())A=_(C,p,T,A.value,b),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?T:A.key),g=o(A,g,T),x===null?I=A:x.sibling=A,x=A);return t&&C.forEach(function(z){return e(p,z)}),Ye&&ko(p,T),I}function d(p,g,v,b){if(typeof v=="object"&&v!==null&&v.type===Ns&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case oc:e:{for(var I=v.key,x=g;x!==null;){if(x.key===I){if(I=v.type,I===Ns){if(x.tag===7){n(p,x.sibling),g=i(x,v.props.children),g.return=p,p=g;break e}}else if(x.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Pi&&Z_(I)===x.type){n(p,x.sibling),g=i(x,v.props),g.ref=Qa(p,x,v),g.return=p,p=g;break e}n(p,x);break}else e(p,x);x=x.sibling}v.type===Ns?(g=Bo(v.props.children,p.mode,b,v.key),g.return=p,p=g):(b=Fc(v.type,v.key,v.props,null,p.mode,b),b.ref=Qa(p,g,v),b.return=p,p=b)}return s(p);case xs:e:{for(x=v.key;g!==null;){if(g.key===x)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(p,g.sibling),g=i(g,v.children||[]),g.return=p,p=g;break e}else{n(p,g);break}else e(p,g);g=g.sibling}g=Tp(v,p.mode,b),g.return=p,p=g}return s(p);case Pi:return x=v._init,d(p,g,x(v._payload),b)}if(nl(v))return E(p,g,v,b);if(qa(v))return w(p,g,v,b);gc(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(p,g.sibling),g=i(g,v),g.return=p,p=g):(n(p,g),g=Sp(v,p.mode,b),g.return=p,p=g),s(p)):n(p,g)}return d}var aa=TT(!0),bT=TT(!1),kd=lo(null),Od=null,$s=null,Uy=null;function Dy(){Uy=$s=Od=null}function My(t){var e=kd.current;qe(kd),t._currentValue=e}function Zm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){Od=t,Uy=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(Uy!==t)if(t={context:t,memoizedValue:e,next:null},$s===null){if(Od===null)throw Error(B(308));$s=t,Od.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return e}var Do=null;function Ly(t){Do===null?Do=[t]:Do.push(t)}function IT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ly(e)):(n.next=i.next,i.next=n),e.interleaved=n,ai(t,r)}function ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function Vy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function CT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ai(t,n)}return i=r.interleaved,i===null?(e.next=e,Ly(r)):(e.next=i.next,i.next=e),r.interleaved=e,ai(t,n)}function Uc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,by(t,n)}}function ew(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zd(t,e,n,r){var i=t.updateQueue;Ai=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,f=c=l=null,a=o;do{var m=a.lane,_=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,w=a;switch(m=e,_=n,w.tag){case 1:if(E=w.payload,typeof E=="function"){h=E.call(_,h,m);break e}h=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=w.payload,m=typeof E=="function"?E.call(_,h,m):E,m==null)break e;h=Je({},h,m);break e;case 2:Ai=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=_,l=h):f=f.next=_,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Go|=s,t.lanes=s,t.memoizedState=h}}function tw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var wu={},Or=lo(wu),Wl=lo(wu),ql=lo(wu);function Mo(t){if(t===wu)throw Error(B(174));return t}function jy(t,e){switch(Be(ql,e),Be(Wl,t),Be(Or,wu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xm(e,t)}qe(Or),Be(Or,e)}function la(){qe(Or),qe(Wl),qe(ql)}function PT(t){Mo(ql.current);var e=Mo(Or.current),n=xm(e,t.type);e!==n&&(Be(Wl,t),Be(Or,n))}function Fy(t){Wl.current===t&&(qe(Or),qe(Wl))}var Qe=lo(0);function xd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gp=[];function $y(){for(var t=0;t<gp.length;t++)gp[t]._workInProgressVersionPrimary=null;gp.length=0}var Dc=gi.ReactCurrentDispatcher,yp=gi.ReactCurrentBatchConfig,Ko=0,Xe=null,gt=null,bt=null,Nd=!1,vl=!1,Hl=0,Xk=0;function Bt(){throw Error(B(321))}function By(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_r(t[n],e[n]))return!1;return!0}function Wy(t,e,n,r,i,o){if(Ko=o,Xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dc.current=t===null||t.memoizedState===null?tO:nO,t=n(r,i),vl){o=0;do{if(vl=!1,Hl=0,25<=o)throw Error(B(301));o+=1,bt=gt=null,e.updateQueue=null,Dc.current=rO,t=n(r,i)}while(vl)}if(Dc.current=Ud,e=gt!==null&&gt.next!==null,Ko=0,bt=gt=Xe=null,Nd=!1,e)throw Error(B(300));return t}function qy(){var t=Hl!==0;return Hl=0,t}function Pr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?Xe.memoizedState=bt=t:bt=bt.next=t,bt}function Qn(){if(gt===null){var t=Xe.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=bt===null?Xe.memoizedState:bt.next;if(e!==null)bt=e,gt=t;else{if(t===null)throw Error(B(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},bt===null?Xe.memoizedState=bt=t:bt=bt.next=t}return bt}function Kl(t,e){return typeof e=="function"?e(t):e}function vp(t){var e=Qn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=gt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var f=c.lane;if((Ko&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,Xe.lanes|=f,Go|=f}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,_r(r,e.memoizedState)||(un=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Xe.lanes|=o,Go|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _p(t){var e=Qn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);_r(o,e.memoizedState)||(un=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function AT(){}function RT(t,e){var n=Xe,r=Qn(),i=e(),o=!_r(r.memoizedState,i);if(o&&(r.memoizedState=i,un=!0),r=r.queue,Hy(zT.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Gl(9,OT.bind(null,n,r,i,e),void 0,null),It===null)throw Error(B(349));Ko&30||kT(n,e,i)}return i}function kT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function OT(t,e,n,r){e.value=n,e.getSnapshot=r,xT(e)&&NT(t)}function zT(t,e,n){return n(function(){xT(e)&&NT(t)})}function xT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_r(t,n)}catch{return!0}}function NT(t){var e=ai(t,1);e!==null&&gr(e,t,1,-1)}function nw(t){var e=Pr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:t},e.queue=t,t=t.dispatch=eO.bind(null,Xe,t),[e.memoizedState,t]}function Gl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function UT(){return Qn().memoizedState}function Mc(t,e,n,r){var i=Pr();Xe.flags|=t,i.memoizedState=Gl(1|e,n,void 0,r===void 0?null:r)}function Of(t,e,n,r){var i=Qn();r=r===void 0?null:r;var o=void 0;if(gt!==null){var s=gt.memoizedState;if(o=s.destroy,r!==null&&By(r,s.deps)){i.memoizedState=Gl(e,n,o,r);return}}Xe.flags|=t,i.memoizedState=Gl(1|e,n,o,r)}function rw(t,e){return Mc(8390656,8,t,e)}function Hy(t,e){return Of(2048,8,t,e)}function DT(t,e){return Of(4,2,t,e)}function MT(t,e){return Of(4,4,t,e)}function LT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function VT(t,e,n){return n=n!=null?n.concat([t]):null,Of(4,4,LT.bind(null,e,t),n)}function Ky(){}function jT(t,e){var n=Qn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&By(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function FT(t,e){var n=Qn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&By(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $T(t,e,n){return Ko&21?(_r(n,e)||(n=KS(),Xe.lanes|=n,Go|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function Jk(t,e){var n=De;De=n!==0&&4>n?n:4,t(!0);var r=yp.transition;yp.transition={};try{t(!1),e()}finally{De=n,yp.transition=r}}function BT(){return Qn().memoizedState}function Zk(t,e,n){var r=Hi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},WT(t))qT(e,n);else if(n=IT(t,e,n,r),n!==null){var i=nn();gr(n,t,r,i),HT(n,e,r)}}function eO(t,e,n){var r=Hi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(WT(t))qT(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,_r(a,s)){var l=e.interleaved;l===null?(i.next=i,Ly(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=IT(t,e,i,r),n!==null&&(i=nn(),gr(n,t,r,i),HT(n,e,r))}}function WT(t){var e=t.alternate;return t===Xe||e!==null&&e===Xe}function qT(t,e){vl=Nd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function HT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,by(t,n)}}var Ud={readContext:Yn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},tO={readContext:Yn,useCallback:function(t,e){return Pr().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:rw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4194308,4,LT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mc(4,2,t,e)},useMemo:function(t,e){var n=Pr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Zk.bind(null,Xe,t),[r.memoizedState,t]},useRef:function(t){var e=Pr();return t={current:t},e.memoizedState=t},useState:nw,useDebugValue:Ky,useDeferredValue:function(t){return Pr().memoizedState=t},useTransition:function(){var t=nw(!1),e=t[0];return t=Jk.bind(null,t[1]),Pr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Xe,i=Pr();if(Ye){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),It===null)throw Error(B(349));Ko&30||kT(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,rw(zT.bind(null,r,o,t),[t]),r.flags|=2048,Gl(9,OT.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Pr(),e=It.identifierPrefix;if(Ye){var n=Xr,r=Qr;n=(r&~(1<<32-mr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Hl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nO={readContext:Yn,useCallback:jT,useContext:Yn,useEffect:Hy,useImperativeHandle:VT,useInsertionEffect:DT,useLayoutEffect:MT,useMemo:FT,useReducer:vp,useRef:UT,useState:function(){return vp(Kl)},useDebugValue:Ky,useDeferredValue:function(t){var e=Qn();return $T(e,gt.memoizedState,t)},useTransition:function(){var t=vp(Kl)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:AT,useSyncExternalStore:RT,useId:BT,unstable_isNewReconciler:!1},rO={readContext:Yn,useCallback:jT,useContext:Yn,useEffect:Hy,useImperativeHandle:VT,useInsertionEffect:DT,useLayoutEffect:MT,useMemo:FT,useReducer:_p,useRef:UT,useState:function(){return _p(Kl)},useDebugValue:Ky,useDeferredValue:function(t){var e=Qn();return gt===null?e.memoizedState=t:$T(e,gt.memoizedState,t)},useTransition:function(){var t=_p(Kl)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:AT,useSyncExternalStore:RT,useId:BT,unstable_isNewReconciler:!1};function ur(t,e){if(t&&t.defaultProps){e=Je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function eg(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zf={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nn(),i=Hi(t),o=ni(r,i);o.payload=e,n!=null&&(o.callback=n),e=Wi(t,o,i),e!==null&&(gr(e,t,i,r),Uc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nn(),i=Hi(t),o=ni(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Wi(t,o,i),e!==null&&(gr(e,t,i,r),Uc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),r=Hi(t),i=ni(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wi(t,i,r),e!==null&&(gr(e,t,r,n),Uc(e,t,r))}};function iw(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!jl(n,r)||!jl(i,o):!0}function KT(t,e,n){var r=!1,i=no,o=e.contextType;return typeof o=="object"&&o!==null?o=Yn(o):(i=fn(e)?qo:Xt.current,r=e.contextTypes,o=(r=r!=null)?oa(t,i):no),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function ow(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zf.enqueueReplaceState(e,e.state,null)}function tg(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vy(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Yn(o):(o=fn(e)?qo:Xt.current,i.context=oa(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(eg(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&zf.enqueueReplaceState(i,i.state,null),zd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ua(t,e){try{var n="",r=e;do n+=OR(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function wp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ng(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iO=typeof WeakMap=="function"?WeakMap:Map;function GT(t,e,n){n=ni(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Md||(Md=!0,fg=r),ng(t,e)},n}function YT(t,e,n){n=ni(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ng(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ng(t,e),typeof r!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function sw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iO;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vO.bind(null,t,e,n),e.then(t,t))}function aw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ni(-1,1),e.tag=2,Wi(n,e,1))),n.lanes|=1),t)}var oO=gi.ReactCurrentOwner,un=!1;function tn(t,e,n,r){e.child=t===null?bT(e,null,n,r):aa(e,t.child,n,r)}function uw(t,e,n,r,i){n=n.render;var o=e.ref;return Ys(e,i),r=Wy(t,e,n,r,o,i),n=qy(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,li(t,e,i)):(Ye&&n&&zy(e),e.flags|=1,tn(t,e,r,i),e.child)}function cw(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!tv(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,QT(t,e,o,r,i)):(t=Fc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:jl,n(s,r)&&t.ref===e.ref)return li(t,e,i)}return e.flags|=1,t=Ki(o,r),t.ref=e.ref,t.return=e,e.child=t}function QT(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(jl(o,r)&&t.ref===e.ref)if(un=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,li(t,e,i)}return rg(t,e,n,r,i)}function XT(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(Ws,In),In|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Be(Ws,In),In|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Be(Ws,In),In|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Be(Ws,In),In|=r;return tn(t,e,i,n),e.child}function JT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rg(t,e,n,r,i){var o=fn(n)?qo:Xt.current;return o=oa(e,o),Ys(e,i),n=Wy(t,e,n,r,o,i),r=qy(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,li(t,e,i)):(Ye&&r&&zy(e),e.flags|=1,tn(t,e,n,i),e.child)}function dw(t,e,n,r,i){if(fn(n)){var o=!0;Pd(e)}else o=!1;if(Ys(e,i),e.stateNode===null)Lc(t,e),KT(e,n,r),tg(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=fn(n)?qo:Xt.current,c=oa(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&ow(e,s,r,c),Ai=!1;var m=e.memoizedState;s.state=m,zd(e,r,s,i),l=e.memoizedState,a!==r||m!==l||dn.current||Ai?(typeof f=="function"&&(eg(e,n,f,r),l=e.memoizedState),(a=Ai||iw(e,n,a,r,m,l,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,CT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ur(e.type,a),s.props=c,h=e.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=fn(n)?qo:Xt.current,l=oa(e,l));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||m!==l)&&ow(e,s,r,l),Ai=!1,m=e.memoizedState,s.state=m,zd(e,r,s,i);var E=e.memoizedState;a!==h||m!==E||dn.current||Ai?(typeof _=="function"&&(eg(e,n,_,r),E=e.memoizedState),(c=Ai||iw(e,n,c,r,m,E,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,E,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,E,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),s.props=r,s.state=E,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return ig(t,e,n,r,o,i)}function ig(t,e,n,r,i,o){JT(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Q_(e,n,!1),li(t,e,o);r=e.stateNode,oO.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=aa(e,t.child,null,o),e.child=aa(e,null,a,o)):tn(t,e,a,o),e.memoizedState=r.state,i&&Q_(e,n,!0),e.child}function ZT(t){var e=t.stateNode;e.pendingContext?Y_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Y_(t,e.context,!1),jy(t,e.containerInfo)}function fw(t,e,n,r,i){return sa(),Ny(i),e.flags|=256,tn(t,e,n,r),e.child}var og={dehydrated:null,treeContext:null,retryLane:0};function sg(t){return{baseLanes:t,cachePool:null,transitions:null}}function eb(t,e,n){var r=e.pendingProps,i=Qe.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Be(Qe,i&1),t===null)return Jm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Uf(s,r,0,null),t=Bo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=sg(n),e.memoizedState=og,t):Gy(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return sO(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ki(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ki(a,o):(o=Bo(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?sg(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=og,r}return o=t.child,t=o.sibling,r=Ki(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Gy(t,e){return e=Uf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yc(t,e,n,r){return r!==null&&Ny(r),aa(e,t.child,null,n),t=Gy(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sO(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=wp(Error(B(422))),yc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Uf({mode:"visible",children:r.children},i,0,null),o=Bo(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&aa(e,t.child,null,s),e.child.memoizedState=sg(s),e.memoizedState=og,o);if(!(e.mode&1))return yc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=wp(o,r,void 0),yc(t,e,s,r)}if(a=(s&t.childLanes)!==0,un||a){if(r=It,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ai(t,i),gr(r,t,i,-1))}return ev(),r=wp(Error(B(421))),yc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_O.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Cn=Bi(i.nextSibling),Pn=e,Ye=!0,dr=null,t!==null&&($n[Bn++]=Qr,$n[Bn++]=Xr,$n[Bn++]=Ho,Qr=t.id,Xr=t.overflow,Ho=e),e=Gy(e,r.children),e.flags|=4096,e)}function hw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zm(t.return,e,n)}function Ep(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function tb(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(tn(t,e,r.children,n),r=Qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hw(t,n,e);else if(t.tag===19)hw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Be(Qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ep(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ep(e,!0,n,null,o);break;case"together":Ep(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Go|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aO(t,e,n){switch(e.tag){case 3:ZT(e),sa();break;case 5:PT(e);break;case 1:fn(e.type)&&Pd(e);break;case 4:jy(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Be(kd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Be(Qe,Qe.current&1),e.flags|=128,null):n&e.child.childLanes?eb(t,e,n):(Be(Qe,Qe.current&1),t=li(t,e,n),t!==null?t.sibling:null);Be(Qe,Qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return tb(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Be(Qe,Qe.current),r)break;return null;case 22:case 23:return e.lanes=0,XT(t,e,n)}return li(t,e,n)}var nb,ag,rb,ib;nb=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ag=function(){};rb=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mo(Or.current);var o=null;switch(n){case"input":i=Rm(t,i),r=Rm(t,r),o=[];break;case"select":i=Je({},i,{value:void 0}),r=Je({},r,{value:void 0}),o=[];break;case"textarea":i=zm(t,i),r=zm(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Id)}Nm(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xl.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&We("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};ib=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xa(t,e){if(!Ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lO(t,e,n){var r=e.pendingProps;switch(xy(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return fn(e.type)&&Cd(),Wt(e),null;case 3:return r=e.stateNode,la(),qe(dn),qe(Xt),$y(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(mc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dr!==null&&(mg(dr),dr=null))),ag(t,e),Wt(e),null;case 5:Fy(e);var i=Mo(ql.current);if(n=e.type,t!==null&&e.stateNode!=null)rb(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Wt(e),null}if(t=Mo(Or.current),mc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Ar]=e,r[Bl]=o,t=(e.mode&1)!==0,n){case"dialog":We("cancel",r),We("close",r);break;case"iframe":case"object":case"embed":We("load",r);break;case"video":case"audio":for(i=0;i<il.length;i++)We(il[i],r);break;case"source":We("error",r);break;case"img":case"image":case"link":We("error",r),We("load",r);break;case"details":We("toggle",r);break;case"input":S_(r,o),We("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},We("invalid",r);break;case"textarea":b_(r,o),We("invalid",r)}Nm(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&pc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&pc(r.textContent,a,t),i=["children",""+a]):xl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&We("scroll",r)}switch(n){case"input":sc(r),T_(r,o,!0);break;case"textarea":sc(r),I_(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Id)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Ar]=e,t[Bl]=r,nb(t,e,!1,!1),e.stateNode=t;e:{switch(s=Um(n,r),n){case"dialog":We("cancel",t),We("close",t),i=r;break;case"iframe":case"object":case"embed":We("load",t),i=r;break;case"video":case"audio":for(i=0;i<il.length;i++)We(il[i],t);i=r;break;case"source":We("error",t),i=r;break;case"img":case"image":case"link":We("error",t),We("load",t),i=r;break;case"details":We("toggle",t),i=r;break;case"input":S_(t,r),i=Rm(t,r),We("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Je({},r,{value:void 0}),We("invalid",t);break;case"textarea":b_(t,r),i=zm(t,r),We("invalid",t);break;default:i=r}Nm(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?US(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xS(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Nl(t,l):typeof l=="number"&&Nl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&We("scroll",t):l!=null&&vy(t,o,l,s))}switch(n){case"input":sc(t),T_(t,r,!1);break;case"textarea":sc(t),I_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+to(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?qs(t,!!r.multiple,o,!1):r.defaultValue!=null&&qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Id)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)ib(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Mo(ql.current),Mo(Or.current),mc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ar]=e,(o=r.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:pc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ar]=e,e.stateNode=r}return Wt(e),null;case 13:if(qe(Qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ye&&Cn!==null&&e.mode&1&&!(e.flags&128))ST(),sa(),e.flags|=98560,o=!1;else if(o=mc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(B(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Ar]=e}else sa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),o=!1}else dr!==null&&(mg(dr),dr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Qe.current&1?vt===0&&(vt=3):ev())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return la(),ag(t,e),t===null&&Fl(e.stateNode.containerInfo),Wt(e),null;case 10:return My(e.type._context),Wt(e),null;case 17:return fn(e.type)&&Cd(),Wt(e),null;case 19:if(qe(Qe),o=e.memoizedState,o===null)return Wt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Xa(o,!1);else{if(vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=xd(t),s!==null){for(e.flags|=128,Xa(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Be(Qe,Qe.current&1|2),e.child}t=t.sibling}o.tail!==null&&at()>ca&&(e.flags|=128,r=!0,Xa(o,!1),e.lanes=4194304)}else{if(!r)if(t=xd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ye)return Wt(e),null}else 2*at()-o.renderingStartTime>ca&&n!==1073741824&&(e.flags|=128,r=!0,Xa(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=at(),e.sibling=null,n=Qe.current,Be(Qe,r?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return Zy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?In&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function uO(t,e){switch(xy(e),e.tag){case 1:return fn(e.type)&&Cd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return la(),qe(dn),qe(Xt),$y(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fy(e),null;case 13:if(qe(Qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));sa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return qe(Qe),null;case 4:return la(),null;case 10:return My(e.type._context),null;case 22:case 23:return Zy(),null;case 24:return null;default:return null}}var vc=!1,Gt=!1,cO=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){nt(t,e,r)}else n.current=null}function lg(t,e,n){try{n()}catch(r){nt(t,e,r)}}var pw=!1;function dO(t,e){if(qm=Sd,t=uT(),Oy(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,f=0,h=t,m=null;t:for(;;){for(var _;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(_=h.firstChild)!==null;)m=h,h=_;for(;;){if(h===t)break t;if(m===n&&++c===i&&(a=s),m===o&&++f===r&&(l=s),(_=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hm={focusedElem:t,selectionRange:n},Sd=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var w=E.memoizedProps,d=E.memoizedState,p=e.stateNode,g=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:ur(e.type,w),d);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(b){nt(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return E=pw,pw=!1,E}function _l(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&lg(e,n,o)}i=i.next}while(i!==r)}}function xf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ug(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ob(t){var e=t.alternate;e!==null&&(t.alternate=null,ob(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ar],delete e[Bl],delete e[Ym],delete e[Kk],delete e[Gk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sb(t){return t.tag===5||t.tag===3||t.tag===4}function mw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Id));else if(r!==4&&(t=t.child,t!==null))for(cg(t,e,n),t=t.sibling;t!==null;)cg(t,e,n),t=t.sibling}function dg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dg(t,e,n),t=t.sibling;t!==null;)dg(t,e,n),t=t.sibling}var zt=null,cr=!1;function Ii(t,e,n){for(n=n.child;n!==null;)ab(t,e,n),n=n.sibling}function ab(t,e,n){if(kr&&typeof kr.onCommitFiberUnmount=="function")try{kr.onCommitFiberUnmount(If,n)}catch{}switch(n.tag){case 5:Gt||Bs(n,e);case 6:var r=zt,i=cr;zt=null,Ii(t,e,n),zt=r,cr=i,zt!==null&&(cr?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(cr?(t=zt,n=n.stateNode,t.nodeType===8?pp(t.parentNode,n):t.nodeType===1&&pp(t,n),Ll(t)):pp(zt,n.stateNode));break;case 4:r=zt,i=cr,zt=n.stateNode.containerInfo,cr=!0,Ii(t,e,n),zt=r,cr=i;break;case 0:case 11:case 14:case 15:if(!Gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&lg(n,e,s),i=i.next}while(i!==r)}Ii(t,e,n);break;case 1:if(!Gt&&(Bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){nt(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Gt=(r=Gt)||n.memoizedState!==null,Ii(t,e,n),Gt=r):Ii(t,e,n);break;default:Ii(t,e,n)}}function gw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cO),e.forEach(function(r){var i=wO.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ar(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,cr=!1;break e;case 3:zt=a.stateNode.containerInfo,cr=!0;break e;case 4:zt=a.stateNode.containerInfo,cr=!0;break e}a=a.return}if(zt===null)throw Error(B(160));ab(o,s,i),zt=null,cr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){nt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lb(e,t),e=e.sibling}function lb(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ar(e,t),Ir(t),r&4){try{_l(3,t,t.return),xf(3,t)}catch(w){nt(t,t.return,w)}try{_l(5,t,t.return)}catch(w){nt(t,t.return,w)}}break;case 1:ar(e,t),Ir(t),r&512&&n!==null&&Bs(n,n.return);break;case 5:if(ar(e,t),Ir(t),r&512&&n!==null&&Bs(n,n.return),t.flags&32){var i=t.stateNode;try{Nl(i,"")}catch(w){nt(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&kS(i,o),Um(a,s);var c=Um(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?US(i,h):f==="dangerouslySetInnerHTML"?xS(i,h):f==="children"?Nl(i,h):vy(i,f,h,c)}switch(a){case"input":km(i,o);break;case"textarea":OS(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?qs(i,!!o.multiple,_,!1):m!==!!o.multiple&&(o.defaultValue!=null?qs(i,!!o.multiple,o.defaultValue,!0):qs(i,!!o.multiple,o.multiple?[]:"",!1))}i[Bl]=o}catch(w){nt(t,t.return,w)}}break;case 6:if(ar(e,t),Ir(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(w){nt(t,t.return,w)}}break;case 3:if(ar(e,t),Ir(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ll(e.containerInfo)}catch(w){nt(t,t.return,w)}break;case 4:ar(e,t),Ir(t);break;case 13:ar(e,t),Ir(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Xy=at())),r&4&&gw(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(c=Gt)||f,ar(e,t),Gt=c):ar(e,t),Ir(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(h=Q=f;Q!==null;){switch(m=Q,_=m.child,m.tag){case 0:case 11:case 14:case 15:_l(4,m,m.return);break;case 1:Bs(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(w){nt(r,n,w)}}break;case 5:Bs(m,m.return);break;case 22:if(m.memoizedState!==null){vw(h);continue}}_!==null?(_.return=m,Q=_):vw(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=NS("display",s))}catch(w){nt(t,t.return,w)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){nt(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ar(e,t),Ir(t),r&4&&gw(t);break;case 21:break;default:ar(e,t),Ir(t)}}function Ir(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sb(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nl(i,""),r.flags&=-33);var o=mw(t);dg(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=mw(t);cg(t,a,s);break;default:throw Error(B(161))}}catch(l){nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fO(t,e,n){Q=t,ub(t)}function ub(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||vc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=vc;var c=Gt;if(vc=s,(Gt=l)&&!c)for(Q=i;Q!==null;)s=Q,l=s.child,s.tag===22&&s.memoizedState!==null?_w(i):l!==null?(l.return=s,Q=l):_w(i);for(;o!==null;)Q=o,ub(o),o=o.sibling;Q=i,vc=a,Gt=c}yw(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Q=o):yw(t)}}function yw(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||xf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ur(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&tw(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tw(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ll(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Gt||e.flags&512&&ug(e)}catch(m){nt(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function vw(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function _w(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xf(4,e)}catch(l){nt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){nt(e,i,l)}}var o=e.return;try{ug(e)}catch(l){nt(e,o,l)}break;case 5:var s=e.return;try{ug(e)}catch(l){nt(e,s,l)}}}catch(l){nt(e,e.return,l)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var hO=Math.ceil,Dd=gi.ReactCurrentDispatcher,Yy=gi.ReactCurrentOwner,Hn=gi.ReactCurrentBatchConfig,Ce=0,It=null,ut=null,Ut=0,In=0,Ws=lo(0),vt=0,Yl=null,Go=0,Nf=0,Qy=0,wl=null,ln=null,Xy=0,ca=1/0,Kr=null,Md=!1,fg=null,qi=null,_c=!1,Di=null,Ld=0,El=0,hg=null,Vc=-1,jc=0;function nn(){return Ce&6?at():Vc!==-1?Vc:Vc=at()}function Hi(t){return t.mode&1?Ce&2&&Ut!==0?Ut&-Ut:Qk.transition!==null?(jc===0&&(jc=KS()),jc):(t=De,t!==0||(t=window.event,t=t===void 0?16:eT(t.type)),t):1}function gr(t,e,n,r){if(50<El)throw El=0,hg=null,Error(B(185));yu(t,n,r),(!(Ce&2)||t!==It)&&(t===It&&(!(Ce&2)&&(Nf|=n),vt===4&&ki(t,Ut)),hn(t,r),n===1&&Ce===0&&!(e.mode&1)&&(ca=at()+500,kf&&uo()))}function hn(t,e){var n=t.callbackNode;QR(t,e);var r=Ed(t,t===It?Ut:0);if(r===0)n!==null&&A_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&A_(n),e===1)t.tag===0?Yk(ww.bind(null,t)):_T(ww.bind(null,t)),qk(function(){!(Ce&6)&&uo()}),n=null;else{switch(GS(r)){case 1:n=Ty;break;case 4:n=qS;break;case 16:n=wd;break;case 536870912:n=HS;break;default:n=wd}n=yb(n,cb.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cb(t,e){if(Vc=-1,jc=0,Ce&6)throw Error(B(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var r=Ed(t,t===It?Ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vd(t,r);else{e=r;var i=Ce;Ce|=2;var o=fb();(It!==t||Ut!==e)&&(Kr=null,ca=at()+500,$o(t,e));do try{gO();break}catch(a){db(t,a)}while(1);Dy(),Dd.current=o,Ce=i,ut!==null?e=0:(It=null,Ut=0,e=vt)}if(e!==0){if(e===2&&(i=jm(t),i!==0&&(r=i,e=pg(t,i))),e===1)throw n=Yl,$o(t,0),ki(t,r),hn(t,at()),n;if(e===6)ki(t,r);else{if(i=t.current.alternate,!(r&30)&&!pO(i)&&(e=Vd(t,r),e===2&&(o=jm(t),o!==0&&(r=o,e=pg(t,o))),e===1))throw n=Yl,$o(t,0),ki(t,r),hn(t,at()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Oo(t,ln,Kr);break;case 3:if(ki(t,r),(r&130023424)===r&&(e=Xy+500-at(),10<e)){if(Ed(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gm(Oo.bind(null,t,ln,Kr),e);break}Oo(t,ln,Kr);break;case 4:if(ki(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-mr(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=at()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hO(r/1960))-r,10<r){t.timeoutHandle=Gm(Oo.bind(null,t,ln,Kr),r);break}Oo(t,ln,Kr);break;case 5:Oo(t,ln,Kr);break;default:throw Error(B(329))}}}return hn(t,at()),t.callbackNode===n?cb.bind(null,t):null}function pg(t,e){var n=wl;return t.current.memoizedState.isDehydrated&&($o(t,e).flags|=256),t=Vd(t,e),t!==2&&(e=ln,ln=n,e!==null&&mg(e)),t}function mg(t){ln===null?ln=t:ln.push.apply(ln,t)}function pO(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!_r(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ki(t,e){for(e&=~Qy,e&=~Nf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mr(e),r=1<<n;t[n]=-1,e&=~r}}function ww(t){if(Ce&6)throw Error(B(327));Qs();var e=Ed(t,0);if(!(e&1))return hn(t,at()),null;var n=Vd(t,e);if(t.tag!==0&&n===2){var r=jm(t);r!==0&&(e=r,n=pg(t,r))}if(n===1)throw n=Yl,$o(t,0),ki(t,e),hn(t,at()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Oo(t,ln,Kr),hn(t,at()),null}function Jy(t,e){var n=Ce;Ce|=1;try{return t(e)}finally{Ce=n,Ce===0&&(ca=at()+500,kf&&uo())}}function Yo(t){Di!==null&&Di.tag===0&&!(Ce&6)&&Qs();var e=Ce;Ce|=1;var n=Hn.transition,r=De;try{if(Hn.transition=null,De=1,t)return t()}finally{De=r,Hn.transition=n,Ce=e,!(Ce&6)&&uo()}}function Zy(){In=Ws.current,qe(Ws)}function $o(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wk(n)),ut!==null)for(n=ut.return;n!==null;){var r=n;switch(xy(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cd();break;case 3:la(),qe(dn),qe(Xt),$y();break;case 5:Fy(r);break;case 4:la();break;case 13:qe(Qe);break;case 19:qe(Qe);break;case 10:My(r.type._context);break;case 22:case 23:Zy()}n=n.return}if(It=t,ut=t=Ki(t.current,null),Ut=In=e,vt=0,Yl=null,Qy=Nf=Go=0,ln=wl=null,Do!==null){for(e=0;e<Do.length;e++)if(n=Do[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Do=null}return t}function db(t,e){do{var n=ut;try{if(Dy(),Dc.current=Ud,Nd){for(var r=Xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nd=!1}if(Ko=0,bt=gt=Xe=null,vl=!1,Hl=0,Yy.current=null,n===null||n.return===null){vt=1,Yl=e,ut=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=aw(s);if(_!==null){_.flags&=-257,lw(_,s,a,o,e),_.mode&1&&sw(o,c,e),e=_,l=c;var E=e.updateQueue;if(E===null){var w=new Set;w.add(l),e.updateQueue=w}else E.add(l);break e}else{if(!(e&1)){sw(o,c,e),ev();break e}l=Error(B(426))}}else if(Ye&&a.mode&1){var d=aw(s);if(d!==null){!(d.flags&65536)&&(d.flags|=256),lw(d,s,a,o,e),Ny(ua(l,a));break e}}o=l=ua(l,a),vt!==4&&(vt=2),wl===null?wl=[o]:wl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var p=GT(o,l,e);ew(o,p);break e;case 1:a=l;var g=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(qi===null||!qi.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var b=YT(o,a,e);ew(o,b);break e}}o=o.return}while(o!==null)}pb(n)}catch(I){e=I,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(1)}function fb(){var t=Dd.current;return Dd.current=Ud,t===null?Ud:t}function ev(){(vt===0||vt===3||vt===2)&&(vt=4),It===null||!(Go&268435455)&&!(Nf&268435455)||ki(It,Ut)}function Vd(t,e){var n=Ce;Ce|=2;var r=fb();(It!==t||Ut!==e)&&(Kr=null,$o(t,e));do try{mO();break}catch(i){db(t,i)}while(1);if(Dy(),Ce=n,Dd.current=r,ut!==null)throw Error(B(261));return It=null,Ut=0,vt}function mO(){for(;ut!==null;)hb(ut)}function gO(){for(;ut!==null&&!FR();)hb(ut)}function hb(t){var e=gb(t.alternate,t,In);t.memoizedProps=t.pendingProps,e===null?pb(t):ut=e,Yy.current=null}function pb(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uO(n,e),n!==null){n.flags&=32767,ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vt=6,ut=null;return}}else if(n=lO(n,e,In),n!==null){ut=n;return}if(e=e.sibling,e!==null){ut=e;return}ut=e=t}while(e!==null);vt===0&&(vt=5)}function Oo(t,e,n){var r=De,i=Hn.transition;try{Hn.transition=null,De=1,yO(t,e,n,r)}finally{Hn.transition=i,De=r}return null}function yO(t,e,n,r){do Qs();while(Di!==null);if(Ce&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(XR(t,o),t===It&&(ut=It=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_c||(_c=!0,yb(wd,function(){return Qs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Hn.transition,Hn.transition=null;var s=De;De=1;var a=Ce;Ce|=4,Yy.current=null,dO(t,n),lb(n,t),Mk(Hm),Sd=!!qm,Hm=qm=null,t.current=n,fO(n),$R(),Ce=a,De=s,Hn.transition=o}else t.current=n;if(_c&&(_c=!1,Di=t,Ld=i),o=t.pendingLanes,o===0&&(qi=null),qR(n.stateNode),hn(t,at()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Md)throw Md=!1,t=fg,fg=null,t;return Ld&1&&t.tag!==0&&Qs(),o=t.pendingLanes,o&1?t===hg?El++:(El=0,hg=t):El=0,uo(),null}function Qs(){if(Di!==null){var t=GS(Ld),e=Hn.transition,n=De;try{if(Hn.transition=null,De=16>t?16:t,Di===null)var r=!1;else{if(t=Di,Di=null,Ld=0,Ce&6)throw Error(B(331));var i=Ce;for(Ce|=4,Q=t.current;Q!==null;){var o=Q,s=o.child;if(Q.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Q=c;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:_l(8,f,o)}var h=f.child;if(h!==null)h.return=f,Q=h;else for(;Q!==null;){f=Q;var m=f.sibling,_=f.return;if(ob(f),f===c){Q=null;break}if(m!==null){m.return=_,Q=m;break}Q=_}}}var E=o.alternate;if(E!==null){var w=E.child;if(w!==null){E.child=null;do{var d=w.sibling;w.sibling=null,w=d}while(w!==null)}}Q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Q=s;else e:for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_l(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,Q=p;break e}Q=o.return}}var g=t.current;for(Q=g;Q!==null;){s=Q;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,Q=v;else e:for(s=g;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xf(9,a)}}catch(I){nt(a,a.return,I)}if(a===s){Q=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,Q=b;break e}Q=a.return}}if(Ce=i,uo(),kr&&typeof kr.onPostCommitFiberRoot=="function")try{kr.onPostCommitFiberRoot(If,t)}catch{}r=!0}return r}finally{De=n,Hn.transition=e}}return!1}function Ew(t,e,n){e=ua(n,e),e=GT(t,e,1),t=Wi(t,e,1),e=nn(),t!==null&&(yu(t,1,e),hn(t,e))}function nt(t,e,n){if(t.tag===3)Ew(t,t,n);else for(;e!==null;){if(e.tag===3){Ew(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qi===null||!qi.has(r))){t=ua(n,t),t=YT(e,t,1),e=Wi(e,t,1),t=nn(),e!==null&&(yu(e,1,t),hn(e,t));break}}e=e.return}}function vO(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Ut&n)===n&&(vt===4||vt===3&&(Ut&130023424)===Ut&&500>at()-Xy?$o(t,0):Qy|=n),hn(t,e)}function mb(t,e){e===0&&(t.mode&1?(e=uc,uc<<=1,!(uc&130023424)&&(uc=4194304)):e=1);var n=nn();t=ai(t,e),t!==null&&(yu(t,e,n),hn(t,n))}function _O(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mb(t,n)}function wO(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),mb(t,n)}var gb;gb=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,aO(t,e,n);un=!!(t.flags&131072)}else un=!1,Ye&&e.flags&1048576&&wT(e,Rd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Lc(t,e),t=e.pendingProps;var i=oa(e,Xt.current);Ys(e,n),i=Wy(null,e,r,t,i,n);var o=qy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(r)?(o=!0,Pd(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vy(e),i.updater=zf,e.stateNode=i,i._reactInternals=e,tg(e,r,t,n),e=ig(null,e,r,!0,o,n)):(e.tag=0,Ye&&o&&zy(e),tn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Lc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SO(r),t=ur(r,t),i){case 0:e=rg(null,e,r,t,n);break e;case 1:e=dw(null,e,r,t,n);break e;case 11:e=uw(null,e,r,t,n);break e;case 14:e=cw(null,e,r,ur(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ur(r,i),rg(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ur(r,i),dw(t,e,r,i,n);case 3:e:{if(ZT(e),t===null)throw Error(B(387));r=e.pendingProps,o=e.memoizedState,i=o.element,CT(t,e),zd(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ua(Error(B(423)),e),e=fw(t,e,r,n,i);break e}else if(r!==i){i=ua(Error(B(424)),e),e=fw(t,e,r,n,i);break e}else for(Cn=Bi(e.stateNode.containerInfo.firstChild),Pn=e,Ye=!0,dr=null,n=bT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sa(),r===i){e=li(t,e,n);break e}tn(t,e,r,n)}e=e.child}return e;case 5:return PT(e),t===null&&Jm(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Km(r,i)?s=null:o!==null&&Km(r,o)&&(e.flags|=32),JT(t,e),tn(t,e,s,n),e.child;case 6:return t===null&&Jm(e),null;case 13:return eb(t,e,n);case 4:return jy(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=aa(e,null,r,n):tn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ur(r,i),uw(t,e,r,i,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Be(kd,r._currentValue),r._currentValue=s,o!==null)if(_r(o.value,s)){if(o.children===i.children&&!dn.current){e=li(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=ni(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Zm(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(B(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Zm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}tn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ys(e,n),i=Yn(i),r=r(i),e.flags|=1,tn(t,e,r,n),e.child;case 14:return r=e.type,i=ur(r,e.pendingProps),i=ur(r.type,i),cw(t,e,r,i,n);case 15:return QT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ur(r,i),Lc(t,e),e.tag=1,fn(r)?(t=!0,Pd(e)):t=!1,Ys(e,n),KT(e,r,i),tg(e,r,i,n),ig(null,e,r,!0,t,n);case 19:return tb(t,e,n);case 22:return XT(t,e,n)}throw Error(B(156,e.tag))};function yb(t,e){return WS(t,e)}function EO(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,r){return new EO(t,e,n,r)}function tv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SO(t){if(typeof t=="function")return tv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wy)return 11;if(t===Ey)return 14}return 2}function Ki(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")tv(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ns:return Bo(n.children,i,o,e);case _y:s=8,i|=8;break;case Im:return t=qn(12,n,e,i|2),t.elementType=Im,t.lanes=o,t;case Cm:return t=qn(13,n,e,i),t.elementType=Cm,t.lanes=o,t;case Pm:return t=qn(19,n,e,i),t.elementType=Pm,t.lanes=o,t;case PS:return Uf(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case IS:s=10;break e;case CS:s=9;break e;case wy:s=11;break e;case Ey:s=14;break e;case Pi:s=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=qn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Bo(t,e,n,r){return t=qn(7,t,r,e),t.lanes=n,t}function Uf(t,e,n,r){return t=qn(22,t,r,e),t.elementType=PS,t.lanes=n,t.stateNode={isHidden:!1},t}function Sp(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function Tp(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TO(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rp(0),this.expirationTimes=rp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nv(t,e,n,r,i,o,s,a,l){return t=new TO(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=qn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vy(o),t}function bO(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function vb(t){if(!t)return no;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(fn(n))return vT(t,n,e)}return e}function _b(t,e,n,r,i,o,s,a,l){return t=nv(n,r,!0,t,i,o,s,a,l),t.context=vb(null),n=t.current,r=nn(),i=Hi(n),o=ni(r,i),o.callback=e??null,Wi(n,o,i),t.current.lanes=i,yu(t,i,r),hn(t,r),t}function Df(t,e,n,r){var i=e.current,o=nn(),s=Hi(i);return n=vb(n),e.context===null?e.context=n:e.pendingContext=n,e=ni(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wi(i,e,s),t!==null&&(gr(t,i,s,o),Uc(t,i,s)),s}function jd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rv(t,e){Sw(t,e),(t=t.alternate)&&Sw(t,e)}function IO(){return null}var wb=typeof reportError=="function"?reportError:function(t){console.error(t)};function iv(t){this._internalRoot=t}Mf.prototype.render=iv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Df(t,e,null,null)};Mf.prototype.unmount=iv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yo(function(){Df(null,t,null,null)}),e[si]=null}};function Mf(t){this._internalRoot=t}Mf.prototype.unstable_scheduleHydration=function(t){if(t){var e=XS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ri.length&&e!==0&&e<Ri[n].priority;n++);Ri.splice(n,0,t),n===0&&ZS(t)}};function ov(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tw(){}function CO(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=jd(s);o.call(c)}}var s=_b(e,r,t,0,null,!1,!1,"",Tw);return t._reactRootContainer=s,t[si]=s.current,Fl(t.nodeType===8?t.parentNode:t),Yo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=jd(l);a.call(c)}}var l=nv(t,0,!1,null,null,!1,!1,"",Tw);return t._reactRootContainer=l,t[si]=l.current,Fl(t.nodeType===8?t.parentNode:t),Yo(function(){Df(e,l,n,r)}),l}function Vf(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=jd(s);a.call(l)}}Df(e,s,t,i)}else s=CO(n,e,t,i,r);return jd(s)}YS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=rl(e.pendingLanes);n!==0&&(by(e,n|1),hn(e,at()),!(Ce&6)&&(ca=at()+500,uo()))}break;case 13:Yo(function(){var r=ai(t,1);if(r!==null){var i=nn();gr(r,t,1,i)}}),rv(t,1)}};Iy=function(t){if(t.tag===13){var e=ai(t,134217728);if(e!==null){var n=nn();gr(e,t,134217728,n)}rv(t,134217728)}};QS=function(t){if(t.tag===13){var e=Hi(t),n=ai(t,e);if(n!==null){var r=nn();gr(n,t,e,r)}rv(t,e)}};XS=function(){return De};JS=function(t,e){var n=De;try{return De=t,e()}finally{De=n}};Mm=function(t,e,n){switch(e){case"input":if(km(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Rf(r);if(!i)throw Error(B(90));RS(r),km(r,i)}}}break;case"textarea":OS(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};LS=Jy;VS=Yo;var PO={usingClientEntryPoint:!1,Events:[_u,Ls,Rf,DS,MS,Jy]},Ja={findFiberByHostInstance:Uo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AO={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$S(t),t===null?null:t.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||IO,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{If=wc.inject(AO),kr=wc}catch{}}zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PO;zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ov(e))throw Error(B(200));return bO(t,e,null,n)};zn.createRoot=function(t,e){if(!ov(t))throw Error(B(299));var n=!1,r="",i=wb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=nv(t,1,!1,null,null,n,!1,r,i),t[si]=e.current,Fl(t.nodeType===8?t.parentNode:t),new iv(e)};zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=$S(e),t=t===null?null:t.stateNode,t};zn.flushSync=function(t){return Yo(t)};zn.hydrate=function(t,e,n){if(!Lf(e))throw Error(B(200));return Vf(null,t,e,!0,n)};zn.hydrateRoot=function(t,e,n){if(!ov(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=wb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=_b(e,null,t,1,n??null,i,!1,o,s),t[si]=e.current,Fl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Mf(e)};zn.render=function(t,e,n){if(!Lf(e))throw Error(B(200));return Vf(null,t,e,!1,n)};zn.unmountComponentAtNode=function(t){if(!Lf(t))throw Error(B(40));return t._reactRootContainer?(Yo(function(){Vf(null,null,t,!1,function(){t._reactRootContainer=null,t[si]=null})}),!0):!1};zn.unstable_batchedUpdates=Jy;zn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Lf(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Vf(t,e,n,!1,r)};zn.version="18.3.1-next-f1338f8080-20240426";function Eb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Eb)}catch(t){console.error(t)}}Eb(),ES.exports=zn;var Sb=ES.exports,bw=Sb;Tm.createRoot=bw.createRoot,Tm.hydrateRoot=bw.hydrateRoot;const RO="modulepreload",kO=function(t){return"/"+t},Iw={},it=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=kO(o),o in Iw)return;Iw[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const h=i[f];if(h.href===o&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":RO,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ql(){return Ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ql.apply(this,arguments)}var Mi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Mi||(Mi={}));const Cw="popstate";function OO(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return gg("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Fd(i)}return xO(e,n,null,t)}function ct(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Tb(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function zO(){return Math.random().toString(36).substr(2,8)}function Pw(t,e){return{usr:t.state,key:t.key,idx:e}}function gg(t,e,n,r){return n===void 0&&(n=null),Ql({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ia(e):e,{state:n,key:e&&e.key||r||zO()})}function Fd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ia(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function xO(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Mi.Pop,l=null,c=f();c==null&&(c=0,s.replaceState(Ql({},s.state,{idx:c}),""));function f(){return(s.state||{idx:null}).idx}function h(){a=Mi.Pop;let d=f(),p=d==null?null:d-c;c=d,l&&l({action:a,location:w.location,delta:p})}function m(d,p){a=Mi.Push;let g=gg(w.location,d,p);n&&n(g,d),c=f()+1;let v=Pw(g,c),b=w.createHref(g);try{s.pushState(v,"",b)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(b)}o&&l&&l({action:a,location:w.location,delta:1})}function _(d,p){a=Mi.Replace;let g=gg(w.location,d,p);n&&n(g,d),c=f();let v=Pw(g,c),b=w.createHref(g);s.replaceState(v,"",b),o&&l&&l({action:a,location:w.location,delta:0})}function E(d){let p=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof d=="string"?d:Fd(d);return g=g.replace(/ $/,"%20"),ct(p,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,p)}let w={get action(){return a},get location(){return t(i,s)},listen(d){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Cw,h),l=d,()=>{i.removeEventListener(Cw,h),l=null}},createHref(d){return e(i,d)},createURL:E,encodeLocation(d){let p=E(d);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:_,go(d){return s.go(d)}};return w}var Aw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Aw||(Aw={}));function NO(t,e,n){return n===void 0&&(n="/"),UO(t,e,n,!1)}function UO(t,e,n,r){let i=typeof e=="string"?Ia(e):e,o=sv(i.pathname||"/",n);if(o==null)return null;let s=bb(t);DO(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=KO(o);a=qO(s[l],c,r)}return a}function bb(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ct(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Gi([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(ct(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),bb(o.children,e,f,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:BO(c,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Ib(o.path))i(o,s,l)}),e}function Ib(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Ib(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function DO(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WO(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const MO=/^:[\w-]+$/,LO=3,VO=2,jO=1,FO=10,$O=-2,Rw=t=>t==="*";function BO(t,e){let n=t.split("/"),r=n.length;return n.some(Rw)&&(r+=$O),e&&(r+=VO),n.filter(i=>!Rw(i)).reduce((i,o)=>i+(MO.test(o)?LO:o===""?jO:FO),r)}function WO(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function qO(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",h=kw({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),m=l.route;if(!h&&c&&n&&!r[r.length-1].route.index&&(h=kw({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:Gi([o,h.pathname]),pathnameBase:XO(Gi([o,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(o=Gi([o,h.pathnameBase]))}return s}function kw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=HO(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,f,h)=>{let{paramName:m,isOptional:_}=f;if(m==="*"){let w=a[h]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const E=a[h];return _&&!E?c[m]=void 0:c[m]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function HO(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Tb(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function KO(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Tb(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function sv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function GO(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ia(t):t;return{pathname:n?n.startsWith("/")?n:YO(n,e):e,search:JO(r),hash:ZO(i)}}function YO(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function QO(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Cb(t,e){let n=QO(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Pb(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ia(t):(i=Ql({},t),ct(!i.pathname||!i.pathname.includes("?"),bp("?","pathname","search",i)),ct(!i.pathname||!i.pathname.includes("#"),bp("#","pathname","hash",i)),ct(!i.search||!i.search.includes("#"),bp("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let h=e.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?e[h]:"/"}let l=GO(i,a),c=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const Gi=t=>t.join("/").replace(/\/\/+/g,"/"),XO=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JO=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZO=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ez(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ab=["post","put","patch","delete"];new Set(Ab);const tz=["get",...Ab];new Set(tz);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xl.apply(this,arguments)}const av=U.createContext(null),nz=U.createContext(null),us=U.createContext(null),jf=U.createContext(null),cs=U.createContext({outlet:null,matches:[],isDataRoute:!1}),Rb=U.createContext(null);function rz(t,e){let{relative:n}=e===void 0?{}:e;Eu()||ct(!1);let{basename:r,navigator:i}=U.useContext(us),{hash:o,pathname:s,search:a}=zb(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Gi([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Eu(){return U.useContext(jf)!=null}function Ca(){return Eu()||ct(!1),U.useContext(jf).location}function kb(t){U.useContext(us).static||U.useLayoutEffect(t)}function Ob(){let{isDataRoute:t}=U.useContext(cs);return t?gz():iz()}function iz(){Eu()||ct(!1);let t=U.useContext(av),{basename:e,future:n,navigator:r}=U.useContext(us),{matches:i}=U.useContext(cs),{pathname:o}=Ca(),s=JSON.stringify(Cb(i,n.v7_relativeSplatPath)),a=U.useRef(!1);return kb(()=>{a.current=!0}),U.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=Pb(c,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Gi([e,h.pathname])),(f.replace?r.replace:r.push)(h,f.state,f)},[e,r,s,o,t])}function zb(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(us),{matches:i}=U.useContext(cs),{pathname:o}=Ca(),s=JSON.stringify(Cb(i,r.v7_relativeSplatPath));return U.useMemo(()=>Pb(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function oz(t,e){return sz(t,e)}function sz(t,e,n,r){Eu()||ct(!1);let{navigator:i}=U.useContext(us),{matches:o}=U.useContext(cs),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Ca(),f;if(e){var h;let d=typeof e=="string"?Ia(e):e;l==="/"||(h=d.pathname)!=null&&h.startsWith(l)||ct(!1),f=d}else f=c;let m=f.pathname||"/",_=m;if(l!=="/"){let d=l.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(d.length).join("/")}let E=NO(t,{pathname:_}),w=dz(E&&E.map(d=>Object.assign({},d,{params:Object.assign({},a,d.params),pathname:Gi([l,i.encodeLocation?i.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?l:Gi([l,i.encodeLocation?i.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),o,n,r);return e&&w?U.createElement(jf.Provider,{value:{location:Xl({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Mi.Pop}},w):w}function az(){let t=mz(),e=ez(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,o)}const lz=U.createElement(az,null);class uz extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(cs.Provider,{value:this.props.routeContext},U.createElement(Rb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cz(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(av);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(cs.Provider,{value:e},r)}function dz(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);f>=0||ct(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let h=s[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:m,errors:_}=n,E=h.route.loader&&m[h.route.id]===void 0&&(!_||_[h.route.id]===void 0);if(h.route.lazy||E){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((f,h,m)=>{let _,E=!1,w=null,d=null;n&&(_=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||lz,l&&(c<0&&m===0?(yz("route-fallback",!1),E=!0,d=null):c===m&&(E=!0,d=h.route.hydrateFallbackElement||null)));let p=e.concat(s.slice(0,m+1)),g=()=>{let v;return _?v=w:E?v=d:h.route.Component?v=U.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=f,U.createElement(cz,{match:h,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?U.createElement(uz,{location:n.location,revalidation:n.revalidation,component:w,error:_,children:g(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):g()},null)}var xb=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(xb||{}),$d=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($d||{});function fz(t){let e=U.useContext(av);return e||ct(!1),e}function hz(t){let e=U.useContext(nz);return e||ct(!1),e}function pz(t){let e=U.useContext(cs);return e||ct(!1),e}function Nb(t){let e=pz(),n=e.matches[e.matches.length-1];return n.route.id||ct(!1),n.route.id}function mz(){var t;let e=U.useContext(Rb),n=hz($d.UseRouteError),r=Nb($d.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function gz(){let{router:t}=fz(xb.UseNavigateStable),e=Nb($d.UseNavigateStable),n=U.useRef(!1);return kb(()=>{n.current=!0}),U.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Xl({fromRouteId:e},o)))},[t,e])}const Ow={};function yz(t,e,n){!e&&!Ow[t]&&(Ow[t]=!0)}const zw={};function vz(t,e){zw[e]||(zw[e]=!0,console.warn(e))}const Rs=(t,e,n)=>vz(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function _z(t,e){t!=null&&t.v7_startTransition||Rs("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&(!e||!e.v7_relativeSplatPath)&&Rs("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),e&&(e.v7_fetcherPersist||Rs("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),e.v7_normalizeFormMethod||Rs("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),e.v7_partialHydration||Rs("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),e.v7_skipActionErrorRevalidation||Rs("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function ot(t){ct(!1)}function wz(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Mi.Pop,navigator:o,static:s=!1,future:a}=t;Eu()&&ct(!1);let l=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:l,navigator:o,static:s,future:Xl({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Ia(r));let{pathname:f="/",search:h="",hash:m="",state:_=null,key:E="default"}=r,w=U.useMemo(()=>{let d=sv(f,l);return d==null?null:{location:{pathname:d,search:h,hash:m,state:_,key:E},navigationType:i}},[l,f,h,m,_,E,i]);return w==null?null:U.createElement(us.Provider,{value:c},U.createElement(jf.Provider,{children:n,value:w}))}function Ez(t){let{children:e,location:n}=t;return oz(yg(e),n)}new Promise(()=>{});function yg(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let o=[...e,i];if(r.type===U.Fragment){n.push.apply(n,yg(r.props.children,o));return}r.type!==ot&&ct(!1),!r.props.index||!r.props.children||ct(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=yg(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vg(){return vg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vg.apply(this,arguments)}function Sz(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Tz(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bz(t,e){return t.button===0&&(!e||e==="_self")&&!Tz(t)}const Iz=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Cz="6";try{window.__reactRouterVersion=Cz}catch{}const Pz="startTransition",xw=vR[Pz];function Az(t){let{basename:e,children:n,future:r,window:i}=t,o=U.useRef();o.current==null&&(o.current=OO({window:i,v5Compat:!0}));let s=o.current,[a,l]=U.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},f=U.useCallback(h=>{c&&xw?xw(()=>l(h)):l(h)},[l,c]);return U.useLayoutEffect(()=>s.listen(f),[s,f]),U.useEffect(()=>_z(r),[r]),U.createElement(wz,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Rz=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kz=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,z6=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:f,viewTransition:h}=e,m=Sz(e,Iz),{basename:_}=U.useContext(us),E,w=!1;if(typeof c=="string"&&kz.test(c)&&(E=c,Rz))try{let v=new URL(window.location.href),b=c.startsWith("//")?new URL(v.protocol+c):new URL(c),I=sv(b.pathname,_);b.origin===v.origin&&I!=null?c=I+b.search+b.hash:w=!0}catch{}let d=rz(c,{relative:i}),p=Oz(c,{replace:s,state:a,target:l,preventScrollReset:f,relative:i,viewTransition:h});function g(v){r&&r(v),v.defaultPrevented||p(v)}return U.createElement("a",vg({},m,{href:E||d,onClick:w||o?r:g,ref:n,target:l}))});var Nw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Nw||(Nw={}));var Uw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Uw||(Uw={}));function Oz(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,l=Ob(),c=Ca(),f=zb(t,{relative:s});return U.useCallback(h=>{if(bz(h,n)){h.preventDefault();let m=r!==void 0?r:Fd(c)===Fd(f);l(t,{replace:m,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[c,l,f,r,i,n,t,o,s,a])}var Ub={},Ip={exports:{}},Cp,Dw;function zz(){if(Dw)return Cp;Dw=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Cp=t,Cp}var Pp,Mw;function xz(){if(Mw)return Pp;Mw=1;var t=zz();function e(){}function n(){}return n.resetWarningCache=e,Pp=function(){function r(s,a,l,c,f,h){if(h!==t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function i(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},Pp}var Lw;function Db(){return Lw||(Lw=1,Ip.exports=xz()()),Ip.exports}var Mb={exports:{}};(function(t,e){(function(n){t.exports=n(null)})(function n(r){var i=/^\0+/g,o=/[\0\r\f]/g,s=/: */g,a=/zoo|gra/,l=/([,: ])(transform)/g,c=/,+\s*(?![^(]*[)])/g,f=/ +\s*(?![^(]*[)])/g,h=/ *[\0] */g,m=/,\r+?/g,_=/([\t\r\n ])*\f?&/g,E=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,w=/\W+/g,d=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,g=/:(read-only)/g,v=/\s+(?=[{\];=:>])/g,b=/([[}=:>])\s+/g,I=/(\{[^{]+?);(?=\})/g,x=/\s{2,}/g,C=/([^\(])(:+) */g,T=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,O=/-self|flex-/g,z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,k=/stretch|:\s*\w+\-(?:conte|avail)/,q=/([^-])(image-set\()/,j="-webkit-",G="-moz-",Y="-ms-",V=59,W=125,X=123,le=40,ye=41,Oe=91,er=93,wt=10,Vt=13,ft=9,po=64,yn=32,yi=38,jt=45,Da=95,vn=42,Dn=44,_n=58,mo=39,go=34,wn=47,yo=62,vo=43,vi=126,_o=0,Mu=12,Ma=11,_i=107,wo=109,ht=115,Et=112,Eo=111,Lu=105,Vu=99,ju=100,So=112,En=1,tr=1,Mn=0,Ln=1,Sn=1,To=1,La=0,Va=0,Fr=0,bo=[],Io=[],At=0,ms=null,gs=-2,Fu=-1,Co=0,$u=1,Rt=2,Bu=3,wi=0,nr=1,ys="",Tr="",Vn="";function ja(oe,te,Z,fe,K){for(var Ie,M,ge=0,de=0,He=0,ve=0,et=0,Ue=0,_e=0,pt=0,St=0,Br=0,kt=0,rr=0,Es=0,Tn=0,Se=0,sn=0,an=0,en=0,Re=0,jn=Z.length,Si=jn-1,he="",se="",ke="",Fe="",Ss="",Ts="";Se<jn;){if(_e=Z.charCodeAt(Se),Se===Si&&de+ve+He+ge!==0&&(de!==0&&(_e=de===wn?wt:wn),ve=He=ge=0,jn++,Si++),de+ve+He+ge===0){if(Se===Si&&(sn>0&&(se=se.replace(o,"")),se.trim().length>0)){switch(_e){case yn:case ft:case V:case Vt:case wt:break;default:se+=Z.charAt(Se)}_e=V}if(an===1)switch(_e){case X:case W:case V:case go:case mo:case le:case ye:case Dn:an=0;case ft:case Vt:case wt:case yn:break;default:for(an=0,Re=Se,et=_e,Se--,_e=V;Re<jn;)switch(Z.charCodeAt(Re++)){case wt:case Vt:case V:++Se,_e=et,Re=jn;break;case _n:sn>0&&(++Se,_e=et);case X:Re=jn}}switch(_e){case X:for(et=(se=se.trim()).charCodeAt(0),kt=1,Re=++Se;Se<jn;){switch(_e=Z.charCodeAt(Se)){case X:kt++;break;case W:kt--;break;case wn:switch(Ue=Z.charCodeAt(Se+1)){case vn:case wn:Se=qu(Ue,Se,Si,Z)}break;case Oe:_e++;case le:_e++;case go:case mo:for(;Se++<Si&&Z.charCodeAt(Se)!==_e;);}if(kt===0)break;Se++}switch(ke=Z.substring(Re,Se),et===_o&&(et=(se=se.replace(i,"").trim()).charCodeAt(0)),et){case po:switch(sn>0&&(se=se.replace(o,"")),Ue=se.charCodeAt(1)){case ju:case wo:case ht:case jt:Ie=te;break;default:Ie=bo}if(Re=(ke=ja(te,Ie,ke,Ue,K+1)).length,Fr>0&&Re===0&&(Re=se.length),At>0&&(Ie=Wu(bo,se,en),M=Zt(Bu,ke,Ie,te,tr,En,Re,Ue,K,fe),se=Ie.join(""),M!==void 0&&(Re=(ke=M.trim()).length)===0&&(Ue=0,ke="")),Re>0)switch(Ue){case ht:se=se.replace(P,_s);case ju:case wo:case jt:ke=se+"{"+ke+"}";break;case _i:ke=(se=se.replace(d,"$1 $2"+(nr>0?ys:"")))+"{"+ke+"}",Sn===1||Sn===2&&Ei("@"+ke,3)?ke="@"+j+ke+"@"+ke:ke="@"+ke;break;default:ke=se+ke,fe===So&&(Fe+=ke,ke="")}else ke="";break;default:ke=ja(te,Wu(te,se,en),ke,fe,K+1)}Ss+=ke,rr=0,an=0,Tn=0,sn=0,en=0,Es=0,se="",ke="",_e=Z.charCodeAt(++Se);break;case W:case V:if((Re=(se=(sn>0?se.replace(o,""):se).trim()).length)>1)switch(Tn===0&&((et=se.charCodeAt(0))===jt||et>96&&et<123)&&(Re=(se=se.replace(" ",":")).length),At>0&&(M=Zt($u,se,te,oe,tr,En,Fe.length,fe,K,fe))!==void 0&&(Re=(se=M.trim()).length)===0&&(se="\0\0"),et=se.charCodeAt(0),Ue=se.charCodeAt(1),et){case _o:break;case po:if(Ue===Lu||Ue===Vu){Ts+=se+Z.charAt(Se);break}default:if(se.charCodeAt(Re-1)===_n)break;Fe+=vs(se,et,Ue,se.charCodeAt(2))}rr=0,an=0,Tn=0,sn=0,en=0,se="",_e=Z.charCodeAt(++Se)}}switch(_e){case Vt:case wt:if(de+ve+He+ge+Va===0)switch(Br){case ye:case mo:case go:case po:case vi:case yo:case vn:case vo:case wn:case jt:case _n:case Dn:case V:case X:case W:break;default:Tn>0&&(an=1)}de===wn?de=0:Ln+rr===0&&fe!==_i&&se.length>0&&(sn=1,se+="\0"),At*wi>0&&Zt(Co,se,te,oe,tr,En,Fe.length,fe,K,fe),En=1,tr++;break;case V:case W:if(de+ve+He+ge===0){En++;break}default:switch(En++,he=Z.charAt(Se),_e){case ft:case yn:if(ve+ge+de===0)switch(pt){case Dn:case _n:case ft:case yn:he="";break;default:_e!==yn&&(he=" ")}break;case _o:he="\\0";break;case Mu:he="\\f";break;case Ma:he="\\v";break;case yi:ve+de+ge===0&&Ln>0&&(en=1,sn=1,he="\f"+he);break;case 108:if(ve+de+ge+Mn===0&&Tn>0)switch(Se-Tn){case 2:pt===Et&&Z.charCodeAt(Se-3)===_n&&(Mn=pt);case 8:St===Eo&&(Mn=St)}break;case _n:ve+de+ge===0&&(Tn=Se);break;case Dn:de+He+ve+ge===0&&(sn=1,he+="\r");break;case go:case mo:de===0&&(ve=ve===_e?0:ve===0?_e:ve);break;case Oe:ve+de+He===0&&ge++;break;case er:ve+de+He===0&&ge--;break;case ye:ve+de+ge===0&&He--;break;case le:if(ve+de+ge===0){if(rr===0)switch(2*pt+3*St){case 533:break;default:kt=0,rr=1}He++}break;case po:de+He+ve+ge+Tn+Es===0&&(Es=1);break;case vn:case wn:if(ve+ge+He>0)break;switch(de){case 0:switch(2*_e+3*Z.charCodeAt(Se+1)){case 235:de=wn;break;case 220:Re=Se,de=vn}break;case vn:_e===wn&&pt===vn&&Re+2!==Se&&(Z.charCodeAt(Re+2)===33&&(Fe+=Z.substring(Re,Se+1)),he="",de=0)}}if(de===0){if(Ln+ve+ge+Es===0&&fe!==_i&&_e!==V)switch(_e){case Dn:case vi:case yo:case vo:case ye:case le:if(rr===0){switch(pt){case ft:case yn:case wt:case Vt:he+="\0";break;default:he="\0"+he+(_e===Dn?"":"\0")}sn=1}else switch(_e){case le:Tn+7===Se&&pt===108&&(Tn=0),rr=++kt;break;case ye:(rr=--kt)==0&&(sn=1,he+="\0")}break;case ft:case yn:switch(pt){case _o:case X:case W:case V:case Dn:case Mu:case ft:case yn:case wt:case Vt:break;default:rr===0&&(sn=1,he+="\0")}}se+=he,_e!==yn&&_e!==ft&&(Br=_e)}}St=pt,pt=_e,Se++}if(Re=Fe.length,Fr>0&&Re===0&&Ss.length===0&&te[0].length!==0&&(fe!==wo||te.length===1&&(Ln>0?Tr:Vn)===te[0])&&(Re=te.join(",").length+2),Re>0){if(Ie=Ln===0&&fe!==_i?function(Hu){for(var ir,mt,bs=0,Ti=Hu.length,or=Array(Ti);bs<Ti;++bs){for(var Is=Hu[bs].split(h),Ao="",Wr=0,br=0,Ku=0,Gu=0,Yu=Is.length;Wr<Yu;++Wr)if(!((br=(mt=Is[Wr]).length)===0&&Yu>1)){if(Ku=Ao.charCodeAt(Ao.length-1),Gu=mt.charCodeAt(0),ir="",Wr!==0)switch(Ku){case vn:case vi:case yo:case vo:case yn:case le:break;default:ir=" "}switch(Gu){case yi:mt=ir+Tr;case vi:case yo:case vo:case yn:case ye:case le:break;case Oe:mt=ir+mt+Tr;break;case _n:switch(2*mt.charCodeAt(1)+3*mt.charCodeAt(2)){case 530:if(To>0){mt=ir+mt.substring(8,br-1);break}default:(Wr<1||Is[Wr-1].length<1)&&(mt=ir+Tr+mt)}break;case Dn:ir="";default:br>1&&mt.indexOf(":")>0?mt=ir+mt.replace(C,"$1"+Tr+"$2"):mt=ir+mt+Tr}Ao+=mt}or[bs]=Ao.replace(o,"").trim()}return or}(te):te,At>0&&(M=Zt(Rt,Fe,Ie,oe,tr,En,Re,fe,K,fe))!==void 0&&(Fe=M).length===0)return Ts+Fe+Ss;if(Fe=Ie.join(",")+"{"+Fe+"}",Sn*Mn!=0){switch(Sn===2&&!Ei(Fe,2)&&(Mn=0),Mn){case Eo:Fe=Fe.replace(g,":"+G+"$1")+Fe;break;case Et:Fe=Fe.replace(p,"::"+j+"input-$1")+Fe.replace(p,"::"+G+"$1")+Fe.replace(p,":"+Y+"input-$1")+Fe}Mn=0}}return Ts+Fe+Ss}function Wu(oe,te,Z){var fe=te.trim().split(m),K=fe,Ie=fe.length,M=oe.length;switch(M){case 0:case 1:for(var ge=0,de=M===0?"":oe[0]+" ";ge<Ie;++ge)K[ge]=Po(de,K[ge],Z,M).trim();break;default:ge=0;var He=0;for(K=[];ge<Ie;++ge)for(var ve=0;ve<M;++ve)K[He++]=Po(oe[ve]+" ",fe[ge],Z,M).trim()}return K}function Po(oe,te,Z,fe){var K=te,Ie=K.charCodeAt(0);switch(Ie<33&&(Ie=(K=K.trim()).charCodeAt(0)),Ie){case yi:switch(Ln+fe){case 0:case 1:if(oe.trim().length===0)break;default:return K.replace(_,"$1"+oe.trim())}break;case _n:switch(K.charCodeAt(1)){case 103:if(To>0&&Ln>0)return K.replace(E,"$1").replace(_,"$1"+Vn);break;default:return oe.trim()+K.replace(_,"$1"+oe.trim())}default:if(Z*Ln>0&&K.indexOf("\f")>0)return K.replace(_,(oe.charCodeAt(0)===_n?"":"$1")+oe.trim())}return oe+K}function vs(oe,te,Z,fe){var K,Ie=0,M=oe+";",ge=2*te+3*Z+4*fe;if(ge===944)return function(de){var He=de.length,ve=de.indexOf(":",9)+1,et=de.substring(0,ve).trim(),Ue=de.substring(ve,He-1).trim();switch(de.charCodeAt(9)*nr){case 0:break;case jt:if(de.charCodeAt(10)!==110)break;default:for(var _e=Ue.split((Ue="",c)),pt=0,ve=0,He=_e.length;pt<He;ve=0,++pt){for(var St=_e[pt],Br=St.split(f);St=Br[ve];){var kt=St.charCodeAt(0);if(nr===1&&(kt>po&&kt<90||kt>96&&kt<123||kt===Da||kt===jt&&St.charCodeAt(1)!==jt))switch(isNaN(parseFloat(St))+(St.indexOf("(")!==-1)){case 1:switch(St){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:St+=ys}}Br[ve++]=St}Ue+=(pt===0?"":",")+Br.join(" ")}}return Ue=et+Ue+";",Sn===1||Sn===2&&Ei(Ue,1)?j+Ue+Ue:Ue}(M);if(Sn===0||Sn===2&&!Ei(M,1))return M;switch(ge){case 1015:return M.charCodeAt(10)===97?j+M+M:M;case 951:return M.charCodeAt(3)===116?j+M+M:M;case 963:return M.charCodeAt(5)===110?j+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return j+M+M;case 978:return j+M+G+M+M;case 1019:case 983:return j+M+G+M+Y+M+M;case 883:return M.charCodeAt(8)===jt?j+M+M:M.indexOf("image-set(",11)>0?M.replace(q,"$1"+j+"$2")+M:M;case 932:if(M.charCodeAt(4)===jt)switch(M.charCodeAt(5)){case 103:return j+"box-"+M.replace("-grow","")+j+M+Y+M.replace("grow","positive")+M;case 115:return j+M+Y+M.replace("shrink","negative")+M;case 98:return j+M+Y+M.replace("basis","preferred-size")+M}return j+M+Y+M+M;case 964:return j+M+Y+"flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return K=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),j+"box-pack"+K+j+M+Y+"flex-pack"+K+M;case 1005:return a.test(M)?M.replace(s,":"+j)+M.replace(s,":"+G)+M:M;case 1e3:switch(Ie=(K=M.substring(13).trim()).indexOf("-")+1,K.charCodeAt(0)+K.charCodeAt(Ie)){case 226:K=M.replace(T,"tb");break;case 232:K=M.replace(T,"tb-rl");break;case 220:K=M.replace(T,"lr");break;default:return M}return j+M+Y+K+M;case 1017:if(M.indexOf("sticky",9)===-1)return M;case 975:switch(Ie=(M=oe).length-10,ge=(K=(M.charCodeAt(Ie)===33?M.substring(0,Ie):M).substring(oe.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|K.charCodeAt(7))){case 203:if(K.charCodeAt(8)<111)break;case 115:M=M.replace(K,j+K)+";"+M;break;case 207:case 102:M=M.replace(K,j+(ge>102?"inline-":"")+"box")+";"+M.replace(K,j+K)+";"+M.replace(K,Y+K+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===jt)switch(M.charCodeAt(6)){case 105:return K=M.replace("-items",""),j+M+j+"box-"+K+Y+"flex-"+K+M;case 115:return j+M+Y+"flex-item-"+M.replace(O,"")+M;default:return j+M+Y+"flex-line-pack"+M.replace("align-content","").replace(O,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==jt||M.charCodeAt(4)===122)break;case 931:case 953:if(k.test(oe)===!0)return(K=oe.substring(oe.indexOf(":")+1)).charCodeAt(0)===115?vs(oe.replace("stretch","fill-available"),te,Z,fe).replace(":fill-available",":stretch"):M.replace(K,j+K)+M.replace(K,G+K.replace("fill-",""))+M;break;case 962:if(M=j+M+(M.charCodeAt(5)===102?Y+M:"")+M,Z+fe===211&&M.charCodeAt(13)===105&&M.indexOf("transform",10)>0)return M.substring(0,M.indexOf(";",27)+1).replace(l,"$1"+j+"$2")+M}return M}function Ei(oe,te){var Z=oe.indexOf(te===1?":":"{"),fe=oe.substring(0,te!==3?Z:10),K=oe.substring(Z+1,oe.length-1);return ms(te!==2?fe:fe.replace(z,"$1"),K,te)}function _s(oe,te){var Z=vs(te,te.charCodeAt(0),te.charCodeAt(1),te.charCodeAt(2));return Z!==te+";"?Z.replace(A," or ($1)").substring(4):"("+te+")"}function Zt(oe,te,Z,fe,K,Ie,M,ge,de,He){for(var ve,et=0,Ue=te;et<At;++et)switch(ve=Io[et].call($r,oe,Ue,Z,fe,K,Ie,M,ge,de,He)){case void 0:case!1:case!0:case null:break;default:Ue=ve}if(Ue!==te)return Ue}function qu(oe,te,Z,fe){for(var K=te+1;K<Z;++K)switch(fe.charCodeAt(K)){case wn:if(oe===vn&&fe.charCodeAt(K-1)===vn&&te+2!==K)return K+1;break;case wt:if(oe===wn)return K+1}return K}function ws(oe){for(var te in oe){var Z=oe[te];switch(te){case"keyframe":nr=0|Z;break;case"global":To=0|Z;break;case"cascade":Ln=0|Z;break;case"compress":La=0|Z;break;case"semicolon":Va=0|Z;break;case"preserve":Fr=0|Z;break;case"prefix":ms=null,Z?typeof Z!="function"?Sn=1:(Sn=2,ms=Z):Sn=0}}return ws}function $r(oe,te){if(this!==void 0&&this.constructor===$r)return n(oe);var Z=oe,fe=Z.charCodeAt(0);fe<33&&(fe=(Z=Z.trim()).charCodeAt(0)),nr>0&&(ys=Z.replace(w,fe===Oe?"":"-")),fe=1,Ln===1?Vn=Z:Tr=Z;var K,Ie=[Vn];At>0&&(K=Zt(Fu,te,Ie,Ie,tr,En,0,0,0,0))!==void 0&&typeof K=="string"&&(te=K);var M=ja(bo,Ie,te,0,0);return At>0&&(K=Zt(gs,M,Ie,Ie,tr,En,M.length,0,0,0))!==void 0&&typeof(M=K)!="string"&&(fe=0),ys="",Vn="",Tr="",Mn=0,tr=1,En=1,La*fe==0?M:M.replace(o,"").replace(v,"").replace(b,"$1").replace(I,"$1").replace(x," ")}return $r.use=function oe(te){switch(te){case void 0:case null:At=Io.length=0;break;default:if(typeof te=="function")Io[At++]=te;else if(typeof te=="object")for(var Z=0,fe=te.length;Z<fe;++Z)oe(te[Z]);else wi=0|!!te}return oe},$r.set=ws,r!==void 0&&ws(r),$r})})(Mb);var Nz=Mb.exports;const Lb=dy(Nz);var Vb={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){return function(n){var r="/*|*/",i=r+"}";function o(s){if(s)try{n(s+"}")}catch{}}return function(a,l,c,f,h,m,_,E,w,d){switch(a){case 1:if(w===0&&l.charCodeAt(0)===64)return n(l+";"),"";break;case 2:if(E===0)return l+r;break;case 3:switch(E){case 102:case 112:return n(c[0]+l),"";default:return l+(d===0?r:"")}case-2:l.split(i).forEach(o)}}}})})(Vb);var Uz=Vb.exports;const Dz=dy(Uz);var Mz={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jb={exports:{}},Le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ct=typeof Symbol=="function"&&Symbol.for,lv=Ct?Symbol.for("react.element"):60103,uv=Ct?Symbol.for("react.portal"):60106,Ff=Ct?Symbol.for("react.fragment"):60107,$f=Ct?Symbol.for("react.strict_mode"):60108,Bf=Ct?Symbol.for("react.profiler"):60114,Wf=Ct?Symbol.for("react.provider"):60109,qf=Ct?Symbol.for("react.context"):60110,cv=Ct?Symbol.for("react.async_mode"):60111,Hf=Ct?Symbol.for("react.concurrent_mode"):60111,Kf=Ct?Symbol.for("react.forward_ref"):60112,Gf=Ct?Symbol.for("react.suspense"):60113,Lz=Ct?Symbol.for("react.suspense_list"):60120,Yf=Ct?Symbol.for("react.memo"):60115,Qf=Ct?Symbol.for("react.lazy"):60116,Vz=Ct?Symbol.for("react.block"):60121,jz=Ct?Symbol.for("react.fundamental"):60117,Fz=Ct?Symbol.for("react.responder"):60118,$z=Ct?Symbol.for("react.scope"):60119;function Nn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case lv:switch(t=t.type,t){case cv:case Hf:case Ff:case Bf:case $f:case Gf:return t;default:switch(t=t&&t.$$typeof,t){case qf:case Kf:case Qf:case Yf:case Wf:return t;default:return e}}case uv:return e}}}function Fb(t){return Nn(t)===Hf}Le.AsyncMode=cv;Le.ConcurrentMode=Hf;Le.ContextConsumer=qf;Le.ContextProvider=Wf;Le.Element=lv;Le.ForwardRef=Kf;Le.Fragment=Ff;Le.Lazy=Qf;Le.Memo=Yf;Le.Portal=uv;Le.Profiler=Bf;Le.StrictMode=$f;Le.Suspense=Gf;Le.isAsyncMode=function(t){return Fb(t)||Nn(t)===cv};Le.isConcurrentMode=Fb;Le.isContextConsumer=function(t){return Nn(t)===qf};Le.isContextProvider=function(t){return Nn(t)===Wf};Le.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===lv};Le.isForwardRef=function(t){return Nn(t)===Kf};Le.isFragment=function(t){return Nn(t)===Ff};Le.isLazy=function(t){return Nn(t)===Qf};Le.isMemo=function(t){return Nn(t)===Yf};Le.isPortal=function(t){return Nn(t)===uv};Le.isProfiler=function(t){return Nn(t)===Bf};Le.isStrictMode=function(t){return Nn(t)===$f};Le.isSuspense=function(t){return Nn(t)===Gf};Le.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ff||t===Hf||t===Bf||t===$f||t===Gf||t===Lz||typeof t=="object"&&t!==null&&(t.$$typeof===Qf||t.$$typeof===Yf||t.$$typeof===Wf||t.$$typeof===qf||t.$$typeof===Kf||t.$$typeof===jz||t.$$typeof===Fz||t.$$typeof===$z||t.$$typeof===Vz)};Le.typeOf=Nn;jb.exports=Le;var $b=jb.exports,Vw=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Bz(t,e){return!!(t===e||Vw(t)&&Vw(e))}function Wz(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!Bz(t[n],e[n]))return!1;return!0}function Bb(t,e){e===void 0&&(e=Wz);var n,r=[],i,o=!1;function s(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return o&&n===this&&e(a,r)||(i=t.apply(this,a),o=!0,n=this,r=a),i}return s}Db();function qz(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var Hz=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Kz=qz(function(t){return Hz.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function dv(t){return Object.prototype.toString.call(t).slice(8,-1)}function ol(t){return dv(t)!=="Object"?!1:t.constructor===Object&&Object.getPrototypeOf(t)===Object.prototype}function jw(t){return dv(t)==="Array"}function Fw(t){return dv(t)==="Symbol"}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function $w(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function Bw(t,e,n,r){var i=r.propertyIsEnumerable(e)?"enumerable":"nonenumerable";i==="enumerable"&&(t[e]=n),i==="nonenumerable"&&Object.defineProperty(t,e,{value:n,enumerable:!1,writable:!0,configurable:!0})}function Wb(t,e,n){if(!ol(e))return n&&jw(n)&&n.forEach(function(c){e=c(t,e)}),e;var r={};if(ol(t)){var i=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);r=$w(i,o).reduce(function(c,f){var h=t[f];return(!Fw(f)&&!Object.getOwnPropertyNames(e).includes(f)||Fw(f)&&!Object.getOwnPropertySymbols(e).includes(f))&&Bw(c,f,h,t),c},{})}var s=Object.getOwnPropertyNames(e),a=Object.getOwnPropertySymbols(e),l=$w(s,a).reduce(function(c,f){var h=e[f],m=ol(t)?t[f]:void 0;return n&&jw(n)&&n.forEach(function(_){h=_(m,h)}),m!==void 0&&ol(h)&&(h=Wb(m,h,n)),Bw(c,f,h,e),c},r);return l}function Gz(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=null,i=t;return ol(t)&&t.extensions&&Object.keys(t).length===1&&(i={},r=t.extensions),e.reduce(function(o,s){return Wb(o,s,r)},i)}var Ww=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},qb=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jr=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Yz=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),pn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Su=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Qz=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},da=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},fv=function(t){return(typeof t>"u"?"undefined":qb(t))==="object"&&t.constructor===Object},Bd=Object.freeze([]),Sl=Object.freeze({});function ui(t){return typeof t=="function"}function hv(t){return t.displayName||t.name||"Component"}function Xz(t){return typeof t=="function"&&!(t.prototype&&t.prototype.isReactComponent)}function Tu(t){return t&&typeof t.styledComponentId=="string"}var Jl=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Xf="data-styled-version",Jz="data-styled-streamed",Qo=typeof window<"u"&&"HTMLElement"in window,Hb=typeof SC_DISABLE_SPEEDY=="boolean"&&SC_DISABLE_SPEEDY||typeof process<"u"&&({}.REACT_APP_SC_DISABLE_SPEEDY||{}.SC_DISABLE_SPEEDY)||!1,Zz={},Dr=function(t){Su(e,t);function e(n){jr(this,e);for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var s,s=da(this,t.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+n+" for more information."+(i.length>0?" Additional arguments: "+i.join(", "):"")));return da(s)}return e}(Error),ex=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,tx=function(t){var e=""+(t||""),n=[];return e.replace(ex,function(r,i,o){return n.push({componentId:i,matchIndex:o}),r}),n.map(function(r,i){var o=r.componentId,s=r.matchIndex,a=n[i+1],l=a?e.slice(s,a.matchIndex):e.slice(s);return{componentId:o,cssFromDOM:l}})},nx=/^\s*\/\/.*$/gm,Kb=new Lb({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),Gb=new Lb({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),_g=[],Yb=function(e){if(e===-2){var n=_g;return _g=[],n}},Qb=Dz(function(t){_g.push(t)}),Xb=void 0,Xs=void 0,Jb=void 0,rx=function(e,n,r){return n>0&&r.slice(0,n).indexOf(Xs)!==-1&&r.slice(n-Xs.length,n)!==Xs?"."+Xb:e},ix=function(e,n,r){e===2&&r.length&&r[0].lastIndexOf(Xs)>0&&(r[0]=r[0].replace(Jb,rx))};Gb.use([ix,Qb,Yb]);Kb.use([Qb,Yb]);var ox=function(e){return Kb("",e)};function pv(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"&",i=t.join("").replace(nx,""),o=e&&n?n+" "+e+" { "+i+" }":i;return Xb=r,Xs=e,Jb=new RegExp("\\"+Xs+"\\b","g"),Gb(n||!e?"":e,o)}var mv=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},gv=function(e,n,r){if(r){var i=e[n]||(e[n]=Object.create(null));i[r]=!0}},Wd=function(e,n){e[n]=Object.create(null)},yv=function(e){return function(n,r){return e[n]!==void 0&&e[n][r]}},Zb=function(e){var n="";for(var r in e)n+=Object.keys(e[r]).join(" ")+" ";return n.trim()},sx=function(e){var n=Object.create(null);for(var r in e)n[r]=pn({},e[r]);return n},Ap=function(e){if(e.sheet)return e.sheet;for(var n=e.ownerDocument.styleSheets.length,r=0;r<n;r+=1){var i=e.ownerDocument.styleSheets[r];if(i.ownerNode===e)return i}throw new Dr(10)},ax=function(e,n,r){if(!n)return!1;var i=e.cssRules.length;try{e.insertRule(n,r<=i?r:i)}catch{return!1}return!0},lx=function(e,n,r){for(var i=n-r,o=n;o>i;o-=1)e.deleteRule(o)},vv=function(e){return`
/* sc-component-id: `+e+` */
`},Rp=function(e,n){for(var r=0,i=0;i<=n;i+=1)r+=e[i];return r},ux=function(e,n,r){var i=document;e?i=e.ownerDocument:n&&(i=n.ownerDocument);var o=i.createElement("style");o.setAttribute(Jl,""),o.setAttribute(Xf,"4.4.1");var s=mv();if(s&&o.setAttribute("nonce",s),o.appendChild(i.createTextNode("")),e&&!n)e.appendChild(o);else{if(!n||!e||!n.parentNode)throw new Dr(6);n.parentNode.insertBefore(o,r?n:n.nextSibling)}return o},_v=function(e,n){return function(r){var i=mv(),o=[i&&'nonce="'+i+'"',Jl+'="'+Zb(n)+'"',Xf+'="4.4.1"',r],s=o.filter(Boolean).join(" ");return"<style "+s+">"+e()+"</style>"}},wv=function(e,n){return function(){var r,i=(r={},r[Jl]=Zb(n),r[Xf]="4.4.1",r),o=mv();return o&&(i.nonce=o),pe.createElement("style",pn({},i,{dangerouslySetInnerHTML:{__html:e()}}))}},Ev=function(e){return function(){return Object.keys(e)}},cx=function(e,n){var r=Object.create(null),i=Object.create(null),o=[],s=n!==void 0,a=!1,l=function(_){var E=i[_];return E!==void 0?E:(i[_]=o.length,o.push(0),Wd(r,_),i[_])},c=function(_,E,w){for(var d=l(_),p=Ap(e),g=Rp(o,d),v=0,b=[],I=E.length,x=0;x<I;x+=1){var C=E[x],T=s;T&&C.indexOf("@import")!==-1?b.push(C):ax(p,C,g+v)&&(T=!1,v+=1)}s&&b.length>0&&(a=!0,n().insertRules(_+"-import",b)),o[d]+=v,gv(r,_,w)},f=function(_){var E=i[_];if(E!==void 0&&e.isConnected!==!1){var w=o[E],d=Ap(e),p=Rp(o,E)-1;lx(d,p,w),o[E]=0,Wd(r,_),s&&a&&n().removeRules(_+"-import")}},h=function(){var _=Ap(e),E=_.cssRules,w="";for(var d in i){w+=vv(d);for(var p=i[d],g=Rp(o,p),v=o[p],b=g-v;b<g;b+=1){var I=E[b];I!==void 0&&(w+=I.cssText)}}return w};return{clone:function(){throw new Dr(5)},css:h,getIds:Ev(i),hasNameForId:yv(r),insertMarker:l,insertRules:c,removeRules:f,sealed:!1,styleTag:e,toElement:wv(h,r),toHTML:_v(h,r)}},qw=function(e,n){return e.createTextNode(vv(n))},dx=function(e,n){var r=Object.create(null),i=Object.create(null),o=n!==void 0,s=!1,a=function(m){var _=i[m];return _!==void 0?_:(i[m]=qw(e.ownerDocument,m),e.appendChild(i[m]),r[m]=Object.create(null),i[m])},l=function(m,_,E){for(var w=a(m),d=[],p=_.length,g=0;g<p;g+=1){var v=_[g],b=o;if(b&&v.indexOf("@import")!==-1)d.push(v);else{b=!1;var I=g===p-1?"":" ";w.appendData(""+v+I)}}gv(r,m,E),o&&d.length>0&&(s=!0,n().insertRules(m+"-import",d))},c=function(m){var _=i[m];if(_!==void 0){var E=qw(e.ownerDocument,m);e.replaceChild(E,_),i[m]=E,Wd(r,m),o&&s&&n().removeRules(m+"-import")}},f=function(){var m="";for(var _ in i)m+=i[_].data;return m};return{clone:function(){throw new Dr(5)},css:f,getIds:Ev(i),hasNameForId:yv(r),insertMarker:a,insertRules:l,removeRules:c,sealed:!1,styleTag:e,toElement:wv(f,r),toHTML:_v(f,r)}},fx=function t(e,n){var r=e===void 0?Object.create(null):e,i=n===void 0?Object.create(null):n,o=function(m){var _=i[m];return _!==void 0?_:i[m]=[""]},s=function(m,_,E){var w=o(m);w[0]+=_.join(" "),gv(r,m,E)},a=function(m){var _=i[m];_!==void 0&&(_[0]="",Wd(r,m))},l=function(){var m="";for(var _ in i){var E=i[_][0];E&&(m+=vv(_)+E)}return m},c=function(){var m=sx(r),_=Object.create(null);for(var E in i)_[E]=[i[E][0]];return t(m,_)},f={clone:c,css:l,getIds:Ev(i),hasNameForId:yv(r),insertMarker:o,insertRules:s,removeRules:a,sealed:!1,styleTag:null,toElement:wv(l,r),toHTML:_v(l,r)};return f},Hw=function(e,n,r,i,o){if(Qo&&!r){var s=ux(e,n,i);return Hb?dx(s,o):cx(s,o)}return fx()},hx=function(e,n,r){for(var i=0,o=r.length;i<o;i+=1){var s=r[i],a=s.componentId,l=s.cssFromDOM,c=ox(l);e.insertRules(a,c)}for(var f=0,h=n.length;f<h;f+=1){var m=n[f];m.parentNode&&m.parentNode.removeChild(m)}},px=/\s+/,qd=void 0;Qo?qd=Hb?40:1e3:qd=-1;var Kw=0,kp=void 0,ci=function(){function t(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Qo?document.head:null,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;jr(this,t),this.getImportRuleTag=function(){var i=e.importRuleTag;if(i!==void 0)return i;var o=e.tags[0],s=!0;return e.importRuleTag=Hw(e.target,o?o.styleTag:null,e.forceServer,s)},Kw+=1,this.id=Kw,this.forceServer=r,this.target=r?null:n,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}return t.prototype.rehydrate=function(){if(!Qo||this.forceServer)return this;var n=[],r=[],i=!1,o=document.querySelectorAll("style["+Jl+"]["+Xf+'="4.4.1"]'),s=o.length;if(!s)return this;for(var a=0;a<s;a+=1){var l=o[a];i||(i=!!l.getAttribute(Jz));for(var c=(l.getAttribute(Jl)||"").trim().split(px),f=c.length,h=0,m;h<f;h+=1)m=c[h],this.rehydratedNames[m]=!0;r.push.apply(r,tx(l.textContent)),n.push(l)}var _=r.length;if(!_)return this;var E=this.makeTag(null);hx(E,n,r),this.capacity=Math.max(1,qd-_),this.tags.push(E);for(var w=0;w<_;w+=1)this.tagMap[r[w].componentId]=E;return this},t.reset=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;kp=new t(void 0,n).rehydrate()},t.prototype.clone=function(){var n=new t(this.target,this.forceServer);return this.clones.push(n),n.tags=this.tags.map(function(r){for(var i=r.getIds(),o=r.clone(),s=0;s<i.length;s+=1)n.tagMap[i[s]]=o;return o}),n.rehydratedNames=pn({},this.rehydratedNames),n.deferred=pn({},this.deferred),n},t.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach(function(n){n.sealed=!0})},t.prototype.makeTag=function(n){var r=n?n.styleTag:null,i=!1;return Hw(this.target,r,this.forceServer,i,this.getImportRuleTag)},t.prototype.getTagForId=function(n){var r=this.tagMap[n];if(r!==void 0&&!r.sealed)return r;var i=this.tags[this.tags.length-1];return this.capacity-=1,this.capacity===0&&(this.capacity=qd,i=this.makeTag(i),this.tags.push(i)),this.tagMap[n]=i},t.prototype.hasId=function(n){return this.tagMap[n]!==void 0},t.prototype.hasNameForId=function(n,r){if(this.ignoreRehydratedNames[n]===void 0&&this.rehydratedNames[r])return!0;var i=this.tagMap[n];return i!==void 0&&i.hasNameForId(n,r)},t.prototype.deferredInject=function(n,r){if(this.tagMap[n]===void 0){for(var i=this.clones,o=0;o<i.length;o+=1)i[o].deferredInject(n,r);this.getTagForId(n).insertMarker(n),this.deferred[n]=r}},t.prototype.inject=function(n,r,i){for(var o=this.clones,s=0;s<o.length;s+=1)o[s].inject(n,r,i);var a=this.getTagForId(n);if(this.deferred[n]!==void 0){var l=this.deferred[n].concat(r);a.insertRules(n,l,i),this.deferred[n]=void 0}else a.insertRules(n,r,i)},t.prototype.remove=function(n){var r=this.tagMap[n];if(r!==void 0){for(var i=this.clones,o=0;o<i.length;o+=1)i[o].remove(n);r.removeRules(n),this.ignoreRehydratedNames[n]=!0,this.deferred[n]=void 0}},t.prototype.toHTML=function(){return this.tags.map(function(n){return n.toHTML()}).join("")},t.prototype.toReactElements=function(){var n=this.id;return this.tags.map(function(r,i){var o="sc-"+n+"-"+i;return U.cloneElement(r.toElement(),{key:o})})},Yz(t,null,[{key:"master",get:function(){return kp||(kp=new t().rehydrate())}},{key:"instance",get:function(){return t.master}}]),t}(),eI=function(){function t(e,n){var r=this;jr(this,t),this.inject=function(i){i.hasNameForId(r.id,r.name)||i.inject(r.id,r.rules,r.name)},this.toString=function(){throw new Dr(12,String(r.name))},this.name=e,this.rules=n,this.id="sc-keyframes-"+e}return t.prototype.getName=function(){return this.name},t}(),mx=/([A-Z])/g,gx=/^ms-/;function Gw(t){return t.replace(mx,"-$1").toLowerCase().replace(gx,"-ms-")}function yx(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!(t in Mz)?e+"px":String(e).trim()}var tI=function(e){return e==null||e===!1||e===""},vx=function t(e,n){var r=[],i=Object.keys(e);return i.forEach(function(o){if(!tI(e[o])){if(fv(e[o]))return r.push.apply(r,t(e[o],o)),r;if(ui(e[o]))return r.push(Gw(o)+":",e[o],";"),r;r.push(Gw(o)+": "+yx(o,e[o])+";")}return r}),n?[n+" {"].concat(r,["}"]):r};function fa(t,e,n){if(Array.isArray(t)){for(var r=[],i=0,o=t.length,s;i<o;i+=1)s=fa(t[i],e,n),s!==null&&(Array.isArray(s)?r.push.apply(r,s):r.push(s));return r}if(tI(t))return null;if(Tu(t))return"."+t.styledComponentId;if(ui(t))if(Xz(t)&&e){var a=t(e);return fa(a,e,n)}else return t;return t instanceof eI?n?(t.inject(n),t.getName()):t:fv(t)?vx(t):t.toString()}function Jf(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ui(t)||fv(t)?fa(Ww(Bd,[t].concat(n))):fa(Ww(t,n))}function wg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Sl;if(!$b.isValidElementType(e))throw new Dr(1,String(e));var r=function(){return t(e,n,Jf.apply(void 0,arguments))};return r.withConfig=function(i){return wg(t,e,pn({},n,i))},r.attrs=function(i){return wg(t,e,pn({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r}function Sv(t){for(var e=t.length|0,n=e|0,r=0,i;e>=4;)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=1540483477*(i&65535)+((1540483477*(i>>>16)&65535)<<16),i^=i>>>24,i=1540483477*(i&65535)+((1540483477*(i>>>16)&65535)<<16),n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16)^i,e-=4,++r;switch(e){case 3:n^=(t.charCodeAt(r+2)&255)<<16;case 2:n^=(t.charCodeAt(r+1)&255)<<8;case 1:n^=t.charCodeAt(r)&255,n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16)}return n^=n>>>13,n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16),(n^n>>>15)>>>0}var Ec=52,Yw=function(e){return String.fromCharCode(e+(e>25?39:97))};function nI(t){var e="",n=void 0;for(n=t;n>Ec;n=Math.floor(n/Ec))e=Yw(n%Ec)+e;return Yw(n%Ec)+e}function _x(t){for(var e in t)if(ui(t[e]))return!0;return!1}function Tv(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(Array.isArray(r)&&!Tv(r,e))return!1;if(ui(r)&&!Tu(r))return!1}return!e.some(function(i){return ui(i)||_x(i)})}var Qw=function(e){return nI(Sv(e))},Xw=function(){function t(e,n,r){jr(this,t),this.rules=e,this.isStatic=Tv(e,n),this.componentId=r,ci.master.hasId(r)||ci.master.deferredInject(r,[])}return t.prototype.generateAndInjectStyles=function(n,r){var i=this.isStatic,o=this.componentId,s=this.lastClassName;if(Qo&&i&&typeof s=="string"&&r.hasNameForId(o,s))return s;var a=fa(this.rules,n,r),l=Qw(this.componentId+a.join(""));return r.hasNameForId(o,l)||r.inject(this.componentId,pv(a,"."+l,void 0,o),l),this.lastClassName=l,l},t.generateName=function(n){return Qw(n)},t}(),bv=function(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Sl,r=n?t.theme===n.theme:!1,i=t.theme&&!r?t.theme:e||n.theme;return i},wx=/[[\].#*$><+~=|^:(),"'`-]+/g,Ex=/(^-|-$)/g;function Eg(t){return t.replace(wx,"-").replace(Ex,"")}function Hd(t){return typeof t=="string"&&!0}function Sx(t){return Hd(t)?"styled."+t:"Styled("+hv(t)+")"}var Op,Jw={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Tx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zw=(Op={},Op[$b.ForwardRef]={$$typeof:!0,render:!0},Op),bx=Object.defineProperty,Ix=Object.getOwnPropertyNames,e1=Object.getOwnPropertySymbols,Cx=e1===void 0?function(){return[]}:e1,Px=Object.getOwnPropertyDescriptor,Ax=Object.getPrototypeOf,Rx=Object.prototype,kx=Array.prototype;function Iv(t,e,n){if(typeof e!="string"){var r=Ax(e);r&&r!==Rx&&Iv(t,r,n);for(var i=kx.concat(Ix(e),Cx(e)),o=Zw[t.$$typeof]||Jw,s=Zw[e.$$typeof]||Jw,a=i.length,l=void 0,c=void 0;a--;)if(c=i[a],!Tx[c]&&!(n&&n[c])&&!(s&&s[c])&&!(o&&o[c])&&(l=Px(e,c),l))try{bx(t,c,l)}catch{}return t}return t}function Ox(t){return!!(t&&t.prototype&&t.prototype.isReactComponent)}var Kd=U.createContext(),Zf=Kd.Consumer,zx=function(t){Su(e,t);function e(n){jr(this,e);var r=da(this,t.call(this,n));return r.getContext=Bb(r.getContext.bind(r)),r.renderInner=r.renderInner.bind(r),r}return e.prototype.render=function(){return this.props.children?pe.createElement(Kd.Consumer,null,this.renderInner):null},e.prototype.renderInner=function(r){var i=this.getContext(this.props.theme,r);return pe.createElement(Kd.Provider,{value:i},this.props.children)},e.prototype.getTheme=function(r,i){if(ui(r)){var o=r(i);return o}if(r===null||Array.isArray(r)||(typeof r>"u"?"undefined":qb(r))!=="object")throw new Dr(8);return pn({},i,r)},e.prototype.getContext=function(r,i){return this.getTheme(r,i)},e}(U.Component),xx=function(){function t(){jr(this,t),this.masterSheet=ci.master,this.instance=this.masterSheet.clone(),this.sealed=!1}return t.prototype.seal=function(){if(!this.sealed){var n=this.masterSheet.clones.indexOf(this.instance);this.masterSheet.clones.splice(n,1),this.sealed=!0}},t.prototype.collectStyles=function(n){if(this.sealed)throw new Dr(2);return pe.createElement(rI,{sheet:this.instance},n)},t.prototype.getStyleTags=function(){return this.seal(),this.instance.toHTML()},t.prototype.getStyleElement=function(){return this.seal(),this.instance.toReactElements()},t.prototype.interleaveWithNodeStream=function(n){throw new Dr(3)},t}(),Cv=U.createContext(),Pv=Cv.Consumer,rI=function(t){Su(e,t);function e(n){jr(this,e);var r=da(this,t.call(this,n));return r.getContext=Bb(r.getContext),r}return e.prototype.getContext=function(r,i){if(r)return r;if(i)return new ci(i);throw new Dr(4)},e.prototype.render=function(){var r=this.props,i=r.children,o=r.sheet,s=r.target;return pe.createElement(Cv.Provider,{value:this.getContext(o,s)},i)},e}(U.Component),t1={};function Nx(t,e,n){var r=typeof e!="string"?"sc":Eg(e),i=(t1[r]||0)+1;t1[r]=i;var o=r+"-"+t.generateName(r+i);return n?n+"-"+o:o}var Ux=function(t){Su(e,t);function e(){jr(this,e);var n=da(this,t.call(this));return n.attrs={},n.renderOuter=n.renderOuter.bind(n),n.renderInner=n.renderInner.bind(n),n}return e.prototype.render=function(){return pe.createElement(Pv,null,this.renderOuter)},e.prototype.renderOuter=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ci.master;return this.styleSheet=r,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():pe.createElement(Zf,null,this.renderInner)},e.prototype.renderInner=function(r){var i=this.props.forwardedComponent,o=i.componentStyle,s=i.defaultProps;i.displayName;var a=i.foldedComponentIds,l=i.styledComponentId,c=i.target,f=void 0;o.isStatic?f=this.generateAndInjectStyles(Sl,this.props):f=this.generateAndInjectStyles(bv(this.props,r,s)||Sl,this.props);var h=this.props.as||this.attrs.as||c,m=Hd(h),_={},E=pn({},this.props,this.attrs),w=void 0;for(w in E)w==="forwardedComponent"||w==="as"||(w==="forwardedRef"?_.ref=E[w]:w==="forwardedAs"?_.as=E[w]:(!m||Kz(w))&&(_[w]=E[w]));return this.props.style&&this.attrs.style&&(_.style=pn({},this.attrs.style,this.props.style)),_.className=Array.prototype.concat(a,l,f!==l?f:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),U.createElement(h,_)},e.prototype.buildExecutionContext=function(r,i,o){var s=this,a=pn({},i,{theme:r});return o.length&&(this.attrs={},o.forEach(function(l){var c=l,f=!1,h=void 0,m=void 0;ui(c)&&(c=c(a),f=!0);for(m in c)h=c[m],f||ui(h)&&!Ox(h)&&!Tu(h)&&(h=h(a)),s.attrs[m]=h,a[m]=h})),a},e.prototype.generateAndInjectStyles=function(r,i){var o=i.forwardedComponent,s=o.attrs,a=o.componentStyle;if(o.warnTooManyClasses,a.isStatic&&!s.length)return a.generateAndInjectStyles(Sl,this.styleSheet);var l=a.generateAndInjectStyles(this.buildExecutionContext(r,i,s),this.styleSheet);return l},e}(U.Component);function iI(t,e,n){var r=Tu(t),i=!Hd(t),o=e.displayName,s=o===void 0?Sx(t):o,a=e.componentId,l=a===void 0?Nx(Xw,e.displayName,e.parentComponentId):a,c=e.ParentComponent,f=c===void 0?Ux:c,h=e.attrs,m=h===void 0?Bd:h,_=e.displayName&&e.componentId?Eg(e.displayName)+"-"+e.componentId:e.componentId||l,E=r&&t.attrs?Array.prototype.concat(t.attrs,m).filter(Boolean):m,w=new Xw(r?t.componentStyle.rules.concat(n):n,E,_),d=void 0,p=function(v,b){return pe.createElement(f,pn({},v,{forwardedComponent:d,forwardedRef:b}))};return p.displayName=s,d=pe.forwardRef(p),d.displayName=s,d.attrs=E,d.componentStyle=w,d.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Bd,d.styledComponentId=_,d.target=r?t.target:t,d.withComponent=function(v){var b=e.componentId,I=Qz(e,["componentId"]),x=b&&b+"-"+(Hd(v)?v:Eg(hv(v))),C=pn({},I,{attrs:E,componentId:x,ParentComponent:f});return iI(v,C,n)},Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?Gz(t.defaultProps,v):v}}),d.toString=function(){return"."+d.styledComponentId},i&&Iv(d,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),d}var Dx=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Sg=function(e){return wg(iI,e)};Dx.forEach(function(t){Sg[t]=Sg(t)});var Mx=function(){function t(e,n){jr(this,t),this.rules=e,this.componentId=n,this.isStatic=Tv(e,Bd),ci.master.hasId(n)||ci.master.deferredInject(n,[])}return t.prototype.createStyles=function(n,r){var i=fa(this.rules,n,r),o=pv(i,"");r.inject(this.componentId,o)},t.prototype.removeStyles=function(n){var r=this.componentId;n.hasId(r)&&n.remove(r)},t.prototype.renderStyles=function(n,r){this.removeStyles(r),this.createStyles(n,r)},t}();Qo&&(window.scCGSHMRCache={});function Lx(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Jf.apply(void 0,[t].concat(n)),o="sc-global-"+Sv(JSON.stringify(i)),s=new Mx(i,o),a=function(l){Su(c,l);function c(f){jr(this,c);var h=da(this,l.call(this,f)),m=h.constructor,_=m.globalStyle,E=m.styledComponentId;return Qo&&(window.scCGSHMRCache[E]=(window.scCGSHMRCache[E]||0)+1),h.state={globalStyle:_,styledComponentId:E},h}return c.prototype.componentWillUnmount=function(){window.scCGSHMRCache[this.state.styledComponentId]&&(window.scCGSHMRCache[this.state.styledComponentId]-=1),window.scCGSHMRCache[this.state.styledComponentId]===0&&this.state.globalStyle.removeStyles(this.styleSheet)},c.prototype.render=function(){var h=this;return pe.createElement(Pv,null,function(m){h.styleSheet=m||ci.master;var _=h.state.globalStyle;return _.isStatic?(_.renderStyles(Zz,h.styleSheet),null):pe.createElement(Zf,null,function(E){var w=h.constructor.defaultProps,d=pn({},h.props);return typeof E<"u"&&(d.theme=bv(h.props,E,w)),_.renderStyles(d,h.styleSheet),null})})},c}(pe.Component);return a.globalStyle=s,a.styledComponentId=o,a}var Vx=function(e){return e.replace(/\s|\\n/g,"")};function jx(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Jf.apply(void 0,[t].concat(n)),o=nI(Sv(Vx(JSON.stringify(i))));return new eI(o,pv(i,o,"@keyframes"))}var Fx=function(t){var e=pe.forwardRef(function(n,r){return pe.createElement(Zf,null,function(i){var o=t.defaultProps,s=bv(n,i,o);return pe.createElement(t,pn({},n,{theme:s,ref:r}))})});return Iv(e,t),e.displayName="WithTheme("+hv(t)+")",e},$x={StyleSheet:ci};const Bx=Object.freeze(Object.defineProperty({__proto__:null,ServerStyleSheet:xx,StyleSheetConsumer:Pv,StyleSheetContext:Cv,StyleSheetManager:rI,ThemeConsumer:Zf,ThemeContext:Kd,ThemeProvider:zx,__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS:$x,createGlobalStyle:Lx,css:Jf,default:Sg,isStyledComponent:Tu,keyframes:jx,withTheme:Fx},Symbol.toStringTag,{value:"Module"})),Wx=nR(Bx);(function(t){(function(e,n){for(var r in n)e[r]=n[r]})(t,function(e){var n={};function r(i){if(n[i])return n[i].exports;var o=n[i]={i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(i,o,s){r.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:s})},r.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,o){if(1&o&&(i=r(i)),8&o||4&o&&typeof i=="object"&&i&&i.__esModule)return i;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&o&&typeof i!="string")for(var a in i)r.d(s,a,(function(l){return i[l]}).bind(null,a));return s},r.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(o,"a",o),o},r.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},r.p="",r(r.s=3)}([function(e,n){e.exports=U},function(e,n){e.exports=Db()},function(e,n){e.exports=Wx},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MetroSpinner=n.WhisperSpinner=n.ClassicSpinner=n.TraceSpinner=n.JellyfishSpinner=n.MagicSpinner=n.FlapperSpinner=n.HoopSpinner=n.RingSpinner=n.RainbowSpinner=n.PongSpinner=n.CombSpinner=n.GooSpinner=n.SwishSpinner=n.RotateSpinner=n.ClapSpinner=n.FlagSpinner=n.SphereSpinner=n.FillSpinner=n.CubeSpinner=n.ImpulseSpinner=n.DominoSpinner=n.SequenceSpinner=n.PulseSpinner=n.SpiralSpinner=n.CircleSpinner=n.GuardSpinner=n.HeartSpinner=n.StageSpinner=n.FireworkSpinner=n.PushSpinner=n.WaveSpinner=n.BarsSpinner=n.SwapSpinner=n.GridSpinner=n.BallSpinner=void 0;var i=r(4),o=r(5),s=r(6),a=r(7),l=r(8),c=r(9),f=r(10),h=r(11),m=r(12),_=r(13),E=r(14),w=r(15),d=r(16),p=r(17),g=r(18),v=r(19),b=r(20),I=r(21),x=r(22),C=r(23),T=r(24),P=r(25),A=r(26),O=r(27),z=r(28),k=r(29),q=r(30),j=r(31),G=r(32),Y=r(33),V=r(34),W=r(35),X=r(36),le=r(37),ye=r(38),Oe=r(39);n.BallSpinner=i.BallSpinner,n.GridSpinner=o.GridSpinner,n.SwapSpinner=s.SwapSpinner,n.BarsSpinner=a.BarsSpinner,n.WaveSpinner=l.WaveSpinner,n.PushSpinner=c.PushSpinner,n.FireworkSpinner=f.FireworkSpinner,n.StageSpinner=h.StageSpinner,n.HeartSpinner=m.HeartSpinner,n.GuardSpinner=_.GuardSpinner,n.CircleSpinner=E.CircleSpinner,n.SpiralSpinner=w.SpiralSpinner,n.PulseSpinner=d.PulseSpinner,n.SequenceSpinner=p.SequenceSpinner,n.DominoSpinner=g.DominoSpinner,n.ImpulseSpinner=v.ImpulseSpinner,n.CubeSpinner=b.CubeSpinner,n.FillSpinner=I.FillSpinner,n.SphereSpinner=x.SphereSpinner,n.FlagSpinner=C.FlagSpinner,n.ClapSpinner=T.ClapSpinner,n.RotateSpinner=P.RotateSpinner,n.SwishSpinner=A.SwishSpinner,n.GooSpinner=O.GooSpinner,n.CombSpinner=z.CombSpinner,n.PongSpinner=k.PongSpinner,n.RainbowSpinner=q.RainbowSpinner,n.RingSpinner=j.RingSpinner,n.HoopSpinner=G.HoopSpinner,n.FlapperSpinner=Y.FlapperSpinner,n.MagicSpinner=V.MagicSpinner,n.JellyfishSpinner=W.JellyfishSpinner,n.TraceSpinner=X.TraceSpinner,n.ClassicSpinner=le.ClassicSpinner,n.WhisperSpinner=ye.WhisperSpinner,n.MetroSpinner=Oe.MetroSpinner},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.BallSpinner=void 0;var i=m([`
    0% {
        transform: translateX(0) scale(1);
    }
    25% {
        transform: translateX(`,"",`) scale(0.25);
    }
    50% {
        transform: translateX(0) scale(1);
    }
    75% {
        transform: translateX(`,"",`) scale(0.25);
    }
    100% {
        transform: translateX(0) scale(1);

    }
`],[`
    0% {
        transform: translateX(0) scale(1);
    }
    25% {
        transform: translateX(`,"",`) scale(0.25);
    }
    50% {
        transform: translateX(0) scale(1);
    }
    75% {
        transform: translateX(`,"",`) scale(0.25);
    }
    100% {
        transform: translateX(0) scale(1);

    }
`]),o=m([`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`],[`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.BallSpinner=function(d){var p=d.size,g=d.color,v=d.loading,b=d.sizeUnit;return v&&a.default.createElement(E,{size:p},a.default.createElement(w,{color:g,size:p,sizeUnit:b})," ")},E=f.default.div.withConfig({displayName:"ball__Wrapper",componentId:"sc-1edcqkl-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size/2+d.sizeUnit}),w=f.default.div.withConfig({displayName:"ball__Ball",componentId:"sc-1edcqkl-1"})(s,function(d){return""+d.size/3+d.sizeUnit},function(d){return""+d.size/3+d.sizeUnit},function(d){return d.color},function(d){return function(p){return(0,c.keyframes)(i,p.size/2,p.sizeUnit,-p.size/2,p.sizeUnit)}(d)});_.defaultProps={loading:!0,size:40,color:"#00ff89",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GridSpinner=void 0;var i=m([`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    50% {
        width: `,"",`;
        height: `,"",`;
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
    }
`],[`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    50% {
        width: `,"",`;
        height: `,"",`;
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.GridSpinner=function(d){var p=d.size,g=d.color,v=d.loading,b=d.sizeUnit;return v&&a.default.createElement(E,{size:p,sizeUnit:b},function(I){for(var x=I.countBallsInLine,C=I.color,T=I.size,P=I.sizeUnit,A=[],O=0,z=0;z<x;z++)for(var k=0;k<x;k++)A.push(a.default.createElement(w,{color:C,size:T,x:z*(T/3+T/12),y:k*(T/3+T/12),key:O.toString(),sizeUnit:P})),O++;return A}({countBallsInLine:3,color:g,size:p,sizeUnit:b}))},E=f.default.div.withConfig({displayName:"grid__Wrapper",componentId:"sc-11vno70-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit}),w=f.default.div.withConfig({displayName:"grid__Ball",componentId:"sc-11vno70-1"})(s,function(d){return""+d.y+d.sizeUnit},function(d){return""+d.x+d.sizeUnit},function(d){return""+d.size/6+d.sizeUnit},function(d){return""+d.size/6+d.sizeUnit},function(d){return d.color},function(d){return(0,c.keyframes)(i,d.y,d.sizeUnit,d.x,d.sizeUnit,d.size/4,d.sizeUnit,d.size/4,d.sizeUnit,d.size/2-d.size/8,d.sizeUnit,d.size/2-d.size/8,d.sizeUnit,d.y,d.sizeUnit,d.x,d.sizeUnit)});_.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SwapSpinner=void 0;var i=m([`
    0% {
        top: `,`px;
        left: `,`px;
    }
    50%{
        top: `,`px;
        left: `,`px;
    }
    100% {
        top: `,`px;
        left: `,`px;
    }
`],[`
    0% {
        top: `,`px;
        left: `,`px;
    }
    50%{
        top: `,`px;
        left: `,`px;
    }
    100% {
        top: `,`px;
        left: `,`px;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    &:nth-child(2) {
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-duration: 1.5s;
    }
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    &:nth-child(2) {
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-duration: 1.5s;
    }
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(p){return p&&p.__esModule?p:{default:p}}function m(p,g){return Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(g)}}))}var _=function(p){switch(p.index){case 0:return{x:p.size-p.size/4,y:p.y};case 1:return{x:p.x,y:p.y-p.size/2+p.size/8};case 2:return{x:0,y:p.y}}},E=n.SwapSpinner=function(p){var g=p.size,v=p.color,b=p.loading,I=p.sizeUnit;return b&&a.default.createElement(w,{size:g,sizeUnit:I},function(x){for(var C=x.countBalls,T=x.color,P=x.size,A=x.sizeUnit,O=[],z=0;z<C;z++)O.push(a.default.createElement(d,{color:T,size:P,x:z*(P/4+P/8),y:P/2-P/8,key:z.toString(),index:z,sizeUnit:A}));return O}({countBalls:3,color:v,size:g,sizeUnit:I}))},w=f.default.div.withConfig({displayName:"swap__Wrapper",componentId:"sc-1a8o1b-0"})(o,function(p){return""+p.size+p.sizeUnit},function(p){return""+(p.size/2+p.size/8)+p.sizeUnit}),d=f.default.div.withConfig({displayName:"swap__Ball",componentId:"sc-1a8o1b-1"})(s,function(p){return""+p.y+p.sizeUnit},function(p){return""+p.x+p.sizeUnit},function(p){return""+p.size/4+p.sizeUnit},function(p){return""+p.size/4+p.sizeUnit},function(p){return p.color},function(p){return(0,c.keyframes)(i,p.y,p.x,_(p).y,_(p).x,p.y,p.x)});E.defaultProps={loading:!0,size:40,color:"#4b4c56",sizeUnit:"px"},E.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.BarsSpinner=void 0;var i=m([`
    0% {
        width: `,"",`
    }
    50% {
        width: `,"",`
    }
    100% {
        width: `,"",`
    }
`],[`
    0% {
        width: `,"",`
    }
    50% {
        width: `,"",`
    }
    100% {
        width: `,"",`
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.BarsSpinner=function(d){var p=d.size,g=d.color,v=d.loading,b=d.sizeUnit;return v&&a.default.createElement(E,{size:p,sizeUnit:b},function(I,x,C,T){for(var P=[],A=0;A<I;A++)P.push(a.default.createElement(w,{color:x,size:C,sizeUnit:T,x:A*(C/5+C/25)-C/12,key:A.toString(),index:A}));return P}(5,g,p,b))},E=f.default.div.withConfig({displayName:"bars__Wrapper",componentId:"sc-1sb659-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit}),w=f.default.div.withConfig({displayName:"bars__Bar",componentId:"sc-1sb659-1"})(s,function(d){return""+d.y+d.sizeUnit},function(d){return""+d.x+d.sizeUnit},function(d){return""+d.size/20+d.sizeUnit},function(d){return""+d.size+d.sizeUnit},function(d){return d.color},function(d){return(0,c.keyframes)(i,d.size/20,d.sizeUnit,d.size/6,d.sizeUnit,d.size/20,d.sizeUnit)},function(d){return .15*d.index});_.defaultProps={loading:!0,size:40,color:"#00ff89",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.WaveSpinner=void 0;var i=m([`
    25% {
        transform: skewY(25deg);
    }
    50% {
        height: 100%;
        margin-top: 0;
    }
    75% {
        transform: skewY(-25deg);
    }
`],[`
    25% {
        transform: skewY(25deg);
    }
    50% {
        height: 100%;
        margin-top: 0;
    }
    75% {
        transform: skewY(-25deg);
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    margin-top: `,`;
    transform: skewY(0deg);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    margin-top: `,`;
    transform: skewY(0deg);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(p){return p&&p.__esModule?p:{default:p}}function m(p,g){return Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(g)}}))}var _=(0,c.keyframes)(i),E=n.WaveSpinner=function(p){var g=p.size,v=p.color,b=p.loading,I=p.sizeUnit;return b&&a.default.createElement(w,{size:g,sizeUnit:I},function(x){for(var C=x.countBars,T=x.color,P=x.size,A=x.sizeUnit,O=[],z=0;z<C;z++)O.push(a.default.createElement(d,{color:T,size:P,x:z*(P/5+(P/15-P/100)),y:0,key:z.toString(),index:z,sizeUnit:A}));return O}({countBars:10,color:v,size:g,sizeUnit:I}))},w=f.default.div.withConfig({displayName:"wave__Wrapper",componentId:"sc-8a0z7x-0"})(o,function(p){return""+2.5*p.size+p.sizeUnit},function(p){return""+p.size+p.sizeUnit}),d=f.default.div.withConfig({displayName:"wave__Bar",componentId:"sc-8a0z7x-1"})(s,function(p){return""+(p.y+p.size/10)+p.sizeUnit},function(p){return""+p.x+p.sizeUnit},function(p){return""+p.size/5+p.sizeUnit},function(p){return""+p.size/10+p.sizeUnit},function(p){return""+(p.size-p.size/10)+p.sizeUnit},function(p){return p.color},_,function(p){return .15*p.index});E.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},E.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PushSpinner=void 0;var i=m([`
    15% {
        transform: scaleY(1) translateX(10`,`);
    }
    90% {
        transform: scaleY(0.05) translateX(-5`,`);
    }
    100%{
        transform: scaleY(0.05) translateX(-5`,`);
    }
`],[`
    15% {
        transform: scaleY(1) translateX(10`,`);
    }
    90% {
        transform: scaleY(0.05) translateX(-5`,`);
    }
    100%{
        transform: scaleY(0.05) translateX(-5`,`);
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),s=m([`
    position: absolute;
    top: 0;
    left: `,`;
    width: `,`;
    height: 100%;
    transform: scaleY(0.05) translateX(-5px);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: 0;
    left: `,`;
    width: `,`;
    height: 100%;
    transform: scaleY(0.05) translateX(-5px);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.PushSpinner=function(d){var p=d.size,g=d.color,v=d.loading,b=d.sizeUnit;return v&&a.default.createElement(E,{size:p,sizeUnit:b},function(I){for(var x=I.countBars,C=I.color,T=I.size,P=I.sizeUnit,A=[],O=0;O<x;O++)A.push(a.default.createElement(w,{color:C,size:T,x:O*(T/5+(T/15-T/100)),y:0,key:O.toString(),index:O,sizeUnit:P}));return A}({countBars:10,color:g,size:p,sizeUnit:b}))},E=f.default.div.withConfig({displayName:"push__Wrapper",componentId:"ypksxs-0"})(o,function(d){return""+2.5*d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit}),w=f.default.div.withConfig({displayName:"push__Bar",componentId:"ypksxs-1"})(s,function(d){return""+d.x+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return d.color},function(d){return(0,c.keyframes)(i,d.sizeUnit,d.sizeUnit,d.sizeUnit)},function(d){return .15*d.index});_.defaultProps={loading:!0,size:30,color:"#4b4c56",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FireworkSpinner=void 0;var i=h([`
    0% {
        opacity: 1;
        transform: scale(0.1);
    }
    25% {
        opacity: 0.85;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
`],[`
    0% {
        opacity: 1;
        transform: scale(0.1);
    }
    25% {
        opacity: 0.85;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
`]),o=h([`
    border: `," dotted ",`;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    animation: `,` 1.25s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`],[`
    border: `," dotted ",`;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    animation: `,` 1.25s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`]),s=f(r(0)),a=f(r(1)),l=r(2),c=f(l);function f(w){return w&&w.__esModule?w:{default:w}}function h(w,d){return Object.freeze(Object.defineProperties(w,{raw:{value:Object.freeze(d)}}))}var m=(0,l.keyframes)(i),_=n.FireworkSpinner=function(w){var d=w.size,p=w.color,g=w.loading,v=w.sizeUnit;return g&&s.default.createElement(E,{size:d,color:p,sizeUnit:v})},E=c.default.div.withConfig({displayName:"firework__Wrapper",componentId:"sc-1bn5a2-0"})(o,function(w){return""+w.size/10+w.sizeUnit},function(w){return w.color},function(w){return""+w.size+w.sizeUnit},function(w){return""+w.size+w.sizeUnit},m);_.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},_.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.StageSpinner=void 0;var i=m([`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    50% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
        opacity: 1;
    }
`],[`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    50% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
        opacity: 1;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1s ease-in-out infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1s ease-in-out infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.StageSpinner=function(d){var p=d.size,g=d.color,v=d.loading,b=d.sizeUnit;return v&&a.default.createElement(E,{size:p,sizeUnit:b},function(I){for(var x=I.countBalls,C=I.color,T=I.size,P=I.sizeUnit,A=[],O=0,z=0;z<x;z++)A.push(a.default.createElement(w,{color:C,size:T,index:z,x:z*(T/2.5),y:T/2-T/10,key:O.toString(),sizeUnit:P})),O++;return A}({countBalls:3,color:g,size:p,sizeUnit:b}))},E=f.default.div.withConfig({displayName:"stage__Wrapper",componentId:"sc-161krao-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit}),w=f.default.div.withConfig({displayName:"stage__Ball",componentId:"sc-161krao-1"})(s,function(d){return""+d.y+d.sizeUnit},function(d){return""+d.x+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return d.color},function(d){return(0,c.keyframes)(i,d.y,d.sizeUnit,d.x,d.sizeUnit,d.y,d.sizeUnit,d.x,d.sizeUnit,d.y+d.size/2,d.sizeUnit,d.x,d.sizeUnit,d.y,d.sizeUnit,d.x,d.sizeUnit)},function(d){return .2*d.index});_.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.HeartSpinner=void 0;var i=h([`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.75);
    }
    50% {
        transform: scale(1);
    }
    65% {
        transform: scale(1);
    }
    80% {
        transform: scale(0.75);
    }
    100% {
        transform: scale(1);
    }
`],[`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.75);
    }
    50% {
        transform: scale(1);
    }
    65% {
        transform: scale(1);
    }
    80% {
        transform: scale(0.75);
    }
    100% {
        transform: scale(1);
    }
`]),o=h([`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1s ease-in-out infinite;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: `,`;
        left: `,`;
        width: `,`;
        height: `,`;
        background-color: `,`;
        border-radius: `,`
            `,` 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    &::after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1s ease-in-out infinite;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: `,`;
        left: `,`;
        width: `,`;
        height: `,`;
        background-color: `,`;
        border-radius: `,`
            `,` 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    &::after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
`]),s=f(r(0)),a=f(r(1)),l=r(2),c=f(l);function f(w){return w&&w.__esModule?w:{default:w}}function h(w,d){return Object.freeze(Object.defineProperties(w,{raw:{value:Object.freeze(d)}}))}var m=(0,l.keyframes)(i),_=n.HeartSpinner=function(w){var d=w.size,p=w.color,g=w.loading,v=w.sizeUnit;return g&&s.default.createElement(E,{size:d,color:p,sizeUnit:v})},E=c.default.div.withConfig({displayName:"heart__Wrapper",componentId:"sc-12jb06u-0"})(o,function(w){return""+w.size+w.sizeUnit},function(w){return""+(w.size-w.size/10)+w.sizeUnit},m,function(w){return""+w.size/20+w.sizeUnit},function(w){return""+w.size/2+w.sizeUnit},function(w){return""+w.size/2+w.sizeUnit},function(w){return""+(w.size-w.size/5)+w.sizeUnit},function(w){return w.color},function(w){return""+w.size/2+w.sizeUnit},function(w){return""+w.size/2+w.sizeUnit});_.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},_.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GuardSpinner=void 0;var i=E([`
    0% {
        transform: rotateY(90deg);
    }
    50% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(90deg);
    }
`],[`
    0% {
        transform: rotateY(90deg);
    }
    50% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(90deg);
    }
`]),o=E([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`]),s=E([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
`]),a=E([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    animation-delay: `,`s;
`]),l=E([`
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`],[`
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`]),c=_(r(0)),f=_(r(1)),h=r(2),m=_(h);function _(I){return I&&I.__esModule?I:{default:I}}function E(I,x){return Object.freeze(Object.defineProperties(I,{raw:{value:Object.freeze(x)}}))}var w=(0,h.keyframes)(i),d=n.GuardSpinner=function(I){var x=I.size,C=I.backColor,T=I.frontColor,P=I.loading,A=I.sizeUnit;return P&&c.default.createElement(p,{size:x,sizeUnit:A},function(O){for(var z=O.countCubesInLine,k=O.backColor,q=O.frontColor,j=O.size,G=O.sizeUnit,Y=[],V=0,W=0;W<z;W++)for(var X=0;X<z;X++)Y.push(c.default.createElement(g,{size:j,x:W*(j/4+j/8),y:X*(j/4+j/8),key:V.toString(),sizeUnit:G},c.default.createElement(v,{size:j,index:V,sizeUnit:G},c.default.createElement(b,{front:!0,size:j,color:q,sizeUnit:G}),c.default.createElement(b,{left:!0,size:j,color:k,sizeUnit:G})))),V++;return Y}({countCubesInLine:3,backColor:C,frontColor:T,size:x,sizeUnit:A}))},p=m.default.div.withConfig({displayName:"guard__Wrapper",componentId:"sc-13axfn9-0"})(o,function(I){return""+I.size+I.sizeUnit},function(I){return""+I.size+I.sizeUnit},function(I){return""+3*I.size+I.sizeUnit}),g=m.default.div.withConfig({displayName:"guard__CubeWrapper",componentId:"sc-13axfn9-1"})(s,function(I){return""+I.y+I.sizeUnit},function(I){return""+I.x+I.sizeUnit},function(I){return""+I.size+I.sizeUnit},function(I){return""+I.size+I.sizeUnit}),v=m.default.div.withConfig({displayName:"guard__Cube",componentId:"sc-13axfn9-2"})(a,function(I){return""+I.size/4+I.sizeUnit},function(I){return""+I.size/4+I.sizeUnit},w,function(I){return .125*I.index}),b=m.default.div.withConfig({displayName:"guard__Side",componentId:"sc-13axfn9-3"})(l,function(I){return I.color},function(I){return I.front?0:-90},function(I){return""+I.size/8+I.sizeUnit});d.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#373846",sizeUnit:"px"},d.propTypes={loading:f.default.bool,size:f.default.number,frontColor:f.default.string,backColor:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CircleSpinner=void 0;var i=h([`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`]),o=h([`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-right-color: transparent;
    border-radius: 50%;
    animation: `,` 0.75s linear infinite;
`],[`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-right-color: transparent;
    border-radius: 50%;
    animation: `,` 0.75s linear infinite;
`]),s=f(r(0)),a=f(r(1)),l=r(2),c=f(l);function f(w){return w&&w.__esModule?w:{default:w}}function h(w,d){return Object.freeze(Object.defineProperties(w,{raw:{value:Object.freeze(d)}}))}var m=(0,l.keyframes)(i),_=n.CircleSpinner=function(w){var d=w.size,p=w.color,g=w.loading,v=w.sizeUnit;return g&&s.default.createElement(E,{size:d,color:p,sizeUnit:v})},E=c.default.div.withConfig({displayName:"circle__Wrapper",componentId:"sc-16bbsoy-0"})(o,function(w){return""+w.size+w.sizeUnit},function(w){return""+w.size+w.sizeUnit},function(w){return""+w.size/5+w.sizeUnit},function(w){return w.color},m);_.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},_.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SpiralSpinner=void 0;var i=E([`
    0% {
        transform: rotateX(0deg);
    }
    25% {
        transform: rotateX(-90deg);
    }
    50% {
        transform: rotateX(-180deg);
    }
    75% {
        transform: rotateX(-270deg);
    }
    100% {
        transform: rotateX(-360deg);
    }
`],[`
    0% {
        transform: rotateX(0deg);
    }
    25% {
        transform: rotateX(-90deg);
    }
    50% {
        transform: rotateX(-180deg);
    }
    75% {
        transform: rotateX(-270deg);
    }
    100% {
        transform: rotateX(-360deg);
    }
`]),o=E([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`]),s=E([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`]),a=E([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),l=E([`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`],[`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`]),c=_(r(0)),f=_(r(1)),h=r(2),m=_(h);function _(I){return I&&I.__esModule?I:{default:I}}function E(I,x){return Object.freeze(Object.defineProperties(I,{raw:{value:Object.freeze(x)}}))}var w=(0,h.keyframes)(i),d=n.SpiralSpinner=function(I){var x=I.size,C=I.backColor,T=I.frontColor,P=I.loading,A=I.sizeUnit;return P&&c.default.createElement(p,{size:x,sizeUnit:A},function(O){for(var z=O.countCubesInLine,k=O.backColor,q=O.frontColor,j=O.size,G=O.sizeUnit,Y=[],V=0,W=0;W<z;W++)Y.push(c.default.createElement(g,{x:W*(j/4),y:0,key:V.toString(),sizeUnit:G},c.default.createElement(v,{size:j,index:V,sizeUnit:G},c.default.createElement(b,{front:!0,size:j,color:q,sizeUnit:G}),c.default.createElement(b,{back:!0,size:j,color:q,sizeUnit:G}),c.default.createElement(b,{bottom:!0,size:j,color:k,sizeUnit:G}),c.default.createElement(b,{top:!0,size:j,color:k,sizeUnit:G})))),V++;return Y}({countCubesInLine:4,backColor:C,frontColor:T,size:x,sizeUnit:A}))},p=m.default.div.withConfig({displayName:"spiral__Wrapper",componentId:"sc-1898s0q-0"})(o,function(I){return""+I.size+I.sizeUnit},function(I){return""+I.size/4+I.sizeUnit},function(I){return""+3*I.size+I.sizeUnit}),g=m.default.div.withConfig({displayName:"spiral__CubeWrapper",componentId:"sc-1898s0q-1"})(s,function(I){return""+I.y+I.sizeUnit},function(I){return""+I.x+I.sizeUnit}),v=m.default.div.withConfig({displayName:"spiral__Cube",componentId:"sc-1898s0q-2"})(a,function(I){return""+I.size/4+I.sizeUnit},function(I){return""+I.size/4+I.sizeUnit},w,function(I){return .15*I.index}),b=m.default.div.withConfig({displayName:"spiral__Side",componentId:"sc-1898s0q-3"})(l,function(I){return I.color},function(I){return function(x){return x.top?90:x.bottom?-90:0}(I)},function(I){return I.back?180:0},function(I){return""+I.size/8+I.sizeUnit});d.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},d.propTypes={loading:f.default.bool,size:f.default.number,frontColor:f.default.string,backColor:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PulseSpinner=void 0;var i=m([`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`],[`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(p){return p&&p.__esModule?p:{default:p}}function m(p,g){return Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(g)}}))}var _=(0,c.keyframes)(i),E=n.PulseSpinner=function(p){var g=p.size,v=p.color,b=p.loading,I=p.sizeUnit;return b&&a.default.createElement(w,{size:g,sizeUnit:I},function(x){for(var C=x.countCubeInLine,T=x.color,P=x.size,A=x.sizeUnit,O=[],z=0,k=0;k<C;k++)O.push(a.default.createElement(d,{color:T,size:P,x:k*(P/3+P/15),y:0,key:z.toString(),index:k,sizeUnit:A})),z++;return O}({countCubeInLine:3,color:v,size:g,sizeUnit:I}))},w=f.default.div.withConfig({displayName:"pulse__Wrapper",componentId:"sc-1yr0qmr-0"})(o,function(p){return""+p.size+p.sizeUnit},function(p){return""+p.size/2.5+p.sizeUnit}),d=f.default.div.withConfig({displayName:"pulse__Cube",componentId:"sc-1yr0qmr-1"})(s,function(p){return""+p.y+p.sizeUnit},function(p){return""+p.x+p.sizeUnit},function(p){return""+p.size/5+p.sizeUnit},function(p){return""+p.size/2.5+p.sizeUnit},function(p){return p.color},_,function(p){return .15*p.index});E.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},E.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SequenceSpinner=void 0;var i=E([`
    0% {
        top: `,"",`;
        transform: rotateY(0deg);
    }
    30%{
        top: 0;
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(0deg);
        top: -`,"",`;
    }
`],[`
    0% {
        top: `,"",`;
        transform: rotateY(0deg);
    }
    30%{
        top: 0;
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(0deg);
        top: -`,"",`;
    }
`]),o=E([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
    overflow: hidden;
    transform: rotateY(20deg);
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
    overflow: hidden;
    transform: rotateY(20deg);
`]),s=E([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`]),a=E([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.75s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.75s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),l=E([`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`],[`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`]),c=_(r(0)),f=_(r(1)),h=r(2),m=_(h);function _(b){return b&&b.__esModule?b:{default:b}}function E(b,I){return Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(I)}}))}var w=n.SequenceSpinner=function(b){var I=b.size,x=b.backColor,C=b.frontColor,T=b.loading,P=b.sizeUnit;return T&&c.default.createElement(d,{size:I,sizeUnit:P},function(A){for(var O=A.countCubesInLine,z=A.backColor,k=A.frontColor,q=A.size,j=A.sizeUnit,G=[],Y=0,V=0;V<O;V++)G.push(c.default.createElement(p,{x:V*(q/8+q/11),y:0,key:Y.toString(),sizeUnit:j},c.default.createElement(g,{size:q,index:Y,sizeUnit:j},c.default.createElement(v,{front:!0,size:q,color:k,sizeUnit:j}),c.default.createElement(v,{left:!0,size:q,color:z,sizeUnit:j})))),Y++;return G}({countCubesInLine:5,backColor:x,frontColor:C,size:I,sizeUnit:P}))},d=m.default.div.withConfig({displayName:"sequence__Wrapper",componentId:"sc-61fmm1-0"})(o,function(b){return""+b.size+b.sizeUnit},function(b){return""+b.size/1.75+b.sizeUnit},function(b){return""+3*b.size+b.sizeUnit}),p=m.default.div.withConfig({displayName:"sequence__CubeWrapper",componentId:"sc-61fmm1-1"})(s,function(b){return""+b.y+b.sizeUnit},function(b){return""+b.x+b.sizeUnit}),g=m.default.div.withConfig({displayName:"sequence__Cube",componentId:"sc-61fmm1-2"})(a,function(b){return""+b.size/8+b.sizeUnit},function(b){return""+b.size/1.75+b.sizeUnit},function(b){return(0,h.keyframes)(i,b.size,b.sizeUnit,b.size,b.sizeUnit)},function(b){return .1*b.index}),v=m.default.div.withConfig({displayName:"sequence__Side",componentId:"sc-61fmm1-3"})(l,function(b){return b.color},function(b){return b.front?0:-90},function(b){return""+b.size/16+b.sizeUnit});w.defaultProps={loading:!0,size:40,frontColor:"#4b4c56",backColor:"#00ff89",sizeUnit:"px"},w.propTypes={loading:f.default.bool,size:f.default.number,frontColor:f.default.string,backColor:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.DominoSpinner=void 0;var i=m([`
    0% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 0;
    }
    14.28% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    28.56% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    37.12% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    42.84% {
        transform: translateX(`,"",`) rotate(10deg);
        opacity: 1;
    }
    57.12% {
        transform: translateX(`,"",`) rotate(40deg);
        opacity: 1;
    }
    71.4% {
        transform: translateX(`,"",`) rotate(62deg);
        opacity: 1;
    }
    85.68% {
        transform: translateX(`,"",`) rotate(72deg);
        opacity: 1;
    }
    100% {
        transform: translateX(`,"",`) rotate(74deg);
        opacity: 0;
    }
`],[`
    0% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 0;
    }
    14.28% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    28.56% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    37.12% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    42.84% {
        transform: translateX(`,"",`) rotate(10deg);
        opacity: 1;
    }
    57.12% {
        transform: translateX(`,"",`) rotate(40deg);
        opacity: 1;
    }
    71.4% {
        transform: translateX(`,"",`) rotate(62deg);
        opacity: 1;
    }
    85.68% {
        transform: translateX(`,"",`) rotate(72deg);
        opacity: 1;
    }
    100% {
        transform: translateX(`,"",`) rotate(74deg);
        opacity: 0;
    }
`]),o=m([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    right: 0;
    width: `,`;
    height: `,`;
    transform-origin: 50% 100%;
    background-color: `,`;
    animation: `,` 3s linear infinite;
    animation-delay: `,`s;
    transform: translateX(`,`)
        rotate(`,`deg);
    &:nth-child(1) {
        opacity: 0.22;
    }
`],[`
    position: absolute;
    right: 0;
    width: `,`;
    height: `,`;
    transform-origin: 50% 100%;
    background-color: `,`;
    animation: `,` 3s linear infinite;
    animation-delay: `,`s;
    transform: translateX(`,`)
        rotate(`,`deg);
    &:nth-child(1) {
        opacity: 0.22;
    }
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.DominoSpinner=function(d){var p=d.size,g=d.color,v=d.loading,b=d.sizeUnit,I=function(x,C){for(var T=[],P=0;P<=x+1;P++)T.push(C/8*-P);return T}(7,p);return v&&a.default.createElement(E,{size:p,sizeUnit:b},function(x){for(var C=x.countBars,T=x.rotatesPoints,P=x.translatesPoints,A=x.color,O=x.size,z=x.sizeUnit,k=[],q=0;q<C;q++)k.push(a.default.createElement(w,{color:A,size:O,translatesPoints:P,rotate:T[q],key:q.toString(),index:q,sizeUnit:z}));return k}({countBars:7,rotatesPoints:[0,0,0,10,40,60,70],translatesPoints:I,color:g,size:p,sizeUnit:b}))},E=f.default.div.withConfig({displayName:"domino__Wrapper",componentId:"sc-81zu9-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit}),w=f.default.div.withConfig({displayName:"domino__Bar",componentId:"sc-81zu9-1"})(s,function(d){return""+d.size/30+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return d.color},function(d){return(0,c.keyframes)(i,d.translatesPoints[0],d.sizeUnit,d.translatesPoints[1],d.sizeUnit,d.translatesPoints[2],d.sizeUnit,d.translatesPoints[3],d.sizeUnit,d.translatesPoints[4],d.sizeUnit,d.translatesPoints[5],d.sizeUnit,d.translatesPoints[6],d.sizeUnit,d.translatesPoints[7],d.sizeUnit,d.translatesPoints[8],d.sizeUnit)},function(d){return-.42*d.index},function(d){return""+(d.size-15*d.index)+d.sizeUnit},function(d){return d.rotate});_.defaultProps={loading:!0,size:100,color:"#4b4c56",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ImpulseSpinner=void 0;var i=m([`
    0% {
        background: `,`;
        transform: scale(1);
        animation-timing-function: cubic-bezier(1,0,0.7,1);
    }
    40% {
        background: `,`;
        transform: scale(1.5);
        animation-timing-function: cubic-bezier(0.3,0,0,1);
    }
    72.5% {
        background:`,`;
        transform: scale(1);
        animation-timing-function: linear;
    }
    100% {
        background: `,`;
        transform: scale(1);
    }
`],[`
    0% {
        background: `,`;
        transform: scale(1);
        animation-timing-function: cubic-bezier(1,0,0.7,1);
    }
    40% {
        background: `,`;
        transform: scale(1.5);
        animation-timing-function: cubic-bezier(0.3,0,0,1);
    }
    72.5% {
        background:`,`;
        transform: scale(1);
        animation-timing-function: linear;
    }
    100% {
        background: `,`;
        transform: scale(1);
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.25s linear infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.25s linear infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.ImpulseSpinner=function(d){var p=d.size,g=d.frontColor,v=d.backColor,b=d.loading,I=d.sizeUnit;return b&&a.default.createElement(E,{size:p,sizeUnit:I},function(x){for(var C=x.countBalls,T=x.frontColor,P=x.backColor,A=x.size,O=x.sizeUnit,z=[],k=0;k<C;k++)z.push(a.default.createElement(w,{frontColor:T,backColor:P,size:A,x:k*(A/5+A/5),y:0,key:k.toString(),index:k,sizeUnit:O}));return z}({countBalls:3,frontColor:g,backColor:v,size:p,sizeUnit:I}))},E=f.default.div.withConfig({displayName:"impulse__Wrapper",componentId:"sc-1eafdhu-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit}),w=f.default.div.withConfig({displayName:"impulse__Ball",componentId:"sc-1eafdhu-1"})(s,function(d){return""+d.y+d.sizeUnit},function(d){return""+d.x+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return d.frontColor},function(d){return(0,c.keyframes)(i,d.backColor,d.frontColor,d.backColor,d.backColor)},function(d){return .125*d.index});_.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,frontColor:l.default.string,backColor:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CubeSpinner=void 0;var i=E([`
    from { transform: rotateX(0) rotateY(0); }
    to   { transform: rotateX(360deg) rotateY(360deg); }
`],[`
    from { transform: rotateX(0) rotateY(0); }
    to   { transform: rotateX(360deg) rotateY(360deg); }
`]),o=E([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`]),s=E([`
    sposition: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`],[`
    sposition: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`]),a=E([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`]),l=E([`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`],[`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`]),c=_(r(0)),f=_(r(1)),h=r(2),m=_(h);function _(I){return I&&I.__esModule?I:{default:I}}function E(I,x){return Object.freeze(Object.defineProperties(I,{raw:{value:Object.freeze(x)}}))}var w=(0,h.keyframes)(i),d=n.CubeSpinner=function(I){var x=I.size,C=I.backColor,T=I.frontColor,P=I.loading,A=I.sizeUnit;return P&&c.default.createElement(p,{size:x,sizeUnit:A},c.default.createElement(g,{x:0,y:0,sizeUnit:A},c.default.createElement(v,{size:x,sizeUnit:A},c.default.createElement(b,{front:!0,size:x,color:T,sizeUnit:A}),c.default.createElement(b,{back:!0,size:x,color:T,sizeUnit:A}),c.default.createElement(b,{bottom:!0,size:x,color:C,sizeUnit:A}),c.default.createElement(b,{top:!0,size:x,color:C,sizeUnit:A}),c.default.createElement(b,{left:!0,size:x,color:C,sizeUnit:A}),c.default.createElement(b,{right:!0,size:x,color:C,sizeUnit:A}))))},p=m.default.div.withConfig({displayName:"cube__Wrapper",componentId:"sc-1iks05k-0"})(o,function(I){return""+I.size+I.sizeUnit},function(I){return""+I.size+I.sizeUnit},function(I){return""+4*I.size+I.sizeUnit}),g=m.default.div.withConfig({displayName:"cube__CubeWrapper",componentId:"sc-1iks05k-1"})(s,function(I){return""+I.y+I.sizeUnit},function(I){return""+I.x+I.sizeUnit}),v=m.default.div.withConfig({displayName:"cube__Cube",componentId:"sc-1iks05k-2"})(a,function(I){return""+I.size+I.sizeUnit},function(I){return""+I.size+I.sizeUnit},w),b=m.default.div.withConfig({displayName:"cube__Side",componentId:"sc-1iks05k-3"})(l,function(I){return I.color},function(I){return function(x){return x.top?90:x.bottom?-90:0}(I)},function(I){return function(x){return x.left?90:x.right?-90:x.back?180:0}(I)},function(I){return""+I.size/2+I.sizeUnit});d.defaultProps={loading:!0,size:25,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},d.propTypes={loading:f.default.bool,size:f.default.number,frontColor:f.default.string,backColor:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FillSpinner=void 0;var i=_([`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
`]),o=_([`
    0% {
        height: 0%;
    }
    25% {
        height: 0%;
    }
    50% {
        height: 100%;
    }
    75% {
        height: 100%;
    }
    100% {
        height: 0%;
    }
`],[`
    0% {
        height: 0%;
    }
    25% {
        height: 0%;
    }
    50% {
        height: 100%;
    }
    75% {
        height: 100%;
    }
    100% {
        height: 0%;
    }
`]),s=_([`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    animation: `,` 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`],[`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    animation: `,` 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`]),a=_([`
    width: 100%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`],[`
    width: 100%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`]),l=m(r(0)),c=m(r(1)),f=r(2),h=m(f);function m(v){return v&&v.__esModule?v:{default:v}}function _(v,b){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(b)}}))}var E=(0,f.keyframes)(i),w=(0,f.keyframes)(o),d=n.FillSpinner=function(v){var b=v.size,I=v.color,x=v.loading,C=v.sizeUnit;return x&&l.default.createElement(p,{size:b,color:I,sizeUnit:C},l.default.createElement(g,{color:I,size:b,sizeUnit:C}))},p=h.default.div.withConfig({displayName:"fill__Wrapper",componentId:"ehv7z4-0"})(s,function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size/8+v.sizeUnit},function(v){return v.color},E),g=h.default.div.withConfig({displayName:"fill__Plane",componentId:"ehv7z4-1"})(a,function(v){return v.color},w);d.defaultProps={loading:!0,size:20,color:"#4b4c56",sizeUnit:"px"},d.propTypes={loading:c.default.bool,size:c.default.number,color:c.default.string,sizeUnit:c.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SphereSpinner=void 0;var i=_([`
    to{
        transform: rotate(360deg);
    }
`],[`
    to{
        transform: rotate(360deg);
    }
`]),o=_([`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
    5% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    50% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    55% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`],[`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
    5% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    50% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    55% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`]),s=_([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 8s linear infinite;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 8s linear infinite;
`]),a=_([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),l=m(r(0)),c=m(r(1)),f=r(2),h=m(f);function m(g){return g&&g.__esModule?g:{default:g}}function _(g,v){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(v)}}))}var E=(0,f.keyframes)(i),w=n.SphereSpinner=function(g){var v=g.size,b=g.color,I=g.loading,x=g.sizeUnit,C=v/2,T=v/5;return I&&l.default.createElement(d,{size:v,sizeUnit:x},function(P){for(var A=P.countBalls,O=P.radius,z=P.angle,k=P.color,q=P.size,j=P.ballSize,G=P.sizeUnit,Y=[],V=j/2,W=0;W<A;W++){var X=Math.sin(z*W*(Math.PI/180))*O-V,le=Math.cos(z*W*(Math.PI/180))*O-V;Y.push(l.default.createElement(p,{color:k,ballSize:j,size:q,x:X,y:le,key:W.toString(),index:W,sizeUnit:G}))}return Y}({countBalls:7,radius:C,angle:360/7,color:b,size:v,ballSize:T,sizeUnit:x}))},d=h.default.div.withConfig({displayName:"sphere__Wrapper",componentId:"sc-1t5xu9p-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit},E),p=h.default.div.withConfig({displayName:"sphere__Ball",componentId:"sc-1t5xu9p-1"})(a,function(g){return""+g.size/2+g.sizeUnit},function(g){return""+g.size/2+g.sizeUnit},function(g){return""+g.ballSize+g.sizeUnit},function(g){return""+g.ballSize+g.sizeUnit},function(g){return g.color},function(g){return""+g.x+g.sizeUnit},function(g){return""+g.y+g.sizeUnit},function(g){return function(v){return(0,f.keyframes)(o,v.x,v.sizeUnit,v.y,v.sizeUnit,v.size/12,v.sizeUnit,v.size/12,v.sizeUnit,v.size/12,v.sizeUnit,v.size/12,v.sizeUnit,v.x,v.sizeUnit,v.y,v.sizeUnit)}(g)},function(g){return .3*g.index});w.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},w.propTypes={loading:c.default.bool,size:c.default.number,color:c.default.string,sizeUnit:c.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FlagSpinner=void 0;var i=_([`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(`,"",`);
        opacity: 0.25;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`],[`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(`,"",`);
        opacity: 0.25;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`]),o=_([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=_([`
    position: absolute;
    left: 0;
    top: 0;
    animation: `,` 1.5s cubic-bezier(0.86, 0, 0.07, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    left: 0;
    top: 0;
    animation: `,` 1.5s cubic-bezier(0.86, 0, 0.07, 1) infinite;
    animation-delay: `,`s;
`]),a=_([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
`]),l=m(r(0)),c=m(r(1)),f=r(2),h=m(f);function m(g){return g&&g.__esModule?g:{default:g}}function _(g,v){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(v)}}))}var E=n.FlagSpinner=function(g){var v=g.size,b=g.color,I=g.loading,x=g.sizeUnit;return I&&l.default.createElement(w,{size:v,sizeUnit:x},function(C){for(var T=C.countPlaneInLine,P=C.color,A=C.size,O=C.sizeUnit,z=[],k=[],q=0,j=0;j<T;j++){for(var G=0;G<T;G++)k.push(l.default.createElement(p,{color:P,size:A,x:j*(A/6+A/9),y:G*(A/6+A/9)+A/10,key:j+G.toString(),index:q,sizeUnit:O})),q++;z.push(l.default.createElement(d,{index:q,key:q.toString(),size:A,sizeUnit:O},[].concat(k))),k.length=0}return z}({countPlaneInLine:4,color:b,size:v,sizeUnit:x}))},w=h.default.div.withConfig({displayName:"flag__Wrapper",componentId:"sc-3eh05c-0"})(o,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit}),d=h.default.div.withConfig({displayName:"flag__Line",componentId:"sc-3eh05c-1"})(s,function(g){return(0,f.keyframes)(i,-g.size/5,g.sizeUnit)},function(g){return .05*g.index}),p=h.default.div.withConfig({displayName:"flag__Plane",componentId:"sc-3eh05c-2"})(a,function(g){return""+g.y+g.sizeUnit},function(g){return""+g.x+g.sizeUnit},function(g){return""+g.size/6+g.sizeUnit},function(g){return""+g.size/6+g.sizeUnit},function(g){return g.color});E.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},E.propTypes={loading:c.default.bool,size:c.default.number,color:c.default.string,sizeUnit:c.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ClapSpinner=void 0;var i=_([`
    50% {
        transform: rotate(180deg) scale(1.125);
    }
    100%{
        transform: rotate(360deg);
    }
`],[`
    50% {
        transform: rotate(180deg) scale(1.125);
    }
    100%{
        transform: rotate(360deg);
    }
`]),o=_([`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1.25) ;
    }
    5% {
        transform: translateX(`,"",") translateY(","",`) scale(1.75);
    }
    50% {
        transform: translateX(`,"",") translateY(","",`) scale(.25);
    }
    55% {
        background-color: `,`;
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`],[`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1.25) ;
    }
    5% {
        transform: translateX(`,"",") translateY(","",`) scale(1.75);
    }
    50% {
        transform: translateX(`,"",") translateY(","",`) scale(.25);
    }
    55% {
        background-color: `,`;
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`]),s=_([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 1.5s linear infinite;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 1.5s linear infinite;
`]),a=_([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: `,`s;
`]),l=m(r(0)),c=m(r(1)),f=r(2),h=m(f);function m(g){return g&&g.__esModule?g:{default:g}}function _(g,v){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(v)}}))}var E=(0,f.keyframes)(i),w=n.ClapSpinner=function(g){var v=g.size,b=g.frontColor,I=g.backColor,x=g.loading,C=g.sizeUnit,T=v/2,P=v/5;return x&&l.default.createElement(d,{size:v,sizeUnit:C},function(A){for(var O=A.countBalls,z=A.radius,k=A.angle,q=A.frontColor,j=A.backColor,G=A.size,Y=A.ballSize,V=A.sizeUnit,W=[],X=Y/2,le=0;le<O;le++){var ye=Math.sin(k*le*(Math.PI/180))*z-X,Oe=Math.cos(k*le*(Math.PI/180))*z-X;W.push(l.default.createElement(p,{frontColor:q,backColor:j,ballSize:Y,size:G,sizeUnit:V,x:ye,y:Oe,key:le.toString(),index:le}))}return W}({countBalls:7,radius:T,angle:360/7,frontColor:b,backColor:I,size:v,ballSize:P,sizeUnit:C}))},d=h.default.div.withConfig({displayName:"clap__Wrapper",componentId:"sc-12p9tb5-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit},E),p=h.default.div.withConfig({displayName:"clap__Ball",componentId:"sc-12p9tb5-1"})(a,function(g){return""+g.size/2+g.sizeUnit},function(g){return""+g.size/2+g.sizeUnit},function(g){return""+g.ballSize+g.sizeUnit},function(g){return""+g.ballSize+g.sizeUnit},function(g){return g.frontColor},function(g){return""+g.x+g.sizeUnit},function(g){return""+g.y+g.sizeUnit},function(g){return function(v){return(0,f.keyframes)(o,v.x,v.sizeUnit,v.y,v.sizeUnit,v.x,v.sizeUnit,v.y,v.sizeUnit,v.x,v.sizeUnit,v.y,v.sizeUnit,v.backColor,v.x,v.sizeUnit,v.y,v.sizeUnit)}(g)},function(g){return .2*g.index});w.defaultProps={loading:!0,size:30,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},w.propTypes={loading:c.default.bool,size:c.default.number,frontColor:c.default.string,backColor:c.default.string,sizeUnit:c.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RotateSpinner=void 0;var i=m([`
    0% {
        transform: rotate(0deg);
    }
    100% { 
        transform: rotate(1440deg); 
        opacity: 0.05;
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    100% { 
        transform: rotate(1440deg); 
        opacity: 0.05;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    left: 50%;
    top: 0%;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(-50%) translateY(100%);
    transform-origin: 0 250% 0;
    animation: `,` 4s both infinite;
    animation-timing-function: cubic-bezier(0.5, `,`, 0.9, 0.9);
`],[`
    position: absolute;
    left: 50%;
    top: 0%;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(-50%) translateY(100%);
    transform-origin: 0 250% 0;
    animation: `,` 4s both infinite;
    animation-timing-function: cubic-bezier(0.5, `,`, 0.9, 0.9);
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(p){return p&&p.__esModule?p:{default:p}}function m(p,g){return Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(g)}}))}var _=(0,c.keyframes)(i),E=n.RotateSpinner=function(p){var g=p.size,v=p.color,b=p.loading,I=p.sizeUnit,x=g/2,C=g/5;return b&&a.default.createElement(w,{size:g,sizeUnit:I},function(T){for(var P=T.countBalls,A=T.radius,O=T.angle,z=T.color,k=T.size,q=T.ballSize,j=T.sizeUnit,G=[],Y=q/2,V=0;V<P;V++){var W=Math.sin(O*V*(Math.PI/180))*A-Y,X=Math.cos(O*V*(Math.PI/180))*A-Y;G.push(a.default.createElement(d,{color:z,ballSize:q,size:k,x:W,y:X,key:V.toString(),index:V,sizeUnit:j}))}return G}({countBalls:8,radius:x,angle:45,color:v,size:g,ballSize:C,sizeUnit:I}))},w=f.default.div.withConfig({displayName:"rotate__Wrapper",componentId:"sc-1b62bh9-0"})(o,function(p){return""+p.size+p.sizeUnit},function(p){return""+p.size+p.sizeUnit}),d=f.default.div.withConfig({displayName:"rotate__Ball",componentId:"sc-1b62bh9-1"})(s,function(p){return""+p.ballSize+p.sizeUnit},function(p){return""+p.ballSize+p.sizeUnit},function(p){return p.color},_,function(p){return .3*p.index});E.defaultProps={loading:!0,size:45,color:"#00ff89",sizeUnit:"px"},E.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SwishSpinner=void 0;var i=m([`
    50% {
        transform: scale(0);
        background-color: `,`;
    }
`],[`
    50% {
        transform: scale(0);
        background-color: `,`;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 3px;
    background-color: `,`;
    animation: `,` 0.9s ease infinite;
    transition: all 0.3s ease;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 3px;
    background-color: `,`;
    animation: `,` 0.9s ease infinite;
    transition: all 0.3s ease;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.SwishSpinner=function(d){var p=d.size,g=d.frontColor,v=d.backColor,b=d.loading,I=d.sizeUnit;return b&&a.default.createElement(E,{size:p,sizeUnit:I},function(x){for(var C=x.countBallsInLine,T=x.frontColor,P=x.backColor,A=x.size,O=x.sizeUnit,z=[],k=0,q=0;q<C;q++)for(var j=0;j<C;j++)z.push(a.default.createElement(w,{frontColor:T,backColor:P,size:A,x:q*(A/3+A/15),y:j*(A/3+A/15),key:k.toString(),index:k,sizeUnit:O})),k++;return z}({countBallsInLine:3,frontColor:g,backColor:v,size:p,sizeUnit:I}))},E=f.default.div.withConfig({displayName:"swish__Wrapper",componentId:"e0szto-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit}),w=f.default.div.withConfig({displayName:"swish__Ball",componentId:"e0szto-1"})(s,function(d){return""+d.y+d.sizeUnit},function(d){return""+d.x+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return d.frontColor},function(d){return(0,c.keyframes)(i,d.backColor)},function(d){return .1*d.index});_.defaultProps={loading:!0,size:40,frontColor:"#4b4c56",backColor:"#fff",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,frontColor:l.default.string,backColor:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GooSpinner=void 0;var i=E([`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`]),o=E([`
    0%{
        transform: translateY(0) scale(1);
    }
    50%{
        transform: translateY(`,"",`) scale(0.8);
    }
    100%{
        transform: translateY(0) scale(1);
    }
`],[`
    0%{
        transform: translateY(0) scale(1);
    }
    50%{
        transform: translateY(`,"",`) scale(0.8);
    }
    100%{
        transform: translateY(0) scale(1);
    }
`]),s=E([`
    width: `,`;
    height: `,`;
    filter: url("#goo");
`],[`
    width: `,`;
    height: `,`;
    filter: url("#goo");
`]),a=E([`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1.7s linear infinite;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1.7s linear infinite;
`]),l=E([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s ease-in-out infinite;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s ease-in-out infinite;
`]),c=_(r(0)),f=_(r(1)),h=r(2),m=_(h);function _(v){return v&&v.__esModule?v:{default:v}}function E(v,b){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(b)}}))}var w=n.GooSpinner=function(v){var b=v.size,I=v.color,x=v.loading,C=v.sizeUnit;return x&&c.default.createElement(d,{size:b,sizeUnit:C},c.default.createElement(p,{size:b,sizeUnit:C},function(T){for(var P=T.countBalls,A=T.color,O=T.size,z=T.sizeUnit,k=[],q=O/4,j=[-q,q],G=0;G<P;G++)k.push(c.default.createElement(g,{color:A,size:O,x:O/2-O/6,y:O/2-O/6,key:G.toString(),translateTo:j[G],index:G,sizeUnit:z}));return k}({countBalls:2,color:I,size:b,sizeUnit:C})),c.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1"},c.default.createElement("defs",null,c.default.createElement("filter",{id:"goo"},c.default.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"6",result:"blur"}),c.default.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -5",result:"goo"}),c.default.createElement("feBlend",{in:"SourceGraphic",in2:"goo"})))))},d=m.default.div.withConfig({displayName:"goo__Wrapper",componentId:"sc-12keask-0"})(s,function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size+v.sizeUnit}),p=m.default.div.withConfig({displayName:"goo__BallsWrapper",componentId:"sc-12keask-1"})(a,function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size+v.sizeUnit},function(){return(0,h.keyframes)(i)}),g=m.default.div.withConfig({displayName:"goo__Ball",componentId:"sc-12keask-2"})(l,function(v){return""+v.y+v.sizeUnit},function(v){return""+v.x+v.sizeUnit},function(v){return""+v.size/3+v.sizeUnit},function(v){return""+v.size/3+v.sizeUnit},function(v){return v.color},function(v){return(0,h.keyframes)(o,v.translateTo,v.sizeUnit)});w.defaultProps={loading:!0,size:55,color:"#fff",sizeUnit:"px"},w.propTypes={loading:f.default.bool,size:f.default.number,color:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CombSpinner=void 0;var i=m([`
    to {
        transform: rotate(450deg);
    }
`],[`
    to {
        transform: rotate(450deg);
    }
`]),o=m([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    left: 0;
    width: `,`;
    height: `,`;
    left: `,`;
    transform-origin: center bottom;
    transform: rotate(-90deg);
    background-color: `,`;
    animation: `,` 3s ease infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    left: 0;
    width: `,`;
    height: `,`;
    left: `,`;
    transform-origin: center bottom;
    transform: rotate(-90deg);
    background-color: `,`;
    animation: `,` 3s ease infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.CombSpinner=function(d){var p=d.size,g=d.color,v=d.loading,b=d.sizeUnit,I=p/9;return v&&a.default.createElement(E,{size:p,sizeUnit:b},function(x){for(var C=x.countBars,T=x.color,P=x.size,A=x.sizeUnit,O=[],z=0;z<C;z++)O.push(a.default.createElement(w,{color:T,size:P,key:z.toString(),sizeUnit:A,index:z}));return O}({countBars:I,color:g,size:p,sizeUnit:b}))},E=f.default.div.withConfig({displayName:"comb__Wrapper",componentId:"x9t4ur-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit}),w=f.default.div.withConfig({displayName:"comb__Bar",componentId:"x9t4ur-1"})(s,function(d){return""+d.size/60+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return""+9*d.index+d.sizeUnit},function(d){return d.color},function(){return(0,c.keyframes)(i)},function(d){return .05*d.index});_.defaultProps={loading:!0,size:100,color:"#fff",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PongSpinner=void 0;var i=E([`
    0% {
        top: `,"",`;
    }
    50% {
        top: `,"",`;
    }
    100% {
        top: `,"",`;
    }
`],[`
    0% {
        top: `,"",`;
    }
    50% {
        top: `,"",`;
    }
    100% {
        top: `,"",`;
    }
`]),o=E([`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`; 
    }
    50% {
        top: `,"",`;
        left: `,"",`; 
    }
    75% {
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`; 
    }
`],[`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`; 
    }
    50% {
        top: `,"",`;
        left: `,"",`; 
    }
    75% {
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`; 
    }
`]),s=E([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),a=E([`
    position: absolute;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 2s linear infinite;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 2s linear infinite;
`]),l=E([`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    left: `,`;
    right: `,`;
    border-radius: 4px;
    animation: `,` 2s linear infinite;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    left: `,`;
    right: `,`;
    border-radius: 4px;
    animation: `,` 2s linear infinite;
`]),c=_(r(0)),f=_(r(1)),h=r(2),m=_(h);function _(v){return v&&v.__esModule?v:{default:v}}function E(v,b){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(b)}}))}var w=n.PongSpinner=function(v){var b=v.size,I=v.color,x=v.loading,C=v.sizeUnit;return x&&c.default.createElement(d,{size:b,sizeUnit:C},c.default.createElement(g,{left:!0,color:I,size:b,sizeUnit:C}),c.default.createElement(p,{color:I,size:b,sizeUnit:C}),c.default.createElement(g,{right:!0,color:I,size:b,sizeUnit:C}))},d=m.default.div.withConfig({displayName:"pong__Wrapper",componentId:"sc-1lbqo08-0"})(s,function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size/1.75+v.sizeUnit}),p=m.default.div.withConfig({displayName:"pong__Ball",componentId:"sc-1lbqo08-1"})(a,function(v){return""+v.size/8+v.sizeUnit},function(v){return""+v.size/8+v.sizeUnit},function(v){return v.color},function(v){return function(b){return(0,h.keyframes)(o,b.size/3.5-b.size/8,b.sizeUnit,b.size/12,b.sizeUnit,b.size/3.5,b.sizeUnit,b.size-b.size/8,b.sizeUnit,b.size/1.75-b.size/8,b.sizeUnit,b.size/12,b.sizeUnit,b.size/3.5,b.sizeUnit,b.size-b.size/8,b.sizeUnit,b.size/3.5-b.size/8,b.sizeUnit,b.size/12,b.sizeUnit)}(v)}),g=m.default.div.withConfig({displayName:"pong__Player",componentId:"sc-1lbqo08-2"})(l,function(v){return""+v.size/12+v.sizeUnit},function(v){return""+v.size/3+v.sizeUnit},function(v){return v.color},function(v){return v.left?0:v.size},function(v){return v.right?0:v.size},function(v){return function(b){return(0,h.keyframes)(i,b.left?0:b.size/3.5,b.sizeUnit,b.left?b.size/3.5:0,b.sizeUnit,b.left?0:b.size/3.5,b.sizeUnit)}(v)});w.defaultProps={loading:!0,size:60,color:"#4b4c56",sizeUnit:"px"},w.propTypes={loading:f.default.bool,size:f.default.number,color:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RainbowSpinner=void 0;var i=m([`
    0% {
        border-width: 10`,`; 
    }
    25% {
        border-width: 3`,`; 
    }
    50% {
        transform: rotate(115deg); 
        border-width: 10`,`;
    }
    75% {
        border-width: 3`,`;
    }
    100% {
        border-width: 10`,`;
    }
`],[`
    0% {
        border-width: 10`,`; 
    }
    25% {
        border-width: 3`,`; 
    }
    50% {
        transform: rotate(115deg); 
        border-width: 10`,`;
    }
    75% {
        border-width: 3`,`;
    }
    100% {
        border-width: 10`,`;
    }
`]),o=m([`
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),s=m([`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    border-style: solid;
    border-top-color: `,`;
    border-right-color: `,`;
    border-left-color: transparent;
    border-bottom-color: transparent;
    box-sizing: border-box;
    transform: rotate(-200deg);
    animation: `,` 3s ease-in-out infinite;
`],[`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    border-style: solid;
    border-top-color: `,`;
    border-right-color: `,`;
    border-left-color: transparent;
    border-bottom-color: transparent;
    box-sizing: border-box;
    transform: rotate(-200deg);
    animation: `,` 3s ease-in-out infinite;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.RainbowSpinner=function(d){var p=d.size,g=d.color,v=d.loading,b=d.sizeUnit;return v&&a.default.createElement(E,{size:p,sizeUnit:b},a.default.createElement(w,{size:p,color:g,sizeUnit:b}))},E=f.default.div.withConfig({displayName:"rainbow__Wrapper",componentId:"sc-1ugdhww-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size/2+d.sizeUnit}),w=f.default.div.withConfig({displayName:"rainbow__Line",componentId:"sc-1ugdhww-1"})(s,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit},function(d){return d.color},function(d){return d.color},function(d){return(0,c.keyframes)(i,d.sizeUnit,d.sizeUnit,d.sizeUnit,d.sizeUnit,d.sizeUnit)});_.defaultProps={loading:!0,size:50,color:"#fff",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RingSpinner=void 0;var i=_([`
    0% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
    50%, 100% {
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
`],[`
    0% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
    50%, 100% {
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
`]),o=_([`
    0%, 50% { 
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
    100% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
`],[`
    0%, 50% { 
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
    100% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
`]),s=_([`
    width: `,`;
    height: `,`;
`],[`
    width: `,`;
    height: `,`;
`]),a=_([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
    &:before,
    &:after {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        border-radius: 50%;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    &:before {
        box-shadow: `,`;
        animation-name: `,`;
    }
    &:after {
        box-shadow: 0 0 0 0 `,`;
        animation-name: `,`;
    }
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
    &:before,
    &:after {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        border-radius: 50%;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    &:before {
        box-shadow: `,`;
        animation-name: `,`;
    }
    &:after {
        box-shadow: 0 0 0 0 `,`;
        animation-name: `,`;
    }
`]),l=m(r(0)),c=m(r(1)),f=r(2),h=m(f);function m(p){return p&&p.__esModule?p:{default:p}}function _(p,g){return Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(g)}}))}var E=n.RingSpinner=function(p){var g=p.size,v=p.color,b=p.loading,I=p.sizeUnit;return b&&l.default.createElement(w,{size:g,sizeUnit:I},l.default.createElement(d,{size:g,color:v,sizeUnit:I}))},w=h.default.div.withConfig({displayName:"ring__Wrapper",componentId:"sc-1ki0q4s-0"})(s,function(p){return""+p.size+p.sizeUnit},function(p){return""+p.size+p.sizeUnit}),d=h.default.div.withConfig({displayName:"ring__Circle",componentId:"sc-1ki0q4s-1"})(a,function(p){return"inset 0 0 0 "+p.size/10+p.sizeUnit+" "+p.color},function(p){return(0,f.keyframes)(i,p.size/10,p.sizeUnit,p.color,p.color)},function(p){return p.color},function(p){return(0,f.keyframes)(o,p.color,p.size/10,p.sizeUnit,p.color)});E.defaultProps={loading:!0,size:30,color:"#00ff89",sizeUnit:"px"},E.propTypes={loading:c.default.bool,size:c.default.number,color:c.default.string,sizeUnit:c.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.HoopSpinner=void 0;var i=m([`
    0% {
        opacity: 0;
        border-color: `,`;
        transform: `,`;
    }
    40% {
        opacity: 1;
        transform: rotateX(0deg) rotateY(20deg) translateZ(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: `,`;
    }
`],[`
    0% {
        opacity: 0;
        border-color: `,`;
        transform: `,`;
    }
    40% {
        opacity: 1;
        transform: rotateX(0deg) rotateY(20deg) translateZ(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: `,`;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: 600px;
    transform-style: perserve-3d;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: 600px;
    transform-style: perserve-3d;
`]),s=m([`
    position: absolute;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-radius: 50%;
    background-color: transparent;
    transform-style: perserve-3d;
    transform: scale(0) rotateX(60deg);
    opacity: `,`;
    animation: `,` 3s cubic-bezier(0.67, 0.08, 0.46, 1.5) infinite;
    animation-delay: `,`ms;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-radius: 50%;
    background-color: transparent;
    transform-style: perserve-3d;
    transform: scale(0) rotateX(60deg);
    opacity: `,`;
    animation: `,` 3s cubic-bezier(0.67, 0.08, 0.46, 1.5) infinite;
    animation-delay: `,`ms;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.HoopSpinner=function(d){var p=d.size,g=d.color,v=d.loading,b=d.sizeUnit;return v&&a.default.createElement(E,{size:p,sizeUnit:b},function(I){for(var x=I.countBallsInLine,C=I.color,T=I.size,P=I.sizeUnit,A=[],O=0,z=0;z<x;z++)A.push(a.default.createElement(w,{color:C,size:T,key:O.toString(),index:z,sizeUnit:P})),O++;return A}({countBallsInLine:6,color:g,size:p,sizeUnit:b}))},E=f.default.div.withConfig({displayName:"hoop__Wrapper",componentId:"sc-6dao9o-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit}),w=f.default.div.withConfig({displayName:"hoop__Ball",componentId:"sc-6dao9o-1"})(s,function(d){return""+d.size/1.5+d.sizeUnit},function(d){return""+d.size/1.5+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return d.color},function(d){return 1-.2*d.index},function(d){return(0,c.keyframes)(i,d.color,"rotateX(65deg) rotateY(45deg) translateZ(-"+1.5*d.size+d.sizeUnit+") scale(0.1)","rotateX(65deg) rotateY(-45deg) translateZ(-"+1.5*d.size+d.sizeUnit+") scale(0.1)")},function(d){return 200*d.index});_.defaultProps={loading:!0,size:45,color:"#4b4c56",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FlapperSpinner=void 0;var i=m([`
    100% {
        opacity: 0;
        transform: translateX(`,"",`)
        translateY(`,"",`) scale(1);
   }
`],[`
    100% {
        opacity: 0;
        transform: translateX(`,"",`)
        translateY(`,"",`) scale(1);
   }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`) scale(0);
    animation: `,` 0.8s linear infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`) scale(0);
    animation: `,` 0.8s linear infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.FlapperSpinner=function(d){var p=d.size,g=d.color,v=d.loading,b=d.sizeUnit,I=p/2,x=p/1.5;return v&&a.default.createElement(E,{size:p,sizeUnit:b},function(C){for(var T=C.countBalls,P=C.radius,A=C.angle,O=C.color,z=C.size,k=C.ballSize,q=C.sizeUnit,j=[],G=k/2,Y=0;Y<T;Y++){var V=Math.sin(A*Y*(Math.PI/180))*P-G,W=Math.cos(A*Y*(Math.PI/180))*P-G;j.push(a.default.createElement(w,{color:O,ballSize:k,size:z,x:V,y:W,key:Y.toString(),index:Y,sizeUnit:q}))}return j}({countBalls:7,radius:I,angle:360/7,color:g,size:p,ballSize:x,sizeUnit:b}))},E=f.default.div.withConfig({displayName:"flapper__Wrapper",componentId:"kzbmuk-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit}),w=f.default.div.withConfig({displayName:"flapper__Ball",componentId:"kzbmuk-1"})(s,function(d){return""+d.size/2+d.sizeUnit},function(d){return""+d.size/2+d.sizeUnit},function(d){return""+d.ballSize+d.sizeUnit},function(d){return""+d.ballSize+d.sizeUnit},function(d){return d.color},function(d){return""+d.x+d.sizeUnit},function(d){return""+d.y+d.sizeUnit},function(d){return function(p){return(0,c.keyframes)(i,p.x,p.sizeUnit,p.y,p.sizeUnit)}(d)},function(d){return .1*d.index});_.defaultProps={loading:!0,size:30,color:"#00ff89",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MagicSpinner=void 0;var i=m([`
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
`],[`
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),s=m([`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid transparent;
    border-top-color: `,`;
    animation: `,` 2s cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid transparent;
    border-top-color: `,`;
    animation: `,` 2s cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.MagicSpinner=function(d){var p=d.size,g=d.color,v=d.loading,b=d.sizeUnit,I=p/12;return v&&a.default.createElement(E,{size:p,sizeUnit:b},function(x){for(var C=x.countBalls,T=x.color,P=x.size,A=x.sizeUnit,O=[],z=0;z<C;z++)O.push(a.default.createElement(w,{color:T,countBalls:C,size:P,key:z.toString(),index:z,sizeUnit:A}));return O}({countBalls:I,color:g,size:p,sizeUnit:b}))},E=f.default.div.withConfig({displayName:"magic__Wrapper",componentId:"dtlj8d-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit}),w=f.default.div.withConfig({displayName:"magic__Ball",componentId:"dtlj8d-1"})(s,function(d){return""+d.index*(d.size/d.countBalls)+d.sizeUnit},function(d){return""+d.index*(d.size/d.countBalls)+d.sizeUnit},function(d){return d.color},function(){return(0,c.keyframes)(i)},function(d){return .05*d.index});_.defaultProps={loading:!0,size:70,color:"#fff",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.JellyfishSpinner=void 0;var i=m([`
    0% {
        transform: `,`;
    }
    50% {
        transform: `,`;
    }
    100% {
        transform: `,`;
    }
`],[`
    0% {
        transform: `,`;
    }
    50% {
        transform: `,`;
    }
    100% {
        transform: `,`;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    width: `,`;
    height: `,`;
    border: 2px solid `,`;
    border-radius: 50%;
    background-color: transparent;
    animation: `,` 2.5s ease infinite;
    animation-delay: `,`ms;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    border: 2px solid `,`;
    border-radius: 50%;
    background-color: transparent;
    animation: `,` 2.5s ease infinite;
    animation-delay: `,`ms;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(d){return d&&d.__esModule?d:{default:d}}function m(d,p){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var _=n.JellyfishSpinner=function(d){var p=d.size,g=d.color,v=d.loading,b=d.sizeUnit;return v&&a.default.createElement(E,{size:p,sizeUnit:b},function(I){for(var x=I.countBalls,C=I.color,T=I.size,P=I.sizeUnit,A=[],O=0,z=0;z<x;z++)A.push(a.default.createElement(w,{color:C,size:T,countRings:x,key:O.toString(),index:z,sizeUnit:P})),O++;return A}({countBalls:6,color:g,size:p,sizeUnit:b}))},E=f.default.div.withConfig({displayName:"jellyfish__Wrapper",componentId:"qquojd-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit}),w=f.default.div.withConfig({displayName:"jellyfish__Ring",componentId:"qquojd-1"})(s,function(d){return""+d.index*(d.size/d.countRings)+d.sizeUnit},function(d){return""+d.index*(d.size/d.countRings)/2+d.sizeUnit},function(d){return d.color},function(d){return(0,c.keyframes)(i,"translateY("+-d.size/5+d.sizeUnit+");","translateY("+d.size/4+d.sizeUnit+")","translateY("+-d.size/5+d.sizeUnit+")")},function(d){return 100*d.index});_.defaultProps={loading:!0,size:60,color:"#4b4c56",sizeUnit:"px"},_.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.TraceSpinner=void 0;var i=E([`
    0% {
        border: `,""," solid ",`;
    }
    25% {
        border: `,""," solid ",`;
    }
    50% {
        border: `,""," solid ",`;
    }
    100% {
        border: `,""," solid ",`;
    }
`],[`
    0% {
        border: `,""," solid ",`;
    }
    25% {
        border: `,""," solid ",`;
    }
    50% {
        border: `,""," solid ",`;
    }
    100% {
        border: `,""," solid ",`;
    }
`]),o=E([`
    25% {
        transform: translate(`,"",`, 0);
    }
    50% {
        transform: translate(`,"",", ","",`);
    }
    75% {
        transform: translate(0, `,"",`);
    }
    100% {
        transform: translate(0, 0);
    }
`],[`
    25% {
        transform: translate(`,"",`, 0);
    }
    50% {
        transform: translate(`,"",", ","",`);
    }
    75% {
        transform: translate(0, `,"",`);
    }
    100% {
        transform: translate(0, 0);
    }
`]),s=E([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    transform: rotate(45deg);
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    transform: rotate(45deg);
`]),a=E([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: `," solid ",`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: `," solid ",`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    animation-delay: `,`s;
`]),l=E([`
    top: 0;
    left: 0;
    border-color: `,`;
    background-color: `,`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite;
    z-index: 10;
`],[`
    top: 0;
    left: 0;
    border-color: `,`;
    background-color: `,`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite;
    z-index: 10;
`]),c=_(r(0)),f=_(r(1)),h=r(2),m=_(h);function _(v){return v&&v.__esModule?v:{default:v}}function E(v,b){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(b)}}))}var w=n.TraceSpinner=function(v){var b=v.size,I=v.frontColor,x=v.backColor,C=v.loading,T=v.sizeUnit;return C&&c.default.createElement(d,{size:b,sizeUnit:T},function(P){for(var A=P.countBalls,O=P.frontColor,z=P.backColor,k=P.size,q=P.sizeUnit,j=[],G=[0,1,3,2],Y=0,V=0;V<A/2;V++)for(var W=0;W<A/2;W++)j.push(c.default.createElement(p,{frontColor:O,backColor:z,size:k,x:W*(k/2+k/10),y:V*(k/2+k/10),key:G[Y].toString(),index:G[Y],sizeUnit:q})),Y++;return j}({countBalls:4,frontColor:I,backColor:x,size:b,sizeUnit:T}),c.default.createElement(g,{frontColor:I,size:b,sizeUnit:T}))},d=m.default.div.withConfig({displayName:"trace__Wrapper",componentId:"k17r81-0"})(s,function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size+v.sizeUnit}),p=m.default.div.withConfig({displayName:"trace__Ball",componentId:"k17r81-1"})(a,function(v){return""+v.y+v.sizeUnit},function(v){return""+v.x+v.sizeUnit},function(v){return""+v.size/5+v.sizeUnit},function(v){return""+v.size/5+v.sizeUnit},function(v){return""+v.size/10+v.sizeUnit},function(v){return v.backColor},function(v){return(0,h.keyframes)(i,v.size/10,v.sizeUnit,v.backColor,v.size/10,v.sizeUnit,v.frontColor,v.size/10,v.sizeUnit,v.backColor,v.size/10,v.sizeUnit,v.backColor)},function(v){return 1*v.index}),g=(0,m.default)(p)(l,function(v){return v.frontColor},function(v){return v.frontColor},function(v){return(0,h.keyframes)(o,v.size/2+v.size/10,v.sizeUnit,v.size/2+v.size/10,v.sizeUnit,v.size/2+v.size/10,v.sizeUnit,v.size/2+v.size/10,v.sizeUnit)});w.defaultProps={loading:!0,size:35,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},w.propTypes={loading:f.default.bool,size:f.default.number,frontColor:f.default.string,backColor:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ClassicSpinner=void 0;var i=m([`
    0% {
        opacity: 1
    }
    100% { 
        opacity: 0;
    }
`],[`
    0% {
        opacity: 1
    }
    100% { 
        opacity: 0;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    opacity: 0.05;
    transform: `,`
        `,`;
    animation: `," ",`s linear infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    opacity: 0.05;
    transform: `,`
        `,`;
    animation: `," ",`s linear infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),c=r(2),f=h(c);function h(p){return p&&p.__esModule?p:{default:p}}function m(p,g){return Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(g)}}))}var _=(0,c.keyframes)(i),E=n.ClassicSpinner=function(p){var g=p.size,v=p.color,b=p.loading,I=p.sizeUnit,x=g/2;return b&&a.default.createElement(w,{size:g,sizeUnit:I},function(C){for(var T=C.countBars,P=C.color,A=C.size,O=C.barSize,z=C.sizeUnit,k=[],q=0;q<T;q++){var j=360/T*q,G=-A/2;k.push(a.default.createElement(d,{countBars:T,color:P,barSize:O,size:A,rotate:j,translate:G,key:q.toString(),index:q,sizeUnit:z}))}return k}({countBars:16,radius:x,color:v,size:g,sizeUnit:I}))},w=f.default.div.withConfig({displayName:"classic__Wrapper",componentId:"sc-1ycp7u6-0"})(o,function(p){return""+p.size+p.sizeUnit},function(p){return""+p.size+p.sizeUnit}),d=f.default.div.withConfig({displayName:"classic__Bar",componentId:"sc-1ycp7u6-1"})(s,function(p){return""+p.size/10+p.sizeUnit},function(p){return""+p.size/4+p.sizeUnit},function(p){return p.color},function(p){return"rotate("+p.rotate+"deg)"},function(p){return"translate(0, "+p.translate+p.sizeUnit+")"},_,function(p){return .06*p.countBars},function(p){return .06*p.index});E.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},E.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.WhisperSpinner=void 0;var i=_([`
    0% {
        transform: scale(1, 1);
        opacity: 1;
        background-color: `,`;
    }
    100% {
        transform: scale(0, 0);
        opacity: 0;
        background-color: `,`;
    }
`],[`
    0% {
        transform: scale(1, 1);
        opacity: 1;
        background-color: `,`;
    }
    100% {
        transform: scale(0, 0);
        opacity: 0;
        background-color: `,`;
    }
`]),o=_([`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
`]),s=_([`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 10s infinite;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 10s infinite;
`]),a=_([`
    float: left;
    clear: right;
    margin: `,`;
    width: `,`;
    height: `,`;
    border-radius: 2px;
    background-color: `,`;
    animation-name: `,`;
    animation-direction: alternate;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    &:nth-child(1) {
        animation-delay: 200ms;
    }
    &:nth-child(2) {
        animation-delay: 400ms;
    }
    &:nth-child(3) {
        animation-delay: 600ms;
    }
    &:nth-child(4) {
        animation-delay: 400ms;
    }
    &:nth-child(5) {
        animation-delay: 600ms;
    }
    &:nth-child(6) {
        animation-delay: 800ms;
    }
    &:nth-child(7) {
        animation-delay: 600ms;
    }
    &:nth-child(8) {
        animation-delay: 800ms;
    }
    &:nth-child(9) {
        animation-delay: 1s;
    }
`],[`
    float: left;
    clear: right;
    margin: `,`;
    width: `,`;
    height: `,`;
    border-radius: 2px;
    background-color: `,`;
    animation-name: `,`;
    animation-direction: alternate;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    &:nth-child(1) {
        animation-delay: 200ms;
    }
    &:nth-child(2) {
        animation-delay: 400ms;
    }
    &:nth-child(3) {
        animation-delay: 600ms;
    }
    &:nth-child(4) {
        animation-delay: 400ms;
    }
    &:nth-child(5) {
        animation-delay: 600ms;
    }
    &:nth-child(6) {
        animation-delay: 800ms;
    }
    &:nth-child(7) {
        animation-delay: 600ms;
    }
    &:nth-child(8) {
        animation-delay: 800ms;
    }
    &:nth-child(9) {
        animation-delay: 1s;
    }
`]),l=m(r(0)),c=m(r(1)),f=r(2),h=m(f);function m(p){return p&&p.__esModule?p:{default:p}}function _(p,g){return Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(g)}}))}var E=n.WhisperSpinner=function(p){var g=p.size,v=p.frontColor,b=p.backColor,I=p.loading,x=p.sizeUnit;return I&&l.default.createElement(w,{size:g,sizeUnit:x},function(C){for(var T=C.countBallsInLine,P=C.frontColor,A=C.backColor,O=C.size,z=C.sizeUnit,k=[],q=0,j=0;j<T;j++)for(var G=0;G<T;G++)k.push(l.default.createElement(d,{frontColor:P,backColor:A,size:O,key:q.toString(),index:q,sizeUnit:z})),q++;return k}({countBallsInLine:3,frontColor:v,backColor:b,size:g,sizeUnit:x}))},w=h.default.div.withConfig({displayName:"whisper__Wrapper",componentId:"k8uff3-0"})(s,function(p){return""+p.size+p.sizeUnit},function(p){return""+p.size+p.sizeUnit},function(){return(0,f.keyframes)(o)}),d=h.default.div.withConfig({displayName:"whisper__Ball",componentId:"k8uff3-1"})(a,function(p){return""+p.size/15+p.sizeUnit},function(p){return""+p.size/5+p.sizeUnit},function(p){return""+p.size/5+p.sizeUnit},function(p){return p.frontColor},function(p){return(0,f.keyframes)(i,p.backColor,p.frontColor)});E.defaultProps={loading:!0,size:50,frontColor:"#4b4c56",backColor:"#00ff89",sizeUnit:"px"},E.propTypes={loading:c.default.bool,size:c.default.number,frontColor:c.default.string,backColor:c.default.string,sizeUnit:c.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MetroSpinner=void 0;var i=_([`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(-360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(-360deg);
    }
`]),o=_([`
    `,`% {
        opacity: 0;
    }
    `,`% {
        opacity: 1;
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    100% {
        transform: `,`;
        opacity: 1;
    }
`],[`
    `,`% {
        opacity: 0;
    }
    `,`% {
        opacity: 1;
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    100% {
        transform: `,`;
        opacity: 1;
    }
`]),s=_([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 3s infinite ease-in;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 3s infinite ease-in;
`]),a=_([`
    position: absolute;
    width: `,`;
    height: `,`;
    animation: `,` 2s infinite linear;
    transform: `,`;
    opacity: 0;
    &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0%;
        width: `,`;
        height: `,`;
        background-color: `,`;
        transform: translateX(-50%);
        border-radius: 50%;
    }
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    animation: `,` 2s infinite linear;
    transform: `,`;
    opacity: 0;
    &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0%;
        width: `,`;
        height: `,`;
        background-color: `,`;
        transform: translateX(-50%);
        border-radius: 50%;
    }
`]),l=m(r(0)),c=m(r(1)),f=r(2),h=m(f);function m(g){return g&&g.__esModule?g:{default:g}}function _(g,v){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(v)}}))}var E=(0,f.keyframes)(i),w=n.MetroSpinner=function(g){var v=g.size,b=g.color,I=g.loading,x=g.sizeUnit,C=v/2,T=v/8;return I&&l.default.createElement(d,{size:v,sizeUnit:x},function(P){for(var A=P.countBalls,O=P.radius,z=P.angle,k=P.color,q=P.size,j=P.ballSize,G=P.sizeUnit,Y=[],V=j/2,W=0;W<A;W++){var X=Math.sin(z*W*(Math.PI/180))*O-V,le=Math.cos(z*W*(Math.PI/180))*O-V;Y.push(l.default.createElement(p,{countBalls:A,color:k,ballSize:j,size:q,sizeUnit:G,x:X,y:le,key:W.toString(),index:W+1}))}return Y}({countBalls:9,radius:C,angle:40,color:b,size:v,ballSize:T,sizeUnit:x}))},d=h.default.div.withConfig({displayName:"metro__Wrapper",componentId:"sc-2iqssn-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit},E),p=h.default.div.withConfig({displayName:"metro__Ball",componentId:"sc-2iqssn-1"})(a,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit},function(g){return(0,f.keyframes)(o,g.size/2/g.countBalls*(g.index-1)/g.size*100,(g.size/2/g.countBalls+1e-4)*(g.index-1)/g.size*100,"rotate("+(0-360/g.countBalls*(g.index-2))+"deg)",(g.size/2/g.countBalls*(g.index-0)+2)/g.size*100,"rotate("+(0-360/g.countBalls*(g.index-1))+"deg)",(g.size/2+g.size/2/g.countBalls*(g.index-0)+2)/g.size*100,"rotate("+(0-360/g.countBalls*(g.index-1))+"deg)","rotate("+(0-360/g.countBalls*(g.countBalls-1))+"deg)")},function(g){return"rotate("+360/g.countBalls*g.index+"deg)"},function(g){return""+g.ballSize+g.sizeUnit},function(g){return""+g.ballSize+g.sizeUnit},function(g){return""+g.color});w.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},w.propTypes={loading:c.default.bool,size:c.default.number,color:c.default.string,sizeUnit:c.default.string}}]))})(Ub);function qx(){return ee.jsx("div",{className:"h-[100vh] w-full flex justify-center items-center bg-black-100",children:ee.jsx(Ub.GooSpinner,{size:60,color:"#ED7534",loading:!0})})}function oI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=oI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Li(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=oI(t))&&(r&&(r+=" "),r+=e);return r}const Tl=t=>typeof t=="number"&&!isNaN(t),Xo=t=>typeof t=="string",cn=t=>typeof t=="function",$c=t=>Xo(t)||cn(t)?t:null,zp=t=>U.isValidElement(t)||Xo(t)||cn(t)||Tl(t);function Hx(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function eh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:l,preventExitTransition:c,done:f,nodeRef:h,isIn:m}=s;const _=r?`${e}--${l}`:e,E=r?`${n}--${l}`:n,w=U.useRef(0);return U.useLayoutEffect(()=>{const d=h.current,p=_.split(" "),g=v=>{v.target===h.current&&(d.dispatchEvent(new Event("d")),d.removeEventListener("animationend",g),d.removeEventListener("animationcancel",g),w.current===0&&v.type!=="animationcancel"&&d.classList.remove(...p))};d.classList.add(...p),d.addEventListener("animationend",g),d.addEventListener("animationcancel",g)},[]),U.useEffect(()=>{const d=h.current,p=()=>{d.removeEventListener("animationend",p),i?Hx(d,f,o):f()};m||(c?p():(w.current=1,d.className+=` ${E}`,d.addEventListener("animationend",p)))},[m]),pe.createElement(pe.Fragment,null,a)}}function n1(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Fn={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},Sc=t=>{let{theme:e,type:n,...r}=t;return pe.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},xp={info:function(t){return pe.createElement(Sc,{...t},pe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return pe.createElement(Sc,{...t},pe.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return pe.createElement(Sc,{...t},pe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return pe.createElement(Sc,{...t},pe.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return pe.createElement("div",{className:"Toastify__spinner"})}};function Kx(t){const[,e]=U.useReducer(_=>_+1,0),[n,r]=U.useState([]),i=U.useRef(null),o=U.useRef(new Map).current,s=_=>n.indexOf(_)!==-1,a=U.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:_=>o.get(_)}).current;function l(_){let{containerId:E}=_;const{limit:w}=a.props;!w||E&&a.containerId!==E||(a.count-=a.queue.length,a.queue=[])}function c(_){r(E=>_==null?[]:E.filter(w=>w!==_))}function f(){const{toastContent:_,toastProps:E,staleId:w}=a.queue.shift();m(_,E,w)}function h(_,E){let{delay:w,staleId:d,...p}=E;if(!zp(_)||function(z){return!i.current||a.props.enableMultiContainer&&z.containerId!==a.props.containerId||o.has(z.toastId)&&z.updateId==null}(p))return;const{toastId:g,updateId:v,data:b}=p,{props:I}=a,x=()=>c(g),C=v==null;C&&a.count++;const T={...I,style:I.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(p).filter(z=>{let[k,q]=z;return q!=null})),toastId:g,updateId:v,data:b,closeToast:x,isIn:!1,className:$c(p.className||I.toastClassName),bodyClassName:$c(p.bodyClassName||I.bodyClassName),progressClassName:$c(p.progressClassName||I.progressClassName),autoClose:!p.isLoading&&(P=p.autoClose,A=I.autoClose,P===!1||Tl(P)&&P>0?P:A),deleteToast(){const z=n1(o.get(g),"removed");o.delete(g),Fn.emit(4,z);const k=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),k>0){const q=g==null?a.props.limit:1;if(k===1||q===1)a.displayedToast++,f();else{const j=q>k?k:q;a.displayedToast=j;for(let G=0;G<j;G++)f()}}else e()}};var P,A;T.iconOut=function(z){let{theme:k,type:q,isLoading:j,icon:G}=z,Y=null;const V={theme:k,type:q};return G===!1||(cn(G)?Y=G(V):U.isValidElement(G)?Y=U.cloneElement(G,V):Xo(G)||Tl(G)?Y=G:j?Y=xp.spinner():(W=>W in xp)(q)&&(Y=xp[q](V))),Y}(T),cn(p.onOpen)&&(T.onOpen=p.onOpen),cn(p.onClose)&&(T.onClose=p.onClose),T.closeButton=I.closeButton,p.closeButton===!1||zp(p.closeButton)?T.closeButton=p.closeButton:p.closeButton===!0&&(T.closeButton=!zp(I.closeButton)||I.closeButton);let O=_;U.isValidElement(_)&&!Xo(_.type)?O=U.cloneElement(_,{closeToast:x,toastProps:T,data:b}):cn(_)&&(O=_({closeToast:x,toastProps:T,data:b})),I.limit&&I.limit>0&&a.count>I.limit&&C?a.queue.push({toastContent:O,toastProps:T,staleId:d}):Tl(w)?setTimeout(()=>{m(O,T,d)},w):m(O,T,d)}function m(_,E,w){const{toastId:d}=E;w&&o.delete(w);const p={content:_,props:E};o.set(d,p),r(g=>[...g,d].filter(v=>v!==w)),Fn.emit(4,n1(p,p.props.updateId==null?"added":"updated"))}return U.useEffect(()=>(a.containerId=t.containerId,Fn.cancelEmit(3).on(0,h).on(1,_=>i.current&&c(_)).on(5,l).emit(2,a),()=>{o.clear(),Fn.emit(3,a)}),[]),U.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(_){const E=new Map,w=Array.from(o.values());return t.newestOnTop&&w.reverse(),w.forEach(d=>{const{position:p}=d.props;E.has(p)||E.set(p,[]),E.get(p).push(d)}),Array.from(E,d=>_(d[0],d[1]))},containerRef:i,isToastActive:s}}function r1(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function i1(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function Gx(t){const[e,n]=U.useState(!1),[r,i]=U.useState(!1),o=U.useRef(null),s=U.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=U.useRef(t),{autoClose:l,pauseOnHover:c,closeToast:f,onClick:h,closeOnClick:m}=t;function _(b){if(t.draggable){b.nativeEvent.type==="touchstart"&&b.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",p),document.addEventListener("mouseup",g),document.addEventListener("touchmove",p),document.addEventListener("touchend",g);const I=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=I.getBoundingClientRect(),I.style.transition="",s.x=r1(b.nativeEvent),s.y=i1(b.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=I.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=I.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function E(b){if(s.boundingRect){const{top:I,bottom:x,left:C,right:T}=s.boundingRect;b.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=C&&s.x<=T&&s.y>=I&&s.y<=x?d():w()}}function w(){n(!0)}function d(){n(!1)}function p(b){const I=o.current;s.canDrag&&I&&(s.didMove=!0,e&&d(),s.x=r1(b),s.y=i1(b),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),I.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,I.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",g);const b=o.current;if(s.canDrag&&s.didMove&&b){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();b.style.transition="transform 0.2s, opacity 0.2s",b.style.transform=`translate${t.draggableDirection}(0)`,b.style.opacity="1"}}U.useEffect(()=>{a.current=t}),U.useEffect(()=>(o.current&&o.current.addEventListener("d",w,{once:!0}),cn(t.onOpen)&&t.onOpen(U.isValidElement(t.children)&&t.children.props),()=>{const b=a.current;cn(b.onClose)&&b.onClose(U.isValidElement(b.children)&&b.children.props)}),[]),U.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||d(),window.addEventListener("focus",w),window.addEventListener("blur",d)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",w),window.removeEventListener("blur",d))}),[t.pauseOnFocusLoss]);const v={onMouseDown:_,onTouchStart:_,onMouseUp:E,onTouchEnd:E};return l&&c&&(v.onMouseEnter=d,v.onMouseLeave=w),m&&(v.onClick=b=>{h&&h(b),s.canCloseOnClick&&f()}),{playToast:w,pauseToast:d,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:v}}function sI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return pe.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},pe.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},pe.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Yx(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:c,rtl:f,isIn:h,theme:m}=t;const _=o||l&&c===0,E={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:_?0:1};l&&(E.transform=`scaleX(${c})`);const w=Li("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),d=cn(s)?s({rtl:f,type:i,defaultClassName:w}):Li(w,s);return pe.createElement("div",{role:"progressbar","aria-hidden":_?"true":"false","aria-label":"notification timer",className:d,style:E,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{h&&r()}})}const Qx=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=Gx(t),{closeButton:o,children:s,autoClose:a,onClick:l,type:c,hideProgressBar:f,closeToast:h,transition:m,position:_,className:E,style:w,bodyClassName:d,bodyStyle:p,progressClassName:g,progressStyle:v,updateId:b,role:I,progress:x,rtl:C,toastId:T,deleteToast:P,isIn:A,isLoading:O,iconOut:z,closeOnClick:k,theme:q}=t,j=Li("Toastify__toast",`Toastify__toast-theme--${q}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":k}),G=cn(E)?E({rtl:C,position:_,type:c,defaultClassName:j}):Li(j,E),Y=!!x||!a,V={closeToast:h,type:c,theme:q};let W=null;return o===!1||(W=cn(o)?o(V):U.isValidElement(o)?U.cloneElement(o,V):sI(V)),pe.createElement(m,{isIn:A,done:P,position:_,preventExitTransition:n,nodeRef:r},pe.createElement("div",{id:T,onClick:l,className:G,...i,style:w,ref:r},pe.createElement("div",{...A&&{role:I},className:cn(d)?d({type:c}):Li("Toastify__toast-body",d),style:p},z!=null&&pe.createElement("div",{className:Li("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},z),pe.createElement("div",null,s)),W,pe.createElement(Yx,{...b&&!Y?{key:`pb-${b}`}:{},rtl:C,theme:q,delay:a,isRunning:e,isIn:A,closeToast:h,hide:f,type:c,style:v,className:g,controlledProgress:Y,progress:x||0})))},th=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},Xx=eh(th("bounce",!0));eh(th("slide",!0));eh(th("zoom"));eh(th("flip"));const Tg=U.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=Kx(t),{className:o,style:s,rtl:a,containerId:l}=t;function c(f){const h=Li("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return cn(o)?o({position:f,rtl:a,defaultClassName:h}):Li(h,$c(o))}return U.useEffect(()=>{e&&(e.current=r.current)},[]),pe.createElement("div",{ref:r,className:"Toastify",id:l},n((f,h)=>{const m=h.length?{...s}:{...s,pointerEvents:"none"};return pe.createElement("div",{className:c(f),style:m,key:`container-${f}`},h.map((_,E)=>{let{content:w,props:d}=_;return pe.createElement(Qx,{...d,isIn:i(d.toastId),style:{...d.style,"--nth":E+1,"--len":h.length},key:`toast-${d.key}`},w)}))}))});Tg.displayName="ToastContainer",Tg.defaultProps={position:"top-right",transition:Xx,autoClose:5e3,closeButton:sI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Np,zo=new Map,sl=[],Jx=1;function aI(){return""+Jx++}function Zx(t){return t&&(Xo(t.toastId)||Tl(t.toastId))?t.toastId:aI()}function bl(t,e){return zo.size>0?Fn.emit(0,t,e):sl.push({content:t,options:e}),e.toastId}function Gd(t,e){return{...e,type:e&&e.type||t,toastId:Zx(e)}}function Tc(t){return(e,n)=>bl(e,Gd(t,n))}function Ke(t,e){return bl(t,Gd("default",e))}Ke.loading=(t,e)=>bl(t,Gd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Ke.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=Xo(i)?Ke.loading(i,n):Ke.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(f,h,m)=>{if(h==null)return void Ke.dismiss(r);const _={type:f,...a,...n,data:m},E=Xo(h)?{render:h}:h;return r?Ke.update(r,{..._,...E}):Ke(E.render,{..._,...E}),m},c=cn(t)?t():t;return c.then(f=>l("success",s,f)).catch(f=>l("error",o,f)),c},Ke.success=Tc("success"),Ke.info=Tc("info"),Ke.error=Tc("error"),Ke.warning=Tc("warning"),Ke.warn=Ke.warning,Ke.dark=(t,e)=>bl(t,Gd("default",{theme:"dark",...e})),Ke.dismiss=t=>{zo.size>0?Fn.emit(1,t):sl=sl.filter(e=>t!=null&&e.options.toastId!==t)},Ke.clearWaitingQueue=function(t){return t===void 0&&(t={}),Fn.emit(5,t)},Ke.isActive=t=>{let e=!1;return zo.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Ke.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=zo.get(o||Np);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:aI()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,bl(s,o)}},0)},Ke.done=t=>{Ke.update(t,{progress:1})},Ke.onChange=t=>(Fn.on(4,t),()=>{Fn.off(4,t)}),Ke.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Ke.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Fn.on(2,t=>{Np=t.containerId||t,zo.set(Np,t),sl.forEach(e=>{Fn.emit(0,e.content,e.options)}),sl=[]}).on(3,t=>{zo.delete(t.containerId||t),zo.size===0&&Fn.off(0).off(1).off(5)});const ze={url:{}.VITE_APP_URL};function fr(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ro(t){return!!t&&!!t[Ge]}function di(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===l2}(t)||Array.isArray(t)||!!t[d1]||!!(!((e=t.constructor)===null||e===void 0)&&e[d1])||Av(t)||Rv(t))}function Jo(t,e,n){n===void 0&&(n=!1),Pa(t)===0?(n?Object.keys:Zs)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function Pa(t){var e=t[Ge];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Av(t)?2:Rv(t)?3:0}function Js(t,e){return Pa(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function e2(t,e){return Pa(t)===2?t.get(e):t[e]}function lI(t,e,n){var r=Pa(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function uI(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Av(t){return s2&&t instanceof Map}function Rv(t){return a2&&t instanceof Set}function xo(t){return t.o||t.t}function kv(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=dI(t);delete e[Ge];for(var n=Zs(e),r=0;r<n.length;r++){var i=n[r],o=e[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(e[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Ov(t,e){return e===void 0&&(e=!1),zv(t)||ro(t)||!di(t)||(Pa(t)>1&&(t.set=t.add=t.clear=t.delete=t2),Object.freeze(t),e&&Jo(t,function(n,r){return Ov(r,!0)},!0)),t}function t2(){fr(2)}function zv(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function zr(t){var e=Pg[t];return e||fr(18,t),e}function n2(t,e){Pg[t]||(Pg[t]=e)}function bg(){return Zl}function Up(t,e){e&&(zr("Patches"),t.u=[],t.s=[],t.v=e)}function Yd(t){Ig(t),t.p.forEach(r2),t.p=null}function Ig(t){t===Zl&&(Zl=t.l)}function o1(t){return Zl={p:[],l:Zl,h:t,m:!0,_:0}}function r2(t){var e=t[Ge];e.i===0||e.i===1?e.j():e.g=!0}function Dp(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||zr("ES5").S(e,t,r),r?(n[Ge].P&&(Yd(e),fr(4)),di(t)&&(t=Qd(e,t),e.l||Xd(e,t)),e.u&&zr("Patches").M(n[Ge].t,t,e.u,e.s)):t=Qd(e,n,[]),Yd(e),e.u&&e.v(e.u,e.s),t!==cI?t:void 0}function Qd(t,e,n){if(zv(e))return e;var r=e[Ge];if(!r)return Jo(e,function(a,l){return s1(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Xd(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=kv(r.k):r.o,o=i,s=!1;r.i===3&&(o=new Set(i),i.clear(),s=!0),Jo(o,function(a,l){return s1(t,r,i,a,l,n,s)}),Xd(t,i,!1),n&&t.u&&zr("Patches").N(r,n,t.u,t.s)}return r.o}function s1(t,e,n,r,i,o,s){if(ro(i)){var a=Qd(t,i,o&&e&&e.i!==3&&!Js(e.R,r)?o.concat(r):void 0);if(lI(n,r,a),!ro(a))return;t.m=!1}else s&&n.add(i);if(di(i)&&!zv(i)){if(!t.h.D&&t._<1)return;Qd(t,i),e&&e.A.l||Xd(t,i)}}function Xd(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&Ov(e,n)}function Mp(t,e){var n=t[Ge];return(n?xo(n):t)[e]}function a1(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Oi(t){t.P||(t.P=!0,t.l&&Oi(t.l))}function Lp(t){t.o||(t.o=kv(t.t))}function Cg(t,e,n){var r=Av(e)?zr("MapSet").F(e,n):Rv(e)?zr("MapSet").T(e,n):t.O?function(i,o){var s=Array.isArray(i),a={i:s?1:0,A:o?o.A:bg(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=a,c=eu;s&&(l=[a],c=al);var f=Proxy.revocable(l,c),h=f.revoke,m=f.proxy;return a.k=m,a.j=h,m}(e,n):zr("ES5").J(e,n);return(n?n.A:bg()).p.push(r),r}function i2(t){return ro(t)||fr(22,t),function e(n){if(!di(n))return n;var r,i=n[Ge],o=Pa(n);if(i){if(!i.P&&(i.i<4||!zr("ES5").K(i)))return i.t;i.I=!0,r=l1(n,o),i.I=!1}else r=l1(n,o);return Jo(r,function(s,a){i&&e2(i.t,s)===a||lI(r,s,e(a))}),o===3?new Set(r):r}(t)}function l1(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return kv(t)}function o2(){function t(o,s){var a=i[o];return a?a.enumerable=s:i[o]=a={configurable:!0,enumerable:s,get:function(){var l=this[Ge];return eu.get(l,o)},set:function(l){var c=this[Ge];eu.set(c,o,l)}},a}function e(o){for(var s=o.length-1;s>=0;s--){var a=o[s][Ge];if(!a.P)switch(a.i){case 5:r(a)&&Oi(a);break;case 4:n(a)&&Oi(a)}}}function n(o){for(var s=o.t,a=o.k,l=Zs(a),c=l.length-1;c>=0;c--){var f=l[c];if(f!==Ge){var h=s[f];if(h===void 0&&!Js(s,f))return!0;var m=a[f],_=m&&m[Ge];if(_?_.t!==h:!uI(m,h))return!0}}var E=!!s[Ge];return l.length!==Zs(s).length+(E?0:1)}function r(o){var s=o.k;if(s.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(s,s.length-1);if(a&&!a.get)return!0;for(var l=0;l<s.length;l++)if(!s.hasOwnProperty(l))return!0;return!1}var i={};n2("ES5",{J:function(o,s){var a=Array.isArray(o),l=function(f,h){if(f){for(var m=Array(h.length),_=0;_<h.length;_++)Object.defineProperty(m,""+_,t(_,!0));return m}var E=dI(h);delete E[Ge];for(var w=Zs(E),d=0;d<w.length;d++){var p=w[d];E[p]=t(p,f||!!E[p].enumerable)}return Object.create(Object.getPrototypeOf(h),E)}(a,o),c={i:a?5:4,A:s?s.A:bg(),P:!1,I:!1,R:{},l:s,t:o,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Ge,{value:c,writable:!0}),l},S:function(o,s,a){a?ro(s)&&s[Ge].A===o&&e(o.p):(o.u&&function l(c){if(c&&typeof c=="object"){var f=c[Ge];if(f){var h=f.t,m=f.k,_=f.R,E=f.i;if(E===4)Jo(m,function(v){v!==Ge&&(h[v]!==void 0||Js(h,v)?_[v]||l(m[v]):(_[v]=!0,Oi(f)))}),Jo(h,function(v){m[v]!==void 0||Js(m,v)||(_[v]=!1,Oi(f))});else if(E===5){if(r(f)&&(Oi(f),_.length=!0),m.length<h.length)for(var w=m.length;w<h.length;w++)_[w]=!1;else for(var d=h.length;d<m.length;d++)_[d]=!0;for(var p=Math.min(m.length,h.length),g=0;g<p;g++)m.hasOwnProperty(g)||(_[g]=!0),_[g]===void 0&&l(m[g])}}}}(o.p[0]),e(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var u1,Zl,xv=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",s2=typeof Map<"u",a2=typeof Set<"u",c1=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",cI=xv?Symbol.for("immer-nothing"):((u1={})["immer-nothing"]=!0,u1),d1=xv?Symbol.for("immer-draftable"):"__$immer_draftable",Ge=xv?Symbol.for("immer-state"):"__$immer_state",l2=""+Object.prototype.constructor,Zs=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,dI=Object.getOwnPropertyDescriptors||function(t){var e={};return Zs(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Pg={},eu={get:function(t,e){if(e===Ge)return t;var n=xo(t);if(!Js(n,e))return function(i,o,s){var a,l=a1(o,s);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!di(r)?r:r===Mp(t.t,e)?(Lp(t),t.o[e]=Cg(t.A.h,r,t)):r},has:function(t,e){return e in xo(t)},ownKeys:function(t){return Reflect.ownKeys(xo(t))},set:function(t,e,n){var r=a1(xo(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Mp(xo(t),e),o=i==null?void 0:i[Ge];if(o&&o.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(uI(n,i)&&(n!==void 0||Js(t.t,e)))return!0;Lp(t),Oi(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return Mp(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,Lp(t),Oi(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=xo(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){fr(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){fr(12)}},al={};Jo(eu,function(t,e){al[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),al.deleteProperty=function(t,e){return al.set.call(this,t,e,void 0)},al.set=function(t,e,n){return eu.set.call(this,t[0],e,n,t[0])};var u2=function(){function t(n){var r=this;this.O=c1,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var l=r;return function(w){var d=this;w===void 0&&(w=a);for(var p=arguments.length,g=Array(p>1?p-1:0),v=1;v<p;v++)g[v-1]=arguments[v];return l.produce(w,function(b){var I;return(I=o).call.apply(I,[d,b].concat(g))})}}var c;if(typeof o!="function"&&fr(6),s!==void 0&&typeof s!="function"&&fr(7),di(i)){var f=o1(r),h=Cg(r,i,void 0),m=!0;try{c=o(h),m=!1}finally{m?Yd(f):Ig(f)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(w){return Up(f,s),Dp(w,f)},function(w){throw Yd(f),w}):(Up(f,s),Dp(c,f))}if(!i||typeof i!="object"){if((c=o(i))===void 0&&(c=i),c===cI&&(c=void 0),r.D&&Ov(c,!0),s){var _=[],E=[];zr("Patches").M(i,c,_,E),s(_,E)}return c}fr(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(c){for(var f=arguments.length,h=Array(f>1?f-1:0),m=1;m<f;m++)h[m-1]=arguments[m];return r.produceWithPatches(c,function(_){return i.apply(void 0,[_].concat(h))})};var s,a,l=r.produce(i,o,function(c,f){s=c,a=f});return typeof Promise<"u"&&l instanceof Promise?l.then(function(c){return[c,s,a]}):[l,s,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){di(n)||fr(8),ro(n)&&(n=i2(n));var r=o1(this),i=Cg(this,n,void 0);return i[Ge].C=!0,Ig(r),i},e.finishDraft=function(n,r){var i=n&&n[Ge],o=i.A;return Up(o,r),Dp(void 0,o)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!c1&&fr(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=zr("Patches").$;return ro(n)?s(n,r):this.produce(n,function(a){return s(a,r)})},t}(),On=new u2,fI=On.produce;On.produceWithPatches.bind(On);On.setAutoFreeze.bind(On);On.setUseProxies.bind(On);On.applyPatches.bind(On);On.createDraft.bind(On);On.finishDraft.bind(On);function tu(t){"@babel/helpers - typeof";return tu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tu(t)}function c2(t,e){if(tu(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(tu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function d2(t){var e=c2(t,"string");return tu(e)=="symbol"?e:e+""}function f2(t,e,n){return(e=d2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function h1(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?f1(Object(n),!0).forEach(function(r){f2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ht(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var p1=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Vp=function(){return Math.random().toString(36).substring(7).split("").join(".")},Jd={INIT:"@@redux/INIT"+Vp(),REPLACE:"@@redux/REPLACE"+Vp(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Vp()}};function h2(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Nv(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ht(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ht(1));return n(Nv)(t,e)}if(typeof t!="function")throw new Error(Ht(2));var i=t,o=e,s=[],a=s,l=!1;function c(){a===s&&(a=s.slice())}function f(){if(l)throw new Error(Ht(3));return o}function h(w){if(typeof w!="function")throw new Error(Ht(4));if(l)throw new Error(Ht(5));var d=!0;return c(),a.push(w),function(){if(d){if(l)throw new Error(Ht(6));d=!1,c();var g=a.indexOf(w);a.splice(g,1),s=null}}}function m(w){if(!h2(w))throw new Error(Ht(7));if(typeof w.type>"u")throw new Error(Ht(8));if(l)throw new Error(Ht(9));try{l=!0,o=i(o,w)}finally{l=!1}for(var d=s=a,p=0;p<d.length;p++){var g=d[p];g()}return w}function _(w){if(typeof w!="function")throw new Error(Ht(10));i=w,m({type:Jd.REPLACE})}function E(){var w,d=h;return w={subscribe:function(g){if(typeof g!="object"||g===null)throw new Error(Ht(11));function v(){g.next&&g.next(f())}v();var b=d(v);return{unsubscribe:b}}},w[p1]=function(){return this},w}return m({type:Jd.INIT}),r={dispatch:m,subscribe:h,getState:f,replaceReducer:_},r[p1]=E,r}function p2(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Jd.INIT});if(typeof r>"u")throw new Error(Ht(12));if(typeof n(void 0,{type:Jd.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ht(13))})}function hI(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var o=Object.keys(n),s;try{p2(n)}catch(a){s=a}return function(l,c){if(l===void 0&&(l={}),s)throw s;for(var f=!1,h={},m=0;m<o.length;m++){var _=o[m],E=n[_],w=l[_],d=E(w,c);if(typeof d>"u")throw c&&c.type,new Error(Ht(14));h[_]=d,f=f||d!==w}return f=f||o.length!==Object.keys(l).length,f?h:l}}function Zd(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function m2(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(Ht(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=e.map(function(l){return l(s)});return o=Zd.apply(void 0,a)(i.dispatch),h1(h1({},i),{},{dispatch:o})}}}function pI(t){var e=function(r){var i=r.dispatch,o=r.getState;return function(s){return function(a){return typeof a=="function"?a(i,o,t):s(a)}}};return e}var mI=pI();mI.withExtraArgument=pI;const Ag=mI;var gI=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),g2=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(f){return l([c,f])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(f){c=[6,f],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},ha=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},y2=Object.defineProperty,v2=Object.defineProperties,_2=Object.getOwnPropertyDescriptors,m1=Object.getOwnPropertySymbols,w2=Object.prototype.hasOwnProperty,E2=Object.prototype.propertyIsEnumerable,g1=function(t,e,n){return e in t?y2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},Yi=function(t,e){for(var n in e||(e={}))w2.call(e,n)&&g1(t,n,e[n]);if(m1)for(var r=0,i=m1(e);r<i.length;r++){var n=i[r];E2.call(e,n)&&g1(t,n,e[n])}return t},jp=function(t,e){return v2(t,_2(e))},S2=function(t,e,n){return new Promise(function(r,i){var o=function(l){try{a(n.next(l))}catch(c){i(c)}},s=function(l){try{a(n.throw(l))}catch(c){i(c)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,s)};a((n=n.apply(t,e)).next())})},T2=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Zd:Zd.apply(null,arguments)};function b2(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}function Qi(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var o=e.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Yi(Yi({type:t,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}var I2=function(t){gI(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,ha([void 0],n[0].concat(this)))):new(e.bind.apply(e,ha([void 0],n.concat(this))))},e}(Array),C2=function(t){gI(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,ha([void 0],n[0].concat(this)))):new(e.bind.apply(e,ha([void 0],n.concat(this))))},e}(Array);function Rg(t){return di(t)?fI(t,function(){}):t}function P2(t){return typeof t=="boolean"}function A2(){return function(e){return yI(e)}}function yI(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck,t.actionCreatorCheck;var r=new I2;return n&&(P2(n)?r.push(Ag):r.push(Ag.withExtraArgument(n.extraArgument))),r}var R2=!0;function k2(t){var e=A2(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,s=o===void 0?e():o,a=n.devTools,l=a===void 0?!0:a,c=n.preloadedState,f=c===void 0?void 0:c,h=n.enhancers,m=h===void 0?void 0:h,_;if(typeof i=="function")_=i;else if(b2(i))_=hI(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var E=s;typeof E=="function"&&(E=E(e));var w=m2.apply(void 0,E),d=Zd;l&&(d=T2(Yi({trace:!R2},typeof l=="object"&&l)));var p=new C2(w),g=p;Array.isArray(m)?g=ha([w],m):typeof m=="function"&&(g=m(p));var v=d.apply(void 0,g);return Nv(_,f,v)}function vI(t){var e={},n=[],r,i={addCase:function(o,s){var a=typeof o=="string"?o:o.type;if(!a)throw new Error("`builder.addCase` cannot be called with an empty action type");if(a in e)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return e[a]=s,i},addMatcher:function(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return r=o,i}};return t(i),[e,n,r]}function O2(t){return typeof t=="function"}function z2(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?vI(e):[e,n,r],o=i[0],s=i[1],a=i[2],l;if(O2(t))l=function(){return Rg(t())};else{var c=Rg(t);l=function(){return c}}function f(h,m){h===void 0&&(h=l());var _=ha([o[m.type]],s.filter(function(E){var w=E.matcher;return w(m)}).map(function(E){var w=E.reducer;return w}));return _.filter(function(E){return!!E}).length===0&&(_=[a]),_.reduce(function(E,w){if(w)if(ro(E)){var d=E,p=w(d,m);return p===void 0?E:p}else{if(di(E))return fI(E,function(g){return w(g,m)});var p=w(E,m);if(p===void 0){if(E===null)return E;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return E},h)}return f.getInitialState=l,f}function x2(t,e){return t+"/"+e}function Jn(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:Rg(t.initialState),r=t.reducers||{},i=Object.keys(r),o={},s={},a={};i.forEach(function(f){var h=r[f],m=x2(e,f),_,E;"reducer"in h?(_=h.reducer,E=h.prepare):_=h,o[f]=_,s[m]=_,a[f]=E?Qi(m,E):Qi(m)});function l(){var f=typeof t.extraReducers=="function"?vI(t.extraReducers):[t.extraReducers],h=f[0],m=h===void 0?{}:h,_=f[1],E=_===void 0?[]:_,w=f[2],d=w===void 0?void 0:w,p=Yi(Yi({},m),s);return z2(n,function(g){for(var v in p)g.addCase(v,p[v]);for(var b=0,I=E;b<I.length;b++){var x=I[b];g.addMatcher(x.matcher,x.reducer)}d&&g.addDefaultCase(d)})}var c;return{name:e,reducer:function(f,h){return c||(c=l()),c(f,h)},actions:a,caseReducers:o,getInitialState:function(){return c||(c=l()),c.getInitialState()}}}var N2="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",U2=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=N2[Math.random()*64|0];return e},D2=["name","message","stack","code"],Fp=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),y1=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),M2=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=D2;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}},xe=function(){function t(e,n,r){var i=Qi(e+"/fulfilled",function(c,f,h,m){return{payload:c,meta:jp(Yi({},m||{}),{arg:h,requestId:f,requestStatus:"fulfilled"})}}),o=Qi(e+"/pending",function(c,f,h){return{payload:void 0,meta:jp(Yi({},h||{}),{arg:f,requestId:c,requestStatus:"pending"})}}),s=Qi(e+"/rejected",function(c,f,h,m,_){return{payload:m,error:(r&&r.serializeError||M2)(c||"Rejected"),meta:jp(Yi({},_||{}),{arg:h,requestId:f,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function l(c){return function(f,h,m){var _=r!=null&&r.idGenerator?r.idGenerator(c):U2(),E=new a,w;function d(g){w=g,E.abort()}var p=function(){return S2(this,null,function(){var g,v,b,I,x,C,T;return g2(this,function(P){switch(P.label){case 0:return P.trys.push([0,4,,5]),I=(g=r==null?void 0:r.condition)==null?void 0:g.call(r,c,{getState:h,extra:m}),V2(I)?[4,I]:[3,2];case 1:I=P.sent(),P.label=2;case 2:if(I===!1||E.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return x=new Promise(function(A,O){return E.signal.addEventListener("abort",function(){return O({name:"AbortError",message:w||"Aborted"})})}),f(o(_,c,(v=r==null?void 0:r.getPendingMeta)==null?void 0:v.call(r,{requestId:_,arg:c},{getState:h,extra:m}))),[4,Promise.race([x,Promise.resolve(n(c,{dispatch:f,getState:h,extra:m,requestId:_,signal:E.signal,abort:d,rejectWithValue:function(A,O){return new Fp(A,O)},fulfillWithValue:function(A,O){return new y1(A,O)}})).then(function(A){if(A instanceof Fp)throw A;return A instanceof y1?i(A.payload,_,c,A.meta):i(A,_,c)})])];case 3:return b=P.sent(),[3,5];case 4:return C=P.sent(),b=C instanceof Fp?s(null,_,c,C.payload,C.meta):s(C,_,c),[3,5];case 5:return T=r&&!r.dispatchConditionRejection&&s.match(b)&&b.meta.condition,T||f(b),[2,b]}})})}();return Object.assign(p,{abort:d,requestId:_,arg:c,unwrap:function(){return p.then(L2)}})}}return Object.assign(l,{pending:o,rejected:s,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t}();function L2(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function V2(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Uv="listenerMiddleware";Qi(Uv+"/add");Qi(Uv+"/removeAll");Qi(Uv+"/remove");var v1;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);o2();function _I(t,e){return function(){return t.apply(e,arguments)}}const{toString:j2}=Object.prototype,{getPrototypeOf:Dv}=Object,nh=(t=>e=>{const n=j2.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Er=t=>(t=t.toLowerCase(),e=>nh(e)===t),rh=t=>e=>typeof e===t,{isArray:Aa}=Array,nu=rh("undefined");function F2(t){return t!==null&&!nu(t)&&t.constructor!==null&&!nu(t.constructor)&&An(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const wI=Er("ArrayBuffer");function $2(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&wI(t.buffer),e}const B2=rh("string"),An=rh("function"),EI=rh("number"),ih=t=>t!==null&&typeof t=="object",W2=t=>t===!0||t===!1,Bc=t=>{if(nh(t)!=="object")return!1;const e=Dv(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},q2=Er("Date"),H2=Er("File"),K2=Er("Blob"),G2=Er("FileList"),Y2=t=>ih(t)&&An(t.pipe),Q2=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||An(t.append)&&((e=nh(t))==="formdata"||e==="object"&&An(t.toString)&&t.toString()==="[object FormData]"))},X2=Er("URLSearchParams"),[J2,Z2,eN,tN]=["ReadableStream","Request","Response","Headers"].map(Er),nN=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function bu(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Aa(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const o=n?Object.getOwnPropertyNames(t):Object.keys(t),s=o.length;let a;for(r=0;r<s;r++)a=o[r],e.call(null,t[a],a,t)}}function SI(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Lo=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),TI=t=>!nu(t)&&t!==Lo;function kg(){const{caseless:t}=TI(this)&&this||{},e={},n=(r,i)=>{const o=t&&SI(e,i)||i;Bc(e[o])&&Bc(r)?e[o]=kg(e[o],r):Bc(r)?e[o]=kg({},r):Aa(r)?e[o]=r.slice():e[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&bu(arguments[r],n);return e}const rN=(t,e,n,{allOwnKeys:r}={})=>(bu(e,(i,o)=>{n&&An(i)?t[o]=_I(i,n):t[o]=i},{allOwnKeys:r}),t),iN=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),oN=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},sN=(t,e,n,r)=>{let i,o,s;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),o=i.length;o-- >0;)s=i[o],(!r||r(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=n!==!1&&Dv(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},aN=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},lN=t=>{if(!t)return null;if(Aa(t))return t;let e=t.length;if(!EI(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},uN=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Dv(Uint8Array)),cN=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const o=i.value;e.call(t,o[0],o[1])}},dN=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},fN=Er("HTMLFormElement"),hN=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),_1=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),pN=Er("RegExp"),bI=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};bu(n,(i,o)=>{let s;(s=e(i,o,t))!==!1&&(r[o]=s||i)}),Object.defineProperties(t,r)},mN=t=>{bI(t,(e,n)=>{if(An(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(An(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},gN=(t,e)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Aa(t)?r(t):r(String(t).split(e)),n},yN=()=>{},vN=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,$p="abcdefghijklmnopqrstuvwxyz",w1="0123456789",II={DIGIT:w1,ALPHA:$p,ALPHA_DIGIT:$p+$p.toUpperCase()+w1},_N=(t=16,e=II.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function wN(t){return!!(t&&An(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const EN=t=>{const e=new Array(10),n=(r,i)=>{if(ih(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const o=Aa(r)?[]:{};return bu(r,(s,a)=>{const l=n(s,i+1);!nu(l)&&(o[a]=l)}),e[i]=void 0,o}}return r};return n(t,0)},SN=Er("AsyncFunction"),TN=t=>t&&(ih(t)||An(t))&&An(t.then)&&An(t.catch),CI=((t,e)=>t?setImmediate:e?((n,r)=>(Lo.addEventListener("message",({source:i,data:o})=>{i===Lo&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Lo.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",An(Lo.postMessage)),bN=typeof queueMicrotask<"u"?queueMicrotask.bind(Lo):typeof process<"u"&&process.nextTick||CI,L={isArray:Aa,isArrayBuffer:wI,isBuffer:F2,isFormData:Q2,isArrayBufferView:$2,isString:B2,isNumber:EI,isBoolean:W2,isObject:ih,isPlainObject:Bc,isReadableStream:J2,isRequest:Z2,isResponse:eN,isHeaders:tN,isUndefined:nu,isDate:q2,isFile:H2,isBlob:K2,isRegExp:pN,isFunction:An,isStream:Y2,isURLSearchParams:X2,isTypedArray:uN,isFileList:G2,forEach:bu,merge:kg,extend:rN,trim:nN,stripBOM:iN,inherits:oN,toFlatObject:sN,kindOf:nh,kindOfTest:Er,endsWith:aN,toArray:lN,forEachEntry:cN,matchAll:dN,isHTMLForm:fN,hasOwnProperty:_1,hasOwnProp:_1,reduceDescriptors:bI,freezeMethods:mN,toObjectSet:gN,toCamelCase:hN,noop:yN,toFiniteNumber:vN,findKey:SI,global:Lo,isContextDefined:TI,ALPHABET:II,generateString:_N,isSpecCompliantForm:wN,toJSONObject:EN,isAsyncFn:SN,isThenable:TN,setImmediate:CI,asap:bN};function me(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}L.inherits(me,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.status}}});const PI=me.prototype,AI={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{AI[t]={value:t}});Object.defineProperties(me,AI);Object.defineProperty(PI,"isAxiosError",{value:!0});me.from=(t,e,n,r,i,o)=>{const s=Object.create(PI);return L.toFlatObject(t,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),me.call(s,t.message,e,n,r,i),s.cause=t,s.name=t.name,o&&Object.assign(s,o),s};const IN=null;function Og(t){return L.isPlainObject(t)||L.isArray(t)}function RI(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function E1(t,e,n){return t?t.concat(e).map(function(i,o){return i=RI(i),!n&&o?"["+i+"]":i}).join(n?".":""):e}function CN(t){return L.isArray(t)&&!t.some(Og)}const PN=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function oh(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,d){return!L.isUndefined(d[w])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(e);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function c(E){if(E===null)return"";if(L.isDate(E))return E.toISOString();if(!l&&L.isBlob(E))throw new me("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(E)||L.isTypedArray(E)?l&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function f(E,w,d){let p=E;if(E&&!d&&typeof E=="object"){if(L.endsWith(w,"{}"))w=r?w:w.slice(0,-2),E=JSON.stringify(E);else if(L.isArray(E)&&CN(E)||(L.isFileList(E)||L.endsWith(w,"[]"))&&(p=L.toArray(E)))return w=RI(w),p.forEach(function(v,b){!(L.isUndefined(v)||v===null)&&e.append(s===!0?E1([w],b,o):s===null?w:w+"[]",c(v))}),!1}return Og(E)?!0:(e.append(E1(d,w,o),c(E)),!1)}const h=[],m=Object.assign(PN,{defaultVisitor:f,convertValue:c,isVisitable:Og});function _(E,w){if(!L.isUndefined(E)){if(h.indexOf(E)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(E),L.forEach(E,function(p,g){(!(L.isUndefined(p)||p===null)&&i.call(e,p,L.isString(g)?g.trim():g,w,m))===!0&&_(p,w?w.concat(g):[g])}),h.pop()}}if(!L.isObject(t))throw new TypeError("data must be an object");return _(t),e}function S1(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Mv(t,e){this._pairs=[],t&&oh(t,this,e)}const kI=Mv.prototype;kI.append=function(e,n){this._pairs.push([e,n])};kI.toString=function(e){const n=e?function(r){return e.call(this,r,S1)}:S1;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function AN(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function OI(t,e,n){if(!e)return t;const r=n&&n.encode||AN;L.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let o;if(i?o=i(e,n):o=L.isURLSearchParams(e)?e.toString():new Mv(e,n).toString(r),o){const s=t.indexOf("#");s!==-1&&(t=t.slice(0,s)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class RN{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){L.forEach(this.handlers,function(r){r!==null&&e(r)})}}const T1=RN,zI={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kN=typeof URLSearchParams<"u"?URLSearchParams:Mv,ON=typeof FormData<"u"?FormData:null,zN=typeof Blob<"u"?Blob:null,xN={isBrowser:!0,classes:{URLSearchParams:kN,FormData:ON,Blob:zN},protocols:["http","https","file","blob","url","data"]},Lv=typeof window<"u"&&typeof document<"u",zg=typeof navigator=="object"&&navigator||void 0,NN=Lv&&(!zg||["ReactNative","NativeScript","NS"].indexOf(zg.product)<0),UN=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),DN=Lv&&window.location.href||"http://localhost",MN=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Lv,hasStandardBrowserEnv:NN,hasStandardBrowserWebWorkerEnv:UN,navigator:zg,origin:DN},Symbol.toStringTag,{value:"Module"})),Qt={...MN,...xN};function LN(t,e){return oh(t,new Qt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Qt.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function VN(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function jN(t){const e={},n=Object.keys(t);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],e[o]=t[o];return e}function xI(t){function e(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&L.isArray(i)?i.length:s,l?(L.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!L.isObject(i[s]))&&(i[s]=[]),e(n,r,i[s],o)&&L.isArray(i[s])&&(i[s]=jN(i[s])),!a)}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,(r,i)=>{e(VN(r),i,n,0)}),n}return null}function FN(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Vv={transitional:zI,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=L.isObject(e);if(o&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return i?JSON.stringify(xI(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)||L.isReadableStream(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return LN(e,this.formSerializer).toString();if((a=L.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return oh(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),FN(e)):e}],transformResponse:[function(e){const n=this.transitional||Vv.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(L.isResponse(e)||L.isReadableStream(e))return e;if(e&&L.isString(e)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?me.from(a,me.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qt.classes.FormData,Blob:Qt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],t=>{Vv.headers[t]={}});const jv=Vv,$N=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),BN=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||e[n]&&$N[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},b1=Symbol("internals");function Za(t){return t&&String(t).trim().toLowerCase()}function Wc(t){return t===!1||t==null?t:L.isArray(t)?t.map(Wc):String(t)}function WN(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const qN=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Bp(t,e,n,r,i){if(L.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!L.isString(e)){if(L.isString(r))return e.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(e)}}function HN(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function KN(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,o,s){return this[r].call(this,e,i,o,s)},configurable:!0})})}class sh{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function o(a,l,c){const f=Za(l);if(!f)throw new Error("header name must be a non-empty string");const h=L.findKey(i,f);(!h||i[h]===void 0||c===!0||c===void 0&&i[h]!==!1)&&(i[h||l]=Wc(a))}const s=(a,l)=>L.forEach(a,(c,f)=>o(c,f,l));if(L.isPlainObject(e)||e instanceof this.constructor)s(e,n);else if(L.isString(e)&&(e=e.trim())&&!qN(e))s(BN(e),n);else if(L.isHeaders(e))for(const[a,l]of e.entries())o(l,a,r);else e!=null&&o(n,e,r);return this}get(e,n){if(e=Za(e),e){const r=L.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return WN(i);if(L.isFunction(n))return n.call(this,i,r);if(L.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Za(e),e){const r=L.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Bp(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function o(s){if(s=Za(s),s){const a=L.findKey(r,s);a&&(!n||Bp(r,r[a],a,n))&&(delete r[a],i=!0)}}return L.isArray(e)?e.forEach(o):o(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!e||Bp(this,this[o],o,e,!0))&&(delete this[o],i=!0)}return i}normalize(e){const n=this,r={};return L.forEach(this,(i,o)=>{const s=L.findKey(r,o);if(s){n[s]=Wc(i),delete n[o];return}const a=e?HN(o):String(o).trim();a!==o&&delete n[o],n[a]=Wc(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return L.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[b1]=this[b1]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=Za(s);r[a]||(KN(i,s),r[a]=!0)}return L.isArray(e)?e.forEach(o):o(e),this}}sh.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(sh.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});L.freezeMethods(sh);const yr=sh;function Wp(t,e){const n=this||jv,r=e||n,i=yr.from(r.headers);let o=r.data;return L.forEach(t,function(a){o=a.call(n,o,i.normalize(),e?e.status:void 0)}),i.normalize(),o}function NI(t){return!!(t&&t.__CANCEL__)}function Ra(t,e,n){me.call(this,t??"canceled",me.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(Ra,me,{__CANCEL__:!0});function UI(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new me("Request failed with status code "+n.status,[me.ERR_BAD_REQUEST,me.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function GN(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function YN(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,o=0,s;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),f=r[o];s||(s=c),n[i]=l,r[i]=c;let h=o,m=0;for(;h!==i;)m+=n[h++],h=h%t;if(i=(i+1)%t,i===o&&(o=(o+1)%t),c-s<e)return;const _=f&&c-f;return _?Math.round(m*1e3/_):void 0}}function QN(t,e){let n=0,r=1e3/e,i,o;const s=(c,f=Date.now())=>{n=f,i=null,o&&(clearTimeout(o),o=null),t.apply(null,c)};return[(...c)=>{const f=Date.now(),h=f-n;h>=r?s(c,f):(i=c,o||(o=setTimeout(()=>{o=null,s(i)},r-h)))},()=>i&&s(i)]}const ef=(t,e,n=3)=>{let r=0;const i=YN(50,250);return QN(o=>{const s=o.loaded,a=o.lengthComputable?o.total:void 0,l=s-r,c=i(l),f=s<=a;r=s;const h={loaded:s,total:a,progress:a?s/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&f?(a-s)/c:void 0,event:o,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(h)},n)},I1=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},C1=t=>(...e)=>L.asap(()=>t(...e)),XN=Qt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Qt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Qt.origin),Qt.navigator&&/(msie|trident)/i.test(Qt.navigator.userAgent)):()=>!0,JN=Qt.hasStandardBrowserEnv?{write(t,e,n,r,i,o){const s=[t+"="+encodeURIComponent(e)];L.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),L.isString(r)&&s.push("path="+r),L.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ZN(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function eU(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function DI(t,e){return t&&!ZN(e)?eU(t,e):e}const P1=t=>t instanceof yr?{...t}:t;function Zo(t,e){e=e||{};const n={};function r(c,f,h,m){return L.isPlainObject(c)&&L.isPlainObject(f)?L.merge.call({caseless:m},c,f):L.isPlainObject(f)?L.merge({},f):L.isArray(f)?f.slice():f}function i(c,f,h,m){if(L.isUndefined(f)){if(!L.isUndefined(c))return r(void 0,c,h,m)}else return r(c,f,h,m)}function o(c,f){if(!L.isUndefined(f))return r(void 0,f)}function s(c,f){if(L.isUndefined(f)){if(!L.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function a(c,f,h){if(h in e)return r(c,f);if(h in t)return r(void 0,c)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,f,h)=>i(P1(c),P1(f),h,!0)};return L.forEach(Object.keys(Object.assign({},t,e)),function(f){const h=l[f]||i,m=h(t[f],e[f],f);L.isUndefined(m)&&h!==a||(n[f]=m)}),n}const MI=t=>{const e=Zo({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:a}=e;e.headers=s=yr.from(s),e.url=OI(DI(e.baseURL,e.url),t.params,t.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(L.isFormData(n)){if(Qt.hasStandardBrowserEnv||Qt.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((l=s.getContentType())!==!1){const[c,...f]=l?l.split(";").map(h=>h.trim()).filter(Boolean):[];s.setContentType([c||"multipart/form-data",...f].join("; "))}}if(Qt.hasStandardBrowserEnv&&(r&&L.isFunction(r)&&(r=r(e)),r||r!==!1&&XN(e.url))){const c=i&&o&&JN.read(o);c&&s.set(i,c)}return e},tU=typeof XMLHttpRequest<"u",nU=tU&&function(t){return new Promise(function(n,r){const i=MI(t);let o=i.data;const s=yr.from(i.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=i,f,h,m,_,E;function w(){_&&_(),E&&E(),i.cancelToken&&i.cancelToken.unsubscribe(f),i.signal&&i.signal.removeEventListener("abort",f)}let d=new XMLHttpRequest;d.open(i.method.toUpperCase(),i.url,!0),d.timeout=i.timeout;function p(){if(!d)return;const v=yr.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),I={data:!a||a==="text"||a==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:v,config:t,request:d};UI(function(C){n(C),w()},function(C){r(C),w()},I),d=null}"onloadend"in d?d.onloadend=p:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(p)},d.onabort=function(){d&&(r(new me("Request aborted",me.ECONNABORTED,t,d)),d=null)},d.onerror=function(){r(new me("Network Error",me.ERR_NETWORK,t,d)),d=null},d.ontimeout=function(){let b=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const I=i.transitional||zI;i.timeoutErrorMessage&&(b=i.timeoutErrorMessage),r(new me(b,I.clarifyTimeoutError?me.ETIMEDOUT:me.ECONNABORTED,t,d)),d=null},o===void 0&&s.setContentType(null),"setRequestHeader"in d&&L.forEach(s.toJSON(),function(b,I){d.setRequestHeader(I,b)}),L.isUndefined(i.withCredentials)||(d.withCredentials=!!i.withCredentials),a&&a!=="json"&&(d.responseType=i.responseType),c&&([m,E]=ef(c,!0),d.addEventListener("progress",m)),l&&d.upload&&([h,_]=ef(l),d.upload.addEventListener("progress",h),d.upload.addEventListener("loadend",_)),(i.cancelToken||i.signal)&&(f=v=>{d&&(r(!v||v.type?new Ra(null,t,d):v),d.abort(),d=null)},i.cancelToken&&i.cancelToken.subscribe(f),i.signal&&(i.signal.aborted?f():i.signal.addEventListener("abort",f)));const g=GN(i.url);if(g&&Qt.protocols.indexOf(g)===-1){r(new me("Unsupported protocol "+g+":",me.ERR_BAD_REQUEST,t));return}d.send(o||null)})},rU=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const o=function(c){if(!i){i=!0,a();const f=c instanceof Error?c:this.reason;r.abort(f instanceof me?f:new Ra(f instanceof Error?f.message:f))}};let s=e&&setTimeout(()=>{s=null,o(new me(`timeout ${e} of ms exceeded`,me.ETIMEDOUT))},e);const a=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(o):c.removeEventListener("abort",o)}),t=null)};t.forEach(c=>c.addEventListener("abort",o));const{signal:l}=r;return l.unsubscribe=()=>L.asap(a),l}},iU=rU,oU=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},sU=async function*(t,e){for await(const n of aU(t))yield*oU(n,e)},aU=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},A1=(t,e,n,r)=>{const i=sU(t,e);let o=0,s,a=l=>{s||(s=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:c,value:f}=await i.next();if(c){a(),l.close();return}let h=f.byteLength;if(n){let m=o+=h;n(m)}l.enqueue(new Uint8Array(f))}catch(c){throw a(c),c}},cancel(l){return a(l),i.return()}},{highWaterMark:2})},ah=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",LI=ah&&typeof ReadableStream=="function",lU=ah&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),VI=(t,...e)=>{try{return!!t(...e)}catch{return!1}},uU=LI&&VI(()=>{let t=!1;const e=new Request(Qt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),R1=64*1024,xg=LI&&VI(()=>L.isReadableStream(new Response("").body)),tf={stream:xg&&(t=>t.body)};ah&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!tf[e]&&(tf[e]=L.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new me(`Response type '${e}' is not supported`,me.ERR_NOT_SUPPORT,r)})})})(new Response);const cU=async t=>{if(t==null)return 0;if(L.isBlob(t))return t.size;if(L.isSpecCompliantForm(t))return(await new Request(Qt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(L.isArrayBufferView(t)||L.isArrayBuffer(t))return t.byteLength;if(L.isURLSearchParams(t)&&(t=t+""),L.isString(t))return(await lU(t)).byteLength},dU=async(t,e)=>{const n=L.toFiniteNumber(t.getContentLength());return n??cU(e)},fU=ah&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:o,timeout:s,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:f,withCredentials:h="same-origin",fetchOptions:m}=MI(t);c=c?(c+"").toLowerCase():"text";let _=iU([i,o&&o.toAbortSignal()],s),E;const w=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let d;try{if(l&&uU&&n!=="get"&&n!=="head"&&(d=await dU(f,r))!==0){let I=new Request(e,{method:"POST",body:r,duplex:"half"}),x;if(L.isFormData(r)&&(x=I.headers.get("content-type"))&&f.setContentType(x),I.body){const[C,T]=I1(d,ef(C1(l)));r=A1(I.body,R1,C,T)}}L.isString(h)||(h=h?"include":"omit");const p="credentials"in Request.prototype;E=new Request(e,{...m,signal:_,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",credentials:p?h:void 0});let g=await fetch(E);const v=xg&&(c==="stream"||c==="response");if(xg&&(a||v&&w)){const I={};["status","statusText","headers"].forEach(P=>{I[P]=g[P]});const x=L.toFiniteNumber(g.headers.get("content-length")),[C,T]=a&&I1(x,ef(C1(a),!0))||[];g=new Response(A1(g.body,R1,C,()=>{T&&T(),w&&w()}),I)}c=c||"text";let b=await tf[L.findKey(tf,c)||"text"](g,t);return!v&&w&&w(),await new Promise((I,x)=>{UI(I,x,{data:b,headers:yr.from(g.headers),status:g.status,statusText:g.statusText,config:t,request:E})})}catch(p){throw w&&w(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new me("Network Error",me.ERR_NETWORK,t,E),{cause:p.cause||p}):me.from(p,p&&p.code,t,E)}}),Ng={http:IN,xhr:nU,fetch:fU};L.forEach(Ng,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const k1=t=>`- ${t}`,hU=t=>L.isFunction(t)||t===null||t===!1,jI={getAdapter:t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let o=0;o<e;o++){n=t[o];let s;if(r=n,!hU(n)&&(r=Ng[(s=String(n)).toLowerCase()],r===void 0))throw new me(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=e?o.length>1?`since :
`+o.map(k1).join(`
`):" "+k1(o[0]):"as no adapter specified";throw new me("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Ng};function qp(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ra(null,t)}function O1(t){return qp(t),t.headers=yr.from(t.headers),t.data=Wp.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),jI.getAdapter(t.adapter||jv.adapter)(t).then(function(r){return qp(t),r.data=Wp.call(t,t.transformResponse,r),r.headers=yr.from(r.headers),r},function(r){return NI(r)||(qp(t),r&&r.response&&(r.response.data=Wp.call(t,t.transformResponse,r.response),r.response.headers=yr.from(r.response.headers))),Promise.reject(r)})}const FI="1.7.9",lh={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{lh[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const z1={};lh.transitional=function(e,n,r){function i(o,s){return"[Axios v"+FI+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(e===!1)throw new me(i(s," has been removed"+(n?" in "+n:"")),me.ERR_DEPRECATED);return n&&!z1[s]&&(z1[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(o,s,a):!0}};lh.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function pU(t,e,n){if(typeof t!="object")throw new me("options must be an object",me.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const o=r[i],s=e[o];if(s){const a=t[o],l=a===void 0||s(a,o,t);if(l!==!0)throw new me("option "+o+" must be "+l,me.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new me("Unknown option "+o,me.ERR_BAD_OPTION)}}const qc={assertOptions:pU,validators:lh},Cr=qc.validators;class nf{constructor(e){this.defaults=e,this.interceptors={request:new T1,response:new T1}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Zo(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&qc.assertOptions(r,{silentJSONParsing:Cr.transitional(Cr.boolean),forcedJSONParsing:Cr.transitional(Cr.boolean),clarifyTimeoutError:Cr.transitional(Cr.boolean)},!1),i!=null&&(L.isFunction(i)?n.paramsSerializer={serialize:i}:qc.assertOptions(i,{encode:Cr.function,serialize:Cr.function},!0)),qc.assertOptions(n,{baseUrl:Cr.spelling("baseURL"),withXsrfToken:Cr.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&L.merge(o.common,o[n.method]);o&&L.forEach(["delete","get","head","post","put","patch","common"],E=>{delete o[E]}),n.headers=yr.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(l=l&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const c=[];this.interceptors.response.forEach(function(w){c.push(w.fulfilled,w.rejected)});let f,h=0,m;if(!l){const E=[O1.bind(this),void 0];for(E.unshift.apply(E,a),E.push.apply(E,c),m=E.length,f=Promise.resolve(n);h<m;)f=f.then(E[h++],E[h++]);return f}m=a.length;let _=n;for(h=0;h<m;){const E=a[h++],w=a[h++];try{_=E(_)}catch(d){w.call(this,d);break}}try{f=O1.call(this,_)}catch(E){return Promise.reject(E)}for(h=0,m=c.length;h<m;)f=f.then(c[h++],c[h++]);return f}getUri(e){e=Zo(this.defaults,e);const n=DI(e.baseURL,e.url);return OI(n,e.params,e.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(e){nf.prototype[e]=function(n,r){return this.request(Zo(r||{},{method:e,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(e){function n(r){return function(o,s,a){return this.request(Zo(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}nf.prototype[e]=n(),nf.prototype[e+"Form"]=n(!0)});const Hc=nf;class Fv{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},e(function(o,s,a){r.reason||(r.reason=new Ra(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Fv(function(i){e=i}),cancel:e}}}const mU=Fv;function gU(t){return function(n){return t.apply(null,n)}}function yU(t){return L.isObject(t)&&t.isAxiosError===!0}const Ug={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ug).forEach(([t,e])=>{Ug[e]=t});const vU=Ug;function $I(t){const e=new Hc(t),n=_I(Hc.prototype.request,e);return L.extend(n,Hc.prototype,e,{allOwnKeys:!0}),L.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return $I(Zo(t,i))},n}const dt=$I(jv);dt.Axios=Hc;dt.CanceledError=Ra;dt.CancelToken=mU;dt.isCancel=NI;dt.VERSION=FI;dt.toFormData=oh;dt.AxiosError=me;dt.Cancel=dt.CanceledError;dt.all=function(e){return Promise.all(e)};dt.spread=gU;dt.isAxiosError=yU;dt.mergeConfig=Zo;dt.AxiosHeaders=yr;dt.formToJSON=t=>xI(L.isHTMLForm(t)?new FormData(t):t);dt.getAdapter=jI.getAdapter;dt.HttpStatusCode=vU;dt.default=dt;const Ne=dt;var Xi={},$v={};/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */$v.parse=EU;$v.serialize=SU;var _U=decodeURIComponent,wU=encodeURIComponent,bc=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function EU(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");for(var n={},r=e||{},i=t.split(";"),o=r.decode||_U,s=0;s<i.length;s++){var a=i[s],l=a.indexOf("=");if(!(l<0)){var c=a.substring(0,l).trim();if(n[c]==null){var f=a.substring(l+1,a.length).trim();f[0]==='"'&&(f=f.slice(1,-1)),n[c]=TU(f,o)}}}return n}function SU(t,e,n){var r=n||{},i=r.encode||wU;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!bc.test(t))throw new TypeError("argument name is invalid");var o=i(e);if(o&&!bc.test(o))throw new TypeError("argument val is invalid");var s=t+"="+o;if(r.maxAge!=null){var a=r.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(a)}if(r.domain){if(!bc.test(r.domain))throw new TypeError("option domain is invalid");s+="; Domain="+r.domain}if(r.path){if(!bc.test(r.path))throw new TypeError("option path is invalid");s+="; Path="+r.path}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(s+="; HttpOnly"),r.secure&&(s+="; Secure"),r.sameSite){var l=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(l){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s}function TU(t,e){try{return e(t)}catch{return t}}var Iu={exports:{}},rf={decodeValues:!0,map:!1,silent:!1};function Dg(t){return typeof t=="string"&&!!t.trim()}function Mg(t,e){var n=t.split(";").filter(Dg),r=n.shift(),i=bU(r),o=i.name,s=i.value;e=e?Object.assign({},rf,e):rf;try{s=e.decodeValues?decodeURIComponent(s):s}catch(l){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+s+"'. Set options.decodeValues to false to disable this feature.",l)}var a={name:o,value:s};return n.forEach(function(l){var c=l.split("="),f=c.shift().trimLeft().toLowerCase(),h=c.join("=");f==="expires"?a.expires=new Date(h):f==="max-age"?a.maxAge=parseInt(h,10):f==="secure"?a.secure=!0:f==="httponly"?a.httpOnly=!0:f==="samesite"?a.sameSite=h:f==="partitioned"?a.partitioned=!0:a[f]=h}),a}function bU(t){var e="",n="",r=t.split("=");return r.length>1?(e=r.shift(),n=r.join("=")):n=t,{name:e,value:n}}function BI(t,e){if(e=e?Object.assign({},rf,e):rf,!t)return e.map?{}:[];if(t.headers)if(typeof t.headers.getSetCookie=="function")t=t.headers.getSetCookie();else if(t.headers["set-cookie"])t=t.headers["set-cookie"];else{var n=t.headers[Object.keys(t.headers).find(function(i){return i.toLowerCase()==="set-cookie"})];!n&&t.headers.cookie&&!e.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),t=n}if(Array.isArray(t)||(t=[t]),e.map){var r={};return t.filter(Dg).reduce(function(i,o){var s=Mg(o,e);return i[s.name]=s,i},r)}else return t.filter(Dg).map(function(i){return Mg(i,e)})}function IU(t){if(Array.isArray(t))return t;if(typeof t!="string")return[];var e=[],n=0,r,i,o,s,a;function l(){for(;n<t.length&&/\s/.test(t.charAt(n));)n+=1;return n<t.length}function c(){return i=t.charAt(n),i!=="="&&i!==";"&&i!==","}for(;n<t.length;){for(r=n,a=!1;l();)if(i=t.charAt(n),i===","){for(o=n,n+=1,l(),s=n;n<t.length&&c();)n+=1;n<t.length&&t.charAt(n)==="="?(a=!0,n=s,e.push(t.substring(r,o)),r=n):n=o+1}else n+=1;(!a||n>=t.length)&&e.push(t.substring(r,t.length))}return e}Iu.exports=BI;Iu.exports.parse=BI;Iu.exports.parseString=Mg;Iu.exports.splitCookiesString=IU;var CU=Iu.exports,Rr={},Jr=gd&&gd.__assign||function(){return Jr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Jr.apply(this,arguments)};Object.defineProperty(Rr,"__esModule",{value:!0});Rr.areCookiesEqual=Rr.hasSameProperties=Rr.createCookie=Rr.isBrowser=void 0;function PU(){return typeof window<"u"}Rr.isBrowser=PU;function AU(t,e,n){var r=n.sameSite;r===!0&&(r="strict"),(r===void 0||r===!1)&&(r="lax");var i=Jr(Jr({},n),{sameSite:r});return delete i.encode,Jr({name:t,value:e},i)}Rr.createCookie=AU;function WI(t,e){var n=Object.getOwnPropertyNames(t),r=Object.getOwnPropertyNames(e);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++){var o=n[i];if(t[o]!==e[o])return!1}return!0}Rr.hasSameProperties=WI;function RU(t,e){var n=t.sameSite===e.sameSite;return typeof t.sameSite=="string"&&typeof e.sameSite=="string"&&(n=t.sameSite.toLowerCase()===e.sameSite.toLowerCase()),WI(Jr(Jr({},t),{sameSite:void 0}),Jr(Jr({},e),{sameSite:void 0}))&&n}Rr.areCookiesEqual=RU;var ru=gd&&gd.__assign||function(){return ru=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},ru.apply(this,arguments)};Object.defineProperty(Xi,"__esModule",{value:!0});Xi.destroyCookie=Xi.setCookie=Xi.parseCookies=void 0;var Il=$v,kU=CU,Kc=Rr;function qI(t,e){var n,r;return!((r=(n=t==null?void 0:t.req)===null||n===void 0?void 0:n.headers)===null||r===void 0)&&r.cookie?Il.parse(t.req.headers.cookie,e):Kc.isBrowser()?Il.parse(document.cookie,e):{}}Xi.parseCookies=qI;function Bv(t,e,n,r){var i,o;if(r===void 0&&(r={}),!((i=t==null?void 0:t.res)===null||i===void 0)&&i.getHeader&&t.res.setHeader){if(!((o=t==null?void 0:t.res)===null||o===void 0)&&o.finished)return console.warn('Not setting "'+e+'" cookie. Response has finished.'),console.warn("You should set cookie before res.send()"),{};var s=t.res.getHeader("Set-Cookie")||[];typeof s=="string"&&(s=[s]),typeof s=="number"&&(s=[]);var a=kU.parse(s,{decodeValues:!1}),l=Kc.createCookie(e,n,r),c=[];a.forEach(function(f){if(!Kc.areCookiesEqual(f,l)){var h=Il.serialize(f.name,f.value,ru({encode:function(m){return m}},f));c.push(h)}}),c.push(Il.serialize(e,n,r)),t.res.setHeader("Set-Cookie",c)}if(Kc.isBrowser()){if(r&&r.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");document.cookie=Il.serialize(e,n,r)}return{}}Xi.setCookie=Bv;function HI(t,e,n){return Bv(t,e,"",ru(ru({},n||{}),{maxAge:-1}))}Xi.destroyCookie=HI;Xi.default={set:Bv,get:qI,destroy:HI};const Hp=xe("users/fetchUsers",async t=>{try{return(await Ne.get(`${ze.url}/api/users/me?populate=*`,{headers:{Authorization:`Bearer ${t}`}})).data||{}}catch(e){throw console.log(e),e}}),OU=xe("users/registerUser",async t=>{const e=`${ze.url}/api/auth/local/register`;console.log("url",e),console.log("data",t);try{(await Ne.post(e,t)).status(200).end()}catch(n){console.log("e.message",n.message),Ke.error(n.message,{hideProgressBar:!0})}}),zU=xe("users/deleteUser",async t=>{try{if((await Ne.delete(`${ze.url}/api/users/${t}`)).data)return t}catch(e){console.log(e)}}),xU=xe("users/updateUser",async t=>{try{return(await Ne.put(`${ze.url}/api/users/${t.id}`,t)).data||[]}catch(e){console.log(e)}}),NU=Jn({name:"users",initialState:{users:{},loggedIn:{},status:"idle",error:null},reducers:{updateUsers:(t,e)=>{t.users=e.payload},loginSuccess:(t,e)=>{t.loggedInUser=e.payload},logoutUser:t=>{t.loggedInUser={}}},extraReducers:t=>{t.addCase(Hp.pending,(e,n)=>{e.status="loading"}).addCase(Hp.fulfilled,(e,n)=>{console.log("fetchUsers fulfilled",n.payload),e.status="succeeded",e.users=n.payload}).addCase(Hp.rejected,(e,n)=>{console.log("fetchUsers rejected",n.error.message),e.status="failed",e.error=n.error.message}).addCase(OU.fulfilled,(e,n)=>{e.users.push(n.payload)}).addCase(zU.fulfilled,(e,n)=>{const r=e.users.findIndex(i=>i._id===n.payload);e.users.splice(r,1)}).addCase(xU.fulfilled,(e,n)=>{const r=e.users.findIndex(i=>i._id===n.payload._id);e.users[r]=n.payload})}}),UU=t=>t.users.users,x6=t=>t.users.loggedInUser,N6=t=>t.users.status,DU=NU.reducer;var KI={exports:{}},GI={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=U;function MU(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var LU=typeof Object.is=="function"?Object.is:MU,VU=pa.useState,jU=pa.useEffect,FU=pa.useLayoutEffect,$U=pa.useDebugValue;function BU(t,e){var n=e(),r=VU({inst:{value:n,getSnapshot:e}}),i=r[0].inst,o=r[1];return FU(function(){i.value=n,i.getSnapshot=e,Kp(i)&&o({inst:i})},[t,n,e]),jU(function(){return Kp(i)&&o({inst:i}),t(function(){Kp(i)&&o({inst:i})})},[t]),$U(n),n}function Kp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!LU(t,n)}catch{return!0}}function WU(t,e){return e()}var qU=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?WU:BU;GI.useSyncExternalStore=pa.useSyncExternalStore!==void 0?pa.useSyncExternalStore:qU;KI.exports=GI;var HU=KI.exports,YI={exports:{}},QI={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh=U,KU=HU;function GU(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var YU=typeof Object.is=="function"?Object.is:GU,QU=KU.useSyncExternalStore,XU=uh.useRef,JU=uh.useEffect,ZU=uh.useMemo,eD=uh.useDebugValue;QI.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var o=XU(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=ZU(function(){function l(_){if(!c){if(c=!0,f=_,_=r(_),i!==void 0&&s.hasValue){var E=s.value;if(i(E,_))return h=E}return h=_}if(E=h,YU(f,_))return E;var w=r(_);return i!==void 0&&i(E,w)?(f=_,E):(f=_,h=w)}var c=!1,f,h,m=n===void 0?null:n;return[function(){return l(e())},m===null?void 0:function(){return l(m())}]},[e,n,r,i]);var a=QU(t,o[0],o[1]);return JU(function(){s.hasValue=!0,s.value=a},[a]),eD(a),a};YI.exports=QI;var tD=YI.exports;function nD(t){t()}let XI=nD;const rD=t=>XI=t,iD=()=>XI,x1=Symbol.for("react-redux-context"),N1=typeof globalThis<"u"?globalThis:{};function oD(){var t;if(!U.createContext)return{};const e=(t=N1[x1])!=null?t:N1[x1]=new Map;let n=e.get(U.createContext);return n||(n=U.createContext(null),e.set(U.createContext,n)),n}const of=oD();function JI(t=of){return function(){return U.useContext(t)}}const sD=JI(),aD=()=>{throw new Error("uSES not initialized!")};let ZI=aD;const lD=t=>{ZI=t},uD=(t,e)=>t===e;function cD(t=of){const e=t===of?sD:JI(t);return function(r,i={}){const{equalityFn:o=uD,stabilityCheck:s=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:c,getServerState:f,stabilityCheck:h,noopCheck:m}=e();U.useRef(!0);const _=U.useCallback({[r.name](w){return r(w)}}[r.name],[r,h,s]),E=ZI(c.addNestedSub,l.getState,f||l.getState,_,o);return U.useDebugValue(E),E}}const dD=cD();var eC={exports:{}},Ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pt=typeof Symbol=="function"&&Symbol.for,Wv=Pt?Symbol.for("react.element"):60103,qv=Pt?Symbol.for("react.portal"):60106,ch=Pt?Symbol.for("react.fragment"):60107,dh=Pt?Symbol.for("react.strict_mode"):60108,fh=Pt?Symbol.for("react.profiler"):60114,hh=Pt?Symbol.for("react.provider"):60109,ph=Pt?Symbol.for("react.context"):60110,Hv=Pt?Symbol.for("react.async_mode"):60111,mh=Pt?Symbol.for("react.concurrent_mode"):60111,gh=Pt?Symbol.for("react.forward_ref"):60112,yh=Pt?Symbol.for("react.suspense"):60113,fD=Pt?Symbol.for("react.suspense_list"):60120,vh=Pt?Symbol.for("react.memo"):60115,_h=Pt?Symbol.for("react.lazy"):60116,hD=Pt?Symbol.for("react.block"):60121,pD=Pt?Symbol.for("react.fundamental"):60117,mD=Pt?Symbol.for("react.responder"):60118,gD=Pt?Symbol.for("react.scope"):60119;function Un(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Wv:switch(t=t.type,t){case Hv:case mh:case ch:case fh:case dh:case yh:return t;default:switch(t=t&&t.$$typeof,t){case ph:case gh:case _h:case vh:case hh:return t;default:return e}}case qv:return e}}}function tC(t){return Un(t)===mh}Ve.AsyncMode=Hv;Ve.ConcurrentMode=mh;Ve.ContextConsumer=ph;Ve.ContextProvider=hh;Ve.Element=Wv;Ve.ForwardRef=gh;Ve.Fragment=ch;Ve.Lazy=_h;Ve.Memo=vh;Ve.Portal=qv;Ve.Profiler=fh;Ve.StrictMode=dh;Ve.Suspense=yh;Ve.isAsyncMode=function(t){return tC(t)||Un(t)===Hv};Ve.isConcurrentMode=tC;Ve.isContextConsumer=function(t){return Un(t)===ph};Ve.isContextProvider=function(t){return Un(t)===hh};Ve.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wv};Ve.isForwardRef=function(t){return Un(t)===gh};Ve.isFragment=function(t){return Un(t)===ch};Ve.isLazy=function(t){return Un(t)===_h};Ve.isMemo=function(t){return Un(t)===vh};Ve.isPortal=function(t){return Un(t)===qv};Ve.isProfiler=function(t){return Un(t)===fh};Ve.isStrictMode=function(t){return Un(t)===dh};Ve.isSuspense=function(t){return Un(t)===yh};Ve.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ch||t===mh||t===fh||t===dh||t===yh||t===fD||typeof t=="object"&&t!==null&&(t.$$typeof===_h||t.$$typeof===vh||t.$$typeof===hh||t.$$typeof===ph||t.$$typeof===gh||t.$$typeof===pD||t.$$typeof===mD||t.$$typeof===gD||t.$$typeof===hD)};Ve.typeOf=Un;eC.exports=Ve;var yD=eC.exports,nC=yD,vD={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_D={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rC={};rC[nC.ForwardRef]=vD;rC[nC.Memo]=_D;var iC={exports:{}},je={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv=Symbol.for("react.element"),Gv=Symbol.for("react.portal"),wh=Symbol.for("react.fragment"),Eh=Symbol.for("react.strict_mode"),Sh=Symbol.for("react.profiler"),Th=Symbol.for("react.provider"),bh=Symbol.for("react.context"),wD=Symbol.for("react.server_context"),Ih=Symbol.for("react.forward_ref"),Ch=Symbol.for("react.suspense"),Ph=Symbol.for("react.suspense_list"),Ah=Symbol.for("react.memo"),Rh=Symbol.for("react.lazy"),ED=Symbol.for("react.offscreen"),oC;oC=Symbol.for("react.module.reference");function Zn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Kv:switch(t=t.type,t){case wh:case Sh:case Eh:case Ch:case Ph:return t;default:switch(t=t&&t.$$typeof,t){case wD:case bh:case Ih:case Rh:case Ah:case Th:return t;default:return e}}case Gv:return e}}}je.ContextConsumer=bh;je.ContextProvider=Th;je.Element=Kv;je.ForwardRef=Ih;je.Fragment=wh;je.Lazy=Rh;je.Memo=Ah;je.Portal=Gv;je.Profiler=Sh;je.StrictMode=Eh;je.Suspense=Ch;je.SuspenseList=Ph;je.isAsyncMode=function(){return!1};je.isConcurrentMode=function(){return!1};je.isContextConsumer=function(t){return Zn(t)===bh};je.isContextProvider=function(t){return Zn(t)===Th};je.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Kv};je.isForwardRef=function(t){return Zn(t)===Ih};je.isFragment=function(t){return Zn(t)===wh};je.isLazy=function(t){return Zn(t)===Rh};je.isMemo=function(t){return Zn(t)===Ah};je.isPortal=function(t){return Zn(t)===Gv};je.isProfiler=function(t){return Zn(t)===Sh};je.isStrictMode=function(t){return Zn(t)===Eh};je.isSuspense=function(t){return Zn(t)===Ch};je.isSuspenseList=function(t){return Zn(t)===Ph};je.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===wh||t===Sh||t===Eh||t===Ch||t===Ph||t===ED||typeof t=="object"&&t!==null&&(t.$$typeof===Rh||t.$$typeof===Ah||t.$$typeof===Th||t.$$typeof===bh||t.$$typeof===Ih||t.$$typeof===oC||t.getModuleId!==void 0)};je.typeOf=Zn;iC.exports=je;var U6=iC.exports;function SD(){const t=iD();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){!i||e===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}const U1={notify(){},get:()=>[]};function TD(t,e){let n,r=U1,i=0,o=!1;function s(w){f();const d=r.subscribe(w);let p=!1;return()=>{p||(p=!0,d(),h())}}function a(){r.notify()}function l(){E.onStateChange&&E.onStateChange()}function c(){return o}function f(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=SD())}function h(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=U1)}function m(){o||(o=!0,f())}function _(){o&&(o=!1,h())}const E={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:c,trySubscribe:m,tryUnsubscribe:_,getListeners:()=>r};return E}const bD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ID=bD?U.useLayoutEffect:U.useEffect;function CD({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const s=U.useMemo(()=>{const c=TD(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[t,r,i,o]),a=U.useMemo(()=>t.getState(),[t]);ID(()=>{const{subscription:c}=s;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[s,a]);const l=e||of;return U.createElement(l.Provider,{value:s},n)}lD(tD.useSyncExternalStoreWithSelector);rD(Sb.unstable_batchedUpdates);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},aC={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,f=o>>2,h=(o&3)<<4|a>>4;let m=(a&15)<<2|c>>6,_=c&63;l||(_=64,s||(m=64)),r.push(n[f],n[h],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||c==null||h==null)throw new AD;const m=o<<2|a>>4;if(r.push(m),c!==64){const _=a<<4&240|c>>2;if(r.push(_),h!==64){const E=c<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RD=function(t){const e=sC(t);return aC.encodeByteArray(e,!0)},sf=function(t){return RD(t).replace(/\./g,"")},lC=function(t){try{return aC.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=()=>kD().__FIREBASE_DEFAULTS__,zD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lC(t[1]);return e&&JSON.parse(e)},kh=()=>{try{return OD()||zD()||xD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uC=t=>{var e,n;return(n=(e=kh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ND=t=>{const e=uC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cC=()=>{var t;return(t=kh())===null||t===void 0?void 0:t.config},dC=t=>{var e;return(e=kh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[sf(JSON.stringify(n)),sf(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jt())}function LD(){var t;const e=(t=kh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FD(){const t=Jt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $D(){return!LD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hC(){try{return typeof indexedDB=="object"}catch{return!1}}function pC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function BD(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD="FirebaseError";class Sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=WD,Object.setPrototypeOf(this,Sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?qD(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Sr(i,a,r)}}function qD(t,e){return t.replace(HD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const HD=/\{\$([^}]+)}/g;function KD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function iu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(D1(o)&&D1(s)){if(!iu(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function D1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ll(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function ul(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function GD(t,e){const n=new YD(t,e);return n.subscribe.bind(n)}class YD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Gp),i.error===void 0&&(i.error=Gp),i.complete===void 0&&(i.complete=Gp);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gp(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=1e3,JD=2,ZD=4*60*60*1e3,eM=.5;function M1(t,e=XD,n=JD){const r=e*Math.pow(n,t),i=Math.round(eM*r*(Math.random()-.5)*2);return Math.min(ZD,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t){return t&&t._delegate?t._delegate:t}class wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rM(e))try{this.getOrInitializeService({instanceIdentifier:No})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=No){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=No){return this.instances.has(e)}getOptions(e=No){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nM(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=No){return this.component?this.component.multipleInstances?e:No:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nM(t){return t===No?void 0:t}function rM(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tM(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const oM={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},sM=Te.INFO,aM={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},lM=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=aM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oh{constructor(e){this.name=e,this._logLevel=sM,this._logHandler=lM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const uM=(t,e)=>e.some(n=>t instanceof n);let L1,V1;function cM(){return L1||(L1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dM(){return V1||(V1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mC=new WeakMap,Lg=new WeakMap,gC=new WeakMap,Yp=new WeakMap,Yv=new WeakMap;function fM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Ji(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&mC.set(n,t)}).catch(()=>{}),Yv.set(e,t),e}function hM(t){if(Lg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Lg.set(t,e)}let Vg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ji(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pM(t){Vg=t(Vg)}function mM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qp(this),e,...n);return gC.set(r,e.sort?e.sort():[e]),Ji(r)}:dM().includes(t)?function(...e){return t.apply(Qp(this),e),Ji(mC.get(this))}:function(...e){return Ji(t.apply(Qp(this),e))}}function gM(t){return typeof t=="function"?mM(t):(t instanceof IDBTransaction&&hM(t),uM(t,cM())?new Proxy(t,Vg):t)}function Ji(t){if(t instanceof IDBRequest)return fM(t);if(Yp.has(t))return Yp.get(t);const e=gM(t);return e!==t&&(Yp.set(t,e),Yv.set(e,t)),e}const Qp=t=>Yv.get(t);function yC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Ji(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ji(s.result),l.oldVersion,l.newVersion,Ji(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const yM=["get","getKey","getAll","getAllKeys","count"],vM=["put","add","delete","clear"],Xp=new Map;function j1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xp.get(e))return Xp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yM.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Xp.set(e,o),o}pM(t=>({...t,get:(e,n,r)=>j1(e,n)||t.get(e,n,r),has:(e,n)=>!!j1(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jg="@firebase/app",F1="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new Oh("@firebase/app"),EM="@firebase/app-compat",SM="@firebase/analytics-compat",TM="@firebase/analytics",bM="@firebase/app-check-compat",IM="@firebase/app-check",CM="@firebase/auth",PM="@firebase/auth-compat",AM="@firebase/database",RM="@firebase/data-connect",kM="@firebase/database-compat",OM="@firebase/functions",zM="@firebase/functions-compat",xM="@firebase/installations",NM="@firebase/installations-compat",UM="@firebase/messaging",DM="@firebase/messaging-compat",MM="@firebase/performance",LM="@firebase/performance-compat",VM="@firebase/remote-config",jM="@firebase/remote-config-compat",FM="@firebase/storage",$M="@firebase/storage-compat",BM="@firebase/firestore",WM="@firebase/vertexai-preview",qM="@firebase/firestore-compat",HM="firebase",KM="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="[DEFAULT]",GM={[jg]:"fire-core",[EM]:"fire-core-compat",[TM]:"fire-analytics",[SM]:"fire-analytics-compat",[IM]:"fire-app-check",[bM]:"fire-app-check-compat",[CM]:"fire-auth",[PM]:"fire-auth-compat",[AM]:"fire-rtdb",[RM]:"fire-data-connect",[kM]:"fire-rtdb-compat",[OM]:"fire-fn",[zM]:"fire-fn-compat",[xM]:"fire-iid",[NM]:"fire-iid-compat",[UM]:"fire-fcm",[DM]:"fire-fcm-compat",[MM]:"fire-perf",[LM]:"fire-perf-compat",[VM]:"fire-rc",[jM]:"fire-rc-compat",[FM]:"fire-gcs",[$M]:"fire-gcs-compat",[BM]:"fire-fst",[qM]:"fire-fst-compat",[WM]:"fire-vertex","fire-js":"fire-js",[HM]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new Map,YM=new Map,$g=new Map;function $1(t,e){try{t.container.addComponent(e)}catch(n){fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mr(t){const e=t.name;if($g.has(e))return fi.debug(`There were multiple attempts to register component ${e}.`),!1;$g.set(e,t);for(const n of af.values())$1(n,t);for(const n of YM.values())$1(n,t);return!0}function fs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zi=new ds("app","Firebase",QM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=KM;function vC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fg,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zi.create("bad-app-name",{appName:String(i)});if(n||(n=cC()),!n)throw Zi.create("no-options");const o=af.get(i);if(o){if(iu(n,o.options)&&iu(r,o.config))return o;throw Zi.create("duplicate-app",{appName:i})}const s=new iM(i);for(const l of $g.values())s.addComponent(l);const a=new XM(n,r,s);return af.set(i,a),a}function Qv(t=Fg){const e=af.get(t);if(!e&&t===Fg&&cC())return vC();if(!e)throw Zi.create("no-app",{appName:t});return e}function Kn(t,e,n){var r;let i=(r=GM[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fi.warn(a.join(" "));return}Mr(new wr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM="firebase-heartbeat-database",ZM=1,ou="firebase-heartbeat-store";let Jp=null;function _C(){return Jp||(Jp=yC(JM,ZM,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ou)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zi.create("idb-open",{originalErrorMessage:t.message})})),Jp}async function eL(t){try{const n=(await _C()).transaction(ou),r=await n.objectStore(ou).get(wC(t));return await n.done,r}catch(e){if(e instanceof Sr)fi.warn(e.message);else{const n=Zi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fi.warn(n.message)}}}async function B1(t,e){try{const r=(await _C()).transaction(ou,"readwrite");await r.objectStore(ou).put(e,wC(t)),await r.done}catch(n){if(n instanceof Sr)fi.warn(n.message);else{const r=Zi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fi.warn(r.message)}}}function wC(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL=1024,nL=30*24*60*60*1e3;class rL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=W1();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=nL}),this._storage.overwrite(this._heartbeatsCache))}catch(r){fi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=W1(),{heartbeatsToSend:r,unsentEntries:i}=iL(this._heartbeatsCache.heartbeats),o=sf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return fi.warn(n),""}}}function W1(){return new Date().toISOString().substring(0,10)}function iL(t,e=tL){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),q1(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),q1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hC()?pC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return B1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return B1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function q1(t){return sf(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(t){Mr(new wr("platform-logger",e=>new _M(e),"PRIVATE")),Mr(new wr("heartbeat",e=>new rL(e),"PRIVATE")),Kn(jg,F1,t),Kn(jg,F1,"esm2017"),Kn("fire-js","")}sL("");var aL="firebase",lL="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn(aL,lL,"app");const EC="@firebase/installations",Xv="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=1e4,TC=`w:${Xv}`,bC="FIS_v2",uL="https://firebaseinstallations.googleapis.com/v1",cL=60*60*1e3,dL="installations",fL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},es=new ds(dL,fL,hL);function IC(t){return t instanceof Sr&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC({projectId:t}){return`${uL}/projects/${t}/installations`}function PC(t){return{token:t.token,requestStatus:2,expiresIn:mL(t.expiresIn),creationTime:Date.now()}}async function AC(t,e){const r=(await e.json()).error;return es.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function RC({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function pL(t,{refreshToken:e}){const n=RC(t);return n.append("Authorization",gL(e)),n}async function kC(t){const e=await t();return e.status>=500&&e.status<600?t():e}function mL(t){return Number(t.replace("s","000"))}function gL(t){return`${bC} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=CC(t),i=RC(t),o=e.getImmediate({optional:!0});if(o){const c=await o.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const s={fid:n,authVersion:bC,appId:t.appId,sdkVersion:TC},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await kC(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:PC(c.authToken)}}else throw await AC("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L=/^[cdef][\w-]{21}$/,Bg="";function wL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=EL(t);return _L.test(n)?n:Bg}catch{return Bg}}function EL(t){return vL(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=new Map;function xC(t,e){const n=zh(t);NC(n,e),SL(n,e)}function NC(t,e){const n=zC.get(t);if(n)for(const r of n)r(e)}function SL(t,e){const n=TL();n&&n.postMessage({key:t,fid:e}),bL()}let Vo=null;function TL(){return!Vo&&"BroadcastChannel"in self&&(Vo=new BroadcastChannel("[Firebase] FID Change"),Vo.onmessage=t=>{NC(t.data.key,t.data.fid)}),Vo}function bL(){zC.size===0&&Vo&&(Vo.close(),Vo=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL="firebase-installations-database",CL=1,ts="firebase-installations-store";let Zp=null;function Jv(){return Zp||(Zp=yC(IL,CL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ts)}}})),Zp}async function lf(t,e){const n=zh(t),i=(await Jv()).transaction(ts,"readwrite"),o=i.objectStore(ts),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&xC(t,e.fid),e}async function UC(t){const e=zh(t),r=(await Jv()).transaction(ts,"readwrite");await r.objectStore(ts).delete(e),await r.done}async function xh(t,e){const n=zh(t),i=(await Jv()).transaction(ts,"readwrite"),o=i.objectStore(ts),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&xC(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zv(t){let e;const n=await xh(t.appConfig,r=>{const i=PL(r),o=AL(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Bg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function PL(t){const e=t||{fid:wL(),registrationStatus:0};return DC(e)}function AL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(es.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=RL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:kL(t)}:{installationEntry:e}}async function RL(t,e){try{const n=await yL(t,e);return lf(t.appConfig,n)}catch(n){throw IC(n)&&n.customData.serverCode===409?await UC(t.appConfig):await lf(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function kL(t){let e=await H1(t.appConfig);for(;e.registrationStatus===1;)await OC(100),e=await H1(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Zv(t);return r||n}return e}function H1(t){return xh(t,e=>{if(!e)throw es.create("installation-not-found");return DC(e)})}function DC(t){return OL(t)?{fid:t.fid,registrationStatus:0}:t}function OL(t){return t.registrationStatus===1&&t.registrationTime+SC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zL({appConfig:t,heartbeatServiceProvider:e},n){const r=xL(t,n),i=pL(t,n),o=e.getImmediate({optional:!0});if(o){const c=await o.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const s={installation:{sdkVersion:TC,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await kC(()=>fetch(r,a));if(l.ok){const c=await l.json();return PC(c)}else throw await AC("Generate Auth Token",l)}function xL(t,{fid:e}){return`${CC(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(t,e=!1){let n;const r=await xh(t.appConfig,o=>{if(!MC(o))throw es.create("not-registered");const s=o.authToken;if(!e&&DL(s))return o;if(s.requestStatus===1)return n=NL(t,e),o;{if(!navigator.onLine)throw es.create("app-offline");const a=LL(o);return n=UL(t,a),a}});return n?await n:r.authToken}async function NL(t,e){let n=await K1(t.appConfig);for(;n.authToken.requestStatus===1;)await OC(100),n=await K1(t.appConfig);const r=n.authToken;return r.requestStatus===0?e0(t,e):r}function K1(t){return xh(t,e=>{if(!MC(e))throw es.create("not-registered");const n=e.authToken;return VL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function UL(t,e){try{const n=await zL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await lf(t.appConfig,r),n}catch(n){if(IC(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await UC(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await lf(t.appConfig,r)}throw n}}function MC(t){return t!==void 0&&t.registrationStatus===2}function DL(t){return t.requestStatus===2&&!ML(t)}function ML(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+cL}function LL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function VL(t){return t.requestStatus===1&&t.requestTime+SC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jL(t){const e=t,{installationEntry:n,registrationPromise:r}=await Zv(e);return r?r.catch(console.error):e0(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FL(t,e=!1){const n=t;return await $L(n),(await e0(n,e)).token}async function $L(t){const{registrationPromise:e}=await Zv(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BL(t){if(!t||!t.options)throw em("App Configuration");if(!t.name)throw em("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw em(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function em(t){return es.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC="installations",WL="installations-internal",qL=t=>{const e=t.getProvider("app").getImmediate(),n=BL(e),r=fs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},HL=t=>{const e=t.getProvider("app").getImmediate(),n=fs(e,LC).getImmediate();return{getId:()=>jL(n),getToken:i=>FL(n,i)}};function KL(){Mr(new wr(LC,qL,"PUBLIC")),Mr(new wr(WL,HL,"PRIVATE"))}KL();Kn(EC,Xv);Kn(EC,Xv,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="analytics",GL="firebase_id",YL="origin",QL=60*1e3,XL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",t0="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Oh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rn=new ds("analytics","Analytics",JL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(t){if(!t.startsWith(t0)){const e=Rn.create("invalid-gtag-resource",{gtagURL:t});return mn.warn(e.message),""}return t}function VC(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function e4(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function t4(t,e){const n=e4("firebase-js-sdk-policy",{createScriptURL:ZL}),r=document.createElement("script"),i=`${t0}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function n4(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function r4(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const l=(await VC(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){mn.error(a)}t("config",i,o)}async function i4(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await VC(n);for(const l of s){const c=a.find(h=>h.measurementId===l),f=c&&e[c.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){mn.error(o)}}function o4(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await i4(t,e,n,a,l)}else if(o==="config"){const[a,l]=s;await r4(t,e,n,r,a,l)}else if(o==="consent"){const[a,l]=s;t("consent",a,l)}else if(o==="get"){const[a,l,c]=s;t("get",a,l,c)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){mn.error(a)}}return i}function s4(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=o4(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function a4(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(t0)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4=30,u4=1e3;class c4{constructor(e={},n=u4){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jC=new c4;function d4(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function f4(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:d4(r)},o=XL.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Rn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function h4(t,e=jC,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw Rn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Rn.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new g4;return setTimeout(async()=>{a.abort()},n!==void 0?n:QL),FC({appId:r,apiKey:i,measurementId:o},s,a,e)}async function FC(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=jC){var o;const{appId:s,measurementId:a}=t;try{await p4(r,e)}catch(l){if(a)return mn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await f4(t);return i.deleteThrottleMetadata(s),l}catch(l){const c=l;if(!m4(c)){if(i.deleteThrottleMetadata(s),a)return mn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:a};throw l}const f=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?M1(n,i.intervalMillis,l4):M1(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,h),mn.debug(`Calling attemptFetch again in ${f} millis`),FC(t,h,r,i)}}function p4(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(Rn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function m4(t){if(!(t instanceof Sr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class g4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function y4(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v4(){if(hC())try{await pC()}catch(t){return mn.warn(Rn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return mn.warn(Rn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _4(t,e,n,r,i,o,s){var a;const l=h4(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&mn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>mn.error(_)),e.push(l);const c=v4().then(_=>{if(_)return r.getId()}),[f,h]=await Promise.all([l,c]);a4(o)||t4(o,f.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[YL]="firebase",m.update=!0,h!=null&&(m[GL]=h),i("config",f.measurementId,m),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e){this.app=e}_delete(){return delete Cl[this.app.options.appId],Promise.resolve()}}let Cl={},G1=[];const Y1={};let tm="dataLayer",E4="gtag",Q1,$C,X1=!1;function S4(){const t=[];if(fC()&&t.push("This is a browser extension environment."),BD()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Rn.create("invalid-analytics-context",{errorInfo:e});mn.warn(n.message)}}function T4(t,e,n){S4();const r=t.options.appId;if(!r)throw Rn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)mn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rn.create("no-api-key");if(Cl[r]!=null)throw Rn.create("already-exists",{id:r});if(!X1){n4(tm);const{wrappedGtag:o,gtagCore:s}=s4(Cl,G1,Y1,tm,E4);$C=o,Q1=s,X1=!0}return Cl[r]=_4(t,G1,Y1,e,Q1,tm,n),new w4(t)}function b4(t=Qv()){t=gn(t);const e=fs(t,uf);return e.isInitialized()?e.getImmediate():I4(t)}function I4(t,e={}){const n=fs(t,uf);if(n.isInitialized()){const i=n.getImmediate();if(iu(e,n.getOptions()))return i;throw Rn.create("already-initialized")}return n.initialize({options:e})}function C4(t,e,n,r){t=gn(t),y4($C,Cl[t.app.options.appId],e,n,r).catch(i=>mn.error(i))}const J1="@firebase/analytics",Z1="0.10.8";function P4(){Mr(new wr(uf,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return T4(r,i,n)},"PUBLIC")),Mr(new wr("analytics-internal",t,"PRIVATE")),Kn(J1,Z1),Kn(J1,Z1,"esm2017");function t(e){try{const n=e.getProvider(uf).getImmediate();return{logEvent:(r,i,o)=>C4(n,r,i,o)}}catch(n){throw Rn.create("interop-component-reg-failed",{reason:n})}}}P4();function n0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function BC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const A4=BC,WC=new ds("auth","Firebase",BC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=new Oh("@firebase/auth");function R4(t,...e){cf.logLevel<=Te.WARN&&cf.warn(`Auth (${ka}): ${t}`,...e)}function Gc(t,...e){cf.logLevel<=Te.ERROR&&cf.error(`Auth (${ka}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,...e){throw i0(t,...e)}function vr(t,...e){return i0(t,...e)}function r0(t,e,n){const r=Object.assign(Object.assign({},A4()),{[e]:n});return new ds("auth","Firebase",r).create(e,{appName:t.name})}function ri(t){return r0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function k4(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xn(t,"argument-error"),r0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function i0(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return WC.create(t,...e)}function ie(t,e,...n){if(!t)throw i0(e,...n)}function Zr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gc(e),new Error(e)}function hi(t,e){t||Zr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function O4(){return eE()==="http:"||eE()==="https:"}function eE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O4()||fC()||"connection"in navigator)?navigator.onLine:!0}function x4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n){this.shortDelay=e,this.longDelay=n,hi(n>e,"Short delay should be less than long delay!"),this.isMobile=MD()||jD()}get(){return z4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t,e){hi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4=new Pu(3e4,6e4);function co(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fo(t,e,n,r,i={}){return HC(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Cu(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},o);return VD()||(c.referrerPolicy="no-referrer"),qC.fetch()(KC(t,t.config.apiHost,n,a),c)})}async function HC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},N4),e);try{const i=new M4(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ic(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ic(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ic(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ic(t,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw r0(t,f,c);Xn(t,f)}}catch(i){if(i instanceof Sr)throw i;Xn(t,"network-request-failed",{message:String(i)})}}async function Au(t,e,n,r,i={}){const o=await fo(t,e,n,r,i);return"mfaPendingCredential"in o&&Xn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function KC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?o0(t.config,i):`${t.config.apiScheme}://${i}`}function D4(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class M4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vr(this.auth,"network-request-failed")),U4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ic(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vr(t,e,r);return i.customData._tokenResponse=n,i}function tE(t){return t!==void 0&&t.enterprise!==void 0}class L4{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return D4(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function V4(t,e){return fo(t,"GET","/v2/recaptchaConfig",co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j4(t,e){return fo(t,"POST","/v1/accounts:delete",e)}async function GC(t,e){return fo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function F4(t,e=!1){const n=gn(t),r=await n.getIdToken(e),i=s0(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Pl(nm(i.auth_time)),issuedAtTime:Pl(nm(i.iat)),expirationTime:Pl(nm(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function nm(t){return Number(t)*1e3}function s0(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gc("JWT malformed, contained fewer than 3 sections"),null;try{const i=lC(n);return i?JSON.parse(i):(Gc("Failed to decode base64 JWT payload"),null)}catch(i){return Gc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nE(t){const e=s0(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function su(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sr&&$4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pl(this.lastLoginAt),this.creationTime=Pl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function df(t){var e;const n=t.auth,r=await t.getIdToken(),i=await su(t,GC(n,{idToken:r}));ie(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?YC(o.providerUserInfo):[],a=q4(t.providerData,s),l=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new qg(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function W4(t){const e=gn(t);await df(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function q4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function YC(t){return t.map(e=>{var{providerId:n}=e,r=n0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H4(t,e){const n=await HC(t,{},async()=>{const r=Cu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=KC(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qC.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function K4(t,e){return fo(t,"POST","/v2/accounts:revokeToken",co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=nE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await H4(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ea;return r&&(ie(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(ie(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ea,this.toJSON())}_performRefresh(){return Zr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ei{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=n0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new qg(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await su(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return F4(this,e)}reload(){return W4(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await df(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hr(this.auth.app))return Promise.reject(ri(this.auth));const e=await this.getIdToken();return await su(this,j4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,c,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,E=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,d=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:v,emailVerified:b,isAnonymous:I,providerData:x,stsTokenManager:C}=n;ie(v&&C,e,"internal-error");const T=ea.fromJSON(this.name,C);ie(typeof v=="string",e,"internal-error"),Ci(h,e.name),Ci(m,e.name),ie(typeof b=="boolean",e,"internal-error"),ie(typeof I=="boolean",e,"internal-error"),Ci(_,e.name),Ci(E,e.name),Ci(w,e.name),Ci(d,e.name),Ci(p,e.name),Ci(g,e.name);const P=new ei({uid:v,auth:e,email:m,emailVerified:b,displayName:h,isAnonymous:I,photoURL:E,phoneNumber:_,tenantId:w,stsTokenManager:T,createdAt:p,lastLoginAt:g});return x&&Array.isArray(x)&&(P.providerData=x.map(A=>Object.assign({},A))),d&&(P._redirectEventId=d),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new ea;i.updateFromServerResponse(n);const o=new ei({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await df(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ie(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?YC(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new ea;a.updateFromIdToken(r);const l=new ei({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new qg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=new Map;function ti(t){hi(t instanceof Function,"Expected a class definition");let e=rE.get(t);return e?(hi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rE.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}QC.type="NONE";const iE=QC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t,e,n){return`firebase:${t}:${e}:${n}`}class ta{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Yc(this.userKey,i.apiKey,o),this.fullPersistenceKey=Yc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ta(ti(iE),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||ti(iE);const s=Yc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(s);if(f){const h=ei._fromJSON(e,f);c!==o&&(a=h),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new ta(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new ta(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nP(e))return"Blackberry";if(rP(e))return"Webos";if(JC(e))return"Safari";if((e.includes("chrome/")||ZC(e))&&!e.includes("edge/"))return"Chrome";if(tP(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function XC(t=Jt()){return/firefox\//i.test(t)}function JC(t=Jt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZC(t=Jt()){return/crios\//i.test(t)}function eP(t=Jt()){return/iemobile/i.test(t)}function tP(t=Jt()){return/android/i.test(t)}function nP(t=Jt()){return/blackberry/i.test(t)}function rP(t=Jt()){return/webos/i.test(t)}function a0(t=Jt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function G4(t=Jt()){var e;return a0(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Y4(){return FD()&&document.documentMode===10}function iP(t=Jt()){return a0(t)||tP(t)||rP(t)||nP(t)||/windows phone/i.test(t)||eP(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t,e=[]){let n;switch(t){case"Browser":n=oE(Jt());break;case"Worker":n=`${oE(Jt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ka}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X4(t,e={}){return fo(t,"GET","/v2/passwordPolicy",co(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4=6;class Z4{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:J4,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sE(this),this.idTokenSubscription=new sE(this),this.beforeStateQueue=new Q4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=WC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ti(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ta.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await GC(this,{idToken:e}),r=await ei._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(hr(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await df(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hr(this.app))return Promise.reject(ri(this));const n=e?gn(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hr(this.app)?Promise.reject(ri(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hr(this.app)?Promise.reject(ri(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ti(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await X4(this),n=new Z4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await K4(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ti(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await ta.create(this,[ti(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&R4(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ho(t){return gn(t)}class sE{constructor(e){this.auth=e,this.observer=null,this.addObserver=GD(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tV(t){Nh=t}function sP(t){return Nh.loadJS(t)}function nV(){return Nh.recaptchaEnterpriseScript}function rV(){return Nh.gapiScript}function iV(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const oV="recaptcha-enterprise",sV="NO_RECAPTCHA";class aV{constructor(e){this.type=oV,this.auth=ho(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{V4(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new L4(l);return o.tenantId==null?o._agentRecaptchaConfig=c:o._tenantRecaptchaConfigs[o.tenantId]=c,s(c.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;tE(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(c=>{s(c)}).catch(()=>{s(sV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&tE(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=nV();l.length!==0&&(l+=a),sP(l).then(()=>{i(a,o,s)}).catch(c=>{s(c)})}}).catch(a=>{s(a)})})}}async function aE(t,e,n,r=!1){const i=new aV(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Hg(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await aE(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await aE(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(t,e){const n=fs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(iu(o,e??{}))return i;Xn(i,"already-initialized")}return n.initialize({options:e})}function uV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ti);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cV(t,e,n){const r=ho(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=aP(e),{host:s,port:a}=dV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||fV()}function aP(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dV(t){const e=aP(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:lE(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:lE(s)}}}function lE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zr("not implemented")}_getIdTokenResponse(e){return Zr("not implemented")}_linkToIdToken(e,n){return Zr("not implemented")}_getReauthenticationResolver(e){return Zr("not implemented")}}async function hV(t,e){return fo(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pV(t,e){return Au(t,"POST","/v1/accounts:signInWithPassword",co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mV(t,e){return Au(t,"POST","/v1/accounts:signInWithEmailLink",co(t,e))}async function gV(t,e){return Au(t,"POST","/v1/accounts:signInWithEmailLink",co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends l0{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new au(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new au(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hg(e,n,"signInWithPassword",pV);case"emailLink":return mV(e,{email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hg(e,r,"signUpPassword",hV);case"emailLink":return gV(e,{idToken:n,email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(t,e){return Au(t,"POST","/v1/accounts:signInWithIdp",co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV="http://localhost";class ns extends l0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=n0(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ns(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return na(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,na(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,na(e,n)}buildRequest(){const e={requestUri:yV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Cu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _V(t){const e=ll(ul(t)).link,n=e?ll(ul(e)).deep_link_id:null,r=ll(ul(t)).deep_link_id;return(r?ll(ul(r)).link:null)||r||n||e||t}class u0{constructor(e){var n,r,i,o,s,a;const l=ll(ul(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,h=vV((i=l.mode)!==null&&i!==void 0?i:null);ie(c&&f&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=f,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_V(e);try{return new u0(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.providerId=Oa.PROVIDER_ID}static credential(e,n){return au._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=u0.parseLink(n);return ie(r,"argument-error"),au._fromEmailAndCode(e,r.code,r.tenantId)}}Oa.PROVIDER_ID="password";Oa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru extends c0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Ru{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:zi.PROVIDER_ID,signInMethod:zi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zi.credentialFromTaggedObject(e)}static credentialFromError(e){return zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zi.credential(e.oauthAccessToken)}catch{return null}}}zi.FACEBOOK_SIGN_IN_METHOD="facebook.com";zi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Ru{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.GOOGLE_SIGN_IN_METHOD="google.com";Yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Ru{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xi.credential(e.oauthAccessToken)}catch{return null}}}xi.GITHUB_SIGN_IN_METHOD="github.com";xi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Ru{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ni.credential(n,r)}catch{return null}}}Ni.TWITTER_SIGN_IN_METHOD="twitter.com";Ni.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wV(t,e){return Au(t,"POST","/v1/accounts:signUp",co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await ei._fromIdTokenResponse(e,r,i),s=uE(r);return new rs({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=uE(r);return new rs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function uE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff extends Sr{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ff.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ff(e,n,r,i)}}function lP(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ff._fromErrorAndOperation(t,o,e,r):o})}async function EV(t,e,n=!1){const r=await su(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SV(t,e,n=!1){const{auth:r}=t;if(hr(r.app))return Promise.reject(ri(r));const i="reauthenticate";try{const o=await su(t,lP(r,i,e,t),n);ie(o.idToken,r,"internal-error");const s=s0(o.idToken);ie(s,r,"internal-error");const{sub:a}=s;return ie(t.uid===a,r,"user-mismatch"),rs._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Xn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,e,n=!1){if(hr(t.app))return Promise.reject(ri(t));const r="signIn",i=await lP(t,r,e),o=await rs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function TV(t,e){return uP(ho(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(t){const e=ho(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function D6(t,e,n){if(hr(t.app))return Promise.reject(ri(t));const r=ho(t),s=await Hg(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wV).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&cP(t),l}),a=await rs._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function M6(t,e,n){return hr(t.app)?Promise.reject(ri(t)):TV(gn(t),Oa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cP(t),r})}function bV(t,e,n,r){return gn(t).onIdTokenChanged(e,n,r)}function IV(t,e,n){return gn(t).beforeAuthStateChanged(e,n)}function L6(t){return gn(t).signOut()}const hf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hf,"1"),this.storage.removeItem(hf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CV=1e3,PV=10;class fP extends dP{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iP(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Y4()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PV):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fP.type="LOCAL";const AV=fP;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP extends dP{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hP.type="SESSION";const pP=hP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Uh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(n.origin,o)),l=await RV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=d0("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(){return window}function OV(t){xr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(){return typeof xr().WorkerGlobalScope<"u"&&typeof xr().importScripts=="function"}async function zV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NV(){return mP()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP="firebaseLocalStorageDb",UV=1,pf="firebaseLocalStorage",yP="fbase_key";class ku{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dh(t,e){return t.transaction([pf],e?"readwrite":"readonly").objectStore(pf)}function DV(){const t=indexedDB.deleteDatabase(gP);return new ku(t).toPromise()}function Kg(){const t=indexedDB.open(gP,UV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pf,{keyPath:yP})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pf)?e(r):(r.close(),await DV(),e(await Kg()))})})}async function cE(t,e,n){const r=Dh(t,!0).put({[yP]:e,value:n});return new ku(r).toPromise()}async function MV(t,e){const n=Dh(t,!1).get(e),r=await new ku(n).toPromise();return r===void 0?null:r.value}function dE(t,e){const n=Dh(t,!0).delete(e);return new ku(n).toPromise()}const LV=800,VV=3;class vP{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>VV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mP()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uh._getInstance(NV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zV(),!this.activeServiceWorker)return;this.sender=new kV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kg();return await cE(e,hf,"1"),await dE(e,hf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>MV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Dh(i,!1).getAll();return new ku(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vP.type="LOCAL";const jV=vP;new Pu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t,e){return e?ti(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0 extends l0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return na(e,this._buildIdpRequest())}_linkToIdToken(e,n){return na(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return na(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FV(t){return uP(t.auth,new f0(t),t.bypassAuthState)}function $V(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),SV(n,new f0(t),t.bypassAuthState)}async function BV(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),EV(n,new f0(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FV;case"linkViaPopup":case"linkViaRedirect":return BV;case"reauthViaPopup":case"reauthViaRedirect":return $V;default:Xn(this.auth,"internal-error")}}resolve(e){hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WV=new Pu(2e3,1e4);async function V6(t,e,n){if(hr(t.app))return Promise.reject(vr(t,"operation-not-supported-in-this-environment"));const r=ho(t);k4(t,e,c0);const i=_P(r,n);return new jo(r,"signInViaPopup",e,i).executeNotNull()}class jo extends wP{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,jo.currentPopupAction&&jo.currentPopupAction.cancel(),jo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){hi(this.filter.length===1,"Popup operations only handle one event");const e=d0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WV.get())};e()}}jo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qV="pendingRedirect",Qc=new Map;class HV extends wP{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qc.get(this.auth._key());if(!e){try{const r=await KV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qc.set(this.auth._key(),e)}return this.bypassAuthState||Qc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KV(t,e){const n=QV(e),r=YV(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function GV(t,e){Qc.set(t._key(),e)}function YV(t){return ti(t._redirectPersistence)}function QV(t){return Yc(qV,t.config.apiKey,t.name)}async function XV(t,e,n=!1){if(hr(t.app))return Promise.reject(ri(t));const r=ho(t),i=_P(r,e),s=await new HV(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JV=10*60*1e3;class ZV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!e5(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!EP(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JV&&this.cachedEventUids.clear(),this.cachedEventUids.has(fE(e))}saveEventToCache(e){this.cachedEventUids.add(fE(e)),this.lastProcessedEventTime=Date.now()}}function fE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function EP({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function e5(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return EP(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t5(t,e={}){return fo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,r5=/^https?/;async function i5(t){if(t.config.emulator)return;const{authorizedDomains:e}=await t5(t);for(const n of e)try{if(o5(n))return}catch{}Xn(t,"unauthorized-domain")}function o5(t){const e=Wg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!r5.test(n))return!1;if(n5.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s5=new Pu(3e4,6e4);function hE(){const t=xr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function a5(t){return new Promise((e,n)=>{var r,i,o;function s(){hE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hE(),n(vr(t,"network-request-failed"))},timeout:s5.get()})}if(!((i=(r=xr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=xr().gapi)===null||o===void 0)&&o.load)s();else{const a=iV("iframefcb");return xr()[a]=()=>{gapi.load?s():n(vr(t,"network-request-failed"))},sP(`${rV()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xc=null,e})}let Xc=null;function l5(t){return Xc=Xc||a5(t),Xc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u5=new Pu(5e3,15e3),c5="__/auth/iframe",d5="emulator/auth/iframe",f5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},h5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function p5(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?o0(e,d5):`https://${t.config.authDomain}/${c5}`,r={apiKey:e.apiKey,appName:t.name,v:ka},i=h5.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Cu(r).slice(1)}`}async function m5(t){const e=await l5(t),n=xr().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:p5(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:f5,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=vr(t,"network-request-failed"),a=xr().setTimeout(()=>{o(s)},u5.get());function l(){xr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g5={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},y5=500,v5=600,_5="_blank",w5="http://localhost";class pE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function E5(t,e,n,r=y5,i=v5){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},g5),{width:r.toString(),height:i.toString(),top:o,left:s}),c=Jt().toLowerCase();n&&(a=ZC(c)?_5:n),XC(c)&&(e=e||w5,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,E])=>`${m}${_}=${E},`,"");if(G4(c)&&a!=="_self")return S5(e||"",a),new pE(null);const h=window.open(e||"",a,f);ie(h,t,"popup-blocked");try{h.focus()}catch{}return new pE(h)}function S5(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T5="__/auth/handler",b5="emulator/auth/handler",I5=encodeURIComponent("fac");async function mE(t,e,n,r,i,o){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ka,eventId:i};if(e instanceof c0){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",KD(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries(o||{}))s[f]=h}if(e instanceof Ru){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),c=l?`#${I5}=${encodeURIComponent(l)}`:"";return`${C5(t)}?${Cu(a).slice(1)}${c}`}function C5({config:t}){return t.emulator?o0(t,b5):`https://${t.authDomain}/${T5}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="webStorageSupport";class P5{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pP,this._completeRedirectFn=XV,this._overrideRedirectResult=GV}async _openPopup(e,n,r,i){var o;hi((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await mE(e,n,r,Wg(),i);return E5(e,s,d0())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await mE(e,n,r,Wg(),i);return OV(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(hi(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await m5(e),r=new ZV(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rm,{type:rm},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[rm];s!==void 0&&n(!!s),Xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=i5(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iP()||JC()||a0()}}const A5=P5;var gE="@firebase/auth",yE="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R5{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k5(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function O5(t){Mr(new wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;ie(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oP(t)},c=new eV(r,i,o,l);return uV(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mr(new wr("auth-internal",e=>{const n=ho(e.getProvider("auth").getImmediate());return(r=>new R5(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(gE,yE,k5(t)),Kn(gE,yE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z5=5*60,x5=dC("authIdTokenMaxAge")||z5;let vE=null;const N5=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>x5)return;const i=n==null?void 0:n.token;vE!==i&&(vE=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function U5(t=Qv()){const e=fs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lV(t,{popupRedirectResolver:A5,persistence:[jV,AV,pP]}),r=dC("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=N5(o.toString());IV(n,s,()=>s(n.currentUser)),bV(n,a=>s(a))}}const i=uC("auth");return i&&cV(n,`http://${i}`),n}function D5(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=vr("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",D5().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});O5("Browser");var _E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wo,SP;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,T){function P(){}P.prototype=T.prototype,C.D=T.prototype,C.prototype=new P,C.prototype.constructor=C,C.C=function(A,O,z){for(var k=Array(arguments.length-2),q=2;q<arguments.length;q++)k[q-2]=arguments[q];return T.prototype[O].apply(A,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,T,P){P||(P=0);var A=Array(16);if(typeof T=="string")for(var O=0;16>O;++O)A[O]=T.charCodeAt(P++)|T.charCodeAt(P++)<<8|T.charCodeAt(P++)<<16|T.charCodeAt(P++)<<24;else for(O=0;16>O;++O)A[O]=T[P++]|T[P++]<<8|T[P++]<<16|T[P++]<<24;T=C.g[0],P=C.g[1],O=C.g[2];var z=C.g[3],k=T+(z^P&(O^z))+A[0]+3614090360&4294967295;T=P+(k<<7&4294967295|k>>>25),k=z+(O^T&(P^O))+A[1]+3905402710&4294967295,z=T+(k<<12&4294967295|k>>>20),k=O+(P^z&(T^P))+A[2]+606105819&4294967295,O=z+(k<<17&4294967295|k>>>15),k=P+(T^O&(z^T))+A[3]+3250441966&4294967295,P=O+(k<<22&4294967295|k>>>10),k=T+(z^P&(O^z))+A[4]+4118548399&4294967295,T=P+(k<<7&4294967295|k>>>25),k=z+(O^T&(P^O))+A[5]+1200080426&4294967295,z=T+(k<<12&4294967295|k>>>20),k=O+(P^z&(T^P))+A[6]+2821735955&4294967295,O=z+(k<<17&4294967295|k>>>15),k=P+(T^O&(z^T))+A[7]+4249261313&4294967295,P=O+(k<<22&4294967295|k>>>10),k=T+(z^P&(O^z))+A[8]+1770035416&4294967295,T=P+(k<<7&4294967295|k>>>25),k=z+(O^T&(P^O))+A[9]+2336552879&4294967295,z=T+(k<<12&4294967295|k>>>20),k=O+(P^z&(T^P))+A[10]+4294925233&4294967295,O=z+(k<<17&4294967295|k>>>15),k=P+(T^O&(z^T))+A[11]+2304563134&4294967295,P=O+(k<<22&4294967295|k>>>10),k=T+(z^P&(O^z))+A[12]+1804603682&4294967295,T=P+(k<<7&4294967295|k>>>25),k=z+(O^T&(P^O))+A[13]+4254626195&4294967295,z=T+(k<<12&4294967295|k>>>20),k=O+(P^z&(T^P))+A[14]+2792965006&4294967295,O=z+(k<<17&4294967295|k>>>15),k=P+(T^O&(z^T))+A[15]+1236535329&4294967295,P=O+(k<<22&4294967295|k>>>10),k=T+(O^z&(P^O))+A[1]+4129170786&4294967295,T=P+(k<<5&4294967295|k>>>27),k=z+(P^O&(T^P))+A[6]+3225465664&4294967295,z=T+(k<<9&4294967295|k>>>23),k=O+(T^P&(z^T))+A[11]+643717713&4294967295,O=z+(k<<14&4294967295|k>>>18),k=P+(z^T&(O^z))+A[0]+3921069994&4294967295,P=O+(k<<20&4294967295|k>>>12),k=T+(O^z&(P^O))+A[5]+3593408605&4294967295,T=P+(k<<5&4294967295|k>>>27),k=z+(P^O&(T^P))+A[10]+38016083&4294967295,z=T+(k<<9&4294967295|k>>>23),k=O+(T^P&(z^T))+A[15]+3634488961&4294967295,O=z+(k<<14&4294967295|k>>>18),k=P+(z^T&(O^z))+A[4]+3889429448&4294967295,P=O+(k<<20&4294967295|k>>>12),k=T+(O^z&(P^O))+A[9]+568446438&4294967295,T=P+(k<<5&4294967295|k>>>27),k=z+(P^O&(T^P))+A[14]+3275163606&4294967295,z=T+(k<<9&4294967295|k>>>23),k=O+(T^P&(z^T))+A[3]+4107603335&4294967295,O=z+(k<<14&4294967295|k>>>18),k=P+(z^T&(O^z))+A[8]+1163531501&4294967295,P=O+(k<<20&4294967295|k>>>12),k=T+(O^z&(P^O))+A[13]+2850285829&4294967295,T=P+(k<<5&4294967295|k>>>27),k=z+(P^O&(T^P))+A[2]+4243563512&4294967295,z=T+(k<<9&4294967295|k>>>23),k=O+(T^P&(z^T))+A[7]+1735328473&4294967295,O=z+(k<<14&4294967295|k>>>18),k=P+(z^T&(O^z))+A[12]+2368359562&4294967295,P=O+(k<<20&4294967295|k>>>12),k=T+(P^O^z)+A[5]+4294588738&4294967295,T=P+(k<<4&4294967295|k>>>28),k=z+(T^P^O)+A[8]+2272392833&4294967295,z=T+(k<<11&4294967295|k>>>21),k=O+(z^T^P)+A[11]+1839030562&4294967295,O=z+(k<<16&4294967295|k>>>16),k=P+(O^z^T)+A[14]+4259657740&4294967295,P=O+(k<<23&4294967295|k>>>9),k=T+(P^O^z)+A[1]+2763975236&4294967295,T=P+(k<<4&4294967295|k>>>28),k=z+(T^P^O)+A[4]+1272893353&4294967295,z=T+(k<<11&4294967295|k>>>21),k=O+(z^T^P)+A[7]+4139469664&4294967295,O=z+(k<<16&4294967295|k>>>16),k=P+(O^z^T)+A[10]+3200236656&4294967295,P=O+(k<<23&4294967295|k>>>9),k=T+(P^O^z)+A[13]+681279174&4294967295,T=P+(k<<4&4294967295|k>>>28),k=z+(T^P^O)+A[0]+3936430074&4294967295,z=T+(k<<11&4294967295|k>>>21),k=O+(z^T^P)+A[3]+3572445317&4294967295,O=z+(k<<16&4294967295|k>>>16),k=P+(O^z^T)+A[6]+76029189&4294967295,P=O+(k<<23&4294967295|k>>>9),k=T+(P^O^z)+A[9]+3654602809&4294967295,T=P+(k<<4&4294967295|k>>>28),k=z+(T^P^O)+A[12]+3873151461&4294967295,z=T+(k<<11&4294967295|k>>>21),k=O+(z^T^P)+A[15]+530742520&4294967295,O=z+(k<<16&4294967295|k>>>16),k=P+(O^z^T)+A[2]+3299628645&4294967295,P=O+(k<<23&4294967295|k>>>9),k=T+(O^(P|~z))+A[0]+4096336452&4294967295,T=P+(k<<6&4294967295|k>>>26),k=z+(P^(T|~O))+A[7]+1126891415&4294967295,z=T+(k<<10&4294967295|k>>>22),k=O+(T^(z|~P))+A[14]+2878612391&4294967295,O=z+(k<<15&4294967295|k>>>17),k=P+(z^(O|~T))+A[5]+4237533241&4294967295,P=O+(k<<21&4294967295|k>>>11),k=T+(O^(P|~z))+A[12]+1700485571&4294967295,T=P+(k<<6&4294967295|k>>>26),k=z+(P^(T|~O))+A[3]+2399980690&4294967295,z=T+(k<<10&4294967295|k>>>22),k=O+(T^(z|~P))+A[10]+4293915773&4294967295,O=z+(k<<15&4294967295|k>>>17),k=P+(z^(O|~T))+A[1]+2240044497&4294967295,P=O+(k<<21&4294967295|k>>>11),k=T+(O^(P|~z))+A[8]+1873313359&4294967295,T=P+(k<<6&4294967295|k>>>26),k=z+(P^(T|~O))+A[15]+4264355552&4294967295,z=T+(k<<10&4294967295|k>>>22),k=O+(T^(z|~P))+A[6]+2734768916&4294967295,O=z+(k<<15&4294967295|k>>>17),k=P+(z^(O|~T))+A[13]+1309151649&4294967295,P=O+(k<<21&4294967295|k>>>11),k=T+(O^(P|~z))+A[4]+4149444226&4294967295,T=P+(k<<6&4294967295|k>>>26),k=z+(P^(T|~O))+A[11]+3174756917&4294967295,z=T+(k<<10&4294967295|k>>>22),k=O+(T^(z|~P))+A[2]+718787259&4294967295,O=z+(k<<15&4294967295|k>>>17),k=P+(z^(O|~T))+A[9]+3951481745&4294967295,C.g[0]=C.g[0]+T&4294967295,C.g[1]=C.g[1]+(O+(k<<21&4294967295|k>>>11))&4294967295,C.g[2]=C.g[2]+O&4294967295,C.g[3]=C.g[3]+z&4294967295}r.prototype.u=function(C,T){T===void 0&&(T=C.length);for(var P=T-this.blockSize,A=this.B,O=this.h,z=0;z<T;){if(O==0)for(;z<=P;)i(this,C,z),z+=this.blockSize;if(typeof C=="string"){for(;z<T;)if(A[O++]=C.charCodeAt(z++),O==this.blockSize){i(this,A),O=0;break}}else for(;z<T;)if(A[O++]=C[z++],O==this.blockSize){i(this,A),O=0;break}}this.h=O,this.o+=T},r.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var T=1;T<C.length-8;++T)C[T]=0;var P=8*this.o;for(T=C.length-8;T<C.length;++T)C[T]=P&255,P/=256;for(this.u(C),C=Array(16),T=P=0;4>T;++T)for(var A=0;32>A;A+=8)C[P++]=this.g[T]>>>A&255;return C};function o(C,T){var P=a;return Object.prototype.hasOwnProperty.call(P,C)?P[C]:P[C]=T(C)}function s(C,T){this.h=T;for(var P=[],A=!0,O=C.length-1;0<=O;O--){var z=C[O]|0;A&&z==T||(P[O]=z,A=!1)}this.g=P}var a={};function l(C){return-128<=C&&128>C?o(C,function(T){return new s([T|0],0>T?-1:0)}):new s([C|0],0>C?-1:0)}function c(C){if(isNaN(C)||!isFinite(C))return h;if(0>C)return d(c(-C));for(var T=[],P=1,A=0;C>=P;A++)T[A]=C/P|0,P*=4294967296;return new s(T,0)}function f(C,T){if(C.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C.charAt(0)=="-")return d(f(C.substring(1),T));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=c(Math.pow(T,8)),A=h,O=0;O<C.length;O+=8){var z=Math.min(8,C.length-O),k=parseInt(C.substring(O,O+z),T);8>z?(z=c(Math.pow(T,z)),A=A.j(z).add(c(k))):(A=A.j(P),A=A.add(c(k)))}return A}var h=l(0),m=l(1),_=l(16777216);t=s.prototype,t.m=function(){if(w(this))return-d(this).m();for(var C=0,T=1,P=0;P<this.g.length;P++){var A=this.i(P);C+=(0<=A?A:4294967296+A)*T,T*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(E(this))return"0";if(w(this))return"-"+d(this).toString(C);for(var T=c(Math.pow(C,6)),P=this,A="";;){var O=b(P,T).g;P=p(P,O.j(T));var z=((0<P.g.length?P.g[0]:P.h)>>>0).toString(C);if(P=O,E(P))return z+A;for(;6>z.length;)z="0"+z;A=z+A}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function E(C){if(C.h!=0)return!1;for(var T=0;T<C.g.length;T++)if(C.g[T]!=0)return!1;return!0}function w(C){return C.h==-1}t.l=function(C){return C=p(this,C),w(C)?-1:E(C)?0:1};function d(C){for(var T=C.g.length,P=[],A=0;A<T;A++)P[A]=~C.g[A];return new s(P,~C.h).add(m)}t.abs=function(){return w(this)?d(this):this},t.add=function(C){for(var T=Math.max(this.g.length,C.g.length),P=[],A=0,O=0;O<=T;O++){var z=A+(this.i(O)&65535)+(C.i(O)&65535),k=(z>>>16)+(this.i(O)>>>16)+(C.i(O)>>>16);A=k>>>16,z&=65535,k&=65535,P[O]=k<<16|z}return new s(P,P[P.length-1]&-2147483648?-1:0)};function p(C,T){return C.add(d(T))}t.j=function(C){if(E(this)||E(C))return h;if(w(this))return w(C)?d(this).j(d(C)):d(d(this).j(C));if(w(C))return d(this.j(d(C)));if(0>this.l(_)&&0>C.l(_))return c(this.m()*C.m());for(var T=this.g.length+C.g.length,P=[],A=0;A<2*T;A++)P[A]=0;for(A=0;A<this.g.length;A++)for(var O=0;O<C.g.length;O++){var z=this.i(A)>>>16,k=this.i(A)&65535,q=C.i(O)>>>16,j=C.i(O)&65535;P[2*A+2*O]+=k*j,g(P,2*A+2*O),P[2*A+2*O+1]+=z*j,g(P,2*A+2*O+1),P[2*A+2*O+1]+=k*q,g(P,2*A+2*O+1),P[2*A+2*O+2]+=z*q,g(P,2*A+2*O+2)}for(A=0;A<T;A++)P[A]=P[2*A+1]<<16|P[2*A];for(A=T;A<2*T;A++)P[A]=0;return new s(P,0)};function g(C,T){for(;(C[T]&65535)!=C[T];)C[T+1]+=C[T]>>>16,C[T]&=65535,T++}function v(C,T){this.g=C,this.h=T}function b(C,T){if(E(T))throw Error("division by zero");if(E(C))return new v(h,h);if(w(C))return T=b(d(C),T),new v(d(T.g),d(T.h));if(w(T))return T=b(C,d(T)),new v(d(T.g),T.h);if(30<C.g.length){if(w(C)||w(T))throw Error("slowDivide_ only works with positive integers.");for(var P=m,A=T;0>=A.l(C);)P=I(P),A=I(A);var O=x(P,1),z=x(A,1);for(A=x(A,2),P=x(P,2);!E(A);){var k=z.add(A);0>=k.l(C)&&(O=O.add(P),z=k),A=x(A,1),P=x(P,1)}return T=p(C,O.j(T)),new v(O,T)}for(O=h;0<=C.l(T);){for(P=Math.max(1,Math.floor(C.m()/T.m())),A=Math.ceil(Math.log(P)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),z=c(P),k=z.j(T);w(k)||0<k.l(C);)P-=A,z=c(P),k=z.j(T);E(z)&&(z=m),O=O.add(z),C=p(C,k)}return new v(O,C)}t.A=function(C){return b(this,C).h},t.and=function(C){for(var T=Math.max(this.g.length,C.g.length),P=[],A=0;A<T;A++)P[A]=this.i(A)&C.i(A);return new s(P,this.h&C.h)},t.or=function(C){for(var T=Math.max(this.g.length,C.g.length),P=[],A=0;A<T;A++)P[A]=this.i(A)|C.i(A);return new s(P,this.h|C.h)},t.xor=function(C){for(var T=Math.max(this.g.length,C.g.length),P=[],A=0;A<T;A++)P[A]=this.i(A)^C.i(A);return new s(P,this.h^C.h)};function I(C){for(var T=C.g.length+1,P=[],A=0;A<T;A++)P[A]=C.i(A)<<1|C.i(A-1)>>>31;return new s(P,C.h)}function x(C,T){var P=T>>5;T%=32;for(var A=C.g.length-P,O=[],z=0;z<A;z++)O[z]=0<T?C.i(z+P)>>>T|C.i(z+P+1)<<32-T:C.i(z+P);return new s(O,C.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,SP=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=c,s.fromString=f,Wo=s}).apply(typeof _E<"u"?_E:typeof self<"u"?self:typeof window<"u"?window:{});var Cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var TP,cl,bP,Jc,Gg,IP,CP,PP;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,y,S){return u==Array.prototype||u==Object.prototype||(u[y]=S.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cc=="object"&&Cc];for(var y=0;y<u.length;++y){var S=u[y];if(S&&S.Math==Math)return S}throw Error("Cannot find global object")}var r=n(this);function i(u,y){if(y)e:{var S=r;u=u.split(".");for(var R=0;R<u.length-1;R++){var N=u[R];if(!(N in S))break e;S=S[N]}u=u[u.length-1],R=S[u],y=y(R),y!=R&&y!=null&&e(S,u,{configurable:!0,writable:!0,value:y})}}function o(u,y){u instanceof String&&(u+="");var S=0,R=!1,N={next:function(){if(!R&&S<u.length){var D=S++;return{value:y(D,u[D]),done:!1}}return R=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(u){return u||function(){return o(this,function(y,S){return S})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(u){var y=typeof u;return y=y!="object"?y:u?Array.isArray(u)?"array":y:"null",y=="array"||y=="object"&&typeof u.length=="number"}function c(u){var y=typeof u;return y=="object"&&u!=null||y=="function"}function f(u,y,S){return u.call.apply(u.bind,arguments)}function h(u,y,S){if(!u)throw Error();if(2<arguments.length){var R=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,R),u.apply(y,N)}}return function(){return u.apply(y,arguments)}}function m(u,y,S){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:h,m.apply(null,arguments)}function _(u,y){var S=Array.prototype.slice.call(arguments,1);return function(){var R=S.slice();return R.push.apply(R,arguments),u.apply(this,R)}}function E(u,y){function S(){}S.prototype=y.prototype,u.aa=y.prototype,u.prototype=new S,u.prototype.constructor=u,u.Qb=function(R,N,D){for(var H=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)H[$e-2]=arguments[$e];return y.prototype[N].apply(R,H)}}function w(u){const y=u.length;if(0<y){const S=Array(y);for(let R=0;R<y;R++)S[R]=u[R];return S}return[]}function d(u,y){for(let S=1;S<arguments.length;S++){const R=arguments[S];if(l(R)){const N=u.length||0,D=R.length||0;u.length=N+D;for(let H=0;H<D;H++)u[N+H]=R[H]}else u.push(R)}}class p{constructor(y,S){this.i=y,this.j=S,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function g(u){return/^[\s\xa0]*$/.test(u)}function v(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function b(u){return b[" "](u),u}b[" "]=function(){};var I=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function x(u,y,S){for(const R in u)y.call(S,u[R],R,u)}function C(u,y){for(const S in u)y.call(void 0,u[S],S,u)}function T(u){const y={};for(const S in u)y[S]=u[S];return y}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,y){let S,R;for(let N=1;N<arguments.length;N++){R=arguments[N];for(S in R)u[S]=R[S];for(let D=0;D<P.length;D++)S=P[D],Object.prototype.hasOwnProperty.call(R,S)&&(u[S]=R[S])}}function O(u){var y=1;u=u.split(":");const S=[];for(;0<y&&u.length;)S.push(u.shift()),y--;return u.length&&S.push(u.join(":")),S}function z(u){a.setTimeout(()=>{throw u},0)}function k(){var u=W;let y=null;return u.g&&(y=u.g,u.g=u.g.next,u.g||(u.h=null),y.next=null),y}class q{constructor(){this.h=this.g=null}add(y,S){const R=j.get();R.set(y,S),this.h?this.h.next=R:this.g=R,this.h=R}}var j=new p(()=>new G,u=>u.reset());class G{constructor(){this.next=this.g=this.h=null}set(y,S){this.h=y,this.g=S,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,V=!1,W=new q,X=()=>{const u=a.Promise.resolve(void 0);Y=()=>{u.then(le)}};var le=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(S){z(S)}var y=j;y.j(u),100>y.h&&(y.h++,u.next=y.g,y.g=u)}V=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Oe(u,y){this.type=u,this.g=this.target=y,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var er=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,y=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const S=()=>{};a.addEventListener("test",S,y),a.removeEventListener("test",S,y)}catch{}return u}();function wt(u,y){if(Oe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var S=this.type=u.type,R=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=y,y=u.relatedTarget){if(I){e:{try{b(y.nodeName);var N=!0;break e}catch{}N=!1}N||(y=null)}}else S=="mouseover"?y=u.fromElement:S=="mouseout"&&(y=u.toElement);this.relatedTarget=y,R?(this.clientX=R.clientX!==void 0?R.clientX:R.pageX,this.clientY=R.clientY!==void 0?R.clientY:R.pageY,this.screenX=R.screenX||0,this.screenY=R.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Vt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&wt.aa.h.call(this)}}E(wt,Oe);var Vt={2:"touch",3:"pen",4:"mouse"};wt.prototype.h=function(){wt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ft="closure_listenable_"+(1e6*Math.random()|0),po=0;function yn(u,y,S,R,N){this.listener=u,this.proxy=null,this.src=y,this.type=S,this.capture=!!R,this.ha=N,this.key=++po,this.da=this.fa=!1}function yi(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function jt(u){this.src=u,this.g={},this.h=0}jt.prototype.add=function(u,y,S,R,N){var D=u.toString();u=this.g[D],u||(u=this.g[D]=[],this.h++);var H=vn(u,y,R,N);return-1<H?(y=u[H],S||(y.fa=!1)):(y=new yn(y,this.src,D,!!R,N),y.fa=S,u.push(y)),y};function Da(u,y){var S=y.type;if(S in u.g){var R=u.g[S],N=Array.prototype.indexOf.call(R,y,void 0),D;(D=0<=N)&&Array.prototype.splice.call(R,N,1),D&&(yi(y),u.g[S].length==0&&(delete u.g[S],u.h--))}}function vn(u,y,S,R){for(var N=0;N<u.length;++N){var D=u[N];if(!D.da&&D.listener==y&&D.capture==!!S&&D.ha==R)return N}return-1}var Dn="closure_lm_"+(1e6*Math.random()|0),_n={};function mo(u,y,S,R,N){if(R&&R.once)return yo(u,y,S,R,N);if(Array.isArray(y)){for(var D=0;D<y.length;D++)mo(u,y[D],S,R,N);return null}return S=wo(S),u&&u[ft]?u.K(y,S,c(R)?!!R.capture:!!R,N):go(u,y,S,!1,R,N)}function go(u,y,S,R,N,D){if(!y)throw Error("Invalid event type");var H=c(N)?!!N.capture:!!N,$e=Ma(u);if($e||(u[Dn]=$e=new jt(u)),S=$e.add(y,S,R,H,D),S.proxy)return S;if(R=wn(),S.proxy=R,R.src=u,R.listener=S,u.addEventListener)er||(N=H),N===void 0&&(N=!1),u.addEventListener(y.toString(),R,N);else if(u.attachEvent)u.attachEvent(_o(y.toString()),R);else if(u.addListener&&u.removeListener)u.addListener(R);else throw Error("addEventListener and attachEvent are unavailable.");return S}function wn(){function u(S){return y.call(u.src,u.listener,S)}const y=Mu;return u}function yo(u,y,S,R,N){if(Array.isArray(y)){for(var D=0;D<y.length;D++)yo(u,y[D],S,R,N);return null}return S=wo(S),u&&u[ft]?u.L(y,S,c(R)?!!R.capture:!!R,N):go(u,y,S,!0,R,N)}function vo(u,y,S,R,N){if(Array.isArray(y))for(var D=0;D<y.length;D++)vo(u,y[D],S,R,N);else R=c(R)?!!R.capture:!!R,S=wo(S),u&&u[ft]?(u=u.i,y=String(y).toString(),y in u.g&&(D=u.g[y],S=vn(D,S,R,N),-1<S&&(yi(D[S]),Array.prototype.splice.call(D,S,1),D.length==0&&(delete u.g[y],u.h--)))):u&&(u=Ma(u))&&(y=u.g[y.toString()],u=-1,y&&(u=vn(y,S,R,N)),(S=-1<u?y[u]:null)&&vi(S))}function vi(u){if(typeof u!="number"&&u&&!u.da){var y=u.src;if(y&&y[ft])Da(y.i,u);else{var S=u.type,R=u.proxy;y.removeEventListener?y.removeEventListener(S,R,u.capture):y.detachEvent?y.detachEvent(_o(S),R):y.addListener&&y.removeListener&&y.removeListener(R),(S=Ma(y))?(Da(S,u),S.h==0&&(S.src=null,y[Dn]=null)):yi(u)}}}function _o(u){return u in _n?_n[u]:_n[u]="on"+u}function Mu(u,y){if(u.da)u=!0;else{y=new wt(y,this);var S=u.listener,R=u.ha||u.src;u.fa&&vi(u),u=S.call(R,y)}return u}function Ma(u){return u=u[Dn],u instanceof jt?u:null}var _i="__closure_events_fn_"+(1e9*Math.random()>>>0);function wo(u){return typeof u=="function"?u:(u[_i]||(u[_i]=function(y){return u.handleEvent(y)}),u[_i])}function ht(){ye.call(this),this.i=new jt(this),this.M=this,this.F=null}E(ht,ye),ht.prototype[ft]=!0,ht.prototype.removeEventListener=function(u,y,S,R){vo(this,u,y,S,R)};function Et(u,y){var S,R=u.F;if(R)for(S=[];R;R=R.F)S.push(R);if(u=u.M,R=y.type||y,typeof y=="string")y=new Oe(y,u);else if(y instanceof Oe)y.target=y.target||u;else{var N=y;y=new Oe(R,u),A(y,N)}if(N=!0,S)for(var D=S.length-1;0<=D;D--){var H=y.g=S[D];N=Eo(H,R,!0,y)&&N}if(H=y.g=u,N=Eo(H,R,!0,y)&&N,N=Eo(H,R,!1,y)&&N,S)for(D=0;D<S.length;D++)H=y.g=S[D],N=Eo(H,R,!1,y)&&N}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,y;for(y in u.g){for(var S=u.g[y],R=0;R<S.length;R++)yi(S[R]);delete u.g[y],u.h--}}this.F=null},ht.prototype.K=function(u,y,S,R){return this.i.add(String(u),y,!1,S,R)},ht.prototype.L=function(u,y,S,R){return this.i.add(String(u),y,!0,S,R)};function Eo(u,y,S,R){if(y=u.i.g[String(y)],!y)return!0;y=y.concat();for(var N=!0,D=0;D<y.length;++D){var H=y[D];if(H&&!H.da&&H.capture==S){var $e=H.listener,Ot=H.ha||H.src;H.fa&&Da(u.i,H),N=$e.call(Ot,R)!==!1&&N}}return N&&!R.defaultPrevented}function Lu(u,y,S){if(typeof u=="function")S&&(u=m(u,S));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:a.setTimeout(u,y||0)}function Vu(u){u.g=Lu(()=>{u.g=null,u.i&&(u.i=!1,Vu(u))},u.l);const y=u.h;u.h=null,u.m.apply(null,y)}class ju extends ye{constructor(y,S){super(),this.m=y,this.l=S,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Vu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function So(u){ye.call(this),this.h=u,this.g={}}E(So,ye);var En=[];function tr(u){x(u.g,function(y,S){this.g.hasOwnProperty(S)&&vi(y)},u),u.g={}}So.prototype.N=function(){So.aa.N.call(this),tr(this)},So.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mn=a.JSON.stringify,Ln=a.JSON.parse,Sn=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function To(){}To.prototype.h=null;function La(u){return u.h||(u.h=u.i())}function Va(){}var Fr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bo(){Oe.call(this,"d")}E(bo,Oe);function Io(){Oe.call(this,"c")}E(Io,Oe);var At={},ms=null;function gs(){return ms=ms||new ht}At.La="serverreachability";function Fu(u){Oe.call(this,At.La,u)}E(Fu,Oe);function Co(u){const y=gs();Et(y,new Fu(y))}At.STAT_EVENT="statevent";function $u(u,y){Oe.call(this,At.STAT_EVENT,u),this.stat=y}E($u,Oe);function Rt(u){const y=gs();Et(y,new $u(y,u))}At.Ma="timingevent";function Bu(u,y){Oe.call(this,At.Ma,u),this.size=y}E(Bu,Oe);function wi(u,y){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},y)}function nr(){this.g=!0}nr.prototype.xa=function(){this.g=!1};function ys(u,y,S,R,N,D){u.info(function(){if(u.g)if(D)for(var H="",$e=D.split("&"),Ot=0;Ot<$e.length;Ot++){var Pe=$e[Ot].split("=");if(1<Pe.length){var Ft=Pe[0];Pe=Pe[1];var $t=Ft.split("_");H=2<=$t.length&&$t[1]=="type"?H+(Ft+"="+Pe+"&"):H+(Ft+"=redacted&")}}else H=null;else H=D;return"XMLHTTP REQ ("+R+") [attempt "+N+"]: "+y+`
`+S+`
`+H})}function Tr(u,y,S,R,N,D,H){u.info(function(){return"XMLHTTP RESP ("+R+") [ attempt "+N+"]: "+y+`
`+S+`
`+D+" "+H})}function Vn(u,y,S,R){u.info(function(){return"XMLHTTP TEXT ("+y+"): "+Wu(u,S)+(R?" "+R:"")})}function ja(u,y){u.info(function(){return"TIMEOUT: "+y})}nr.prototype.info=function(){};function Wu(u,y){if(!u.g)return y;if(!y)return null;try{var S=JSON.parse(y);if(S){for(u=0;u<S.length;u++)if(Array.isArray(S[u])){var R=S[u];if(!(2>R.length)){var N=R[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var H=1;H<N.length;H++)N[H]=""}}}}return Mn(S)}catch{return y}}var Po={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ei;function _s(){}E(_s,To),_s.prototype.g=function(){return new XMLHttpRequest},_s.prototype.i=function(){return{}},Ei=new _s;function Zt(u,y,S,R){this.j=u,this.i=y,this.l=S,this.R=R||1,this.U=new So(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qu}function qu(){this.i=null,this.g="",this.h=!1}var ws={},$r={};function oe(u,y,S){u.L=1,u.v=se(en(y)),u.m=S,u.P=!0,te(u,null)}function te(u,y){u.F=Date.now(),K(u),u.A=en(u.v);var S=u.A,R=u.R;Array.isArray(R)||(R=[String(R)]),Wr(S.i,"t",R),u.C=0,S=u.j.J,u.h=new qu,u.g=f_(u.j,S?y:null,!u.m),0<u.O&&(u.M=new ju(m(u.Y,u,u.g),u.O)),y=u.U,S=u.g,R=u.ca;var N="readystatechange";Array.isArray(N)||(N&&(En[0]=N.toString()),N=En);for(var D=0;D<N.length;D++){var H=mo(S,N[D],R||y.handleEvent,!1,y.h||y);if(!H)break;y.g[H.key]=H}y=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,y)):(u.u="GET",u.g.ea(u.A,u.u,null,y)),Co(),ys(u.i,u.u,u.A,u.l,u.R,u.m)}Zt.prototype.ca=function(u){u=u.target;const y=this.M;y&&qr(u)==3?y.j():this.Y(u)},Zt.prototype.Y=function(u){try{if(u==this.g)e:{const $t=qr(this.g);var y=this.g.Ba();const Ps=this.g.Z();if(!(3>$t)&&($t!=3||this.g&&(this.h.h||this.g.oa()||t_(this.g)))){this.J||$t!=4||y==7||(y==8||0>=Ps?Co(3):Co(2)),M(this);var S=this.g.Z();this.X=S;t:if(Z(this)){var R=t_(this.g);u="";var N=R.length,D=qr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){de(this),ge(this);var H="";break t}this.h.i=new a.TextDecoder}for(y=0;y<N;y++)this.h.h=!0,u+=this.h.i.decode(R[y],{stream:!(D&&y==N-1)});R.length=0,this.h.g+=u,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=S==200,Tr(this.i,this.u,this.A,this.l,this.R,$t,S),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,Ot=this.g;if(($e=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g($e)){var Pe=$e;break t}}Pe=null}if(S=Pe)Vn(this.i,this.l,S,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,He(this,S);else{this.o=!1,this.s=3,Rt(12),de(this),ge(this);break e}}if(this.P){S=!0;let sr;for(;!this.J&&this.C<H.length;)if(sr=fe(this,H),sr==$r){$t==4&&(this.s=4,Rt(14),S=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(sr==ws){this.s=4,Rt(15),Vn(this.i,this.l,H,"[Invalid Chunk]"),S=!1;break}else Vn(this.i,this.l,sr,null),He(this,sr);if(Z(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$t!=4||H.length!=0||this.h.h||(this.s=1,Rt(16),S=!1),this.o=this.o&&S,!S)Vn(this.i,this.l,H,"[Invalid Chunked Response]"),de(this),ge(this);else if(0<H.length&&!this.W){this.W=!0;var Ft=this.j;Ft.g==this&&Ft.ba&&!Ft.M&&(Ft.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Qh(Ft),Ft.M=!0,Rt(11))}}else Vn(this.i,this.l,H,null),He(this,H);$t==4&&de(this),this.o&&!this.J&&($t==4?l_(this.j,this):(this.o=!1,K(this)))}else ZA(this.g),S==400&&0<H.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),de(this),ge(this)}}}catch{}finally{}};function Z(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function fe(u,y){var S=u.C,R=y.indexOf(`
`,S);return R==-1?$r:(S=Number(y.substring(S,R)),isNaN(S)?ws:(R+=1,R+S>y.length?$r:(y=y.slice(R,R+S),u.C=R+S,y)))}Zt.prototype.cancel=function(){this.J=!0,de(this)};function K(u){u.S=Date.now()+u.I,Ie(u,u.I)}function Ie(u,y){if(u.B!=null)throw Error("WatchDog timer not null");u.B=wi(m(u.ba,u),y)}function M(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Zt.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ja(this.i,this.A),this.L!=2&&(Co(),Rt(17)),de(this),this.s=2,ge(this)):Ie(this,this.S-u)};function ge(u){u.j.G==0||u.J||l_(u.j,u)}function de(u){M(u);var y=u.M;y&&typeof y.ma=="function"&&y.ma(),u.M=null,tr(u.U),u.g&&(y=u.g,u.g=null,y.abort(),y.ma())}function He(u,y){try{var S=u.j;if(S.G!=0&&(S.g==u||pt(S.h,u))){if(!u.K&&pt(S.h,u)&&S.G==3){try{var R=S.Da.g.parse(y)}catch{R=null}if(Array.isArray(R)&&R.length==3){var N=R;if(N[0]==0){e:if(!S.u){if(S.g)if(S.g.F+3e3<u.F)tc(S),Zu(S);else break e;Yh(S),Rt(18)}}else S.za=N[1],0<S.za-S.T&&37500>N[2]&&S.F&&S.v==0&&!S.C&&(S.C=wi(m(S.Za,S),6e3));if(1>=_e(S.h)&&S.ca){try{S.ca()}catch{}S.ca=void 0}}else Ro(S,11)}else if((u.K||S.g==u)&&tc(S),!g(y))for(N=S.Da.g.parse(y),y=0;y<N.length;y++){let Pe=N[y];if(S.T=Pe[0],Pe=Pe[1],S.G==2)if(Pe[0]=="c"){S.K=Pe[1],S.ia=Pe[2];const Ft=Pe[3];Ft!=null&&(S.la=Ft,S.j.info("VER="+S.la));const $t=Pe[4];$t!=null&&(S.Aa=$t,S.j.info("SVER="+S.Aa));const Ps=Pe[5];Ps!=null&&typeof Ps=="number"&&0<Ps&&(R=1.5*Ps,S.L=R,S.j.info("backChannelRequestTimeoutMs_="+R)),R=S;const sr=u.g;if(sr){const rc=sr.g?sr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rc){var D=R.h;D.g||rc.indexOf("spdy")==-1&&rc.indexOf("quic")==-1&&rc.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(St(D,D.h),D.h=null))}if(R.D){const Xh=sr.g?sr.g.getResponseHeader("X-HTTP-Session-Id"):null;Xh&&(R.ya=Xh,he(R.I,R.D,Xh))}}S.G=3,S.l&&S.l.ua(),S.ba&&(S.R=Date.now()-u.F,S.j.info("Handshake RTT: "+S.R+"ms")),R=S;var H=u;if(R.qa=d_(R,R.J?R.ia:null,R.W),H.K){Br(R.h,H);var $e=H,Ot=R.L;Ot&&($e.I=Ot),$e.B&&(M($e),K($e)),R.g=H}else s_(R);0<S.i.length&&ec(S)}else Pe[0]!="stop"&&Pe[0]!="close"||Ro(S,7);else S.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Ro(S,7):Gh(S):Pe[0]!="noop"&&S.l&&S.l.ta(Pe),S.v=0)}}Co(4)}catch{}}var ve=class{constructor(u,y){this.g=u,this.map=y}};function et(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ue(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function _e(u){return u.h?1:u.g?u.g.size:0}function pt(u,y){return u.h?u.h==y:u.g?u.g.has(y):!1}function St(u,y){u.g?u.g.add(y):u.h=y}function Br(u,y){u.h&&u.h==y?u.h=null:u.g&&u.g.has(y)&&u.g.delete(y)}et.prototype.cancel=function(){if(this.i=kt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function kt(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let y=u.i;for(const S of u.g.values())y=y.concat(S.D);return y}return w(u.i)}function rr(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var y=[],S=u.length,R=0;R<S;R++)y.push(u[R]);return y}y=[],S=0;for(R in u)y[S++]=u[R];return y}function Es(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var y=[];u=u.length;for(var S=0;S<u;S++)y.push(S);return y}y=[],S=0;for(const R in u)y[S++]=R;return y}}}function Tn(u,y){if(u.forEach&&typeof u.forEach=="function")u.forEach(y,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,y,void 0);else for(var S=Es(u),R=rr(u),N=R.length,D=0;D<N;D++)y.call(void 0,R[D],S&&S[D],u)}var Se=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sn(u,y){if(u){u=u.split("&");for(var S=0;S<u.length;S++){var R=u[S].indexOf("="),N=null;if(0<=R){var D=u[S].substring(0,R);N=u[S].substring(R+1)}else D=u[S];y(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function an(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof an){this.h=u.h,Re(this,u.j),this.o=u.o,this.g=u.g,jn(this,u.s),this.l=u.l;var y=u.i,S=new Ti;S.i=y.i,y.g&&(S.g=new Map(y.g),S.h=y.h),Si(this,S),this.m=u.m}else u&&(y=String(u).match(Se))?(this.h=!1,Re(this,y[1]||"",!0),this.o=ke(y[2]||""),this.g=ke(y[3]||"",!0),jn(this,y[4]),this.l=ke(y[5]||"",!0),Si(this,y[6]||"",!0),this.m=ke(y[7]||"")):(this.h=!1,this.i=new Ti(null,this.h))}an.prototype.toString=function(){var u=[],y=this.j;y&&u.push(Fe(y,Ts,!0),":");var S=this.g;return(S||y=="file")&&(u.push("//"),(y=this.o)&&u.push(Fe(y,Ts,!0),"@"),u.push(encodeURIComponent(String(S)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),S=this.s,S!=null&&u.push(":",String(S))),(S=this.l)&&(this.g&&S.charAt(0)!="/"&&u.push("/"),u.push(Fe(S,S.charAt(0)=="/"?ir:Hu,!0))),(S=this.i.toString())&&u.push("?",S),(S=this.m)&&u.push("#",Fe(S,bs)),u.join("")};function en(u){return new an(u)}function Re(u,y,S){u.j=S?ke(y,!0):y,u.j&&(u.j=u.j.replace(/:$/,""))}function jn(u,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);u.s=y}else u.s=null}function Si(u,y,S){y instanceof Ti?(u.i=y,Ku(u.i,u.h)):(S||(y=Fe(y,mt)),u.i=new Ti(y,u.h))}function he(u,y,S){u.i.set(y,S)}function se(u){return he(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ke(u,y){return u?y?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Fe(u,y,S){return typeof u=="string"?(u=encodeURI(u).replace(y,Ss),S&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Ss(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ts=/[#\/\?@]/g,Hu=/[#\?:]/g,ir=/[#\?]/g,mt=/[#\?@]/g,bs=/#/g;function Ti(u,y){this.h=this.g=null,this.i=u||null,this.j=!!y}function or(u){u.g||(u.g=new Map,u.h=0,u.i&&sn(u.i,function(y,S){u.add(decodeURIComponent(y.replace(/\+/g," ")),S)}))}t=Ti.prototype,t.add=function(u,y){or(this),this.i=null,u=br(this,u);var S=this.g.get(u);return S||this.g.set(u,S=[]),S.push(y),this.h+=1,this};function Is(u,y){or(u),y=br(u,y),u.g.has(y)&&(u.i=null,u.h-=u.g.get(y).length,u.g.delete(y))}function Ao(u,y){return or(u),y=br(u,y),u.g.has(y)}t.forEach=function(u,y){or(this),this.g.forEach(function(S,R){S.forEach(function(N){u.call(y,N,R,this)},this)},this)},t.na=function(){or(this);const u=Array.from(this.g.values()),y=Array.from(this.g.keys()),S=[];for(let R=0;R<y.length;R++){const N=u[R];for(let D=0;D<N.length;D++)S.push(y[R])}return S},t.V=function(u){or(this);let y=[];if(typeof u=="string")Ao(this,u)&&(y=y.concat(this.g.get(br(this,u))));else{u=Array.from(this.g.values());for(let S=0;S<u.length;S++)y=y.concat(u[S])}return y},t.set=function(u,y){return or(this),this.i=null,u=br(this,u),Ao(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[y]),this.h+=1,this},t.get=function(u,y){return u?(u=this.V(u),0<u.length?String(u[0]):y):y};function Wr(u,y,S){Is(u,y),0<S.length&&(u.i=null,u.g.set(br(u,y),w(S)),u.h+=S.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],y=Array.from(this.g.keys());for(var S=0;S<y.length;S++){var R=y[S];const D=encodeURIComponent(String(R)),H=this.V(R);for(R=0;R<H.length;R++){var N=D;H[R]!==""&&(N+="="+encodeURIComponent(String(H[R]))),u.push(N)}}return this.i=u.join("&")};function br(u,y){return y=String(y),u.j&&(y=y.toLowerCase()),y}function Ku(u,y){y&&!u.j&&(or(u),u.i=null,u.g.forEach(function(S,R){var N=R.toLowerCase();R!=N&&(Is(this,R),Wr(this,N,S))},u)),u.j=y}function Gu(u,y){const S=new nr;if(a.Image){const R=new Image;R.onload=_(bi,S,"TestLoadImage: loaded",!0,y,R),R.onerror=_(bi,S,"TestLoadImage: error",!1,y,R),R.onabort=_(bi,S,"TestLoadImage: abort",!1,y,R),R.ontimeout=_(bi,S,"TestLoadImage: timeout",!1,y,R),a.setTimeout(function(){R.ontimeout&&R.ontimeout()},1e4),R.src=u}else y(!1)}function Yu(u,y){const S=new nr,R=new AbortController,N=setTimeout(()=>{R.abort(),bi(S,"TestPingServer: timeout",!1,y)},1e4);fetch(u,{signal:R.signal}).then(D=>{clearTimeout(N),D.ok?bi(S,"TestPingServer: ok",!0,y):bi(S,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(N),bi(S,"TestPingServer: error",!1,y)})}function bi(u,y,S,R,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),R(S)}catch{}}function YA(){this.g=new Sn}function QA(u,y,S){const R=S||"";try{Tn(u,function(N,D){let H=N;c(N)&&(H=Mn(N)),y.push(R+D+"="+encodeURIComponent(H))})}catch(N){throw y.push(R+"type="+encodeURIComponent("_badmap")),N}}function Qu(u){this.l=u.Ub||null,this.j=u.eb||!1}E(Qu,To),Qu.prototype.g=function(){return new Xu(this.l,this.j)},Qu.prototype.i=function(u){return function(){return u}}({});function Xu(u,y){ht.call(this),this.D=u,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Xu,ht),t=Xu.prototype,t.open=function(u,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=y,this.readyState=1,$a(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(y.body=u),(this.D||a).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fa(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,$a(this)),this.g&&(this.readyState=3,$a(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Y0(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Y0(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var y=u.value?u.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!u.done}))&&(this.response=this.responseText+=y)}u.done?Fa(this):$a(this),this.readyState==3&&Y0(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Fa(this))},t.Qa=function(u){this.g&&(this.response=u,Fa(this))},t.ga=function(){this.g&&Fa(this)};function Fa(u){u.readyState=4,u.l=null,u.j=null,u.v=null,$a(u)}t.setRequestHeader=function(u,y){this.u.append(u,y)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],y=this.h.entries();for(var S=y.next();!S.done;)S=S.value,u.push(S[0]+": "+S[1]),S=y.next();return u.join(`\r
`)};function $a(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Xu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Q0(u){let y="";return x(u,function(S,R){y+=R,y+=":",y+=S,y+=`\r
`}),y}function Kh(u,y,S){e:{for(R in S){var R=!1;break e}R=!0}R||(S=Q0(S),typeof u=="string"?S!=null&&encodeURIComponent(String(S)):he(u,y,S))}function tt(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(tt,ht);var XA=/^https?$/i,JA=["POST","PUT"];t=tt.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,y,S,R){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);y=y?y.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ei.g(),this.v=this.o?La(this.o):La(Ei),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(y,String(u),!0),this.B=!1}catch(D){X0(this,D);return}if(u=S||"",S=new Map(this.headers),R)if(Object.getPrototypeOf(R)===Object.prototype)for(var N in R)S.set(N,R[N]);else if(typeof R.keys=="function"&&typeof R.get=="function")for(const D of R.keys())S.set(D,R.get(D));else throw Error("Unknown input type for opt_headers: "+String(R));R=Array.from(S.keys()).find(D=>D.toLowerCase()=="content-type"),N=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(JA,y,void 0))||R||N||S.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,H]of S)this.g.setRequestHeader(D,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{e_(this),this.u=!0,this.g.send(u),this.u=!1}catch(D){X0(this,D)}};function X0(u,y){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=y,u.m=5,J0(u),Ju(u)}function J0(u){u.A||(u.A=!0,Et(u,"complete"),Et(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Et(this,"complete"),Et(this,"abort"),Ju(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ju(this,!0)),tt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Z0(this):this.bb())},t.bb=function(){Z0(this)};function Z0(u){if(u.h&&typeof s<"u"&&(!u.v[1]||qr(u)!=4||u.Z()!=2)){if(u.u&&qr(u)==4)Lu(u.Ea,0,u);else if(Et(u,"readystatechange"),qr(u)==4){u.h=!1;try{const H=u.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var S;if(!(S=y)){var R;if(R=H===0){var N=String(u.D).match(Se)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),R=!XA.test(N?N.toLowerCase():"")}S=R}if(S)Et(u,"complete"),Et(u,"success");else{u.m=6;try{var D=2<qr(u)?u.g.statusText:""}catch{D=""}u.l=D+" ["+u.Z()+"]",J0(u)}}finally{Ju(u)}}}}function Ju(u,y){if(u.g){e_(u);const S=u.g,R=u.v[0]?()=>{}:null;u.g=null,u.v=null,y||Et(u,"ready");try{S.onreadystatechange=R}catch{}}}function e_(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function qr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<qr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var y=this.g.responseText;return u&&y.indexOf(u)==0&&(y=y.substring(u.length)),Ln(y)}};function t_(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ZA(u){const y={};u=(u.g&&2<=qr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let R=0;R<u.length;R++){if(g(u[R]))continue;var S=O(u[R]);const N=S[0];if(S=S[1],typeof S!="string")continue;S=S.trim();const D=y[N]||[];y[N]=D,D.push(S)}C(y,function(R){return R.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ba(u,y,S){return S&&S.internalChannelParams&&S.internalChannelParams[u]||y}function n_(u){this.Aa=0,this.i=[],this.j=new nr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ba("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ba("baseRetryDelayMs",5e3,u),this.cb=Ba("retryDelaySeedMs",1e4,u),this.Wa=Ba("forwardChannelMaxRetries",2,u),this.wa=Ba("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new et(u&&u.concurrentRequestLimit),this.Da=new YA,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=n_.prototype,t.la=8,t.G=1,t.connect=function(u,y,S,R){Rt(0),this.W=u,this.H=y||{},S&&R!==void 0&&(this.H.OSID=S,this.H.OAID=R),this.F=this.X,this.I=d_(this,null,this.W),ec(this)};function Gh(u){if(r_(u),u.G==3){var y=u.U++,S=en(u.I);if(he(S,"SID",u.K),he(S,"RID",y),he(S,"TYPE","terminate"),Wa(u,S),y=new Zt(u,u.j,y),y.L=2,y.v=se(en(S)),S=!1,a.navigator&&a.navigator.sendBeacon)try{S=a.navigator.sendBeacon(y.v.toString(),"")}catch{}!S&&a.Image&&(new Image().src=y.v,S=!0),S||(y.g=f_(y.j,null),y.g.ea(y.v)),y.F=Date.now(),K(y)}c_(u)}function Zu(u){u.g&&(Qh(u),u.g.cancel(),u.g=null)}function r_(u){Zu(u),u.u&&(a.clearTimeout(u.u),u.u=null),tc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function ec(u){if(!Ue(u.h)&&!u.s){u.s=!0;var y=u.Ga;Y||X(),V||(Y(),V=!0),W.add(y,u),u.B=0}}function eR(u,y){return _e(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=y.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=wi(m(u.Ga,u,y),u_(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const N=new Zt(this,this.j,u);let D=this.o;if(this.S&&(D?(D=T(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var y=0,S=0;S<this.i.length;S++){t:{var R=this.i[S];if("__data__"in R.map&&(R=R.map.__data__,typeof R=="string")){R=R.length;break t}R=void 0}if(R===void 0)break;if(y+=R,4096<y){y=S;break e}if(y===4096||S===this.i.length-1){y=S+1;break e}}y=1e3}else y=1e3;y=o_(this,N,y),S=en(this.I),he(S,"RID",u),he(S,"CVER",22),this.D&&he(S,"X-HTTP-Session-Id",this.D),Wa(this,S),D&&(this.O?y="headers="+encodeURIComponent(String(Q0(D)))+"&"+y:this.m&&Kh(S,this.m,D)),St(this.h,N),this.Ua&&he(S,"TYPE","init"),this.P?(he(S,"$req",y),he(S,"SID","null"),N.T=!0,oe(N,S,null)):oe(N,S,y),this.G=2}}else this.G==3&&(u?i_(this,u):this.i.length==0||Ue(this.h)||i_(this))};function i_(u,y){var S;y?S=y.l:S=u.U++;const R=en(u.I);he(R,"SID",u.K),he(R,"RID",S),he(R,"AID",u.T),Wa(u,R),u.m&&u.o&&Kh(R,u.m,u.o),S=new Zt(u,u.j,S,u.B+1),u.m===null&&(S.H=u.o),y&&(u.i=y.D.concat(u.i)),y=o_(u,S,1e3),S.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),St(u.h,S),oe(S,R,y)}function Wa(u,y){u.H&&x(u.H,function(S,R){he(y,R,S)}),u.l&&Tn({},function(S,R){he(y,R,S)})}function o_(u,y,S){S=Math.min(u.i.length,S);var R=u.l?m(u.l.Na,u.l,u):null;e:{var N=u.i;let D=-1;for(;;){const H=["count="+S];D==-1?0<S?(D=N[0].g,H.push("ofs="+D)):D=0:H.push("ofs="+D);let $e=!0;for(let Ot=0;Ot<S;Ot++){let Pe=N[Ot].g;const Ft=N[Ot].map;if(Pe-=D,0>Pe)D=Math.max(0,N[Ot].g-100),$e=!1;else try{QA(Ft,H,"req"+Pe+"_")}catch{R&&R(Ft)}}if($e){R=H.join("&");break e}}}return u=u.i.splice(0,S),y.D=u,R}function s_(u){if(!u.g&&!u.u){u.Y=1;var y=u.Fa;Y||X(),V||(Y(),V=!0),W.add(y,u),u.v=0}}function Yh(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=wi(m(u.Fa,u),u_(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,a_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=wi(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),Zu(this),a_(this))};function Qh(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function a_(u){u.g=new Zt(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var y=en(u.qa);he(y,"RID","rpc"),he(y,"SID",u.K),he(y,"AID",u.T),he(y,"CI",u.F?"0":"1"),!u.F&&u.ja&&he(y,"TO",u.ja),he(y,"TYPE","xmlhttp"),Wa(u,y),u.m&&u.o&&Kh(y,u.m,u.o),u.L&&(u.g.I=u.L);var S=u.g;u=u.ia,S.L=1,S.v=se(en(y)),S.m=null,S.P=!0,te(S,u)}t.Za=function(){this.C!=null&&(this.C=null,Zu(this),Yh(this),Rt(19))};function tc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function l_(u,y){var S=null;if(u.g==y){tc(u),Qh(u),u.g=null;var R=2}else if(pt(u.h,y))S=y.D,Br(u.h,y),R=1;else return;if(u.G!=0){if(y.o)if(R==1){S=y.m?y.m.length:0,y=Date.now()-y.F;var N=u.B;R=gs(),Et(R,new Bu(R,S)),ec(u)}else s_(u);else if(N=y.s,N==3||N==0&&0<y.X||!(R==1&&eR(u,y)||R==2&&Yh(u)))switch(S&&0<S.length&&(y=u.h,y.i=y.i.concat(S)),N){case 1:Ro(u,5);break;case 4:Ro(u,10);break;case 3:Ro(u,6);break;default:Ro(u,2)}}}function u_(u,y){let S=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(S*=2),S*y}function Ro(u,y){if(u.j.info("Error code "+y),y==2){var S=m(u.fb,u),R=u.Xa;const N=!R;R=new an(R||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Re(R,"https"),se(R),N?Gu(R.toString(),S):Yu(R.toString(),S)}else Rt(2);u.G=0,u.l&&u.l.sa(y),c_(u),r_(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function c_(u){if(u.G=0,u.ka=[],u.l){const y=kt(u.h);(y.length!=0||u.i.length!=0)&&(d(u.ka,y),d(u.ka,u.i),u.h.i.length=0,w(u.i),u.i.length=0),u.l.ra()}}function d_(u,y,S){var R=S instanceof an?en(S):new an(S);if(R.g!="")y&&(R.g=y+"."+R.g),jn(R,R.s);else{var N=a.location;R=N.protocol,y=y?y+"."+N.hostname:N.hostname,N=+N.port;var D=new an(null);R&&Re(D,R),y&&(D.g=y),N&&jn(D,N),S&&(D.l=S),R=D}return S=u.D,y=u.ya,S&&y&&he(R,S,y),he(R,"VER",u.la),Wa(u,R),R}function f_(u,y,S){if(y&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=u.Ca&&!u.pa?new tt(new Qu({eb:S})):new tt(u.pa),y.Ha(u.J),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function h_(){}t=h_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function nc(){}nc.prototype.g=function(u,y){return new bn(u,y)};function bn(u,y){ht.call(this),this.g=new n_(y),this.l=u,this.h=y&&y.messageUrlParams||null,u=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(u?u["X-WebChannel-Content-Type"]=y.messageContentType:u={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(u?u["X-WebChannel-Client-Profile"]=y.va:u={"X-WebChannel-Client-Profile":y.va}),this.g.S=u,(u=y&&y.Sb)&&!g(u)&&(this.g.m=u),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!g(y)&&(this.g.D=y,u=this.h,u!==null&&y in u&&(u=this.h,y in u&&delete u[y])),this.j=new Cs(this)}E(bn,ht),bn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bn.prototype.close=function(){Gh(this.g)},bn.prototype.o=function(u){var y=this.g;if(typeof u=="string"){var S={};S.__data__=u,u=S}else this.u&&(S={},S.__data__=Mn(u),u=S);y.i.push(new ve(y.Ya++,u)),y.G==3&&ec(y)},bn.prototype.N=function(){this.g.l=null,delete this.j,Gh(this.g),delete this.g,bn.aa.N.call(this)};function p_(u){bo.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var y=u.__sm__;if(y){e:{for(const S in y){u=S;break e}u=void 0}(this.i=u)&&(u=this.i,y=y!==null&&u in y?y[u]:void 0),this.data=y}else this.data=u}E(p_,bo);function m_(){Io.call(this),this.status=1}E(m_,Io);function Cs(u){this.g=u}E(Cs,h_),Cs.prototype.ua=function(){Et(this.g,"a")},Cs.prototype.ta=function(u){Et(this.g,new p_(u))},Cs.prototype.sa=function(u){Et(this.g,new m_)},Cs.prototype.ra=function(){Et(this.g,"b")},nc.prototype.createWebChannel=nc.prototype.g,bn.prototype.send=bn.prototype.o,bn.prototype.open=bn.prototype.m,bn.prototype.close=bn.prototype.close,PP=function(){return new nc},CP=function(){return gs()},IP=At,Gg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Po.NO_ERROR=0,Po.TIMEOUT=8,Po.HTTP_ERROR=6,Jc=Po,vs.COMPLETE="complete",bP=vs,Va.EventType=Fr,Fr.OPEN="a",Fr.CLOSE="b",Fr.ERROR="c",Fr.MESSAGE="d",ht.prototype.listen=ht.prototype.K,cl=Va,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,TP=tt}).apply(typeof Cc<"u"?Cc:typeof self<"u"?self:typeof window<"u"?window:{});const wE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Kt.UNAUTHENTICATED=new Kt(null),Kt.GOOGLE_CREDENTIALS=new Kt("google-credentials-uid"),Kt.FIRST_PARTY=new Kt("first-party-uid"),Kt.MOCK_USER=new Kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new Oh("@firebase/firestore");function el(){return is.logLevel}function J(t,...e){if(is.logLevel<=Te.DEBUG){const n=e.map(h0);is.debug(`Firestore (${za}): ${t}`,...n)}}function pi(t,...e){if(is.logLevel<=Te.ERROR){const n=e.map(h0);is.error(`Firestore (${za}): ${t}`,...n)}}function ma(t,...e){if(is.logLevel<=Te.WARN){const n=e.map(h0);is.warn(`Firestore (${za}): ${t}`,...n)}}function h0(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${za}) INTERNAL ASSERTION FAILED: `+t;throw pi(e),new Error(e)}function Me(t,e){t||ae()}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Sr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class M5{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Kt.UNAUTHENTICATED))}shutdown(){}}class L5{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class V5{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new eo;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new eo,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new eo)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new AP(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Kt(e)}}class j5{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class F5{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new j5(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $5{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class B5{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Me(this.o===void 0);const r=o=>{o.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,J("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new $5(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W5(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=W5(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function ga(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new _t(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new _t(0,0))}static max(){return new ue(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return lu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof lu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class rt extends lu{construct(e,n,r){return new rt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new rt(n)}static emptyPath(){return new rt([])}}const q5=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends lu{construct(e,n,r){return new Nt(e,n,r)}static isValidIdentifier(e){return q5.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ne($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new ne($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(n)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(rt.fromString(e))}static fromName(e){return new re(rt.fromString(e).popFirst(5))}static empty(){return new re(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return rt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new rt(e.slice()))}}function H5(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(r===1e9?new _t(n+1,0):new _t(n,r));return new io(i,re.empty(),e)}function K5(t){return new io(t.readTime,t.key,-1)}class io{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new io(ue.min(),re.empty(),-1)}static max(){return new io(ue.max(),re.empty(),-1)}}function G5(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y5="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q5{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==Y5)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const c=l;n(e[c]).next(f=>{s[c]=f,++a,a===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new F((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function X5(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}p0.oe=-1;function Mh(t){return t==null}function mf(t){return t===0&&1/t==-1/0}function J5(t){return typeof t=="number"&&Number.isInteger(t)&&!mf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||xt.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pc(this.root,e,this.comparator,!0)}}class Pc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??xt.RED,this.left=i??xt.EMPTY,this.right=o??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new xt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,i,o){return this}insert(e,n,r){return new xt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new SE(this.data.getIterator())}getIteratorFrom(e){return new SE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Dt(this.comparator);return n.data=e,n}}class SE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new pr([])}unionWith(e){let n=new Dt(Nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ga(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new OP("Invalid base64 string: "+o):o}}(e);return new Lt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const Z5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oo(t){if(Me(!!t),typeof t=="string"){let e=0;const n=Z5.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?Lt.fromBase64String(t):Lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function g0(t){const e=t.mapValue.fields.__previous_value__;return m0(e)?g0(e):e}function uu(t){const e=oo(t.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e,n,r,i,o,s,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class cu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new cu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof cu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?m0(t)?4:nj(t)?9007199254740991:tj(t)?10:11:ae()}function Lr(t,e){if(t===e)return!0;const n=ss(t);if(n!==ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uu(t).isEqual(uu(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=oo(i.timestampValue),a=oo(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return os(i.bytesValue).isEqual(os(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return st(i.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(i.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return st(i.integerValue)===st(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=st(i.doubleValue),a=st(o.doubleValue);return s===a?mf(s)===mf(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return ga(t.arrayValue.values||[],e.arrayValue.values||[],Lr);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(EE(s)!==EE(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Lr(s[l],a[l])))return!1;return!0}(t,e);default:return ae()}}function du(t,e){return(t.values||[]).find(n=>Lr(n,e))!==void 0}function ya(t,e){if(t===e)return 0;const n=ss(t),r=ss(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=st(o.integerValue||o.doubleValue),l=st(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return TE(t.timestampValue,e.timestampValue);case 4:return TE(uu(t),uu(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(o,s){const a=os(o),l=os(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let c=0;c<a.length&&c<l.length;c++){const f=Ae(a[c],l[c]);if(f!==0)return f}return Ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=Ae(st(o.latitude),st(s.latitude));return a!==0?a:Ae(st(o.longitude),st(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return bE(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,l,c,f;const h=o.fields||{},m=s.fields||{},_=(a=h.value)===null||a===void 0?void 0:a.arrayValue,E=(l=m.value)===null||l===void 0?void 0:l.arrayValue,w=Ae(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((f=E==null?void 0:E.values)===null||f===void 0?void 0:f.length)||0);return w!==0?w:bE(_,E)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===Ac.mapValue&&s===Ac.mapValue)return 0;if(o===Ac.mapValue)return 1;if(s===Ac.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),c=s.fields||{},f=Object.keys(c);l.sort(),f.sort();for(let h=0;h<l.length&&h<f.length;++h){const m=Ae(l[h],f[h]);if(m!==0)return m;const _=ya(a[l[h]],c[f[h]]);if(_!==0)return _}return Ae(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ae()}}function TE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=oo(t),r=oo(e),i=Ae(n.seconds,r.seconds);return i!==0?i:Ae(n.nanos,r.nanos)}function bE(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=ya(n[i],r[i]);if(o)return o}return Ae(n.length,r.length)}function va(t){return Yg(t)}function Yg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=oo(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return os(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Yg(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Yg(n.fields[s])}`;return i+"}"}(t.mapValue):ae()}function Qg(t){return!!t&&"integerValue"in t}function y0(t){return!!t&&"arrayValue"in t}function IE(t){return!!t&&"nullValue"in t}function CE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zc(t){return!!t&&"mapValue"in t}function tj(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Al(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xa(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Al(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Al(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nj(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.value=e}static empty(){return new Wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Al(n)}setAll(e){let n=Nt.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Al(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Zc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Zc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xa(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Wn(Al(this.value))}}function zP(t){const e=[];return xa(t.fields,(n,r)=>{const i=new Nt([n]);if(Zc(r)){const o=zP(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new pr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Yt(e,0,ue.min(),ue.min(),ue.min(),Wn.empty(),0)}static newFoundDocument(e,n,r,i){return new Yt(e,1,n,ue.min(),r,i,0)}static newNoDocument(e,n){return new Yt(e,2,n,ue.min(),ue.min(),Wn.empty(),0)}static newUnknownDocument(e,n){return new Yt(e,3,n,ue.min(),ue.min(),Wn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n){this.position=e,this.inclusive=n}}function PE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=re.comparator(re.fromName(s.referenceValue),n.key):r=ya(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function AE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Lr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n="asc"){this.field=e,this.dir=n}}function rj(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{}class yt extends xP{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oj(e,n,r):n==="array-contains"?new lj(e,r):n==="in"?new uj(e,r):n==="not-in"?new cj(e,r):n==="array-contains-any"?new dj(e,r):new yt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sj(e,r):new aj(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ya(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(ya(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vr extends xP{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Vr(e,n)}matches(e){return NP(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function NP(t){return t.op==="and"}function UP(t){return ij(t)&&NP(t)}function ij(t){for(const e of t.filters)if(e instanceof Vr)return!1;return!0}function Xg(t){if(t instanceof yt)return t.field.canonicalString()+t.op.toString()+va(t.value);if(UP(t))return t.filters.map(e=>Xg(e)).join(",");{const e=t.filters.map(n=>Xg(n)).join(",");return`${t.op}(${e})`}}function DP(t,e){return t instanceof yt?function(r,i){return i instanceof yt&&r.op===i.op&&r.field.isEqual(i.field)&&Lr(r.value,i.value)}(t,e):t instanceof Vr?function(r,i){return i instanceof Vr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&DP(s,i.filters[a]),!0):!1}(t,e):void ae()}function MP(t){return t instanceof yt?function(n){return`${n.field.canonicalString()} ${n.op} ${va(n.value)}`}(t):t instanceof Vr?function(n){return n.op.toString()+" {"+n.getFilters().map(MP).join(" ,")+"}"}(t):"Filter"}class oj extends yt{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class sj extends yt{constructor(e,n){super(e,"in",n),this.keys=LP("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aj extends yt{constructor(e,n){super(e,"not-in",n),this.keys=LP("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function LP(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class lj extends yt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return y0(n)&&du(n.arrayValue,this.value)}}class uj extends yt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&du(this.value.arrayValue,n)}}class cj extends yt{constructor(e,n){super(e,"not-in",n)}matches(e){if(du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!du(this.value.arrayValue,n)}}class dj extends yt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!y0(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>du(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function RE(t,e=null,n=[],r=[],i=null,o=null,s=null){return new fj(t,e,n,r,i,o,s)}function v0(t){const e=ce(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Mh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>va(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>va(r)).join(",")),e.ue=n}return e.ue}function _0(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rj(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!DP(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!AE(t.startAt,e.startAt)&&AE(t.endAt,e.endAt)}function Jg(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function hj(t,e,n,r,i,o,s,a){return new Lh(t,e,n,r,i,o,s,a)}function w0(t){return new Lh(t)}function kE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pj(t){return t.collectionGroup!==null}function Rl(t){const e=ce(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new Dt(Nt.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new yf(o,r))}),n.has(Nt.keyField().canonicalString())||e.ce.push(new yf(Nt.keyField(),r))}return e.ce}function Nr(t){const e=ce(t);return e.le||(e.le=mj(e,Rl(t))),e.le}function mj(t,e){if(t.limitType==="F")return RE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new yf(i.field,o)});const n=t.endAt?new gf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gf(t.startAt.position,t.startAt.inclusive):null;return RE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zg(t,e,n){return new Lh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vh(t,e){return _0(Nr(t),Nr(e))&&t.limitType===e.limitType}function VP(t){return`${v0(Nr(t))}|lt:${t.limitType}`}function ks(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>MP(i)).join(", ")}]`),Mh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>va(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>va(i)).join(",")),`Target(${r})`}(Nr(t))}; limitType=${t.limitType})`}function jh(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):re.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Rl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const c=PE(s,a,l);return s.inclusive?c<=0:c<0}(r.startAt,Rl(r),i)||r.endAt&&!function(s,a,l){const c=PE(s,a,l);return s.inclusive?c>=0:c>0}(r.endAt,Rl(r),i))}(t,e)}function gj(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jP(t){return(e,n)=>{let r=!1;for(const i of Rl(t)){const o=yj(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function yj(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),c=a.data.field(o);return l!==null&&c!==null?ya(l,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xa(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return kP(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vj=new Ze(re.comparator);function mi(){return vj}const FP=new Ze(re.comparator);function dl(...t){let e=FP;for(const n of t)e=e.insert(n.key,n);return e}function $P(t){let e=FP;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fo(){return kl()}function BP(){return kl()}function kl(){return new Na(t=>t.toString(),(t,e)=>t.isEqual(e))}const _j=new Ze(re.comparator),wj=new Dt(re.comparator);function Ee(...t){let e=wj;for(const n of t)e=e.add(n);return e}const Ej=new Dt(Ae);function Sj(){return Ej}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mf(e)?"-0":e}}function WP(t){return{integerValue:""+t}}function Tj(t,e){return J5(e)?WP(e):E0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this._=void 0}}function bj(t,e,n){return t instanceof vf?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&m0(o)&&(o=g0(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof fu?HP(t,e):t instanceof hu?KP(t,e):function(i,o){const s=qP(i,o),a=OE(s)+OE(i.Pe);return Qg(s)&&Qg(i.Pe)?WP(a):E0(i.serializer,a)}(t,e)}function Ij(t,e,n){return t instanceof fu?HP(t,e):t instanceof hu?KP(t,e):n}function qP(t,e){return t instanceof _f?function(r){return Qg(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class vf extends Fh{}class fu extends Fh{constructor(e){super(),this.elements=e}}function HP(t,e){const n=GP(e);for(const r of t.elements)n.some(i=>Lr(i,r))||n.push(r);return{arrayValue:{values:n}}}class hu extends Fh{constructor(e){super(),this.elements=e}}function KP(t,e){let n=GP(e);for(const r of t.elements)n=n.filter(i=>!Lr(i,r));return{arrayValue:{values:n}}}class _f extends Fh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function OE(t){return st(t.integerValue||t.doubleValue)}function GP(t){return y0(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Cj(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof fu&&i instanceof fu||r instanceof hu&&i instanceof hu?ga(r.elements,i.elements,Lr):r instanceof _f&&i instanceof _f?Lr(r.Pe,i.Pe):r instanceof vf&&i instanceof vf}(t.transform,e.transform)}class Pj{constructor(e,n){this.version=e,this.transformResults=n}}class ii{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ii}static exists(e){return new ii(void 0,e)}static updateTime(e){return new ii(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ed(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $h{}function YP(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new XP(t.key,ii.none()):new xu(t.key,t.data,ii.none());{const n=t.data,r=Wn.empty();let i=new Dt(Nt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new hs(t.key,r,new pr(i.toArray()),ii.none())}}function Aj(t,e,n){t instanceof xu?function(i,o,s){const a=i.value.clone(),l=xE(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof hs?function(i,o,s){if(!ed(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=xE(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(QP(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ol(t,e,n,r){return t instanceof xu?function(o,s,a,l){if(!ed(o.precondition,s))return a;const c=o.value.clone(),f=NE(o.fieldTransforms,l,s);return c.setAll(f),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof hs?function(o,s,a,l){if(!ed(o.precondition,s))return a;const c=NE(o.fieldTransforms,l,s),f=s.data;return f.setAll(QP(o)),f.setAll(c),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(o,s,a){return ed(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function Rj(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=qP(r.transform,i||null);o!=null&&(n===null&&(n=Wn.empty()),n.set(r.field,o))}return n||null}function zE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ga(r,i,(o,s)=>Cj(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xu extends $h{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hs extends $h{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function QP(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xE(t,e,n){const r=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Ij(s,a,n[i]))}return r}function NE(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,bj(o,s,e))}return r}class XP extends $h{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kj extends $h{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Aj(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ol(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ol(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=BP();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=YP(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&ga(this.mutations,e.mutations,(n,r)=>zE(n,r))&&ga(this.baseMutations,e.baseMutations,(n,r)=>zE(n,r))}}class S0{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Me(e.mutations.length===r.length);let i=function(){return _j}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new S0(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,be;function Nj(t){switch(t){default:return ae();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function JP(t){if(t===void 0)return pi("GRPC error has no .code"),$.UNKNOWN;switch(t){case lt.OK:return $.OK;case lt.CANCELLED:return $.CANCELLED;case lt.UNKNOWN:return $.UNKNOWN;case lt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case lt.INTERNAL:return $.INTERNAL;case lt.UNAVAILABLE:return $.UNAVAILABLE;case lt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case lt.NOT_FOUND:return $.NOT_FOUND;case lt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case lt.ABORTED:return $.ABORTED;case lt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case lt.DATA_LOSS:return $.DATA_LOSS;default:return ae()}}(be=lt||(lt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uj(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dj=new Wo([4294967295,4294967295],0);function UE(t){const e=Uj().encode(t),n=new SP;return n.update(e),new Uint8Array(n.digest())}function DE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Wo([n,r],0),new Wo([i,o],0)]}class T0{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fl(`Invalid padding: ${n}`);if(r<0)throw new fl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Wo.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Wo.fromNumber(r)));return i.compare(Dj)===1&&(i=new Wo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=UE(e),[r,i]=DE(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new T0(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=UE(e),[r,i]=DE(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Nu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bh(ue.min(),i,new Ze(Ae),mi(),Ee())}}class Nu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Nu(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class ZP{constructor(e,n){this.targetId=e,this.me=n}}class eA{constructor(e,n,r=Lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ME{constructor(){this.fe=0,this.ge=VE(),this.pe=Lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ae()}}),new Nu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=VE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Mj{constructor(e){this.Le=e,this.Be=new Map,this.ke=mi(),this.qe=LE(),this.Qe=new Ze(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(Jg(o))if(r===0){const s=new re(o.path);this.Ue(n,s,Yt.newNoDocument(s,ue.min()))}else Me(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),l=a?this.Xe(a,e,s):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=os(r).toUint8Array()}catch(l){if(l instanceof OP)return ma("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new T0(s,i,o)}catch(l){return ma(l instanceof fl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&Jg(a.target)){const l=new re(a.target.path);this.ke.get(l)!==null||this.it(s,l)||this.Ue(s,l,Yt.newNoDocument(l,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=Ee();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Bh(e,n,this.Qe,this.ke,r);return this.ke=mi(),this.qe=LE(),this.Qe=new Ze(Ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ME,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Dt(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ME),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function LE(){return new Ze(re.comparator)}function VE(){return new Ze(re.comparator)}const Lj=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Vj=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),jj=(()=>({and:"AND",or:"OR"}))();class Fj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ey(t,e){return t.useProto3Json||Mh(e)?e:{value:e}}function wf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $j(t,e){return wf(t,e.toTimestamp())}function Ur(t){return Me(!!t),ue.fromTimestamp(function(n){const r=oo(n);return new _t(r.seconds,r.nanos)}(t))}function b0(t,e){return ty(t,e).canonicalString()}function ty(t,e){const n=function(i){return new rt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function nA(t){const e=rt.fromString(t);return Me(aA(e)),e}function ny(t,e){return b0(t.databaseId,e.path)}function im(t,e){const n=nA(e);if(n.get(1)!==t.databaseId.projectId)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(iA(n))}function rA(t,e){return b0(t.databaseId,e)}function Bj(t){const e=nA(t);return e.length===4?rt.emptyPath():iA(e)}function ry(t){return new rt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iA(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jE(t,e,n){return{name:ny(t,e),fields:n.value.mapValue.fields}}function Wj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(c,f){return c.useProto3Json?(Me(f===void 0||typeof f=="string"),Lt.fromBase64String(f||"")):(Me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Lt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(c){const f=c.code===void 0?$.UNKNOWN:JP(c.code);return new ne(f,c.message||"")}(s);n=new eA(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=im(t,r.document.name),o=Ur(r.document.updateTime),s=r.document.createTime?Ur(r.document.createTime):ue.min(),a=new Wn({mapValue:{fields:r.document.fields}}),l=Yt.newFoundDocument(i,o,s,a),c=r.targetIds||[],f=r.removedTargetIds||[];n=new td(c,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=im(t,r.document),o=r.readTime?Ur(r.readTime):ue.min(),s=Yt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new td([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=im(t,r.document),o=r.removedTargetIds||[];n=new td([],o,i,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new xj(i,o),a=r.targetId;n=new ZP(a,s)}}return n}function qj(t,e){let n;if(e instanceof xu)n={update:jE(t,e.key,e.value)};else if(e instanceof XP)n={delete:ny(t,e.key)};else if(e instanceof hs)n={update:jE(t,e.key,e.data),updateMask:eF(e.fieldMask)};else{if(!(e instanceof kj))return ae();n={verify:ny(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof vf)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof fu)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof hu)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof _f)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:$j(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ae()}(t,e.precondition)),n}function Hj(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Ur(i.updateTime):Ur(o);return s.isEqual(ue.min())&&(s=Ur(o)),new Pj(s,i.transformResults||[])}(n,e))):[]}function Kj(t,e){return{documents:[rA(t,e.path)]}}function Gj(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rA(t,i);const o=function(c){if(c.length!==0)return sA(Vr.create(c,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:Os(m.field),direction:Xj(m.dir)}}(f))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=ey(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Yj(t){let e=Bj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Me(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(h){const m=oA(h);return m instanceof Vr&&UP(m)?m.getFilters():[m]}(n.where));let s=[];n.orderBy&&(s=function(h){return h.map(m=>function(E){return new yf(zs(E.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(h){let m;return m=typeof h=="object"?h.value:h,Mh(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(h){const m=!!h.before,_=h.values||[];return new gf(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const m=!h.before,_=h.values||[];return new gf(_,m)}(n.endAt)),hj(e,i,s,o,a,"F",l,c)}function Qj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function oA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zs(n.unaryFilter.field);return yt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=zs(n.unaryFilter.field);return yt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=zs(n.unaryFilter.field);return yt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=zs(n.unaryFilter.field);return yt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return yt.create(zs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vr.create(n.compositeFilter.filters.map(r=>oA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function Xj(t){return Lj[t]}function Jj(t){return Vj[t]}function Zj(t){return jj[t]}function Os(t){return{fieldPath:t.canonicalString()}}function zs(t){return Nt.fromServerFormat(t.fieldPath)}function sA(t){return t instanceof yt?function(n){if(n.op==="=="){if(CE(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NAN"}};if(IE(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(CE(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NAN"}};if(IE(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(n.field),op:Jj(n.op),value:n.value}}}(t):t instanceof Vr?function(n){const r=n.getFilters().map(i=>sA(i));return r.length===1?r[0]:{compositeFilter:{op:Zj(n.op),filters:r}}}(t):ae()}function eF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n,r,i,o=ue.min(),s=ue.min(),a=Lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e){this.ct=e}}function nF(t){const e=Yj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(){this.un=new iF}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(io.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(io.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class iF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Dt(rt.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Dt(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new _a(0)}static kn(){return new _a(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(){this.changes=new Na(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ol(r.mutation,i,pr.empty(),_t.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const i=Fo();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=dl();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Fo();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=mi();const s=kl(),a=function(){return kl()}();return n.forEach((l,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof hs)?o=o.insert(c.key,c):f!==void 0?(s.set(c.key,f.mutation.getFieldMask()),Ol(f.mutation,c,f.mutation.getFieldMask(),_t.now())):s.set(c.key,pr.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((c,f)=>s.set(c,f)),n.forEach((c,f)=>{var h;return a.set(c,new sF(f,(h=s.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=kl();let i=new Ze((s,a)=>s-a),o=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let f=r.get(l)||pr.empty();f=a.applyToLocalView(c,f),r.set(l,f);const h=(i.get(a.batchId)||Ee()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,f=l.value,h=BP();f.forEach(m=>{if(!o.has(m)){const _=YP(n.get(m),r.get(m));_!==null&&h.set(m,_),o=o.add(m)}}),s.push(this.documentOverlayCache.saveOverlays(e,c,h))}return F.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return re.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pj(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):F.resolve(Fo());let a=-1,l=o;return s.next(c=>F.forEach(c,(f,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),o.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,l,c,Ee())).next(f=>({batchId:a,changes:$P(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let i=dl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=dl();return this.indexManager.getCollectionParents(e,o).next(a=>F.forEach(a,l=>{const c=function(h,m){return new Lh(m,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((h,m)=>{s=s.insert(h,m)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,c)=>{const f=c.getKey();s.get(f)===null&&(s=s.insert(f,Yt.newInvalidDocument(f)))});let a=dl();return s.forEach((l,c)=>{const f=o.get(l);f!==void 0&&Ol(f.mutation,c,pr.empty(),_t.now()),jh(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ur(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:nF(i.bundledQuery),readTime:Ur(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uF{constructor(){this.overlays=new Ze(re.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fo();return F.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Fo(),o=n.length+1,s=new re(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Ze((c,f)=>c-f);const s=this.overlays.getIterator();for(;s.hasNext();){const c=s.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=o.get(c.largestBatchId);f===null&&(f=Fo(),o=o.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const a=Fo(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,f)=>a.set(c,f)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new zj(n,r));let o=this.Ir.get(n);o===void 0&&(o=Ee(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(){this.sessionToken=Lt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.Tr=new Dt(Tt.Er),this.dr=new Dt(Tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Tt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Tt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new re(new rt([])),r=new Tt(n,e),i=new Tt(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new re(new rt([])),r=new Tt(n,e),i=new Tt(n,e+1);let o=Ee();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new Tt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return re.comparator(e.key,n.key)||Ae(e.wr,n.wr)}static Ar(e,n){return Ae(e.wr,n.wr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Dt(Tt.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Oj(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new Tt(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(s)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return F.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Tt(n,0),i=new Tt(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),F.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Dt(Ae);return n.forEach(i=>{const o=new Tt(i,0),s=new Tt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;re.isDocumentKey(o)||(o=o.child(""));const s=new Tt(new re(o),0);let a=new Dt(Ae);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},s),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const o=new Tt(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Tt(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(e){this.Mr=e,this.docs=function(){return new Ze(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Yt.newInvalidDocument(n))}getEntries(e,n){let r=mi();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Yt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=mi();const s=n.path,a=new re(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:f}}=l.getNext();if(!s.isPrefixOf(c.path))break;c.path.length>s.length+1||G5(K5(f),r)<=0||(i.has(f.key)||jh(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return F.resolve(o)}getAllFromCollectionGroup(e,n,r,i){ae()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hF(this)}getSize(e){return F.resolve(this.size)}}class hF extends oF{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(e){this.persistence=e,this.Nr=new Na(n=>v0(n),_0),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new I0,this.targetCount=0,this.kr=_a.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new _a(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(o).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),F.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(e,n){this.qr={},this.overlays={},this.Qr=new p0(0),this.Kr=!1,this.Kr=!0,this.$r=new cF,this.referenceDelegate=e(this),this.Ur=new pF(this),this.indexManager=new rF,this.remoteDocumentCache=function(i){return new fF(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new tF(n),this.Gr=new lF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new dF(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const i=new gF(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class gF extends Q5{constructor(e){super(),this.currentSequenceNumber=e}}class C0{constructor(e){this.persistence=e,this.Jr=new I0,this.Yr=null}static Zr(e){return new C0(e)}get Xr(){if(this.Yr)return this.Yr;throw ae()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=re.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,ue.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Ee(),i=Ee();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new P0(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return $D()?8:X5(Jt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new yF;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(el()<=Te.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(el()<=Te.DEBUG&&J("QueryEngine","Query:",ks(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(el()<=Te.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nr(n))):F.resolve())}Yi(e,n){if(kE(n))return F.resolve(null);let r=Nr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Zg(n,null,"F"),r=Nr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=Ee(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,s,l.readTime)?this.Yi(e,Zg(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return kE(n)||i.isEqual(ue.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?F.resolve(null):(el()<=Te.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ks(n)),this.rs(e,s,n,H5(i,-1)).next(a=>a))})}ts(e,n){let r=new Dt(jP(e));return n.forEach((i,o)=>{jh(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return el()<=Te.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",ks(n)),this.Ji.getDocumentsMatchingQuery(e,n,io.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ze(Ae),this._s=new Na(o=>v0(o),_0),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aF(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function wF(t,e,n,r){return new _F(t,e,n,r)}async function lA(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=Ee();for(const c of i){s.push(c.batchId);for(const f of c.mutations)l=l.add(f.key)}for(const c of o){a.push(c.batchId);for(const f of c.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:s,addedBatchIds:a}))})})}function EF(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,f){const h=c.batch,m=h.keys();let _=F.resolve();return m.forEach(E=>{_=_.next(()=>f.getEntry(l,E)).next(w=>{const d=c.docVersions.get(E);Me(d!==null),w.version.compareTo(d)<0&&(h.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),f.addEntry(w)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Ee();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function uA(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function SF(t,e){const n=ce(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,h)=>{const m=i.get(h);if(!m)return;a.push(n.Ur.removeMatchingKeys(o,f.removedDocuments,h).next(()=>n.Ur.addMatchingKeys(o,f.addedDocuments,h)));let _=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(h)!==null?_=_.withResumeToken(Lt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),i=i.insert(h,_),function(w,d,p){return w.resumeToken.approximateByteSize()===0||d.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(m,_,f)&&a.push(n.Ur.updateTargetData(o,_))});let l=mi(),c=Ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))}),a.push(TF(o,s,e.documentUpdates).next(f=>{l=f.Ps,c=f.Is})),!r.isEqual(ue.min())){const f=n.Ur.getLastRemoteSnapshotVersion(o).next(h=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(f)}return F.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,c)).next(()=>l)}).then(o=>(n.os=i,o))}function TF(t,e,n){let r=Ee(),i=Ee();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=mi();return n.forEach((a,l)=>{const c=o.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:s,Is:i}})}function bF(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function IF(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,F.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new Vi(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function iy(t,e,n){const r=ce(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!zu(s))throw s;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function FE(t,e,n){const r=ce(t);let i=ue.min(),o=Ee();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,c,f){const h=ce(l),m=h._s.get(f);return m!==void 0?F.resolve(h.os.get(m)):h.Ur.getTargetData(c,f)}(r,s,Nr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:ue.min(),n?o:Ee())).next(a=>(CF(r,gj(e),a),{documents:a,Ts:o})))}function CF(t,e,n){let r=t.us.get(e)||ue.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class $E{constructor(){this.activeTargetIds=Sj()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PF{constructor(){this.so=new $E,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new $E,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc=null;function om(){return Rc===null?Rc=function(){return 268435456+Math.round(2147483648*Math.random())}():Rc++,"0x"+Rc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class OF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=om(),l=this.xo(n,r.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,o,s),this.No(n,l,c,i).then(f=>(J("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw ma("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",l,"request:",i),f})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+za}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=RF[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=om();return new Promise((s,a)=>{const l=new TP;l.setWithCredentials(!0),l.listenOnce(bP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Jc.NO_ERROR:const f=l.getResponseJson();J(qt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case Jc.TIMEOUT:J(qt,`RPC '${e}' ${o} timed out`),a(new ne($.DEADLINE_EXCEEDED,"Request time out"));break;case Jc.HTTP_ERROR:const h=l.getStatus();if(J(qt,`RPC '${e}' ${o} failed with status:`,h,"response text:",l.getResponseText()),h>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const E=function(d){const p=d.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(p)>=0?p:$.UNKNOWN}(_.status);a(new ne(E,_.message))}else a(new ne($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ne($.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{J(qt,`RPC '${e}' ${o} completed.`)}});const c=JSON.stringify(i);J(qt,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=om(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=PP(),a=CP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=o.join("");J(qt,`Creating RPC '${e}' stream ${i}: ${f}`,l);const h=s.createWebChannel(f,l);let m=!1,_=!1;const E=new kF({Io:d=>{_?J(qt,`Not sending because RPC '${e}' stream ${i} is closed:`,d):(m||(J(qt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),m=!0),J(qt,`RPC '${e}' stream ${i} sending:`,d),h.send(d))},To:()=>h.close()}),w=(d,p,g)=>{d.listen(p,v=>{try{g(v)}catch(b){setTimeout(()=>{throw b},0)}})};return w(h,cl.EventType.OPEN,()=>{_||(J(qt,`RPC '${e}' stream ${i} transport opened.`),E.yo())}),w(h,cl.EventType.CLOSE,()=>{_||(_=!0,J(qt,`RPC '${e}' stream ${i} transport closed`),E.So())}),w(h,cl.EventType.ERROR,d=>{_||(_=!0,ma(qt,`RPC '${e}' stream ${i} transport errored:`,d),E.So(new ne($.UNAVAILABLE,"The operation could not be completed")))}),w(h,cl.EventType.MESSAGE,d=>{var p;if(!_){const g=d.data[0];Me(!!g);const v=g,b=v.error||((p=v[0])===null||p===void 0?void 0:p.error);if(b){J(qt,`RPC '${e}' stream ${i} received error:`,b);const I=b.status;let x=function(P){const A=lt[P];if(A!==void 0)return JP(A)}(I),C=b.message;x===void 0&&(x=$.INTERNAL,C="Unknown error status: "+I+" with message "+b.message),_=!0,E.So(new ne(x,C)),h.close()}else J(qt,`RPC '${e}' stream ${i} received:`,g),E.bo(g)}}),w(a,IP.STAT_EVENT,d=>{d.stat===Gg.PROXY?J(qt,`RPC '${e}' stream ${i} detected buffering proxy`):d.stat===Gg.NOPROXY&&J(qt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function sm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t){return new Fj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&J("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n,r,i,o,s,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new cA(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(pi(n.toString()),pi("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new ne($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zF extends dA{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Wj(this.serializer,e),r=function(o){if(!("targetChange"in o))return ue.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?ue.min():s.readTime?Ur(s.readTime):ue.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ry(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=Jg(l)?{documents:Kj(o,l)}:{query:Gj(o,l)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=tA(o,s.resumeToken);const c=ey(o,s.expectedCount);c!==null&&(a.expectedCount=c)}else if(s.snapshotVersion.compareTo(ue.min())>0){a.readTime=wf(o,s.snapshotVersion.toTimestamp());const c=ey(o,s.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=Qj(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ry(this.serializer),n.removeTarget=e,this.a_(n)}}class xF extends dA{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Hj(e.writeResults,e.commitTime),r=Ur(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ry(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qj(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,ty(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne($.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,ty(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ne($.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class UF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(pi(n),this.D_=!1):J("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{ps(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ce(l);c.L_.add(4),await Uu(c),c.q_.set("Unknown"),c.L_.delete(4),await qh(c)}(this))})}),this.q_=new UF(r,i)}}async function qh(t){if(ps(t))for(const e of t.B_)await e(!0)}async function Uu(t){for(const e of t.B_)await e(!1)}function fA(t,e){const n=ce(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),O0(n)?k0(n):Ua(n).r_()&&R0(n,e))}function A0(t,e){const n=ce(t),r=Ua(n);n.N_.delete(e),r.r_()&&hA(n,e),n.N_.size===0&&(r.r_()?r.o_():ps(n)&&n.q_.set("Unknown"))}function R0(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ua(t).A_(e)}function hA(t,e){t.Q_.xe(e),Ua(t).R_(e)}function k0(t){t.Q_=new Mj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ua(t).start(),t.q_.v_()}function O0(t){return ps(t)&&!Ua(t).n_()&&t.N_.size>0}function ps(t){return ce(t).L_.size===0}function pA(t){t.Q_=void 0}async function MF(t){t.q_.set("Online")}async function LF(t){t.N_.forEach((e,n)=>{R0(t,e)})}async function VF(t,e){pA(t),O0(t)?(t.q_.M_(e),k0(t)):t.q_.set("Unknown")}async function jF(t,e,n){if(t.q_.set("Online"),e instanceof eA&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ef(t,r)}else if(e instanceof td?t.Q_.Ke(e):e instanceof ZP?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ue.min()))try{const r=await uA(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const f=o.N_.get(c);f&&o.N_.set(c,f.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,c)=>{const f=o.N_.get(l);if(!f)return;o.N_.set(l,f.withResumeToken(Lt.EMPTY_BYTE_STRING,f.snapshotVersion)),hA(o,l);const h=new Vi(f.target,l,c,f.sequenceNumber);R0(o,h)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await Ef(t,r)}}async function Ef(t,e,n){if(!zu(e))throw e;t.L_.add(1),await Uu(t),t.q_.set("Offline"),n||(n=()=>uA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await qh(t)})}function mA(t,e){return e().catch(n=>Ef(t,n,e))}async function Hh(t){const e=ce(t),n=so(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;FF(e);)try{const i=await bF(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,$F(e,i)}catch(i){await Ef(e,i)}gA(e)&&yA(e)}function FF(t){return ps(t)&&t.O_.length<10}function $F(t,e){t.O_.push(e);const n=so(t);n.r_()&&n.V_&&n.m_(e.mutations)}function gA(t){return ps(t)&&!so(t).n_()&&t.O_.length>0}function yA(t){so(t).start()}async function BF(t){so(t).p_()}async function WF(t){const e=so(t);for(const n of t.O_)e.m_(n.mutations)}async function qF(t,e,n){const r=t.O_.shift(),i=S0.from(r,e,n);await mA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Hh(t)}async function HF(t,e){e&&so(t).V_&&await async function(r,i){if(function(s){return Nj(s)&&s!==$.ABORTED}(i.code)){const o=r.O_.shift();so(r).s_(),await mA(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Hh(r)}}(t,e),gA(t)&&yA(t)}async function WE(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=ps(n);n.L_.add(3),await Uu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await qh(n)}async function KF(t,e){const n=ce(t);e?(n.L_.delete(2),await qh(n)):e||(n.L_.add(2),await Uu(n),n.q_.set("Unknown"))}function Ua(t){return t.K_||(t.K_=function(n,r,i){const o=ce(n);return o.w_(),new zF(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:MF.bind(null,t),Ro:LF.bind(null,t),mo:VF.bind(null,t),d_:jF.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),O0(t)?k0(t):t.q_.set("Unknown")):(await t.K_.stop(),pA(t))})),t.K_}function so(t){return t.U_||(t.U_=function(n,r,i){const o=ce(n);return o.w_(),new xF(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:BF.bind(null,t),mo:HF.bind(null,t),f_:WF.bind(null,t),g_:qF.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Hh(t)):(await t.U_.stop(),t.O_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new eo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new z0(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function x0(t,e){if(pi("AsyncQueue",`${e}: ${t}`),zu(t))return new ne($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=dl(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new ra(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ra)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ra;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(){this.W_=new Ze(re.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ae():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class wa{constructor(e,n,r,i,o,s,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new wa(e,n,ra.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GF{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class YF{constructor(){this.queries=HE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ce(n),o=i.queries;i.queries=HE(),o.forEach((s,a)=>{for(const l of a.j_)l.onError(r)})})(this,new ne($.ABORTED,"Firestore shutting down"))}}function HE(){return new Na(t=>VP(t),Vh)}async function QF(t,e){const n=ce(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new GF,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=x0(s,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&N0(n)}async function XF(t,e){const n=ce(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function JF(t,e){const n=ce(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&N0(n)}function ZF(t,e,n){const r=ce(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function N0(t){t.Y_.forEach(e=>{e.next()})}var oy,KE;(KE=oy||(oy={})).ea="default",KE.Cache="cache";class e3{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=wa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==oy.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.key=e}}class _A{constructor(e){this.key=e}}class t3{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ee(),this.mutatedKeys=Ee(),this.Aa=jP(e),this.Ra=new ra(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new qE,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,h)=>{const m=i.get(f),_=jh(this.query,h)?h:null,E=!!m&&this.mutatedKeys.has(m.key),w=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let d=!1;m&&_?m.data.isEqual(_.data)?E!==w&&(r.track({type:3,doc:_}),d=!0):this.ga(m,_)||(r.track({type:2,doc:_}),d=!0,(l&&this.Aa(_,l)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),d=!0):m&&!_&&(r.track({type:1,doc:m}),d=!0,(l||c)&&(a=!0)),d&&(_?(s=s.add(_),o=w?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((f,h)=>function(_,E){const w=d=>{switch(d){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return w(_)-w(E)}(f.type,h.type)||this.Aa(f.doc,h.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,s.length!==0||c?{snapshot:new wa(this.query,e.Ra,o,s,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new qE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new _A(r))}),this.da.forEach(r=>{e.has(r)||n.push(new vA(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return wa.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class n3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class r3{constructor(e){this.key=e,this.va=!1}}class i3{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Na(a=>VP(a),Vh),this.Ma=new Map,this.xa=new Set,this.Oa=new Ze(re.comparator),this.Na=new Map,this.La=new I0,this.Ba={},this.ka=new Map,this.qa=_a.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function o3(t,e,n=!0){const r=IA(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await wA(r,e,n,!0),i}async function s3(t,e){const n=IA(t);await wA(n,e,!0,!1)}async function wA(t,e,n,r){const i=await IF(t.localStore,Nr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await a3(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&fA(t.remoteStore,i),a}async function a3(t,e,n,r,i){t.Ka=(h,m,_)=>async function(w,d,p,g){let v=d.view.ma(p);v.ns&&(v=await FE(w.localStore,d.query,!1).then(({documents:C})=>d.view.ma(C,v)));const b=g&&g.targetChanges.get(d.targetId),I=g&&g.targetMismatches.get(d.targetId)!=null,x=d.view.applyChanges(v,w.isPrimaryClient,b,I);return YE(w,d.targetId,x.wa),x.snapshot}(t,h,m,_);const o=await FE(t.localStore,e,!0),s=new t3(e,o.Ts),a=s.ma(o.documents),l=Nu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=s.applyChanges(a,t.isPrimaryClient,l);YE(t,n,c.wa);const f=new n3(e,n,s);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function l3(t,e,n){const r=ce(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!Vh(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await iy(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&A0(r.remoteStore,i.targetId),sy(r,i.targetId)}).catch(Ou)):(sy(r,i.targetId),await iy(r.localStore,i.targetId,!0))}async function u3(t,e){const n=ce(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),A0(n.remoteStore,r.targetId))}async function c3(t,e,n){const r=y3(t);try{const i=await function(s,a){const l=ce(s),c=_t.now(),f=a.reduce((_,E)=>_.add(E.key),Ee());let h,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let E=mi(),w=Ee();return l.cs.getEntries(_,f).next(d=>{E=d,E.forEach((p,g)=>{g.isValidDocument()||(w=w.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,E)).next(d=>{h=d;const p=[];for(const g of a){const v=Rj(g,h.get(g.key).overlayedDocument);v!=null&&p.push(new hs(g.key,v,zP(v.value.mapValue),ii.exists(!0)))}return l.mutationQueue.addMutationBatch(_,c,p,a)}).next(d=>{m=d;const p=d.applyToLocalDocumentSet(h,w);return l.documentOverlayCache.saveOverlays(_,d.batchId,p)})}).then(()=>({batchId:m.batchId,changes:$P(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let c=s.Ba[s.currentUser.toKey()];c||(c=new Ze(Ae)),c=c.insert(a,l),s.Ba[s.currentUser.toKey()]=c}(r,i.batchId,n),await Du(r,i.changes),await Hh(r.remoteStore)}catch(i){const o=x0(i,"Failed to persist write");n.reject(o)}}async function EA(t,e){const n=ce(t);try{const r=await SF(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Me(s.va):i.removedDocuments.size>0&&(Me(s.va),s.va=!1))}),await Du(n,r,e)}catch(r){await Ou(r)}}function GE(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=ce(s);l.onlineState=a;let c=!1;l.queries.forEach((f,h)=>{for(const m of h.j_)m.Z_(a)&&(c=!0)}),c&&N0(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function d3(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new Ze(re.comparator);s=s.insert(o,Yt.newNoDocument(o,ue.min()));const a=Ee().add(o),l=new Bh(ue.min(),new Map,new Ze(Ae),s,a);await EA(r,l),r.Oa=r.Oa.remove(o),r.Na.delete(e),U0(r)}else await iy(r.localStore,e,!1).then(()=>sy(r,e,n)).catch(Ou)}async function f3(t,e){const n=ce(t),r=e.batch.batchId;try{const i=await EF(n.localStore,e);TA(n,r,null),SA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Du(n,i)}catch(i){await Ou(i)}}async function h3(t,e,n){const r=ce(t);try{const i=await function(s,a){const l=ce(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Me(h!==null),f=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>l.localDocuments.getDocuments(c,f))})}(r.localStore,e);TA(r,e,n),SA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Du(r,i)}catch(i){await Ou(i)}}function SA(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function TA(t,e,n){const r=ce(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function sy(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||bA(t,r)})}function bA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(A0(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),U0(t))}function YE(t,e,n){for(const r of n)r instanceof vA?(t.La.addReference(r.key,e),p3(t,r)):r instanceof _A?(J("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||bA(t,r.key)):ae()}function p3(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(J("SyncEngine","New document in limbo: "+n),t.xa.add(r),U0(t))}function U0(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new re(rt.fromString(e)),r=t.qa.next();t.Na.set(r,new r3(n)),t.Oa=t.Oa.insert(n,r),fA(t.remoteStore,new Vi(Nr(w0(n.path)),r,"TargetPurposeLimboResolution",p0.oe))}}async function Du(t,e,n){const r=ce(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{s.push(r.Ka(l,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const h=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(c){i.push(c);const h=P0.Wi(l.targetId,c);o.push(h)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(l,c){const f=ce(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>F.forEach(c,m=>F.forEach(m.$i,_=>f.persistence.referenceDelegate.addReference(h,m.targetId,_)).next(()=>F.forEach(m.Ui,_=>f.persistence.referenceDelegate.removeReference(h,m.targetId,_)))))}catch(h){if(!zu(h))throw h;J("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const m=h.targetId;if(!h.fromCache){const _=f.os.get(m),E=_.snapshotVersion,w=_.withLastLimboFreeSnapshotVersion(E);f.os=f.os.insert(m,w)}}}(r.localStore,o))}async function m3(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await lA(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(l=>{l.reject(new ne($.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Du(n,r.hs)}}function g3(t,e){const n=ce(t),r=n.Na.get(e);if(r&&r.va)return Ee().add(r.key);{let i=Ee();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function IA(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=EA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=g3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=d3.bind(null,e),e.Ca.d_=JF.bind(null,e.eventManager),e.Ca.$a=ZF.bind(null,e.eventManager),e}function y3(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=f3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=h3.bind(null,e),e}class Sf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return wF(this.persistence,new vF,e.initialUser,this.serializer)}Ga(e){return new mF(C0.Zr,this.serializer)}Wa(e){return new PF}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sf.provider={build:()=>new Sf};class ay{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>GE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=m3.bind(null,this.syncEngine),await KF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YF}()}createDatastore(e){const n=Wh(e.databaseInfo.databaseId),r=function(o){return new OF(o)}(e.databaseInfo);return function(o,s,a,l){return new NF(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new DF(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>GE(this.syncEngine,n,0),function(){return BE.D()?new BE:new AF}())}createSyncEngine(e,n){return function(i,o,s,a,l,c,f){const h=new i3(i,o,s,a,l,c);return f&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=ce(i);J("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Uu(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ay.provider={build:()=>new ay};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v3{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):pi("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _3{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Kt.UNAUTHENTICATED,this.clientId=RP.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{J("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(J("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new eo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=x0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function am(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await lA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function QE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await w3(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>WE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>WE(e.remoteStore,i)),t._onlineComponents=e}async function w3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await am(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===$.FAILED_PRECONDITION||i.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ma("Error using user provided cache. Falling back to memory cache: "+n),await am(t,new Sf)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await am(t,new Sf);return t._offlineComponents}async function CA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await QE(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await QE(t,new ay))),t._onlineComponents}function E3(t){return CA(t).then(e=>e.syncEngine)}async function S3(t){const e=await CA(t),n=e.eventManager;return n.onListen=o3.bind(null,e.syncEngine),n.onUnlisten=l3.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=s3.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=u3.bind(null,e.syncEngine),n}function T3(t,e,n={}){const r=new eo;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,c){const f=new v3({next:m=>{f.Za(),s.enqueueAndForget(()=>XF(o,h));const _=m.docs.has(a);!_&&m.fromCache?c.reject(new ne($.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?c.reject(new ne($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),h=new e3(w0(a.path),f,{includeMetadataChanges:!0,_a:!0});return QF(o,h)}(await S3(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b3(t,e,n){if(!n)throw new ne($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function I3(t,e,n,r){if(e===!0&&r===!0)throw new ne($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function JE(t){if(!re.isDocumentKey(t))throw new ne($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function D0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function pu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=D0(t);throw new ne($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}I3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=PA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class M0{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ZE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ZE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new M5;switch(r.type){case"firstParty":return new F5(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=XE.get(n);r&&(J("ComponentProvider","Removing Datastore"),XE.delete(n),r.terminate())}(this),Promise.resolve()}}function C3(t,e,n,r={}){var i;const o=(t=pu(t,M0))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&ma("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Kt.MOCK_USER;else{a=DD(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new ne($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Kt(c)}t._authCredentials=new L5(new AP(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new L0(this.firestore,e,this._query)}}class Gn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gn(this.firestore,e,this._key)}}class mu extends L0{constructor(e,n,r){super(e,n,w0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gn(this.firestore,null,new re(e))}withConverter(e){return new mu(this.firestore,e,this._path)}}function B6(t,e,...n){if(t=gn(t),arguments.length===1&&(e=RP.newId()),b3("doc","path",e),t instanceof M0){const r=rt.fromString(e,...n);return JE(r),new Gn(t,null,new re(r))}{if(!(t instanceof Gn||t instanceof mu))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(rt.fromString(e,...n));return JE(r),new Gn(t.firestore,t instanceof mu?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new cA(this,"async_queue_retry"),this.Vu=()=>{const r=sm();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=sm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=sm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new eo;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!zu(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw pi("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=z0.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ae()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class V0 extends M0{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new eS,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new eS(e),this._firestoreClient=void 0,await e}}}function P3(t,e){const n=typeof t=="object"?t:Qv(),r=typeof t=="string"?t:e||"(default)",i=fs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=ND("firestore");o&&C3(i,...o)}return i}function AA(t){if(t._terminated)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||A3(t),t._firestoreClient}function A3(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,c,f){return new ej(a,l,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,PA(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new _3(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ea(Lt.fromBase64String(e))}catch(n){throw new ne($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ea(Lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R3=/^__.*__$/;class k3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hs(e,this.data,this.fieldMask,n,this.fieldTransforms):new xu(e,this.data,n,this.fieldTransforms)}}function kA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class B0{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new B0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Tf(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(kA(this.Cu)&&R3.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class O3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wh(e)}Qu(e,n,r,i=!1){return new B0({Cu:e,methodName:n,qu:r,path:Nt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function z3(t){const e=t._freezeSettings(),n=Wh(t._databaseId);return new O3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function x3(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);NA("Data must be an object, but it was:",s,r);const a=zA(r,s);let l,c;if(o.merge)l=new pr(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const h of o.mergeFields){const m=N3(e,h,n);if(!s.contains(m))throw new ne($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);D3(f,m)||f.push(m)}l=new pr(f),c=s.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=s.fieldTransforms;return new k3(new Wn(a),l,c)}function OA(t,e){if(xA(t=gn(t)))return NA("Unsupported field value:",e,t),zA(t,e);if(t instanceof RA)return function(r,i){if(!kA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=OA(a,i.Lu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=gn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tj(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=_t.fromDate(r);return{timestampValue:wf(i.serializer,o)}}if(r instanceof _t){const o=new _t(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wf(i.serializer,o)}}if(r instanceof F0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ea)return{bytesValue:tA(i.serializer,r._byteString)};if(r instanceof Gn){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:b0(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof $0)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return E0(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${D0(r)}`)}(t,e)}function zA(t,e){const n={};return kP(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xa(t,(r,i)=>{const o=OA(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function xA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _t||t instanceof F0||t instanceof Ea||t instanceof Gn||t instanceof RA||t instanceof $0)}function NA(t,e,n){if(!xA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=D0(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function N3(t,e,n){if((e=gn(e))instanceof j0)return e._internalPath;if(typeof e=="string")return UA(t,e);throw Tf("Field path arguments must be of type string or ",t,!1,void 0,n)}const U3=new RegExp("[~\\*/\\[\\]]");function UA(t,e,n){if(e.search(U3)>=0)throw Tf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new j0(...e.split("."))._internalPath}catch{throw Tf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Tf(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new ne($.INVALID_ARGUMENT,a+t+l)}function D3(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new M3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(MA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class M3 extends DA{data(){return super.data()}}function MA(t,e){return typeof e=="string"?UA(t,e):e instanceof j0?e._internalPath:e._delegate._internalPath}class L3{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xa(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>st(s.doubleValue));return new $0(o)}convertGeoPoint(e){return new F0(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=g0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(uu(e));default:return null}}convertTimestamp(e){const n=oo(e);return new _t(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=rt.fromString(e);Me(aA(r));const i=new cu(r.get(1),r.get(3)),o=new re(r.popFirst(5));return i.isEqual(n)||pi(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V3(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class LA extends DA{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new F3(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(MA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class F3 extends LA{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W6(t){t=pu(t,Gn);const e=pu(t.firestore,V0);return T3(AA(e),t._key).then(n=>W3(e,t,n))}class $3 extends L3{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ea(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gn(this.firestore,null,n)}}function q6(t,e,n){t=pu(t,Gn);const r=pu(t.firestore,V0),i=V3(t.converter,e,n);return B3(r,[x3(z3(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ii.none())])}function B3(t,e){return function(r,i){const o=new eo;return r.asyncQueue.enqueueAndForget(async()=>c3(await E3(r),i,o)),o.promise}(AA(t),e)}function W3(t,e,n){const r=n.docs.get(e._key),i=new $3(t);return new LA(t,i,e._key,r,new j3(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){za=i})(ka),Mr(new wr("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new V0(new V5(r.getProvider("auth-internal")),new B5(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ne($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cu(c.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Kn(wE,"4.7.3",e),Kn(wE,"4.7.3","esm2017")})();const q3={apiKey:"AIzaSyBYOWZYmTLazfaLd4dOInCNwJAUf2_gRPM",authDomain:"glimere-d0dd3.firebaseapp.com",projectId:"glimere-d0dd3",storageBucket:"glimere-d0dd3.appspot.com",messagingSenderId:"837893581028",appId:"1:837893581028:web:021fcaec887806516e24f1",measurementId:"G-VG02NLV1YS"},W0=vC(q3),VA=U5(W0),H6=new Yr,K6=P3(W0);b4(W0);VA.currentUser!=null;const H3=U.createContext(),K3=({children:t})=>{Ob(),dD(UU);const e=VA.currentUser!=null;return Ca(),U.useEffect(()=>{},[e]),ee.jsx(H3.Provider,{value:{isAuthenticated:e},children:t})},G3="/assets/Edensor-Free-7f6e85d4.otf";function Y3(){U.useEffect(()=>{[{family:"Edensor free",font:G3,style:"normal"}].forEach(e=>{var n=new FontFace(e.family,`url(${e.font})`,{style:e.style,weight:"400"});n.load().then(function(r){document.fonts.add(r)}).catch(function(r){console.log("error",r)})})})}const Q3=U.lazy(()=>it(()=>import("./AdminDashboard-f58cd0e5.js"),["assets/AdminDashboard-f58cd0e5.js","assets/Navbar-a2fcdcde.js","assets/index.esm-6f07cc89.js","assets/iconBase-28a7140d.js","assets/index.esm-bff0daf4.js","assets/useDispatch-6b2f6195.js"])),X3=U.lazy(()=>it(()=>import("./About-3fc7a52e.js"),[])),J3=U.lazy(()=>it(()=>import("./Profile-9dbf8ad5.js"),["assets/Profile-9dbf8ad5.js","assets/index.esm-b99d8952.js","assets/iconBase-28a7140d.js","assets/index.esm-ca675d4c.js","assets/transition-9d4746c7.js","assets/useDispatch-6b2f6195.js"])),Z3=U.lazy(()=>it(()=>import("./Cart-5cecf063.js"),["assets/Cart-5cecf063.js","assets/index.esm-3eb3c6c8.js","assets/iconBase-28a7140d.js","assets/CheckoutSummary-cf475ffc.js","assets/index.esm-bff0daf4.js","assets/globalPrice-2be5675c.js","assets/useDispatch-6b2f6195.js"])),e$=U.lazy(()=>it(()=>import("./Navbar-a2fcdcde.js"),["assets/Navbar-a2fcdcde.js","assets/index.esm-6f07cc89.js","assets/iconBase-28a7140d.js","assets/index.esm-bff0daf4.js","assets/useDispatch-6b2f6195.js"])),t$=U.lazy(()=>it(()=>import("./Login-f9b6829e.js"),["assets/Login-f9b6829e.js","assets/useDispatch-6b2f6195.js"])),n$=U.lazy(()=>it(()=>import("./Home-ea137095.js"),["assets/Home-ea137095.js","assets/useFetch-94808253.js","assets/index.esm-bff0daf4.js","assets/iconBase-28a7140d.js","assets/index.esm-3eb3c6c8.js","assets/globalPrice-2be5675c.js","assets/useDispatch-6b2f6195.js","assets/index.esm-ed079559.js","assets/isDesktop-1f1bc84e.js","assets/ApparelList-64fcf98c.js","assets/ApparelList-658028b4.css","assets/Home-8b6e9104.css"])),r$=U.lazy(()=>it(()=>import("./ForgotPassword-9d2c0264.js"),[])),i$=U.lazy(()=>it(()=>import("./ViewProduct-e39d2f74.js"),["assets/ViewProduct-e39d2f74.js","assets/globalPrice-2be5675c.js","assets/iconBase-28a7140d.js","assets/index.esm-bff0daf4.js","assets/index.esm-ca675d4c.js","assets/index.esm-6f07cc89.js","assets/index.esm-3eb3c6c8.js","assets/Newsletter-eab0c750.js","assets/Footer-4fe50c09.js","assets/glimerenew-4e828c82.js","assets/ApparelList-64fcf98c.js","assets/useFetch-94808253.js","assets/useDispatch-6b2f6195.js","assets/ApparelList-658028b4.css","assets/ViewProduct-5440303d.css"])),o$=U.lazy(()=>it(()=>import("./ViewBrand-2db22620.js"),[])),s$=U.lazy(()=>it(()=>import("./Orders-53dd5b37.js"),[])),a$=U.lazy(()=>it(()=>import("./Wishlist-0efb61f1.js"),[])),l$=U.lazy(()=>it(()=>import("./Search-0fb72044.js"),["assets/Search-0fb72044.js","assets/SearchList-1ba28391.js","assets/extends-4c19d496.js","assets/iconBase-28a7140d.js","assets/globalPrice-2be5675c.js","assets/useFetch-94808253.js","assets/index.esm-bff0daf4.js","assets/index.esm-3eb3c6c8.js","assets/useDispatch-6b2f6195.js","assets/index.esm-ca675d4c.js","assets/index.esm-ed079559.js"])),u$=U.lazy(()=>it(()=>import("./Footer-4fe50c09.js"),["assets/Footer-4fe50c09.js","assets/glimerenew-4e828c82.js"])),c$=U.lazy(()=>it(()=>import("./Newsletter-eab0c750.js"),[])),d$=U.lazy(()=>it(()=>import("./Checkout-0efce91b.js"),["assets/Checkout-0efce91b.js","assets/CheckoutSummary-cf475ffc.js","assets/index.esm-bff0daf4.js","assets/iconBase-28a7140d.js","assets/globalPrice-2be5675c.js","assets/index.esm-b99d8952.js"])),f$=U.lazy(()=>it(()=>import("./ViewCollection-77d02efb.js"),["assets/ViewCollection-77d02efb.js","assets/SearchList-1ba28391.js","assets/extends-4c19d496.js","assets/iconBase-28a7140d.js","assets/globalPrice-2be5675c.js","assets/useFetch-94808253.js","assets/index.esm-bff0daf4.js","assets/index.esm-3eb3c6c8.js","assets/useDispatch-6b2f6195.js","assets/index.esm-ca675d4c.js","assets/index.esm-ed079559.js"])),h$=U.lazy(()=>it(()=>import("./ViewAll-f8a35a8a.js"),[])),p$=U.lazy(()=>it(()=>import("./Market-05de32f2.js"),["assets/Market-05de32f2.js","assets/index.esm-bff0daf4.js","assets/iconBase-28a7140d.js"])),m$=U.lazy(()=>it(()=>import("./Shoppers-44041bf8.js"),["assets/Shoppers-44041bf8.js","assets/glimerenew-4e828c82.js","assets/Creators-20331c1e.js","assets/isDesktop-1f1bc84e.js","assets/extends-4c19d496.js","assets/transition-9d4746c7.js"])),g$=U.lazy(()=>it(()=>import("./Creators-20331c1e.js").then(t=>t.a),["assets/Creators-20331c1e.js","assets/isDesktop-1f1bc84e.js"])),tS=U.lazy(()=>it(()=>import("./Register-29fbc5a9.js"),[]));function y$(){const t=Ca();Y3();const n=!["/login","/creators","/"].includes(t.pathname),i=!["login","view-product"].includes(t.pathname.split("/")[1]),s=!["login","view-product","profile","creators",""].includes(t.pathname.split("/")[1]);return ee.jsx(ee.Fragment,{children:ee.jsx(U.Suspense,{fallback:ee.jsx(qx,{}),children:ee.jsxs(K3,{children:[n&&ee.jsx(e$,{}),ee.jsxs(Ez,{children:[ee.jsx(ot,{path:"/login",element:ee.jsx(t$,{})}),ee.jsx(ot,{path:"/register",element:ee.jsx(tS,{})}),ee.jsx(ot,{path:"/forgot-password",element:ee.jsx(r$,{})}),ee.jsx(ot,{path:"/shop",element:ee.jsx(n$,{})}),ee.jsx(ot,{path:"/about",element:ee.jsx(X3,{})}),ee.jsx(ot,{path:"/",element:ee.jsx(m$,{})}),ee.jsx(ot,{path:"/creators",element:ee.jsx(g$,{})}),ee.jsx(ot,{path:"/register",element:ee.jsx(tS,{})}),ee.jsx(ot,{path:"/admin",element:ee.jsx(Q3,{})}),ee.jsx(ot,{path:"/profile",element:ee.jsx(J3,{})}),ee.jsx(ot,{path:"/cart",element:ee.jsx(Z3,{})}),ee.jsx(ot,{path:"/orders",element:ee.jsx(s$,{})}),ee.jsx(ot,{path:"/wishlist",element:ee.jsx(a$,{})}),ee.jsx(ot,{path:"/view-product/:id",element:ee.jsx(i$,{})}),ee.jsx(ot,{path:"/view-Brand/:id",element:ee.jsx(o$,{})}),ee.jsx(ot,{path:"/view-collection/:id",element:ee.jsx(f$,{})}),ee.jsx(ot,{path:"/view-all/:id",element:ee.jsx(h$,{})}),ee.jsx(ot,{path:"/search",element:ee.jsx(l$,{})}),ee.jsx(ot,{path:"/checkout",element:ee.jsx(d$,{})}),ee.jsx(ot,{path:"/market",element:ee.jsx(p$,{})})]}),s&&ee.jsx(c$,{}),i&&ee.jsx(u$,{}),ee.jsx(Tg,{})]})})})}var q0="persist:",jA="persist/FLUSH",H0="persist/REHYDRATE",FA="persist/PAUSE",$A="persist/PERSIST",BA="persist/PURGE",WA="persist/REGISTER",v$=-1;function nd(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?nd=function(n){return typeof n}:nd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},nd(t)}function nS(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function _$(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?nS(n,!0).forEach(function(r){w$(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nS(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function w$(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E$(t,e,n,r){r.debug;var i=_$({},n);return t&&nd(t)==="object"&&Object.keys(t).forEach(function(o){o!=="_persist"&&e[o]===n[o]&&(i[o]=t[o])}),i}function S$(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,o="".concat(t.keyPrefix!==void 0?t.keyPrefix:q0).concat(t.key),s=t.storage,a;t.serialize===!1?a=function(I){return I}:typeof t.serialize=="function"?a=t.serialize:a=T$;var l=t.writeFailHandler||null,c={},f={},h=[],m=null,_=null,E=function(I){Object.keys(I).forEach(function(x){p(x)&&c[x]!==I[x]&&h.indexOf(x)===-1&&h.push(x)}),Object.keys(c).forEach(function(x){I[x]===void 0&&p(x)&&h.indexOf(x)===-1&&c[x]!==void 0&&h.push(x)}),m===null&&(m=setInterval(w,i)),c=I};function w(){if(h.length===0){m&&clearInterval(m),m=null;return}var b=h.shift(),I=r.reduce(function(x,C){return C.in(x,b,c)},c[b]);if(I!==void 0)try{f[b]=a(I)}catch(x){console.error("redux-persist/createPersistoid: error serializing state",x)}else delete f[b];h.length===0&&d()}function d(){Object.keys(f).forEach(function(b){c[b]===void 0&&delete f[b]}),_=s.setItem(o,a(f)).catch(g)}function p(b){return!(n&&n.indexOf(b)===-1&&b!=="_persist"||e&&e.indexOf(b)!==-1)}function g(b){l&&l(b)}var v=function(){for(;h.length!==0;)w();return _||Promise.resolve()};return{update:E,flush:v}}function T$(t){return JSON.stringify(t)}function b$(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:q0).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(s){return s}:typeof t.deserialize=="function"?i=t.deserialize:i=I$,r.getItem(n).then(function(o){if(o)try{var s={},a=i(o);return Object.keys(a).forEach(function(l){s[l]=e.reduceRight(function(c,f){return f.out(c,l,a)},i(a[l]))}),s}catch(l){throw l}else return})}function I$(t){return JSON.parse(t)}function C$(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:q0).concat(t.key);return e.removeItem(n,P$)}function P$(t){}function rS(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Hr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rS(n,!0).forEach(function(r){A$(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rS(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function A$(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R$(t,e){if(t==null)return{};var n=k$(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function k$(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var O$=5e3;function z$(t,e){var n=t.version!==void 0?t.version:v$;t.debug;var r=t.stateReconciler===void 0?E$:t.stateReconciler,i=t.getStoredState||b$,o=t.timeout!==void 0?t.timeout:O$,s=null,a=!1,l=!0,c=function(h){return h._persist.rehydrated&&s&&!l&&s.update(h),h};return function(f,h){var m=f||{},_=m._persist,E=R$(m,["_persist"]),w=E;if(h.type===$A){var d=!1,p=function(T,P){d||(h.rehydrate(t.key,T,P),d=!0)};if(o&&setTimeout(function(){!d&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},o),l=!1,s||(s=S$(t)),_)return Hr({},e(w,h),{_persist:_});if(typeof h.rehydrate!="function"||typeof h.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return h.register(t.key),i(t).then(function(C){var T=t.migrate||function(P,A){return Promise.resolve(P)};T(C,n).then(function(P){p(P)},function(P){p(void 0,P)})},function(C){p(void 0,C)}),Hr({},e(w,h),{_persist:{version:n,rehydrated:!1}})}else{if(h.type===BA)return a=!0,h.result(C$(t)),Hr({},e(w,h),{_persist:_});if(h.type===jA)return h.result(s&&s.flush()),Hr({},e(w,h),{_persist:_});if(h.type===FA)l=!0;else if(h.type===H0){if(a)return Hr({},w,{_persist:Hr({},_,{rehydrated:!0})});if(h.key===t.key){var g=e(w,h),v=h.payload,b=r!==!1&&v!==void 0?r(v,f,g,t):g,I=Hr({},b,{_persist:Hr({},_,{rehydrated:!0})});return c(I)}}}if(!_)return e(f,h);var x=e(w,h);return x===w?f:c(Hr({},x,{_persist:_}))}}var K0={},G0={};G0.__esModule=!0;G0.default=U$;function rd(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?rd=function(n){return typeof n}:rd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},rd(t)}function lm(){}var x$={getItem:lm,setItem:lm,removeItem:lm};function N$(t){if((typeof self>"u"?"undefined":rd(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function U$(t){var e="".concat(t,"Storage");return N$(e)?self[e]:x$}K0.__esModule=!0;K0.default=L$;var D$=M$(G0);function M$(t){return t&&t.__esModule?t:{default:t}}function L$(t){var e=(0,D$.default)(t);return{getItem:function(r){return new Promise(function(i,o){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(o,s){o(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(e.removeItem(r))})}}}var qA=void 0,V$=j$(K0);function j$(t){return t&&t.__esModule?t:{default:t}}var F$=(0,V$.default)("local");qA=F$;var $$=W$;function zl(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?zl=function(n){return typeof n}:zl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},zl(t)}function iS(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function oS(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?iS(n,!0).forEach(function(r){B$(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):iS(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function B$(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function W$(t,e,n,r){r.debug;var i=oS({},n);return t&&zl(t)==="object"&&Object.keys(t).forEach(function(o){if(o!=="_persist"&&e[o]===n[o]){if(q$(n[o])){i[o]=oS({},i[o],{},t[o]);return}i[o]=t[o]}}),i}function q$(t){return t!==null&&!Array.isArray(t)&&zl(t)==="object"}const id=xe("apparels/fetchApparels",async()=>{try{const t=await Ne.get(`${ze.url}/api/apparels?populate=apparel_imgs&populate=brands.logo&populate=ratings`);return console.log("response.data",t.data),t.data.data||[]}catch(t){console.log(t)}}),um=xe("apparels/addApparel",async t=>{try{return(await Ne.post(`${ze.url}/api/apparels`,t)).data||[]}catch(e){console.log(e)}}),cm=xe("apparels/deleteApparel",async t=>{try{if((await Ne.delete(`${ze.url}/api/apparels/${t}`)).data)return t}catch(e){console.log(e)}}),H$=Jn({name:"apparels",initialState:{apparels:[],status:"idle",error:null},reducers:{updateApparels:(t,e)=>{t.apparels=e.payload}},extraReducers:t=>{t.addCase(id.pending,(e,n)=>{e.status="loading"}).addCase(id.fulfilled,(e,n)=>{e.status="succeeded",e.apparels=n.payload}).addCase(id.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(um.pending,(e,n)=>{e.status="loading"}).addCase(um.fulfilled,(e,n)=>{e.status="succeeded",e.apparels=n.payload}).addCase(um.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(cm.pending,(e,n)=>{e.status="loading"}).addCase(cm.fulfilled,(e,n)=>{e.status="succeeded",e.apparels=e.apparels.filter(r=>r.id!==n.payload)}).addCase(cm.rejected,(e,n)=>{e.status="failed",e.error=n.error.message})}}),G6=t=>t.apparels.apparels,Y6=t=>t.apparels.status,Q6=t=>t.apparels.error,K$=H$.reducer,od=xe("ads/fetchAds",async()=>{try{const t=await Ne.get(`${ze.url}/api/ads-cards?populate=*`);return console.log("response.data",t.data),t.data.data||[]}catch(t){console.log(t)}}),G$=xe("ads/addAd",async t=>{try{return(await Ne.post(`${ze.url}/api/ads`,t)).data||[]}catch(e){console.log(e)}}),Y$=xe("ads/deleteAd",async t=>{try{if((await Ne.delete(`${ze.url}/api/ads/${t}`)).data)return t}catch(e){console.log(e)}}),Q$=Jn({name:"ads",initialState:{ads:[],status:"idle",error:null},reducers:{updateAds:(t,e)=>{t.ads=e.payload}},extraReducers:t=>{t.addCase(od.pending,(e,n)=>{e.status="loading"}).addCase(od.fulfilled,(e,n)=>{e.status="succeeded",e.ads=n.payload}).addCase(od.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(G$.fulfilled,(e,n)=>{e.ads.push(n.payload)}).addCase(Y$.fulfilled,(e,n)=>{const r=e.ads.findIndex(i=>i._id===n.payload);e.ads.splice(r,1)})}}),X6=t=>t.ads.ads,X$=Q$.reducer,sd=xe("carousels/fetchCarousels",async()=>{try{const t=await Ne.get(`${ze.url}/api/carousels?populate=*`);return console.log("response.data",t.data),t.data.data||[]}catch(t){console.log(t)}}),dm=xe("carousels/addCarousel",async t=>{try{return(await Ne.post(`${ze.url}/api/carousels`,t)).data||[]}catch(e){console.log(e)}}),fm=xe("carousels/deleteCarousel",async t=>{try{if((await Ne.delete(`${ze.url}/api/carousels/${t}`)).data)return t}catch(e){console.log(e)}}),J$=Jn({name:"carousels",initialState:{carousels:[],status:"idle",error:null},reducers:{updateCarousels:(t,e)=>{t.carousels=e.payload}},extraReducers:t=>{t.addCase(sd.pending,(e,n)=>{e.status="loading"}).addCase(sd.fulfilled,(e,n)=>{e.status="succeeded",e.carousels=n.payload}).addCase(sd.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(dm.pending,(e,n)=>{e.status="loading"}).addCase(dm.fulfilled,(e,n)=>{e.status="succeeded",e.carousels=n.payload}).addCase(dm.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(fm.pending,(e,n)=>{e.status="loading"}).addCase(fm.fulfilled,(e,n)=>{e.status="succeeded",e.carousels=e.carousels.filter(r=>r._id!==n.payload)}).addCase(fm.rejected,(e,n)=>{e.status="failed",e.error=n.error.message})}}),J6=t=>t.carousels.carousels,Z$=J$.reducer,hm=xe("carts/addCart",async({item:t,jwt:e})=>{try{return(await Ne.post(`${ze.url}/api/carts?populate=*`,{data:t},{headers:{Authorization:`Bearer ${e}`}})).data||[]}catch(n){console.log(n)}}),sS=xe("carts/deleteCart",async({id:t,jwt:e})=>{try{const n=await Ne.delete(`${ze.url}/api/carts/${t}`,{headers:{Authorization:`Bearer ${e}`}});if(console.log("delete request"),n.data)return t}catch(n){console.log(n)}console.log("jwt",e)}),pm=xe("carts/updateCart",async({newQuantity:t,jwt:e,itemId:n})=>{try{return(await Ne.put(`${ze.url}/api/carts/${n}?populate=*`,{data:t},{headers:{Authorization:`Bearer ${e}`}})).data||[]}catch(r){console.log(r)}}),e6={apparels:[]},t6=Jn({name:"cart",initialState:e6,reducers:{addMultipleItems:(t,e)=>{const n=e.payload.filter(r=>!t.apparels.some(i=>i.data.id===r.data.id));t.apparels.push(...n)},resetCart:t=>{t.apparels=[]}},extraReducers:t=>{t.addCase(hm.pending,(e,n)=>{e.status="loading"}).addCase(hm.fulfilled,(e,n)=>{e.status="succeeded",e.apparels.push(n.payload)}).addCase(hm.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(sS.pending,(e,n)=>{e.status="loading"}).addCase(sS.fulfilled,(e,n)=>{e.status="succeeded",e.apparels=e.apparels.filter(r=>r.data.id!==n.payload)}).addCase(pm.pending,(e,n)=>{e.status="loading"}).addCase(pm.fulfilled,(e,n)=>{e.status="succeeded";const r=e.apparels.findIndex(i=>i.data.id===n.payload.data.id);r!==-1&&(e.apparels[r]=n.payload)}).addCase(pm.rejected,(e,n)=>{e.status="failed",e.error=n.error.message})}}),Z6=t=>t.cart.apparels,n6=t6.reducer,ad=xe("brands/fetchbrands",async()=>{try{const t=await Ne.get(`${ze.url}/api/brands?populate=*`);return console.log("response.data",t.data),t.data.data||[]}catch(t){console.log(t)}}),mm=xe("brands/addBrand",async t=>{try{return(await Ne.post(`${ze.url}/api/brands`,t)).data||[]}catch(e){console.log(e)}}),gm=xe("brands/deleteBrand",async t=>{try{if((await Ne.delete(`${ze.url}/api/brands/${t}`)).data)return t}catch(e){console.log(e)}}),r6=Jn({name:"brands",initialState:{brands:[],status:"idle",error:null},reducers:{updatebrands:(t,e)=>{t.brands=e.payload}},extraReducers:t=>{t.addCase(ad.pending,(e,n)=>{e.status="loading"}).addCase(ad.fulfilled,(e,n)=>{e.status="succeeded",e.brands=n.payload}).addCase(ad.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(mm.pending,(e,n)=>{e.status="loading"}).addCase(mm.fulfilled,(e,n)=>{e.status="succeeded",e.brands=n.payload}).addCase(mm.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(gm.pending,(e,n)=>{e.status="loading"}).addCase(gm.fulfilled,(e,n)=>{e.status="succeeded",e.brands=e.brands.filter(r=>r.id!==n.payload)}).addCase(gm.rejected,(e,n)=>{e.status="failed",e.error=n.error.message})}}),e9=t=>t.brands.brands,i6=r6.reducer,ld=xe("category/fetchCategory",async()=>{try{const t=await Ne.get(`${ze.url}/api/categories?populate=*`);return console.log("response.data",t.data),t.data.data||[]}catch(t){console.log(t)}}),ym=xe("category/addApparel",async t=>{try{return(await Ne.post(`${ze.url}/api/categories`,t)).data||[]}catch(e){console.log(e)}}),vm=xe("category/deleteCategory",async t=>{try{if((await Ne.delete(`${ze.url}/api/categories/${t}`)).data)return t}catch(e){console.log(e)}}),o6=Jn({name:"category",initialState:{category:[],status:"idle",error:null},reducers:{updateCategory:(t,e)=>{t.category=e.payload}},extraReducers:t=>{t.addCase(ld.pending,(e,n)=>{e.status="loading"}).addCase(ld.fulfilled,(e,n)=>{e.status="succeeded",e.category=n.payload}).addCase(ld.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(ym.pending,(e,n)=>{e.status="loading"}).addCase(ym.fulfilled,(e,n)=>{e.status="succeeded",e.category=n.payload}).addCase(ym.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(vm.pending,(e,n)=>{e.status="loading"}).addCase(vm.fulfilled,(e,n)=>{e.status="succeeded",e.category=e.category.filter(r=>r.id!==n.payload)}).addCase(vm.rejected,(e,n)=>{e.status="failed",e.error=n.error.message})}}),t9=t=>t.category.category,s6=o6.reducer,ud=xe("subcategory/fetchSubcategory",async()=>{try{const t=await Ne.get(`${ze.url}/api/subcategories?populate=*`);return console.log("response.data",t.data),t.data.data||[]}catch(t){console.log(t)}}),_m=xe("subcategory/addApparel",async t=>{try{return(await Ne.post(`${ze.url}/api/subcategories`,t)).data||[]}catch(e){console.log(e)}}),wm=xe("subcategory/deleteApparel",async t=>{try{if((await Ne.delete(`${ze.url}/api/subcategories/${t}`)).data)return t}catch(e){console.log(e)}}),a6=Jn({name:"subcategory",initialState:{subcategory:[],status:"idle",error:null},reducers:{updateSubcategory:(t,e)=>{t.subcategory=e.payload}},extraReducers:t=>{t.addCase(ud.pending,(e,n)=>{e.status="loading"}).addCase(ud.fulfilled,(e,n)=>{e.status="succeeded",e.subcategory=n.payload}).addCase(ud.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(_m.pending,(e,n)=>{e.status="loading"}).addCase(_m.fulfilled,(e,n)=>{e.status="succeeded",e.subcategory=n.payload}).addCase(_m.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(wm.pending,(e,n)=>{e.status="loading"}).addCase(wm.fulfilled,(e,n)=>{e.status="succeeded",e.subcategory=e.subcategory.filter(r=>r.id!==n.payload)}).addCase(wm.rejected,(e,n)=>{e.status="failed",e.error=n.error.message})}}),n9=t=>t.subcategory.subcategory,l6=a6.reducer,u6={wishes:[]},HA=Jn({name:"wishlist",initialState:u6,reducers:{addWish:(t,e)=>{t.wishes.find(r=>r.id===e.payload.id)?t.wishes=t.wishes.filter(r=>r.id!==e.payload.id):t.wishes.push(e.payload)},removeWish:(t,e)=>{t.wishes=t.wishes.filter(n=>n.id!==e.payload)},resetWishlist:t=>{t.wishes=[]}}}),r9=t=>t.wishlist.wishes,{addWish:i9,removeWish:o9,resetWishlist:s9}=HA.actions,c6=HA.reducer,cd=xe("size/fetchSize",async()=>{try{const t=await Ne.get(`${ze.url}/api/sizes?populate=*`);return console.log("response.data",t.data),t.data.data||[]}catch(t){console.log(t)}}),d6=Jn({name:"size",initialState:{size:[],status:"idle",error:null},reducers:{updatesize:(t,e)=>{t.size=e.payload}},extraReducers:t=>{t.addCase(cd.pending,(e,n)=>{e.status="loading"}).addCase(cd.fulfilled,(e,n)=>{e.status="succeeded",e.size=n.payload}).addCase(cd.rejected,(e,n)=>{e.status="failed",e.error=n.error.message})}}),a9=t=>t.size.size,f6=d6.reducer,dd=xe("color/fetchColor",async()=>{try{const t=await Ne.get(`${ze.url}/api/colors?populate=*`);return console.log("response.data",t.data),t.data.data||[]}catch(t){console.log(t)}}),h6=Jn({name:"color",initialState:{color:[],status:"idle",error:null},reducers:{updatecolor:(t,e)=>{t.color=e.payload}},extraReducers:t=>{t.addCase(dd.pending,(e,n)=>{e.status="loading"}).addCase(dd.fulfilled,(e,n)=>{e.status="succeeded",e.color=n.payload}).addCase(dd.rejected,(e,n)=>{e.status="failed",e.error=n.error.message})}}),p6=h6.reducer,fd=xe("apparelType/fetchApparelType",async()=>{try{const t=await Ne.get(`${ze.url}/api/apparel-types?populate=*`);return console.log("response.data",t.data),t.data.data||[]}catch(t){console.log(t)}}),Em=xe("apparelType/addApparel",async t=>{try{return(await Ne.post(`${ze.url}/api/subcategories`,t)).data||[]}catch(e){console.log(e)}}),Sm=xe("apparelType/deleteApparel",async t=>{try{if((await Ne.delete(`${ze.url}/api/subcategories/${t}`)).data)return t}catch(e){console.log(e)}}),m6=Jn({name:"apparelType",initialState:{apparelType:[],status:"idle",error:null},reducers:{updateApparelType:(t,e)=>{t.apparelType=e.payload}},extraReducers:t=>{t.addCase(fd.pending,(e,n)=>{e.status="loading"}).addCase(fd.fulfilled,(e,n)=>{e.status="succeeded",e.apparelType=n.payload}).addCase(fd.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(Em.pending,(e,n)=>{e.status="loading"}).addCase(Em.fulfilled,(e,n)=>{e.status="succeeded",e.apparelType=n.payload}).addCase(Em.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(Sm.pending,(e,n)=>{e.status="loading"}).addCase(Sm.fulfilled,(e,n)=>{e.status="succeeded",e.apparelType=e.apparelType.filter(r=>r.id!==n.payload)}).addCase(Sm.rejected,(e,n)=>{e.status="failed",e.error=n.error.message})}}),l9=t=>t.apparelType.apparelType,g6=m6.reducer,y6=hI({apparels:K$,ads:X$,carousels:Z$,users:DU,cart:n6,brands:i6,category:s6,subcategory:l6,wishlist:c6,size:f6,color:p6,apparelType:g6});function aS(t){return w6(t)||_6(t)||v6()}function v6(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _6(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function w6(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function lS(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ly(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?lS(n,!0).forEach(function(r){E6(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lS(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function E6(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var KA={registry:[],bootstrapped:!1},S6=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:KA,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case WA:return ly({},e,{registry:[].concat(aS(e.registry),[n.key])});case H0:var r=e.registry.indexOf(n.key),i=aS(e.registry);return i.splice(r,1),ly({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function T6(t,e,n){var r=n||!1,i=Nv(S6,KA,e&&e.enhancer?e.enhancer:void 0),o=function(c){i.dispatch({type:WA,key:c})},s=function(c,f,h){var m={type:H0,payload:f,err:h,key:c};t.dispatch(m),i.dispatch(m),r&&a.getState().bootstrapped&&(r(),r=!1)},a=ly({},i,{purge:function(){var c=[];return t.dispatch({type:BA,result:function(h){c.push(h)}}),Promise.all(c)},flush:function(){var c=[];return t.dispatch({type:jA,result:function(h){c.push(h)}}),Promise.all(c)},pause:function(){t.dispatch({type:FA})},persist:function(){t.dispatch({type:$A,register:o,rehydrate:s})}});return e&&e.manualPersist||a.persist(),a}const b6={key:"root",storage:qA,stateReconciler:$$},I6=z$(b6,y6);yI({serializableCheck:!1});const lr=k2({reducer:I6,devTools:{}.NODE_ENV!=="production",middleware:[Ag]}),C6=T6(lr);function hd(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hd=function(n){return typeof n}:hd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hd(t)}function P6(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function uS(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A6(t,e,n){return e&&uS(t.prototype,e),n&&uS(t,n),t}function R6(t,e){return e&&(hd(e)==="object"||typeof e=="function")?e:pd(t)}function uy(t){return uy=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},uy(t)}function pd(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k6(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&cy(t,e)}function cy(t,e){return cy=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},cy(t,e)}function md(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var GA=function(t){k6(e,t);function e(){var n,r;P6(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=R6(this,(n=uy(e)).call.apply(n,[this].concat(o))),md(pd(r),"state",{bootstrapped:!1}),md(pd(r),"_unsubscribe",void 0),md(pd(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),c=l.bootstrapped;c&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return A6(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(U.PureComponent);md(GA,"defaultProps",{children:null,loading:null});const O6=async()=>{try{await Promise.all([lr.dispatch(id()),lr.dispatch(od()),lr.dispatch(sd()),lr.dispatch(ad()),lr.dispatch(ld()),lr.dispatch(ud()),lr.dispatch(cd()),lr.dispatch(dd()),lr.dispatch(fd())])}catch(t){console.error("Error fetching data:",t)}};O6();Tm.createRoot(document.getElementById("root")).render(ee.jsx(pe.StrictMode,{children:ee.jsx(Az,{basename:"",children:ee.jsx(CD,{store:lr,children:ee.jsx(GA,{loading:null,persistor:C6,children:ee.jsx(y$,{})})})})}));export{D6 as A,q6 as B,V6 as C,H6 as D,e9 as E,X6 as F,J6 as G,Db as H,gd as I,hm as J,vR as K,z6 as L,U6 as M,nR as N,a9 as O,Ne as P,Ke as Q,pe as R,of as S,sD as T,JI as U,dy as V,Sb as W,Ca as a,dD as b,UU as c,r9 as d,Z6 as e,ze as f,N6 as g,i9 as h,pm as i,ee as j,sS as k,L6 as l,VA as m,G6 as n,Y6 as o,Q6 as p,t9 as q,U as r,x6 as s,n9 as t,Ob as u,l9 as v,M6 as w,W6 as x,B6 as y,K6 as z};
