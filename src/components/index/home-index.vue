<!-- 首页 -->
<template>
	<div id="home-index" >
		<!-- banner -->
		<mt-swipe id="swipe" class="pc_hide" v-if="!this.utils.userIf()" :auto="4000" :stopPropagation="true">
		  <mt-swipe-item  v-for="(item,i) in imgitems" key="i">

		  		<img  @click="goHref(i,1)" class="imgWidth" :src="'http://123.57.15.15:8080'+item.image">

		  </mt-swipe-item>
		</mt-swipe>

		<mt-tab-container  v-if="this.utils.userIf()" v-model="indexSwipe" class="mobile_hide pc_banner" 	:swipeable="false">
			<mt-tab-container-item v-for="(item,i) in imgitems" key="i" :id="i+1" ref="data">
				<div class="tab_list">
						<img @click="goHref(i,1)" :src="'http://123.57.15.15:8080'+item.image" width="100%">
				</div>
			</mt-tab-container-item>
			<div class="index">
				<div class="index_yuan" v-for="i in indexNum" @click="index(i)" :class="{'on': i == indexSwipe}">
				</div>
			</div>
		</mt-tab-container>

			<!-- 通知noticelist -->
		<div class="list_box">
			<ul class="notice_list">
				<li v-for="(articleList,i) in articleLists" key="i" @click="goHref(i)" v-if="i<3">
					<a href="javascript:void(0)"  style="display: flex;color: #171717;">
						<div class="img_box">
							<img :src="'http://123.57.15.15:8080'+articleList.image">
						</div>
						<div class="content_box">
							<h4>
								{{articleList.title}}
							</h4>
							<h3 style="margin-bottom:6px">
									{{articleList.title}}<br>
							</h3>
							<h3>
									{{articleList.description}}
							</h3>
						</div>
					</a>
				</li>
				<!--<li v-for="(articleList,i) in articleLists" key="i" v-if="i==2">
					<router-link style="display: flex;color: #171717;" to="/listenter">
						<div class="img_box">
							<img src="/static/img/index3.png">
						</div>
						<div class="content_box">
							<h4>
								2017 ONE SHOW中华青年奖第一季入围名单公布！
							</h4>
							<h3 style="margin-bottom:6px">
									{{articleList.title}}<br>
							</h3>
							<h3>
									{{articleList.description}}
							</h3>
						</div>
					</router-link>
				</li>-->
			</ul>
		</div>

		<div class="tab_box" id="tab_box">


			<button @click="prev($event)">

				<!-- <img style="color:#eee" width="50px" height="50px"  src="../../../static/img/arrowhead7.png" alt="" /> -->
				<i class="iconfont icon-jiantou"></i>
			</button>
			<button  @click="next($event)">
						<!-- <img width="50px" height="50px"  src="../../../static/img/arrow487.png" alt="" /> -->
				<i class="iconfont icon-jiantou-copy"></i>
			</button>
			<mt-tab-container v-model="active" 	:swipeable="true">
				<mt-tab-container-item v-for="(item,i) in tiemDown" key="i" :id="i+1"  ref="data">
			   	<div class="tab_list">
			   		<img :src="'http://123.57.15.15:8080'+item.image" width="100%">
			   	</div>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>


	</div>
</template>
<script type="text/javascript">
	///static/img/swipe1.png
