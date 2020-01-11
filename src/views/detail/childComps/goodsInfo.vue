<template>
  <div class="goodsInfo">
    <div class="goodsTitle">
      {{goodsInfo.title}}
    </div>
    <div class="price">
      <div class="currentPrice">
        {{goodsInfo.price}}
      </div>
      <div class="oldPrice">
        {{goodsInfo.oldPrice}}
      </div>
      <activity-price class="activity-price"></activity-price>
    </div>
    <div class="columns">
      <div class="columns-item" v-for="item in goodsInfo.columns">
        {{item}}
      </div>
    </div>
    <div class="service">
      <div class="serviceItem" v-for="item in goodsInfo.services">
        <img src="~@/assets/img/yes.svg" alt="">
        <span class="serviceName">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import activityPrice from '@/components/common/activityPrice';
  export default {
    name: "goodsInfo",
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      activityPrice
    }
  }
</script>

<style lang="scss" scoped>
  .goodsInfo {
    margin: 0 12px 0 12px;

    .goodsTitle {
      font-size: 16px;
      margin: 12px 0 12px 0;
      text-align: left;
      font-weight: bold;
    }

    .price {
      height: 25px;
      margin: 15px 0 15px 0;
      display: flex;
      justify-content: left;
      align-items: flex-end;
      .currentPrice {
        font-size: 20px;
        color: $color-tint;
        margin-right: 8px;
      }
      .oldPrice {
        font-size: 14px;
        text-decoration: line-through;
        color: #666;
        margin-right: 8px;
      }
      .activity-price {
        align-self: flex-start;
      }
    }

    .columns {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 15px;
      margin: 5px 0 5px 0;
      .columns-item {
        line-height: 15px;
        font-size: 10px;
        color: #666;
      }
    }

    .service {
      padding: 10px 0 10px 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      font-size: 12px;
      .serviceItem {
        display: flex;
        align-items: center;
        margin: 5px;
      }
      img {
        width: 12px;
        height: 12px;
      }
    }
  }
</style>
