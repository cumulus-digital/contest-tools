!function(){"use strict";var t={9306:function(t,e,n){var r=n(4901),o=n(6823),i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(o(t)+" is not a function")}},8551:function(t,e,n){var r=n(34),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(o(t)+" is not an object")}},9617:function(t,e,n){var r=n(5397),o=n(5610),i=n(6198),a=function(t){return function(e,n,a){var s=r(e),c=i(s);if(0===c)return!t&&-1;var u,f=o(a,c);if(t&&n!=n){for(;c>f;)if((u=s[f++])!=u)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},4527:function(t,e,n){var r=n(3724),o=n(4376),i=TypeError,a=Object.getOwnPropertyDescriptor,s=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,e){if(o(t)&&!a(t,"length").writable)throw new i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4576:function(t,e,n){var r=n(9504),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},7740:function(t,e,n){var r=n(9297),o=n(5031),i=n(7347),a=n(4913);t.exports=function(t,e,n){for(var s=o(e),c=a.f,u=i.f,f=0;f<s.length;f++){var l=s[f];r(t,l)||n&&r(n,l)||c(t,l,u(e,l))}}},6699:function(t,e,n){var r=n(3724),o=n(4913),i=n(6980);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6840:function(t,e,n){var r=n(4901),o=n(4913),i=n(283),a=n(9433);t.exports=function(t,e,n,s){s||(s={});var c=s.enumerable,u=void 0!==s.name?s.name:e;if(r(n)&&i(n,u,s),s.global)c?t[e]=n:a(e,n);else{try{s.unsafe?t[e]&&(c=!0):delete t[e]}catch(t){}c?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return t}},9433:function(t,e,n){var r=n(4475),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},3724:function(t,e,n){var r=n(9039);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(t,e,n){var r=n(4475),o=n(34),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},6837:function(t){var e=TypeError;t.exports=function(t){if(t>9007199254740991)throw e("Maximum allowed index exceeded");return t}},9392:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(t,e,n){var r,o,i=n(4475),a=n(9392),s=i.process,c=i.Deno,u=s&&s.versions||c&&c.version,f=u&&u.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6518:function(t,e,n){var r=n(4475),o=n(7347).f,i=n(6699),a=n(6840),s=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,f,l,p,d,g=t.target,h=t.global,y=t.stat;if(n=h?r:y?r[g]||s(g,{}):r[g]&&r[g].prototype)for(f in e){if(p=e[f],l=t.dontCallGetSet?(d=o(n,f))&&d.value:n[f],!u(h?f:g+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,f,p,t)}}},9039:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},616:function(t,e,n){var r=n(9039);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9565:function(t,e,n){var r=n(616),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},350:function(t,e,n){var r=n(3724),o=n(9297),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,s=o(i,"name"),c=s&&"something"===function(){}.name,u=s&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:s,PROPER:c,CONFIGURABLE:u}},9504:function(t,e,n){var r=n(616),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);t.exports=r?a:function(t){return function(){return i.apply(t,arguments)}}},7751:function(t,e,n){var r=n(4475),o=n(4901);t.exports=function(t,e){return arguments.length<2?(n=r[t],o(n)?n:void 0):r[t]&&r[t][e];var n}},5966:function(t,e,n){var r=n(9306),o=n(4117);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},4475:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){var r=n(9504),o=n(8981),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},421:function(t){t.exports={}},5917:function(t,e,n){var r=n(3724),o=n(9039),i=n(4055);t.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},7055:function(t,e,n){var r=n(9504),o=n(9039),i=n(4576),a=Object,s=r("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?s(t,""):a(t)}:a},3706:function(t,e,n){var r=n(9504),o=n(4901),i=n(7629),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},1181:function(t,e,n){var r,o,i,a=n(8622),s=n(4475),c=n(34),u=n(6699),f=n(9297),l=n(7629),p=n(6119),d=n(421),g="Object already initialized",h=s.TypeError,y=s.WeakMap;if(a||l.state){var v=l.state||(l.state=new y);v.get=v.get,v.has=v.has,v.set=v.set,r=function(t,e){if(v.has(t))throw new h(g);return e.facade=t,v.set(t,e),e},o=function(t){return v.get(t)||{}},i=function(t){return v.has(t)}}else{var m=p("state");d[m]=!0,r=function(t,e){if(f(t,m))throw new h(g);return e.facade=t,u(t,m,e),e},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw new h("Incompatible receiver, "+t+" required");return n}}}},4376:function(t,e,n){var r=n(4576);t.exports=Array.isArray||function(t){return"Array"===r(t)}},4901:function(t){var e="object"==typeof document&&document.all;t.exports=void 0===e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){var r=n(9039),o=n(4901),i=/#|\.prototype\./,a=function(t,e){var n=c[s(t)];return n===f||n!==u&&(o(e)?r(e):!!e)},s=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},4117:function(t){t.exports=function(t){return null==t}},34:function(t,e,n){var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},6395:function(t){t.exports=!1},757:function(t,e,n){var r=n(7751),o=n(4901),i=n(1625),a=n(7040),s=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,s(t))}},6198:function(t,e,n){var r=n(8014);t.exports=function(t){return r(t.length)}},283:function(t,e,n){var r=n(9504),o=n(9039),i=n(4901),a=n(9297),s=n(3724),c=n(350).CONFIGURABLE,u=n(3706),f=n(1181),l=f.enforce,p=f.get,d=String,g=Object.defineProperty,h=r("".slice),y=r("".replace),v=r([].join),m=s&&!o((function(){return 8!==g((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===h(d(e),0,7)&&(e="["+y(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!a(t,"name")||c&&t.name!==e)&&(s?g(t,"name",{value:e,configurable:!0}):t.name=e),m&&n&&a(n,"arity")&&t.length!==n.arity&&g(t,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?s&&g(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=l(t);return a(r,"source")||(r.source=v(b,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return i(this)&&p(this).source||u(this)}),"toString")},741:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},4913:function(t,e,n){var r=n(3724),o=n(5917),i=n(8686),a=n(8551),s=n(6969),c=TypeError,u=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",d="writable";e.f=r?i?function(t,e,n){if(a(t),e=s(e),a(n),"function"==typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=f(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:l in n?n[l]:r[l],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(a(t),e=s(e),a(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){var r=n(3724),o=n(9565),i=n(8773),a=n(6980),s=n(5397),c=n(6969),u=n(9297),f=n(5917),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=s(t),e=c(e),f)try{return l(t,e)}catch(t){}if(u(t,e))return a(!o(i.f,t,e),t[e])}},8480:function(t,e,n){var r=n(1828),o=n(8727).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},3717:function(t,e){e.f=Object.getOwnPropertySymbols},1625:function(t,e,n){var r=n(9504);t.exports=r({}.isPrototypeOf)},1828:function(t,e,n){var r=n(9504),o=n(9297),i=n(5397),a=n(9617).indexOf,s=n(421),c=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,f=[];for(n in r)!o(s,n)&&o(r,n)&&c(f,n);for(;e.length>u;)o(r,n=e[u++])&&(~a(f,n)||c(f,n));return f}},8773:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},4270:function(t,e,n){var r=n(9565),o=n(4901),i=n(34),a=TypeError;t.exports=function(t,e){var n,s;if("string"===e&&o(n=t.toString)&&!i(s=r(n,t)))return s;if(o(n=t.valueOf)&&!i(s=r(n,t)))return s;if("string"!==e&&o(n=t.toString)&&!i(s=r(n,t)))return s;throw new a("Can't convert object to primitive value")}},5031:function(t,e,n){var r=n(7751),o=n(9504),i=n(8480),a=n(3717),s=n(8551),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(s(t)),n=a.f;return n?c(e,n(t)):e}},7750:function(t,e,n){var r=n(4117),o=TypeError;t.exports=function(t){if(r(t))throw new o("Can't call method on "+t);return t}},6119:function(t,e,n){var r=n(5745),o=n(3392),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},7629:function(t,e,n){var r=n(6395),o=n(4475),i=n(9433),a="__core-js_shared__",s=t.exports=o[a]||i(a,{});(s.versions||(s.versions=[])).push({version:"3.37.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},4495:function(t,e,n){var r=n(7388),o=n(9039),i=n(4475).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(t,e,n){var r=n(1291),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5397:function(t,e,n){var r=n(7055),o=n(7750);t.exports=function(t){return r(o(t))}},1291:function(t,e,n){var r=n(741);t.exports=function(t){var e=+t;return e!=e||0===e?0:r(e)}},8014:function(t,e,n){var r=n(1291),o=Math.min;t.exports=function(t){var e=r(t);return e>0?o(e,9007199254740991):0}},8981:function(t,e,n){var r=n(7750),o=Object;t.exports=function(t){return o(r(t))}},2777:function(t,e,n){var r=n(9565),o=n(34),i=n(757),a=n(5966),s=n(4270),c=n(8227),u=TypeError,f=c("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,c=a(t,f);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!o(n)||i(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},6969:function(t,e,n){var r=n(2777),o=n(757);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},6823:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},3392:function(t,e,n){var r=n(9504),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},7040:function(t,e,n){var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){var r=n(3724),o=n(9039);t.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8622:function(t,e,n){var r=n(4475),o=n(4901),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},8227:function(t,e,n){var r=n(4475),o=n(5745),i=n(9297),a=n(3392),s=n(4495),c=n(7040),u=r.Symbol,f=o("wks"),l=c?u.for||u:u&&u.withoutSetter||a;t.exports=function(t){return i(f,t)||(f[t]=s&&i(u,t)?u[t]:l("Symbol."+t)),f[t]}},4114:function(t,e,n){var r=n(6518),o=n(8981),i=n(6198),a=n(4527),s=n(6837);r({target:"Array",proto:!0,arity:1,forced:n(9039)((function(){return 4294967297!==[].push.call({length:4294967296},1)}))||!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}()},{push:function(t){var e=o(this),n=i(e),r=arguments.length;s(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return a(e,n),n}})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n(4114);const r={};class o{background=null;foreground=null;#t=null;constructor(t){r[t]?(this.background=r[t]?.background,this.foreground=r[t]?.foreground):(this.background=("000000"+Math.floor(16777215*Math.random()).toString(16)).slice(-6),this.foreground=(t=>{const e=parseInt(t,16);return.2126*(e>>16&255)+.7152*(e>>8&255)+.0722*(255&e)>140?"000000":"FFFFFF"})(this.background),r[t]={background:this.background,foreground:this.foreground}),this.header=[`%c ${t} `,`background: #${this.background}; color: #${this.foreground}`]}timestamp(){return(new Date)?.toISOString()||(new Date).toUTCString()}resolveMessage(t){let e=t,n=160;return Array.isArray(t)&&t.length>0&&t[0]?.message&&t[0]?.headerLength&&(e=t[0].message,n=t[0].headerLength),{message:e,headerLength:n}}smallString(t,e=160){return t?(t instanceof Element?t.innerHTML:t.toString()).substring(0,e):t}displayHeader(t,e,n=160){let r=[...this.header,{debug:"🐞",info:"ℹ️",warn:"🚸",error:"🚨"}?.[t]];e&&(Array.isArray(e)?r.push(this.smallString(e.map((t=>"string"!=typeof t?JSON.stringify(t):t)).join(" || "),n)):r.push(this.smallString(e,n))),window.console.groupCollapsed.apply(window.console,r)}displayFooter(){window.console.debug("TIMESTAMP:",this.timestamp()),window.console.trace(),window.console.groupEnd()}logMessage(t,e,n=160){if("object"!=typeof console||!console.groupCollapsed)return!1;try{(window?._CMLS?.debug||/(1|true|yes)/i.test(window?.sessionStorage?.getItem("cmlsDebug"))||window.location.search.includes("cmlsDebug"))&&(this.displayHeader(t,e,n),n!==1/0&&window.console.debug(e),this.displayFooter())}catch(t){try{window.console.debug(t,e)}catch(t){}}}info(...t){let{message:e,headerLength:n}=this.resolveMessage(t);this.logMessage("info",e,n)}debug(...t){let{message:e,headerLength:n}=this.resolveMessage(t);this.logMessage("debug",e,n)}warn(...t){let{message:e,headerLength:n}=this.resolveMessage(t);this.logMessage("warn",e,n)}error(...t){let{message:e,headerLength:n}=this.resolveMessage(t);this.logMessage("error",e,n)}}!function(t,e){const n=new o("CONTEST");function r(t){t.freestar&&t.freestar.config&&(t.freestar.config.disabledProducts=t.freestar.config.disabledProducts||{},t.freestar.config.disabledProducts.sideWall=!0)}r(e.self),r(e.parent),r(e.top),e.addthis&&(n.info("Hiding AddThis"),e.addthis.layers((function(t){t.destroy()}))),e.NO_ADDTHIS_HERE=!0,e.parent.NO_ADDTHIS_HERE=e.NO_ADDTHIS_HERE;const i=e.self.document,a=t("body",i).hasClass("is-fse-theme"),s=t("#CMLS_CONTEST",i);if(!s.length)return void n.warn({message:'You must add id="CMLS_CONTEST" to the script tag which loads this library!',headerLength:1/0});s.parent().addClass("cmls-entry-content"),s.parent().parent().addClass("cmls-entry"),s.parent().parent().parent().addClass("cmls-entry-wrapper"),s.closest(".wrapper-content, .express-group-content").addClass("cmls-wrapper-content"),a?(s.parentsUntil(".wp-site-blocks").last().addClass("cmls-wrapper-content"),t(".cmls-entry-wrapper").parentsUntil(".wp-site-blocks").addClass("CMLS_CCC")):s.parentsUntil(".wrapper-content",".column,.row,.block-type-content").addClass("CMLS_CCC"),n.info("Added content classes.");const c=s.attr("data-google-analytics-id");function u(r){if(i.getElementById("iFrameResizer4210"))return void n.info("Already injected iframeResizer");r||(r=1),r>30&&n.warn(`No iframes which need resizing were found in ${r} rounds`);const o=t(`.cmls-entry-content iframe[src]:not('${['[src*="facebook.com"]','[src*="youtube"]','[src*="syndirect"]',".twitter-timeline",".isoframe-template",".isoframe-processed"].join(",")}')`);if(!o.length)return n.info(`No iframes which need resizing found in round ${r}`),void setTimeout((function(){u(r+1)}),1e3);const a=i.createElement("script");a.onload=function(){n.info("Setting up iFrameResizer"),i.defaultView.contestIframeResizerObject=[],o.each((function(){n.info("Attaching iFrameResizer to iframe",this),e.contestIframeResizerObject.push(e.iFrameResize({log:!(!e._CMLS||!e._CMLS.debug)&&e._CMLS.debug,checkOrigin:!1,heightCalculationMethod:"lowestElement",tolerance:5,onInit:function(e){const n=t(e);n.attr("init",!0),n.trigger("cmls-ifr-init"),t(i).trigger("cmls-ifr-init")}},this))}))},a.id="iFrameResizer4210",a.src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.min.js",i.body.appendChild(a)}var f,l,p,d,g,h;c?(r=>{function o(){e.dataLayer.push(arguments)}r?(e.dataLayer=e.dataLayer||[],o("js",new Date),o("config",r),t("<script />",{id:"CMLS_CONTEST_GA",async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(r)}).appendTo(i.body),n.info("GA Installed",r)):n.warn("No Google Analytics ID provided.")})(c):n.info("GA ID not provided."),t((function(){u(1)})),e.History&&e.History.Adapter&&e.History.Adapter.bind(e,"statechange",(function t(){e.contestIframeResizerObject&&e.contestIframeResizerObject.forEach((function(t){t.iframeResizer.close()})),e.History&&e.History.adapter&&e.History.Adapter.unbind(e,"statechange",t)})),t((function(){t(".bit-widget-initializer").length&&t('<script src="https://widget.bandsintown.com/main.min.js"><\/script>').appendTo("body")})),t.fn.expireReplace=function(t,e){"[object Date]"!==Object.prototype.toString.call(t)&&(t=new Date(Date.parse(t))),t instanceof Date&&!isNaN(t.getTime())?Date.now()>t&&this.html(e):n.warn("Supplied expireReplace timestamp is an invalid date.",t,t instanceof Date)},e.twttr||(e.twttr=(l="script",p="twitter-wjs",g=(f=i).getElementsByTagName(l)[0],h=e.twttr||{},f.getElementById(p)||((d=f.createElement(l)).id=p,d.src="https://platform.twitter.com/widgets.js",g.parentNode.insertBefore(d,g),h._e=[],h.ready=function(t){h._e.push(t)}),h)),function(t,e,n){var r,o=t.getElementsByTagName(e)[0];t.getElementById(n)||((r=t.createElement(e)).id=n,r.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0",o.parentNode.insertBefore(r,o))}(i,"script","facebook-jssdk")}(jQuery,window.self)}();