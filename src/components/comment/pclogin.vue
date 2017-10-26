<template>
  <div id="pclogin">
      <div class="main_box" v-if="loginShow == 1 ">
          <button class="close_btn" @click="loginShowClose"><span style="font-size:35px" class="iconfont icon-chuyidong"></span></button>
          <div class="pclogin_l l">
              <h1>登录与注册</h1>
              <div class="title">
      					<i class="l"><img src="/static/img/wenhao.png" width="100%"></i>
      					<div class="l tit">
      						<p>
      							如果您还没有注册加入，<br>请点击注册
      						</p>
      					</div>
      					<div class="clear"></div>
      				</div>
              <button type="button" class="btn" name="button" @click="changeBox(2)">立即注册</button>
          </div>
          <div class="center l">

          </div>
          <div class="pclogin_r r">
              <form class="" >
                  <label for="">
                    <span>邮箱地址</span>
                    <input v-model="loginData.email" type="text"  name="" value="">
                  </label>
                  <label for="">
                    <span>登录密码</span>
                    <input type="password" v-model="loginData.password" placeholder="" name="" value="">
                  </label>
                  <br><br>
                  <button type="button" class="btn" name="button" @click="loginUp(1)">立即登录</button>
                  <a class="findpass" @click="findShow = true">找回密码</a>
              </form>
          </div>
      </div>

      <!--  -->
      <!--  -->
      <div class="main_box" v-if="loginShow == 2 ">
          <button class="close_btn" @click="loginShowClose"><span style="font-size:35px" class="iconfont icon-chuyidong"></span></button>
          <div class="pclogin_l l">
              <h1>登录与注册</h1>
              <div class="title">
      					<i class="l"><img src="/static/img/wenhao.png" width="100%"></i>
      					<div class="l tit">
      						<p>
      							已有账号，<br>请点击登录
      						</p>
      					</div>
      					<div class="clear"></div>
      				</div>
              <button type="button" class="btn" name="button" @click="changeBox(1)">立即登录</button>
          </div>
          <div class="center l">

          </div>
          <div class="pclogin_r r">
              <form class="" >
                  <label for="">
                    <span>邮箱地址</span>
                    <input type="text" v-model="resetData.email"  name="" value="">
                  </label>
                  <label for="">
                    <span>登录密码</span>
                    <input type="password" v-model="resetData.password" placeholder="" name="" value="">
                  </label>
                  <label for="">
                    <span>确认密码</span>
                    <input type="password" v-model="password2" placeholder="" name="" value="">
                  </label>
                  <label for="">
                    <span>昵称</span>
                    <input type="text" v-model="resetData.username"  placeholder="" name="" value="">
                  </label>
                  <label for="">
                    <span>验证码</span>
                    <input class="code_input" type="text" v-model="checkCode" name="" value="">
                    <div class="code">
                        <span style=" background:#fff;width: 49px;padding-left: 10px;line-height:25px;margin-left:10px;color: #b437bc">  
                            <div style="transform: rotate(11deg);display:inline-block;color:#7cd64f">{{codeFirst}}</div> 
                            {{codeFu}} 
                            <div style="display:inline-block;color: pink;transform: rotate(-11deg);">{{codeLast}}</div>
                        </span>
                        <i @click="getCode()">换一个</i>
                    </div>
                  </label>
                    <button type="button" class="btn" name="button" @click="loginUp(2)">立即注册</button>
              </form>
          </div>
      </div>
      
      <!-- 找回密码 -->
      <div class="find_box" :class="{'find_show': findShow}">
        <h1>忘记密码</h1>
        <p>请输入您注册时所用的邮箱，系统将自动为你预留的电子邮箱中发送密码相关信息。</p>
        <label>
          <span>电子邮箱</span>
          <input type="text" v-model="email" name="">
          <button @click="findPass()">提交</button>
        </label>
      </div>
      <div class="layer" :class="{'layer_show' :findShow }" @click="findShow = false"></div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  name:'pclogin',
  data(){
    return{
      loginData:{
				'email' : '',
			  'password' : ''
			},
      resetData:{
				'email':'',
				'password':'',
				'username':''
			},
      password2:'',
      imgCode:'',
      code:false,
      checkCode:null,
      email:'',
      findShow:false,
      codeFirst: null,
      codeLast: null,
      codeFu:'+'
    }
  },
  created(){
    //this.getCode()
  },
  mounted(){
    this.getCode()
  },
  props: ['loginShow'],
  methods:{
    getCode(){
      this.codeFirst = Math.round(parseInt(Math.random()*10));
      this.codeLast = Math.round(parseInt(Math.random()*10));
      if (  this.codeFirst > this.codeLast) {
        this.codeFu = '-'
      }else{
        this.codeFu = '+'
      }
    },
    changeBox(i){
      let a = i;
      this.loginShowClose(a);
    },
    findPass(){
      this.utils.ajax(this,'/user/getPassword',{email:this.email},false).then((res)=>{
        if(res.errcode == 0){
          this.findShow = false
          Indicator.open({
            text: "密码将会发送到您的邮箱，请注意查收",
            spinnerType: 'fading-circle'
          });
          var close = setTimeout(()=>{
            Indicator.close();

          },3000)
        }else{
          this.$toast({msg:'请注意拼写是否正确'})
        }
      })
    },
    loginUp(b){
      if (b == 1) {
        console.log(this.loginData);
        this.utils.ajax(this,'/user/login',this.loginData,false).then((res)=>{
          console.log(res);
					let msg = '';
					if (res.errcode != 0 ) {
							msg = res.errmsg
					}else {
						msg = "登录成功",
						sessionStorage.setItem('token',res.data.userinfo.email+'/'+res.data.userinfo.address+'/'+res.data.userinfo.password+".."+'/'+res.data.userinfo.uid);
            sessionStorage.setItem('username',res.data.userinfo.username)
            this.popupVisible = false;
            this.loginData.email = '';
            this.loginData.password = '';
						this.$router.go(0);
					}
					Toast({
						message: msg ,
						position: 'center',
						duration: 3000,
						className : 'toast'
					});
        })
      }else {
        if (this.resetData.password.length <6 ) {
  				Toast({message: '密码少于六位' ,position: 'center',duration: 2000,className : 'toast'});
  			}else{
          let codeStatus = false
  				if ( this.resetData.password != this.password2  ) {

  						Toast({message: '两次密码输入不一致' ,position: 'center',duration: 2000,className : 'toast'});
              
  				}else{
            if ( this.codeFirst > this.codeLast ) {
                if ( this.checkCode == this.codeFirst  - this.codeLast ) {
                  codeStatus = true
                }else {
                  this.getCode()
                  Toast({message: "验证码输入错误" ,position: 'center',duration: 2000,className : 'toast'});
                }
            }else {
                if ( this.checkCode == this.codeFirst + this.codeLast ) {
                  codeStatus = true
                }else {
                  this.getCode()
                  Toast({message: "验证码输入错误" ,position: 'center',duration: 2000,className : 'toast'});
                }
            }
            if (codeStatus) {
              this.$http.post(this.utils.baseUrl+'/register',this.resetData).then((res)=>{
    							// console.log(res);
    							if ( res.body.errcode !=0 ) {
    								Toast({message: res.body.errmsg ,position: 'center',duration: 2000,className : 'toast'});
    							}else {
    								Toast({message:'注册成功，去登录' ,position: 'center',duration: 2000,className : 'toast'});
    								this.changeBox(1)
    							}
    					})
            }

  				}
  			}
      }
    },
    loginShowClose(a){
      this.$emit('listenToChildEvent',a);
    }
  }
}
</script>

