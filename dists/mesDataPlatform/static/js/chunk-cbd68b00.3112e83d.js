/*!
 *  build: HuiBo-Admin 
 *   time: 2022-12-1 15:17:30
 */
(window["webpackJsonp_huibo"]=window["webpackJsonp_huibo"]||[]).push([["chunk-cbd68b00"],{3312:function(e,t,a){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"component-container"},[t("el-form",{attrs:{inline:""}},[e.cascaderFilter.length>0?t("el-form-item",{attrs:{label:""}},[t("el-cascader",{attrs:{options:e.cascaderFilter},on:{change:e.handleCascaderChange},model:{value:e.cascaderValueLocal,callback:function(t){e.cascaderValueLocal=t},expression:"cascaderValueLocal"}})],1):e._e(),e._l(e.searchSelects,(function(a){return t("el-form-item",{key:a.prop,attrs:{label:""}},[t("el-select",{attrs:{placeholder:a.placeholder},on:{change:function(t){return e.$forceUpdate()}},model:{value:e.queryForm[a.prop],callback:function(t){e.$set(e.queryForm,a.prop,t)},expression:"queryForm[item.prop]"}},e._l(a.data,(function(e){return t("el-option",{key:e.id,attrs:{label:e.label,value:e.id}})})),1)],1)})),e.searchMultiple.length>0?t("el-form-item",{staticClass:"prepend-select",attrs:{label:""}},[t("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入相应类型的内容查询"},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchMultipleKeyword,callback:function(t){e.searchMultipleKeyword=t},expression:"searchMultipleKeyword"}},e._l(e.searchMultiple,(function(e){return t("el-option",{key:e.id,attrs:{label:e.label,value:e.id}})})),1)]},proxy:!0}],null,!1,3530032308),model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1):e._e(),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.searchShow,expression:"searchShow"}],attrs:{label:""}},[t("el-input",{staticStyle:{width:"220px"},attrs:{clearable:"",placeholder:e.searchPlaceholder},model:{value:e.searchText,callback:function(t){e.searchText="string"===typeof t?t.trim():t},expression:"searchText"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.searchButtonShow,expression:"searchButtonShow"}]},[t("el-button",{attrs:{icon:"el-icon-search",loading:e.queryLoading,type:"primary"},on:{click:e.searchClick}},[e._v(" 搜索 ")])],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.addShow,expression:"addShow"}]},[t("el-button",{attrs:{icon:"el-icon-plus",type:"success"},on:{click:e.addClick}},[e._v(" 新增 ")])],1)],2),e.tabs.length>0?t("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.chooseStatusTab},model:{value:e.statusActiveName,callback:function(t){e.statusActiveName=t},expression:"statusActiveName"}},e._l(e.tabs,(function(e){return t("el-tab-pane",{key:e.name,attrs:{label:e.label,name:e.name}})})),1):e._e(),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.queryLoading,expression:"queryLoading"}],staticClass:"mt-10",attrs:{border:"",data:e.listData,stripe:""}},[e.expandTable.show?t("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{staticClass:"expand-wrapper"},e._l(e.tableColumnsShow.slice(e.expandTable.rowLen),(function(r){return t("div",{key:r.prop,staticClass:"expand-item"},["money"==r.type?[t("div",{staticClass:"label"},[e._v(e._s(r.label)+"(万元)")]),t("div",{staticClass:"content"},[e._v(" "+e._s(a.row[r.prop+"_UNIT"])+" ")])]:[t("div",{staticClass:"label"},[e._v(e._s(r.label))]),t("div",{staticClass:"content"},[e._v(" "+e._s(r.filter?a.row[r.prop+"_FILTER"]:r.tableProp?a.row[r.tableProp]:a.row[r.prop])+" ")])]],2)})),0)]}}],null,!1,463568962)}):e._e(),t("el-table-column",{attrs:{align:"center",label:"序号",type:"index",width:"50"}}),e._l(e.tableColumnsShow.slice(0,e.expandTable.show?e.expandTable.rowLen:e.tableColumns.length),(function(a){return["money"==a.type?t("el-table-column",{key:a.prop,attrs:{align:"center",label:a.label+"(万元)",width:a.width},scopedSlots:e._u([{key:"default",fn:function(r){return[t("span",[e._v(e._s(r.row[a.prop+"_UNIT"]))])]}}],null,!0)}):"file"==a.slot?t("el-table-column",{key:a.prop,attrs:{align:"center",label:a.label,width:a.width},scopedSlots:e._u([a.slot&&"file"==a.slot?{key:"default",fn:function(r){return e._l(r.row[a.prop],(function(a){return t("div",{key:a.fileId,staticClass:"file-link"},[t("a",{attrs:{href:e.getSaoFileUrl(a.fileId)}},[e._v(e._s(a.remark))])])}))}}:null],null,!0)}):"html"==a.slot?t("el-table-column",{key:a.prop,attrs:{align:"center",label:a.label,width:a.width},scopedSlots:e._u([{key:"default",fn:function(r){return[t("div",{domProps:{innerHTML:e._s(a.filter?r.row[a.prop+"_FILTER"]:r.row[a.prop])}})]}}],null,!0)}):t("el-table-column",{key:a.prop,attrs:{align:"center",label:a.label,prop:a.filter?a.prop+"_FILTER":a.tableProp||a.prop,width:a.width}})]})),t("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:0==e.tableIconType?200:260},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[0==e.tableIconType?[t("el-button",{attrs:{icon:"el-icon-edit",size:"mini",title:"编辑",type:"primary"},on:{click:function(t){return e.editRow(a)}}}),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.deleteShow,expression:"deleteShow"}],attrs:{icon:"el-icon-delete",size:"mini",title:"删除",type:"danger"},on:{click:function(t){return e.deleteRow(a)}}}),t("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(t){return e.syncRow(a)}}},[e._v(" 同步 ")])]:1==e.tableIconType?[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.editRow(a)}}},[e._v(" 编辑 ")]),0==a.status?t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.deleteShow,expression:"deleteShow"}],attrs:{size:"small",type:"danger"},on:{click:function(t){return e.deleteRow(a)}}},[e._v(" 删除 ")]):e._e(),0==a.status?t("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(t){return e.syncRow(a)}}},[e._v(" 同步 ")]):e._e()]:2==e.tableIconType?[t("el-button",{attrs:{icon:"el-icon-edit",size:"mini",type:"primary"},on:{click:function(t){return e.editRow(a)}}},[e._v(" 编辑 ")]),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.deleteShow,expression:"deleteShow"}],attrs:{icon:"el-icon-delete",size:"mini",title:"",type:"danger"},on:{click:function(t){return e.deleteRow(a)}}},[e._v(" 删除 ")]),t("el-button",{attrs:{icon:"el-icon-refresh",size:"small",type:"warning"},on:{click:function(t){return e.syncRow(a)}}},[e._v(" 同步 ")])]:e._e()]}}])})],2),t("el-pagination",{staticClass:"mt-10 text-r",attrs:{background:"","current-page":e.currentPage,layout:"total, prev, pager, next, jumper","page-size":e.pageSize,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"current-change":e.queryInfo}}),t("el-dialog",{attrs:{"close-on-click-modal":!1,"custom-class":"add-dialog","lock-scroll":!0,title:e.modalTitle,top:"20vh",visible:e.addDialogVisible,width:e.formLayout.width},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.closeAddDialog}},[t("el-form",{ref:"formDataDom",attrs:{"label-position":"left","label-width":"120px",model:e.formData,rules:e.formRules}},e._l(e.tableColumnsBySpan,(function(a,r){return t("el-row",{key:r},e._l(a,(function(a){return t("el-col",{key:a.prop,attrs:{span:e.colspan}},[t("el-form-item",{style:e.formStyle[a.prop]||e.tableFormStyle[a.prop],attrs:{label:a.label+("money"==a.type?"(万)":""),prop:a.prop}},["text"==a.type?t("el-input",{attrs:{disabled:a.disabled},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[column.prop]"}}):"money"==a.type?t("el-input",{staticClass:"moneyinput",on:{input:t=>{e.numberInput(t,a.prop+"_UNIT")}},scopedSlots:e._u([{key:"suffix",fn:function(){return[t("span",[e._v(e._s(e.getUnit(e.formData[a.prop+"_UNIT"])))])]},proxy:!0}],null,!0),model:{value:e.formData[a.prop+"_UNIT"],callback:function(t){e.$set(e.formData,a.prop+"_UNIT",t)},expression:"formData[column.prop + '_UNIT']"}}):"number"==a.type?t("el-input",{on:{input:t=>{e.numberInput(t,a.prop)}},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[column.prop]"}}):0==a.type.indexOf("date")?t("el-date-picker",{attrs:{align:"right",disabled:a.disabled,placeholder:"选择日期时间",placement:"bottom-end",type:a.type},on:{change:t=>{e.timeChange(t,a.prop)}},model:{value:e.formData[a.prop+"_TEMP"],callback:function(t){e.$set(e.formData,a.prop+"_TEMP",t)},expression:"formData[column.prop + '_TEMP']"}}):"select"==a.type?t("el-select",{attrs:{disabled:a.disabled,placeholder:"请选择"},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[column.prop]"}},e._l(a.data,(function(e){return t("el-option",{key:e.id,attrs:{label:e.label,value:e.id}})})),1):0==a.type.indexOf("file")?t("el-upload",{directives:[{name:"loading",rawName:"v-loading",value:e.uploadloading,expression:"uploadloading"}],ref:"upload",refInFor:!0,staticClass:"mt-10",attrs:{action:e.uploadUrl,"auto-upload":!0,"before-upload":t=>e.beforeUpload(t,a.prop),drag:"","element-loading-spinner":"el-icon-loading","element-loading-text":"文件上传中","file-list":e.fileList[a.prop],headers:{Authorization:"Bearer "+e.$store.state.user.token},limit:9,"list-type":"filePicture"==a.type?"picture-card":"text","on-change":(t,r)=>{e.changeUploadImg(t,r,a.prop)},"on-exceed":(t,r)=>{e.exceed(t,r,a.prop)},"on-preview":t=>{e.handleFilePreview(t,a.prop)},"on-remove":(t,r)=>{e.handleRemove(t,r,a.prop)},"on-success":(t,r,o)=>{e.uploadSuccess(t,r,o,a.prop)}},scopedSlots:e._u([{key:"tip",fn:function(){return[t("div",{staticClass:"el-upload__tip"},[e._v(" "+e._s(a.data.tip||"只能上传jpg/png文件，且不超过10M")+" ")])]},proxy:!0}],null,!0)},[t("i",{staticClass:"el-icon-upload"}),t("div",{staticClass:"el-upload__text"},[e._v(" 将文件拖到此处，或 "),t("em",[e._v("点击上传")])])]):"switch"==a.type?t("el-switch",{attrs:{"active-text":a.data&&a.data.active?a.data.active:"","active-value":!a.data||"undefined"==typeof a.data.activeValue||a.data.activeValue,"inactive-text":a.data&&a.data.inactive?a.data.inactive:"","inactive-value":!(!a.data||"undefined"==typeof a.data.inactiveValue)&&a.data.inactiveValue},on:{change:t=>{e.switchChange(t,a.prop)}},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[column.prop]"}}):e._e()],1)],1)})),1)})),1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.formSubmit}},[e._v("确 定")])],1)],1)],1)},o=[],i=a("bad7");const l="http://192.168.3.10:3182/service/sao";var n={filters:{},props:{tableColumns:{type:Array,default:function(){return[]}},tabs:{type:Array,default:function(){return[]}},api:{type:Object,default:function(){return{}}},tabKeyword:{type:String,default:"type"},searchKeyword:{type:String,default:"name"},searchPlaceholder:{type:String,default:"请输入查询关键字"},modalTitles:{type:Object,default:function(){return{add:"新增内容",edit:"编辑内容"}}},showTabName:{type:Boolean,default:!1},cascaderFilter:{type:Array,default:function(){return[]}},cascaderValue:{type:Array,default:function(){return[]}},searchShow:{type:Boolean,default:!0},sort:{type:String,default:"createdTime,DESC"},appendQueryParams:{type:Object,default:function(){return{}}},cascaderKeyword:{type:String,default:"cascader"},addShow:{type:Boolean,default:!0},deleteShow:{type:Boolean,default:!0},invalidParams:{type:Array,default:function(){return[]}},searchSelects:{type:Array,default:function(){return[]}},searchMultiple:{type:Array,default:function(){return[]}},expandTable:{type:Object,default:function(){return{show:!1,rowLen:10}}},tableFormStyle:{type:Object,default:function(){return{}}},searchButtonShow:{type:Boolean,default:!0},formLayout:{type:Object,default:function(){return{colspan:2,width:"850px"}}},tableIconType:{type:Number,default:1}},data(){return{searchText:"",searchMultipleKeyword:"",queryForm:{},listData:[],currentPage:1,pageSize:10,total:1,queryLoading:!1,addDialogVisible:!1,editDialogVisible:!1,initForm:{},formData:{},formRules:{},isAdd:!0,modalTitle:"",statusActiveName:"ALL",uploadUrl:l+"/files/upload/all",uploadloading:!1,fileList:{},formStyle:{},secondaryCollegesOptions:[]}},computed:{tableColumnsByTwo(){for(var e=[],t=this.tableColumns,a=0;a<t.length;a+=2)e.push(t.slice(a,a+2));return e},tableColumnsBySpan(){for(var e=[],t=this.formLayout.colspan,a=this.tableColumns.filter(e=>!e.formHidden),r=0;r<a.length;r+=t)e.push(a.slice(r,r+t));return e},tableColumnsShow(){var e=this.tableColumns.filter(e=>!e.tableHidden);return e},cascaderValueLocal(){return this.cascaderValue},searchSelectsFilter(){var e=this.searchSelects;return e},colspan(){return Math.floor(24/this.formLayout.colspan)}},mounted(){console.log("init column",this.tableColumns),this.init()},methods:{init(){this.formDataInit(),this.queryInfo()},formDataInit(){var e={},t={},a={};this.tableColumns.forEach(r=>{e[r.prop]="undefined"==typeof r.value?"":r.value,0==r.type.indexOf("date")&&(e[r.prop+"_TEMP"]=""),0==r.type.indexOf("file")&&(a[r.prop]=[]),r.isRequired&&(t[r.prop]=[{required:!0,message:"请输入"+r.label,trigger:"blur"}],r.validate&&t[r.prop].push(r.validate))}),this.initForm=e,this.fileList=a,this.formRules=t,this.tabs.length>0&&"ALL"!=this.tabs[0].name&&(this.statusActiveName=this.tabs[0].name,this.queryForm[this.tabKeyword]=this.statusActiveName),this.searchShow?this.queryForm[this.searchKeyword]="":delete this.queryForm[this.searchKeyword],this.cascaderValueLocal.length>0&&(this.queryForm[this.cascaderKeyword]=this.cascaderValueLocal[this.cascaderValueLocal.length-1]),this.searchSelects.length>0&&this.searchSelects.forEach(e=>{this.queryForm[e.prop]=e.value}),this.searchMultiple.length>0&&(this.searchMultipleKeyword=this.searchKeyword)},searchClick(){this.currentPage=1,this.searchMultiple.length>0?(this.searchMultiple.forEach(e=>{var t=e.id;this.queryForm[t]&&delete this.queryForm[t]}),this.queryForm[this.searchMultipleKeyword]=this.searchText):this.queryForm[this.searchKeyword]=this.searchText,this.queryInfo()},chooseStatusTab(){this.queryForm[this.tabKeyword]=this.statusActiveName,"ALL"===this.statusActiveName&&delete this.queryForm[this.tabKeyword],this.queryInfo()},queryInfo(){const e={...this.queryForm,...this.appendQueryParams,page:this.currentPage-1,size:this.pageSize,sort:this.sort};this.queryLoading=!0,this.api.getList(e).then(e=>{var t=this.tableColumns;e.content.forEach(e=>{for(let a in e){for(let r=0;r<t.length;r++)t[r].filter&&!e[t[r].prop+"_FILTER"]&&(e[t[r].prop+"_FILTER"]=t[r].filter(e)),t[r].getVal&&!e[t[r].prop]&&(e[t[r].prop]=t[r].getVal(e)),0===t[r].type.indexOf("date")&&(t[r].prop!=a||e[a+"_TEMP"]||(e[a+"_TEMP"]=new Date(e[a]))),"money"==t[r].type&&(t[r].prop!=a||e[a+"_UNIT"]||(e[a+"_UNIT"]=e[a]?Number(e[a])/1e4:""));e[a]instanceof Object&&!(e[a]instanceof Date)&&e[a].key&&(e[a+"_OBJECT"]=e[a],e[a]=e[a].key)}}),this.queryLoading=!1,this.listData=e.content,this.total=e.totalElements,console.log(this.listData)}).catch(e=>{console.log("query Error",e),this.queryLoading=!1,this.$message.error(e.toString()||e.error)})},getDateStr(e){var t=e.getFullYear(),a=e.getMonth()+1,r=e.getDate(),o=e.getHours(),i=e.getMinutes(),l=e.getSeconds(),n=t+"-"+(a<10?"0"+a:a)+"-"+(r<10?"0"+r:r)+" "+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)+":"+(l<10?"0"+l:l);return n},getCurrTabLabel(){var e="";return this.tabs.forEach(t=>{t.name==this.statusActiveName&&(e=t.label)}),e},addClick(){this.isAdd=!0,this.formData=JSON.parse(JSON.stringify(this.initForm)),this.modalTitle=this.modalTitles.add+(this.showTabName?" ["+this.getCurrTabLabel()+"]":""),this.addDialogVisible=!0,console.log("addClick",this.formData)},async editRow(e){await this.editPrevOperation(e),this.serverLoading=!0,this.isAdd=!1,this.addDialogVisible=!0;var t=JSON.parse(JSON.stringify(e)),a=this.tableColumns;a.forEach(e=>{if("file"==e.type){if(t[e.prop]){var a=t[e.prop];this.fileList[e.prop]=a.map(e=>({fileId:e.fileId,name:e.remark,url:this.getSaoFileUrl(e.fileId)}))}else this.fileList[e.prop]=[];this.fileListToForm(e.prop)}}),this.formData=t,this.$nextTick(()=>{this.serverLoading=!1,this.modalTitle=this.modalTitles.edit+(this.showTabName?" ["+this.getCurrTabLabel()+"]":"")})},editPrevOperation(e){return new Promise((t,a)=>{e.status&&1==e.status?this.api.judgeData(e.id).then(()=>{t()},e=>{if(e.includes("ID")){const a=e.split("=")[1];this.$confirm(e+", 该操作将从同步记录表中撤销该条数据, 是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Object(i["a"])(a).then(()=>{t()})})}}):t()})},deleteRow(e){this.$confirm("该操作将删除此条记录，是否继续？","提示",{type:"warning",confirmButtonText:"确定",cancelButtonText:"取消"}).then(()=>{this.api.deleteData(e.id).then(e=>{this.$message.success("删除成功"),this.queryInfo()}).catch(e=>{this.$message.error(e.toString()||e)})}).catch(()=>{})},formSubmit(){this.$refs["formDataDom"].validate(e=>{if(e){var t=JSON.parse(JSON.stringify(this.formData));for(var a in t)if(/.*(Vo|_FILTER|_TEMP|_OBJECT)$/.test(a)&&delete t[a],-1!==this.invalidParams.indexOf(a)&&delete t[a],/.*(_UNIT)$/.test(a)){var r=a.split("_")[0];t[r]=1e4*t[a],delete t[a]}this.isAdd?this.api.addData(t).then(e=>{this.$message.success("添加成功~"),this.addDialogVisible=!1,this.queryInfo(),this.resetForm()}).catch(e=>{this.$message.error(e.toString()||e.error)}):this.api.editData(t.id,t).then(e=>{this.$message.success("编辑成功~"),this.addDialogVisible=!1,this.queryInfo(),this.resetForm()}).catch(e=>{this.$message.error(e.toString()||e.error)})}else this.$message.error("请按要求填写~")})},closeAddDialog(){this.$refs["formDataDom"].resetFields()},resetForm(){this.fileList={},this.formData={},this.formStyle={}},timeChange(e,t){this.formData[t]=this.$dayjs(e).format("YYYY-MM-DD HH:mm:ss")},beforeUpload(e,t){var a=this.tableColumns.find(e=>e.prop==t),r=a.data.maxSize||10;if(e.size>1024*r*1024)return this.$message.warning("文件大小不超过"+r+"M"),!1;this.uploadloading=!0},uploading(e,t,a,r){},uploadSuccess(e,t,a,r){this.uploadloading=!1,this.fileList[r].push({fileId:e,name:t.name,url:this.getSaoFileUrl(e)}),this.fileListToForm(r),console.log("uploadSuccess",t,a,this.fileList)},fileListToForm(e){this.formData[e]=this.fileList[e].map(e=>({fileId:e.fileId,remark:e.name,type:"FILE"}))},uploadError(e,t,a,r){this.$message.error("上传失败"),this.$refs.upload.clearFiles(),this.uploadloading=!1},changeUploadImg(e,t,a){t.length>9&&(t.splice(0,9),this.$message.warning("最多上传9张图片"))},exceed(e,t,a){this.$message.error("最多上传9张图片哦!")},getSaoFileUrl(e){return l+"/files/"+e+"/download"},handlePictureCardPreview(e){this.dialogImageUrl=e.url,this.previewDialogVisible=!0},handlePicturePreview(e){this.dialogImageUrl=e,this.previewDialogVisible=!0},handleFilePreview(e){window.location.href=e.url},handleRemove(e,t,a){var r=null;this.fileList[a].forEach((t,a)=>{e.fileId==t.fileId&&(r=a)}),null!==r&&(this.fileList[a].splice(r,1),this.fileListToForm(a))},handleCascaderChange(e){console.log("value, selectedData",e);var t=e[e.length-1];this.queryForm[this.cascaderKeyword]=t,this.queryInfo()},switchChange(e,t){var a=this.tableColumns.find(e=>e.prop==t);if(a&&a.change){var r=a.change(e);if("object"==typeof r){if(r.formData)for(let e in r.formData)this.formData[e]=r.formData[e];if(r.formStyle)for(let e in r.formStyle)this.formStyle[e]=r.formStyle[e]}}},getUnit(e){if(""==e||null==e)return"";var t="";return"number"!=typeof e&&(e=Number(e)),0<=e&&e<10?t="万":10<=e&&e<100?t="十万":100<=e&&e<1e3?t="百万":1e3<=e&&e<1e4?t="千万":1e4<=e&&e<1e5?t="亿":1e5<=e&&e<1e6&&(t="十亿"),t},toTenthousand(e){return Math.round(e/1e4*100)/100},numberInput(e,t){e+="";var a=e.replace(/[^0-9]/g,"");this.formData[t]=a},syncRow(e){let t=e.id;this.api.syncData(t).then(e=>{this.$message.success("同步成功"),this.queryInfo()})}}},s=n,c=(a("e014"),a("2877")),u=Object(c["a"])(s,r,o,!1,null,"e512638e",null);t["a"]=u.exports},"65b3":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"g",(function(){return l})),a.d(t,"h",(function(){return s})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return u})),a.d(t,"f",(function(){return d})),a.d(t,"i",(function(){return h})),a.d(t,"d",(function(){return f})),a.d(t,"e",(function(){return m}));var r=a("b775");const o="/cms";function i(e){return Object(r["a"])({url:o+"/dict",method:"post",data:e})}function l(e){const t={};return Object.keys(e).forEach(a=>{null!==e[a]&&""!==e[a]&&(t[a]=e[a])}),Object(r["a"])({url:o+"/dict/page",method:"get",params:t})}function n(e){const t={};return e&&Object.keys(e).forEach(a=>{null!==e[a]&&""!==e[a]&&(t[a]=e[a])}),Object(r["a"])({url:o+"/dict/list",method:"get",params:t})}function s(e,t){return Object(r["a"])({url:`${o}/dict/${e}`,method:"put",data:t})}function c(e){return Object(r["a"])({url:`${o}/dict/${e}`,method:"delete"})}function u(e){return Object(r["a"])({url:o+"/dict_config",method:"post",data:e})}function d(e){const t={};return Object.keys(e).forEach(a=>{null!==e[a]&&""!==e[a]&&(t[a]=e[a])}),Object(r["a"])({url:o+"/dict_config/page",method:"get",params:t})}function p(e){const t={};return e&&Object.keys(e).forEach(a=>{null!==e[a]&&""!==e[a]&&(t[a]=e[a])}),Object(r["a"])({url:o+"/dict_config/list",method:"get",params:t})}function h(e,t){return Object(r["a"])({url:`${o}/dict_config/${e}`,method:"put",data:t})}function f(e){return Object(r["a"])({url:`${o}/dict_config/${e}`,method:"delete"})}function m(e){return new Promise((t,a)=>{n({code:e}).then(e=>e?p({dataDictId:e[0].id}):"").then(e=>{if(e){const a=e.map(e=>({label:e.name,value:e.code}));t(a)}else a("error")}).catch(e=>{a("error")})})}},b07a:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("d936");const r=e=>("date"!=e.type||e.filter||(e.filter=t=>t[e.prop]?t[e.prop].substr(0,10):""),Object.assign({},{label:"",width:"",prop:"",type:"text",value:"",isRequired:!1,data:null,validate:null,filter:null,tableProp:null,getVal:null,disabled:!1,slot:null,isMoney:!1,formHidden:!1,tableHidden:!1},e)),o=e=>{var t=e.map(e=>r(e));return t}},b116:function(e,t,a){},bad7:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l}));var r=a("b775");const o="/cms";function i(e){const t={};return Object.keys(e).forEach(a=>{null!==e[a]&&""!==e[a]&&(t[a]=e[a])}),Object(r["a"])({url:o+"/syn/page",method:"get",params:t})}function l(e){return Object(r["a"])({url:`${o}/syn/revoke/${e}`,method:"delete"})}},d936:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"h",(function(){return p})),a.d(t,"b",(function(){return h})),a.d(t,"i",(function(){return f})),a.d(t,"g",(function(){return m}));var r=a("b775"),o=a("4360"),i=a("cc33");const l="/cms";function n(){return Object(r["a"])({url:"/orion/districts/list",method:"GET"})}async function s(){const e=o["a"].getters["user/schoolId"];let t=Object(i["a"])();if(t)o["a"].commit("user/setSchoolId",t.id);else{if(e)try{const t=await d(e);Object(i["e"])(JSON.stringify(t))}catch(a){console.log(a)}t=Object(i["a"])()}return t?{odsXygkjcsjId:t.id,xxjgdm:t.xxjgdm,xxjgmc:t.xxjgmc}:null}function c(e){return Object(r["a"])({url:l+"/xygkjcsj",method:"post",data:e})}function u(e){const t={};return e&&Object.keys(e).forEach(a=>{null!==e[a]&&""!==e[a]&&(t[a]=e[a])}),Object(r["a"])({url:l+"/xygkjcsj/list",method:"get",params:t})}function d(e){return Object(r["a"])({url:`${l}/xygkjcsj/${e}`,method:"get"})}function p(e,t){return Object(r["a"])({url:`${l}/xygkjcsj/${e}`,method:"put",data:t})}function h(e){return Object(r["a"])({url:`${l}/xygkjcsj/${e}`,method:"delete"})}const f=e=>Object(r["a"])({url:`${l}/xygkjcsj/syn/${e}`,method:"get"}),m=e=>Object(r["a"])({url:`${l}/xygkjcsj/edit/${e}`,method:"get"})},e014:function(e,t,a){"use strict";a("b116")},ed08:function(e,t,a){"use strict";function r(e){let t={},a=[];return e.forEach(e=>{e.label=e.name,e.value=e.code,t[e.id]=e}),e.forEach(e=>{"PROVINCE"!==e.type?("children"in t[e.parentId]||(t[e.parentId].children=[]),t[e.parentId].children.push(e)):a.push(e)}),a}function o(e,t,a){let r="";return t&&t.data&&t.data[a]&&t.data[a].forEach(t=>{t.value==e[a]&&(r=t.label)}),r}function i(e){let t="";return t=0==e.status?'<span style="display: inline-block;color:#ffba00; border: 1px solid #faecd8; background-color: #fdf6ec; padding: 2px 10px;">未同步</span>':'<span style="display: inline-block;color:#42d885; border: 1px solid #e1f3d8; background-color: #f0f9eb; padding: 2px 10px;">已同步</span>',t}a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"f",(function(){return l})),a.d(t,"b",(function(){return n})),a.d(t,"d",(function(){return s}));const l=[{value:"0",label:"否"},{value:"1",label:"是"}],n=e=>{const t=l.filter(t=>t.value===e);return t.length?t[0].label:""};function s(e,t,a,r){let o=[];if(t&&t.data&&t.data[a]){let i=[];e[r]&&(i=e[r].split("||")),i.forEach(e=>{t.data[a].forEach(t=>{t.value==e&&o.push(t.label)})})}return o.join("、")}}}]);