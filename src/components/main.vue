 <template>
  <div class="hello">
    <headerBox v-if="!isPc"></headerBox>
    <pcHeaderBox v-if="isPc"></pcHeaderBox>
    <div class="main-box">
      <router-view></router-view>
    </div>
    <footerBox v-if="!isPc"></footerBox>
    <pcfooterBox v-if="isPc"></pcfooterBox>
    <div class="return_top" @click="returnTop()" :class="{'returnTopShow':returnTopShow}">
        <span class="iconfont icon-arrow_top"></span>
    </div>
  </div>
</template>

<script>
import headerBox from './comment/header';
import pcHeaderBox from './comment/pcheader';
import footerBox from './comment/footer';
import pcfooterBox from './comment/pcfooter';
export default {
  name: 'hello',
  data () {
    return {
      isPc:true,
      msg: 'Welcome to Your Vue.js App',
      scroll:'',
      returnTopShow:false
    }
  },
  components: {
    pcfooterBox,
    headerBox,
    footerBox,
    pcHeaderBox
  },
  created(){
    this.userIf()
  },
  methods:{
    userIf(){
      if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
          this.isPc = false
      } else {
          this.isPc = true
      }
    },
    returnTop(){
      let body = document.body.scrollTop;
      let chazhi = body - 20;
      this.utils.goTop(body,chazhi,true)
    },
    handleScroll(){
      if (document.body.scrollTop>1500) {
          this.returnTopShow = true
      }else {
        this.returnTopShow = false
      }
    }
  },
  mounted () {

    window.addEventListener('scroll', this.handleScroll);
  },
  watch:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.return_top{
  border-radius: 50%;
  background: rgba(102,102,102,0.5);
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 30px;
  bottom: -250px;
  transition: all .5s;
}
.return_top span{
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%,-50%);
  color:#fff
}
.return_top.returnTopShow{
  bottom: 90px;
}

</style>
