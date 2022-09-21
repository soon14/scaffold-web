<template>
  <div class="app-container">
    <div class="head-container">
      <search-date-picker-operation input-placeholder="请输入邮箱或用户名查询">
        <template #right>
          <el-select
            v-model="query.enabled"
            clearable
            size="small"
            placeholder="状态"
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
    <el-dialog
      append-to-body
      :close-on-click-modal="false"
      :before-close="crud.cancelCU"
      :visible.sync="crud.status.cu > 0"
      :title="crud.status.title"
      width="570px"
    >
      <el-form
        ref="form"
        inline
        :model="form"
        :rules="rules"
        size="medium"
        label-width="66px"
        label-position="right"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" clearable />
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model.number="form.phone" clearable />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" clearable />
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex" style="width: 178px">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.enabled" :disabled="form.id === user.id">
            <el-radio :label="true">启用</el-radio>
            <el-radio :label="false">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item style="margin-bottom: 0" label="角色" prop="roles">
          <el-select
            v-model="form.roles"
            style="width:437px"
            multiple
            placeholder="请选择"
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
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="crud.cancelCU">取消</el-button>
        <el-button :loading="crud.cu === 2" type="primary" @click="crud.submitCU">确认</el-button>
      </div>
    </el-dialog>
    <scaffold-table
      ref="scaffoldTable"
      :crud="crud"
      :table-data="crud.data"
      :is-border="false"
      :default-sort="{prop:'createTime',order:'descending'}"
    >
      <template #tableColumns>
        <el-table-column type="selection" width="55" />
        <template v-for="item in tableHeader.users">
          <el-table-column
            v-if="columns.visible(item.prop)"
            :key="item"
            :prop="item.prop"
            :label="item.label"
            :sortable="item.sortable"
            :width="item.width"
          >
            <template v-slot="scope">
              <span v-if="item.prop === 'avatar.path'">
                <a :href="scope.row.avatar.path" target="_blank">
                  <el-avatar :src="scope.row.avatar.path" size="80" />
                </a>
              </span>
              <span v-else-if="item.prop === 'username'">
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
              <span v-else>{{ scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
        </template>
        <el-table-column
          v-permission="['root','User:delete','User:edit']"
          label="操作"
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
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import buttonOperation from '@/components/Crud/Button.operation'
import scaffoldTable from '@/components/ScaffoldTable'
import updateDeleteOperation from '@/components/Crud/UpdateDelete.operation'
import paginationOperation from '@/components/Crud/Pagination.operation'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import { getRoles } from '@/api/system/roles'
import { isvalidPhone } from '@/utils/validate'

let userRoles = []

const defaultCrud = CRUD({ title: '用户', url: '/users' })
const defaultForm = { username: null, sex: '男', email: null, phone: null, enabled: 'false', roles: [] }
export default {
  name: 'User',
  components: {
    scaffoldTable,
    searchDatePickerOperation,
    buttonOperation,
    paginationOperation,
    updateDeleteOperation
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
        callback(new Error('请输入电话号码'))
      } else if (!isvalidPhone(value)) {
        callback(new Error('请输入正确的11位手机号码'))
      } else {
        callback()
      }
    }
    return {
      roles: [],
      enabledTypeOptions: [
        { key: 'true', displayName: '启用' },
        { key: 'false', displayName: '禁用' }
      ],
      permission: {
        add: ['User:add', 'root'],
        edit: ['User:update', 'root'],
        del: ['User:delete', 'root']
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, trigger: 'blur', validator: validPhone }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        roles: [
          { required: true, message: '请选择角色', trigger: 'blur' }
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
  methods: {
    [CRUD.HOOK.afterToCU](crud, form) {
      this.getRoles()
    },
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
        this.roles = res.data
      }).catch(() => {})
    }
  }
}
</script>
