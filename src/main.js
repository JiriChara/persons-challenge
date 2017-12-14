import Vue from 'vue';
import Buefy from 'buefy';

import App from '@/App';
import router from '@/router';

import '@/css/main.scss';

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: 'fa',
  defaultContentElement: '#app',
});

const app = new Vue({
  router,
  template: '<App/>',
  components: { App },
});

app.$mount('#app');

export default app;
