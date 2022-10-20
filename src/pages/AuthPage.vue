<template>
  <div class="root1">
    <el-card class="tabsAuth">
      <el-tabs :tab-position="top" class="demo-tabs">
        <el-tab-pane label="Authorization">
          <AuthorizationForm/>
        </el-tab-pane>
        <el-tab-pane label=" Registration ">
          <RegistrationForm/>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>

import AuthorizationForm from "@/components/AuthorizationForm";
import RegistrationForm from "@/components/RegistrationForm";

export default {
  name: "AuthPage",
  components: {RegistrationForm, AuthorizationForm},
  data() {
    return {};
  }
}
</script>
<style scoped>
.tabsAuth {
  margin: 50px auto auto;
  width: 350px;
}
.demo-tabs > .el-tabs__content {
  padding: 20px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.el-tabs--right .el-tabs__content,
.el-tabs--left {
  height: 100%;
  width: 50%;
}
body {
  min-height: 100vh;
  background-image: radial-gradient(
      circle 621px at 25.3% 13.8%,
      rgba(255, 255, 255, 1) 0%,
      rgba(234, 236, 255, 1) 90%
  );
  margin-top: 50px;
  font-family: "Roboto", sans-serif;
}
</style>