/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import CitySearchResult from './CitySearchResult.vue'

new Vue({
  el: '#citySearchResult',
  template: '<CitySearchResult/>',
  components: { CitySearchResult }
})

