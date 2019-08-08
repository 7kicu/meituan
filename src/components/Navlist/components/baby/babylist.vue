<template>
  <div id="babyList">
    <ul>
      <router-link tag="li" to="/guess">猜你喜欢</router-link>
      <router-link tag="li" to="/child">儿童乐园</router-link>
      <router-link tag="li" to="/film">亲子摄影</router-link>
      <router-link tag="li" to="/english">幼儿外语</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'babyList'
}
</script>
<style lang="less" scoped>
#babyList {
  ul {
    border-top: 1px solid #f2f2f2;
    text-align: center;
    li {
      display: inline-block;
      margin-left: 20px;
      padding: 25px 30px;
      font-size: 25px;
    }
    li:hover {
      color: #06c1ae;
    }
  }
}
</style>
