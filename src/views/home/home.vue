<template>
  <div class="home">
    <nav-bar class="navBar">
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <tab-control class="tab-control tab-control-suckTop-Top"
                 :titles="titles"
                 @tabClick="tabClick"
                 ref="tabControl2"
                 v-show="tabControlVar.suckTop">
    </tab-control>
    <scroll class="scroll" ref="scroll"
            :probeType="3"
            @scroll="contentScroll"
            :pullUpLoad="true"
            @pullingUp="loadMore">
      <div class="content">
        <swiper class="swiper"
                :banners="banners"
                @loadedImage="initOffsetTop"></swiper>
        <recommend class="recommend" :recommends="recommends"></recommend>
        <tab-control class="tab-control"
                     :titles="titles"
                     @tabClick="tabClick"
                     ref="tabControl1"
                     v-show="!tabControlVar.suckTop">
        </tab-control>
        <good-list :goods="showGoods"></good-list>
      </div>
    </scroll>
    <back-top @click.native="backToTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  //components
  import navBar from '@/components/common/navbar';

  import tabControl from '@/components/content/tabControl/tabControl';
  import goodList from '@/components/content/goods/goodsList';


  import swiper from '@/components/content/swiper/homeSwiper';
  import recommend from '@/views/recommend/recommendView';
  //data
  import {getHomeMultiData} from '@/network/home.js';
  import {getHomeGoods} from '@/network/home.js';
  //other
  import scroll from '@/components/common/scroll/scroll';
  import backTop from '@/components/content/backTop/backTop';

  export default {
    name: "home",
    components: {
      navBar,
      tabControl,
      goodList,
      swiper,
      recommend,

      scroll,
      backTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: [
          {title: '流行'},
          {title: '精选'},
          {title: '新款'}
        ],
        goods: {
          pop: {
            page: 1,
            list: []
          },
          sell: {
            page: 1,
            list: []
          },
          new: {
            page: 1,
            list: []
          },
          currentType: 'pop'
        },
        isShowBackTop: false,
        updateTimes: 0,
        tabControlVar: {
          offsetTop: 0,
          suckTop: false
        },
        scrollY: 0,
        scrollX: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.goods.currentType].list;
      }
    },
    methods: {
      initHomeMultiData() {
        getHomeMultiData().then(res=> {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          console.log(this, res);
        });
      },
      loadHomeGoods() {
        Promise.all([
          getHomeGoods('pop', this.goods.pop.page++),
          getHomeGoods('sell', this.goods.sell.page++),
          getHomeGoods('new', this.goods.new.page++)
        ]).then((res)=> {
          let goodsList = res.map((v)=> {
            return v.data.list;
          });
          let goods = this.goods;
          goods.pop.list.push(...goodsList[0]);
          goods.sell.list.push(...goodsList[1]);
          goods.new.list.push(...goodsList[2]);
        })
      },
      initOffsetTop() {
        this.tabControlVar.offsetTop = this.$refs.tabControl1.$el.offsetTop - 40;
        console.log(this.tabControlVar.offsetTop);
      },
      tabClick(index) {
        switch (index) {
          case 0: this.goods.currentType = 'pop';
          break;
          case 1: this.goods.currentType = 'sell';
          break;
          case 2: this.goods.currentType = 'new';
        }
        console.log(this.$refs);
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backToTop() {
        this.$refs.scroll.scrollTo(0, 0, 300);
      },
      contentScroll(position) {
        this.isShowBackTop = -position.y > 1000;
        this.tabControlVar.suckTop = -position.y > this.tabControlVar.offsetTop;
      },
      loadMore() {
        let type = this.goods.currentType;
        getHomeGoods(type, this.goods[type].page++).then((res)=> {
          this.goods[type].list.push(...res.data.list);
          this.finishPullUp();
        })
      },
      finishPullUp() {
        this.$refs.scroll.scroll.finishPullUp();
      },
      refreshScrollContent() {
        this.$refs.scroll.scroll.refresh();
      }
    },
    created() {
      this.initHomeMultiData();
      this.loadHomeGoods();
      this.finishPullUp = this.utils.debounce(this.finishPullUp, 500);
    },
    mounted() {
      console.log(this.utils);
      let refresh = this.utils.debounce(this.refreshScrollContent, 50);
      this.$bus.$on('itemImageLoaded', ()=> {
        refresh();
      });
      //console.log(getComputedStyle(document.querySelector('.wrapper'), null)['height'],getComputedStyle(document.querySelector('.content'), null)['height']);
    },
    activated() {
      console.log('activated');
      this.$refs.scroll.scrollTo(0, this.scrollY, 0);
      this.refreshScrollContent();
    },
    deactivated() {
      this.scrollY = this.$refs.scroll.getScrollY();
      console.log(this.scrollY);
      console.log('deactivated');
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
  }
  .navBar {
    background-color: $color-tint;
  }
  .scroll {
    height: calc(100vh - 50px);
  }
  .content {
    padding-top: 44px;
  }
  .nav-bar {
    width: 100%;
    position: fixed;
    z-index: 10;
  }
  .tab-control {
    position: relative;
    background-color: $color-background;
  }
  .tab-control-suckTop-Top {
    top: 44px;
    z-index: 8;
  }
  .swiper {
    width: 100%;
  }
  .recommend {
    width: 100%;
  }
</style>
