<template>
  <div id="beautyNavs">
    <div id="nav">
      <ul class="list">
        <li class="item">
          <div class="in">美发</div>
        </li>
        <li class="item">
          <div class="in">美容美体</div>
        </li>
        <li class="item">
          <div class="in">美甲美睫</div>
        </li>
        <li class="item">
          <div class="in">瑜伽舞蹈</div>
        </li>
        <li class="item">
          <div class="in">瘦身纤体</div>
        </li>
        <li class="item">
          <div class="in">韩式定妆</div>
        </li>
        <li class="item">
          <div>祛痘</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'beautyNavs'

}
</script>
<style lang="less" scoped>
#beautyNavs {
  width: 100%;
  overflow-x: hidden;

  li {
    list-style: none;
    display: inline-block;
  }

  #nav {
    width: 100%;
    height: 65 * 2px;
    overflow-x: scroll;
    border-bottom: 1px solid blue;
    background: white;
    position: relative;
  }
  #nav::-webkit-scrollbar {
    display: none;
  }
  #nav:before {
    position: absolute;
    display: block;
    width: 100%;
    height: 5 * 2px;
    background: #fff;
    left: 0;
    bottom: 0;
    z-index: 20;
  }
  .list {
    width: 141%;
    box-sizing: border-box;
    font-size: 0;
    background: white;
  }

  .item {
    // float: left;
    width: 75 * 2px;

    font-size: 13 * 2px;

    text-align: center;

    padding: 30px 0;
    .in {
      border-right: 1px solid black;
      font-size: 13 * 2px;
      padding: 0;
    }
  }
  .item:hover {
    border-bottom: 5px solid black;
  }
}
</style>
