import Vue from 'vue';
import Router from 'vue-router';

import Persons from '@/pages/Persons';
import Dashboard from '@/pages/persons/Dashboard';
import PersonDetail from '@/pages/persons/Detail';

Vue.use(Router);

export default new Router({
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
