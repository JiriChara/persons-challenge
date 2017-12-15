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
              <pc-persons-list :persons="filteredPersons" @remove="onRemovePerson"></pc-persons-list>
            </div>
          </div>
        </aside>

        <article class="column">
          <router-view></router-view>
        </article>
      </div>

      <b-notification v-if="personList.length === 0 && !isLoadingPersons" type="is-warning" has-icon :closable="false">
        <p>Ooops. Seems like no persons are available <b-icon icon="frown-o" size="is-small"></b-icon></p>
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
        destroyPerson: 'destroy',
        assignCategoryToPerson: 'assignCategory',
      }),

      async onAssignCategoryToPerson(...args) {
        const person = await this.assignCategoryToPerson(...args);

        this.$snackbar.open({
          message: `${person.name} has been assigned to new category.`,
          queue: false,
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

      onRemovePerson(person) {
        const { name } = person;

        this.$dialog.confirm({
          title: `Delete ${name}`,
          message: `Are you sure you wanna delete ${name}?`,
          confirmText: 'Yes!',
          cancelText: 'Nope',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: async () => {
            const id = person.guid;

            await this.destroyPerson({ id });

            this.$snackbar.open({
              message: `${name} has been successfully removed.`,
              queue: false,
            });

            router.push({
              name: 'persons',
            });
          },
        });
      },
    },

    created() {
      this.fetchData();
    },
  };
</script>
