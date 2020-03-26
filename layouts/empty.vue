<template functional>
  <div class="container-layouts">
    <div class="layout-wrapper bg-purple-dark">
      <div class="header">
        Vue-chat
      </div>
      <div class="layout-main">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Empty'
}
</script>

<style scoped>
  html, body {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    height: 100%;
  }
  .layout-wrapper {
    height: 100%;
  }
  .layout-main {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .container-layouts {
    height: 100vh;
    width: 100%;
  }
  .header {
    width: 100%;
    height: 7%;
    color: #F5F5F5;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    background: #47494E;
    padding: 1rem;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
</style>
