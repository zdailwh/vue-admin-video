<template>
  <div>
    <Carousel />

    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18" style="margin: 0 auto;float: none;">
        <div class="cateCont">
          <router-link to="/index/movie" class="tabCate">正在热播</router-link>
          <div style="padding-top: 55px">
            <MovieList :datalist="entList" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Carousel from '@/components/Carousel'
import MovieList from '@/components/MovieList'
import { getEntList } from '@/api/table'
export default {
  components: { Carousel, MovieList },
  data() {
    return {
      entList: []
    }
  },
  mounted() {
    this.getEntList()
  },
  methods: {
    getEntList(category = 'first', page = 0, per_page = 6) {
      var params = {
        page: page,
        per_page: per_page,
        category: category
      }
      getEntList(params).then(response => {
        this.entList = response.data.items || []
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
.cateCont {
  position: relative;
  margin: 10px 0;
}
.cateCont + .cateCont {
  margin-top: 30px;
}
.tabCate {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 24px;
  color: #333;
  line-height: 55px;
  text-decoration: none;
  font-weight: 700;
  z-index: 1;
}
.tabCate:hover {
  color: #148aff;
}
</style>
