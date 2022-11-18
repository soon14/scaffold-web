<template>
  <el-popover
    :placement="placement"
    :width="width"
    :trigger="trigger"
  >
    <el-tree
      :data="treeData"
      check-on-click-node
      :expand-on-click-node="false"
      accordion
      node-key="id"
      :default-expanded-keys="[0]"
      @node-click="selected"
    />
    <el-input
      slot="reference"
      :placeholder="placeholder"
      readonly
      clearable
      :value="menuName"
      style="width: 178px"
    />
  </el-popover>
</template>

<script>
import { getMenuName } from '@/utils'
import i18n from '@/i18n'

export default {
  name: 'SwTreeSelect',
  props: {
    treeData: {
      type: Array,
      required: true
    },
    parentId: {
      type: Number,
      required: true
    },
    placement: {
      type: String,
      required: false,
      default: 'bottom-start'
    },
    width: {
      type: String, Number,
      required: false,
      default: '150px'
    },
    trigger: {
      type: String,
      required: false,
      default: 'click'
    },
    placeholder: {
      type: String,
      required: false,
      default: String(i18n.t('scaffoldTreeSelect.tip'))
    }
  },
  computed: {
    menuName() {
      return getMenuName(this.treeData, this.parentId)
    }
  },
  methods: {
    selected(node) {
      this.$emit('selected', node)
      document.body.click()
    }
  }
}
</script>
