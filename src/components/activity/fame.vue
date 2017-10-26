<template>
	<div id="fame">
    <div class="banner">
      <img src="/static/img/zh_head.png">  
    </div>
    <div class="title">
      创意名人堂
    </div>
    <div class="content">
       <div class="content_head">
        <img width="100%" src="/static/img/project_con_head1.png">
      </div>
      <div class="mian_head">
        <img class="l" src="/static/img/fame_main_h1.png" alt="">
        <img class="l" src="/static/img/fame_main_h2.png" alt="">
        <img class="l" src="/static/img/fame_main_h3.png" alt="">
        <div class="head_2">
          <img src="/static/img/fame_main_h4.png" alt="">
          <img src="/static/img/fame_main_h5.png" alt="">
        </div>
        <p>
          The One Club创意名人堂授予仪式，这一传统始于1960年代，那时候The One Club甚至还未正式组成，还是两个独立的创意人俱乐部：艺术指导俱乐部和文案俱乐部。
每过几年，The One Club总会评选出当前世界上最具创新精神并在生涯中做出了卓越贡献的伟大人物，为他们授予终身成就奖。入选创意名人堂的人都是全球顶级的设计大师、广告人，他们为世界广告创意事业的发展做出了杰出贡献。自The One Club创意名人堂成立以来，有众多顶级的创意人入选。从波恩巴赫到威登，从奥格威到乔布斯，这些创意名人堂的入选者来自世界上极少数的公司。<br><br>

2013年1月22日，纽约百老汇Gotham剧院，The One Club创意名人堂终身成就奖授予仪式即将举行，数百位顶尖创意人物将见证这一时刻。曾参与苹果1984广告的Steve，三十年前为BMW作出全新定义的Martin，为Nike创造一系列奇迹的Jim，已故英国电视广告鼻祖John以及广告教育前辈Richard都将被授予这一殊荣。<br><br>

2012年12月，One Show广告节全球年度最佳创意作品展“You are the Creative Star”在三里屯Village万宝龙全球旗舰体验中心开幕。One Show创意名人堂巡礼（Creative Hall of Fame）得此首次亮相中国。观众在创意的氛围中感受创意名人带来的精神洗礼，One Show创意名人堂的展示同时也激励更多年轻创意人提高广告创意水准，获得肯定与荣誉。这是The One Club创意名人堂第一次来到中国与观众见面，在未来的时间里，One Show创意名人堂巡礼（Creative Hall of Fame）会走遍更多的地方，为更多的中国观众带来巡展。<br><br>

        </p>

        <!--  -->
        <div class="introduce_box" >
          <div class="intro_body" v-for="i in 3">
            <img @click="disc_ctrl(i)" src="/static/img/fame_body_1.png">
            <h4>David Abbott</h4>
             
          </div>
          <div class="clear"></div>
        </div>

      </div>
    </div>
    <mt-popup v-model="popupVisible1" position="top">
                <i @click="close()" class="iconfont icon-chuyidong">
                  
                </i>
                <div class="disc">  
                  <div class="disc_head">
                    <img src="/static/img/fame_body_1.png">
                    <div class="jianli">
                      <h3>David Abbott</h3>
                      <p>
                        Born 1938 <br>
                        Inducted 授予年份: 1994<br>
                        Co-founderofChiat/ Day, New York<br>
                        Chiat/Day联合创始人
                        </p>
                    	
                    </div>
                    <div class="clear"></div>
                  </div>
                  <div class="life_story">
                    <p>
                      大卫•阿伯特是英国知名广告人以及 AMV BBDO 广告公司的创始人之一。阿伯特的广告生涯开始于Mather &Crowther广告公司，随后，他又加盟了伦敦著名的 DDB 公司。1966 年，他被派遣到 DDB 纽约分公司，回到总公司后升任为总监。1971 年，他创办了 French Gold Abbott 广告公司。1978 年，AMV 广告公司也正式成立。他曾为众多客户留下难忘的广告服务，如沃尔沃、桑斯伯里超市、宜家家居、芝华士、《经济学人》、黄页以及英国皇家防止虐待动物协会。1991 年，BBDO 收购了 AMV 的股份，公司名更改为 AMV BBDO 广告公司。 2001 年，纽约艺术指导俱乐部与文案俱乐部将阿伯特的名字载入创意名人堂。阿伯特的第一本小说《The Upright Piano Player》由麦理浩出版社于 2010 年出版。他婚后共育有 4 个子女和 8 个孙子女。
                    </p>
                  </div>
                </div>
            </mt-popup>
          
	</div>
</template>
<script>
import { Popup } from 'mint-ui';
export default {
  name: 'fame',
  data() {
  	return {
      popupVisible1:false,
      layer : false
  	}
  },
  props: {},
  filters: {},
  created() {},
  methods: {
    disc_ctrl(i){
      console.log(i)
      if (!this.popupVisible1) {
        this.popupVisible1 = !this.popupVisible1
        
      }
    },
    close(){
      this.popupVisible1 = false;
     
    }

  },
  watch:{
    body(){
      if(this.popupVisible1){
        document.body.style.overflow = 'hidden';
      }else {
        document.body.style.overflow = 'auto';
      }
    }
  },
  components: {
  }
}
</script>
<style  lang="scss">
  #fame{
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
        font-size: 18px;
        font-weight: bolder;
      }
      p{
        padding: 10px 0;
        line-height: 23px;
        font-size: 15px;
        color: #3c3c3c;
        font-family: "microsoft yahei";
        font-weight: 400;
      }
      .mian_head{
        margin-top: 30px;
        img{
          width:28%;
          margin-right: 5%;
        }
        .head_2{ 
          text-align: center;
          img{
            display: inline-block;
            margin: 2%;
          }
        }
      }
    }
    .introduce_box{
      width:100%;
      .intro_body{
        width:47%;
        float:left;
        min-height: 220px;
        img{
          display:block;
          width: 100%;
        }
        &:nth-child(2n){
          float:right;
        }
        
        
      }

    }
    .mint-popup-top{
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
          background:#000;
          height: 70%;
          width: 90%;
          top: 50%;
          transform:translate(-50%,-50%); 
          overflow:hidden;
          box-sizing: border-box;
          padding: 40px 15px 15px 15px;
         
          i{
            position:absolute;
            right: -0px;
            top: -6px;
            color: #fff;
            padding: 10px;
            z-index: 2000;
            font-size:30px;
          }
          .disc{
		    overflow: auto;
		    width: 100%;
		    height: 100%;
		    box-sizing: border-box;
		     padding-bottom:50px;
            img{
              width: 48%;
              box-sizing: border-box;
              float: left;
             
            }
            .jianli{
              float: left;
              width: 45%;
              padding-left:15px;
              p{
                padding: 0;
                font-size: 13px;
              }
            }

            h3{
              color:#fff;
            }
            p{
              padding: 20px 0px;
              color:#fff;
              font-size: 14px;
              font-weight: normal
            }
          }
        }
    .layer_box{
      z-index:10;
      position: fixed;
      background:rgba(0,0,0,0.5);
      width:100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
</style>