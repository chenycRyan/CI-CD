/*!
 *  build: HuiBo-Admin 
 *   time: 2022-12-1 15:17:30
 */
(window["webpackJsonp_huibo"]=window["webpackJsonp_huibo"]||[]).push([["chunk-2d20884e"],{a4af:function(e,l,p){"use strict";p.r(l);var a,r,t=p("dd1a"),o={mixins:[t["a"]],data(){return{apiUrl:"/cms/odsgzxkpksj",modalTitles:{add:"新增排课",edit:"编辑排课"},columns:[{label:"专业所属院系部",prop:"zyssyxb"},{label:"专业名称",prop:"zymc"},{label:"专业代码",prop:"zydm"},{label:"年级",prop:"nj"},{label:"班级",prop:"bj"},{label:"学年",prop:"xn"},{label:"学期",prop:"xq"},{label:"周次",prop:"zc"},{label:"星期几",prop:"xqj"},{label:"上课节次",prop:"skjc"},{label:"上课日期",prop:"skrq",type:"date"},{label:"课程名称",prop:"kcmc"},{label:"课程代码",prop:"kcdm",isRequired:!0},{label:"教工号",prop:"jgh",isRequired:!0},{label:"教学场地上课起始周",prop:"jxcdskqsz"},{label:"教学班人数",prop:"jxbrs"},{label:"上课时间",prop:"sksj",type:"time"},{label:"上课地点",prop:"skdd"},{label:"实到学生人数",prop:"sdxsrs",type:"number"},{label:"教师到课情况",prop:"jsdkqk",type:"switch",value:"0",data:{active:"正常",inactive:"异常",activeValue:"1",inactiveValue:"0"},filter(e){return"1"==e.jxtj?"正常":"异常"}},{label:"课堂互动情况",prop:"kthdqk"},{label:"巡课人",prop:"xkr"},{label:"教学条件",prop:"jxtj",type:"switch",value:"0",data:{active:"正常",inactive:"异常",activeValue:"1",inactiveValue:"0"},filter(e){return"1"==e.jxtj?"正常":"异常"}},{label:"异常说明",prop:"ycsm"},{label:"数据采集时间",prop:"sjcjsj",type:"datetime"}],columnDicts:[{prop:"kthdqk",code:"kthdqkdm"}],searchKeyword:"zymc",searchPlaceholder:"请输入专业名称查询"}}},s=o,b=p("2877"),c=Object(b["a"])(s,a,r,!1,null,null,null);l["default"]=c.exports}}]);