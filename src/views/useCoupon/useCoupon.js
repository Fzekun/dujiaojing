/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import UseCoupon from './UseCoupon.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
new Vue({
  el: '#useCoupon',
  template: '<UseCoupon/>',
  components: { UseCoupon }
})
