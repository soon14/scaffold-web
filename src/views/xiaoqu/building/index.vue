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
    >
      <template #title>
        {{ crud.status.title }}
      </template>
      <template #content>
        <el-form
          ref="form"
          inline
          :model="form"
          label-suffix=":"
          label-width="150px"
          :rules="rules"
        >
          <el-form-item :label="String($t('building.buildingNum'))" prop="buildingNum">
            <el-input ref="first" v-model="form.buildingNum" :placeholder="$t('building.buildingNum')" clearable />
          </el-form-item>
          <el-form-item :label="String($t('building.floor'))" prop="floor">
            <el-input-number v-model="form.floor" controls-position="right" :min="1" :max="99" />
          </el-form-item>
          <el-form-item :label="String($t('building.floorNum'))" prop="floorNum">
            <el-input-number v-model="form.floorNum" controls-position="right" :min="1" :max="5" />
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
      :table-header="tableHeader.building"
      :table-data="crud.data"
      :crud="crud"
      :last-col-permission="['root','Building:update','Building:delete']"
    >
      <template slot="floor" slot-scope="scope">
        <span style="font-weight: bold">{{ scope.row.floor }}</span>
      </template>
      <template slot="floorNum" slot-scope="scope">
        <span style="font-weight: bold">{{ scope.row.floorNum }}</span>
      </template>
      <template slot="number" slot-scope="scope">
        <span style="color: red;font-weight: bold">{{ scope.row.number }}</span>
      </template>
      <template slot="data-operate" slot-scope="scope">
        <sw-sw-update-delete-operation
          :permission="permission"
          :data="scope.row"
        />
      </template>
    </sw-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import { add, edit, del } from '@/api/xiaoqu/building'
import i18n from '@/i18n'

const defaultCrud = CRUD({
  url: '/buildings',
  title: i18n.t('building.title'),
  crudMethod: { add, edit, del }
})

const defaultForm = {
  id: null,
  buildingNum: '',
  floor: 1,
  floorNum: 1,
  number: 1
}

export default {
  name: 'Building',
  mixins: [
    presenter(defaultCrud),
    crud(),
    header(),
    form(defaultForm)
  ],
  data() {
    return {
      permission: {
        add: ['root', 'Building:add'],
        edit: ['root', 'Building:update'],
        del: ['root', 'Building:delete']
      },
      rules: {
        buildingNum: [
          { required: true, message: String(i18n.t('building.message1')), trigger: 'blur' }
        ],
        floor: [
          { type: 'number', required: true, message: String(i18n.t('building.message2')), trigger: 'change' }
        ],
        floorNum: [
          { type: 'number', required: true, message: String(i18n.t('building.message3')), trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['tableHeader'])
  }
}
</script>
