<template>
  <div class="list16Top">
    <router-link to="/">
      <i class="iconfont return">&#xe63a;</i>
    </router-link>
    <router-link to="/" class="router2">
      <span>
        <i class="iconfont">&#xe603;</i>搜索
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'list16Top'
}
</script>

<style lang="less" scoped>
.list16Top {
  height: 1.2rem;
  display: flex;
  width: 100%;
  z-index: 100;
  position: fixed;
  padding: 0 10px;
  top: 0;
  color: white;
  background: white;
  z-index: 100;
  router-link {
    display: block;
  }
  .return {
    font-size: 0.6rem;
    line-height: 1.2rem;
    color: green;
  }
  .router2 {
    display: inline-block;
    right: 0.5rem;
    top: 24%;
    width: 80%;
    height: 50%;
    position: absolute;
    border-radius: 60px;
    box-shadow: 5px 5px 5px 5px lightgray;
    span {
      display: inline-block;

      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 0.6rem;
      color: green;
      font-size: 0.4rem;
      i {
        color: green;
        margin-right: 0.1rem;
        font-size: 0.4rem;
        font-weight: bold;
      }
    }
  }
}
</style>
