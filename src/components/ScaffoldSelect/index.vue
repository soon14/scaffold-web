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
export default {
  name: 'ScaffoldSelect',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: String
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
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
    value(val) {
      this.dictValue = val
    },
    dictValue(val, oldVal) {
      if (val !== oldVal) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handlerChange() {
      this.$emit('change', this.dictValue)
    }
  }
}
</script>
