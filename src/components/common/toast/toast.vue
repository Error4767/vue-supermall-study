<template>
  <div class="toast" v-show='isShow'>
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, duration = 2000) {
        console.log('show toast');
        this.message = message;
        this.isShow = true;
        setTimeout(()=> {
          this.isShow = false;
          this.message = '';
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 8px 10px;
    color: #fff;
    font-size: 16px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, .75);
    z-index: 999;
  }
</style>
