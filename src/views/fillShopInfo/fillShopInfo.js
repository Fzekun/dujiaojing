require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import FillShopInfo from './FillShopInfo.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#fill-shopInfo',
  template: '<FillShopInfo/>',
  components: { FillShopInfo }
})
