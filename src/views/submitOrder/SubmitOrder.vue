<template>
  <div class="order-details">
     <!--收货地址 start-->
      <div class="receiving_info-box">
        <a href="">
          <div class="wrap">
            <h3>
              <span class="float_left">张亮</span>
              <span class="float">13718163294</span>
            </h3>
            <p></p>
            <p>北京市朝阳区西单北大街号西单图书大厦单北大
              街66号西单图书大厦</p>
            <i class="u-icon-arr"></i>
          </div>
        </a>
      </div>
      <!--收货地址 start-->
      <div class="order-line"></div>
      <div class="order-commodity">
          <h3 class="header">叶问冷冻食品叶问冷冻食品有限公司叶问冷冻食品有限有限公司</h3>
          <div class="commodity">
            <ul>
              <li>
                <div class="order_image_text-box">
                  <div class="img-wrap float_left">
                    <img src="../../assets/images/order-commodity.jpg" alt="">
                    <span class="tag-info">买搭</span>
                  </div>
                  <div class="text-wrap float_left">
                    <h4>客味缘 火锅丸子套餐火锅丸子套餐丸子套子套子套餐丸丸子套子套子套餐丸</h4>
                    <p class="gray_color">规格：12122.15kg/袋</p>
                    <p>
                      <span class="float_left"><i class="red_color">￥100.00</i></span>
                      <span class="float_right">x1</i></span>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="order_image_text-box">
                  <div class="img-wrap float_left">
                    <img src="../../assets/images/order-commodity.jpg" alt="">
                  </div>
                  <div class="text-wrap float_left">
                    <h4>客味缘 火锅丸子套餐火锅丸子套餐丸子套子套子套餐丸丸子套子套子套餐丸</h4>
                    <p class="gray_color">规格：12122.15kg/袋</p>
                    <p>
                      <span class="float_left"><i class="red_color">￥100.00</i></span>
                      <span class="float_right">x1</i></span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="coupon">
                <a href="javascript:;">
                  <p>
                      <span class="float_left">店铺优惠券</span>
                      <span class="float_right red_color">-¥50</span>
                  </p>
                  <i class="u-icon-arr"></i>
                </a>
            </div>

          </div>
       </div>

      <div class="pay_type-box">
         <div class="pay-wrap flex">
           <p>支付方式</p>
           <div>
             <a href="" class="float_left chat-pay">微信支付</a>
             <a href="" class="float_left">货到付款</a>
           </div>
         </div>
          <div class="delivery-type flex">
            <p>配送方式</p>
            <div>
              <a href="" class="float_left">配送</a>
              <a href="" class="float_left">自提</a>
            </div>
          </div>
          <div class="coupon">
            <a href="javascript:;">
              <p>
                <span class="float_left">平台优惠券</span>
                <span class="float_right red_color">-¥50</span>
              </p>
              <i class="u-icon-arr"></i>
            </a>
          </div>
      </div>
      <div class="remark-box">
        <p><span class="float_left">订单备注</span><textarea maxlength="30" class="float_left" placeholder="选填，30字以内"></textarea></p>
      </div>
      <div class="order_details-box">


          <div class="price-wrap">
            <div class="price-box">
              <p>
                  <span class="float_left">数量总计：</span>
                  <span class="float_right">45件</span>
              </p>
              <p>
                <span class="float_left">商品总价：</span>
                <span class="float_right red_color">￥14145.00</span>
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
            </div>
          </div>
          <div class="submit-wrap">
              <p>实付金额：<span class="red_color">￥14145.00</span></p>
              <a href="" class="submit-btn">提交订单</a>
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
  .coupon{
    height: px2rem(80);
    line-height: px2rem(80);
    @extend .relative;
    p{
      padding:0 px2rem(70) 0 0;
    }
    a{
      color:$color_333333;
    }
  }
  .u-icon-arr
  {
    position: absolute;
    top: 50%;
    right: px2rem(35);
    width: px2rem(17);
    height: px2rem(17);
    margin: px2rem(-10) 0 0 0;
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
  .order-line{
    width:100%;
    height: px2rem(3);
    background: url("../../assets/images/icon/icon-order_line.png") no-repeat;
  }
  .receiving_info-box{
    a{
      color:$color_333333;
    }
    padding: px2rem(15) 0 px2rem(22) px2rem(30);
    @extend .bg_white;
    overflow: hidden;
    .wrap{
        padding: 0 px2rem(86) 0 px2rem(60);
        @extend .relative;
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
  .order-commodity{
    overflow: hidden;
    @extend .bg_white;
    @extend .margin;
    .header{
        height: px2rem(77);
        padding: 0 px2rem(30) 0 px2rem(82);
        background:$color_fafafa url("../../assets/images/icon/icon-order_shop.png") no-repeat px2rem(30) center;
        background-size: px2rem(31) auto;
        line-height: px2rem(77);
        @include overflow_omit;
    }

    .commodity{
      padding: 0 0 0 px2rem(30);
      overflow: hidden;
          .order_image_text-box{
            border-bottom: 1px solid $color_efeff4;
            overflow: hidden;
            padding: px2rem(40) px2rem(30) px2rem(40) 0;
          }
          .img-wrap{
            width: px2rem(150);
            height: px2rem(150);
            border:1px solid $color_efeff4;
            margin: 0 px2rem(22) 0 0;
            @extend .relative;
            .tag-info{
              @extend .absolute;
              top:0;
              left:0;
              padding: 0 px2rem(8);
              line-height: px2rem(40);
              background: $color_e94738;
              font-size: px2rem(22);
              color:$white;
              @extend .text_center;
            }
            img{
              width: 100%;
            }
          }
          .text-wrap{
            h4{
              line-height: px2rem(37);
              width: px2rem(510);
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            p{
              line-height: px2rem(42);
            }
          }
    }
  }
  .remark-box{
    height: px2rem(110);
    padding: 0 px2rem(30);
    @extend .bg_white;
    overflow: hidden;
    @extend .margin;
    p{
      line-height: px2rem(110);
    }
    textarea{
      line-height: 1.4em;
      width: px2rem(500);
      margin: px2rem(35) 0 0 px2rem(30);
      resize: none;
    }
  }
  .delivery-type{
    @extend .pay-wrap;
  }
  .pay-wrap{
    overflow: hidden;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    border-bottom: 1px solid $color_efeff4;
    & > div{
      padding: px2rem(16) 0 0 px2rem(58);
      width: px2rem(450);
    }
    .chat-pay{
        background:url("../../assets/images/icon/icon-chat_pay.png") no-repeat px2rem(22) px2rem(10);
        padding:0 0 0 px2rem(70);
        text-align: left;
        width:px2rem(117);
        background-size:px2rem(42) auto;
    }
    a{
        border:1px solid $color_d9d9d9;
        @extend .block;
        height: px2rem(54);
        border-radius: px2rem(5);
        line-height: px2rem(54);
        color:$color_999999;
        @extend .text_center;
        font-size: px2rem(26);
        width: px2rem(187);
        margin: 0 px2rem(26) px2rem(10) 0;
    }
    a.active{
      border-color:$color_0086d1;
      color:$color_333333;
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
  }
  .order_details-box{
    @extend .bg_white;
    overflow: hidden;
      & > header{
          padding: px2rem(14) px2rem(30);
          overflow: hidden;
          border-bottom: 1px solid $color_efeff4;
          p{
              line-height: px2rem(46);
          }
      }
      .submit-wrap{
        padding: px2rem(30) px2rem(30) px2rem(30) 0;
        @extend .relative;
        overflow: hidden;
        p{
          padding: 0 px2rem(260) 0 px2rem(30);
          font-size: px2rem(28);
        }
        .submit-btn{
            position: absolute;
            right:0;
            top:0;
            background:$color_0086d1;
            @extend .text_center;
            color:$white;
            width: px2rem(260);
            line-height: px2rem(100);
            height: px2rem(100);
            font-size:px2rem(32);
        }
      }
      .price-wrap{
        overflow: hidden;
        padding: px2rem(18) px2rem(30) px2rem(18) px2rem(30);
        border-bottom: 1px solid $color_efeff4;
        p{
          line-height:px2rem(48);
          overflow: hidden;
        }
      }
  }
</style>
