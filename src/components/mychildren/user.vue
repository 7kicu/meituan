<template>
  <div id="user">
    <input type="text" placeholder="账户名/手机号/Email" />
    <br />
    <input type="password" placeholder="请输入密码" />
    <br />
    <button class="btn">登录</button>
    <br />
    <span class="phone_l">立即注册</span>
    <span class="phone_r">找回密码</span>
  </div>
</template>
<script>
export default {
  name: 'user'
}
</script>
<style lang="less" scoped>
#user {
  text-align: center;
  padding: 0*2px 20*2px;
  position: relative;
  input {
    width: 100%;
    // display: block;
    border-bottom: 1*2px solid #ccc;
    margin-top: 20*2px;
    font-size: 0.3rem;
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
    bottom: -20*2px;
    color: #06c1ae;
  }
  .phone_r {
    position: absolute;
    right: 20*2px;
    bottom: -20*2px;
    color: #06c1ae;
  }
}
</style>
