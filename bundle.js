
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var e,t,n,i,r=function(e,t){return {name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},a=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},o=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)));};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0);},u=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t);}),!0);},c=function(e,t,n){var i;return function(r){t.value>=0&&(r||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)));}},f=-1,s=function(){return "hidden"===document.visibilityState?0:1/0},m=function(){o((function(e){var t=e.timeStamp;f=t;}),!0);},v=function(){return f<0&&(f=s(),m(),u((function(){setTimeout((function(){f=s(),m();}),0);}))),{get firstHiddenTime(){return f}}},d=function(e,t){var n,i=v(),o=r("FCP"),f=function(e){"first-contentful-paint"===e.name&&(m&&m.disconnect(),e.startTime<i.firstHiddenTime&&(o.value=e.startTime,o.entries.push(e),n(!0)));},s=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],m=s?null:a("paint",f);(s||m)&&(n=c(e,o,t),s&&f(s),u((function(i){o=r("FCP"),n=c(e,o,t),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-i.timeStamp,n(!0);}));}));})));},p=!1,l=-1,h=function(e,t){p||(d((function(e){l=e.value;})),p=!0);var n,i=function(t){l>-1&&e(t);},f=r("CLS",0),s=0,m=[],v=function(e){if(!e.hadRecentInput){var t=m[0],i=m[m.length-1];s&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(s+=e.value,m.push(e)):(s=e.value,m=[e]),s>f.value&&(f.value=s,f.entries=m,n());}},h=a("layout-shift",v);h&&(n=c(i,f,t),o((function(){h.takeRecords().map(v),n(!0);})),u((function(){s=0,l=-1,f=r("CLS",0),n=c(i,f,t);})));},T={passive:!0,capture:!0},y=new Date,g=function(i,r){e||(e=r,t=i,n=new Date,w(removeEventListener),E());},E=function(){if(t>=0&&t<n-y){var r={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+t};i.forEach((function(e){e(r);})),i=[];}},S=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){g(e,t),r();},i=function(){r();},r=function(){removeEventListener("pointerup",n,T),removeEventListener("pointercancel",i,T);};addEventListener("pointerup",n,T),addEventListener("pointercancel",i,T);}(t,e):g(t,e);}},w=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,S,T)}));},L=function(n,f){var s,m=v(),d=r("FID"),p=function(e){e.startTime<m.firstHiddenTime&&(d.value=e.processingStart-e.startTime,d.entries.push(e),s(!0));},l=a("first-input",p);s=c(n,d,f),l&&o((function(){l.takeRecords().map(p),l.disconnect();}),!0),l&&u((function(){var a;d=r("FID"),s=c(n,d,f),i=[],t=-1,e=null,w(addEventListener),a=p,i.push(a),E();}));},b={},F=function(e,t){var n,i=v(),f=r("LCP"),s=function(e){var t=e.startTime;t<i.firstHiddenTime&&(f.value=t,f.entries.push(e),n());},m=a("largest-contentful-paint",s);if(m){n=c(e,f,t);var d=function(){b[f.id]||(m.takeRecords().map(s),m.disconnect(),b[f.id]=!0,n(!0));};["keydown","click"].forEach((function(e){addEventListener(e,d,{once:!0,capture:!0});})),o(d,!0),u((function(i){f=r("LCP"),n=c(e,f,t),requestAnimationFrame((function(){requestAnimationFrame((function(){f.value=performance.now()-i.timeStamp,b[f.id]=!0,n(!0);}));}));}));}};

//   const body = JSON.stringify({ name, value, id });
//   // 可以的话，使用 `navigator.sendBeacon()`, 回退到 `fetch()`.
//   (navigator.sendBeacon && navigator.sendBeacon("/analytics", body)) ||
//     fetch("/analytics", { body, method: "POST", keepalive: true });
// }
// getCLS(sendToAnalytics);
// getFID(sendToAnalytics);
// getLCP(sendToAnalytics);

var Wushuang = /*#__PURE__*/function () {
  function Wushuang() {
    _classCallCheck(this, Wushuang);

    this.cls = "";
    this.ttfb = "";
    this.fid = "";
    this.lcp = "";
  }

  _createClass(Wushuang, [{
    key: "getCLSFromWeb",
    value: function getCLSFromWeb() {
      h(this.anayleData);
    }
  }, {
    key: "getLCPFromWeb",
    value: function getLCPFromWeb() {
      F(this.anayleData);
    }
  }, {
    key: "getFIDFromWeb",
    value: function getFIDFromWeb() {
      L(this.anayleData);
    }
  }, {
    key: "anayleData",
    value: function anayleData(data) {
      console.log(data);
    }
  }]);

  return Wushuang;
}();

var wushuang = new Wushuang();
wushuang.getLCPFromWeb();
wushuang.getCLSFromWeb();
wushuang.getFIDFromWeb();
//# sourceMappingURL=bundle.js.map
