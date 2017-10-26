import { Toast } from 'mint-ui';
export default {
	ajax(that, cmd, data, isFormData) {
		//�Ƿ�Ϊ�?�ύ
		if (isFormData) {
  	        data = this.formData(data);
	      }
		let res = new Promise((resT, rejT) => {
			/*
			http://192.168.1.13:8022/OneShow
				http://123.57.15.15:8080/OneShow
			*/
	      that.$http.post('http://123.57.15.15:8080/OneShow' + cmd, data, {timeout: 3000, type: 'json'}).then((res) => {

	        return resT(res.data);
	      });
	    }, err => {
	        tRej(err);
	        that.$toast(res);
	      });
	    return res;
	},
	formData(post) {
		let imgData = new FormData();
	    for (let i in post) {
	      imgData.append(i, post[i]);
	    }
	    return imgData;
	},
	padLeftZero(str) {
	  return ('00' + str).substr(str.length);
	},
	formatDate(date, fmt) {
	    if (/(y+)/.test(fmt)) {
	      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	    }
	    let o = {
	      'm+': date.getMonth() + 1,
	      'd+': date.getDate(),
	      'h+': date.getHours(),
	      'i+': date.getMinutes(),
	      's+': date.getSeconds()
	    };
	    for (let k in o) {
	      if (new RegExp(`(${k})`).test(fmt)) {
	        let str = o[k] + '';
	        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
	      }
	    }
	    return fmt;
	  },
	checkCode(code) {
		// ��֤code
	},
	setData(content){
		this.getData = content;
	},
	baseUrl:'http://123.57.15.15:8080/OneShow/user',
	baseUrlApp:'http://123.57.15.15:8080/OneShow/app',
	BaseUrl:'http://123.57.15.15:8080/OneShow',
	//BaseUrl:'http://192.168.1.13:8022/OneShow',
	baseUrlWeixin:'http://123.57.15.15:8080/OneShow/weixin',
	animate(a,b){
	},
	formatDate2(now) {
     let   year=now.getYear();
     let   month=now.getMonth()+1;
     let   date=now.getDate();
     let   hour=now.getHours();
     let   minute=now.getMinutes();
     let   second=now.getSeconds();
     return   year+"/"+month+"/"+date+"";
	},
	getCookie(cookie_name)
	{
	    var allcookies = document.cookie;
	    var cookie_pos = allcookies.indexOf(cookie_name);   //索引的长度
	    // 如果找到了索引，就代表cookie存在，
	    // 反之，就说明不存在。
	    if (cookie_pos != -1)
	    {
	        // 把cookie_pos放在值的开始，只要给值加1即可。
	        cookie_pos += cookie_name.length + 1;
	        var cookie_end = allcookies.indexOf(";", cookie_pos);

	        if (cookie_end == -1)
	        {
	            cookie_end = allcookies.length;
	        }

	        var value = unescape(allcookies.substring(cookie_pos, cookie_end));         //这里就可以得到你想要的cookie的值了。。。
	    }
	    return value;
	},
	userIf(){
		if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
				return false
		} else {
				return true
		}
	},
	goTop(body,chazhi,type){
		if( Math.abs(chazhi) >= 10 ){
			// 计算  速度
			var tran = Math.abs(chazhi)/100;
			var h = 0;
			var animate = setInterval(()=>{
				if( chazhi > 0 ){
					h += tran;
					if( h > chazhi ){
						document.body.scrollTop = 0;
						window.clearInterval(animate);
					}
				}
				if( chazhi < 0 ){
					h -= tran;
					if( h < chazhi ){
						document.body.scrollTop = 0;
						window.clearInterval(animate);
					}
				}
				document.body.scrollTop = body - h;
				if ( document.body.scrollTop < 2*tran && type ) {
						document.body.scrollTop=0
				}
			},1)
		}
	},
	formCheck(data){
		let sum = 0
		for (let i = 0 ; i < data.length ; i++) {
			if (data[i] == "" || data[i] == undefined || data[i] == null ){
				Toast({
					message: '请填写必填项',
					position: 'center',
					duration: 5000
				});
				sum++
			}
		}
		if (sum>0) {
			return false
		}else{
			return true
		}
	},
	reMove(arr, item) {
	   	let result=[];
	   	let checkData = arr;

	    for(let i in checkData){
	      	if(checkData[i]!=item){
	          	result.push(checkData[i]);
	      	}
		}
	 	return result;
	},

	isWeiXin(){
		var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){
				return true;
		}else{
			return false;
		}
	}


}
