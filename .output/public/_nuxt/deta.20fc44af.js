import{_ as f}from"./input.vue.0d9c8040.js";import{a as y,a2 as v,W as _,r as o,a3 as x,G as I,b as k,e as h,u as r,A,j as l,o as K}from"./entry.3cc83cf9.js";import{u as g,h as P}from"./language-model.c5e8ba07.js";import"./index.browser.7e542916.js";const V=l("div",{"font-bold":"","text-gray-6":"","dark:text-gray-3":"","mt-7":"","text-14px":"","sm:text-5":""}," Instance API Key ",-1),w=l("div",{"my-3":"","text-color":""}," You can set up a shared API key for this instance. ",-1),G=y({__name:"deta",setup(b){const u=v(),{instanceApiKey:n,apiKey:c}=_(),{checkIfAPIKeyIsValid:i}=g(),e=o(n.value||""),s=o(!1),d=x(async()=>{const{error:a}=await P(i(e.value||""));if(a){s.value="Invalid API key.";return}await u.deta.preferences.set.mutate({key:"api-key",value:e.value||""}),n.value=e.value||"",c.value=e.value||"",s.value=!1},300);return I(e,(a,t)=>{a!==t&&d()}),(a,t)=>{const p=f;return K(),k("div",null,[V,w,h(p,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=m=>A(e)?e.value=m:null),placeholder:"Enter your API Key","text-11px":"","sm:text-4":"","w-full":"","text-gray-5":"","dark:text-gray-1":"",error:r(s)},null,8,["modelValue","error"])])}}});export{G as default};
