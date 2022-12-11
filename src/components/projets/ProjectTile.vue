<template>
  <div v-show="windowWidth > 700" ref="projectCard" class="card card-margin">
    <el-row class="card-size">
      <el-col :span="16">
        <div class="padding-left">
          <p class="project-theme">{{ project.theme }}</p>
          <div class="row tags-row">
            <pr-tag :color="mentorColor" class="tag-width">{{ project.mentor }}</pr-tag>
            <pr-tag v-for="tag in project.students" :color="studentColor" :key="tag" class="tag-width">{{
                tag
              }}
            </pr-tag>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <img ref="leftImg" class="img-right align-center-vertical align-right" :src="project.imgSrc" alt="">
      </el-col>
    </el-row>
  </div>
  <div v-show="windowWidth <= 700" ref="projectCardMobile" class="card card-margin">
    <img ref="topImg" class="mobile-img" :src="project.imgSrc" alt="">
    <div class="box-padding">
      <p class="project-theme-mobile">{{ project.theme }}</p>
      <div class="row tags-row">
        <pr-tag :color="mentorColor" class="tag-width">{{ project.mentor }}</pr-tag>
        <pr-tag v-for="tag in project.students" :color="studentColor" :key="tag" class="tag-width">{{ tag }}</pr-tag>
      </div>
    </div>
  </div>
</template>

<script>
import PrTag from "@/components/UI/PrTag";

export default {
  name: "ProjectTile",
  components: {PrTag},
  props: {
    project: {
      type: Object,
    }
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      console.log("here")
      this.matchHeight();
    },
    matchHeight() {
      if (this.windowWidth > 700) {
        this.imgBlockHeight = this.$refs.projectCard.clientHeight;
        console.log((this.imgBlockHeight))
        this.$refs.leftImg.style.height = this.imgBlockHeight + 'px';
      } else {
        this.imgBlockWidht = this.$refs.projectCardMobile.clientWidth;
        console.log((this.imgBlockWidht))
        this.$refs.topImg.style.width = this.imgBlockWidht + 'px';
      }
    }
  }
  ,
  data() {
    return {
      windowWidth: window.innerWidth,
      studentColor: "#59C932",
      mentorColor: "#9747FF"
    }
  }
  ,
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
    this.matchHeight()
  }
  ,

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  }
  ,
}
</script>

<style scoped>
.card {
  background: #FFFFFF;
  border-radius: 13px;
  height: auto;
  -webkit-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  -moz-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
}

.card-margin {
  margin: 10px 0;
}

.card-size {
  min-height: 160px;
}

.align-center-horizontal {
  height: 30px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -0%);
}


.align-center-vertical {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.align-right {
  right: 0;
}

.padding-left {
  padding-left: 20px;
}

.img-right {
  object-fit: cover;
  height: 150px;
  max-width: 200px;
  border-radius: 0 13px 13px 0;
}

.project-theme {
  font-size: 24px;
  height: auto;
}

.project-theme-mobile {
  font-size: 20px;
}

.tags-row {

}

.mobile-img {
  height: 150px;
  object-fit: cover;
  border-radius: 13px 13px 0 0;
}

.box-padding {
  padding: 20px;
}
</style>