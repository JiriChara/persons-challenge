<template>
  <nav class="panel">
    <p class="panel-heading">
      Categories
    </p>

    <router-link
      class="panel-block"
      :to="getCategoryLink('all')">
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
        :to="getCategoryLink(category.type)">
        <span>{{ category.name }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
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
</style>
