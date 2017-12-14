<template>
  <nav class="navbar is-white is-fixed-top has-shadow">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img class="logo" src="../../assets/logo.png" alt="Flairoo" />
        </router-link>

        <div
          class="navbar-burger burger"
          :class="{ 'is-active': isMobileMenuActive }"
          @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        class="navbar-menu"
        :class="{ 'is-active': isMobileMenuActive }">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
        </div>

        <div class="navbar-end">
          <a href="https://github.com/JiriChara/persons-challenge" target="_blank" title="GitHub" class="navbar-item">
            <b-icon icon="github"></b-icon>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'pc-navbar',

    computed: {
      ...mapState('navbar', [
        'isMobileMenuActive',
      ]),
    },

    methods: {
      ...mapActions('navbar', [
        'toggleMobileMenu',
      ]),
    },
  };
</script>

<style scoped>
  .logo {
    height: 28px;
    width: 54.5px;
  }
</style>
