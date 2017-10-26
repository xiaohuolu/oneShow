<template>
	<div id="student">
	    <div class="banner">
	      <img src="/static/img/mine_banner.png">  
	    </div>
	    <div class="title">
	     	{{title}}
	    </div>
	    <div class="content">
	      <!--<div class="row" v-html="html"></div>-->
	      <img src="/static/img/student_1.png" width="100%"/>
	      <p>
	      	One Show 国际学生竞赛是最负盛名的国际广告、互动和设计的学生竞赛之一，其历史可追溯至2005年。 <br>
			纽约创意周期间举办的YOUNG ONES 国际学生竞赛旨在影响并塑造下一代年轻广告人。这项活动为在读学
			生和应届毕业生提供了与顶级广告公司的创意人沟通的机会，并且参与者还可以获得关于他们作品集的反
			馈，以及获得最好的行业咨询。在创意节活动的中，青年学生在比赛中创造优秀原创的作品，制作他们的
			作品集，并且最终拿走珍贵的One Show铅笔奖项。学生们的激情使创意竞赛进入非常火热状态，相信他们
			在未来的职业生涯中会获得巨大成功。
	      </p>
	      <img src="/static/img/student_2.png" width="100%" />
	      <p>
	      	获奖学生每年将会参与One Show国际学生奖的颁奖典礼，入围者的作品会出现在One Show年鉴以及在线展
	      	示中。ONE SHOW 国际学生竞赛在全球范围内为学生提供争夺现金奖以及One Show铅笔奖的机会。<br>
                        去年，超过22个国家125个广告和设计院校的学生参与了One Show国际学生竞赛，One Show国际学生竞赛
                        在学生参赛者中得到——"Best of Best"的广泛赞誉及认可。
	      </p>
	      <img src="/static/img/student_3.png"  width="100%" />
	      <p>
	      	大中华地区的学生可参加报名国际学生竞赛，在英文官网进行报名与提交作品。同时，THE ONE CLUB也针对
	      	大中华地区院校以及青年创意人设立了One Show大中华区的创意竞赛。<br><br>
	      </p>
	      <a href="http://www.oneclub.org/oc/education/youngones/" style="width: 100%;display: block;">
	      	<img src="/static/img/student_btm.png" width="100%"/>
	      </a>
	    </div>
	</div>
</template>
<script>

export default {
  name: 'student',
  data() {
  	return {
      title:'One Show 国际学生竞赛',
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
 #student{
    .banner{
      height:80px;
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
    }
    p{
      padding: 10px 0;
      line-height: 23px;
      font-size: 15px;
      color: #3c3c3c;
      font-family: "microsoft yahei";
      font-weight: 400;
    }
 }
</style>