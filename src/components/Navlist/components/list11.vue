<template>
  <div id="list11">
    <ped-top></ped-top>
    <img class="index_img" src="http://ms0.meituan.net/touch/img/download_banner.png" alt />
    <search></search>
    <Tour-content1 :gation="list11Content"></Tour-content1>
    <bottom></bottom>
    <foot></foot>
  </div>
</template>
<script>
import pedTop from './pedicure/pedTop'
import search from './list11components/search'
import TourContent1 from '@/components/Navlist/components/components/TourContent1'
import bottom from '@/components/eatin/bottom'
import foot from '@/common/foot'
import { getlist11Content } from '@/api/apidata.js'
export default {
  name: 'list11',
  components: {
    pedTop,
    search,
    TourContent1,
    bottom,
    foot
  },
  data () {
    return {
      list11Content: {}
    }
  },
  created () {
    getlist11Content().then(({ data }) => {
      this.list11Content = data.data
      // console.log(data.data)
    })
  }
}
</script>
<style lang="less" scoped>
#list11 {
  width: 100%;
  background: #f0efed;
  .index_img {
    width: 100%;
  }
}
</style>
