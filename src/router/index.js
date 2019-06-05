import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition' // 页面切换效果
import login from '@/pages/singePage/login' // 注册
import register from '@/pages/singePage/register' // 登录

import main from '@/pages/main' // toolbar
import home from '@/pages/main/home/home' // 首页
import discover from '@/pages/main/discover/discover' // 发现
import my from '@/pages/main/my/my' // 我的

Router.prototype.goBack = function () {
  this.isBack = true
  this.go(-1)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageTransition',
      redirect: '/login',
      component: PageTransition,
      children: [
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        },
        {
          path: '/main',
          name: 'main',
          component: main,
          children: [
            {
              path: '/home',
              name: 'home',
              component: home
            },
            {
              path: '/discover',
              name: 'discover',
              component: discover
            },
            {
              path: '/my',
              name: 'my',
              component: my
            }
          ]
        }
      ]
    }
  ]
})
