<template>
	<div id="privacy">
		<div class="banner">
			<img src="/static/img/benner_1.png">
		</div>
		<div class="title">
			<div class="title1000">
				隐私说明
			</div>
		</div>
		<div class="content">
      <p>
        www.oneshow.cn（以下简称THE ONE CLUB）非常重视对您的个人隐私保护，有时候我们需要某些信息才能为您提供您请求的服务，本隐私声
        明解释了这些情况下的数据收集和使用情况。 本隐私声明适用于THE ONE CLUB的所有相关服务，随着THE ONE CLUB服务范围的扩大，隐私声
        明的内容可由THE ONE CLUB随时更新，且毋须另行通知。更新后的隐私声明一旦在网页上公布即有效代替原来的隐私声明。
      </p>
      <h4>我们收集哪些信息</h4>
      <p>
        通常，您能在匿名的状态下访问THE ONE CLUB并获取信息。当我们需要能识别您的个人信息或者可以与您联系的信息时，我们会征求您的同意
        。通常，在您注册THE ONE CLUB或申请开通新的功能时，我们可能收集这些信息：姓名，Email地址，住址和电话号码，并征求您的确认。
      </p>
      <h4>关于您的个人信息</h4>
      <p>
        THE ONE CLUB严格保护您个人信息的安全。我们使用各种安全技术和程序来保护您的个人信息不被未经授权的访问、使用或泄漏。
        THE ONE CLUB会在法律要求或符合THE ONE CLUB的相关服务条款约定的情况下透露您的个人信息。
      </p>
      <h4>Cookie的使用</h4>
      <p>
        使用 Cookie 能帮助您实现您的联机体验的个性化，您可以接受或拒绝 Cookie ，大多数 Web 浏览器会自动接受 Cookie，但您通
        常可根据自己的需要来修改浏览器的设置以拒绝 Cookie。
        当您注册THE ONE CLUB时，ONE SHOW亦会使用 Cookie。在这种情况下，THE ONE CLUB会收集并存储有用信息，当您再次访问THE ONE CLUB时，
        我们可辨认您的身份。如果您的浏览器被设置为拒绝 Cookie，您仍然能够访问THE ONE CLUB的大多数网页。
      </p>
      <h4>关于免责说明</h4>
      <p>
        就下列相关事宜的发生，THE ONE CLUB不承担任何法律责任：<br>
        * 由于您将用户密码告知他人或与他人共享注册帐户，由此导致的任何个人信息的泄漏，或其他非因THE ONE CLUB原因导致的个人信息的泄漏；<br>
        * THE ONE CLUB根据法律规定或政府相关政策要求提供您的个人信息；<br>
        * 任何由于黑客攻击、电脑病毒侵入或政府管制而造成的暂时性网站关闭；<br>
        * 因不可抗力导致的任何后果；<br>
        * THE ONE CLUB在各服务条款及声明中列明的使用方式或免责情形。<br>
      </p>
		</div>
	</div>
</template>
<script type="text/javascript">
import { Indicator } from 'mint-ui';
	export default{
		name:'privacy',
		data(){
			return{
				data:{
					categorieId:this.$route.params.id,
				}
			}
		},
		 props: {},
		filters: {},
		created() {

		},
		methods: {


		},
		components: {

		}
	}
</script>
<style lang="scss" type="text/css">
	#privacy{
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

	}
</style>
