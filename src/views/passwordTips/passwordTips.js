require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import PasswordTips from './PasswordTips.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#passwordTips',
  template: '<PasswordTips/>',
  components: { PasswordTips }
})
