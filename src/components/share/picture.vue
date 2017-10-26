<!-- /static/img/ -->
<template>
  <div id="picture">
    <div class="banner">
      <img src="/static/img/share.png" >
    </div>
    <div class="title">
      <div class="title1000">
          One Show活动相册
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
                <li v-for="(articalList,i) in articalLists" :class="{'current' : i == currentCtrl}">
                  <span><img src="/static/img/icon1.png" alt=""></span><router-link :to="articalList.id">{{articalList.name}}</router-link>
                </li>
              </ul>
          </div>
      </div>
      <div class="pc_hide">
        <div class="main_banner">
          <mt-swipe :auto="-1" :show-indicators="false" @change="handleChange">
            <mt-swipe-item v-for="item in topimgList" key="i">
                <img  @click.prevent="layerClose()" :src="'http://123.57.15.15:8080/'+item" width="100%">
            </mt-swipe-item>
          </mt-swipe>
  	        <div class="layer"  @click="layerClose()" v-show="ctrl"></div>
  	        <div class="description"  v-show="ctrl">
  	        	<span class="iconfont icon-chuyidong" @click="layerClose()" style="font-size: 35px;"></span>
  	      		<div class="desc_content">
  	      			{{topContent.msg}}
  	      		</div>
  	      	</div>
        </div>
      </div>

      <!--   pc  相册  -->

      <div class="mobile_hide pc_picture" >
        <button @click="prevPic($event)">
  				<i class="iconfont icon-jiantou"></i>
  			</button>
  			<button  @click="nextPic($event)">
  				<i class="iconfont icon-jiantou-copy"></i>
  			</button>

        <mt-tab-container v-model="active" 	:swipeable="true">
          <mt-tab-container-item v-for="(item,i) in topimgList" key="i" :id="i+1"  ref="data">
            <div class="tab_list">
              <img :src="'http://www.oneshow.cn:8080'+item" width="100%">
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
        <div class="pc_desc_content" v-if="msgBoxIf">
          <p>{{topContent.msg}}</p>
        </div>
      </div>
      <div class="title_banner">
        <p>
          <span>{{topContent.time}} </span>{{topContent.title}}<i class="r">{{active}}/{{n}}</i>
        </p>
      </div>
      <h4>更多相册</h4>
      <ul class="pic_list">
        <li v-for="(item,i) in items" @click="getimgList(i)">
          <div class="img_box">
            <img  :src="'http://123.57.15.15:8080'+item.image">
          </div>
          <div class="disc">
           <p> {{item.title}}<br> {{item.createDate}}<br>{{item.copyfrom}}</p>
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
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'picture',
  data() {
    return {
      index:1,
      n:5,
      data:{
          pageSize:5,
          pageNo:1
      },
      ctrl:false,
      items:[],
      imgId :[],
      data1 :{
      	id:'73e5eadda5de49308d8527f35110dd1b'
      },
     	topContent:{
     		msg:'',
     		time:'',
     		title:''
     	},
      topimgList:[],
      lanmu:'分享',
      active:1,
      count:null,
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
      msgBoxIf:true,
      currentCtrl:2,
      activeTral:1,
      pageCout : 0,
      maxLength: 6,
      minLength: 0,
    }
  },
  props: {},
  filters: {},
  created() {
  	this.imget(),
    this.currentCtrl1()
  },
  methods: {
  	imget(){
      this.data.pageNo = this.activeTral
  		this.utils.ajax(this,'/app/albumsList',this.data, false).then((res)=>{
        this.items = res.data.albumsList;
        this.pageCout = res.data.pageCount
        for (let a = 0; a < res.data.albumsList.length ; a++ ) {
  				this.imgId.push(res.data.albumsList[a].id)
          this.items[a].createDate = this.utils.formatDate2(new Date(this.items[a].createDate)).substr(1,15)
  			}
        this.topContent.msg = this.items[0].description;
				this.topContent.title = this.items[0].title;
				this.topContent.time = this.items[0].createDate
  		});
  		this.checkImg()


	  },
		handleChange(index){
      this.active = index+1;
		},
    checkImg(){
      this.utils.ajax(this,'/app/albums',this.data1, false).then((res)=>{
				this.n = res.data.albums.length;
				//console.log(res.data.albums)
				this.topimgList = res.data.albums
			})
    },
		getimgList(i){
			//更换数据
      this.active = 1;
			this.data1.id = this.imgId[i];
			this.topContent.msg = this.items[i].description;
      if(this.topContent.description == ''){
        this.msgBoxIf = false
      }else {
        this.msgBoxIf = true
      }
			this.topContent.title = this.items[i].title;
			this.topContent.time = this.items[i].createDate;
			//get
			this.checkImg();
			//跳转到顶部
			let currentTop = document.body.scrollTop; //初始值
			let endTop = 0;                           //结束时
			this.animate(currentTop,endTop)
      this.index = 1
		},
    prevPic(event){
  		var j = parseInt(this.active)
  		if (j>1) {
  			j--
  		}else {
  			j = this.n
  		}
  		this.active=j
  	},
  	nextPic(event){
  		var i = parseInt(this.active)
  		if (i<this.n) {
  			i++
  		}else{
  			i=1;
  		}
  		this.active=i
  	},
    goHome(){
  		this.maxLength = 6,
     	this.minLength = 0,
  		this.activeTral = 1,
  		this.imget()
  	},
  	goEnd(){
     	this.maxLength = this.pageCout+1,
     	this.minLength = this.pageCout-5,
  		this.activeTral = this.pageCout,
  		this.data.pageNo = this.activeTral
  		this.imget()
  	},
  	next(){
  		this.activeTral = this.activeTral + 1;
  		this.imget()
      document.body.scrollTop = 50 + "px"
  	},
  	prev(){
  		this.activeTral = this.activeTral - 1;
  		this.imget()
      document.body.scrollTop = 50 + "px"
  	},
    activePage(i){
  		this.activeTral = i
  		this.data.pageNo = i
  		this.imget();
      document.body.scrollTop = 50 + "px"
  	},
		animate(a,b){
			let s  = (a - b)/60;
			let statusTop = a
			let animate = setInterval(()=>{
				statusTop = statusTop-s;
				if( statusTop > 0 ){
					document.body.scrollTop = statusTop
				}else{
					window.clearInterval;
				}
			},6)
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      var close = setTimeout(()=>{
        Indicator.close();
      },1000)
		},
		layerClose(){
			if(this.ctrl ){
				this.ctrl = false
			}else{
				this.ctrl = true
			}

		},
    currentCtrl1(){
      for (let j = 0; j < this.articalLists.length; j++) {
        if (this.articalLists[j].id == this.$route.path) {
            this.currentCtrl = j
        }
      }
    }

  },
  components: {
  },
  computed : {
  }
}
</script>
<style  lang="scss">
  #picture{
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
    .content {
      padding:20px;
      .pc_erji{
        display: none;
      }
      .pc_picture{
        position: relative;
        overflow: hidden;
        transition: all .5s;
        cursor: pointer;
        i{
          font-style: normal;
        }
        button{
          position: absolute;
          transition: all .5s;
          z-index: 500;
          color: #fff;
          top: 50%;
          left:0;
          background: rgba(0,0,0,0.5);
          padding:10px;
          transform: translateY(-60%);
          i{
            font-size: 40px;
          }
          &:nth-child(2){
            left: auto;
            right: -60px;
          }
          &:nth-child(1){
            left: -60px;
            right:auto
          }
        }
        .mint-tab-container{
          height:450px;
          .mint-tab-container-wrap{
            height: 100%;
            .tab_list{
              height: 100%;
              width: 100%;
              background: #d4d4d4;
              display: flex;
              justify-content: center;
              align-items: center;
              align-content: center;
              img{
                width: auto;
                height: auto;
                max-height: 100%;
                max-width: 100%;

              }
            }
          }
        }
        .pc_desc_content{
          transition: all .5s;
          position: absolute;
          bottom: -200px;
          font-size: 14px;
          background:rgba(0,0,0,0.5);
          padding:20px;
          box-sizing: border-box;
          width: 100%;
          p{
            font-size: 13px;
            color: #fff;
          }
        }
        &:hover{
          .pc_desc_content{
            bottom: 0
          }
          button{
            &:nth-child(2){
              left: auto;
              right: 0px;
            }
            &:nth-child(1){
              left: 0px;
              right:auto
            }
          }
        }
      }
      .title_banner{
        height: 45px;
        p{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          line-height: 45px;
          font-size: 15px;
          span{
            display: inline-block;
            padding-right: 10px;
            font-weight: 600;
          }
          i{
            font-style: normal;
          }
        }
      }
      .main_banner{
        padding-bottom: 20px;
        .mint-swipe-items-wrap{
          background: #d4d4d4;
          height: 210px;
          img{
            width: auto;
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            height: auto;
            max-height: 100%;
            max-width: 100%;
          }
        }
        .layer{
        	position: fixed;
        	width: 100%;
        	height: 100%;
        	z-index: 7778;
        	top: 0;
        	left: 0;
        	background: rgba(0,0,0,0.3);
        }
        .description{
	      	position:fixed;
	      	height: 0;
	      	z-index: 8888;
	      	top: 50%;
	      	left: 50%;
	      	min-width: 80%;
	      	height: 60%;
	      	transform: translate(-50%,-50%);
	      	.desc_content{
	      		padding: 30px;
	      		box-sizing: border-box;
	      		height:auto;
	      		height: 100%;
	      		padding-top: 50px;
	      		overflow: hidden;
	      		text-overflow: ellipsis;
	      		position: absolute;
	      		bottom: 0;
	      		font-size: 12px;
	      		line-height: 15px;
	      		background: rgba(0,0,0,1);
	      		color: #fff;
	      	}
	      	span{
	      		position: absolute;
	      		right: 0;
	      		top: 0;
	      		color: #fff;
	      		z-index: 7777;
	      	}
	      }
      }
      h4{
        font-family: "microsoft yahei";
        font-size: 16px;
      }
      .pic_list{
        padding:0;
        li{
          cursor: pointer;
          padding:20px;
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
        margin:auto;
        box-sizing: border-box;
        padding-right: 290px;
        position: relative;
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
        .main_banner .mint-swipe-items-wrap{
          height: 450px;
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
