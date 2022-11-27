<template>
  <Transition>
    <home-container v-if="selectedPage === 0"/>
    <profile-content v-else-if="selectedPage === 1"/>
    <projects-content v-else-if="selectedPage === 2"/>
    <peoples-content v-else-if="selectedPage === 3"/>
  </Transition>
  <div v-if="selectedPage === 1">

  </div>
</template>

<script>
import HomeContainer from "@/components/HomeContainer";
import ProfileContent from "@/components/ProfileContent";
import PeoplesContent from "@/components/PeoplesContent";
import ProjectsContent from "@/components/ProjectsContent";

export default {
  name: "PageContentBlock",
  components: {ProjectsContent, PeoplesContent, ProfileContent, HomeContainer},
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