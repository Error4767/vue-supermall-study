<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import home from './views/home/home.vue';
  import tabBar from '@/components/content/tabbar';
export default {
  name: 'app',
  components: {
    home,
    tabBar
  }
}
</script>

<style>
@import 'assets/css/reset.css';
@import 'assets/css/base.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
