<template>
  <div>
    <div class="logged">
      <div class="wrap">
          <div class="img-wrap">
            <img src="../../assets/images/avatar.png" alt="">
          </div>
          <div class="text-wrap">
              <p>账号：<span>13567848784</span></p>
              <p>身份：<span>终端</span></p>
          </div>

      </div>
      <a class="btn-account" href="">
          账户/收货地址
          <i class=""></i>
      </a>
    </div>
    <!-- 未登录 start -->
    <div class="not-logged">
        <div>
          <a href="" class="login-btn">登录/注册</a>
        </div>
    </div>
    <!-- 未登录 start -->
    <div class="myStar-wrap">
        <a href="">
            <i class="star"></i>
            <p>我的收藏</p>
        </a>
        <a href="">
            <i class="favorable"></i>
            <p>优惠券</p>
        </a>
    </div>
    <div class="myOrder-wrap">
        <header class="public_header">
            <a href="">
              <h3>我的订单</h3>
              <i class="u-icon-arr"></i>
            </a>
        </header>
        <section>
           <a href="" class="flex_item">
             <div class="item-wrap">
               <span class="payment">
                  <i class="tip"></i>
               </span>
             </div>

              <p>待付款</p>
           </a>
           <a href="" class="flex_item">
             <div class="item-wrap">
                 <span class="orderdispose">
                   <i class="tip"></i>
                 </span>
             </div>
             <p>订单处理中</p>
           </a>
           <a href="" class="flex_item">
             <div class="item-wrap">
                 <span class="receiving">
                    <i class="tip"></i>
                 </span>
             </div>
             <p>待收货</p>
           </a>
        </section>
    </div>
    <div class="purchase-wrap">
        <div>
          <a href="">
            <h3>常用采购</h3>
            <i class="u-icon-arr"></i>
          </a>
        </div>
    </div>
    <div class="addSupplier-wrap">
      <div>
        <a href="">
          <h3>增加供应商</h3>
          <i class="u-icon-arr"></i>
        </a>
      </div>
    </div>
    <div class="serve-wrap">
      <header class="public_header">
         <h3>服务与反馈</h3>
      </header>
      <section>
        <a href="" class="flex_item">
          <div class="serve-item">
              <i class="icon-help"></i>
              <p>帮助中心</p>

          </div>
        </a>
        <a href="" class="flex_item">
          <div class="serve-item">
              <i class="icon-service"></i>
              <p>联系客服</p>
          </div>
        </a>
        <a href="" class="flex_item">
          <div class="serve-item">
              <i class="icon-feedback"></i>
              <p>意见反馈</p>

          </div>
        </a>
        <a href="" class="flex_item">
          <div class="serve-item">
              <i class="icon-about"></i>
              <p>关于我们</p>
          </div>
        </a>
      </section>
    </div>
    <div class="padding-wrap"></div>
    <common-footer footerIndex="4"></common-footer>
  </div>
</template>

