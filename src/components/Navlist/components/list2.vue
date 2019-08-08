<template>
  <div id="list2">
    <div class="video">
      <router-link to="/">
        <i class="iconfont video_l">&#xe63a;</i>
      </router-link>
      <span class="video_title">猫眼电影</span>
      <div class="title">
        <router-link tag="span" to="/list2children">
          <span class="title_l">
            正在热映
            <span class="title_h1"></span>
          </span>
        </router-link>
        <router-link tag="span" to="/list2children2">
          <span class="title_r">
            即将上映
            <span class="title_h2"></span>
          </span>
        </router-link>
        <i class="iconfont">&#xe603;</i>
      </div>
      <search></search>
    </div>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>
<script>
import search from './list11components/search'
import list2children from '@/components/Navlist/components/components/list2children'
import list2children2 from '@/components/Navlist/components/components/list2children2'
import foot from '@/common/foot'
export default {
  name: 'list2',
  // created () {
  //   getVideo().then(({ data }) => {
  //     console.log(data.data)
  //     this.video1 = data.data
  //     this.video2 = data.price
  //     this.video3 = data.soon
  //   })
  // },
  components: {
    list2children,
    list2children2,
    search,
    foot
  }
}
</script>
<style lang="less" scoped>
#list2 {
  .video {
    width: 100%;
    height: 1rem;
    background: #06c1ae;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    z-index: 9999;
    top: 0;
    position: relative;
    .video_l {
      position: absolute;
      font-size: 40px;
      color: #fff;
      left: 20px;
    }
    .video_title {
      font-size: 0.5rem;
      color: #fff;
    }
    .title {
      text-align: center;
      border-bottom: 1 * 2px solid #ccc;
      font-size: 0.3rem;
      font-weight: bold;
      background: #fff;
      span {
        color: #666;
        padding: 0 20 * 2px;
      }
      .title_l {
        position: relative;
        font-size: 30px;
        .title_h1 {
          width: 60 * 2px;
          height: 3 * 2px;
          display: block;
          background: #f03d37;
          position: absolute;
          padding: 0 * 2px 20 * 2px;
          bottom: -13 * 2px;
          right: 6 * 2px;
          display: none;
        }
      }
      .title_r {
        font-size: 30px;
        position: relative;
        .title_h2 {
          width: 50 * 2px;
          height: 3 * 2px;
          display: block;
          background: #f03d37;
          position: absolute;
          padding: 0 * 2px 20 * 2px;
          bottom: -13 * 2px;
          right: 6 * 2px;
          display: none;
        }
      }
      .title_l:hover .title_h1,
      .title_r:hover .title_h2 {
        display: block;
      }
      span:hover {
        color: #f03d37;
      }
      i {
        font-size: 0.4rem;
        font-weight: bold;
        position: absolute;
        right: 10 * 2px;
        color: #f03d37;
      }
    }
  }
}
</style>
