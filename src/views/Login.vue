<template>
  <div class="login">
    <h1 class="login_title">{{ $t('login.title') }}</h1>
    <div id="lottie_box" class="animation" />
    <div class="loginContainer">
      <el-form ref="loginForm" :model="loginForm" :rules="rules">
        <h3 class="loginFormItemTitle">
          <img :src="logo" alt="" style="width: 35px;height: 35px;vertical-align:middle">
          {{ $t('login.welcome') }}
        </h3>
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            type="text"
            :placeholder="$t('login.placeholderUsername')"
            auto-complete="false"
            clearable
          >
            <sw-svg
              slot="prefix"
              icon-class="user"
              class="el-input__icon input-icon"
            />
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            :placeholder="$t('login.placeholderPassword')"
            auto-complete="false"
            clearable
            show-password
            @keyup.enter.native="submitLogin"
          >
            <sw-svg
              slot="prefix"
              icon-class="password"
              class="el-input__icon input-icon"
            />
          </el-input>
        </el-form-item>
        <el-form-item prop="code" class="loginFormItemCode">
          <el-input
            v-model="loginForm.code"
            style="width: 58%;"
            type="text"
            :placeholder="$t('login.placeholderCode')"
            auto-complete="false"
            clearable
            @keyup.enter.native="submitLogin"
          >
            <sw-svg
              slot="prefix"
              icon-class="verify-code"
              class="el-input__icon input-icon"
            />
          </el-input>
          <div class="loginCode">
            <img :src="captchaUrl" alt="" @click="getCode">
          </div>
        </el-form-item>
        <el-form-item class="loginFormItemRemember">
          <el-checkbox v-model="loginForm.rememberMe">{{ $t('login.rememberMe') }}</el-checkbox>
          <el-tooltip
            :content="String($t('navbar.i18nSelect'))"
            effect="light"
            placement="right"
            transition="el-zoom-in-top"
          >
            <sw-i18n-select style="float: right" />
          </el-tooltip>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" type="primary" class="loginSubmit" round @click.native.prevent="submitLogin">
            <span v-if="!loading">{{ $t('login.loginButton') }}</span>
            <span v-else>{{ $t('login.loginLoading') }}</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="$store.state.global.showFooter" class="loginFooter">
      <span v-html="$store.state.global.footerTxt" />
      <span> ⋅ </span>
      <span v-text="$store.state.global.caseNumber" />
    </div>
  </div>
</template>

<script>
import { getCodeImg } from '@/api/login'
import Cookies from 'js-cookie'
import logo from '@/assets/logo/logo.png'
import { encrypt } from '@/utils/rsaEncrypt'
import Global from '@/global'

export default {
  name: 'Login',
  data() {
    return {
      logo: logo,
      captchaUrl: '',
      cookiePass: '',
      loginForm: {
        username: '',
        password: '',
        rememberMe: false,
        code: '',
        uuid: ''
      },
      loading: false,
      redirect: undefined,
      rules: {
        username: [{ required: true, message: this.$i18n.t('login.rules.usernameMessage'), trigger: 'blur' }],
        password: [{ required: true, message: this.$i18n.t('login.rules.passwordMessage'), trigger: 'blur' }],
        code: [{ required: true, message: this.$i18n.t('login.rules.codeMessage'), trigger: 'change' }]
      }
    }
  },
  created() {
    this.getCode()
    this.getCookie()
  },
  mounted() {
    this.$nextTick(() => {
      this.$lottie.loadAnimation({
        container: document.getElementById(`lottie_box`), // Lottie的DOM元素
        renderer: 'svg', // 渲染出来是什么格式
        loop: true, // 循环播放
        autoplay: true, // 自动播放
        animationData: require('@/assets/lottie/login.json') // Lottie的json资源
      })
    })
  },
  methods: {
    getCode() {
      getCodeImg().then(res => {
        this.captchaUrl = res.data.code
        this.loginForm.uuid = res.data.uuid
      })
    },
    getCookie() {
      const username = Cookies.get('username')
      let password = Cookies.get('password')
      const rememberMe = Cookies.get('rememberMe')
      // 保存Cookies里面的加密后的密码
      this.cookiePass = password === undefined ? '' : password
      password = password === undefined ? this.loginForm.password : password
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password,
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe),
        code: ''
      }
    },
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        // 构造登录信息体
        const user = {
          username: this.loginForm.username,
          password: this.loginForm.password,
          rememberMe: this.loginForm.rememberMe,
          code: this.loginForm.code,
          uuid: this.loginForm.uuid
        }
        // 如果密码没有加密,则加密
        if (user.password !== this.cookiePass) {
          user.password = encrypt(user.password)
        }
        // 开始验证
        if (valid) {
          this.loading = true
          // 如果勾选了记住我,放入Cookies中
          if (user.rememberMe) {
            Cookies.set('username', user.username, { expires: Global.passCookieExpires })
            Cookies.set('password', user.password, { expires: Global.passCookieExpires })
            Cookies.set('rememberMe', user.rememberMe, { expires: Global.passCookieExpires })
          } else {
            Cookies.remove('username')
            Cookies.remove('password')
            Cookies.remove('rememberMe')
          }
          //  调用Vuex中的登录方法
          this.$store.dispatch('user/Login', user).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
            this.getCode()
          })
        } else {
          this.$message({
            showClose: true,
            message: String(this.$i18n.t('login.errorMessage')),
            type: 'error'
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/images/bg.jpg");
  background-attachment: fixed;
  background-size: cover;

  .login_title {
    position: absolute;
    margin: 20px auto 650px;
    animation-name: title;
    animation-duration: 2s;
    height: 40px;
    width: auto;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
  }

  .animation {
    position: absolute;
    margin: 200px 700px 180px 110px;
    width: 500px;
    float: left;
    animation-name: lottie;
    animation-duration: 1.8s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .loginContainer {
    position: absolute;
    border-radius: 15px;
    background-clip: content-box;
    margin: 200px 0 180px 650px;
    width: 350px;
    padding: 15px 35px 5px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px rgba(202, 198, 198, 0.7);
    animation-name: loginContainer;
    animation-duration: 0.9s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    white-space: nowrap;

    .input-icon {
      height: 39px;
      width: 14px;
      margin-left: 2px;
    }

    .loginFormItemTitle {
      margin: 10px auto 25px auto;
      text-align: center;
      color: black;
    }

    .loginFormItemCode {
      margin-bottom: 5px;
    }

    .loginCode {
      width: 40%;
      display: inline-block;
      height: 41px;
      float: right;

      img {
        cursor: pointer;
        vertical-align: middle
      }
    }

    .loginFormItemRemember {
      text-align: left;
      margin-bottom: 5px;
    }

    .loginSubmit {
      width: 100%;
    }
  }

  .loginFooter {
    height: 40px;
    font-weight: bold;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: black;
    font-family: Arial, serif;
    font-size: 12px;
    letter-spacing: 1px;
    animation-delay: 1s;
  }
}

@keyframes lottie {
  0% {
    transform: translateY(40px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes loginContainer {
  0% {
    transform: translateX(20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes title {
  0% {
    transform: translateX(-80px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>

