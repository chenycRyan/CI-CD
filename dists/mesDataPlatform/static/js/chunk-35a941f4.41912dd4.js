/*!
 *  build: HuiBo-Admin 
 *   time: 2022-12-1 15:17:30
 */
(window["webpackJsonp_huibo"]=window["webpackJsonp_huibo"]||[]).push([["chunk-35a941f4"],{"235c":function(e,t,s){"use strict";s("fe81")},"9ed6":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-container"},[t("el-row",[t("el-col",{attrs:{lg:14,md:11,sm:24,xl:14,xs:24}},[t("div",{staticStyle:{color:"transparent"}},[e._v("占位符")])]),t("el-col",{attrs:{lg:9,md:12,sm:24,xl:9,xs:24}},[t("el-form",{ref:"form",staticClass:"login-form",attrs:{"label-position":"left",model:e.form,rules:e.rules}},[t("div",{staticClass:"title"}),t("div",{staticClass:"title-tips"},[e._v(" "+e._s(e.translateTitle("欢迎来到"))+e._s(e.title)+"！ ")]),t("el-form-item",{staticStyle:{"margin-top":"40px"},attrs:{prop:"userName"}},[t("el-input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{placeholder:e.translateTitle("请输入用户名"),tabindex:"1",type:"text"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("vab-icon",{attrs:{icon:"user-line"}})]},proxy:!0}]),model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName","string"===typeof t?t.trim():t)},expression:"form.userName"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{key:e.passwordType,ref:"password",attrs:{placeholder:e.translateTitle("请输入密码"),tabindex:"2",type:e.passwordType},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin.apply(null,arguments)}},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("vab-icon",{attrs:{icon:"lock-line"}})]},proxy:!0},"password"===e.passwordType?{key:"suffix",fn:function(){return[t("vab-icon",{staticClass:"show-password",attrs:{icon:"eye-off-line"},on:{click:e.handlePassword}})]},proxy:!0}:{key:"suffix",fn:function(){return[t("vab-icon",{staticClass:"show-password",attrs:{icon:"eye-line"},on:{click:e.handlePassword}})]},proxy:!0}],null,!0),model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),t("el-button",{staticClass:"login-btn mt-30",attrs:{loading:e.loading,type:"primary"},on:{click:e.handleLogin}},[e._v(" "+e._s(e.translateTitle("登录"))+" ")]),e._e()],1)],1),t("el-col",{attrs:{lg:1,md:1,sm:24,xl:1,xs:24}},[t("div",{staticStyle:{color:"transparent"}},[e._v("占位符")])])],1)],1)},i=[],a=(s("d9e2"),s("2f62")),o=s("79fa"),n=s("61f7"),l={name:"Login",directives:{focus:{inserted(e){e.querySelector("input").focus()}}},beforeRouteLeave(e,t,s){clearInterval(this.timer),s()},data(){const e=(e,t,s)=>{""===t?s(new Error(this.translateTitle("用户名不能为空"))):s()},t=(e,t,s)=>{Object(n["f"])(t)?s():s(new Error(this.translateTitle("密码不能少于6位")))};return{form:{userName:"",password:"",verificationCode:""},rules:{userName:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0,timer:0,codeUrl:"https://www.oschina.net/action/user/captcha",previewText:""}},computed:{...Object(a["c"])({title:"settings/title"})},watch:{$route:{handler(e){this.redirect=e.query&&e.query.redirect||"/"},immediate:!0}},mounted(){this.form.userName="",this.form.password=""},methods:{...Object(a["b"])({login:"user/login"}),translateTitle:o["a"],handlePassword(){"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(()=>{this.$refs.password.focus()})},handleRoute(){return"/404"===this.redirect||"/403"===this.redirect?"/":this.redirect},handleLogin(){this.$refs.form.validate(async e=>{if(e)try{this.loading=!0,await this.login(this.form).catch(()=>{}),await this.$router.push(this.handleRoute())}finally{this.loading=!1}})},changeCode(){this.codeUrl="https://www.oschina.net/action/user/captcha?timestamp="+(new Date).getTime()}}},c=l,d=(s("235c"),s("2877")),p=Object(d["a"])(c,r,i,!1,null,"5ccb4074",null);t["default"]=p.exports},fe81:function(e,t,s){}}]);