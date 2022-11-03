<template>
  <div class="app-container">
    <scaffold-back-top-and-bottom />
    <div class="head-container">
      <search-date-picker-operation
        :input-placeholder="String($t('notice.inputPlaceholder'))"
        input-width="250"
      >
        <template #right>
          <el-select
            v-model="query.isOverdue"
            clearable
            :placeholder="String($t('notice.isOverdue'))"
            style="width: 120px"
            @change="crud.toQuery"
          >
            <el-option
              v-for="(item,index) in isOverdueSelect"
              :key="index"
              :label="item.label"
              :value="item.name"
            />
          </el-select>
          <el-select
            v-model="query.type"
            clearable
            :placeholder="String($t('notice.sendScope'))"
            style="width: 120px"
            @change="crud.toQuery"
          >
            <el-option
              v-for="(item,index) in typeSelect"
              :key="index"
              :label="item.label"
              :value="item.name"
            />
          </el-select>
          <el-select
            v-model="query.userId"
            clearable
            :placeholder="String($t('notice.sender'))"
            style="width: 120px"
            @change="crud.toQuery"
          >
            <el-option
              v-for="(item,index) in userList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </search-date-picker-operation>
      <button-operation :table-col="false" :permission="permission" />
    </div>
    <scaffold-dialog
      :visible="crud.status.cu > 0"
      :before-close="crud.cancelCU"
      :close-on-click-modal="false"
      append-to-body
      top="65px"
    >
      <template #title>
        <div>{{ crud.status.title }}</div>
      </template>
      <template #content>
        <el-form
          ref="form"
          :model="form"
          label-width="125px"
          label-suffix=":"
        >
          <el-form-item :label="String($t('notice.noticeScope'))" prop="type">
            <el-radio-group v-model="form.type" size="small">
              <el-radio-button label="全体业主">{{ $t('notice.all') }}</el-radio-button>
              <el-radio-button label="全体员工">{{ $t('notice.allP') }}</el-radio-button>
              <el-radio-button label="全体人员">{{ $t('notice.allp') }}</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="String($t('notice.isOverdue'))" prop="isOverdue">
            <el-radio-group v-model="form.isOverdue" size="small">
              <el-radio-button label="已过期">{{ $t('notice.overdue') }}</el-radio-button>
              <el-radio-button label="未过期">{{ $t('notice.noOverdue') }}</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="String($t('notice.noticeTitle'))" prop="title">
            <el-input ref="first" v-model="form.title" :placeholder="String($t('notice.noticeTitle'))" clearable style="width: 450px" />
          </el-form-item>
          <el-form-item :label="String($t('notice.noticeContent'))" prop="content">
            <el-input v-model="form.content" type="textarea" :rows="10" :placeholder="String($t('notice.noticeContent'))" style="width: 450px" />
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button round @click="crud.cancelCU">{{ $t('cancel') }}</el-button>
        <el-button :loading="crud.cu === 2" type="primary" round @click="crud.submitCU">{{ $t('ok') }}</el-button>
      </template>
    </scaffold-dialog>
    <el-row
      v-loading="crud.loading"
      :gutter="20"
    >
      <scaffold-card
        v-for="(item,index) in crud.data"
        :key="index"
        open-header
        round
        fix-height
        shadow="hover"
        header-align="left"
      >
        <template slot="card-header">
          {{ item.title }} <br>
          <span style="font-size: 13px">{{ $t('notice.sender') }} : {{ item.username }}</span>
        </template>
        <template slot="card-header-btn">
          <scaffold-popover
            v-permission="['root','Notice:delete']"
            :ok-btn-loading="crud.dataStatus[item.id].delete === 2"
            :content="String($t('notice.delPopoverTip'))"
            reference-icon="el-icon-close"
            width="200"
            style="float: right;"
            btn-circle
            btn-plain
            @confirm="crud.doDelete(item)"
          />
          <el-button
            v-permission="['root','Notice:update']"
            type="primary"
            plain
            icon="el-icon-edit"
            circle
            style="float: right;margin-right: 10px"
            @click="crud.toEdit(item)"
          />
        </template>

        <span>{{ item.content }}</span>

        <template slot="card-footer">
          <time class="time">
            {{ item.createTime }}
          </time>
        </template>
      </scaffold-card>
    </el-row>
    <pagination-operation />
  </div>
</template>

<script>
import scaffoldCard from '@/components/ScaffoldCard'
import scaffoldPopover from '@/components/ScaffoldPopover'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import buttonOperation from '@/components/Crud/Button.operation'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import scaffoldDialog from '@/components/ScaffoldDialog'
import paginationOperation from '@/components/Crud/Pagination.operation'
import scaffoldBackTopAndBottom from '@/components/ScaffoldBackTopAndBottom'
import { edit, add, del, getOverdueList, getNoticeScope, getDistinctUser } from '@/api/xiaoqu/notice'
import i18n from '@/i18n'

const defaultCrud = CRUD({
  url: '/notices',
  title: String(i18n.t('notice.title')),
  sort: ['create_time,desc'],
  crudMethod: { add, edit, del }
})

const defaultForm = {
  type: null,
  title: '',
  content: '',
  isOverdue: null
}
export default {
  name: 'Notice',
  components: {
    scaffoldCard,
    scaffoldBackTopAndBottom,
    searchDatePickerOperation,
    buttonOperation,
    paginationOperation,
    scaffoldDialog,
    scaffoldPopover
  },
  mixins: [
    header(),
    crud(),
    presenter(defaultCrud),
    form(defaultForm)
  ],
  data() {
    return {
      permission: {
        add: ['root', 'Notice:add']
      },
      isOverdueSelect: [],
      typeSelect: [],
      userList: []
    }
  },
  created() {
    this.init()
    this.crud.optShow = {
      add: true,
      edit: false,
      del: false,
      download: true
    }
  },
  methods: {
    init() {
      getOverdueList().then(res => {
        this.isOverdueSelect = res.data
      }).catch(err => {
        console.log(err)
      })

      getNoticeScope().then(res => {
        this.typeSelect = res.data
      }).catch(err => {
        console.log(err)
      })

      getDistinctUser().then(res => {
        this.userList = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.time {
  float: right;
  font-size: 13px;
  color: #999;
}
</style>
