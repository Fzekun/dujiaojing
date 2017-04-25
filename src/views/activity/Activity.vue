<template>
  <div>
    <header class="header">
      <img src="../../assets/images/activity-banner.jpg" alt="">
    </header>
    <div class="recommend-wrap">
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
  </div>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
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

    },
    computed : {
        swiper () {
            return this.$refs.mySwiper.swiper
        }
    },

    components: {
        swiper,
        swiperSlide
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
/* 常用采购 为您推荐 头部通用样式 */
$color_ffeaca:#ffeaca;
body{
  background: $color_ffeaca;
}
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
.header{
  width: 100%;
  height: px2rem(200);
  margin:0 0 px2rem(10) 0;
  img{
      width: 100%;
  }
}
/*常用采购*/
.like-wrap{
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

/*为您推荐*/
.recommend-wrap{
  padding:0 0 px2rem(170) 0;
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
