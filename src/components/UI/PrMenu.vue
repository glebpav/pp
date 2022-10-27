<template>
  <div class="menu-margin">
    <div v-for="componentInfo in componentsInfo" :key="componentInfo.id">
      <menu-component
          :component-info="componentInfo"
          :selected-page="selectedPage"
          @change-page="changePage(componentInfo.id)"
      ></menu-component>
    </div>
  </div>
</template>

<script>
import MenuComponent from "@/components/UI/MenuComponent";

export default {
  name: "PrMenu",
  components: {MenuComponent},
  props: {
    selectedPage: {
      type: Number,
    },
    componentsInfo: {
      type: Object,
    }
  },
  data() {
    return {

    }
  },
  methods: {
    changePage(id) {
      this.$emit('changePage', id)
    }
  }
}
</script>

<style scoped>
.menu-margin {
  margin-top: 30px;
}
</style>