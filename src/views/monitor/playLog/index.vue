<template>
  <div class="app-container">
    <back-top-and-bottom :bottom="90" :right="30"/>
    <div class="head-container">
      <search-date-picker-operation/>
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
          {{ $t('playLogsPage.empty') }}
        </el-button>
      </button-operation>
    </div>
    <scaffold-table
      ref="scaffoldTable"
      :table-data="crud.data"
      :crud="crud"
      :default-sort="{prop:'createTime',order:'descending'}"
    >
      <template slot="tableColumns">
        <el-table-column type="expand">
          <template v-slot="props">
            <el-form label-position="left" inline class="demo-table-expand" label-suffix=":">
              <el-form-item v-for="item in tableHeader.playLogs.expand" :key="item" :label="item.label">
                <span v-if="item.prop === 'requestParams' || item.prop === 'responseResult'">
                  <span v-if="props.row[item.prop] !== '{}' && props.row[item.prop] !== null">
                    <scaffold-json
                      :json-data="props.row[item.prop]"
                      boxed
                      sort
                      show-array-index
                      expanded
                    />
                  </span>
                  <span v-else style="color: red">无</span>
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
        <template v-for="item in tableHeader.playLogs.logs">
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
              <span v-if="item.prop === 'username'">
                <span v-if="scope.row[item.prop] === 'root'" style="color: red;font-weight: bold">
                  {{ scope.row[item.prop] }}
                </span>
                <span v-else>{{ scope.row[item.prop] }}</span>
              </span>
              <span v-else-if="item.prop === 'time'">
                <el-tag v-if="scope.row[item.prop] <= 300" size="mini" type="success">
                  {{ scope.row[item.prop] }}ms
                </el-tag>
                <el-tag v-else-if="scope.row[item.prop] <= 1000" size="mini" type="warning">
                  {{ scope.row[item.prop] }}ms
                </el-tag>
                <el-tag v-else size="mini" type="danger">
                  {{ scope.row[item.prop] }}ms
                </el-tag>
              </span>
              <span v-else>{{ scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
        </template>
      </template>
    </scaffold-table>
    <pagination-operation/>
  </div>
</template>

<script>
import backTopAndBottom from '@/components/BackTopAndBottom'
import scaffoldJson from '@/components/ScaffoldJson'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import buttonOperation from '@/components/Crud/Button.operation'
import CRUD, {presenter} from '@/utils/crud'
import {mapGetters} from 'vuex'
import {delAllLogs} from '@/api/system/logs'
import ScaffoldTable from '@/components/ScaffoldTable'
import paginationOperation from '@/components/Crud/Pagination.operation'

// crud交由presenter持有
const defaultCrud = CRUD({title: '操作日志', url: '/api/logs'})
export default {
  name: 'PlayLog',
  computed: {
    ...mapGetters([
      'tableHeader'
    ])
  },
  mixins: [presenter(defaultCrud)],
  components: {
    paginationOperation,
    ScaffoldTable,
    searchDatePickerOperation,
    buttonOperation,
    scaffoldJson,
    backTopAndBottom
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
</style>
