var at=Array.isArray,ut=Array.from,ot=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,xn=Object.getOwnPropertyDescriptors,ft=Object.prototype,it=Array.prototype,bn=Object.getPrototypeOf;const st=()=>{};function ct(n){return n()}function rn(n){for(var t=0;t<n.length;t++)n[t]()}const b=2,mn=4,B=8,ln=16,_=32,F=64,O=128,Q=256,d=512,E=1024,G=2048,A=4096,D=8192,vt=16384,en=32768,pt=65536,En=1<<18,jn=1<<19,an=Symbol("$state"),dt=Symbol("");function qn(n){return n===this.v}function Tn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function un(n){return!Tn(n,this.v)}function ht(n){throw new Error("effect_in_teardown")}function yt(){throw new Error("effect_in_unowned_derived")}function _t(n){throw new Error("effect_orphan")}function wt(){throw new Error("effect_update_depth_exceeded")}function gt(){throw new Error("hydration_failed")}function xt(n){throw new Error("props_invalid_value")}function bt(){throw new Error("state_descriptors_fixed")}function mt(){throw new Error("state_prototype_fixed")}function Et(){throw new Error("state_unsafe_local_read")}function jt(){throw new Error("state_unsafe_mutation")}function R(n){return{f:0,v:n,reactions:null,equals:qn,version:0}}function qt(n){return Ot(R(n))}function Tt(n,t=!1){var l;const r=R(n);return t||(r.equals=un),s!==null&&s.l!==null&&((l=s.l).s??(l.s=[])).push(r),r}function Ot(n){return f!==null&&f.f&b&&(w===null?dr([n]):w.push(n)),n}function At(n,t){return f!==null&&Y()&&f.f&(b|ln)&&(w===null||!w.includes(n))&&jt(),On(n,t)}function On(n,t){return n.equals(t)||(n.v=t,n.version=nt(),An(n,E),Y()&&o!==null&&o.f&d&&!(o.f&_)&&(c!==null&&c.includes(n)?(g(o,E),nn(o)):T===null?hr([n]):T.push(n))),t}function An(n,t){var r=n.reactions;if(r!==null)for(var l=Y(),e=r.length,a=0;a<e;a++){var u=r[a],i=u.f;i&E||!l&&u===o||(g(u,t),i&(d|O)&&(i&b?An(u,G):nn(u)))}}const kt=1,Ct=2,Dt=4,Pt=8,It=16,Mt=1,Nt=2,zt=4,Bt=8,Ft=16,Gt=1,Ht=2,kn="[",Cn="[!",Dn="]",on={},$t=Symbol();function fn(n){console.warn("hydration_mismatch")}let j=!1;function Jt(n){j=n}let y;function P(n){if(n===null)throw fn(),on;return y=n}function Kt(){return P(q(y))}function Lt(n){if(j){if(q(y)!==null)throw fn(),on;y=n}}function Qt(n=1){if(j){for(var t=n,r=y;t--;)r=q(r);y=r}}function Rt(){for(var n=0,t=y;;){if(t.nodeType===8){var r=t.data;if(r===Dn){if(n===0)return t;n-=1}else(r===kn||r===Cn)&&(n+=1)}var l=q(t);t.remove(),t=l}}var sn,Pn,In,Mn;function St(){if(sn===void 0){sn=window,Pn=document;var n=Element.prototype,t=Node.prototype;In=tn(t,"firstChild").get,Mn=tn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function S(n=""){return document.createTextNode(n)}function U(n){return In.call(n)}function q(n){return Mn.call(n)}function Ut(n,t){if(!j)return U(n);var r=U(y);if(r===null)r=y.appendChild(S());else if(t&&r.nodeType!==3){var l=S();return r==null||r.before(l),P(l),l}return P(r),r}function Vt(n,t){if(!j){var r=U(n);return r instanceof Comment&&r.data===""?q(r):r}return y}function Wt(n,t=1,r=!1){let l=j?y:n;for(;t--;)l=q(l);if(!j)return l;var e=l.nodeType;if(r&&e!==3){var a=S();return l==null||l.before(a),P(a),a}return P(l),l}function Xt(n){n.textContent=""}function Nn(n){var t=b|E;o===null?t|=O:o.f|=jn;const r={children:null,ctx:s,deps:null,equals:qn,f:t,fn:n,reactions:null,v:null,version:0,parent:o};if(f!==null&&f.f&b){var l=f;(l.children??(l.children=[])).push(r)}return r}function Yt(n){const t=Nn(n);return t.equals=un,t}function zn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var l=t[r];l.f&b?cn(l):k(l)}}}function Bn(n){var t,r=o;J(n.parent);try{zn(n),t=tt(n)}finally{J(r)}return t}function Fn(n){var t=Bn(n),r=(z||n.f&O)&&n.deps!==null?G:d;g(n,r),n.equals(t)||(n.v=t,n.version=nt())}function cn(n){zn(n),L(n,0),g(n,D),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Gn(n){o===null&&f===null&&_t(),f!==null&&f.f&O&&yt(),yn&&ht()}function Zt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function I(n,t,r,l=!0){var e=(n&F)!==0,a=o,u={ctx:s,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|E,first:null,fn:t,last:null,next:null,parent:e?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=M;try{Xn(!0),Z(u),u.f|=vt}catch(v){throw k(u),v}finally{Xn(i)}}else t!==null&&nn(u);var x=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&jn)===0;if(!x&&!e&&l&&(a!==null&&Zt(u,a),f!==null&&f.f&b)){var m=f;(m.children??(m.children=[])).push(u)}return u}function nr(n){const t=I(B,null,!1);return g(t,d),t.teardown=n,t}function tr(n){Gn();var t=o!==null&&(o.f&_)!==0&&s!==null&&!s.m;if(t){var r=s;(r.e??(r.e=[])).push({fn:n,effect:o,reaction:f})}else{var l=vn(n);return l}}function rr(n){return Gn(),Hn(n)}function lr(n){const t=I(F,n,!0);return()=>{k(t)}}function vn(n){return I(mn,n,!1)}function Hn(n){return I(B,n,!0)}function er(n){return $n(n)}function $n(n,t=0){return I(B|ln|t,n,!0)}function ar(n,t=!0){return I(B|_,n,!0,t)}function Jn(n){var t=n.teardown;if(t!==null){const r=yn,l=f;Yn(!0),$(null);try{t.call(null)}finally{Yn(r),$(l)}}}function Kn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)cn(t[r])}}function Ln(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var l=r.next;k(r,t),r=l}}function ur(n){for(var t=n.first;t!==null;){var r=t.next;t.f&_||k(t),t=r}}function k(n,t=!0){var r=!1;if((t||n.f&En)&&n.nodes_start!==null){for(var l=n.nodes_start,e=n.nodes_end;l!==null;){var a=l===e?null:q(l);l.remove(),l=a}r=!0}Kn(n),Ln(n,t&&!r),L(n,0),g(n,D);var u=n.transitions;if(u!==null)for(const x of u)x.stop();Jn(n);var i=n.parent;i!==null&&i.first!==null&&Qn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Qn(n){var t=n.parent,r=n.prev,l=n.next;r!==null&&(r.next=l),l!==null&&(l.prev=r),t!==null&&(t.first===n&&(t.first=l),t.last===n&&(t.last=r))}function or(n,t){var r=[];pn(n,r,!0),Rn(r,()=>{k(n),t&&t()})}function Rn(n,t){var r=n.length;if(r>0){var l=()=>--r||t();for(var e of n)e.out(l)}else t()}function pn(n,t,r){if(!(n.f&A)){if(n.f^=A,n.transitions!==null)for(const u of n.transitions)(u.is_global||r)&&t.push(u);for(var l=n.first;l!==null;){var e=l.next,a=(l.f&en)!==0||(l.f&_)!==0;pn(l,t,a?r:!1),l=e}}}function fr(n){Sn(n,!0)}function Sn(n,t){if(n.f&A){n.f^=A,K(n)&&Z(n);for(var r=n.first;r!==null;){var l=r.next,e=(r.f&en)!==0||(r.f&_)!==0;Sn(r,e?t:!1),r=l}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}const ir=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let V=!1,W=!1,dn=[],hn=[];function Un(){V=!1;const n=dn.slice();dn=[],rn(n)}function Vn(){W=!1;const n=hn.slice();hn=[],rn(n)}function sr(n){V||(V=!0,queueMicrotask(Un)),dn.push(n)}function cr(n){W||(W=!0,ir(Vn)),hn.push(n)}function vr(){V&&Un(),W&&Vn()}const Wn=0,pr=1;let X=Wn,H=!1,M=!1,yn=!1;function Xn(n){M=n}function Yn(n){yn=n}let C=[],N=0,f=null;function $(n){f=n}let o=null;function J(n){o=n}let w=null;function dr(n){w=n}let c=null,h=0,T=null;function hr(n){T=n}let Zn=0,z=!1,s=null;function nt(){return++Zn}function Y(){return s!==null&&s.l===null}function K(n){var u,i;var t=n.f;if(t&E)return!0;if(t&G){var r=n.deps,l=(t&O)!==0;if(r!==null){var e;if(t&Q){for(e=0;e<r.length;e++)((u=r[e]).reactions??(u.reactions=[])).push(n);n.f^=Q}for(e=0;e<r.length;e++){var a=r[e];if(K(a)&&Fn(a),l&&o!==null&&!z&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}l||g(n,d)}return!1}function yr(n,t,r){throw n}function tt(n){var gn;var t=c,r=h,l=T,e=f,a=z,u=w,i=s,x=n.f;c=null,h=0,T=null,f=x&(_|F)?null:n,z=!M&&(x&O)!==0,w=null,s=n.ctx;try{var m=(0,n.fn)(),v=n.deps;if(c!==null){var p;if(L(n,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else n.deps=v=c;if(!z)for(p=h;p<v.length;p++)((gn=v[p]).reactions??(gn.reactions=[])).push(n)}else v!==null&&h<v.length&&(L(n,h),v.length=h);return m}finally{c=t,h=r,T=l,f=e,z=a,w=u,s=i}}function _r(n,t){let r=t.reactions;if(r!==null){var l=r.indexOf(n);if(l!==-1){var e=r.length-1;e===0?r=t.reactions=null:(r[l]=r[e],r.pop())}}r===null&&t.f&b&&(c===null||!c.includes(t))&&(g(t,G),t.f&(O|Q)||(t.f^=Q),L(t,0))}function L(n,t){var r=n.deps;if(r!==null)for(var l=t;l<r.length;l++)_r(n,r[l])}function Z(n){var t=n.f;if(!(t&D)){g(n,d);var r=o;o=n;try{Kn(n),t&ln?ur(n):Ln(n),Jn(n);var l=tt(n);n.teardown=typeof l=="function"?l:null,n.version=Zn}catch(e){yr(e)}finally{o=r}}}function rt(){N>1e3&&(N=0,wt()),N++}function lt(n){var t=n.length;if(t!==0){rt();var r=M;M=!0;try{for(var l=0;l<t;l++){var e=n[l];e.f&d||(e.f^=d);var a=[];et(e,a),wr(a)}}finally{M=r}}}function wr(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var l=n[r];!(l.f&(D|A))&&K(l)&&(Z(l),l.deps===null&&l.first===null&&l.nodes_start===null&&(l.teardown===null?Qn(l):l.fn=null))}}function gr(){if(H=!1,N>1001)return;const n=C;C=[],lt(n),H||(N=0)}function nn(n){X===Wn&&(H||(H=!0,queueMicrotask(gr)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(F|_)){if(!(r&d))return;t.f^=d}}C.push(t)}function et(n,t){var r=n.first,l=[];n:for(;r!==null;){var e=r.f,a=(e&_)!==0,u=a&&(e&d)!==0;if(!u&&!(e&A))if(e&B){a?r.f^=d:K(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else e&mn&&l.push(r);var x=r.next;if(x===null){let p=r.parent;for(;p!==null;){if(n===p)break n;var m=p.next;if(m!==null){r=m;continue n}p=p.parent}}r=x}for(var v=0;v<l.length;v++)i=l[v],t.push(i),et(i,t)}function _n(n){var t=X,r=C;try{rt();const e=[];X=pr,C=e,H=!1,lt(r);var l=n==null?void 0:n();return vr(),(C.length>0||e.length>0)&&_n(),N=0,l}finally{X=t,C=r}}async function xr(){await Promise.resolve(),_n()}function br(n){var i;var t=n.f,r=(t&b)!==0;if(r&&t&D){var l=Bn(n);return cn(n),l}if(f!==null){w!==null&&w.includes(n)&&Et();var e=f.deps;c===null&&e!==null&&e[h]===n?h++:c===null?c=[n]:c.push(n),T!==null&&o!==null&&o.f&d&&!(o.f&_)&&T.includes(n)&&(g(o,E),nn(o))}else if(r&&n.deps===null){var a=n,u=a.parent;u!==null&&!((i=u.deriveds)!=null&&i.includes(a))&&(u.deriveds??(u.deriveds=[])).push(a)}return r&&(a=n,K(a)&&Fn(a)),n.v}function mr(n){const t=f;try{return f=null,n()}finally{f=t}}const Er=~(E|G|d);function g(n,t){n.f=n.f&Er|t}function jr(n,t=!1,r){s={p:s,c:null,e:null,m:!1,s:n,x:null,l:null},t||(s.l={s:null,u:null,r1:[],r2:R(!1)})}function qr(n){const t=s;if(t!==null){const u=t.e;if(u!==null){var r=o,l=f;t.e=null;try{for(var e=0;e<u.length;e++){var a=u[e];J(a.effect),$(a.reaction),vn(a.fn)}}finally{J(r),$(l)}}s=t.p,t.m=!0}return{}}function Tr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(an in n)wn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&an in r&&wn(r)}}}function wn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let l in n)try{wn(n[l],t)}catch{}const r=bn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const l=xn(r);for(let e in l){const a=l[e].get;if(a)try{a.call(n)}catch{}}}}}export{nr as $,On as A,Ct as B,It as C,Tt as D,en as E,R as F,pn as G,Cn as H,A as I,Xt as J,Rn as K,k as L,U as M,Dn as N,Pt as O,q as P,ft as Q,it as R,an as S,bt as T,At as U,tn as V,$t as W,mt as X,bn as Y,En as Z,kn as _,tr as a,$ as a0,J as a1,ot as a2,f as a3,jr as a4,Vt as a5,er as a6,qr as a7,Wt as a8,Ut as a9,Nt as aA,Bt as aB,Yt as aC,D as aD,Ft as aE,_n as aF,xr as aG,Tn as aH,Lt as aa,st as ab,fn as ac,on as ad,Y as ae,Hn as af,cr as ag,dt as ah,xn as ai,St as aj,gt as ak,lr as al,Qt as am,qt as an,sn as ao,Pn as ap,Gt as aq,Ht as ar,vn as as,xt as at,pt as au,zt as av,un as aw,_ as ax,F as ay,Mt as az,mr as b,s as c,ct as d,Tr as e,Nn as f,br as g,j as h,Kt as i,$n as j,Rt as k,Jt as l,fr as m,ar as n,y as o,or as p,S as q,rn as r,P as s,Dt as t,rr as u,at as v,ut as w,sr as x,o as y,kt as z};