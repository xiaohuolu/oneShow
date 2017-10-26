<template>
  <div id="pc_header" >
    <nav @mouseleave.prevent="tral()">
        <div class="mian_1000px width_1000_center" >
            <div class="logo l" @click="goHome()">
                <img src="/static/img/pc_logo.jpg" alt="">
            </div>
            <ul class="nav_list">
              <li @click="goHome()">
                首页
              </li>
              <li v-for="(categorie,i) in categories" @click="search(i)" :class="{ 'current' : i == activeI }" v-if="i != 5" >
                {{categorie.name}}
              </li>
              <li @click="sharePage()" :class="{ 'current' : 5 == activeI }">
                分享
              </li>
            </ul>

            <div class="user" v-if="!onLogin">
                <button type="button" @click="login(1)" name="button">登录</button>
                <button type="button" @click="login(2)" name="button">注册</button>
            </div>
            <div class="user" v-if="onLogin">
                <router-link to="/mine">
                    <button type="button" name="button"><div class="username" style="">{{this.username}}</div>| 个人中心</button>
                </router-link>

                <button type="button" @click="signOut()" >退出</button>
            </div>

        </div>
        <div class="list2_box" :class="{'show' : activeUl == 1  } ">
          <div class="mian_1000px">
              <div class=""  v-if='!share'>
                <ul class="nav_list2">
                  <li v-for="(article,j) in articles" @click="pushArtical(j)">
                    {{article.name}}
                  </li>
                </ul>
                <div class="img_box" v-if="categorie.keywords == 1">
                    <router-link :to="categorie.href">
                        <img :src="categorie.image" alt="">
                    </router-link>

                </div>
                <div class="img_box" v-if="categorie.keywords == 2">
                  <a :href="categorie.href" target="_blank">
                    <img :src="categorie.image" alt="">
                  </a>
                </div>
              </div>
              <div class="" v-if="share">
                <ul class="nav_list2" >
                  <li v-for="shareList in shareLists">
                    <router-link :to="shareList.path">
                      {{shareList.name}}
                    </router-link>
                  </li>
                </ul>
                <div class="img_box">
                  <a href="http://www.oneshow.org/creativeweek/">
                    <img src="/static/img/nav_banner.jpg" alt="">
                  </a>

                </div>
              </div>
          </div>
        </div>
    </nav>

    <pclogin  v-bind:loginShow = 'loginShowIf' v-on:listenToChildEvent="showLogin"></pclogin>
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
import pclogin from '@/components/comment/pclogin';
import { Indicator } from 'mint-ui';
export default {
  name:'pc_header',
  data(){
    return{
      data:{
        'categorieId':'10'
      },
      categories:[],
      articles:[],
      activeI:-1,
      activeUl:-1,
      onLogin:false,
      share:false,
      loginShowIf:0,
      username:'',
      popupVisible:false,
      categorie:{},
      shareLists:[
        {
          'name':'国际获奖创意作品',
          'path':'/share/internation'
        },{
          'name':'中华青年创意作品',
          'path':'/share/youthprodact'
        },{
          'name':'One Show活动相册',
          'path':'/share/picture'
        },{
          'name':'One Show视频',
          'path':'/share/video'
        }
      ]
    }
  },
  created(){
    this.getYi(),
    this.loginIf()
  },
  methods:{
    getYi(){
      this.utils.ajax(this,'/app/categoryList',this.data,false).then((res)=>{
        this.categories = res.data.categories;
      })
    },
    loginIf(){
        if(sessionStorage.token== undefined){
          this.onLogin = false;
        }else {
          this.onLogin = true;
          this.username = sessionStorage.username
        }
    },
    sharePage(){
      this.activeUl = 1;
      this.share = true;
      this.activeI = 5
    },
    search(i){
        this.share = false;
        this.activeI = i;
        this.activeUl = 1;
        this.data.categorieId = this.categories[i].id
        this.utils.ajax(this,'/app/articleList',this.data,false).then((res)=>{
          this.articles = res.data.categories
          this.categorie = res.data.categorie
          //console.log( this.categorie);
          this.categorie.image = 'http://123.57.15.15:8080' +  this.categorie.image.replace('/_thumbs','')
          if (  this.categorie.keywords == 1) {
            this.categorie.href =  '/artical/'+this.categorie.href
          }

        })
    },
    pushArtical(j){
      if (this.activeI == 3 && j == 2 ) {
          this.$router.push( '/youth/ambassador')
      }else if(this.activeI == 2 && j == 1 ){
          window.location.href='http://festival.oneshow.cn/'
      }else if(this.activeI == 0 && j == 4 ){
          this.popupVisible = true
      }else if(this.activeI == 3 && j == 3 ){
          this.$router.push( '/youth/member')
      }else {
        let id = this.articles[j].id
        this.$router.push( '/artical' + '/' + id)
      }

      this.activeI = -1;
    },
    tral(){
      this.activeI = -1
      this.activeUl = -1;
    },
    goHome(){
      this.activeI = -1;
      this.activeUl = -1;
      let home = 'http://'+window.location.host+'/'
      window.location.href= home
    },
    login(i){
      this.animate(500)
      this.loginShowIf = i
    },
    showLogin(data){
        this.loginShowIf=data;
        this.animate(500)
    },
    signOut(){
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('username')
      Indicator.open({
        text: "退出成功，3s后回到首页",
        spinnerType: 'fading-circle'
      });
      var close = setTimeout(()=>{
        Indicator.close();
      },3000)
      this.loginIf();
      setTimeout(()=>{
        let local = window.location.host;
        window.location.href='http://'+local
      },3000)



    },
    animate(time){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      var close = setTimeout(()=>{
        Indicator.close();
      },time)
    }
  },
  components:{
    pclogin
  }
}
</script>

