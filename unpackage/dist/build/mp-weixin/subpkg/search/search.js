(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/search/search"],{"03ea":function(t,e,n){},7717:function(t,e,n){"use strict";var i=n("03ea"),r=n.n(i);r.a},"97eb":function(t,e,n){"use strict";(function(t){var i=n("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("7eb4")),s=i(n("af34")),u=i(n("ee10")),a={data:function(){return{timer:null,kw:"",searchResults:[],historyList:[]}},methods:{gotoGoodsList:function(e){t.navigateTo({url:"/subpkg/goods_list/goods_list?query="+e})},gotoDetail:function(e){t.navigateTo({url:"/subpkg/goods_detail/goods_detail?goods_id="+e})},input:function(t){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.kw=t,e.getSearchList()}),500)},cleanHistory:function(){this.historyList=[],t.setStorageSync("kw","[]")},getSearchList:function(){var e=this;return(0,u.default)(r.default.mark((function n(){var i,s;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""!==e.kw){n.next=3;break}return e.searchResults=[],n.abrupt("return");case 3:return n.next=5,t.$http.get("/api/public/v1/goods/qsearch",{query:e.kw});case 5:if(i=n.sent,s=i.data,200==s.meta.status){n.next=9;break}return n.abrupt("return",t.$showMsg());case 9:e.searchResults=s.message,e.saveSearchHistory();case 11:case"end":return n.stop()}}),n)})))()},saveSearchHistory:function(){var e=new Set(this.historyList);e.delete(this.kw),e.add(this.kw),this.historyList=Array.from(e),t.setStorageSync("kw",JSON.stringify(this.historyList))}},computed:{historys:function(){return(0,s.default)(this.historyList).reverse()}},onLoad:function(){this.historyList=JSON.parse(t.getStorageSync("kw")||"[]")}};e.default=a}).call(this,n("df3c")["default"])},c602:function(t,e,n){"use strict";n.r(e);var i=n("97eb"),r=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=r.a},d6f3:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={uniSearchBar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar")]).then(n.bind(null,"1fc3"))},uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"5dab"))},uniTag:function(){return n.e("uni_modules/uni-tag/components/uni-tag/uni-tag").then(n.bind(null,"b234"))}},r=function(){var t=this.$createElement,e=(this._self._c,this.searchResults.length);this.$mp.data=Object.assign({},{$root:{g0:e}})},s=[]},db40:function(t,e,n){"use strict";n.r(e);var i=n("d6f3"),r=n("c602");for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s);n("7717");var u=n("828b"),a=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=a.exports},eb20:function(t,e,n){"use strict";(function(t,e){var i=n("47a9");n("29f9");i(n("3240"));var r=i(n("db40"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(r.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])}},[["eb20","common/runtime","common/vendor"]]]);