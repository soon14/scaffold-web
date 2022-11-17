<template>
  <div class="app-container">
    <sw-back-top-and-bottom />
    <div class="head-container">
      <sw-search-date-picker-operation>
        <template #right>
          <sw-select
            v-model="query.enabled"
            :options="enabledTypeOptions"
            :placeholder="String($t('menuPage.state'))"
            width="90"
            @change="crud.toQuery"
          />
        </template>
      </sw-search-date-picker-operation>
      <sw-button-operation :permission="permission" />
    </div>
    <sw-dialog
      :visible="crud.status.cu > 0"
      :close-on-click-modal="false"
      :before-close="crud.cancelCU"
      width="1050px"
      top="70px"
    >
      <template #title>
        {{ crud.status.title }}
      </template>
      <template #content>
        <el-form
          ref="form"
          inline
          :model="form"
          label-width="140px"
          label-suffix=":"
          :rules="rulesForType"
        >
          <el-form-item :label="String($t('menuPage.form.type'))" prop="type">
            <el-radio-group v-model="form.type" size="small" @change="typeChange">
              <el-radio-button label="顶级菜单">{{ $t('menuPage.form.type_1') }}</el-radio-button>
              <el-radio-button label="子菜单">{{ $t('menuPage.form.type_2') }}</el-radio-button>
              <el-radio-button label="权限菜单">{{ $t('menuPage.form.type_3') }}</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-show="form.type.toString() !== '权限菜单'" :label="String($t('menuPage.form.iconCls'))" prop="iconCls">
            <el-popover
              placement="bottom-start"
              width="470"
              trigger="click"
              @show="$refs['iconSelect'].reset()"
            >
              <sw-icon-select ref="iconSelect" @selected="selected" />
              <el-input
                slot="reference"
                v-model="form.iconCls"
                :placeholder="String($t('menuPage.form.iconSelect'))"
                readonly
                clearable
                style="width: 178px"
              >
                <sw-svg
                  v-if="form.iconCls"
                  slot="prefix"
                  :icon-class="form.iconCls"
                  class="el-input__icon"
                  style="font-size: 20px;vertical-align: middle"
                />
                <i v-else slot="prefix" class="el-icon-search el-input__icon" />
              </el-input>
            </el-popover>
          </el-form-item>
          <el-form-item :label="String($t('menuPage.form.parentId'))" prop="parentId">
            <sw-tree-select
              :parent-id="form.parentId"
              :tree-data="menus"
              width="450"
              :placeholder="String($t('menuPage.form.treeSelect'))"
              @selected="treeSelected"
            />
          </el-form-item>
          <el-form-item :label="form.type === '权限菜单' ? String($t('menuPage.form.name1')) : String($t('menuPage.form.name2'))" prop="name">
            <el-input v-model="form.name" :placeholder="form.type === '权限菜单' ? String($t('menuPage.form.name1')) : String($t('menuPage.form.name2'))" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item label="zh-CN" prop="nameZhCn">
            <el-input v-model="form.nameZhCn" placeholder="zh-CN" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item label="zh-HK" prop="nameZhHk">
            <el-input v-model="form.nameZhHk" placeholder="zh-HK" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item label="zh-TW" prop="nameZhTw">
            <el-input v-model="form.nameZhTw" placeholder="zh-TW" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item label="en-US" prop="nameEnUs">
            <el-input v-model="form.nameEnUs" placeholder="en-US" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item v-show="form.type.toString() !== '权限菜单'" :label="String($t('menuPage.form.path'))" prop="path">
            <el-input v-model="form.path" :placeholder="String($t('menuPage.form.path'))" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item v-show="form.type.toString() !== '权限菜单'" :label="String($t('menuPage.form.url'))" prop="url">
            <el-input v-model="form.url" :placeholder="String($t('menuPage.form.url'))" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item v-show="form.type.toString() !== '顶级菜单'" :label="String($t('menuPage.form.permission'))" prop="permission">
            <el-input v-model="form.permission" :placeholder="String($t('menuPage.form.permission'))" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item :label="String($t('menuPage.form.keepAlive'))" prop="keepAlive">
            <el-radio-group v-model="form.keepAlive" size="mini">
              <el-radio-button label="true">{{ $t('menuPage.form.yes') }}</el-radio-button>
              <el-radio-button label="false">{{ $t('menuPage.form.no') }}</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="String($t('menuPage.form.sort'))" prop="sort">
            <el-input-number
              v-model.number="form.sort"
              :min="0"
              :max="999"
              controls-position="right"
              style="width: 178px"
            />
          </el-form-item>
          <el-form-item :label="String($t('menuPage.form.hidden'))" prop="hidden">
            <el-radio-group v-model="form.hidden" size="mini">
              <el-radio-button label="false">{{ $t('menuPage.form.yes') }}</el-radio-button>
              <el-radio-button label="true">{{ $t('menuPage.form.no') }}</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="String($t('menuPage.form.enabled'))" prop="enabled">
            <el-radio-group v-model="form.enabled" size="mini">
              <el-radio-button label="true">{{ $t('menuPage.form.yes') }}</el-radio-button>
              <el-radio-button label="false">{{ $t('menuPage.form.no') }}</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-show="form.type.toString() === '子菜单'" :label="String($t('menuPage.form.component'))" prop="component">
            <el-input v-model="form.component" :placeholder="String($t('menuPage.form.component'))" style="width: 100%" clearable />
          </el-form-item>
          <el-form-item v-show="form.type.toString() === '子菜单'" :label="String($t('menuPage.form.componentName'))" prop="componentName">
            <el-input v-model="form.componentName" :placeholder="String($t('menuPage.form.componentName'))" style="width: 178px" clearable />
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button round @click="crud.cancelCU">{{ $t('cancel') }}</el-button>
        <el-button :loading="crud.cu === 2" type="primary" round @click="crud.submitCU">{{ $t('ok') }}</el-button>
      </template>
    </sw-dialog>
    <sw-table
      ref="scaffoldTable"
      :table-header="tableHeader.menus"
      :table-data="crud.data"
      :crud="crud"
      :is-stripe="false"
      row-key="id"
      :default-sort="{prop:'createTime',order:'descending'}"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      :last-col-permission="['root','Menu:delete','Menu:update']"
      :last-col-label="String($t('menuPage.operate'))"
      :is-pagination="false"
      @select="crud.selectChange"
      @select-all="crud.selectAllChange"
    >
      <template slot="iconCls" slot-scope="scope">
        <sw-svg :icon-class="scope.row.iconCls" class-name="icon-class" />
      </template>
      <template slot="hidden" slot-scope="scope">
        {{ scope.row.hidden ? String($t('menuPage.form.no')) : String($t('menuPage.form.yes')) }}
      </template>
      <template slot="enabled" slot-scope="scope">
        <el-switch
          v-model="scope.row.enabled"
          active-color="#409EFF"
          inactive-color="#F56C6C"
          @change="changeEnabled(scope.row, scope.row.enabled)"
        />
      </template>
      <template slot="type" slot-scope="scope">
        <el-tag v-if="scope.row.type === '顶级菜单'" type="danger" effect="plain">{{ scope.row.type }}</el-tag>
        <el-tag v-else-if="scope.row.type === '子菜单'" effect="plain">{{ scope.row.type }}</el-tag>
        <el-tag v-else effect="plain" type="success">{{ scope.row.type }}</el-tag>
      </template>
      <template slot="sort" slot-scope="scope">
        <span style="font-weight: bold">
          {{ scope.row.sort }}
        </span>
      </template>
      <template slot="data-operate" slot-scope="scope">
        <sw-update-delete-operation
          :permission="permission"
          :data="scope.row"
        />
      </template>
    </sw-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import { add, del, edit, getMenusTree } from '@/api/system/menu'
