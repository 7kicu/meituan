<template>
  <div class="list-top">
    <header>
      <router-link class="header-one" tag="a" to="/">＜</router-link>
      <p class="header-two">家装</p>
    </header>
  </div>
</template>
<script>
export default {
  name: 'ListTop',
  components: {

  }
}
</script>
<style scoped>
header {
  width: 100%;
  height: 45*2px;
  border-bottom: 1*2px solid #ddd;
  position: relative;
}
p {
  line-height: 45*2px;
}
.header-one {
  position: absolute;
  font-size: 40*2px;
  color: cadetblue;
}
.header-two {
  text-align: center;
  font-size: 20*2px;
}
</style>
