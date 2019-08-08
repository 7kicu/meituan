<template>
  <div>
    <ul>
      <li v-for="(item, index) in show" :key="index">
        <router-link to="/">
          <div class="left">
            <p>{{item.title}}</p>
            <span>{{item.p}}</span>
          </div>
          <div class="right">
            <img :src="item.pic" alt />
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ShowList',
  props: ['show']
}
</script>
<style lang="less" scoped>
ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    width: calc(100% / 2);
    a {
      display: flex;
      height: 170px;
      background: #f7f8fc;
      position: relative;
      .left {
        position: absolute;
        left: 24px;
        top: 44px;
        width: 60%;
        color: #333;
        p {
          font-family: PingFangSC-Medium;
          font-size: 32px;
          line-height: 44px;
          font-weight: 500;
          white-space: nowrap;
          word-wrap: normal;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        span {
          height: 64px;
          display: -webkit-flex;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          word-wrap: break-word;
        }
      }
      .right {
        position: absolute;
        right: 20px;
        top: 30px;
        width: 110px;
        height: 110px;
        img {
          width: 100%;
        }
      }
    }
    a:nth-child(1),
    a:nth-child(3) {
      margin: 10px 5px 10px 10px;
    }
    a:nth-child(2),
    a:nth-child(4) {
      margin: 10px 10px 10px 5px;
    }
  }
}
</style>
