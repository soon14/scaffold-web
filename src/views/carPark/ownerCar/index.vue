<template>
  <div class="app-container">
    <sw-back-top-and-bottom />
    <div class="head-container">
      <sw-search-date-picker-operation input-placeholder="请输入车牌号或车辆颜色">
        <template #left>
          <el-input
            v-model="query.name"
            clearable
            placeholder="请输入业主姓名模糊查询"
            style="width: 200px"
            @keyup.enter.native="crud.toQuery"
          />
        </template>
      </sw-search-date-picker-operation>
      <sw-button-operation :permission="permission" />
    </div>
    <sw-dialog
      :visible="dialog"
      :close-on-click-modal="false"
      :before-close="closeVerifyAccount"
      append-to-body
      width="520px"
      top="150px"
    >
      <template #title>
        验证密码
      </template>
      <template #content>
        <el-form
          ref="pwdForm"
          label-width="75px"
          :model="pwd"
          style="padding-right: 25px"
          label-suffix=":"
          @submit.native.prevent="handlerOpenVerifyAccount"
        >
          <el-form-item
            label="密码"
            prop="password"
            :rules="[
              { required: true, message: '密码不能为空！', trigger: 'blur' }
            ]"
          >
            <el-input
              ref="pass"
              v-model="pwd.password"
              type="password"
              clearable
              placeholder="请输入密码"
            />
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button round @click="closeVerifyAccount">{{ $t('cancel') }}</el-button>
        <el-button type="primary" round @click.native.prevent="handlerOpenVerifyAccount">{{ $t('ok') }}</el-button>
      </template>
    </sw-dialog>
    <sw-dialog
      :visible="crud.status.cu > 0"
      :before-close="crud.cancelCU"
      :close-on-click-modal="false"
      append-to-body
      width="400px"
      top="70px"
    >
      <template #title>
        <div>{{ crud.status.title }}</div>
      </template>
      <template #content>
        <el-form
          ref="form"
          :model="form"
          label-suffix=":"
          label-width="120px"
          :rules="rules"
        >
          <el-form-item v-if="crud.status.edit === 1" label="业主姓名" prop="name">
            <el-input
              v-model="form.name"
              clearable
              placeholder="业主姓名"
              :disabled="crud.status.edit === 1"
            />
          </el-form-item>
          <el-form-item v-if="crud.status.add === 1" label="业主手机" prop="phone">
            <el-input
              v-model="form.phone"
              clearable
              placeholder="业主手机"
              :disabled="crud.status.edit === 1"
            />
          </el-form-item>
          <el-form-item label="停车区域" prop="parkInfo">
            <el-cascader
              v-model="form.parkInfo"
              :options="cascade"
              clearable
              :filterable="true"
              :show-all-levels="false"
            />
          </el-form-item>
          <el-form-item label="车牌号码" prop="carNumber">
            <el-input v-model="form.carNumber" clearable placeholder="车牌号码" />
          </el-form-item>
          <el-form-item label="车辆颜色" prop="carColor">
            <el-input v-model="form.carColor" clearable placeholder="车辆颜色" />
          </el-form-item>
          <el-form />
        </el-form>
      </template>
      <template #footer>
        <el-button round @click="crud.cancelCU">{{ $t('cancel') }}</el-button>
        <el-button :loading="crud.cu === 2" type="primary" round @click="crud.submitCU">{{ $t('ok') }}</el-button>
      </template>
    </sw-dialog>
    <sw-table
      ref="scaffoldTable"
      :table-header="tableHeader.car"
      :table-data="crud.data"
      :crud="crud"
      :last-col-permission="['root','OwnerCar:update','OwnerCar:delete']"
    >
      <template slot="parkVO.region" slot-scope="scope">
        <span>{{ scope.row.parkVO.region }}</span>
      </template>
      <template slot="parkVO.type" slot-scope="scope">
        <el-tag v-if="scope.row.type === 0" size="mini">
          {{ $enum.getDescByValue('ParkTypeEnum',scope.row.parkVO.type) }}
        </el-tag>
        <el-tag v-else size="mini" type="success">
          {{ $enum.getDescByValue('ParkTypeEnum',scope.row.parkVO.type) }}
        </el-tag>
      </template>
      <template slot="parkVO.identityId" slot-scope="scope">
        <span>{{ scope.row.parkVO.identityId }}</span>
      </template>
      <template slot="carColor" slot-scope="scope">
        <el-tag size="mini">{{ scope.row.carColor }}</el-tag>
      </template>
      <template slot="carNumber" slot-scope="scope">
        <span style="font-weight: bold;color: red">{{ scope.row.carNumber }}</span>
      </template>
      <template slot="data-operate" slot-scope="scope">
        <sw-update-delete-operation
          :permission="permission"
          :data="scope.row"
        />
      </template>
    </sw-table>
  </div>
</template>

<script>
import { add, edit, del } from '@/api/carPark/car'
import { mapGetters } from 'vuex'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import { getById, verifyAccount } from '@/api/owner/owner'
import { encrypt } from '@/utils/rsaEncrypt'
import { getCascadeSelect } from '@/api/carPark/park'

const defaultCrud = CRUD({
  url: '/cars',
  title: '业主车辆信息表',
  crudMethod: { add, edit, del }
})

const defaultForm = {
  id: null,
  name: '',
  ownerId: null,
  parkInfo: [],
  carNumber: '',
  carColor: '',
  phone: ''
}
export default {
  name: 'Car',
  mixins: [
    presenter(defaultCrud),
    crud(),
    header(),
    form(defaultForm)
  ],
  data() {
    return {
      flag: false,
      dialog: false,
      cascade: [],
      pwd: {
        password: ''
      },
      permission: {
        add: ['root', 'OwnerCar:add'],
        edit: ['root', 'OwnerCar:update'],
        del: ['root', 'OwnerCar:delete']
      },
      rules: {
        carNumber: [
          { required: true, message: '车牌号码不能为空', trigger: 'blur' }
        ],
        carColor: [
          { required: true, message: '车辆颜色不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['tableHeader'])
  },
  created() {
    this.init()
  },
  methods: {
    closeVerifyAccount() {
      this.dialog = false
      this.flag = false
      this.pwd.password = ''
      this.$refs.pwdForm.resetFields()
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
        getById(form.ownerId).then(res => {
          this.crud.form.name = res.data.name
        })
      }
    },
    handlerOpenVerifyAccount() {
      this.$refs.pwdForm.validate((valid) => {
        if (valid) {
          verifyAccount(encrypt(this.pwd.password)).then(res => {
            if (res.data === 'Password error!') {
              this.flag = false
              this.$notify({
                title: '错误',
                message: '密码错误!',
                type: 'error'
              })
            } else {
              this.pwd.password = ''
              this.$refs.pwdForm.resetFields()
              this.dialog = false
              this.flag = true
              this.crud.toEdit(this.data)
            }
          })
        } else {
          return false
        }
      })
    },
    init() {
      getCascadeSelect().then(res => {
        this.cascade = res.data
      })
    }
  }
}
</script>
