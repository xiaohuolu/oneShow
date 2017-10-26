<template>
	<div id="ambassadorMore">
    	<div class="banner">
	      <img src="/static/img/ambassador_banner.png">
	    </div>
	    <div class="title">
				<div class="title1000">
					优秀校园大使
				</div>
	    </div>
	    <div class="content">
	    	<ul class="ambassador_list">
	            <li v-for="list in nLists" class="clear">
	             <div class="img_box">
	             	 <img :src="'http://www.oneshow.cn'+list.face">
	             </div>
	             <div class="box">
	                <h1>{{list.username}} </h1>
	                <div class="diamond"><span>{{list.id}}</span>
	                    <div class="left">
	                      <div class="sanjiao"></div>
	                    </div>
	                    <div class="right">
	                      <div class="sanjiao"></div>
	                    </div>
	                </div>
	             </div>
	              <h3>{{list.school}}</h3>
	              <h3>{{list.department}}</h3>
	            </li>
	            <div class="clear"></div>
	        </ul>

	        <ul  class="page_list">
	        	<span v-if = 'activeTral > 5 '  @click="goHome()" id="">
	        		首页
	        	</span>
	        	<span @click="prev()" v-if="activeTral != 1 ">上一页</span>
	        	<li  v-for="i in pageCout" v-if = ' i < maxLength && i > minLength ' :class="{'active' : i == activeTral}" @click="active(i)">{{i}}</li>
	        	<span @click="next()"  v-if="activeTral != pageCout ">下一页</span>
	        	<span @click="goEnd()" v-if = 'activeTral <  pageCout-3 ' >末页</span>
	        </ul>
	    </div>
	</div>
</template>
<script>

export default {
  name: 'ambassadorMore',
  data() {
  	return {
     nLists:[],
     data:{
     	"pageSize":"9",
     	"pageNo":"1"
     },
     activeTral:1,
     pageCout : 0,
     maxLength: 6,
     minLength: 0,
  	}
  },
  props: {},
  filters: {},
  created() {
  	this.getList()
  },
  methods: {
  	getList(){
  		this.tranpage()
  		document.body.scrollTop = 0
      if (this.utils.userIf()) {
        this.data.pageSize = 12
      }
  		this.data.pageNo = this.activeTral
  		this.utils.ajax(this,'/app/ExcellentAmbassadorLists',this.data,false).then((res)=>{
  			this.nLists = res.data.list
  			this.pageCout = res.data.pageCount
  		})
  	},
  	goHome(){
  		this.maxLength = 6,
     	this.minLength = 0,
  		this.activeTral = 1,
  		this.getList()
  	},
  	goEnd(){
     	this.maxLength = this.pageCout+1,
     	this.minLength = this.pageCout-5,
  		this.activeTral = this.pageCout,
  		this.getList()
  	},
  	next(){
  		this.activeTral = this.activeTral + 1;
  		this.getList()
  	},
  	prev(){
  		this.activeTral = this.activeTral - 1;
  		this.getList()
  	},
  	active(i){
  		this.activeTral = i
  		this.data.pageNo = i
  		this.getList();
  	},
  	tranpage(){
  		if(this.activeTral == this.maxLength-1){
  			this.maxLength += 1;
  			this.minLength += 1
  		}else if(this.activeTral == this.minLength+1){
  			this.maxLength -= 1;
  			this.minLength -= 1
  		}
  	},
  	animate(a,b){
		let s  = (a - b)/60;
		let statusTop = a
		let animate = setInterval(()=>{
			statusTop = statusTop-s;
			if( statusTop > 0 ){
				document.body.scrollTop = statusTop
			}else{
				window.clearInterval
			}
		},6)
	}
  },
  components: {
  }
}
</script>
<style  lang="scss">
 #ambassadorMore{
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
		padding: 40px 20px;
		.page_list{
			padding-left: 0;
			padding: 10px 0;
    		margin-top: 50px;
			text-align:center;
			border:1px #333 solid;
			border-width:1px 0;
			li{
				cursor: pointer;
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
		.ambassador_list{
        padding-left: 0;
        li{
          background:#d3d3d3;
          width: 31%;
          height: 160px;
          box-sizing: border-box;
          padding: 10px 15px;
          margin-right: 3%;
          float: left;
          margin-top: 15px;
          &:nth-child(3n){
            margin-right:0;
          }
          .img_box{
          	height: 98.453px;
          	display: flex;
           	align-content: center;
            flex-direction:column;
           	justify-content:center;
						margin-bottom: 3px
          }
          img{
           	max-height: 100%;
           	max-width: 100%;
						width: auto;
						margin:0;
          }
          h3{
            font-size: 12px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          h1{
            font-size: 12px;
            width: 50px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            position: relative;
          }
          .box{
            position:relative;
            height: 15px;
            .diamond{
              position: absolute;
              top: 0;
              right: -8px;
              min-width: 10px;
              padding:0 3px;
              background:#000;
              height: 15px;
              color:#fff;
              font-size: 12px;

              .left{
                height: 15px;
                width: 10px;
                position:absolute;
                left: -8px;
                top: 0;
                overflow:hidden;
                .sanjiao{
                  position:absolute;
                  top: 2px;
                  left: 2px;
                  background:#000;
                  width:11px;
                  height: 11px;
                  transform:rotate(45deg);
                }
              }
              .right{
                height: 15px;
                width: 8px;
                position:absolute;
                right: -7px;
                top: 0;
                overflow:hidden;
                .sanjiao{
                  position:absolute;
                  top: 2px;
                  right:2px;
                  background:#000;
                  width:11px;
                  height: 11px;
                  transform:rotate(45deg);
                }
              }
            }
          }

        }
      }
	}
	@media screen and(min-width: 1000px){

		.title1000{
			width: 1000px;
			margin: auto;
			box-sizing: border-box;
			padding-right: 290px;
		}
		.banner{
			height:249px;
			img{
				height: 100%;
			}
		}
		.content{
			position: relative;
			width: 1000px;
			padding-right: 290px;
			box-sizing: border-box;
			padding-left: 0;
			margin:auto;
			.ambassador_list{
				li{
					width: 14.1%;
					&:nth-child(3n){
						margin-right:3%;
					}
					&:nth-child(6n){
						margin-right: 0;
					}
				}
			}
			.page_list{
				cursor: pointer;
			}
		}
	}
 }
</style>
