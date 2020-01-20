<template>
  <div class="detailBottomBar">
    <div class="options">
      <div class="option">
        <img src="~@/assets/img/detail/custmerService.svg" alt="">
        <p>客服</p>
      </div>
      <div class="option">
        <img src="~@/assets/img/detail/shop.svg" alt="">
        <p>店铺</p>
      </div>
      <div class="option">
        <img src="~@/assets/img/detail/collect2.svg" alt="">
        <p>收藏</p>
      </div>
    </div>
    <div class="addToShoppingCar" @click="addToCart">添加到购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
  export default {
    name: "detailBottomBar",
    methods: {
      addToCart() {
        this.$emit('addToCart');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detailBottomBar {
    $height: 49px;

    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: $height;
    width: 100%;
    background-color: $color-background;
    .options {
      flex: 2;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .option {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        img {
          height: 24px;
        }
        p {
          margin-top: 5px;
          font-size: 10px;
        }
      }
    }
    .addToShoppingCar {
      flex: 1;
      background-color: yellow;
      line-height: $height;
      font-size: $font-size;
      padding: 0 2px 0 2px;
    }
    .buy {
      flex: 0.7;
      height: $height;
      line-height: $height;
      background-color: $color-tint;
      text-align: center;
      font-size: $font-size;
    }
  }
</style>
