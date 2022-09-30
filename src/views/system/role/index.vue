<template>
  <div class="app-container">
    <back-top-and-bottom />
    <div class="head-container">
      <search-date-picker-operation input-placeholder="请输入角色名称或权限等级搜索" />
      <button-operation :permission="permission" />
    </div>
    <scaffold-dialog
      :visible="crud.status.cu > 0"
      :before-close="crud.cancelCU"
      :close-on-click-modal="false"
      append-to-body
      width="520px"
      top="60px"
    >
      <template #title>
        <div style="padding:15px 20px;">{{ crud.status.title }}</div>
      </template>
      <template #content>
        <el-form
          ref="form"
          inline
          :model="form"
          label-width="120px"
          :rules="rules"
        >
          <el-form-item label="角色名称" prop="name">
            <el-input v-model="form.name" clearable />
          </el-form-item>
          <el-form-item label="国际化zh-CN" prop="nameZhCn">
            <el-input v-model="form.nameZhCn" clearable />
          </el-form-item>
          <el-form-item label="国际化zh-HK" prop="nameZhHk">
            <el-input v-model="form.nameZhHk" clearable />
          </el-form-item>
          <el-form-item label="国际化zh-TW" prop="nameZhTw">
            <el-input v-model="form.nameZhTw" clearable />
          </el-form-item>
          <el-form-item label="国际化en-US" prop="nameEnUs">
            <el-input v-model="form.nameEnUs" clearable />
          </el-form-item>
          <el-form-item label="角色权限" prop="permission">
            <el-input v-model="form.permission" clearable />
          </el-form-item>
          <el-form-item label="角色级别" prop="level">
            <el-input-number
              v-if="crud.status.edit === 1"
              v-model.number="form.level"
              :min="Number(levelMin)"
              :max="Number(levelMax)"
              controls-position="right"
              style="width: 145px;"
            />
            <el-input-number
              v-if="crud.status.add === 1"
              v-model.number="form.level"
              :min="1"
              controls-position="right"
              style="width: 145px;"
            />
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button round @click="crud.cancelCU">{{ $t('cancel') }}</el-button>
        <el-button :loading="crud.cu === 2" type="primary" round @click="crud.submitCU">{{ $t('ok') }}</el-button>
      </template>
    </scaffold-dialog>
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="17" style="margin-bottom: 10px">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="role-span">角色列表 (修改菜单后该角色需要注销重新登录)</span>
          </div>
          <scaffold-table
            ref="scaffoldTable"
            :table-data="crud.data"
            :crud="crud"
            highlight-current-row
            :default-sort="{prop:'level',order:'ascending'}"
            @current-change="handleCurrentChange"
          >
            <template #tableColumns>
              <el-table-column type="selection" width="55" fixed="left" />
              <template v-for="item in tableHeader.roles">
                <el-table-column
                  v-if="columns.visible(item.prop)"
                  :key="item"
                  :prop="item.prop"
                  :label="item.label"
                  :sortable="item.sortable"
                  :width="item.width"
                  :fixed="item.fixed"
                />
              </template>
              <el-table-column
                v-permission="['root','Role:delete','Role:update']"
                label="操作"
                width="125"
                align="center"
                fixed="right"
              >
                <template slot-scope="scope">
                  <update-delete-operation
                    v-if="scope.row.level >= level"
                    :permission="permission"
                    :data="scope.row"
                  />
                </template>
              </el-table-column>
            </template>
          </scaffold-table>
          <pagination-operation />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="7">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-tooltip class="item" effect="light" content="选择指定角色分配菜单" placeholder="top">
              <span class="role-span">
                菜单分配
              </span>
            </el-tooltip>
            <el-button
              v-permission="['root','Role:update']"
              :disabled="!showButton"
              :loading="menuLoading"
              icon="el-icon-check"
              style="float: right; padding: 6px 9px"
              type="primary"
              @click="saveMenus"
            >保存</el-button>
          </div>
          <el-tree
            ref="menu"
            :data="menus"
            :default-checked-keys="menuIds"
            :props="defaultProps"
            accordion
            show-checkbox
            node-key="id"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import backTopAndBottom from '@/components/BackTopAndBottom'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import buttonOperation from '@/components/Crud/Button.operation'