<style lang="scss">
  .mint-toast{
    z-index: 9999
  }
  .toast{
    z-index: 9999
  }
  #pclogin{
    .toast{
      z-index: 9999
    }
    input{
      border: 1px;
    }
    p{
      color: #fff;
    }
    .layer{
      background:rgba(0, 0, 0, 0.8);
      z-index:1999;
      position:fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display:none;
      &.layer_show{
        display:block;
      }
    }
    .find_box{
      position:fixed;
      left: 50%;
      width: 530px;
      height: 200px;
      margin-top: -100px;
      padding: 20px;
      margin-left:-265px;
      background:#000;
      z-index:2000;
      top: -50%;
      transition: all .5s;
      h1{
        color:#fff;
        font-size: 25px;
        font-weight:500;
      }
      p{
        font-size: 14px;
        margin-top: 20px;
      }
      label{
        padding: 20px 0;
        display:block;
        span{
          color: #fff;
          font-family: "microsoft yahei";
          font-size:14px;
        }
        input{
          padding:5px 10px;
          margin-left: 10px;
        }
      }
      button{
        display:block;
        //margin-left: 100px;
        font-size: 14px;
        font-family: "din",'micrsoft yahei';
        margin-top: 20px;
        border: 1px #fff solid;
        padding:3px 15px;
        color:#fff;
      }
      &.find_show{
        top: 50%;
      }
    }
    .main_box{
      height:360px;
      width: 1000px;
      position: fixed;
      top: 50%;
      margin-top: -180px;
      left:50%;
      margin-left: -500px;
      z-index: 999;
      background: url('/static/img/sign_bg.png');
      background-repeat: repeat-y;
      .close_btn{
        position:absolute;
        right: 0;
        top: 0;
        color: #fff;
        background: none;
        border:0;
      }
      
      .pclogin_l{
        padding:35px 70px;
        box-sizing: border-box;
        width: 420px;
        height: 100%;
        h1{
          font-size: 36px;
          line-height: 40px;
          color: #fff;
        }
        .title{
          width: 420px;
          margin-top: 60px;
          .tit{
            font-size:  18px;
            color: #fff;
            margin-top: 15px;
            margin-left: 20px;
          }
        }
        button.btn{
          display: block;
          width: 280px;
          height: 40px;
          margin-top: 60px;
          line-height: 40px;
          color: #05A8EC;
          font-size: 16px;
          text-align: center;
          background: #fff;
          letter-spacing: 5px;
          cursor: pointer;
        }
      }
      .pclogin_r{
        padding:35px 70px;
        padding-top: 85px;
        box-sizing: border-box;
        width: 575px;
        height: 100%;
        .findpass{
          margin-left: 90px;
          margins-top: 10px;
          display:block;
          color:#fff;
        }
        label{
          display: block;
          margin-bottom: 20px;
          height: 35px;
          span{
            display: inline-block;
            width: 65px;
            line-height: 35px;
            font-size: 16px;
            color: #fff;
            margin-right: 20px;
          }
          input{
            background: #ABEDFE;
            padding:10px;
            width: 60%;
          }
        }
        a{
          display:block;
          margin-top: 10px;
          cursor:pointer;
        }
        button{
          display: block;
          width: 280px;
          height: 40px;
          margin-top: 60px;
          line-height: 40px;
          color: #05A8EC;
          font-size: 16px;
          text-align: center;
          background: #fff;
          letter-spacing: 5px;
          cursor: pointer;
          margin-left: 90px;
        }
        &:last-child{
          padding-top: 60px;
          label{
            display: block;
            margin-bottom: 10px;
            height: 35px;
            span{
              line-height: 35px;
              font-size: 16px;
              color: #fff;
              margin-right: 20px;
            }
            input{
              background: #ABEDFE;
              padding:5px 10px;
              width: 60%;
              &.code_input{
                width: 65px;
              }
            }
            .code{
              display: inline-block;
              img{
                position: relative;
                top: 5px
              }
              i{
                font-style: normal;
                color: #fff;
                cursor: pointer;
              }
            }
          }
          button{
            margin-top: 20px;
          }
        }
      }
      .center{
          float: left;
          height: 100%;
          width: 3px;
          background: url('/static/img/sign_bg2.png');
      }

    }
  }

</style>
