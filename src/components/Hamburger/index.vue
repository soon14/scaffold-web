<template>
  <div style="padding: 0 15px;" @click="toggleClick">
    <i class="iconfont iconfont-hamburger hamburger" :class="{'is-active':isActive}"/>
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
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
