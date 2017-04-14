<template>
    <div class="about">
          <div class="logo-info">
            <img class="logo" src="../../assets/images/about-logo.png" alt="">
          </div>
          <div class="text-box">
            <p>北京独角鲸网络科技有限公司，致力于用互联网思维颠覆传统的食材采购模式，充分整合供应链上下游资源，为行业打造全品类、低成本、高效率、最好用的B2B冻品直采平台。</p>
            <p>公司业务在天津、河北、山东三省多个城市稳步发展的基础上，已逐步向全国市场扩张。</p>
            <p>大数据驱动批量定制、缩短供应链、让供应商由“买卖人”转变为“多角色服务商”， 独角鲸在优化食材采购的路上不断探索，志在提升行业效率，保障食品安全，实现食品生产商、区域供应商和终端餐饮企业的三方共赢。</p>
          </div>
    </div>
</template>
<script>
  export default{
    data(){
      return {

      }
    },
    mounted(){

    },
    components : {

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import "../../assets/scss/common";
  body{
    background: none;
  }
  .about{
      padding:0 px2rem(30) 0 px2rem(30);
      color:$color_333333;
      font-size: px2rem(26);
      line-height: px2rem(50);
      .text-box{
          padding: px2rem(36) 0 0 0;
          p{
            text-indent: 2em;
          }
      }
      .logo-info{
         @extend .text_center;
          padding: 0 0 px2rem(70) 0;
          border-bottom: 1px solid $color_efeff4;
         .logo{
            @extend .block;
            width: px2rem(316);
           padding: px2rem(85) 0 0 0;
            margin: 0 auto;

         }
         p{
            font-size:px2rem(28);
            line-height: px2rem(72);
         }
      }
  }
</style>
