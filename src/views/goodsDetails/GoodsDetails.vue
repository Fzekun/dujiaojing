<template>
  <div class="details-wrap">
    <swiper :options="swiperOption" class="swiper-box" ref="mySwiper">
      <swiper-slide :key="banner.id" class="swiper-slide" v-for="banner in banners">
        <img width="100%" height="100%" class="swiper-lazy" :data-src="banner.src">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <div class="pagination"  slot="pagination"></div>
    </swiper>
    <div class="info-wrap">
        <div class="info-box">
            <div class="info-text">
                <h3>渔鼎鲜 冷冻1388型环球海鲜大礼包 5kg 礼盒</h3>
                <p class="promotion"><span>促销：</span><span class="label">买搭</span><span>买100件搭10件</span></p>
                <span class="cutting-line"></span>
            </div>
            <div class="collect-box">
                <i class="icon-star"></i>
                <p>收藏</p>
            </div>
        </div>
        <div class="standard-box">
            <p class="rule"><span>12122.15kg/袋</span><span>起批量：100</span></p>
            <p>￥14145.00</p>
            <div class="add-wrap">
              <add-number ref="input" :number="1" v-on:compute="addTotal"></add-number>
              <!--<add-number ref="input"></add-number>-->
            </div>
        </div>
    </div>
    <div class="line"></div>
    <div class="shop-info">
        <header>
            <h3 >叶问冷冻食品有限公司XXXXXXXXX</h3>
            <i class="u-icon-arr"></i>
        </header>
        <div class="content-box">
            <p>
              品牌：<span>三全</span>
            </p>
            <p>
              俗称：<span>三全</span>
            </p>
            <p>
              配料表：<span>见包装</span>
            </p>
            <p>
              保存方式：<span>零下18度以下冷冻保存</span>
            </p>
            <p>
              生产日期：<span>见包装</span>
            </p>
            <p>
              商品详情：<span>果然爱水果汤圆是郑州三全食品股份有限公司在行业
                 内首推水果口味的系列汤圆。</span>
            </p>
        </div>
    </div>
    <div class="footer">
        <div class="icon-order">
            <span>12</span>
        </div>
        <div class="btn-wrap float_right">
          <a href="" class="btn-purchasing">去采购单</a>
          <a href="" class="btn-buy">立即购买</a>
        </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import AddNumber from '../../components/pubilc/AddNumber.vue'
