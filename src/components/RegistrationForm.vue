<template>

  <el-form
      :rules="rules"
      :label-position="'top'"
      label-width="100px"
      style="max-width: 460px"
  >
    <h5 class="left-format">
      Glad to see You
    </h5>
    <el-divider>
      <el-icon>
        <OfficeBuilding/>
      </el-icon>
    </el-divider>
    <el-form-item>
      <el-input
          v-model="login"
          placeholder="Login"
          clearable/>
    </el-form-item>
    <el-form-item>
      <el-input
          v-model="email"
          placeholder="Email"
          clearable/>
    </el-form-item>
    <el-form-item>
      <el-input
          v-model="fio"
          placeholder="Full Name"
          clearable/>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input
          type="password"
          v-model="formInputs.password"
          placeholder="Password"
          clearable
          show-password
      />
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input
          type="password"
          v-model="formInputs.checkPass"
          placeholder="Confirm"
          clearable
          show-password
      />
    </el-form-item>
    <div class="left-format">
      <el-button
          type="primary"
          round>
        Enter
      </el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {

      formInputs: {
        fio: "",
        login: "",
        password: "",
        checkPass: "",
        email: "",
      },
      rules: {
        pass: [{ validator: this.validatePass, trigger: 'blur' }],
        checkPass: [{ validator: this.validatePass2, trigger: 'blur' }],
      },
    }
  },
  methods: {
    validatePass (rule, value, callback) {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        callback()
      }
    },
    validatePass2 (rule, value, callback) {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.formInputs.pass) {
        callback(new Error("Two inputs don't match!"))
      } else {
        callback()
      }
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