/*!
 *  build: HuiBo-Admin 
 *   time: 2022-9-14 17:23:05
 */
(window["webpackJsonp_huibo"]=window["webpackJsonp_huibo"]||[]).push([["chunk-1e086357"],{"372d":function(e,t,o){},b722:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"v-board-page"},[t("div",{staticClass:"file-wrapper"},[t("embed",{directives:[{name:"show",rawName:"v-show",value:"native"==e.openType,expression:"openType == 'native'"}],attrs:{height:"100%",src:e.filePath,type:"application/pdf",width:"100%"}}),t("iframe",{directives:[{name:"show",rawName:"v-show",value:"extension"==e.openType,expression:"openType == 'extension'"}],attrs:{frameborder:"0",height:"100%",src:e.pSrc,width:"100%"}}),t("div",{directives:[{name:"show",rawName:"v-show",value:"custom"==e.openType,expression:"openType == 'custom'"}],staticClass:"pdfcustom",attrs:{id:"pdfcustom"}})]),t("div",{staticClass:"control-wrapper"},[t("el-button",{attrs:{type:"primary"},on:{click:e.openByNative}},[e._v("默认打开")]),t("el-button",{attrs:{type:"success"},on:{click:e.openByExtension}},[e._v("插件打开")]),t("el-button",{on:{click:e.openByCustom}},[e._v("自定义打开")])],1),t("div",{staticClass:"footer"},[t("el-button",{on:{click:e.goPrev}},[e._v("上一页")]),t("el-button",{on:{click:e.goNext}},[e._v("下一页")])],1)])},n=[],s={name:"Vboard",data(){return{localFilePath:"/OpenAPI.pdf",testFilePath:"http://192.168.3.10:3182/static/OpenAPI安全认证库%20（Java）开发指南V1.1.3_20210716095939_20211203141454.pdf",filePath:"https://www.huiborobot.com.cn:3183/static/OpenAPI安全认证库 （Java）开发指南V1.1.3_20210716095939_20211203141454.pdf",pSrc:"",openType:"custom",fileScale:null,fileViewSize:{},currPageIndex:0,doc:null}},mounted(){this.init()},methods:{init(){var e=document.getElementById("pdfcustom"),t=e.offsetHeight,o=e.offsetWidth;this.fileViewSize={pageHeight:t,pageWidth:o},console.log("pdfjsLib");let i=this;const n=window.pdfjsLib,s=this.testFilePath;n.GlobalWorkerOptions.workerSrc="http://192.168.0.111:3000/pdfjs/build/pdf.worker.js";const a=n.getDocument(s);a.promise.then((function(e){const t=e.numPages;console.log("# Document Loaded"),console.log("Number of Pages: "+t),console.log(),i.doc=e,i.goNext()}))},append(e){var t=this.fileScale||1,o=e.getViewport({scale:t});null==this.fileScale&&(this.fileScale=Math.round(this.fileViewSize.pageHeight/o.height*100)/100,t=this.fileScale,o=e.getViewport({scale:t}),console.log("pageHeight docHeight",this.fileViewSize.pageHeight,o.height)),console.log("viewport",o,t);var i=window.devicePixelRatio||1,n=document.createElement("canvas"),s=n.getContext("2d");n.width=Math.floor(o.width*i),n.height=Math.floor(o.height*i);var a={canvasContext:s,viewport:o};e.render(a);var c=document.getElementById("pdfcustom");c.appendChild(n)},open(){},openByNative(){"native"!=this.openType&&(this.openType="native",this.pSrc="")},openByExtension(){"extension"!=this.openType&&(this.openType="extension",this.pSrc="http://192.168.0.111:3000/pdfjs/web/viewer.html?file="+encodeURIComponent(this.testFilePath))},openByCustom(){"custom"!=this.openType&&(this.openType="custom")},goNext(){console.log("goNext",this.currPageIndex),this.currPageIndex<14&&(this.currPageIndex=this.currPageIndex+2),this.goShow()},goPrev(){console.log("goNext",this.currPageIndex),this.currPageIndex>2&&(this.currPageIndex-=2),this.goShow()},goShow(){var e=this,t=this.doc,o=document.getElementById("pdfcustom");o.innerHTML="";var i=this.currPageIndex;console.log("goShow",i),t.getPage(i-1).then((function(t){e.append(t)})),t.getPage(i).then((function(t){e.append(t)}))}}},a=s,c=(o("cef7"),o("2877")),p=Object(c["a"])(a,i,n,!1,null,"0df30943",null);t["default"]=p.exports},cef7:function(e,t,o){"use strict";o("372d")}}]);