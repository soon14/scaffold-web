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
    <template v-if="enums">
      <el-option
        v-for="(item,index) in options"
        :key="index"
        :label="item.desc"
        :value="Number(item.value)"
      />
    </template>
    <template v-else>
      <el-option
        v-for="(item,index) in options"
        :key="index"
        :label="item.label"
        :value="item.value"
      />
    </template>
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
    enums: {
      type: Boolean,
      required: false,
      default: true
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
      }
    },
    dictValue(newVal, oldVal) {
      this.$emit('input', this.dictValue)
    }
  },
  methods: {
    handlerChange(val) {
      this.$emit('change', val)
    }
  }
}
</script>
