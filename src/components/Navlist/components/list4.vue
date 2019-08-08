<template>
  <div id="list4">
    <div class="header">
      <div class="header-left">
        <router-link to="/">
          <i class="iconfont city_top_l"></i>
        </router-link>
      </div>
      <p>分类</p>
      <div class="header-right">
        <router-link to="/my">
          <span>
            <i class="iconfont city_top_l">&#xe63a;</i>
            我的
          </span>
        </router-link>
        <router-link to="/seach">
          <span>
            <i class="iconfont city_top_l"></i>
            搜索
          </span>
        </router-link>
      </div>
    </div>
    <!-- header -->
    <div class="banner">
      <img
        data-v-957c9522
        src="http://ms0.meituan.net/touch/img/download_banner.png"
        alt
        class="index_img"
      />
    </div>
    <!-- banner -->
    <search></search>
    <list-content :content="data"></list-content>
    <foot></foot>
  </div>
</template>
<script>
import ListContent from '@/components/Navlist/components/listfour/ListContent'
import search from './list11components/search'
import foot from '@/common/foot'
import { getNavList4 } from '@/api/apidata.js'

export default {
  name: 'list4',
  data () {
    return {
      data: []
    }
  },
  components: {
    ListContent,
    getNavList4,
    search,
    foot
  },
  created () {
    getNavList4().then(({ data }) => {
      this.data = data.data
    })
  }
}
</script>
<style lang="less" scoped>
.header {
  display: flex;
  height: 1rem;
  color: #fff;
  background: #06c1ae;
  border-bottom: 1px solid #21897d;
  display: -webkit-box;
  display: -ms-flexbox;
  position: relative;
  .header-left {
    height: 1rem;
    line-height: 1rem;
    a {
      height: 1rem;
      width: 0.45rem;
      line-height: 1rem;
      padding: 0 0.3rem;
      i {
        width: 0.45rem;
        height: 0.45rem;
        vertical-align: middle;
        position: relative;
        font-size: 0.5rem;
        color: #fff;
      }
    }
  }
  p {
    display: block;
    -webkit-box-flex: 1;
    font-size: 0.36rem;
    font-weight: 400;
    text-align: center;
    line-height: 1rem;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .header-right a {
    display: inline-block;
    height: 100%;
    line-height: 1rem;
    text-align: center;
    width: 0.94rem;
    color: #fff;
    span {
      display: inline-block;
      font-size: 0.2rem;
      line-height: 1;
      vertical-align: middle;
      i {
        display: block;
        margin: auto;
        margin-bottom: 0.12rem;
        font-size: 0.4rem;
        span {
          -webkit-box-flex: 1;
          -moz-box-flex: 1;
          border-left: 1px solid #c6c0b3;
          width: 100%;
          text-align: left;
          text-align: center;
          color: #666;
        }
      }
    }
  }
}

.banner {
  position: relative;
  height: 100%;
  border-bottom: 1px solid #ccc;
  img {
    position: relative;
    display: block;
    width: 100%;
    object-fit: cover;
  }
}
.nav-wrap {
  position: relative;
  z-index: 30;
  .nav {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    background: #fff;
    border-bottom: 1px solid #c6c0b3;
    text-align: center;
    height: 0.84rem;
    line-height: 0.84rem;
    -webkit-user-select: none;
    :first-child {
      border-left: none;
    }
    li {
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      border-left: 1px solid #c6c0b3;
      width: 100%;
      text-align: left;
      text-align: center;
      color: #666;
      span {
        color: #666;
      }
    }
  }
}
</style>
