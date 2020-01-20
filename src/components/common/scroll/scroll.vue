<template>
  <div ref="scroll">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: "scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs['scroll'], {
        click: true,
        mouseWheel: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      if(this.probeType === 1 || this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position)=> {
          this.$emit('scroll', position);
        });
      }
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', ()=>{
          this.$emit('pullingUp');
        })
      }
    },
    methods: {
      scrollTo(x, y, time = 50) {
        this.scroll.scrollTo(x, y, time);
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0;
      },
      getScrollX() {
        return this.scroll ? this.scroll.x : 0;
      }
    }
  }
</script>

<style scoped>
</style>
