<template>
  <footer class="footer">
        <a href="index.html">
            <i class="home icon-home"></i>
            <p>首页</p>
        </a>
        <a href="classify.html">
          <i class="classify"></i>
          <p>分类</p>
        </a>
        <a href="findGoods.html">
            <i class="discover"></i>
            <p class="discover-text">发现好货</p>
        </a>
        <a href="purchaseOrder.html">
          <i class="purchase"></i>
          <p>采购单</p>
        </a>
        <a href="my.html">
          <i class="my"></i>
          <p>我的</p>
        </a>
  </footer>
</template>

<script>
export default {
  data(){
      return {
        index : 0,
        footers : [
            {
                text : ''
            }
        ]
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
              background:url("../assets/images/icon/icon-home_on.png") no-repeat center  px2rem(19);
              background-size:px2rem(45) auto;
            }
            .classify{
              background:url("../assets/images/icon/icon-classify_on.png") no-repeat center px2rem(18);
              background-size:px2rem(37) auto;
            }
            .discover{
              background:url("../assets/images/icon/icon-discover_on.png") no-repeat center center,url("../assets/images/icon/icon-good.png") no-repeat;
              background-size:px2rem(48) auto,100% auto;
            }
            .purchase{
              background:url("../assets/images/icon/icon-purchase_on.png") no-repeat center px2rem(18);
              background-size:px2rem(34) auto;
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
                display: block;
                width:100%;
                height:px2rem(62);
            }

            .home{
                background:url("../assets/images/icon/icon-home.png") no-repeat center  px2rem(19);
                background-size:px2rem(45) auto;
            }
            .classify{
              background:url("../assets/images/icon/icon-classify.png") no-repeat center px2rem(18);
              background-size:px2rem(37) auto;
            }
            .discover{
              position: relative;
              top:px2rem(-30);
              height:px2rem(91);
              background:url("../assets/images/icon/icon-discover.png") no-repeat center center,url("../assets/images/icon/icon-good.png") no-repeat;
              background-size:px2rem(48) auto,100% auto;
            }
            .purchase{
              background:url("../assets/images/icon/icon-purchase.png") no-repeat center px2rem(18);
              background-size:px2rem(34) auto;
            }
            .my{
              background:url("../assets/images/icon/icon-my.png") no-repeat center center;
              background-size:px2rem(33) auto;
            }
            p{

              line-height:px2rem(36);
              font-size:px2rem(24);
            }
        }
    }
</style>
