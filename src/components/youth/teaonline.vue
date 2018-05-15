<template>
	<div id="teaonline">
   <div class="banner">
      <img src="/static/img/teashear_banner.png">
    </div>
    <div class="title">
			<div class="title1000">
				教师分享计划
			</div>

    </div>
    <div class="content">
      <label>
        <h5>· 姓名：</h5>
        <input class="l" v-model="data.name" type="" name=""><i class="l">*</i>
        <div class="clear"></div>
      </label>
			<label>
        <h5>· 联系电话：</h5>
        <input class="l" type="" v-model="data.moblie" name=""><i class="l">*</i>
        <div class="clear"></div>
      </label>
			<label>
        <h5>· Email：</h5>
        <input class="l" type="" v-model="data.email" name=""><i class="l">*</i>
        <div class="clear"></div>
      </label>
			<label>
        <h5>· 就职院校：</h5>
        <input class="l" type="" name="" v-model="data.school"><i class="l">*</i>
        <div class="clear"></div>
      </label>
			<label>
        <h5>· 院系：</h5>
        <input class="l" type="" name="" v-model="data.yuanxi"><i class="l">*</i>
        <div class="clear"></div>
      </label>
			<label>
        <h5>· 主讲课程：</h5>
        <input class="l" type="" name="" v-model="data.kecheng"><i class="l">*</i>
        <div class="clear"></div>
      </label>
			<label>
        <h5>· 您在学校担任哪类职务？：</h5>
        <input class="l" type="" name="" v-model="data.zhiwu"><i class="l">*</i>
        <div class="clear"></div>
      </label>
      <label >
        <h5>·是否指导过学生参加OneShow中华青年创意竞赛或其他竞赛？</h5>
        <mt-radio
          v-model="data.zhidao"
          :options="[{value:'1',label:'是'},{value:'0',label:'否'}]">
        </mt-radio>
        <div class="clear"></div>
      </label>
      <label>
        <h5>· 对OneShow组织的活动有何建议及方案？（选填）</h5>
        <textarea v-model = 'data.jianyi'>
        </textarea>
      </label>
      <h4>· 您可以推荐以为学生成为OneShow中华青年创意竞赛校园大使<br></h4>
      <label class="recommended">
        <span>被推荐人姓名：</span><input v-model="data.tuijianren" type="text" name=""><i>(必填)</i>
      </label>
      <label class="recommended">
        <span>被推荐人手机号：</span><input v-model="data.tuijianren_phone" type="text" name=""><i>(必填)</i>
      </label>
      <mt-button size="small" @click="online()">提交</mt-button>
    </div>
	</div>
</template>
<script>

export default {
  name: 'teaonline',
  data() {
  	return {
     value:'',
		 data:{
			 name:'',
			 moblie:'',
			 email:'',
			 school:'',
			 yuanxi:'',
			 kecheng:'',
			 zhiwu:'',
			 zhidao:null,
			 jianyi:'',
			 tuijianren:'',
			 tuijianren_phone:'',
			 uid:''
		 }
  	}
  },
  props: {},
  filters: {},
  created() {},
  methods: {
		online(){
			// if (sessionStorage.token == undefined) {
			// 	if (this.utils.userIf()) {
			// 		this.$toast({
			// 			message: '请到页面上方点击登录',
			// 			position: 'center',
			// 			duration: 3000
			// 		})
			// 	}else {
			// 		this.$router.push('/mine');
			// 		this.$toast({
			// 			message: '请先登录',
			// 			position: 'center',
			// 			duration: 3000
			// 		})
			// 	}
			// }else {
				// let tokenData = sessionStorage.token.split('/')
				// let length =  tokenData[2].length;
				// this.data.uid = tokenData[3];
				// console.log(this.data);
				this.utils.ajax(this,'/app/teachersSharing',this.data,false).then((res)=>{
					console.log(res);
					this.$toast({
						message: '报名成功',
						position: 'center',
						duration: 3000
					})
				})
			// }
		},
		aaa(){
			if (sessionStorage.token== undefined) {
				this.$router.push('/mine');
				Toast({
					message: '请先登录',
					position: 'center',
					duration: 3000
				})
			}else {
				let tokenData = sessionStorage.token.split('⊰')
				this.loginData.email = tokenData[0];
				let length =  tokenData[2].length;
				this.applyList.uid = tokenData[3];
				this.loginData.password = tokenData[2].substring(0,length-2);
				this.$http.post(this.utils.baseUrl+'/login',this.loginData).then((res)=>{
						this.userList = res.data.data.userinfo
				})
			}
		}
	},
  components: {
  }
}
</script>
<style  lang="scss">
 #teaonline{
  .banner{
    width:auto;
    overflow: hidden;
    img{
      width:100%;
    }
  }
  .title{
  	margin-top: -5px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: #020202;
    font-weight: bolder;
    background: #d3d3d3;
    padding:0 20px;
  }
  .content{
    padding: 40px 20px;
    h4{
      line-height: 35px;
      font-size: 16px;
      font-weight: bolder
    }
    p{
      padding: 10px 0;
      line-height:23px;
      font-size: 15px;
      color:#3c3c3c;
      font-family: "microsoft yahei";
      font-weight: 400;
    }
    label{
      h5{
        line-height: 30px;
        font-size: 15px;
        margin: 10px 0;
      }
      input{
        padding:5 10px;
        height: 30px;
        box-sizing: border-box;
        line-height:30px;
        width: 60%;
      }
      i{
        font-size: 30px;
        margin-left: 10px;
      }
      textarea{
        width: 100%;
        min-height: 90px;
      }
      &.recommended{
        padding: 10px 0;
        display: block;
        span{
          font-family: "microsoft yahei";
          font-size: 15px;
        }
        input{
          width: 50%;
        }
        i{
          font-size: 14px;
          font-family: "microsoft yahei"
        }
      }
    }
    .mint-button--default{
      background:#000;
      color:#fff;
      padding: 0 30px;
      font-size: 15px;
      display:block;
      margin: auto;
      font-family: "microsoft yahei";
      margin-top: 30px;
    }
  }
	@media screen and(min-width: 1000px){
		.title1000{
			width: 1000px;
			margin: auto;
		}
		.content{
			width: 1000px;
			box-sizing: border-box;
			padding-right: 290px;
			margin: auto;
			label{
				input{
					width: 160px;
				}
			}
			label.recommended input{
				width: 160px;
			}
		}
	}
 }
</style>
