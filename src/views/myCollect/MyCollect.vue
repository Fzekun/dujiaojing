<template>
  <div class="module-wrap">
    <div class="myCollect">
        <nav class="nav-tab">
          <v-touch :key="nav.id" tag="a" class="flex_item" :class="{active : active == index}" v-for="(nav,index) in navs" v-on:tap="changeTab(nav,index)">{{ nav.text }}</v-touch>
        </nav>
        <components :datas="datas" :is="currentView">
        </components>
        <!--<common-footer footerIndex="4"></common-footer>-->
    </div>
  </div>
</template>

<script>
import Commodity from '../../components/myCollect/Commodity.vue'
import Shop from '../../components/myCollect/Shop.vue'

export default {
    data () {
        return {
          active : 0,
          currentView : 'Commodity',
          navs : [{
              text : '商品',
              view : 'Commodity'
          },{
              text : '店铺',
              view : 'Shop'
          }],
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
    computed : {
    },
    name: 'my',
    components: {
      Commodity,
      Shop
//        'common-footer': CommonFooter
    },
    methods : {
      changeTab(item,index){
          this.currentView = item.view;
          this.active = index;
      }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
@import '../../assets/scss/common.scss';
  body{
      background: none;
  }
.tel{
  color:$color_0086d1;
  text-decoration: underline;
}
.u-icon-arr
{
  position: absolute;
  bottom: px2rem(44);
  right: px2rem(36);
  width: px2rem(17);
  height: px2rem(17);
  border-style: solid;
  border-width: px2rem(3) px2rem(3) 0 0;
  border-color: $color_9a9899;
  -webkit-transform-origin: center center;
  -webkit-transform: rotateZ(45deg);
}
.module-wrap{
    font-size: px2rem(26);
}
.gray_color{
  color:$color_999999;
}
.red_color{
  color:$color_e94738;
}
.nav-tab{
  @extend .flex;
  height: px2rem(80);
  background: $white;
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
/*.list-wrap{*/
  /*padding:0 0 0 px2rem(30);*/
/*}*/

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
    .img-wrap{
      width: px2rem(150);
      height: px2rem(150);
      margin : px2rem(40) px2rem(19) 0 0;
      border:1px solid $color_d9d9d9;
      @extend .relative;
      img{
        width: 100%;
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
.shop-list{
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
    .img-wrap{
      width: px2rem(124);
      height: px2rem(124);
      margin : px2rem(40) px2rem(19) 0 0;
      border:1px solid $color_d9d9d9;
      @extend .relative;
      img{
        width: 100%;
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
      .phone_text{
        margin:px2rem(5) 0;
      }
      .call{
        @extend .inline_block;
        padding:0 px2rem(22);
        line-height: px2rem(44);
        font-size: px2rem(24);
        color:$white;
        background: $color_0086d1;
        border-radius: px2rem(15);
        margin: 0 0 0 px2rem(20);
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
/*li{
  padding: 0 px2rem(30) px2rem(22) 0;
  overflow: hidden;
  @extend .relative;
  .phone_text{
    line-height: px2rem(50);
    margin:px2rem(10) 0;
  }
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
  .img-wrap{
    width: px2rem(124);
    height: px2rem(124);
    margin : px2rem(40) px2rem(19) 0 0;
    border:1px solid $color_d9d9d9;
    @extend .relative;
    img{
      width: 100%;
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
}*/

</style>
