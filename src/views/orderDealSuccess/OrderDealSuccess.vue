<template>
  <div class="success-box">
    <div class="tip-wrap">
      <div class="tip_bj"></div>
      <p>
        订单交易成功！
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
        <a href="" class="btn">返回首页</a>
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
    height: px2rem(79);
    line-height: px2rem(79);
    border:1px solid $color_1c7fc2;
    border-radius: px2rem(6);
    color:$color_1c7fc2;
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
  .success-box{
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
      background: url("../../assets/images/icon/icon-deal_success.png") no-repeat center bottom;
      background-size:px2rem(106) auto;
      margin : 0 0 px2rem(50) 0;
    }
    p{

    }
  }


</style>
