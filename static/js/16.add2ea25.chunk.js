(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[16,37],{102:function(e,t,n){"use strict";var r=n(81),a=n(0),i={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),o=n[0],c=n[1];return Object(a.useEffect)((function(){e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(c(!0),n.unobserve(e.current))}))}),i).observe(e.current)}),[e]),o}},165:function(e,t,n){"use strict";var r=n(0),a=n(89),i=function(){};t.a=function(e,t,n){if(!a.a)return[t,i,i];if(!e)throw new Error("useLocalStorage key may not be falsy");var o=n?n.raw?function(e){return e}:n.deserializer:JSON.parse,c=Object(r.useState)((function(){try{var r=n?n.raw?String:n.serializer:JSON.stringify,a=localStorage.getItem(e);return null!==a?o(a):(t&&localStorage.setItem(e,r(t)),t)}catch(c){return t}})),u=c[0],l=c[1],f=Object(r.useCallback)((function(t){try{var r="function"===typeof t?t(u):t;if("undefined"===typeof r)return;var a=void 0;a=n?n.raw?"string"===typeof r?r:JSON.stringify(r):n.serializer?n.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,a),l(o(a))}catch(c){}}),[e,l]),s=Object(r.useCallback)((function(){try{localStorage.removeItem(e),l(void 0)}catch(c){}}),[e,l]);return[u,f,s]}},199:function(e,t,n){"use strict";var r=n(0);t.a=function(e,t){var n=function(){var e=Object(r.useRef)(!0);return e.current?(e.current=!1,!0):e.current}();Object(r.useEffect)((function(){if(!n)return e()}),t)}},249:function(e,t,n){"use strict";n.r(t);var r=n(81),a=n(7),i=n(102),o=n(32),c=n(52),u=n(92),l=n(0),f=n.n(l),s=n(199),d=n(107);var b=function(e,t,n){for(var a=Object(l.useState)(n),i=Object(r.a)(a,2),f=i[0],b=i[1],p=arguments.length,h=new Array(p>3?p-3:0),v=3;v<p;v++)h[v-3]=arguments[v];var m=d.a.apply(void 0,[e,t,f].concat(h)),y=m.data,O=m.isValidating,g=m.error,j=Object(c.a)(m,["data","isValidating","error"]);return Object(s.a)((function(){b(Object(u.a)(f,(function(e){e.initialData=y})))}),[y]),Object(o.a)(Object(o.a)({},j),{},{isValidating:O,error:g,data:y})},p=n(31),h=n(82),v=n.n(h),m=n(113),y=n(5),O=n(165),g=n(213),j=n(243),P=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,197))})),E=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,246))})),S=Object(l.lazy)((function(){return Promise.all([n.e(21),n.e(30)]).then(n.bind(null,252))})),w=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,242))})),A=Object(l.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(25)]).then(n.bind(null,177))})),k=Object(l.lazy)((function(){return n.e(22).then(n.bind(null,108))})),x=Object(l.lazy)((function(){return n.e(34).then(n.bind(null,237))})),T=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,137))})),z=Object(l.lazy)((function(){return n.e(23).then(n.bind(null,138))})),N=Object(l.lazy)((function(){return n.e(26).then(n.bind(null,146))}));t.default=function(){var e,t,n=Object(l.useState)({stateCode:"TT",districtName:null}),o=Object(r.a)(n,2),c=o[0],u=o[1],s=Object(O.a)("anchor",null),d=Object(r.a)(s,2),h=d[0],I=d[1],D=Object(O.a)("expandTable",!1),C=Object(r.a)(D,2),M=C[0],R=C[1],F=Object(g.a)("mapStatistic","active"),_=Object(r.a)(F,2),H=_[0],J=_[1],K=Object(l.useState)(""),W=Object(r.a)(K,2),U=W[0],V=W[1],$=Object(y.h)(),L=b("".concat(a.a,"/timeseries.min.json"),p.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,X=b("".concat(a.a,"/data").concat(U?"-".concat(U):"",".min.json"),p.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,q=Object(l.useRef)(),B=Object(i.a)(q),G=Object(j.a)().width;return f.a.createElement(f.a.Fragment,null,f.a.createElement(m.a,null,f.a.createElement("title",null,"Coronavirus Outbreak in India - covid19india.org"),f.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})),f.a.createElement("div",{className:"Home"},f.a.createElement("div",{className:v()("home-left",{expanded:M})},f.a.createElement("div",{className:"header"},f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(x,null)),L&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",{style:{minHeight:"56px"}})},f.a.createElement(S,{setDate:V,dates:Object.keys(null===(e=L.TT)||void 0===e?void 0:e.dates).reverse(),date:U}))),f.a.createElement("div",{style:{position:"relative",marginTop:"1rem"}},X&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",{style:{height:"50rem"}})},G>769&&f.a.createElement(z,{mapStatistic:H,setMapStatistic:J}),f.a.createElement(T,{data:X.TT})),L&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",{style:{height:"50rem"}})},f.a.createElement(A,Object.assign({timeseries:null===(t=L.TT)||void 0===t?void 0:t.dates},{date:U})))),X&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(w,{data:X,regionHighlighted:c,setRegionHighlighted:u,expandTable:M,setExpandTable:R}))),f.a.createElement("div",{className:v()("home-right",{expanded:M}),ref:q},(B||$.hash)&&f.a.createElement(f.a.Fragment,null,X&&f.a.createElement("div",{className:v()("map-container",{expanded:M})},f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",{style:{height:"50rem"}})},f.a.createElement(N,{data:X.TT,stateCode:"TT"}),f.a.createElement(E,Object.assign({stateCode:"TT"},{data:X},{mapStatistic:H,setMapStatistic:J},{regionHighlighted:c,setRegionHighlighted:u},{anchor:h,setAnchor:I},{expandTable:M})))),L&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(P,Object.assign({stateCode:"TT"},{timeseries:L,date:U,regionHighlighted:c,setRegionHighlighted:u,anchor:h,setAnchor:I,expandTable:M})))))),B&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(k,null)))}},92:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function a(e){return!!e&&!!e[V]}function i(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[U]||!!e.constructor[U]||d(e)||b(e))}function o(e,t,n){void 0===n&&(n=!1),0===c(e)?(n?Object.keys:$)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function c(e){var t=e[V];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:d(e)?2:b(e)?3:0}function u(e,t){return 2===c(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function l(e,t){return 2===c(e)?e.get(t):e[t]}function f(e,t,n){var r=c(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function s(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){return H&&e instanceof Map}function b(e){return J&&e instanceof Set}function p(e){return e.o||e.t}function h(e){if(Array.isArray(e))return e.slice();var t=L(e);delete t[V];for(var n=$(t),r=0;r<n.length;r++){var a=n[r],i=t[a];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[a]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[a]})}return Object.create(Object.getPrototypeOf(e),t)}function v(e,t){y(e)||a(e)||!i(e)||(c(e)>1&&(e.set=e.add=e.clear=e.delete=m),Object.freeze(e),t&&o(e,(function(e,t){return v(t,!0)}),!0))}function m(){r(2)}function y(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function O(e){var t=X[e];return t||r(19,e),t}function g(){return F}function j(e,t){t&&(O("Patches"),e.u=[],e.s=[],e.v=t)}function P(e){E(e),e.p.forEach(w),e.p=null}function E(e){e===F&&(F=e.l)}function S(e){return F={p:[],l:F,h:e,m:!0,_:0}}function w(e){var t=e[V];0===t.i||1===t.i?t.j():t.g=!0}function A(e,t){t._=t.p.length;var n=t.p[0],a=void 0!==e&&e!==n;return t.h.O||O("ES5").S(t,e,a),a?(n[V].P&&(P(t),r(4)),i(e)&&(e=k(t,e),t.l||T(t,e)),t.u&&O("Patches").M(n[V],e,t.u,t.s)):e=k(t,n,[]),P(t),t.u&&t.v(t.u,t.s),e!==W?e:void 0}function k(e,t,n){if(y(t))return t;var r=t[V];if(!r)return o(t,(function(a,i){return x(e,r,t,a,i,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return T(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var a=4===r.i||5===r.i?r.o=h(r.k):r.o;o(a,(function(t,i){return x(e,r,a,t,i,n)})),T(e,a,!1),n&&e.u&&O("Patches").R(r,n,e.u,e.s)}return r.o}function x(e,t,n,r,o,c){if(a(o)){var l=k(e,o,c&&t&&3!==t.i&&!u(t.D,r)?c.concat(r):void 0);if(f(n,r,l),!a(l))return;e.m=!1}if(i(o)&&!y(o)){if(!e.h.N&&e._<1)return;k(e,o),t&&t.A.l||T(e,o)}}function T(e,t,n){void 0===n&&(n=!1),e.h.N&&e.m&&v(t,n)}function z(e,t){var n=e[V];return(n?p(n):e)[t]}function N(e){e.P||(e.P=!0,e.l&&N(e.l))}function I(e){e.o||(e.o=h(e.t))}function D(e,t,n){var r=d(t)?O("MapSet").T(t,n):b(t)?O("MapSet").F(t,n):e.O?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:g(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},a=r,i=q;n&&(a=[r],i=B);var o=Proxy.revocable(a,i),c=o.revoke,u=o.proxy;return r.k=u,r.j=c,u}(t,n):O("ES5").J(t,n);return(n?n.A:g()).p.push(r),r}function C(e){return a(e)||r(22,e),function e(t){if(!i(t))return t;var n,r=t[V],a=c(t);if(r){if(!r.P&&(r.i<4||!O("ES5").K(r)))return r.t;r.I=!0,n=M(t,a),r.I=!1}else n=M(t,a);return o(n,(function(t,a){r&&l(r.t,t)===a||f(n,t,e(a))})),3===a?new Set(n):n}(e)}function M(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return h(e)}var R,F,_="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),H="undefined"!=typeof Map,J="undefined"!=typeof Set,K="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,W=_?Symbol("immer-nothing"):((R={})["immer-nothing"]=!0,R),U=_?Symbol("immer-draftable"):"__$immer_draftable",V=_?Symbol("immer-state"):"__$immer_state",$=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),L=Object.getOwnPropertyDescriptors||function(e){var t={};return $(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},X={},q={get:function(e,t){if(t===V)return e;var n=p(e);if(!u(n,t))return function(e,t,n){if(n in t)for(var r=Object.getPrototypeOf(t);r;){var a,i=Object.getOwnPropertyDescriptor(r,n);if(i)return"value"in i?i.value:null===(a=i.get)||void 0===a?void 0:a.call(e.k);r=Object.getPrototypeOf(r)}}(e,n,t);var r=n[t];return e.I||!i(r)?r:r===z(e.t,t)?(I(e),e.o[t]=D(e.A.h,r,e)):r},has:function(e,t){return t in p(e)},ownKeys:function(e){return Reflect.ownKeys(p(e))},set:function(e,t,n){if(e.D[t]=!0,!e.P){if(s(n,z(p(e),t))&&void 0!==n)return!0;I(e),N(e)}return e.o[t]=n,!0},deleteProperty:function(e,t){return void 0!==z(e.t,t)||t in e.t?(e.D[t]=!1,I(e),N(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=p(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},B={};o(q,(function(e,t){B[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),B.deleteProperty=function(e,t){return q.deleteProperty.call(this,e[0],t)},B.set=function(e,t,n){return q.set.call(this,e[0],t,n,e[0])};var G=new(function(){function e(e){this.O=K,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,n){if("function"==typeof e&&"function"!=typeof t){var a=t;t=e;var o=this;return function(e){var n=this;void 0===e&&(e=a);for(var r=arguments.length,i=Array(r>1?r-1:0),c=1;c<r;c++)i[c-1]=arguments[c];return o.produce(e,(function(e){var r;return(r=t).call.apply(r,[n,e].concat(i))}))}}var c;if("function"!=typeof t&&r(6),void 0!==n&&"function"!=typeof n&&r(7),i(e)){var u=S(this),l=D(this,e,void 0),f=!0;try{c=t(l),f=!1}finally{f?P(u):E(u)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(e){return j(u,n),A(e,u)}),(function(e){throw P(u),e})):(j(u,n),A(c,u))}if(!e||"object"!=typeof e){if((c=t(e))===W)return;return void 0===c&&(c=e),this.N&&v(c,!0),c}r(21,e)},t.produceWithPatches=function(e,t){var n,r,a=this;return"function"==typeof e?function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return a.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(r))}))}:[this.produce(e,t,(function(e,t){n=e,r=t})),n,r]},t.createDraft=function(e){i(e)||r(8),a(e)&&(e=C(e));var t=S(this),n=D(this,e,void 0);return n[V].C=!0,E(t),n},t.finishDraft=function(e,t){var n=(e&&e[V]).A;return j(n,t),A(void 0,n)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){e&&!K&&r(20),this.O=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var i=O("Patches").$;return a(e)?i(e,t):this.produce(e,(function(e){return i(e,t.slice(n+1))}))},e}()),Q=G.produce;G.produceWithPatches.bind(G),G.setAutoFreeze.bind(G),G.setUseProxies.bind(G),G.applyPatches.bind(G),G.createDraft.bind(G),G.finishDraft.bind(G);t.a=Q}}]);
//# sourceMappingURL=16.add2ea25.chunk.js.map