<template>
  <div class="relative-box">
    <div class="absolute black-bg" @click="closeMenu"></div>
    <div class="absolute menu-box">
      <div class="menu-box">
        <div v-for="componentInfo in componentsInfo" :key="componentInfo.id">
          <menu-component-mobile
              :component-info="componentInfo"
              :selected-page="selectedPage"
              @change-page="changePage(componentInfo.id)"
          ></menu-component-mobile>
        </div>
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
    },
    closeMenu() {
      this.$emit('closeMenu')
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

.menu-box {
  background: #f4f4f4;
  height: 3000px;
}

.black-bg {
  height: 3000px;
  width: 100vw;
  background: rgba(107, 119, 140, 0.67);
}

</style>