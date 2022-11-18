<template>
  <el-select
    v-model="dictValue"
    clearable
    :placeholder="placeholder"
    :style="{
      width: width + 'px'
    }"
    @change="handlerChange"
  >
    <el-option
      v-for="(item,index) in options"
      :key="index"
      :label="item.label"
      :value="name ? item.name : item.value"
    />
  </el-select>
</template>

<script>
import i18n from '@/i18n'

export default {
  name: 'SwSelect',
  model: {
    prop: 'childValue',
    event: 'change'
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: null,
    placeholder: {
      type: String,
      required: false,
      default: String(i18n.t('scaffoldSelect.placeholder'))
    },
    width: {
      type: Number,
      required: false,
      default: 120
    },
    options: {
      type: Array,
      required: true
    },
    // 开启name模式(针对枚举类传参)
    name: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      dictValue: this.value
    }
  },
  watch: {
    value: {
      handler(val) {
        this.dictValue = val
      },
      immediate: true
    }
  },
  methods: {
    handlerChange(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>
