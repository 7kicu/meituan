<template>
  <div id="submit">
    <top></top>
    <div class="sub_all">
      <h1>{{submit.name}}</h1>
      <p class="sub_p">
        单价:
        <span>{{submit.price}}元</span>
      </p>
      <p class="sub_p1">
        数量:
        <span class="sub_span">
          <span class="sub_span1" @click="rem">-</span>
          <span>{{sum}}</span>
          <span class="sub_span1" @click="add">+</span>
        </span>
      </p>
      <p class="sub_p2">
        总价:
        <span>{{totalMoney}}元</span>
      </p>
    </div>
    <div class="login">
      <button>提交订单</button>
      <p>
        请登录后购买，去
        <span @click="to">登录</span>
      </p>
    </div>
    <foot />
  </div>
</template>
<script>
import top from '@/components/Navlist/components/pedicure/pedTop'
import foot from '@/common/foot'
import Bus from './bus.js'
export default {
  name: 'submit',
  data () {
    return {
      submit: {},
      sum: 1
    }
  },
  mounted () {
    Bus.$on('contentdata', (data) => {
      this.submit = data
      console.log(data)
      Bus.$off('contentdata')
    })
  },
  components: {
    top,
    foot
  },
  computed: {
    totalMoney () {
      var total = 0
      //   for (var i in this.submit) {
      total += parseFloat(this.submit.price) * this.sum
      //   }
      return total.toFixed(1)
    }
  },
  methods: {
    add () {
      this.sum++
      //    console.log(this.result[i].num)
    },
    rem () {
      if (this.sum > 0) {
        this.sum--
      }
    }
  },
  to () {
    this.$router.push('/my')
  }
}
</script>
<style lang="less" scoped>
#submit {
  background: #f0f0f0;
  .sub_all {
    h1 {
      padding: 50px 0 20px 10px;
      font-size: 35px;
    }
    p {
      font-size: 35px;
      padding: 30px 20px;
      background: #fff;
      border-bottom: 1px solid #ccc;
    }
    .sub_p,
    .sub_p2 {
      position: relative;
      span {
        position: absolute;
        right: 20px;
      }
    }
    .sub_p2 {
      span {
        color: #ff9900;
        font-size: 35px;
        font-weight: bold;
      }
    }
    .sub_p1 {
      position: relative;
      .sub_span {
        position: absolute;
        right: 20px;
        .sub_span1 {
          border: 1px solid #06c1ae;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 40px;
          background: #fff;
        }
        .sub_span2 {
          padding: 10px 50px;
          border: 1px solid #ccc;
        }
      }
    }
  }
  .login {
    background: #f0f0f0;
    text-align: center;
    button {
      width: 90%;
      padding: 3% 0;
      margin: 20px 0;
      margin-left: 20px;
      font-size: 40px;
      font-weight: bold;
      color: #fff;
      border-radius: 8px;
      background: #06c1ae;
    }
    p {
      margin-left: 20px;
      font-size: 30px;
      text-align-last: left;
      padding: 20px 0;
      color: #666;
      span {
        color: #06c1ae;
      }
    }
  }
}
</style>
