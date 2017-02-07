import Vue from 'vue';
import Vuex from 'vuex';

import resize from './modules/resize';
import artworks from './modules/artworks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    resize,
    artworks
  }
});