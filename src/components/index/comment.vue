<template>
	<div id="commont">
		<div class="banner " :class="{'home' : isHome }">
	      <img :src="banner">
	    </div>
	    <div class="title">
				<div class="title1000">
					{{title}}
				</div>
	    </div>

	    <div class="content" v-if="reload">
					<div class="pc_erji">
							<div class="pc_erji_head">
									{{lanmu}}
							</div>
							<!-- <router-link :to="articalList.id"></router-link> -->
							<div class="pc_erji_list">
									<ul>
										<li v-for="(articalList,i) in articalLists" :class="{'current' : i == currentCtrl}" @click="location(i)">
											<span><img src="/static/img/icon1.png" alt=""></span>{{articalList.name}}
										</li>
										<li v-if=" special == 3  ">
											<span style="opacity:1"><img src="/static/img/enter3.png" alt=""></span><a href="http://festival.oneshow.cn/">ONE SHOW中华创意节</a>
										</li>
									</ul>
							</div>
							<!-- 三个 -->
							<div class="pc_enter" v-if=" special == 1 || special == 2 ">
									<div class="enter">
											<a href="http://www.oneshow.cn:8088/file/2017call_for_entry.zip">
												<img src="/static/img/enter1.png" alt="">
											</a>
									</div>
							</div>
							<div class="pc_enter" v-if=" special == 1  ">
									<div class="enter">
										<router-link to="/creative/answer">
											<img src="/static/img/enter2.png" alt="">
										</router-link>
									</div>
							</div>
							<div v-if=" special == 3 " class="spe pc_erji_head download" style="margin-bottom:0;height:60px;color:#5e5f62;font-size:18px; background:#c3c3c3;line-height:60px;">
									<span><img style="position:relative;top:7px" src="/static/img/icon3.png" alt=""></span><a href="http://www.oneshow.cn:8088/file/2017_Call_for_Entries.zip">征稿函下载</a>
							</div>
							<div v-if=" special == 3 " @mouseover = "pingtai = 1"  @mouseleave = "pingtai = 0" class="spe pc_erji_head weixin" style="height:60px;color:#5e5f62;font-size:18px; background:#c3c3c3;line-height:60px;">
									<span><img style="position:relative;top:7px" src="/static/img/icon4.png" alt=""></span>官方微信互动平台
							</div>
							<div v-if=" special == 3 " class="pingtai" :class="{'showping': 1 == pingtai}">
									<img src="/static/img/icon5.png" alt="">
							</div>
							<div v-if=" special == 3 " class="spe pc_erji_head" style="height:70px;color:#eaeaea;background:#7d7d7d;line-height:70px;">
									<span><img style="position:relative;top:7px" src="/static/img/icon2.png" alt=""></span><a target="_blank" style="font-size:22px;" href="http://enter.oneshow.cn/">立刻申奖</a>
							</div>
					</div>
					<!--  -->
					<div class="row" v-html="html">
					</div>
					<!--diyizhong list-->
					<div class="play1"  v-if="type1" >
					  	<div class="new_box" v-for="(item,i) in items1" key="i" >
							<div @click.stop.prevent="ctrl(i,$event)" class="new_head animate_head">
									<span :class="{'iconfont icon-arrow_top l':1==1,'tran': show == i }"></span><h2 class="l" v-html="item.description"></h2>
				      			<div class="clear"></div>
							</div>
							<div  :class=" {'body': 1 == 1,'body show': show == i }" v-html="item.content">
							</div>
						</div>
					</div>
					<!--diyizhong list-->
					<div class="play2" v-if="type2">
				  		<div class="business_box" v-for="(item,i) in items1" key="i">
					        <div class="box_head animate_head"   @click.stop.prevent="ctrl(i,$event)">
					          <span :class="{'iconfont icon-arrow_top l': 1==1 ,'tran' : show == i   }"  ></span><h2 class="l" v-html="item.keywords"></h2>
					          <h2 v-html="item.description"></h2>
					          <div class="clear"></div>
					        </div>
					        <div :class="{ 'box_main': 1 == 1,'box_main show': show == i }"  v-html="item.content">
					        </div>
				     	</div>
					</div>
					<div class="play3" v-if="type3" >
						<div class="layer" @click="closeTran" :class="{'show' : layer > -1 }"></div>
					  	<div class="img_box" @click="trans(i)" v-for="(item,i) in items1" key="i" >
					  		<img :src="'http://123.57.15.15:8080/'+item.image"  alt="" />
					  		<h4>{{item.keywords}}</h4>
					  	</div>
					  	<div class="content_box"  v-for="(item,i) in items1" key="i"   v-show="cont == i"  >
					  		<i @click="closeTran()" class="iconfont icon-chuyidong"></i>
					  		<div class="over_row" v-html="item.content"></div>
					  	</div>
					</div>
					<div class="row" v-html="footer">

					</div>

					<div class="row">
							<div class="memeber_img">
									<img v-for="imgmem in imgList" src="http://123.57.15.15:8080/oneshow/userfiles/1/images/cms/article/2017/08/vip2.png" alt="">
							</div>
					</div>
	    </div>
			<mt-popup v-model="popupVisible"  position="top">
	  			<button class="close_btn"  @click="popupVisible = false"><span class="iconfont icon-chuyidong" style="font-size: 35px;"></span></button>
	  			<div class="imgbox">
	  				<img src="/static/img/stort111.png" alt="" />
	  				<h4>ONE SHOW官方微店</h4>
	  			</div>
	    </mt-popup>
	    <!-- 海报点击放大效果 -->
	    <div id="haibaodom">
	    	<button class="close_btn" id="haibaoClose"><span class="iconfont icon-chuyidong" style="font-size: 35px;"></span></button>
	    	<img src="">
	    </div>
			<div class="layer1" id="layer1">

			</div>
	</div>
