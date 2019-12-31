import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/home/home.vue';

Vue.use(Router);

let routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  }
];
export default new Router({
  routes,
  mode: 'history'
})
