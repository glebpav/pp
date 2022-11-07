<template>

  <div class="card card-margin">
    <el-row>
      <el-col :span="3">
        <el-avatar :src="person.logoSrc" :size="50"></el-avatar>
      </el-col>
      <el-col :span="8" class="relative">
        <div class="align-center-vertical">
          <strong>{{ person.name }}</strong>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="relative">
          <div class="row tech-size align-center-vertical">
            <pr-tag v-for="tag in person.technologyStack" :key="tag" class="tag-width">{{ tag }}</pr-tag>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="relative">
          <el-button class="align-center-vertical align-right" type="primary" :icon="Search" plain>Search</el-button>
        </div>
      </el-col>
    </el-row>
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
  }
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

.relative-box {
  height: 100%;
  position: relative;
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
</style>