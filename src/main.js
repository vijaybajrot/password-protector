// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* Import Css */
import './assets/sass/app.scss';

import Vue from 'vue';
import App from './App';
import Alert from './components/Alert';
import router from './router';
import axios from 'axios';
import jQuery from "jquery";
import bootstrap from "bootstrap";
import {isObjEmpty} from "@/core/Helper";
import VuePaginate from 'vue-paginate';


Vue.use(VuePaginate);

window._ = require('lodash');
window._array = require('lodash/array');
window._object = require('lodash/fp/object');
window.qs = require('qs');
window.jQuery = jQuery;
window.$ = jQuery;
window.serverUrl = "http://127.0.0.1:8000/api";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = serverUrl;
window.axios = axios;


Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: '#app',
  router,
  components: { App, Alert },
  template: '<App/>'
})
