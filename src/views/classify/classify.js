require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import Classify from './Classify.vue'
Vue.config.productionTip = false
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)


/* eslint-disable no-new */
new Vue({
  el: '#classify',
  //store,
  template: '<Classify/>',
  components: { Classify }
})
