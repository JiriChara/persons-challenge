<template>
  <div id="app">
    <pc-navbar></pc-navbar>

    <main>
      <router-view></router-view>
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
  };
</script>
