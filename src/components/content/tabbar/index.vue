<template>
  <div>
    <tabbar class="tab-bar">
      <tabbar-item link="/home" activeColor="blue">
        <img slot="item-icon" src="~@/assets/img/tabbar/home_page.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item link="/class" activeColor="green">
        <img slot="item-icon" src="~@/assets/img/tabbar/class.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item link="/cart" activeColor="deepPink">
        <img slot="item-icon" src="~@/assets/img/tabbar/shopping_cart.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item link="/user" activeColor="purple">
        <img slot="item-icon" src="~@/assets/img/tabbar/user.svg" alt="">
        <div slot="item-text">用户</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import tabbar from './tabbar.vue';
  import tabbarItem from './tabbar-item.vue';
  export default {
    name: "mainTabBar",
    components: {
      tabbar,
      'tabbar-item': tabbarItem
    }
  }
</script>

<style scoped>
  .tab-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 5px;
  }
</style>
