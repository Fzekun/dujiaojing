require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import ShopDetails from './ShopDetails.vue'
Vue.config.productionTip = false
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
import store from '../../vuex/store'



/* eslint-disable no-new */
new Vue({
  el: '#shopDetails',
  store,
  template: '<ShopDetails/>',
  components: { ShopDetails }
})
