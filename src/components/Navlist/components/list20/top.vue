<template>
  <div class="top">
    <div class="left">
      <router-link to="/">
        <i class="iconfont">&#xe63a;</i>
      </router-link>
    </div>
    <p>选择分类</p>
    <div class="right">
      <router-link to="/">
        <i class="iconfont">&#xe612;</i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.top {
  height: 1rem;
  line-height: 1rem;
  background: #06c1ae;
  border-bottom: 1px solid #21897d;
  padding-left: 2%;
  display: flex;
  .left {
    display: inline-block;
    i {
      font-size: 40px;
      color: #fff;
    }
  }
  p {
    width: 65%;
    margin: 0 2.7rem 0 2.7rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .right {
    display: inline-block;
    margin-right: 10px;
    i {
      font-size: 40px;
      color: #fff;
    }
  }
}
</style>
