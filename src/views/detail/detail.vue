<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    {{id}}
  </div>
</template>

<script>
  import detailNavBar from './childComps/detailNavBar';
  export default {
    name: "detail",
    data() {
      return {
        id: null
      }
    },
    components: {
      detailNavBar
    },
    created() {
      this.id = this.$route.query.id;
    }
  }
</script>

<style scoped>

</style>
