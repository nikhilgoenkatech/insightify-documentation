(()=>{"use strict";var e,a,t,r,f,c={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=c,o.c=d,e=[],o.O=(a,t,r,f)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],f=e[i][2];for(var d=!0,b=0;b<t.length;b++)(!1&f||c>=f)&&Object.keys(o.O).every((e=>o.O[e](t[b])))?t.splice(b--,1):(d=!1,f<c&&(c=f));if(d){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,r,f]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);o.r(f);var c={};a=a||[null,t({}),t([]),t(t)];for(var d=2&r&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,o.d(f,c),f},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,t)=>(o.f[t](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",194:"afc6ef0c",668:"231d16b1",948:"8717b14a",1359:"df32fbaa",1418:"c734114a",1914:"d9f32620",2122:"96ec9f16",2267:"59362658",2269:"ffdfdbb5",2278:"01df2f6c",2362:"e273c56f",2535:"814f3328",2538:"20c9caf7",2859:"18c41134",3085:"1f391b9e",3089:"a6aa9e1f",3270:"25f2d6bb",3335:"0c374a1a",3514:"73664a40",3608:"9e4087bc",3792:"dff1c289",4013:"01a85c17",4193:"f55d3e7a",4195:"c4f5d8e4",4607:"533a09ca",5247:"9a983e29",5445:"05c6a855",5589:"5c868d36",5649:"395cb9a5",5969:"a5d93ccf",6103:"ccc49370",6328:"9c40dc80",6504:"822bd8ab",6697:"b1c46091",6755:"e44a2883",7414:"393be207",7724:"e8dba0d2",7918:"17896441",7932:"adc6a273",8610:"6875c492",8636:"f4f34a3a",8818:"1e4232ab",9003:"925b3f96",9514:"1be78505",9547:"581c3b57",9642:"7661071f",9671:"0e384e19",9817:"14eb3368",9852:"7485ae2a"}[e]||e)+"."+{53:"6168fcf7",194:"2e31ce60",210:"286dfe73",668:"0c2cc374",948:"1c2c2877",1359:"6b6b095d",1418:"85232acc",1914:"2553e9d5",2122:"4c13d39d",2267:"8bb89454",2269:"f12895e5",2278:"cd6b2b14",2362:"28ad9652",2529:"24c77ddc",2535:"a979ce4a",2538:"4984a0fd",2859:"7da491da",3085:"10175342",3089:"94ee07a1",3270:"9b1c8b8e",3335:"0dae8ea8",3514:"397c0083",3608:"2b335d43",3792:"e6991e8c",4013:"32314bd6",4193:"7aaa6acb",4195:"fb2abc61",4607:"9ac657a1",4972:"8f54bb02",5247:"2ee1070a",5445:"5ad3c729",5589:"ac7a6a39",5649:"0ac473b0",5969:"bacfb275",6103:"70628cfd",6328:"0bbad6fa",6504:"9654b4b9",6697:"7c8b64c7",6755:"55b98b18",7414:"67d7cb0c",7724:"cc8d3f11",7918:"fa83987c",7932:"a8d91944",8610:"a4e31e73",8636:"d92482f3",8818:"a35595b1",9003:"0a8263f5",9514:"5933e813",9547:"1d37556f",9642:"c40557ac",9671:"acbc3dd0",9817:"1ff7bebc",9852:"ab436afd"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},f="dt-adoptionoverview-extension:",o.l=(e,a,t,c)=>{if(r[e])r[e].push(a);else{var d,b;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+t){d=u;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",f+t),d.src=e),r[e]=[a];var l=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var f=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),f&&f.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/dt-adoptionoverview-extension/",o.gca=function(e){return e={17896441:"7918",59362658:"2267","935f2afb":"53",afc6ef0c:"194","231d16b1":"668","8717b14a":"948",df32fbaa:"1359",c734114a:"1418",d9f32620:"1914","96ec9f16":"2122",ffdfdbb5:"2269","01df2f6c":"2278",e273c56f:"2362","814f3328":"2535","20c9caf7":"2538","18c41134":"2859","1f391b9e":"3085",a6aa9e1f:"3089","25f2d6bb":"3270","0c374a1a":"3335","73664a40":"3514","9e4087bc":"3608",dff1c289:"3792","01a85c17":"4013",f55d3e7a:"4193",c4f5d8e4:"4195","533a09ca":"4607","9a983e29":"5247","05c6a855":"5445","5c868d36":"5589","395cb9a5":"5649",a5d93ccf:"5969",ccc49370:"6103","9c40dc80":"6328","822bd8ab":"6504",b1c46091:"6697",e44a2883:"6755","393be207":"7414",e8dba0d2:"7724",adc6a273:"7932","6875c492":"8610",f4f34a3a:"8636","1e4232ab":"8818","925b3f96":"9003","1be78505":"9514","581c3b57":"9547","7661071f":"9642","0e384e19":"9671","14eb3368":"9817","7485ae2a":"9852"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,t)=>{var r=o.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((t,f)=>r=e[a]=[t,f]));t.push(r[2]=f);var c=o.p+o.u(a),d=new Error;o.l(c,(t=>{if(o.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var f=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+f+": "+c+")",d.name="ChunkLoadError",d.type=f,d.request=c,r[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,t)=>{var r,f,c=t[0],d=t[1],b=t[2],n=0;if(c.some((a=>0!==e[a]))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(b)var i=b(o)}for(a&&a(t);n<c.length;n++)f=c[n],o.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return o.O(i)},t=self.webpackChunkdt_adoptionoverview_extension=self.webpackChunkdt_adoptionoverview_extension||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();