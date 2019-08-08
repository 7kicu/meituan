<template>
  <div class="Pedicure">
    <!-- 头部 -->
    <ped-top></ped-top>
    <!-- banner -->
    <img src="//ms0.meituan.net/touch/img/download_banner.png" alt width="100%" />
    <!-- 导航 -->
    <Navigation></Navigation>
    <!-- SPA -->
    <spa></spa>
  </div>
</template>
<script>
import pedTop from '@/components/components/pedicure/pedTop'
import Navigation from '@/components/components/pedicure/Navigation'
import spa from '@/components/components/pedicure/spa'
export default {
  name: 'Pedicure',
  components: {
    pedTop,
    Navigation,
    spa
  }
}
</script>
<style lang="less" scoped>
.Pedicure {
  background: #dddddc;
}
</style>
