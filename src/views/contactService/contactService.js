require('../../../static/js/lib/flexible/flexible')
import Vue from 'vue'
import ContactService from './ContactService.vue'
new Vue({
  el: '#contactService',
  template: '<ContactService/>',
  components: { ContactService }
})
