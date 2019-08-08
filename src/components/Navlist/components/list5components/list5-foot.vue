<template>
  <div class="list5Foot">
    <ul>
      <li>
        <i class="iconfont">&#xe61a;</i>
        <p>首页</p>
      </li>
      <li>
        <router-link to="/">
          <i class="iconfont">&#xe738;</i>
          <p>订单</p>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <i class="iconfont">&#xe60c;</i>
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list5Foot'
}
</script>

<style lang="less" scoped>
.list5Foot {
  height: 1.2rem;
  position: fixed;
  bottom: 0;
  background: white;
  width: 100%;
  ul {
    display: flex;
    li {
      display: inline-block;
      width: calc(100% / 3);
      text-align: center;
      padding-top: 0.2rem;
      p {
        margin-top: 0.1rem;
      }
      i {
        font-size: 0.5rem;
        color: chocolate;
      }
      .router-link-active {
        display: block;
        i {
          font-size: 0.5rem;
          color: black;
        }
      }
    }
  }
}
</style>
