<template>
  <el-dialog
    class="my-dialog"
    :visible.sync="dialog"
    append-to-body
    center
    top="70px"
    width="75%"
  >
    <div slot="title" class="header-title" :style="{'background': theme, 'color': 'white'}">
      <div style="padding:15px 20px;">{{ $t('errorLogsPage.exceptionInfo') }}</div>
    </div>
    <pre v-highlightjs="errorLogs" class="pre-class">
        <code class="java code-class" />
    </pre>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SWExceptionInfo',
  props: {
    errorLogs: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapGetters([
      'theme'
    ])
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog{
  border-radius: 10px;
}

.my-dialog ::v-deep {
  .header-title{
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  overflow: overlay;

  // 滚动条适配火狐浏览器
  scrollbar-width: none;
  scrollbar-color: #dddee0 transparent;

  .el-dialog__header {
    padding: 0;
  }

  .el-dialog__headerbtn {
    top: 5px;
    right: 5px;
    padding-top: 10px;
  }

  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
    height: 30px;
    width: 35px;
  }

  .el-dialog__headerbtn .el-dialog__close:hover {
    color: gray;
  }

  .el-dialog__body {
    height: 70vh;
    padding: 0;
    background-color: #282c34;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    overflow: overlay;

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

.code-class {
  padding: 0 0 10px;
  margin-top: 0;
  font-size: 15px;
  line-height: 25px;
  font-family: Consolas,serif;
  margin-left: 10px;
  overflow: overlay;

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

.pre-class {
  padding: 0;
  margin-top: 0;
  background-color: #282c34;
}
</style>
