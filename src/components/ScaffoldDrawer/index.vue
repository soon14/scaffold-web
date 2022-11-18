<template>
  <el-drawer
    class="my-drawer"
    :visible.sync="visible"
    :direction="direction"
    :close-on-press-escape="closeOnPressEscape"
    :custom-class="customClass"
    :size="size"
    :before-close="beforeClose"
    :show-close="showClose"
  >
    <template #title>
      <slot name="title" />
    </template>
    <template #default>
      <slot name="body" />
    </template>
  </el-drawer>
</template>

<script>
export default {
  name: 'SwDrawer',
  props: {
    // 是否打开抽屉
    visible: {
      type: Boolean,
      required: true
    },
    // 抽屉打开的方向(默认由右向左)
    direction: {
      type: String,
      required: false,
      default: 'rtl',
      validator(val) {
        return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(val) !== -1
      }
    },
    // 是否可以通过按下 ESC 关闭 Drawer
    closeOnPressEscape: {
      type: Boolean,
      required: false,
      default: true
    },
    // 自定义类名
    // eslint-disable-next-line vue/require-default-prop
    customClass: {
      type: String,
      required: false
    },
    // Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位,
    // 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释
    size: {
      type: String || Number,
      required: false,
      default: '30%'
    },
    // 关闭前的回调
    beforeClose: {
      type: Function,
      default: () => {}
    },
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
 .my-drawer ::v-deep{

  .el-drawer__body{
    overflow: overlay;

    // 滚动条适配火狐浏览器
    scrollbar-width: none;
    scrollbar-color: #dddee0 transparent;

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(144, 147, 153, 0.54);
      cursor: pointer;
      border-radius: 8px;
      position: relative;
      transition: background-color .3s;
      transition-property: background-color;
      transition-duration: 0.3s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }
  }
}
</style>
