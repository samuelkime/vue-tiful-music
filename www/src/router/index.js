import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NutritionDetails from '@/components/NutritionDetails'
import EatDetails from '@/components/EatDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/NutritionDetails/:id',
      name: 'NutritionDetails',
      component: NutritionDetails
    },
    {
      path: '/EatDetails/:id',
      name: 'EatDetails',
      component: EatDetails
    }
  ]
})