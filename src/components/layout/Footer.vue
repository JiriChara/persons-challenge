<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          Copyright © {{ currentYear }} Jiří Chára. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'pc-footer',

    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
</script>
