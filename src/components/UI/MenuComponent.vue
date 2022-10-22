<template>
  <el-row>
    <el-col :span="1">
      <img v-if="isSelected()" src="@/assets/menuComponentRectangle.svg"/>
      <div v-else class="empty-plug"></div>
    </el-col>
    <el-col :span="23">
      <div class="relative-box full-size">
        <div class="align-center" :class="isSelected() ? 'selected-icon' : ''">
          <div class="relative-box">
              <span class="align-center-horizontal icon-size material-symbols-outlined"
                    >
              {{ componentInfo.icon }}
              </span>
          </div>
          <p class="menu-item-text"
             :class="isSelected() ? 'selected-title' : ''">{{ componentInfo.title }}</p>
        </div>
      </div>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: "MenuComponent",
  props: {
    componentInfo: {
      type: Object,
    },
    selectedPage: {
      type: Number
    }
  },
  methods: {
    isSelected() {
      console.log(this.componentInfo.id === this.selectedPage)
      return this.componentInfo.id === this.selectedPage
    }
  }
}
</script>

<style scoped>

.relative-box {
  position: relative;
  height: 30px;
}

.align-center-horizontal {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -0%);
}


.menu-item-text {
  text-align: center;
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 0;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

.selected-icon {
  color: #409eff;
}

.align-center {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}

.full-size {
  width: 100%;
  height: 100%;
}

.empty-plug{
  height: 64px;
}
</style>