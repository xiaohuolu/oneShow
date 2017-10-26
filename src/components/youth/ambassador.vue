<template>
	<div id="ambassador">
    <div class="banner">
      <img src="/static/img/xiaoyuan.png">
    </div>
    <div class="title">
     <div class="title1000">
      校园大使招募计划
    </div>
  </div>
  <div class="content">
   <div class="pc_erji">
     <div class="pc_erji_head">
       {{lanmu}}
     </div>
     <!-- <router-link :to="articalList.id"></router-link> -->
     <div class="pc_erji_list">
       <ul>
        <li v-for="(articalList,i) in articalLists" :class="{'current' : i == currentCtrl}" @click="location(i)">
         <span ><img src="/static/img/icon1.png" alt="" ></span>{{articalList.name}}
       </li>
     </ul>
   </div>
 </div>
 <div class="row1">
  <div v-html="html"></div>
</div>

<div class="new_box">
  <div @click="ctrl(1)" class="new_head">
    <span  :class=" {'': 1 == 1,'tran': show == 1 }" class="iconfont icon-arrow_top l" ></span><h2 class="l">优秀校园大使排行榜</h2>
    <div class="clear"></div>
  </div>
  <div  :class=" {'body': 1 == 1,'body show': show == 1 }" >
    <ul class="ambassador_list">
      <li v-for="list in dLists">
       <div class="img_box">
         <img :src="'http://www.oneshow.cn:8088'+list.face">
       </div>
       <div class="box">
        <h1>{{list.username}} </h1>
        <div class="diamond"><span>{{list.id}}</span>
          <div class="left">
            <div class="sanjiao"></div>
          </div>
          <div class="right">
            <div class="sanjiao"></div>
          </div>
        </div>
      </div>

      <h3>{{list.school}}</h3>
      <h3>{{list.department}}</h3>
    </li>
    <div class="clear"></div>
    <router-link to="/youth/ambassadorMore">
      <h4>加载更多</h4>
    </router-link>
  </ul>
</div>
</div>

<!--最新-->
<div class="new_box">
  <div @click="ctrl(2)" class="new_head">
    <span  :class=" {'': 1 == 1,'tran': show == 2 }" class="iconfont icon-arrow_top l" ></span><h2 class="l">最新加入校园大使</h2>
    <div class="clear"></div>
  </div>
  <div  :class=" {'body': 1 == 1,'body show': show == 2 }" >
    <ul class="ambassador_list">
      <li v-for="list in nLists">
       <div class="img_box">
         <img :src="'http://www.oneshow.cn:8088'+list.face">
       </div>
       <div class="box">
        <h1>{{list.username}} </h1>
        <div class="diamond"><span>{{list.id}}</span>
          <div class="left">
            <div class="sanjiao"></div>
          </div>
          <div class="right">
            <div class="sanjiao"></div>
          </div>
        </div>
      </div>

      <h3>{{list.school}}</h3>
      <h3>{{list.department}}</h3>
    </li>
    <div class="clear"></div>
    <router-link to="/youth/newbassador">
      <h4>加载更多</h4>
    </router-link>
  </ul>
</div>
</div>
	<!--


-->
<!-- :to="{name:'',param:{}}" -->
<a @click="goApply()">
 <img src="/static/img/amssord.png" width="100%" alt="" />
