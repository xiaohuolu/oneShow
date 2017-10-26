<template>
	<div id="camp">
   <!-- banner -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="i in 6" key="i">
        <img src="/static/img/swipe1.png">
      </mt-swipe-item>
    </mt-swipe>
    <div class="title">
      中华青年创新营
    </div>
    <div class="content">
      <div class="row" v-html="html"></div>
    </div>
	</div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'camp',
  data() {
  	return {
      data:{
        categorieId:this.$route.params.id,
      },
      html:'<div>暂无内容</div>'
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
  #camp{
    .mint-swipe{
      height:150px;
      img{
        width: 100%;
      }
      .mint-swipe-indicator{
        opacity: 0.4
      }
      .mint-swipe-indicator.is-active{
        opacity:1
      }
      .mint-swipe-indicators{
        bottom: 3px;
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
      h4{
        line-height: 35px;
        font-size: 16px;
        font-weight: bolder
      }
      p{
        padding: 10px 0;
        line-height:23px;
        font-size: 15px;
        color:#3c3c3c;
        font-family: "microsoft yahei";
        font-weight: 400;
        span{
          font-weight: bolder;
        }
      }
      h3{
        margin-bottom: 20px;
      }
      .activety_box{
        padding: 10px 0;
      }
    }
  }
</style>