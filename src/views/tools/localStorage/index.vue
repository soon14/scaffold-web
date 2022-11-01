<template>
  <div class="app-container">
    <scaffold-back-top-and-bottom />
    <div class="head-container">
      <search-date-picker-operation />
      <button-operation :permission="permission">
        <template #left>
          <el-button
            v-permission="['root','Storage:add']"
            type="primary"
            round
            icon="el-icon-upload"
            @click="crud.toAdd"
          >
            {{ $t('localStoragePage.upload') }}
          </el-button>
        </template>
      </button-operation>
    </div>
    <scaffold-dialog
      :visible="crud.status.cu > 0"
      :before-close="crud.cancelCU"
      :close-on-click-modal="false"
      append-to-body
      width="500px"
      top="120px"
    >
      <template #title>
        {{ crud.status.add === 1 ? $t('localStoragePage.fileUpload') : $t('localStoragePage.fileUpdate') }}
      </template>
      <template #content>
        <el-form
          ref="form"
          :model="form"
          style="width:370px"
          label-width="80px"
        >
          <el-form-item :label="String($t('localStoragePage.fileName'))" prop="fileName">
            <el-input v-model="form.fileName" :placeholder="String($t('localStoragePage.fileNamePlaceholder'))" style="width:340px" clearable />
          </el-form-item>
          <!-- 上传文件 -->
          <el-form-item v-if="crud.status.add === 1" :label="String($t('localStoragePage.upload'))">
            <el-upload
              ref="upload"
              :limit="1"
              :before-upload="beforeUpload"
              :auto-upload="false"
              :headers="headers"
              :on-success="handleSuccess"
              :on-error="handleError"
              :action="fileUploadApi + '?filename=' + form.filename"
            >
              <div
                :style="{
                  'border': '1px dashed ' + theme,
                  'border-radius': '5px',
                  'height': '80px',
                  'line-height': '80px',
                  'width': '340px'
                }"
              >
                <div style="">
                  <i class="el-icon-upload" />&nbsp;{{ $t('localStoragePage.putFile') }}
                </div>
              </div>
              <div slot="tip" class="el-upload__tip">{{ $t('localStoragePage.uploadTip') }}</div>
            </el-upload>
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button round @click="crud.cancelCU">{{ $t('cancel') }}</el-button>
        <el-button v-if="crud.status.add === 1" :loading="loading" type="primary" round @click="upload">{{ $t('ok') }}</el-button>
        <el-button v-else :loading="crud.cu === 2" type="primary" round @click="crud.submitCU">{{ $t('ok') }}</el-button>
      </template>
    </scaffold-dialog>
    <scaffold-table
      ref="scaffoldTable"
      :table-header="tableHeader.localStorage"
      :table-data="crud.data"
      :crud="crud"
      :last-col-permission="['root','Storage:delete','Storage:update','Storage:download']"
      last-col-width="200"
    >
      <template slot="serverUrl" slot-scope="scope">
        <scaffold-avatar-image
          v-if="scope.row.type === 'pic'"
          :src="scope.row.serverUrl"
          :preview-list="[scope.row.serverUrl]"
        />
        <a v-else-if="scope.row.type === 'music'" :href="scope.row.serverUrl" target="_blank">
          <el-avatar>
            <i class="el-icon-headset" />
          </el-avatar>
        </a>
        <a v-else-if="scope.row.type === 'vedio'" :href="scope.row.serverUrl" target="_blank">
          <el-avatar>
            <i class="el-icon-video-camera" />
          </el-avatar>
        </a>
        <a v-else-if="scope.row.type === 'txt'" :href="scope.row.serverUrl" target="_blank">
          <el-avatar>
            <i class="el-icon-document" />
          </el-avatar>
        </a>
        <a v-else :href="scope.row.serverUrl" target="_blank">
          <el-avatar>
            <i class="el-icon-more-outline" />
          </el-avatar>
        </a>
      </template>
      <template slot="type" slot-scope="scope">
        <el-tag v-if="scope.row.type === 'pic'" effect="dark" size="mini">{{ scope.row.type }}</el-tag>
        <el-tag v-else-if="scope.row.type === 'music'" type="success" effect="dark" size="mini">{{ scope.row.type }}</el-tag>
        <el-tag v-else-if="scope.row.type === 'vedio'" type="warning" effect="dark" size="mini">{{ scope.row.type }}</el-tag>
        <el-tag v-else-if="scope.row.type === 'txt'" type="info" effect="dark" size="mini">{{ scope.row.type }}</el-tag>
        <el-tag v-else type="danger" effect="dark" size="mini">{{ scope.row.type }}</el-tag>
      </template>
      <template slot="suffix" slot-scope="scope">
        <span style="font-weight: bold;font-size: 14px">{{ scope.row.suffix }}</span>
      </template>
      <template slot="size" slot-scope="scope">
        <span style="font-weight: bold;font-size: 14px">{{ scope.row.size }}</span>
      </template>
      <template slot="data-operate" slot-scope="scope">
        <update-delete-operation
          :permission="permission"
          :data="scope.row"
        >
          <template #right>
            <el-button
              :loading="scope.row.loading"
              round
              size="mini"
              type="warning"
              icon="el-icon-download"
              @click="downloadOne(scope.row)"
            />
          </template>
        </update-delete-operation>
      </template>
    </scaffold-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import scaffoldBackTopAndBottom from '@/components/ScaffoldBackTopAndBottom'
