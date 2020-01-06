<template>
  <div id="app">
    <div class="content">
      <keep-alive exclude="detail">
        <router-view></router-view>
      </keep-alive>
    </div>
    <tab-bar class="tab-bar"></tab-bar>
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
  },
  created() {
    console.log('dev');
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
  .tab-bar {
    z-index: 50;
  }
</style>
