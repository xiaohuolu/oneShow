<template>
	<div id="business">
		 <div class="banner">
      <img src="/static/img/mine_banner2.png">  
    </div>
    <div class="title">
      我们的业务
    </div>
    <div class="content">
      <h2>我们的业务包括</h2>
      <div class="business_box" v-for="(item,i) in business" key="i">
      

        <div class="box_head"  @click="getId(i)">
          <span :class="{'iconfont icon-arrow_top l': 1==1 ,'tran' :tab_ctrl == i   }"  ></span><h2 class="l">{{item}}</h2>
          <div class="clear"></div>
        </div>
	 
        <div :class="{ 'box_main': 1 == 1,'box_main show': tab_ctrl == i }"  v-html="item">
        
        </div>
      </div>
    </div>
	</div>
</template>
<script>

export default {
  name: 'business',
  data() {
  	return {
      tab_ctrl:1,
      data:{
        categorieId:this.$route.params.id,
      },
      html:'<div>暂无内容</div>',
      business:[
      
      ]
  	}
  },
  props: {},
  filters: {},
  created() {
    this.geiArtical()
  },
  methods: {
    getId(i) {
      if (this.tab_ctrl != i) {
        this.tab_ctrl = i;
      }else{
        this.tab_ctrl = -1
      }
    },
    geiArtical(){
      this.utils.ajax(this, '/articleData', this.data, false).then((res) => {
        this.business = res.data.articles
          console.log(this.business)
        
      });
    },

  },
  components: {
  }
}
</script>
<style  lang="scss">
 #business{
   .maodian{
   		position: relative;	
   		top: -50px;
   }
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
  .box_head{
    padding: 20px 0;
    border-bottom: 1px #949393 solid;
    span{
      display: block;
      color:#d3be95;
      margin-right: 10px;
      font-size: 25px;
      transition:all .5s; 
      transform:rotate(180deg);
      &.tran{
        transform:rotate(0deg);
      }
    }
    h2{
      width:80%;
      color:#949393;
    }
  }
  .box_main{
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition:opacity 1s; 
    p{
      padding: 10px 0;
      line-height:23px;
      font-size: 17px;
      color:#3c3c3c;
      font-family: "microsoft yahei";
      font-weight: 400;
    }

    &.show{
      opacity:1;
      height: auto;
    }
  }
 }
</style>