import scaffoldDialog from '@/components/ScaffoldDialog'
import scaffoldTable from '@/components/ScaffoldTable'
import scaffoldAvatarImage from '@/components/ScaffoldAvatarImage'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import buttonOperation from '@/components/Crud/Button.operation'
import updateDeleteOperation from '@/components/Crud/UpdateDelete.operation'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import { del, downloadOne, edit } from '@/api/tools/localStorage'
import { getToken } from '@/utils/auth'
import { downloadFile } from '@/utils'
import i18n from '@/i18n'

const defaultCrud = CRUD({
  title: String(i18n.t('localStoragePage.title')),
  url: '/localStorage',
  crudMethod: { del, edit }
})
const defaultForm = { id: null, fileName: '' }
export default {
  name: 'LocalStorage',
  components: {
    scaffoldBackTopAndBottom,
    scaffoldDialog,
    scaffoldTable,
    scaffoldAvatarImage,
    searchDatePickerOperation,
    buttonOperation,
    updateDeleteOperation
  },
  mixins: [
    presenter(defaultCrud),
    header(),
    form(defaultForm),
    crud()
  ],
  data() {
    return {
      permission: {
        add: ['Storage:add', 'root'],
        edit: ['Storage:update', 'root'],
        del: ['Storage:delete', 'root']
      },
      headers: { 'Authorization': getToken() },
      loading: false
    }
  },
  computed: {
    ...mapGetters([
      'fileUploadApi',
      'theme',
      'tableHeader'
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
    // 上传文件
    upload() {
      this.$refs.upload.submit()
    },
    beforeUpload(file) {
      let isLt2M = true
      isLt2M = file.size / 1024 / 1024 < 20
      if (!isLt2M) {
        this.loading = false
        this.$message.error(String(i18n.t('localStoragePage.uploadErrorTip')))
      }
      this.form.filename = file.name
      return isLt2M
    },
    handleSuccess(response, file, fileList) {
      this.crud.notify(String(i18n.t('localStoragePage.uploadSuccess')), CRUD.NOTIFICATION_TYPE.SUCCESS)
      this.$refs.upload.clearFiles()
      this.crud.status.add = CRUD.STATUS.NORMAL
      this.crud.resetForm()
      this.crud.toQuery()
    },
    handleError(e, file, fileList) {
      this.$notify({
        title: String(i18n.t('localStoragePage.uploadFail')),
        message: String(i18n.t('localStoragePage.uploadFailTip')),
        duration: 2500
      })
      this.loading = false
    },
    downloadOne(row) {
      row.loading = true
      downloadOne(row.id).then(res => {
        downloadFile(res, row.fileName, row.suffix)
        row.loading = false
      }).catch(() => {
        row.loading = false
      })
    },
    [CRUD.HOOK.afterRefresh](crud) {
      this.crud.data.map(item => {
        this.$set(item, 'loading', false)
        return item
      })
    }
  }
}
</script>
