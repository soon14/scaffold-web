<template>
  <div>
    <sw-table
      ref="scaffoldTable"
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
    </sw-table>
    <sw-exception-info ref="exception" :error-logs="errorLogs" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CRUD, { presenter } from '@/utils/crud'
import { getErrorDetails } from '@/api/monitor/logs'

const defaultCrud = CRUD({
  url: '/center/errorLogs',
  title: '错误日志'
})
export default {
  name: 'ErrorLogs',
  mixins: [presenter(defaultCrud)],
  data() {
    return {
      errorLogs: ''
    }
  },
  computed: {
    ...mapGetters([
      'tableHeader'
    ])
  },
  methods: {
    getExceptionInfo(id) {
      this.$refs.exception.dialog = true
      getErrorDetails(id).then(res => {
        this.errorLogs = res.data.exception
      })
    }
  }
}
</script>
