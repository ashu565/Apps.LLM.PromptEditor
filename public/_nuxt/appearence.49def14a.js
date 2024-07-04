import{a5 as u}from"./entry.381c0f38.js";const g=t=>{const c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)||[];try{let e=parseInt(c[1],16),n=parseInt(c[2],16),r=parseInt(c[3],16);e/=255,n/=255,r/=255;const s=Math.max(e,n,r),a=Math.min(e,n,r);let o=0,l,h=(s+a)/2;if(s==a)o=l=0;else{const i=s-a;switch(l=h>.5?i/(2-s-a):i/(s+a),s){case e:o=(n-r)/i+(n<r?6:0);break;case n:o=(r-e)/i+2;break;case r:o=(e-n)/i+4;break}o/=6}const m={h:0,s:0,l:0};return m.h=Math.round(o*360),m.s=Math.round(l*100),m.l=Math.round(h*100),m}catch{return console.log(t),{h:0,s:0,l:0}}},y=({h:t,s:c,l:e})=>{e/=100;const n=c*Math.min(e,1-e)/100,r=s=>{const a=(s+t/30)%12,o=e-n*Math.max(Math.min(a-3,9-a,1),-1);return Math.round(255*o).toString(16).padStart(2,"0")};return`#${r(0)}${r(8)}${r(4)}`},f=({hex:t,shades:c})=>{const e=g(t),n={};return c.forEach(({name:r,lightness:s})=>{const{h:a,s:o}=e,h=y({h:a,s:o,l:s});n[r]=h}),n},b=t=>{let c=[],e=["primary","secondary","tertiary","quaternary","quinary","senary","septenary","octonary","nonary","denary"],n=[{name:"50",lightness:98},{name:"100",lightness:95},{name:"200",lightness:90},{name:"300",lightness:82},{name:"400",lightness:64},{name:"500",lightness:46},{name:"600",lightness:33},{name:"700",lightness:24},{name:"800",lightness:14},{name:"900",lightness:7},{name:"950",lightness:4}];typeof t=="string"&&(t={colors:[t],names:e,shades:n}),typeof t=="object"&&Array.isArray(t)&&(t={colors:t,names:e,shades:n}),typeof t=="object"&&!Array.isArray(t)&&(t=Object.assign({colors:c,names:e,shades:n},t));const r={};return{colors:c,names:e,shades:n}=t,c.forEach((s,a)=>{const o=e[a],l=f({hex:s,shades:n});r[o]=l}),r};function p(){const t=u("golem-base-color","#a633cc"),c=u("golem-navbar-position","left");function e(n){n&&(t.value=n);const r=b(t.value);for(const[s,a]of Object.entries(r.primary)){const o=l=>{l=l.replace("#","");const h=parseInt(l.substring(0,2),16),m=parseInt(l.substring(2,4),16),i=parseInt(l.substring(4,6),16);return`${h}, ${m}, ${i}`};document.documentElement.style.setProperty(`--color-primary-${s}`,o(a))}}return{color:t,setPalette:e,navigationBarPosition:c}}export{p as u};
