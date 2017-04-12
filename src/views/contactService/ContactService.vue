<template>
    <div class="contactService-box">
        <div class="service-box">
            <p>客服热线：<a href="tel:400-017-7966" class="blue_color underline">400-017-7966</a></p>
        </div>
        <div class="line"></div>
        <div class="weChat-box">
            <header>
                <p>微信客服：</p>
            </header>
            <div class="content">
                <h3>关注微信服务号“<a href="" class="blue_color underline">Z544415</a>"咨询在线客服</h3>
                <div class="qrCode-box">
                    <div class="qrCode-wrap">
                      <div class="img-wrap">
                        <img src="../../assets/images/qrcode.jpg" alt="">
                      </div>

                      <p>长按识别图中二维码</p>
                    </div>
                </div>
            </div>
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
  .underline{
    text-decoration: underline;
  }
  .blue_color{
    color:$color_0086d1;
  }
  .contactService-box{
      font-size: px2rem(28);
  }
  .line{
      height: px2rem(10);
      background: $color_efeff4;
  }
  .service-box{
    height:px2rem(126);
    line-height: px2rem(126);
    padding: 0 0 0 px2rem(85);
    background: url("../../assets/images/icon/icon_contact.png") no-repeat px2rem(30) px2rem(45);
    background-size:px2rem(38) auto;
  }
  .weChat-box{
      header{
        padding: 0 0 0 px2rem(30);
        p{
            height:px2rem(116);
            padding: 0 0 0 px2rem(58);
            height: px2rem(116);
            line-height: px2rem(116);
            background: url("../../assets/images/icon/icon-chat.png") no-repeat left px2rem(40);
            background-size:px2rem(45) auto;
            border-bottom: 1px solid $color_efeff4;
        }
      }
      .content{
          @extend .text_center;
          padding: px2rem(20) 0 0 0;
          h3{
              line-height: px2rem(152);
          }
          .qrCode-box{
              width: px2rem(405);
              height: px2rem(405);
              border:1px solid $color_efeff4;
              border-radius: px2rem(15);
              margin: 0 auto;
              .qrCode-wrap{
                  width: px2rem(259);
                  margin:px2rem(52) auto 0 auto;
                  .img-wrap{
                      width: px2rem(259);
                      height: px2rem(259);
                      img{
                          width: 100%;
                      }
                  }
                  p{
                      font-size: px2rem(26);
                      line-height: px2rem(75);
                  }
              }
          }
      }

  }
</style>
