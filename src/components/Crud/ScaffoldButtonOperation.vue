<template>
  <div class="crud-opts">
    <span class="crud-opts-left">
      <!-- 左侧插槽 -->
      <slot name="left" />
      <el-button
        v-if="crud.optShow.add"
        v-permission="permission.add"
        type="primary"
        icon="el-icon-plus"
        round
        @click="crud.toAdd"
      >
        {{ $t('crud.buttonOperation.add') }}
      </el-button>
      <el-button
        v-if="crud.optShow.edit"
        v-permission="permission.edit"
        type="success"
        icon="el-icon-edit"
        round
        :disabled="crud.selections.length !== 1"
        @click="crud.toEdit(crud.selections[0])"
      >
        {{ $t('crud.buttonOperation.edit') }}
      </el-button>
      <el-button
        v-if="crud.optShow.del"
        slot="reference"
        v-permission="permission.del"
        type="danger"
        icon="el-icon-delete"
        round
        :loading="crud.delAllLoading"
        :disabled="crud.selections.length === 0"
        @click="toDelete(crud.selections)"
      >
        {{ $t('crud.buttonOperation.del') }}
      </el-button>
      <el-button
        v-if="crud.optShow.download"
        :loading="crud.downloadLoading"
        :disabled="!crud.data.length"
        type="warning"
        icon="el-icon-download"
        round
        @click="crud.doExport"
      >
        {{ $t('crud.buttonOperation.download') }}
      </el-button>
      <!-- 右侧插槽 -->
      <slot name="right" />
    </span>
    <el-button-group class="crud-opts-right">
      <el-button class="popover-item" :type="crud.props.searchToggle ? 'primary' : 'default'" icon="el-icon-search" round @click="toggleSearch" />
      <el-button class="popover-item" icon="el-icon-refresh" round @click="crud.refresh()" />
      <el-popover v-if="tableCol" placement="bottom-end" width="150" transition="el-zoom-in-top" trigger="click">
        <el-button id="popover-button" slot="reference" icon="el-icon-s-grid" class="popover-button" />
        <el-checkbox
          v-model="allColumnsSelected"
          :indeterminate="allColumnsSelectedIndeterminate"
          @change="handleCheckAllChange"
        >
          {{ $t('crud.buttonOperation.chooseAll') }}
        </el-checkbox>
        <el-checkbox
          v-for="item in crud.props.tableColumns"
          :key="item.label"
          v-model="item.visible"
          @change="handleCheckedTableColumnsChange(item)"
        >
          {{ item.label }}
        </el-checkbox>
      </el-popover>
    </el-button-group>
  </div>
</template>

<script>
import CRUD, { crud } from '@/utils/crud'
import i18n from '@/i18n'

export default {
  name: 'SwButtonOperation',
  mixins: [crud()],
  props: {
    // 权限列表
    permission: {
      type: Object,
      default: null
    },
    // 是否动态表格列
    tableCol: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      // 已选择所有列
      allColumnsSelected: true,
      // 选定的所有列 不确定
      allColumnsSelectedIndeterminate: false
    }
  },
  created() {
    // 向CRUD中props注册属性searchToggle,是否显示搜索框
    this.crud.updateProp('searchToggle', true)
  },
  mounted() {
    document.getElementById('popover-button').style.padding = window.getComputedStyle(document.getElementsByClassName('popover-item')[0], null).padding
  },
  methods: {
    toDelete(data) {
      this.$confirm(String(i18n.t('crud.buttonOperation.tip1')) + data.length + String(i18n.t('crud.buttonOperation.tip2')), String(i18n.t('confirmTips')), {
        confirmButtonText: String(this.$i18n.t('ok')),
        cancelButtonText: String(this.$i18n.t('cancel')),
        type: 'warning'
      }).then(() => {
        this.crud.delAllLoading = true
        this.crud.doDelete(data)
      }).catch(() => {
      })
    },
    toggleSearch() {
      this.crud.props.searchToggle = !this.crud.props.searchToggle
    },
    handleCheckAllChange(val) {
      if (val === false) {
        this.allColumnsSelected = true
        return
      }
      for (const key in this.crud.props.tableColumns) {
        this.crud.props.tableColumns[key].visible = val
      }
      this.allColumnsSelected = val
      this.allColumnsSelectedIndeterminate = false
    },
    handleCheckedTableColumnsChange(item) {
      let totalCount = 0
      let selectedCount = 0
      for (const key in this.crud.props.tableColumns) {
        ++totalCount
        selectedCount += this.crud.props.tableColumns[key].visible ? 1 : 0
      }
      if (selectedCount === 0) {
        this.crud.notify(String(i18n.t('crud.buttonOperation.tip3')), CRUD.NOTIFICATION_TYPE.WARNING)
        this.$nextTick(function () {
          item.visible = true
        })
        return
      }
      this.allColumnsSelected = selectedCount === totalCount
      this.allColumnsSelectedIndeterminate = selectedCount !== totalCount && selectedCount !== 0
    }
  }
}
</script>

<style lang="scss">
.crud-opts {
  padding: 6px 0;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  margin-top: 10px;

  .crud-opts-right {
    margin-left: auto;

    .popover-button{
      margin-left: 1px;
      border-radius: 0 20px 20px 0;
    }
  }
}
</style>
