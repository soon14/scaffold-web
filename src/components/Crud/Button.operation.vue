<template>
  <div class="crud-opts">
    <span class="crud-opts-left">
      <!-- 左侧插槽 -->
      <slot name="left" />
      <el-button
        v-if="crud.optShow.add"
        v-permission="permission.add"
        class="filter-item"
        size="mini"
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
        class="filter-item"
        size="mini"
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
        class="filter-item"
        type="danger"
        icon="el-icon-delete"
        size="mini"
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
        class="filter-item"
        size="mini"
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
      <el-button size="mini" type="primary" icon="el-icon-search" @click="toggleSearch" />
      <el-button size="mini" icon="el-icon-refresh" @click="crud.refresh()" />
      <el-popover placement="bottom-end" width="150" trigger="click">
        <el-button slot="reference" size="mini" icon="el-icon-s-grid">
          <i class="fa fa-caret-down" aria-hidden="true" />
        </el-button>
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
import CRUD, {crud} from '@/utils/crud'

export default {
  name: 'ButtonOperation',
  mixins: [crud()],
  props: {
    // 权限列表
    permission: {
      type: Object,
      default: null
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
  methods: {
    toDelete(data) {
      this.$confirm(`确认删除选中的` + data.length + `条数据?`, '提示', {
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
        this.crud.notify('请至少选择一列', CRUD.NOTIFICATION_TYPE.WARNING)
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

<style>
.crud-opts {
  padding: 6px 0;
  display: -webkit-flex;
  display: flex;
  align-items: center;
}

.crud-opts .crud-opts-right {
  margin-left: auto;
}
</style>
