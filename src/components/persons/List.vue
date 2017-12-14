<template>
  <nav class="panel">
    <p class="panel-heading">
      Peops
    </p>

    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="search">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </p>
    </div>

    <router-link
      v-for="person in persons"
      class="panel-block"
      :class="{ 'is-active': isActive(person) }"
      :to="getPersonLink(person)"
      :key="person.guid">
      <span class="panel-icon">
        <v-gravatar :email="person.email" :size="14"></v-gravatar>
      </span>
      {{ person.name }}
    </router-link>
  </nav>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'pc-persons-list',

    props: {
      persons: {
        type: Array,
        required: true,
      },
    },

    computed: {
      ...mapState([
        'route',
      ]),
    },

    methods: {
      getPersonLink(person) {
        return {
          name: 'person-detail',
          params: {
            slug: person.guid,
          },
        };
      },

      isActive(person) {
        const regex = new RegExp(`/${person.guid}`);

        return regex.test(this.route.path);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~bulma/sass/utilities/_all';

  .panel-block {
    &.is-active {
      background-color: $light;
    }
  }
</style>
