if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.5090a4be.js",revision:null},{url:"assets/index.6ec5a120.css",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"index.html",revision:"d77a4c9093b36953ccc24253aff93c95"},{url:"registerSW.js",revision:"4a9f404455609c1426b21ef73d1611ba"},{url:"images/pwa-192x192.png",revision:"df8e695476f42bd08460b110a13ee787"},{url:"images/pwa-512x512.png",revision:"b41824e2c4c6fe37a548516bf74307be"},{url:"manifest.webmanifest",revision:"2ab8a3cd35015e0cbe92418ccf92d4da"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
