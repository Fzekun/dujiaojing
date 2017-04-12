<template>
  <div class="classify-box">
    <common-footer footerIndex="2"></common-footer>
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

    components: {
        'common-footer': CommonFooter
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