</template>
<script>

export default {
  name: 'commont',
  data() {
  	return {
  		type1:false,
  		type2:false,
  		type3:false,
			popupVisible:false,
  		banner:'',
			pingtai:0,
  		data:{
  			categorieId:0,
  		},
      	title:'',
      	content:[],
      	html:'',
      	footer:'',
      	items1:[],
      	show:-1,
    	offset:[],
    	popupVisible2:false,
    	haibaoImg:'http://www.oneshow.cn:8088/images/hb15.jpg',
    	cont:-1,
    	layer:-1,
    	reload:'false',
    	count:0,
		currentCtrl:2,
		imgList:[],
		loginData:{
			'email' : '',
		  'password' : ''
		},
		lanmu:'',
		special:1,
		articalLists:[],
		isHome:false
  	}
  },
  props: {},
  filters: {},
  created() {
  	this.geiArtical()
  },
  methods: {
	  reset(){
	  		//重置
		  	document.title = "ONE SHOW国际创意节中文网",
		  	this.html='',
			this.isHome=false,
		    this.footer='',
		  	this.type1=false,
		  	this.type2=false,
		  	this.type3=false,
		  	this.data.categorieId = this.$route.params.id,
		  	this.content = [],
		  	this.items1=[];
		  	this.offset=[];
		  	this.count=0;
		  	this.show = -1;
				this.special = 0;
				this.articalLists = []
	  },
	  geiArtical(){
	  	this.reset();
			this.bannerIs();
	  	// 重新获取赋值
	    this.utils.ajax(this, '/app/articleData', this.data, false).then((res) => {
					this.lanmu = res.data.lanmu.name;

					if (this.data.categorieId == '9d4ac1fabab145b08b769c6b1cac853d') {
						this.articalLists[0] = res.data.wenzhang[0];
					}else {
						this.articalLists = res.data.wenzhang;
					}
					for (let c = 0; c < this.articalLists.length; c++) {
						if (this.articalLists[c].id == this.$route.params.id) {
								this.currentCtrl = c
						}
					}
	      	if(res.data.articles.length == undefined){
	      		if(res.data.articles == undefined){
		    		window.history.go(-1);
		    	}
	      		this.html = res.data.articles.content;
	      		this.title = res.data.articles.title;
	      		this.banner ='http://123.57.15.15:8080/'+res.data.articles.image.replace('/_thumbs','')
	      	}else{
	      		for(var i = 0; i < res.data.articles.length ; i ++ ){
					var viewConfig = res.data.articles[i].viewConfig;
					switch(viewConfig){
						case("1"):
							//console.log("第"+i+"个 case为111")
							this.content.push(res.data.articles[i])
							break;
						case("2"):
							this.type1 = true;
							this.items1.push(res.data.articles[i])
							//console.log("第"+i+"个 case为222")
							break;
						case("3"):
							this.type2 = true;
							this.items1.push(res.data.articles[i])
						    break;
						case("4"):
						this.type3 = true;
							this.items1.push(res.data.articles[i])
							break;
						case("5"):
							//console.log("第"+i+"个 case为555")
							break;
						default :
							this.html = '如是混合页面,请注意后台是否选择类型'
							break;
					}
				}
	      		this.banner ='http://123.57.15.15:8080'+res.data.articles[0].image.replace('/_thumbs','')
	      		this.html = this.content[0].content;
	      		if(this.content.length>1){
	      			this.footer =  this.content[1].content;
	      		}
						this.title = this.content[0].title;
	      	}
					this.reload = true;

	      });
				this.specialis()
				setTimeout(()=>{
					this.haibao()
				},1000)

	    },
			bannerIs(){
					this.utils.ajax(this,'/app/index',this.data,false).then((res)=>{
						let homeId = res.data.up;
						let routerHome = this.$route.params.id

						for(let i = 0 ; i < homeId.length ; i++ ){
							//console.log(homeId[i].keywords);
							if (routerHome == homeId[i].keywords) {
								this.isHome = true

							}
						}
					})
			},
			specialis(){
				let paramsId = this.$route.params.id;
				if ( paramsId == '89e8ce41bf964aa7b5a71d4d5486695c' ) {
					console.log(paramsId);
					this.special = 1
				}else if (paramsId == 'd4b71744a1ad45bfbb4dc488edefb589') {
					this.special = 2
				}else if (paramsId == '9d4ac1fabab145b08b769c6b1cac853d') {
					this.special = 3
				}
			},
			location(i){
				console.log(this.articalLists[i].id);
				if (this.articalLists[i].id == '902045e600a94b31a982d41e3578bedb' ) {
					window.location.href="http://festival.oneshow.cn/"
				}else if (this.articalLists[i].id == 'cac5bb4bc80c4760a2908015d7643af3') {
						this.popupVisible = true
				}else if (this.articalLists[i].id == '71d12250949149b5b152683fcfc3a121') {
						this.$router.push('/youth/ambassador')
				}else if (this.articalLists[i].id == '474f429635134ee39cda61b86dda6d09') {
						this.$router.push('/youth/member')
				}else {
					this.$router.push('/artical'+'/'+this.articalLists[i].id)
				}

			},
			tranCurrent(){
					// if (this.$route.params.id == "474f429635134ee39cda61b86dda6d09") {
					// 		this.$router.push('/youth/member')
					// }
			},
	    ctrl(i,e){
	    	// 配合交互第一次点击获取高度
	    	this.count += 1;
	    	if(this.count = 1){
	    		var dom =  document.getElementsByClassName('animate_head');
					for(var a = 0;a < dom.length ; a++){
						this.offset.push(dom[a].offsetTop);
					}
	    	}
			//开的时候置顶  ，关的时候 随意
			if(this.show != i ){
				this.show = i;
				// animate 动画
				var body = document.body.scrollTop;
				var chazhi = body - this.offset[i] + 50 ;
				if( Math.abs(chazhi) >= 10 ){
					// 计算  速度
					var tran = Math.abs(chazhi)/100;
					var h = 0;
					var animate = setInterval(()=>{
						if( chazhi > 0 ){
							h += tran;
							if( h > chazhi ){
								window.clearInterval(animate);
							}
						}
						if( chazhi < 0 ){
							h -= tran;
							if( h < chazhi ){
								window.clearInterval(animate);
							}
						}
						document.body.scrollTop = body - h;
					},1)
				}
			}else {
				this.show = -1
			}
		},
		closeTran(){
			this.cont = -1;
			this.layer = -1;
		},
		trans(i){
			this.cont = i;
			this.layer = i;
		},
		haibao(){
			var haibaoBox = document.getElementById('haibao')
			haibaoBox.onclick = function(event){
				let imgSrcBox = document.getElementById('haibaodom').lastChild
				let imgLength =  event.target.src.length
				imgSrcBox.src = event.target.src.substring( 0, imgLength-4)+'_big.jpg'
				document.getElementById('haibaodom').style.display = 'block'
				document.getElementById('layer1').style.display = 'block';
			}
			document.getElementById('haibaoClose').onclick = function(){
				document.getElementById('haibaodom').style.display = 'none'
				document.getElementById('layer1').style.display = 'none';
			}
		}
  },
  mounted(){

  },
  components: {

  },
  watch:{
   "$route": "geiArtical",
  }
}
</script>
<style  lang="scss">
	#commont{
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
  		margin-top: 0px;
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
		#haibaodom{
			position:fixed;
			width:300px;
			z-index:150;
			height: 520px;
			background:#000;
			top: 50%;
			left: 50%;
			margin-left:-150px;
			margin-top:-260px;
			display:none;
			img{
				position: absolute;
				max-width: 90%;
				max-height: 90%;
				width: 90%;
				top: 50%;
				left: 50%;
				transform:translate(-50%,-50%)
			}
			#haibaoClose{
				position: absolute;
				right: 0;
				top: 0;
				color: #fff;
			}
		}
		@media screen and(min-width:1000px){
			#haibaodom{
				width: 600px;
				margin-left:-300px;
				height: 600px;
				margin-top:-300px;
				img{
					max-width: 80%;
					max-height:80%;
					width: auto;
					height: auto;
				}

			}
		}
		#layer1{
			width: 100%;
			height: 100%;
			z-index: 99;
			background: rgba(0,0,0,0.5);
			position: fixed;
			top: 0;
			left: 0;
			opacity: 1;
			display:none;
		}
		.mint-popup-top{
			background: #000;
			top:50%;
			width: 300px;
			height: 300px;
			margin-top: -150px;
			.close_btn{
				position: absolute;
				right: 0;
				top: 0;
				color: #fff;
				cursor: pointer;
			}
			.imgbox{
				width: 86%;
				margin: auto;
				margin-top: 50px;
				img{
					width: 60%;
					margin: auto;
					display: block;
				}
				h4{
					margin-top: 3%;
					text-align: center;
					font-weight: normal;
					font-size: 14px;
					color: #fff;
				}
				&:last-child{
					margin-top: 50px;
				}
			}
		}
		.content{
		    background:#fff;
		    padding: 20px;
				.animate_head{
					cursor: pointer;
				}
			.pc_erji{
				display: none
			}
		    /*
		     	段落
		     * */
			.row{
				p{
					font-size: 14px;
					font-family: "microsoft yahei";
					line-height: 23px;
					&:nth-child(1){
						padding:0
					}
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
					max-width: 200px;
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
				img{
					width:22%;
					margin: 3%;
					margin-top: 0;
					margin-left:0 ;
					float: left;
					box-sizing: border-box;
					border: 5px #f0f0f0 solid;
					&:nth-child(4n){
						margin-right: 0;
					}
				}
			}
			.member_img2{
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
				.time{
					.jb{
						  clear: both;
					}
					img{
						width: 100%;
					}
				}
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
					    margin-bottom: 28px;
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
					max-width: 1000px;
					max-height: 470px;
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
							max-width: 286px;
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
				.banner{
					height: 249px;
					img{
						height: 100%;
					}
					&.home{
						height: 450px;
					}
				}
				.content .play3 .content_box{
					max-height: 350px
				}
				.title1000{
					width: 1000px;
					margin:auto;
				}
				.content{
					position: relative;
					width: 710px;
					padding-right: 290px;
					margin:auto;
					padding-left: 0;
					.play3{
						.img_box{
							width: 28.3%;
						}
					}
					.pc_erji{
						display: block;
						position: absolute;
						height: auto;
						top:-100px;
						right: 0;
						min-height: 375px;
						min-width: 230px;
						.weixin.pc_erji_head{

						}
						.spe.pc_erji_head{
							padding-left: 20px;
							box-sizing:border-box;
							text-align:left
						}
						.download.pc_erji_head{
							a{
								color:#5e5f62;
								&:hover{
									color:#fff;
								}
							}
						}
						.pc_erji_head{
							a{
								color:#cfcfcf;
								&:hover{
									color: #fff
								}
							}
							cursor: pointer;
							height: 50px;
							width: 100%;
							background: #4d4d4d;
							font-size:22px;
							text-align:center;
							margin-bottom:10px;
							line-height: 50px;
							color: #eaeaea
						}
						.pc_erji_list{
							background: #a4a4a4;
							width: 100%;
							color: #cfcfcf;
							padding:10px 0;
							margin-bottom:10px;
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
						.pingtai{
							width: 100%;
							overflow:hidden;
							height:0;
							transition: all .8s;
							img{
								display: block;
								margin:10px auto;
							}
							&.showping{
								height: 124px;
							}
						}
						.pc_enter{
							width: 100%;
							.enter{
								width: 100%;
								a{
									display: block;
									width: 100%;
									img{
										width: 100%;
									}
								}
							}
						}
					}
				}
		}
		@media screen and(max-width: 600px){
			.hb{
				width: 47%;
				img{
					width: 100%
				}
			}
		}
	}
</style>
