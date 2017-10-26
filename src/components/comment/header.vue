<template>
	<div id="zxjsc-header">
		<header>
      <div class="logo" @click="popupVisible = false">
      <router-link to="/"> <img src="/static/img/logo.png"></router-link>
      </div>
      <div @click="clickFun" class="menu r">
        <img v-show="!visble"  src="/static/img/menu_static.png">
        <img v-show="visble"  src="/static/img/menu.png">
      </div>
      <div class="user r" @click="popupVisible = false">
          <router-link to="/mine"> <img src="/static/img/user.png"></router-link>
      </div>
    </header>

    <!-- 菜单 -->
    <mt-popup v-model="popupVisible" position="top">

      <ul class="menu_list" id="menu-box">
        <li v-for="(menu1, i) in menu" @click="openList($event, i, menu1.children.length)">{{menu1.yiji}}
          <!-- 加减动画 -->
          <span class="span r" >
            <div class="pass">
              <i></i><i></i>
            </div>
          </span>

          <ul :class="{ 'menu_list_2': 1 == 1,'menu_list_2 active': open == i}">
             <li  :class="{'hui' : active == j }" v-for="(menu2,j) in menu1.children" @click.stop="close(j, menu2.router,$event,menu2.erji)">
                 <a  href="javascript:void(0)">{{menu2.erji}}</a>
             </li>

          </ul>
           <li @click="geterwei()">
            	Links<span class="span r"><div class="pass"><i></i><i></i></div></span>
         	</li>
        </li>
      </ul>
    </mt-popup>

	<div v-if="popupVisible2" class="second">
		<div class="layer"  @click="close_second()"></div>
		<div class="content_box" v-show='second_num'>
			<button class="close_btn"  @click="close_second()"><span class="iconfont icon-chuyidong" style="font-size: 35px;"></span></button>
			<div class="imgbox">
				<img src="/static/img/link111.png" alt="" />
				<h4>ONE SHOW官方微信平台</h4>
			</div>
		</div>
		<div class="content_box" v-show='!second_num'>
			<button class="close_btn"  @click="close_second()"><span class="iconfont icon-chuyidong" style="font-size: 35px;"></span></button>
			<div class="imgbox">
				<img src="/static/img/stort111.png" alt="" />
				<h4>ONE SHOW官方微店</h4>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
  import { Popup } from 'mint-ui';
  import { Swipe, SwipeItem } from 'mint-ui';
  export default {
    name: 'zxjsc-header',
    data() {
     return {
       popupVisible: false,
       popupVisible2:false,
       popupVisible3:false,
       visble:false,
       second_num:true,
       active:-1,
       open : -1,
       menu:[
          {
            yiji:"了解ONE SHOW",
            id:'',
            children:[
                {
                  erji:"致辞",
                  router:"/know/speech",

                },
                {
                   router:"/know/about",
                   erji:"关于THE ONE CLUB",


                },
                {
                   router:"/know/business",
                   erji:"我们的业务",
                },
                {
                   router:"/know/plan",
                   erji:"企业会员计划",
                },
                {
                   router:"/know/stort",
                   erji:"商店",
                },
                {
                  router:"/know/contact",
                  erji:"联系我们"
                }

            ]
          },
          {
            yiji:"国际创意节",
            id:'',
            children:[
                {
                  router:'/creative/awards',
                  erji:"One Show创意奖",
                },
                {
                  router:'/creative/design',
                  erji:"ADC年度设计大奖",
                },
                {
                  router:'/creative/newyork',
                  erji:"纽约创意周",
                },
                {
                  router:'/creative/student',
                  erji:"国际学生奖",
                },
            ]
          },
          {
            yiji:"中华创意节",
            id:'',
            children:[
                {
                  router:'/zhCn/zh_award',
                  erji:"One Show中华创意奖项",
                },
                {
                  router:'/zhCn/zh_project',
                  erji:"One Show中华创意节",
                }
            ]
          },
          {
            yiji:"青年创意节",
            id:'',
            children:[
              {
                router:'/youth/competition',
                erji:"中华青年创新竞赛",
              },
              {
                router:'/youth/camp',
                erji:"中华青年创新营",
              },
              {
                router:'/youth/ambassador',
                erji:"校园大使招募计划",
              },
              {
                router:'/youth/member',
                erji:"个人会员计划",
              },
              {
                router:'/youth/teashear',
                erji:"教师分享计划",
              },
//            {
//              router:'/youth/teaonline',
//              erji:"教师分享计划在线报名",
//            },
              {
                router:'/youth/merchants',
                erji:"命题合作品牌招商",
              },

            ]
          },
          {
            yiji:"活动",
            id:'',
            children:[
              {
                erji:'中华青年创意峰会',
                router:'/activity/cy_summit'
              },
              {
                erji:'创意人派对',
                router:'/activity/party'
              },
              {
                erji:'青年面试日',
                router:'/activity/interview'
              },
              {
                erji:'腾讯实效营销峰会',
                router:'/activity/xs_summit'
              },
              {
                erji:'创意名人堂',
                router:'/activity/fame'
              },
              {
                erji:'创意展览',
                router:'/activity/exhibition'
              },
            ]
          },
          {
            yiji:"分享",
            id:'',
            children:[
              {
                erji:'One Show视频',
                router:'/share/video'
              },
              {
                erji:'One Show相册',
                router:'/share/picture'
              },
							{
                erji:'青年获奖创意作品',
                router:'/share/youthprodact'
              },
              {
                erji:'国际获奖创意作品',
                router:'/share/internation'
              },

            ]
          },
        ],
        artical:'',
        data1:{
          'categorieId':"10"
        },
        data3:[
        	"1","1","1","1","1","1","1","1","1","1","1","1"
        ],

        apiUrl:'http://123.57.15.15:8080/OneShow/app/categoryList',
        apiUrl1:'http://123.57.15.15:8080/OneShow/app/articleList'
     }
   },
   props: {

   },
   filters: {},
   created() {
		this.getL(),
		this.getRouter()
   },
   methods: {
   	getRouter(){

   	},
   	getL(){
   		//一级栏目
   		this.$http.post(this.apiUrl,this.data1)
   		.then((response) => {
   			var firstLength = response.body.data.categories.length;
   			for(var i = 0 ;  i<firstLength  ; i++){
   				this.menu[i].yiji = response.body.data.categories[i].name;
   				this.menu[i].id = response.body.data.categories[i].id;
   				this.data1.categorieId = this.menu[i].id
   				if( i<5 ){
   					this.$http.post(this.apiUrl1,this.data1)
   					.then((response)=>{

	   				})
   				}
   			}
   		})
   	},
   	geterwei(){
   		this.popupVisible =false;
   		this.popupVisible2 =true;
   		this.second_num =true;
   	},
   	close_second(){
   		this.popupVisible2 = false
   	},
    clickFun () {
      if (!this.popupVisible) {
        this.popupVisible = true;
        this.visble = true
      }else {
        this.popupVisible = false;
        this.visble = false
      }
    },
    openList(event,i,l) {
      this.active = -1;
      let ulHeight = (l)*40;
      let box = document.getElementById('menu-box');
      let ulList = box.getElementsByClassName('menu_list_2');
      let spanList = box.getElementsByClassName('span');
      if(this.open!=i){
        this.open = i;
        for(let o = 0; o < ulList.length; o++) {
          ulList[o].style.height = 0;
          spanList[o].innerHTML = '<div class="pass"><i></i><i></i></div>'
        }
        ulList[i].style.height = ulHeight +'px';
        spanList[i].innerHTML = '<div class="pass heng"><i></i></div>'
        // 查询id就行
        let vm = this;
        vm.$http.post(vm.apiUrl,vm.data1)
          .then((response) => {
            let resData = response.body.data;
            vm.data1.categorieId=resData.categories[i].id;

        })
      }else {
        this.open = -1 ;
        ulList[i].style.height = 0 +'px';
        spanList[i].innerHTML =  '<div class="pass"><i></i><i></i></div>'
      }


    },
    close(j, r , event , meta){
    this.active = j;
//  console.log(meta)
    this.popupVisible = false;
    let vm = this;
    let video = r.split('/')[1];
    let shop = r.split('/')[2];
    if ( video != "share" &&  r != "/know/stort" && r != "/youth/ambassador" && r != "/youth/member"  ) {
        vm.$http.post(vm.apiUrl1,vm.data1)
        .then((response) => {
	        let resDataCate = response.body.data;
	        var id = resDataCate.categories[j].id;
	      	if(response.body.data.categories[j].href != '' && response.body.data.categories[j].href != undefined)
	  		{
	  		    window.location.href = response.body.data.categories[j].href
	  		}else{
	  			 this.$router.push( '/artical' + '/' + id);
	  		}
        })
    }else {
    	if(r == "/know/stort"){
    		this.second_num = false;
    		this.popupVisible =false;
   			this.popupVisible2 =true;
    	}else{
        	this.$router.push(r);
    	}
    }
    },

},
watch:{
  popupVisible(){
    if (!this.popupVisible ) {
      this.visble = false
      document.body.style.overflow = 'auto';
    }else {
      document.body.style.overflow = 'hidden';
    }
  },
},
components: {

  }
}
</script>



