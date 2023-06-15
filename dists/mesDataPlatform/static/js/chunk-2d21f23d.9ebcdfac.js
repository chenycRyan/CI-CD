/*!
 *  build: HuiBo-Admin 
 *   time: 2022-12-1 15:17:30
 */
(window["webpackJsonp_huibo"]=window["webpackJsonp_huibo"]||[]).push([["chunk-2d21f23d"],{d90b:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"school-container"},[e("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"升学",name:"first"}},["first"===t.activeName?e("Shengxue"):t._e()],1),e("el-tab-pane",{attrs:{label:"就业",name:"second"}},["second"===t.activeName?e("Jiuye"):t._e()],1),e("el-tab-pane",{attrs:{label:"未就业",name:"third"}},["third"===t.activeName?e("Unemployed"):t._e()],1)],1)],1)},o=[],s=function(){var t=this,e=t._self._c;return t.curSchool?e("div",[e("QueryForm",{attrs:{data:t.queryFormData,form:t.queryForm},on:{add:t.handleAdd,search:t.searchFun}}),e("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.tableParams.activeName,callback:function(e){t.$set(t.tableParams,"activeName",e)},expression:"tableParams.activeName"}},[e("el-tab-pane",{attrs:{label:"未同步",name:"notSync"}}),e("el-tab-pane",{attrs:{label:"已同步",name:"sync"}})],1),e("DisplayTable",{attrs:{column:t.tableColumn,data:t.tableData,options:t.options,"table-params":t.tableParams},on:{delete:t.handleDelete,edit:t.handleEdit,search:t.searchFun,sync:t.syncData}}),e("Dialog",{ref:"editableDialogRef",attrs:{data:t.formData,"dialog-form":t.dialogForm,form:t.infoForm},on:{close:t.handleClose,submit:t.handleSubmit}})],1):t._e()},n=[],r=l("5d9c"),c=l("3f7a"),i=l("5f9b"),p=l("e8b7"),m=l("65b3"),u=l("61f7"),y=l("ed08");const d=[{type:"text",prop:"xxjgdm",label:"学校机构代码",disabled:!0,slot:!0,show:function(t){return t.xygkjcsjVo&&t.xygkjcsjVo.xxjgdm||""}},{type:"text",prop:"xxjgmc",label:"学校机构名称",disabled:!0,slot:!0,show:function(t){return t.xygkjcsjVo&&t.xygkjcsjVo.xxjgmc||""}},{type:"text",prop:"xh",label:"学生学号"},{type:"text",prop:"xm",label:"学生姓名"},{type:"select",prop:"xslx",label:"学生类型",options:[],slot:!0,show:function(t,e){return Object(y["c"])(t,e,"xslx")}},{prop:"status",label:"同步状态",slot:"html",show:function(t){return Object(y["e"])(t)}},{type:"text",prop:"zymc",label:"专业名称"},{type:"text",prop:"bjmc",label:"班级名称"},{type:"text",prop:"sfzh",label:"身份证号"},{type:"select",prop:"sxqd",label:"升学渠道",options:[],slot:!0,show:function(t,e){return Object(y["c"])(t,e,"sxqd")}},{type:"text",prop:"xxmc",label:"学校名称"},{type:"text",prop:"lqzy",label:"录取专业"},{type:"text",prop:"fs",label:"分数"},{type:"select",prop:"sxcc",label:"升学层次",options:[],slot:!0,show:function(t,e){return Object(y["c"])(t,e,"sxcc")}},{type:"select",prop:"sxlx",label:"硕士类型",options:[],slot:!0,show:function(t,e){return Object(y["c"])(t,e,"sxlx")}}],x={xxjgdm:null,xxjgmc:null,xh:null,xm:null,xslx:null,zymc:null,bjmc:null,sfzh:null,sxqd:null,xxmc:null,lqzy:null,fs:null,sxcc:null,sxlx:null,status:0},b=[{type:"text",prop:"xxjgdm",label:"学校机构代码",disabled:!0,slot:!0,show:function(t){return t.xygkjcsjVo&&t.xygkjcsjVo.xxjgdm||""}},{type:"text",prop:"xxjgmc",label:"学校机构名称",disabled:!0,slot:!0,show:function(t){return t.xygkjcsjVo&&t.xygkjcsjVo.xxjgmc||""}},{type:"text",prop:"xh",label:"学生学号"},{type:"text",prop:"xm",label:"学生姓名"},{type:"text",prop:"zymc",label:"专业名称"},{prop:"status",label:"同步状态",slot:"html",show:function(t){return Object(y["e"])(t)}},{type:"text",prop:"bjmc",label:"班级名称"},{type:"text",prop:"sfzh",label:"身份证号"},{type:"select",prop:"sfxqhzdw",label:"就业单位是否校企合作单位",options:y["f"],slot:!0,show:function(t){return Object(y["b"])(t["sfxqhzdw"])}},{type:"text",prop:"jydwmc",label:"就业单位名称"},{type:"select",prop:"jydwhy",label:"就业单位行业",options:[],slot:!0,show:function(t,e){return Object(y["c"])(t,e,"jydwhy")}},{type:"select",prop:"jydwxz",label:"就业单位性质",options:[],slot:!0,show:function(t,e){return Object(y["c"])(t,e,"jydwxz")}},{type:"select",prop:"jydwgm",label:"就业单位规模",options:[],slot:!0,show:function(t,e){return Object(y["c"])(t,e,"jydwgm")}},{type:"cascader",prop:"address",label:"就业单位地址",options:[],slot:!0,show:function(t){let e="";return t.jyqysmc&&(e+=t.jyqysmc),t.jyqyshimc&&(e+=t.jyqyshimc),e}},{type:"text",prop:"qxx",label:"起薪线（元）"},{type:"select",prop:"sfdk",label:"是否对口",options:y["f"],slot:!0,show:function(t){return Object(y["b"])(t["sfdk"])}},{type:"dateYmd",prop:"jyrq",label:"就业日期"},{type:"select",prop:"zzcy",label:"是否自主创业",options:y["f"],slot:!0,show:function(t){return Object(y["b"])(t["zzcy"])}},{type:"text",prop:"cyxmmc",label:"创业项目名称"},{type:"select",prop:"lhjy",label:"是否灵活就业",options:y["f"],slot:!0,show:function(t){return Object(y["b"])(t["lhjy"])}},{type:"text",prop:"gznr",label:"工作内容"}],h={xxjgdm:null,xxjgmc:null,address:null,xh:null,xm:null,zymc:null,bjmc:null,sfzh:null,sfxqhzdw:null,jydwmc:null,jydwhy:null,jydwxz:null,jydwgm:null,qxx:null,sfdk:null,jyqysjg:null,jyqysmc:null,jyqyshijg:null,jyqyshimc:null,jyrq:null,zzcy:null,cyxmmc:null,lhjy:null,gznr:null,status:0},j=[{type:"text",prop:"xxjgdm",label:"学校机构代码",disabled:!0,slot:!0,show:function(t){return t.xygkjcsjVo&&t.xygkjcsjVo.xxjgdm||""}},{type:"text",prop:"xxjgmc",label:"学校机构名称",disabled:!0,slot:!0,show:function(t){return t.xygkjcsjVo&&t.xygkjcsjVo.xxjgmc||""}},{type:"text",prop:"xh",label:"学生学号"},{type:"text",prop:"xm",label:"学生姓名"},{type:"text",prop:"zymc",label:"专业名称"},{type:"text",prop:"bjmc",label:"班级名称"},{type:"text",prop:"sfzh",label:"身份证号"},{type:"select",prop:"wjylx",label:"未就业类型",options:[],slot:!0,show:function(t,e){return Object(y["c"])(t,e,"wjylx")}},{prop:"status",label:"同步状态",slot:"html",show:function(t){return Object(y["e"])(t)}}],g={xxjgdm:null,xxjgmc:null,xh:null,xm:null,zymc:null,bjmc:null,sfzh:null,wjylx:null,status:0};var f={components:{Dialog:c["a"],DisplayTable:i["a"],QueryForm:p["a"]},mixins:[r["a"]],data(){return{apiUrl:"/cms/gzbyqxsxsj",options:{key:["xslx","sxqd","sxcc","sxlx"],data:{xslx:[],sxqd:[],sxcc:[],sxlx:[]}},dialogForm:{show:!1,title:"",staticTitle:"升学",btnLoading:!1,width:"850px",rowClass:"two-column",formLabelWidth:"100px",initForm:x,rules:{xh:{required:!0,message:"请输入学号",trigger:"blur"},xm:{required:!0,message:"请输入姓名",trigger:"blur"},sfzh:[u["b"]]}},queryForm:{xh:null,xm:null,xxjgdm:null},queryFormData:[{type:"text",prop:"xh",label:"学生学号"},{type:"text",prop:"xm",label:"学生姓名"}],tableData:[],infoForm:{...x},tableColumn:d,tableParams:{loading:!1,expand:!0,colLen:6,total:0,activeName:"notSync"}}},methods:{getOPtions(){this.options.key.forEach(t=>{let e=t+"dm";"xslx"===t&&(e="gzxslxdm"),Object(m["e"])(e).then(e=>{this.options.data[t]=e,this.tableColumn.forEach(l=>{if(l.prop==t)return l.options=e,!1})}).catch(t=>{console.log(t)})})},editRow(t){this.infoForm=Object.assign({},t),this.dialogForm.show=!0,this.dialogForm.title="编辑升学情况"}}},w=f,q=l("2877"),F=Object(q["a"])(w,s,n,!1,null,"7e91a7aa",null),z=F.exports,D=function(){var t=this,e=t._self._c;return t.curSchool?e("div",[e("QueryForm",{attrs:{data:t.queryFormData,form:t.queryForm},on:{add:t.handleAdd,search:t.searchFun}}),e("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.tableParams.activeName,callback:function(e){t.$set(t.tableParams,"activeName",e)},expression:"tableParams.activeName"}},[e("el-tab-pane",{attrs:{label:"未同步",name:"notSync"}}),e("el-tab-pane",{attrs:{label:"已同步",name:"sync"}})],1),e("DisplayTable",{attrs:{column:t.tableColumn,data:t.tableData,options:t.options,"table-params":t.tableParams},on:{delete:t.handleDelete,edit:t.handleEdit,search:t.searchFun,sync:t.syncData}}),e("Dialog",{ref:"editableDialogRef",attrs:{data:t.formData,"dialog-form":t.dialogForm,form:t.infoForm},on:{close:t.handleClose,submit:t.handleSubmit}})],1):t._e()},k=[],v=l("d936"),O={components:{Dialog:c["a"],DisplayTable:i["a"],QueryForm:p["a"]},mixins:[r["a"]],data(){return{apiUrl:"/cms/gzbyqxjysj",options:{key:["jydwhy","jydwxz","jydwgm"],data:{jydwhy:[],jydwxz:[],jydwgm:[]}},dialogForm:{show:!1,title:"",staticTitle:"就业",btnLoading:!1,width:"80%",rowClass:"",initForm:h,rules:{xh:{required:!0,message:"请输入学号",trigger:"blur"},xm:{required:!0,message:"请输入姓名",trigger:"blur"},sfzh:[u["b"]]},treeData:[],getAreaCode:(t,e)=>{let l={jyqysjg:null,jyqysmc:null,jyqyshijg:null,jyqyshimc:null};return t&&t.length&&t.forEach((t,a)=>{const o=e.filter(e=>e.code===t);0==a?(l.jyqysmc=o[0].name,l.jyqysjg=o[0].code):1==a&&(l.jyqyshimc=o[0].name,l.jyqyshijg=o[0].code)}),l}},queryForm:{xh:null,xm:null,xxjgdm:null},queryFormData:[{type:"text",prop:"xh",label:"学生学号"},{type:"text",prop:"xm",label:"学生姓名"}],tableData:[],infoForm:{...h},tableColumn:b,tableParams:{loading:!1,expand:!0,colLen:6,total:0,activeName:"notSync"}}},methods:{getOPtions(){this.options.key.forEach(t=>{let e=t+"dm";"jydwhy"===t?e="jyhydm":"jydwxz"===t&&(e="dwxzdm"),Object(m["e"])(e).then(e=>{this.options.data[t]=e,this.tableColumn.forEach(l=>{if(l.prop==t)return l.options=e,!1})}).catch(t=>{console.log(t)})})},getAddress(){Object(v["c"])().then(t=>{if(t&&t.length){const e=t.filter(t=>"COUNTY"!==t.type);this.dialogForm.treeData=e;const l=Object(y["a"])(e);this.tableColumn[13].options=l}})},editRow(t){const e=[];t.jyqysjg&&(e.push(Number(t.jyqysjg)),t.jyqyshijg&&e.push(Number(t.jyqyshijg))),this.infoForm=Object.assign({},t,{address:e}),this.dialogForm.show=!0,this.dialogForm.title="编辑就业"}}},C=O,N=Object(q["a"])(C,D,k,!1,null,"03376f9e",null),P=N.exports,_=function(){var t=this,e=t._self._c;return t.curSchool?e("div",[e("QueryForm",{attrs:{data:t.queryFormData,form:t.queryForm},on:{add:t.handleAdd,search:t.searchFun}}),e("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.tableParams.activeName,callback:function(e){t.$set(t.tableParams,"activeName",e)},expression:"tableParams.activeName"}},[e("el-tab-pane",{attrs:{label:"未同步",name:"notSync"}}),e("el-tab-pane",{attrs:{label:"已同步",name:"sync"}})],1),e("DisplayTable",{attrs:{column:t.tableColumn,data:t.tableData,options:t.options,"table-params":t.tableParams},on:{delete:t.handleDelete,edit:t.handleEdit,search:t.searchFun,sync:t.syncData}}),e("Dialog",{ref:"editableDialogRef",attrs:{data:t.formData,"dialog-form":t.dialogForm,form:t.infoForm},on:{close:t.handleClose,submit:t.handleSubmit}})],1):t._e()},S=[],V={components:{Dialog:c["a"],DisplayTable:i["a"],QueryForm:p["a"]},mixins:[r["a"]],data(){return{apiUrl:"/cms/gzbyqxwjysj",options:{key:["wjylx"],data:{wjylx:[]}},dialogForm:{show:!1,title:"未就业",staticTitle:"未就业",btnLoading:!1,width:"600px",formLabelWidth:"100px",rowClass:"column",initForm:g,rules:{xh:{required:!0,message:"请输入学号",trigger:"blur"},xm:{required:!0,message:"请输入姓名",trigger:"blur"},sfzh:[u["b"]]}},queryForm:{xh:null,xm:null,xxjgdm:null},queryFormData:[{type:"text",prop:"xh",label:"学生学号"},{type:"text",prop:"xm",label:"学生姓名"}],tableData:[],infoForm:{...g},tableColumn:j,tableParams:{loading:!1,expand:!1,colLen:0,total:0,activeName:"notSync"}}},methods:{getOPtions(){this.options.key.forEach(t=>{const e=t+"dm";Object(m["e"])(e).then(e=>{this.options.data[t]=e,this.tableColumn.forEach(l=>{if(l.prop==t)return l.options=e,!1})}).catch(t=>{console.log(t)})})},editRow(t){this.infoForm=Object.assign({},t),this.dialogForm.show=!0,this.dialogForm.title="编辑未就业"}}},E=V,T=Object(q["a"])(E,_,S,!1,null,"1f3a9110",null),L=T.exports,Q={components:{Shengxue:z,Jiuye:P,Unemployed:L},data(){return{activeName:"first"}}},R=Q,U=Object(q["a"])(R,a,o,!1,null,"15ba8900",null);e["default"]=U.exports}}]);