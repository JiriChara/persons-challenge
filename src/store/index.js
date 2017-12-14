import Vue from 'vue';
import Vuex from 'vuex';

import navbar from '@/store/navbar';
import persons from '@/store/persons';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  modules: {
    navbar,
    persons,
  },
});
