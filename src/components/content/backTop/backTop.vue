<template>
  <div class="back-top">
    <div class="position">
      <img src="~@/assets/img/backTop.svg" alt="backTop">
    </div>
  </div>
</template>

<script>
  export default {
    name: "backTop"
  }
</script>

<style lang="scss" scoped>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
    z-index: 7;
    width: 44px;
    height: 44px;
    border-radius: 44px;
    overflow: hidden;
    background-color: $color-background;
  }
  .position {
    position: relative;
    width: 100%;
    height: 100%;
    left: -10000px;
    filter: drop-shadow( 10000px 0px 0 $color-tint);
    overflow: hidden;
    text-align: center;
  }
  .back-top img {
    width: 100%;
    height: 100%;
  }
</style>
