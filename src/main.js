import Vue from 'vue';
import App from './App';
import router from '@/router';
import store from '@/store';

import FastClick from 'fastclick';
import vueLazyLoad from 'vue-lazyload';
import toastPlugin from './components/common/toast/index.js';

Vue.use(toastPlugin);
Vue.use(vueLazyLoad);

FastClick.attach(document.body);

console.log(utils);
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;
console.log(def1, def2);
console.log('wweeeexx');
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
