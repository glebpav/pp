<template>
  <div class="block">
    <div class="row">
      <div class="block relative-box point-size">
        <div class="point align-center-vertical" ref="tagPoint" :style="{background: pointColor()}"/>
      </div>
      <div class="block text-margin">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrTag",
  methods: {
    pointColor() {
      const colors = ['#3E9DF4', '#ff63f8', '#c73ef4', '#fdc601', '#22e8d0', '#d12121', '#FF8A00', '#2E64CE', '#2CC83C'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  },
}
</script>

<style scoped>
.point-size {
  width: 10px;
  height: 10px;
  margin: 0 5px;
}

.point {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

.row {
  width: 100%;
  margin: 0 auto;
}

.block {
  vertical-align: text-top;
  display: inline-block
}

.text-margin{
  margin-right: 10px;
}

.relative-box {
  position: relative;
  height: 18px;
}

.align-center-vertical {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>