<template>
	<div id="information">
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
              <router-link to="/password" class="r">修改密码</router-link>
            </h5>
        </div>
        <div class="clear"></div>
      </div>
      <div class="form_box">
        <p>
          *参赛之前，请先完善必填信息！<br>
          *以下信息会影响您以后参加的所有活动，请务必填写真实信息！
        </p>
        <label>
          <span>昵称：</span><input v-model="data.username" type="text" name=""><i>*</i>
        </label>
        <label>
          <span>真实姓名：</span><input v-model="data.rname" type="text" name=""><i>*</i>
        </label>
        <label>
          <span>地区：</span>
          <select v-model="data.country" name="">
          	<option value="中国">中国大陆</option>
          	<option value="香港">香港</option>
          	<option value="澳门">澳门</option>
          	<option value="台湾">台湾</option>
            <option value="新加坡">新加坡</option>
            <option value="马来西亚">马来西亚</option>
            <option value="其他">其他</option>
          </select><i>*</i>
        </label>
        <label>
          <span>所在城市：</span><input v-model="data.city" type="text" name=""><i>*</i>
        </label>
        <label>
          <span>证件号：</span><input v-model="data.idcard" type="text" name=""><i>*</i>
        </label>
        <label>
          	<span>性别：</span>
						<select v-model="data.sex" name="">
							<option value="1">男</option>
							<option value="2">女</option>
						</select><i>*</i>
        </label>
        <label>
          <span>出生日期：</span><input v-model="data.birthday" type="text" name=""><i></i>
        </label>
        <label>
          <span>email：</span><input v-model="data.email" type="text" name=""><i>*</i>
        </label>
        <label>
          <span>就读/毕业 &nbsp;院校  ：</span><input v-model="data.school" type="text" name=""><i>*</i>
        </label>
        <label>
          <span>院系：</span><input v-model="data.department"  type="text" name=""><i>*</i>
        </label>
        <label>
          <span>联系电话：</span><input v-model="data.phone" type="text" name=""><i>*</i>
        </label>
        <label>
          <span>QQ：</span><input v-model="data.qq" type="text" name=""><i></i>
        </label>
        <label>
          <span>MSN：</span><input v-model="data.msn" type="text" name=""><i></i>
        </label>
        <label>
          <span>联系地址：</span><input v-model="data.address" type="text" name=""><i>*</i>
        </label>
        <label>
          <span>工作单位：</span><input v-model="data.company" type="text" name=""><i></i>
        </label>

         <h4>无工作单位可不填</h4>
         <button @click="submit()">
            提交
          </button>
      </div>
    </div>
	</div>
</template>
<script>
import { Toast } from 'mint-ui';
import	mineDIsc from '@/components/comment/minedisc';
export default {
  name: 'information',
  data() {
  	return {
				data:{
					'username':'SUSHILEO'
				},
				loginData:{
					'email':'',
					'password':''
				},
				face:''
  	}
  },
  props: {},
  filters: {},
  created() {
		this.getAuth()
	},
  methods: {
			faceDisc(data){
				this.face = data
			},
			getAuth(){
	      if (sessionStorage.token== undefined) {
	        this.show = true
	      }else {
	        let tokenData = sessionStorage.token.split('/')
	        this.loginData.email = tokenData[0];
	        let length =  tokenData[2].length;
	        this.loginData.password = tokenData[2].substring(0,length-2);
	        //console.log(this.loginData);
	        this.utils.ajax(this,'/user/login',this.loginData,false).then((res)=>{
	          this.data = res.data.userinfo
            //console.log(this.data)
	        })
	      }
	    },
      submit(){
        if (this.utils.formCheck([this.data.address,this.data.username,this.data.rname,this.data.country
          ,this.data.city,this.data.idcard,this.data.sex,this.data.email,this.data.school,this.data.department,this.data.phone
          ,this.data.address])) {
            this.$http.post(this.utils.baseUrl+'/updateuserinfo',this.data).then((res)=>{
               Toast({message: '修改成功' ,position: 'center',duration: 2000,className : 'toast'});
               this.$router.push('/mine')
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
 #information{
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
		margin-top: -5px;
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
    padding: 20px;
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
          color:#000;
          display: inline-block;
          margin:0 4px;
            &:first-child{
              margin-left:0
            }
        }
      }
    }
    .form_box{
      p{
        color: #f80202;
        padding:10px 0;
        font-size:16px;
        line-height:25px;
      }
      margin-top: 20px;
      border-top: 1px #d3d3d3 solid;
      label{
        padding:20px 0;
        display:block;
        span{
          width: 25%;
          text-align: right;
          font-size: 14px;
          display:inline-block;
          font-family: "microsoft yahei";
        }
        input{
          padding:5px 10px;
        }
        select{
        	border: 1px #d3d3d3 solid;
        	padding: 5px 10px;
        }
        i{
          font-size: 25px;
          display: inline-block;
          padding-left: 5px;
          position: relative;
          top: 5px;
        }
      }
      h4{
        text-align: center;
        font-weight: normal;
      }
      button{
        width: 40%;
        height: 30px;
        line-height: 28px;
        font-size: 15px;
        border:0;
        margin:auto;
        margin-top: 20px;
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
				width: 80px;
				height: 80px;
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
