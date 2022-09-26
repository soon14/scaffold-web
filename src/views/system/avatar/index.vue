<template>
  <div class="app-container">
    <div class="head-container">
      <search-date-picker-operation />
      <button-operation :permission="permission" />
    </div>
    <scaffold-table
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
                    <el-avatar :src="scope.row[item.prop] && scope.row.enabled === '审核通过' ? scope.row[item.prop] : Avatar" size="80" />
                  </a>
                </span>
                <span v-else-if="item.prop === 'username'">
                  <span v-if="scope.row[item.prop] === 'root'" style="font-weight: bold;color: red">{{ scope.row[item.prop] }}</span>
                  <span v-else>{{ scope.row[item.prop] }}</span>
                </span>
                <span v-else-if="item.prop === 'enabled'">
                  <el-tag v-if="scope.row[item.prop] === '审核通过'" type="success" size="small">{{ scope.row[item.prop] }}</el-tag>
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
            />
          </template>
        </el-table-column>
        <!-- TODO 明天完成头像信息修改 -->
      </template>
    </scaffold-table>
    <pagination-operation />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { del } from '@/api/system/avatar'
import Avatar from '@/assets/images/avatar.png'
import scaffoldTable from '@/components/ScaffoldTable'
import scaffoldDialog from '@/components/ScaffoldDialog'
import buttonOperation from '@/components/Crud/Button.operation'
import updateDeleteOperation from '@/components/Crud/UpdateDelete.operation'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import paginationOperation from '@/components/Crud/Pagination.operation'
import CRUD, { presenter } from '@/utils/crud'

const defaultCrud = CRUD({ url: '/avatars', title: '头像', crudMethod: { del }})
export default {
  name: 'Avatar',
  components: {
    scaffoldDialog,
    scaffoldTable,
    buttonOperation,
    searchDatePickerOperation,
    paginationOperation,
    updateDeleteOperation
  },
  mixins: [
    presenter(defaultCrud)
  ],
  data() {
    return {
      Avatar: Avatar,
      permission: {
        add: ['Avatar:add', 'root'],
        edit: ['Avatar:update', 'root'],
        del: ['Avatar:del', 'root']
      }
    }
  },
  computed: {
    ...mapGetters([
      'tableHeader'
    ])
  },
  created() {
    this.crud.optShow = {
      add: false,
      edit: true,
      del: true,
      download: true
    }
  }
}
</script>
