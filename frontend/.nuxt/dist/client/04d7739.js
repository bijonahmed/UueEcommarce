(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{402:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(49),{data:function(){return{banner:[]}},mounted:function(){this.alldealsads()},methods:{alldealsads:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$axios.get("/unauthenticate/alldealsads");case 4:n=e.sent,t.banner=n.data,console.log(n.data),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,9,11,14]])})))()}}}),c=n(34),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"deal_foryou"},[t._m(0),t._v(" "),t._l(t.banner,(function(n,r){return e("div",{key:r,staticClass:"row"},[e("div",{staticClass:"col-6"},[e("a",[e("img",{staticClass:"img-fluid",attrs:{src:n.imageOne,alt:""}})])]),t._v(" "),e("div",{staticClass:"col-6"},[e("a",[e("img",{staticClass:"img-fluid",attrs:{src:n.imageTwo,alt:""}})])])])}))],2)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"row mb-2"},[t("div",{staticClass:"col-12 m-auto"},[t("div",{staticClass:"sell_title justify-content-center"},[t("h5",[this._v("Deals For You")])])])])}],!1,null,null,null);e.default=component.exports}}]);