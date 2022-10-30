<template>
  <el-row>
    <el-col :span="4">
      <div class="relative-box">
        <img class="logo-img align-center-vertical" src="@/assets/logo.png" alt=""/>
      </div>
    </el-col>
    <el-col :span="18">
      <Transition name="fade" mode="out-in">
        <h1 :key="pageHeaderInfo.title">{{ pageHeaderInfo.title }}</h1>
      </Transition>
    </el-col>
    <el-col :span="1">
      <div class="relative-box">
            <span class="align-center-vertical material-symbols-outlined">
            logout
            </span>
      </div>
    </el-col>
    <el-col :span="1">
      <div class="relative-box">
        <div class="relative-box">
          <el-avatar class="align-center-vertical" :size="50"/>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "PrHeader",
  props: {
    pageHeaderInfo: {
      type: Object
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

.align-center-vertical {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
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