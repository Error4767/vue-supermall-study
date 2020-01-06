import Vue from 'vue';
import Router from 'vue-router';
let home = ()=> import('@/views/home/home.vue');
let detail = ()=> import('@/views/detail/detail');

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
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  }
];
export default new Router({
  routes,
  mode: 'history'
})