//import CommonFooter from '../../components/Footer.vue'
//import { Scroller } from 'vux'
//import {mapGetters} from 'vuex'
//import store from '../../vuex/store'
export default {
    data () {
        return {
          orderTotal : 0,
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
                    },
            ],
            banners: [
              {
                 src : '../../static/images/details.jpg'
              },
              {
                src : '../../static/images/details.jpg'
              },
              {
                src : '../../static/images/details.jpg'
              }
            ],
            swiperOption: {
                swiperSlides: 0,
                //autoplay: 5000,
                //loop : true,
                autoplayDisableOnInteraction: true,
                //notNextTick: true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,
                lazyLoading : true,
                pagination: '.pagination',//分页容器的css选择器
                paginationType : 'custom',
                paginationCustomRender: function (swiper, current, total) {
                    var _html = '';
                        _html += '<div class="">';
                    for (var i = 1; i <= total; i++) {
                        if (current == i) {
                            _html += '<span class="active"></span>';
                        }else{
                            _html += '<span></span>';
                        }
                    }
                    _html += '</div>';
                    return _html;//返回所有的页码html
                }
            }
        }
    },
    mounted : function(){
    },
    computed : {
        swiper () {
            return this.$refs.mySwiper.swiper
        }
    },
    components: {
        swiper,
        swiperSlide,
        AddNumber
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
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
@import '../../assets/scss/common.scss';
body{
  background: none;
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
.details-wrap{
    font-size: px2rem(26);
}
.line{
    height: px2rem(10);
    background: $color_efeff4;
}
.swiper-box{
  width: 100%;
  height:px2rem(712);
  .swiper-slide{
    background: $black;
    img{
      height:100%;
      width:auto;
    }
  }
}
.pagination{
    @extend .absolute;
    @extend .text_center;
    z-index: 999;
    height:px2rem(36);
    & > div{
        @extend .inline_block;
    }
    span{
        width:px2rem(29);
        height:px2rem(6);
        background:rgba(255,255,255,.55);
        float:left;
        margin:0 px2rem(14) 0 0;
        border-radius:px2rem(2);
        //background-color:$color_c7effb;
    }
    span.active{
        background-color:$white;
    }
}
.shop-info{
  header{
    height: px2rem(80);
    font-size: px2rem(28);
    @extend .relative;
    padding: 0 px2rem(30) 0 px2rem(82);
    background:url("../../assets/images/icon/icon-order_shop.png") no-repeat px2rem(30) center;
    background-size: px2rem(31) auto;
    line-height: px2rem(80);
    border-bottom: 1px solid $color_efeff4;

    h3{
      width: px2rem(500);
      @include overflow_omit;
    }
  }
  .content-box{
    padding:px2rem(26) 0 px2rem(46) px2rem(30);
    p{
      line-height: px2rem(40);
      font-size: px2rem(24);
      color:$color_666666;
      span{
        @extend .inline_block;
        vertical-align: top;
        width: px2rem(546);
      }
    }
  }
}
.info-wrap{
    padding:px2rem(16) 0 0 px2rem(30);
    @extend .relative;
    .standard-box{
        @extend .relative;
        .add-wrap{
            @extend .absolute;
            right: px2rem(30);
            top:px2rem(38);
        }
        .rule{
            span{
                @extend .inline_block;
                width: px2rem(270);
                font-size: px2rem(26);
                color:$color_666666;
            }
        }
        padding:px2rem(14) 0 px2rem(14) 0;
        line-height: px2rem(46);
    }
    .info-box{

        padding:0 0 px2rem(30) 0;
        border-bottom: 1px solid $color_efeff4;
        .collect-box{
            width: px2rem(130);
            position: absolute;
            top:px2rem(16);
            right:px2rem(4);
            overflow: hidden;
            @extend .text_center;
            .icon-star{
                @extend .block;
                height: px2rem(44);
                width: 100%;
                background: url("../../assets/images/icon/icon-star.png") no-repeat center bottom;
                background-size:px2rem(37) auto;
            }
            p{
                line-height: px2rem(56);
            }
        }
        .info-text{
            @extend .relative;
            width: px2rem(584);
            .cutting-line{
                @extend .absolute;
                top:0;
                right:0;
                width: 1px;
                height: px2rem(84);
                background: $color_d9d9d9;
            }
            h3{
                line-height: px2rem(50);
                font-size: px2rem(28);
            }
            .promotion{
                font-size: 0;
                line-height: px2rem(48);
                height: px2rem(46);
                span{
                    font-size: px2rem(26);
                }
                .label{
                    margin: 0 0 0 0;
                    @extend .inline_block;
                    padding:0 px2rem(18);
                    height: px2rem(36);
                    background: $color_dc4637;
                    font-size: px2rem(24);
                    line-height: px2rem(36);
                    color:$white;
                    vertical-align: top;
                    border-radius: px2rem(15);
                    margin:px2rem(5) px2rem(16) 0 0;
                  }
            }
        }
    }

}
.footer{
    border-top: 1px solid $color_efeff4;
    @extend .relative;
    .icon-order{
        @extend .absolute;
        top:px2rem(38);
        left: px2rem(52);
        width: px2rem(34);
        height: px2rem(37);
        background:url("../../assets/images/icon/icon-purchase.png") no-repeat;
        background-size: px2rem(34) auto;
        span{
            @extend .absolute;
            padding:0 px2rem(6);
            height: px2rem(25);
            line-height: px2rem(25);
            font-size: px2rem(20);
            top:px2rem(-12);
            right:px2rem(-20);
            background: $color_e94738;
            border-radius: px2rem(8);
            color:$white;
        }
    }
    .btn-wrap{
        font-size: 0;
        a{
            @extend .inline_block;
            width: px2rem(180);
            height: px2rem(100);
            font-size: px2rem(32);
            @extend .text_center;
            color:$white;
            line-height: px2rem(100);
        }
        .btn-purchasing{
            background: $color_f39800;
        }
        .btn-buy{
            background: $color_0086d1;
        }
    }
}
</style>
