<template>
  <div class="container_wrap">
      <div class="wrap">
        <div class="container">
          <h1>登 录</h1>
          <form>
            <input ref="phone" type="text" placeholder="手机号" v-model="phone"/>
            <input ref="password" type="password" placeholder="输入密码" v-model="password"/>
            <div class="login_btn" @click="doLogin">登 录</div>
            <div class="login_btn1" style="margin-top:8px;" @click="toRegister">注 册</div>
          </form>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
    </div>
  </div>
</template>
<script>
import { Toast, Indicator } from 'mint-ui'
export default {
  name: 'login',
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    },
    // 登录
    doLogin () {
      if (this.phone === '') {
        Toast({
          message: '手机号不能为空',
          position: 'bottom'
        })
        this.$refs.phone.focus()
        return false
      }
      // 验证密码
      if (this.password === '') {
        Toast({
          message: '密码不能为空',
          position: 'bottom'
        })
        this.$refs.password.focus()
        return false
      }
      let mData = {
        phone: this.phone,
        password: this.$md5(this.password)
      }
      Indicator.open({
        text: '登录中',
        spinnerType: 'fading-circle'
      })
      this.$axios.post('/api/user/login', mData).then(res => {
        console.log(res.data)
        if (res.data.status === 200) {
          console.log(res.data)
          Toast({
            message: res.data.msg,
            position: 'bottom'
          })
          localStorage.setItem('userobj', res.data.data)
          this.$router.push('/home')
        } else {
          Toast({
            message: res.data.msg,
            position: 'bottom'
          })
        }
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        Indicator.close()
      })
    }
  }
}
</script>
<style scoped>
.container_wrap {
  position:fixed;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  /* z-index:-4;
  zoom: 1; */
  background-image: url(../../assets/img/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;
}
/* .wrap {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.38);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
} */
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  margin-top: -50%;
}
.container h1 {
  text-align: center;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.68);
}
.container input {
  width: 300px;
  display: block;
  height: 38px;
  border: 0;
  outline: 0;
  padding: 6px 10px;
  margin: 28px auto;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.18);
  font-size: 14px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.78);
  -webkit-transition: all 0.4s ease-in 0.1ms;
  -moz-transition: all 0.4s ease-in 0.1ms;
  transition: all 0.4s ease-in 0.1ms;
}

.container .login_btn {
  width: 300px;
  line-height: 28px;
  text-align: center;
  border-radius: 4px;
  font-size: 14px;
  letter-spacing: 2px;
  border: none;
  margin: 0 auto;
  padding: 6px 10px;
  color: rgba(255, 255, 255, 0.68);
  background-color: rgba(0, 0, 0, 0.38);
}
.container .login_btn1 {
  width: 300px;
  line-height: 28px;
  text-align: center;
  border-radius: 4px;
  font-size: 14px;
  letter-spacing: 2px;
  border: none;
  margin: 0 auto;
  padding: 6px 10px;
  /* color: rgba(255, 255, 255, 0.68); */
  color: #19be6b;
  background-color: rgba(0, 0, 0, 0);
}
.container input:focus {
  width: 340px;
  background-color: rgba(0, 0, 0, 0.58);
}
.container .login_btn:hover {
  background-color: rgba(0, 0, 0, 0.58);
}

.wrap ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
.wrap ul li {
  list-style-type: none;
  display: block;
  position: absolute;
  bottom: -120px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  z-index: -8;
  background-color:rgba(255, 255, 255, 0.15);
  animotion: square 14s infinite;
  -webkit-animation: square 14s infinite;
}
.wrap ul li:nth-child(1) {
  width: 40px;
  height: 40px;
  left: 0;
  animation-duration: 10s;
  -moz-animation-duration: 10s;
  -o-animation-duration: 10s;
  -webkit-animation-duration: 10s;
}
.wrap ul li:nth-child(2) {
  width: 40px;
  height: 40px;
  left: 10%;
  animation-duration: 15s;
  -moz-animation-duration: 15s;
  -o-animation-duration: 15s;
  -webkit-animation-duration: 15s;
}
.wrap ul li:nth-child(3) {
  left: 20%;
  width: 25px;
  height: 25px;
  animation-duration: 12s;
  -moz-animation-duration: 12s;
  -o-animation-duration: 12s;
  -webkit-animation-duration: 12s;
}
.wrap ul li:nth-child(4) {
  width: 50px;
  height: 50px;
  left: 30%;
  -webkit-animation-delay: 3s;
  -moz-animation-delay: 3s;
  -o-animation-delay: 3s;
  animation-delay: 3s;
  animation-duration: 12s;
  -moz-animation-duration: 12s;
  -o-animation-duration: 12s;
  -webkit-animation-duration: 12s;
}
.wrap ul li:nth-child(5) {
  width: 25px;
  height: 25px;
  left: 40%;
  animation-duration: 10s;
  -moz-animation-duration: 10s;
  -o-animation-duration: 10s;
  -webkit-animation-duration: 10s;
}
.wrap ul li:nth-child(6) {
  width: 50px;
  height: 50px;
  left: 50%;
  -webkit-animation-delay: 7s;
  -moz-animation-delay: 7s;
  -o-animation-delay: 7s;
  animation-delay: 7s;
}
.wrap ul li:nth-child(7) {
  right: 40%;
  width: 25px;
  height: 25px;
  animation-duration: 8s;
  -moz-animation-duration: 8s;
  -o-animation-duration: 8s;
  -webkit-animation-duration: 8s;
}
.wrap ul li:nth-child(8) {
  width: 40px;
  height: 40px;
  right: 30%;
  -webkit-animation-delay: 4s;
  -moz-animation-delay: 4s;
  -o-animation-delay: 4s;
  animation-delay: 4s;
}
.wrap ul li:nth-child(9) {
  width: 40px;
  height: 40px;
  right: 20%;
  animation-duration: 20s;
  -moz-animation-duration: 20s;
  -o-animation-duration: 20s;
  -webkit-animation-duration: 20s;
}
.wrap ul li:nth-child(10) {
  width: 40px;
  height: 40px;
  right: 10%;
  -webkit-animation-delay: 6s;
  -moz-animation-delay: 6s;
  -o-animation-delay: 6s;
  animation-delay: 6s;
  animation-duration: 30s;
  -moz-animation-duration: 30s;
  -o-animation-duration: 30s;
  -webkit-animation-duration: 30s;
}
.wrap ul li:nth-child(11) {
  width: 40px;
  height: 40px;
  right: 50%;
  -webkit-animation-delay: 6s;
  -moz-animation-delay: 6s;
  -o-animation-delay: 6s;
  animation-delay: 6s;
  animation-duration: 30s;
  -moz-animation-duration: 30s;
  -o-animation-duration: 30s;
  -webkit-animation-duration: 30s;
}

@keyframes square {
  0%  {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
  100% {
    bottom: 780px;
    transform: rotate(600deg);
    -webit-transform: rotate(600deg);
    -webkit-transform: translateY(-500);
    transform: translateY(-500)
  }
}
@-webkit-keyframes square {
  0%  {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
  100% {
    bottom: 780px;
    transform: rotate(600deg);
    -webit-transform: rotate(600deg);
    -webkit-transform: translateY(-500);
    transform: translateY(-500)
  }
}
</style>
