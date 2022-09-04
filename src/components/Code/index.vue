<template>
  <el-dropdown trigger="click" @command="handleOpenUrl">
    <div>
      <i class="iconfont iconfont-code code-address"/>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item in codeOptions" :key="item.url" :icon="item.icon" :command="item.url">
        {{ item.title }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'Code',
  data() {
    return {
      codeOptions: [
        {
          title: this.$i18n.t('code.frontCode'),
          url: 'https://github.com/Weihoooooooo/scaffold-web',
          icon: 'iconfont iconfont-github code-address'
        },
        {
          title: this.$i18n.t('code.backCode'),
          url: 'https://github.com/Weihoooooooo/Scaffold',
          icon: 'iconfont iconfont-github code-address'
        },
        {
          title: this.$i18n.t('code.frontCode'),
          url: 'https://gitee.com/lai-weihao/scaffold-web',
          icon: 'iconfont iconfont-gitee code-address'
        },
        {
          title: this.$i18n.t('code.backCode'),
          url: 'https://gitee.com/lai-weihao/Scaffold',
          icon: 'iconfont iconfont-gitee code-address'
        }
      ]
    }
  },
  methods: {
    handleOpenUrl(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.code-address {
  font-size: 20px;
}
</style>
