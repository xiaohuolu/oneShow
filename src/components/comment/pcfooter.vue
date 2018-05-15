<template>
  <div id="pcfooter">
    <div class="pcfooter_box">
      <div class="footer_main mian_1000px">
          <div class="footer_head">
              <ul class="footer1 clear">
                <li v-for="categorie in categories">
                  {{categorie.name}}
                </li>
                <li>Links</li>
              </ul>
              <ul class="footer2 clear">
                <li v-for="(articleList,i) in articleLists">
                  <div class="" v-for="(item,j) in articleList" @click="pushUrl(i,j)">
                    {{item.name}}
                  </div>
                </li>
                <li>
                  <div class="">
                    <router-link to="/share/internation">
                      国际获奖创意作品
                    </router-link>
                  </div>
                  <div class="">
                    <router-link to="/share/youthprodact">
                      中华青年创意作品
                    </router-link>
                  </div>
                  <div class="">
                    <router-link to="/share/picture">
                      One Show活动相册
                    </router-link>

                  </div>
                  <div class="">
                    <router-link to="/share/video">
                      One Show视频
                    </router-link>
                  </div>
                </li>
                <li style="width:80px;">
                  <div class="" @click="erweima">
                    OneShow中国
                  </div>
                  <div class="">
                    <a href="https://www.facebook.com/oneshowchina">
                      Facebook
                    </a>
                  </div>
                </li>
              </ul>
          </div>
          <div class="footer_btm clear">
              <div class="l">
                <div class="logo_box">
                    <a href="https://www.anquan.org/"><img class="l" src="/static/img/footer_left.png"></a>
                    <img class="r" src="/static/img/footer_right.png">
                    <div class="clear"></div>
                </div>
              </div>
              <div class="r" >
                <p>&copy;2000-2018 THE ONE CLUB FOR CREATIVITY .ALL RIGHTS RESERVED.  <h5>
                      <router-link to="/instruction">
                          使用条款
                      </router-link>
                      <router-link to="/privacy">
                          隐私声明
                      </router-link>
                  </h5></p>
              </div>
          </div>
      </div>
    </div>
    <div class="div_erweima" :class="{'on': 1 == on}">
      <span class="iconfont icon-chuyidong" style="font-size: 35px;" @click="erweima"></span>
      <div class="erweima_content">
          <img src="/static/img/link_china.png" alt="">
      </div>
    </div>
    <div class="layer" :class="{'on': 1 == on}" @click="erweima()">

    </div>
    <mt-popup v-model="popupVisible"  position="top">
  			<button class="close_btn"  @click="popupVisible = false"><span class="iconfont icon-chuyidong" style="font-size: 35px;"></span></button>
  			<div class="imgbox">
  				<img src="/static/img/stort111.png" alt="" />
  				<h4>ONE SHOW官方微店</h4>
  			</div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name:'pcfooter',
  data(){
      return{
        categories:[],
        articleLists:[],
        data:{
          'categorieId':'10'
        },
        on:-1,
        popupVisible:false
      }
  },
  created(){
    this.getYi()
  },
  methods:{
    getYi(){
      this.utils.ajax(this,'/app/categoryList',this.data,false).then((res)=>{
        this.categories = res.data.categories
        this.getEr()
      })
    },
    getEr(){
      var t = 0;
      var interval = window.setInterval(()=>{
        if (t<5) {
          this.data.categorieId = this.categories[t].id;
          this.utils.ajax(this,'/app/articleList',this.data,false).then((res)=>{
            this.articleLists.push(res.data.categories)
          })
          t++
        }else {
          window.clearInterval(interval)
        }
      },80)
    },
    pushUrl(i,j){
      let id = this.articleLists[i][j].id
      if (id == '902045e600a94b31a982d41e3578bedb' ) {
        window.location.href="http://festival.oneshow.cn/"
      }else if (id == '71d12250949149b5b152683fcfc3a121') {
        this.$router.push('/youth/ambassador')
      }else if (id == 'cac5bb4bc80c4760a2908015d7643af3') {
          this.popupVisible = true
      }else if (id == '474f429635134ee39cda61b86dda6d09') {
        this.$router.push('/youth/member')
      }else {
        this.$router.push('/artical'  + '/' + id )
      }

    },
    erweima(){
        if (this.on == -1) {
          this.on = 1;
        }else {
          this.on = -1;
        }
    }

  }
}
</script>

<style lang="scss">
#pcfooter{
  .layer{
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background: rgba(000,000,000,0.5);
    z-index: 4000;
    display: none;
    &.on{
      display: block;
    }
  }
  .mint-popup-top{
    background: #000;
    top:50%;
    width: 300px;
    height: 300px;
    margin-top: -150px;
    .close_btn{
      position: absolute;
      right: 0;
      top: 0;
      color: #fff;
      cursor: pointer;
    }
    .imgbox{
      width: 86%;
      margin: auto;
      margin-top: 50px;
      img{
        width: 60%;
        margin: auto;
        display: block;
      }
      h4{
        margin-top: 3%;
        text-align: center;
        font-weight: normal;
        font-size: 14px;
        color: #fff;
      }
      &:last-child{
        margin-top: 50px;
      }
    }
  }
  .div_erweima{
    position: fixed;
    width: 830px;
    height: 350px;
    top: -50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #000;
    z-index: 5000;
    transition: all .3s;
    span{
      position: absolute;
      right: 0;
      top: 0;
      color: #fff;
      background: none;
      border: 0;
    }
    &.on{
      top: 50%;
    }
    .erweima_content{
      img{
        display: block;
        margin: auto;
        margin-top: 60px;
      }
    }
  }
  .mian_1000px{
    width: 1000px;
    margin: auto;
  }
  .footer1{

    padding-left: 0;
    li{
      margin-right: 10px;
      color: #fff;
      width: 140px;
      font-size: 16px;
      float: left;
      &:last-child{
        width: 50px;
      }
    }
  }
  .footer2{
    padding-left: 0;
    li{
      margin-right: 10px;
      float: left;
      color: #999;
      font-size: 12px;
      width:140px;
      div{
        cursor: pointer;
        margin-top: 10px;
        transition: all .3s;
        a{
          color: #999;
          transition: all .3s;
          &:hover{
            color: #fff;
          }
        }
        &:hover{
          color: #fff;
        }
      }
    }
  }
  .pcfooter_box{
    background: #363533;
    height: 329px;
    width: 100%;
    min-width: 1000px;
    .footer_head{
      width: 100%;
      height:215px;
      padding-top: 30px;
    }
    .footer_btm{
      border-top: 1px #ccc dotted;
      width:100%;
      padding-top: 20px;
      color: #999;
      font-size: 12px;
      p{
        display:inline-block;
      }
      h5{
        display: inline-block;
        margin-left: 20px;
        a{
          color: #999;
        }
      }
      .logo_box{
        img{
            margin-right: 20px;
            width:85px;
            &:nth-child(2){
              margin-top: 5px;
            }
        }

      }
    }
  }
}
</style>
