<template>
  <el-dialog
    class="form-dialog"
    :append-to-body="appendToBody"
    :close-on-click-modal="closeOnClickModal"
    :before-close="beforeClose"
    :visible.sync="visible"
    :width="width"
    :top="top"
    :center="center"
    :modal="modal"
    @close="close"
  >
    <div slot="title" class="header-title" :style="{'background': theme, 'color': 'white'}">
      <div style="padding:15px 20px;">
        <slot name="title" />
      </div>
    </div>
    <slot name="content" />
    <div slot="footer" class="dialog-footer">
      <slot name="footer" />
    </div>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SWDialog',
  props: {
    // 是否显示 Dialog
    visible: {
      type: Boolean,
      required: true
    },
    // 关闭前的回调，会暂停 Dialog 的关闭
    beforeClose: {
      type: Function,
      required: false,
      default: () => {}
    },
    // 是否可以通过点击 modal 关闭 Dialog
    closeOnClickModal: {
      type: Boolean,
      required: false,
      default: true
    },
    // 对话框宽度
    width: {
      type: String,
      required: false,
      default: '50%'
    },
    // 距离顶部的距离
    top: {
      type: String,
      required: false,
      default: '15vh'
    },
    // 顶部标题居中
    center: {
      type: Boolean,
      required: false,
      default: true
    },
    // Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
    appendToBody: {
      type: Boolean,
      required: false,
      default: false
    },
    // 是否需要遮罩层
    modal: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    ...mapGetters([
      'theme'
    ])
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog{
  border-radius: 10px;
}

.form-dialog ::v-deep{
  .header-title{
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .el-dialog__header {
    padding: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .el-dialog__headerbtn {
    top: 5px;
    right: 5px;
    padding-top: 10px;
  }

  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
    height: 30px;
    width: 35px;
  }

  .el-dialog__headerbtn .el-dialog__close:hover {
    color: gray;
  }

  .el-dialog__body {
    overflow: overlay;

    // 滚动条适配火狐浏览器
    scrollbar-width: none;
    scrollbar-color: #dddee0 transparent;

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(144, 147, 153, 0.54);
      cursor: pointer;
      border-radius: 8px;
      position: relative;
      transition: background-color .3s;
      transition-property: background-color;
      transition-duration: 0.3s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }
  }
}
</style>
