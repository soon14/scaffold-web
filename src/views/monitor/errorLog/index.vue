<template>
  <div class="app-container">
    <sw-back-top-and-bottom />
    <div class="head-container">
      <sw-search-date-picker-operation />
      <sw-button-operation>
        <el-button
          slot="left"
          type="danger"
          icon="el-icon-delete"
          :loading="crud.delAllLoading"
          round
          @click="confirmDelAll"
        >
          {{ $t('errorLogsPage.empty') }}
        </el-button>
      </sw-button-operation>
    </div>
    <sw-exception-info ref="exception" :error-logs="errorLogs" />

    <sw-table
      ref="scaffoldTable"
      :table-header="tableHeader.errorLogs.logs"
      :table-data="crud.data"
      :crud="crud"
      open-expand
      :last-col-label="String($t('errorLogsPage.exceptionInfo'))"
      last-col-width="100"
      :last-col-fixed="false"
    >
      <template #expand-col>
        <el-table-column type="expand" width="55" fixed="left" align="center">
          <template v-slot="props">
            <el-form
              label-position="left"
              inline
              class="demo-table-expand"
              label-suffix=":"
            >
              <el-form-item v-for="item in tableHeader.errorLogs.expand" :key="item" :label="item.label">
                <span v-if="item.prop === 'requestParams' || item.prop === 'responseResult'">
                  <span v-if="props.row[item.prop] !== '{}' && props.row[item.prop] !== null && props.row[item.prop] !== ''">
                    <sw-json :json-data="props.row[item.prop]" sort show-array-index expanded />
                  </span>
                  <span v-else style="color: red;">{{ $t('errorLogsPage.none') }}</span>
                </span>
                <span v-else-if="item.prop === 'status'">
                  <span
                    :class="{
                      'status_success':(props.row[item.prop] === 'SUCCESS'),
                      'status_fail':(props.row[item.prop] !== 'SUCCESS')
                    }"
                  >
                    {{ props.row[item.prop] }}
                  </span>
                </span>
                <span v-else>{{ props.row[item.prop] }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
      </template>
      <template slot="logType" slot-scope="scope">
        <span :class="{'logType_error':(scope.row.logType === 'ERROR')}">{{ scope.row.logType }}</span>
      </template>
      <template slot="username" slot-scope="scope">
        <span v-if="scope.row.username === 'root'" style="color: red;font-weight: bold">
          {{ scope.row.username }}
        </span>
        <span v-else-if="scope.row.username === '' || scope.row.username === null" style="color: red;font-weight: bold">
          {{ $t('errorLogsPage.noUser') }}
        </span>
        <span v-else>{{ scope.row.username }}</span>
      </template>
      <template slot="businessType" slot-scope="scope">
        <span :class="scope.row.businessType">
          {{ scope.row.businessType }}
        </span>
      </template>
      <template slot="data-operate" slot-scope="scope">
        <el-button type="text" @click="getExceptionInfo(scope.row.id)">
          {{ $t('errorLogsPage.lookInfo') }}
        </el-button>
      </template>
    </sw-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import i18n from '@/i18n'
import CRUD, { presenter } from '@/utils/crud'
import { delAllErrorLogs, getErrorDetails } from '@/api/monitor/logs'

const defaultCrud = CRUD({ title: String(i18n.t('errorLogsPage.title')), url: '/errorLogs' })
export default {
  name: 'ErrorLog',
  mixins: [presenter(defaultCrud)],
  data() {
    return {
      errorLogs: ''
    }
  },
  computed: {
    ...mapGetters([
      'tableHeader',
      'theme'
    ])
  },
  created() {
    this.crud.optShow = {
      add: false,
      edit: false,
      del: false,
      download: true
    }
  },
  methods: {
    getExceptionInfo(id) {
      this.$refs.exception.dialog = true
      getErrorDetails(id).then(res => {
        this.errorLogs = res.data.exception
      })
    },
    confirmDelAll() {
      this.$confirm(String(this.$i18n.t('errorLogsPage.delTitle')), String(this.$i18n.t('confirmTips')), {
        confirmButtonText: String(this.$i18n.t('ok')),
        cancelButtonText: String(this.$i18n.t('cancel')),
        type: 'warning'
      }).then(() => {
        this.crud.delAllLoading = true
        delAllErrorLogs().then(() => {
          this.crud.delAllLoading = false
          this.crud.dleChangePage(1)
          this.crud.delSuccessNotify()
          this.crud.toQuery()
        }).catch(err => {
          this.crud.delAllLoading = false
          console.log(err.response.data.msg)
        })
      }).catch(() => {
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-table-expand {
  font-size: 0;
  margin-left: 25px;
}

.demo-table-expand label {
  width: 70px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}

.demo-table-expand .el-form-item__content {
  font-size: 12px;
}

.status_success {
  color: green;
  font-weight: bold;
}

.status_fail {
  color: red;
  font-weight: bold;
}

.logType_error {
  color: red;
  font-weight: bold;
}

.OTHER{
  font-weight: bold;
  color: black;
}

.INSERT{
  font-weight: bold;
  color: #9370BE;
}

.UPDATE{
  font-weight: bold;
  color: #CEB00E
}

.DELETE{
  font-weight: bold;
  color: red;
}
</style>
