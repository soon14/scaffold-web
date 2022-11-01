<template>
  <el-table
    ref="table"
    v-loading="crud.loading"
    class="my-table"
    style="width: 100%;"
    :data="tableData"
    :border="isBorder"
    :stripe="isStripe"
    :default-sort="defaultSort"
    :tooltip-effect="tooltipEffect"
    :header-cell-style="{color:'#333333',fontWeight:'bold'}"
    :size="size"
    :highlight-current-row="highlightCurrentRow"
    :tree-props="treeProps"
    :row-key="rowKey"
    @current-change="currentChange"
    @select="select"
    @select-all="selectAll"
    @selection-change="crud.selectionChangeHandler"
  >
    <slot name="tableColumns" />
  </el-table>
</template>

<script>

export default {
  name: 'ScaffoldMenuTable',
  props: {
    // CRUD对象
    crud: {
      type: Object,
      required: true
    },
    // 表格的数据
    tableData: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    },
    // 是否有边框
    isBorder: {
      type: Boolean,
      required: false,
      default: false
    },
    // 表格渲染时候默认的排序规则
    // eslint-disable-next-line vue/require-default-prop
    defaultSort: {
      type: Object,
      required: false
    },
    // 是否是斑马纹
    isStripe: {
      type: Boolean,
      required: false,
      default: true
    },
    // tooltip effect 属性
    tooltipEffect: {
      type: String,
      required: false,
      default: 'light'
    },
    // eslint-disable-next-line vue/require-default-prop
    size: {
      type: String,
      required: false
    },
    // 是否要高亮当前行
    highlightCurrentRow: {
      type: Boolean,
      required: false,
      default: false
    },
    // 渲染嵌套数据的配置选项
    treeProps: {
      type: Object,
      default() {
        return {
          hasChildren: 'hasChildren',
          children: 'children'
        }
      }
    },
    // eslint-disable-next-line vue/require-default-prop
    rowKey: {
      type: [String, Function],
      required: false
    }
  },
  beforeUpdate() {
    this.updateLayout()
  },
  updated() {
    this.updateLayout()
  },
  methods: {
    currentChange(val) {
      this.$emit('current-change', val)
    },
    select(selection, row) {
      this.$emit('select', selection, row)
    },
    selectAll(selection) {
      this.$emit('select-all', selection)
    },
    updateLayout() {
      this.$nextTick(() => {
        this.$refs.table.doLayout()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-table {
  ::v-deep .el-table__body-wrapper {
    // 滚动条整体部分
    &::-webkit-scrollbar {
      width: 17px;
      height: 17px;
      background-color: #dddee0;
    }

    // 滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
    &::-webkit-scrollbar-thumb {
      background: rgba(144, 147, 153, 0.54);
      cursor: pointer;
      border-radius: 10px;
      position: relative;
      transition: background-color .3s;
      transition-property: background-color;
      transition-duration: 0.3s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
  }
}
</style>
