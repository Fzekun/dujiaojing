/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import RegisterSuccess from './RegisterSuccess.vue'

new Vue({
  el: '#registerSuccess',
  template: '<RegisterSuccess/>',
  components: { RegisterSuccess }
})
