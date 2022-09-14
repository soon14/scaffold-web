<template>
  <div>
    <div class="head-container">
      <search-date-picker-operation input-placeholder="请输入邮箱或用户名查询">
        <template slot="right">
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
      <el-form ref="form" :inline="true" :model="form" :rules="rules" size="small" label-width="66px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model.number="form.phone" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" />
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
    <!--  TODO 完成表格  -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import buttonOperation from '@/components/Crud/Button.operation'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'

let userRoles = []

const defaultCrud = CRUD({ title: '用户', url: '/users' })
export default {
  name: 'User',
  components: {
    searchDatePickerOperation,
    buttonOperation
  },
  mixins: [presenter(defaultCrud), header(), form(defaultForm), crud()],
  data() {
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
      }
    }
  },
  computed: {
    ...mapGetters([
      'level'
    ])
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>

</style>
