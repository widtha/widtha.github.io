if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,a)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const f=e=>d(e,s),n={module:{uri:s},exports:r,require:f};i[s]=Promise.all(c.map((e=>n[e]||f(e)))).then((e=>(a(...e),r)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"1/index.html",revision:"9f6b2d78e474f4b15793750c2c7faea4"},{url:"202202131/index.html",revision:"074fc8844f3079a586f9bacaceab6864"},{url:"202203201/index.html",revision:"84af41bfaba0362415d96f5366f8268e"},{url:"202203211/index.html",revision:"e2927ff79fda7de5cad44036199e5b54"},{url:"202206232/index.html",revision:"e9b2af643b273828aceeccd2e8b251bf"},{url:"202208081/index.html",revision:"1841ea75ba6351d4a71a47410cf67154"},{url:"202208082/index.html",revision:"c7f69f7948efa1c30b4d238f3325692b"},{url:"202208161/index.html",revision:"7d8cae83dfb76574c02d311648259af0"},{url:"202208231/index.html",revision:"302d4ebb48f90deab124187efcf3e267"},{url:"202208241/index.html",revision:"d10b601fdddf65793443d93ff308bbe2"},{url:"202210011/index.html",revision:"d15e725c5236fbe1a4c0b591d0db8dfc"},{url:"404.html",revision:"bc83cb2f16678061ea5320d68743d907"},{url:"archives/2022/02/index.html",revision:"6edcc91dfaca3b8b398dc3f99f6b3cac"},{url:"archives/2022/03/index.html",revision:"2c4b07a1b3ce5435501413b9bce9428f"},{url:"archives/2022/06/index.html",revision:"9faf3bf69f280d58da7865de78d1f805"},{url:"archives/2022/07/index.html",revision:"9500055ed4dcb4d4db3adc4646a9a98e"},{url:"archives/2022/08/index.html",revision:"01ecd4666b354845bf010f7566cef381"},{url:"archives/2022/10/index.html",revision:"3b558c8f9a72eec6811e58957ad42ed1"},{url:"archives/2022/index.html",revision:"0142feda27e7b6c6abca953a9035f20c"},{url:"archives/index.html",revision:"a7f8df252abb1294c23cdcb01d0d72bc"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"b4fc504876c0e69aa32cf544efb678ca"},{url:"categories/旅行/index.html",revision:"c40502afeb9f99bd40369c94b9ef353a"},{url:"categories/相册/index.html",revision:"8f84858119f07f298f9f0cb31fad7995"},{url:"categories/评论/index.html",revision:"16ab27f4e13f1b76edec372396f9f305"},{url:"css/AlimamaShuHeiTi-Bold.ttf",revision:"9c8d7f88c39c3d90cd41ea9db70a9fa7"},{url:"css/deeltoop.css",revision:"dba431d8efa815fdc139fa1defba5fc3"},{url:"css/f.css",revision:"9d5e206cae02193c39be20eb8323b19c"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"9e16592b3188837500e668b972414e33"},{url:"css/photo.css",revision:"4e1feed35b24302ff9016f01423a9257"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/本墨咏黑.ttf",revision:"ae937839da817741b666b4b0708c3f79"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"bc36f5d27e21f3a3ff4b102178dfe012"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"195b7b2ac4049a455eab1f5ce23a18c3"},{url:"not/index.html",revision:"fc067f89ced867d783bf812b8db682e4"},{url:"page/2/index.html",revision:"8171f7ab12ba18832dcdff4ba4b33f22"},{url:"page/3/index.html",revision:"bc07f833b208ab61888a2e8edbde6c2e"},{url:"page/4/index.html",revision:"2fc67e12a04e16e45df7fea93c5f53ec"},{url:"privacy/index.html",revision:"32420ab9759e8d42e7f950ef90aa9d40"},{url:"tags/index.html",revision:"49dc27b53b356bca915bcc73cf1bb811"},{url:"tags/云/index.html",revision:"1b14bc2be2540ee6c584765f310a4093"},{url:"tags/人/index.html",revision:"314cb3c759af3ed8353d5ef0fa6f1730"},{url:"tags/实践活动/index.html",revision:"1392f7c9956482bae021917f98e4fcca"},{url:"tags/小路/index.html",revision:"2d5e1eb9bb35c2cb9a67d324e4a45e40"},{url:"tags/建筑/index.html",revision:"06c7702161355dd8351c74d8310c5ce4"},{url:"tags/树/index.html",revision:"d6a734e12c7ce570af55300f9b7d6aad"},{url:"tags/毕业/index.html",revision:"dd4e797ec051a18755e1c7de9d1a876e"},{url:"tags/水/index.html",revision:"4c4a7b6ea930d31a0e6da8d9dc407f59"},{url:"tags/田野/index.html",revision:"52a600c4c019e5e5d449351e7166e70a"},{url:"tags/秋/index.html",revision:"96457292850dcfc00103d1b2c729ce68"},{url:"tags/阳光/index.html",revision:"2cb4b750bf5e9aa6394ffa186b15ca7b"},{url:"张鑫宇的中秋实践调查报告/index.html",revision:"db7fef7dc74abbbe9e03e1c8ef24f260"}],{})}));
//# sourceMappingURL=service-worker.js.map
