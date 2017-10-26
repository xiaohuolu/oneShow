<template>
	<div id="login">
		<mt-popup v-model="popupVisible" :closeOnClickModal="false" :class="{'heigh66': viseble == 1  }" position="top">
			<button class="close_btn" @click="close()"><span style="font-size:35px" class="iconfont icon-chuyidong"></span></button>
			<h3>登录与注册</h3>
			<div class="login" v-if="show">
				<div class="title">
					<i class="l"><img src="/static/img/wenhao.png" width="100%"></i>
					<div class="l tit">
						<p>
							如果您还没有注册加入，<br>请点击注册
						</p>
					</div>
					<div class="clear"></div>
				</div>
				<button class="tab" @click="change()">立即注册</button>
				<div class=""><img src="/static/img/zhongxian.png" width="100%"></div>
				<div class="from_box">
					<label>
						<span>邮箱地址</span><input v-model="loginData.email" type="text" name="">
					</label>
					<label>
						<span>登录密码</span><input v-model="loginData.password" type="password" name="">
					</label>
				</div>
				<button class="sub_login" @click="authLogin()">登录</button>
				<a  @click="findShow = true" >忘记密码?</a>
			</div>
			<div class="register" v-if="shownone">
			<div class="title">
					<i class="l"><img src="/static/img/wenhao.png" width="100%"></i>
					<div class="l tit">
						<p>
							已有账号？<br>
							请点击登录。
						</p>
					</div>
					<div class="clear"></div>
				</div>
				<button class="tab" @click="change()">立即登录</button>
				<div class=""><img src="/static/img/zhongxian.png" width="100%"></div>
				<div class="from_box">
					<label>
						<span>邮箱地址</span><input type="text" v-model="resetData.email" name="">
					</label>
					<label>
						<span>登录密码</span><input type="password" v-model="resetData.password" name="">
					</label>
					<label>
						<span>确认密码</span><input type="password" v-model="password2" name="">
					</label>
					<label>
						<span>昵称</span><input type="text" v-model="resetData.username" name="">
					</label>
					<label  for="" class="code">
						<span>验证码</span>
						<div class="center_input">
							<input type="text" v-model="checkCode" name="">
							<div class="code_img">
								<span style="padding:0 3px;background:#fff;width:40px;line-height:29px;color: #b437bc">  
		                            <div style="transform: rotate(11deg);display:inline-block;color:#7cd64f">{{codeFirst}}</div> 
		                            {{codeFu}} 
		                            <div style="display:inline-block;color: pink;transform: rotate(-11deg);">{{codeLast}}</div>
		                        </span>
								<i @click="getCode()"> 换一个</i>
							</div>
						</div>

					</label>
				</div>
				<button class="sub_login" @click="authReset()">立即注册</button>
			</div>
		</mt-popup>
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
import { Popup } from 'mint-ui';
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui'
export default {
  name: 'login',
  data() {
  	return {
     	show:true,
     	shownone:false,
     	email:'',
     	popupVisible:false,
      	findShow:false,
     	viseble : 0,
			loginData:{
				'email' : '',
			  'password' : ''
			},
			resetData:{
				'email':'',
				'password':'',
				'username':''
			},
			password2:null,
			code:null,
			codeFirst: null,
		    codeLast: null,
		    codeFu:'+',
		    checkCode:null,
  	}
  },
  props: {

	},
  filters: {},
  created() {
  	this.popupVisible=true
  },
  mounted(){
  	this.getCode()
  },
  methods: {
  	getCode(){
      this.codeFirst = Math.round(parseInt(Math.random()*10));
      this.codeLast = Math.round(parseInt(Math.random()*10));
      if (  this.codeFirst > this.codeLast) {
        this.codeFu = '-'
      }else{
        this.codeFu = '+'
      }
    },
  	change(){
  		this.show = !this.show;
  		this.shownone = !this.shownone;
  		if (this.viseble != 1) {
  			this.viseble = 1
  		}else{
  			this.viseble = 0
  		}
  	},
  	findPass(){
      this.utils.ajax(this,'/user/getPassword',{email:this.email},false).then((res)=>{
        if(res.errcode == 0){
          this.findShow = false
          Toast({
				message: "密码已发送到您的邮箱，请注意查收" ,
				position: 'center',
				duration: 3000,
				className : 'toast'
			});
        }else{
          this.$toast({msg:'请注意拼写是否正确'})
        }
      })
    },
  	close(){
			console.log(this.$route.path);
			if (this.$route.path != "/mine" ) {
				this.$router.go(0)
			}
			return 	this.popupVisible=false
  	},
		authLogin(){
			let router = this.$route.name;
			let str = JSON.stringify(this.loginData);
			str = JSON.parse(str)
			this.utils.ajax(this,'/user/login',str,false).then((res)=>{
					//console.log(res);
					let msg = '';
					if (res.errcode != 0 ) {
							msg = res.errmsg
					}else {
						msg = "登录成功",
						sessionStorage.setItem('token',res.data.userinfo.email+'/'+res.data.userinfo.address+'/'+res.data.userinfo.password+".."+'/'+res.data.userinfo.uid);
						this.popupVisible = false;
						this.$router.go(0);
					}
					Toast({
						message: msg ,
						position: 'center',
						duration: 3000,
						className : 'toast'
					});
			})
		},
		authReset(){
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
  components: {
  },
  watch:{
  	popupVisible(){
	    if (!this.popupVisible ) {
	      document.body.style.overflow = 'auto';
	    }else {
	      document.body.style.overflow = 'hidden';
	    }
  	}
  }
}
</script>
<style type="text/css" lang="scss">
	.mint-toast{
		z-index: 5000
	}
	.mint-toast.toast{
		z-index: 5000
	}
	.mint-indicator{
		z-index: 5000
	}

	#login{
		.mint-popup-top{
			overflow:hidden;
			top: 50%;
			width: 80%;
			height: 420px;
			transform:translate(-50%,-50%);
			background:#494949;
			padding:20px;
			h3{
				color:#fff;
				font-family: "microsoft yahei";
				margin-bottom: 20px;
				font-size: 20px;
			}
			.close_btn{
				position:absolute;
				right: 0;
				top: 0;
				color: #fff;
				background: none;
				border:0;
			}
			.login{
				a{
					color: #fff;
					font-family:"microsoft yahei";
					font-size: 14px;
					padding:5px;
					display:block;
					margin-left: 20%;
				}
			}
			.title{
				margin:23px 0;
				color:#fff;
				background: none;
				padding-left: 10px;
				i{
					width: 45px;
					height: 45px;
					display:block;
				}
				.tit{
					width: 69%;
					margin-left: 10px;
					p{
						font-family: "microsoft yahei";
						font-size: 17px;
						line-height: 23px;
					}

				}
			}
			.tab,.sub_login{
				display:block;
				width: 56%;
				height: 35px;
				line-height: 32px;
				margin:auto;
				margin-bottom: 20px;
				font-size: 16px;
				border:0;
				background:#fff;
				font-family: "microsoft yahei";
			}
			.sub_login{
				margin-bottom: 0;
			}
			.from_box{
				margin:20px 0;
				label{
					display:block;
					width: 100%;
					color: #fff;
					position: relative;
					padding:8px 0;
					span{
						position: absolute;
						top: 10px;
						font-size: 14px;
						margin-right: 10px;
						font-family: "microsoft yahei"
					}
					@media screen and(max-width:350px){
						span{
							font-size: 12px;
						}
					}
					input{
						position: relative;
						left: 50%;
						width: 56%;
						transform: translateX(-50%);
						box-sizing: border-box;
						padding:5px 10px;
					}
				}
			}

			.register{
				.title{
					width: 70%;
					margin:30px auto;
				}
				.from_box{
					margin:10px 0;

				}
				label{

					.center_input{
						position:relative;
						left: 50%;
						transform: translateX(-50%);
					}
					span{
						width:  19%;
						display:inline-block
					}
					&.code{
						span{
							float:left;
							position: relative;
							top: 0;
						}
						input{
							width: 17%;
							left: 0;
							float:left;
							transform: none;
							box-sizing: border-box;
						}
						.code_img{
							width: 36%;
							margin-left: 10px;
							height:28px;
							display: inline-block;
							
							i{
								height: 30px;
								font-family: "microsoft yahei";
								line-height: 30px;
								font-style: normal;
								margin-left: -2px;
							}
							@media screen and(max-width:350px){
								i{
									font-size: 12px;
								}
							}
						}
					}
				}
				.tab{
					margin-bottom: 16px;
				}
			}
			&.heigh66{
				height: 487px;
			}
		}
		.layer{
	      background:rgba(0, 0, 0, 0.8);
	      z-index:2012;
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
	      left: 10%;
	      width: 80%;
	      box-sizing:border-box;
	      height: 400px;
	      margin-top: -200px;
	      padding: 20px;
	      background:#000;
	      z-index:20002;
	      top: -50%;
	      transition: all .5s;
	      h1{
	        color:#fff;
	        font-size: 25px;
	        font-weight:500;
	      }
	      p{
	        color:#fff;
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
	          margin-top: 10px;
	        }
	      }
	      button{
	        display:block;
	        //margin-left: 100px;
	        font-size: 14px;
	        font-family: "din",'micrsoft yahei';
	        margin:auto;
	        margin-top: 30px;
	        border: 1px #fff solid;
	        padding:3px 15px;
	        color:#fff;
	      }
	      &.find_show{
	        top: 50%;
	      }
	    }
	}
</style>
