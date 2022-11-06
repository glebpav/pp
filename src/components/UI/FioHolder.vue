<template>
  <div class="holder-size">
    <div class="row block-margin">
      <div class="block block-margin">
        <img class="name-rectangle" src="@/assets/profileNameRectangle.svg"/>
      </div>
      <div class="block block1-margin">
        <strong>
          <slot></slot>
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FioHolder"
}
</script>

<style scoped>
.row {
  position: relative;
}

.block {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.holder-size {
  width: 100%;
  height: 40px;
  margin: 10px 0;
}

.name-rectangle {
}

.block-margin {
  margin-right: 10px;
  height: 32px;
  width: auto;
}

.block1-margin {
  margin-left: 15px;
}
</style>