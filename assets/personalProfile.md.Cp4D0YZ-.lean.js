import{_ as z,o as j,c as L,j as o,a0 as ia,a as N,t as K,p as $,v as la,P as ca,G as q,q as Ba,n as Oa,a1 as na,a2 as sa}from"./chunks/framework.Cl_zXgVI.js";const Aa="/jianli/logo.png",Ra={class:"container"},$a={class:"header"},Na={class:"header-right"},ja={class:"header-right-name"},La={class:"title"},Ua={class:"info"},qa=["href"],oa="19938216823",za={__name:"info",setup(B){return(h,r)=>(j(),L("div",Ra,[o("div",$a,[r[4]||(r[4]=o("div",{class:"header-left"},[o("img",{src:Aa,alt:""})],-1)),o("div",Na,[o("div",ja,[r[1]||(r[1]=ia('<div class="title" data-v-69a74195>姓名: <span class="info" data-v-69a74195>大江</span></div><div class="title" data-v-69a74195>性别: <span class="info" data-v-69a74195>男</span></div><div class="title" data-v-69a74195>年龄: <span class="info" data-v-69a74195>20</span></div>',3)),o("div",La,[r[0]||(r[0]=N("电话: ")),o("span",Ua,[o("a",{href:`tel:${oa}`},K(oa),8,qa)])]),r[2]||(r[2]=o("div",{class:"title"},[N("邮箱: "),o("span",{class:"info"},"5194687@qq.com")],-1)),r[3]||(r[3]=o("div",{class:"title"},[N("工作经验: "),o("span",{class:"info"},"3.5年")],-1))])])])]))}},Da=z(za,[["__scopeId","data-v-69a74195"]]),Va=["src"],Wa={__name:"mapBox",props:{location:{type:String,required:!0,default:"104.044897,30.676558"}},setup(B){const h=$(null),r=$(""),_=B,M=()=>{if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){alert("请在手机端打开");return}const O=`iosamap://navi?sourceApplication=applicationName&backScheme=applicationScheme&lat=${_.location.split(",")[1]}&lon=${_.location.split(",")[0]}&dev=0&style=2`,S=`androidamap://navi?sourceApplication=applicationName&backScheme=applicationScheme&lat=${_.location.split(",")[1]}&lon=${_.location.split(",")[0]}&dev=0&style=2`,E=navigator.userAgent.indexOf("Android")>-1,k=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);E?(window.location.href=S,setTimeout(()=>{window.location.href="https://mobile.amap.com/"},2e3)):k&&(window.location.href=O,setTimeout(()=>{window.location.href="https://mobile.amap.com/"},2e3))},b=async x=>{const O="ea069bfaa1c11f9a299a3f5e33a74a95",S=_.location,E=17,k=`${x.width}*${x.height}`,A=`large,0xFF0000,家:${S}`,U=`https://restapi.amap.com/v3/staticmap?location=${S}&size=${k}&zoom=${E}&key=${O}&markers=${A}`;try{const I=await fetch(U);if(!I.ok)throw new Error("获取地图失败");return console.log("🚀 ~ generateStaticMapUrl ~ response:",I),I.url}catch(I){return console.error("获取地图出错:",I),""}};return la(()=>{ca(async()=>{const x=h.value.getBoundingClientRect();r.value=await b(x)})}),(x,O)=>(j(),L("div",{class:"static-map",ref_key:"mapBox",ref:h},[o("img",{src:r.value,alt:"Static Map",onClick:M},null,8,Va)],512))}},Za=z(Wa,[["__scopeId","data-v-86aaef80"]]),Ha={class:"address"},Ga={__name:"addressView",setup(B){return(h,r)=>(j(),L("div",Ha,[r[0]||(r[0]=o("div",{class:"address-title"},"户籍地址",-1)),r[1]||(r[1]=o("div",{class:"address-content"},"xx省xx市xx区xx街道xx号",-1)),r[2]||(r[2]=o("div",{class:"address-title"},"现住地址",-1)),r[3]||(r[3]=o("div",{class:"address-content"},"四川省成都市金牛区抚琴街道",-1)),q(Za)]))}},Ja=z(Ga,[["__scopeId","data-v-e6a79650"]]);var Q={};(function B(h,r,_,M){var b=!!(h.Worker&&h.Blob&&h.Promise&&h.OffscreenCanvas&&h.OffscreenCanvasRenderingContext2D&&h.HTMLCanvasElement&&h.HTMLCanvasElement.prototype.transferControlToOffscreen&&h.URL&&h.URL.createObjectURL),x=typeof Path2D=="function"&&typeof DOMMatrix=="function",O=function(){if(!h.OffscreenCanvas)return!1;var e=new OffscreenCanvas(1,1),a=e.getContext("2d");a.fillRect(0,0,1,1);var t=e.transferToImageBitmap();try{a.createPattern(t,"no-repeat")}catch{return!1}return!0}();function S(){}function E(e){var a=r.exports.Promise,t=a!==void 0?a:h.Promise;return typeof t=="function"?new t(e):(e(S,S),null)}var k=function(e,a){return{transform:function(t){if(e)return t;if(a.has(t))return a.get(t);var s=new OffscreenCanvas(t.width,t.height),i=s.getContext("2d");return i.drawImage(t,0,0),a.set(t,s),s},clear:function(){a.clear()}}}(O,new Map),A=function(){var e=Math.floor(16.666666666666668),a,t,s={},i=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(a=function(l){var c=Math.random();return s[c]=requestAnimationFrame(function n(d){i===d||i+e-1<d?(i=d,delete s[c],l()):s[c]=requestAnimationFrame(n)}),c},t=function(l){s[l]&&cancelAnimationFrame(s[l])}):(a=function(l){return setTimeout(l,e)},t=function(l){return clearTimeout(l)}),{frame:a,cancel:t}}(),U=function(){var e,a,t={};function s(i){function l(c,n){i.postMessage({options:c||{},callback:n})}i.init=function(n){var d=n.transferControlToOffscreen();i.postMessage({canvas:d},[d])},i.fire=function(n,d,v){if(a)return l(n,null),a;var p=Math.random().toString(36).slice(2);return a=E(function(f){function g(y){y.data.callback===p&&(delete t[p],i.removeEventListener("message",g),a=null,k.clear(),v(),f())}i.addEventListener("message",g),l(n,p),t[p]=g.bind(null,{data:{callback:p}})}),a},i.reset=function(){i.postMessage({reset:!0});for(var n in t)t[n](),delete t[n]}}return function(){if(e)return e;if(!_&&b){var i=["var CONFETTI, SIZE = {}, module = {};","("+B.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{e=new Worker(URL.createObjectURL(new Blob([i])))}catch(l){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",l),null}s(e)}return e}}(),I={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function D(e,a){return a?a(e):e}function V(e){return e!=null}function m(e,a,t){return D(e&&V(e[a])?e[a]:I[a],t)}function W(e){return e<0?0:Math.floor(e)}function da(e,a){return Math.floor(Math.random()*(a-e))+e}function Z(e){return parseInt(e,16)}function ua(e){return e.map(ha)}function ha(e){var a=String(e).replace(/[^0-9a-f]/gi,"");return a.length<6&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),{r:Z(a.substring(0,2)),g:Z(a.substring(2,4)),b:Z(a.substring(4,6))}}function va(e){var a=m(e,"origin",Object);return a.x=m(a,"x",Number),a.y=m(a,"y",Number),a}function fa(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function ma(e){var a=e.getBoundingClientRect();e.width=a.width,e.height=a.height}function pa(e){var a=document.createElement("canvas");return a.style.position="fixed",a.style.top="0px",a.style.left="0px",a.style.pointerEvents="none",a.style.zIndex=e,a}function ga(e,a,t,s,i,l,c,n,d){e.save(),e.translate(a,t),e.rotate(l),e.scale(s,i),e.arc(0,0,1,c,n,d),e.restore()}function ba(e){var a=e.angle*(Math.PI/180),t=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-a+(.5*t-Math.random()*t),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function ya(e,a){a.x+=Math.cos(a.angle2D)*a.velocity+a.drift,a.y+=Math.sin(a.angle2D)*a.velocity+a.gravity,a.velocity*=a.decay,a.flat?(a.wobble=0,a.wobbleX=a.x+10*a.scalar,a.wobbleY=a.y+10*a.scalar,a.tiltSin=0,a.tiltCos=0,a.random=1):(a.wobble+=a.wobbleSpeed,a.wobbleX=a.x+10*a.scalar*Math.cos(a.wobble),a.wobbleY=a.y+10*a.scalar*Math.sin(a.wobble),a.tiltAngle+=.1,a.tiltSin=Math.sin(a.tiltAngle),a.tiltCos=Math.cos(a.tiltAngle),a.random=Math.random()+2);var t=a.tick++/a.totalTicks,s=a.x+a.random*a.tiltCos,i=a.y+a.random*a.tiltSin,l=a.wobbleX+a.random*a.tiltCos,c=a.wobbleY+a.random*a.tiltSin;if(e.fillStyle="rgba("+a.color.r+", "+a.color.g+", "+a.color.b+", "+(1-t)+")",e.beginPath(),x&&a.shape.type==="path"&&typeof a.shape.path=="string"&&Array.isArray(a.shape.matrix))e.fill(_a(a.shape.path,a.shape.matrix,a.x,a.y,Math.abs(l-s)*.1,Math.abs(c-i)*.1,Math.PI/10*a.wobble));else if(a.shape.type==="bitmap"){var n=Math.PI/10*a.wobble,d=Math.abs(l-s)*.1,v=Math.abs(c-i)*.1,p=a.shape.bitmap.width*a.scalar,f=a.shape.bitmap.height*a.scalar,g=new DOMMatrix([Math.cos(n)*d,Math.sin(n)*d,-Math.sin(n)*v,Math.cos(n)*v,a.x,a.y]);g.multiplySelf(new DOMMatrix(a.shape.matrix));var y=e.createPattern(k.transform(a.shape.bitmap),"no-repeat");y.setTransform(g),e.globalAlpha=1-t,e.fillStyle=y,e.fillRect(a.x-p/2,a.y-f/2,p,f),e.globalAlpha=1}else if(a.shape==="circle")e.ellipse?e.ellipse(a.x,a.y,Math.abs(l-s)*a.ovalScalar,Math.abs(c-i)*a.ovalScalar,Math.PI/10*a.wobble,0,2*Math.PI):ga(e,a.x,a.y,Math.abs(l-s)*a.ovalScalar,Math.abs(c-i)*a.ovalScalar,Math.PI/10*a.wobble,0,2*Math.PI);else if(a.shape==="star")for(var u=Math.PI/2*3,w=4*a.scalar,C=8*a.scalar,P=a.x,F=a.y,R=5,T=Math.PI/R;R--;)P=a.x+Math.cos(u)*C,F=a.y+Math.sin(u)*C,e.lineTo(P,F),u+=T,P=a.x+Math.cos(u)*w,F=a.y+Math.sin(u)*w,e.lineTo(P,F),u+=T;else e.moveTo(Math.floor(a.x),Math.floor(a.y)),e.lineTo(Math.floor(a.wobbleX),Math.floor(i)),e.lineTo(Math.floor(l),Math.floor(c)),e.lineTo(Math.floor(s),Math.floor(a.wobbleY));return e.closePath(),e.fill(),a.tick<a.totalTicks}function Ma(e,a,t,s,i){var l=a.slice(),c=e.getContext("2d"),n,d,v=E(function(p){function f(){n=d=null,c.clearRect(0,0,s.width,s.height),k.clear(),i(),p()}function g(){_&&!(s.width===M.width&&s.height===M.height)&&(s.width=e.width=M.width,s.height=e.height=M.height),!s.width&&!s.height&&(t(e),s.width=e.width,s.height=e.height),c.clearRect(0,0,s.width,s.height),l=l.filter(function(y){return ya(c,y)}),l.length?n=A.frame(g):f()}n=A.frame(g),d=f});return{addFettis:function(p){return l=l.concat(p),v},canvas:e,promise:v,reset:function(){n&&A.cancel(n),d&&d()}}}function X(e,a){var t=!e,s=!!m(a||{},"resize"),i=!1,l=m(a,"disableForReducedMotion",Boolean),c=b&&!!m(a||{},"useWorker"),n=c?U():null,d=t?fa:ma,v=e&&n?!!e.__confetti_initialized:!1,p=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,f;function g(u,w,C){for(var P=m(u,"particleCount",W),F=m(u,"angle",Number),R=m(u,"spread",Number),T=m(u,"startVelocity",Number),Ca=m(u,"decay",Number),Pa=m(u,"gravity",Number),ka=m(u,"drift",Number),aa=m(u,"colors",ua),Ia=m(u,"ticks",Number),ea=m(u,"shapes"),Ta=m(u,"scalar"),Sa=!!m(u,"flat"),ra=va(u),ta=P,G=[],Ea=e.width*ra.x,Fa=e.height*ra.y;ta--;)G.push(ba({x:Ea,y:Fa,angle:F,spread:R,startVelocity:T,color:aa[ta%aa.length],shape:ea[da(0,ea.length)],ticks:Ia,decay:Ca,gravity:Pa,drift:ka,scalar:Ta,flat:Sa}));return f?f.addFettis(G):(f=Ma(e,G,d,w,C),f.promise)}function y(u){var w=l||m(u,"disableForReducedMotion",Boolean),C=m(u,"zIndex",Number);if(w&&p)return E(function(T){T()});t&&f?e=f.canvas:t&&!e&&(e=pa(C),document.body.appendChild(e)),s&&!v&&d(e);var P={width:e.width,height:e.height};n&&!v&&n.init(e),v=!0,n&&(e.__confetti_initialized=!0);function F(){if(n){var T={getBoundingClientRect:function(){if(!t)return e.getBoundingClientRect()}};d(T),n.postMessage({resize:{width:T.width,height:T.height}});return}P.width=P.height=null}function R(){f=null,s&&(i=!1,h.removeEventListener("resize",F)),t&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,v=!1)}return s&&!i&&(i=!0,h.addEventListener("resize",F,!1)),n?n.fire(u,P,R):g(u,P,R)}return y.reset=function(){n&&n.reset(),f&&f.reset()},y}var H;function Y(){return H||(H=X(null,{useWorker:!0,resize:!0})),H}function _a(e,a,t,s,i,l,c){var n=new Path2D(e),d=new Path2D;d.addPath(n,new DOMMatrix(a));var v=new Path2D;return v.addPath(d,new DOMMatrix([Math.cos(c)*i,Math.sin(c)*i,-Math.sin(c)*l,Math.cos(c)*l,t,s])),v}function wa(e){if(!x)throw new Error("path confetti are not supported in this browser");var a,t;typeof e=="string"?a=e:(a=e.path,t=e.matrix);var s=new Path2D(a),i=document.createElement("canvas"),l=i.getContext("2d");if(!t){for(var c=1e3,n=c,d=c,v=0,p=0,f,g,y=0;y<c;y+=2)for(var u=0;u<c;u+=2)l.isPointInPath(s,y,u,"nonzero")&&(n=Math.min(n,y),d=Math.min(d,u),v=Math.max(v,y),p=Math.max(p,u));f=v-n,g=p-d;var w=10,C=Math.min(w/f,w/g);t=[C,0,0,C,-Math.round(f/2+n)*C,-Math.round(g/2+d)*C]}return{type:"path",path:a,matrix:t}}function xa(e){var a,t=1,s="#000000",i='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof e=="string"?a=e:(a=e.text,t="scalar"in e?e.scalar:t,i="fontFamily"in e?e.fontFamily:i,s="color"in e?e.color:s);var l=10*t,c=""+l+"px "+i,n=new OffscreenCanvas(l,l),d=n.getContext("2d");d.font=c;var v=d.measureText(a),p=Math.ceil(v.actualBoundingBoxRight+v.actualBoundingBoxLeft),f=Math.ceil(v.actualBoundingBoxAscent+v.actualBoundingBoxDescent),g=2,y=v.actualBoundingBoxLeft+g,u=v.actualBoundingBoxAscent+g;p+=g+g,f+=g+g,n=new OffscreenCanvas(p,f),d=n.getContext("2d"),d.font=c,d.fillStyle=s,d.fillText(a,y,u);var w=1/t;return{type:"bitmap",bitmap:n.transferToImageBitmap(),matrix:[w,0,0,w,-p*w/2,-f*w/2]}}r.exports=function(){return Y().apply(this,arguments)},r.exports.reset=function(){Y().reset()},r.exports.create=X,r.exports.shapeFromPath=wa,r.exports.shapeFromText=xa})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Q,!1);const J=Q.exports;Q.exports.create;const Ka={__name:"coloredRibbon",setup(B){const h=$(null),r=()=>{const _=Date.now()+8e3,M=["#bb0000","#ffffff","#8e44ad","#f1c40f"],b=()=>{J({particleCount:5,angle:60,spread:55,origin:{x:0},colors:M,gravity:.8,scalar:1.2}),J({particleCount:5,angle:120,spread:55,origin:{x:1},colors:M,gravity:.8,scalar:1.2}),Date.now()<_&&requestAnimationFrame(b)};b()};return la(()=>{J.create(h.value,{resize:!0,useWorker:!0}),ca(()=>{r()})}),(_,M)=>(j(),L("div",null,[o("canvas",{ref_key:"canvasRef",ref:h,class:"confetti-canvas"},null,512)]))}},Qa=z(Ka,[["__scopeId","data-v-c48c2953"]]),Xa="/jianli/back.svg",Ya="/jianli/play.svg",ae="/jianli/pause.svg",ee="/jianli/next.svg",re={class:"music-player"},te={class:"music-player-bg"},ne={class:"music-player-album"},se=["src"],oe={class:"music-player-name"},ie={class:"music-player-name-title"},le={class:"music-player-name-artist"},ce={class:"music-player-control"},de={class:"btn"},ue={class:"music-player-bg-img"},he=["src"],ve=["src"],fe={__name:"music",setup(B){const h=[{name:"七里香",artist:"周杰伦",src:"/jianli/七里香-周杰伦.mp3",bg:"https://p3-search.byteimg.com/obj/labis/0f052c8c60e8a78ead2d16185a1a7708"},{name:"落",artist:"唐伯虎Annie",src:"/jianli/落-唐伯虎Annie.mp3",bg:"https://p3-search.byteimg.com/obj/labis/6b017f0a53d217b528fe630d3f1f206e"}],r=$(0),_=$(!1),M=$(!1),b=$(null),x=()=>{M.value=!0,_.value=!0,setTimeout(()=>{b==null||b.value.play()},500)},O=()=>{M.value=!1,_.value=!1,b.value.pause()},S=()=>{r.value==h.length-1?r.value=0:r.value++},E=()=>{r.value==0?r.value=h.length-1:r.value--},k=()=>{M.value&&b.value.play()};return Ba(()=>r.value,(A,U)=>{b.value&&(b.value.src=h[A].src,b.value.load(),b.value.removeEventListener("canplaythrough",k),b.value.addEventListener("canplaythrough",k))}),(A,U)=>{var I,D,V,m,W;return j(),L("div",re,[o("div",te,[o("div",ne,[o("img",{class:Oa(["music-player-album-img",{rotate:_.value}]),src:(I=h[r.value])==null?void 0:I.bg,alt:""},null,10,se)]),o("div",oe,[o("div",ie,K((D=h[r.value])==null?void 0:D.name)+" - ",1),o("div",le,K((V=h[r.value])==null?void 0:V.artist),1)]),o("div",ce,[o("div",{class:"btn"},[o("img",{src:Xa,alt:"",class:"btn-svg",onClick:E})]),o("div",de,[na(o("img",{src:Ya,alt:"",class:"btn-svg",onClick:x},null,512),[[sa,!M.value]]),na(o("img",{src:ae,alt:"",class:"btn-svg",onClick:O},null,512),[[sa,M.value]])]),o("div",{class:"btn"},[o("img",{src:ee,alt:"",class:"btn-svg",onClick:S})])])]),o("div",ue,[o("img",{src:(m=h[r.value])==null?void 0:m.bg,alt:""},null,8,he)]),o("audio",{ref_key:"audio",ref:b,src:(W=h[r.value])==null?void 0:W.src},null,8,ve)])}}},me=z(fe,[["__scopeId","data-v-c7c420e1"]]),be=JSON.parse('{"title":"个人信息","description":"","frontmatter":{},"headers":[],"relativePath":"personalProfile.md","filePath":"personalProfile.md"}'),pe={name:"personalProfile.md"},ye=Object.assign(pe,{setup(B){return(h,r)=>(j(),L("div",null,[r[0]||(r[0]=o("h1",{id:"个人信息",tabindex:"-1"},[N("个人信息 "),o("a",{class:"header-anchor",href:"#个人信息","aria-label":'Permalink to "个人信息"'},"​")],-1)),q(me),q(Qa),r[1]||(r[1]=o("h2",{id:"基本信息",tabindex:"-1"},[N("基本信息 "),o("a",{class:"header-anchor",href:"#基本信息","aria-label":'Permalink to "基本信息"'},"​")],-1)),q(Da),r[2]||(r[2]=o("h2",{id:"家庭住址",tabindex:"-1"},[N("家庭住址 "),o("a",{class:"header-anchor",href:"#家庭住址","aria-label":'Permalink to "家庭住址"'},"​")],-1)),q(Ja),r[3]||(r[3]=ia('<h2 id="教育经历" tabindex="-1">教育经历 <a class="header-anchor" href="#教育经历" aria-label="Permalink to &quot;教育经历&quot;">​</a></h2><table tabindex="0"><thead><tr><th>学校名称</th><th>专业</th><th>学位</th><th>时间范围</th></tr></thead><tbody><tr><td>东软学院</td><td>计算机科学与技术</td><td></td><td>2016年09月 - 2019年07月</td></tr></tbody></table><h2 id="工作经历" tabindex="-1">工作经历 <a class="header-anchor" href="#工作经历" aria-label="Permalink to &quot;工作经历&quot;">​</a></h2><table tabindex="0"><thead><tr><th>公司名称</th><th>职位</th><th>工作时间</th><th>主要职责与成就</th></tr></thead><tbody><tr><td>成都新昱科技有限公司</td><td>前端开发工程师</td><td>2023.04 - 至今</td><td>参与项目开发，学习前端技术</td></tr><tr><td>成都尚来科技有限公司</td><td>前端实习 + 转正</td><td>2020.07 - 2022.12</td><td>负责一些外包项目和后台管理系统开发</td></tr></tbody></table><h2 id="离职原因" tabindex="-1">离职原因 <a class="header-anchor" href="#离职原因" aria-label="Permalink to &quot;离职原因&quot;">​</a></h2><p>入职公司告知需要出差云南昭通至23年10月份、2024年1月昭通出差结束后公司继续派遣出差云南楚雄、后续25年1月由于公司经营调整，开发团队需转移至云南昆明，同时社保也将转至云南。考虑到工作地点变动后，出差需自理住宿及交通费用，且每次往返成都与昆明需耗费近15小时及约500元差旅成本，同时回成都需使用个人假期时间，这对我的生活和工作平衡造成了较大影响。</p><p>经过慎重考虑，我认为当前的安排与个人职业规划及生活需求存在一定冲突。因此，我决定寻求更符合自身发展的工作机会。</p>',7))]))}});export{be as __pageData,ye as default};