import scaffoldTable from '@/components/ScaffoldTable'
import scaffoldDialog from '@/components/ScaffoldDialog'
import paginationOperation from '@/components/Crud/Pagination.operation'
import updateDeleteOperation from '@/components/Crud/UpdateDelete.operation'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import { getLevelScope, edit, del, editMenu, getRoleById, add } from '@/api/system/roles'
import { getMenusTree } from '@/api/system/menu'

const defaultCrud = CRUD({ url: '/roles', title: '角色', crudMethod: { edit, del, add }})
const defaultForm = { id: null, name: null, permission: null, level: 4, nameZhCn: null, nameZhHk: null, nameZhTw: null, nameEnUs: null }
export default {
  name: 'Role',
  components: {
    backTopAndBottom,
    searchDatePickerOperation,
    buttonOperation,
    scaffoldTable,
    paginationOperation,
    scaffoldDialog,
    updateDeleteOperation
  },
  mixins: [
    presenter(defaultCrud),
    form(defaultForm),
    header(),
    crud()
  ],
  data() {
    return {
      permission: {
        add: ['Role:add', 'root'],
        edit: ['Role:update', 'root'],
        del: ['Role:delete', 'root']
      },
      defaultProps: { children: 'children', label: 'label' },
      levelMin: '',
      levelMax: '',
      currentId: 0,
      menuLoading: false,
      showButton: false,
      menus: [],
      menuIds: [],
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        permission: [
          { required: true, message: '请输入权限', trigger: 'blur' }
        ],
        nameZhCn: [
          { required: true, message: '请输入中国大陆名称', trigger: 'blur' }
        ],
        nameZhHk: [
          { required: true, message: '请输入中国香港名称', trigger: 'blur' }
        ],
        nameZhTw: [
          { required: true, message: '请输入中国台湾名称', trigger: 'blur' }
        ],
        nameEnUs: [
          { required: true, message: '请输入英文名称', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'tableHeader', 'level'
    ])
  },
  created() {
    this.getMenus()
  },
  methods: {
    // 新增与编辑前做的操作
    [CRUD.HOOK.afterToCU](crud, form) {
      this.getLevelScope()
    },
    getLevelScope() {
      getLevelScope().then(res => {
        this.levelMax = res.data.max
        this.levelMin = res.data.min
      })
    },
    getMenus() {
      getMenusTree().then(res => {
        this.menus = res.data
      })
    },
    handleCurrentChange(val) {
      if (val) {
        const _this = this
        // 清空菜单的选中
        this.$refs.menu.setCheckedKeys([])
        // 保存当前的角色id
        this.currentId = val.id
        this.showButton = this.level <= val.level
        // 初始化
        this.menuIds = []
        // 菜单数据需要特殊处理
        val.menus.forEach(function (data, index) {
          _this.menuIds.push(data.id)
        })
      }
    },
    saveMenus() {
      this.menuLoading = true
      const role = {
        id: this.currentId,
        menus: []
      }
      // 得到半选的父节点数据,保存起来
      this.$refs.menu.getHalfCheckedNodes().forEach(function (data, index) {
        const menu = { id: data.id }
        role.menus.push(menu)
      })
      // 得到已选中的Key值
      this.$refs.menu.getCheckedKeys().forEach(function (data, index) {
        const menu = { id: data }
        role.menus.push(menu)
      })
      // 调用方法
      editMenu(role).then(res => {
        this.crud.notify('保存成功', CRUD.NOTIFICATION_TYPE.SUCCESS)
        this.menuLoading = false
        this.update()
      }).catch(err => {
        this.menuLoading = false
        console.log(err.response.data.message)
      })
    },
    update() {
      // 无刷新更新 表格数据
      getRoleById(this.currentId).then(res => {
        for (let i = 0; i < this.crud.data.length; i++) {
          if (res.data.id === this.crud.data[i].id) {
            this.crud.data[i] = res.data
            break
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card{
  border-radius: 10px;

  .role-span{
    font-weight: bold;color: #303133;
    font-size: 15px;
  }
}
</style>
