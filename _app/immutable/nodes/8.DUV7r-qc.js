import{a as f,t as b}from"../chunks/disclose-version.6CFbjw_q.js";import{a4 as V,an as y,a5 as W,a6 as g,a7 as X,g as a,U as s,ao as Y,a9 as u,a8 as x,aa as i}from"../chunks/runtime.CihvSwKW.js";import{s as E}from"../chunks/render.BEDXsWtL.js";import{e as P,i as S}from"../chunks/each.Cy79V0VW.js";import{d as Z,e as $}from"../chunks/events.Bnxny7e1.js";import{a as G,t as d,__tla as aa}from"../chunks/wasm_modules.DYQbvyVi.js";import{p as k}from"../chunks/proxy.DzkL99CH.js";let U,la=Promise.all([(()=>{try{return aa}catch{}})()]).then(async()=>{var q=(n,t)=>t(),z=(n,t)=>t(),B=(n,t,e,l)=>t(e*9+l),D=b('<div class="cell svelte-1j7adfc"><div style="margin: auto;"> </div></div>'),F=b('<div class="row svelte-1j7adfc"></div>'),H=b('<div style="margin-bottom: 15px; text-align: center;"><button class="svelte-1j7adfc">Solve</button> <button class="svelte-1j7adfc">Clear</button></div> <!> <div style="min-height: 30px; margin-top: 25px; text-align: center;"> </div>',1);function I(n,t){V(t,!0);let e=y(k(Array(81).fill(""))),l=y(null),p=y("");function K(r){switch(console.log(r.key),console.log(a(l)),r.key){case"Escape":s(l,null);break;case"1":a(l)!=null&&(a(e)[a(l)]="1");break;case"2":a(l)!=null&&(a(e)[a(l)]="2");break;case"3":a(l)!=null&&(a(e)[a(l)]="3");break;case"4":a(l)!=null&&(a(e)[a(l)]="4");break;case"5":a(l)!=null&&(a(e)[a(l)]="5");break;case"6":a(l)!=null&&(a(e)[a(l)]="6");break;case"7":a(l)!=null&&(a(e)[a(l)]="7");break;case"8":a(l)!=null&&(a(e)[a(l)]="8");break;case"9":a(l)!=null&&(a(e)[a(l)]="9");break}}function L(r){s(l,k(r))}function M(){let r=G(a(e));r==null?s(p,"Invalid board!"):s(e,k(r))}function N(){s(e,k(Array(81).fill(""))),s(l,null),s(p,"")}var h=H();$("keydown",Y,K);var _=W(h),j=u(_);j.__click=[q,M];var O=x(j,2);O.__click=[z,N],i(_);var w=x(_,2);P(w,16,()=>[0,1,2,3,4,5,6,7,8],S,(r,c)=>{var v=F();P(v,20,()=>[0,1,2,3,4,5,6,7,8],S,(R,m)=>{var o=D();o.__click=[B,L,c,m];var C=u(o),T=u(C,!0);i(C),i(o),g(()=>{d(o,"selected",a(l)==c*9+m),d(o,"left",m%3==0),E(T,a(e)[c*9+m])}),f(R,o)}),i(v),g(()=>{d(v,"top",c%3==0),d(v,"bottom",c==8)}),f(r,v)});var A=x(w,2),Q=u(A,!0);i(A),g(()=>E(Q,a(p))),f(n,h),X()}Z(["click"]);var J=b('<div style="margin: auto;"><!></div>');U=function(n){var t=J(),e=u(t);I(e,{}),i(t),f(n,t)}});export{la as __tla,U as component};