<template>
  <nav class="navbar is-white is-fixed-top has-shadow">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img class="logo" src="../../assets/logo.png" alt="Flairoo" />
        </router-link>

        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
        </div>

        <div class="navbar-end">
          <a href="https://github.com/JiriChara/persons-challenge" target="_blank" title="GitHub" class="navbar-item">
            <b-icon icon="github" size="lg"></b-icon>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'pc-navbar',
  };
</script>

<style scoped>
  .logo {
    height: 28px;
    width: 54.5px;
  }
</style>
