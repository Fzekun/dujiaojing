/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import Search from './Search.vue'

new Vue({
  el: '#search',
  template: '<Search/>',
  components: { Search }
})

