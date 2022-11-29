<template>
  <el-row class="content-padding" :class="{'content-min-padding': smallViewPort}" :gutter="20">
    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
      <el-row ref="imgBlock">
        <el-col :xs="10" :sm="24" :md="24" :lg="24" :xl="24">
          <img class="profile-img" :src="user.logoSrc"/>
        </el-col>
        <el-col :xs="14" :sm="24" :md="24" :lg="24" :xl="24">
          <fio-holder>{{ user.name }}</fio-holder>
          <el-button class="edit-button">Редактировать</el-button>
        </el-col>
      </el-row>
    </el-col>
    <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
      <div class="card card-size" ref="infoBlock">
        <double-text-line :strong-text="'Учебное заведение:'" :text="user.institution"/>
        <double-text-line :strong-text="'Статус:'" :text="user.status"/>
        <double-text-line :strong-text="'О себе:'" :text="user.bio"/>
        <div>
          <double-text-line :strong-text="'Стек технологий: '" :text="''"/>
          <div class="row tech-size">
            <pr-tag v-for="tag in user.technologyStack" :key="tag">{{ tag }}</pr-tag>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-row class="content-padding" :class="{'content-min-padding': smallViewPort}" :gutter="20">
    <el-col :span="24">
      <div class="card second-card"></div>
    </el-col>
  </el-row>

</template>

<script>
import DoubleTextLine from "@/components/UI/DoubleTextLine";
import PrTag from "@/components/UI/PrTag";
import FioHolder from "@/components/UI/FioHolder";

export default {
  name: "ProfileContent",
  components: {FioHolder, PrTag, DoubleTextLine},
  props: {
    userToken: {
      type: String
    }
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      imgBlockHeight: 0,
      smallViewPort: false,
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
      this.matchHeight();
      this.onResize();
    },
    onResize() {
      this.windowWidth = window.innerWidth;

      this.smallViewPort = this.windowWidth < 500;

      if (this.windowWidth < 767) {
        this.$refs.infoBlock.style.height = 'auto';
      } else {
        this.matchHeight();
      }
    },
    matchHeight() {
      this.imgBlockHeight = this.$refs.imgBlock.$el.clientHeight;
      console.log((this.imgBlockHeight))
      this.$refs.infoBlock.style.height = this.imgBlockHeight + 'px';
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
    this.matchHeight()
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
  padding: 20px 20px;
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
  padding: 10px 50px;
}

.content-min-padding {
  padding: 10px 10px;
}

.tech-size {
  max-width: 270px;
}

.edit-button {
  background: #f5f5f5;
  width: 20vw;
  min-width: 100px;
  margin: 5px 0;
  border: solid 1.5px;
}

.second-card {
  width: 100%;
  margin: 10px 0;
  padding: 0;
}
</style>