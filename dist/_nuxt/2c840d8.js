(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{268:function(t,e,r){"use strict";r.r(e);var n=r(32),c=(r(74),{data:function(){return{items:""}},mounted:function(){this.ambilData()},methods:{ambilData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$supabase.from("tb_produk").select();case 2:r=e.sent,data=r.data,n=r.error,data&&(t.items=data),n&&console.log(n);case 7:case"end":return e.stop()}}),e)})))()}}}),o=r(61),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("Navigasi"),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("h1",[t._v("Products")]),t._v(" "),r("div",{staticClass:"row"},t._l(t.items,(function(e){return r("div",{key:e.id,staticClass:"col-md-4"},[r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"card-header"},[r("img",{attrs:{src:e.foto,alt:"",width:"100%"}})]),t._v(" "),r("div",{staticClass:"card-body"},[r("h4",[t._v(t._s(e.nama))]),t._v(" "),r("h4",[t._v("Rp"+t._s(e.harga))])])])])})),0)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);