<template>
  <Transition>
    <home-content v-if="selectedPage === 0"/>
    <profile-content v-else-if="selectedPage === 1"/>
    <projects-content v-else-if="selectedPage === 2"/>
    <peoples-content v-else-if="selectedPage === 3"/>
  </Transition>
  <div v-if="selectedPage === 1">

  </div>
</template>

<script>
import ProfileContent from "@/components/pagesContent/ProfileContent";
import PeoplesContent from "@/components/pagesContent/PeoplesContent";
import ProjectsContent from "@/components/pagesContent/ProjectsContent";
import HomeContent from "@/components/pagesContent/HomeContent";

export default {
  name: "PageContentBlock",
  components: {HomeContent, ProjectsContent, PeoplesContent, ProfileContent},
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