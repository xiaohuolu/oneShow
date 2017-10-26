<template>
	<div id="member">
    <div class="banner">
      <img src="/static/img/201702161.png">
    </div>
    <div class="title">
      <div class="title1000">
      	个人会员计划
      </div>
    </div>
    <div class="content">
			<div class="pc_erji">
					<div class="pc_erji_head">
							{{lanmu}}
					</div>
					<div class="pc_erji_list">
							<ul>
								<li v-for="(articalList,i) in articalLists" :class="{'current' : i == currentCtrl}" @click="location(i)">
									<span ><img src="/static/img/icon1.png" alt="" ></span>{{articalList.name}}
								</li>
							</ul>
					</div>
			</div>
			<div class="plan_head" style="">
				<div v-html="html"></div>
				</div>

			
				<h4 >
					最新加入的VIP：</h4>
				<div class="clear" style="margin: 0px;">
					&nbsp;</div>
				<div class="memeber_img" id="memeber_img">
					<div class="box_img memeber_imgs" v-for="vip in vips">
						<img  :src="'http://www.oneshow.cn:8088'+vip.face" />
					</div>


				</div>
				<div class="clear" style="margin: 0px;">
					&nbsp;</div>
				<!-- <h4 >
					One Show个人会员将获得以下权益：</h4>
				<p >
					1获得由The One Club官方授予的会员证书<br />
					<br />
					2获得One Show官方会员纪念品1份<br />
					<br />
					3免费参加由OneShow官方组织的&ldquo;Open Day&rdquo;活动，参观国际4A广告公司和知名创意机构，打开视野并因此得到宝贵的面试机会！（北京、上海地区即将开通）<br />
					<br />
					4在线阅读OneShow中华青年奖历年获奖年鉴作品集<br />
					<br />
					5加入OneShow个人会员专属群，定期分享创意资讯、行业新闻、经典案例<br />
					<br />
					6获得OneShow官方微店VIP2会员，专享官方纪念品8折优惠<br />
					<br />
					7获得由OneShow官方推送的行业招聘信息及国际4A公司的工作机会和简历投送待遇<br />
					<br />
					8获得当年OneShow中华青年创新竞赛免费参赛券1张<br />
					<br />
					9获得当年由OneShow举办的青年面试日、校园创新峰会、创意沙龙等线下活动的免费参与名额<br />
					<br />
					10获得OneShow青年创意研习社群课免费参与名额，在线收听业内大咖的主题分享和创意讲座<br />
					<br />
					11在OneShow中国官方网站体现作为个人会员的资格及标志<br />
					&nbsp;</p> -->
				<div v-html="html2"></div>
				<h4 >
					One Show历年获奖年鉴在线阅读：</h4>
				<p>
					&nbsp;</p>
				<div class="member_img2 clear" id="memeber_imgs2">
					<div v-for="(item,i) in items" >
						<img @click="checkPdf(i)" :src="item.src">
					</div>
				</div>
				<p>
					&nbsp;</p>
				<p>
					&nbsp;</p>
					<h3>个人会员年费：128 RMB</h3>
					<div class="clear mobile_hide" style="margin: 0px;">
							<img @click="goSign()" class="member_btn" src="/static/img/member_btm.png" style="margin: 20px 0px 0px; color: rgb(23, 23, 23); font-family: Avenir, Helvetica, Arial, sans-serif; font-size: medium; white-space: normal; width: 100%;" />
					</div>
					<div class="clear pc_hide" style="margin: 0px;">
							<img @click="goSign()" class="member_btn" src="/static/img/member_btm_mobile.png" style="margin: 20px 0px 0px; color: rgb(23, 23, 23); font-family: Avenir, Helvetica, Arial, sans-serif; font-size: medium; white-space: normal; width: 100%;" />
					</div>
				<p>
					&nbsp;</p>
    </div>
		<loginBox v-if="show"></loginBox>
	</div>
