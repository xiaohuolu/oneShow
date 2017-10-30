/*
 * APICloud JavaScript Library
 * Copyright (c) 2014 apicloud.com
 */

 var baseUrl = 'http://test.hysenritz.com/NK_DataSystem';
 var statusUrl = 'http://test.hysenritz.com'
 var imageUrl = 'http://test.hysenritz.com/NK_DataSystem/image/showImage?id=';
 var undefinedUrl = 'http://test.hysenritz.com/students/images/main/kc002.jpg'
 //var baseUrl = 'http://test.hysenritz.com/NK_DataSystem';
 // var baseUrl = 'http://115.28.105.8';

 var head = document.getElementsByTagName('head')[0];
 var link = document.createElement('link');
 link.href = 'http://at.alicdn.com/t/font_414606_jjb4guti3sicc8fr.css';
 link.rel = 'stylesheet';
 link.type = 'text/css';
 head.appendChild(link);
 Date.prototype.Format = function (fmt) { //author: zxjsc
     var o = {
         "M+": this.getMonth() + 1, //月份
         "d+": this.getDate(), //日
         "h+": this.getHours(), //小时
         "m+": this.getMinutes(), //分
         "s+": this.getSeconds(), //秒
         "q+": Math.floor((this.getMonth() + 3) / 3), //季度
         "S": this.getMilliseconds() //毫秒
     };
     if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
     for (var k in o)
     if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
     return fmt;
 };
//解决iosactive 失效

if (navigator.appVersion == 'ios') {
  document.body.addEventListener('touchstart', function () { });
};


