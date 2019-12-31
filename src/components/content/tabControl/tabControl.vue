<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,i) in titles"
    :class="{active: i === currentIndex}"
     @click="itemClick(i)">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-control {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 15px;
    color: #333;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: $color-high-text;
  }
  .active span {
    border-bottom: 3px solid $color-tint;
  }
</style>
