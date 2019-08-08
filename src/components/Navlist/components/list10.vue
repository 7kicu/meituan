<template>
  <div class="Pedicure">
    <!-- 头部 -->
    <ped-top></ped-top>
    <!-- banner -->
    <img src="//ms0.meituan.net/touch/img/download_banner.png" alt width="100%" />
    <!-- 导航 -->
    <search></search>
    <!-- SPA -->
    <spa></spa>

    <foot></foot>
  </div>
</template>
<script>
import pedTop from './pedicure/pedTop'
import spa from './pedicure/spa'
import search from './list11components/search'
import foot from '@/common/foot'
export default {
  name: 'Pedicure',
  components: {
    pedTop,
    spa,
    search,
    foot
  }
}
</script>
<style lang="less" scoped>
.Pedicure {
  background: #dddddc;
}
</style>
