!function(e,t,n){function i(){if("object"==typeof console&&console.log){var e=new Date;e=e.toISOString()?e.toISOString():e.toUTCString(),console.log("[CMLS Contesting]",e,[].slice.call(arguments))}}function a(n){var r;if(n||(n=1),n>30)i("No iframes which need resizing were found in "+n+" rounds.");else if(e('.CMLS_CCC .entry-content iframe:not(\'[src*="facebook.com"],[src*="youtube"],[src*="synredirect"],.twitter-timeline\')').length){if(t.document.getElementById("iframeResizer4210"))return void i("Already injected iframeResizer");var o="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.min.js",s=t.document.createElement("script");s.onload=function(){i("Setting up iframe-resizer library.");var n=e('.CMLS_CCC .entry-content iframe:not(\'[src*="facebook.com"],[src*="youtube"],[src*="synredirect"],.twitter-timeline\')'),a=-1!==navigator.userAgent.indexOf("MSIE");t.contestIframeResizerObject=[],e(n.each((function(){i("Attaching iFrameResizer to post iframe.",this),t.contestIframeResizerObject.push(t.iFrameResize({log:!(!t._CMLS||!t._CMLS.debug)&&t._CMLS.debug,checkOrigin:!1,heightCalculationMethod:a?"max":"lowestElement",tolerance:5,initCallback:function(t){e(t).trigger("cmls-ifr-init")}},this))})))},s.id="iframeResizer4210",s.src=o,t.document.body.appendChild(s)}else i("No iframes which need resizing found in round "+n),setTimeout((function(){a(n+1)}),1e3)}function r(){t.contestIframeResizerObject&&e(t.contestIframeResizerObject).each((function(){this.iframeResizer.close()})),t.History&&t.History.Adapter&&t.Histroy.Adapter.unbind(t,"statechange",r)}var o=e("#CMLS_CONTEST");if(!o.length)return i('You must add id="CMLS_CONTEST" to the script tag which loads this library!'),!1;o.parentsUntil(".wrapper-content",".column,.row,.block-type-content").addClass("CMLS_CCC"),i("Added CMLS_CCC class to parent containers."),t._CMLS=t._CMLS||{};var s=o.attr("data-google-analytics-id"),c,l,d,m,g,f;s&&(i("Installing Google Analytics",s),t._CMLS.installGoogleAnalytics=function e(n){var i,a,r,o,s,c,l;n&&(i=t,a=document,r="script",o="//www.google-analytics.com/analytics.js",s="ga",i.GoogleAnalyticsObject=s,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,c=a.createElement(r),l=a.getElementsByTagName(r)[0],c.async=1,c.src=o,l.parentNode.insertBefore(c,l),ga("create",n,"auto",{name:"contestTracker"}),ga("contestTracker.send","pageview"))},t._CMLS.installGoogleAnalytics(s)),t.addthis&&(i("Hiding AddThis."),t.addthis.layers((function(e){e.destroy()}))),t.NO_ADDTHIS_HERE=!0,t.parent.NO_ADDTHIS_HERE=t.NO_ADDTHIS_HERE,e((function(){a(1)})),t.History&&t.History.Adapter&&t.History.Adapter.bind(t,"statechange",r),e((function(){e(".bit-widget-initializer").length&&e('<script src="https://widget.bandsintown.com/main.min.js"><\/script>').appendTo("body")})),e.fn.expireReplace=function(e,t){"[object Date]"!==Object.prototype.toString.call(e)&&(e=new Date(Date.parse(e))),e instanceof Date&&!isNaN(e.getTime())?Date.now()>e&&this.html(t):i("Supplied expireReplace timestamp is an invalid date.",e,e instanceof Date)},c=document,l="script",d="twitter-wjs",g=c.getElementsByTagName(l)[0],f=/^http:/.test(c.location)?"http":"https",c.getElementById(d)||((m=c.createElement(l)).id=d,m.src=f+"://platform.twitter.com/widgets.js",g.parentNode.insertBefore(m,g)),function(e,t,n){var i,a=e.getElementsByTagName(t)[0];e.getElementById(n)||((i=e.createElement(t)).id=n,i.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1",a.parentNode.insertBefore(i,a))}(document,"script","facebook-jssdk")}(jQuery,window.self);
//# sourceMappingURL=base.js.map