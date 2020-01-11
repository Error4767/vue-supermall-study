<template>
  <div class="goodsImages" v-if="Object.keys(detailInfo).length > 0">
    <div class="goodsKey">{{detailInfo.detailImage[0].key}}</div>
    <img v-for="image in detailInfo.detailImage[0].list" class="image" :src="image" alt="" @load="imageLoaded">
  </div>
</template>

<script>
  export default {
    name: "goodsImages",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoaded() {
        this.$emit('imageLoaded');
      }
    },
    created() {
      this.imageLoaded = this.utils.debounce(this.imageLoaded, 100);
    }
  }
</script>

<style lang="scss" scoped>
  .goodsImages {
    width: 100%;
    .goodsKey {
      font-size: 15px;
      color: $color-text;
      margin: 12px;
      text-align: center;
    }
    img {
      max-width: 100%;
    }
  }
</style>
