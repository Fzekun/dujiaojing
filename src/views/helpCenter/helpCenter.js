/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import HelpCenter from './HelpCenter.vue'

new Vue({
  el: '#login',
  template: '<HelpCenter/>',
  components: { HelpCenter }
})

