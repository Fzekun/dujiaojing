<template>
  <div class="classify-box">
    <div class="menu">
        <div>
          <view-box body-padding-bottom="0">

            <ul>
              <li>
                <a href="javascript:;" class="title">全部</a>
              </li>
              <li>
                <a href="javascript:;" class="title">冷鲜水产</a>
                <ul>
                  <li>虾类</li>
                  <li>蟹类</li>
                  <li>蛙类</li>
                  <li>其他</li>
                </ul>
              </li>
            </ul>
          </view-box>
        </div>
    </div>
    <common-footer footerIndex="1"></common-footer>
  </div>
</template>

<script>
import CommonFooter from '../../components/Footer.vue'
import { ViewBox } from 'vux'
//import {mapGetters} from 'vuex'
//import store from '../../vuex/store'
export default {
    data () {
        return {

        }
    },
    mounted : function(){

    },
    computed : {

    },
    name: 'index',

    components: {
        'common-footer': CommonFooter,
         ViewBox
    },
    method : {

    }
}
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
@import '../../assets/scss/common.scss';
  body{
      background: none;
  }
  .classify-box{
    font-size: px2rem(26);
  }
  .menu{
      background: $color_efeff4;
      width: px2rem(195);
      border-right:1px solid $color_efeff4;
      position: absolute;
      left:0;
      bottom: px2rem(108);
      top:0;
      li{
          & > a{
              height: px2rem(80);
              line-height: px2rem(80);
              color:$color_333333;
          }
      }
  }
</style>
