require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import ShopInfo from './ShopInfo.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#shop-info',
  template: '<ShopInfo/>',
  components: { ShopInfo }
})
