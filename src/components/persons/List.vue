<template>
  <nav class="panel persons">
    <p class="panel-heading">
      Peops
    </p>

    <div class="panel-block" v-if="persons.length >= 2">
      <p class="control has-icons-left">
        <input v-model="searchTerm" class="input is-small" type="text" placeholder="search">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </p>
    </div>

    <div
      v-if="persons.length"
      class="drag"
      v-for="person in bySearchQuery(persons, searchTerm)"
      :key="person.guid"
      @dragstart="onDragStart(person, $event)"
      draggable>
      <router-link
        class="panel-block"
        :class="{ 'is-active': isActive(person) }"
        :to="getPersonLink(person)"
        draggable>
        <span class="panel-icon">
          <v-gravatar :email="person.email" :size="14"></v-gravatar>
        </span>
        <span>{{ person.name }}</span>

        <a class="remove-btn" @click.prevent="onRemovePerson(person)">
          <b-tooltip label="Remove Person">
            <b-icon icon="trash" class="is-pulled-right"></b-icon>
          </b-tooltip>
        </a>
      </router-link>
    </div>

    <div class="panel-block" v-if="persons.length === 0">
      Nothing to see here
    </div>
  </nav>
</template>

<script>
  import { mapState } from 'vuex';

  import { bySearchQuery } from '@/store/persons';

  export default {
    name: 'pc-persons-list',

    data() {
      return {
        searchTerm: '',
      };
    },

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
      bySearchQuery,

      getPersonLink(person) {
        const { category } = this.route.query;

        return {
          name: 'person-detail',
          params: {
            slug: person.guid,
          },
          query: {
            category,
          },
        };
      },

      isActive(person) {
        const regex = new RegExp(`/${person.guid}`);

        return regex.test(this.route.path);
      },

      onDragStart(person, event) {
        const transfer = event.dataTransfer;

        transfer.setData('text/plain', person.guid);
      },

      onRemovePerson(person) {
        this.$emit('remove', person);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~bulma/sass/utilities/_all';

  .panel-block {
    position: relative;

    &.is-active {
      background-color: $light;
    }

    .remove-btn {
      margin-left: auto;
    }
  }

  .drag {
    & > a {
      border-top: none;
    }
  }

  img {
    height: 14px;
    width: 14px;
  }
</style>
