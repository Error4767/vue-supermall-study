<template>
  <div class="paramsInfo" v-if="Object.keys(paramsInfo).length > 0">
    <div class="size">
      <div class="sizeInfo" v-for="item in paramsInfo.rule.tables[0]">
        <div class="sizeText" v-for="text in item">{{text}}</div>
      </div>
    </div>
    <div class="params">
      <div v-for="item in paramsInfo.info.set" class="info">
        <div class="paramKey">{{item.key}}</div>
        <div class="paramValue">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "paramsInfo",
    props: {
      paramsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .paramsInfo{
    $textLineHeight: 30px;
    $borderColor: #eeeeee;
    margin: 12px;

    .size {
      width: 100%;
      .sizeInfo {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: 0 0 10px 0;
        min-height: 30px;
        border-bottom: 1px solid $borderColor;
        .sizeText {
          flex: 1;
          font-size: 14px;
          color: $color-text;
          text-align: left;
          line-height: $textLineHeight;
        }
      }
    }

    .params {
      width: 100%;
      .info {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        min-height: 30px;
        border-bottom: 1px solid $borderColor;
        align-items: center;
        .paramKey {
          width: 30%;
          font-size: 14px;
          color: $color-text;
          text-align: left;
          line-height: $textLineHeight;
        }
        .paramValue {
          flex: 1;
          font-size: 14px;
          color: $color-tint;
          text-align: left;
          line-height: $textLineHeight;
        }
      }
    }
  }
</style>
