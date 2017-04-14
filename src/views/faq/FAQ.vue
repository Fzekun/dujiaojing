<template>
    <div class="faq-box">
        <header class="header">
          <div>
            <h3 class="bold">常见问题大集锦，需要哪里看哪里</h3>
            <p>2016-12-23&nbsp;&nbsp;&nbsp;马小妹&nbsp;&nbsp;&nbsp;&nbsp;<a class="blue_color" href="#">马里马里平台</a></p>
          </div>
        </header>
        <div class="content">
            <h3 class="bold">1.注册，简单！</h3>
            <p>关注微信公众账号“<a href="javascript:;">马里马里平台</a>”，点击菜单栏“<a href="javascript:;">我要定购</a>”，
              进入注册页面，点击“<a href="javascript:;">手机注册</a>”，填写注册信息即可。</p>
            <img class="faq-img" src="../../assets/images/faq.jpg" width="100%" alt="">
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
  .faq-box{
      font-size: px2rem(26);
  }
  .faq-img{
    margin: px2rem(28) 0 0 0;
  }
  .content{
      padding: px2rem(8) px2rem(30) 0 px2rem(30);
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
