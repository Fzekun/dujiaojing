require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import GoodsDetails from './GoodsDetails'
import store from '../../vuex/store'
Vue.config.productionTip = false
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

/* eslint-disable no-new */
new Vue({
  el: '#goodsDetails',
  //store,
  template: '<GoodsDetails/>',
  components: { GoodsDetails }
})
