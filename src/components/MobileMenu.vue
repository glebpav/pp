<template>
  <div class="relative-box">
    <div class="absolute">
      <div v-for="componentInfo in componentsInfo" :key="componentInfo.id">
        <menu-component-mobile
            :component-info="componentInfo"
            :selected-page="selectedPage"
            @change-page="changePage(componentInfo.id)"
        ></menu-component-mobile>
      </div>
    </div>
  </div>
</template>

<script>
import MenuComponentMobile from "@/components/UI/MenuComponentMobile";
export default {
  name: "MobileMenu",
  components: {MenuComponentMobile},
  props: {
    selectedPage: {
      type: Number,
    },
    componentsInfo: {
      type: Object,
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

.relative-box {
  position: relative;
  z-index: 10;
}

.absolute {
  position: absolute;
  height: 100%;
}

</style>