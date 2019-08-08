<template>
  <div class="list5List">
    <ul>
      <li v-for="(i,index) in list5List.data" :key="index">
        <router-link to="/">
          <img :src="i.img" alt />
          <p>{{i.title}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'list5List',
  props: ['list5List']
}
</script>

<style lang="less" scoped>
.list5List {
  margin-top: 1.2rem;
  width: 100%;
  display: flex;
  ul {
    width: 100%;
    li {
      display: inline-block;
      width: calc(100% / 5);
      margin-top: 0.3rem;
      .router-link-active {
        display: block;
        img {
          margin-left: 20%;
          width: 60%;
          height: 60%;
          margin-bottom: 0.2rem;
        }
        p {
          text-align: center;
        }
      }
    }
  }
}
</style>
