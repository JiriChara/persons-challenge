<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <aside class="column is-one-third">
          Persons
        </aside>

        <article class="column">
          <router-view></router-view>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'persons',
  };
</script>
