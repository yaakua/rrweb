!function(t){var i={};function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)e.d(n,o,function(i){return t[i]}.bind(null,o));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";function n(t){this.struct=t}e.r(i),n.prototype={constructor:n,init:function(){}};var o=n;function s(t,i,e,n,o,s){var r=o||void 0;Object.defineProperty(t,i,{get:function(){return n&&n(r),r},set:function(t){var i=r;s&&s(t)||(r=t),e&&e(r,i)}})}function r(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function h(t){return"[object String]"===Object.prototype.toString.call(t)}function c(t){return"[object Number]"===Object.prototype.toString.call(t)}function u(t){return"[object Boolean]"===Object.prototype.toString.call(t)}function a(t){return h(t)||u(t)||c(t)}function d(t){return"[object Function]"===Object.prototype.toString.call(t)}function l(t){return"[object Object]"===Object.prototype.toString.call(t)}function p(t){return void 0===t}function f(t){return null===t}function m(t){return!p(t.length)}function v(t,i){for(var e=0;e<i.length;e++)item=i[e],a(item)||d(item)||item instanceof Node||f(item[key])?t.push(otem):l(item)?(l(t[e])||(t[e]={}),w(t[e],item)):m(item)&&(m(t[e])||(t[e]=[]),v(t[e],item));return t}function w(){var t,i,e=[].slice.call(arguments),n=e[0],o=e.length,s=1;if(l(n))for(;s<o;s++)if(l(t=e[s]))for(i in t)a(t[i])||d(t[i])||t[i]instanceof Node||f(t[i])?n[i]=t[i]:l(t[i])?(l(n[i])||(n[i]={}),w(n[i],t[i])):m(t[i])&&(m(n[i])||(n[i]=[]),v(n[i],t[i]));return n}var g={},b=[];function y(t,i){return g[t="HHSJ-"+t]=function(){i&&i.apply(this,arguments)},b.unshift((function(){})),b[0].prototype=new o(t),g[t].prototype=new b[0],g[t]}function C(t,i){return void 0!==window.getComputedStyle?window.getComputedStyle(t)[i]:t.currentStyle[i]}function E(t){return"relative"===C(t,"position")||"absolute"===C(t,"position")||"fxied"===C(t,"position")}function D(t){var i,e=t,n=e.offsetTop;for(e=e.parentNode;e&&1!==e.nodeType;)E(e)&&(n+=e.offsetTop),e=e.parentNode;return n-(window.pageYOffset?i=window.pageYOffset:document.compatMode&&"BackCompat"!=document.compatMode?i=document.documentElement.scrollTop:document.body&&(i=document.body.scrollTop),i)}function L(t){var i,e=t,n=e.offsetLeft;for(e=e.parentNode;e&&1!==e.nodeType;)E(e)&&(n+=e.offsetLeft),e=e.parentNode;return n-(window.pageXOffset?i=window.pageXOffset:document.compatMode&&"BackCompat"!=document.compatMode?i=document.documentElement.scrollLeft:document.body&&(i=document.body.scrollLeft),i)}var j={ele:null,color:"#333333",lineWidth:4,bgColor:-1},S=y("draw",(function(t,i){this.cvs=t,this.c2d=t.getContext("2d"),this.main=i,this.memCvs=document.createElement("canvas"),this.memCvs2d=this.memCvs.getContext("2d"),this.scalc=1}));w(S.prototype,{init:function(){},resize:function(t,i){this.cvs.setAttribute("width",t),this.cvs.setAttribute("height",i),this.c2d=this.cvs.getContext("2d"),this.memCvs.setAttribute("width",t*this.scalc),this.memCvs.setAttribute("height",i*this.scalc),this.memCvs2d=this.memCvs.getContext("2d"),this.draw()},draw:function(){if(this.main.destoryKey)return console.log("object is destory!!");var t=this.main.data.buffer,i=t.length,e=0,n=0,o=this.memCvs2d,s=null;for(o.clearRect(0,0,this.memCvs.width,this.memCvs.height),o.save(),o.scale(this.scalc,this.scalc);e<i;e++)if(o.beginPath(),!(!(s=t[e]).points.length>0)){for(o.lineWidth=s.lineWidth,o.strokeStyle=s.color,o.lineJoin="round",o.lineCap="round",o.lineTo(s.points[0].x,s.points[0].y),n=1;n<s.points.length;n++)o.lineTo(s.points[n].x,s.points[n].y);o.stroke(),o.closePath()}o.restore(),this.c2d.clearRect(0,0,this.cvs.width,this.cvs.height),-1!=this.main.option.bgColor&&(this.c2d.fillStyle=this.main.option.bgColor,this.c2d.fillRect(0,0,this.cvs.width,this.cvs.height)),this.c2d.drawImage(this.memCvs,0,0,this.cvs.width,this.cvs.height)}});var W=S,O=y("point",(function(t,i){this.x=t,this.y=i}));w(O.prototype,{copy:function(){return new O(this.x,this.y)},toJson:function(){return{x:this.x,y:this.y}},jsonTo:function(t){this.x=t.x,this.y=t.y}});var x=O,T=y("line",(function(){this.points=[],this.color="#333333",this.lineWidth=4}));w(T.prototype,{pushPoint:function(t){this.points.push(t)},setLineWidth:function(t){this.lineWidth=t},copy:function(){for(var t=new T,i=[],e=0;e<this.points.length;e++)i.push(this.points[e].copy());return t.color=this.color,t.setLineWidth(this.lineWidth),t},setColor:function(t){this.color=t},toJson:function(){for(var t=[],i=0;i<this.points.length;i++)t.push(this.points[i].toJson());return{points:t,color:this.color,lineWidth:this.lineWidth}},jsonTo:function(t){this.color=t.color,this.lineWidth=t.lineWidth;for(var i=0;i<t.points.length;i++){var e=new x(t.points[i].x,t.points[i].y);this.points.push(e)}return this.points}});var X=T,Y=y("data",(function(t){this.buffer=[],this.main=t}));w(Y.prototype,{init:function(){},getSize:function(){return this.buffer.length},pushData:function(t){this.buffer.push(t)},popData:function(){return this.buffer.pop()},clear:function(){this.buffer.length=0},toJson:function(){for(var t=[],i=0;i<this.buffer.length;i++)t.push(this.buffer[i].toJson());return t},jsonTo:function(t){this.clear();for(var i=0;i<t.length;i++){var e=new X;e.jsonTo(t[i]),this.buffer.push(e)}return this.buffer}});var P=Y,M=y("event",(function(t){this.eventBuffer={},this.main=t,this.touch=null,this.isEle=!1,this.mousedown=function(t){t.preventDefault(),this.isEle=!0,r()?(this.touch=t.changedTouches[0],this.main.pointStart({clientX:this.touch.clientX,clientY:this.touch.clientY})):this.main.pointStart({clientX:t.clientX,clientY:t.clientY})}.bind(this),this.mousemove=function(t){!0===this.isEle&&(t.preventDefault(),r()?(this.touch=t.changedTouches[0],this.main.pointMove({clientX:this.touch.clientX,clientY:this.touch.clientY})):this.main.pointMove({clientX:t.clientX,clientY:t.clientY}))}.bind(this),this.mouseup=function(t){!0===this.isEle&&(this.isEle=!1,t.preventDefault(),r()?(this.touch=t.changedTouches[0],this.main.pointEnd({clientX:this.touch.clientX,clientY:this.touch.clientY})):this.main.pointEnd({clientX:t.clientX,clientY:t.clientY}))}.bind(this)}));w(M.prototype,{bindEvent:function(t){t.style.cssText="touch-action: pan-y;",r()?(t.addEventListener("touchstart",this.mousedown),document.addEventListener("touchmove",this.mousemove),document.addEventListener("touchend",this.mouseup)):(t.addEventListener("mousedown",this.mousedown),document.addEventListener("mousemove",this.mousemove),document.addEventListener("mouseup",this.mouseup))},unbindEvent:function(t){r()?(t.removeEventListener("touchstart",this.mousedown),document.removeEventListener("touchmove",this.mousemove),document.removeEventListener("touchend",this.mouseup)):(t.removeEventListener("mousedown",this.mousedown),document.removeEventListener("mousemove",this.mousemove),document.removeEventListener("mouseup",this.mouseup))}});var J=M,N=y("main",(function(t){this.option=w({},j,t),this.cvs=document.createElement("canvas"),this.draw=new W(this.cvs,this),this.data=new P(this),this.redoData=new P(this),this.event=new J(this),this.dropData={start:!1,startX:0,startY:0,nowLine:null}}));w(N.prototype,{init:function(){this.option.ele&&(this.option.ele.appendChild(this.cvs),this.resize()),this.draw.draw(),this.event.bindEvent(this.cvs)},moutedEle:function(t){this.option.ele=t,this.option.ele&&(this.option.ele.appendChild(this.cvs),this.resize()),this.draw.draw()},resize:function(){var t=this.option.ele.clientWidth,i=this.option.ele.clientHeight;this.draw.resize(t,i),this.draw.draw()},resizeWithNumber:function(t,i){this.draw.resize(t,i),this.draw.draw()},setColor:function(t){this.option.color=t},setLineWidth:function(t){this.option.lineWidth=t},setBgColor:function(t){this.option.bgColor=t,this.draw.draw()},destory:function(){for(var t in this.data.clear(),this.redoData.clear(),this.event.unbindEvent(this.cvs),this.cvs.parentNode&&this.cvs.parentNode.removeChild(this.cvs),this)delete this[t];s(this,"destoryKey",null,null,1,(function(){return!0}))},undo:function(){var t=this.data.popData();t&&(this.redoData.pushData(t),this.draw.draw())},redo:function(){var t=this.redoData.popData();t&&(this.data.pushData(t),this.draw.draw())},toJson:function(){return JSON.stringify({data:this.data.toJson(),color:this.option.color,lineWidth:this.option.lineWidth,bgColor:this.option.bgColor})},jsonTo:function(t){this.data.jsonTo(t.data),this.option.color=t.color,this.option.lineWidth=t.lineWidth,this.option.bgColor=t.bgColor,this.draw.draw()},pointStart:function(t){var i=t.clientX-L(this.cvs),e=t.clientY-D(this.cvs);this.dropData.start||(this.dropData.start=!0,this.dropData.startX=i,this.dropData.startY=e,this.dropData.nowLine=new X,this.dropData.nowLine.setLineWidth(this.option.lineWidth),this.dropData.nowLine.setColor(this.option.color),this.data.pushData(this.dropData.nowLine),this.draw.draw())},pointMove:function(t){if(this.dropData.start){var i=t.clientX-L(this.cvs),e=t.clientY-D(this.cvs);this.dropData.nowLine.pushPoint(new x(i,e)),this.draw.draw()}},pointEnd:function(t){t.clientX,L(this.cvs),t.clientY,D(this.cvs);this.dropData.start&&(this.dropData.start=!1,this.draw.draw())},drawEle:function(){this.draw.draw()},toPng:function(){return this.draw.draw(),this.cvs.toDataURL("image/png")},toJpeg:function(){var t,i=!1;return-1===this.option.bgColor&&(this.option.bgColor="white",i=!0),this.draw.draw(),t=this.cvs.toDataURL("image/jpeg"),i&&(this.option.bgColor=-1,this.draw.draw()),t}}),window&&(window.EleSign=N);i.default=N}]);