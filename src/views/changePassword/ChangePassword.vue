<template>
  <div class="change-password">
    <input-password label="新密码：" placeholder="设置6－20位密码"></input-password>
    <input-password label="确认新密码：" placeholder="请再一次输入密码"></input-password>
    <!--<div class="form-group">-->
      <!--<div class="wrap flex">-->
        <!--&lt;!&ndash;<i class="icon-password"></i>&ndash;&gt;-->
        <!--<label class="label">确认新密码：</label>-->
        <!--<div class="input-wrap flex_item">-->
          <!--<input ref="password" v-model="form.password" maxlength="20" placeholder="请再一次输入密码" class="input phone" type="password" />-->
          <!--<v-touch v-show="showPassword" tag="span" class="icon-clear" v-on:tap="clearPassword"></v-touch>-->
        <!--</div>-->
        <!--<div class="eye-wrap">-->
          <!--<v-touch v-show="eyeGray" tag="i" class="icon-eye" v-on:tap="tapShowPassword"></v-touch>-->
          <!--<v-touch v-show="eyeHighlight" tag="i" class="icon-eye on" v-on:tap="tapHidePassword"></v-touch>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="submit-wrap">
      <!--<v-touch tag="a" class="btn-submit" v-on:tap="formSubmit">提交</v-touch>-->
      <v-touch tag="a" class="btn-submit">提交</v-touch>
    </div>
    <alert :show-title="false" v-model="show" button-text="确定">
      <div class="alert-content">
        <i class="icon-success"></i>
        <p class="alert-text">密码修改成功，请重新登录！</p>
      </div>
    </alert>
  </div>
</template>
<script>
  import { Alert } from 'vux'
  import InputPassword from '../../components/changePassword/InputPassword.vue'
  export default {
    data(){
      return {
        show : false,
      }
    },
    components : {
        InputPassword,
        Alert
    },
    methods :{

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common';
  body{
    background: none;
  }
  .alert-content{
    @extend .text_center;
    color:$color_333333;
    .alert-text{
      font-size:px2rem(28);
      line-height: px2rem(116);
    }

    .icon-success{
      @extend .block;
      width: 100%;
      height: px2rem(142);
      background: url("../../assets/images/icon/icon-success_little.png") no-repeat bottom center;
      background-size:px2rem(84) auto;
    }
  }
  .change-password{
    font-size: px2rem(28);
  }
  .label{
      width: px2rem(175);
      line-height: px2rem(74);
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
    .icon-eye{
      @extend .block;
      width: px2rem(50);
      height: px2rem(74);
      background: url("../../assets/images/icon/icon-eye.png") no-repeat center;
      background-size:px2rem(41) auto;
    }
    .icon-eye.on{
      background: url("../../assets/images/icon/icon-eye_on.png") no-repeat center;
      background-size:px2rem(37) auto;
    }
    .input-wrap{
      /*width: px2rem(322);*/
      position: relative;
      /*padding:0 px2rem(54) 0 0;*/
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
      color:$white;
      border-radius: px2rem(6);
      background: $color_0086d1;
    }
  }
</style>
