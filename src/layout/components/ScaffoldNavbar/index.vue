<template>
  <div class="navbar">
    <!-- 顶部缩放菜单栏按钮 -->
    <scaffold-hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <!-- 面包屑 -->
    <scaffold-breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <!-- 工具栏 -->
    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <!-- 查找框 -->
        <scaffold-header-search id="header-search" class="right-menu-item" />
        <!-- 全屏缩放 -->
        <el-tooltip
          :content="String($t('navbar.screenFull'))"
          effect="light"
          placement="bottom"
          transition="el-zoom-in-top"
        >
          <scaffold-screen-full id="screenFull" class="right-menu-item hover-effect" />
        </el-tooltip>
        <!-- 源码地址 -->
        <scaffold-code-select class="right-menu-item hover-effect" />
        <!-- 多语言切换 -->
        <scaffold-i18n-select id="i18n-select" class="right-menu-item hover-effect" />
        <!-- 布局设置 -->
        <scaffold-size-select id="size-select" class="right-menu-item hover-effect" />
      </template>

      <!-- 头像 -->
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" style="margin-bottom: 15px" :src="avatarShow" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <span style="display: block;" @click="show = true">
            <el-dropdown-item icon="iconfont iconfont-layout-setting">
              {{ $t('navbar.systemLayoutSettings') }}
            </el-dropdown-item>
          </span>
          <router-link to="/user/center">
            <el-dropdown-item icon="iconfont iconfont-userInfo">
              {{ $t('navbar.personalCenter') }}
            </el-dropdown-item>
          </router-link>
          <span style="display: block;" @click="open">
            <el-dropdown-item divided icon="iconfont iconfont-logout">
              {{ $t('navbar.logout') }}
            </el-dropdown-item>
          </span>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import scaffoldBreadcrumb from '@/components/ScaffoldBreadcrumb'
import scaffoldHamburger from '@/components/ScaffoldHamburger'
import scaffoldScreenFull from '@/components/ScaffoldScreenFull'
import scaffoldSizeSelect from '@/components/ScaffoldSizeSelect'
import scaffoldHeaderSearch from '@/components/ScaffoldHeaderSearch'
import scaffoldCodeSelect from '@/components/ScaffoldCodeSelect'
import scaffoldI18nSelect from '@/components/ScaffoldI18nSelect'
import Avatar from '@/assets/images/avatar.png'
import AvatarNoEnabled from '@/assets/images/avatarNoEnabled.png'

export default {
  name: 'ScaffoldNavbar',
  components: {
    scaffoldBreadcrumb,
    scaffoldHamburger,
    scaffoldScreenFull,
    scaffoldSizeSelect,
    scaffoldHeaderSearch,
    scaffoldCodeSelect,
    scaffoldI18nSelect
  },
  data() {
    return {
      Avatar: Avatar,
      AvatarNoEnabled: AvatarNoEnabled,
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'device',
      'user'
    ]),
    show: {
      get() {
        return this.$store.state.global.showSettings
      },
      set(val) {
        this.$store.dispatch('global/changeSetting', {
          key: 'showSettings',
          value: val
        })
      }
    },
    avatarShow() {
      if (this.user.avatar !== null) {
        if (this.user.avatar.enabled === '已审核') {
          return this.user.avatar.path
        } else {
          return this.AvatarNoEnabled
        }
      } else {
        return this.Avatar
      }
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    open() {
      this.$confirm(String(this.$i18n.t('logout.message')), String(this.$i18n.t('confirmTips')), {
        confirmButtonText: String(this.$i18n.t('ok')),
        cancelButtonText: String(this.$i18n.t('cancel')),
        type: 'warning'
      }).then(() => {
        this.logout()
      })
    },
    logout() {
      this.$store.dispatch('user/LogOut').then(() => {
        location.reload()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
