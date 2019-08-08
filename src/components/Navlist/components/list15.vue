<template>
  <div id="list15">
    <baby-top></baby-top>
    <baby-cont></baby-cont>
    <ul>
      <router-link tag="li" to="/guess">猜你喜欢</router-link>
      <router-link tag="li" to="/child">儿童乐园</router-link>
      <router-link tag="li" to="/film">亲子摄影</router-link>
      <router-link tag="li" to="/english">幼儿外语</router-link>
    </ul>
    <router-view></router-view>
    <foot />
  </div>
</template>
<script>
import babyTop from '../components/baby/babyTop'
import babyCont from '../components/baby/babyCont'
import foot from '@/common/foot'
export default {
  name: 'list15',
  components: {
    babyTop,
    babyCont,
    foot
    // babyList
  }
}
</script>
<style lang="less" scoped>
#list15 {
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
