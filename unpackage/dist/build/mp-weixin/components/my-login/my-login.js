(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/my-login/my-login"],{"6bf6":function(e,t,n){"use strict";n.r(t);var r=n("ea47"),o=n("cd84");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("dd91");var u=n("828b"),i=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);t["default"]=i.exports},cd84:function(e,t,n){"use strict";n.r(t);var r=n("f83e"),o=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},d531:function(e,t,n){},dd91:function(e,t,n){"use strict";var r=n("d531"),o=n.n(r);o.a},ea47:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"5dab"))}},o=function(){var e=this.$createElement;this._self._c},a=[]},f83e:function(e,t,n){"use strict";(function(e){var r=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("7eb4")),a=r(n("34cf")),u=r(n("ee10")),i=r(n("7ca3")),c=n("8f59");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={name:"my-login",data:function(){return{}},computed:f({},(0,c.mapState)("m_user",["redirectInfo"])),methods:f(f({},(0,c.mapMutations)("m_user",["updateUserInfo","updateToken","updateRedirectInfo"])),{},{getUserInfo:function(t){if("getUserInfo:fail auth deny"===t.detail.errMsg)return e.$showMsg("您取消了登录授权！");this.updateUserInfo(t.detail.userInfo),this.getToken(t.detail)},getUserProfile:function(t){var n=this;e.getUserProfile({desc:"你的授权信息",success:function(e){n.updateUserInfo(e.userInfo)},fail:function(t){return e.$showMsg("您取消了登录授权")}}),this.getToken(t.detail)},getToken:function(t){var n=this;return(0,u.default)(o.default.mark((function r(){var u,i,c,s,f,d,l;return o.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.login().catch((function(e){return e}));case 2:if(u=r.sent,i=(0,a.default)(u,2),c=i[0],s=i[1],console.log("res",s),!c&&"login:ok"===s.errMsg){r.next=9;break}return r.abrupt("return",e.$showError("登录失败！"));case 9:return f={code:s.code,encryptedData:t.encryptedData,iv:t.iv,rawData:t.rawData,signature:t.signature},r.next=12,e.$http.post("/api/public/v1/users/wxlogin",f);case 12:if(d=r.sent,l=d.data,console.log("11",l),200!=l.meta.status){r.next=17;break}return r.abrupt("return",e.$showMsg("登录失败！"));case 17:n.updateToken("sucess"),n.navigateBack();case 19:case"end":return r.stop()}}),r)})))()},navigateBack:function(){var t=this;this.redirectInfo&&"switchTab"===this.redirectInfo.openType&&e.switchTab({url:this.redirectInfo.from,complete:function(){t.updateRedirectInfo(null)}})}})};t.default=d}).call(this,n("df3c")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/my-login/my-login-create-component',
    {
        'components/my-login/my-login-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("6bf6"))
        })
    },
    [['components/my-login/my-login-create-component']]
]);