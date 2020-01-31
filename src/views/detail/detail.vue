<template>
  <div class="detail">
    <detail-nav-bar ref="navBar" class="nav-bar" @itemClick="navBarItemClick"></detail-nav-bar>
    <scroll class="scroll" ref="scroll" :probe-type="2" @scroll="scroll">
      <div ref="content" class="content">
        <detail-swiper class="swiper" :goods="goods"></detail-swiper>
        <goods-info :goodsInfo="goodsInfo"></goods-info>
        <shop-info ref="shopInfo" :shopInfo='shopInfo'></shop-info>
        <goods-images :detailInfo="detailInfo" @imageLoaded="imageLoaded"></goods-images>
        <params-info :paramsInfo="paramsInfo" ref="params"></params-info>
        <comment-info :commentInfo="commentInfo" ref="comment"></comment-info>
        <goods-list :goods="recommends" ref="recommend"></goods-list>
      </div>
    </scroll>
    <back-top @click.native="backToTop" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar :goods="goods" @addToCart="addToCart"></detail-bottom-bar>
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
  import goodsList from '@/components/content/goods/goodsList';
  import detailBottomBar from './childComps/detailBottomBar';
  import backTop from '@/components/content/backTop/backTop';

  //request
  import {getDetail}  from '@/network/detail.js';
  import {getRecommends} from '@/network/detail.js';

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
        commentInfo: {},
        recommends: [],
        themeScrollTop:[],
        isShowBackTop: false
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
      commentInfo,
      goodsList,
      detailBottomBar,
      backTop
    },
    methods: {
      imageLoaded() {
        this.$refs.scroll.scroll.refresh();
        this.getThemeScrollTop();
      },
      navBarItemClick(i) {
        this.$refs.scroll.scrollTo(0, -this.themeScrollTop[i]);
      },
      scroll(p) {
        this.isShowBackTop = -p.y > 1000;
        let currentIndex = -1;
        for(let i = 0, length = this.themeScrollTop.length; i <= length; i++) {
          if(-p.y >= this.themeScrollTop[i]) {
            currentIndex++;
          }
        }
        if(currentIndex !== this.$refs.navBar.currentIndex) {
          this.$refs.navBar.currentIndex = currentIndex;
        }
      },
      backToTop() {
        this.$refs.scroll.scrollTo(0, 0, 300);
      },
      addToCart() {
        const product = {
          image: this.topImages[0],
          title: this.goodsInfo.title,
          desc: this.goodsInfo.desc,
          price: this.goodsInfo.realPrice,
          id: this.id
        }
        console.log(this.topImages);
        this.$store.dispatch('addCart', product).then((result)=> {
          console.log(result);
          if(result === 'addToCart') {
            this.$toast.show('添加了新的商品');
          }else if (result === 'addCounter') {
            this.$toast.show('当前的商品数量+1');
          }
        });
      }
    },
    created() {
      this.scroll = utils.debounce(this.scroll, 20);
      console.log('detail created');
      this.id = this.$route.query.id;
      getRecommends().then((res)=> {
        console.log('recommend', res);
        this.recommends = res.data.list;
      })
      getDetail(this.id).then((res)=> {
        let data = res.result;
        console.log(res);

        let goods = new Goods(res);
        this.goods = goods;
        this.topImages = goods.images;

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
      });
      this.getThemeScrollTop = ()=> {
        this.themeScrollTop = [];
        this.themeScrollTop.push(0);
        this.themeScrollTop.push(this.$refs.params.$el.offsetTop);
        this.themeScrollTop.push(this.$refs.comment.$el.offsetTop);
        this.themeScrollTop.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.themeScrollTop);
      };
      //this.$nextTick();
    },
    mounted() {
      this.itemImageListener = utils.debounce(()=> {
        console.log('recommend refresh in detail');
        this.imageLoaded();
      }, 100);
      this.$bus.$on('itemImageLoaded', this.itemImageListener);

      //交叉观察者测试
      {
        let observerTarget = this.$refs.scroll.$el;
        console.log(observerTarget, this.$refs);
        let options = {
          root: observerTarget,
          rootMargin: '0px',
          threshold: [0, 0.5, 1]
        };
        let callback = (entries)=> {
          console.log(entries[0]);
        }
        let observer = new IntersectionObserver(callback, options);
        console.log(observer);
        console.log(this.$refs.shopInfo.$el);
        observer.observe(this.$refs.shopInfo.$el);
        console.log(observer.takeRecords());
      }
      //

    },
    destroyed()  {
      this.$bus.$off('itemImageLoaded', this.itemImageListener);
      console.log('销毁');
    },
    activated() {
      console.log('来到');
    },
    deactivated() {
      console.log('切出')
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
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }
  .swiper {
    display: block;
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;
  }
</style>
