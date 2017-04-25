/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
//require('../../assets/js/config');
require('../../assets/js/lib/geolocation.min')
import Vue from 'vue'
import SelectCity from './SelectCity.vue'
// import axios from '../../assets/js/config'
// Vue.prototype.$ajax = axios;
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

new Vue({
  el: '#selectCity',
  template: '<SelectCity/>',
  components: { SelectCity }
})

