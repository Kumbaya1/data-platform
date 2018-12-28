import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import DataView from '@/components/dataview/DataViewComponent.vue'
import DataCollectionComponent from '@/components/datatask/DataCollectionComponent.vue'
import LogInfoComponent from '@/components/datatask/LogInfoComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/dataview'
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/home/dataview',
      children:[
        {
          path: 'dataview',
          name: 'dataview',
          component:DataView,
          meta: { requiresAuth: true ,nameIndexs:[0,0]}
        },
        {
          path: 'datacollection',
          name: 'datacollection',
          component:DataCollectionComponent,
          meta: { requiresAuth: true ,nameIndexs:[1,0]}
        },
        {
          path: 'log',
          name: 'log',
          component:LogInfoComponent,
          meta: { requiresAuth: true ,nameIndexs:[1,1]}
        }
      ]
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
