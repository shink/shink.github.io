webpackJsonp([1],{"3OIU":function(e,t){},"6+TQ":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},i,!1,function(e){n("6+TQ")},null,null).exports,r=n("/ocq"),s={name:"Home",data:function(){return{clientHeight:"",headerShow:!1,isShows:[{isShow:!1},{isShow:!1},{isShow:!1},{isShow:!1}]}},mounted:function(){this.clientHeight=""+document.documentElement.clientHeight,window.onresize=function(){this.clientHeight=""+document.documentElement.clientHeight},this.headerShow=!0,window.addEventListener("scroll",this.showBox,!0)},destroyed:function(){window.removeEventListener("scroll",this.showBox)},methods:{changeFixed:function(e){this.$refs.homePage.style.height=e+"px"},showBox:function(){console.log("showBox");for(var e=document.querySelectorAll(".box"),t=e.length,n=0;n<t;n++){console.log("index",n),console.log(this.isShows.toString());var o=e[n],i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,a=o.getBoundingClientRect()&&o.getBoundingClientRect().top;console.log("top",a),a<=i-100&&(this.isShows[n].isShow=(this.isShows[n].isShow,!0))}}},watch:{clientHeight:function(){this.changeFixed(this.clientHeight)}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[n("header",{ref:"homePage",staticStyle:{"background-color":"royalblue"}},[n("transition",{attrs:{name:"fade"}},[e.headerShow?n("h2",[e._v("You're uinique, nothing can replace you.")]):e._e()])],1),e._v(" "),n("div",{staticClass:"box",staticStyle:{"background-color":"yellow"}},[n("transition",{attrs:{name:"fade"}},[e.isShows[0].isShow?n("h3",[e._v("You're uinique, nothing can replace you.")]):e._e()])],1),e._v(" "),n("div",{staticClass:"box",staticStyle:{"background-color":"sienna"}},[n("transition",{attrs:{name:"fade"}},[e.isShows[1].isShow?n("h3",[e._v("You're uinique, nothing can replace you.")]):e._e()])],1),e._v(" "),n("div",{staticClass:"box",staticStyle:{"background-color":"rosybrown"}},[n("transition",{attrs:{name:"fade"}},[e.isShows[2].isShow?n("h3",[e._v("You're uinique, nothing can replace you.")]):e._e()])],1),e._v(" "),n("div",{staticClass:"box",staticStyle:{"background-color":"gray"}},[n("transition",{attrs:{name:"fade"}},[e.isShows[3].isShow?n("h3",[e._v("You're uinique, nothing can replace you.")]):e._e()])],1)])},staticRenderFns:[]};var c=n("VU/8")(s,u,!1,function(e){n("3OIU")},"data-v-a8251076",null).exports,l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"demo"}},[n("button",{on:{click:e.Show}},[e._v("点击动画")]),e._v(" "),n("transition-group",{attrs:{name:"fade"}},[e.show?n("h1",{key:1},[e._v("hello")]):e._e(),e._v(" "),e.show?n("h2",{key:2},[e._v("hello world!")]):e._e()])],1)},staticRenderFns:[]};n("VU/8")({name:"Index",data:function(){return{show:!0}},methods:{Show:function(){this.show=!this.show}}},l,!1,function(e){n("pzXQ")},"data-v-4f612e8b",null).exports;var h={name:"Store",data:function(){return{value:"input",products:[]}},props:{},components:{},methods:{handleInput:function(){console.log("handling...")},enter:function(){console.log("enter...")}},mounted:function(){var e=this;fetch("https://api.myjson.com/bins/1h8gwt").then(function(e){return e.json()}).then(function(t){e.products=t.products})},computed:{total:function(){return this.products.reduce(function(e,t){return e+t.quantity},0)}},watch:{}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"text"},domProps:{value:e.value},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enter(t)},input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),n("div",[e._v(e._s(e.value))]),e._v(" "),n("ul",e._l(e.products,function(t){return n("li",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"product.quantity",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||e.$set(t,"quantity",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v("\n      "+e._s(t.name)+", "+e._s(t.quantity)+"\n      "),0===t.quantity?n("span",[e._v("卖光了")]):e._e()])}),0),e._v(" "),n("div",[e._v("总数："+e._s(e.total))])])},staticRenderFns:[]};var v=n("VU/8")(h,d,!1,function(e){n("vjVh")},"data-v-aae3d8ec",null).exports;o.default.use(r.a);var p=new r.a({routes:[{path:"/",name:"Home",component:c},{path:"/store",name:"Store",component:v}]}),m=n("BTaQ"),f=n.n(m);o.default.config.productionTip=!1,o.default.use(f.a),new o.default({el:"#app",router:p,components:{App:a},template:"<App/>"})},pzXQ:function(e,t){},vjVh:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6b4837c03836dd7e58d9.js.map