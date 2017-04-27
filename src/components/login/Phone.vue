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
          <v-touch href="javascript:;" v-if="showGetCode" v-on:tap="sendSMS" class="btn-getcode">获取验证码</v-touch>
          <a href="javascript:;" v-else class="btn-getcode gray">获取验证码</a>
        </div>

      </div>
    </div>
    <div class="submit-wrap">
      <a v-show="submit" href="javascript:;" class="btn-submit">登录</a>
      <v-touch v-show="submitHighlight" tag="a" class="btn-submit on" v-on:tap="formSubmit">登录</v-touch>
      <p>
        <a href="./register.html" class="float_right">快速注册</a>
      </p>
    </div>
  </div>
</template>
<script>
  import re from '../../assets/js/tools/regexp'
  import api from '../../../src/api/api'
  import { mapActions } from 'vuex'
  export default {
    data(){
      return {
        form : {
          phone : '',
          verifyCode : '',
          smsCode : ''
        },
        count : 60,
        showGetCode : true,
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
      ...mapActions([
        'showToast'
      ]),
      clearPhone(){
          this.form.phone = '';
          this.showPhone = false;
      },
      sendSMS(){
        if( !(this.checkPhone() && this.checkVerifyCode()) ){
          return false;
        }
        api.sendSMS({
          data : {
            mobile : this.form.phone,
            smsType : 2
          }
        }).then((data)=>{
          if(data.resultCode == 200){
            this.countdown();
          }else{
            this.toast(data.resultMsg);
          }
        }).catch((err)=>{
          console.log(err);
        });
      },
      clearVerifyCode(){
          this.form.verifyCode = '';
          this.showVerifyCode = false;
      },
      clearSMScode(){
        this.form.smsCode = '';
        this.showSmsCode = false;
      },
      //图形验证码是否为空
      checkVerifyCode(){
        if( this.form.verifyCode.trim() == '' ){
          this.toast('校验码不能为空！');
          return false;
        }
        return true;
      },
      checkPhone(){
        if( this.form.phone.trim()  == '' ){
          this.showToast({ text : '手机号不能为空！'});
          return false;
        }
        if( !re.phone.test( this.form.phone) ){
          this.showToast({ text : '请输入正确的手机号！'});
          return false;
        }
        return true;
      },
      formSubmit(){
        if( !this.checkPhone() ){
          return false;
        }
        api.loginByMobile({
          data : {
            mobile : this.form.phone,
            smsCode : this.form.smsCode,
            patchca : this.form.verifyCode
          }
        }).then((data)=>{
          if( data.resultCode == 200 ){

          }else{
            this.showToast({ text : data.resultMsg});
          }
        }).catch((err)=>{})
      }
    }
  }
</script>
