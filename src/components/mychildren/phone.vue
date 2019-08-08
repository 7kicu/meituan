<template>
  <div id="phone">
    <input type="text" placeholder="请输入手机号" />
    <button class="get">获取验证码</button>
    <input type="text" placeholder="请输入短信验证码" />
    <br />
    <button class="btn">登录</button>
    <br />
    <span class="phone_l">立即注册</span>
    <span class="phone_r">找回密码</span>
  </div>
</template>
<script>
export default {
  name: 'phone'
}
</script>
<style lang="less" scoped>
#phone {
  padding: 10*2px 20*2px;
  position: relative;
  input {
    width: 100%;
    // display: block;
    border-bottom: 1*2px solid #ccc;
    margin-top: 20*2px;
    font-size: 0.3rem;
  }
  .get {
    position: absolute;
    right: 20*2px;
    top: 20*2px;
    border: 1*2px solid #06c1ae;
    background: #fff;
    padding: 2*2px;
    border-radius: 5*2px;
    color: #666;
  }
  .btn {
    margin-top: 0.2rem;
    width: 100%;
    height: 1rem;
    border-radius: 5*2px;
    background: #06c1ae;
    color: #fff;
    font-size: 0.4rem;
  }
  .phone_l {
    position: absolute;
    left: 20*2px;
    bottom: -10*2px;
    color: #06c1ae;
  }
  .phone_r {
    position: absolute;
    right: 20*2px;
    bottom: -10*2px;
    color: #06c1ae;
  }
}
</style>
