if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const f=e=>d(e,r),n={module:{uri:r},exports:a,require:f};i[r]=Promise.all(c.map((e=>n[e]||f(e)))).then((e=>(s(...e),a)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"1/index.html",revision:"5058f1c37cbb7f5949ebc3fccdfff71e"},{url:"202202131/index.html",revision:"ca5bd9bfff32c4d8257171342e219c32"},{url:"202203201/index.html",revision:"ef17e19a846719d4c04738e961f23bf2"},{url:"202203211/index.html",revision:"9dcc1c8ec1c864e8c5eb0363fa2f34c1"},{url:"202206232/index.html",revision:"2e46f31deec4d55eac82e307b443e279"},{url:"202208081/index.html",revision:"4695be041daa9260a8a827f878639d9e"},{url:"202208082/index.html",revision:"71d973e9f28e4befab7777d961e1e8ed"},{url:"202208161/index.html",revision:"546bed8d79814510e3466d870d2839c7"},{url:"202208231/index.html",revision:"bddf6357d4daa99e8893e3cd71ae0d04"},{url:"202208241/index.html",revision:"d89b51f2225039b40b31ef828449dc9f"},{url:"404.html",revision:"edc24e5deecca90044277c7b57a61c43"},{url:"archives/2022/02/index.html",revision:"4825dc35e3d3238f068dd2a19d0e403c"},{url:"archives/2022/03/index.html",revision:"8ef8ab73a94804201c228d90062fb5d6"},{url:"archives/2022/06/index.html",revision:"27e59a5a2c4e7124ed25842b6214c8d7"},{url:"archives/2022/07/index.html",revision:"4942566716f2c7587dc52523069f067b"},{url:"archives/2022/08/index.html",revision:"b5fe53371badd5039012c900efa594af"},{url:"archives/2022/index.html",revision:"18f2c31df7cb597ad930bc5dbb6be7d1"},{url:"archives/index.html",revision:"75c7976638f9d305ca5e07b187522d24"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"ded44e02fd433bb06426df4ebc88684e"},{url:"categories/旅行/index.html",revision:"2c3d827cfdac9dfd8ce1e6667758193d"},{url:"categories/相册/index.html",revision:"46969cd9bf1cd0276dda3c75daf6ce65"},{url:"css/AlimamaShuHeiTi-Bold.ttf",revision:"9c8d7f88c39c3d90cd41ea9db70a9fa7"},{url:"css/deeltoop.css",revision:"de562869818f8f8d4e568b1b2961e4bc"},{url:"css/f.css",revision:"9d5e206cae02193c39be20eb8323b19c"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"9e16592b3188837500e668b972414e33"},{url:"css/photo.css",revision:"4e1feed35b24302ff9016f01423a9257"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/本墨咏黑.ttf",revision:"ae937839da817741b666b4b0708c3f79"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"b3fa5c2834d2824ea4664427256c03d0"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"7a7cc154c382b92344b7cd4cc25d4071"},{url:"not/index.html",revision:"45aa64e0fbb78cf24751c153f18adc67"},{url:"page/2/index.html",revision:"31a2d19e23aa69bc2e40663dde3b026c"},{url:"page/3/index.html",revision:"ef64c6c12f94b8652e6d1f353c5273f1"},{url:"privacy/index.html",revision:"5c270969816c7bd91169266d160335e0"},{url:"tags/index.html",revision:"734d42191c004138fcb06f3d05b6b743"},{url:"tags/云/index.html",revision:"1cfbc7f19f528e3a3574e67798d82703"},{url:"tags/人/index.html",revision:"a6111ef807f68176a27a2e146c633262"},{url:"tags/实践活动/index.html",revision:"b8f89fae28169435a633c755931952e3"},{url:"tags/小路/index.html",revision:"bf7b3414873a11cbd79400be36c742ff"},{url:"tags/建筑/index.html",revision:"5c9560a9ce511a26ec101a7981033f04"},{url:"tags/树/index.html",revision:"dc122c81f2a0bf20f2ff591ff03989c4"},{url:"tags/毕业/index.html",revision:"d491a9c46a7793c7d697a525c45dbaf4"},{url:"tags/水/index.html",revision:"cd6efbaba88635ad1a82e8f426b688d3"},{url:"tags/田野/index.html",revision:"979fadc72beadf4211363c31871150ec"},{url:"tags/秋/index.html",revision:"13c0007fe117a806151212e5a5f486c6"},{url:"tags/阳光/index.html",revision:"36312ab4ff9e8162fb2e485d161ef692"},{url:"张鑫宇的中秋实践调查报告/index.html",revision:"a0d0ee3531a66344c033dd00ac299fc8"}],{})}));
//# sourceMappingURL=service-worker.js.map
