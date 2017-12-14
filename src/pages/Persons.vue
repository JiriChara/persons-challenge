<template>
  <section class="section">
    <div class="container">
      <div class="columns" v-if="personList.length">
        <aside class="column is-one-half">
          <div class="columns">
            <div class="column">
              <pc-categories-list @assign="onAssignCategoryToPerson"></pc-categories-list>
            </div>

            <div class="column">
              <pc-persons-list :persons="filteredPersons"></pc-persons-list>
            </div>
          </div>
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
  import { mapActions, mapGetters, mapState } from 'vuex';

  import router from '@/router';
  import PcPersonsList from '@/components/persons/List';
  import PcCategoriesList from '@/components/categories/List';

  export default {
    name: 'persons',

    components: {
      PcPersonsList,
      PcCategoriesList,
    },

    computed: {
      ...mapState([
        'route',
      ]),

      ...mapGetters('persons', {
        personList: 'list',
        personFilteredList: 'filteredList',
        isLoadingPersons: 'isLoading',
      }),

      filteredPersons() {
        return this.personFilteredList(this.route.query);
      },
    },

    methods: {
      ...mapActions('persons', {
        fetchPersons: 'fetchList',
        assignCategoryToPerson: 'assignCategory',
      }),

      async onAssignCategoryToPerson(...args) {
        const person = await this.assignCategoryToPerson(...args);

        this.$snackbar.open({
          message: `${person.name} has been assigned to new category.`,
          queue: false,
        });

        router.push({
          name: 'person-detail',
          params: {
            slug: person.guid,
          },
        });
      },

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
