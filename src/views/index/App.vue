<template>
  <div id="home">
    <div class="top-fixed">
      <div class="search-container">
        <div class="search-box">
          <div class="search-tb">
              <div class="location-box">
                <i class="icon-location"></i>
                <div class="city-name">北京</div>
              </div>
              <div class="search-form">
                  <i class="search-icon"></i>
                  <input type="text" placeholder="请输入品牌/名称" class="search-input flex_item" />
              </div>
          </div>
        </div>
      </div>
    </div>

    <swiper :options="swiperOption" class="swiper-box" ref="mySwiper">
      <swiper-slide :key="banner.id" class="swiper-slide" v-for="banner in banners">
        <img width="100%" height="100%" class="swiper-lazy" :data-src="banner.src">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <div class="pagination"  slot="pagination"></div>
    </swiper>
     <!-- 菜单导航 start -->
      <nav class="nav">
          <div class="flex_item">
            <a href="">
              <i class="icon sale_price"></i>
              <p>今日特价</p>
            </a>
          </div>
          <div class="flex_item">
              <a href="" >
                  <i class="icon shop"></i>
                  <p>店铺列表</p>
              </a>
          </div>
          <div class="flex_item">
            <a href="" >
              <i class="icon collect"></i>
              <p>我的收藏</p>
            </a>
          </div>
          <div class="flex_item">
            <a href="">
              <i class="icon coupon"></i>
              <p>优惠券</p>
            </a>
          </div>
      </nav>
      <!-- 菜单导航 end -->
      <!-- 常用采购 start -->
      <div class="like-wrap">
          <header>
                <h2>常用采购</h2>
                <i class="icon more"></i>
          </header>
          <section class="scroll">
            <!--<scroller lock-y bounce="true">-->
                <ul>
                    <li v-for="item in imgUrl">
                        <a href="">
                            <div class="img-wrap">
                              <img class="img_lazyload" v-lazy="item.src" v-bind:data-image="item.src" alt="">
                            </div>
                            <p>湘海鱼豆腐深海鱼豆腐</p>
                            <span>￥92.00</span>
                        </a>
                    </li>
                </ul>
            <!--</scroller>-->
          </section>
      </div>
     <!-- 新品推荐 end -->
     <!-- 广告位 start -->
     <article class="layout-wrap">
         <a href="">
           <img src="../../assets/images/home-banner.jpg" alt="">
         </a>
     </article>
     <!-- 广告位 end -->
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
    <common-footer footerIndex="0"></common-footer>
  </div>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import CommonFooter from '../../components/Footer.vue'
