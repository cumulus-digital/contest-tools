// @codekit-prepend 'iframeResizer.js';

(function(window, undefined){
	var iframe = window.document.querySelector('.entry-content iframe'),
		isOldIE = (navigator.userAgent.indexOf("MSIE") !== -1);
	window.contestIframeResizerObject = window.iFrameResize({
		log: window._CMLS && window._CMLS.debug ? window._CMLS.debug : false,
		checkOrigin: false,
		heightCalculationMethod: isOldIE ? 'max' : 'lowestElement',
		tolerance: 5
	}, iframe);

	// Hide AddThis for contests
	function hideAddThis() {
		if (window.addthis) {
			window.addthis.layers(function(layer) {
				layer.destroy();
			});
		}
	}
	window.document.addEventListener("DOMContentLoaded", function() {
		hideAddThis();
	});
	window.NO_ADDTHIS_HERE = true;

	// If we're jumping around with History.js, destroy the iframe after we leave.
	function removeIframeResizer() {
		if (window.contestIframeResizerObject) {
			window.contestIframeResizerObject[0].iFrameResizer.close();
		}
		if (window.History && window.History.Adapter) {
			window.History.Adapter.unbind(window, 'pageChange', removeIframeResizer);
		}
	}
	if (window.History && window.History.Adapter) {
		window.History.Adapter.bind(window, 'pageChange', removeIframeResizer);
	}

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