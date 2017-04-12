/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import App from './My.vue'
/* eslint-disable no-new */
new Vue({
  el: '#my',
  template: '<App/>',
  components: { App }
})
