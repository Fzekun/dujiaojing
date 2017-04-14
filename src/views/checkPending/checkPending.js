/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import CheckPending from './CheckPending.vue'

new Vue({
  el: '#registerSuccess',
  template: '<CheckPending/>',
  components: { CheckPending }
})
