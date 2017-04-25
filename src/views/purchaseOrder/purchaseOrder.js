/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import PurchaseOrder from './PurchaseOrder.vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

new Vue({
  el: '#purchaseOrder',
  template: '<PurchaseOrder/>',
  components: { PurchaseOrder }
})
