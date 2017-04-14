require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import AddSupplier from './AddSupplier.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
new Vue({
  el: '#addSupplier',
  template: '<AddSupplier/>',
  components: { AddSupplier }
})
