<template>
  <div class="app-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="8" :lg="7" :xl="7" style="margin-bottom: 10px">
        <el-card class="box-card">
          <div slot="header" class="clearfix card-header">
            <span>{{ $t('userCenter.leftCard.title') }}</span>
          </div>
          <div>
            <div class="card-avatar-div">
              <el-upload
                :show-file-list="false"
                :on-success="handleSuccess"
                :on-error="handleError"
                :before-upload="beforeAvatarUpload"
                :headers="headers"
                :action="updateAvatarApi"
                class="avatar-uploader"
              >
                <el-avatar
                  :src="avatarShow"
                  class="card-avatar"
                  :alt="String($t('userCenter.leftCard.avatarAlt'))"
                />
              </el-upload>
            </div>
            <div class="ul-div">
              <ul class="user-info">
                <li>
                  <scaffold-svg icon-class="center-username" /> {{ $t('userCenter.leftCard.loginName') }}
                  <div class="user-right">{{ user.username }}</div>
                </li>
                <li>
                  <scaffold-svg icon-class="center-sex" /> {{ $t('userCenter.leftCard.sex') }}
                  <div class="user-right">{{ user.sex }}</div>
                </li>
                <li>
                  <scaffold-svg icon-class="center-phone" /> {{ $t('userCenter.leftCard.phone') }}
                  <div class="user-right">{{ user.phone }}</div>
                </li>
                <li>
                  <scaffold-svg icon-class="center-email" /> {{ $t('userCenter.leftCard.email') }}
                  <div class="user-right">{{ user.email }}</div>
                </li>
                <li>
                  <scaffold-svg icon-class="center-last-pass-change" /> {{ $t('userCenter.leftCard.lastChangePass') }}
                  <div class="user-right">{{ user.lastPassResetTime === null ? $t('userCenter.leftCard.no') : user.lastPassResetTime }}</div>
                </li>
                <li v-if="user.avatar !== null">
                  <scaffold-svg icon-class="center-last-avatar-change" /> {{ $t('userCenter.leftCard.lastChangeAvatar') }}
                  <div class="user-right">{{ user.avatar.updateTime === null ? $t('userCenter.leftCard.no') : user.avatar.updateTime }}</div>
                </li>
                <li>
                  <scaffold-svg icon-class="center-createTime" /> {{ $t('userCenter.leftCard.resTime') }}
                  <div class="user-right">{{ user.createTime }}</div>
                </li>
                <li>
                  <scaffold-svg icon-class="center-security" /> {{ $t('userCenter.leftCard.securitySetting') }}
                  <div class="user-right">
                    <el-link style="font-size: 12px" @click="$refs.pass.dialog = true"><i class="el-icon-edit" />&nbsp;{{ $t('userCenter.leftCard.changePass') }}</el-link>
                    <el-divider direction="vertical" />
                    <el-link style="font-size: 12px" @click="toShowUpdateEmail"><i class="el-icon-edit-outline" />&nbsp;{{ $t('userCenter.leftCard.changeEmail') }}</el-link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="16" :lg="17" :xl="17">
        <el-card class="box-card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="String($t('userCenter.rightCard.playLogs'))" name="playLogs">

              <scaffold-table
                :table-header="tableHeader.center.playLogs"
                :table-data="crud.data"
                :crud="crud"
                :is-first-col="false"
                :is-last-col="false"
              >
                <template slot="time" slot-scope="scope">
                  <el-tag v-if="scope.row.time <= 300" size="mini" type="success">
                    {{ scope.row.time }}ms
                  </el-tag>
                  <el-tag v-else-if="scope.row.time <= 1000" size="mini" type="warning">
                    {{ scope.row.time }}ms
                  </el-tag>
                  <el-tag v-else size="mini" type="danger">
                    {{ scope.row.time }}ms
                  </el-tag>
                </template>
              </scaffold-table>

              <!--              <scaffold-table-->
              <!--                :table-data="crud.data"-->
              <!--                :crud="crud"-->
              <!--                :default-sort="{prop:'createTime',order:'descending'}"-->
              <!--              >-->
              <!--                <template #tableColumns>-->
              <!--                  <template v-for="item in tableHeader.center.playLogs">-->
              <!--                    <el-table-column-->
              <!--                      v-if="columns.visible(item.prop)"-->
              <!--                      :key="item"-->
              <!--                      :prop="item.prop"-->
              <!--                      :label="item.label"-->
              <!--                      :sortable="item.sortable"-->
              <!--                      :width="item.width"-->
              <!--                      :show-overflow-tooltip="item.showOverflowTooltip"-->
              <!--                      align="center"-->
              <!--                    >-->
              <!--                      <template v-slot="scope">-->
              <!--                        <span v-if="item.prop === 'time'">-->
              <!--                          <el-tag v-if="scope.row[item.prop] <= 300" size="mini" type="success">-->
              <!--                            {{ scope.row[item.prop] }}ms-->
              <!--                          </el-tag>-->
              <!--                          <el-tag v-else-if="scope.row[item.prop] <= 1000" size="mini" type="warning">-->
              <!--                            {{ scope.row[item.prop] }}ms-->
              <!--                          </el-tag>-->
              <!--                          <el-tag v-else size="mini" type="danger">-->
              <!--                            {{ scope.row[item.prop] }}ms-->
              <!--                          </el-tag>-->
              <!--                        </span>-->
              <!--                        <span v-else>{{ scope.row[item.prop] }}</span>-->
              <!--                      </template>-->
              <!--                    </el-table-column>-->
              <!--                  </template>-->
              <!--                </template>-->
              <!--              </scaffold-table>-->
              <!--              <pagination-operation />-->
            </el-tab-pane>
            <el-tab-pane :label="String($t('userCenter.rightCard.errorLogs'))" name="errorLogs">

              <scaffold-table
                :table-header="tableHeader.center.errorLogs"
                :table-data="crud.data"
                :crud="crud"
                last-col-width="100"
                :is-first-col="false"
                :last-col-label="String($t('errorLogsPage.exceptionInfo'))"
              >
                <template slot="data-operate" slot-scope="scope">
                  <el-button size="small" type="text" @click="getExceptionInfo(scope.row.id)">
                    {{ $t('errorLogsPage.lookInfo') }}
                  </el-button>
                </template>
              </scaffold-table>

              <!--              <scaffold-table-->
              <!--                :table-data="crud.data"-->
              <!--                :crud="crud"-->
              <!--                :default-sort="{prop:'createTime',order:'descending'}"-->
              <!--              >-->
              <!--                <template #tableColumns>-->
              <!--                  <template v-for="item in tableHeader.center.errorLogs">-->
              <!--                    <el-table-column-->
              <!--                      v-if="columns.visible(item.prop)"-->
              <!--                      :key="item"-->
              <!--                      :prop="item.prop"-->
              <!--                      :label="item.label"-->
              <!--                      :sortable="item.sortable"-->
              <!--                      :width="item.width"-->
              <!--                      :show-overflow-tooltip="item.showOverflowTooltip"-->
              <!--                      align="center"-->
              <!--                    />-->
              <!--                  </template>-->
              <!--                  <el-table-column :label="String($t('errorLogsPage.exceptionInfo'))" width="100" fixed="right">-->
              <!--                    <template slot-scope="scope">-->
              <!--                      <el-button size="small" type="text" @click="getExceptionInfo(scope.row.id)">-->
              <!--                        {{ $t('errorLogsPage.lookInfo') }}-->
              <!--                      </el-button>-->
              <!--                    </template>-->
              <!--                  </el-table-column>-->
              <!--                </template>-->
              <!--              </scaffold-table>-->
              <!--              <pagination-operation />-->
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <scaffold-back-top-and-bottom />
    <update-email ref="email" :email="user.email" />
    <update-pass ref="pass" />
    <scaffold-exception-info ref="exception" :error-logs="errorLogs" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Avatar from '@/assets/images/avatar.png'
