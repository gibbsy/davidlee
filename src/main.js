import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

//Vue.http.options.root = 'http://localhost:8888/wp-rest/wp/wp-json/wp/v2'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
