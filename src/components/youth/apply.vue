<template>
	<div id="apply">
		<div class="banner">
      <img src="/static/img/ambassador_banner.png">
    </div>
    <div class="title">
			<div class="title1000">
				校园大使招募计划
			</div>

    </div>
		<div class="content">
			<form class="" action="index.html" method="post">
				<div class="header">
					<div class="header_user">
							<div class="logo_box">
								<img :src="'http://www.oneshow.cn:8088'+face">
							</div>
							<div class="rest_form">
									<router-link to="/information"><button type="button" name="button">如资料有误<br> 点此编辑</button></router-link>
							</div>
					</div>
					<div class="header_infor">
							<label class="cent"  for="">
								<span>姓名:</span>
								<input  type="text" v-model="userList.username"  name="" value="">
							</label>
							<label class="cent"   for="">
								<span>性别:</span>
								<input type="text" v-model="userList.sex" name="" value="">
							</label>
							<label class="cent"  for="">
								<span>学校:</span>
								<input type="text" v-model="userList.school" name="" value="">
							</label>
							<label class="cent"  for="">
								<span>院系:</span>
								<input type="text" v-model="userList.department" name="" value="">
							</label>
							<label class=""  for="">
								<span>所在省市:</span>
								<input type="text" v-model="userList.city" name="" value="">
							</label>
							<label  for="">
								<span>专业:</span>
								<input type="text" v-model="userList.department" name="" value="">
							</label>
							<label  for="">
								<span>联系电话:</span>
								<input type="text" name="" v-model="userList.phone" value="">
							</label>
							<label  for="">
								<span>QQ:</span>
								<input type="text" v-model="userList.qq" name="" value="">
							</label>
							<label  for="">
								<span>E-mail:</span>
								<input type="text" v-model="userList.email" name="" value="">
							</label>
							<label  for="">
								<span>联系地址:</span>
								<input type="text"  v-model="userList.address"name="" value="">
							</label>
					</div>
				</div>
			</form>

			<!-- 需要上传的表单 -->
				<form class=""  urlencode="multipart/form-data" v-if="status == 3 ">
						<div class="user_body">
									<mt-radio
										  title="是否在校内担任职务"
										  v-model="applyList.zhiwu"
										  :options="[{value:'1',label:'是'},{value:'0',label:'否'}]">
									</mt-radio>
									<mt-radio
										  title="是否曾做过ONE SHOW志愿者或其他学生竞赛志愿者？"
										  v-model="applyList.zhiyuan"
										  :options="[{value:'1',label:'是，我曾担任过'},{value:'0',label:'否'}]">
									</mt-radio>
									<mt-radio
										  title="是否参与组织/策划过校际活动？ (如参与过，请对你的工作及效果做简要描述)"
										  v-model="applyList.xiaoji"
										  :options="[{value:'1',label:'是'},{value:'0',label:'否'}]">
									</mt-radio>
									<div class="main">
										<label v-if="applyList.xiaoji==1" for="">
											<textarea v-model="applyList.xiaojimiaoshu" name="name">
											</textarea>
										</label>
										<label for="">
											<span>你的年级</span>
											<input type="text" name="" value="">
										</label>
										<label for="">
											<span>·如有更多自我描述，可上传简历至附件：</span>
											<input type="file" name="" value="" @change="change($event)">
										</label>
									</div>
									<mt-radio
									  title="是否曾参加过One Club China Workshop 青年创意营？"
									  v-model="applyList.workshop"
										  :options="[{value:'1',label:'是'},{value:'0',label:'否'}]">
									</mt-radio>
									<div class="main">
										<label v-if="applyList.workshop==1" for="">
											<span>我曾参加过<input  v-model="applyList.workshopYear" style="width:50px;margin-right:10px;display:inline-block" type="text" name="" value="">年One Club China Workshop 青年创意营</span>
											<br><br>
										</label>
									</div>
									<!-- <mt-radio
									  title="是否指导过学生参加OneShow中华青年创意竞赛或其他竞赛？"
									  v-model="applyList.zhidao"
									  :options="[{value:'1',label:'是'},{value:'0',label:'否'}]">
									</mt-radio> -->
									<div class="main">
										<label for="">
											<span>对One Club China组织的活动有何建议和方案</span>
											<textarea v-model="applyList.jianyi" name="name">
											</textarea>
										</label>
										<label for="">
											<span>[附上自己对本季大使工作的策划案，将有机会为你的学校争取到 一次One Lectrue机会]</span>
											<input type="file"  @change="change1($event)" name="" value="">
										</label>
										<label>
											<span>在你的院系内，你最喜欢的一位广告/艺术类老师是？</span>
										</label>
									</div>
									<div class="daoshi">
										<label class="input">
											<span>姓名：</span>
											<input v-model="applyList.teacher" type="text" name="" value="">
										</label>
										<mt-radio class="project"
										  title="TA是"
										  v-model="applyList.teacherIs"
										  :options="[{'label':'助教','value':'助教'},{'label':'讲师','value':'讲师'},{'label':'副教授','value':'副教授'},{'label':'教授','value':'教授'},{'label':'主任','value':'主任'},{'label':'院长','value':'院长'}]">
										</mt-radio>
										<label class="input">
											<span>主讲课程：</span>
											<input v-model="applyList.kecheng"  type="text" name="" value="">
										</label>
										<label class="input">
											<span>联系方式：(请在输入信息时注明：手机/QQ邮箱)</span>
											<input v-model="applyList.lianxi" type="text" name="" value="">
										</label>
										<mt-radio class="project"
										  title="TA是否曾经执导过One Club China青年创意竞赛？"
										  v-model="applyList.zhidao"
										  :options="[{value:'1',label:'是'},{value:'0',label:'否'}]">
										</mt-radio>
										<label class="input">
											<span style="display:block" >今年你的开学时间是？</span>
											<input v-model="mouth" style="margin: 10px;width:20%;margin-left:0" type="text" name="" value="">月
											<input v-model="year" style="margin: 10px;width:20%" type="text" name="" value="">日
										</label>
									</div>
									<div class="main">
										<label for="">
											<span>其他想对我们说的话？</span>
											<textarea v-model="applyList.xiangshuo" name="name">
											</textarea>
										</label>
										<label for="">
											<span>ONE SHOW宣传物料接收地址</span>
											<input v-model="applyList.youjidizhi" style="width:100%;box-sizing:border-box;;margin-left:0" type="text" name="" value="">
										</label>
										<h3>* 请务必填写清楚，否则审核通过后您将无法收到宣传资料</h3>
										<label for="">
											<span>推荐人</span>
											<input v-model="applyList.tuijianren" style="width:100%;box-sizing:border-box;;margin-left:0" type="text" name="" value="">
										</label>
										<h3>（选填）请务必填写推荐人真实姓名，否则填写无效</h3>
										<label for="">
											<span>推荐人手机号</span>
											<input v-model="applyList.tuijianrenShouji" style="width:100%;box-sizing:border-box;;margin-left:0" type="text" name="" value="">
										</label>
										<h3>*请申请校园大使的同学，请务必将头像换成本人头像。</h3>
									</div>
									<p>
										* 以上资料中，One Club China将对您的手机号码保密；<br>
										QQ/MSN将作为大使之间的常用联络方式公开，<br>
										如不希望公开私人QQ/MSN联系方式，<br>
										我们建议您另申请新的QQ/MSN，作为大使工作专用，进行填写。<br>
									</p>
						</div>
						<button type="submit" @click.prevent="postForm()" name="button">提交</button>
				</form>

				<!-- 审核成功 -->
				<div class="checkBox" v-if="status == 2">
					<h3>成功</h3>
					<ul class="cardList clear">
						<li v-for="(card,i) in cardList">
							<img :src="'http://www.oneshow.cn:8088/auth/'+card.imgurl" v-if='light[i]'>
							<img :src="'http://www.oneshow.cn:8088/auth/'+card.imgurl2" v-if='!light[i]'>
						</li>
					</ul>
				</div>
				<!-- -->
				<div class="checkBox" v-if="status == 1">
						<h3>您的申请失败,请您重新检查信息是否完善真实点击修改！<button class="top"  @click="check()">点击修改</button></h3>
						<formUped></formUped>
						<button class="remark" @click="check()" type="button" name="button">修改资料</button>
				</div>
				<!--  -->
				<div class="checkBox" v-if="status == 0">
						<h3>您的申请正在审核中！<button  class="top" @click="check()">点击修改</button> </h3>
						<formUped></formUped>
						<button class="remark" @click="check()" type="button" name="button">修改资料</button>
				</div>
		</div>
	</div>
