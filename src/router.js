import Vue from 'vue'
import Router from 'vue-router'

import Top from './views/Top.vue'
import Profile from './views/Profile.vue'
import Career from './components/MyCareer.vue'
import Work from './views/Work.vue'
import Learn from './views/Learn.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top,
    },

    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },

    {
      path: '/career',
      name: 'career',
      component: Career,
    },

    {
      path: '/work',
      name: 'work',
      component: Work,
    },

    {
      path: '/learn',
      name: 'learn',
      component: Learn,
    },
  ]
})