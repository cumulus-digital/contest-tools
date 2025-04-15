import './scss/base.scss';
import { h, Fragment } from 'Utils/createElement.js';
import waitFor from 'Utils/waitFor';
import Logger from 'Utils/Logger.js';

(function ($, window, undefined) {
	window._CMLS = window._CMLS || {};
	const log = new Logger('CONTEST 3.0');
	const DOC = window.self.document;

	const $BODY = $('body', DOC);

	log.info('loading');

	/**
	 * Do not run inside the contest designer. Prevents code from running that may
	 * alter the page structure, which may get saved permanently in the editor.
	 */
	if (window.self.name.indexOf('contestpreview-container') > -1) {
		log.info('This is a preview, will not run engage-level scripting.');
		return;
	}

	DOC.head.append(
		<script
			src="https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.11/js/iframeResizer.contentWindow.js"
			async
		></script>
	);

	const $BASETAG = $('#CMLS_CONTEST', DOC);
	if (!$BASETAG.length) {
		log.error(
			'You must add id="CMLS_CONTEST" to the script tag which loads this library!'
		);
		return;
	}

	log.info('Initializing Engage-level scripting!');

	/*
	window.addEventListener('click', (e) => {
		if (e.target.matches('#fancyrules') && 'parentIFrame' in window) {
			window.parentIFrame.scrollToOffset(0, 0);
		}
	});
	*/

	// Set up BandsInTown widget if it exists
	waitFor(
		() =>
			document.querySelectorAll(
				'a[href*="bandsintown.com"],a.bit-widget-initializer'
			)?.length,
		50000,
		500
	)
		.then(() => {
			document.body.append(
				<script
					async
					defer
					src="https://widget.bandsintown.com/main.min.js"
				></script>
			);
		})
		.catch(() => {});

	/**
	 * Installs Google Analytics only if we're not inside an iframe.
	 * @param {string} id GA Property ID
	 */
	window._CMLS.installGoogleAnalytics = (id) => {
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
		gtag('config', id);

		document.body.append(
			<script
				id="CMLS_CONTEST_GA"
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`}
			></script>
		);

		log.info('GA Installed', id);
	};
	// Install our GA tag if available
	const gaID = $BASETAG.attr('data-google-analytics-id');
	if (gaID) {
		window._CMLS.installGoogleAnalytics(gaID);
	}

	// Facebook widgets
	if (!window.FB) {
		document.body.append(
			<script
				async
				defer
				crossorigin="anonymous"
				src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0"
			></script>
		);
	}

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
})(jQuery, window.self);
