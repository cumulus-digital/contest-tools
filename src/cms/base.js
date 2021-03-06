(function($, window, undefined) {
	// Safe wrapper for console.log
	function log(){
		if (typeof console === 'object' && console.log) {
			var ts = (new Date());
			ts = ts.toISOString() ? ts.toISOString() : ts.toUTCString();
			console.log('[CMLS Contesting]', ts, [].slice.call(arguments));
		}
	}

	// Finds the content wrapper that contains the contest and adds
	// classes to its column and row so we don't need to necessarily
	// know the exact markup of the page.
	var tag = $('#CMLS_CONTEST');
	if (tag.length) {
		tag.parentsUntil('.wrapper-content', '.column,.row,.block-type-content')
			.addClass('CMLS_CCC');
		log('Added CMLS_CCC class to parent containers.');
	} else {
		log('You must add id="CMLS_CONTEST" to the script tag which loads this library!');
		return false;
	}

	window._CMLS = window._CMLS || {};

	// If we have a google analytics ID, set it up.
	var gaID = tag.attr('data-google-analytics-id');
	if (gaID) {
		log('Installing Google Analytics', gaID);
		/**
		 * Installs GA with a given ID
		 * @param  {string} id GA property ID
		 * @return {void}
		 */
		window._CMLS.installGoogleAnalytics = function installGoogleAnalytics(id) {
			if ( ! id) {
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
		window._CMLS.installGoogleAnalytics(gaID);
	}

	// Hide AddThis
	if (window.addthis) {
		log('Hiding AddThis.');
		window.addthis.layers(function(layer) {
			layer.destroy();
		});
	}
	window.NO_ADDTHIS_HERE = true;
	window.parent.NO_ADDTHIS_HERE = window.NO_ADDTHIS_HERE;

	// Set up iFrameResizer for any iframes in our post
	function setupIframeResizer(round) {
		if ( ! round) {
			round = 1;
		}
		if (round > 30) {
			log('No iframes which need resizing were found in ' + round + ' rounds.');
			return;
		}
		var iframe = $('.CMLS_CCC .entry-content iframe:not(\'[src*="facebook.com"],[src*="youtube"],[src*="synredirect"],.twitter-timeline\')');
		if (iframe.length) {

			if (window.document.getElementById('iframeResizer4210')) {
				log('Already injected iframeResizer');
				return;
			}

			// We've got iframes, so let's include iframeResizer!
			var src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.min.js';
			var scr = window.document.createElement('script');
			scr.onload = function(){
				log('Setting up iframe-resizer library.');
				var iframe = $('.CMLS_CCC .entry-content iframe:not(\'[src*="facebook.com"],[src*="youtube"],[src*="synredirect"],.twitter-timeline\')'),
					isOldIE = (navigator.userAgent.indexOf("MSIE") !== -1);
				window.contestIframeResizerObject = [];
				$(iframe.each(function() {
					log('Attaching iFrameResizer to post iframe.', this);
					window.contestIframeResizerObject.push(
						window.iFrameResize({
								log: window._CMLS && window._CMLS.debug ? window._CMLS.debug : false,
								checkOrigin: false,
								heightCalculationMethod: isOldIE ? 'max' : 'lowestElement',
								tolerance: 5,
								initCallback: function(ifr) {
									$(ifr).trigger('cmls-ifr-init');
								}
							}, this)
					);
				}));
			};
			scr.id = 'iframeResizer4210';
			scr.src = src;
			window.document.body.appendChild(scr);

		} else {
			log('No iframes which need resizing found in round ' + round);
			setTimeout(function() {
				setupIframeResizer(round + 1);
			}, 1000);
		}
	}
	$(function(){
		setupIframeResizer(1);
	});

	// If the player bar is using History.js, destroy the iframe
	// resizer after the visitor navigates away.
	function removeIframeResizer() {
		if (window.contestIframeResizerObject) {
			$(window.contestIframeResizerObject).each(function(){
				this.iframeResizer.close();
			});
		}
		if (window.History && window.History.Adapter) {
			window.Histroy.Adapter.unbind(window, 'statechange', removeIframeResizer);
		}
	}
	if (window.History && window.History.Adapter) {
		window.History.Adapter.bind(window, 'statechange', removeIframeResizer);
	}

	// Set up Bands In Town widget if placement exists
	$(function(){
		if ($('.bit-widget-initializer').length) {
			$('<script src="https://widget.bandsintown.com/main.min.js"></scr' + 'ipt>')
				.appendTo('body');
		}
	});

	/**
	 * jQuery function to replace a given object's html with a new string
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
			this.html(newText);
		}
	};

	// BEGIN 3RD PARTY LIBRARIES:

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
	  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1';
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	/*ignore jslint end*/
	/*jsl:end */
	/* jshint ignore:end */
}(jQuery, window.self));