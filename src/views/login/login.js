/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import Login from './Login.vue'
import store from '../../vuex/store'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

new Vue({
  el: '#login',
  template: '<Login/>',
  components: { Login }
})

