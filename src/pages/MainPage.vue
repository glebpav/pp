<template>
  <el-container>

    <el-header height="80px" class="my-header">
      <pr-header
          :page-header-info="pages[selectedPage].pageHeaderInfo"
          :selected-page="selectedPage"
          @changeMenuVisibility="changeMobileMenuVisibility"></pr-header>
    </el-header>

    <Transition>
      <MobileMenu
          v-show="mobileMenuVisibility"
          :selected-page="selectedPage"
          :components-info="getMenuInfo()"
          @change-page="changePage"/>
    </Transition>

    <el-container>
      <el-aside v-show="windowWidth > 776" width="80px">
        <pr-menu
            :selected-page="selectedPage"
            :components-info="getMenuInfo()"
            @change-page="changePage"
        ></pr-menu>
      </el-aside>
      <el-main>
        <page-content-block
            :selected-page="selectedPage"
        />
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
import PrHeader from "@/components/UI/PrHeader";
import PrMenu from "@/components/UI/PrMenu";
import MainBlock from "@/components/PageContentBlock";
import PageContentBlock from "@/components/PageContentBlock";
import MobileMenu from "@/components/MobileMenu";

export default {
  name: "HomePage",
  components: {MobileMenu, PageContentBlock, MainBlock, PrMenu, PrHeader},
  data() {
    return {
      userToken: "sdflkgjcvv23jbl3",
      selectedPage: 0,
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
      ],
      windowWidth: window.innerWidth,
      mobileMenuVisibility: false,
    }
  },
  methods: {
    changeMobileMenuVisibility(visibility) {
      this.mobileMenuVisibility = visibility
    },
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
    },
    onResize() {
      this.windowWidth = window.innerWidth

      if (this.windowWidth > 776) this.mobileMenuVisibility = false
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

body {
  background: #FFFFFF;
}

.my-header {
  padding: 10px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>