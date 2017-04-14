require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import findGoods from './findGoods.vue'
Vue.config.productionTip = false
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
import store from '../../vuex/store'

/* eslint-disable no-new */
new Vue({
  el: '#findGoods',
  store,
  template: '<findGoods/>',
  components: { findGoods }
})
