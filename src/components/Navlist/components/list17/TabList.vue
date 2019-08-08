<template>
  <div>
    <ul id="ww">
      <li class="active">
        <router-link to="/TabList">婚纱摄影</router-link>
      </li>
      <li>
        <router-link to="/TabList">旅拍</router-link>
      </li>
      <li>
        <router-link to="/TabList">婚宴</router-link>
      </li>
      <li>
        <router-link to="/TabList">婚礼策划</router-link>
      </li>
    </ul>
    <div>
      <router-view>
        <!-- <tab-children></tab-children> -->
      </router-view>
    </div>
  </div>
</template>
<script>
// import TabChildren from '@components/Navlist/components/list17/TabChildren'
export default {

  mounted () {
    var hy = document.getElementById('ww').children
    // console.log(hy.length)
    for (var i = 0; i < hy.length; i++) {
      hy[i].addEventListener('click', function () {
        // this.className = 'active'
        for (var i = 0; i < hy.length; i++) {
          hy[i].className = ''
        }
        this.className = 'active'
      }, false)
    }
  }
  // implements: {
  //   TabChildren
  // }
}
</script>
<style lang="less" scoped>
.active {
  border-bottom: 8px solid#FF6687;
  a {
    color: #ff6687;
  }
}
ul {
  width: 100%;
  height: 100px;
  overflow-x: auto;
  overflow-y: hidden;
  background: #fff;
  display: flex;
  li {
    width: calc(100% / 4);
    text-align: center;
    height: 100px;
    line-height: 100px;
    box-sizing: border-box;
    a {
      height: 100px;
      display: block;
      font-size: 30px;
    }
  }
}
</style>
