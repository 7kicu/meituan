<template>
  <div class="tour">
    <!-- 头部 -->
    <tour-top></tour-top>
    <!-- 导航 -->
    <search></search>
    <!-- 内容 -->
    <TourContent :gation="gation"></TourContent>
    <foot></foot>
  </div>
</template>
<script>
import TourTop from '@/components/Navlist/components/components/TourTop'
import search from './list11components/search'
import foot from '@/common/foot'
import TourContent from '@/components/Navlist/components/components/TourContent'
import { getGation, gethuoguo } from '@/api/apidata.js'
export default {
  name: 'tour',
  data () {
    return {
      huoguo: {},
      gation: {}
    }
  },
  components: {
    TourTop,
    search,
    TourContent,
    foot
  },
  created () {
    gethuoguo().then(res => {
      this.huoguo = res.data
    })
    getGation().then(res => {
      this.gation = res.data
    })
  }
}
</script>
<style lang="less" scoped>
</style>
