<template>
	<div id="userlogo">
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
              <router-link to="/userlogo" class="r">修改头像</router-link>
              <router-link to="/password" class="r">修改密码</router-link>
            </h5>
        </div>
        <div class="clear"></div>
      </div>
      <div class="con_box">
				<form class="" method="post" urlencode="multipart/form-data">
					<label>
	          <div class="xianshi" >
	            {{lujing}}
	          </div>
	           <span>
	             文件路径
	           </span>
	           <input  type="file" @change="file($event)"  name="">
	        </label>
	        <p>
	           (*图片尺寸应为135 * 135，且大小不能大于2M)
	        </p>
	        <button @click.prevent="upload()">提交</button>
				</form>

      </div>
    </div>
	</div>
</template>
<script>
import	mineDIsc from '@/components/comment/minedisc';
export default {
  name: 'userlogo',
  data() {
  	return {
      lujing:"(点此上传)",
			data:null,
			face:''
  	}
  },
  props: {},
  filters: {},
  created() {},
  methods: {
    file($event){
			this.data = $event.target.files[0]
      this.lujing = $event.target.value
    },
		faceDisc(data){
			this.face = data;
		},
		upload(){
	      let tokenData = sessionStorage.token.split('⊰')
	      let email = tokenData[0];
				let fm = new FormData();
				fm.append('file',this.data);
				fm.append('email',email);
				this.$http.post(this.utils.baseUrl+'/upload',fm).then((res)=>{
					console.log(res);
					if(res.status == 200){
						this.$toast({
							message: "上传成功" ,
							position: 'center',
							duration: 3000,
							className : 'toast'
						})
						setTimeout(()=>{
							this.$router.go(0)
						},1000)
					}
				})
		}

  },
  components: {
		mineDIsc
  },
  watch:{

  }

}
</script>
<style  lang="scss">
 #userlogo{
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
    padding: 20px;
    .img_box{
      height: 100px;
      width: 100px;
      border: 1px #d3d3d3 solid;
      padding: 3px;
			display: flex;
			justify-content: center;
			align-content: center;
      img{
        max-height: 100%;
				width: auto;
				height: auto;
				max-width: 100%;
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
    .con_box{
      margin-top: 20px;
      border-top: 1px #d3d3d3 solid;
      label{
        position: relative;
				cursor: pointer;
        margin:10px 0;
        display:block;
				cursor: pointer;
        span{
          width: 30%;
          text-align: right;
          display:inline-block;
          font-family: "microsoft yahei";

        }
        input{
          width: 50%;
          padding:5px 10px;
					cursor: pointer;
          opacity: 0;
        }
        .xianshi{
					cursor: pointer;
          height: 40px;
          width: 60%;
          position:absolute;
          left: 35%;
          top: 8px;
          font-size: 13px;
        }
      }
      p{
        padding:10px 0;
        font-size: 15px;
      }
			@media screen and(min-width: 1000px){
				p{
					padding-left: 140px;
				}
			}
      button{
        width: 40%;
        height: 30px;
        line-height: 28px;
        font-size: 15px;
        border:0;
        margin:auto;
        margin-top: 10px;
        display:block;
        background:#d3d3d3;
        color: #000;
        text-align:center;
        font-family: "microsoft yahei"
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
				h5 a{
					float: none;
				}
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

			.con_box p{
				font-size: 13px;
			}
			.img_box{
				width: 80px;
				height: 80px;
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
