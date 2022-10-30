<template>

  <div class="row full-size">
    <div class="block">
      <div class="round-card relative-box">
      <span class="material-symbols-outlined accent-icon centered">
        {{ cardInfo.icon }}
      </span>
      </div>
    </div>
    <div class="block full-height">
      <div class="inner-block text-title full-height centered-text">
        <strong>{{ cardInfo.title }}</strong>
      </div>
    </div>
  </div>

  <div class="card">
    <el-row :gutter="40">
      <el-col :span="8" v-for="col in cardInfo.cardContent" :key="col.id">
        <span class="material-symbols-outlined accent-icon">
          {{ col.icon }}
        </span>
        <div class="card-text text-title"><strong>{{ col.title }}</strong></div>
        <div class="card-text">{{ col.body }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TripleCard",
  props: {
    cardInfo: {
      type: Object
    }
  }
}
</script>

<style scoped>
.card {
  background: #FFFFFF;
  border-radius: 13px;
  padding: 20px 40px;
  -webkit-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  -moz-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
}

.round-card {
  background: #FFFFFF;
  border-radius: 20px;
  height: 40px;
  width: 40px;
  margin: 10px 0;
  -webkit-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  -moz-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
  box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.07);
}

.card-text {
  line-height: 24px;
  font-size: 14px;
  margin-top: 6px;
}

.text-title {
  font-size: 16px;
}

.accent-icon {
  font-size: 32px;
  color: #409eff;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}

.row {
  width: 100%;
  margin: 0 auto;
}

.block {
  vertical-align: text-top;
  display: inline-block
}

.relative-box {
  position: relative;
}

.full-size {
  width: 100%;
  height: 64px;
}

.full-height {
  height: 64px;
  width: 400px;
}

.centered-text {
  margin-left: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
}

</style>