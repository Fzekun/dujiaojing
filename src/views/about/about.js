require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import About from './About.vue'
new Vue({
  el: '#about',
  template: '<About/>',
  components: { About }
})
