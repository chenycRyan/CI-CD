/*!
 *  build: HuiBo-Admin 
 *   time: 2022-12-1 15:17:30
 */
(window["webpackJsonp_huibo"]=window["webpackJsonp_huibo"]||[]).push([["chunk-2d2221c6"],{cce5:function(e,l,p){"use strict";p.r(l);var r,s,o=p("dd1a"),z={mixins:[o["a"]],data(){return{apiUrl:"/cms/odsgzzyqksj",modalTitles:{add:"新增专业",edit:"编辑专业"},columns:[{label:"专业所属院系部",prop:"zyssyxb"},{label:"专业名称",prop:"zymc"},{label:"专业代码",prop:"zydm"},{label:"所属专业群名称",prop:"sszyqmc"},{label:"所属专业群代码",prop:"sszyqdm"},{label:"批准设置日期",prop:"pzszrq",type:"month",filter:e=>e.pzszrq?e.pzszrq.substr(0,7):""},{label:"首次招生日期",prop:"sczsrq",type:"month",filter:e=>e.sczsrq?e.sczsrq.substr(0,7):""},{label:"专业层次",prop:"zycc"},{label:"学制",prop:"xz",type:"select",data:[{id:"three",label:"三年"},{id:"four",label:"四年"}],filter:e=>"three"==e.xz?"三年":"four"==e.xz?"四年":""},{label:"授予学位门类",prop:"syxwml"},{label:"是否重点专业",prop:"sfzdzy",type:"switch",value:"0"},{label:"重点专业级别",prop:"zdzyjb",isRequired:!0},{label:"重点专业类型",prop:"zdzylx",isRequired:!0},{label:"数据采集时间",prop:"sjcjsj",type:"datetime"}],columnDicts:[{prop:"zycc",code:"zyccdm"},{prop:"zdzyjb",code:"zdzyjbdm"},{prop:"zdzylx",code:"zdzylxdm"}],searchKeyword:"zymc",searchPlaceholder:"请输入专业名称查询"}}},a=z,d=p("2877"),c=Object(d["a"])(a,r,s,!1,null,null,null);l["default"]=c.exports}}]);