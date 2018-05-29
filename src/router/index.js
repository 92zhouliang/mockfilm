import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import MovieDetail from '@/components/MovieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/movieDetail/:movieDetailId',
      name: 'MovieDetail',
      component: MovieDetail
    }
  ]
})
