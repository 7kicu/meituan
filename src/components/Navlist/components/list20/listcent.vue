<template>
  <div id="concent">
    <div class="cent">
      <p>全部分类</p>
    </div>
    <div id="text" v-for="(b,index) in list" :key="index">
      <h2>{{b.title}}</h2>
      <ul class="centbot">
        <li v-for="(a,i) in b.pop" :key="i">
          <router-link tag="a" :to="{path:a.path}">{{a.name}}</router-link>
        </li>
      </ul>
    </div>
    <!-- <div>
      <h2>热门</h2>
      <ul class="centbot">
        <li v-for="(a,i) in list.pop" :key="i">{{a.name}}</li>
      </ul>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'cent',
  props: ['list', 'text']
}
</script>

<style lang="less" scoped>
.cent {
  width: 100%;
  margin-top: 0.2rem;
  margin-bottom: 0.45rem;
  text-align: center;
  line-height: 0.7rem;
  p {
    height: 0.7rem;
    background: white;
    border: 1px solid #ddd;
  }
}
#text {
  margin-bottom: 0.45rem;
}
#concent {
  .centbot {
    margin-top: 0.2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    li {
      width: 32.8%;
      height: 0.8rem;
      text-align: center;
      line-height: 0.8rem;
      background: white;
      border: 1px solid rgb(236, 236, 236);
    }
  }
}
</style>
