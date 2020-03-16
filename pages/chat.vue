<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="8" :offset="8">
          <ul>
            <li v-for="(message, id) in messages" :key="id">
              {{ message.text }}
            </li>
          </ul>
          <h1>CHAT PAGE {{ user.name }}</h1>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: ['chat'],
  name: 'Chat',
  computed: { ...mapState(['user']), ...mapState(['messages']) }
}
</script>

<style scoped>

</style>
