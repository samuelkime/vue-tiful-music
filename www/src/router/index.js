import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MusicSearch from '@/components/MusicSearch'
import PlayList from '@/components/PlayList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/MusicSearch/:id',
      name: 'MusicSearch',
      component: MusicSearch
    },
    {
      path: '/PlayList/:id',
      name: 'PlayList',
      component: PlayList
    }
  ]
})