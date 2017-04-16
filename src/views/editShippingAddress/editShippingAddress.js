require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import EditShippingAddress from './EditShippingAddress.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#editShippingAddress',
  template: '<EditShippingAddress/>',
  components: { EditShippingAddress }
})
