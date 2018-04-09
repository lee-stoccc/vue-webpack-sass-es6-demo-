import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/hello/HelloWorld'
import Center from '@/components/Center/Cen.vue'
import Flex from '@/components/flex/Flex.vue'
import Index from '@/components/meituan/Index.vue'
import Footer from '@/components/footer/Foot.vue'
import Near from '@/components/near/Near.vue'
import Order from '@/components/order/Order.vue'
import Mine from '@/components/mine/Mine.vue'

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
      },
      {
          path:'/flex',
          name:'flex',
          component:Flex
      },
      {
          path:'/index',
          name:'index',
          component:Index
      },
      {
          path:'/footer',
          name:'footer',
          component:Footer
      },
      {
          path:'/near',
          name:'near',
          component:Near
      },
      {
          path:'/order',
          name:'order',
          component:Order
      },
      {
          path:'/mine',
          name:'mine',
          component:Mine
      }
  ]
})
