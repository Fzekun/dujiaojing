require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import SubmitOrder from './SubmitOrder.vue'
import store from '../../vuex/store'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#submit-order',
  store,
  template: '<SubmitOrder/>',
  components: { SubmitOrder }
})
