import * as types from '../mutation-types'
const state = {
  confirm : false
}
const getters = {
  confirm: state => state.confirm
}
const mutations = {
  [types.SHOW_CONFIRM] (state) {
    state.confirm = true;
  },
  [types.HIDE_CONFIRM] (state) {
    state.confirm = false;
  }
}
const actions = {
  showConfirm( { commit } ){
      commit( types.SHOW_CONFIRM );
  },
  hideConfirm( { commit } ){
    commit( types.HIDE_CONFIRM );
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
