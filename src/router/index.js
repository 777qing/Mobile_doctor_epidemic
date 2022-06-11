import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Area from '@/views/Area/Area.vue'
import Prevention from '@/views/Prevention/Prevention.vue'
//异步
const Hesuan = () => import('../views/Hesuan/Hesuan.vue')
const Citys = () => import('../views/Citys/Citys.vue')
const Travel = () => import('../views/Travel/Travel.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hesuan',
    name: 'hesuan',
    component: Hesuan
  },
  {
    path: '/area',
    name: 'area',
    component: Area
  }, {
    path: '/prevention',
    name: 'prevention',
    component: Prevention
  }, {
    path: '/citys/:cityname',
    name: 'citys',
    component: Citys,
    props: true
  },
  {
    path: '/travel',
    name: 'travel',
    component: Travel
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
