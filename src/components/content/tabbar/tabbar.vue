<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  import tabberItem from './tabbar-item.vue';
  export default {
    name: "tabbar",
    components: {
      'tabber-item': tabberItem
    }
  }
</script>

<style scoped>
  .tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,0);
  }
</style>
