import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index.vue'
import addOrder from './components/addOrder.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    },
    {
      path: '/addOrder',
      name: 'addOrder',
      component: addOrder
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
