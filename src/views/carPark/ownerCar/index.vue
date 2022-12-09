<template>
  <div class="app-container">
    <sw-back-top-and-bottom />
    <div class="head-container">
      <sw-search-date-picker-operation />
      <sw-button-operation :permission="permission" />
    </div>
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
          <!-- 利用表单生成器生成表单内容 -->
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
        <span>{{ $enum.getDescByValue('ParkTypeEnum',scope.row.parkVO.type) }}</span>
      </template>
      <template slot="parkVO.identityId" slot-scope="scope">
        <span>{{ scope.row.parkVO.identityId }}</span>
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

const defaultCrud = CRUD({
  url: '/cars',
  title: '业主车辆信息表',
  crudMethod: { add, edit, del }
})

const defaultForm = {
  ownerId: null,
  parkId: null,
  carNumber: '',
  carColor: ''
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
  methods: {

  }
}
</script>
