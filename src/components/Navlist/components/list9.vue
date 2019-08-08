<template>
  <div id="eat">
    <eatin></eatin>
    <img class="index_img" src="http://ms0.meituan.net/touch/img/download_banner.png" alt />
    <search></search>
    <eatOpen></eatOpen>
    <eatOpens></eatOpens>
    <bottom></bottom>
    <foot></foot>
  </div>
</template>
<script>
import eatin from '@/components/eatin/eatin'
import search from './list11components/search'
import eatOpen from '@/components/eatin/eatOpen'
import eatOpens from '@/components/eatin/eatOpens'
import bottom from '@/components/eatin/bottom'
import foot from '@/common/foot'
export default {
  name: 'list9',
  components: {
    eatin,
    search,
    eatOpen,
    eatOpens,
    bottom,
    foot

  }
}
</script>
<style lang="less" scoped>
img {
  width: 100%;
}
#eat {
  background: #f0efed;
}
</style>
