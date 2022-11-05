<template>
  <div class="drawer-container">
    <div>
      <div class="drawer-item">
        <span>{{ $t('settings.themeColor') }}</span>
        <scaffold-theme-picker style="float: right;height: 26px;margin:-3px 8px 0 0;" @change="themeChange" />
      </div>
      <div class="drawer-item">
        <span>{{ $t('settings.isShowLabels') }}</span>
        <el-switch v-model="tagsView" class="drawer-switch" />
      </div>
      <div class="drawer-item">
        <span>{{ $t('settings.isFixedHead') }}</span>
        <el-switch v-model="fixedHeader" class="drawer-switch" />
      </div>
      <div class="drawer-item">
        <span>{{ $t('settings.isShowLogo') }}</span>
        <el-switch v-model="sidebarLogo" class="drawer-switch" />
      </div>
      <div class="drawer-item">
        <span>{{ $t('settings.isShowOnceMenu') }}</span>
        <el-switch v-model="uniqueOpened" class="drawer-switch" />
      </div>
      <div class="drawer-item">
        <span>{{ $t('settings.showFooter') }}</span>
        <el-switch v-model="showFooter" class="drawer-switch" />
      </div>
    </div>
  </div>
</template>

<script>
import scaffoldThemePicker from '@/components/ScaffoldThemePicker'

export default {
  name: 'ScaffoldSettings',
  components: { scaffoldThemePicker },
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
          key: 'sidebarLogo',
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
    },
    showFooter: {
      get() {
        return this.$store.state.global.showFooter
      },
      set(val) {
        this.$store.dispatch('global/changeSetting', {
          key: 'showFooter',
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

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 15px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right
  }
}
</style>