</template>
<script>
import loginBox from '@/components/comment/login';
export default {
  name: 'member',
  data() {
  	return {
	    data:{
	      categorieId:'474f429635134ee39cda61b86dda6d09',
	    },
	    html:'',
		currentCtrl:3,
		lanmu:'',
		articalLists:null,
		vips:null,
		show:false,
		html2:'',
		index:1,
		items:[
			{
				src:'http://123.57.15.15:8080/oneshow/userfiles/1/images/cms/article/2017/08/hb12.jpg',
				link:'http://www.oneshow.cn:8088/file/nianjian_2012.pdf'
			},
			{
				src:'http://123.57.15.15:8080/oneshow/userfiles/1/images/cms/article/2017/08/hb15.jpg',
				link:'http://www.oneshow.cn:8088/file/nianjian_2013.pdf'
			},
			{
				src:'http://123.57.15.15:8080/oneshow/userfiles/1/images/cms/article/2017/08/2016090512.jpg',
				link:'http://www.oneshow.cn:8088/file/nianjian_2014.pdf'
			},
			{
				src:'http://123.57.15.15:8080/oneshow/userfiles/1/images/cms/article/2017/08/2016090513.jpg',
				link:'http://www.oneshow.cn:8088/file/nianjian_2015.pdf'
			},
			{
				src:'http://123.57.15.15:8080/oneshow/userfiles/1/images/cms/article/2017/08/haibao2016_small.jpg',
				link:'http://www.oneshow.cn:8088/file/nianjian_2016.pdf'
			},
			{
				src:'http://123.57.15.15:8080/oneshow/userfiles/1/images/cms/article/2017/08/last.png'
			}
		]

  	}
  },
  props: {},
  filters: {},
  created() {
		this.getlanmu(),
    this.geiArtical(),
		this.imgOn()
  },
  methods: {
		imgOn(){
			setTimeout(()=>{
				let imgDoc = document.getElementsByClassName('memeber_imgs');
				let imgWidth = imgDoc[2].clientWidth;
				for (let i = 0; i < imgDoc.length; i++) {
					imgDoc[i].style.height = imgWidth+10+"px";
				}
				let imgDoc2 = document.getElementById('memeber_imgs2');
				
				let imgWidth2 = imgDoc2.childNodes[0].children[0].clientWidth;
				for (let i = 0; i < imgDoc2.childNodes.length; i++) {
					imgDoc2.childNodes[i].children[0].style.height = imgWidth2+"px";
				}
				
			},500)
		},
    geiArtical(){
      this.utils.ajax(this,'/app/vips',{data:'1111'}, false).then((res) => {
         this.vips = res.data.vips;
      });
    },
	getlanmu(){
		this.utils.ajax(this, '/app/articleData', this.data, false).then((res) => {
				this.lanmu = res.data.lanmu.name;
				this.articalLists = res.data.wenzhang;
				this.html = res.data.articles[0].content
				this.html2 = res.data.articles[1].content
		})
	},
	checkPdf(i){
		if (sessionStorage.token== undefined) {
			if(this.utils.userIf()){
				this.$toast({
					message: '请到上方先登录',
					position: 'center',
					duration: 3000
				})
			}else {
				this.show = true
			}
		}else {
			let tokenData = sessionStorage.token.split('/');
			console.log(tokenData);
			let uid = tokenData[0]
			this.utils.ajax(this,"/user/isVip",{uid:tokenData[3]},false).then((res)=>{
				console.log(res.data.isVip);
				if (res.data.isVip == 1) {
					if ( i != 5) {
						window.location.href = this.items[i].link
					}
					
				}else{
					this.$toast({
						message: '点击下方按钮注册会员可查看',
						position: 'center',
						duration: 3000
					})
				}
			})
		}
	},
	location(i){
		console.log(i);
		if (this.articalLists[i].id == '71d12250949149b5b152683fcfc3a121') {
				this.$router.push('/youth/ambassador')
		}else if (this.articalLists[i].id == '474f429635134ee39cda61b86dda6d09') {
				this.$router.push('/youth/member')
		}else {
			this.$router.push('/artical'+'/'+this.articalLists[i].id)
		}
	},
	goSign(){
		if (sessionStorage.token== undefined) {
			if(this.utils.userIf()){
				this.$toast({
					message: '请到上方先登录',
					position: 'center',
					duration: 3000
				})
			}else {
				this.show = true
			}
		}else {
				this.$router.push('/youth/memebersign')
		}

	}
  },
  components: {
		loginBox
  }
}
</script>
<style  lang="scss">
 #member{
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
 			background:#fff;
 			padding: 20px;
 			.pc_erji{
 				display: none
 			}
 			/*
 				段落
 			 * */
 		
		p{
			font-size: 14px;
			font-family: "microsoft yahei";
			line-height: 23px;
			&:nth-child(1){
				padding:0
			}
		}

 		h4{
 			margin: 8px 0;
 		}
 		img{
 			margin: 10px 0;
 		}
 		img:last-child{
 			margin: 20px 0;
 		}
 		img:first-child{
 			margin: 0;
 		}
 		/*二维码*/
 		.contect_box{
 			img{
 				width: 50%;
 				margin: 10px auto;
 				margin-top: 20px;
 				display: block;
 			}
 			h4{
 				font-size: 15px;
 				text-align:center;
 				color: #bb4545;
 			}

 		}
 		.head_2{
 			text-align: center;
 			img{
 				width: 28%;
 				display: inline-block;

 			}
 		}
 		/*
 		 * 个人会员计划
 		 */
 		.memeber_img{
 			.box_img{
 				width:22%;
 				margin: 3%;
 				margin-top: 0;
 				margin-left:0 ;
 				float: left;
 				box-sizing: border-box;
 				border: 5px #f0f0f0 solid;
				display: flex;
				justify-content: center;
				align-items: center;
				img{
					max-width: 100%;
					max-height: 100%;

				}
 				&:nth-child(4n){
 					margin-right: 0;
 				}
 			}
 		}
 		.member_img2{
 			cursor:pointer;
 			img{
 				width: 30%;
 				float: left;
 				margin: 3%;
 				margin-top:0;
 				margin-left: 0;
 				&:nth-child(3n){
 					margin-right:0;
 				}
 			}
 		}
 		/*
 		type1 的下拉
 		 * */
 		.play1{
 			padding: 20px 0;
 			.new_box{
 					padding: 20px 0;
 					.new_head{
 						padding: 15px 0;
 						border-bottom: 1px #949393 solid;
 						span{
 							display: block;
 							color:#d3be95;
 							margin-right: 10px;
 							font-size: 25px;
 							transform:rotate(90deg);
 							transition: all .5s;
 							&.tran{
 								transform:rotate(180deg);
 							}
 						}
 						h2{
 							width:80%;
 							font-size: 20px;
 								color:#949393;
 						}
 					}
 					.body{
 						height: 0;
 						opacity: 0;
 						overflow:hidden;
 						transition:opacity 1.5s;
 						transition:padding .3s;

 						&.show{
 							height: auto;
 							padding: 20px 0;
 							opacity:1;
 						}
 						h4{
 							font-size: 16px;
 							color: #b39b6a;
 						}
 						p{
 							font-size: 14px;
 							font-family: "microsoft yahei";
 							line-height: 23px;
 							padding: 10px 0;
 						}
 					}
 			}

 		}

 		/*
 		 type2 的下拉
 		 * */
 		.play2{
 			.box_head{
 					padding: 20px 0;
 					border-bottom: 1px #949393 solid;
 					span{
 						display: block;
 						color:#d3be95;
 						margin-right: 10px;
 						font-size: 25px;
 						transition:all .5s;
 						transform:rotate(90deg);
 						margin-bottom: 20px;
 						&.tran{
 								transform:rotate(180deg);
 						}
 				}
 					h2{
 						width:80%;
 						color:#949393;
 						font-size: 19px;
 					}
 			}
 				.box_main{
 					opacity: 0;
 					height: 0;
 					overflow: hidden;
 					transition:opacity 1s;
 					p{
 						padding: 10px 0;
 						line-height:23px;
 						font-size: 14px;
 						color:#3c3c3c;
 						font-family: "microsoft yahei";
 						font-weight: 400;
 					}
 					&.show{
 						opacity:1;
 						height: auto;
 					}
 			}
 		}
 		/*
 			名人堂循环弹窗
 		 * */
 		.play3{
 			.img_box{
 				display: inline-block;
 				width: 45%;
 				margin: 2.5%;
 				margin-bottom: 0;
 				img{
 					width: 100%;
 					margin: 0;
 				}
 				h4{
 					font-size: 16px;
 					color: #333;
 					white-space: nowrap;
 					overflow: hidden;
 					text-overflow: ellipsis;
 					margin-bottom: 10px;
 				}
 			}
 			.layer{
 				width: 100%;
 				height: 100%;
 				z-index: 99;
 				background: rgba(0,0,0,0.5);
 				position: fixed;
 				top: 0;
 				left: 0;
 				opacity: 0;
 				display: none;
 				transition: opacity 1s;
 				&.show{
 					opacity: 1;
 					display: block;
 				}
 			}
 			.content_box{
 				position:fixed;
 				top: 50%;
 				left:50%;
 				width: 85%;
 				max-width: 327px;
 				z-index: 100;
 				height:70%;
 				transform: translate(-50%,-50%);
 				background: #000;
 				padding: 30px 15px;
 				box-sizing: border-box;
 				i{
 					position: absolute;
 						right: -0px;
 						top: -6px;
 						color: #fff;
 						padding: 10px;
 						z-index: 2000;
 						font-size: 30px;
 				}
 				.over_row{
 					overflow-y: auto;
 					height: 100%;
 					width: 100%;
 					color: #fff;
 					font-size: 13px;
 					img{
 						width:45%;
 						float: left;
 						margin: 0;
 						margin-right: 10px;

 					}
 					.jianli{
 						min-height: 130px;
 						padding-bottom: 10px;
 						font-size: 12px;
 						h3{
 							font-size: 16px;
 							margin-bottom: 5px;
 							white-space: nowrap;
 							overflow: hidden;
 							text-overflow: ellipsis;
 						}
 						p{
 							font-size: 13px;
 						}
 					}

 				}
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
 				.pc_erji{
 					display: block;
 					position: absolute;
 					height: auto;
 					top:-110px;
 					right: 0;
 					min-height: 375px;
 					min-width: 230px;
 					.pc_erji_head{
 						height: 50px;
 						width: 100%;
 						background: #4d4d4d;
 						font-size:22px;
 						text-align:center;
 						margin-bottom:20px;
 						line-height: 50px;
 						color: #eaeaea
 					}
 					.pc_erji_list{
 						background: #a4a4a4;
 						width: 100%;
 						color: #cfcfcf;
 						padding:10px 0;
 						ul{
 							padding-left: 0
 						}
 						li{
 							height: 40px;
 							line-height: 35px;
 							margin: 5px 0;
 							font-size: 18px;
 							cursor: pointer;
 							padding-left: 20px;
 							padding-right: 10px;
 							span{
 								opacity: 0;
 								position: relative;
 								top: 10px;
 								transition: all .3s;
 							}
 							a{
 								color: #cfcfcf;
 								transition: all .3s;
 							}
							&:hover{
								color: #fff;
								span{
									opacity: 1
								}
							}
							&.current{
								span{
									opacity: 1
								}

									color: #fff;

							}
 						}
 					}
 				}
 			}
 	}
 }
</style>
