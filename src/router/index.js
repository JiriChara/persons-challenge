import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store';
import Persons from '@/pages/Persons';
import Dashboard from '@/pages/persons/Dashboard';
import PersonDetail from '@/pages/persons/Detail';

Vue.use(Router);

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      component: Persons,

      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard,
        },

        {
          path: ':slug',
          name: 'person-detail',
          component: PersonDetail,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Hide mobile menu when changing route
  store.dispatch('navbar/hideMobileMenu');

  next();
});

export default router;
