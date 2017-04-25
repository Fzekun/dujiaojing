<template>
  <div class="not-collect">
    <div class="not-collect_bj"></div>
    <p>暂无收藏</p>
    <a class="btn">去逛逛</a>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/base/necessary.scss';
  .not-collect{
    @extend .text_center;
    font-size: 0;
    .not-collect_bj{
        height: px2rem(234);
        background: url("../../assets/images/icon/icon-notCollect.png") no-repeat center bottom;
        background-size: px2rem(275) auto;
    }
    p{
        line-height: px2rem(88);
        color:$color_999999;
        margin:0 0 px2rem(20) 0;
        font-size: px2rem(26);
    }
    .btn{
        @extend .inline_block;
        padding:0 px2rem(45);
        height: px2rem(52);
        line-height: px2rem(52);
        font-size: px2rem(28);
        color: $color_0086d1;
        border:1px solid $color_0086d1;
        border-radius: px2rem(6);
    }
  }
</style>
