<template>
  <navBar>
    <div class="back" slot="left" @click="itemBack">
      <img src="~@/assets/img/default/back.svg" alt="">
    </div>
    <div class="title" slot="center" v-for="(item, i) in titles" @click="itemClick">
      titles[i]
    </div>
  </navBar>
</template>

<script>
  import navBar from '@/components/common/navBar';
  export default {
    name: "navBar",
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
    height:100%;
  }
  .back img {
    height: 100%;
  }
  .title {
    height: 100%;
    line-height: 100%;
    text-align: center;
    font-size: 12px;
    color: $color-text;
    margin: 0 5px 0 5px;
  }
</style>
