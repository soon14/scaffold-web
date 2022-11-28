<template>
  <div class="app-container">
    <sw-back-top-and-bottom />
    <div class="head-container">
      <sw-search-date-picker-operation
        @reset="reset"
      >
        <template #right>
          <sw-select
            v-if="parkLotSelector"
            v-model="query.enabled"
            :options="enabledTypeOptions"
            placeholder="状态"
            width="90"
            @change="crud.toQuery"
          />
        </template>
      </sw-search-date-picker-operation>
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
          <el-form-item label="停车场区域" prop="region">
            <el-input ref="first" v-model="form.region" clearable placeholder="停车场区域" />
          </el-form-item>
          <el-form-item label="小车车位" prop="number">
            <el-input-number v-model="form.number" :min="1" />
          </el-form-item>
          <el-form-item label="所在楼层" prop="floor">
            <el-input-number v-model="form.floor" :min="-3" />
          </el-form-item>
          <el-form-item label="其他车位" prop="otherName">
            <el-input-number v-model="form.otherNumber" :min="1" />
          </el-form-item>
          <el-form-item label="是否启用" prop="enabled">
            <el-radio-group v-model="form.enabled" size="mini">
              <el-radio-button :label="true">启用</el-radio-button>
              <el-radio-button :label="false">禁用</el-radio-button>
            </el-radio-group>
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
      :table-header="tableHeader.parkLot"
      :table-data="crud.data"
      :crud="crud"
      :last-col-permission="['root','ParkLot:update','ParkLot:delete']"
    >
      <template slot="number" slot-scope="scope">
        <span style="font-weight: bold;color: red">{{ scope.row.number }}</span>
      </template>
      <template slot="otherNumber" slot-scope="scope">
        <span style="font-weight: bold;color: red">{{ scope.row.otherNumber }}</span>
      </template>
      <template slot="floor" slot-scope="scope">
        <span style="font-weight: bold">{{ scope.row.floor }}</span>
      </template>
      <template slot="enabled" slot-scope="scope">
        <el-switch
          v-model="scope.row.enabled"
          active-color="#409EFF"
          inactive-color="#F56C6C"
          @change="changeEnabled(scope.row, scope.row.enabled)"
        />
      </template>
      <template slot="data-operate" slot-scope="scope">
        <sw-update-delete-operation :permission="permission" :data="scope.row" />
      </template>
    </sw-table>
  </div>
</template>

<script>
import { add, edit, del } from '@/api/carPark/parkLot'
import { mapGetters } from 'vuex'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import i18n from "@/i18n";

const defaultCrud = CRUD({
  url: '/park-lots',
  title: '停车场',
  crudMethod: { add, edit, del }
})

const defaultForm = {
  id: null,
  region: '',
  number: 1,
  floor: -1,
  otherNumber: 1,
  enabled: false
}
export default {
  name: 'ParkLot',
  mixins: [
    presenter(defaultCrud),
    crud(),
    header(),
    form(defaultForm)
  ],
  data() {
    return {
      permission: {
        add: ['root', 'ParkLot:add'],
        edit: ['root', 'ParkLot:update'],
        del: ['root', 'ParkLot:delete']
      },
      enabledTypeOptions: [
        { value: true, desc: '启用' },
        { value: false, desc: '禁用' }
      ],
      parkLotSelector: true,
      rules: {
        region: [
          { required: true, message: '停车场所在区域不能为空！', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['tableHeader'])
  },
  methods: {
    reset() {
      this.parkLotSelector = false
      this.$nextTick(() => {
        this.parkLotSelector = true
      })
    },
    changeEnabled(data, val) {
      const operate = val === true ? '启用' : '禁用'
      this.$confirm('此操作将' + operate + ' [' + data.region + '] ' + ', 是否继续?', '提示', {
        confirmButtonText: String(i18n.t('ok')),
        cancelButtonText: String(i18n.t('cancel')),
        type: 'warning'
      }).then(() => {
        edit(data).then(() => {
          this.crud.notify(operate + '成功！', CRUD.NOTIFICATION_TYPE.SUCCESS)
        }).catch(() => {
          data.enabled = !data.enabled
        })
      }).catch(() => {
        data.enabled = !data.enabled
      })
    }
  }
}
</script>
