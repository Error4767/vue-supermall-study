import Vue from 'vue';
import App from './App';
import router from '@/router';
import store from '@/store';

Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;
console.log(vuex1);
console.log(def1, def2);
console.log('wweeeexx');
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
