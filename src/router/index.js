import Vue from 'vue'
import Router from 'vue-router'
import chinaMap from '@/views/echarts/chinaMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chinaMap',
      component: chinaMap
    }
  ]
})
