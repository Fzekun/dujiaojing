<template>
  <div class="password-login">
    <div class="form-group">
      <div class="wrap flex">
        <i class="icon-phone"></i>
        <div class="input-wrap flex_item">
          <input v-model="form.phone" maxlength="11" placeholder="手机号" class="input phone" type="tel" />
          <v-touch v-show="showPhone" tag="span" class="icon-clear" v-on:tap="clearPhone"></v-touch>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="wrap flex">
        <i class="icon-password"></i>
        <div class="input-wrap flex_item">
          <input ref="password" v-model="form.password" maxlength="20" placeholder="请输入密码" class="input phone" type="password" />
          <v-touch v-show="showPassword" tag="span" class="icon-clear" v-on:tap="clearPassword"></v-touch>
        </div>
        <div class="eye-wrap">
          <v-touch v-show="eyeGray" tag="i" class="icon-eye" v-on:tap="tapShowPassword"></v-touch>
          <v-touch v-show="eyeHighlight" tag="i" class="icon-eye on" v-on:tap="tapHidePassword"></v-touch>
        </div>
      </div>
    </div>
    <div class="submit-wrap">
      <a v-show="submit" href="javascript:;" class="btn-submit">登录</a>
      <v-touch v-show="submitHighlight" tag="a" class="btn-submit on" v-on:tap="formSubmit">登录</v-touch>
      <p>
        <a href="" class="float_left skip-password">忘记密码？</a>
        <a href="" class="float_right">快速注册</a>
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
          password : ''
        },
        eyeGray : false,
        eyeHighlight : false,
        submit : true,
        submitHighlight : false,
        showPhone : false,
        showPassword : false,
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
          if( val.password == '' ){
            this.eyeGray = false;
            this.eyeHighlight = false;
            this.$refs.password.type = 'password';
            this.showPassword = false;
          }else{
            if( this.eyeHighlight ){
              this.eyeGray = false;
            }else{
              this.eyeGray = true;
            }
            this.showPassword = true;
          }
          if( val.phone && val.password ){
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
      clearPassword(){
        this.form.password = '';
        this.showPassword = false;
      },
      tapHidePassword : function(){
        this.eyeGray = true;
        this.eyeHighlight = false;
        this.$refs.password.type = 'password';
      },
      tapShowPassword : function(){
        this.eyeGray = false;
        this.eyeHighlight = true;
        this.$refs.password.type = 'text';
      },
      formSubmit(){
          if( !re.phone.test( this.form.phone) ){
            this.showToast({ text : '请输入正确的手机号！'})
            return false;
          }
         if( !re.password.test( this.form.password ) ){
            //this.toast('');
            this.showToast({ text : '密码只能6-20位数字字母组合！'})
            return false;
         }
        api.loginByPassword({
          data : {
            mobile : this.form.phone,
            password : md5(this.form.password)
          }
        }).then((data)=>{
          if( data.resultCode == 200 ){

          }else{
            this.showToast({ text : data.resultMsg})
            //this.toast();
          }
        }).catch(()=>{})
      }
    }
  }
</script>
