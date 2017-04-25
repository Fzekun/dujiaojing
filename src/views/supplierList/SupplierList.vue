<template>
  <div>
    <div class="recommend-wrap">
      <!--<mt-loadmore-->
                  <!--:bottom-distance="50"-->
                  <!--@bottom-status-change="handleBottomChange"-->
                  <!--ref="loadmore"-->
                  <!--:bottom-method="loadBottom"-->
                  <!--:bottom-all-loaded="allLoaded"-->
      <!--&gt;-->
         <div class="recommend-list">
             <ul>
               <li v-for="item in items">
                    <div class="content flex">
                        <div class="img-wrap">
                          <a href="">
                            <img src="../../assets/images/commodity.jpg" alt="">
                          </a>
                          <!--<i class="icon-supplier icon-tag">厂</i>-->
                        </div>
                        <div class="text-wrap flex_item">
                            <div class="text-box">
                              <h3>叶问冷冻食品有限公司XXXXXXXX123</h3>
                              <p>电话：<a class="tel" href="tel:13984988980">13984988980</a><a href="tel:13718163284" class="call">拨打</a></p>
                              <p>联系人：张三</p>
                              <p class="delivery-price"><span>起</span>¥200.00</p>
                            </div>
                            <div class="buy_throw-wrap">
                                  <i class="icon-t-arr"></i>
                                  <div class="buy_throw-box">
                                    <header class="header">
                                      <span class="label">买搭</span>
                                      <span>部分商品买100件搭赠10件</span>
                                    </header>
                                    <div class="buy_throw-list">
                                      <ul>
                                        <li>
                                          <a href="">
                                            <img src="../../assets/images/classify-good.png" alt="">
                                            <p>￥200.00</p>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="">
                                            <img src="../../assets/images/classify-good.png" alt="">
                                            <p>￥200.00</p>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="">
                                            <img src="../../assets/images/classify-good.png" alt="">
                                            <p>￥200.00</p>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="">
                                            <img src="../../assets/images/classify-good.png" alt="">
                                            <p>￥200.00</p>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div class="line_10"></div>
               </li>
             </ul>
         </div>
        <!--<div slot="bottom" class="loadmore-bottom">-->
          <!--&lt;!&ndash;<span>{{ bottomStatus }}</span>&ndash;&gt;-->
          <!--<p class="loading-text" v-show="bottomStatus !== 'loading'">{{statusText}}</p>-->
          <!--<p class="bottom-loading" v-show="bottomStatus === 'loading'" :class="{ loading : bottomStatus === 'loading' }"></p>-->
        <!--</div>-->
        <!--</mt-loadmore>-->
    </div>
    <!--推荐 end -->
  </div>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import CommonFooter from '../../components/Footer.vue'
