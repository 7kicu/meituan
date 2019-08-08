<template>
  <div id="list14">
    <!-- 头部 -->
    <ped-top></ped-top>
    <!-- banner -->
    <img src="//ms0.meituan.net/touch/img/download_banner.png" alt width="100%" />
    <!-- 导航 -->
    <search></search>
    <!-- 广告 -->
    <div class="poster">
      <span class="span1">精选商户</span>
      <span class="span2">广告</span>
    </div>
    <!-- 内容 -->
    <list14content></list14content>
    <bottom></bottom>
    <foot></foot>
  </div>
</template>
<script>
import pedTop from './pedicure/pedTop'
import search from './list11components/search'
import list14content from './list14/list14content'
import bottom from '@/components/eatin/bottom'
import foot from '@/common/foot'
import content from '@/common/content'

export default {
  name: 'list14',
  components: {
    pedTop,
    search,
    list14content,
    bottom,
    foot,
    content
  }
}
</script>
<style lang="less" scoped>
#list14 {
  width: 100%;
  background: #f0efed;
  .poster {
    width: 95%;
    height: 50px;
    padding-left: 5%;
    display: flex;
    color: #999;
    line-height: 50px;
    font-size: 28px;
    .span1 {
      width: 90%;
    }
    .span2 {
      width: 10%;
      // text-align: right;
    }
  }
}
</style>
