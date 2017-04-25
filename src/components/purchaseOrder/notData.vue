<template>
  <div>
    <div class="not-collect">
      <div class="not-collect_bj"></div>
      <p>采购单暂无商品</p>
      <a class="btn">马上采购</a>
    </div>
    <div class="line"></div>
    <recommend v-show="show"></recommend>
  </div>
</template>
<script>
  import Recommend from './recommend'
  export default{
      data(){
          return {
            show : false
          }
      },
      components : {
        Recommend
      }
  }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/base/necessary.scss';
  .line {
    height: px2rem(20);
    background: $color_efeff4;
  }
  .not-collect{
    @extend .text_center;
    font-size: 0;
    padding:0 0 px2rem(65) 0;
    .not-collect_bj{
      height: px2rem(234);
      background: url("../../assets/images/icon/icon-box.png") no-repeat center bottom;
      background-size: px2rem(252) auto;
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
