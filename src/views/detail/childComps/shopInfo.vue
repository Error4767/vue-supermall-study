<template>
  <div class="shopInfo">
    <div class="info1">
      <img class="shopLogo" :src="shopInfo.logo" alt="">
      <div class="shopName">{{shopInfo.name}}</div>
    </div>
    <div class="info2">
      <div class="container1">
        <div class="salesContainer">
          <div class="sales">{{shopInfo.sells}}</div>
          <div class="salesText">总销量</div>
        </div>
        <div class="goodsCountContainer">
          <div class="goodsCount">{{shopInfo.goodsCount}}</div>
          <div class="goodsCountText">全部宝贝</div>
        </div>
      </div>
      <div class="score">
        <div v-for="item in shopInfo.score" class="scoreItem">
          <div class="spanItem">{{item.name}}</div>
          <div class="spanItem" :class="{better: item.isBetter, noBetter: !item.isBetter}">{{item.score}}</div>
          <div class="spanItem bgColor" :class="{better: item.isBetter, noBetter: !item.isBetter}">{{item.isBetter ? '低' : '高'}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shopInfo",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    created() {
      console.log(this.shopInfo);
    }
  }
</script>

<style lang="scss" scoped>
  .shopInfo {
    margin: 12px;
    .info1 {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .shopLogo {
        width: 40px;
        height: 40px;
        border-radius: 30px;
        border: 1px solid #ddd;
        margin-right: 10px;
      }
      .shopName {
        font-size: 16px;
        color: #666;
      }
    }
    .info2 {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .container1 {
        display: flex;
        justify-content: flex-start;
        .salesContainer, .goodsCountContainer {
          margin: 12px;
          .sales, .goodsCount {
            color: $color-text;
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 15px;
          }
          .salesText, .goodsCountText {
            color: $color-text;
            font-size: 12px;
          }
        }
      }

      .score {
        font-size: 12px;
        color: $color-text;
        margin: 12px;
        .scoreItem {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          margin-top: 10px;
          .spanItem {
            margin-left: 8px;
          }
          .spanItem.better.bgColor {
            background-color: green;
          }
          .spanItem.noBetter.bgColor {
            background-color: red;
          }
          .better {
            color: #4acd50;
          }
          .noBetter {
            color: #990000;
          }
        }
      }
    }
  }




</style>
