<template>
  <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18" style="margin: 0 auto;float: none;">
      <div style="max-width: 500px;margin: 40px auto;">
        <el-form ref="regForm" :model="regForm" status-icon :rules="rules" label-width="120px" class="demo-regForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="regForm.username" autocomplete="off" placeholder="用户名" />
          </el-form-item>
          <el-form-item label="手机号码" prop="mobile">
            <el-input v-model="regForm.mobile" autocomplete="off" placeholder="手机号码" />
          </el-form-item>
          <el-form-item label="设置密码" prop="password">
            <el-input v-model="regForm.password" type="password" autocomplete="off" placeholder="6-16位字符、数字和符号" />
          </el-form-item>
          <el-form-item label="确认密码" prop="password2">
            <el-input v-model="regForm.password2" type="password" autocomplete="off" placeholder="确认密码" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%;" @click="handleReg('regForm')">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      regForm: {
        mobile: '',
        password: '',
        password2: '',
        username: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        password2: [
          { required: true, message: '请输入确认密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleReg(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('authentication/register', this.regForm).then(() => {
            this.$router.push('/index/main')
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