import i18n from '@/i18n'

const defaultCrud = CRUD({
  title: String(i18n.t('menuPage.title')),
  url: '/menus',
  crudMethod: { add, edit, del }
})
const defaultForm = {
  id: null,
  component: null,
  componentName: null,
  path: null,
  name: null,
  nameZhCn: null,
  nameZhHk: null,
  nameZhTw: null,
  nameEnUs: null,
  iconCls: null,
  url: null,
  permission: null,
  keepAlive: false,
  hidden: false,
  parentId: 0,
  enabled: false,
  type: '顶级菜单',
  sort: 999
}

export default {
  name: 'Menu',
  mixins: [
    presenter(defaultCrud),
    header(),
    crud(),
    form(defaultForm)
  ],
  data() {
    return {
      menus: [],
      permission: {
        add: ['Menu:add', 'root'],
        edit: ['Menu:update', 'root'],
        del: ['Menu:delete', 'root']
      },
      enabledTypeOptions: [
        { value: 'true', label: String(i18n.t('menuPage.enable')) },
        { value: 'false', label: String(i18n.t('menuPage.disable')) }
      ],
      rules_0: {
        name: [
          { required: true, message: String(i18n.t('menuPage.rules.name')), trigger: 'blur' }
        ],
        path: [
          { required: true, message: String(i18n.t('menuPage.rules.path')), trigger: 'blur' }
        ],
        url: [
          { required: true, message: String(i18n.t('menuPage.rules.url')), trigger: 'blur' }
        ]
      },
      rules_1: {
        name: [
          { required: true, message: String(i18n.t('menuPage.rules.name')), trigger: 'blur' }
        ],
        componentName: [
          { required: true, message: String(i18n.t('menuPage.rules.componentName')), trigger: 'blur' }
        ],
        component: [
          { required: true, message: String(i18n.t('menuPage.rules.component')), trigger: 'blur' }
        ],
        permission: [
          { required: true, message: String(i18n.t('menuPage.rules.permission')), trigger: 'blur' }
        ],
        path: [
          { required: true, message: String(i18n.t('menuPage.rules.path')), trigger: 'blur' }
        ],
        url: [
          { required: true, message: String(i18n.t('menuPage.rules.url')), trigger: 'blur' }
        ]
      },
      rules_2: {
        name: [
          { required: true, message: String(i18n.t('menuPage.rules.name1')), trigger: 'blur' }
        ],
        permission: [
          { required: true, message: String(i18n.t('menuPage.rules.permission')), trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'tableHeader'
    ]),
    rulesForType() {
      if (this.form.type === '顶级菜单') {
        return this.rules_0
      } else if (this.form.type === '子菜单') {
        return this.rules_1
      } else {
        return this.rules_2
      }
    }
  },
  methods: {
    // 选中图标
    selected(name) {
      this.form.iconCls = name
    },
    // 新增与编辑前做的操作
    [CRUD.HOOK.afterToCU](crud, form) {
      getMenusTree().then(res => {
        this.menus = []
        const menu = { id: 0, label: String(i18n.t('menuPage.topMenu')), children: [] }
        menu.children = res.data
        this.menus.push(menu)
      })
    },
    treeSelected(node) {
      this.form.parentId = node.id
    },
    typeChange(label) {
      this.$refs.form.clearValidate()
    },
    changeEnabled(data, enabled) {
      const operate = enabled === true ? String(i18n.t('menuPage.enable')) : String(i18n.t('menuPage.disable'))
      this.$confirm(String(i18n.t('menuPage.changeEnabled.tip1')) + operate + String(i18n.t('menuPage.changeEnabled.tip2')) + data.name + String(i18n.t('menuPage.changeEnabled.tip3')), String(i18n.t('confirmTips')), {
        confirmButtonText: String(i18n.t('ok')),
        cancelButtonText: String(i18n.t('cancel')),
        type: 'warning'
      }).then(() => {
        edit(data).then(() => {
          this.crud.notify(operate + String(i18n.t('menuPage.success')), CRUD.NOTIFICATION_TYPE.SUCCESS)
        }).catch(() => {
          data.enabled = !data.enabled
        })
      }).catch(() => {
        data.enabled = !data.enabled
      })
    }
  }
}
</script>

<style scoped>
.icon-class{
  font-size: 18px;
  fill: black;
}
</style>
