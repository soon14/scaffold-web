<template>
  <div class="app-container">
    <back-top-and-bottom />
    <div class="head-container">
      <search-date-picker-operation>
        <template #right>
          <el-select
            v-model="query.enabled"
            clearable
            placeholder="状态"
            style="width: 90px"
            @change="crud.toQuery"
          >
            <el-option
              v-for="item in enabledTypeOptions"
              :key="item.key"
              :label="item.displayName"
              :value="item.key"
            />
          </el-select>
        </template>
      </search-date-picker-operation>
      <button-operation :permission="permission" />
    </div>
    <scaffold-dialog
      :visible="crud.status.cu > 0"
      :close-on-click-modal="false"
      :before-close="crud.cancelCU"
      width="1050px"
      top="70px"
    >
      <template #title>
        <div style="padding:15px 20px;">{{ crud.status.title }}</div>
      </template>
      <template #content>
        <el-form
          ref="form"
          inline
          :model="form"
          label-width="125px"
          :rules="rulesForType"
        >
          <el-form-item label="菜单类型" prop="type">
            <el-radio-group v-model="form.type" size="small" @change="typeChange">
              <el-radio-button label="顶级菜单">顶级菜单</el-radio-button>
              <el-radio-button label="子菜单">子菜单</el-radio-button>
              <el-radio-button label="权限菜单">权限菜单</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-show="form.type.toString() !== '权限菜单'" label="菜单图标" prop="iconCls">
            <el-popover
              placement="bottom-start"
              width="470"
              trigger="click"
              @show="$refs['iconSelect'].reset()"
            >
              <scaffold-icon-select ref="iconSelect" @selected="selected" />
              <el-input
                slot="reference"
                v-model="form.iconCls"
                placeholder="点击选择图标"
                readonly
                clearable
                style="width: 178px"
              >
                <scaffold-svg
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
          <el-form-item label="上级菜单" prop="parentId">
            <scaffold-tree-select
              :parent-id="form.parentId"
              :tree-data="menus"
              width="450"
              @selected="treeSelected"
            />
          </el-form-item>
          <el-form-item :label="form.type === '权限菜单' ? '菜单操作权限' : '菜单名称'" prop="name">
            <el-input v-model="form.name" :placeholder="form.type === '权限菜单' ? '菜单操作权限' : '菜单名称'" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item label="国际化zh-CN" prop="nameZhCn">
            <el-input v-model="form.nameZhCn" placeholder="国际化zh-CN" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item label="国际化zh-HK" prop="nameZhHk">
            <el-input v-model="form.nameZhHk" placeholder="国际化zh-HK" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item label="国际化zh-TW" prop="nameZhTw">
            <el-input v-model="form.nameZhTw" placeholder="国际化zh-TW" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item label="国际化en-US" prop="nameEnUs">
            <el-input v-model="form.nameEnUs" placeholder="国际化en-US" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item v-show="form.type.toString() !== '权限菜单'" label="前端使用的Path" prop="path">
            <el-input v-model="form.path" placeholder="前端使用的Path" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item v-show="form.type.toString() !== '权限菜单'" label="后端使用的Url" prop="url">
            <el-input v-model="form.url" placeholder="后端使用的Url" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item v-show="form.type.toString() !== '顶级菜单'" label="权限标识" prop="permission">
            <el-input v-model="form.permission" placeholder="权限标识" style="width: 178px" clearable />
          </el-form-item>
          <el-form-item label="保持激活" prop="keepAlive">
            <el-radio-group v-model="form.keepAlive" size="mini">
              <el-radio-button label="true">是</el-radio-button>
              <el-radio-button label="false">否</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="排序" prop="sort">
            <el-input-number
              v-model.number="form.sort"
              :min="0"
              :max="999"
              controls-position="right"
              style="width: 178px"
            />
          </el-form-item>
          <el-form-item label="菜单可见" prop="hidden">
            <el-radio-group v-model="form.hidden" size="mini">
              <el-radio-button label="false">是</el-radio-button>
              <el-radio-button label="true">否</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="菜单是否可用" prop="enabled">
            <el-radio-group v-model="form.enabled" size="mini">
              <el-radio-button label="true">是</el-radio-button>
              <el-radio-button label="false">否</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-show="form.type.toString() === '子菜单'" label="组件路径" prop="component">
            <el-input v-model="form.component" placeholder="组件路径" style="width: 100%" clearable />
          </el-form-item>
          <el-form-item v-show="form.type.toString() === '子菜单'" label="组件名称" prop="componentName">
            <el-input v-model="form.componentName" placeholder="组件名称" style="width: 178px" clearable />
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button round @click="crud.cancelCU">{{ $t('cancel') }}</el-button>
        <el-button :loading="crud.cu === 2" type="primary" round @click="crud.submitCU">{{ $t('ok') }}</el-button>
      </template>
    </scaffold-dialog>
    <scaffold-table
      ref="scaffoldTable"
      :table-data="crud.data"
      :crud="crud"
      :is-stripe="false"
      row-key="id"
      :default-sort="{prop:'createTime',order:'descending'}"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      @select="crud.selectChange"
      @select-all="crud.selectAllChange"
    >
      <template #tableColumns>
        <el-table-column type="selection" width="55" fixed="left" />
        <template v-for="item in tableHeader.menus">
          <el-table-column
            v-if="columns.visible(item.prop)"
            :key="item"
            :prop="item.prop"
            :label="item.label"
            :sortable="item.sortable"
            :width="item.width"
            :fixed="item.fixed"
            :show-overflow-tooltip="item.showOverflowTooltip"
          >
            <template v-slot="scope">
              <span v-if="item.prop === 'iconCls'">
                <scaffold-svg :icon-class="scope.row[item.prop]" class-name="icon-class" />
              </span>
              <span v-else-if="item.prop === 'hidden'">
                {{ scope.row[item.prop] ? '否' : '是' }}
              </span>
              <span v-else-if="item.prop === 'enabled'">
                <el-switch
                  v-model="scope.row[item.prop]"
                  active-color="#409EFF"
                  inactive-color="#F56C6C"
                  @change="changeEnabled(scope.row, scope.row.enabled)"
                />
              </span>
              <span v-else-if="item.prop === 'type'">
                <el-tag v-if="scope.row[item.prop] === '顶级菜单'" type="danger" effect="plain">{{ scope.row[item.prop] }}</el-tag>
                <el-tag v-else-if="scope.row[item.prop] === '子菜单'" effect="plain">{{ scope.row[item.prop] }}</el-tag>
                <el-tag v-else effect="plain" type="success">{{ scope.row[item.prop] }}</el-tag>
              </span>
              <span v-else-if="item.prop === 'sort'" style="font-weight: bold">
                {{ scope.row[item.prop] }}
              </span>
              <span v-else>{{ scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
        </template>
        <el-table-column
          v-permission="['root','Menu:delete','Menu:update']"
          label="操作"
          width="125"
          align="center"
          fixed="right"
        >
          <template slot-scope="scope">
            <update-delete-operation
              :permission="permission"
              :data="scope.row"
            />
          </template>
        </el-table-column>
      </template>
    </scaffold-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import scaffoldTreeSelect from '@/components/ScaffoldTreeSelect'
import scaffoldDialog from '@/components/ScaffoldDialog'
import scaffoldTable from '@/components/ScaffoldTable'
import scaffoldIconSelect from '@/components/ScaffoldIconSelect'
import backTopAndBottom from '@/components/BackTopAndBottom'
import buttonOperation from '@/components/Crud/Button.operation'
import updateDeleteOperation from '@/components/Crud/UpdateDelete.operation'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import { getMenusTree, add, edit, del } from '@/api/system/menu'
import i18n from '@/i18n'

const defaultCrud = CRUD({ title: '菜单', url: '/menus', crudMethod: { add, edit, del }})
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
  components: {
    searchDatePickerOperation,
    buttonOperation,
    backTopAndBottom,
    scaffoldTable,
    scaffoldDialog,
    scaffoldIconSelect,
    scaffoldTreeSelect,
    updateDeleteOperation
  },
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
        { key: 'true', displayName: '启用' },
        { key: 'false', displayName: '禁用' }
      ],
      rules_0: {
        name: [
          { required: true, message: '请输入菜单名称', trigger: 'blur' }
        ],
        path: [
          { required: true, message: '请输入前端使用的Path', trigger: 'blur' }
        ],
        url: [
          { required: true, message: '请输入后端使用的Url', trigger: 'blur' }
        ]
      },
      rules_1: {
        name: [
          { required: true, message: '请输入菜单名称', trigger: 'blur' }
        ],
        componentName: [
          { required: true, message: '请输入组件名称', trigger: 'blur' }
        ],
        component: [
          { required: true, message: '请输入组件路径', trigger: 'blur' }
        ],
        permission: [
          { required: true, message: '请输入权限标识', trigger: 'blur' }
        ],
        path: [
          { required: true, message: '请输入前端使用的Path', trigger: 'blur' }
        ],
        url: [
          { required: true, message: '请输入后端使用的Url', trigger: 'blur' }
        ]
      },
      rules_2: {
        name: [
          { required: true, message: '请输入菜单操作权限', trigger: 'blur' }
        ],
        permission: [
          { required: true, message: '请输入权限标识', trigger: 'blur' }
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
        const menu = { id: 0, label: '顶级菜单', children: [] }
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
      const operate = enabled === true ? '启用' : '禁用'
      this.$confirm('此操作将' + operate + ' 菜单 [' + data.name + '] ' + ', 是否继续?', String(i18n.t('confirmTips')), {
        confirmButtonText: String(i18n.t('ok')),
        cancelButtonText: String(i18n.t('cancel')),
        type: 'warning'
      }).then(() => {
        edit(data).then(() => {
          this.crud.notify(operate + '成功', CRUD.NOTIFICATION_TYPE.SUCCESS)
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
