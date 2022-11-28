<template>
  <el-row class="unselectable menu-item">
    <el-col :span="1">
      <Transition name="fade">
        <img v-if="isSelected()" src="@/assets/menuComponentRectangle.svg"/>
      </Transition>
    </el-col>
    <el-col :span="23">
      <div class="relative-box full-size">
        <el-row>
          <el-col :span="12">
            <div class="relative-box">
              <div class="align-center-vertical pointer"
                   :class="isSelected(componentInfo) ? 'selected-icon' : ''"
                   @click="changePage">
                <div class="relative-box">
              <span class="align-center-vertical align-center-horizontal icon-size material-symbols-outlined">
              {{ componentInfo.icon }}
              </span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <p class="menu-item-text align-center-vertical"
               :class="isSelected() ? 'selected-title' : ''">{{ componentInfo.menuTitle }}</p>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "MenuComponentMobile",
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
      return this.componentInfo.id === this.selectedPage
    },
    changePage() {
      this.$emit('changePage', this.componentInfo.id)
    }
  }
}
</script>

<style scoped>

.relative-box {
  position: relative;
  height: 68px;
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

.align-center {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}

.selected-icon {
  color: #409eff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.full-size {
  width: 100%;
  height: 68px;
}

.empty-plug {
  height: 64px;
}

.pointer {
  cursor: pointer;
}

.unselectable {
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}

.menu-item {
  width: 150px;
}

.align-center-vertical {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>