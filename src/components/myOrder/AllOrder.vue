<template>
    <div class="all-order">
      <mt-loadmore :auto-fill="true" :bottom-distance="50"
                   @bottom-status-change="handleBottomChange"
                   ref="loadmore"  :bottom-method="loadBottom"
                   :bottom-all-loaded="allLoaded"
      >
        <ul class="order-list">
            <li>
                <header class="order-header">
                    <i class="busine-type factory float_left">厂</i>
                    <a href="" class="busina-name float_left">
                      <p>叶问冷冻食品有限公司XX叶问冷冻食品有限公司XXXXXXXXXXXXXXXX</p>
                    </a>
                    <span class="order-status float_right">已收货</span>
                </header>
                <div class="order-cotent">
                    <div class="wrap">
                        <div class="order-image-text">
                          <a href="">
                            <div class="img-wrap float_left">
                              <img src="../../assets/images/order-commodity.jpg" alt="">
                              <i class="commodity-number">×1</i>
                            </div>
                            <p class="text float_left">盐津铺子蒸鱼丸 鱼丸子即食鱼制口180g 烧烤味道</p>
                          </a>
                        </div>
                        <div class=""></div>
                    </div>
                </div>
                <footer class="order-footer">
                    <p class="float_left">
                      订单金额：
                      <span>￥14145.00</span>
                    </p>
                    <p class="float_right receiving">
                        <a href="">删除</a>
                        <a href="">再来一单</a>
                    </p>
                </footer>
            </li>
            <li>
              <header class="order-header">
                <i class="busine-type factory float_left">厂</i>
                <a href="" class="busina-name float_left">
                  <p>叶问冷冻食品有限公司XX叶问冷冻食品有限公司XXXXXXXXXXXXXXXX</p>
                </a>
                <span class="order-status stay-pay float_right">已收货</span>
              </header>
              <div class="order-cotent">
                <div class="wrap">
                    <div class="order-image">
                        <div class="img-wrap">
                          <a href="">
                            <img src="../../assets/images/order-commodity.jpg" alt="">
                          </a>
                          <i class="commodity-number">×1</i>
                        </div>
                        <div class="img-wrap">
                          <a href="">
                            <img src="../../assets/images/order-commodity.jpg" alt="">
                          </a>
                          <i class="commodity-number">×1</i>
                        </div>
                        <div class="img-wrap">
                          <a href="">
                            <img src="../../assets/images/order-commodity.jpg" alt="">
                          </a>
                          <i class="commodity-number">×1</i>
                        </div>
                        <div class="img-wrap">
                          <a href="">
                            <img src="../../assets/images/order-commodity.jpg" alt="">
                          </a>
                          <i class="commodity-number">×1</i>
                        </div>
                        <div class="img-wrap">
                          <a href="">
                            <img src="../../assets/images/order-commodity.jpg" alt="">
                          </a>
                          <i class="commodity-number">×1</i>
                        </div>
                        <div class="img-wrap">
                          <a href="">
                            <img src="../../assets/images/order-commodity.jpg" alt="">
                          </a>
                          <i class="commodity-number">×1</i>
                        </div>
                    </div>
                </div>
              </div>
              <footer class="order-footer">
                <p class="float_left">
                  订单金额：
                  <span>￥14145.00</span>
                </p>
                <p class="float_right stay-pay-btn">
                  <a href="">删除</a>
                  <a href="">去支付</a>
                </p>
              </footer>
            </li>
          <li>
            <header class="order-header">
              <i class="busine-type factory float_left">厂</i>
              <a href="" class="busina-name float_left">
                <p>叶问冷冻食品有限公司XX叶问冷冻食品有限公司XXXXXXXXXXXXXXXX</p>
              </a>
              <span class="order-status deal float_right">订单处理中</span>
            </header>
            <div class="order-cotent">
              <div class="wrap">
                <div class="order-image">
                  <div class="img-wrap" v-for="n in 10">
                    <a href="">
                      <img src="../../assets/images/order-commodity.jpg" alt="">
                    </a>
                    <i class="commodity-number">×1</i>
                  </div>
                </div>
              </div>
            </div>
            <footer class="order-footer">
              <p class="float_left">
                订单金额：
                <span>￥14145.00</span>
              </p>
              <p class="float_right stay-deliver-btn">
                <a href="">再来一单</a>
              </p>
            </footer>
          </li>
          <li>
            <header class="order-header">
              <i class="busine-type factory float_left">厂</i>
              <a href="" class="busina-name float_left">
                <p>叶问冷冻食品有限公司XX叶问冷冻食品有限公司XXXXXXXXXXXXXXXX</p>
              </a>
              <span class="order-status stay-pay float_right">已收货</span>
            </header>
            <div class="order-cotent">
              <div class="wrap">
                <div class="order-image">
                  <div class="img-wrap" v-for="n in 10">
                    <a href="">
                      <img src="../../assets/images/order-commodity.jpg" alt="">
                    </a>
                    <i class="commodity-number">×1</i>
                  </div>
                </div>
              </div>
            </div>
            <footer class="order-footer">
              <p class="float_left">
                订单金额：
                <span>￥14145.00</span>
              </p>
              <p class="float_right take-delivery-btn">
                <a href="">再来一单</a>
                <a href="">待收货</a>
              </p>
            </footer>
          </li>
        </ul>
        <div slot="bottom" class="loadmore-bottom">
          <!--<span>{{ bottomStatus }}</span>-->
          <p class="loading-text" v-show="bottomStatus !== 'loading'">{{statusText}}</p>
          <p class="bottom-loading" v-show="bottomStatus === 'loading'" :class="{ loading : bottomStatus === 'loading' }"></p>
        </div>
      </mt-loadmore>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default{
        data(){
            return {
              allLoaded : false,
              bottomStatus : 'pull',
              statusText : '上拉加载更多',
            }
        },
        components : {
        },
        mounted(){

        },
        methods : {
          ...mapActions([
              'showConfirm'
          ]),
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
            },2000)
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

  @import "../../assets/scss/common";
  /* 下拉loading */
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
    background: url("../../assets/images/icon/loading_white.gif") no-repeat center;
    background-size: px2rem(128) auto;
  }
  /* 下拉loading */
    .all-order{
       position: absolute;
        top:px2rem(98);
      left:0;
      right: 0;
      bottom: 0;
    }
    .order-list{
        li{
          /*margin: 0 0 px2rem(10) 0;*/
          overflow: hidden;
        }
        li:after{
          content:'';
          display: block;
          height: px2rem(10);
          background: $color_efeff4;
        }
        li:last-child:after{
            @extend .none;
        }
        font-size: px2rem(26);
    }
    .order-header{
      height:px2rem(77);
      border-top:1px solid $color_efeff4;
      background: $color_fafafa;

      line-height: px2rem(77);

      .busine-type{
        width: px2rem(37);
        height: px2rem(44);
        margin:px2rem(16) px2rem(15) 0 px2rem(30);
        font-size: px2rem(28);
        color: $white;
        line-height: px2rem(36);
        @extend .text_center;
      }
      .supplier{
        background: url("../../assets/images/icon/icon-supplier.png") no-repeat;
        background-size:100% auto;
      }
      .factory{
        background: url("../../assets/images/icon/icon-factory.png") no-repeat;
        background-size:100% auto;
      }
      .busina-name{
        color:$color_333333;
        width: px2rem(480);
        position: relative;
        p{
          width: px2rem(460);
          @include overflow_omit;
        }
      }
      .busina-name:after{
        content: "";
        position: absolute;
        top: px2rem(30);
        right: 0;
        width: px2rem(17);
        height: px2rem(17);
        border-style: solid;
        border-width: px2rem(3) px2rem(3) 0 0;
        border-color: $color_9a9899;
        -webkit-transform-origin: center center;
        -webkit-transform: rotateZ(45deg);
      }
      .order-status{
          margin: 0 px2rem(30) 0 0;
      }
    }
    .order-cotent{
        .wrap{
           padding: 0 0 0 px2rem(30);
          .order-image{
              overflow: hidden;
              padding: px2rem(30) px2rem(8) px2rem(10) 0;
              border-bottom: 1px solid $color_efeff4;
              overflow-x: auto;
              white-space: nowrap;
              font-size: 0;
              -webkit-overflow-scrolling: touch;
              .img-wrap{
                  margin: 0  px2rem(22) px2rem(10) 0;
                  display: inline-block;
              }
          }
          .order-image-text{
              overflow: hidden;
              padding: px2rem(30) 0;
              border-bottom: 1px solid $color_efeff4;
              a{
                  color:$color_333333;
              }
              .text{
                  padding: 0 0 0 0;
                  width: px2rem(502);
                  @include overflow_omit;
                  line-height: px2rem(96);
              }
          }
          .img-wrap{
            width: px2rem(118);
            height: px2rem(118);
            border:1px solid $color_d9d9d9;
            position: relative;
            margin: 0 px2rem(20) 0 0;
            img{
              width: 100%;
            }
            .commodity-number{
                @extend .absolute;
                bottom:0;
                right:0;
                padding:0 px2rem(5);
                color:$white;
                height: px2rem(40);
                background: rgba(0,0,0,.36);
                @extend .text_center;
                line-height: px2rem(40);
                font-size: px2rem(24);
            }
          }
        }

    }
    .order-footer{
        padding: 0 px2rem(30);
        line-height:px2rem(80);
        overflow: hidden;
        p:last-child{
            padding: px2rem(15) 0 0 0;
        }
        a{
            float: left;
            padding: 0 px2rem(25);
            height: px2rem(50);
            line-height: px2rem(50);
            border:1px solid $color_d9d9d9;
            border-radius: px2rem(6);
            color:$color_333333;
        }
        .receiving{
            a:first-child{
                margin: 0 px2rem(20) 0 0;
            }
            a:last-child{
                border-color:$color_0086d1;
                color:$color_0086d1;
            }
        }
        .stay-pay-btn{
            a:first-child{
              margin: 0 px2rem(20) 0 0;
            }
            a:last-child{
              border-color:$color_dc4637;
              color:$color_dc4637;
            }
        }
        .stay-deliver-btn{
            a{
              border-color:$color_0086d1;
              color:$color_0086d1;
            }
        }
        .take-delivery-btn{
            a:first-child{
              border-color:$color_0086d1;
              color:$color_0086d1;
              margin: 0 px2rem(20) 0 0;
            }
            a:last-child{
              border-color:$color_0086d1;
              color:$white;
              background:$color_0086d1;
            }
        }
    }
    .stay-pay{
        color:$color_dc4637;
    }
    .deal{
      color:$color_0086d1;
    }


</style>
