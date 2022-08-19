import './scss/base.scss';
import Logger from 'Utils/Logger.js';

(function ($, window, undefined) {
	window._CMLS = window._CMLS || {};
	const DOC = window.document;

	/**
	 * Installs Google Analytics only if we're not inside an iframe.
	 * @param  {string} id GA Property ID
	 */
	window._CMLS.installGoogleAnalytics = function (id) {
		if (!id) {
			console.warn('No Google Analytics ID provided.');
			return;
		}
		if (window.top !== window.self) {
			console.log(
				'Contest is embedded, not installing Google Analytics again.'
			);
			return;
		}
		const scr = DOC.createElement('script');
		scr.async = 'async';
		scr.scr =
			'https://www.googletagmanager.com/gtag/js?id=' +
			encodeURIComponent(id);
		scr.onload = function () {
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				window.dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', id, { cookie_prefix: 'cmls_contest' });
		};
		DOC.body.appendChild(scr);
	};

	/**
	 * jQuery function to replace a given object's text with a new string
	 * if the current time exceeds a given timestamp
	 * @param  {(Date|string)} ts      Expire timestamp to test against
	 * @param  {string}        newText Text or HTML to replace with
	 * @return {void}
	 */
	$.fn.expireReplace = function (ts, newText) {
		if (Object.prototype.toString.call(ts) !== '[object Date]') {
			ts = new Date(Date.parse(ts));
		}
		if (!(ts instanceof Date) || isNaN(ts.getTime())) {
			log(
				'Supplied expireReplace timestamp is an invalid date.',
				ts,
				ts instanceof Date
			);
			return;
		}
		if (Date.now() > ts) {
			this.text(newText);
		}
	};

	$(() => {
		// Install iframeResizer content script
		$.getScript(
			'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.contentWindow.min.js'
		);

		/**
		 * Do not run inside the contest designer. Prevents code from running that may
		 * alter the page structure, which may get saved permanently in the editor.
		 */
		if ($('body.contest-sweeps,body.contest-ugc').length < 1) {
			return;
		}

		const $BASETAG = $('#CMLS_CONTEST', DOC);
		if (!$BASETAG.length) {
			log.error(
				'You must add id="CMLS_CONTEST" to the script tag which loads this library!'
			);
			return;
		}

		// Auto-scroll iframe parent to top of iframe on rules popup
		$('#fancyrules').on('click', function () {
			if ('parentIFrame' in window) {
				window.parentIFrame.scrollToOffset(0, 0);
			}
		});

		// Install Bands in Town script if needed
		if ($('a[href*="bandsintown.com"],a.bit-widget-initializer').length) {
			$.getScript('https://widget.bandsintown.com/main.min.js');
		}

		// Install our GA tag if available
		const gaID = $BASETAG.attr('data-google-analytics-id');
		if (gaID) {
			window._CMLS.installGoogleAnalytics(gaID);
		}

		/* jshint ignore:start */
		/*jsl:ignore* /
		/*ignore jslint start*/
		// Initialize twitter timelines
		!(function (d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0],
				p = /^http:/.test(d.location) ? 'http' : 'https';
			if (!d.getElementById(id)) {
				js = d.createElement(s);
				js.id = id;
				js.src = p + '://platform.twitter.com/widgets.js';
				fjs.parentNode.insertBefore(js, fjs);
			}
		})(document, 'script', 'twitter-wjs');
		/*ignore jslint end*/
		/*jsl:end */
		/* jshint ignore:end */
	});
})(jQuery, window.self);
