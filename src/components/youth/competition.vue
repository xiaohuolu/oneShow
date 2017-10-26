<template>
	<div id="competition">
     <mt-swipe :auto="4000">
      <mt-swipe-item v-for="i in 6" key="i">
        <img src="/static/img/swipe1.png">
      </mt-swipe-item>
    </mt-swipe>
    <div class="title">
      中华青年创意竞赛
    </div>
    <div class="content">
      <div class="row" v-html="html"></div>

      <!--  -->
      <div class="tran_box">
        <div class="tran_head" @click="jiabao()">
           <span :class="{'iconfont icon-arrow_top l': 1==1 ,'tran' :tab_ctrl == 2  }"  ></span><h2 class="l">历届创意竞赛简报</h2>
           <div class="clear"></div>
        </div>
        <div :class="{'tran_body': 1==1,'show' :tab_ctrl == 2  }">
          <ul class="jianbao_list">
            <li v-for="i in 3">
              <div class="time l">
                <i>
                  2004
                </i>
              </div>
              <div class="jianbao_body r">
                <img class="jianbao" src="/static/img/jianbao1.png">
                <img src="/static/img/jianbao2.png">
                <img src="/static/img/jianbao1.png">
                <img src="/static/img/jianbao2.png">
                <img src="/static/img/jianbao1.png">
                <img src="/static/img/jianbao2.png">
                <div class="clear"></div>
              </div>
              <div class="clear"></div>
            </li>

          </ul>
        </div>

      </div>
      <!--  -->
      <div class="tran_box">
        <div class="tran_head" @click="jiabao_xia()">
           <span :class="{'iconfont icon-arrow_top l': 1==1 ,'tran' :tab_ctrl1 == 2  }"  ></span><h2 class="l">历届创意竞赛海报</h2>
           <div class="clear"></div>
        </div>
        <div :class="{'tran_body': 1==1, 'show' :tab_ctrl1 == 2  }">
          <ul class="heiabao_list">
            <li v-for="i in 10">
              <img src="/static/img/haibao.png">
              <i>2004</i>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        
      </div>
    </div>
	</div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'competition',
  data() {
  	return {
      tab_ctrl:0,
      tab_ctrl1:0,
      data:{
        categorieId:this.$route.params.id,
      },
      html:'<div>暂无内容</div>',
      items:[
      ]
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
       console.log(res.data.articles) 
       this.html = res.data.articles[0].content;
       this.items = res.data.articles;
      });
    },
    jiabao(){
      if (this.tab_ctrl != 2) {
        this.tab_ctrl = 2;
      }else {
        this.tab_ctrl = 0
      }
    },
    jiabao_xia(){
      if (this.tab_ctrl1 != 2) {
        this.tab_ctrl1 = 2;
      }else {
        this.tab_ctrl1 = 0
      }

    }
  },
  components: {
  }
}
</script>
<style  lang="scss">
 #competition{
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
  .content{
    padding: 20px;
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
      &.biaoyu{
          font-size: 12px;
          margin-bottom: 40px;
      }
    }
    h3{
      margin-bottom: 20px;
      a{
        font-size: 12px;
        color:#000;
      }
    }
    .briefing_box{
      img{
        float: left;
        width: 35%;
        margin-right: 5%;
        margin-bottom: 5%;
      }
    }
    .contect_box{
      width: 100%;
      text-align: center;
      padding: 20px 0;
      h4{
        color:#bb5352
      }
      img{
        display: block;
        width: 45%;
        margin:auto;
      }
    }
    .tran_box{
      .tran_head{
        padding: 20px 0;
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
          color:#949393;
          border-bottom: 1px #949393 solid;
          padding-bottom: 20px;

        }
      }
      
      .tran_body{
        display:block;
        overflow: hidden;
        flex-flow: row;
        height: 0;
        transition:all 1s;
        opacity: 0;
        &.show{
          height: auto;
          opacity:1;
          padding-bottom: 60px;
          padding-top: 20px;
        }
        li{
          display: flex;
          .time{
            padding-right: 15px;
            i{
              color:#949393;
              font-style: normal;
            }
          }
          .jianbao_box{
            border:1px red solid; 
            flex:1;
            padding-bottom: 20px;
          }
          img{
              display:block;
              float: left;
              max-height: 60px;
              padding-bottom: 20px;
              vertical-align: top;
          }
        
        }
        .heiabao_list{
          padding-left: 0;
          li{
            float:left;
            width: 29%;
            display:block;
            padding:0;
            margin:0 6% 10px 0;  
            &:nth-child(3n){
              margin-right: 0;
            }
            img{
              padding-bottom:0;
              width: 100%;
              height: auto;
              max-height:none; 
            }
            i{
              line-height: 34px;
              display:block;
              font-style:normal;
              font-size: 13px;
            }
          }
         
        }
      }
    }
  }
 }
</style>