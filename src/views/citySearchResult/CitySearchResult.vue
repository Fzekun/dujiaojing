<template>
  <div class="search-result">
    <header class="top-search">
      <div class="search-box flex">
        <label class="search-icon" for=""></label>
        <form class="flex_item" id="myform" action="" onsubmit="return false;">
          <input type="search" autocomplete="off" placeholder="输入城市名称或拼音" class="search-input">
        </form>
      </div>
    </header>
    <div class="select-result">
      <div class="search-result_bj"></div>
      <p>暂时未开通您要查找的城市！<br />
        如有意向合作可联系客服</p>
      <div class="btn-wrap">
        <div>
          <a href="tel:400-017-7916">
            联系客服：<span>400-017-7916</span>
          </a>
          <a href="">查看已开通的城市 >></a>
        </div>
      </div>
    </div>
  </div>

</template>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common';
  body{
      background: none;
  }
  .search-result{
      font-size: px2rem(26);
  }
  .top-search{
    padding: px2rem(18) px2rem(54) px2rem(18) px2rem(52);
    border-bottom: 1px solid $color_d9d9d9;
    .search-box{
      border:1px solid $color_d9d9d9;
      border-radius: px2rem(6);
      height: px2rem(59);
      .search-icon{
        width: px2rem(83);
        height: 100%;
        background: url("../../assets/images/icon/icon-classify_search.png") no-repeat px2rem(30) center;
        background-size: px2rem(30) auto;
      }

      .search-input{
        width: 100%;
        padding:0 px2rem(30) 0 0;
        font-size: px2rem(26);
        padding: px2rem(14) 0;
        /*height: 100%;*/
        line-height: 1em;
      }
    }
  }
  .btn-wrap{
    @extend .text_center;
    & > div{
      width: px2rem(430);
      @extend .inline_block;
    }
    a{
      span{
        color:$color_0086d1;
        text-decoration: underline;
      }
      width: 100%;
      border:1px solid $color_999999;
      border-radius: px2rem(10);
      height: px2rem(78);
      line-height: px2rem(78);
      font-size: px2rem(30);
      display: block;
      color: $color_333333;
      margin:0 0 px2rem(24) 0;
    }
  }
  .select-result{
    width: 100%;
    position: absolute;
    top:px2rem(98);
    bottom: 0;
    @extend .text_center;
    .search-result_bj{
        width: 100%;
        height: px2rem(204);
        background: url("../../assets/images/icon/icon-no_coupon.png") no-repeat center bottom;
        background-size:px2rem(131) auto;
    }
    & > p{
      line-height: px2rem(45);
      margin:px2rem(45) 0 px2rem(100) 0;
    }
  }
</style>
