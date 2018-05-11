import Vue from 'vue'
import Router from 'vue-router'

import { routerMode } from '@/utils/config'
/* Layout */
import Container from '@/views/container/Container'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/**
 * hidden: true //当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面(默认 false)
 * redirect: noredirect //当设置 noredirect 的时候该路由不会在面包屑导航中出现
 * alwaysShow: true //当设置 true 的时候永远会显示根菜单，不设置的情况下只有当子路由个数大于一个时才会显示根菜单
 * name:'router-name'            //设定路由的名字，一定要填写不然 使用 <keep-alive> 时会出现各种问题
 * meta : {
 *   roles: ['admin','editor']   //设置该路由进入的权限，支持多个权限叠加
 *   title: 'title'              //设置该路由在侧边栏和面包屑中展示的名字
 *   icon: 'svg-name'            //设置该路由的图标
 *   noCache: true               //如果设置为true ,则不会被 <keep-alive> 缓存(默认 false)
 * }
 */

export const constantRouterMap = [
  // { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '',
    component: Container,
    redirect: 'dashboard',
    meta: {
      title: 'Dashboard',
      icon: '首页'
    },
    children: [{
      path: 'dashboard',
      component: _import('common/Home'),
      name: 'home',
      meta: { title: '控制台', icon: '进行中', noCache: true }
    }, {
      path: 'svg',
      name: 'svg-demo',
      component: _import('demo/svg-icons/index'),
      meta: { title: 'SVG图标', icon: '图片', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: 'demo',
    component: Container,
    name: 'component-demo',
    meta: {
      title: 'components',
      icon: 'component'
    },
    children: [
      {
        path: 'svg',
        name: 'svg-demo',
        component: _import('demo/svg-icons/index'),
        meta: { title: 'SVG图标', icon: 'select_fill', noCache: true }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

