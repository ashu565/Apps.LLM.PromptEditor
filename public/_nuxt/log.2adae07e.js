var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m={},x={get exports(){return m},set exports(h){m=h}};(function(h,M){(function(y,c){h.exports=c()})(I,function(){function y(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function c(r,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function w(r,e,t){return e&&c(r.prototype,e),t&&c(r,t),r}function A(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function b(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,o)}return t}function f(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?b(Object(t),!0).forEach(function(o){A(r,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(t,o))})}return r}function g(r){return function(e){if(Array.isArray(e))return d(e)}(r)||function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}(r)||k(r)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function k(r,e){if(r){if(typeof r=="string")return d(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(r,e):void 0}}function d(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function S(r){if(typeof Symbol>"u"||r[Symbol.iterator]==null){if(Array.isArray(r)||(r=k(r))){var e=0,t=function(){};return{s:t,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(u){throw u},f:t}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i,n=!0,l=!1;return{s:function(){o=r[Symbol.iterator]()},n:function(){var u=o.next();return n=u.done,u},e:function(u){l=!0,i=u},f:function(){try{n||o.return==null||o.return()}finally{if(l)throw i}}}}var s={};s[s.Fatal=0]="Fatal",s[s.Error=0]="Error",s[s.Warn=1]="Warn",s[s.Log=2]="Log",s[s.Info=3]="Info",s[s.Success=3]="Success",s[s.Debug=4]="Debug",s[s.Trace=5]="Trace",s[s.Silent=-1/0]="Silent",s[s.Verbose=1/0]="Verbose";var F={silent:{level:-1},fatal:{level:s.Fatal},error:{level:s.Error},warn:{level:s.Warn},log:{level:s.Log},info:{level:s.Info},success:{level:s.Success},debug:{level:s.Debug},trace:{level:s.Trace},verbose:{level:s.Trace},ready:{level:s.Info},start:{level:s.Info}};function P(r){return e=r,Object.prototype.toString.call(e)==="[object Object]"&&!(!r.message&&!r.args)&&!r.stack;var e}var v=!1,L=[],a=function(){function r(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};for(var t in y(this,r),this._reporters=e.reporters||[],this._types=e.types||F,this.level=e.level!==void 0?e.level:3,this._defaults=e.defaults||{},this._async=e.async!==void 0?e.async:void 0,this._stdout=e.stdout,this._stderr=e.stderr,this._mockFn=e.mockFn,this._throttle=e.throttle||1e3,this._throttleMin=e.throttleMin||5,this._types){var o=f(f({type:t},this._types[t]),this._defaults);this[t]=this._wrapLogFn(o),this[t].raw=this._wrapLogFn(o,!0)}this._mockFn&&this.mockTypes(),this._lastLogSerialized=void 0,this._lastLog=void 0,this._lastLogTime=void 0,this._lastLogCount=0,this._throttleTimeout=void 0}return w(r,[{key:"create",value:function(e){return new r(Object.assign({reporters:this._reporters,level:this.level,types:this._types,defaults:this._defaults,stdout:this._stdout,stderr:this._stderr,mockFn:this._mockFn},e))}},{key:"withDefaults",value:function(e){return this.create({defaults:Object.assign({},this._defaults,e)})}},{key:"withTag",value:function(e){return this.withDefaults({tag:this._defaults.tag?this._defaults.tag+":"+e:e})}},{key:"addReporter",value:function(e){return this._reporters.push(e),this}},{key:"removeReporter",value:function(e){if(e){var t=this._reporters.indexOf(e);if(t>=0)return this._reporters.splice(t,1)}else this._reporters.splice(0);return this}},{key:"setReporters",value:function(e){return this._reporters=Array.isArray(e)?e:[e],this}},{key:"wrapAll",value:function(){this.wrapConsole(),this.wrapStd()}},{key:"restoreAll",value:function(){this.restoreConsole(),this.restoreStd()}},{key:"wrapConsole",value:function(){for(var e in this._types)console["__"+e]||(console["__"+e]=console[e]),console[e]=this[e].raw}},{key:"restoreConsole",value:function(){for(var e in this._types)console["__"+e]&&(console[e]=console["__"+e],delete console["__"+e])}},{key:"wrapStd",value:function(){this._wrapStream(this.stdout,"log"),this._wrapStream(this.stderr,"log")}},{key:"_wrapStream",value:function(e,t){var o=this;e&&(e.__write||(e.__write=e.write),e.write=function(i){o[t].raw(String(i).trim())})}},{key:"restoreStd",value:function(){this._restoreStream(this.stdout),this._restoreStream(this.stderr)}},{key:"_restoreStream",value:function(e){e&&e.__write&&(e.write=e.__write,delete e.__write)}},{key:"pauseLogs",value:function(){v=!0}},{key:"resumeLogs",value:function(){v=!1;var e,t=S(L.splice(0));try{for(t.s();!(e=t.n()).done;){var o=e.value;o[0]._logFn(o[1],o[2])}}catch(i){t.e(i)}finally{t.f()}}},{key:"mockTypes",value:function(e){if(this._mockFn=e||this._mockFn,typeof this._mockFn=="function")for(var t in this._types)this[t]=this._mockFn(t,this._types[t])||this[t],this[t].raw=this[t]}},{key:"_wrapLogFn",value:function(e,t){var o=this;return function(){for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];if(!v)return o._logFn(e,n,t);L.push([o,e,n,t])}}},{key:"_logFn",value:function(e,t,o){var i=this;if(e.level>this.level)return!!this._async&&Promise.resolve(!1);var n=Object.assign({date:new Date,args:[]},e);!o&&t.length===1&&P(t[0])?Object.assign(n,t[0]):n.args=Array.from(t),n.message&&(n.args.unshift(n.message),delete n.message),n.additional&&(Array.isArray(n.additional)||(n.additional=n.additional.split(`
`)),n.args.push(`
`+n.additional.join(`
`)),delete n.additional),n.type=typeof n.type=="string"?n.type.toLowerCase():"",n.tag=typeof n.tag=="string"?n.tag.toLowerCase():"";var l=function(){var T=arguments.length>0&&arguments[0]!==void 0&&arguments[0],_=i._lastLogCount-i._throttleMin;if(i._lastLog&&_>0){var C=g(i._lastLog.args);_>1&&C.push("(repeated ".concat(_," times)")),i._log(f(f({},i._lastLog),{},{args:C})),i._lastLogCount=1}if(T){if(i._lastLog=n,i._async)return i._logAsync(n);i._log(n)}};clearTimeout(this._throttleTimeout);var u=this._lastLogTime?n.date-this._lastLogTime:0;if(this._lastLogTime=n.date,u<this._throttle)try{var j=JSON.stringify([n.type,n.tag,n.args]),D=this._lastLogSerialized===j;if(this._lastLogSerialized=j,D&&(this._lastLogCount++,this._lastLogCount>this._throttleMin))return void(this._throttleTimeout=setTimeout(l,this._throttle))}catch{}l(!0)}},{key:"_log",value:function(e){var t,o=S(this._reporters);try{for(o.s();!(t=o.n()).done;)t.value.log(e,{async:!1,stdout:this.stdout,stderr:this.stderr})}catch(i){o.e(i)}finally{o.f()}}},{key:"_logAsync",value:function(e){var t=this;return Promise.all(this._reporters.map(function(o){return o.log(e,{async:!0,stdout:t.stdout,stderr:t.stderr})}))}},{key:"stdout",get:function(){return this._stdout||console._stdout}},{key:"stderr",get:function(){return this._stderr||console._stderr}}]),r}();a.prototype.add=a.prototype.addReporter,a.prototype.remove=a.prototype.removeReporter,a.prototype.clear=a.prototype.removeReporter,a.prototype.withScope=a.prototype.withTag,a.prototype.mock=a.prototype.mockTypes,a.prototype.pause=a.prototype.pauseLogs,a.prototype.resume=a.prototype.resumeLogs;var p,O=function(){function r(e){y(this,r),this.options=Object.assign({},e),this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}return w(r,[{key:"log",value:function(e){var t=e.level<1?console.__error||console.error:e.level===1&&console.warn?console.__warn||console.warn:console.__log||console.log,o=e.type!=="log"?e.type:"",i=e.tag?e.tag:"",n=this.typeColorMap[e.type]||this.levelColorMap[e.level]||this.defaultColor,l=`
      background: `.concat(n,`;
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `),u="%c".concat([i,o].filter(Boolean).join(":"));typeof e.args[0]=="string"?t.apply(void 0,["".concat(u,"%c ").concat(e.args[0]),l,""].concat(g(e.args.slice(1)))):t.apply(void 0,[u,l].concat(g(e.args)))}}]),r}();return typeof window<"u"&&window.consola||((p=new a({reporters:[new O]})).Consola=a,p.LogLevel=s,p.BrowserReporter=O,p)})})(x);const E=m,R=E.create({level:3});export{I as c,R as l};
