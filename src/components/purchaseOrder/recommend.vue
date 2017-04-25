<template>
  <!--推荐 start -->
  <div class="recommend-wrap">
    <header>
      <h2>为您推荐</h2>
    </header>
    <mt-loadmore
      :bottom-distance="50"
      @bottom-status-change="handleBottomChange"
      ref="loadmore"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
    >
      <div class="recommend-list">
        <ul>
          <li v-for="item in items">
            <a href="">
              <div class="img-wrap">
                <img src="../../assets/images/commodity.jpg" alt="">
              </div>
              <div class="text-wrap">
                <p>{{ item.name }}</p>
                <p class="rule">{{ item.text }}</p>
                <p class="price">￥{{item.price}}</p>
              </div>
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <div slot="bottom" class="loadmore-bottom">
        <!--<span>{{ bottomStatus }}</span>-->
        <p class="loading-text" v-show="bottomStatus !== 'loading'">{{statusText}}</p>
        <p class="bottom-loading" v-show="bottomStatus === 'loading'" :class="{ loading : bottomStatus === 'loading' }"></p>
      </div>
    </mt-loadmore>
  </div>
  <!--推荐 end -->
</template>
<script>
    export default{
      data(){
          return {
              allLoaded : false,
              bottomStatus : 'pull',
              statusText : '上拉加载更多',
              items : [
                {
                  name : '兴客坊小小玉汤圆',
                  price : '92.00',
                  text : '小汤圆'
                },
                {
                  name : '兴客坊小小玉汤圆',
                  price : '92.00',
                  text : '小汤圆'
                }
              ]
          }
      },
      methods : {
        loadBottom(id){
          this.statusText = 'loading...';
          this.bottomStatus = 'loading';
          setTimeout(()=>{
            this.items.push({
              name: 1,
              price: 1,
              text: 1
            })
            this.bottomStatus = 'pull';
            this.$refs.loadmore.onBottomLoaded(id);
          },500)
        },
        handleBottomChange(status){
          if( status == 'drop' ){
            this.statusText = '释放刷新';
          }
          if( status == 'pull' ){
            this.statusText = '上拉加载更多';
          }
        }
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/base/necessary.scss';
  /* 上拉加载更多 */
  .loadmore-bottom{
    width: 100%;
    @extend .text_center;
  }
  .loading-text{
    font-size: px2rem(26);
    line-height: px2rem(48);
  }
  .bottom-loading{
    width: 100%;
    height: px2rem(124);
  }
  .bottom-loading.loading{
    background: url("../../assets/images/icon/loading_gray.gif") no-repeat center;
    background-size: px2rem(128) auto;
  }
  @mixin header{
    height:px2rem(80);
    @extend .relative;
    border-bottom: 1px solid $color_efeff4;
    background:$white url("../../assets/images/icon/icon-header_line.png") no-repeat center center;
    background-size:px2rem(375) auto;
    h2{
      @extend .text_center;
      font-size:px2rem(28);
      line-height:px2rem(80);
      font-weight:bold;
      color:$color_0086d1;
    }
    i{
      @extend .absolute;
      width:px2rem(32);
      height:px2rem(32);
      right:px2rem(30);
      top:px2rem(24);
      background:url("../../assets/images/icon/icon-more.png") no-repeat;
      background-size:100% auto;
    }
  }
  /*为您推荐*/
  .recommend-wrap{
    padding:0 0 px2rem(170) 0;
    & > header{
      @include header;
      position: relative;
    }
    .recommend-list{
      padding: px2rem(2) 0 0 0;
      ul{
        overflow: hidden;

      }
      li:nth-of-type(2n){
        float:right;
      }
      li{
        background:$white;
        width:px2rem(369);
        float:left;
        margin:0 0 px2rem(10) 0;
        .img-wrap{
          width:px2rem(369);
          height:px2rem(369);
          overflow:hidden;
          margin:0 0 px2rem(8) 0;
          img{
            width:100%;
          }
        }
        .text-wrap{
          padding: 0 0 px2rem(8) px2rem(26);
          color:$color_333333;
          font-size:px2rem(26);
          line-height:px2rem(34);
          p.rule{
            color:$color_999999;
            font-size:px2rem(24);
          }
          p.price{
            color:$color_e94738;
          }
        }
      }
    }
  }
</style>
