import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MusicSearch from '@/components/MusicSearch'
import PlayList from '@/components/PlayList'
//import MusicSearch from '@/components/MusicSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home', 
      component: MusicSearch // change to 'Home' when working on login page, change to 'Music Search' when creating search page 
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