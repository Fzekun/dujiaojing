<template>
  <div>
   <p class="phone-text">
     手机号码：13932456780
   </p>
    <div class="line"></div>
    <div class="form-group">
      <div class="wrap flex">
        <i class="icon-verify"></i>
        <div class="input-wrap flex_item">
          <input v-model="form.verifyCode" placeholder="请输入校验码" maxlength="4" class="input" type="tel" />
          <v-touch v-show="showVerifyCode" tag="span" class="icon-clear" v-on:tap="clearVerifyCode"></v-touch>
        </div>
        <div class="img-wrap">
          <img class="verification-code" src="../../assets/images/img-verificationcode.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="wrap flex">
        <i class="icon-smscode"></i>
        <div class="input-wrap flex_item">
          <input v-model="form.smsCode" placeholder="请输入短信验证码" maxlength="6" class="input" type="tel" />
          <v-touch v-show="showSmsCode" tag="span" class="icon-clear" v-on:tap="clearSMScode"></v-touch>
        </div>
        <div>
          <a href="javascript:;" v-if="countdown" class="btn-getcode">获取验证码</a>
          <a href="javascript:;" v-else class="btn-getcode gray">获取验证码</a>
        </div>

      </div>
    </div>
    <div class="submit-wrap">
      <v-touch tag="a" class="btn-submit on" v-on:tap="formSubmit">下一步</v-touch>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        form : {
          phone : '',
          verifyCode : '',
          smsCode : ''
        },
        countdown : true,
        submit : true,
        showPhone : false,
        showSmsCode : false,
        showVerifyCode : false
      }
    },
    watch : {
      form : {
        handler(val){
          if( val.phone == '' ){
            this.showPhone = false;
          }else{
            this.showPhone = true;
          }
          if( val.verifyCode == '' ){
            this.showVerifyCode = false;
          }else{
            this.showVerifyCode = true;
          }
          if( val.smsCode == '' ){
            this.showSmsCode = false;
          }else{
            this.showSmsCode = true;
          }
          if( val.phone && val.verifyCode && val.smsCode ){
            this.submit = false;
            this.submitHighlight = true;
          }else{
            this.submit = true;
            this.submitHighlight = false;
          }
        },
        deep : true
      }
    },
    methods :{
      clearPhone(){
        this.form.phone = '';
        this.showPhone = false;
      },
      clearVerifyCode(){
        this.form.verifyCode = '';
        this.showVerifyCode = false;
      },
      clearSMScode(){
        this.form.smsCode = '';
        this.showSmsCode = false;
      },
      formSubmit(){

      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common';
  body{
    background: none;
  }
  .phone-text{
      line-height: px2rem(110);
      font-size: px2rem(30);
      padding: 0 0 0 px2rem(30);
  }
  .line{
     height: px2rem(10);
      background: $color_efeff4;
  }
  .form-group{
    padding: px2rem(35) px2rem(30) 0 0;
    margin: 0 0 0 px2rem(30);
    border-bottom: 1px solid $color_efeff4;
  }
  .wrap{
    height:px2rem(74);
    @extend .relative;
    .img-wrap{
      width: px2rem(182);
      height: px2rem(52);
      overflow: hidden;
      margin:px2rem(10) 0 0 0;
      img{
        width: 100%;
      }
    }
    .btn-getcode{
      min-width: px2rem(182);
      height: px2rem(60);
      @extend .block;
      line-height: px2rem(60);
      /*@extend .absolute;*/
      /*top:px2rem(2);*/
      /*right: 0;*/

      background:$color_0086d1;
      border-radius: px2rem(5);
      @extend .text_center;
      color:$white;
      font-size:px2rem(28);

    }
    .input-wrap{
      /*width: px2rem(322);*/
      position: relative;
      /*padding:0 px2rem(54) 0 0;*/
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
    .icon-verify{
      background: url("../../assets/images/icon/icon-verify.png") no-repeat px2rem(5) center;
      background-size: px2rem(34) auto;
    }
    .icon-smscode{
      background: url("../../assets/images/icon/icon-smscode.png") no-repeat px2rem(7) center;
      background-size: px2rem(34) auto;
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
    .skip-password{
      color:$color_0086d1;
    }
  }
</style>

