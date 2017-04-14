/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import FAQ from './FAQ.vue'

new Vue({
  el: '#faq',
  template: '<FAQ/>',
  components: { FAQ }
})

