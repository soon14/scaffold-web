<template>
  <el-popover
    v-model="pop"
    :placement="placement"
    :trigger="trigger"
    :transition="transition"
    :width="width"
    @show="onPopoverShow"
    @hide="onPopoverHide"
  >
    <p style="text-align: center;" v-html="content" />
    <div style="text-align: center;">
      <el-button
        size="mini"
        round
        @click="doCancel"
      >
        {{ cancelBtnText }}
      </el-button>
      <el-button
        size="mini"
        type="danger"
        round
        :loading="okBtnLoading"
        @click="confirmHandler"
      >
        {{ okBtnText }}
      </el-button>
    </div>
    <el-button
      v-if="referenceBtnText!==null"
      slot="reference"
      :size="btnSize"
      type="danger"
      :icon="referenceIcon"
      :disabled="referenceDisabled"
      round
      :plain="btnPlain"
      :circle="btnCircle"
      @click="toConfirm"
    >{{ referenceBtnText }}</el-button>
    <el-button
      v-else-if="referenceBtnText===null && referenceIcon===''"
      slot="reference"
      :size="btnSize"
      type="danger"
      icon="el-icon-eleme"
      :disabled="referenceDisabled"
      round
      :plain="btnPlain"
      :circle="btnCircle"
      @click="toConfirm"
    />
    <el-button
      v-else
      slot="reference"
      :size="btnSize"
      type="danger"
      :icon="referenceIcon"
      :disabled="referenceDisabled"
      round
      :plain="btnPlain"
      :circle="btnCircle"
      @click="toConfirm"
    />
  </el-popover>
</template>

<script>
import i18n from '@/i18n'

export default {
  name: 'SwButtonPopover',
  props: {
    // 弹框出现的地方
    placement: {
      type: String,
      required: false,
      default: 'top'
    },
    // 启动的方式
    trigger: {
      type: String,
      required: false,
      default: 'manual'
    },
    // 动画
    transition: {
      type: String,
      required: false,
      default: 'el-zoom-in-bottom'
    },
    // 弹出框的宽度
    width: {
      type: String,
      required: false,
      default: '100'
    },
    // 弹出框的内容
    content: {
      type: String,
      required: false,
      default: 'Hello Scaffold'
    },
    // 取消按钮的文本
    cancelBtnText: {
      type: String,
      required: false,
      default: i18n.t('cancel')
    },
    // 确定按钮的文本
    okBtnText: {
      type: String,
      required: false,
      default: i18n.t('ok')
    },
    // 外层按钮的文本
    referenceBtnText: {
      type: String,
      required: false,
      default: null
    },
    // 确定按钮的loading
    okBtnLoading: {
      type: Boolean,
      required: true
    },
    // 外层按钮的icon
    referenceIcon: {
      type: String,
      required: false,
      default: ''
    },
    // 是否禁用外层按钮
    referenceDisabled: {
      type: Boolean,
      required: false,
      default: false
    },
    // 外层按钮
    btnPlain: {
      type: Boolean,
      required: false,
      default: false
    },
    // 外层按钮
    btnCircle: {
      type: Boolean,
      required: false,
      default: false
    },
    // 外层按钮
    btnSize: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      pop: false
    }
  },
  methods: {
    onPopoverShow() {
      setTimeout(() => {
        document.addEventListener('click', this.handleDocumentClick)
      }, 0)
    },
    onPopoverHide() {
      document.removeEventListener('click', this.handleDocumentClick)
    },
    handleDocumentClick(event) {
      this.pop = false
    },
    doCancel() {
      this.pop = false
    },
    toConfirm() {
      this.pop = true
    },
    confirmHandler() {
      this.$emit('confirm')
    }
  }
}
</script>
