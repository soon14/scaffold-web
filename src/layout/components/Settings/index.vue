<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">系统布局设置</h3>

      <div class="drawer-item">
        <span>主题颜色</span>
        <theme-picker style="float: right;height: 26px;margin:-3px 8px 0 0;" @change="themeChange"/>
      </div>

      <div class="drawer-item">
        <span>显示标签</span>
        <el-switch v-model="tagsView" class="drawer-switch"/>
      </div>

      <div class="drawer-item">
        <span>固定头部</span>
        <el-switch v-model="fixedHeader" class="drawer-switch"/>
      </div>

      <div class="drawer-item">
        <span>显示LOGO</span>
        <el-switch v-model="sidebarLogo" class="drawer-switch"/>
      </div>

      <div class="drawer-item">
        <span>只保持一个子菜单的展开</span>
        <el-switch v-model="uniqueOpened" class="drawer-switch"/>
      </div>

    </div>
  </div>
</template>

<script>
import ThemePicker from '@/components/ThemePicker'

export default {
  components: {ThemePicker},
  data() {
    return {}
  },
  computed: {
    tagsView: {
      get() {
        return this.$store.state.global.tagsView
      },
      set(val) {
        this.$store.dispatch('global/changeSetting', {
          key: 'tagsView',
          value: val
        })
      }
    },
    fixedHeader: {
      get() {
        return this.$store.state.global.fixedHeader
      },
      set(val) {
        this.$store.dispatch('global/changeSetting', {
          key: 'fixedHeader',
          value: val
        })
      }
    },
    sidebarLogo: {
      get() {
        return this.$store.state.global.sidebarLogo
      },
      set(val) {
        this.$store.dispatch('global/changeSetting', {
          kay: 'sidebarLogo',
          value: val
        })
      }
    },
    uniqueOpened: {
      get() {
        return this.$store.state.global.uniqueOpened
      },
      set(val) {
        this.$store.dispatch('global/changeSetting', {
          key: 'uniqueOpened',
          value: val
        })
      }
    }
  },
  methods: {
    themeChange(val) {
      this.$store.dispatch('global/changeSetting', {
        key: 'theme',
        value: val
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right
  }
}
</style>
