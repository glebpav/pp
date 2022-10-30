<template>

  <div class="greeting-page-root">

    <el-row>
      <el-col :span="12">
        <div class="greeting-text-holder">
          <h1 class="title-text">Проектная практика</h1>
          <p class="sub-title-text">пока одни разговаривают, другие делают </p>

          <el-divider class="my-el-divider"/>

          <p class="sub2-title-text">Почему пп это круто?</p>
          <p class="sub2-title-text">факт 1 длинное длинное описание длинное длинное описание длинное длинное описание
            длинное длинное описание длинное длинное описаниедлинное длинное описание длинное длинное описание</p>

          <el-divider class="my-el-divider"/>

          <p class="sub2-title-text">Почему пп это круто?</p>
          <p class="sub-title-text">факт 1 длинное длинное описание длинное длинное описание длинное длинное описание
            длинное длинное описание длинное длинное описаниедлинное длинное описание длинное длинное описание</p>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
      <el-col :span="10">
        <greeting-card/>
      </el-col>
    </el-row>

  </div>

</template>

<script>


import GreetingCard from "@/components/GreetingCard";

export default {
  name: "desktopGreetingPage",
  components: {GreetingCard},
}
</script>

<style scoped>
.greeting-page-root {
  margin: 0;
  padding: 100px 100px;
}

.title-text {
  margin-bottom: 5px;
}

.sub-title-text {
  margin-top: 5px;
  margin-bottom: 100px;
}

.sub2-title-text {
  margin-top: 5px;
  margin-bottom: 8px;
}

.greeting-text-holder {
  padding-right: 60px;
}

.my-el-divider {
  max-width: 250px;

}
</style>