!function(e){"use strict";function n(n,t,i){"addEventListener"in e?n.addEventListener(t,i,!1):"attachEvent"in e&&n.attachEvent("on"+t,i)}function t(n,t,i){"removeEventListener"in e?n.removeEventListener(t,i,!1):"detachEvent"in e&&n.detachEvent("on"+t,i)}function i(){var n=["moz","webkit","o","ms"],t;for(t=0;t<n.length&&!j;t+=1)j=e[n[t]+"RequestAnimationFrame"];j||c("setup","RequestAnimationFrame not supported")}function o(n){var t="Host page: "+n;return e.top!==e.self&&(t=e.parentIFrame&&e.parentIFrame.getId?e.parentIFrame.getId()+": "+n:"Nested host page: "+n),t}function r(e){return L+"["+o(e)+"]"}function a(e){return B[e]?B[e].log:S}function c(e,n){f("log",e,n,a(e))}function s(e,n){f("info",e,n,a(e))}function u(e,n){f("warn",e,n,!0)}function f(n,t,i,o){!0===o&&"object"==typeof e.console&&console[n](r(t),i)}function l(i){function o(){function e(){y(J),h(X)}a("Height"),a("Width"),v(e,J,"init")}function r(){var e=G.substr(P).split(":");return{iframe:B[e[0]].iframe,id:e[0],height:e[1],width:e[2],type:e[3]}}function a(e){var n=Number(B[X]["max"+e]),t=Number(B[X]["min"+e]),i=e.toLowerCase(),o=Number(J[i]);c(X,"Checking "+i+" is in range "+t+"-"+n),t>o&&(o=t,c(X,"Set "+i+" to min value")),o>n&&(o=n,c(X,"Set "+i+" to max value")),J[i]=""+o}function f(){function e(){function e(){var e=0,i=!1;for(c(X,"Checking connection is from allowed list of origins: "+t);e<t.length;e++)if(t[e]===n){i=!0;break}return i}function i(){var e=B[X].remoteHost;return c(X,"Checking connection is from: "+e),n===e}return t.constructor===Array?e():i()}var n=i.origin,t=B[X].checkOrigin;if(t&&""+n!="null"&&!e())throw new Error("Unexpected message received from: "+n+" for "+J.iframe.id+". Message was: "+i.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function l(){return L===(""+G).substr(0,P)&&G.substr(P).split(":")[0]in B}function I(){var e=J.type in{"true":1,"false":1,undefined:1};return e&&c(X,"Ignoring init message from meta parent page"),e}function F(e){return G.substr(G.indexOf(":")+A+e)}function x(e){c(X,"MessageCallback passed: {iframe: "+J.iframe.id+", message: "+e+"}"),j("messageCallback",{iframe:J.iframe,message:JSON.parse(e)}),c(X,"--")}function z(){var n=document.body.getBoundingClientRect(),t=J.iframe.getBoundingClientRect();return JSON.stringify({clientHeight:Math.max(document.documentElement.clientHeight,e.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,e.innerWidth||0),offsetTop:parseInt(t.top-n.top,10),offsetLeft:parseInt(t.left-n.left,10),scrollTop:e.pageYOffset,scrollLeft:e.pageXOffset})}function E(e,n){function t(){w("Send Page Info","pageInfo:"+z(),e,n)}M(t,32)}function O(){function i(n,t){function i(){B[a]?E(B[a].iframe,a):o()}["scroll","resize"].forEach(function(o){c(a,n+o+" listener for sendPageInfo"),t(e,o,i)})}function o(){i("Remove ",t)}function r(){i("Add ",n)}var a=X;r(),B[a].stopPageInfo=o}function R(){B[X]&&B[X].stopPageInfo&&(B[X].stopPageInfo(),delete B[X].stopPageInfo)}function C(){var e=!0;return null===J.iframe&&(u(X,"IFrame ("+J.id+") not found"),e=!1),e}function H(e){var n=e.getBoundingClientRect();return g(X),{x:Math.floor(Number(n.left)+Number(W.x)),y:Math.floor(Number(n.top)+Number(W.y))}}function S(n){function t(){W=a,T(),c(X,"--")}function i(){return{x:Number(J.width)+r.x,y:Number(J.height)+r.y}}function o(){e.parentIFrame?e.parentIFrame["scrollTo"+(n?"Offset":"")](a.x,a.y):u(X,"Unable to scroll to requested position, window.parentIFrame not found")}var r=n?H(J.iframe):{x:0,y:0},a=i();c(X,"Reposition requested from iFrame (offset x:"+r.x+" y:"+r.y+")"),e.top!==e.self?o():t()}function T(){!1!==j("scrollCallback",W)?h(X):p()}function N(n){function t(){var e=H(a);c(X,"Moving to in page link (#"+o+") at x: "+e.x+" y: "+e.y),W={x:e.x,y:e.y},T(),c(X,"--")}function i(){e.parentIFrame?e.parentIFrame.moveToAnchor(o):c(X,"In page link #"+o+" not found and window.parentIFrame not found")}var o=n.split("#")[1]||"",r=decodeURIComponent(o),a=document.getElementById(r)||document.getElementsByName(r)[0];a?t():e.top!==e.self?i():c(X,"In page link #"+o+" not found")}function j(e,n){return d(X,e,n)}function q(){switch(B[X].firstRun&&_(),J.type){case"close":m(J.iframe);break;case"message":x(F(6));break;case"scrollTo":S(!1);break;case"scrollToOffset":S(!0);break;case"pageInfo":E(B[X].iframe,X),O();break;case"pageInfoStop":R();break;case"inPageLink":N(F(9));break;case"reset":b(J);break;case"init":o(),j("initCallback",J.iframe),j("resizedCallback",J);break;default:o(),j("resizedCallback",J)}}function V(e){var n=!0;return B[e]||(n=!1,u(J.type+" No settings for "+e+". Message was: "+G)),n}function U(){for(var e in B)w("iFrame requested init",k(e),document.getElementById(e),e)}function _(){B[X].firstRun=!1}var G=i.data,J={},X=null;"[iFrameResizerChild]Ready"===G?U():l()?(J=r(),X=D=J.id,!I()&&V(X)&&(c(X,"Received: "+G),C()&&f()&&q())):s(X,"Ignored: "+G)}function d(e,n,t){var i=null,o=null;if(B[e]){if(i=B[e][n],"function"!=typeof i)throw new TypeError(n+" on iFrame["+e+"] is not a function");o=i(t)}return o}function m(e){var n=e.id;c(n,"Removing iFrame: "+n),e.parentNode.removeChild(e),d(n,"closedCallback",n),c(n,"--"),delete B[n]}function g(n){null===W&&(W={x:void 0!==e.pageXOffset?e.pageXOffset:document.documentElement.scrollLeft,y:void 0!==e.pageYOffset?e.pageYOffset:document.documentElement.scrollTop},c(n,"Get page position: "+W.x+","+W.y))}function h(n){null!==W&&(e.scrollTo(W.x,W.y),c(n,"Set page position: "+W.x+","+W.y),p())}function p(){W=null}function b(e){function n(){y(e),w("reset","reset",e.iframe,e.id)}c(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),g(e.id),v(n,e,"reset")}function y(e){function n(n){e.iframe.style[n]=e[n]+"px",c(e.id,"IFrame ("+o+") "+n+" set to "+e[n]+"px")}function t(n){T||"0"!==e[n]||(T=!0,c(o,"Hidden iFrame detected, creating visibility listener"),F())}function i(e){n(e),t(e)}var o=e.iframe.id;B[o]&&(B[o].sizeHeight&&i("height"),B[o].sizeWidth&&i("width"))}function v(e,n,t){t!==n.type&&j?(c(n.id,"Requesting animation frame"),j(e)):e()}function w(e,n,t,i){function o(){var o=B[i].targetOrigin;c(i,"["+e+"] Sending msg to iframe["+i+"] ("+n+") targetOrigin: "+o),t.contentWindow.postMessage(L+n,o)}function r(){s(i,"["+e+"] IFrame("+i+") not found"),B[i]&&delete B[i]}function a(){t&&"contentWindow"in t&&null!==t.contentWindow?o():r()}i=i||t.id,B[i]&&a()}function k(e){return e+":"+B[e].bodyMarginV1+":"+B[e].sizeWidth+":"+B[e].log+":"+B[e].interval+":"+B[e].enablePublicMethods+":"+B[e].autoResize+":"+B[e].bodyMargin+":"+B[e].heightCalculationMethod+":"+B[e].bodyBackground+":"+B[e].bodyPadding+":"+B[e].tolerance+":"+B[e].inPageLinks+":"+B[e].resizeFrom+":"+B[e].widthCalculationMethod}function I(e,t){function i(){function n(n){1/0!==B[I][n]&&0!==B[I][n]&&(e.style[n]=B[I][n]+"px",c(I,"Set "+n+" = "+B[I][n]+"px"))}function t(e){if(B[I]["min"+e]>B[I]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}t("Height"),t("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}function o(){var e=t&&t.id||U.id+H++;return null!==document.getElementById(e)&&(e+=H++),e}function r(n){return D=n,""===n&&(e.id=n=o(),S=(t||{}).log,D=n,c(n,"Added missing iframe ID: "+n+" ("+e.src+")")),n}function a(){c(I,"IFrame scrolling "+(B[I].scrolling?"enabled":"disabled")+" for "+I),e.style.overflow=!1===B[I].scrolling?"hidden":"auto",e.scrolling=!1===B[I].scrolling?"no":"yes"}function s(){("number"==typeof B[I].bodyMargin||"0"===B[I].bodyMargin)&&(B[I].bodyMarginV1=B[I].bodyMargin,B[I].bodyMargin=""+B[I].bodyMargin+"px")}function f(){var n=B[I].firstRun,t=B[I].heightCalculationMethod in q;!n&&t&&b({iframe:e,height:0,width:0,type:"init"})}function l(){Function.prototype.bind&&(B[I].iframe.iFrameResizer={close:m.bind(null,B[I].iframe),resize:w.bind(null,"Window resize","resize",B[I].iframe),moveToAnchor:function(e){w("Move to anchor","inPageLink:"+e,B[I].iframe,I)},sendMessage:function(e){e=JSON.stringify(e),w("Send Message","message:"+e,B[I].iframe,I)}})}function d(t){function i(){w("iFrame.onload",t,e),f()}n(e,"load",i),w("init",t,e)}function g(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}function h(e){for(var n in U)U.hasOwnProperty(n)&&(B[I][n]=e.hasOwnProperty(n)?e[n]:U[n])}function p(e){return""===e||"file://"===e?"*":e}function y(n){n=n||{},B[I]={firstRun:!0,iframe:e,remoteHost:e.src.split("/").slice(0,3).join("/")},g(n),h(n),B[I].targetOrigin=!0===B[I].checkOrigin?p(B[I].remoteHost):"*"}function v(){return I in B&&"iFrameResizer"in e}var I=r(e.id);v()?u(I,"Ignored iFrame, already setup."):(y(t),a(),i(),s(),d(k(I)),l())}function M(e,n){null===V&&(V=setTimeout(function(){V=null,e()},n))}function F(){function n(){function e(e){function n(n){return"0px"===B[e].iframe.style[n]}function t(e){return null!==e.offsetParent}t(B[e].iframe)&&(n("height")||n("width"))&&w("Visibility change","resize",B[e].iframe,e)}for(var n in B)e(n)}function t(e){c("window","Mutation observed: "+e[0].target+" "+e[0].type),M(n,16)}function i(){var e=document.querySelector("body"),n={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},i=new o(t);i.observe(e,n)}var o=e.MutationObserver||e.WebKitMutationObserver;o&&i()}function x(e){function n(){E("Window "+e,"resize")}c("window","Trigger event: "+e),M(n,16)}function z(){function e(){E("Tab Visable","resize")}"hidden"!==document.visibilityState&&(c("document","Trigger event: Visiblity change"),M(e,16))}function E(e,n){function t(e){return"parent"===B[e].resizeFrom&&B[e].autoResize&&!B[e].firstRun}for(var i in B)t(i)&&w(e,n,document.getElementById(i),i)}function O(){n(e,"message",l),n(e,"resize",function(){x("resize")}),n(document,"visibilitychange",z),n(document,"-webkit-visibilitychange",z),n(e,"focusin",function(){x("focus")}),n(e,"focus",function(){x("focus")})}function R(){function e(e,t){function i(){if(!t.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==t.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+t.tagName+">")}t&&(i(),I(t,e),n.push(t))}var n;return i(),O(),function t(i,o){switch(n=[],typeof o){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(o||"iframe"),e.bind(void 0,i));break;case"object":e(i,o);break;default:throw new TypeError("Unexpected data type ("+typeof o+")")}return n}}function C($){$.fn.iFrameResize=function e(n){return this.filter("iframe").each(function(e,t){I(t,n)}).end()}}var H=0,S=!1,T=!1,N="message",A=N.length,L="[iFrameSizer]",P=L.length,W=null,j=e.requestAnimationFrame,q={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},B={},V=null,D="Host Page",U={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:function(){u("MessageCallback function not defined")},resizedCallback:function(){},scrollCallback:function(){return!0}};e.jQuery&&C(jQuery),e.iFrameResize=e.iFrameResize||R()}(window||{}),function(e,n){function t(){e.addthis&&e.addthis.layers(function(e){e.destroy()})}function i(){e.contestIframeResizerObject&&e.contestIframeResizerObject[0].iFrameResizer.close(),e.History&&e.History.Adapter&&e.History.Adapter.unbind(e,"statechange",i)}var o=e.document.querySelector(".entry-content iframe"),r=-1!==navigator.userAgent.indexOf("MSIE");e.contestIframeResizerObject=e.iFrameResize({log:e._CMLS&&e._CMLS.debug?e._CMLS.debug:!1,checkOrigin:!1,heightCalculationMethod:r?"max":"lowestElement",tolerance:5},o),e.document.addEventListener("DOMContentLoaded",function(){t()}),e.NO_ADDTHIS_HERE=!0,e.History&&e.History.Adapter&&e.History.Adapter.bind(e,"statechange",i),e.installGoogleAnalytics=function(n){n&&(!function(e,n,t,i,o,r,a){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,r=n.createElement(t),a=n.getElementsByTagName(t)[0],r.async=1,r.src=i,a.parentNode.insertBefore(r,a)}(e,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create",n,"auto",{name:"contestTracker"}),ga("contestTracker.send","pageview"))}}(window);
//# sourceMappingURL=./base.js.map