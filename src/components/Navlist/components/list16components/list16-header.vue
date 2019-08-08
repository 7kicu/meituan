<template>
  <div class="header">
    <div class="top">
      <router-link to="/" class="router1">
        <i class="iconfont">&#xe63a;</i>
      </router-link>
      <router-link to="/" class="router2">学习培训</router-link>
      <router-link to="/" class="router3">
        <i class="iconfont">&#xe603;</i>
        <input type="text" placeholder="搜索" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list16Header'
}
</script>

<style lang="less" scoped>
.header {
  .top {
    height: 1.5rem;
    padding-top: 0.5rem;
    position: relative;
    router-link {
      display: block;
    }
    .router1 {
      i {
        font-size: 0.7rem;
        line-height: 1.5rem;
        color: green;
        margin-left: 0.3rem;
      }
    }
    .router2 {
      color: green;
      font-size: 0.7rem;
      font-weight: bold;
    }
    .router3 {
      position: absolute;
      right: 0.3rem;
      height: 50%;
      width: 4rem;
      background: white;
      border-radius: 60px;
      margin-top: 0.2rem;
      i {
        margin-left: 0.5rem;
        font-size: 0.5rem;
        line-height: 1rem;
      }
      input {
        width: 50%;
        height: 80%;
        line-height: 1rem;
        font-size: 0.5rem;
        margin-left: 0.3rem;
      }
    }
  }
}
</style>
