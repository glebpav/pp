<template>
  <div class="card card-right" >
    <h1 class="align-top">Вход</h1>
    <img class="logo-img center-horizontal" src="@/assets/logo.png"/>
    <router-link to="/auth">
      <el-button class="login-button center-horizontal" type="primary" round>Войти в систему</el-button>
    </router-link>
    <p class="link-text centered-text">Забыли пароль?</p>
    <p class="link-text bottom-text">Как получить доступ?</p>
  </div>
</template>

<script>
export default {
  name: "greetingCard"
}
</script>

<style scoped>
router-link el-button {
  color: #FFFFFF;
  text-decoration: none;
}

.card-right {
  position: relative;
  margin: auto;
  padding: 10%;
  max-width: 340px;
  height: 450px;
}

.logo-img {
  width: 60%;
  margin-top: 30%;
  margin-bottom: 30%;
}

.center-horizontal {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.centered-text {
  text-align: center;
}

.login-button {
  text-decoration: none;
  width: 80%;
  font-size: 16px;
}

.link-text {
  color: #409eff;
}

.bottom-text {
  position: absolute;
  bottom: 7%;
  left: 15%;
}

.align-top {
  margin-top: 0px;
}

.card {
  background: #FFFFFF;
  border-radius: 13px;
  padding: 20px 40px;
  -webkit-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  -moz-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
}
</style>