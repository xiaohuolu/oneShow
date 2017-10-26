<template>
  <div id="memebersign">
    <div class="banner">
      <img src="/static/img/201702161.png">
    </div>
    <div class="title">
      <div class="title1000">
        个人会员计划申请
      </div>

    </div>
    <mt-popup
      v-model="popupVisible"
      position="top">
      <div class="container">
          <h4>感谢您关注2017年度ONE SHOW中国官方会员服务。</h4>
          <p>
              2017年度官方会员福利已升级，包括会员专属纪念品/证
              书、OneShow官方微店会员卡、青年竞赛新赛季免费参赛
              券、在线阅读OneShow青年奖历年获奖作品集特权、参加
              由官方举办的各种创意讲座/沙龙活动特权、各城市官方
              巡回校园创新峰会活动以及其他不断更新的会员福利和丰
              富的会员活动等。
          </p>
          <h4>  注册前，请您注意以下信息：</h4>
          <p>
            1.您的会员资格将在注册成功后立即生效，有效期1年。收到实体会员证书之前，您可以在会员中心保存电子版会员卡，凭此参加所有官方会员活动，享受所有会员福利。<br>
            2.您的会员证书及会员纪念品，将按照注册先后顺序进行寄送，邮费全免（不含港澳台地区），物流单号将在礼品寄出后通过手机短信发送给您。<br>
            3.所有会员专属福利将陆续进行发放，您可以在加入OneShow个人会员专属群后，随时关注官方发布的动态。<br>
            4.下一年度会员续费成功后，将额外获赠2017年度One Show全球获奖案例_钛金银U盘会员专属礼品。<br>
          </p>
          <button type="button" @click="close()" name="button">确定</button>
      </div>
    </mt-popup>
    <div class="wecat" v-if="weixinPay">
        <h3>是否完成微信支付</h3>
        <button type="button" @click="closeWe(1)" name="button">是</button>
        <button type="button"  @click="closeWe(0)" name="button">否</button>
    </div>
    <div class="layer" v-if="weixinPay">

    </div>
    <div class="content">

      <h3 v-if='vipIs'><span>· VIP编号：</span>{{data.vipno}} </h3>
      <h3 v-if='vipIs'><span>· 到期时间：</span>{{data.endtime}}</h3>

      <form class="" >
        <!-- <div  v-if='vipIs' class="">
          <label for="">
            <span>昵称</span>
            <input disabled="disabled"  type="text" v-model="data.username" name="" value=""><i>*</i>
          </label>
          <label for="">
            <span>姓名：</span>
            <input disabled="disabled" v-model="data.rname" type="text" name="" value=""><i>*</i>
          </label>
          <label for="">
            <span>联系电话：</span>
            <input disabled="disabled" type="text" v-model="data.phone" name="" value=""><i>*</i>
          </label>
          <label for="">
            <span>Email：</span>
            <input disabled="disabled" type="text" v-model="data.email" name="" value=""><i>*</i>
          </label>
          <label for="">
            <span>微信号：</span>
            <input disabled="disabled" type="text" v-model="data.wechat" name="" value=""><i>*</i>
          </label>
          <label for="">
            <span>收件地址：</span>
            <input disabled="disabled" style="width:80%;max-width:300px;" v-model="data.address" type="text" name="" value=""><i>*</i>
          </label>
        </div> -->
        <div  class="">
          <label for="">
            <span>昵称</span>
            <input type="text" v-model="data.username" name="" value=""><i>*</i>
          </label>
          <label for="">
            <span>姓名：</span>
            <input v-model="data.rname" type="text" name="" value=""><i>*</i>
          </label>
          <label for="">
            <span>联系电话：</span>
            <input type="text" v-model="data.phone" name="" value=""><i>*</i>
          </label>
          <label for="">
            <span>Email：</span>
            <input type="text" v-model="data.email" name="" value=""><i>*</i>
          </label>
          <label for="">
            <span>微信号：</span>
            <input type="text" v-model="data.wechat" name="" value=""><i>*</i>
          </label>
          <label for="">
            <span>收件地址：</span>
            <input style="width:80%;max-width:300px;" v-model="data.address" type="text" name="" value=""><i>*</i>
          </label>
        </div>
        <label for="" v-if='!vipIs'>
          <span>支付方式：</span>
        </label>
        <div class="payfor" v-if='!vipIs'>
          <div class="typeon" :class="{'show' : type == 2 }">
            <img src="/static/img/type.jpg">
          </div>
          <img @click="type = 1" src="/static/img/alipay.png" alt="">
          <img v-if="alipay" @click="type = 2" src="/static/img/wechatPay.png" alt="">
          <button  @click.prevent="wecatPay(type)">提交</button>
        </div>
        <div class="payfor" v-if='vipIs'>

          <button  @click.prevent="chenge()">提交</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import alipay from '@/components/comment/alipay'
