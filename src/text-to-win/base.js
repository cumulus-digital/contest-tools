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
		if ( ! id) { return; }

		/* jshint ignore:start */
		/*jsl:ignore* /
		/*ignore jslint start*/
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', id, 'auto', {'name': 'contestTracker'});
		ga('contestTracker.send', 'pageview');
		/*ignore jslint end*/
		/*jsl:end */
		/* jshint ignore:end */
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