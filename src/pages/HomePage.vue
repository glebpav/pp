<template>
  <el-container>

    <el-header height="80px" class="my-header">
      <pr-header
          :page-header-info="pages[selectedPage].pageHeaderInfo"
          :selected-page="selectedPage" ></pr-header>
    </el-header>

    <el-container>
      <el-aside width="80px">
        <pr-menu :selected-page="selectedPage"></pr-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>

  </el-container>
</template>

<script>
import PrHeader from "@/components/UI/PrHeader";
import PrMenu from "@/components/UI/PrMenu";

export default {
  name: "HomePage",
  components: {PrMenu, PrHeader},
  data() {
    return {
      selectedPage: 0,
      pages: [
        {
          pageHeaderInfo: {
            title: "Домашняя страница",
          }
        },
        {
          pageHeaderInfo: {
            title: "Профиль",
          }
        },
      ]

    }
  }
}
</script>

<style scoped>

body {
  background: #FFFFFF;
}

.my-header {
  padding: 10px;
}

</style>