import{S as y,Q as N,R as j,F as f,T as S,U as g,V as P,W as l,g as w,y as A,X as E,Y as F,v as I}from"./runtime.CihvSwKW.js";function s(o,R=null,M){if(typeof o!="object"||o===null||y in o)return o;const O=F(o);if(O!==N&&O!==j)return o;var v=new Map,p=I(o),h=f(0);p&&v.set("length",f(o.length));var d;return new Proxy(o,{defineProperty(i,r,e){(!("value"in e)||e.configurable===!1||e.enumerable===!1||e.writable===!1)&&S();var t=v.get(r);return t===void 0?(t=f(e.value),v.set(r,t)):g(t,s(e.value,d)),!0},deleteProperty(i,r){var e=v.get(r);if(e===void 0)r in i&&v.set(r,f(l));else{if(p&&typeof r=="string"){var t=v.get("length"),a=Number(r);Number.isInteger(a)&&a<t.v&&g(t,a)}g(e,l),K(h)}return!0},get(i,r,e){var u;if(r===y)return o;var t=v.get(r),a=r in i;if(t===void 0&&(!a||(u=P(i,r))!=null&&u.writable)&&(t=f(s(a?i[r]:l,d)),v.set(r,t)),t!==void 0){var n=w(t);return n===l?void 0:n}return Reflect.get(i,r,e)},getOwnPropertyDescriptor(i,r){var e=Reflect.getOwnPropertyDescriptor(i,r);if(e&&"value"in e){var t=v.get(r);t&&(e.value=w(t))}else if(e===void 0){var a=v.get(r),n=a==null?void 0:a.v;if(a!==void 0&&n!==l)return{enumerable:!0,configurable:!0,value:n,writable:!0}}return e},has(i,r){var n;if(r===y)return!0;var e=v.get(r),t=e!==void 0&&e.v!==l||Reflect.has(i,r);if(e!==void 0||A!==null&&(!t||(n=P(i,r))!=null&&n.writable)){e===void 0&&(e=f(t?s(i[r],d):l),v.set(r,e));var a=w(e);if(a===l)return!1}return t},set(i,r,e,t){var x;var a=v.get(r),n=r in i;if(p&&r==="length")for(var u=e;u<a.v;u+=1){var c=v.get(u+"");c!==void 0?g(c,l):u in i&&(c=f(l),v.set(u+"",c))}a===void 0?(!n||(x=P(i,r))!=null&&x.writable)&&(a=f(void 0),g(a,s(e,d)),v.set(r,a)):(n=a.v!==l,g(a,s(e,d)));var b=Reflect.getOwnPropertyDescriptor(i,r);if(b!=null&&b.set&&b.set.call(t,e),!n){if(p&&typeof r=="string"){var D=v.get("length"),m=Number(r);Number.isInteger(m)&&m>=D.v&&g(D,m+1)}K(h)}return!0},ownKeys(i){w(h);var r=Reflect.ownKeys(i).filter(a=>{var n=v.get(a);return n===void 0||n.v!==l});for(var[e,t]of v)t.v!==l&&!(e in i)&&r.push(e);return r},setPrototypeOf(){E()}})}function K(o,R=1){g(o,o.v+R)}export{s as p};