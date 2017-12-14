<template>
  <nav class="panel">
    <p class="panel-heading">
      Categories
    </p>

    <router-link
      v-for="category in categories"
      :key="category.type"
      class="panel-block"
      :to="getCategoryLink(category.type)">
      <span>{{ category.name }}</span>
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: 'pc-catagories-list',

    data() {
      return {
        categories: [
          {
            name: 'All',
            type: 'all',
          },

          {
            name: 'Marketing',
            type: 'marketing',
          },

          {
            name: 'Finance',
            type: 'finance',
          },

          {
            name: 'IT',
            type: 'it',
          },
        ],
      };
    },

    methods: {
      getCategoryLink(category) {
        return {
          name: 'persons',
          query: {
            category,
          },
        };
      },
    },
  };
</script>
