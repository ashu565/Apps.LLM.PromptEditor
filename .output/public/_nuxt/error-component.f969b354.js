import{o as m,c as p,n as _,g as E,u as t,d as n,_ as o}from"./entry.3cc83cf9.js";const f={__name:"nuxt-error-page",props:{error:Object},setup(r){(r.error.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const s=Number(r.error.statusCode||500),a=s===404,c=r.error.statusMessage??(a?"Page Not Found":"Internal Server Error"),u=r.error.message||r.error.toString(),i=void 0,d=a?n(()=>o(()=>import("./error-404.8927d478.js"),["./error-404.8927d478.js","./entry.3cc83cf9.js","./entry.1008e4b1.css","./_plugin-vue_export-helper.c27b6911.js","./error-404.dd29d79a.css"],import.meta.url).then(e=>e.default||e)):n(()=>o(()=>import("./error-500.02bce5ae.js"),["./error-500.02bce5ae.js","./entry.3cc83cf9.js","./entry.1008e4b1.css","./_plugin-vue_export-helper.c27b6911.js","./error-500.26873dcc.css"],import.meta.url).then(e=>e.default||e));return(e,l)=>(m(),p(t(d),_(E({statusCode:t(s),statusMessage:t(c),description:t(u),stack:t(i)})),null,16))}},v=f;export{v as default};
