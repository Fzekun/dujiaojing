require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import App from './App'
import store from '../../vuex/store'
Vue.config.productionTip = false
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
