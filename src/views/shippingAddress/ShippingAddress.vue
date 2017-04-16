<template>
  <div>
    <div class="receiving_info-box" v-for="item in data">
      <div class="address-box">
        <div class="wrap">
          <h3>
            <span class="float_left bold">张亮</span>&nbsp;
            <span class="float bold">13718163294</span>
          </h3>
          <p></p>
          <p class="gray_color">北京市朝阳区西单北大街号西单图书大厦单北大
            街66号西单图书大厦</p>
          <a href="javascript:;" class="icon-edit"></a>
          <a href="javascript:;" class="icon-dustbin"></a>
          <p v-if="item.check == false" class="check">设为默认</p>
          <p v-else class="check on">设为默认</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
          data : [
            {
                check : true
            },
            {
              check : false
            },
            {
              check : false
            },
          ]
      }
    },
    components : {

    },
    mounted(){

    },
    methods : {
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import "../../assets/scss/common";
  body{
      background: none;
  }
  .icon-edit{
    @extend .absolute;
    width: px2rem(29);
    height: px2rem(29);
    background: url("../../assets/images/icon/icon-edit_gray.png") no-repeat;
    background-size: 100% auto;
    right: px2rem(30);
    top:px2rem(15);
  }
  .icon-dustbin{
    @extend .absolute;
    width: px2rem(32);
    height: px2rem(31);
    background: url("../../assets/images/icon/icon-dustbin.png") no-repeat;
    background-size: 100% auto;
    right: px2rem(30);
    top:px2rem(84);
  }
  .receiving_info-box{
    .address-box{
      @extend .relative;
      border-bottom: 1px solid $color_efeff4;
      padding: 0 0 px2rem(80) 0;
    }
    a{
      color:$color_333333;
    }
    padding: px2rem(15) 0 0 px2rem(30);
    @extend .bg_white;
    overflow: hidden;
    .wrap{
      padding: 0 px2rem(86) 0 px2rem(60);
      @extend .relative;
      background: url("../../assets/images/icon/icon-location_gray.png") no-repeat left center;
      background-size:px2rem(32) auto;
      h3{
        font-size: px2rem(28);
        line-height: px2rem(60);
      }
      p{
        line-height: px2rem(40);

      }
    }
  }
  .check{
    width: px2rem(160);
    @extend .text_right;
    background: url("../../assets/images/icon/icon-check.png") no-repeat left center;
    background-size: px2rem(36) auto;
    @extend .absolute;
    top: px2rem(138);
    right: px2rem(30);
    line-height: px2rem(36);
    font-size: px2rem(26);
    color: $color_999999;
  }
  .check.on{
    background: url("../../assets/images/icon/icon-check_on.png") no-repeat left center;
    background-size: px2rem(36) auto;
  }
</style>
