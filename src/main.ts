import { getCLS, getFID, getLCP } from "web-vitals";

// function sendToAnalytics({ name, value, id }) {
//   const body = JSON.stringify({ name, value, id });
//   // 可以的话，使用 `navigator.sendBeacon()`, 回退到 `fetch()`.
//   (navigator.sendBeacon && navigator.sendBeacon("/analytics", body)) ||
//     fetch("/analytics", { body, method: "POST", keepalive: true });
// }

// getCLS(sendToAnalytics);
// getFID(sendToAnalytics);
// getLCP(sendToAnalytics);

class Wushuang {
  cls: string;
  ttfb: string;
  fid: string;
  lcp: string;
  constructor() {
    this.cls = "";
    this.ttfb = "";
    this.fid = "";
    this.lcp = "";
  }

  getCLSFromWeb() {
    getCLS(this.anayleData);
  }

  getLCPFromWeb() {
    getLCP(this.anayleData);
  }

  getFIDFromWeb() {
    getFID(this.anayleData);
  }

  anayleData(data) {
    console.log(data);
  }
}

var wushuang = new Wushuang();
wushuang.getLCPFromWeb();
wushuang.getCLSFromWeb();
wushuang.getFIDFromWeb();
