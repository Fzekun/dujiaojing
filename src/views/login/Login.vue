<template>
    <div>
        <nav class="nav">
            <v-touch :key="nav.id" v-for="(nav,index) in navs" tag="a" :class="{ active : index == navIndex }" v-on:tap="togglePanel(nav,index)">{{ nav.text }}</v-touch>
            <!--<v-touch tag="a" :class="{ active : passwordActive }" v-on:tap="showPassWordPanel">密码登录</v-touch>-->
        </nav>
        <components :is="currentView"></components>
    </div>
</template>
<script>
//  var store = require("../../assets/js/lib/store.js").store;
  //var store = require('store.js');

  import Vue from 'vue';
  import Phone from '../../components/login/Phone.vue'
  import Password from '../../components/login/Password.vue'
  export default {
      data(){
          return {
              mask : true,
              show : true,
              navIndex : 0,
              currentView : 'phone',
              navs : [
                {
                  text : '手机登录',
                  view : 'phone'
                },
                {
                  text : '密码登录',
                  view : 'password'
                }
              ],
          }
      },
      mounted : function(){
      },
      methods : {
          togglePanel(item,index){
             this.navIndex = index;
             this.currentView = item.view;
          },
      },
      components : {
          Phone,Password
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
    .img-wrap{
      width: px2rem(182);
      height: px2rem(52);
      overflow: hidden;
      margin:px2rem(10) 0 0 0;
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
    .btn-getcode.gray{
        background:$color_d9d9d9;
        color:$color_999999;
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