//import { Scroller } from 'vux'
//import {mapGetters} from 'vuex'
//import store from '../../vuex/store'
export default {
    data () {
        return {
            allLoaded : false,
            bottomStatus : 'pull',
            statusText : '上拉加载更多',
            items : [
              {
                  name : '兴客坊小小玉汤圆',
                  price : '92.00',
                  text : '小汤圆'
              },
              {
                name : '兴客坊小小玉汤圆',
                price : '92.00',
                text : '小汤圆'
              },
            ]
        }
    },
    mounted : function(){

    },
    computed : {

    },

    components: {

    },
    methods : {
      loadBottom(id){
        this.statusText = 'loading...';
        this.bottomStatus = 'loading';
        setTimeout(()=>{
          this.items.push({
            name: 1,
            price: 1,
            text: 1
          })
          this.bottomStatus = 'pull';
          this.$refs.loadmore.onBottomLoaded(id);
        },500)
      },
      handleBottomChange(status){
          if( status == 'drop' ){
             this.statusText = '释放刷新';
          }
          if( status == 'pull' ){
            this.statusText = '上拉加载更多';
          }
      }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
@import '../../assets/scss/common.scss';
@import "../../assets/scss/iscroll.scss";
$radius : px2rem(25);
body{
  background: none;
}
.line{
    height: px2rem(20);
    background: $color_efeff4;
}
.line_10{
  height: px2rem(10);
  background: $color_efeff4;
}
.tel{
    color:$color_0086d1;
    text-decoration: underline;
}
/* 常用采购 为您推荐 头部通用样式 */
.loadmore-bottom{
    width: 100%;
    @extend .text_center;
}
.loading-text{
  font-size: px2rem(26);
  line-height: px2rem(48);
}
.bottom-loading{
    width: 100%;
    height: px2rem(124);
}
.bottom-loading.loading{
    background: url("../../assets/images/icon/loading_gray.gif") no-repeat center;
    background-size: px2rem(128) auto;
}
/*常用采购*/
.like-wrap{
    background: $white;
    .scroll{
        height:px2rem(264);
        overflow: hidden;
        ul{
          height: px2rem(254);
          padding:px2rem(20) px2rem(20) 0 px2rem(20);
          overflow-x: auto;
          white-space: nowrap;
          font-size: 0;
          -webkit-overflow-scrolling: touch;
        }
        li:last-child{
          margin:0;
        }
        li{
           @extend .inline_block;
           margin:0 px2rem(46) 0 0;
           width:px2rem(160);
           .img-wrap{
             width:px2rem(160);
             height:px2rem(160);
             overflow: hidden;
             margin:0 0 px2rem(8) 0;

           }
           img{
             width: 100%;
           }
           p{
             width:px2rem(160);
             font-size:px2rem(26);
             line-height: px2rem(32);
             color: $color_333333;
             @include overflow_omit;
           }
           span{
             font-size:px2rem(24);
             line-height: px2rem(30);
             color:$color_e94738;
           }
        }
    }
}

/*广告位*/
.layout-wrap{
    width:100%;
    height:px2rem(150);
    overflow: hidden;
    /*margin:px2rem(20) 0;*/
    img{
       width:100%;
    }
}
/*为您推荐*/
.recommend-wrap{
  padding:0 0 px2rem(170) 0;
  .recommend-list{
      /*background:$color_efeff4;*/
      /*padding: px2rem(2) 0 0 0;*/
      ul{
         overflow: hidden;
      }
      li{
          .content{
            padding: px2rem(33) 0 0 px2rem(30);
            overflow: hidden;
            .img-wrap{
                width: px2rem(150);
                height: px2rem(150);
                border: 1px solid $color_d9d9d9;
                margin: px2rem(7) px2rem(20) 0 0;
                overflow: hidden;
                @extend .relative;
                .icon-tag{
                  position: absolute;
                  top:0;
                  left:0;
                  width: px2rem(37);
                  height: px2rem(44);
                  font-size: px2rem(28);
                  line-height: px2rem(36);
                  @extend .text_center;
                  color:$white;
                }
                .icon-factory{
                  background: url("../../assets/images/icon/icon-factory.png") no-repeat;
                  background-size: 100% auto;
                }
                .icon-supplier{
                  background: url("../../assets/images/icon/icon-supplier.png") no-repeat;
                  background-size: 100% auto;
                }
                img{
                    width: 100%;
                }
            }
            .text-wrap{
                .text-box{
                  @extend .relative;
                  line-height: px2rem(44);
                  height: px2rem(160);
                }
                h3{
                    font-size: px2rem(26);
                    width: px2rem(430);
                    @include overflow_omit;
                }
                .delivery-price{
                    line-height: px2rem(30);
                    /*position: absolute;*/
                    /*bottom: 0;*/
                    /*left: 0;*/
                    color:$color_e94738;
                    font-size: px2rem(26);
                    line-height: px2rem(30);
                    span{
                        @extend .inline_block;
                        vertical-align: top;
                        width:px2rem(30);
                        height: px2rem(30);
                        background: $color_e99314;
                        font-size: px2rem(22);
                        color:$white;
                        @extend .text_center;
                        /*line-height: px2rem(30);*/
                        border-radius: px2rem(5);
                        margin:0 px2rem(12) 0 0;
                    }
                }
                .buy_throw-wrap{
                  @extend .relative;
                  min-height: px2rem(60);
                  margin:px2rem(40) 0 px2rem(22) 0;
                  overflow: hidden;
                  border-top: 1px solid $color_efeff4;
                }
                .buy_throw-box{
                    .buy_throw-list{
                        ul{
                          height: px2rem(180);
                          white-space: nowrap;
                          font-size: 0;
                          -webkit-overflow-scrolling: touch;
                          li{
                            width: px2rem(118);
                            height: px2rem(118);
                            display: inline-block;
                            border:1px solid $color_efeff4;
                            margin: 0 px2rem(14) 0 0;
                            a{
                                color:$color_e94738;
                            }
                            p{
                              line-height: px2rem(58);
                              font-size: px2rem(26);
                            }
                            img{
                              width: 100%;
                            }
                          }
                        }
                    }
                    .header{
                        font-size: 0;
                        .label{
                            @extend .inline_block;
                            padding:0 px2rem(18);
                            height: px2rem(36);
                            background: $color_dc4637;
                            font-size: px2rem(24);
                            line-height: px2rem(36);
                            color:$white;
                            border-radius: px2rem(15);
                            margin:0 px2rem(12) 0 0;
                        }
                        span{
                            font-size: px2rem(24);
                        }
                        @extend .relative;

                        padding: px2rem(22) 0 px2rem(38) 0;

                    }
                }
            }
          }
      }
  }
}
.icon-t-arr {
  @extend .absolute;
  right: px2rem(30);
  top: px2rem(22);
  width: px2rem(27);
  height: px2rem(15);
  background: url("../../assets/images/icon/icon-top_arr.png") no-repeat;
  background-size: px2rem(27) auto;
}
.icon-t-arr.on{
  background: url("../../assets/images/icon/icon-b-arr.png") no-repeat;
  background-size: px2rem(27) auto;
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
</style>
