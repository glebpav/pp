<template>

  <div v-show="windowWidth > 700" class="card card-margin">
    <el-row>
      <el-col :span="3">
        <el-avatar :src="person.logoSrc" :size="50"></el-avatar>
      </el-col>
      <el-col :span="6">
        <div class="align-center-vertical">
          <strong>{{ person.name }}</strong>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="height-tech" ref="techBlock">
          <div class="row tech-size align-center-vertical">
            <pr-tag v-for="tag in person.technologyStack" :key="tag" class="tag-width">{{ tag }}</pr-tag>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <el-button class="align-center-vertical align-right" type="primary" :icon="Upload" plain>Пригласить</el-button>
      </el-col>
    </el-row>
  </div>
  <div v-show="windowWidth <= 700" class="card card-margin">
    <el-row>
      <el-col :span="6">
        <el-avatar :src="person.logoSrc" :size="50"></el-avatar>
      </el-col>
      <el-col :span="18">
        <div class="align-center-vertical">
          <strong>{{ person.name }}</strong>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="tech-margin">
          <div class="">
            <pr-tag v-for="tag in person.technologyStack" :key="tag" class="tag-width">{{ tag }}</pr-tag>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="relative-box">
      <el-button class="" type="primary" :icon="Upload" plain>Пригласить</el-button>
    </div>
  </div>
</template>

<script>
import PrTag from "@/components/UI/PrTag";
import {Delete, Edit, Search, Share, Upload} from '@element-plus/icons-vue'

export default {
  name: "PersonTile",
  components: {PrTag},
  props: {
    person: {
      type: Object,
    }
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  data() {
    return {
      windowWidth: window.innerWidth,
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
.card {
  background: #FFFFFF;
  border-radius: 13px;
  padding: 20px 20px;
  -webkit-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  -moz-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
}

.card-margin {
  margin: 10px 0;
}

.tech-margin {
  margin: 10px 0;
}

.relative-box {
  position: relative;
  height: 32px;
}

.align-center-horizontal {
  height: 30px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -0%);
}

.tech-size {
  max-width: 320px;
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

.align-left {
  left: 0;
}

.height-tech {
  height: 64px;
}
</style>