// ==UserScript==
// @name         知道
// @namespace    知道
// @version      0.1
// @description  获取知道URL,仅限学习交流
// @author       1169637675
// @match        *://zhidao.baidu.com*
// @match       *://zhidao.baidu.com/question/*.html*
// @match       *://zhidao.baidu.com/question/*
// @grant        none
// ==/UserScript==

(function() {





/**classname获取其他属性值*/
//获取iframe中的元素
function gettrueurl(obj){
var urlid = obj.contentDocument.getElementsByClassName("ikqb_insertvideo")
var idzhenshi = urlid[0].id  //获取id名字
var zhenshiid = obj.contentDocument.getElementById(idzhenshi)  //获取id对象
var zsmid = zhenshiid.dataset.mid   //得到id
//拼接字符串
var trueurl = 'https://ggkkmuup9wuugp6ep8d.exp.bcevod.com/'+zsmid+'/'+zsmid+'.mp4'
console.log(trueurl)

}
//--------------------------------------------------------------------------------------------------------
/**获取classname的text值*/
//获取iframe中的元素
    //开始
var obj = document.getElementById("ueditor_0")
//状态对象
var zhuanmastatus=""
//定时对象
var settimeobj=null;
//状态文本
var zhuangtaitext=""

var getclassnametextzhidao = function(){
let obj = document.getElementById("ueditor_0")
//获取状态对象
zhuanmastatus=obj.contentDocument.documentElement.getElementsByClassName("insertvideo_progress_status")
//获取状态文本
    try{
        zhuangtaitext = zhuanmastatus[0].innerText

    }catch(error){
        console.log("innerText发生错误了")
    }
    console.log('zhuangtaitext'+zhuangtaitext)

var zttext1 = "转码完成"
var zttext2 = "视频转码中"
if(zhuangtaitext==zttext1||zhuangtaitext==zttext2){
    //销毁定时计划
    console.log("监测状态完成，销毁定时计划")
    clearInterval(settimeobj)
    //去获取真实链接
    gettrueurl(obj)
}else{
console.log("继续监测")
	}
}
//定时执行
settimeobj = setInterval(getclassnametextzhidao,1000);

//结束----------------------------------------
   //---
})();
