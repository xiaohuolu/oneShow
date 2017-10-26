<template>
  <div id="formUped">
      <form class="">
        <div class="user_body">
              <mt-radio
                  title="是否在校内担任职务"
                  v-model="applyList.zhiwu"
                  :options="[{disabled: true,value:'1',label:'是'},{disabled: true,value:'0',label:'否'}]">
              </mt-radio>
              <mt-radio
                  title="是否曾做过ONE SHOW志愿者或其他学生竞赛志愿者？"
                  v-model="applyList.zhiyuan"
                  :options="[{disabled: true,value:'1',label:'是，我曾担任过'},{disabled: true,value:'0',label:'否'}]">
              </mt-radio>
              <mt-radio
                  title="是否参与组织/策划过校际活动？ (如参与过，请对你的工作及效果做简要描述)"
                  v-model="applyList.xiaoji"
                  :options="[{disabled: true,value:'1',label:'是'},{disabled: true,value:'0',label:'否'}]">
              </mt-radio>
              <div class="main">
                <label v-if="applyList.xiaoji==1" for="">
                  <textarea disabled="disabled"  v-model="applyList.xiaojimiaoshu" name="name">
                  </textarea>
                </label>
                <label for="">
                  <span>·如有更多自我描述，可上传简历至附件：</span>
                  <input disabled="disabled" type="file" name="" value="" >
                </label>
              </div>
              <mt-radio
                title="是否曾参加过One Club China Workshop 青年创意营？"
                v-model="applyList.workshop"
                  :options="[{disabled: true,value:'1',label:'是'},{disabled: true,value:'0',label:'否'}]">
              </mt-radio>
              <div class="main">
                <label v-if="applyList.workshop==1" for="">
                  <span>我曾参加过<input disabled="disabled"  v-model="applyList.workshopYear" style="width:50px;margin-right:10px;display:inline-block" type="text" name="" value="">年One Club China Workshop 青年创意营</span>
                  <br><br>
                </label>
              </div>
              <div class="main">
                <label for="">
                  <span>对One Club China组织的活动有何建议和方案</span>
                  <textarea disabled="disabled"  v-model="applyList.jianyi" name="name">
                  </textarea>
                </label>
                <label for="">
                  <span>[附上自己对本季大使工作的策划案，将有机会为你的学校争取到 一次One Lectrue机会]</span>
                  <input disabled="disabled" type="file" name="" value="">
                </label>
                <label>
                  <span>在你的院系内，你最喜欢的一位广告/艺术类老师是？</span>
                </label>
              </div>
              <div class="daoshi">
                <label class="input">
                  <span>姓名：</span>
                  <input disabled="disabled" v-model="applyList.teacher" type="text" name="" value="">
                </label>
                <mt-radio class="project"
                  title="TA是"
                  v-model="applyList.teacherIs"
                  :options="[{disabled: true,'label':'助教','value':'助教'},{disabled: true,'label':'讲师','value':'讲师'},{disabled: true,'label':'副教授','value':'副教授'},{disabled: true,'label':'教授','value':'教授'},{disabled: true,'label':'主任','value':'主任'},{disabled: true,'label':'院长','value':'院长'}]">
                </mt-radio>
                <label class="input">
                  <span>主讲课程：</span>
                  <input disabled="disabled" v-model="applyList.kecheng" type="text" name="" value="">
                </label>
                <label class="input">
                  <span>联系方式：(请在输入信息时注明：手机/QQ邮箱)</span>
                  <input disabled="disabled" v-model="applyList.lianxi" type="text" name="" value="">
                </label>
                <mt-radio class="project"
                  title="TA是否曾经执导过One Club China青年创意竞赛？"
                  v-model="applyList.zhidao"
                  :options="[{disabled: true,value:'1',label:'是'},{disabled: true,value:'0',label:'否'}]">
                </mt-radio>
                <label class="input">
                  <span style="display:block" >今年你的开学时间是？</span>
                  <input disabled="disabled" v-model="mouth" style="margin: 10px;width:20%;margin-left:0" type="text" name="" value="">月
                  <input disabled="disabled" v-model="year" style="margin: 10px;width:20%" type="text" name="" value="">日
                </label>
              </div>
              <div class="main">
                <label for="">
                  <span>其他想对我们说的话？</span>
                  <textarea disabled="disabled"  v-model="applyList.xiangshuo" name="name">
                  </textarea>
                </label>
                <label for="">
                  <span>ONE SHOW宣传物料接收地址</span>
                  <input disabled="disabled" v-model="applyList.youjidizhi" style="width:100%;box-sizing:border-box;;margin-left:0" type="text" name="" value="">
                </label>
                <h3>* 请务必填写清楚，否则审核通过后您将无法收到宣传资料</h3>
                <label for="">
                  <span>推荐人</span>
                  <input disabled="disabled" v-model="applyList.tuijianren" style="width:100%;box-sizing:border-box;;margin-left:0" type="text" name="" value="">
                </label>
                <h3>（选填）请务必填写推荐人真实姓名，否则填写无效</h3>
                <label for="">
                  <span>推荐人手机号</span>
                  <input disabled="disabled" v-model="applyList.tuijianrenShouji" style="width:100%;box-sizing:border-box;;margin-left:0" type="text" name="" value="">
                </label>
                <h3>*请申请校园大使的同学，请务必将头像换成本人头像。</h3>
              </div>
              <p>
                * 以上资料中，One Club China将对您的手机号码保密；<br>
                QQ/MSN将作为大使之间的常用联络方式公开，<br>
                如不希望公开私人QQ/MSN联系方式，<br>
                我们建议您另申请新的QQ/MSN，作为大使工作专用，进行填写。<br>
              </p>
        </div>
      </form>
  </div>
