import{p as C}from"../chunks/public-api.XVeOtUg4.js";import{a as m,t as g}from"../chunks/disclose-version.CyaTdpPh.js";import{a4 as B,a7 as P,a8 as o,a9 as a,aa as e,a6 as y,l as t}from"../chunks/runtime.BsiJ2hp_.js";import{s}from"../chunks/render.BcxekYYX.js";import{i as D}from"../chunks/if.DLs0y5d1.js";import{e as z}from"../chunks/each.D6LsrVKI.js";import{s as f}from"../chunks/attributes.CQhFWbr3.js";const T=`- title: "Development and multicentre validation of the FLEX score: personalized preoperative surgical risk prediction using attention-based ICD-10 and Current Procedural Terminology set embeddings"
  authors: Ran Liu, Tom AD Stone, Praachi Raje, Rory V Mather, Laura A Santa Cruz Mercado, Kishore Bharadwaj, Jasmine Johnson, Masaya Higuchi, Ryan D Nipp, Hiroko Kunitake, Patrick L Purdon
  journal: British Journal of Anaesthesia
  year: 2024
  doi: 10.1016/j.bja.2023.11.039
- title: "Development and prospective validation of postoperative pain prediction from preoperative EHR data using attention-based set embeddings"
  authors: Ran Liu*, Rodrigo Guti\xE9rrez*, Rory V Mather, Tom A D Stone, Laura A Santa Cruz Mercado, Kishore Bharadwaj, Jasmine Johnson, Proloy Das, Gustavo Balanza, Ekenedilichukwu Uwanaka, Justin Sydloski, Andrew Chen, Mackenzie Hagood, Edward A Bittner, Patrick L Purdon
  journal: NPJ Digital Medicine
  year: 2023
  doi: 10.1038/s41746-023-00947-z
  git: https://github.com/instigatorofawe/pain_prediction_pops
- title: Association of intraoperative opioid administration with postoperative pain and opioid use
  authors: Laura A Santa Cruz Mercado*, Ran Liu*, Kishore M Bharadwaj, Jasmine J Johnson, Rodrigo Gutierrez, Proloy Das, Gustavo Balanza, Hao Deng, Akriti Pandit, Tom AD Stone, Teresa Macdonald, Caroline Horgan, Si Long Jenny Tou, Timothy T Houle, Edward A Bittner, Patrick L Purdon
  journal: JAMA Surgery
  year: 2023
  doi: 10.1001/jamasurg.2023.2009
- title: Prediction of impending septic shock in children with sepsis
  journal: Critical Care Explorations
  authors: Ran Liu, Joseph L Greenstein, James C Fackler, Jules Bergmann, Melania M Bembea, Raimond L Winslow
  doi: 10.1097/CCE.0000000000000442
  year: 2021
- title: Spectral clustering of risk score trajectories stratifies sepsis patients by clinical outcome and interventions received
  authors: Ran Liu, Joseph L Greenstein, James C Fackler, Melania M Bembea, Raimond L Winslow
  journal: eLife
  year: 2020
  doi: 10.7554/eLife.58142
  git: https://github.com/instigatorofawe/clustering_manuscript
- title: Data-driven discovery of a novel sepsis pre-shock state predicts impending septic shock in the ICU
  authors: Ran Liu, Joseph L Greenstein, Stephen J Granite, James C Fackler, Melania M Bembea, Sridevi V Sarma, Raimond L Winslow
  journal: Scientific Reports
  year: 2019
  doi: 10.1038/s41598-019-42637-5
  git: https://github.com/instigatorofawe/shockalert-documented
`,G=async()=>({publications:C(T)}),x=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));var E=g('<span class="github svelte-wbyann"><a class="svelte-wbyann">[code]</a></span>'),_=g('<div class="publication svelte-wbyann"><a class="svelte-wbyann"><h2 class="svelte-wbyann"> </h2></a> <h3 class="svelte-wbyann"> </h3> <span class="journal-name svelte-wbyann"> </span><span class="publication-year svelte-wbyann"> </span> <!></div>'),H=g('<div class="publications svelte-wbyann"><h1 class="svelte-wbyann">Selected publications</h1> <div style="text-align: center; margin-bottom: 15px; font-weight: 300;">For a complete list: <a href="https://scholar.google.com/citations?user=bshgBtkAAAAJ&amp;hl=en" class="svelte-wbyann">https://scholar.google.com/citations?user=bshgBtkAAAAJ&hl=en</a></div> <div style="text-align: right; margin-right: 25px; font-weight: 300;">(*) denotes equal contribution</div> <!></div>');function F(w,v){B(v,!0);var r=H(),k=o(a(r),6);z(k,17,()=>v.data.publications,l=>l.title,(l,i)=>{var c=_(),n=a(c),b=a(n),A=a(b,!0);e(b),e(n);var d=o(n,2),J=a(d,!0);e(d);var p=o(d,2),L=a(p,!0);e(p);var u=o(p),j=a(u,!0);e(u);var M=o(u,2);D(M,()=>t(i).git!=null,R=>{var h=E(),S=a(h);e(h),y(()=>f(S,"href",t(i).git)),m(R,h)}),e(c),y(()=>{f(n,"href",`https://dx.doi.org/${t(i).doi??""}`),s(A,t(i).title),s(J,t(i).authors),s(L,t(i).journal),s(j,t(i).year)}),m(l,c)}),e(r),m(w,r),P()}export{F as component,x as universal};
