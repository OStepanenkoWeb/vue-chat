<template>
  <el-container class="grid-content bg-purple-dark">
    <el-header>Header</el-header>
    <el-main>
     <nuxt/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Empty'
}
</script>

<style scoped>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 100vh;
  }
</style>