</template>
<script>
import formUped from '@/components/comment/formUped';
import { Radio } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  name: 'apply',
  data() {
  	return {
			file1:'',
			value:'',
			loginData:{
				'email':'',
				'password':''
			},
			userList:{
				'username':''
			},
			options1:[
					{
				    label: '是',
				    value: '1'
				  },
				  {
				    label: '否',
				    value: '0'
				  }
			],
			status:3,
			face:'',
			applyList:{
				'uid':'',
				'zhiwu':'',
				'zhiyuan':'',
				'xiaoji':'',
				'workshop':'',
				'zhidao':'',
				'teacherIs':'',
				'xiaojimiaoshu':'',
				'workshopYear':'',
				'jianyi':'',
				'teacher':'',
				'kecheng':'',
				'lianxi':'',
				'kaixue':'',
				'xiangshuo':'',
				'dateline':'',
				'youjidizhi':'',
				'tuijianren':'',
				'tuijianrenShouji':''
			},
			year:'',
			mouth:'',
			files:null,
			files2:null,
			statusMsg:'',
			cardList:null,
			userCard:null,
			light:[false,false,false,false,false,false,false,false]
  	}
  },
  props: {},
  filters: {},
  created() {
		this.getMine()
	},
  methods: {
		check(){
			this.status = 3
		},
		getMine(){
			if (sessionStorage.token== undefined) {
				if (!this.utils.userIf()) {
					this.$router.go(-1)
				}
				Toast({
					message: '请先登录',
					position: 'center',
					duration: 3000
				})
			}else {
				let tokenData = sessionStorage.token.split('/')
				this.loginData.email = tokenData[0];
				let length =  tokenData[2].length;
				this.applyList.uid = tokenData[3];
				this.loginData.password = tokenData[2].substring(0,length-2);
				this.$http.post(this.utils.baseUrl+'/login',this.loginData).then((res)=>{
						this.userList = res.data.data.userinfo
						this.face = this.userList.face
						if (this.userList.sex == 1) {
							this.userList.sex = '男'
						}else if( this.userList.sex == 2 ){
							this.userList.sex = '女'
						}
				})
				// 判断 申请状态   改变页面内容
				this.utils.ajax(this,'/app/ambassador',{uid:this.applyList.uid},false).then((res)=>{
					this.status = res.data.sss;
					if( res.data.sss == 0 || res.data.sss == 1 ){
						this.applyList = res.data.Ambassador[0]
						this.year = this.applyList.kaixue.split('-')[0];
	            		this.mouth = this.applyList.kaixue.split('-')[1];
					}else if ( res.data.sss == 2 ) {
						this.cardList = res.data.ambassadorCard;

						this.userCard = res.data.userCard

						for (let i = 0; i < this.cardList.length; i++) {
							for (let j = 0; j  < this.userCard.length; j++) {
								if(this.cardList[i].cardId == this.userCard[j].cardId ){
									this.light[i] = true;
								}
							}
						}
					}
				})
			}
		},
		change1(e){
			this.files2 = e.target.files[0];
			//console.log(e.target.files[0])
		},
		change(e) {
			this.files = e.target.files[0];
			//console.log(e.target.files[0])
		},
		postForm(){
			this.applyList.kaixue = this.year +'-'+ this.mouth;
			let fm = new FormData();
			for(let i in this.applyList){
				fm.append(i, this.applyList[i])
			}
			console.log(fm);
			fm.append('jfile',this.files);
			fm.append('uid',this.applyList.uid)
			fm.append('cfile',this.files2)
			this.$http.post(this.utils.baseUrlApp+'/uploadAmbassadorInfo',fm).then((res)=>{
				let msg;
				if (res.body.data != 0 ) {
				 	msg= res.body.data.errmsg
				}else {
					msg= '申请成功，正在审核'
				}
				Toast({
					message: msg,
					position: 'center',
					duration: 3000
				})
				setTimeout(()=>{
					this.$router.go(0);
				},3000)
			})
		}
	},
  components: {
		formUped
  }
}
</script>
<style  lang="scss">
 #apply{
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
	 @media screen and(max-width:1000px){
	 	.title{
		 	margin-top: -6px;
	 	}
	 }
	 .content{
	 	padding: 30px;
		.checkBox{
			button.top{
				color: #fb6b6b
			}
			button.remark{
				width: 100px;
				color: #fff;
				background: #000;
				height:40px;
				display: block;
				margin:auto;
				margin-top: 30px;
			}
			h3{
				font-size: 16px;
				line-height: 50px;
				margin-bottom: 20px;
				color: #1eb7fb;
				&:first-child{
					text-align: center;
				}

			}
			.cardList{
				li{
					float: left;
					padding-bottom: 20px;
					margin-left: 10px;
				}
			}
		}
		form{
			.header{
				height: auto;
				padding-bottom: 20px;
				display: flex;
			}
			.header_user{
				width: 105px;
				.logo_box{
					width:105px;
					height: 105px;
					border: 1px #d3d3d3 solid;
					box-sizing: border-box;
					padding: 5px;
					display: flex;
					align-items: center;
					justify-content:center;
					img{
						max-width: 100%;
						max-height: 100%;
					}
				}
				.rest_form{
					margin-top:43px;
					width: 100%;
					button{
						width: 100%;
						background: #000;
						color: #fff;
						border: 0;
						height:47px;
						font-size: 13px;
					}
				}
			}
			// **************/
			.header_infor{
				flex:1;
				font-size: 13px;
				padding-left: 10px;

				label{
					margin-top:5px;
					width: 100%;
					display:inline-block;
					margin-bottom:16px;
					&.cent{
						width: 49%;
						input{
							width: 50%;
						}
					}
					span{
						font-weight:bolder;
						display: inline-block;
					}
					input{
						display:inline-block;
						width: 60%;
						border:0
					}
				}
			}
			// 下面
			.user_body{
				padding-top: 20px;
				border-top:1px #d3d3d3 solid;
				p{
					margin-top:20px;
					color: #030303;
					font-size: 14px;
					line-height: 14px;
				}
				input{
					border-radius: 5px;
				}
				.mint-radiolist-title{
					font-size: 14px;
					font-weight: bolder;
					color: #000;
					&:before{
						content: '· ';
						font-size: 16px;
						font-weight: bolder;
					}
				}
				.mint-radiolist-label{
					span{
						font-size: 12px;
					}
				}
				.mint-cell-wrapper{
					height: 30px;
				}
				.main{
					h3{
						font-size: 13px;
						color: #c00;
						font-weight: normal;
					}
					label{
						margin: 20px 0;
						span{
							font-size: 14px;
							font-weight: bolder;
							color: #000;
							&:before{
								content: '· ';
								font-size: 16px;
								font-weight: bolder;
							}
						}
						textarea{
							margin: 10px 0;
							border-radius: 5px;
							width: 100%;
							min-height:100px;
						}
						input{
							display: block;
							margin:10px 0;
							padding:5px 10px;
							margin-left: 10px;
						}
					}
				}
				.daoshi{
					label.input{
						span{
							font-weight:bolder;
							display: block;
							font-size: 13px;
							padding-left: 10px;
						}
						input{
							display: inline-block;
							margin:10px 0;
							padding:5px 10px;
							margin-left: 10px;
						}
					}
					.project{
						a{
							display : inline-block;
							width:auto;
						}
					}
				}
			}
			button{
				height: 35px;
				width:100px;
				background: #000;
				border: 0;
				color: #fff;
				display: block;
				margin: auto;
				margin-top: 20px;
			}
		}
	 }
	 @media screen and (min-width:1000px){
	 	.title1000{
	 		width: 1000px;
			margin: auto;
	 	}
		.banner{
			height: 249px;
			img{
				height: 100%;
				width: auto;
			}
		}
	 	.content{
	 		width: 1000px;
			box-sizing: border-box;
			padding-right: 290px;
			margin: auto;
			form{
				.header{
					width: 500px;
				}
			}
	 	}
	 }
 }
</style>
