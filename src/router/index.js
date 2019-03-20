import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import secondcomponent from '@/components/secondcomponent.vue'

Vue.use(Router)

// 定义组件
const first = { template: '<div><h2>我是第1个子页面</h2></div>' }

// 创建一个路由器实例
// 并且配置路由规则
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      component: first
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})
