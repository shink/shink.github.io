webpackJsonp([1],{"+skl":function(e,t){},Ah79:function(e,t){},F13j:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),o={name:"App",created:function(){try{document.body.removeChild(document.getElementById("appLoading")),setTimeout(function(){document.getElementById("app").style.display="block"},500)}catch(e){console.log(e)}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")(o,s,!1,function(e){n("F13j")},null,null).exports,r=n("/ocq"),c={name:"Content",data:function(){return{isShows:[{isShow:!1},{isShow:!1},{isShow:!1},{isShow:!1}],progress:0}},mounted:function(){window.addEventListener("scroll",this.showBox,!0)},destroyed:function(){window.removeEventListener("scroll",this.showBox)},methods:{showBox:function(){for(var e=document.querySelectorAll(".box"),t=e.length,n=0;n<t;n++){var i=e[n],o=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,s=i.getBoundingClientRect()&&i.getBoundingClientRect().top;if(document.documentElement.scrollTop<=100)this.progress=0,this.$Loading.update(this.progress);else if(s<=o-100){this.isShows[n].isShow=(this.isShows[n].isShow,!0);var a=(n+1)*(1/t)*100;this.progress=(this.progress,a),this.$Loading.update(this.progress)}}}},watch:{}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"content"}},[n("div",{staticClass:"box",staticStyle:{"background-color":"#F5F5F5"}},[n("transition",{attrs:{name:"fade"}},[e.isShows[0].isShow?n("h3",[e._v("You're uinique, nothing can replace you.")]):e._e()])],1),e._v(" "),n("div",{staticClass:"box",staticStyle:{"background-color":"white"}},[n("transition",{attrs:{name:"fade"}},[e.isShows[1].isShow?n("h3",[e._v("You're uinique, nothing can replace you.")]):e._e()])],1),e._v(" "),n("div",{staticClass:"box",staticStyle:{"background-color":"#F5F5F5"}},[n("transition",{attrs:{name:"fade"}},[e.isShows[2].isShow?n("h3",[e._v("You're uinique, nothing can replace you.")]):e._e()])],1),e._v(" "),n("div",{staticClass:"box",staticStyle:{"background-color":"white"}},[n("transition",{attrs:{name:"fade"}},[e.isShows[3].isShow?n("h3",[e._v("You're uinique, nothing can replace you.")]):e._e()])],1)])},staticRenderFns:[]};var u={name:"Home",data:function(){return{clientHeight:0,headerShow:!1}},components:{Content:n("VU/8")(c,h,!1,function(e){n("wvSa")},"data-v-b190a824",null).exports},beforeCreate:function(){this.$Loading.update(this.progress)},mounted:function(){this.clientHeight=document.documentElement.clientHeight,window.onresize=function(){this.clientHeight=document.documentElement.clientHeight},this.headerShow=!0},methods:{changeFixed:function(e){this.$refs.homePage.style.height=e+"px"}},watch:{clientHeight:function(){this.changeFixed(this.clientHeight)}}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"container"}},[t("header",{ref:"homePage"},[t("transition",{attrs:{name:"fade"}},[this.headerShow?t("h2",[this._v("You're uinique, nothing can replace you.")]):this._e()])],1),this._v(" "),t("Content")],1)},staticRenderFns:[]};var l=n("VU/8")(u,d,!1,function(e){n("Ah79")},"data-v-c9a6e808",null).exports;i.default.use(r.a);var p=new r.a({routes:[{path:"/",name:"Header",component:l}]}),m=n("BTaQ"),g=n.n(m);n("+skl");i.default.use(g.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:p,components:{App:a},template:"<App/>"})},wvSa:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b5b2561ed7f4089d353d.js.map