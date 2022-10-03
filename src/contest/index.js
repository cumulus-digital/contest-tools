import './scss/base.scss';
import Logger from 'Utils/Logger.js';

(function ($, window, undefined) {
	window._CMLS = window._CMLS || {};
	const log = new Logger('CONTEST');
	const DOC = window.self.document;

	const $BODY = $('body', DOC);

	/**
	 * Installs Google Analytics only if we're not inside an iframe.
	 * @param  {string} id GA Property ID
	 */
	window._CMLS.installGoogleAnalytics = function (id) {
		if (!id) {
			log.warn('No Google Analytics ID provided.');
			return;
		}
		if (window.top !== window.self) {
			log.info(
				'Contest is embedded, not installing Google Analytics again.'
			);
			return;
		}

		window.dataLayer = window.dataLayer || [];
		function gtag() {
			window.dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', id, { cookie_prefix: 'cmls_contest' });

		$('<script />', {
			id: 'CMLS_CONTEST_GA',
			async: true,
			src:
				'https://www.googletagmanager.com/gtag/js?id=' +
				encodeURIComponent(id),
		}).appendTo(DOC.body);

		log.info('GA Installed', id);
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
			log.warn(
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
		log.info('Initializing Engage-level scripting!');

		// Install iframeResizer content script
		$.getScript(
			'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.contentWindow.min.js'
		);

		/**
		 * Do not run inside the contest designer. Prevents code from running that may
		 * alter the page structure, which may get saved permanently in the editor.
		 */
		if (window.self.name.indexOf('contestpreview-container') > -1) {
			log.info('This is a preview, will not run engage-level scripting.');
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
			log.info('Adding Bands in Town widget script');
			$.getScript('https://widget.bandsintown.com/main.min.js');
		}

		// Install our GA tag if available
		const gaID = $BASETAG.attr('data-google-analytics-id');
		if (gaID) {
			window._CMLS.installGoogleAnalytics(gaID);
		} else {
			log.info('No GA ID provided.');
		}

		/**
		 * THIRD PARTY CODE
		 */
		// Twitter
		if (!window.twttr) {
			window.twttr = (function (d, s, id) {
				var js,
					fjs = d.getElementsByTagName(s)[0],
					t = window.twttr || {};
				if (d.getElementById(id)) return t;
				js = d.createElement(s);
				js.id = id;
				js.src = 'https://platform.twitter.com/widgets.js';
				fjs.parentNode.insertBefore(js, fjs);

				t._e = [];
				t.ready = function (f) {
					t._e.push(f);
				};

				return t;
			})(DOC, 'script', 'twitter-wjs');
		}

		// Facebook
		(function (d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src =
				'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0';
			fjs.parentNode.insertBefore(js, fjs);
		})(DOC, 'script', 'facebook-jssdk');
	});
})(jQuery, window.self);
