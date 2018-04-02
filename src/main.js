// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import './assets/sass/app.scss';

window.serverUrl = "http://127.0.0.1:8000/api";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = serverUrl;
window.axios = axios;


Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: '#app',
  router,
  components: { App },
  template: '<App/>'
})
