<template>
  <div>
    <slot name="left" />
    <el-button
      v-if="showEdit"
      v-permission="permission.edit"
      :disabled="disabledEdit"
      size="mini"
      type="primary"
      round
      icon="el-icon-edit"
      @click="crud.toEdit(data)"
    />
    <el-popover
      v-if="showDel"
      v-model="pop"
      v-permission="permission.del"
      placement="top"
      width="180"
      trigger="manual"
      @show="onPopoverShow"
      @hide="onPopoverHide"
    >
      <p>{{ msg }}</p>
      <div style="text-align: right;margin: 0">
        <el-button size="mini" round @click="doCancel">
          {{ $t('cancel') }}
        </el-button>
        <el-button
          size="mini"
          type="danger"
          round
          :loading="crud.dataStatus[data.id].delete === 2"
          @click="crud.doDelete(data)"
        >
          {{ $t('ok') }}
        </el-button>
      </div>
      <el-button
        slot="reference"
        :disabled="disabledDel"
        type="danger"
        round
        icon="el-icon-delete"
        size="mini"
        @click="toDelete"
      />
    </el-popover>
    <slot name="right" />
  </div>
</template>

<script>
import CRUD, { crud } from '@/utils/crud'
import i18n from '@/i18n'

export default {
  name: 'UpdateDeleteOperation',
  mixins: [crud()],
  props: {
    // 传入要编辑的数据行
    data: {
      type: Object,
      required: true
    },
    // 设置权限集合
    permission: {
      type: Object,
      required: true
    },
    // 是否能操作编辑按钮
    disabledEdit: {
      type: Boolean,
      required: false,
      default: false
    },
    // 是否能操作删除按钮
    disabledDel: {
      type: Boolean,
      required: false,
      default: false
    },
    // 删除按钮的弹出框的提示
    msg: {
      type: String,
      required: false,
      default: String(i18n.t('crud.updateDeleteOperation.msg'))
    },
    // 是否显示编辑按钮
    showEdit: {
      type: Boolean,
      required: false,
      default: true
    },
    // 是否显示删除按钮
    showDel: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      pop: false
    }
  },
  methods: {
    doCancel() {
      this.pop = false
      this.crud.cancelDelete(this.data)
    },
    toDelete() {
      this.pop = true
    },
    [CRUD.HOOK.afterDelete](crud, data) {
      if (data === this.data) {
        this.pop = false
      }
    },
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
    }
  }
}
</script>
