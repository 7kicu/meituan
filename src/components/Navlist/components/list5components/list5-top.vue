<template>
  <div class="list5Top">
    <div class="left">
      <router-link to="/">
        <i class="iconfont">&#xe647;</i>
        郑州高新工程检测中心
        <i class="iconfont">&#xe731;</i>
      </router-link>
    </div>
    <div class="right">
      <router-link to="/">
        <i class="iconfont">&#xe603;</i>
        <input type="text" placeholder="请输入商家或商品名称" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list5Top'
}
</script>

<style lang="less" scoped>
.list5Top {
  height: 1.2rem;
  background: rgb(28, 27, 32);
  display: flex;
  width: 100%;
  z-index: 100;
  position: fixed;
  padding: 0 10px;
  top: 0;
  color: white;
  .left {
    display: inline-block;
    width: 53%;
    font-size: 0.4rem;
    .router-link-active {
      display: block;
      color: white;
    }
    i {
      color: white;
      line-height: 1rem;
      font-size: 0.4rem;
    }
  }
  .right {
    display: inline-block;
    width: 40%;
    background: lightgray;
    border-radius: 100px;
    height: 50%;
    margin-top: 0.2rem;
    .router-link-active {
      display: block;
      color: white;
    }
    i {
      color: black;
      font-size: 0.4rem;
      font-weight: bold;
      margin-left: 0.2rem;
      line-height: 0.7rem;
    }
    input {
      width: 60%;
      background: lightgray;
      height: 90%;
      line-height: 100%;
      margin-top: -0.2rem;
      font-size: 0.4rem;
    }
  }
}
</style>
