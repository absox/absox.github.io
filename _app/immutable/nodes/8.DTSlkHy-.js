import{a as b,t as k}from"../chunks/disclose-version.6CFbjw_q.js";import{a4 as V,an as y,a5 as W,a6 as g,a7 as X,g as a,U as s,ao as Y,a9 as m,a8 as x,aa as i}from"../chunks/runtime.CihvSwKW.js";import{s as P}from"../chunks/render.BEDXsWtL.js";import{e as S,i as U}from"../chunks/each.Cy79V0VW.js";import{d as Z,e as $}from"../chunks/events.Bnxny7e1.js";import{s as G,t as f,__tla as aa}from"../chunks/wasm_modules.DDewio7Z.js";import{p}from"../chunks/proxy.DzkL99CH.js";let j,la=Promise.all([(()=>{try{return aa}catch{}})()]).then(async()=>{var q=(o,t)=>t(),z=(o,t)=>t(),B=(o,t,e,l)=>t(e*9+l),D=k('<div class="cell svelte-1miorb0"><div style="margin: auto;"> </div></div>'),F=k('<div class="row svelte-1miorb0"></div>'),H=k('<div style="margin-bottom: 15px; text-align: center;"><button class="svelte-1miorb0">Solve</button> <button class="svelte-1miorb0">Clear</button></div> <!> <div style="min-height: 30px; margin-top: 25px; text-align: center;"> </div>',1);function I(o,t){V(t,!0);let e=y(p(Array(81).fill(""))),l=y(null),d=y("");function K(r){switch(console.log(r.key),console.log(a(l)),r.key){case"Escape":s(l,null);break;case"1":a(l)!=null&&(a(e)[a(l)]="1");break;case"2":a(l)!=null&&(a(e)[a(l)]="2");break;case"3":a(l)!=null&&(a(e)[a(l)]="3");break;case"4":a(l)!=null&&(a(e)[a(l)]="4");break;case"5":a(l)!=null&&(a(e)[a(l)]="5");break;case"6":a(l)!=null&&(a(e)[a(l)]="6");break;case"7":a(l)!=null&&(a(e)[a(l)]="7");break;case"8":a(l)!=null&&(a(e)[a(l)]="8");break;case"9":a(l)!=null&&(a(e)[a(l)]="9");break}}function L(r){s(l,p(r))}function M(){let r=G(a(e));r==null?s(d,"Invalid board!"):s(e,p(r)),s(l,null)}function N(){s(e,p(Array(81).fill(""))),s(l,null),s(d,"")}var h=H();$("keydown",Y,K);var _=W(h),w=m(_);w.__click=[q,M];var O=x(w,2);O.__click=[z,N],i(_);var A=x(_,2);S(A,16,()=>[0,1,2,3,4,5,6,7,8],U,(r,c)=>{var v=F();S(v,20,()=>[0,1,2,3,4,5,6,7,8],U,(R,u)=>{var n=D();n.__click=[B,L,c,u];var E=m(n),T=m(E,!0);i(E),i(n),g(()=>{f(n,"selected",a(l)==c*9+u),f(n,"left",u%3==0),P(T,a(e)[c*9+u])}),b(R,n)}),i(v),g(()=>{f(v,"top",c%3==0),f(v,"bottom",c==8)}),b(r,v)});var C=x(A,2),Q=m(C,!0);i(C),g(()=>P(Q,a(d))),b(o,h),X()}Z(["click"]);var J=k('<div style="margin: auto;"><!></div>');j=function(o){var t=J(),e=m(t);I(e,{}),i(t),b(o,t)}});export{la as __tla,j as component};