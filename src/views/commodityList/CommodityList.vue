<template>
  <div class="commodityList-box">
    <div class="search-wrap">
      <div class="search-box flex">
        <label class="search-icon" for=""></label>
        <input type="text" placeholder="请输入品牌/名称" class="search-input flex_item">
      </div>
    </div>
    <div class="screen-box">
      <div class="flex">
        <v-touch ref="tab" tag="a" :key="item.id" :class="{ active : index == active }" v-for="(item,index) in tabs" href="javascript:;" class="flex_item" v-on:tap="tabsHandles(item,index)"><span :class="{ sort : index == 2 }">{{ item.text }}</span></v-touch>
      </div>
      <div class="brand-box" v-show="brandShow">
          <div class="content">
            <v-touch tag="a" :key="item.id" v-for="item in brands" :class="{ active : item.select }" v-on:tap="brandHandles(item)">{{ item.text }}</v-touch>
            <!--<a href="" v-for="n in 9">安井</a>-->
          </div>
          <div class="btn-wrap">
            <a href="" class="reset">重置</a>
            <a href="" class="confirm">确定</a>
          </div>
      </div>
    </div>
    <div class="commodity-box">

      <div class="commodity-wrap">
        <div>
          <ul class="commodity-list">
            <li v-for="data in datas">
              <a href="">
                <div class="img-wrap float_left">
                  <img src="../../assets/images/classify-good.png" alt="">
                  <i class="repertory"></i>
                </div>
                <div class="text-wrap float_left">
                  <h3>{{ data.name }}</h3>
                  <p class="gray_color">规格：{{ data.dimension }}</p>
                  <p class="gray_color delivery-price"><i class="float_left icon-psf">起</i>{{ data.deliveryPrice }}</p>
                  <p class="price red_color">{{ data.price }}</p>
                </div>
              </a>
              <div class="collect-wrap">
                <i v-if="data.collect == false" class="icon-star"></i>
                <i v-else class="icon-star active"></i>
              </div>

              <div class="add-wrap">
                <add-number :restriction="data.restriction" ref="input" :number="data.input" v-on:compute="addTotal"></add-number>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <toast v-model="toast" @on-hide="hideToast" type="text" width="4.8rem"  position="middle" :time="1000">
      <div class="toast-content">
        <div class="toast-bj"></div>
        <p>最多购买{{ restriction }}件</p>
      </div>
    </toast>
    <common-footer footerIndex="1"></common-footer>
  </div>
</template>

