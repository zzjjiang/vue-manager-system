<template>
  <el-container style="height: 100%;">
    <el-aside width="200px"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside'
import CommonHeader from '../components/CommonHeader'
export default {
  components: {
    CommonAside,
    CommonHeader
  }
}
</script>

<style lang="scss" scoped></style>
