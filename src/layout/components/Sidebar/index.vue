<template>
  <div :class="{'has-logo':showLogo}">
    <!-- Logo -->
    <logo v-if="showLogo" :collapse="isCollapse"/>
    <!-- 菜单 -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="$store.state.global.uniqueOpened"
        :active-text-colol="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routers" :key="route.path" :item="route" :base-path="route.path"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/assets/styles/variables.scss'

export default {
  name: 'Sidebar',
  components: {SidebarItem, Logo},
  computed: {
    ...mapGetters([
      'sidebar',
      'permission_routers'
    ]),
    activeMenu() {
      const route = this.$route
      const {meta, path} = route
      // 如果设置路径，侧边栏将突出显示您设置的路径
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.global.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
