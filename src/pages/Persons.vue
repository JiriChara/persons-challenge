<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <aside class="column is-one-third">
          Persons
        </aside>

        <article class="column">
          <router-view></router-view>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';

  export default {
    name: 'persons',

    computed: {
      ...mapGetters('persons', {
        personList: 'list',
        isLoadingPersons: 'isLoading',
      }),

      ...mapState([
        'route',
      ]),
    },

    methods: {
      ...mapActions('persons', {
        fetchPersons: 'fetchList',
      }),

      fetchData() {
        return this.fetchPersons();
      },
    },

    watch: {
      $route: 'fetchData',
    },

    created() {
      this.fetchData();
    },
  };
</script>
