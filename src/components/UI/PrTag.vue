<template>
  <div class="row">
  <div class="point block" ref="tagPoint" :style="{background: pointColor()}"></div>
  <div class="block">
    <slot></slot>
  </div>
  </div>
</template>

<script>
export default {
  name: "PrTag",
  methods: {
    pointColor() {
      const colors = ['#3E9DF4', '#fdc601', '#22e8d0', '#d12121', '#FF8A00', '#2E64CE', '#2CC83C'];
      console.log(colors[Math.floor(Math.random() * colors.length)])
      return colors[Math.floor(Math.random() * colors.length)]
    }
  },
}
</script>

<style scoped>
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

</style>