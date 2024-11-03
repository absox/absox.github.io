import{p as C}from"../chunks/public-api.XVeOtUg4.js";import{a as h,t as g}from"../chunks/disclose-version.6CFbjw_q.js";import{a4 as B,a7 as P,a8 as o,a9 as a,aa as e,a6 as f,g as t}from"../chunks/runtime.CihvSwKW.js";import{s as r}from"../chunks/render.BEDXsWtL.js";import{i as D}from"../chunks/if.BFxhMYvj.js";import{e as z}from"../chunks/each.Cy79V0VW.js";import{s as y}from"../chunks/attributes.CvdiVvwt.js";const T=`- title: "Development and multicentre validation of the FLEX score: personalized preoperative surgical risk prediction using attention-based ICD-10 and Current Procedural Terminology set embeddings"
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
`,G=async()=>({publications:C(T)}),x=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));var E=g('<span class="github svelte-1egimib"><a class="svelte-1egimib">[code]</a></span>'),_=g('<div class="publication svelte-1egimib"><a class="svelte-1egimib"><h2 class="svelte-1egimib"> </h2></a> <h3 class="svelte-1egimib"> </h3> <span class="journal-name svelte-1egimib"> </span><span class="publication-year svelte-1egimib"> </span> <!></div>'),H=g('<div class="publications svelte-1egimib"><h1 class="svelte-1egimib">Selected publications</h1> <div style="text-align: center; margin-bottom: 15px; font-weight: 300;">For a complete list: <a href="https://scholar.google.com/citations?user=bshgBtkAAAAJ&amp;hl=en" class="svelte-1egimib">https://scholar.google.com/citations?user=bshgBtkAAAAJ&hl=en</a></div> <div style="text-align: right; margin-right: 25px; font-weight: 300;">(*) denotes equal contribution</div> <!></div>');function F(A,v){B(v,!0);var n=H(),J=o(a(n),6);z(J,17,()=>v.data.publications,l=>l.title,(l,i)=>{var c=_(),s=a(c),b=a(s),L=a(b,!0);e(b),e(s);var d=o(s,2),k=a(d,!0);e(d);var p=o(d,2),j=a(p,!0);e(p);var u=o(p),w=a(u,!0);e(u);var M=o(u,2);D(M,()=>t(i).git!=null,R=>{var m=E(),S=a(m);e(m),f(()=>y(S,"href",t(i).git)),h(R,m)}),e(c),f(()=>{y(s,"href",`https://dx.doi.org/${t(i).doi??""}`),r(L,t(i).title),r(k,t(i).authors),r(j,t(i).journal),r(w,t(i).year)}),h(l,c)}),e(n),h(A,n),P()}export{F as component,x as universal};
