<template>
	<div id="stort">
     <div class="banner">
      <img src="/static/img/mine_banner2.png">  
    </div>
    <div class="title">
      我们的业务
    </div>
    <div class="content">
      <div class="shop_box l" v-for="i in 10">
        <img src="/static/img/shop.png">
        <h5>2015 One Show 
          中国青年创意年鉴
        </h5>
        <p>168元</p>
      </div>
      <div class="clear"></div>
    </div>
	</div>
</template>
<script>

export default {
  name: 'stort',
  data() {
  	return {
     
  	}
  },
  props: {},
  filters: {},
  created() {},
  methods: {},
  components: {
  }
}
</script>
<style  lang="scss">
 #stort{
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
    .shop_box{
      width: 50%;
      box-sizing: border-box;
      padding:0 20px 20px 20px;
      border-top: 1px #d3d3d3 solid;
      &:nth-child(2n-1){
        border-right: 1px #d3d3d3 solid;
      }
      &:nth-child(2n){
        border-left: 1px #fff solid;
      }
      &:nth-child(1){
        border-top:0
      }
      &:nth-child(2){
        border-top:0
      }
      img{
        width:100%;
        display: block;
      }
      h5{
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 15px;
      }
    }
  }
 }
</style>