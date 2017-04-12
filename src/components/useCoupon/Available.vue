<template>
  <div>
    <div class="unused-box" v-if="tab.length > 0">
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
        <p class="text_right use"><a href="">立即使用 ></a></p>
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
        <p class="text_right use"><a href="">立即使用 ></a></p>
      </div>
    </div>
    <Not-coupon v-else></Not-coupon>
  </div>

</template>
<script>
    import NotCoupon from './NotCoupon.vue'
    export default{
        data(){
            return {
              tab : [1]
            }
        },
        components : {
          NotCoupon
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common';
  .unused-box{
    padding: px2rem(40) px2rem(30) 0 px2rem(30);
    .wrap{
      overflow: hidden;
      @extend .relative;
      margin: 0 0 px2rem(30) 0;
    }
    .use{
      @extend .absolute;
      a{
        color:$color_0086d1;
      }
      right:0;
      bottom:0;
      width: 100%;
      box-sizing: border-box;
      padding: 0 px2rem(20) 0 0;
      line-height: px2rem(55);
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
      background:url("../../assets/images/icon/icon-coupon_no.png") no-repeat;
      background-size:100% auto;
      mso-font-signature-usb-two: px2rem(24);
      @extend .text_center;
      color:$white;
      line-height: px2rem(42);
    }
  }
</style>
