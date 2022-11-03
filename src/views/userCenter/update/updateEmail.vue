<template>
  <div style="display: inline-block">
    <scaffold-dialog
      :visible="dialog"
      :close-on-click-modal="false"
      :before-close="cancel"
      append-to-body
      width="600px"
      top="20vh"
      class="my-dialog"
      @close="cancel"
    >
      <template #title>
        {{ title }}
      </template>
      <template #content>
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          inline
          size="medium"
          label-width="120px"
          class="my-form"
        >
          <el-form-item :label="String($t('userCenter.update.email.newEmail'))" prop="newEmail">
            <el-input v-model="form.newEmail" :placeholder="String($t('userCenter.update.email.prefix'))" clearable style="width: 200px" />
          </el-form-item>
          <el-form-item>
            <el-select
              ref="emailSuffix"
              v-model="value"
              clearable
              :placeholder="String($t('userCenter.update.email.suffix'))"
              class="my-select"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
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
          <el-form-item :label="String($t('userCenter.update.email.code'))" prop="code">
            <el-input v-model="form.code" :placeholder="String($t('userCenter.update.email.codeTip'))" clearable class="my-input" />
          </el-form-item>
          <el-form-item :label="String($t('userCenter.update.email.password'))" prop="password">
            <el-input
              v-model="form.password"
              :placeholder="String($t('userCenter.update.email.passwordTip'))"
              type="password"
              show-password
              clearable
              class="my-input"
            />
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button size="small" round @click="cancel">{{ $t('cancel') }}</el-button>
        <el-button :loading="loading" type="primary" round size="small" @click="doSubmit">{{ $t('ok') }}</el-button>
      </template>
    </scaffold-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import scaffoldDialog from '@/components/ScaffoldDialog'
import {isValidEmail, validEmail} from '@/utils/validate'
import { sendCodeToEmail, updateEmail } from '@/api/userCenter/email'
import { encrypt } from '@/utils/rsaEncrypt'
import i18n from '@/i18n'

export default {
  name: 'UpdateEmail',
  components: {
    scaffoldDialog
  },
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
      title: String(i18n.t('userCenter.update.email.changeEmail')),
      form: {
        newEmail: '',
        uuid: '',
        code: '',
        password: ''
      },
      // 发送邮件的按钮是否loading
      codeLoading: false,
      // 按钮的TXT
      buttonName: String(i18n.t('userCenter.update.email.getCode')),
      // 是否不可用
      isDisabled: false,
      time: 60,
      value: '',
      rules: {
        password: [
          { required: true, message: String(i18n.t('userCenter.update.email.passRule')), trigger: 'blur' }
        ],
        newEmail: [
          { required: true, message: String(i18n.t('userCenter.update.email.prefixRule')), trigger: 'blur' }
        ],
        code: [
          { required: true, message: String(i18n.t('userCenter.update.email.codeRule')), trigger: 'blur' }
        ],
        value: [
          { required: true, message: String(i18n.t('userCenter.update.email.suffixRule')), trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
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
      this.buttonName = String(i18n.t('userCenter.update.email.getCode'))
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
      if (this.form.newEmail && this.form.newEmail + this.$refs.emailSuffix.selectedLabel !== this.email && isValidEmail(this.form.newEmail + this.$refs.emailSuffix.selectedLabel)) {
        this.codeLoading = true
        this.buttonName = String(i18n.t('userCenter.update.email.codeSending'))
        const _this = this
        sendCodeToEmail({ account: this.form.newEmail, suffix: this.value }).then(res => {
          this.$message.success({
            showClose: true,
            message: String(i18n.t('userCenter.update.email.codeSendSuccess'))
          })
          this.form.uuid = res.data
          this.codeLoading = false
          this.isDisabled = true
          this.buttonName = this.time-- + String(i18n.t('userCenter.update.email.codeBtnTip1'))
          this.timer = window.setInterval(function() {
            _this.buttonName = _this.time + String(i18n.t('userCenter.update.email.codeBtnTip1'))
            --_this.time
            if (_this.time < 0) {
              _this.buttonName = String(i18n.t('userCenter.update.email.codeBtnTip2'))
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
          message: String(i18n.t('userCenter.update.email.emailIsNull'))
        })
      }
      if (this.form.newEmail + this.$refs.emailSuffix.selectedLabel === this.email) {
        this.$message.error({
          showClose: true,
          message: String(i18n.t('userCenter.update.email.emailError1'))
        })
      }
      if (!validEmail(this.form.newEmail + this.$refs.emailSuffix.selectedLabel) && this.form.newEmail) {
        this.$message.error({
          showClose: true,
          message: String(i18n.t('userCenter.update.email.emailError2'))
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
.my-dialog{

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
