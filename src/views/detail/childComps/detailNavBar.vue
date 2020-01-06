<template>
  <nav-bar>
    <div class="back" slot="left" @click="itemBack">
      <span>
        <img src="~@/assets/img/default/back.svg" alt="">
      </span>
    </div>
    <div slot="center" class="center">
      <div class="title" v-for="item in titles" @click="itemClick">
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
  import navBar from '@/components/common/navbar';
  export default {
    name: "detailNavBar",
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐']
      }
    },
    components: {
      navBar
    },
    methods: {
      itemBack() {
        this.$router.go(-1);
      },
      itemClick() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .back {
    height: $nav-bar-height;
    display: inline-block;
  }
  .back img {
    height: 70%;
    vertical-align: middle;
  }
  .center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: $color-background;
  }
  .title {
    height: $nav-bar-height;
    line-height: $nav-bar-height;
    text-align: center;
    font-size: $font-size-secondary-menu;
    color: $color-text;
    margin: 0 8px 0 8px;
  }
</style>
