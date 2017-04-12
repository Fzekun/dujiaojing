<template>
  <div class="account-control">
      <header class="account-header">
          <a href="">
            <div class="img-wrap float_left">
                <img src="../../assets/images/avatar2.png" alt="">
            </div>
            <div class="text-wrap float_left">
                <h3>川香火锅</h3>
                <p>点击可修改店铺信息</p>
            </div>
            <i class="u-icon-arr"></i>
          </a>

      </header>
      <div class="division"></div>
      <div class="content">
          <a href="javascript:;">
            <p>
              <span class="float_left">会员账号</span>
              <span class="float_right">1312312312312</span>
            </p>
          </a>
          <a href="">
            <p>
              <span class="float_left">会员身份</span>
              <span class="float_right">终端商</span>
            </p>
          </a>
          <a href="javascript:;">
            <p>
              <span class="float_left">会员级别</span>
              <span class="float_right">注册会员</span>
            </p>
          </a>
          <a href="">
            <p>收货地址变更</p>
            <i class="u-icon-arr"></i>
          </a>
          <a href="">
            <p>密码修改</p>
            <i class="u-icon-arr"></i>
          </a>
          <a href="">
            <p>账号与安全</p>
            <i class="u-icon-arr"></i>
          </a>
      </div>
      <div class="btn-wrap">
        <a href="" class="btn-login_out">登录</a>
      </div>
      <common-footer footerIndex="4"></common-footer>
  </div>
</template>
<script>
  import CommonFooter from '../../components/Footer.vue'
  export default{
    data(){
      return {

      }
    },
    mounted(){

    },
    components : {
      CommonFooter
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import "../../assets/scss/common";
  body{
    background: none;
  }
  .account-control{
      font-size: px2rem(28);
      .account-header{
          overflow: hidden;
          a{
              color: $color_333333;
              @extend .block;
              @extend .relative;
              overflow: hidden;
              .u-icon-arr{
                  top:px2rem(78);
              }
              padding: px2rem(28) px2rem(30) px2rem(28) px2rem(30);
              .img-wrap{
                  width: px2rem(124);
                  height: px2rem(124);
                  margin: 0 px2rem(22) 0 0;
                  border-radius: 50%;
                  img{
                      width: 100%;
                  }
              }
              .text-wrap{
                  padding: px2rem(20) 0 0 0;
                  h3{
                      line-height: px2rem(42);
                  }
                  p{
                      font-size: px2rem(26);
                      line-height: px2rem(40);
                      color:$color_999999;
                      padding: 0 px2rem(46) 0 0;
                      background: url("../../assets/images/icon/icon-edit.png") no-repeat right px2rem(4);
                      background-size: px2rem(29) auto;
                  }
              }
          }

      }
  }
  .division{
    height: px2rem(10);
    width: 100%;
    background:$color_efeff4;
  }
  .u-icon-arr
  {
    position: absolute;
    top: px2rem(30);
    right: px2rem(35);
    width: px2rem(17);
    height: px2rem(17);
    border-style: solid;
    border-width: px2rem(3) px2rem(3) 0 0;
    border-color: $color_9a9899;
    -webkit-transform-origin: center center;
    -webkit-transform: rotateZ(45deg);
  }
  .content{
      padding: 0 0 0 px2rem(30);
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
  .btn-wrap{
    padding: px2rem(100) px2rem(30) 0 px2rem(30);
    .btn-login_out{
      @extend .block;
      border-radius: px2rem(6);
      background: $color_0086d1;
      @extend .text_center;
      color:$white;
      font-size:px2rem(32);
      line-height: px2rem(80);
      height:px2rem(80);
    }
  }
</style>
