import Vue from 'vue';
import Buefy from 'buefy';
import { sync } from 'vuex-router-sync';

import App from '@/App';
import router from '@/router';
import store from '@/store';

import '@/css/main.scss';

sync(store, router);

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: 'fa',
  defaultContentElement: '#app',
});

const app = new Vue({
  template: '<App/>',
  components: { App },
  router,
  store,
});

app.$mount('#app');

export default app;
