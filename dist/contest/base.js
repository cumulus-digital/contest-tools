!function(e){function t(){}function n(e,t,n,o){e.addEventListener(t,n,!!De&&(o||{}))}function o(e,t,n){e.removeEventListener(t,n,!1)}function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}function r(e){var t,n,o,i=null,r=0,a=function(){r=Date.now(),i=null,o=e.apply(t,n),i||(t=n=null)};return function(){var c=Date.now();r||(r=c);var u=Oe-(c-r);return t=this,n=arguments,u<=0||u>Oe?(i&&(clearTimeout(i),i=null),r=c,o=e.apply(t,n),i||(t=n=null)):i||(i=setTimeout(a,u)),o}}function a(e){return me+"["+he+"] "+e}function c(e){de&&"object"==typeof window.console&&console.log(a(e))}function u(e){"object"==typeof window.console&&console.warn(a(e))}function s(){l(),c("Initialising iFrame ("+window.location.href+")"),f(),h(),g("background",X),g("padding",$),I(),b(),T(),p(),A(),N(),E(),ue=M(),B("init","Init message from host page"),ke()}function l(){function t(e){return"true"===e}var n=ce.substr(ge).split(":");he=n[0],Y=e!==n[1]?Number(n[1]):Y,_=e!==n[2]?t(n[2]):_,de=e!==n[3]?t(n[3]):de,se=e!==n[4]?Number(n[4]):se,Q=e!==n[6]?t(n[6]):Q,K=n[7],re=e!==n[8]?n[8]:re,X=n[9],$=n[10],Te=e!==n[11]?Number(n[11]):Te,ue.enable=e!==n[12]&&t(n[12]),ve=e!==n[13]?n[13]:ve,Ne=e!==n[14]?n[14]:Ne,fe=e!==n[15]?Boolean(n[15]):fe}function d(e){var t=e.split("Callback");if(2===t.length){var n="on"+t[0].charAt(0).toUpperCase()+t[0].slice(1);this[n]=this[e],delete this[e],u("Deprecated: '"+e+"' has been renamed '"+n+"'. The old method will be removed in the next major version.")}}function f(){function e(){var e=window.iFrameResizer;c("Reading data from page: "+JSON.stringify(e)),Object.keys(e).forEach(d,e),Ce="onMessage"in e?e.onMessage:Ce,ke="onReady"in e?e.onReady:ke,be="targetOrigin"in e?e.targetOrigin:be,re="heightCalculationMethod"in e?e.heightCalculationMethod:re,Ne="widthCalculationMethod"in e?e.widthCalculationMethod:Ne}function t(e,t){return"function"==typeof e&&(c("Setup custom "+t+"CalcMethod"),ze[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),re=t(re,"height"),Ne=t(Ne,"width")),c("TargetOrigin for parent set to: "+be)}function m(e,t){return-1!==t.indexOf("-")&&(u("Negative CSS value ignored for "+e),t=""),t}function g(t,n){e!==n&&""!==n&&"null"!==n&&(document.body.style[t]=n,c("Body "+t+' set to "'+n+'"'))}function h(){e===K&&(K=Y+"px"),g("margin",m("margin",K))}function p(){document.documentElement.style.height="",document.body.style.height="",c('HTML & body height set to "auto"')}function v(e){var t={add:function(t){function o(){B(e.eventName,e.eventType)}Re[t]=o,n(window,t,o,{passive:!0})},remove:function(e){var t=Re[e];delete Re[e],o(window,e,t)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(t[e.method])):t[e.method](e.eventName),c(i(e.method)+" event listener: "+e.eventType)}function y(e){v({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),v({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),v({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),v({method:e,eventType:"Input",eventName:"input"}),v({method:e,eventType:"Mouse Up",eventName:"mouseup"}),v({method:e,eventType:"Mouse Down",eventName:"mousedown"}),v({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),v({method:e,eventType:"Print",eventName:["afterprint","beforeprint"]}),v({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),v({method:e,eventType:"Touch Start",eventName:"touchstart"}),v({method:e,eventType:"Touch End",eventName:"touchend"}),v({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),v({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),v({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),v({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===ve&&v({method:e,eventType:"IFrame Resized",eventName:"resize"})}function w(e,t,n,o){return t!==e&&(e in n||(u(e+" is not a valid option for "+o+"CalculationMethod."),e=t),c(o+' calculation method set to "'+e+'"')),e}function b(){re=w(re,ie,je,"height")}function T(){Ne=w(Ne,Me,Fe,"width")}function E(){!0===Q?(y("add"),x()):c("Auto Resize disabled")}function S(){null!==Z&&Z.disconnect()}function O(){y("remove"),S(),clearInterval(le)}function I(){var e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.appendChild(e)}function M(){function t(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function o(e){var n=e.getBoundingClientRect(),o=t();return{x:parseInt(n.left,10)+parseInt(o.x,10),y:parseInt(n.top,10)+parseInt(o.y,10)}}function i(t){function n(e){var t=o(e);c("Moving to in page link (#"+i+") at x: "+t.x+" y: "+t.y),U(t.y,t.x,"scrollToOffset")}var i=t.split("#")[1]||t,r=decodeURIComponent(i),a=document.getElementById(r)||document.getElementsByName(r)[0];e!==a?n(a):(c("In page link (#"+i+") not found in iFrame, so sending to parent"),U(0,0,"inPageLink","#"+i))}function r(){var e=window.location.hash,t=window.location.href;""!==e&&"#"!==e&&i(t)}function a(){function e(e){function t(e){e.preventDefault(),i(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&n(e,"click",t)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),e)}function s(){n(window,"hashchange",r)}function l(){setTimeout(r,te)}function d(){Array.prototype.forEach&&document.querySelectorAll?(c("Setting up location.hash handlers"),a(),s(),l()):u("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return ue.enable?d():c("In page linking not enabled"),{findTarget:i}}function N(){function e(e){U(0,0,e.type,e.screenY+":"+e.screenX)}function t(t,o){c("Add event listener: "+o),n(window.document,t,e)}!0===fe&&(t("mouseenter","Mouse Enter"),t("mouseleave","Mouse Leave"))}function A(){c("Enable public methods"),Ae.parentIFrame={autoResize:function e(t){return!0===t&&!1===Q?(Q=!0,E()):!1===t&&!0===Q&&(Q=!1,O()),U(0,0,"autoResize",JSON.stringify(Q)),Q},close:function e(){U(0,0,"close")},getId:function e(){return he},getPageInfo:function e(t){"function"==typeof t?(xe=t,U(0,0,"pageInfo")):(xe=function(){},U(0,0,"pageInfoStop"))},moveToAnchor:function e(t){ue.findTarget(t)},reset:function e(){W("parentIFrame.reset")},scrollTo:function e(t,n){U(n,t,"scrollTo")},scrollToOffset:function e(t,n){U(n,t,"scrollToOffset")},sendMessage:function e(t,n){U(0,0,"message",JSON.stringify(t),n)},setHeightCalculationMethod:function e(t){re=t,b()},setWidthCalculationMethod:function e(t){Ne=t,T()},setTargetOrigin:function e(t){c("Set targetOrigin: "+t),be=t},size:function e(t,n){var o;B("size","parentIFrame.size("+((t||"")+(n?","+n:""))+")",t,n)}}}function C(){0!==se&&(c("setInterval: "+se+"ms"),le=setInterval((function(){B("interval","setInterval: "+se)}),Math.abs(se)))}function k(){function e(e){function t(e){!1===e.complete&&(c("Attach listeners to "+e.src),e.addEventListener("load",i,!1),e.addEventListener("error",r,!1),s.push(e))}"attributes"===e.type&&"src"===e.attributeName?t(e.target):"childList"===e.type&&Array.prototype.forEach.call(e.target.querySelectorAll("img"),t)}function t(e){s.splice(s.indexOf(e),1)}function n(e){c("Remove listeners from "+e.src),e.removeEventListener("load",i,!1),e.removeEventListener("error",r,!1),t(e)}function o(e,t,o){n(e.target),B(t,o+": "+e.target.src)}function i(e){o(e,"imageLoad","Image loaded")}function r(e){o(e,"imageLoadFailed","Image load failed")}function a(t){B("mutationObserver","mutationObserver: "+t[0].target+" "+t[0].type),t.forEach(e)}function u(){var e=document.querySelector("body"),t={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return d=new l(a),c("Create body MutationObserver"),d.observe(e,t),d}var s=[],l=window.MutationObserver||window.WebKitMutationObserver,d=u();return{disconnect:function(){"disconnect"in d&&(c("Disconnect body MutationObserver"),d.disconnect(),s.forEach(n))}}}function x(){var e=0>se;window.MutationObserver||window.WebKitMutationObserver?e?C():Z=k():(c("MutationObserver not supported in this browser!"),C())}function z(e,t){var n=0;return t=t||document.body,n=null!==(n=document.defaultView.getComputedStyle(t,null))?n[e]:0,parseInt(n,V)}function R(e){e>Oe/2&&c("Event throttle increased to "+(Oe=2*e)+"ms")}function D(e,t){for(var n=t.length,o=0,r=0,a=i(e),u=Date.now(),s=0;s<n;s++)(o=t[s].getBoundingClientRect()[e]+z("margin"+a,t[s]))>r&&(r=o);return u=Date.now()-u,c("Parsed "+n+" HTML elements"),c("Element position calculated in "+u+"ms"),R(u),r}function L(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function j(e,t){function n(){return u("No tagged elements ("+t+") found on page"),document.querySelectorAll("body *")}var o=document.querySelectorAll("["+t+"]");return 0===o.length&&n(),D(e,o)}function F(){return document.querySelectorAll("body *")}function P(t,n,o,i){function r(){U(oe=f,Ie=m,t)}function a(){function t(e,t){var n;return!(Math.abs(e-t)<=Te)}return f=e!==o?o:je[re](),m=e!==i?i:Fe[Ne](),t(oe,f)||_&&t(Ie,m)}function u(){return!(t in{init:1,interval:1,size:1})}function s(){return re in pe||_&&Ne in pe}function l(){c("No change in size detected")}function d(){u()&&s()?W(n):t in{interval:1}||l()}var f,m;a()||"init"===t?(q(),r()):d()}function B(e,t,n,o){function i(){e in{reset:1,resetPage:1,init:1}||c("Trigger event: "+t)}function r(){return Ee&&e in ee}r()?c("Trigger event cancelled: "+e):(i(),"init"===e?P(e,t,n,o):Pe(e,t,n,o))}function q(){Ee||(Ee=!0,c("Trigger event lock on")),clearTimeout(Se),Se=setTimeout((function(){Ee=!1,c("Trigger event lock off"),c("--")}),te)}function H(e){oe=je[re](),Ie=Fe[Ne](),U(oe,Ie,e)}function W(e){var t=re;re=ie,c("Reset trigger event: "+e),q(),H("reset"),re=t}function U(t,n,o,i,r){function a(){e===r?r=be:c("Message targetOrigin: "+r)}function u(){var a,u=he+":"+(t+":"+n)+":"+o+(e!==i?":"+i:"");c("Sending message to host page ("+u+")"),we.postMessage(me+u,r)}a(),u()}function J(e){function t(){return me===(""+e.data).substr(0,ge)}function n(){return e.data.split("]")[1].split(":")[0]}function o(){return e.data.substr(e.data.indexOf(":")+1)}function i(){return!("undefined"!=typeof module&&module.exports)&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function r(){return e.data.split(":")[2]in{true:1,false:1}}function a(){var t=n();t in d?d[t]():i()||r()||u("Unexpected message ("+e.data+")")}function l(){!1===ne?a():r()?d.init():c('Ignored message of type "'+n()+'". Received before initialization.')}var d={init:function t(){ce=e.data,we=e.source,s(),ne=!1,setTimeout((function(){ae=!1}),te)},reset:function e(){ae?c("Page reset ignored by init"):(c("Page size reset by host page"),H("resetPage"))},resize:function e(){B("resizeParent","Parent window requested size check")},moveToAnchor:function e(){ue.findTarget(o())},inPageLink:function e(){this.moveToAnchor()},pageInfo:function e(){var t=o();c("PageInfoFromParent called from parent: "+t),xe(JSON.parse(t)),c(" --")},message:function e(){var t=o();c("onMessage called from parent: "+t),Ce(JSON.parse(t)),c(" --")}};t()&&l()}function G(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}if("undefined"!=typeof window){var Q=!0,V=10,X="",Y=0,K="",Z=null,$="",_=!1,ee={resize:1,click:1},te=128,ne=!0,oe=1,ie="bodyOffset",re=ie,ae=!0,ce="",ue={},se=32,le=null,de=!1,fe=!1,me="[iFrameSizer]",ge=me.length,he="",pe={max:1,min:1,bodyScroll:1,documentElementScroll:1},ve="child",ye=!0,we=window.parent,be="*",Te=0,Ee=!1,Se=null,Oe=16,Ie=1,Me="scroll",Ne=Me,Ae=window,Ce=function(){u("onMessage function not defined")},ke=function(){},xe=function(){},ze={height:function(){return u("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return u("Custom width calculation function not defined"),document.body.scrollWidth}},Re={},De=!1;try{var Le=Object.create({},{passive:{get:function(){De=!0}}});window.addEventListener("test",t,Le),window.removeEventListener("test",t,Le)}catch(e){}var je={bodyOffset:function e(){return document.body.offsetHeight+z("marginTop")+z("marginBottom")},offset:function(){return je.bodyOffset()},bodyScroll:function e(){return document.body.scrollHeight},custom:function e(){return ze.height()},documentElementOffset:function e(){return document.documentElement.offsetHeight},documentElementScroll:function e(){return document.documentElement.scrollHeight},max:function e(){return Math.max.apply(null,L(je))},min:function e(){return Math.min.apply(null,L(je))},grow:function e(){return je.max()},lowestElement:function e(){return Math.max(je.bodyOffset()||je.documentElementOffset(),D("bottom",F()))},taggedElement:function e(){return j("bottom","data-iframe-height")}},Fe={bodyScroll:function e(){return document.body.scrollWidth},bodyOffset:function e(){return document.body.offsetWidth},custom:function e(){return ze.width()},documentElementScroll:function e(){return document.documentElement.scrollWidth},documentElementOffset:function e(){return document.documentElement.offsetWidth},scroll:function e(){return Math.max(Fe.bodyScroll(),Fe.documentElementScroll())},max:function e(){return Math.max.apply(null,L(Fe))},min:function e(){return Math.min.apply(null,L(Fe))},rightMostElement:function e(){return D("right",F())},taggedElement:function e(){return j("right","data-iframe-width")}},Pe=r(P);n(window,"message",J),n(window,"readystatechange",G),G()}}(),function(e,t,n){function o(){if("object"==typeof console&&console.log){var e=new Date;e=e.toISOString()?e.toISOString():e.toUTCString(),console.log("[CMLS Contesting]",e,[].slice.call(arguments))}}e((function(){var n,o,i,r,a,c;e("body.contest-sweeps,body.contest-ugc").length<1||(e("#fancyrules").on("click",(function(){"parentIFrame"in t&&t.parentIFrame.scrollToOffset(0,0)})),e('a[href*="bandsintown.com"],a.bit-widget-initializer').length&&e.getScript("https://widget.bandsintown.com/main.min.js"),n=document,o="script",i="twitter-wjs",a=n.getElementsByTagName(o)[0],c=/^http:/.test(n.location)?"http":"https",n.getElementById(i)||((r=n.createElement(o)).id=i,r.src=c+"://platform.twitter.com/widgets.js",a.parentNode.insertBefore(r,a)))})),t.installGoogleAnalytics=function(e){var n,i,r,a,c,u,s;t.top===t.self&&e&&(o("Installing Google Analytics ID ",e),n=t,i=document,r="script",a="//www.google-analytics.com/analytics.js",c="ga",n.GoogleAnalyticsObject=c,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,u=i.createElement(r),s=i.getElementsByTagName(r)[0],u.async=1,u.src=a,s.parentNode.insertBefore(u,s),ga("create",e,"auto",{name:"contestTracker"}),ga("contestTracker.send","pageview"))},e.fn.expireReplace=function(e,t){"[object Date]"!==Object.prototype.toString.call(e)&&(e=new Date(Date.parse(e))),e instanceof Date&&!isNaN(e.getTime())?Date.now()>e&&this.text(t):o("Supplied expireReplace timestamp is an invalid date.",e,e instanceof Date)}}(jQuery,window);
//# sourceMappingURL=base.js.map