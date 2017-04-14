<template>
  <footer class="footer">
        <a href="index.html">
            <p class="icon-wrap">
              <i class="home icon-home">
              </i>
            </p>
            <p>首页</p>
        </a>
        <a href="classify.html">
          <p class="icon-wrap">
            <i class="classify">
            </i>
          </p>
          <p>分类</p>
        </a>
        <a href="findGoods.html">
            <i class="discover"></i>
            <p class="discover-text">发现好货</p>
        </a>
        <a href="purchaseOrder.html">
          <p class="icon-wrap">
            <i class="purchase">
                <span v-show="showTotal">{{ total }}</span>
            </i>
          </p>
          <p>采购单</p>
        </a>
        <a href="my.html">
          <p class="icon-wrap">
            <i class="my">
            </i>
          </p>
          <p>我的</p>
        </a>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
      return {
        showTotal : false,
        total : 0,
        index : 0,
        footers : [
            {
                text : ''
            }
        ]
      }
  },
  computed : {
    ...mapGetters({
      orderTotal : 'orderTotal'
    })
  },
  mounted(){

  },
  watch : {
    orderTotal(val){
        this.total = this.orderTotal;
        if( val >  0 ){
            this.showTotal = true;
        }else{
          this.showTotal = false;
        }
        if( val > 100 ){
            this.total = '100+';
        }
    }
  },
  props: ['footerIndex'],
  mounted: function () {
    this.$nextTick(function () {
      document.querySelector('.footer').children[this.footerIndex].classList.add('active');
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" spoend>
    @import "../assets/scss/base/_necessary.scss";
    .footer{
        width:100%;
        position: fixed;
        bottom:0;
        left:0;
        height:px2rem(107);
        border-top:1px solid $color_d9d9d9;
        background:$color_f9f9f9;
        a.active{
            color:$color_0086d1;
            .home{
              background:url("../assets/images/icon/icon-home_on.png") no-repeat center;
              background-size:100% auto;
            }
            .classify{
              background:url("../assets/images/icon/icon-classify_on.png") no-repeat center;
              background-size:100% auto;
            }
            .discover{
              background:url("../assets/images/icon/icon-discover_on.png") no-repeat center center,url("../assets/images/icon/icon-good.png") no-repeat;
              background-size:px2rem(48) auto,100% auto;
            }
            .purchase{
              background:url("../assets/images/icon/icon-purchase_on.png") no-repeat center;
              background-size:100% auto;
            }
            .my{
              background:url("../assets/images/icon/icon-my_on.png") no-repeat center center;
              background-size:px2rem(33) auto;
            }
        }
        .discover-text{
            margin:px2rem(-30) 0 0 0;
        }
        a{
            @extend .float_left;
            @extend .text_center;
            color:$color_333333;
            width:20%;
            i{
                @extend .absolute;
                span{
                    @extend .absolute;
                    right: px2rem(-14);
                    top:0;
                    background: $color_e94738;
                    border-radius: px2rem(8);
                    font-size: px2rem(20);
                    padding:0 px2rem(5);
                    color:$white;
                    height: px2rem(24);
                    line-height: px2rem(24);
                }
            }
            .icon-wrap{
              height: px2rem(56);
              @extend .relative;
              width: 100%;
            }
            .home{
                width: px2rem(45);
                height: px2rem(38);
                bottom:0;
                left:50%;
                margin:0 0 0 px2rem(-23);
                background:url("../assets/images/icon/icon-home.png") no-repeat center;
                background-size:100% auto;
            }
            .classify{
              width: px2rem(37);
              height: px2rem(37);
              bottom:0;
              left:50%;
              margin:0 0 0 px2rem(-19);
              background:url("../assets/images/icon/icon-classify.png") no-repeat center;
              background-size:100% auto;
            }
            .discover{
              @extend .block;
              position: relative;
              top:px2rem(-30);
              height:px2rem(91);
              background:url("../assets/images/icon/icon-discover.png") no-repeat center center,url("../assets/images/icon/icon-good.png") no-repeat;
              background-size:px2rem(48) auto,100% auto;
            }
            .purchase{
              width: px2rem(34);
              height: px2rem(37);
              bottom:0;
              left:50%;
              span{
                  top: px2rem(-7);
              }
              margin: 0 0 0 px2rem(-17);
              background:url("../assets/images/icon/icon-purchase.png") no-repeat center;
              background-size:100% auto;
            }
            .my{
              width: px2rem(33);
              height: px2rem(37);
              bottom:0;
              left:50%;
              margin: 0 0 0 px2rem(-17);
              background:url("../assets/images/icon/icon-my.png") no-repeat;
              background-size:100% auto;
            }
            p{

              line-height:px2rem(45);
              font-size:px2rem(24);
            }
        }
    }
</style>
