<template>
  <el-dialog
    title="登录"
    :visible.sync="dialogVisible"
    width="300px"
    @close="dialogClose"
  >
    <el-form ref="loginForm" :model="loginForm" status-icon :rules="rules" label-width="0">
      <el-form-item label="" prop="username">
        <el-input v-model="loginForm.username" autocomplete="off" placeholder="手机/邮箱/用户名" />
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" placeholder="登录密码" />
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" style="width: 100%;" @click="handleLogin('loginForm')">登 录</el-button>
      </el-form-item>
      <p>
        <router-link to="/index/register">
          <el-button type="text">注册</el-button>
        </router-link>
      </p>
    </el-form>
  </el-dialog>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  computed: {
    ...mapGetters([
      'token',
      'showLogin'
    ]),
    dialogVisible: {
      get: function() {
        return !this.token && this.showLogin
      },
      set: function() {
      }
    }
  },
  watch: {
    $route(value, oldValue) {
      if (this.$route.path === '/index/register') {
        this.$store.commit('app/SET_SHOWLOGIN', false)
      } else {
        this.$store.commit('app/SET_SHOWLOGIN', true)
      }
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('authentication/login', this.loginForm).then(() => {
            this.$store.commit('app/SET_SHOWLOGIN', false)
            this.$router.push({ path: '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    dialogClose() {
      this.$store.commit('app/SET_SHOWLOGIN', false)
    }
  }
}
</script>