import AvatarNoEnabled from '@/assets/images/avatarNoEnabled.png'
import { getToken } from '@/utils/auth'
import store from '@/store'
import updateEmail from '@/views/userCenter/update/updateEmail'
import updatePass from '@/views/userCenter/update/updatePass'
import scaffoldExceptionInfo from '@/components/ScaffoldExceptionInfo'
import scaffoldTable from '@/components/ScaffoldTable'
import paginationOperation from '@/components/Crud/Pagination.operation'
import scaffoldBackTopAndBottom from '@/components/ScaffoldBackTopAndBottom'
import CRUD, { presenter } from '@/utils/crud'
import { getErrorDetails } from '@/api/tools/logs'
import i18n from '@/i18n'

const defaultCrud = CRUD({ url: '/center/logs' })
export default {
  name: 'Center',
  components: {
    updatePass,
    updateEmail,
    scaffoldTable,
    paginationOperation,
    scaffoldExceptionInfo,
    scaffoldBackTopAndBottom
  },
  mixins: [presenter(defaultCrud)],
  data() {
    return {
      Avatar: Avatar,
      AvatarNoEnabled: AvatarNoEnabled,
      headers: {
        'Authorization': getToken()
      },
      activeName: 'playLogs',
      errorLogs: ''
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'updateAvatarApi',
      'options',
      'tableHeader'
    ]),
    avatarShow() {
      if (this.user.avatar !== null) {
        if (this.user.avatar.enabled === '已审核') {
          return this.user.avatar.path
        } else {
          return this.AvatarNoEnabled
        }
      } else {
        return this.Avatar
      }
    }
  },
  methods: {
    getExceptionInfo(id) {
      this.$refs.exception.dialog = true
      getErrorDetails(id).then(res => {
        this.errorLogs = res.data.exception
      })
    },
    handleClick(tab, event) {
      if (tab.name === 'errorLogs') {
        this.crud.url = '/center/errorLogs'
        this.crud.refresh()
      } else {
        this.crud.url = '/center/logs'
        this.crud.refresh()
      }
    },
    handleSuccess(response, file, fileList) {
      this.$message({
        message: String(i18n.t('userCenter.avatar.changeSuccess')),
        type: 'success'
      })
      store.dispatch('user/GetInfo').then(() => {})
    },
    handleError(err, file, fileList) {
      this.$notify({
        title: String(i18n.t('userCenter.avatar.changeFail')),
        message: err,
        type: 'error'
      })
    },
    beforeAvatarUpload(file) {
      const isOK = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt50M = file.size / 1024 / 1024 <= 50
      if (!isOK) {
        this.$message.error(String(i18n.t('userCenter.avatar.typeTip')))
      }
      if (!isLt50M) {
        this.$message.error(String(i18n.t('userCenter.avatar.sizeTip')))
      }
      return isOK && isLt50M
    },
    getSelectList() {
      store.dispatch('userUpdate/GetOptions').then(() => {})
    },
    toShowUpdateEmail() {
      if (store.getters.options.length === 0) {
        this.getSelectList()
      }
      this.$refs.email.dialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card{
  border-radius: 10px;

  .card-header{
    font-size: 15px;
    font-weight: bold;
  }

  .card-avatar-div{
    text-align: center;

    .card-avatar{
      width: 100px;
      height: 100px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
  }

  .ul-div{

    .user-info {
      padding-left: 0;
      list-style: none;

      li{
        border-bottom: 1px solid #F0F3F4;
        padding: 11px 0;
        font-size: 13px;
      }

      .user-right {
        float: right;
        font-size: 14px;

        a{
          color: #317EF3;
        }
      }

    }
  }
}
</style>
