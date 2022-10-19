<template>

  <desktop-greeting-page v-if="!isMobile()"></desktop-greeting-page>
  <mobile-greeting-page v-else></mobile-greeting-page>

<!--  <div class="root">-->
<!--    <h1> This is greeting page </h1>-->
<!--    <router-link to="/auth">Registration</router-link>-->
<!--  </div>-->
</template>

<script>

import DesktopGreetingPage from "@/components/desktopComponents/desktopGreetingPage";
import MobileGreetingPage from "@/components/mobileComponents/mobileGreetingPage";

export default {
  name: "Main",
  components: {DesktopGreetingPage, MobileGreetingPage},
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  }
}
</script>

<style scoped>

</style>