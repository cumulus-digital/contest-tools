!function(e,t,n){function i(){if("object"==typeof console&&console.log){var e=new Date;e=e.toISOString()?e.toISOString():e.toUTCString(),console.log("[CMLS Contesting]",e,[].slice.call(arguments))}}function o(n){var r;if(n||(n=1),n>30)i("No iframes which need resizing were found in "+n+" rounds.");else if(e('.CMLS_CCC .entry-content iframe:not(\'[src*="facebook.com"],[src*="youtube"],[src*="synredirect"],.twitter-timeline\')').length){if(t.document.getElementById("iframeResizer4210"))return void i("Already injected iframeResizer");var a="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.min.js",s=t.document.createElement("script");s.onload=function(){i("Setting up iframe-resizer library.");var n=e('.CMLS_CCC .entry-content iframe:not(\'[src*="facebook.com"],[src*="youtube"],[src*="synredirect"],.twitter-timeline\')'),o=-1!==navigator.userAgent.indexOf("MSIE");t.contestIframeResizerObject=[],e(n.each((function(){i("Attaching iFrameResizer to post iframe.",this),t.contestIframeResizerObject.push(t.iFrameResize({log:!(!t._CMLS||!t._CMLS.debug)&&t._CMLS.debug,checkOrigin:!1,heightCalculationMethod:o?"max":"lowestElement",tolerance:5,onInit:function(t){e(t).trigger("cmls-ifr-init")}},this))})))},s.id="iframeResizer4210",s.src=a,t.document.body.appendChild(s)}else i("No iframes which need resizing found in round "+n),setTimeout((function(){o(n+1)}),1e3)}function r(){t.contestIframeResizerObject&&e(t.contestIframeResizerObject).each((function(){this.iframeResizer.close()})),t.History&&t.History.Adapter&&t.Histroy.Adapter.unbind(t,"statechange",r)}var a=t.document.body.classList,s=null;for(var c in a)if(a[c].indexOf("postid-")>-1){s=parseInt(a[c].substr(7));break}if(!s||isNaN(s))return console.log("Could not find postid class!"),!1;var l=e(".wrapper-content article#post-"+s);l.length?(l.parentsUntil(".wrapper-content",".column,.row,.block-type-content").addClass("CMLS_CCC"),i("Added CMLS_CCC class to parent containers.")):i("Could not determine parent container!"),t._CMLS=t._CMLS||{};var d=e("#CMLS_CONTEST").attr("data-google-analytics-id"),m,f,g,p,u,y;d&&(i("Installing Google Analytics",d),t._CMLS.installGoogleAnalytics=function e(n){n&&(!function(e,t,n,i,o,r,a){e.GoogleAnalyticsObject=o,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,r=t.createElement(n),a=t.getElementsByTagName(n)[0],r.async=1,r.src=i,a.parentNode.insertBefore(r,a)}(t,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create",n,"auto",{name:"contestTracker"}),ga("contestTracker.send","pageview"))},t._CMLS.installGoogleAnalytics(d)),t.addthis&&(i("Hiding AddThis."),t.addthis.layers((function(e){e.destroy()}))),t.NO_ADDTHIS_HERE=!0,t.parent.NO_ADDTHIS_HERE=t.NO_ADDTHIS_HERE,e((function(){o(1)})),t.History&&t.History.Adapter&&t.History.Adapter.bind(t,"statechange",r),e((function(){e(".bit-widget-initializer").length&&e('<script src="https://widget.bandsintown.com/main.min.js"><\/script>').appendTo("body")})),e.fn.expireReplace=function(e,t){"[object Date]"!==Object.prototype.toString.call(e)&&(e=new Date(Date.parse(e))),e instanceof Date&&!isNaN(e.getTime())?Date.now()>e&&this.html(t):i("Supplied expireReplace timestamp is an invalid date.",e,e instanceof Date)},m=document,f="script",g="twitter-wjs",u=m.getElementsByTagName(f)[0],y=/^http:/.test(m.location)?"http":"https",m.getElementById(g)||((p=m.createElement(f)).id=g,p.src=y+"://platform.twitter.com/widgets.js",u.parentNode.insertBefore(p,u)),function(e,t,n){var i,o=e.getElementsByTagName(t)[0];e.getElementById(n)||((i=e.createElement(t)).id=n,i.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1",o.parentNode.insertBefore(i,o))}(document,"script","facebook-jssdk")}(jQuery,window.self);
//# sourceMappingURL=base.js.map