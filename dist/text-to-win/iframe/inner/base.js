!function(e,t,n){var a,i=e.getElementsByTagName(t)[0],s=/^http:/.test(e.location)?"http":"https";e.getElementById(n)||((a=e.createElement(t)).id=n,a.src=s+"://platform.twitter.com/widgets.js",i.parentNode.insertBefore(a,i))}(document,"script","twitter-wjs"),function(e,t,n){var a,i=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3",i.parentNode.insertBefore(a,i))}(document,"script","facebook-jssdk"),function(e,t){function n(){if("object"==typeof console&&console.log){var e=new Date;e=e.toISOString()?e.toISOString():e.toUTCString(),console.log("[CMLS Iframed Feature INNER]",e,[].slice.call(arguments))}}var a=e.document.createElement("iiframe"),i=function(e,t){var n,a,i,s=null,r=0,o=function(){r=(new Date).getTime(),s=null,i=e.apply(n,a),s||(n=a=null)};return function(){var c=(new Date).getTime();r||(r=c);var l=t-(c-r);return n=this,a=arguments,l<=0||l>t?(s&&(clearTimeout(s),s=null),r=c,i=e.apply(n,a),s||(n=a=null)):s||(s=setTimeout(o,l)),i}},s={selector:'[lazyload="on"]',advance:200,getLoadable:function(){return this.loadable||(this.loadable=$(this.selector)),this.loadable},handler:function(){s.getLoadable().each((function(){if(!this.dataset.originalsrc||this.src!==this.dataset.originalsrc){var t=getComputedStyle(this),a=this.getBoundingClientRect(),i=this.ownerDocument.defaultView.frameElement.getBoundingClientRect();a&&i&&a.top+i.top-s.advance<=e.self.parent.innerHeight&&"none"!==t.display&&this.dataset.src&&(this.dataset.original_src||(this.dataset.original_src=this.src),-1===this.src.indexOf(this.dataset.src)&&(n("Setting src",this,this.dataset.src,this.src),this.src=this.dataset.src),this.dataset.srcset&&(this.dataset.original_srcset||(this.dataset.original_srcset=this.srcset),this.srcset!==this.dataset.srcset&&(this.srcset=this.dataset.srcset)))}}))}};n("Injecting jQuery");var r=e.document.createElement("script");r.src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",r.type="text/javascript",r.onload=function(){n("jQuery injected.");var $=e.jQuery,t=e.self.document.createEvent("Event");t.initEvent("jquery.loaded",!0,!0),e.self.dispatchEvent(t),$.fn.expireReplace=function(e,t){"[object Date]"!==Object.prototype.toString.call(e)&&(e=new Date(Date.parse(e))),e instanceof Date&&!isNaN(e.getTime())?Date.now()>e&&this.text(t):n("Supplied expireReplace timestamp is an invalid date.",e,e instanceof Date)},$((function(){$("iiframe").each((function(){var e=$(this),t=$("<iframe/>"),a=e.prop("attributes");n("Resolving inner iframe",this,a),$.each(a,(function(){this.specified&&t.attr(this.name,this.value)})),e.after(t),Object.assign(t[0].dataset,e[0].dataset),e.remove()})),$("img,iframe").on("load",(function(){e.self.parentIFrame&&e.self.parentIFrame.reset()})),!e.self.DO_NOT_ACTIVATE_DFP&&e.self.document.getElementById("div-gpt-ad-1418849849333-0")&&e.self.parent._CMLS.CCC_IFRAME_ACTIVATE_DFP&&e.self.parent._CMLS.CCC_IFRAME_ACTIVATE_DFP(),e.self.parent.document.addEventListener("scroll",i(s.handler,500)),e.self.parent.addEventListener("resize",i(s.handler,500)),e.self.parent.addEventListener("orientationchange",i(s.handler,500)),s.handler()}))},e.document.head.appendChild(r),n("Injecting iframe-resizer contentWindow library");var o=e.document.createElement("script");o.src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.contentWindow.min.js",o.onload=function(){n("iframe-resizer contentWindow loaded.")},e.document.head.appendChild(o),e.self.INIT_DFP_COUNT=0,e.self.INIT_DFP=function t(a){if(!e.self.parent.googletag||!e.self.parent.googletag.pubads)return n("#CMLS_TEMPLATE requested DFP activation, but parent window does not have DFP"),void(e.self.INIT_DFP_COUNT<10&&(n("Trying again in 1 second..."),e.self.INIT_DFP_COUNT++,setTimeout((function(){e.self.INIT_DFP(a)}),1e3)));var i=e.self.googletag||{cmd:[]},s,r,o=e.self.parent.googletag.pubads,c=o().getSlots(),l=null,d=null;c.length&&c.some((function(e){var t=e.getAdUnitPath();if(t.indexOf("/6717/")>-1)return l=t,!0})),l?(n("Setting DFP targeting keys",d=o().getTargetingKeys()),d&&d.length&&i.cmd.unshift((function t(){d.forEach((function(t){var n=o().getTargeting(t);e.top.console.log("Defining DFP target",t,n),i.pubads().setTargeting(t,n)}))})),n("Setting up DFP slot"),i.cmd.unshift((function t(){e.top.console.log("Activating DFP slot");var n=i.defineSlot(l,a,"div-gpt-cube");n&&(n.addService(i.pubads()),n.setCollapseEmptyDiv(!0),n.setTargeting("pos","mid")),i.pubads().enableSingleRequest(),i.enableServices()})),n("googletag.cmd",i.cmd),function(){var t=e.self.document.createElement("script");t.async=!0,t.type="text/javascript",t.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";var n=e.self.document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}(),n("DFP activated.")):n("Could not determine parent adPath, exiting DFP activation")},n("Setting document title from parent"),e.self.document.title=e.self.parent.document.title}(window.self);
//# sourceMappingURL=base.js.map