(()=>{"use strict";!function(t,e,n){e._CMLS=e._CMLS||{};const o=e.document;t((()=>{var n,a,i,s,c,l;t("body.contest-sweeps,body.contest-ugc").length<1||(t("#CMLS_CONTEST",o).length?(t("#fancyrules").on("click",(function(){"parentIFrame"in e&&e.parentIFrame.scrollToOffset(0,0)})),t('a[href*="bandsintown.com"],a.bit-widget-initializer').length&&t.getScript("https://widget.bandsintown.com/main.min.js"),a="script",i="twitter-wjs",c=(n=document).getElementsByTagName(a)[0],l=/^http:/.test(n.location)?"http":"https",n.getElementById(i)||((s=n.createElement(a)).id=i,s.src=l+"://platform.twitter.com/widgets.js",c.parentNode.insertBefore(s,c))):log.error('You must add id="CMLS_CONTEST" to the script tag which loads this library!'))})),e._CMLS.installGoogleAnalytics=t=>{if(!t)return void console.warn("No Google Analytics ID provided.");if(e.top!==e.self)return void console.log("Contest is embedded, not installing Google Analytics again.");const n=o.createElement("script");n.async="async",n.scr="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(t),n.onload=function(){function n(){e.dataLayer.push(arguments)}e.dataLayer=e.dataLayer||[],n("js",new Date),n("config",t,{cookie_prefix:"cmls_contest"})},o.body.appendChild(n)};const a=$BASETAG.attr("data-google-analytics-id");a&&e._CMLS.installGoogleAnalytics(a),t.fn.expireReplace=function(t,e){"[object Date]"!==Object.prototype.toString.call(t)&&(t=new Date(Date.parse(t))),t instanceof Date&&!isNaN(t.getTime())?Date.now()>t&&this.text(e):log("Supplied expireReplace timestamp is an invalid date.",t,t instanceof Date)}}(jQuery,window.self)})();