<template>
  <div id="list18">
    <!-- 头部 -->
    <list-top></list-top>
    <!-- 分类 -->
    <div class="cla">
      <router-link tag="div" to="/list18Child1">
        <p>装修公司</p>
      </router-link>
      <router-link tag="div" to="/Classify">
        <p>家装建材</p>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// import hometop from '@/common/hometop'
import ListTop from '@/components/Navlist/components/list18/ListTop'
import Classify from '@/components/Navlist/components/list18/Classify'
import list18Child1 from '@/components/Navlist/components/list18/list18Child1'
export default {
  name: 'list18',
  data () {
    return {
    }
  },

  components: {
    ListTop,
    Classify,
    list18Child1
  }
}
</script>
<style lang="less" scoped>
.cla {
  width: 100%;
  height: 44 * 2px;
  display: flex;
  justify-content: center;
  border-bottom: 1 * 2px solid #eee;
  div p {
    font-size: 14 * 2px;
    width: 177 * 2px;
    text-align: center;
    display: inline-block;
    line-height: 44 * 2px;
    color: #111;
  }
  div p:hover {
    font-weight: bold;
    border-bottom: 3 * 2px solid #07be61;
  }
}
</style>
