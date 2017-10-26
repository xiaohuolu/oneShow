<template>
  <div id="youthprodact">
     <div class="banner">
        <img src="/static/img/share.png" >
      </div>
      <div class="title">
        <div class="title1000">
            青年获奖创意作品
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
        <h3>奖项</h3>
        <h5>
        	<select v-model='data.dateline' @change="choose(1)" name="">
        		<option value="2012">2012</option>
        		<option value="2013">2013</option>
        		<option value="2014">2014</option>
        	</select>
        	<select  v-model="data.jiangbie" @change="choose(2)" name="">
        		<option value="GOLD金">GOLD金</option>
        		<option value="SILVER银">SILVER银</option>
        		<option value="BRONZE铜">BRONZE铜</option>
        	</select>
        	<div class="clear"></div>
        </h5>
        <div class="main_box" v-for="(crea,i) in creative">
          <div @click.prevent="contral(i,$event)" class="main_head">
            <h4>{{crea.title}} <br> {{crea.title1}} </h4>
            <span  :class="{'iconfont icon-arrow_top': 1 == 1,'tran': ctrl == i }"></span>
          </div>
          <div :class="{'main_body' : 1==1 , 'show' : ctrl == i } ">
            <ul class="prodoct_list">
              <li v-for="(item,i) in items"  @click='contralImg(i)'>
                <div class="hoverBox mobile_hide" >
                  <h3>{{item.title}}</h3>
                  <h4>代理商：{{item.agency}}</h4>
                  <h4>客户：{{item.client}}</h4>
                </div>
                <img  :src="'http://www.oneshow.cn:8088/auth/'+item.thumbnails">
              </li>
              <div class="clear"></div>
            </ul>
            <router-link to="">
              <h4>加载更多</h4>
            </router-link>
          </div>
        </div>
        <!-- 相册 -->
        <mt-popup
        v-model="popupVisible"
        position="bottom">
        <span @click="contralImg(500)" class="btn iconfont icon-chuyidong" style="font-size: 35px;"></span>
        <button  class="mobile_hide" @click="next($event)">
          <i class="iconfont icon-jiantou-copy"></i>
        </button>
        <button class="mobile_hide" @click="prev($event)">
          <i class="iconfont icon-jiantou"></i>
        </button>
        
        <div class="swipe">
          <mt-swipe :auto="0" class="pc_hide">
            <mt-swipe-item  v-for="(item,i) in topimgList" key="i">
              <img :src="'http://www.oneshow.cn:8088/'+item.image">
            </mt-swipe-item>
          </mt-swipe>
          <!--  -->
          <!-- <mt-tab-container v-model="active" class="mobile_hide" >
            <mt-tab-container-item v-for="(item,i) in topimgList" key="i" ref="data">
              <div class="tab_list">
                <img :src="'http://www.oneshow.cn:8088/'+item.image">
              </div>
            </mt-tab-container-item>
          </mt-tab-container> -->
          <mt-tab-container  v-if="this.utils.userIf()" v-model="active" class="mobile_hide"  :swipeable="false">
            <mt-tab-container-item v-for="(item,i) in topimgList" key="i" :id="i+1"  ref="data">
              <div class="tab_list">
                <img :src="'http://www.oneshow.cn:8088/'+item.image">
              </div>
            </mt-tab-container-item>
          </mt-tab-container>

        </div>
        <div class="index mobile_hide">
          <div class="index_yuan" v-for="i in n" :class="{'on': i == active}">
          </div>
        </div>
        <div class="container">
          <h1>2012 ONE SHOW广告奖金奖</h1>
          <h2>
            <div class="l">
              分类 <span>{{popupList.type}}</span>
            </div>
            <div class="r">
              代理公司 <span>{{popupList.agency}}</span>
            </div>
          </h2>
          <!-- <h2>代理公司 <span>Grabarz & Partner  WA GmbH</span></h2> -->
          <h2>
            <div class="l">
              客户 <span>{{popupList.client}}</span>
            </div>
            <div class="r">
              编码 <span>{{popupList.id}}</span>
            </div>
          </h2>

        </div>
      </mt-popup>
      </div>
  </div>
