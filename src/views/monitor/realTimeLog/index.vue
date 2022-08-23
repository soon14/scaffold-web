<template>
  <div class="log-container">
    <el-row class="log-panel" v-loading="loading">
      <el-col :span="24">
        <el-card shadow="always" class="log-card">
          <div slot="header" class="log-card-header">
            <span class="log-card-header-title"><b>{{ $t('realTimeLog.title') }}</b></span>
            <span class="log-card-header-tips">{{ $t('realTimeLog.tips') }}</span>
          </div>
          <div id="loggingText" ref="loggingText" contenteditable="false" v-html="logging"></div>
          <div id="loggingDo">
            <el-button type="danger" round size="small" @click="clearText">{{ $t('realTimeLog.closeText') }}</el-button>
            <el-divider direction="vertical"/>
            <el-button type="primary" round size="small" @click="scrollBottom">
              {{ $t('realTimeLog.scrollBottom') }}
            </el-button>
            <el-button type="success" round size="small" v-if="!loggingAutoBottom" @click="OpenAuto">
              {{ $t('realTimeLog.openAutoScroll') }}
            </el-button>
            <el-button type="warning" round size="small" v-else @click="CloseAuto">
              {{ $t('realTimeLog.closeAutoScroll') }}
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {closeWebSocket, createWebSocket} from "@/utils/socket";

export default {
  name: "RealTimeLog",
  data() {
    return {
      loading: true,
      logging: ''
    }
  },
  mounted() {
    if (this.flag) {
      createWebSocket(`/websocket/logging`, this.callback)
    }
  },
  computed: {
    ...mapGetters([
      "roles",
      "loggingAutoBottom"
    ]),
    flag() {
      return this.roles.includes('RealTimeLog:read')
    }
  },
  methods: {
    callback(msg) {
      if (msg.code === 10005) {
        this.logging += msg.data
        this.loading = false
        if (this.loggingAutoBottom === true) {
          this.$nextTick(() => {
            this.$refs.loggingText.scrollTo({
              top: this.$refs.loggingText.scrollHeight,
              behavior: 'smooth'
            })
          })
        }
      }
    },
    clearText() {
      this.logging = ''
    },
    scrollBottom() {
      this.$nextTick(function () {
        this.$refs.loggingText.scrollTo({
          top: this.$refs.loggingText.scrollHeight,
          behavior: 'smooth'
        })
      })
    },
    OpenAuto() {
      this.$store.dispatch('realTimeLog/OpenAutoBottom').then(() => {
      })
    },
    CloseAuto() {
      this.$store.dispatch('realTimeLog/CloseAutoBottom').then(() => {
      })
    }
  },
  watch: {
    loggingAutoBottom() {
      if (this.loggingAutoBottom === true) {
        this.$nextTick(() => {
          this.$refs.loggingText.style.overflow = 'hidden'
          this.$refs.loggingText.scrollTo({
            top: this.$refs.loggingText.scrollHeight,
            behavior: 'smooth'
          })
        })
      } else {
        this.$refs.loggingText.style.overflow = 'auto'
      }
    }
  },
  destroyed() {
    // 一定要销毁WebSocket实例，否则会造成冲突，引发两个使用了WebSocket的页面数据展示异常
    closeWebSocket()
  }
}
</script>

<style lang="scss" scoped>
.log-container {
  padding: 10px 22px 22px 22px;
  background-color: rgba(240, 242, 245, 0.99);

  .log-panel {
    margin-top: 0;

    .log-card {
      border-radius: 10px;

      #loggingText {
        width: 100%;
        height: 500px;
        background-color: ghostwhite;
        overflow: auto;
        border-radius: 10px;
      }

      #loggingDo {
        text-align: center;
        margin-top: 10px;
      }

      .log-card-header {
        text-align: center;

        .log-card-header-title {
          font-size: 15px;
        }

        .log-card-header-tips {
          font-size: 10px;
          float: right;
          margin-top: 20px;
          color: red;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
