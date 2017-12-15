<template>
  <div>
    <pc-persons-detail v-if="person" :person="person"></pc-persons-detail>

    <article v-else class="media person-detail">
      <figure class="media-left">
        <p class="image is-128x128">
          <img src="../../assets/why-you-no.png" alt="Person Not Found!" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h2>
            User Not Found
          </h2>
        </div>
      </div>
    </article>
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
