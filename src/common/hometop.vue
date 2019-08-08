<template>
  <div class="hometop">
    <span class="top_left">
      <span class="zz" @click="getcity">郑州</span>

      <i class="iconfont zz_i">&#xe60b;</i>
    </span>
    <span class="sousuo">
      <i class="iconfont">&#xe603;</i>
      <router-link to="/seach">
        <input type="text" placeholder="输入商家/品类/商圈" />
      </router-link>
    </span>
    <span class="right">
      <router-link to="/my">
        <i class="iconfont right_i">&#xe61d;</i>
      </router-link>
    </span>
  </div>
</template>

<script>
import getcity from '@/common/city/getcity'
export default {
  name: 'homeTop',
  methods: {
    getcity () {
      this.$router.push('/getcity')
    }
  },
  components: {
    getcity
  }
}

</script>

<style lang="less" scoped>
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #68dbce;
  font-size: 13 * 2px;
}
.hometop {
  width: 100%;
  height: 1rem;
  background: #06c1ae;
  text-align: center;
  line-height: 1rem;
  i {
    color: #fff;
  }
  .top_left {
    width: 15%;
    text-align: center;
  }
  .zz {
    color: #fff;
  }
  .zz_i {
    font-size: 30px;
    margin-right: 10px;
  }
  .sousuo {
    width: 65%;
    position: relative;
    i {
      position: absolute;
      left: 5 * 2px;
      top: -20px;
      font-size: 30px;
    }
    input {
      width: 65%;
      border-radius: 5 * 2px;
      height: 25 * 2px;
      padding-left: 25 * 2px;
      background: #05a494;
    }
  }
  .right {
    width: 5%;
    display: inline-block;
    position: relative;
    .right_i {
      font-size: 20 * 2px;
      position: absolute;
      top: -32px;
    }
  }
}
</style>
