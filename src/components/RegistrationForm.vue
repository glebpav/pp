<template>

  <el-form
      ref="formEl"
      :rules="rules"
      :model="formInputs"
      :label-position="'top'"
      label-width="100px"
      style="max-width: 460px"
  >
    <h1 class="left-format">
      Регистрация
    </h1>

    <div class="inputs-holder">
      <el-form-item prop="login">
        <el-input
            v-model="formInputs.login"
            placeholder="Логин"
            clearable/>
      </el-form-item>
      <el-form-item prop="email">
        <el-input
            v-model="formInputs.email"
            placeholder="Почта"
            clearable/>
      </el-form-item>
      <el-form-item prop="fio">
        <el-input
            v-model="formInputs.fio"
            placeholder="Фамилия отчество"
            clearable/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
            type="password"
            v-model="formInputs.password"
            placeholder="Пароль"
            clearable
            show-password
        />
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
            type="password"
            v-model="formInputs.checkPass"
            placeholder="Подтвердить пароль"
            clearable
            show-password
        />
      </el-form-item>
    </div>
    <div class="buttons-holder">
      <el-button
          class="right-format"
          type="primary"
          round
          @click="submitForm(this.$refs.formEl)">
        Регистрация
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
        fio: {required: true, message: 'Please input fio', trigger: 'blur'},
        password: {validator: this.validatePass, trigger: 'blur'},
        checkPass: {validator: this.validatePass2, trigger: 'blur'},
        email: [
          {required: true, message: 'Please input email address', trigger: 'blur'},
          {type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change']}
        ],
        login: [
          {required: true, message: 'Please input Login', trigger: 'blur'},
          {min: 6, max: 20, message: 'Length should be 6 to 20', trigger: 'blur'},
        ],
      },
    }
  },
  methods: {
    validatePass(rule, value, callback) {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        callback()
      }
    },
    validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.formInputs.password) {
        callback(new Error("Two inputs don't match!"))
      } else {
        callback()
      }
    },
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

.inputs-holder {
  margin: 60px 0;
}

.buttons-holder {
  width: 100%;
  height: 40px;
  position: relative;
}

.right-format {
  position: absolute;
  right: 0;
}
</style>