import { Popup } from 'mint-ui';
export default {
  name:'memebersign',
  data(){
    return{
      popupVisible:true,
      type:1,
      data:{
        uid:'',
        wechat:'',
        email:'',
        rname:'',
        phone:'',
        address:'',
        spbillCreateIp:'',
        username:'',
        wechat:'',
        referer:'http://www.oneshow.cn/',
      },
      dataali:'',
      weixin:true,
      alipay:true,
      loginData:{
        'email':'',
        'password':''
      },
      pcWecat:'',
      weixinPay:false,
      vipIs:false,
    }
  },
  created(){
    this.getMine()
  },
  methods:{
    close(){
      this.popupVisible = false
    },
    getMine(){
      if (sessionStorage.token== undefined) {
        this.show = true
      }else {
        let tokenData = sessionStorage.token.split('/')
        this.loginData.email = tokenData[0];
        let length =  tokenData[2].length;
        this.loginData.password = tokenData[2].substring(0,length-2);
        // 获取个人信息
        this.utils.ajax(this,'/user/login',this.loginData,false).then((res)=>{
          let userList = res.data.userinfo;
          this.data.username = userList.username;
          this.data.rname = userList.rname;
          this.data.email = userList.email
          this.data.address = userList.address
          this.data.phone = userList.phone
        })
        this.utils.ajax(this,'/user/isVip',{uid:tokenData[3]},false).then((res)=>{
          if ( res.data.isVip == 1 ) {
            this.vipIs = true
              console.log(res.data);
              this.data  =  res.data.vip[0];
              this.data.endtime =  res.data.endtime
          }
        })

      }

    },
    wecatPay(a){
      let tokenData = sessionStorage.token
      if (tokenData == undefined) {
          this.$toast({
            message: '请先点击上方登录',
            position: 'center',
            duration: 5000
          });
      }else {
        tokenData = tokenData.split('/');
      }
      this.data.uid = tokenData[3];
      this.data.spbillCreateIp='1'
      console.log(this.data);

      let count = 0;
      for(let a in this.data){
        if(this.data[a] == ''){
          count++
        }
      }
      console.log(a);
      if (count > 0 ) {
          this.$toast({
            message: '请完整填写表单',
            position: 'center',
            duration: 5000
          })
      }else{
        this.ajax(a)
      }
    },
    chenge(){
      this.utils.ajax(this,'/user/updatevipinfo',this.data,false).then((res)=>{
        console.log(res)
        if (res.errcode == 0) {
           this.$toast({
            message: '信息修改成功,将会刷新页面',
            position: 'center',
            duration: 3000
          })
          setTimeout(()=>{
            this.$router.go(0)
          },2000)
        }
      })
    },
    closeWe(a){
      this.weixinPay = false;
      if (a == 0) {
        this.$toast({
          message: 'OneShow会员可是会享受很多的权限哦',
          position: 'center',
          duration: 3000
        })
      }else if( a==1 ){
        console.log(this.data.uid);
        this.$http.post(this.utils.baseUrlWeixin+'/weixinVip',{uid:this.data.uid}).then((res)=>{
          console.log(res.bodyText);
          if (res.bodyText == 'FAIL') {
            this.$toast({
              message: '对不起您还没有支付成功',
              position: 'center',
              duration: 3000
            })
          }else if(res.bodyText == 'SUCCESS'){
            this.$toast({
              message: '恭喜您成为OneShow会员',
              position: 'center',
              duration: 3000
            })
          }
        })

      }
    },
    ajax(a){
      this.dataali = "";
      let host = window.location.host;
      if (a == 1) {

        if (this.utils.userIf()) {
            let myWindow = window.open('http://'+host+'/static/ipay.html','OneShow')
            this.utils.ajax(this,'/alipay/pcPay',this.data,false).then((res)=>{
              myWindow.document.write(res)
            })
        }else {

          this.utils.ajax(this,'/alipay/mobilePay',this.data,false).then((res)=>{

            if ( res ) {
              if ( navigator.userAgent.indexOf("Safari") > 0  ) {
                  document.write(res);
              }else{
                  document.write(res);
              }
            }

          })
        }
      }else if(a == 2){
        if (this.utils.userIf()) {
          let myWindow = window.open('http://'+host+'/static/ipay.html','OneShow')

          this.$http.post('http://123.57.15.15:8080/OneShow/weixin/pcPay',this.data).then((res)=>{
            this.pcWecat = 'http://123.57.15.15:8080/OneShow' + res.bodyText;
            let wechatText =  '<img class="wecat" style="position: fixed;top: 40%;left: 50%;'
                              +'transform:translate(-50%,-50%)" src="'+this.pcWecat
                              +'"/><h4 style="text-align:center;position: fixed;top: 52%;'
                              +'left: 50%;transform:translate(-50%,-50%);font-weight:normal;font-size:15px">'
                              +'<br><br><br>请用微信扫描二维码<br>完成会员注册<br>OneShow中文网<br>窗口将在2分钟后关闭<br>('
                              +this.data.email+')<h4>'+'<scri'+'pt type="text/javascript">document.title="OneShow中文'
                              +'网会员支付页面";function webpageClose(){alert("支付超时，窗口将会关闭")window.close();}'
                              +'setTimeout( webpageClose,120000)</s'+'cript>'

            myWindow.document.write(wechatText)
            this.weixinPay = true;

          })
        }else {
          console.log('微信phone');
          if ( this.utils.isWeiXin() ) {
              let urlbase = "http://www.oneshow.cn/static/ipay.html?params=["+JSON.stringify(this.data)+"]";
              let url=  "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6cb02c87527adc50&redirect_uri=" + encodeURI(urlbase) + "&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"
              window.location.href = encodeURI(url)
          }else {
            this.data.referer="http://www.oneshow.cn";
            this.$http.post(this.utils.baseUrlWeixin+'/h5Pay',this.data).then((res)=>{
              console.log(res.bodyText);
              let userAgent = navigator.userAgent;
              window.location.href=res.bodyText;

            })
          }
        }
      }
    }
  },
  components:{
  }
}
</script>


