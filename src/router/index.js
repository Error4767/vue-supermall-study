import Vue from 'vue';
import Router from 'vue-router';
let home = ()=> import('@/views/home/home.vue');
let detail = ()=> import('@/views/detail/detail.vue');
let cart = ()=> import('@/views/cart/cart.vue');

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
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  }
];
export default new Router({
  routes,
  mode: 'history'
})
