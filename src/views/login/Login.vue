<template>
    <div>
        <nav class="nav">
            <v-touch tag="a" :class="{ active : phoneActive }" v-on:tap="showPhonePanel">手机登录</v-touch>
            <v-touch tag="a" :class="{ active : passwordActive }" v-on:tap="showPassWordPanel">密码密码</v-touch>
        </nav>
        <div v-show="phonePanel" class="phone-login">

            <div class="form-group">
              <div class="wrap">
                <i class="icon-phone"></i>
                <div class="input-wrap">
                  <input v-model.trim="phoneForm.phone" maxlength="11" placeholder="手机号" class="input phone" type="tel" />
                  <v-touch v-show="phoneFormClear.phone" tag="span" class="icon-clear" v-on:tap="clearPhoneFormPhone"></v-touch>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="wrap">
                <i class="icon-verify"></i>
                <div class="input-wrap">
                  <input v-model="phoneForm.verifyCode" placeholder="请输入校验码" maxlength="4" class="input phone" type="tel" />
                  <v-touch v-show="phoneFormClear.verifyCode" tag="span" class="icon-clear" v-on:tap="clearPhoneFormVerifyCode"></v-touch>
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
                  <input v-model="phoneForm.smsCode" placeholder="请输入短信验证码" maxlength="6" class="input phone" type="tel" />
                  <v-touch v-show="phoneFormClear.smsCode" tag="span" class="icon-clear" v-on:tap="clearPhoneFormSMScode"></v-touch>
                </div>
                <a href="javascript:;" class="btn-getcode">获取验证码</a>
                <a href="javascript:;" class="btn-getcode gray">获取验证码</a>
              </div>
            </div>
            <div class="submit-wrap">
              <a v-show="phoneGraySubmit" href="javascript:;" class="btn-submit">登录</a>
              <v-touch v-show="phoneHighlightSubmit" tag="a" class="btn-submit on" v-on:tap="phoneFormSubmit">登录</v-touch>
              <p>
                  <a href="" class="float_right">快速注册</a>
              </p>
            </div>
        </div>
        <div v-show="passwordPanel" class="password-login">
          <div class="form-group">
            <div class="wrap">
              <i class="icon-phone"></i>
              <div class="input-wrap">
                <input v-model="passwordForm.phone" maxlength="11" placeholder="手机号" class="input phone" type="tel" />
                <v-touch v-show="passwordFormClear.phone" tag="span" class="icon-clear" v-on:tap="clearPasswordFormPhone"></v-touch>
              </div>
            </div>
          </div>
            <div class="form-group">
              <div class="wrap">
                <i class="icon-password"></i>
                <div class="input-wrap">
                  <input ref="password" v-model="passwordForm.password" maxlength="20" placeholder="请输入密码" class="input phone" type="password" />
                  <v-touch v-show="passwordFormClear.password" tag="span" class="icon-clear" v-on:tap="clearPasswordFormPassword"></v-touch>
                </div>
                <v-touch v-show="eyeGray" tag="i" class="icon-eye" v-on:tap="showPassword"></v-touch>
                <v-touch v-show="eyeHighlight" tag="i" class="icon-eye on" v-on:tap="hidePassword"></v-touch>
              </div>
            </div>
            <div class="submit-wrap">
              <a v-show="passwordGraySubmit" href="javascript:;" class="btn-submit">登录</a>
              <v-touch v-show="passwordHighlightSubmit" tag="a" class="btn-submit on" v-on:tap="passwordFormSubmit">登录</v-touch>
              <p>
                <a href="" class="float_left skip-password">忘记密码？</a>
                <a href="" class="float_right">快速注册</a>
              </p>
            </div>
        </div>
    </div>
