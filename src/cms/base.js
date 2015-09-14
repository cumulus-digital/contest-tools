// @codekit-prepend 'iframeResizer.js';

(function(window, undefined){
	var iframe = window.document.querySelector('.entry-content iframe'),
		isOldIE = (navigator.userAgent.indexOf("MSIE") !== -1);
	window.iFrameResize({
		log: window._CMLS && window._CMLS.debug ? window._CMLS.debug : false,
		checkOrigin: false,
		heightCalculationMethod: isOldIE ? 'max' : 'lowestElement',
		tolerance: 5
	}, iframe);

	// Hide AddThis for contests
	function hideAddThis() {
		var addThis = window.document.getElementsByClassName('.at4-share-outer');
		if ( ! addThis.length) {
			setTimeout(hideAddThis, 100);
			return;
		}
		for(var i = 0; i < addThis.length; i++) {
			addThis[i].style.display = 'none';
		}		
	}
	document.addEventListener("DOMContentLoaded", function() {
		hideAddThis();
	});

	/**
	 * Installs Google Analytics only if we're not inside an iframe.
	 * @param  {string} id GA Property ID
	 */
	window.installGoogleAnalytics = function(id) {
		if (! id) {
			return;
		}

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
}(window));