<template>
  <ul class="navList">
    <router-link tag="li" to="/">
      <span>周边游</span>
      <i class="iconfont">&#xe657;</i>
    </router-link>
    <router-link tag="li" to="/">
      <span>位置区域</span>
      <i class="iconfont">&#xe657;</i>
    </router-link>
    <router-link tag="li" to="/">
      <span>智能排序</span>
      <i class="iconfont">&#xe657;</i>
    </router-link>
    <router-link tag="li" to="/">
      <span>筛选</span>
      <i class="iconfont">&#xe657;</i>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'Navigation'
}
</script>
<style lang="less" scoped>
.navList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  li {
    width: calc(100% / 4);
    text-align: center;
    padding: 0.4rem 0;
    color: #666;
    font-size: 0.32rem;
    &.router-link-active {
      color: #06c1ae;
    }
  }
}
</style>
