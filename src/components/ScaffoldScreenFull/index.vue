<template>
  <div>
    <scaffold-svg
      :icon-class="isFullscreen ? 'compress' : 'expend'"
      class-name="screen-full"
      @click="click"
    />
  </div>
</template>

<script>
import ScreenFull from 'screenfull'
import i18n from '@/i18n'

export default {
  name: 'ScaffoldScreenFull',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    click() {
      if (!ScreenFull.enabled) {
        this.$message({
          message: String(i18n.t('scaffoldScreenFull.tip')),
          type: 'warning'
        })
        return false
      }
      ScreenFull.toggle()
    },
    change() {
      this.isFullscreen = ScreenFull.isFullscreen
    },
    init() {
      if (ScreenFull.enabled) {
        ScreenFull.on('change', this.change)
      }
    },
    destroy() {
      if (ScreenFull.enabled) {
        ScreenFull.off('change', this.change)
      }
    }
  }
}
</script>

<style scoped>
.screen-full {
  font-size: 20px;
}
</style>
