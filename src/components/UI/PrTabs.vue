<template>
  <a class="tabs-holder">
    <tab-tile
        v-for="tab in tabsList"
        :key="tab.idx"
        :tab="tab"
        @changeTab="changeTab"
        :isSelected="tab.idx === selectedTab">
    </tab-tile>
  </a>
</template>

<script>
import TabTile from "@/components/UI/TabTile";

export default {
  name: "PrTabs",
  components: {TabTile},
  props: {
    selectedTab: {
      type: Number
    },
    tabsList: {
      type: Array
    }
  },
  methods: {
    changeTab(tabIdx) {
      this.$emit('changeTab', tabIdx)
    }
  }
}
</script>

<style scoped>
.tabs-holder {
  width: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>