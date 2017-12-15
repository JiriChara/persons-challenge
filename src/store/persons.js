import createCRUDModule from 'vuex-crud';
import Vue from 'vue';

import client from '@/utils/client';
import parseDate from '@/utils/parseDate';

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

const sort = list => list.sort((left, right) => {
  const leftGender = left.gender;
  const rightGender = right.gender;

  const leftStartedAt = parseDate(left.registered);
  const rightStartedAt = parseDate(right.registered);

  return leftGender.localeCompare(rightGender) || rightStartedAt.diff(leftStartedAt);
});

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

        return sort(list);
      };
    },

    getCountPerCategory(state, getters) {
      return (category = 'all') => {
        if (category === 'all') {
          return getters.list.length;
        }

        return byCategory(getters.list, category).length;
      };
    },
  },
});

export {
  byCategory,
  bySearchQuery,
};
