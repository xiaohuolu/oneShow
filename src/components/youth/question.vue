<template>
	<div id="question">
		<div class="banner">
      <img :src="banner">
    </div>
    <div class="title">
      <div class="title1000">
        {{title}}
      </div>
    </div>
      <div v-html="html"></div>
      <!-- <h4>关于ONE SHOW中华青年创新竞赛</h4>
      <h4>参赛对象：</h4>
      <p>
        本次竞赛参赛对象为大中华地区的高校学生以及28岁以下的年轻创意人，参加主体可以是个人或团队，所有团队人数不得超过5人。
      </p>
      <h4>竞赛日程：</h4>
      <p>
        2017 ONE SHOW中华青年创新竞赛沿用2012年的竞赛机制，分为上下两季进行征稿。第一季于2017年4月-6月开始陆续发布竞赛创意简报，第二季将在8月-10月进行征稿。这样的分季征稿将对应高校上半年和下半年的两个学期，为高校学生增加了更多的锻炼机会与创意挑战。两赛季的入围者均
        可参加11月举办的OneShow中华青年创新营。<br>
        首轮截稿日期为6月15日24：00（首轮征稿免参赛费用），第二轮截稿日期为10月20日24：00。
      </p>
      <img src="/static/img/qu.png" width="100%">
      <h3>参赛类目：</h3>
      <p>
        <span>·广告创新</span> Advertising Innovation<br>
        为客户品牌提供跨媒体的创新解决方案，横跨平面、户外、社会化媒体、互动传播等媒体，创新的品牌传播创意<br>
        <span>·产品创新</span> Product Innovation<br>
        为客户的产品创造新概念的产品或品牌周边产品设计和体验设计，包含虚拟产品和实体产品，从而为客户的品牌产生不可估量的价值<br>
        <span>·商业模式创新</span> Business Model Innovation<br>
        以客户的品牌现有的商业模式为基础，创造新的互联网化的商业新模式或新体验，为客户提供更多的创新探索甚至成为未来的独立创业项目<br>
        <span>·社会创新</span> Social Innovation<br>
        将客户品牌或产品与企业社会责任／公益主题相结合，创造出由品牌参与的创新的具有公益社会价值的活动创新<br>
        <span>·内容创新</span> Content Innovation<br>
        为客户品牌创作出如微电影、综艺娱乐节目、在线视频、病毒视频等创新的娱乐内容<br>
      </p>
      <h3>作品格式：</h3>
      <p>
        静态作品：需为JPG格式之静态图片，RGB颜色模式，尺寸不限。单个JPG文件大小不得超过2M，系列作品不超过3张图片。静态作品需要在作品提交系统中完成文件的上传，超出尺寸颜色模式不符合规格的作品将无法顺利完成上传。<br>
        视频作品：单个视频作品时长不能超过3分钟。在最终评审阶段，超过3分钟的视频将会在到达3分钟时被迫停止播放，（系列作品可分别提交或合成后提交）*注：不支持提交PPT等文件格式的作品，请将创意方案拍摄或制作成视频提交，毕竟这种方式更能生动的表达出你的想法。<br><br>

        请将视频类作品上传至视频网站并将该视频的Flash链接地址提交至OneShow中文官网作品提交系统。请注意：将视频作品上传至中国大陆地区视频网站一般会有不超过24小时的审核期，为保证顺利提交作品进行参赛，请合理安排好时间，提前上传。我们推荐的视频提交站点为优酷、腾讯视频。为了中国大陆地区的评委进行在线评审时的顺畅，请不要采用YouTube进行视频的提交。
      </p>
      <h3>提交方式：</h3>
      <p>
        2017 ONE SHOW中华青年创新竞赛两轮征稿均采取线上系统提交方式，不支持线下提交。请同学们错开截稿日期提交高峰，安排好提交作品的时间，以免网络拥堵。虽然同学们往往都会犯有拖延症，习惯于截稿前最后一刻完成作品并进行提交，我们也建议你能够及早做完并尽量避免在最后的那个晚上面对着即将关闭的作品提交系统干着急。<br>
        <span>重要提示：点击查看作品上传流程</span><br>
      </p>
      <h3>参赛流程：</h3>
      <p>
        1、阅读简报下载所需物料进行创意设计。<br>
        2、访问OneShow中华青年创意竞赛作品上传官网，注册用户并在截止日前按系统要求提交作品。上传完成作品后系统会自动为你上传的作品生成ID。<br>
        3、通过点击支付报名费页面选择参赛类别，并对完成上传的作品支付报名费，支付成功后，我们会对你的作品进行确认处理。（*注：首轮竞赛免除作品参赛费）<br>
      </p>
      <h3>参赛费用：</h3>
      <p>
        *注：首轮截稿日期6月15日前提交作品，免交报名费。<br>
        中国大陆地区：单件作品：人民币50元/件，系列作品：人民币50元/套；<br>
        海外地区（包含香港、台湾、新加坡以及其他海外地区）：单件作品：USD 10/件，系列作品：USD 10／套。<br>
      </p>
      <h3>评审流程及标准：</h3>
      <p>
        2017 ONE SHOW中华青年创新竞赛拥有全球最顶尖的评审团队，他们是来自美国、欧洲、南非、新加坡、香港、台湾以及中国大陆等地的国际4A广告公司的国际顶尖创意大师，拥有多元化的文化背景。因此，国际化的评审团将保证我们奖项评审视角的多元化属性。<br>
        所有作品提交后将通过One Show的全球评审系统，于互联网端进行在线评审。届时所有参赛作品将分成若干组由国际创意评审进行在线打分，最终由系统统计出平均分，由高至低进行创意节入围录取。而在创意节上设有终极评审环节，所有到场创意大师作为终极评审将在现场对入围作品进行打分并评选出等级奖项。
        <br>
      </p>
      <h3>评审规则：</h3>
      <p>
        One Show中华青年创新竞赛的参赛者是高校在校学生以及未超过28岁的年轻创意人。根据不同的命题要求设计有不同的奖项类目，每个类目均设有等级奖：金（Gold）银（Silver）铜（Bronze）奖；其他未获得等级奖的竞赛入围者获得优秀奖（Merit）。两个组别的奖项数量将根据实际每个类目的参赛作品数量和水平而定。在奖项的评定中，除考察评审评选出的综合分数外，还要根据竞赛对作品综合水准的要求进行考察，可能出现奖项空缺的情况。不符合组别分类或错误的选择了组别的作品将被视作无效作品。<br>
        在作品的评审中，以10分制进行评定，可能出现0.5分。<br><br>

        分数的组成为：<br>
        策略Strategy：2分<br>
        从策略上看是否符合品牌的需求，是否具有独特的创新策略角度，该策略是否符合该品牌受众人群的世纪特点与需求。<br>
        创意Idea：4分<br>
        该创意的创新性、原创性以及是否可以落地都是考察创意的重要因素。<br>
        执行Execution：4分<br>
        将该策略和创意执行的完成度、延展深入与恰当程度以及作品在美术上、制作上的优异程度来进行评判。<br>
      </p>
      <h3>入围公布：</h3>
      <p>
        首轮入围结果于6月底公布，第二轮入围结果于10月底公布。<br>
        *注：参与首轮竞赛的选手免除作品提交费用，两轮命题入围选手均可参加创新营决赛。具体信息请留意官方网站、官方微博和微信公众账号相关信息发布。届时我们将会对入围团队（个人）指定联系人进行电话通知。<br>
      </p>
      <h3>奖项评选：</h3>
      <p>
        <span>竞赛海选征集作品奖项：</span>
        1、海选征集的所有作品，经评审团分为2轮评审选出入围作品<br>
        2、在创意节期间，以全体创意导师为主体的国际级终审评审团进行入围作品的终审，在每个类别中，评选出金、银、铜奖，未获等级奖的入围作品被授予佳作奖（Merit）<br>
        3、等级奖获奖者获得奖牌与证书，佳作奖获得者获得证书，获奖者指导教师获得证书。<br>
      </p>
      <img src="/static/img/qu2.png" width="100%">
      <h4>创意节决赛奖项：</h4>
      <p>
        只要获得竞赛入围资格，你就有资格参加OneShow中华青年创意节。2017年的One Show中华青年创意节将在2017年11月举行，届时，将由约二十位来自美国、欧洲、新加坡、香港、马来西亚、台湾以及中国大陆地区的顶尖级创意大师担纲讲师，与所有入围选手共同度过激动人心的一周，完成极具挑战意义的创意实战任务，与国际创意大师亲密接触，获得从专业到眼界的成长。<br><br>
      </p>
      <p>
        1、入围学生在一周的创意节期间进行全新整合方案创作并进行现场提案，经过首轮班内提案，由每班导师选出一半的学生队伍参加提案大赛决赛<br>
        2、决赛中，每个队伍有10分钟提案时间，创意节所有导师及赞助商客户代表作为评审团，为终极提案大赛决赛每支队伍打分<br>
        3、以作品的策略、创意、执行、提案技巧等层面进行考量，最终为每个创意命题，评选出一组金、银、铜奖。其中只有一个提案能够获得全场大奖（Best of Show）<br>
        4、获奖者获得奖杯与证书<br>
        5、创意营金奖和全场大奖获奖者除获得奖杯与证书外，还获得由One Show官方提供赴美签证邀请函和价值1500美元的OneShow国际创意节通票，赴纽约参加2018年美国One Show国际创意节<br>

      </p>
      <img src="/static/img/qu4.png" width="100%">
      <p>
        注意事项：<br>
        Q：报名支付了ONE SHOW中华青年创新竞赛报名费，但是系统中仍然显示等待支付这是为什么？如果出现了错误支付或重复支付，报名费是否可以退还？<br>
        A: 请不要慌张，出现这种状况可能是由于网络在通信时与第三方支付平台对接时出现失去短暂数据互通。由于第三方支付平台在支付完成后会有交易记录存在，如有此问题发生，可先等待刷新。如还是无法显示支付成功，请将交易记录截图及你所支付的作品ID发送邮件至info@oneshow.cn,或致电010-84046620转216工作人员会在收到邮件后与你联系，并为你检查交易记录及变更交易状态。如果在检查后出现了错误支付或者重复支付，我们会对多支付的报名费予以退还，并且无需退还手续费用。如果你的作品没有入围，或者你在参赛后看到高手如林后悔了决定退出比赛，在这样的情况下，你的报名费和作品是没有办法退回的。<br><br>

        Q: 如果在填写报名信息时，出现联系方式、团队名字以及简报类别的填写错误该如何处理？<br>
        A: 你为你或你的团队成员填写参赛信息，请在填写完成后认真检查。因为你现在所填写的信息将有可能出现在未来的获奖名单、奖状、奖杯中。在填写报名信息时，认真核对联系方式、团员名称以及简报类别的填写，出现错误及时修改。 如果你无视上边的文字告知而实在因为粗心而发生了填写错误，请速与One Show工作人员联系，我们将会怀着恨铁不成钢的心情为你在后台解决信息错误的问题。<br>
      </p>
      <h3>如有疑问，请与我们联系：</h3>
      <p>
        One Show中华青年创新竞赛与创新营组委会<br>
        2017官方竞赛交流QQ群：515241210<br>
        官方电话: 010-84046620 转216 <br>
        电子邮箱：youth@oneshow.cn<br>
      </p> -->
    <div class="content">
      <div class="erwei_content1 mobile_hide clear">
        <div class="img_box">
          <img src="/static/img/querwei1.png">
          <h4 style="color: #E95858;">竞赛官方公众号</h4>
        </div>
        <div class="img_box">
          <img src="/static/img/querwei2.png">
          <h4 style="color: #E95858;">官方微信小助手</h4>
        </div>

      </div>
    </div>
	</div>
