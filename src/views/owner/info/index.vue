<template>
  <div class="app-container">
    <scaffold-back-top-and-bottom />
    <div class="head-container">
      <search-date-picker-operation
        input-placeholder="请输入姓名或者手机号后四位搜索"
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
        <div style="padding:15px 20px;">{{ crud.status.title }}</div>
      </template>
      <template #content>
        <el-form
          ref="form"
          inline
          :rules="rules"
          :model="form"
          label-width="150px"
          label-position="right"
        >
          <el-form-item label="业主姓名" prop="name">
            <el-input v-model="form.name" clearable placeholder="业主姓名" />
          </el-form-item>
          <el-form-item label="业主电话" prop="phone">
            <el-input v-model.number="form.phone" clearable placeholder="业主电话" />
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.sex" style="width: 178px">
              <el-radio label="男">男</el-radio>
              <el-radio label="女">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="身份证" prop="identityId">
            <el-input v-model="form.identityId" clearable placeholder="身份证" />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" clearable placeholder="邮箱" />
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button round @click="crud.cancelCU">{{ $t('cancel') }}</el-button>
        <el-button :loading="crud.cu === 2" type="primary" round @click="crud.submitCU">{{ $t('ok') }}</el-button>
      </template>
    </scaffold-dialog>
    <scaffold-table
      ref="scaffoldTable"
      :table-data="crud.data"
      :crud="crud"
      :default-sort="{prop:'createTime',order:'descending'}"
    >
      <template #tableColumns>
        <el-table-column type="selection" width="55" fixed="left" />
        <template v-for="item in tableHeader.ownerInfo">
          <el-table-column
            v-if="columns.visible(item.prop)"
            :key="item"
            :prop="item.prop"
            :label="item.label"
            :sortable="item.sortable"
            :width="item.width"
            :fixed="item.fixed"
            align="center"
          >
            <template v-slot="scope">
              <span v-if="item.prop === 'phone' || item.prop === 'email'">
                <el-popover trigger="hover" placement="top" transition="el-zoom-in-bottom">
                  <div style="text-align: center;padding: 0">{{ scope.row[item.prop] }}</div>
                  <template v-if="item.prop === 'phone'" #reference>
                    <span>{{ scope.row[item.prop] | phone }}</span>
                  </template>
                  <template v-else-if="item.prop === 'email'" #reference>
                    <span>{{ scope.row[item.prop] | email }}</span>
                  </template>
                </el-popover>
              </span>
              <span v-else-if="item.prop === 'updateTime'">
                <span v-if="scope.row[item.prop] === null" style="font-weight: bold">{{ String($t('no')) }}</span>
                <span v-else>{{ scope.row[item.prop] }}</span>
              </span>
              <span v-else>{{ scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
        </template>
        <el-table-column
          v-permission="['root','OwnerInfo:update','OwnerInfo:delete']"
          label="操作"
          width="230"
          align="center"
          fixed="right"
        >
          <template v-slot="scope">
            <update-delete-operation
              :permission="permission"
              :data="scope.row"
            >
              <template #left>
                <scaffold-popover
                  :ok-btn-loading="loading"
                  reference-btn-text="重置密码"
                  reference-icon="el-icon-refresh-right"
                  :content="content"
                  @confirm="resetPass(scope.row)"
                />
              </template>
            </update-delete-operation>
          </template>
        </el-table-column>
      </template>
    </scaffold-table>
    <pagination-operation />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import buttonOperation from '@/components/Crud/Button.operation'
import updateDeleteOperation from '@/components/Crud/UpdateDelete.operation'
import paginationOperation from '@/components/Crud/Pagination.operation'
import scaffoldBackTopAndBottom from '@/components/ScaffoldBackTopAndBottom'
import scaffoldPopover from '@/components/ScaffoldPopover'
import scaffoldTable from '@/components/ScaffoldTable'
import scaffoldDialog from '@/components/ScaffoldDialog'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import { add, edit, del, getById, resetPass } from '@/api/system/owner'
import { validateIdNo, validEmail, validPhone } from '@/utils/validate'
import i18n from '@/i18n'

const defaultCrud = CRUD({
  url: '/owners',
  title: '业主',
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
  components: {
    scaffoldBackTopAndBottom,
    scaffoldPopover,
    searchDatePickerOperation,
    updateDeleteOperation,
    buttonOperation,
    scaffoldTable,
    scaffoldDialog,
    paginationOperation
  },
  mixins: [
    crud(),
    presenter(defaultCrud),
    header(),
    form(defaultForm)
  ],
  data() {
    return {
      loading: false,
      content: '确认重置密码吗?<br>原始密码为手机号',
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
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'tableHeader'
    ])
  },
  methods: {
    resetPass(row) {
      this.loading = true
      resetPass(row.id, row.phone).then(res => {
        this.crud.notify('重置成功', CRUD.NOTIFICATION_TYPE.SUCCESS)
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    [CRUD.HOOK.beforeToEdit](crud, form) {
      getById(form.id).then(res => {
        this.crud.form = res.data
        this.$refs.form.resetFields()
      })
    }
  }
}
</script>
