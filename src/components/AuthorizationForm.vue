<template>
  <el-form
      ref="formEl"
      :rules="rules"
      :model="formInputs"
      :label-position="'top'"
      label-width="100px"
      style="max-width: 460px"
  >
    <h5 class="left-format">
      Welcome back
    </h5>
    <el-divider>
      <el-icon>
        <OfficeBuilding/>
      </el-icon>
    </el-divider>
    <el-form-item prop="login">
      <el-input
          required
          placeholder="Login"
          v-model="formInputs.login"
          clearable/>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
          required
          placeholder="Password"
          type="password"
          v-model="formInputs.password"
          clearable
          show-password
      />
    </el-form-item>
    <div class="left-format">
      <el-button
          type="primary"
          round
          @click="submitForm(this.$refs.formEl)"
      />
    </div>
  </el-form>
</template>

<script>

export default {
  name: "AuthorizationForm",
  data() {
    return {
      formInputs: {
        login: "",
        password: "",
      },
      rules: {
        login: {
          required: true,
          message: 'Please input Login',
          trigger: 'blur'
        },
        password: {
          required: true,
          message: 'Please input Password',
          trigger: 'blur'
        }
      }
    }
  },
  methods: {
    submitForm(formEl) {
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!')
          return false
        }
      })
    }
  }
}
</script>


<style scoped>
.left-format {
  margin: auto;
  padding: 5px 0;
}
</style>