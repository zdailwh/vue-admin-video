<template>
  <el-container>
    <el-header class="fixedHead">
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18" style="margin: 0 auto;float: none;">
          <Header />
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <router-view />
      <Login />
    </el-main>

    <el-footer style="margin-top: 100px;">
      <Footer />
    </el-footer>

    <div class="page-component-up" :style="upDisplay" @click="topFunction">
      <i class="el-icon-caret-top" />
    </div>
  </el-container>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Login from '@/components/Login'
export default {
  components: { Header, Footer, Login },
  data() {
    return {
      upDisplay: { display: 'none' }
    }
  },
  mounted() {
    var _this = this
    window.onscroll = function() {
      _this.scrollFunction()
    }
  },
  methods: {
    scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.upDisplay = { display: 'block' }
      } else {
        this.upDisplay = { display: 'none' }
      }
    },
    topFunction() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style scoped>
.page-component-up {
  background-color: #fff;
  position: fixed;
  right: 100px;
  bottom: 150px;
  width: 40px;
  height: 40px;
  size: 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: .3s;
  box-shadow: 0 0 6px rgba(0,0,0,.12);
  z-index: 5;
}
.page-component-up i {
  color: #409eff;
  display: block;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
}
</style>
