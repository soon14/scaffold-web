<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="loginContainer" la>
      <h3 class="loginTitle">智慧物业管理系统</h3>
      <el-form-item prop="username">
        <el-input type="text" prefix-icon="iconfont iconfont-user" v-model="loginForm.username"
                  placeholder="请输入用户名" auto-complete="false" clearable></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" prefix-icon="iconfont iconfont-password" v-model="loginForm.password"
                  placeholder="请输入密码" auto-complete="false" clearable show-password></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input style="width: 250px;margin-right: 5px;" prefix-icon="iconfont iconfont-code" type="text"
                  v-model="loginForm.code"
                  placeholder="点击图片更换验证码" auto-complete="false"></el-input>
        <img :src="captchaUrl" alt="">
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" class="loginRemember">记住我</el-checkbox>
      <el-form-item>
        <el-button :loading="loading" type="primary" class="loginSubmit" round @click.native="submitLogin">
          <span v-if="!loading">登录</span>
          <span v-else>登录中...</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      captchaUrl: '',
      loginForm: {
        username: 'admin',
        password: 'admin',
        rememberMe: false,
        code: '',
        uuid: ''
      },
      loading: false,
      rules: {
        username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
        password: [{required: true, message: '密码不能为空', trigger: 'blur'}],
        code: [{required: true, message: '验证码不能为空', trigger: 'change'}]
      }
    }
  },
  methods: {
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert("submit!!")
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
  margin: 180px auto 180px 200px;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  /*box-shadow: 0 0 25px rgba(202, 198, 198, 0.93);*/
}

.loginTitle {
  margin: 0 auto 30px auto;
  text-align: center;
  color: #707070;
}

.loginRemember {
  text-align: left;
  margin: 0 0 15px 0;
}

.loginSubmit {
  width: 100%;
}
</style>
