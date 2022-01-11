import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false;

Vue.use(VueSweetalert2);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
