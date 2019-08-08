<template>
  <ul class="wrap">
    <li v-for="(item, index) in nav" :key="index">
      <router-link to="/">
        <span class="img">
          <img :src="item.pic" />
        </span>
        <span class="text">{{item.title}}</span>
      </router-link>
    </li>
  </ul>
</template>
<script>

export default {
  name: 'NavList',
  props: ['nav']
}
</script>
<style lang="less" scoped>
ul {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  padding: 30px 0;
  li {
    width: calc(100% / 5);
    height: 110px;
    text-align: center;
    a {
      .img {
        width: 70px;
        height: 70px;
        display: block;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        font-size: 24px;
        line-height: 34px;
      }
    }
  }
  li:nth-child(6),
  li:nth-child(7),
  li:nth-child(8),
  li:nth-child(9),
  li:nth-child(10) {
    margin-top: 40px;
  }
}
</style>
