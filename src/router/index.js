import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import InfracoesView from '../views/InfracoesView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
   {
    path: '/infracoes',
    name: 'InfracoesView',
    component: InfracoesView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
