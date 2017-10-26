<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import headerBox from './components/comment/header';
import footerBox from './components/comment/footer';

export default {
  name: 'app',
  data() {
    return {

    }
  },
  props: {},
  filters: {},
  created() {},
  methods: {},

}
</script>

<style lang="scss">
*{
  margin:0;

}
.mint-toast{
  z-index: 9999;
}
.toast{
  z-index: 9999
}

// 文章双板布局
.pc_hide{
  display: none!important;
}
.mobile_hide{
  display: block!important;
}
@media screen and(max-width:1000px) {
  .pc_hide{
    display: block!important;
  }
  .mobile_hide{
    display: none!important;
  }
}

#app {

    .toast{
      z-index: 9999
    }
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #171717;

    .clear:after {
      content: "";
      display: block;
      clear: both;
    }
    .l{
      float: left;
    }
    .r{
      float: right;
    }
  ul{
    list-style: none
  }
  input ,textarea, button{
    outline:none;
    border-radius: 0;
    resize: none;
    &:focus{
      border-color:#802358;
    }
  }
  select{
    outline:none;
    border:none;
  }
  .icon {
     width: 1em; height: 1em;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden;
  }
  .iconfont{
    width: 1em;
    height: 1em;
    font-size: 1.2rem;
     vertical-align: -0.15em;
  }
  a{
    text-decoration:none;
  }
  h1,h2,h3,h4,h5,code,a{
    font-family:"din","microsoft yahei",sans-serif!important;
    margin:0;
    padding: 0;
  }
  li{
      font-family:"din","microsoft yahei",sans-serif!important;
  }
  p{
    font-family:"din","microsoft yahei",sans-serif!important;
  }
  div{
    font-family:"din","microsoft yahei",sans-serif!important;
  }
  @media screen and(min-width: 1000px){
    p{
      color: #777;
    }
  }
  button{
    background: rgba(0,0,0,0);
    border: 0;
    cursor: pointer;
  }
}
</style>