//import { Scroller } from 'vux'
//import {mapGetters} from 'vuex'
//import store from '../../vuex/store'
export default {
    data () {
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
              },
            ],

            imgUrl : [
              {src: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t4369/155/128227152/185232/5850cae7/58afd6d7N9a85cd2a.jpg!q70.jpg'},
              {src: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t4522/123/1287527911/687997/74114c3/58dc7d90Nb4e829ee.jpg!q70.jpg'},
              {src: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2446/334/703711352/170484/1b2a12fe/56244995N94da3e99.jpg!q70.jpg'},
              {src: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t4780/10/116681089/227571/10334ff7/58db17c7Nb97bab14.jpg!q70.jpg'},
              {src: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2146/123/360714867/93332/1a0862a4/56021f61N7bd76e30.jpg!q70.jpg'},
              {src: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t4138/183/1043579425/278490/4fec9821/58bcf011N5ecdc847.jpg!q70.jpg'},
              {src: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t3115/130/9569739799/224720/5f23eb12/58d49740Nf231e223.jpg!q70.jpg'},
              {src: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t4006/169/1231007775/110300/508e33bd/586f2d25Na454ee3f.jpg!q70.jpg'}
            ],
            banners: [
              {
                 src : 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t4315/190/3614979833/76936/e1529360/58e4b8ddN253a798c.jpg!q70.jpg'
              },
              {
                src : 'https://img1.360buyimg.com/da/jfs/t4561/198/1413497574/98462/112283f3/58de2138N6a3a66ce.jpg'
              },
              {
                src : 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t4285/45/3551172402/46267/9b056330/58e451bdNf4896361.jpg!q70.jpg'
              }
            ],
            swiperOption: {
                swiperSlides: 0,
                //autoplay: 5000,
                //loop : true,
                autoplayDisableOnInteraction: true,
                //notNextTick: true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,
                lazyLoading : true,
                pagination: '.pagination',//分页容器的css选择器
                paginationType : 'custom',
                paginationCustomRender: function (swiper, current, total) {
                    var _html = '';
                        _html += '<div class="">';
                    for (var i = 1; i <= total; i++) {
                        if (current == i) {
                            _html += '<span class="active"></span>';
                        }else{
                            _html += '<span></span>';
                        }
                    }
                    _html += '</div>';
                    return _html;//返回所有的页码html
                }
            }
        }
    },
    mounted : function(){
        var searchBox = document.querySelector('.search-box');
        window.addEventListener('scroll',function(){
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
              opcaity = 0,
              step = scrollTop / 100;
            if( step > 1 ){
                opcaity = 1;
                searchBox.classList.add('active');
            }else{
                opcaity =  step;
                searchBox.classList.remove('active');
            }
            searchBox.style.background='rgba(255,255,255,'+opcaity+')';

        },false);
    },
    computed : {
        swiper () {
            return this.$refs.mySwiper.swiper
        }
    },
    name: 'index',

    components: {
        swiper,
        swiperSlide,
        CommonFooter
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
@import '../../assets/scss/common.scss';
@import "../../assets/scss/iscroll.scss";
$radius : px2rem(25);
/* 常用采购 为您推荐 头部通用样式 */
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
  border-radius: $radius $radius 0 0;
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
.top-fixed{
  position:fixed;
  left:0;
  top:0;
  width:100%;
  z-index: 99;
  height:px2rem(80);
  .search-container{
    position: absolute;
    width:100%;
    height:100%;
  }
}
.search-box.active{
  border-bottom: 1px solid $color_d9d9d9;
  .icon-location{
    background:url("../../assets/images/icon/icon-location_on.png") no-repeat;
    background-size:100% auto;
  }
  .search-icon{
    background:url("../../assets/images/icon/icon-search_on.png") no-repeat right center;
    background-size: px2rem(27) auto;
  }
  .city-name{
    color:$color_333333;
  }
  .search-input::-webkit-input-placeholder{
    color:$color_999999;
  }
}

.search-box{
   width:100%;
   height:px2rem(80);
   position: relative;
   border-bottom: 1px solid transparent;
  .icon-location{
    background:url("../../assets/images/icon/icon-location.png") no-repeat;
    background-size:100% auto;
  }
  .search-icon{

    background:url("../../assets/images/icon/icon-search.png") no-repeat right center;
    background-size: px2rem(27) auto;
  }
  .city-name{
    color:$white;
  }

   .search-tb{
      height:px2rem(68);
      position: relative;
      padding:px2rem(12) px2rem(30) 0 px2rem(30);

   }
  .search-form{
     height:px2rem(50);
     border-radius: px2rem(8);
     margin: 0  0  0 px2rem(145);
     background: rgba(238,238,238,.55);
     @extend .flex;
  }
  .search-icon{
     float:left;
     width:px2rem(190);
     height:px2rem(50);
  }
  .search-input{
      height:px2rem(26);
      padding:px2rem(12) 0;
      line-height: 1.2em;
      margin: 0 0 0 px2rem(14);
      font-size: px2rem(26);
      text-align: left;
  }
  .search-input::-webkit-input-placeholder{
    color:$white;
  }
  .city-name{
    font-size:px2rem(26);
    float:left;
    @include overflow_omit;
  }
  .icon-location{
    width:px2rem(29);
    height:px2rem(38);
    float: left;
    margin:px2rem(6) px2rem(12) 0 px2rem(0);

  }
  .location-box{
    height:px2rem(50);
    width:px2rem(145);
    line-height: px2rem(50);
    position: absolute;
  }

}
.swiper-box{
  width: 100%;
  height:px2rem(276);
  .swiper-slide{
    background: $black;
    img{
      width:100%;
    }
  }
}

.nav{
    width:100%;
    background-color: $white;
    height : px2rem(192);
    margin:0 0 px2rem(20) 0;
    border-radius: 0 0 $radius $radius;
    @extend .flex;
}
.flex_item{
    @extend .text_center;
    .icon{
        @extend .inline_block;
        background-size:100% auto;
        width:px2rem(90);
        height:px2rem(90);
    }
    p{
        line-height:px2rem(66);
    }
    a{
        width:px2rem(120);
        color:$color_333333;
        @extend .inline_block;
        @extend .text_center;
        margin:px2rem(26) 0 0 0;
    }
}
.sale_price{
    background:url("../../assets/images/icon/icon-sale_price.png") no-repeat;
}
.shop{
    background:url("../../assets/images/icon/icon-shop.png") no-repeat;
}
.collect{
    background:url("../../assets/images/icon/icon-collect.png") no-repeat;
}
.coupon{
    background:url("../../assets/images/icon/icon-coupon.png") no-repeat;
}

.pagination{
    @extend .absolute;
    @extend .text_center;
    z-index: 999;
    height:px2rem(36);
    & > div{
        @extend .inline_block;
    }
    span{
        width:px2rem(12);
        height:px2rem(12);
        background:rgba(255,255,255,.55);
        float:left;
        margin:0 px2rem(14) 0 0;
        border-radius:50%;
        //background-color:$color_c7effb;
    }
    span.active{
        background-color:$white;

    }
}
/*常用采购*/
.like-wrap{
    background: $white;
    border-radius: $radius $radius 0 0;
    & > header{
      @include header;
    }
    .scroll{
        height:px2rem(264);
        overflow: hidden;
        ul{
          height: px2rem(254);
          padding:px2rem(20) px2rem(20) 0 px2rem(20);
          overflow-x: auto;
          white-space: nowrap;
          font-size: 0;
          -webkit-overflow-scrolling: touch;
        }
        li:last-child{
          margin:0;
        }
        li{
           @extend .inline_block;
           margin:0 px2rem(46) 0 0;
           width:px2rem(160);
           .img-wrap{
             width:px2rem(160);
             height:px2rem(160);
             overflow: hidden;
             margin:0 0 px2rem(8) 0;
           }
           img{
             width: 100%;
           }
           p{
             width:px2rem(160);
             font-size:px2rem(26);
             line-height: px2rem(32);
             color: $color_333333;
             @include overflow_omit;
           }
           span{
             font-size:px2rem(24);
             line-height: px2rem(30);
             color:$color_e94738;
           }
        }
    }
}

/*广告位*/
.layout-wrap{
    width:100%;
    height:px2rem(150);
    overflow: hidden;
    margin:px2rem(20) 0;
    img{
       width:100%;
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
      background:$color_efeff4;
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


/*img lazyload style*/
.img_lazyload{
  &[lazy=loading]{
    background:url(../../assets/images/icon/lazy_load_loading.png) scroll no-repeat center center;
    background-size: px2rem(124) auto;
  }
  &[lazy=error]{

  }
  &[lazy=loaded]{

  }
}
</style>