<style lang="scss">
.mint-indicator-wrapper{
  z-index: 5000
}
.mint-toast{
  z-index: 9999
}
#pc_header{
  .mian_1000px{
    width: 1000px;
    margin: auto;
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
  nav{
    min-height: 61px;
    background: #363533;
    position: relative;
    z-index:8000;
    min-width: 1000px;
    .logo{
      position: absolute;
      width: 130px;
      height: 130px;
      z-index: 200;
      cursor: pointer;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .user{
      float: right;
      line-height: 60px;
      a{
        button{
          width: 155px;
          .username{
            position:relative;
            display:inline-block;
            width: 65px;
            overflow:hidden;
            white-space:nowrap;
            text-overflow: ellipsis;
            top: 4px;
            padding-right: 5px;
            text-align:right;
          }
          
        }
      }
      button{
        color: #999;
        font-size: 16px;
        transition: all .3s;
        cursor: pointer;
        width: 50px;
        &:hover{
          color: #fff;
        }
      }
    }
    .nav_list{
      position: relative;
      margin-left: 130px;
      background: #fff;
      padding-left: 0;
      padding-left: 10px;
      li{
        cursor: pointer;
        line-height: 60px;
        float: left;
        color:#fff;
        font-weight: 400;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        color: #efefef;
        padding:0 13.5px;
        transition: all .3s;
        &:hover{
          background:rgb(35,35,35)
        }
        &.current{
          background:rgb(35,35,35)
        }
      }
    }
    .list2_box{
      position: absolute;
      height: 250px;
      background: rgb(35,35,35);
      width: 100%;
      opacity: 0;
      transition: all .2s;
      top: -500px;
      min-width: 1000px;
      &.show{
        display: block;
        opacity: 1;
        top: 59px;
      }
      .nav_list2{
        margin-top: 10px;
        margin-left: 115px;
        float: left;
        li{
          cursor: pointer;
          color: #fff;
          line-height: 30px;
          font-size: 14px;
          a{
            color: #fff
          }
        }
      }
      .img_box{
        float: right;
        height:250px;
        img{
          height: 100%
        }
      }
    }

  }
}
</style>
