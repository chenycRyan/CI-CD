/*!
 *  build: HuiBo-Admin 
 *   time: 2022-9-14 17:23:05
 */
(window["webpackJsonp_huibo"]=window["webpackJsonp_huibo"]||[]).push([["chunk-196d192c"],{"29c0":function(t,e,a){"use strict";a("f91d")},"3f7a":function(t,e,a){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",[e("el-dialog",{attrs:{"before-close":t.handleClose,"close-on-click-modal":!1,title:t.dialogForm.title,visible:t.dialogForm.show,width:t.dialogForm.width}},[e("el-form",{ref:"infoFormRef",attrs:{model:t.infoForm,rules:t.rules}},t._l(t.formData,(function(a,o){return e("el-row",{key:o,staticClass:"row-item",class:t.dialogForm.rowClass},t._l(a,(function(a){return e("el-form-item",{key:a.prop,staticClass:"query-form-item",attrs:{label:a.label,"label-width":t.formLabelWidth,prop:a.prop}},[-1!=t.inputTypes.indexOf(a.type)?e("el-input",{attrs:{autocomplete:"off",disabled:a.disabled||!1,type:a.type},model:{value:t.infoForm[a.prop],callback:function(e){t.$set(t.infoForm,a.prop,e)},expression:"infoForm[item.prop]"}}):a.type in t.dateTypes?e("el-date-picker",{staticClass:"date-picker",attrs:{align:"right",format:t.dateTypes[a.type].format,placeholder:"请选择",placement:"bottom-end",type:t.dateTypes[a.type].type,"value-format":t.dateTypes[a.type].valueFormat},model:{value:t.infoForm[a.prop],callback:function(e){t.$set(t.infoForm,a.prop,e)},expression:"infoForm[item.prop]"}}):a.type in t.selectTypes?e("el-select",{attrs:{multiple:t.selectTypes[a.type].multiple,placeholder:"请选择"},model:{value:t.infoForm[a.prop],callback:function(e){t.$set(t.infoForm,a.prop,e)},expression:"infoForm[item.prop]"}},t._l(a.options,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1):"cascader"==a.type?e("el-cascader",{ref:"cascaderRef",refInFor:!0,staticClass:"form-cascader",attrs:{clearable:"",options:a.options,props:{checkStrictly:!0}},on:{change:t.handleCascaderChange},model:{value:t.infoForm[a.prop],callback:function(e){t.$set(t.infoForm,a.prop,e)},expression:"infoForm[item.prop]"}}):t._e()],1)})),1)})),1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),e("el-button",{attrs:{loading:t.dialogForm.btnLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v(" 确 定 ")])],1)],1)],1)},r=[],n={props:{dialogForm:{type:Object,default:()=>{}},data:{type:Array,default:()=>[]},form:{type:Object,default:()=>{}}},data(){return{inputTypes:["text","number","textarea"],dateTypes:{dateYm:{type:"month",format:"yyyy 年 MM 月",valueFormat:"yyyy-MM"},dateYmd:{type:"date",format:"yyyy 年 MM 月 dd 日",valueFormat:"yyyy-MM-dd"},dateYmdh:{type:"datetime",format:"yyyy-MM-dd HH",valueFormat:"yyyy-MM-dd HH"}},selectTypes:{select:{multiple:!1},selectM:{multiple:!0}},formLabelWidth:this.dialogForm.formLabelWidth||"140px",infoForm:this.form||{},formData:this.data||[],rules:this.dialogForm.rules||{}}},watch:{form:{handler(t){this.infoForm=t},immediate:!0},data:{handler(t){this.formData=t},immediate:!0}},mounted(){},methods:{handleCascaderChange(t){const e=this.dialogForm.getAreaCode(t,this.dialogForm.treeData);this.infoForm={...this.infoForm,...e}},handleClose(){this.resetForm(),this.$emit("close")},handleSubmit(){this.$refs["infoFormRef"].validate(t=>{if(!t)return console.log("error submit!!"),!1;this.dialogForm.callback&&this.dialogForm.callback(this.infoForm),this.$emit("submit",this.infoForm)})},resetForm(){this.infoForm={...this.dialogForm.initForm},this.$refs["infoFormRef"].resetFields()}}},i=n,s=(a("29c0"),a("2877")),l=Object(s["a"])(i,o,r,!1,null,"45148a6a",null);e["a"]=l.exports},"5d45":function(t,e,a){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"detail-info"},t._l(t.rows,(function(a,o){return e("div",{key:o,staticClass:"row-item"},[e("div",{staticClass:"label"},[t._v(t._s(a.label))]),e("div",{staticClass:"prop"},[t._v(" "+t._s(a.slot?a.show(t.item,t.options):t.item[a.prop])+" ")])])})),0)},r=[],n={props:{rows:{type:Array,default:()=>[]},item:{type:Object,default:()=>{}},options:{type:Object,default:()=>{}}},data(){return{}},mounted(){},methods:{}},i=n,s=(a("f3e0"),a("2877")),l=Object(s["a"])(i,o,r,!1,null,"032c258f",null);e["a"]=l.exports},"5d9c":function(t,e,a){"use strict";var o=a("b775");const r=t=>{const e=t,a=t=>{const a={};return Object.keys(t).forEach(e=>{null!==t[e]&&""!==t[e]&&(a[e]=t[e])}),Object(o["a"])({url:e+"/page",method:"get",params:a})},r=t=>{const a={};return t&&Object.keys(t).forEach(e=>{null!==t[e]&&""!==t[e]&&(a[e]=t[e])}),Object(o["a"])({url:e+"/list",method:"get",params:a})},n=t=>Object(o["a"])({url:`${e}/${t}`,method:"get"}),i=t=>Object(o["a"])({url:""+e,method:"post",data:t}),s=t=>Object(o["a"])({url:`${e}/edit/${t}`,method:"get"}),l=(t,a)=>Object(o["a"])({url:`${e}/${t}`,method:"put",data:a}),c=t=>Object(o["a"])({url:`${e}/${t}`,method:"delete"}),d=t=>Object(o["a"])({url:`${e}/syn/${t}`,method:"get"});return{getByPage:a,addData:i,editData:l,deleteById:c,getByList:r,getById:n,syncById:d,judgeEditById:s}};var n=a("bad7"),i=a("d936");e["a"]={data(){return{curSchool:null,pageOptions:{size:10,page:0,sort:"createdTime,DESC"}}},watch:{"$store.state.user.schoolId":{handler(t){this.initFun()}}},mounted(){this.initFun()},computed:{api(){return r(this.apiUrl)},formData(){let t=[];const e=this.tableColumn.filter(t=>null!=t.type||void 0!=t.type);return"column"==this.dialogForm.rowClass?t.push(e):t="two-column"==this.dialogForm.rowClass?this.generateRow(e,2):this.generateRow(e,3),t}},methods:{async initFun(){const t=await Object(i["d"])();this.curSchool=t,t?(this.getOPtions&&this.getOPtions(),this.getAddress&&this.getAddress(),this.dialogForm.initForm={...this.dialogForm.initForm,...t},this.infoForm={...this.infoForm,...t},this.queryForm.xxjgdm=t.xxjgdm,this.getList()):(this.tableData=[],this.$message({type:"warning",message:"无相关学校，请先注册或选中相关学校！",duration:0,showClose:!0}))},generateRow(t,e){let a=[],o=0;while(o<t.length)a.push(t.slice(o,o+=e));return a},searchFun(t){t&&(this.pageOptions={...this.pageOptions,...t}),this.getList()},getList(){this.tableParams.loading=!0;const t="notSync"==this.tableParams.activeName?0:1,e={...this.queryForm,...this.pageOptions,status:t};this.api.getByPage(e).then(t=>{t&&(this.tableData=t.content,this.tableParams.total=t.totalElements)}).finally(()=>{this.tableParams.loading=!1})},handleAdd(){this.dialogForm.show=!0,this.dialogForm.title="新增"+this.dialogForm.staticTitle},handleDelete(t){this.api.deleteById(t.id).then(()=>{this.$message.success("删除成功!"),this.getList()}).catch(()=>{this.$message.info("已取消")})},handleEdit(t){this.api.getById(t.id).then(t=>{const e=t;e.xygkjcsjVo&&(e.xxjgdm=e.xygkjcsjVo.xxjgdm,e.xxjgmc=e.xygkjcsjVo.xxjgmc,e.odsXygkjcsjId=e.xygkjcsjVo.id),1==e.status?this.api.judgeEditById(e.id).then(()=>{this.editRow(e)},t=>{if(t.includes("ID")){const a=t.split("=")[1];this.$confirm(t+", 该操作将从同步记录表中撤销该条数据, 是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.revokeRow(a).then(t=>{t&&this.editRow(e)})})}}):this.editRow(e)})},handleClick(){this.pageOptions.page=0,this.getList()},handleClose(){this.getList(),this.dialogForm.show=!1},handleSubmit(t){this.dialogForm.btnLoading=!0;let e=this.dialogForm.title.includes("新增")?this.api.addData(t):this.api.editData(t.id,t);e.then(()=>{this.$refs["editableDialogRef"].resetForm(),this.handleClose(),this.$message.success(this.dialogForm.title+"成功")}).finally(()=>{this.dialogForm.btnLoading=!1})},syncData(t){this.api.syncById(t).then(t=>{this.$message.success("同步成功"),this.getList()})},revokeRow(t){return Object(n["a"])(t).then(()=>Promise.resolve(!0))}}}},"5f9b":function(t,e,a){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableParams.loading,expression:"tableParams.loading"}],attrs:{border:"",data:t.tableData}},[t.tableParams.expand?e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("OtherInfo",{attrs:{item:a.row,options:t.options,rows:t.rows}})]}}],null,!1,2955201016)}):t._e(),e("el-table-column",{attrs:{label:"序号",type:"index",width:"50"}}),t._l(t.column.slice(0,t.tableParams.expand?t.tableParams.colLen:t.column.length),(function(a){return[a.slot?e("el-table-column",{key:a.prop,attrs:{label:a.label,width:a.width||""},scopedSlots:t._u([{key:"default",fn:function(o){return["html"==a.slot?e("div",{domProps:{innerHTML:t._s(a.show(o.row,t.options))}}):e("div",[t._v(" "+t._s(a.show(o.row,t.options))+" ")])]}}],null,!0)}):e("el-table-column",{key:a.prop+"1",attrs:{label:a.label,prop:a.prop}})]})),e("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.editRow(a)}}},[t._v(" 编辑 ")]),"notSync"==t.tableParams.activeName?e("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.deleteRow(a)}}},[t._v(" 删除 ")]):t._e(),"notSync"==t.tableParams.activeName?e("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(e){return t.syncRow(a)}}},[t._v(" 同步 ")]):t._e()]}}])})],2),t.tableData.length?e("el-pagination",{attrs:{"current-page":t.currentPage,layout:"total, sizes, prev, pager, next, jumper","page-size":t.pageSize,total:t.tableParams.total},on:{"current-change":t.tableChange,"size-change":t.sizeChange}}):t._e()],1)},r=[],n=a("5d45"),i={components:{OtherInfo:n["a"]},props:{data:{type:Array,default:()=>[]},column:{type:Array,default:()=>[]},tableParams:{type:Object,default:()=>{}},options:{type:Object,default:()=>{}}},data(){return{tableData:this.data||[],currentPage:1,pageSize:10}},computed:{rows:function(){if(this.tableParams.expand){const t=this.tableColumns.slice(this.tableParams.colLen);return t}return[]}},watch:{data:{handler(t){this.tableData=t},immediate:!0},column:{handler(t){this.tableColumns=t},immediate:!0}},mounted(){},methods:{editRow(t){this.$emit("edit",t)},deleteRow(t){this.$confirm("该操作将删除该条数据, 是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$emit("delete",t)})},syncRow(t){this.$emit("sync",t.id)},tableChange(t){this.currentPage=t,this.$emit("search",{page:this.currentPage-1,size:this.pageSize})},sizeChange(t){this.currentPage=1,this.pageSize=t,this.$emit("search",{page:this.currentPage-1,size:this.pageSize})}}},s=i,l=a("2877"),c=Object(l["a"])(s,o,r,!1,null,"669fb358",null);e["a"]=c.exports},"65b3":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"g",(function(){return i})),a.d(e,"h",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return d})),a.d(e,"f",(function(){return u})),a.d(e,"i",(function(){return h})),a.d(e,"d",(function(){return p})),a.d(e,"e",(function(){return f}));var o=a("b775");const r="/cms";function n(t){return Object(o["a"])({url:r+"/dict",method:"post",data:t})}function i(t){const e={};return Object.keys(t).forEach(a=>{null!==t[a]&&""!==t[a]&&(e[a]=t[a])}),Object(o["a"])({url:r+"/dict/page",method:"get",params:e})}function s(t){const e={};return t&&Object.keys(t).forEach(a=>{null!==t[a]&&""!==t[a]&&(e[a]=t[a])}),Object(o["a"])({url:r+"/dict/list",method:"get",params:e})}function l(t,e){return Object(o["a"])({url:`${r}/dict/${t}`,method:"put",data:e})}function c(t){return Object(o["a"])({url:`${r}/dict/${t}`,method:"delete"})}function d(t){return Object(o["a"])({url:r+"/dict_config",method:"post",data:t})}function u(t){const e={};return Object.keys(t).forEach(a=>{null!==t[a]&&""!==t[a]&&(e[a]=t[a])}),Object(o["a"])({url:r+"/dict_config/page",method:"get",params:e})}function m(t){const e={};return t&&Object.keys(t).forEach(a=>{null!==t[a]&&""!==t[a]&&(e[a]=t[a])}),Object(o["a"])({url:r+"/dict_config/list",method:"get",params:e})}function h(t,e){return Object(o["a"])({url:`${r}/dict_config/${t}`,method:"put",data:e})}function p(t){return Object(o["a"])({url:`${r}/dict_config/${t}`,method:"delete"})}function f(t){return new Promise((e,a)=>{s({code:t}).then(t=>t?m({dataDictId:t[0].id}):"").then(t=>{if(t){const a=t.map(t=>({label:t.name,value:t.code}));e(a)}else a("error")}).catch(t=>{a("error")})})}},bad7:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return i}));var o=a("b775");const r="/cms";function n(t){const e={};return Object.keys(t).forEach(a=>{null!==t[a]&&""!==t[a]&&(e[a]=t[a])}),Object(o["a"])({url:r+"/syn/page",method:"get",params:e})}function i(t){return Object(o["a"])({url:`${r}/syn/revoke/${t}`,method:"delete"})}},d936:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return l})),a.d(e,"a",(function(){return c})),a.d(e,"f",(function(){return d})),a.d(e,"e",(function(){return u})),a.d(e,"h",(function(){return m})),a.d(e,"b",(function(){return h})),a.d(e,"i",(function(){return p})),a.d(e,"g",(function(){return f}));var o=a("b775"),r=a("4360"),n=a("cc33");const i="/cms";function s(){return Object(o["a"])({url:"/orion/districts/list",method:"GET"})}async function l(){const t=r["a"].getters["user/schoolId"];let e=Object(n["a"])();if(e)r["a"].commit("user/setSchoolId",e.id);else{if(t)try{const e=await u(t);Object(n["e"])(JSON.stringify(e))}catch(a){console.log(a)}e=Object(n["a"])()}return e?{odsXygkjcsjId:e.id,xxjgdm:e.xxjgdm,xxjgmc:e.xxjgmc}:null}function c(t){return Object(o["a"])({url:i+"/xygkjcsj",method:"post",data:t})}function d(t){const e={};return t&&Object.keys(t).forEach(a=>{null!==t[a]&&""!==t[a]&&(e[a]=t[a])}),Object(o["a"])({url:i+"/xygkjcsj/list",method:"get",params:e})}function u(t){return Object(o["a"])({url:`${i}/xygkjcsj/${t}`,method:"get"})}function m(t,e){return Object(o["a"])({url:`${i}/xygkjcsj/${t}`,method:"put",data:e})}function h(t){return Object(o["a"])({url:`${i}/xygkjcsj/${t}`,method:"delete"})}const p=t=>Object(o["a"])({url:`${i}/xygkjcsj/syn/${t}`,method:"get"}),f=t=>Object(o["a"])({url:`${i}/xygkjcsj/edit/${t}`,method:"get"})},e8b7:function(t,e,a){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",[e("el-form",{attrs:{inline:!0,model:t.queryForm}},[t._l(t.data,(function(a){return e("el-form-item",{key:a.prop,staticClass:"query-form-item",attrs:{"label-width":t.formLabelWidth}},["text"==a.type?e("el-input",{attrs:{autocomplete:"off",clearable:"",placeholder:"请输入"+a.label},model:{value:t.queryForm[a.prop],callback:function(e){t.$set(t.queryForm,a.prop,e)},expression:"queryForm[item.prop]"}}):"select"==a.type?e("el-select",{attrs:{clearable:"",placeholder:"请选择"+a.label},model:{value:t.queryForm[a.prop],callback:function(e){t.$set(t.queryForm,a.prop,e)},expression:"queryForm[item.prop]"}},t._l(a.options,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1):t._e()],1)})),e("el-form-item",[e("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:t.search}},[t._v(" 搜索 ")]),e("el-button",{attrs:{icon:"el-icon-plus",type:"success"},on:{click:t.handleAdd}},[t._v(" 新增 ")])],1)],2)],1)},r=[],n={props:{data:{type:Array,default:()=>[]},form:{type:Object,default:()=>{}}},data(){return{formLabelWidth:"110px",queryForm:this.form||{}}},mounted(){},methods:{search(){this.$emit("search",{...this.queryForm,page:0})},handleAdd(){this.$emit("add")}}},i=n,s=a("2877"),l=Object(s["a"])(i,o,r,!1,null,"391d3ac0",null);e["a"]=l.exports},ecfc:function(t,e,a){},ed08:function(t,e,a){"use strict";function o(t){let e={},a=[];return t.forEach(t=>{t.label=t.name,t.value=t.code,e[t.id]=t}),t.forEach(t=>{"PROVINCE"!==t.type?("children"in e[t.parentId]||(e[t.parentId].children=[]),e[t.parentId].children.push(t)):a.push(t)}),a}function r(t,e,a){let o="";return e&&e.data&&e.data[a]&&e.data[a].forEach(e=>{e.value==t[a]&&(o=e.label)}),o}function n(t){let e="";return e=0==t.status?'<span style="display: inline-block;color:#ffba00; border: 1px solid #faecd8; background-color: #fdf6ec; padding: 2px 10px;">未同步</span>':'<span style="display: inline-block;color:#42d885; border: 1px solid #e1f3d8; background-color: #f0f9eb; padding: 2px 10px;">已同步</span>',e}a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"e",(function(){return n})),a.d(e,"f",(function(){return i})),a.d(e,"b",(function(){return s})),a.d(e,"d",(function(){return l}));const i=[{value:"0",label:"否"},{value:"1",label:"是"}],s=t=>{const e=i.filter(e=>e.value===t);return e.length?e[0].label:""};function l(t,e,a,o){let r=[];if(e&&e.data&&e.data[a]){let n=[];t[o]&&(n=t[o].split("||")),n.forEach(t=>{e.data[a].forEach(e=>{e.value==t&&r.push(e.label)})})}return r.join("、")}},f3e0:function(t,e,a){"use strict";a("ecfc")},f91d:function(t,e,a){}}]);