require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import ShippingAddress from './ShippingAddress.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#shippingAddress',
  template: '<ShippingAddress/>',
  components: { ShippingAddress }
})
