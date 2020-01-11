<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img, i) in goods.images" :key="i">
        <img :src="img" :alt="goods.title" class="swiper-item-img" @load.once="loadedImage">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination" ref="swiperPagination"></div>
  </div>
</template>

<script>
  import Swiper from '_swiper@5.2.1@swiper';
  import '_node_modules/swiper/css/swiper.css';
  export default {
    name: "homeSwiper",
    props: ['goods'],
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
      goods() {
        console.log(this.goods);
        // swiper只会初始化一次
        if(!this.swiperAlreadyInit) {
          this.initSwiper();
        }
      }
    }
  }

</script>

<style scoped>
  .swiper-item-img {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .swiper-container {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    width: 100%;
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
