<template>
  <div class="recommend-wrap">
    <!--<mt-loadmore-->
    <!--:bottom-distance="50"-->
    <!--@bottom-status-change="handleBottomChange"-->
    <!--ref="loadmore"-->
    <!--:bottom-method="loadBottom"-->
    <!--:bottom-all-loaded="allLoaded"-->
    <!--&gt;-->
    <div class="recommend-list">
      <ul>
        <li v-for="item in items">
          <div class="content flex">
            <div class="img-wrap">
              <a href="">
                <img src="../../assets/images/commodity.jpg" alt="">
              </a>
              <i class="icon-factory icon-tag">厂</i>
            </div>
            <div class="text-wrap flex_item">
              <div class="text-box">
                <h3>叶问冷冻食品有限公司XXXXXXXX123</h3>

                <p class="delivery-price"><span>起</span>¥200.00</p>
              </div>
              <div class="buy_throw-wrap">
                <i class="icon-t-arr"></i>
                <div class="buy_throw-box">
                  <header class="header">
                    <span class="label">买搭</span>
                    <span>部分商品买100件搭赠10件</span>
                  </header>
                  <div class="buy_throw-list">
                    <ul>
                      <li>
                        <a href="">
                          <img src="../../assets/images/classify-good.png" alt="">
                          <p>￥200.00</p>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="../../assets/images/classify-good.png" alt="">
                          <p>￥200.00</p>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="../../assets/images/classify-good.png" alt="">
                          <p>￥200.00</p>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="../../assets/images/classify-good.png" alt="">
                          <p>￥200.00</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="line_10"></div>
        </li>
      </ul>
    </div>
    <!--<div slot="bottom" class="loadmore-bottom">-->
    <!--&lt;!&ndash;<span>{{ bottomStatus }}</span>&ndash;&gt;-->
    <!--<p class="loading-text" v-show="bottomStatus !== 'loading'">{{statusText}}</p>-->
    <!--<p class="bottom-loading" v-show="bottomStatus === 'loading'" :class="{ loading : bottomStatus === 'loading' }"></p>-->
    <!--</div>-->
    <!--</mt-loadmore>-->
  </div>
</template>
<script>
  export default{
      data(){
          return {
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
              },
            ]
          }
      }
  }
</script>
