require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import ShopName from './ShopName.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#shop-name',
  template: '<ShopName/>',
  components: { ShopName }
})
