<template>
  <el-dropdown trigger="click" @command="handleSetSize">
    <div>
      <i class="iconfont iconfont-font-size size-select"/>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item in sizeOptions" :key="item.value" :disabled="size === item.value" :icon="item.icon"
                        :command="item.value" style="font-size: 15px">
        {{ item.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "SizeSelect",
  data() {
    return {
      sizeOptions: [
        {
          label: 'Default',
          value: 'default',
          icon: 'iconfont iconfont-default'
        },
        {
          label: 'Medium',
          value: 'medium',
          icon: 'iconfont iconfont-medium'
        },
        {
          label: 'Small',
          value: 'small',
          icon: 'iconfont iconfont-small'
        },
        {
          label: 'Mini',
          value: 'mini',
          icon: 'iconfont iconfont-mini'
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
      this.$ELEMENT.size = size;//设置element-ui的尺寸
      this.$store.dispatch('app/setSize', size)//修改Vuex中的状态
      this.refreshView()
      this.$message({
        message: '布局设置成功',
        type: 'success'
      })
    },
    refreshView() {
      // 为了使缓存的页面重新渲染
      this.$store.dispatch('tagsView/delAllCachedViews', this.$route)

      const {fullPath} = this.$route

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
</style>
