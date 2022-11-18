<template>
  <json-viewer
    style="width: 98%;background-color: rgba(240,242,245,0.89);border-radius: 15px"
    :value="isJson(jsonData) ? jsonData : JSON.parse(jsonData)"
    :expand-depth="expandDepth"
    :copyable="copyable"
    :sort="sort"
    :boxed="boxed"
    :expanded="expanded"
    :show-array-index="showArrayIndex"
    :show-double-quotes="showDoubleQuotes"
    :preview-mode="previewMode"
    @copied="showCopied"
  >
    <template slot="copy" slot-scope="scope">
      <el-button v-if="!scope.copied" type="text">{{ $t('scaffoldJsonViewer.copyText') }}</el-button>
      <el-button v-else type="text" disabled>{{ $t('scaffoldJsonViewer.copiedText') }}</el-button>
    </template>
  </json-viewer>
</template>

<script>
import jsonViewer from 'vue-json-viewer'
import i18n from '@/i18n'

export default {
  name: 'SwJson',
  components: { jsonViewer },
  props: {
    // 要显示的json对象(不能是json字符串)
    jsonData: {
      type: [Object, String],
      required: true
    },
    // 是否为组件添加一个盒样式
    boxed: {
      type: Boolean,
      required: false,
      default: false
    },
    // 按照key排序展示
    sort: {
      type: Boolean,
      required: false,
      default: false
    },
    // 是否显示数组索引
    showArrayIndex: {
      type: Boolean,
      required: false,
      default: false
    },
    // 展示key双引号
    showDoubleQuotes: {
      type: Boolean,
      required: false,
      default: false
    },
    // 默认展开视图
    expanded: {
      type: Boolean,
      required: false,
      default: false
    },
    // 是否开启复制按钮
    copyable: {
      type: Boolean,
      required: false,
      default: true
    },
    // 默认展开的层级
    expandDepth: {
      type: Number,
      required: false,
      default: 2
    },
    // 不可折叠模式
    previewMode: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    showCopied() {
      this.$message({
        message: String(i18n.t('scaffoldJsonViewer.copiedText')) + '!',
        type: 'success'
      })
    },
    isJson(obj) {
      return typeof (obj) === 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length
    }
  }
}
</script>
