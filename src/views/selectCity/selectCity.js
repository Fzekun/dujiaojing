/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import SelectCity from './SelectCity.vue'

new Vue({
  el: '#selectCity',
  template: '<SelectCity/>',
  components: { SelectCity }
})

