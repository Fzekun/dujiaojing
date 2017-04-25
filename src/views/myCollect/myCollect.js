/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import MyCollect from './MyCollect.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
import store from '../../vuex/store'

/* eslint-disable no-new */
new Vue({
  el: '#myCollect',
  store,
  template: '<MyCollect/>',
  components: { MyCollect }
})
