import{S as L,z as q,A as K,B as y,C as Z,D as b,U as l,E as T,g,F as x,G as j,I as z,J as G,K as V,L as $,M as H,R as J,N as C,P as Q,b as F,f as M,O as W,Q as X,T as k,V as p,W as ee,X as re,Y as te,Z as ne,_ as ae}from"./runtime.BtFSYBC5.js";import{c as fe}from"./store.DCLenFJZ.js";function h(f,v=null,o){if(typeof f!="object"||f===null||L in f)return f;const P=z(f);if(P!==q&&P!==K)return f;var i=new Map,c=G(f),R=y(0);c&&i.set("length",y(f.length));var I;return new Proxy(f,{defineProperty(a,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&Z();var t=i.get(e);return t===void 0?(t=y(r.value),i.set(e,t)):b(t,h(r.value,I)),!0},deleteProperty(a,e){var r=i.get(e);if(r===void 0)e in a&&i.set(e,y(l));else{if(c&&typeof e=="string"){var t=i.get("length"),n=Number(e);Number.isInteger(n)&&n<t.v&&b(t,n)}b(r,l),U(R)}return!0},get(a,e,r){var d;if(e===L)return f;var t=i.get(e),n=e in a;if(t===void 0&&(!n||(d=T(a,e))!=null&&d.writable)&&(t=y(h(n?a[e]:l,I)),i.set(e,t)),t!==void 0){var u=g(t);return u===l?void 0:u}return Reflect.get(a,e,r)},getOwnPropertyDescriptor(a,e){var r=Reflect.getOwnPropertyDescriptor(a,e);if(r&&"value"in r){var t=i.get(e);t&&(r.value=g(t))}else if(r===void 0){var n=i.get(e),u=n==null?void 0:n.v;if(n!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(a,e){var u;if(e===L)return!0;var r=i.get(e),t=r!==void 0&&r.v!==l||Reflect.has(a,e);if(r!==void 0||x!==null&&(!t||(u=T(a,e))!=null&&u.writable)){r===void 0&&(r=y(t?h(a[e],I):l),i.set(e,r));var n=g(r);if(n===l)return!1}return t},set(a,e,r,t){var O;var n=i.get(e),u=e in a;if(c&&e==="length")for(var d=r;d<n.v;d+=1){var _=i.get(d+"");_!==void 0?b(_,l):d in a&&(_=y(l),i.set(d+"",_))}n===void 0?(!u||(O=T(a,e))!=null&&O.writable)&&(n=y(void 0),b(n,h(r,I)),i.set(e,n)):(u=n.v!==l,b(n,h(r,I)));var m=Reflect.getOwnPropertyDescriptor(a,e);if(m!=null&&m.set&&m.set.call(t,r),!u){if(c&&typeof e=="string"){var N=i.get("length"),w=Number(e);Number.isInteger(w)&&w>=N.v&&b(N,w+1)}U(R)}return!0},ownKeys(a){g(R);var e=Reflect.ownKeys(a).filter(n=>{var u=i.get(n);return u===void 0||u.v!==l});for(var[r,t]of i)t.v!==l&&!(r in a)&&e.push(r);return e},setPrototypeOf(){j()}})}function U(f,v=1){b(f,f.v+v)}function Y(f){for(var v=x,o=x;v!==null&&!(v.f&(H|J));)v=v.parent;try{return C(v),f()}finally{C(o)}}function se(f,v,o,P){var B;var i=(o&re)!==0,c=(o&Q)!==0,R=(o&te)!==0,I=(o&ne)!==0,a=!1,e;R?[e,a]=fe(()=>f[v]):e=f[v];var r=(B=T(f,v))==null?void 0:B.set,t=P,n=!0,u=!1,d=()=>(u=!0,n&&(n=!1,I?t=F(P):t=P),t);e===void 0&&P!==void 0&&(r&&c&&V(),e=d(),r&&r(e));var _;if(c)_=()=>{var s=f[v];return s===void 0?d():(n=!0,u=!1,s)};else{var m=Y(()=>(i?M:W)(()=>f[v]));m.f|=$,_=()=>{var s=g(m);return s!==void 0&&(t=void 0),s===void 0?t:s}}if(!(o&X))return _;if(r){var N=f.$$legacy;return function(s,E){return arguments.length>0?((!c||!E||N||a)&&r(E?_():s),s):_()}}var w=!1,O=!1,A=ae(e),S=Y(()=>M(()=>{var s=_(),E=g(A),D=k;return w||s===void 0&&D.f&p?(w=!1,O=!0,E):(O=!1,A.v=s)}));return i||(S.equals=ee),function(s,E){if(arguments.length>0){const D=E?g(S):c&&R?h(s):s;return S.equals(D)||(w=!0,b(A,D),u&&t!==void 0&&(t=D),F(()=>g(S))),s}return g(S)}}export{h as a,se as p};
