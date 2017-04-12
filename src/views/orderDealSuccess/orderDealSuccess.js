require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import OrderDealSuccess from './OrderDealSuccess.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#orderDealSuccess',
  template: '<OrderDealSuccess/>',
  components: { OrderDealSuccess }
})
