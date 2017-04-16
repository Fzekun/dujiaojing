<template>
  <div class="search">
    <header class="top-search">
      <div class="search-box flex">
        <label class="search-icon" for=""></label>
        <form class="flex_item" id="myform" action="" onsubmit="return false;">
          <input type="search" autocomplete="off" placeholder="搜索店内商品" class="search-input">
        </form>
      </div>
      <a class="cancel" href="javascript:;">取消</a>
    </header>
    <div class="history-search">
        <header class="search-header">
            <h3 class="search-title">搜索历史</h3>
            <i class="icon-dustbin"></i>
        </header>
        <div class="content">
           <a href="" v-for="n in 5">牛肉丸</a>
        </div>
    </div>
    <div class="line"></div>
    <div class="hot-search">
      <header class="search-header">
        <h3 class="search-title">热门搜索</h3>
      </header>
      <div class="content">
        <a href="" v-for="n in 5">牛肉丸</a>
      </div>
    </div>

  </div>
</template>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common';
  body{
      background: none;
  }
  .line{
      height: px2rem(10);
      background: $color_efeff4;
  }
  .search{
      font-size: px2rem(26);
  }
  .icon-dustbin{
      position: absolute;
      width:px2rem(32);
      right: px2rem(30);
      top:0;
      height: 100%;
      background: url("../../assets/images/icon/icon-dustbin.png") no-repeat center;
      background-size: px2rem(32) auto;
  }
.history-search{
    padding:px2rem(26) 0 0 px2rem(30);
    .search-title{
        background: url("../../assets/images/icon/icon-time.png") no-repeat left center;
        background-size: px2rem(37) auto;
    }
}
.hot-search{
  padding:0 0 0 px2rem(30);
  .search-title{
    background: url("../../assets/images/icon/icon-search_hot.png") no-repeat left center;
    background-size: px2rem(34) auto;
  }
}
.content{
    padding: px2rem(30) 0 0 0;
    overflow: hidden;
    & > a{
        float: left;
        margin: 0 px2rem(30) px2rem(30) 0;
        background: $color_efeff4;
        border-radius: px2rem(6);
        line-height: px2rem(54);
        padding:0 px2rem(25);
        color: $color_333333;
    }
}
.search-header{
    @extend .relative;
    height: px2rem(94);
    border-bottom: 1px solid $color_efeff4;
}
.search-title{
    line-height: px2rem(94);
    font-weight: bold;
    padding: 0 0 0 px2rem(52);
    height: 100%;
}
  .top-search{
    padding: px2rem(18) px2rem(114) px2rem(18) px2rem(52);
    border-bottom: 1px solid $color_d9d9d9;
    @extend .relative;
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
        padding: px2rem(14) px2rem(30) px2rem(14) 0;
        /*height: 100%;*/
        line-height: 1em;
      }
    }
    .cancel{
      @extend .absolute;
      height: 100%;
      top:0;
      right: 0;
      width: px2rem(114);
      line-height: px2rem(98);
      font-size: px2rem(28);
      @extend .text_center;
      color:$color_333333;
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
</style>
