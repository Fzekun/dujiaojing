require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import EnquiryOrder from './EnquiryOrder.vue'
import store from '../../vuex/store'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#enquiryOrder',
  store,
  template: '<EnquiryOrder/>',
  components: { EnquiryOrder }
})
