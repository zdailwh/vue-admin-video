<template>
  <div class="drama-content">
    <el-row :gutter="10">
      <el-col v-for="(i, k) in 12" :key="k" :span="5">
        <el-button plain type="primary" size="small" :class="{ currBtn: playpage === i }">{{ i }}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      playpage: 8
    }
  }
}
</script>
<style>
.drama-content .el-button {
  font-size: 16px;
  padding: 0;
  width: 45px;
  height: 2em;
  margin-bottom: 20px;
}
.drama-content .el-button.currBtn {
  background-color: #409EFF;
  border-color: #409EFF;
  color: #fff;
}
</style>
