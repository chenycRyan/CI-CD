/*!
 *  build: HuiBo-Admin 
 *   time: 2022-12-1 15:17:30
 */
(window["webpackJsonp_huibo"]=window["webpackJsonp_huibo"]||[]).push([["chunk-2d207728"],{a124:function(a,n,t){"use strict";t.r(n);var e=function(){var a=this,n=a._self._c;return n("div",{staticClass:"callback-container"})},i=[],o=t("a18c"),c=t("4328"),l=t.n(c);function s(){let a=o["c"].currentRoute.query;"{}"===JSON.stringify(a)&&(a=l.a.parse(document.location.search.slice(1))),localStorage.setItem("socialData",JSON.stringify(a))}var r={name:"Callback",data(){return{loading:null}},created(){this.loading=this.$baseLoading(),s(),window.close()},beforeDestroy(){this.loading.close()}},u=r,d=t("2877"),b=Object(d["a"])(u,e,i,!1,null,null,null);n["default"]=b.exports}}]);