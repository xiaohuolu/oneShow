<template>
  <div id="order">
    <div class="order_box clear">
      <!-- <ul class="list1">
          <li>订单编号：100327</li>
          <li>总金额：352.00</li>
          <li>状态：<span class='c_r'>等待支付</span>  </li>
          <li>订单时间：2017-02-05 16:47:00</li>
      </ul>
      <ul class="list1">
          <li>收件人：1</li>
          <li>电话：1</li>
          <li>地址：青海 西宁 城中区 1 邮编： 1</li>
      </ul>
      <ul class="good">
        <li>
          <div class="good_img">
            <img src="/static/img/good_list.png" alt="">
          </div>
          <div class="good_disc">
              <h3>WE ARE THE ONES纪念版卫衣-秋 冬款</h3>
              <h4>163.00 <span>x1</span></h4>
          </div>
        </li>
        <li>
          <div class="good_img">
            <img src="/static/img/good_list.png" alt="">
          </div>
          <div class="good_disc">
              <h3>WE ARE THE ONES纪念版卫衣-秋 冬款</h3>
              <h4>163.00 <span>x1</span></h4>
          </div>
        </li>

      </ul>
      <button class="delete c_r r clear" type="button" name="button">删除</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name:'order',
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
  #order{
    .c_r{
      color:#c11010
    }
    .order_box{
      .list1{
        width: 100%;
        box-sizing: border-box;
        padding-left: 0;
        height: auto;
        border: 1px #d3d3d3 solid;
        margin-bottom: 20px;
        li{
          border-bottom: 1px  #d3d3d3 solid;
          padding:10px;
          font-size: 14px;
          &:last-child{
            border: 0;

          }
        }
      }
      .good{
        padding-left: 0;
        li{
          height: 100px;
          border: 1px  #d3d3d3 solid;
          display: flex;
          margin-bottom: 20px;
          .good_img{
              width: 100px;
              display: flex;
              border-right: 1px #d3d3d3 solid;
              align-items: center;
              justify-content: center;
              img{
                max-width: 100%;
                max-height: 100%;
              }
          }
          .good_disc{
            box-sizing: border-box;
            position:relative;
            padding:5px;
            font-size: 12px;
            flex:1;
            h4{
              position: absolute;
              bottom: 5px;
              width: 95%;
              span{
                float: right;
              }
            }
          }
        }
      }
      button.delete{
        background: rgba(0, 0,0,0);
        border: 0;
        margin-top: 10px;
      }
    }
  }
</style>
