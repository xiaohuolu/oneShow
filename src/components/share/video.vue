<!-- /static/img/ -->
<template>
	<div id="video">
		<div class="banner">
      <img src="/static/img/share.png" >
    </div>
    <div class="title">
			<div class="title1000">
				One Show活动视频
			</div>
    </div>
    <div class="content">
			<div class="pc_erji">
					<div class="pc_erji_head">
						{{lanmu}}
					</div>
					<!--  -->
					<div class="pc_erji_list">
							<ul>
								<li v-for="(articalList,i) in articalLists" :class="{'current' : i == currentCtrlPage}">
									<span><img src="/static/img/icon1.png" alt=""></span><router-link :to="articalList.id">{{articalList.name}}</router-link>
								</li>
							</ul>
					</div>
			</div>
      <div class="video" v-if="videoShow" >
				<iframe frameborder="0" width="100%" height="100%" :src="currentVideo.src" allowfullscreen>

				</iframe>
      </div>
      <div class="row">
        <h4>{{currentVideo.title}}</h4>
        <p>{{currentVideo.msg}}</p>
      </div>

      <h4>更多视频</h4>
      <ul class="video_list">
        <li v-for="(video,n) in videoList" @click="changeVideo(n)">
          <div class="img_box">
            <img  :src="'http://www.oneshow.cn:8080/'+video.image">
          </div>
          <div class="disc">
           <p> {{video.title}}<br>{{video.copyfrom}}<br>{{video.createDate}}</p>
          </div>
        </li>
      </ul>

			<ul  class="page_list">
        <span v-if = 'activeTral > 5 '  @click="goHome()" id="">
          首页
        </span>
        <span @click="prev()" v-if="activeTral != 1 ">上一页</span>
        <li  v-for="i in pageCout" v-if = ' i < maxLength && i > minLength ' :class="{'active' : i == activeTral}" @click="activePage(i)">{{i}}</li>
        <span @click="next()"  v-if="activeTral != pageCout ">下一页</span>
        <span @click="goEnd()" v-if = 'activeTral <  pageCout-3 ' >末页</span>
      </ul>

    </div>
	</div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  name: 'video',
  data() {
  	return {
			lanmu:'分享',
			currentCtrlPage:3,
      activeTral:1,
      pageCout : 0,
			src:'https://v.qq.com/iframe/player.html?vid=k015607mh4a&tiny=0&auto=0',
      maxLength: 6,
      minLength: 0,
			articalLists:[
				{
						name:'国际获奖创意作品',
						id:'/share/internation'
				},
				{
						name:'青年获奖创意作品',
						id:'/share/youthprodact'
				},
				{
						name:'One Show活动相册',
						id:'/share/picture'
				},
				{
						name:'One Show活动视频',
						id:'/share/video'
				}
			],
			videoList:[],
			currentVideo:{
				src:'',
				title:'',
				msg:''
			},
			videoShow:false,
			data:{
          pageSize:5,
          pageNo:1
      },
  	}
  },
  props: {},
  filters: {},
  created() {
		this.currentCtrl()
  },
	mounted() {

	},
  methods: {
		currentCtrl(){
      for (let j = 0; j < this.articalLists.length; j++) {
        if (this.articalLists[j].id == this.$route.path) {
            this.currentCtrlPage = j
        }
      }
			this.utils.ajax(this,'/app/videoData',this.data,false)
			.then((res)=>{
				this.pageCout = res.data.pageCount
				this.videoList = res.data.videos;
				console.log(res);
				this.currentVideo.src = this.videoList[0].content.replace("<p>",'');
				this.currentVideo.title = this.videoList[0].title;
				this.currentVideo.msg = this.videoList[0].msg;
				this.videoShow=true;
				for (let a = 0; a < this.videoList.length ; a++ ) {
          this.videoList[a].createDate = this.utils.formatDate2(new Date(this.videoList[a].createDate)).substr(1,15)
  			}

			})
    },
		goHome(){
  		this.maxLength = 6,
     	this.minLength = 0,
  		this.activeTral = 1,
  		this.currentCtrl()
  	},
  	goEnd(){
     	this.maxLength = this.pageCout+1,
     	this.minLength = this.pageCout-5,
  		this.activeTral = this.pageCout,
  		this.data.pageNo = this.activeTral
  		this.currentCtrl()
  	},
  	next(){
  		this.activeTral = this.activeTral + 1;
			this.data.pageNo = this.data.pageNo + 1
  		this.currentCtrl()
      document.body.scrollTop = 50 + "px"
  	},
  	prev(){
  		this.activeTral = this.activeTral - 1;
			this.data.pageNo = this.data.pageNo - 1
  		this.currentCtrl()
      document.body.scrollTop = 50 + "px"
  	},
    activePage(i){
  		this.activeTral = i
  		this.data.pageNo = i
  		this.currentCtrl();
      document.body.scrollTop = 50 + "px"
  	},
  	changeVideo(i){
			this.videoShow=false
			this.currentVideo.src = this.videoList[i].content.replace("<p>","");
			this.currentVideo.title = this.videoList[i].title;
			this.currentVideo.msg = this.videoList[i].msg;
			Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      var close = setTimeout(()=>{
        Indicator.close();
				this.videoShow=true
      },1000)
			if ( !this.utils.userIf()) {

			}
			var myvideo = document.getElementById('myvideo');
			let bodyHeight = document.body.scrollTop;
			var i = 0;
			var t=setInterval(function(){
				i+=12;
				if(  i<bodyHeight-125){
					var animateHeight = bodyHeight-i;
					document.body.scrollTop = animateHeight;
				}else{
					i = 0;
					window.clearInterval(t)
				}
			},0.0002/bodyHeight)
  	},

  },
  components: {
  }
}
</script>
<style  lang="scss">
  #video{
		.banner{
 		 height: auto;
 		 overflow: hidden;
	 		 img{
	 			 position: relative;
	 			 left: 50%;
	 			 transform: translateX(-50%);
	 			 height:140px;
				 @media screen and(max-width: 800px){
				 	left: 16%;
				 }
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
		.page_list{
			padding-left: 0;
			padding: 10px 0;
      cursor: pointer;
    		margin-top: 50px;
			text-align:center;
			border:1px #333 solid;
			border-width:1px 0;
			li{
				display: inline-block;
				padding: 5px 10px;
				font-size: 14px;

				&.active{
					background: #BCBCBC;
				}
			}
			span{
				font-size: 12px;
				padding: 0 2px;
			}
		}
    .content {
      padding: 20px;
			.pc_erji{
        display: none
      }
      h4{
        font-family: "microsoft yahei";
        font-size: 16px;
      }
      .video{
        width:100%;
        height: 400px;
        video{
          background:#000;
        }
				@media screen and(min-width:500px ){
					  height: 500px;
				}
				@media screen and(min-width:1000px ){
					  height: 450px;
				}
      }
      .row{
        padding: 20px 0;
        h4{
          font-size: 15px;
        }
				p{
					font-size: 14px;
				}
      }
      .video_list{
        padding:0;
        li{
          padding:20px;
					cursor: pointer;
          margin-top: 20px;
          width:100%;
          height: 130px;
          box-sizing: border-box;
          background:#d3d3d3;
          display: flex;
          flex-flow:row;
          .img_box{
            width: 90px;
            height: 90px;
            overflow:hidden;
            img{
              width: 100%;
            }
          }
          .disc{
            display:flex;
            flex:1;
            align-items:center;
            padding: 20px;
            vertical-align: middle;
            p{
              line-height:20px;
              font-weight: 600;
              font-size: 14px;
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
        width:1000px;
				padding-left: 0;
        margin:auto;
				position: relative;
				box-sizing: border-box;
				padding-right: 290px;
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
                a{
                  color: #fff;
                }
                span{
                  opacity: 1
                }
              }
              &.current{
                span{
                  opacity: 1
                }
                a{
                  color: #fff;
                }

              }
            }
          }
        }
       .main_box .main_body .prodoct_list{
          li{
            width: 31%;
            margin-right: 3.4%;
            &:nth-child(2n){
              float: left;
            }
            &:nth-child(3n){
              margin-right:0;
            }
            img{
              height: 180px;
            }
          }
        }
      }
    }
  }
</style>
