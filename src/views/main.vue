<template>
  <div>
    <Carousel />

    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18" style="margin: 0 auto;float: none;">
        <div class="cateCont">
          <router-link to="/index/movie" class="tabCate">电影</router-link>
          <el-tabs v-model="activeNameMovie" @tab-click="handleClickMovie">
            <el-tab-pane label="热播" name="first">
              <MovieList :datalist="movieList" />
            </el-tab-pane>
            <!-- <el-tab-pane label="免费" name="second">免费</el-tab-pane>
            <el-tab-pane label="好莱坞" name="third">好莱坞</el-tab-pane>
            <el-tab-pane label="预告片" name="fourth">预告片</el-tab-pane> -->
          </el-tabs>
        </div>
        <div class="cateCont">
          <router-link to="/index/series" class="tabCate">剧集</router-link>
          <el-tabs v-model="activeNameTv" @tab-click="handleClickTv">
            <el-tab-pane label="最新" name="first">
              <TvList :datalist="seriesList" />
            </el-tab-pane>
            <!-- <el-tab-pane label="大陆剧" name="second">大陆剧</el-tab-pane>
            <el-tab-pane label="日韩剧" name="third">日韩剧</el-tab-pane>
            <el-tab-pane label="港台剧" name="fourth">港台剧</el-tab-pane>
            <el-tab-pane label="英美剧" name="fiveth">英美剧</el-tab-pane> -->
          </el-tabs>
        </div>
        <div class="cateCont">
          <router-link to="/index/ent" class="tabCate">综艺</router-link>
          <el-tabs v-model="activeNameTv" @tab-click="handleClickZy">
            <el-tab-pane label="最新综艺" name="first">
              <TvList :datalist="entList" />
            </el-tab-pane>
            <!-- <el-tab-pane label="综艺真人秀" name="second">综艺真人秀</el-tab-pane>
            <el-tab-pane label="感情访谈" name="third">感情访谈</el-tab-pane>
            <el-tab-pane label="喜剧大咖" name="fourth">喜剧大咖</el-tab-pane> -->
          </el-tabs>
        </div>
        <div class="cateCont">
          <router-link to="/index/anime" class="tabCate">动漫</router-link>
          <div style="padding-top: 55px">
            <HotList :datalist="animeList" />
          </div>
        </div>

        <div class="cateCont">
          <router-link to="/" class="tabCate">音乐</router-link>
          <div style="padding-top: 55px">
            <HotList :datalist="musicList" />
          </div>
        </div>

        <div class="cateCont">
          <router-link to="/" class="tabCate">教育</router-link>
          <div style="padding-top: 55px">
            <HotList :datalist="eduList" />
          </div>
        </div>

        <div class="cateCont">
          <router-link to="/" class="tabCate">旅游</router-link>
          <div style="padding-top: 55px">
            <HotList :datalist="travelList" />
          </div>
        </div>

        <div class="cateCont">
          <router-link to="/index/doc" class="tabCate">纪录片</router-link>
          <div style="padding-top: 55px">
            <HotList :datalist="docList" />
          </div>
        </div>

        <div class="cateCont">
          <router-link to="/index/short" class="tabCate">短视频</router-link>
          <div style="padding-top: 55px">
            <HotList :datalist="shortList" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import MovieList from '@/components/MovieList'
import TvList from '@/components/TvList'
import HotList from '@/components/HotList'
import { getMovieList, getSeriesList, getEntList, getAnimeList, getDocList, getMusicList, getEduList, getTravelList, getShortList } from '@/api/table'
export default {
  components: { Carousel, MovieList, TvList, HotList },
  data() {
    return {
      activeNameMovie: 'first',
      activeNameTv: 'first',
      movieList: [],
      seriesList: [],
      entList: [],
      animeList: [],
      docList: [],
      shortList: [],
      musicList: [],
      eduList: [],
      travelList: []
    }
  },
  mounted() {
    this.getMovieList()
    this.getSeriesList()
    this.getEntList()
    this.getAnimeList()
    this.getDocList()
    this.getShortList()
    this.getMusicList()
    this.getEduList()
    this.getTravelList()
  },
  methods: {
    handleClickMovie(tab, event) {
      this.getMovieList(tab.name)
    },
    getMovieList(category = 'first', page = 0, per_page = 6) {
      var params = {
        page: page,
        per_page: per_page,
        category: category
      }
      getMovieList(params).then(response => {
        this.movieList = response.data.items || []
      }).catch(error => {
        console.log(error)
      })
    },
    handleClickTv(tab, event) {
      this.getSeriesList(tab.name)
    },
    getSeriesList(category = 'first', page = 0, per_page = 9) {
      var params = {
        page: page,
        per_page: per_page,
        category: category
      }
      getSeriesList(params).then(response => {
        this.seriesList = response.data.items || []
      }).catch(error => {
        console.log(error)
      })
    },
    handleClickZy(tab, event) {
      this.getEntList(tab.name)
    },
    getEntList(category = 'first', page = 0, per_page = 9) {
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
    },
    getAnimeList(category = 'first', page = 0, per_page = 6) {
      var params = {
        page: page,
        per_page: per_page,
        category: category
      }
      getAnimeList(params).then(response => {
        this.animeList = response.data.items || []
      }).catch(error => {
        console.log(error)
      })
    },
    getDocList(category = 'first', page = 0, per_page = 6) {
      var params = {
        page: page,
        per_page: per_page,
        category: category
      }
      getDocList(params).then(response => {
        this.docList = response.data.items || []
      }).catch(error => {
        console.log(error)
      })
    },
    getShortList(category = 'first', page = 0, per_page = 6) {
      var params = {
        page: page,
        per_page: per_page,
        category: category
      }
      getShortList(params).then(response => {
        this.shortList = response.data.items || []
      }).catch(error => {
        console.log(error)
      })
    },
    getMusicList(category = 'first', page = 0, per_page = 12) {
      var params = {
        page: page,
        per_page: per_page,
        category: category
      }
      getMusicList(params).then(response => {
        this.musicList = response.data.items || []
      }).catch(error => {
        console.log(error)
      })
    },
    getEduList(category = 'first', page = 0, per_page = 6) {
      var params = {
        page: page,
        per_page: per_page,
        category: category
      }
      getEduList(params).then(response => {
        this.eduList = response.data.items || []
      }).catch(error => {
        console.log(error)
      })
    },
    getTravelList(category = 'first', page = 0, per_page = 6) {
      var params = {
        page: page,
        per_page: per_page,
        category: category
      }
      getTravelList(params).then(response => {
        this.travelList = response.data.items || []
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
</style>
