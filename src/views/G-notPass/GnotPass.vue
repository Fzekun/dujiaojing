<template>
    <div>
        <div class="wrap">
            <div class="tip-wrap">
                <i class="icon-failure"></i>
                <p>抱歉！您的账号未通过审核，详情请联系客服。</p>
            </div>
            <div class="btn-wrap">
              <div>
                <a href="tel:400-017-7916">
                  联系客服：<span>400-017-7916</span>
                </a>
                <a href="">首页逛逛 >></a>
                <a href="">换个账号登录 >></a>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
//  import { Alert } from 'vux'
  export default {
      data(){
          return {
              show : false
          }
      },
      mounted : function(){
//        this.$vux.alert.show({
//          title : false,
//          content : '<div>12312312</div>',
//          'button-text' : '知道了'
//        })
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
  .wrap{
      padding: px2rem(140) 0 0 0;
      .tip-wrap{
          @extend .text_center;
          overflow: hidden;
          margin: 0 0 px2rem(116) 0;
          font-size: px2rem(28);
          h2{
              line-height: px2rem(72);
              font-size: px2rem(34);
          }
          p:nth-of-type(1){
              line-height: px2rem(66);
              margin: 0 0 px2rem(10) 0;
              span{
                  color:$color_e94738;
              }
          }
          p:nth-of-type(2){
            color: $color_666666;
          }
          p{
              color:$color_333333;
              line-height: px2rem(42);
          }
      }
      .btn-wrap{
          @extend .text_center;
          & > div{
              width: px2rem(430);
              @extend .inline_block;
          }
          a{
              span{
                  color:$color_0086d1;
                  text-decoration: underline;
              }
              width: 100%;
              border:1px solid $color_999999;
              border-radius: px2rem(10);
              height: px2rem(78);
              line-height: px2rem(78);
              font-size: px2rem(30);
              display: block;
              color: $color_333333;
              margin:0 0 px2rem(24) 0;
          }
      }
      .icon-failure{
        @extend .block;
        width: px2rem(106);
        height: px2rem(106);
        background: url("../../assets/images/icon/icon-deal_failed.png") no-repeat;
        background-size:100% auto;
        margin: 0 auto px2rem(42) auto;
      }
  }

</style>
