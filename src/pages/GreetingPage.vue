<template>
  <desktop-greeting-page class="centered-vertical" v-if="!isMobile()"></desktop-greeting-page>
  <mobile-greeting-page class="centered-vertical" v-else></mobile-greeting-page>
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
.centered-vertical {
  margin: auto;
}
</style>