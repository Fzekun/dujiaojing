<template>
    <div class="select-city">
        <header class="top-search">

        </header>
        <div class="line"></div>
    </div>
</template>
<script>

  export default {
      data(){
          return {

          }
      },
      mounted : function(){
      },
      methods : {

      },
      components : {
      }
  }
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common';
  body{
      background: none;
  }
  .line{
      height: px2rem(10);
      background: $color_efeff4;
  }
  .help-center{

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
