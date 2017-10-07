!function(e,n){"use strict";function t(n,t,i){"addEventListener"in e?n.addEventListener(t,i,!1):"attachEvent"in e&&n.attachEvent("on"+t,i)}function i(n,t,i){"removeEventListener"in e?n.removeEventListener(t,i,!1):"detachEvent"in e&&n.detachEvent("on"+t,i)}function o(){var n=["moz","webkit","o","ms"],t;for(t=0;t<n.length&&!q;t+=1)q=e[n[t]+"RequestAnimationFrame"];q||u("setup","RequestAnimationFrame not supported")}function r(n){var t="Host page: "+n;return e.top!==e.self&&(t=e.parentIFrame&&e.parentIFrame.getId?e.parentIFrame.getId()+": "+n:"Nested host page: "+n),t}function a(e){return A+"["+r(e)+"]"}function c(e){return V[e]?V[e].log:W}function u(e,n){l("log",e,n,c(e))}function s(e,n){l("info",e,n,c(e))}function f(e,n){l("warn",e,n,!0)}function l(n,t,i,o){!0===o&&"object"==typeof e.console&&console[n](a(t),i)}function d(n){function o(){function e(){v(Y),p(G),H("resizedCallback",Y)}a("Height"),a("Width"),w(e,Y,"init")}function r(){var e=X.substr(j).split(":");return{iframe:V[e[0]].iframe,id:e[0],height:e[1],width:e[2],type:e[3]}}function a(e){var n=Number(V[G]["max"+e]),t=Number(V[G]["min"+e]),i=e.toLowerCase(),o=Number(Y[i]);u(G,"Checking "+i+" is in range "+t+"-"+n),o<t&&(o=t,u(G,"Set "+i+" to min value")),o>n&&(o=n,u(G,"Set "+i+" to max value")),Y[i]=""+o}function c(){function e(){function e(){var e=0,n=!1;for(u(G,"Checking connection is from allowed list of origins: "+i);e<i.length;e++)if(i[e]===t){n=!0;break}return n}function n(){var e=V[G].remoteHost;return u(G,"Checking connection is from: "+e),t===e}return i.constructor===Array?e():n()}var t=n.origin,i=V[G].checkOrigin;if(i&&""+t!="null"&&!e())throw new Error("Unexpected message received from: "+t+" for "+Y.iframe.id+". Message was: "+n.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function l(){return A===(""+X).substr(0,j)&&X.substr(j).split(":")[0]in V}function d(){var e=Y.type in{true:1,false:1,undefined:1};return e&&u(G,"Ignoring init message from meta parent page"),e}function I(e){return X.substr(X.indexOf(":")+S+e)}function M(e){u(G,"MessageCallback passed: {iframe: "+Y.iframe.id+", message: "+e+"}"),H("messageCallback",{iframe:Y.iframe,message:JSON.parse(e)}),u(G,"--")}function z(){var n=document.body.getBoundingClientRect(),t=Y.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:t.height,iframeWidth:t.width,clientHeight:Math.max(document.documentElement.clientHeight,e.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,e.innerWidth||0),offsetTop:parseInt(t.top-n.top,10),offsetLeft:parseInt(t.left-n.left,10),scrollTop:e.pageYOffset,scrollLeft:e.pageXOffset})}function R(e,n){function t(){k("Send Page Info","pageInfo:"+z(),e,n)}x(t,32)}function T(){function n(n,t){function i(){V[a]?R(V[a].iframe,a):o()}["scroll","resize"].forEach(function(o){u(a,n+o+" listener for sendPageInfo"),t(e,o,i)})}function o(){n("Remove ",i)}function r(){n("Add ",t)}var a=G;r(),V[a].stopPageInfo=o}function E(){V[G]&&V[G].stopPageInfo&&(V[G].stopPageInfo(),delete V[G].stopPageInfo)}function C(){var e=!0;return null===Y.iframe&&(f(G,"IFrame ("+Y.id+") not found"),e=!1),e}function O(e){var n=e.getBoundingClientRect();return h(G),{x:Math.floor(Number(n.left)+Number(L.x)),y:Math.floor(Number(n.top)+Number(L.y))}}function N(n){function t(){L=a,W(),u(G,"--")}function i(){return{x:Number(Y.width)+r.x,y:Number(Y.height)+r.y}}function o(){e.parentIFrame?e.parentIFrame["scrollTo"+(n?"Offset":"")](a.x,a.y):f(G,"Unable to scroll to requested position, window.parentIFrame not found")}var r=n?O(Y.iframe):{x:0,y:0},a=i();u(G,"Reposition requested from iFrame (offset x:"+r.x+" y:"+r.y+")"),e.top!==e.self?o():t()}function W(){!1!==H("scrollCallback",L)?p(G):b()}function P(n){function t(){var e=O(a);u(G,"Moving to in page link (#"+o+") at x: "+e.x+" y: "+e.y),L={x:e.x,y:e.y},W(),u(G,"--")}function i(){e.parentIFrame?e.parentIFrame.moveToAnchor(o):u(G,"In page link #"+o+" not found and window.parentIFrame not found")}var o=n.split("#")[1]||"",r=decodeURIComponent(o),a=document.getElementById(r)||document.getElementsByName(r)[0];a?t():e.top!==e.self?i():u(G,"In page link #"+o+" not found")}function H(e,n){return m(G,e,n)}function q(){switch(V[G].firstRun&&J(),Y.type){case"close":g(Y.iframe);break;case"message":M(I(6));break;case"scrollTo":N(!1);break;case"scrollToOffset":N(!0);break;case"pageInfo":R(V[G].iframe,G),T();break;case"pageInfoStop":E();break;case"inPageLink":P(I(9));break;case"reset":y(Y);break;case"init":o(),H("initCallback",Y.iframe);break;default:o()}}function B(e){var n=!0;return V[e]||(n=!1,f(Y.type+" No settings for "+e+". Message was: "+X)),n}function U(){for(var e in V)k("iFrame requested init",F(e),document.getElementById(e),e)}function J(){V[G].firstRun=!1}function Q(){clearTimeout(V[G].msgTimeout),V[G].warningTimeout=0}var X=n.data,Y={},G=null;"[iFrameResizerChild]Ready"===X?U():l()?(Y=r(),G=D=Y.id,V[G].loaded=!0,!d()&&B(G)&&(u(G,"Received: "+X),C()&&c()&&q())):s(G,"Ignored: "+X)}function m(e,n,t){var i=null,o=null;if(V[e]){if("function"!=typeof(i=V[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");o=i(t)}return o}function g(e){var n=e.id;u(n,"Removing iFrame: "+n),e.parentNode&&e.parentNode.removeChild(e),m(n,"closedCallback",n),u(n,"--"),delete V[n]}function h(t){null===L&&(L={x:e.pageXOffset!==n?e.pageXOffset:document.documentElement.scrollLeft,y:e.pageYOffset!==n?e.pageYOffset:document.documentElement.scrollTop},u(t,"Get page position: "+L.x+","+L.y))}function p(n){null!==L&&(e.scrollTo(L.x,L.y),u(n,"Set page position: "+L.x+","+L.y),b())}function b(){L=null}function y(e){function n(){v(e),k("reset","reset",e.iframe,e.id)}u(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),h(e.id),w(n,e,"reset")}function v(e){function n(n){e.iframe.style[n]=e[n]+"px",u(e.id,"IFrame ("+o+") "+n+" set to "+e[n]+"px")}function t(n){P||"0"!==e[n]||(P=!0,u(o,"Hidden iFrame detected, creating visibility listener"),M())}function i(e){n(e),t(e)}var o=e.iframe.id;V[o]&&(V[o].sizeHeight&&i("height"),V[o].sizeWidth&&i("width"))}function w(e,n,t){t!==n.type&&q?(u(n.id,"Requesting animation frame"),q(e)):e()}function k(e,n,t,i,o){function r(){var o=V[i].targetOrigin;u(i,"["+e+"] Sending msg to iframe["+i+"] ("+n+") targetOrigin: "+o),t.contentWindow.postMessage(A+n,o)}function a(){f(i,"["+e+"] IFrame("+i+") not found")}function c(){t&&"contentWindow"in t&&null!==t.contentWindow?r():a()}function s(){function e(){!V[i]||V[i].loaded||l||(l=!0,f(i,"IFrame has not responded within "+V[i].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ingored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}o&&V[i].warningTimeout&&(V[i].msgTimeout=setTimeout(e,V[i].warningTimeout))}var l=!1;i=i||t.id,V[i]&&(c(),s())}function F(e){return e+":"+V[e].bodyMarginV1+":"+V[e].sizeWidth+":"+V[e].log+":"+V[e].interval+":"+V[e].enablePublicMethods+":"+V[e].autoResize+":"+V[e].bodyMargin+":"+V[e].heightCalculationMethod+":"+V[e].bodyBackground+":"+V[e].bodyPadding+":"+V[e].tolerance+":"+V[e].inPageLinks+":"+V[e].resizeFrom+":"+V[e].widthCalculationMethod}function I(e,i){function o(){function n(n){1/0!==V[I][n]&&0!==V[I][n]&&(e.style[n]=V[I][n]+"px",u(I,"Set "+n+" = "+V[I][n]+"px"))}function t(e){if(V[I]["min"+e]>V[I]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}t("Height"),t("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}function r(){var e=i&&i.id||J.id+N++;return null!==document.getElementById(e)&&(e+=N++),e}function a(n){return D=n,""===n&&(e.id=n=r(),W=(i||{}).log,D=n,u(n,"Added missing iframe ID: "+n+" ("+e.src+")")),n}function c(){switch(u(I,"IFrame scrolling "+(V[I].scrolling?"enabled":"disabled")+" for "+I),e.style.overflow=!1===V[I].scrolling?"hidden":"auto",V[I].scrolling){case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=V[I].scrolling}}function s(){"number"!=typeof V[I].bodyMargin&&"0"!==V[I].bodyMargin||(V[I].bodyMarginV1=V[I].bodyMargin,V[I].bodyMargin=V[I].bodyMargin+"px")}function l(){var n=V[I].firstRun,t=V[I].heightCalculationMethod in B;!n&&t&&y({iframe:e,height:0,width:0,type:"init"})}function d(){Function.prototype.bind&&(V[I].iframe.iFrameResizer={close:g.bind(null,V[I].iframe),resize:k.bind(null,"Window resize","resize",V[I].iframe),moveToAnchor:function(e){k("Move to anchor","moveToAnchor:"+e,V[I].iframe,I)},sendMessage:function(e){e=JSON.stringify(e),k("Send Message","message:"+e,V[I].iframe,I)}})}function m(i){function o(){k("iFrame.onload",i,e,n,!0),l()}t(e,"load",o),k("init",i,e,n,!0)}function h(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}function p(e){for(var n in J)J.hasOwnProperty(n)&&(V[I][n]=e.hasOwnProperty(n)?e[n]:J[n])}function b(e){return""===e||"file://"===e?"*":e}function v(n){n=n||{},V[I]={firstRun:!0,iframe:e,remoteHost:e.src.split("/").slice(0,3).join("/")},h(n),p(n),V[I].targetOrigin=!0===V[I].checkOrigin?b(V[I].remoteHost):"*"}function w(){return I in V&&"iFrameResizer"in e}var I=a(e.id);w()?f(I,"Ignored iFrame, already setup."):(v(i),c(),o(),s(),m(F(I)),d())}function x(e,n){null===U&&(U=setTimeout(function(){U=null,e()},n))}function M(){function n(){function e(e){function n(n){return"0px"===V[e].iframe.style[n]}function t(e){return null!==e.offsetParent}t(V[e].iframe)&&(n("height")||n("width"))&&k("Visibility change","resize",V[e].iframe,e)}for(var n in V)e(n)}function t(e){u("window","Mutation observed: "+e[0].target+" "+e[0].type),x(n,16)}function i(){var e=document.querySelector("body"),n={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};new o(t).observe(e,n)}var o=e.MutationObserver||e.WebKitMutationObserver;o&&i()}function z(e){function n(){T("Window "+e,"resize")}u("window","Trigger event: "+e),x(n,16)}function R(){function e(){T("Tab Visable","resize")}"hidden"!==document.visibilityState&&(u("document","Trigger event: Visiblity change"),x(e,16))}function T(e,n){function t(e){return"parent"===V[e].resizeFrom&&V[e].autoResize&&!V[e].firstRun}for(var i in V)t(i)&&k(e,n,document.getElementById(i),i)}function E(){t(e,"message",d),t(e,"resize",function(){z("resize")}),t(document,"visibilitychange",R),t(document,"-webkit-visibilitychange",R),t(e,"focusin",function(){z("focus")}),t(e,"focus",function(){z("focus")})}function C(){function e(e,n){function t(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}n&&(t(),I(n,e),i.push(n))}function t(e){e&&e.enablePublicMethods&&f("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var i;return o(),E(),function o(r,a){switch(i=[],t(r),typeof a){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(a||"iframe"),e.bind(n,r));break;case"object":e(r,a);break;default:throw new TypeError("Unexpected data type ("+typeof a+")")}return i}}function O($){$.fn?$.fn.iFrameResize||($.fn.iFrameResize=function e(n){function t(e,t){I(t,n)}return this.filter("iframe").each(t).end()}):s("","Unable to bind to jQuery, it is not fully loaded.")}if(void 0!==e){var N=0,W=!1,P=!1,H="message",S="message".length,A="[iFrameSizer]",j=A.length,L=null,q=e.requestAnimationFrame,B={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},V={},U=null,D="Host Page",J={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:function(){f("MessageCallback function not defined")},resizedCallback:function(){},scrollCallback:function(){return!0}};e.jQuery&&O(e.jQuery),"function"==typeof define&&define.amd?define([],C):"object"==typeof module&&"object"==typeof module.exports?module.exports=C():e.iFrameResize=e.iFrameResize||C()}}(window.self);
//# sourceMappingURL=./iframeResizer-v3.5.14.js.map