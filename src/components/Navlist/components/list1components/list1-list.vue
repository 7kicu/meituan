<template>
  <div class="list">
    <ul>
      <li v-for="(i,index) in list1List.title" :key="index">
        <router-link :to="{path:i.path}">
          <div :style="i.background">
            <i class="iconfont">{{i.icon}}</i>
          </div>
          <p>{{i.list}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list1List',
  props: ['list1List']
}
</script>

<style lang="less" scoped>
.list {
  width: 100%;
  display: flex;
  ul {
    width: 100%;
    li {
      width: 25%;
      display: inline-block;
      margin-bottom: 10 * 2px;
      margin-top: 10 * 2px;
      div {
        width: 50 * 2px;
        height: 50 * 2px;
        border-radius: 100%;
        text-align: center;
        line-height: 55 * 2px;
        margin: auto;
        i {
          font-size: 30 * 2px;
          color: white;
        }
      }
      p {
        text-align: center;
        color: black;
        margin-top: 10 * 2px;
      }
    }
  }
}
/deep/img {
  width: 100%;
  height: 100%;
  z-index: 100000;
  display: block;
  margin: auto;
}
</style>