<script>
import CommonFooter from '../../components/Footer.vue'
export default {
    data () {
        return {
        }
    },
    mounted : function(){
    },
    computed : {
    },
    name: 'my',
    components: {
        'common-footer': CommonFooter
    },
    method : {
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
@import '../../assets/scss/common.scss';
.mb10{ margin-bottom: px2rem(10) };
/*我的订单和服务反馈公用头*/
.public_header{
  height:px2rem(80);
  line-height: px2rem(80);
  @extend .relative;
  h3{
    color:$color_333333;
    font-size:px2rem(28);
    margin:0 0 0 px2rem(30);
    border-bottom: 1px solid $color_efeff4;
  }
}
.public_title{
  height:px2rem(80);
  line-height: px2rem(80);
  font-size:px2rem(28);
  margin:0 0 0 px2rem(30);
}
.u-icon-arr
{
  position: absolute;
  top: px2rem(30);
  right: px2rem(36);
  width: px2rem(17);
  height: px2rem(17);
  border-style: solid;
  border-width: px2rem(3) px2rem(3) 0 0;
  border-color: $color_9a9899;
  -webkit-transform-origin: center center;
  -webkit-transform: rotateZ(45deg);
}
.logged{
    width: 100%;
    height:px2rem(200);
    background: url("../../assets/images/logged_bj.jpg") no-repeat;
    background-size: 100% auto;
    @extend .background_auto;
    @extend .relative;
    .wrap{
        padding : px2rem(38) 0 0 px2rem(30);
        .img-wrap{
            position: absolute;
            width: px2rem(125);
            height: px2rem(125);
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .text-wrap{
            padding:px2rem(14) 0 0 0;
            margin: 0 0 0 px2rem(152);
            line-height: px2rem(50);
            color:$white;
            font-size:px2rem(28);
        }
    }
    .btn-account{
        position: absolute;
        width: px2rem(244);
        right:px2rem(30);
        bottom:px2rem(20);
        background: $color_f39800;
        height:px2rem(55);
        @extend .text_center;
        color:$white;
        font-size:px2rem(26);
        line-height: px2rem(55);
        border-radius: px2rem(5);
    }
    .btn-account:after{
        content: "";
        position: absolute;
        top: px2rem(18);
        right: px2rem(25);
        width: px2rem(15);
        height: px2rem(15);
        border-style: solid;
        border-width: px2rem(3) px2rem(3) 0 0;
        border-color: $white;
        -webkit-transform-origin: center center;
        -webkit-transform: rotateZ(45deg);
    }
}
  .not-logged{
      @extend .bg_white;
      width:100%;
      height:px2rem(190);
      @extend .mb10;

      & > div{
        position: relative;
        width:100%;
        height:px2rem(190);
      }

      .login-btn{
          @extend .absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          margin:auto;
          @extend .inline_block;
          border-radius: px2rem(6);
          width:px2rem(280);
          height:px2rem(80);
          line-height: px2rem(80);
          font-size:px2rem(28);
          color:$white;
          @extend .text_center;
          background:$color_0086d1;
      }
  }
  .myStar-wrap{
     @extend .mb10;
     @extend .bg_white;
     height:px2rem(110);
     a{
         float: left;
         color:$color_333333;
         font-size:px2rem(28);
         width:50%;
         display: table-cell;
         text-align: center;
          &  > p{
              line-height: px2rem(36);
          }
          & > i{
             width: 100%;
             @extend .block;

              height:px2rem(48);
              margin : px2rem(12) 0 0 0;
          }
     }
     .star{
        background: url("../../assets/images/icon/icon-star.png") no-repeat center;
        background-size : px2rem(37) auto;
     }
     .star.on{
       background: url("../../assets/images/icon/icon-star_on.png") no-repeat center;
     }
     .favorable{
       background: url("../../assets/images/icon/icon-favorable.png") no-repeat center;
       background-size : px2rem(38) auto;
     }
    .favorable.on{
      background: url("../../assets/images/icon/icon-favorable_on.png") no-repeat center;
    }
  }
  .myOrder-wrap{
      @extend .bg_white;
      @extend .mb10;
      & > section{
          @extend  .flex;
          height:px2rem(150);
          @extend .text_center;
          .item-wrap{
            padding: px2rem(22) 0 0 0;
            height: px2rem(72);
          }
          & > a{
              color:$color_333333;
              font-size: px2rem(26);
              span{
                  display: block;
                  @extend .relative;
              }
              & > p{
                  line-height: px2rem(50);
              }
          }
      }
       .tip{
          position: absolute;
          top:px2rem(-13);
          right:px2rem(-20);;
          height: px2rem(28);
          line-height:px2rem(28);
          color:$white;
          font-size:px2rem(22);
          background: $color_dc4637;
          padding:0 px2rem(10);
          border-radius: px2rem(8);
          @extend .none;
       }
      .payment{
          width: px2rem(68);
          height:px2rem(48);
          margin: px2rem(12) auto 0 auto;
          background: url("../../assets/images/icon/icon-payment.png") no-repeat;
          background-size:100% auto;
      }
      .orderdispose{
        width: px2rem(63);
        height:px2rem(56);
        margin: px2rem(6) auto 0 auto;
        background: url("../../assets/images/icon/icon-orderdispose.png") no-repeat center;
        background-size:100% auto;
      }
      .receiving{
        width: px2rem(69);
        height:px2rem(56);
        margin: px2rem(6) auto 0 auto;
        background: url("../../assets/images/icon/icon-receiving.png") no-repeat center;
        background-size:100% auto;
      }
  }
  .purchase-wrap{
    @extend .bg_white;
    @extend .mb10;
    & > div{
      @extend .relative;
      a{

        color:$color_333333;
      }
      h3{
        @extend .public_title;
      }
    }
  }
  .addSupplier-wrap{
    @extend .purchase-wrap;
  }
  .serve-wrap{
    @extend .bg_white;
    @extend .mb10;
    & > section{
        @extend .flex;
        a > div:after{
            content: "";
            @extend .absolute;
            width:1px;
            height:px2rem(88);
            overflow: hidden;
            background: $color_d9d9d9;
            top:50%;
            margin: px2rem(-44) 0 0 0;
            right:0;
        }
       a:last-child div:after{
          display: none;
       }
    }
    .serve-item{
      @extend .relative;
      margin: px2rem(35) 0 px2rem(30) 0;
      @extend .text_center;
      color:$color_333333;
      font-size:px2rem(26);
      i{
          @extend .block;
          height:px2rem(87);
      }
      p{
        height:px2rem(60);
        line-height: px2rem(60);
      }
      .icon-help{
          background:url("../../assets/images/icon/icon-help.png") no-repeat center;
          background-size:px2rem(53) auto;
      }
      .icon-service{
        background:url("../../assets/images/icon/icon-service.png") no-repeat center;
        background-size:px2rem(54) auto;
      }
      .icon-feedback{
         background:url("../../assets/images/icon/icon-feedback.png") no-repeat center;
         background-size:px2rem(60) auto;
       }
      .icon-about{
        background:url("../../assets/images/icon/icon-about.png") no-repeat center;
        background-size:px2rem(55) auto;
      }
    }
  }
  .padding-wrap{
    @extend .bg_white;
    padding:0 0 px2rem(300) 0;
  }
</style>