</a>
</div>
<loginBox v-if="show1"></loginBox>
</div>
</template>
<script>
  import loginBox from '@/components/comment/login';
  export default {
    name: 'ambassador',
    data() {
     return {
      show:-1,
      data:{
        'pageSize':'9',
        'pageNo':'1'
      },
      dLists:[],
      nLists:[],
      articalLists:null,
      lanmu:null,
      data1:{
        categorieId:'71d12250949149b5b152683fcfc3a121',
      },
      currentCtrl:2,
      show1:false,
      html:'',
    }
  },
  props: {},
  filters: {},
  created() {
    this.getList()
  },
  methods: {
    ctrl(i){
     if( i== 1){
      if(this.show == 1){
        this.show = -1
      }else{
        this.show = 1
      }
    }else{
      if(this.show == 2){
        this.show = -1
      }else{
        this.show = 2
      }
    }

      let currentTop = document.body.scrollTop; //初始值
			let endTop =document.getElementsByClassName('row1')[0].clientHeight;                           //结束时
			document.body.scrollTop =endTop+200
    },
    animate(a,b){
      let s  = (a - b)/60;
      let statusTop = a
      let animate = setInterval(()=>{
       statusTop = statusTop-s;
       if( statusTop > 0 ){
        document.body.scrollTop = statusTop
      }else{
        window.clearInterval
      }
    },6)
    },
    getList(){
     this.utils.ajax(this, '/app/articleData', this.data1, false).then((res) => {
      this.html = res.data.articles[0].content
      this.lanmu = res.data.lanmu.name;
      this.articalLists = res.data.wenzhang;
    });
     if (this.utils.userIf()) {
      this.data.pageSize = 12
    }
    this.utils.ajax(this, '/app/ExcellentAmbassadorLists', this.data, false).then((res) => {
     this.dLists = res.data.list
   });
    this.utils.ajax(this, '/app/NewAmbassadorLists', this.data, false).then((res) => {
     this.nLists = res.data.list
   });
  },
  location(i){
   console.log(i);
   if (this.articalLists[i].id == '71d12250949149b5b152683fcfc3a121') {
     this.$router.push('/youth/ambassador')
   }else if (this.articalLists[i].id == '474f429635134ee39cda61b86dda6d09') {
     this.$router.push('/youth/member')
   }else {
    this.$router.push('/artical'+'/'+this.articalLists[i].id)
  }
},
goApply(){
 if (sessionStorage.token== undefined) {
  if(this.utils.userIf()){
   this.$toast({
    message: '请到上方先登录',
    position: 'center',
    duration: 3000
  })
 }else {
   this.show1 = true
 }
}else {
 this.$router.push('/youth/apply')
}

}
},

components: {
  loginBox
}
}
</script>
<style  lang="scss">
  #ambassador{
    .banner{
     height: auto;
     overflow: hidden;
     img{
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      height:140px;
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
  @media screen and(max-width: 1000px){
   .title{
    margin-top: -6px;
  }
}
.content{


  padding: 20px 20px;
  .pc_erji{
    display: none;
  }
  img{
   width: 100%;
   margin: 10px 0;
 }
 h4{
  line-height: 20px;
  margin: 20px 0;
  font-size: 16px;
  font-weight: bolder
}
p{
  padding: 10px 0;
  line-height:23px;
  font-size: 14px;
  color:#3c3c3c;
  font-family: "microsoft yahei";
  font-weight: 400;
  span{
    font-weight:bolder;
  }
}
.new_box{
  padding: 20px 0;
  .new_head{
    padding: 15px 0;
    border-bottom: 1px #949393 solid;
    cursor: pointer;
    span{
      display: block;
      color:#d3be95;
      margin-right: 10px;
      font-size: 25px;
      transition:all .5s;
      transform:rotate(90deg);
      &.tran{
        transform:rotate(180deg);
      }
    }
    h2{
      width:80%;
      font-size: 20px;
      color:#949393;
    }

  }
  .body{
    height: 0;
    opacity: 0;
    overflow:hidden;
    transition:all 1s;
    &.show{
      height: auto;
      opacity:1;
    }
  }
  a{
    text-align: center;
    height: 30px;
    line-height:20px;
    color:#999999;
    background:#d3d3d3;
    border:1px #b9b9b9 solid;
    box-sizing: border-box;
    margin-top: 20px;
    width: 100%;
    display:block;
    h4{
     margin: 0;
     line-height:30px;
     font-size: 15px;
   }
   &.none{
     text-align:left;
     height: auto;
     line-height:auto;
     color:rgba(0,0,0,0);
     background-color:rgba(0,0,0,0);
     border:0;
     width: 100%;
     display:block;
   }
 }
}
.ambassador_list{
  padding-left: 0;
  li{
    background:#d3d3d3;
    width: 31%;
    height: 160px;
    box-sizing: border-box;
    padding: 10px 15px;
    margin-right: 3%;
    float: left;
    margin-top: 15px;
    &:nth-child(3n){
      margin-right:0;
    }
    .img_box{
     height: 98.453px;
     display: flex;
     align-content: center;
     flex-direction:column;
     justify-content:center;
     margin-bottom: 3px
   }
   img{
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
  }
  h3{
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  h1{
    font-size: 12px;
    width: 50px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    position: relative;
  }
  .box{
    position:relative;
    height: 15px;
    .diamond{
      position: absolute;
      top: 0;
      right: -8px;
      min-width: 10px;
      padding:0 3px;
      background:#000;
      height: 15px;
      color:#fff;
      font-size: 12px;

      .left{
        height: 15px;
        width: 10px;
        position:absolute;
        left: -8px;
        top: 0;
        overflow:hidden;
        .sanjiao{
          position:absolute;
          top: 2px;
          left: 2px;
          background:#000;
          width:11px;
          height: 11px;
          transform:rotate(45deg);
        }
      }
      .right{
        height: 15px;
        width: 8px;
        position:absolute;
        right: -7px;
        top: 0;
        overflow:hidden;
        .sanjiao{
          position:absolute;
          top: 2px;
          right:2px;
          background:#000;
          width:11px;
          height: 11px;
          transform:rotate(45deg);
        }
      }
    }
  }

}
}
}
@media screen and(min-width: 1000px){
 .banner{
  height: 249px;
  img{
   height: 100%;
 }
}
.title1000{
  width: 1000px;
  margin: auto;
}
.content{
  position: relative;
  width: 1000px;
  padding-right: 290px;
  box-sizing: border-box;
  padding-left: 0;
  margin:auto;
  .pc_erji{
   display: block;
   position: absolute;
   height: auto;
   top:-110px;
   right: 0;
   min-height: 375px;
   min-width: 230px;
   .pc_erji_head{
    height: 50px;
    width: 100%;
    background: #4d4d4d;
    font-size:22px;
    text-align:center;
    margin-bottom:20px;
    line-height: 50px;
    color: #eaeaea
  }
  .pc_erji_list{
    background: #a4a4a4;
    width: 100%;
    color: #cfcfcf;
    padding:10px 0;
    ul{
     padding-left: 0
   }
   li{
     height: 40px;
     line-height: 35px;
     margin: 5px 0;
     font-size: 18px;
     cursor: pointer;
     padding-left: 20px;
     padding-right: 10px;
     span{
      opacity: 0;
      display:inline-block;
      height: 10px;
      position: relative;
      top: 10px;
      transition: all .3s;
      img{
       margin:0
     }
   }
   a{
    color: #cfcfcf;
    transition: all .3s;
  }
  &:hover{
    color: #fff;
    span{
     opacity: 1
   }
 }
 &.current{
  span{
   opacity: 1
 }

 color: #fff;

}
}
}
}
.ambassador_list{
 li{
  width: 14.1%;
  &:nth-child(3n){
   margin-right:3%;
 }
 &:nth-child(6n){
   margin-right: 0;
 }
}
}
}
}
}
</style>
