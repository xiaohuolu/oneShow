<template>
	<div id="about_box">
		 <div class="banner">
      <img src="/static/img/mine_banner.png">  
    </div>
    <div class="title">
      关于我们
    </div>
    <div class="row" v-html="html">
        
    </div>
	</div>
</template>
<script>

export default {
  name: 'about',
  data() {
  	return {
    data:{
      categorieId:this.$route.params.id,
    },
     html: '<div>加载中...请稍后</div>'
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
  #about_box{
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
    .card{
      img{
        width: 130px;
        height: 130px;
        border: 1px #d3d3d3 solid;
      }
      .disc{
        margin-left: 20px;
        h3{
          margin-top: 51px;
          line-height:30px;
          font-size: 18px;
          font-weight: 700;
          color:#3c3c3c;
        }
        h4{
          line-height:30px;
          font-size: 15px;
          color:#3c3c3c;
        }
        p{
          
          height: 30px;
          line-height: 22px;
          img{
            width: 20px;
            margin-right: 10px;
            height:auto;
            border: 0;
          }
          span{
            margin-right: 10px;
          }
        }
      }
    }
    .main{
      h3{
        line-height:45px;
        font-weight:800;
        color:#3c3c3c;
        font-family::"微软雅黑";
      }
      p{
        padding: 10px 0;
        line-height:23px;
        font-size: 17px;
        color:#3c3c3c;
        font-family: "microsoft yahei";
        font-weight: 400;
      }
    }
    .qian{
      padding: 30px 0;
    }

    

  }
  .about_head{
    max-width: 90%;
    display: block;
    margin: auto
  }
  }
</style>