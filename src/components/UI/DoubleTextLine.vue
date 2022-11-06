<template>
  <div class="row text-line">
    <div class="block strong-text-size">
      <strong> {{ strongText }} </strong>
    </div>
    <div class="block">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DoubleTextLine",
  props: {
    strongText: {
      type: String,
    },
    text: {
      type: String,
    }
  }
}
</script>

<style scoped>

.row {
  width: 100%;
  margin: 0 auto;
}

.block {
  vertical-align: text-top;
  display: inline-block
}

.text-line {
  margin: 15px 0;
}

.strong-text-size {
  margin-right: 10px;
}

</style>