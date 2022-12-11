<template>
  <pr-tabs
      :tabs-list="tabsList"
      :selected-tab="selectedTab"
      @change-tab="changeTab"
  ></pr-tabs>

  <div :class="smallViewPort ? 'content-min-padding' : 'padding-box'">
    <transition name="fade">
      <projects-list v-if="selectedTab === 0"></projects-list>
      <project-in-process v-else-if="selectedTab === 1"></project-in-process>
    </transition>
  </div>

</template>

<script>
import PrTabs from "@/components/UI/PrTabs";
import ProjectsList from "@/components/projets/ProjectsList";
import ProjectInProcess from "@/components/projets/ProjectInProcess";

export default {
  name: "ProjectsContent",
  components: {ProjectInProcess, ProjectsList, PrTabs},
  data() {
    return {
      selectedTab: 0,
      tabsList: [
        {
          idx: 0,
          content: "все",
        }, {
          idx: 1,
          content: "текущий",
        }
      ],
      smallViewPort: false,
      windowWidth: 0,
    }
  },
  methods: {
    changeTab(tabIdx) {
      this.selectedTab = tabIdx
    },
    onResize() {
      this.windowWidth = window.innerWidth;
      this.smallViewPort = this.windowWidth < 500;
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.content-min-padding {
  padding: 10px 7px;
}

.padding-box {
  padding: 10px 7%;
}

</style>