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
      size="mini"
      type="danger"
      :icon="referenceIcon"
      :disabled="referenceDisabled"
      round
      @click="toConfirm"
    >{{ referenceBtnText }}</el-button>
    <el-button
      v-else-if="referenceBtnText===null && referenceIcon===''"
      slot="reference"
      size="mini"
      type="danger"
      icon="el-icon-eleme"
      :disabled="referenceDisabled"
      round
      @click="toConfirm"
    />
    <el-button
      v-else
      slot="reference"
      size="mini"
      type="danger"
      :icon="referenceIcon"
      :disabled="referenceDisabled"
      round
      @click="toConfirm"
    />
  </el-popover>
</template>

<script>
import i18n from '@/i18n'

export default {
  name: 'ScaffoldPopover',
  props: {
    placement: {
      type: String,
      required: false,
      default: 'top'
    },
    trigger: {
      type: String,
      required: false,
      default: 'manual'
    },
    transition: {
      type: String,
      required: false,
      default: 'el-zoom-in-bottom'
    },
    width: {
      type: String,
      required: false,
      default: '100'
    },
    content: {
      type: String,
      required: false,
      default: 'Hello Scaffold'
    },
    cancelBtnText: {
      type: String,
      required: false,
      default: i18n.t('cancel')
    },
    okBtnText: {
      type: String,
      required: false,
      default: i18n.t('ok')
    },
    referenceBtnText: {
      type: String,
      required: false,
      default: null
    },
    okBtnLoading: {
      type: Boolean,
      required: true
    },
    referenceIcon: {
      type: String,
      required: false,
      default: ''
    },
    referenceDisabled: {
      type: Boolean,
      required: false,
      default: false
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
