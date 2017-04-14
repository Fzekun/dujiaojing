<template>
    <div class="addSupplier">
        <div class="header">
            <div class="wrap flex">
              <span>
                  邀请码：
              </span>
              <div class="flex_item input-wrap">
                <input v-model="inviteCode" type="text" placeholder="请输入邀请码" class="input float_left">
                <v-touch v-show="showInviteCode" tag="span" class="icon-clear" v-on:tap="clearInviteCode"></v-touch>
              </div>
            </div>
            <a href="" class="submit-btn">提交</a>
        </div>
        <div class="line"></div>
        <div class="history-box">
            <h3>历史添加记录</h3>
            <div>
                <table class="history-table">
                    <thead>
                        <tr>
                            <td>供应商</td>
                            <td>邀请码</td>
                            <td class="status-td">状态</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tr>
                        <td>
                            <p class="text-tailor">问冷冻食品问冷冻食品有限公司问冷冻食品有限公司有限公司</p>
                        </td>
                        <td class="invite-code">V34</td>
                        <td class="status-td">添加成功</td>
                        <td>
                            <span class="icon-dustbin"></span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
      <Confirm :show-title="false" v-model="confirm">
        <div class="cancel-order">
          <i class="icon-plaint"></i>
          <p>删除供应商将会一并删除商品信息，<br />
            确定删除吗？</p>
        </div>
      </Confirm>
    </div>
</template>
<script>
  import {  Confirm } from 'vux'
  export default{
    data(){
      return {
          confirm : false,
          inviteCode : '',
          showInviteCode : false
      }
    },
    watch : {
      inviteCode(val){
          if( val != '' ){
              this.showInviteCode = true;
          }
      }
    },
    methods : {
      clearInviteCode(){
        this.inviteCode = '';
        this.showInviteCode = false;
      }
    },
    mounted(){

    },
    components : {
      Confirm
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import "../../assets/scss/common";
  body{
    background: none;
  }
  .line{
    height: px2rem(10);
    background: $color_efeff4;
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
  .invite-code{
    width: px2rem(150);
  }
  .status-td{
      width: px2rem(140);
  }
  .cancel-order{
    @extend .text_center;

    color:$color_333333;
    padding:px2rem(60) 0 px2rem(12) 0;
    p{
      font-size:px2rem(28);
      margin : px2rem(38) 0 0 0;
      line-height: px2rem(42);
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
  .text-tailor{
      width: px2rem(278);
      @include overflow_omit;
  }
  .addSupplier{
      font-size: px2rem(26);
      .header{
          padding: px2rem(26) 0 px2rem(105) px2rem(30);
          .wrap{
              line-height: px2rem(74);
              font-size: px2rem(28);
              overflow: hidden;
              border-bottom: 1px solid $color_efeff4;
              height: px2rem(74);
              padding: 0 px2rem(30) 0 0;
          }
          .input-wrap{
              @extend .relative;
          }
          .input{
              width:100%;
              padding:px2rem(18) 0;
              font-size: px2rem(28);
              line-height: 1.2em;
          }
        .input::-webkit-input-placeholder{
            color:$color_999999;
        }
      }
      .submit-btn{
          @extend .block;
          background: $color_0086d1;
          height:px2rem(80);
          @extend .text_center;
          line-height: px2rem(80);
          color:$white;
          font-size: px2rem(32);
          border-radius: px2rem(6);
          margin: px2rem(100) px2rem(30) 0 0;
      }
  }
  .history-box{
      @extend .text_center;
      h3{
          line-height: px2rem(80);
      }
      & > div{
          padding: 0 0 0 px2rem(30);
      }
      .history-table{
          width: 100%;
          text-align: left;
          tr{
              td{
                  border-bottom: 1px solid $color_efeff4;
              }
              line-height: px2rem(80);
              .icon-dustbin{
                  width: px2rem(92);
                  height: px2rem(80);
                  @extend .block;
                  background: url("../../assets/images/icon/icon-dustbin.png") no-repeat center;
                  background-size: px2rem(32) auto;
              }
          }
      }
  }
</style>
