<template>
<div class="content-padding">
  <pr-search class="input-margin"/>
  <person-tile v-for="person in listPeople" :person="person"/>
</div>
</template>

<script>
import PrSearch from "@/components/UI/PrSearch";
import ProfileContent from "@/components/pagesContent/ProfileContent";
import PersonTile from "@/components/UI/PersonTile";
export default {
  name: "PeoplesContent",
  components: {PersonTile, ProfileContent, PrSearch},
  data() {
    return {
      listPeople: [],
    }
  },
  methods: {
    fetchPeople() {
      let user = {
        name: "Алексей Егоров",
        institution: "НИЯУ МИФИ",
        logoSrc: require("@/assets/Ellipse4.png"),
        technologyStack: ["Python", "DataScience", "Java", "SpringBoot", "R", "Judo"],
      }
      this.listPeople.push(user)
      user = {
        name: "Анна Бучинская",
        institution: "НИЯУ МИФИ",
        logoSrc: require("@/assets/Ellipse6.png"),
        technologyStack: ["Python", "DataScience", "Java", "SpringBoot", "R", "Judo"],
      }
      this.listPeople.push(user)
      user = {
        name: "Аделя Хасанова",
        institution: "НИЯУ МИФИ",
        logoSrc: require("@/assets/Ellipse5.png"),
        technologyStack: ["Python", "DataScience", "Java", "SpringBoot", "R", "Judo"],
      }
      this.listPeople.push(user)
      user = {
        name: "Михаил Портнов",
        institution: "НИЯУ МИФИ",
        logoSrc: require("@/assets/Ellipse 7.png"),
        technologyStack: ["Python", "DataScience", "Java", "SpringBoot", "Ядерная бомба", "R", "Judo"],
      }
      this.listPeople.push(user)
    }
  },
  mounted() {
    this.fetchPeople();
  },
}
</script>

<style scoped>
.content-padding {
  padding: 10px;
}
.input-margin {
  margin: 20px 0;
}
.full-width {
  width: 100%;
}
</style>