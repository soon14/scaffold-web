<template>
  <div class="lottie-http401-container">
    <div class="lottie-http401">
      <div id="lottie_box" class="animation"/>
      <div class="bullshit">
        <div class="bullshit__oops">OOPS!</div>
        <div class="bullshit__headline">{{ message }}</div>
        <div class="bullshit__info">请联系相关领导或管理员</div>
        <a href="/" class="bullshit__return-home">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page401',
  computed: {
    message() {
      return '你没有权限去该页面'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$lottie.loadAnimation({
        container: document.getElementById(`lottie_box`), // Lottie的DOM元素
        renderer: 'svg', // 渲染出来是什么格式
        loop: true, // 循环播放
        autoplay: true, // 自动播放
        animationData: require('@/assets/lottie/401.json') // Lottie的json资源
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.lottie-http401-container {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 40%;
  left: 50%;
}

.lottie-http401 {
  position: relative;
  width: 1200px;
  padding: 0 50px;
  overflow: hidden;

  .animation {
    position: relative;
    float: left;
    width: 500px;
    margin-left: 5%;
    margin-top: 3%;
    overflow: hidden;
  }

  .bullshit {
    position: relative;
    float: left;
    width: 300px;
    padding: 30px 0;
    margin-left: 5%;
    margin-top: 10%;
    overflow: hidden;

    &__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }

    &__headline {
      font-size: 20px;
      line-height: 24px;
      color: #222;
      font-weight: bold;
      opacity: 0;
      margin-bottom: 10px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }

    &__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }

    &__return-home {
      display: block;
      float: left;
      width: 110px;
      height: 36px;
      background: #1482f0;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }

    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

  }
}
</style>
