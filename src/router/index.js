import Vue from 'vue'
import Router from 'vue-router'
// import P404 from '@/components/404'
// import Layout from '@/views/layout'
// import Main from '@/views/main'
// import Movie from '@/views/movie'
// import TV from '@/views/tv'
// import ZY from '@/views/zy'
// import MovieDetail from '@/views/movieDetail'
// import Upload from '@/views/upload'
// import Videos from '@/views/videos'
// import Register from '@/views/register'

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/components/404')
  },
  {
    path: '/',
    redirect: '/index/main'
  },
  {
    path: '/index',
    component: () => import('@/views/layout'),
    children: [
      {
        path: 'main',
        name: 'Main',
        component: () => import('@/views/main')
      },
      {
        path: 'movie',
        name: 'Movie',
        component: () => import('@/views/movie')
      },
      {
        path: 'series',
        name: 'Series',
        component: () => import('@/views/series')
      },
      {
        path: 'ent',
        name: 'Ent',
        component: () => import('@/views/ent')
      },
      {
        path: 'anime',
        name: 'Anime',
        component: () => import('@/views/anime')
      },
      {
        path: 'doc',
        name: 'Doc',
        component: () => import('@/views/doc')
      },
      {
        path: 'short',
        name: 'Short',
        component: () => import('@/views/short')
      },
      {
        path: 'movieDetail/:mid',
        name: 'MovieDetail',
        component: () => import('@/views/movieDetail')
      },
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/views/upload')
      },
      {
        path: 'videos',
        name: 'Videos',
        component: () => import('@/views/videos')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/register')
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404' }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
