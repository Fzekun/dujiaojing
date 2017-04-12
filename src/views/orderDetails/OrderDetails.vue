<template>
  <div class="order-details">
      <div class="order-box">
          <div class="order_number float_left">
              <p>订单号：<a href="" class="blue_color">355461313565554</a></p>
              <p>下单时间：<span>2017-03-05 13:24:45</span></p>
          </div>
          <div class="float_right">
              <p class="blue_color">待收货</p>
          </div>
      </div>
      <div class="receiving_info-box">
          <div class="wrap">
              <h3>
                  <span class="float_left">张亮</span>
                  <span class="float">13718163294</span>
              </h3>
              <p></p>
              <p>北京市朝阳区西单北大街号西单图书大厦单北大
                街66号西单图书大厦</p>
          </div>
      </div>
      <div class="remark-box">
          <p>订单备注：<span>无</span></p>
      </div>
      <div class="pay_type-box">
          <p>支付方式：微信支付</p>
          <p>配送方式：顺风</p>
      </div>
      <div class="contact_service-box">
        <a href="">
          <p>联系客服</p>
          <i class="u-icon-arr"></i>
        </a>
      </div>
      <div class="order_details-box">
          <header>
              <div class="float_left">
                <p>子订单号：<span>355461313565554</span></p>
                <p>供应商：<span>2017-03-05 13:24:45</span></p>
              </div>
              <div class="float_right">
                <p class="blue_color">待收货</p>
              </div>
          </header>
          <div class="order-wrap">
              <div class="order_image_text-box">
                  <div class="img-wrap float_left">
                    <img src="../../assets/images/order-commodity.jpg" alt="">
                  </div>
                  <div class="text-wrap float_left">
                    <h4>客味缘 火锅丸子套餐丸子套子套子套餐丸</h4>
                    <p class="gray_color">规格：12122.15kg/袋</p>
                    <p class="gray_color">数量：×5</p>
                    <p>
                      <span class="float_left">￥100.00</span>
                      <span class="float_right">小计：<i class="red_color">￥500.00</i></span>
                    </p>
                  </div>
              </div>
              <div class="price-wrap">
                <div class="price-box">
                  <p>
                      <span class="float_left">数量总计：</span>
                      <span class="float_right">45件</span>
                  </p>
                  <p>
                    <span class="float_left">商品总价：</span>
                    <span class="float_right">￥14145.00</span>
                  </p>
                  <p>
                    <span class="float_left">店铺优惠券：</span>
                    <span class="float_right">-￥15.00</span>
                  </p>
                  <p>
                    <span class="float_left">平台优惠券：</span>
                    <span class="float_right">-￥15.00</span>
                  </p>
                  <p>
                    <span class="float_left">运费：</span>
                    <span class="float_right">￥0.00</span>
                  </p>
                  <p>
                    <span class="float_left">实付金额：</span>
                    <span class="float_right red_color">￥1000.00</span>
                  </p>
                </div>
              </div>
              <div class="btn-wrap">
                  <p class="float_right">
                    <a href="" class="btn float_left btn-a-order">再来一单</a>
                    <a href="" class="btn float_left btn-c-receiving">确认收货</a>
                  </p>
              </div>
          </div>
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
  .u-icon-arr
  {
    position: absolute;
    top: px2rem(30);
    right: px2rem(35);
    width: px2rem(17);
    height: px2rem(17);
    border-style: solid;
    border-width: px2rem(3) px2rem(3) 0 0;
    border-color: $color_9a9899;
    -webkit-transform-origin: center center;
    -webkit-transform: rotateZ(45deg);
  }
  .blue_color{
      color:$color_0086d1;
  }
  .red_color{
    color:$color_e94738;
  }
  .gray_color{
      color:$color_999999;
  }
  .btn{
    @extend .block;
    padding: 0 px2rem(25);
    height: px2rem(50);
    line-height: px2rem(50);
    border:1px solid $color_d9d9d9;
    border-radius: px2rem(6);
  }
  .btn-a-order{
    color:$color_1c7fc2;
    border-color: $color_1c7fc2;
  }
  .btn-c-receiving{
      border-color:$color_1c7fc2;
      background: $color_1c7fc2;
      color:$white;
  }
  .margin{
    margin: 0 0 px2rem(10) 0;
  }
  .order-details{
    font-size: px2rem(26);
    color:$color_333333;
  }
  .order-box{
      padding: px2rem(30);
      line-height: px2rem(48);
      @extend .bg_white;
      overflow: hidden;
      @extend .margin;
  }
  .receiving_info-box{
    padding: px2rem(15) 0 px2rem(22) px2rem(30);
    @extend .bg_white;
    overflow: hidden;
    @extend .margin;
    .wrap{
        padding: 0 px2rem(86) 0 px2rem(60);
        background: url("../../assets/images/icon/icon-location_gray.png") no-repeat left center;
        background-size:px2rem(32) auto;
        h3{
            font-size: px2rem(28);
            line-height: px2rem(60);
        }
        p{
            line-height: px2rem(40);
        }
    }
  }
  .remark-box{
    height: px2rem(86);
    padding: 0 0 0 px2rem(30);
    @extend .bg_white;
    overflow: hidden;
    @extend .margin;
    p{
      line-height: px2rem(86);
      span{
        color:$color_999999;
      }
    }
  }
  .pay_type-box{
      padding: 0 0 0 px2rem(30);
      @extend .bg_white;
      overflow: hidden;
      @extend .margin;
      p{
          line-height: px2rem(88);
      }
      p:first-child{
        border-bottom: 1px solid $color_efeff4;
      }
  }
  .contact_service-box{
    height: px2rem(80);
    line-height: px2rem(80);
    padding: 0 0 0 px2rem(30);
    @extend .bg_white;
    overflow: hidden;
    @extend .margin;
    @extend .relative;
    a{
        color:$color_333333;
    }
  }
  .order_details-box{
    @extend .bg_white;
    @extend .margin;
    overflow: hidden;
      & > header{
          padding: px2rem(14) px2rem(30);
          overflow: hidden;
          border-bottom: 1px solid $color_efeff4;
          p{
              line-height: px2rem(46);
          }
      }

    .order-wrap{
      padding: 0 0 0 px2rem(30);
      overflow: hidden;
      .btn-wrap{
        padding: px2rem(30) px2rem(30) px2rem(30) 0;
        overflow: hidden;
        p{
            a:first-child{
              margin: 0 px2rem(26) 0 0;
            }
        }
      }
      .price-wrap{
        overflow: hidden;
        padding: px2rem(18) px2rem(30) px2rem(18) 0;
        border-bottom: 1px solid $color_efeff4;
        p{
          line-height:px2rem(48);
          overflow: hidden;
        }
      }
      .order_image_text-box{
        border-bottom: 1px solid $color_efeff4;
        overflow: hidden;
        padding: px2rem(10) px2rem(30) px2rem(30) 0;
      }
      .img-wrap{
          width: px2rem(150);
          height: px2rem(150);
          border:1px solid $color_efeff4;
          margin: px2rem(10) px2rem(22) 0 0;
          img{
              width: 100%;
          }
      }
      .text-wrap{
          h4{
            line-height: px2rem(48);
            @include overflow_omit;
            width: px2rem(510);
          }
          p{
            line-height: px2rem(42);
          }
      }
    }
  }
</style>
