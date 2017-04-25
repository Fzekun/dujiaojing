/**
 * Created by fengzekun on 17/4/14.
 */
import * as types from '../mutation-types'
import cookie from '../../assets/js/tools/cookie'
const state = {
  toast : false,
  restriction : 0,
  orderTotal : 0
}
const getters = {
  toast : state => state.toast,
  restriction : state => state.restriction,
  orderTotal : orderTotal => state.orderTotal
}
const mutations = {
  [types.SHOW_TOAST] (state) {
    state.toast = true;
  },
  [types.GET_RESTRICTION](state,n){
    state.restriction = n;
    //localStorage.setItem()
  },
  [types.COMPUTE_ORDER_TOTAL](state,n){
    state.orderTotal = n;
    cookie.set('orderTotal',n);
  },
  [types.HIDE_TOAST] (state) {
    state.toast = false;
  }
}
const actions = {
  showToast( { commit } ){
    commit( types.SHOW_TOAST );
  },
  hideToast({ commit }){
    commit( types.HIDE_TOAST );
  },
  getRestriction({ commit }, n){
    commit( types.GET_RESTRICTION, n)
  },
  computeOrderTotal({ commit },n){
    commit( types.COMPUTE_ORDER_TOTAL,n);
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
