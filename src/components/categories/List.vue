<template>
  <nav class="panel">
    <p class="panel-heading">
      Categories
    </p>

    <router-link
      class="panel-block"
      :class="{ 'is-active': isActive('all') }"
      :to="getCategoryLink('all')">
      <b-tag type="is-info">{{ personsCountPerCategory('all') }}</b-tag>

      <strong>All</strong>
    </router-link>

    <div
      v-for="category in categories"
      :key="category.type"
      class="drop"
      :class="{ 'over': category.hover }"
      @dragenter="onDragEnter(category.type, $event)"
      @dragleave="onDragLeave(category.type, $event)"
      @dragover="onDragOver(category.type, $event)"
      @drop="onDrop(category.type, $event)">
      <router-link
        class="panel-block"
        :class="{ 'is-active': isActive(category.type) }"
        :to="getCategoryLink(category.type)">
        <b-tag type="is-info">{{ personsCountPerCategory(category.type) }}</b-tag>
        <span>{{ category.name }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';

  export default {
    name: 'pc-catagories-list',

    data() {
      return {
        categories: [
          {
            name: 'Marketing',
            type: 'marketing',
            hover: false,
          },

          {
            name: 'Finance',
            type: 'finance',
            hover: false,
          },

          {
            name: 'IT',
            type: 'it',
            hover: false,
          },
        ],
      };
    },

    computed: {
      ...mapGetters('persons', {
        personsCountPerCategory: 'getCountPerCategory',
      }),

      ...mapState([
        'route',
      ]),
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

      onDrop(category, event) {
        event.preventDefault();

        const personGuid = event.dataTransfer.getData('text/plain');

        this.categories = this.categories.map(c => ({ ...c, hover: false }));

        this.$emit('assign', {
          category,
          personGuid,
        });
      },

      onDragEnter(category, event) {
        event.preventDefault();

        this.categories = this.categories.map((c) => {
          if (c.type === category) {
            return { ...c, hover: true };
          }

          return c;
        });
      },

      onDragOver(category, event) {
        event.preventDefault();
      },

      onDragLeave(category, event) {
        event.preventDefault();

        this.categories = this.categories.map((c) => {
          if (c.type === category) {
            return { ...c, hover: false };
          }

          return c;
        });
      },

      isActive(categoryType) {
        const { category } = this.route.query;

        if (!category && categoryType === 'all') {
          return true;
        }

        return category === categoryType;
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~bulma/sass/utilities/_all';

  .drop {
    & > a {
      border-top: none;
    }
  }

  .over {
    background-color: $success;
  }

  .tag {
    margin-right: 10px;
  }

  .panel-block {
    &.is-active {
      background-color: $light;
    }
  }
</style>
