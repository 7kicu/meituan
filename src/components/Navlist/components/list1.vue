<template>
  <div id="list1">
    <!-- 头部 -->
    <list1-top></list1-top>
    <!-- 菜单导航 -->
    <list1-list :list1List="list1"></list1-list>
    <!-- 分割线 -->
    <p class="p"></p>
    <!-- 菜单导航 -->
    <search></search>
    <!-- 内容 -->
    <tour-content :gation="huoguo"></tour-content>
    <!-- 底部 -->
    <foot></foot>
  </div>
</template>
<script>

import list1Top from './list1components/list1-top'
import list1List from './list1components/list1-list'
import search from '../components/list11components/search'
import { getlist1List, gethuoguo } from '@/api/apidata'
import foot from '../../../common/foot'
import tourContent from './components/TourContent'

export default {
  name: 'list1',
  data () {
    return {
      list1: {},
      huoguo: {}
    }
  },
  components: {
    list1Top,
    list1List,
    search,
    foot,
    tourContent
  },
  created () {
    getlist1List().then(res => {
      this.list1 = res.data
    })
    gethuoguo().then(res => {
      this.huoguo = res.data
      // console.log(res.data)
    })
  }
}
</script>
<style lang="less" scoped>
.p {
  height: 0.3rem;
  background: rgb(240, 240, 240);
  width: 100%;
}
</style>
