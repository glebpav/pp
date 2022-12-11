<template>
  <div class="project-list" :class="smallViewPort ? 'content-min-padding' : 'padding-box'" v-for="project in projects">
    <project-tile
        :project="project"
        :key="project.idx">
    </project-tile>
  </div>
</template>

<script>
import ProjectTile from "@/components/projets/ProjectTile";

export default {
  name: "ProjectsList",
  components: {ProjectTile},
  data() {
    return {
      projects: null,
    }
  },
  methods: {
    fetchProjects() {
      return [
        {
          idx: 0,
          theme: "Разработка системы для ведения проектной практики",
          mentor: "Портнов",
          students: ["Павлюк", "Львов", "Мартыненко"],
          imgSrc: "https://mahadhi.com/wp-content/uploads/2021/01/programer-working-at-his-desk.jpg"
        }, {
          idx: 1,
          theme: "Определение пульса человека по видео",
          mentor: "Егоров",
          students: ["Мартыненко"],
          imgSrc: "https://projecttrade.ru/images/2.jpg"
        }, {
          idx: 2,
          theme: "Предсказание настроения Егорова А.Д. по постам в ТГ",
          mentor: "Бучинская",
          students: ["Павлюк", "Львов"],
          imgSrc: "https://www.mentoday.ru/upload/img_cache/38b/38b9eee47a37e09cc8ed2358afd382c0_ce_1500x1000x0x0_cropped_1332x888.jpg"
        }
      ]
    },
    onResize() {
      this.windowWidth = window.innerWidth;
      this.smallViewPort = this.windowWidth < 500;
    }
  },
  beforeMount() {
    this.projects = this.fetchProjects()
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
.project-list {
  margin-top: 20px;
}
</style>