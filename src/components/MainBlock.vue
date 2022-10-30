<template>
  <div v-if="selectedPage === 0">
    <HelloWorld
    :/>
  </div>
  <div v-if="selectedPage === 1">

  </div>
</template>

<script>
export default {
  name: "MainBlock",
  props: {
    selectedPage: {
      type: Number
    }
  }
}
</script>

<style scoped>

</style>