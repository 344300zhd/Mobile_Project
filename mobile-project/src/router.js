import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      meta:1,
      component: () => import("@/views/Index")
    },
    {
      path:'/ticket',
      name:'Ticket',
      meta:2,
      component:()=>import("@/views/Ticket")
    },
    {
      path:"/setting",
      name:"Setting",
      component:()=>import("@/views/Setting")
    }
  ]
})
