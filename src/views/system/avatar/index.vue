<template>
  <div class="app-container">
    <sw-back-top-and-bottom />
    <div class="head-container">
      <sw-search-date-picker-operation
        :input-placeholder="String($t('avatarPage.placeholderInput'))"
        @reset="reset"
      >
        <template #right>
          <sw-select
            v-if="avatarSelector"
            v-model="query.enabled"
            :options="$enum.getValueDescList('AuditEnum')"
            :placeholder="String($t('avatarPage.placeholderState'))"
            width="150"
            @change="crud.toQuery"
          />
        </template>
      </sw-search-date-picker-operation>
      <sw-button-operation :permission="permission" />
    </div>
    <sw-table
      ref="scaffoldTable"
      :table-header="tableHeader.avatars"
      :table-data="crud.data"
      :crud="crud"
      :last-col-permission="['root','Avatar:delete','Avatar:update']"
      :last-col-label="String($t('avatarPage.operate'))"
    >
      <template slot="path" slot-scope="scope">
        <el-avatar v-if="scope.row.path === null" :src="Avatar" size="80" />
        <sw-avatar-image v-else :src="scope.row.path" />
      </template>
      <template slot="username" slot-scope="scope">
        <span v-if="scope.row.username === 'root'" style="font-weight: bold;color: red">{{ scope.row.username }}</span>
        <span v-else>{{ scope.row.username }}</span>
      </template>
      <template slot="enabled" slot-scope="scope">
        <el-tag v-if="scope.row.enabled === null" type="warning">{{ $t('nodata') }}</el-tag>
        <span v-else>
          <el-tag v-if="scope.row.enabled === 1" type="success">{{ $enum.getDescByValue('AuditEnum',scope.row.enabled) }}</el-tag>
          <el-tag v-else type="danger">{{ $enum.getDescByValue('AuditEnum',scope.row.enabled) }}</el-tag>
        </span>
      </template>
      <template slot="data-operate" slot-scope="scope">
        <sw-update-delete-operation
          :permission="permission"
          :data="scope.row"
          :show-edit="false"
          :disabled-del="scope.row.id === user.avatar.id"
        >
          <template #left>
            <el-switch
              v-model="scope.row.enabled"
              :active-value="1"
              :inactive-value="0"
              active-color="#409EFF"
              inactive-color="#F56C6C"
              :disabled="scope.row.id === user.avatar.id"
              @change="changeEnabled(scope.row,scope.row.enabled)"
            />
          </template>
        </sw-update-delete-operation>
      </template>
    </sw-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { del, editEnabled } from '@/api/system/avatar'
import Avatar from '@/assets/images/avatar.png'
import CRUD, { crud, header, presenter } from '@/utils/crud'
import i18n from '@/i18n'

const defaultCrud = CRUD({
  url: '/avatars',
  title: String(i18n.t('avatarPage.title')),
  crudMethod: { del }
})
export default {
  name: 'Avatar',
  mixins: [
    presenter(defaultCrud),
    header(),
    crud()
  ],
  data() {
    return {
      avatarSelector: true,
      Avatar: Avatar,
      permission: {
        add: ['Avatar:add', 'root'],
        edit: ['Avatar:update', 'root'],
        del: ['Avatar:delete', 'root']
      }
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
      const operate = val === 1 ? String(i18n.t('avatarPage.enable')) : String(i18n.t('avatarPage.disable'))
      this.$confirm(String(i18n.t('avatarPage.enabledTips.tip1')) + operate + String(i18n.t('avatarPage.enabledTips.tip2')) + data.username + String(i18n.t('avatarPage.enabledTips.tip3')), String(i18n.t('confirmTips')), {
        confirmButtonText: String(i18n.t('ok')),
        cancelButtonText: String(i18n.t('cancel')),
        type: 'warning'
      }).then(() => {
        editEnabled(data.id, data.enabled).then(() => {
          this.crud.notify(operate + String(i18n.t('avatarPage.enabledTips.tip4')), CRUD.NOTIFICATION_TYPE.SUCCESS)
        }).catch(() => {
          if (data.enabled === 1) {
            data.enabled = 0
          } else {
            data.enabled = 1
          }
        })
      }).catch(() => {
        if (data.enabled === 1) {
          data.enabled = 0
        } else {
          data.enabled = 1
        }
      })
    },
    reset() {
      this.avatarSelector = false
      this.$nextTick(() => {
        this.avatarSelector = true
      })
    }
  }
}
</script>
