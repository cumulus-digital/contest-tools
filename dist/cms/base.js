!function(i,l,e){
// Safe wrapper for console.log
function a(){if("object"==typeof console&&console.log){var e=new Date;e=e.toISOString()?e.toISOString():e.toUTCString(),console.log("[CMLS Contesting]",e,[].slice.call(arguments))}}
// Finds the content wrapper that contains the contest and adds
// classes to its column and row so we don't need to necessarily
// know the exact markup of the page.
// If the player bar is using History.js, destroy the iframe
// resizer after the visitor navigates away.
function t(){l.contestIframeResizerObject&&i(l.contestIframeResizerObject).each(function(){this.iframeResizer.close()}),l.History&&l.History.Adapter&&l.Histroy.Adapter.unbind(l,"statechange",t)}var r=i("#CMLS_CONTEST");if(!r.length)return a('You must add id="CMLS_CONTEST" to the script tag which loads this library!');r.parentsUntil(".wrapper-content",".column,.row,.block-type-content").addClass("CMLS_CCC"),a("Added CMLS_CCC class to parent containers."),l._CMLS=l._CMLS||{};
// If we have a google analytics ID, set it up.
var n=r.attr("data-google-analytics-id"),o,s,c,d,g,m,p,f,u,y,C;n&&(a("Installing Google Analytics",n),
/**
		 * Installs GA with a given ID
		 * @param  {string} id GA property ID
		 * @return {void}
		 */
l._CMLS.installGoogleAnalytics=function e(t){
/* jshint ignore:start */
/*jsl:ignore* /
			/*ignore jslint start*/
var n,i,a,r,o,s,c;t&&(n=l,i=document,a="script",r="//www.google-analytics.com/analytics.js",o="ga",n.GoogleAnalyticsObject=o,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,s=i.createElement(a),c=i.getElementsByTagName(a)[0],s.async=1,s.src=r,c.parentNode.insertBefore(s,c),ga("create",t,"auto",{name:"contestTracker"}),ga("contestTracker.send","pageview"))
/* jshint ignore:start */
/*jsl:ignore* /
			/*ignore jslint start*/},l._CMLS.installGoogleAnalytics(n)),
// Hide AddThis
l.addthis&&(a("Hiding AddThis."),l.addthis.layers(function(e){e.destroy()})),l.NO_ADDTHIS_HERE=!0,l.parent.NO_ADDTHIS_HERE=l.NO_ADDTHIS_HERE,
// Set up iFrameResizer for any iframes in our post
i(function(){var e;if(i('.CMLS_CCC .entry-content iframe:not(\'[src*="facebook.com"],[src*="youtube"],[src*="synredirect"],.twitter-timeline\')').length){
// We've got iframes, so let's include iframeResizer!
var t=r.attr("src").replace("/base.js","/iframeResizer-v3.5.14.js"),n=l.document.createElement("script");n.onload=function(){a("Setting up iframe-resizer library.");var e=i('.CMLS_CCC .entry-content iframe:not(\'[src*="facebook.com"],[src*="youtube"],[src*="synredirect"],.twitter-timeline\')'),t=-1!==navigator.userAgent.indexOf("MSIE");l.contestIframeResizerObject=[],i(e.each(function(){a("Attaching iFrameResizer to post iframe.",this),l.contestIframeResizerObject.push(l.iFrameResize({log:!(!l._CMLS||!l._CMLS.debug)&&l._CMLS.debug,checkOrigin:!1,heightCalculationMethod:t?"max":"lowestElement",tolerance:5,initCallback:function(e){i(e).trigger("cmls-ifr-init")}},this))}))},n.src=t,l.document.body.appendChild(n)}else a("No iframes which need resizing found.")}),l.History&&l.History.Adapter&&l.History.Adapter.bind(l,"statechange",t),
// Set up Bands In Town widget if placement exists
i(function(){i(".bit-widget-initializer").length&&i('<script src="https://widget.bandsintown.com/main.min.js"><\/script>').appendTo("body")}),
/**
	 * jQuery function to replace a given object's text with a new string
	 * if the current time exceeds a given timestamp
	 * @param  {(Date|string)} ts      Expire timestamp to test against
	 * @param  {string}        newText Text or HTML to replace with
	 * @return {void}
	 */
i.fn.expireReplace=function(e,t){"[object Date]"!==Object.prototype.toString.call(e)&&(e=new Date(Date.parse(e))),e instanceof Date&&!isNaN(e.getTime())?Date.now()>e&&this.text(t):a("Supplied expireReplace timestamp is an invalid date.",e,e instanceof Date)},o=document,s="script",c="twitter-wjs",g=o.getElementsByTagName(s)[0],m=/^http:/.test(o.location)?"http":"https",o.getElementById(c)||((d=o.createElement(s)).id=c,d.src=m+"://platform.twitter.com/widgets.js",g.parentNode.insertBefore(d,g)),
// FACEBOOK API
p=document,f="script",u="facebook-jssdk",C=p.getElementsByTagName(f)[0],p.getElementById(u)||((y=p.createElement(f)).id=u,y.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1",C.parentNode.insertBefore(y,C))}(jQuery,window.self);
//# sourceMappingURL=base.js.map