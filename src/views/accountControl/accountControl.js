require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import AccountControl from './AccountControl.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#account-control',
  template: '<AccountControl/>',
  components: { AccountControl }
})
