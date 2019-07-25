import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders:[
      {id:'12342142314',customerName:'知道',telphone:'123423423',status:1,time:'2019-12-13 21:11:22'}
    ],
    count:1
  },
  mutations: {

  },
  actions: {

  }
})
