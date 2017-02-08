import Vue from 'vue';
import Vuex from 'vuex';

import resize from './modules/resize';
import scroll from './modules/scroll';
import artworks from './modules/artworks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    resize,
    scroll,
    artworks
  }
});