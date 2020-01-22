<template>
  <div class="checkButton" :class="{active: isChecked}">
    <img class="image" :style="{visibility: isChecked ? 'visible' : 'hidden'}" src="~@/assets/img/default/checkButton.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "checkButton",
    props: {
      isChecked: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .checkButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    border-radius: 20px;
    border: 1px solid #999;
    font-size: 0;
    .image {
      width: 100%;
    }
  }
  .active {
    border: 1px solid $color-tint;
  }
</style>
