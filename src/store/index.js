import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    a:1,
    b:2,
    cartList: []
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++;
    },
    addToCart(state, payload) {
      state.cartList.push(payload);
    }
  },
  actions: {
    addCart(context, payload) {
      let oldProduct = context.state.cartList.find((v)=> v.id === payload.id);
      if(oldProduct) {
        context.commit('addCounter', oldProduct);
      }else {
        payload.count = 1;
        context.commit('addToCart', payload);
      }
    }
  },
  modules: {
  }
});

export default store;
