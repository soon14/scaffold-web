<template>
  <div style="padding: 0 15px;" @click="toggleClick">
    <i v-if="isActive" class="iconfont iconfont-hamburger-left hamburger" />
    <i v-else class="iconfont iconfont-hamburger-right hamburger" />
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    // 菜单栏是否已经打开
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
.hamburger {
  font-size: 25px;
}
</style>

