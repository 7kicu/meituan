<template>
  <div id="list8">
    <beautyTop></beautyTop>
    <beautyList></beautyList>
    <beautyNav></beautyNav>
    <div id="beautyNavs">
      <div id="nav">
        <ul class="list">
          <li class="item">
            <router-link tag="li" to="/list8child" class="in">美发</router-link>
          </li>
          <li class="item">
            <router-link tag="li" to="/list8child" class="in">美容美体</router-link>
          </li>
          <li class="item">
            <div class="in">美甲美睫</div>
          </li>
          <li class="item">
            <div class="in">瑜伽舞蹈</div>
          </li>
          <li class="item">
            <div class="in">瘦身纤体</div>
          </li>
          <li class="item">
            <div class="in">韩式定妆</div>
          </li>
          <li class="item">
            <div>祛痘</div>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import beautyTop from '@/components/beauty/beautyTop'
import beautyList from '@/components/beauty/beautyList'
import beautyNav from '@/components/beauty/beautyNav'

export default {
  name: 'list8',
  components: {
    beautyTop,
    beautyList,
    beautyNav

  }
}
</script>
<style lang="less" scoped>
#list8 {
  background: #f0efed;
}
#beautyNavs {
  width: 100%;
  overflow-x: hidden;

  li {
    list-style: none;
    display: inline-block;
  }

  #nav {
    width: 100%;
    height: 50 * 2px;
    overflow-x: scroll;
    border-bottom: 1px solid rgb(197, 194, 194);
    background: white;
    position: relative;
  }
  #nav::-webkit-scrollbar {
    display: none;
  }
  #nav:before {
    position: absolute;
    display: block;
    width: 100%;
    height: 5 * 2px;
    background: #fff;
    left: 0;
    bottom: 0;
    z-index: 20;
  }
  .list {
    width: 141%;
    box-sizing: border-box;
    font-size: 0;
    background: white;
  }

  .item {
    // float: left;
    width: 75 * 2px;

    font-size: 13 * 2px;

    text-align: center;

    padding: 20px 0;
    .in {
      border-right: 1px solid #eee;
      font-size: 13 * 2px;
      padding: 0;
      // background: red;
      margin-left: 3px;
      width: 100%;
    }
  }
  .item:hover {
    border-bottom: 5px solid #06c1ae;
    color: #06c1ae;
  }
}
</style>
