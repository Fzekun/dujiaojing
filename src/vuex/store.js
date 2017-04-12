import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
import myOrder from './modules/myOrder'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        index,
        myOrder
    },
    strict: process.env.NODE_ENV !== 'production'// 线上环境关掉
})

