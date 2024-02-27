(()=>{"use strict";const e={};class t{background=null;foreground=null;#e=null;constructor(t){e[t]?(this.background=e[t]?.background,this.foreground=e[t]?.foreground):(this.background=("000000"+Math.floor(16777215*Math.random()).toString(16)).slice(-6),this.foreground=(e=>{const t=parseInt(e,16);return.2126*(t>>16&255)+.7152*(t>>8&255)+.0722*(t>>0&255)>140?"000000":"FFFFFF"})(this.background),e[t]={background:this.background,foreground:this.foreground}),this.header=[`%c ${t} `,`background: #${this.background}; color: #${this.foreground}`]}timestamp(){return(new Date)?.toISOString()||(new Date).toUTCString()}resolveMessage(e){let t=e,n=160;return Array.isArray(e)&&e.length>0&&e[0]?.message&&e[0]?.headerLength&&(t=e[0].message,n=e[0].headerLength),{message:t,headerLength:n}}smallString(e,t=160){return e?(e instanceof Element?e.innerHTML:e.toString()).substring(0,t):e}displayHeader(e,t,n=160){let s=[...this.header,{debug:"🐞",info:"ℹ️",warn:"🚸",error:"🚨"}?.[e]];t&&(Array.isArray(t)?s.push(this.smallString(t.map((e=>"string"!=typeof e?JSON.stringify(e):e)).join(" || "),n)):s.push(this.smallString(t,n))),window.console.groupCollapsed.apply(window.console,s)}displayFooter(){window.console.debug("TIMESTAMP:",this.timestamp()),window.console.trace(),window.console.groupEnd()}logMessage(e,t,n=160){if("object"!=typeof console||!console.groupCollapsed)return!1;try{(window?._CMLS?.debug||/(1|true|yes)/i.test(window?.sessionStorage?.getItem("cmlsDebug"))||window.location.search.includes("cmlsDebug"))&&(this.displayHeader(e,t,n),n!==1/0&&window.console.debug(t),this.displayFooter())}catch(e){try{window.console.debug(e,t)}catch(e){}}}info(...e){let{message:t,headerLength:n}=this.resolveMessage(e);this.logMessage("info",t,n)}debug(...e){let{message:t,headerLength:n}=this.resolveMessage(e);this.logMessage("debug",t,n)}warn(...e){let{message:t,headerLength:n}=this.resolveMessage(e);this.logMessage("warn",t,n)}error(...e){let{message:t,headerLength:n}=this.resolveMessage(e);this.logMessage("error",t,n)}}!function(e,n,s){n._CMLS=n._CMLS||{};const o=new t("CONTEST"),i=n.self.document;e("body",i),n._CMLS.installGoogleAnalytics=function(t){function s(){n.dataLayer.push(arguments)}t?n.top===n.self?(n.dataLayer=n.dataLayer||[],s("js",new Date),s("config",t),e("<script />",{id:"CMLS_CONTEST_GA",async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(t)}).appendTo(i.body),o.info("GA Installed",t)):o.info("Contest is embedded, not installing Google Analytics again."):o.warn("No Google Analytics ID provided.")},e.fn.expireReplace=function(e,t){"[object Date]"!==Object.prototype.toString.call(e)&&(e=new Date(Date.parse(e))),e instanceof Date&&!isNaN(e.getTime())?Date.now()>e&&this.text(t):o.warn("Supplied expireReplace timestamp is an invalid date.",e,e instanceof Date)},e((()=>{if(o.info("Initializing Engage-level scripting!"),e.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.contentWindow.min.js"),n.self.name.indexOf("contestpreview-container")>-1)return void o.info("This is a preview, will not run engage-level scripting.");const t=e("#CMLS_CONTEST",i);if(!t.length)return void o.error('You must add id="CMLS_CONTEST" to the script tag which loads this library!');e("#fancyrules").on("click",(function(){"parentIFrame"in n&&n.parentIFrame.scrollToOffset(0,0)})),e('a[href*="bandsintown.com"],a.bit-widget-initializer').length&&(o.info("Adding Bands in Town widget script"),e.getScript("https://widget.bandsintown.com/main.min.js"));const s=t.attr("data-google-analytics-id");var r,a,l,g,d,c;s?n._CMLS.installGoogleAnalytics(s):o.info("No GA ID provided."),n.twttr||(n.twttr=(a="script",l="twitter-wjs",d=(r=i).getElementsByTagName(a)[0],c=n.twttr||{},r.getElementById(l)||((g=r.createElement(a)).id=l,g.src="https://platform.twitter.com/widgets.js",d.parentNode.insertBefore(g,d),c._e=[],c.ready=function(e){c._e.push(e)}),c)),function(e,t,n){var s,o=e.getElementsByTagName(t)[0];e.getElementById(n)||((s=e.createElement(t)).id=n,s.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0",o.parentNode.insertBefore(s,o))}(i,"script","facebook-jssdk")}))}(jQuery,window.self)})();