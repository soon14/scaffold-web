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
          {{ $t('playLogsPage.empty') }}
        </el-button>
      </button-operation>
    </div>
    <scaffold-table
      ref="scaffoldTable"
      :table-header="tableHeader.playLogs.logs"
      :table-data="crud.data"
      :crud="crud"
      open-expand
      :is-last-col="false"
    >
      <template #expand-col>
        <el-table-column type="expand">
          <template v-slot="props">
            <el-form label-position="left" inline class="demo-table-expand" label-suffix=":">
              <el-form-item v-for="item in tableHeader.playLogs.expand" :key="item" :label="item.label">
                <span v-if="item.prop === 'requestParams' || item.prop === 'responseResult'">
                  <span v-if="props.row[item.prop] !== '{}' && props.row[item.prop] !== null">
                    <scaffold-json
                      :json-data="props.row[item.prop]"
                      sort
                      show-array-index
                      expanded
                      preview-mode
                    />
                  </span>
                  <span v-else style="color: red">{{ $t('playLogsPage.none') }}</span>
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
      <template slot="username" slot-scope="scope">
        <span v-if="scope.row.username === 'root'" style="color: red;font-weight: bold">
          {{ scope.row.username }}
        </span>
        <span v-else>{{ scope.row.username }}</span>
      </template>
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
      <template slot="businessType" slot-scope="scope">
        <span :class="scope.row.businessType">
          {{ scope.row.businessType }}
        </span>
      </template>
    </scaffold-table>
  </div>
</template>

<script>
import i18n from '@/i18n'
import scaffoldBackTopAndBottom from '@/components/ScaffoldBackTopAndBottom'
import scaffoldJson from '@/components/ScaffoldJson'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import buttonOperation from '@/components/Crud/Button.operation'
import CRUD, { presenter } from '@/utils/crud'
import { mapGetters } from 'vuex'
import { delAllLogs } from '@/api/monitor/logs'
import scaffoldTable from '@/components/ScaffoldTable'

// crud交由presenter持有
const defaultCrud = CRUD({ title: String(i18n.t('playLogsPage.title')), url: '/logs' })
export default {
  name: 'PlayLog',
  components: {
    scaffoldTable,
    searchDatePickerOperation,
    buttonOperation,
    scaffoldJson,
    scaffoldBackTopAndBottom
  },
  mixins: [presenter(defaultCrud)],
  computed: {
    ...mapGetters([
      'tableHeader'
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
    confirmDelAll() {
      this.$confirm(String(this.$i18n.t('playLogsPage.delTitle')), String(this.$i18n.t('confirmTips')), {
        confirmButtonText: String(this.$i18n.t('ok')),
        cancelButtonText: String(this.$i18n.t('cancel')),
        type: 'warning'
      }).then(() => {
        this.crud.delAllLoading = true
        delAllLogs().then(res => {
          this.crud.delAllLoading = false
          this.crud.dleChangePage(1)
          this.crud.delSuccessNotify()
          this.crud.toQuery()
        }).catch(err => {
          this.crud.delAllLoading = false
          console.log(err.response.data.message)
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
