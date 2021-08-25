(function(t){function e(e){for(var o,a,u=e[0],c=e[1],s=e[2],d=0,p=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/simon/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},4685:function(t,e,n){},"479a":function(t,e,n){t.exports=n.p+"media/button4.e3985a73.mp3"},"567e":function(t,e,n){t.exports=n.p+"media/button3.7ce3bb9e.mp3"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[t._l(t.blocks,(function(e){return n("QuarterCircle",{key:e.id,attrs:{block:e},on:{"quarter-circle-click":t.quarterCircleClick}})})),n("hr")],2),"pause"==t.roundState||"fail"==t.roundState?n("div",["fail"==t.roundState?n("span",[t._v("Вы ошиблись, начните заново")]):t._e(),n("button",{on:{click:t.startGame}},[t._v("Начать игру")]),n("br"),n("span",[t._v("Уровень сложности:")]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.complexity,expression:"complexity"}],attrs:{type:"radio",name:"radio",value:"1500",id:"easy"},domProps:{checked:t._q(t.complexity,"1500")},on:{change:function(e){t.complexity="1500"}}}),n("label",{attrs:{for:"easy"}},[t._v("Легкий")])]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.complexity,expression:"complexity"}],attrs:{type:"radio",name:"radio",value:"1000",id:"normal"},domProps:{checked:t._q(t.complexity,"1000")},on:{change:function(e){t.complexity="1000"}}}),n("label",{attrs:{for:"normal"}},[t._v("Средний")])]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.complexity,expression:"complexity"}],attrs:{type:"radio",name:"radio",value:"400",id:"hard"},domProps:{checked:t._q(t.complexity,"400")},on:{change:function(e){t.complexity="400"}}}),n("label",{attrs:{for:"hard"}},[t._v("Сложный")])])]):"show"==t.roundState?n("span",[t._v("Наблюдайте за последовательностью")]):"repeat"==t.roundState?n("span",[t._v("Повторите последовательность")]):t._e(),"pause"!=t.roundState&&"fail"!=t.roundState?n("span",[t._v("Раунд: "+t._s(t.soundQuantity))]):t._e()])},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{backgroundColor:t.block.color},attrs:{id:t.block.id},on:{click:function(e){return t.$emit("quarter-circle-click",t.block.id)}}})},u=[],c={props:{block:{type:Object}}},s=c,l=(n("6be1"),n("2877")),d=Object(l["a"])(s,a,u,!1,null,"3596e608",null),p=d.exports,f={name:"App",data:function(){return{blocks:[{id:"1",color:"#ffd700"},{id:"2",color:"#007fff"},{id:"3",color:"#ff0000"},{id:"4",color:"#32cd32"}],roundState:"pause",soundChain:[],soundQuantity:0,chainPhase:0,complexity:"1500"}},components:{QuarterCircle:p},methods:{buttonSound:function(t){var e=new Audio(n("9238")("./button"+t+".mp3"));document.getElementById(t).classList.toggle("active"),e.play(),setTimeout((function(){document.getElementById(t).classList.toggle("active")}),300)},quarterCircleClick:function(t){var e=this;"repeat"==this.roundState&&(this.buttonSound(t),t==this.soundChain[this.chainPhase]?this.chainPhase+1<this.soundQuantity?this.chainPhase++:(this.chainPhase=0,setTimeout((function(){e.startGame()}),1e3)):(this.roundState="fail",this.soundChain=[],this.soundQuantity=0,this.chainPhase=0))},soundChainUp:function(){this.soundChain.push(Math.floor(4*Math.random())+1),this.soundQuantity=this.soundChain.length},startGame:function(){var t=this;this.roundState="show",this.soundChainUp();for(var e=function(e){setTimeout((function(){t.buttonSound(t.soundChain[e])}),e*t.complexity),t.soundQuantity-e==1&&setTimeout((function(){t.roundState="repeat"}),e*t.complexity)},n=0;n<this.soundQuantity;n++)e(n)}}},h=f,m=(n("034f"),Object(l["a"])(h,r,i,!1,null,null,null)),b=m.exports;o["a"].config.productionTip=!1,o["a"].config.devtools=!0,new o["a"]({render:function(t){return t(b)}}).$mount("#app")},"62c6":function(t,e,n){t.exports=n.p+"media/button2.2c60a7d1.mp3"},"6be1":function(t,e,n){"use strict";n("4685")},"85ec":function(t,e,n){},9238:function(t,e,n){var o={"./button1.mp3":"b214","./button2.mp3":"62c6","./button3.mp3":"567e","./button4.mp3":"479a"};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id="9238"},b214:function(t,e,n){t.exports=n.p+"media/button1.97b2266e.mp3"}});
//# sourceMappingURL=app.b5fdc593.js.map