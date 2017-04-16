/**
 * Created by fengzekun on 17/4/7.
 */
require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import GBeingAudited from './GBeingAudited.vue'

new Vue({
  el: '#g-beingAudited',
  template: '<GBeingAudited/>',
  components: { GBeingAudited }
})
