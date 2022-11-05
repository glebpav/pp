<template>
  <Transition>
    <home-container v-if="selectedPage === 0"/>
    <profile-content v-else-if="selectedPage === 1"/>
  </Transition>
  <div v-if="selectedPage === 1">

  </div>
</template>

<script>
import HomeContainer from "@/components/HomeContainer";
import ProfileContent from "@/components/ProfileContent";

export default {
  name: "PageContentBlock",
  components: {ProfileContent, HomeContainer},
  props: {
    selectedPage: {
      type: Number
    }
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>