import { Swipe, SwipeItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
export default {
  name: 'home_index',
  data() {
  	return {
     	active:1,
     	data:{},
     	items:null,
		articleLists:null,
     	imgitems:[],
		tiemDown:[],
		indexSwipe:1,
		indexNum:0,
		tindex:null
  	}
  },
  props: {},
  filters: {},
  created() {
  		this.postIndex(),
			this.auto()
  },
  mounted() {
  },
  methods: {
		index(i){
			this.indexSwipe = i;
		},
  	prev(event){
  		var j = parseInt(this.active)
  		if (j>1) {
  			j--
  		}else {
  			j = this.count
  		}
  		this.active=j;
  	},
  	next(event){
  		var i = parseInt(this.active)
  		if (i<this.count) {
  			i++
  		}else{
  			i=1;
  		}
  		this.active=i;
  	},
	auto(){
     	var	tindex= setInterval(()=>{

			if (this.active<this.tiemDown.length) {
	  			this.active++
	  		}else{
	  			this.active=1;
	  		}
				if (this.indexSwipe <this.imgitems.length) {
					this.indexSwipe ++
				}
				else{
	  			this.indexSwipe=1;
	  		}
			},4000)
		},
  	postIndex(){
  		let vm = this ;
  		this.utils.ajax(this,'/app/index',this.data,false)
			.then((res)=>{
				 console.log(res);
					this.imgitems = res.data.up
					this.indexNum = this.imgitems.length
					this.articleLists = res.data.articleList
					this.tiemDown = res.data.down;
					for (let t = 0; t < this.tiemDown.length; t++) {
							this.tiemDown[t].image = this.tiemDown[t].image.replace('/_thumbs','')
					}
					for (let t = 0; t < this.imgitems.length; t++) {
							this.imgitems[t].image = this.imgitems[t].image.replace('/_thumbs','')
					}
			})
  	},
		goHref(index,type){
			if (type == 1) {
				if ( this.imgitems[index].link == '' ) {
						this.$router.push( '/artical' + '/' + this.imgitems[index].keywords);
				}else {
						window.location.href = this.imgitems[index].link
				}
			}else {
				if ( this.articleLists[index].link == '' ) {
						this.$router.push( '/artical' + '/' + this.articleLists[index].keywords);
				}else {
					  window.location.href = this.articleLists[index].link
				}
			}

		}
  },

  components: {

  },
  computed : {
  		count(){
  			return  event.target.parentNode.parentNode.childNodes[4].childNodes[0].childElementCount
  		}
  }
}
</script>
<style lang="scss">
	#home-index{
		.pc_banner.mint-tab-container{
			height: 450px;
			width: 100%;
			left: 0;
			.mint-tab-container-wrap{
				height: 100%;
				.mint-tab-container-item{
					height: 100%;
					.tab_list{
						height: 100%;
						display: flex;
						justify-content: center;
						align-content: center;
						img{
							height: 100%;
							width: auto;
						}
					}
				}
			}
			.index{
				position: absolute;
				bottom: 55px;
				transform: translateX(-50%);
				left: 50%;
				color: #fff;
				.index_yuan{
					cursor: pointer;
					box-sizing: border-box;
					transition: all .3s;
					background: rgba(202,202,202,0.6);
					border-radius: 50%;
					overflow: hidden;
					width: 10px;
					margin:5px;
					height: 10px;
					display: inline-block;
					&.on{
						background:#ffa838;
						opacity: 0.7;
					}
				}
			}
		}
		#swipe{
			height: 170px;
		}
		.mint-swipe{
			img{
				height: 170px;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
			}
			a{
				display: block;
				width: 100%;
				height: auto;
			}
			.mint-swipe-item{
				height: 100%;
				overflow: hidden;
			}
			.mint-swipe-indicator{
				opacity: 0.4
			}
			.mint-swipe-indicator.is-active{
				opacity:1
			}
			.mint-swipe-indicators{
		      bottom: 3px;
		    }
		}
		@media screen and(max-width: 345px){
				#swipe{
					height: 145px;
				}
				.mint-swipe img{
					height:145px
				}
		}
		/*
			list
		*/
		.list_box{
			background: #e8e8e8;
			.notice_list{
				padding: 20px;
				li{
					display:flex;/*设为伸缩容器*/
  					flex-flow:row;/*伸缩项目单行排列*/
					height: 110px;
					background:#fff;
					margin-bottom: 20px;
					.img_box{
						width:110px;
						height:110px;
						img{
							width:100%;
							height: 100%;
						}
					}
					.content_box{
						display:flex;
						flex:1;
						align-items:center;
						padding: 20px;
				    	vertical-align: middle;
						h3{
							display: none;
						}

					}
				}
				li:last-child{
					margin:0
				}
			}
		}
		/*
		*/
		.tab_box{
			height: 120px;
			position: relative;
			overflow:hidden;
			.tab_list{
				width: 90%;
				padding: 0;
				height: auto;
				margin: auto;
				margin-top: 10px;
			}
			button{
				position:absolute;
				background:none;
				height: 70px;
				top:50%;
				transform: translateY(-50%);
				z-index: 20;
				border: 0;
				i{
					display:block;
					font-size:40px;
					color: #e3e3e3;
					font-weight: normal;
				}
				&:nth-child(1){
					left: -10px;
				}
				&:nth-child(2){
					right: -10px;
				}
			}
			h5{
				font-size: 14px;
				font-weight: normal;
				font-style: normal;
				text-align: center;
				margin-top: 25px;
				margin-bottom: 10px;
			}
		}
		@media screen and (min-width: 1000px){
			#swipe{
				height:450px;
			}
			.mint-tab-container{
				width: 95%;
				left: 2.5%;
				margin-top: 0px;
			}
			.mint-swipe{
				img{
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					height: 450px;
					width: auto;
					display: block;
					margin:auto;
				}
				.mint-swipe-indicator{
					background: #8a8787;
					&.is-active{
							background: #fff;
					}
				}
				.mint-swipe-indicators{
			      bottom: 60px;

			    }
			}
			.list_box{
				height: 110px;
				width: 100%;
				position:relative;
				.notice_list{
					position: absolute;
					top: -65px;
					width:1000px;
					margin: auto;
					left: 50%;
					transform: translateX(-50%);
					li{
						width: 31.3%;
						float: left;
						height: 130px;
						margin-right: 3%;
						&:last-child{
							margin-right: 0
						}
						a{
							height: 130px;
						}
						.img_box{
							width: 130px;
							height: 130px;
						}
						.content_box{
							height: 110px;
							display: block;
							padding:10px;

							h4{
								display: none;

							}
							h3{
								margin-top: 5px;
								display: block;
								font-size: 13px;
								font-weight: normal;
								color: #969696;
								&:nth-child(2):hover{
									color: #333;
								}
							}
						}

					}
				}
			}
			.tab_box{
				width:1000px;
				margin: auto;
				height: 250px;
			}
		}
	}
</style>
