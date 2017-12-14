import createCRUDModule from 'vuex-crud';
import Vue from 'vue';

import client from '@/utils/client';

const byCategory = (list, category = 'all') => (category === 'all' ?
  list :
  list.filter(person => person.category === category));

const bySearchQuery = (list, query) => {
  const searchable = [
    'age',
    'gender',
    'name',
    'company',
    'address',
  ];

  return list.filter(item =>
    searchable.some(key =>
      item[key].toString().indexOf(query) !== -1,
    ),
  );
};

export default createCRUDModule({
  resource: 'persons',

  client,

  idAttribute: 'guid',

  actions: {
    assignCategory({ commit, state }, options) {
      commit('assignCategory', options);

      const person = state.entities[options.personGuid];

      return Promise.resolve(
        person,
      );
    },
  },

  mutations: {
    assignCategory(state, { category, personGuid }) {
      const person = state.entities[personGuid];

      Vue.set(state.entities, personGuid, {
        ...person,
        category,
      });
    },
  },

  getters: {
    // I prefer to see this stuff on back-end ;)
    filteredList(state, getters) {
      return (query = {}) => {
        let list = getters.list || [];

        // Filter by category
        if (query.category) {
          list = byCategory(list, query.category);
        }

        // Filter by search term
        if (query.q) {
          list = bySearchQuery(list, query.q);
        }

        return list;
      };
    },
  },
});

export {
  byCategory,
  bySearchQuery,
};