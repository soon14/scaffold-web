<template>
  <el-dropdown trigger="click" @command="handleOpenUrl">
    <div>
      <scaffold-svg
        icon-class="code"
        class-name="code-address"
      />
    </div>
    <el-dropdown-menu slot="dropdown">
      <template v-for="item in codeOptions">
        <el-dropdown-item :key="item.url" :command="item.url">
          <template #default>
            <scaffold-svg
              :icon-class="item.icon"
              class-name="code-address-item"
            />
            {{ item.title }}
          </template>
        </el-dropdown-item>
      </template>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'ScaffoldCodeSelect',
  data() {
    return {
      codeOptions: [
        {
          title: this.$i18n.t('code.frontCode'),
          url: 'https://github.com/Weihoooooooo/scaffold-web',
          icon: 'github'
        },
        {
          title: this.$i18n.t('code.backCode'),
          url: 'https://github.com/Weihoooooooo/Scaffold',
          icon: 'github'
        },
        {
          title: this.$i18n.t('code.frontCode'),
          url: 'https://gitee.com/lai-weihao/scaffold-web',
          icon: 'gitee'
        },
        {
          title: this.$i18n.t('code.backCode'),
          url: 'https://gitee.com/lai-weihao/Scaffold',
          icon: 'gitee'
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

.code-address-item {
  font-size: 18px;
}
</style>
