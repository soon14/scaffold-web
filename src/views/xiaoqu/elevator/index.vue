<template>
  <div class="app-container">
    <div class="head-container">
      <sw-search-date-picker-operation
        picker-width="200"
        :show-create-time-picker="false"
        @reset="reset"
      >
        <template #center>
          <sw-select
            v-if="elevatorSelector"
            v-model="timeType"
            :options="timeOptions"
            :enums="false"
            placeholder="选择查找的时间类型"
            width="200"
          />
          <el-date-picker
            v-model="query[timeType]"
            :default-time="['00:00:00','23:59:59']"
            type="daterange"
            range-separator="-"
            value-format="yyyy-MM-dd HH:mm:ss"
            :start-placeholder="String($t('crud.searchDatePickerOperation.startTime'))"
            :end-placeholder="String($t('crud.searchDatePickerOperation.endTime'))"
            align="left"
            style="width: 300px"
          />
        </template>
        <template #right>
          <sw-select
            v-if="elevatorSelector"
            v-model="query.buildingId"
            :options="buildingNums"
            :enums="false"
            placeholder="请选择楼宇栋号"
            width="200"
            @change="crud.toQuery"
          />
        </template>
      </sw-search-date-picker-operation>
      <sw-button-operation :permission="permissions" />
    </div>
    <sw-table
      ref="scaffoldTable"
      :table-header="tableHeader.elevator"
      :table-data="crud.data"
      :crud="crud"
      :last-col-permission="['root','elevator:update','elevator:delete']"
    >
      <template slot="isComputerRoom" slot-scope="scope">
        <el-tag v-if="scope.row.isComputerRoom === 0" type="danger" size="mini">{{ $enum.getDescByValue('ElevatorComputerRoomEnum',scope.row.isComputerRoom) }}</el-tag>
        <el-tag v-else size="mini">{{ $enum.getDescByValue('ElevatorComputerRoomEnum',scope.row.isComputerRoom) }}</el-tag>
      </template>
      <template slot="numberOfPeople" slot-scope="scope">
        <span style="font-weight: bold;color: red">{{ scope.row.numberOfPeople }}</span>
      </template>
      <template slot="numberOfWeight" slot-scope="scope">
        <span style="font-weight: bold;color: red">{{ scope.row.numberOfWeight }}</span>
      </template>
      <template slot="liftingHeight" slot-scope="scope">
        <span style="font-weight: bold">{{ scope.row.liftingHeight }}</span>
      </template>
      <template slot="day" slot-scope="scope">
        <span style="font-weight: bold;color: red">{{ scope.row.day }}</span>
      </template>
      <template slot="enabled" slot-scope="scope">
        <el-switch
          v-model="scope.row.enabled"
          active-color="#409EFF"
          inactive-color="#F56C6C"
        />
      </template>
      <template slot="elevatorTypesString" slot-scope="scope">
        <el-tag
          v-for="(item,index) in scope.row.elevatorTypesString"
          :key="index"
          size="mini"
        >{{ item }}</el-tag>&nbsp;
      </template>
      <template slot="maintainPeoplePhone" slot-scope="scope">
        <sw-desensitize-popover :content="scope.row.maintainPeoplePhone" strategy="phone" />
      </template>
      <template slot="maintainPeople" slot-scope="scope">
        <sw-desensitize-popover :content="scope.row.maintainPeople" />
      </template>
      <template slot="data-operate" slot-scope="scope">
        <sw-update-delete-operation :permission="permissions" :data="scope.row" />
      </template>
    </sw-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getBuildingNums } from '@/api/xiaoqu/building'
import CRUD, { crud, header, presenter } from '@/utils/crud'

const defaultCrud = CRUD({
  url: '/elevators',
  title: '电梯'
})

export default {
  name: 'Elevator',
  mixins: [
    presenter(defaultCrud),
    header(),
    crud()
  ],
  data() {
    return {
      elevatorSelector: true,
      buildingNums: [],
      permissions: {
        add: ['root', 'Elevator:add'],
        edit: ['root', 'Elevator:update'],
        del: ['root', 'Elevator:delete']
      },
      timeOptions: [
        { label: '创建时间', value: 'createTime' },
        { label: '上一次维护时间', value: 'lastMaintainTime' },
        { label: '下一次维护时间', value: 'nextMaintainTime' }
      ],
      timeType: 'createTime'
    }
  },
  computed: {
    ...mapGetters(['tableHeader'])
  },
  watch: {
    timeType(newVal, oldVal) {
      this.query[oldVal] = undefined
    }
  },
  created() {
    this.getBuildingNums()
  },
  methods: {
    getBuildingNums() {
      getBuildingNums().then(res => {
        this.buildingNums = res.data
      })
    },
    reset() {
      this.elevatorSelector = false
      this.$nextTick(() => {
        this.elevatorSelector = true
      })
    }
  }
}
</script>
