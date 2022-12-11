<template>
  <a class="top-tab" @click="selectTab" :class="isSelected ? 'selected-tab' : 'tab'">
    {{tab.content}}
  </a>
</template>

<script>
export default {
  name: "TabTile",
  props: {
    isSelected: {
      type: Boolean
    },
    tab: {
      type: Object
    }
  },
  methods: {
    selectTab() {
      this.$emit('changeTab', this.tab.idx)
    }
  }
}
</script>

<style scoped>

.top-tab {
  margin: 0 10px;
  padding: 5px;
  cursor: pointer;
}

.selected-tab {
  border-bottom: solid #6b778c;
}

.tab {
  border-bottom-color: transparent;
  transition: border-bottom 1s;
}
</style>