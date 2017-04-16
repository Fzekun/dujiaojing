require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import ImproveAccountSecurity from './ImproveAccountSecurity.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#improveAccountSecurity',
  template: '<ImproveAccountSecurity/>',
  components: { ImproveAccountSecurity }
})
