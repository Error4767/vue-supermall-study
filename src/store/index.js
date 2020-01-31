import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters.js';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    a:1,
    b:2,
    cartList: []
  },
  getters,
  mutations: {
    addCounter(state, payload) {
      payload.count++;
    },
    addToCart(state, payload) {
      payload.checked = false;
      state.cartList.push(payload);
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject)=> {
        let oldProduct = context.state.cartList.find((v)=> v.id === payload.id);
        if(oldProduct) {
          context.commit('addCounter', oldProduct);
          resolve('addCounter');
        }else {
          payload.count = 1;
          context.commit('addToCart', payload);
          resolve('addToCart');
        }
      });
    }
  },
  modules: {
  }
});

export default store;
