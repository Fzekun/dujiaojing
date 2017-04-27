<template>
    <div>
        <div class="form">
            <div class="form-group">
                <div class="wrap flex">
                    <i class="icon-phone"></i>
                    <div class="input-wrap flex_item">
                      <input v-model="form.phone" placeholder="手机号" maxlength="11" class="input phone" type="tel" />
                      <v-touch v-show="clear.phone" tag="span" class="icon-clear" v-on:tap="clearPhoneValue"></v-touch>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="wrap flex">
                  <i class="icon-verify"></i>
                  <div class="input-wrap flex_item">
                    <input v-model="form.verifyCode" placeholder="请输入校验码" maxlength="5" class="input phone" type="tel" />
                    <v-touch v-show="clear.verifyCode" tag="span" class="icon-clear" v-on:tap="clearVerifyCodeValue"></v-touch>
                  </div>
                  <div class="img-wrap">
                    <v-touch tag="img" :src="imgSrc" class="verification-code" v-on:tap="changeImgSrc"></v-touch>
                    <!--<img class="verification-code" :src="imgSrc" alt="">-->
                  </div>
                </div>
            </div>
            <div class="form-group">
              <div class="wrap flex">
                <i class="icon-smscode"></i>
                <div class="input-wrap flex_item">
                  <input v-model="form.smsCode" placeholder="请输入短信验证码" maxlength="6" class="input phone" type="tel" />
                  <v-touch v-show="clear.smsCode" tag="span" class="icon-clear" v-on:tap="clearSmsCodeValue"></v-touch>
                </div>
                <div>
                    <v-touch v-if="showGetCode" tag="a" class="btn-getcode" v-on:tap="sendSMS">获取验证码</v-touch>
                    <a v-else href="javascript:;" class="btn-getcode gray">{{ count }}s</a>

                </div>

              </div>
            </div>
            <div class="form-group">
              <div class="wrap flex">
                <i class="icon-password"></i>
                <div class="input-wrap flex_item">
                  <input ref="password" v-model="form.password" placeholder="设置6-20位密码" maxlength="20" class="input phone" type="password" />
                  <v-touch v-show="clear.password" tag="span" class="icon-clear" v-on:tap="clearPasswordValue"></v-touch>
                </div>
                <div>
                  <v-touch v-show="eyeGray" tag="i" class="icon-eye" v-on:tap="showPassword"></v-touch>
                  <v-touch v-show="eyeHighlight" tag="i" class="icon-eye on" v-on:tap="hidePassword"></v-touch>
                </div>

              </div>
            </div>
            <div class="form-group">
              <div class="wrap flex">
                <i class="icon-invitecode"></i>
                <div class="input-wrap flex_item">
                  <input v-model="form.inviteCode" placeholder="请输入邀请码（选填）" class="input phone" type="text" />
                  <v-touch v-show="clear.inviteCode" tag="span" class="icon-clear" v-on:tap="clearInviteCodeValue"></v-touch>
                </div>
                <i class="icon-doubt"></i>
              </div>
            </div>
            <div class="submit-wrap">
                <a v-show="submitGray" href="javascript:;" class="btn-submit">注册</a>
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
        <!--<alert :show-title="false" v-model="reminder" button-text="知道了">-->
          <!--<div>-->
            <!--<h3>友情提示</h3>-->
            <!--<p>用户您好！以下为您提供建议注册平台</p>-->
            <!--<p>终端商：微信、PC</p>-->
            <!--<p>供应商：PC</p>-->
            <!--<p>生产商：PC</p>-->
            <!--<p>终端商：终端买家购买平台商品，如火锅店，-->
              <!--麻辣烫店等。</p>-->
            <!--<p>供应商：为终端供货，可从平台进货销售，也-->
              <!--可销售自有渠道商品。</p>-->
            <!--<p>生产商：厂家或一级代理，可以平台大批量销-->
              <!--售自已的商品。</p>-->
          <!--</div>-->
        <!--</alert>-->
    </div>
</template>

<script>
  import api from '../../api/api'

  import re from '../../assets/js/tools/regexp'
  import { Alert, md5 } from 'vux'
  export default {
      data(){
          return {
              reminder : true,
              showGetCode : true,
              count : 60,
              imgSrc : api.url + '/patchca.png',
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
                if( val.inviteCode == '' ){
                  this.clear.inviteCode = false;
                }else{
                  this.clear.inviteCode = true;
                }
                if( val.password == '' ){
                  this.eyeGray = false;
                  this.eyeHighlight = false;
                  this.$refs.password.type = 'password';
                  this.clear.password = false;
                }else{
                  if( this.eyeHighlight ){
                    this.eyeGray = false;
                  }else{
                    this.eyeGray = true;
                  }
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
          //切换图形验证码
          changeImgSrc(){
              this.imgSrc = api.url + '/patchca.png?now='+new Date().getTime()
          },
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
          clearInviteCodeValue(){
              this.form.inviteCode = '';
              this.clear.inviteCode = false;
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
          sendSMS(){
              if( !(this.checkPhone() && this.checkVerifyCode()) ){
                  return false;
              }
              api.sendSMS({
                data : {
                  mobile : this.form.phone,
                  smsType : 1
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
          //倒计时60秒
          countdown(){
            this.showGetCode = false;
            setTimeout(()=>{
              this.count--;
              if(this.count <= 0){
                this.showGetCode = true;
                this.count = 59;
                return;
              }else{
                this.countdown();
              }
            },1000);
          },
          //图形验证码是否为空
          checkVerifyCode(){
            if( this.form.verifyCode.trim() == '' ){
              this.toast('校验码不能为空！');
              return false;
            }
            return true;
          },
          toast( text ){
            this.$vux.toast.show({
              text : text,
              position : 'middle',
              type : 'text',
              time : 1000,
              width : '7rem'
            });
          },
          checkPhone(){
            if( this.form.phone.trim()  == '' ){
              this.toast('手机号不能为空！');
              return false;
            }
            if( !re.phone.test( this.form.phone) ){
              this.toast('请输入正确的手机号！');
              return false;
            }
            return true;
          },
          formSubmit(){
            if( !this.checkPhone() ){
              return false;
            }
            if( !re.password.test( this.form.password ) ){
                this.toast('密码只能6-20位数字字母组合！');
                return false;
            }
            api.customerRegister({
              data : {
                mobile : this.form.phone,
                patchca : this.form.verifyCode,
                mobileCode : this.form.smsCode,
                password : md5(this.form.password),
                invitationCode : this.form.inviteCode
              }
            }).then((data)=>{
                if( data.resultCode == 200 ){

                }else{
                    this.toast(data.resultMsg);
                }
            }).catch(()=>{})
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
          .img-wrap{
              width: px2rem(182);
              height: px2rem(52);
              margin: px2rem(10) 0 0 0;
              overflow: hidden;
              img{
                  width: 100%;
              }
          }
          .icon-doubt{
              width: px2rem(50);
              height: 100%;
              background: url("../../assets/images/icon/icon-doubt.png") no-repeat center;
              background-size:px2rem(37) auto;
          }
          .icon-eye{
              @extend .block;
              width: px2rem(50);
              height: px2rem(74);
              background:url("../../assets/images/icon/icon-eye.png") no-repeat center;
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
            @extend .block;
            margin:px2rem(2) 0 0 0;
            right: 0;
            background:$color_0086d1;
            border-radius: px2rem(5);
            @extend .text_center;
            color:$white;
            font-size:px2rem(28);

          }
          .btn-getcode.gray{
            background: $color_d9d9d9;
            color:$color_999999;
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
