<template>
  <div>
    <nav class="nav-tab">
      <v-touch :key="nav.id" tag="a" class="flex_item" :class="{active : active == index}" v-for="(nav,index) in navs" v-on:tap="changeTab(nav,index)">{{ nav.text }}</v-touch>
    </nav>
    <components :is="currentView"></components>
  </div>
</template>
<script>
  import Enquiry from '../../components/enquiryOrder/Enquiry.vue'
  import BuyNow from '../../components/enquiryOrder/BuyNow.vue'
  export default{
    data(){
      return {
        active : 0,
        currentView : 'Enquiry',
        navs : [{
          text : '询价',
          view : 'Enquiry'
        },{
          text : '一口价',
          view : 'BuyNow'
        }],
      }
    },
    mounted(){

    },
    methods : {
      changeTab(item,index){
        this.currentView = item.view;
        this.active = index;
      }
    },
    components : {
      Enquiry,
      BuyNow
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import "../../assets/scss/common";
  .duty-price{
    font-size: px2rem(28);
  }
  body{
    background: none;
  }
  .line{
    height: px2rem(10);
    background: $color_efeff4;
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
  .bold{
    font-weight: bold;
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
  .nav-tab{
    @extend .flex;
    height: px2rem(80);
    border-bottom: 1px solid $color_efeff4;
    a{
      line-height: px2rem(78);
      font-size:px2rem(28);
      color:$color_333333;
      @extend .text_center;
      border-bottom:px2rem(3) solid rgba(0,0,0,0);
    }
    a.active{
      height: px2rem(78);
      @extend .relative;
      color:$color_0086d1;
      border-bottom:px2rem(3) solid rgba(0,134,209,1);
    }
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
    background-size: 100% auto;
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
    .header{
        height: px2rem(77);
        background-size: px2rem(31) auto;
        line-height: px2rem(77);
        @include overflow_omit;
        padding:0 px2rem(100) 0 0;
        background: $color_fafafa;
    }
    .commodity{
      padding: 0 0 0 px2rem(30);
      overflow: hidden;
      li{
        padding: 0 0 px2rem(36) 0;
        border-bottom: 1px solid $color_efeff4;
      }
          .order_image_text-box{
            /*border-bottom: 1px solid $color_efeff4;*/
            overflow: hidden;
            @extend .relative;
            padding: px2rem(40) px2rem(30) 0 0;
          }
          .img-wrap{
            width: px2rem(150);
            height: px2rem(150);
            border:1px solid $color_efeff4;
            margin: 0 px2rem(22) 0 0;
            @extend .relative;
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
  .delivery-price{
    /*line-height: px2rem(30);
    position: absolute;
    bottom: 0;
    left: 0;
    color:$color_e94738;
    font-size: px2rem(26);
    line-height: px2rem(30);*/
    span{
      @extend .inline_block;
      width:px2rem(30);
      height: px2rem(30);
      background: $color_e99314;
      font-size: px2rem(22);
      vertical-align: top;
      color:$white;
      @extend .text_center;
      line-height: px2rem(30);
      border-radius: px2rem(5);
      margin:px2rem(5) px2rem(12) 0 0;
    }
  }
  .numbers-box{
      @extend .relative;
      height: px2rem(44);
      margin:px2rem(20) 0 px2rem(18) 0;
      line-height: px2rem(44);
      .wrap{
          @extend .absolute;
          left:px2rem(90);
          top:0;
      }
  }
  .quotation-box{
      line-height:px2rem(44);
      @extend .relative;
      .wrap{
          @extend .absolute;
          left:px2rem(90);
          top:0;
      }
  }
  .quotation{
      @extend .inline_block;
      width: px2rem(130);
      /*height: px2rem(41);*/
      font-size: px2rem(22);
      height: px2rem(22);
      line-height: 1.4em;
      border-radius: px2rem(4);
      padding:px2rem(10) px2rem(18) px2rem(10) px2rem(18);
      border:1px solid $color_9a9899;
  }
  .buy-number{
      @extend .absolute;
      top:px2rem(150);
      right: px2rem(30);
  }
  .busine-type{
    @extend .inline_block;
    width: px2rem(37);
    height: px2rem(44);
    margin:px2rem(18) px2rem(20) 0 px2rem(30);
    font-size: px2rem(28);
    color: $white;
    line-height: px2rem(36);
    @extend .text_center;
    vertical-align: top;
  }
  .factory{
    background: url("../../assets/images/icon/icon-factory.png") no-repeat;
    background-size:100% auto;
  }
</style>
