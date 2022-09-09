<template>
  <div style="display: inline-block">
    <el-dialog
      :visible.sync="dialog"
      :close-on-click-modal="false"
      :before-close="cancel"
      append-to-body
      width="600px"
      center
      class="my-dialog"
      top="20vh"
      @close="cancel"
    >
      <div slot="title" class="header-title" :style="{'background': theme, 'color': 'white'}">
        <div class="my-title">{{ title }}</div>
      </div>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        inline
        size="medium"
        label-width="120px"
        class="my-form"
      >
        <el-form-item label="新邮箱" prop="newEmail">
          <el-input v-model="form.newEmail" placeholder="请输入邮箱前缀" clearable style="width: 200px" />
        </el-form-item>
        <el-form-item prop="value">
          <el-select
            ref="emailSuffix"
            v-model="value"
            clearable
            placeholder="请选择后缀"
            class="my-select"
          >
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-button
          :loading="codeLoading"
          class="my-button"
          :disabled="isDisabled || form.newEmail.length === 0"
          round
          type="primary"
          size="small"
          @click="sendCode"
        >
          {{ buttonName }}
        </el-button>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="form.code" placeholder="请输入验证码" clearable class="my-input" />
        </el-form-item>
        <el-form-item label="当前密码" prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            type="password"
            show-password
            clearable
            class="my-input"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" round @click="cancel">取消</el-button>
        <el-button :loading="loading" type="primary" round size="small" @click="doSubmit">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import { validEmail } from '@/utils/validate'
import { sendCodeToEmail, updateEmail } from '@/api/system/email'
import { encrypt } from '@/utils/rsaEncrypt'

export default {
  name: 'UpdateEmail',
  props: {
    // 当前绑定邮箱
    email: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // loading
      loading: false,
      // 是否显示dialog
      dialog: false,
      title: '修改邮箱',
      form: {
        newEmail: '',
        uuid: '',
        code: '',
        password: ''
      },
      // 发送邮件的按钮是否loading
      codeLoading: false,
      // 按钮的TXT
      buttonName: '获取验证码',
      // 是否不可用
      isDisabled: false,
      time: 60,
      value: '',
      rules: {
        password: [
          { required: true, message: '当前密码不能为空', trigger: 'blur' }
        ],
        newEmail: [
          { required: true, message: '邮箱前缀不能为空', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ],
        value: [
          { required: true, message: '请选择邮箱后缀', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'theme',
      'options'
    ])
  },
  methods: {
    cancel() {
      this.resetForm()
    },
    resetForm() {
      this.dialog = false
      this.$refs['form'].resetFields()
      window.clearInterval(this.timer)
      this.time = 60
      this.buttonName = '获取验证码'
      this.isDisabled = false
      this.value = ''
      this.form = {
        newEmail: '',
        uuid: '',
        code: '',
        password: ''
      }
    },
    sendCode() {
      if (this.form.newEmail && this.form.newEmail + this.$refs.emailSuffix.selectedLabel !== this.email && validEmail(this.form.newEmail + this.$refs.emailSuffix.selectedLabel)) {
        this.codeLoading = true
        this.buttonName = '验证码发送中'
        const _this = this
        sendCodeToEmail({ account: this.form.newEmail, suffix: this.value }).then(res => {
          this.$message.success({
            showClose: true,
            message: '发送成功，验证码有效期5分钟'
          })
          this.form.uuid = res.data
          this.codeLoading = false
          this.isDisabled = true
          this.buttonName = this.time-- + '秒后重新发送'
          this.timer = window.setInterval(function() {
            _this.buttonName = _this.time + '秒后重新发送'
            --_this.time
            if (_this.time < 0) {
              _this.buttonName = '重新发送'
              _this.time = 60
              _this.isDisabled = false
              window.clearInterval(_this.timer)
            }
          }, 1000)
        }).catch(err => {
          this.resetForm()
          this.codeLoading = false
          console.log(err.response.data.message)
        })
      }
      if (!this.form.newEmail) {
        this.$message.error({
          showClose: true,
          message: '邮箱为空'
        })
      }
      if (this.form.newEmail + this.$refs.emailSuffix.selectedLabel === this.email) {
        this.$message.error({
          showClose: true,
          message: '邮箱不能为原邮箱'
        })
      }
      if (!validEmail(this.form.newEmail + this.$refs.emailSuffix.selectedLabel) && this.form.newEmail) {
        this.$message.error({
          showClose: true,
          message: '邮箱格式错误'
        })
      }
    },
    doSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.loading = true
          updateEmail({
            newEmail: this.form.newEmail,
            uuid: this.form.uuid,
            code: this.form.code,
            suffix: this.value,
            password: encrypt(this.form.password)
          }).then(res => {
            this.loading = false
            this.resetForm()
            this.$message.success({
              showClose: true,
              message: res.data
            })
            store.dispatch('user/GetInfo').then(() => {})
          }).catch(err => {
            this.loading = false
            console.log(err.response.data.message)
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-dialog ::v-deep {
  .el-dialog__header {
    padding: 0;
  }

  .el-dialog__headerbtn {
    top: 5px;
    right: 5px;
    padding-top: 10px;
  }

  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
    height: 30px;
    width: 35px;
  }

  .el-dialog__headerbtn .el-dialog__close:hover {
    color: gray;
  }

  .el-dialog__body {
    padding: 0;
    overflow: overlay;

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(144, 147, 153, 0.54);
      cursor: pointer;
      border-radius: 8px;
      position: relative;
      transition: background-color .3s;
      transition-property: background-color;
      transition-duration: 0.3s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }
  }
}

.my-dialog{
  .my-title{
    padding:15px 20px;
  }

  .my-form{
    margin-top: 30px;

    .my-select{
      width: 140px;
    }

    .my-button{
      width: 345px;
      margin-bottom: 20px;
      margin-left: 120px;
    }

    .my-input{
      width: 345px;
    }
  }
}
</style>
