<template>
  <div class="icon-body">
    <el-input
      v-model="name"
      style="position: relative;"
      clearable
      :placeholder="String($t('scaffoldIconSelect.placeholder'))"
      @clear="filterIcons"
      @input.native="filterIcons"
    >
      <i slot="suffix" class="el-icon-search el-input__icon" />
    </el-input>
    <div class="icon-list">
      <div
        v-for="(item,index) in iconList"
        :key="index"
        @click="selectedIcon(item)"
      >
        <scaffold-svg :icon-class="item" style="height: 30px;width: 16px;fill: black" />
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import icons from './requireIcons'

export default {
  name: 'ScaffoldIconSelect',
  data() {
    return {
      name: '',
      iconList: icons
    }
  },
  methods: {
    filterIcons() {
      if (this.name) {
        this.iconList = this.iconList.filter(item => item.includes(this.name))
      } else {
        this.iconList = icons
      }
    },
    selectedIcon(name) {
      this.$emit('selected', name)
      document.body.click()
    },
    reset() {
      this.name = ''
      this.iconList = icons
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-body {
  width: 100%;
  padding: 5px;

  .icon-list {
    height: 200px;
    overflow-y: scroll;
    margin-top: 10px;

    // 滚动条适配火狐浏览器
    scrollbar-width: none;
    scrollbar-color: #dddee0 transparent;

    overflow: overlay;

    // 滚动条整体部分
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    // 滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
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

    div {
      height: 30px;
      line-height: 30px;
      margin-bottom: -5px;
      cursor: pointer;
      width: 50%;
      float: left;
    }

    span {
      display: inline-block;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }

  }
}
</style>
