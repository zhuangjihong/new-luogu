// ==UserScript==
// @name         new luogu
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  洛谷扩展
// @author       volatile
// @match        https://*.luogu.com.cn/*
// @match        https://*.luogu.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=luogu.com.cn
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    //进入插件
    console.log("This is new luogu");

    //日历
    const today=new Date();
    const year=today.getFullYear();
    const month=String(today.getMonth()+1);
    const day=String(today.getDate());
    console.log(year);
    console.log(month);
    console.log(day);
    var date_html=`<h2>今天是 `+year+`-`+month+`-`+day+`</h2>`;
    if(month==1&&day==1){
        date_html+=`<h2>今天是元旦，新的一年，新的开始</h2>`;
    }
    else if(month==2&&day==29){
        date_html+=`<h2>今年是闰年</h2>`;
    }
    else if(month==4&&day==1){
        date_html+=`<h2>今天是愚人节</h2>`;
    }
    else if(month==5&&day==1){
        date_html+=`<h2>今天是劳动节</h2>`;
    }
    else if(month==6&&day==1){
        date_html+=`<h2>今天是儿童节</h2>`;
    }
    else if(month==9&&day==10){
        date_html+=`<h2>今天是教师节</h2>`;
    }
    else if(month==10&&day==1){
        date_html+=`<h2>今天是国庆节，七天小长假，启动！</h2>`
    }
    else if(month==12&&day==31){
        date_html+=`<h2>明年见</h2>`;
    }
    else if(month==4&&day==28){
        var years=year-2012;
        date_html+=`<h2>今天是作者生日的后 `+years+` 年</h2>`;
    }
    else{
        date_html+=`<h2>欢迎！</h2>`;
    }
    var date=document.createElement('div');
    date.className='lg-article';
    date.innerHTML=date_html;
    document.querySelector('div.lg-right > div:nth-child(1)').insertAdjacentElement('beforebegin', date);

    //更改用户名颜色
    var color=document.getElementsByClassName("lg-fg-green")[0];
    console.log(color);
    color.className="lg-fg-purple";

    //介绍
    var x=[{link:'https://github.com/zhuangjihong/new-luogu',text:'NEWLG'},];
    function add()
    {
        if(document.querySelectorAll('.link-container')[0]==undefined){
            setTimeout(function(){add()},50);
        }
        else{
            setTimeout(function(){for(var i in x){
                var a=document.createElement("a");document.querySelectorAll('.link-container')[0].append(a);
                a.outerHTML=
                '<a href=\"'+x[i].link+'\" target=\"_blank\" colorscheme=\"none\" class=\"header-link color-none\" style="vertical-align: middle;margin-right: 2em;color: #262626;text-decoration: none;">'+x[i].text+'</a>'
            ;}},100);
        }
    }
    add();
    // Your code here...
})();
