<template>
  <div class="app-container">
    <back-top-and-bottom :bottom="90" :right="30" />
    <div class="head-container">
      <search-date-picker-operation />
      <button-operation>
        <el-button
          slot="left"
          class="filter-item"
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :loading="crud.delAllLoading"
          round
          @click="confirmDelAll"
        >
          {{ $t('errorLogsPage.empty') }}
        </el-button>
      </button-operation>
    </div>
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
                    <scaffold-json :json-data="props.row[item.prop]" boxed sort show-array-index expanded />
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
          >
            <template v-slot="scope">
              <span v-if="item.prop === 'logType'" :class="{'logType_error':(scope.row[item.prop] === 'ERROR')}">
                {{ scope.row[item.prop] }}
              </span>
              <span v-else-if="scope.row[item.prop] === 'root'" style="color: red;font-weight: bold">
                {{ scope.row[item.prop] }}
              </span>
              <span v-else-if="scope.row[item.prop] === '' || scope.row[item.prop] === null" style="color: red;font-weight: bold">
                {{ $t('errorLogsPage.noUser') }}
              </span>
              <span v-else>{{ scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
        </template>
        <el-table-column :label="String($t('errorLogsPage.exceptionInfo'))" width="100" fixed="right">
          <template slot-scope="scope">
            <el-button size="small" type="text" @click="getExceptionInfo(scope.row.id)">
              {{ $t('errorLogsPage.lookInfo') }}
            </el-button>
          </template>
        </el-table-column>
      </template>
    </scaffold-table>
    <exception-info ref="exception" :error-logs="errorLogs" />
    <pagination-operation />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import i18n from '@/i18n'
import scaffoldTable from '@/components/ScaffoldTable'
import scaffoldJson from '@/components/ScaffoldJson'
import backTopAndBottom from '@/components/BackTopAndBottom'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import CRUD, { presenter } from '@/utils/crud'
import buttonOperation from '@/components/Crud/Button.operation'
import exceptionInfo from '@/components/ExceptionInfo'
import { delAllErrorLogs, getErrorDetails } from '@/api/system/logs'
import paginationOperation from '@/components/Crud/Pagination.operation'

const defaultCrud = CRUD({ title: String(i18n.t('errorLogsPage.title')), url: '/errorLogs' })
export default {
  name: 'ErrorLog',
  components: {
    paginationOperation,
    searchDatePickerOperation,
    buttonOperation,
    backTopAndBottom,
    scaffoldTable,
    scaffoldJson,
    exceptionInfo
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
  beforeUpdate() {
    this.$nextTick(() => {
      this.$refs.scaffoldTable.$refs.table.doLayout()
    })
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

<style scoped>
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

.code-class {
  padding: 0;
  margin-top: 0;
  font-size: 15px;
  line-height: 25px;
  font-family: Consolas,serif;
  margin-left: 10px;
}

.pre-class {
  padding: 0;
  margin-top: 0;
  background-color: #282c34;
}
</style>
