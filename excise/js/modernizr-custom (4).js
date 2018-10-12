/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-audio-canvas-canvastext-cookies-eventlistener-flash-geolocation-htmlimports-json-localstorage-svg-video-webgl-webworkers-setclasses !*/
!function(e,n,o){function t(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=t(p?"svg":"body"),e.fake=!0),e}function i(e){var n=d.className,o=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(n+=" "+o+e.join(" "+o),p?d.className.baseVal=n:d.className=n)}function c(e,n){return typeof e===n}function s(){var e,n,o,t,a,i,s;for(var r in u)if(u.hasOwnProperty(r)){if(e=[],n=u[r],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(t=c(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=t:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=t),l.push((t?"":"no-")+s.join("-"))}}function r(e,n){if("object"==typeof e)for(var o in e)v(e,o)&&r(o,e[o]);else{e=e.toLowerCase();var t=e.split("."),a=Modernizr[t[0]];if(2==t.length&&(a=a[t[1]]),"undefined"!=typeof a)return Modernizr;n="function"==typeof n?n():n,1==t.length?Modernizr[t[0]]=n:(!Modernizr[t[0]]||Modernizr[t[0]]instanceof Boolean||(Modernizr[t[0]]=new Boolean(Modernizr[t[0]])),Modernizr[t[0]][t[1]]=n),i([(n&&0!=n?"":"no-")+t.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var l=[],d=n.documentElement,p="svg"===d.nodeName.toLowerCase(),u=[],f={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){u.push({name:e,fn:n,options:o})},addAsyncTest:function(e){u.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("cookies",function(){try{n.cookie="cookietest=1";var e=-1!=n.cookie.indexOf("cookietest=");return n.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(o){return!1}}),Modernizr.addTest("eventlistener","addEventListener"in e),Modernizr.addTest("audio",function(){var e=t("audio"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(o){}return n}),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("video",function(){var e=t("video"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(o){}return n}),Modernizr.addTest("webgl",function(){var n=t("canvas"),o="probablySupportsContext"in n?"probablySupportsContext":"supportsContext";return o in n?n[o]("webgl")||n[o]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(n){return!1}}),Modernizr.addTest("webworkers","Worker"in e),Modernizr.addTest("canvas",function(){var e=t("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof t("canvas").getContext("2d").fillText});var v;!function(){var e={}.hasOwnProperty;v=c(e,"undefined")||c(e.call,"undefined")?function(e,n){return n in e&&c(e.constructor.prototype[n],"undefined")}:function(n,o){return e.call(n,o)}}(),f._l={},f.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},f._trigger=function(e,n){if(this._l[e]){var o=this._l[e];setTimeout(function(){var e,t;for(e=0;e<o.length;e++)(t=o[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){f.addTest=r}),Modernizr.addAsyncTest(function(){var o,i,c=function(e){d.contains(e)||d.appendChild(e)},s=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},l=function(e,n){var o=!!e;if(o&&(o=new Boolean(o),o.blocked="blocked"===e),r("flash",function(){return o}),n&&y.contains(n)){for(;n.parentNode!==y;)n=n.parentNode;y.removeChild(n)}};try{i="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(u){}if(o=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||i),o||p)l(!1);else{var f,v,g=t("embed"),y=a();if(g.type="application/x-shockwave-flash",y.appendChild(g),!("Pan"in g||i))return c(y),l("blocked",g),void s(y);f=function(){return c(y),d.contains(y)?(d.contains(g)?(v=g.style.cssText,""!==v?l("blocked",g):l(!0,g)):l("blocked"),void s(y)):(y=n.body||y,g=t("embed"),g.type="application/x-shockwave-flash",y.appendChild(g),setTimeout(f,1e3))},setTimeout(f,10)}}),r("htmlimports","import"in t("link")),s(),i(l),delete f.addTest,delete f.addAsyncTest;for(var g=0;g<Modernizr._q.length;g++)Modernizr._q[g]();e.Modernizr=Modernizr}(window,document);