<script>
  import CommonFooter from '../../components/Footer.vue'
  import { ViewBox,Toast } from 'vux'
  import AddNumber from '../../components/pubilc/AddNumber.vue'
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        active : 0,
        brandShow : false,
        brands : [
          {
            text : '安井',
            select : false
          },
          {
            text : '安井',
            select : false
          },
          {
            text : '安井',
            select : false
          },
          {
            text : '安井',
            select : false
          }
        ],
        tabs : [
          {
              text : '全部'
          },
          {
              text : '销量'
          },
          {
              text : '价格'
          },
          {
              text : '品牌'
          }
        ],
        orderTotal : 0,
        cellect : true,
        datas : [
          {
            name : '冰川带鱼冰川带带鱼',
            dimension : '12122.15kg/袋',
            deliveryPrice : '100000',
            price : '￥14145.00',
            collect : false,
            input : 1,
            //限购
            restriction : 100
          },
          {
            name : '冰川带鱼冰川带带鱼',
            dimension : '12122.15kg/袋',
            deliveryPrice : '100000',
            price : '￥14145.00',
            collect : false,
            input : 1,
            restriction : false
          }
        ]
      }
    },
    mounted : function(){

    },
    computed : {
      ...mapGetters({
        toast : 'toast',
        restriction : 'restriction'
      })
    },

    components: {
      CommonFooter,
      ViewBox,
      AddNumber,
      Toast
    },
    methods : {
      addTotal(){
        var input = this.$refs.input;
        this.orderTotal = 0;
        input.forEach((item)=>{
          this.orderTotal += parseInt(item.value,10);
        });
        this.$store.dispatch( 'computeOrderTotal', this.orderTotal );
      },
      hideToast(){
        this.$store.dispatch('hideToast');
      },
      tabsHandles(item,index){
        var tabs = this.$refs.tab;
          this.active = index;
          if( index == 2 ){
            tabs[index].$el.classList.toggle('bottom');
          }
      },
      brandHandles( item ){
        item.select = !item.select;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common.scss';
  body{
    background: $white;
  }
  .brand-box{
    @extend .absolute;
    width: 100%;
    top:px2rem(81);
    z-index: 100;
    background: $white;
    left:0;
    /*min-height: px2rem(474);*/
    .btn-wrap{
        width:100%;
        height: px2rem(98);
        & > a{
            @extend .float_left;
            width: 50%;
            height: 100%;
            font-size: px2rem(32);
            line-height: px2rem(98);
            @extend .text_center;
        }
      .reset{
          background: $color_ececec;
          color:$color_333333;
      }
      .confirm{
        background: $color_0086d1;
        color:$white;
      }
    }
    .content{
        padding:px2rem(40) px2rem(30) px2rem(44) px2rem(30);
        font-size: 0;
        & > a:nth-child(3n){
          margin-right:0;
        }
        & > a{
            @extend .inline_block;
            font-size: px2rem(28);
            width: px2rem(186);
            height: px2rem(52);
            border:1px solid $color_d9d9d9;
            @extend .text_center;
            line-height: px2rem(52);
            color:$color_333333;
            border-radius: px2rem(4);
            margin:0 px2rem(60) px2rem(40) 0;
        }
        & > a.active{
            border-color:$color_0086d1;
            color:$color_0086d1;
        }
    }
  }
.screen-box{
  height: px2rem(80);
  border-bottom: 1px solid $color_d9d9d9;
  line-height: px2rem(80);
  @extend .relative;
  a{
    color:$color_333333;
    font-size: px2rem(28);
    @extend .text_center;
    .sort{
        background:url("../../assets/images/icon/icon-sort.png") no-repeat right center;
        background-size:px2rem(13) auto;
        @extend .inline_block;
        width: px2rem(86);
    }
  }
  a.active .sort{
    background:url("../../assets/images/icon/icon-sort_top.png") no-repeat right center;
    background-size:px2rem(13) auto;
  }
  a.active.bottom .sort{
    background:url("../../assets/images/icon/icon-sort_bottom.png") no-repeat right center;
    background-size:px2rem(13) auto;
  }
  a.active{
    color:$color_0086d1;
  }
}
  .toast-content{
    width: px2rem(360);
    height: px2rem(202);
    .toast-bj{
      height: px2rem(110);
      background: url("../../assets/images/icon/icon-plaint_white.png") no-repeat center bottom;
      background-size: px2rem(83) auto;
    }
    p{
      line-height: px2rem(84);
    }
  }
  .gray_color{
    color:$color_999999;
  }
  .red_color{
    color:$color_e94738;
  }
  .commodityList-box{
    font-size: px2rem(26);
  }
  .search-wrap{
    padding:px2rem(18) px2rem(54) px2rem(18) px2rem(54);
    border-bottom: 1px solid $color_d9d9d9;
    .search-box{
      border:1px solid $color_d9d9d9;
      border-radius: px2rem(6);
      height: px2rem(59);
      .search-icon{
        width: px2rem(118);
        height: 100%;
        background: url("../../assets/images/icon/icon-classify_search.png") no-repeat px2rem(30) center;
        background-size: px2rem(30) auto;
      }
      .search-input{
        line-height: 1.4em;
      }
    }
  }
  .commodity-box{
    padding:0 0 0 0;
    .add-wrap{
      @extend .absolute;
      right:px2rem(30);
      top:px2rem(130);
      width: 100%;
    }

    .commodity-wrap{
      padding: 0 0 0 px2rem(18);
    }
    .commodity-list{
      li{
        padding: 0 px2rem(30) px2rem(22) 0;
        overflow: hidden;
        @extend .relative;

        .collect-wrap{
          @extend .absolute;
          right:px2rem(30);
          top:px2rem(30);
          width: px2rem(29);
          height: px2rem(29);
          .icon-star{
            @extend .block;
            width: px2rem(29);
            height: px2rem(29);
            background: url("../../assets/images/icon/icon-classify_star.png") no-repeat;
            background-size: 100% auto;
          }
          .icon-star.active{
            background: url("../../assets/images/icon/icon-classify_star_on.png") no-repeat;
            background-size: 100% auto;
          }
        }
        & > a{
          color:$color_333333;
        }
        border-bottom: 1px solid $color_efeff4;
        .img-wrap{
          width: px2rem(150);
          height: px2rem(150);
          margin : px2rem(40) px2rem(19) 0 0;
          border:1px solid $color_d9d9d9;
          @extend .relative;
          img{
            width: 100%;
          }
          /*.repertory{
            @extend .absolute;
            top:0;
            right:0;
            width: px2rem(68);
            height: px2rem(70);
            background: url("../../assets/images/icon/icon-buy.png") no-repeat;
            background-size:100% auto;
          }*/
        }
        .text-wrap{
          margin: px2rem(30) 0 0 0;
          width: px2rem(252);

          h3{
            line-height: px2rem(42);
            @include overflow_omit;
          }
          p{
            line-height: px2rem(40);
            @include overflow_omit;
          }
          .delivery-price{
            line-height: px2rem(46);
            overflow: hidden;
            font-size: px2rem(24);
          }
          .icon-psf{
            background: $color_e99314;
            width: px2rem(29);
            height: px2rem(29);
            color:$white;
            line-height: px2rem(28);
            @extend .text_center;
            border-radius: px2rem(5);
            font-size: px2rem(22);
            @extend .block;
            margin: px2rem(9) px2rem(10) 0 0;
          }
          .price{
            line-height: px2rem(46);
          }
        }
        .dimension{
          line-height: px2rem(40);
        }
      }
    }
  }
  .icon-tag{
    position: absolute;
    top:0;
    right:0;
    width: px2rem(37);
    height: px2rem(44);
    font-size: px2rem(28);
    line-height: px2rem(36);
    @extend .text_center;
    color:$white;
  }
  .icon-factory{
    background: url("../../assets/images/icon/icon-factory.png") no-repeat;
    background-size: 100% auto;
  }
  .icon-supplier{
    background: url("../../assets/images/icon/icon-supplier.png") no-repeat;
    background-size: 100% auto;
  }
</style>
