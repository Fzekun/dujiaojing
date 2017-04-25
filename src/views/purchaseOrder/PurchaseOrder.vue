<template>
    <div class="purchaseOrder">

      <div class="purchase-wrap">
        <div v-if="edit" class="top-header">编辑</div>
        <div v-else class="top-header">完成</div>
        <div class="line_8"></div>
        <div class="purchase-box" v-for="n in 3">
          <header class="header">
            <i class="icon-check"></i>
            <a href="">
              <h3>
                叶问冷冻食品有限公司叶问冷冻食品有限公司
                <i class="u-icon-arr"></i>
              </h3>
            </a>
          </header>
          <div class="activity-box">
              <p class="float_left"><i class="icon-buy">买搭</i>买100件搭10件</p>
              <a href="" class="float_right">去凑单<i class="u-icon-arr"></i></a>
          </div>
          <ul class="commodity-list">
            <li v-for="data in datas">
              <!--<div class="check-wrap float_left">-->
                <!--<i></i>-->
              <!--</div>-->
              <div class="present-wrap float_left">
                <i>赠</i>
              </div>
              <a href="" class="float_left">
                <div class="img-wrap float_left">
                  <img src="../../assets/images/classify-good.png" alt="">
                  <i class="tips">库存不足</i>
                  <i class="soldout">下架</i>
                  <i class="icon-take"></i>
                  <i class="icon-presen"></i>
                </div>
                <div class="text-wrap float_left">
                  <h3>{{ data.name }}</h3>
                  <p class="gray_color">规格：{{ data.dimension }}</p>
                  <p class="gray_color delivery-price"><i class="float_left icon-psf">起</i>{{ data.deliveryPrice }}</p>
                  <p class="price red_color">{{ data.price }}</p>
                </div>
              </a>
              <div class="collect-wrap">
                <i class="icon-dustbin"></i>
              </div>
              <div class="add-wrap">
                <add-number :restriction="data.restriction" ref="input" :number="data.input" v-on:compute="addTotal"></add-number>
              </div>
            </li>
          </ul>
          <a href="" class="clear-commodity">清空失效商品</a>
          <div class="line_12"></div>
        </div>
      </div>
      <!--<notData v-show="show"></notData>-->
      <footer class="account-box">
          <i class="check-all">全选</i>
          <p class="text_right">总价：<span class="red_color">¥120</span></p>
          <a href="" class="btn-account">去结算（0）</a>
      </footer>
      <footer class="account-box">
        <i class="check-all">全选</i>
        <div class="btn-wrap">
          <a href="" class="btn-collect">收藏</a>
          <a href="" class="btn-remove">删除</a>
        </div>
      </footer>
      <div class="mask"></div>
      <common-footer footerIndex="3"></common-footer>

      <Confirm :show-title="false" v-model="confirm">
        <div class="cancel-order">
          <i class="icon-delect"></i>
          <h3>是否删除？</h3>
          <p>数量为0时将自动将该商品从购物车中删除</p>
        </div>
      </Confirm>
    </div>
    <!--<div class="alert-content">-->
    <!--</div>-->
</template>

