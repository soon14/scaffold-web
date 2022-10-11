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

export default {
  name: 'ScreenFull',
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
          message: '你的浏览器不支持该操作!',
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
