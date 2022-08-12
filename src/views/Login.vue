<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="loginContainer" la>
      <h3 class="loginTitle">Scaffold-智慧物业管理系统</h3>
      <el-form-item prop="username">
        <el-input type="text" prefix-icon="iconfont iconfont-user" v-model="loginForm.username"
                  placeholder="请输入用户名" auto-complete="false" clearable></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" prefix-icon="iconfont iconfont-password" v-model="loginForm.password"
                  placeholder="请输入密码" auto-complete="false" clearable show-password
                  @keyup.enter.native="submitLogin"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input style="width: 58%" prefix-icon="iconfont iconfont-verify-code" type="text"
                  v-model="loginForm.code"
                  placeholder="点击图片更换验证码" auto-complete="false" @keyup.enter.native="submitLogin"></el-input>
        <div class="loginCode">
          <img :src="captchaUrl" @click="getCode" alt="点击更换验证码">
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" class="loginRemember">记住我</el-checkbox>
      <el-form-item>
        <el-button :loading="loading" type="primary" class="loginSubmit" round @click.native.prevent="submitLogin">
          <span v-if="!loading">登录</span>
          <span v-else>登录中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <div v-if="$store.state.global.showFooter" class="loginFooter">
      <span v-html="$store.state.global.footerTxt"/>
      <span> ⋅ </span>
      <span v-text="$store.state.global.caseNumber"/>
    </div>
  </div>
</template>

<script>
import {getCodeImg} from "@/api/login";
import Cookies from 'js-cookie';
import {encrypt} from "@/utils/rsaEncrypt";
import Global from '@/global'

export default {
  name: "Login",
  data() {
    return {
      captchaUrl: '',
      cookiePass: '',
      loginForm: {
        username: 'root',
        password: 'root',
        rememberMe: false,
        code: '',
        uuid: ''
      },
      loading: false,
      redirect: undefined,
      rules: {
        username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
        password: [{required: true, message: '密码不能为空', trigger: 'blur'}],
        code: [{required: true, message: '验证码不能为空', trigger: 'change'}]
      }
    }
  },
  created() {
    this.getCode()
    this.getCookie()
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
      //保存Cookies里面的加密后的密码
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
        //构造登录信息体
        const user = {
          username: this.loginForm.username,
          password: this.loginForm.password,
          rememberMe: this.loginForm.rememberMe,
          code: this.loginForm.code,
          uuid: this.loginForm.uuid
        }

        // 如果密码没有加密,则加密
        if (user.password !== this.cookiePass) {
          // user.password = encrypt(user.password)
          user.password = user.password
        }
        //开始验证
        if (valid) {
          this.loading = true
          //如果勾选了记住我,放入Cookies中
          if (user.rememberMe) {
            Cookies.set('username', user.username, {expires: Global.passCookieExpires})
            Cookies.set('password', user.password, {expires: Global.passCookieExpires})
            Cookies.set('rememberMe', user.rememberMe, {expires: Global.passCookieExpires})
          } else {
            Cookies.remove('username')
            Cookies.remove('password')
            Cookies.remove('rememberMe')
          }
          //  调用Vuex中的登录方法
          this.$store.dispatch('user/Login', user).then(() => {
            this.loading = false
            this.$router.push({path: this.redirect || '/'})
          }).catch(() => {
            this.loading = false
            this.getCode()
          })
        } else {
          this.$message({
            showClose: true,
            message: "输入的信息有误！",
            type: 'error'
          });
          return false;
        }
      })
    }
  }
}
</script>

<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/images/bg.jpg");
  background-size: cover;
}

.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto 180px 250px;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px rgba(202, 198, 198, 0.7);
}

.loginTitle {
  margin: 0 auto 30px auto;
  text-align: center;
  color: black;
}

.loginRemember {
  text-align: left;
  margin: 0 0 15px 0;
}

.loginSubmit {
  width: 100%;
}

.loginCode {
  width: 40%;
  display: inline-block;
  height: 41px;
  float: right;
}

img {
  cursor: pointer;
  vertical-align: middle
}

.loginFooter {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial, serif;
  font-size: 12px;
  letter-spacing: 1px;
}
</style>
