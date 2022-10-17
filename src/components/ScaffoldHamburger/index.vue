<template>
  <div style="padding: 0 15px;" @click="toggleClick">
    <scaffold-svg
      v-if="isActive"
      icon-class="hamburger-left"
      class-name="hamburger"
    />
    <scaffold-svg
      v-else
      icon-class="hamburger-right"
      class-name="hamburger"
    />
  </div>
</template>

<script>
export default {
  name: 'ScaffoldHamburger',
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

