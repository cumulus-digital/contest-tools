// @codekit-prepend "../../node_modules/iframe-resizer/js/iframeResizer.contentWindow.js";

(function($, window, undefined) {

	function log() {
		if (typeof console === 'object' && console.log) {
			var ts = (new Date());
			ts = ts.toISOString() ? ts.toISOString() : ts.toUTCString();
			console.log('[CMLS Contesting]', ts, [].slice.call(arguments));
		}
	}

	$(function() {

		// Do not run the following code if we're in the contest designer.
		// Prevents code that alters page structure from having that new page
		// structure saved permanently.
		if ($('body.contest-sweeps,body.contest-ugc').length < 1) {
			return;
		}

		// Auto-scroll iframe parent to top of iframe on rules popup
		$('#fancyrules').on('click', function() {
			if ('parentIFrame' in window) {
				window.parentIFrame.scrollToOffset(0,0);
			}
		});

		// Install Bands In Town widget script
		if ($('a[href*="bandsintown.com"]').length) {
			$.getScript('https://widget.bandsintown.com/main.min.js');
		}

		/* jshint ignore:start */
		/*jsl:ignore* /
		/*ignore jslint start*/
		// Initialize twitter timelines
		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
		/*ignore jslint end*/
		/*jsl:end */
		/* jshint ignore:end */

	});

	/**
	 * Installs Google Analytics only if we're not inside an iframe.
	 * @param  {string} id GA Property ID
	 */
	window.installGoogleAnalytics = function(id) {
		if (window.top !== window.self || ! id) {
			return;
		}
		log('Installing Google Analytics ID ', id);

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

}(jQuery, window));