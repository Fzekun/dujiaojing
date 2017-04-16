<template>
    <div class="help-center">
        <div class="content">
            <a href="">
              <p>
                <span>支付方式错误</span>
              </p>
              <i class="u-icon-arr"></i>
            </a>
            <a href="">
              <p>
                <span>不想买了</span>
              </p>
              <i class="u-icon-arr"></i>
            </a>
            <a href="">
              <p>
                <span>买错了</span>
              </p>
              <i class="u-icon-arr"></i>
            </a>
            <a href="">
              <p>
                <span>重复下单</span>
              </p>
              <i class="u-icon-arr"></i>
            </a>
            <a href="">
              <p>
                <span>地址选择错误</span>
              </p>
              <i class="u-icon-arr"></i>
            </a>
           <a href="">
              <p>
                <span>其他原因</span>
              </p>
              <i class="u-icon-arr"></i>
            </a>
        </div>
      <Confirm :show-title="false" v-model="confirm"
               @on-cancel="cancelConfirm"
               @on-confirm="successConfirm"
      >
        <div class="cancel-order">
          <i class="icon-plaint"></i>
          <p>确认取消订单吗？</p>
        </div>
      </Confirm>
    </div>
</template>
<script>
  import {  Confirm } from 'vux'
  export default {
      data(){
          return {
            confirm : true
          }
      },
      mounted : function(){
      },
      methods : {
        cancelConfirm(){
        },
        successConfirm(){
        }
      },
      components : {
          Confirm
      }
  }
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common';
  body{
      background: none;
  }
  .cancel-order{
    @extend .text_center;

    color:$color_333333;
    padding:px2rem(60) 0 px2rem(12) 0;
    p{
      font-size:px2rem(28);
      line-height: px2rem(120);
    }
    .icon-plaint{
      @extend .block;
      width: px2rem(84);
      height: px2rem(84);
      background: url("../../assets/images/icon/icon-plaint.png") no-repeat;
      background-size:100% auto;
      margin: 0 auto 0 auto;
    }
  }
  .u-icon-arr
  {
    position: absolute;
    top: 50%;
    right: px2rem(35);
    width: px2rem(17);
    height: px2rem(17);
    margin: px2rem(-10) 0 0 0;
    border-style: solid;
    border-width: px2rem(3) px2rem(3) 0 0;
    border-color: $color_9a9899;
    -webkit-transform-origin: center center;
    -webkit-transform: rotateZ(45deg);
  }
  .content{
      padding:0 0 0 px2rem(30);
      a{
        display: block;
        color:$color_333333;
        @extend .relative;
        padding: px2rem(14) px2rem(30) 0 0;
        border-bottom: 1px solid $color_efeff4;
        overflow: hidden;
      }
      p{
        line-height: px2rem(66);
        overflow: hidden;
      }
  }
</style>
