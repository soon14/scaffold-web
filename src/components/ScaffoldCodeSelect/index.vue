<template>
  <el-dropdown trigger="hover" @command="handleOpenUrl">
    <div>
      <sw-svg
        icon-class="code"
        class-name="code-address"
      />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item disabled style="text-align: center;color: black;font-size: 14px;padding: 0">{{ String($t('navbar.codeAddress')) }}</el-dropdown-item>
      <hr color="#dcdfe6">
      <template v-for="item in codeOptions">
        <el-dropdown-item :key="item.url" :command="item.url">
          <template #default>
            <sw-svg
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
  name: 'SwCodeSelect',
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
