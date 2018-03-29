// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

let mix = require('laravel-mix');

Vue.config.productionTip = false;

mix.sass('src/assets/sass/app.scss', 'src/assets/css/app.css');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
