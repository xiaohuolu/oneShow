<template>
	<div id="contact">
     <div class="banner">
      <img src="/static/img/mine_banner.png">  
    </div>
    <div class="title">
      联系我们
    </div>
    <div class="content">

      <div class="row" v-html="html"></div>
    </div>
	</div>
</template>
<script>

export default {
  name: 'contact',
  data() {
  	return {
      data:{
        categorieId:this.$route.params.id,
      },
      html:'<div>加载中...请稍后</div>'
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
        //console.log(res)
        this.html = res.data.articles.content;
      });

    }
  },
  components: {
  }
}
</script>
<style  lang="scss">
 #contact{
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
    padding: 40px 20px;
    p{
       padding: 10px 0;
      line-height:23px;
      font-size: 17px;
      color:#3c3c3c;
      font-family: "microsoft yahei";
      font-weight: 400;
    }
    span{
      padding: 0 16px;
      display: inline-block;
    }
    
  }
 }
</style>