<style lang="scss">
  #memebersign{
    .banner{
      width: 100%;
      overflow: hidden;
      img{
         position: relative;
         left: 50%;
         transform: translateX(-50%);
         height:140px;
       }
    }
    .title{
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      color: #020202;
      font-weight: bolder;
      background: #d3d3d3;
      padding:0 20px;
    }
    @media screen and(max-width: 1000px){
			.title{
			  margin-top: -6px;
			}
		}
    .content{
      padding:30px;
      h3{
        color: #777;
        line-height: 50px;
        font-weight: normal;
        font-size: 16px;
        span{
          font-weight: bolder;
        }

      }
      label{
        display: block;
        margin: 20px 0;
        margin-bottom: 25px;
        span{
          font-size: 14px;
					font-weight: bolder;
          display: block;
          margin-bottom: 5px;
					color: #000;
          &:before{
            content: '· ';
						font-size: 16px;
						font-weight: bolder;
          }
        }
        input{
          padding:5px 10px;
        }
        i{
          font-weight:bolder;
          margin-left: 5px;
        }
      }
      .payfor{
        position:relative;
        width: 100%;
        max-width:600px;
        .typeon{
          position: absolute;
          width: 120px;
          height: 40px;
          border: 2px #ccc solid;
          top: -2px;
          left: 0;
          transition: all .5s;
          img{
            position: absolute;
            width: 30px;
            height: 30px;
            top: 0;
            left: none;
            right: 0px;
          }
          &.show{
            left: 130px;
          }
        }
        img{
          width:110px;
          height: 35px;
          margin-right: 20px;
          cursor: pointer;
          &:last-child{
            margin-right: 0
          }
        }
        @media screen and(max-width:330px){
          img{
            width: 100px;
            height: 30px;
          }
          .typeon{
            width: 100px;
            height: 30px;
            &.show{
              left: 120px;
            }
          }
        }
        button{
          margin-left: 150px;
          background:#1eb7fb;
          color: #fff;
          width: 60px;
          font-size: 15px;
          line-height: 25px;
          font-family: "microsoft yahei";
          height: 30px;
          margin-top: 30px;
          display: block;

        }
        @media screen and(max-width:1000px){
          button{
            margin:auto;
            margin-top: 30px;
          }
        }
      }
    }
    .wecat{
      position: fixed;
      z-index: 9001;
      width: 250px;
      height: 100px;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background: #fff;
      h3{
        font-size: 18px;
        font-weight: normal;
        text-align: center;
        line-height: 70px;
        border-bottom: 1px #ccc solid;
      }
      button{
        line-height: 29px;
        width:125px;
        display: block;
        float:left;
        cursor: pointer;
        padding: 0;
        border-right:1px #ccc solid;
        &:last-child{
          border: 0
        }
        &:hover{
          background: #ccc;
        }
      }
    }
    .layer{
      position: fixed;
      background: rgba(0,0,0,0.5);
      z-index: 9000;
      width: 100%;
      height:100%;
      top: 0;
      left: 0;
    }
    .mint-popup-bottom{
      width: 80%;
      height: 80%;
      max-width: 300px;
      max-height: 600px;
      margin-top: 10%;
      box-sizing: border-box;
      padding:20px;
    }
    .mint-popup-top{
      width: 80%;
      height: 80%;
      max-width: 300px;
      max-height: 600px;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      box-sizing: border-box;
      padding:20px;
      .container{
        height: 100%;
        width: 100%;
        overflow-y: auto;
        h4{
          font-size: 14px;
          margin-top: 10px;
        }
        p{
          font-size: 13px;
          margin-top: 10px;
          margin-bottom: 20px;
        }
        button{
          background: #000;
          color: #fff;
          border:0;
          height: 30px;
          line-height: 30px;
          width: 80px;
          margin: auto;
          display: block;
        }
      }
    }
    @media screen and(min-width:1000px){
      .banner{
				height: 249px;
				img{
					height: 100%;
				}
			}
      .mint-popup-top{

        max-width: 700px;
        max-height: 350px;
      }
      .title1000{
        width: 1000px;
        margin: auto;
      }
      .content{
        width: 1000px;
        margin: auto;
      }
    }
  }
</style>
