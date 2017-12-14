<template>
  <section class="section">
    <div class="container">
      <div class="columns" v-if="personList.length">
        <aside class="column is-one-third">
          <pc-persons-list :persons="personList"></pc-persons-list>
        </aside>

        <article class="column">
          <router-view></router-view>
        </article>
      </div>

      <b-notification v-if="personList.length === 0 && !isLoadingPersons" type="is-danger" has-icon :closable="false">
        <p>Ooops. Something went wrong. Sorry for that <b-icon icon="frown-o" size="is-small"></b-icon></p>
      </b-notification>
    </div>
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

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
    },

    methods: {
      ...mapActions('persons', {
        fetchPersons: 'fetchList',
      }),

      async fetchData() {
        try {
          this.$Progress.start();

          await this.fetchPersons();

          this.$Progress.finish();
        } catch (err) {
          this.$Progress.fail();
        }
      },
    },

    created() {
      this.fetchData();
    },
  };
</script>
