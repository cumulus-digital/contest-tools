!function($,e,t){function n(){if("object"==typeof console&&console.log){var e=new Date;e=e.toISOString()?e.toISOString():e.toUTCString(),console.log("[CMLS Contesting]",e,[].slice.call(arguments))}}function i(){e.contestIframeResizerObject&&$(e.contestIframeResizerObject).each(function(){this.iframeResizer.close()}),e.History&&e.History.Adapter&&e.Histroy.Adapter.unbind(e,"statechange",i)}var o=$("#CMLS_CONTEST");if(!o.length)return n('You must add id="CMLS_CONTEST" to the script tag which loads this library!'),!1;o.parentsUntil(".wrapper-content",".column,.row,.block-type-content").addClass("CMLS_CCC"),n("Added CMLS_CCC class to parent containers."),e._CMLS=e._CMLS||{};var a=o.attr("data-google-analytics-id");a&&(n("Installing Google Analytics",a),e._CMLS.installGoogleAnalytics=function t(n){n&&(!function(e,t,n,i,o,a,s){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,a=t.createElement(n),s=t.getElementsByTagName(n)[0],a.async=1,a.src=i,s.parentNode.insertBefore(a,s)}(e,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create",n,"auto",{name:"contestTracker"}),ga("contestTracker.send","pageview"))},e._CMLS.installGoogleAnalytics(a)),e.addthis&&(n("Hiding AddThis."),e.addthis.layers(function(e){e.destroy()})),e.NO_ADDTHIS_HERE=!0,e.parent.NO_ADDTHIS_HERE=e.NO_ADDTHIS_HERE,$(function(){if($('.CMLS_CCC .entry-content iframe:not([src*="facebook.com"]):not([class*="twitter-timeline"]):not([src*="youtube"])').length){var t=o.attr("src").replace("/base.js","/iframeResizer.js");$('<script src="'+t+'" onload="resizeContestIframe()"></script>').appendTo("body"),e.resizeContestIframe=function(){e.contestIframeResizerObject=[];var t=$('.CMLS_CCC .entry-content iframe:not([src*="facebook.com"]):not([class*="twitter-timeline"]):not([src*="youtube"])'),i=-1!==navigator.userAgent.indexOf("MSIE");$(t.each(function(){n("Attaching iFrameResizer to post iframe."),e.contestIframeResizerObject.push(e.contestIframeResizerObject.push(e.iFrameResize({log:!(!e._CMLS||!e._CMLS.debug)&&e._CMLS.debug,checkOrigin:!1,heightCalculationMethod:i?"max":"lowestElement",tolerance:5},this)))}))}}}),e.History&&e.History.Adapter&&e.History.Adapter.bind(e,"statechange",i),$(function(){$(".bit-widget-initializer").length&&$('<script src="http://widget.bandsintown.com/javascripts/bit_widget.js"></script>').appendTo("body")}),$.fn.expireReplace=function(e,t){if("[object Date]"!==Object.prototype.toString.call(e)&&(e=new Date(Date.parse(e))),!(e instanceof Date)||isNaN(e.getTime()))return void n("Supplied expireReplace timestamp is an invalid date.",e,e instanceof Date);Date.now()>e&&this.text(t)},function(e,t,n){var i,o=e.getElementsByTagName(t)[0],a=/^http:/.test(e.location)?"http":"https";e.getElementById(n)||(i=e.createElement(t),i.id=n,i.src=a+"://platform.twitter.com/widgets.js",o.parentNode.insertBefore(i,o))}(document,"script","twitter-wjs"),function(e,t,n){var i,o=e.getElementsByTagName(t)[0];e.getElementById(n)||(i=e.createElement(t),i.id=n,i.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3",o.parentNode.insertBefore(i,o))}(document,"script","facebook-jssdk")}(jQuery,window.self);
//# sourceMappingURL=./base.js.map