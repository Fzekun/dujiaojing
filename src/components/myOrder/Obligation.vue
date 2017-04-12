<template>
  <div class="obligation">
      <div class="no-order-wrap">
          <div class="order_bj"></div>
          <p>当前暂无订单</p>
          <a href="" class="btn-purchase">
              去采购
          </a>
      </div>
      <div>
          有数据
      </div>
  </div>
</template>
<script>

</script>
<style rel="stylesheet/scss" lang="scss" spoend>
    @import "../../assets/scss/common";
    .obligation{

    }
    .no-order-wrap{
        position: absolute;
        top:px2rem(98);
        bottom:0;
        right:0;
        left:0;
        background: $white;
        width: 100%;
        @extend .text_center;
        p{
            line-height: px2rem(82);
            color:$color_999999;
        }
        .btn-purchase{
            border:1px solid $color_0086d1;
            @extend .text_center;
            line-height: px2rem(52);
            border-radius: px2rem(6);
            padding:0 px2rem(45);
            @extend .inline_block;
            font-size:px2rem(28);
            color:$color_0086d1;
            margin: px2rem(22) 0 0 0;
        }
    }
    .order_bj{
        width: 100%;
        height: px2rem(214);
        background: url("../../assets/images/icon/icon-box.png") no-repeat center bottom;
        background-size:px2rem(256) auto;
    }
</style>
