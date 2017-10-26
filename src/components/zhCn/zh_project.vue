<template>
  <div id="zh_project">
    <div class="banner">
      <img src="/static/img/zh_head.png">  
    </div>
    <div class="title">
      2016 ONE SHOW中华创意奖
    </div>
    <div class="content">
          <div class="row" v-html="html"></div>
    </div>


    </div>

  </div>
</template>
<script>

export default {
  name: 'zh_project',
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
    },
  },
  components: {
  }
}
</script>
<style  lang="scss">
  #zh_project{
    .banner{
      height:135px;
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
    h4{
      line-height: 35px;
      font-size: 18px;
      font-weight: bolder;
    }
    p{
      padding: 10px 0;
      line-height: 23px;
      font-size: 17px;
      color: #3c3c3c;
      font-family: "microsoft yahei";
      font-weight: 400;
    }
    .content{
      padding: 40px 20px;
      .project_main{
        padding: 10px 0;
        .j_box{
          
          span{
            font-weight: 600;
          }
          img{
            max-width: 100%;
            display: block;
            margin:10px auto;
          }
        }
      }
    }

  }
</style>