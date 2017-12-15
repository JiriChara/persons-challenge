import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store';

const Persons = () => import('@/pages/Persons');
const Dashboard = () => import('@/pages/persons/Dashboard');
const PersonDetail = () => import('@/pages/persons/Detail');
const NotFound = () => import('@/pages/NotFound');

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
          name: 'persons',
          component: Dashboard,
        },

        {
          path: ':slug',
          name: 'person-detail',
          component: PersonDetail,
        },
      ],
    },

    {
      path: '*',
      name: 'not-found',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Hide mobile menu when changing route
  store.dispatch('navbar/hideMobileMenu');

  next();
});

export default router;
