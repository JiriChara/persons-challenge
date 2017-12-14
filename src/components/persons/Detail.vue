<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-128x128">
        <v-gravatar :email="person.email" :size="128"></v-gravatar>
      </p>
    </figure>

    <div class="media-content">
      <div class="content">
        <h2>
          {{ person.name }}
        </h2>

        <dl>
          <template v-for="info in userInfo">
            <dt><strong>{{ info.title }}</strong></dt>
            <dd>{{ info.value }}</dd>
          </template>
        </dl>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'pc-persons-list',

    props: {
      person: {
        type: Object,
        required: true,
      },
    },

    computed: {
      userInfo() {
        const details = [
          {
            title: 'Gender',
            key: 'gender',
          },

          {
            title: 'Age',
            key: 'age',
          },

          {
            title: 'Company',
            key: 'company',
          },

          {
            title: 'Phone',
            key: 'phone',
          },
        ];

        return details
          .filter(detail => this.person && this.person[detail.key])
          .map(detail => ({ ...detail, value: this.person[detail.key] }));
      },
    },
  };
</script>
