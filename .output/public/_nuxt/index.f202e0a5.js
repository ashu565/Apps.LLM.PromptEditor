import{_ as Et}from"./button.vue.62ed5eac.js";import{_ as kt}from"./input.vue.0d9c8040.js";import{Q as It,a as B,o as x,c as W,u as _,A as $t,k as ut,b as S,l as H,j as m,F as dt,i as ft,W as Ct,r as Lt,e as R,w as U,T as Tt,m as it,B as Rt,p as Nt}from"./entry.3cc83cf9.js";import{_ as pt}from"./conversation-tab.220cdddd.js";import{u as tt}from"./conversation.a2f82f2b.js";import{_ as Ot}from"./long-press-button.575abe54.js";import{u as gt}from"./ui.5d6d809f.js";import{u as Ft}from"./composables.895f1fb5.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./index.browser.7e542916.js";import"./language-model.c5e8ba07.js";function k(s){return Array.isArray?Array.isArray(s):xt(s)==="[object Array]"}const Bt=1/0;function jt(s){if(typeof s=="string")return s;let t=s+"";return t=="0"&&1/s==-Bt?"-0":t}function Pt(s){return s==null?"":jt(s)}function A(s){return typeof s=="string"}function mt(s){return typeof s=="number"}function Kt(s){return s===!0||s===!1||Vt(s)&&xt(s)=="[object Boolean]"}function _t(s){return typeof s=="object"}function Vt(s){return _t(s)&&s!==null}function v(s){return s!=null}function G(s){return!s.trim().length}function xt(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const Wt="Incorrect 'index' type",Dt=s=>`Invalid value for key ${s}`,zt=s=>`Pattern length exceeds max of ${s}.`,Ut=s=>`Missing ${s} property in key`,Gt=s=>`Property 'weight' in key '${s}' must be a positive integer`,ot=Object.prototype.hasOwnProperty;class Ht{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach(r=>{let n=yt(r);e+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,e+=n.weight}),this._keys.forEach(r=>{r.weight/=e})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function yt(s){let t=null,e=null,r=null,n=1,i=null;if(A(s)||k(s))r=s,t=ct(s),e=Y(s);else{if(!ot.call(s,"name"))throw new Error(Ut("name"));const o=s.name;if(r=o,ot.call(s,"weight")&&(n=s.weight,n<=0))throw new Error(Gt(o));t=ct(o),e=Y(o),i=s.getFn}return{path:t,id:e,weight:n,src:r,getFn:i}}function ct(s){return k(s)?s:s.split(".")}function Y(s){return k(s)?s.join("."):s}function Yt(s,t){let e=[],r=!1;const n=(i,o,c)=>{if(v(i))if(!o[c])e.push(i);else{let a=o[c];const h=i[a];if(!v(h))return;if(c===o.length-1&&(A(h)||mt(h)||Kt(h)))e.push(Pt(h));else if(k(h)){r=!0;for(let l=0,d=h.length;l<d;l+=1)n(h[l],o,c+1)}else o.length&&n(h,o,c+1)}};return n(s,A(t)?t.split("."):t,0),r?e:e[0]}const Qt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Xt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,t)=>s.score===t.score?s.idx<t.idx?-1:1:s.score<t.score?-1:1},Jt={location:0,threshold:.6,distance:100},Zt={useExtendedSearch:!1,getFn:Yt,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...Xt,...Qt,...Jt,...Zt};const qt=/[^ ]+/g;function te(s=1,t=3){const e=new Map,r=Math.pow(10,t);return{get(n){const i=n.match(qt).length;if(e.has(i))return e.get(i);const o=1/Math.pow(i,.5*s),c=parseFloat(Math.round(o*r)/r);return e.set(i,c),c},clear(){e.clear()}}}class et{constructor({getFn:t=u.getFn,fieldNormWeight:e=u.fieldNormWeight}={}){this.norm=te(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((e,r)=>{this._keysMap[e.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,A(this.docs[0])?this.docs.forEach((t,e)=>{this._addString(t,e)}):this.docs.forEach((t,e)=>{this._addObject(t,e)}),this.norm.clear())}add(t){const e=this.size();A(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,r=this.size();e<r;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!v(t)||G(t))return;let r={v:t,i:e,n:this.norm.get(t)};this.records.push(r)}_addObject(t,e){let r={i:e,$:{}};this.keys.forEach((n,i)=>{let o=n.getFn?n.getFn(t):this.getFn(t,n.path);if(v(o)){if(k(o)){let c=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:h,value:l}=a.pop();if(v(l))if(A(l)&&!G(l)){let d={v:l,i:h,n:this.norm.get(l)};c.push(d)}else k(l)&&l.forEach((d,f)=>{a.push({nestedArrIndex:f,value:d})})}r.$[i]=c}else if(A(o)&&!G(o)){let c={v:o,n:this.norm.get(o)};r.$[i]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function vt(s,t,{getFn:e=u.getFn,fieldNormWeight:r=u.fieldNormWeight}={}){const n=new et({getFn:e,fieldNormWeight:r});return n.setKeys(s.map(yt)),n.setSources(t),n.create(),n}function ee(s,{getFn:t=u.getFn,fieldNormWeight:e=u.fieldNormWeight}={}){const{keys:r,records:n}=s,i=new et({getFn:t,fieldNormWeight:e});return i.setKeys(r),i.setIndexRecords(n),i}function K(s,{errors:t=0,currentLocation:e=0,expectedLocation:r=0,distance:n=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const o=t/s.length;if(i)return o;const c=Math.abs(r-e);return n?o+c/n:c?1:o}function se(s=[],t=u.minMatchCharLength){let e=[],r=-1,n=-1,i=0;for(let o=s.length;i<o;i+=1){let c=s[i];c&&r===-1?r=i:!c&&r!==-1&&(n=i-1,n-r+1>=t&&e.push([r,n]),r=-1)}return s[i-1]&&i-r>=t&&e.push([r,i-1]),e}const N=32;function re(s,t,e,{location:r=u.location,distance:n=u.distance,threshold:i=u.threshold,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:h=u.ignoreLocation}={}){if(t.length>N)throw new Error(zt(N));const l=t.length,d=s.length,f=Math.max(0,Math.min(r,d));let p=i,g=f;const y=c>1||a,E=y?Array(d):[];let b;for(;(b=s.indexOf(t,g))>-1;){let M=K(t,{currentLocation:b,expectedLocation:f,distance:n,ignoreLocation:h});if(p=Math.min(M,p),g=b+l,y){let I=0;for(;I<l;)E[b+I]=1,I+=1}}g=-1;let L=[],T=1,j=l+d;const At=1<<l-1;for(let M=0;M<l;M+=1){let I=0,$=j;for(;I<$;)K(t,{errors:M,currentLocation:f+$,expectedLocation:f,distance:n,ignoreLocation:h})<=p?I=$:j=$,$=Math.floor((j-I)/2+I);j=$;let rt=Math.max(1,f-$+1),z=o?d:Math.min(f+$,d)+l,O=Array(z+2);O[z+1]=(1<<M)-1;for(let w=z;w>=rt;w-=1){let P=w-1,nt=e[s.charAt(P)];if(y&&(E[P]=+!!nt),O[w]=(O[w+1]<<1|1)&nt,M&&(O[w]|=(L[w+1]|L[w])<<1|1|L[w+1]),O[w]&At&&(T=K(t,{errors:M,currentLocation:P,expectedLocation:f,distance:n,ignoreLocation:h}),T<=p)){if(p=T,g=P,g<=f)break;rt=Math.max(1,2*f-g)}}if(K(t,{errors:M+1,currentLocation:f,expectedLocation:f,distance:n,ignoreLocation:h})>p)break;L=O}const D={isMatch:g>=0,score:Math.max(.001,T)};if(y){const M=se(E,c);M.length?a&&(D.indices=M):D.isMatch=!1}return D}function ne(s){let t={};for(let e=0,r=s.length;e<r;e+=1){const n=s.charAt(e);t[n]=(t[n]||0)|1<<r-e-1}return t}class Mt{constructor(t,{location:e=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){if(this.options={location:e,threshold:r,distance:n,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:h},this.pattern=a?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(f,p)=>{this.chunks.push({pattern:f,alphabet:ne(f),startIndex:p})},d=this.pattern.length;if(d>N){let f=0;const p=d%N,g=d-p;for(;f<g;)l(this.pattern.substr(f,N),f),f+=N;if(p){const y=d-N;l(this.pattern.substr(y),y)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:r}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let g={isMatch:!0,score:0};return r&&(g.indices=[[0,t.length-1]]),g}const{location:n,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,ignoreLocation:h}=this.options;let l=[],d=0,f=!1;this.chunks.forEach(({pattern:g,alphabet:y,startIndex:E})=>{const{isMatch:b,score:L,indices:T}=re(t,g,y,{location:n+E,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,includeMatches:r,ignoreLocation:h});b&&(f=!0),d+=L,b&&T&&(l=[...l,...T])});let p={isMatch:f,score:f?d/this.chunks.length:1};return f&&r&&(p.indices=l),p}}class C{constructor(t){this.pattern=t}static isMultiMatch(t){return at(t,this.multiRegex)}static isSingleMatch(t){return at(t,this.singleRegex)}search(){}}function at(s,t){const e=s.match(t);return e?e[1]:null}class ie extends C{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class oe extends C{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class ce extends C{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class ae extends C{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class le extends C{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class he extends C{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class bt extends C{constructor(t,{location:e=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){super(t),this._bitapSearch=new Mt(t,{location:e,threshold:r,distance:n,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class wt extends C{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e=0,r;const n=[],i=this.pattern.length;for(;(r=t.indexOf(this.pattern,e))>-1;)e=r+i,n.push([r,e-1]);const o=!!n.length;return{isMatch:o,score:o?0:1,indices:n}}}const Q=[ie,wt,ce,ae,he,le,oe,bt],lt=Q.length,ue=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,de="|";function fe(s,t={}){return s.split(de).map(e=>{let r=e.trim().split(ue).filter(i=>i&&!!i.trim()),n=[];for(let i=0,o=r.length;i<o;i+=1){const c=r[i];let a=!1,h=-1;for(;!a&&++h<lt;){const l=Q[h];let d=l.isMultiMatch(c);d&&(n.push(new l(d,t)),a=!0)}if(!a)for(h=-1;++h<lt;){const l=Q[h];let d=l.isSingleMatch(c);if(d){n.push(new l(d,t));break}}}return n})}const pe=new Set([bt.type,wt.type]);class ge{constructor(t,{isCaseSensitive:e=u.isCaseSensitive,includeMatches:r=u.includeMatches,minMatchCharLength:n=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:o=u.findAllMatches,location:c=u.location,threshold:a=u.threshold,distance:h=u.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:r,minMatchCharLength:n,findAllMatches:o,ignoreLocation:i,location:c,threshold:a,distance:h},this.pattern=e?t:t.toLowerCase(),this.query=fe(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:n}=this.options;t=n?t:t.toLowerCase();let i=0,o=[],c=0;for(let a=0,h=e.length;a<h;a+=1){const l=e[a];o.length=0,i=0;for(let d=0,f=l.length;d<f;d+=1){const p=l[d],{isMatch:g,indices:y,score:E}=p.search(t);if(g){if(i+=1,c+=E,r){const b=p.constructor.type;pe.has(b)?o=[...o,...y]:o.push(y)}}else{c=0,i=0,o.length=0;break}}if(i){let d={isMatch:!0,score:c/i};return r&&(d.indices=o),d}}return{isMatch:!1,score:1}}}const X=[];function me(...s){X.push(...s)}function J(s,t){for(let e=0,r=X.length;e<r;e+=1){let n=X[e];if(n.condition(s,t))return new n(s,t)}return new Mt(s,t)}const V={AND:"$and",OR:"$or"},Z={PATH:"$path",PATTERN:"$val"},q=s=>!!(s[V.AND]||s[V.OR]),_e=s=>!!s[Z.PATH],xe=s=>!k(s)&&_t(s)&&!q(s),ht=s=>({[V.AND]:Object.keys(s).map(t=>({[t]:s[t]}))});function St(s,t,{auto:e=!0}={}){const r=n=>{let i=Object.keys(n);const o=_e(n);if(!o&&i.length>1&&!q(n))return r(ht(n));if(xe(n)){const a=o?n[Z.PATH]:i[0],h=o?n[Z.PATTERN]:n[a];if(!A(h))throw new Error(Dt(a));const l={keyId:Y(a),pattern:h};return e&&(l.searcher=J(h,t)),l}let c={children:[],operator:i[0]};return i.forEach(a=>{const h=n[a];k(h)&&h.forEach(l=>{c.children.push(r(l))})}),c};return q(s)||(s=ht(s)),r(s)}function ye(s,{ignoreFieldNorm:t=u.ignoreFieldNorm}){s.forEach(e=>{let r=1;e.matches.forEach(({key:n,norm:i,score:o})=>{const c=n?n.weight:null;r*=Math.pow(o===0&&c?Number.EPSILON:o,(c||1)*(t?1:i))}),e.score=r})}function ve(s,t){const e=s.matches;t.matches=[],v(e)&&e.forEach(r=>{if(!v(r.indices)||!r.indices.length)return;const{indices:n,value:i}=r;let o={indices:n,value:i};r.key&&(o.key=r.key.src),r.idx>-1&&(o.refIndex=r.idx),t.matches.push(o)})}function Me(s,t){t.score=s.score}function be(s,t,{includeMatches:e=u.includeMatches,includeScore:r=u.includeScore}={}){const n=[];return e&&n.push(ve),r&&n.push(Me),s.map(i=>{const{idx:o}=i,c={item:t[o],refIndex:o};return n.length&&n.forEach(a=>{a(i,c)}),c})}class F{constructor(t,e={},r){this.options={...u,...e},this.options.useExtendedSearch,this._keyStore=new Ht(this.options.keys),this.setCollection(t,r)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof et))throw new Error(Wt);this._myIndex=e||vt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){v(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const e=[];for(let r=0,n=this._docs.length;r<n;r+=1){const i=this._docs[r];t(i,r)&&(this.removeAt(r),r-=1,n-=1,e.push(i))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:r,includeScore:n,shouldSort:i,sortFn:o,ignoreFieldNorm:c}=this.options;let a=A(t)?A(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return ye(a,{ignoreFieldNorm:c}),i&&a.sort(o),mt(e)&&e>-1&&(a=a.slice(0,e)),be(a,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(t){const e=J(t,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:i,i:o,n:c})=>{if(!v(i))return;const{isMatch:a,score:h,indices:l}=e.searchIn(i);a&&n.push({item:i,idx:o,matches:[{score:h,value:i,norm:c,indices:l}]})}),n}_searchLogical(t){const e=St(t,this.options),r=(c,a,h)=>{if(!c.children){const{keyId:d,searcher:f}=c,p=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(a,d),searcher:f});return p&&p.length?[{idx:h,item:a,matches:p}]:[]}const l=[];for(let d=0,f=c.children.length;d<f;d+=1){const p=c.children[d],g=r(p,a,h);if(g.length)l.push(...g);else if(c.operator===V.AND)return[]}return l},n=this._myIndex.records,i={},o=[];return n.forEach(({$:c,i:a})=>{if(v(c)){let h=r(e,c,a);h.length&&(i[a]||(i[a]={idx:a,item:c,matches:[]},o.push(i[a])),h.forEach(({matches:l})=>{i[a].matches.push(...l)}))}}),o}_searchObjectList(t){const e=J(t,this.options),{keys:r,records:n}=this._myIndex,i=[];return n.forEach(({$:o,i:c})=>{if(!v(o))return;let a=[];r.forEach((h,l)=>{a.push(...this._findMatches({key:h,value:o[l],searcher:e}))}),a.length&&i.push({idx:c,item:o,matches:a})}),i}_findMatches({key:t,value:e,searcher:r}){if(!v(e))return[];let n=[];if(k(e))e.forEach(({v:i,i:o,n:c})=>{if(!v(i))return;const{isMatch:a,score:h,indices:l}=r.searchIn(i);a&&n.push({score:h,key:t,value:i,idx:o,norm:c,indices:l})});else{const{v:i,n:o}=e,{isMatch:c,score:a,indices:h}=r.searchIn(i);c&&n.push({score:a,key:t,value:i,norm:o,indices:h})}return n}}F.version="6.6.2";F.createIndex=vt;F.parseIndex=ee;F.config=u;F.parseQuery=St;me(ge);function st(){const s=It("search-term",()=>"");return{searchTerm:s,filterConversationsBySearchTerm:e=>s.value?new F(e,{keys:["title","messages.text"],threshold:.3}).search(s.value).map(i=>i.item):e}}const we=B({__name:"search-bar",setup(s){const{searchTerm:t}=st();return(e,r)=>{const n=kt;return x(),W(n,{modelValue:_(t),"onUpdate:modelValue":r[0]||(r[0]=i=>$t(t)?t.value=i:null),modelModifiers:{trim:!0},placeholder:"Search...","w-full":"","box-border":"","b-2":""},null,8,["modelValue"])}}}),Se={key:0,uppercase:"","font-bold":"","font-text":"","text-13px":"","text-color-lighter":"","my-2":"",flex:"","items-center":"","px-3":""},Ae={"max-h-100":"","overflow-y-auto":"","overflow-x-hidden":"","w-full":"","pb-2":""},Ee=B({__name:"favorite-conversations",setup(s){const{conversationList:t}=tt(),{filterConversationsBySearchTerm:e}=st(),r=ut(()=>t.value===null?null:e(t.value).filter(n=>{var i;return(i=n.metadata)==null?void 0:i.favorite}).sort((n,i)=>n.updatedAt===null?1:i.updatedAt===null?-1:i.updatedAt.getTime()-n.updatedAt.getTime()));return(n,i)=>{var c;const o=pt;return x(),S("div",null,[(c=_(r))!=null&&c.length?(x(),S("div",Se," Favorites ")):H("",!0),m("div",Ae,[(x(!0),S(dt,null,ft(_(r),a=>(x(),W(o,{key:a.id,conversation:a},null,8,["conversation"]))),128))])])}}}),ke=m("div",{uppercase:"","font-bold":"","font-text":"","text-13px":"","text-color-lighter":"","my-2":"",flex:"","items-center":"","px-3":""}," Recent ",-1),Ie={key:0,"max-h-100":"","overflow-y-auto":"","overflow-x-hidden":"","w-full":"","pb-2":""},$e={key:1},Ce=m("div",{"text-color":"",flex:"~ col","items-center":"","justify-center":"","gap-1":"","op-40":""},[m("div",{"i-tabler-file-off":"","text-7":""}),m("div",{"font-bold":"","font-title":""}," No results "),m("div",{"text-3":""}," Try a different search term ")],-1),Le=[Ce],Te=B({__name:"recent-conversations",setup(s){const{conversationList:t}=tt(),{filterConversationsBySearchTerm:e}=st(),r=ut(()=>t.value===null?null:e(t.value).filter(n=>{var i;return!((i=n.metadata)!=null&&i.favorite)}).sort((n,i)=>n.updatedAt===null?1:i.updatedAt===null?-1:i.updatedAt.getTime()-n.updatedAt.getTime()));return(n,i)=>{var c;const o=pt;return x(),S("div",null,[ke,(c=_(r))!=null&&c.length?(x(),S("div",Ie,[(x(!0),S(dt,null,ft(_(r),a=>(x(),W(o,{key:a.id,conversation:a,"w-full":""},null,8,["conversation"]))),128))])):(x(),S("div",$e,Le))])}}}),Re={key:0,bg:"dark:white/10 dark-1/10",hover:"bg-white shadow-lg dark:!bg-gray-2/10","cursor-pointer":"",transition:"","p-2":"","py-3":"",flex:"","justify-center":"","rounded-2":"",relative:""},Ne=m("div",{"i-tabler-key":"","text-6":"","text-primary":"","dark:text-primary-400":""},null,-1),Oe=m("div",{"bg-primary":"","rounded-full":"","text-white":"","p-1":"","px-3":"",flex:"","items-center":"","justify-center":"","text-16px":"",absolute:"","top--2":"","right--2":""},[m("div",{"i-tabler-alert-octagon":""})],-1),Fe=[Ne,Oe],Be={key:1,"text-14px":"","text-gray-5":"","dark:text-gray-2":"","py-3":"","px-5":"","rounded-2":"",relative:"","overflow-hidden":"","cursor-pointer":"",transition:"",bg:"gray-2/20",hover:"bg-white shadow-lg dark:!bg-gray-2/10",shadow:"gray-9/5",active:"translate-y-2px",class:"group/item dark:!bg-dark-1/60"},je=m("div",{absolute:"",transition:"","transition-right":"",class:"top--5 right--9 group-hover/item:!text-gray-4/20 group-hover/item:right--5 group-hover/item:dark:!text-gray-5/20",text:"gray-4/10 30"},[m("div",{"i-tabler-key":""})],-1),Pe=m("div",{relative:""},[m("div",null," Provide your API key to start a conversation. "),m("div",{"text-primary-600":"","dark:text-primary-400":"","mt-1":""}," Click here ")],-1),Ke=[je,Pe],Ve=B({__name:"api-key-alert",setup(s){const{isSidebarCompact:t}=gt();return(e,r)=>_(t)?(x(),S("div",Re,Fe)):(x(),S("div",Be,Ke))}}),We={"h-full":"","flex-col":"",flex:"","b-0":"","b-r-1":"","b-solid":"",b:"dark:white/15 dark-1/10"},De={"text-color":"","font-bold":"","font-title":"","text-5":"","px-3":"","my-4":"",flex:"","items-center":""},ze=m("div",null," Messages ",-1),Ue={key:0,"px-3":"","mb-4":""},Ge={"mt-auto":""},He={flex:"~ col","children:grow":"","gap-3":"","mt-2":"","px-3":""},Ye={"text-color-lighter":"","my-6":"","text-5":"","tracking--1px":"","w-full":"",flex:"","justify-center":"","items-center":""},Qe=["src"],as=B({__name:"index",setup(s){const{createConversation:t,switchConversation:e,clearConversations:r}=tt(),{apiKey:n}=Ct(),{isSidebarCompact:i}=gt(),o=Ft(),c=async()=>{const l=await t("Untitled Conversation");await e(l.id)},a=Lt(!1);function h(){a.value=!a.value}return(l,d)=>{const f=Et,p=we,g=Ee,y=Te,E=Ot,b=Ve;return x(),S("div",We,[m("div",De,[ze,R(f,{secondary:"",icon:`${_(a)?"i-tabler-search-off":"i-tabler-message-search"} text-18px`,"ml-auto":"",onClick:h},null,8,["icon"])]),R(Tt,{name:"fade"},{default:U(()=>[_(a)?(x(),S("div",Ue,[R(p,{"w-full":"","text-16px":"","font-text":""})])):H("",!0)]),_:1}),R(g),R(y),m("div",Ge,[m("div",He,[R(f,{secondary:"",icon:"i-tabler-plus",onClick:c},{default:U(()=>[it(" New chat ")]),_:1}),R(E,{duration:1500,icon:"i-tabler-arrow-bar-to-up","progress-bar-style":"bg-red/50","success-style":"!ring-red",onSuccess:_(r)},{default:U(()=>[it(" Clear all ")]),_:1},8,["onSuccess"])]),_(n)?H("",!0):(x(),W(b,{key:0,"mt-3":"","mx-2":"",onClick:d[0]||(d[0]=L=>("navigateTo"in l?l.navigateTo:_(Rt))("/settings/api-key"))})),m("div",Ye,[m("img",{src:_(i)?`/image/logo-${_(o).value}-square-transparent.svg`:`/image/logo-${_(o).value}-lettered.svg`,class:Nt([_(i)?"w-12":"w-24"]),"op-60":""},null,10,Qe)])])])}}});export{as as default};
