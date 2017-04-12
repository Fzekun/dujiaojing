<template>
    <div>
        <div class="form">
            <div class="form-group">
                <div class="wrap">
                    <i class="icon-phone"></i>
                    <div class="input-wrap">
                      <input v-model="form.phone" placeholder="手机号" maxlength="11" class="input phone" type="tel" />
                      <v-touch v-show="clear.phone" tag="span" class="icon-clear" v-on:tap="clearPhoneValue"></v-touch>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="wrap">
                  <i class="icon-verify"></i>
                  <div class="input-wrap">
                    <input v-model="form.verifyCode" placeholder="请输入校验码" maxlength="4" class="input phone" type="tel" />
                    <v-touch v-show="clear.verifyCode" tag="span" class="icon-clear" v-on:tap="clearVerifyCodeValue"></v-touch>
                  </div>
                  <div class="img-wrap">
                    <img class="verification-code" src="../../assets/images/img-verificationcode.jpg" alt="">
                  </div>
                </div>
            </div>
            <div class="form-group">
              <div class="wrap">
                <i class="icon-smscode"></i>
                <div class="input-wrap">
                  <input v-model="form.smsCode" placeholder="请输入短信验证码" maxlength="6" class="input phone" type="tel" />
                  <v-touch v-show="clear.smsCode" tag="span" class="icon-clear" v-on:tap="clearSmsCodeValue"></v-touch>
                </div>
                <a href="javascript:;" class="btn-getcode">获取验证码</a>
              </div>
            </div>
            <div class="form-group">
              <div class="wrap">
                <i class="icon-password"></i>
                <div class="input-wrap">
                  <input ref="password" v-model="form.password" placeholder="设置6-20位密码" maxlength="20" class="input phone" type="password" />
                  <v-touch v-show="clear.password" tag="span" class="icon-clear" v-on:tap="clearPasswordValue"></v-touch>
                </div>
                <v-touch v-show="eyeGray" tag="i" class="icon-eye" v-on:tap="showPassword"></v-touch>
                <v-touch v-show="eyeHighlight" tag="i" class="icon-eye on" v-on:tap="hidePassword"></v-touch>
              </div>
            </div>
            <div class="form-group">
              <div class="wrap">
                <i class="icon-invitecode"></i>
                <div class="input-wrap">
                  <input placeholder="请输入邀请码（选填）" class="input phone" type="text" />
                </div>
                <i class="icon-doubt"></i>
              </div>
            </div>
            <div class="submit-wrap">

                <a v-show="submitGray" href="javascript:;" class="btn-submit">登录</a>
                <v-touch v-show="submitHighlight" tag="a" class="btn-submit on" v-on:tap="formSubmit">登录</v-touch>
                <p>
                    注册表示您同意<a href="" target="_blank">《马里马里服务条款》</a>
                    <i class="icon-smallbell"></i>
                </p>
            </div>
        </div>
        <alert :show-title="false" v-model="show" button-text="知道了">
              <div class="alert-content">
                    <i class="icon-success"></i>
                    <p>恭喜您注册成功！</p>
                    <p>请到“我的”页面中完善商户/店铺信息</p>
              </div>
        </alert>
    </div>
    <!--<div class="alert-content">-->

    <!--</div>-->
</template>

<script>
  import { Alert } from 'vux'
  export default {
      data(){
          return {
              show : false,
              submitGray : true,
              submitHighlight : false,
              eyeGray : false,
              eyeHighlight : false,
              clear : {
                  phone : false,
                  verifyCode : false,
                  smsCode : false,
                  password : false,
                  inviteCode : false
              },
              form : {
                phone : '',
                verifyCode : '',
                smsCode : '',
                password : '',
                inviteCode : ''
              }
          }
      },
      watch : {
          form : {
              handler : function(val){
                if( val.phone == '' ){
                  this.clear.phone = false;
                }else{
                  this.clear.phone = true;
                }
                if( val.verifyCode == '' ){
                  this.clear.verifyCode = false;
                }else{
                  this.clear.verifyCode = true;
                }
                if( val.smsCode == '' ){
                  this.clear.smsCode = false;
                }else{
                  this.clear.smsCode = true;
                }
                if( val.password == '' ){
                  this.eyeGray = false;
                  this.eyeHighlight = false;
                  this.$refs.password.type = 'password';
                  this.clear.password = false;
                }else{
                  this.eyeGray = true;
                  this.clear.password = true;
                }
                if( val.phone && val.verifyCode && val.smsCode && val.password ){
                  this.submitGray = false;
                  this.submitHighlight = true;
                }else{
                  this.submitGray = true;
                  this.submitHighlight = false;
                }
              },
              deep : true
          }
      },
      methods : {
          clearPhoneValue(){
              this.form.phone = '';
              this.clear.phone = false;
          },
          clearVerifyCodeValue(){
            this.form.verifyCode = '';
            this.clear.verifyCode = false;
          },
          clearSmsCodeValue(){
            this.form.smsCode = '';
            this.clear.smsCode = false;
          },
          clearPasswordValue(){
             this.form.password = '';
             this.clear.password = false;
          },
          hidePassword(){
            this.eyeGray = true;
            this.eyeHighlight = false;
            this.$refs.password.type = 'password';
          },
          showPassword(){
            this.eyeGray = false;
            this.eyeHighlight = true;
            this.$refs.password.type = 'text';
          },
          formSubmit(){
              console.log(11);
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
          Alert
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
