import Vue from 'vue';
import Buefy from 'buefy';
import Gravatar from 'vue-gravatar';
import { sync } from 'vuex-router-sync';

import App from '@/App';
import router from '@/router';
import store from '@/store';

import '@/css/main.scss';

sync(store, router);

Vue.config.productionTip = false;

/**
 * Plugins
 */
Vue.use(Buefy, {
  defaultIconPack: 'fa',
  defaultContentElement: '#app',
});

/**
 * Global Components
 */
Vue.component('v-gravatar', Gravatar);

const app = new Vue({
  template: '<App/>',
  components: { App },
  router,
  store,
});

app.$mount('#app');

export default app;
