<template>
	<div id="password">
		<div class="banner">
			<img src="/static/img/banner_1.png">
		</div>
    <div class="title">
			<div class="title1000">
					个人中心
			</div>

    </div>
    <div class="content">
      <div class="content_msg">
          <div class="img_box l">
          	<img :src="'http://www.oneshow.cn:8088'+face">
          </div>
          <div class="disc l">
						<mineDIsc v-bind:faceDisc = "face"  v-on:listenToChildEvent="faceDisc"></mineDisc>

            <h5>
              <router-link to="/information">修改资料</router-link>
              <router-link to="/userlogo" class="r">修改头像</router-link>
            </h5>
        </div>
        <div class="clear"></div>

      </div>
      <div class="form_box">
          <label>
            <span>当前密码：</span><input type="password" v-model="data.oldPassword" name="">
          </label>
          <label>
            <span>新密码：</span><input type="password" v-model="data.newPassword" name="">
          </label>
          <label>
            <span>确认新密码：</span><input type="password" v-model="newPassword2" name="">
          </label>
          <button @click="submit()">
            提交
          </button>
        </div>
    </div>
	</div>
</template>
<script>
import	mineDIsc from '@/components/comment/minedisc'
import { Toast } from 'mint-ui';
export default {
  name: 'password',
  data() {
  	return {
		 data:{
			 'email':'',
			 'oldPassword':'',
			 'newPassword':'',
		 },
		 newPassword2:null,
		 face:''
  	}
  },
  props: {},
  filters: {},
  created() {},
  methods: {
		faceDisc(data){
			this.face = data
		},
    submit(){
			this.data.email = sessionStorage.token.split('⊰')[0];
      if(this.data.newPassword  !==  this.newPassword2){
        Toast({message: '两次密码输入不一致',position: 'center',duration: 3000});
      }else if(this.data.newPassword.length < 6){
					Toast({message: "新密码不能少于六位" , position: 'center',duration: 3000});
			}else {
      	this.$http.post(this.utils.baseUrl+'/updatePassword',this.data).then((res)=>{
					if ( res.data.errcode !=  0  ) {
							Toast({message: res.data.errmsg , position: 'center',duration: 3000});
					}else {
							if (!this.utils.userIf()) {
								Toast({message: '修改成功' , position: 'center',duration: 2000});
								sessionStorage.removeItem('token')
								this.$router.push('/mine')
								setTimeout(()=>{
									Toast({message: '请重新登录' , position: 'center',duration: 3000});
								},2000)
							}else {
								sessionStorage.removeItem('token')
								Toast({message: '修改成功' , position: 'center',duration: 2000});
								window.location.href='http://'+window.location.host
								setTimeout(()=>{
									Toast({message: '请点击上方重新登录' , position: 'center',duration: 3000});
								},2000)
							}
					}
				})
      }
    }
  },
  components: {
		mineDIsc
  }
}
</script>
<style  lang="scss">
 #password{
	 .banner{
		 height: auto;
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
    padding:20px;
    .img_box{
      height: 100px;
      width: 100px;
      border: 1px #d3d3d3 solid;
      padding: 3px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .disc{
      margin-left: 20px;
      h4{
        font-size: 16px;
        line-height:26px;
        font-weight: bloder;
        color:#000;
      }
      h5{
        font-weight: normal;
        font-size: 14px;
        color:#000;
        line-height: 25px;

        a{
          font-weight:600;
          display: inline-block;
          color:#000;
          margin:0 4px;
            &:first-child{
              margin-left:0
            }
        }
      }
    }
    .form_box{
      margin-top: 20px;
      border-top: 1px #d3d3d3 solid;
      label{
        padding:20px 0;
        display:block;
        span{
          width: 30%;
          text-align: right;
          font-size: 14px;
          display:inline-block;
          font-family: "microsoft yahei";
        }
        input{
          padding:5px 10px;
        }
      }
      button{
        width: 40%;
        height: 30px;
        line-height: 28px;
        font-size: 15px;
        border:0;
        margin:auto;
        margin-top: 10px;
        display:block;
        background:#d3d3d3;
        color: #000;
        text-align:center;
        font-family: "microsoft yahei"
      }
    }

  }
	@media screen and(min-width:1000px){
		.title1000{
			width: 1000px;
			margin:auto;
		}
		.banner{
			height: 249px;
			img{
				height: 100%;
			}
		}
		.content{
			position: relative;
			width: 710px;
			padding-right: 290px;
			margin:auto;
			padding-left: 0;
			.disc{
				width: 202px;
				h5 a{
					float: none;
				}
			}
		}
	}
	@media screen and(max-width: 358px){
		.title{
			font-size: 16px;
			margin-top: -8px;
			height: 40px;
		}

		.content{
			.img_box{
				width: 90px;
				height: 90px;
			}
			.disc{
				margin-left:10px;
				h4{
					font-size: 14px;
				}
				h5{
					font-size: 12px;
				}
			}
			.mine_list{
				margin-top: 13px;
				 a{
					font-size: 13px;
					padding:5px 4%;
				 }
			}
		}
	}
 }
</style>
