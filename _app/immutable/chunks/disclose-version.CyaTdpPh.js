import{M as i,an as _,ao as w,h as u,f as o,q as d,y as c,a as h,s as y}from"./runtime.BsiJ2hp_.js";function f(t){var n=document.createElement("template");return n.innerHTML=t,n.content}function r(t,n){var e=c;e.nodes_start===null&&(e.nodes_start=t,e.nodes_end=n)}function b(t,n){var e=(n&_)!==0,l=(n&w)!==0,a,m=!t.startsWith("<!>");return()=>{if(u)return r(o,null),o;a===void 0&&(a=f(m?t:"<!>"+t),e||(a=i(a)));var s=l?document.importNode(a,!0):a.cloneNode(!0);if(e){var v=i(s),p=s.lastChild;r(v,p)}else r(s,s);return s}}function M(t=""){if(!u){var n=d(t+"");return r(n,n),n}var e=o;return e.nodeType!==3&&(e.before(e=d()),y(e)),r(e,e),e}function N(){if(u)return r(o,null),o;var t=document.createDocumentFragment(),n=document.createComment(""),e=d();return t.append(n,e),r(n,e),t}function T(t,n){if(u){c.nodes_end=o,h();return}t!==null&&t.before(n)}const x="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(x);export{T as a,r as b,f as c,N as d,M as e,b as t};
