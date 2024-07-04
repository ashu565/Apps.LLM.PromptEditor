import{_ as k}from"./link.vue.6af50414.js";import{_ as I}from"./input.vue.e5fd7f70.js";import{a as A,U as K,r as b,j as w,a0 as P,E as V,b as u,i,l as d,e as _,w as D,u as o,z as E,t as f,k as B,o as c}from"./entry.381c0f38.js";import{u as C}from"./deta.22dfe5c4.js";import{u as N,h as T}from"./language-model.15951690.js";import{s as L}from"./local-storage-ref.75cb2b75.js";import{u as O}from"./trpc.221bc22a.js";import"./idb.5d3753e0.js";import"./log.2adae07e.js";import"./index.browser.7e542916.js";const S={"text-gray-6":"","dark:text-gray-2":"","text-11px":"","sm:text-4":""},G=i("div",null," To use the application you need to provide an OpenAI API key. ",-1),R={"mt-3":""},U={key:0,"text-gray-5":"","dark:text-gray-1":"","mt-3":""},$={key:1},j=i("div",{"font-bold":"","text-gray-6":"","dark:text-gray-3":"","mt-7":"","text-14px":"","sm:text-5":""}," Instance API Key ",-1),z=i("div",{"my-3":""},null,-1),F={key:0,"text-color-lighter":"","text-8px":"","sm:text-13px":""},M={"text-color":"","mt-3":"","font-code":"","p-1":"","sm:px-3":"","sm:py-2":"",rounded:"","text-6px":"","sm:text-3":"","break-all":"",class:"bg-gray-1 dark:bg-gray-1/5 ring-1 ring-gray-2 dark:ring-white/10"},oe=A({__name:"api-key",setup(Y){const{apiKey:p,instanceApiKey:s}=K(),{isDetaEnabled:l}=C(),{checkIfAPIKeyIsValid:m}=N(),t=L(p),x=O(),r=b(!1),v=w(()=>{if(!s.value)return"";const a=s.value.length;return s.value.slice(0,4)+"•".repeat(a-8)+s.value.slice(a-4)});async function h(a){var n;const e=(n=a.target)==null?void 0:n.value;if(e)try{await m(e),r.value=!1}catch{r.value="Invalid API key."}}if(l.value){const a=P(async()=>{const{error:e}=await T(m(t.value||""));if(e){r.value="Invalid API key.";return}await x.deta.preferences.set.mutate({key:"api-key",value:t.value||""}),s.value=t.value||"",p.value=t.value||"",r.value=!1},300);V(t,(e,n)=>{e!==n&&a()})}return(a,e)=>{const n=k,y=I;return c(),u("div",S,[G,i("div",R,[d(" You can get your API key from the "),_(n,{to:"https://platform.openai.com/account/api-keys",target:"_blank"},{default:D(()=>[d(" OpenAI dashboard ")]),_:1}),d(". ")]),o(s)&&!o(l)?(c(),u("div",$,[j,z,o(l)?(c(),u("div",F,f(o(l)?"The API Key is setup and stored on Deta.":"This instance has a shared API key already set up."),1)):B("",!0),i("div",M,f(o(v)),1)])):(c(),u("div",U,[_(y,{modelValue:o(t),"onUpdate:modelValue":e[0]||(e[0]=g=>E(t)?t.value=g:null),placeholder:"Enter your API Key","text-11px":"","sm:text-4":"","w-full":"","text-gray-5":"","dark:text-gray-1":"",when:{blur:h},error:o(r)},null,8,["modelValue","when","error"])]))])}}});export{oe as default};
