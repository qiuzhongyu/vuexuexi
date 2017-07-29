import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Learn from '@/components/Learn'
import Hangzhou from '@/components/Hangzhou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/learn',
    	component:Learn
    },
    {
    	path:'/hangzhou',
    	component:Hangzhou
    }
  ]
})
