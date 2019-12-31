<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :class="{active:isActive}">
      <slot name="item-icon"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabbar-item",
    props: {
      link: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.link) !== -1;
      }
    },
    methods: {
      itemClick() {
        console.log(this);
        if(this.link !== this.$route.path) {
          this.$router.push(this.link);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-bar-item {
    position: relative;
    font-size: 14px;
    flex: 1;
    text-align: center;
    height: 49px;
    width: 30px;
    overflow: hidden;
  }

  .tab-bar-item img {
    width: 28px;
    height: 28px;
  }
  .active {
    position: relative;
    left: -10000px;
    filter: drop-shadow( 10000px 0px 0 $color-tint);
  }
</style>
