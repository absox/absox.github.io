import{p as S}from"../chunks/public-api.C_oAbf4K.js";import{b as m,t as v}from"../chunks/disclose-version.DaQQL7OG.js";import{$ as C,a2 as P,a3 as i,a4 as a,a5 as e,a1 as b,M as n}from"../chunks/runtime.DSIJU85y.js";import{s as r}from"../chunks/render.y5LvOcdJ.js";import{i as B}from"../chunks/if.D9rpN_GD.js";import{e as D}from"../chunks/each.CALotCoe.js";import{s as f}from"../chunks/attributes.DgQD7pip.js";const z=`- title: "Development and multicentre validation of the FLEX score: personalized preoperative surgical risk prediction using attention-based ICD-10 and Current Procedural Terminology set embeddings"
  authors: Ran Liu, Tom AD Stone, Praachi Raje, Rory V Mather, Laura A Santa Cruz Mercado, Kishore Bharadwaj, Jasmine Johnson, Masaya Higuchi, Ryan D Nipp, Hiroko Kunitake, Patrick L Purdon
  journal: British Journal of Anaesthesia
  year: 2024
  doi: 10.1016/j.bja.2023.11.039
- title: "Development and prospective validation of postoperative pain prediction from preoperative EHR data using attention-based set embeddings"
  authors: Ran Liu, Rodrigo Gutiérrez, Rory V Mather, Tom A D Stone, Laura A Santa Cruz Mercado, Kishore Bharadwaj, Jasmine Johnson, Proloy Das, Gustavo Balanza, Ekenedilichukwu Uwanaka, Justin Sydloski, Andrew Chen, Mackenzie Hagood, Edward A Bittner, Patrick L Purdon
  journal: NPJ Digital Medicine
  year: 2023
  doi: 10.1038/s41746-023-00947-z
  git: https://github.com/instigatorofawe/pain_prediction_pops
- title: Association of intraoperative opioid administration with postoperative pain and opioid use
  authors: Laura A Santa Cruz Mercado, Ran Liu, Kishore M Bharadwaj, Jasmine J Johnson, Rodrigo Gutierrez, Proloy Das, Gustavo Balanza, Hao Deng, Akriti Pandit, Tom AD Stone, Teresa Macdonald, Caroline Horgan, Si Long Jenny Tou, Timothy T Houle, Edward A Bittner, Patrick L Purdon
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
`,x=async()=>({publications:S(z)}),O=Object.freeze(Object.defineProperty({__proto__:null,load:x},Symbol.toStringTag,{value:"Module"}));var T=v('<span class="github svelte-wbyann"><a class="svelte-wbyann">[code]</a></span>'),G=v('<div class="publication svelte-wbyann"><a class="svelte-wbyann"><h2 class="svelte-wbyann"> </h2></a> <h3 class="svelte-wbyann"> </h3> <span class="journal-name svelte-wbyann"> </span><span class="publication-year svelte-wbyann"> </span> <!></div>'),E=v('<div class="publications svelte-wbyann"><h1 class="svelte-wbyann">Selected Publications</h1> <div style="text-align: center; margin-bottom: 15px;">For a complete list, see <a href="https://scholar.google.com/citations?user=bshgBtkAAAAJ&amp;hl=en" class="svelte-wbyann">https://scholar.google.com/citations?user=bshgBtkAAAAJ&hl=en</a></div> <!></div>');function U(w,g){C(g,!0);var s=E(),k=i(a(s),4);D(k,17,()=>g.data.publications,l=>l.title,(l,t)=>{var d=G(),o=a(d),y=a(o),_=a(y,!0);e(y),e(o);var c=i(o,2),A=a(c,!0);e(c);var p=i(c,2),J=a(p,!0);e(p);var u=i(p),L=a(u,!0);e(u);var M=i(u,2);B(M,()=>n(t).git!=null,j=>{var h=T(),R=a(h);e(h),b(()=>f(R,"href",n(t).git)),m(j,h)}),e(d),b(()=>{f(o,"href",`https://dx.doi.org/${n(t).doi??""}`),r(_,n(t).title),r(A,n(t).authors),r(J,n(t).journal),r(L,n(t).year)}),m(l,d)}),e(s),m(w,s),P()}export{U as component,O as universal};
