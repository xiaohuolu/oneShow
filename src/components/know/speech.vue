<template>
	<div id="know-box">
	    <div class="banner">
	      <img src="/static/img/mine_banner.png">  
	    </div>
	    <div class="title">
	      	致辞
	    </div>
	    <div class="content">
	      <div class="row" v-html="html">
	        
	      </div>
	    </div>
	</div>
</template>
<script>

export default {
  name: 'speech',
  data() {
  	return {
      
      data:{
        categorieId:this.$route.params.id,
      },
      html: '<div>暂无内容</div>'
  	}
  },
  props: {},
  filters: {},
  created() {
    this.geiArtical()
  },
  methods: {
    geiArtical(){
      this.utils.ajax(this, '/articleData', this.data, false).then((res) => {

        this.html = res.data.articles.content
      });

    }
  },
  components: {
  }
}
</script>
<style  lang="scss">
 #know-box{
  .banner{
    height: 80px;
    overflow: hidden;
    img{
      width:100%;
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
  .content{
    background:#fff;
    padding: 40px 20px;

  }
 }
</style>