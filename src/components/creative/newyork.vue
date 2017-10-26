<template>
	<div id="newyork">
		<div class="banner">
			<img width="100%" src="/static/img/creative_banner4.png">
		</div>
		<div class="title">
			纽约创意周
		</div>
		<div class="content">
			<div class="row" v-html="html"></div>
			<div class="new_box" v-for="(item,i) in items" key="i" v-if="i>0">
				<div style="position: relative;top: -50px;" :id="i"></div>
				<a :href="'#'+i">
					<div @click="ctrl(i)" class="new_head">
						<span :class="{'iconfont icon-arrow_top l':1==1,'tran': show == i }"></span><h2 class="l">{{item.title}}</h2>
	          			<div class="clear"></div>
					</div>
				</a>
				<div  :class=" {'body': 1 == 1,'body show': show == i }" v-html="item.content">
					
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'newyork',
		data(){
			return{
				show:1,
				data:{
				  categorieId:this.$route.params.id,
				},
				html:'<div>加载中...请稍后</div>',
				items:[
				],
			}
		},
		 props: {},
		filters: {},
		created() {
			this.geiArtical()
		},
		methods: {
			ctrl(i){
				if(this.show != i ){
					this.show = i
				}else {
					this.show = -1
				}
			},
			geiArtical(){
			  this.utils.ajax(this, '/articleData', this.data, false).then((res) => {
			   	this.items = res.data.articles
			   	this.html = res.data.articles[0].content
			  });
			},
		},
		components: {

		}
	}
</script>
<style lang="scss" type="text/css">
#newyork{
	.banner{
			height: 84px;
			overflow: hidden;
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
		.content{
			padding: 40px 20px;
			h4{
        line-height: 35px;
        font-size: 17px;
        font-weight: bolder;
	      }
	    p{
        padding: 10px 0;
        line-height: 23px;
        font-size: 15px;
        color: #3c3c3c;
        font-family: "microsoft yahei";
        font-weight: 400;
        a{
        	color:#000
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
			      transform:rotate(180deg);
			      transition: all .5s;
			      &.tran{
			      	transform:rotate(0deg);
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
		  		transition:all 1s;
		  		&.show{
		  			height: auto;
		  			opacity:1;
		  		}
		  	}
		  }
		}
}
</style>