<template>
<div id="mineDIsc">
  <h4>{{userList.username}}</h4>
  <h5>{{userList.email}}</h5>
  <h5>
    <span class="l" v-if="userList.sex == 0">性别：</span>
    <span v-if="userList.sex == 1" class="l">性别:男</span>
    <span class="l" v-if="userList.sex == 2">性别:女</span>
    <span class="r" style="margin-left:5px">出生日期：{{userList.birthday}}</span>
    <div class="clear"></div>
  </h5>
  <h5>就读/毕业院校：{{userList.school}}</h5>
  <h5>工作单位:{{userList.company}}</h5>
</div>
</template>

<script>
export default {
  name: 'mineDIsc',
  data(){
    return{
      loginData:{
        'email' : '',
        'password' : ''
      },
      userList:{
        face:""
      },
    }


  },
  created(){
    this.getMine()
  },
  props: ['faceDisc'],
  methods: {
    getMine(){
      if (sessionStorage.token== undefined) {
        this.show = true
      }else {
        let tokenData = sessionStorage.token.split('⊰')
        this.loginData.email = tokenData[0];
        let length =  tokenData[2].length;
        this.loginData.password = tokenData[2].substring(0,length-2);
        //console.log(this.loginData);
        this.utils.ajax(this,'/user/login',this.loginData,false).then((res)=>{
          this.userList = res.data.userinfo
          this.upFace()
        })
      }

    },
    upFace(){
      this.$emit('listenToChildEvent',this.userList.face);

    }
  }
}
</script>

<style lang="scss">

</style>
