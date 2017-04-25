/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import Register from './Register.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin);


new Vue({
  el: '#register',
  template: '<Register/>',
  components: { Register }
})
