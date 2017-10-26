<template>
  <div id="zh_award">
    <div class="banner">
      <img src="/static/img/zh_head.png">  
    </div>
    <div class="title">
      2016 ONE SHOW中华创意奖项
    </div>
    <div class="content">
      <div class="main1" v-html="html">
         
      </div>
      <div class="main2" v-for="(item,i) in items" key="i" v-if="i>0" >
      	<div :id="i" style="position:relative;top: -50px;"></div>
      	<a :href="'#'+i">
	        <div class="main2_head" @click="getId(i)"> 
	          <span class="iconfont icon-arrow_top l"></span><h2 class="l">{{item.title}}</h2>
	          <div class="clear"></div>
        	</div>
        </a>
        <div :class="{'body':1 == 1 , 'body active' : ctrl == i   }" v-html="item.content">
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'zh_award',
  data() {
    return {
      ctrl: -1,
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
    getId (i) {
        if ( i!=this.ctrl ) {
          this.ctrl=i
        }else {
          this.ctrl=-1
        }
    },
    geiArtical(){
      this.utils.ajax(this, '/articleData', this.data, false).then((res) => {
         //console.log(res)
         this.items = res.data.articles;
         this.html = res.data.articles[0].content;
      });
    },
  },
  components: {
  }
}
</script>
<style  lang="scss">
  #zh_award{
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
    .content{
      padding: 40px 20px;
      h4{
        line-height: 35px;
        font-size: 17px;
        font-weight: bolder;
      }
      p{
        padding: 10px 0 20px 0;
        line-height: 23px;
        font-size: 17px;
        color: #3c3c3c;
        font-family: "microsoft yahei";
        font-weight: 400;
      }
      .main2{
        .main2_head{
          padding: 20px 0;
          border-bottom: 1px #949393 solid;
          span{
            display: block;
            color:#d3be95;
            margin-right: 10px;
            font-size: 25px;
            transform:rotate(180deg);
          }
          h2{
            width:80%;
            color:#949393;
          }

        }
        .body{
          height: 0;
          overflow:hidden;
          opacity:0;
          transition: all 1s;
          &.active{
            height: auto;
            opacity: 1;
          }
        }
      }
    
    }
  }
</style>