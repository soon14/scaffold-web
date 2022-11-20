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
  </div>
</template>

<script>
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
