<template>
    <div class="return-box">
        <header class="header">
          <div>
            <h3 class="bold">退换货须知</h3>
            <p>2016-12-23&nbsp;&nbsp;&nbsp;马小妹&nbsp;&nbsp;&nbsp;&nbsp;<a class="blue_color" href="#">马里马里平台</a></p>
          </div>
        </header>
        <div class="content">
            <p>1. 退货前请在48小时内联系零度户外售后客服，说明退换货原因，并核实是否符合退换货条件。 </p>
            <p>2. 如果商品存在问题，请务必提供相关质量问题图片及相关文字说明，并与客服确认。</p>
            <p>3. 如果该商品有附加赠品，请将赠品一同退回，赠品需保持收到时的原质原样，如赠品不能退回，按照网上价格在退款中扣除。 </p>
            <p>4. 退换过程中，请务必使用牢固的包装，以免在退回过程中照成商品损坏，影响二次销售（一旦损坏，责任由顾客承担）</p>
        </div>
    </div>
</template>
<script>

  export default {
      data(){
          return {
          }
      },
      mounted : function(){
      },
      methods : {

      },
      components : {
      }
  }
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common';
  body{
      background: none;
  }
  .blue_color{
      color:$color_0086d1;
  }
  .bold{
    font-weight: bold;
  }
  .return-box{
      font-size: px2rem(26);
  }
  .content{
      padding: px2rem(22) px2rem(30) 0 px2rem(30);
      h3{
          line-height: px2rem(66);
      }
      p{
         line-height: px2rem(40);
          a{
             color:$color_0086d1;
          }
      }
  }
  .header{
      padding: 0 0 0 px2rem(30);
      & > div{
          padding:px2rem(40) 0 px2rem(10) 0;
          border-bottom: 1px solid $color_efeff4;
          h3{
              font-size: px2rem(28);
              line-height: px2rem(48);
          }
          p{
              line-height: px2rem(40);
          }

      }
  }
</style>
