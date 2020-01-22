<template>
  <div class="cartButtonBar">
    <div class="checkAllButton">
      <check-button></check-button>
      <div class="text">全选</div>
    </div>
  </div>
</template>

<script>
  import checkButton from '@/components/content/checkButton/checkButton';
  export default {
    name: "cartButtonBar",
    components: {
      checkButton
    }
  }
</script>

<style lang="scss" scoped>
  .cartButtonBar {
    margin: 0 10px 0 10px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .checkAllButton {
      display: flex;
      flex-direction: row;
      align-items: center;
      .text {
        margin-left: 5px;
        font-size: 16px;
      }
    }
  }
</style>
