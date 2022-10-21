<template>
  <el-container>
    <el-header class="my-header">
      <img class="logo-img center-horizontal" src="@/assets/logo.png"/>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
el-header {
  padding: 10px;
}
.my-header {
  padding: 30px;
}
</style>