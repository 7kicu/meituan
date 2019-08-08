<template>
  <div id="my">
    <div class="city_top">
      <div>
        <router-link to="/" class="city_top_l">
          <i class="iconfont city_top_l">&#xe63a;</i>
        </router-link>
      </div>
      <span class="nav-header">美团网</span>
      <div class="city_r">
        <router-link to="/" class="city_top_l">
          <i class="iconfont menu">&#xe612;</i>
        </router-link>
      </div>
    </div>
    <div class="my_all">
      <div class="my_l">
        <router-link tag="span" to="/user">美团信息登录</router-link>
      </div>
      <div class="my_r">
        <router-link tag="span" to="/phone">手机验证登录</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import user from '@/components/mychildren/user'
import phone from '@/components/mychildren/phone'
export default {
  name: 'my',
  components: {
    user,
    phone
  }
}
</script>
<style lang="less" scoped>
#my {
  .city_top {
    height: 1.01rem;
    color: #fff;
    background: #06c1ae;
    border-bottom: 1*2px solid #21897d;
    display: -webkit-box;
    display: -ms-flexbox;
    position: relative;
    .city_top_l {
      line-height: 1.2rem;
      font-size: 0.5rem;
      padding-left: 0.2rem;
      color: #fff;
    }
    .nav-header {
      display: block;
      -webkit-box-flex: 1;
      font-size: 0.36rem;
      font-weight: 400;
      text-align: center;
      line-height: 1.2rem;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .city_r {
      line-height: 1.2rem;
      .menu {
        font-size: 0.5rem;
        padding-right: 0.2rem;
      }
      .index {
        font-size: 0.4rem;
        padding-right: 0.2rem;
      }
    }
  }
  .my_all {
    width: 100%;
    border-bottom: 1*2px solid #ccc;
    padding-bottom: 10*2px;
  }
  .my_l {
    border-right: 1*2px solid #ccc;
  }
  .my_l,
  .my_r {
    width: 49%;
    display: inline-block;
    text-align: center;
    margin-top: 0.3rem;
    color: #666;
  }
  .my_l:hover,
  .my_r:hover {
    color: #06c1ae;
  }
}
</style>
