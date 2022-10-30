<template>
  <desktop-home-page v-if="!isMobile()"></desktop-home-page>
  <desktop-home-page v-else></desktop-home-page>
</template>

<script>
import DesktopTripleCard from "@/components/desktopComponents/DesktopHomePage";
import DesktopHomePage from "@/components/desktopComponents/DesktopHomePage";
export default {
  name: "homeContainer",
  components: {DesktopHomePage, DesktopTripleCard},
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  },
}
</script>

<style scoped>

</style>