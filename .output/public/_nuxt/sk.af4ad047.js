import{u as r}from"./language-model.c5e8ba07.js";import{a as l,r as o,N as c,b as u,j as m,t as p,u as i,o as d}from"./entry.3cc83cf9.js";import"./index.browser.7e542916.js";const h=l({__name:"sk",setup(g){const{sendMessage:a}=r(),s=o(),n=o();return c(async()=>{try{const e=await a({messages:[{role:"user",content:"hello"},{role:"user",content:"my name is john"},{role:"assistant",content:"okay"},{role:"user",content:"whats my name?"}],model:"gpt-4.5-turbo",onProgress(t){console.log(t)},stream:!0});s.value=e,n.value=e.status}catch(e){console.log(e),s.value=e.cause}}),(e,t)=>(d(),u("div",null,[m("pre",null,p(i(s)),1)]))}});export{h as default};
