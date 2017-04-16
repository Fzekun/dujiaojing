/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import GnotPass from './GnotPass.vue'

new Vue({
  el: '#g-notPass',
  template: '<GnotPass/>',
  components: { GnotPass }
})
