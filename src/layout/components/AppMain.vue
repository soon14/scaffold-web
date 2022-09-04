<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
    <div v-if="$store.state.global.showFooter" id="el-main-footer">
      <span v-html="$store.state.global.footerTxt"/>
      <span> ⋅ </span>
      <span v-text="$store.state.global.caseNumber"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

#el-main-footer {
  background: none repeat scroll 0 0 white;
  border-top: 1px solid #e7eaec;
  overflow: hidden;
  padding: 10px 6px 0 6px;
  height: 25px;
  font-size: 0.7rem !important;
  font-weight: bold;
  color: #7a8b9a;
  letter-spacing: 0.8px;
  font-family: Arial, sans-serif !important;
  position: fixed;
  bottom: 0;
  z-index: 99;
  width: 100%;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// 修复打开 el-dialog 中的 css 样式错误
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
