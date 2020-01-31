<template>
  <div class="cartButtonBar">
    <div class="checkAllButton">
      <check-button :isChecked="isSelectAll" @click.native="selectAllClick"></check-button>
      <div class="text">全选</div>
    </div>
    <div class="price">
      合计：￥{{totalPrice | toFixedTwoBit}}
    </div>
    <div class="calculate" @click="calcClick">
      去计算：({{cartLength}})
    </div>
  </div>
</template>

<script>
  import checkButton from '@/components/content/checkButton/checkButton';
  export default {
    name: "cartButtonBar",
    components: {
      checkButton
    },
    computed: {
      totalPrice() {
        return this.$store.state.cartList.filter(v=> {
          return v.checked;
        }).reduce((o, n)=> {
          return o + ( n.price * n.count );
        }, 0);
      },
      cartLength() {
        return this.$store.state.cartList.filter(v=> {
          return v.checked;
        }).length;
      },
      isSelectAll() {
        return this.$store.state.cartList.every(v=> v.checked);
      }
    },
    methods: {
      selectAllClick() {
        let select = !this.isSelectAll;
        this.$store.state.cartList.forEach((v)=> v.checked = select);
      },
      calcClick() {
        if(!this.$store.state.cartList.find(v=> v.checked)) {
          this.$toast.show('请选择购买的商品');
        }
      }
    },
    filters: {
      toFixedTwoBit(v) {
        if(typeof v === 'number') {
          return v.toFixed(2);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cartButtonBar {
    margin: 0 10px 0 10px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: $font-size;
    color: #666;
    .checkAllButton {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 60px;
      .text {
        margin-left: 5px;
      }
    }
    .price {
      margin-left: 15px;
      flex: 1;
    }
    .calculate {
      width: 100px;
    }
  }
</style>
