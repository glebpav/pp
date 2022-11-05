<template>
<el-row class="content-padding" :gutter="20">
  <el-col :span="8">
    <el-col>
      <el-row :xs="4" :sm="24" :md="24" :lg="24" :xl="24">
        <el-avatar size="default"/>

      </el-row>
      <el-row :xs="20" :sm="24" :md="24" :lg="24" :xl="24">

      </el-row>
    </el-col>
  </el-col>
  <el-col :span="16">
    <div class="card">

    </div>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: "ProfileContent",
  props: {
    userToken: {
      type: String
    }
  },
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    }
  }

}
</script>

<style scoped>
.card {
  background: #FFFFFF;
  border-radius: 13px;
  padding: 20px 40px;
  -webkit-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  -moz-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
}

.content-padding {
  padding: 30px 50px;
}
</style>