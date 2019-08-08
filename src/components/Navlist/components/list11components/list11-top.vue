<template>
  <div class="list11-top">
    <router-link to="/" class="router1">
      <i class="iconfont">&#xe63a;</i>
    </router-link>
    <span>分类</span>
    <router-link to="/" class="router2">
      <i class="iconfont">&#xe61d;</i>
      <p>我的</p>
    </router-link>
    <router-link to="/" class="router3">
      <i class="iconfont">&#xe603;</i>
      <p>搜索</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'list11-top',
  props: ['list11']
}
</script>

<style lang="less" scoped>
.list11-top {
  height: 100px;
  background: rgb(6, 193, 174);
  display: flex;
  span {
    width: 20%;
    height: 100%;
    margin: auto;
    padding-left: 40px;
    display: inline-block;
    line-height: 100px;
    color: white;
    font-size: 40px;
  }
  .router1 {
    display: inline-block;
    i {
      color: white;
      font-size: 50px;
      line-height: 100px;
      margin-left: 20px;
    }
  }
  .router2 {
    display: inline-block;
    padding-right: 0.5rem;
    margin-top: 0.1rem;
    i {
      color: white;
      font-size: 50px;
    }
    p {
      text-align: center;
      color: white;
    }
  }
  .router3 {
    display: inline-block;
    padding-right: 0.3rem;
    margin-top: 0.1rem;
    i {
      color: white;
      font-size: 50px;
    }
    p {
      text-align: center;
      color: white;
    }
  }
}
</style>
