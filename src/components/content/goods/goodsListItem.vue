<template>
  <div class="goodsItem" @click="itemClick">
    <a @click="itemClick" target="_blank">
      <img class="item-img" :src="img" alt="goodsItem.title" @load="itemImageLoaded">
      <div class="title">{{goodsItem.title}}</div>
    </a>
    <div class="item-info">
      <span class="price">{{goodsItem.price}}</span>
      <img class="collect-icon" src="~@/assets/img/goods/collect.svg" alt="collect">
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goodListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      img() {
        return this.goodsItem.image || this.goodsItem.show.img;
      }
    },
    methods: {
      itemImageLoaded() {
        this.$bus.$emit('itemImageLoaded');
      },
      itemClick() {
        this.$router.push({
          path: '/detail',
          query: {
            id: this.goodsItem.iid
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goodsItem {
    position: relative;
    width: 150px;
    flex: 1;
    font-size: 12px;
    color: $color-text;
    margin: 4px 4px 6px 4px;
  }
  .item-info {
    margin: 6px 2px 2px 0;
  }
  .goodsItem a {
    text-decoration: none;
    color: $color-text;
  }
  .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .item-img {
    width: 100%;
    border-radius: 5px;
  }
  .collect-icon {
    width: 12px;
    height: 12px;
    margin: 0 2px 0 2px;
  }
  .price {
    color: $color-tint;
  }
</style>
