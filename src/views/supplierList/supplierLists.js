require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import SupplierList from './SupplierList.vue'
import store from '../../vuex/store'

/* eslint-disable no-new */
new Vue({
  el: '#superlierList',
  store,
  template: '<SupplierList/>',
  components: { SupplierList }
})
