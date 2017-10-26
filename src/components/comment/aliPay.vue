<template>
  <div id="aliPay">
      <div v-html="html">
        <form name="punchout_form" method="post" action="https://openapi.alipay.com/gateway.do?sign=bZg98qFjuY4pPlZdous6ZSDwG2Ee3W2gkQCHrfVWptjHoVPSQ54hBoMN2POn42d1KShOxeiQFeAfCM3sMMVDOQ9BbGFbCifQeldCOAKQ22z1xA9c4n7JpdISDREeJjotJyQKth%2BWkLX3hps%2FFDsCRmpW6O7Hhx6i5hLTpr792JWtwJC%2FNH36Dve08IuKZBkTLArPqRatdC7Hfoo5JWRy0jowi4BIaYZfr32aOXVDh6B1ydZyIlOf4qYf77%2Fa8qGJ%2FDF%2BYa7GjhN5olbJnEehn7xyYQCK6ydSlk8Gk0uQOjptzDa8LVGOF%2BPwKtMttsKgNaNAkbf1Z93CY8AgSWb%2BUQ%3D%3D&timestamp=2017-08-16+16%3A18%3A35&sign_type=RSA2&notify_url=https%3A%2F%2F123.57.15.15%3A8080%2FOneShoe%2Falipay%2Fpay&charset=UTF-8&app_id=2016082000295744&method=alipay.trade.wap.pay&return_url=https%3A%2F%2F123.57.15.15%3A8089&version=1.0&alipay_sdk=alipay-sdk-java-dynamicVersionNo&format=json">
        <input type="hidden" name="biz_content" value="{&quot;body&quot;:&quot;2321&quot;,&quot;out_trade_no&quot;:&quot;201708162384220793955654074&quot;,&quot;product_code&quot;:&quot;QUICK_WAP_PAY&quot;,&quot;subject&quot;:&quot;车市&quot;,&quot;timeout_express&quot;:&quot;2m&quot;,&quot;total_amount&quot;:&quot;1&quot;}">
        <input type="submit" value="立即支付" style="display:none" >
        </form>

      </div>
  </div>
</template>

<script>
export default {
  name: 'aliPay',
  data() {
    return {

    }
  },
  created(){
    this.go()
  },
  props: ['html'],
  methods: {
    go(){
      document.forms[0].submit()
    }
  }

}
</script>
<style lang="scss">
#aliPay{
  div{
  }
}
</style>
