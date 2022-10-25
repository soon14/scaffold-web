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
    <scaffold-popover
      v-if="showDel"
      v-permission="permission.del"
      :ok-btn-loading="crud.dataStatus[data.id].delete === 2"
      width="180"
      :content="msg"
      :reference-disabled="disabledDel"
      reference-icon="el-icon-delete"
      @confirm="crud.doDelete(data)"
    />
    <slot name="right" />
  </div>
</template>

<script>
import CRUD, { crud } from '@/utils/crud'
import scaffoldPopover from '@/components/ScaffoldPopover'
import i18n from '@/i18n'

export default {
  name: 'UpdateDeleteOperation',
  components: { scaffoldPopover },
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