</template>
<script>

export default {
  name: 'youthprodact',
  data() {
    return {
      ctrl:-1,
      data:{
      	'awards':'青年组',
      	'jiangbie':'BRONZE铜',
      	'dateline':'2012'
      },
      creative:[
      	{
      		'title':'YOUTH',
      		'title1':'青年组',
      	},
      	{
      		'title':'STUDENTS',
      		'title1':'学生组',
      	}
      ],
      items:[],
      count:-1,
      popupVisible:false,
      lanmu:'分享',
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
      topimgList:[],
      imgId:null,
      popupList:{
        type:'',
        agency:'',
        client:''
      },
      n:null,
      active:1
    }
  },
  props: {},
  filters: {},
  created() {
    this.currentCtrl()
  },
  methods: {
    currentCtrl(){
      for (let j = 0; j < this.articalLists.length; j++) {
        if (this.articalLists[j].id == this.$route.path) {
            this.currentCtrl = j
        }
      }
    },
    choose(a){
      this.getProtect()
    },
  	getProtect(){
  		this.utils.ajax(this, '/app/YouthWinningEntries', this.data, false).then((res) => {
  			this.items = res.data.ywinningentries
        document.body.scrollTop = 150;
  		})
  	},
    contral(i){
      if(this.ctrl != i)
      {
        this.data.awards = this.creative[i].title1;
      	this.getProtect()
        this.ctrl = i
      }else{
        this.ctrl = -1
      }
    },
    contralImg(a){
      if (a != 500) {
        this.imgId = this.items[a].id,
        this.popupList.type = this.items[a].types;
        this.popupList.agency = this.items[a].agency
        this.popupList.client = this.items[a].client
        this.popupList.id = this.items[a].id
        this.active = 1;
        this.getimgList()
      }
      if ( !this.popupVisible) {
        this.popupVisible = true;
      }else {
          this.popupVisible = false;
      }
    },
    getimgList(){
      this.utils.ajax(this,'/app/YImage',{id:this.imgId},false).then((res)=>{
        this.topimgList = res.data.images
        this.n = this.topimgList.length;
      })
    },
    prev(event){
      var j = parseInt(this.active)
      if (j>1) {
        j--
      }else {
        j = this.n
      }
      this.active=j
      console.log(this.active)
    },
    next(event){
      if (this.active<this.n) {
       this.active++
      }else{
        this.active=1;
      }
    },
  },
  components: {
  }
}
</script>
<style  lang="scss">
  #youthprodact{
    .mint-popup-bottom{
      width: 100%;
      height:80%;
      max-width: 600px;
      background: #000;
      top:10%;
      span.btn{
        position: absolute;
        right: 0;
        color: #fff;
        z-index: 5000;
      }
      button{
          position: absolute;
          transition: all .5s;
          z-index: 500;
          color: #fff;
          top: 45%;
          left:0;
          background: rgba(0,0,0,0.5);
          padding:10px;
          transform: translateY(-100%);
          i{
            font-size: 40px;
          }
          &:nth-child(2){
            left: auto;
            right: 0px;
          }
          &:nth-child(1){
            left: -60px;
            right:auto
          }
      }
      .index{
          position: absolute;
          bottom: 30%;
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
      .swipe{
        height: 70%;
        .mint-tab-container{
          box-sizing: border-box;
          height: 100%;
          padding-top: 40px;
          .mint-tab-container-wrap{
            height: 100%;
            .tab_list{
              height: 100%;
              display:flex;
              justify-content:center;
              align-items:center;
              align-content:center;
              flex-direction:column;
              img{
                max-width: 100%;
                max-height: 100%;
                width: auto;
                height: auto
              }
            }
          }
          
        }
        .mint-swipe{
          padding-top: 40px;
          box-sizing: border-box;
          .mint-tab-container{
          box-sizing: border-box;
          height: 100%;
          padding-top: 40px;
          .mint-tab-container-wrap{
            height: 100%;
            .tab_list{
              height: 100%;
              display:flex;
              justify-content:center;
              align-items:center;
              align-content:center;
              flex-direction:column;
              img{
                max-width: 100%;
                max-height: 100%;
                width: auto;
                height: auto
              }
            }
          }
          
        }
          .mint-swipe-items-wrap{
            height: 86%;
            .mint-swipe-item{
              display: flex;
              justify-content: center;
              align-items: center;
              &.is-active{
                display: flex;
                justify-content: center;
                align-items: center;
              }
              img{
                max-width: 100%;
                max-height: 100%;
              }
            }

          }
          .mint-swipe-indicator{
            background: #fff;
            opacity: 0.8;
            &.is-active{
              opacity: 0.3
            }
          }
        }

      }
      .container{
        height: 30%;
        color: #fff;
        padding:0 20px;
        h1{
          font-size: 14px;
          padding-bottom: 10px;
          margin-top:5px;
          border-bottom: 1px #eee solid;
        }
        h2{
          margin-top: 10px;
          font-size: 12px;
          width: 100%;
          display: inline-block;
          div{
            width: 50%;
          }
          span{
            color: #ccc;
            float: right;
            width: 65%;
            display:block;
          }
        }
      }
    }
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
    @media screen and(max-width:1000px){
     
      .title{
         margin-top: -6px;
      }
    }
    .content{
      .pc_erji{
        display: none
      }
      padding: 20px;
      h3{
        font-family: "microsoft yahei";
        font-size: 16px;
        line-height:40px;
      }
      h4{
         font-family: "microsoft yahei";
        font-size: 15px;
        color: #171717;
      }
      h5{
        font-size: 14px;

        font-family: "microsoft yahei";
        margin-bottom: 20px;

        select{
        	margin-right: 20px;
        	float: left;
        	height: 35px;
        	font-size: 14px;
        	line-height: 35px;
        	border: 1px #ccc solid;
        	width: 120px;
        	display: inline-block;
        	padding:5px 10px;
        }
      }
      .main_box{
      	.line{
          	position: relative;
          	top: -50px;
        }
        .main_head{
          height: 70px;
          padding-left: 20px;
          background:#d3d3d3;
          border-bottom: 8px #000 solid;
          position: relative;
          display: flex;
          align-items:center;
          cursor: pointer;
          span{
            position:absolute;
            right: 0;
            bottom: -5px;
            font-size: 14px;
            background:#000;
            color:#fff;
            transform:rotate(180deg);
            transition: all .5s;
            padding:2px;
            &.tran{
              transform:rotate(0deg);
            }
          }
        }
        .main_body{
          height: 0px;
          overflow:hidden;
          opacity: 0;
          transition: all 1.5s;
          a{
            text-align: center;
            height: 30px;
            line-height: 30px;
            width: 100%;
            display:block;
            color:#000;
            background:#d3d3d3;
            margin: 20px 0;
            margin-bottom: 40px;
          }
          &.show{
            height: auto;
            opacity: 1;
          }
          .prodoct_list{
            padding-left:0;
            margin-top: 20px;
            border-top:1px #949393 solid;
            li{
              margin-top: 20px;
              float: left;
              width: 46%;
              position:relative;
              cursor:pointer;
              overflow:hidden;
              .hoverBox{
                position:absolute;
                background:rgba(0,0,0,0.8);
                width: 100%;
                height: 100%;
                opacity: 1px;
                padding: 10px 5px;
                top: -100%;
                box-sizing: border-box;
                transition:all .3s;
                h3{
                  text-align:center;
                  font-size: 13px;
                  color: #A78958;
                  font-weight: normal;
                  padding-top: 10px;
                }
                h4{
                  text-align:center;
                  font-weight: normal;
                  font-size: 13px;
                  color: #fff;
                  padding-top: 5px;
                }
              }
              img{
                width: 100%;
                height: 120px;
              }
              &:nth-child(2n){
                float:right;
              }
              &:hover{
                .hoverBox{
                  top: 0;
                }
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
        width:1000px;
        position: relative;
        box-sizing: border-box;
        padding-right: 290px;
        margin:auto;
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
              height: 160px;
            }
          }
        }
      }
    }
  }
</style>
