<template>
  <div id="list16">
    <!-- 顶部固定导航 -->
    <list16-top v-if="show" id="top"></list16-top>
    <!-- 菜单导航-->
    <list16-header></list16-header>
    <header-list></header-list>
    <ul-list :List16="List16"></ul-list>
    <!-- 一元专享 -->
    <one-money :list16img="list16img"></one-money>
    <ul>
      <router-link tag="li" to="/guess1">音乐培训</router-link>
      <router-link tag="li" to="/child1">外语乐园</router-link>
      <router-link tag="li" to="/film1">美术培训</router-link>
      <router-link tag="li" to="/english1">职业培训</router-link>
    </ul>
    <router-view></router-view>
    <foot />
  </div>
</template>
<script>
import list16Top from './list16components/list16-top'
import list16Header from './list16components/list16-header'
import headerList from '@/components/Navlist/components/list16components/header-list1'
import ulList from '@/components/Navlist/components/list16components/ullist.vue'
import oneMoney from '@/components/Navlist/components/list16components/onemoney.vue'
import { getlist16List, getlist16img } from '@/api/apidata.js'
import babyCont from '../components/baby/babyCont'
import foot from '@/common/foot'
export default {
  name: 'list16',
  components: {
    list16Top,
    list16Header,
    headerList,
    ulList,
    oneMoney,
    babyCont,
    foot
  },
  data () {
    return {
      show: false,
      List16: {},
      list16img: {}
    }
  },
  created () {
    getlist16List().then(res => {
      this.List16 = res.data
    })
    getlist16img().then(res => {
      this.list16img = res.data
    })
  },
  methods: {
    move () {
      this.show = true
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop === 0) {
        this.show = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.move)
  }
}
</script>
<style lang="less" scoped>
#list16 {
  background: url(./list16components/img/background.jpg);
  height: 1000px;
  ul {
    border-top: 1px solid #f2f2f2;
    text-align: center;
    li {
      display: inline-block;
      margin-left: 20px;
      padding: 25px 30px;
      font-size: 25px;
    }
    li:hover {
      color: #06c1ae;
    }
  }
}
</style>
