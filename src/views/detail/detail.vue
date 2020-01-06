<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper class="swiper" :goods="goods"></detail-swiper>
    <div class="goodsTitle">
      {{goods.title}}
    </div>
    <div class="price">
      <div class="currentPrice">
        {{goods.price}}
      </div>
      <div class="oldPrice">
        {{goods.oldPrice}}
      </div>
      <activity-price class="activity-price"></activity-price>
    </div>
    <div class="columns">
      <div class="columns-item" v-for="item in goods.columns">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
  import detailNavBar from './childComps/detailNavBar';
  import detailSwiper from '@/components/content/swiper/detailSwiper';
  import {getDetail}  from '@/network/detail.js';
  import Goods from './detailResDataHandle';
  import activityPrice from '@/components/common/activityPrice';
  export default {
    name: "detail",
    data() {
      return {
        id: null,
        topImages: [],
        goods: {}
      }
    },
    components: {
      detailNavBar,
      detailSwiper,
      activityPrice
    },
    created() {
      console.log('detail created');
      this.id = this.$route.query.id;
      getDetail(this.id).then((res)=> {
        let data = res.result;
        console.log(res);
        let goods = new Goods(res);
        this.goods = goods;
        console.log(goods);
      })
    },
    activated() {
      console.log('来到');
    },
    deactivated() {
      console.log('切出')
    },
    destroyed()  {
      console.log('销毁');
    }
  }
</script>

<style lang="scss" scoped>
  .detail {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .swiper {
    display: block;
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;
  }
  .goodsTitle {
    font-size: 16px;
    margin: 12px;
    text-align: left;
  }
  .columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 15px;
    margin: 5px 12px 5px 12px;
  }
  .columns-item {
    line-height: 15px;
    font-size: 10px;
    color: #666;
  }
  .price {
    height: 25px;
    margin: 15px 12px 15px 12px;
    display: flex;
    justify-content: left;
    align-items: flex-end;
  }
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
</style>