<script>
  import CommonFooter from '../../components/Footer.vue'
  import NotData from '../../components/purchaseOrder/notData.vue'
  import AddNumber from '../../components/pubilc/AddNumber.vue'
  import { ViewBox,Confirm } from 'vux'
  export default {
      data(){
          return {
              confirm : true,
              edit : true,
              show : false,
              datas : [
                {
                  name : '冰川带鱼冰川带带鱼',
                  dimension : '12122.15kg/袋',
                  deliveryPrice : '100000',
                  price : '￥14145.00',
                  collect : false,
                  input : 1,
                  //限购
                  restriction : 100
                },
                {
                  name : '冰川带鱼冰川带带鱼',
                  dimension : '12122.15kg/袋',
                  deliveryPrice : '100000',
                  price : '￥14145.00',
                  collect : false,
                  input : 1,
                  restriction : false
                }
              ]
          }
      },
      mounted : function(){
      },
      methods : {
        addTotal(){
          var input = this.$refs.input;
          this.orderTotal = 0;
          input.forEach((item)=>{
            this.orderTotal += parseInt(item.value,10);
          });
          this.$store.dispatch( 'computeOrderTotal', this.orderTotal );
        }
      },
      components : {
        CommonFooter,
        NotData,
        AddNumber,
        Confirm
      }
  }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common.scss';
  body{
      background: none;
  }
  .red_color{
      color:$color_e94738;
  }
  .cancel-order{
    color:$color_333333;
    @extend .text_center;
    padding:0 0 px2rem(36) 0;
    h3{
        font-size: px2rem(32);
        font-weight: bold;
        line-height: px2rem(100);
    }
    p{
      line-height: px2rem(34);
      font-size: px2rem(26);
    }
    .icon-delect{
      @extend .block;
      width: 100%;
      height: px2rem(124);
      background: url("../../assets/images/icon/icon-deal_failed.png") no-repeat center bottom;
      background-size:px2rem(84) auto;
    }
  }
  .activity-box{
      height: px2rem(79);
      line-height: px2rem(79);
      border-bottom: 1px solid $color_efeff4;
      @extend .relative;
      font-size: px2rem(24);
      margin:0 0 0 px2rem(30);
      padding:0 px2rem(60) 0 0;
      & > a{
        color:$color_0086d1;
      }
      .u-icon-arr{
        border-color: $color_0086d1;
      }
      .icon-buy{
          @extend .inline_block;
          vertical-align: top;
          padding:0 px2rem(18);
          border-radius: px2rem(14);
          background: $color_e94738;
          line-height: px2rem(36);
          color:$white;
          margin:px2rem(22) px2rem(16) 0 0;
      }
  }
  .mask{
      @extend .fixed;
      bottom:0;
      height: px2rem(152);
      background: $white;
      z-index: 20;
      width: 100%;
  }
  /*.purchase-wrap{*/
      /*padding-bottom: px2rem(150);*/
  /*}*/
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
  .check-all{

  }
  .btn-account{
      @extend .absolute;
      right:0;
      top:0;
      height:100%;
      background: $color_0086d1;
      padding:0 px2rem(30) 0 px2rem(42);
      line-height: px2rem(100);
      font-size: px2rem(32);
      color:$white;
  }
  .check-all{
      @extend .absolute;
      height: 100%;
      left:px2rem(30);
      top:0;
      padding:0 0 0 px2rem(50);
      background: url("../../assets/images/icon/icon-check.png") no-repeat left center;
      background-size: px2rem(36) auto;
  }
  .check-all.on{
    background: url("../../assets/images/icon/icon-check_on.png") no-repeat left center;
    background-size: px2rem(36) auto;
  }
  .account-box{
      z-index: 100;
      box-sizing: border-box;
      background: $white;
      line-height: px2rem(100);
      font-size: px2rem(28);
      @extend .fixed;
      bottom:px2rem(150);
      width: 100%;
      height: px2rem(100);
      padding:0 px2rem(282) 0 0;
      border-bottom: 1px solid $color_d9d9d9;
      border-top: 1px solid $color_d9d9d9;
      .btn-wrap{
          @extend .absolute;
          right:0;
          top:0;
          width: px2rem(382);
          height: px2rem(100);
          a{
              float:left;
              height: px2rem(100);
              line-height: px2rem(100);
              width: 50%;
              color: $white;
              @extend .text_center;
              font-size: px2rem(32);
          }
        .btn-collect{
            background: $color_f39800;
        }
        .btn-remove{
            background: $color_0086d1;
        }
      }
  }
  .line_8{
    height: px2rem(8);
    background:$color_efeff4;
  }
  .line_12{
    height: px2rem(12);
    background:$color_efeff4;
  }
  .purchaseOrder{
      font-size: px2rem(26);
      padding:0 0 px2rem(250) 0;
  }
  .clear-commodity{
      @extend .block;
      width: px2rem(272);
      height: px2rem(52);
      border:1px solid $color_333333;
      border-radius: px2rem(4);
      margin:px2rem(50) auto px2rem(76) auto;
      color:$color_333333;
      @extend .text_center;
      line-height: px2rem(52);
  }
  .top-header{
      height: px2rem(80);
      text-align: right;
      line-height: px2rem(80);
      padding: 0  px2rem(30) 0 0;
  }
  .purchase-box{
      .header{
          height: px2rem(77);
          background: $color_fafafa;
          border-bottom: 1px solid $color_efeff4;
          line-height: px2rem(77);
          padding:0 0 0 px2rem(86);
          @extend .relative;

          h3{
            padding: 0 px2rem(140) 0 px2rem(42);
            @include overflow_omit;
            font-size: px2rem(28);
            background: url("../../assets/images/icon/icon-order_shop.png") no-repeat left center;
            background-size: px2rem(31) auto;
            color:$color_333333;
          }
          .icon-check{
              @extend .absolute;
              width: px2rem(36);
              height: px2rem(36);
              left:px2rem(30);
              top:px2rem(20);
              background: url("../../assets/images/icon/icon-check.png") no-repeat;
              background-size: 100% auto;
          }
          .icon-check.on{
            background: url("../../assets/images/icon/icon-check_on.png") no-repeat;
            background-size: 100% auto;
          }
      }
  }
  .commodity-list{
    padding:0 0 0 px2rem(30);
    li{
      padding: 0 px2rem(30) px2rem(22) 0;
      overflow: hidden;
      @extend .relative;
      .collect-wrap{
        @extend .absolute;
        right:px2rem(30);
        top:px2rem(30);
        width: px2rem(29);
        height: px2rem(29);
        .icon-dustbin{
          @extend .block;
          width: px2rem(32);
          height: px2rem(31);
          background: url("../../assets/images/icon/icon-dustbin.png") no-repeat;
          background-size: 100% auto;
        }
      }
      & > a{
        color:$color_333333;
      }
      border-bottom: 1px solid $color_efeff4;
      .present-wrap{
        width: px2rem(65);
        height: px2rem(150);
        font-size: 0;
        margin : px2rem(40) 0 0 0;
        i{
          font-size: px2rem(24);
          vertical-align: middle;
          margin:px2rem(56) 0 0 0;
          @extend .inline_block;
          width: px2rem(43);
          height: px2rem(37);
          line-height: px2rem(37);
          color:$white;
          @extend .text_center;
          background: url("../../assets/images/icon/icon-present.png") no-repeat;
          background-size:100% auto;
        }
      }
      .check-wrap{
        width: px2rem(64);
        height: px2rem(150);
        margin : px2rem(40) 0 0 0;
        background: url("../../assets/images/icon/icon-check.png") no-repeat left px2rem(62);
        background-size:px2rem(36) auto;
      }
      .check-wrap.on{
        background: url("../../assets/images/icon/icon-check_on.png") no-repeat left px2rem(62);
        background-size:px2rem(36) auto;
      }
      .img-wrap{
        width: px2rem(150);
        height: px2rem(150);
        margin : px2rem(40) px2rem(19) 0 0;
        border:1px solid $color_d9d9d9;
        @extend .relative;
        img{
          width: 100%;
        }
        .tips{
            @extend .absolute;
            bottom:0;
            left:0;
            width: 100%;
            height: px2rem(40);
            line-height: px2rem(40);
            color:$white;
            @extend .text_center;
            font-size: px2rem(24);
            background: rgba(0,0,0,.49);
        }
        .icon-take,.icon-presen{
            width: px2rem(70);
            height: px2rem(72);
            @extend .absolute;
            right:0;
            top:0;
        }
        .icon-take{
          background: url("../../assets/images/icon/icon-buy.png") no-repeat;
          background-size: 100% auto;
        }
        .icon-presen{
          background: url("../../assets/images/icon/icon-p_present.png") no-repeat;
          background-size: 100% auto;
        }
        .soldout{
          @extend .absolute;
          top:0;
          left:0;
          width: 100%;
          height: 100%;
          line-height: px2rem(150);
          color:$white;
          @extend .text_center;
          background: rgba(0,0,0,.49);
        }
      }
      .add-wrap{
        @extend .absolute;
        right:px2rem(30);
        top:px2rem(130);
        width: 100%;
      }
      .text-wrap{
        margin: px2rem(30) 0 0 0;

        h3{
          line-height: px2rem(42);
          @include overflow_omit;
          width: px2rem(400);
        }
        p{
          line-height: px2rem(40);
          @include overflow_omit;
        }
        .delivery-price{
          line-height: px2rem(46);
          overflow: hidden;
          font-size: px2rem(24);
        }
        .icon-psf{
          background: $color_e99314;
          width: px2rem(29);
          height: px2rem(29);
          color:$white;
          line-height: px2rem(28);
          @extend .text_center;
          border-radius: px2rem(5);
          font-size: px2rem(22);
          @extend .block;
          margin: px2rem(9) px2rem(10) 0 0;
        }
        .price{
          line-height: px2rem(46);
        }
      }
      .dimension{
        line-height: px2rem(40);
      }
    }
  }
</style>
