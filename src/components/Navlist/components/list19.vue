<template>
  <div id="vouchers">
    <vouchersTop></vouchersTop>
    <img class="index_img" src="http://ms0.meituan.net/touch/img/download_banner.png" alt />
    <search></search>
    <vouchersOpen></vouchersOpen>
    <vouchersBottom></vouchersBottom>
    <foot></foot>
  </div>
</template>
<script>
import vouchersTop from '@/components/vouchers/vouchersTop'
import search from './list11components/search'
import vouchersOpen from '@/components/vouchers/vouchersOpen'
import vouchersBottom from '@/components/vouchers/vouchersBottom'
import foot from '@/common/foot'
export default {
  name: 'list19',
  components: {
    vouchersTop,
    search,
    vouchersOpen,
    vouchersBottom,
    foot
  }
}
</script>
<style lang="less" scoped>
img {
  width: 100%;
}
#vouchers {
  background: #f0efed;
}
</style>
