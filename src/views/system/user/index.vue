<template>
  <div class="app-container">
    <back-top-and-bottom />
    <div class="head-container">
      <search-date-picker-operation :input-placeholder="String($t('userPage.placeholderInput'))">
        <template #right>
          <el-select
            v-model="query.enabled"
            clearable
            :placeholder="String($t('userPage.placeholderSelect'))"
            class="filter-item"
            style="width: 90px"
            @change="crud.toQuery"
          >
            <el-option
              v-for="item in enabledTypeOptions"
              :key="item.key"
              :label="item.displayName"
              :value="item.key"
            />
          </el-select>
        </template>
      </search-date-picker-operation>
      <button-operation :permission="permission" />
    </div>
    <scaffold-dialog
      :visible="crud.status.cu > 0"
      :before-close="crud.cancelCU"
      :close-on-click-modal="false"
      append-to-body
      width="570px"
      top="100px"
    >
      <template #title>
        <div style="padding:15px 20px;">{{ crud.status.title }}</div>
      </template>
      <template #content>
        <el-form
          ref="form"
          inline
          :model="form"
          :rules="rules"
          label-width="90px"
          label-position="right"
        >
          <el-form-item :label="String($t('userPage.form.username'))" prop="username">
            <el-input v-model="form.username" clearable />
          </el-form-item>
          <el-form-item :label="String($t('userPage.form.phone'))" prop="phone">
            <el-input v-model.number="form.phone" clearable />
          </el-form-item>
          <el-form-item :label="String($t('userPage.form.email'))" prop="email">
            <el-input v-model="form.email" clearable />
          </el-form-item>
          <el-form-item :label="String($t('userPage.form.sex'))">
            <el-radio-group v-model="form.sex" style="width: 178px">
              <el-radio label="男">{{ $t('userPage.form.man') }}</el-radio>
              <el-radio label="女">{{ $t('userPage.form.woman') }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="String($t('userPage.form.status'))">
            <el-radio-group v-model="form.enabled" :disabled="form.id === user.id">
              <el-radio :label="true">{{ $t('userPage.form.statusOk') }}</el-radio>
              <el-radio :label="false">{{ $t('userPage.form.statusNo') }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item style="margin-bottom: 0" :label="String($t('userPage.form.role'))" prop="roles">
            <el-select
              ref="roleSelect"
              v-model="form.roles"
              style="width:400px"
              multiple
              :placeholder="String($t('userPage.form.rolePlaceholder'))"
              clearable
              @remove-tag="deleteTag"
              @change="changeRole"
            >
              <el-option
                v-for="item in roles"
                :key="item.name"
                :disabled="level !== 1 && item.level <= level"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
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
      :crud="crud"
      :table-data="crud.data"
      :default-sort="{prop:'createTime',order:'descending'}"
    >
      <template #tableColumns>
        <el-table-column type="selection" width="55" fixed="left" />
        <template v-for="item in tableHeader.users">
          <el-table-column
            v-if="columns.visible(item.prop)"
            :key="item"
            :prop="item.prop"
            :label="item.label"
            :sortable="item.sortable"
            :width="item.width"
            :fixed="item.fixed"
          >
            <template v-slot="scope">
              <span v-if="item.prop === 'avatar.path'">
                <a v-if="scope.row.avatar !== null" :href="scope.row.avatar.path" target="_blank">
                  <el-avatar :src="scope.row.avatar.path ? scope.row.avatar.path : Avatar" size="80" />
                </a>
                <el-avatar v-else :src="Avatar" size="80" />
              </span>
              <span v-if="item.prop === 'username'">
                <span v-if="scope.row[item.prop] === 'root'" style="color: red;font-weight: bold">{{ scope.row[item.prop] }}</span>
                <span v-else>{{ scope.row[item.prop] }}</span>
              </span>
              <span v-else-if="item.prop === 'phone' || item.prop === 'email'">
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
              <span v-else-if="item.prop === 'enabled'">
                <el-switch
                  v-model="scope.row[item.prop]"
                  :disabled="user.id === scope.row.id"
                  active-color="#409EFF"
                  inactive-color="#F56C6C"
                  @change="changeEnabled(scope.row, scope.row.enabled)"
                />
              </span>
              <span v-else-if="item.prop === 'updateTime'">
                <span v-if="scope.row[item.prop] === null" style="font-weight: bold;font-size: 13px">{{ $t('no') }}</span>
                <span v-else>{{ scope.row[item.prop] }}</span>
              </span>
              <span v-else>{{ scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
        </template>
        <el-table-column
          v-permission="['root','User:delete','User:update']"
          :label="String($t('userPage.column.operate'))"
          width="125"
          align="center"
          fixed="right"
        >
          <template slot-scope="scope">
            <update-delete-operation
              :permission="permission"
              :data="scope.row"
              :disabled-del="scope.row.id === user.id"
            />
          </template>
        </el-table-column>
      </template>
    </scaffold-table>
    <pagination-operation />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import i18n from '@/i18n'
import backTopAndBottom from '@/components/BackTopAndBottom'
import { add, edit, del } from '@/api/system/user'
import Avatar from '@/assets/images/avatar.png'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import buttonOperation from '@/components/Crud/Button.operation'
import scaffoldTable from '@/components/ScaffoldTable'
import scaffoldDialog from '@/components/ScaffoldDialog'
import updateDeleteOperation from '@/components/Crud/UpdateDelete.operation'
import paginationOperation from '@/components/Crud/Pagination.operation'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import { getRoles } from '@/api/system/roles'
import { isvalidPhone } from '@/utils/validate'

let userRoles = []

const defaultCrud = CRUD({ title: String(i18n.t('userPage.title')), url: '/users', crudMethod: { add, edit, del }})
const defaultForm = { username: null, sex: String(i18n.t('userPage.form.man')), email: null, phone: null, enabled: 'false', roles: [] }
export default {
  name: 'User',
  components: {
    scaffoldTable,
    searchDatePickerOperation,
    buttonOperation,
    paginationOperation,
    updateDeleteOperation,
    scaffoldDialog,
    backTopAndBottom
  },
  mixins: [
    presenter(defaultCrud),
    header(),
    form(defaultForm),
    crud()
  ],
  data() {
    // 自定义验证
    const validPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error(String(i18n.t('userPage.validPhone.error1'))))
      } else if (!isvalidPhone(value)) {
        callback(new Error(String(i18n.t('userPage.validPhone.error2'))))
      } else {
        callback()
      }
    }
    return {
      Avatar: Avatar,
      roles: [],
      enabledTypeOptions: [
        { key: 'true', displayName: String(i18n.t('userPage.form.statusOk')) },
        { key: 'false', displayName: String(i18n.t('userPage.form.statusNo')) }
      ],
      permission: {
        add: ['User:add', 'root'],
        edit: ['User:update', 'root'],
        del: ['User:delete', 'root']
      },
      rules: {
        username: [
          { required: true, message: String(i18n.t('userPage.validUsername.error1')), trigger: 'blur' },
          { min: 2, max: 10, message: String(i18n.t('userPage.validUsername.error2')), trigger: 'blur' }
        ],
        phone: [
          { required: true, trigger: 'blur', validator: validPhone }
        ],
        email: [
          { required: true, message: String(i18n.t('userPage.validEmail.error1')), trigger: 'blur' },
          { type: 'email', message: String(i18n.t('userPage.validEmail.error2')), trigger: 'blur' }
        ],
        roles: [
          { required: true, message: String(i18n.t('userPage.validRoles.error')), trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'level', 'tableHeader',
      'user'
    ])
  },
  created() {
    this.$nextTick(() => {
      this.crud.toQuery()
      this.crud.msg.add = String(i18n.t('userPage.createdTip'))
    })
  },
  methods: {
    // 新增与编辑前做的操作
    [CRUD.HOOK.afterToCU](crud, form) {
      this.getRoles()
    },
    // 打开编辑弹窗前做的操作
    [CRUD.HOOK.beforeToEdit](crud, form) {
      userRoles = []
      const roles = []
      form.roles.forEach(function(role, index) {
        roles.push(role.id)
        // 初始化编辑时候的角色
        const rol = { id: role.id }
        userRoles.push(rol)
      })
      form.roles = roles
    },
    [CRUD.HOOK.afterAddError](crud) {
      this.afterErrorMethod(crud)
    },
    [CRUD.HOOK.afterEditError](crud) {
      this.afterErrorMethod(crud)
    },
    [CRUD.HOOK.afterSubmit](crud) {
      this.afterErrorMethod(crud)
    },
    // 提交前做的操作
    [CRUD.HOOK.afterValidateCU](crud) {
      if (this.roles.length === 0) {
        this.$message({
          message: String(i18n.t('userPage.rolesIsNull')),
          type: 'warning'
        })
        return false
      }
      crud.form.roles = userRoles
      return true
    },
    changeEnabled(data, val) {
      const operate = val === true ? String(i18n.t('userPage.form.statusOk')) : String(i18n.t('userPage.form.statusNo'))
      this.$confirm(String(i18n.t('userPage.enabledTips.tip1')) + operate + ' [' + data.username + '] ' + String(i18n.t('userPage.enabledTips.tip2')), String(i18n.t('confirmTips')), {
        confirmButtonText: String(i18n.t('ok')),
        cancelButtonText: String(i18n.t('cancel')),
        type: 'warning'
      }).then(() => {
        edit(data).then(res => {
          this.crud.notify(operate + String(i18n.t('userPage.enabledTips.tip3')), CRUD.NOTIFICATION_TYPE.SUCCESS)
        }).catch(() => {
          data.enabled = !data.enabled
        })
      }).catch(() => {
        data.enabled = !data.enabled
      })
    },
    changeRole(value) {
      userRoles = []
      value.forEach(function (data, index) {
        const role = { id: data }
        userRoles.push(role)
      })
    },
    deleteTag(value) {
      userRoles.forEach(function(data, index) {
        if (data.id === value) {
          userRoles.splice(index, value)
        }
      })
    },
    getRoles() {
      getRoles().then(res => {
        this.roles = res.data.content
      }).catch(() => {})
    },
    afterErrorMethod(crud) {
      // 恢复select
      const initRoles = []
      userRoles.forEach(function(role, index) {
        initRoles.push(role.id)
      })
      crud.form.roles = initRoles
    }
  }
}
</script>
