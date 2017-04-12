<template>
  <div class="no-coupon">
      <div class="no-coupon_bj"></div>
      <p>暂无可用优惠券</p>
  </div>
</template>


<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common';
  .no-coupon{
    @extend .absolute;
    top:px2rem(81);
    bottom: 0;
    right:0;
    left:0;
    background: $white;
    z-index: 1;
    p{
        line-height: px2rem(105);
        @extend .text_center;
        font-size: px2rem(28);
    }
  }
  .no-coupon_bj{
      height: px2rem(262);
      background: url("../../assets/images/icon/icon-no_coupon.png") no-repeat center bottom;
      background-size: px2rem(131) auto;
  }
</style>
