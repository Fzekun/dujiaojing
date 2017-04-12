require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import OrderDealFailed from './OrderDealFailed.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#orderDealFailed',
  template: '<OrderDealFailed/>',
  components: { OrderDealFailed }
})
