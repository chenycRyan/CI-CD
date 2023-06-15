/*!
 *  build: HuiBo-Admin 
 *   time: 2022-9-14 17:23:05
 */
(window["webpackJsonp_huibo"]=window["webpackJsonp_huibo"]||[]).push([["chunk-44c92d02"],{"0322":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"data-container"},[e("el-card",{staticClass:"box-card data-title"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"custom-font"},[e("vab-icon",{attrs:{icon:"booklet-line"}}),t._v(" 字典类型 ")],1)]),e("div",{staticClass:"con"},[e("div",{staticClass:"operation"},[e("el-input",{staticClass:"query-input",attrs:{clearable:"",placeholder:"字典名称"},model:{value:t.keyInfo.name,callback:function(e){t.$set(t.keyInfo,"name",e)},expression:"keyInfo.name"}}),e("el-input",{staticClass:"query-input",attrs:{clearable:"",placeholder:"字典代码"},model:{value:t.keyInfo.code,callback:function(e){t.$set(t.keyInfo,"code",e)},expression:"keyInfo.code"}}),e("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:function(e){return t.searchOperation("key")}}},[t._v(" 搜索 ")]),e("el-button",{attrs:{icon:"el-icon-plus",type:"success"},on:{click:function(e){return t.handleAdd("key")}}},[t._v(" 新增 ")])],1),e("div",{staticClass:"table"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.keyInfo.loading,expression:"keyInfo.loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.keyInfo.tableData,"highlight-current-row":""},on:{"current-change":t.handleCurrentChange}},[e("el-table-column",{attrs:{label:"字典名称",prop:"name"}}),e("el-table-column",{attrs:{label:"字典代码",prop:"code"}}),e("el-table-column",{attrs:{align:"center",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{circle:"",icon:"el-icon-edit",size:"small",title:"编辑",type:"primary"},on:{click:function(e){return t.handleEdit(e,a.row,"key")}}}),e("el-button",{attrs:{circle:"",icon:"el-icon-delete",size:"small",title:"删除",type:"danger"},on:{click:function(e){return t.handleDelete(a.row,"key")}}})]}}])})],1),e("el-pagination",{attrs:{"current-page":t.keyInfo.page,layout:"total, sizes, pager, jumper","page-size":t.keyInfo.size,"page-sizes":[10,20,30],total:t.keyInfo.total},on:{"current-change":function(e){return t.keyTableChange(e,"key")},"size-change":function(e){return t.keyTableSizeChange(e,"key")}}})],1)])]),e("el-card",{staticClass:"box-card data-detail"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"custom-font"},[e("vab-icon",{attrs:{icon:"profile-line"}}),t._v(" 字典数据项 ")],1)]),e("div",{staticClass:"con"},[e("div",{staticClass:"operation"},[e("el-input",{staticClass:"query-input",attrs:{clearable:"",placeholder:"数据项名称"},model:{value:t.detailInfo.name,callback:function(e){t.$set(t.detailInfo,"name",e)},expression:"detailInfo.name"}}),e("el-input",{staticClass:"query-input",attrs:{clearable:"",placeholder:"数据项代码"},model:{value:t.detailInfo.code,callback:function(e){t.$set(t.detailInfo,"code",e)},expression:"detailInfo.code"}}),e("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:function(e){return t.searchOperation("detail")}}},[t._v(" 搜索 ")]),e("el-button",{attrs:{disabled:!t.curRow,icon:"el-icon-plus",type:"success"},on:{click:function(e){return t.handleAdd("detail")}}},[t._v(" 新增 ")])],1),e("div",{staticClass:"table"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.detailInfo.loading,expression:"detailInfo.loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.detailInfo.tableData}},[e("el-table-column",{attrs:{label:"数据项名称",prop:"name"}}),e("el-table-column",{attrs:{label:"数据项代码",prop:"code"}}),e("el-table-column",{attrs:{align:"center",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{circle:"",icon:"el-icon-edit",size:"small",type:"primary"},on:{click:function(e){return t.handleEdit(e,a.row,"detail")}}}),e("el-button",{attrs:{circle:"",icon:"el-icon-delete",size:"small",type:"danger"},on:{click:function(e){return t.handleDelete(a.row,"detail")}}})]}}])})],1),t.detailInfo.tableData.length?e("el-pagination",{attrs:{"current-page":t.detailInfo.page,layout:"total, sizes, pager, jumper","page-size":t.detailInfo.size,"page-sizes":[10,20,30],total:t.detailInfo.total},on:{"current-change":function(e){return t.keyTableChange(e,"detail")},"size-change":function(e){return t.keyTableSizeChange(e,"detail")}}}):t._e()],1)])]),e("el-dialog",{attrs:{title:t.keyInfo.title,visible:t.keyInfo.dialog,width:"500px"},on:{"update:visible":function(e){return t.$set(t.keyInfo,"dialog",e)}}},[e("el-form",{ref:"keyFormRef",attrs:{"label-width":"90px",model:t.keyForm,rules:t.rules}},[e("el-form-item",{attrs:{label:"字典名称",prop:"name"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.keyForm.name,callback:function(e){t.$set(t.keyForm,"name",e)},expression:"keyForm.name"}})],1),e("el-form-item",{attrs:{label:"字典代码",prop:"code"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.keyForm.code,callback:function(e){t.$set(t.keyForm,"code",e)},expression:"keyForm.code"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){return t.closeDialog("key")}}},[t._v("取 消")]),e("el-button",{attrs:{loading:t.btnLoading,type:"primary"},on:{click:t.submitKeyData}},[t._v(" 确 定 ")])],1)],1),e("el-dialog",{attrs:{title:t.detailInfo.title,visible:t.detailInfo.dialog,width:"500px"},on:{"update:visible":function(e){return t.$set(t.detailInfo,"dialog",e)}}},[e("span",{staticClass:"tag"},[t._v(" "+t._s(t.curRow&&t.curRow.name)+"-"+t._s(t.curRow&&t.curRow.code)+" ")]),e("el-form",{ref:"detailFormRef",attrs:{"label-width":"90px",model:t.detailForm,rules:t.rules}},[e("el-form-item",{attrs:{label:"数据项名称",prop:"name"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.detailForm.name,callback:function(e){t.$set(t.detailForm,"name",e)},expression:"detailForm.name"}})],1),e("el-form-item",{attrs:{label:"数据项代码",prop:"code"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.detailForm.code,callback:function(e){t.$set(t.detailForm,"code",e)},expression:"detailForm.code"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){return t.closeDialog("detail")}}},[t._v("取 消")]),e("el-button",{attrs:{loading:t.btnLoading,type:"primary"},on:{click:t.submitDetailData}},[t._v(" 确 定 ")])],1)],1)],1)},o=[],n=a("65b3"),l={data(){return{curRow:null,keyInfo:{name:"",code:"",title:"",tableData:[],page:1,size:10,total:0,loading:!1,dialog:!1},detailInfo:{name:"",code:"",title:"",tableData:[],page:1,size:10,total:0,loading:!1,dialog:!1},btnLoading:!1,keyForm:{name:"",code:""},detailForm:{name:"",code:""},rules:{name:{required:!0,message:"请输入名称",trigger:"blur"},code:{required:!0,message:"请输入代码",trigger:"blur"}}}},mounted(){this.getData()},methods:{getData(){this.curRow=null,this.detailInfo.tableData=[],this.keyInfo.loading=!0;const t={name:this.keyInfo.name,code:this.keyInfo.code,size:this.keyInfo.size,page:this.keyInfo.page-1,sort:"createdTime,DESC"};Object(n["g"])(t).then(t=>{t?(this.keyInfo.tableData=t.content,this.keyInfo.total=t.totalElements):(this.keyInfo.tableData=[],this.keyInfo.total=0)}).finally(()=>{this.keyInfo.loading=!1})},getDetailData(t){this.detailInfo.loading=!0;const e={name:this.detailInfo.name,code:this.detailInfo.code,size:this.detailInfo.size,page:this.detailInfo.page-1,dataDictId:t,sort:"createdTime,DESC"};Object(n["f"])(e).then(t=>{t?(this.detailInfo.tableData=t.content,this.detailInfo.total=t.totalElements):(this.detailInfo.tableData=[],this.detailInfo.total=0)}).finally(()=>{this.detailInfo.loading=!1})},searchOperation(t){"detail"===t?(this.detailInfo.page=1,this.getDetailData(this.curRow.id)):(this.keyInfo.page=1,this.getData())},submitKeyData(){this.$refs["keyFormRef"].validate(async t=>{if(t){this.btnLoading=!0;const t=Object.assign({},this.keyForm),e="新增字典类型"===this.keyInfo.title?Object(n["a"])(t):Object(n["h"])(t.id,t);e.then(()=>{this.closeDialog("key"),this.$message.success(this.keyInfo.title+"成功")}).finally(()=>{this.btnLoading=!1})}else this.btnLoading=!1})},submitDetailData(){this.$refs["detailFormRef"].validate(async t=>{if(t){this.btnLoading=!0;const t=Object.assign({},this.detailForm,{dataDictId:this.curRow.id});console.log(t);const e="新增字典数据项"===this.detailInfo.title?Object(n["b"])(t):Object(n["i"])(t.id,t);e.then(()=>{this.closeDialog("detail"),this.$message.success(this.detailInfo.title+"成功")}).finally(()=>{this.btnLoading=!1})}else this.btnLoading=!1})},closeDialog(t){"detail"===t?(this.detailForm=this.$options.data().detailForm,this.$refs["detailFormRef"].resetFields(),this.detailInfo.dialog=!1,this.getDetailData(this.curRow.id)):(this.keyForm=this.$options.data().keyForm,this.$refs["keyFormRef"].resetFields(),this.keyInfo.dialog=!1,this.getData())},handleAdd(t){"key"==t?(this.keyInfo.title="新增字典类型",this.keyInfo.dialog=!0):(this.detailInfo.title="新增字典数据项",this.detailInfo.dialog=!0)},handleEdit(t,e,a){t.stopPropagation(),console.log(e,a),"detail"===a?(this.detailForm=e,this.detailInfo.title="编辑字典数据项",this.detailInfo.dialog=!0):(this.keyForm=e,this.keyInfo.title="编辑字典类型",this.keyInfo.dialog=!0)},handleDelete(t,e){this.$confirm("该操作将删除此条数据, 是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{const a="detail"===e?Object(n["d"])(t.id):Object(n["c"])(t.id);a.then(t=>{this.$message.success("删除成功!"),"detail"===e?this.getDetailData(this.curRow.id):this.getData()}).catch(()=>{this.$message.info("已取消")})})},handleCurrentChange(t){console.log(t),t&&(this.curRow=t,this.getDetailData(t.id))},keyTableSizeChange(t,e){"key"==e?(this.keyInfo.size=t,this.getData()):(this.detailInfo.size=t,this.getDetailData(this.curRow.id))},keyTableChange(t,e){"key"==e?(this.keyInfo.page=t,this.getData()):(this.detailInfo.page=t,this.getDetailData(this.curRow.id))}}},s=l,r=(a("d169"),a("2877")),c=Object(r["a"])(s,i,o,!1,null,"c32bc0f0",null);e["default"]=c.exports},"65b3":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"g",(function(){return l})),a.d(e,"h",(function(){return r})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return d})),a.d(e,"f",(function(){return u})),a.d(e,"i",(function(){return h})),a.d(e,"d",(function(){return m})),a.d(e,"e",(function(){return g}));var i=a("b775");const o="/cms";function n(t){return Object(i["a"])({url:o+"/dict",method:"post",data:t})}function l(t){const e={};return Object.keys(t).forEach(a=>{null!==t[a]&&""!==t[a]&&(e[a]=t[a])}),Object(i["a"])({url:o+"/dict/page",method:"get",params:e})}function s(t){const e={};return t&&Object.keys(t).forEach(a=>{null!==t[a]&&""!==t[a]&&(e[a]=t[a])}),Object(i["a"])({url:o+"/dict/list",method:"get",params:e})}function r(t,e){return Object(i["a"])({url:`${o}/dict/${t}`,method:"put",data:e})}function c(t){return Object(i["a"])({url:`${o}/dict/${t}`,method:"delete"})}function d(t){return Object(i["a"])({url:o+"/dict_config",method:"post",data:t})}function u(t){const e={};return Object.keys(t).forEach(a=>{null!==t[a]&&""!==t[a]&&(e[a]=t[a])}),Object(i["a"])({url:o+"/dict_config/page",method:"get",params:e})}function f(t){const e={};return t&&Object.keys(t).forEach(a=>{null!==t[a]&&""!==t[a]&&(e[a]=t[a])}),Object(i["a"])({url:o+"/dict_config/list",method:"get",params:e})}function h(t,e){return Object(i["a"])({url:`${o}/dict_config/${t}`,method:"put",data:e})}function m(t){return Object(i["a"])({url:`${o}/dict_config/${t}`,method:"delete"})}function g(t){return new Promise((e,a)=>{s({code:t}).then(t=>t?f({dataDictId:t[0].id}):"").then(t=>{if(t){const a=t.map(t=>({label:t.name,value:t.code}));e(a)}else a("error")}).catch(t=>{a("error")})})}},b344:function(t,e,a){},d169:function(t,e,a){"use strict";a("b344")}}]);