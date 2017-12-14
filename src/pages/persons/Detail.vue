<template>
  <div>
    <pc-persons-detail v-if="person" :person="person"></pc-persons-detail>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';

  import PcPersonsDetail from '@/components/persons/Detail';

  export default {
    name: 'person-detail',

    components: {
      PcPersonsDetail,
    },

    computed: {
      ...mapGetters('persons', {
        personById: 'byId',
      }),

      ...mapState([
        'route',
      ]),

      person() {
        return this.personById(this.route.params.slug);
      },
    },
  };
</script>

<style lang="scss" scoped>
  img {
    height: 128px;
    width: 128px;
  }
</style>
