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
      <div slot="title" class="header-title" :style="{'background' : theme,'color' : 'white'}">
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
        <el-form-item :label="String($t('userCenter.update.pass.oldPass'))" prop="oldPassword">
          <el-input
            v-model="form.oldPassword"
            type="password"
            auto-complete="on"
            clearable
            show-password
            class="my-input"
          />
        </el-form-item>
        <el-form-item :label="String($t('userCenter.update.pass.newPass'))" prop="newPassword">
          <el-input
            v-model="form.newPassword"
            type="password"
            auto-complete="on"
            clearable
            show-password
            class="my-input"
          />
        </el-form-item>
        <el-form-item :label="String($t('userCenter.update.pass.confirmPass'))" prop="confirmPass">
          <el-input
            v-model="form.confirmPass"
            type="password"
            auto-complete="on"
            clearable
            show-password
            class="my-input"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" round @click="cancel">{{ $t('cancel') }}</el-button>
        <el-button size="small" round @click="reset">{{ $t('userCenter.update.pass.reset') }}</el-button>
        <el-button
          :loading="loading"
          type="primary"
          round
          size="small"
          @click="doSubmit"
        >{{ $t('ok') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'
import { verifyPassword } from '@/utils'
import { updatePassword } from '@/api/system/user'
import i18n from '@/i18n'

export default {
  name: 'UpdatePass',
  data() {
    const confirmPass = (rule, value, callback) => {
      if (value) {
        if (this.form.newPassword !== value) {
          callback(new Error(String(i18n.t('userCenter.update.pass.confirmTip'))))
        } else {
          callback()
        }
      } else {
        callback(new Error(String(i18n.t('userCenter.update.pass.inputPassAgain'))))
      }
    }
    const newPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error(String(i18n.t('userCenter.update.pass.newPassNotNull'))))
      }
      if (verifyPassword(value)) {
        return callback()
      } else {
        return callback(String(i18n.t('userCenter.update.pass.tips')))
      }
    }
    return {
      loading: false,
      dialog: false,
      form: {
        oldPassword: '',
        newPassword: '',
        confirmPass: ''
      },
      title: String(i18n.t('userCenter.update.pass.changePass')),
      rules: {
        oldPassword: [
          { required: true, message: String(i18n.t('userCenter.update.pass.inputOldPass')), trigger: 'blur' }
        ],
        newPassword: [
          { required: true, validator: newPassword, trigger: 'blur' }
        ],
        confirmPass: [
          { required: true, validator: confirmPass, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'theme'
    ])
  },
  methods: {
    cancel() {
      this.resetForm()
    },
    reset() {
      this.form = {
        oldPassword: '',
        newPassword: '',
        confirmPass: ''
      }
    },
    resetForm() {
      this.dialog = false
      this.$refs['form'].resetFields()
      this.form = {
        oldPassword: '',
        newPassword: '',
        confirmPass: ''
      }
    },
    doSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.loading = true
          updatePassword(this.form).then(() => {
            this.resetForm()
            this.$message.success({
              showClose: true,
              message: String(i18n.t('userCenter.update.pass.toLogin'))
            })
            setTimeout(() => {
              store.dispatch('user/LogOut').then(() => {
                location.reload()
              })
            }, 1500)
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
    padding: 15px 20px;
  }

  .my-form{
    margin-top: 30px;
  }

  .my-input{
    width: 360px;
  }
}
</style>