<style  lang="scss">
 #zxjsc-header{
  header{
    background:rgb(54,53,50);
    height: 45px;
    .logo{
      margin-left: 20px;
      float: left;
      height: 45px;
    }
    .menu{
      margin-right: 20px;
      height: 45px;
    }
    .user{
      margin-right: 20px;
      img{
        display: block;
        margin:auto;
      }
    }
    img{
      height: 45px
    }

  }

  /*菜单*/
  .menu_list{
    margin-top: 45px;
    width: 100%;
    padding:0 20px;
    box-sizing: border-box;
    padding-bottom:30px;
    li{
      color: #000;
      font-family: "microsoft yahei";
      font-weight: bolder;
      line-height: 50px;
      font-size: 14px;
      border-top: 1px #BCBCBC solid;
      span{
        font-size: 44px;
        color: #BCBCBC;
        line-height: 42px;
				font-weight: 500;
        .pass{
          position:relative;
          right: 0;
          width:30px;
          height: 30px;
          top: 5px;
          i{
            position:absolute;
            width: 25px;
            height: 3px;
            top: 15px;
            display: block;
            background: #BCBCBC;
            &:last-child{
              transform:rotate(90deg)
            }
          }
          &.heng{
            i{
              &:last-child{
                transform:rotate(0deg)
              }
            }
            
          }
        }
      }
      .menu_list_2{
          transition:all .3s;
          width: 80%;
          margin-left: 20px;
          height: 0;

          overflow:hidden;
          &.active{

          }
        li{
          border:0;
          color:#0E0E0E;
          font-weight: normal;
          font-size: 13px;
          line-height: 40px;
          a{
            display:block;
            width:100%;
            color:#0E0E0E;
            height: 100%;
            font-size: 13px;

          }
          &.hui{
          	a{
          		color: #b3b3b3;
          	}
          }
        }
      }
    }

  }
  .mint-popup-top{
    top:45px;
    overflow: auto;
    height: 420px;

  }
  .v-modal{
    top: 45px;
  }

  .mint-popup-top{
    width: 100%;
  }
  .mint-popup-bottom{
  	height: 60%;
  	top:20%;
  	width: 80%;
  }
  .second{
  	position: fixed;
  	width: 100%;
  	top: 0;
  	height: 100%;
  	z-index: 500;
  	.close_btn {
	    position: absolute;
	    right: 0;
	    top: 0;
	    color: #fff;
	    background: none;
	    border: 0;
	}
  	.layer{
  		position: absolute;
  		width: 100%;
  		height: 100%;
  		top: 0;
  		background:rgba(0,0,0,0.5);

  	}
  	.content_box{
  		position: absolute;
  		width: 60%;
  		left: 20%;
  		padding-top: 50px;
  		top:50%;
  		transform: translateY(-50%);
  		height:40%;
  		background: #000;
  		.imgbox{
  			width: 86%;
  			margin: auto;
  			margin-top: 15%;
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
  				margin-top: 10%;
  			}
  		}
  	}
  }
}
</style>
