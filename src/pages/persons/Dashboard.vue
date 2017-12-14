<template>
  <div>
    <b-notification type="is-info" has-icon :closable="false">
      <p>Select a person in the list in order to see more details.</p>
      <p>You can drag&drop persons in order to assign them to a category.</p>
    </b-notification>
  </div>
</template>

<script>
  export default {
    name: 'person-dashboard',
  };
</script>
