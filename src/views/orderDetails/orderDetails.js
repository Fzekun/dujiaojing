require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import OrderDetails from './OrderDetails.vue'
import store from '../../vuex/store'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#order-details',
  store,
  template: '<OrderDetails/>',
  components: { OrderDetails }
})
