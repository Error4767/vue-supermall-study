<template>
  <div class="item">
    <check-button class="checkButton" :isChecked="product.checked" @click.native="checkClick"></check-button>
    <div class="image">
      <img :src="product.image" :alt="product.title">
    </div>
    <div class="info">
      <div class="title">
        {{product.title}}
      </div>
      <div class="desc">{{product.desc}}</div>
      <div class="priceAndCount">
        <div class="price">￥{{product.price}}</div>
        <div class="count">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import checkButton from '@/components/content/checkButton/checkButton';
  export default {
    name: "cartListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkClick() {
        this.product.checked  = this.product.checked ? false : true;
      }
    },
    components: {
      checkButton
    }
  }
</script>

<style lang="scss" scoped>
  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 15px);
    padding: 10px 10px 10px 5px;
    border-bottom: 1px solid #ddd;
    .checkButton {
      margin-right: 5px;
    }
    .image {
      margin-right: 10px;
      width: 30%;
      border-radius: 8%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .info {
      margin: 10px 0 10px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: $color-text;
      text-align: left;
      min-width: 0;
      flex: 1;
      align-self: stretch;
      .title {
        font-size: 16px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .desc {
        font-size: 14px;
        color: #666;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .priceAndCount {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .price {
          font-size: 16px;
          color: orange;
        }
        .count {
          font-size: 14px;
        }
      }
    }
  }

</style>
