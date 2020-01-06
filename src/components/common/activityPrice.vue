<template>
  <div class="activityPrice">
    <span>活动价</span>
  </div>
</template>

<script>
  export default {
    name: "activityPrice"
  }
</script>

<style lang="scss" scoped>
  .activityPrice {
    display: table;
    font-size: 12px;
    width: 50px;
    height: 20px;
    border-radius: 20px;
    background-color: $color-tint;
  }
  .activityPrice span {
    line-height: 20px;
    color: #ffffff;
  }
</style>
