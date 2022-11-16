<template>
  <div class="app-container">
    <scaffold-back-top-and-bottom />
    <div class="head-container">
      <search-date-picker-operation
        :input-placeholder="String($t('ownerPage.inputPlaceholder'))"
        input-width="250"
      />
      <button-operation :permission="permission" />
    </div>
    <scaffold-dialog
      :visible="crud.status.cu > 0"
      :before-close="crud.cancelCU"
      :close-on-click-modal="false"
      append-to-body
      width="520px"
      top="80px"
    >
      <template #title>
        {{ crud.status.title }}
      </template>
      <template #content>
        <el-form
          ref="form"
          inline
          :rules="rules"
          :model="form"
          label-width="150px"
          label-suffix=":"
        >
          <el-form-item :label="String($t('ownerPage.form.name'))" prop="name">
            <el-input ref="first" v-model="form.name" clearable :placeholder="String($t('ownerPage.form.name'))" />
          </el-form-item>
          <el-form-item :label="String($t('ownerPage.form.phone'))" prop="phone">
            <el-input v-model.number="form.phone" clearable :placeholder="String($t('ownerPage.form.phone'))" />
          </el-form-item>
          <el-form-item :label="String($t('ownerPage.form.sex'))">
            <el-radio-group v-model="form.sex" style="width: 178px">
              <el-radio label="男">{{ String($t('ownerPage.form.male')) }}</el-radio>
              <el-radio label="女">{{ String($t('ownerPage.form.female')) }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="String($t('ownerPage.form.identityId'))" prop="identityId">
            <el-input v-model="form.identityId" clearable :placeholder="String($t('ownerPage.form.identityId'))" />
          </el-form-item>
          <el-form-item :label="String($t('ownerPage.form.email'))" prop="email">
            <el-input v-model="form.email" clearable :placeholder="String($t('ownerPage.form.email'))" />
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button round @click="crud.cancelCU">{{ $t('cancel') }}</el-button>
        <el-button :loading="crud.cu === 2" type="primary" round @click="crud.submitCU">{{ $t('ok') }}</el-button>
      </template>
    </scaffold-dialog>
    <scaffold-dialog
      :visible="dialog"
      :close-on-click-modal="false"
      :before-close="closeVerifyAccount"
      append-to-body
      width="520px"
      top="150px"
    >
      <template #title>
        {{ String($t('ownerPage.dialog.title')) }}
      </template>
      <template #content>
        <el-form
          label-width="75px"
          style="padding-right: 25px"
          label-suffix=":"
          @submit.native.prevent="handlerOpenVerifyAccount"
        >
          <el-form-item :label="String($t('ownerPage.dialog.pass'))">
            <el-input ref="pass" v-model="password" type="password" clearable :placeholder="String($t('ownerPage.dialog.passPlaceholder'))" />
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button round @click="closeVerifyAccount">{{ $t('cancel') }}</el-button>
        <el-button type="primary" round @click.native.prevent="handlerOpenVerifyAccount">{{ $t('ok') }}</el-button>
      </template>
    </scaffold-dialog>
    <scaffold-table
      ref="scaffoldTable"
      :table-header="tableHeader.ownerInfo"
      :table-data="crud.data"
      :crud="crud"
      last-col-width="230"
      :last-col-permission="['root','OwnerInfo:update','OwnerInfo:delete']"
    >
      <template slot="phone" slot-scope="scope">
        <el-popover trigger="hover" placement="top" transition="el-zoom-in-bottom">
          <div style="text-align: center;padding: 0">{{ scope.row.phone }}</div>
          <template #reference>
            <span>{{ scope.row.phone | phone }}</span>
          </template>
        </el-popover>
      </template>
      <template slot="email" slot-scope="scope">
        <el-popover trigger="hover" placement="top" transition="el-zoom-in-bottom">
          <div style="text-align: center;padding: 0">{{ scope.row.email }}</div>
          <template #reference>
            <span>{{ scope.row.email | email }}</span>
          </template>
        </el-popover>
      </template>
      <template slot="data-operate" slot-scope="scope">
        <update-delete-operation
          :permission="permission"
          :data="scope.row"
        >
          <template #left>
            <scaffold-popover
              :ok-btn-loading="loading"
              :reference-btn-text="String($t('ownerPage.btnText'))"
              :content="content"
              reference-icon="el-icon-refresh-right"
              width="200"
              btn-size="mini"
              @confirm="resetPass(scope.row)"
            />
          </template>
        </update-delete-operation>
      </template>
    </scaffold-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import { add, del, edit, getById, resetPass, verifyAccount } from '@/api/owner/owner'
import { validateIdNo, validEmail, validPhone } from '@/utils/validate'
import { encrypt } from '@/utils/rsaEncrypt'
import i18n from '@/i18n'

const defaultCrud = CRUD({
  url: '/owners',
  title: String(i18n.t('ownerPage.title')),
  crudMethod: {
    add, edit, del
  }
})

const defaultForm = {
  name: '',
  phone: '',
  identityId: '',
  email: '',
  sex: '男',
  password: ''
}

export default {
  name: 'OwnerInfo',
  mixins: [
    crud(),
    presenter(defaultCrud),
    header(),
    form(defaultForm)
  ],
  data() {
    return {
      loading: false,
      dialog: false,
      flag: false,
      password: '',
      data: {},
      content: String(i18n.t('ownerPage.content1')) + '<br>' + String(i18n.t('ownerPage.content2')),
      permission: {
        add: ['OwnerInfo:add', 'root'],
        edit: ['OwnerInfo:update', 'root'],
        del: ['OwnerInfo:delete', 'root']
      },
      rules: {
        phone: [
          { required: true, trigger: 'blur', validator: validPhone }
        ],
        email: [
          { required: true, trigger: 'blur', validator: validEmail }
        ],
        identityId: [
          { required: true, trigger: 'blur', validator: validateIdNo }
        ],
        name: [
          { required: true, message: String(i18n.t('ownerPage.rule')), trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'tableHeader'
    ])
  },
  activated() {
    this.flag = false
  },
  methods: {
    resetPass(row) {
      this.loading = true
      resetPass(row.id, row.identityId).then(res => {
        this.crud.notify(String(i18n.t('ownerPage.resetSuccess')), CRUD.NOTIFICATION_TYPE.SUCCESS)
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    closeVerifyAccount() {
      this.dialog = false
      this.flag = false
      this.password = ''
      this.crud.cancelCU()
    },
    [CRUD.HOOK.beforeToEdit](crud, form) {
      if (!this.flag) {
        this.dialog = true
        this.$nextTick(() => {
          this.$refs.pass.focus()
        })
        this.data = form
        return false
      } else {
        getById(form.id).then(res => {
          this.crud.form.identityId = res.data.identityId
          this.crud.form.name = res.data.name
        })
      }
    },
    handlerOpenVerifyAccount() {
      verifyAccount(encrypt(this.password)).then(res => {
        if (res.data === 'Password error!') {
          this.flag = false
          this.$notify({
            title: String(i18n.t('ownerPage.notify.title')),
            message: String(i18n.t('ownerPage.notify.message')),
            type: 'error'
          })
        } else {
          this.password = ''
          this.dialog = false
          this.flag = true
          this.crud.toEdit(this.data)
        }
      })
    }
  }
}
</script>
