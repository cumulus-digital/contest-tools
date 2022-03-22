(function($, window, undefined){
	function log(){
		if (typeof console === 'object' && console.log) {
			var ts = (new Date());
			ts = ts.toISOString() ? ts.toISOString() : ts.toUTCString();
			console.log('[CMLS Contesting]', ts, [].slice.call(arguments));
		}
	}	

	// Global namespace
	window.self.CMLS_CONTEST = {};

	/**
	 * jQuery function to replace a given object's text with a new string
	 * if the current time exceeds a given timestamp
	 * @param  {(Date|string)} ts      Expire timestamp to test against
	 * @param  {string}        newText Text or HTML to replace with
	 * @return {void}
	 */
	$.fn.expireReplace = function(ts, newText){
		if (Object.prototype.toString.call(ts) !== '[object Date]') {
			ts = new Date(Date.parse(ts));
		}
		if ( ! (ts instanceof Date) || isNaN(ts.getTime())) {
			log('Supplied expireReplace timestamp is an invalid date.', ts, ts instanceof Date);
			return;
		}
		if (Date.now() > ts) {
			this.text(newText);
		}
	};

	/**
	 * Installs Google Analytics with a given ID
	 * @param  {string} id GA property ID
	 * @return {void}
	 */
	window.self.CMLS_CONTEST.installGoogleAnalytics = function(id){
		if ( ! id) {
			log('No ID provided to installGoogleAnalytics');
			return;
		}
		var scr = window.document.createElement('script');
		scr.async = 'async';
		scr.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
		scr.onload = function(){
			window.dataLayer = window.dataLayer || [];
			function gtag(){
				window.dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', id, { 'cookie_prefix': 'cmls_contest' });
		}
		window.document.body.appendChild(scr);
	};

	/* jshint ignore:start */
	/*jsl:ignore* /
	/*ignore jslint start*/

	// TWITTER TIMELINE WIDGET
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	// FACEBOOK API
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	/*ignore jslint end*/
	/*jsl:end */
	/* jshint ignore:end */

}(jQuery, window));