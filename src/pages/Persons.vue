<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <aside class="column is-one-third">
          <pc-persons-list :persons="personList"></pc-persons-list>
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

  import PcPersonsList from '@/components/persons/List';

  export default {
    name: 'persons',

    components: {
      PcPersonsList,
    },

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
