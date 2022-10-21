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
      Вход
    </h1>

    <div class="inputs-holder">
      <el-form-item prop="login">
        <el-input
            required
            placeholder="Логин"
            v-model="formInputs.login"
            clearable/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
            required
            placeholder="Пароль"
            type="password"
            v-model="formInputs.password"
            clearable
            show-password
        />
      </el-form-item>
      <p class="link-text">Забыли пароль?</p>
    </div>

    <div class="buttons-holder">
      <div class="right-format">

        <el-button
            round
            @click="goToRegistrationForm"
        >Нет аккаунта?</el-button>

        <el-button
            type="primary"
            round
            @click="submitForm(this.$refs.formEl)"
        >Войти
        </el-button>
      </div>
    </div>
  </el-form>
</template>

<script>

export default {
  name: "AuthorizationForm",
  data() {
    return {
      props: {
        typeOfAuth: {
          type: Number,
        }
      },
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
    goToRegistrationForm() {
      console.log("I want to out");
      this.$emit("changeForm", 1);
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

.right-format {
  position: absolute;
  right: 0;
}

.link-text {
  text-align: end;
  color: #409eff;
}

.inputs-holder {
  margin: 60px 0;
}

.buttons-holder {
  width: 100%;
  height: 40px;
  position: relative;
}


</style>