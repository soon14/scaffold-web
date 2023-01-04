<template>
  <div>
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
      @sort-change="changeFlag"
    >
      <slot v-if="openExpand" name="expand-col" />

      <el-table-column
        v-if="showFirstCol"
        type="selection"
        :width="firstColWidth"
        :fixed="firstColFixed"
        :align="firstColAlign"
      />

      <template v-for="(item,index) in tableHeader">
        <el-table-column
          v-if="columns.visible(item.prop)"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :fixed="item.fixed"
          :width="item.width"
          :sortable="item.sortable"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :align="colAlignComputed(item.align)"
        >
          <template slot-scope="scope">
            <slot v-if="item.slot" :name="item.prop" :row="scope.row" :$index="scope.$index" />
            <span v-else-if="scope.row[item.prop] === null || scope.row[item.prop] === '' || scope.row[item.prop] === undefined">
              {{ $t('nodata') }}
            </span>
            <template
              v-else-if="item.prop === 'createTime' || item.prop === 'updateTime'
                || item.prop === 'answerTime' || item.prop === 'loginTime'
                || item.prop === 'lastMaintainTime'"
            >
              <sw-relative-time
                v-if="flag"
                :timestamp="scope.row[item.prop]"
              />
            </template>
            <span v-else>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </template>

      <el-table-column
        v-if="isLastCol"
        v-permission="lastColPermission"
        :label="lastColLabel"
        :width="lastColWidth"
        :align="lastColAlign"
        :fixed="lastColFixed"
      >
        <template slot-scope="scope">
          <slot name="data-operate" :row="scope.row" :$index="scope.$index" />
        </template>
        <template v-if="showRefresh" slot="header">
          <div style="display: inline-block;float: right;cursor:pointer;" @click="crud.refresh()">
            {{ lastColLabel }}
            <i class="el-icon-refresh" />
          </div>
        </template>
      </el-table-column>

      <slot name="right-col" />
    </el-table>

    <sw-pagination-operation v-if="isPagination" />

  </div>
</template>

<script>
import i18n from '@/i18n'

function obColumns(columns) {
  return {
    visible(col) {
      return !columns || !columns[col] ? true : columns[col].visible
    }
  }
}

export default {
  name: 'SwTable',
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
    defaultSort: {
      type: Object,
      required: false,
      default: () => {
        return { prop: 'createTime', order: 'descending' }
      }
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
    },
    // 是否需要第一列
    isFirstCol: {
      type: Boolean,
      required: false,
      default: true
    },
    // 开启第一列是expand模式
    openExpand: {
      type: Boolean,
      required: false,
      default: false
    },
    // 第一列的宽度
    firstColWidth: {
      type: String,
      required: false,
      default: '55'
    },
    // 第一列的固定(left/right)
    firstColFixed: {
      type: String || Boolean,
      required: false,
      default: 'left'
    },
    // 表格的表头
    tableHeader: {
      type: Array,
      required: true
    },
    // 第一列列对齐方式
    firstColAlign: {
      type: String,
      required: false,
      default: 'center'
    },
    // 列对齐的方式
    colAlign: {
      type: String,
      required: false,
      default: 'center'
    },
    // 是否显示最后一列
    isLastCol: {
      type: Boolean,
      required: false,
      default: true
    },
    // 最后一列操作权限数组
    lastColPermission: {
      type: Array,
      required: false,
      default: () => {}
    },
    // 最后一列的列名
    lastColLabel: {
      type: String,
      required: false,
      default: String(i18n.t('scaffoldTable.operate'))
    },
    // 最后一列的宽度
    lastColWidth: {
      type: String,
      required: false,
      default: '125'
    },
    // 最后一列列对齐方式
    lastColAlign: {
      type: String,
      required: false,
      default: 'center'
    },
    // 最后一列的固定(left/right)
    lastColFixed: {
      type: [String, Boolean],
      required: false,
      default: 'right'
    },
    // 第一列为"expand"的标题
    expandTitle: {
      type: Array,
      required: false,
      default: () => {}
    },
    // 是否显示分页
    isPagination: {
      type: Boolean,
      required: false,
      default: true
    },
    // 是否显示刷新按钮(会覆盖最后一列列头)
    showRefresh: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      flag: true,
      columns: obColumns()
    }
  },
  computed: {
    showFirstCol() {
      if (this.openExpand) {
        return false
      } else {
        return this.isFirstCol
      }
    }
  },
  mounted() {
    const columns = {}
    this.$refs.table.columns.forEach(e => {
      if (!e.property || e.type !== 'default') {
        return
      }
      columns[e.property] = {
        label: e.label,
        visible: true
      }
    })
    this.columns = obColumns(columns)
    this.crud.updateProp('tableColumns', columns)
  },
  // 让其动态显示列时候更加平滑
  beforeUpdate() {
    this.updateLayout()
  },
  updated() {
    this.updateLayout()
  },
  methods: {
    // 为了让SWRelativeTime组件在改变表格排序条件时重新渲染
    changeFlag() {
      this.flag = false
      this.$nextTick(() => {
        this.flag = true
      })
    },
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
    },
    colAlignComputed(itemAlign) {
      if (itemAlign) {
        return itemAlign
      } else {
        return this.colAlign
      }
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

.demo-table-expand {
  font-size: 0;
  margin-left: 25px;
}
</style>
