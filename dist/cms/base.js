!function(a,l,e){
// Safe wrapper for console.log
function i(){if("object"==typeof console&&console.log){var e=new Date;e=e.toISOString()?e.toISOString():e.toUTCString(),console.log("[CMLS Contesting]",e,[].slice.call(arguments))}}
// Finds the content wrapper that contains the contest and adds
// classes to its column and row so we don't need to necessarily
// know the exact markup of the page.
// If the player bar is using History.js, destroy the iframe
// resizer after the visitor navigates away.
function t(){l.contestIframeResizerObject&&a(l.contestIframeResizerObject).each(function(){this.iframeResizer.close()}),l.History&&l.History.Adapter&&l.Histroy.Adapter.unbind(l,"statechange",t)}var o=a("#CMLS_CONTEST");if(!o.length)return i('You must add id="CMLS_CONTEST" to the script tag which loads this library!');o.parentsUntil(".wrapper-content",".column,.row,.block-type-content").addClass("CMLS_CCC"),i("Added CMLS_CCC class to parent containers."),l._CMLS=l._CMLS||{};
// If we have a google analytics ID, set it up.
var n=o.attr("data-google-analytics-id"),s,r,c,d,g,m,p,f,u,h,y;n&&(i("Installing Google Analytics",n),
/**
		 * Installs GA with a given ID
		 * @param  {string} id GA property ID
		 * @return {void}
		 */
l._CMLS.installGoogleAnalytics=function e(t){
/* jshint ignore:start */
/*jsl:ignore* /
			/*ignore jslint start*/
var n,a,i,o,s,r,c;t&&(n=l,a=document,i="script",o="//www.google-analytics.com/analytics.js",s="ga",n.GoogleAnalyticsObject=s,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,r=a.createElement(i),c=a.getElementsByTagName(i)[0],r.async=1,r.src=o,c.parentNode.insertBefore(r,c),ga("create",t,"auto",{name:"contestTracker"}),ga("contestTracker.send","pageview"))
/* jshint ignore:start */
/*jsl:ignore* /
			/*ignore jslint start*/},l._CMLS.installGoogleAnalytics(n)),
// Hide AddThis
l.addthis&&(i("Hiding AddThis."),l.addthis.layers(function(e){e.destroy()})),l.NO_ADDTHIS_HERE=!0,l.parent.NO_ADDTHIS_HERE=l.NO_ADDTHIS_HERE,
// Set up iFrameResizer for any iframes in our post
a(function(){var e;if(a('.CMLS_CCC .entry-content iframe:not([src*="facebook.com"]):not([class*="twitter-timeline"]):not([src*="youtube"]):not([src*="syndredirect"]').length){
// We've got iframes, so let's include iframeResizer!
var t=o.attr("src").replace("/base.js","/iframeResizer-v3.5.14.js"),n=l.document.createElement("script");n.onload=function(){i("Setting up iframe-resizer library.");var e=a('.CMLS_CCC .entry-content iframe:not([src*="facebook.com"]):not([class*="twitter-timeline"]):not([src*="youtube"])'),t=-1!==navigator.userAgent.indexOf("MSIE");l.contestIframeResizerObject=[],a(e.each(function(){i("Attaching iFrameResizer to post iframe.",this),l.contestIframeResizerObject.push(l.iFrameResize({log:!(!l._CMLS||!l._CMLS.debug)&&l._CMLS.debug,checkOrigin:!1,enablePublicMethods:!0,heightCalculationMethod:t?"max":"lowestElement",tolerance:5},this))}))},n.src=t,l.document.body.appendChild(n)}else i("No iframes which need resizing found.")}),l.History&&l.History.Adapter&&l.History.Adapter.bind(l,"statechange",t),
// Set up Bands In Town widget if placement exists
a(function(){a(".bit-widget-initializer").length&&a('<script src="https://widget.bandsintown.com/main.min.js"><\/script>').appendTo("body")}),
/**
	 * jQuery function to replace a given object's text with a new string
	 * if the current time exceeds a given timestamp
	 * @param  {(Date|string)} ts      Expire timestamp to test against
	 * @param  {string}        newText Text or HTML to replace with
	 * @return {void}
	 */
a.fn.expireReplace=function(e,t){"[object Date]"!==Object.prototype.toString.call(e)&&(e=new Date(Date.parse(e))),e instanceof Date&&!isNaN(e.getTime())?Date.now()>e&&this.text(t):i("Supplied expireReplace timestamp is an invalid date.",e,e instanceof Date)},s=document,r="script",c="twitter-wjs",g=s.getElementsByTagName(r)[0],m=/^http:/.test(s.location)?"http":"https",s.getElementById(c)||((d=s.createElement(r)).id=c,d.src=m+"://platform.twitter.com/widgets.js",g.parentNode.insertBefore(d,g)),
// FACEBOOK API
p=document,f="script",u="facebook-jssdk",y=p.getElementsByTagName(f)[0],p.getElementById(u)||((h=p.createElement(f)).id=u,h.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1",y.parentNode.insertBefore(h,y))}(jQuery,window.self);
//# sourceMappingURL=base.js.map