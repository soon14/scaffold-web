<template>
  <el-dropdown trigger="click" @command="handleChangeLanguage">
    <div>
      <i class="iconfont iconfont-i18n i18n-select"/>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item in i18nOptions"
        :key="item.value"
        :icon="item.icon"
        :disabled="lang === item.value"
        :command="item.value"
      >
        {{ item.title }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'I18nSelect',
  data() {
    return {
      i18nOptions: [
        {
          title: '中国大陆/zh-CN',
          value: 'zh-CN',
          icon: 'iconfont iconfont-i18n-zh_CN i18n-select'
        },
        {
          title: '中國香港/zh-HK',
          value: 'zh-HK',
          icon: 'iconfont iconfont-i18n-zh_HK-zh_TW i18n-select'
        },
        {
          title: '中國臺灣/zh-TW',
          value: 'zh-TW',
          icon: 'iconfont iconfont-i18n-zh_HK-zh_TW i18n-select'
        },
        {
          title: 'English/en-US',
          value: 'en-US',
          icon: 'iconfont iconfont-i18n-en_US i18n-select'
        }
      ]
    }
  },
  computed: {
    lang() {
      return localStorage.getItem('lang')
    }
  },
  methods: {
    handleChangeLanguage(lang) {
      localStorage.setItem('lang', lang)
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.i18n-select {
  font-size: 20px;
}
</style>