</template>
<script>
  import Vue from 'vue';
  export default {
      data(){
          return {
              phoneHighlightSubmit : false,
              phoneGraySubmit : true,
              passwordGraySubmit : true,
              passwordHighlightSubmit : false,
              eyeGray : false,
              eyeHighlight : false,
              phoneFormClear : {
                  phone : false,
                  verifyCode : false,
                  smsCode : false
              },
              passwordFormClear : {
                phone : false,
                password : false
              },
              phoneForm : {
                  phone : '',
                  verifyCode : '',
                  smsCode : ''
              },
              passwordForm : {
                  phone : '',
                  password : ''
              },
              phoneClear : '',
              phoneActive : true,
              passwordActive  : false,
              phonePanel : true,
              passwordPanel : false
          }
      },
      watch : {
        phoneForm : {
            handler : function(val){
                if( val.phone == '' ){
                    this.phoneFormClear.phone = false;
                }else{
                    this.phoneFormClear.phone = true;
                }
                if( val.verifyCode == '' ){
                  this.phoneFormClear.verifyCode = false;
                }else{
                  this.phoneFormClear.verifyCode = true;
                }
                if( val.smsCode == '' ){
                  this.phoneFormClear.smsCode = false;
                }else{
                  this.phoneFormClear.smsCode = true;
                }
                if( val.phone && val.verifyCode && val.smsCode ){
                    this.phoneGraySubmit = false;
                    this.phoneHighlightSubmit = true;
                }else{
                  this.phoneGraySubmit = true;
                  this.phoneHighlightSubmit = false;
                }
            },
            deep : true
        },
        passwordForm : {
          handler : function(val){
              if( val.phone == '' ){
                this.passwordFormClear.phone = false;
              }else{
                this.passwordFormClear.phone = true;
              }
              if( val.password == '' ){
                this.eyeGray = false;
                this.eyeHighlight = false;
                this.$refs.password.type = 'password';
                this.passwordFormClear.password = false;
              }else{
                this.eyeGray = true;
                this.passwordFormClear.password = true;
              }
              if( val.phone && val.password ){
                this.passwordGraySubmit = false;
                this.passwordHighlightSubmit = true;
              }else{
                this.passwordGraySubmit = true;
                this.passwordHighlightSubmit = false;
              }
          },
          deep : true
        },
      },
      mounted : function(){
      },
      methods : {
          hidePassword : function(){
            this.eyeGray = true;
            this.eyeHighlight = false;
            this.$refs.password.type = 'password';
          },
          showPassword : function(){
              this.eyeGray = false;
              this.eyeHighlight = true;
              this.$refs.password.type = 'text';
          },
          phoneFormSubmit(){
              console.log(11);
          },
          passwordFormSubmit(){
              console.log(11);
          },
          showPhonePanel(){
              this.phoneActive = true;
              this.passwordActive = false;
              this.passwordPanel = false;
              this.phonePanel = true;
          },
          showPassWordPanel : function(){
              this.phoneActive = false;
              this.passwordActive = true;
              this.passwordPanel = true;
              this.phonePanel = false;
          },
          clearPhoneFormPhone : function(){
              this.phoneForm.phone = '';
              this.phoneFormClear.phone = false;
          },
          clearPhoneFormVerifyCode : function(){
              this.phoneForm.verifyCode = '';
              this.phoneFormClear.verifyCode = false;
          },
          clearPhoneFormSMScode : function(){
            this.phoneForm.smsCode = '';
            this.phoneFormClear.smsCode = false;
          },
          clearPasswordFormPhone : function(){
            this.passwordForm.phone = '';
            this.passwordFormClear.phone = false;
          },
          clearPasswordFormPassword : function(){
            this.passwordForm.password = '';
            this.passwordFormClear.password = false;
          }
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
  .nav{
      height: px2rem(80);
      border-bottom: 1px solid $color_efeff4;
      a{
          font-size:px2rem(28);
          color:$color_333333;
          @extend .text_center;
          width: 50%;
          float: left;
          line-height: px2rem(80);
      }
      a.active{
          color:$color_0086d1;
          @extend .relative;
          height: px2rem(79);
          border-bottom: 2px solid $color_0086d1;
      }
  }
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
    padding:px2rem(106) px2rem(30) 0 px2rem(30);
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
      line-height: px2rem(60);
      height: px2rem(60);
      font-size:px2rem(26);
      padding: 0 px2rem(18);
      a{
        color: $color_333333;
      }
      @extend .relative;
    }
    .skip-password{
        color:$color_0086d1;
    }
  }
</style>