</template>
<script>

export default {
  name: 'question',
  data() {
  	return {
        data:{
          categorieId:null,
        },
        title:'',
        html:'',
        banner:'',
  	}
  },
  props: {},
  filters: {},
  created() {
      this.getArtical()
  },
  methods: {
    getArtical(){
        this.data.categorieId = '1de211b1861845998a4aeec1c6824c12'
        this.utils.ajax(this,'/app/articleData',this.data,false).then((res)=>{
          console.log(res.data.articles)
          this.title = res.data.articles.title;
          this.html = res.data.articles.content;
          this.banner ='http://123.57.15.15:8080/'+res.data.articles.image.replace('/_thumbs','')
        })
      },
  },
  components: {
  }
}
</script>
<style  lang="scss">
 #question{
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
        margin-top: 0px;
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
      padding: 20px;
      h4{
        margin: 8px 0;
      }
      p{
        font-size: 14px;
        font-family: "microsoft yahei";
        line-height: 23px;
        &:nth-child(1){
          padding:0
        }
        span{
          font-weight: bolder;
        }
      }
    }
    @media screen and(min-width: 1000px){
      .title1000{
        width: 1000px;
        margin: auto;
      }
      .banner{
        height: 249px;
        img{
          width: auto;
          height: 100%;
        }
      }
      .content{
        width: 1000px;
        margin:auto;
        padding-left: 0;
        box-sizing: border-box;
        padding-right: 290px;
      }
    }
    .erwei_content1{
      .img_box{
        float: left;
        margin-right: 50px;
        h4{
          padding-left: 15px;
        }
        img{
          width:150px;
        }
      }
    }
    .erwei_content{
      .img_box{
        margin: auto;
        margin-top: 20px;
        display: block;
        text-align: center;
        h4{
          padding-left: 15px;
        }
        img{
          width:150px;
        }
      }
    }
 }
</style>
