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
    @selection-change="crud.selectionChangeHandler"
  >
    <slot name="tableColumns" />
  </el-table>
</template>

<script>

export default {
  name: 'ScaffoldTable',
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
      default: true
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
    }
  }
}
</script>

<style lang="scss" scoped>
.my-table {
  ::v-deep .el-table__body-wrapper {
    // 适配火狐浏览器
    scrollbar-width: none;
    scrollbar-color: #dddee0 transparent;

    // 隐藏滚动条
    &::-webkit-scrollbar {
      width: 0;
      display: none;
      background-color: #dddee0;
    }

    &::-webkit-scrollbar-track {
      display: none;
    }
  }

  // 隐藏空白部分
  ::v-deep th.gutter {
    display: none;
    width: 0;
  }

  ::v-deep colgroup col[name='gutter'] {
    display: none;
    width: 0;
  }

  ::v-deep .el-table__body {
    width: 100% !important;
  }
}
</style>
