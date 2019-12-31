<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.image">
      <a :href="item.link" target="_blank">
        <img :src="item.image" :alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recommendView",
    props: ['recommends']
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    flex-direction: row;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding-top: 15px;
    padding-bottom: 25px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 70px;
    height: 70px;
  }
  .recommend-item div, .recommend-item a {
    text-decoration: none;
    color: #333;
  }
</style>
