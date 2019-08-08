<template>
  <div>
    <ul class="wrap">
      <li v-for="(item, index) in main" :key="index">
        <router-link to="/">
          <span class="img">
            <img :src="item.pic" alt />
          </span>
          <span class="text">{{item.title}}</span>
        </router-link>
      </li>
    </ul>
    <ul class="more">
      <li>
        <router-link to="/">查看更多></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ToolList',
  props: ['main']
}
</script>
<style lang="less" scoped>
.wrap {
  padding: 30px 0;
  display: flex;
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
}
.more {
  text-align: center;
  font-size: 26px;
}
</style>
