<template>
  <div>
    <div class="head-container">
      <sw-search-date-picker-operation />
      <sw-button-operation :permission="permissions" />
    </div>
    <sw-dialog
      :visible="crud.status.cu > 0"
      :before-close="crud.cancelCU"
      :close-on-click-modal="false"
      append-to-body
      top="60px"
      width="400px"
    >
      <template #title>
        <div>{{ crud.status.title }}</div>
      </template>
      <template #content>
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          label-suffix=":"
        >
          <el-form-item label="电梯类型" prop="name">
            <el-input ref="first" v-model="form.name" clearable placeholder="电梯类型" />
          </el-form-item>
          <el-form-item label="zh-CN" prop="nameZhCn">
            <el-input v-model="form.nameZhCn" clearable placeholder="zh-CN" />
          </el-form-item>
          <el-form-item label="zh-HK" prop="nameZhHk">
            <el-input v-model="form.nameZhHk" clearable placeholder="zh-HK" />
          </el-form-item>
          <el-form-item label="zh-TW" prop="nameZhTw">
            <el-input v-model="form.nameZhTw" clearable placeholder="zh-TW" />
          </el-form-item>
          <el-form-item label="en-US" prop="nameEnUs">
            <el-input v-model="form.nameEnUs" clearable placeholder="en-US" />
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button round @click="crud.cancelCU">{{ $t('cancel') }}</el-button>
        <el-button :loading="crud.cu === 2" type="primary" round @click="crud.submitCU">{{ $t('ok') }}</el-button>
      </template>
    </sw-dialog>
    <sw-table
      ref="scaffoldTable"
      :table-header="tableHeader.elevatorType"
      :table-data="crud.data"
      :crud="crud"
      :last-col-permission="['root','Elevator:update','Elevator:delete']"
    >
      <template slot="data-operate" slot-scope="scope">
        <sw-update-delete-operation
          :permission="permissions"
          :data="scope.row"
        />
      </template>
    </sw-table>
  </div>
</template>

<script>
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import { edit, del, add } from '@/api/xiaoqu/elevatorType'
import { mapGetters } from 'vuex'

const defaultCrud = CRUD({
  url: '/elevator-types',
  title: '电梯类型',
  crudMethod: {
    edit, del, add
  }
})

const defaultForm = {
  id: null,
  name: '',
  nameZhCn: '',
  nameZhHk: '',
  nameZhTw: '',
  nameEnUs: ''
}
export default {
  name: 'ElevatorType',
  mixins: [
    presenter(defaultCrud),
    crud(),
    form(defaultForm),
    header()
  ],
  data() {
    return {
      permissions: {
        add: ['root', 'Elevator:add'],
        edit: ['root', 'Elevator:update'],
        del: ['root', 'Elevator:delete']
      },
      rules: {
        name: [
          { required: true, message: '电梯类型不能为空!', trigger: 'blur' }
        ],
        nameZhCn: [
          { required: true, message: 'zh-CN不能为空!', trigger: 'blur' }
        ],
        nameZhHk: [
          { required: true, message: 'zh-HK不能为空!', trigger: 'blur' }
        ],
        nameZhTw: [
          { required: true, message: 'zh-TW不能为空!', trigger: 'blur' }
        ],
        nameEnUs: [
          { required: true, message: 'en-US不能为空!', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'tableHeader'
    ])
  }
}
</script>
