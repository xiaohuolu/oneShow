<template>
  <div id="center">

            <div class="content_box">
            
              <div class="content_head">
                <h1>
                  正在进行的活动
                </h1>
                <p>
                  ONGOING ACTIVITIES
                </p>
              </div>
              <div class="content_body">
                  <div class="content_main">
                    <img src="/static/img/mine_main.png">
                    <h3>ONE SHOW 校园大使</h3>
                  </div>
              </div>
            </div>
            <div class="content_box">
              <div class="content_head">
                <h1>
                  您已参加的活动
                </h1>
                <p>
                  ACTIVITIES YOU ALREADY ENTERED
                </p>
              </div>
              <div class="content_body">

              </div>
            </div>
            <div class="content_box">
              <div class="content_head">
                <h1>
                  校园大使
                </h1>
                <p>
                  CAMOUS AMBASSADOR
                </p>
              </div>
              <div class="content_body">
                 <div class="content_main">
                    <img src="/static/img/dashi.png">
                  </div>
              </div>
            </div>
  </div>
</template>

<script>
export default {
  name:'center',
  data(){
    return{
      mag:'个人中心'
    }
  },
  created(){
  },
  methods:{
  }
}
</script>

<style lang="scss">
  #center{

  }
</style>
