<template>
  <el-card>
    <div>
    <span class="material-symbols-outlined">
      {{cardContent.icon}}
    </span>
    </div>
    <el-row>
      <el-col :span="8" v-for="col in cardContent" :key="col.id">
        <p>{{ cardContent.body }}</p>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: "DesktopTripleCard",
  props: {
    title: {
      type: String
    },
    cardContent: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>