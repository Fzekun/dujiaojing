<template>
    <div class="about">
          <div class="logo-info">
            <img class="logo" src="../../assets/images/about-logo.png" alt="">
            <p>马里马里平台</p>
          </div>
          <div class="text-box">
            <p>北京马里马里网络科技有限公司成立于2015年9月，首期注资3000万，总部设在北京是中国专业的冻品一站式服务马里马里平台通过充分整合业内和业外的核心资源，为合作伙伴提供基于平台的供应链服务。</p>
            <p>北京马里马里网络科技有限公司成立于2015年9月，首期注资3000万，总部设在北京是中国专业的冻品一站式服务马里马里平台通过充分整合业内和业外的核心资源，为合作伙伴提供基于平台的供应链服务。北京马里马里网络科技有限公司成立于2015年9月，首期注资3000万，总部设在北京是中国专业务马里马里平台通过充分整合业内和业外的核心资源，为合作伙伴提供基于平台的供应链服务。</p>
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
          padding: 0 0 px2rem(24) 0;
          border-bottom: 1px solid $color_efeff4;
         .logo{
            @extend .block;
            width: px2rem(119);
            height: px2rem(119);
           padding: px2rem(72) 0 0 0;
            margin: 0 auto;

         }
         p{
            font-size:px2rem(28);
            line-height: px2rem(72);
         }
      }
  }
</style>
