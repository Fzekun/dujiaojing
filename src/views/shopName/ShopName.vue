<template>
  <div>
    <div class="form-group">
      <div class="wrap flex">
        <div class="input-wrap flex_item">
          <input v-model="shopName" placeholder="请输入店铺名称" class="input" type="text" />
          <v-touch v-show="shopNameClear" tag="span" class="icon-clear" v-on:tap="clearShopName"></v-touch>
        </div>
      </div>
    </div>
    <p class="tip-text">限40个字符以内，支持中、英文、数字字母组合</p>
    <div class="submit-wrap">
      <v-touch tag="a" class="btn-submit on" v-on:tap="formSubmit">保存</v-touch>
    </div>
  </div>
</template>
<script>
  import { Popup, Picker } from 'vux';
  export default{
    data(){
      return {
        shopName : '',
        shopNameClear : false
      }
    },
    components : {

    },
    mounted(){

    },
    methods : {
      clearShopName(){

      },
      formSubmit(){

      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import "../../assets/scss/common";
  body{
    background:none;

  }
  .form-group{
    padding: px2rem(35) px2rem(30) 0 0;
    margin: 0 0 0 px2rem(30);
    border-bottom: 1px solid $color_efeff4;
  }
  .tip-text{
      line-height: px2rem(60);
      padding:0 0 0 px2rem(30);
      color:$color_999999;
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
      color:$color_999999;
      border-radius: px2rem(6);
      background: $color_d9d9d9;
    }
    .btn-submit.on{
      color:$white;
      background: $color_0086d1;
    }
  }
</style>
