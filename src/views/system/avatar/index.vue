<template>
  <div class="app-container">
    <div class="head-container">
      <search-date-picker-operation input-placeholder="请输入用户名查询">
        <template #right>
          <el-select
            v-model="query.enabled"
            clearable
            size="small"
            placeholder="审核状态"
            class="filter-item"
            style="width: 120px"
            @change="crud.toQuery"
          >
            <el-option
              v-for="item in enabledTypeOptions"
              :key="item.key"
              :label="item.displayName"
              :value="item.key"
            />
          </el-select>
        </template>
      </search-date-picker-operation>
      <button-operation :permission="permission" />
    </div>
    <scaffold-table
      ref="scaffoldTable"
      :table-data="crud.data"
      :crud="crud"
      :is-border="false"
      :default-sort="{prop:'createTime',order:'descending'}"
    >
      <template #tableColumns>
        <el-table-column type="selection" width="55" />
        <template v-for="item in tableHeader.avatars">
          <el-table-column
            v-if="columns.visible(item.prop)"
            :key="item"
            :prop="item.prop"
            :label="item.label"
            :show-overflow-tooltip="item.showOverflowTooltip"
            :sortable="item.sortable"
            :width="item.width"
          >
            <template slot-scope="scope">
              <span v-if="scope.row[item.prop] === null">
                <span v-if="item.prop === 'path'">
                  <el-avatar :src="Avatar" size="80" />
                </span>
                <span v-else-if="item.prop === 'enabled'">
                  <el-tag type="warning" size="small">暂无数据</el-tag>
                </span>
                <span v-else>暂无数据</span>
              </span>
              <span v-else>
                <span v-if="item.prop === 'path'">
                  <a :href="scope.row[item.prop]" target="_blank">
                    <el-avatar :src="scope.row[item.prop] ? scope.row[item.prop] : Avatar" size="80" />
                  </a>
                </span>
                <span v-else-if="item.prop === 'username'">
                  <span v-if="scope.row[item.prop] === 'root'" style="font-weight: bold;color: red">{{ scope.row[item.prop] }}</span>
                  <span v-else>{{ scope.row[item.prop] }}</span>
                </span>
                <span v-else-if="item.prop === 'enabled'">
                  <el-tag v-if="scope.row[item.prop] === '已审核'" type="success" size="small">{{ scope.row[item.prop] }}</el-tag>
                  <el-tag v-else type="danger" size="small">{{ scope.row[item.prop] }}</el-tag>
                </span>
                <span v-else-if="item.prop === 'updateTime'">
                  {{ scope.row[item.prop] }}
                </span>
                <span v-else>{{ scope.row[item.prop] }}</span>
              </span>
            </template>
          </el-table-column>
        </template>
        <el-table-column
          v-permission="['root','Avatar:delete','Avatar:edit']"
          label="操作"
          width="125"
          align="center"
          fixed="right"
        >
          <template slot-scope="scope">
            <update-delete-operation
              :permission="permission"
              :data="scope.row"
              :show-edit="false"
              :disabled-del="scope.row.id === user.avatar.id"
            >
              <template #left>
                <el-switch
                  v-model="scope.row.enabled"
                  active-value="已审核"
                  inactive-value="未审核"
                  active-color="#409EFF"
                  inactive-color="#F56C6C"
                  :disabled="scope.row.id === user.avatar.id"
                  @change="changeEnabled(scope.row,scope.row.enabled)"
                />
              </template>
            </update-delete-operation>
          </template>
        </el-table-column>
      </template>
    </scaffold-table>
    <pagination-operation />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { del, editEnabled } from '@/api/system/avatar'
import Avatar from '@/assets/images/avatar.png'
import scaffoldTable from '@/components/ScaffoldTable'
import buttonOperation from '@/components/Crud/Button.operation'
import updateDeleteOperation from '@/components/Crud/UpdateDelete.operation'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import paginationOperation from '@/components/Crud/Pagination.operation'
import CRUD, { header, presenter } from '@/utils/crud'

const defaultCrud = CRUD({ url: '/avatars', title: '头像', crudMethod: { del }})
export default {
  name: 'Avatar',
  components: {
    scaffoldTable,
    buttonOperation,
    searchDatePickerOperation,
    paginationOperation,
    updateDeleteOperation
  },
  mixins: [
    presenter(defaultCrud),
    header()
  ],
  data() {
    return {
      Avatar: Avatar,
      permission: {
        add: ['Avatar:add', 'root'],
        edit: ['Avatar:update', 'root'],
        del: ['Avatar:del', 'root']
      },
      enabledTypeOptions: [
        { key: 'AUDIT_NO', displayName: '未审核' },
        { key: 'AUDIT_OK', displayName: '已审核' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'tableHeader',
      'user'
    ])
  },
  created() {
    this.crud.optShow = {
      add: false,
      edit: true,
      del: true,
      download: true
    }
  },
  methods: {
    changeEnabled(data, val) {
      const operate = val === '已审核' ? '启用' : '禁用'
      this.$confirm('此操作将' + operate + '用户 [' + data.username + '] 的头像' + ', 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        editEnabled(data.id, data.enabled).then(() => {
          this.crud.notify(operate + '成功', CRUD.NOTIFICATION_TYPE.SUCCESS)
        }).catch(() => {
          if (data.enabled === '已审核') {
            data.enabled = '未审核'
          } else {
            data.enabled = '已审核'
          }
        })
      }).catch(() => {
        if (data.enabled === '已审核') {
          data.enabled = '未审核'
        } else {
          data.enabled = '已审核'
        }
      })
    }
  }
}
</script>
