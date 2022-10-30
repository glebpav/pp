<template>
  <el-container>

    <el-header height="80px" class="my-header">
      <pr-header
          :page-header-info="pages[selectedPage].pageHeaderInfo"
          :selected-page="selectedPage"></pr-header>
    </el-header>

    <el-container>
      <el-aside width="80px">
        <pr-menu
            :selected-page="selectedPage"
            :components-info="getMenuInfo()"
            @change-page="changePage"
        ></pr-menu>
      </el-aside>
      <el-main>
        <main-block
          :selected-page="selectedPage"
        />
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
import PrHeader from "@/components/UI/PrHeader";
import PrMenu from "@/components/UI/PrMenu";
import MainBlock from "@/components/MainBlock";

export default {
  name: "HomePage",
  components: {MainBlock, PrMenu, PrHeader},
  data() {
    return {
      selectedPage: 1,
      pages: [
        {
          id: 0,
          pageHeaderInfo: {
            title: "Домашняя страница",
          },
          pageMenuInfo: {
            icon: 'home',
            menuTitle: 'Домой',
          }
        },
        {
          id: 1,
          pageHeaderInfo: {
            title: "Профиль",
          },
          pageMenuInfo: {
            icon: 'person',
            menuTitle: 'Профиль',
          }
        },
        {
          id: 2,
          pageHeaderInfo: {
            title: 'Проекты',
          },
          pageMenuInfo: {
            icon: 'handyman',
            menuTitle: 'Проекты',
          }
        },
        {
          id: 3,
          pageHeaderInfo: {
            title: 'Менторы',
          },
          pageMenuInfo: {
            icon: 'group',
            menuTitle: 'Менторы'
          }
        }

        ,
      ]
    }
  },
  methods: {
    getMenuInfo() {
      const menuInfo = [];
      this.pages.forEach((page) => {
        menuInfo.push({
          id: page.id,
          icon: page.pageMenuInfo.icon,
          menuTitle: page.pageMenuInfo.menuTitle,
        })
      })
      return menuInfo
    },
    changePage(id) {
      this.selectedPage = id
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