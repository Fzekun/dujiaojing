<template>
  <div class="phone-login">
    <div class="form-group">
      <div class="wrap flex">
        <i class="icon-phone"></i>
        <div class="input-wrap flex_item">
          <input v-model.trim="form.phone" maxlength="11" placeholder="手机号" class="input phone" type="tel" />
          <v-touch v-show="showPhone" tag="span" class="icon-clear" v-on:tap="clearPhone"></v-touch>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="wrap flex">
        <i class="icon-verify"></i>
        <div class="input-wrap flex_item">
          <input v-model="form.verifyCode" placeholder="请输入校验码" maxlength="4" class="input phone" type="tel" />
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
          <input v-model="form.smsCode" placeholder="请输入短信验证码" maxlength="6" class="input phone" type="tel" />
          <v-touch v-show="showSmsCode" tag="span" class="icon-clear" v-on:tap="clearSMScode"></v-touch>
        </div>
        <div>
          <a href="javascript:;" v-if="countdown" class="btn-getcode">获取验证码</a>
          <a href="javascript:;" v-else class="btn-getcode gray">获取验证码</a>
        </div>

      </div>
    </div>
    <div class="submit-wrap">
      <a v-show="submit" href="javascript:;" class="btn-submit">登录</a>
      <v-touch v-show="submitHighlight" tag="a" class="btn-submit on" v-on:tap="formSubmit">登录</v-touch>
      <p>
        <a href="" class="float_right">快速注册</a>
      </p>
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
        submitHighlight : false,
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
