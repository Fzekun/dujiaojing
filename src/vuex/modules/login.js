/**
 * Created by fengzekun on 17/4/25.
 */
import * as types from '../mutation-types'
import  { ToastPlugin } from 'vux'
import Vue from 'vue'
Vue.use(ToastPlugin)

const state = {
}
const getters = {
}
const mutations = {
  [types.TOAST] (state,param) {
    Vue.$vux.toast.show({
      text : param.text,
      position : 'middle',
      type : 'text',
      time : 1000,
      width : '7rem'
    });
  },
}
const actions = {
  showToast( { commit },param ){
    commit( types.TOAST,param );
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
