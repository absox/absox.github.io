import{ab as c,j as t,$ as b,D as a,l,U as f}from"./runtime.BsiJ2hp_.js";function v(s,r,e){if(s==null)return r(void 0),c;const u=t(()=>s.subscribe(r,e));return u.unsubscribe?()=>u.unsubscribe():u}let n=!1;function d(s,r,e){const u=e[r]??(e[r]={store:null,source:a(void 0),unsubscribe:c});if(u.store!==s)if(u.unsubscribe(),u.store=s??null,s==null)u.source.v=void 0,u.unsubscribe=c;else{var o=!0;u.unsubscribe=v(s,i=>{o?u.source.v=i:f(u.source,i)}),o=!1}return l(u.source)}function p(){const s={};return b(()=>{for(var r in s)s[r].unsubscribe()}),s}function m(s){var r=n;try{return n=!1,[s(),n]}finally{n=r}}export{d as a,m as c,p as s};