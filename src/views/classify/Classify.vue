<template>
  <div class="classify-box">
    <div class="menu">
        <div class="menu-wrap">
          <view-box body-padding-bottom="0">
            <ul class="menu-list">
              <li>
                <a href="javascript:;" class="title">全部</a>
              </li>
              <li class="active">
                <a href="javascript:;" class="title">冷鲜水产</a>
                <ul>
                  <li class="active">虾类</li>
                  <li>蟹类</li>
                  <li>蛙类</li>
                  <li>其他</li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" class="title">冷冻肉类</a>
              </li>
              <li>
                <a href="javascript:;" class="title">速冻调理</a>
              </li>
              <li v-for="n in 20">
                <a href="javascript:;" class="title">鲜肉熟食</a>
              </li>
            </ul>
          </view-box>
        </div>
    </div>
    <div class="commodity-box">
        <div class="search-wrap">
            <div class="search-box flex">
                <label class="search-icon" for=""></label>
                <input type="text" placeholder="请输入品牌/名称" class="search-input flex_item">
            </div>
        </div>
        <div class="commodity-wrap">
            <div>
                <ul class="commodity-list">
                  <li v-for="data in datas">
                      <a href="">
                          <div class="img-wrap float_left">
                            <img src="../../assets/images/classify-good.png" alt="">
                            <p class="repertory">库存不足</p>
                          </div>
                          <div class="text-wrap float_left">
                            <h3>{{ data.name }}</h3>
                            <p class="gray_color">规格：{{ data.dimension }}</p>
                            <p class="gray_color delivery-price"><i class="float_left icon-psf">起</i>{{ data.deliveryPrice }}</p>
                            <p class="price red_color">{{ data.price }}</p>
                          </div>
                        </a>
                        <div class="collect-wrap">
                            <i v-if="data.collect == false" class="icon-star"></i>
                            <i v-else class="icon-star active"></i>
                        </div>

                        <div class="add-wrap">
                            <add-number :restriction="data.restriction" ref="input" :number="data.input" v-on:compute="addTotal"></add-number>
                        </div>
                  </li>
                </ul>
            </div>
        </div>
    </div>
    <toast v-model="toast" @on-hide="hideToast" type="text" width="4.8rem"  position="middle" :time="1000">
        <div class="toast-content">
            <div class="toast-bj"></div>
            <p>最多购买{{ restriction }}件</p>
        </div>
    </toast>
    <alert :show-title="false" v-model="show" button-text="联系客服">
        <div class="audit-box">
          <i class="close"></i>
          <i class="icon-audit"></i>
          <h3 class="red_color">您的账号正在审核中…</h3>
          <p class="alert-text">快速审核可联系客服或供应商获取邀请码！</p>
        </div>
    </alert>
    <common-footer footerIndex="1"></common-footer>
  </div>
</template>

