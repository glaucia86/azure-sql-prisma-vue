import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import '../node_modules/nprogress/nprogress.css';

Vue.config.productionTip = false;

Vue.use(VueSweetalert2);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
