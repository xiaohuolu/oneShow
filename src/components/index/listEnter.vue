<template>
	<div id="listEnter">
	    <div class="banner">
	      <img src="/static/img/banner_1.png">
	    </div>
	    <div class="title">
				<div class="title1000">
						{{title}}
				</div>
	    </div>
	    <div class="content">
	      <div v-if="show" class="row" v-html="categorieList[0].content"></div>
				<br>
				<img src="/static/img/201610261.png" alt="" width="100%">
				<table  style="text-align:center" border="1" cellpadding="0" cellspacing="0" v-if="tableShow">
					<colgroup>
						<col width="8%"><col width="12%"><col width="20%"><col><col width="20%"><col width="20%"><col width="19%">
					</colgroup>
					<tbody>
						<tr>
							<td>序号</td><td>参赛编号</td><td>作品标题</td><td>作者</td><td>学校/公司</td><td>指导教师</td>
						</tr>
						<tr v-for="(tr,i) in trlist" key="i" >
							<td>{{i+1}}</td><td>{{tr.bianhao}}</td>
							<td>{{tr.title}}</td>
							<td>
								<p v-for="td in tr.mingdan">{{td.name}}</p>
							</td>
							<td>{{tr.school}}</td>
							<td><p v-for="laoshi in tr.laoshi">{{laoshi.name}}</p></td>
						</tr>
					</tbody>
				</table>
				<div class="row" v-html="categorieList[1].content"></div>
	    </div>
	</div>
</template>
<script>

export default {
  name: 'listEnter',
  data() {
  	return {
      data:{
      	categorieId:'9899fcf3121e4b4ab109d0d0bc97b871'
      },
      title:'中华青年创新竞赛',
			tableShow:false,
			categorieList:[{content:''},{content:''}],
			trList:[
				{

				}
			],
			show:false
  	}
  },
  props: {},
  filters: {},
  created() {
			this.geiArtical(),
			this.getWen()
  },
  methods: {
  	geiArtical (){
	    this.utils.ajax(this, '/app/ruwei', this.data, false).then((res) => {
				 this.trlist = res.data.ruweis
				 this.tableShow = true
	    });
    },
		getWen (){
			this.utils.ajax(this, '/app/articleData', this.data, false).then((res) => {
				 this.categorieList = res.data.articles
				 this.show = true
			});
		}
  },
  components: {
  }
}
</script>
<style  lang="scss">
 #listEnter{
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
		table{
			border:1px solid #999;
			color: #777;
			font-size: 14px;
			font-family:"din","microsoft yahei"!important;
			width: 100%;
			border-collapse: collapse;
			tr{
				td{
					padding:5px;
					box-sizing: border-box;
				}
			}
			p{
				color: #777
			}
		}
		@media screen and(max-width: 1000px){
			table{
				font-size: 12px;
				p{
					font-size: 12px;
				}
			}
		}
		@media screen and(max-width: 1000px){
			.title{
				margin-top: -5px;
			}
		}
    .content{
      padding: 20px;
    }
    p{
      padding: 10px 0;
      line-height: 23px;
      font-size: 15px;
      color: #3c3c3c;
      font-family: "microsoft yahei";
      font-weight: 400;
			&:first-child{
				padding-top: 0
			}
    }
		@media screen and (min-width: 1000px){
			.title1000{
				width: 1000px;
				margin: auto;
			}
			.banner{
				height: 249px;
				img{
					height: 100%;
				}
			}
			.content{
				width: 1000px;
				margin: auto;
				padding-right: 300px;
				box-sizing: border-box;

			}
		}
 }
</style>
