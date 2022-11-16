<template>
  <el-col
    :xs="24"
    :sm="12"
    :md="8"
    :lg="8"
    :xl="6"
    style="margin-bottom: 32px;"
  >
    <el-card
      :shadow="shadow"
      :style="{
        borderRadius: round ? '10px' : '0'
      }"
      :class="{'card-fix':fixHeight}"
    >

      <div
        v-if="openHeader"
        slot="header"
        :style="{
          textAlign: headerAlign,
          fontSize: headerFontSize + 'px'
        }"
      >
        <slot name="card-header" />
        <slot name="card-header-btn" />
      </div>

      <div :class="{'notice-content' : fixHeight}">
        <slot />
      </div>

      <div class="bottom">
        <slot name="card-footer" />
      </div>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: 'ScaffoldCard',
  props: {
    // 设置阴影显示时机
    shadow: {
      type: String,
      required: false,
      default: 'always'
    },
    // 固定卡片的高度(350px)
    fixHeight: {
      type: Boolean,
      required: false,
      default: false
    },
    // 卡片是否圆角
    round: {
      type: Boolean,
      required: false,
      default: false
    },
    // 卡片头的对齐方式
    headerAlign: {
      type: String,
      required: false,
      default: 'center'
    },
    // 卡片头的字体大小
    headerFontSize: {
      type: Number,
      required: false,
      default: 20
    },
    // 开启头部
    openHeader: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.card-fix {
  height: 400px;
}

.notice-content{
  font-size: 13px;
  height: 260px;

  overflow-y: overlay;

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

.bottom{
  margin-top: 5px;
}
</style>
