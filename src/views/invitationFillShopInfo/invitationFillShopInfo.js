require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import InvitationFillShopInfo from './InvitationFillShopInfo.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  el: '#invitation-fillShopInfo',
  template: '<InvitationFillShopInfo/>',
  components: { InvitationFillShopInfo }
})
