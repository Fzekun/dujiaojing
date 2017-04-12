<template>
  <div class="failed-box">
      <div class="tip-wrap">
          <div class="tip_bj"></div>
          <p>
            您的订单暂未支付，平台将会为您保留24个小时，<br >
            24小时后将会自动取消订单，请尽快支付。
          </p>
      </div>
      <div class="division"></div>
      <div class="order-box">
          <p>订单号：<span class="blue_color">45644645565656</span></p>
          <p>需要支付金额：<span class="red_color">￥14145.00</span></p>
          <p>支付方式：微信支付</p>
          <i class="u-icon-arr"></i>
      </div>
      <div class="btn-box">
          <p>
            <a href="" class="btn float_left">返回首页</a>
            <a href="" class="btn btn-c-receiving float_left">去支付</a>
          </p>
      </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {

      }
    },
    mounted(){

    },
    methods : {

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import "../../assets/scss/common";
  body{
      background: none;
  }
  .blue_color{
      color:$color_0086d1;
  }
  .red_color{
      color:$color_e94738;
  }
  .btn{
    @extend .block;
    padding: 0 px2rem(52);
    height: px2rem(78);
    line-height: px2rem(78);
    border:1px solid $color_999999;
    border-radius: px2rem(6);
    color:$color_333333;
  }
  .btn-c-receiving{
    border-color:$color_1c7fc2;
    padding: 0 px2rem(69);
    background: $color_1c7fc2;
    color:$white;
  }
  .division{
     height: px2rem(10);
     width: 100%;
     background:$color_efeff4;
  }
  .u-icon-arr
  {
    position: absolute;
    top: px2rem(104);
    right: px2rem(35);
    width: px2rem(17);
    height: px2rem(17);
    border-style: solid;
    border-width: px2rem(3) px2rem(3) 0 0;
    border-color: $color_9a9899;
    -webkit-transform-origin: center center;
    -webkit-transform: rotateZ(45deg);
  }
  .failed-box{
    font-size:px2rem(28);
    color:$color_333333;
  }
  .btn-box{
     @extend .text_center;
     padding : px2rem(58) 0 0 0;
     p{
        @extend .inline_block;
        a:first-child{
          margin: 0 px2rem(50) 0 0;
        }
     }
  }
  .order-box{
    padding: px2rem(32) 0 px2rem(50) px2rem(30);
    border-bottom: px2rem(2) solid $color_efeff4;
    @extend .relative;
    p{
        line-height: px2rem(62);
    }
  }
  .tip-wrap{
    @extend .text_center;
    line-height: px2rem(44);
    padding: 0 0 px2rem(90) 0;
    .tip_bj{
      width: 100%;
      height: px2rem(202);
      background: url("../../assets/images/icon/icon-deal_failed.png") no-repeat center bottom;
      background-size:px2rem(106) auto;
      margin : 0 0 px2rem(50) 0;
    }
    p{

    }
  }


</style>
