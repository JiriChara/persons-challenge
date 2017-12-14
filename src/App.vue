<template>
  <div id="app">
    <pc-navbar></pc-navbar>

    <main>
      <router-view></router-view>
      <vue-progress-bar></vue-progress-bar>
    </main>

    <pc-footer></pc-footer>
  </div>
</template>

<script>
  import PcNavbar from '@/components/layout/Navbar';
  import PcFooter from '@/components/layout/Footer';

  export default {
    name: 'app',

    components: {
      PcNavbar,
      PcFooter,
    },

    created() {
      this.$router.beforeEach((to, from, next) => {
        this.$Progress.start();

        next();
      });

      this.$router.afterEach(() => {
        this.$Progress.finish();
      });
    },

    mounted() {
      this.$Progress.finish();
    },
  };
</script>
