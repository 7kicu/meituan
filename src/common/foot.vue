<template>
  <div class="foot">
    <div class="btn">
      <button>登录</button>
      <button>注册</button>
    </div>
    <div class="city">
      <span>城市：</span>
      <button>郑州</button>
    </div>
    <div class="foot_li">
      <ul>
        <li>首页</li>
        <li>我的</li>
        <li>美团下载</li>
        <li>电脑版</li>
        <li>帮助</li>
      </ul>
    </div>
    <div class="foot_li1">
      <ul>
        <li>
          <div class="foot_div">
            <span class="foot_span">友情链接：</span>
            <span>猫眼电影</span>
            <span>大众点评</span>
            <span>美团旅行</span>
          </div>
          <div class="foot_div">
            <span>糖果民宿</span>
            <span>大众点评下载</span>
            <span>美团收银官网</span>
          </div>
          <div class="foot_div">
            <span>美团点评餐饮学院</span>
            <span>快驴进货商家合作</span>
          </div>
        </li>
      </ul>
      <div class="foot_b">
        <p class="foot_b1"></p>
        <span class="foot_all">
          <span>©2019 美团网</span>
          <span>京ICP证070791号</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot'
}
</script>

<style lang="less" scoped>
.foot {
  margin-top: 10 * 2px;
  .btn {
    width: 50%;
    display: inline-block;
    text-align: left;
    button {
      border: 1 * 2px solid #06ceae;
      color: #06ceae;
      padding: 5 * 2px 10 * 2px;
      font-size: 0.3rem;
      background: rgba(102, 102, 102, 0);
      margin-left: 10 * 2px;
      border-radius: 5 * 2px;
    }
  }
  .city {
    width: 40%;
    display: inline-block;
    text-align: right;
    button {
      border: 1 * 2px solid #06ceae;
      color: #06ceae;
      padding: 5 * 2px 20 * 2px;
      font-size: 0.3rem;
      background: rgba(102, 102, 102, 0);
      border-radius: 5 * 2px;
    }
  }
  .foot_li {
    text-align: center;
    padding: 20 * 2px;
  }
  .foot_li ul li {
    display: inline-block;
    color: #06ceae;
    border-right: 1 * 2px solid gray;
    padding-right: 10 * 2px;
    margin-right: 10 * 2px;
    font-size: 0.25rem;
  }
  .foot_li ul li:nth-child(5) {
    border-right: none;
  }
  .foot_li1 ul li {
    font-size: 0.2rem;
    color: #06ceae;
    text-align: center;
  }
  .foot_li1 ul li span {
    margin-right: 20 * 2px;
  }
  .foot_div {
    margin-bottom: 10 * 2px;
  }
  .foot_span {
    color: #666;
  }
  .foot_b {
    text-align: center;
    position: relative;
    padding-bottom: 20 * 2px;
    color: #888;
    .foot_b1 {
      position: absolute;
      top: 6 * 2px;
      width: 100%;
      border-bottom: 1 * 2px solid #ccc;
    }
  }
  .foot_all {
    position: relative;
    background: #f0efed;
    padding: 0 * 2px 10 * 2px;
    font-size: 0.2rem;
  }
}
</style>
