import{a as u,W as h,k as d,f as g,o as e,b as a,F as m,i as x,j as o,p as r,u as s,l as f,B as y}from"./entry.3cc83cf9.js";const b={"text-color":"","rounded-3":"","p-1":"",class:"bg-gray-3/40 dark:bg-white/10 backdrop-blur-3px","text-12px":"",flex:"","gap-2":"","items-center":""},v=["onClick"],_={key:0,"bg-primary":"","rounded-full":"","text-white":"","h-3":"","w-3":"",flex:"","items-center":"","justify-center":"","text-10px":"",absolute:"","top-0":"","right-0":""},j=u({__name:"app-navbar-mobile",setup(k){const{apiKey:i}=h(),c=[{name:"History",icon:"i-tabler-history",path:"/history"},{name:"Chat",icon:"i-tabler-message-2",path:"/chat"},{name:"Settings",icon:"i-tabler-settings",path:"/settings"}],p=d(()=>!i.value),l=g();return(n,C)=>(e(),a("div",b,[(e(),a(m,null,x(c,t=>o("div",{key:t.path,"rounded-2":"","p-2":"","py-1":"","text-color":"","w-12":"","h-full":"",flex:"","flex-col":"","items-center":"","justify-center":"","gap-1":"","cursor-pointer":"","active:translate-y-2px":"",transition:"",relative:"",class:r([s(l).path.startsWith(t.path)?"!bg-primary-50/50 dark:!bg-primary-600/30 !text-primary-400":"op-40"]),onClick:w=>("navigateTo"in n?n.navigateTo:s(y))(t.path)},[o("div",{class:r(t.icon),"text-18px":""},null,2),s(p)&&t.path==="/settings"?(e(),a("div",_," ! ")):f("",!0)],10,v)),64))]))}});export{j as default};
