<template>
  <!--  <el-autocomplete-->
  <!--      v-model="state"-->
  <!--      :fetch-suggestions="querySearch"-->
  <!--      popper-class="my-autocomplete"-->
  <!--      placeholder="Please input"-->
  <!--      @select="handleSelect"-->
  <!--      class="full-width"-->
  <!--  >-->
  <!--    <template #suffix>-->
  <!--      <el-icon class="el-input__icon" @click="handleIconClick">-->
  <!--        <edit />-->
  <!--      </el-icon>-->
  <!--    </template>-->
  <!--    <template #default="{ item }" class="full-width">-->
  <!--      <div class="value">{{ item.value }}</div>-->
  <!--      <span class="link">{{ item.link }}</span>-->
  <!--    </template>-->
  <!--  </el-autocomplete>-->
  <input class="my-input" placeholder="input here...">
</template>

<script>
export default {
  name: "PrSearch"
}
</script>

<style scoped>
el-autocomplete {

}

.my-autocomplete li {
  padding: 7px;
  width: 100%;
  display: block;
}

.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}

.my-autocomplete li .addr {
  font-size: 12px;
  color: #b4b4b4;
}

.my-autocomplete li .highlighted .addr {
  color: #ddd;
}

.my-input {
  border-radius: 5px;
  border: 0;
  width: 100%;
  padding: 10px;
  background: rgba(37, 63, 84, 0.07);
  -webkit-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  -moz-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
}
</style>