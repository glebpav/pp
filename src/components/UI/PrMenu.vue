<template>
  <div class="menu-margin">
    <div v-for="componentInfo in components" :key="componentInfo.key">
      <menu-component :component-info="componentInfo" :selected-page="selectedPage"
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
    }
  },
  data() {
    return {
      components: [
        {
          id: 0,
          icon: 'home',
          title: 'Домой'
        },
        {
          id: 1,
          icon: 'person',
          title: 'Профиль'
        },
        {
          id: 2,
          icon: 'handyman',
          title: 'Проекты'
        },
        {
          id: 3,
          icon: 'group',
          title: 'Менторы'
        },
      ]
    }
  }
}
</script>

<style scoped>
.menu-margin {
  margin-top: 30px;
}
</style>