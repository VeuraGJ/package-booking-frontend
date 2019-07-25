import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    orders:[
    ]
  },
  mutations: {
    setOrders(state,orders){
      state.orders.push(...orders)
    },
    clearOrders(state){
      state.orders.splice(0,state.orders.length);
    },
    updateOrder(state,order){
      const oldOrder = state.orders.find(o => o.id == order.id);
      oldOrder.status = order.status;
      oldOrder.orderTime = order.orderTime;
    }
  },
  actions: {
    getPackageLists({commit}){
      axios.get('http://localhost:8090/packages')
      .then(function (response) {
        console.log(response.data);
        commit('clearOrders');
        commit('setOrders',response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    updatePackage({commit},id){
      axios.put('http://localhost:8090/packages/'+id+'?status=1')
      .then(function (response) {
        console.log(response.data);
        commit('updateOrder',response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    reservePackage({commit},order){
      axios.put('http://localhost:8090/packages/'+order.id+'?orderTime='+order.orderTime)
      .then(function (response) {
        console.log(response.data);
        // commit('updateOrder',response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
})
