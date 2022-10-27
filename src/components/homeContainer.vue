<template>
  <desktop-greeting-page class="centered-vertical" v-if="!isMobile()"></desktop-greeting-page>
  <mobile-greeting-page class="centered-vertical" v-else></mobile-greeting-page>
</template>

<script>
export default {
  name: "homeContainer",
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  }
}
</script>

<style scoped>

</style>