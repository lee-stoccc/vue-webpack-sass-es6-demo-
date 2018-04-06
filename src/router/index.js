import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/hello/HelloWorld'
import Center from '@/components/Center/Cen.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
          path:'/center',
          name:'Center',
          component:Center
      }
  ]
})
