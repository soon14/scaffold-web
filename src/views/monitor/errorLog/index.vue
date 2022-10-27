<template>
  <div class="app-container">
    <scaffold-back-top-and-bottom />
    <div class="head-container">
      <search-date-picker-operation />
      <button-operation>
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
      </button-operation>
    </div>
    <scaffold-exception-info ref="exception" :error-logs="errorLogs" />
    <scaffold-table
      ref="scaffoldTable"
      :table-data="crud.data"
      :crud="crud"
      :default-sort="{prop:'createTime',order:'descending'}"
    >
      <template #tableColumns>
        <el-table-column type="expand">
          <template v-slot="props">
            <el-form label-position="left" inline class="demo-table-expand" label-suffix=":">
              <el-form-item v-for="item in tableHeader.errorLogs.expand" :key="item" :label="item.label">
                <span v-if="item.prop === 'requestParams' || item.prop === 'responseResult'">
                  <span v-if="props.row[item.prop] !== '{}' && props.row[item.prop] !== null">
                    <scaffold-json :json-data="props.row[item.prop]" sort show-array-index expanded />
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
        <template v-for="item in tableHeader.errorLogs.logs">
          <el-table-column
            v-if="columns.visible(item.prop)"
            :key="item"
            :prop="item.prop"
            :label="item.label"
            :sortable="item.sortable"
            :width="item.width"
            :show-overflow-tooltip="item.showOverflowTooltip"
            align="center"
          >
            <template v-slot="scope">
              <span v-if="item.prop === 'logType'" :class="{'logType_error':(scope.row[item.prop] === 'ERROR')}">
                {{ scope.row[item.prop] }}
              </span>
              <span v-else-if="scope.row[item.prop] === 'root'" style="color: red;font-weight: bold">
                {{ scope.row[item.prop] }}
              </span>
              <span
                v-else-if="item.prop === 'businessType'"
                :class="scope.row[item.prop]"
              >
                {{ scope.row[item.prop] }}
              </span>
              <span v-else-if="scope.row[item.prop] === '' || scope.row[item.prop] === null" style="color: red;font-weight: bold">
                {{ $t('errorLogsPage.noUser') }}
              </span>

              <span v-else>{{ scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
        </template>
        <el-table-column :label="String($t('errorLogsPage.exceptionInfo'))" width="100" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="getExceptionInfo(scope.row.id)">
              {{ $t('errorLogsPage.lookInfo') }}
            </el-button>
          </template>
        </el-table-column>
      </template>
    </scaffold-table>
    <pagination-operation />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import i18n from '@/i18n'
import scaffoldTable from '@/components/ScaffoldTable'
import scaffoldJson from '@/components/ScaffoldJson'
import scaffoldBackTopAndBottom from '@/components/ScaffoldBackTopAndBottom'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import CRUD, { presenter } from '@/utils/crud'
import buttonOperation from '@/components/Crud/Button.operation'
import scaffoldExceptionInfo from '@/components/ScaffoldExceptionInfo'
import { delAllErrorLogs, getErrorDetails } from '@/api/tools/logs'
import paginationOperation from '@/components/Crud/Pagination.operation'

const defaultCrud = CRUD({ title: String(i18n.t('errorLogsPage.title')), url: '/errorLogs' })
export default {
  name: 'ErrorLog',
  components: {
    paginationOperation,
    searchDatePickerOperation,
    buttonOperation,
    scaffoldBackTopAndBottom,
    scaffoldTable,
    scaffoldJson,
    scaffoldExceptionInfo
  },
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
