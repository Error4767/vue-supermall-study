<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车({{$store.getters.cartLength}})
      </div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-button-bar></cart-button-bar>
  </div>
</template>

<script>
  import navBar from '@/components/common/navbar/index.vue';
  import cartList from './childComps/cartList.vue';
  import cartButtonBar from './childComps/cartButtonBar';
  export default {
    name: "cart",
    components: {
      navBar,
      cartList,
      cartButtonBar
    },
    created() {
      window.store = this.$store;
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    font-size: 16px;
    background-color: $color-tint;
    color: #fff;
  }
</style>
