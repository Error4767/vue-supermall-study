<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goodsItem="item" :key="randomId(10)"></goods-list-item>
  </div>
</template>

<script>
  import goodsListItem from './goodsListItem';
  export default {
    name: "goodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      randomId(length = 10) {
        return baseFunction.randomID(length);
      }
    },
    components: {
      goodsListItem
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
  }
</style>
