<template>
  <el-row :gutter="10">
    <el-col :span="8">
      <div v-if="datalist && datalist[0]">
        <router-link :to="'movieDetail/' + datalist[0].id" class="poster">
          <img :src="datalist[0].post_url">
          <!-- <span class="update"></span> -->
        </router-link>
        <div class="itemDesc itemBig">
          <p class="title">
            <router-link :to="'movieDetail/' + datalist[0].id">{{ datalist[0].title }}</router-link>
          </p>
          <p class="subtitle">{{ datalist[0].keywords }}</p>
        </div>
      </div>
    </el-col>
    <el-col :span="16">
      <el-row :gutter="10">
        <el-col v-for="(m, index) in tvlist" :key="index" :span="6">
          <div>
            <router-link :to="'movieDetail/' + m.id" class="poster">
              <img :src="m.post_url">
              <!-- <span class="update"></span> -->
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
  },
  computed: {
    tvlist() {
      var list = this.datalist.concat()
      list.shift()
      return list
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
  padding-top: 55%;
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
.poster .update {
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 12px;
  color: #fff;
}
.itemBig {
  padding: 20px 0 25px 20px;
  background-color: #ebedf0;
}
.itemBig p.title {
  font-size: 18px;
  line-height: 24px;
  height: 24px;
  margin-bottom: 6px;
}
.itemBig p.subtitle {
  font-size: 12px;
  height: 18px;
}
</style>
