<template>
  <el-popover
    :trigger="trigger"
    :placement="placement"
    :transition="transition"
  >
    <div style="text-align: center;padding: 0">{{ content }}</div>
    <template v-if="content === null" #reference>
      {{ $t('nodata') }}
    </template>
    <template v-else-if="content !== null && strategy === 'phone'" #reference>
      <span>{{ content | phone }}</span>
    </template>
    <template v-else-if="content !== null && strategy === 'email'" #reference>
      <span>{{ content | email }}</span>
    </template>
    <template v-else-if="content !== null && strategy === 'idCard'" #reference>
      <span>{{ content | idCard }}</span>
    </template>
    <template v-else-if="content !== null && strategy === 'name'" #reference>
      <span>{{ content | name }}</span>
    </template>
    <template v-else #reference>
      <span>{{ content }}</span>
    </template>
  </el-popover>
</template>

<script>
export default {
  name: 'SwDesensitizePopover',
  props: {
    // 出现的动画
    transition: {
      type: String,
      required: false,
      default: 'el-zoom-in-bottom'
    },
    // 触发的动作
    trigger: {
      type: String,
      required: false,
      default: 'hover'
    },
    // 出现的位置
    placement: {
      type: String,
      required: false,
      default: 'top'
    },
    // 传入的内容
    content: {
      type: String,
      required: true
    },
    // 脱敏的策略(phone,email,idCard,name)
    strategy: {
      type: String,
      required: false,
      default: 'name',
      validator(val) {
        return ['phone', 'email', 'idCard', 'name'].indexOf(val) !== -1
      }
    }
  }
}
</script>
