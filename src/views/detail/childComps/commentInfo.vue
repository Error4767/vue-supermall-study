<script src="../../../../../../../function/functions/src/formatDate.js"></script>
<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length > 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="comment" v-for="comment in commentInfo.list">
      <div class="info-user">
        <img class="user-avatar" :src="comment.user.avatar" alt="">
        <div class="user-name">{{comment.user.uname}}</div>
      </div>
      <div class="info-detail">
        <div class='info-content'>{{comment.content}}</div>
        <div class="info-other">
          <div class="date">{{formatDate(comment.created)}}</div>
          <div class="style">{{comment.style}}</div>
        </div>
        <div class="info-images" v-if="typeof comment.images === 'object'">
          <img :src="item" alt="" v-for="(item, i) in comment.images" :key="i">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "commentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      formatDate(v) {
        return this.utils.formatDate(new Date(v * 1000), 'yyyy-MM-dd hh:mm');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .comment-info {
    margin: 12px;
    .info-header {
      margin: 15px 0 15px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .header-title, .header-more {
        font-size: 12px;
        color: $color-text;
      }
    }
    .comment {
      .info-user {
        margin: 5px 0 5px 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .user-avatar {
          display: block;
          font-size: 0;
          width: 30px;
          height: 30px;
          border-radius: 30px;
          margin-right: 10px;
        }
        .user-name {
          font-size: 14px;
        }
      }

      .info-detail {
        .info-content {
          text-align: left;
          font-size: 14px;
          color: $color-light-font;
        }
        .info-other {
          margin: 5px 0 5px 0;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          font-size: 12px;
          color: $color-very-light-font;
          .date {
            margin-right: 20px;
          }
        }
      }
    }
  }
</style>
