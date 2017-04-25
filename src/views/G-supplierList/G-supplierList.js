require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import GSupplierList from './GSupplierList.vue'
import store from '../../vuex/store'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

/* eslint-disable no-new */
new Vue({
  el: '#G-supplierList',
  store,
  template: '<GSupplierList/>',
  components: { GSupplierList }
})
