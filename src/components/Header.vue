<template>
  <el-menu
    mode="horizontal"
    :router="true"
    :default-active="menuSel"
    background-color="transparent"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <li style="float: left;height: 60px;line-height: 60px;"><img :src="logo" class="headLogo"></li>
    <el-menu-item index="/index/main">首页</el-menu-item>
    <el-menu-item index="/index/movie">电影</el-menu-item>
    <el-menu-item index="/index/series">剧集</el-menu-item>
    <el-menu-item index="/index/ent">综艺</el-menu-item>
    <el-menu-item index="/index/anime">动漫</el-menu-item>
    <el-menu-item index="/index/doc">纪录片</el-menu-item>
    <el-menu-item index="/index/short">短视频</el-menu-item>

    <!-- <li style="float: left; height: 60px; line-height: 60px; padding: 0 10px;" class="hidden-md-and-down">
      <el-input v-model="search" placeholder="请输入内容" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" />
      </el-input>
    </li> -->

    <!-- <el-menu-item index="/index/videos" style="float: right;"><svg-icon icon-class="see user" style="font-size: 18px; margin-right: 5px;" />用户名</el-menu-item>
    <el-menu-item index="/index/upload" style="float: right;"><i class="el-icon-upload" style="color: inherit;" />上传</el-menu-item> -->
    <el-submenu index="" style="float: right;">
      <template slot="title"><svg-icon icon-class="see user" style="font-size: 18px; margin-right: 5px;" />{{ name }}</template>
      <template v-if="token">
        <el-menu-item index="/index/videos">内容管理</el-menu-item>
        <el-menu-item index="/index/upload">上传</el-menu-item>
        <el-menu-item index="" @click="logout">退出登录</el-menu-item>
      </template>
      <template v-else>
        <el-menu-item index="" @click="$store.commit('app/SET_SHOWLOGIN', true)">登录</el-menu-item>
      </template>
    </el-submenu>
  </el-menu>
</template>
<script>
import { mapGetters } from 'vuex'
import DOXTV from '@/assets/logo_doxtv.jpg'
import KUDOU from '@/assets/logo_kudou.png'
import YOUQI from '@/assets/logo_youqi.png'
import KUAIXIU from '@/assets/logo_kuaixiu.png'
export default {
  data() {
    return {
      menuSel: '',
      search: ''
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'token'
    ]),
    logo() {
      if (this.$store.state.settings.platform === 'DOXTV') {
        return DOXTV
      } else if (this.$store.state.settings.platform === '酷豆网') {
        return KUDOU
      } else if (this.$store.state.settings.platform === '优奇视频') {
        return YOUQI
      } else if (this.$store.state.settings.platform === '快秀短视频') {
        return KUAIXIU
      } else {
        return DOXTV
      }
    }
  },
  watch: {
    $route(value, oldValue) {
      this.menuSel = value.path
      if (value.path.indexOf('movieDetail') !== -1) {
        this.menuSel = ''
      }
    }
  },
  mounted() {
    this.menuSel = this.$route.path
  },
  methods: {
    handleSelect(sel) {
      this.menuSel = sel
    },
    logout() {
      this.$store.dispatch('authentication/logout').then(() => {
        this.$router.push({ path: '/' })
      }).catch(() => {
      })
    }
  }
}
</script>
<style scoped>
.headLogo {
  height: 50px;
  width: auto;
  margin-top: 5px;
}
</style>
