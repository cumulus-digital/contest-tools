!function(e){"use strict";function n(n,t,i){"addEventListener"in e?n.addEventListener(t,i,!1):"attachEvent"in e&&n.attachEvent("on"+t,i)}function t(){var n=["moz","webkit","o","ms"],t;for(t=0;t<n.length&&!L;t+=1)L=e[n[t]+"RequestAnimationFrame"];L||a("setup","RequestAnimationFrame not supported")}function i(n){var t="Host page: "+n;return e.top!==e.self&&(t=e.parentIFrame&&e.parentIFrame.getId?e.parentIFrame.getId()+": "+n:"Nested host page: "+n),t}function o(e){return T+"["+i(e)+"]"}function r(e){return q[e]?q[e].log:I}function a(e,n){s("log",e,n,r(e))}function c(e,n){s("info",e,n,r(e))}function u(e,n){s("warn",e,n,!0)}function s(n,t,i,r){!0===r&&"object"==typeof e.console&&console[n](o(t),i)}function l(n){function t(){function e(){y(P),g(B)}o("Height"),o("Width"),p(e,P,"resetPage")}function i(){var e=W.substr(A).split(":");return{iframe:q[e[0]].iframe,id:e[0],height:e[1],width:e[2],type:e[3]}}function o(e){var n=Number(q[B]["max"+e]),t=Number(q[B]["min"+e]),i=e.toLowerCase(),o=Number(P[i]);a(B,"Checking "+i+" is in range "+t+"-"+n),t>o&&(o=t,a(B,"Set "+i+" to min value")),o>n&&(o=n,a(B,"Set "+i+" to max value")),P[i]=""+o}function r(){function e(){function e(){var e=0,n=!1;for(a(B,"Checking connection is from allowed list of origins: "+i);e<i.length;e++)if(i[e]===t){n=!0;break}return n}function n(){var e=q[B].remoteHost;return a(B,"Checking connection is from: "+e),t===e}return i.constructor===Array?e():n()}var t=n.origin,i=q[B].checkOrigin;if(i&&""+t!="null"&&!e())throw new Error("Unexpected message received from: "+t+" for "+P.iframe.id+". Message was: "+n.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function s(){return T===(""+W).substr(0,A)&&W.substr(A).split(":")[0]in q}function l(){var e=P.type in{"true":1,"false":1,undefined:1};return e&&a(B,"Ignoring init message from meta parent page"),e}function k(e){return W.substr(W.indexOf(":")+S+e)}function M(e){a(B,"MessageCallback passed: {iframe: "+P.iframe.id+", message: "+e+"}"),E("messageCallback",{iframe:P.iframe,message:JSON.parse(e)}),a(B,"--")}function F(){var e=!0;return null===P.iframe&&(u(B,"IFrame ("+P.id+") not found"),e=!1),e}function x(e){var n=e.getBoundingClientRect();return m(B),{x:Math.floor(Number(n.left)+Number(H.x)),y:Math.floor(Number(n.top)+Number(H.y))}}function z(n){function t(){H=c,C(),a(B,"--")}function i(){return{x:Number(P.width)+r.x,y:Number(P.height)+r.y}}function o(){e.parentIFrame?e.parentIFrame["scrollTo"+(n?"Offset":"")](c.x,c.y):u(B,"Unable to scroll to requested position, window.parentIFrame not found")}var r=n?x(P.iframe):{x:0,y:0},c=i();a(B,"Reposition requested from iFrame (offset x:"+r.x+" y:"+r.y+")"),e.top!==e.self?o():t()}function C(){!1!==E("scrollCallback",H)?g(B):h()}function O(n){function t(){var e=x(c);a(B,"Moving to in page link (#"+o+") at x: "+e.x+" y: "+e.y),H={x:e.x,y:e.y},C(),a(B,"--")}function i(){e.parentIFrame?e.parentIFrame.moveToAnchor(o):console.log(B,"In page link #"+o+" not found and window.parentIFrame not found")}var o=n.split("#")[1]||"",r=decodeURIComponent(o),c=document.getElementById(r)||document.getElementsByName(r)[0];c?t():e.top!==e.self?i():consolelog(B,"In page link #"+o+" not found")}function E(e,n){return f(B,e,n)}function I(){switch(q[B].firstRun&&L(),P.type){case"close":d(P.iframe);break;case"message":M(k(6));break;case"scrollTo":z(!1);break;case"scrollToOffset":z(!0);break;case"inPageLink":O(k(9));break;case"reset":b(P);break;case"init":t(),E("initCallback",P.iframe),E("resizedCallback",P);break;default:t(),E("resizedCallback",P)}}function R(e){var n=!0;return q[e]||(n=!1,u(P.type+" No settings for "+e+". Message was: "+W)),n}function N(){for(var e in q)v("iFrame requested init",w(e),document.getElementById(e),e)}function L(){q[B].firstRun=!1}var W=n.data,P={},B=null;"[iFrameResizerChild]Ready"===W?N():s()?(P=i(),B=j=P.id,!l()&&R(B)&&(a(B,"Received: "+W),F()&&r()&&I())):c(B,"Ignored: "+W)}function f(e,n,t){var i=null,o=null;if(q[e]){if(i=q[e][n],"function"!=typeof i)throw new TypeError(n+" on iFrame["+e+"] is not a function");o=i(t)}return o}function d(e){var n=e.id;a(n,"Removing iFrame: "+n),e.parentNode.removeChild(e),f(n,"closedCallback",n),a(n,"--"),delete q[n]}function m(n){null===H&&(H={x:void 0!==e.pageXOffset?e.pageXOffset:document.documentElement.scrollLeft,y:void 0!==e.pageYOffset?e.pageYOffset:document.documentElement.scrollTop},a(n,"Get page position: "+H.x+","+H.y))}function g(n){null!==H&&(e.scrollTo(H.x,H.y),a(n,"Set page position: "+H.x+","+H.y),h())}function h(){H=null}function b(e){function n(){y(e),v("reset","reset",e.iframe,e.id)}a(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),m(e.id),p(n,e,"reset")}function y(e){function n(n){e.iframe.style[n]=e[n]+"px",a(e.id,"IFrame ("+o+") "+n+" set to "+e[n]+"px")}function t(n){R||"0"!==e[n]||(R=!0,a(o,"Hidden iFrame detected, creating visibility listener"),x())}function i(e){n(e),t(e)}var o=e.iframe.id;q[o]&&(q[o].sizeHeight&&i("height"),q[o].sizeWidth&&i("width"))}function p(e,n,t){t!==n.type&&L?(a(n.id,"Requesting animation frame"),L(e)):e()}function v(e,n,t,i){function o(){a(i,"["+e+"] Sending msg to iframe["+i+"] ("+n+")"),t.contentWindow.postMessage(T+n,u)}function r(){c(i,"["+e+"] IFrame("+i+") not found"),q[i]&&delete q[i]}i=i||t.id;var u=q[i].targetOrigin;t&&"contentWindow"in t?o():r()}function w(e){return e+":"+q[e].bodyMarginV1+":"+q[e].sizeWidth+":"+q[e].log+":"+q[e].interval+":"+q[e].enablePublicMethods+":"+q[e].autoResize+":"+q[e].bodyMargin+":"+q[e].heightCalculationMethod+":"+q[e].bodyBackground+":"+q[e].bodyPadding+":"+q[e].tolerance+":"+q[e].inPageLinks+":"+q[e].resizeFrom+":"+q[e].widthCalculationMethod}function k(e,t){function i(){function n(n){1/0!==q[k][n]&&0!==q[k][n]&&(e.style[n]=q[k][n]+"px",a(k,"Set "+n+" = "+q[k][n]+"px"))}function t(e){if(q[k]["min"+e]>q[k]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}t("Height"),t("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}function o(n){return j=n,""===n&&(e.id=n=(t.id||B.id)+E++,I=(t||{}).log,j=n,a(n,"Added missing iframe ID: "+n+" ("+e.src+")")),n}function r(){a(k,"IFrame scrolling "+(q[k].scrolling?"enabled":"disabled")+" for "+k),e.style.overflow=!1===q[k].scrolling?"hidden":"auto",e.scrolling=!1===q[k].scrolling?"no":"yes"}function c(){("number"==typeof q[k].bodyMargin||"0"===q[k].bodyMargin)&&(q[k].bodyMarginV1=q[k].bodyMargin,q[k].bodyMargin=""+q[k].bodyMargin+"px")}function s(){var n=q[k].firstRun,t=q[k].heightCalculationMethod in W;!n&&t&&b({iframe:e,height:0,width:0,type:"init"})}function l(){Function.prototype.bind&&(q[k].iframe.iFrameResizer={close:d.bind(null,q[k].iframe),resize:v.bind(null,"Window resize","resize",q[k].iframe),moveToAnchor:function(e){v("Move to anchor","inPageLink:"+e,q[k].iframe,k)},sendMessage:function(e){e=JSON.stringify(e),v("Send Message","message:"+e,q[k].iframe,k)}})}function f(t){function i(){v("iFrame.onload",t,e),s()}n(e,"load",i),v("init",t,e)}function m(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}function g(e){for(var n in B)B.hasOwnProperty(n)&&(q[k][n]=e.hasOwnProperty(n)?e[n]:B[n])}function h(e){return""===e||"file://"===e?"*":e}function y(n){n=n||{},q[k]={firstRun:!0,iframe:e,remoteHost:e.src.split("/").slice(0,3).join("/")},m(n),g(n),q[k].targetOrigin=!0===q[k].checkOrigin?h(q[k].remoteHost):"*"}function p(){return k in q&&"iFrameResizer"in e}var k=o(e.id);p()?u(k,"Ignored iFrame, already setup."):(y(t),r(),i(),c(),f(w(k)),l())}function M(e,n){null===P&&(P=setTimeout(function(){P=null,e()},n))}function F(e){return null!==e.offsetParent}function x(){function n(){function e(e){function n(n){return"0px"===q[e].iframe.style[n]}F(q[e].iframe)&&(n("height")||n("width"))&&v("Visibility change","resize",q[e].iframe,e)}for(var n in q)e(n)}function t(e){a("window","Mutation observed: "+e[0].target+" "+e[0].type),M(n,16)}function i(){var e=document.querySelector("body"),n={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},i=new o(t);i.observe(e,n)}var o=e.MutationObserver||e.WebKitMutationObserver;o&&i()}function z(){function t(e){function n(){o("Window "+e,"resize")}a("window","Trigger event: "+e),M(n,16)}function i(){function e(){o("Tab Visable","resize")}"hidden"!==document.visibilityState&&(a("document","Trigger event: Visiblity change"),M(e,16))}function o(e,n){function t(e){return"parent"===q[e].resizeFrom&&q[e].autoResize&&!q[e].firstRun}for(var i in q)t(i)&&v(e,n,document.getElementById(i),i)}n(e,"message",l),n(e,"resize",function(){t("resize")}),n(document,"visibilitychange",i),n(document,"-webkit-visibilitychange",i),n(e,"focusin",function(){t("focus")}),n(e,"focus",function(){t("focus")})}function C(){function e(e,t){if(!t.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==t.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+t.tagName+">");k(t,e),n.push(t)}var n;return t(),z(),function i(t,o){switch(n=[],typeof o){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(o||"iframe"),e.bind(void 0,t));break;case"object":e(t,o);break;default:throw new TypeError("Unexpected data type ("+typeof o+")")}return n}}function O($){$.fn.iFrameResize=function e(n){return this.filter("iframe").each(function(e,t){k(t,n)}).end()}}var E=0,I=!1,R=!1,N="message",S=N.length,T="[iFrameSizer]",A=T.length,H=null,L=e.requestAnimationFrame,W={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},q={},P=null,j="Host Page",B={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:function(){u("MessageCallback function not defined")},resizedCallback:function(){},scrollCallback:function(){return!0}};e.jQuery&&O(jQuery),e.iFrameResize=e.iFrameResize||C()}(window||{}),function(e,n){var t=e.document.querySelector(".entry-content iframe"),i=-1!==navigator.userAgent.indexOf("MSIE");e.iFrameResize({log:e._CMLS&&e._CMLS.debug?e._CMLS.debug:!1,checkOrigin:!1,heightCalculationMethod:i?"max":"lowestElement",tolerance:5},t),document.addEventListener("DOMContentLoaded",function(){for(var n=e.document.getElementsByClassName(".at4-share-outer"),t=0;t<n.length;t++)n[t].style.display="none"}),e.installGoogleAnalytics=function(n){n&&(!function(e,n,t,i,o,r,a){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,r=n.createElement(t),a=n.getElementsByTagName(t)[0],r.async=1,r.src=i,a.parentNode.insertBefore(r,a)}(e,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create",n,"auto",{name:"contestTracker"}),ga("contestTracker.send","pageview"))}}(window);
//# sourceMappingURL=./base.js.map