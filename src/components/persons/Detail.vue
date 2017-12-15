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
            <dd>
              <b-tag v-if="info.key === 'category'" type="is-success">{{ info.value }}</b-tag>
              <b-icon v-else-if="info.key === 'gender'" :icon="info.value === 'female' ? 'venus' : 'mars'"></b-icon>
              <span v-else>{{ info.format(info.value) }}</span>
            </dd>
          </template>
        </dl>
      </div>
    </div>
  </article>
</template>

<script>
  import parseDate from '@/utils/parseDate';

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
            title: 'Category',
            key: 'category',
            format(val) { return val; },
          },

          {
            title: 'Gender',
            key: 'gender',
            format(val) { return val; },
          },

          {
            title: 'Age',
            key: 'age',
            format(val) { return val; },
          },

          {
            title: 'Company',
            key: 'company',
            format(val) { return val; },
          },

          {
            title: 'Phone',
            key: 'phone',
            format(val) { return val; },
          },

          {
            title: 'Registered At',
            key: 'registered',
            format(val) {
              const dateFormat = 'YYYY-MM-DDTHH:mm:ss ZZ';
              return parseDate(val, dateFormat).format('LLLL');
            },
          },
        ];

        return details
          .filter(detail => this.person && this.person[detail.key])
          .map(detail => ({ ...detail, value: this.person[detail.key] }));
      },
    },
  };
</script>
