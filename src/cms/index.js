import './scss/base.scss';

import { h, Fragment } from 'Utils/createElement.js';
import waitFor from 'Utils/waitFor';
import Logger from 'Utils/Logger.js';
import triggerEvent from 'Utils/triggerEvent';

const log = new Logger('CONTEST 3.0');

if (window.addthis) {
	log.info('Hiding AddThis');
	window.addthis.layers((layer) => layer.destroy());
}
window.NO_ADDTHIS_HERE = true;
window.parent.NO_ADDTHIS_HERE = true;

(function ($, window, undefined) {
	const log = new Logger('CONTEST 3.0');

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
	const gaId = $BASETAG.attr('data-google-analytics-id');
	if (gaId) installGoogleAnalytics(gaId);

	// Setup iframe resizer
	const ignoreFrames = [
		'[src*="facebook.com"]',
		'[src*="youtube"]',
		'[src*="syndirect"]',
		'.twitter-timeline',
		'.isoframe-template',
		'.isoframe-processed',
	];
	waitFor(
		() => {
			if (document.querySelector('script[src*="iframe-resizer"]')) {
				log.info('iFrameResizer already exists!');
				return 'CANCEL_WAIT';
			}
			const resizeFrames = document.querySelectorAll(
				`.cmls-entry-content iframe[src]:not(${ignoreFrames.join(',')})`
			);
			return resizeFrames?.length > 0 ? resizeFrames : false;
		},
		50000,
		500
	)
		.then(() => {
			document.head.append(
				<script
					id="iFrameResizer4210"
					src="https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.11/js/iframeResizer.min.js"
					async
					onload={() => {
						log.info('Setting up iFrameResizer');
						document.defaultView.contestIframeResizerObject = [];
						const resizeFrames = document.querySelectorAll(
							`.cmls-entry-content iframe[src]:not(${ignoreFrames.join(',')})`
						);
						[...resizeFrames].forEach((ifr) => {
							log.info('Attaching iFrameResizer to iframe', ifr);
							window.contestIframeResizerObject.push(
								window.iFrameResize(
									{
										log:
											window._CMLS && window._CMLS.debug
												? window._CMLS.debug
												: false,
										checkOrigin: false,
										tolerance: 5,
										onInit: function (ifr) {
											ifr.addAttribute('init', true);
											triggerEvent(ifr, 'cmls-ifr-init');
											triggerEvent(
												document,
												'cmls-ifr-init'
											);
										},
									},
									ifr
								)
							);
						});
					}}
				></script>
			);
		})
		.catch((e) => {
			log.info('Timed out waiting for contest iframe.');
		});

	// Set up BandsInTown widget if it exists
	waitFor(
		() => document.querySelectorAll('.bit-widget-initializer')?.length,
		50000,
		500
	)
		.then(() => {
			document.body.append(
				<script
					async
					defer
					crossorigin="anonymous"
					src="https://widget.bandsintown.com/main.min.js"
				></script>
			);
		})
		.catch(() => {
			console.log('No BandsInTown widget.');
		});

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
})(jQuery, window.self);