(function(window){
    var u = {};
    var isAndroid = (/android/gi).test(navigator.appVersion);
    var uzStorage = function(){
        var ls = window.localStorage;
        if(isAndroid){
           ls = os.localStorage();
        }
        return ls;
    };
    function parseArguments(url, data, fnSuc, dataType) {
        if (typeof(data) == 'function') {
            dataType = fnSuc;
            fnSuc = data;
            data = undefined;
        }
        if (typeof(fnSuc) != 'function') {
            dataType = fnSuc;
            fnSuc = undefined;
        }
        return {
            url: url,
            data: data,
            fnSuc: fnSuc,
            dataType: dataType
        };
    }
    u.trim = function(str){
        if(String.prototype.trim){
            return str == null ? "" : String.prototype.trim.call(str);
        }else{
            return str.replace(/(^\s*)|(\s*$)/g, "");
        }
    };
    u.trimAll = function(str){
        return str.replace(/\s*/g,'');
    };
    u.isElement = function(obj){
        return !!(obj && obj.nodeType == 1);
    };
    u.isArray = function(obj){
        if(Array.isArray){
            return Array.isArray(obj);
        }else{
            return obj instanceof Array;
        }
    };
    u.isEmptyObject = function(obj){
        if(JSON.stringify(obj) === '{}'){
            return true;
        }
        return false;
    };
    u.addEvt = function(el, name, fn, useCapture){
        if(!u.isElement(el)){
            console.warn('$api.addEvt Function need el param, el param must be DOM Element');
            return;
        }
        useCapture = useCapture || false;
        if(el.addEventListener) {
            el.addEventListener(name, fn, useCapture);
        }
    };
    u.rmEvt = function(el, name, fn, useCapture){
        if(!u.isElement(el)){
            console.warn('$api.rmEvt Function need el param, el param must be DOM Element');
            return;
        }
        useCapture = useCapture || false;
        if (el.removeEventListener) {
            el.removeEventListener(name, fn, useCapture);
        }
    };
    u.one = function(el, name, fn, useCapture){
        if(!u.isElement(el)){
            console.warn('$api.one Function need el param, el param must be DOM Element');
            return;
        }
        useCapture = useCapture || false;
        var that = this;
        var cb = function(){
            fn && fn();
            that.rmEvt(el, name, cb, useCapture);
        };
        that.addEvt(el, name, cb, useCapture);
    };
    u.dom = function(el, selector){
        if(arguments.length === 1 && typeof arguments[0] == 'string'){
            if(document.querySelector){
                return document.querySelector(arguments[0]);
            }
        }else if(arguments.length === 2){
            if(el.querySelector){
                return el.querySelector(selector);
            }
        }
    };
    u.domAll = function(el, selector){
        if(arguments.length === 1 && typeof arguments[0] == 'string'){
            if(document.querySelectorAll){
                return document.querySelectorAll(arguments[0]);
            }
        }else if(arguments.length === 2){
            if(el.querySelectorAll){
                return el.querySelectorAll(selector);
            }
        }
    };
    u.byId = function(id){
        return document.getElementById(id);
    };
    u.first = function(el, selector){
        if(arguments.length === 1){
            if(!u.isElement(el)){
                console.warn('$api.first Function need el param, el param must be DOM Element');
                return;
            }
            return el.children[0];
        }
        if(arguments.length === 2){
            return this.dom(el, selector+':first-child');
        }
    };
    u.last = function(el, selector){
        if(arguments.length === 1){
            if(!u.isElement(el)){
                console.warn('$api.last Function need el param, el param must be DOM Element');
                return;
            }
            var children = el.children;
            return children[children.length - 1];
        }
        if(arguments.length === 2){
            return this.dom(el, selector+':last-child');
        }
    };
    u.eq = function(el, index){
        return this.dom(el, ':nth-child('+ index +')');
    };
    u.not = function(el, selector){
        return this.domAll(el, ':not('+ selector +')');
    };
    u.prev = function(el){
        if(!u.isElement(el)){
            console.warn('$api.prev Function need el param, el param must be DOM Element');
            return;
        }
        var node = el.previousSibling;
        if(node.nodeType && node.nodeType === 3){
            node = node.previousSibling;
            return node;
        }
    };
    u.next = function(el){
        if(!u.isElement(el)){
            console.warn('$api.next Function need el param, el param must be DOM Element');
            return;
        }
        var node = el.nextSibling;
        if(node.nodeType && node.nodeType === 3){
            node = node.nextSibling;
            return node;
        }
    };
    u.closest = function(el, selector){
        if(!u.isElement(el)){
            console.warn('$api.closest Function need el param, el param must be DOM Element');
            return;
        }
        var doms, targetDom;
        var isSame = function(doms, el){
            var i = 0, len = doms.length;
            for(i; i<len; i++){
                if(doms[i].isEqualNode(el)){
                    return doms[i];
                }
            }
            return false;
        };
        var traversal = function(el, selector){
            doms = u.domAll(el.parentNode, selector);
            targetDom = isSame(doms, el);
            while(!targetDom){
                el = el.parentNode;
                if(el != null && el.nodeType == el.DOCUMENT_NODE){
                    return false;
                }
                traversal(el, selector);
            }

            return targetDom;
        };

        return traversal(el, selector);
    };
    u.contains = function(parent,el){
        var mark = false;
        if(el === parent){
            mark = true;
            return mark;
        }else{
            do{
                el = el.parentNode;
                if(el === parent){
                    mark = true;
                    return mark;
                }
            }while(el === document.body || el === document.documentElement);

            return mark;
        }

    };
    u.remove = function(el){
        if(el && el.parentNode){
            el.parentNode.removeChild(el);
        }
    };
    u.attr = function(el, name, value){
        if(!u.isElement(el)){
            console.warn('$api.attr Function need el param, el param must be DOM Element');
            return;
        }
        if(arguments.length == 2){
            return el.getAttribute(name);
        }else if(arguments.length == 3){
            el.setAttribute(name, value);
            return el;
        }
    };
    u.removeAttr = function(el, name){
        if(!u.isElement(el)){
            console.warn('$api.removeAttr Function need el param, el param must be DOM Element');
            return;
        }
        if(arguments.length === 2){
            el.removeAttribute(name);
        }
    };
    u.hasCls = function(el, cls){
        if(!u.isElement(el)){
            console.warn('$api.hasCls Function need el param, el param must be DOM Element');
            return;
        }
        if(el.className.indexOf(cls) > -1){
            return true;
        }else{
            return false;
        }
    };
    u.addCls = function(el, cls){
        if(!u.isElement(el)){
            console.warn('$api.addCls Function need el param, el param must be DOM Element');
            return;
        }
        if('classList' in el){
            el.classList.add(cls);
        }else{
            var preCls = el.className;
            var newCls = preCls +' '+ cls;
            el.className = newCls;
        }
        return el;
    };
    u.removeCls = function(el, cls){
        if(!u.isElement(el)){
            console.warn('$api.removeCls Function need el param, el param must be DOM Element');
            return;
        }
        if('classList' in el){
            el.classList.remove(cls);
        }else{
            var preCls = el.className;
            var newCls = preCls.replace(cls, '');
            el.className = newCls;
        }
        return el;
    };
    u.toggleCls = function(el, cls){
        if(!u.isElement(el)){
            console.warn('$api.toggleCls Function need el param, el param must be DOM Element');
            return;
        }
       if('classList' in el){
            el.classList.toggle(cls);
        }else{
            if(u.hasCls(el, cls)){
                u.removeCls(el, cls);
            }else{
                u.addCls(el, cls);
            }
        }
        return el;
    };
    u.val = function(el, val){
        if(!u.isElement(el)){
            console.warn('$api.val Function need el param, el param must be DOM Element');
            return;
        }
        if(arguments.length === 1){
            switch(el.tagName){
                case 'SELECT':
                    var value = el.options[el.selectedIndex].value;
                    return value;
                    break;
                case 'INPUT':
                    return el.value;
                    break;
                case 'TEXTAREA':
                    return el.value;
                    break;
            }
        }
        if(arguments.length === 2){
            switch(el.tagName){
                case 'SELECT':
                    el.options[el.selectedIndex].value = val;
                    return el;
                    break;
                case 'INPUT':
                    el.value = val;
                    return el;
                    break;
                case 'TEXTAREA':
                    el.value = val;
                    return el;
                    break;
            }
        }

    };
    u.prepend = function(el, html){
        if(!u.isElement(el)){
            console.warn('$api.prepend Function need el param, el param must be DOM Element');
            return;
        }
        el.insertAdjacentHTML('afterbegin', html);
        return el;
    };
    u.append = function(el, html){
        if(!u.isElement(el)){
            console.warn('$api.append Function need el param, el param must be DOM Element');
            return;
        }
        el.insertAdjacentHTML('beforeend', html);
        return el;
    };
    u.before = function(el, html){
        if(!u.isElement(el)){
            console.warn('$api.before Function need el param, el param must be DOM Element');
            return;
        }
        el.insertAdjacentHTML('beforebegin', html);
        return el;
    };
    u.after = function(el, html){
        if(!u.isElement(el)){
            console.warn('$api.after Function need el param, el param must be DOM Element');
            return;
        }
        el.insertAdjacentHTML('afterend', html);
        return el;
    };
    u.html = function(el, html){
        if(!u.isElement(el)){
            console.warn('$api.html Function need el param, el param must be DOM Element');
            return;
        }
        if(arguments.length === 1){
            return el.innerHTML;
        }else if(arguments.length === 2){
            el.innerHTML = html;
            return el;
        }
    };
    u.text = function(el, txt){
        if(!u.isElement(el)){
            console.warn('$api.text Function need el param, el param must be DOM Element');
            return;
        }
        if(arguments.length === 1){
            return el.textContent;
        }else if(arguments.length === 2){
            el.textContent = txt;
            return el;
        }
    };
    u.offset = function(el){
        if(!u.isElement(el)){
            console.warn('$api.offset Function need el param, el param must be DOM Element');
            return;
        }
        var sl = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
        var st = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

        var rect = el.getBoundingClientRect();
        return {
            l: rect.left + sl,
            t: rect.top + st,
            w: el.offsetWidth,
            h: el.offsetHeight
        };
    };
    u.css = function(el, css){
        if(!u.isElement(el)){
            console.warn('$api.css Function need el param, el param must be DOM Element');
            return;
        }
        if(typeof css == 'string' && css.indexOf(':') > 0){
            el.style && (el.style.cssText += ';' + css);
        }
    };
    u.cssVal = function(el, prop){
        if(!u.isElement(el)){
            console.warn('$api.cssVal Function need el param, el param must be DOM Element');
            return;
        }
        if(arguments.length === 2){
            var computedStyle = window.getComputedStyle(el, null);
            return computedStyle.getPropertyValue(prop);
        }
    };
    u.jsonToStr = function(json){
        if(typeof json === 'object'){
            return JSON && JSON.stringify(json);
        }
    };
    u.strToJson = function(str){
        if(typeof str === 'string'){
            return JSON && JSON.parse(str);
        }
    };
    u.setStorage = function(key, value){
        if(arguments.length === 2){
            var v = value;
            if(typeof v == 'object'){
                v = JSON.stringify(v);
                v = 'obj-'+ v;
            }else{
                v = 'str-'+ v;
            }
            var ls = uzStorage();
            if(ls){
                ls.setItem(key, v);
            }
        }
    };
    u.getStorage = function(key){
        var ls = uzStorage();
        if(ls){
            var v = ls.getItem(key);
            if(!v){return;}
            if(v.indexOf('obj-') === 0){
                v = v.slice(4);
                return JSON.parse(v);
            }else if(v.indexOf('str-') === 0){
                return v.slice(4);
            }
        }
    };
    u.rmStorage = function(key){
        var ls = uzStorage();
        if(ls && key){
            ls.removeItem(key);
        }
    };
    u.clearStorage = function(){
        var ls = uzStorage();
        if(ls){
            ls.clear();
        }
    };


    /*by king*/
    u.fixIos7Bar = function(el){
        if(!u.isElement(el)){
            console.warn('$api.fixIos7Bar Function need el param, el param must be DOM Element');
            return;
        }
        var strDM = api.systemType;
        if (strDM == 'ios') {
            var strSV = api.systemVersion;
            var numSV = parseInt(strSV,10);
            var fullScreen = api.fullScreen;
            var iOS7StatusBarAppearance = api.iOS7StatusBarAppearance;
            if (numSV >= 7 && !fullScreen && iOS7StatusBarAppearance) {
                el.style.paddingTop = '20px';
            }
        }
    };
    u.fixStatusBar = function(el){
        if(!u.isElement(el)){
            console.warn('$api.fixStatusBar Function need el param, el param must be DOM Element');
            return;
        }
        var sysType = api.systemType;
        if(sysType == 'ios'){
            u.fixIos7Bar(el);
        }else if(sysType == 'android'){
            var ver = api.systemVersion;
            ver = parseFloat(ver);
            if(ver >= 4.4){
                el.style.paddingTop = '20px';
            }
        }
    };
    u.toast = function(title, text, time){
        var opts = {};
        var show = function(opts, time){
            api.showProgress(opts);
            setTimeout(function(){
                api.hideProgress();
            },time);
        };
        if(arguments.length === 1){
            var time = time || 500;
            if(typeof title === 'number'){
                time = title;
            }else{
                opts.title = title+'';
            }
            show(opts, time);
        }else if(arguments.length === 2){
            var time = time || 500;
            var text = text;
            if(typeof text === "number"){
                var tmp = text;
                time = tmp;
                text = null;
            }
            if(title){
                opts.title = title;
            }
            if(text){
                opts.text = text;
            }
            show(opts, time);
        }
        if(title){
            opts.title = title;
        }
        if(text){
            opts.text = text;
        }
        time = time || 500;
        show(opts, time);
    };
    u.post = function(/*url,data,fnSuc,dataType*/){
        var argsToJson = parseArguments.apply(null, arguments);
        var json = {};
        var fnSuc = argsToJson.fnSuc;
        argsToJson.url && (json.url = argsToJson.url);
        argsToJson.data && (json.data = argsToJson.data);
        if(argsToJson.dataType){
            var type = argsToJson.dataType.toLowerCase();
            if (type == 'text'||type == 'json') {
                json.dataType = type;
            }
        }else{
            json.dataType = 'json';
        }
        json.method = 'post';
        api.ajax(json,
            function(ret,err){
                if (ret) {
                    fnSuc && fnSuc(ret);
                }
            }
        );
    };
    u.setLockType = function() {
      if (localStorage.unlockPassword == 1 || localStorage.unlockPassword == '1') {
        localStorage.unlockPassword = 0;
      } else {
        localStorage.unlockPassword = 1;
      }
    };
    u.get = function(/*url,fnSuc,dataType*/){
        var argsToJson = parseArguments.apply(null, arguments);
        var json = {};
        var fnSuc = argsToJson.fnSuc;
        argsToJson.url && (json.url = argsToJson.url);
        //argsToJson.data && (json.data = argsToJson.data);
        if(argsToJson.dataType){
            var type = argsToJson.dataType.toLowerCase();
            if (type == 'text'||type == 'json') {
                json.dataType = type;
            }
        }else{
            json.dataType = 'text';
        }
        json.method = 'get';
        api.ajax(json,
            function(ret,err){
                if (ret) {
                    fnSuc && fnSuc(ret);
                }
            }
        );
    };

    u.getUserData = function() {
      var userData = localStorage.userData;
      if (userData) {
        return JSON.parse(userData);
      }
      return false;
      u.goLogin()
    };
    u.goLogin = function() {
        api.rebootApp();
    };
    //地址
    window.$url='http://test.hysenritz.com/NK_DataSystem';

    window.$ajax = function () {
      //没写变型
      var data = arguments[0];
      var url = baseUrl + data.url;

      //展示loading
      api.showProgress({
          style: 'default',
          animationType: 'fade',
          title: '请稍候',
          text: '数据加载中...',
          modal: false
      });

      if (u.getUserData()) {
        data.data.token = u.getUserData().token;
      }
      api.ajax({
          headers:{
              'content-type': 'application/json'
          },
          url: url,
          method: data.type,
          data: data.data
      },function(ret, err){
          api.hideProgress();
          if (!ret) {
            api.toast({
                msg: 'error',
                duration: 2000,
                location: 'bottom'
            });
            return false;
          }

          if (ret.code != 200) {
             if(ret.message == "Token不存在"){
                 api.toast({
                     msg:"token可能失效，请重新登录",
                     duration: 2000,
                     location: 'bottom'
                 });
                 setTimeout(function() {
                    localStorage.userData = ''
                    u.goLogin()
                 },2000)
             }else {
                 api.toast({
                     msg: ret.message,
                     duration: 2000,
                     location: 'bottom'
                 });
             }

            return false;
          }
          if (ret) {
            if (data.url == '/subsystem/freeAccess') {
                ret.data = u.myreplace(ret.data)
                if(JSON.parse(ret.data).data) {
                    data.success(JSON.parse(ret.data).data);
                }else {
                    data.success(JSON.parse(ret.data));
                }
            } else {
              data.success(ret);
            }
            return false
          } else {
              data.error(err);
          }
      });
    };

    window.$ajax2 = function () {
      //没写变型
      var data = arguments[0];
      var url = 'http://test.hysenritz.com/NK_DataSystem' + data.url;

      //展示loading
      api.showProgress({
          style: 'default',
          animationType: 'fade',
          title: '努力加载中...',
          text: '先喝杯茶...',
          modal: false
      });

      if (u.getUserData()) {
        data.data.token = u.getUserData().token;
      }
      api.ajax({
          headers:{
              'content-type': 'application/json'
          },
          url: url,
          method: data.type,
          data: data.data
      },function(ret, err){
        //
          api.hideProgress();
          if (!ret) {
            api.toast({
                msg: 'error',
                duration: 2000,
                location: 'bottom'
            });
            return false;
          }

          if (ret.code != 200) {
             if(ret.message == "Token不存在"){
                 api.toast({
                     msg:"token可能失效，请重新登录",
                     duration: 2000,
                     location: 'bottom'
                 });
                 setTimeout(function() {
                    localStorage.userData = ''
                    u.goLogin()
                 },2000)
             }else {
                 api.toast({
                     msg: ret.message,
                     duration: 2000,
                     location: 'bottom'
                 });
             }

            return false;
          }
          if (ret) {
            if (data.url == '/subsystem/freeAccess') {
                ret.data = u.myreplace(ret.data)
                  data.success(JSON.parse(ret.data));
            } else {
              data.success(ret);
            }
            return false
          } else {
              data.error(err);
          }
      });
    };

    window.getDateDiff = function(dateTimeStamp){
        var result = '';
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var halfamonth = day * 15;
        var month = day * 30;
        var now = new Date().getTime();
        var diffValue = now - dateTimeStamp;
        if(diffValue < 0){return;}
        var monthC =diffValue/month;
        var weekC =diffValue/(7*day);
        var dayC =diffValue/day;
        var hourC =diffValue/hour;
        var minC =diffValue/minute;
        if(monthC>=1){
          result="" + parseInt(monthC) + "月前";
        }
        else if(weekC>=1){
          result="" + parseInt(weekC) + "周前";
        }
        else if(dayC>=1){
          result=""+ parseInt(dayC) +"天前";
        }
        else if(hourC>=1){
          result=""+ parseInt(hourC) +"小时前";
        }
        else if(minC>=1){
          result=""+ parseInt(minC) +"分钟前";
        }else
        result="刚刚";
        return result;
    }

    window.ajpushFun = function() {
              var ajpush = api.require('ajpush');
              //success
              ajpush.init(function(ret) {
                ajpush.setListener(function(ret) {
                    var id = ret.id;
                    var title = ret.title;
                    var content = ret.content;
                    var extra = ret.extra;
                    console.log(JSON.stringify(ret))
                });
                ajpush.getRegistrationId(function(ret) {
                    var registrationId = ret.id;
                });
              });
    }

/*end*/

    u.setWait = function(params){
        var element = document.createElement("div");
        element.setAttribute('id','wait')
        if (params) {
          element.setAttribute('class','wait toast')
          var node = document.createTextNode(params.msg);
          element.appendChild(node);
        }else{
          element.setAttribute('class','wait')
        }
        document.body.appendChild(element);
    };
    u.removeWait = function(callback) {
        var element2 = document.getElementById('wait')
        document.body.removeChild(element2)
        if (callback) {
            callback();
        }
    }
    // 字符串转义
    u.myreplace = function(str) {
        return str.replace(/\r\n/g, "<br/>").replace(/\n/g, "<br/>").replace(/\r/g, "<br/>")
                   .replace(String.fromCharCode(32)," ")
                   .replace(String.fromCharCode(13),"<br/>")
                   .replace(String.fromCharCode(9),"  ")
                   .replace(/\\/g,"\\\\");
    };
    // 文件图标
    u.fileIcon = function(extension) {
        extension = extension.split(".")[1]
        switch (extension){
            case 'txt':
                icon="/images/main/T.png";
                break;
            case 'doc':
            case 'docx':
            case 'rtf':
                icon="/images/main/W.png";
                break;
            case 'ppt':
            case 'pptx':
                icon="/images/main/P.png";
                break;
            case 'xls':
            case 'xlsx':
                icon="/images/main/X.png";
                break;
            case 'zip':
            case 'rar':
                icon="/images/main/T.png";
                break;
            case 'mp4':
                icon="/images/main/M.png";
                break;
            case 'pdf':
                icon="/images/main/PDF.png";
                break;
            case 'sql':
                icon="/images/main/SQL.png";
                break;
            case 'jpg':
            case 'gif':
            case 'png':
            case 'jpeg':
                icon="/images/main/G.png";
                break;
            default:
                icon="/images/main/T.png";
                break;
		}
        return icon
    }
    u.formatDate= function(now) {
        var   year=now.getYear();
        var   month=now.getMonth()+1;
        var   date=now.getDate();
        var   hour=now.getHours();
        var   minute=now.getMinutes();
        var   second=now.getSeconds();
        return   year+"/"+month+"/"+date+"";
    },
    // 分页
    u.upRefresh = function (params) {
        var moveY = 0,startY=0,hegiht=0;
        var dom = document.getElementById(params.name);
        document.addEventListener('touchstart', touchStart,false);
        document.addEventListener('touchmove', touchMove,false);
        document.addEventListener('touchend', function(e) {
            touchend(e,params.callback)
        },false);
        function touchStart(e) {
            startY = e.touches[0].pageY;
            dom.innerHTML = '上拉可加载下一页<i style="transform: rotate(90deg)" class="aui-iconfont aui-icon-back"></i>';
        };
        function touchMove(e) {
            moveY = e.touches[0].pageY;
            if ( moveY > 0 ) {
                hegiht = startY-moveY;
                dom.style.height = hegiht + "px";
                if (hegiht > 100) {
                    dom.innerHTML = '<i  class="aui-iconfont aui-icon-back"></i>释放加载';
                }else {
                    dom.innerHTML = '上拉可加载下一页<i class="aui-iconfont aui-icon-back"></i>';
                }
            }
        };
        function touchend(e, callback) {
            removeEventListener("touchstart",touchStart,false);
            removeEventListener('touchmove', touchMove,false);
            if (hegiht > 100) {
                dom.style.height = 50 + "px";
                dom.innerHTML = '正在加载<i style="width: 1.2rem;height: 1.2rem;display: inline-block"><img style="position:relative;top:7px;" src="../../image/loading_more.gif" alt="" /></i>';
                callback();
                setTimeout(function() {
                    dom.style.height = 0
                },200)

            }else {
                dom.innerHTML =  '上拉可加载下一页<i class="aui-iconfont aui-icon-back"></i>';
                setTimeout(function() {
                    dom.style.height = 0
                },200)

            };
        };

    };


    window.$api = u;

})(window);
