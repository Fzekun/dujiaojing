<template>
  <div class="yetUnused-box">
    <div class="wrap">
      <div class="flex">
        <div class="compon-wrap">
          <p class="price">¥<span>100</span></p>
          <p>满500元使用</p>
        </div>
        <div class="text-wrap flex_item">
          <h3>惠发冷冻优惠券</h3>
          <p>2016.06.01——2016.06.23</p>
        </div>
      </div>
      <i class="icon-use"></i>
    </div>
    <div class="wrap">
      <div class="flex">
        <div class="compon-wrap">
          <p class="price">¥<span>100</span></p>
          <p>满500元使用</p>
        </div>
        <div class="text-wrap flex_item">
          <h3>惠发冷冻优惠券</h3>
          <p>2016.06.01——2016.06.23</p>
        </div>
      </div>
      <i class="icon-use"></i>
    </div>
  </div>
</template>


<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common';
  .yetUnused-box{
    padding: px2rem(40) px2rem(30) 0 px2rem(30);
    .wrap{
      overflow: hidden;
      @extend .relative;
      margin: 0 0 px2rem(30) 0;
    }
    .icon-use{
      @extend .absolute;
      width: px2rem(100);
      height: px2rem(100);
      right:px2rem(30);
      top:px2rem(27);
      background: url("../../assets/images/icon/icon-coupon_use.png") no-repeat;
      background-size: 100% auto;
    }
    .text-wrap{
      color:$color_333333;
      line-height: px2rem(34);
      font-size: px2rem(24);
      padding: px2rem(22) 0 0 px2rem(28);
      h3{
        font-size: px2rem(28);
      }
      background: $white;
    }
    .compon-wrap{
      .price{
        font-size: px2rem(36);
        line-height: px2rem(80);
        height: px2rem(78);
        overflow: hidden;
        margin : px2rem(20) 0 0 0;
      }
      .price span{
        font-size: px2rem(80);
      }
      width:px2rem(201);
      height: px2rem(158);
      background:url("../../assets/images/icon/icon-coupon_on.png") no-repeat;
      background-size:100% auto;
      mso-font-signature-usb-two: px2rem(24);
      @extend .text_center;
      color:$white;
      line-height: px2rem(42);
    }
  }

</style>
