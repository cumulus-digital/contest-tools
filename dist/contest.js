!function(){"use strict";const e={};class t{background=null;foreground=null;#e=null;constructor(t){var n,o;e[t]?(this.background=null===(n=e[t])||void 0===n?void 0:n.background,this.foreground=null===(o=e[t])||void 0===o?void 0:o.foreground):(this.background=("000000"+Math.floor(16777215*Math.random()).toString(16)).slice(-6),this.foreground=(e=>{const t=parseInt(e,16);return.2126*(t>>16&255)+.7152*(t>>8&255)+.0722*(t>>0&255)>140?"000000":"FFFFFF"})(this.background),e[t]={background:this.background,foreground:this.foreground}),this.header=[`%c ${t} `,`background: #${this.background}; color: #${this.foreground}`]}timestamp(){var e;return(null===(e=new Date)||void 0===e?void 0:e.toISOString())||(new Date).toUTCString()}resolveMessage(e){var t,n;let o=e,i=160;return Array.isArray(e)&&e.length>0&&null!==(t=e[0])&&void 0!==t&&t.message&&null!==(n=e[0])&&void 0!==n&&n.headerLength&&(o=e[0].message,i=e[0].headerLength),{message:o,headerLength:i}}smallString(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;return e?(e instanceof Element?e.innerHTML:e.toString()).substring(0,t):e}displayHeader(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:160;const o={debug:"🐞",info:"ℹ️",warn:"🚸",error:"🚨"};let i=[...this.header,null==o?void 0:o[e]];t&&(Array.isArray(t)?i.push(this.smallString(t.map((e=>"string"!=typeof e?JSON.stringify(e):e)).join(" || "),n)):i.push(this.smallString(t,n))),window.console.groupCollapsed.apply(window.console,i)}displayFooter(){window.console.debug("TIMESTAMP:",this.timestamp()),window.console.trace(),window.console.groupEnd()}logMessage(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:160;if("object"!=typeof console||!console.groupCollapsed)return!1;try{var o,i,r,s;(null!==(o=window)&&void 0!==o&&null!==(i=o._CMLS)&&void 0!==i&&i.debug||/(1|true|yes)/i.test(null===(r=window)||void 0===r||null===(s=r.sessionStorage)||void 0===s?void 0:s.getItem("cmlsDebug"))||window.location.search.includes("cmlsDebug"))&&(this.displayHeader(e,t,n),n!==1/0&&window.console.debug(t),this.displayFooter())}catch(e){window.console.debug(e,t)}}info(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let{message:o,headerLength:i}=this.resolveMessage(t);this.logMessage("info",o,i)}debug(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let{message:o,headerLength:i}=this.resolveMessage(t);this.logMessage("debug",o,i)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let{message:o,headerLength:i}=this.resolveMessage(t);this.logMessage("warn",o,i)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let{message:o,headerLength:i}=this.resolveMessage(t);this.logMessage("error",o,i)}}!function(e,n,o){n._CMLS=n._CMLS||{};const i=new t("CONTEST"),r=n.self.document;e("body",r),n._CMLS.installGoogleAnalytics=function(t){function o(){n.dataLayer.push(arguments)}t?n.top===n.self?(n.dataLayer=n.dataLayer||[],o("js",new Date),o("config",t,{cookie_prefix:"cmls_contest"}),e("<script />",{id:"CMLS_CONTEST_GA",async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(t)}).appendTo(r.body),i.info("GA Installed",t)):i.info("Contest is embedded, not installing Google Analytics again."):i.warn("No Google Analytics ID provided.")},e.fn.expireReplace=function(e,t){"[object Date]"!==Object.prototype.toString.call(e)&&(e=new Date(Date.parse(e))),e instanceof Date&&!isNaN(e.getTime())?Date.now()>e&&this.text(t):i.warn("Supplied expireReplace timestamp is an invalid date.",e,e instanceof Date)},e((()=>{if(i.info("Initializing Engage-level scripting!"),e.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.contentWindow.min.js"),n.self.name.indexOf("contestpreview-container")>-1)return void i.info("This is a preview, will not run engage-level scripting.");const t=e("#CMLS_CONTEST",r);if(!t.length)return void i.error('You must add id="CMLS_CONTEST" to the script tag which loads this library!');e("#fancyrules").on("click",(function(){"parentIFrame"in n&&n.parentIFrame.scrollToOffset(0,0)})),e('a[href*="bandsintown.com"],a.bit-widget-initializer').length&&(i.info("Adding Bands in Town widget script"),e.getScript("https://widget.bandsintown.com/main.min.js"));const o=t.attr("data-google-analytics-id");var s,a,l,d,g,c;o?n._CMLS.installGoogleAnalytics(o):i.info("No GA ID provided."),n.twttr||(n.twttr=(a="script",l="twitter-wjs",g=(s=r).getElementsByTagName(a)[0],c=n.twttr||{},s.getElementById(l)||((d=s.createElement(a)).id=l,d.src="https://platform.twitter.com/widgets.js",g.parentNode.insertBefore(d,g),c._e=[],c.ready=function(e){c._e.push(e)}),c)),function(e,t,n){var o,i=e.getElementsByTagName(t)[0];e.getElementById(n)||((o=e.createElement(t)).id=n,o.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0",i.parentNode.insertBefore(o,i))}(r,"script","facebook-jssdk")}))}(jQuery,window.self)}();