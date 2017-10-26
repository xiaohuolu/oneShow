<template>
	<div id="query">
		<div class="banner">
			<img src="/static/img/share.png">
		</div>
		<div class="title">
			<div class="title1000">
				中华青年创新竞赛
			</div>
		</div>
		<div class="content">
			<!-- 二级菜单 -->
			<div class="pc_erji">
				<div class="pc_erji_head">
					青年创新节
				</div>
				<div class="pc_erji_list">
					<ul>
						<li v-for="(articalList,i) in articalLists" :class="{'current' : i == currentCtrl}">
							<span><img src="/static/img/icon1.png" alt=""></span><router-link :to="articalList.id">{{articalList.name}}</router-link>
						</li>
					</ul>
				</div>
			</div>
			<!-- 查询操作 -->
			<div class="query_box">

				<img src="/static/img/201610261.png" alt="" width="100%">
				<form>
					<label>
						<span>
							请输入参赛入围编号：
						</span>
						<input type="text" v-model="data.bianhao" name="">
					</label>
					<label>
						<span>
							请输创想家平台参赛账号的电话号码：
						</span>
						<input type="text" v-model="data.phone" name="">
						<i>* 团队参赛的输入任一队员手机号都可验证</i>
					</label>
					<button @click.prevent="querySub()">查询</button>
				</form>
				
				<!-- 入围团队参赛者列表 -->
				<table  style="text-align:center" border="1" cellpadding="0" cellspacing="0" v-if="tableShow">
					<colgroup>
						<col width="5%"><col width="10%"><col width="20%"><col width="15%"><col width="30%"><col width="20%">
					</colgroup>
					<tbody>
						<tr>
							<td>-</td><td>序号</td><td>入围编号</td><td>姓名</td><td>学校</td><td>状态</td>
						</tr>
						<tr v-for="(tr,i) in trlist" key="i" >
							<td> <input class="checkBox" type="checkbox" name=""></td>
							<td>{{i+1}}</td>
							<td> {{tr.bianhao}}</td>
							<td> {{tr.name}}</td>
							<td>{{tr.school}}</td>
							<td v-if="tr.state == 1">未支付</td>
							<td v-if="tr.state == 2">支付成功</td>
						</tr>
					</tbody>
				</table>
				
				<img class="ali_pay" v-if="tableShow" @click="aliPay()" src="/static/img/alipay.png">
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import { Indicator } from 'mint-ui';
	import { Swipe, SwipeItem } from 'mint-ui';
	export default{
		name:'query',
		data(){
			return{
				currentCtrl:0,
				articalLists:[
					{
						name:'中华青年创新竞赛',
						id:'/artical/5db7d525ccce4de190b724cb1178b692'
					},
					{
						name:'中华青年创新营',
						id:'/artical/5ef8dbea380346748139a161a1be6bca'
					},
					{
						name:'校园大使招募计划',
						id:'/youth/ambassador'
					},
					{
						name:'教师分享计划',
						id:'/artical/a1fa6e0b9f58414f8d568945c253329f'
					}
				],
				data:{
					bianhao:'',
					phone:''
				},
				applyData:[],
				tableShow:false,
				trlist:null,
			}
		},
		created(){

		},
		mounted(){
			
		},
		methods:{
			querySub(){
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
				var close = setTimeout(()=>{
					Indicator.close();
				},1000)
				this.utils.ajax(this,'/app/ruweizhifu',this.data,false).then((res)=>{
					if (res.data.list  != undefined ) {
						this.trlist = res.data.list
						this.tableShow = true
					}else if (res.data.list == undefined) {
						this.$toast({
							  message: '对不起您不在入围团队中，或者您输入的信息有偏差',
							  position: 'center',
							  duration: 3000
						})
						this.tableShow = false;
					}
				});
			},
			aliPay(){
				// 充值被选中的还未支付列表信息
				let aliPay = "";
				let host = window.location.host;
				let myWindow = window.open('http://'+host+'/static/ipay.html')
				if( this.utils.userIf()){
					aliPay = '/alipaytwo/pcPaytwo';

				}else {
					aliPay = '/alipaytwo/mobilePaytwo'

				}
				this.applyData = [];
				let  checkBoxs = document.getElementsByClassName('checkBox')
				for (let i = 0 ; i < checkBoxs.length ; i++ ) {
					if ( checkBoxs[i].checked  ) {
						this.applyData.push(this.trlist[i])
					}
				}
				// alert(JSON.stringify(this.applyData))
				// alert(this.applyData.length)
				let checkIs = JSON.stringify(this.applyData)
				this.utils.ajax(this,aliPay,{uid:checkIs,num:this.applyData.length},false).then((res)=>{
					myWindow.charset = "utf-8"
					myWindow.document.write(res)
				});
			}
		},
		props: {},
		filters: {},
		components:{

		}
	}
</script>
<style lang="scss">
	#query{
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
        .content {
        	padding:20px;
        	form{
				label{
					display:block;
					padding:20px 0;
					input{
						padding:3px 10px;
					}
					span{
						display:block;
						margin-bottom:10px;
						 font-family:"din","microsoft yahei",sans-serif!important;
					}
					i{
						color: #F60;
						font-style: normal;
					}
					@media screen and(max-width:600px){
						i{
							display:block;
							margin-top: 10px;
						}
					}
				}
				button{
					width: 80px;	
					margin-top: 20px;
					font-family:"din","microsoft yahei";
					font-size: 15px;
					background:#000;
					color: #fff;
					padding:3px 20px;
				}
        	}
        	table{
        		margin-top: 20px;
        		width: 100%;
        		td{
        			padding: 10px 0px;
        			box-sizing:border-box; 
        			font-family: "microsoft yahei","din"
        		}
        		@media screen and(max-width:500px){
        			td{
        				font-size:12px;
        			}
        		}
        	}
        	img.ali_pay{
        		margin-top:20px;
        		margin-bottom: 50px;
        		border:1px #ccc solid;
        		cursor:pointer;
        	}
        }
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
  }
}
}
</style>