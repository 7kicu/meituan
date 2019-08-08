<template>
  <div id="babyTop">
    <router-link to="/">
      <i class="iconfont boby_l">&#xe63a;</i>
    </router-link>

    <span class="boby_c">
      <i class="iconfont">&#xe6ab;</i>
    </span>
    <i class="iconfont boby_r">&#xe603;</i>
  </div>
</template>
<script>
export default {
  name: 'babytop'
}
</script>
<style lang="less" scoped>
#babyTop {
  text-align: center;
  background: -webkit-linear-gradient(left, #ffe673, #ffcf4f);
  border-bottom: 1px solid #f2f2f2;
  padding: 40px;
  line-height: 0.8rem;
  border-radius: 0 0 50% 50%;
  i {
    font-size: 40px;
    color: #58440a;
  }
  .boby_c {
    padding: 0 40%;
  }
}
</style>
