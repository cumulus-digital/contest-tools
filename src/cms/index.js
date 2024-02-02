import './scss/base.scss';

import Logger from 'Utils/Logger.js';

(function ($, window, undefined) {
	const log = new Logger('CONTEST');

	// Disable freestar sidewall
	function disableFreestarSidewall(w) {
		if (w.freestar && w.freestar.config) {
			w.freestar.config.disabledProducts =
				w.freestar.config.disabledProducts || {};
			w.freestar.config.disabledProducts.sideWall = true;
		}
	}
	disableFreestarSidewall(window.self);
	disableFreestarSidewall(window.parent);
	disableFreestarSidewall(window.top);

	// Remove/hide AddThis
	if (window.addthis) {
		log.info('Hiding AddThis');
		window.addthis.layers(function (layer) {
			layer.destroy();
		});
	}
	window.NO_ADDTHIS_HERE = true;
	window.parent.NO_ADDTHIS_HERE = window.NO_ADDTHIS_HERE;

	const DOC = window.self.document;
	const $BODY = $('body', DOC);
	const IS_FSE = $BODY.hasClass('is-fse-theme');

	const $BASETAG = $('#CMLS_CONTEST', DOC);
	if (!$BASETAG.length) {
		log.warn({
			message:
				'You must add id="CMLS_CONTEST" to the script tag which loads this library!',
			headerLength: Infinity,
		});
		return;
	}

	$BASETAG.parent().addClass('cmls-entry-content');
	$BASETAG.parent().parent().addClass('cmls-entry');
	$BASETAG.parent().parent().parent().addClass('cmls-entry-wrapper');
	$BASETAG
		.closest('.wrapper-content, .express-group-content')
		.addClass('cmls-wrapper-content');

	if (!IS_FSE) {
		$BASETAG
			.parentsUntil(
				'.wrapper-content',
				'.column,.row,.block-type-content'
			)
			.addClass('CMLS_CCC');
	} else {
		const fseParents = $BASETAG.parentsUntil('.wp-site-blocks');
		fseParents.last().addClass('cmls-wrapper-content');
		$('.cmls-entry-wrapper')
			.parentsUntil('.wp-site-blocks')
			.addClass('CMLS_CCC');
	}
	log.info('Added content classes.');

	const installGoogleAnalytics = (id) => {
		if (!id) {
			log.warn('No Google Analytics ID provided.');
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

	// Install our GA tag if available
	const gaID = $BASETAG.attr('data-google-analytics-id');
	if (gaID) {
		installGoogleAnalytics(gaID);
	} else {
		log.info('GA ID not provided.');
	}

	// Set up iFrameResizer for any iframes in our post
	function setupIframeResizer(round) {
		if (DOC.getElementById('iFrameResizer4210')) {
			log.info('Already injected iframeResizer');
			return;
		}

		if (!round) {
			round = 1;
		}
		if (round > 30) {
			log.warn(
				`No iframes which need resizing were found in ${round} rounds`
			);
		}
		let ignoreFrames = [
			'[src*="facebook.com"]',
			'[src*="youtube"]',
			'[src*="syndirect"]',
			'.twitter-timeline',
			'.isoframe-template',
			'.isoframe-processed',
		];
		const resizeFrames = $(
			`.cmls-entry-content iframe[src]:not('${ignoreFrames.join(',')}')`
		);

		if (!resizeFrames.length) {
			log.info(`No iframes which need resizing found in round ${round}`);
			setTimeout(function () {
				setupIframeResizer(round + 1);
			}, 1000);
			return;
		}

		const ifrSrc =
			'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.min.js';
		const scr = DOC.createElement('script');
		scr.onload = function () {
			log.info('Setting up iFrameResizer');
			DOC.defaultView.contestIframeResizerObject = [];
			resizeFrames.each(function () {
				log.info('Attaching iFrameResizer to iframe', this);
				window.contestIframeResizerObject.push(
					window.iFrameResize(
						{
							log:
								window._CMLS && window._CMLS.debug
									? window._CMLS.debug
									: false,
							checkOrigin: false,
							heightCalculationMethod: 'lowestElement',
							tolerance: 5,
							onInit: function (ifr) {
								const $ifr = $(ifr);
								$ifr.attr('init', true);
								$ifr.trigger('cmls-ifr-init');
								$(DOC).trigger('cmls-ifr-init');
							},
						},
						this
					)
				);
			});
		};
		scr.id = 'iFrameResizer4210';
		scr.src = ifrSrc;
		DOC.body.appendChild(scr);
	}
	$(function () {
		setupIframeResizer(1);
	});

	/**
	 * If the player is using History.js, destroy the iFrameResizer
	 * after navigation.
	 */
	function removeIframeResizer() {
		if (window.contestIframeResizerObject) {
			window.contestIframeResizerObject.forEach(function (ifr) {
				ifr.iframeResizer.close();
			});
		}
		if (window.History && window.History.adapter) {
			window.History.Adapter.unbind(
				window,
				'statechange',
				removeIframeResizer
			);
		}
	}
	if (window.History && window.History.Adapter) {
		window.History.Adapter.bind(window, 'statechange', removeIframeResizer);
	}

	// Set up Bands In Town widget if placement exists
	$(function () {
		if ($('.bit-widget-initializer').length) {
			$(
				'<script src="https://widget.bandsintown.com/main.min.js"></scr' +
					'ipt>'
			).appendTo('body');
		}
	});

	/**
	 * jQuery function to replace a given object's html with a new string
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
			this.html(newText);
		}
	};

	// THIRD PARTY SOCIAL LIBRARIES

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
})(jQuery, window.self);
