/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import AccountSecurity from './AccountSecurity.vue'

new Vue({
  el: '#accountSecurity',
  template: '<AccountSecurity/>',
  components: { AccountSecurity }
})

