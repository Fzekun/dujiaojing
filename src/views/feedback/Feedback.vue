<template>
  <div>
   <p class="phone-text">
     用户：13932456780
   </p>
    <div class="wrap">
       <textarea maxlength="200" placeholder="请输入您的反馈意见（200字以内）" class="textarea" name="" id="">

      </textarea>
    </div>
    <div class="submit-wrap">
      <v-touch tag="a" class="btn-submit on" v-on:tap="formSubmit">提交</v-touch>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    methods :{
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
      margin: 0 0 px2rem(40) px2rem(30);
      border-bottom: 1px solid $color_efeff4;
  }
  .wrap{
    padding:0 px2rem(30)
  }
  .textarea{
    border:1px solid $color_d9d9d9;
    resize: none;
    display: block;
    border-radius: px2rem(15);
    width: 100%;
    height: px2rem(300);
    box-sizing: border-box;
    padding:px2rem(20);
    line-height: 1.4em;
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

