!function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const t={};var n=new WeakMap;class o{constructor(o){var r,i,s,a;e(this,"background",null),e(this,"foreground",null),a={writable:!0,value:null},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,s=n),s.set(this,a),t[o]?(this.background=null===(r=t[o])||void 0===r?void 0:r.background,this.foreground=null===(i=t[o])||void 0===i?void 0:i.foreground):(this.background=("000000"+Math.floor(16777215*Math.random()).toString(16)).slice(-6),this.foreground=(e=>{const t=parseInt(e,16);return.2126*(t>>16&255)+.7152*(t>>8&255)+.0722*(t>>0&255)>140?"000000":"FFFFFF"})(this.background),t[o]={background:this.background,foreground:this.foreground}),this.header=[`%c ${o} `,`background: #${this.background}; color: #${this.foreground}`]}timestamp(){var e;return(null===(e=new Date)||void 0===e?void 0:e.toISOString())||(new Date).toUTCString()}resolveMessage(e){var t,n;let o=e,r=160;return Array.isArray(e)&&e.length>0&&null!==(t=e[0])&&void 0!==t&&t.message&&null!==(n=e[0])&&void 0!==n&&n.headerLength&&(o=e[0].message,r=e[0].headerLength),{message:o,headerLength:r}}smallString(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;return e?(e instanceof Element?e.innerHTML:e.toString()).substring(0,t):e}displayHeader(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:160;const o={debug:"🐞",info:"ℹ️",warn:"🚸",error:"🚨"};let r=[...this.header,null==o?void 0:o[e]];t&&(Array.isArray(t)?r.push(this.smallString(t.map((e=>"string"!=typeof e?JSON.stringify(e):e)).join(" || "),n)):r.push(this.smallString(t,n))),window.top.console.groupCollapsed.apply(window.top.console,r)}displayFooter(){window.top.console.debug("TIMESTAMP:",this.timestamp()),window.top.console.trace(),window.top.console.groupEnd()}logMessage(e,t){var n,o;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:160;if("object"!=typeof console||!console.groupCollapsed)return!1;(null!==(n=window)&&void 0!==n&&null!==(o=n._CMLS)&&void 0!==o&&o.debug||/(1|true|yes)/i.test(window.sessionStorage.getItem("cmlsDebug")))&&(this.displayHeader(e,t,r),r!==1/0&&window.top.console.debug(t),this.displayFooter())}info(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let{message:o,headerLength:r}=this.resolveMessage(t);this.logMessage("info",o,r)}debug(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let{message:o,headerLength:r}=this.resolveMessage(t);this.logMessage("debug",o,r)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let{message:o,headerLength:r}=this.resolveMessage(t);this.logMessage("warn",o,r)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let{message:o,headerLength:r}=this.resolveMessage(t);this.logMessage("error",o,r)}}!function(e,t,n){t._CMLS=t._CMLS||{};const r=new o("CONTEST"),i=t.self.document;e("body",i),t._CMLS.installGoogleAnalytics=function(e){if(!e)return void r.warn("No Google Analytics ID provided.");if(t.top!==t.self)return void r.info("Contest is embedded, not installing Google Analytics again.");const n=i.createElement("script");n.async="async",n.scr="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(e),n.onload=function(){function n(){t.dataLayer.push(arguments)}t.dataLayer=t.dataLayer||[],n("js",new Date),n("config",e,{cookie_prefix:"cmls_contest"})},i.body.appendChild(n),r.info("GA Installed",e)},e.fn.expireReplace=function(e,t){"[object Date]"!==Object.prototype.toString.call(e)&&(e=new Date(Date.parse(e))),e instanceof Date&&!isNaN(e.getTime())?Date.now()>e&&this.text(t):r.warn("Supplied expireReplace timestamp is an invalid date.",e,e instanceof Date)},e((()=>{if(r.info("Initializing Engage-level scripting!"),e.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.contentWindow.min.js"),t.self.name.indexOf("contestpreview-container")>-1)return void r.info("This is a preview, will not run engage-level scripting.");const n=e("#CMLS_CONTEST",i);if(!n.length)return void r.error('You must add id="CMLS_CONTEST" to the script tag which loads this library!');e("#fancyrules").on("click",(function(){"parentIFrame"in t&&t.parentIFrame.scrollToOffset(0,0)})),e('a[href*="bandsintown.com"],a.bit-widget-initializer').length&&e.getScript("https://widget.bandsintown.com/main.min.js");const o=n.attr("data-google-analytics-id");var s,a,l,d,g,c;o?t._CMLS.installGoogleAnalytics(o):r.info("No GA ID provided."),t.twttr||(t.twttr=(a="script",l="twitter-wjs",g=(s=i).getElementsByTagName(a)[0],c=t.twttr||{},s.getElementById(l)||((d=s.createElement(a)).id=l,d.src="https://platform.twitter.com/widgets.js",g.parentNode.insertBefore(d,g),c._e=[],c.ready=function(e){c._e.push(e)}),c)),function(e,t,n){var o,r=e.getElementsByTagName(t)[0];e.getElementById(n)||((o=e.createElement(t)).id=n,o.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0",r.parentNode.insertBefore(o,r))}(i,"script","facebook-jssdk")}))}(jQuery,window.self)}();