<template >
  <div id="competition">
      <h5>请到创想家网站登录后到个人中心查看参赛详情</h5>
      <a class="feturt" href="http://www.creativer.cn/index.php/Competition/Racedetail/racedetail?id=48&state=4">点击跳转</a>
  </div>
</template>

<script>
export default {
  name:'competition',
  data(){
    return{
      msg:'compertition比赛'
    }
  }
}
</script>

<style lang="scss">
  #competition{
    h5{
      text-align: center;
      font-size: 14px;
    }
    a.feturt{
      display: block;
      margin:auto;
      width:70px;
      text-align: center;
      margin-top: 10px;
      color: #c11010;
      font-size: 14px;
      font-weight: bolder;
    }
  }
</style>
