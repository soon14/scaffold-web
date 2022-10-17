<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <!-- 菜单栏 -->
    <scaffold-sidebar class="sidebar-container" />
    <div :class="{hasTagsView : needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <!-- 顶部栏 -->
        <scaffold-navbar />
        <!-- 标签栏 -->
        <scaffold-tags-view v-if="needTagsView" />
      </div>
      <!-- 主要页面 -->
      <scaffold-app-main />
      <!-- 系统布局设置 -->
      <scaffold-drawer
        :visible="showSettings"
        :before-close="beforeCloseDrawer"
        size="20%"
      >
        <template #title>
          <h1 class="drawer-title">{{ $t('settings.systemLayoutSettings') }}</h1>
        </template>
        <template #body>
          <scaffold-settings />
        </template>
      </scaffold-drawer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { scaffoldAppMain, scaffoldNavbar, scaffoldSettings, scaffoldSidebar, scaffoldTagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import scaffoldDrawer from '@/components/ScaffoldDrawer'

export default {
  name: 'Layout',
  components: {
    scaffoldAppMain,
    scaffoldNavbar,
    scaffoldSettings,
    scaffoldSidebar,
    scaffoldTagsView,
    scaffoldDrawer
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.global.showSettings,
      needTagsView: state => state.global.tagsView,
      fixedHeader: state => state.global.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', {
        withoutAnimation: false
      })
    },
    beforeCloseDrawer() {
      this.$store.dispatch('global/changeSetting', {
        key: 'showSettings',
        value: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixin.scss";
@import "~@/assets/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
  padding: 0;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px)
}

.mobile .fixed-header {
  width: 100%;
}

.drawer-title {
  margin-bottom: 12px;
  color: rgba(0, 0, 0, .85);
  font-size: 20px;
  line-height: 22px;
}
</style>
