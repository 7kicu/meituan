<template>
  <div class="header-list1">
    <ul>
      <li>
        <router-link to="/">
          <div class="one"></div>
          <p>学习培训</p>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <div class="two"></div>
          <p>音乐培训</p>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <div class="three"></div>
          <p>美术培训</p>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <div class="four"></div>
          <p>职业技术</p>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <div class="five"></div>
          <p>辅导课</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header-list1',
  props: ['headerlist']
}
</script>

<style lang="less" scoped>
.header-list1 {
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    li {
      display: inline-block;
      width: calc(100% / 5);
      height: 3rem;
      text-align: center;
    }
    .router-link-active {
      display: inline-block;
      width: 100%;
      height: 100%;
      div {
        width: 80%;
        margin: auto;
        height: 50%;
        background: url(./img/list.png) no-repeat center top;
        background-size: 1.5rem;
        background-position-y: -0.1rem;
      }
      p {
        margin-top: 0.3rem;
        font-weight: bold;
        font-size: 0.4rem;
      }
      .two {
        background-position-y: -1.9rem;
      }
      .three {
        background-position-y: -3.7rem;
      }
      .four {
        background-position-y: -5.5rem;
      }
      .five {
        background-position-y: -7.3rem;
      }
    }
  }
}
</style>
