<template>
  <el-row :gutter="10">
    <el-col v-for="(m, index) in datalist" :key="index" :span="4">
      <div style="margin-bottom: 15px;">
        <router-link :to="'movieDetail/' + m.id" class="poster">
          <img :src="m.post_url">
          <!-- <span class="score"></span> -->
        </router-link>
        <div class="itemDesc">
          <p class="title">
            <router-link :to="'movieDetail/' + m.id">{{ m.title }}</router-link>
          </p>
          <p class="subtitle">{{ m.keywords }}</p>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    datalist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.itemDesc {
  padding: 5px;
}
.itemDesc p {
  margin: 0;
  font-size: 13px;
  text-align: left;
}
.itemDesc p.title {
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.itemDesc p.title a {
  color: #333;
  text-decoration: none;
}
.itemDesc p.title a:hover {
  color: #148aff;
}
.itemDesc p.subtitle {
  font-size: 12px;
  line-height: 18px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.poster {
  display: block;
  position: relative;
  overflow: hidden;
  padding-top: 150%;
  background-color: #efefef;
}
.poster img {
  position: absolute;
  width: 100%;
  height: auto;
  top: 50%;
  left: 0;
  border-radius: 4px;
  display: block;
  transform: translate(0, -50%);
}
.poster:hover {

}
.poster .score {
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 14px;
  color: #ff5711;
  font-weight: 700;
}
</style>
