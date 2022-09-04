<template>
  <div>
    <transition name="el-fade-in">
      <div
        v-if="toTopVisible"
        :style="{
          'right': styleRight,
          'bottom': styleTopBottom
        }"
        class="el-backtop"
        @click.stop="handleTopClick"
      >
        <slot name="top">
          <el-icon name="caret-top"/>
        </slot>
      </div>
    </transition>
    <transition name="el-fade-in">
      <div
        v-if="toBottomVisible"
        :style="{
          'right': styleRight,
          'bottom': styleBottomBottom
        }"
        class="el-backtop"
        @click.stop="handleBottomClick"
      >
        <slot name="bottom">
          <el-icon name="caret-bottom"/>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
import throttle from 'element-ui/node_modules/throttle-debounce/debounce'

const cubic = value => Math.pow(value, 3)
const easeInOutCubic = value => value < 0.5
  ? cubic(value * 2) / 2
  : 1 - cubic((1 - value) * 2) / 2

export default {
  name: 'BackTopAndBottom',
  props: {
    goTopVisibilityHeight: {
      type: Number,
      default: 200
    },
    toBottomVisibilityHeight: {
      type: Number,
      default: 200
    },
    target: {
      type: String,
      default: ''
    },
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    }
  },
  data() {
    return {
      el: null,
      container: null,
      toTopVisible: false,
      toBottomVisible: true
    }
  },
  computed: {
    styleTopBottom() {
      return `${this.bottom + 25}px`
    },
    styleRight() {
      return `${this.right}px`
    },
    styleBottomBottom() {
      return `${this.bottom - 25}px`
    }
  },
  mounted() {
    this.init()
    this.throttledScrollHandler = throttle(300, this.onScroll)
    this.container.addEventListener('scroll', this.throttledScrollHandler)
    this.onScroll()
  },
  beforeDestroy() {
    this.container.removeEventListener('scroll', this.throttledScrollHandler)
  },
  methods: {
    init() {
      this.container = document
      this.el = document.documentElement
      if (this.target) {
        this.el = document.querySelector(this.target)
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`)
        }
        this.container = this.el
      }
    },
    onScroll() {
      const scrollTop = this.el.scrollTop
      this.toTopVisible = scrollTop >= this.goTopVisibilityHeight
      this.toBottomVisible = (scrollTop + document.documentElement.clientHeight) <= (this.el.scrollHeight - this.toBottomVisibilityHeight)
    },
    handleTopClick(e) {
      this.scrollToTop()
      this.$emit('toTopClick', e)
    },
    handleBottomClick(e) {
      this.scrollToTBottom()
      this.$emit('toBotClick', e)
    },
    scrollToTop() {
      const el = this.el
      const beginTime = Date.now()
      const beginValue = el.scrollTop
      const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500
        if (progress < 1) {
          el.scrollTop = beginValue * (1 - easeInOutCubic(progress))
          console.log(beginValue)
          rAF(frameFunc)
        } else {
          el.scrollTop = 0
        }
      }
      rAF(frameFunc)
    },
    scrollToTBottom() {
      const el = this.el
      const beginTime = Date.now()
      const beginValue = el.scrollTop
      const endScrollTop = el.scrollHeight - document.documentElement.clientHeight
      const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500

        if (progress < 1) {
          el.scrollTop = (endScrollTop - beginValue) * easeInOutCubic(progress) + beginValue
          rAF(frameFunc)
        } else {
          el.scrollTop = endScrollTop
        }
      }
      rAF(frameFunc)
    }
  }
}
</script>
