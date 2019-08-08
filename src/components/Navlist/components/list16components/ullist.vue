<template>
  <div class="ullist">
    <ul>
      <li v-for="(i,index) in List16.data" :key="index">
        <router-link to="/">
          <i class="iconfont">{{i.icon}}</i>
          <p>{{i.title}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ullist',
  props: ['List16']
}
</script>

<style lang="less" scoped>
.ullist {
  width: 100%;
  display: flex;
  ul {
    width: 100%;
  }
  li {
    display: inline-block;
    width: 20%;
    text-align: center;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    .router-link-active {
      display: block;
      i {
        color: rgb(82, 237, 176);
        font-size: 1rem;
        font-weight: bold;
      }
      p {
        font-weight: bold;
        margin-top: 0.2rem;
      }
    }
  }
}
</style>
