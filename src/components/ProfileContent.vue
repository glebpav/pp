<template>
<el-row class="content-padding" :gutter="20">
  <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
    <el-col>
      <el-row :xs="4" :sm="24" :md="24" :lg="24" :xl="24">
        <img v-if="user != null" class="profile-img" :src="user.logoSrc"/>
      </el-row>
      <el-row v-if="user != null" :xs="20" :sm="24" :md="24" :lg="24" :xl="24">
      </el-row>
    </el-col>
  </el-col>
  <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
    <div class="card">
      <double-text-line :strong-text="'Учебное заведение: '" :text="user.institution"/>
      <double-text-line :strong-text="'Статус: '" :text="user.status"/>
      <double-text-line :strong-text="'О себе: '" :text="user.bio"/>
      <div>
        <double-text-line :strong-text="'Стек технологий: '" :text="''"/>
        <div class="row">
          <pr-tag class="block" v-for="tag in user.technologyStack" :key="tag">{{ tag }}</pr-tag>
        </div>
      </div>
    </div>
  </el-col>
</el-row>
</template>

<script>
import DoubleTextLine from "@/components/UI/DoubleTextLine";
import PrTag from "@/components/UI/PrTag";
export default {
  name: "ProfileContent",
  components: {PrTag, DoubleTextLine},
  props: {
    userToken: {
      type: String
    }
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      user: {},
    }
  },
  methods: {
    fetchUser() {
      // fetching user by userToken
      this.user.logoSrc = require("@/assets/userLogoSample.png")
      this.user.name = "Зубенко Михаил Петрович"
      this.user.institution = "НИЯУ МИФИ"
      this.user.status = "руководитель"
      this.user.bio = "дорогу осилит идущий"
      this.user.technologyStack = ["Python", "DataScience", "Java", "SpringBoot", "R", "Judo"]

    },
    onResize() {
      this.windowWidth = window.innerWidth
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
    this.fetchUser();
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
}
</script>

<style scoped>
.card {
  min-height: 20vw;
  background: #FFFFFF;
  border-radius: 13px;
  padding: 20px 40px;
  -webkit-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  -moz-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
}

.profile-img {
  border-radius: 10vw;
  width: 20vw;
  height: 20vw;
}

.content-padding {
  padding: 30px 50px;
}

</style>