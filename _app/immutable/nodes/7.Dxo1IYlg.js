import{a as E,t as I}from"../chunks/disclose-version.CyaTdpPh.js";import{a4 as Be,am as S,a5 as Ce,a6 as T,a7 as Se,l as a,U as d,ar as Te,a9 as x,a8 as D,aa as w}from"../chunks/runtime.BsiJ2hp_.js";import{s as H}from"../chunks/render.BcxekYYX.js";import{e as K,i as N}from"../chunks/each.D6LsrVKI.js";import{d as De,e as Oe}from"../chunks/events.Bje-08iu.js";import{p as B}from"../chunks/proxy.iAqB3sbY.js";let Q,Re=(async()=>{function A(e,n,o){if(o){if(e.classList.contains(n))return;e.classList.add(n)}else{if(!e.classList.contains(n))return;e.classList.remove(n)}}const Y=""+new URL("../assets/wasm_modules_bg.BotWPJUb.wasm",import.meta.url).href,Z=async(e={},n)=>{let o;if(n.startsWith("data:")){const t=n.replace(/^data:.*?base64,/,"");let r;if(typeof Buffer=="function"&&typeof Buffer.from=="function")r=Buffer.from(t,"base64");else if(typeof atob=="function"){const s=atob(t);r=new Uint8Array(s.length);for(let i=0;i<s.length;i++)r[i]=s.charCodeAt(i)}else throw new Error("Cannot decode base64-encoded data URL");o=await WebAssembly.instantiate(r,e)}else{const t=await fetch(n),r=t.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&r.startsWith("application/wasm"))o=await WebAssembly.instantiateStreaming(t,e);else{const s=await t.arrayBuffer();o=await WebAssembly.instantiate(s,e)}}return o.instance.exports};let l;function $(e){l=e}const u=new Array(128).fill(void 0);u.push(void 0,null,!0,!1);function O(e){return u[e]}let y=0,U=null;function L(){return(U===null||U.byteLength===0)&&(U=new Uint8Array(l.memory.buffer)),U}const X=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let j=new X("utf-8");const ee=typeof j.encodeInto=="function"?function(e,n){return j.encodeInto(e,n)}:function(e,n){const o=j.encode(e);return n.set(o),{read:e.length,written:o.length}};function te(e,n,o){if(o===void 0){const c=j.encode(e),f=n(c.length,1)>>>0;return L().subarray(f,f+c.length).set(c),y=c.length,f}let t=e.length,r=n(t,1)>>>0;const s=L();let i=0;for(;i<t;i++){const c=e.charCodeAt(i);if(c>127)break;s[r+i]=c}if(i!==t){i!==0&&(e=e.slice(i)),r=o(r,t,t=i+e.length*3,1)>>>0;const c=L().subarray(r+i,r+t),f=ee(e,c);i+=f.written,r=o(r,t,i,1)>>>0}return y=i,r}function ne(e){return e==null}let b=null;function g(){return(b===null||b.buffer.detached===!0||b.buffer.detached===void 0&&b.buffer!==l.memory.buffer)&&(b=new DataView(l.memory.buffer)),b}let v=u.length;function oe(e){e<132||(u[e]=v,v=e)}function R(e){const n=O(e);return oe(e),n}const re=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let q=new re("utf-8",{ignoreBOM:!0,fatal:!0});q.decode();function M(e,n){return e=e>>>0,q.decode(L().subarray(e,e+n))}function P(e){v===u.length&&u.push(u.length+1);const n=v;return v=u[n],u[n]=e,n}function ae(e,n){const o=n(e.length*4,4)>>>0,t=g();for(let r=0;r<e.length;r++)t.setUint32(o+4*r,P(e[r]),!0);return y=e.length,o}function ie(e,n){e=e>>>0;const o=g(),t=[];for(let r=e;r<e+4*n;r+=4)t.push(R(o.getUint32(r,!0)));return t}function se(e){try{const t=l.__wbindgen_add_to_stack_pointer(-16),r=ae(e,l.__wbindgen_export_0),s=y;l.solve_sudoku(t,r,s);var n=g().getInt32(t+4*0,!0),o=g().getInt32(t+4*1,!0);let i;return n!==0&&(i=ie(n,o).slice(),l.__wbindgen_export_2(n,o*4,4)),i}finally{l.__wbindgen_add_to_stack_pointer(16)}}function le(e,n){const o=O(n),t=typeof o=="string"?o:void 0;var r=ne(t)?0:te(t,l.__wbindgen_export_0,l.__wbindgen_export_1),s=y;g().setInt32(e+4*1,s,!0),g().setInt32(e+4*0,r,!0)}function ce(e){R(e)}function ue(e,n){const o=M(e,n);return P(o)}function _e(e,n){throw new Error(M(e,n))}URL=globalThis.URL;const m=await Z({"./wasm_modules_bg.js":{__wbindgen_string_get:le,__wbindgen_object_drop_ref:ce,__wbindgen_string_new:ue,__wbindgen_throw:_e}},Y),fe=m.memory,de=m.solve_sudoku,be=m.__wbindgen_export_0,ge=m.__wbindgen_export_1,me=m.__wbindgen_add_to_stack_pointer,pe=m.__wbindgen_export_2,we=Object.freeze(Object.defineProperty({__proto__:null,__wbindgen_add_to_stack_pointer:me,__wbindgen_export_0:be,__wbindgen_export_1:ge,__wbindgen_export_2:pe,memory:fe,solve_sudoku:de},Symbol.toStringTag,{value:"Module"}));$(we);var ye=(e,n)=>n(),ve=(e,n)=>n(),he=(e,n,o,t)=>n(o*9+t),ke=I('<div class="cell svelte-ijg63u"><div style="margin: auto;"> </div></div>'),xe=I('<div class="row svelte-ijg63u"></div>'),Ae=I('<div style="margin-bottom: 15px; text-align: center;"><button class="svelte-ijg63u">Solve</button> <button class="svelte-ijg63u">Clear</button></div> <!> <div style="min-height: 30px; margin-top: 25px; text-align: center;"> </div>',1);function Ue(e,n){Be(n,!0);let o=S(B(Array(81).fill(""))),t=S(null),r=S("");function s(_){switch(console.log(_.key),console.log(a(t)),_.key){case"Escape":d(t,null);break;case"1":a(t)!=null&&(a(o)[a(t)]="1");break;case"2":a(t)!=null&&(a(o)[a(t)]="2");break;case"3":a(t)!=null&&(a(o)[a(t)]="3");break;case"4":a(t)!=null&&(a(o)[a(t)]="4");break;case"5":a(t)!=null&&(a(o)[a(t)]="5");break;case"6":a(t)!=null&&(a(o)[a(t)]="6");break;case"7":a(t)!=null&&(a(o)[a(t)]="7");break;case"8":a(t)!=null&&(a(o)[a(t)]="8");break;case"9":a(t)!=null&&(a(o)[a(t)]="9");break}}function i(_){d(t,B(_))}function c(){let _=se(a(o));_==null?d(r,"Invalid board!"):d(o,B(_))}function f(){d(o,B(Array(81).fill(""))),d(t,null),d(r,"")}var z=Ae();Oe("keydown",Te,s);var C=Ce(z),J=x(C);J.__click=[ye,c];var je=D(J,2);je.__click=[ve,f],w(C);var V=D(C,2);K(V,16,()=>[0,1,2,3,4,5,6,7,8],N,(_,h)=>{var k=xe();K(k,20,()=>[0,1,2,3,4,5,6,7,8],N,(Ee,W)=>{var p=ke();p.__click=[he,i,h,W];var G=x(p),Ie=x(G,!0);w(G),w(p),T(()=>{A(p,"selected",a(t)==h*9+W),A(p,"left",W%3==0),H(Ie,a(o)[h*9+W])}),E(Ee,p)}),w(k),T(()=>{A(k,"top",h%3==0),A(k,"bottom",h==8)}),E(_,k)});var F=D(V,2),We=x(F,!0);w(F),T(()=>H(We,a(r))),E(e,z),Se()}De(["click"]);var Le=I('<div style="margin: auto;"><!></div>');Q=function(e){var n=Le(),o=x(n);Ue(o,{}),w(n),E(e,n)}})();export{Re as __tla,Q as component};
