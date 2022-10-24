<template>
  <div class="app-container">
    <scaffold-back-top-and-bottom />
    <div class="head-container">
      <search-date-picker-operation :input-placeholder="String($t('avatarPage.placeholderInput'))">
        <template #right>
          <el-select
            v-model="query.enabled"
            clearable
            :placeholder="String($t('avatarPage.placeholderState'))"
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
      :default-sort="{prop:'createTime',order:'descending'}"
    >
      <template #tableColumns>
        <el-table-column type="selection" width="55" fixed="left" />
        <template v-for="item in tableHeader.avatars">
          <el-table-column
            v-if="columns.visible(item.prop)"
            :key="item"
            :prop="item.prop"
            :label="item.label"
            :show-overflow-tooltip="item.showOverflowTooltip"
            :sortable="item.sortable"
            :width="item.width"
            :fixed="item.fixed"
            align="center"
          >
            <template slot-scope="scope">
              <span v-if="scope.row[item.prop] === null">
                <span v-if="item.prop === 'path'">
                  <el-avatar :src="Avatar" size="80" />
                </span>
                <span v-else-if="item.prop === 'enabled'">
                  <el-tag type="warning">{{ $t('nodata') }}</el-tag>
                </span>
                <span v-else>{{ $t('nodata') }}</span>
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
                  <el-tag v-if="scope.row[item.prop] === '已审核'" type="success">{{ scope.row[item.prop] }}</el-tag>
                  <el-tag v-else type="danger">{{ scope.row[item.prop] }}</el-tag>
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
          :label="String($t('avatarPage.operate'))"
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
import scaffoldBackTopAndBottom from '@/components/ScaffoldBackTopAndBottom'
import { del, editEnabled } from '@/api/system/avatar'
import Avatar from '@/assets/images/avatar.png'
import scaffoldTable from '@/components/ScaffoldTable'
import buttonOperation from '@/components/Crud/Button.operation'
import updateDeleteOperation from '@/components/Crud/UpdateDelete.operation'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import paginationOperation from '@/components/Crud/Pagination.operation'
import CRUD, { crud, header, presenter } from '@/utils/crud'
import i18n from '@/i18n'

const defaultCrud = CRUD({
  url: '/avatars',
  title: String(i18n.t('avatarPage.title')),
  crudMethod: { del }
})
export default {
  name: 'Avatar',
  components: {
    scaffoldTable,
    buttonOperation,
    searchDatePickerOperation,
    paginationOperation,
    updateDeleteOperation,
    scaffoldBackTopAndBottom
  },
  mixins: [
    presenter(defaultCrud),
    header(),
    crud()
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
        { key: 'AUDIT_NO', displayName: String(i18n.t('avatarPage.enabledNo')) },
        { key: 'AUDIT_OK', displayName: String(i18n.t('avatarPage.enabledOK')) }
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
      const operate = val === '已审核' ? String(i18n.t('avatarPage.enable')) : String(i18n.t('avatarPage.disable'))
      this.$confirm(String(i18n.t('avatarPage.enabledTips.tip1')) + operate + String(i18n.t('avatarPage.enabledTips.tip2')) + data.username + String(i18n.t('avatarPage.enabledTips.tip3')), String(i18n.t('confirmTips')), {
        confirmButtonText: String(i18n.t('ok')),
        cancelButtonText: String(i18n.t('cancel')),
        type: 'warning'
      }).then(() => {
        editEnabled(data.id, data.enabled).then(() => {
          this.crud.notify(operate + String(i18n.t('avatarPage.enabledTips.tip4')), CRUD.NOTIFICATION_TYPE.SUCCESS)
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
