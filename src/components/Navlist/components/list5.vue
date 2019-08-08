<template>
  <div id="list5">
    <!-- 头部 -->
    <list5-top></list5-top>
    <!-- 菜单导航 -->
    <list5-list :list5List="list5List"></list5-list>
    <!-- 附近商家 -->
    <h3>附近商家</h3>
    <search></search>
    <!-- 内容区 -->
    <food :food="food" class="content"></food>
    <!-- 底部 -->
    <list5-foot></list5-foot>
  </div>
</template>
<script>
import list5Top from './list5components/list5-top'
import list5List from './list5components/list5-list'
import { getlist5List, getfood } from '@/api/apidata.js'
import search from './list11components/search'
import food from '@/common/food'
import list5Foot from './list5components/list5-foot'
export default {
  name: 'list5',
  data () {
    return {
      list5List: {},
      food: {}
    }
  },
  components: {
    list5Top,
    list5List,
    search,
    food,
    list5Foot
  },
  created () {
    getlist5List().then(res => {
      this.list5List = res.data
    })
    getfood().then(res => {
      this.food = res.data
      console.log(this.food)
    })
  }
}
</script>
<style lang="less" scoped>
h3 {
  font-size: 0.6rem;
  font-weight: bold;
  text-align: center;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  margin-bottom: 0.3rem;
}
h3::before {
  content: "";
  height: 1px;
  width: 3rem;
  background: #666;
  margin-right: 8px;
  transform-origin: 100% 50%;
  transform: scale(0.5);
  margin-top: 0.3rem;
  display: inline-block;
}
h3::after {
  content: "";
  height: 1px;
  width: 3rem;
  background: #666;
  margin-top: 0.3rem;
  margin-left: 8px;
  transform-origin: 0 50%;
  transform: scale(0.5);
  display: inline-block;
}
.content {
  margin-bottom: 1.3rem;
}
</style>