</template>

<script>
import { Radio } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  name:'formUped',
  data(){
    return {
      applyList:{
        'uid':'',
				'zhiwu':'',
				'zhiyuan':'',
				'xiaoji':'',
				'workshop':'',
				'zhidao':'',
				'teacherIs':'',
				'xiaojimiaoshu':'',
				'workshopYear':'',
				'jianyi':'',
				'teacher':'',
				'kecheng':'',
				'lianxi':'',
				'kaixue':'',
				'xiangshuo':'',
				'dateline':'',
				'youjidizhi':'',
				'tuijianren':'',
				'tuijianrenShouji':''
      },
      mouth:null,
      year:null
    }
  },
  created(){
    this.getForm()
  },
  methods :{
    getForm(){
      let tokenData = sessionStorage.token.split('/');
      let uid1 = tokenData[3]
      this.utils.ajax(this,'/app/ambassador',{uid:uid1},false).then((res)=>{
        if (res.data.sss == 1 || res.data.sss == 0 ) {
            this.applyList = res.data.Ambassador[0]
            this.year = this.applyList.kaixue.split('-')[0];
            this.mouth = this.applyList.kaixue.split('-')[1];
        }else if ( res.data.sss == 2 ) {

        }
      })
    }
  }
}
</script>

<style lang="scss">
#formUped{
  form{
    // 下面
    .user_body{
      padding-top: 20px;
      border-top:1px #d3d3d3 solid;
      p{
        margin-top:20px;
        color: #030303;
        font-size: 14px;
        line-height: 14px;
      }
      input{
        border-radius: 5px;
        ime-mode: disabled
      }
      .mint-radiolist-title{
        font-size: 14px;
        font-weight: bolder;
        color: #000;
        &:before{
          content: '· ';
          font-size: 16px;
          font-weight: bolder;
        }
      }
      .mint-radiolist-label{
        span{
          font-size: 12px;
        }
      }
      .mint-cell-wrapper{
        height: 30px;
      }
      .main{
        h3{
          font-size: 13px;
          color: #c00;
          font-weight: normal;
        }
        label{
          margin: 20px 0;
          span{
            font-size: 14px;
            font-weight: bolder;
            color: #000;
            &:before{
              content: '· ';
              font-size: 16px;
              font-weight: bolder;
            }
          }
          textarea{
            margin: 10px 0;
            border-radius: 5px;
            width: 100%;
            min-height:100px;
          }
          input{
            display: block;
            margin:10px 0;
            padding:5px 10px;
            margin-left: 10px;
            ime-mode: disabled
          }
        }
      }
      .daoshi{
        label.input{
          span{
            font-weight:bolder;
            display: inline-block;
            font-size: 13px;
            padding-left: 10px;
          }
          input{
            display: inline-block;
            margin:10px 0;
            padding:5px 10px;
            margin-left: 10px;
          }
        }
        .project{
          a{
            display : inline-block;
            width:auto;
          }
        }
      }
    }
    button{
      height: 35px;
      width:100px;
      background: #000;
      border: 0;
      color: #fff;
      display: block;
      margin: auto;
      margin-top: 20px;
    }
  }
}
</style>
