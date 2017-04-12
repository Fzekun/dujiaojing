<template>
    <div>
      <common-footer footerIndex="3"></common-footer>
    </div>
    <!--<div class="alert-content">-->

    <!--</div>-->
</template>

<script>
  import CommonFooter from '../../components/Footer.vue'
  import { ViewBox } from 'vux'
  export default {
      data(){
          return {

          }
      },
      mounted : function(){
      },
      components : {
        CommonFooter
      }
  }
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common.scss';
  body{
      background: none;
  }
  .form{
      .form-group{
        padding: px2rem(35) px2rem(30) 0 0;
        margin: 0 0 0 px2rem(30);
        border-bottom: 1px solid $color_efeff4;
      }
      .wrap{
          height:px2rem(74);
          @extend .relative;
          @extend .flex;
          .img-wrap{
              width: px2rem(182);
              height: px2rem(52);
              @extend .absolute;
              top:px2rem(10);
              right: 0;
              overflow: hidden;
              img{
                  width: 100%;
              }
          }
          .icon-doubt{
              @extend .absolute;
              right:0;
              width: px2rem(50);
              height: 100%;
              background: url("../../assets/images/icon/icon-doubt.png") no-repeat center;
              background-size:px2rem(37) auto;
          }
          .icon-eye{
              @extend .absolute;
              right:0;
              width: px2rem(50);
              height: 100%;
              background: url("../../assets/images/icon/icon-eye.png") no-repeat center;
              background-size:px2rem(41) auto;
          }
          .icon-eye.on{
              background: url("../../assets/images/icon/icon-eye_on.png") no-repeat center;
              background-size:px2rem(37) auto;
          }
          .btn-getcode{
            min-width: px2rem(182);
            height: px2rem(60);
            line-height: px2rem(60);
            @extend .absolute;
            top:px2rem(2);
            right: 0;

            background:$color_0086d1;
            border-radius: px2rem(5);
            @extend .text_center;
            color:$white;
            font-size:px2rem(28);

          }
          .input-wrap{
              width: px2rem(322);
              position: relative;
              padding:0 px2rem(54) 0 0;
          }
          & > i{
              width:px2rem(65);
              height:px2rem(74);
          }
          .input{
              height: px2rem(28);
              font-size:px2rem(28);
              padding:px2rem(23) 0;
              line-height: 1.2em;
              color: $color_333333;
              width: 100%;
          }
          .input::-webkit-input-placeholder{
              color:$color_999999;
          }
          .icon-phone{
              background: url("../../assets/images/icon/icon-phone.png") no-repeat px2rem(5) center;
              background-size: px2rem(27) auto;
          }
          .icon-verify{
            background: url("../../assets/images/icon/icon-verify.png") no-repeat px2rem(5) center;
            background-size: px2rem(34) auto;
          }
          .icon-smscode{
            background: url("../../assets/images/icon/icon-smscode.png") no-repeat px2rem(7) center;
            background-size: px2rem(34) auto;
          }
          .icon-password{
            background: url("../../assets/images/icon/icon-password.png") no-repeat px2rem(7) center;
            background-size: px2rem(31) auto;
          }
          .icon-invitecode{
            background: url("../../assets/images/icon/icon-invitecode.png") no-repeat px2rem(6) center;
            background-size: px2rem(33) auto;
          }
          .icon-clear{
            @extend  .absolute;
            right:0;
            top:0;
            height:px2rem(74);
            width: px2rem(54);
            background: url("../../assets/images/icon/icon-clear.png") no-repeat center;
            background-size: px2rem(33) auto;
          }
      }
      .submit-wrap{
        padding:px2rem(100) px2rem(30) 0 px2rem(30);
        .btn-submit{
            display: block;
            line-height: px2rem(80);
            font-size:px2rem(32);
            @extend .text_center;
            height:px2rem(80);
            color:$color_999999;
            border-radius: px2rem(6);
            background: $color_d9d9d9;
        }
        .btn-submit.on{
          color:$white;
          background: $color_0086d1;
        }
        & > p{
            line-height: px2rem(70);
            height: px2rem(70);
            font-size:px2rem(26);
            color: $color_666666;
            @extend .relative;
            a{
                color:$color_0086d1;
            }
            .icon-smallbell{
                @extend .absolute;
                width: px2rem(34);
                right:0;
                top:px2rem(12);
                height:px2rem(37);
                background: url("../../assets/images/icon/icon-smallbell.png") no-repeat;
                background-size:px2rem(34) auto;
            }
        }
      }
  }
  .alert-content{
      @extend .text_center;
      color:$color_333333;
      p{
          line-height: px2rem(78);
      }
      p:nth-of-type(1){
        font-size:px2rem(32);
        font-weight: bold;
      }
      p:nth-of-type(2){
        font-size:px2rem(26);
      }
      .icon-success{
        @extend .block;
        width: px2rem(84);
        height: px2rem(84);
        background: url("../../assets/images/icon/icon-success_little.png") no-repeat;
        background-size:100% auto;
        margin: px2rem(28) auto 0 auto;
      }
  }

</style>
