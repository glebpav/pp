<template>
  <el-row>
    <el-col :span="5" class="hidden-xs-only">
      <div class="relative-box">
        <img class="logo-img align-center-vertical" src="@/assets/logo.png" alt=""/>
      </div>
    </el-col>
    <el-col :span="14">
      <Transition mode="out-in">
        <h1 class="header-title" :key="pageHeaderInfo.title">{{ pageHeaderInfo.title }}</h1>
      </Transition>
    </el-col>
    <el-col :xs="6" :sm="4" :md="4" :lg="4" :xl="4">
      <div class="relative-box">
            <span class="align-right material-symbols-outlined">
            logout
            </span>
      </div>
    </el-col>
    <el-col :xs="4" :sm="1" :md="1" :lg="1" :xl="1">
      <div class="relative-box">
          <el-avatar class="align-center" :size="50"/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import 'element-plus/theme-chalk/display.css'

export default {
  name: "PrHeader",
  props: {
    pageHeaderInfo: {
      type: Object
    }
  },
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.relative-box {
  height: 100%;
  position: relative;
}
.header-title {
  margin-left: 20px;
}
.align-center-vertical {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.align-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.align-right {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
}
.logo-img {
  height: 40px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>