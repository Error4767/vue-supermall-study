<template>
  <div class="detail">
    <detail-nav-bar class="nav-bar"></detail-nav-bar>
    <scroll class="scroll" ref="scroll">
      <div class="content">
        <detail-swiper class="swiper" :goods="goods"></detail-swiper>
        <goods-info :goodsInfo="goodsInfo"></goods-info>
        <shop-info :shopInfo='shopInfo'></shop-info>
        <comment-info :commentInfo="commentInfo"></comment-info>
        <goods-images :detailInfo="detailInfo" @imageLoaded="imageLoaded"></goods-images>
        <params-info :paramsInfo="paramsInfo"></params-info>
      </div>
    </scroll>
  </div>
</template>

<script>

  //component
  import scroll from '@/components/common/scroll/scroll';
  import detailNavBar from './childComps/detailNavBar';
  import detailSwiper from './childComps/detailSwiper';
  import goodsInfo from './childComps/goodsInfo';
  import shopInfo from './childComps/shopInfo';
  import goodsImages from './childComps/goodsImages';
  import paramsInfo from './childComps/paramsInfo';
  import commentInfo from './childComps/commentInfo';
  //request
  import {getDetail}  from '@/network/detail.js';

  //handleData
  import {Goods} from './detail.js';
  import {Shop} from './detail.js';
  export default {
    name: "detail",
    data() {
      return {
        id: null,
        topImages: [],
        goods:{},
        goodsInfo: {},
        shopInfo: {},
        detailInfo: {},
        paramsInfo: {},
        commentInfo: {}
      }
    },
    components: {
      scroll,
      detailNavBar,
      detailSwiper,
      goodsInfo,
      shopInfo,
      goodsImages,
      paramsInfo,
      commentInfo
    },
    methods: {
      imageLoaded() {
        this.$refs.scroll.scroll.refresh();
      }
    },
    created() {
      console.log('detail created');
      this.id = this.$route.query.id;
      getDetail(this.id).then((res)=> {
        let data = res.result;
        console.log(res);

        let goods = new Goods(res);
        this.goods = goods;

        //商品信息
        this.goodsInfo = goods;

        //店铺信息
        this.shopInfo = new Shop(res);

        //商品详细信息
        this.detailInfo = data.detailInfo;

        //商品参数
        this.paramsInfo = data.itemParams;

        //商品评论
        this.commentInfo = data.rate;
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
  .nav-bar {
    background-color: $color-background;
  }
  .detail {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 51;
    background-color: $color-background;
  }
  .scroll {
    height: calc(100vh - 44px);
    overflow: hidden;
  }
  .swiper {
    display: block;
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;
  }
</style>
