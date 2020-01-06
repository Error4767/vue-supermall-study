<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in banners" :key="item.image">
        <a :href="item.link" class="swiper-item-a" target="_blank">
          <img :src="item.image" :alt="item.title" class="swiper-item-img" @load.once="loadedImage">
        </a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination" ref="swiperPagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import '_node_modules/swiper/css/swiper.css';
  export default {
    name: "homeSwiper",
    props: ['banners'],
    data() {
      return {
        swiperAlreadyInit: false
      }
    },
    methods: {
      initSwiper() {
        // 确保在vue渲染完毕后初始化swiper
        setTimeout(()=> {
          var swiper = new Swiper(this.$refs['swiperContainer'], {
            autoplay: true,
            pagination: {
              el: this.$refs['swiperPagination'],
              clickable: true
            },
          });
        })
      },
      loadedImage() {
        this.$emit('loadedImage');
      }
    },
    watch: {
      banners() {
        // swiper只会初始化一次
        if(!this.swiperAlreadyInit) {
          this.initSwiper();
        }
      }
    }
  }

</script>

<style scoped>
  .swiper-item-a {
    width: 100%;
    font-size: 0;/*去除行距*/
    text-decoration: none;
  }
  .swiper-item-img {
    width: 100%;
    height: 100%;
  }
  .swiper-container {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
