<template>
	<div id="zxjsc-footer" >
	   <div class="footer_main">
            <div class="logo_box">
                <a href="https://www.anquan.org/"><img class="l" src="/static/img/footer_left.png"></a>
                <img class="r" src="/static/img/footer_right.png">
                <div class="clear"></div>
            </div>
            <p>
                <img src="/static/img/footer_copy.png">
            </p>


            <h5>
                <router-link to="/instruction">
                    使用条款
                </router-link>
                <router-link to="/privacy">
                    隐私声明
                </router-link>
            </h5>

        </div>
	</div>
</template>
<script>

export default {
  name: 'zxjsc-footer',
  data() {
  	return {

  	}
  },
  props: {},
  filters: {},
  created() {},
  methods: {},
  components: {
  }
}
</script>
<style  lang="scss">
    #zxjsc-footer{
        padding:18px;
        background:rgb(54,53,50);
        height: 150px;
        box-sizing: border-box;
        .footer_main{
            border-top: 1px #999 dashed;
            color: #999;
            .logo_box{
                width: 206px;
                display: block;
                margin:auto;
                 margin-top: 23px;
								 img{
								 	width: 90px;
									&:nth-child(2){
			              margin-top: 5px;
			            }
								 }
            }
            p img{
              width: 90%;
              display:block;
              margin:15px auto 0 auto;
              max-width: 320px;
            }
            h5{
                text-align: center;
                margin-top: 20px;
                a{
                    color:#999;
                    display:inline-block;
                    margin: 0 20px;
                    text-decoration: none;
                    font-style: normal
                }
            }

        }

    }
</style>
