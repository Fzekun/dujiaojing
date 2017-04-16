/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import CancelOrderCause from './CancelOrderCause.vue'

new Vue({
  el: '#cancelOrderCause',
  template: '<CancelOrderCause/>',
  components: { CancelOrderCause }
})

