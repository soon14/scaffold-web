<template>
  <el-dropdown trigger="hover" @command="handleSetSize">
    <div>
      <sw-svg
        icon-class="font-size"
        class-name="size-select"
      />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item disabled style="text-align: center;color: black;font-size: 14px;padding: 0">{{ String($t('navbar.sizeSelect')) }}</el-dropdown-item>
      <hr color="#dcdfe6">
      <template v-for="item in sizeOptions">
        <el-dropdown-item
          :key="item.value"
          :disabled="size === item.value"
          :command="item.value"
          style="font-size: 15px"
        >
          <template #default>
            <sw-svg
              :icon-class="item.icon"
              class-name="size-select-item"
            />
            {{ item.label }}
          </template>
        </el-dropdown-item>
      </template>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import i18n from '@/i18n'

export default {
  name: 'SWSizeSelect',
  data() {
    return {
      sizeOptions: [
        {
          label: 'Default',
          value: 'default',
          icon: 'default'
        },
        {
          label: 'Medium',
          value: 'medium',
          icon: 'medium'
        },
        {
          label: 'Small',
          value: 'small',
          icon: 'small'
        },
        {
          label: 'Mini',
          value: 'mini',
          icon: 'mini'
        }
      ]
    }
  },
  computed: {
    size() {
      return this.$store.getters.size
    }
  },
  methods: {
    handleSetSize(size) {
      this.$ELEMENT.size = size// 设置element-ui的尺寸
      this.$store.dispatch('app/setSize', size)// 修改Vuex中的状态
      this.refreshView()
      this.$message({
        message: String(i18n.t('scaffoldSizeSelect.tip')),
        type: 'success'
      })
    },
    refreshView() {
      // 为了使缓存的页面重新渲染
      this.$store.dispatch('tagsView/delAllCachedViews', this.$route)

      const { fullPath } = this.$route

      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + fullPath
        })
      })
    }
  }
}
</script>

<style scoped>
.size-select {
  font-size: 20px;
}

.size-select-item {
  font-size: 16px;
}
</style>
