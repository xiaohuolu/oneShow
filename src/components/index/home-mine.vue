<template>
	<div id="home-mine">
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
                <a class="r" v-if="!this.utils.userIf()"  @click="signOut()">退出登录</a>
                <router-link to="userlogo" class="r">修改头像</router-link>

              </h5>
          </div>
          <div class="clear"></div>
          <div class="mine_list">
							<a href="javascript:;" v-for="(aitem,i) in aList"  key = 'i' @click="mineCtrl(i)" :class="{'active' :  i == mineActive }" >  {{aitem}}</a>
          </div>
        </div>
				<center  v-if="mineActive == 0"></center>
				<order  v-if="mineActive == 1"></order>
				<competition  v-if="mineActive == 2"></competition>
    </div>
		<loginBox v-if="show"></loginBox>
	</div>
</template>


<script type="text/javascript">
	import loginBox from '@/components/comment/login';
	import { Swipe, SwipeItem } from 'mint-ui';
	import center from '@/components/mine/center';
	import order from '@/components/mine/order';
	import competition from '@/components/mine/competition';
  import	mineDIsc from '@/components/comment/minedisc';
	import { Indicator } from 'mint-ui';
	export default {
	  name: 'home_mine',
	  data() {
	  	return {
				aList:['个人中心','我的订单','我的参赛'],
				mineActive:0,
				show : false,
				face:'',
	  	}
	  },
	  props: {},
	  filters: {},
	  created() {
			this.getMine()
		},
	  methods: {
			faceDisc(data){
				this.face = data
			},
			getMine(){
				if (sessionStorage.token== undefined) {
					this.show = true
				}else {
				}
			},
			signOut(){
		      sessionStorage.removeItem('token')
		      sessionStorage.removeItem('username')
		      Indicator.open({
		        text: "退出成功，3s后回到首页",
		        spinnerType: 'fading-circle'
		      });
		      var close = setTimeout(()=>{
		        Indicator.close();
		      },3000)
		      setTimeout(()=>{
		        let local = window.location.host;
		        window.location.href='http://'+local
		      },3000)



		    },
			mineCtrl(i){
				Indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
				});
				var close = setTimeout(()=>{
					Indicator.close();
				},200)
				this.mineActive = i
			}
		},
	  components: {
			center,
			order,
			competition,
			loginBox,
			mineDIsc
	  }
	}
</script>

<style lang="scss">
	#home-mine{
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
		@media screen and(max-width: 1000px){
			.title{
				margin-top: -6px;
			}
		}
    .content{
      background:#fff;
      padding: 40px 20px;
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
            display: inline-block;
            color:#000;
            margin:0 4px;
            &:first-child{
              margin-left:0
            }
          }
        }
      }
      .mine_list{
        margin-top: 30px;
        margin-bottom: 20px;
				padding-bottom: 30px;
				border-bottom:1px #d3d3d3 solid;
        a{
          padding: 5px 15px;
          background:#d3d3d3;
					cursor:pointer;
          font-weight:600;
          color:#000;
          font-size: 14px;
          margin-right: 26px;
					&.active{
						color: #c11010
					}
        }
      }
      .content_box{
        margin-bottom: 30px;
        .content_head{
          padding: 20px 0;
          h1{
            font-size: 26px;
            color:#949393
          }
          p{
            font-size: 12px;
            color: #949393
          }
        }
      }
      .content_body{
          img{
            max-width:100%;
            margin-bottom:5px
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
					width: 90px;
					height: 90px;
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
