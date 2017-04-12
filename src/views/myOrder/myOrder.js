/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import MyOrder from './MyOrder.vue'
import store from '../../vuex/store'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#my-order',
  store,
  template: '<MyOrder/>',
  components: { MyOrder }
})
