import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    a:1,
    b:2
  },
  modules: {
  }
});

export default store;
