<template>
  <div id="babyCont">
    <ul class="baby_ul1">
      <li>
        <i class="iconfont">&#xe670;</i>
        <p>儿童乐园</p>
      </li>
      <li>
        <i class="iconfont">&#xe6af;</i>
        <p>儿童摄影</p>
      </li>
      <li>
        <i class="iconfont">&#xe62b;</i>
        <p>幼儿教育</p>
      </li>
      <li>
        <i class="iconfont">&#xe611;</i>
        <p>少儿外语</p>
      </li>
      <li>
        <i class="iconfont">&#xe610;</i>
        <p>亲子DIY</p>
      </li>
    </ul>
    <ul class="baby_ul">
      <li>
        <i class="iconfont">&#xe619;</i>
        <p>智力开发</p>
      </li>
      <li>
        <i class="iconfont">&#xe633;</i>
        <p>婴儿游泳</p>
      </li>
      <li>
        <i class="iconfont">&#xe683;</i>
        <p>产后恢复</p>
      </li>
      <li>
        <i class="iconfont">&#xe664;</i>
        <p>科普场馆</p>
      </li>
      <li>
        <i class="iconfont">&#xe624;</i>
        <p>少儿才艺</p>
      </li>
      <li>
        <i class="iconfont">&#xe60d;</i>
        <p>采摘</p>
      </li>
      <li>
        <i class="iconfont">&#xe9e4;</i>
        <p>亲子购物</p>
      </li>
      <li>
        <i class="iconfont">&#xe60a;</i>
        <p>月子会所</p>
      </li>
      <li>
        <i class="iconfont">&#xe638;</i>
        <p>孕妇写真</p>
      </li>
      <li>
        <i class="iconfont">&#xe614;</i>
        <p>全部分类</p>
      </li>
    </ul>
    <div class="baby_div">
      <span>
        <h1>周四教育日</h1>
        <p>抢到40元红包</p>
        <img
          src="//op.meituan.net/oppkit_pic/mtqzindexrb201806/c22f2e8d400207eac4d54f90b978492b.png"
          alt
        />
      </span>
      <span class="baby_span">
        <h1>天天免费</h1>
        <p>抢智能点读机</p>
        <img
          src="//op.meituan.net/oppkit_pic/mtqzindexrb201806/4cc1cf918957254829f3aa935054aa3f.png"
          alt
        />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'babyCont'
}
</script>
<style lang="less" scoped>
#babyCont {
  width: 100%;
  .baby_ul1 {
    text-align: center;
    li {
      width: 100px;
      height: 100px;
      display: inline-block;
      background: -webkit-linear-gradient(left top, #ffe673, #ff5949);
      border-radius: 50%;
      text-align: center;
      margin: 20px;
      i {
        font-size: 50px;
        color: #fff;
        line-height: 110px;
      }
      p {
        font-weight: bold;
        margin-top: 10px;
      }
    }
  }
  .baby_ul {
    text-align: center;
    li {
      width: 100px;
      height: 100px;
      display: inline-block;
      border-radius: 50%;
      text-align: center;
      margin: 20px;
      i {
        font-size: 50px;
        background: -webkit-linear-gradient(#ffe673, #fc910b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 110px;
      }
      p {
        margin-top: 10px;
      }
    }
  }
  .baby_div {
    display: inline-block;
    padding: 10px 30px;
    .baby_span {
      background: #f0f7f9;
      p {
        color: #3d7080;
      }
    }
    span {
      margin: 20px 0px;
      display: inline-block;
      position: relative;
      padding: 30px 150px 30px 40px;
      background: #fdf2f1;
      overflow: hidden;
      h1 {
        font-size: 30px;
        display: inline-block;
        margin-bottom: 10px;
        font-weight: bold;
        color: #666;
      }
      p {
        color: #b95159;
      }
      img {
        display: inline-block;
        width: 30%;
        position: absolute;
        right: 10px;
        top: 5px;
      }
    }
  }
}
</style>