<script>
import CommonFooter from '../../components/Footer.vue'
import { ViewBox,Toast, Alert } from 'vux'
import AddNumber from '../../components/pubilc/AddNumber.vue'
import {mapGetters} from 'vuex'
export default {
    data () {
        return {
            show : true,
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
             }
            ]
        }
    },
    mounted : function(){

    },
    computed : {
      ...mapGetters({
        toast : 'toast',
        restriction : 'restriction'
      })
    },

    components: {
        CommonFooter,
        ViewBox,
        AddNumber,
        Toast,
        Alert
    },
    methods : {
      addTotal(){
        var input = this.$refs.input;
        this.orderTotal = 0;
        input.forEach((item)=>{
          this.orderTotal += parseInt(item.value,10);
        });
        this.$store.dispatch( 'computeOrderTotal', this.orderTotal );
      },
      hideToast(){
         this.$store.dispatch('hideToast');
      }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
@import '../../assets/scss/common.scss';
  body{
      background: $white;
  }
.audit-box{
    @extend .relative;
    padding:0 0 px2rem(42) 0;
    .icon-audit{
        @extend .block;
        height: px2rem(176);
        width: 100%;
        background: url("../../assets/images/icon/icon-audit.png") no-repeat center px2rem(49);
        background-size: px2rem(92) auto;
    }
    h3{
        font-weight: bold;
        line-height: px2rem(60);
        font-size: px2rem(32);
    }
    p{
        line-height: px2rem(55);
        font-size: px2rem(26);
    }
    .close{
        @extend .absolute;
        width: px2rem(25);
        height: px2rem(25);
        right:0;
        top:px2rem(22);
        background: url("../../assets/images/icon/icon-close.png") no-repeat;
        background-size: 100% auto;
    }
}
.toast-content{
   width: px2rem(360);
   height: px2rem(202);
  .toast-bj{
    height: px2rem(110);
    background: url("../../assets/images/icon/icon-plaint_white.png") no-repeat center bottom;
    background-size: px2rem(83) auto;
  }
  p{
      line-height: px2rem(84);
  }
}
  .gray_color{
    color:$color_999999;
  }
  .red_color{
      color:$color_e94738;
  }
  .classify-box{
    font-size: px2rem(26);
  }
  .menu{
      /*background: $color_efeff4;*/
      .menu-wrap{
        background: $color_efeff4;
        height: 100%;
      }
      width: px2rem(195);
      border-right:1px solid $color_efeff4;
      position: absolute;
      left:0;
      bottom: px2rem(108);
      top:0;
      .menu-list > li.active{
        border:0;
      }
      .menu-list > li.active a{
        background: url("../../assets/images/icon/icon-classify_active.png") no-repeat px2rem(30) center;
        background-size: px2rem(5) auto;
        color:$color_0086d1;
      }
      .menu-list > li:last-child{
        border:0;
      }
      .menu-list > li{
          border-bottom: 1px solid $color_d9d9d9;
          & > a{
              height: px2rem(80);
              line-height: px2rem(80);
              color:$color_333333;
              padding: 0 0 0 px2rem(44);
          }
          & > ul{
              li{
                  line-height: px2rem(78);
                  border-bottom: 1px solid $color_efeff4;
                  background: $white;
                  padding: 0 0 0 px2rem(44);
                }
              li.active{
                  color:$color_0086d1;
              }
              li:last-child{
                border:0;
              }
          }
      }
  }
  .commodity-box{
      padding:0 0 0 px2rem(196);
      .add-wrap{
        @extend .absolute;
        right:px2rem(30);
        top:px2rem(130);
        width: 100%;
      }
      .search-wrap{
          padding:px2rem(18) px2rem(54) px2rem(18) px2rem(60);
          border-bottom: 1px solid $color_efeff4;
          .search-box{
              border:1px solid $color_d9d9d9;
              border-radius: px2rem(6);
              height: px2rem(59);
              .search-icon{
                  width: px2rem(118);
                  height: 100%;
                  background: url("../../assets/images/icon/icon-classify_search.png") no-repeat px2rem(30) center;
                  background-size: px2rem(30) auto;
              }
              .search-input{
                line-height: 1.4em;
              }
          }
      }
      .commodity-wrap{
          padding: 0 0 0 px2rem(18);
      }
      .commodity-list{
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
              .icon-star{
                  @extend .block;
                width: px2rem(29);
                height: px2rem(29);
                background: url("../../assets/images/icon/icon-classify_star.png") no-repeat;
                background-size: 100% auto;
              }
              .icon-star.active{
                background: url("../../assets/images/icon/icon-classify_star_on.png") no-repeat;
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
                .repertory{
                    @extend .absolute;
                    bottom:0;
                    left:0;
                    width: 100%;
                    height: px2rem(42);
                    line-height: px2rem(42);
                    color:$white;
                    @extend .text_center;
                    font-size:px2rem(24);
                    background: rgba(0,0,0,.46);
                }
            }
            .text-wrap{
                margin: px2rem(30) 0 0 0;
                width: px2rem(252);

                h3{
                    line-height: px2rem(42);
                    @include overflow_omit;
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
  }
</style>
