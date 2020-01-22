<template>
  <div class="cartList">
    <scroll class="scroll">
      <div class="content">
        <cart-list-item v-for="product in $store.state.cartList" :product="product"></cart-list-item>
      </div>
    </scroll>
  </div>
</template>

<script>
  import scroll from '@/components/common/scroll/scroll.vue';
  import cartListItem from './cartListItem.vue';
  export default {
    name: "cartList",
    components: {
      scroll,
      cartListItem
    }
  }
</script>

<style scoped>
  .cartList {
    width: 100%;
    height: calc(100vh - 44px - 49px - 40px);
  }
  .scroll {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
