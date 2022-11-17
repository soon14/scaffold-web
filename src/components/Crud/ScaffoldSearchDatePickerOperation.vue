<template>
  <div v-if="crud.props.searchToggle">
    <slot name="left" />
    <el-input
      v-model="query.blurry"
      clearable
      :placeholder="inputPlaceholder === null ? String($t('crud.searchDatePickerOperation.placeholder')) : inputPlaceholder"
      :style="{
        'width' : inputWidth + 'px'
      }"
      @keyup.enter.native="crud.toQuery"
    />
    <slot name="center" />
    <el-date-picker
      v-model="query.createTime"
      :default-time="['00:00:00','23:59:59']"
      type="daterange"
      range-separator="-"
      value-format="yyyy-MM-dd HH:mm:ss"
      :start-placeholder="String($t('crud.searchDatePickerOperation.startTime'))"
      :end-placeholder="String($t('crud.searchDatePickerOperation.endTime'))"
      align="left"
      :style="{
        'width' : pickerWidth + 'px'
      }"
    />
    <slot name="right" />
    <sw-search-reset-operation :crud="crud" />
  </div>
</template>

<script>
import { header } from '@/utils/crud'

export default {
  name: 'SWSearchDatePickerOperation',
  mixins: [header()],
  props: {
    inputPlaceholder: {
      type: String,
      required: false,
      default: null
    },
    inputWidth: {
      type: Number,
      required: false,
      default: 200
    },
    pickerWidth: {
      type: Number,
      required: false,
      default: 300
    }
  }
}
</script>
